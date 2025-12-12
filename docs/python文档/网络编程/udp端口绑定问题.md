![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1594531909739-e7886c38-6221-4857-82eb-90c5fed4e52f.png)

每重新运行一次程序那么我们的网络调试助手中看到udp发送程序来自的端口在变化,系统会随机分配

网络程序在运行过程中,这个端口号就唯一标识该程序,其他的电脑如果想要向此程序发送数据,那么就需要向这个端口标识的程序发送

<h4 id="wtAwY">绑定端口</h4>
```python
from socket import *
udp_socket=socket(AF_INET,SOCK_DGRAM)

#准备接收方的地址

local_addr=('',6666)
udp_socket.bind(local_addr)
recv_data=udp_socket.recvfrom(1024)

print(recv_data[0].decode('gbk'))
udp_socket.close()
```



