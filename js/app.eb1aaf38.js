(function(t){function e(e){for(var i,a,r=e[0],l=e[1],c=e[2],u=0,h=[];u<r.length;u++)a=r[u],o[a]&&h.push(o[a][0]),o[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);f&&f(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={app:0},s=[];function a(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8b907bfe"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,i){n=o[t]=[e,i]});e.push(n[2]=i);var s,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=a(t),s=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+i+": "+s+")");a.type=i,a.request=s,n[1](a)}o[t]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,l.appendChild(c)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var f=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),o=n.n(i);o.a},"04e1":function(t,e,n){"use strict";var i=n("68fd"),o=n.n(i);o.a},1:function(t,e){},2:function(t,e){},"2d3f":function(t,e,n){},"2f07":function(t,e,n){"use strict";var i=n("d140"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},s=[],a={name:"App"};document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("html"),e=window.innerWidth/10;e=e>50?50:e,t.style.fontSize=e+"px"});var r=a,l=(n("034f"),n("2877")),c=Object(l["a"])(r,o,s,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,f=(n("2d3f"),n("8c4f")),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),i("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},d=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(t._s(t.msg))])},v=[],m={name:"HelloWorld",props:{msg:String}},g=m,w=(n("2f07"),Object(l["a"])(g,p,v,!1,null,"7be4e7c8",null));w.options.__file="HelloWorld.vue";var b=w.exports,S={name:"home",components:{HelloWorld:b}},C=S,T=Object(l["a"])(C,h,d,!1,null,null,null);T.options.__file="Home.vue";T.exports;var y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ebook"},[n("title-bar",{attrs:{ifTitleAndMenuShow:t.ifTitleAndMenuShow}}),n("div",{staticClass:"read-wrapper"},[n("div",{attrs:{id:"read"}}),n("div",{staticClass:"mask"},[n("div",{staticClass:"left",on:{click:t.prevPage}}),n("div",{staticClass:"center",on:{click:t.toggleTitleAndMeun}}),n("div",{staticClass:"right",on:{click:t.nextPage}})])]),n("menu-bar",{ref:"menuBar",attrs:{ifTitleAndMenuShow:t.ifTitleAndMenuShow,fontSizeList:t.fontSizeList,defaultFontSize:t.defaultFontSize,themesList:t.themesList,defaultTheme:t.defaultTheme,bookAvailable:t.bookAvailable,navigation:t.navigation},on:{setTheme:t.setTheme,setFontSize:t.setFontSize,onPregressChange:t.onPregressChange,jumpTo:t.jumpTo,hideTitleAndMenu:t.hideTitleAndMenu}})],1)},k=[],_=(n("ac6a"),n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-down"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.ifTitleAndMenuShow,expression:"ifTitleAndMenuShow"}],staticClass:"title-wrap"},[n("div",{staticClass:"left"},[n("span",{staticClass:"iconfont icon-fanhui"})]),n("div",{staticClass:"right"},[n("div",{staticClass:"icon-wrap"},[n("span",{staticClass:"iconfont icon-gouwuche"})]),n("div",{staticClass:"icon-wrap"},[n("span",{staticClass:"iconfont icon-touxiang"})]),n("div",{staticClass:"icon-wrap"},[n("span",{staticClass:"iconfont icon-gengduo"})])])])])}),A=[],z={name:"TitleBar",props:{ifTitleAndMenuShow:{type:Boolean,default:!1}}},x=z,j=(n("04e1"),Object(l["a"])(x,_,A,!1,null,"2ce22a82",null));j.options.__file="TitleBar.vue";var M=j.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-bar"},[n("transition",{attrs:{name:"slide-up"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.ifTitleAndMenuShow,expression:"ifTitleAndMenuShow"}],staticClass:"menu-wrap",class:{"hode-boxshadow":t.isShowSetting||!t.ifTitleAndMenuShow}},[n("div",{staticClass:"icon-wrap"},[n("span",{staticClass:"iconfont icon-mulu",on:{click:t.showContent}})]),n("div",{staticClass:"icon-wrap"},[n("span",{staticClass:"iconfont icon-jindu",class:{active:2==t.showTag&&t.isShowSetting},on:{click:function(e){t.showSetting(2)}}})]),n("div",{staticClass:"icon-wrap"},[n("span",{staticClass:"iconfont icon-liangdu",class:{active:1==t.showTag&&t.isShowSetting},on:{click:function(e){t.showSetting(1)}}})]),n("div",{staticClass:"icon-wrap"},[n("span",{staticClass:"iconfont icon-A",class:{active:0==t.showTag&&t.isShowSetting},on:{click:function(e){t.showSetting(0)}}})])])]),n("transition",{attrs:{name:"slide-up"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowSetting,expression:"isShowSetting"}],staticClass:"setting-wrap"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.showTag,expression:"showTag == 0"}],staticClass:"setting-font-size"},[n("div",{staticClass:"preview",style:{"font-size":t.fontSizeList[0].fontSize+"px"}},[t._v("A")]),n("div",{staticClass:"select"},t._l(t.fontSizeList,function(e,i){return n("div",{key:i,staticClass:"select-wrapper",on:{click:function(n){t.setFontSize(e.fontSize)}}},[n("div",{staticClass:"line"}),n("div",{staticClass:"point-wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.defaultFontSize===e.fontSize,expression:"defaultFontSize === item.fontSize"}],staticClass:"point"},[n("div",{staticClass:"smail-point"})])]),n("div",{staticClass:"line"})])})),n("div",{staticClass:"preview",style:{"font-size":t.fontSizeList[t.fontSizeList.length-1].fontSize+"px"}},[t._v("A")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:1==t.showTag,expression:"showTag == 1"}],staticClass:"setting-theme"},t._l(t.themesList,function(e,i){return n("div",{key:i,staticClass:"theme-wrappre",on:{click:function(e){t.setTheme(i)}}},[n("div",{staticClass:"preview",class:{"no-border":"#fff"!=e.style.body.background},style:{background:e.style.body.background}}),n("span",{staticClass:"text",class:{selected:i===t.defaultTheme}},[t._v(t._s(e.name))])])})),n("div",{directives:[{name:"show",rawName:"v-show",value:2==t.showTag,expression:"showTag == 2"}],staticClass:"setting-progress"},[n("div",{staticClass:"progress-wrapper"},[n("input",{ref:"progress",staticClass:"progress",attrs:{type:"range",max:"100",min:"0",step:"1",disabled:!t.bookAvailable},domProps:{value:t.progress},on:{change:function(e){t.onPregressChange(e.target.value)},input:function(e){t.onProgressInput(e.target.value)}}})]),n("div",{staticClass:"text-wrapper"},[n("span",[t._v(t._s(t.bookAvailable?t.progress+"%":"加载中..."))])])])])]),n("content-view",{directives:[{name:"show",rawName:"v-show",value:t.ifShowContent,expression:"ifShowContent"}],attrs:{bookAvailable:t.bookAvailable,navigation:t.navigation},on:{jumpTo:t.jumpTo}}),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.ifShowContent,expression:"ifShowContent"}],staticClass:"content-mask",on:{click:t.hideContent}})])],1)},O=[],L=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-right"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"content-title"},[t._v("目 录")]),t.bookAvailable?n("div",{staticClass:"content-wrapper"},t._l(t.navigation.toc,function(e,i){return n("div",{key:i,staticClass:"content-item",on:{click:function(n){t.jumpTo(e.href)}}},[n("span",{staticClass:"text"},[t._v(t._s(e.label))])])})):n("div",{staticClass:"empty"},[t._v("加载中...")])])])}),$=[],F={props:{bookAvailable:Boolean,navigation:Object},methods:{jumpTo:function(t){this.$emit("jumpTo",t)}}},E=F,B=(n("b36a"),Object(l["a"])(E,L,$,!1,null,"488d220c",null));B.options.__file="ContentView.vue";var N=B.exports,W={name:"MenuBar",components:{ContentView:N},props:{ifTitleAndMenuShow:{type:Boolean,default:!1},fontSizeList:Array,defaultFontSize:Number,themesList:Array,defaultTheme:Number,bookAvailable:Boolean,navigation:Object},data:function(){return{isShowSetting:!1,showTag:0,progress:0,ifShowContent:!1}},methods:{jumpTo:function(t){this.$emit("jumpTo",t),this.ifShowContent=!1},showContent:function(){this.ifShowContent=!0,this.$emit("hideTitleAndMenu")},hideContent:function(){this.ifShowContent=!1},onPregressChange:function(t){this.$emit("onPregressChange",t)},onProgressInput:function(t){this.progress=t,this.$refs.progress.style.backgroundSize="".concat(this.progress,"% 100%")},setTheme:function(t){this.$emit("setTheme",t)},setFontSize:function(t){this.$emit("setFontSize",t)},showSetting:function(t){this.isShowSetting=!0,this.showTag=t},hideSetting:function(){this.isShowSetting=!1}}},H=W,V=(n("a564"),Object(l["a"])(H,P,O,!1,null,"0b2a79cb",null));V.options.__file="MenuBar.vue";var q=V.exports,I=n("a211"),J="/1365.epub",D={components:{TitleBar:M,MenuBar:q},data:function(){return{ifTitleAndMenuShow:!1,fontSizeList:[{fontSize:12},{fontSize:14},{fontSize:16},{fontSize:18},{fontSize:20},{fontSize:22},{fontSize:24}],defaultFontSize:16,themesList:[{name:"default",style:{body:{color:"#000",background:"#fff"}}},{name:"eye",style:{body:{color:"#000",background:"#ceeaba"}}},{name:"night",style:{body:{color:"#fff",background:"#000"}}},{name:"gold",style:{body:{color:"#000",background:"rgb(241,236,226)"}}}],defaultTheme:0,bookAvailable:!1,navigation:{}}},methods:{jumpTo:function(t){this.rendition.display(t),this.hideTitleAndMenu()},hideTitleAndMenu:function(){this.ifTitleAndMenuShow=!1,this.$refs.menuBar.hideSetting()},onPregressChange:function(t){var e=t/100,n=e>0?this.locations.cfiFromPercentage(e):0;this.rendition.display(n)},setTheme:function(t){this.themes.select(this.themesList[t].name),this.defaultTheme=t},registerTheme:function(){var t=this;this.themesList.forEach(function(e){t.themes.register(e.name,e.style)})},setFontSize:function(t){this.themes&&(this.themes.fontSize(t+"px"),this.defaultFontSize=t)},showEpub:function(){var t=this;this.book=new I["a"](J),this.rendition=this.book.renderTo("read",{width:window.innerWidth,height:window.innerHeight}),this.rendition.display(),this.themes=this.rendition.themes,this.setFontSize(this.defaultFontSize),this.registerTheme(),this.setTheme(this.defaultTheme),this.book.ready.then(function(){return t.navigation=t.book.navigation,t.book.locations.generate()}).then(function(e){t.locations=t.book.locations,t.bookAvailable=!0})},prevPage:function(){this.rendition&&this.rendition.prev()},nextPage:function(){this.rendition&&this.rendition.next()},toggleTitleAndMeun:function(){this.ifTitleAndMenuShow=!this.ifTitleAndMenuShow,this.ifTitleAndMenuShow||this.$refs.menuBar.hideSetting()}},mounted:function(){this.showEpub()}},Y=D,G=(n("57b0"),Object(l["a"])(Y,y,k,!1,null,null,null));G.options.__file="Ebook.vue";var K=G.exports;i["a"].use(f["a"]);var Q=new f["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"ebook"},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/ebook",component:K}]});i["a"].config.productionTip=!1,new i["a"]({router:Q,render:function(t){return t(u)}}).$mount("#app")},"57b0":function(t,e,n){"use strict";var i=n("9100"),o=n.n(i);o.a},"64a9":function(t,e,n){},"68fd":function(t,e,n){},9100:function(t,e,n){},a564:function(t,e,n){"use strict";var i=n("c0f2"),o=n.n(i);o.a},b36a:function(t,e,n){"use strict";var i=n("b4f9"),o=n.n(i);o.a},b4f9:function(t,e,n){},c0f2:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d140:function(t,e,n){}});
//# sourceMappingURL=app.eb1aaf38.js.map