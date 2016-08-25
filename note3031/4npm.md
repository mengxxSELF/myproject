#npm  Node的包管理机制

NPM，Node包管理器（Node Package Manager）功能包括：第三方包库、管理计算机中安装的包的机制及定义包依赖关系

NPM有两种工作方式：全局模式和本地模式

> npm 默认的安装环境是本地环境   加上 -g   就代表全局环境


```javascript
npm init
npm init -y

npm -v

npm install somthing -g

npm install angular --save
npm install angular -S

npm install angular --save-dev
npm install angular -D

npm i angular -D

npm unstall something -g

npm update something


npm root -g 查看全局安装目录


```


###在npm上发布一个自己的包 [npm官网](https://www.npmjs.com/)
再发布自己的包之前，先搜索查看是否有重名的包

```javascript
npm adduser  如果以前没有注册过，直接写这个就可以创建一个账号了

npm login 登录 (其实一旦电脑登录上，下次就不需要再重新登了，直接发包就可以 )

npm publish  发布包



npm unpublish --force  强制删除发布的包 这个会删除掉最新版本 返回之前的那个版本
npm unpublish mypackagename@2.3.0  删除名称是。。。 的 版本为 2.3.0 的 ，会更新到之前的那个版本





当你更改之后再次发布的时候，记得更改 package.json中  版本号
```



##  更新版本库

更新包以后重新发布的时候 ，需要更新版本号
更新版本号的时候 你可以手动更新package.json的版本号 也可以同以下命令更新
npm包的版本号一般都是x.y.z的形式。

其中x表示主版本号，通常有重大改变或者达到里程碑才改变；

y表示次要版本号，或二级版本号，在保证主体功能基本不变的情况下，
如果适当增加了新功能可以更新此版本号；

z表示尾版本号或者补丁号，一些小范围的修修补补就可以更新补丁号。
``` javascript

npm version major => x+1 && y=0 && z=0
npm version minor => y+1 && z=0
npm version patch => z+1

```












