import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text, Modal } from '@tarojs/components';
// import Info from './info/index'
import './index.css'
import loadimg from './more/loading.gif'
import title8 from './more/title8.png'
import wave from './more/wave.png'
// import word from './more/confirm-word1.png'
export default class Welcome extends Component{

state={  
        visible: false ,
        remind: '加载中',
        angle: 0,
        userInfo: {
          avatarUrl: 'http://imgaliyuncdn.miaopai.com/user-icon/-48l-E9h1hzmwh2e_1530869350338.jpg'
        }
}

 componentWillMount(e){
  setTimeout(() => {
    this.setState({
      remind: ''
    });
  }, 1000);
  Taro.onAccelerometerChange((res) => {
    let angle = -(res.x * 30).toFixed(1);
    if (angle > 14) { angle = 14; }
    else if (angle < -14) { angle = -14; }
    if (this.data.angle !== angle) {
      this.setState({
        angle: angle
      });
    }
  });
//   console.log(e)
//   console.log(this)
//   Taro.showModal({
//     title: '微信授权',
//     content: '获得您的公开信息（昵称，头像）等',
//     success: function(res) {
//       console.log(res)
//       console.log(this)
//     if (res.confirm) {
//       let userInfo = JSON.parse(e.detail.detail.rawData)
//       if (!userInfo) {
//         return;
//       }
//       this.setState({
//         userInfo: userInfo
//       })
//      Taro.setStorageSync('userInfo', userInfo)
//     } else if (res.cancel) {
//     console.log('用户点击取消')
//     }
//     }
//     })
 }
 goToIndex() {
  Taro.switchTab({
    url: '../home/home',
  });
}
    render(){
        return(
          <View className='wrap'>
            <View className="container">
 <View className="remind-box" >
    <Image className="remind-img" src={loadimg}></Image>
  </View>
<View>
  <Image className="title" src={title8}></Image>
  <View className="content">
    <View className="hd" style="transform:rotateZ({{angle}}deg);">
      <Image className="logo" src="{{userInfo.avatarUrl}}"></Image>
      <Image className="wave" src="./more/wave.png" mode="aspectFill"></Image>
      <Image className="wave wave-bg" src={wave} mode="aspectFill"></Image>
    </View>
  </View>
  </View> 
  <View>

      </View>
</View>
<View className="bd">
        <View className="confirm-btn" onClick={this.goToIndex}>
            <Text>去剁手吧</Text>
        </View>
        <Text className="copyright">欢迎体验网易考拉 关注微信@wyh</Text>
    </View>
</View>
        )
    }
}