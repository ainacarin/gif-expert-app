(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(7),i=n.n(r),s=(n(15),n(2)),u=(n(16),n(9)),o=(n(17),n(0)),j=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],j=Object(a.useState)(null),d=Object(s.a)(j,2),l=d[0],p=d[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>1?(e((function(t){return[r].concat(Object(u.a)(t))})),i("")):p("Error value")},children:[Object(o.jsx)("input",{type:"text",value:r,onChange:function(t){p(""),i(t.target.value)},placeholder:"Write new character"}),l&&Object(o.jsx)("p",{children:l})]})})},d=n(10),l=function(t){var e=t.id,n=t.title,a=t.url;return Object(o.jsxs)("div",{id:e,className:"card animate__animated animate__fadeIn",children:[Object(o.jsx)("p",{children:n}),Object(o.jsx)("img",{src:a,alt:n})]})},p=n(6),b=n.n(p),f=n(8),h=function(){var t=Object(f.a)(b.a.mark((function t(e){var n,a,c,r,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat("https://api.giphy.com/v1/gifs/search","?q=").concat(encodeURI(e),"&limit=10&api_key=").concat("O6h3slC7ujbApu4X7z1Fmop9mZQymABw"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){var e=t.id,n=t.title,a=t.images;return{id:e,title:n,url:null===a||void 0===a?void 0:a.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){h(t).then((function(t){setTimeout((function(){r({data:t,loading:!1})}),3e3)}))}),[t]),c}(e),c=n.data,r=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{className:"animate__animated animate__flash",children:e}),r&&Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(o.jsx)(l,Object(d.a)({},t),t.id)}))})]})},O=function(){var t=c.a.useState(["Rick and Morty"]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(j,{setCategories:a}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(t){return Object(o.jsx)(m,{category:t},t)}))})]})};i.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3595eff2.chunk.js.map