Pyqt

*   开发环境搭建
    *   Qt简介
    *   Pyqt5简介
    *   Anaconda安装
    *   Pyqt+Pycharm环境搭建
*   Pyqt布局
    *   Qt Designer 水平布局
        *   QSizePolicy::Fixed 只能使用 sizeHint 的大小, 任何操作都不会改变控件大小 QSizePolicy::Minimum sizeHint 为最小大小, 控件可以被拉伸 QSizePolicy::Maximum sizeHint 为最大大小, 控件可以被压缩 QSizePolicy::Preferred sizeHint 为建议大小, 控件既可以被压缩也可以被拉伸 QSizePolicy::MinimumExpanding sizeHint 为最小大小, 不能被压缩, 被拉伸的优先级更高 QSizePolicy::Expanding sizeHint 为建议大小, 可以被压缩, 被拉伸的优先级更高 QSizePolicy::Ignored sizeHint 的值将会被忽略
    *   Qt Designer 垂直布局
    *   Qt Designer 栅格布局
    *   Qt Designer 绝对布局
    *   Qt Designer From布局
    *   QSpliter
    *   代码布局
        *   QHBoxLayout
            *   采用QBOXLayout类可以在水平和垂直方向上排列控件，QHBoxLayout和QVBoxLayout类继承自QBoxLayout 采用QHBoxLayout类，按照从左到右的顺序来添加控件
            *   addLayout(self,stretch=0) 在窗口的右边添加布局，使用stretch（伸缩量）进行伸缩，伸缩量默认为0 addWidget(self,QWidget.stretch,Qt.Alignmeny alihnment) 在布局中添加控件 stretch（伸缩量），只适用于QBoxLayout，控件和窗口会随着伸缩量的变大而增大 alignment：指定的对齐方式 addSpacing(self,int) 设置各控件的上下间距，通过该方法可以增加额外的控件
            *   Qt.AlignLeft 水平方向居左对齐 Qt.AlignRight水平方向具有对齐 Qt.AlignCenter 水平方向居中对齐 Qt.AlignJustify 水平方向两端对齐 Qt.AlignTop 垂直方向靠上对齐 Qt.AlignBottom 垂直方向靠下对齐 Qt.AlignVCenter 垂直方向居中对齐
        *   QVBoxLayout
            *   QBoxLayout.addStretch(int stretch=0) addStretch（）函数在布局管理器中添加一个可伸缩的控件（QSpaceItem）,0为最小值，并且将stretch作为伸缩量添加到布局末尾，stretch参数表示均分的比例，默认为0
        *   QGridLayout
            *   addWidget(QWidget Widget,int row,int col,int alignment=0) 给网格布局添加部件，设置指定的行和列，起始位置的默认值为（0,0） widget：所添加的控件 row：控件的行数，默认从0开始 column：控件的列数，默认从0开始 alignment：对齐方式 addWidget(QWidget widget,int fromRow,int fromColulmn,int rowSpan,int columnSpan,Qt.Alignment alignment=0) 所添加的的控件跨越很多行或者列的时候，使用这个函数 widget：所添加的控件 fromRow：控件的起始行数 fronColumn：控件的起始列数 rowSpan：控件跨越的行数 column：控件跨越的列数 alignment：对齐方式 setSpacing(int spacing) 设置软件在水平和垂直方向的间隔
        *   QFormLayout
            *   QFormLayout是label-field式的表单布局，顾明思议，就是实现表单方式的布局，表单是提示用户进行交互的一种模式，主要有两列组成，第一列用于显示信息，给用户提示，一般叫做label域，第二列需要用户进行选择或输入，一般叫做field域，label与field的关系就是label关联field
        *   QSplitter
            *   addWidget() 将小控件添加到QSplitter管理器的布局中 indexOf() 返回小控件在QSplitter管理器中的索引 insertWidget() 根据指定的索引将一个控件插入到QSplitter管理器中 setOrientation() 设置布局的方向 Qt.Horizontal:水平方向 Qt.Vertical:垂直方向 setSizes() 设置控件的初始大小 count() 返回小控件在QSplitter管理器中的数量
*   基本窗口控件
    *   QMainWindow
        *   QWidget QDialog都可以创建窗口
        *   addToolBar()
            *   添加工具栏
        *   centralWidget()
            *   返回窗口中心的一个控件
        *   menuBar()
            *   返回主窗口的菜单
        *   setStatusBar()
            *   设置状态栏
        *   statusBar()
            *   状态栏信心单位ms 默认是0
        *   窗口居中显示
            *   算出屏幕的尺寸 /2
        *   关闭窗口的案例
            *   利用button
    *   QWidget
        *   是所有用户界面对象的基类，所有的窗口控件都是直接或者间接继承我们的Qwidget
        *   把没有嵌入到其他控件称之为窗口，边框，标题， 关闭按钮 最小化按钮，复选框，表格，文本框，进度条 一个程序有多个窗口一个窗口有多个控件
        *   窗口的坐标系
            *   利用坐标系来控制位置和大小
                *   ![](http://mindline-image.qiniu.mindline.cn/VM426976E2.png)  
            
        *   常用的函数
            *   改变客户区的面积
                *   QWidget.resize(width,height)
                *   QWidget.resize(Qsize)
                *   活的客户区大小
                    *   QWidget.size()
            *   获得高度还有宽度
                *   Qwidget.width
                *   Qwidget.height
            *   客户区的宽度和高度
                *   QWidget.setFixedWidth(int width)
    *   QLabel
        *   常用方法
            *   setAlignment()
                *   设置对齐方式
                    *   setAlignment() 按固定值方式对齐文本 Qt.AlignLeft：水平方向靠左对齐 Qt.AlignRight:水平方向靠右对齐 Qt.AlignCenter：水平方向居中对齐 Qt.AlignJustify：水平方向调整间距两端对齐 Qt.AlignTop：垂直方向靠上对齐 Qt.AlignBottom：垂直方向靠下对齐 Qt.AlignVCenter：垂直方向居中对齐
            *   setIndent()
                *   设置文本缩进值
            *   setPixmap()
                *   设置QLabel为Pixmap图片
            *   text()
                *   获得Qlabel文本内容
            *   setText()
                *   设置Qlabel内容
            *   selectedText（）
                *   返回选择的字符
            *   setBuddy()
                *   设置助记符
            *   setWordWrap
                *   设置是否允许换行
        *   信号
            *   linkActivated
                *   设置链接
            *   linkHovered
                *   鼠标滑过连接信号
    *   QlineEdit
        *   方法
            *   方法 描述 setAlignment() 按固定值方式对齐文本 Qt.AlignLeft：水平方向靠左对齐 Qt.AlignRight:水平方向靠右对齐 Qt.AlignCenter：水平方向居中对齐 Qt.AlignJustify：水平方向调整间距两端对齐 Qt.AlignTop：垂直方向靠上对齐 Qt.AlignBottom：垂直方向靠下对齐 Qt.AlignVCenter：垂直方向居中对齐 setEchoMode() 设置文本框的显示格式，允许输入的文本显示格式的值可以是： QLineEdit.Normal：正常显示所输入的字符，此为默认选项 QLineEdit.NoEcho：不显示任何输入的字符，常用于密码类型的输入，且长度保密 QLineEdit.Password：显示与平台相关的密码掩饰字符，而不是实际输入的字符 QLineEdit.PasswordEchoOnEdit：在编辑时显示字符，负责显示密码类型的输入 setPlaceholderText() 设置文本框显示文字 setMaxLength() 设置文本框所允许输入的最大字符数 setReadOnly() 设置文本为只读 setText() 设置文本框的内容 text() 返回文本框的内容 setDragEnable() 设置文本框是否接受拖动 selectAll() 全选 setFocus() 得到焦点 setInputMask() 设置掩码 setValidator() 设置文本框的验证器（验证规则），将限制任意可能输入的文本，可用的校验器为 QIntValidator:限制输入整数 QDoubleValidator:限制输入浮点数 QRegexpValidator:检查输入是否符合正则表达式
        *   信号
            *   selectionChanged 只要选择改变了，这个信号就会发射 textChanged 当修改文本内容时，这个信号就会发射 editingFinished 当编辑文本结束时，这个信号就会发射
        *   定义输入掩码字符
            *   A ASCII字母字符是必须输入的（A-Z，a-z） a ASCII字母字符是允许输入的，但不是必须输入的 N ASCII字母字符是必须输入的（A-Z，a-z，0-9） n ASCII字母字符是允许输入的，但不是必须输入的 X 任何字符都是必须输入 x 任何字符都是允许输入的，但不是必须输入的 9 ASCII数字字符是必须输入的（0-9） 0 ASCII数字字符是允许输入的，但不是必须输入的 D ASCII数字字符是必须输入的（1-9） d ASCII数字字符是允许输入的，但不是必须的（1-9） # ASCII数字字符与加减字符是允许输入的，但不是必须的 H 十六进制格式字符是必须输入的（A-F，a-f，0-9） h 十六进制格式字符允许输入，但不是必须的 B 二进制格式字符是必须输入的（0,1） b 二进制格式字符是允许输入的，但不是必须的 > 所有字母字符都大写 < 所有字母字符都小写 ！ 关闭大小写转换 \\ 使用‘\\’转义上面列出的字符
        *   掩码分隔符
            *   000.000.000.000;\_ ip地址，空白字符是‘\_’ HH:HH:HH:HH:HH:HH; MAC地址 0000-00-00 日期，空白字符是空格 AAAAA-AAAAA-AAAAA-AAAAA-AAAAA; 许可证号，空白字符是‘\_’，所有字母都转换为大写
    *   QTextEdit
        *   方法
            *   setPlainText() 设置多行文本框的内容 toPlainText() 返回多行文本框的文本内容 setHtml() 设置多行文本框的文本内容为HTML文档，HTML文档是描述网页的 toHtml() 返回多行文本框的HTML内容 clear() 清除多行文本框的内容
    *   QAbstractButton
        *   方法
            *   isDown(): 按钮是否被按下 isChecked()： 按钮是否已经选中 isEnable()： 按钮是否可以被点击 isCheckAble()： 按钮是否可为被选中的 setAutoRepeat(): 设置按钮是否在用户长按时可以自动重复执行。
        *   信号
            *   Pressed： 左键按下触发该信号 Released： 当鼠标左键被释放时触发该信号 Clicked: 鼠标左键单击时触发该信号(左键按下并释放) Toggled： 当按钮选中状态发生改变时触发该信号
    *   QPushButton
        *   方法
            *   setCheckable() 设置按钮是否已经被选中，如果设置True，则表示按钮将保持已点击和释放状态 toggle() 在按钮状态之间进行切换 setIcon() 设置按钮上的图标 setEnabled() 设置按钮是否可以使用，当设置为False时，按钮变成不可用状态，点击它不会发射信号 isChecked() 返回按钮的状态，返回值为True或者False setDefault() 设置按钮的默认状态 setText() 设置按钮的显示文本 text() 返回按钮的显示文本
    *   QRadioButton
        *   方法
            *   setCheckanle() 设置按钮是否已经被选中，可以改变单选按钮的选中状态，如果设置为True则表示单选按钮将保持以点击和释放状态 isChecked() 返回单选按钮的状态，返回值True或False setText() 设置单选按钮显示的文本 text() 返回单选按钮显示的文本
    *   QCheckBox
        *   方法
            *   setChecked() 设置复选框的状态，设置为True表示选中，False表示取消选中的复选框 setText() 设置复选框的显示文本 text() 返回复选框的显示文本 isChecked() 检查复选框是否被选中 setTriState() 设置复选框为一个三态复选框 setCheckState() 三态复选框的状态设置，具体设置可以见下表
        *   三种状态
            *   Qt.Checked 2 组件没有被选中（默认） Qt.PartiallyChecked 1 组件被半选中 Qt.Unchecked 0 组件被选中
    *   QComboBox
        *   方法
            *   addItem() 添加一个下拉选项 addItems() 从列表中添加下拉选项 Clear() 删除下拉选项集合中的所有选项 count() 返回下拉选项集合中的数目 currentText() 返回选中选项的文本 itemText(i) 获取索引为i的item的选项文本 currentIndex() 返回选中项的索引 setItemText(int index,text) 改变序列号为index的文本
        *   信号
            *   Activated 当用户选中一个下拉选项时发射该信号 currentIndexChanged 当下拉选项的索引发生改变时发射该信号 highlighted 当选中一个已经选中的下拉选项时，发射该信号
    *   QSpinBox
        *   方法
            *   setMinimum() 设置计数器的下界 setMaximum() 设置计数器的上界 setRange() 设置计数器的最大值，最小值，步长值 setValue() 设置计数器的当前值 Value() 返回计数器的当前值 singleStep() 设置计数器的步长值
        *   介绍
            *   QSPINBox是一个计数器控件，允许用户选择一个整数值通过单击向上向下或者按键盘上的上下键来增加减少当前显示的值，当然用户也可以输入值 在默认情况下，QSpinBox的取值范围是（0-99），每次改变的步长是1 QSpinBox类和QDoubleSpinbox类均派生自QAbstractSpinBox类，QSpinBox用于处理整数值，QDoubleSpinBox则用于处理浮点数值，他们之间的区别就是处理数据的类型不同，其他功能基本相同，QDoubleSpinBox的默认精度是两位小数，但可以通过setDecimals（）来改变
    *   QSlider
        *   介绍
            *   QSlider控件提供一个垂直或者水平的滑动条，滑动条是一个用于控制有界值典型的控件，它允许用户沿水平或者垂直方向在某一范围内移动滑块，并将滑块所在的位置转换为一个合法范围内的整数值，有时候这中方式比输入数字或者使用SpinBox（计数器·）更加自然，在槽函数中对滑块所在位置的处理相当于从整数之间的最小值和最高值进行取值
        *   方法
            *   setMinimum() 设置滑动条控件的最小值 setMaximum() 设置滑动条控件的最大值 setSingleStep() 设置滑动条控件的步长 setValue() 设置滑动条控件的值 value() 获取滑动条控件的值 setTickInterval() 设置刻度间隔 setTickPosition() 设置刻度标记的位置，可以输入一个枚举值，这个枚举值指定刻度线想当与滑块和用户操作的位置，以下是可以输入的枚举值： QSlider.NoTicks:不绘制任何刻度线 QSlider.TicksBothSides：在滑块的两侧绘制刻度线 QSlider.TicksAbove:在滑块的（水平）上方绘制刻度线 QSlider.TicksBelow:在滑块的（水平）下方绘制刻度线 QSlider.TicksLeft:在滑块的（垂直）左侧绘制刻度线 QSlider.TicksRight,在滑块的（垂直）右侧绘制刻度线
        *   信号
            *   vlaueChanged 当滑块的值发生改变时发射此信号，此信号是最常用的 sliderPressed 当用户按下滑块时发射此信号 sliderMoved 当用户拖动滑块时发射此信号 slierReleased 当用户释放滑块时发射此信号
    *   QDialog
        *   介绍
            *   QDialog类的子类主要有QMessageBox，QFileDialog，QColorDialog，QFontDialog，QInputDialog
            *   方法
                *   setWindowTitle() 设置对话框标题 setWindowModality() 设置窗口模态，取值如下 Qt.NonModal：非模态，可以和程序的其他窗口进行交互 Qt.WindowModal:窗口模态，程序在未处理玩当前对话框时，将阻止和对话框的父窗口进行交互 Qt.ApplicationModal：应用程序模态，阻止和任何其他窗口进行交互
    *   QMessageBox
        *   方法
            *   information(QWdiget parent,title,text,buttons,defaultButton) 弹出消息对话框，各参数解释如下 parent：指定的父窗口控件 title：对话框标题 text：对话框文本 buttons：多个标准按钮，默认为ok按钮 defaultButton：默认选中的标准按钮，默认选中第一个标准按钮 question（QWidget parent,title,text,buttons,defaultButton） 弹出问答对话框（各参数解释如上） warning（QWidget parent,title,text,buttons,defaultButton） 弹出警告对话框（各参数解释如上） critical（QWidget parent,title,text,buttons,defaultButton） 弹出严重错误对话框（各参数解释如上） about（QWidget parent,title,text） 弹出关于对话框（各参数解释如上） setTitle() 设置标题 setText() 设置正文消息 setIcon() 设置弹出对话框的图片
        *   按钮标准
            *   QMessage.Ok 同意操作 QMessage.Cancel 取消操作 QMessage.Yes 同意操作 QMessage.No 取消操作 QMessage.Abort 终止操作 QMessage.Retry 重试操作 QMessage.Ignore 忽略操作
        *   对话框
            *   消息对话框，用来告诉用户关于提示信息QMessageBox.information(self,'标题','消息对话框正文',QMessageBox.Yes|QMessageBox.No,QMessageBox.Yes) 提问对话框，用来告诉用户关于提问消息QMessageBox.question(self,'标题','提问框消息正文',QMessageBox.Yes|QMessageBox.No,QMessageBox.Yes) 警告对话框，用来告诉用户关于不寻常的错误消息QMessageBox.warning(self,'标题','警告框消息正文',QMessageBox.Yes|QMessageBox.No,QMessageBox.Yes) 严重错误对话框，用来告诉用户关于严重的错误消息QMessageBox.critical(self,'标题','严重错误对话框消息正文',QMessageBox.Yes|QMessageBox.No,QMessageBox.Yes) 关于对话框QMessageBox.about(self,'标题','关于对话框'
    *   QinputDialog
        *   介绍
            *   QInputDialog控件是一个标准对话框，有一个文本框和两个按钮（ok和cancel）组成，当用户单击ok或enter键后，在父窗口可以收集通过QInputDialog控件输入的信息，QInputDialog控件是QDialog标准对话框的一部分 在QInpuTDialog控件中可以输入数字，字符串或列表中的选项，标签用于提示必要的信息
        *   方法
            *   getint() 从控件中获得标准整数输入 getDouble() 从控件中获得标准浮点数输入 getText() 从控件中获得标准字符串的输入 getItem() 从控件中获得列表里的选项输入
    *   QFontDialog
        *   QFontDialog控件是一个常用的字体选择对话框，可以让用户选择所显示文本的字号大小，样式和格式,QFontDialog是QDialog控件对话框的一部分，使用QFontDialog类的静态方法getFont（）,可以从字体选择对话框中选择文本的显示字号大小样式和格式
    *   QFileDialog
        *   getOpenFileName() 返回用户所选择文件的名称，并打开该文件 getSaveFileName（） 使用用户选择的文件名保存文件 setFileMode（） 可以选择的文件类型，枚举常量是： QFileDialog.AnyFile:任何文件 QFileDialog.ExistingFile:已存在的文件 QFileDialog.Directory:文件目录 QFileDialog.ExistingFiles:已经存在的多个文件 setFilter() 设置过滤器，只显示过滤器允许的文件类型
    *   QPainter
        *   QPainter绘制常用方法
            *   begin() 开始在目标设备上绘制 drawArc() 在起始角度和最终角度之间画弧 drawEllipse() 在一个矩形内画一个椭圆 drawLine(int x1,int y1,int x2,int y2) 绘制一条指定了端点坐标的线，绘制从（x1,y1）到（x2,y2）的直线并且设置当前地画笔位置为（x2,y2） drawPixmap() 从图像中提取Pixmap并将显示在指定位置 drawPolygon() 使用坐标数组绘制多边形 drawRect(int x,int y,int w,int h) 以给定的宽度w和高度h从左上角坐标（x,y）绘制一个矩形 drawText() 显示给定坐标处的文字 fillRect() 使用QColor参数填充矩形 setBrush() 设置画笔的风格 setPen() 设置用于绘制的笔的颜色，大小，样式
        *   画笔风格（Penstyle）
            *   Qt.Nopen 没有线。比如QPainter.drawRect()填充，但没有绘制任何边界线 Qt.SolidLine 一条简单的线 Qt.DashLine 有一些像素分割的线 Qt.DotLine 有一些像素分割的点 Qt.DashDotLine 轮流交替的点和短线 Qt.DashDotDotLine 一条短线，两个点 Qt.MpenStyle 画笔风格的掩码
    *   QPen
        *   Qt.Nopen 没有线。比如QPainter.drawRect()填充，但没有绘制任何边界线 Qt.SolidLine 一条简单的线 Qt.DashLine 有一些像素分割的线 Qt.DotLine 有一些像素分割的点 Qt.DashDotLine 轮流交替的点和短线 Qt.DashDotDotLine 一条短线，两个点 Qt.MpenStyle 画笔风格的掩码
    *   QBrush
        *   预定义，过度，纹理图案
            *   drawRect(int x,int y,int w,int h) 以给定的宽度w和高度h从左上角坐标（x,y）绘制一个矩形
    *   QPixmap
        *   QPixmap类中常用的方法
            *   copy() 从QRect对象复制到QPixmap对象 fromImage() 将QImage对象转换为QPixmap对象 grabWidget() 从给定的一个窗口小控件创建一个像素图 grabWindow() 在窗口创建数据的像素图 load() 加载图像文件作为QPixmap对象 save() 将QPixmap对象保存为文件 toImage() 将QPixmap对象转换为QImage对象
    *   拖拽与剪切板
        *   Drag与Drop 前言 为用户提供的拖曳功能很直观，在很对桌面应用程序中，复制或移动对象都可以通过拖曳来完成 基于MIME类型的拖曳数据传输是基于QDrag类的，QMimeData对象将关联的数据与其对应的MIME类型相关联 MIME意为多功能Internet邮件扩展，它设计的最初目的是为了在发送电子邮件时附加多媒体数据，让邮件客户程序能根据其类型进行处理。然而当它被HTTP协议支持之后，它的意义就更为显著了。它使得HTTP传输的不仅是普通的文本，而变得丰富多彩。 每个MIME类型由两部分组成，前面是数据的大类别，例如声音audio、图象image等，后面定义具体的种类。 常见的MIME类型(通用型)： 超文本标记语言文本 .html text/html xml文档 .xml text/xml XHTML文档 .xhtml application/xhtml+xml 普通文本 .txt text/plain RTF文本 .rtf application/rtf PDF文档 .pdf application/pdf Microsoft Word文件 .word application/msword PNG图像 .png image/png GIF图形 .gif image/gif JPEG图形 .jpeg,.jpg image/jpeg au声音文件 .au audio/basic MIDI音乐文件 mid,.midi audio/midi,audio/x-midi RealAudio音乐文件 .ra, .ram audio/x-pn-realaudio MPEG文件 .mpg,.mpeg video/mpeg AVI文件 .avi video/x-msvideo GZIP文件 .gz application/x-gzip TAR文件 .tar application/x-tar 任意的二进制数据 application/octet-stream
        *   MimeData类函数允许检测和使用方便的MIME类型 判断函数 设置函数 获取函数 MIME类型 hasText() text() setText() text/plain hasHtml() html() setHtml() text/html hasUrls() urls() setUrls() text/url-list hasImage() imageData() setImageData image/\* hasColor() colorData() setColrDaata() application/x-color
        *   常用的拖曳事件如表 事件 描述 DragEnterEvent 当执行一个拖曳控件操作，并且鼠标指针进入该控件时，这个事件将会被触发。在这个事件中可以获得被操作的窗口控件，还可以有条件地接受或拒绝该拖曳操作 DragMoveEvent 在拖曳操作进行时会触发该事件 DragLeaveEvent 当执行一个拖曳操作，并且鼠标指针离开该控件时，这个事件被触发 DropEvent 当拖曳操作在其目标控件上被释放时，这个事件将被触发
    *   QClipboard
        *   QClipboard类中的常用方法如表
            *   clear() 清空剪切板的内容 setImage() 将QImage对象复制到剪切板中 setMimeData() 将MIME数据设置为剪切板 setPixmap() 从剪切板中复制Pixmap对象 setText() 从剪切板中复制文本 text() 从剪切板中检索文本
        *   QClipboard类中的常用信号
            *   dataChanged 当剪切板内容发生变化时，这个信号被发射
    *   QCalendar
        *   QCalendar类中常用的方法
            *   seTDateRange() 设置日期可供选择的范围 setFirstDayWeek() 重新设置星期的第一天，默认是星期天，其参数枚举值如下 Qt.Monday：星期一 Qt.Tudesday:星期二 Qt.Wednesday：星期三 Qt.Thursday：星期四 Qt.Friday：星期五 Qt.Saturday：星期六 Qt.Sunday：星期日 setMinimumDate() 设置最大日期 setMaximumDate() 设置最小日期 setSelectedDate() 设置一个QDate对象，作为日期控件所选定的日期 minimumDate() 获取日历控件的最小日期 maximumDate() 获取日历控件的最大日期 selectedDate() 返回当前选定的日期 setGridvisible() 设置日历控件是否显示网格
    *   QDateTimeEdit
        *   QDateTimeEdit类中常用方法
            *   setDisplayFormat 设置日期的时间格式 yyyy：代表年份，用4为数表示 MM：代表月份，取值范围01-12 dd：代表日，取值范围01-31 HH：代表小时，取值范围00-23 mm：代表分钟，取值范围00-59 ss：代表秒，取值范围00-59 setMinimumDate() 设置控件的最小日期 setMaximumDate() 设置控件的最大日期 time() 返回编辑的时间 date() 返回编辑的日期
        *   QDateTImeEdit类中常用的信号
            *   dateChanged 当日期改变时发射此信号 dateTImeChanged 当日期时间改变时发射此信号 timeChanged 当时间发生改变时发射此信号
    *   菜单栏
        *   menuBar() 返回主窗口的QMenuBar对象 addMenu() 在菜单栏中添加一个新的QMenu对象 addAction() 向QMenu小控件中添加一个操作按钮，其中包含文本或图标 setEnabled() 将操作按钮设置为启用/禁用 addSeperator() 在菜单中添加一条分割线 clear() 删除菜单栏的内容 setShortcut() 将快捷键关联到操作按钮 setText() 设置菜单项的文本 setTitle() 设置QMenu小控件的标题 text() 返回与QACtion对象关联的文本 title() 返回QMenu小控件的标题
    *   QtoolBar
        *   QToolBar类中的常用方法
            *   addAction() 添加具有文本或图标的工具按钮 addSeperator() 分组显示工具按钮 addWidget() 添加工具栏中按钮以外的控件 addToolBar() 使用QMainWindow类的方法添加一个新的工具栏 setMovable() 工具变得可移动 setOrientation() 工具栏的方向可以设置为Qt.Horizontal或Qt.certical
    *   QstatusBar
        *   QStatusBar类中的常用方法
            *   addWidget() 在状态栏中添加给定的窗口小控件对象 addPermanentWidget() 在状态栏中永久添加给定的窗口小控件对象 showMessage() 在状态栏显示一条临时信息，指定时间间隔 clearMessage() 删除正在显示的临时信息 removeWidget() 从状态栏中移除指定的小控件
    *   QPrinter
        *   打印图像是图像处理软件中的一个常用功能，打印图像实际上是在QPaintDevice中画图，与平时在QWidget。QPixmap和QImage中画图是一样的，都是创建一个QPainter对象进行画图的，只是打印使用的是QPrinter，它的本质上也是一个QPainterDevice（绘图设备）
*   高级控件
    *   QtableView
        *   QStringListModel
            *   存储一组字符串
        *   QStandarditemModel
            *   存储任意层次结构的数据
        *   QDirModel
            *   对文件系统进行封装
        *   QSqlQueryModel
            *   对SQL的查询结果集进行封装
        *   QSqlTableModel
            *   对SQL中的表格进行封装
        *   QSqlRelationalTableModel
            *   对模型中的数据进行排序或过滤
    *   QListView
        *   常用方法
            *   setModel()
                *   用来设置View所关联的Model
            *   selectedItem()
                *   选种Model中的条目
            *   isSelected()
                *   判断Model中的某条目是否被选中
        *   常用信号
            *   clicked
                *   当单击某项时，信号被发射
            *   doubleClidked
                *   当双击某项时，信号被发射
        *   简介
        
    *   QListWidget
        *   addItem()
            *   在列表中添加QListWidgetItem对象或字符串
        *   addItems()
            *   添加列表中的每个条目
        *   insertItem()
            *   在指定的索引处插入条目
        *   clear()
            *   删除列表的内容
        *   setCurrentItem()
            *   设置当前所选条目
        *   sortItems()
            *   按升序重新排列条目
        *   信号
            *   currentItemChanged
                *   当列表的条目发生改变时发射此信号
            *   itemClicked
                *   当点击列表中的条目时发射此信号
        *   这是一个基于条目的接口
            *   列表的添加和删除条目
    *   QTreeWidget
        *   QTreeWidget类中的常用方法
            *   setColumnWidth(int column,int width) 将指定列的宽度设置为给定的值 Column：指定的列 width：指定的宽度 insertTopLevelItems() 在视图的顶层索引中引入项目的列表 expandAll() 展开所有节点的树形节点 invisibleRootItem() 返回树形控件中不可见的根选项（Root Item） selectionItems() 返回所有选定的非隐藏项目的列表内
        *   QTreeWidgetItem类中常用的方法
            *   addChild() 将子项追加到子列表中 setText() 设置显示的节点文本 Text() 返回显示的节点文本 setCheckState(column.state) 设置指定列的选中状态： Qt.Checked:节点选中 Qt.Unchecked:节点没有选中 setIcon(column,icon) 在指定的列中显示图标
    *   QTableWidget
        *   常用方法
            *   setROwCount(int row) 设置QTableWidget表格控件的行数 setColumnCount(int col) 设置QTableWidget表格控件的列数 setHorizontalHeaderLabels() 设置QTableWidget表格控件的水平标签 setVerticalHeaderLabels() 设置QTableWidget表格控件的垂直标签 setItem(int ,int ,QTableWidgetItem) 在QTableWidget表格控件的每个选项的单元控件内添加控件 horizontalHeader() 获得QTableWidget表格控件的表格头，以便执行隐藏 rowCount() 获得QTableWidget表格控件的行数 columnCount() 获得QTableWidget表格控件的列数 setEditTriggers(EditTriggers triggers) 设置表格是否可以编辑，设置表格的枚举值 setSelectionBehavior 设置表格的选择行为 setTextAlignment() 设置单元格内文本的对齐方式 setSpan(int row,int column,int rowSpanCount,int columnSpanCount) 合并单元格，要改变单元格的第row行，column列，要合并rowSpancount行数和columnSpanCount列数 row：要改变的行数 column：要改变的列数 rowSpanCount：需要合并的行数 columnSpanCount：需要合并的列数 setShowGrid() 在默认情况下表格的显示是有网格的，可以设置True或False用于是否显示，默认True setColumnWidth(int column,int width) 设置单元格行的宽度 setRowHeight(int row,int height) 设置单元格列的高度
        *   编辑规则的枚举值类型
            *   QAbstractItemView.NoEditTriggers0No 0 不能对表格内容进行修改 QAbstractItemView.CurrentChanged1Editing 1 任何时候都能对单元格进行修改 QAbstractItemView.DoubleClicked2Editing 2 双击单元格 QAbstractItemView.SelectedClicked4Editing 4 单击已经选中的内容 QAbstractItemView.EditKeyPressed8Editing 8 当修改键按下时修改单元格 QAbstractItemView.AnyKeyPressed16Editing 16 按任意键修改单元格 QAbstractItemView.AllEditTriggers31Editing 31 包括以上所有条件
        *   表格选择行为的枚举值
            *   QAbstractItemView.SelectItems0Selecting 0 选中单个单元格 QAbstractItemView.SelectRows1Selecting 1 选中一行 QAbstractItemView.SelectColumns2Selecting 2 选中一列
        *   单元格文本水平对齐方式
            *   Qt.AlignLeft 将单元格内的内容沿单元格的左边缘对齐 Qt.AlignRight 将单元格内的内容沿单元格的右边缘对齐 Qt.AlignHCenter 在可用空间中，居中显示在水平方向上 Qt.AlignJustify 将文本在可用空间内对齐，默认从左到右
        *   单元格文本垂直对齐方式
            *   Qt.AlignTop 与顶部对齐 Qt.AlignBottom 与底部对齐 Qt.AlignVCenter 在可用空间中，居中显示在垂直方向上 Qt.AlignBaseline 与基线对齐
    *   QStackedWidget
        *   堆栈窗口控件可以填充小控件
    *   QDockWidget
        *   setWidget()
            *   Dock窗口区域设置QWidget
        *   setFloating()
            *   是否浮动
        *   setAllowedAreas()
            *   可以停靠的区域
        *   setFeatures()
            *   设置停靠窗口的功能属性
        *   setWidget() 在Dock窗口区域设置QWidget setFloating() 设置Dock窗口是否可以浮动，如果设置为True，则表示可以浮动 setAlllowedAreas() 设置窗口可以停靠的区域 LeftDockWidgetArea:左侧停靠区域 RightDockWidgetArea:右侧停靠区域 TopDockWidgetArea:顶部停靠区域 BottomDockWidgetArea:底部停靠区域 NoDockWidgetArea:不显示Widget setFearures() 设置停靠窗口的功能属性 DockWidgetClosable:可关闭 DockWidgetMovable：可移动 DockWidgetFloatable：可漂浮 DockWidgetVerticalTitleBar：在左边显示垂直的标签栏 AllDockWidgetFeatures:具有前三种属性的所有功能 NoDockWidgetFeatures:无法关闭，不能悬浮，不能移动
    *   QScrollBar
        *   可以看到，前面介绍的几个窗口控件的共同点是新建一些窗口来装载更多的控件，而QScrollBar提供了另一种思路：这个控件提供水平的或垂直的滚动条，这样可以扩大当前窗口的有效装载面积，从而装载更多的控件
        *   valueChanged 当滑动条的值改变发射此信号 sliderMoved 当用户拖动滑块时发射此信号
    *   QTimer
        *   介绍
            *   如果在应用程序中周期性地进行某项操作，比如周期性的检测主机的cpu值，则需要用到QTimer定时器，QTimer类提供了重复和单次的定时器，要使用定时器，需要先创建一个QTimer实例，将其Timeout信号连接到槽函数，并调用start（），然后，定时器，会以恒定的间隔发出timeout信号 当窗口的控件收到Timeout信号后，他就会停止这个定时器，这是在图形用户界面中实现复杂工作的一个典型用法，随着技术的进步，多线程在越来越多的平台上被使用，QTimer对象会被替代掉
        *   QTimer类中的常用方法
            *   start(milliseconds) 启动或重新启动定时器，时间间隔为毫秒，如果定时器已经运行，他将停止并重新启动，如果singleSlot信号为真，定时器仅被激活一次 Stop() 停止定时器
        *   QTimer类中常用的信号
            *   singleShot 在给定的时间间隔后调用一个槽函数时发射此信号 timeout 当定时器超时时发射此信号
    *   QThread
        *   简介
            *   Thread是Qt的线程类中最核心的底层类。由于PyQt的的跨平台特性，QThread要隐藏所有与平台相关的代码 要使用的QThread开始一个线程，可以创建它的一个子类，然后覆盖其它QThread.run（）函数 class Thread（QThread）： def \_\_init \_\_（self）： super（Thread，self）.\_\_ init \_\_（） def run（self）： #线程相关的代码 pass 接下来创建一个新的线程 thread = Thread（） thread.start（） 可以看出，PyQt的线程使用非常简单—-建立一个自定义的类（如thread），自我继承自QThread ，并实现其run（）方法即可 在使用线程时可以直接得到Thread实例，调用其start（）函数即可启动线程，线程启动之后，会自动调用其实现的run（）的函数，该方法就是线程的执行函数 业务的线程任务就写在run（）函数中，当run（）退出之后线程就基本结束了，QThread有started和finished信号，可以为这两个信号指定槽函数，在线程启动和结束之时执行一段代码进行资源的初始化和释放操作，更灵活的使用方法是，在自定义的QThread实例中自定义信号，并将信号连接到指定的槽函数，当满足一定的业务条件时发射此信号
        *   QThread类中的常用方法
            *   start() 启动线程 wait() 阻止线程，直到满足如下条件之一 与此QThread对象关联的线程已完成执行（即从run返回时），如果线程完成执行，此函数返回True，如果线程尚未启动，也返回True 等待时间的单位是毫秒，如果时间是ULONG\_MAX（默认值·），则等待，永远不会超时(线程必须从run返回），如果等待超时，此函数将会返回False sleep() 强制当前线程睡眠多少秒
        *   QThread类中的常用信号
            *   started 在开始执行run函数之前，从相关线程发射此信号 finished 当程序完成业务逻辑时，从相关线程发射此信号
    *   QTabWidget
        *   QTabWidget类中常用的方法
            *   addTab() 将一个控件添加到Tab控件的选项卡中 insertTab() 将一个Tab控件的选项卡插入到指定的位置 removeTab() 根据指定的索引删除Tab控件 setCurrentIndex() 设置当前可见的选项卡所在的索引 setCurrentWidget() 设置当前可见的界面 setTabBar() 设置选项卡栏的小控件 setTabPosition() 设置选项卡的位置 QTabWidget.North:显示在页面的上方 QTabWidget.South:显示在页面的下方 QTabWidget.West:显示在页面的左侧 QTabWidget.East:显示在页面的右侧 setTabText() 定义Tab选项卡的显示值
        *   QTabWidget类中的常用信号
            *   currentChanged 切换当前页面时发射该信号
    *   QmdiArea
        *   addSubWindow() 将一个小控件添加在MDI区域作为一个新的子窗口 removeSubWindow() 删除一个子窗口的小控件 setActiveSubWindow() 激活一个子窗口 cascadeSubWindows() 安排子窗口在MDI区域级联显示 tileSubWindows() 安装子窗口在MDI区域平铺显示 closeActiveSubWindow() 关闭活动的子窗口 subWindowList() 返回MDI区域的子窗口列表 setWidget() 设置一个小控件作为QMdiSubWindow实例对象的内部控件
*   PyQt5信号和槽
    *   介绍
    *   自定义槽函数
    *   内置槽函数
    *   装饰器信号和槽
    *   信号和槽断开连接
    *   事件处理机制
        *   常见事件类型
            *   键盘事件
            *   鼠标事件
            *   拖放事件
            *   滚轮事件
            *   绘屏事件
            *   定时事件
            *   焦点事件
            *   进入离开事件
            *   移动 大小改变 显示隐藏 窗口事件
    *   多线程信号和槽
    *   窗口数据传递
        *   单一窗口
        *   多窗口
*   Pyqt5图形特效
    *   常见的窗口类型
        *   Qt.Widget 默认窗口，有最小化，最大化，关闭按钮 Qt.Window 普通窗口，有最小化，最大化，关闭按钮 Qt.Dialog 会话框窗口，有问号和关闭按钮 Qt.Popup 弹出窗口，窗口无边框 Qt.ToolTip 提示窗口，窗口无边框，无任务栏 Qt.SplashScreen 闪屏，窗口无边框，无任务栏 Qt.SubWindow 子窗口，窗口无按钮，但有标题
    *   自定义顶层窗口外观标志
        *   Qt.MSWindowsFixedSizeDialogHint 固定窗口，无法调整大小 Qt.FramelessWindowHint 窗口无边框 Qt.CustomizeWindowHint 有边框，无标题栏与按钮，不能移动和拖动 Qt.WindowTitleHint 添加标题栏与关闭按钮 Qt.WindowSystemMenuHint 添加系统目录和关闭按钮 Qt.WindowMaximizeButtonHint 激活最大化按钮与关闭按钮，禁止最小化按钮 Qt.WindowMinimizeButtonHint 激活最小化按钮与关闭按钮，禁止最大化按钮 Qt.WindowMinMaxButtonsHint 激活最大化与最小化按钮和关闭按钮 Qt.WindowCloseButtonHint 添加一个关闭按钮 Qt.WindowContextHelpButtonHint 添加问号与关闭按钮，像对话框一样 Qt.WindowStaysOnTopHint 窗口始终处于顶部位置 Qt.windowStaysOnButtonHint 窗口始终处于底部位置
    *   简单绘图
        *   QPixmap 专门为绘图设计的，在绘制图片时需要使用QPixmap QImage 提供了一个与硬件无关的图像表示函数，可以用于图片像素级访问 QPicture 是一个绘图设备类，它继承自QPainter类，可以使用QPainter的begin（）函数在QPicture上绘图，使用end（）函数结束绘图，使用QPicture的save（）函数将QPainter所使用的绘图指令保存在文件中 QBitmap 是一个继承自QPixmap的简单类，它提供了1bit深度的二值图像的类，QBitmap提供的单色图像，可以用来制作游标（QCursor），或者笔刷（QBrush）
    *   QSS
        *   QSS即Qt样式表，是用来自定义控件外观的一种机制，QSS大量参考了Css的内容，但QSS的功能要比Css弱得多，体现在选择器少，可以使用的QSS属性也少，而且并不是所有的属性都可以应用在PyQt的控件上，QSS使页面美化跟代码层分开，利于维护
        *   QSS的语法规则
            *   QSS的语法规则几乎与CSS相同，QSS样式由两部分组成，其中一部分是选择器（Selector），指定哪些软件会受到影响，另一部分是声明（Declaration），指定哪些属性应该在控件上进行设置，声明部分是一系列的“属性：值”对，使用（；）分割各个不同的属性值对，使用大括号（{}）将所有的声明包括在内，例如 QPushButton{color：red} 表示设置QPushButton类及其子类的所有实例的前景色是红色，其中，QPushButton表示选择器，指定所有的QPushButton类及其子类都会受到影响，注意，凡是继承自QPushButton的子类都会受到影响，这是与Css不同的地方，因为css应用的都是一些标签，没有类的结构，更没有子类的概念，{color：red}则是规则的定义，表示指定前景色是红色
        *   QSS选择器类型
            *   通配选择器 \*, 匹配所有的控件 类型选择器 QPushButton，匹配所有的QPushButton类及其子类的实例 属性选择器 QPushButton\[name=’mybtn’\],匹配所有的name属性是myBtn的QPushButton实例。注意，该属性是可以自定义的，不一定非得是类本身具有的属性
            *   类选择器 .QPushButton，匹配所有的QPushButton实例，但是不匹配子类，注意，前面有一个点，这是与css类选择器不同的地方 ID选择器 myButton，匹配所有的ID为myButton的控件，这里的id实际上就是objectName指定的值 后代选择器 QDialog QPushButton，匹配所有的QDialog容器中包含的QPushButton，不管是直接的，还是间接的 子选择器 QDialog>QPushButton,匹配所有的QDialog容器中包含的QPushButton，其中要求QPushButton的直接父类容器是QDialog
        *   QSS子控件
            *   QSS子控件实际上也是一种选择器，其应用在一些复合控件上，典型的如QComboBox，该控件的外观是，有一个矩形的外边框，右边有一个下拉箭头，点击之后会弹出下拉列表，例如： QComboBox：drop-down {image：url（dropdown.png）} 上面的样式指定所有的QComboBox下拉箭头的图片是自定义的，图片文件为dropdown.png ::drop-down子控件选择器可以与上面提到到的选择器一起联合使用，例如 QComboBox#myQComboBox::drop-down {image：url（dropdown.png）}
        *   QSS伪状态
            *   QSS伪状态选择器是以冒号开头的一个选择表达式，例如hover，表示当鼠标指针经过时的状态，伪状态选择器限制了当控件处于某种状态才可以使用的QSS规则，伪状态只能描述一个控件或者一个复合控件的自控件的状态，所以它只能放在选择器的最后面，例如 QComboBox：hover{background-color：red;} 表示到鼠标经过QComboBox时.其背景色指定为红色 该伪状态：hover描述的是QComboBox的状态，除可以描述所选择的控件外，伪状态还可以描述子控件选择器所选择的复合控件的子控件的状态 QComboBox::drop-down:hover{background-color:red} 表示当鼠标指针经过QComboBox的下拉箭头时，该下拉箭头的背景色变成红色 此外，伪状态还可以用一个感叹号来表示状态，例如，：hove表示鼠标指针经过的状态，：！hover表示鼠标没有经过的状态，多种伪状态可以同时使用，例如 QCheckBox：hover：checked{color：white} 表示当鼠标指针经过一个选中的QCheckBox时，设置其文字的前景色为白色
*   Pyqt5数据库
*   Pyqt5多媒体
*   PyQt5数据可视化