import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'

import selected from '../../../assets/tab-bar/seleced.png'
import deleted from '../../../assets/tab-bar/delete.png'
import unselect from '../../../assets/tab-bar/unse.png'
import './index.css'
export default class Product extends Component {
 
  static defaultProps = {
    cartData: [],
    isSelected:false
  }
state={
  isSelected:true
}
productChoose=(e)=>{
console.log(this)

}
  render() {
    const { cartData }=this.props
    return (
      <View>
        {cartData.map((item,index)=>(
    <View className='wraps' key={index}>
       <View className='car_product'>      
        <View className='car_shopname'>

        <View className='box'><Image className='select_icon'src={isSelected?unselect:selected}/></View>
        <View className='type-name'>网易考拉</View>
        </View>

        <View className='cat_product_detail'>
        <View className='box' onClick={this.productChoose}>
        <Image className='select_icon' src={isSelected?unselect:selected}/></View>
              <View className='shop-wrap'><Image className='img' src={item.url}/></View>
              <View className='cat_product_detail_right'>
                    <View className='cat_product_title'><Text>{item.title}</Text></View>
                    <View className='price_and_count'>
                          <View className='cat_product_price'>￥{item.price}</View>
                          <View className='cat_product_button'>
                                <View className='count less' onClick={this.less}>-</View>
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
           
             <View className='box total' onClick={this.productChoose}><Image className='select_icon' src={isSelected?unselect:selected}/></View>
             <View className='select-all'>全选</View>
             <View className='total-right'>
                  <View>总计(不含税)：￥110.00</View>
                  <View>商品税费：￥0.00</View>
             </View>
             <View className='gopay'>结算</View>
             </View>
          
       </View>

    )
  }
}
