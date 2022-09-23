"use strict";(self.webpackChunkssb=self.webpackChunkssb||[]).push([[743],{2743:function(e,t,n){n.r(t),n.d(t,{default:function(){return se}});var r=n(4165),a=n(5861),c=n(9439),s=n(4519),o=n(1820),l=n(7771),i=o.ZP;i.Header=o.h4,i.Footer=o.$_,i.Content=o.VY,i.Sider=l.Z;var u=i,f=n(5293),d=n(202),m=n(7462),p=n(4942),h=n(1002),v=n(3270),g=n.n(v),x=n(7228),y=n(742),Z=n(8773),b=n(6592),C=n(7671),j=s.createContext("default"),E=function(e){var t=e.children,n=e.size;return s.createElement(j.Consumer,null,(function(e){return s.createElement(j.Provider,{value:n||e},t)}))},S=j,z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},N=function(e,t){var n,r,a=s.useContext(S),o=s.useState(1),l=(0,c.Z)(o,2),i=l[0],u=l[1],f=s.useState(!1),d=(0,c.Z)(f,2),v=d[0],j=d[1],E=s.useState(!0),N=(0,c.Z)(E,2),k=N[0],w=N[1],O=s.useRef(),H=s.useRef(),M=(0,y.sQ)(t,O),V=s.useContext(Z.E_).getPrefixCls,P=function(){if(H.current&&O.current){var t=H.current.offsetWidth,n=O.current.offsetWidth;if(0!==t&&0!==n){var r=e.gap,a=void 0===r?4:r;2*a<n&&u(n-2*a<t?(n-2*a)/t:1)}}};s.useEffect((function(){j(!0)}),[]),s.useEffect((function(){w(!0),u(1)}),[e.src]),s.useEffect((function(){P()}),[e.gap]);var R,L=e.prefixCls,A=e.shape,I=e.size,T=e.src,B=e.srcSet,K=e.icon,U=e.className,W=e.alt,_=e.draggable,J=e.children,D=e.crossOrigin,F=z(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),G="default"===I?a:I,Q=Object.keys("object"===(0,h.Z)(G)&&G||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),X=(0,b.Z)(Q),Y=s.useMemo((function(){if("object"!==(0,h.Z)(G))return{};var e=C.c4.find((function(e){return X[e]})),t=G[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:K?t/2:18}:{}}),[X,G]),$=V("avatar",L),q=g()((n={},(0,p.Z)(n,"".concat($,"-lg"),"large"===G),(0,p.Z)(n,"".concat($,"-sm"),"small"===G),n)),ee=s.isValidElement(T),te=g()($,q,(r={},(0,p.Z)(r,"".concat($,"-").concat(A),!!A),(0,p.Z)(r,"".concat($,"-image"),ee||T&&k),(0,p.Z)(r,"".concat($,"-icon"),!!K),r),U),ne="number"===typeof G?{width:G,height:G,lineHeight:"".concat(G,"px"),fontSize:K?G/2:18}:{};if("string"===typeof T&&k)R=s.createElement("img",{src:T,draggable:_,srcSet:B,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&w(!1)},alt:W,crossOrigin:D});else if(ee)R=T;else if(K)R=K;else if(v||1!==i){var re="scale(".concat(i,") translateX(-50%)"),ae={msTransform:re,WebkitTransform:re,transform:re},ce="number"===typeof G?{lineHeight:"".concat(G,"px")}:{};R=s.createElement(x.Z,{onResize:P},s.createElement("span",{className:"".concat($,"-string"),ref:function(e){H.current=e},style:(0,m.Z)((0,m.Z)({},ce),ae)},J))}else R=s.createElement("span",{className:"".concat($,"-string"),style:{opacity:0},ref:function(e){H.current=e}},J);return delete F.onError,delete F.gap,s.createElement("span",(0,m.Z)({},F,{style:(0,m.Z)((0,m.Z)((0,m.Z)({},ne),Y),F.style),className:te,ref:M}),R)},k=s.forwardRef(N);k.defaultProps={shape:"circle",size:"default"};var w=k,O=n(5882),H=n(6524),M=n(690),V=function(e){var t=s.useContext(Z.E_),n=t.getPrefixCls,r=t.direction,a=e.prefixCls,c=e.className,o=void 0===c?"":c,l=e.maxCount,i=e.maxStyle,u=e.size,f=n("avatar-group",a),d=g()(f,(0,p.Z)({},"".concat(f,"-rtl"),"rtl"===r),o),m=e.children,h=e.maxPopoverPlacement,v=void 0===h?"top":h,x=e.maxPopoverTrigger,y=void 0===x?"hover":x,b=(0,O.Z)(m).map((function(e,t){return(0,M.Tm)(e,{key:"avatar-key-".concat(t)})})),C=b.length;if(l&&l<C){var j=b.slice(0,l),S=b.slice(l,C);return j.push(s.createElement(H.Z,{key:"avatar-popover-key",content:S,trigger:y,placement:v,overlayClassName:"".concat(f,"-popover")},s.createElement(w,{style:i},"+".concat(C-l)))),s.createElement(E,{size:u},s.createElement("div",{className:d,style:e.style},j))}return s.createElement(E,{size:u},s.createElement("div",{className:d,style:e.style},b))},P=w;P.Group=V;var R=P,L=n(3849),A=n(332),I=n(1413),T={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"},B=n(9491),K=function(e,t){return s.createElement(B.Z,(0,I.Z)((0,I.Z)({},e),{},{ref:t,icon:T}))};K.displayName="HomeOutlined";var U=s.forwardRef(K),W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z"}}]},name:"usergroup-add",theme:"outlined"},_=function(e,t){return s.createElement(B.Z,(0,I.Z)((0,I.Z)({},e),{},{ref:t,icon:W}))};_.displayName="UsergroupAddOutlined";var J=s.forwardRef(_),D={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M193 796c0 17.7 14.3 32 32 32h574c17.7 0 32-14.3 32-32V563c0-176.2-142.8-319-319-319S193 386.8 193 563v233zm72-233c0-136.4 110.6-247 247-247s247 110.6 247 247v193H404V585c0-5.5-4.5-10-10-10h-44c-5.5 0-10 4.5-10 10v171h-75V563zm-48.1-252.5l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3l-67.9-67.9a8.03 8.03 0 00-11.3 0l-39.6 39.6a8.03 8.03 0 000 11.3l67.9 67.9c3.1 3.1 8.1 3.1 11.3 0zm669.6-79.2l-39.6-39.6a8.03 8.03 0 00-11.3 0l-67.9 67.9a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l67.9-67.9c3.1-3.2 3.1-8.2 0-11.3zM832 892H192c-17.7 0-32 14.3-32 32v24c0 4.4 3.6 8 8 8h688c4.4 0 8-3.6 8-8v-24c0-17.7-14.3-32-32-32zM484 180h56c4.4 0 8-3.6 8-8V76c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v96c0 4.4 3.6 8 8 8z"}}]},name:"alert",theme:"outlined"},F=function(e,t){return s.createElement(B.Z,(0,I.Z)((0,I.Z)({},e),{},{ref:t,icon:D}))};F.displayName="AlertOutlined";var G=s.forwardRef(F),Q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},X=function(e,t){return s.createElement(B.Z,(0,I.Z)((0,I.Z)({},e),{},{ref:t,icon:Q}))};X.displayName="UserOutlined";var Y=s.forwardRef(X),$=n(5447);var q=n.p+"static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg",ee=n(3687),te=n(9194),ne=n(2556),re=u.Header,ae=u.Content,ce=u.Sider,se=function(){var e,t=(0,s.useContext)(ee.Z),n=t.defaultMenu,o=t.setIsLogin,l=t.userInfo,i=(0,A.s0)(),m=(0,s.useState)(!1),p=(0,c.Z)(m,2),h=p[0],v=p[1],g=(0,s.useState)([]),x=(0,c.Z)(g,2),y=x[0],Z=x[1],b=(0,s.useState)(!1),C=(0,c.Z)(b,2),j=C[0],E=(C[1],(0,$.aC)().authService);(0,s.useEffect)((function(){var e=function(){var e=[{key:"home",icon:(0,ne.jsx)(U,{}),label:"Inicio",onClick:function(){return i("/",{replace:!0})}}];return Object.keys(l).length>0&&(0,te.J)(l)&&e.push({key:"companies",icon:(0,ne.jsx)(J,{}),label:"Compa\xf1ias",onClick:function(){return i("/companies",{replace:!0})}},{key:"alerts",icon:(0,ne.jsx)(G,{}),label:"Alertas",onClick:function(){return i("/alerts",{replace:!0})}}),e}();Z(e)}),[l]);var S=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.clear(),o(!1),E.logout(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){return(0,ne.jsx)(f.Z,{onClick:S,items:[{label:"Cerrar sesi\xf3n",key:"1"}]})};return(0,ne.jsxs)(u,{children:[(0,ne.jsxs)(re,{className:"header header-fixed",children:[(0,ne.jsx)("div",{className:"logo",children:(0,ne.jsx)("img",{src:q,className:"App-logo",alt:"logo"})}),(0,ne.jsx)(d.Z,{overlay:function(){return(0,ne.jsx)(z,{})},placement:"bottomRight",className:"content-user-dropdown",children:(0,ne.jsxs)("a",{href:"javascrip:void()",className:"custom-header-user",onClick:function(e){return e.preventDefault()},children:[(0,ne.jsx)(R,{icon:(0,ne.jsx)(Y,{})}),(0,ne.jsx)("span",{style:{paddingLeft:8},children:(null===(e=JSON.parse(localStorage.getItem("currentUser")||"{}"))||void 0===e?void 0:e.name)||""})]})})]}),(0,ne.jsxs)(u,{children:[(0,ne.jsx)(ce,{width:200,className:"site-layout-background sider-fixed",collapsible:!0,collapsed:h,onCollapse:function(e){console.log(e),v(e)},children:(0,ne.jsx)(L.Z,{spinning:j,className:j?"custom-spinning":"",children:(0,ne.jsx)(f.Z,{mode:"inline",defaultSelectedKeys:["home"],selectedKeys:["".concat(n)],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},items:y})})}),(0,ne.jsx)(u,{className:"content-layout-section",style:{padding:"0 24px 24px",marginTop:"64px",marginLeft:"200px"},children:(0,ne.jsx)(ae,{className:"content-section-principal",style:{padding:24,margin:0,minHeight:280},children:(0,ne.jsx)(A.j3,{})})})]})]})}}}]);
//# sourceMappingURL=743.ec62716c.chunk.js.map