<h1 id="mpO6Z"></h1>
+ 字典是另一种可变容器模型，且可存储任意类型对象。
+ 字典的每个键值(key=>value)对用冒号(:)分割，每个对之间用逗号(,)分割，整个字典包括在花括号({})中 ,格式如下所示：

```plain
d = {key1 : value1, key2 : value2 }
```

+ 键必须是唯一的，但值则不必。

<h4 id="b0dWI">创建字典:</h4>
```plain
1.创建空字典
    变量 = {} 或者 变量 = dict()
2.创建多个元素的字典：
    方法1：
        变量 = {键:值,键:值....}
    方法2：
        变量 = dict({键:值,键:值....})
    方法3：
        变量 = dict(键=值,键=值...)
        注意：该方式键作为形参名使用不可以添加引号，必须符合变量规则
    方法4：
        变量 = dict([(键,值),(键,值)...])
        变量 = dict([[键,值],[键,值]...])
        变量 = dict(((键,值),(键,值)...))
    方法5：
        变量 = dict(zip((键，键...),(值,值...)))
```

<h4 id="TdoRt">字典的基本操作:</h4>
```plain
访问字典的元素：
    变量[键]
添加字典的元素
    变量[新键] = 值
修改字典元素
    变量[键] = 新值
删除字典元素
    del 变量[键]
```

+ 案例：

```plain
#!/usr/bin/python3
# 定义一个字典
dict = {'Name': 'Python', 'Age': 17, 'Class': 'First'}
# 输出子典中的信息
print ("dict['Name']: ", dict['Name']) #Python
print ("dict['Age']: ", dict['Age'])   #17
# 输出错误信息：KeyError: 'Alice'
#print ("dict['Alice']: ", dict['Alice'])
# 修改和添加内容
dict['Age'] = 18;              # 更新 Age
dict['School'] = "云课堂"      # 添加信息
# 删除信息
del dict['Name'] # 删除键 'Name'一个元素值
dict.clear()     # 清空字典
del dict         # 删除字典
```

<h4 id="rJ97R">字典的遍历:</h4>
```plain
1.键的遍历
    for 变量i in 字典：
        使用i遍历所有的键，有键就可以通过变量访问其值
2.键值遍历
    for 变量i，变量j in 字典.items()：
        使用变量i遍历所有键，通过变量j遍历所有值
```

<h4 id="Nr9iL">字典内涵/字典推导式:</h4>
```plain
1.普通的字典内涵
    变量= {key:value for key,value in 字典.items()}
2.带有判断条件的字典内涵
    变量= {key:value for key,value in 字典.items() if 条件表达式}
3，多个循环的字典内涵
    变量 = {i+x:j+y for i，j in 字典1.items for x，y in 字典2.items()}
4.带有判断条件的多个循环的字典内涵
    变量 = {i+x:j+y for i，j in 字典1.items for x，y in 字典2.items() if 条件表达式}
```

<h4 id="NKgAx">　字典内置函数&方法：</h4>
+ Python字典包含了以下内置函数：

| 序号 | 函数名称 | 描述 | 实例 |
| --- | --- | --- | --- |
| 1 | len(dict) | 计算字典元素个数，   即键的总数。 | >>> dict = {'Name': 'py', 'Age': 7, 'Class': 'First'}   >>> len(dict)   3 |
| 2 | str(dict) | 输出字典，   以可打印的字符串表示。 | >>> dict = {'Name': 'py', 'Age': 7, 'Class': 'First'}   >>> str(dict)   "{'Name': 'py', 'Class': 'First', 'Age': 7}" |
| 3 | type(variable) | 返回输入的变量类型，   如果变量是字典   就返回字典类型。 | >>> dict = {'Name': 'py', 'Age': 7, 'Class': 'First'}   >>> type(dict)   <class 'dict'> |


+ Python字典包含了以下内置方法：

| 序号 | 方法名称 | 描述 |
| --- | --- | --- |
| 1 | radiansdict.clear() | 删除字典内所有元素 |
| 2 | radiansdict.copy() | 返回一个字典的浅复制 |
| 3 | radiansdict.fromkeys() | 创建一个新字典，以序列seq中元素做字典的键，val为字典所有键对应的初始值 |
| 4 | radiansdict.get(key, default=None) | 返回指定键的值，如果值不在字典中返回default值 |
| 5 | key in dict | 如果键在字典dict里返回true，否则返回false |
| 6 | radiansdict.items() | 以列表返回可遍历的(键, 值) 元组数组 |
| 7 | radiansdict.keys() | 以列表返回一个字典所有的键 |
| 8 | radiansdict.setdefault(key, default=None) | 和get()类似, 但如果键不存在于字典中，将会添加键并将值设为default |
| 9 | radiansdict.update(dict2) | 把字典dict2的键/值对更新到dict里 |
| 10 | radiansdict.values() | 以列表返回字典中的所有值 |
| 11 | pop(key[,default]) | 删除字典给定键 key 所对应的值，返回值为被删除的值。key值必须给出。 否则，返回default值。 |
| 12 | popitem() | 随机返回并删除字典中的一对键和值(一般删除末尾对)。 |


