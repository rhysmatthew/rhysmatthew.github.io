(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5072ed90"],{"4d51":function(t,e,s){"use strict";s("542c")},"542c":function(t,e,s){},7423:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("vue-headful",{attrs:{title:"Writing | Rhys Matthew | Web Developer",description:"Articles by Rhys Matthew covering all things web development, web design and UX.",keywords:"Writing by Rhys Matthew, writing, articles, blog post, HTML, JS, JavaScript, CSS, PHP, Wordpress developer",head:{"meta[property='og:url']":{content:"https://rhys.digital/writing/"},"meta[name='twitter:site']":{content:"https://rhys.digital/writing/"},"link[rel='canonical']":{href:"https://rhys.digital/writing/"}}}}),s("PageHeader"),s("section",{staticClass:"section pt-1"},[s("div",{staticClass:"mw--650"},[s("div",{staticClass:"section__block"},[0!==t.posts.length?s("div",{staticClass:"posts"},t._l(t.posts,(function(e){return s("div",{key:e.id},[s("div",{staticClass:"post mt-5"},[s("h2",{staticClass:"post__title"},[s("router-link",{attrs:{to:t.linkResolver(e)}},[t._v(t._s(e.data.title))])],1),s("p",{staticClass:"post__date"},[s("strong",[t._v("Posted:")]),t._v(" "+t._s(e.data.posted_date))]),s("p",{staticClass:"post__excerpt"},[t._v(t._s(e.data.excerpt[0].text))]),s("router-link",{staticClass:"btn",attrs:{to:t.linkResolver(e),exact:""}},[s("span",{staticClass:"btn__inner"},[t._v("View post")])])],1)])})),0):t._e()])])])],1)},i=[],r=(s("ac6a"),s("f3e2"),s("90ca")),n={data:function(){return{posts:[],dateOptions:{year:"numeric",month:"short",day:"2-digit"},linkResolver:this.$prismic.linkResolver}},components:{PageHeader:r["a"]},created:function(){this.getPosts()},mounted:function(){setTimeout((function(){var t=new CustomEvent("pageLoad");document.dispatchEvent(t)}),250)},updated:function(){setTimeout((function(){var t=new CustomEvent("pageLoad");document.dispatchEvent(t)}),250)},methods:{getPosts:function(){var t=this;this.$prismic.client.query(this.$prismic.Predicates.at("document.type","post"),{orderings:"[my.post.date desc]"}).then((function(e){t.posts=e.results,t.posts.forEach((function(e,s){t.reformatDate(e.data.posted_date,s)}))}))},reformatDate:function(t,e){var s={weekday:"long",year:"numeric",month:"long",day:"numeric"},a=new Date(t);this.posts[e].data.posted_date=a.toLocaleDateString("en-US",s)}}},o=n,c=(s("4d51"),s("2877")),u=Object(c["a"])(o,a,i,!1,null,null,null);e["default"]=u.exports},"90ca":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"hero",staticClass:"page-header"},[s("div",{staticClass:"page-header__breadcrumb"},[s("div",{staticClass:"page-header__breadcrumb__item__wrapper"},[s("router-link",{staticClass:"page-header__breadcrumb__item btn",attrs:{exact:"",to:"/"}},[s("span",{staticClass:"btn__inner"},[t._v("Home")])])],1),"post"===this.$router.currentRoute.name?s("div",{staticClass:"page-header__breadcrumb__item__wrapper"},[s("router-link",{staticClass:"page-header__breadcrumb__item btn",attrs:{exact:"",to:"/writing"}},[s("span",{staticClass:"btn__inner"},[t._v("Writing")])])],1):t._e(),s("div",{staticClass:"page-header__breadcrumb__item__wrapper"},[s("p",{staticClass:"page-header__breadcrumb__item"},[t._v(t._s(t.currentRouteTitle))])])]),s("div",{staticClass:"page-header__title"},[s("h1",{staticClass:"mb-0",attrs:{tabindex:"0"}},[t._v(t._s(t.currentRouteTitle))])])])},i=[],r=(s("7f7f"),{name:"PageHeader",data:function(){return{currentRoutePath:"",currentRouteTitle:""}},props:{postTitle:{type:String,default:""}},created:function(){this.currentRoutePath=this.$router.currentRoute.fullPath,""===this.postTitle?this.currentRouteTitle=this.$router.currentRoute.name[0].toUpperCase()+this.$router.currentRoute.name.slice(1):this.currentRouteTitle=this.postTitle},watch:{postTitle:function(t){""===this.postTitle?this.currentRouteTitle=this.$router.currentRoute.name[0].toUpperCase()+this.$router.currentRoute.name.slice(1):this.currentRouteTitle=this.postTitle}}}),n=r,o=(s("c48f"),s("2877")),c=Object(o["a"])(n,a,i,!1,null,null,null);e["a"]=c.exports},"9f9c":function(t,e,s){},c48f:function(t,e,s){"use strict";s("9f9c")}}]);
//# sourceMappingURL=chunk-5072ed90.3dfe51a2.js.map