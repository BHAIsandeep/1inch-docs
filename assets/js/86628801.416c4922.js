"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[7802],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=l(r),h=n,p=f["".concat(c,".").concat(h)]||f[h]||u[h]||o;return r?a.createElement(p,i(i({ref:t},d),{},{components:r})):a.createElement(p,i({ref:t},d))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[f]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},20148:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_label:"What is MEV?"},i=void 0,s={unversionedId:"educational-resources/advanced/finding-mev",id:"educational-resources/advanced/finding-mev",title:"finding-mev",description:"As the decentralized finance (DeFi) ecosystem on Ethereum continues to grow, so does the importance of understanding and tracking MEV or Maximal Extractable Value. MEV refers to the amount of profit that validators can make by reordering or censoring transactions in a block before it is added to the blockchain. MEV has become an increasingly important metric in the DeFi space, as it affects the security, fairness, and overall efficiency of the system. In this article, we will explore what MEV is, why it matters, and some useful tools for tracking MEV on Ethereum.",source:"@site/docs/educational-resources/advanced/finding-mev.mdx",sourceDirName:"educational-resources/advanced",slug:"/educational-resources/advanced/finding-mev",permalink:"/docs/educational-resources/advanced/finding-mev",draft:!1,editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/educational-resources/advanced/finding-mev.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"What is MEV?"},sidebar:"tutorialSidebar",previous:{title:"How to use block explorers",permalink:"/docs/educational-resources/intermediate/how-to-read-a-block-explorer"},next:{title:"Reading transaction input data",permalink:"/docs/educational-resources/advanced/transaction-data"}},c={},l=[],d={toc:l},f="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"As the decentralized finance (DeFi) ecosystem on Ethereum continues to grow, so does the importance of understanding and tracking MEV or Maximal Extractable Value. MEV refers to the amount of profit that validators can make by reordering or censoring transactions in a block before it is added to the blockchain. MEV has become an increasingly important metric in the DeFi space, as it affects the security, fairness, and overall efficiency of the system. In this article, we will explore what MEV is, why it matters, and some useful tools for tracking MEV on Ethereum."),(0,n.kt)("p",null,"What is MEV?"),(0,n.kt)("p",null,"MEV stands for Maximal Extractable Value, which is the amount of profit that validators can extract from the network by manipulating transactions in a block. Validators have the power to decide which transactions are included in a block and in what order they are executed. This power creates opportunities for validators to extract value from the network by reordering or censoring transactions."),(0,n.kt)("p",null,"For example, a validator could extract MEV by front-running a transaction, which involves executing a transaction before it is included in a block in order to profit from its effects. Alternatively, a validator could extract MEV by including transactions that pay higher fees, even if those transactions are not strictly in the order they were received."),(0,n.kt)("p",null,"Why does MEV matter?"),(0,n.kt)("p",null,"MEV matters for several reasons. First, it can affect the security of the network. If validator have the power to extract MEV, they may be incentivized to act in ways that are harmful to the network, such as censoring transactions or engaging in other forms of manipulation. This can undermine the integrity of the system and lead to a loss of trust among users."),(0,n.kt)("p",null,"Second, MEV can affect the fairness of the system. If validator have the power to extract value from the network, this can create an uneven playing field for users. Users who are not able to pay high fees or who are not able to front-run transactions may be at a disadvantage compared to those who can."),(0,n.kt)("p",null,"Finally, MEV can affect the overall efficiency of the system. If validator are incentivized to act in ways that are not aligned with the interests of users, this can lead to inefficiencies in the system. For example, if validator are prioritizing transactions based on fees rather than their order of receipt, this can lead to delays and increased transaction costs."),(0,n.kt)("p",null,"MEV Tools"),(0,n.kt)("p",null,"There are several tools available for tracking MEV on Ethereum. Here are some of the most useful:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.flashbots.net/"},"https://www.flashbots.net/"),": flashbots is the first major research and development platform built around MEV. They have created tools to track MEV and also perform and protect against MEV through the flashbots RPC. "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://eigenphi.io/"},"https://eigenphi.io/"),": eigenphi is a tool for tracking MEV on Ethereum. It provides a dashboard for tracking MEV and also provides a MEV explorer for viewing MEV transactions. It also has some useful resources for learning about MEV."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.relayscan.io/"},"https://www.relayscan.io/"),": relayscan is primarily a tool for tracking current MEV builders and the amount of blocks produced by each builder. "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://flashbots-explorer.marto.lol/"},"https://flashbots-explorer.marto.lol/"),": flashbots explorer is a tool for tracking MEV blocks on Ethereum. It provides an overview of each block and the bundles included in each block."))}u.isMDXComponent=!0}}]);