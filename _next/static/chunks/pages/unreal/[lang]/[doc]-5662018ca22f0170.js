(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[474],{9365:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/unreal/[lang]/[doc]",function(){return t(5294)}])},3021:function(n,e,t){"use strict";t.d(e,{Z:function(){return b}});var c=t(2670),a=t(5893),r=t(1163),i=t(5675),s=t.n(i);function l(n){return(0,a.jsxs)("header",{className:"App-header",children:[(0,a.jsx)(s(),{src:"/puerts-logo.png",width:"80",height:"80",className:"App-logo",alt:"logo"}),(0,a.jsxs)("section",{className:"App-title",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"PuerTS"}),(0,a.jsx)("span",{children:" - Write your UE/Unity game with TypeScript."})]}),(0,a.jsx)("span",{className:"subtitle",children:"can be pronounced as pu-erh TS\uff08\u666e\u6d31TS\uff09"})]}),(0,a.jsxs)("section",{className:"App-doc-version",children:[(0,a.jsxs)("select",{name:"engine",id:"engine",value:n.engine,onChange:function(e){location.href="/".concat(e.target.value,"/").concat(n.lang,"/readme")},children:[(0,a.jsx)("option",{value:"unreal",children:"Unreal"}),(0,a.jsx)("option",{value:"unity",children:"Unity"})]}),(0,a.jsxs)("select",{name:"language",id:"language",value:n.lang,onChange:function(e){location.href=location.href.replace(n.lang,e.target.value)},children:[(0,a.jsx)("option",{value:"en",children:"English"}),(0,a.jsx)("option",{value:"zhcn",children:"\u7b80\u4f53\u4e2d\u6587"})]})]}),(0,a.jsx)("section",{className:"App-link",children:(0,a.jsx)("a",{target:"_blank",href:"https://github.com/tencent/puerts",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/stars/tencent/puerts?style=social",alt:""})})})]})}var o=t(1664),d=t.n(o),u=[{en:"Introduce to PuerTS",zhcn:"Introduce to PuerTS",md:"readme"},{en:"Main Concepts",zhcn:"PuerTS\u57fa\u7840",child:[{en:"install PuerTS",zhcn:"\u5b89\u88c5PuerTS",md:"install"},{en:"Run JS in Unity",zhcn:"\u5f00\u59cbPuerTS\u4e4b\u65c5",md:"basic-runJS"},{en:"Call C# in JS",zhcn:"JS\u8c03\u7528C#\u6307\u5357",md:"basic-js2cs"},{en:"Call JS in C#",zhcn:"C#\u8c03\u7528JS\u6307\u5357",md:"basic-cs2js"},{en:"Module Loader",zhcn:"\u6a21\u5757\u52a0\u8f7d",md:"basic-module"},{en:"Typescript",zhcn:"\u4f7f\u7528Typescript",md:"basic-typescript"}]},{en:"Wrapper",zhcn:"PuerTS\u4ee3\u7801\u751f\u6210",child:[{en:"Generate Wrapper",zhcn:"Wrapper \u751f\u6210",md:"wrapper-wrapper"},{en:"Generate Filter",zhcn:"\u751f\u6210\u8fc7\u6ee4\u5668",md:"wrapper-filter"},{en:"BlittableCopy GC optimize",zhcn:"BlittableCopy GC\u4f18\u5316",md:"wrapper-blittablecopy"},{en:"Extension",zhcn:"C# \u6269\u5c55\u51fd\u6570",md:"wrapper-extension"}]},{en:"Advanced Guide",zhcn:"\u8fdb\u9636\u6307\u5f15",child:[{en:"FAQ",zhcn:"FAQ",md:"faq"},{en:"JS Inspector",zhcn:"JS\u8c03\u8bd5",md:"other-debugging"},{en:"Other JS Backend",zhcn:"\u5176\u4ed6JS\u540e\u7aef",md:"other-backend"},{en:"Build by yourself",zhcn:"\u81ea\u884c\u6784\u5efa",md:"other-building"}]},{en:"Community",zhcn:"\u793e\u533a\u4e3aPuerTS\u8d21\u732e\u7684\u5185\u5bb9",md:"other-community"}],h=[{en:"Introduce to PuerTS",zhcn:"Introduce to PuerTS"}];function p(n,e,t){return n.md?(0,a.jsx)(d(),{href:"/".concat(e,"/").concat(t,"/").concat(n.md),children:(0,a.jsx)("a",{href:"/".concat(e,"/").concat(t,"/").concat(n.md),onClick:function(n){n.preventDefault},children:n[t]})}):(0,a.jsx)("span",{children:n[t]})}function g(n){var e=n.lang,t=n.engine;return(0,a.jsxs)("section",{className:"App-sidebar",children:[(0,a.jsx)("div",{className:"App-install-bar",children:(0,a.jsx)("a",{target:"_blank",href:"https://github.com/chexiongsheng/puerts_"+t+"_demo",children:(0,a.jsx)("span",{className:"App-install",children:"\u5b98\u65b9Demo"})})}),(0,a.jsx)("div",{className:"sidebar-content",children:("unity"===t?u:h).map((function(n){return(0,a.jsxs)("div",{className:"catalog-block",children:[(0,a.jsx)("h5",{children:p(n,t,e)}),n.child?(0,a.jsx)("ul",{children:n.child.map((function(n){return(0,a.jsx)("li",{children:p(n,t,e)},n.en)}))}):null]},n.en)}))})]})}var m=t(6531),x=t(4768),f=t(7704);function j(n){return"undefined"!=typeof localStorage&&(localStorage.setItem("puerts_doc_last_engine",n.engine),localStorage.setItem("puerts_doc_last_lang",n.lang)),(0,a.jsxs)("div",{className:"App",children:[(0,a.jsx)(l,{engine:n.engine,lang:n.lang}),(0,a.jsxs)("article",{className:"App-body",children:[(0,a.jsx)(g,{engine:n.engine,lang:n.lang}),(0,a.jsx)("section",{className:"App-content markdown-body",children:(0,a.jsx)(m.D,{children:n.markdown,remarkPlugins:[f.Z],rehypePlugins:[x.Z]})})]})]})}var S=t(8100);function b(n){var e=function(n){return-1!=n.indexOf("undefined")?"":fetch(n).then((function(n){if(200==n.status)return n.text();throw n.statusText}))};return function(t){var i=t.lang,s=t.doc,l=t.markdown,o=(0,r.useRouter)().query;(0,c.Z)(o.lang,Array)||(0,c.Z)(o.doc,Array)||-1==["zhcn","en","zhtw"].indexOf(o.lang)||(s=o.doc,i=o.lang);var d=(0,S.ZP)("/doc/".concat(n,"/").concat(i,"/").concat(s&&s.split("-").join("/"),".md"),e),u=d.data,h=d.error;return l?!h&&u&&(l=u):i&&s?h?l='# Failed to load "'.concat(s,'" content: ').concat(h):u&&(l=u):l="# Loading",(0,a.jsx)(j,{lang:i,engine:"unity",markdown:l})}}},5294:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return a}});var c=t(3021),a=!0;e.default=(0,c.Z)("unreal")}},function(n){n.O(0,[585,774,888,179],(function(){return e=9365,n(n.s=e);var e}));var e=n.O();_N_E=e}]);