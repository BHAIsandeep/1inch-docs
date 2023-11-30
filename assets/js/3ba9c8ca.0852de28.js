"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[5299],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49975:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},i="RevertReasonParser",s={unversionedId:"limit-order-protocol/smart-contract/libraries/RevertReasonParser",id:"limit-order-protocol/smart-contract/libraries/RevertReasonParser",title:"RevertReasonParser",description:"Library that allows to parse unsuccessful arbitrary calls revert reasons.",source:"@site/docs/limit-order-protocol/smart-contract/libraries/RevertReasonParser.md",sourceDirName:"limit-order-protocol/smart-contract/libraries",slug:"/limit-order-protocol/smart-contract/libraries/RevertReasonParser",permalink:"/docs/limit-order-protocol/smart-contract/libraries/RevertReasonParser",draft:!1,editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/limit-order-protocol/smart-contract/libraries/RevertReasonParser.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Permitable",permalink:"/docs/limit-order-protocol/smart-contract/libraries/Permitable"},next:{title:"Liquidity Source and API",permalink:"/docs/limit-order-protocol/api"}},l={},c=[{value:"Functions",id:"functions",level:2},{value:"parse",id:"parse",level:3},{value:"Parameters:",id:"parameters",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"revertreasonparser"},"RevertReasonParser"),(0,n.kt)("p",null,"Library that allows to parse unsuccessful arbitrary calls revert reasons.\nSee ",(0,n.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/latest/control-structures.html#revert"},"https://solidity.readthedocs.io/en/latest/control-structures.html#revert")," for details.\nNote that we assume revert reason being abi-encoded as Error(string) so it may fail to parse reason\nif structured reverts appear in the future."),(0,n.kt)("p",null,"All unsuccessful parsings get encoded as Unknown(data) string"),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"parse"},"parse"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function parse(\n  bytes data,\n  string prefix\n) internal returns (string)\n")),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"prefix")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))}d.isMDXComponent=!0}}]);