"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[4906],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>k});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),p=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,c=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(r),u=n,k=m["".concat(c,".").concat(u)]||m[u]||s[u]||l;return r?a.createElement(k,i(i({ref:e},d),{},{components:r})):a.createElement(k,i({ref:e},d))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[m]="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},151:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={},i="ChainlinkCalculator",o={unversionedId:"limit-order-protocol/smart-contract/helpers/ChainlinkCalculator",id:"limit-order-protocol/smart-contract/helpers/ChainlinkCalculator",title:"ChainlinkCalculator",description:"A helper contract for interactions with https://docs.chain.link",source:"@site/docs/limit-order-protocol/smart-contract/helpers/ChainlinkCalculator.md",sourceDirName:"limit-order-protocol/smart-contract/helpers",slug:"/limit-order-protocol/smart-contract/helpers/ChainlinkCalculator",permalink:"/docs/limit-order-protocol/smart-contract/helpers/ChainlinkCalculator",draft:!1,editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/limit-order-protocol/smart-contract/helpers/ChainlinkCalculator.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AmountCalculator",permalink:"/docs/limit-order-protocol/smart-contract/helpers/AmountCalculator"},next:{title:"ERC1155Proxy",permalink:"/docs/limit-order-protocol/smart-contract/helpers/ERC1155Proxy"}},c={},p=[{value:"Functions",id:"functions",level:2},{value:"singlePrice",id:"singleprice",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"doublePrice",id:"doubleprice",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Return Values:",id:"return-values-1",level:4}],d={toc:p},m="wrapper";function s(t){let{components:e,...r}=t;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"chainlinkcalculator"},"ChainlinkCalculator"),(0,n.kt)("p",null,"A helper contract for interactions with ",(0,n.kt)("a",{parentName:"p",href:"https://docs.chain.link"},"https://docs.chain.link")),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"singleprice"},"singlePrice"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function singlePrice(\n  contract AggregatorV3Interface oracle,\n  uint256 inverseAndSpread,\n  uint256 amount\n) external returns (uint256)\n")),(0,n.kt)("p",null,"Calculates price of token relative to oracle unit (ETH or USD)"),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"oracle")),(0,n.kt)("td",{parentName:"tr",align:"left"},"contract AggregatorV3Interface"),(0,n.kt)("td",{parentName:"tr",align:"left"},"concatenated inverse flag and spread. Lowest 254 bits specify spread amount. Spread is scaled by 1e9, i.e. 101% = 1.01e9, 99% = 0.99e9. Highest bit is set when oracle price should be inverted, e.g. for DAI-ETH oracle, inverse=false means that we request DAI price in ETH and inverse=true means that we request ETH price in DAI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"inverseAndSpread")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"amount")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h4",{id:"return-values"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Amount")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"}," spread ")," oracle price")))),(0,n.kt)("h3",{id:"doubleprice"},"doublePrice"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function doublePrice(\n  contract AggregatorV3Interface oracle1,\n  contract AggregatorV3Interface oracle2,\n  uint256 spread,\n  int256 decimalsScale,\n  uint256 amount\n) external returns (uint256)\n")),(0,n.kt)("p",null,"Calculates price of token A relative to token B. Note that order is important"),(0,n.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"oracle1")),(0,n.kt)("td",{parentName:"tr",align:"left"},"contract AggregatorV3Interface"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"oracle2")),(0,n.kt)("td",{parentName:"tr",align:"left"},"contract AggregatorV3Interface"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"spread")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"decimalsScale")),(0,n.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"amount")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Result")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Token A relative price times amount")))))}s.isMDXComponent=!0}}]);