"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[8592],{1182:(C,h,s)=>{s.d(h,{c:()=>o});var e=s(6953),i=s(2966),a=s(8077);const o=(l,r)=>{let n,t;const d=(c,m,w)=>{if(typeof document>"u")return;const M=document.elementFromPoint(c,m);M&&r(M)?M!==n&&(u(),_(M,w)):u()},_=(c,m)=>{n=c,t||(t=n);const w=n;(0,e.w)(()=>w.classList.add("ion-activated")),m()},u=(c=!1)=>{if(!n)return;const m=n;(0,e.w)(()=>m.classList.remove("ion-activated")),c&&t!==n&&n.click(),n=void 0};return(0,a.createGesture)({el:l,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>d(c.currentX,c.currentY,i.a),onMove:c=>d(c.currentX,c.currentY,i.b),onEnd:()=>{u(!0),(0,i.h)(),t=void 0}})}},278:(C,h,s)=>{s.d(h,{g:()=>e});const e=(r,n,t,d,_)=>a(r[1],n[1],t[1],d[1],_).map(u=>i(r[0],n[0],t[0],d[0],u)),i=(r,n,t,d,_)=>_*(3*n*Math.pow(_-1,2)+_*(-3*t*_+3*t+d*_))-r*Math.pow(_-1,3),a=(r,n,t,d,_)=>l((d-=_)-3*(t-=_)+3*(n-=_)-(r-=_),3*t-6*n+3*r,3*n-3*r,r).filter(c=>c>=0&&c<=1),l=(r,n,t,d)=>{if(0===r)return((r,n,t)=>{const d=n*n-4*r*t;return d<0?[]:[(-n+Math.sqrt(d))/(2*r),(-n-Math.sqrt(d))/(2*r)]})(n,t,d);const _=(3*(t/=r)-(n/=r)*n)/3,u=(2*n*n*n-9*n*t+27*(d/=r))/27;if(0===_)return[Math.pow(-u,1/3)];if(0===u)return[Math.sqrt(-_),-Math.sqrt(-_)];const c=Math.pow(u/2,2)+Math.pow(_/3,3);if(0===c)return[Math.pow(u/2,.5)-n/3];if(c>0)return[Math.pow(-u/2+Math.sqrt(c),1/3)-Math.pow(u/2+Math.sqrt(c),1/3)-n/3];const m=Math.sqrt(Math.pow(-_/3,3)),w=Math.acos(-u/(2*Math.sqrt(Math.pow(-_/3,3)))),M=2*Math.pow(m,1/3);return[M*Math.cos(w/3)-n/3,M*Math.cos((w+2*Math.PI)/3)-n/3,M*Math.cos((w+4*Math.PI)/3)-n/3]}},1776:(C,h,s)=>{s.d(h,{i:()=>e});const e=i=>i&&""!==i.dir?"rtl"===i.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},3433:(C,h,s)=>{s.r(h),s.d(h,{startFocusVisible:()=>o});const e="ion-focused",a=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],o=l=>{let r=[],n=!0;const t=l?l.shadowRoot:document,d=l||document.body,_=O=>{r.forEach(E=>E.classList.remove(e)),O.forEach(E=>E.classList.add(e)),r=O},u=()=>{n=!1,_([])},c=O=>{n=a.includes(O.key),n||_([])},m=O=>{if(n&&void 0!==O.composedPath){const E=O.composedPath().filter(y=>!!y.classList&&y.classList.contains("ion-focusable"));_(E)}},w=()=>{t.activeElement===d&&_([])};return t.addEventListener("keydown",c),t.addEventListener("focusin",m),t.addEventListener("focusout",w),t.addEventListener("touchstart",u,{passive:!0}),t.addEventListener("mousedown",u),{destroy:()=>{t.removeEventListener("keydown",c),t.removeEventListener("focusin",m),t.removeEventListener("focusout",w),t.removeEventListener("touchstart",u),t.removeEventListener("mousedown",u)},setFocus:_}}},2587:(C,h,s)=>{s.d(h,{c:()=>i});var e=s(544);const i=r=>{const n=r;let t;return{hasLegacyControl:()=>{if(void 0===t){const _=void 0!==n.label||a(n),u=n.hasAttribute("aria-label")||n.hasAttribute("aria-labelledby")&&null===n.shadowRoot,c=(0,e.h)(n);t=!0===n.legacy||!_&&!u&&null!==c}return t}}},a=r=>null!==r.shadowRoot&&!!(o.includes(r.tagName)&&null!==r.querySelector('[slot="label"]')||l.includes(r.tagName)&&""!==r.textContent),o=["ION-RANGE"],l=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},2966:(C,h,s)=>{s.d(h,{a:()=>o,b:()=>l,c:()=>a,d:()=>n,h:()=>r});const e={getEngine(){var t;const d=window;return d.TapticEngine||(null===(t=d.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&d.Capacitor.Plugins.Haptics},available(){var t;const d=window;return!!this.getEngine()&&("web"!==(null===(t=d.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const d=this.getEngine();if(!d)return;const _=this.isCapacitor()?t.style.toUpperCase():t.style;d.impact({style:_})},notification(t){const d=this.getEngine();if(!d)return;const _=this.isCapacitor()?t.style.toUpperCase():t.style;d.notification({style:_})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>e.available(),a=()=>{i()&&e.selection()},o=()=>{i()&&e.selectionStart()},l=()=>{i()&&e.selectionChanged()},r=()=>{i()&&e.selectionEnd()},n=t=>{i()&&e.impact(t)}},9993:(C,h,s)=>{s.d(h,{a:()=>e,b:()=>m,c:()=>n,d:()=>w,e:()=>f,f:()=>r,g:()=>M,h:()=>a,i:()=>i,j:()=>T,k:()=>p,l:()=>t,m:()=>u,n:()=>O,o:()=>_,p:()=>l,q:()=>o,r:()=>v,s:()=>P,t:()=>c,u:()=>E,v:()=>y,w:()=>d});const e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",T="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4435:(C,h,s)=>{s.d(h,{I:()=>r,a:()=>_,b:()=>l,c:()=>m,d:()=>M,f:()=>u,g:()=>d,i:()=>t,p:()=>w,r:()=>O,s:()=>c});var e=s(5861),i=s(544),a=s(7690);const l="ion-content",r=".ion-content-scroll-host",n=`${l}, ${r}`,t=E=>"ION-CONTENT"===E.tagName,d=function(){var E=(0,e.Z)(function*(y){return t(y)?(yield new Promise(v=>(0,i.c)(y,v)),y.getScrollElement()):y});return function(v){return E.apply(this,arguments)}}(),_=E=>E.querySelector(r)||E.querySelector(n),u=E=>E.closest(n),c=(E,y)=>t(E)?E.scrollToTop(y):Promise.resolve(E.scrollTo({top:0,left:0,behavior:y>0?"smooth":"auto"})),m=(E,y,v,T)=>t(E)?E.scrollByPoint(y,v,T):Promise.resolve(E.scrollBy({top:v,left:y,behavior:T>0?"smooth":"auto"})),w=E=>(0,a.b)(E,l),M=E=>{if(t(E)){const v=E.scrollY;return E.scrollY=!1,v}return E.style.setProperty("overflow","hidden"),!0},O=(E,y)=>{t(E)?E.scrollY=y:E.style.removeProperty("overflow")}},1685:(C,h,s)=>{s.d(h,{c:()=>o,g:()=>l});var e=s(7643),i=s(544),a=s(7690);const o=(n,t,d)=>{let _,u;void 0!==e.w&&"MutationObserver"in e.w&&(_=new MutationObserver(M=>{for(const O of M)for(const E of O.addedNodes)if(E.nodeType===Node.ELEMENT_NODE&&E.slot===t)return d(),void(0,i.r)(()=>c(E))}),_.observe(n,{childList:!0}));const c=M=>{var O;u&&(u.disconnect(),u=void 0),u=new MutationObserver(E=>{d();for(const y of E)for(const v of y.removedNodes)v.nodeType===Node.ELEMENT_NODE&&v.slot===t&&w()}),u.observe(null!==(O=M.parentElement)&&void 0!==O?O:M,{subtree:!0,childList:!0})},w=()=>{u&&(u.disconnect(),u=void 0)};return{destroy:()=>{_&&(_.disconnect(),_=void 0),w()}}},l=(n,t,d)=>{const _=null==n?0:n.toString().length,u=r(_,t);if(void 0===d)return u;try{return d(_,t)}catch(c){return(0,a.a)("Exception in provided `counterFormatter`.",c),u}},r=(n,t)=>`${n} / ${t}`},6884:(C,h,s)=>{s.d(h,{K:()=>a,a:()=>i});var e=s(7643),i=(()=>((i=i||{}).Body="body",i.Ionic="ionic",i.Native="native",i.None="none",i))();const a={getEngine(){var o;return(null===(o=null==e.w?void 0:e.w.Capacitor)||void 0===o?void 0:o.isPluginAvailable("Keyboard"))&&(null==e.w?void 0:e.w.Capacitor.Plugins.Keyboard)},getResizeMode(){const o=this.getEngine();return o?.getResizeMode?o.getResizeMode().catch(l=>{if("UNIMPLEMENTED"!==l.code)throw l}):Promise.resolve(void 0)}}},2624:(C,h,s)=>{s.r(h),s.d(h,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>a,copyVisualViewport:()=>T,keyboardDidClose:()=>O,keyboardDidOpen:()=>w,keyboardDidResize:()=>M,resetKeyboardAssist:()=>d,setKeyboardClose:()=>m,setKeyboardOpen:()=>c,startKeyboardAssist:()=>_,trackViewportChanges:()=>v});var e=s(6884);s(7643);const a="ionKeyboardDidShow",o="ionKeyboardDidHide";let r={},n={},t=!1;const d=()=>{r={},n={},t=!1},_=p=>{if(e.K.getEngine())u(p);else{if(!p.visualViewport)return;n=T(p.visualViewport),p.visualViewport.onresize=()=>{v(p),w()||M(p)?c(p):O(p)&&m(p)}}},u=p=>{p.addEventListener("keyboardDidShow",P=>c(p,P)),p.addEventListener("keyboardDidHide",()=>m(p))},c=(p,P)=>{E(p,P),t=!0},m=p=>{y(p),t=!1},w=()=>!t&&r.width===n.width&&(r.height-n.height)*n.scale>150,M=p=>t&&!O(p),O=p=>t&&n.height===p.innerHeight,E=(p,P)=>{const A=new CustomEvent(a,{detail:{keyboardHeight:P?P.keyboardHeight:p.innerHeight-n.height}});p.dispatchEvent(A)},y=p=>{const P=new CustomEvent(o);p.dispatchEvent(P)},v=p=>{r=Object.assign({},n),n=T(p.visualViewport)},T=p=>({width:Math.round(p.width),height:Math.round(p.height),offsetTop:p.offsetTop,offsetLeft:p.offsetLeft,pageTop:p.pageTop,pageLeft:p.pageLeft,scale:p.scale})},218:(C,h,s)=>{s.d(h,{c:()=>r});var e=s(5861),i=s(7643),a=s(6884);const o=n=>void 0===i.d||n===a.a.None||void 0===n?null:i.d.querySelector("ion-app")??i.d.body,l=n=>{const t=o(n);return null===t?0:t.clientHeight},r=function(){var n=(0,e.Z)(function*(t){let d,_,u,c;const m=function(){var y=(0,e.Z)(function*(){const v=yield a.K.getResizeMode(),T=void 0===v?void 0:v.mode;d=()=>{void 0===c&&(c=l(T)),u=!0,w(u,T)},_=()=>{u=!1,w(u,T)},null==i.w||i.w.addEventListener("keyboardWillShow",d),null==i.w||i.w.addEventListener("keyboardWillHide",_)});return function(){return y.apply(this,arguments)}}(),w=(y,v)=>{t&&t(y,M(v))},M=y=>{if(0===c||c===l(y))return;const v=o(y);return null!==v?new Promise(T=>{const P=new ResizeObserver(()=>{v.clientHeight===c&&(P.disconnect(),T())});P.observe(v)}):void 0};return yield m(),{init:m,destroy:()=>{null==i.w||i.w.removeEventListener("keyboardWillShow",d),null==i.w||i.w.removeEventListener("keyboardWillHide",_),d=_=void 0},isKeyboardVisible:()=>u}});return function(d){return n.apply(this,arguments)}}()},9718:(C,h,s)=>{s.d(h,{c:()=>a});var e=s(7643),i=s(544);const a=(o,l,r)=>{let n;const t=()=>!(void 0===l()||void 0!==o.label||null===r()),_=()=>{const c=l();if(void 0===c)return;if(!t())return void c.style.removeProperty("width");const m=r().scrollWidth;if(0===m&&null===c.offsetParent&&void 0!==e.w&&"IntersectionObserver"in e.w){if(void 0!==n)return;const w=n=new IntersectionObserver(M=>{1===M[0].intersectionRatio&&(_(),w.disconnect(),n=void 0)},{threshold:.01,root:o});w.observe(c)}else c.style.setProperty("width",.75*m+"px")};return{calculateNotchWidth:()=>{t()&&(0,i.r)(()=>{_()})},destroy:()=>{n&&(n.disconnect(),n=void 0)}}}},1173:(C,h,s)=>{s.d(h,{S:()=>i});const i={bubbles:{dur:1e3,circles:9,fn:(a,o,l)=>{const r=a*o/l-a+"ms",n=2*Math.PI*o/l;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(a,o,l)=>{const r=o/l,n=a*r-a+"ms",t=2*Math.PI*r;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,o)=>({r:6,style:{left:32-32*o+"%","animation-delay":-110*o+"ms"}})},lines:{dur:1e3,lines:8,fn:(a,o,l)=>({y1:14,y2:26,style:{transform:`rotate(${360/l*o+(o<l/2?180:-180)}deg)`,"animation-delay":a*o/l-a+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(a,o,l)=>({y1:12,y2:20,style:{transform:`rotate(${360/l*o+(o<l/2?180:-180)}deg)`,"animation-delay":a*o/l-a+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(a,o,l)=>({y1:17,y2:29,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":a*o/l-a+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(a,o,l)=>({y1:12,y2:20,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":a*o/l-a+"ms"}})}}},4666:(C,h,s)=>{s.r(h),s.d(h,{createSwipeBackGesture:()=>l});var e=s(544),i=s(1776),a=s(8077);s(4587);const l=(r,n,t,d,_)=>{const u=r.ownerDocument.defaultView;let c=(0,i.i)(r);const w=v=>c?-v.deltaX:v.deltaX;return(0,a.createGesture)({el:r,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:v=>(c=(0,i.i)(r),(v=>{const{startX:p}=v;return c?p>=u.innerWidth-50:p<=50})(v)&&n()),onStart:t,onMove:v=>{const p=w(v)/u.innerWidth;d(p)},onEnd:v=>{const T=w(v),p=u.innerWidth,P=T/p,f=(v=>c?-v.velocityX:v.velocityX)(v),g=f>=0&&(f>.2||T>p/2),L=(g?1-P:P)*p;let S=0;if(L>5){const R=L/Math.abs(f);S=Math.min(R,540)}_(g,P<=0?.01:(0,e.l)(0,P,.9999),S)}})}},8639:(C,h,s)=>{s.d(h,{w:()=>e});const e=(o,l,r)=>{if(typeof MutationObserver>"u")return;const n=new MutationObserver(t=>{r(i(t,l))});return n.observe(o,{childList:!0,subtree:!0}),n},i=(o,l)=>{let r;return o.forEach(n=>{for(let t=0;t<n.addedNodes.length;t++)r=a(n.addedNodes[t],l)||r}),r},a=(o,l)=>1!==o.nodeType?void 0:(o.tagName===l.toUpperCase()?[o]:Array.from(o.querySelectorAll(l))).find(n=>n.value===o.value)},4978:(C,h,s)=>{s.d(h,{G:()=>o});var e=s(6814),i=s(5548),a=s(6689);let o=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=a.Xpm({type:l,selectors:[["lgmj-header"]],inputs:{title:"title"},standalone:!0,features:[a.jDz],decls:6,vars:1,consts:[["slot","start"]],template:function(n,t){1&n&&(a.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),a._UZ(3,"ion-menu-button"),a.qZA(),a.TgZ(4,"ion-title"),a._uU(5),a.qZA()()()),2&n&&(a.xp6(5),a.Oqu(t.title))},dependencies:[e.ez,i.Pc,i.Sm,i.Gu,i.fG,i.wd,i.sr]}),l})()},5323:(C,h,s)=>{s.d(h,{l:()=>P});var e=s(6689),i=s(6814),a=s(5548),o=s(5045),l=s(5480),r=s(721),n=s(625),t=s(6685),d=s(2667),_=s(6728);function u(f,A){1&f&&e._UZ(0,"ion-icon",6)}function c(f,A){if(1&f&&(e.TgZ(0,"ion-thumbnail",7),e._UZ(1,"img",8),e.ALo(2,"playerRoleImage"),e.ALo(3,"playerRoleName"),e.qZA()),2&f){const g=e.oxw();e.xp6(1),e.Q6J("src",e.lcZ(2,2,g.player.role),e.LSH)("alt",e.lcZ(3,4,g.player.role))}}function m(f,A){1&f&&e.GkF(0)}function w(f,A){if(1&f){const g=e.EpF();e.TgZ(0,"ion-checkbox",12),e.NdJ("ionChange",function(L){e.CHM(g);const S=e.oxw(2);return e.KtG(S.onCheckedChange(L))}),e.qZA()}if(2&f){const g=e.oxw(2);e.Q6J("checked",g.checked)}}function M(f,A){if(1&f&&e._UZ(0,"ion-radio",13),2&f){const g=e.oxw(2);e.Q6J("value",g.player.id)}}function O(f,A){if(1&f&&(e.ynx(0,9),e.YNc(1,w,1,1,"ion-checkbox",10),e.YNc(2,M,1,1,"ion-radio",11),e.BQk()),2&f){const g=e.oxw();e.Q6J("ngSwitch",g.displayMode),e.xp6(1),e.Q6J("ngSwitchCase",g.playerDisplayModeEnum.SELECT_MULTI),e.xp6(1),e.Q6J("ngSwitchCase",g.playerDisplayModeEnum.SELECT_SINGLE)}}function E(f,A){if(1&f&&(e.TgZ(0,"ion-select-option",18),e._uU(1),e.ALo(2,"playerRoleName"),e.qZA()),2&f){const g=A.$implicit;e.Q6J("value",g),e.xp6(1),e.Oqu(e.lcZ(2,2,g))}}function y(f,A){if(1&f){const g=e.EpF();e.TgZ(0,"ion-select",16),e.NdJ("ionChange",function(L){e.CHM(g);const S=e.oxw(2);return e.KtG(S.onRoleChange(L))}),e.YNc(1,E,3,4,"ion-select-option",17),e.qZA()}if(2&f){const g=e.oxw(2);e.Q6J("legacy",!0)("interfaceOptions",g.customInterfaceOptions)("value",g.player.role),e.xp6(1),e.Q6J("ngForOf",g.sortedRoles)("ngForTrackBy",g.roleTrackBy)}}function v(f,A){if(1&f&&(e.TgZ(0,"span",21),e._uU(1),e.ALo(2,"playerStatus"),e.qZA()),2&f){const g=A.$implicit;e.xp6(1),e.Oqu(e.lcZ(2,1,g))}}function T(f,A){if(1&f&&(e.TgZ(0,"div",19),e.YNc(1,v,3,3,"span",20),e.qZA()),2&f){const g=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",g.player.statuses)("ngForTrackBy",g.statusTrackBy)}}function p(f,A){if(1&f&&(e.ynx(0,9),e.YNc(1,y,2,5,"ion-select",14),e.YNc(2,T,2,2,"div",15),e.BQk()),2&f){const g=e.oxw();e.Q6J("ngSwitch",g.displayMode),e.xp6(1),e.Q6J("ngSwitchCase",g.playerDisplayModeEnum.EDIT_ROLE)}}let P=(()=>{class f{set selectableRoles(g){const D=[...g];!this.noSelfRole&&this.player.role!==t.k.NOT_SELECTED&&!D.includes(this.player.role)&&D.push(this.player.role),D.sort((L,S)=>this.playerRoleNamePipe.transform(L).localeCompare(this.playerRoleNamePipe.transform(S))),this.sortedRoles=D}constructor(g){this.playerRoleNamePipe=g,this.displayMode=r.d.DEFAULT,this.disabled=!1,this.checked=!1,this.noSelfRole=!1,this.checkedChange=new e.vpe,this.roleChange=new e.vpe,this.roleTrackBy=d.A,this.statusTrackBy=_.V,this.playerDisplayModeEnum=r.d,this.playerRoleEnum=t.k,this.sortedRoles=[],this.customInterfaceOptions={header:"CHOISIR UN R\xd4LE",buttons:[]}}onCheckedChange(g){this.checkedChange.emit(g.detail.checked)}onRoleChange(g){this.roleChange.emit(g.detail.value)}}return f.\u0275fac=function(g){return new(g||f)(e.Y36(o.L))},f.\u0275cmp=e.Xpm({type:f,selectors:[["lgmj-player"]],inputs:{player:"player",displayMode:"displayMode",disabled:"disabled",checked:"checked",noSelfRole:"noSelfRole",selectableRoles:"selectableRoles"},outputs:{checkedChange:"checkedChange",roleChange:"roleChange"},standalone:!0,features:[e._Bn([o.L]),e.jDz],decls:14,vars:10,consts:[[3,"disabled","color"],["slot","start","name","skull",4,"ngIf","ngIfElse"],["slot","start",4,"ngIf"],[4,"ngTemplateOutlet"],["formElement",""],["endElement",""],["slot","start","name","skull"],["slot","start"],[3,"src","alt"],[3,"ngSwitch"],["slot","start",3,"checked","ionChange",4,"ngSwitchCase"],["slot","start",3,"value",4,"ngSwitchCase"],["slot","start",3,"checked","ionChange"],["slot","start",3,"value"],["placeholder","R\xf4le","interface","action-sheet","cancelText","Annuler",3,"legacy","interfaceOptions","value","ionChange",4,"ngSwitchCase"],["slot","end",4,"ngSwitchDefault"],["placeholder","R\xf4le","interface","action-sheet","cancelText","Annuler",3,"legacy","interfaceOptions","value","ionChange"],[3,"value",4,"ngFor","ngForOf","ngForTrackBy"],[3,"value"],["slot","end"],["class","status-icon",4,"ngFor","ngForOf","ngForTrackBy"],[1,"status-icon"]],template:function(g,D){if(1&g&&(e.TgZ(0,"ion-item",0),e.YNc(1,u,1,0,"ion-icon",1),e.YNc(2,c,4,6,"ion-thumbnail",2),e.TgZ(3,"ion-label")(4,"h2"),e._uU(5),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.ALo(8,"playerRoleName"),e.qZA()(),e.YNc(9,m,1,0,"ng-container",3),e.qZA(),e.YNc(10,O,3,3,"ng-template",null,4,e.W1O),e.YNc(12,p,3,2,"ng-template",null,5,e.W1O)),2&g){const L=e.MAs(11),S=e.MAs(13);e.Q6J("disabled",D.player.isDead||D.disabled)("color",D.player.isDead?"medium":""),e.xp6(1),e.Q6J("ngIf",D.player.isDead)("ngIfElse",L),e.xp6(1),e.Q6J("ngIf",D.player.role!==D.playerRoleEnum.NOT_SELECTED),e.xp6(3),e.Oqu(D.player.name),e.xp6(2),e.Oqu(e.lcZ(8,8,D.player.role)),e.xp6(2),e.Q6J("ngTemplateOutlet",S)}},dependencies:[i.ez,i.sg,i.O5,i.tP,i.RF,i.n9,i.ED,a.Pc,a.nz,a.gu,a.Ie,a.Q$,a.B7,a.t9,a.n0,a.Bs,a.w,a.U5,a.QI,o.L,l.$,n.E],styles:[".status-icon[_ngcontent-%COMP%]{font-size:20px}"]}),f})()},721:(C,h,s)=>{s.d(h,{d:()=>e});var e=(()=>((e=e||{})[e.DEFAULT=0]="DEFAULT",e[e.SELECT_SINGLE=1]="SELECT_SINGLE",e[e.SELECT_MULTI=2]="SELECT_MULTI",e[e.EDIT_ROLE=3]="EDIT_ROLE",e))()},5480:(C,h,s)=>{s.d(h,{$:()=>a});var e=s(6685),i=s(6689);let a=(()=>{class o{transform(r){switch(r){case e.k.VILLAGEOIS:return`${o.IMAGES_PATH}villageois.webp`;case e.k.LOUP_GAROU:return`${o.IMAGES_PATH}loup_garou.webp`;case e.k.CHASSEUR:return`${o.IMAGES_PATH}chasseur.webp`;case e.k.CUPIDON:return`${o.IMAGES_PATH}cupidon.webp`;case e.k.PETITE_FILLE:return`${o.IMAGES_PATH}petite_fille.webp`;case e.k.SORCIERE:return`${o.IMAGES_PATH}sorciere.webp`;case e.k.VOYANTE:return`${o.IMAGES_PATH}voyante.webp`;case e.k.JOUEUR_FLUTE:return`${o.IMAGES_PATH}joueur_flute.webp`;case e.k.CORBEAU:return`${o.IMAGES_PATH}corbeau.webp`;case e.k.ENFANT_SAUVAGE:return`${o.IMAGES_PATH}enfant_sauvage.webp`;case e.k.SALVATEUR:return`${o.IMAGES_PATH}salvateur.webp`;case e.k.GRAND_MECHANT_LOUP:return`${o.IMAGES_PATH}grand_mechant_loup.webp`;case e.k.MONTREUR_OURS:return`${o.IMAGES_PATH}montreur_ours.webp`;case e.k.RENARD:return`${o.IMAGES_PATH}renard.webp`;case e.k.CHIEN_LOUP:return`${o.IMAGES_PATH}chien_loup.webp`;case e.k.SOEUR:return`${o.IMAGES_PATH}soeurs.webp`;default:return""}}}return o.IMAGES_PATH="assets/images/roles/",o.\u0275fac=function(r){return new(r||o)},o.\u0275pipe=i.Yjl({name:"playerRoleImage",type:o,pure:!0,standalone:!0}),o})()},5045:(C,h,s)=>{s.d(h,{L:()=>a});var e=s(6685),i=s(6689);let a=(()=>{class o{transform(r){switch(r){case e.k.VILLAGEOIS:return"Villageois";case e.k.LOUP_GAROU:return"Loup-Garou";case e.k.CHASSEUR:return"Chasseur";case e.k.CUPIDON:return"Cupidon";case e.k.PETITE_FILLE:return"Petite fille";case e.k.SORCIERE:return"Sorci\xe8re";case e.k.VOYANTE:return"Voyante";case e.k.JOUEUR_FLUTE:return"Joueur de fl\xfbte";case e.k.CORBEAU:return"Corbeau";case e.k.ENFANT_SAUVAGE:return"Enfant sauvage";case e.k.SALVATEUR:return"Salvateur";case e.k.GRAND_MECHANT_LOUP:return"Grand m\xe9chant loup";case e.k.MONTREUR_OURS:return"Montreur d'ours";case e.k.RENARD:return"Renard";case e.k.CHIEN_LOUP:return"Chien-Loup";case e.k.SOEUR:return"S\u0153ur";default:return""}}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275pipe=i.Yjl({name:"playerRoleName",type:o,pure:!0,standalone:!0}),o})()},625:(C,h,s)=>{s.d(h,{E:()=>a});var e=s(6907),i=s(6689);let a=(()=>{class o{transform(r){switch(r){case e.M.WOLF_TARGET:return"\u{1f43a}";case e.M.HEALTH_POTION:return"\u{1f49a}";case e.M.DEATH_POTION:return"\u{1f5a4}";case e.M.CAPTAIN:return"\u{1f396}\ufe0f";case e.M.LOVER:return"\u{1f495}";case e.M.PROTECTED:return"\u{1f6e1}\ufe0f";case e.M.NO_POWER:return"\u274c";case e.M.CHARMED:return"\u{1f3b6}";case e.M.CHILD_MODEL:return"\u{1f9d2}";case e.M.RAVEN:return"\u{1fab6}";default:return""}}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275pipe=i.Yjl({name:"playerStatus",type:o,pure:!0,standalone:!0}),o})()},2254:(C,h,s)=>{s.d(h,{y:()=>t});var e=s(5619),i=s(8180),a=s(7398),o=s(6685),l=s(3348),r=s(6689),n=s(439);let t=(()=>{class d{constructor(u,c){this.gameService=u,this.router=c,this.players=new e.X([])}getPlayers(){return this.players.asObservable()}addPlayer(u){const c=this.players.value,m={id:c.length,name:u,role:o.k.NOT_SELECTED,statuses:new Set,isDead:!1};this.players.next([...c,m])}removePlayer(u){const c=this.players.value;c.splice(u,1);const m=this.reindexPlayers(c);this.players.next(m)}reorderPlayers(u,c){const m=this.players.value,w=m.splice(u,1)[0];m.splice(c,0,w);const M=this.reindexPlayers(m);this.players.next(M)}replay(){this.gameService.getPlayers().pipe((0,i.q)(1),(0,a.U)(u=>u.map(c=>({...c,role:o.k.NOT_SELECTED,statuses:new Set,isDead:!1})))).subscribe(u=>{this.players.next(u),this.router.navigate(["roles-choice"])})}changeRole(u,c){const m=this.players.value,w=m.find(M=>M.id===u);void 0!==w&&(w.role=c,this.players.next(m))}createGame(){this.gameService.createGame(this.players.value),this.players.next([])}reindexPlayers(u){return[...u].map((c,m)=>({...c,id:m}))}}return d.\u0275fac=function(u){return new(u||d)(r.LFG(l.h),r.LFG(n.F0))},d.\u0275prov=r.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},1821:(C,h,s)=>{s.d(h,{h:()=>l});var e=s(5619),i=s(1374),a=s(6689),o=s(9182);let l=(()=>{class r{constructor(t){this.storageService=t,this.roles=new e.X(void 0),this.ROLES_KEY="RoleChoiceService_roles",this.initFromStorage()}getCurrentChosenRoles(){return this.roles.asObservable().pipe((0,i.P)(t=>void 0!==t))}setRoles(t){this.roles.next(t),this.storageService.set(this.ROLES_KEY,Array.from(t))}initFromStorage(){this.storageService.get(this.ROLES_KEY).subscribe(t=>{this.roles.next(new Set(t))})}}return r.\u0275fac=function(t){return new(t||r)(a.LFG(o.V))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},8540:(C,h,s)=>{s.d(h,{y:()=>e});const e=(i,a)=>a.id},2667:(C,h,s)=>{s.d(h,{A:()=>e});const e=(i,a)=>a},6728:(C,h,s)=>{s.d(h,{V:()=>e});const e=(i,a)=>a}}]);