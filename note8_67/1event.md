# event

on emit

emit 一次 相当于向方法池中添加一个函数   写一次加一次 即使是相同函数名
[ fn1 , fn2,fn1,fn4 ,fn1]


once 发射一次之后移除


removeListen  在发射之前移除  是就近移除
removeListen(emitName,fn)

removeAllListen 移除所有监听
removeAllListen 有参数则移除参数事件


有最大监听数 10  但是可以自己设置  target.setMaxListeners()


listeners 获取当前函数池子中函数个数