import Taro, { Component } from '@tarojs/taro'
import flashSale from '../../../dist/pages/home/flash-sale';

export default class Cart extends Component {
 state={
   isCollected:false,
   coled:[]

 }
     add = (item, counts) => { //item用户加入购物车的对象,count用户加入的数量
    var cartData = this.getCartDataFromLocal(); //从本地获取购物车记录  
    console.log(item._id)
    const isHasInfo = cartData.findIndex((product) => product._id === item._id);//获取数组中符合条件（product的_id和加入购物车的_id相等）元素的下标。
   
    if (isHasInfo === -1) { //如果购物车没有这样的商品，直接添加一条新纪录，数量为counts
      item.counts = counts; //这个商品的数量为count
      cartData.push(item);
      Taro.showToast({
        title: '加购成功！',
        icon: 'success',
        duration: 2000
      })
    } else { //如果有这个商品，就只是把数量加上去      
      cartData[isHasInfo].counts += counts; 
      Taro.showToast({
        title: '加购成功！',
        icon: 'success',
        duration: 2000
      })
    }
    Taro.setStorageSync('product', cartData)
  }
  //从缓存中读取购物车数据
  getCartDataFromLocal = () => {
    var res = Taro.getStorageSync('product') || [];
    return res;
  }
 colPro=(item)=>{
  const CollectData=this.getDataFromLocal()
  // console.log(CollectData)//输出三个商品所有数据
  const isCollect= CollectData.findIndex((likesCollect) => likesCollect._id=== item._id)
  
  if(isCollect===-1){//如果没有收藏过
    CollectData.push(item)
    Taro.showToast({
      title: '收藏成功！',
      icon: 'success',
      duration: 2000
    })
    this.setState({
      isCollected:true
    })
  }else{//收藏了，点击取消
    this.setState({
      isCollect:false
     })
    Taro.showToast({
      title: '取消成功！',
      icon: 'success',
      duration: 2000
    })
    var coll=item
    coll=!coll
  
    // Taro.setStorageSync('likesCollect',CollectData)

  }
  Taro.setStorageSync('likesCollect',CollectData)
 }
 getDataFromLocal = () => {
  var res = Taro.getStorageSync('likesCollect') || [];
  return res;
}
}
