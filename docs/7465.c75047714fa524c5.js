"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[7465],{7465:(C,g,o)=>{o.r(g),o.d(g,{NewGameRolesPage:()=>k});var m=o(6895),i=o(4556),n=o(8189);const d=[n.k.VILLAGEOIS,n.k.LOUP_GAROU,n.k.SOEUR];var p=o(4253),y=o(6519),u=o(4664),R=o(4518),h=o(8505),v=o(1916),f=o(1692),e=o(8256);function G(s,c){if(1&s){const l=e.EpF();e.TgZ(0,"lgmj-player",7),e.NdJ("roleChange",function(t){const E=e.CHM(l).$implicit,O=e.oxw();return e.KtG(O.changeRole(E.id,t))}),e.qZA()}if(2&s){const l=c.$implicit,a=e.oxw();e.Q6J("player",l)("displayMode",a.playerDisplayMode)("selectableRoles",a.availableRoles)}}let k=(()=>{class s{constructor(l){this.newGameService=l,this.playerDisplayMode=p.d.EDIT_ROLE,this.playerTrackBy=R.y,this.cannotCreate=!0,this.availableRoles=[],this.players$=this.newGameService.getPlayers().pipe((0,h.b)(a=>{this.cannotCreate=!this.canCreateGame(a),this.availableRoles=this.getAvailableRoles(a)}))}changeRole(l,a){this.newGameService.changeRole(l,a)}createGame(){this.newGameService.createGame()}getAvailableRoles(l){const a=new Set(l.map(r=>r.role));let t=Object.values(n.k).filter(r=>r!==n.k.NOT_SELECTED&&(d.includes(r)||!a.has(r)));return a.has(n.k.SOEUR)&&2===l.filter(r=>r.role===n.k.SOEUR).length&&(t=t.filter(r=>r!==n.k.SOEUR)),t}canCreateGame(l){let a=l.every(t=>t.role!==n.k.NOT_SELECTED);return a&&l.some(t=>t.role===n.k.SOEUR)&&(a=2===l.filter(t=>t.role===n.k.SOEUR).length),a}}return s.\u0275fac=function(l){return new(l||s)(e.Y36(v.y))},s.\u0275cmp=e.Xpm({type:s,selectors:[["lgmj-new-game-roles"]],standalone:!0,features:[e.jDz],decls:11,vars:5,consts:[["title","Nouvelle partie - R\xf4les"],["id","container"],["id","player-list"],[3,"player","displayMode","selectableRoles","roleChange",4,"ngFor","ngForOf","ngForTrackBy"],["id","submit-block"],["expand","block",1,"ion-margin-horizontal",3,"disabled","click"],["routerLink","/new-game","expand","block","color","danger",1,"ion-margin-horizontal"],[3,"player","displayMode","selectableRoles","roleChange"]],template:function(l,a){1&l&&(e._UZ(0,"lgmj-header",0),e.TgZ(1,"ion-content")(2,"div",1)(3,"ion-list",2),e.YNc(4,G,1,3,"lgmj-player",3),e.ALo(5,"async"),e.qZA(),e.TgZ(6,"div",4)(7,"ion-button",5),e.NdJ("click",function(){return a.createGame()}),e._uU(8," D\xe9marrer "),e.qZA(),e.TgZ(9,"ion-button",6),e._uU(10," Retour "),e.qZA()()()()),2&l&&(e.xp6(4),e.Q6J("ngForOf",e.lcZ(5,3,a.players$))("ngForTrackBy",a.playerTrackBy),e.xp6(3),e.Q6J("disabled",a.cannotCreate))},dependencies:[m.ez,m.sg,m.Ov,i.Pc,i.YG,i.W2,i.q_,i.YI,f.rH,y.l,u.G],styles:["#submit-block[_ngcontent-%COMP%]{position:sticky;bottom:0;background:var(--ion-background-color, #fff);display:flow-root}"]}),s})()}}]);