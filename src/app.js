import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.css'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
wx.cloud.init({
  'env': 'kaola-b551c8'
})

class App extends Component {
  config = {
    pages: [
      'pages/car/index',
      'pages/home/home', 
      'pages/addtocar/index',
      'pages/add/index',
   
    
    
      'pages/province/index',
      'pages/item/index',
    
     'pages/home/productLimit/index',
     
      // 'pages/timelimit/index' ,
   
      

     
     

     
      'pages/order_list/index' ,
      'pages/my/index',   
       
       'pages/login/index'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [
        {
        pagePath: "pages/home/home",
        iconPath: "./assets/tab-bar/home.png",
        selectedIconPath: "./assets/tab-bar/home-active.png",
        text: "首页"
      }, {
        pagePath: "pages/home/home",
        iconPath: "./assets/tab-bar/pin.png",
        selectedIconPath: "./assets/tab-bar/pin-active.png",
        text: "拼团"
      },  {
        pagePath: "pages/home/home",
        iconPath: "./assets/tab-bar/message.png",
        selectedIconPath: "./assets/tab-bar/message-active.png",
        text: "消息"
      },{
        pagePath: "pages/car/index",
        iconPath: "./assets/tab-bar/cart.png",
        selectedIconPath: "./assets/tab-bar/cart-active.png",
        text: "购物车"
      }, {
        pagePath: "pages/my/index",
        iconPath: "./assets/tab-bar/user-active.png",
        selectedIconPath: "./assets/tab-bar/user-active.png",
        text: "我的"
      }
    ]
  },
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示"
    }
  }

}
  componentDidMount () {
    
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
