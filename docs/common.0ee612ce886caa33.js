"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[8592],{9629:(O,h,s)=>{s.d(h,{c:()=>l});var e=s(5349),a=s(967),c=s(9203);const l=(i,r)=>{let t,o;const _=(u,E,w)=>{if(typeof document>"u")return;const C=document.elementFromPoint(u,E);C&&r(C)?C!==t&&(n(),d(C,w)):n()},d=(u,E)=>{t=u,o||(o=t);const w=t;(0,e.w)(()=>w.classList.add("ion-activated")),E()},n=(u=!1)=>{if(!t)return;const E=t;(0,e.w)(()=>E.classList.remove("ion-activated")),u&&o!==t&&t.click(),t=void 0};return(0,c.createGesture)({el:i,gestureName:"buttonActiveDrag",threshold:0,onStart:u=>_(u.currentX,u.currentY,a.a),onMove:u=>_(u.currentX,u.currentY,a.b),onEnd:()=>{n(!0),(0,a.h)(),o=void 0}})}},4874:(O,h,s)=>{s.d(h,{g:()=>a});var e=s(6225);const a=()=>{if(void 0!==e.w)return e.w.Capacitor}},5149:(O,h,s)=>{s.d(h,{g:()=>e});const e=(r,t,o,_,d)=>c(r[1],t[1],o[1],_[1],d).map(n=>a(r[0],t[0],o[0],_[0],n)),a=(r,t,o,_,d)=>d*(3*t*Math.pow(d-1,2)+d*(-3*o*d+3*o+_*d))-r*Math.pow(d-1,3),c=(r,t,o,_,d)=>i((_-=d)-3*(o-=d)+3*(t-=d)-(r-=d),3*o-6*t+3*r,3*t-3*r,r).filter(u=>u>=0&&u<=1),i=(r,t,o,_)=>{if(0===r)return((r,t,o)=>{const _=t*t-4*r*o;return _<0?[]:[(-t+Math.sqrt(_))/(2*r),(-t-Math.sqrt(_))/(2*r)]})(t,o,_);const d=(3*(o/=r)-(t/=r)*t)/3,n=(2*t*t*t-9*t*o+27*(_/=r))/27;if(0===d)return[Math.pow(-n,1/3)];if(0===n)return[Math.sqrt(-d),-Math.sqrt(-d)];const u=Math.pow(n/2,2)+Math.pow(d/3,3);if(0===u)return[Math.pow(n/2,.5)-t/3];if(u>0)return[Math.pow(-n/2+Math.sqrt(u),1/3)-Math.pow(n/2+Math.sqrt(u),1/3)-t/3];const E=Math.sqrt(Math.pow(-d/3,3)),w=Math.acos(-n/(2*Math.sqrt(Math.pow(-d/3,3)))),C=2*Math.pow(E,1/3);return[C*Math.cos(w/3)-t/3,C*Math.cos((w+2*Math.PI)/3)-t/3,C*Math.cos((w+4*Math.PI)/3)-t/3]}},5085:(O,h,s)=>{s.d(h,{i:()=>e});const e=a=>a&&""!==a.dir?"rtl"===a.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},2779:(O,h,s)=>{s.r(h),s.d(h,{startFocusVisible:()=>l});const e="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],l=i=>{let r=[],t=!0;const o=i?i.shadowRoot:document,_=i||document.body,d=M=>{r.forEach(f=>f.classList.remove(e)),M.forEach(f=>f.classList.add(e)),r=M},n=()=>{t=!1,d([])},u=M=>{t=c.includes(M.key),t||d([])},E=M=>{if(t&&void 0!==M.composedPath){const f=M.composedPath().filter(y=>!!y.classList&&y.classList.contains("ion-focusable"));d(f)}},w=()=>{o.activeElement===_&&d([])};return o.addEventListener("keydown",u),o.addEventListener("focusin",E),o.addEventListener("focusout",w),o.addEventListener("touchstart",n,{passive:!0}),o.addEventListener("mousedown",n),{destroy:()=>{o.removeEventListener("keydown",u),o.removeEventListener("focusin",E),o.removeEventListener("focusout",w),o.removeEventListener("touchstart",n),o.removeEventListener("mousedown",n)},setFocus:d}}},9988:(O,h,s)=>{s.d(h,{c:()=>a});var e=s(839);const a=r=>{const t=r;let o;return{hasLegacyControl:()=>{if(void 0===o){const d=void 0!==t.label||c(t),n=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,u=(0,e.h)(t);o=!0===t.legacy||!d&&!n&&null!==u}return o}}},c=r=>!!(l.includes(r.tagName)&&null!==r.querySelector('[slot="label"]')||i.includes(r.tagName)&&""!==r.textContent),l=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],i=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},967:(O,h,s)=>{s.d(h,{I:()=>a,a:()=>t,b:()=>o,c:()=>r,d:()=>d,h:()=>_});var e=s(4874),a=function(n){return n.Heavy="HEAVY",n.Medium="MEDIUM",n.Light="LIGHT",n}(a||{});const l={getEngine(){const n=window.TapticEngine;if(n)return n;const u=(0,e.g)();return u?.isPluginAvailable("Haptics")?u.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const u=(0,e.g)();return"web"!==u?.getPlatform()||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,e.g)(),impact(n){const u=this.getEngine();if(!u)return;const E=this.isCapacitor()?n.style:n.style.toLowerCase();u.impact({style:E})},notification(n){const u=this.getEngine();if(!u)return;const E=this.isCapacitor()?n.type:n.type.toLowerCase();u.notification({type:E})},selection(){const n=this.isCapacitor()?a.Light:"light";this.impact({style:n})},selectionStart(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},i=()=>l.available(),r=()=>{i()&&l.selection()},t=()=>{i()&&l.selectionStart()},o=()=>{i()&&l.selectionChanged()},_=()=>{i()&&l.selectionEnd()},d=n=>{i()&&l.impact(n)}},2874:(O,h,s)=>{s.d(h,{I:()=>r,a:()=>d,b:()=>i,c:()=>E,d:()=>C,f:()=>n,g:()=>_,i:()=>o,p:()=>w,r:()=>M,s:()=>u});var e=s(5861),a=s(839),c=s(6710);const i="ion-content",r=".ion-content-scroll-host",t=`${i}, ${r}`,o=f=>"ION-CONTENT"===f.tagName,_=function(){var f=(0,e.Z)(function*(y){return o(y)?(yield new Promise(v=>(0,a.c)(y,v)),y.getScrollElement()):y});return function(v){return f.apply(this,arguments)}}(),d=f=>f.querySelector(r)||f.querySelector(t),n=f=>f.closest(t),u=(f,y)=>o(f)?f.scrollToTop(y):Promise.resolve(f.scrollTo({top:0,left:0,behavior:y>0?"smooth":"auto"})),E=(f,y,v,T)=>o(f)?f.scrollByPoint(y,v,T):Promise.resolve(f.scrollBy({top:v,left:y,behavior:T>0?"smooth":"auto"})),w=f=>(0,c.b)(f,i),C=f=>{if(o(f)){const v=f.scrollY;return f.scrollY=!1,v}return f.style.setProperty("overflow","hidden"),!0},M=(f,y)=>{o(f)?f.scrollY=y:f.style.removeProperty("overflow")}},5307:(O,h,s)=>{s.d(h,{a:()=>e,b:()=>E,c:()=>t,d:()=>w,e:()=>p,f:()=>r,g:()=>C,h:()=>c,i:()=>a,j:()=>T,k:()=>L,l:()=>o,m:()=>n,n:()=>M,o:()=>d,p:()=>i,q:()=>l,r:()=>v,s:()=>g,t:()=>u,u:()=>f,v:()=>y,w:()=>_});const e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",T="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2894:(O,h,s)=>{s.d(h,{c:()=>l,g:()=>i});var e=s(6225),a=s(839),c=s(6710);const l=(t,o,_)=>{let d,n;void 0!==e.w&&"MutationObserver"in e.w&&(d=new MutationObserver(C=>{for(const M of C)for(const f of M.addedNodes)if(f.nodeType===Node.ELEMENT_NODE&&f.slot===o)return _(),void(0,a.r)(()=>u(f))}),d.observe(t,{childList:!0}));const u=C=>{var M;n&&(n.disconnect(),n=void 0),n=new MutationObserver(f=>{_();for(const y of f)for(const v of y.removedNodes)v.nodeType===Node.ELEMENT_NODE&&v.slot===o&&w()}),n.observe(null!==(M=C.parentElement)&&void 0!==M?M:C,{subtree:!0,childList:!0})},w=()=>{n&&(n.disconnect(),n=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),w()}}},i=(t,o,_)=>{const d=null==t?0:t.toString().length,n=r(d,o);if(void 0===_)return n;try{return _(d,o)}catch(u){return(0,c.a)("Exception in provided `counterFormatter`.",u),n}},r=(t,o)=>`${t} / ${o}`},7484:(O,h,s)=>{s.d(h,{K:()=>l,a:()=>c});var e=s(4874),a=function(i){return i.Unimplemented="UNIMPLEMENTED",i.Unavailable="UNAVAILABLE",i}(a||{}),c=function(i){return i.Body="body",i.Ionic="ionic",i.Native="native",i.None="none",i}(c||{});const l={getEngine(){const i=(0,e.g)();if(i?.isPluginAvailable("Keyboard"))return i.Plugins.Keyboard},getResizeMode(){const i=this.getEngine();return i?.getResizeMode?i.getResizeMode().catch(r=>{if(r.code!==a.Unimplemented)throw r}):Promise.resolve(void 0)}}},1612:(O,h,s)=>{s.r(h),s.d(h,{KEYBOARD_DID_CLOSE:()=>i,KEYBOARD_DID_OPEN:()=>l,copyVisualViewport:()=>L,keyboardDidClose:()=>f,keyboardDidOpen:()=>C,keyboardDidResize:()=>M,resetKeyboardAssist:()=>d,setKeyboardClose:()=>w,setKeyboardOpen:()=>E,startKeyboardAssist:()=>n,trackViewportChanges:()=>T});var e=s(7484);s(4874),s(6225);const l="ionKeyboardDidShow",i="ionKeyboardDidHide";let t={},o={},_=!1;const d=()=>{t={},o={},_=!1},n=g=>{if(e.K.getEngine())u(g);else{if(!g.visualViewport)return;o=L(g.visualViewport),g.visualViewport.onresize=()=>{T(g),C()||M(g)?E(g):f(g)&&w(g)}}},u=g=>{g.addEventListener("keyboardDidShow",p=>E(g,p)),g.addEventListener("keyboardDidHide",()=>w(g))},E=(g,p)=>{y(g,p),_=!0},w=g=>{v(g),_=!1},C=()=>!_&&t.width===o.width&&(t.height-o.height)*o.scale>150,M=g=>_&&!f(g),f=g=>_&&o.height===g.innerHeight,y=(g,p)=>{const m=new CustomEvent(l,{detail:{keyboardHeight:p?p.keyboardHeight:g.innerHeight-o.height}});g.dispatchEvent(m)},v=g=>{const p=new CustomEvent(i);g.dispatchEvent(p)},T=g=>{t=Object.assign({},o),o=L(g.visualViewport)},L=g=>({width:Math.round(g.width),height:Math.round(g.height),offsetTop:g.offsetTop,offsetLeft:g.offsetLeft,pageTop:g.pageTop,pageLeft:g.pageLeft,scale:g.scale})},3459:(O,h,s)=>{s.d(h,{c:()=>r});var e=s(5861),a=s(6225),c=s(7484);const l=t=>void 0===a.d||t===c.a.None||void 0===t?null:a.d.querySelector("ion-app")??a.d.body,i=t=>{const o=l(t);return null===o?0:o.clientHeight},r=function(){var t=(0,e.Z)(function*(o){let _,d,n,u;const E=function(){var y=(0,e.Z)(function*(){const v=yield c.K.getResizeMode(),T=void 0===v?void 0:v.mode;_=()=>{void 0===u&&(u=i(T)),n=!0,w(n,T)},d=()=>{n=!1,w(n,T)},null==a.w||a.w.addEventListener("keyboardWillShow",_),null==a.w||a.w.addEventListener("keyboardWillHide",d)});return function(){return y.apply(this,arguments)}}(),w=(y,v)=>{o&&o(y,C(v))},C=y=>{if(0===u||u===i(y))return;const v=l(y);return null!==v?new Promise(T=>{const g=new ResizeObserver(()=>{v.clientHeight===u&&(g.disconnect(),T())});g.observe(v)}):void 0};return yield E(),{init:E,destroy:()=>{null==a.w||a.w.removeEventListener("keyboardWillShow",_),null==a.w||a.w.removeEventListener("keyboardWillHide",d),_=d=void 0},isKeyboardVisible:()=>n}});return function(_){return t.apply(this,arguments)}}()},3830:(O,h,s)=>{s.d(h,{c:()=>a});var e=s(5861);const a=()=>{let c;return{lock:function(){var i=(0,e.Z)(function*(){const r=c;let t;return c=new Promise(o=>t=o),void 0!==r&&(yield r),t});return function(){return i.apply(this,arguments)}}()}}},5857:(O,h,s)=>{s.d(h,{c:()=>c});var e=s(6225),a=s(839);const c=(l,i,r)=>{let t;const o=()=>!(void 0===i()||void 0!==l.label||null===r()),d=()=>{const u=i();if(void 0===u)return;if(!o())return void u.style.removeProperty("width");const E=r().scrollWidth;if(0===E&&null===u.offsetParent&&void 0!==e.w&&"IntersectionObserver"in e.w){if(void 0!==t)return;const w=t=new IntersectionObserver(C=>{1===C[0].intersectionRatio&&(d(),w.disconnect(),t=void 0)},{threshold:.01,root:l});w.observe(u)}else u.style.setProperty("width",.75*E+"px")};return{calculateNotchWidth:()=>{o()&&(0,a.r)(()=>{d()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},3781:(O,h,s)=>{s.d(h,{S:()=>a});const a={bubbles:{dur:1e3,circles:9,fn:(c,l,i)=>{const r=c*l/i-c+"ms",t=2*Math.PI*l/i;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(c,l,i)=>{const r=l/i,t=c*r-c+"ms",o=2*Math.PI*r;return{r:5,style:{top:32*Math.sin(o)+"%",left:32*Math.cos(o)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,l)=>({r:6,style:{left:32-32*l+"%","animation-delay":-110*l+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,l,i)=>({y1:14,y2:26,style:{transform:`rotate(${360/i*l+(l<i/2?180:-180)}deg)`,"animation-delay":c*l/i-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,l,i)=>({y1:12,y2:20,style:{transform:`rotate(${360/i*l+(l<i/2?180:-180)}deg)`,"animation-delay":c*l/i-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,l,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":c*l/i-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,l,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":c*l/i-c+"ms"}})}}},8663:(O,h,s)=>{s.r(h),s.d(h,{createSwipeBackGesture:()=>i});var e=s(839),a=s(5085),c=s(9203);s(619);const i=(r,t,o,_,d)=>{const n=r.ownerDocument.defaultView;let u=(0,a.i)(r);const w=v=>u?-v.deltaX:v.deltaX;return(0,c.createGesture)({el:r,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:v=>(u=(0,a.i)(r),(v=>{const{startX:L}=v;return u?L>=n.innerWidth-50:L<=50})(v)&&t()),onStart:o,onMove:v=>{const L=w(v)/n.innerWidth;_(L)},onEnd:v=>{const T=w(v),L=n.innerWidth,g=T/L,p=(v=>u?-v.velocityX:v.velocityX)(v),m=p>=0&&(p>.2||T>L/2),D=(m?1-g:g)*L;let S=0;if(D>5){const R=D/Math.abs(p);S=Math.min(R,540)}d(m,g<=0?.01:(0,e.l)(0,g,.9999),S)}})}},5564:(O,h,s)=>{s.d(h,{w:()=>e});const e=(l,i,r)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(o=>{r(a(o,i))});return t.observe(l,{childList:!0,subtree:!0}),t},a=(l,i)=>{let r;return l.forEach(t=>{for(let o=0;o<t.addedNodes.length;o++)r=c(t.addedNodes[o],i)||r}),r},c=(l,i)=>{if(1!==l.nodeType)return;const r=l;return(r.tagName===i.toUpperCase()?[r]:Array.from(r.querySelectorAll(i))).find(o=>o.value===r.value)}},4978:(O,h,s)=>{s.d(h,{G:()=>l});var e=s(6814),a=s(6728),c=s(6242);let l=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275cmp=c.Xpm({type:i,selectors:[["lgmj-header"]],inputs:{title:"title"},standalone:!0,features:[c.jDz],decls:6,vars:1,consts:[["slot","start"]],template:function(o,_){1&o&&(c.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),c._UZ(3,"ion-menu-button"),c.qZA(),c.TgZ(4,"ion-title"),c._uU(5),c.qZA()()()),2&o&&(c.xp6(5),c.Oqu(_.title))},dependencies:[e.ez,a.Pc,a.Sm,a.Gu,a.fG,a.wd,a.sr]})}return i})()},5323:(O,h,s)=>{s.d(h,{l:()=>g});var e=s(6242),a=s(6814),c=s(6728),l=s(3575),i=s(5480),r=s(721),t=s(4360),o=s(6685),_=s(2667),d=s(8581);function n(p,P){1&p&&e._UZ(0,"ion-icon",6)}function u(p,P){if(1&p&&(e.TgZ(0,"ion-thumbnail",7),e._UZ(1,"img",8),e.ALo(2,"playerRoleImage"),e.ALo(3,"playerRoleName"),e.qZA()),2&p){const m=e.oxw();e.xp6(1),e.Q6J("ngSrc",e.lcZ(2,2,m.player.role))("alt",e.lcZ(3,4,m.player.role))}}function E(p,P){1&p&&e.GkF(0)}function w(p,P){if(1&p){const m=e.EpF();e.TgZ(0,"ion-checkbox",12),e.NdJ("ionChange",function(D){e.CHM(m);const S=e.oxw(2);return e.KtG(S.onCheckedChange(D))}),e.qZA()}if(2&p){const m=e.oxw(2);e.Q6J("checked",m.checked)}}function C(p,P){if(1&p&&e._UZ(0,"ion-radio",13),2&p){const m=e.oxw(2);e.Q6J("value",m.player.id)}}function M(p,P){if(1&p&&(e.ynx(0,9),e.YNc(1,w,1,1,"ion-checkbox",10)(2,C,1,1,"ion-radio",11),e.BQk()),2&p){const m=e.oxw();e.Q6J("ngSwitch",m.displayMode),e.xp6(1),e.Q6J("ngSwitchCase",m.playerDisplayModeEnum.SELECT_MULTI),e.xp6(1),e.Q6J("ngSwitchCase",m.playerDisplayModeEnum.SELECT_SINGLE)}}function f(p,P){if(1&p&&(e.TgZ(0,"ion-select-option",18),e._uU(1),e.ALo(2,"playerRoleName"),e.qZA()),2&p){const m=P.$implicit;e.Q6J("value",m),e.xp6(1),e.Oqu(e.lcZ(2,2,m))}}function y(p,P){if(1&p){const m=e.EpF();e.TgZ(0,"ion-select",16),e.NdJ("ionChange",function(D){e.CHM(m);const S=e.oxw(2);return e.KtG(S.onRoleChange(D))}),e.YNc(1,f,3,4,"ion-select-option",17),e.qZA()}if(2&p){const m=e.oxw(2);e.Q6J("legacy",!0)("interfaceOptions",m.customInterfaceOptions)("value",m.player.role),e.xp6(1),e.Q6J("ngForOf",m.sortedRoles)("ngForTrackBy",m.roleTrackBy)}}function v(p,P){if(1&p&&(e.TgZ(0,"span",21),e._uU(1),e.ALo(2,"playerStatus"),e.qZA()),2&p){const m=P.$implicit;e.xp6(1),e.Oqu(e.lcZ(2,1,m))}}function T(p,P){if(1&p&&(e.TgZ(0,"div",19),e.YNc(1,v,3,3,"span",20),e.qZA()),2&p){const m=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",m.player.statuses)("ngForTrackBy",m.statusTrackBy)}}function L(p,P){if(1&p&&(e.ynx(0,9),e.YNc(1,y,2,5,"ion-select",14)(2,T,2,2,"div",15),e.BQk()),2&p){const m=e.oxw();e.Q6J("ngSwitch",m.displayMode),e.xp6(1),e.Q6J("ngSwitchCase",m.playerDisplayModeEnum.EDIT_ROLE)}}let g=(()=>{class p{set selectableRoles(m){const A=[...m];!this.noSelfRole&&this.player.role!==o.k.NOT_SELECTED&&!A.includes(this.player.role)&&A.push(this.player.role),A.sort((D,S)=>this.playerRoleNamePipe.transform(D).localeCompare(this.playerRoleNamePipe.transform(S))),this.sortedRoles=A}constructor(m){this.playerRoleNamePipe=m,this.displayMode=r.d.DEFAULT,this.disabled=!1,this.checked=!1,this.noSelfRole=!1,this.checkedChange=new e.vpe,this.roleChange=new e.vpe,this.roleTrackBy=_.A,this.statusTrackBy=d.V,this.playerDisplayModeEnum=r.d,this.playerRoleEnum=o.k,this.sortedRoles=[],this.customInterfaceOptions={header:"CHOISIR UN R\xd4LE",buttons:[]}}onCheckedChange(m){this.checkedChange.emit(m.detail.checked)}onRoleChange(m){this.roleChange.emit(m.detail.value)}static#e=this.\u0275fac=function(A){return new(A||p)(e.Y36(l.L))};static#t=this.\u0275cmp=e.Xpm({type:p,selectors:[["lgmj-player"]],inputs:{player:"player",displayMode:"displayMode",disabled:"disabled",checked:"checked",noSelfRole:"noSelfRole",selectableRoles:"selectableRoles"},outputs:{checkedChange:"checkedChange",roleChange:"roleChange"},standalone:!0,features:[e._Bn([l.L]),e.jDz],decls:14,vars:10,consts:[[3,"disabled","color"],["slot","start","name","skull",4,"ngIf","ngIfElse"],["slot","start",4,"ngIf"],[4,"ngTemplateOutlet"],["formElement",""],["endElement",""],["slot","start","name","skull"],["slot","start"],["width","250","height","250",1,"role-img",3,"ngSrc","alt"],[3,"ngSwitch"],["slot","start",3,"checked","ionChange",4,"ngSwitchCase"],["slot","start",3,"value",4,"ngSwitchCase"],["slot","start",3,"checked","ionChange"],["slot","start",3,"value"],["placeholder","R\xf4le","interface","action-sheet","cancelText","Annuler",3,"legacy","interfaceOptions","value","ionChange",4,"ngSwitchCase"],["slot","end",4,"ngSwitchDefault"],["placeholder","R\xf4le","interface","action-sheet","cancelText","Annuler",3,"legacy","interfaceOptions","value","ionChange"],[3,"value",4,"ngFor","ngForOf","ngForTrackBy"],[3,"value"],["slot","end"],["class","status-icon",4,"ngFor","ngForOf","ngForTrackBy"],[1,"status-icon"]],template:function(A,D){if(1&A&&(e.TgZ(0,"ion-item",0),e.YNc(1,n,1,0,"ion-icon",1)(2,u,4,6,"ion-thumbnail",2),e.TgZ(3,"ion-label")(4,"h2"),e._uU(5),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.ALo(8,"playerRoleName"),e.qZA()(),e.YNc(9,E,1,0,"ng-container",3),e.qZA(),e.YNc(10,M,3,3,"ng-template",null,4,e.W1O)(12,L,3,2,"ng-template",null,5,e.W1O)),2&A){const S=e.MAs(11),R=e.MAs(13);e.Q6J("disabled",D.player.isDead||D.disabled)("color",D.player.isDead?"medium":""),e.xp6(1),e.Q6J("ngIf",D.player.isDead)("ngIfElse",S),e.xp6(1),e.Q6J("ngIf",D.player.role!==D.playerRoleEnum.NOT_SELECTED),e.xp6(3),e.Oqu(D.player.name),e.xp6(2),e.Oqu(e.lcZ(8,8,D.player.role)),e.xp6(2),e.Q6J("ngTemplateOutlet",R)}},dependencies:[a.ez,a.sg,a.O5,a.tP,a.RF,a.n9,a.ED,c.Pc,c.nz,c.gu,c.Ie,c.Q$,c.B7,c.t9,c.n0,c.Bs,c.w,c.U5,c.QI,l.L,i.$,t.E,a.Zd],styles:[".status-icon[_ngcontent-%COMP%]{font-size:20px}"]})}return p})()},721:(O,h,s)=>{s.d(h,{d:()=>e});var e=function(a){return a[a.DEFAULT=0]="DEFAULT",a[a.SELECT_SINGLE=1]="SELECT_SINGLE",a[a.SELECT_MULTI=2]="SELECT_MULTI",a[a.EDIT_ROLE=3]="EDIT_ROLE",a}(e||{})},4360:(O,h,s)=>{s.d(h,{E:()=>l});var e=s(6907);const a={[e.M.WOLF_TARGET]:"\u{1f43a}",[e.M.HEALTH_POTION]:"\u{1f49a}",[e.M.DEATH_POTION]:"\u{1f5a4}",[e.M.CAPTAIN]:"\u{1f396}\ufe0f",[e.M.LOVER]:"\u{1f495}",[e.M.PROTECTED]:"\u{1f6e1}\ufe0f",[e.M.NO_POWER]:"\u274c",[e.M.CHARMED]:"\u{1f3b6}",[e.M.CHILD_MODEL]:"\u{1f9d2}",[e.M.RAVEN]:"\u{1fab6}"};var c=s(6242);let l=(()=>{class i{transform(t){return a[t]}static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275pipe=c.Yjl({name:"playerStatus",type:i,pure:!0,standalone:!0})}return i})()},8838:(O,h,s)=>{s.d(h,{I:()=>c});var e=s(6242),a=s(9182);let c=(()=>{class l{get currentChosenCards(){return this.cards.asReadonly()}constructor(r){this.storageService=r,this.cards=(0,e.tdS)({villageois:0,loupGarou:0,playersNumber:0,selectedRoles:new Set}),this.CARDS_KEY="CardChoiceService_cards",this.initFromStorage()}setCards(r){this.cards.set(r);const t={...r,selectedRoles:Array.from(r.selectedRoles)};this.storageService.set(this.CARDS_KEY,t)}initFromStorage(){this.storageService.get(this.CARDS_KEY).subscribe(r=>{if(r){const t={...r,selectedRoles:new Set(r.selectedRoles)};this.cards.set(t)}})}static#e=this.\u0275fac=function(t){return new(t||l)(e.LFG(a.V))};static#t=this.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},2254:(O,h,s)=>{s.d(h,{y:()=>r});var e=s(6242),a=s(6685),c=s(7366),l=s(8838),i=s(4482);let r=(()=>{class t{constructor(_,d,n){this.gameService=_,this.router=d,this.cardChoiceService=n,this.players=(0,e.tdS)([])}get currentPlayers(){return this.players.asReadonly()}addPlayer(_){const d=this.players(),n={id:d.length,name:_,role:a.k.NOT_SELECTED,card:a.k.NOT_SELECTED,statuses:new Set,isDead:!1};this.players.set([...d,n])}removePlayer(_){const d=this.players();d.splice(_,1);const n=this.reindexPlayers(d);this.players.set(n)}reorderPlayers(_,d){const n=this.players(),u=n.splice(_,1)[0];n.splice(d,0,u);const E=this.reindexPlayers(n);this.players.set(E)}replay(){const d=[...this.gameService.currentPlayers()].map(n=>({...n,role:a.k.NOT_SELECTED,card:a.k.NOT_SELECTED,statuses:new Set,isDead:!1}));this.players.set(d),this.router.navigate(["roles-choice"])}changeRole(_,d){const n=[...this.players()],u=n.find(E=>E.id===_);void 0!==u&&(u.role=d,u.card=d,this.players.set(n))}createGame(){const _=this.cardChoiceService.currentChosenCards();this.gameService.createGame(this.players(),_),this.players.set([])}reindexPlayers(_){return[..._].map((d,n)=>({...d,id:n}))}static#e=this.\u0275fac=function(d){return new(d||t)(e.LFG(c.h),e.LFG(i.F0),e.LFG(l.I))};static#t=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()},8540:(O,h,s)=>{s.d(h,{y:()=>e});const e=(a,c)=>c.id},2667:(O,h,s)=>{s.d(h,{A:()=>e});const e=(a,c)=>c},8581:(O,h,s)=>{s.d(h,{V:()=>e});const e=(a,c)=>c}}]);