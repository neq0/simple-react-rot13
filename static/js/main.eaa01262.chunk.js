(this["webpackJsonpsimple-react-rot13"]=this["webpackJsonpsimple-react-rot13"]||[]).push([[0],[,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),i=n(3),o=n.n(i),a=(n(8),n.p,n(9),n(0)),s=function(t){var e=t.text,n=t.onClick;return Object(a.jsx)("button",{onClick:n,children:e})},l=(n(11),function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Welcome to Rot13!"}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:"https://en.wikipedia.org/wiki/ROT13",children:"What is Rot13?"})}),Object(a.jsx)("div",{className:"align-center",children:Object(a.jsx)("textarea",{name:"",id:"rot13-text",cols:"30",rows:"10"})}),Object(a.jsx)(s,{text:"Rot13",onClick:function(){var t=document.querySelector("#rot13-text");t.value=function(t){var e="";return t.split("").forEach((function(t){var n=t.charCodeAt(0);e+=65<=n&&n<=90?String.fromCharCode(65+(n-65+13)%26):97<=n&&n<=122?String.fromCharCode(97+(n-97+13)%26):t})),e}(t.value)}})]})}),u=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),i(t),o(t)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l,{})}),document.getElementById("root")),u()}],[[12,1,2]]]);
//# sourceMappingURL=main.eaa01262.chunk.js.map