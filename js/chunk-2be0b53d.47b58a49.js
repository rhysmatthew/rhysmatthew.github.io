(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2be0b53d"],{"28a5":function(t,e,s){"use strict";var a=s("aae3"),i=s("cb7c"),n=s("ebd6"),l=s("0390"),r=s("9def"),c=s("5f1b"),o=s("520a"),d=s("79e5"),p=Math.min,u=[].push,v="split",h="length",_="lastIndex",m=4294967295,f=!d((function(){RegExp(m,"y")}));s("214f")("split",2,(function(t,e,s,d){var g;return g="c"=="abbc"[v](/(b)*/)[1]||4!="test"[v](/(?:)/,-1)[h]||2!="ab"[v](/(?:ab)*/)[h]||4!="."[v](/(.?)(.?)/)[h]||"."[v](/()()/)[h]>1||""[v](/.?/)[h]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!a(t))return s.call(i,t,e);var n,l,r,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=void 0===e?m:e>>>0,f=new RegExp(t.source,d+"g");while(n=o.call(f,i)){if(l=f[_],l>p&&(c.push(i.slice(p,n.index)),n[h]>1&&n.index<i[h]&&u.apply(c,n.slice(1)),r=n[0][h],p=l,c[h]>=v))break;f[_]===n.index&&f[_]++}return p===i[h]?!r&&f.test("")||c.push(""):c.push(i.slice(p)),c[h]>v?c.slice(0,v):c}:"0"[v](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:s.call(this,t,e)}:s,[function(s,a){var i=t(this),n=void 0==s?void 0:s[e];return void 0!==n?n.call(s,i,a):g.call(String(i),s,a)},function(t,e){var a=d(g,t,this,e,g!==s);if(a.done)return a.value;var o=i(t),u=String(this),v=n(o,RegExp),h=o.unicode,_=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(f?"y":"g"),C=new v(f?o:"^(?:"+o.source+")",_),w=void 0===e?m:e>>>0;if(0===w)return[];if(0===u.length)return null===c(C,u)?[u]:[];var y=0,b=0,x=[];while(b<u.length){C.lastIndex=f?b:0;var k,E=c(C,f?u:u.slice(b));if(null===E||(k=p(r(C.lastIndex+(f?0:b)),u.length))===y)b=l(u,b,h);else{if(x.push(u.slice(y,b)),x.length===w)return x;for(var O=1;O<=E.length-1;O++)if(x.push(E[O]),x.length===w)return x;b=y=k}}return x.push(u.slice(y)),x}]}))},6114:function(t,e,s){"use strict";s("df62")},aae3:function(t,e,s){var a=s("d3f4"),i=s("2d95"),n=s("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==i(t))}},bc13:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("vue-headful",{attrs:{title:"Home | Rhys Matthew | Web Developer",description:"Rhys Matthew is a Web Developer/Designer and User Interface Developer. From Web Design, Front-End Development or a CMS integrated website, Rhys can help with a range of tasks within Web Development to get your project off the ground.",keywords:"Web Developer, UI Developer, UX Design, Web Design, Front-End Development, JavaScript dev, Freelance, Web Engineer, CSS, PHP, Wordpress Developer, CMS integration, Vue, ES6 JS, Modern JavaScript, Rhys Web Developer",head:{"meta[property='og:url']":{content:"https://rhys.digital"},"meta[name='twitter:site']":{content:"https://rhys.digital"},"link[rel='canonical']":{href:"https://rhys.digital"}}}}),s("Hero"),s("h1",{staticClass:"sr-only"},[t._v("Home")]),s("section",{staticClass:"section section--lg",attrs:{id:"projects-home"}},[t._m(0),s("div",{staticClass:"cards"},[s("div",{staticClass:"mw--600-desktop-down"},[s("div",{staticClass:"row"},t._l(t.projectItems,(function(t,e){return s("div",{key:t.data.id,staticClass:"col-lg-6 mb-1 "},[s("div",{staticClass:"reveal",class:["reveal--delay-"+e]},[s("div",{staticClass:"reveal-inner"},[s("CardProject",{key:t.data.id,attrs:{title:t.data.title,description:t.data.description,img_srcset:t.data.img.lg.url,img_src:t.data.img.url,img_alt:t.data.img.alt,img_aspect:"aspect--3-2 aspect--1-1-mobileLandscape-down",live_href:t.data.live_link,git_href:t.data.git_link,accomplishments:t.data.accomplishments}})],1)])])})),0)])])]),s("section",{staticClass:"section section--lg section--experiments"},[t._m(1),s("div",{staticClass:"mw--600-desktop-down"},[s("div",{staticClass:"row center-xs"},t._l(t.codepenItems,(function(t,e){return s("div",{key:t.data.id,staticClass:"col-lg-4 mb-1"},[s("div",{staticClass:"reveal",class:["reveal--delay-"+e]},[s("div",{staticClass:"reveal-inner"},[s("CardPen",{key:t.data.id,attrs:{title:t.data.title,img_srcset:t.data.img.lg.url,img_src:t.data.img.url,img_alt:t.data.img.alt,img_aspect:"aspect--3-2 aspect--1-1-mobileLandscape-down",url:t.data.url.url}})],1)])])})),0)])]),s("section",{staticClass:"section section--lg section--experiments mb-12-desktop-up"},[t._m(2),s("div",{staticClass:"mw--600-desktop-down"},[s("div",{staticClass:"section__block"},[0!==t.posts.length?s("div",{staticClass:"posts"},[s("div",{staticClass:"container"}),s("div",{staticClass:"row row--lg-gutters"},t._l(t.posts,(function(e,a){return s("div",{key:e.id,staticClass:"col-xs-12 col-lg-6 mb-1"},[s("div",{staticClass:"reveal mt-2",class:["reveal--delay-"+a]},[s("div",{staticClass:"reveal-inner"},[s("div",{staticClass:"post"},[s("h3",{staticClass:"post__title"},[s("router-link",{attrs:{to:t.linkResolver(e)}},[t._v(t._s(e.data.title))])],1),s("p",{staticClass:"post__date"},[s("strong",[t._v("Posted:")]),t._v(" "+t._s(e.data.posted_date))]),s("p",{staticClass:"post__excerpt"},[t._v(t._s(e.data.excerpt[0].text))]),s("router-link",{staticClass:"btn",attrs:{to:t.linkResolver(e),exact:""}},[s("span",{staticClass:"btn__inner"},[t._v("View post")])])],1)])])])})),0)]):t._e()])])]),s("div",{staticClass:"reveal"},[s("div",{staticClass:"reveal-inner"},[s("section",{staticClass:"section section--xl bg--gradient text--light text--center-tablet-down"},[s("div",{staticClass:"mw--1000"},[s("div",{staticClass:"section__block pr-2 pl-2"},[s("div",{staticClass:"mw--700-desktop-down"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12 col-md-6"},[s("h2",{staticClass:"h2"},[t._v(t._s(t.fields.contactPanelTitle))])]),s("div",{staticClass:"col-xs-12 col-md-6"},[s("prismic-rich-text",{attrs:{field:t.fields.contactPanelText}}),s("router-link",{staticClass:"btn text--light mb-4",attrs:{to:"/contact",exact:""}},[s("span",{staticClass:"btn__inner"},[t._v("Get in touch")])])],1)])])])])])])])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section__header text--center-desktop-down"},[s("h2",{staticClass:"reveal",attrs:{tabindex:"0"}},[s("div",{staticClass:"reveal-inner"},[t._v("Latest Projects")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section__header text--center-desktop-down"},[s("h2",{staticClass:"reveal",attrs:{tabindex:"0"}},[s("div",{staticClass:"reveal-inner"},[t._v("Experiments")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section__header text--center-desktop-down"},[s("h2",{staticClass:"reveal",attrs:{tabindex:"0"}},[s("div",{staticClass:"reveal-inner"},[t._v("Writing")])])])}],n=(s("ac6a"),s("f3e2"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"hero",staticClass:"hero"},[s("div",{staticClass:"hero__inner"},[t._m(0),s("a",{staticClass:"hero__scroll-down",attrs:{href:"#projects-home"},on:{click:t.handleScroll}},[s("IconDownArrow",{attrs:{fill:"#1A2B2B"}})],1)])])}),l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"display-1"},[t._v(" Hey! I'm Rhys,"),s("span",{staticClass:"br"}),t._v(" a Front-end Developer"),s("span",{staticClass:"br"}),t._v(" & UI/UX Designer ")])}],r=function(t,e){var s=e._c;return s("svg",{staticClass:"icon icon--down-arrow",class:e.props.classes,attrs:{fill:e.props.fill,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}})])},c=[],o={name:"IconDownArrow",props:{fill:{type:String,default:""},classes:{type:String,default:""}}},d=o,p=s("2877"),u=Object(p["a"])(d,r,c,!0,null,null,null),v=u.exports,h=s("b047"),_=s.n(h),m={name:"Hero",components:{IconDownArrow:v},mounted:function(){this.setHeroHeight(),this.handleResize()},methods:{handleScroll:function(t){t.preventDefault();var e=t.target.getAttribute("href"),s=document.querySelector(e).offsetTop,a=window.matchMedia("(prefers-reduced-motion: reduce)");scroll({top:s,behavior:a.matches?"auto":"smooth"})},setHeroHeight:function(){var t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;this.$refs.hero.style.height=e<510?t-60+"px":t-80+"px"},handleResize:function(){var t=this.$refs.hero;window.addEventListener("resize",_()((function(){var e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,s=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;t.style.height=s<510?e-60+"px":e-80+"px"}),250,{leading:!0,trailing:!0}))}}},f=m,g=(s("6114"),Object(p["a"])(f,n,l,!1,null,null,null)),C=g.exports,w=s("bc5d"),y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card__inner",on:{click:t.handleExternalClick}},[s("div",{staticClass:"card__media"},[s("div",{class:t.img_aspect},[s("picture",[s("source",{attrs:{"data-srcset":t.img_srcset,media:"(min-width: 510px)"}}),s("img",{attrs:{"data-src":t.img_src,alt:t.img_alt,width:"480",height:"480"}})])])]),s("div",{staticClass:"card__body"},[s("h3",{staticClass:"card__title"},[t._v(t._s(t.title))]),s("a",{ref:"externalLink",staticClass:"card__external-link",attrs:{href:t.url,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("View "+t._s(t.title)+" on CodePen")]),s("IconExternal",{attrs:{fill:"#ffffff"}})],1)])])])},b=[],x=function(t,e){var s=e._c;return s("svg",{staticClass:"icon icon--external",class:e.props.classes,attrs:{fill:e.props.fill,xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 512 512"}},[s("path",{attrs:{d:"M412.88 261.46a20.68 20.68 0 0 0-20.68 20.69v156.88a31.65 31.65 0 0 1-31.61 31.6H72.97a31.65 31.65 0 0 1-31.6-31.6V151.4a31.65 31.65 0 0 1 31.6-31.6h156.88a20.68 20.68 0 0 0 0-41.37H72.97C32.74 78.44 0 111.18 0 151.4v287.62C0 479.25 32.74 512 72.97 512H360.6c40.23 0 72.97-32.74 72.97-72.97V282.14a20.68 20.68 0 0 0-20.68-20.69zM491.32 0H334.44a20.68 20.68 0 1 0 0 41.36h136.2v136.2a20.68 20.68 0 1 0 41.36 0V20.68A20.68 20.68 0 0 0 491.32 0z"}}),s("path",{attrs:{d:"M505.94 6.06a20.68 20.68 0 0 0-29.25 0l-287.6 287.6a20.68 20.68 0 1 0 29.24 29.26L505.94 35.3a20.68 20.68 0 0 0 0-29.25z"}})])},k=[],E={name:"IconExternal",props:{fill:{type:String,default:""},classes:{type:String,default:""}}},O=E,I=Object(p["a"])(O,x,k,!0,null,null,null),S=I.exports,D={name:"CardPen",props:["title","url","img_srcset","img_src","img_alt","img_aspect"],components:{IconExternal:S},methods:{handleExternalClick:function(){this.$refs.externalLink.click()}}},H=D,$=Object(p["a"])(H,y,b,!1,null,null,null),P=$.exports,j={name:"Home",data:function(){return{projectItems:null,codepenItems:null,posts:[],fields:{contactPanelTitle:"",contactPanelText:[]},linkResolver:this.$prismic.linkResolver}},components:{Hero:C,CardProject:w["a"],CardPen:P},created:function(){this.getHomeContent()},mounted:function(){setTimeout((function(){var t=new CustomEvent("pageLoad");document.dispatchEvent(t)}),250)},updated:function(){setTimeout((function(){var t=new CustomEvent("pageLoad");document.dispatchEvent(t)}),250)},methods:{getHomeContent:function(){var t=this;this.$prismic.client.query(this.$prismic.Predicates.at("document.type","portfolio_item"),{orderings:"[document.first_publication_date]"}).then((function(e){t.projectItems=e.results})),this.$prismic.client.query(this.$prismic.Predicates.at("document.type","codepen_item"),{orderings:"[codepen_item.date]"}).then((function(e){t.codepenItems=e.results})),this.$prismic.client.getSingle("home").then((function(e){t.fields.contactPanelTitle=e.data.contact_panel_title[0].text,t.fields.contactPanelText=e.data.contact_panel_text})),this.$prismic.client.query(this.$prismic.Predicates.at("document.type","post"),{orderings:"[my.post.date desc]"}).then((function(e){t.posts=e.results,t.posts.forEach((function(e,s){t.reformatDate(e.data.posted_date,s)}))}))},reformatDate:function(t,e){var s={weekday:"long",year:"numeric",month:"long",day:"numeric"},a=new Date(t);this.posts[e].data.posted_date=a.toLocaleDateString("en-US",s)}}},W=j,L=Object(p["a"])(W,a,i,!1,null,null,null);e["default"]=L.exports},bc5d:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card__inner",on:{click:t.handleOverlayTrigger}},[s("div",{staticClass:"card__media"},[s("div",{class:t.img_aspect},[s("picture",[s("source",{attrs:{"data-srcset":t.img_srcset,media:"(min-width: 510px)"}}),s("img",{attrs:{"data-src":t.img_src,alt:t.img_alt,width:"480",height:"480"}})])])]),s("div",{staticClass:"card__body"},[s("h3",{staticClass:"card__title"},[t._v(t._s(t.title))]),s("p",{staticClass:"card__text"},[t._v(t._s(t.description))]),s("button",{staticClass:"card__overlay__trigger",attrs:{tabindex:"0"}},[s("span",{staticClass:"sr-only"},[t._v("View "+t._s(t.title)+" details")]),s("IconMore",{attrs:{fill:"#ffffff"}})],1)])]),s("div",{ref:"cardOverlay",staticClass:"card__overlay",class:{active:t.cardOverlayOpen}},[s("div",{staticClass:"card__overlay__inner"},[s("h3",[t._v("Accomplishments")]),s("ul",{staticClass:"list"},t._l(t.accomplishmentsArray,(function(e,a){return s("li",{key:a},[s("p",[t._v(" "+t._s(e)+" ")])])})),0),s("footer",{staticClass:"card__overlay__footer"},[s("ul",{staticClass:"card__overlay__links"},[null!==t.live_href?s("li",[s("a",{staticClass:"btn card__overlay__link",attrs:{href:t.live_href,target:"_blank",tabindex:"-1"}},[s("span",{staticClass:"btn__inner"},[t._v("View live website")])])]):t._e(),null!==t.git_href?s("li",[s("a",{staticClass:"btn card__overlay__link",attrs:{href:t.git_href,target:"_blank",tabindex:"-1"}},[s("span",{staticClass:"btn__inner"},[t._v("View Git")])])]):t._e()])]),s("button",{staticClass:"card__overlay__dismiss",attrs:{tabindex:"-1"},on:{click:t.handleOverlayDismiss}},[s("span",{staticClass:"sr-only"},[t._v("Close "+t._s(t.title)+" details")]),s("IconClose")],1)])])])},i=[],n=(s("ac6a"),s("f3e2"),s("28a5"),function(t,e){var s=e._c;return s("svg",{staticClass:"icon icon--more",class:e.props.classes,attrs:{fill:e.props.fill,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 408 408"}},[s("path",{attrs:{d:"M204 102c28.05 0 51-22.95 51-51S232.05 0 204 0s-51 22.95-51 51 22.95 51 51 51zm0 51c-28.05 0-51 22.95-51 51s22.95 51 51 51 51-22.95 51-51-22.95-51-51-51zm0 153c-28.05 0-51 22.95-51 51s22.95 51 51 51 51-22.95 51-51-22.95-51-51-51z"}})])}),l=[],r={name:"IconMore",props:{fill:{type:String,default:""},classes:{type:String,default:""}}},c=r,o=s("2877"),d=Object(o["a"])(c,n,l,!0,null,null,null),p=d.exports,u=function(t,e){var s=e._c;return s("svg",{staticClass:"icon icon--close",class:e.props.classes,attrs:{fill:e.props.fill,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 357 357"}},[s("path",{attrs:{d:"M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z"}})])},v=[],h={name:"IconClose",props:{fill:{type:String,default:""},classes:{type:String,default:""}}},_=h,m=Object(o["a"])(_,u,v,!0,null,null,null),f=m.exports,g={name:"CardWork",props:["title","description","img_srcset","img_src","img_alt","img_aspect","accomplishments","live_href","git_href"],components:{IconMore:p,IconClose:f},data:function(){return{cardOverlayOpen:!1,accomplishmentsArray:[]}},created:function(){this.accomplishmentsArray=this.accomplishments.split(",")},methods:{toggleOverlay:function(){var t=this.$refs.cardOverlay.querySelectorAll(".card__overlay__link"),e=this.$refs.cardOverlay.querySelector(".card__overlay__dismiss");!1===this.cardOverlayOpen?(this.cardOverlayOpen=!0,t.forEach((function(t,e){t.tabIndex=0})),t[0].focus(),e.tabIndex=0):!0===this.cardOverlayOpen&&(this.cardOverlayOpen=!1,t.forEach((function(t,e){t.tabIndex=-1})),e.tabIndex=-1)},handleOverlayDismiss:function(){!0===this.cardOverlayOpen&&this.toggleOverlay()},handleOverlayTrigger:function(t){!1===this.cardOverlayOpen&&this.toggleOverlay(),t.target.classList.add("is--clicked"),setTimeout((function(){t.target.classList.remove("is--clicked")}),250)}}},C=g,w=Object(o["a"])(C,a,i,!1,null,null,null);e["a"]=w.exports},df62:function(t,e,s){}}]);
//# sourceMappingURL=chunk-2be0b53d.47b58a49.js.map