// import React, { Component } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'
export default class Product extends Component {

  static defaultProps = {
    products: []
  }
handlePrevent=()=>{
  Taro.showToast({
    title: '目前只可点击底部推荐商品',
    icon: 'none'
  })
}
  render() {
    const { products } = this.props
    return (
      <View className='home-product'  onClick={this.handlePrevent}   >
        {  products.map((item, index) => (
            <View key={index} className='home-product_item'>
              <View className="pic">
                <View className="home-product_img">
                  <Image
                    className='home-product_item-img'
                    src={item.url}
                  /></View>
                <View className="home-product_count"><Text className="count_text">已团tem件</Text></View></View>
                <View className="border_devide"></View>
              <View className="home-product_price">
                <View className="home-product_tuan"><Text className="tuan_price">2人团￥<Text className="price">{item.double_price}</Text></Text></View>
                <View className="home-product_single"><Text className="single_price">单价买￥{item.single_price}</Text></View>
                <View className="home-product_go" ><Text className="go">去拼团</Text></View>
              </View>
            </View>
          ))
        }
      </View>
    )
  }
}
