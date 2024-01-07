import{a as ce}from"/build/_shared/chunk-IOELMSQY.js";import{d as le}from"/build/_shared/chunk-2LOM2E4Y.js";var n=le(ce(),1);function te(e){var t,a,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=te(e[t]))&&(s&&(s+=" "),s+=a);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function ue(){for(var e,t,a=0,s="";a<arguments.length;)(e=arguments[a++])&&(t=te(e))&&(s&&(s+=" "),s+=t);return s}var $=ue;var Q=e=>typeof e=="number"&&!isNaN(e),S=e=>typeof e=="string",L=e=>typeof e=="function",X=e=>S(e)||L(e)?e:null,Z=e=>(0,n.isValidElement)(e)||S(e)||L(e)||Q(e);function de(e,t,a){a===void 0&&(a=300);let{scrollHeight:s,style:d}=e;requestAnimationFrame(()=>{d.minHeight="initial",d.height=s+"px",d.transition=`all ${a}ms`,requestAnimationFrame(()=>{d.height="0",d.padding="0",d.margin="0",setTimeout(t,a)})})}function K(e){let{enter:t,exit:a,appendPosition:s=!1,collapse:d=!0,collapseDuration:c=300}=e;return function(o){let{children:r,position:C,preventExitTransition:T,done:y,nodeRef:g,isIn:b}=o,l=s?`${t}--${C}`:t,p=s?`${a}--${C}`:a,m=(0,n.useRef)(0);return(0,n.useLayoutEffect)(()=>{let i=g.current,u=l.split(" "),E=_=>{_.target===g.current&&(i.dispatchEvent(new Event("d")),i.removeEventListener("animationend",E),i.removeEventListener("animationcancel",E),m.current===0&&_.type!=="animationcancel"&&i.classList.remove(...u))};i.classList.add(...u),i.addEventListener("animationend",E),i.addEventListener("animationcancel",E)},[]),(0,n.useEffect)(()=>{let i=g.current,u=()=>{i.removeEventListener("animationend",u),d?de(i,y,c):y()};b||(T?u():(m.current=1,i.className+=` ${p}`,i.addEventListener("animationend",u)))},[b]),n.default.createElement(n.default.Fragment,null,r)}}function ne(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var x={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let a=this.list.get(e).filter(s=>s!==t);return this.list.set(e,a),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let a=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(a)})}},U=e=>{let{theme:t,type:a,...s}=e;return n.default.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${a})`,...s})},J={info:function(e){return n.default.createElement(U,{...e},n.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return n.default.createElement(U,{...e},n.default.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return n.default.createElement(U,{...e},n.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return n.default.createElement(U,{...e},n.default.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return n.default.createElement("div",{className:"Toastify__spinner"})}};function pe(e){let[,t]=(0,n.useReducer)(l=>l+1,0),[a,s]=(0,n.useState)([]),d=(0,n.useRef)(null),c=(0,n.useRef)(new Map).current,o=l=>a.indexOf(l)!==-1,r=(0,n.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:o,getToast:l=>c.get(l)}).current;function C(l){let{containerId:p}=l,{limit:m}=r.props;!m||p&&r.containerId!==p||(r.count-=r.queue.length,r.queue=[])}function T(l){s(p=>l==null?[]:p.filter(m=>m!==l))}function y(){let{toastContent:l,toastProps:p,staleId:m}=r.queue.shift();b(l,p,m)}function g(l,p){let{delay:m,staleId:i,...u}=p;if(!Z(l)||function(R){return!d.current||r.props.enableMultiContainer&&R.containerId!==r.props.containerId||c.has(R.toastId)&&R.updateId==null}(u))return;let{toastId:E,updateId:_,data:f}=u,{props:h}=r,k=()=>T(E),B=_==null;B&&r.count++;let I={...h,style:h.toastStyle,key:r.toastKey++,...Object.fromEntries(Object.entries(u).filter(R=>{let[w,O]=R;return O!=null})),toastId:E,updateId:_,data:f,closeToast:k,isIn:!1,className:X(u.className||h.toastClassName),bodyClassName:X(u.bodyClassName||h.bodyClassName),progressClassName:X(u.progressClassName||h.progressClassName),autoClose:!u.isLoading&&(P=u.autoClose,H=h.autoClose,P===!1||Q(P)&&P>0?P:H),deleteToast(){let R=ne(c.get(E),"removed");c.delete(E),x.emit(4,R);let w=r.queue.length;if(r.count=E==null?r.count-r.displayedToast:r.count-1,r.count<0&&(r.count=0),w>0){let O=E==null?r.props.limit:1;if(w===1||O===1)r.displayedToast++,y();else{let D=O>w?w:O;r.displayedToast=D;for(let N=0;N<D;N++)y()}}else t()}};var P,H;I.iconOut=function(R){let{theme:w,type:O,isLoading:D,icon:N}=R,M=null,z={theme:w,type:O};return N===!1||(L(N)?M=N(z):(0,n.isValidElement)(N)?M=(0,n.cloneElement)(N,z):S(N)||Q(N)?M=N:D?M=J.spinner():(G=>G in J)(O)&&(M=J[O](z))),M}(I),L(u.onOpen)&&(I.onOpen=u.onOpen),L(u.onClose)&&(I.onClose=u.onClose),I.closeButton=h.closeButton,u.closeButton===!1||Z(u.closeButton)?I.closeButton=u.closeButton:u.closeButton===!0&&(I.closeButton=!Z(h.closeButton)||h.closeButton);let A=l;(0,n.isValidElement)(l)&&!S(l.type)?A=(0,n.cloneElement)(l,{closeToast:k,toastProps:I,data:f}):L(l)&&(A=l({closeToast:k,toastProps:I,data:f})),h.limit&&h.limit>0&&r.count>h.limit&&B?r.queue.push({toastContent:A,toastProps:I,staleId:i}):Q(m)?setTimeout(()=>{b(A,I,i)},m):b(A,I,i)}function b(l,p,m){let{toastId:i}=p;m&&c.delete(m);let u={content:l,props:p};c.set(i,u),s(E=>[...E,i].filter(_=>_!==m)),x.emit(4,ne(u,u.props.updateId==null?"added":"updated"))}return(0,n.useEffect)(()=>(r.containerId=e.containerId,x.cancelEmit(3).on(0,g).on(1,l=>d.current&&T(l)).on(5,C).emit(2,r),()=>{c.clear(),x.emit(3,r)}),[]),(0,n.useEffect)(()=>{r.props=e,r.isToastActive=o,r.displayedToast=a.length}),{getToastToRender:function(l){let p=new Map,m=Array.from(c.values());return e.newestOnTop&&m.reverse(),m.forEach(i=>{let{position:u}=i.props;p.has(u)||p.set(u,[]),p.get(u).push(i)}),Array.from(p,i=>l(i[0],i[1]))},containerRef:d,isToastActive:o}}function oe(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function se(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function me(e){let[t,a]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!1),c=(0,n.useRef)(null),o=(0,n.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,r=(0,n.useRef)(e),{autoClose:C,pauseOnHover:T,closeToast:y,onClick:g,closeOnClick:b}=e;function l(f){if(e.draggable){f.nativeEvent.type==="touchstart"&&f.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",u),document.addEventListener("mouseup",E),document.addEventListener("touchmove",u),document.addEventListener("touchend",E);let h=c.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=h.getBoundingClientRect(),h.style.transition="",o.x=oe(f.nativeEvent),o.y=se(f.nativeEvent),e.draggableDirection==="x"?(o.start=o.x,o.removalDistance=h.offsetWidth*(e.draggablePercent/100)):(o.start=o.y,o.removalDistance=h.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function p(f){if(o.boundingRect){let{top:h,bottom:k,left:B,right:I}=o.boundingRect;f.nativeEvent.type!=="touchend"&&e.pauseOnHover&&o.x>=B&&o.x<=I&&o.y>=h&&o.y<=k?i():m()}}function m(){a(!0)}function i(){a(!1)}function u(f){let h=c.current;o.canDrag&&h&&(o.didMove=!0,t&&i(),o.x=oe(f),o.y=se(f),o.delta=e.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),h.style.transform=`translate${e.draggableDirection}(${o.delta}px)`,h.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function E(){document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",E);let f=c.current;if(o.canDrag&&o.didMove&&f){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return d(!0),void e.closeToast();f.style.transition="transform 0.2s, opacity 0.2s",f.style.transform=`translate${e.draggableDirection}(0)`,f.style.opacity="1"}}(0,n.useEffect)(()=>{r.current=e}),(0,n.useEffect)(()=>(c.current&&c.current.addEventListener("d",m,{once:!0}),L(e.onOpen)&&e.onOpen((0,n.isValidElement)(e.children)&&e.children.props),()=>{let f=r.current;L(f.onClose)&&f.onClose((0,n.isValidElement)(f.children)&&f.children.props)}),[]),(0,n.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||i(),window.addEventListener("focus",m),window.addEventListener("blur",i)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",m),window.removeEventListener("blur",i))}),[e.pauseOnFocusLoss]);let _={onMouseDown:l,onTouchStart:l,onMouseUp:p,onTouchEnd:p};return C&&T&&(_.onMouseEnter=i,_.onMouseLeave=m),b&&(_.onClick=f=>{g&&g(f),o.canCloseOnClick&&y()}),{playToast:m,pauseToast:i,isRunning:t,preventExitTransition:s,toastRef:c,eventHandlers:_}}function re(e){let{closeToast:t,theme:a,ariaLabel:s="close"}=e;return n.default.createElement("button",{className:`Toastify__close-button Toastify__close-button--${a}`,type:"button",onClick:d=>{d.stopPropagation(),t(d)},"aria-label":s},n.default.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},n.default.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function fe(e){let{delay:t,isRunning:a,closeToast:s,type:d="default",hide:c,className:o,style:r,controlledProgress:C,progress:T,rtl:y,isIn:g,theme:b}=e,l=c||C&&T===0,p={...r,animationDuration:`${t}ms`,animationPlayState:a?"running":"paused",opacity:l?0:1};C&&(p.transform=`scaleX(${T})`);let m=$("Toastify__progress-bar",C?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${b}`,`Toastify__progress-bar--${d}`,{"Toastify__progress-bar--rtl":y}),i=L(o)?o({rtl:y,type:d,defaultClassName:m}):$(m,o);return n.default.createElement("div",{role:"progressbar","aria-hidden":l?"true":"false","aria-label":"notification timer",className:i,style:p,[C&&T>=1?"onTransitionEnd":"onAnimationEnd"]:C&&T<1?null:()=>{g&&s()}})}var ge=e=>{let{isRunning:t,preventExitTransition:a,toastRef:s,eventHandlers:d}=me(e),{closeButton:c,children:o,autoClose:r,onClick:C,type:T,hideProgressBar:y,closeToast:g,transition:b,position:l,className:p,style:m,bodyClassName:i,bodyStyle:u,progressClassName:E,progressStyle:_,updateId:f,role:h,progress:k,rtl:B,toastId:I,deleteToast:P,isIn:H,isLoading:A,iconOut:R,closeOnClick:w,theme:O}=e,D=$("Toastify__toast",`Toastify__toast-theme--${O}`,`Toastify__toast--${T}`,{"Toastify__toast--rtl":B},{"Toastify__toast--close-on-click":w}),N=L(p)?p({rtl:B,position:l,type:T,defaultClassName:D}):$(D,p),M=!!k||!r,z={closeToast:g,type:T,theme:O},G=null;return c===!1||(G=L(c)?c(z):(0,n.isValidElement)(c)?(0,n.cloneElement)(c,z):re(z)),n.default.createElement(b,{isIn:H,done:P,position:l,preventExitTransition:a,nodeRef:s},n.default.createElement("div",{id:I,onClick:C,className:N,...d,style:m,ref:s},n.default.createElement("div",{...H&&{role:h},className:L(i)?i({type:T}):$("Toastify__toast-body",i),style:u},R!=null&&n.default.createElement("div",{className:$("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},R),n.default.createElement("div",null,o)),G,n.default.createElement(fe,{...f&&!M?{key:`pb-${f}`}:{},rtl:B,theme:O,delay:r,isRunning:t,isIn:H,closeToast:g,hide:y,type:T,style:_,className:E,controlledProgress:M,progress:k||0})))},V=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},he=K(V("bounce",!0)),Ce=K(V("slide",!0)),be=K(V("zoom")),Ie=K(V("flip")),ae=(0,n.forwardRef)((e,t)=>{let{getToastToRender:a,containerRef:s,isToastActive:d}=pe(e),{className:c,style:o,rtl:r,containerId:C}=e;function T(y){let g=$("Toastify__toast-container",`Toastify__toast-container--${y}`,{"Toastify__toast-container--rtl":r});return L(c)?c({position:y,rtl:r,defaultClassName:g}):$(g,X(c))}return(0,n.useEffect)(()=>{t&&(t.current=s.current)},[]),n.default.createElement("div",{ref:s,className:"Toastify",id:C},a((y,g)=>{let b=g.length?{...o}:{...o,pointerEvents:"none"};return n.default.createElement("div",{className:T(y),style:b,key:`container-${y}`},g.map((l,p)=>{let{content:m,props:i}=l;return n.default.createElement(ge,{...i,isIn:d(i.toastId),style:{...i.style,"--nth":p+1,"--len":g.length},key:`toast-${i.key}`},m)}))}))});ae.displayName="ToastContainer",ae.defaultProps={position:"top-right",transition:he,autoClose:5e3,closeButton:re,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var ee,F=new Map,q=[],ye=1;function ie(){return""+ye++}function ve(e){return e&&(S(e.toastId)||Q(e.toastId))?e.toastId:ie()}function j(e,t){return F.size>0?x.emit(0,e,t):q.push({content:e,options:t}),t.toastId}function Y(e,t){return{...t,type:t&&t.type||e,toastId:ve(t)}}function W(e){return(t,a)=>j(t,Y(e,a))}function v(e,t){return j(e,Y("default",t))}v.loading=(e,t)=>j(e,Y("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),v.promise=function(e,t,a){let s,{pending:d,error:c,success:o}=t;d&&(s=S(d)?v.loading(d,a):v.loading(d.render,{...a,...d}));let r={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},C=(y,g,b)=>{if(g==null)return void v.dismiss(s);let l={type:y,...r,...a,data:b},p=S(g)?{render:g}:g;return s?v.update(s,{...l,...p}):v(p.render,{...l,...p}),b},T=L(e)?e():e;return T.then(y=>C("success",o,y)).catch(y=>C("error",c,y)),T},v.success=W("success"),v.info=W("info"),v.error=W("error"),v.warning=W("warning"),v.warn=v.warning,v.dark=(e,t)=>j(e,Y("default",{theme:"dark",...t})),v.dismiss=e=>{F.size>0?x.emit(1,e):q=q.filter(t=>e!=null&&t.options.toastId!==e)},v.clearWaitingQueue=function(e){return e===void 0&&(e={}),x.emit(5,e)},v.isActive=e=>{let t=!1;return F.forEach(a=>{a.isToastActive&&a.isToastActive(e)&&(t=!0)}),t},v.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{let a=function(s,d){let{containerId:c}=d,o=F.get(c||ee);return o&&o.getToast(s)}(e,t);if(a){let{props:s,content:d}=a,c={delay:100,...s,...t,toastId:t.toastId||e,updateId:ie()};c.toastId!==e&&(c.staleId=e);let o=c.render||d;delete c.render,j(o,c)}},0)},v.done=e=>{v.update(e,{progress:1})},v.onChange=e=>(x.on(4,e),()=>{x.off(4,e)}),v.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},v.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},x.on(2,e=>{ee=e.containerId||e,F.set(ee,e),q.forEach(t=>{x.emit(0,t.content,t.options)}),q=[]}).on(3,e=>{F.delete(e.containerId||e),F.size===0&&x.off(0).off(1).off(5)});export{ae as a};
