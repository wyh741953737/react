import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text, Modal } from '@tarojs/components';
// import Info from './info/index'
import './index.css'
import loadimg from './more/loading.gif'
import title8 from './more/title8.png'
import wave from './more/wave.png'
// import word from './more/confirm-word1.png'
export default class Welcome extends Component{

state={  
        angle: 0,   
        avatarUrl: '',
       username:''    
}
 componentWillMount(e){
  setTimeout(() => {
    this.setState({
      remind: ''
    });
  }, 1000);
  Taro.onAccelerometerChange((res) => {
    let angle = -(res.x * 30).toFixed(1);
    if (angle > 14) { angle = 14; }
    else if (angle < -14) { angle = -14; }
    if (this.data.angle !== angle) {
      this.setState({
        angle: angle
      });
    }
  });
  let userInfo =  Taro.getStorageSync('userInfo')
  if (!userInfo) {
  Taro.showModal({
    title: '微信授权',
    content: '获得您的公开信息（昵称，头像）等',
    success: function(res) {
      Taro.getUserInfo({
        success: function(res) {
         var userInfo = res.userInfo
        Taro.setStorageSync('userInfo', userInfo)
        }
     })
    }
    })
  }else{
    console.log('授权失败')
  }
 }
 componentWillReceiveProps(props) {    //可以接受props 方法
  console.log(props)
 }
 shouldComponentUpdate(nextProps,nextState){
  
}

 
 goToIndex() {
  Taro.switchTab({
    url: '../home/home',
  });
}
    render(){
      const { avatarUrl,username}=this.state
        return(
          <View className='wrap'>
            <View className="container">
 <View className="remind-box" >
    <Image className="remind-img" src={loadimg}></Image>
  </View>
<View>
  <Image className="title" src={title8}></Image>
  <View className="content">
    <View className="hd" style="transform:rotateZ({{angle}}deg);">
      <Image className="logo" src={this.state.avatarUrl}></Image>
      <Image className="wave" src="./more/wave.png" mode="aspectFill"></Image>
      <Image className="wave wave-bg" src={wave} mode="aspectFill"></Image>
    </View>
  </View>
  </View> 
  <View>

      </View>
</View>
<View className="bd">
        <View className="confirm-btn" onClick={this.goToIndex}>
            <Text>去剁手吧</Text>
        </View>
        <Text className="copyright">欢迎体验网易考拉 关注微信@{this.state.username}</Text>
    </View>
</View>
        )
    }
}