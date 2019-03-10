import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image,Progress } from '@tarojs/components'
import './index.css'
export default class Goods extends Component{
   constructor(){
       super();
       this.state={
       Category:[] 
    }
}
     componentDidMount() {
    const db = wx.cloud.database()
    const Category = db.collection('category')
    Category.get().then(res => {
      this.setState({
        Category: res.data
      })
    })
  }
    render(){
        const { Category }=this.state   
        return(
          <View>
            {Category.map((item, index) => (
          <View   key={index}  className='recommend-total_height'  >
          <View className="image-wrap"><Image className='recommend-img'  src={item.url}  /></View>       
          <View className="recommend_price"> 
                  <View className="recommend-product_title"><Text className="recommend-title"  >{item.title}</Text></View>
                  <View className="active"> <View className="active-count">6.7折</View><View className="active-count charge"><Text>券满{222}减{221}</Text></View></View>
                  <View className="go-purchase"> 
                           <View className="recommend-product_price"><Text>￥<Text className="price-reail">{item.price}</Text></Text></View>
                           <View className="go-purchase_buy"><Text>去抢购</Text></View>
                  </View>
                  <View className="progress">
                            <View className="recommend-product_oldprice" ><Text  className="product-oldprice">￥{item.oldprice}</Text></View>
                            <View className="progress-percent">
                                      <View className="progress_had"> <Text>已售12%</Text></View>
                                      <View className="progress-wrap">
                                               <Progress className="progress_num" border-radius='10' activeColor='red' percent={60}  strokeWidth={7}/>
                                       </View>
                            </View> 
                  </View>
           </View>
     </View>
            ))}
            </View>      
        )
    }
}