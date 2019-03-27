import Taro, { Component } from '@tarojs/taro'
import { View, Text, Checkbox } from '@tarojs/components'
import './index.css'
export default class PageCheckbox extends Component {
  state = {
  isClicked:false
  }
  show = () => {
    console.log('ooo')
    this.setState({
      isClicked:true
    })
  }
  comfirm=()=>{
    this.setState({
      isClicked:false
    })
  }
  render () {
   // let { isClicked}=this.state
    return (

      <View >
<View onClick={this.show}>dddd</View>
        
        {isClicked? <View className='seeable'>
      
    <View className="ddd">1111</View>
       
       
    
                {/* {category.map((item, index) => ( */}
                    <View className='wrap' >

                        <View className='pic'>
                            <View className='image'><Image className='image-url' /></View>
                            <View className='price'>
                                <View className='price-wrap'><Image className='image-close' /></View>
                                <View className='price-wrap'><Text className='prict_wrap'>.price</Text></View>
                                <View className='price-count'> <Text>库存ite件</Text> </View>
                                <View className='price-chose'> <Text>选择颜色数量</Text> </View>
                            </View>
                        </View>
                        <View className='color_and_count'>
                            <View> <Text className='color'>已经选择 this.st 件</Text></View>
                        </View>
                        <View className='count'>
                            <View className='count_text'>购买数量</View>
                            <View className='count_button'>
                                <View className='count_less' onClick={this.less} >-</View>
                                <View className='count_number'>99</View>
                                <View className='count_more'  onClick={this.more}>+</View>
                            </View>
                        </View>
                        <View className='comfirm-wrap'>  <View className='count_comfirm' onClick={this.comfirm}>确定</View></View>
                    </View>
                {/* ))} */}
            </View>
    :''}
      </View>
      
     
         

    )
  }
}