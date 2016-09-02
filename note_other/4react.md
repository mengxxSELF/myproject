# React



## bower

bower安装插件，可以设置安装目录，通过创建.bowerrc
在里面设置directory后面是bower下载的文件的安装目录位置

```
{"directory":"./public/lib"}

```
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




