(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(t,e,r){var content=r(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("7388ab72",content,!0,{sourceMap:!1})},222:function(t,e,r){"use strict";var n={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Inclusivity",to:"/"}],title:"Matt's Soapbox"}}},o=r(82),c=r(116),d=r.n(c),l=r(329),f=r(334),v=r(330),m=r(335),O=r(331),_=r(160),w=r(161),y=r(106),h=r(162),V=r(79),x=r(332),j=r(333),E=r(220),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.items,(function(e,i){return r("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),r("v-app-bar",{attrs:{fixed:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}})],1),t._v(" "),r("v-main",[r("v-container",[r("nuxt")],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VApp:l.a,VAppBar:f.a,VAppBarNavIcon:v.a,VContainer:m.a,VFooter:O.a,VIcon:_.a,VList:w.a,VListItem:y.a,VListItemAction:h.a,VListItemContent:V.a,VListItemTitle:V.b,VMain:x.a,VNavigationDrawer:j.a,VToolbarTitle:E.a})},233:function(t,e,r){r(234),t.exports=r(235)},258:function(t,e,r){"use strict";var n=r(132);r.n(n).a},259:function(t,e,r){(e=r(15)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=e},319:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return f})),r.d(e,"mutations",(function(){return v})),r.d(e,"actions",(function(){return m}));r(7),r(10),r(8),r(13),r(14),r(11),r(9);var n=r(2),o=r(320),c=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=function(){return{video:{},edits:{}}},v={setVideo:function(t,video){t.video=video},addEdit:function(t,e){c.a.set(t.edits,e.id,e)},updateEdit:function(t,e){t.edits[e.id].type!==e.type&&("cut"===e.type?delete e.scale:delete e.end),c.a.set(t.edits,e.id,e)},removeEdit:function(t,e){c.a.delete(t.edits,e.id)}},m={setVideo:function(t,video){(0,t.commit)("setVideo",video)},addEdit:function(t,e){var r;(0,t.commit)("addEdit",(r=e,l(l({},{id:Object(o.a)(),type:"scale",scale:100}),r)))},updateEdit:function(t,e){(0,t.commit)("updateEdit",e)},removeEdit:function(t,e){(0,t.commit)("removeEdit",e)}}},73:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(258),r(82)),c=r(116),d=r.n(c),l=r(329),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;d()(component,{VApp:l.a})}},[[233,3,1,4]]]);