"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[8058],{8058:(W,h,p)=>{p.r(h),p.d(h,{startTapClick:()=>S});var i=p(6225),u=p(839);const S=o=>{if(void 0===i.d)return;let e,E,c,s=10*-v,r=0;const O=o.getBoolean("animated",!0)&&o.getBoolean("rippleEffect",!0),f=new WeakMap,L=t=>{s=(0,u.u)(t),R(t)},A=()=>{c&&clearTimeout(c),c=void 0,e&&(g(!1),e=void 0)},D=t=>{e||_(b(t),t)},R=t=>{_(void 0,t)},_=(t,n)=>{if(t&&t===e)return;c&&clearTimeout(c),c=void 0;const{x:d,y:a}=(0,u.v)(n);if(e){if(f.has(e))throw new Error("internal error");e.classList.contains(l)||w(e,d,a),g(!0)}if(t){const I=f.get(t);I&&(clearTimeout(I),f.delete(t)),t.classList.remove(l);const M=()=>{w(t,d,a),c=void 0};m(t)?M():c=setTimeout(M,k)}e=t},w=(t,n,d)=>{if(r=Date.now(),t.classList.add(l),!O)return;const a=P(t);null!==a&&(C(),E=a.addRipple(n,d))},C=()=>{void 0!==E&&(E.then(t=>t()),E=void 0)},g=t=>{C();const n=e;if(!n)return;const d=T-Date.now()+r;if(t&&d>0&&!m(n)){const a=setTimeout(()=>{n.classList.remove(l),f.delete(n)},T);f.set(n,a)}else n.classList.remove(l)};i.d.addEventListener("ionGestureCaptured",A),i.d.addEventListener("touchstart",t=>{s=(0,u.u)(t),D(t)},!0),i.d.addEventListener("touchcancel",L,!0),i.d.addEventListener("touchend",L,!0),i.d.addEventListener("pointercancel",A,!0),i.d.addEventListener("mousedown",t=>{if(2===t.button)return;const n=(0,u.u)(t)-v;s<n&&D(t)},!0),i.d.addEventListener("mouseup",t=>{const n=(0,u.u)(t)-v;s<n&&R(t)},!0)},b=o=>{if(void 0===o.composedPath)return o.target.closest(".ion-activatable");{const s=o.composedPath();for(let r=0;r<s.length-2;r++){const e=s[r];if(!(e instanceof ShadowRoot)&&e.classList.contains("ion-activatable"))return e}}},m=o=>o.classList.contains("ion-activatable-instant"),P=o=>{if(o.shadowRoot){const s=o.shadowRoot.querySelector("ion-ripple-effect");if(s)return s}return o.querySelector("ion-ripple-effect")},l="ion-activated",k=100,T=150,v=2500}}]);