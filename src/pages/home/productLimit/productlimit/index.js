// import React, { Component } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'
export default class Product extends Component {


  static defaultProps = {
    category: []
  }
  // handlenaviga=(ev)=>{
  //   var that=this;
  //   var e=ev.currentTarget.dataset._id;
  //   this.$preload('_id', ev.currentTarget.dataset._id)
  //   console.log(e)
  //   Taro.navigateTo({
  //     url:`/pages/item/index`
  //  })
  // }
  render() {
    const { category } = this.props
    return (
      <View className='home-product'
      
      >
        {
          category
          .map((item, index) => (
        <View className='wrap'>
              <View   key={index}  className='recommend-total_height' >
                    <View className="image-wrap"><Image className='recommend-img'  src={item.url}  /></View>       
                    <View className="recommend_price"> 
                             <View className="recommend-product_title"><Text className="recommend-title"  >{item.title}</Text></View>
                             <View className="active"> 
                                      <View className="active-count">{item.product_image.count1}折</View>
                                      <View className="active-count charge"><Text>{item.product_info.cuxiao}</Text></View>
                            </View>
                            <View className="go-purchase"> 
                                      <View className="recommend-product_price"><Text>￥<Text className="price-reail">{item.price}</Text></Text></View>
                                      <View className="go-purchase_buy"><Text>去抢购</Text></View>
                            </View>
                            <View className="progress">
                                      <View className="recommend-product_oldprice" ><Text  className="product-oldprice">￥{item.oldprice}</Text></View>
                                      <View className="progress-percent">
                                             <View className="progress_had"> <Text>已售12%</Text></View>
                                             <View className="progress-wrap">
                                                       <Progress className="progress_num" border-radius='10' activeColor='red' percent={60} strokeWidth={7}/>
                                             </View>
                                      </View> 
                            </View>
                    </View>
                  
         </View> 
         <View className='device-line'></View>
</View>
      
          ))  }
      </View>
    )
  }
}
