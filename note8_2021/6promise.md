#Promise

## 三种状态  fulfilled failed unfulfilled


promise是一个实例  默认初始态为unfulfilled 未完成

调用 resolve 状态变为成功态 fulfilled
调用 reject 状态变为失败态 unfulfilled


## all 参数为数组

静态方法 all
当数组中所有的promise实例都成功，才调用成功的回调

```
/* 所有的promise都是与的关系  全部回调成功后 才调用成功的回调  */
Promise.all([p1,p2]).then(function () {
    console.log(arguments)
})
```

## race  参数数组

当数组中有一个的promise实例成功，调用成功的回调
