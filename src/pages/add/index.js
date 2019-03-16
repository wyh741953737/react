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
        // console.log(this.$router.preload._id)
        db.collection('category')
            .where({
                _id: this.$router.preload._id
            })
            .get()
            .then(res => {
                this.setState({ category: res.data })
            })
    }
    comfirm = () => {
        // let _id=this.$router.preload._id;
        this.addToCart(_id)  
    }
    addToCart = (id) => {
         const { category, productCount } = this.state;
         console.log('加入购物车了吗')
         var temObj = {}//一个对象
         let keys=['_id','title','url','price']//表示temobj中的属性,一个商品的全部信息在category中，keys就是要从category中摘取的数据。
        //    console.log(keys[0])
        //  for( keys in category){//读取category中的数据，方法：遍历keys，根据每个key去this.data.category中读取相应的值
        //  if(keys.indexOf(key) >=0){//如果key存在 就把他读取出来，并且装载到temobj           
        //      temObj[key]= this.data.category[key];
        //     }
        // }         
            //将temObj加入到购物车   
            Taro.setStorage({ key:"category_id",  data:"keys" })    
         cart.add(category, productCount)
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
                            <View> <Text className='color'>已经选择{this.state.productCount}件</Text></View>
                        </View>
                        <View className='count'>
                            <View className='count_text'>购买数量</View>
                            <View className='count_button'>
                                <View className='count_less' >-</View>
                                <View className='count_number'>{this.state.productCount}</View>
                                <View className='count_more'>+</View>
                            </View>
                        </View>
                        <View className='comfirm-wrap'>  <View className='count_comfirm' onClick={this.comfirm}>确定</View></View>
                    </View>
                ))}
            </View>
        )
    }
}