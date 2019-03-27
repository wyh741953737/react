import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text, Icon } from '@tarojs/components';
import './index.css';
import message_img from '../../assets/user/message.png';
import avatar_img from '../../assets/user/avatar.png';
import coupon_img from '../../assets/user/coupon.png';
 import about_img from '../../assets/user/about.png';
import address_img from '../../assets/user/address.png';
import arrowRight from '../../pages/home/flash-sale/arrow-right.png'
import allList from '../../assets/user/alllist.png'
import pay from '../../assets/user/pay.png'
import daifahuo from '../../assets/user/daifahuo.png'
import gift from '../../assets/user/gift.png'
import ping from '../../assets/user/ping.png'
export default class User extends Component {
    constructor() {
        super(...arguments);
        this.state = {
          avatarUrl:'',
          nickName:'',
          orderType: [
            {
              id: 0,
              name: '全部订单',
              image:allList
            },
            {
              id: 1,
              name: '待付款',
              image:pay
            },
            {
              id: 2,
              name: '待发货',
              image:daifahuo
            },
            {
              id: 3,
              name: '待收货',
              image:gift
            },
            {
              id: 4,
              name: '评价',
              image:ping
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
  componentDidMount(){
    let userInfo =  Taro.getStorageSync('userInfo')
    this.setState({
      avatarUrl:userInfo.avatarUrl,
      nickName:userInfo.nickName
    })
  }
render(){
    const { orderType, activeTypeIndex,avatarUrl,nickName } = this.state;
    return(
 <View className="user-page">
         <View className="not-login">
                        <View
                            className="to-login">        
                            
                                <View className="avator_image">
                                    <Image className="avator_image_avator" src={this.state.avatarUrl}/>
                                </View>
                                <View className="right">
                                    <View className="right_username">用户名{nickName}</View>
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

