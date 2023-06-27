(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2172],{3480:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_inventory/Functions/Server/Hooks",function(){return n(9715)}])},9715:function(e,s,n){"use strict";n.r(s);var r=n(1527),l=n(6510),o=n(6736);function i(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",a:"a",h3:"h3",br:"br",strong:"strong"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{children:"Event Hooks"}),"\n",(0,r.jsx)(s.p,{children:"Event hooks allow 3rd party resources to define new behaviour without modifying the inventory code directly."}),"\n",(0,r.jsx)(s.h2,{id:"registerhook",children:"registerHook"}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"exports.ox_inventory:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"registerHook"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(eventName, "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"payload"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", options)"})]})})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["eventName: ",(0,r.jsx)(s.code,{children:"string"})]}),"\n",(0,r.jsxs)(s.li,{children:["payload: ",(0,r.jsx)(s.code,{children:"table"})]}),"\n",(0,r.jsxs)(s.li,{children:["options?: ",(0,r.jsx)(s.code,{children:"table"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["print?: ",(0,r.jsx)(s.code,{children:"boolean"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Print to the console when triggering the event."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["itemFilter?: ",(0,r.jsx)(s.code,{children:"{ [string]: true }"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"The event will only trigger for items defined as keys in a set."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["inventoryFilter?: ",(0,r.jsx)(s.code,{children:"string[]"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["The event will only trigger for inventories that match one of the ",(0,r.jsx)(s.a,{href:"http://www.easyuo.com/openeuo/wiki/index.php/Lua_Patterns_and_Captures_(Regular_Expressions)",children:"patterns"})," in the array."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["typeFilter?: ",(0,r.jsx)(s.code,{children:"{ [string]: true }"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"The event will only trigger for inventories with one of the provided types (e.g. 'player', 'stash')"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Return:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["hookId: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"swapitems",children:"swapItems"}),"\n",(0,r.jsxs)(s.p,{children:['Triggered when moving any item from one slot to another, or when "giving" an item.',(0,r.jsx)(s.br,{}),"\n","By returning ",(0,r.jsx)(s.code,{children:"false"}),", you can cancel the action and revert the inventory state."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Payload:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["source: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["action: ",(0,r.jsx)(s.code,{children:"'move'"})," or ",(0,r.jsx)(s.code,{children:"'stack'"})," or ",(0,r.jsx)(s.code,{children:"'swap'"})," or ",(0,r.jsx)(s.code,{children:"'give'"})]}),"\n",(0,r.jsxs)(s.li,{children:["fromInventory: ",(0,r.jsx)(s.code,{children:"table"})," or ",(0,r.jsx)(s.code,{children:"string"})," or ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["toInventory: ",(0,r.jsx)(s.code,{children:"table"})," or ",(0,r.jsx)(s.code,{children:"string"})," or ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["fromType: ",(0,r.jsx)(s.code,{children:"string"})]}),"\n",(0,r.jsxs)(s.li,{children:["toType: ",(0,r.jsx)(s.code,{children:"string"})]}),"\n",(0,r.jsxs)(s.li,{children:["fromSlot: ",(0,r.jsx)(s.code,{children:"table"})]}),"\n",(0,r.jsxs)(s.li,{children:["toSlot?: ",(0,r.jsx)(s.code,{children:"table"})," or ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["count: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example:"})}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" hookId "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.ox_inventory:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"registerHook"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'swapItems'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"payload"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(json."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"encode"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(payload, { indent "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }))"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    print "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    itemFilter "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        water "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    inventoryFilter "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'^glove[%w]+'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'^trunk[%w]+'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})}),"\n",(0,r.jsx)(s.p,{children:'Blacklists "water" from being moved into or from gloveboxes and trunks.'}),"\n",(0,r.jsx)(s.h3,{id:"openinventory",children:"openInventory"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Payload:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["source: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["inventoryId: ",(0,r.jsx)(s.code,{children:"number"})," or ",(0,r.jsx)(s.code,{children:"string"})]}),"\n",(0,r.jsxs)(s.li,{children:["inventoryType: ",(0,r.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Triggered when a player tries to open a secondary inventory.",(0,r.jsx)(s.br,{}),"\n","By returning ",(0,r.jsx)(s.code,{children:"false"}),", you can cancel the action and keep the player's inventory closed."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example:"})}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" hookId "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.ox_inventory:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"registerHook"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'openInventory'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"payload"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(json."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"encode"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(payload, { indent "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }))"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    print "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    inventoryFilter "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'^glove[%w]+'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'^trunk[%w]+'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})}),"\n",(0,r.jsx)(s.p,{children:"Disables gloveboxes and trunks."}),"\n",(0,r.jsx)(s.h3,{id:"createitem",children:"createItem"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Payload:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["inventoryId?: ",(0,r.jsx)(s.code,{children:"number"})," or ",(0,r.jsx)(s.code,{children:"string"})]}),"\n",(0,r.jsxs)(s.li,{children:["metadata: ",(0,r.jsx)(s.code,{children:"table"})]}),"\n",(0,r.jsxs)(s.li,{children:["item: ",(0,r.jsx)(s.code,{children:"table"})]}),"\n",(0,r.jsxs)(s.li,{children:["count: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Triggered when an item is created, either by buying it, using AddItem, or when converting inventory data.",(0,r.jsx)(s.br,{}),"\n","By returning a table you can modify or replace the metadata given to an item."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example:"})}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" hookId "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.ox_inventory:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"registerHook"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'createItem'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"payload"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(json."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"encode"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(payload, { indent "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }))"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" metadata "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" payload.metadata"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    metadata.label "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Mineral Water'"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" metadata"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    print "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    itemFilter "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        water "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})}),"\n",(0,r.jsx)(s.p,{children:'Sets the label for "water" to "Mineral Water".'}),"\n",(0,r.jsx)(s.h3,{id:"buyitem",children:"buyItem"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Payload:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["source: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["shopType: ",(0,r.jsx)(s.code,{children:"string"})]}),"\n",(0,r.jsxs)(s.li,{children:["shopId: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["toInventory: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["toSlot: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["itemName: ",(0,r.jsx)(s.code,{children:"string"})]}),"\n",(0,r.jsxs)(s.li,{children:["metadata: ",(0,r.jsx)(s.code,{children:"table"})]}),"\n",(0,r.jsxs)(s.li,{children:["count: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["price: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["totalPrice: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["currency?: ",(0,r.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Triggered when an item is about to be purchased and can return ",(0,r.jsx)(s.code,{children:"false"})," to prevent the transaction."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example:"})}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" hookId "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.ox_inventory:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"registerHook"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'buyItem'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"payload"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(json."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"encode"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(payload, { indent "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", sort_keys "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }))"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    print "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    itemFilter "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        water "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	  },"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "})]})}),"\n",(0,r.jsx)(s.p,{children:"Prevents players from purchasing items at General stores."}),"\n",(0,r.jsx)(s.h3,{id:"craftitem",children:"craftItem"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Payload:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["source: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["benchId: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["benchIndex: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["recipe: ",(0,r.jsx)(s.code,{children:"table"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["count: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["duration: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["ingredients: ",(0,r.jsx)(s.code,{children:"table<string, number>"})]}),"\n",(0,r.jsxs)(s.li,{children:["name: ",(0,r.jsx)(s.code,{children:"string"})]}),"\n",(0,r.jsxs)(s.li,{children:["slot: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["weight: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["toInventory: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["toSlot: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example:"})}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" hookId "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.ox_inventory:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"registerHook"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'craftItem'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"payload"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(json."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"encode"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(payload, { indent "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", sort_keys "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }))"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    print "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	itemFilter "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"		lockpick "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	},"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "})]})}),"\n",(0,r.jsx)(s.p,{children:"Prevent lockpicks from being crafted by players."}),"\n",(0,r.jsx)(s.h2,{id:"removehooks",children:"removeHooks"}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"exports.ox_inventory:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"removeHooks"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(id)"})]})})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["id?: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Removes a hook created by the invoking resource with the the specified id.",(0,r.jsx)(s.br,{}),"\n","If no id is specified then all hooks registered by the resource are removed."]})]})}n(5941),s.default=(0,l.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.ah)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(i,{...e})}):i(e)},pageOpts:{filePath:"pages/ox_inventory/Functions/Server/Hooks.mdx",route:"/ox_inventory/Functions/Server/Hooks",headings:[{depth:1,value:"Event Hooks",id:"event-hooks"},{depth:2,value:"registerHook",id:"registerhook"},{depth:3,value:"swapItems",id:"swapitems"},{depth:3,value:"openInventory",id:"openinventory"},{depth:3,value:"createItem",id:"createitem"},{depth:3,value:"buyItem",id:"buyitem"},{depth:3,value:"craftItem",id:"craftitem"},{depth:2,value:"removeHooks",id:"removehooks"}],title:"Event Hooks"},pageNextRoute:"/ox_inventory/Functions/Server/Hooks"})}},function(e){e.O(0,[6510,9774,2888,179],function(){return e(e.s=3480)}),_N_E=e.O()}]);