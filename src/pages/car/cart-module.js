import Taro, { Component } from '@tarojs/taro'
export default class Cart extends Component {
    constructor(){
        super();
        this.state={
            category:[]
        }
    }
componentDidMount() {
        // console.log(this.$router.preload._id)
        db.collection('category')
            .get()
            .then(res => {
                this.setState({ category: res.data })
            })
            console,log(category+'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    }
add=(item,counts)=>{//item用户加入购物车的对象,count用户加入的数量
    // const { _storageKeyName }=this.state
    var cartData=this.getCartDataFromLocal();//从本地获取购物车记录
         console.log(cartData+'取到数据啦')
    // var isHasInfo=this._isHasThatone(item._id,cartData);//如果有相关信息

    // if(isHasInfo.index==-1){//如果购物车没有这样的商品，直接添加一条新纪录，数量为counts
    //     item.counts=counts;//这个商品的数量为count
    //     item.selectStatus=true;//设置商品处于选中状态
    //     cartData.push(item);//将数据加入
    // }else{  //如果有这个商品，就只是把数量加上去
    //     cartData[isHasInfo.index].counts+=counts;//原有数量加上加入购物车的数量
    // }
    Taro.setStorageSync({key:'product',data:'cartData'})
}
// //从缓存中读取购物车数据
 getCartDataFromLocal=()=>{
    
    var res=Taro.getStorageSync({key:'product'});
    console.log(res)
    if(!res){//如果请求为空，置为空
    res:[]
    console.log('购物车是空的')
    }
    return res;
    }
// getCartTotalCount=(flag)=>{
//     var data=this.getCartDataFromLocal();
//     var counts;
//     for(let i=0;i< data.length;i++){
//         if(flag){
//             if(data[i].selectStatus){
//                 counts+=data[i].counts
//             }
//         }else{
//             counts+=data[i].counts
//         }
      
//     }
// }
//判断某个商品是否已经添加到购物车中，并且返回这个商品的数据以及在数组arr中的序号index
// _isHasThatone=(_id,arr)=>{//传入商品_id号，cartData有很多item，把这些item交给arr，arr就是一些要添加进购物车的商品
// var item //某件商品
// var result = { index:-1 } //result是一个对象，有一个初始值index
// for(let i=0;i<arr.length;i++){//遍历arr，取arr下面的id和当前传过来的id进行对比
//     item=arr[i]//
//     if(item._id==_id){//如果相等，说明缓存中存在当前添加的这个商品了
//         result={   //返回结果拼凑，index返回商品在缓存数组中的序号
//         index:i,        
//         data:item   //把商品属性返回    
//     };
//         break;
//     }
// }
//     return result;//将默认初始值返回回去
// }

 }