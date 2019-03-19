// import React, { Component } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem,Navigator, Image, Text } from '@tarojs/components'
import './index.css'
import Product from './productlimit/index'

// 定义每页 6个
const PER_SWIPER_NUM = 6;
const db = wx.cloud.database();

export default class ProductsLimit extends Component {
  state = {
    category: [],
    productsTotal: null,
    currentIndex: 0,
    ids:new Date().getHours(),
    count:3600,
    sleft:((new Date().getHours())-2)*75,
    count:3600,
   name:'即将开始',
   lists:[
{ id:'0',
time: '00:00',
},{ id:'1',
time: '01:00',
},{ id:'2',
time: '02:00',
},{ id:'3',
time: '03:00',
},{ id:'4',
time: '04:00',
},{ id:'5',
time: '05:00',
},{ id:'6',
time: '06:00',
},{ id:'7',
time: '07:00',
},{ id:'8',
time: '08:00',
},{ id:'9',
time: '09:00',
},{ id:'10',
time: '10:00',
},{ id:'11',
time: '11:00',
},{ id:'12',
time: '12:00',
},{ id:'13',
time: '13:00',
},{ id:'14',
time: '14:00',
},{ id:'15',
time: '15:00',
},{ id:'16',
time: '16:00',
},{ id:'17',
time: '17:00',
},{ id:'18',
time: '18:00',
},{ id:'19',
time: '19:00',
},{ id:'20',
time: '20:00',
},{ id:'21',
time: '21:00',
},{ id:'22',
time: '22:00',
},{ id:'23',
time: '23:00',
},{ id:'24',
time: '24:00',
}
  ]

}

  componentWillMount() {
    this.handleFetchProducts();
  }
  componentDidMount() {
    // 获取 products 里面集合总数
    db.collection('category')
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
    let count=this.state.count
      const m=new Date().getMinutes();
      const mins=parseInt(m * 60);
      const s= new Date().getSeconds();     
      const least=count-m-s 
    const { currentIndex } = this.state;
    const timer=setInterval(()=>{
      if(least>0){
        clearInterval(timer)
        db.collection('category')
        .skip(currentIndex * PER_SWIPER_NUM)
        .limit(PER_SWIPER_NUM)
        .get()
        .then((res) => {
          this.setState({
            category: res.data,
            count:3600
          })
        })
      }
    },1000)
  }
  getCurrentindex=(res)=>{
    console.log(res)
    this.handleFetchProducts()
    this.setState({
      currentIndex:1,
      category:res.data
    })
  }
  // handlenaviga=(ev)=>{
  //   var that=this;
  //   var e=ev.currentTarget.dataset._id;
  //   this.$preload('_id', ev.currentTarget.dataset._id)
  //   console.log(e)
  //   Taro.navigateTo({
  //     url:`/pages/item/index`
  //  })
  // }
  render() {
    const { productsTotal, currentIndex, lists,ids,category } = this.state;
    console.log(currentIndex)
    const maxPage = Math.ceil(productsTotal / PER_SWIPER_NUM);
    const mapSwiperArray = new Array(maxPage).fill().map((_, i) => i);
  
    return (
<View>
      <View className="the_last_wrap"> 
            <ScrollView
                className='scrollview'
                scrollX
                scrollLeft={this.sleft}
                scrollbars='none'
                upperThreshold='0'
                onScrolltoupper={this.onScrolltoupper}
                style="white-space:nowrap;"   >   
                    <View className="time_limit_wrap" onClick={this.getCurrentindex}>
                            {lists.map((item, index) => (
                                <View className={ids>item.id ? 'tims' :(ids<item.id? 'tims':'tims ff')}   > 
                                    <View  className="time_limt_item_id" key={index} >{item.time} </View>
                                    <View  className="item_name"  > {ids>item.id?'已经开抢':(ids==item.id?'抢购中':'即将开始')}</View>
                                </View> 
                            ))}  
                    </View>
            </ScrollView> 
      </View>
      <View className='message'><Text>疯抢中 好货总在犹豫中错过</Text></View>
      <View className='home-product'>
            <View className="home-product_items">
                      <Swiper
                        className='home-product__swiper'
                        circular
                        // onChange={this.handleSwiperChange}
                        indicatorActiveColor='rgb(178, 42, 49)'>
                                  {
                                    mapSwiperArray.map((index) => (
                                      <SwiperItem className="home-product_swiperitem" key={index}>
                                    <View onClick={this.handlenaviga}>    <Product  category={category} /></View>
                                      </SwiperItem>
                                    ))
                                  }
                       </Swiper>
                        <View className='message_show'>亲，已经到底喽！</View>
           </View>
     </View>

</View>
     
    )
  }
}
