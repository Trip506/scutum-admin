(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1232:function(t,e,o){"use strict";o.r(e);o(337);var r={name:"ComponentsFooter",mounted:function(){this.$store.commit("setFooterActive",!0)},beforeDestroy:function(){this.$store.commit("setFooterActive",!1)}},n=o(2),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("div",{attrs:{id:"sc-page-content"}},[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\tFooter example\n\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e("code",[t._v("mounted () {\n\tthis.$store.commit('setFooterActive', true);\n},\nbeforeDestroy () {\n\tthis.$store.commit('setFooterActive', false);\n}")])])])],1)],1)])}),[],!1,null,null,null);e.default=component.exports},337:function(t,e,o){"use strict";o.r(e);var r=o(1),n=o(581);o(582),n.registerLanguage("xml",o(583)),n.registerLanguage("sql",o(584)),n.registerLanguage("javascript",o(585)),r.default.directive("highlightjs",{deep:!0,bind:function(t,e){var o,i,r=t.querySelectorAll("code");for(i=0;i<r.length;i+=1)o=r[i],"string"==typeof e.value&&(o.textContent=e.value),n.highlightBlock(t)},componentUpdated:function(t,e){var o,i,r=t.querySelectorAll("code");for(i=0;i<r.length;i+=1)o=r[i],"string"==typeof e.value&&(o.textContent=e.value,n.highlightBlock(t))}})}}]);