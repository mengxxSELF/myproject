# js中的数据类型

## 数据类型

* 原始类型

Number String Boolean Undefined Null

ES6 增加了 Symbol

* 引用类型

Object

ES6 增加了 Promise Map

## 数据类型检测

> 原始类型检测

* typeof

除了Null  都可以使用typeof
Null 类型进行typeof 检测 返回值为object
其余返回代表检测类型的字符串

> 引用类型检测

大多数原始类型使用typeof 会返回object (除了Function    比如：  typeof Funtion 会得到 function  )

所以使用.instanceof


# Function对象中的apply bind call

三者都是用来改变函数的作用域，也就是函数的this指向

> 1. apply

* fnName.apply(thisArg,[arguments])


参数：thisArg－要在其中运行函数的作用域，方法的绑定对象。
即：要把函数体内的this指到哪个对象上

参数：argsArray－绑定对象的参数数组。
该参可以是一个Array对象实例，也可以是一个arguments对象


```
function sayName (firstName, lastName) {
    console.log('Name: %s-%s', firstName, lastName);
}

function lili (firstName, lastName){
    sayName.apply(this, [firstName, lastName]);
    //或
    // sayName.apply(lili, [firstName, lastName]);
}

function lucy (firstName, lastName){
    sayName.apply(this, arguments);
    //或
    // sayName.apply(lucy, arguments);
}
lili('lili', 'liu');  //Name: lili-liu
lucy('lucy', 'liu');  //Name: lucy-liu
```

> 2 call

* fun.call(thisArg,arg1.arg2)

该方法与apply方法作用相同，
只是在参接收方式上有做区别。
对于call来说，第一个方法是this关键字或对象名没有变化，
其余参数都是直接传递给函数，
这与apply按数组方式传递参数有所不同。

参数：thisArg－要在其中运行函数的作用域，方法的绑定对象。即：要把函数体内的this指到哪个对象上

参数：arg1, arg2, ...－绑定函对象的参数列表

```
function lisa (firstName, lastName){
    sayName.call(this, firstName, lastName);
    //或
    // sayName.call(lisa, firstName, lastName);
}

lisa('lisa', 'liu');
```


* call和apply区别

call和apply两个方法在作用上没有任何区别，
不同的只是二者的参数的传递方式。
至于使用哪一个方法，取决于你的需要，
如果打算直接传入argumnets对象或应用的函数接收到的也是数组，
那么使用apply方法比较方法，其它情况使用call则相对方便一些。

> 3. bind

bind方法是es6中新增的方法，
该方法会创建一个函数实例，实例的this为传递到bind方法的值。

* fun.bind(thisArg,arg1,arg2)

参数传递形式与call方法相同，
实例的this作用域为bind方法中thisArg对象作用域。

参数：thisArg－要在其中创建函数实例的作用域对象。即：函数实例this作用域对象

参数：arg1, arg2, ...－创建函数实例的参数列表

```
window.color = 'green';
var obj = {color:'red'};
function showColor (){
    console.log(this.color);
}

showColor.call(window);    //green
var objShowColor = showColor.bind(obj);
objShowColor();    //red

```

在上面示例代码中，
call方法将showColor方法的this作用域指向了window对象，
所以输出值是“greeen”
objShowColor方法是通过bind方法创建的showColor函数的实例方法，
其this作用域为obj对象，因此，实列调用后输出值是“red”。

* call apply bind 三者异同


相同点：都会改变函数的运行作用域，即：改变函数的this指向

不同点： bind方法会在指定对象的作用上创建一个函数实例，
而call和apply方法是在指定对象的作用上运行函数。
因为，bind方法会创建函数实例，
所以需要运行实例后才会发生调用。
而call和apply则会指定作用域上直接调用函数，不需要运行。



















