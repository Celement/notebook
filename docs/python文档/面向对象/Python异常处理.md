<h1 id="n2m0H">1.12 Python异常处理</h1>
<h4 id="DwwwG">1.12.1 异常介绍：</h4>
+ 即便Python程序的语法是正确的，在运行它的时候，也有可能发生错误。运行期检测到的错误被称为异常。
+ 大多数的异常都不会被程序处理，都以错误信息的形式展现在这里:

```plain
>>> 10 * (1/0)
Traceback (most recent call last):
  File "<stdin>", line 1, in ?
ZeroDivisionError: division by zero
>>> 4 + spam*3
Traceback (most recent call last):
  File "<stdin>", line 1, in ?
NameError: name 'spam' is not defined
>>> '2' + 2
Traceback (most recent call last):
  File "<stdin>", line 1, in ?
TypeError: Can't convert 'int' object to str implicitly
```

+ 异常以不同的类型出现，这些类型都作为信息的一部分打印出来: 例子中的类型有 ZeroDivisionError，NameError 和 TypeError。
+ Python的一些內建异常：

```plain
Exception       常规错误的基类
AttributeError  对象没有这个属性
IOError         输入/输出操作失败
IndexError      序列中没有此索引(index)
KeyError        映射中没有这个键
NameError       未声明/初始化对象 (没有属性)
SyntaxError     Python 语法错误
TypeError       对类型无效的操作
ValueError      传入无效的参数
ZeroDivisionError   除(或取模)零 (所有数据类型)
```

+ 更多可以参考：[http://blog.csdn.net/gavin_john/article/details/50738323](http://blog.csdn.net/gavin_john/article/details/50738323)

<h4 id="mIovJ">1.12.2 异常处理:</h4>
+ 没有异常处理的:特点是出现异常会终止程序执行。

```plain
print("start.....")
x = int(input("Please enter a number: "))
print("number:",x)
print("ok....")
print("end.....")
```

+ 使用了有异常处理的代码，程序会执行到最后

```plain
print("start.....")
try:
    x = int(input("Please enter a number: "))
    print("number:",x)
    print("ok....")
except ValueError:
    print("Oops!  That was no valid number.  Try again")
print("end.....")
```

+ try语句按照如下方式工作；
    - 首先，执行try子句（在关键字try和关键字except之间的语句）
    - 如果没有异常发生，忽略except子句，try子句执行后结束。
    - 如果在执行try子句的过程中发生了异常，那么try子句余下的部分将被忽略。如果异常的类型和 except 之后的名称相符，那么对应的except子句将被执行。最后执行 try 语句之后的代码。
    - 如果一个异常没有与任何的except匹配，那么这个异常将会传递给上层的try中。
+ 一个 try 语句可能包含多个except子句，分别来处理不同的特定的异常。最多只有一个分支会被执行。
+ 处理程序将只针对对应的try子句中的异常进行处理，而不是其他的 try 的处理程序中的异常。
+ 一个except子句可以同时处理多个异常，这些异常将被放在一个括号里成为一个元组，例如:

```plain
except (RuntimeError, TypeError, NameError):
        pass
```

+ 最后一个except子句可以忽略异常的名称，它将被当作通配符使用。你可以使用这种方法打印一个错误信息，然后再次把异常抛出。

```plain
import sys
try:
    f = open('myfile.txt')
    s = f.readline()
    i = int(s.strip())
except OSError as err:
    print("OS error: {0}".format(err))
except ValueError:
    print("Could not convert data to an integer.")
except:
    print("Unexpected error:", sys.exc_info()[0])
    raise
```

<h5 id="fwmNo">异常处理实例</h5>
+ 一个 try 语句可能包含多个except子句，分别来处理不同的特定的异常。最多只有一个分支会被执行
+ 最后一个except子句可以忽略异常的名称，它将被当作通配符使用

```plain
print("start.....")
try:
    x = int(input("Please enter a number: "))
    print("number:",x)
    print(100/x)
    print("ok....")
except ValueError:
    print("非纯数字错误！")
except ZeroDivisionError:
    print("不可以为零错误！")
except:
    print("可选的未知错误！")
print("end.....")
```

+ 一个except子句可以同时处理多个异常，这些异常将被放在一个括号里成为一个元组

```plain
print("start.....")
try:
    x = int(input("Please enter a number: "))
    print("number:",x)
    print(100/x)
    print("ok....")
except (ValueError,ZeroDivisionError):
    print("非纯数字或不可以为零错误！")
except:
    print("可选的未知错误！")
    raise   #重新抛出这个异常
print("end.....")
```

<h4 id="aUFPj">1.12.3 抛出异常（自行抛出异常）:</h4>
+ Python 使用 raise 语句抛出一个指定的异常。例如:

```plain
>>> raise NameError('HiThere')
Traceback (most recent call last):
  File "<stdin>", line 1, in ?
NameError: HiThere
```

+ raise 唯一的一个参数指定了要被抛出的异常。它必须是一个异常的实例或者是异常的类（也就是 Exception 的子类）。
+ 如果你只想知道这是否抛出了一个异常，并不想去处理它，那么一个简单的 raise 语句就可以再次把它抛出。

```plain
>>> try:
        raise NameError('HiThere')
    except NameError:
        print('An exception flew by!')
        raise
An exception flew by!
Traceback (most recent call last):
  File "<stdin>", line 2, in ?
NameError: HiThere
```

