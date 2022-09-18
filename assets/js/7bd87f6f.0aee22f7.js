"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6508],{9613:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(v,l(l({ref:n},s),{},{components:t})):r.createElement(v,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7640:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(9496),a=t(1626),o="tabItem_zeWL";function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},866:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(5443),a=t(9496),o=t(1626),l=t(4252),i=t(1135),u=t(9162),c=t(3946),s="tabList_gs2P",p="tabItem_Ugfh";function d(e){var n,t,l=e.lazy,d=e.block,m=e.defaultValue,v=e.values,f=e.groupId,h=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=v?v:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,i.l)(b,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(n=null!=m?m:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:y[0].props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),x=w.tabGroupChoices,T=w.setTabGroupChoices,O=(0,a.useState)(k),N=O[0],S=O[1],C=[],E=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var _=x[f];null!=_&&_!==N&&b.some((function(e){return e.value===_}))&&S(_)}var I=function(e){var n=e.currentTarget,t=C.indexOf(n),r=b[t].value;r!==N&&(E(n),S(r),null!=f&&T(f,String(r)))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=C.indexOf(e.currentTarget)+1;t=null!=(r=C[a])?r:C[0];break;case"ArrowLeft":var o,l=C.indexOf(e.currentTarget)-1;t=null!=(o=C[l])?o:C[C.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},h)},b.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:function(e){return C.push(e)},onKeyDown:j,onFocus:I,onClick:I},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(y.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function m(e){var n=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},9246:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=t(5443),a=t(3010),o=(t(9496),t(9613)),l=t(866),i=t(7640),u=["components"],c={},s=void 0,p={unversionedId:"ox_inventory/Functions/Client/Inventory/Search",id:"ox_inventory/Functions/Client/Inventory/Search",title:"Search",description:"Searches the inventory for an item, or list of items, with the result varying based on the first argument.",source:"@site/docs/ox_inventory/Functions/Client/Inventory/Search.md",sourceDirName:"ox_inventory/Functions/Client/Inventory",slug:"/ox_inventory/Functions/Client/Inventory/Search",permalink:"/docs/ox_inventory/Functions/Client/Inventory/Search",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Client/Inventory/Search.md",tags:[],version:"current",lastUpdatedAt:1663485509,formattedLastUpdatedAt:"9/18/2022",frontMatter:{},sidebar:"ox_inventory",previous:{title:"QBCore",permalink:"/docs/ox_inventory/Getting Started/qb"},next:{title:"Items",permalink:"/docs/ox_inventory/Functions/Client/Items"}},d={},m=[{value:"Count",id:"count",level:3},{value:"Slots",id:"slots",level:3}],v={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Searches the inventory for an item, or list of items, with the result varying based on the first argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- search: string\n-- item: table or string\n-- metadata: table or string (optional)\nexports.ox_inventory:Search(search, item, metadata)\n")),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"search")," argument is defined as ",(0,o.kt)("inlineCode",{parentName:"p"},"'slots'")," the return will be a table\nof slots where the item was found at."),(0,o.kt)("p",null,"Otherwise if the ",(0,o.kt)("inlineCode",{parentName:"p"},"search")," argument is defined as ",(0,o.kt)("inlineCode",{parentName:"p"},"'count'")," the return value\nwill be the amount of the specified item in player's inventory."),(0,o.kt)("h3",{id:"count"},"Count"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"1",label:"Single item",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local count = exports.ox_inventory:Search('count', 'water')\nprint('You have '..count.. ' water')\n"))),(0,o.kt)(i.Z,{value:"2",label:"Multiple items",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local inventory = exports.ox_inventory:Search('count', {'meat', 'skin'}, {grade=\"1\"})\n\nif inventory then\n    for name, count in pairs(inventory) do\n        print('You have '..count..' '..name)\n    end\nend\n")))),(0,o.kt)("h3",{id:"slots"},"Slots"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"1",label:"Single item",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local water = exports.ox_inventory:Search('slots', 'water')\nlocal count = 0\nfor _, v in pairs(water) do\n    print(v.slot..' contains '..v.count..' water '..json.encode(v.metadata))\n    count = count + v.count\nend\nprint('You have '..count..' water')\n"))),(0,o.kt)(i.Z,{value:"2",label:"Multiple items",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local items = exports.ox_inventory:Search('slots', {'meat', 'skin'}, 'deer')\n\nif items then\n    for name, data in pairs(items) do\n        local count = 0\n        for _, v in pairs(data) do\n            if v.slot then\n                print(v.slot..' contains '..v.count..' '..name..' '..json.encode(v.metadata))\n                count = count + v.count\n            end\n        end\n        print('You have '..count..' '..name)\n    end\nend\n")))))}f.isMDXComponent=!0}}]);