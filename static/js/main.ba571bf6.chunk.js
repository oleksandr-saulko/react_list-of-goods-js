(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),i=n(6),r=n(8),o=n(1),a=n(4),l=n.n(a),u=(n(13),n(14),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="alphabetically",h="length",d=function(){var t=Object(o.useState)(""),e=Object(i.a)(t,2),n=e[0],s=e[1],c=Object(o.useState)(!1),a=Object(i.a)(c,2),d=a[0],p=a[1],g=function(t,e){var n=e.sortField,s=e.isReverse,c=Object(r.a)(t);return n&&c.sort((function(t,e){switch(n){case j:return t.localeCompare(e);case h:return t[n]-e[n];default:return 0}})),s?c.reverse():c}(b,{sortField:n,isReverse:d});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":"alphabetically"!==n}),onClick:function(){return s(j)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":"length"!==n}),onClick:function(){return s(h)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!d}),onClick:function(){return p(!d)},children:"Reverse"}),(n||d)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){p(!1),s("")},children:"Reset"})]}),Object(u.jsx)("ul",{children:g.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ba571bf6.chunk.js.map