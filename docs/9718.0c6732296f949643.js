"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[9718],{9718:(O,h,E)=>{E.r(h),E.d(h,{startTapClick:()=>b});var d=E(5730);const b=o=>{let e,p,r,s=10*-m,a=0;const y=o.getBoolean("animated",!0)&&o.getBoolean("rippleEffect",!0),f=new WeakMap,L=t=>{s=(0,d.u)(t),R(t)},A=()=>{clearTimeout(r),r=void 0,e&&(S(!1),e=void 0)},D=t=>{e||w(I(t),t)},R=t=>{w(void 0,t)},w=(t,n)=>{if(t&&t===e)return;clearTimeout(r),r=void 0;const{x:u,y:c}=(0,d.p)(n);if(e){if(f.has(e))throw new Error("internal error");e.classList.contains(l)||g(e,u,c),S(!0)}if(t){const _=f.get(t);_&&(clearTimeout(_),f.delete(t));const B=v(t)?0:k;t.classList.remove(l),r=setTimeout(()=>{g(t,u,c),r=void 0},B)}e=t},g=(t,n,u)=>{if(a=Date.now(),t.classList.add(l),!y)return;const c=M(t);null!==c&&(C(),p=c.addRipple(n,u))},C=()=>{void 0!==p&&(p.then(t=>t()),p=void 0)},S=t=>{C();const n=e;if(!n)return;const u=T-Date.now()+a;if(t&&u>0&&!v(n)){const c=setTimeout(()=>{n.classList.remove(l),f.delete(n)},T);f.set(n,c)}else n.classList.remove(l)},i=document;i.addEventListener("ionGestureCaptured",A),i.addEventListener("touchstart",t=>{s=(0,d.u)(t),D(t)},!0),i.addEventListener("touchcancel",L,!0),i.addEventListener("touchend",L,!0),i.addEventListener("pointercancel",A,!0),i.addEventListener("mousedown",t=>{if(2===t.button)return;const n=(0,d.u)(t)-m;s<n&&D(t)},!0),i.addEventListener("mouseup",t=>{const n=(0,d.u)(t)-m;s<n&&R(t)},!0)},I=o=>{if(void 0===o.composedPath)return o.target.closest(".ion-activatable");{const s=o.composedPath();for(let a=0;a<s.length-2;a++){const e=s[a];if(!(e instanceof ShadowRoot)&&e.classList.contains("ion-activatable"))return e}}},v=o=>o.classList.contains("ion-activatable-instant"),M=o=>{if(o.shadowRoot){const s=o.shadowRoot.querySelector("ion-ripple-effect");if(s)return s}return o.querySelector("ion-ripple-effect")},l="ion-activated",k=200,T=200,m=2500}}]);