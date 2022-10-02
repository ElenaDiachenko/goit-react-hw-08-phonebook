"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[885],{5885:function(n,e,t){t.r(e),t.d(e,{default:function(){return wn}});var r,o,i,c,u,s,a,l,f,m,d,h,p,x,b,g,Z,v,j,w=t(2791),k=t(9434),y=t(6534),z=t(5861),P=t(4687),S=t.n(P),C=t(5705),N=t(7103),q=t(168),W=t(6444),A=W.ZP.label(r||(r=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: ",";\n  color: ",";\n  font-size: ",";\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[3]})),E=(0,W.ZP)(C.Bc)(o||(o=(0,q.Z)(["\n  color: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.fontSizes.m})),R=(0,W.ZP)(C.gN)(i||(i=(0,q.Z)(["\n  margin-top: ","px;\n  margin-bottom: ","px;\n  padding: ","px;\n  border-radius: ",";\n  border: ",";\n  outline: none;\n  color: ",";\n  font-size: ",";\n\n  &:focus {\n    border: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.sm}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.m}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)})),F=W.ZP.button(c||(c=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  cursor: pointer;\n  width: 150px;\n  height: 40px;\n  background-color: ",";\n  color: ",";\n  font-family: inherit;\n  font-weight: ",";\n  border: ",";\n  border-radius: ",";\n\n  &:hover,\n  :focus {\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 25%),\n      0px 4px 5px 0px rgb(0 0 0 / 18%), 0px 1px 10px 0px rgb(0 0 0 / 15%);\n  }\n\n  &:active {\n    background-color: ",";\n    color: ",";\n    border-radius: ",";\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontWeights.bold}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.radii.sm})),I=t(5562),M=function(n){return n.contacts.items},T=function(n){return n.contacts.isLoading},L=function(n){return n.contacts.error},B=function(n){var e=M(n),t=function(n){return n.filters.changeFilter}(n);return e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))},_=t(2299),D=t.n(_),G=t(184),J=N.Ry().shape({name:N.Z_().required("This field is Required").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name is not valid"),number:N.Z_().required("This field is Required").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number is not valid")}),K={name:"",number:""},O={position:"right-top",fontSize:"20px",width:"450px",borderRadius:"4px",closeButton:!0,info:{background:"#000000",color:"#ffffff",notiflixIconColor:"rgba(225,225,225,0.5)"}},V=function(){var n=(0,k.v9)(M),e=(0,k.I0)(),t=function(){var t=(0,z.Z)(S().mark((function t(r){return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.find((function(n){return n.name===r.name}))){t.next=3;break}return I.Notify.info("".concat(r.name," is already in contacts"),O),t.abrupt("return");case 3:return t.prev=3,t.next=6,e((0,y.uK)(r));case 6:I.Notify.info("Contact added successfully",O),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(3),I.Notify.info("Error adding contact",O),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(n){return t.apply(this,arguments)}}(),r=function(){var n=(0,z.Z)(S().mark((function n(e,r){var o,i;return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=r.resetForm,i=r.setSubmitting,n.next=3,t(e);case 3:i(!1),o();case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,G.jsx)(C.J9,{initialValues:K,validationSchema:J,onSubmit:r,children:function(n){var e=n.isSubmitting;return(0,G.jsxs)(C.l0,{children:[(0,G.jsxs)(A,{children:["Name",(0,G.jsx)(R,{type:"text",name:"name"}),(0,G.jsx)(E,{name:"name",component:"span"})]}),(0,G.jsxs)(A,{children:["Number",(0,G.jsx)(R,{type:"tel",name:"number"}),(0,G.jsx)(E,{name:"number",component:"span"})]}),(0,G.jsxs)(F,{type:"submit",disabled:e,children:[!e&&"Add contact",e&&(0,G.jsx)(D(),{color:"#ffffff",size:12})]})]})}})},$=t(4834),H=W.ZP.li(u||(u=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  padding: ","px;\n  color: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontWeights.bold})),Q=W.ZP.span(s||(s=(0,q.Z)(["\n  font-weight: ",";\n  color: ",";\n  margin-right: ","px;\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.space[3]})),U=W.ZP.span(a||(a=(0,q.Z)(["\n  font-weight: ",";\n  color: ",";\n"])),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.text})),X=W.ZP.button(l||(l=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: auto;\n  cursor: pointer;\n  width: 80px;\n  padding: ","px;\n  background-color: ",";\n  color: ",";\n  font-family: inherit;\n  font-size: ",";\n  font-weight: ",";\n  border: ",";\n  border-radius: ",";\n\n  &:hover,\n  :focus {\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 25%),\n      0px 4px 5px 0px rgb(0 0 0 / 18%), 0px 1px 10px 0px rgb(0 0 0 / 15%);\n  }\n\n  &:active {\n    background-color: ",";\n    color: ",";\n    border-radius: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.bold}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.radii.sm})),Y=W.ZP.div(f||(f=(0,q.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n"]))),nn=W.ZP.div(m||(m=(0,q.Z)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),en=t(4164),tn=t(8683),rn=W.ZP.label(d||(d=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: ",";\n  color: ",";\n  font-size: ",";\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[3]})),on=(0,W.ZP)(C.Bc)(h||(h=(0,q.Z)(["\n  color: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.fontSizes.m})),cn=(0,W.ZP)(C.gN)(p||(p=(0,q.Z)(["\n  margin-top: ","px;\n  margin-bottom: ","px;\n  padding: ","px;\n  border-radius: ",";\n  border: ",";\n  outline: none;\n  color: ",";\n  font-size: ",";\n\n  &:focus {\n    border: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.sm}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.m}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)})),un=W.ZP.button(x||(x=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  cursor: pointer;\n  width: 150px;\n  height: 40px;\n  background-color: ",";\n  color: ",";\n  font-family: inherit;\n  font-weight: ",";\n  border: ",";\n  border-radius: ",";\n\n  &:hover,\n  :focus {\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 25%),\n      0px 4px 5px 0px rgb(0 0 0 / 18%), 0px 1px 10px 0px rgb(0 0 0 / 15%);\n  }\n\n  &:active {\n    background-color: ",";\n    color: ",";\n    border-radius: ",";\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontWeights.bold}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.radii.sm})),sn=N.Ry().shape({name:N.Z_().required("This field is Required").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name is not valid"),number:N.Z_().required("This field is Required").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number is not valid")}),an=function(n){var e=n.onClose,t=n.id,r=(0,k.I0)(),o=(0,k.v9)(M).find((function(n){return n.id===t}));console.log(o.name);var i={name:o.name,number:o.number},c=function(){var n=(0,z.Z)(S().mark((function n(o,i){var c,u;return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=i.resetForm,u=i.setSubmitting,n.next=3,r((0,y.mP)((0,tn.Z)({id:t},o)));case 3:e(),u(!1),c();case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("h2",{children:"Edit contact"}),(0,G.jsx)(C.J9,{initialValues:i,validationSchema:sn,onSubmit:c,children:function(n){var e=n.isSubmitting;return(0,G.jsxs)(C.l0,{children:[(0,G.jsxs)(rn,{children:["Name",(0,G.jsx)(cn,{type:"text",name:"name"}),(0,G.jsx)(on,{name:"name",component:"span"})]}),(0,G.jsxs)(rn,{children:["Number",(0,G.jsx)(cn,{type:"tel",name:"number"}),(0,G.jsx)(on,{name:"number",component:"span"})]}),(0,G.jsxs)(un,{type:"submit",disabled:e,children:[!e&&"Add contact",e&&(0,G.jsx)(D(),{color:"#ffffff",size:12})]})]})}})]})},ln=document.getElementById("modal-root"),fn=function(n){var e=n.onClose,t=n.id;window.addEventListener("keydown",(function n(t){"Escape"===t.code&&(e(),window.removeEventListener("keydown",n))}));return(0,en.createPortal)((0,G.jsx)(Y,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,G.jsx)(nn,{children:(0,G.jsx)(an,{onClose:e,id:t})})}),ln)},mn=t(885),dn=function(n){var e=n.name,t=n.number,r=n.id,o=(0,k.I0)(),i=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(0,w.useState)(n),t=(0,mn.Z)(e,2),r=t[0],o=t[1];return{isModalOpen:r,openModal:function(){return o(!0)},closeModal:function(){return o(!1)}}}(),c=i.isModalOpen,u=i.closeModal,s=i.openModal;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(Q,{children:[e," :"]}),(0,G.jsx)(U,{children:t}),(0,G.jsx)(X,{onClick:function(){return o((0,y.GK)(r))},children:"Delete"}),(0,G.jsx)(X,{onClick:s,children:"Edit"}),c&&(0,G.jsx)(fn,{onClose:u,id:r})]})},hn=function(){var n=(0,k.v9)(B);return(0,G.jsx)($.x,{as:"ul",display:"flex",flexDirection:"column",gridGap:3,children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,G.jsx)(H,{children:(0,G.jsx)(dn,{id:e,name:t,number:r})},e)}))})},pn=W.ZP.label(b||(b=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: ",";\n  color: ",";\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.space[3]})),xn=W.ZP.input(g||(g=(0,q.Z)(["\n  margin-top: ","px;\n  padding: ","px;\n  border-radius: ",";\n  border: ",";\n  outline: none;\n  color: ",";\n  font-size: ",";\n\n  &:focus {\n    border: ",";\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.sm}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.m}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)})),bn=t(3165),gn=function(){var n=(0,k.I0)();return(0,G.jsx)($.x,{mb:3,children:(0,G.jsxs)(pn,{children:["Find contact by name",(0,G.jsx)(xn,{type:"text",onChange:function(e){return n((0,bn.T)(e.target.value))}})]})})},Zn=W.ZP.h1(Z||(Z=(0,q.Z)(["\n  color: ",";\n  margin-bottom: ","px;\n  font-size: ",";\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontSizes.l})),vn=W.ZP.h2(v||(v=(0,q.Z)(["\ncolor: ","; \nmargin-bottom:","px;\n}"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.space[4]})),jn=W.ZP.section(j||(j=(0,q.Z)(["\n  width: 480px;\n  margin: 0 auto;\n  padding: ","px;\n"])),(function(n){return n.theme.space[4]})),wn=function(){var n=(0,k.v9)(T),e=(0,k.v9)(L),t=(0,k.I0)();return(0,w.useEffect)((function(){t((0,y.yF)())}),[t]),(0,G.jsxs)(jn,{children:[(0,G.jsx)(Zn,{children:"Phonebook"}),(0,G.jsx)(V,{}),(0,G.jsx)(vn,{children:"Contacts"}),(0,G.jsx)(gn,{}),n&&!e&&(0,G.jsx)("b",{children:"Request in progress..."}),(0,G.jsx)(hn,{})]})}}}]);
//# sourceMappingURL=885.7f44345b.chunk.js.map