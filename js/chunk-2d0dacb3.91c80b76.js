(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dacb3"],{"6cb2":function(s,a,t){"use strict";t.r(a);var n=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},l=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h3",{attrs:{id:"class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class"}}),s._v(" class")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-comment"},[s._v("// .java 文件会被编译器编译成.class文件执行")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" "),t("span",{staticClass:"hljs-class"},[t("span",{staticClass:"hljs-keyword"},[s._v("class")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("name")]),s._v(" ")]),s._v("{\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// calss入口")]),s._v("\n    "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("static")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("void")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("main")]),t("span",{staticClass:"hljs-params"},[s._v("(String[], args)")]),s._v(" ")]),s._v("{\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// 输出")]),s._v("\n        System.out.println("),t("span",{staticClass:"hljs-string"},[s._v('"hello word!"')]),s._v(");\n    }\n}\n")])]),t("h3",{attrs:{id:"%E6%A0%87%E8%AF%86%E7%AC%A6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E6%A0%87%E8%AF%86%E7%AC%A6"}}),s._v(" 标识符")]),t("ol",[t("li",[s._v("以 字母、下划线、_ 、$ 开头")]),t("li",[s._v("不能是特殊字符")]),t("li",[s._v("不能是关键字")])]),t("h3",{attrs:{id:"%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B"}}),s._v(" 数据类型")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(". 基本数据类型\n-     数值型 \n            整数类型: {\n                "),t("span",{staticClass:"hljs-keyword"},[s._v("byte")]),s._v("：["),t("span",{staticClass:"hljs-number"},[s._v("8")]),s._v("位, 类型用在大型数组中节约空间，主要代替整数, "),t("span",{staticClass:"hljs-keyword"},[s._v("byte")]),s._v(" a = "),t("span",{staticClass:"hljs-number"},[s._v("100")]),s._v("，"),t("span",{staticClass:"hljs-keyword"},[s._v("byte")]),s._v(" b = -"),t("span",{staticClass:"hljs-number"},[s._v("50")]),s._v("]，\n                "),t("span",{staticClass:"hljs-keyword"},[s._v("short")]),s._v("：["),t("span",{staticClass:"hljs-number"},[s._v("16")]),s._v("位, "),t("span",{staticClass:"hljs-keyword"},[s._v("short")]),s._v(" s = "),t("span",{staticClass:"hljs-number"},[s._v("1000")]),s._v("，"),t("span",{staticClass:"hljs-keyword"},[s._v("short")]),s._v(" r = -"),t("span",{staticClass:"hljs-number"},[s._v("20000")]),s._v("],\n                "),t("span",{staticClass:"hljs-keyword"},[s._v("int")]),s._v(": ["),t("span",{staticClass:"hljs-number"},[s._v("32")]),s._v("位, "),t("span",{staticClass:"hljs-keyword"},[s._v("int")]),s._v(" a = "),t("span",{staticClass:"hljs-number"},[s._v("100000")]),s._v(", "),t("span",{staticClass:"hljs-keyword"},[s._v("int")]),s._v(" b = -"),t("span",{staticClass:"hljs-number"},[s._v("200000")]),s._v("]，\n                "),t("span",{staticClass:"hljs-keyword"},[s._v("long")]),s._v(": ["),t("span",{staticClass:"hljs-number"},[s._v("64")]),s._v("位, 这种类型主要使用在需要比较大整数的系统上, "),t("span",{staticClass:"hljs-keyword"},[s._v("long")]),s._v(" a = "),t("span",{staticClass:"hljs-number"},[s._v("100000L")]),s._v("，Long b = -"),t("span",{staticClass:"hljs-number"},[s._v("200000L")]),s._v("]\n            }\n            浮点类型: {\n                "),t("span",{staticClass:"hljs-keyword"},[s._v("float")]),s._v(": ["),t("span",{staticClass:"hljs-number"},[s._v("32")]),s._v("位 单精度, 浮点数不能用来表示精确的值，如货币, "),t("span",{staticClass:"hljs-keyword"},[s._v("float")]),s._v(" f1 = "),t("span",{staticClass:"hljs-number"},[s._v("234.5f")]),s._v("]，\n                "),t("span",{staticClass:"hljs-keyword"},[s._v("double")]),s._v(": ["),t("span",{staticClass:"hljs-number"},[s._v("64")]),s._v("位 双精度, "),t("span",{staticClass:"hljs-keyword"},[s._v("double")]),s._v("类型同样不能表示精确的值，如货币,\n                "),t("span",{staticClass:"hljs-keyword"},[s._v("double")]),s._v(" d1 = "),t("span",{staticClass:"hljs-number"},[s._v("123.4")]),s._v("]\n            }\n-     字符型 （"),t("span",{staticClass:"hljs-keyword"},[s._v("char")]),s._v("）\n-     布尔型 （"),t("span",{staticClass:"hljs-keyword"},[s._v("boolean")]),s._v("）\n")])]),t("h3",{attrs:{id:"%E8%BF%90%E7%AE%97%E7%AC%A6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E8%BF%90%E7%AE%97%E7%AC%A6"}}),s._v(" 运算符")]),t("blockquote",[t("ul",[t("li",[s._v("“+”")]),t("li",[s._v("“-”")]),t("li",[s._v("“*”")]),t("li",[s._v("“/”")]),t("li",[s._v("“%”")]),t("li",[s._v("++  ++在前先运行，后赋值，在后先赋值，后运算")]),t("li",[s._v("–")])])]),t("h3",{attrs:{id:"%E8%B5%8B%E5%80%BC%E8%BF%90%E7%AE%97%E7%AC%A6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E8%B5%8B%E5%80%BC%E8%BF%90%E7%AE%97%E7%AC%A6"}}),s._v(" 赋值运算符")]),t("blockquote",[t("ul",[t("li",[s._v("+=")]),t("li",[s._v("=+")]),t("li",[s._v("*=")]),t("li",[s._v("/=")]),t("li",[s._v("%=")]),t("li",[s._v("=")])])]),t("h3",{attrs:{id:"%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6"}}),s._v(" 逻辑运算符")]),t("p",[s._v("1、&& 与：要求所有人都投票同意，才能通过某议题")]),t("p",[s._v("2、|| 或：只要求一个人投票同意就可以通过某议题")]),t("p",[s._v("3、 ! 非：某人原本投票同意，通过非运算符，可以使其投票无效")]),t("p",[s._v("4、 ^ 异或：有且只能有一个人投票同意，才可以通过某议题")]),t("h3",{attrs:{id:"%E8%BF%90%E7%AE%97%E7%AC%A6%E4%BC%98%E5%85%88%E7%BA%A7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E8%BF%90%E7%AE%97%E7%AC%A6%E4%BC%98%E5%85%88%E7%BA%A7"}}),s._v(" 运算符优先级")]),t("p",[s._v("单目乘除为关系，逻辑三目后赋值。")]),t("ul",[t("li",[s._v("单目：单目运算符+ –(负数) ++ – 等")]),t("li",[s._v("乘除：算数单目运算符* / % + -")]),t("li",[s._v("为：位移单目运算符<< >>")]),t("li",[s._v("关系：关系单目运算符> < >= <= == !=")]),t("li",[s._v("逻辑：逻辑单目运算符&& || & | ^")]),t("li",[s._v("三目：三目单目运算符A > B ? X : Y")]),t("li",[s._v("后：无意义，仅仅为了凑字数")]),t("li",[s._v("赋值：赋值=")]),t("li")]),t("h3",{attrs:{id:"%E6%95%B0%E7%BB%84"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E6%95%B0%E7%BB%84"}}),s._v(" 数组")]),t("pre",{staticClass:"hljs"},[t("code",[s._v("一. 声明数组\n"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(". "),t("span",{staticClass:"hljs-keyword"},[s._v("int")]),s._v("[] scores;  整数型数组\n"),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(". "),t("span",{staticClass:"hljs-keyword"},[s._v("double")]),s._v("[] height; 浮点型\n"),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(". String[] name; 字符串型\n\n二. 分配空间\n"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(". scores = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("int")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v("];\n"),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(". height = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("double")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v("];\n"),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(". name = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" String["),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v("];\n"),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v(". "),t("span",{staticClass:"hljs-keyword"},[s._v("int")]),s._v("[] scores = {"),t("span",{staticClass:"hljs-number"},[s._v("78")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("89")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("59")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("98")]),s._v("} ===> "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("int")]),s._v("[]{"),t("span",{staticClass:"hljs-number"},[s._v("78")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("89")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("59")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("98")]),s._v("};\n\n三. error\n"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(". "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("int")]),s._v("[]\n"),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(". "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("int")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("]{"),t("span",{staticClass:"hljs-number"},[s._v("45")]),s._v("}\n\n四. 多维数组\n"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(". 二维数组 "),t("span",{staticClass:"hljs-keyword"},[s._v("int")]),s._v("[][] scores = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("int")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("]["),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("] ===> "),t("span",{staticClass:"hljs-keyword"},[s._v("int")]),s._v("[][] scpres =\n{\n{"),t("span",{staticClass:"hljs-number"},[s._v("12")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("123")]),s._v("}, \n{"),t("span",{staticClass:"hljs-number"},[s._v("12")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("123")]),s._v("}\n};\n")])]),t("h3",{attrs:{id:"%E6%96%B9%E6%B3%95%E5%AE%9A%E4%B9%89"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E6%96%B9%E6%B3%95%E5%AE%9A%E4%B9%89"}}),s._v(" 方法定义")]),t("pre",{staticClass:"hljs"},[t("code",[s._v("所谓方法，就是用来解决一类问题的代码的有序组合，是一个功能模块。\n\n一般情况下，定义一个方法的语法是：\n\n\n\n其中：\n所谓方法，就是用来解决一类问题的代码的有序组合，是一个功能模块。\n\n一般情况下，定义一个方法的语法是：\n")])]),t("pre",{staticClass:"hljs"},[t("code",[s._v("    访问修饰符 返回值类型 方法名(参数列表) {\n        方法体\n    }\n\n\n"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("、 访问修饰符：方法允许被访问的权限范围， 可以是 "),t("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v("、"),t("span",{staticClass:"hljs-keyword"},[s._v("protected")]),s._v("、"),t("span",{staticClass:"hljs-keyword"},[s._v("private")]),s._v(" 甚至可以省略 ，其中 "),t("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" 表示该方法可以被其他任何代码调用，其他几种修饰符的使用在后面章节中会详细讲解滴\n\n"),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("、 返回值类型：方法返回值的类型，如果方法不返回任何值，则返回值类型指定为 "),t("span",{staticClass:"hljs-keyword"},[s._v("void")]),s._v(" ；如果方法具有返回值，则需要指定返回值的类型，并且在方法体中使用 "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" 语句返回值\n\n"),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("、 方法名：定义的方法的名字，必须使用合法的标识符\n\n"),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("、 参数列表：传递给方法的参数列表，参数可以有多个，多个参数间以逗号隔开，每个参数由参数类型和参数名组成，以空格隔开 \n\n根据方法是否带参、是否带返回值，可将方法分为四类：\n\nØ 无参无返回值方法\n\nØ 无参带返回值方法\n\nØ 带参无返回值方法\n\nØ 带参带返回值方法\n\n\n\n## 面向对象\n"),t("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" "),t("span",{staticClass:"hljs-class"},[t("span",{staticClass:"hljs-keyword"},[s._v("class")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("className")]),s._v(" ")]),s._v("{}\n\n### "),t("span",{staticClass:"hljs-keyword"},[s._v("static")]),s._v(" 静态变量\n"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(". 静态方法中可以直接调用同类中的静态成员，但不能直接调用非静态成员。（如果希望在静态方法中调用非静态变量，可以通过创建类的对象，然后通过对象来访问非静态变量）\n"),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(". 在普通成员方法中，则可以直接访问同类的非静态变量和静态变量\n"),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(". 静态方法中不能直接调用非静态方法，需要通过对象来访问非静态方法\n")])]),t("h3",{attrs:{id:"%E6%A8%A1%E5%9D%97%E5%88%9D%E5%A7%8B%E5%8C%96"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E6%A8%A1%E5%9D%97%E5%88%9D%E5%A7%8B%E5%8C%96"}}),s._v(" 模块初始化")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" "),t("span",{staticClass:"hljs-class"},[t("span",{staticClass:"hljs-keyword"},[s._v("class")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("HelloWorld")]),s._v(" ")]),s._v("{\n    \n    String name; "),t("span",{staticClass:"hljs-comment"},[s._v("// 声明变量name")]),s._v("\n\tString sex; "),t("span",{staticClass:"hljs-comment"},[s._v("// 声明变量sex")]),s._v("\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("static")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("int")]),s._v(" age;"),t("span",{staticClass:"hljs-comment"},[s._v("// 声明静态变量age")]),s._v("\n    \n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 构造方法 只在第一次初始化时执行")]),s._v("\n\t"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("HelloWorld")]),s._v(" "),t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" ")]),s._v("{ \n\t\tSystem.out.println("),t("span",{staticClass:"hljs-string"},[s._v('"通过构造方法初始化name"')]),s._v(");\n\t\tname = "),t("span",{staticClass:"hljs-string"},[s._v('"tom"')]),s._v(";\n\t}\n    \n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 初始化块")]),s._v("\n\t{ \n\t\tSystem.out.println("),t("span",{staticClass:"hljs-string"},[s._v('"通过初始化块初始化sex"')]),s._v(");\n\t\tsex = "),t("span",{staticClass:"hljs-string"},[s._v('"男"')]),s._v(";\n\t}\n    \n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 静态初始化块")]),s._v("\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("static")]),s._v(" { \n\t\tSystem.out.println("),t("span",{staticClass:"hljs-string"},[s._v('"通过静态初始化块初始化age"')]),s._v(");\n\t\tage = "),t("span",{staticClass:"hljs-number"},[s._v("20")]),s._v(";\n\t}\n    \n\t"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("void")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("show")]),t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" ")]),s._v("{\n\t\tSystem.out.println("),t("span",{staticClass:"hljs-string"},[s._v('"姓名："')]),s._v(" + name + "),t("span",{staticClass:"hljs-string"},[s._v('"，性别："')]),s._v(" + sex + "),t("span",{staticClass:"hljs-string"},[s._v('"，年龄："')]),s._v(" + age);\n\t}\n    \n\t"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("static")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("void")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("main")]),t("span",{staticClass:"hljs-params"},[s._v("(String[] args)")]),s._v(" ")]),s._v("{\n        \n        "),t("span",{staticClass:"hljs-comment"},[s._v("// 创建对象")]),s._v("\n\t\tHelloWorld hello = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" HelloWorld();\n\t\t"),t("span",{staticClass:"hljs-comment"},[s._v("// 调用对象的show方法")]),s._v("\n        hello.show();\n        HelloWorld hello2 = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" HelloWorld();\n        \n\t}\n\t\x3c!--\n\t通过静态初始化块初始化age\n    通过初始化块初始化sex\n    通过构造方法初始化name\n    姓名：tom，性别：男，年龄："),t("span",{staticClass:"hljs-number"},[s._v("20")]),s._v("\n    \n    通过静态初始化块初始化age\n    通过初始化块初始化sex--\x3e\n}\n")])]),t("h3",{attrs:{id:"java-%E5%B0%81%E8%A3%85"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-%E5%B0%81%E8%A3%85"}}),s._v(" java 封装")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(". 修改属性的可见性    --"),t("span",{staticClass:"hljs-keyword"},[s._v("private")]),s._v("\n"),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(". 创建 setter/getter  -- 用于属性的读写\n"),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(". 在setter/getter中加入控制性语句   --对属性的合法值进行普安段\n")])]),t("h3",{attrs:{id:"java-%E4%B8%AD%E7%9A%84%E4%BF%AE%E9%A5%B0%E7%AC%A6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-%E4%B8%AD%E7%9A%84%E4%BF%AE%E9%A5%B0%E7%AC%A6"}}),s._v(" Java 中的修饰符")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("private")]),s._v(" 本类\n"),t("span",{staticClass:"hljs-keyword"},[s._v("protected")]),s._v(" 本类 同包 子类\n"),t("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" 任何人都能用\n")])]),t("h3",{attrs:{id:"%E5%86%85%E9%83%A8%E7%B1%BB"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E5%86%85%E9%83%A8%E7%B1%BB"}}),s._v(" 内部类")]),t("pre",{staticClass:"hljs"},[t("code",[s._v("问：什么是内部类呢？\n\n答：内部类（ Inner Class ）就是定义在另外一个类里面的类。与之对应，包含内部类的类被称为外部类。\n\n问：那为什么要将一个类定义在另一个类里面呢？清清爽爽的独立的一个类多好啊！！\n\n答：内部类的主要作用如下：\n\n"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(". 内部类提供了更好的封装，可以把内部类隐藏在外部类之内，不允许同一个包中的其他类访问该类\n\n"),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(". 内部类的方法可以直接访问外部类的所有数据，包括私有的数据\n\n"),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(". 内部类所实现的功能使用外部类同样可以实现，只是有时使用内部类更方便\n\n问：内部类有几种呢？\n\n答：内部类可分为以下几种：\n\n成员内部类\n静态内部类\n方法内部类\n匿名内部类\n")])]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-comment"},[s._v("//外部类HelloWorld")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" "),t("span",{staticClass:"hljs-class"},[t("span",{staticClass:"hljs-keyword"},[s._v("class")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("HelloWorld")]),s._v(" ")]),s._v("{\n    \n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 内部类Inner，类Inner在类HelloWorld的内部")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" "),t("span",{staticClass:"hljs-class"},[t("span",{staticClass:"hljs-keyword"},[s._v("class")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("Inner")]),s._v(" ")]),s._v("{\n        \n\t\t"),t("span",{staticClass:"hljs-comment"},[s._v("// 内部类的方法")]),s._v("\n\t\t"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("void")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("show")]),t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" ")]),s._v("{\n\t\t\tSystem.out.println("),t("span",{staticClass:"hljs-string"},[s._v('"welcome to imooc!"')]),s._v(");\n\t\t}\n\t}\n    \n\t"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("static")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("void")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("main")]),t("span",{staticClass:"hljs-params"},[s._v("(String[] args)")]),s._v(" ")]),s._v("{\n        \n        "),t("span",{staticClass:"hljs-comment"},[s._v("// 创建外部类对象")]),s._v("\n\t\tHelloWorld hello = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" HelloWorld();\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// 创建内部类对象")]),s._v("\n\t\tInner i = hello.new Inner();\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// 调用内部类对象的方法")]),s._v("\n\t\ti.show();\n\t}\n}\n")])]),t("h2",{attrs:{id:"%E7%BB%A7%E6%89%BF"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E7%BB%A7%E6%89%BF"}}),s._v(" 继承")]),t("pre",{staticClass:"hljs"},[t("code",[s._v("implements 和 extends\n使用impments 父类方法无法被覆盖\n使用extends  父类方法可以被覆盖\n")])]),t("h4",{attrs:{id:"final"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#final"}}),s._v(" final")]),t("pre",{staticClass:"hljs"},[t("code",[s._v('1. final 修饰符 只能一次赋值\n2. final String name; 报错 final不允许默认值 必须赋值;\n3. interface name {\n    String name = "lt" ===> static final String name = "lt";\n    \n}\n')])]),t("h4",{attrs:{id:"equals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#equals"}}),s._v(" equals")]),t("pre",{staticClass:"hljs"},[t("code",[s._v("1. equals 判断引用对象是否相同\nDog dog1 = new Dog(); \nDog dog2 = new Dog();\ndog1.equals(dog2) ===>  false ===> ===\n")])]),t("h2",{attrs:{id:"%E5%A4%9A%E6%80%81"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E5%A4%9A%E6%80%81"}}),s._v(" 多态")]),t("h4",{attrs:{id:"%E5%BC%95%E7%94%A8%E7%9A%84%E5%A4%9A%E6%80%81-%E6%96%B9%E6%B3%95%E7%9A%84%E5%A4%9A%E6%80%81"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E5%BC%95%E7%94%A8%E7%9A%84%E5%A4%9A%E6%80%81-%E6%96%B9%E6%B3%95%E7%9A%84%E5%A4%9A%E6%80%81"}}),s._v(" 引用的多态  方法的多态")]),t("pre",{staticClass:"hljs"},[t("code",[s._v("public class Cat extends Animal {\n    public void fn {\n        System.out.println();\n    }\n}\nAniaml obg1 = new Animal();\nAniaml obg2 = new Dog(); (Dog extents Animal)\nAniaml obg3 = new Cat();\nobg3.fn() // 报错\n1. 父类的引用可以指向本类\n2. 父类的引用可以指向子类\n")])]),t("h3",{attrs:{id:"%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2"}}),s._v(" 引用类型转换")]),t("pre",{staticClass:"hljs"},[t("code",[s._v("1. 向上类型转换       隐式转换   小类型到大类型\n2. 向下类型转换       强制转换   大类型到小类型\n3. instanceof\nAnimal 父类 Dog Cat 子类\nDog dog = new Dog();\nAnimal animal = dod; // 将 dog 向 Animal 小向大转换 隐式转换无风险\nif (animal instanceof Dog)\nDog dog2 = (Dog)animal; // 虽然animal指向Dog 但它仍然是父类（大类型） 大向小转换 需要强制抓换 \nif (animal instanceof Cat)\nCat cat = (Cat)animal; // 报错 Cat 和 Dog 无继承关系 (Cat 和 Animal 是继承关系 但 Animal 是指向 Dog的)\n\n")])]),t("h3",{attrs:{id:"%E6%8A%BD%E8%B1%A1%E7%B1%BB"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E6%8A%BD%E8%B1%A1%E7%B1%BB"}}),s._v(" 抽象类")]),t("pre",{staticClass:"hljs"},[t("code",[s._v("1. 语法定义 \n类前或方法前使用 abstract 则为抽象类或抽象方法\n\n2. 应用场景\na: 在某些情况下父类只知道子类应该包含某些方法，确无法知道这些之类具体是怎样实现的\nb: 从多个具有相同特征的类中抽象出一个抽象类，让这个抽象类作为子模板，宠而避免子模板的设计随意性\n\n3. 作用\n限制子类必须实现某种方法，但不关注实现细节\n\n4. 使用规则\na. abstract定义抽象类\nb. abstract定义抽象方法，只有声明，不需要实现\nc. 包含抽象方法的类是抽象类\nd. 抽象类可以包含抽象方法也可以包含普通方法\ne. 抽象类不能直接创建，可以定义引用变量\n")])]),t("h3",{attrs:{id:"%E6%8E%A5%E5%8F%A3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E6%8E%A5%E5%8F%A3"}}),s._v(" 接口")]),t("pre",{staticClass:"hljs"},[t("code",[s._v("interface\n")])]),t("h3",{attrs:{id:"uml%E5%9B%BE"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uml%E5%9B%BE"}}),s._v(" UML图")])])}],v=t("2877"),_={},e=Object(v["a"])(_,n,l,!1,null,null,null);a["default"]=e.exports}}]);
//# sourceMappingURL=chunk-2d0dacb3.91c80b76.js.map