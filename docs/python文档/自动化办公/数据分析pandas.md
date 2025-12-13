## Pandas是什么

Pandas 是一个开源的第三方 Python 库，从 Numpy 和 Matplotlib 的基础上构建而来，享有数据分析“三剑客之一”的盛名（NumPy、Matplotlib、Pandas）。Pandas 已经成为 Python 数据分析的必备高级工具，它的目标是成为强大、灵活、可以支持任何编程语言的数据分析工具。


![pandas教程](https://raw.githubusercontent.com/Celement/mypicture/main/202512130946680.gif)

Pandas 这个名字来源于面板数据（Panel Data）与数据分析（data analysis）这两个名词的组合。在经济学中，Panel Data 是一个关于多维数据集的术语。Pandas 最初被应用于金融量化交易领域，现在它的应用领域更加广泛，涵盖了农业、工业、交通等许多行业。

Pandas 最初由 Wes McKinney（韦斯·麦金尼）于 2008 年开发，并于 2009 年实现开源。目前，Pandas 由 PyData 团队进行日常的开发和维护工作。在 2020 年 12 月，PyData 团队公布了最新的 Pandas 1.20 版本 。

在 Pandas 没有出现之前，Python 在数据分析任务中主要承担着数据采集和数据预处理的工作，但是这对数据分析的支持十分有限，并不能突出 Python 简单、易上手的特点。Pandas 的出现使得 Python 做数据分析的能力得到了大幅度提升，它主要实现了数据分析的五个重要环节：

- 加载数据

- 整理数据
- 操作数据
- 构建数据模型
- 分析数据

## Pandas主要特点

Pandas 主要包括以下几个特点：

- 它提供了一个简单、高效、带有默认标签（也可以自定义标签）的 DataFrame 对象。
- 能够快速得从不同格式的文件中加载数据（比如 Excel、CSV 、SQL文件），然后将其转换为可处理的对象；
- 能够按数据的行、列标签进行分组，并对分组后的对象执行聚合和转换操作；
- 能够很方便地实现数据归一化操作和缺失值处理；
- 能够很方便地对 DataFrame 的数据列进行增加、修改或者删除的操作；
- 能够处理不同格式的数据集，比如矩阵数据、异构数据表、时间序列等；
- 提供了多种处理数据集的方式，比如构建子集、切片、过滤、分组以及重新排序等。

## Pandas主要优势

与其它语言的数据分析包相比，Pandas 具有以下优势：

Pandas 的 DataFrame 和 Series 构建了适用于数据分析的存储结构；
Pandas 简洁的 API 能够让你专注于代码的核心层面；
Pandas 实现了与其他库的集成，比如 Scipy、scikit-learn 和 Matplotlib；
Pandas 官方网站（点击访问）提供了完善资料支持，及其良好的社区环境。

## Pandas内置数据结构

我们知道，构建和处理二维、多维数组是一项繁琐的任务。Pandas 为解决这一问题， 在 ndarray 数组（NumPy 中的数组）的基础上构建出了两种不同的数据结构，分别是 Series（一维数据结构）DataFrame（二维数据结构）：

- Series 是带标签的一维数组，这里的标签可以理解为索引，但这个索引并不局限于整数，它也可以是字符类型，比如 a、b、c 等；
- DataFrame 是一种表格型数据结构，它既有行标签，又有列标签。

 
| 数据结构  | 维度 | 说明                                                         |
| --------- | ---- | ------------------------------------------------------------ |
| Series    | 1    | 该结构能够存储各种数据类型，比如字符数、整数、浮点数、Python 对象等，Series 用 name 和 index 属性来描述 数据值。Series 是一维数据结构，因此其维数不可以改变 |
| DataFrame | 2    | DataFrame 是一种二维表格型数据的结构，既有行索引，也有列索引。行索引是 index，列索引是 columns。 在创建该结构时，可以指定相应的索引值。 |

## pandas安装

```python
pip install pandas	
```

## Pandas Series

Series 结构，也称 Series 序列，是 Pandas 常用的数据结构之一，它是一种类似于一维数组的结构，由一组数据值（value）和一组标签组成，其中标签与数据值之间是一一对应的关系。

Series 可以保存任何数据类型，比如整数、字符串、浮点数、Python 对象等，它的标签默认为整数，从 0 开始依次递增。Series 的结构图，如下所示：

![img](https://raw.githubusercontent.com/Celement/mypicture/main/202512130946706.png)

通过标签我们可以更加直观地查看数据所在的索引位置。

创建Series对象
Pandas 使用 Series() 函数来创建 Series 对象，通过这个对象可以调用相应的方法和属性，从而达到处理数据的目的：

```python
import pandas as pd
s=pd.Series( data, index, dtype, copy)
```

| 参数名称 | **描述**                                                     |
| -------- | ------------------------------------------------------------ |
| data     | 输入的数据，可以是列表、常量、ndarray 数组等。               |
| index    | 索引值必须是惟一的，如果没有传递索引，则默认为 np.arrange(n)。 |
| dtype    | dtype表示数据类型，如果没有提供，则会自动判断得出。          |
| copy     | 表示对 data 进行拷贝，默认为 False。                         |

我们也可以使用数组、字典、标量值或者 Python 对象来创建 Series 对象。下面展示了创建 Series 对象的不同方法：

### 创建一个空Series对象

使用以下方法可以创建一个空的 Series 对象，如下所示：



| 名称 | 属性 |
| --- | --- |
| axes | 以列表的形式返回所有行索引标签。 |
| dtype | 返回对象的数据类型。 |
| empty | 返回一个空的 Series 对象。 |
| ndim | 返回输入数据的维数。 |
| size | 返回输入数据的元素数量。 |
| values | 以 ndarray 的形式返回 Series 对象。 |
| index | 返回一个 RangeIndex 对象，用来描述索引的取值范围。 |





Pandas DataFrame入门教程（图解版）
DataFrame 是 Pandas 的重要数据结构之一，也是在使用 Pandas 进行数据分析过程中最常用的结构之一，可以这么说，掌握了 DataFrame 的用法，你就拥有了学习数据分析的基本能力。

认识DataFrame结构
DataFrame 一个表格型的数据结构，既有行标签（index），又有列标签（columns），它也被称异构数据表，所谓异构，指的是表格中每列的数据类型可以不同，比如可以是字符串、整型或者浮点型等。其结构图示意图，如下所示：

![image-20231026174944102](https://raw.githubusercontent.com/Celement/mypicture/main/202512130946957.png)

表格中展示了某个销售团队个人信息和绩效评级（rating）的相关数据。数据以行和列形式来表示，其中每一列表示一个属性，而每一行表示一个条目的信息。

下表展示了上述表格中每一列标签所描述数据的数据类型，如下所示：

 
| Type | Column |
| --- | --- |
| String | name |
| integer | age |
| String | gender |

DataFrame 的每一行数据都可以看成一个 Series 结构，只不过，DataFrame 为这些行中每个数据值增加了一个列标签。因此 DataFrame 其实是从 Series 的基础上演变而来。在数据分析任务中 DataFrame 的应用非常广泛，因为它描述数据的更为清晰、直观。
同 Series 一样，DataFrame 自带行标签索引，默认为“隐式索引”即从 0 开始依次递增，行标签与 DataFrame 中的数据项一一对应。

下面对 DataFrame 数据结构的特点做简单地总结，如下所示：

- DataFrame 每一列的标签值允许使用不同的数据类型；

- DataFrame 是表格型的数据结构，具有行和列；
- DataFrame 中的每个数据值都可以被修改。
- DataFrame 结构的行数、列数允许增加或者删除；
- DataFrame 有两个方向的标签轴，分别是行标签和列标签；
- DataFrame 可以对行和列执行算术运算。

### 创建DataFrame对象
创建 DataFrame 对象的语法格式如下：

```python
import pandas as pd
pd.DataFrame( data, index, columns, dtype, copy)
```


参数说明：

 
| 参数名称 | 说明 |
| --- | --- |
| data | 输入的数据，可以是 ndarray，series，list，dict，标量以及一个 DataFrame。 |
| index | 行标签，如果没有传递 index 值，则默认行标签是 np.arange(n)，n 代表 data 的元素数。 |
| columns | 列标签，如果没有传递 columns 值，则默认列标签是 np.arange(n)。 |
| dtype | 每一列的数据类型。 |
| copy | 默认为 False，表示复制数据 data。 |







## excel 
```python
pip  install  openpyxl
```

预设颜色

![在这里插入图片描述](https://raw.githubusercontent.com/Celement/mypicture/main/202512130946881.png)

### 字体
 
| 参数 | 含义 | 取值 |
| --- | --- | --- |
| name | 字体类型 | str |
| b | 加粗 | bool |
| bold | 加粗 | bool |
| sz | 大小 | float |
| size | 大小 | float |
| i | 斜体 | bool |
| italic | 斜体 | bool |
| strike | 删除线 | bool |
| strikethrough | 删除线 | bool |
| color | 颜色 | openpyxl.styles.colors.Color |
| vertAlign | 上下标 | 下标subscript 上标superscript |
| u | 下划线 | 单下划线single 双下划线double 会计用单下划线singleAccounting 会计用双下划线doubleAccounting |
| underline | 下划线 | 单下划线single 双下划线double 会计用单下划线singleAccounting 会计用双下划线doubleAccounting |
| outline |  | bool |
| shadow |  | bool |
| condense |  | bool |
| extend |  | bool |
| family |  | float |
| scheme |  | {'major', 'minor'} |
| charset |  | int |

上表为字体

### 边框
 
| 参数         | 含义                      | 取值 |
| ------------ | ------------------------- | ---- |
| bottom       | 下框线                    | Side |
| diagonal     | 对角框线样式              | Side |
| diagonalDown | 是否出现对角框线_斜下框线 | bool |
| diagonalUp   | 是否出现对角框线_斜上框线 | bool |
| end          |                           | Side |
| horizontal   |                           | Side |
| left         | 左框线                    | Side |
| outline      |                           | bool |
| right        | 右框线                    | Side |
| start        |                           | Side |
| top          | 上框线                    | Side |
| vertical     |                           | Side |

### 线条
 
| 参数         | 含义       | 取值                                                         |
| ------------ | ---------- | ------------------------------------------------------------ |
| border_style | 样式的别名 | 虚线hair 线点点dashDotDot 线点dashDot 细实线thin 中虚线mediumDashed 斜线点DashDot 点dotted 虚线dashed 中实线medium 粗实线thick 中线点mediumDashDot 双划线double 中线点点mediumDashDotDot |
| color        | 颜色       | Color                                                        |
| style        | 样式       | 同上border_style                                             |

### 填充
 
| 参数        | 含义     | 取值                                                         |
| ----------- | -------- | ------------------------------------------------------------ |
| fill_type   | 填充类型 | 不指定则无效， 取值看下方                                    |
| fgColor     | 前景色   | openpyxl.styles.colors.Color                                 |
| bgColor     | 背景色   | openpyxl.styles.colors.Color                                 |
| start_color | 开始颜色 | openpyxl.styles.colors.Color                                 |
| end_color   | 结束颜色 | openpyxl.styles.colors.Color                                 |
| patternType | 填充类型 | {'darkUp', 'lightTrellis', 'darkHorizontal', 'darkGray', 'lightHorizontal', 'darkGrid', 'lightUp', 'darkDown', 'darkTrellis', 'lightGrid', 'lightGray', 'lightVertical', 'gray125', 'gray0625', 'mediumGray', 'lightDown', 'darkVertical', 'solid'} |

### 对齐
 
| 参数            | 含义         | 取值                                                         |
| --------------- | ------------ | ------------------------------------------------------------ |
| horizontal      | 水平对齐     | 两端对齐justify 跨列居中centerContinuous 靠右（缩进）right 居中center 常规general 填充fill 分散对齐（缩进）distributed 靠左（缩进）left |
| indent          | 缩进         | float                                                        |
| justifyLastLine |              | bool                                                         |
| readingOrder    | 文字方向     | float 0根据内容 1总是从左到右 2总是从右到左                  |
| relativeIndent  |              | float                                                        |
| shrinkToFit     | 缩小字体填充 | bool                                                         |
| shrink_to_fit   | 缩小字体填充 | bool                                                         |
| textRotation    | 文本方向     | [0, 180]                                                     |
| vertical        | 垂直对齐     | 两端对齐justify 居中center 靠上top 靠下bottom 分散对齐distributed |
| wrapText        | 自动换行     | bool                                                         |
| wrap_text       | 自动换行     | bool                                                         |

## word

在Python中，可以使用 python-docx 库来自动化操作 Word文档，首先需要通过 pip3 安装该库：

```python
pip3 install python-docx
```

为了避免歧义，接下来文章中Word 表示Word软件本身，Word文档表示Word 软件中的文档。

1.1 读写 Word 文档
与 Excel 工作簿类似，Word 文档也有两种不同的文件格式，分别是2003版或更早之前的版本使用的 *.doc 文件格式，以及 2007 版及之后的版本使用的 *.docx文件格式。*.docx文件格式基于XML （可扩展标记语言），在相同数量下，占用空间更小，兼容性更高。

python-docx 只支持操作 *.docx 文件格式的Word文档，虽然Word 有 *.doc与 *.docx两种文件格式，但目前使用的 Word 文档绝大多数是 *.docx 文件格式的。

如果遇到 *.doc 文件格式的Word文档，可以将其中的内容复制，粘贴到 *.docx文件格式的新文件中，再进行处理。

首先介绍如何通过 python-docx 创建一个新的空白的 Word文档：

```
from docx import Document
```

### 创建文档对象
```
document = Document()
```

## 保存文档对象 扩展名只可以使用*.docx
document.save("new.docx")
用 Document 方法创建文档对象，该文档对象对应着一个Word 文档；最后调用 save 方法传入具体的路径，将文档对象保存到本地。需要注意的是，在保存 Word 文档时，其扩展名必须使用 *.docx.

1.2 *.doc 文件格式转换为 *.docx 文件格式
如果希望将大量的 *.doc 文件格式的Word 文档转换为 *.docx文件格式，可以使用 pypiwin32 第三方库，该库可以调用 Windows 操作系统中的方法实现 对 Word 文档的操作，但该库只可在 Windows 操作系统中安装与使用。

首先通过 pip3 安装 pypiwin32：

pip3 install  pypiwin32

安装完成后，通过 win32com 使用 pypiwin32 第三方库，实现将 Word文档的文件格式由 *.doc 转换为 *.docx。

from win32com import client

### `*.doc` 文件格式的Word文档的路径
doc_path = 'exist.doc'
docx_path = 'new_exist.docx'

###  获取Word 应用程序对象
Word = client.Dispatch('Word.Application')
###  打开对应的 Word文档
doc = Word.Documents.Open(doc_path)
###  另存为 `*.docx` 文件格式，参数 12 表示 *.docx 文件格式
doc.SaveAs(docx_path, 12)
###  关闭原来的 Word文档
doc.Close()
###  退出Word 软件
Word.Quit()

授权码  pvnnzpcrqkscbcdi
