import{a as Y}from"./chunk-H37FPTVA.js";import{d as c}from"./chunk-IU4V4SZ4.js";import"./chunk-XDFZ7HJY.js";import"./chunk-GZWRC3NF.js";import{a as X}from"./chunk-J2N7LTH3.js";import{$a as B,A as f,B as v,E as I,Ea as F,F as g,Fa as O,G as i,Ga as T,H as n,I as l,Ja as _,Ma as Q,Na as H,Oa as V,P as G,Pa as U,Q as y,R as P,Sa as q,T as a,Y as p,Z as R,_a as z,bb as K,ca as S,cb as W,h as A,ia as u,la as k,ma as x,o as d,oa as w,p as s,pa as E,qa as N,ra as b,sa as j,ta as J,ua as D,v as M}from"./chunk-OREDGVVK.js";import"./chunk-5KGN3IRF.js";import"./chunk-PFHWGLVF.js";import"./chunk-DNHN6L6M.js";import"./chunk-6IXKOCO2.js";import"./chunk-FINND46O.js";import"./chunk-LA6OOUMO.js";import"./chunk-4WFVMWDK.js";import"./chunk-SOGF2YJB.js";import"./chunk-MDMZPGPE.js";import"./chunk-B43CU5JX.js";import"./chunk-TQEIIVVC.js";import"./chunk-LF5XB4YN.js";import{g as C}from"./chunk-LDRJ6W7P.js";var Z=()=>C(void 0,null,function*(){if(d(c).isGameInProgress()){let h=yield d(W).create({header:"Partie en cours",message:"<p>Une partie est d\xE9j\xE0 en cours. \xCAtes-vous s\xFBr de vouloir en cr\xE9er une nouvelle ?</p>",buttons:[{text:"Annuler",role:"cancel"},{text:"Nouvelle partie",role:"confirm"}]});return yield h.present(),h.onDidDismiss().then(r=>r.role==="confirm")}else return!0});var $=[{path:"victory",title:"LG Assistant MJ | Victoire",loadComponent:()=>import("./chunk-CY3CBMDG.js").then(e=>e.VictoryPage)},{path:"game",title:"LG Assistant MJ | Partie en cours",loadComponent:()=>import("./chunk-S5HCMDBB.js").then(e=>e.GamePage)},{path:"new-game",title:"LG Assistant MJ | Nouvelle partie",loadComponent:()=>import("./chunk-TXDUK4B3.js").then(e=>e.NewGamePage)},{path:"new-game/roles",title:"LG Assistant MJ | Nouvelle partie | Roles",loadComponent:()=>import("./chunk-7NPNGHAT.js").then(e=>e.NewGameRolesPage)},{path:"roles-choice",title:"LG Assistant MJ | Choix des r\xF4les \xE0 jouer",canActivate:[Z],loadComponent:()=>import("./chunk-GVFLZQ2L.js").then(e=>e.RolesChoicePage)},{path:"roles-rules",title:"LG Assistant MJ | R\xE8gles des r\xF4les",loadComponent:()=>import("./chunk-6CNLMXMF.js").then(e=>e.RolesRulesPage)},{path:"status-legends",title:"LG Assistant MJ | L\xE9gende des statuts",loadComponent:()=>import("./chunk-DEZDIUBH.js").then(e=>e.StatusLegendsPage)},{path:"options",title:"LG Assistant MJ | Options",loadComponent:()=>import("./chunk-KF4DFOGN.js").then(e=>e.OptionsPage)},{path:"",pathMatch:"full",title:"LG Assistant MJ | Accueil",loadComponent:()=>import("./chunk-TNH55VQK.js").then(e=>e.HomePage)}];var ee={providers:[J($,D(j)),M(X.forRoot({name:"_lgmj-db"})),{provide:w,useClass:F},K({innerHTMLTemplatesEnabled:!0})]};var re=["menu"];function ae(e,t){e&1&&(i(0,"ion-item",8),a(1,"Partie en cours"),n())}var me=()=>({exact:!0}),te=(()=>{let t=class t{constructor(r,o){this.router=r,this.gameService=o,this.isGameInProgress=this.gameService.isGameInProgress,this.router.events.pipe(A(m=>m instanceof x),Y()).subscribe(()=>{this.menu?.close()})}};t.\u0275fac=function(o){return new(o||t)(v(E),v(c))},t.\u0275cmp=s({type:t,selectors:[["lgmj-menu"]],viewQuery:function(o,m){if(o&1&&G(re,5),o&2){let L;y(L=P())&&(m.menu=L.first)}},standalone:!0,features:[p],decls:19,vars:3,consts:[["contentId","router-outlet"],["menu",""],["routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","/game","routerLinkActive","active",4,"ngIf"],["routerLink","/roles-choice","routerLinkActive","active"],["routerLink","/roles-rules","routerLinkActive","active"],["routerLink","/status-legends","routerLinkActive","active"],["routerLink","/options","routerLinkActive","active"],["routerLink","/game","routerLinkActive","active"]],template:function(o,m){o&1&&(i(0,"ion-menu",0,1)(2,"ion-header")(3,"ion-toolbar")(4,"ion-title"),a(5,"Menu"),n()()(),i(6,"ion-content")(7,"ion-item",2),a(8,"Accueil"),n(),I(9,ae,2,0,"ion-item",3),i(10,"ion-item",4),a(11,"Nouvelle partie"),n(),i(12,"ion-item",5),a(13,"R\xE8gles des r\xF4les"),n(),i(14,"ion-item",6),a(15,"L\xE9gende des statuts"),n(),l(16,"ion-item-divider"),i(17,"ion-item",7),a(18,"Options"),n()()()),o&2&&(f(7),g("routerLinkActiveOptions",R(2,me)),f(2),g("ngIf",m.isGameInProgress()))},dependencies:[u,S,N,b,T,q,H,B,z,Q,V,U],styles:["ion-item.active[_ngcontent-%COMP%]{opacity:.5}"]});let e=t;return e})();var oe=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s({type:t,selectors:[["lgmj-root"]],standalone:!0,features:[p],decls:3,vars:0,consts:[["id","router-outlet"]],template:function(o,m){o&1&&(i(0,"ion-app"),l(1,"lgmj-menu")(2,"ion-router-outlet",0),n())},dependencies:[u,te,_,O]});let e=t;return e})();var ie={production:!0};ie.production&&void 0;k(oe,ee).catch(e=>console.error(e));
