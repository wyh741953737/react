import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.css';
export default class OrderList extends Component {
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
          image:'../../assets/user/ping.png',
        },
      ],
      activeTypeindex: '',
    };
  }

  config = {
    navigationBarTitleText: '订单',
  };
  componentWillMount = (ev) => {
    console.log(this)
    this.setState({
      activeTypeindex: this.$router.params.id,
    });
    
  };

  toggleActiveType = e => {
    Taro.redirectTo({
      url: '../../pages/timelimit/index?id=2'
    })
    this.setState({
      activeTypeindex: e.currentTarget.dataset.id,
    });
   console.log(e.currentTarget.dataset.id)
  };

  render() {
    const { orderType,  activeTypeindex } = this.state;
    return (
      <View className="order-page">
        <View className="toggleType">
          {orderType.map((item, index) => (
            <View
              key={index}
              className={ activeTypeindex == item.id ? 'active item' : 'item'}
              data-id={item.id}
              onClick={this.toggleActiveType}
            >
              {item.name}
            </View>
          ))}
        </View>
        <View className="empty" />
      </View>
    );
  }
}

