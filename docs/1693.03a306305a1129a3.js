"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[1693],{1693:(P,h,n)=>{n.r(h),n.d(h,{NewGameRolesPage:()=>C});var g=n(6814),c=n(7027),t=n(6685);const d=[t.k.VILLAGEOIS,t.k.LOUP_GAROU,t.k.SOEUR,t.k.FRERE];var u=n(721),y=n(5323),p=n(4978),v=n(8540),R=n(9397),f=n(4664),E=n(2254),G=n(439),k=n(1821),e=n(6689);function O(s,m){if(1&s){const i=e.EpF();e.TgZ(0,"lgmj-player",7),e.NdJ("roleChange",function(a){const r=e.CHM(i).$implicit,T=e.oxw();return e.KtG(T.changeRole(r.id,a))}),e.qZA()}if(2&s){const i=m.$implicit,l=e.oxw();e.Q6J("player",i)("displayMode",l.playerDisplayMode)("selectableRoles",l.availableRoles)}}let C=(()=>{var s;class m{constructor(l,a){this.newGameService=l,this.roleChoiceService=a,this.playerDisplayMode=u.d.EDIT_ROLE,this.playerTrackBy=v.y,this.cannotCreate=!0,this.availableRoles=[],this.rolesToPlay={selectedRoles:new Set,villageois:0,loupGarou:0,playersNumber:0},this.players$=this.roleChoiceService.getCurrentChosenRoles().pipe((0,R.b)(o=>this.rolesToPlay=o),(0,f.w)(()=>this.newGameService.getPlayers()),(0,R.b)(o=>{this.cannotCreate=!this.canCreateGame(o),this.availableRoles=this.getAvailableRoles(o)}))}changeRole(l,a){this.newGameService.changeRole(l,a)}createGame(){this.newGameService.createGame()}getAvailableRoles(l){const a=new Set(l.map(r=>r.role));let o=Array.from(this.rolesToPlay.selectedRoles).filter(r=>d.includes(r)||!a.has(r));return this.rolesToPlay.villageois>l.filter(r=>r.role===t.k.VILLAGEOIS).length&&o.push(t.k.VILLAGEOIS),this.rolesToPlay.loupGarou>l.filter(r=>r.role===t.k.LOUP_GAROU).length&&o.push(t.k.LOUP_GAROU),a.has(t.k.SOEUR)&&2===l.filter(r=>r.role===t.k.SOEUR).length&&(o=o.filter(r=>r!==t.k.SOEUR)),a.has(t.k.FRERE)&&3===l.filter(r=>r.role===t.k.FRERE).length&&(o=o.filter(r=>r!==t.k.FRERE)),o}canCreateGame(l){let a=l.every(o=>o.role!==t.k.NOT_SELECTED);return a&&l.some(o=>o.role===t.k.SOEUR)&&(a=2===l.filter(o=>o.role===t.k.SOEUR).length),a&&l.some(o=>o.role===t.k.FRERE)&&(a=3===l.filter(o=>o.role===t.k.FRERE).length),a}}return(s=m).\u0275fac=function(l){return new(l||s)(e.Y36(E.y),e.Y36(k.h))},s.\u0275cmp=e.Xpm({type:s,selectors:[["lgmj-new-game-roles"]],standalone:!0,features:[e.jDz],decls:11,vars:5,consts:[["title","Nouvelle partie - R\xf4les"],["id","container"],["id","player-list"],[3,"player","displayMode","selectableRoles","roleChange",4,"ngFor","ngForOf","ngForTrackBy"],["id","submit-block"],["expand","block",1,"ion-margin-horizontal",3,"disabled","click"],["routerLink","/new-game","expand","block","color","danger",1,"ion-margin-horizontal"],[3,"player","displayMode","selectableRoles","roleChange"]],template:function(l,a){1&l&&(e._UZ(0,"lgmj-header",0),e.TgZ(1,"ion-content")(2,"div",1)(3,"ion-list",2),e.YNc(4,O,1,3,"lgmj-player",3),e.ALo(5,"async"),e.qZA(),e.TgZ(6,"div",4)(7,"ion-button",5),e.NdJ("click",function(){return a.createGame()}),e._uU(8," D\xe9marrer "),e.qZA(),e.TgZ(9,"ion-button",6),e._uU(10," Retour "),e.qZA()()()()),2&l&&(e.xp6(4),e.Q6J("ngForOf",e.lcZ(5,3,a.players$))("ngForTrackBy",a.playerTrackBy),e.xp6(3),e.Q6J("disabled",a.cannotCreate))},dependencies:[g.ez,g.sg,g.Ov,c.Pc,c.YG,c.W2,c.q_,c.YI,G.rH,y.l,p.G],styles:["#submit-block[_ngcontent-%COMP%]{position:sticky;bottom:0;background:var(--ion-background-color, #fff);display:flow-root}"]}),m})()}}]);