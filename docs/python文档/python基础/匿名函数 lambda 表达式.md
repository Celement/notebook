

<h1 id="dQugh">匿名函数 lambda 表达式</h1>
> 匿名函数的意思就是说可以不使用def定义，并且这个函数也有没有名字
>
> 在python中可以使用lambda表达式来定义匿名函数
>
> 注意：lambda表达式仅仅是一个表达式，不是一个代码块，所以lambda又称为一行代码的函数
>
> lambda表达式也有行参，并且不能访问除了自己的行参之外的任何数据包括全局变量
>

```python
'''
语法：
lambda [参数列表]:返回值
'''
# 封装一个函数做加法运算
# 普通函数
def jia(x,y):
    return x+y
# print(jia(2,3))
# 改成lambda表达式来封装
res = lambda x,y:x+y
# print(res(4,4))
# 带有分支结构的lambda 表达式
#  lambda 参数列表: 真区间 if 表达式判断 else 假区间
res = lambda sex:"很man" if sex=='男' else "很nice"
print(res('女'))
```





