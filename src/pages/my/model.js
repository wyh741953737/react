export default {
  namespace: 'orderType',
  state: {
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
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
