(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["33c6390b"],{"2f21":function(t,e,i){"use strict";var a=i("79e5");t.exports=function(t,e){return!!t&&a(function(){e?t.call(null,function(){},1):t.call(null)})}},"55dd":function(t,e,i){"use strict";var a=i("5ca1"),r=i("d8e8"),s=i("4bf8"),n=i("79e5"),o=[].sort,l=[1,2,3];a(a.P+a.F*(n(function(){l.sort(void 0)})||!n(function(){l.sort(null)})||!i("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(s(this)):o.call(s(this),r(t))}})},"9c5a":function(t,e,i){},d3de:function(t,e,i){"use strict";var a=i("9c5a"),r=i.n(a);r.a},f241:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("q-header",{attrs:{elevated:"",reveal:""}},[i("q-toolbar",[i("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[i("q-icon",{attrs:{name:"menu"}})],1),i("q-toolbar-title",[t._v(t._s(t.typeListObj[t.$route.query.id]))]),i("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=ttop5&repo=to-be-slack&type=star&count=true",frameborder:"0",scrolling:"0",width:"100px",height:"20px"}})],1)],1),i("q-drawer",{attrs:{bordered:"","content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[i("q-list",{staticClass:"rounded-borders text-primary q-pa-md",attrs:{separator:""}},[i("q-item-label",{staticClass:"flex",attrs:{header:""}},[i("q-item-section",[t._v("Links")]),i("q-item-section",{attrs:{side:"",top:""}},[i("q-btn-dropdown",{attrs:{flat:"",label:"菜单定制"}},[i("q-list",[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[i("q-toggle",{attrs:{dense:""},model:{value:t.showEdit,callback:function(e){t.showEdit=e},expression:"showEdit"}},[t._v("编辑开关")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:t.showAll}},[i("q-item-section",{staticStyle:{"padding-left":"12px"},attrs:{avatar:""}},[i("q-icon",{attrs:{name:"list",size:"28px"}})],1),i("q-item-section",[t._v("恢复默认")])],1)],1)],1)],1)],1),t._l(t.typeList,function(e){return i("q-item",{directives:[{name:"show",rawName:"v-show",value:e.display,expression:"item.display"},{name:"ripple",rawName:"v-ripple"}],key:e.id,attrs:{clickable:"","exact-active-class":"menu-link",to:"/?id="+e.id,active:t.$route.query.id===e.id}},[i("q-item-section",[t._v(t._s(e.title))]),i("q-item-section",{attrs:{side:"",top:""}},[t.showEdit?i("q-btn",{attrs:{flat:"",icon:"delete"},on:{click:function(t){e.display=!1}}}):t._e()],1)],1)})],2)],1),i("q-page-container",[i("router-view"),i("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[i("q-btn",{attrs:{fab:"",icon:"keyboard_arrow_up",color:"primary"}})],1)],1)],1)},r=[],s=(i("55dd"),i("758b")),n={name:"MyLayout",data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop,showEdit:!1,typeList:[],typeListObj:{}}},watch:{typeList:{handler:function(t){localStorage.setItem("slackLinks",JSON.stringify(t))},deep:!0}},methods:{compare:function(t){return function(e,i){var a=e[t],r=i[t];return r-a}},getType:function(){var t=this;s["a"].get("/GetType").then(function(e){var i=e.data.Data;i.forEach(function(e){e.display=!0,t.typeListObj[e.id]=e.title}),i.forEach(function(t,e){"100"===t.id&&i.splice(e,2)}),i=i.sort(t.compare("sort")),t.$set(t,"typeList",i)})},showAll:function(){this.getType()}},created:function(){var t=this;localStorage.getItem("slackLinks")?(this.$set(this,"typeList",JSON.parse(localStorage.getItem("slackLinks"))),this.typeList.forEach(function(e){t.typeListObj[e.id]=e.title})):this.getType()}},o=n,l=(i("d3de"),i("2877")),c=Object(l["a"])(o,a,r,!1,null,"51f953f4",null);e["default"]=c.exports}}]);