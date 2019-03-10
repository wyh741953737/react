import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components'
import './index.css'

export default class Category extends Component {
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
    console.log('homeImages', homeImages);
    return (
      <View className='home-banner'>
        qq

      </View>
    )
  }

}

