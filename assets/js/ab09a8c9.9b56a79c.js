"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[4694],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),d=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),s=d(r),f=a,u=s["".concat(l,".").concat(f)]||s[f]||m[f]||i;return r?n.createElement(u,o(o({ref:e},p),{},{components:r})):n.createElement(u,o({ref:e},p))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[s]="string"==typeof t?t:a,o[1]=c;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5335:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={},o="Interaction",c={unversionedId:"limit-order-protocol/smart-contract/interfaces/InteractionNotificationReceiver",id:"limit-order-protocol/smart-contract/interfaces/InteractionNotificationReceiver",title:"Interaction",description:"Functions",source:"@site/docs/limit-order-protocol/smart-contract/interfaces/InteractionNotificationReceiver.md",sourceDirName:"limit-order-protocol/smart-contract/interfaces",slug:"/limit-order-protocol/smart-contract/interfaces/InteractionNotificationReceiver",permalink:"/docs/limit-order-protocol/smart-contract/interfaces/InteractionNotificationReceiver",draft:!1,editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/limit-order-protocol/smart-contract/interfaces/InteractionNotificationReceiver.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IWithdrawable",permalink:"/docs/limit-order-protocol/smart-contract/interfaces/IWithdrawable"},next:{title:"PostInteraction",permalink:"/docs/limit-order-protocol/smart-contract/interfaces/PostInteractionNotificationReceiver"}},l={},d=[{value:"Functions",id:"functions",level:2},{value:"fillOrderInteraction",id:"fillorderinteraction",level:3},{value:"Parameters:",id:"parameters",level:4}],p={toc:d},s="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interaction"},"Interaction"),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"fillorderinteraction"},"fillOrderInteraction"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function fillOrderInteraction(\n  address taker,\n  address makerAsset,\n  address takerAsset,\n  uint256 makingAmount,\n  uint256 takingAmount,\n  bytes interactiveData\n) external\n")),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"taker")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"makerAsset")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"takerAsset")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"makingAmount")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"takingAmount")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"interactiveData")),(0,a.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);