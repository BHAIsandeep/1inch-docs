"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[4425],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return u}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(t),u=i,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return t?n.createElement(f,a(a({ref:r},s),{},{components:t})):n.createElement(f,a({ref:r},s))}));function u(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var d=2;d<o;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19326:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],c={sidebar_position:4},l="Canceling a limit order",d={unversionedId:"limit-order-protocol/guide/rfq-limit-orders/cancel-limit-order-rfq",id:"limit-order-protocol/guide/rfq-limit-orders/cancel-limit-order-rfq",isDocsHomePage:!1,title:"Canceling a limit order",description:"It is assumed that RFQ orders will be created with a short lifetime.",source:"@site/docs/limit-order-protocol/guide/rfq-limit-orders/cancel-limit-order-rfq.md",sourceDirName:"limit-order-protocol/guide/rfq-limit-orders",slug:"/limit-order-protocol/guide/rfq-limit-orders/cancel-limit-order-rfq",permalink:"/docs/limit-order-protocol/guide/rfq-limit-orders/cancel-limit-order-rfq",editUrl:"https://github.com/1inch/1inch-docs/edit/master/website/docs/limit-order-protocol/guide/rfq-limit-orders/cancel-limit-order-rfq.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Filling a RFQ order",permalink:"/docs/limit-order-protocol/guide/rfq-limit-orders/fill-limit-order-rfq"},next:{title:"API",permalink:"/docs/limit-order-protocol/api"}},s=[{value:"Parameters:",id:"parameters",children:[]},{value:"Creating with a typescript/javascript:",id:"creating-with-a-typescriptjavascript",children:[]},{value:"Canceling via CLI (with arguments):",id:"canceling-via-cli-with-arguments",children:[]},{value:"Canceling via CLI (through prompt):",id:"canceling-via-cli-through-prompt",children:[]}],p={toc:s};function m(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"canceling-a-limit-order"},"Canceling a limit order"),(0,o.kt)("p",null,"It is assumed that RFQ orders will be created with a short lifetime.",(0,o.kt)("br",{parentName:"p"}),"\n","But, if it becomes necessary to cancel the created RFQ order, then this can be done as follows:"),(0,o.kt)("h2",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"info")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"String")),(0,o.kt)("td",{parentName:"tr",align:null},"information about an RFQ order (see above in section ",(0,o.kt)("a",{parentName:"td",href:"/docs/limit-order-protocol/guide/rfq-limit-orders/limit-order-rfq-structure"},"RFQ structure"),")")))),(0,o.kt)("h2",{id:"creating-with-a-typescriptjavascript"},"Creating with a typescript/javascript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import Web3 from 'web3';\nimport {\n    LimitOrderProtocolFacade,\n    Web3ProviderConnector,\n    RFQOrder\n} from '@1inch/limit-order-protocol';\n\nconst contractAddress = '0x7643b8c2457c1f36dc6e3b8f8e112fdf6da7698a';\nconst walletAddress = '0xd337163ef588f2ee7cdd30a3387660019be415c9';\n\nconst web3 = new Web3('...');\n// You can create and use a custom provider connector (for example: ethers)\nconst connector = new Web3ProviderConnector(web3);\n\nconst limitOrderProtocolFacade = new LimitOrderProtocolFacade(\n    contractAddress,\n    connector\n);\n\nconst RFQorder: RFQOrder = {...};\n\nconst callData = limitOrderProtocolFacade.cancelRFQOrder(RFQorder.info);\n\n// Send transaction for the RFQ order canceling\n// Must be implemented\nsendTransaction({\n    from: walletAddress,\n    gas: 50_000, // Set your gas limit\n    gasPrice: 600000000, // Set your gas price\n    to: contractAddress,\n    data: callData,\n});\n")),(0,o.kt)("h2",{id:"canceling-via-cli-with-arguments"},"Canceling via CLI (with arguments):"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gasPrice")," - in units of GWEI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx limit-order-rfq-utils --\\\n--operation=cancel \\\n--chainId=56 \\\n--privateKey={xxx} \\\n--gasPrice=6 \\\n--orderInfo=29941961886664662336741887180811\n")),(0,o.kt)("h2",{id:"canceling-via-cli-through-prompt"},"Canceling via CLI (through prompt):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx limit-order-rfq-utils\n")),(0,o.kt)("p",null,"As result, you will receive a link to the transaction hash."))}m.isMDXComponent=!0}}]);