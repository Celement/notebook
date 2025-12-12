<h1 id="vlxKT"></h1>
**标准数据类型**

+ Python3 中有六个标准的数据类型：
    - Number（数字）
        * int
        * bool
        * float
        * complex（复数）
    - String（字符串）
    - List（列表）
    - Tuple（元组）
    - Sets（集合）
    - Dictionary（字典）

<h4 id="TPiJf">(1) Number（数字）</h4>
+ Python3 支持 int、float、bool、complex（复数）。
+ 在Python 3里，只有一种整数类型 int，表示为长整型，没有 python2 中的 Long。
+ 像大多数语言一样，数值类型的赋值和计算都是很直观的。
+ 内置的 type() 函数可以用来查询变量所指的对象类型。

```plain
>>> a, b, c, d = 20, 5.5, True, 4+3j
>>> print(type(a), type(b), type(c), type(d))
<class 'int'> <class 'float'> <class 'bool'> <class 'complex'>
```

+ 此外还可以用 isinstance 来判断：

```plain
>>>a = 111
>>> isinstance(a, int)
True
>>>
```

+ isinstance 和 type 的区别在于：

```plain
class A:
    pass
class B(A):
    pass
isinstance(A(), A)  # returns True
type(A()) == A      # returns True
isinstance(B(), A)    # returns True
type(B()) == A        # returns False
```

+ 区别就是:
    - type()不会认为子类是一种父类类型。
    - isinstance()会认为子类是一种父类类型。

```plain
注意：在 Python2 中是没有布尔型的，它用数字 0 表示 False，用 1 表示 True。
到 Python3 中，把 True 和 False 定义成关键字了，但它们的值还是 1 和 0，它们可以和数字相加。
```

+ 当你指定一个值时，Number 对象就会被创建：

```plain
var1 = 1
var2 = 10
```

+ 您也可以使用del语句删除一些对象引用。
    - del语句的语法是：
    - del var1[,var2[,var3[....,varN]]]]
+ 您可以通过使用del语句删除单个或多个对象。例如

```plain
del var
del var_a, var_b
```

<h5 id="ZCMkr">整数的进制:</h5>
```plain
# 输出其他进制数值
>>> bin(255) #255的二进制
'0b11111111'
>>> oct(255) #255的八进制
'0o377'
>>> hex(255) #255的十六进制
'0xff'
>>> a=0b10   #赋值二进制数值
>>> a
2
>>> a=0o10   #赋值八进制数值
>>> a
8
>>> a=0x10   #赋值十六进制数值
>>> a
16
```

<h4 id="C0uKr">(2) String（字符串）</h4>
+ Python中的字符串用单引号(')或双引号(")括起来，同时使用反斜杠()转义特殊字符。
+ 字符串的截取的语法格式如下：
    - `变量[头下标:尾下标]`
+ 索引值以 0 为开始值，-1 为从末尾的开始位置。
+ 加号 (+) 是字符串的连接符， 星号 (*) 表示复制当前字符串，紧跟的数字为复制的次数。实例如下：

```plain
#!/usr/bin/python3
str = 'zhangsan'
print (str)          # 输出字符串
print (str[0:-1])    # 输出第一个到倒数第二个的所有字符
print (str[0])       # 输出字符串第一个字符
print (str[2:5])     # 输出从第三个开始到第五个的字符
print (str[2:])      # 输出从第三个开始的后的所有字符
print (str * 2)      # 输出字符串两次
print (str + "TEST") # 连接字符串
```

+ 输出结果：

```plain
zhangsan
zhangsa
z
ang
angsan
zhangsanzhangsan
zhangsanTEST
```

+ Python 使用反斜杠()转义特殊字符，如果你不想让反斜杠发生转义，可以在字符串前面添加一个`r`，表示原始字符串：

```plain
>>> print('Ru\noob')
Ru
oob
>>> print(r'Ru\noob')
Ru\noob
>>>
```

+ 另外，反斜杠()可以作为续行符，表示下一行是上一行的延续。也可以使用 """...""" 或者 '''...''' 跨越多行。
+ 注意，Python 没有单独的字符类型，一个字符就是长度为1的字符串。

```plain
>>>word = 'Python'
>>> print(word[0], word[5])
P n
>>> print(word[-1], word[-6])
n P
```

+ 与 C 字符串不同的是，Python 字符串不能被改变。向一个索引位置赋值，比如word[0] = 'm'会导致错误。
+ 注意：
    - 1、反斜杠可以用来转义，使用`r`可以让反斜杠不发生转义。
    - 2、字符串可以用+运算符连接在一起，用`*`运算符重复。
    - 3、Python中的字符串有两种索引方式，从左往右以0开始，从右往左以-1开始。
    - 4、Python中的字符串不能改变。

<h4 id="LqjtT">(3) List（列表）</h4>
+ List（列表） 是 Python 中使用最频繁的数据类型。
+ 列表可以完成大多数集合类的数据结构实现。列表中元素的类型可以不相同，它支持数字，字符串甚至可以包含列表（所谓嵌套）。
+ 列表是写在方括号`[]`之间、用逗号分隔开的元素列表。
+ 和字符串一样，列表同样可以被索引和截取，列表被截取后返回一个包含所需元素的新列表。
+ 列表截取的语法格式如下：
    - `变量[头下标:尾下标]`
+ 索引值以 0 为开始值，-1 为从末尾的开始位置。
+ 加号（+）是列表连接运算符，星号（*）是重复操作。如下实例：

```plain
#!/usr/bin/python3
list = [ 'abcd', 786 , 2.23, 'demo', 70.2 ]
tinylist = [123, 'demo']
print (list)            # 输出完整列表
print (list[0])         # 输出列表第一个元素
print (list[1:3])       # 从第二个开始输出到第三个元素
print (list[2:])        # 输出从第三个元素开始的所有元素
print (tinylist * 2)    # 输出两次列表
print (list + tinylist) # 连接列表
```

+ 以上实例输出结果：

```plain
['abcd', 786, 2.23, 'demo', 70.2]
abcd
[786, 2.23]
[2.23, 'demo', 70.2]
[123, 'demo', 123, 'demo']
['abcd', 786, 2.23, 'demo', 70.2, 123, 'demo']
```

+ 与Python字符串不一样的是，列表中的元素是可以改变的：

```plain
>>>a = [1, 2, 3, 4, 5, 6]
>>> a[0] = 9
>>> a[2:5] = [13, 14, 15]
>>> a
[9, 2, 13, 14, 15, 6]
>>> a[2:5] = []   # 将对应的元素值设置为 [] 
>>> a
[9, 2, 6]
```

+ List内置了有很多方法，例如append()、pop()等等，这在后面会讲到。

*注意：

```plain
* 1、List写在方括号之间，元素用逗号隔开。
* 2、和字符串一样，list可以被索引和切片。
* 3、List可以使用+操作符进行拼接。
* 4、List中的元素是可以改变的。
```

<h4 id="VSujt">(4) Tuple（元组）</h4>
+ 元组（tuple）与列表类似，不同之处在于元组的元素不能修改。元组写在小括号(())里，元素之间用逗号隔开。
+ 元组中的元素类型也可以不相同：

```plain
#!/usr/bin/python3
tuple = ( 'abcd', 786 , 2.23, 'demo', 70.2  )
tinytuple = (123, 'demo')
print (tuple)             # 输出完整元组
print (tuple[0])          # 输出元组的第一个元素
print (tuple[1:3])        # 输出从第二个元素开始到第三个元素
print (tuple[2:])         # 输出从第三个元素开始的所有元素
print (tinytuple * 2)     # 输出两次元组
print (tuple + tinytuple) # 连接元组
```

+ 以上实例输出结果：

```plain
('abcd', 786, 2.23, 'demo', 70.2)
abcd
(786, 2.23)
(2.23, 'demo', 70.2)
(123, 'demo', 123, 'demo')
('abcd', 786, 2.23, 'demo', 70.2, 123, 'demo')
```

+ 元组与字符串类似，可以被索引且下标索引从0开始，-1 为从末尾开始的位置。
+ 也可以进行截取（看上面，这里不再赘述）。
+ 其实，可以把字符串看作一种特殊的元组。

```plain
>>>tup = (1, 2, 3, 4, 5, 6)
>>> print(tup[0])
1
>>> print(tup[1:5])
(2, 3, 4, 5)
>>> tup[0] = 11  # 修改元组元素的操作是非法的
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
>>>
```

+ 虽然tuple的元素不可改变，但它可以包含可变的对象，比如list列表。
+ 构造包含 0 个或 1 个元素的元组比较特殊，所以有一些额外的语法规则：

```plain
tup1 = ()    # 空元组
tup2 = (20,) # 一个元素，需要在元素后添加逗号
string、list和tuple都属于sequence（序列）。
```

+ 注意：
    - 1、与字符串一样，元组的元素不能修改。
    - 2、元组也可以被索引和切片，方法一样。
    - 3、注意构造包含0或1个元素的元组的特殊语法规则。
    - 4、元组也可以使用+操作符进行拼接。

<h4 id="CKNdf">(5) Set（集合）</h4>
+ 集合（set）是一个无序不重复元素的序列。
+ 基本功能是进行成员关系测试和删除重复元素。
+ 可以使用大括号 `{ }` 或者`set()`函数创建集合，注意：创建一个空集合必须用`set()`而不是 `{ }`，因为 `{ }` 是用来创建一个空字典。
+ 创建格式：

```plain
parame = {value01,value02,...}
或者
set(value)
```

+ 实例:

```plain
#!/usr/bin/python3
student = {'Tom', 'Jim', 'Mary', 'Tom', 'Jack', 'Rose'}
print(student)   # 输出集合，重复的元素被自动去掉
# 成员测试
if('Rose' in student) :
    print('Rose 在集合中')
else :
    print('Rose 不在集合中')
# set可以进行集合运算
a = set('abracadabra')
b = set('alacazam')
print(a)
print(a - b)     # a和b的差集
print(a | b)     # a和b的并集
print(a & b)     # a和b的交集
print(a ^ b)     # a和b中不同时存在的元素
```

+ 以上实例输出结果：

```plain
{'Mary', 'Jim', 'Rose', 'Jack', 'Tom'}
Rose 在集合中
{'b', 'a', 'c', 'r', 'd'}
{'b', 'd', 'r'}
{'l', 'r', 'a', 'c', 'z', 'm', 'b', 'd'}
{'a', 'c'}
{'l', 'r', 'z', 'm', 'b', 'd'}
```

<h4 id="IPih6">(6) Dictionary（字典）</h4>
+ 字典（dictionary）是Python中另一个非常有用的内置数据类型。
+ 列表是有序的对象结合，字典是无序的对象集合。两者之间的区别在于：字典当中的元素是通过键来存取的，而不是通过偏移存取。
+ 字典是一种映射类型，字典用"{ }"标识，它是一个无序的键(key) : 值(value)对集合。
+ 键(key)必须使用不可变类型。
+ 在同一个字典中，键(key)必须是唯一的。

```plain
#!/usr/bin/python3
dict = {}
dict['one'] = "1 - Python教程"
dict[2]     = "2 - Python工具"
tinydict = {'name': 'demo','code':1, 'site': 'www.demo.com'}
print (dict['one'])       # 输出键为 'one' 的值
print (dict[2])           # 输出键为 2 的值
print (tinydict)          # 输出完整的字典
print (tinydict.keys())   # 输出所有键
print (tinydict.values()) # 输出所有值
```

以上实例输出结果：

```plain
1 - Python教程
2 - Python工具
{'name': 'demo', 'site': 'www.demo.com', 'code': 1}
dict_keys(['name', 'site', 'code'])
dict_values(['demo', 'www.demo.com', 1])
```

+ 构造函数 dict() 可以直接从键值对序列中构建字典如下：
+ 实例

```plain
>>>dict([('demo', 1), ('Google', 2), ('Taobao', 3)])
{'Taobao': 3, 'demo': 1, 'Google': 2}
>>> {x: x**2 for x in (2, 4, 6)}
{2: 4, 4: 16, 6: 36}
>>> dict(demo=1, Google=2, Taobao=3)
{'Taobao': 3, 'demo': 1, 'Google': 2}
```

+ 另外，字典类型也有一些内置的函数，例如clear()、keys()、values()等。
+ 注意：
    - 1、字典是一种映射类型，它的元素是键值对。
    - 2、字典的关键字必须为不可变类型，且不能重复。
    - 3、创建空字典使用 { }。

<h4 id="DCYJT">Python数据类型转换</h4>
+ 有时候，我们需要对数据内置的类型进行转换，数据类型的转换，你只需要将数据类型作为函数名即可。
+ 以下几个内置的函数可以执行数据类型之间的转换。这些函数返回一个新的对象，表示转换的值

| 函数 | 描述 |
| --- | --- |
| int(x [,base]) | 将x转换为一个整数 |
| float(x) | 将x转换到一个浮点数 |
| complex(real [,imag]) | 创建一个复数 |
| str(x) | 将对象 x 转换为字符串 |
| repr(x) | 将对象 x 转换为表达式字符串 |
| eval(str) | 用来计算在字符串中的有效Python表达式,并返回一个对象 |
| tuple(s) | 将序列 s 转换为一个元组 |
| list(s) | 将序列 s 转换为一个列表 |
| set(s) | 转换为可变集合 |
| dict(d) | 创建一个字典。d 必须是一个序列 (key,value)元组。 |
| frozenset(s) | 转换为不可变集合 |
| chr(x) | 将一个整数转换为一个字符 |
| unichr(x) | 将一个整数转换为Unicode字符 |
| ord(x) | 将一个字符转换为它的整数值 |
| hex(x) | 将一个整数转换为一个十六进制字符串 |
| oct(x) | 将一个整数转换为一个八进制字符串 |


<h5 id="RD7GQ">数据类型转换分类：</h5>
+ 数据类型转换一共分为2类：自动数据类型转换(隐式转换)和强制数据类型转换(显示转换)

<h5 id="PXiGu">自动数据类型转换/隐式转换</h5>
+ 自动类型转换是程序根据运算要求进行的转换，不需要人工干预 1.自动类型转换不需要人工干预 2.自动类型转换多发生在运算或者判断过程中 3.转化时向着更加精确的类型转换

<h5 id="O78wu">强制类型转换/显示转换</h5>
+ 根据程序需要，由编写程序人员人为改变数据类型的方式就是强制数据类型转换。
+ int() 将其他类型转化为整型

```plain
1.数字整型转化之后，还是原来的味道
2.浮点类型转化之后，舍去小数部分
3.布尔值转化之后 True -> 1 False->0
4.字符串转换，仅纯整型字符串可以转化（浮点型或者带有其他字符都不可以转化）
5.复数不可以转换
```

+ float() 将其他类型转化为浮点型

```plain
1.整型转换之后变为浮点型，后面+.0
2.浮点数不需要转化，转化也不会变化
3.布尔值转化 True->1.0  False ->0.0
4.字符串，纯整型字符串和纯浮点型字符串可以转换，其他都不可以
```

+ complex() 将其他数据转化为复数

```plain
1.整型转换之后变为 （整型+0j）
2.浮点型转换之后变为(浮点型 + 0j)
3.布尔值转化之后 True->（1+0j） False(0j)
4.字符串，纯整型和浮点型字符串可以转化，其他都不行
5.复数，无需转换
```

+ bool() 将其他类型转化为布尔值

```plain
#下面转化为布尔值false的情况
    1.整型   0
    2.浮点型  0.0
    3.复数  0+0j
    4.布尔  False
    5.字符串  '' 空字符串
    6.列表   [] 空列表
    7.元组   ()空元组
    8.字典   {} 空字典
    9.集合   set() 空集合
```

+ str() 将其他类型转化为字符串
    - 所有转换均改变类型为字符串，表示方式依旧不变
+ list() 将其他类型转化为列表类型
    - 在python中有5中可迭代序列，可以互相转换，他们分别是：
    - 字符串，列表，元组，字典，集合

```plain
var = ('张三','李四','王老五')
newvar = list(var)
newvar的值为 ['张三','李四','王老五']
```

+ `注意：`
    - 1.字符串转换时每个字符变成列表中的一个值
    - 2.字典类型转换时，仅将字典的键部分转换成列表，忽略值部分
+ tuple() 将其他类型转化为元组类型

```plain
var = {'张三','李四','王老五'}
newvar = tuple(var)
newvar的值为 ('张三','李四','王老五')
```

+ `注意：`
    - 1.字符串转换时每个字符变成元组中的一个值
    - 2.字典类型转换时，仅将字典的键部分转换成元组，忽略值部分
+ set（） 将其他类型转化为集合类型

```plain
var = ['张三','李四','王老五']
newvar = set(var)
newvar的值为 {'张三','李四','王老五'}  #值的顺序不定
```

+ `注意：`
    - 1.字符串转换时每个字符变成集合中的一个值
    - 2.字典类型转换时，仅将字典的键部分转换集合，忽略值部分
+ dict() 将其他类型转换为字典类型
+ 其他类型转化为字典时需要按照指定的格式才可以转化：（列表和元组的组合可以）

```plain
[['cat', '黑猫警长'], ['mouse', '一只耳'], ['next', '请看夏季']]
[('cat', '黑猫警长'), （'mouse', '一只耳'）, （'next', '请看夏季'）]
```

