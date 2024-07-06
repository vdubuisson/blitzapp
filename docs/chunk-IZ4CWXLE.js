import{d as V1}from"./chunk-4QV3BAJX.js";import{Eb as A2,Ia as o1,Ma as D,Sa as t1,W as y2,Y as f1,aa as l1,ca as J,eb as m1,f as n1,pb as H1,sb as z1,ta as t2,tb as v1}from"./chunk-NCRUEMZX.js";var h1=class{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(a=!1,e,s=!0,r){this._multiple=a,this._emitChanges=s,this.compareWith=r,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new n1,e&&e.length&&(a?e.forEach(i=>this._markSelected(i)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...a){this._verifyValueAssignment(a),a.forEach(s=>this._markSelected(s));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...a){this._verifyValueAssignment(a),a.forEach(s=>this._unmarkSelected(s));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...a){this._verifyValueAssignment(a);let e=this.selected,s=new Set(a);a.forEach(i=>this._markSelected(i)),e.filter(i=>!s.has(this._getConcreteValue(i,s))).forEach(i=>this._unmarkSelected(i));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(a){return this.isSelected(a)?this.deselect(a):this.select(a)}clear(a=!0){this._unmarkAll();let e=this._hasQueuedChanges();return a&&this._emitChangeEvent(),e}isSelected(a){return this._selection.has(this._getConcreteValue(a))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(a){this._multiple&&this.selected&&this._selected.sort(a)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(a){a=this._getConcreteValue(a),this.isSelected(a)||(this._multiple||this._unmarkAll(),this.isSelected(a)||this._selection.add(a),this._emitChanges&&this._selectedToEmit.push(a))}_unmarkSelected(a){a=this._getConcreteValue(a),this.isSelected(a)&&(this._selection.delete(a),this._emitChanges&&this._deselectedToEmit.push(a))}_unmarkAll(){this.isEmpty()||this._selection.forEach(a=>this._unmarkSelected(a))}_verifyValueAssignment(a){a.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(a,e){if(this.compareWith){e=e??this._selection;for(let s of e)if(this.compareWith(a,s))return s;return a}else return a}};var z6=(()=>{let a=class a{constructor(){this._listeners=[]}notify(s,r){for(let i of this._listeners)i(s,r)}listen(s){return this._listeners.push(s),()=>{this._listeners=this._listeners.filter(r=>s!==r)}}ngOnDestroy(){this._listeners=[]}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=J({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();var V6={prefix:"fas",iconName:"sort-down",icon:[320,512,["sort-desc"],"f0dd","M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]};var h6={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]};var M6={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]};var p6={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]};var u6={prefix:"fas",iconName:"skull",icon:[512,512,[128128],"f54c","M416 398.9c58.5-41.1 96-104.1 96-174.9C512 100.3 397.4 0 256 0S0 100.3 0 224c0 70.7 37.5 133.8 96 174.9c0 .4 0 .7 0 1.1v64c0 26.5 21.5 48 48 48h48V464c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64V464c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c26.5 0 48-21.5 48-48V400c0-.4 0-.7 0-1.1zM96 256a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm256-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]};var C6={prefix:"fas",iconName:"grip-lines",icon:[448,512,[],"f7a4","M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"]};var L6={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};var d6={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]};var g6={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};var x6={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]};function M1(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function t(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?M1(Object(e),!0).forEach(function(s){u(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):M1(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function d2(c){"@babel/helpers - typeof";return d2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},d2(c)}function C3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function p1(c,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function L3(c,a,e){return a&&p1(c.prototype,a),e&&p1(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function u(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function X2(c,a){return g3(c)||N3(c,a)||q1(c,a)||S3()}function f2(c){return d3(c)||x3(c)||q1(c)||b3()}function d3(c){if(Array.isArray(c))return D2(c)}function g3(c){if(Array.isArray(c))return c}function x3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function N3(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var s=[],r=!0,i=!1,n,f;try{for(e=e.call(c);!(r=(n=e.next()).done)&&(s.push(n.value),!(a&&s.length===a));r=!0);}catch(l){i=!0,f=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw f}}return s}}function q1(c,a){if(c){if(typeof c=="string")return D2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return D2(c,a)}}function D2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function b3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u1=function(){},Y2={},G1={},_1=null,j1={mark:u1,measure:u1};try{typeof window<"u"&&(Y2=window),typeof document<"u"&&(G1=document),typeof MutationObserver<"u"&&(_1=MutationObserver),typeof performance<"u"&&(j1=performance)}catch{}var k3=Y2.navigator||{},C1=k3.userAgent,L1=C1===void 0?"":C1,E=Y2,M=G1,d1=_1,m2=j1,b6=!!E.document,B=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",X1=~L1.indexOf("MSIE")||~L1.indexOf("Trident/"),H2,z2,v2,V2,h2,A="___FONT_AWESOME___",R2=16,Y1="fa",$1="svg-inline--fa",_="data-fa-i2svg",E2="data-fa-pseudo-element",w3="data-fa-pseudo-element-pending",$2="data-prefix",Q2="data-icon",g1="fontawesome-i2svg",y3="async",A3=["HTML","HEAD","STYLE","SCRIPT"],Q1=function(){try{return!0}catch{return!1}}(),h="classic",p="sharp",K2=[h,p];function l2(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[h]}})}var e2=l2((H2={},u(H2,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),u(H2,p,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),H2)),s2=l2((z2={},u(z2,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),u(z2,p,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),z2)),r2=l2((v2={},u(v2,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),u(v2,p,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),v2)),T3=l2((V2={},u(V2,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),u(V2,p,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),V2)),P3=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,K1="fa-layers-text",B3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,F3=l2((h2={},u(h2,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),u(h2,p,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),h2)),J1=[1,2,3,4,5,6,7,8,9,10],D3=J1.concat([11,12,13,14,15,16,17,18,19,20]),R3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},i2=new Set;Object.keys(s2[h]).map(i2.add.bind(i2));Object.keys(s2[p]).map(i2.add.bind(i2));var E3=[].concat(K2,f2(i2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY]).concat(J1.map(function(c){return"".concat(c,"x")})).concat(D3.map(function(c){return"w-".concat(c)})),c2=E.FontAwesomeConfig||{};function U3(c){var a=M.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function I3(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}M&&typeof M.querySelector=="function"&&(x1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],x1.forEach(function(c){var a=X2(c,2),e=a[0],s=a[1],r=I3(U3(e));r!=null&&(c2[s]=r)}));var x1,Z1={styleDefault:"solid",familyDefault:"classic",cssPrefix:Y1,replacementClass:$1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};c2.familyPrefix&&(c2.cssPrefix=c2.familyPrefix);var Q=t(t({},Z1),c2);Q.autoReplaceSvg||(Q.observeMutations=!1);var H={};Object.keys(Z1).forEach(function(c){Object.defineProperty(H,c,{enumerable:!0,set:function(e){Q[c]=e,a2.forEach(function(s){return s(H)})},get:function(){return Q[c]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(a){Q.cssPrefix=a,a2.forEach(function(e){return e(H)})},get:function(){return Q.cssPrefix}});E.FontAwesomeConfig=H;var a2=[];function O3(c){return a2.push(c),function(){a2.splice(a2.indexOf(c),1)}}var R=R2,y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function W3(c){if(!(!c||!B)){var a=M.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=M.head.childNodes,s=null,r=e.length-1;r>-1;r--){var i=e[r],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(s=i)}return M.head.insertBefore(a,s),c}}var q3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function n2(){for(var c=12,a="";c-- >0;)a+=q3[Math.random()*62|0];return a}function K(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function J2(c){return c.classList?K(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function c3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function G3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(c3(c[e]),'" ')},"").trim()}function N2(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function Z2(c){return c.size!==y.size||c.x!==y.x||c.y!==y.y||c.rotate!==y.rotate||c.flipX||c.flipY}function _3(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(n," ").concat(f)},m={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:l,path:m}}function j3(c){var a=c.transform,e=c.width,s=e===void 0?R2:e,r=c.height,i=r===void 0?R2:r,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&X1?l+="translate(".concat(a.x/R-s/2,"em, ").concat(a.y/R-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/R,"em), calc(-50% + ").concat(a.y/R,"em)) "):l+="translate(".concat(a.x/R,"em, ").concat(a.y/R,"em) "),l+="scale(".concat(a.size/R*(a.flipX?-1:1),", ").concat(a.size/R*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var X3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function a3(){var c=Y1,a=$1,e=H.cssPrefix,s=H.replacementClass,r=X3;if(e!==c||s!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(s))}return r}var N1=!1;function T2(){H.autoAddCss&&!N1&&(W3(a3()),N1=!0)}var Y3={mixout:function(){return{dom:{css:a3,insertCss:T2}}},hooks:function(){return{beforeDOMElementCreation:function(){T2()},beforeI2svg:function(){T2()}}}},T=E||{};T[A]||(T[A]={});T[A].styles||(T[A].styles={});T[A].hooks||(T[A].hooks={});T[A].shims||(T[A].shims=[]);var S=T[A],e3=[],$3=function c(){M.removeEventListener("DOMContentLoaded",c),g2=1,e3.map(function(a){return a()})},g2=!1;B&&(g2=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),g2||M.addEventListener("DOMContentLoaded",$3));function Q3(c){B&&(g2?setTimeout(c,0):e3.push(c))}function o2(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?c3(c):"<".concat(a," ").concat(G3(s),">").concat(i.map(o2).join(""),"</").concat(a,">")}function b1(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var K3=function(a,e){return function(s,r,i,n){return a.call(e,s,r,i,n)}},P2=function(a,e,s,r){var i=Object.keys(a),n=i.length,f=r!==void 0?K3(e,r):e,l,m,o;for(s===void 0?(l=1,o=a[i[0]]):(l=0,o=s);l<n;l++)m=i[l],o=f(o,a[m],m,a);return o};function J3(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function U2(c){var a=J3(c);return a.length===1?a[0].toString(16):null}function Z3(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function S1(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function I2(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,i=S1(a);typeof S.hooks.addPack=="function"&&!r?S.hooks.addPack(c,S1(a)):S.styles[c]=t(t({},S.styles[c]||{}),i),c==="fas"&&I2("fa",a)}var M2,p2,u2,X=S.styles,c4=S.shims,a4=(M2={},u(M2,h,Object.values(r2[h])),u(M2,p,Object.values(r2[p])),M2),c1=null,s3={},r3={},i3={},n3={},f3={},e4=(p2={},u(p2,h,Object.keys(e2[h])),u(p2,p,Object.keys(e2[p])),p2);function s4(c){return~E3.indexOf(c)}function r4(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!s4(r)?r:null}var l3=function(){var a=function(i){return P2(X,function(n,f,l){return n[l]=P2(f,i,{}),n},{})};s3=a(function(r,i,n){if(i[3]&&(r[i[3]]=n),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){r[l.toString(16)]=n})}return r}),r3=a(function(r,i,n){if(r[n]=n,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){r[l]=n})}return r}),f3=a(function(r,i,n){var f=i[2];return r[n]=n,f.forEach(function(l){r[l]=n}),r});var e="far"in X||H.autoFetchSvg,s=P2(c4,function(r,i){var n=i[0],f=i[1],l=i[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(r.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:f,iconName:l}),r},{names:{},unicodes:{}});i3=s.names,n3=s.unicodes,c1=b2(H.styleDefault,{family:H.familyDefault})};O3(function(c){c1=b2(c.styleDefault,{family:H.familyDefault})});l3();function a1(c,a){return(s3[c]||{})[a]}function i4(c,a){return(r3[c]||{})[a]}function G(c,a){return(f3[c]||{})[a]}function o3(c){return i3[c]||{prefix:null,iconName:null}}function n4(c){var a=n3[c],e=a1("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function U(){return c1}var e1=function(){return{prefix:null,iconName:null,rest:[]}};function b2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?h:e,r=e2[s][c],i=s2[s][c]||s2[s][r],n=c in S.styles?c:null;return i||n||null}var k1=(u2={},u(u2,h,Object.keys(r2[h])),u(u2,p,Object.keys(r2[p])),u2);function S2(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,i=(a={},u(a,h,"".concat(H.cssPrefix,"-").concat(h)),u(a,p,"".concat(H.cssPrefix,"-").concat(p)),a),n=null,f=h;(c.includes(i[h])||c.some(function(m){return k1[h].includes(m)}))&&(f=h),(c.includes(i[p])||c.some(function(m){return k1[p].includes(m)}))&&(f=p);var l=c.reduce(function(m,o){var z=r4(H.cssPrefix,o);if(X[o]?(o=a4[f].includes(o)?T3[f][o]:o,n=o,m.prefix=o):e4[f].indexOf(o)>-1?(n=o,m.prefix=b2(o,{family:f})):z?m.iconName=z:o!==H.replacementClass&&o!==i[h]&&o!==i[p]&&m.rest.push(o),!r&&m.prefix&&m.iconName){var v=n==="fa"?o3(m.iconName):{},V=G(m.prefix,m.iconName);v.prefix&&(n=null),m.iconName=v.iconName||V||m.iconName,m.prefix=v.prefix||m.prefix,m.prefix==="far"&&!X.far&&X.fas&&!H.autoFetchSvg&&(m.prefix="fas")}return m},e1());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===p&&(X.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=G(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=U()||"fas"),l}var f4=function(){function c(){C3(this,c),this.definitions={}}return L3(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=t(t({},e.definitions[f]||{}),n[f]),I2(f,n[f]);var l=r2[h][f];l&&I2(l,n[f]),l3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var n=r[i],f=n.prefix,l=n.iconName,m=n.icon,o=m[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(e[f][z]=m)}),e[f][l]=m}),e}}]),c}(),w1=[],Y={},$={},l4=Object.keys($);function o4(c,a){var e=a.mixoutsTo;return w1=c,Y={},Object.keys($).forEach(function(s){l4.indexOf(s)===-1&&delete $[s]}),w1.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(e[n]=r[n]),d2(r[n])==="object"&&Object.keys(r[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=r[n][f]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(n){Y[n]||(Y[n]=[]),Y[n].push(i[n])})}s.provides&&s.provides($)}),e}function O2(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var i=Y[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(s))}),a}function j(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=Y[c]||[];r.forEach(function(i){i.apply(null,e)})}function P(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return $[c]?$[c].apply(null,a):void 0}function W2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||U();if(a)return a=G(e,a)||a,b1(t3.definitions,e,a)||b1(S.styles,e,a)}var t3=new f4,t4=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,j("noAuto")},m4={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(j("beforeI2svg",a),P("pseudoElements2svg",a),P("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,Q3(function(){z4({autoReplaceSvgRoot:e}),j("watch",a)})}},H4={icon:function(a){if(a===null)return null;if(d2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:G(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=b2(a[0]);return{prefix:s,iconName:G(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(H.cssPrefix,"-"))>-1||a.match(P3))){var r=S2(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:G(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=U();return{prefix:i,iconName:G(i,a)||a}}}},x={noAuto:t4,config:H,dom:m4,parse:H4,library:t3,findIconDefinition:W2,toHtml:o2},z4=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?M:e;(Object.keys(S.styles).length>0||H.autoFetchSvg)&&B&&H.autoReplaceSvg&&x.dom.i2svg({node:s})};function k2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return o2(s)})}}),Object.defineProperty(c,"node",{get:function(){if(B){var s=M.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function v4(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,i=c.styles,n=c.transform;if(Z2(n)&&e.found&&!s.found){var f=e.width,l=e.height,m={x:f/l/2,y:.5};r.style=N2(t(t({},i),{},{"transform-origin":"".concat(m.x+n.x/16,"em ").concat(m.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function V4(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(H.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},r),{},{id:n}),children:s}]}]}function s1(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,l=c.title,m=c.maskId,o=c.titleId,z=c.extra,v=c.watchable,V=v===void 0?!1:v,L=s.found?s:e,N=L.width,b=L.height,k=r==="fak",C=[H.replacementClass,i?"".concat(H.cssPrefix,"-").concat(i):""].filter(function(F){return z.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(z.classes).join(" "),d={children:[],attributes:t(t({},z.attributes),{},{"data-prefix":r,"data-icon":i,class:C,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(b)})},w=k&&!~z.classes.indexOf("fa-fw")?{width:"".concat(N/b*16*.0625,"em")}:{};V&&(d.attributes[_]=""),l&&(d.children.push({tag:"title",attributes:{id:d.attributes["aria-labelledby"]||"title-".concat(o||n2())},children:[l]}),delete d.attributes.title);var g=t(t({},d),{},{prefix:r,iconName:i,main:e,mask:s,maskId:m,transform:n,symbol:f,styles:t(t({},w),z.styles)}),O=s.found&&e.found?P("generateAbstractMask",g)||{children:[],attributes:{}}:P("generateAbstractIcon",g)||{children:[],attributes:{}},W=O.children,w2=O.attributes;return g.children=W,g.attributes=w2,f?V4(g):v4(g)}function y1(c){var a=c.content,e=c.width,s=c.height,r=c.transform,i=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,m=t(t(t({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});l&&(m[_]="");var o=t({},n.styles);Z2(r)&&(o.transform=j3({transform:r,startCentered:!0,width:e,height:s}),o["-webkit-transform"]=o.transform);var z=N2(o);z.length>0&&(m.style=z);var v=[];return v.push({tag:"span",attributes:m,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function h4(c){var a=c.content,e=c.title,s=c.extra,r=t(t(t({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),i=N2(s.styles);i.length>0&&(r.style=i);var n=[];return n.push({tag:"span",attributes:r,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var B2=S.styles;function q2(c){var a=c[0],e=c[1],s=c.slice(4),r=X2(s,1),i=r[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(q.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(q.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var M4={found:!1,width:512,height:512};function p4(c,a){!Q1&&!H.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function G2(c,a){var e=a;return a==="fa"&&H.styleDefault!==null&&(a=U()),new Promise(function(s,r){var i={found:!1,width:512,height:512,icon:P("missingIconAbstract")||{}};if(e==="fa"){var n=o3(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&B2[a]&&B2[a][c]){var f=B2[a][c];return s(q2(f))}p4(c,a),s(t(t({},M4),{},{icon:H.showMissingIcons&&c?P("missingIconAbstract")||{}:{}}))})}var A1=function(){},_2=H.measurePerformance&&m2&&m2.mark&&m2.measure?m2:{mark:A1,measure:A1},Z='FA "6.5.2"',u4=function(a){return _2.mark("".concat(Z," ").concat(a," begins")),function(){return m3(a)}},m3=function(a){_2.mark("".concat(Z," ").concat(a," ends")),_2.measure("".concat(Z," ").concat(a),"".concat(Z," ").concat(a," begins"),"".concat(Z," ").concat(a," ends"))},r1={begin:u4,end:m3},C2=function(){};function T1(c){var a=c.getAttribute?c.getAttribute(_):null;return typeof a=="string"}function C4(c){var a=c.getAttribute?c.getAttribute($2):null,e=c.getAttribute?c.getAttribute(Q2):null;return a&&e}function L4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(H.replacementClass)}function d4(){if(H.autoReplaceSvg===!0)return L2.replace;var c=L2[H.autoReplaceSvg];return c||L2.replace}function g4(c){return M.createElementNS("http://www.w3.org/2000/svg",c)}function x4(c){return M.createElement(c)}function H3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?g4:x4:e;if(typeof c=="string")return M.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){r.appendChild(H3(n,{ceFn:s}))}),r}function N4(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var L2={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(H3(r),e)}),e.getAttribute(_)===null&&H.keepOriginalSource){var s=M.createComment(N4(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~J2(e).indexOf(H.replacementClass))return L2.replace(a);var r=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(f,l){return l===H.replacementClass||l.match(r)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=s.map(function(f){return o2(f)}).join(`
`);e.setAttribute(_,""),e.innerHTML=n}};function P1(c){c()}function z3(c,a){var e=typeof a=="function"?a:C2;if(c.length===0)e();else{var s=P1;H.mutateApproach===y3&&(s=E.requestAnimationFrame||P1),s(function(){var r=d4(),i=r1.begin("mutate");c.map(r),i(),e()})}}var i1=!1;function v3(){i1=!0}function j2(){i1=!1}var x2=null;function B1(c){if(d1&&H.observeMutations){var a=c.treeCallback,e=a===void 0?C2:a,s=c.nodeCallback,r=s===void 0?C2:s,i=c.pseudoElementsCallback,n=i===void 0?C2:i,f=c.observeMutationsRoot,l=f===void 0?M:f;x2=new d1(function(m){if(!i1){var o=U();K(m).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!T1(z.addedNodes[0])&&(H.searchPseudoElements&&n(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&H.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&T1(z.target)&&~R3.indexOf(z.attributeName))if(z.attributeName==="class"&&C4(z.target)){var v=S2(J2(z.target)),V=v.prefix,L=v.iconName;z.target.setAttribute($2,V||o),L&&z.target.setAttribute(Q2,L)}else L4(z.target)&&r(z.target)})}}),B&&x2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function b4(){x2&&x2.disconnect()}function S4(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var i=r.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(s[n]=f.join(":").trim()),s},{})),e}function k4(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=S2(J2(c));return r.prefix||(r.prefix=U()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=i4(r.prefix,c.innerText)||a1(r.prefix,U2(c.innerText))),!r.iconName&&H.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function w4(c){var a=K(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return H.autoA11y&&(e?a["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(s||n2()):(a["aria-hidden"]="true",a.focusable="false")),a}function y4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function F1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=k4(c),s=e.iconName,r=e.prefix,i=e.rest,n=w4(c),f=O2("parseNodeAttributes",{},c),l=a.styleParser?S4(c):[];return t({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:n}},f)}var A4=S.styles;function V3(c){var a=H.autoReplaceSvg==="nest"?F1(c,{styleParser:!1}):F1(c);return~a.extra.classes.indexOf(K1)?P("generateLayersText",c,a):P("generateSvgReplacementMutation",c,a)}var I=new Set;K2.map(function(c){I.add("fa-".concat(c))});Object.keys(e2[h]).map(I.add.bind(I));Object.keys(e2[p]).map(I.add.bind(I));I=f2(I);function D1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var e=M.documentElement.classList,s=function(z){return e.add("".concat(g1,"-").concat(z))},r=function(z){return e.remove("".concat(g1,"-").concat(z))},i=H.autoFetchSvg?I:K2.map(function(o){return"fa-".concat(o)}).concat(Object.keys(A4));i.includes("fa")||i.push("fa");var n=[".".concat(K1,":not([").concat(_,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(_,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=K(c.querySelectorAll(n))}catch{}if(f.length>0)s("pending"),r("complete");else return Promise.resolve();var l=r1.begin("onTree"),m=f.reduce(function(o,z){try{var v=V3(z);v&&o.push(v)}catch(V){Q1||V.name==="MissingIcon"&&console.error(V)}return o},[]);return new Promise(function(o,z){Promise.all(m).then(function(v){z3(v,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(v){l(),z(v)})})}function T4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;V3(c).then(function(e){e&&z3([e],a)})}function P4(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:W2(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:W2(r||{})),c(s,t(t({},e),{},{mask:r}))}}var B4=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?y:s,i=e.symbol,n=i===void 0?!1:i,f=e.mask,l=f===void 0?null:f,m=e.maskId,o=m===void 0?null:m,z=e.title,v=z===void 0?null:z,V=e.titleId,L=V===void 0?null:V,N=e.classes,b=N===void 0?[]:N,k=e.attributes,C=k===void 0?{}:k,d=e.styles,w=d===void 0?{}:d;if(a){var g=a.prefix,O=a.iconName,W=a.icon;return k2(t({type:"icon"},a),function(){return j("beforeDOMElementCreation",{iconDefinition:a,params:e}),H.autoA11y&&(v?C["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(L||n2()):(C["aria-hidden"]="true",C.focusable="false")),s1({icons:{main:q2(W),mask:l?q2(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:O,transform:t(t({},y),r),symbol:n,title:v,maskId:o,titleId:L,extra:{attributes:C,styles:w,classes:b}})})}},F4={mixout:function(){return{icon:P4(B4)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=D1,e.nodeCallback=T4,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?M:s,i=e.callback,n=i===void 0?function(){}:i;return D1(r,n)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,i=s.title,n=s.titleId,f=s.prefix,l=s.transform,m=s.symbol,o=s.mask,z=s.maskId,v=s.extra;return new Promise(function(V,L){Promise.all([G2(r,f),o.iconName?G2(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var b=X2(N,2),k=b[0],C=b[1];V([e,s1({icons:{main:k,mask:C},prefix:f,iconName:r,transform:l,symbol:m,maskId:z,title:i,titleId:n,extra:v,watchable:!0})])}).catch(L)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.transform,f=e.styles,l=N2(f);l.length>0&&(r.style=l);var m;return Z2(n)&&(m=P("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),s.push(m||i.icon),{children:s,attributes:r}}}},D4={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return k2({type:"layer"},function(){j("beforeDOMElementCreation",{assembler:e,params:s});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(f2(i)).join(" ")},children:n}]})}}}},R4={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,i=r===void 0?null:r,n=s.classes,f=n===void 0?[]:n,l=s.attributes,m=l===void 0?{}:l,o=s.styles,z=o===void 0?{}:o;return k2({type:"counter",content:e},function(){return j("beforeDOMElementCreation",{content:e,params:s}),h4({content:e.toString(),title:i,extra:{attributes:m,styles:z,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(f2(f))}})})}}}},E4={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?y:r,n=s.title,f=n===void 0?null:n,l=s.classes,m=l===void 0?[]:l,o=s.attributes,z=o===void 0?{}:o,v=s.styles,V=v===void 0?{}:v;return k2({type:"text",content:e},function(){return j("beforeDOMElementCreation",{content:e,params:s}),y1({content:e,transform:t(t({},y),i),title:f,extra:{attributes:z,styles:V,classes:["".concat(H.cssPrefix,"-layers-text")].concat(f2(m))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,i=s.transform,n=s.extra,f=null,l=null;if(X1){var m=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/m,l=o.height/m}return H.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,y1({content:e.innerHTML,width:f,height:l,transform:i,title:r,extra:n,watchable:!0})])}}},U4=new RegExp('"',"ug"),R1=[1105920,1112319];function I4(c){var a=c.replace(U4,""),e=Z3(a,0),s=e>=R1[0]&&e<=R1[1],r=a.length===2?a[0]===a[1]:!1;return{value:U2(r?a[0]:a),isSecondary:s||r}}function E1(c,a){var e="".concat(w3).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var i=K(c.children),n=i.filter(function(W){return W.getAttribute(E2)===a})[0],f=E.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(B3),m=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),s();if(l&&o!=="none"&&o!==""){var z=f.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?p:h,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?s2[v][l[2].toLowerCase()]:F3[v][m],L=I4(z),N=L.value,b=L.isSecondary,k=l[0].startsWith("FontAwesome"),C=a1(V,N),d=C;if(k){var w=n4(N);w.iconName&&w.prefix&&(C=w.iconName,V=w.prefix)}if(C&&!b&&(!n||n.getAttribute($2)!==V||n.getAttribute(Q2)!==d)){c.setAttribute(e,d),n&&c.removeChild(n);var g=y4(),O=g.extra;O.attributes[E2]=a,G2(C,V).then(function(W){var w2=s1(t(t({},g),{},{icons:{main:W,mask:e1()},prefix:V,iconName:d,extra:O,watchable:!0})),F=M.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(F,c.firstChild):c.appendChild(F),F.outerHTML=w2.map(function(p3){return o2(p3)}).join(`
`),c.removeAttribute(e),s()}).catch(r)}else s()}else s()})}function O4(c){return Promise.all([E1(c,"::before"),E1(c,"::after")])}function W4(c){return c.parentNode!==document.head&&!~A3.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(E2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function U1(c){if(B)return new Promise(function(a,e){var s=K(c.querySelectorAll("*")).filter(W4).map(O4),r=r1.begin("searchPseudoElements");v3(),Promise.all(s).then(function(){r(),j2(),a()}).catch(function(){r(),j2(),e()})})}var q4={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=U1,e}}},provides:function(a){a.pseudoElements2svg=function(e){var s=e.node,r=s===void 0?M:s;H.searchPseudoElements&&U1(r)}}},I1=!1,G4={mixout:function(){return{dom:{unwatch:function(){v3(),I1=!0}}}},hooks:function(){return{bootstrap:function(){B1(O2("mutationObserverCallbacks",{}))},noAuto:function(){b4()},watch:function(e){var s=e.observeMutationsRoot;I1?j2():B1(O2("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},O1=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(s,r){var i=r.toLowerCase().split("-"),n=i[0],f=i.slice(1).join("-");if(n&&f==="h")return s.flipX=!0,s;if(n&&f==="v")return s.flipY=!0,s;if(f=parseFloat(f),isNaN(f))return s;switch(n){case"grow":s.size=s.size+f;break;case"shrink":s.size=s.size-f;break;case"left":s.x=s.x-f;break;case"right":s.x=s.x+f;break;case"up":s.y=s.y-f;break;case"down":s.y=s.y+f;break;case"rotate":s.rotate=s.rotate+f;break}return s},e)},_4={mixout:function(){return{parse:{transform:function(e){return O1(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-transform");return r&&(e.transform=O1(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var s=e.main,r=e.transform,i=e.containerWidth,n=e.iconWidth,f={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),m="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),o="rotate(".concat(r.rotate," 0 0)"),z={transform:"".concat(l," ").concat(m," ").concat(o)},v={transform:"translate(".concat(n/2*-1," -256)")},V={outer:f,inner:z,path:v};return{tag:"g",attributes:t({},V.outer),children:[{tag:"g",attributes:t({},V.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:t(t({},s.icon.attributes),V.path)}]}]}}}},F2={x:0,y:0,width:"100%",height:"100%"};function W1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function j4(c){return c.tag==="g"?c.children:[c]}var X4={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-mask"),i=r?S2(r.split(" ").map(function(n){return n.trim()})):e1();return i.prefix||(i.prefix=U()),e.mask=i,e.maskId=s.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.mask,f=e.maskId,l=e.transform,m=i.width,o=i.icon,z=n.width,v=n.icon,V=_3({transform:l,containerWidth:z,iconWidth:m}),L={tag:"rect",attributes:t(t({},F2),{},{fill:"white"})},N=o.children?{children:o.children.map(W1)}:{},b={tag:"g",attributes:t({},V.inner),children:[W1(t({tag:o.tag,attributes:t(t({},o.attributes),V.path)},N))]},k={tag:"g",attributes:t({},V.outer),children:[b]},C="mask-".concat(f||n2()),d="clip-".concat(f||n2()),w={tag:"mask",attributes:t(t({},F2),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,k]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:j4(v)},w]};return s.push(g,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(C,")")},F2)}),{children:s,attributes:r}}}},Y4={provides:function(a){var e=!1;E.matchMedia&&(e=E.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var s=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:t(t({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=t(t({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:t(t({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:t(t({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(f),s.push({tag:"path",attributes:t(t({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:t(t({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||s.push({tag:"path",attributes:t(t({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},$4={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},Q4=[Y3,F4,D4,R4,E4,q4,G4,_4,X4,Y4,$4];o4(Q4,{mixoutsTo:x});var S6=x.noAuto,k6=x.config,w6=x.library,y6=x.dom,h3=x.parse,A6=x.findIconDefinition,T6=x.toHtml,M3=x.icon,P6=x.layer,K4=x.text,J4=x.counter;var Z4=["*"],c6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},a6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},e6=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(e=>a[e]?e:null).filter(e=>e)},s6=c=>c.prefix!==void 0&&c.iconName!==void 0,r6=(c,a)=>s6(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},i6=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=J({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),n6=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...s){for(let r of s){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let i of r.icon[2])typeof i=="string"&&(this.definitions[r.prefix][i]=r)}}addIconPacks(...s){for(let r of s){let i=Object.keys(r).map(n=>r[n]);this.addIcons(...i)}}getIconDefinition(s,r){return s in this.definitions&&r in this.definitions[s]?this.definitions[s][r]:null}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=J({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),f6=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(s){if("size"in s)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(r){return new(r||a)},a.\u0275dir=f1({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[t2]});let c=a;return c})(),l6=(()=>{let a=class a{constructor(s,r){this.renderer=s,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(s){"size"in s&&(s.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${s.size.currentValue}`),s.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${s.size.previousValue}`))}};a.\u0275fac=function(r){return new(r||a)(D(t1),D(l1))},a.\u0275cmp=y2({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[t2,A2],ngContentSelectors:Z4,decls:1,vars:0,template:function(r,i){r&1&&(z1(),v1(0))},encapsulation:2});let c=a;return c})(),W6=(()=>{let a=class a{set spin(s){this.animation=s?"spin":void 0}set pulse(s){this.animation=s?"spin-pulse":void 0}constructor(s,r,i,n,f){this.sanitizer=s,this.config=r,this.iconLibrary=i,this.stackItem=n,this.classes=[],f!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(s){if(this.icon==null&&this.config.fallbackIcon==null){a6();return}if(s){let r=this.icon!=null?this.icon:this.config.fallbackIcon,i=this.findIconDefinition(r);if(i!=null){let n=this.buildParams();this.renderIcon(i,n)}}}render(){this.ngOnChanges({})}findIconDefinition(s){let r=r6(s,this.config.defaultPrefix);if("icon"in r)return r;let i=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return i??(c6(r),null)}buildParams(){let s={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?h3.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...e6(s),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(s,r){let i=M3(s,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}};a.\u0275fac=function(r){return new(r||a)(D(V1),D(i6),D(n6),D(f6,8),D(l6,8))},a.\u0275cmp=y2({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,i){r&2&&(H1("innerHTML",i.renderedIconHTML,o1),m1("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[t2,A2],decls:0,vars:0,template:function(r,i){},encapsulation:2});let c=a;return c})();export{h1 as a,z6 as b,V6 as c,h6 as d,M6 as e,p6 as f,u6 as g,C6 as h,L6 as i,d6 as j,g6 as k,x6 as l,W6 as m};
