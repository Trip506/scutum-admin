(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1216:function(t,e,n){"use strict";n.r(e);n(63);var l={name:"LoginPage",components:{ScInput:n(265).a},layout:"login_page",data:function(){return{loginData:{login:"",password:""},registerData:{name:"",email:"",password:""},recoverPassEmail:""}},head:function(){return{title:"Scutum Admin Login Page"}},computed:{appLogo:function(){return n(593)},appLogoLight:function(){return n(151)}}},o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"uk-flex uk-flex-center uk-flex-middle sc-login-page-wrapper"},[e("div",{staticClass:"uk-width-2-3@s uk-width-1-2@m uk-width-1-3@l uk-width-1-4@xl uk-margin-auto-vertical"},[e("ScCard",[e("ScCardBody",[e("div",{staticClass:"sc-login-page-logo"},[e("img",{directives:[{name:"rjs",rawName:"v-rjs",value:n(607),expression:"require('~/assets/img/logo_alt@2x.png')"}],attrs:{src:t.appLogo,alt:""}})]),t._v(" "),e("div",{staticClass:"sc-login-page-logo sc-login-page-logo-light"},[e("img",{directives:[{name:"rjs",rawName:"v-rjs",value:n(593),expression:"require('~/assets/img/logo_alt.png')"}],attrs:{src:t.appLogoLight,alt:""}})]),t._v(" "),e("div",{staticClass:"sc-toggle-login-register sc-toggle-login-password",attrs:{id:"sc-login-form"}},[e("div",{staticClass:"sc-login-page-inner"},[e("div",{staticClass:"uk-margin-medium"},[e("ScInput",{model:{value:t.loginData.login,callback:function(e){t.$set(t.loginData,"login",e)},expression:"loginData.login"}},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\tEmail/Login\n\t\t\t\t\t\t\t\t")])])],1),t._v(" "),e("div",{staticClass:"uk-margin-medium"},[e("ScInput",{attrs:{type:"password"},model:{value:t.loginData.password,callback:function(e){t.$set(t.loginData,"password",e)},expression:"loginData.password"}},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\tPassword\n\t\t\t\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"uk-margin-small-top uk-text-small uk-text-right@s"},[e("a",{staticClass:"sc-link",attrs:{href:"javascript:void(0)","data-uk-toggle":"target: .sc-toggle-login-password; animation: uk-animation-scale-up"}},[t._v("\n\t\t\t\t\t\t\t\t\tForgot Password?\n\t\t\t\t\t\t\t\t")])])],1),t._v(" "),e("div",{staticClass:"uk-margin-large-top"},[e("nuxt-link",{staticClass:"sc-button sc-button-large sc-button-block sc-button-danger",attrs:{to:"/"}},[t._v("\n\t\t\t\t\t\t\t\tSign In\n\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"uk-child-width-1-3 uk-grid-medium uk-margin-medium-top",attrs:{"data-uk-grid":""}},[e("div",[e("a",{staticClass:"sc-button sc-button-social sc-button-facebook uk-width-1-1 uk-flex-center",attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"mdi mdi-facebook"})])]),t._v(" "),e("div",[e("a",{staticClass:"sc-button sc-button-social sc-button-twitter uk-width-1-1 uk-flex-center",attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"mdi mdi-twitter"})])]),t._v(" "),e("div",[e("a",{staticClass:"sc-button sc-button-social sc-button-linkedin uk-width-1-1 uk-flex-center",attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"mdi mdi-linkedin"})])])]),t._v(" "),e("div",{staticClass:"uk-margin-large-top uk-text-center"},[e("span",{staticClass:"sc-color-secondary"},[t._v("\n\t\t\t\t\t\t\t\t\tDon't have an account?\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("div",[e("a",{staticClass:"sc-text-semibold",attrs:{href:"javascript:void(0)","data-uk-toggle":"target: .sc-toggle-login-register; animation: uk-animation-scale-up"}},[t._v("\n\t\t\t\t\t\t\t\t\t\tSign Up\n\t\t\t\t\t\t\t\t\t")])])])],1)])]),t._v(" "),e("div",{staticClass:"sc-toggle-login-register",attrs:{id:"sc-register-form",hidden:""}},[e("div",{staticClass:"sc-login-page-inner"},[e("div",{staticClass:"uk-margin-medium"},[e("ScInput",{model:{value:t.registerData.name,callback:function(e){t.$set(t.registerData,"name",e)},expression:"registerData.name"}},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t\t")])])],1),t._v(" "),e("div",{staticClass:"uk-margin-medium"},[e("ScInput",{model:{value:t.registerData.email,callback:function(e){t.$set(t.registerData,"email",e)},expression:"registerData.email"}},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t")])])],1),t._v(" "),e("div",{staticClass:"uk-margin-medium"},[e("ScInput",{model:{value:t.registerData.password,callback:function(e){t.$set(t.registerData,"password",e)},expression:"registerData.password"}},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\tPassword\n\t\t\t\t\t\t\t\t")])])],1),t._v(" "),e("div",{staticClass:"uk-margin-large-top"},[e("button",{staticClass:"sc-button sc-button-large sc-button-block sc-button-secondary"},[t._v("\n\t\t\t\t\t\t\t\tSign Up\n\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"uk-margin-large-top uk-flex uk-flex-middle uk-flex-center"},[e("a",{staticClass:"sc-text-semibold",attrs:{href:"javascript:void(0)","data-uk-toggle":"target: .sc-toggle-login-register; animation: uk-animation-scale-up"}},[t._v("\n\t\t\t\t\t\t\t\t\tBack to login form\n\t\t\t\t\t\t\t\t")])])])])]),t._v(" "),e("div",{staticClass:"sc-toggle-login-password",attrs:{id:"sc-password-form",hidden:""}},[e("div",{staticClass:"sc-login-page-inner"},[e("div",{staticClass:"uk-margin-medium"},[t._v("\n\t\t\t\t\t\t\tPlease enter your email address. You will receive a link to reset your password.\n\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"uk-margin-medium"},[e("ScInput",{model:{value:t.recoverPassEmail,callback:function(e){t.recoverPassEmail=e},expression:"recoverPassEmail"}},[e("label",[t._v("\n\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t")])])],1),t._v(" "),e("div",{staticClass:"uk-margin-large-top"},[e("button",{staticClass:"sc-button sc-button-large sc-button-block sc-button-primary"},[t._v("\n\t\t\t\t\t\t\t\tReset Password\n\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"uk-margin-large-top uk-flex uk-flex-middle uk-flex-center"},[e("a",{staticClass:"sc-text-semibold",attrs:{href:"javascript:void(0)","data-uk-toggle":"target: .sc-toggle-login-password; animation: uk-animation-scale-up"}},[t._v("\n\t\t\t\t\t\t\t\t\tBack to login form\n\t\t\t\t\t\t\t\t")])])])])])])],1)],1)])}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,n){"use strict";n(63);var l={name:"ScInput",props:{id:{type:String,default:null},name:{type:String,default:null},type:{type:String,default:"text"},value:{type:[String,Object],default:""},disabled:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},mode:{type:String,default:""},state:{type:String,default:""},extraClasses:{type:String,default:""},successState:{type:Boolean,default:!1},errorState:{type:Boolean,default:!1},placeholder:{type:String,default:null},ukTooltip:{type:Object,default:null},focus:{type:Function,default:null},blur:{type:Function,default:null},change:{type:Function,default:null},keyUp:{type:Function,default:null},validator:{type:Object,default:null}},data:function(){return{inputFocused:!1}},computed:{modeClass:function(){return"outline"===this.$props.mode?"sc-input-outline":""},inputErrorClass:function(){return this.$props.errorState?"uk-form-danger":""},inputSuccessClass:function(){return this.$props.successState?"uk-form-success":""}},mounted:function(){var t=this;t.ukTooltip&&UIkit.tooltip(t.$refs.input,t.ukTooltip)},methods:{inputBlur:function(){this.inputFocused=!1,this.blur&&this.blur(),this.validator&&this.validator.$touch(),this.$emit("blur")},inputFocus:function(){this.inputFocused=!0,this.focus&&this.focus(),this.$emit("focus")},inputChange:function(){this.change&&this.change(),this.$emit("change")},inputKeyUp:function(){this.keyUp&&this.keyUp(),this.$emit("keyUp")}}},o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sc-input-wrapper",class:{"sc-input-wrapper-outline":"outline"===t.mode,"sc-input-wrapper-disabled":t.disabled,"sc-input-wrapper-danger":t.errorState,"sc-input-wrapper-success":t.successState,"sc-input-filled":""!==t.value||"fixed"===t.state,"sc-input-focus":t.inputFocused}},[t._t("icon"),t._v(" "),t._t("default"),t._v(" "),e("input",{ref:"input",class:["uk-input","sc-vue-input",t.modeClass,t.inputErrorClass,t.inputSuccessClass,t.extraClasses],attrs:{id:t.id,name:t.name,placeholder:t.placeholder,type:t.type,disabled:t.disabled,readonly:t.readOnly},domProps:{value:t.value},on:{focus:t.inputFocus,blur:t.inputBlur,change:t.inputChange,input:function(e){return t.$emit("input",e.target.value)},keyup:t.inputKeyUp}}),t._v(" "),"outline"!==t.mode?e("span",{staticClass:"sc-input-bar"}):t._e(),t._v(" "),t._t("help-inline")],2)}),[],!1,null,null,null);e.a=component.exports},593:function(t,e,n){t.exports=n.p+"img/logo_alt.73e0e43.png"},607:function(t,e,n){t.exports=n.p+"img/logo_alt@2x.3214a8d.png"}}]);