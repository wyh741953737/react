// import React, { Component } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem,Navigator, Image, Text } from '@tarojs/components'
import './index.css'
import Product from './products/index'

// 定义每页 6个
const PER_SWIPER_NUM = 6;
const db = wx.cloud.database();

export default class Products_item extends Component {
  state = {
    products: [],
    productsTotal: null,
    currentIndex: 0,
  }
  componentWillMount() {
    this.handleFetchProducts();
  }
  componentDidMount() {
    // 获取 products 里面集合总数
    db.collection('products')
      .count()
      .then(res => {
        this.setState({
          productsTotal: res.total
        });
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
    
    db.collection('products')
      .skip(currentIndex * PER_SWIPER_NUM)
      .limit(PER_SWIPER_NUM)
      .get()
      .then((res) => {
        this.setState({
          products: res.data
        })
      })
  }

  render() {
    const { productsTotal, products } = this.state;
    const maxPage = Math.ceil(productsTotal / PER_SWIPER_NUM);
    const mapSwiperArray = new Array(maxPage).fill().map((_, i) => i);
    return (

      <View className='home-product'>
        <View className="home-product_items">
        <View className="navigator_item">
          <Navigator
           url="/pages/home/home"
          >
            <Text className="navigator_left">超值拼团好物</Text>
            <Text className="navigator_right">查看更多></Text>
            </Navigator>
        </View>
          <Swiper
            className='home-product__swiper'
            circular='false'
            autoplay='false'
            indicatorDots='false'
            onChange={this.handleSwiperChange}
           >
            {
              mapSwiperArray.map((index) => (
                <SwiperItem className="home-product_swiperitem">
                  <Product  products={products}/>
                </SwiperItem>
              ))
            }
          </Swiper>
        </View>
      </View>
    )
  }
}
