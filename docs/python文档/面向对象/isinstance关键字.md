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

