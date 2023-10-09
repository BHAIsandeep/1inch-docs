"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[5795],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},84358:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={},l="Common API Error Messages Explained",p={unversionedId:"educational-resources/intermediate/Common-API-Error-Messages-Explained",id:"educational-resources/intermediate/Common-API-Error-Messages-Explained",isDocsHomePage:!1,title:"Common API Error Messages Explained",description:"If you're encountering issues with our API, this guide will help you understand some common error messages and their meanings.",source:"@site/docs/educational-resources/intermediate/Common-API-Error-Messages-Explained.mdx",sourceDirName:"educational-resources/intermediate",slug:"/educational-resources/intermediate/Common-API-Error-Messages-Explained",permalink:"/docs/educational-resources/intermediate/Common-API-Error-Messages-Explained",editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/educational-resources/intermediate/Common-API-Error-Messages-Explained.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CORS-Error-FAQ",permalink:"/docs/educational-resources/intermediate/CORS-Error-FAQ"},next:{title:"Fusion FAQ",permalink:"/docs/educational-resources/intermediate/fusion-swap-faq"}},c=[{value:"General Errors",id:"general-errors",children:[]},{value:"Specific Errors",id:"specific-errors",children:[]},{value:"Swap-specific Errors",id:"swap-specific-errors",children:[]}],u={toc:c};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"common-api-error-messages-explained"},"Common API Error Messages Explained"),(0,i.kt)("p",null,"If you're encountering issues with our API, this guide will help you understand some common error messages and their meanings."),(0,i.kt)("h2",{id:"general-errors"},"General Errors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"400 - Bad Request:")," This indicates an incorrect parameter. Ensure that all required parameters are correctly set.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"429 - Rate Limit:")," You've made too many requests to the API within a 1 second time period. Reduce your requests per second (RPS) to stay below the free 1rps limit. If higher limits are required, please fill out the 1inch Network Enterprise API application.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"503 - Banned IP:")," The IP address you're using to access the API is banned. Please ensure you're adhering to 1inch Network's terms of use.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"The API isn't behaving as expected:")," In certain cases you may be passing in a parameter supported by the API but the wrong type or expected value. For example ",(0,i.kt)("inlineCode",{parentName:"p"},"disableEstimate=true")," will work but ",(0,i.kt)("inlineCode",{parentName:"p"},"disableEstimate=True")," will not. All parameters are CAsE SenSiTive. This is especially apparent when stringifying boolean values in python. "))),(0,i.kt)("h2",{id:"specific-errors"},"Specific Errors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Cannot sync token:")," The token either doesn't exist on the blockchain or isn't a valid token. Also, double check that you are using the correct chainID in relation to the token used.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Amount is not set:")," The 'amount' field hasn't been specified. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Please note:"))," All token amounts must be in the correct decimal format! The decimal format can be found by looking up the token contract on the block explorer. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Example:")," If the ",(0,i.kt)("a",{parentName:"p",href:"https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f"},"source token is DAI"),", and you are sending 1 DAI, the amount with 18 decimals would be ",(0,i.kt)("inlineCode",{parentName:"p"},"1000000000000000000"),"."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"alt_text",src:r(5255).Z,title:"image_tooltip"}))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Src is not set:")," The 'src' (source token contract) field is missing.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Dst is not set:")," The 'dst' (destination token contract) field is missing.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Insufficient liquidity:")," The aggregator can't find a route for the swap due to low liquidity."))),(0,i.kt)("h2",{id:"swap-specific-errors"},"Swap-specific Errors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"400 - Bad Request:")," This will be similar to the general 400 error; however, these error messages will also specify a missing parameter or more details of the problem.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Not enough src balance:")," This means your source token balance is insufficient. It provides the required amount and your current balance.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Not enough Allowance:")," You haven't granted the necessary token allowance to the 1inch router. It'll indicate the amount, current allowance, and the spender address, e.g., \"Spender: 0x1111111254eeb25477b68fb85ed929f73a960582\".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Insufficient liquidity:")," As mentioned earlier, the aggregator couldn't route the swap."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"}," Please note:"))," This list is not comprehensive. Other errors involving the dynamics of generic EVM transaction estimations might require deeper investigation.")))}m.isMDXComponent=!0},5255:function(e,t,r){t.Z=r.p+"assets/images/dai-decimals-cce0c4f4c08b0c69acb27c9af9dca6d0.png"}}]);