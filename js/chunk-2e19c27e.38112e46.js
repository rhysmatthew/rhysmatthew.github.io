(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e19c27e"],{"0f91":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EmailJSResponseStatus=e.sendForm=e.send=e.init=void 0;var a=s("3245");Object.defineProperty(e,"EmailJSResponseStatus",{enumerable:!0,get:function(){return a.EmailJSResponseStatus}});var n=s("5129"),r=null,i="https://api.emailjs.com";function c(t,e,s){return void 0===s&&(s={}),new Promise((function(n,r){var i=new XMLHttpRequest;for(var c in i.addEventListener("load",(function(t){var e=new a.EmailJSResponseStatus(t.target);200===e.status||"OK"===e.text?n(e):r(e)})),i.addEventListener("error",(function(t){r(new a.EmailJSResponseStatus(t.target))})),i.open("POST",t,!0),s)i.setRequestHeader(c,s[c]);i.send(e)}))}function o(t){var e=document&&document.getElementById("g-recaptcha-response");return e&&e.value&&(t["g-recaptcha-response"]=e.value),e=null,t}function l(t){return"#"!==t[0]&&"."!==t[0]?"#"+t:t}function u(t,e){r=t,i=e||"https://api.emailjs.com"}function d(t,e,s,a){var n={lib_version:"2.6.4",user_id:a||r,service_id:t,template_id:e,template_params:o(s)};return c(i+"/api/v1.0/email/send",JSON.stringify(n),{"Content-type":"application/json"})}function m(t,e,s,a){if("string"===typeof s&&(s=document.querySelector(l(s))),!s||"FORM"!==s.nodeName)throw"Expected the HTML form element or the style selector of form";n.UI.progressState(s);var o=new FormData(s);return o.append("lib_version","2.6.4"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",a||r),c(i+"/api/v1.0/email/send-form",o).then((function(t){return n.UI.successState(s),t}),(function(t){return n.UI.errorState(s),Promise.reject(t)}))}e.init=u,e.send=d,e.sendForm=m,e.default={init:u,send:d,sendForm:m}},"1cd1":function(t,e,s){},3245:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EmailJSResponseStatus=void 0;var a=function(){function t(t){this.status=t.status,this.text=t.responseText}return t}();e.EmailJSResponseStatus=a},5129:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UI=void 0;var a=function(){function t(){}return t.clearAll=function(t){t.classList.remove(this.PROGRESS),t.classList.remove(this.DONE),t.classList.remove(this.ERROR)},t.progressState=function(t){this.clearAll(t),t.classList.add(this.PROGRESS)},t.successState=function(t){t.classList.remove(this.PROGRESS),t.classList.add(this.DONE)},t.errorState=function(t){t.classList.remove(this.PROGRESS),t.classList.add(this.ERROR)},t.PROGRESS="emailjs-sending",t.DONE="emailjs-success",t.ERROR="emailjs-error",t}();e.UI=a},"7f5d":function(t,e,s){"use strict";s("1cd1")},c3df:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("vue-headful",{attrs:{title:"Contact | Rhys Matthew | Web Developer",description:"Need help on a project? Let's arrange a call to discuss your project. Whether it's Web Design, Front-End Development or a CMS integrated website, get in touch to find out more.",keywords:"Contact Rhys Matthew, Web Developer, Get in touch, Email Rhys Matthew, UI Developer, UX Design, Web design, Front-End Development, JavaScript dev, Contact Developer, Web Engineer, CSS, PHP, Rhys Matthew Web Developer, Wordpress Developer, Freelance",head:{"meta[property='og:url']":{content:"https://rhys.digital/contact/"},"meta[name='twitter:site']":{content:"https://rhys.digital/contact/"},"link[rel='canonical']":{href:"https://rhys.digital/contact/"}}}}),s("section",{staticClass:"section"},[s("div",{staticClass:"mw--650"},[t._m(0),s("div",{staticClass:"section__block"},[s("div",{staticClass:"reveal reveal--delay-1"},[s("div",{staticClass:"reveal-inner"},[s("prismic-rich-text",{attrs:{field:t.fields.contactIntro}}),t._m(1)],1)]),s("br"),s("div",{staticClass:"reveal reveal--delay-2"},[s("div",{staticClass:"reveal-inner"},[t._m(2),s("ContactForm")],1)])])])])],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section__header"},[s("h1",{staticClass:"h2 reveal",attrs:{tabindex:"0"}},[s("div",{staticClass:"reveal-inner"},[t._v("Contact")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("strong",{staticClass:"pr-1"},[t._v("Email:")]),t._v(" "),s("a",{staticClass:"btn",attrs:{href:"javascript:antiSpamMail.linkDecrypt('nbjmup;dpoubduAsizt/ejhjubm');"}},[t._v("contact"),s("span",{staticClass:"crypt",attrs:{"aria-hidden":"true"}},[t._v(".")]),t._v("@"),s("span",{staticClass:"crypt",attrs:{"aria-hidden":"true"}},[t._v(".")]),t._v("rhys"),s("span",{staticClass:"crypt",attrs:{"aria-hidden":"true"}},[t._v(".")]),t._v("."),s("span",{staticClass:"crypt",attrs:{"aria-hidden":"true"}},[t._v(".")]),t._v("digital")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contact-divider"},[s("p",{attrs:{tabindex:"0"}},[s("strong",[t._v("Alternatively, use the form below")])])])}],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{ref:"contactForm",staticClass:"form form--contact",on:{submit:function(e){return e.preventDefault(),t.handleContactForm(e)}}},[s("div",{staticClass:"row"},[t._m(0),t._m(1),s("div",{staticClass:"col-xs-12 col-md-12"},[s("div",{staticClass:"form__field form__field--antispam"},[s("input",{ref:"antispam",staticClass:"form__input",attrs:{name:"url",type:"text"}}),s("label",{staticClass:"form__label"},[t._v("Leave this empty")])])]),t._m(2)]),s("div",{staticClass:"form__feedback"},[s("div",{staticClass:"form__feedback__success"},[s("IconSuccess",{staticClass:"mb-2"}),s("p",[t._v("Thank you, your message has been sent.")])],1),s("div",{staticClass:"form__feedback__error"},[s("IconError",{staticClass:"mb-4"}),s("p",[t._v("Sorry there was an error, please try again.")]),s("p",[t._v("Or use the details above.")])],1)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-12 col-md-6"},[s("div",{staticClass:"form__field"},[s("input",{staticClass:"form__input",attrs:{name:"user_name",type:"text",required:""}}),s("label",{staticClass:"form__label",attrs:{for:"user_name"}},[t._v("Name")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-12 col-md-6"},[s("div",{staticClass:"form__field"},[s("input",{staticClass:"form__input",attrs:{name:"user_email",type:"email",required:""}}),s("label",{staticClass:"form__label",attrs:{for:"user_email"}},[t._v("Email")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-12 col-md-12"},[s("div",{staticClass:"form__field"},[s("textarea",{staticClass:"form__input",attrs:{name:"user_message",required:""}}),s("label",{staticClass:"form__label",attrs:{for:"user_message"}},[t._v("Message")])]),s("div",{staticClass:"text--center"},[s("button",{staticClass:"btn",attrs:{type:"submit",name:"button"}},[t._v("Send message")])])])}],c=function(t,e){var s=e._c;return s("svg",{staticClass:"icon icon--success",class:e.props.classes,attrs:{fill:e.props.fill,xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 50 50"}},[s("circle",{staticClass:"icon--success__circle",attrs:{cx:"25",cy:"25",r:"24",fill:"none","stroke-width":"2","stroke-miterlimit":"10"}}),s("path",{staticClass:"icon--success__tick",attrs:{fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-miterlimit":"10",d:"M35 20L20.58 34.24l-7.55-7.12"}})])},o=[],l={name:"IconSuccess",props:{fill:{type:String,default:""},classes:{type:String,default:""}}},u=l,d=s("2877"),m=Object(d["a"])(u,c,o,!0,null,null,null),f=m.exports,p=function(t,e){var s=e._c;return s("svg",{staticClass:"icon icon--error",class:e.props.classes,attrs:{fill:e.props.fill,xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 59.1 59.1"}},[s("path",{attrs:{d:"M1 58.1L58.1 1M1 1l57.1 57.1"}}),s("path",{attrs:{d:"M58.1 59.1c-.3 0-.5-.1-.7-.3L29.5 31 1.7 58.8c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l27.8-27.8L.3 1.7C-.1 1.3-.1.7.3.3s1-.4 1.4 0l27.8 27.8L57.4.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4L31 29.5l27.8 27.8c.4.4.4 1 0 1.4-.2.3-.4.4-.7.4z"}})])},v=[],_={name:"IconError",props:{fill:{type:String,default:""},classes:{type:String,default:""}}},h=_,C=Object(d["a"])(h,p,v,!0,null,null,null),g=C.exports,b=s("0f91"),S=s.n(b),y={name:"ContactForm",components:{IconSuccess:f,IconError:g},methods:{handleContactForm:function(t){var e=this;""===this.$refs.antispam.value&&S.a.sendForm("service_4wlqios","template_9hsmtf9",t.target,"user_uNz3QX1BfpjcPFh3h6nJo").then((function(t){e.$refs.contactForm.classList.add("is--successful")}),(function(t){t&&(e.$refs.contactForm.classList.add("is--unsuccessful"),setTimeout((function(){this.$refs.contactForm.reset(),this.$refs.contactForm.classList.remove("is--unsuccessful")}),3e3))}))}}},E=y,w=Object(d["a"])(E,r,i,!1,null,null,null),R=w.exports,x=s("6857"),O={data:function(){return{fields:{contactIntro:[]}}},components:{ContactForm:R},created:function(){this.getContactContent()},mounted:function(){setTimeout((function(){var t=new CustomEvent("pageChange");document.dispatchEvent(t),x["a"].init()}),1500)},methods:{getContactContent:function(){var t=this;this.$prismic.client.getSingle("contact").then((function(e){t.fields.contactIntro=e.data.contact_intro}))}}},L=O,j=(s("7f5d"),Object(d["a"])(L,a,n,!1,null,null,null));e["default"]=j.exports}}]);
//# sourceMappingURL=chunk-2e19c27e.38112e46.js.map