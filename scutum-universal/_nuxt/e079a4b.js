(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1253:function(t,e,r){"use strict";r.r(e);r(63);var n=r(3),d=r(1184),o=(r(269),{name:"DashboardV2",components:{BillboardChart:function(){return Promise.all([r.e(14),r.e(168)]).then(r.bind(null,1202))}},data:function(){return{appMounted:!1,activePeriod:"months",salesReportChart:"",revenueChartLoaded:!1,emailSubscribersLoaded:!1,returnsChartLoaded:!1,salesReportChartLoaded:!1,referalsChartLoaded:!1,orders:[{id:"rAiLU1Oa",name:"Samsung 128GB 100MB/s (U3) MicroSD",price:"19.99",status:"sent",user:"Juan McDonald",quantity:3},{id:"wyB8rv5M",name:"Nintendo Switch – Neon Red and Neon Blue Joy-Con",price:"299.00",status:"canceled",user:"Ella Douglas",quantity:2},{id:"jlV7rLct",name:"Oral-B Black Pro 1000 Power Rechargeable Electric Toothbrush",price:"39.94",status:"pending",user:"Josie Holt",quantity:2},{id:"tXJA-ULg",name:"iRobot Roomba 960 Robot Vacuum with Wi-Fi Connectivity",price:"314.30",status:"pending",user:"Rosie Underwood",quantity:3},{id:"uYZmbsI6",name:"Fujitsu ScanSnap iX500 Color Duplex Desk Scanner for Mac and PC",price:"404.95",status:"sent",user:"Benjamin Hansen",quantity:1},{id:"OCgv97dH",name:"Samsung Galaxy Watch (46mm) Silver (Bluetooth)",price:"349.99",status:"on hold",user:"Abbie Lyons",quantity:1},{id:"Php0QdIK",name:"Sonos Play:1 – Compact Wireless Home Smart Speaker for Streaming Music",price:"149.00",status:"on hold",user:"Willie McCoy",quantity:2},{id:"o4qM28y-",name:"Fitbit Charge 3 Fitness Activity Tracker",price:"149.95",status:"canceled",user:"Ryan Davis",quantity:3},{id:"sr7Hi5kz",name:"Dyson Cyclone V10 Absolute Lightweight Cordless Stick Vacuum Cleaner",price:"527.94",status:"pending",user:"Elijah Morton",quantity:2},{id:"5LTAP0hU",name:"Logitech Harmony Elite Remote Control",price:"184.99",status:"sent",user:"Addie Wade",quantity:3}]}},computed:{revenueChart:function(){var t=this;return{data:{x:"x",columns:[["x","2019-01-01","2019-02-01","2019-03-01","2019-04-01","2019-05-01","2019-06-01"],["data1",42543,65240,52638,73460,46320,52800]],types:{data1:"spline"},colors:{data1:n.a.multi[0]}},axis:{x:{type:"timeseries",tick:{fit:!0,format:"%b"}},y:{show:!1}},grid:{x:{show:!1},y:{show:!1,lines:[{value:54e3,text:"Target"}]}},tooltip:{format:{title:function(e){return t.$moment(e).format("MMMM")},value:function(t,e,r){if("data1"===r)return"$"+d.a(",")(t)}}},transition:{duration:0},legend:{show:!1}}},emailSubscribers:function(){var t=this;return{data:{x:"x",columns:[["x","2019-01-01","2019-02-01","2019-03-01","2019-04-01","2019-05-01","2019-06-01"],["data1",120,72,245,181,42,212]],types:{data1:"bar"},colors:{data1:n.a.multi[3]}},axis:{x:{type:"timeseries",tick:{fit:!0,format:"%b"}},y:{show:!1}},grid:{x:{show:!1,lines:[{value:"2019-04-18",text:"New Campaign"}]},y:{show:!1}},tooltip:{format:{title:function(e){return t.$moment(e).format("MMMM")}}},transition:{duration:0},legend:{show:!1}}},returnsChart:function(){var t=this;return{data:{x:"x",columns:[["x","2019-01-01","2019-02-01","2019-03-01","2019-04-01","2019-05-01","2019-06-01"],["data1",41,18,30,21,35,22]],types:{data1:"line"},colors:{data1:n.a.multi[1]}},axis:{x:{type:"timeseries",tick:{fit:!0,format:"%b"}},y:{show:!1}},grid:{x:{show:!1},y:{show:!1,lines:[{value:24,text:"Target"}]}},tooltip:{format:{title:function(e){return t.$moment(e).format("MMMM")}}},transition:{duration:0},legend:{show:!1}}},referalsChart:function(){return{data:{columns:[["Google",125234],["Bookmarks",104234],["Facebook",78342],["Envato",41895],["Twitter",23619],["Bing",4268]],type:"donut"},transition:{duration:0},legend:{position:"right"},color:{pattern:n.a.multi}}},salesReportDataHours:function(){var t=this;return{data:{x:"x",xFormat:"%Y-%m-%d %H:%M",columns:[["x","2019-04-08 00:00","2019-04-08 01:00","2019-04-08 02:00","2019-04-08 03:00","2019-04-08 04:00","2019-04-08 05:00","2019-04-08 06:00","2019-04-08 07:00","2019-04-08 08:00","2019-04-08 09:00","2019-04-08 10:00","2019-04-08 11:00","2019-04-08 12:00","2019-04-08 13:00","2019-04-08 14:00","2019-04-08 15:00","2019-04-08 16:00","2019-04-08 17:00","2019-04-08 18:00","2019-04-08 19:00","2019-04-08 20:00","2019-04-08 21:00","2019-04-08 22:00","2019-04-08 23:00","2019-04-08 24:00"],["data1","220","320","280","420","600","816","1210.22","1421.42","1503.11","1311","1528","1802.31","1558.73","1649.04","1523.36","1306.55","2143.92","2041.04","1830.24","1921","1842","1420","842","531.44"]],names:{data1:"Sale"},types:{data1:"bar"},colors:{data1:n.a.multi[4]}},axis:{x:{type:"timeseries",tick:{fit:!0,format:"%H",culling:!0}},y:{show:!0,tick:{format:function(t){return d.a("$,")(t)}}}},grid:{x:{show:!1},y:{show:!1}},bar:{width:{ratio:.8,max:24}},tooltip:{format:{title:function(e){return t.$moment(e).format("HH:mm")},value:function(t,e,r){if("data1"===r)return"$"+d.a(",")(t)}}},transition:{duration:0},legend:{show:!1}}},salesReportDataWeek:function(){var t=this;return{data:{x:"x",xFormat:"%Y-%m-%d",columns:[["x","2019-04-08","2019-04-09","2019-04-10","2019-04-11","2019-04-12","2019-04-13","2019-04-14"],["data1","220","320","280","420","600","816","1210.22"]],names:{data1:"Sale"},types:{data1:"bar"},colors:{data1:n.a.multi[0]}},axis:{x:{type:"timeseries",tick:{fit:!0,format:"%A",culling:!1}},y:{show:!0,tick:{format:function(t){return d.a("$,")(t)}}}},grid:{x:{show:!1},y:{show:!1}},bar:{width:{ratio:.8,max:48}},transition:{duration:0},tooltip:{format:{title:function(e){return t.$moment(e).format("dddd")},value:function(t,e,r){if("data1"===r)return"$"+d.a(",")(t)}}},legend:{show:!1}}},salesReportDataMonths:function(){var t=this;return{data:{x:"x",xFormat:"%Y-%m-%d",columns:[["x","2018-01-01","2018-02-01","2018-03-01","2018-04-01","2018-05-01","2018-06-01","2018-07-01","2018-08-01","2018-09-01","2018-10-01","2018-11-01","2018-12-01"],["data1","140231","160223","130221","180221","200236","214566","190322","201234","140234","152324","210612","280332"]],names:{data1:"Sale"},types:{data1:"bar"},colors:{data1:n.a.multi[0]}},axis:{x:{type:"timeseries",tick:{fit:!0,format:"%b",culling:!1}},y:{show:!0,tick:{format:function(t){return d.a("$,")(t)}}}},grid:{x:{show:!1},y:{show:!1}},bar:{width:{ratio:.8,max:36}},transition:{duration:0},tooltip:{format:{title:function(e){return t.$moment(e).format("MMMM")},value:function(t,e,r){if("data1"===r)return"$"+d.a(",")(t)}}},legend:{show:!1}}},salesReportDataYear:function(){var t=this;return{data:{x:"x",xFormat:"%Y-%m-%d",columns:[["x","2013-01-01","2014-01-01","2015-01-01","2016-01-01","2017-01-01","2018-01-01","2019-01-01"],["data1","1324235.23","1524236.83","1842341.36","2235433.27","2114523.83","2602362.44","2834428.11"]],names:{data1:"Sale"},types:{data1:"bar"},colors:{data1:n.a.multi[5]}},axis:{x:{type:"timeseries",tick:{fit:!0,format:"%Y",culling:!1}},y:{show:!0,tick:{format:function(t){return d.a("$,")(t)}}}},grid:{x:{show:!1},y:{show:!1}},bar:{width:{ratio:.8,max:48}},transition:{duration:0},tooltip:{format:{title:function(e){return t.$moment(e).format("YYYY")},value:function(t,e,r){if("data1"===r)return"$"+d.a(",")(t)}}},legend:{show:!1}}}},created:function(){this.salesReportChart=this.salesReportDataMonths},mounted:function(){var t=this;setTimeout((function(){t.appMounted=!0,console.log(t)}),200)},methods:{setChartPeriod:function(t){"hours"===t&&(this.salesReportChart=this.salesReportDataHours),"week"===t&&(this.salesReportChart=this.salesReportDataWeek),"months"===t&&(this.salesReportChart=this.salesReportDataMonths),"year"===t&&(this.salesReportChart=this.salesReportDataYear),this.activePeriod=t}}}),l=r(2),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("div",{attrs:{id:"sc-page-content"}},[e("div",{staticClass:"uk-child-width-1-4@xl uk-child-width-1-2@s uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("nuxt-link",{staticClass:"sc-padding sc-padding-medium-ends uk-flex uk-flex-middle",attrs:{to:"/plugins/data_grid"}},[e("div",{staticClass:"uk-flex-1"},[e("ScCardTitle",[t._v("\n\t\t\t\t\t\t\t\tData Grid\n\t\t\t\t\t\t\t")]),t._v(" "),e("p",{staticClass:"sc-color-secondary uk-margin-remove uk-text-medium"},[t._v("\n\t\t\t\t\t\t\t\tDisplay and Edit Data\n\t\t\t\t\t\t\t")])],1),t._v(" "),e("div",{staticClass:"md-bg-amber-600 uk-flex uk-flex-middle sc-padding-medium sc-padding-small-ends sc-round"},[e("i",{staticClass:"mdi mdi-grid md-color-white"})])])],1)],1),t._v(" "),e("div",[e("ScCard",[e("nuxt-link",{staticClass:"sc-padding sc-padding-medium-ends uk-flex uk-flex-middle",attrs:{to:"/pages/mailbox"}},[e("div",{staticClass:"uk-flex-1"},[e("ScCardTitle",[t._v("\n\t\t\t\t\t\t\t\tMailbox\n\t\t\t\t\t\t\t")]),t._v(" "),e("p",{staticClass:"sc-color-secondary uk-margin-remove uk-text-medium"},[t._v("\n\t\t\t\t\t\t\t\tCheck Your Mail\n\t\t\t\t\t\t\t")])],1),t._v(" "),e("div",{staticClass:"md-bg-green-600 uk-flex uk-flex-middle sc-padding-medium sc-padding-small-ends sc-round"},[e("i",{staticClass:"mdi mdi-email-outline md-color-white"})])])],1)],1),t._v(" "),e("div",[e("ScCard",[e("nuxt-link",{staticClass:"sc-padding sc-padding-medium-ends uk-flex uk-flex-middle",attrs:{to:"/pages/task_board"}},[e("div",{staticClass:"uk-flex-1"},[e("ScCardTitle",[t._v("\n\t\t\t\t\t\t\t\tTask Board\n\t\t\t\t\t\t\t")]),t._v(" "),e("p",{staticClass:"sc-color-secondary uk-margin-remove uk-text-medium"},[t._v("\n\t\t\t\t\t\t\t\tGet Things Done\n\t\t\t\t\t\t\t")])],1),t._v(" "),e("div",{staticClass:"md-bg-red-600 uk-flex uk-flex-middle sc-padding-medium sc-padding-small-ends sc-round"},[e("i",{staticClass:"mdi mdi-bug md-color-white"})])])],1)],1),t._v(" "),e("div",[e("ScCard",[e("nuxt-link",{staticClass:"sc-padding sc-padding-medium-ends uk-flex uk-flex-middle",attrs:{to:"/pages/chat"}},[e("div",{staticClass:"uk-flex-1"},[e("ScCardTitle",[t._v("\n\t\t\t\t\t\t\t\tChat\n\t\t\t\t\t\t\t")]),t._v(" "),e("p",{staticClass:"sc-color-secondary uk-margin-remove uk-text-medium"},[t._v("\n\t\t\t\t\t\t\t\tGet in Touch with Friends\n\t\t\t\t\t\t\t")])],1),t._v(" "),e("div",{staticClass:"md-bg-deep-purple-600 uk-flex uk-flex-middle sc-padding-medium sc-padding-small-ends sc-round"},[e("i",{staticClass:"mdi mdi-message-outline md-color-white"})])])],1)],1)]),t._v(" "),e("div",{staticClass:"uk-child-width-1-3@l uk-child-width-1-2@m uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\t\tRevenue\n\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[t.appMounted?e("BillboardChart",{staticClass:"sc-chart",attrs:{options:t.revenueChart},on:{created:function(e){t.revenueChartLoaded=!0}}}):t._e(),t._v(" "),t.revenueChartLoaded?t._e():e("div",{staticClass:"sc-chart"},[e("div",{staticClass:"uk-flex uk-flex-middle uk-height-1-1 uk-flex-center"},[e("div",{staticClass:"sc-spinner"})])])],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\t\tEmail Subscribers\n\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[t.appMounted?e("BillboardChart",{staticClass:"sc-chart",attrs:{options:t.emailSubscribers},on:{created:function(e){t.emailSubscribersLoaded=!0}}}):t._e(),t._v(" "),t.emailSubscribersLoaded?t._e():e("div",{staticClass:"sc-chart"},[e("div",{staticClass:"uk-flex uk-flex-middle uk-height-1-1 uk-flex-center"},[e("div",{staticClass:"sc-spinner"})])])],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\t\tReturns\n\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[t.appMounted?e("BillboardChart",{staticClass:"sc-chart",attrs:{options:t.returnsChart},on:{created:function(e){t.returnsChartLoaded=!0}}}):t._e(),t._v(" "),t.returnsChartLoaded?t._e():e("div",{staticClass:"sc-chart"},[e("div",{staticClass:"uk-flex uk-flex-middle uk-height-1-1 uk-flex-center"},[e("div",{staticClass:"sc-spinner"})])])],1)],1)],1)]),t._v(" "),e("div",{staticClass:"uk-grid",attrs:{"data-uk-grid":""}},[e("div",{staticClass:"uk-width-2-3@l"},[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\t\tSales report\n\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"sc-padding sc-padding-medium-ends md-bg-grey-100"},[e("div",{staticClass:"uk-flex-middle uk-grid-small uk-grid",attrs:{"data-uk-grid":""}},[e("div",{staticClass:"uk-flex-1"},[e("div",{staticClass:"uk-button-group sc-button-group-outline"},[e("button",{staticClass:"sc-button sc-button-default sc-button-outline sc-button-small",class:{"uk-active":"hours"===t.activePeriod},on:{click:function(e){return t.setChartPeriod("hours")}}},[t._v("\n\t\t\t\t\t\t\t\t\t\tHours\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("button",{staticClass:"sc-button sc-button-default sc-button-outline sc-button-small",class:{"uk-active":"week"===t.activePeriod},on:{click:function(e){return t.setChartPeriod("week")}}},[t._v("\n\t\t\t\t\t\t\t\t\t\tWeek\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("button",{staticClass:"sc-button sc-button-default sc-button-outline sc-button-small",class:{"uk-active":"months"===t.activePeriod},on:{click:function(e){return t.setChartPeriod("months")}}},[t._v("\n\t\t\t\t\t\t\t\t\t\tMonths\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("button",{staticClass:"sc-button sc-button-default sc-button-outline sc-button-small",class:{"uk-active":"year"===t.activePeriod},on:{click:function(e){return t.setChartPeriod("year")}}},[t._v("\n\t\t\t\t\t\t\t\t\t\tYears\n\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),e("div",{staticClass:"uk-flex uk-width-auto@s"},[e("a",{attrs:{id:"sc-chart-reload",href:"javascript:void(0)"}},[e("i",{staticClass:"mdi mdi-reload sc-color-secondary sc-icon-square"})]),t._v(" "),e("a",{attrs:{id:"sc-chart-save-image",href:"javascript:void(0)"}},[e("i",{staticClass:"mdi mdi-floppy sc-color-secondary sc-icon-square"})])])])]),t._v(" "),e("ScCardContent",[e("div",{staticClass:"sc-padding-medium"},[t.appMounted?e("BillboardChart",{key:t.activePeriod,staticClass:"sc-chart-large",attrs:{options:t.salesReportChart},on:{created:function(e){t.salesReportChartLoaded=!0}}}):t._e(),t._v(" "),t.salesReportChartLoaded?t._e():e("div",{staticClass:"sc-chart"},[e("div",{staticClass:"uk-flex uk-flex-middle uk-height-1-1 uk-flex-center"},[e("div",{staticClass:"sc-spinner"})])])],1)])],1)],1),t._v(" "),e("div",{staticClass:"uk-width-1-3@l"},[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\t\tTop Referals\n\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[t.appMounted?e("BillboardChart",{staticClass:"sc-chart",attrs:{options:t.referalsChart},on:{created:function(e){t.referalsChartLoaded=!0}}},[e("div",{staticClass:"uk-flex uk-flex-middle uk-height-1-1 uk-flex-center"},[e("div",{staticClass:"sc-spinner"})])]):t._e(),t._v(" "),t.referalsChartLoaded?t._e():e("div",{staticClass:"sc-chart"},[e("div",{staticClass:"uk-flex uk-flex-middle uk-height-1-1 uk-flex-center"},[e("div",{staticClass:"sc-spinner"})])]),t._v(" "),e("table",{staticClass:"uk-table uk-table-small uk-table-divider"},[e("thead",[e("tr",[e("th",{staticClass:"uk-table-shrink"},[t._v("\n\t\t\t\t\t\t\t\t\t\tRank\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("th",[t._v("Referral")]),t._v(" "),e("th",[t._v("Visits")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticClass:"uk-text-center"},[t._v("\n\t\t\t\t\t\t\t\t\t\t1\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",[t._v("Google")]),t._v(" "),e("td",[t._v("125234")])]),t._v(" "),e("tr",[e("td",{staticClass:"uk-text-center"},[t._v("\n\t\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",[t._v("Bookmarks")]),t._v(" "),e("td",[t._v("104234")])]),t._v(" "),e("tr",[e("td",{staticClass:"uk-text-center"},[t._v("\n\t\t\t\t\t\t\t\t\t\t3\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",[t._v("Facebook")]),t._v(" "),e("td",[t._v("78342")])]),t._v(" "),e("tr",[e("td",{staticClass:"uk-text-center"},[t._v("\n\t\t\t\t\t\t\t\t\t\t4\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",[t._v("Envato")]),t._v(" "),e("td",[t._v("41895")])]),t._v(" "),e("tr",[e("td",{staticClass:"uk-text-center"},[t._v("\n\t\t\t\t\t\t\t\t\t\t5\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",[t._v("Twitter")]),t._v(" "),e("td",[t._v("23619")])]),t._v(" "),e("tr",[e("td",{staticClass:"uk-text-center"},[t._v("\n\t\t\t\t\t\t\t\t\t\t6\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",[t._v("Bing")]),t._v(" "),e("td",[t._v("4268")])])])])],1)],1)],1)]),t._v(" "),e("ScCard",{staticClass:"uk-margin-top"},[e("ScCardTitle",[t._v("\n\t\t\t\tLatest Orders\n\t\t\t")]),t._v(" "),e("ScCardBody",[e("div",{staticClass:"uk-overflow-auto"},[e("table",{staticClass:"uk-table uk-table-striped uk-table-hover uk-table-middle"},[e("thead",[e("tr",[e("th",{staticClass:"uk-table-shrink"}),t._v(" "),e("th",[t._v("Product")]),t._v(" "),e("th",[t._v("Customer")]),t._v(" "),e("th",[t._v("Order ID")]),t._v(" "),e("th",{staticClass:"uk-text-center"},[t._v("\n\t\t\t\t\t\t\t\t\tQuantity\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("th",{staticClass:"uk-text-right"},[t._v("\n\t\t\t\t\t\t\t\t\tPrice\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("th",{staticClass:"uk-table-shrink"},[t._v("\n\t\t\t\t\t\t\t\t\tStatus\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("th")])]),t._v(" "),e("tbody",t._l(t.orders,(function(r,n){return e("tr",{key:r.name},[e("td",{staticClass:"uk-text-right"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(n+1)+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",{staticClass:"uk-text-nowrap"},[e("a",{staticClass:"sc-text-semibold",attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(r.name)+"\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("td",{staticClass:"uk-text-nowrap"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(r.user)+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",[t._v("# "+t._s(r.id))]),t._v(" "),e("td",{staticClass:"uk-text-center"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(r.quantity)+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",{staticClass:"uk-text-right"},[t._v("\n\t\t\t\t\t\t\t\t\t$"+t._s(r.price)+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",["pending"===r.status?e("span",{staticClass:"uk-label uk-label-warning"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(r.status)+"\n\t\t\t\t\t\t\t\t\t")]):t._e(),t._v(" "),"canceled"===r.status?e("span",{staticClass:"uk-label uk-label-danger"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(r.status)+"\n\t\t\t\t\t\t\t\t\t")]):t._e(),t._v(" "),"on hold"===r.status?e("span",{staticClass:"uk-label uk-label-default"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(r.status)+"\n\t\t\t\t\t\t\t\t\t")]):t._e(),t._v(" "),"sent"===r.status?e("span",{staticClass:"uk-label uk-label-success"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(r.status)+"\n\t\t\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),e("td",[e("a",{staticClass:"mdi mdi-file-outline sc-icon-square",attrs:{href:"javascript:void(0)"}})])])})),0)])])])],1)],1)])}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,r){"use strict";var n=r(1);n.default.moment||n.default.use(r(334))}}]);