#git


##配置github账号

```javascript
git config --global  user.name  yougithubname
git config --global  user.email youemail
```
##查看配置列表
```javascript
git config --list
```

> 常用代码


```javascript
cd  更改目录
git init  初始化仓库
ls  查看文件 不包括隐藏文件
ls -a  查看所有文件 ，只显示名称
ls -al  查看所有文件，显示详细信息  创建时间 大小
mkdir dirname 创建文件夹
touch filename.html 创建文件
rm filename.html 删除文件
echo textcontent > filename.html 写入内容
echo textcontent >> filename.html 继续写入内容，不被覆盖


```


##  查看状态
```javascript
git status
```
## 内容推送到仓库
> 如下过程

```javascript
git add --all;
git commit -m'message';
git pull;
git push;
```















