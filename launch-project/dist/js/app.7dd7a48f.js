(function(e){function t(t){for(var a,i,l=t[0],s=t[1],u=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},1284:function(e,t,n){"use strict";var a=n("31a0"),r=n.n(a);r.a},"31a0":function(e,t,n){},"4a14":function(e,t,n){},"4d5d":function(e,t,n){},"4e63":function(e,t,n){"use strict";var a=n("4a14"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app","data-ajaxurl":e.ajaxUrl}},[n("LaunchProject",{attrs:{ajaxUrl:e.ajaxUrl,firstname:e.firstname,lastname:e.lastname,email:e.email,phonenumber:e.phonenumber,organame:e.organame,projectname:e.projectname,projectdescription:e.projectdescription,existingprojects:e.existingprojects,existingorganisations:e.existingorganisations,urlcgu:e.urlcgu}})],1)},o=[],i=(n("4160"),n("d3b7"),n("ac1f"),n("466d"),n("159b"),n("ddb0"),n("a925"));function l(){var e=n("9fb2"),t={};return e.keys().forEach((function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var r=a[1];t[r]=e(n)}})),t}a["a"].use(i["a"]);var s=new i["a"]({locale:"fr",fallbackLocale:"en",messages:l()}),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"launch-project"},[n("h1",[e._v(e._s(e.$t("launch-project.TITLE")))]),e.existingprojects&&e.existingprojects.projects.length>0?n("div",[n("p",[e._v(" "+e._s(e.$t("launch-project.ALREADY_EXISTING_PROJECTS"))),n("br"),n("ul",e._l(e.existingprojects.projects,(function(t){return n("li",{key:t.id},[n("a",{attrs:{href:t.url,target:"_blank"}},[e._v(e._s(t.name))])])})),0)]),n("p",[e._v(" "+e._s(e.$t("launch-project.CREATE_NEW_PROJECT_INDEED"))+" ")])]):e._e(),n("WDGForm",{attrs:{name:"form-launch-project",action:e.ajaxUrl,onSubmitEvent:e.formSubmit,hasFiles:!1,errorFeedback:e.errorFeedback,successFeedback:e.successFeedback}},[n("WDGInput",{attrs:{placeholder:e.$t("common.FIRSTNAME_PLACEHOLDER"),id:"firstname",name:"firstname",multiline:!1,validationRule:"required|name",value:e.firstname}},[e._t("default",[e._v(e._s(e.$t("common.FIRSTNAME")))],{slot:"label"})],2),n("WDGInput",{attrs:{placeholder:e.$t("common.LASTNAME_PLACEHOLDER"),id:"lastname",name:"lastname",multiline:!1,validationRule:"required|name",value:e.lastname}},[e._t("default",[e._v(e._s(e.$t("common.LASTNAME")))],{slot:"label"})],2),n("WDGInput",{attrs:{placeholder:e.$t("common.PHONE_NUMBER_PLACEHOLDER"),id:"phone_number",name:"phone_number",multiline:!1,validationRule:"required|phone_number",value:e.phonenumber}},[e._t("default",[e._v(e._s(e.$t("common.PHONE_NUMBER")))],{slot:"label"})],2),e.existingorganisations&&e.existingorganisations.organisations.length>0?n("div",[n("WDGSelect",{attrs:{id:"company_name",name:"company_name",label:e.$t("common.ORGA_NAME"),value:e.firstorga_id,isInline:!1,hasFilter:!0,validationRule:"required",optionItems:e.existingorganisations.organisations,valueReturn:e.organame},on:{"update:valueReturn":function(t){e.organame=t},"update:value-return":function(t){e.organame=t}}}),"new_orga"===e.organame?n("div",[n("WDGInput",{attrs:{placeholder:e.$t("common.ORGA_NAME_PLACEHOLDER"),id:"company_name",name:"company_name",multiline:!1}})],1):n("div",[n("br")])],1):n("div",[n("WDGInput",{attrs:{placeholder:e.$t("common.ORGA_NAME_PLACEHOLDER"),id:"company_name",name:"company_name",multiline:!1,validationRule:"required",value:e.organame}},[e._t("default",[e._v(e._s(e.$t("common.ORGA_NAME")))],{slot:"label"})],2)],1),n("WDGInput",{attrs:{placeholder:e.$t("common.EMAIL_ADDRESS_PLACEHOLDER"),id:"email",name:"email",multiline:!1,validationRule:"required|email",value:e.email,comment:e.$t("launch-project.ORGA_MAIL_DIFFERENT")}},[e._t("default",[e._v(e._s(e.$t("common.EMAIL_ADDRESS")))],{slot:"label"})],2),n("WDGInput",{attrs:{placeholder:e.$t("launch-project.PROJECT_NAME_PLACEHOLDER"),id:"project_name",name:"project_name",multiline:!1,validationRule:"required",value:e.projectname}},[e._t("default",[e._v(e._s(e.$t("launch-project.PROJECT_NAME")))],{slot:"label"})],2),n("WDGInput",{attrs:{placeholder:e.$t("launch-project.PROJECT_DESCRIPTION_PLACEHOLDER"),id:"project_description",name:"project_description",multiline:!0,validationRule:"required",value:e.projectdescription}},[e._t("default",[e._v(e._s(e.$t("launch-project.PROJECT_DESCRIPTION")))],{slot:"label"})],2),n("WDGCheckbox",{attrs:{id:"validate",optional:!1}},[e._t("default",[n("a",{attrs:{href:e.urlcgu,target:"_blank"}},[e._v(e._s(e.$t("launch-project.VALIDATE_CONDITIONS")))])],{slot:"label"})],2),n("div",{staticClass:"required-fields"},[e._v(" * "+e._s(e.$t("common.REQUIRED_FIELDS"))+" ")]),n("WDGButton",{attrs:{color:"red",disabled:e.loading}},[e._t("default",[e._v(e._s(e.$t("common.VALIDATE")))],{slot:"label"})],2)],1)],1)},c=[],d=(n("bf19"),n("bc3a")),p=n.n(d),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"wdg-form",attrs:{id:e.name,name:e.name,action:e.action,enctype:e.hasFiles?"multipart/form-data":void 0,method:"POST"},on:{submit:function(t){return t.preventDefault(),e.onSubmitEvent(t)}}},[""!==e.errorFeedback?n("span",[n("span",{staticClass:"wdg-message error"},[e._v(e._s(e.errorFeedback))]),n("br")]):e._e(),""!==e.successFeedback?n("span",[n("span",{staticClass:"wdg-message success"},[e._v(e._s(e.successFeedback))]),n("br")]):e._e(),e._t("default")],2)},_=[],f=n("9856"),v=n("4c38");Object(f["b"])("alpha",v["a"]),Object(f["b"])("email",v["b"]),Object(f["b"])("numeric",v["c"]),Object(f["b"])("required",v["d"]),Object(f["b"])("test",(function(e){return"test"===e||"Ce champ doit contenir test"})),Object(f["b"])("name",(function(e){var t=/^([a-zA-Z\u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/;return!!e.match(t)||"Ce champ n'est pas valide"})),Object(f["b"])("phone_number",(function(e){var t=/^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[.\-\s]?\d\d){4}$/;return!!e.match(t)||"Ce champ n'est pas valide"})),Object(f["c"])("fr");var E={name:"WDGForm",props:{name:{type:String,default:""},action:{type:String,default:""},onSubmitEvent:{type:Function},hasFiles:{type:Boolean,default:!1},errorFeedback:{type:String,default:""},successFeedback:{type:String,default:""}}},R=E,h=(n("a78f"),n("2877")),g=Object(h["a"])(R,m,_,!1,null,null,null),b=g.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:!e.honeypot,expression:"!honeypot"}],staticClass:"wdg-input",class:{inline:e.isInline}},[n("label",{attrs:{for:e.id}},[e._t("label"),e.isRequired?n("span",[e._v(" *")]):e._e()],2),e._t("comment"),n("ValidationProvider",{attrs:{rules:e.validationRule},scopedSlots:e._u([{key:"default",fn:function(t){return[e.validationRule&&t.errors[0]?n("span",{staticClass:"wdg-message error"},[e._v(" "+e._s(t.errors[0])+" ")]):e._e(),"checkbox"!==e.type||e.multiline?"radio"!==e.type||e.multiline?e.multiline?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.valueReturn,expression:"valueReturn"}],attrs:{id:e.id,disabled:e.disabled,required:e.isRequired},domProps:{value:e.valueReturn},on:{input:[function(t){t.target.composing||(e.valueReturn=t.target.value)},e.onInputLocalEvent]}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.valueReturn,expression:"valueReturn"}],attrs:{id:e.id,placeholder:e.placeholder,disabled:e.disabled,required:e.isRequired,type:e.type},domProps:{value:e.valueReturn},on:{input:[function(t){t.target.composing||(e.valueReturn=t.target.value)},e.onInputLocalEvent]}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.valueReturn,expression:"valueReturn"}],attrs:{id:e.id,placeholder:e.placeholder,disabled:e.disabled,required:e.isRequired,type:"radio"},domProps:{checked:e._q(e.valueReturn,null)},on:{input:e.onInputLocalEvent,change:function(t){e.valueReturn=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.valueReturn,expression:"valueReturn"}],attrs:{id:e.id,placeholder:e.placeholder,disabled:e.disabled,required:e.isRequired,type:"checkbox"},domProps:{checked:Array.isArray(e.valueReturn)?e._i(e.valueReturn,null)>-1:e.valueReturn},on:{input:e.onInputLocalEvent,change:function(t){var n=e.valueReturn,a=t.target,r=!!a.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);a.checked?i<0&&(e.valueReturn=n.concat([o])):i>-1&&(e.valueReturn=n.slice(0,i).concat(n.slice(i+1)))}else e.valueReturn=r}}})]}}])})],2)},S=[],A=(n("c975"),n("a9e3"),{name:"WDGInput",components:{ValidationProvider:f["a"]},props:{id:{type:String,default:null},name:{type:String,default:null},value:{type:[String,Number],default:null},type:{type:String,default:"text"},placeholder:{type:String,default:"Default placeholder"},multiline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},isInline:{type:Boolean,default:!1},honeypot:{type:Boolean,default:!1},validationRule:{type:String,default:""},inputEvent:Function},data:function(){return{valueReturn:this.value,isRequired:this.validationRule.indexOf("required")>-1}},methods:{onInputLocalEvent:function(){this.$emit("update:valueReturn",this.valueReturn)}}}),I=A,N=(n("1284"),Object(h["a"])(I,O,S,!1,null,null,null)),j=N.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wdg-checkbox"},[n("label",[e._t("label"),e.isRequired?n("span",[e._v(" *")]):e._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:e.valueReturn,expression:"valueReturn"}],attrs:{type:"checkbox",id:e.id,disabled:e.disabled,required:!e.optional},domProps:{checked:Array.isArray(e.valueReturn)?e._i(e.valueReturn,null)>-1:e.valueReturn},on:{change:[function(t){var n=e.valueReturn,a=t.target,r=!!a.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);a.checked?i<0&&(e.valueReturn=n.concat([o])):i>-1&&(e.valueReturn=n.slice(0,i).concat(n.slice(i+1)))}else e.valueReturn=r},e.onChangeLocalEvent]}}),n("span",{staticClass:"checkmark"})],2)])},C=[],D={name:"WDGCheckbox",props:{id:{type:String,default:null},name:{type:String,default:null},value:{type:[Boolean],default:!1},optional:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},validationRule:{type:String,default:""},validation:Function},data:function(){return{valueReturn:this.value,isRequired:this.validationRule.indexOf("required")>-1}},methods:{onChangeLocalEvent:function(){this.$emit("update:valueReturn",this.valueReturn)}}},T=D,L=Object(h["a"])(T,y,C,!1,null,null,null),P=L.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wdg-button"},[n("button",{class:e.color,attrs:{type:e.type,id:e.id,disabled:e.disabled},on:{click:e.onClickLocalEvent}},[e._t("label")],2)])},M=[],F={name:"WDGButton",props:{id:{type:String,default:null},type:{type:String,default:"submit"},color:{type:String,default:"red"},name:{type:String,default:null},disabled:{type:Boolean,default:!1},clickEvent:Function},computed:{},methods:{onClickLocalEvent:function(){void 0!==this.clickEvent&&this.clickEvent()}}},k=F,G=(n("9460"),Object(h["a"])(k,x,M,!1,null,null,null)),U=G.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my-select",class:{inline:e.isInline}},[""!=e.label?n("label",{attrs:{for:e.id}},[e._v(e._s(e.label))]):e._e(),n("select",{directives:[{name:"model",rawName:"v-model",value:e.valueReturn,expression:"valueReturn"}],attrs:{id:e.id,name:e.name},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.valueReturn=t.target.multiple?n:n[0]},e.onSelectedEvent]}},e._l(e.optionItems,(function(t){return n("option",{key:t.Id,domProps:{value:t.Id}},[e._v(e._s(t.Text))])})),0)])},w=[],q={name:"WDGSelect",props:{id:String,label:String,name:String,value:String,isInline:{type:Boolean,default:!1},hasFilter:{type:Boolean,default:!1},optionItems:Array},data:function(){return{valueReturn:this.value}},methods:{onSelectedEvent:function(){this.$emit("update:valueReturn",this.valueReturn)}}},W=q,J=(n("4e63"),Object(h["a"])(W,$,w,!1,null,null,null)),B=J.exports,H={name:"LaunchProject",components:{WDGForm:b,WDGInput:j,WDGCheckbox:P,WDGButton:U,WDGSelect:B},props:{ajaxUrl:{type:String,default:""},firstname:{type:String,default:""},lastname:{type:String,default:""},phonenumber:{type:String,default:""},organame:{type:String,default:""},email:{type:String,default:""},projectname:{type:String,default:""},projectdescription:{type:String,default:""},urlcgu:{type:String,default:""},existingprojects:{type:Object,default:null},existingorganisations:{type:Object,default:null}},data:function(){return{loading:!1,errorFeedback:"",successFeedback:"",firstorga_id:this.existingorganisations.organisations[0].Id}},created:function(){console.log(this.existingorganisations.organisations.length)},methods:{formSubmit:function(){var e=this;this.loading=!0;var t=new FormData;t.append("action","create_project_form"),t.append("email-organization",this.email),t.append("firstname",this.firstname),t.append("lastname",this.lastname),t.append("phone",this.phonenumber),t.append("company-name",this.organame),t.append("project-name",this.projectname),t.append("project-description",this.projectdescription),t.append("project-terms","true"),console.log("this.ajaxUrl "+this.ajaxUrl),p.a.post(this.ajaxUrl,t).then((function(t){var n=t.data;"1"===n.has_error?(e.errorFeedback=s.t(Y(n.error_str,n.errors_create_orga)),e.successFeedback="",window.scrollTo(0,0)):(e.errorFeedback="",e.successFeedback="Connexion ok pour "+n.user_display_name),console.log("test  "+e.successFeedback)})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.toJSON()),console.log(e.config)})).finally((function(){e.loading=!1}))}}};function Y(e,t){switch(e){case"errors_create_orga":return t;default:return e}}var V=H,z=(n("bca6"),Object(h["a"])(V,u,c,!1,null,null,null)),Q=z.exports,X=n("fb74");Object(X["a"])({fr:{messages:{required:s.t("validations.REQUIRED")}}});var Z=document.querySelector("#app"),K={name:"app",data:function(){return{ajaxUrl:"",firstname:"",lastname:"",phonenumber:"",organame:"",email:"",projectname:"",projectdescription:"",existingorganisations:"",urlcgu:"",existingprojects:""}},components:{LaunchProject:Q},created:function(){this.ajaxUrl=Z.dataset.ajaxurl,this.firstname=Z.dataset.firstname,this.lastname=Z.dataset.lastname,this.phonenumber=Z.dataset.phonenumber,this.email=Z.dataset.email,this.organame=Z.dataset.organame,this.projectname=Z.dataset.projectname,this.projectdescription=Z.dataset.projectdescription,Z.dataset.existingprojects&&(this.existingprojects=JSON.parse(Z.dataset.existingprojects)),Z.dataset.existingorganisations&&(this.existingorganisations=JSON.parse(Z.dataset.existingorganisations)),console.log(Z.dataset.existingorganisations),this.urlcgu=Z.dataset.urlcgu}},ee=K,te=(n("034f"),Object(h["a"])(ee,r,o,!1,null,null,null)),ne=te.exports;a["a"].config.productionTip=!1,new a["a"]({i18n:s,render:function(e){return e(ne)}}).$mount("#app")},"61dc":function(e,t,n){},"763d":function(e,t,n){},"85ec":function(e,t,n){},9460:function(e,t,n){"use strict";var a=n("763d"),r=n.n(a);r.a},"9fb2":function(e,t,n){var a={"./en.json":"adf0","./fr.json":"f253"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="9fb2"},a78f:function(e,t,n){"use strict";var a=n("4d5d"),r=n.n(a);r.a},adf0:function(e){e.exports=JSON.parse('{"message":"hello i18n !!"}')},bca6:function(e,t,n){"use strict";var a=n("61dc"),r=n.n(a);r.a},f253:function(e){e.exports=JSON.parse('{"common":{"EMAIL_ADDRESS":"Adresse e-mail","EMAIL_ADDRESS_PLACEHOLDER":"exemple@monprojet.com","PASSWORD":"Mot de passe","FIRSTNAME":"Prénom","FIRSTNAME_PLACEHOLDER":"Mon prénom","LASTNAME":"Nom de famille","LASTNAME_PLACEHOLDER":"Mon nom de famille","PHONE_NUMBER":"Téléphone mobile","PHONE_NUMBER_PLACEHOLDER":"Mon téléphone mobile","ORGA_NAME":"Nom de l\'entreprise","ORGA_NAME_PLACEHOLDER":"Nom de mon entreprise","REQUIRED_FIELDS":"Champs obligatoires","VALIDATE":"Valider"},"validations":{"REQUIRED":"Ce champ est obligatoire"},"signin-signup":{"FORGOTTEN_PASSWORD":"Mot de passe oublié","PASSWORD_CONFIRMATION":"Confirmation du mot de passe","REMEMBER_ME":"Se souvenir de moi","I_ACCEPT_THE":"J\'accepte","GENERAL_USE_TERMS":"conditions générales d\'utilisation","CONNECTION":"Connexion","CONNECT_TO_FACEBOOK":"Se connecter avec Facebook","CREATE_MY_ACCOUNT":"Créer mon compte","I_ALREADY_HAVE_AN_ACCOUNT":"J\'ai déjà un compte","SIGNIN_SIGNUP_ERROR_TYPE_ERROR":"Erreur de saisie.","SIGNIN_ERROR_EMPTY":"Merci de saisir votre identifiant et votre mot de passe.","SIGNIN_ERROR_NOT_FOUND":"Cet utilisateur n\'existe pas.","SIGNIN_ERROR_INCORRECT_PASSWORD":"Le mot de passe saisi ne correspond pas.","SIGNUP_ERROR_EMAIL_EMPTY":"L\'adresse e-mail doit être définie.","SIGNUP_ERROR_EMAIL_FOUND":"Cette adresse e-mail est déjà utilisée.","SIGNUP_ERROR_EMAIL_INCORRECT":"Cette adresse e-mail n\'est pas valide.","SIGNUP_ERROR_FIRSTNAME_EMPTY":"Le prénom doit être défini.","SIGNUP_ERROR_LASTNAME_EMPTY":"Le nom de famille doit être défini.","SIGNUP_ERROR_PASSWORD_EMPTY":"Avez-vous saisi deux fois le mot de passe ?","SIGNUP_ERROR_PASSWORD_NOT_MATCHING":"Les mots de passe saisis ne correspondent pas.","SIGNUP_ERROR_TERMS":"Merci de cocher la case pour accepter les conditions générales d\'utilisation.","SIGNUP_ERROR_UNDEFINED":"Problème de création d\'utilisateur.","SIGNUP_ERROR_ROBOT":"Merci de cocher la case confirmant que vous n\'êtes pas un robot."},"launch-project":{"TITLE":"Lancement de levée de fonds","ALREADY_EXISTING_PROJECTS":"Vous avez déjà créé un (ou des) projet(s) sur la plateforme précédemment :","CREATE_NEW_PROJECT_INDEED":"Si vous souhaitez tout de même créer un nouveau projet, veuillez remplir le formulaire ci-dessous.","ORGA_MAIL_DIFFERENT":"Cette adresse doit être différente de celle de votre compte personnel, utilisez une adresse telle que contact@votre-entreprise.fr","PROJECT_NAME":"Nom du projet","PROJECT_NAME_PLACEHOLDER":"Nom du projet","PROJECT_DESCRIPTION":"Description du projet","PROJECT_DESCRIPTION_PLACEHOLDER":"Description du projet","VALIDATE_CONDITIONS":"Je valide les conditions particulières"},"project-setup":{"PICTO_TITLE_BALLOON":"Mongolfière","PICTO_TITLE_TIMER":"Chronomètre","MASCOT_TEXT_INTRO":"Vos informations ne sont pas transmises à des tiers et restent confidentielles.","MY_PROJECT":"Mon projet","MINUTE":"minute | minutes","ALL_FIELDS_ARE_REQUIRED":"Tous les champs sont obligatoires"}}')}});
//# sourceMappingURL=app.7dd7a48f.js.map