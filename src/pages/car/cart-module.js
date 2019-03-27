import Taro, { Component } from '@tarojs/taro'
import flashSale from '../../../dist/pages/home/flash-sale';
// import { Card } from 'antd';
export default class Cart extends Component {

     add = (item, counts) => { //item用户加入购物车的对象,count用户加入的数量
    var cartData = this.getCartDataFromLocal(); //从本地获取购物车记录  
    console.log(item._id)
    const isHasInfo = cartData.findIndex((product) => product._id === item._id);//获取数组中符合条件（product的_id和加入购物车的_id相等）元素的下标。
   
    if (isHasInfo === -1) { //如果购物车没有这样的商品，直接添加一条新纪录，数量为counts
      item.counts = counts; //这个商品的数量为count
     item.selected=true;
     item.shopSelected=true
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
  getCartTotalCounts(flag){
    var totalCount = this.getCartDataFromLocal(); 
    var count=0
    for (let i=0;i<totalCount.length;i++){
      if(flag){
        if(totalCount[i].selected){
          count+=totalCount[i].counts;
        }
      }else{
        count+=totalCount[i].counts
      }
    }
    return count
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
  if(isCollect===-1 ){//如果没有收藏过
    item.isCollected=true
    CollectData.push(item)
    Taro.showToast({
      title: '收藏成功！',
      icon: 'success',
      duration: 2000
    })
  }else{//收藏了，点击取消
  for(let i=0;i<CollectData.length;i++){
    if(CollectData[i]._id==item._id){//找到对应数据
      if(CollectData[i].isCollected==true){//如果这条数据状态为收藏
        CollectData[i].isCollected=false
        Taro.showToast({
          title: '取消成功！',
          icon: 'success',
          duration: 2000
        })
      }//否则数据状态为未收藏
      else{
        CollectData[i].isCollected=true
        Taro.showToast({
          title: '收藏成功！',
          icon: 'success',
          duration: 2000
        })
      }
    }
  }
  }
  Taro.setStorageSync('likesCollect',CollectData)
 }
 getDataFromLocal = () => {
  var res = Taro.getStorageSync('likesCollect') || [];
  return res;
}
}
