-性能优化（用户体验的需求），comountDidMount（） 挂载后请求数据，组件的基本ui已渲染 ，mvvm的setstate可以推迟异步执行的数据
props因为MVVM数据流的流向，由外到内，来自于props的更新，更加频繁。
React 性能优化的核心，拒绝不必要的更新
nextProps，nextstate,this.state,this.props新旧比较
shouldComponentupdate（nextprops）{
    if（新旧比较）{return false；}
}




封装一个modal组件 
1,模态框   css  结构  弹窗窗口，标题内容，底栏的按钮组
父子交互，父元素可以调用弹窗组件，弹窗组件可以传递数据给父组件
自身组件类实现，样式
es变量中包含两种数据类型值：
1，基本类型值：保存在栈内存中的简单数据段。5中基本数据类型：string，number，Boolean，undefined，null。5中分别占有固定大小空间，因此可以把它们的值保存在栈内存中。这样可以提高查询变量速度。

引用类型值：保存在堆内存中的对象。意思是变量中保存的实际上是一个指针，这个指针指向内存中的另一个位置，该位置保存对象。
