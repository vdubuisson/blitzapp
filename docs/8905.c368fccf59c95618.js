"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[8905],{8905:(q,O,m)=>{m.r(O),m.d(O,{startInputShims:()=>X});var g=m(5861),P=m(4435),h=m(544),K=m(6884);m(7643);const A=new WeakMap,I=(t,e,s,o=0,r=!1)=>{A.has(t)!==s&&(s?k(t,e,o,r):H(t,e))},k=(t,e,s,o=!1)=>{const r=e.parentNode,n=e.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,o&&(n.disabled=!0),r.appendChild(n),A.set(t,n);const d="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform=`translate3d(${d}px,${s}px,0) scale(0)`},H=(t,e)=>{const s=A.get(t);s&&(A.delete(t),s.remove()),t.style.pointerEvents="",e.style.transform=""},T="input, textarea, [no-blur], [contenteditable]",j="$ionPaddingTimer",w=(t,e,s)=>{const o=t[j];o&&clearTimeout(o),e>0?t.style.setProperty("--keyboard-offset",`${e}px`):t[j]=setTimeout(()=>{t.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},N=(t,e,s)=>{t.addEventListener("focusout",()=>{e&&w(e,0,s)},{once:!0})};let y=0;const C="data-ionic-skip-scroll-assist",V=(t,e,s,o,r,n,a,d=!1)=>{const i=n&&(void 0===a||a.mode===K.a.None),S=function(){var u=(0,g.Z)(function*(){e.hasAttribute(C)?e.removeAttribute(C):J(t,e,s,o,r,i,d)});return function(){return u.apply(this,arguments)}}();return t.addEventListener("focusin",S,!0),()=>{t.removeEventListener("focusin",S,!0)}},p=t=>{document.activeElement!==t&&(t.setAttribute(C,"true"),t.focus())},J=function(){var t=(0,g.Z)(function*(e,s,o,r,n,a,d=!1){if(!o&&!r)return;const i=((t,e,s)=>{var o;return((t,e,s,o)=>{const r=t.top,n=t.bottom,a=e.top,i=a+15,u=Math.min(e.bottom,o-s)-50-n,v=i-r,l=Math.round(u<0?-u:v>0?-v:0),_=Math.min(l,r-a),M=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,M)),scrollPadding:s,inputSafeY:4-(r-i)}})((null!==(o=t.closest("ion-item,[ion-item]"))&&void 0!==o?o:t).getBoundingClientRect(),e.getBoundingClientRect(),s,t.ownerDocument.defaultView.innerHeight)})(e,o||r,n);if(o&&Math.abs(i.scrollAmount)<4)return p(s),void(a&&null!==o&&(w(o,y),N(s,o,()=>y=0)));if(I(e,s,!0,i.inputSafeY,d),p(s),(0,h.r)(()=>e.click()),a&&o&&(y=i.scrollPadding,w(o,y)),typeof window<"u"){let S;const u=function(){var l=(0,g.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",v),window.removeEventListener("ionKeyboardDidShow",u),o&&(yield(0,P.c)(o,0,i.scrollAmount,i.scrollDuration)),I(e,s,!1,i.inputSafeY),p(s),a&&N(s,o,()=>y=0)});return function(){return l.apply(this,arguments)}}(),v=()=>{window.removeEventListener("ionKeyboardDidShow",v),window.addEventListener("ionKeyboardDidShow",u)};if(o){const l=yield(0,P.g)(o);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===s.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",v)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(s,o,r,n,a,d){return t.apply(this,arguments)}}(),X=function(){var t=(0,g.Z)(function*(e,s){const o=document,r="ios"===s,n="android"===s,a=e.getNumber("keyboardHeight",290),d=e.getBoolean("scrollAssist",!0),i=e.getBoolean("hideCaretOnScroll",r),S=e.getBoolean("inputBlurring",r),u=e.getBoolean("scrollPadding",!0),v=Array.from(o.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,_=new WeakMap,U=yield K.K.getResizeMode(),M=function(){var f=(0,g.Z)(function*(c){yield new Promise(D=>(0,h.c)(c,D));const x=c.shadowRoot||c,b=x.querySelector("input")||x.querySelector("textarea"),L=(0,P.f)(c),W=L?null:c.closest("ion-footer");if(b){if(L&&i&&!l.has(c)){const D=((t,e,s)=>{if(!s||!e)return()=>{};const o=d=>{(t=>t===t.getRootNode().activeElement)(e)&&I(t,e,d)},r=()=>I(t,e,!1),n=()=>o(!0),a=()=>o(!1);return(0,h.a)(s,"ionScrollStart",n),(0,h.a)(s,"ionScrollEnd",a),e.addEventListener("blur",r),()=>{(0,h.b)(s,"ionScrollStart",n),(0,h.b)(s,"ionScrollEnd",a),e.removeEventListener("blur",r)}})(c,b,L);l.set(c,D)}if("date"!==b.type&&"datetime-local"!==b.type&&(L||W)&&d&&!_.has(c)){const D=V(c,b,L,W,a,u,U,n);_.set(c,D)}}});return function(x){return f.apply(this,arguments)}}();S&&(()=>{let t=!0,e=!1;const s=document;(0,h.a)(s,"ionScrollStart",()=>{e=!0}),s.addEventListener("focusin",()=>{t=!0},!0),s.addEventListener("touchend",a=>{if(e)return void(e=!1);const d=s.activeElement;if(!d||d.matches(T))return;const i=a.target;i!==d&&(i.matches(T)||i.closest(T)||(t=!1,setTimeout(()=>{t||d.blur()},50)))},!1)})();for(const f of v)M(f);o.addEventListener("ionInputDidLoad",f=>{M(f.detail)}),o.addEventListener("ionInputDidUnload",f=>{(f=>{if(i){const c=l.get(f);c&&c(),l.delete(f)}if(d){const c=_.get(f);c&&c(),_.delete(f)}})(f.detail)})});return function(s,o){return t.apply(this,arguments)}}()}}]);