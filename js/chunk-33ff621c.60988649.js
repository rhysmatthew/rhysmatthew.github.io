(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33ff621c"],{"7f1d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("vue-headful",{attrs:{title:"Projects | Rhys Matthew | Web Developer",description:"Rhys Matthew is a Web Developer/Designer and User Interface Developer. From Web Design, Front-End Development or a CMS integrated website, Rhys can help with a range of tasks within Web Development to get your project off the ground.",keywords:"Web Developer, UI Developer, UX Design, Web Design, Front-End Development, JavaScript dev, Freelance, Web Engineer, CSS, PHP, Wordpress Developer, CMS integration, Vue, ES6 JS, Modern JavaScript, Rhys Web Developer",head:{"meta[property='og:url']":{content:"https://rhys.digital"},"meta[name='twitter:site']":{content:"https://rhys.digital"},"link[rel='canonical']":{href:"https://rhys.digital"}}}}),a("PageHeader"),a("section",{staticClass:"section",attrs:{id:"projects-home"}},[a("div",{staticClass:"cards"},[a("div",{staticClass:"mw--800"},t._l(t.projectItems,(function(t){return a("div",{key:t.data.id,staticClass:"mb-2"},[a("CardProject",{key:t.data.id,attrs:{title:t.data.title,description:t.data.description,img_srcset:t.data.img.lg.url,img_src:t.data.img.url,img_alt:t.data.img.alt,img_aspect:"aspect--3-2 aspect--1-1-mobileLandscape-down",live_href:t.data.live_link,git_href:t.data.git_link,accomplishments:t.data.accomplishments}})],1)})),0)])])],1)},r=[],i=a("90ca"),n=a("bc5d"),c={name:"Home",data:function(){return{projectItems:null}},components:{PageHeader:i["a"],CardProject:n["a"]},created:function(){this.getProjectsContent()},mounted:function(){setTimeout((function(){var t=new CustomEvent("pageLoad");document.dispatchEvent(t)}),250)},methods:{getProjectsContent:function(){var t=this;this.$prismic.client.query(this.$prismic.Predicates.at("document.type","portfolio_item"),{orderings:"[document.first_publication_date]"}).then((function(e){t.projectItems=e.results}))}}},l=c,o=a("2877"),d=Object(o["a"])(l,s,r,!1,null,null,null);e["default"]=d.exports},"90ca":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"hero",staticClass:"page-header"},[a("div",{staticClass:"page-header__breadcrumb"},[a("div",{staticClass:"page-header__breadcrumb__item__wrapper"},[a("router-link",{staticClass:"page-header__breadcrumb__item btn",attrs:{exact:"",to:"/"}},[a("span",{staticClass:"btn__inner"},[t._v("Home")])])],1),"post"===this.$router.currentRoute.name?a("div",{staticClass:"page-header__breadcrumb__item__wrapper"},[a("router-link",{staticClass:"page-header__breadcrumb__item btn",attrs:{exact:"",to:"/writing"}},[a("span",{staticClass:"btn__inner"},[t._v("Writing")])])],1):t._e(),a("div",{staticClass:"page-header__breadcrumb__item__wrapper"},[a("p",{staticClass:"page-header__breadcrumb__item"},[t._v(t._s(t.currentRouteTitle))])])]),a("div",{staticClass:"page-header__title"},[a("h1",{staticClass:"mb-0",attrs:{tabindex:"0"}},[t._v(t._s(t.currentRouteTitle))])])])},r=[],i=(a("7f7f"),{name:"PageHeader",data:function(){return{currentRoutePath:"",currentRouteTitle:""}},props:{postTitle:{type:String,default:""}},created:function(){this.currentRoutePath=this.$router.currentRoute.fullPath,""===this.postTitle?this.currentRouteTitle=this.$router.currentRoute.name[0].toUpperCase()+this.$router.currentRoute.name.slice(1):this.currentRouteTitle=this.postTitle},watch:{postTitle:function(t){""===this.postTitle?this.currentRouteTitle=this.$router.currentRoute.name[0].toUpperCase()+this.$router.currentRoute.name.slice(1):this.currentRouteTitle=this.postTitle}}}),n=i,c=(a("c48f"),a("2877")),l=Object(c["a"])(n,s,r,!1,null,null,null);e["a"]=l.exports},"9f9c":function(t,e,a){},bc5d:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card__inner",on:{click:t.handleOverlayTrigger}},[a("div",{staticClass:"card__media"},[a("div",{class:t.img_aspect},[a("picture",[a("source",{attrs:{srcset:t.img_srcset,media:"(min-width: 510px)"}}),a("img",{attrs:{src:t.img_src,alt:t.img_alt,width:"480",height:"480"}})])])]),a("div",{staticClass:"card__body"},[a("h3",{staticClass:"card__title"},[t._v(t._s(t.title))]),a("p",{staticClass:"card__text"},[t._v(t._s(t.description))]),a("button",{staticClass:"card__overlay__trigger",attrs:{tabindex:"0"}},[a("span",{staticClass:"sr-only"},[t._v("View "+t._s(t.title)+" details")]),a("IconMore",{attrs:{fill:"#ffffff"}})],1)])]),a("div",{ref:"cardOverlay",staticClass:"card__overlay",class:{active:t.cardOverlayOpen}},[a("div",{staticClass:"card__overlay__inner"},[a("h3",[t._v("Accomplishments")]),a("ul",{staticClass:"list"},t._l(t.accomplishmentsArray,(function(e,s){return a("li",{key:s},[a("p",[t._v(" "+t._s(e)+" ")])])})),0),a("footer",{staticClass:"card__overlay__footer"},[a("ul",{staticClass:"card__overlay__links"},[null!==t.live_href?a("li",[a("a",{staticClass:"btn card__overlay__link",attrs:{href:t.live_href,target:"_blank",tabindex:"-1"}},[a("span",{staticClass:"btn__inner"},[t._v("View live website")])])]):t._e(),null!==t.git_href?a("li",[a("a",{staticClass:"btn card__overlay__link",attrs:{href:t.git_href,target:"_blank",tabindex:"-1"}},[a("span",{staticClass:"btn__inner"},[t._v("View Git")])])]):t._e()])]),a("button",{staticClass:"card__overlay__dismiss",attrs:{tabindex:"-1"},on:{click:t.handleOverlayDismiss}},[a("span",{staticClass:"sr-only"},[t._v("Close "+t._s(t.title)+" details")]),a("IconClose")],1)])])])},r=[],i=(a("ac6a"),a("f3e2"),a("28a5"),function(t,e){var a=e._c;return a("svg",{staticClass:"icon icon--more",class:e.props.classes,attrs:{fill:e.props.fill,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 408 408"}},[a("path",{attrs:{d:"M204 102c28.05 0 51-22.95 51-51S232.05 0 204 0s-51 22.95-51 51 22.95 51 51 51zm0 51c-28.05 0-51 22.95-51 51s22.95 51 51 51 51-22.95 51-51-22.95-51-51-51zm0 153c-28.05 0-51 22.95-51 51s22.95 51 51 51 51-22.95 51-51-22.95-51-51-51z"}})])}),n=[],c={name:"IconMore",props:{fill:{type:String,default:""},classes:{type:String,default:""}}},l=c,o=a("2877"),d=Object(o["a"])(l,i,n,!0,null,null,null),_=d.exports,u=function(t,e){var a=e._c;return a("svg",{staticClass:"icon icon--close",class:e.props.classes,attrs:{fill:e.props.fill,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 357 357"}},[a("path",{attrs:{d:"M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z"}})])},p=[],h={name:"IconClose",props:{fill:{type:String,default:""},classes:{type:String,default:""}}},m=h,v=Object(o["a"])(m,u,p,!0,null,null,null),f=v.exports,g={name:"CardWork",props:["title","description","img_srcset","img_src","img_alt","img_aspect","accomplishments","live_href","git_href"],components:{IconMore:_,IconClose:f},data:function(){return{cardOverlayOpen:!1,accomplishmentsArray:[]}},created:function(){this.accomplishmentsArray=this.accomplishments.split(",")},methods:{toggleOverlay:function(){var t=this.$refs.cardOverlay.querySelectorAll(".card__overlay__link"),e=this.$refs.cardOverlay.querySelector(".card__overlay__dismiss");!1===this.cardOverlayOpen?(this.cardOverlayOpen=!0,t.forEach((function(t,e){t.tabIndex=0})),t[0].focus(),e.tabIndex=0):!0===this.cardOverlayOpen&&(this.cardOverlayOpen=!1,t.forEach((function(t,e){t.tabIndex=-1})),e.tabIndex=-1)},handleOverlayDismiss:function(){!0===this.cardOverlayOpen&&this.toggleOverlay()},handleOverlayTrigger:function(t){!1===this.cardOverlayOpen&&this.toggleOverlay(),t.target.classList.add("is--clicked"),setTimeout((function(){t.target.classList.remove("is--clicked")}),250)}}},b=g,y=Object(o["a"])(b,s,r,!1,null,null,null);e["a"]=y.exports},c48f:function(t,e,a){"use strict";a("9f9c")}}]);
//# sourceMappingURL=chunk-33ff621c.60988649.js.map