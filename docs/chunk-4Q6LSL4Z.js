import{Aa as f1,Ab as a2,Cb as S,Ja as n1,M as $,Qb as u1,R as T,Y as e1,Ya as o1,ab as t1,bb as m1,ea as r1,ja as s1,lb as z1,ma as i1,wb as v2,ya as L2}from"./chunk-G2GMQCZE.js";import{a as a1,b as l1}from"./chunk-2NFLSA4Y.js";function y2(c,a){(a==null||a>c.length)&&(a=c.length);for(var l=0,e=Array(a);l<a;l++)e[l]=c[l];return e}function e3(c){if(Array.isArray(c))return c}function r3(c){if(Array.isArray(c))return y2(c)}function s3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function p1(c,a){for(var l=0;l<a.length;l++){var e=a[l];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,_1(e.key),e)}}function i3(c,a,l){return a&&p1(c.prototype,a),l&&p1(c,l),Object.defineProperty(c,"prototype",{writable:!1}),c}function r2(c,a){var l=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!l){if(Array.isArray(c)||(l=O2(c))||a&&c&&typeof c.length=="number"){l&&(c=l);var e=0,r=function(){};return{s:r,n:function(){return e>=c.length?{done:!0}:{done:!1,value:c[e++]}},e:function(n){throw n},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,i=!0,f=!1;return{s:function(){l=l.call(c)},n:function(){var n=l.next();return i=n.done,n},e:function(n){f=!0,s=n},f:function(){try{i||l.return==null||l.return()}finally{if(f)throw s}}}}function p(c,a,l){return(a=_1(a))in c?Object.defineProperty(c,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[a]=l,c}function f3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function n3(c,a){var l=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(l!=null){var e,r,s,i,f=[],n=!0,t=!1;try{if(s=(l=l.call(c)).next,a===0){if(Object(l)!==l)return;n=!1}else for(;!(n=(e=s.call(l)).done)&&(f.push(e.value),f.length!==a);n=!0);}catch(z){t=!0,r=z}finally{try{if(!n&&l.return!=null&&(i=l.return(),Object(i)!==i))return}finally{if(t)throw r}}return f}}function o3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M1(c,a){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),l.push.apply(l,e)}return l}function o(c){for(var a=1;a<arguments.length;a++){var l=arguments[a]!=null?arguments[a]:{};a%2?M1(Object(l),!0).forEach(function(e){p(c,e,l[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):M1(Object(l)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(l,e))})}return c}function t2(c,a){return e3(c)||n3(c,a)||O2(c,a)||o3()}function k(c){return r3(c)||f3(c)||O2(c)||t3()}function m3(c,a){if(typeof c!="object"||!c)return c;var l=c[Symbol.toPrimitive];if(l!==void 0){var e=l.call(c,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(c)}function _1(c){var a=m3(c,"string");return typeof a=="symbol"?a:a+""}function f2(c){"@babel/helpers - typeof";return f2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},f2(c)}function O2(c,a){if(c){if(typeof c=="string")return y2(c,a);var l={}.toString.call(c).slice(8,-1);return l==="Object"&&c.constructor&&(l=c.constructor.name),l==="Map"||l==="Set"?Array.from(c):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?y2(c,a):void 0}}var d1=function(){},q2={},$1={},X1=null,Y1={mark:d1,measure:d1};try{typeof window<"u"&&(q2=window),typeof document<"u"&&($1=document),typeof MutationObserver<"u"&&(X1=MutationObserver),typeof performance<"u"&&(Y1=performance)}catch{}var z3=q2.navigator||{},L1=z3.userAgent,v1=L1===void 0?"":L1,R=q2,L=$1,h1=X1,l2=Y1,D8=!!R.document,B=!!L.documentElement&&!!L.head&&typeof L.addEventListener=="function"&&typeof L.createElement=="function",K1=~v1.indexOf("MSIE")||~v1.indexOf("Trident/"),h2,u3=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,p3=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Q1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},M3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},J1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],C="classic",J="duotone",Z1="sharp",c4="sharp-duotone",a4="chisel",l4="etch",e4="graphite",r4="jelly",s4="jelly-duo",i4="jelly-fill",f4="notdog",n4="notdog-duo",o4="slab",t4="slab-press",m4="thumbprint",z4="utility",u4="utility-duo",p4="utility-fill",M4="whiteboard",d3="Classic",L3="Duotone",v3="Sharp",h3="Sharp Duotone",g3="Chisel",C3="Etch",x3="Graphite",S3="Jelly",N3="Jelly Duo",b3="Jelly Fill",y3="Notdog",w3="Notdog Duo",k3="Slab",A3="Slab Press",P3="Thumbprint",T3="Utility",F3="Utility Duo",D3="Utility Fill",B3="Whiteboard",d4=[C,J,Z1,c4,a4,l4,e4,r4,s4,i4,f4,n4,o4,t4,m4,z4,u4,p4,M4],B8=(h2={},p(p(p(p(p(p(p(p(p(p(h2,C,d3),J,L3),Z1,v3),c4,h3),a4,g3),l4,C3),e4,x3),r4,S3),s4,N3),i4,b3),p(p(p(p(p(p(p(p(p(h2,f4,y3),n4,w3),o4,k3),t4,A3),m4,P3),z4,T3),u4,F3),p4,D3),M4,B3)),H3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},R3={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},E3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),I3={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},L4=["fak","fa-kit","fakd","fa-kit-duotone"],g1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},U3=["kit"],W3="kit",O3="kit-duotone",q3="Kit",G3="Kit Duotone",H8=p(p({},W3,q3),O3,G3),j3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},V3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},_3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},C1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},g2,e2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],X3="classic",Y3="duotone",K3="sharp",Q3="sharp-duotone",J3="chisel",Z3="etch",c0="graphite",a0="jelly",l0="jelly-duo",e0="jelly-fill",r0="notdog",s0="notdog-duo",i0="slab",f0="slab-press",n0="thumbprint",o0="utility",t0="utility-duo",m0="utility-fill",z0="whiteboard",u0="Classic",p0="Duotone",M0="Sharp",d0="Sharp Duotone",L0="Chisel",v0="Etch",h0="Graphite",g0="Jelly",C0="Jelly Duo",x0="Jelly Fill",S0="Notdog",N0="Notdog Duo",b0="Slab",y0="Slab Press",w0="Thumbprint",k0="Utility",A0="Utility Duo",P0="Utility Fill",T0="Whiteboard",R8=(g2={},p(p(p(p(p(p(p(p(p(p(g2,X3,u0),Y3,p0),K3,M0),Q3,d0),J3,L0),Z3,v0),c0,h0),a0,g0),l0,C0),e0,x0),p(p(p(p(p(p(p(p(p(g2,r0,S0),s0,N0),i0,b0),f0,y0),n0,w0),o0,k0),t0,A0),m0,P0),z0,T0)),F0="kit",D0="kit-duotone",B0="Kit",H0="Kit Duotone",E8=p(p({},F0,B0),D0,H0),R0={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},E0={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},w2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},I0=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],v4=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat($3,I0),U0=["solid","regular","light","thin","duotone","brands","semibold"],h4=[1,2,3,4,5,6,7,8,9,10],W0=h4.concat([11,12,13,14,15,16,17,18,19,20]),O0=["aw","fw","pull-left","pull-right"],q0=[].concat(k(Object.keys(E0)),U0,O0,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",e2.GROUP,e2.SWAP_OPACITY,e2.PRIMARY,e2.SECONDARY]).concat(h4.map(function(c){return"".concat(c,"x")})).concat(W0.map(function(c){return"w-".concat(c)})),G0={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},F="___FONT_AWESOME___",k2=16,g4="fa",C4="svg-inline--fa",W="data-fa-i2svg",A2="data-fa-pseudo-element",j0="data-fa-pseudo-element-pending",G2="data-prefix",j2="data-icon",x1="fontawesome-i2svg",V0="async",_0=["HTML","HEAD","STYLE","SCRIPT"],x4=["::before","::after",":before",":after"],S4=(function(){try{return!0}catch{return!1}})();function Z(c){return new Proxy(c,{get:function(l,e){return e in l?l[e]:l[C]}})}var N4=o({},Q1);N4[C]=o(o(o(o({},{"fa-duotone":"duotone"}),Q1[C]),g1.kit),g1["kit-duotone"]);var $0=Z(N4),P2=o({},I3);P2[C]=o(o(o(o({},{duotone:"fad"}),P2[C]),C1.kit),C1["kit-duotone"]);var S1=Z(P2),T2=o({},w2);T2[C]=o(o({},T2[C]),_3.kit);var V2=Z(T2),F2=o({},R0);F2[C]=o(o({},F2[C]),j3.kit);var I8=Z(F2),X0=u3,b4="fa-layers-text",Y0=p3,K0=o({},H3),U8=Z(K0),Q0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],C2=M3,J0=[].concat(k(U3),k(q0)),Y=R.FontAwesomeConfig||{};function Z0(c){var a=L.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function c6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}L&&typeof L.querySelector=="function"&&(N1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],N1.forEach(function(c){var a=t2(c,2),l=a[0],e=a[1],r=c6(Z0(l));r!=null&&(Y[e]=r)}));var N1,y4={styleDefault:"solid",familyDefault:C,cssPrefix:g4,replacementClass:C4,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Y.familyPrefix&&(Y.cssPrefix=Y.familyPrefix);var V=o(o({},y4),Y);V.autoReplaceSvg||(V.observeMutations=!1);var u={};Object.keys(y4).forEach(function(c){Object.defineProperty(u,c,{enumerable:!0,set:function(l){V[c]=l,K.forEach(function(e){return e(u)})},get:function(){return V[c]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(a){V.cssPrefix=a,K.forEach(function(l){return l(u)})},get:function(){return V.cssPrefix}});R.FontAwesomeConfig=u;var K=[];function a6(c){return K.push(c),function(){K.splice(K.indexOf(c),1)}}var H=k2,A={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function l6(c){if(!(!c||!B)){var a=L.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var l=L.head.childNodes,e=null,r=l.length-1;r>-1;r--){var s=l[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=s)}return L.head.insertBefore(a,e),c}}var e6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function b1(){for(var c=12,a="";c-- >0;)a+=e6[Math.random()*62|0];return a}function _(c){for(var a=[],l=(c||[]).length>>>0;l--;)a[l]=c[l];return a}function _2(c){return c.classList?_(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function w4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r6(c){return Object.keys(c||{}).reduce(function(a,l){return a+"".concat(l,'="').concat(w4(c[l]),'" ')},"").trim()}function m2(c){return Object.keys(c||{}).reduce(function(a,l){return a+"".concat(l,": ").concat(c[l].trim(),";")},"")}function $2(c){return c.size!==A.size||c.x!==A.x||c.y!==A.y||c.rotate!==A.rotate||c.flipX||c.flipY}function s6(c){var a=c.transform,l=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(l/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),n={transform:"".concat(s," ").concat(i," ").concat(f)},t={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:n,path:t}}function i6(c){var a=c.transform,l=c.width,e=l===void 0?k2:l,r=c.height,s=r===void 0?k2:r,i=c.startCentered,f=i===void 0?!1:i,n="";return f&&K1?n+="translate(".concat(a.x/H-e/2,"em, ").concat(a.y/H-s/2,"em) "):f?n+="translate(calc(-50% + ".concat(a.x/H,"em), calc(-50% + ").concat(a.y/H,"em)) "):n+="translate(".concat(a.x/H,"em, ").concat(a.y/H,"em) "),n+="scale(".concat(a.size/H*(a.flipX?-1:1),", ").concat(a.size/H*(a.flipY?-1:1),") "),n+="rotate(".concat(a.rotate,"deg) "),n}var f6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
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
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
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
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function k4(){var c=g4,a=C4,l=u.cssPrefix,e=u.replacementClass,r=f6;if(l!==c||e!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");r=r.replace(s,".".concat(l,"-")).replace(i,"--".concat(l,"-")).replace(f,".".concat(e))}return r}var y1=!1;function x2(){u.autoAddCss&&!y1&&(l6(k4()),y1=!0)}var n6={mixout:function(){return{dom:{css:k4,insertCss:x2}}},hooks:function(){return{beforeDOMElementCreation:function(){x2()},beforeI2svg:function(){x2()}}}},D=R||{};D[F]||(D[F]={});D[F].styles||(D[F].styles={});D[F].hooks||(D[F].hooks={});D[F].shims||(D[F].shims=[]);var w=D[F],A4=[],P4=function(){L.removeEventListener("DOMContentLoaded",P4),n2=1,A4.map(function(a){return a()})},n2=!1;B&&(n2=(L.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L.readyState),n2||L.addEventListener("DOMContentLoaded",P4));function o6(c){B&&(n2?setTimeout(c,0):A4.push(c))}function c2(c){var a=c.tag,l=c.attributes,e=l===void 0?{}:l,r=c.children,s=r===void 0?[]:r;return typeof c=="string"?w4(c):"<".concat(a," ").concat(r6(e),">").concat(s.map(c2).join(""),"</").concat(a,">")}function w1(c,a,l){if(c&&c[a]&&c[a][l])return{prefix:a,iconName:l,icon:c[a][l]}}var t6=function(a,l){return function(e,r,s,i){return a.call(l,e,r,s,i)}},S2=function(a,l,e,r){var s=Object.keys(a),i=s.length,f=r!==void 0?t6(l,r):l,n,t,z;for(e===void 0?(n=1,z=a[s[0]]):(n=0,z=e);n<i;n++)t=s[n],z=f(z,a[t],t,a);return z};function T4(c){return k(c).length!==1?null:c.codePointAt(0).toString(16)}function k1(c){return Object.keys(c).reduce(function(a,l){var e=c[l],r=!!e.icon;return r?a[e.iconName]=e.icon:a[l]=e,a},{})}function D2(c,a){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=l.skipHooks,r=e===void 0?!1:e,s=k1(a);typeof w.hooks.addPack=="function"&&!r?w.hooks.addPack(c,k1(a)):w.styles[c]=o(o({},w.styles[c]||{}),s),c==="fas"&&D2("fa",a)}var Q=w.styles,m6=w.shims,F4=Object.keys(V2),z6=F4.reduce(function(c,a){return c[a]=Object.keys(V2[a]),c},{}),X2=null,D4={},B4={},H4={},R4={},E4={};function u6(c){return~J0.indexOf(c)}function p6(c,a){var l=a.split("-"),e=l[0],r=l.slice(1).join("-");return e===c&&r!==""&&!u6(r)?r:null}var I4=function(){var a=function(s){return S2(Q,function(i,f,n){return i[n]=S2(f,s,{}),i},{})};D4=a(function(r,s,i){if(s[3]&&(r[s[3]]=i),s[2]){var f=s[2].filter(function(n){return typeof n=="number"});f.forEach(function(n){r[n.toString(16)]=i})}return r}),B4=a(function(r,s,i){if(r[i]=i,s[2]){var f=s[2].filter(function(n){return typeof n=="string"});f.forEach(function(n){r[n]=i})}return r}),E4=a(function(r,s,i){var f=s[2];return r[i]=i,f.forEach(function(n){r[n]=i}),r});var l="far"in Q||u.autoFetchSvg,e=S2(m6,function(r,s){var i=s[0],f=s[1],n=s[2];return f==="far"&&!l&&(f="fas"),typeof i=="string"&&(r.names[i]={prefix:f,iconName:n}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:f,iconName:n}),r},{names:{},unicodes:{}});H4=e.names,R4=e.unicodes,X2=z2(u.styleDefault,{family:u.familyDefault})};a6(function(c){X2=z2(c.styleDefault,{family:u.familyDefault})});I4();function Y2(c,a){return(D4[c]||{})[a]}function M6(c,a){return(B4[c]||{})[a]}function U(c,a){return(E4[c]||{})[a]}function U4(c){return H4[c]||{prefix:null,iconName:null}}function d6(c){var a=R4[c],l=Y2("fas",c);return a||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function E(){return X2}var W4=function(){return{prefix:null,iconName:null,rest:[]}};function L6(c){var a=C,l=F4.reduce(function(e,r){return e[r]="".concat(u.cssPrefix,"-").concat(r),e},{});return d4.forEach(function(e){(c.includes(l[e])||c.some(function(r){return z6[e].includes(r)}))&&(a=e)}),a}function z2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.family,e=l===void 0?C:l,r=$0[e][c];if(e===J&&!c)return"fad";var s=S1[e][c]||S1[e][r],i=c in w.styles?c:null,f=s||i||null;return f}function v6(c){var a=[],l=null;return c.forEach(function(e){var r=p6(u.cssPrefix,e);r?l=r:e&&a.push(e)}),{iconName:l,rest:a}}function A1(c){return c.sort().filter(function(a,l,e){return e.indexOf(a)===l})}var P1=v4.concat(L4);function u2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.skipLookups,e=l===void 0?!1:l,r=null,s=A1(c.filter(function(M){return P1.includes(M)})),i=A1(c.filter(function(M){return!P1.includes(M)})),f=s.filter(function(M){return r=M,!J1.includes(M)}),n=t2(f,1),t=n[0],z=t===void 0?null:t,m=L6(s),d=o(o({},v6(i)),{},{prefix:z2(z,{family:m})});return o(o(o({},d),x6({values:c,family:m,styles:Q,config:u,canonical:d,givenPrefix:r})),h6(e,r,d))}function h6(c,a,l){var e=l.prefix,r=l.iconName;if(c||!e||!r)return{prefix:e,iconName:r};var s=a==="fa"?U4(r):{},i=U(e,r);return r=s.iconName||i||r,e=s.prefix||e,e==="far"&&!Q.far&&Q.fas&&!u.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var g6=d4.filter(function(c){return c!==C||c!==J}),C6=Object.keys(w2).filter(function(c){return c!==C}).map(function(c){return Object.keys(w2[c])}).flat();function x6(c){var a=c.values,l=c.family,e=c.canonical,r=c.givenPrefix,s=r===void 0?"":r,i=c.styles,f=i===void 0?{}:i,n=c.config,t=n===void 0?{}:n,z=l===J,m=a.includes("fa-duotone")||a.includes("fad"),d=t.familyDefault==="duotone",M=e.prefix==="fad"||e.prefix==="fa-duotone";if(!z&&(m||d||M)&&(e.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(e.prefix="fab"),!e.prefix&&g6.includes(l)){var h=Object.keys(f).find(function(x){return C6.includes(x)});if(h||t.autoFetchSvg){var v=E3.get(l).defaultShortPrefixId;e.prefix=v,e.iconName=U(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||s==="fa")&&(e.prefix=E()||"fas"),e}var S6=(function(){function c(){s3(this,c),this.definitions={}}return i3(c,[{key:"add",value:function(){for(var l=this,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(f){l.definitions[f]=o(o({},l.definitions[f]||{}),i[f]),D2(f,i[f]);var n=V2[C][f];n&&D2(n,i[f]),I4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(l,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(s){var i=r[s],f=i.prefix,n=i.iconName,t=i.icon,z=t[2];l[f]||(l[f]={}),z.length>0&&z.forEach(function(m){typeof m=="string"&&(l[f][m]=t)}),l[f][n]=t}),l}}])})(),T1=[],G={},j={},N6=Object.keys(j);function b6(c,a){var l=a.mixoutsTo;return T1=c,G={},Object.keys(j).forEach(function(e){N6.indexOf(e)===-1&&delete j[e]}),T1.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(l[i]=r[i]),f2(r[i])==="object"&&Object.keys(r[i]).forEach(function(f){l[i]||(l[i]={}),l[i][f]=r[i][f]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(i){G[i]||(G[i]=[]),G[i].push(s[i])})}e.provides&&e.provides(j)}),l}function B2(c,a){for(var l=arguments.length,e=new Array(l>2?l-2:0),r=2;r<l;r++)e[r-2]=arguments[r];var s=G[c]||[];return s.forEach(function(i){a=i.apply(null,[a].concat(e))}),a}function O(c){for(var a=arguments.length,l=new Array(a>1?a-1:0),e=1;e<a;e++)l[e-1]=arguments[e];var r=G[c]||[];r.forEach(function(s){s.apply(null,l)})}function I(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return j[c]?j[c].apply(null,a):void 0}function H2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,l=c.prefix||E();if(a)return a=U(l,a)||a,w1(O4.definitions,l,a)||w1(w.styles,l,a)}var O4=new S6,y6=function(){u.autoReplaceSvg=!1,u.observeMutations=!1,O("noAuto")},w6={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(O("beforeI2svg",a),I("pseudoElements2svg",a),I("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.autoReplaceSvgRoot;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,o6(function(){A6({autoReplaceSvgRoot:l}),O("watch",a)})}},k6={icon:function(a){if(a===null)return null;if(f2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:U(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var l=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=z2(a[0]);return{prefix:e,iconName:U(e,l)||l}}if(typeof a=="string"&&(a.indexOf("".concat(u.cssPrefix,"-"))>-1||a.match(X0))){var r=u2(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||E(),iconName:U(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var s=E();return{prefix:s,iconName:U(s,a)||a}}}},b={noAuto:y6,config:u,dom:w6,parse:k6,library:O4,findIconDefinition:H2,toHtml:c2},A6=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.autoReplaceSvgRoot,e=l===void 0?L:l;(Object.keys(w.styles).length>0||u.autoFetchSvg)&&B&&u.autoReplaceSvg&&b.dom.i2svg({node:e})};function p2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return c2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(B){var e=L.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function P6(c){var a=c.children,l=c.main,e=c.mask,r=c.attributes,s=c.styles,i=c.transform;if($2(i)&&l.found&&!e.found){var f=l.width,n=l.height,t={x:f/n/2,y:.5};r.style=m2(o(o({},s),{},{"transform-origin":"".concat(t.x+i.x/16,"em ").concat(t.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function T6(c){var a=c.prefix,l=c.iconName,e=c.children,r=c.attributes,s=c.symbol,i=s===!0?"".concat(a,"-").concat(u.cssPrefix,"-").concat(l):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},r),{},{id:i}),children:e}]}]}function F6(c){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(l){return l in c})}function K2(c){var a=c.icons,l=a.main,e=a.mask,r=c.prefix,s=c.iconName,i=c.transform,f=c.symbol,n=c.maskId,t=c.extra,z=c.watchable,m=z===void 0?!1:z,d=e.found?e:l,M=d.width,h=d.height,v=[u.replacementClass,s?"".concat(u.cssPrefix,"-").concat(s):""].filter(function(P){return t.classes.indexOf(P)===-1}).filter(function(P){return P!==""||!!P}).concat(t.classes).join(" "),x={children:[],attributes:o(o({},t.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:t.attributes.role||"img",viewBox:"0 0 ".concat(M," ").concat(h)})};!F6(t.attributes)&&!t.attributes["aria-hidden"]&&(x.attributes["aria-hidden"]="true"),m&&(x.attributes[W]="");var g=o(o({},x),{},{prefix:r,iconName:s,main:l,mask:e,maskId:n,transform:i,symbol:f,styles:o({},t.styles)}),N=e.found&&l.found?I("generateAbstractMask",g)||{children:[],attributes:{}}:I("generateAbstractIcon",g)||{children:[],attributes:{}},y=N.children,q=N.attributes;return g.children=y,g.attributes=q,f?T6(g):P6(g)}function F1(c){var a=c.content,l=c.width,e=c.height,r=c.transform,s=c.extra,i=c.watchable,f=i===void 0?!1:i,n=o(o({},s.attributes),{},{class:s.classes.join(" ")});f&&(n[W]="");var t=o({},s.styles);$2(r)&&(t.transform=i6({transform:r,startCentered:!0,width:l,height:e}),t["-webkit-transform"]=t.transform);var z=m2(t);z.length>0&&(n.style=z);var m=[];return m.push({tag:"span",attributes:n,children:[a]}),m}function D6(c){var a=c.content,l=c.extra,e=o(o({},l.attributes),{},{class:l.classes.join(" ")}),r=m2(l.styles);r.length>0&&(e.style=r);var s=[];return s.push({tag:"span",attributes:e,children:[a]}),s}var N2=w.styles;function R2(c){var a=c[0],l=c[1],e=c.slice(4),r=t2(e,1),s=r[0],i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(C2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(C2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(C2.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:l,icon:i}}var B6={found:!1,width:512,height:512};function H6(c,a){!S4&&!u.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function E2(c,a){var l=a;return a==="fa"&&u.styleDefault!==null&&(a=E()),new Promise(function(e,r){if(l==="fa"){var s=U4(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&N2[a]&&N2[a][c]){var i=N2[a][c];return e(R2(i))}H6(c,a),e(o(o({},B6),{},{icon:u.showMissingIcons&&c?I("missingIconAbstract")||{}:{}}))})}var D1=function(){},I2=u.measurePerformance&&l2&&l2.mark&&l2.measure?l2:{mark:D1,measure:D1},X='FA "7.2.0"',R6=function(a){return I2.mark("".concat(X," ").concat(a," begins")),function(){return q4(a)}},q4=function(a){I2.mark("".concat(X," ").concat(a," ends")),I2.measure("".concat(X," ").concat(a),"".concat(X," ").concat(a," begins"),"".concat(X," ").concat(a," ends"))},Q2={begin:R6,end:q4},s2=function(){};function B1(c){var a=c.getAttribute?c.getAttribute(W):null;return typeof a=="string"}function E6(c){var a=c.getAttribute?c.getAttribute(G2):null,l=c.getAttribute?c.getAttribute(j2):null;return a&&l}function I6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(u.replacementClass)}function U6(){if(u.autoReplaceSvg===!0)return i2.replace;var c=i2[u.autoReplaceSvg];return c||i2.replace}function W6(c){return L.createElementNS("http://www.w3.org/2000/svg",c)}function O6(c){return L.createElement(c)}function G4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.ceFn,e=l===void 0?c.tag==="svg"?W6:O6:l;if(typeof c=="string")return L.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(i){r.setAttribute(i,c.attributes[i])});var s=c.children||[];return s.forEach(function(i){r.appendChild(G4(i,{ceFn:e}))}),r}function q6(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var i2={replace:function(a){var l=a[0];if(l.parentNode)if(a[1].forEach(function(r){l.parentNode.insertBefore(G4(r),l)}),l.getAttribute(W)===null&&u.keepOriginalSource){var e=L.createComment(q6(l));l.parentNode.replaceChild(e,l)}else l.remove()},nest:function(a){var l=a[0],e=a[1];if(~_2(l).indexOf(u.replacementClass))return i2.replace(a);var r=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(f,n){return n===u.replacementClass||n.match(r)?f.toSvg.push(n):f.toNode.push(n),f},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",s.toNode.join(" "))}var i=e.map(function(f){return c2(f)}).join(`
`);l.setAttribute(W,""),l.innerHTML=i}};function H1(c){c()}function j4(c,a){var l=typeof a=="function"?a:s2;if(c.length===0)l();else{var e=H1;u.mutateApproach===V0&&(e=R.requestAnimationFrame||H1),e(function(){var r=U6(),s=Q2.begin("mutate");c.map(r),s(),l()})}}var J2=!1;function V4(){J2=!0}function U2(){J2=!1}var o2=null;function R1(c){if(h1&&u.observeMutations){var a=c.treeCallback,l=a===void 0?s2:a,e=c.nodeCallback,r=e===void 0?s2:e,s=c.pseudoElementsCallback,i=s===void 0?s2:s,f=c.observeMutationsRoot,n=f===void 0?L:f;o2=new h1(function(t){if(!J2){var z=E();_(t).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!B1(m.addedNodes[0])&&(u.searchPseudoElements&&i(m.target),l(m.target)),m.type==="attributes"&&m.target.parentNode&&u.searchPseudoElements&&i([m.target],!0),m.type==="attributes"&&B1(m.target)&&~Q0.indexOf(m.attributeName))if(m.attributeName==="class"&&E6(m.target)){var d=u2(_2(m.target)),M=d.prefix,h=d.iconName;m.target.setAttribute(G2,M||z),h&&m.target.setAttribute(j2,h)}else I6(m.target)&&r(m.target)})}}),B&&o2.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function G6(){o2&&o2.disconnect()}function j6(c){var a=c.getAttribute("style"),l=[];return a&&(l=a.split(";").reduce(function(e,r){var s=r.split(":"),i=s[0],f=s.slice(1);return i&&f.length>0&&(e[i]=f.join(":").trim()),e},{})),l}function V6(c){var a=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=u2(_2(c));return r.prefix||(r.prefix=E()),a&&l&&(r.prefix=a,r.iconName=l),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=M6(r.prefix,c.innerText)||Y2(r.prefix,T4(c.innerText))),!r.iconName&&u.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function _6(c){var a=_(c.attributes).reduce(function(l,e){return l.name!=="class"&&l.name!=="style"&&(l[e.name]=e.value),l},{});return a}function $6(){return{iconName:null,prefix:null,transform:A,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function E1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},l=V6(c),e=l.iconName,r=l.prefix,s=l.rest,i=_6(c),f=B2("parseNodeAttributes",{},c),n=a.styleParser?j6(c):[];return o({iconName:e,prefix:r,transform:A,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:n,attributes:i}},f)}var X6=w.styles;function _4(c){var a=u.autoReplaceSvg==="nest"?E1(c,{styleParser:!1}):E1(c);return~a.extra.classes.indexOf(b4)?I("generateLayersText",c,a):I("generateSvgReplacementMutation",c,a)}function Y6(){return[].concat(k(L4),k(v4))}function I1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var l=L.documentElement.classList,e=function(m){return l.add("".concat(x1,"-").concat(m))},r=function(m){return l.remove("".concat(x1,"-").concat(m))},s=u.autoFetchSvg?Y6():J1.concat(Object.keys(X6));s.includes("fa")||s.push("fa");var i=[".".concat(b4,":not([").concat(W,"])")].concat(s.map(function(z){return".".concat(z,":not([").concat(W,"])")})).join(", ");if(i.length===0)return Promise.resolve();var f=[];try{f=_(c.querySelectorAll(i))}catch{}if(f.length>0)e("pending"),r("complete");else return Promise.resolve();var n=Q2.begin("onTree"),t=f.reduce(function(z,m){try{var d=_4(m);d&&z.push(d)}catch(M){S4||M.name==="MissingIcon"&&console.error(M)}return z},[]);return new Promise(function(z,m){Promise.all(t).then(function(d){j4(d,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),n(),z()})}).catch(function(d){n(),m(d)})})}function K6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_4(c).then(function(l){l&&j4([l],a)})}function Q6(c){return function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:H2(a||{}),r=l.mask;return r&&(r=(r||{}).icon?r:H2(r||{})),c(e,o(o({},l),{},{mask:r}))}}var J6=function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=l.transform,r=e===void 0?A:e,s=l.symbol,i=s===void 0?!1:s,f=l.mask,n=f===void 0?null:f,t=l.maskId,z=t===void 0?null:t,m=l.classes,d=m===void 0?[]:m,M=l.attributes,h=M===void 0?{}:M,v=l.styles,x=v===void 0?{}:v;if(a){var g=a.prefix,N=a.iconName,y=a.icon;return p2(o({type:"icon"},a),function(){return O("beforeDOMElementCreation",{iconDefinition:a,params:l}),K2({icons:{main:R2(y),mask:n?R2(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:N,transform:o(o({},A),r),symbol:i,maskId:z,extra:{attributes:h,styles:x,classes:d}})})}},Z6={mixout:function(){return{icon:Q6(J6)}},hooks:function(){return{mutationObserverCallbacks:function(l){return l.treeCallback=I1,l.nodeCallback=K6,l}}},provides:function(a){a.i2svg=function(l){var e=l.node,r=e===void 0?L:e,s=l.callback,i=s===void 0?function(){}:s;return I1(r,i)},a.generateSvgReplacementMutation=function(l,e){var r=e.iconName,s=e.prefix,i=e.transform,f=e.symbol,n=e.mask,t=e.maskId,z=e.extra;return new Promise(function(m,d){Promise.all([E2(r,s),n.iconName?E2(n.iconName,n.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var h=t2(M,2),v=h[0],x=h[1];m([l,K2({icons:{main:v,mask:x},prefix:s,iconName:r,transform:i,symbol:f,maskId:t,extra:z,watchable:!0})])}).catch(d)})},a.generateAbstractIcon=function(l){var e=l.children,r=l.attributes,s=l.main,i=l.transform,f=l.styles,n=m2(f);n.length>0&&(r.style=n);var t;return $2(i)&&(t=I("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),e.push(t||s.icon),{children:e,attributes:r}}}},c8={mixout:function(){return{layer:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,s=r===void 0?[]:r;return p2({type:"layer"},function(){O("beforeDOMElementCreation",{assembler:l,params:e});var i=[];return l(function(f){Array.isArray(f)?f.map(function(n){i=i.concat(n.abstract)}):i=i.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers")].concat(k(s)).join(" ")},children:i}]})}}}},a8={mixout:function(){return{counter:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,s=r===void 0?null:r,i=e.classes,f=i===void 0?[]:i,n=e.attributes,t=n===void 0?{}:n,z=e.styles,m=z===void 0?{}:z;return p2({type:"counter",content:l},function(){return O("beforeDOMElementCreation",{content:l,params:e}),D6({content:l.toString(),title:s,extra:{attributes:t,styles:m,classes:["".concat(u.cssPrefix,"-layers-counter")].concat(k(f))}})})}}}},l8={mixout:function(){return{text:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?A:r,i=e.classes,f=i===void 0?[]:i,n=e.attributes,t=n===void 0?{}:n,z=e.styles,m=z===void 0?{}:z;return p2({type:"text",content:l},function(){return O("beforeDOMElementCreation",{content:l,params:e}),F1({content:l,transform:o(o({},A),s),extra:{attributes:t,styles:m,classes:["".concat(u.cssPrefix,"-layers-text")].concat(k(f))}})})}}},provides:function(a){a.generateLayersText=function(l,e){var r=e.transform,s=e.extra,i=null,f=null;if(K1){var n=parseInt(getComputedStyle(l).fontSize,10),t=l.getBoundingClientRect();i=t.width/n,f=t.height/n}return Promise.resolve([l,F1({content:l.innerHTML,width:i,height:f,transform:r,extra:s,watchable:!0})])}}},$4=new RegExp('"',"ug"),U1=[1105920,1112319],W1=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),R3),G0),V3),W2=Object.keys(W1).reduce(function(c,a){return c[a.toLowerCase()]=W1[a],c},{}),e8=Object.keys(W2).reduce(function(c,a){var l=W2[a];return c[a]=l[900]||k(Object.entries(l))[0][1],c},{});function r8(c){var a=c.replace($4,"");return T4(k(a)[0]||"")}function s8(c){var a=c.getPropertyValue("font-feature-settings").includes("ss01"),l=c.getPropertyValue("content"),e=l.replace($4,""),r=e.codePointAt(0),s=r>=U1[0]&&r<=U1[1],i=e.length===2?e[0]===e[1]:!1;return s||i||a}function i8(c,a){var l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(a),r=isNaN(e)?"normal":e;return(W2[l]||{})[r]||e8[l]}function O1(c,a){var l="".concat(j0).concat(a.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(l)!==null)return e();var s=_(c.children),i=s.filter(function(M2){return M2.getAttribute(A2)===a})[0],f=R.getComputedStyle(c,a),n=f.getPropertyValue("font-family"),t=n.match(Y0),z=f.getPropertyValue("font-weight"),m=f.getPropertyValue("content");if(i&&!t)return c.removeChild(i),e();if(t&&m!=="none"&&m!==""){var d=f.getPropertyValue("content"),M=i8(n,z),h=r8(d),v=t[0].startsWith("FontAwesome"),x=s8(f),g=Y2(M,h),N=g;if(v){var y=d6(h);y.iconName&&y.prefix&&(g=y.iconName,M=y.prefix)}if(g&&!x&&(!i||i.getAttribute(G2)!==M||i.getAttribute(j2)!==N)){c.setAttribute(l,N),i&&c.removeChild(i);var q=$6(),P=q.extra;P.attributes[A2]=a,E2(g,M).then(function(M2){var a3=K2(o(o({},q),{},{icons:{main:M2,mask:W4()},prefix:M,iconName:N,extra:P,watchable:!0})),d2=L.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(d2,c.firstChild):c.appendChild(d2),d2.outerHTML=a3.map(function(l3){return c2(l3)}).join(`
`),c.removeAttribute(l),e()}).catch(r)}else e()}else e()})}function f8(c){return Promise.all([O1(c,"::before"),O1(c,"::after")])}function n8(c){return c.parentNode!==document.head&&!~_0.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(A2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var o8=function(a){return!!a&&x4.some(function(l){return a.includes(l)})},t8=function(a){if(!a)return[];var l=new Set,e=a.split(/,(?![^()]*\))/).map(function(n){return n.trim()});e=e.flatMap(function(n){return n.includes("(")?n:n.split(",").map(function(t){return t.trim()})});var r=r2(e),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;if(o8(i)){var f=x4.reduce(function(n,t){return n.replace(t,"")},i);f!==""&&f!=="*"&&l.add(f)}}}catch(n){r.e(n)}finally{r.f()}return l};function q1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(B){var l;if(a)l=c;else if(u.searchPseudoElementsFullScan)l=c.querySelectorAll("*");else{var e=new Set,r=r2(document.styleSheets),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;try{var f=r2(i.cssRules),n;try{for(f.s();!(n=f.n()).done;){var t=n.value,z=t8(t.selectorText),m=r2(z),d;try{for(m.s();!(d=m.n()).done;){var M=d.value;e.add(M)}}catch(v){m.e(v)}finally{m.f()}}}catch(v){f.e(v)}finally{f.f()}}catch(v){u.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){r.e(v)}finally{r.f()}if(!e.size)return;var h=Array.from(e).join(", ");try{l=c.querySelectorAll(h)}catch{}}return new Promise(function(v,x){var g=_(l).filter(n8).map(f8),N=Q2.begin("searchPseudoElements");V4(),Promise.all(g).then(function(){N(),U2(),v()}).catch(function(){N(),U2(),x()})})}}var m8={hooks:function(){return{mutationObserverCallbacks:function(l){return l.pseudoElementsCallback=q1,l}}},provides:function(a){a.pseudoElements2svg=function(l){var e=l.node,r=e===void 0?L:e;u.searchPseudoElements&&q1(r)}}},G1=!1,z8={mixout:function(){return{dom:{unwatch:function(){V4(),G1=!0}}}},hooks:function(){return{bootstrap:function(){R1(B2("mutationObserverCallbacks",{}))},noAuto:function(){G6()},watch:function(l){var e=l.observeMutationsRoot;G1?U2():R1(B2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},j1=function(a){var l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var s=r.toLowerCase().split("-"),i=s[0],f=s.slice(1).join("-");if(i&&f==="h")return e.flipX=!0,e;if(i&&f==="v")return e.flipY=!0,e;if(f=parseFloat(f),isNaN(f))return e;switch(i){case"grow":e.size=e.size+f;break;case"shrink":e.size=e.size-f;break;case"left":e.x=e.x-f;break;case"right":e.x=e.x+f;break;case"up":e.y=e.y-f;break;case"down":e.y=e.y+f;break;case"rotate":e.rotate=e.rotate+f;break}return e},l)},u8={mixout:function(){return{parse:{transform:function(l){return j1(l)}}}},hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-transform");return r&&(l.transform=j1(r)),l}}},provides:function(a){a.generateAbstractTransformGrouping=function(l){var e=l.main,r=l.transform,s=l.containerWidth,i=l.iconWidth,f={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),z="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(n," ").concat(t," ").concat(z)},d={transform:"translate(".concat(i/2*-1," -256)")},M={outer:f,inner:m,path:d};return{tag:"g",attributes:o({},M.outer),children:[{tag:"g",attributes:o({},M.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:o(o({},e.icon.attributes),M.path)}]}]}}}},b2={x:0,y:0,width:"100%",height:"100%"};function V1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function p8(c){return c.tag==="g"?c.children:[c]}var M8={hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-mask"),s=r?u2(r.split(" ").map(function(i){return i.trim()})):W4();return s.prefix||(s.prefix=E()),l.mask=s,l.maskId=e.getAttribute("data-fa-mask-id"),l}}},provides:function(a){a.generateAbstractMask=function(l){var e=l.children,r=l.attributes,s=l.main,i=l.mask,f=l.maskId,n=l.transform,t=s.width,z=s.icon,m=i.width,d=i.icon,M=s6({transform:n,containerWidth:m,iconWidth:t}),h={tag:"rect",attributes:o(o({},b2),{},{fill:"white"})},v=z.children?{children:z.children.map(V1)}:{},x={tag:"g",attributes:o({},M.inner),children:[V1(o({tag:z.tag,attributes:o(o({},z.attributes),M.path)},v))]},g={tag:"g",attributes:o({},M.outer),children:[x]},N="mask-".concat(f||b1()),y="clip-".concat(f||b1()),q={tag:"mask",attributes:o(o({},b2),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,g]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:p8(d)},q]};return e.push(P,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(N,")")},b2)}),{children:e,attributes:r}}}},d8={provides:function(a){var l=!1;R.matchMedia&&(l=R.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:o(o({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=o(o({},s),{},{attributeName:"opacity"}),f={tag:"circle",attributes:o(o({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||f.children.push({tag:"animate",attributes:o(o({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(f),e.push({tag:"path",attributes:o(o({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:o(o({},i),{},{values:"1;0;0;0;0;1;"})}]}),l||e.push({tag:"path",attributes:o(o({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},L8={hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return l.symbol=s,l}}}},v8=[n6,Z6,c8,a8,l8,m8,z8,u8,M8,d8,L8];b6(v8,{mixoutsTo:b});var W8=b.noAuto,X4=b.config,O8=b.library,Y4=b.dom,K4=b.parse,q8=b.findIconDefinition,G8=b.toHtml,Q4=b.icon,j8=b.layer,h8=b.text,g8=b.counter;var x8=["*"],S8=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(l){X4.autoAddCss=l,this._autoAddCss=l}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(e){return new(e||c)};static \u0275prov=$({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),N8=(()=>{class c{definitions={};addIcons(...l){for(let e of l){e.prefix in this.definitions||(this.definitions[e.prefix]={}),this.definitions[e.prefix][e.iconName]=e;for(let r of e.icon[2])typeof r=="string"&&(this.definitions[e.prefix][r]=e)}}addIconPacks(...l){for(let e of l){let r=Object.keys(e).map(s=>e[s]);this.addIcons(...r)}}getIconDefinition(l,e){return l in this.definitions&&e in this.definitions[l]?this.definitions[l][e]:null}static \u0275fac=function(e){return new(e||c)};static \u0275prov=$({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),b8=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},y8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Z4=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),w8=c=>{let a=Z4(c.rotate),l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:a,"fa-rotate-by":c.rotate!=null&&!a,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(e=>l[e]?e:null).filter(e=>e!=null)},Z2=new WeakSet,J4="fa-auto-css";function k8(c,a){if(!a.autoAddCss||Z2.has(c))return;if(c.getElementById(J4)!=null){a.autoAddCss=!1,Z2.add(c);return}let l=c.createElement("style");l.setAttribute("type","text/css"),l.setAttribute("id",J4),l.innerHTML=Y4.css();let e=c.head.childNodes,r=null;for(let s=e.length-1;s>-1;s--){let i=e[s],f=i.nodeName.toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(r=i)}c.head.insertBefore(l,r),a.autoAddCss=!1,Z2.add(c)}var A8=c=>c.prefix!==void 0&&c.iconName!==void 0,P8=(c,a)=>A8(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:a,iconName:c},T8=(()=>{class c{stackItemSize=a2("1x");size=a2();_effect=r1(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(e){return new(e||c)};static \u0275dir=f1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),F8=(()=>{class c{size=a2();classes=v2(()=>{let l=this.size(),e=l?{[`fa-${l}`]:!0}:{};return l1(a1({},e),{"fa-stack":!0})});static \u0275fac=function(e){return new(e||c)};static \u0275cmp=L2({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(e,r){e&2&&z1(r.classes())},inputs:{size:[1,"size"]},ngContentSelectors:x8,decls:1,vars:0,template:function(e,r){e&1&&(t1(),m1(0))},encapsulation:2,changeDetection:0})}return c})(),r5=(()=>{class c{icon=S();title=S();animation=S();mask=S();flip=S();size=S();pull=S();border=S();inverse=S();symbol=S();rotate=S();fixedWidth=S();transform=S();a11yRole=S();renderedIconHTML=v2(()=>{let l=this.icon()??this.config.fallbackIcon;if(!l)return y8(),"";let e=this.findIconDefinition(l);if(!e)return"";let r=this.buildParams();k8(this.document,this.config);let s=Q4(e,r);return this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))});document=T(e1);sanitizer=T(u1);config=T(S8);iconLibrary=T(N8);stackItem=T(T8,{optional:!0});stack=T(F8,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(l){let e=P8(l,this.config.defaultPrefix);if("icon"in e)return e;let r=this.iconLibrary.getIconDefinition(e.prefix,e.iconName);return r??(b8(e),null)}buildParams(){let l=this.fixedWidth(),e={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof l=="boolean"?l:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},r=this.transform(),s=typeof r=="string"?K4.transform(r):r,i=this.mask(),f=i!=null?this.findIconDefinition(i):null,n={},t=this.a11yRole();t!=null&&(n.role=t);let z={};return e.rotate!=null&&!Z4(e.rotate)&&(z["--fa-rotate-angle"]=`${e.rotate}`),{title:this.title(),transform:s,classes:w8(e),mask:f??void 0,symbol:this.symbol(),attributes:n,styles:z}}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=L2({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(e,r){e&2&&(o1("innerHTML",r.renderedIconHTML(),i1),n1("title",r.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(e,r){},encapsulation:2,changeDetection:0})}return c})();var f5={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"]};var n5={prefix:"fas",iconName:"skull",icon:[512,512,[128128],"f54c","M416 427.4c58.5-44 96-111.6 96-187.4 0-132.5-114.6-240-256-240S0 107.5 0 240c0 75.8 37.5 143.4 96 187.4L96 464c0 26.5 21.5 48 48 48l32 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 64 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c26.5 0 48-21.5 48-48l0-36.6zM96 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]};var o5={prefix:"fas",iconName:"chevron-up",icon:[448,512,[],"f077","M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]};var t5={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32S0 334.3 0 352l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]};var m5={prefix:"fas",iconName:"grip-lines",icon:[448,512,[],"f7a4","M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"]};var z5={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]};var u5={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};var p5={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"]};var M5={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]};var d5={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};var L5={prefix:"fas",iconName:"sort-down",icon:[384,512,["sort-desc"],"f0dd","M32 288c-12.9 0-24.6 7.8-29.6 19.8S.2 333.5 9.4 342.6l160 160c12.5 12.5 32.8 12.5 45.3 0l160-160c9.2-9.2 11.9-22.9 6.9-34.9S364.9 288 352 288L32 288z"]};var c1={},c3=class c{_appId=T(s1);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(a,l=!1){return this._appId!=="ng"&&(a+=this._appId),c1.hasOwnProperty(a)||(c1[a]=0),`${a}${l?c._infix+"-":""}${c1[a]++}`}static \u0275fac=function(l){return new(l||c)};static \u0275prov=$({token:c,factory:c.\u0275fac,providedIn:"root"})};export{c3 as a,r5 as b,f5 as c,n5 as d,o5 as e,t5 as f,m5 as g,z5 as h,u5 as i,p5 as j,M5 as k,d5 as l,L5 as m};
