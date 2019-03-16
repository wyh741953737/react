const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');
const mime = require('mime');
const crypto = require('crypto');

function send404(res, pathname) {
  res.writeHead(404, {"Content-Type": "text/plain"});
  res.end(`${pathname} is not found`);
}
const Expire = {
  fileMatch: /(gif|png|jpg|js|css)$/ig,
  maxAge: 60 * 60 * 24 * 365
}

// 静态资源目录
const staticPath = '/public/';

const app = http.createServer((req, res) => {
  const pathName = url.parse(req.url).pathname;
  const extname = path.extname(req.url);
  const filePath = path.join(__dirname, staticPath, pathName);
  console.log(filePath);
  const isFile = fs.existsSync(filePath);

  if (!isFile) {
    send404(res, pathName);
    return
  }
  fs.readFile(filePath, 'binary', (err, file) => {
    if (err) {
      res.writeHead(500, {"Content-Type": "text/plain"});
      res.end(err);
      return
    }
    // 缓存 Cache-Control 通用字段
    if (extname.match(Expire.fileMatch)) {
      let expire = new Date();
      expire.setTime(expire.getTime() + Expire.maxAge * 1000);
      res.setHeader('Expires', expire.toUTCString());
      res.setHeader("Cache-Control", "max-age=" + Expire.maxAge);
    }

    // Last-Modifiled if-modified-since
    let stat = fs.statSync(filePath);
    let lastModified = stat.mtime.toUTCString()
    res.setHeader("Last-Modified", lastModified)

    if (req.headers['if-modified-since'] &&
    lastModified === req.headers['if-modified-since']
    ) {
      res.writeHead(304, 'Not Modified');
      res.end();
      return
    }
    // if-none-match Etag
    let hashStr = fs.statSync(filePath).mtime.toUTCString()
    let hash = crypto.createHash('sha1')
    .update(hashStr)
    .digest('base64');
    if (req.headers['if-none-match'] &&
    req.headers['if-none-match'] == hash) {
      res.writeHead(304, 'Not Modified');
      res.end();
      return;
    }
    res.setHeader("Etag", hash);
    res.writeHead(200, {"Content-Type": mime.getType(extname)});
    res.write(file, 'binary');
    res.end();
  })

})
app.listen(3000, () => {
  console.log('server is running');
})