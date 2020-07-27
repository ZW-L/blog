(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{413:function(v,_,e){"use strict";e.r(_);var o=e(25),i=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[v._v("#")]),v._v(" 简介")]),v._v(" "),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window",target:"_blank",rel:"noopener noreferrer"}},[v._v("MDN window"),e("OutboundLink")],1),v._v(" 对象：")]),v._v(" "),e("ul",[e("li",[v._v("表示一个包含 "),e("code",[v._v("DOM")]),v._v(" 文档的窗口，"),e("code",[v._v("window.document")]),v._v(" 属性指向窗口中载入的 "),e("code",[v._v("DOM")]),v._v(" 文档，而 "),e("code",[v._v("document.defaultView")]),v._v(" 指向 "),e("code",[v._v("window")])]),v._v(" "),e("li",[v._v("每个标签页都拥有自己的 "),e("code",[v._v("window")]),v._v(" 对象；也就是说，同一个窗口的标签页之间不会共享一个 "),e("code",[v._v("window")]),v._v(" 对象")]),v._v(" "),e("li",[v._v("作为全局变量，并挂载了很多不同功能的全局对象，暴露给当前窗口的 "),e("code",[v._v("Javascript")]),v._v(" 脚本")])]),v._v(" "),e("h2",{attrs:{id:"属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[v._v("#")]),v._v(" 属性")]),v._v(" "),e("h3",{attrs:{id:"对象引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象引用"}},[v._v("#")]),v._v(" 对象引用")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("console")]),v._v(": 返回 "),e("code",[v._v("console")]),v._v(" 对象的引用")]),v._v(" "),e("li",[e("code",[v._v("document")]),v._v(": 返回 "),e("code",[v._v("document")]),v._v(" 对象的引用")]),v._v(" "),e("li",[e("code",[v._v("frames")]),v._v(": 返回 "),e("code",[v._v("frames")]),v._v(" 对象的引用")]),v._v(" "),e("li",[e("code",[v._v("history")]),v._v(": 返回 "),e("code",[v._v("history")]),v._v(" 对象的引用")]),v._v(" "),e("li",[e("code",[v._v("location")]),v._v(": 返回 "),e("code",[v._v("location")]),v._v(" 对象的引用")]),v._v(" "),e("li",[e("code",[v._v("navigator")]),v._v(": 返回 "),e("code",[v._v("navigator")]),v._v(" 对象的引用")]),v._v(" "),e("li",[e("code",[v._v("screen")]),v._v(": 返回 "),e("code",[v._v("screen")]),v._v(" 对象的引用")]),v._v(" "),e("li",[e("code",[v._v("localStorage")]),v._v(": 返回 "),e("code",[v._v("localStorage")]),v._v(" 对象的引用")]),v._v(" "),e("li",[e("code",[v._v("sessionStorage")]),v._v(": 返回 "),e("code",[v._v("sessionStorage")]),v._v(" 对象的引用")]),v._v(" "),e("li",[e("code",[v._v("caches")]),v._v(": 返回 "),e("code",[v._v("CacheStorage")]),v._v(" 对象的引用")]),v._v(" "),e("li",[e("code",[v._v("indexedDB")]),v._v(": 返回 "),e("code",[v._v("indexedDB")]),v._v(" 对象的引用")]),v._v(" "),e("li",[e("code",[v._v("speechSynthesis")]),v._v(": 返回 "),e("code",[v._v("speechSynthesis")]),v._v(" 对象的引用")]),v._v(" "),e("li",[e("code",[v._v("crypto")]),v._v(": 返回 "),e("code",[v._v("crypto")]),v._v(" 对象的引用")])]),v._v(" "),e("h3",{attrs:{id:"浏览器属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器属性"}},[v._v("#")]),v._v(" 浏览器属性")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("name")]),v._v(": 获取/设置窗口的名称")]),v._v(" "),e("li",[e("code",[v._v("window")]),v._v(": 指向这个 "),e("code",[v._v("window")]),v._v(" 对象本身")]),v._v(" "),e("li",[e("code",[v._v("self")]),v._v(": 一个指向当前 "),e("code",[v._v("window")]),v._v(" 对象的引用")]),v._v(" "),e("li",[e("code",[v._v("top")]),v._v(": 返回窗口层级最顶层窗口的引用")]),v._v(" "),e("li",[e("code",[v._v("parent")]),v._v(": 窗口的父窗口的引用")]),v._v(" "),e("li",[e("code",[v._v("opener")]),v._v(": 打开当前窗口的那个窗口的引用")]),v._v(" "),e("li",[e("code",[v._v("closed")]),v._v(": 指示当前窗口是否关闭")]),v._v(" "),e("li",[e("code",[v._v("length")]),v._v(": 返回窗口中的 "),e("code",[v._v("frames")]),v._v(" 数量")]),v._v(" "),e("li",[e("code",[v._v("fullScreen")]),v._v(": 指示窗口是否全屏显示")]),v._v(" "),e("li",[e("code",[v._v("menubar")]),v._v(": 返回菜单条对象")]),v._v(" "),e("li",[e("code",[v._v("locationbar")]),v._v(": 一个包含 "),e("code",[v._v("visible")]),v._v(" 属性的 "),e("code",[v._v("locationbar")]),v._v(" 对象")]),v._v(" "),e("li",[e("code",[v._v("scrollbars")]),v._v(": 一个包含 "),e("code",[v._v("visible")]),v._v(" 属性的 "),e("code",[v._v("scrollbars")]),v._v(" 对象")]),v._v(" "),e("li",[e("code",[v._v("personalbar")]),v._v(": 一个包含 "),e("code",[v._v("visible")]),v._v(" 属性的 "),e("code",[v._v("personalbar")]),v._v(" 对象")]),v._v(" "),e("li",[e("code",[v._v("toolbar")]),v._v(": 一个包含 "),e("code",[v._v("visible")]),v._v(" 属性的 "),e("code",[v._v("toolbar")]),v._v(" 对象")]),v._v(" "),e("li",[e("code",[v._v("statusbar")]),v._v(": 一个包含 "),e("code",[v._v("visible")]),v._v(" 属性的 "),e("code",[v._v("statusbar")]),v._v(" 对象")]),v._v(" "),e("li",[e("code",[v._v("status")]),v._v(": 返回/设置浏览器底部的状态栏文本")]),v._v(" "),e("li",[e("code",[v._v("visualViewport")]),v._v(": 返回一个 "),e("code",[v._v("VisualViewport")]),v._v(" 对象，记录给定窗口的视口属性")]),v._v(" "),e("li",[e("code",[v._v("isSecureContext")]),v._v(": 指示是否使用安全上下文环境")]),v._v(" "),e("li",[e("code",[v._v("event")]),v._v(": "),e("code",[v._v("IE")]),v._v(" 引入的属性，当前正在处理的事件对象")]),v._v(" "),e("li",[e("code",[v._v("frameElement")]),v._v(": 嵌入当前 "),e("code",[v._v("window")]),v._v(" 的元素")]),v._v(" "),e("li",[e("code",[v._v("devicePixelRatio")]),v._v(": 设备的物理像素分辨率与 "),e("code",[v._v("CSS")]),v._v(" 像素分辨率的比值")])]),v._v(" "),e("h3",{attrs:{id:"页面尺寸"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#页面尺寸"}},[v._v("#")]),v._v(" 页面尺寸")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("scrollMaxX")]),v._v(": 文档可水平滚动的最大像素值")]),v._v(" "),e("li",[e("code",[v._v("scrollMaxY")]),v._v(": 文档可垂直滚动的最大像素值")]),v._v(" "),e("li",[e("code",[v._v("scrollX/pageXOffset")]),v._v(": 文档/页面水平方向滚动的像素值")]),v._v(" "),e("li",[e("code",[v._v("scrollY/pageYOffset")]),v._v(": 文档/页面垂直方向滚动的像素值")]),v._v(" "),e("li",[e("code",[v._v("screenX/screenLeft")]),v._v(": 返回浏览器左边界到屏幕左边的水平距离")]),v._v(" "),e("li",[e("code",[v._v("screenY/screenTop")]),v._v(": 返回浏览器上边界到屏幕上边的垂直距离")]),v._v(" "),e("li",[e("code",[v._v("innerWidth")]),v._v(": 浏览器窗口的内容区域的宽度(包含滚动条)")]),v._v(" "),e("li",[e("code",[v._v("innerHeight")]),v._v(": 浏览器窗口的内容区域的高度(包含滚动条)")]),v._v(" "),e("li",[e("code",[v._v("outerWidth")]),v._v(": 整个浏览器窗口的宽度")]),v._v(" "),e("li",[e("code",[v._v("outerHeight")]),v._v(": 整个浏览器窗口的高度")])]),v._v(" "),e("h2",{attrs:{id:"方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[v._v("#")]),v._v(" 方法")]),v._v(" "),e("h3",{attrs:{id:"弹窗和窗体操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#弹窗和窗体操作"}},[v._v("#")]),v._v(" 弹窗和窗体操作")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("alert()")]),v._v(": 显示一个警告弹窗")]),v._v(" "),e("li",[e("code",[v._v("prompt()")]),v._v(": 显示一个提示弹窗")]),v._v(" "),e("li",[e("code",[v._v("confirm()")]),v._v(": 显示一个确认弹窗")]),v._v(" "),e("li",[e("code",[v._v("print()")]),v._v(": 显示一个打印弹窗")]),v._v(" "),e("li",[e("code",[v._v("open()")]),v._v(": 打开一个新窗口")]),v._v(" "),e("li",[e("code",[v._v("close()")]),v._v(": 关闭当前窗口")]),v._v(" "),e("li",[e("code",[v._v("focus()")]),v._v(": 使窗口聚焦")]),v._v(" "),e("li",[e("code",[v._v("blur()")]),v._v(": 将焦点移出顶层窗口")]),v._v(" "),e("li",[e("code",[v._v("moveTo(xAxis, yAxis)")]),v._v(": 将窗口移动到指定坐标")]),v._v(" "),e("li",[e("code",[v._v("moveBy(xOffset, yOffset)")]),v._v(": 将窗口移动指定的偏移量")]),v._v(" "),e("li",[e("code",[v._v("resizeBy(xDelta, yDelta)")]),v._v(": 将窗口缩放指定的量")]),v._v(" "),e("li",[e("code",[v._v("resizeTo(width, height)")]),v._v(": 将窗口缩放到指定尺寸")]),v._v(" "),e("li",[e("code",[v._v("scroll((x, y) | options)")]),v._v(": 滚动到文档中的某个坐标")]),v._v(" "),e("li",[e("code",[v._v("scrollTo((x, y) | options)")]),v._v(": 等同于 "),e("code",[v._v("scroll()")])]),v._v(" "),e("li",[e("code",[v._v("scrollBy((x, y) | options)")]),v._v(": 按指定的偏移量滚动文档")]),v._v(" "),e("li",[e("code",[v._v("scrollByLines(n: Number)")]),v._v(": 按给定的行数滚动文档")]),v._v(" "),e("li",[e("code",[v._v("scrollByPages(n: Number)")]),v._v(": 按照指定的页数翻页")]),v._v(" "),e("li",[e("code",[v._v("minimize()")]),v._v(": 窗口最小化")]),v._v(" "),e("li",[e("code",[v._v("maximize()")]),v._v(": 窗口最大化")]),v._v(" "),e("li",[e("code",[v._v("sizeToContent()")]),v._v(": 切换用户调整窗口大小的能力")]),v._v(" "),e("li",[e("code",[v._v("setResizable()")]),v._v(": 根据窗口内容调整窗口大小(可以强制调整窗口为最小尺寸)")])]),v._v(" "),e("h3",{attrs:{id:"样式相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#样式相关"}},[v._v("#")]),v._v(" 样式相关")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("getComputedStyle()")]),v._v(": 返回一个实时的 "),e("code",[v._v("CSSStyleDeclaration")]),v._v(" 对象，记录了页面的样式")]),v._v(" "),e("li",[e("code",[v._v("getDefaultComputedStyle()")]),v._v(": 返回一个实时的 "),e("code",[v._v("CSSStyleDeclaration")]),v._v(" 对象，记录了页面的默认样式")]),v._v(" "),e("li",[e("code",[v._v("requestAnimationFrame(callback: Function)")]),v._v(": 在浏览器下次重绘之前调用指定的回调函数更新动画")]),v._v(" "),e("li",[e("code",[v._v("cancelAnimationFrame()")]),v._v(": 取消 "),e("code",[v._v("requestAnimationFrame()")]),v._v(" 计划执行的回调")])]),v._v(" "),e("h3",{attrs:{id:"异步回调-任务调度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步回调-任务调度"}},[v._v("#")]),v._v(" 异步回调/任务调度")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("setImmediate()")]),v._v(": 添加一个在空闲时执行的回调")]),v._v(" "),e("li",[e("code",[v._v("setTimeout()")]),v._v(": 在指定时间后执行回调")]),v._v(" "),e("li",[e("code",[v._v("setInterval()")]),v._v(": 每隔一段时间执行一次回调")]),v._v(" "),e("li",[e("code",[v._v("clearImmediate()")]),v._v(": 清除 "),e("code",[v._v("setImmediate()")])]),v._v(" "),e("li",[e("code",[v._v("clearTimeout(timerId: Number)")]),v._v(": 清除 "),e("code",[v._v("setTimeout()")])]),v._v(" "),e("li",[e("code",[v._v("clearInterval(timerId: Number)")]),v._v(": 清除 "),e("code",[v._v("setInterval()")])]),v._v(" "),e("li",[e("code",[v._v("requestIdleCallback()")]),v._v(": 允许在空闲时间调度任务")]),v._v(" "),e("li",[e("code",[v._v("cancelIdleCallback()")]),v._v(": 取消调度任务")])]),v._v(" "),e("h3",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[v._v("#")]),v._v(" 其他")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("addEventListener()")]),v._v(": 添加事件监听")]),v._v(" "),e("li",[e("code",[v._v("removeEventListener()")]),v._v(": 移除事件监听")]),v._v(" "),e("li",[e("code",[v._v("dispatchEvent()")]),v._v(": 触发一个事件")]),v._v(" "),e("li",[e("code",[v._v("dump()")]),v._v(": 将消息写入控制台")]),v._v(" "),e("li",[e("code",[v._v("getSelection()")]),v._v(": 返回一个 "),e("code",[v._v("Selection")]),v._v(" 对象，记录用户选择的文本范围或光标的当前位置")]),v._v(" "),e("li",[e("code",[v._v("matchMedia()")]),v._v(": 返回一个 "),e("code",[v._v("MediaQueryList")]),v._v(" 对象，记录指定的媒体查询字符串解析后的结果")]),v._v(" "),e("li",[e("code",[v._v("fetch(): Promise")]),v._v(": 发起一个获取资源的请求")]),v._v(" "),e("li",[e("code",[v._v("postMessage()")]),v._v(": 发送消息到另一个窗口(不需要在同一个域中，可用于跨域)")]),v._v(" "),e("li",[e("code",[v._v("atob(str: String)")]),v._v(": 对 "),e("code",[v._v("base64")]),v._v(" 编码的字符串进行解码")]),v._v(" "),e("li",[e("code",[v._v("btoa(str: String)")]),v._v(": 对字符串进行 "),e("code",[v._v("base64")]),v._v(" 编码")]),v._v(" "),e("li",[e("code",[v._v("createImageBitmap(img): Promise")]),v._v(": 裁剪图片")]),v._v(" "),e("li",[e("code",[v._v("stop()")]),v._v(": 阻止页面的加载(相当于点击了取消加载按钮)")]),v._v(" "),e("li",[e("code",[v._v("find()")]),v._v(": 在页面中搜索指定内容")]),v._v(" "),e("li",[e("code",[v._v("setCursor()")]),v._v(": 在当前窗口中改变鼠的样式")])]),v._v(" "),e("h2",{attrs:{id:"事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[v._v("#")]),v._v(" 事件")]),v._v(" "),e("h3",{attrs:{id:"浏览器相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器相关"}},[v._v("#")]),v._v(" 浏览器相关")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("error")]),v._v(": 当资源加载失败或无法使用时(如脚本错误、图像错误等)")]),v._v(" "),e("li",[e("code",[v._v("languagechange")]),v._v(": 当用户的首选语言改变时")]),v._v(" "),e("li",[e("code",[v._v("orientationchange")]),v._v(": 当设备的方向改变时")]),v._v(" "),e("li",[e("code",[v._v("devicemotion")]),v._v(": 记录设备的物理加速度和转速(定时触发)")]),v._v(" "),e("li",[e("code",[v._v("deviceorientation")]),v._v(": 当设备的朝向(根据方向传感器)改变时")]),v._v(" "),e("li",[e("code",[v._v("resize")]),v._v(": 调整窗口大小时")]),v._v(" "),e("li",[e("code",[v._v("storage")]),v._v(": 当 "),e("code",[v._v("Storage")]),v._v(" 发生修改时")]),v._v(" "),e("li",[e("code",[v._v("online")]),v._v(": 当浏览器可以访问网络(同时会将 "),e("code",[v._v("navigator.onLine")]),v._v(" 设置为 "),e("code",[v._v("true")]),v._v(")")]),v._v(" "),e("li",[e("code",[v._v("offline")]),v._v(": 当浏览器无法访问网络(同时会将 "),e("code",[v._v("navigator.onLine")]),v._v(" 设置为 "),e("code",[v._v("false")]),v._v(")")]),v._v(" "),e("li",[e("code",[v._v("message")]),v._v(": 当 "),e("code",[v._v("window")]),v._v(" 收到一个信息时(如 "),e("code",[v._v("window.postMessage()")]),v._v(")")]),v._v(" "),e("li",[e("code",[v._v("messageerror")]),v._v(": 当 "),e("code",[v._v("window")]),v._v(" 收到一个信息但无法反序列化时")])]),v._v(" "),e("h3",{attrs:{id:"过渡-动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#过渡-动画"}},[v._v("#")]),v._v(" 过渡/动画")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("transitionstart")]),v._v(": 过渡开始时")]),v._v(" "),e("li",[e("code",[v._v("transitionend")]),v._v(": 过渡结束时(将过渡属性删除或隐藏元素不会触发)")]),v._v(" "),e("li",[e("code",[v._v("transitionrun")]),v._v(": 首次创建过渡时(过渡开始之前)")]),v._v(" "),e("li",[e("code",[v._v("transitioncancel")]),v._v(": 过渡取消时")]),v._v(" "),e("li",[e("code",[v._v("animationstart")]),v._v(": 动画开始时")]),v._v(" "),e("li",[e("code",[v._v("animationend")]),v._v(": 动画完成前(删除元素或取消动画不会触发)")]),v._v(" "),e("li",[e("code",[v._v("animationoniteration")]),v._v(": 动画的一个迭代结束并且开始另一个迭代时")]),v._v(" "),e("li",[e("code",[v._v("animationcancel")]),v._v(": 动画取消时(如更改动画名称、隐藏动画节点)")])]),v._v(" "),e("h3",{attrs:{id:"剪切板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#剪切板"}},[v._v("#")]),v._v(" 剪切板")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("copy")]),v._v(": 当用户使用复制功能时")]),v._v(" "),e("li",[e("code",[v._v("cut")]),v._v(": 当用户使用剪切功能时")]),v._v(" "),e("li",[e("code",[v._v("paste")]),v._v(": 当用户使用粘贴功能时")]),v._v(" "),e("li",[e("code",[v._v("clipboardchange")]),v._v(": 系统剪贴板内容更改时")])]),v._v(" "),e("h3",{attrs:{id:"焦点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#焦点"}},[v._v("#")]),v._v(" 焦点")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("focus")]),v._v(": 当元素获得焦点时")]),v._v(" "),e("li",[e("code",[v._v("blur")]),v._v(": 当元素失去焦点时")])]),v._v(" "),e("h3",{attrs:{id:"历史记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#历史记录"}},[v._v("#")]),v._v(" 历史记录")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("hashchange")]),v._v(": 当 "),e("code",[v._v("URL")]),v._v(" 的片段标识符更改时(即 "),e("code",[v._v("URL")]),v._v(" 中 "),e("code",[v._v("#")]),v._v(" 和它后面的部分)")]),v._v(" "),e("li",[e("code",[v._v("pageshow")]),v._v(": 当浏览器页面可见时(首次加载、切换到历史记录的页面)")]),v._v(" "),e("li",[e("code",[v._v("pagehide")]),v._v(": 当浏览器页面不可见时(包括前进、后退、从历史记录访问)")]),v._v(" "),e("li",[e("code",[v._v("popstate")]),v._v(": 当活动的历史记录条目更改时")])]),v._v(" "),e("h3",{attrs:{id:"页面加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#页面加载"}},[v._v("#")]),v._v(" 页面加载")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("load")]),v._v(": 当页面加载完成时(包括所有样式表、图像等等加载完成)")]),v._v(" "),e("li",[e("code",[v._v("unload")]),v._v(": 在卸载文档或子资源时")]),v._v(" "),e("li",[e("code",[v._v("beforeunload")]),v._v(": 在 "),e("code",[v._v("unload")]),v._v(" 前")]),v._v(" "),e("li",[e("code",[v._v("DOMContentLoaded")]),v._v(": 当页面加载完成时(不会等待样式表、图像等加载完成)")])]),v._v(" "),e("h3",{attrs:{id:"manifest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manifest"}},[v._v("#")]),v._v(" Manifest")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("appinstalled")]),v._v(": 当页面成功安装为应用程序时")]),v._v(" "),e("li",[e("code",[v._v("beforeinstallprompt")]),v._v(": 当提示用户即将要安装 "),e("code",[v._v("web")]),v._v(" 应用程序时")])]),v._v(" "),e("h3",{attrs:{id:"promise"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[v._v("#")]),v._v(" Promise")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("rejectionhandled")]),v._v(": 当 "),e("code",[v._v("Promise")]),v._v(" 状态变为 "),e("code",[v._v("rejected")]),v._v(" 时(无论是否有处理程序捕获)")]),v._v(" "),e("li",[e("code",[v._v("unhandledrejection")]),v._v(": 当 "),e("code",[v._v("Promise")]),v._v(" 状态变为 "),e("code",[v._v("rejected")]),v._v(" 但没有适当的处理程序捕获时")])]),v._v(" "),e("h3",{attrs:{id:"打印"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打印"}},[v._v("#")]),v._v(" 打印")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("afterprint")])]),v._v(" "),e("li",[e("code",[v._v("beforeprint")])])]),v._v(" "),e("h3",{attrs:{id:"游戏手柄"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#游戏手柄"}},[v._v("#")]),v._v(" 游戏手柄")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("gamepadconnected")])]),v._v(" "),e("li",[e("code",[v._v("gamepaddisconnected")])])]),v._v(" "),e("h3",{attrs:{id:"webvr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webvr"}},[v._v("#")]),v._v(" WebVR")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("vrdisplayactivate")])]),v._v(" "),e("li",[e("code",[v._v("vrdisplaydeactivate")])]),v._v(" "),e("li",[e("code",[v._v("vrdisplayconnect")])]),v._v(" "),e("li",[e("code",[v._v("vrdisplaydisconnect")])]),v._v(" "),e("li",[e("code",[v._v("vrdisplayblur")])]),v._v(" "),e("li",[e("code",[v._v("vrdisplayfocus")])]),v._v(" "),e("li",[e("code",[v._v("vrdisplaypresentchange")])]),v._v(" "),e("li",[e("code",[v._v("vrdisplaypointerrestricted")])]),v._v(" "),e("li",[e("code",[v._v("vrdisplaypointerunrestricted")])])])])}),[],!1,null,null,null);_.default=i.exports}}]);