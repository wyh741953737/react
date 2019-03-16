import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text, Icon } from '@tarojs/components';
// import { connect } from '@tarojs/redux';
import './index.css';
import message_img from '../../assets/user/message.png';
import avatar_img from '../../assets/user/avatar.png';
import coupon_img from '../../assets/user/coupon.png';
// import about_img from '../../assets/user/about.png';
import address_img from '../../assets/user/address.png';
import arrowRight from '../../pages/home/flash-sale/arrow-right.png'
// @connect(({ users }) => ({
//   ...users
//   // ...common,
// }))
export default class User extends Component {
    constructor() {
        super(...arguments);
        this.state = {
          orderType: [
            {
              id: 0,
              name: '全部订单',
              image:'../../assets/user/alllist.png'
            },
            {
              id: 1,
              name: '待付款',
              image:'../../assets/user/pay.png'
            },
            {
              id: 2,
              name: '待发货',
              image:'../../assets/user/daifahuo.png'
            },
            {
              id: 3,
              name: '待收货',
              image:'../../assets/user/gift.png'
            },
            {
              id: 4,
              name: '评价',
              image:'../../assets/user/ping.png'
            },
          ],
        
        };
      }
    config = {
      navigationBarTitleText: '我的',
    }
  seemore=()=>{
   Taro.navigateTo({
     url:'../order_list/index?id=0'
   })
  }
  allList=(ev)=>{
    console.log(ev)
    var id=ev.currentTarget.dataset.id
    console.log(id)
    Taro.navigateTo({
      url:'../order_list/index?id='+id
    })
  }
render(){
    const { orderType, activeTypeIndex } = this.state;
    return(
 <View className="user-page">
         <View className="not-login">
                        <View
                            className="to-login">        
                            
                                <View className="avator_image">
                                    <Image className="avator_image_avator" src="../../assets/user/tou.png"/>
                                </View>
                                <View className="right">
                                    <View className="right_username">用户名</View>
                                    <View className="right_usertype">微信账号</View>
                                </View>
                            
                        </View>
                        <View className="myorder">
                                    <View className="myorder_list" onClick={this.seemore}>
                                    <View className="myorder_list_item" >我的订单</View>
                                    <View className="myorder_list_more">查看全部 <Image className='comp-home-title__link-img' src={arrowRight} /></View>
                                    </View>
                                    <View className="clearfloat"></View>
                                    <View className='border_devide'></View>
                                    <View className="order_items">
                                   {
                                     orderType.map((item,index)=>(
                                      <View className="order_content" data-name={item.name} data-id={item.id} onClick={this.allList}>
                                      <View className='order_img'><Image className='order_img_img' src={item.image}/></View>
                                      <View className='order_info'>{item.name}</View>
                                   </View>
                                     ))
                                   }
                                   </View>
                        </View>
                        <View className="others">
                        <View className="myorder_list">
                                    <View className="myorder_list_item" >我的优惠券</View>
                                    <View className="myorder_list_more"> <Image className='comp-home-title__link-img' src={arrowRight} /></View>
                                    </View>
                                    <View className="clearfloat"></View>
                                    <View className='border_devide'></View>
                                    <View className="myorder_list">
                                    <View className="myorder_list_item" >我的红包</View>
                                    <View className="myorder_list_more"><Image className='comp-home-title__link-img' src={arrowRight} /></View>
                                    </View>
                                    <View className='border_devide'></View>
                                    <View className="myorder_list">
                                    <View className="myorder_list_item" >联系客服</View>
                                    <View className="myorder_list_more"><Image className='comp-home-title__link-img' src={arrowRight} /></View>
                                    </View>
                                    <View className='border_devide'></View>
                                    <View className="myorder_list">
                                    <View className="myorder_list_item" >账号切换</View>
                                    <View className="myorder_list_more"> <Image className='comp-home-title__link-img' src={arrowRight} /></View>
                                    </View>
                        </View>
          </View>


      </View>
    );
  }
}

