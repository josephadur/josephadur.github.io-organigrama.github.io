(this["webpackJsonpclient-view-genially"]=this["webpackJsonpclient-view-genially"]||[]).push([[1],{1022:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(7),l=a(1),o=a(5),i=a(51),s=function(){return s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},d=o.d.div.withConfig({displayName:"TableChartWrapper",componentId:"sc-7mmcdf"})((function(){return{width:"100%",height:"100%",wordBreak:"break-all"}})),p=o.d.table.withConfig({displayName:"TableStyled",componentId:"sc-1fo5yv"})((function(e){return{borderCollapse:"collapse",height:"100%",width:"100%",tableLayout:e.fixed?"fixed":"auto"}})),f=o.d.td.withConfig({displayName:"TableCell",componentId:"sc-191eay4"})((function(e){var t=e.normalWordBreak;return s(s({},i.a.increaseSpecificity({padding:"0.15em"})),t?{overflow:"hidden",wordBreak:"normal"}:{})})),y=function(e){var t=e.data,a=e.id,r=e.cellStyles,c=e.tableStyles,l=e.normalWordBreak,o="fixed"===c.css.tableLayout;return n.a.createElement(d,{className:"genially-chart-wrapper"},n.a.createElement(p,{fixed:o},n.a.createElement("tbody",null,t.map((function(e,t){var c="t_".concat(a,"_r_").concat(t);return n.a.createElement("tr",{key:c},e.map((function(e,c){var o="t_".concat(a,"_c_").concat(t,"_").concat(c);return n.a.createElement(f,{normalWordBreak:l,style:r[t][c].css,key:o},n.a.createElement("span",null,e))})))})))))};y.propTypes={data:Object(l.arrayOf)(Object(l.arrayOf)(Object(l.oneOfType)([l.string,l.number]))),cellStyles:Object(l.arrayOf)(Object(l.arrayOf)(Object(l.shape)({css:l.object}))),tableStyles:Object(l.shape)({css:Object(l.shape)({tableLayout:Object(l.oneOf)(["auto","fixed"])})}),id:l.string,normalWordBreak:l.bool};t.default=Object(c.c)(y)}}]);
//# sourceMappingURL=tableChart.2bb6d6e2.chunk.js.map