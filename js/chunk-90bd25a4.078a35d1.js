(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90bd25a4"],{"2fde":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("vue-headful",{attrs:{title:t.post.title+" | Writing | Rhys Matthew | Web Developer",description:t.post.excerpt,keywords:t.post.title+", blog post by Rhys Matthew",head:{"meta[property='og:url']":{content:"https://rhys.digital/writing/"+this.$route.params.uid},"meta[name='twitter:site']":{content:"https://rhys.digital/writing/"+this.$route.params.uid},"link[rel='canonical']":{href:"https://rhys.digital/writing/"+this.$route.params.uid}}}}),a("PageHeader",{attrs:{postTitle:t.post.title}}),a("section",{staticClass:"section pt-2"},[a("div",{staticClass:"post mw--650"},[a("div",{staticClass:"section__block"},[a("p",{staticClass:"post__date"},[a("strong",[t._v("Posted:")]),t._v(" "+t._s(t.post.date))]),a("prismic-rich-text",{attrs:{field:t.post.body}})],1)])])],1)},s=[],i=a("90ca"),n={data:function(){return{post:{documentId:"",title:"",date:"",body:[]}}},components:{PageHeader:i["a"]},created:function(){this.getPostData(this.$route.params.uid)},mounted:function(){setTimeout((function(){var t=new CustomEvent("pageLoad");document.dispatchEvent(t)}),250)},methods:{getPostData:function(t){var e=this;this.$prismic.client.getByUID("post",t).then((function(t){t?(e.post.documentId=t.id,e.post.title=t.data.title,e.post.date=e.reformatDate(t.data.posted_date),e.post.body=t.data.body,e.post.excerpt=t.data.excerpt[0].text):e.$router.push({name:"Page not found"})}))},reformatDate:function(t){var e={weekday:"long",year:"numeric",month:"long",day:"numeric"},a=new Date(t);return a.toLocaleDateString("en-US",e)}}},o=n,c=a("2877"),u=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=u.exports},"90ca":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"hero",staticClass:"page-header"},[a("div",{staticClass:"page-header__breadcrumb"},[a("div",{staticClass:"page-header__breadcrumb__item__wrapper"},[a("router-link",{staticClass:"page-header__breadcrumb__item btn",attrs:{exact:"",to:"/"}},[a("span",{staticClass:"btn__inner"},[t._v("Home")])])],1),"post"===this.$router.currentRoute.name?a("div",{staticClass:"page-header__breadcrumb__item__wrapper"},[a("router-link",{staticClass:"page-header__breadcrumb__item btn",attrs:{exact:"",to:"/writing"}},[a("span",{staticClass:"btn__inner"},[t._v("Writing")])])],1):t._e(),a("div",{staticClass:"page-header__breadcrumb__item__wrapper"},[a("p",{staticClass:"page-header__breadcrumb__item"},[t._v(t._s(t.currentRouteTitle))])])]),a("div",{staticClass:"page-header__title"},[a("h1",{staticClass:"mb-0",attrs:{tabindex:"0"}},[t._v(t._s(t.currentRouteTitle))])])])},s=[],i=(a("7f7f"),{name:"PageHeader",data:function(){return{currentRoutePath:"",currentRouteTitle:""}},props:{postTitle:{type:String,default:""}},created:function(){this.currentRoutePath=this.$router.currentRoute.fullPath,""===this.postTitle?this.currentRouteTitle=this.$router.currentRoute.name[0].toUpperCase()+this.$router.currentRoute.name.slice(1):this.currentRouteTitle=this.postTitle},watch:{postTitle:function(t){""===this.postTitle?this.currentRouteTitle=this.$router.currentRoute.name[0].toUpperCase()+this.$router.currentRoute.name.slice(1):this.currentRouteTitle=this.postTitle}}}),n=i,o=(a("c48f"),a("2877")),c=Object(o["a"])(n,r,s,!1,null,null,null);e["a"]=c.exports},"9f9c":function(t,e,a){},c48f:function(t,e,a){"use strict";a("9f9c")}}]);
//# sourceMappingURL=chunk-90bd25a4.078a35d1.js.map