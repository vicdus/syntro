(this.webpackJsonpsyntro=this.webpackJsonpsyntro||[]).push([[0],{19:function(t,e,a){t.exports=a(34)},33:function(t,e){},34:function(t,e,a){"use strict";a.r(e);var r=a(3),n=a.n(r),c=a(18),s=a.n(c),o=a(12),u=a.n(o),i=a(14),h=a(4),l=a(5),d=a.n(l),p=a(37);var f=function(){var t=Object(r.useState)({}),e=Object(h.a)(t,2),a=e[0],c=e[1],s="https://query2.finance.yahoo.com/v8/finance/chart/";function o(t,e){return l.apply(this,arguments)}function l(){return(l=Object(i.a)(u.a.mark((function t(e,a){var r,n,c,o,i,h,l;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s).concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return c=t.sent,o=c.chart.result[0].meta,i="".concat(s).concat(e,"?interval=1d&period1=").concat(o.firstTradeDate,"&period2=").concat(o.regularMarketTime),t.next=10,fetch(i);case 10:return h=t.sent,t.next=13,h.json();case 13:return l=t.sent,t.abrupt("return",{timestamp:d.a.takeRight(l.chart.result[0].timestamp,a),quote:{close:d.a.takeRight(l.chart.result[0].indicators.quote[0].close,a),high:d.a.takeRight(l.chart.result[0].indicators.quote[0].high,a),low:d.a.takeRight(l.chart.result[0].indicators.quote[0].low,a),open:d.a.takeRight(l.chart.result[0].indicators.quote[0].open,a),volume:d.a.takeRight(l.chart.result[0].indicators.quote[0].volume,a)},std:Object(p.a)(d.a.takeRight(l.chart.result[0].indicators.quote[0].close,a))/(null!==(r=d.a.last(l.chart.result[0].indicators.quote[0].close))&&void 0!==r?r:0)});case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){Object(i.a)(u.a.mark((function t(){var e,a,r,n,s,i,h,l,d;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("UPRO",10);case 2:return e=t.sent,t.next=5,o("TQQQ",10);case 5:return a=t.sent,t.next=8,o("TMF",10);case 8:r=t.sent,n=1/e.std,s=1/a.std,i=1/r.std,l=s/(h=n+s+i),d=i/h,c({UPRO:{share:n/h,std:e.std},TQQQ:{share:l,std:a.std},TMF:{share:d,std:r.std}});case 17:case"end":return t.stop()}}),t)})))()}),[]),n.a.createElement("div",{className:"App"},Object.entries(a).map((function(t){var e=Object(h.a)(t,2),a=e[0],r=e[1];return n.a.createElement("div",null," ",a+" "+Math.round(100*r.share)+" %, std = "+r.std," ")})))};s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.2a668187.chunk.js.map