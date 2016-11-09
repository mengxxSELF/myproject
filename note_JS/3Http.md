# Http 协议

HTTP协议（HyperText Transfer Protocol，超文本传输协议）
是用于从WWW服务器传输超文本到本地浏览器的传送协议。
它可以使浏览器更加高效，使网络传输减少。
它不仅保证计算机正确快速地传输超文本文档，
还确定传输文档中的哪一部分，以及哪部分内容首先显示(如文本先于图形)等。

HTTP是一个应用层协议，由请求和响应构成，
是一个标准的客户端服务器模型。HTTP是一个无状态的协议。

之所以说HTTP是无状态协议，是因为同一个客户端的这次请求和上次请求是没有对应关系。

## 工作流程
一次HTTP操作称为一个事务，其工作过程可分为四步：

1）首先客户机与服务器需要建立连接。只要单击某个超级链接，HTTP的工作开始。

2）建立连接后，客户机发送一个请求给服务器，请求方式的格式为：统一资源标识符（URL）、协议版本号，后边是MIME信息包括请求修饰符、客户机信息和可能的内容。

3）服务器接到请求后，给予相应的响应信息，其格式为一个状态行，包括信息的协议版本号、一个成功或错误的代码，后边是MIME信息包括服务器信息、实体信息和可能的内容。

4）客户端接收服务器所返回的信息通过浏览器显示在用户的显示屏上，然后客户机与服务器断开连接。

如果在以上过程中的某一步出现错误，那么产生错误的信息将返回到客户端，有显示屏输出。对于用户来说，这些过程是由HTTP自己完成的，用户只要用鼠标点击，等待信息显示就可以了。