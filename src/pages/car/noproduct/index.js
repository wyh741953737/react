import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
import './index.css'


export default class noProduct extends Component {
    gohomepage=()=>{
        Taro.navigateTo({
            url:  'pages/my/index', 
        })
    }
    render(){
        return(
            <View className='no_product'>
            <View className='space_car'>
            <View className='space_car2'>
            <View className='car_wrap'><Image className='space_car_icon' src='../../../assets/tab-bar/cart.png'/></View>
            </View>
            </View>
            <View className='car_describe'><Text>购物车空空如也,赶紧去加购吧!</Text></View>
            <View className='go_shop' onClick={this.gohomepage}><Text>去逛逛</Text></View>
            </View>
                
        )
    }
}