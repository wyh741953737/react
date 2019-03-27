
import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import './index.css'
const db = wx.cloud.database()
export default class Recommends extends Component {
  state = {
    category: [],
      loading: false,
     currentArray:[],
      hasMore: true,
      size:5
    }
    componentDidMount() {  
      db.collection('category')
     .limit(5)
    .get()
    .then(res => {
      this.setState({
        category: res.data,  
        currentArray:res.data    
      })
    })
    } 

loadproduct = (e) => {
  console.log(e)
  const { category ,hasMore,currentArray}=this.state
  console.log(category)//5条数据
  //console.log(currentId)
  console.log(currentArray)
  

  if(!this.state.hasMore || this.state.isloading)
  {
   
    return
  }else{
  this.handleget()
}
}
handleget=(res)=>{
  db.collection('category')
    .get()
    .then(res => {
      this.setState({
        category: res.data,  
        currentArray:res.data ,
        loading:false   
      })
    })
}
handlenaviga=(ev)=>{
  var that=this;
  var e=ev.currentTarget.dataset._id;
  this.$preload('_id',e)
  Taro.navigateTo({
    url:`/pages/item/index`
 })
}
  render() {
    const { category } = this.state;
    return (
  <View className='recommend-products-wrap'>
     <View className="you-like"><Text>猜你喜欢</Text></View>
    <ScrollView 
     scrollY
     scrollWithAnimation
     scrollTop='0'
     lowerThreshold='30'
     onScrollToLower={this.loadproduct}
    >
    <View className="recommend-product">
          {category.map((item, index) => (
            <View
              key={index}
              data-_id={item._id} 
              className='recommend-total_height'
              onClick={this.handlenaviga}
            >
              <View className="image-wrap"><Image
                className='recommend-img'
                src={item.url}
              /></View>
    <View className="border_devide"></View>
           <View className="recommend-product_title"><Text className="recommend-title"  >{item.title}</Text></View>
           <View className="recommend_price"> 
           <View className="recommend-product_price"><Text>￥{item.price}</Text></View>
             <View className="recommend-product_oldprice" ><Text  className="product-oldprice">￥{item.oldprice}</Text></View>
</View>
       </View>
  
          ))}
       </View>
    </ScrollView>

      </View>
    )
  }

}

