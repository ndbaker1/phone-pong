(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6663)}])},6663:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return F}});var t=r(7568),o=r(2670),a=r(603),s=r(4051),i=r.n(s),c=r(5893),u=r(7294),l=r(9604),d=r(8254),f=r(7707),h=r(6772),p=r(7564),v=r(7841),w=r(6137),m=r(4078),y=r(966),g=r(9814),x=r(9834),b=r(5477),S=r(8393),k=r(9513),j=r(9477),E=r(7011),Z=r(1438),C=r(8029),L=r(6567),O=r(1799);function A(e){return N.apply(this,arguments)}function N(){return(N=(0,t.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([navigator.permissions.query({name:"accelerometer"}),navigator.permissions.query({name:"magnetometer"}),navigator.permissions.query({name:"gyroscope"})]);case 2:if(e.sent.every((function(e){return"granted"===e.state}))){e.next=4;break}throw new Error("failed to get permission for orientation sensors");case 4:return(r=new AbsoluteOrientationSensor({frequency:60,referenceFrame:"device"})).addEventListener("reading",(function(){try{n({type:"Rotation",data:r.quaternion})}catch(e){console.error(e),r.stop()}})),r.addEventListener("error",console.log),r.start(),e.abrupt("return",(function(){return r.stop()}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return q.apply(this,arguments)}function q(){return(q=(0,t.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([navigator.permissions.query({name:"accelerometer"}),navigator.permissions.query({name:"magnetometer"}),navigator.permissions.query({name:"gyroscope"})]);case 2:if(e.sent.every((function(e){return"granted"===e.state}))){e.next=4;break}throw new Error("failed to get accelerometer");case 4:return(r=new LinearAccelerationSensor({frequency:60})).addEventListener("reading",(function(){try{n({type:"Acceleration",data:[r.x,r.y,r.z]})}catch(e){console.error(e),r.stop()}})),r.addEventListener("error",console.log),r.start(),e.abrupt("return",(function(){return r.stop()}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _,z,M,D,H=function(){function e(n,r,t){var o=r.host,a=r.callbacks;(0,Z.Z)(this,e),this.id=n,this.ws=function(e){var n=e.path,r=e.host,t=e.closeCallback,o=e.errorCallback,a=e.openCallback,s=location.protocol.includes("https")?"wss":"ws",i="".concat(s,"://").concat(r).concat(n);if(!i.startsWith("ws"))throw Error("bad url");var c=new WebSocket(i);return c.addEventListener("close",(function(e){return t?t(e):console.log(JSON.stringify(e))})),c.addEventListener("error",(function(e){return o?o(e):console.error(JSON.stringify(e))})),c.addEventListener("open",(function(e){return a?a(e):console.log(JSON.stringify(e))})),c}((0,O.Z)({host:o,path:"/".concat(t,"/").concat(n)},a))}return e.prototype.initSensors=function(){var e=this;return(0,t.Z)(i().mark((function n(){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=function(n){if(e.ws.readyState===e.ws.CLOSING||e.ws.readyState===e.ws.CLOSED)throw Error("connection closed");e.ws.readyState===e.ws.OPEN&&e.ws.send(JSON.stringify(n))},n.next=3,Promise.all([P(r),A(r)]);case 3:t=n.sent,e.ws.addEventListener("error",(function(){return t.forEach((function(e){return e()}))})),e.ws.addEventListener("close",(function(){return t.forEach((function(e){return e()}))}));case 6:case"end":return n.stop()}}),n)})))()},e.asPlayerData=function(e){if("string"===typeof e)return JSON.parse(e);throw Error("invalid data")},e}(),J=function(e){(0,C.Z)(r,e);var n=(0,L.Z)(r);function r(e,t){return(0,Z.Z)(this,r),n.call(this,e,t,"racket")}return r}(H),R=function(e){(0,C.Z)(r,e);var n=(0,L.Z)(r);function r(e,t){return(0,Z.Z)(this,r),n.call(this,e,t,"head")}return r.asPlayerData=function(e){if("string"===typeof e)return JSON.parse(e);throw Error("invalid data")},r}(H),W=function(e){(0,C.Z)(r,e);var n=(0,L.Z)(r);function r(e,t){return(0,Z.Z)(this,r),n.call(this,e,t,"observer")}return r}(H),T=r(3454),V=null!==(M=null===T||void 0===T||null===(_=T.env)||void 0===_?void 0:"phone-pong-production.up.railway.app")&&void 0!==M?M:"localhost:42069",B=null!==(D=null===T||void 0===T||null===(z=T.env)||void 0===z?void 0:"/MVR")&&void 0!==D?D:"",F=function(){var e=(0,a.Z)(u.useState(!1),2),n=e[0],r=e[1],t=(0,a.Z)(u.useState(!1),2),o=t[0],s=t[1],i=(0,a.Z)(u.useState(""),2),j=i[0],E=i[1];u.useEffect((function(){window.debug=function(){return r(!0)}}),[]);var Z=(0,a.Z)(u.useState(!0),2),C=Z[0],L=Z[1],O=(0,a.Z)(u.useState(),2),A=O[0],N=O[1],P=(0,a.Z)(u.useState(!1),2),q=P[0],_=P[1],z=(0,a.Z)(u.useState(),2),M=z[0],D=z[1],H=(0,a.Z)(u.useState(!1),2),T=H[0],B=H[1],F=function(e){var n=(0,a.Z)(u.useState(""),2),r=n[0],t=n[1],o=(r||e).replaceAll(/.*:\/\/|\/$/gi,"");return{host:r,setHost:t,webSocketHost:o}}(V),G=F.host,I=F.setHost,X=F.webSocketHost,U=function(e){L(!1),B(!0);var n=function(){var n=new R(e-1,{host:X,callbacks:{}});n.initSensors(),function(e,n){K.apply(this,arguments)}({code:j},new W(e,{host:X,callbacks:{}})),D(n),B(!1)};M&&M.ws.readyState!==WebSocket.CLOSED?(M.ws.addEventListener("close",n),M.ws.close()):n()},$=function(e){L(!1),_(!0);var n=function(){var n=new J(e,{host:X,callbacks:{}});n.initSensors(),N(n),_(!1)};A&&A.ws.readyState!==WebSocket.CLOSED?(A.ws.addEventListener("close",n),A.ws.close()):n()};return u.useEffect((function(){var e=new URLSearchParams(location.search),n=e.get("client"),r=parseInt(e.get("id")||"");switch(n){case"racket":$(r);break;case"observer":U(r)}}),[]),(0,c.jsxs)("div",{id:"app",children:[(0,c.jsx)(h.V,{opened:C,size:"min(90vw, 30rem)",children:(0,c.jsxs)(p.K,{children:[n?(0,c.jsx)(v.z,{onClick:function(){return s(!0)},children:"Show Editor"}):(0,c.jsx)(c.Fragment,{}),(0,c.jsxs)(w.Z,{grow:!0,children:[(0,c.jsxs)(m.v,{shadow:"md",children:[(0,c.jsx)(m.v.Target,{children:(0,c.jsx)(v.z,{children:T?(0,c.jsx)(y.a,{color:"white",size:"sm"}):M?"View ".concat(M.id+1):"Connect View"})}),(0,c.jsx)(m.v.Dropdown,{children:(0,c.jsx)(g.M,{cols:3,children:Array(4).fill(0).map((function(e,n){return 3*n+2})).map((function(e){return(0,c.jsx)(w.Z,{grow:!0,children:(0,c.jsx)(x.A,{size:"xl",onClick:function(){return U(e)},children:e})},e)}))})})]}),(0,c.jsxs)(m.v,{shadow:"md",children:[(0,c.jsx)(m.v.Target,{children:(0,c.jsx)(v.z,{children:q?(0,c.jsx)(y.a,{color:"white",size:"sm"}):A?"Racket ".concat(A.id):"Connect Racket"})}),(0,c.jsx)(m.v.Dropdown,{children:(0,c.jsx)(g.M,{cols:3,children:Array(4).fill(0).map((function(e,n){return 3*n})).map((function(e){return(0,c.jsx)(w.Z,{grow:!0,children:(0,c.jsx)(x.A,{size:"xl",onClick:function(){return $(e)},children:e})},e)}))})})]})]}),(0,c.jsx)(w.Z,{grow:!0,children:(0,c.jsx)(b.o,{icon:(0,c.jsx)(d.Z,{}),rightSection:(0,c.jsx)(S.u,{label:"paste",children:(0,c.jsx)(x.A,{onClick:function(){return navigator.clipboard.readText().then(I)},children:(0,c.jsx)(f.Z,{})})}),placeholder:V,onChange:function(e){return I(e.target.value)},width:"100%",value:G})})]})}),(0,c.jsx)(k.d,{position:"right",size:"60vw",opened:o,onClose:function(){return s(!1)},children:(0,c.jsx)(l.ZP,{value:j,onChange:function(e){return E(null!==e&&void 0!==e?e:"")},language:"javascript",theme:"vs-dark"})}),(0,c.jsx)("main",{id:"screen"})]})};function G(){return I.apply(this,arguments)}function I(){return(I=(0,t.Z)(i().mark((function e(){var n,r,t,s,c,u,l,d,f,h,p,v,w,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new E.L,r=new j.RSm,e.next=4,Promise.all([n.loadAsync("".concat(B,"/assets/models.obj")),n.loadAsync("".concat(B,"/assets/table.obj"))]);case 4:for(t=e.sent,s=!0,c=!1,u=void 0,e.prev=6,l=t[Symbol.iterator]();!(s=(d=l.next()).done);s=!0)d.value.traverse((function(e){return(0,o.Z)(e,j.Kj0)&&(e.material=r)}));e.next=14;break;case 10:e.prev=10,e.t0=e.catch(6),c=!0,u=e.t0;case 14:e.prev=14,e.prev=15,s||null==l.return||l.return();case 17:if(e.prev=17,!c){e.next=20;break}throw u;case 20:return e.finish(17);case 21:return e.finish(14);case 22:return f=(0,a.Z)(t,2),h=f[0],p=f[1],v=h.getObjectByName("ball"),w=h.getObjectByName("racket"),m=h.getObjectByName("head"),e.abrupt("return",{ballMesh:v,racketMesh:w,headMesh:m,tableGroup:p});case 27:case"end":return e.stop()}}),e,null,[[6,10,14,22],[15,,17,21]])})))).apply(this,arguments)}function K(){return K=(0,t.Z)(i().mark((function e(n,r){var t,o,s,c,u,l,d,f,h,p,v,w,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m=function(e){h.render(t,o)},t=new j.xsS,(o=new j.cPb(80,window.innerWidth/window.innerHeight,.1,1e3)).position.set(2,0,0),o.lookAt(0,0,0),e.next=7,G();case 7:if(s=e.sent,s.ballMesh,c=s.tableGroup,u=s.racketMesh,l=s.headMesh,t.add(c),d=new Map,f=function(e){if(e%3==0)return u.clone();if(e%3==1)return l.clone();throw new Error("dont recieve events from observers")},(h=new j.CP7).setSize(window.innerWidth,window.innerHeight),h.setAnimationLoop(m),!(p=document.querySelector('main[id="screen"]'))){e.next=23;break}p.replaceChildren(h.domElement),e.next=24;break;case 23:throw Error("failed to replace screen with renderer.");case 24:v=n.code?new Function("id","playerData","object",n.code):function(e,n,t){e==r.id-1?(o.quaternion.fromArray(n.rotation),o.position.fromArray(n.position)):t?(t.quaternion.fromArray(n.rotation),t.position.fromArray(n.position)):console.error("no mesh provided for body that needs to be drawn with id [".concat(e,"]"))},w=function(e){Object.entries(e).forEach((function(e){var n=(0,a.Z)(e,2),o=n[0],s=n[1],i=parseInt(o);if(!d.has(i)&&r.id!=i){var c=f(i);d.set(i,c),t.add(c),console.log("created mesh for id",i)}v(i,s,d.get(i))}))},r.ws.addEventListener("message",(function(e){var n=e.data;return w(R.asPlayerData(n))}));case 28:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}}},function(e){e.O(0,[737,164,774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);