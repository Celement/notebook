> _一种用起来好像是使用的实例属性一样的特殊属性,可以对应于某个方法  
_class Fun:
>
> 
>
>     **def **func(<font style="color:#94558d;">self</font>):
>
>         **pass****  
****    **<font style="color:#0000b2;">@property</font><font style="color:#0000b2;">    </font>**def **prop(<font style="color:#94558d;">self</font>):
>
>         return 100
f=Fun()
>
> f.func()
>
> <font style="color:#000080;">print</font>(f.prop)
>
> 
>
> **定义时实例方法的基础上添加**** @property****装饰器 并且仅有一个****self****参数****调用时无需加上我们的括号**
>
> **f.func()**
>
> **f.prop**
>

****

****

> _  
查询一个商品的列表时，需要指定从第 m 条开始到第 n 条结束：  
- 根据用户请求的当前页数据和总条数计算出 m、n  
- 再去请求数据  
```python
class Pager:
    def __init__(self, current_page):
        # 用户当前请求的页码
        self.current_page = current_page
        # 默认每页显示 10 条数据
        self.page_items = 10

    @property
    def start(self):
        val = (self.current_page - 1) * self.page_items
        return val

    @property
    def end(self):
        val = self.current_page * self.page_items
        return val

p = Pager(3)
print(p.start)
print(p.end)
```

`property` 的属性功能：在属性内部进行了一系列的逻辑计算最终将结果返回。
