import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
//import Cart from  '../cart-module'
import selected from '../../../assets/tab-bar/seleced.png'
import deleted from '../../../assets/tab-bar/delete.png'
import unselect from '../../../assets/tab-bar/unse.png'
import './index.css'
//const cart = new Cart();
export default class Product extends Component {

 state={
   cartData:[],
   totalPrice:''
 }
changeSecect=(e)=>{
  let s= e.currentTarget.dataset._id
  const cartData=Taro.getStorageSync('product')
  this.get(s,cartData) 
}
get=(s,cartData)=>{
  for(var i=0;i<cartData.length;i++){
    if(cartData[i]._id==s){
      cartData[i].selected=!cartData[i].selected
       Taro.setStorageSync('product', cartData)
     }  
     
  }
  
}
pay=()=>{
  const cartData=Taro.getStorageSync('product')
   let total=0
  let multiple=100
  for(var i=0;i<cartData.length;i++){
    if(cartData[i].selected){
      total+=cartData[i].price * multiple * Number(cartData[i].counts) * multiple
      console.log(total)
     }  
     this.setState({
      totalPrice:total / (multiple * multiple )
     })
     
  }
}
componentDidMount(){
  const cartData=Taro.getStorageSync('product')
   this.setState({
    cartData:cartData
  })
}
componentWillReceiveProps(){
  this.pay()
}

  render() {
   var  { cartData ,totalPrice }=this.state
    return (
      <View>
        {cartData.map((item,index)=>(
    <View className='wraps' key={index}>
       <View className='car_product'>      
        <View className='car_shopname'>
        <View className='box' onClick={this.changeSecect}data-_id={item._id} ><Checkbox className='checkbox-list__checkbox'color='red' checked={item.shopSelected}></Checkbox></View>
        <View className='type-name'>网易考拉</View>
        </View>
        <View className='cat_product_detail'>
          <View className='box' onClick={this.changeSecect}data-_id={item._id} ><Checkbox className='checkbox-list__checkbox'color='red'checked={item.selected}></Checkbox></View>
              <View className='shop-wrap'><Image className='img' src={item.url}/></View>
              <View className='cat_product_detail_right'>
                    <View className='cat_product_title'><Text>{item.title}</Text></View>
                    <View className='price_and_count'>
                          <View className='cat_product_price'>￥{item.price}</View>
                          <View className='cat_product_button'>
                                <View className='count less' onClick={this.less} data-_id={item._id}>-</View>
                                <View className='count number'>{item.counts}</View>
                                <View className='count more' onClick={this.more}>+</View>
                         </View>
                    </View>
                    <View className='delete'><Image className='delete_icon' src={deleted}/></View>
             
        </View>
        </View>
       </View>
       <View className='border-device'></View>

      
       </View>
       ))}
       
             <View className='total_price'>
           
             <View className='box total' onClick={this.productChoose}><Checkbox className='checkbox-list__checkbox'color='red' checked={item.selected}></Checkbox></View>
             <View className='select-all'>全选</View>
             <View className='total-right'>
                  <View>总计(不含税)：￥{this.state.totalPrice}</View>
                  <View>商品税费：￥0.00</View>
             </View>
             <View className='gopay' onClick={this.pay}>结算</View>
             </View>
          
       </View>

    )
  }
}
