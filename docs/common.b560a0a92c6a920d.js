"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[8592],{4813:(C,h,n)=>{n.d(h,{c:()=>d});var e=n(6953),l=n(2613),a=n(8077);const d=(o,i)=>{let t,s;const _=(c,f,O)=>{if(typeof document>"u")return;const w=document.elementFromPoint(c,f);w&&i(w)?w!==t&&(r(),u(w,O)):r()},u=(c,f)=>{t=c,s||(s=t);const O=t;(0,e.w)(()=>O.classList.add("ion-activated")),f()},r=(c=!1)=>{if(!t)return;const f=t;(0,e.w)(()=>f.classList.remove("ion-activated")),c&&s!==t&&t.click(),t=void 0};return(0,a.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>_(c.currentX,c.currentY,l.a),onMove:c=>_(c.currentX,c.currentY,l.b),onEnd:()=>{r(!0),(0,l.h)(),s=void 0}})}},9920:(C,h,n)=>{n.d(h,{g:()=>l});var e=n(7643);const l=()=>{if(void 0!==e.w)return e.w.Capacitor}},278:(C,h,n)=>{n.d(h,{g:()=>e});const e=(i,t,s,_,u)=>a(i[1],t[1],s[1],_[1],u).map(r=>l(i[0],t[0],s[0],_[0],r)),l=(i,t,s,_,u)=>u*(3*t*Math.pow(u-1,2)+u*(-3*s*u+3*s+_*u))-i*Math.pow(u-1,3),a=(i,t,s,_,u)=>o((_-=u)-3*(s-=u)+3*(t-=u)-(i-=u),3*s-6*t+3*i,3*t-3*i,i).filter(c=>c>=0&&c<=1),o=(i,t,s,_)=>{if(0===i)return((i,t,s)=>{const _=t*t-4*i*s;return _<0?[]:[(-t+Math.sqrt(_))/(2*i),(-t-Math.sqrt(_))/(2*i)]})(t,s,_);const u=(3*(s/=i)-(t/=i)*t)/3,r=(2*t*t*t-9*t*s+27*(_/=i))/27;if(0===u)return[Math.pow(-r,1/3)];if(0===r)return[Math.sqrt(-u),-Math.sqrt(-u)];const c=Math.pow(r/2,2)+Math.pow(u/3,3);if(0===c)return[Math.pow(r/2,.5)-t/3];if(c>0)return[Math.pow(-r/2+Math.sqrt(c),1/3)-Math.pow(r/2+Math.sqrt(c),1/3)-t/3];const f=Math.sqrt(Math.pow(-u/3,3)),O=Math.acos(-r/(2*Math.sqrt(Math.pow(-u/3,3)))),w=2*Math.pow(f,1/3);return[w*Math.cos(O/3)-t/3,w*Math.cos((O+2*Math.PI)/3)-t/3,w*Math.cos((O+4*Math.PI)/3)-t/3]}},1776:(C,h,n)=>{n.d(h,{i:()=>e});const e=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},3433:(C,h,n)=>{n.r(h),n.d(h,{startFocusVisible:()=>d});const e="ion-focused",a=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],d=o=>{let i=[],t=!0;const s=o?o.shadowRoot:document,_=o||document.body,u=M=>{i.forEach(m=>m.classList.remove(e)),M.forEach(m=>m.classList.add(e)),i=M},r=()=>{t=!1,u([])},c=M=>{t=a.includes(M.key),t||u([])},f=M=>{if(t&&void 0!==M.composedPath){const m=M.composedPath().filter(y=>!!y.classList&&y.classList.contains("ion-focusable"));u(m)}},O=()=>{s.activeElement===_&&u([])};return s.addEventListener("keydown",c),s.addEventListener("focusin",f),s.addEventListener("focusout",O),s.addEventListener("touchstart",r,{passive:!0}),s.addEventListener("mousedown",r),{destroy:()=>{s.removeEventListener("keydown",c),s.removeEventListener("focusin",f),s.removeEventListener("focusout",O),s.removeEventListener("touchstart",r),s.removeEventListener("mousedown",r)},setFocus:u}}},2587:(C,h,n)=>{n.d(h,{c:()=>l});var e=n(544);const l=i=>{const t=i;let s;return{hasLegacyControl:()=>{if(void 0===s){const u=void 0!==t.label||a(t),r=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,c=(0,e.h)(t);s=!0===t.legacy||!u&&!r&&null!==c}return s}}},a=i=>null!==i.shadowRoot&&!!(d.includes(i.tagName)&&null!==i.querySelector('[slot="label"]')||o.includes(i.tagName)&&""!==i.textContent),d=["ION-RANGE"],o=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},2613:(C,h,n)=>{n.d(h,{I:()=>l,a:()=>t,b:()=>s,c:()=>i,d:()=>u,h:()=>_});var e=n(9920),l=function(r){return r.Heavy="HEAVY",r.Medium="MEDIUM",r.Light="LIGHT",r}(l||{});const d={getEngine(){const r=window.TapticEngine;if(r)return r;const c=(0,e.g)();return c?.isPluginAvailable("Haptics")?c.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const c=(0,e.g)();return"web"!==c?.getPlatform()||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,e.g)(),impact(r){const c=this.getEngine();if(!c)return;const f=this.isCapacitor()?r.style:r.style.toLowerCase();c.impact({style:f})},notification(r){const c=this.getEngine();if(!c)return;const f=this.isCapacitor()?r.type:r.type.toLowerCase();c.notification({type:f})},selection(){const r=this.isCapacitor()?l.Light:"light";this.impact({style:r})},selectionStart(){const r=this.getEngine();r&&(this.isCapacitor()?r.selectionStart():r.gestureSelectionStart())},selectionChanged(){const r=this.getEngine();r&&(this.isCapacitor()?r.selectionChanged():r.gestureSelectionChanged())},selectionEnd(){const r=this.getEngine();r&&(this.isCapacitor()?r.selectionEnd():r.gestureSelectionEnd())}},o=()=>d.available(),i=()=>{o()&&d.selection()},t=()=>{o()&&d.selectionStart()},s=()=>{o()&&d.selectionChanged()},_=()=>{o()&&d.selectionEnd()},u=r=>{o()&&d.impact(r)}},9993:(C,h,n)=>{n.d(h,{a:()=>e,b:()=>f,c:()=>t,d:()=>O,e:()=>g,f:()=>i,g:()=>w,h:()=>a,i:()=>l,j:()=>P,k:()=>L,l:()=>s,m:()=>r,n:()=>M,o:()=>u,p:()=>o,q:()=>d,r:()=>v,s:()=>p,t:()=>c,u:()=>m,v:()=>y,w:()=>_});const e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4435:(C,h,n)=>{n.d(h,{I:()=>i,a:()=>u,b:()=>o,c:()=>f,d:()=>w,f:()=>r,g:()=>_,i:()=>s,p:()=>O,r:()=>M,s:()=>c});var e=n(5861),l=n(544),a=n(7690);const o="ion-content",i=".ion-content-scroll-host",t=`${o}, ${i}`,s=m=>"ION-CONTENT"===m.tagName,_=function(){var m=(0,e.Z)(function*(y){return s(y)?(yield new Promise(v=>(0,l.c)(y,v)),y.getScrollElement()):y});return function(v){return m.apply(this,arguments)}}(),u=m=>m.querySelector(i)||m.querySelector(t),r=m=>m.closest(t),c=(m,y)=>s(m)?m.scrollToTop(y):Promise.resolve(m.scrollTo({top:0,left:0,behavior:y>0?"smooth":"auto"})),f=(m,y,v,P)=>s(m)?m.scrollByPoint(y,v,P):Promise.resolve(m.scrollBy({top:v,left:y,behavior:P>0?"smooth":"auto"})),O=m=>(0,a.b)(m,o),w=m=>{if(s(m)){const v=m.scrollY;return m.scrollY=!1,v}return m.style.setProperty("overflow","hidden"),!0},M=(m,y)=>{s(m)?m.scrollY=y:m.style.removeProperty("overflow")}},1685:(C,h,n)=>{n.d(h,{c:()=>d,g:()=>o});var e=n(7643),l=n(544),a=n(7690);const d=(t,s,_)=>{let u,r;void 0!==e.w&&"MutationObserver"in e.w&&(u=new MutationObserver(w=>{for(const M of w)for(const m of M.addedNodes)if(m.nodeType===Node.ELEMENT_NODE&&m.slot===s)return _(),void(0,l.r)(()=>c(m))}),u.observe(t,{childList:!0}));const c=w=>{var M;r&&(r.disconnect(),r=void 0),r=new MutationObserver(m=>{_();for(const y of m)for(const v of y.removedNodes)v.nodeType===Node.ELEMENT_NODE&&v.slot===s&&O()}),r.observe(null!==(M=w.parentElement)&&void 0!==M?M:w,{subtree:!0,childList:!0})},O=()=>{r&&(r.disconnect(),r=void 0)};return{destroy:()=>{u&&(u.disconnect(),u=void 0),O()}}},o=(t,s,_)=>{const u=null==t?0:t.toString().length,r=i(u,s);if(void 0===_)return r;try{return _(u,s)}catch(c){return(0,a.a)("Exception in provided `counterFormatter`.",c),r}},i=(t,s)=>`${t} / ${s}`},3701:(C,h,n)=>{n.r(h),n.d(h,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>d,copyVisualViewport:()=>L,keyboardDidClose:()=>m,keyboardDidOpen:()=>w,keyboardDidResize:()=>M,resetKeyboardAssist:()=>u,setKeyboardClose:()=>O,setKeyboardOpen:()=>f,startKeyboardAssist:()=>r,trackViewportChanges:()=>P});var e=n(3812);n(9920),n(7643);const d="ionKeyboardDidShow",o="ionKeyboardDidHide";let t={},s={},_=!1;const u=()=>{t={},s={},_=!1},r=p=>{if(e.K.getEngine())c(p);else{if(!p.visualViewport)return;s=L(p.visualViewport),p.visualViewport.onresize=()=>{P(p),w()||M(p)?f(p):m(p)&&O(p)}}},c=p=>{p.addEventListener("keyboardDidShow",g=>f(p,g)),p.addEventListener("keyboardDidHide",()=>O(p))},f=(p,g)=>{y(p,g),_=!0},O=p=>{v(p),_=!1},w=()=>!_&&t.width===s.width&&(t.height-s.height)*s.scale>150,M=p=>_&&!m(p),m=p=>_&&s.height===p.innerHeight,y=(p,g)=>{const E=new CustomEvent(d,{detail:{keyboardHeight:g?g.keyboardHeight:p.innerHeight-s.height}});p.dispatchEvent(E)},v=p=>{const g=new CustomEvent(o);p.dispatchEvent(g)},P=p=>{t=Object.assign({},s),s=L(p.visualViewport)},L=p=>({width:Math.round(p.width),height:Math.round(p.height),offsetTop:p.offsetTop,offsetLeft:p.offsetLeft,pageTop:p.pageTop,pageLeft:p.pageLeft,scale:p.scale})},3812:(C,h,n)=>{n.d(h,{K:()=>d,a:()=>a});var e=n(9920),l=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(l||{}),a=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(a||{});const d={getEngine(){const o=(0,e.g)();if(o?.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return o?.getResizeMode?o.getResizeMode().catch(i=>{if(i.code!==l.Unimplemented)throw i}):Promise.resolve(void 0)}}},2930:(C,h,n)=>{n.d(h,{c:()=>i});var e=n(5861),l=n(7643),a=n(3812);const d=t=>void 0===l.d||t===a.a.None||void 0===t?null:l.d.querySelector("ion-app")??l.d.body,o=t=>{const s=d(t);return null===s?0:s.clientHeight},i=function(){var t=(0,e.Z)(function*(s){let _,u,r,c;const f=function(){var y=(0,e.Z)(function*(){const v=yield a.K.getResizeMode(),P=void 0===v?void 0:v.mode;_=()=>{void 0===c&&(c=o(P)),r=!0,O(r,P)},u=()=>{r=!1,O(r,P)},null==l.w||l.w.addEventListener("keyboardWillShow",_),null==l.w||l.w.addEventListener("keyboardWillHide",u)});return function(){return y.apply(this,arguments)}}(),O=(y,v)=>{s&&s(y,w(v))},w=y=>{if(0===c||c===o(y))return;const v=d(y);return null!==v?new Promise(P=>{const p=new ResizeObserver(()=>{v.clientHeight===c&&(p.disconnect(),P())});p.observe(v)}):void 0};return yield f(),{init:f,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",_),null==l.w||l.w.removeEventListener("keyboardWillHide",u),_=u=void 0},isKeyboardVisible:()=>r}});return function(_){return t.apply(this,arguments)}}()},9718:(C,h,n)=>{n.d(h,{c:()=>a});var e=n(7643),l=n(544);const a=(d,o,i)=>{let t;const s=()=>!(void 0===o()||void 0!==d.label||null===i()),u=()=>{const c=o();if(void 0===c)return;if(!s())return void c.style.removeProperty("width");const f=i().scrollWidth;if(0===f&&null===c.offsetParent&&void 0!==e.w&&"IntersectionObserver"in e.w){if(void 0!==t)return;const O=t=new IntersectionObserver(w=>{1===w[0].intersectionRatio&&(u(),O.disconnect(),t=void 0)},{threshold:.01,root:d});O.observe(c)}else c.style.setProperty("width",.75*f+"px")};return{calculateNotchWidth:()=>{s()&&(0,l.r)(()=>{u()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},1173:(C,h,n)=>{n.d(h,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(a,d,o)=>{const i=a*d/o-a+"ms",t=2*Math.PI*d/o;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(a,d,o)=>{const i=d/o,t=a*i-a+"ms",s=2*Math.PI*i;return{r:5,style:{top:32*Math.sin(s)+"%",left:32*Math.cos(s)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,d)=>({r:6,style:{left:32-32*d+"%","animation-delay":-110*d+"ms"}})},lines:{dur:1e3,lines:8,fn:(a,d,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*d+(d<o/2?180:-180)}deg)`,"animation-delay":a*d/o-a+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(a,d,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*d+(d<o/2?180:-180)}deg)`,"animation-delay":a*d/o-a+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(a,d,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*d+(d<6?180:-180)}deg)`,"animation-delay":a*d/o-a+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(a,d,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*d+(d<6?180:-180)}deg)`,"animation-delay":a*d/o-a+"ms"}})}}},4666:(C,h,n)=>{n.r(h),n.d(h,{createSwipeBackGesture:()=>o});var e=n(544),l=n(1776),a=n(8077);n(4587);const o=(i,t,s,_,u)=>{const r=i.ownerDocument.defaultView;let c=(0,l.i)(i);const O=v=>c?-v.deltaX:v.deltaX;return(0,a.createGesture)({el:i,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:v=>(c=(0,l.i)(i),(v=>{const{startX:L}=v;return c?L>=r.innerWidth-50:L<=50})(v)&&t()),onStart:s,onMove:v=>{const L=O(v)/r.innerWidth;_(L)},onEnd:v=>{const P=O(v),L=r.innerWidth,p=P/L,g=(v=>c?-v.velocityX:v.velocityX)(v),E=g>=0&&(g>.2||P>L/2),R=(E?1-p:p)*L;let A=0;if(R>5){const S=R/Math.abs(g);A=Math.min(S,540)}u(E,p<=0?.01:(0,e.l)(0,p,.9999),A)}})}},8639:(C,h,n)=>{n.d(h,{w:()=>e});const e=(d,o,i)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(s=>{i(l(s,o))});return t.observe(d,{childList:!0,subtree:!0}),t},l=(d,o)=>{let i;return d.forEach(t=>{for(let s=0;s<t.addedNodes.length;s++)i=a(t.addedNodes[s],o)||i}),i},a=(d,o)=>1!==d.nodeType?void 0:(d.tagName===o.toUpperCase()?[d]:Array.from(d.querySelectorAll(o))).find(t=>t.value===d.value)},4978:(C,h,n)=>{n.d(h,{G:()=>d});var e=n(6814),l=n(5548),a=n(6689);let d=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=a.Xpm({type:o,selectors:[["lgmj-header"]],inputs:{title:"title"},standalone:!0,features:[a.jDz],decls:6,vars:1,consts:[["slot","start"]],template:function(t,s){1&t&&(a.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),a._UZ(3,"ion-menu-button"),a.qZA(),a.TgZ(4,"ion-title"),a._uU(5),a.qZA()()()),2&t&&(a.xp6(5),a.Oqu(s.title))},dependencies:[e.ez,l.Pc,l.Sm,l.Gu,l.fG,l.wd,l.sr]}),o})()},5323:(C,h,n)=>{n.d(h,{l:()=>p});var e=n(6689),l=n(6814),a=n(5548),d=n(3575),o=n(5480),i=n(721),t=n(4360),s=n(6685),_=n(2667),u=n(6728);function r(g,T){1&g&&e._UZ(0,"ion-icon",6)}function c(g,T){if(1&g&&(e.TgZ(0,"ion-thumbnail",7),e._UZ(1,"img",8),e.ALo(2,"playerRoleImage"),e.ALo(3,"playerRoleName"),e.qZA()),2&g){const E=e.oxw();e.xp6(1),e.Q6J("src",e.lcZ(2,2,E.player.role),e.LSH)("alt",e.lcZ(3,4,E.player.role))}}function f(g,T){1&g&&e.GkF(0)}function O(g,T){if(1&g){const E=e.EpF();e.TgZ(0,"ion-checkbox",12),e.NdJ("ionChange",function(R){e.CHM(E);const A=e.oxw(2);return e.KtG(A.onCheckedChange(R))}),e.qZA()}if(2&g){const E=e.oxw(2);e.Q6J("checked",E.checked)}}function w(g,T){if(1&g&&e._UZ(0,"ion-radio",13),2&g){const E=e.oxw(2);e.Q6J("value",E.player.id)}}function M(g,T){if(1&g&&(e.ynx(0,9),e.YNc(1,O,1,1,"ion-checkbox",10),e.YNc(2,w,1,1,"ion-radio",11),e.BQk()),2&g){const E=e.oxw();e.Q6J("ngSwitch",E.displayMode),e.xp6(1),e.Q6J("ngSwitchCase",E.playerDisplayModeEnum.SELECT_MULTI),e.xp6(1),e.Q6J("ngSwitchCase",E.playerDisplayModeEnum.SELECT_SINGLE)}}function m(g,T){if(1&g&&(e.TgZ(0,"ion-select-option",18),e._uU(1),e.ALo(2,"playerRoleName"),e.qZA()),2&g){const E=T.$implicit;e.Q6J("value",E),e.xp6(1),e.Oqu(e.lcZ(2,2,E))}}function y(g,T){if(1&g){const E=e.EpF();e.TgZ(0,"ion-select",16),e.NdJ("ionChange",function(R){e.CHM(E);const A=e.oxw(2);return e.KtG(A.onRoleChange(R))}),e.YNc(1,m,3,4,"ion-select-option",17),e.qZA()}if(2&g){const E=e.oxw(2);e.Q6J("legacy",!0)("interfaceOptions",E.customInterfaceOptions)("value",E.player.role),e.xp6(1),e.Q6J("ngForOf",E.sortedRoles)("ngForTrackBy",E.roleTrackBy)}}function v(g,T){if(1&g&&(e.TgZ(0,"span",21),e._uU(1),e.ALo(2,"playerStatus"),e.qZA()),2&g){const E=T.$implicit;e.xp6(1),e.Oqu(e.lcZ(2,1,E))}}function P(g,T){if(1&g&&(e.TgZ(0,"div",19),e.YNc(1,v,3,3,"span",20),e.qZA()),2&g){const E=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",E.player.statuses)("ngForTrackBy",E.statusTrackBy)}}function L(g,T){if(1&g&&(e.ynx(0,9),e.YNc(1,y,2,5,"ion-select",14),e.YNc(2,P,2,2,"div",15),e.BQk()),2&g){const E=e.oxw();e.Q6J("ngSwitch",E.displayMode),e.xp6(1),e.Q6J("ngSwitchCase",E.playerDisplayModeEnum.EDIT_ROLE)}}let p=(()=>{class g{set selectableRoles(E){const D=[...E];!this.noSelfRole&&this.player.role!==s.k.NOT_SELECTED&&!D.includes(this.player.role)&&D.push(this.player.role),D.sort((R,A)=>this.playerRoleNamePipe.transform(R).localeCompare(this.playerRoleNamePipe.transform(A))),this.sortedRoles=D}constructor(E){this.playerRoleNamePipe=E,this.displayMode=i.d.DEFAULT,this.disabled=!1,this.checked=!1,this.noSelfRole=!1,this.checkedChange=new e.vpe,this.roleChange=new e.vpe,this.roleTrackBy=_.A,this.statusTrackBy=u.V,this.playerDisplayModeEnum=i.d,this.playerRoleEnum=s.k,this.sortedRoles=[],this.customInterfaceOptions={header:"CHOISIR UN R\xd4LE",buttons:[]}}onCheckedChange(E){this.checkedChange.emit(E.detail.checked)}onRoleChange(E){this.roleChange.emit(E.detail.value)}}return g.\u0275fac=function(E){return new(E||g)(e.Y36(d.L))},g.\u0275cmp=e.Xpm({type:g,selectors:[["lgmj-player"]],inputs:{player:"player",displayMode:"displayMode",disabled:"disabled",checked:"checked",noSelfRole:"noSelfRole",selectableRoles:"selectableRoles"},outputs:{checkedChange:"checkedChange",roleChange:"roleChange"},standalone:!0,features:[e._Bn([d.L]),e.jDz],decls:14,vars:10,consts:[[3,"disabled","color"],["slot","start","name","skull",4,"ngIf","ngIfElse"],["slot","start",4,"ngIf"],[4,"ngTemplateOutlet"],["formElement",""],["endElement",""],["slot","start","name","skull"],["slot","start"],[3,"src","alt"],[3,"ngSwitch"],["slot","start",3,"checked","ionChange",4,"ngSwitchCase"],["slot","start",3,"value",4,"ngSwitchCase"],["slot","start",3,"checked","ionChange"],["slot","start",3,"value"],["placeholder","R\xf4le","interface","action-sheet","cancelText","Annuler",3,"legacy","interfaceOptions","value","ionChange",4,"ngSwitchCase"],["slot","end",4,"ngSwitchDefault"],["placeholder","R\xf4le","interface","action-sheet","cancelText","Annuler",3,"legacy","interfaceOptions","value","ionChange"],[3,"value",4,"ngFor","ngForOf","ngForTrackBy"],[3,"value"],["slot","end"],["class","status-icon",4,"ngFor","ngForOf","ngForTrackBy"],[1,"status-icon"]],template:function(E,D){if(1&E&&(e.TgZ(0,"ion-item",0),e.YNc(1,r,1,0,"ion-icon",1),e.YNc(2,c,4,6,"ion-thumbnail",2),e.TgZ(3,"ion-label")(4,"h2"),e._uU(5),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.ALo(8,"playerRoleName"),e.qZA()(),e.YNc(9,f,1,0,"ng-container",3),e.qZA(),e.YNc(10,M,3,3,"ng-template",null,4,e.W1O),e.YNc(12,L,3,2,"ng-template",null,5,e.W1O)),2&E){const R=e.MAs(11),A=e.MAs(13);e.Q6J("disabled",D.player.isDead||D.disabled)("color",D.player.isDead?"medium":""),e.xp6(1),e.Q6J("ngIf",D.player.isDead)("ngIfElse",R),e.xp6(1),e.Q6J("ngIf",D.player.role!==D.playerRoleEnum.NOT_SELECTED),e.xp6(3),e.Oqu(D.player.name),e.xp6(2),e.Oqu(e.lcZ(8,8,D.player.role)),e.xp6(2),e.Q6J("ngTemplateOutlet",A)}},dependencies:[l.ez,l.sg,l.O5,l.tP,l.RF,l.n9,l.ED,a.Pc,a.nz,a.gu,a.Ie,a.Q$,a.B7,a.t9,a.n0,a.Bs,a.w,a.U5,a.QI,d.L,o.$,t.E],styles:[".status-icon[_ngcontent-%COMP%]{font-size:20px}"]}),g})()},721:(C,h,n)=>{n.d(h,{d:()=>e});var e=function(l){return l[l.DEFAULT=0]="DEFAULT",l[l.SELECT_SINGLE=1]="SELECT_SINGLE",l[l.SELECT_MULTI=2]="SELECT_MULTI",l[l.EDIT_ROLE=3]="EDIT_ROLE",l}(e||{})},5480:(C,h,n)=>{n.d(h,{$:()=>l});var e=n(6689);let l=(()=>{class a{transform(o){return`${a.IMAGES_PATH}${o.toLowerCase()}.webp`}}return a.IMAGES_PATH="assets/images/roles/",a.\u0275fac=function(o){return new(o||a)},a.\u0275pipe=e.Yjl({name:"playerRoleImage",type:a,pure:!0,standalone:!0}),a})()},3575:(C,h,n)=>{n.d(h,{L:()=>d});var e=n(6685);const l={[e.k.NOT_SELECTED]:"",[e.k.VILLAGEOIS]:"Villageois",[e.k.LOUP_GAROU]:"Loup-garou",[e.k.CHASSEUR]:"Chasseur",[e.k.CUPIDON]:"Cupidon",[e.k.PETITE_FILLE]:"Petite fille",[e.k.SORCIERE]:"Sorci\xe8re",[e.k.VOYANTE]:"Voyante",[e.k.JOUEUR_FLUTE]:"Joueur de fl\xfbte",[e.k.CORBEAU]:"Corbeau",[e.k.ENFANT_SAUVAGE]:"Enfant sauvage",[e.k.SALVATEUR]:"Salvateur",[e.k.GRAND_MECHANT_LOUP]:"Grand m\xe9chant loup",[e.k.MONTREUR_OURS]:"Montreur d'ours",[e.k.RENARD]:"Renard",[e.k.CHIEN_LOUP]:"Chien-loup",[e.k.SOEUR]:"S\u0153ur",[e.k.FRERE]:"Fr\xe8re",[e.k.LOUP_BLANC]:"Loup-garou blanc"};var a=n(6689);let d=(()=>{class o{transform(t){return l[t]}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275pipe=a.Yjl({name:"playerRoleName",type:o,pure:!0,standalone:!0}),o})()},4360:(C,h,n)=>{n.d(h,{E:()=>d});var e=n(6907);const l={[e.M.WOLF_TARGET]:"\u{1f43a}",[e.M.HEALTH_POTION]:"\u{1f49a}",[e.M.DEATH_POTION]:"\u{1f5a4}",[e.M.CAPTAIN]:"\u{1f396}\ufe0f",[e.M.LOVER]:"\u{1f495}",[e.M.PROTECTED]:"\u{1f6e1}\ufe0f",[e.M.NO_POWER]:"\u274c",[e.M.CHARMED]:"\u{1f3b6}",[e.M.CHILD_MODEL]:"\u{1f9d2}",[e.M.RAVEN]:"\u{1fab6}"};var a=n(6689);let d=(()=>{class o{transform(t){return l[t]}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275pipe=a.Yjl({name:"playerStatus",type:o,pure:!0,standalone:!0}),o})()},2254:(C,h,n)=>{n.d(h,{y:()=>s});var e=n(5619),l=n(8180),a=n(7398),d=n(6685),o=n(33),i=n(6689),t=n(439);let s=(()=>{class _{constructor(r,c){this.gameService=r,this.router=c,this.players=new e.X([])}getPlayers(){return this.players.asObservable()}addPlayer(r){const c=this.players.value,f={id:c.length,name:r,role:d.k.NOT_SELECTED,statuses:new Set,isDead:!1};this.players.next([...c,f])}removePlayer(r){const c=this.players.value;c.splice(r,1);const f=this.reindexPlayers(c);this.players.next(f)}reorderPlayers(r,c){const f=this.players.value,O=f.splice(r,1)[0];f.splice(c,0,O);const w=this.reindexPlayers(f);this.players.next(w)}replay(){this.gameService.getPlayers().pipe((0,l.q)(1),(0,a.U)(r=>r.map(c=>({...c,role:d.k.NOT_SELECTED,statuses:new Set,isDead:!1})))).subscribe(r=>{this.players.next(r),this.router.navigate(["roles-choice"])})}changeRole(r,c){const f=this.players.value,O=f.find(w=>w.id===r);void 0!==O&&(O.role=c,this.players.next(f))}createGame(){this.gameService.createGame(this.players.value),this.players.next([])}reindexPlayers(r){return[...r].map((c,f)=>({...c,id:f}))}}return _.\u0275fac=function(r){return new(r||_)(i.LFG(o.h),i.LFG(t.F0))},_.\u0275prov=i.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},1821:(C,h,n)=>{n.d(h,{h:()=>o});var e=n(5619),l=n(1374),a=n(9182),d=n(6689);let o=(()=>{class i{constructor(s){this.storageService=s,this.roles=new e.X(void 0),this.ROLES_KEY="RoleChoiceService_roles",this.initFromStorage()}getCurrentChosenRoles(){return this.roles.asObservable().pipe((0,l.P)(s=>void 0!==s))}setRoles(s){this.roles.next(s),this.storageService.set(this.ROLES_KEY,Array.from(s))}initFromStorage(){this.storageService.get(this.ROLES_KEY).subscribe(s=>{this.roles.next(new Set(s))})}}return i.\u0275fac=function(s){return new(s||i)(d.LFG(a.V))},i.\u0275prov=d.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},8540:(C,h,n)=>{n.d(h,{y:()=>e});const e=(l,a)=>a.id},2667:(C,h,n)=>{n.d(h,{A:()=>e});const e=(l,a)=>a},6728:(C,h,n)=>{n.d(h,{V:()=>e});const e=(l,a)=>a}}]);