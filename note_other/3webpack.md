# webpack

## module ����ģ��

```
modules:{
  //���ü�������һ������
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
������buildĿ¼������html�ļ�

> open-browser-webpack-plugin

����ɹ�֮���Զ����������ʾ

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

















