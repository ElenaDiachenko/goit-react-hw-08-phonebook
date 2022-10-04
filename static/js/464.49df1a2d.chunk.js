"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[464],{7608:function(n,e,t){t.d(e,{x:function(){return i}});var r=t(6444),o=t(407),i=(0,r.ZP)("div")(o.$_,o.Dh,o.bK,o.GQ,o.eC,o.Oq,o.Cg,o.FK)},3623:function(n,e,t){t.d(e,{W:function(){return u}});t(2791);var r,o=t(168),i=t(6444).ZP.div(r||(r=(0,o.Z)(["\n  max-width: 800px;\n  margin: 0 auto;\n"]))),c=t(184),u=function(n){var e=n.children;return(0,c.jsx)(i,{children:e})}},836:function(n,e,t){t.d(e,{Dx:function(){return f},II:function(){return h},__:function(){return l},v0:function(){return d},zx:function(){return p}});var r,o,i,c,u,a=t(168),s=t(6444),m=t(5705),f=s.ZP.h2(r||(r=(0,a.Z)(["\n  text-aligh: center;\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  padding-bottom: ","px;\n  margin-bottom: ","px;\n  border-bottom: ",";\n\n  @media screen and (max-width: 768px) {\n    font-size: ",";\n    padding-bottom: ","px;\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.secondary)}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]})),l=s.ZP.label(o||(o=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: ",";\n  color: ",";\n  font-size: ",";\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[3]})),d=(0,s.ZP)(m.Bc)(i||(i=(0,a.Z)(["\n  color: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.fontSizes.m})),h=(0,s.ZP)(m.gN)(c||(c=(0,a.Z)(["\n  margin-top: ","px;\n  margin-bottom: ","px;\n  padding: ","px;\n  border-radius: ",";\n  border: ",";\n  outline: none;\n  color: ",";\n  font-size: ",";\n\n  &:focus {\n    border: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.sm}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontSizes.m}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.accent)})),p=s.ZP.button(u||(u=(0,a.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  cursor: pointer;\n  width: 22%;\n  height: 44px;\n  background-color: ",";\n  color: ",";\n  font-family: inherit;\n  font-size: ",";\n  font-weight: ",";\n  border: ",";\n  border-radius: ",";\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  margin-bottom: ","px;\n  border-bottom: ",";\n\n  &:hover,\n  :focus {\n    transform: scale(1.02);\n    cursor: zoom-in;\n  }\n\n  &:active {\n    background-color: ",";\n    border: ",";\n  }\n\n  @media screen and (max-width: 768px) {\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.bold}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.accent)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.space[4]}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.secondary)}),(function(n){return n.theme.colors.primary}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.primary)}),(function(n){return n.theme.space[3]}))},4464:function(n,e,t){t.r(e),t.d(e,{default:function(){return jn}});var r,o,i,c,u,a,s,m,f,l,d,h,p,x,b,g,v=t(2791),Z=t(9434),j=t(6534),y=t(5861),w=t(4687),z=t.n(w),k=t(5705),P=t(7103),S=t(836),C=t(5562),I=function(n){return n.contacts.items},N=function(n){return n.contacts.isLoading},W=function(n){return n.contacts.error},_=function(n){var e=I(n),t=function(n){return n.filters.changeFilter}(n);return e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))},A=t(2299),q=t.n(A),E=t(184),F=P.Ry().shape({name:P.Z_().required("This field is Required").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name is not valid"),number:P.Z_().required("This field is Required").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number is not valid")}),M={name:"",number:""},R={position:"right-top",fontSize:"20px",width:"450px",borderRadius:"4px",closeButton:!0,info:{background:"#000000",color:"#ffffff",notiflixIconColor:"rgba(225,225,225,0.5)"}},T=function(){var n=(0,Z.v9)(I),e=(0,Z.I0)(),t=function(){var t=(0,y.Z)(z().mark((function t(r){return z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.find((function(n){return n.name===r.name}))){t.next=3;break}return C.Notify.info("".concat(r.name," is already in contacts"),R),t.abrupt("return");case 3:return t.prev=3,t.next=6,e((0,j.uK)(r));case 6:C.Notify.info("Contact added successfully",R),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(3),C.Notify.info("Error adding contact",R),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(n){return t.apply(this,arguments)}}(),r=function(){var n=(0,y.Z)(z().mark((function n(e,r){var o,i;return z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=r.resetForm,i=r.setSubmitting,n.next=3,t(e);case 3:i(!1),o();case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(S.Dx,{children:"Add new contact"}),(0,E.jsx)(k.J9,{initialValues:M,validationSchema:F,onSubmit:r,children:function(n){var e=n.isSubmitting;return(0,E.jsxs)(k.l0,{children:[(0,E.jsxs)(S.__,{children:["Name",(0,E.jsx)(S.II,{type:"text",name:"name",placeholder:"Name..."}),(0,E.jsx)(S.v0,{name:"name",component:"span"})]}),(0,E.jsxs)(S.__,{children:["Number",(0,E.jsx)(S.II,{type:"tel",name:"number",placeholder:"Phone numer"}),(0,E.jsx)(S.v0,{name:"number",component:"span"})]}),(0,E.jsxs)(S.zx,{type:"submit",disabled:e,children:[!e&&"Add contact",e&&(0,E.jsx)(q(),{color:"#ffffff",size:12})]})]})}})]})},D=t(3623),L=t(7608),B=t(168),K=t(6444),G=K.ZP.li(r||(r=(0,B.Z)(["\n  padding: ","px;\n  color: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontWeights.bold})),O=t(6355),$=t(7425),J=K.ZP.div(o||(o=(0,B.Z)(["\n  display: flex;\n  gap: ","px;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontSizes.m})),V=K.ZP.div(i||(i=(0,B.Z)(["\n  display: flex;\n  gap: ","px; ;\n"])),(function(n){return n.theme.space[4]})),H=K.ZP.p(c||(c=(0,B.Z)(["\n  font-weight: ",";\n  color: ",";\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.black})),Q=K.ZP.p(u||(u=(0,B.Z)(["\n  font-weight: ",";\n  color: ",";\n"])),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.text})),U=t(8820),X=K.ZP.div(a||(a=(0,B.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100vw;\n  height: 100vh;\n  z-index: 0;\n"]))),Y=K.ZP.div(s||(s=(0,B.Z)(["\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 280px;\n  height: auto;\n  padding: 10px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n\n  @media screen and (min-width: 768px) {\n    width: 600px;\n    padding: 30px;\n  }\n  @media screen and (min-width: 1440px) {\n    padding: 50px;\n  }\n"]))),nn=K.ZP.button(m||(m=(0,B.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n\n  color: black;\n  font-family: inherit;\n  border: none;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    width: 40px;\n    height: 40px;\n  }\n"]))),en=t(4164),tn=document.getElementById("modal-root"),rn=function(n){var e=n.onClose,t=n.children;(0,v.useEffect)((function(){var n=function(n){return"Escape"===n.key?e():null};return document.body.addEventListener("keydown",n),function(){document.body.removeEventListener("keydown",n)}}),[e]);return(0,en.createPortal)((0,E.jsx)(X,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,E.jsxs)(Y,{children:[(0,E.jsx)(nn,{type:"button",onClick:e,children:(0,E.jsx)(U.oHP,{})}),t]})}),tn)},on=t(8683),cn=K.ZP.label(f||(f=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: ",";\n  color: ",";\n  font-size: ",";\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[3]})),un=(0,K.ZP)(k.Bc)(l||(l=(0,B.Z)(["\n  color: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.fontSizes.m})),an=(0,K.ZP)(k.gN)(d||(d=(0,B.Z)(["\n  margin-top: ","px;\n  margin-bottom: ","px;\n  padding: ","px;\n  border-radius: ",";\n  border: ",";\n  outline: none;\n  color: ",";\n  font-size: ",";\n\n  &:focus {\n    border: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.sm}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.m}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)})),sn=K.ZP.button(h||(h=(0,B.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  cursor: pointer;\n  width: 150px;\n  height: 40px;\n  background-color: ",";\n  color: ",";\n  font-family: inherit;\n  font-weight: ",";\n  border: ",";\n  border-radius: ",";\n\n  &:hover,\n  :focus {\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 25%),\n      0px 4px 5px 0px rgb(0 0 0 / 18%), 0px 1px 10px 0px rgb(0 0 0 / 15%);\n  }\n\n  &:active {\n    background-color: ",";\n    color: ",";\n    border-radius: ",";\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontWeights.bold}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.radii.sm})),mn=P.Ry().shape({name:P.Z_().required("This field is Required").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name is not valid"),number:P.Z_().required("This field is Required").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number is not valid")}),fn=function(n){var e=n.onClose,t=n.id,r=(0,Z.I0)(),o=(0,Z.v9)(I).find((function(n){return n.id===t}));console.log(o.name);var i={name:o.name,number:o.number},c=function(){var n=(0,y.Z)(z().mark((function n(o,i){var c,u;return z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=i.resetForm,u=i.setSubmitting,n.next=3,r((0,j.mP)((0,on.Z)({id:t},o)));case 3:e(),u(!1),c();case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("h2",{children:"Edit contact"}),(0,E.jsx)(k.J9,{initialValues:i,validationSchema:mn,onSubmit:c,children:function(n){var e=n.isSubmitting;return(0,E.jsxs)(k.l0,{children:[(0,E.jsxs)(cn,{children:["Name",(0,E.jsx)(an,{type:"text",name:"name"}),(0,E.jsx)(un,{name:"name",component:"span"})]}),(0,E.jsxs)(cn,{children:["Number",(0,E.jsx)(an,{type:"tel",name:"number"}),(0,E.jsx)(un,{name:"number",component:"span"})]}),(0,E.jsxs)(sn,{type:"submit",disabled:e,children:[!e&&"Add contact",e&&(0,E.jsx)(q(),{color:"#ffffff",size:12})]})]})}})]})},ln=t(885),dn=t(3535),hn=function(n){var e=n.name,t=n.number,r=n.id,o=(0,Z.I0)(),i=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(0,v.useState)(n),t=(0,ln.Z)(e,2),r=t[0],o=t[1];return{isModalOpen:r,openModal:function(){return o(!0)},closeModal:function(){return o(!1)}}}(),c=i.isModalOpen,u=i.closeModal,a=i.openModal;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(L.x,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,E.jsxs)(J,{children:[(0,E.jsxs)(H,{children:[e," :"]}),(0,E.jsx)(Q,{children:t})]}),(0,E.jsxs)(V,{children:[(0,E.jsx)(dn.z,{onClick:function(){return o((0,j.GK)(r))},"aria-label":"Delete ".concat(e),children:(0,E.jsx)(O.AMf,{})}),(0,E.jsx)(dn.z,{onClick:function(){return a()},"aria-label":"Edit ".concat(e),children:(0,E.jsx)($.enh,{})})]})]}),c&&(0,E.jsx)(rn,{onClose:u,children:(0,E.jsx)(fn,{onClose:u,id:r})})]})},pn=function(){var n=(0,Z.v9)(_);return(0,E.jsx)(L.x,{as:"ul",display:"flex",flexDirection:"column",gridGap:3,children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,E.jsx)(G,{children:(0,E.jsx)(hn,{id:e,name:t,number:r})},e)}))})},xn=K.ZP.label(p||(p=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: ",";\n  color: ",";\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.space[3]})),bn=K.ZP.input(x||(x=(0,B.Z)(["\n  margin-top: ","px;\n  padding: ","px;\n  border-radius: ",";\n  border: ",";\n  outline: none;\n  color: ",";\n  font-size: ",";\n\n  &:focus {\n    border: ",";\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.sm}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.m}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.black)})),gn=t(3165),vn=function(){var n=(0,Z.I0)();return(0,E.jsx)(L.x,{mb:3,children:(0,E.jsxs)(xn,{children:["Find contact by name",(0,E.jsx)(bn,{type:"text",onChange:function(e){return n((0,gn.T)(e.target.value))}})]})})},Zn=(K.ZP.h1(b||(b=(0,B.Z)(["\n  color: ",";\n  margin-bottom: ","px;\n  font-size: ",";\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontSizes.l})),K.ZP.h2(g||(g=(0,B.Z)(["\ncolor: ","; \nmargin-bottom:","px;\n}"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.space[4]}))),jn=function(){var n=(0,Z.v9)(N),e=(0,Z.v9)(W),t=(0,Z.I0)();return(0,v.useEffect)((function(){t((0,j.yF)())}),[t]),(0,E.jsx)("main",{children:(0,E.jsxs)(D.W,{children:[(0,E.jsx)(T,{}),(0,E.jsx)(Zn,{children:"Contacts"}),(0,E.jsx)(vn,{}),n&&!e&&(0,E.jsx)(q(),{style:{margin:"0 auto"},color:"#000000",size:32}),(0,E.jsx)(pn,{})]})})}}}]);
//# sourceMappingURL=464.49df1a2d.chunk.js.map