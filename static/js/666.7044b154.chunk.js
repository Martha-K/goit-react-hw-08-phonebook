"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[666],{8666:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,i,o,c,u,s,l=t(2791),d=t(9434),p=t(4270),f=t(168),m=t(6444),x=m.ZP.li(r||(r=(0,f.Z)(["\n  width: 265px;\n  padding: 5px;\n  display: flex;\n  justify-content: space-between;\n"]))),v=m.ZP.button(a||(a=(0,f.Z)(["\nmargin-left: 10px;\n"]))),h=t(184),g=function(n){var e=n.el,t=n.id,r=n.onClick;return(0,h.jsxs)(x,{children:[e.name,": ",e.number,(0,h.jsx)(v,{name:e.name,onClick:r,id:e.id,children:"Delete"})]},t)},b=t(1975),j=function(){var n=(0,d.I0)(),e=(0,d.v9)((function(n){return n.contacts.contacts})),t=(0,d.v9)((function(n){return n.contacts.filter.value}));(0,l.useEffect)((function(){n((0,b.yF)())}),[n]);var r=function(){var n=null===t||void 0===t?void 0:t.toLowerCase();return t?e.filter((function(e){return e.name.toLowerCase().includes(n)})):e}();return(0,h.jsx)("ol",{children:null===r||void 0===r?void 0:r.map((function(e){return(0,h.jsx)(g,{onClick:function(){return function(e){n((0,b.GK)(e.id))}(e)},el:e},e.id)}))})},y=t(7762),Z=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",t=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&t[n];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e},w=m.ZP.form(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 360px;\nborder: 2px solid grey;\npadding: 20px 0;\nborder-radius: 20px;\nalign-items: center;\n"]))),C=m.ZP.label(o||(o=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 30px;\n  margin-bottom: 10px;\n  width: 250px;\n  "]))),k=m.ZP.button(c||(c=(0,f.Z)(["\nbackground-color: aqua;\nborder-radius: 20px;\nwidth: 100px;\n"]))),P=function(){var n=(0,d.I0)(),e=(0,d.v9)((function(n){return n.contacts.contacts}));return(0,h.jsxs)(w,{onSubmit:function(t){t.preventDefault();var r,a=(0,y.Z)(e);try{for(a.s();!(r=a.n()).done;){var i=r.value;if(i.name===t.currentTarget.elements.name.value)return t.currentTarget.reset(),alert("".concat(i.name," is already in contacts."))}}catch(o){a.e(o)}finally{a.f()}n((0,b.uK)({name:t.currentTarget.elements.name.value,number:t.currentTarget.elements.number.value,id:Z()})),t.currentTarget.reset()},children:[(0,h.jsxs)(C,{children:["Name",(0,h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)(C,{children:["Number",(0,h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)(k,{type:"submit",children:"Add contact"})]})},A=t(9439),q=m.ZP.label(u||(u=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),z=m.ZP.input(s||(s=(0,f.Z)(["\n  width: 220px;\n  margin-top: 10px;\n"]))),F=t(1771),T=function(){var n=(0,d.I0)(),e=(0,l.useState)(""),t=(0,A.Z)(e,2),r=t[0],a=t[1];return(0,h.jsxs)(q,{children:["Find contacts by name",(0,h.jsx)(z,{type:"text",value:r,onChange:function(e){a(e.target.value),n((0,F.K)({value:e.target.value}))}})]})};function _(){var n=(0,d.I0)(),e=(0,d.v9)((function(n){var e;return null===n||void 0===n||null===(e=n.contacts)||void 0===e?void 0:e.isLoading}));return(0,l.useEffect)((function(){n((0,b.yF)())}),[n]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p.q,{children:(0,h.jsx)("title",{children:"Your contacts"})}),(0,h.jsx)(P,{}),(0,h.jsx)("div",{children:e&&"Request in progress..."}),(0,h.jsx)(T,{}),(0,h.jsx)(j,{})]})}}}]);
//# sourceMappingURL=666.7044b154.chunk.js.map