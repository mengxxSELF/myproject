# React



## bower

bower安装插件，可以设置安装目录，通过创建.bowerrc
在里面设置directory后面是bower下载的文件的安装目录位置

```
{"directory":"./public/lib"}

```
## 生命周期

> 挂载
* componentWillMount 服务器端和客户端都只调用一次 初始化渲染之前立即调用

* componentDidMount 在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）。
在生命周期中的这个时间点，组件拥有一个DOM 展现，你可以通过 this.getDOMNode() 来获取相应 DOM 节点。

> 更新

* componentWillReceiveProps
在组件接收到新的props 的时候调用。在初始化渲染的时候，该方法不会调用。

用此函数可以作为react 在 prop 传入之后，
 render() 渲染之前更新 state 的机会。
老的 props 可以通过 this.props 获取到。在该函数中调用 this.setState() 将不会引起第二次渲染。

* shouldComponentUpdate

在接收到新的props 或者 state，将要渲染之前调用。
该方法在初始化渲染的时候不会调用，
在使用 forceUpdate 方法的时候也不会。
如果确定新的props 和 state 不会导致组件更新，
则此处应该 返回 false。

* componentWillUpdate

 在接收到新的props 或者 state 之前立刻调用。在初始化渲染的时候该方法不会被调用。
 使用该方法做一些更新之前的准备工作。

* componentDidUpdate
  在组件的更新已经同步到DOM 中之后立刻被调用。
  该方法不会在初始化渲染的时候调用。

  使用该方法可以在组件更新之后操作DOM 元素。

  注意：
  为了兼容 v0.9，DOM节点会作为最后一个参数传入。
  如果使用这个方法，你仍然可以使用 this.getDOMNode() 来访问 DOM 节点。

> 移除

* componentWillUnmount()
在组件从DOM 中移除的时候立刻被调用。

在该方法中执行任何必要的清理，比如无效的定时器，或者清除在 componentDidMount 中创建的 DOM 元素。















## 在页面引入js文件

```
<script src="./bower_components/react/react.js"></script>
<script src="./bower_components/react/react-dom.js"></script>
<script src="./bower_components/babel/browser.js"></script>
<script type="text/babel" src="1react.js"></script>

```
注意引入自己的js文件，要加上type='text/babel'

## react

虚拟dom标签插入内容渲染到页面中



## JSX语法

将html css js 写在一起进行编译
用{ 开头 就用js规则解析


> 渲染的组件有且只能有一个顶级标签

*  如果迭代的是数组 每一个子元素需要自己key 属性
*  设置样式可以通过两种方式
   * className
   * style={样式对象}

```

<span className='weight'></span>

<p style={ { color:'red' } } ></p>
//  第一对大括号 表示使用js解析里面的东西
// 第二对大括号 表示这是一个对象


// 或者先定义好样式对象
var stylecoolor ={ color:'red' }
<p style={ stylecoolor } } ></p>


```

## 定义组件

将页面分割为独立组件 每个都要自己的样式和逻辑

* 可组合
* 可重用
* 可维护

> 定义组件 ReactDOM.createClass({})

* 组件名称要首字母大写
* 组件定义后，可以像普通的DOM元素一样使用


```
var Comp = ReactDOM.createClass({
    render () {
       return  <div>只能有一个顶级标签</div>
    }
})

ReactDOM.render(
   <Comp />,
   document.querySelector('#app')
)

```


## 组件的属性

* 一般是初始化之后不变的值
* 由外界传入 不是自己定义的
* 可通过解构赋值传入

> getDefaultProps 设置默认属性值

当没有传入属性，就会使用默认的属性值

> propTypes 对象

propTypes指定的属性 当传入的类型不同或者该属性不存在 会报错


> this.props.children  子元素 [这个比其他的特殊]

```
   return (
      <ul>
        {
           this.props.children.map(function(item,index){
              <li key={index}>  item  </li>
           })
        }
      </ul>
   )
```

## 状态

### 定义初始状态

```
gitInitialState(){
   return { theKey:theVal }
}
```

### 修改状态值 setState

* 修改状态值只能通过这一种方式
* 状态变化时，会引发组件重绘 重新渲染视图

```
this.setState({ count: this.state.count+1  })
```
setState 是一个异步方法  可以设置回调函数

```
this.setState({mes:this.state.mes} , function(){
   this.refs.myInput.value = ''
})
```



## 复合组件

## 组件的声明周期


## 混合 mixins 可以实现逻辑的复用

```
var myMix = {

}

mixins:[myMix]

```

##








## 获取值

* 获取input的值

```
  var val = this.refs.myInput.value;
```
* 获取点击元素的值

```
handleClick(e){
  var val =   e.target.value;
}

```















