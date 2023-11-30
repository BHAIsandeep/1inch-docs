"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[9990],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>k});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},m=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=c(r),f=a,k=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(k,o(o({ref:e},m),{},{components:r})):n.createElement(k,o({ref:e},m))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[d]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},83813:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={},o="IDaiLikePermit",l={unversionedId:"limit-order-protocol/smart-contract/interfaces/IDaiLikePermit",id:"limit-order-protocol/smart-contract/interfaces/IDaiLikePermit",title:"IDaiLikePermit",description:"Interface for DAI-style permits",source:"@site/docs/limit-order-protocol/smart-contract/interfaces/IDaiLikePermit.md",sourceDirName:"limit-order-protocol/smart-contract/interfaces",slug:"/limit-order-protocol/smart-contract/interfaces/IDaiLikePermit",permalink:"/docs/limit-order-protocol/smart-contract/interfaces/IDaiLikePermit",draft:!1,editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/limit-order-protocol/smart-contract/interfaces/IDaiLikePermit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"interfaces",permalink:"/docs/limit-order-protocol/smart-contract/interfaces/"},next:{title:"IWithdrawable",permalink:"/docs/limit-order-protocol/smart-contract/interfaces/IWithdrawable"}},p={},c=[{value:"Functions",id:"functions",level:2},{value:"permit",id:"permit",level:3},{value:"Parameters:",id:"parameters",level:4}],m={toc:c},d="wrapper";function s(t){let{components:e,...r}=t;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"idailikepermit"},"IDaiLikePermit"),(0,a.kt)("p",null,"Interface for DAI-style permits"),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"permit"},"permit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function permit(\n  address holder,\n  address spender,\n  uint256 nonce,\n  uint256 expiry,\n  bool allowed,\n  uint8 v,\n  bytes32 r,\n  bytes32 s\n) external\n")),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"holder")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"spender")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nonce")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"expiry")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"allowed")),(0,a.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"v")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"r")),(0,a.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"s")),(0,a.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,a.kt)("td",{parentName:"tr",align:"left"})))))}s.isMDXComponent=!0}}]);