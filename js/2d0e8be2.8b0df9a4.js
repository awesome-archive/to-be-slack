(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0e8be2"],{"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-pa-lg"},[a("q-list",{staticClass:"full-width",attrs:{bordered:"",separator:""}},t._l(t.postList,function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.index,attrs:{clickable:"",tag:"a",target:"_blank",href:e.url}},[t._v("\n      "+t._s(e.title)+"\n    ")])}),1)],1)},n=[],i=a("758b"),r={name:"PageIndex",data:function(){return{postList:[]}},watch:{$route:function(){this.getPostList()}},methods:{getPostList:function(){var t=this;i["a"].get("/GetTypeInfo?id=".concat(this.$route.query.id)).then(function(e){t.$set(t,"postList",e.data.Data)})}},created:function(){this.getPostList()}},o=r,c=a("2877"),l=Object(c["a"])(o,s,n,!1,null,null,null);e["default"]=l.exports}}]);