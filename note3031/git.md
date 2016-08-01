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
pwd 显示当前目录
cd  更改目录
ls  查看文件 不包括隐藏文件
ls -a  查看所有文件 ，只显示名称
ls -al  查看所有文件，显示详细信息  创建时间 大小
mkdir dirname 创建文件夹
touch filename.html 创建文件
rm filename.html 删除文件
echo textcontent > filename.html 写入内容
echo textcontent >> filename.html 继续写入内容，不被覆盖


```

## 初始化一个git仓库
```javascript
git init
```


##  查看状态
```javascript
git status
```
## 内容推送到仓库
> 如下过程

```javascript
git add --all; 推送到缓存区
git commit -m'message';  缓存区推送到历史区
git pull; 远程仓库代码Pull到本地
git push; 推送到远程仓库
```
> 或者是

`git commit -a -m'message';git pull;git push `

##比较不同
```javascript
git diff   工作区和缓存区
git diff --cached  缓存区和版本库
git diff --master 工作区和版本库

```
## 查看历史库版本
`git log`

## 回滚
> 可以通过版本号
```javascript
git reflog 查看版本

git reset --hard 版本号  //硬回滚
```

> git远程仓库
```javascript
注册github账户之后
git remote add origin https://github.com/zhufengzhufeng/project.git 关联远程仓库
在本地建立一个 .gitignore文件存放那些不需要传送到github上的文件名称
比如 .idea node_modules .DS_Store
git push origin  master -u 第一次推送代码的时候写上这个，以后直接git push即可


```



























