"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4371],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),m=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,k=d["".concat(u,".").concat(c)]||d[c]||s[c]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(2564),r=(n(9496),n(9613));const l={},i=void 0,o={unversionedId:"ox_lib/Modules/Math/Shared",id:"ox_lib/Modules/Math/Shared",title:"Shared",description:"lib.math",source:"@site/docs/ox_lib/Modules/Math/Shared.md",sourceDirName:"ox_lib/Modules/Math",slug:"/ox_lib/Modules/Math/Shared",permalink:"/docs/ox_lib/Modules/Math/Shared",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Modules/Math/Shared.md",tags:[],version:"current",lastUpdatedAt:1685395322,formattedLastUpdatedAt:"May 29, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Server",permalink:"/docs/ox_lib/Modules/Logger/Server"},next:{title:"Points",permalink:"/docs/ox_lib/Modules/Points/JavaScript/Client"}},u={},m=[{value:"lib.math",id:"libmath",level:2},{value:"math.toscalars",id:"mathtoscalars",level:3},{value:"math.tovector",id:"mathtovector",level:3},{value:"math.torgba",id:"mathtorgba",level:3},{value:"math.tohex",id:"mathtohex",level:3}],p={toc:m},d="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"libmath"},"lib.math"),(0,r.kt)("p",null,"Extends the standard Lua math table with extra functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"math = lib.math\n")),(0,r.kt)("h3",{id:"mathtoscalars"},"math.toscalars"),(0,r.kt)("p",null,"Takes a string and returns a set of scalar values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"math.toscalars(input, min, max, round)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"input: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"min?: ",(0,r.kt)("inlineCode",{parentName:"li"},"number")),(0,r.kt)("li",{parentName:"ul"},"max?: ",(0,r.kt)("inlineCode",{parentName:"li"},"number")),(0,r.kt)("li",{parentName:"ul"},"round?: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,r.kt)("p",null,"Return:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"...: ",(0,r.kt)("inlineCode",{parentName:"li"},"number"))),(0,r.kt)("h3",{id:"mathtovector"},"math.tovector"),(0,r.kt)("p",null,"Takes a string or table and returns a vector value, or a number if only one value was found."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"math.tovector(input, min, max, round)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"input: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"table")),(0,r.kt)("li",{parentName:"ul"},"min?: ",(0,r.kt)("inlineCode",{parentName:"li"},"number")),(0,r.kt)("li",{parentName:"ul"},"max?: ",(0,r.kt)("inlineCode",{parentName:"li"},"number")),(0,r.kt)("li",{parentName:"ul"},"round?: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,r.kt)("p",null,"Return:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"value: ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"vector2")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"vector3")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"vector4"))),(0,r.kt)("h3",{id:"mathtorgba"},"math.torgba"),(0,r.kt)("p",null,"Takes a string or table and returns a vector value, or a number if only one value was found.",(0,r.kt)("br",{parentName:"p"}),"\n","Values are rounded and must be within the range of 0-255."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"math.torgba(input)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"input: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"table"))),(0,r.kt)("p",null,"Return:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"value: ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"vector2")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"vector3")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"vector4"))),(0,r.kt)("h3",{id:"mathtohex"},"math.tohex"),(0,r.kt)("p",null,"Takes a number or string and formats it as a hexadecimal string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"math.tohex(n, upper)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"n: ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"upper?: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,r.kt)("p",null,"Return:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hex: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))))}s.isMDXComponent=!0}}]);