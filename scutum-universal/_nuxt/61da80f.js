(window.webpackJsonp=window.webpackJsonp||[]).push([[106,10],{1266:function(t,e,n){"use strict";n.r(e);n(63),n(22);var r=n(3),o=n(265),c=(n(269),n(580)),l=n(590),d=r.d.uniqueID,m=r.c.first,v=r.c.last,f=r.c.sentence,h=(n(150).Chance(),{name:"PagesChat",components:{ScInput:o.a,ColumnToggle:c.a,ScOffcanvas:l.default},data:function(){return{myUser:{id:0,firstName:"Mark",lastName:"Fisher",avatar:0,status:"online",moodMessage:"Happy :)"},activeRoom:"room_0",lastMessage:{id:null,date:"",message:""},rooms:[{id:d(),name:"room_0",title:"General",users:[0,1,2,5,8],groups:[{id:d(),own:!0,user:0,messages:[{id:d(10),content:"Ei tota maluisset ius. Sea ne partiendo assentior adolescens. Iisque accusam ex vel, mea ferri lorem menandri eu",time:"10:21"}]},{id:d(),own:!1,user:1,messages:[{id:d(10),content:"Aliquid deserunt excepturi fugiat fugit incidunt neque officiis quae quidem sapiente",time:"10:23"}]},{id:d(),own:!1,user:5,messages:[{id:d(10),content:"Splendide forensibus ut ius. Solum nominavi adipiscing eam et, ius falli phaedrum ut. Has mandamus salutandi scriptorem ne. Usu et illum quaerendum mediocritatem",time:"10:24"}]},{id:d(),own:!0,user:0,messages:[{id:d(10),content:"Primis gubergren ex mel, te aperiam suscipit efficiantur mel",time:"10:34"}]}]},{id:d(),name:"room_1",title:"Designers",users:[0,2,5,7],groups:[{id:d(),own:!1,user:2,messages:[{id:d(10),content:"Ei tota maluisset ius. Sea ne partiendo assentior adolescens. Iisque accusam ex vel, mea ferri lorem menandri eu",time:"19:41"}]},{id:d(),own:!0,user:0,messages:[{id:d(10),content:"Sea ne partiendo assentior adolescens. Iisque accusam ex vel ;)",time:"19:58"}]},{id:d(),own:!1,user:7,messages:[{id:d(10),content:"Aliquid deserunt excepturi fugiat fugit incidunt neque officiis quae quidem sapiente",time:"19:55"}]}]}],statuses:["online","offline","busy","away"],columnCollapsed:!1,columnTransform:!1}},computed:{users:function(){for(var t=[],i=1;i<=10;i++){var e={id:d(),firstName:m(),lastName:v(),status:this.statuses[Math.floor(Math.random()*this.statuses.length)],moodMessage:f({words:4})};2!==i&&5!==i&&(e.avatar=i),t.push(e)}return t}},mounted:function(){var t=this;this.$store.commit("setCardFixed",!0),this.$store.commit("setHeaderExpanded",!0);var e={id:d(),own:!1,user:8,messages:[{id:d(10),content:"His persius assentior intellegebat ea. Modo quaeque ad vim. Ut has nostro recusabo. Nihil mandamus adversarium cum eu, an his assum virtute, vix an vide altera adolescens. Delectus volutpat assentior ne quo, cum an aliquam iracundia. Mei ei nobis molestiae, an doctus debitis interesset sea. Est ut enim dolor, vidisse propriae vis no :)",time:"10:43"}]};setTimeout((function(){t.rooms[0].groups.push(e)}),2e3)},beforeDestroy:function(){this.$store.commit("setCardFixed",!1),this.$store.commit("setHeaderExpanded",!1)},methods:{chatRooms:function(t){return this.rooms.filter((function(e){return e.name===t}))},userAvatar:function(t,e){var r=0==t?"default":"0"+t;return e?n(996)("./avatar_"+r+"_sm@2x.png"):n(997)("./avatar_"+r+"_sm.png")},userStatus:function(t){return 0==t?this.myUser.status:this.users[t].status},userName:function(t){return 0==t?this.myUser.firstName:this.users[t].firstName},changeRoom:function(t){this.activeRoom=t,setTimeout((function(){document.getElementById("sc-chat-wrapper").scrollTop=document.getElementById("sc-chat").scrollHeight}),80)},sendMessage:function(){var t=this;if(""!==this.lastMessage.message){var e=this.$moment().format("HH:mm"),n=this.rooms.filter((function(e){return e.name===t.activeRoom}));if(this.lastMessage.date!==e){var r=d();n.length&&(n[0].groups.push({id:r,own:!0,user:0,messages:[{id:d(10),content:this.lastMessage.message,time:e}]}),this.lastMessage.id=r)}else{var o=n[0].groups.filter((function(e){return e.id===t.lastMessage.id}));o.length&&o[0].messages.push({id:d(10),content:this.lastMessage.message,time:""})}setTimeout((function(){document.getElementById("sc-chat-wrapper").scrollTop=document.getElementById("sc-chat").scrollHeight}),10),this.lastMessage.date=e,this.lastMessage.message=""}},onColumnCollapsing:function(t){this.columnCollapsed=t,this.columnTransform=!0},onColumnToggle:function(){this.columnTransform=!1}}}),_=(n(998),n(2)),component=Object(_.a)(h,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("div",{staticClass:"uk-height-1-1 uk-flex uk-flex-center sc-page-over-header",attrs:{id:"sc-page-content"}},[e("div",{staticClass:"uk-width-5-6@l"},[e("ScCard",{staticClass:"sc-chat-card uk-height-1-1"},[e("div",{staticClass:"uk-grid-divider uk-grid-collapse uk-height-1-1 uk-grid",attrs:{"data-uk-grid":"","data-uk-height-match":"target: > div > div > .uk-card-header"}},[t._l(t.chatRooms(t.activeRoom),(function(n){return e("div",{key:n.id,staticClass:"uk-flex-1 uk-height-1-1 uk-width-expand"},[e("div",{staticClass:"uk-flex uk-flex-column uk-height-1-1 md-bg-grey-200"},[e("ScCardHeader",{staticClass:"sc-chat-header sc-padding sc-padding-medium-ends"},[e("div",{staticClass:"uk-flex uk-flex-middle"},[e("div",{staticClass:"uk-flex-1"},[e("ScCardTitle",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.title)+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("ul",{staticClass:"sc-chat-user-list-inline"},t._l(n.users,(function(n){return e("li",{key:n},[e("a",{attrs:{href:"javascript:void(0)"}},[e("span",{staticClass:"sc-user-status",class:[t.userStatus(n)]}),t._v(" "),e(0===n?"strong":"span",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.userName(n))+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])})),0)],1),t._v(" "),e("div",{staticClass:"sc-actions uk-margin-remove"},[e("div",{staticClass:"sc-dropdown"},[e("a",{staticClass:"sc-actions-icon mdi mdi-dots-vertical",attrs:{href:"javascript:void(0)"}}),t._v(" "),e("div",{staticClass:"uk-width-small uk-dropdown",attrs:{"data-uk-dropdown":"mode:click"}},[e("ul",{staticClass:"uk-nav uk-dropdown-nav"},[e("li",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tInfo\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSettings\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tClear chat\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("li",{staticClass:"uk-nav-divider"}),t._v(" "),e("li",[e("a",{staticClass:"md-color-red-500",attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])])])]),t._v(" "),e("ScCardBody",{staticClass:"sc-padding-remove",attrs:{id:"sc-chat-wrapper"}},[e("TransitionGroup",{staticClass:"sc-chat-body sc-light",attrs:{id:"sc-chat",name:"fadeUp",tag:"div"}},t._l(n.groups,(function(n){return e("div",{key:n.id,staticClass:"sc-chat-messages-wrapper",class:{my:n.own}},[t.users[n.user].avatar?[e("a",{staticClass:"sc-chat-message-avatar",attrs:{href:"javascript:void(0)"}},[e("img",{directives:[{name:"rjs",rawName:"v-rjs",value:t.userAvatar(n.user,!0),expression:"userAvatar(group.user, true)"}],staticClass:"sc-avatar",attrs:{src:t.userAvatar(n.user),alt:""}})]),t._v(" "),e("TransitionGroup",{staticClass:"sc-chat-messages",attrs:{name:"fadeUp",tag:"ul"}},t._l(n.messages,(function(n){return e("li",{key:n.id},[n.content?e("p",{staticClass:"sc-chat-message-content"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.content)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e(),t._v(" "),""!==n.time?e("time",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.time)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e()])})),0)]:e("div",[n.own?t._e():e("div",{staticClass:"sc-chat-message-username"},[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.userName(n.user))+"\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("TransitionGroup",{staticClass:"sc-chat-messages",attrs:{name:"fadeUp",tag:"ul"}},t._l(n.messages,(function(n){return e("li",{key:n.id},[n.content?e("p",{staticClass:"sc-chat-message-content"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.content)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e(),t._v(" "),""!==n.time?e("time",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.time)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e()])})),0)],1)],2)})),0)],1),t._v(" "),e("div",{staticClass:"sc-chat-user-input uk-flex uk-flex-middle"},[e("div",{staticClass:"uk-flex-1"},[e("ScInput",{attrs:{placeholder:"Write something...",mode:"outline"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage.apply(null,arguments)}},model:{value:t.lastMessage.message,callback:function(e){t.$set(t.lastMessage,"message","string"==typeof e?e.trim():e)},expression:"lastMessage.message"}})],1),t._v(" "),e("a",{staticClass:"mdi mdi-send sc-icon-square uk-margin-left",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.sendMessage.apply(null,arguments)}}})])],1)])})),t._v(" "),e("div",{staticClass:"uk-width-1-3@m uk-width-1-3@l uk-width-1-4@xl uk-height-1-1 sc-column-transition uk-visible@l",class:{"sc-column-collapsed":t.columnCollapsed,"sc-js-el-transform":t.columnTransform}},[e("div",{staticClass:"uk-flex uk-flex-column uk-height-1-1"},[e("ScCardHeader",{staticClass:"uk-flex uk-flex-middle sc-border-bottom"},[e("div",{staticClass:"uk-flex-1 sc-js-el-hide"},[e("ScCardTitle",{staticClass:"sc-actions-match"},[t._v("\n\t\t\t\t\t\t\t\t\t\tUsers / Rooms\n\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),e("client-only",[e("ColumnToggle",{attrs:{"show-icon":"mdi-account-multiple","hide-title":"Hide users","show-title":"Show users",collapsed:t.columnCollapsed},on:{columnCollapsing:t.onColumnCollapsing,columnShown:t.onColumnToggle,columnHidden:t.onColumnToggle}})],1),t._v(" "),e("ScCardActions",{staticClass:"sc-js-el-hide"},[e("div",{staticClass:"sc-dropdown"},[e("a",{staticClass:"sc-actions-icon mdi mdi-dots-vertical",attrs:{href:"javascript:void(0)"}}),t._v(" "),e("div",{staticClass:"uk-width-small uk-dropdown",attrs:{"data-uk-dropdown":"mode:click"}},[e("ul",{staticClass:"uk-nav uk-dropdown-nav"},[e("li",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tSettings\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew chat group\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("li",{staticClass:"uk-nav-divider"}),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdd User\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tSearch User\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])])],1),t._v(" "),e("ScCardBody",{staticClass:"sc-js-el-hide uk-flex uk-flex-1 uk-flex-column uk-height-1-1"},[e("div",{staticClass:"uk-margin-top"},[e("h5",{staticClass:"uk-margin-remove"},[t._v("\n\t\t\t\t\t\t\t\t\t\tUsers ("+t._s(t.users.length)+")\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("ul",{staticClass:"uk-list uk-list-divider uk-margin-small-top sc-list-clickable sc-list-align"},t._l(t.users,(function(n){return e("li",{key:n.id,staticClass:"sc-list-group uk-visible-toggle",attrs:{tabindex:"-1"}},[e("div",{staticClass:"sc-list-addon"},[e("div",{staticClass:"sc-avatar-wrapper"},[e("span",{staticClass:"sc-user-status",class:[n.status]}),t._v(" "),n.avatar?e("img",{directives:[{name:"rjs",rawName:"v-rjs",value:t.userAvatar(n.avatar,!0),expression:"userAvatar(user.avatar, true)"}],staticClass:"sc-avatar",attrs:{src:t.userAvatar(n.avatar),alt:""}}):e("img",{staticClass:"sc-avatar",attrs:{alt:""}})])]),t._v(" "),e("div",{staticClass:"sc-list-body"},[e("div",{staticClass:"uk-flex uk-flex-middle"},[e("div",{staticClass:"uk-width-expand"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.firstName)+" "+t._s(n.lastName)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),e("div",{staticClass:"sc-list-secondary-text"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.moodMessage)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"uk-width-auto"},[e("ul",{staticClass:"uk-hidden-hover uk-flex uk-flex-middle sc-padding-remove-left uk-margin-small-left"},[e("li",[e("a",{staticClass:"sc-actions-icon mdi mdi-pencil-outline icon sc-icon-24 sc-icon-square",attrs:{href:"#"}})]),t._v(" "),e("li",[e("a",{staticClass:"sc-actions-icon mdi mdi-dots-vertical icon sc-icon-24 sc-icon-square",attrs:{href:"#"}}),t._v(" "),e("div",{staticClass:"uk-dropdown-small uk-dropdown",attrs:{"data-uk-dropdown":""}},[e("ul",{staticClass:"uk-nav uk-dropdown-nav sc-padding-remove-left"},[e("li",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tItem\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tItem\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])])])])])])})),0)]),t._v(" "),e("div",[e("h5",{staticClass:"uk-margin-remove"},[t._v("\n\t\t\t\t\t\t\t\t\t\tRooms ("+t._s(t.rooms.length)+")\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("ul",{staticClass:"uk-subnav uk-subnav-pill uk-flex uk-flex-column uk-margin-small-top"},t._l(t.rooms,(function(n){return e("li",{key:n.id,staticClass:"uk-margin-small-top",class:{"uk-active":t.activeRoom===n.name},on:{click:function(e){return t.changeRoom(n.name)}}},[e("a",{staticClass:"uk-flex uk-flex-middle",attrs:{href:"javascript:void(0)"}},[e("span",{staticClass:"uk-flex-1"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.title)+"\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"uk-margin-small-left uk-text-small"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t("+t._s(n.users.length)+" users)\n\t\t\t\t\t\t\t\t\t\t\t\t")])])])})),0)])])],1)])],2)])],1)]),t._v(" "),e("client-only",[e("ScOffcanvas",[e("h5",{staticClass:"uk-margin-remove"},[t._v("\n\t\t\t\tUsers ("+t._s(t.users.length)+")\n\t\t\t")]),t._v(" "),e("ul",{staticClass:"uk-list uk-list-divider uk-margin-small-top sc-list-clickable sc-list-align"},t._l(t.users,(function(n){return e("li",{key:n.id,staticClass:"sc-list-group"},[e("div",{staticClass:"sc-list-addon"},[e("div",{staticClass:"sc-avatar-wrapper"},[e("span",{staticClass:"sc-user-status",class:[n.status]}),t._v(" "),n.avatar?e("img",{directives:[{name:"rjs",rawName:"v-rjs",value:t.userAvatar(n.avatar,!0),expression:"userAvatar(user.avatar, true)"}],staticClass:"sc-avatar",attrs:{src:t.userAvatar(n.avatar),alt:""}}):e("img",{staticClass:"sc-avatar",attrs:{alt:""}})])]),t._v(" "),e("div",{staticClass:"sc-list-body"},[t._v("\n\t\t\t\t\t\t"+t._s(n.firstName)+" "+t._s(n.lastName)+"\n\t\t\t\t\t\t"),e("div",{staticClass:"sc-list-secondary-text"},[t._v("\n\t\t\t\t\t\t\t"+t._s(n.moodMessage)+"\n\t\t\t\t\t\t")])])])})),0)])],1)],1)}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,n){"use strict";n(63);var r={name:"ScInput",props:{id:{type:String,default:null},name:{type:String,default:null},type:{type:String,default:"text"},value:{type:[String,Object],default:""},disabled:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},mode:{type:String,default:""},state:{type:String,default:""},extraClasses:{type:String,default:""},successState:{type:Boolean,default:!1},errorState:{type:Boolean,default:!1},placeholder:{type:String,default:null},ukTooltip:{type:Object,default:null},focus:{type:Function,default:null},blur:{type:Function,default:null},change:{type:Function,default:null},keyUp:{type:Function,default:null},validator:{type:Object,default:null}},data:function(){return{inputFocused:!1}},computed:{modeClass:function(){return"outline"===this.$props.mode?"sc-input-outline":""},inputErrorClass:function(){return this.$props.errorState?"uk-form-danger":""},inputSuccessClass:function(){return this.$props.successState?"uk-form-success":""}},mounted:function(){var t=this;t.ukTooltip&&UIkit.tooltip(t.$refs.input,t.ukTooltip)},methods:{inputBlur:function(){this.inputFocused=!1,this.blur&&this.blur(),this.validator&&this.validator.$touch(),this.$emit("blur")},inputFocus:function(){this.inputFocused=!0,this.focus&&this.focus(),this.$emit("focus")},inputChange:function(){this.change&&this.change(),this.$emit("change")},inputKeyUp:function(){this.keyUp&&this.keyUp(),this.$emit("keyUp")}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sc-input-wrapper",class:{"sc-input-wrapper-outline":"outline"===t.mode,"sc-input-wrapper-disabled":t.disabled,"sc-input-wrapper-danger":t.errorState,"sc-input-wrapper-success":t.successState,"sc-input-filled":""!==t.value||"fixed"===t.state,"sc-input-focus":t.inputFocused}},[t._t("icon"),t._v(" "),t._t("default"),t._v(" "),e("input",{ref:"input",class:["uk-input","sc-vue-input",t.modeClass,t.inputErrorClass,t.inputSuccessClass,t.extraClasses],attrs:{id:t.id,name:t.name,placeholder:t.placeholder,type:t.type,disabled:t.disabled,readonly:t.readOnly},domProps:{value:t.value},on:{focus:t.inputFocus,blur:t.inputBlur,change:t.inputChange,input:function(e){return t.$emit("input",e.target.value)},keyup:t.inputKeyUp}}),t._v(" "),"outline"!==t.mode?e("span",{staticClass:"sc-input-bar"}):t._e(),t._v(" "),t._t("help-inline")],2)}),[],!1,null,null,null);e.a=component.exports},269:function(t,e,n){"use strict";var r=n(1);r.default.moment||r.default.use(n(334))},274:function(t,e,n){t.exports=n.p+"img/avatar_01_sm.f998161.png"},275:function(t,e,n){t.exports=n.p+"img/avatar_01_sm@2x.6649141.png"},276:function(t,e,n){t.exports=n.p+"img/avatar_06_sm.b0047ea.png"},277:function(t,e,n){t.exports=n.p+"img/avatar_03_sm@2x.9f5d47e.png"},278:function(t,e,n){t.exports=n.p+"img/avatar_04_sm@2x.61057ef.png"},279:function(t,e,n){t.exports=n.p+"img/avatar_05_sm.5b5ea5a.png"},280:function(t,e,n){t.exports=n.p+"img/avatar_06_sm@2x.b177b92.png"},281:function(t,e,n){t.exports=n.p+"img/avatar_07_sm@2x.5701d61.png"},291:function(t,e,n){t.exports=n.p+"img/avatar_010_sm.77b4bcf.png"},292:function(t,e,n){t.exports=n.p+"img/avatar_010_sm@2x.a55fa15.png"},293:function(t,e,n){t.exports=n.p+"img/avatar_02_sm@2x.e94193b.png"},295:function(t,e,n){t.exports=n.p+"img/avatar_05_sm@2x.255a6c7.png"},296:function(t,e,n){t.exports=n.p+"img/avatar_08_sm.ef65222.png"},297:function(t,e,n){t.exports=n.p+"img/avatar_08_sm@2x.dc8caa9.png"},298:function(t,e,n){t.exports=n.p+"img/avatar_09_sm.8bbca6f.png"},299:function(t,e,n){t.exports=n.p+"img/avatar_09_sm@2x.e046f9a.png"},580:function(t,e,n){"use strict";var r={props:{hideTitle:{type:String,default:"Hide List"},hideIcon:{type:String,default:"mdi-arrow-collapse-horizontal"},showTitle:{type:String,default:"Show List"},showIcon:{type:String,default:"mdi-arrow-expand-horizontal"},collapsed:{type:Boolean,default:!1}},computed:{columnCollapsed:{get:function(){return this.collapsed},set:function(t){var e=this;return this.$emit("columnCollapsing",t),setTimeout((function(){e.$emit(t?"columnHidden":"columnShown")}),300),t}}},methods:{columnToggle:function(){this.columnCollapsed=!this.columnCollapsed}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"uk-flex uk-flex-center",class:{"uk-flex-1":t.columnCollapsed}},[e("a",{directives:[{name:"show",rawName:"v-show",value:!t.columnCollapsed,expression:"!columnCollapsed"}],staticClass:"sc-column-hide sc-actions-icon mdi",class:[t.hideIcon],attrs:{href:"javascript:void(0)","data-uk-tooltip":"",title:t.hideTitle},on:{click:function(e){return e.stopPropagation(),t.columnToggle()}}}),t._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:t.columnCollapsed,expression:"columnCollapsed"}],staticClass:"sc-column-show sc-actions-icon mdi",class:[t.showIcon],attrs:{href:"javascript:void(0)","data-uk-tooltip":"",title:t.showTitle},on:{click:function(e){return e.stopPropagation(),t.columnToggle()}}})])}),[],!1,null,null,null);e.a=component.exports},590:function(t,e,n){"use strict";n.r(e);n(34),n(49),n(22),n(50),n(51);var r=n(23),o=n(7),c=n(3);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={name:"ScOffcanvas",props:{extraClass:{type:String,default:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["vxOffcanvasPresent","vxOffcanvasExpanded"])),watch:{vxOffcanvasExpanded:function(t){c.e.mediumMax()&&(t?(UIkit.offcanvas("#sc-offcanvas").show(),this.$store.getters.sidebarMainState&&this.$store.commit("sidebarMainToggle",!1)):UIkit.offcanvas("#sc-offcanvas").hide())},$route:function(){this.$store.getters.offcanvasState&&this.$store.commit("offcanvasToggle",!1)}},mounted:function(){var t=this;c.e.mediumMax()&&t.$nextTick((function(){t.$store.commit("setOffcanvasPresent",!0)}))},beforeDestroy:function(){this.$store.commit("offcanvasToggle",!1),this.$store.commit("setOffcanvasPresent",!1)},methods:{hide:function(){this.$store.commit("offcanvasToggle",!1)}}},m=d,v=n(2),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return t.vxOffcanvasPresent?e("div",{attrs:{id:"sc-offcanvas","data-uk-offcanvas":"flip: true; container: '#nuxt-wrapper'"}},[e("div",{staticClass:"uk-offcanvas-bar",class:t.extraClass},[t._t("default")],2)]):t._e()}),[],!1,null,null,null);e.default=component.exports},745:function(t,e,n){var content=n(999);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("36ea3d30",content,!0,{sourceMap:!1})},996:function(t,e,n){var map={"./avatar_010_sm@2x.png":292,"./avatar_01_sm@2x.png":275,"./avatar_02_sm@2x.png":293,"./avatar_03_sm@2x.png":277,"./avatar_04_sm@2x.png":278,"./avatar_05_sm@2x.png":295,"./avatar_06_sm@2x.png":280,"./avatar_07_sm@2x.png":281,"./avatar_08_sm@2x.png":297,"./avatar_09_sm@2x.png":299,"./avatar_default_sm@2x.png":156};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=996},997:function(t,e,n){var map={"./avatar_010_sm.png":291,"./avatar_01_sm.png":274,"./avatar_02_sm.png":146,"./avatar_03_sm.png":144,"./avatar_04_sm.png":145,"./avatar_05_sm.png":279,"./avatar_06_sm.png":276,"./avatar_07_sm.png":143,"./avatar_08_sm.png":296,"./avatar_09_sm.png":298,"./avatar_default_sm.png":157};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=997},998:function(t,e,n){"use strict";n(745)},999:function(t,e,n){var r=n(10)(!1);r.push([t.i,".sc-chat-messages,.sc-chat-messages>li,.sc-chat-user-list-inline,.sc-chat-user-list-inline>li{margin:0;padding:0;list-style:none}.sc-chat-body{display:flex;flex-direction:column;padding:16px 24px;min-height:100%;box-sizing:border-box;-webkit-overflow-scrolling:touch}.sc-chat-header{border-bottom:1px solid rgba(0,0,0,.12);background:#fff}.sc-chat-user-input{border-top:1px solid rgba(0,0,0,.08);background:#fff;padding:16px 24px}.sc-chat-user-input .uk-input,.sc-chat-user-input [data-sc-input]{border-width:0;padding:0}.sc-chat-user-input .uk-input:not(:focus),.sc-chat-user-input [data-sc-input]:not(:focus){border-color:rgba(0,0,0,.12)}.sc-chat-user-list-inline{margin:0 0 0 -8px;display:flex;flex-wrap:wrap}.sc-chat-user-list-inline li{font-size:12px;font-size:.75rem;float:left;margin:8px 0 0 8px;background:#eee;padding:2px 8px;border-radius:4px;position:relative}.sc-chat-user-list-inline li a{color:rgba(0,0,0,.87)}.sc-chat-messages{max-width:75%;float:left}.sc-chat-messages>li{background:#009688;display:block;clear:both;padding:8px 16px;font-size:14px;font-size:.875rem;float:left;border-radius:4px;position:relative;box-shadow:0 1px 2px rgba(0,0,0,.12)}.sc-chat-messages>li+li{margin-top:4px}.sc-chat-messages .sc-chat-message-content{margin:0;color:rgba(0,0,0,.87)}.sc-chat-messages time{font-size:12px;color:rgba(0,0,0,.54)}.sc-chat-messages-wrapper{margin:8px 0;display:flex;flex-shrink:0}.sc-chat-messages-wrapper.my{flex-direction:row-reverse}.sc-chat-messages-wrapper.my .sc-chat-message-avatar{margin-left:8px;margin-right:0}.sc-chat-messages-wrapper.my .sc-chat-message-avatar>img,.sc-chat-messages-wrapper.my .sc-chat-message-avatar>span{background:#fff}.sc-chat-messages-wrapper.my .sc-chat-message-meta{text-align:right}.sc-chat-messages-wrapper.my>ul{float:right}.sc-chat-messages-wrapper.my>ul>li{float:right;background:#fff;text-align:right}.sc-chat-message-avatar{width:32px;height:32px;margin-right:8px;color:rgba(0,0,0,.54)}.sc-chat-message-username{text-align:left;clear:both;font-weight:500;font-size:11px;font-size:.6875rem;text-transform:uppercase;padding-bottom:4px}.sc-chat-message-username a{color:rgba(0,0,0,.54)}.sc-light .sc-chat-messages-wrapper:not(.my) .sc-chat-message-content,.sc-light .sc-chat-messages-wrapper:not(.my) time{color:#fff}",""]),t.exports=r}}]);