"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7150],{9613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return v}});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(t),v=a,m=d["".concat(i,".").concat(v)]||d[v]||p[v]||o;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7640:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(9496),a=t(1626),o="tabItem_zeWL";function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},866:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(5443),a=t(9496),o=t(1626),l=t(4252),u=t(1135),i=t(9162),s=t(3946),c="tabList_gs2P",p="tabItem_Ugfh";function d(e){var n,t,l=e.lazy,d=e.block,v=e.defaultValue,m=e.values,f=e.groupId,y=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,u.l)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===v?v:null!=(n=null!=v?v:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:b[0].props.value;if(null!==x&&!h.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.U)(),O=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,a.useState)(x),T=w[0],I=w[1],_=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=O[f];null!=C&&C!==T&&h.some((function(e){return e.value===C}))&&I(C)}var j=function(e){var n=e.currentTarget,t=_.indexOf(n),r=h[t].value;r!==T&&(E(n),I(r),null!=f&&N(f,String(r)))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=_.indexOf(e.currentTarget)+1;t=null!=(r=_[a])?r:_[0];break;case"ArrowLeft":var o,l=_.indexOf(e.currentTarget)-1;t=null!=(o=_[l])?o:_[_.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},y)},h.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return _.push(e)},onKeyDown:P,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function v(e){var n=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},2934:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return v}});var r=t(5443),a=t(3010),o=(t(9496),t(9613)),l=t(866),u=t(7640),i=["components"],s={},c=void 0,p={unversionedId:"ox_inventory/Functions/Client/openInventory",id:"ox_inventory/Functions/Client/openInventory",title:"openInventory",description:"Opens an inventory using on the passed data.",source:"@site/docs/ox_inventory/Functions/Client/openInventory.md",sourceDirName:"ox_inventory/Functions/Client",slug:"/ox_inventory/Functions/Client/openInventory",permalink:"/docs/ox_inventory/Functions/Client/openInventory",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Client/openInventory.md",tags:[],version:"current",lastUpdatedAt:1661538290,formattedLastUpdatedAt:"8/26/2022",frontMatter:{},sidebar:"ox_inventory",previous:{title:"displayMetadata",permalink:"/docs/ox_inventory/Functions/Client/displayMetadata"},next:{title:"openNearbyInventory",permalink:"/docs/ox_inventory/Functions/Client/openNearbyInventory"}},d={},v=[],m={toc:v};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Opens an inventory using on the passed data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- invType: string\n-- data: number | string | table\nexports.ox_inventory:openInventory(invType, data)\n")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"1",label:"Player",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Open the target player's inventory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:openInventory('player', 3)\n"))),(0,o.kt)(u.Z,{value:"2",label:"Shop",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Open the fourth "General Store" ',(0,o.kt)("a",{parentName:"strong",href:"https://github.com/overextended/ox_inventory/blob/main/data/shops.lua#L14"},"location"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:openInventory('shop', { type = 'General', id = 4 })\n"))),(0,o.kt)(u.Z,{value:"3",label:"Stash",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Open the first stash in ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/overextended/ox_inventory/blob/main/data/stashes.lua#L2-L19"},"data/stashes"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:openInventory('stash', 1)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Open a custom stash (created on the server with RegisterStash).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:openInventory('stash', 'society_police')\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Open a stash with a specific owner.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:openInventory('stash', { id = 'police_locker', owner = 'license:xxxxxxxx' })\n")))))}f.isMDXComponent=!0}}]);