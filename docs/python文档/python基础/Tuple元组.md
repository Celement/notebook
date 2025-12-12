<h1 id="qhbRr"></h1>
+ Python 的元组与列表类似，不同之处在于元组的元素不能修改。
+ 元组使用小括号，列表使用方括号。
+ 元组创建很简单，只需要在括号中添加元素，并使用逗号隔开即可。

```plain
# 定义元组的方式：
tup0 = ()  #定义一个空元组 或者 变量 = tuple()
tup1 = ('Google', 'Python', 1997, 2000)
tup2 = (1, 2, 3, 4, 5 )
tup3 = "a", "b", "c", "d"
# 输出元组：
print ("tup1[0]: ", tup1[0])       # tup1[0]:  Google
print ("tup2[1:5]: ", tup2[1:5])   # tup2[1:5]:  (2, 3, 4, 5)
# 注意下面这种定义不加逗号，类型为整型
tup4 = (50)
print(type(tup4))  # <class 'int'>
# 正确定义方式加上逗号，类型为元组
tup5 = (50,)
print(type(tup5))  # <class 'tuple'>
# 以下修改元组元素操作是非法的。
# tup1[0] = 100
#元组中的元素值是不允许删除的，但我们可以使用del语句来删除整个元组
del tup0;
```

<h4 id="wP5yC">元组运算符：</h4>
+ 与字符串一样，元组之间可以使用 + 号和 * 号进行运算。这就意味着他们可以组合和复制，运算后会生成一个新的元组。

| Python 表达式 | 结果 | 描述 |
| --- | --- | --- |
| len((1, 2, 3)) | 3 | 长度 |
| (1, 2, 3) + (4, 5, 6) | (1, 2, 3, 4, 5, 6) | 组合 |
| ('Hi!') * 4 | ('Hi!', 'Hi!', 'Hi!', 'Hi!') | 重复 |
| 3 in (1, 2, 3) | True | 元素是否存在于元组中 |
| for x in (1, 2, 3): print(x, end=" ") | 1 2 3 | 迭代 |


<h4 id="FBh0s">　元组索引，截取：</h4>
+ 因为元组也是一个序列，所以我们可以访问元组中的指定位置的元素，也可以截取索引中的一段元素
+ 如下所示：L=('Google', 'Python', 'Taobao')

| Python | 表达式 结果 | 描述 |
| --- | --- | --- |
| L[2] | 'Taobao' | 读取第三个元素 |
| L[-2] | 'Python' | 从右侧开始读取倒数第二个元素: count from the right |
| L[1:] | ('Python', 'Taobao') | 输出从第二个元素开始后的所有元素 |


<h4 id="XcXUl">元组内置函数:</h4>
+ Python元组包含了以下内置函数:

| 序号 | 函数名称 | 说明 |
| --- | --- | --- |
| 1 | len(tuple) | 元组元素个数 |
| 2 | max(tuple) | 返回元组元素最大值 |
| 3 | min(tuple) | 返回元组元素最小值 |
| 4 | tuple(seq) | 将元组转换为元组 |


```plain
list1= ['Google', 'Taobao', 'Runoob', 'Baidu']
tuple1=tuple(list1)
print(tuple1)
#('Google', 'Taobao', 'Runoob', 'Baidu')
```

