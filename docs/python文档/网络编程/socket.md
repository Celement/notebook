<h4 id="UVlgP">什么是socket</h4>


socket是进程中通信的一种方式,它能实现不同主机间进程通信,我们在网络服务大多数都是基于socket完成的   qq聊天



<h4 id="8T1n5">创建socket</h4>
```python
import socket
socket.socket("",type)
```

**<font style="color:#F5222D;">说明:可以选择AF_INET(用于internet进程间通信)或者AF_UNIX(用于一台机器进行进程间通信)</font>**

**<font style="color:#F5222D;">type:套接字类型可以用SOCK_STREAM(流式套接字 TCP)  SOCK_DGRAM(UDP)</font>**

+ 创建套接字
+ 使用套接字接发数据
+ 关闭套接字



