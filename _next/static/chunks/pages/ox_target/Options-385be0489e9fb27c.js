(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9781],{3167:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_target/Options",function(){return i(8079)}])},8079:function(n,e,i){"use strict";i.r(e),i.d(e,{__toc:function(){return l}});var s=i(1527),r=i(2059),t=i(3443);let l=[{depth:2,value:"Option Parameters",id:"option-parameters"},{depth:2,value:"Option Effects",id:"option-effects"}];function o(n){let e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",a:"a",ol:"ol"},(0,t.a)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{children:"Options"}),"\n",(0,s.jsx)(e.p,{children:"When creating a targetable option you must send an array of options with the following properties."}),"\n",(0,s.jsx)(e.h2,{id:"option-parameters",children:"Option Parameters"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["label: ",(0,s.jsx)(e.code,{children:"string"})]}),"\n",(0,s.jsxs)(e.li,{children:["name?: ",(0,s.jsx)(e.code,{children:"string"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"An identifier used when removing an option."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["icon?: ",(0,s.jsx)(e.code,{children:"string"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Name of a ",(0,s.jsx)(e.a,{href:"https://fontawesome.com/icons",children:"Font Awesome"})," icon."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["iconColor?: ",(0,s.jsx)(e.code,{children:"string"})]}),"\n",(0,s.jsxs)(e.li,{children:["distance?: ",(0,s.jsx)(e.code,{children:"number"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"The max distance to display the option."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["bones?: ",(0,s.jsx)(e.code,{children:"string"})," or ",(0,s.jsx)(e.code,{children:"string[]"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["A bone name or array of bone names (see ",(0,s.jsx)(e.a,{href:"https://docs.fivem.net/natives/?_0xFB71170B7E76ACBA",children:"GetEntityBoneIndexByName"}),")."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["offset?: ",(0,s.jsx)(e.code,{children:"vector3"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Offset the targetable area of an entity, relative to the model dimensions."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["offsetAbsolute?: ",(0,s.jsx)(e.code,{children:"vector3"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Offset the targetable area of an entity, relative to the entity's world coords."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["offsetSize?: ",(0,s.jsx)(e.code,{children:"number"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"The radius of the targetable area for an entity offset."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["groups?: ",(0,s.jsx)(e.code,{children:"string"})," or ",(0,s.jsx)(e.code,{children:"string[]"})," or ",(0,s.jsx)(e.code,{children:"table<string, number>"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"A group, array of groups, or pairs of groups-grades required to show the option."}),"\n",(0,s.jsx)(e.li,{children:"Groups are framework dependent, and may refer to jobs, gangs, etc."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["items?: ",(0,s.jsx)(e.code,{children:"string"})," or ",(0,s.jsx)(e.code,{children:"string[]"})," or ",(0,s.jsx)(e.code,{children:"table<string, number>"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"An item, array of items, or pairs of items-count required to show the option."}),"\n",(0,s.jsx)(e.li,{children:"Items are framework dependent."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["anyItem?: ",(0,s.jsx)(e.code,{children:"boolean"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Only require a single item from the items table to exist."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["canInteract?: ",(0,s.jsx)(e.code,{children:"function(entity, distance, coords, name, bone)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Options will always display if this is undefined."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["menuName?: ",(0,s.jsx)(e.code,{children:"string"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"The option is only displayed when a menu has been set with openMenu."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["openMenu?: ",(0,s.jsx)(e.code,{children:"string"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Sets the current menu name, displaying only options for the menuName."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["onSelect?: ",(0,s.jsx)(e.code,{children:"function(data)"})]}),"\n",(0,s.jsxs)(e.li,{children:["export?: ",(0,s.jsx)(e.code,{children:"string"})]}),"\n",(0,s.jsxs)(e.li,{children:["event?: ",(0,s.jsx)(e.code,{children:"string"})]}),"\n",(0,s.jsxs)(e.li,{children:["serverEvent?: ",(0,s.jsx)(e.code,{children:"string"})]}),"\n",(0,s.jsxs)(e.li,{children:["command?: ",(0,s.jsx)(e.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"option-effects",children:"Option Effects"}),"\n",(0,s.jsx)(e.p,{children:"When selecting an option it will trigger a single action, in order of priority:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"onSelect function"}),"\n",(0,s.jsx)(e.li,{children:"export"}),"\n",(0,s.jsx)(e.li,{children:"event"}),"\n",(0,s.jsx)(e.li,{children:"server event"}),"\n",(0,s.jsx)(e.li,{children:"command"}),"\n"]})]})}e.default=(0,r.j)({MDXContent:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,t.a)(),n.components);return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)},pageOpts:{filePath:"pages/ox_target/Options.mdx",route:"/ox_target/Options",title:"Options",headings:l},pageNextRoute:"/ox_target/Options"})}},function(n){n.O(0,[2059,9774,2888,179],function(){return n(n.s=3167)}),_N_E=n.O()}]);