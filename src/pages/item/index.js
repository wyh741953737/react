import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.css'
import Cart from '../car/cart-module'
import Share from '../../assets/user/share.png'
import arrowRight from '../../pages/home/flash-sale/arrow-right.png'
import Category from '../home/category';
const db = wx.cloud.database()
const cart = new Cart();
export default class Product_info extends Component {
  config = {
    navigationBarTitleText: '商品详情',
  }
  constructor() {
    super(...arguments)
    this.state = {
      current: 3,
      productCount: 1,
      category: [],
      currentIndex: 0,
     
    }
  }
  componentWillMount() {
    db.collection('category')
    .where({
      _id: this.$router.preload._id
    })
    .get()
    .then(res => {
      this.setState({
        category: res.data
      })
    })
}
  handleClick = () => {
    Taro.navigateTo({
      url: ``
    })
  }
  getMyLocation = () => {
    Taro.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        Taro.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  }
  navigatehome = () => {
    Taro.navigateTo({
      url: '/pages/home/home'
    })
  }
  navigategoodlist = (ev) => {
    var e = ev.currentTarget.dataset._id;
    this.$preload('_id', e)
    Taro.navigateTo({
      url: '../add/index'
    })
  }
  like = () => {
    const { category } = this.state;
    // console.log(category)
    // console.log(category[0])//输出整条数据
    if(!category[0]) return false; 
    cart.colPro(category[0])

  }
  render() {
    const { category } = this.state;
    return (
      <View>

        {category.map((item, index) => (
          <View className='home-banner'>
            <Swiper
              className='home-banner__swiper'
              circular
              autoplay
              indicatorDots
              indicatorActiveColor='rgb(178, 42, 49)'
            >
              <SwiperItem className='home-banner__swiper-item' >
                <Image className='home-banner__swiper-item-img' src={item.product_info.info1} />
              </SwiperItem>
              <SwiperItem className='home-banner__swiper-item' >
                <Image className='home-banner__swiper-item-img' src={item.product_info.info2} />
              </SwiperItem>
              <SwiperItem className='home-banner__swiper-item' >
                <Image className='home-banner__swiper-item-img' src={item.product_info.info3} />
              </SwiperItem>
            </Swiper>


            <View className='tabbar'>
              <View className='home' onClick={this.navigatehome}>
                <Image className='home_icon' src='../../assets/tab-bar/home.png'></Image>
                <View>首页</View>
              </View>

              <View className='car' onClick={this.navigatecart}>
                <Image className='home_icon' src='../../assets/tab-bar/cart.png'></Image>
                <View>购物车</View>
              </View>
              <View className='car' onClick={this.like}>
                <Image className='home_icon' src='./image/select.png'></Image>
                <View>收藏</View>
              </View>
              <View className='tocar' data-_id={item._id} onClick={this.navigategoodlist}>加入购物车</View>
              <View className='tobuy' onClick={this.navigatebuy}>立即购买</View>
            </View>

            <View>
              <View className='wrap1'>
                <View className='share_and_price'>

                  <View className='item_price'>
                    <View className='price'>￥<Text className='big_price'>{item.price}</Text></View>
                    <View className='oldprice'>￥{item.oldprice}</View>
                    <View className='item_discodnt'>{item.product_image.count1}折</View>
                    <View className='item_discodnt'>{item.product_image.count2}</View>
                  </View>
                  <View className='device'></View>
                  <View className='share'>
                    <View className='item_img'><Image className='share_img' src={Share} /></View>
                    <View className='share_text'>分享</View>
                  </View>
                </View>
                <View className='horizonal_device'></View>
                <View className='describe_list'>
                  <View className='desc'><Text className='title' numberOfLines={2} >{item.product_info.describe1}</Text></View>
                  <View className='desc'><Text className='information' numberOfLines={2}>{item.product_info.describe2}</Text></View>
                  <View className='country'>
                    <View className='brands'><Image className='brang_img' src={item.product_info.country} /></View>
                    <View className='brand-country'><Text>{item.product_info.countryname}</Text></View>
                    <View className='brands'><Image className='brang_img' src={item.product_info.wangyiicon} /></View>
                    <View className='brand-country'>{item.product_info.wangyi}</View>
                  </View>
                </View>

              </View>
              <View className='color'></View>
              <View className='wrap2'>

                <View className="others">
                  <View className='myorder_lists'>
                    <View className="myorder_list">
                      <View className="myorder_list_item" >领券</View><View className='simple'>:</View>
                      <View className='float'>
                        <View className="myorder_list_more">
                          <View className='info'><Text>{item.product_info.cuxiao}</Text></View>
                          <View> <Image className='comp-home-title__link-img' src={arrowRight} /></View>
                          <View className='clearfloat'></View>
                        </View>
                      </View>
                    </View>
                    <View className='border_devide'></View>

                    <View className="myorder_list">
                      <View className="myorder_list_item" >促销</View><View className='simple'>:</View>
                      <View className='float'>
                        <View className="myorder_list_more">
                          <View className='info'><Text>{item.product_info.cuxiao}</Text></View>
                          <View> <Image className='comp-home-title__link-img' src={arrowRight} /></View>
                          <View className='clearfloat'></View>
                        </View>
                      </View>
                    </View>
                    <View className='border_devide'></View>

                    <View className="myorder_list" onClick={this.getMyLocation}>
                      <View className="myorder_list_item" >配送</View><View className='simple'>:</View>
                      <View className='float'>
                        <View className="myorder_list_more">
                          <View className=' info to'>至<View>dd</View></View>
                          <View> <Image className='comp-home-title__link-img imgsrc' src={arrowRight} /></View>
                          <View className='clearfloat'></View>
                        </View>
                      </View>
                    </View>
                    <View className='border_devide'></View>

                    <View className="myorder_list">
                      <View className="myorder_list_item" >运费</View><View className='simple'>:</View>
                      <View className='float'>
                        <View className="myorder_list_more">
                          <View className='info'>{item.product_info.yunfei}</View>
                          <View> <Image className='comp-home-title__link-img' src={arrowRight} /></View>
                          <View className='clearfloat'></View>
                        </View>
                      </View>
                    </View>
                    <View className='border_devide'></View>


                    <View className="myorder_list">
                      <View className="myorder_list_item" >说明</View>
                      <View className='simple'>:</View>
                      <View className='float'>
                        <View className="myorder_list_more">
                          <View className='info circle_text'>                        <View className='circle'></View>
                            假一赔十
                        <View className='circle'></View>
                            <View> 7天无理由退换</View>
                          </View>
                          <View className='icon'> <Image className='comp-home-title__link-img' src={arrowRight} /></View>
                          <View className='clearfloat'></View>
                        </View>
                      </View>
                    </View>
                    <View className='border_devide'></View>
                  </View>
                </View>
              </View>

              <View className='color'></View>
              <View className='wrap3'>
                <View className='judge_text'><Text>商品评价(0)</Text></View>
                <View className='judge_rate'><Text>好评{item.product_info.rate}</Text><View><Image className='comp-home-title__link-img' src={arrowRight} /></View></View>
              </View>
              <View className='color'></View>

              <View className='wrap4'>


                <View className='shop'>
                  <View className='shop_img'><Image className='shop__image' src={item.product_info.shopimg} /></View>
                  <View className='shop_count_name'>
                    <View className='shop_name'><Text>{item.product_info.shopname}</Text></View>
                    <View className='shop_count'><Text className='shop_count_size'>在售商品<Text className='count_procuct'>{item.product_info.inventory}</Text>件</Text></View>
                  </View>
                  <View className='go_to_shop'><Text>进入品牌</Text></View>
                  <Image className='comp-home-title__link-img to_shop' src={arrowRight} />
                </View>
                <View className='border_devide'></View>

              </View>
              <View className='image_text'>
                <Text>图文详情</Text>
              </View>





              <View className='products_img'>
                <Image className='imgg' src={item.product_image.pic1} />
              </View>
              <View className='products_img'>
                <Image className='imgg' src={item.product_image.pic2} />
              </View>
              <View className='products_img'>
                <Image className='imgg' src={item.product_image.pic3} />
              </View>
              <View className='products_img'>
                <Image className='imgg' src={item.product_image.pic4} />
              </View>
              <View className='products_img'>
                <Image className='imgg' src={item.product_image.pic5} />
              </View>
              <View className='products_img'>
                <Image className='imgg' src={item.product_image.pic6} />
              </View>
              <View className='products_img'>
                <Image className='imgg' src={item.product_image.pic7} />
              </View>
              <View className='products_img'>
                <Image className='imgg' src={item.product_image.pic8} />
              </View>
              <View className='products_img'>
                <Image className='imgg' src={item.product_image.pic9} />
              </View>

              <View className='message_show'>亲，已经到底喽！</View>
            </View>
          </View>

        ))}



      </View>
    )
  }
}