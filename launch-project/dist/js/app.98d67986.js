(function(e){function t(t){for(var a,i,s=t[0],l=t[1],u=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},1284:function(e,t,n){"use strict";var a=n("31a0"),r=n.n(a);r.a},"31a0":function(e,t,n){},"4a14":function(e,t,n){},"4d5d":function(e,t,n){},"4e63":function(e,t,n){"use strict";var a=n("4a14"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app","data-ajaxurl":e.ajaxurl}},[n("LaunchProject",{attrs:{ajaxurl:e.ajaxurl,firstname:e.firstname,lastname:e.lastname,email:e.email,phonenumber:e.phonenumber,organame:e.organame,projectname:e.projectname,existingprojects:e.existingprojects,existingorganisations:e.existingorganisations,urlcgu:e.urlcgu}})],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"launch-project"},[n("h1",[e._v(e._s(e.$t("launch-project.TITLE")))]),n("p",{staticClass:"text-intro"},[e._v(e._s(e.$t("launch-project.TEXT_1")))]),n("p",{staticClass:"text-intro"},[e._v(e._s(e.$t("launch-project.TEXT_2")))]),n("p",{staticClass:"text-intro bold"},[e._v(e._s(e.$t("launch-project.TEXT_3")))]),e.existingprojects&&e.existingprojects.projects.length>0?n("div",[n("p",{staticClass:"alert-existing-projects"},[e._v(" "+e._s(e.$t("launch-project.ALREADY_EXISTING_PROJECTS"))),n("br"),n("ul",e._l(e.existingprojects.projects,(function(t){return n("li",{key:t.id},[n("a",{attrs:{href:t.url,target:"_blank"}},[e._v(e._s(t.name))])])})),0)]),n("p",[e._v(" "+e._s(e.$t("launch-project.CREATE_NEW_PROJECT_INDEED"))+" ")])]):e._e(),n("WDGForm",{attrs:{name:"form-launch-project",action:e.ajaxurl,onSubmitEvent:e.formSubmit,hasFiles:!1,errorFeedback:e.errorFeedback,successFeedback:e.successFeedback}},[n("WDGInput",{attrs:{placeholder:e.$t("common.FIRSTNAME_PLACEHOLDER"),id:"firstname",name:"firstname",multiline:!1,validationRule:"required|name",value:e.firstname,valueReturn:e.firstname},on:{"update:valueReturn":function(t){e.firstname=t},"update:value-return":function(t){e.firstname=t}}},[e._t("default",[e._v(e._s(e.$t("common.FIRSTNAME")))],{slot:"label"})],2),n("WDGInput",{attrs:{placeholder:e.$t("common.LASTNAME_PLACEHOLDER"),id:"lastname",name:"lastname",multiline:!1,validationRule:"required|name",value:e.lastname,valueReturn:e.lastname},on:{"update:valueReturn":function(t){e.lastname=t},"update:value-return":function(t){e.lastname=t}}},[e._t("default",[e._v(e._s(e.$t("common.LASTNAME")))],{slot:"label"})],2),n("WDGInput",{attrs:{placeholder:e.$t("common.PHONE_NUMBER_PLACEHOLDER"),id:"phone_number",name:"phone_number",multiline:!1,validationRule:"required|phone_number",value:e.phonenumber,valueReturn:e.phonenumber},on:{"update:valueReturn":function(t){e.phonenumber=t},"update:value-return":function(t){e.phonenumber=t}}},[e._t("default",[e._v(e._s(e.$t("common.PHONE_NUMBER")))],{slot:"label"})],2),e.isExistingOrga?n("div",[n("WDGSelect",{attrs:{id:"company_name",name:"company_name",label:e.$t("common.ORGA_NAME"),value:e.firstorga_id,isInline:!1,hasFilter:!0,validationRule:"required",optionItems:e.existingorganisations.organisations,valueReturn:e.select_organame},on:{"update:valueReturn":function(t){e.select_organame=t},"update:value-return":function(t){e.select_organame=t}}})],1):e._e(),e.isExistingOrga&&"new_orga"!==e.select_organame?n("div",[n("br")]):n("div",[n("WDGInput",{attrs:{placeholder:e.$t("common.ORGA_NAME_PLACEHOLDER"),id:"company_name",name:"company_name",multiline:!1,validationRule:"required",value:e.organame,valueReturn:e.new_organame},on:{"update:valueReturn":function(t){e.new_organame=t},"update:value-return":function(t){e.new_organame=t}}},[e.isExistingOrga?e._e():e._t("default",[e._v(e._s(e.$t("common.ORGA_NAME")))],{slot:"label"})],2),n("WDGInput",{attrs:{placeholder:e.$t("common.EMAIL_ADDRESS_PLACEHOLDER"),id:"email",name:"email",multiline:!1,validationRule:"required|email",value:e.orgaemail,valueReturn:e.new_orgaemail},on:{"update:valueReturn":function(t){e.new_orgaemail=t},"update:value-return":function(t){e.new_orgaemail=t}}},[e._t("default",[e._v(e._s(e.$t("common.ORGA_EMAIL_ADDRESS")))],{slot:"label"}),e._t("default",[e._v(e._s(e.$t("launch-project.ORGA_MAIL_DIFFERENT")))],{slot:"comment"})],2)],1),n("WDGInput",{attrs:{placeholder:e.$t("launch-project.PROJECT_NAME_PLACEHOLDER"),id:"project_name",name:"project_name",multiline:!1,validationRule:"required",value:e.projectname,valueReturn:e.projectname},on:{"update:valueReturn":function(t){e.projectname=t},"update:value-return":function(t){e.projectname=t}}},[e._t("default",[e._v(e._s(e.$t("launch-project.PROJECT_NAME")))],{slot:"label"})],2),n("WDGCheckbox",{attrs:{id:"validate",optional:!1}},[e._t("default",[n("a",{attrs:{href:e.urlcgu,target:"_blank"}},[e._v(e._s(e.$t("launch-project.VALIDATE_CONDITIONS")))])],{slot:"label"})],2),n("div",{staticClass:"required-fields"},[e._v(" * "+e._s(e.$t("common.REQUIRED_FIELDS"))+" ")]),n("WDGButton",{attrs:{color:"red",disabled:e.loading}},[e._t("default",[e._v(e._s(e.$t("common.VALIDATE")))],{slot:"label"})],2)],1)],1)},s=[],l=(n("c740"),n("d3b7"),n("bf19"),n("4160"),n("ac1f"),n("466d"),n("159b"),n("ddb0"),n("a925"));function u(){var e=n("9fb2"),t={};return e.keys().forEach((function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var r=a[1];t[r]=e(n)}})),t}a["a"].use(l["a"]);var c=new l["a"]({locale:"fr",fallbackLocale:"en",messages:u()}),d=n("bc3a"),p=n.n(d),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"wdg-form",attrs:{id:e.name,name:e.name,action:e.action,enctype:e.hasFiles?"multipart/form-data":void 0,method:"POST"},on:{submit:function(t){return t.preventDefault(),e.onSubmitEvent(t)}}},[""!==e.errorFeedback?n("span",[n("span",{staticClass:"wdg-message error"},[e._v(e._s(e.errorFeedback))]),n("br")]):e._e(),""!==e.successFeedback?n("span",[n("span",{staticClass:"wdg-message success"},[e._v(e._s(e.successFeedback))]),n("br")]):e._e(),e._t("default")],2)},_=[],E=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("ade3")),v=n("9856"),R=n("4c38");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(E["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Object(v["b"])("alpha",R["a"]),Object(v["b"])("numeric",R["c"]),Object(v["b"])("required",O({},R["d"],{message:c.t("validations.REQUIRED")})),Object(v["b"])("email",O({},R["b"],{message:c.t("validations.EMAIL")})),Object(v["b"])("name",(function(e){var t=/^([a-zA-Z\u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/;return!!e.match(t)||c.t("validations.NAME")})),Object(v["b"])("phone_number",(function(e){var t=/^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[.\-\s]?\d\d){4}$/;return!!e.match(t)||c.t("validations.PHONE_NUMBER")})),Object(v["d"])("lazy"),Object(v["c"])("fr");var g={name:"WDGForm",props:{name:{type:String,default:""},action:{type:String,default:""},onSubmitEvent:{type:Function},hasFiles:{type:Boolean,default:!1},errorFeedback:{type:String,default:""},successFeedback:{type:String,default:""}}},T=g,h=(n("a78f"),n("2877")),b=Object(h["a"])(T,m,_,!1,null,null,null),A=b.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:!e.honeypot,expression:"!honeypot"}],staticClass:"wdg-input",class:e.customStyle},[n("label",{attrs:{for:e.id}},[e._t("label"),e.showRequiredStar?n("span",[e._v(" *")]):e._e()],2),e.showComment?n("div",{staticClass:"wdg-input-comment"},[e._t("comment")],2):e._e(),n("ValidationProvider",{attrs:{rules:e.validationRule},scopedSlots:e._u([{key:"default",fn:function(t){return[e.validationRule&&t.errors[0]?n("span",{staticClass:"wdg-message error"},[e._v(" "+e._s(t.errors[0])+" ")]):e._e(),"checkbox"!==e.type||e.multiline?"radio"!==e.type||e.multiline?e.multiline?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.valueReturn,expression:"valueReturn"}],attrs:{id:e.id,disabled:e.disabled,required:e.isRequired},domProps:{value:e.valueReturn},on:{input:[function(t){t.target.composing||(e.valueReturn=t.target.value)},e.onInputLocalEvent]}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.valueReturn,expression:"valueReturn"}],attrs:{id:e.id,placeholder:e.placeholder,disabled:e.disabled,required:e.isRequired,type:e.type},domProps:{value:e.valueReturn},on:{input:[function(t){t.target.composing||(e.valueReturn=t.target.value)},e.onInputLocalEvent]}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.valueReturn,expression:"valueReturn"}],attrs:{id:e.id,placeholder:e.placeholder,disabled:e.disabled,required:e.isRequired,type:"radio"},domProps:{checked:e._q(e.valueReturn,null)},on:{input:e.onInputLocalEvent,change:function(t){e.valueReturn=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.valueReturn,expression:"valueReturn"}],attrs:{id:e.id,placeholder:e.placeholder,disabled:e.disabled,required:e.isRequired,type:"checkbox"},domProps:{checked:Array.isArray(e.valueReturn)?e._i(e.valueReturn,null)>-1:e.valueReturn},on:{input:e.onInputLocalEvent,change:function(t){var n=e.valueReturn,a=t.target,r=!!a.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);a.checked?i<0&&(e.valueReturn=n.concat([o])):i>-1&&(e.valueReturn=n.slice(0,i).concat(n.slice(i+1)))}else e.valueReturn=r}}})]}}])})],1)},N=[],I=(n("c975"),n("a9e3"),{name:"WDGInput",components:{ValidationProvider:v["a"]},props:{id:{type:String,default:null},name:{type:String,default:null},value:{type:[String,Number],default:null},type:{type:String,default:"text"},customStyle:{type:String,default:""},placeholder:{type:String,default:"Default placeholder"},multiline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},honeypot:{type:Boolean,default:!1},validationRule:{type:String,default:""},inputEvent:Function},data:function(){return{valueReturn:this.value,isRequired:this.validationRule.indexOf("required")>-1}},methods:{onInputLocalEvent:function(){this.$emit("update:valueReturn",this.valueReturn)}},computed:{showRequiredStar:function(){return this.isRequired&&!!this.$slots.label},showComment:function(){return!!this.$slots.comment}}}),C=I,y=(n("1284"),Object(h["a"])(C,S,N,!1,null,null,null)),j=y.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wdg-checkbox"},[n("label",[e._t("label"),e.isRequired?n("span",[e._v(" *")]):e._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:e.valueReturn,expression:"valueReturn"}],attrs:{type:"checkbox",id:e.id,disabled:e.disabled,required:!e.optional},domProps:{checked:Array.isArray(e.valueReturn)?e._i(e.valueReturn,null)>-1:e.valueReturn},on:{change:[function(t){var n=e.valueReturn,a=t.target,r=!!a.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);a.checked?i<0&&(e.valueReturn=n.concat([o])):i>-1&&(e.valueReturn=n.slice(0,i).concat(n.slice(i+1)))}else e.valueReturn=r},e.onChangeLocalEvent]}}),n("span",{staticClass:"checkmark"})],2)])},D=[],M={name:"WDGCheckbox",props:{id:{type:String,default:null},name:{type:String,default:null},value:{type:[Boolean],default:!1},optional:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},validationRule:{type:String,default:""},validation:Function},data:function(){return{valueReturn:this.value,isRequired:this.validationRule.indexOf("required")>-1}},methods:{onChangeLocalEvent:function(){this.$emit("update:valueReturn",this.valueReturn)}}},L=M,x=(n("7482"),Object(h["a"])(L,P,D,!1,null,null,null)),F=x.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wdg-button"},[n("button",{class:e.color,attrs:{type:e.type,id:e.id,disabled:e.disabled},on:{click:e.onClickLocalEvent}},[e._t("label")],2)])},G=[],k={name:"WDGButton",props:{id:{type:String,default:null},type:{type:String,default:"submit"},color:{type:String,default:"red"},name:{type:String,default:null},disabled:{type:Boolean,default:!1},clickEvent:Function},computed:{},methods:{onClickLocalEvent:function(){void 0!==this.clickEvent&&this.clickEvent()}}},U=k,q=(n("9460"),Object(h["a"])(U,w,G,!1,null,null,null)),$=q.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wdg-select",class:e.customStyle},[""!=e.label?n("label",{attrs:{for:e.id}},[e._v(e._s(e.label))]):e._e(),n("select",{directives:[{name:"model",rawName:"v-model",value:e.valueReturn,expression:"valueReturn"}],attrs:{id:e.id,name:e.name},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.valueReturn=t.target.multiple?n:n[0]},e.onSelectedEvent]}},e._l(e.optionItems,(function(t){return n("option",{key:t.Id,domProps:{value:t.Id}},[e._v(e._s(t.Text))])})),0)])},W=[],H={name:"WDGSelect",props:{id:{type:String,default:""},label:{type:String,default:""},name:{type:String,default:""},value:{type:String,default:""},customStyle:{type:String,default:""},isInline:{type:Boolean,default:!1},hasFilter:{type:Boolean,default:!1},optionItems:Array},data:function(){return{valueReturn:this.value}},methods:{onSelectedEvent:function(){this.$emit("update:valueReturn",this.valueReturn)}}},J=H,B=(n("4e63"),Object(h["a"])(J,X,W,!1,null,null,null)),z=B.exports,V={name:"LaunchProject",components:{WDGForm:A,WDGInput:j,WDGCheckbox:F,WDGButton:$,WDGSelect:z},props:{ajaxurl:{type:String,default:""},firstname:{type:String,default:""},lastname:{type:String,default:""},phonenumber:{type:String,default:""},projectname:{type:String,default:""},urlcgu:{type:String,default:""},existingprojects:{type:Object,default:null},existingorganisations:{type:Object,default:null}},data:function(){return{loading:!1,errorFeedback:"",successFeedback:"",new_organame:"",new_orgaemail:"",isExistingOrga:!1,firstorga_id:null,organame:"",orgaemail:"",select_organame:""}},created:function(){this.existingorganisations&&this.existingorganisations.organisations.length>0&&(this.isExistingOrga=!0,this.firstorga_id=this.existingorganisations.organisations[0].Id,this.select_organame=this.existingorganisations.organisations[0].Text)},methods:{formSubmit:function(){var e=this;this.loading=!0;var t=new FormData;if(t.append("action","create_project_form"),t.append("firstname",this.firstname),t.append("lastname",this.lastname),t.append("phone",this.phonenumber),this.isExistingOrga)if("new_orga"===this.select_organame)t.append("company-name",this.select_organame),t.append("new-company-name",this.new_organame),t.append("email-organization",this.new_orgaemail);else{var n=this.existingorganisations.organisations.findIndex((function(t){return t.Text===e.select_organame}));t.append("company-name",this.existingorganisations.organisations[n].Id),t.append("email-organization",this.existingorganisations.organisations[n].Mail)}else t.append("company-name",this.new_organame),t.append("email-organization",this.new_orgaemail);t.append("project-name",this.projectname),t.append("project-terms","true"),p.a.post(this.ajaxurl,t).then((function(t){var n=t.data;"1"===n.has_error?(e.errorFeedback=Y(n.error_str,n.errors_create_orga),e.successFeedback="",console.log("ERROR  "+n.error_str+"--"+n.errors_create_orga),window.scrollTo(0,0)):(e.errorFeedback="",e.successFeedback="Redirection vers "+n.url_redirect,window.location=n.url_redirect)})).catch((function(t){t.response?(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers)):t.request?console.log(t.request):console.log("Error",t.message),console.log(t.toJSON()),console.log(t.config),e.errorFeedback=Y("request_error"),e.successFeedback="",window.scrollTo(0,0)})).finally((function(){e.loading=!1}))}}};function Y(e,t){switch(e){case"errors_create_orga":return t;case"empty_or_wrong_format_field":return c.t("launch-project.EMPTY_OR_WRONG_FORMAT_FIELD");case"request_error":return c.t("launch-project.REQUEST_ERROR");default:return e}}var Z=V,Q=(n("bca6"),Object(h["a"])(Z,i,s,!1,null,null,null)),K=Q.exports,ee=document.querySelector("#app"),te={name:"app",data:function(){return{ajaxurl:"",firstname:"",lastname:"",phonenumber:"",organame:"",email:"",projectname:"",existingorganisations:"",urlcgu:"",existingprojects:""}},components:{LaunchProject:K},created:function(){this.ajaxurl=ee.dataset.ajaxurl,this.firstname=ee.dataset.firstname,this.lastname=ee.dataset.lastname,this.phonenumber=ee.dataset.phonenumber,this.email=ee.dataset.email,this.organame=ee.dataset.organame,this.projectname=ee.dataset.projectname,ee.dataset.existingprojects&&(this.existingprojects=JSON.parse(ee.dataset.existingprojects)),ee.dataset.existingorganisations&&(this.existingorganisations=JSON.parse(ee.dataset.existingorganisations)),this.urlcgu=ee.dataset.urlcgu}},ne=te,ae=(n("034f"),Object(h["a"])(ne,r,o,!1,null,null,null)),re=ae.exports;a["a"].config.productionTip=!1,new a["a"]({i18n:c,render:function(e){return e(re)}}).$mount("#app")},"61dc":function(e,t,n){},7482:function(e,t,n){"use strict";var a=n("e00a"),r=n.n(a);r.a},"763d":function(e,t,n){},"85ec":function(e,t,n){},9460:function(e,t,n){"use strict";var a=n("763d"),r=n.n(a);r.a},"9fb2":function(e,t,n){var a={"./en.json":"adf0","./fr.json":"f253"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="9fb2"},a78f:function(e,t,n){"use strict";var a=n("4d5d"),r=n.n(a);r.a},adf0:function(e){e.exports=JSON.parse('{"message":"hello i18n !!","validations":{"REQUIRED":"This field is required","NAME":"This field is not valid","EMAIL":"This email is not valid","PHONE_NUMBER":"This phone number is not valid"}}')},bca6:function(e,t,n){"use strict";var a=n("61dc"),r=n.n(a);r.a},e00a:function(e,t,n){},f253:function(e){e.exports=JSON.parse('{"common":{"EMAIL_ADDRESS":"Adresse e-mail","EMAIL_ADDRESS_PLACEHOLDER":"exemple@monprojet.com","PASSWORD":"Mot de passe","FIRSTNAME":"Prénom","FIRSTNAME_PLACEHOLDER":"Mon prénom","LASTNAME":"Nom de famille","LASTNAME_PLACEHOLDER":"Mon nom de famille","PHONE_NUMBER":"Téléphone mobile","PHONE_NUMBER_PLACEHOLDER":"Mon téléphone mobile","ORGA_EMAIL_ADDRESS":"Adresse mail de la structure","ORGA_NAME":"Nom de l\'entreprise","ORGA_NAME_PLACEHOLDER":"Nom de mon entreprise","VALIDATE":"Valider","REQUEST_ERROR":"Problème d\'envoi de requête","REQUIRED_FIELDS":"Champs obligatoires","SEND":"Envoyer"},"validations":{"REQUIRED":"Ce champ est obligatoire","NAME":"Ce champ n\'est pas valide","EMAIL":"Cet email n\'est pas valide","PHONE_NUMBER":"Ce numéro de téléphone n\'est pas valide"},"signin-signup":{"FORGOTTEN_PASSWORD":"Mot de passe oublié","PASSWORD_CONFIRMATION":"Confirmation du mot de passe","REMEMBER_ME":"Se souvenir de moi","I_ACCEPT_THE":"J\'accepte","GENERAL_USE_TERMS":"conditions générales d\'utilisation","CONNECTION":"Connexion","CONNECT_TO_FACEBOOK":"Se connecter avec Facebook","CREATE_MY_ACCOUNT":"Créer mon compte","I_ALREADY_HAVE_AN_ACCOUNT":"J\'ai déjà un compte","SIGNIN_SIGNUP_ERROR_TYPE_ERROR":"Erreur de saisie.","SIGNIN_ERROR_EMPTY":"Merci de saisir votre identifiant et votre mot de passe.","SIGNIN_ERROR_NOT_FOUND":"Cet utilisateur n\'existe pas.","SIGNIN_ERROR_INCORRECT_PASSWORD":"Le mot de passe saisi ne correspond pas.","SIGNUP_ERROR_EMAIL_EMPTY":"L\'adresse e-mail doit être définie.","SIGNUP_ERROR_EMAIL_FOUND":"Cette adresse e-mail est déjà utilisée.","SIGNUP_ERROR_EMAIL_INCORRECT":"Cette adresse e-mail n\'est pas valide.","SIGNUP_ERROR_FIRSTNAME_EMPTY":"Le prénom doit être défini.","SIGNUP_ERROR_LASTNAME_EMPTY":"Le nom de famille doit être défini.","SIGNUP_ERROR_PASSWORD_EMPTY":"Avez-vous saisi deux fois le mot de passe ?","SIGNUP_ERROR_PASSWORD_NOT_MATCHING":"Les mots de passe saisis ne correspondent pas.","SIGNUP_ERROR_TERMS":"Merci de cocher la case pour accepter les conditions générales d\'utilisation.","SIGNUP_ERROR_UNDEFINED":"Problème de création d\'utilisateur.","SIGNUP_ERROR_ROBOT":"Merci de cocher la case confirmant que vous n\'êtes pas un robot."},"launch-project":{"TITLE":"Lancement de levée de fonds","TEXT_1":"Félicitations, votre dossier a été validé par WE DO GOOD !","TEXT_2":"Prêt-e pour la suite ?","TEXT_3":"Attention, la levée de fonds doit être configurée par le représentant ou la représentante légal-e de l’entreprise avec son compte personnel, qui pourra ensuite inviter le reste de l’équipe.","ALREADY_EXISTING_PROJECTS":"Vous avez déjà créé un (ou des) projet(s) sur la plateforme précédemment :","CREATE_NEW_PROJECT_INDEED":"Si vous souhaitez tout de même créer un nouveau projet, veuillez remplir le formulaire ci-dessous.","ORGA_MAIL_DIFFERENT":"Cette adresse doit être différente de celle de votre compte personnel, utilisez une adresse telle que contact@votre-entreprise.fr","PROJECT_NAME":"Nom du projet","PROJECT_NAME_PLACEHOLDER":"Nom du projet","PROJECT_DESCRIPTION":"Description du projet","PROJECT_DESCRIPTION_PLACEHOLDER":"Description du projet","VALIDATE_CONDITIONS":"Je valide les conditions particulières","EMPTY_OR_WRONG_FORMAT_FIELD":"Un des champs est vide ou n\'est pas au bon format","REQUEST_ERROR":"Problème de connexion (FX84R83)"},"project-setup":{"TITLE":"Mon éligibilité aux royalties","PICTO_TITLE_BALLOON":"Mongolfière","PICTO_TITLE_TIMER":"Chronomètre","MINUTE":"minute | minutes","CONTINUE":"Continuer","START":"Commencer","SAVE_PROJECT":"Enregistrer mon projet pour plus tard","SAVING_PROJECT":"Enregistrement du projet en cours","SAVED_PROJECT":"Projet enregistré","footer":{"SUCCESS_TEXT_1":"82%","SUCCESS_TEXT_2":"de levées de fonds réussies","TIME_TEXT_1":"1 à 4 mois","TIME_TEXT_2":"pour débloquer les fonds"},"intro":{"TITLE":"Mon projet est-il éligible ?","MASCOT_TEXT_1":"Vous aurez besoin:","MASCOT_TEXT_2":"De votre chiffre d\'affaires prévisionnel","MASCOT_TEXT_3":"De votre niveau de marge","MASCOT_TEXT_4":"De connaître votre besoin de financement","TEXT_1":"Résultat immédiat envoyé par mail.","TEXT_2":"Possibilité de prise de rendez-vous pour démarrer la levée de fonds au plus vite !","TEXT_3":"Réponse en env. 5 min.","TEXT_4":"Vous pouvez enregistrer, quitter, et revenir à tout moment !","the-project-link-send":{"TITLE":"Reprendre un test précédent","TEXT":"Veuillez renseigner l\'email précédemment utilisé pour commencer votre test. Si un ou plusieurs tests sont en cours, vous recevrez les liens d\'accès par mail.","EMAIL_SENT":"L\'email a bien été envoyé.","ERROR_EMAIL_NO_PROJECT":"Aucun test n\'a été effectué avec cette adresse.","ERROR_EMAIL_INCORRECT":"Cette adresse e-mail n\'est pas valide.","ERROR_EMAIL_EMPTY":"L\'adresse e-mail doit être définie."}},"project-infos":{"TITLE":"Mon projet","SUBTITLE":"Tous les champs sont obligatoires","MASCOT_TEXT_1":"Vos informations ne sont pas transmises à des tiers et restent confidentielles.","MASCOT_TEXT_2":"Une fois que votre e-mail est renseigné, vous pouvez reprendre votre test à tout moment.","FORM_TEXT_ORGANIZATION_TYPE":"Ma structure est","FORM_TEXT_ORGANIZATION_NOT_CREATED_NAME":"sous le nom de","FORM_TEXT_ORGANIZATION_CREATED_NAME":"du nom de","FORM_TEXT_ORGANIZATION_ID":"immatriculée","FORM_TEXT_AMOUNT_NEEDED":"J\'ai besoin de","FORM_TEXT_ORGANIZATION_DESCRIPTION":"pour mon activité de","FORM_TEXT_SOURCE_PROSPECT":"J\'ai connu WE DO GOOD via","FORM_TEXT_USER_NAME":"Je m\'appelle","FORM_TEXT_USER_EMAIL":"vous pouvez me joindre à l\'adresse mail","FORM_TEXT_USER_PHONE":"et au numéro de téléphone","PLACEHOLDER_PROJECT_NAME":"Mon projet","PLACEHOLDER_PROJECT_ID":"Numéro SIREN","PLACEHOLDER_PROJECT_DESCRIPTION":"Mon activité...","PLACEHOLDER_USER_NAME":"Prénom Nom","PLACEHOLDER_USER_EMAIL":"contact@mon-projet.fr","PLACEHOLDER_USER_PHONE":"06 06 06 06 06","ORGANIZATION_TYPE_LIST_NOT_CREATED":"En cours de création","ORGANIZATION_TYPE_LIST_SAS":"Une SAS"}}}')}});
//# sourceMappingURL=app.98d67986.js.map