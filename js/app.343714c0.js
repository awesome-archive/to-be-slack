(function(e){function n(n){for(var r,o,c=n[0],i=n[1],l=n[2],s=0,f=[];s<c.length;s++)o=c[s],a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(f.length)f.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==a[c]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"1525b8dc":"0e9b3796","2d0e8be2":"8b0df9a4","4b47640d":"881aa30b"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"1525b8dc":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"1525b8dc":"c65a3735","2d0e8be2":"31d6cfe0","4b47640d":"31d6cfe0"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return n()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===a)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),t(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise(function(n,t){r=a[e]=[n,t]});n.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var f=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,t[1](f)}a[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var d=s;u.push([0,"vendor"]),t()})({0:function(e,n,t){e.exports=t("2f39")},"2f39":function(e,n,t){"use strict";t.r(n);var r=t("967e"),o=t.n(r),a=(t("96cf"),t("fa84")),u=t.n(a),c=(t("5c7d"),t("7d6e"),t("e54f"),t("62f2"),t("7e6d"),t("2b0e")),i=t("b05d"),l=t("4d5a"),s=t("9898"),f=t("f2cc"),d=t("c7a0"),p=t("2ea3"),b=t("65c6"),h=t("6ac5"),v=t("9c40"),g=t("0016"),m=t("497d"),w=t("6ab5"),y=t("033f"),x=t("e208"),k=t("9564"),Q=t("156b"),P=t("5096"),S=t("714f"),j=t("2a19"),E=t("1b3f");c["a"].use(i["a"],{config:{loadingBar:{color:"amber"}},components:{QLayout:l["a"],QHeader:s["a"],QDrawer:f["a"],QPageContainer:d["a"],QPage:p["a"],QToolbar:b["a"],QToolbarTitle:h["a"],QBtn:v["a"],QIcon:g["a"],QList:m["a"],QItem:w["a"],QItemSection:y["a"],QItemLabel:x["a"],QToggle:k["a"],QBtnDropdown:Q["a"],QPageScroller:P["a"]},directives:{Ripple:S["a"]},plugins:{Notify:j["a"],LoadingBar:E["a"]}});var O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},L=[],C={name:"App"},T=C,_=t("2877"),A=Object(_["a"])(T,O,L,!1,null,null,null),N=A.exports,B=t("8c4f"),M=[{path:"/",component:function(){return t.e("1525b8dc").then(t.bind(null,"f241"))},children:[{path:"",component:function(){return t.e("2d0e8be2").then(t.bind(null,"8b24"))}}]}];M.push({path:"*",component:function(){return t.e("4b47640d").then(t.bind(null,"e51e"))}});var D=M;c["a"].use(B["a"]);var I=function(){var e=new B["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:D,mode:"hash",base:""});return e.beforeEach(function(e,n,t){"/"===e.fullPath?t("/?id=1"):t()}),e},q=function(){var e="function"===typeof I?I({Vue:c["a"]}):I,n={el:"#q-app",router:e,render:function(e){return e(N)}};return{app:n,router:e}},V=t("9483");Object(V["a"])("service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var H=t("758b"),J=t("fe3c"),R=t.n(J),U=q(),$=U.app,F=U.router;function K(){return z.apply(this,arguments)}function z(){return z=u()(o.a.mark(function e(){var n,t;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=[H["b"]],t=0;case 2:if(!(t<n.length)){e.next=20;break}if("function"===typeof n[t]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,n[t]({app:$,router:F,Vue:c["a"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:t++,e.next=2;break;case 20:new c["a"]($);case 21:case"end":return e.stop()}},e,null,[[5,10]])})),z.apply(this,arguments)}/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){R.a.attach(document.body)},!1),K()},"758b":function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t("bc3a"),o=t.n(r),a=o.a.create({baseURL:"https://www.printf520.com:8080"});n["b"]=function(e){var n=e.Vue;n.prototype.$axios=a}},"7e6d":function(e,n,t){}});