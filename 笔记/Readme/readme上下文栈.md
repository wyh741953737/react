执行全局代码时，会产生一个执行上下文环境，每次调用函数都又会产生执行上下文环境。当函数调用完成时，这个上下文环境以及其中的数据都会被消除，再重新回到全局上下文环境。处于活动状态的执行上下文环境只有一个。

什么是引擎？
Javascript引擎是运行Javascript代码的“引擎”。如今有两个突出的Javascript引擎：Google V8和SpiderMonkey。V8是Google开源的Javascript引擎，在Google Chrome和Nodejs中使用。SpiderMonkey是Mozilla的JavaScript引擎，用于Firefox。

引擎没有运行功能pow！上面的代码将转换为存储在全局存储器中的一些值：函数声明和变量。
当Javascript引擎运行您的代码时，它会创建：

全局执行上下文

全局存储器（也称为全局作用域或全局变量环境）




不跳页，拿到其他页面数据，a标签的地址要走，但a标签会刷新页面。用ajax解决
AJAX 是与服务器交换数据的技术，它在不重载全部页面的情况下，实现了对部分网页的更新。
组件的形式：容器组件和函数组件之分，未来有高阶组件，构建组件时候，选择合适方式

路由页面下的组件树，
state?props 子组件时，内部自身状态state



熟悉npm库中打理时间用moment.js库

truncate用法：去除空格，trim（）去除空格
了解lodash,moment


Jsx内有些逻辑比较复杂，update时间戳 body  经过了计算一样，在vue里计算属性，react，组件方法
moment（）。fromNow（）   _.truncate（，30）
之前的state里的一个值，计算成想要的形态
编辑表单，toogle
{this.state.open && <Editor>/}

lock.js








typescript:
ProgressBar<props类型,state类型>
<>泛型操作运算符
如果你有严格的需要
接口类 IProgressBar 对Props类型泛型，接口定义
属性和方法的抽象定义



redux store状态仓库  共享和管理
1,store.getState()只读
2,store.dispatch({type:'INCREMENT})相应的reducer 得以计算 返回新状态

-发布订阅者， 组件connect(state,action)(原组件)成为高阶组件后，触发action修改状态的唯一方式，
靠触发reducer函数的执行 
