import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image,Progress, SwiperItem } from '@tarojs/components'
import { HomeTitle } from '@components'
import './index.css'
import arrowRight from './arrow-right.png'
import TimeLimit_buy from '../../TimeLimit_buy/timelimit_buy'
import TimeSwaper from './flashitem/index'
// const PER_SWIPER_NUM = 3;
const db = wx.cloud.database()
export default class FlashSale extends Component {
constructor(){
  super();
  this.state = {
    category: [],
      count:3600,
      CategoryTotal: null,
      currentIndex: 0,
    }
  
      let count=this.state.count
      const m=new Date().getMinutes();
      const mins=parseInt(m * 60);
      const s= new Date().getSeconds();     
      const least=count-m-s 
      const timer=setInterval(()=>
      {
        if(least>0){
        this.setState(
          {
          count:count--
        },()=>{//this.state 和 props 一定是异步更新的，所以你不能在 setState 马上拿到 state 的值
          //在 setState 的第二个参数传入一个 callback： 在这个函数内你可以拿到 setState 之后的值
          if(least===0){
            clearInterval(timer);
            this.setState({
              count:3600,
              })
           }
           })
              }
      },1000)
    }

    componentWillMount() {
      
      this.handleFetchProducts();
    }
  componentDidMount() {  
    db.collection('category')
      .count()
      .then(res => {
        this.setState({
          CategoryTotal: res.total
        });
      })
     
  }
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  renderNum = (num) => num >= 10 ? num : `0${num}`

  handleClick=()=>{
    Taro.navigateTo({
      url: '../timelimit/index?id=2'
    })
  }

  handleSwiperChange = (e) => {
    this.setState({
      currentIndex: e.detail.current
    }, () => {
      this.handleFetchProducts()
    })
  }
  handleFetchProducts = () => {
    // 根据 currentIndex 获取每页对应的 数据
    const { currentIndex } = this.state;
    db.collection('category')
      .skip(currentIndex * 3)
      .limit(3)
      .get()
      .then((res) => {
        this.setState({
          category: res.data
        })
      })
  }
  naviagtorTolimit= (e) =>{
    Taro.navigateTo({
  
       url:`/pages/home/productLimit/index`
   
    })
  }
  handlenaviga=()=>{
    Taro.navigateTo({
      url:`/pages/item/index`
   })
  }
  render () {
    const timestamp=new Date().getHours()
    const { count,category ,CategoryTotal} = this.state 
    const maxPage = Math.ceil(CategoryTotal / 3);
    const mapSwiperArray = new Array(maxPage).fill().map((_, i) => i);
    const m=new Date().getMinutes();
    const mins=parseInt(m * 60);
    const s= new Date().getSeconds();    
    const hou=Math.floor((count-mins-s)/ 3600);
    const miunt=Math.floor( (count-mins-s) / 60);
    const second=Math.floor((count-mins-s)% 60);
      return(
<View className="time-wrap">
          
                  <View className="time-limit" onClick={this.naviagtorTolimit} >
                        <View className="time-limit_purchase"><Text>限时购</Text></View>
                         <View className='home-flash-sale__cnt'>
                                  <Text className='home-flash-sale__cnt-time'> {this.renderNum(parseInt(hou))} </Text>
                                  <Text className='home-flash-sale__cnt-split'>:</Text>
                                  <Text className='home-flash-sale__cnt-time'> {this.renderNum(parseInt(miunt))}</Text>
                                  <Text className='home-flash-sale__cnt-split'>:</Text>
                                  <Text className='home-flash-sale__cnt-time'> {this.renderNum(second)} </Text> 
                                  <Text>{timestamp}点场</Text>
                        </View> 
                        <View className='comp-home-title__link' onClick={this.handleClick}>
                              <Text className='comp-home-title__link-txt'>查看更多</Text>
                              <Image className='comp-home-title__link-img' src={arrowRight} />
                        </View>

                  </View>

<View className="recommend-product">
         
{category.map((item, index) => (               
  <View   key={index}  className='recommend-total_height' data-price={item.price} onClick={this.handlenaviga.bind(this)}  >
     <View className="image-wrap"><Image className='recommend-img'  src={item.url}  /></View>       
     <View className="recommend_price"> 
             <View className="recommend-product_title"><Text className="recommend-title"  >{item.title}</Text></View>
             <View className="active"> <View className="active-count">{item.product_image.count1}折</View><View className="active-count charge"><Text>{item.product_info.cuxiao}</Text></View></View>
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




                <View className="time-more">更多场次 ></View>
</View>
      )
  }
}




