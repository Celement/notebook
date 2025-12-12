```python
from socket import *

#创建socket
tcp_client_socket=socket(AF_INET,SOCK_STREAM)

#目的信息
server_ip=input("请输入服务器ip:")
server_port=int(input("请输入服务器端口号:"))

#链接服务器
tcp_client_socket.connect((server_ip,server_port))
#提示用户输入数据
send_data=input("请输入要发送的数据:")

tcp_client_socket.send(send_data.encode('gbk'))

recv_data=tcp_client_socket.recv(1024)
print("接收的数据是:",recv_data.decode('gbk'))

tcp_client_socket.close()
```



