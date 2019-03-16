import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
import shop from'../../../assets/tab-bar/cart.png'
import home from'../../../assets/tab-bar/home.png'
import selected from '../../../assets/tab-bar/seleced.png'
import unselected from '../../../assets/tab-bar/unse.png';
import './index.css'
export default class Product extends Component {
 
state={
  isSelected:true
}
  render() {
    return (
      <View>
       <View className='car_product'>
      
        <View className='car_shopname'>

        <View className='box'><Image className='select_icon'src={isSelected?selected:selected}/></View>
        <View>网易考拉</View>
        </View>

        <View className='cat_product_detail'>
        <View className='box'><Image className='select_icon' src={isSelected?selected:selected}/></View>
              <View className='shop-wrap'><Image className='img' src={shop}/></View>
              <View className='cat_product_detail_right'>
                    <View className='cat_product_title'><Text numberOfLines={2}  >发数据葵花回复v回复v反对将大幅恐慌v回复DVD反对法v价格高会见韩国官方官方v发生的v发</Text></View>
                    <View className='price_and_count'>
                          <View className='cat_product_price'>￥5223</View>
                          <View className='cat_product_button'>
                                <View className='count less'>-</View>
                                <View className='count number'>122</View>
                                <View className='count more'>+</View>
                         </View>
                    </View>
                    <View className='delete'><Image className='delete_icon' src={selected}/></View>
             
        </View>
        </View>
       </View>
       <View className='border-device'></View>
  
      </View>
    )
  }
}
