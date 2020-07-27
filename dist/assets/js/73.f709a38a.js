(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{438:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[a("code",[t._v("ECMAScript")]),t._v(" 的语法大量借鉴了 "),a("code",[t._v("C")]),t._v(" 语言和类 C 语言("),a("code",[t._v("Java")]),t._v(" 和 "),a("code",[t._v("Perl")]),t._v(")。并具有以下特点：")]),t._v(" "),a("ul",[a("li",[t._v("区分大小写")]),t._v(" "),a("li",[t._v("标识符")]),t._v(" "),a("li",[t._v("关键字和保留字")]),t._v(" "),a("li",[t._v("注释")]),t._v(" "),a("li",[t._v("严格模式")]),t._v(" "),a("li",[t._v("语句")])]),t._v(" "),a("h2",{attrs:{id:"区分大小写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区分大小写"}},[t._v("#")]),t._v(" 区分大小写")]),t._v(" "),a("p",[t._v("  一切都区分大小写，彼此象征着不同的含义。")]),t._v(" "),a("h2",{attrs:{id:"标识符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标识符"}},[t._v("#")]),t._v(" 标识符")]),t._v(" "),a("p",[t._v("  标识符泛指变量名、函数名、属性名、函数参数名等。合格的标识符：")]),t._v(" "),a("ul",[a("li",[t._v("必须以字母、下划线(_)、美元符号($)开头")]),t._v(" "),a("li",[t._v("其他字符可以是字母、下划线、美元符号、数字等")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("ul",[a("li",[t._v("除了开头限定外，其他字符可以是任意扩展的 Unicode 字符，甚至是中文字符")]),t._v(" "),a("li",[t._v("驼峰命名(camel case, 如 "),a("code",[t._v("myCar")]),t._v(")或蛇形命名(snake case, 如 "),a("code",[t._v("my_car")]),t._v(")")])])]),t._v(" "),a("h2",{attrs:{id:"关键字和保留字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键字和保留字"}},[t._v("#")]),t._v(" 关键字和保留字")]),t._v(" "),a("p",[t._v("  关键字和保留字的区别：")]),t._v(" "),a("ul",[a("li",[t._v("关键字：具有特定用途")]),t._v(" "),a("li",[t._v("保留字：在语言中还没有特定的用途，但是作为未来关键字的候选词")])]),t._v(" "),a("h2",{attrs:{id:"注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[t._v("#")]),t._v(" 注释")]),t._v(" "),a("p",[t._v("  使用 "),a("code",[t._v("C")]),t._v(" 风格的单行注释和多行注释。")]),t._v(" "),a("p",[t._v("单行注释：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是单行注释")]),t._v("\n")])])]),a("p",[t._v("多行注释：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* \n  这是多行注释\n */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也可以这样写")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* \n * 这是多行注释\n * 这样有利于提高可读性，但不是必须的\n */")]),t._v("\n")])])]),a("h2",{attrs:{id:"严格模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#严格模式"}},[t._v("#")]),t._v(" 严格模式")]),t._v(" "),a("p",[t._v("  ES5 引入了严格模式，它是一种不同的解析与执行模型，针对 ES3 的一些不确定行为进行了处理(或抛出错误)。")]),t._v(" "),a("p",[t._v("在整个脚本启用：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 它是脚本的第一行")]),t._v("\n")])])]),a("p",[t._v("在指定函数内启用：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 它是函数体内的第一行")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("完整的严格模式的内容：")])]),t._v(" "),a("ul",[a("li",[t._v("变量必须先声明后使用")]),t._v(" "),a("li",[t._v("函数参数不能有同名属性，否则报错")]),t._v(" "),a("li",[t._v("不能使用 "),a("code",[t._v("with")])]),t._v(" "),a("li",[t._v("不能对只读属性赋值，否则报错")]),t._v(" "),a("li",[t._v("不能使用前缀 0 表示八进制数，否则报错")]),t._v(" "),a("li",[t._v("不能删除不可删除的属性，否则报错")]),t._v(" "),a("li",[t._v("不能删除变量 "),a("code",[t._v("delete prop")]),t._v("，会报错，只能删除属性 "),a("code",[t._v("delete global[prop]")])]),t._v(" "),a("li",[a("code",[t._v("eval")]),t._v(" 不会在它的外层作用域引入变量")]),t._v(" "),a("li",[a("code",[t._v("eval")]),t._v(" 和 "),a("code",[t._v("arguments")]),t._v(" 不能被重新赋值")]),t._v(" "),a("li",[a("code",[t._v("arguments")]),t._v(" 不会自动反映函数参数的变化")]),t._v(" "),a("li",[t._v("不能使用 "),a("code",[t._v("arguments.callee")])]),t._v(" "),a("li",[t._v("不能使用 "),a("code",[t._v("arguments.caller")])]),t._v(" "),a("li",[t._v("禁止 "),a("code",[t._v("this")]),t._v(" 指向全局对象")]),t._v(" "),a("li",[t._v("不能使用 "),a("code",[t._v("fn.caller")]),t._v(" 和 "),a("code",[t._v("fn.arguments")]),t._v(" 获取函数调用的堆栈")]),t._v(" "),a("li",[t._v("增加了保留字("),a("code",[t._v("protected")]),t._v(", "),a("code",[t._v("static")]),t._v(", "),a("code",[t._v("interface")]),t._v(")")])]),t._v(" "),a("h2",{attrs:{id:"语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语句"}},[t._v("#")]),t._v(" 语句")]),t._v(" "),a("ul",[a("li",[t._v("使用分号("),a("code",[t._v(";")]),t._v(")标识语句的结束")]),t._v(" "),a("li",[t._v("使用花括号("),a("code",[t._v("{}")]),t._v(")包裹代码块")])]),t._v(" "),a("p",[a("strong",[t._v("可以使用：")])]),t._v(" "),a("ul",[a("li",[t._v("可以省略语句结尾的分号，因为解析器会自动添加分号")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Zed'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 省略分号")]),t._v("\n")])])]),a("ul",[a("li",[t._v("可以省略只有一行代码的流程控制语句块的花括号")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以这样写")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以这样写")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("ul",[a("li",[t._v("建议不要省略分号(这个争议较多，尽量以团队为标准)，避免有些情况下省略分号时出现错误或提高代码的性能(解析器不用去推测加入分号的地方)。")]),t._v(" "),a("li",[t._v("不要省略花括号，尽管只有代码块内只有一行语句，这样有利于统一代码和提高可读性。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);