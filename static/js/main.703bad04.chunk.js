(this["webpackJsonpmonstes-rolodex"]=this["webpackJsonpmonstes-rolodex"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),o=n.n(s),a=(n(9),n(3)),i=(n.p,n(10),n(11),n(0)),u=function(e){var t=e.handleChange,n=e.placeholder,c=void 0===n?"":n;return Object(i.jsx)("input",{className:"search-box",type:"search",placeholder:c,onChange:function(e){return t(e.target.value)}})},l=(n(13),n(14),function(e){var t=e.card;return Object(i.jsxs)("div",{className:"cart-container",children:[Object(i.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),Object(i.jsx)("h2",{children:t&&t.name}),Object(i.jsx)("p",{children:t&&t.email})]})}),j=function(e){e.children;var t=e.monsters;return Object(i.jsx)("div",{className:"card-list",children:t&&t.map((function(e,t){return Object(i.jsx)(l,{card:e},"key:"+t)}))})};var h=function(){var e=Object(c.useRef)(null),t=Object(c.useState)([]),n=Object(a.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)(""),l=Object(a.a)(o,2),h=l[0],d=l[1];return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){s(t),e.current=t}))}),[]),Object(c.useEffect)((function(){if(console.log("[]---",e.current),h){var t=e.current.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));s(t)}else s(e.current)}),[h]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"Monsters Rolodex"}),Object(i.jsx)(u,{placeholder:"search monster...",handleChange:function(e){return d(e)}}),Object(i.jsx)(j,{monsters:r})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),d()}],[[15,1,2]]]);
//# sourceMappingURL=main.703bad04.chunk.js.map