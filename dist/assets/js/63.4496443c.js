(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{428:function(t,e,v){"use strict";v.r(e);var _=v(25),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTMLElement"),v("OutboundLink")],1),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("继承并扩展了 "),v("code",[t._v("Element")]),t._v(" 接口，表示所有的 "),v("code",[t._v("HTML")]),t._v(" 元素")]),t._v(" "),v("li",[t._v("所有 "),v("code",[t._v("HTML")]),t._v(" 元素都直接或简介实现了 "),v("code",[t._v("HTMLElement")]),t._v(" 接口")])]),t._v(" "),v("h2",{attrs:{id:"属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),v("h3",{attrs:{id:"尺寸"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#尺寸"}},[t._v("#")]),t._v(" 尺寸")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("offsetWidth")])]),t._v(" "),v("td",[v("code",[t._v("readonly NUmber")])]),t._v(" "),v("td",[t._v("元素的布局宽度")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("offsetHeight")])]),t._v(" "),v("td",[v("code",[t._v("readonly NUmber")])]),t._v(" "),v("td",[t._v("元素的布局高度")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("offsetLeft")])]),t._v(" "),v("td",[v("code",[t._v("readonly NUmber")])]),t._v(" "),v("td",[t._v("元素的左上角距离其父元素的左上角的水平偏移")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("offsetTop")])]),t._v(" "),v("td",[v("code",[t._v("readonly NUmber")])]),t._v(" "),v("td",[t._v("元素的左上角距离其父元素的左上角的垂直偏移")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("offsetParent")])]),t._v(" "),v("td",[v("code",[t._v("readonly Element")])]),t._v(" "),v("td",[t._v("元素定位时相对的父元素")])])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("offsetWidth")]),t._v("/"),v("code",[t._v("offsetHeight")]),t._v(" 在各浏览器的表现可能不一致")]),t._v(" "),v("li",[v("code",[t._v("offsetWidth")]),t._v("/"),v("code",[t._v("offsetHeight")]),t._v(" 表示元素的布局宽/高，包括元素的内边距("),v("code",[t._v("padding")]),t._v(")、边框("),v("code",[t._v("border")]),t._v(")、滚动条")]),t._v(" "),v("li",[t._v("利用 "),v("code",[t._v("offsetLeft")]),t._v("/"),v("code",[t._v("offsetTop")]),t._v("/"),v("code",[t._v("offsetParent")]),t._v(" 创建一个递归方法，获取元素相对于文档左上角的偏移：")])]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOffsetRoot")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("element")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" left "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft\n  "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" top "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop\n  "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" parent "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetParent\n\n  "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parent"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("c_left"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c_top"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOffsetRoot")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parent"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    left "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" c_left\n    top "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" c_top\n  "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" top"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),v("h3",{attrs:{id:"其他"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("accessKeyLabel")])]),t._v(" "),v("td",[v("code",[t._v("readonly String")])]),t._v(" "),v("td",[t._v("元素访问的快捷键的字符串")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("dataset")])]),t._v(" "),v("td",[v("code",[t._v("readonly \tDOMStringMap")])]),t._v(" "),v("td",[t._v("元素的自定义属性")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("isContentEditable")])]),t._v(" "),v("td",[v("code",[t._v("readonly Boolean")])]),t._v(" "),v("td",[t._v("指示元素的内容是否可编辑")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("accessKey")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v("获取/设置访问元素的快捷键")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("contentEditable")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v("获取/设置元素的可编辑状态")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("contextMenu")])]),t._v(" "),v("td",[v("code",[t._v("HTMLMenuElement")])]),t._v(" "),v("td",[t._v("获取/设置元素的右键菜单")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("dir")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v("获取/设置元素的方向(取值 "),v("code",[t._v("auto")]),t._v("/"),v("code",[t._v("ltr")]),t._v("/"),v("code",[t._v("rtl")]),t._v(")")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("draggable")])]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td",[t._v("获取/设置元素是否可拖拽")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("hidden")])]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td",[t._v("获取/设置元素是否隐藏")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("lang")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v("获取/设置元素属性、文本、内容的语言")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("style")])]),t._v(" "),v("td",[v("code",[t._v("CSSStyleDeclaration")])]),t._v(" "),v("td",[t._v("获取/设置元素的 "),v("code",[t._v("style")]),t._v(" 属性")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("tabIndex")])]),t._v(" "),v("td",[v("code",[t._v("Number")])]),t._v(" "),v("td",[t._v("获取/设置元素的 "),v("code",[t._v("tab")]),t._v(" 键控制次序")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("title")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[t._v("获取/设置元素的 "),v("code",[t._v("title")]),t._v(" 属性")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("itemScope")])]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("itemId")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("dropzone")])]),t._v(" "),v("td",[v("code",[t._v("DOMSettableTokenList")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("itemType")])]),t._v(" "),v("td",[v("code",[t._v("DOMSettableTokenList")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("itemRef")])]),t._v(" "),v("td",[v("code",[t._v("DOMSettableTokenList")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("itemProp")])]),t._v(" "),v("td",[v("code",[t._v("DOMSettableTokenList")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("itemValue")])]),t._v(" "),v("td",[v("code",[t._v("Object")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("properties")])]),t._v(" "),v("td",[v("code",[t._v("HTMLPropertiesCollection")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("spellcheck")])]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td")])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("其他属性：")]),t._v(" "),v("ul",[v("li",[t._v("从 "),v("a",{attrs:{href:"/base/javascript/dom/element"}},[t._v("Element")]),t._v(" 对象继承了属性")]),t._v(" "),v("li",[t._v("从 "),v("code",[t._v("GlobalEventHandlers")]),t._v(" 接口扩展了属性")])])]),t._v(" "),v("h2",{attrs:{id:"方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),v("ul",[v("li",[t._v("从 "),v("a",{attrs:{href:"/base/javascript/dom/element"}},[t._v("Element")]),t._v(" 对象继承了方法")]),t._v(" "),v("li",[t._v("从 "),v("code",[t._v("GlobalEventHandlers")]),t._v(" 接口扩展了方法")])])])}),[],!1,null,null,null);e.default=a.exports}}]);