import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.css'

import pin from './images/pin.png'
import home from './images/home.png'
import fushi from './images/fushi.png'
import canju from './images/canju.png'
import quanqiu from './images/quanqiu.png'
import meihu from './images/meihu.png'
import muyin from './images/muyin.png'
import baojian from './images/baojian.png'
import paihang from './images/paihang.png'
import gong from './images/gong.png'
export default class Category extends Component {
  state = {
  cates:[
    {  
      id:0,
      name:'超值拼团',
      img:pin
    },
    {  
      id:1,
      name:'居家生活',
      img:home
    },
    {  
      id:2,
      name:'服饰馆',
      img:fushi
    },
    {  
      id:3,
      name:'生活补贴',
      img:canju
    },
    {  
      id:4,
      name:'全球旗舰店',
      img:quanqiu
    },
    {  
      id:5,
      name:'美容个护',
      img:meihu
    },
    {  
      id:6,
      name:'母婴',
      img:muyin
    },
    {  
      id:7,
      name:'保健',
      img:baojian
    },
    {  
      id:8,
      name:'排行榜',
      img:paihang
    },
    {  
      id:9,
      name:'全球工厂店',
      img:gong
    }

  ]
  }
  render() {
    const { cates } = this.state;
   
    return (
      <View className="order-page">
        <View className="toggleType">
          {cates.map((item, index) => (
           <View className='wrap'>
                <View className='img-wrap'><Image className='img' src={item.img}></Image></View>
                <View key={index} className='item' >{item.name}</View>
           </View>
          ))}
        </View>
      </View>
    )
  }

}

