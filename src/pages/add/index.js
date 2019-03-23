import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import Cart from '../car/cart-module'
import './index.css'
const db = wx.cloud.database()
const cart = new Cart();//实例化cart类，调用它的方法
export default class Add extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            category: [],
            productCount: 1,
        }
    }
    componentDidMount() {
        db.collection('category')
            .where({
                _id: this.$router.preload._id
            })
            .get()
            .then(res => {
                this.setState({ category: res.data })
            })
    }
    less=()=>{
     
            this.setState({
                productCount:productCount--
            })
        }
    more=()=>{
    productCount+=this.state.productCount
     this.setState({
         productCount:productCount
     })
    }
    comfirm = () => {
        const { category, productCount } = this.state;
         console.log(category)//打印出对象的对象
         console.log('加入购物车了吗')
        if(!category[0]) return false; 
         cart.add(category[0], productCount)
    }
    render() {
        const { category } = this.state;
        return (
            <View>
                {category.map((item, index) => (
                    <View className='wrap'>

                        <View className='pic'>
                            <View className='image'><Image className='image-url' src={item.url} /></View>
                            <View className='price'>
                                <View className='price-wrap'><Image className='image-close' /></View>
                                <View className='price-wrap'><Text className='prict_wrap'>￥{item.price}</Text></View>
                                <View className='price-count'> <Text>库存{item.product_info.inventory}件</Text> </View>
                                <View className='price-chose'> <Text>选择颜色数量</Text> </View>
                            </View>
                        </View>
                        <View className='color_and_count'>
                            <View> <Text className='color'>已经选择 {this.state.productCount} 件</Text></View>
                        </View>
                        <View className='count'>
                            <View className='count_text'>购买数量</View>
                            <View className='count_button'>
                                <View className='count_less' onClick={this.less} >-</View>
                                <View className='count_number'>{this.state.productCount}</View>
                                <View className='count_more'  onClick={this.more}>+</View>
                            </View>
                        </View>
                        <View className='comfirm-wrap'>  <View className='count_comfirm' onClick={this.comfirm}>确定</View></View>
                    </View>
                ))}
            </View>
        )
    }
}