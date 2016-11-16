# 面向对象 Object-Oriented  【OO】

JavaScript是一种基于对象的语言，
与传统面向对象语言（C#、C++）相比，
JavaScript中没有类的概念，
所以它的对象与其他OO语言不一样
可以把js中的对象想象成名值对，值为数据或者函数

## 1 创建对象

* 1.1 工厂模式

```
function person(name,year){
  var per = new Object();
  per.name =  name;
  per.year =  year;
  return per;
}

var p1 = person('lh',20)
var p2 = person('smla',24)



```

工厂模式的缺点，无法知道创建的类型

* 构造函数

```
function Person(name){
  this.name = name;
  this.say = function (){
    console.log(this.name)
  }
}
var p1 = new Person('json');
var p2 = new Person('tom');
p1.say()

```
注意： 构造函数创建的不同实例都不同

```
console.log(p1.say == p2.say)  // false

```
但是创建两个完成同样功能的Funtion 有点浪费，所以可以把函数定义
写到外面

```
function Person(name){
 this.name = name;
 this.say = sayname;
}
function sayname () {
  consolg.log(this.name)
}

```


但是这样如果有很多方法，就要定义很多全局函数，
所以可以通过原型模式解决



> p1.constructor == Person

判断p1实例的构造函数是否是Person


* 原型模式

```
function Person(){

}

Person.prototype.friends =  ['tom']  ;


var p1 = new Person();
var p2 = new Person();


```

缺点：原型模式的最大问题是由于共享产生的

```
p1.friends.push('lina')

console.log(p1.friends) // tom lina
console.log(p2.friends) // tom lina

```
当改变p1的friends 属性，p2实例也会发生变化

所以现在最常用的是 构造函数和原型模式一起使用

* 构造函数和原型模式

构造函数用于定义实例属性，而原型模式用于定义方法和共用属性

```
function Person(name){
  this.name = name;
  this.friends = ['tom'];
}
Person.prototype.say = function (){
  console.log(this.name)
}

var p1 = new Person('tomo')
var p2 = new Person('jdl')

p1.friends.push('lina')

console.log(p1.friends) // tom lina
console.log(p2.friends) // tom

```





> person1.hasOwnPorperty('name')

判断属性是否存在于实例中还是原型中

> 'name' in  person1
判断属性是存在于实例中或者原型中





## 2 继承

通过一个或多个类创建另一个新类的方式叫做继承，
被创建的类叫做子类，用于创建类的类叫做父类(或基类、超类)。


> 1. 继承的实现

* Object.create()

es6中提供了Object.create() 方法 ，可以简单实现对象继承
在基于对象的继承中，一个对象继承另一个对象是不需要调用构造函数的。继承后的子类就拥有了父类的属性和方法，
就如同将子类的原型设置为父类。

```
var Base = {
	name: 'my name is Liu',
	sayName : function(){
		return this.name;
	}
}

var Sub = Object.create(Base);
console.log(Sub.sayName());		//    ->    my name is Liu
console.log(Sub.__proto__.sayName());	//    ->    my name is Liu

```
从上面代码最后一行可以看出，
子类实际上还是通过原型链访问父类中的属性和方法的。
对子类属性和方法的重写将切断对原型链上属性和方法的访问，
但依然可以通过__proto__属性访问原型（父类）上的方法。示例如下：

```
Sub.sayName = function() {
	return 'my name is Sub';
}
console.log(Sub.sayName());		//    ->    my name is Sub
console.log(Sub.__proto__.sayName());	//    ->    my name is Liu

```

* 原型链


```

//类
function Base () {
  this.name = 'Base';
}
Base.prototype.sayName = function() {
  return this.name;
}
/
function Person(){

}

Person.prototype = new Base();
/实例
var p1 = new Person();
console.log(p1.sayName());	//  -> Base



```

创建一个Base实例，并将实例赋值给Person.prototype
实例的本质是重写原型对象，代之以新类型的实例
原来存在于Base实例中的方法，现在也存在于Person.prototype中了


* call apply

```
function Person(){

}

function Examply(){
  Person.call(this)

}


```




