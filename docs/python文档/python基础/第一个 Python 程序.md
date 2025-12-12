<h2 id="73e82552">目标</h2>


+ 第一个 `HelloPython` 程序
+ `Python 2.x` 与 `3.x` 版本简介
+ 执行 `Python` 程序的三种方式
    - 解释器 —— `python` / `python3`
    - 交互式 —— `ipython`
    - 集成开发环境 —— `PyCharm`



<h2 id="470f9469">01. 第一个 `HelloPython` 程序</h2>


<h3 id="45b704ef">1.1 Python 源程序的基本概念</h3>


1. Python 源程序就是**一个特殊格式的文本文件**，可以**使用任意文本编辑软件**做 `Python` 的开发
2. Python 程序的 **文件扩展名** 通常都是 `.py`



<h3 id="45f6003e">1.2 演练步骤</h3>


+ 在桌面下，新建 `认识Python` 目录
+ 在 `认识Python` 目录下新建 `1.Hello.py` 文件
+ 使用 **pycharm** 编辑 `1.Hello.py` 并且输入以下内容：



```python
print("hello python")
print("hello world")
```



+ 在终端中输入以下命令执行 `1.Hello.py`



```bash
$ python 1.Hello.py
```



> `print` 是 `python` 中我们学习的第一个 **函数**
>
> `print` 函数的作用，可以把 **""** 内部的内容，输出到屏幕上
>



<h3 id="89b873ac">1.3 演练扩展 —— 认识错误（BUG）</h3>


<h4 id="655cacc7">关于错误</h4>


+ 编写的程序**不能正常执行**，或者**执行的结果不是我们期望的**
+ 俗称 `BUG`，是程序员在开发时非常常见的，初学者常见错误的原因包括：
    1. 手误
    2. 对已经学习过的知识理解还存在不足
    3. 对语言还有需要学习和提升的内容
+ 在学习语言时，不仅要**学会语言的语法**，而且还要**学会如何认识错误和解决错误的方法**



> 每一个程序员都是在不断地修改错误中成长的
>



<h4 id="209465f2">第一个演练中的常见错误</h4>


+ 1> **手误**，例如使用 `pirnt("Hello world")`



```plain
NameError: name 'pirnt' is not defined

名称错误：'pirnt' 名字没有定义
```



+ 2> 将多条 `print` 写在一行



```plain
SyntaxError: invalid syntax

语法错误：语法无效
```



> 每行代码负责完成一个动作
>



+ 3> 缩进错误



```plain
IndentationError: unexpected indent

缩进错误：不期望出现的缩进
```



> + Python 是一个格式非常严格的程序设计语言
> + 目前而言，大家记住每行代码前面都不要增加空格
>



+ 4> **python 2.x 默认不支持中文**



目前市场上有两个 Python 的版本并存着，分别是 `Python 2.x` 和 `Python 3.x`



+ **Python 2.x 默认不支持中文**，具体原因，等到介绍 **字符编码** 时给大家讲解
+ Python 2.x 的解释器名称是 **python**
+ Python 3.x 的解释器名称是 **python3**



```plain
SyntaxError: Non-ASCII character '\xe4' in file 01-HelloPython.py on line 3, 
but no encoding declared; 
see http://python.org/dev/peps/pep-0263/ for details

语法错误： 在 01-HelloPython.py 中第 3 行出现了非 ASCII 字符 '\xe4'，但是没有声明文件编码
请访问 http://python.org/dev/peps/pep-0263/ 了解详细信息
```



> + `ASCII` 字符只包含 `256` 个字符，不支持中文
> + 有关字符编码的问题，后续会讲
>



<h4 id="3e4a9510">单词列表</h4>


```plain
* error 错误
* name 名字
* defined 已经定义
* syntax 语法
* invalid 无效
* Indentation 索引
* unexpected 意外的，不期望的
* character 字符
* line 行
* encoding 编码
* declared 声明
* details 细节，详细信息
* ASCII 一种字符编码
```



<h2 id="e6a18c7d">02. `Python 2.x` 与 `3.x` 版本简介</h2>


目前市场上有两个 Python 的版本并存着，分别是 `Python 2.x` 和 `Python 3.x`



> 新的 Python 程序建议使用 `Python 3.0` 版本的语法
>



+ Python 2.x 是 **过去的版本**
    - 解释器名称是 **python**
+ Python 3.x 是 **现在和未来 主流的版本**
    - 解释器名称是 **python3**
    - 相对于 `Python` 的早期版本，这是一个 **较大的升级**
    - 为了不带入过多的累赘，`Python 3.0` 在设计的时候 **没有考虑向下兼容**
        * 许多早期 `Python` 版本设计的程序都无法在 `Python 3.0` 上正常执行
    - Python 3.0 发布于 **2008 年**
    - 到目前为止，Python 3.0 的稳定版本已经有很多年了
        * Python 3.3 发布于 2012
        * Python 3.4 发布于 2014
        * Python 3.5 发布于 2015
        * Python 3.6 发布于 2016
+ 为了照顾现有的程序，官方提供了一个过渡版本 —— **Python 2.6**
    - 基本使用了 `Python 2.x` 的语法和库
    - 同时考虑了向 `Python 3.0` 的迁移，**允许使用部分** `Python 3.0` 的语法与函数
    - 2010 年中推出的 `Python 2.7` 被确定为 **最后一个Python 2.x 版本**



> 提示：如果开发时，无法立即使用 Python 3.0（还有极少的第三方库不支持 3.0 的语法），建议
>
> + 先使用 `Python 3.0` 版本进行开发
> + 然后使用 `Python 2.6`、`Python 2.7` 来执行，并且做一些兼容性的处理
>



<h2 id="c57978dc">03. 执行 Python 程序的三种方式</h2>


<h3 id="d2553bcf">3.1. 解释器 `python` / `python3`</h3>


<h4 id="6e4093c3">Python 的解释器</h4>


```bash
# 使用 python 2.x 解释器
$ python xxx.py

# 使用 python 3.x 解释器
$ python3 xxx.py
```



<h5 id="e66f90f6">其他解释器（知道）</h5>


**Python 的解释器** 如今有多个语言的实现，包括：



+ `CPython` —— 官方版本的 C 语言实现
+ `Jython` —— 可以运行在 Java 平台
+ `IronPython` —— 可以运行在 .NET 和 Mono 平台
+ `PyPy` —— Python 实现的，支持 JIT 即时编译



<h3 id="6d2fb772">3.2. 交互式运行 Python 程序</h3>


+ 直接在终端中运行解释器，而不输入要执行的文件名
+ 在 Python 的 `Shell` 中直接输入 **Python 的代码**，会立即看到程序执行结果



<h4 id="01e13a4d">1) 交互式运行 Python 的优缺点</h4>


<h5 id="52b8c184">优点</h5>


+ 适合于学习/验证 Python 语法或者局部代码



<h5 id="2e769a75">缺点</h5>


+ 代码不能保存
+ 不适合运行太大的程序



<h4 id="f05b4de4">2) 退出 官方的解释器</h4>


<h5 id="2b37ea9d">1> 直接输入 `exit()`</h5>


```python
>>> exit()
```



<h5 id="eb3e60fe">2> 使用热键退出</h5>


在 python 解释器中，按热键 `ctrl + d` 可以退出解释器



<h4 id="2848e230">3) IPython</h4>


+ IPython 中 的 “I” 代表 **交互 interactive**



<h5 id="b4d3c72e">特点</h5>


+ IPython 是一个 python 的 **交互式 shell**，比默认的 `python shell` 好用得多
    - 支持自动补全
    - 自动缩进
    - 支持 `bash shell` 命令
    - 内置了许多很有用的功能和函数
+ IPython 是基于 BSD 开源的



<h5 id="fe2df04a">版本</h5>


+ Python 2.x 使用的解释器是 **ipython**
+ Python 3.x 使用的解释器是 **ipython3**
+ 要退出解释器可以有以下两种方式：



<h5 id="af0f671d">1> 直接输入 `exit`</h5>


```python
In [1]: exit
```



<h5 id="eb3e60fe-1">2> 使用热键退出</h5>


在 IPython 解释器中，按热键 `ctrl + d`，`IPython` 会询问是否退出解释器

