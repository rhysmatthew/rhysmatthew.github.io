(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66c63962"],{"28a5":function(t,e,a){"use strict";var s=a("aae3"),i=a("cb7c"),r=a("ebd6"),n=a("0390"),l=a("9def"),c=a("5f1b"),o=a("520a"),u=a("79e5"),d=Math.min,_=[].push,p="split",h="length",v="lastIndex",f=4294967295,m=!u((function(){RegExp(f,"y")}));a("214f")("split",2,(function(t,e,a,u){var g;return g="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[h]||2!="ab"[p](/(?:ab)*/)[h]||4!="."[p](/(.?)(.?)/)[h]||"."[p](/()()/)[h]>1||""[p](/.?/)[h]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!s(t))return a.call(i,t,e);var r,n,l,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,p=void 0===e?f:e>>>0,m=new RegExp(t.source,u+"g");while(r=o.call(m,i)){if(n=m[v],n>d&&(c.push(i.slice(d,r.index)),r[h]>1&&r.index<i[h]&&_.apply(c,r.slice(1)),l=r[0][h],d=n,c[h]>=p))break;m[v]===r.index&&m[v]++}return d===i[h]?!l&&m.test("")||c.push(""):c.push(i.slice(d)),c[h]>p?c.slice(0,p):c}:"0"[p](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,s){var i=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,i,s):g.call(String(i),a,s)},function(t,e){var s=u(g,t,this,e,g!==a);if(s.done)return s.value;var o=i(t),_=String(this),p=r(o,RegExp),h=o.unicode,v=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(m?"y":"g"),b=new p(m?o:"^(?:"+o.source+")",v),y=void 0===e?f:e>>>0;if(0===y)return[];if(0===_.length)return null===c(b,_)?[_]:[];var C=0,w=0,x=[];while(w<_.length){b.lastIndex=m?w:0;var O,k=c(b,m?_:_.slice(w));if(null===k||(O=d(l(b.lastIndex+(m?0:w)),_.length))===C)w=n(_,w,h);else{if(x.push(_.slice(C,w)),x.length===y)return x;for(var R=1;R<=k.length-1;R++)if(x.push(k[R]),x.length===y)return x;w=C=O}}return x.push(_.slice(C)),x}]}))},"7f1d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("vue-headful",{attrs:{title:"Projects | Rhys Matthew | Web Developer",description:"Rhys Matthew is a Web Developer/Designer and User Interface Developer. From Web Design, Front-End Development or a CMS integrated website, Rhys can help with a range of tasks within Web Development to get your project off the ground.",keywords:"Web Developer, UI Developer, UX Design, Web Design, Front-End Development, JavaScript dev, Freelance, Web Engineer, CSS, PHP, Wordpress Developer, CMS integration, Vue, ES6 JS, Modern JavaScript, Rhys Web Developer",head:{"meta[property='og:url']":{content:"https://rhys.digital"},"meta[name='twitter:site']":{content:"https://rhys.digital"},"link[rel='canonical']":{href:"https://rhys.digital"}}}}),a("PageHeader"),a("section",{staticClass:"section",attrs:{id:"projects-home"}},[a("div",{staticClass:"cards"},[a("div",{staticClass:"mw--650"},t._l(t.projectItems,(function(t){return a("div",{key:t.data.id,staticClass:"mb-2"},[a("CardProject",{key:t.data.id,attrs:{title:t.data.title,description:t.data.description,img_srcset:t.data.img.lg.url,img_src:t.data.img.url,img_alt:t.data.img.alt,img_aspect:"aspect--3-2 aspect--1-1-mobileLandscape-down",live_href:t.data.live_link,git_href:t.data.git_link,accomplishments:t.data.accomplishments}})],1)})),0)])])],1)},i=[],r=a("90ca"),n=a("bc5d"),l={name:"Home",data:function(){return{projectItems:null}},components:{PageHeader:r["a"],CardProject:n["a"]},created:function(){this.getProjectsContent()},mounted:function(){setTimeout((function(){var t=new CustomEvent("pageLoad");document.dispatchEvent(t)}),250)},methods:{getProjectsContent:function(){var t=this;this.$prismic.client.query(this.$prismic.Predicates.at("document.type","portfolio_item"),{orderings:"[document.first_publication_date]"}).then((function(e){t.projectItems=e.results}))}}},c=l,o=a("2877"),u=Object(o["a"])(c,s,i,!1,null,null,null);e["default"]=u.exports},"90ca":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"hero",staticClass:"page-header"},[a("div",{staticClass:"page-header__breadcrumb"},[a("div",{staticClass:"page-header__breadcrumb__item__wrapper"},[a("router-link",{staticClass:"page-header__breadcrumb__item btn",attrs:{exact:"",to:"/"}},[a("span",{staticClass:"btn__inner"},[t._v("Home")])])],1),"post"===this.$router.currentRoute.name?a("div",{staticClass:"page-header__breadcrumb__item__wrapper"},[a("router-link",{staticClass:"page-header__breadcrumb__item btn",attrs:{exact:"",to:"/writing"}},[a("span",{staticClass:"btn__inner"},[t._v("Writing")])])],1):t._e(),a("div",{staticClass:"page-header__breadcrumb__item__wrapper"},[a("p",{staticClass:"page-header__breadcrumb__item"},[t._v(t._s(t.currentRouteTitle))])])]),a("div",{staticClass:"page-header__title"},[a("h1",{staticClass:"mb-0",attrs:{tabindex:"0"}},[t._v(t._s(t.currentRouteTitle))])])])},i=[],r=(a("7f7f"),{name:"PageHeader",data:function(){return{currentRoutePath:"",currentRouteTitle:""}},props:{postTitle:{type:String,default:""}},created:function(){this.currentRoutePath=this.$router.currentRoute.fullPath,""===this.postTitle?this.currentRouteTitle=this.$router.currentRoute.name[0].toUpperCase()+this.$router.currentRoute.name.slice(1):this.currentRouteTitle=this.postTitle},watch:{postTitle:function(t){""===this.postTitle?this.currentRouteTitle=this.$router.currentRoute.name[0].toUpperCase()+this.$router.currentRoute.name.slice(1):this.currentRouteTitle=this.postTitle}}}),n=r,l=(a("c48f"),a("2877")),c=Object(l["a"])(n,s,i,!1,null,null,null);e["a"]=c.exports},"9f9c":function(t,e,a){},bc5d:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card__inner",on:{click:t.handleOverlayTrigger}},[a("div",{staticClass:"card__media"},[a("div",{class:t.img_aspect},[a("picture",[a("source",{attrs:{srcset:t.img_srcset,media:"(min-width: 510px)"}}),a("img",{attrs:{src:t.img_src,alt:t.img_alt,width:"480",height:"480"}})])])]),a("div",{staticClass:"card__body"},[a("h3",{staticClass:"card__title"},[t._v(t._s(t.title))]),a("p",{staticClass:"card__text"},[t._v(t._s(t.description))]),a("button",{staticClass:"card__overlay__trigger",attrs:{tabindex:"0"}},[a("span",{staticClass:"sr-only"},[t._v("View "+t._s(t.title)+" details")]),a("IconMore",{attrs:{fill:"#ffffff"}})],1)])]),a("div",{ref:"cardOverlay",staticClass:"card__overlay",class:{active:t.cardOverlayOpen}},[a("div",{staticClass:"card__overlay__inner"},[a("h3",[t._v("Accomplishments")]),a("ul",{staticClass:"list"},t._l(t.accomplishmentsArray,(function(e,s){return a("li",{key:s},[a("p",[t._v(" "+t._s(e)+" ")])])})),0),a("footer",{staticClass:"card__overlay__footer"},[a("ul",{staticClass:"card__overlay__links"},[null!==t.live_href?a("li",[a("a",{staticClass:"btn card__overlay__link",attrs:{href:t.live_href,target:"_blank",tabindex:"-1"}},[a("span",{staticClass:"btn__inner"},[t._v("View live website")])])]):t._e(),null!==t.git_href?a("li",[a("a",{staticClass:"btn card__overlay__link",attrs:{href:t.git_href,target:"_blank",tabindex:"-1"}},[a("span",{staticClass:"btn__inner"},[t._v("View Git")])])]):t._e()])]),a("button",{staticClass:"card__overlay__dismiss",attrs:{tabindex:"-1"},on:{click:t.handleOverlayDismiss}},[a("span",{staticClass:"sr-only"},[t._v("Close "+t._s(t.title)+" details")]),a("IconClose")],1)])])])},i=[],r=(a("ac6a"),a("f3e2"),a("28a5"),function(t,e){var a=e._c;return a("svg",{staticClass:"icon icon--more",class:e.props.classes,attrs:{fill:e.props.fill,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 408 408"}},[a("path",{attrs:{d:"M204 102c28.05 0 51-22.95 51-51S232.05 0 204 0s-51 22.95-51 51 22.95 51 51 51zm0 51c-28.05 0-51 22.95-51 51s22.95 51 51 51 51-22.95 51-51-22.95-51-51-51zm0 153c-28.05 0-51 22.95-51 51s22.95 51 51 51 51-22.95 51-51-22.95-51-51-51z"}})])}),n=[],l={name:"IconMore",props:{fill:{type:String,default:""},classes:{type:String,default:""}}},c=l,o=a("2877"),u=Object(o["a"])(c,r,n,!0,null,null,null),d=u.exports,_=function(t,e){var a=e._c;return a("svg",{staticClass:"icon icon--close",class:e.props.classes,attrs:{fill:e.props.fill,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 357 357"}},[a("path",{attrs:{d:"M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z"}})])},p=[],h={name:"IconClose",props:{fill:{type:String,default:""},classes:{type:String,default:""}}},v=h,f=Object(o["a"])(v,_,p,!0,null,null,null),m=f.exports,g={name:"CardWork",props:["title","description","img_srcset","img_src","img_alt","img_aspect","accomplishments","live_href","git_href"],components:{IconMore:d,IconClose:m},data:function(){return{cardOverlayOpen:!1,accomplishmentsArray:[]}},created:function(){this.accomplishmentsArray=this.accomplishments.split(",")},methods:{toggleOverlay:function(){var t=this.$refs.cardOverlay.querySelectorAll(".card__overlay__link"),e=this.$refs.cardOverlay.querySelector(".card__overlay__dismiss");!1===this.cardOverlayOpen?(this.cardOverlayOpen=!0,t.forEach((function(t,e){t.tabIndex=0})),t[0].focus(),e.tabIndex=0):!0===this.cardOverlayOpen&&(this.cardOverlayOpen=!1,t.forEach((function(t,e){t.tabIndex=-1})),e.tabIndex=-1)},handleOverlayDismiss:function(){!0===this.cardOverlayOpen&&this.toggleOverlay()},handleOverlayTrigger:function(t){!1===this.cardOverlayOpen&&this.toggleOverlay(),t.target.classList.add("is--clicked"),setTimeout((function(){t.target.classList.remove("is--clicked")}),250)}}},b=g,y=Object(o["a"])(b,s,i,!1,null,null,null);e["a"]=y.exports},c48f:function(t,e,a){"use strict";a("9f9c")}}]);
//# sourceMappingURL=chunk-66c63962.c30d1121.js.map