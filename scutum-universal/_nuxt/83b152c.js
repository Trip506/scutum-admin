(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1002:function(t,n){!function(t){t.fn.listnav=function(n){var e=t.extend({},t.fn.listnav.defaults,n),r=["_","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","-"],o=!1,l="";return l=null!==document.ontouchstart?"click":"touchend click",e.prefixes=t.map(e.prefixes,(function(t){return t.toLowerCase()})),this.each((function(){var n,c,d,_,v,m,f=this.id,x=t(this),h={},C=0,k=!0,w="";function N(t,n,e){/\W/.test(t)&&(t="-"),isNaN(t)||(t="_"),n.addClass("ln-"+t),void 0===h[t]&&(h[t]=0),h[t]++,e||C++}function y(n){return t(n).hasClass("all")?e.dontCount?C-x.find(e.dontCount).length:C:(n=".ln-"+t(n).attr("class").split(" ")[0],void 0!==(m=e.dontCount?x.find(n).not(e.dontCount).length:x.find(n).length)?m:0)}t("#"+f+"-nav").length||t('<div id="'+f+'-nav" class="listNav"/>').insertBefore(x),n=t("#"+f+"-nav"),function(){var f,C,S,H;if(n.append(function(){for(var html=[],i=1;i<r.length;i++)0===html.length&&html.push('<a class="all" href="#">'+e.allText+'</a><a class="_" href="#">0-9</a>'),html.push('<a class="'+r[i]+'" href="#">'+("-"===r[i]?"...":r[i].toUpperCase())+"</a>");return'<div class="ln-letters">'+html.join("")+"</div>"+(e.showCounts?'<div class="ln-letter-count listNavHide">0</div>':"")}()),c=t(".ln-letters",n).slice(0,1),e.showCounts&&(d=t(".ln-letter-count",n).slice(0,1)),S=e.prefixes.length>0,H=e.filterSelector.length>0,t(x).children().each((function(){if(C=t(this),""!==(f=H?t.trim(C.find(e.filterSelector).text()).toLowerCase():t.trim(C.text()).toLowerCase())){if(S){var n=t.map(e.prefixes,(function(t){return t.indexOf(" ")<=0?t+" ":t})),r=t.grep(n,(function(t){return 0===f.indexOf(t)}));if(r.length>0){var o=f.toLowerCase().split(r[0])[1];return void N(null!==o?t.trim(o).charAt(0):f.charAt(0),C,!0)}}N(f.charAt(0),C)}})),x.append('<li class="ln-no-match listNavHide">'+e.noMatchText+"</li>"),function(){e.showCounts&&(n.mouseover((function(){var e;e=d.outerHeight(),d.css({top:t("a:first",n).slice(0,1).position().top-e})})),t(".ln-letters a",n).mouseover((function(){_=t(this).position().left,v=t(this).outerWidth()+"px",m=y(this),d.css({left:_,width:v}).text(m).addClass("letterCountShow").removeClass("listNavHide")})).mouseout((function(){d.addClass("listNavHide").removeClass("letterCountShow")})));t("a",c).on(l,(function(n){n.preventDefault();var r=t(this),l=r.attr("class").split(" ")[0],d=x.children(".ln-no-match");if(e.initHidden&&x.children(".ln-init-hidden").remove(),w!==l){if(t("a.ln-selected",c).removeClass("ln-selected"),"all"===l)x.children().addClass("listNavShow").removeClass("listNavHide"),d.addClass("listNavHide").removeClass("listNavShow"),k=!0;else k?(x.children().addClass("listNavHide").removeClass("listNavShow"),k=!1):""!==w&&x.children(".ln-"+w).addClass("listNavHide").removeClass("listNavShow"),y(this)>0?(x.children(".ln-"+l).addClass("listNavShow").removeClass("listNavHide"),d.addClass("listNavHide").removeClass("listNavShow")):d.addClass("listNavShow").removeClass("listNavHide");w=l,t.cookie&&null!==e.cookieName&&t.cookie(e.cookieName,l,{expires:999}),r.addClass("ln-selected"),r.blur(),o||null===e.onClick?o=!1:e.onClick(l)}void 0!==e.onAfterFilter&&e.onAfterFilter(l)}))}(),e.flagDisabled&&function(){for(var i=0;i<r.length;i++)void 0===h[r[i]]&&t("."+r[i],c).addClass("ln-disabled")}(),e.includeAll||t(".all",c).remove(),e.includeNums||t("._",c).remove(),e.includeOther||t(".-",c).remove(),e.removeDisabled&&t(".ln-disabled",c).remove(),t(":last",c).addClass("ln-last"),t.cookie&&null!==e.cookieName){var A=t.cookie(e.cookieName);null!=A&&(e.initLetter=A)}if(""!==e.initLetter)o=!0,t("."+e.initLetter.toLowerCase(),c).slice(0,1).trigger("click");else if(e.initHidden)x.append('<li class="ln-init-hidden listNavHide">'+e.initHiddenText+"</li>"),x.children().addClass("listNavHide"),x.children(".ln-init-hidden").removeClass("listNavHide");else if(e.includeAll)t(".all",c).addClass("ln-selected");else for(var i=e.includeNums?0:1;i<r.length;i++)if(h[r[i]]>0){o=!0,t("."+r[i],c).slice(0,1).trigger("click");break}}()}))},t.fn.listnav.defaults={initHidden:!1,initHiddenText:"Tap a letter above to view matching items",initLetter:"",includeAll:!0,allText:"All",includeOther:!1,includeNums:!0,flagDisabled:!0,removeDisabled:!1,noMatchText:"No matching entries",showCounts:!0,dontCount:"",cookieName:null,onClick:null,prefixes:[],filterSelector:"",onAfterFilter:null}}(jQuery)},1003:function(t,n,e){"use strict";e(748)},1004:function(t,n,e){var r=e(10)(!1);r.push([t.i,".listNav,.listNavHide,.ln-letters{overflow:hidden}.listNavHide{position:absolute;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0}.letterCountShow{display:block}.ln-letters{flex-wrap:wrap;margin-bottom:24px;align-items:center;display:flex;border-left:1px solid #e1e1e1;padding:1px 0 0 1px;margin-left:-1px}.ln-letters a{border:1px solid #e1e1e1;display:block;font-size:14px;font-size:.875rem;padding:8px 16px;text-decoration:none;background:#fff;color:rgba(0,0,0,.87);flex-shrink:0;min-width:20px;text-align:center;margin-top:-1px}.ln-letters a:first-child{margin-left:-1px}.ln-letters a+a{margin:-1px 0 0 -1px}.ln-letters .ln-selected,.ln-letters a:hover{background-color:#00acc1;border-color:#00acc1;color:#fff;position:relative;z-index:10}.ln-letters .ln-disabled{background:rgba(0,0,0,.02)!important;color:rgba(0,0,0,.4)!important;border-color:#e1e1e1!important}.ln-no-match{list-style:none;margin:0;font-size:18px;font-size:1.125rem}.ln-letter-count{color:rgba(0,0,0,.54);font-size:12px;font-size:.75rem;left:0;position:absolute;text-align:center;top:0;width:20px;margin-left:-1px;margin-top:-2px}",""]),t.exports=r},1270:function(t,n,e){"use strict";e.r(n);var r=e(3),o=e(397),l=r.d.uniqueID,c=r.c.first,d=r.c.last,_=r.c.email,v=r.c.phone,address=r.c.address,m=r.c.city,f=r.c.company,x=r.c.sentence;e(267);e(150).Chance();e(1002);var h={name:"PagesContactList",components:{ScAvatar:o.a},computed:{users:function(){for(var t=[],i=0;i<60;i++)t.push({id:l(),fName:c(),lName:d(),phone:v(),email:_(),address:address()+", "+m(),company:f(),info:x({words:10})});return t}},mounted:function(){setTimeout((function(){var t=$("#sc-contact-list");t.listnav({noMatchText:"No matching contacts",onAfterFilter:function(n){console.log("Letter changed to "+n),UIkit.update(t)}})}),100)},methods:{randAvatar:function(){return Math.floor(10*Math.random())+1},avatarClass:function(t){return 2===t||6===t?"sc-border":""}}},C=(e(1003),e(2)),component=Object(C.a)(h,(function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"sc-page-wrapper"}},[n("div",{attrs:{id:"sc-page-content"}},[n("ul",{staticClass:"uk-child-width-1-1 uk-child-width-1-2@m uk-child-width-1-3@l uk-grid",attrs:{id:"sc-contact-list","data-uk-grid":""}},t._l(t.users,(function(e,r){return n("li",{key:e.id},[n("ScCard",{attrs:{hover:""}},[n("ScCardBody",{staticClass:"sc-padding-remove"},[n("div",{staticClass:"uk-grid-divider uk-grid-collapse",attrs:{"data-uk-grid":""}},[n("div",{staticClass:"uk-width-1-3@l uk-flex uk-flex-middle uk-flex-center",class:{"md-bg-light-green-700":2===r,"md-bg-pink-700":6===r}},[n("div",{staticClass:"sc-padding-medium uk-text-center"},[n("ScAvatar",{attrs:{"avatar-id":t.randAvatar(),size:"md","extra-class":t.avatarClass(r)}}),t._v(" "),n("p",{staticClass:"sc-text-semibold uk-margin uk-margin-remove-bottom",class:{"md-color-white":2===r||6===r}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.fName)+"\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.lName)+"\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("p",{staticClass:"uk-margin-remove sc-color-secondary uk-text-medium",class:{"md-color-white":2===r||6===r}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.company)+"\n\t\t\t\t\t\t\t\t\t")])],1)]),t._v(" "),n("div",{staticClass:"uk-width-2-3@l"},[n("div",{staticClass:"sc-padding-medium"},[n("ul",{staticClass:"uk-list uk-list-divider"},[n("li",{staticClass:"sc-list-group"},[n("div",{staticClass:"sc-list-addon"},[n("i",{staticClass:"mdi mdi-phone"})]),t._v(" "),n("div",{staticClass:"sc-list-body"},[n("p",{staticClass:"uk-margin-remove sc-text-semibold"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.phone)+"\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("span",{staticClass:"sc-list-secondary-text"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit.\n\t\t\t\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),n("li",{staticClass:"sc-list-group"},[n("div",{staticClass:"sc-list-addon"},[n("i",{staticClass:"mdi mdi-email"})]),t._v(" "),n("div",{staticClass:"sc-list-body"},[n("p",{staticClass:"uk-margin-remove"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.email)+"\n\t\t\t\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),n("li",{staticClass:"sc-list-group"},[n("div",{staticClass:"sc-list-addon"},[n("i",{staticClass:"mdi mdi-office-building"})]),t._v(" "),n("div",{staticClass:"sc-list-body"},[n("p",{staticClass:"uk-margin-remove uk-text-wrap"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.address)+"\n\t\t\t\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),n("li",{staticClass:"sc-list-group"},[n("div",{staticClass:"sc-list-addon"},[n("i",{staticClass:"mdi mdi-information-outline"})]),t._v(" "),n("div",{staticClass:"sc-list-body"},[n("p",{staticClass:"uk-margin-remove uk-text-wrap"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.info)+"\n\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])])])])],1)],1)})),0)])])}),[],!1,null,null,null);n.default=component.exports},267:function(t,n,e){var r=e(268);window.jQuery=window.$=r},274:function(t,n,e){t.exports=e.p+"img/avatar_01_sm.f998161.png"},275:function(t,n,e){t.exports=e.p+"img/avatar_01_sm@2x.6649141.png"},276:function(t,n,e){t.exports=e.p+"img/avatar_06_sm.b0047ea.png"},277:function(t,n,e){t.exports=e.p+"img/avatar_03_sm@2x.9f5d47e.png"},278:function(t,n,e){t.exports=e.p+"img/avatar_04_sm@2x.61057ef.png"},279:function(t,n,e){t.exports=e.p+"img/avatar_05_sm.5b5ea5a.png"},280:function(t,n,e){t.exports=e.p+"img/avatar_06_sm@2x.b177b92.png"},281:function(t,n,e){t.exports=e.p+"img/avatar_07_sm@2x.5701d61.png"},291:function(t,n,e){t.exports=e.p+"img/avatar_010_sm.77b4bcf.png"},292:function(t,n,e){t.exports=e.p+"img/avatar_010_sm@2x.a55fa15.png"},293:function(t,n,e){t.exports=e.p+"img/avatar_02_sm@2x.e94193b.png"},294:function(t,n,e){t.exports=e.p+"img/avatar_05_md@2x.e8b8026.png"},295:function(t,n,e){t.exports=e.p+"img/avatar_05_sm@2x.255a6c7.png"},296:function(t,n,e){t.exports=e.p+"img/avatar_08_sm.ef65222.png"},297:function(t,n,e){t.exports=e.p+"img/avatar_08_sm@2x.dc8caa9.png"},298:function(t,n,e){t.exports=e.p+"img/avatar_09_sm.8bbca6f.png"},299:function(t,n,e){t.exports=e.p+"img/avatar_09_sm@2x.e046f9a.png"},333:function(t,n,e){t.exports=e.p+"img/avatar_01.1eb7c9a.png"},338:function(t,n,e){var map={"./avatar_01.png":333,"./avatar_010.png":339,"./avatar_010@2x.png":340,"./avatar_010_lg.png":341,"./avatar_010_lg@2x.png":342,"./avatar_010_md.png":343,"./avatar_010_md@2x.png":344,"./avatar_010_sm.png":291,"./avatar_010_sm@2x.png":292,"./avatar_01@2x.png":345,"./avatar_01_lg.png":346,"./avatar_01_lg@2x.png":347,"./avatar_01_md.png":348,"./avatar_01_md@2x.png":349,"./avatar_01_sm.png":274,"./avatar_01_sm@2x.png":275,"./avatar_02.png":350,"./avatar_02@2x.png":351,"./avatar_02_lg.png":352,"./avatar_02_lg@2x.png":353,"./avatar_02_md.png":354,"./avatar_02_md@2x.png":355,"./avatar_02_sm.png":146,"./avatar_02_sm@2x.png":293,"./avatar_03.png":356,"./avatar_03@2x.png":357,"./avatar_03_lg.png":358,"./avatar_03_lg@2x.png":359,"./avatar_03_md.png":360,"./avatar_03_md@2x.png":361,"./avatar_03_sm.png":144,"./avatar_03_sm@2x.png":277,"./avatar_04.png":362,"./avatar_04@2x.png":363,"./avatar_04_lg.png":364,"./avatar_04_lg@2x.png":365,"./avatar_04_md.png":366,"./avatar_04_md@2x.png":367,"./avatar_04_sm.png":145,"./avatar_04_sm@2x.png":278,"./avatar_05.png":368,"./avatar_05@2x.png":369,"./avatar_05_lg.png":370,"./avatar_05_lg@2x.png":371,"./avatar_05_md.png":372,"./avatar_05_md@2x.png":294,"./avatar_05_sm.png":279,"./avatar_05_sm@2x.png":295,"./avatar_06.png":373,"./avatar_06@2x.png":374,"./avatar_06_lg.png":375,"./avatar_06_lg@2x.png":376,"./avatar_06_md.png":377,"./avatar_06_md@2x.png":378,"./avatar_06_sm.png":276,"./avatar_06_sm@2x.png":280,"./avatar_07.png":379,"./avatar_07@2x.png":380,"./avatar_07_lg.png":381,"./avatar_07_lg@2x.png":382,"./avatar_07_md.png":383,"./avatar_07_md@2x.png":384,"./avatar_07_sm.png":143,"./avatar_07_sm@2x.png":281,"./avatar_08.png":385,"./avatar_08@2x.png":386,"./avatar_08_lg.png":387,"./avatar_08_lg@2x.png":388,"./avatar_08_md.png":389,"./avatar_08_md@2x.png":390,"./avatar_08_sm.png":296,"./avatar_08_sm@2x.png":297,"./avatar_09.png":391,"./avatar_09@2x.png":392,"./avatar_09_lg.png":393,"./avatar_09_lg@2x.png":394,"./avatar_09_md.png":395,"./avatar_09_md@2x.png":396,"./avatar_09_sm.png":298,"./avatar_09_sm@2x.png":299};function r(t){var n=o(t);return e(n)}function o(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=338},339:function(t,n,e){t.exports=e.p+"img/avatar_010.082c45d.png"},340:function(t,n,e){t.exports=e.p+"img/avatar_010@2x.2fdefdd.png"},341:function(t,n,e){t.exports=e.p+"img/avatar_010_lg.953997a.png"},342:function(t,n,e){t.exports=e.p+"img/avatar_010_lg@2x.72c3064.png"},343:function(t,n,e){t.exports=e.p+"img/avatar_010_md.91ccf0d.png"},344:function(t,n,e){t.exports=e.p+"img/avatar_010_md@2x.0484465.png"},345:function(t,n,e){t.exports=e.p+"img/avatar_01@2x.8aae108.png"},346:function(t,n,e){t.exports=e.p+"img/avatar_01_lg.f324e39.png"},347:function(t,n,e){t.exports=e.p+"img/avatar_01_lg@2x.09a7177.png"},348:function(t,n,e){t.exports=e.p+"img/avatar_01_md.e5ef723.png"},349:function(t,n,e){t.exports=e.p+"img/avatar_01_md@2x.35b024c.png"},350:function(t,n,e){t.exports=e.p+"img/avatar_02.88885a7.png"},351:function(t,n,e){t.exports=e.p+"img/avatar_02@2x.fc2816a.png"},352:function(t,n,e){t.exports=e.p+"img/avatar_02_lg.61a0613.png"},353:function(t,n,e){t.exports=e.p+"img/avatar_02_lg@2x.eb51277.png"},354:function(t,n,e){t.exports=e.p+"img/avatar_02_md.ec42b19.png"},355:function(t,n,e){t.exports=e.p+"img/avatar_02_md@2x.874168c.png"},356:function(t,n,e){t.exports=e.p+"img/avatar_03.44b4097.png"},357:function(t,n,e){t.exports=e.p+"img/avatar_03@2x.3bc63d1.png"},358:function(t,n,e){t.exports=e.p+"img/avatar_03_lg.390d2f8.png"},359:function(t,n,e){t.exports=e.p+"img/avatar_03_lg@2x.4965071.png"},360:function(t,n,e){t.exports=e.p+"img/avatar_03_md.1ecd497.png"},361:function(t,n,e){t.exports=e.p+"img/avatar_03_md@2x.9d92182.png"},362:function(t,n,e){t.exports=e.p+"img/avatar_04.4fa3271.png"},363:function(t,n,e){t.exports=e.p+"img/avatar_04@2x.eac7398.png"},364:function(t,n,e){t.exports=e.p+"img/avatar_04_lg.529b5fc.png"},365:function(t,n,e){t.exports=e.p+"img/avatar_04_lg@2x.571f0b4.png"},366:function(t,n,e){t.exports=e.p+"img/avatar_04_md.275e0ae.png"},367:function(t,n,e){t.exports=e.p+"img/avatar_04_md@2x.a211a8b.png"},368:function(t,n,e){t.exports=e.p+"img/avatar_05.ab963be.png"},369:function(t,n,e){t.exports=e.p+"img/avatar_05@2x.04bff13.png"},370:function(t,n,e){t.exports=e.p+"img/avatar_05_lg.a22ff26.png"},371:function(t,n,e){t.exports=e.p+"img/avatar_05_lg@2x.71651b7.png"},372:function(t,n,e){t.exports=e.p+"img/avatar_05_md.7c2ff7f.png"},373:function(t,n,e){t.exports=e.p+"img/avatar_06.9da1f77.png"},374:function(t,n,e){t.exports=e.p+"img/avatar_06@2x.c5389d5.png"},375:function(t,n,e){t.exports=e.p+"img/avatar_06_lg.7214645.png"},376:function(t,n,e){t.exports=e.p+"img/avatar_06_lg@2x.285c443.png"},377:function(t,n,e){t.exports=e.p+"img/avatar_06_md.4ef543e.png"},378:function(t,n,e){t.exports=e.p+"img/avatar_06_md@2x.f871714.png"},379:function(t,n,e){t.exports=e.p+"img/avatar_07.03b8b3d.png"},380:function(t,n,e){t.exports=e.p+"img/avatar_07@2x.9148935.png"},381:function(t,n,e){t.exports=e.p+"img/avatar_07_lg.f82ea02.png"},382:function(t,n,e){t.exports=e.p+"img/avatar_07_lg@2x.346769e.png"},383:function(t,n,e){t.exports=e.p+"img/avatar_07_md.1a9fa22.png"},384:function(t,n,e){t.exports=e.p+"img/avatar_07_md@2x.8c22866.png"},385:function(t,n,e){t.exports=e.p+"img/avatar_08.5db169a.png"},386:function(t,n,e){t.exports=e.p+"img/avatar_08@2x.3199af7.png"},387:function(t,n,e){t.exports=e.p+"img/avatar_08_lg.8849eb2.png"},388:function(t,n,e){t.exports=e.p+"img/avatar_08_lg@2x.768b5d8.png"},389:function(t,n,e){t.exports=e.p+"img/avatar_08_md.db8f72f.png"},390:function(t,n,e){t.exports=e.p+"img/avatar_08_md@2x.4538886.png"},391:function(t,n,e){t.exports=e.p+"img/avatar_09.7e43146.png"},392:function(t,n,e){t.exports=e.p+"img/avatar_09@2x.a4203b0.png"},393:function(t,n,e){t.exports=e.p+"img/avatar_09_lg.25b213f.png"},394:function(t,n,e){t.exports=e.p+"img/avatar_09_lg@2x.34e30da.png"},395:function(t,n,e){t.exports=e.p+"img/avatar_09_md.396b8fa.png"},396:function(t,n,e){t.exports=e.p+"img/avatar_09_md@2x.f1f0d46.png"},397:function(t,n,e){"use strict";e(64);var r={name:"ScAvatar",props:{avatarId:{type:Number,default:1,required:!0},size:{type:String,default:"sm"},alt:{type:String,default:""},status:{type:String,default:null},extraClass:{type:String,default:""}},computed:{avatarSrc:function(){return e(338)("./avatar_0"+this.avatarId+("_default"===this.size?"":"_"+this.size)+".png")},wrapperClass:function(){return"sc-avatar-wrapper-"+("_default"===this.size?"":this.size)}}},o=e(2),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"uk-display-inline-block"},[t.status?n("div",{staticClass:"sc-avatar-wrapper",class:t.wrapperClass},[n("span",{staticClass:"sc-user-status",class:t.status}),t._v(" "),n("img",{staticClass:"sc-avatar",class:t.extraClass,attrs:{src:t.avatarSrc,alt:t.alt}})]):t._e(),t._v(" "),t.status?t._e():n("img",{staticClass:"sc-avatar",class:t.extraClass,attrs:{src:t.avatarSrc,alt:t.alt}})])}),[],!1,null,null,null);n.a=component.exports},748:function(t,n,e){var content=e(1004);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(11).default)("e5014ad8",content,!0,{sourceMap:!1})}}]);