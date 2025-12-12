+ 集合（set）是一个无序不重复元素的序列。
+ 基本功能是进行成员关系测试和删除重复元素。
+ 可以使用大括号 { } 或者 set() 函数创建集合，注意：创建一个空集合必须用 set() 而不是 { }，因为 { } 是用来创建一个空字典。

```python
# 集合的定义
set1 = set()  #定义一个空的集合
set2 = {1,2,3}
# 增加一个元素
set1.add(5)  
#增加多个：
set1.update([5,6,7,8])
#删除某个值
set1.remove(1)
#查：无法通过下标索引
#改：不可变类型无法修改元素
a={10,20,30}
b={20,50}
print(a - b)     # a和b的差集 
print(a | b)     # a和b的并集
print(a & b)     # a和b的交集
print(a ^ b)     # a和b中不同时存在的元素
```

<h4 id="e4d5D">集合的遍历:</h4>
```python
1.普通序列的遍历
    for 变量 in 集合：
        使用变量
2.多级集合
    集合 = {（值,值..）,（值，值..）。。。}
    for 变量1，变量2 in 集合：
        使用变量1和变量2
```

<h4 id="hLA6O">集合的序列函数：</h4>
+ len() 计算集合的长度
+ max() 获取集合中的最大值
+ min() 获取集合中的最小值
+ set() 创建空集合或者将其他数据转换为集合

<h4 id="3x8iX">集合中的方法：</h4>
+ add -- 增加集合元素

```python
name = {'d', 's'}
name.add('d')
name
返回结果：{'d', 's'}
name.add('sd')
name
返回结果：{'sd', 'd', 's'}
```

+ update--更新已有集合

```python
name = {'sd', 'd', 's'}
name.update('df')
name
返回结果：{'sd', 'd', 'f', 's'}
```

+ remove--移除指定集合元素

```python
name = {'sd','d','s'}
name.remove('s')
返回结果：name
{'sd', 'd'}
```

+ discard--移除元素

```python
name = {'sd', 'd', 's'}
name.discard('s')
返回结果：name 
        {'sd', 'd'}
# remove移除非成员值会报错，discard移除非成员值，啥也不错！
```

+ clear--清空集合元素

```python
name = {'d', 's'}
name.clear()
name
返回结果：{}
```

+ copy--浅拷贝

```python
name = {'sd', 'd', 's'}
li = name.copy()
返回结果：li
        {'sd', 'd', 's'}
```

+ difference -- 求差集

```python
name.difference(li)
set()
>>> name.difference()
{'sd', 'd', 's'}
```

+ union--并集，创建新的对象

```python
name = {'sd', 'd', 's'}
li = {'s', 'd','h'}
name.union(li)
返回结果：{'h', 's', 'd', 'sd'}
```

+ difference_update---删除当前set中的所有包含在 new set 里的元素

```python
li = ('s', 'd')
name = {'sd', 'd', 's'}
name.difference_update(li)
name
返回结果：{'sd'}
```

+ intersection--取交集,建立新的set集合

```python
li = ('s', 'd')
name = {'sd', 'd', 's'}
name.intersection(li)
返回结果：{'d', 's'}
```

+ intersection_update--取交集,更新原来的set集合

```python
li = ('s', 'd')
name = {'sd', 'd', 's'}
name.intersection_update(li)
返回结果：{'d', 's'}
```

+ isdisjoint--判断没有交集，返回True,否则,返回False

```python
li = {'s', 'd'}
name = {'sd', 'd', 's'}
name.isdisjoint(li)
```

+ issubset--判断是否是子集

```python
li = {'s', 'd'}
name = {'sd', 'd', 's'}
name.issubset(li)  #判断name是不是li的子集
返回结果：False
li.issubset(name)  #判断li是不是name的子集
返回结果：True
```

+ issuperset--判断是否是父集

```python
li = {'s', 'd'}
name = {'sd', 'd', 's'}
name.issuperset(li)  #判断name是不是li的父集
返回结果：True
li.issuperset(name)  #判断li是不是name的父集
返回结果：False
```

+ pop--移除集合元素

```python
name = {'sd', 'd', 's'}
name.pop()
返回结果：'sd' #同一个集合，删除集合元素的顺序固定
se1 = {'a','s','sb'}
se1.pop()
返回结果：'sb'
```

+ symmetric_difference--去两个集合的差集，建立新的set集合对象

```python
name = {'sd', 'd', 's'}
li = {'s', 'd'}
name.symmetric_difference(li)
返回结果：{'sd'}
```

+ symmetric_difference_update--去两个集合的差集，更新原来的集合对象

```python
name = {'sd', 'd', 's'}
li = {'s', 'd'}
name.symmetric_difference_update(li)
返回结果：{'sd'}
```

