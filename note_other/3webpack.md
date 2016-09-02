# webpack

## module 配置模块

```
modules:{
  //设置加载器是一个数组
  loaders:[
    {
       test: / \.jsx?$ /,
       loader:'babel'
    }
  ]
}

```

## plugins

> html-webpack-plugin
用来在build目录下生产html文件

> open-browser-webpack-plugin

打包成功之后自动打开浏览器显示

```
plugins:[
  new htmkWebpackPlugin({
     template:'./index.html'
  })
  new OpenBrowerWebpackPlugin({
     url:'http://localhost:8008'
  })
]

```

















