(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1277:function(t,n,r){"use strict";r.r(n);var e=r(397),progress=r(52),o={name:"PagesIssuesDetailsId",components:{ScAvatar:e.a,ScProgressLinear:progress.d,ScProgressBar:progress.a,ScProgressLabel:progress.c},computed:{issue:function(){return this.$store.getters["issues/issue"](this.$route.params.id)[0]}},methods:{priorityLabel:function(t){var n=null;switch(t){case"minor":n="uk-label-success";break;case"major":n="";break;case"critical":n="uk-label-warning";break;case"blocker":n="uk-label-danger"}return n}}},c=r(2),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return t.issue?n("div",{attrs:{id:"sc-page-wrapper"}},[n("div",{staticClass:"sc-top-bar",attrs:{id:"sc-page-top-bar"}},[n("div",{staticClass:"sc-top-bar-content sc-padding-medium-top sc-padding-medium-bottom uk-flex-1"},[n("div",{staticClass:"uk-flex-1"},[n("h1",{staticClass:"sc-top-bar-title"},[t._v("\n\t\t\t\t\t"+t._s(t.issue.title)+"\n\t\t\t\t")]),t._v(" "),n("span",{staticClass:"uk-text-muted"},[n("nuxt-link",{attrs:{to:"/pages/issues/list"}},[t._v("scutum")]),t._v(" > "+t._s(t.issue.issueId)+"\n\t\t\t\t")],1)]),t._v(" "),t._m(0)])]),t._v(" "),n("div",{attrs:{id:"sc-page-content"}},[n("ScCard",[n("ScCardBody",[n("div",{staticClass:"uk-grid uk-grid-divider uk-grid",attrs:{"data-uk-grid":""}},[n("div",{staticClass:"uk-width-3-4@l"},[n("div",{staticClass:"uk-flex uk-flex-wrap",attrs:{"data-uk-margin":""}},[n("button",{staticClass:"sc-button sc-button-flex uk-margin-small-right"},[n("i",{staticClass:"mdi mdi-pencil-outline uk-margin-small-right"}),t._v("\n\t\t\t\t\t\t\t\tEdit\n\t\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"uk-button-group uk-margin-small-right uk-visible@m"},[n("button",{staticClass:"sc-button"},[t._v("\n\t\t\t\t\t\t\t\t\tAssign\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("button",{staticClass:"sc-button"},[t._v("\n\t\t\t\t\t\t\t\t\tStart Progress\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("button",{staticClass:"sc-button"},[t._v("\n\t\t\t\t\t\t\t\t\tClose Issue\n\t\t\t\t\t\t\t\t")])]),t._v(" "),n("button",{staticClass:"sc-button sc-button-flex"},[t._v("\n\t\t\t\t\t\t\t\tLog Time\n\t\t\t\t\t\t\t")])]),t._v(" "),n("hr"),t._v(" "),n("section",[n("span",{staticClass:"sc-color-secondary"},[t._v("Description:")]),t._v(" "),n("div",{staticClass:"uk-margin-small-top"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.issue.description)+"\n\t\t\t\t\t\t\t")])]),t._v(" "),n("hr"),t._v(" "),n("section",[n("span",{staticClass:"sc-color-secondary"},[t._v("Comments:")]),n("br"),t._v(" "),n("ul",{staticClass:"uk-comment-list uk-margin-small-top"},[n("li",[n("article",{staticClass:"uk-comment uk-visible-toggle",attrs:{tabindex:"-1"}},[n("header",{staticClass:"uk-comment-header uk-position-relative"},[n("h4",{staticClass:"uk-comment-title uk-margin-remove"},[n("a",{staticClass:"uk-link-reset",attrs:{href:"javascript:void(0)"}},[t._v("Glenna Reichert")])]),t._v(" "),n("p",{staticClass:"uk-comment-meta"},[n("a",{staticClass:"uk-link-reset",attrs:{href:"javascript:void(0)"}},[t._v("2 days ago")])]),t._v(" "),n("div",{staticClass:"uk-position-top-right uk-margin-small-top uk-margin-small-right uk-hidden-hover"},[n("a",{staticClass:"uk-link-muted",attrs:{href:"javascript:void(0)"}},[t._v("Reply")])])]),t._v(" "),n("div",{staticClass:"uk-comment-body"},[n("p",[t._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.")])])]),t._v(" "),n("ul",[n("li",[n("article",{staticClass:"uk-comment uk-visible-toggle",attrs:{tabindex:"-1"}},[n("header",{staticClass:"uk-comment-header uk-position-relative"},[n("h4",{staticClass:"uk-comment-title uk-margin-remove"},[n("a",{staticClass:"uk-link-reset",attrs:{href:"javascript:void(0)"}},[t._v("Clementina DuBuque")])]),t._v(" "),n("p",{staticClass:"uk-comment-meta"},[n("a",{staticClass:"uk-link-reset",attrs:{href:"javascript:void(0)"}},[t._v("1 days ago")])]),t._v(" "),n("div",{staticClass:"uk-position-top-right uk-margin-small-top uk-margin-small-right uk-hidden-hover"},[n("a",{staticClass:"uk-link-muted",attrs:{href:"javascript:void(0)"}},[t._v("Reply")])])]),t._v(" "),n("div",{staticClass:"uk-comment-body"},[n("p",[t._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.")])])])])])]),t._v(" "),n("li",[n("article",{staticClass:"uk-comment uk-visible-toggle",attrs:{tabindex:"-1"}},[n("header",{staticClass:"uk-comment-header uk-position-relative"},[n("h4",{staticClass:"uk-comment-title uk-margin-remove"},[n("a",{staticClass:"uk-link-reset",attrs:{href:"javascript:void(0)"}},[t._v("John Doe")])]),t._v(" "),n("p",{staticClass:"uk-comment-meta"},[n("a",{staticClass:"uk-link-reset",attrs:{href:"javascript:void(0)"}},[t._v("4 days ago")])]),t._v(" "),n("div",{staticClass:"uk-position-top-right uk-margin-small-top uk-margin-small-right uk-hidden-hover"},[n("a",{staticClass:"uk-link-muted",attrs:{href:"javascript:void(0)"}},[t._v("Reply")])])]),t._v(" "),n("div",{staticClass:"uk-comment-body"},[n("p",[t._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.")])])])])]),t._v(" "),n("button",{staticClass:"sc-button sc-button-default sc-button-small sc-button-outline"},[t._v("\n\t\t\t\t\t\t\t\tAdd Comment\n\t\t\t\t\t\t\t")])])]),t._v(" "),n("div",{staticClass:"uk-width-1-4@l"},[n("span",{staticClass:"sc-color-secondary"},[t._v("Details")]),t._v(" "),n("ul",{staticClass:"uk-list uk-list-divider uk-margin-small-top"},[n("li",{staticClass:"sc-list-group"},[n("div",{staticClass:"sc-list-addon"},[n("i",{staticClass:"mdi mdi-information-outline"})]),t._v(" "),n("div",{staticClass:"sc-list-body"},[n("div",[n("span",{staticClass:"sc-color-secondary uk-margin-small-right"},[t._v("Status:")]),t._v(" "),n("span",{staticClass:"uk-label uk-label-outline"},[t._v(t._s(t.issue.status))])])])]),t._v(" "),n("li",{staticClass:"sc-list-group"},[n("div",{staticClass:"sc-list-addon"},[n("i",{staticClass:"mdi mdi-star-outline"})]),t._v(" "),n("div",{staticClass:"sc-list-body"},[n("div",[n("span",{staticClass:"sc-color-secondary uk-margin-small-right"},[t._v("Priority:")]),t._v(" "),n("span",{staticClass:"uk-label",class:[t.priorityLabel(t.issue.priority)]},[t._v(" "+t._s(t.issue.priority))])])])]),t._v(" "),n("li",{staticClass:"sc-list-group"},[n("div",{staticClass:"sc-list-addon"},[n("ScAvatar",{attrs:{"avatar-id":5}})],1),t._v(" "),n("div",{staticClass:"sc-list-body"},[n("span",{staticClass:"sc-text-semibold"},[t._v(t._s(t.issue.user))]),t._v(" "),n("span",{staticClass:"sc-color-secondary"},[t._v("Assignee")])])]),t._v(" "),n("li",{staticClass:"sc-list-group"},[n("div",{staticClass:"sc-list-addon"},[n("i",{staticClass:"mdi mdi-clock-outline"})]),t._v(" "),n("div",{staticClass:"sc-list-body"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.issue.created)+"\n\t\t\t\t\t\t\t\t\t"),n("span",{staticClass:"sc-color-secondary"},[t._v("Created")])])]),t._v(" "),n("li",{staticClass:"sc-list-group"},[n("div",{staticClass:"sc-list-addon"},[n("i",{staticClass:"mdi mdi-progress-clock"})]),t._v(" "),n("div",{staticClass:"sc-list-body"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.issue.modified)+"\n\t\t\t\t\t\t\t\t\t"),n("span",{staticClass:"sc-color-secondary"},[t._v("Modified")])])])]),t._v(" "),n("hr"),t._v(" "),n("span",{staticClass:"sc-color-secondary"},[t._v("Time Tracking")]),t._v(" "),n("ul",{staticClass:"uk-list uk-margin-small-top"},[n("li",[n("ScProgressLinear",{staticClass:"uk-width-1-1",attrs:{size:"md"},scopedSlots:t._u([{key:"label",fn:function(){return[n("ScProgressLabel",{staticClass:"uk-text-left"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tEstimated: 4d\n\t\t\t\t\t\t\t\t\t\t")])]},proxy:!0}],null,!1,4294863945)},[t._v(" "),n("ScProgressBar",{attrs:{value:100,color:"md-bg-light-green-600"}})],1)],1),t._v(" "),n("li",[n("ScProgressLinear",{staticClass:"uk-width-1-1",attrs:{size:"md"},scopedSlots:t._u([{key:"label",fn:function(){return[n("ScProgressLabel",{staticClass:"uk-text-left"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tLogged: 1d\n\t\t\t\t\t\t\t\t\t\t")])]},proxy:!0}],null,!1,2905748636)},[t._v(" "),n("ScProgressBar",{attrs:{value:25,color:"md-bg-orange-800"}})],1)],1)])])])])],1)],1)]):t._e()}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"sc-actions uk-margin-left uk-visible@s"},[n("a",{staticClass:"sc-actions-icon mdi mdi-pencil-outline",attrs:{href:"javascript:void(0)"}}),t._v(" "),n("a",{staticClass:"sc-actions-icon mdi mdi-printer",attrs:{href:"javascript:void(0)"}}),t._v(" "),n("a",{staticClass:"sc-actions-icon mdi mdi-dots-vertical",attrs:{href:"javascript:void(0)"}})])}],!1,null,null,null);n.default=component.exports},274:function(t,n,r){t.exports=r.p+"img/avatar_01_sm.f998161.png"},275:function(t,n,r){t.exports=r.p+"img/avatar_01_sm@2x.6649141.png"},276:function(t,n,r){t.exports=r.p+"img/avatar_06_sm.b0047ea.png"},277:function(t,n,r){t.exports=r.p+"img/avatar_03_sm@2x.9f5d47e.png"},278:function(t,n,r){t.exports=r.p+"img/avatar_04_sm@2x.61057ef.png"},279:function(t,n,r){t.exports=r.p+"img/avatar_05_sm.5b5ea5a.png"},280:function(t,n,r){t.exports=r.p+"img/avatar_06_sm@2x.b177b92.png"},281:function(t,n,r){t.exports=r.p+"img/avatar_07_sm@2x.5701d61.png"},291:function(t,n,r){t.exports=r.p+"img/avatar_010_sm.77b4bcf.png"},292:function(t,n,r){t.exports=r.p+"img/avatar_010_sm@2x.a55fa15.png"},293:function(t,n,r){t.exports=r.p+"img/avatar_02_sm@2x.e94193b.png"},294:function(t,n,r){t.exports=r.p+"img/avatar_05_md@2x.e8b8026.png"},295:function(t,n,r){t.exports=r.p+"img/avatar_05_sm@2x.255a6c7.png"},296:function(t,n,r){t.exports=r.p+"img/avatar_08_sm.ef65222.png"},297:function(t,n,r){t.exports=r.p+"img/avatar_08_sm@2x.dc8caa9.png"},298:function(t,n,r){t.exports=r.p+"img/avatar_09_sm.8bbca6f.png"},299:function(t,n,r){t.exports=r.p+"img/avatar_09_sm@2x.e046f9a.png"},333:function(t,n,r){t.exports=r.p+"img/avatar_01.1eb7c9a.png"},338:function(t,n,r){var map={"./avatar_01.png":333,"./avatar_010.png":339,"./avatar_010@2x.png":340,"./avatar_010_lg.png":341,"./avatar_010_lg@2x.png":342,"./avatar_010_md.png":343,"./avatar_010_md@2x.png":344,"./avatar_010_sm.png":291,"./avatar_010_sm@2x.png":292,"./avatar_01@2x.png":345,"./avatar_01_lg.png":346,"./avatar_01_lg@2x.png":347,"./avatar_01_md.png":348,"./avatar_01_md@2x.png":349,"./avatar_01_sm.png":274,"./avatar_01_sm@2x.png":275,"./avatar_02.png":350,"./avatar_02@2x.png":351,"./avatar_02_lg.png":352,"./avatar_02_lg@2x.png":353,"./avatar_02_md.png":354,"./avatar_02_md@2x.png":355,"./avatar_02_sm.png":146,"./avatar_02_sm@2x.png":293,"./avatar_03.png":356,"./avatar_03@2x.png":357,"./avatar_03_lg.png":358,"./avatar_03_lg@2x.png":359,"./avatar_03_md.png":360,"./avatar_03_md@2x.png":361,"./avatar_03_sm.png":144,"./avatar_03_sm@2x.png":277,"./avatar_04.png":362,"./avatar_04@2x.png":363,"./avatar_04_lg.png":364,"./avatar_04_lg@2x.png":365,"./avatar_04_md.png":366,"./avatar_04_md@2x.png":367,"./avatar_04_sm.png":145,"./avatar_04_sm@2x.png":278,"./avatar_05.png":368,"./avatar_05@2x.png":369,"./avatar_05_lg.png":370,"./avatar_05_lg@2x.png":371,"./avatar_05_md.png":372,"./avatar_05_md@2x.png":294,"./avatar_05_sm.png":279,"./avatar_05_sm@2x.png":295,"./avatar_06.png":373,"./avatar_06@2x.png":374,"./avatar_06_lg.png":375,"./avatar_06_lg@2x.png":376,"./avatar_06_md.png":377,"./avatar_06_md@2x.png":378,"./avatar_06_sm.png":276,"./avatar_06_sm@2x.png":280,"./avatar_07.png":379,"./avatar_07@2x.png":380,"./avatar_07_lg.png":381,"./avatar_07_lg@2x.png":382,"./avatar_07_md.png":383,"./avatar_07_md@2x.png":384,"./avatar_07_sm.png":143,"./avatar_07_sm@2x.png":281,"./avatar_08.png":385,"./avatar_08@2x.png":386,"./avatar_08_lg.png":387,"./avatar_08_lg@2x.png":388,"./avatar_08_md.png":389,"./avatar_08_md@2x.png":390,"./avatar_08_sm.png":296,"./avatar_08_sm@2x.png":297,"./avatar_09.png":391,"./avatar_09@2x.png":392,"./avatar_09_lg.png":393,"./avatar_09_lg@2x.png":394,"./avatar_09_md.png":395,"./avatar_09_md@2x.png":396,"./avatar_09_sm.png":298,"./avatar_09_sm@2x.png":299};function e(t){var n=o(t);return r(n)}function o(t){if(!r.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}e.keys=function(){return Object.keys(map)},e.resolve=o,t.exports=e,e.id=338},339:function(t,n,r){t.exports=r.p+"img/avatar_010.082c45d.png"},340:function(t,n,r){t.exports=r.p+"img/avatar_010@2x.2fdefdd.png"},341:function(t,n,r){t.exports=r.p+"img/avatar_010_lg.953997a.png"},342:function(t,n,r){t.exports=r.p+"img/avatar_010_lg@2x.72c3064.png"},343:function(t,n,r){t.exports=r.p+"img/avatar_010_md.91ccf0d.png"},344:function(t,n,r){t.exports=r.p+"img/avatar_010_md@2x.0484465.png"},345:function(t,n,r){t.exports=r.p+"img/avatar_01@2x.8aae108.png"},346:function(t,n,r){t.exports=r.p+"img/avatar_01_lg.f324e39.png"},347:function(t,n,r){t.exports=r.p+"img/avatar_01_lg@2x.09a7177.png"},348:function(t,n,r){t.exports=r.p+"img/avatar_01_md.e5ef723.png"},349:function(t,n,r){t.exports=r.p+"img/avatar_01_md@2x.35b024c.png"},350:function(t,n,r){t.exports=r.p+"img/avatar_02.88885a7.png"},351:function(t,n,r){t.exports=r.p+"img/avatar_02@2x.fc2816a.png"},352:function(t,n,r){t.exports=r.p+"img/avatar_02_lg.61a0613.png"},353:function(t,n,r){t.exports=r.p+"img/avatar_02_lg@2x.eb51277.png"},354:function(t,n,r){t.exports=r.p+"img/avatar_02_md.ec42b19.png"},355:function(t,n,r){t.exports=r.p+"img/avatar_02_md@2x.874168c.png"},356:function(t,n,r){t.exports=r.p+"img/avatar_03.44b4097.png"},357:function(t,n,r){t.exports=r.p+"img/avatar_03@2x.3bc63d1.png"},358:function(t,n,r){t.exports=r.p+"img/avatar_03_lg.390d2f8.png"},359:function(t,n,r){t.exports=r.p+"img/avatar_03_lg@2x.4965071.png"},360:function(t,n,r){t.exports=r.p+"img/avatar_03_md.1ecd497.png"},361:function(t,n,r){t.exports=r.p+"img/avatar_03_md@2x.9d92182.png"},362:function(t,n,r){t.exports=r.p+"img/avatar_04.4fa3271.png"},363:function(t,n,r){t.exports=r.p+"img/avatar_04@2x.eac7398.png"},364:function(t,n,r){t.exports=r.p+"img/avatar_04_lg.529b5fc.png"},365:function(t,n,r){t.exports=r.p+"img/avatar_04_lg@2x.571f0b4.png"},366:function(t,n,r){t.exports=r.p+"img/avatar_04_md.275e0ae.png"},367:function(t,n,r){t.exports=r.p+"img/avatar_04_md@2x.a211a8b.png"},368:function(t,n,r){t.exports=r.p+"img/avatar_05.ab963be.png"},369:function(t,n,r){t.exports=r.p+"img/avatar_05@2x.04bff13.png"},370:function(t,n,r){t.exports=r.p+"img/avatar_05_lg.a22ff26.png"},371:function(t,n,r){t.exports=r.p+"img/avatar_05_lg@2x.71651b7.png"},372:function(t,n,r){t.exports=r.p+"img/avatar_05_md.7c2ff7f.png"},373:function(t,n,r){t.exports=r.p+"img/avatar_06.9da1f77.png"},374:function(t,n,r){t.exports=r.p+"img/avatar_06@2x.c5389d5.png"},375:function(t,n,r){t.exports=r.p+"img/avatar_06_lg.7214645.png"},376:function(t,n,r){t.exports=r.p+"img/avatar_06_lg@2x.285c443.png"},377:function(t,n,r){t.exports=r.p+"img/avatar_06_md.4ef543e.png"},378:function(t,n,r){t.exports=r.p+"img/avatar_06_md@2x.f871714.png"},379:function(t,n,r){t.exports=r.p+"img/avatar_07.03b8b3d.png"},380:function(t,n,r){t.exports=r.p+"img/avatar_07@2x.9148935.png"},381:function(t,n,r){t.exports=r.p+"img/avatar_07_lg.f82ea02.png"},382:function(t,n,r){t.exports=r.p+"img/avatar_07_lg@2x.346769e.png"},383:function(t,n,r){t.exports=r.p+"img/avatar_07_md.1a9fa22.png"},384:function(t,n,r){t.exports=r.p+"img/avatar_07_md@2x.8c22866.png"},385:function(t,n,r){t.exports=r.p+"img/avatar_08.5db169a.png"},386:function(t,n,r){t.exports=r.p+"img/avatar_08@2x.3199af7.png"},387:function(t,n,r){t.exports=r.p+"img/avatar_08_lg.8849eb2.png"},388:function(t,n,r){t.exports=r.p+"img/avatar_08_lg@2x.768b5d8.png"},389:function(t,n,r){t.exports=r.p+"img/avatar_08_md.db8f72f.png"},390:function(t,n,r){t.exports=r.p+"img/avatar_08_md@2x.4538886.png"},391:function(t,n,r){t.exports=r.p+"img/avatar_09.7e43146.png"},392:function(t,n,r){t.exports=r.p+"img/avatar_09@2x.a4203b0.png"},393:function(t,n,r){t.exports=r.p+"img/avatar_09_lg.25b213f.png"},394:function(t,n,r){t.exports=r.p+"img/avatar_09_lg@2x.34e30da.png"},395:function(t,n,r){t.exports=r.p+"img/avatar_09_md.396b8fa.png"},396:function(t,n,r){t.exports=r.p+"img/avatar_09_md@2x.f1f0d46.png"},397:function(t,n,r){"use strict";r(64);var e={name:"ScAvatar",props:{avatarId:{type:Number,default:1,required:!0},size:{type:String,default:"sm"},alt:{type:String,default:""},status:{type:String,default:null},extraClass:{type:String,default:""}},computed:{avatarSrc:function(){return r(338)("./avatar_0"+this.avatarId+("_default"===this.size?"":"_"+this.size)+".png")},wrapperClass:function(){return"sc-avatar-wrapper-"+("_default"===this.size?"":this.size)}}},o=r(2),component=Object(o.a)(e,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"uk-display-inline-block"},[t.status?n("div",{staticClass:"sc-avatar-wrapper",class:t.wrapperClass},[n("span",{staticClass:"sc-user-status",class:t.status}),t._v(" "),n("img",{staticClass:"sc-avatar",class:t.extraClass,attrs:{src:t.avatarSrc,alt:t.alt}})]):t._e(),t._v(" "),t.status?t._e():n("img",{staticClass:"sc-avatar",class:t.extraClass,attrs:{src:t.avatarSrc,alt:t.alt}})])}),[],!1,null,null,null);n.a=component.exports}}]);