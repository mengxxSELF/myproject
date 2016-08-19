# 加密 crypto

* md5加密
* md5是一个摘要算法 sha1
 * 1. 把任意输入转成固定长度的输出
 * 2. 无法从输出的结果推算出来输入的内容
 * 3. 如果输入内容是一样的，那么输出内容也是一定的
 * 4. 不同的输入会产生不同的输出

 ```javascript

var crypto=require('crypto');

var end = crypto.createHash('md5') // 创建摘要算法
                .update('objName')  // 要加密的目标
                .digest('hex'); // 摘要输出

console.log(end)

 ```

> 加上安全密钥

```javascript

var end = crypto.createHash('shal','miyaoName')  // 第二个参数是个人设置的安全秘钥
                .update('objName')
                .digest('hex' )

```