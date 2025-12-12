<h1 id="SMrj4">1.1 Python安装和使用</h1>
<h3 id="lxVXS">1.1.1 Python环境搭建</h3>
+ Python可应用于多平台包括Windows、 Linux/Unix 和 Mac OS。

<h4 id="N9gxn">Python下载</h4>
+ Python最新源码，二进制文档，新闻资讯等可以在Python的官网查看到：
+ Python官网：[http://www.python.org/](http://www.python.org/)
+ 你可以在以下链接中下载 Python 的文档，你可以下载 HTML、PDF 和 PostScript 等格式的文档。
+ Python文档下载地址：[www.python.org/doc](www.python.org/doc)/

<h4 id="usqwj">Unix & Linux 平台安装 Python:(源码式安装)</h4>
+ 以下为在Unix & Linux 平台上安装 Python 的简单步骤：
    - 打开WEB浏览器访问[http://www.python.org/download/](http://www.python.org/download/)
    - 选择适用于Unix/Linux的源码压缩包。
    - 下载及解压压缩包。
    - 如果你需要自定义一些选项修改Modules/Setup
    - 执行 ./configure 脚本
    - make
    - make install
+ 执行以上操作后，Python会安装在 /usr/local/bin 目录中，Python库安装在/usr/local/lib/pythonXX，XX为你使用的Python的版本号。

<h4 id="4lDLv">通过ubuntu官方的apt工具包安装</h4>
   $ sudo apt-get install python  

   $ sudo apt-get install python2.7  

   $ sudo apt-get install python3.6

<h4 id="I9lGQ">Mac安装Python3</h4>
   $ brew sreach python

   $ brew install python3

   //在/usr/local/Cellar/这个目录下

<h4 id="fm43c">Windows下直接下载安装就可以了</h4>
+ 首先访问[http://www.python.org/download/去下载最新的python版本](http://www.python.org/download/%E5%8E%BB%E4%B8%8B%E8%BD%BD%E6%9C%80%E6%96%B0%E7%9A%84python%E7%89%88%E6%9C%AC)
+ 安装下载包，一路next，注意选择安装pip

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203805-cef1f7a3-3761-4603-9f11-57bdd39d83a0.png)

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203846-1e660cfe-24cd-40c9-8110-7a97e7853a7f.png)

+ 为计算机添加安装目录搭到环境变量，如图把python的安装目录添加到pth系统变量中即可。

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203805-1cbd4972-3ecc-471b-b9d4-edd684917546.png)

<h3 id="57R0P">1.1.2 运行Python</h3>
+ 有三种方式可以运行Python：

<h4 id="nKlnZ">1、交互式解释器：</h4>
+ 你可以通过命令行窗口进入python并开在交互式解释器中开始编写Python代码。
+ 你可以在Unix，DOS或任何其他提供了命令行或者shell的系统进行python编码工作。

$ python # Unix/Linux 

或者 

C:>python # Windows/DOS

+ 以下为Python命令行参数：

| 选项 | 描述 |
| :--- | :--- |
| -d | 在解析时显示调试信息 |
| -O | 生成优化代码 ( .pyo 文件 ) |
| -S | 启动时不引入查找Python路径的位置 |
| -V | 输出Python版本号 |
| -X | 从 1.6版本之后基于内建的异常（仅仅用于字符串）已过时。 |
| -c cmd | 执行 Python 脚本，并将运行结果作为 cmd 字符串。 |
| file | 在给定的python文件执行python脚本。 |


<h4 id="f3ufF">2、命令行脚本</h4>
+ 在你的应用程序中通过引入解释器可以在命令行中执行Python脚本，如下所示：

$ python script.py # Unix/Linux 

或者 

C:>python script.py # Windows/DOS

<h4 id="11utu">3、集成开发环境（IDE：Integrated Development Environment）: PyCharm</h4>
+ PyCharm 是由 JetBrains 打造的一款 Python IDE，支持 macOS、 Windows、 Linux 系统。
+ PyCharm 功能 : 调试、语法高亮、Project管理、代码跳转、智能提示、自动完成、单元测试、版本控制……
+ PyCharm 下载地址 : [https://www.jetbrains.com/pycharm/download/](https://www.jetbrains.com/pycharm/download/)

<h1 id="jxCHw">pycharm安装</h1>
1、下载pycharm包路径

pycharm下载地址：[https://www.jetbrains.com/pycharm/download/#section=windows](https://www.jetbrains.com/pycharm/download/#section=windows)

下载社区版即可，专业版需要激活码

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203760-3aab7bed-f4fc-4c68-af54-d3fe8404c078.png)

2、安装pycharm

1）第一步，直接点击 `Next`;2）第二步，如果要修改安装路径，就在这里更改：

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203729-54c64c64-71dd-4206-b534-470c9582f0f5.png)

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203699-c0fb94c1-0e88-4bdf-aa20-842205e9db60.png)

> 1. 创建快捷方式：根据你当前系统是32位还是64位进行选择；
> 2. 将 pycharm 的启动目录添加到环境变量（需要重启），如果需要使用命令行操作 pycharm，则勾选该选项；
> 3. 添加鼠标右键菜单，使用打开项目的方式打开文件夹。如果你经常需要下载一些别人的代码查看，可以勾选此选项，这会增加鼠标右键菜单的选项；
> 4. 将所有 py 文件关联到 pycharm，也就是你双击你电脑上的 py 文件，会默认使用 pycharm 打开。不建议勾选，pycharm 每次打开的速度会比较慢。你要单独打开 py 文件，建议使用 notepad++ 等文本编辑器，打开速度会更快；
> 5. 安装 JetBrains 自带的 JRE。如果你电脑上已经安装过 JAVA 1.8 以上的版本，并且已配置好环境变量，可以不用勾选此项。如果没有，则勾选上（如果你搞不清楚到底装没装过 JAVA， 那就勾选上吧）
>

4）第四步，默认即可，点击 `install`。如果你勾选了，要安装自带的 JRE， 会出现如下的下载界面，等待其自动下载完毕即可：

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203721-b08a111f-930d-42f2-bb49-c13896851b56.png)



<h1 id="fl1xS">第一次启动 Pycharm</h1>
1、首次启动 pycharm，会弹出选择用户配置窗口，如果你之前使用过 pycharm 并有相关的配置文件，则在此处选择；如果没有，默认即可。

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203696-620f0acb-8d7f-47d1-b8c7-72abee1646ea.png)

2、同意用户使用协议：

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203873-37a2174e-f4f9-43f8-8de3-396f49dd0020.png)

3、确定是否需要进行数据共享，可以直接选择`Don't send`：

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203716-9230070d-0124-4c10-941b-598184e3b8b7.png)

<h1 id="kJ661">创建项目</h1>
1、在上面设置完成后，可以开始创建 Python 项目：

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203721-9c549528-11f1-42e2-9546-1687a90d0ba8.png)

2、选择`Create New Project`，会出现设置项目名称和选择解释器：

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203996-b9436aed-2802-414f-9a42-78950ee1d68e.png)

**注意：这里默认使用的 Python 的虚拟环境，如果你不使用虚拟环境，一定要修改。**如果出现 `Interpreter field is empty` 表示 Python 的环境变量有问题。当然我们也可以直接选择，请看下面。选择图中 1，如果 3 位置的下来中选不到 Python.exe， 则点击 2 位置按钮。

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203742-784a9f32-d89c-4ef1-beb5-25e99672fa6f.png)



![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203748-f2262b6d-bcf3-421d-bd01-96e65a038c61.png)



Create





![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203744-3ec8780c-4e29-4b50-a5a4-0c818eecbf76.png)

那么现在项目就创建成功了：

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203753-b8d3f22c-5226-46ad-b57d-a20e720ec91d.png)



Show tips on startup

<h1 id="91fW8">创建 Python 文件</h1>
1、在项目名称的位置点击鼠标右键，选择 `New > Python File`：

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131204107-c71fd7cd-efec-44dd-830a-abfa58a7aa03.png)



![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203797-20f962ca-89d0-463b-965b-0066baca9955.png)



3.1、在文件中输入代码：print（"nemo"）,然后在文件中任意空白位置点击鼠标右键，选择运行：

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131204254-14536675-3411-4a50-ae5f-e48e52214e92.png)

3.2、点击右上角三角箭头，以及控制台的三角箭头也可以运行

3.3、在终端terminal，输入python和要运行的代码文件路径回车即可

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203790-e9950264-ff01-4e38-8712-9b63c9965853.png)

4、在界面的下方控制台，显示 Python 代码的运行结果。

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203756-d2777675-9d31-46a5-9f67-901389a9f77e.png)



<h1 id="kaiGx">设置pycharm</h1>
1、设置字体

File-settings-Editor-Font，见下图：

2、设置背景

File-settings-Editor-Color Scheme，如下图：

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203808-67da6b08-d155-41c1-b3fd-a6adb7f0d0a1.png)

3、设置文件模板

File-settings-Editor-File and Code Templates,如下图：

![](https://cdn.nlark.com/yuque/0/2020/png/1254889/1592131203799-fb04cd41-da91-477a-93be-bd473655a15d.png)

${PROJECT_NAME} - 当前Project名称;

${NAME} - 在创建文件的对话框中指定的文件名;

${USER} - 当前用户名;

${DATE} - 当前系统日期;

${TIME} - 当前系统时间;

${YEAR} - 年;

${MONTH} - 月;

${DAY} - 日;

${HOUR} - 小时;

${MINUTE} - 分钟；

${PRODUCT_NAME} - 创建文件的IDE名称;

${MONTH_NAME_SHORT} - 英文月份缩写, 如: Jan, Feb, etc;

${MONTH_NAME_FULL} - 英文月份全称, 如: January, February, etc；

4、快速导包快捷键

win: Alt + Entermac: option + Enter

