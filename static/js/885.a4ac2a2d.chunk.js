"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[885],{5885:function(n,e,t){t.r(e),t.d(e,{default:function(){return zn}});var r,o,i,c,u,a,s,l,f,m,d,h,p,x,b,g,Z,v,j,k,w=t(2791),y=t(9434),z=t(6534),P=t(5861),S=t(4687),C=t.n(S),N=t(5705),q=t(7103),E=t(168),W=t(6444),A=W.ZP.label(r||(r=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: ",";\n  color: ",";\n  font-size: ",";\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[3]})),R=(0,W.ZP)(N.Bc)(o||(o=(0,E.Z)(["\n  color: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.fontSizes.m})),F=(0,W.ZP)(N.gN)(i||(i=(0,E.Z)(["\n  margin-top: ","px;\n  margin-bottom: ","px;\n  padding: ","px;\n  border-radius: ",";\n  border: ",";\n  outline: none;\n  color: ",";\n  font-size: ",";\n\n  &:focus {\n    border: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.sm}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.m}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)})),I=W.ZP.button(c||(c=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  cursor: pointer;\n  width: 150px;\n  height: 40px;\n  background-color: ",";\n  color: ",";\n  font-family: inherit;\n  font-weight: ",";\n  border: ",";\n  border-radius: ",";\n\n  &:hover,\n  :focus {\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 25%),\n      0px 4px 5px 0px rgb(0 0 0 / 18%), 0px 1px 10px 0px rgb(0 0 0 / 15%);\n  }\n\n  &:active {\n    background-color: ",";\n    color: ",";\n    border-radius: ",";\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontWeights.bold}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.radii.sm})),M=t(5562),T=function(n){return n.contacts.items},L=function(n){return n.contacts.isLoading},B=function(n){return n.contacts.error},_=function(n){var e=T(n),t=function(n){return n.filters.changeFilter}(n);return e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))},D=t(2299),G=t.n(D),J=t(184),K=q.Ry().shape({name:q.Z_().required("This field is Required").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name is not valid"),number:q.Z_().required("This field is Required").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number is not valid")}),O={name:"",number:""},V={position:"right-top",fontSize:"20px",width:"450px",borderRadius:"4px",closeButton:!0,info:{background:"#000000",color:"#ffffff",notiflixIconColor:"rgba(225,225,225,0.5)"}},$=function(){var n=(0,y.v9)(T),e=(0,y.I0)(),t=function(){var t=(0,P.Z)(C().mark((function t(r){return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.find((function(n){return n.name===r.name}))){t.next=3;break}return M.Notify.info("".concat(r.name," is already in contacts"),V),t.abrupt("return");case 3:return t.prev=3,t.next=6,e((0,z.uK)(r));case 6:M.Notify.info("Contact added successfully",V),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(3),M.Notify.info("Error adding contact",V),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(n){return t.apply(this,arguments)}}(),r=function(){var n=(0,P.Z)(C().mark((function n(e,r){var o,i;return C().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=r.resetForm,i=r.setSubmitting,n.next=3,t(e);case 3:i(!1),o();case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,J.jsx)(N.J9,{initialValues:O,validationSchema:K,onSubmit:r,children:function(n){var e=n.isSubmitting;return(0,J.jsxs)(N.l0,{children:[(0,J.jsxs)(A,{children:["Name",(0,J.jsx)(F,{type:"text",name:"name"}),(0,J.jsx)(R,{name:"name",component:"span"})]}),(0,J.jsxs)(A,{children:["Number",(0,J.jsx)(F,{type:"tel",name:"number"}),(0,J.jsx)(R,{name:"number",component:"span"})]}),(0,J.jsxs)(I,{type:"submit",disabled:e,children:[!e&&"Add contact",e&&(0,J.jsx)(G(),{color:"#ffffff",size:12})]})]})}})},H=t(4834),Q=W.ZP.li(u||(u=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  padding: ","px;\n  color: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontWeights.bold})),U=W.ZP.span(a||(a=(0,E.Z)(["\n  font-weight: ",";\n  color: ",";\n  margin-right: ","px;\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.space[3]})),X=W.ZP.span(s||(s=(0,E.Z)(["\n  font-weight: ",";\n  color: ",";\n"])),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.text})),Y=W.ZP.button(l||(l=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: auto;\n  cursor: pointer;\n  width: 80px;\n  padding: ","px;\n  background-color: ",";\n  color: ",";\n  font-family: inherit;\n  font-size: ",";\n  font-weight: ",";\n  border: ",";\n  border-radius: ",";\n\n  &:hover,\n  :focus {\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 25%),\n      0px 4px 5px 0px rgb(0 0 0 / 18%), 0px 1px 10px 0px rgb(0 0 0 / 15%);\n  }\n\n  &:active {\n    background-color: ",";\n    color: ",";\n    border-radius: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.bold}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.radii.sm})),nn=t(2134),en=W.ZP.div(f||(f=(0,E.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100vw;\n  height: 100vh;\n  z-index: 0;\n"]))),tn=W.ZP.div(m||(m=(0,E.Z)(["\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 280px;\n  height: auto;\n  padding: 10px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n\n  @media screen and (min-width: 768px) {\n    width: 600px;\n    padding: 30px;\n  }\n  @media screen and (min-width: 1440px) {\n    padding: 50px;\n  }\n"]))),rn=W.ZP.button(d||(d=(0,E.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n\n  color: black;\n  font-family: inherit;\n  border: none;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    width: 40px;\n    height: 40px;\n  }\n"]))),on=t(4164),cn=document.getElementById("modal-root"),un=function(n){var e=n.onClose,t=n.children;(0,w.useEffect)((function(){var n=function(n){return"Escape"===n.key?e():null};return document.body.addEventListener("keydown",n),function(){document.body.removeEventListener("keydown",n)}}),[e]);return(0,on.createPortal)((0,J.jsx)(en,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,J.jsxs)(tn,{children:[(0,J.jsx)(rn,{type:"button",onClick:e,children:(0,J.jsx)(nn.oHP,{})}),t]})}),cn)},an=t(8683),sn=W.ZP.label(h||(h=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: ",";\n  color: ",";\n  font-size: ",";\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[3]})),ln=(0,W.ZP)(N.Bc)(p||(p=(0,E.Z)(["\n  color: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.fontSizes.m})),fn=(0,W.ZP)(N.gN)(x||(x=(0,E.Z)(["\n  margin-top: ","px;\n  margin-bottom: ","px;\n  padding: ","px;\n  border-radius: ",";\n  border: ",";\n  outline: none;\n  color: ",";\n  font-size: ",";\n\n  &:focus {\n    border: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.sm}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.m}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)})),mn=W.ZP.button(b||(b=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  cursor: pointer;\n  width: 150px;\n  height: 40px;\n  background-color: ",";\n  color: ",";\n  font-family: inherit;\n  font-weight: ",";\n  border: ",";\n  border-radius: ",";\n\n  &:hover,\n  :focus {\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 25%),\n      0px 4px 5px 0px rgb(0 0 0 / 18%), 0px 1px 10px 0px rgb(0 0 0 / 15%);\n  }\n\n  &:active {\n    background-color: ",";\n    color: ",";\n    border-radius: ",";\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontWeights.bold}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.radii.sm})),dn=q.Ry().shape({name:q.Z_().required("This field is Required").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name is not valid"),number:q.Z_().required("This field is Required").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number is not valid")}),hn=function(n){var e=n.onClose,t=n.id,r=(0,y.I0)(),o=(0,y.v9)(T).find((function(n){return n.id===t}));console.log(o.name);var i={name:o.name,number:o.number},c=function(){var n=(0,P.Z)(C().mark((function n(o,i){var c,u;return C().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=i.resetForm,u=i.setSubmitting,n.next=3,r((0,z.mP)((0,an.Z)({id:t},o)));case 3:e(),u(!1),c();case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("h2",{children:"Edit contact"}),(0,J.jsx)(N.J9,{initialValues:i,validationSchema:dn,onSubmit:c,children:function(n){var e=n.isSubmitting;return(0,J.jsxs)(N.l0,{children:[(0,J.jsxs)(sn,{children:["Name",(0,J.jsx)(fn,{type:"text",name:"name"}),(0,J.jsx)(ln,{name:"name",component:"span"})]}),(0,J.jsxs)(sn,{children:["Number",(0,J.jsx)(fn,{type:"tel",name:"number"}),(0,J.jsx)(ln,{name:"number",component:"span"})]}),(0,J.jsxs)(mn,{type:"submit",disabled:e,children:[!e&&"Add contact",e&&(0,J.jsx)(G(),{color:"#ffffff",size:12})]})]})}})]})},pn=t(885),xn=function(n){var e=n.name,t=n.number,r=n.id,o=(0,y.I0)(),i=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(0,w.useState)(n),t=(0,pn.Z)(e,2),r=t[0],o=t[1];return{isModalOpen:r,openModal:function(){return o(!0)},closeModal:function(){return o(!1)}}}(),c=i.isModalOpen,u=i.closeModal,a=i.openModal;return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(U,{children:[e," :"]}),(0,J.jsx)(X,{children:t}),(0,J.jsx)(Y,{onClick:function(){return o((0,z.GK)(r))},children:"Delete"}),(0,J.jsx)(Y,{onClick:a,children:"Edit"}),c&&(0,J.jsx)(un,{onClose:u,children:(0,J.jsx)(hn,{onClose:u,id:r})})]})},bn=function(){var n=(0,y.v9)(_);return(0,J.jsx)(H.x,{as:"ul",display:"flex",flexDirection:"column",gridGap:3,children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,J.jsx)(Q,{children:(0,J.jsx)(xn,{id:e,name:t,number:r})},e)}))})},gn=W.ZP.label(g||(g=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: ",";\n  color: ",";\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.space[3]})),Zn=W.ZP.input(Z||(Z=(0,E.Z)(["\n  margin-top: ","px;\n  padding: ","px;\n  border-radius: ",";\n  border: ",";\n  outline: none;\n  color: ",";\n  font-size: ",";\n\n  &:focus {\n    border: ",";\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.sm}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.m}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)})),vn=t(3165),jn=function(){var n=(0,y.I0)();return(0,J.jsx)(H.x,{mb:3,children:(0,J.jsxs)(gn,{children:["Find contact by name",(0,J.jsx)(Zn,{type:"text",onChange:function(e){return n((0,vn.T)(e.target.value))}})]})})},kn=W.ZP.h1(v||(v=(0,E.Z)(["\n  color: ",";\n  margin-bottom: ","px;\n  font-size: ",";\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontSizes.l})),wn=W.ZP.h2(j||(j=(0,E.Z)(["\ncolor: ","; \nmargin-bottom:","px;\n}"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.space[4]})),yn=W.ZP.section(k||(k=(0,E.Z)(["\n  width: 480px;\n  margin: 0 auto;\n  padding: ","px;\n"])),(function(n){return n.theme.space[4]})),zn=function(){var n=(0,y.v9)(L),e=(0,y.v9)(B),t=(0,y.I0)();return(0,w.useEffect)((function(){t((0,z.yF)())}),[t]),(0,J.jsxs)(yn,{children:[(0,J.jsx)(kn,{children:"Phonebook"}),(0,J.jsx)($,{}),(0,J.jsx)(wn,{children:"Contacts"}),(0,J.jsx)(jn,{}),n&&!e&&(0,J.jsx)("b",{children:"Request in progress..."}),(0,J.jsx)(bn,{})]})}}}]);
//# sourceMappingURL=885.a4ac2a2d.chunk.js.map