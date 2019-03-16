import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import Product from './hasproduct/index'


import './index.css'


export default class Car extends Component {
 
   
       constructor(){
         super();
         this.state={
             _storageKeyName:'_id'
         }
   }

   getCart=(e)=>{    
    var res=Taro.getStorageSync({key:'_id'});
    console.log(res)
}
//  componentWillMount(){
//   var cartData=cart.getCartDataFromLocal();
//    var countsInfo=cart.getCartTotalCounts(true);
//    cal=this._calcTotalAccountAndCounts(data)
//    this.setState({
//        selectedCounts:cal.selectedCounts,
//        cartData:cal.cartData,
//        selectedTypeCounts:cal.selectedTypeCounts,
//         account:cal.account
//    })
//       }
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
 
          return(
             <View>
               
                <View onClick={this.getCart} >ss</View>
               </View>
           )
      }
  }