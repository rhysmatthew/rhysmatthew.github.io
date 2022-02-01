(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-382ccc34"],{"90ca":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"hero",staticClass:"page-header"},[a("div",{staticClass:"page-header__breadcrumb"},[a("div",{staticClass:"page-header__breadcrumb__item__wrapper"},[a("router-link",{staticClass:"page-header__breadcrumb__item btn",attrs:{exact:"",to:"/"}},[a("span",{staticClass:"btn__inner"},[t._v("Home")])])],1),"post"===this.$router.currentRoute.name?a("div",{staticClass:"page-header__breadcrumb__item__wrapper"},[a("router-link",{staticClass:"page-header__breadcrumb__item btn",attrs:{exact:"",to:"/writing"}},[a("span",{staticClass:"btn__inner"},[t._v("Writing")])])],1):t._e(),a("div",{staticClass:"page-header__breadcrumb__item__wrapper"},[a("p",{staticClass:"page-header__breadcrumb__item"},[t._v(t._s(t.currentRouteTitle))])])]),a("div",{staticClass:"page-header__title"},[a("h1",{staticClass:"mb-0",attrs:{tabindex:"0"}},[t._v(t._s(t.currentRouteTitle))])])])},i=[],r=(a("7f7f"),{name:"PageHeader",data:function(){return{currentRoutePath:"",currentRouteTitle:""}},props:{postTitle:{type:String,default:""}},created:function(){this.currentRoutePath=this.$router.currentRoute.fullPath,""===this.postTitle?this.currentRouteTitle=this.$router.currentRoute.name[0].toUpperCase()+this.$router.currentRoute.name.slice(1):this.currentRouteTitle=this.postTitle},watch:{postTitle:function(t){""===this.postTitle?this.currentRouteTitle=this.$router.currentRoute.name[0].toUpperCase()+this.$router.currentRoute.name.slice(1):this.currentRouteTitle=this.postTitle}}}),n=r,o=(a("c48f"),a("2877")),c=Object(o["a"])(n,s,i,!1,null,null,null);e["a"]=c.exports},"9f9c":function(t,e,a){},a1d1:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("vue-headful",{attrs:{title:"About | Rhys Matthew | Web Developer",description:"Rhys Matthew is based in Nottingham, UK. He has a passion for building digital interfaces and creating interactive websites. Rhys loves clean modular code and modern JavaScript frameworks like Vue or React.",keywords:"About Rhys Matthew, About, UI developer, UX Design, Web Design, Front-End Development, JavaScript dev, Freelance, web engineer, CSS, PHP, Wordpress developer",head:{"meta[property='og:url']":{content:"https://rhys.digital/about/"},"meta[name='twitter:site']":{content:"https://rhys.digital/about/"},"link[rel='canonical']":{href:"https://rhys.digital/about/"}}}}),a("PageHeader"),a("section",{staticClass:"section pb-0"},[a("div",{staticClass:"mw--800"},[a("div",{staticClass:"section__block"},[a("prismic-rich-text",{attrs:{field:t.fields.aboutIntro}})],1)])]),a("section",{staticClass:"section pb-0"},[a("div",{staticClass:"mw--800"},[t._m(0),a("div",{staticClass:"section__block"},[a("ul",{staticClass:"list list--flex"},t._l(t.fields.aboutTools,(function(e,s){return a("li",{key:s},[t._v(" "+t._s(e.about_tool)+" ")])})),0)])])]),a("section",{staticClass:"section"},[a("div",{staticClass:"mw--800"},[t._m(1),a("div",{staticClass:"section__block"},[a("ul",{staticClass:"list"},t._l(t.fields.aboutServices,(function(e,s){return a("li",{key:s},[t._v(" "+t._s(e.about_service)+" ")])})),0)])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section__header"},[a("h2",{attrs:{tabindex:"0"}},[t._v("Experience with")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section__header"},[a("h2",{attrs:{tabindex:"0"}},[t._v("What I can do for you")])])}],r=a("90ca"),n={data:function(){return{fields:{aboutIntro:[],aboutTools:[],aboutServices:[]}}},components:{PageHeader:r["a"]},created:function(){this.getAboutContent()},mounted:function(){setTimeout((function(){var t=new CustomEvent("pageLoad");document.dispatchEvent(t)}),250)},methods:{getAboutContent:function(){var t=this;this.$prismic.client.getSingle("about").then((function(e){t.fields.aboutIntro=e.data.about_intro,t.fields.aboutTools=e.data.about_tools,t.fields.aboutServices=e.data.about_services}))}}},o=n,c=a("2877"),u=Object(c["a"])(o,s,i,!1,null,null,null);e["default"]=u.exports},c48f:function(t,e,a){"use strict";a("9f9c")}}]);
//# sourceMappingURL=chunk-382ccc34.68384217.js.map