(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{1207:function(t,e,r){"use strict";r.r(e);r(29);var n=r(3),o=r(643),l=r(591),d={name:"ChartJsBar",extends:l.a,props:{data:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}}},mounted:function(){this.renderChart(this.data,this.options)}},c=r(2),h=Object(c.a)(d,undefined,undefined,!1,null,null,null).exports,j=r(721),C=r(719),m=r(720),f={name:"ChartJsPolarArea",extends:l.e,props:{data:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}}},mounted:function(){this.renderChart(this.data,this.options)}},v=Object(c.a)(f,undefined,undefined,!1,null,null,null).exports,y={name:"PluginsCharts",components:{BillboardChart:function(){return Promise.all([r.e(14),r.e(13),r.e(24)]).then(r.bind(null,808))},ChartJsBar:h,ChartJsLine:j.a,ChartJsDoughnut:C.a,ChartJsPie:m.a,ChartJsPolarArea:v},data:function(){return{bb:{areaChart:{data:{columns:[["data1",300,350,300,0,0,0],["data2",130,100,140,200,150,50]],types:{data1:"area-spline",data2:"area"}},area:{linearGradient:!0},color:{pattern:n.a.multi}},barChart:{data:{columns:[["data1",30,200,100,400,150,250],["data2",130,100,140,200,150,50]],type:"bar"},bar:{width:{ratio:.5}},color:{pattern:n.a.multi},grid:{y:{show:!0}}},donutChart:{data:{columns:[["data1",30],["data2",120]],type:"donut",onclick:function(t,i){console.log("onclick",t,i)},onover:function(t,i){console.log("onover",t,i)},onout:function(t,i){console.log("onout",t,i)}},donut:{title:"Iris Petal Width"},color:{pattern:n.a.multi}},lineChart:{data:{columns:[["data1",30,200,100,400,150,250],["data2",50,20,10,40,15,25]]},color:{pattern:n.a.multi},grid:{x:{show:!0},y:{show:!0}}},radarChart:{data:{x:"x",columns:[["x","Data A","Data B","Data C","Data D","Data E"],["data1",330,350,200,380,150],["data2",130,100,30,200,80],["data3",230,153,85,300,250]],type:"radar",labels:!0},radar:{axis:{max:400},level:{depth:4},direction:{clockwise:!0}},color:{pattern:n.a.multi}},scatterChart:{data:{xs:{setosa:"setosa_x",versicolor:"versicolor_x",virginica:"virginica_x"},columns:[["setosa_x",3.5,3,3.2,3.1,3.6,3.9,3.4,3.4,2.9,3.1,3.7,3.4,3,3,4,4.4,3.9,3.5,3.8,3.8,3.4,3.7,3.6,3.3,3.4,3,3.4,3.5,3.4,3.2,3.1,3.4,4.1,4.2,3.1,3.2,3.5,3.6,3,3.4,3.5,2.3,3.2,3.5,3.8,3,3.8,3.2,3.7,3.3],["versicolor_x",3.2,3.2,3.1,2.3,2.8,2.8,3.3,2.4,2.9,2.7,2,3,2.2,2.9,2.9,3.1,3,2.7,2.2,2.5,3.2,2.8,2.5,2.8,2.9,3,2.8,3,2.9,2.6,2.4,2.4,2.7,2.7,3,3.4,3.1,2.3,3,2.5,2.6,3,2.6,2.3,2.7,3,2.9,2.9,2.5,2.8],["setosa",.2,.2,.2,.2,.2,.4,.3,.2,.2,.1,.2,.2,.1,.1,.2,.4,.4,.3,.3,.3,.2,.4,.2,.5,.2,.2,.4,.2,.2,.2,.2,.4,.1,.2,.2,.2,.2,.1,.2,.2,.3,.3,.2,.6,.4,.3,.2,.2,.2,.2],["versicolor",1.4,1.5,1.5,1.3,1.5,1.3,1.6,1,1.3,1.4,1,1.5,1,1.4,1.3,1.4,1.5,1,1.5,1.1,1.8,1.3,1.5,1.2,1.3,1.4,1.4,1.7,1.5,1,1.1,1,1.2,1.6,1.5,1.6,1.5,1.3,1.3,1.3,1.2,1.4,1.2,1,1.3,1.2,1.3,1.3,1.1,1.3]],type:"scatter"},axis:{x:{label:"Sepal.Width",tick:{fit:!1}},y:{label:"Petal.Width"}},color:{pattern:n.a.multi}}},cjs:{barChart:{options:{responsive:!0,maintainAspectRatio:!1,legend:{position:"top"},title:{display:!0,text:"Chart.js Bar Chart"}}},barStackedChart:{options:{title:{display:!0,text:"Chart.js Bar Chart - Stacked"},tooltips:{mode:"index",intersect:!1},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}},lineChart:{options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"Chart.js Line Chart"},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Month"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Value"}}]}}},lineInterpolationChart:{options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"Chart.js Line Chart - Cubic interpolation mode"},tooltips:{mode:"index"},scales:{xAxes:[{display:!0,scaleLabel:{display:!0}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Value"},ticks:{suggestedMin:-10,suggestedMax:200}}]}}},lineSteppedChart:{options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"Step Before Interpolation"}}},linePointsChart:{options:{responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"},hover:{mode:"index"},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Month"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Value"}}]},title:{display:!0,text:"Chart.js Line Chart - Different point sizes"}}},areaChart:{options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"Chart.js - fill: start"}}},areaStackedChart:{options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"Chart.js Line Chart - Stacked Area"},tooltips:{mode:"index"},hover:{mode:"index"},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Month"}}],yAxes:[{stacked:!0,scaleLabel:{display:!0,labelString:"Value"}}]}}},doughnutChart:{options:{responsive:!0,maintainAspectRatio:!1,legend:{position:"right"},title:{display:!0,text:"Chart.js Doughnut Chart"},animation:{animateScale:!0,animateRotate:!0}}},pieChart:{options:{responsive:!0,maintainAspectRatio:!1,legend:{position:"right"},title:{display:!0,text:"Chart.js Pie Chart"}}},polarAreaChart:{options:{responsive:!0,maintainAspectRatio:!1,legend:{position:"right"},title:{display:!0,text:"Chart.js Polar Area Chart"},scale:{ticks:{beginAtZero:!0},reverse:!1},animation:{animateRotate:!1,animateScale:!0}}}},seed:Date.now(),color:o.a.helpers.color,cjsDatatpoints:[0,20,20,60,60,120,NaN,180,120,125,105,110,170]}},computed:{cjsRandData:function(){return[this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(5),this.cjsGenerateData(5)]},cjsBarChartData:function(){return{labels:["January","February","March","April","May","June"],datasets:[{label:"Dataset 1",backgroundColor:this.color(n.a.multi[0]).alpha(.8).rgbString(),borderColor:n.a.multi[0],borderWidth:1,data:this.cjsRandData[0]},{label:"Dataset 2",backgroundColor:this.color(n.a.multi[1]).alpha(.8).rgbString(),borderColor:n.a.multi[1],borderWidth:1,data:this.cjsRandData[1]}]}},cjsBarStackedChartData:function(){return{labels:["January","February","March","April","May","June"],datasets:[{label:"Dataset 1",backgroundColor:n.a.multi[1],stack:"Stack 0",data:this.cjsRandData[2]},{label:"Dataset 2",backgroundColor:n.a.multi[3],stack:"Stack 0",data:this.cjsRandData[3]},{label:"Dataset 3",backgroundColor:n.a.multi[0],stack:"Stack 1",data:this.cjsRandData[4]}]}},cjsLineChartData:function(){return{labels:["January","February","March","April","May","June"],datasets:[{label:"My First dataset",backgroundColor:n.a.multi[4],borderColor:n.a.multi[4],data:this.cjsRandData[5],fill:!1},{label:"My Second dataset",fill:!1,backgroundColor:n.a.multi[5],borderColor:n.a.multi[5],data:this.cjsRandData[6]}]}},cjsLineInterpolationChartData:function(){var t=this;return{labels:["0","1","2","3","4","5","6","7","8","9","10","11","12"],datasets:[{label:"Cubic interpolation (monotone)",data:t.cjsDatatpoints,borderColor:n.a.multi[0],backgroundColor:"rgba(0, 0, 0, 0)",fill:!1,cubicInterpolationMode:"monotone"},{label:"Cubic interpolation (default)",data:t.cjsDatatpoints,borderColor:n.a.multi[1],backgroundColor:"rgba(0, 0, 0, 0)",fill:!1},{label:"Linear interpolation",data:t.cjsDatatpoints,borderColor:n.a.multi[2],backgroundColor:"rgba(0, 0, 0, 0)",fill:!1,lineTension:0}]}},cjsLineSteppedChartData:function(){return{labels:["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6"],datasets:[{label:"steppedLine: true",steppedLine:!0,data:this.cjsRandData[7],borderColor:n.a.multi[5],fill:!1}]}},cjsLinePointsChartData:function(){return{labels:["January","February","March","April","May","June"],datasets:[{label:"dataset - big points",data:this.cjsRandData[8],backgroundColor:n.a.multi[0],borderColor:n.a.multi[0],fill:!1,borderDash:[5,5],pointRadius:15,pointHoverRadius:25},{label:"dataset - individual point sizes",data:this.cjsRandData[9],backgroundColor:n.a.multi[1],borderColor:n.a.multi[1],fill:!1,borderDash:[5,5],pointRadius:[2,4,6,18,0,12,20]},{label:"dataset - large pointHoverRadius",data:this.cjsRandData[10],backgroundColor:n.a.multi[2],borderColor:n.a.multi[2],fill:!1,pointHoverRadius:30},{label:"dataset - large pointHitRadius",data:this.cjsRandData[11],backgroundColor:n.a.multi[3],borderColor:n.a.multi[3],fill:!1,pointHitRadius:20}]}},cjsAreaChartData:function(){return{labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"My First dataset",backgroundColor:this.transparentize(n.a.multi[3]),borderColor:this.transparentize(n.a.multi[3]),data:this.cjsRandData[12],fill:"start"}]}},cjsAreaStackedChartData:function(){return{labels:["January","February","March","April","May","June"],datasets:[{label:"My First dataset",borderColor:n.a.multi[0],backgroundColor:n.a.multi[0],data:this.cjsRandData[13]},{label:"My Second dataset",borderColor:n.a.multi[1],backgroundColor:n.a.multi[1],data:this.cjsRandData[14]},{label:"My Third dataset",borderColor:n.a.multi[2],backgroundColor:n.a.multi[2],data:this.cjsRandData[15]},{label:"My Third dataset",borderColor:n.a.multi[3],backgroundColor:n.a.multi[3],data:this.cjsRandData[16]}]}},cjsDoughnutChartData:function(){return{datasets:[{data:this.cjsRandData[17],backgroundColor:[n.a.multi[0],n.a.multi[1],n.a.multi[2],n.a.multi[3],n.a.multi[4]],label:"Dataset 1"}],labels:["Blue","Orange","Green","Purple","Red"]}},cjsPieChartData:function(){return{datasets:[{data:this.cjsRandData[18],backgroundColor:[n.a.multi[0],n.a.multi[1],n.a.multi[2],n.a.multi[3],n.a.multi[4]],label:"Dataset 1"}],labels:["Blue","Orange","Green","Purple","Red"]}},cjsPolarAreaChart:function(){var t=function(){return Math.round(100*Math.random())};return{datasets:[{data:[t(),t(),t(),t(),t()],backgroundColor:[this.color(n.a.multi[0]).alpha(.6).rgbString(),this.color(n.a.multi[1]).alpha(.6).rgbString(),this.color(n.a.multi[2]).alpha(.6).rgbString(),this.color(n.a.multi[3]).alpha(.6).rgbString(),this.color(n.a.multi[4]).alpha(.6).rgbString()],label:"My dataset"}],labels:["Blue","Orange","Green","Purple","Red"]}}},mounted:function(){var t=this;setTimeout((function(){t.bb.barChart.data.columns.push(["data3",130,-150,200,300,-200,100])}),1e3),setTimeout((function(){t.bb.donutChart.data.columns.push(["setosa",.2,.2,.2,.2,.2,.4,.3,.2,.2,.1,.2,.2,.1,.1,.2,.4,.4,.3,.3,.3,.2,.4,.2,.5,.2,.2,.4,.2,.2,.2,.2,.4,.1,.2,.2,.2,.2,.1,.2,.2,.3,.3,.2,.6,.4,.3,.2,.2,.2,.2]),t.bb.donutChart.data.columns.push(["versicolor",1.4,1.5,1.5,1.3,1.5,1.3,1.6,1,1.3,1.4,1,1.5,1,1.4,1.3,1.4,1.5,1,1.5,1.1,1.8,1.3,1.5,1.2,1.3,1.4,1.4,1.7,1.5,1,1.1,1,1.2,1.6,1.5,1.6,1.5,1.3,1.3,1.3,1.2,1.4,1.2,1,1.3,1.2,1.3,1.3,1.1,1.3]),t.bb.donutChart.data.columns.push(["virginica",2.5,1.9,2.1,1.8,2.2,2.1,1.7,1.8,1.8,2.5,2,1.9,2.1,2,2.4,2.3,1.8,2.2,2.3,1.5,2.3,2,2,1.8,2.1,1.8,1.8,1.8,2.1,1.6,1.9,2,2.2,1.5,1.4,2.3,2.4,1.8,1.8,2.1,2.4,2.3,1.9,2.3,2.5,2.3,1.9,2,2.3,1.8])}),1500),setTimeout((function(){t.bb.donutChart.data.columns.splice(0,2)}),2500),setTimeout((function(){}),1e3),setTimeout((function(){t.bb.lineChart.data.columns.push(["data3",130,150,200,300,200,100])}),1500),setTimeout((function(){t.bb.lineChart.data.columns.splice(0,1)}),1500),setTimeout((function(){t.bb.scatterChart.data.columns.push(["virginica_x",3.3,2.7,3,2.9,3,3,2.5,2.9,2.5,3.6,3.2,2.7,3,2.5,2.8,3.2,3,3.8,2.6,2.2,3.2,2.8,2.8,2.7,3.3,3.2,2.8,3,2.8,3,2.8,3.8,2.8,2.8,2.6,3,3.4,3.1,3,3.1,3.1,3.1,2.7,3.2,3.3,3,2.5,3,3.4,3]),t.bb.scatterChart.data.columns.push(["virginica",2.5,1.9,2.1,1.8,2.2,2.1,1.7,1.8,1.8,2.5,2,1.9,2.1,2,2.4,2.3,1.8,2.2,2.3,1.5,2.3,2,2,1.8,2.1,1.8,1.8,1.8,2.1,1.6,1.9,2,2.2,1.5,1.4,2.3,2.4,1.8,1.8,2.1,2.4,2.3,1.9,2.3,2.5,2.3,1.9,2,2.3,1.8])}),1e3),setTimeout((function(){var e=t.bb.scatterChart.data.columns.map((function(t){return t[0]})).indexOf("setosa");t.bb.scatterChart.data.columns.splice(e,1)}),2e3),setTimeout((function(){t.bb.scatterChart.data.columns.push(["virginica",.2,.2,.2,.2,.2,.4,.3,.2,.2,.1,.2,.2,.1,.1,.2,.4,.4,.3,.3,.3,.2,.4,.2,.5,.2,.2,.4,.2,.2,.2,.2,.4,.1,.2,.2,.2,.2,.1,.2,.2,.3,.3,.2,.6,.4,.3,.2,.2,.2,.2])}),3e3)},methods:{cjsRandomizeData:function(t,e){var r=this.seed;return t=void 0===t?0:t,e=void 0===e?1:e,this.seed=(9301*r+49297)%233280,t+this.seed/233280*(e-t)},cjsGenerateData:function(t){for(var data=[],i=0;i<t;i++)data.push(Math.round(this.cjsRandomizeData(-100,100)));return data},transparentize:function(t,e){var r=void 0===e?.5:1-e;return this.color(t).alpha(r).rgbString()}}},D=Object(c.a)(y,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("div",{attrs:{id:"sc-page-content"}},[t._m(0),t._v(" "),e("div",{staticClass:"uk-child-width-1-2@m uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\t\tArea Chart\n\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("client-only",[e("BillboardChart",{attrs:{options:t.bb.areaChart}})],1)],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\t\tBar Chart\n\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("client-only",[e("BillboardChart",{attrs:{options:t.bb.barChart}})],1)],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\t\tDonut Chart\n\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("client-only",[e("BillboardChart",{attrs:{options:t.bb.donutChart}})],1)],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\t\tLine Chart\n\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("client-only",[e("BillboardChart",{attrs:{options:t.bb.lineChart}})],1)],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\t\tRadar Chart\n\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("client-only",[e("BillboardChart",{attrs:{options:t.bb.radarChart}})],1)],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\t\tScatter Chart\n\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("client-only",[e("BillboardChart",{attrs:{options:t.bb.scatterChart}})],1)],1)],1)],1)]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"uk-child-width-1-2@m uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsBar",{attrs:{"chart-id":"cjsBarChartData",data:t.cjsBarChartData,options:t.cjs.barChart.options}})],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsBar",{attrs:{"chart-id":"cjsBarStackedChartData",data:t.cjsBarStackedChartData,options:t.cjs.barStackedChart.options}})],1)],1)],1)]),t._v(" "),e("div",{staticClass:"uk-child-width-1-2@m uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsLine",{attrs:{"chart-id":"cjsLineChartData",data:t.cjsLineChartData,options:t.cjs.lineChart.options}})],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsLine",{attrs:{"chart-id":"cjsLineInterpolationChartData",data:t.cjsLineInterpolationChartData,options:t.cjs.lineInterpolationChart.options}})],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsLine",{attrs:{"chart-id":"cjsLineSteppedChartData",data:t.cjsLineSteppedChartData,options:t.cjs.lineSteppedChart.options}})],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsLine",{attrs:{"chart-id":"cjsLinePointsChartData",data:t.cjsLinePointsChartData,options:t.cjs.linePointsChart.options}})],1)],1)],1)]),t._v(" "),e("div",{staticClass:"uk-child-width-1-2@m uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsLine",{attrs:{"chart-id":"cjsAreaChartData",data:t.cjsAreaChartData,options:t.cjs.areaChart.options}})],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsLine",{attrs:{"chart-id":"cjsAreaStackedChartData",data:t.cjsAreaStackedChartData,options:t.cjs.areaStackedChart.options}})],1)],1)],1)]),t._v(" "),e("div",{staticClass:"uk-child-width-1-3@l uk-child-width-1-2@m uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsDoughnut",{attrs:{"chart-id":"cjsDoughnutChartData",data:t.cjsDoughnutChartData,options:t.cjs.doughnutChart.options}})],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsPie",{attrs:{"chart-id":"cjsPieChartData",data:t.cjsPieChartData,options:t.cjs.pieChart.options}})],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsPolarArea",{attrs:{"chart-id":"cjsPolarAreaChart",data:t.cjsPolarAreaChart,options:t.cjs.polarAreaChart.options}})],1)],1)],1)])])])}),[function(){var t=this._self._c;return t("h3",{staticClass:"uk-heading-line"},[t("span",[this._v("Billboard.js")])])},function(){var t=this._self._c;return t("h3",{staticClass:"uk-heading-line uk-margin-large-top"},[t("span",[this._v("Chart.js")])])}],!1,null,null,null);e.default=D.exports},608:function(t,e,r){var map={"./af":437,"./af.js":437,"./ar":438,"./ar-dz":439,"./ar-dz.js":439,"./ar-kw":440,"./ar-kw.js":440,"./ar-ly":441,"./ar-ly.js":441,"./ar-ma":442,"./ar-ma.js":442,"./ar-sa":443,"./ar-sa.js":443,"./ar-tn":444,"./ar-tn.js":444,"./ar.js":438,"./az":445,"./az.js":445,"./be":446,"./be.js":446,"./bg":447,"./bg.js":447,"./bm":448,"./bm.js":448,"./bn":449,"./bn-bd":450,"./bn-bd.js":450,"./bn.js":449,"./bo":451,"./bo.js":451,"./br":452,"./br.js":452,"./bs":453,"./bs.js":453,"./ca":454,"./ca.js":454,"./cs":455,"./cs.js":455,"./cv":456,"./cv.js":456,"./cy":457,"./cy.js":457,"./da":458,"./da.js":458,"./de":459,"./de-at":460,"./de-at.js":460,"./de-ch":461,"./de-ch.js":461,"./de.js":459,"./dv":462,"./dv.js":462,"./el":463,"./el.js":463,"./en-au":464,"./en-au.js":464,"./en-ca":465,"./en-ca.js":465,"./en-gb":466,"./en-gb.js":466,"./en-ie":467,"./en-ie.js":467,"./en-il":468,"./en-il.js":468,"./en-in":469,"./en-in.js":469,"./en-nz":470,"./en-nz.js":470,"./en-sg":471,"./en-sg.js":471,"./eo":472,"./eo.js":472,"./es":473,"./es-do":474,"./es-do.js":474,"./es-mx":475,"./es-mx.js":475,"./es-us":476,"./es-us.js":476,"./es.js":473,"./et":477,"./et.js":477,"./eu":478,"./eu.js":478,"./fa":479,"./fa.js":479,"./fi":480,"./fi.js":480,"./fil":481,"./fil.js":481,"./fo":482,"./fo.js":482,"./fr":483,"./fr-ca":484,"./fr-ca.js":484,"./fr-ch":485,"./fr-ch.js":485,"./fr.js":483,"./fy":486,"./fy.js":486,"./ga":487,"./ga.js":487,"./gd":488,"./gd.js":488,"./gl":489,"./gl.js":489,"./gom-deva":490,"./gom-deva.js":490,"./gom-latn":491,"./gom-latn.js":491,"./gu":492,"./gu.js":492,"./he":493,"./he.js":493,"./hi":494,"./hi.js":494,"./hr":495,"./hr.js":495,"./hu":496,"./hu.js":496,"./hy-am":497,"./hy-am.js":497,"./id":498,"./id.js":498,"./is":499,"./is.js":499,"./it":500,"./it-ch":501,"./it-ch.js":501,"./it.js":500,"./ja":502,"./ja.js":502,"./jv":503,"./jv.js":503,"./ka":504,"./ka.js":504,"./kk":505,"./kk.js":505,"./km":506,"./km.js":506,"./kn":507,"./kn.js":507,"./ko":508,"./ko.js":508,"./ku":509,"./ku.js":509,"./ky":510,"./ky.js":510,"./lb":511,"./lb.js":511,"./lo":512,"./lo.js":512,"./lt":513,"./lt.js":513,"./lv":514,"./lv.js":514,"./me":515,"./me.js":515,"./mi":516,"./mi.js":516,"./mk":517,"./mk.js":517,"./ml":518,"./ml.js":518,"./mn":519,"./mn.js":519,"./mr":520,"./mr.js":520,"./ms":521,"./ms-my":522,"./ms-my.js":522,"./ms.js":521,"./mt":523,"./mt.js":523,"./my":524,"./my.js":524,"./nb":525,"./nb.js":525,"./ne":526,"./ne.js":526,"./nl":527,"./nl-be":528,"./nl-be.js":528,"./nl.js":527,"./nn":529,"./nn.js":529,"./oc-lnc":530,"./oc-lnc.js":530,"./pa-in":531,"./pa-in.js":531,"./pl":532,"./pl.js":532,"./pt":533,"./pt-br":534,"./pt-br.js":534,"./pt.js":533,"./ro":535,"./ro.js":535,"./ru":536,"./ru.js":536,"./sd":537,"./sd.js":537,"./se":538,"./se.js":538,"./si":539,"./si.js":539,"./sk":540,"./sk.js":540,"./sl":541,"./sl.js":541,"./sq":542,"./sq.js":542,"./sr":543,"./sr-cyrl":544,"./sr-cyrl.js":544,"./sr.js":543,"./ss":545,"./ss.js":545,"./sv":546,"./sv.js":546,"./sw":547,"./sw.js":547,"./ta":548,"./ta.js":548,"./te":549,"./te.js":549,"./tet":550,"./tet.js":550,"./tg":551,"./tg.js":551,"./th":552,"./th.js":552,"./tk":553,"./tk.js":553,"./tl-ph":554,"./tl-ph.js":554,"./tlh":555,"./tlh.js":555,"./tr":556,"./tr.js":556,"./tzl":557,"./tzl.js":557,"./tzm":558,"./tzm-latn":559,"./tzm-latn.js":559,"./tzm.js":558,"./ug-cn":560,"./ug-cn.js":560,"./uk":561,"./uk.js":561,"./ur":562,"./ur.js":562,"./uz":563,"./uz-latn":564,"./uz-latn.js":564,"./uz.js":563,"./vi":565,"./vi.js":565,"./x-pseudo":566,"./x-pseudo.js":566,"./yo":567,"./yo.js":567,"./zh-cn":568,"./zh-cn.js":568,"./zh-hk":569,"./zh-hk.js":569,"./zh-mo":570,"./zh-mo.js":570,"./zh-tw":571,"./zh-tw.js":571};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=608},643:function(t,e,r){"use strict";var n=r(152),o={};(o=r(629)).defaults.global.defaultFontFamily="'Roboto', 'Helvetica', 'Arial', sans-serif",o.defaults.global.defaultFontColor="rgba(0,0,0,.87)",o.defaults.global.title.fontFamily="'Roboto', 'Helvetica', 'Arial', sans-serif",o.defaults.global.title.fontColor="rgba(0,0,0,.87)",o.defaults.global.title.fontSize=14,o.defaults.global.title.fontStyle="500",o.defaults.global.tooltips.titleMarginBottom=10,o.defaults.global.tooltips.titleFontFamily="'Roboto', 'Helvetica', 'Arial', sans-serif",o.defaults.global.tooltips.bodyFontFamily="'Roboto', 'Helvetica', 'Arial', sans-serif",o.defaults.global.tooltips.footerFontFamily="'Roboto', 'Helvetica', 'Arial', sans-serif",o.defaults.global.tooltips.cornerRadius=4,o.defaults.global.tooltips.bodySpacing=8,o.defaults.global.tooltips.caretSize=4,o.defaults.global.tooltips.xPadding=8,o.defaults.global.tooltips.yPadding=8,o.defaults.global.legend.labels.boxWidth=24,o.defaults.global.legend.labels.fontFamily="'Roboto', 'Helvetica', 'Arial', sans-serif",o.defaults.global.legend.labels.fontColor="rgba(0,0,0,.87)","theme-dark"===Object(n.state)().vxAppTheme&&(o.defaults.global.defaultFontColor="rgba(255,255,255,.87)",o.defaults.global.title.fontColor="rgba(255,255,255,.87)",o.defaults.global.legend.labels.fontColor="rgba(255,255,255,.87)",o.defaults.scale.gridLines.color="rgba(255,255,255,.2)"),e.a=o},719:function(t,e,r){"use strict";var n={name:"ChartJsDoughnut",extends:r(591).b,props:{data:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}}},mounted:function(){this.renderChart(this.data,this.options)}},o=r(2),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.a=component.exports},720:function(t,e,r){"use strict";var n={name:"ChartJsPie",extends:r(591).d,props:{data:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}}},mounted:function(){this.renderChart(this.data,this.options)}},o=r(2),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.a=component.exports},721:function(t,e,r){"use strict";var n={name:"ChartJsLine",extends:r(591).c,props:{data:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}}},mounted:function(){this.renderChart(this.data,this.options)}},o=r(2),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.a=component.exports}}]);