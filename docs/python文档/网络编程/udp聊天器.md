+ 获取键盘的数据,然后将数据发送给对方
+ 接收数据并且显示

```python
import socket

def send_msg(udp_socket):
    #从键盘获取数据
    msg=input("\n请输入你要发送的数据:")
    dest_ip=input("\n请输入对方的ip地址:")
    dest_port=int(input("\n请输入对方的端口号:"))
    #发送数据
    udp_socket.sendto(msg.encode("utf-8"),(dest_ip,dest_port))

def recv_msg(udp_socket):
    recv_msg=udp_socket.recvfrom(1024)
    recv_ip=recv_msg[1]
    recv_msg=recv_msg[0].decode("utf-8")
    print("--%s:%s"%(str(recv_ip),recv_msg))

def main():
    udp_socket=socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
    udp_socket.bind(("",9999))
    while True:
        print("*"*30)
        print("1:发送信息")
        print("2:接收信息")
        print("*" * 30)
        flag=input("请输入你的操作命令:")
        if flag=="1":
            send_msg(udp_socket)
        elif flag=="2":
            recv_msg(udp_socket)
        else:
            print("操作有误")
if __name__ == '__main__':
    main()

'''
如果我们选择了接收数据功能,此时没有数据程序就会堵塞,如何让收发数据一起进行 需要学习多任务
'''    

```

