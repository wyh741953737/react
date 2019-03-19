import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
 import Product from './hasproduct/index'
 import noProduct from './noproduct/index'
import Cart from './cart-module'

import './index.css'
import Category from '../home/category';

const cart = new Cart();
export default class Car extends Component {
state={
    cartData:[]
}
 componentWillMount(){
  var cartData=Taro.getStorageSync('product')
  this.setState({
      cartData:cartData
  })
//   console.log(cartData)
//   console.log(cartData.length)
//    var countsInfo=cart.getCartTotalCounts(true);
//    cal=this._calcTotalAccountAndCounts(data)
//    this.setState({
//        selectedCounts:cal.selectedCounts,
//        cartData:cal.cartData,
//        selectedTypeCounts:cal.selectedTypeCounts,
//         account:cal.account
//    })
      }
    //   getCartDataFromLocal = () => {
    //     var res = Taro.getStorageSync('product') || [];
    //     return res;
    //   }
//        _calcTotalAccountAndCounts=(data)=>{
//            var len=data.length
//            account=0//总价格
//            selectedCounts=0,//数量总和
//            selectedTypeCounts=0//商品种类数
//            let multiple=100
//            for(let i=0;i<len;i++){
//                if(data[i].selectStatus){
//            account++
//           data[i].counts * multiple * Number(data[i].price) * multiple
//          selectedCounts+=data[i].counts
//         selectedTypeCounts++
//           }
//    }
//       return{
//           selectedCounts:selectedCounts,
//          selectedTypeCounts:selectedTypeCounts,
//         account:account / (multiple * multiple)
//      }
//       }
//       componentDidMount(){
  
//     }
      render(){
   const { cartData }=this.state
     return(
      <View>      
         {
         cartData.length>0?<View className='product_wrap'><Product cartData={cartData}/></View>:<noProduct cartData={cartData}/>
         }
      </View>
              
           )
      }
  }