<h2 id="ysf5">Python位运算符</h2>
按位运算符是把数字看作二进制来进行计算的。Python中的按位运算法则如下：

下表中变量 a 为 60，b 为 13二进制格式如下：

<font style="color:#000000;">a </font><font style="color:#666600;">=</font><font style="color:#000000;"> </font><font style="color:#006666;">0011</font><font style="color:#000000;"> </font><font style="color:#006666;">1100</font>

b <font style="color:#666600;">=</font><font style="color:#000000;"> </font><font style="color:#006666;">0000</font><font style="color:#000000;"> </font><font style="color:#006666;">1101</font>



| 运算符 | 描述 | 实例 |
| --- | --- | --- |
| & | 按位与运算符：参与运算的两个值,如果两个相应位都为1,则该位的结果为1,否则为0 | (a & b) 输出结果 12 ，二进制解释： 0000 1100 |
| | | 按位或运算符：只要对应的二个二进位有一个为1时，结果位就为1。 | (a | b) 输出结果 61 ，二进制解释： 0011 1101 |
| ^ | 按位异或运算符：当两对应的二进位相异时，结果为1 | (a ^ b) 输出结果 49 ，二进制解释： 0011 0001 |
| ~ | 按位取反运算符：对数据的每个二进制位取反,即把1变为0,把0变为1。**~x** 类似于 **-x-1** | (~a ) 输出结果 -61 ，二进制解释： 1100 0011， 在一个有符号二进制数的补码形式。 |
| << | 左移动运算符：运算数的各二进位全部左移若干位，由"<<"右边的数指定移动的位数，高位丢弃，低位补0。 | a << 2 输出结果 240 ，二进制解释： 1111 0000 |
| >> | 右移动运算符：把">>"左边的运算数的各二进位全部右移若干位，">>"右边的数指定移动的位数 | a >> 2 输出结果 15 ，二进制解释： 0000 1111 |


以下实例演示了Python所有位运算符的操作：

```python
a = 60            # 60 = 0011 1100 
b = 13            # 13 = 0000 1101 
c = 0
 
c = a & b;        # 12 = 0000 1100
print ("1 - c 的值为：", c)
 
c = a | b;        # 61 = 0011 1101 
print ("2 - c 的值为：", c)
 
c = a ^ b;        # 49 = 0011 0001
print ("3 - c 的值为：", c)
 
c = ~a;           # -61 = 1100 0011
print ("4 - c 的值为：", c)
 
c = a << 2;       # 240 = 1111 0000
print ("5 - c 的值为：", c)
 
c = a >> 2;       # 15 = 0000 1111
print ("6 - c 的值为：", c)
```

<h2 id="yGSWD"><font style="background-color:transparent;">实例(Python 3.0+)</font></h2>


以上实例输出结果：

<font style="color:#006666;">1</font><font style="color:#000000;"> </font><font style="color:#666600;">-</font><font style="color:#000000;"> c </font><font style="color:#666600;">的值为：</font><font style="color:#000000;"> </font><font style="color:#006666;">12</font>

<font style="color:#006666;">2</font><font style="color:#000000;"> </font><font style="color:#666600;">-</font><font style="color:#000000;"> c </font><font style="color:#666600;">的值为：</font><font style="color:#000000;"> </font><font style="color:#006666;">61</font>

<font style="color:#006666;">3</font><font style="color:#000000;"> </font><font style="color:#666600;">-</font><font style="color:#000000;"> c </font><font style="color:#666600;">的值为：</font><font style="color:#000000;"> </font><font style="color:#006666;">49</font>

<font style="color:#006666;">4</font><font style="color:#000000;"> </font><font style="color:#666600;">-</font><font style="color:#000000;"> c </font><font style="color:#666600;">的值为：</font><font style="color:#000000;"> </font><font style="color:#666600;">-</font><font style="color:#006666;">61</font>

<font style="color:#006666;">5</font><font style="color:#000000;"> </font><font style="color:#666600;">-</font><font style="color:#000000;"> c </font><font style="color:#666600;">的值为：</font><font style="color:#000000;"> </font><font style="color:#006666;">240</font>

<font style="color:#006666;">6</font><font style="color:#000000;"> </font><font style="color:#666600;">-</font><font style="color:#000000;"> c </font><font style="color:#666600;">的值为：</font><font style="color:#000000;"> </font><font style="color:#006666;">15</font>

