(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{312:function(t,n,e){},329:function(t,n,e){"use strict";var a=e(312);e.n(a).a},333:function(t,n,e){},341:function(t,n,e){"use strict";e(165);var a={data:function(){return{activeCate:[]}},computed:{nav:function(){return this.$themeConfig.nav},colors:function(){for(var t=[],n=0;n<360;n++)t.push("hsl(".concat(n,", 100%, 64%)"));return t}},mounted:function(){},methods:{onClickMain:function(t){this.activeCate=t?[].concat(t):[]},randomNum:function(){return Math.floor(360*Math.random())}}},i=(e(329),e(25)),o=Object(i.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"categories"},[e("section",{staticClass:"categories-main"},t._l(t.nav,(function(n,a){return e("div",{key:a,staticClass:"categories-main_item",style:{"background-color":t.colors[t.randomNum()]},on:{click:function(e){return t.onClickMain(n.items)}}},[t._v(t._s(n.text)+"\n    ")])})),0),t._v(" "),e("section",{staticClass:"categories-sub"},t._l(t.activeCate,(function(n,a){return e("div",{key:a,staticClass:"categories-sub_item"},[t._v("\n      "+t._s(n.text)+"\n    ")])})),0),t._v(" "),e("section",{staticClass:"categories-content"})])}),[],!1,null,"68025cef",null);n.a=o.exports},350:function(t,n,e){"use strict";var a=e(333);e.n(a).a},377:function(t,n,e){"use strict";e.r(n);var a=e(319),i=e(318),o=e(320),s=e(341),c={components:{Navbar:a.a,Sidebar:i.a,Footer:o.a,Categories:s.a},mounted:function(){console.log("categories mounted...")},destroyed:function(){console.log("categories destroyed...")}},r=(e(350),e(317),e(25)),u=Object(r.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{ref:"container",staticClass:"container"},[n("Navbar"),this._v(" "),n("div",{staticClass:"main"},[n("Sidebar"),this._v(" "),n("Categories",{staticClass:"main_content"})],1),this._v(" "),n("Footer")],1)}),[],!1,null,null,null);n.default=u.exports}}]);