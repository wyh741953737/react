import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.css'

export default class Banner extends Component {
  state = {
    homeImages: []
  }

  static defaultProps = {
    homeImages: []
  }

  componentDidMount() {
    const db = wx.cloud.database()
    const homeImages = db.collection('home_images')
    homeImages.get().then(res => {
      this.setState({
        homeImages: res.data
      })
    })
  }

  render() {
    const { homeImages } = this.state;
    return (
      <View className='home-banner'>
        <Swiper
          className='home-banner__swiper'
          circular
          autoplay
          indicatorDots
          indicatorActiveColor='rgb(178, 42, 49)'
        >
          {homeImages.map((item, index) => (
            <SwiperItem
              key={index}
              className='home-banner__swiper-item'
            >
              <Image
                className='home-banner__swiper-item-img'
                src={item.url}
              />
              
            </SwiperItem>
           ))}
        </Swiper>

      </View>
    )
  }

}

