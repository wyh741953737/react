import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
// import { Loading } from '@components'
import './home.css'
import Banner from './banner/index'
import Category from './category/index'
import Recommends from './recommend/index'
import FlashSale from './flash-sale/index'
import Products_item from './products_item/index'
const RECOMMEND_SIZE = 20
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    homeImages: [],
    Products: [],
    Recommend:[],
    Category:[],
    loading:false,
    loaded:false,
    lastItemId:0,
    hasmore:true
  }

  componentWillMount() { }
  componentDidMount() {
    const db = wx.cloud.database()
    const homeImages = db.collection('home_images')
    const Products = db.collection('products')
    const Recommend = db.collection('recommends')
    const Category=db.collection('category')
    homeImages.get().then(res => {
      this.setState({
        homeImages: res.data,
        Products: res.data,
        Recommend:res.data,
        Category:res.data

      })
    })
    // this.props.dispatchHome().then(()=>{
    //   this.setState({ loading: true })
    // })
    // this.loadRecommend()
  }
// loadRecommend=()=>{
//   if(!this.state.hasmore || this.state.loading ){
//     return
//   }
//   const payload={
//     lastItemId:this.state.lastItemId,
//     size:RECOMMEND_SIZE
//   }
//   this.setState({ loading:true })
//   this.props.dispatchRecommend(payload).then((res)=>{
//     const lastItem=res.itemList[res.itemList.length-1]
//     this.setState({
//       loading:false,
//       hasmore:res.hasmore,
//       lastItemId:lastItemId && lastItem.id
//     })
//   }).catch(()=>{
//     this.setState({
//       loading:false
//     })
//   })
// }



  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  handlePrevent = () => {

  }
  render() {
    const { homeImages, Products,Recommend,TimeLimit } = this.state;
    // console.log(homeImages);
    // console.log(Recommend);
    // //判断是否处在加载状态
    //    if(!this.state.loading)
    //           {
    //                  return <Loading/>
    //           }

    return <View className="home">
      <View className='home__search'>
        {/* <View className='home__search-wrap' onClick={this.handlePrevent}>
            <Image className='home__search-img'  />
            <Text className='home__search-txt'>
              {`搜索商品，共${searchCount}款好物`}
            </Text>
          </View> */}
      </View>
      <ScrollView scrollY
        className='home__wrap'
      // onScrollToLower={this.loadRecommend}
      // style={{ height: getWindowHeight() }}
      >
        <View onClick={this.handlePrevent}>
          <Banner />
        </View>
        <FlashSale
        // data={TimeLimit.flashSale}
          />

        <Products_item />
        <Recommends/>
        {/* {this.state.loading && 
        <View className="home_loading">
        <Text className="home_loading-text">正在加载</Text>
        </View>}
        {!this.state.hasmore &&
        <View className="home_loading-text">更多内容，敬请期待
        </View>
        } */}
       
      </ScrollView>

    </View>
  }
}