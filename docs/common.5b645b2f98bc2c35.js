"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[8592],{1182:(M,h,o)=>{o.d(h,{c:()=>l});var e=o(6953),i=o(2966),r=o(8077);const l=(a,s)=>{let n,t;const u=(c,f,w)=>{if(typeof document>"u")return;const O=document.elementFromPoint(c,f);O&&s(O)?O!==n&&(d(),_(O,w)):d()},_=(c,f)=>{n=c,t||(t=n);const w=n;(0,e.w)(()=>w.classList.add("ion-activated")),f()},d=(c=!1)=>{if(!n)return;const f=n;(0,e.w)(()=>f.classList.remove("ion-activated")),c&&t!==n&&n.click(),n=void 0};return(0,r.createGesture)({el:a,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>u(c.currentX,c.currentY,i.a),onMove:c=>u(c.currentX,c.currentY,i.b),onEnd:()=>{d(!0),(0,i.h)(),t=void 0}})}},278:(M,h,o)=>{o.d(h,{g:()=>e});const e=(s,n,t,u,_)=>r(s[1],n[1],t[1],u[1],_).map(d=>i(s[0],n[0],t[0],u[0],d)),i=(s,n,t,u,_)=>_*(3*n*Math.pow(_-1,2)+_*(-3*t*_+3*t+u*_))-s*Math.pow(_-1,3),r=(s,n,t,u,_)=>a((u-=_)-3*(t-=_)+3*(n-=_)-(s-=_),3*t-6*n+3*s,3*n-3*s,s).filter(c=>c>=0&&c<=1),a=(s,n,t,u)=>{if(0===s)return((s,n,t)=>{const u=n*n-4*s*t;return u<0?[]:[(-n+Math.sqrt(u))/(2*s),(-n-Math.sqrt(u))/(2*s)]})(n,t,u);const _=(3*(t/=s)-(n/=s)*n)/3,d=(2*n*n*n-9*n*t+27*(u/=s))/27;if(0===_)return[Math.pow(-d,1/3)];if(0===d)return[Math.sqrt(-_),-Math.sqrt(-_)];const c=Math.pow(d/2,2)+Math.pow(_/3,3);if(0===c)return[Math.pow(d/2,.5)-n/3];if(c>0)return[Math.pow(-d/2+Math.sqrt(c),1/3)-Math.pow(d/2+Math.sqrt(c),1/3)-n/3];const f=Math.sqrt(Math.pow(-_/3,3)),w=Math.acos(-d/(2*Math.sqrt(Math.pow(-_/3,3)))),O=2*Math.pow(f,1/3);return[O*Math.cos(w/3)-n/3,O*Math.cos((w+2*Math.PI)/3)-n/3,O*Math.cos((w+4*Math.PI)/3)-n/3]}},1776:(M,h,o)=>{o.d(h,{i:()=>e});const e=i=>i&&""!==i.dir?"rtl"===i.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},3433:(M,h,o)=>{o.r(h),o.d(h,{startFocusVisible:()=>l});const e="ion-focused",r=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],l=a=>{let s=[],n=!0;const t=a?a.shadowRoot:document,u=a||document.body,_=C=>{s.forEach(g=>g.classList.remove(e)),C.forEach(g=>g.classList.add(e)),s=C},d=()=>{n=!1,_([])},c=C=>{n=r.includes(C.key),n||_([])},f=C=>{if(n&&void 0!==C.composedPath){const g=C.composedPath().filter(y=>!!y.classList&&y.classList.contains("ion-focusable"));_(g)}},w=()=>{t.activeElement===u&&_([])};return t.addEventListener("keydown",c),t.addEventListener("focusin",f),t.addEventListener("focusout",w),t.addEventListener("touchstart",d,{passive:!0}),t.addEventListener("mousedown",d),{destroy:()=>{t.removeEventListener("keydown",c),t.removeEventListener("focusin",f),t.removeEventListener("focusout",w),t.removeEventListener("touchstart",d),t.removeEventListener("mousedown",d)},setFocus:_}}},2587:(M,h,o)=>{o.d(h,{c:()=>i});var e=o(544);const i=s=>{const n=s;let t;return{hasLegacyControl:()=>{if(void 0===t){const _=void 0!==n.label||r(n),d=n.hasAttribute("aria-label")||n.hasAttribute("aria-labelledby")&&null===n.shadowRoot,c=(0,e.h)(n);t=!0===n.legacy||!_&&!d&&null!==c}return t}}},r=s=>null!==s.shadowRoot&&!!(l.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||a.includes(s.tagName)&&""!==s.textContent),l=["ION-RANGE"],a=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},2966:(M,h,o)=>{o.d(h,{a:()=>l,b:()=>a,c:()=>r,d:()=>n,h:()=>s});const e={getEngine(){var t;const u=window;return u.TapticEngine||(null===(t=u.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&u.Capacitor.Plugins.Haptics},available(){var t;const u=window;return!!this.getEngine()&&("web"!==(null===(t=u.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const u=this.getEngine();if(!u)return;const _=this.isCapacitor()?t.style.toUpperCase():t.style;u.impact({style:_})},notification(t){const u=this.getEngine();if(!u)return;const _=this.isCapacitor()?t.style.toUpperCase():t.style;u.notification({style:_})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>e.available(),r=()=>{i()&&e.selection()},l=()=>{i()&&e.selectionStart()},a=()=>{i()&&e.selectionChanged()},s=()=>{i()&&e.selectionEnd()},n=t=>{i()&&e.impact(t)}},9993:(M,h,o)=>{o.d(h,{a:()=>e,b:()=>f,c:()=>n,d:()=>w,e:()=>v,f:()=>s,g:()=>O,h:()=>r,i:()=>i,j:()=>P,k:()=>p,l:()=>t,m:()=>d,n:()=>C,o:()=>_,p:()=>a,q:()=>l,r:()=>E,s:()=>T,t:()=>c,u:()=>g,v:()=>y,w:()=>u});const e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",T="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4435:(M,h,o)=>{o.d(h,{I:()=>s,a:()=>_,b:()=>a,c:()=>f,d:()=>O,f:()=>d,g:()=>u,i:()=>t,p:()=>w,r:()=>C,s:()=>c});var e=o(5861),i=o(544),r=o(7690);const a="ion-content",s=".ion-content-scroll-host",n=`${a}, ${s}`,t=g=>"ION-CONTENT"===g.tagName,u=function(){var g=(0,e.Z)(function*(y){return t(y)?(yield new Promise(E=>(0,i.c)(y,E)),y.getScrollElement()):y});return function(E){return g.apply(this,arguments)}}(),_=g=>g.querySelector(s)||g.querySelector(n),d=g=>g.closest(n),c=(g,y)=>t(g)?g.scrollToTop(y):Promise.resolve(g.scrollTo({top:0,left:0,behavior:y>0?"smooth":"auto"})),f=(g,y,E,P)=>t(g)?g.scrollByPoint(y,E,P):Promise.resolve(g.scrollBy({top:E,left:y,behavior:P>0?"smooth":"auto"})),w=g=>(0,r.b)(g,a),O=g=>{if(t(g)){const E=g.scrollY;return g.scrollY=!1,E}return g.style.setProperty("overflow","hidden"),!0},C=(g,y)=>{t(g)?g.scrollY=y:g.style.removeProperty("overflow")}},1685:(M,h,o)=>{o.d(h,{c:()=>l,g:()=>a});var e=o(7643),i=o(544),r=o(7690);const l=(n,t,u)=>{let _,d;void 0!==e.w&&"MutationObserver"in e.w&&(_=new MutationObserver(O=>{for(const C of O)for(const g of C.addedNodes)if(g.nodeType===Node.ELEMENT_NODE&&g.slot===t)return u(),void(0,i.r)(()=>c(g))}),_.observe(n,{childList:!0}));const c=O=>{var C;d&&(d.disconnect(),d=void 0),d=new MutationObserver(g=>{u();for(const y of g)for(const E of y.removedNodes)E.nodeType===Node.ELEMENT_NODE&&E.slot===t&&w()}),d.observe(null!==(C=O.parentElement)&&void 0!==C?C:O,{subtree:!0,childList:!0})},w=()=>{d&&(d.disconnect(),d=void 0)};return{destroy:()=>{_&&(_.disconnect(),_=void 0),w()}}},a=(n,t,u)=>{const _=null==n?0:n.toString().length,d=s(_,t);if(void 0===u)return d;try{return u(_,t)}catch(c){return(0,r.a)("Exception in provided `counterFormatter`.",c),d}},s=(n,t)=>`${n} / ${t}`},6884:(M,h,o)=>{o.d(h,{K:()=>r,a:()=>i});var e=o(7643),i=(()=>((i=i||{}).Body="body",i.Ionic="ionic",i.Native="native",i.None="none",i))();const r={getEngine(){var l;return(null===(l=null==e.w?void 0:e.w.Capacitor)||void 0===l?void 0:l.isPluginAvailable("Keyboard"))&&(null==e.w?void 0:e.w.Capacitor.Plugins.Keyboard)},getResizeMode(){const l=this.getEngine();return l?.getResizeMode?l.getResizeMode().catch(a=>{if("UNIMPLEMENTED"!==a.code)throw a}):Promise.resolve(void 0)}}},2624:(M,h,o)=>{o.r(h),o.d(h,{KEYBOARD_DID_CLOSE:()=>l,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>P,keyboardDidClose:()=>C,keyboardDidOpen:()=>w,keyboardDidResize:()=>O,resetKeyboardAssist:()=>u,setKeyboardClose:()=>f,setKeyboardOpen:()=>c,startKeyboardAssist:()=>_,trackViewportChanges:()=>E});var e=o(6884);o(7643);const r="ionKeyboardDidShow",l="ionKeyboardDidHide";let s={},n={},t=!1;const u=()=>{s={},n={},t=!1},_=p=>{if(e.K.getEngine())d(p);else{if(!p.visualViewport)return;n=P(p.visualViewport),p.visualViewport.onresize=()=>{E(p),w()||O(p)?c(p):C(p)&&f(p)}}},d=p=>{p.addEventListener("keyboardDidShow",T=>c(p,T)),p.addEventListener("keyboardDidHide",()=>f(p))},c=(p,T)=>{g(p,T),t=!0},f=p=>{y(p),t=!1},w=()=>!t&&s.width===n.width&&(s.height-n.height)*n.scale>150,O=p=>t&&!C(p),C=p=>t&&n.height===p.innerHeight,g=(p,T)=>{const D=new CustomEvent(r,{detail:{keyboardHeight:T?T.keyboardHeight:p.innerHeight-n.height}});p.dispatchEvent(D)},y=p=>{const T=new CustomEvent(l);p.dispatchEvent(T)},E=p=>{s=Object.assign({},n),n=P(p.visualViewport)},P=p=>({width:Math.round(p.width),height:Math.round(p.height),offsetTop:p.offsetTop,offsetLeft:p.offsetLeft,pageTop:p.pageTop,pageLeft:p.pageLeft,scale:p.scale})},218:(M,h,o)=>{o.d(h,{c:()=>s});var e=o(5861),i=o(7643),r=o(6884);const l=n=>void 0===i.d||n===r.a.None||void 0===n?null:i.d.querySelector("ion-app")??i.d.body,a=n=>{const t=l(n);return null===t?0:t.clientHeight},s=function(){var n=(0,e.Z)(function*(t){let u,_,d,c;const f=function(){var y=(0,e.Z)(function*(){const E=yield r.K.getResizeMode(),P=void 0===E?void 0:E.mode;u=()=>{void 0===c&&(c=a(P)),d=!0,w(d,P)},_=()=>{d=!1,w(d,P)},null==i.w||i.w.addEventListener("keyboardWillShow",u),null==i.w||i.w.addEventListener("keyboardWillHide",_)});return function(){return y.apply(this,arguments)}}(),w=(y,E)=>{t&&t(y,O(E))},O=y=>{if(0===c||c===a(y))return;const E=l(y);return null!==E?new Promise(P=>{const T=new ResizeObserver(()=>{E.clientHeight===c&&(T.disconnect(),P())});T.observe(E)}):void 0};return yield f(),{init:f,destroy:()=>{null==i.w||i.w.removeEventListener("keyboardWillShow",u),null==i.w||i.w.removeEventListener("keyboardWillHide",_),u=_=void 0},isKeyboardVisible:()=>d}});return function(u){return n.apply(this,arguments)}}()},9718:(M,h,o)=>{o.d(h,{c:()=>r});var e=o(7643),i=o(544);const r=(l,a,s)=>{let n;const t=()=>!(void 0===a()||void 0!==l.label||null===s()),_=()=>{const c=a();if(void 0===c)return;if(!t())return void c.style.removeProperty("width");const f=s().scrollWidth;if(0===f&&null===c.offsetParent&&void 0!==e.w&&"IntersectionObserver"in e.w){if(void 0!==n)return;const w=n=new IntersectionObserver(O=>{1===O[0].intersectionRatio&&(_(),w.disconnect(),n=void 0)},{threshold:.01,root:l});w.observe(c)}else c.style.setProperty("width",.75*f+"px")};return{calculateNotchWidth:()=>{t()&&(0,i.r)(()=>{_()})},destroy:()=>{n&&(n.disconnect(),n=void 0)}}}},1173:(M,h,o)=>{o.d(h,{S:()=>i});const i={bubbles:{dur:1e3,circles:9,fn:(r,l,a)=>{const s=r*l/a-r+"ms",n=2*Math.PI*l/a;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(r,l,a)=>{const s=l/a,n=r*s-r+"ms",t=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(r,l)=>({r:6,style:{left:32-32*l+"%","animation-delay":-110*l+"ms"}})},lines:{dur:1e3,lines:8,fn:(r,l,a)=>({y1:14,y2:26,style:{transform:`rotate(${360/a*l+(l<a/2?180:-180)}deg)`,"animation-delay":r*l/a-r+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(r,l,a)=>({y1:12,y2:20,style:{transform:`rotate(${360/a*l+(l<a/2?180:-180)}deg)`,"animation-delay":r*l/a-r+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(r,l,a)=>({y1:17,y2:29,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":r*l/a-r+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(r,l,a)=>({y1:12,y2:20,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":r*l/a-r+"ms"}})}}},4666:(M,h,o)=>{o.r(h),o.d(h,{createSwipeBackGesture:()=>a});var e=o(544),i=o(1776),r=o(8077);o(4587);const a=(s,n,t,u,_)=>{const d=s.ownerDocument.defaultView;let c=(0,i.i)(s);const w=E=>c?-E.deltaX:E.deltaX;return(0,r.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:E=>(c=(0,i.i)(s),(E=>{const{startX:p}=E;return c?p>=d.innerWidth-50:p<=50})(E)&&n()),onStart:t,onMove:E=>{const p=w(E)/d.innerWidth;u(p)},onEnd:E=>{const P=w(E),p=d.innerWidth,T=P/p,v=(E=>c?-E.velocityX:E.velocityX)(E),m=v>=0&&(v>.2||P>p/2),R=(m?1-T:T)*p;let S=0;if(R>5){const A=R/Math.abs(v);S=Math.min(A,540)}_(m,T<=0?.01:(0,e.l)(0,T,.9999),S)}})}},8639:(M,h,o)=>{o.d(h,{w:()=>e});const e=(l,a,s)=>{if(typeof MutationObserver>"u")return;const n=new MutationObserver(t=>{s(i(t,a))});return n.observe(l,{childList:!0,subtree:!0}),n},i=(l,a)=>{let s;return l.forEach(n=>{for(let t=0;t<n.addedNodes.length;t++)s=r(n.addedNodes[t],a)||s}),s},r=(l,a)=>1!==l.nodeType?void 0:(l.tagName===a.toUpperCase()?[l]:Array.from(l.querySelectorAll(a))).find(n=>n.value===l.value)},4978:(M,h,o)=>{o.d(h,{G:()=>l});var e=o(6814),i=o(5548),r=o(6689);let l=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=r.Xpm({type:a,selectors:[["lgmj-header"]],inputs:{title:"title"},standalone:!0,features:[r.jDz],decls:6,vars:1,consts:[["slot","start"]],template:function(n,t){1&n&&(r.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),r._UZ(3,"ion-menu-button"),r.qZA(),r.TgZ(4,"ion-title"),r._uU(5),r.qZA()()()),2&n&&(r.xp6(5),r.Oqu(t.title))},dependencies:[e.ez,i.Pc,i.Sm,i.Gu,i.fG,i.wd,i.sr]}),a})()},5323:(M,h,o)=>{o.d(h,{l:()=>T});var e=o(6689),i=o(6814),r=o(5548),l=o(3575),a=o(5480),s=o(721),n=o(4360),t=o(6685),u=o(2667),_=o(6728);function d(v,D){1&v&&e._UZ(0,"ion-icon",6)}function c(v,D){if(1&v&&(e.TgZ(0,"ion-thumbnail",7),e._UZ(1,"img",8),e.ALo(2,"playerRoleImage"),e.ALo(3,"playerRoleName"),e.qZA()),2&v){const m=e.oxw();e.xp6(1),e.Q6J("src",e.lcZ(2,2,m.player.role),e.LSH)("alt",e.lcZ(3,4,m.player.role))}}function f(v,D){1&v&&e.GkF(0)}function w(v,D){if(1&v){const m=e.EpF();e.TgZ(0,"ion-checkbox",12),e.NdJ("ionChange",function(R){e.CHM(m);const S=e.oxw(2);return e.KtG(S.onCheckedChange(R))}),e.qZA()}if(2&v){const m=e.oxw(2);e.Q6J("checked",m.checked)}}function O(v,D){if(1&v&&e._UZ(0,"ion-radio",13),2&v){const m=e.oxw(2);e.Q6J("value",m.player.id)}}function C(v,D){if(1&v&&(e.ynx(0,9),e.YNc(1,w,1,1,"ion-checkbox",10),e.YNc(2,O,1,1,"ion-radio",11),e.BQk()),2&v){const m=e.oxw();e.Q6J("ngSwitch",m.displayMode),e.xp6(1),e.Q6J("ngSwitchCase",m.playerDisplayModeEnum.SELECT_MULTI),e.xp6(1),e.Q6J("ngSwitchCase",m.playerDisplayModeEnum.SELECT_SINGLE)}}function g(v,D){if(1&v&&(e.TgZ(0,"ion-select-option",18),e._uU(1),e.ALo(2,"playerRoleName"),e.qZA()),2&v){const m=D.$implicit;e.Q6J("value",m),e.xp6(1),e.Oqu(e.lcZ(2,2,m))}}function y(v,D){if(1&v){const m=e.EpF();e.TgZ(0,"ion-select",16),e.NdJ("ionChange",function(R){e.CHM(m);const S=e.oxw(2);return e.KtG(S.onRoleChange(R))}),e.YNc(1,g,3,4,"ion-select-option",17),e.qZA()}if(2&v){const m=e.oxw(2);e.Q6J("legacy",!0)("interfaceOptions",m.customInterfaceOptions)("value",m.player.role),e.xp6(1),e.Q6J("ngForOf",m.sortedRoles)("ngForTrackBy",m.roleTrackBy)}}function E(v,D){if(1&v&&(e.TgZ(0,"span",21),e._uU(1),e.ALo(2,"playerStatus"),e.qZA()),2&v){const m=D.$implicit;e.xp6(1),e.Oqu(e.lcZ(2,1,m))}}function P(v,D){if(1&v&&(e.TgZ(0,"div",19),e.YNc(1,E,3,3,"span",20),e.qZA()),2&v){const m=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",m.player.statuses)("ngForTrackBy",m.statusTrackBy)}}function p(v,D){if(1&v&&(e.ynx(0,9),e.YNc(1,y,2,5,"ion-select",14),e.YNc(2,P,2,2,"div",15),e.BQk()),2&v){const m=e.oxw();e.Q6J("ngSwitch",m.displayMode),e.xp6(1),e.Q6J("ngSwitchCase",m.playerDisplayModeEnum.EDIT_ROLE)}}let T=(()=>{class v{set selectableRoles(m){const L=[...m];!this.noSelfRole&&this.player.role!==t.k.NOT_SELECTED&&!L.includes(this.player.role)&&L.push(this.player.role),L.sort((R,S)=>this.playerRoleNamePipe.transform(R).localeCompare(this.playerRoleNamePipe.transform(S))),this.sortedRoles=L}constructor(m){this.playerRoleNamePipe=m,this.displayMode=s.d.DEFAULT,this.disabled=!1,this.checked=!1,this.noSelfRole=!1,this.checkedChange=new e.vpe,this.roleChange=new e.vpe,this.roleTrackBy=u.A,this.statusTrackBy=_.V,this.playerDisplayModeEnum=s.d,this.playerRoleEnum=t.k,this.sortedRoles=[],this.customInterfaceOptions={header:"CHOISIR UN R\xd4LE",buttons:[]}}onCheckedChange(m){this.checkedChange.emit(m.detail.checked)}onRoleChange(m){this.roleChange.emit(m.detail.value)}}return v.\u0275fac=function(m){return new(m||v)(e.Y36(l.L))},v.\u0275cmp=e.Xpm({type:v,selectors:[["lgmj-player"]],inputs:{player:"player",displayMode:"displayMode",disabled:"disabled",checked:"checked",noSelfRole:"noSelfRole",selectableRoles:"selectableRoles"},outputs:{checkedChange:"checkedChange",roleChange:"roleChange"},standalone:!0,features:[e._Bn([l.L]),e.jDz],decls:14,vars:10,consts:[[3,"disabled","color"],["slot","start","name","skull",4,"ngIf","ngIfElse"],["slot","start",4,"ngIf"],[4,"ngTemplateOutlet"],["formElement",""],["endElement",""],["slot","start","name","skull"],["slot","start"],[3,"src","alt"],[3,"ngSwitch"],["slot","start",3,"checked","ionChange",4,"ngSwitchCase"],["slot","start",3,"value",4,"ngSwitchCase"],["slot","start",3,"checked","ionChange"],["slot","start",3,"value"],["placeholder","R\xf4le","interface","action-sheet","cancelText","Annuler",3,"legacy","interfaceOptions","value","ionChange",4,"ngSwitchCase"],["slot","end",4,"ngSwitchDefault"],["placeholder","R\xf4le","interface","action-sheet","cancelText","Annuler",3,"legacy","interfaceOptions","value","ionChange"],[3,"value",4,"ngFor","ngForOf","ngForTrackBy"],[3,"value"],["slot","end"],["class","status-icon",4,"ngFor","ngForOf","ngForTrackBy"],[1,"status-icon"]],template:function(m,L){if(1&m&&(e.TgZ(0,"ion-item",0),e.YNc(1,d,1,0,"ion-icon",1),e.YNc(2,c,4,6,"ion-thumbnail",2),e.TgZ(3,"ion-label")(4,"h2"),e._uU(5),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.ALo(8,"playerRoleName"),e.qZA()(),e.YNc(9,f,1,0,"ng-container",3),e.qZA(),e.YNc(10,C,3,3,"ng-template",null,4,e.W1O),e.YNc(12,p,3,2,"ng-template",null,5,e.W1O)),2&m){const R=e.MAs(11),S=e.MAs(13);e.Q6J("disabled",L.player.isDead||L.disabled)("color",L.player.isDead?"medium":""),e.xp6(1),e.Q6J("ngIf",L.player.isDead)("ngIfElse",R),e.xp6(1),e.Q6J("ngIf",L.player.role!==L.playerRoleEnum.NOT_SELECTED),e.xp6(3),e.Oqu(L.player.name),e.xp6(2),e.Oqu(e.lcZ(8,8,L.player.role)),e.xp6(2),e.Q6J("ngTemplateOutlet",S)}},dependencies:[i.ez,i.sg,i.O5,i.tP,i.RF,i.n9,i.ED,r.Pc,r.nz,r.gu,r.Ie,r.Q$,r.B7,r.t9,r.n0,r.Bs,r.w,r.U5,r.QI,l.L,a.$,n.E],styles:[".status-icon[_ngcontent-%COMP%]{font-size:20px}"]}),v})()},721:(M,h,o)=>{o.d(h,{d:()=>e});var e=(()=>((e=e||{})[e.DEFAULT=0]="DEFAULT",e[e.SELECT_SINGLE=1]="SELECT_SINGLE",e[e.SELECT_MULTI=2]="SELECT_MULTI",e[e.EDIT_ROLE=3]="EDIT_ROLE",e))()},5480:(M,h,o)=>{o.d(h,{$:()=>i});var e=o(6689);let i=(()=>{class r{transform(a){return`${r.IMAGES_PATH}${a.toLowerCase()}.webp`}}return r.IMAGES_PATH="assets/images/roles/",r.\u0275fac=function(a){return new(a||r)},r.\u0275pipe=e.Yjl({name:"playerRoleImage",type:r,pure:!0,standalone:!0}),r})()},3575:(M,h,o)=>{o.d(h,{L:()=>l});var e=o(6685);const i={[e.k.NOT_SELECTED]:"",[e.k.VILLAGEOIS]:"Villageois",[e.k.LOUP_GAROU]:"Loup-Garou",[e.k.CHASSEUR]:"Chasseur",[e.k.CUPIDON]:"Cupidon",[e.k.PETITE_FILLE]:"Petite fille",[e.k.SORCIERE]:"Sorci\xe8re",[e.k.VOYANTE]:"Voyante",[e.k.JOUEUR_FLUTE]:"Joueur de fl\xfbte",[e.k.CORBEAU]:"Corbeau",[e.k.ENFANT_SAUVAGE]:"Enfant sauvage",[e.k.SALVATEUR]:"Salvateur",[e.k.GRAND_MECHANT_LOUP]:"Grand m\xe9chant loup",[e.k.MONTREUR_OURS]:"Montreur d'ours",[e.k.RENARD]:"Renard",[e.k.CHIEN_LOUP]:"Chien-Loup",[e.k.SOEUR]:"S\u0153ur",[e.k.FRERE]:"Fr\xe8re"};var r=o(6689);let l=(()=>{class a{transform(n){return i[n]}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275pipe=r.Yjl({name:"playerRoleName",type:a,pure:!0,standalone:!0}),a})()},4360:(M,h,o)=>{o.d(h,{E:()=>l});var e=o(6907);const i={[e.M.WOLF_TARGET]:"\u{1f43a}",[e.M.HEALTH_POTION]:"\u{1f49a}",[e.M.DEATH_POTION]:"\u{1f5a4}",[e.M.CAPTAIN]:"\u{1f396}\ufe0f",[e.M.LOVER]:"\u{1f495}",[e.M.PROTECTED]:"\u{1f6e1}\ufe0f",[e.M.NO_POWER]:"\u274c",[e.M.CHARMED]:"\u{1f3b6}",[e.M.CHILD_MODEL]:"\u{1f9d2}",[e.M.RAVEN]:"\u{1fab6}"};var r=o(6689);let l=(()=>{class a{transform(n){return i[n]}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275pipe=r.Yjl({name:"playerStatus",type:a,pure:!0,standalone:!0}),a})()},2254:(M,h,o)=>{o.d(h,{y:()=>t});var e=o(5619),i=o(8180),r=o(7398),l=o(6685),a=o(5819),s=o(6689),n=o(439);let t=(()=>{class u{constructor(d,c){this.gameService=d,this.router=c,this.players=new e.X([])}getPlayers(){return this.players.asObservable()}addPlayer(d){const c=this.players.value,f={id:c.length,name:d,role:l.k.NOT_SELECTED,statuses:new Set,isDead:!1};this.players.next([...c,f])}removePlayer(d){const c=this.players.value;c.splice(d,1);const f=this.reindexPlayers(c);this.players.next(f)}reorderPlayers(d,c){const f=this.players.value,w=f.splice(d,1)[0];f.splice(c,0,w);const O=this.reindexPlayers(f);this.players.next(O)}replay(){this.gameService.getPlayers().pipe((0,i.q)(1),(0,r.U)(d=>d.map(c=>({...c,role:l.k.NOT_SELECTED,statuses:new Set,isDead:!1})))).subscribe(d=>{this.players.next(d),this.router.navigate(["roles-choice"])})}changeRole(d,c){const f=this.players.value,w=f.find(O=>O.id===d);void 0!==w&&(w.role=c,this.players.next(f))}createGame(){this.gameService.createGame(this.players.value),this.players.next([])}reindexPlayers(d){return[...d].map((c,f)=>({...c,id:f}))}}return u.\u0275fac=function(d){return new(d||u)(s.LFG(a.h),s.LFG(n.F0))},u.\u0275prov=s.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},1821:(M,h,o)=>{o.d(h,{h:()=>a});var e=o(5619),i=o(1374),r=o(6689),l=o(9182);let a=(()=>{class s{constructor(t){this.storageService=t,this.roles=new e.X(void 0),this.ROLES_KEY="RoleChoiceService_roles",this.initFromStorage()}getCurrentChosenRoles(){return this.roles.asObservable().pipe((0,i.P)(t=>void 0!==t))}setRoles(t){this.roles.next(t),this.storageService.set(this.ROLES_KEY,Array.from(t))}initFromStorage(){this.storageService.get(this.ROLES_KEY).subscribe(t=>{this.roles.next(new Set(t))})}}return s.\u0275fac=function(t){return new(t||s)(r.LFG(l.V))},s.\u0275prov=r.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},8540:(M,h,o)=>{o.d(h,{y:()=>e});const e=(i,r)=>r.id},2667:(M,h,o)=>{o.d(h,{A:()=>e});const e=(i,r)=>r},6728:(M,h,o)=>{o.d(h,{V:()=>e});const e=(i,r)=>r}}]);