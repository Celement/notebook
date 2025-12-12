<h1 id="BbY4q"></h1>
+ 循环结构就是为了将相似或者相同的代码操作变得更见简洁，使得代码可以重复利用
+ 循环结构分为2类：`while`循环 和 `for..in`循环

<h4 id="ePyns">1.6.1 while型循环</h4>
```plain
格式1：
    while 条件表达式：
        循环的内容
        [变量的变化]
格式2：
    while 条件表达式：
        循环的内容
        [变量的变化]
    else:
        python语句..
```

+ 注意:while循环中的else是在while条件表达式为假的情况下执行的代码内容,一般用于判断起始条件是否为假等相关操作。
+ 实例使用了 while 来计算 1 到 100 的总和：

```plain
#!/usr/bin/env python3
n = 100
sum = 0
counter = 1
while counter <= n:
    sum = sum + counter
    counter += 1
print("1 到 %d 之和为: %d" % (n,sum))
```

+ 执行结果如下：

```plain
1 到 100 之和为: 5050
```

<h5 id="MM9ok">死循环：</h5>
+ 死循环就是循环不会终止的循环类型，通过将用于判断的条件表达式设置为永远为True来实现。

```plain
while True:
        python代码...
        python代码...
        ...
```

```plain
#!/usr/bin/python3
var = 1
while var == 1 :  # 表达式永远为 true
   num = int(input("输入一个数字  :"))
   print ("你输入的数字是: ", num)
print ("Good bye!")
```

+ 你可以使用 CTRL+C 来退出当前的无限循环
+ 执行以上脚本，输出结果如下：

```plain
输入一个数字  :5
你输入的数字是:  5
输入一个数字  :
```

<h4 id="MqAvp">1.6.2 for ... in 循环</h4>
+ for...in 循环用于遍历容器类的数据（字符串，列表，元组，字典，集合）

```plain
格式：
    for  变量  in  容器：
        python代码,可以在此使用变量
格式2：
    for 变量1,变量2 in 容器：
        python代码,可以在此使用变量1和变量2
```

+ 要求遍历的容器必须是一下几种格式：
    - [(),(),()] 列表中有元组
    - [[],[],[]] 列表中有列表
    - ((),(),()) 元组中有元组
    - {(),(),()} 集合中有元组
    - 字典的特殊使用

```plain
格式3：
    for  变量  in  容器：
        python代码,可以在此使用变量
    else:
        循环结束是执行的代码！
```

```plain
>>>languages = ["C", "C++", "Perl", "Python"] 
>>> for x in languages:
...     print (x)
... 
C
C++
Perl
Python
>>>
```

<h4 id="btqin">1.6.3 range()函数:</h4>
+ 如果你需要遍历数字序列，可以使用内置range()函数。它会生成数列，例如:

```plain
>>>for i in range(5):
...     print(i)
...
0
1
2
3
4
```

```plain
>>>for i in range(5,9) :
    print(i)
5
6
7
8
>>>
```

```plain
>>>for i in range(0, 10, 3) :
    print(i)
0
3
6
9
>>>
```

```plain
>>>for i in range(-10, -100, -30) :
    print(i)
-10
-40
-70
>>>
```

+ 您可以结合range()和len()函数以遍历一个序列的索引,如下所示:

```plain
>>>a = ['Google', 'Baidu', 'Runoob', 'Taobao', 'QQ']
>>> for i in range(len(a)):
...     print(i, a[i])
... 
0 Google
1 Baidu
2 Runoob
3 Taobao
4 QQ
>>>
```

<h5 id="aIzN3">输出乘法口诀：</h5>
```plain
for i in range(1,10):
    for j in range(1,i+1):
        print(str(i)+'*'+str(j)+"="+str(i*j),end="")
    print()
```

<h3 id="ldTrF">1.3.7 作业：逆向输出乘法口诀：</h3>
```plain
for i in range(9,0,-1):
    for j in range(i,0,-1):
        print(str(i)+'*'+str(j)+"="+str(i*j),end="")
    print()
```

<h4 id="tmr1O">1.6.4 break和continue语句及循环中的else子句：</h4>
<h5 id="yURE0">break语句：</h5>
+ break作用:在循环中break的作用是终止当前循环结构的后续操作，一旦程序运行了break，循环也就终止了！
+ break 语句可以跳出 for 和 while 的循环体。如果你从 for 或 while 循环中终止，任何对应的循环 else 块将不执行。 实例如下：

```plain
#!/usr/bin/python3
for letter in 'Runoob':     # 第一个实例
   if letter == 'b':
      break
   print ('当前字母为 :', letter)
var = 10                    # 第二个实例
while var > 0:              
   print ('当期变量值为 :', var)
   var = var -1
   if var == 5:
      break
print ("Good bye!")
```

+ 执行以上脚本输出结果为：

```plain
当前字母为 : R
当前字母为 : u
当前字母为 : n
当前字母为 : o
当前字母为 : o
当期变量值为 : 10
当期变量值为 : 9
当期变量值为 : 8
当期变量值为 : 7
当期变量值为 : 6
Good bye!
```

<h5 id="tC0rN">continue语句：</h5>
+ continue语句被用来告诉Python跳过当前循环块中的剩余语句，然后继续进行下一轮循环。

```plain
#!/usr/bin/python3
for letter in 'Runoob':     # 第一个实例
   if letter == 'o':        # 字母为 o 时跳过输出
      continue
   print ('当前字母 :', letter)
var = 10                    # 第二个实例
while var > 0:              
   var = var -1
   if var == 5:             # 变量为 5 时跳过输出
      continue
   print ('当前变量值 :', var)
print ("Good bye!")
```

+ 执行以上脚本输出结果为：

```plain
当前字母 : R
当前字母 : u
当前字母 : n
当前字母 : b
当前变量值 : 9
当前变量值 : 8
当前变量值 : 7
当前变量值 : 6
当前变量值 : 4
当前变量值 : 3
当前变量值 : 2
当前变量值 : 1
当前变量值 : 0
Good bye!
```

+ 循环语句可以有 else 子句，它在穷尽列表(以for循环)或条件变为 false (以while循环)导致循环终止时被执行,但循环被break终止时不执行。
+ 如下实例用于查询质数的循环例子:

```plain
#!/usr/bin/python3
for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(n, '等于', x, '*', n//x)
            break
    else:
        # 循环中没有找到元素
        print(n, ' 是质数')
```

+ 执行以上脚本输出结果为：

```plain
2  是质数
3  是质数
4 等于 2 * 2
5  是质数
6 等于 2 * 3
7  是质数
8 等于 2 * 4
9 等于 3 * 3
```

<h5 id="VZDjB">pass 语句:</h5>
+ Python pass是空语句，是为了保持程序结构的完整性。
+ pass 不做任何事情，一般用做占位语句，如下实例

```plain
>>>while True:
...     pass  # 等待键盘中断 (Ctrl+C)
最小的类:
>>>class MyEmptyClass:
...     pass
```

