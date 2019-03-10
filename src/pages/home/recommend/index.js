
import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import './index.css'
const db = wx.cloud.database()
export default class Recommends extends Component {
  state = {
    category: [],
      loaded: false,
      loading: false,
     currentArray:[],
      currentId:null,
      hasMore: true,
      size:5
    }
  componentWillMount(){
db.collection('category')
.count()
.then(res=>{
  this.setState({
    currentId:res.total
  })
})

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
handleClick=(item)=>{
 Taro.navigateTo({
   url:``
 })
}
loadproduct=(e)=>{
  console.log(e)
  const { currentId,category ,hasMore,currentArray}=this.state
  console.log(category)//5条数据
  console.log(currentId)
  console.log(currentArray)
  //undifiend

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

  render() {
    // if (!this.state.loaded) {
    //   return <Loading />
    // }
    const { category } = this.state;
    return (
  <View className='recommend-products-wrap'>
     <View className="you-like"><Text>猜你喜欢</Text></View>
    <ScrollView 
     scrollY
     scrollWithAnimation
     scrollTop='0'
    
     lowerThreshold='40'
     upperThreshold='20'
     onScrolltoupper={this.onScrolltoupper}
     onScrollToLower={this.loadproduct}
    >

    <View className="recommend-product">
          {category.map((item, index) => (
            <View
              key={index}
              className='recommend-total_height'
              onClick={this.handleClick.bind(this, item)}
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

