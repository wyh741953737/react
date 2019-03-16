
import Taro, { Component } from '@tarojs/taro'
 import { View, PickerView, PickerViewColumn } from '@tarojs/components'


export default class Province extends Component {

  constructor () {
    super(...arguments)
    const date = new Date()
    // const provinces = []
    const months = []
    const days = []
    // for (let i = 1990; i <= date.getFullYear(); i++) {
    //   provinces.push(i)
  // }
   const provinces= [
      {
        id: 0,
        zhou: "江苏",
       child:['a','b','c']
      }, {
        id: 1,
        zhou: "安徽",
        child:['d','e','f']
      }
    ]

    for (let i =0; i <= provinces.id; i++) {
      provinces.push(i)
    }
    for (let i = 0; i <= provinces.child; i++) {
      provinces.child.push(i)
    }
    for (let i = 1; i <= 31; i++) {
      days.push(i)
    }
    this.state = {
      provinces: provinces,
      
      city: 2,
      days: days,
      day: 2,
      value: [9999, 1, 1]
    }
  }

  onChange = e => {
    const val = e.detail.value
  
    this.setState({
      provinces: this.state.provinces[val[1]],
      // provinces: this.state.provinces[val[1]],
      city: this.state.provinces[val[2]],
      value: val
    })
  }

  render() {
    const { provinces }=this.state
   const p=new provinces()
     console.log(provinces)
     console.log(p)
    const Child=new Array().fill().map((_, i) => i);
    return (
      <View>
        <View>{provinces}f</View>
        <PickerView indicatorStyle='height: 50px;' style='width: 100%; height: 300px;' value={this.state.value} onChange={this.onChange}>
          <PickerViewColumn>
            {this.state.provinces.map(item => {
              return (
                <View>{item.zhou}</View>
              );
            })}
          </PickerViewColumn>
         
        </PickerView>
      </View>
    );
  }
}