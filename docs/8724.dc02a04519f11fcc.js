"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[8724],{8724:(G,_,n)=>{n.r(_),n.d(_,{NewGamePage:()=>y});var m=n(6895),r=n(5035),p=n(6146);const h=[p.k.VILLAGEOIS,p.k.LOUP_GAROU];var d=n(4253),f=n(1642),e=n(8256),s=n(433),b=n(9297);class u{constructor(a){this.formBuilder=a,this.newPlayer=new e.vpe,this.playerForm=this.formBuilder.group({name:["",s.kI.required]})}onSubmit(){this.newPlayer.emit(this.playerForm.value.name),this.playerForm.reset()}static#e=this.\u0275fac=function(t){return new(t||u)(e.Y36(s.qu))};static#t=this.\u0275cmp=e.Xpm({type:u,selectors:[["lgmj-new-player"]],outputs:{newPlayer:"newPlayer"},standalone:!0,features:[e._Bn([b.L]),e.jDz],decls:5,vars:2,consts:[[3,"formGroup","ngSubmit"],["slot","start","color","success","shape","round","type","submit",3,"disabled"],["slot","icon-only","name","add"],["placeholder","Nom","formControlName","name"]],template:function(t,l){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return l.onSubmit()}),e.TgZ(1,"ion-item")(2,"ion-button",1),e._UZ(3,"ion-icon",2),e.qZA(),e._UZ(4,"ion-input",3),e.qZA()()),2&t&&(e.Q6J("formGroup",l.playerForm),e.xp6(2),e.Q6J("disabled",l.playerForm.invalid))},dependencies:[m.ez,r.Pc,r.YG,r.gu,r.pK,r.Ie,r.j9,s.u5,s._Y,s.JJ,s.JL,s.UX,s.sg,s.u]})}var v=n(8099),P=n(4664);function w(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"lgmj-new-player",9),e.NdJ("newPlayer",function(o){e.CHM(t);const c=e.oxw();return e.KtG(c.addPlayer(o))}),e.qZA()}}function T(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"lgmj-player",10),e.NdJ("remove",function(){const c=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.removePlayer(c.id))})("roleChange",function(o){const g=e.CHM(t).$implicit,C=e.oxw();return e.KtG(C.changeRole(g.id,o))}),e.qZA()}if(2&i){const t=a.$implicit,l=e.oxw();e.Q6J("player",t)("displayMode",l.playerDisplayMode)("selectableRoles",l.availableRoles)}}function N(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"ion-button",11),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.validatePlayers())}),e._uU(1," Valider "),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("disabled",0===t.players.length)}}function E(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"ion-button",11),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.createGame())}),e._uU(1," D\xe9marrer "),e.qZA(),e.TgZ(2,"ion-button",12),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.backToCreation())}),e._uU(3," Retour "),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("disabled",t.cannotCreate)}}class y{constructor(a){this.gameService=a,this.players=[],this.playerDisplayMode=d.d.CREATE,this.playerDisplayModeEnum=d.d,this.pageSubtitle="Joueurs",this.availableRoles=this.getAvailableRoles()}get cannotCreate(){return this.players.some(a=>a.role===p.k.NOT_SELECTED)}validatePlayers(){this.playerDisplayMode=d.d.EDIT_ROLE,this.pageSubtitle="R\xf4les"}createGame(){this.gameService.createGame(this.players)}backToCreation(){this.playerDisplayMode=d.d.CREATE,this.pageSubtitle="Joueurs"}addPlayer(a){this.players.push({id:this.players.length,name:a,role:p.k.NOT_SELECTED,statuses:new Set,isDead:!1})}removePlayer(a){this.players.splice(a,1),this.reindexPlayers(),this.availableRoles=this.getAvailableRoles()}reorderPlayer(a){this.players=a.detail.complete(this.players),this.reindexPlayers()}changeRole(a,t){const l=this.players.find(o=>o.id===a);void 0!==l&&(l.role=t,this.availableRoles=this.getAvailableRoles())}reindexPlayers(){this.players.forEach((a,t)=>a.id=t)}getAvailableRoles(){const a=new Set(this.players.map(t=>t.role));return Object.values(p.k).filter(t=>t!==p.k.NOT_SELECTED&&(h.includes(t)||!a.has(t))).filter(t=>t!==p.k.VOLEUR)}static#e=this.\u0275fac=function(t){return new(t||y)(e.Y36(f.h))};static#t=this.\u0275cmp=e.Xpm({type:y,selectors:[["lgmj-new-game"]],standalone:!0,features:[e.jDz],decls:11,vars:6,consts:[[3,"title"],["id","container"],[3,"newPlayer",4,"ngIf"],["id","player-list"],[3,"disabled","ionItemReorder"],[3,"player","displayMode","selectableRoles","remove","roleChange",4,"ngFor","ngForOf"],["id","submit-block"],["expand","block","class","ion-margin-horizontal",3,"disabled","click",4,"ngIf","ngIfElse"],["startButtons",""],[3,"newPlayer"],[3,"player","displayMode","selectableRoles","remove","roleChange"],["expand","block",1,"ion-margin-horizontal",3,"disabled","click"],["expand","block","color","danger",1,"ion-margin-horizontal",3,"click"]],template:function(t,l){if(1&t&&(e._UZ(0,"lgmj-header",0),e.TgZ(1,"ion-content")(2,"div",1),e.YNc(3,w,1,0,"lgmj-new-player",2),e.TgZ(4,"ion-list",3)(5,"ion-reorder-group",4),e.NdJ("ionItemReorder",function(c){return l.reorderPlayer(c)}),e.YNc(6,T,1,3,"lgmj-player",5),e.qZA()(),e.TgZ(7,"div",6),e.YNc(8,N,2,1,"ion-button",7),e.qZA(),e.YNc(9,E,4,1,"ng-template",null,8,e.W1O),e.qZA()()),2&t){const o=e.MAs(10);e.Q6J("title","Nouvelle partie - "+l.pageSubtitle),e.xp6(3),e.Q6J("ngIf",l.playerDisplayMode===l.playerDisplayModeEnum.CREATE),e.xp6(2),e.Q6J("disabled",!1),e.xp6(1),e.Q6J("ngForOf",l.players),e.xp6(2),e.Q6J("ngIf",l.playerDisplayMode===l.playerDisplayModeEnum.CREATE)("ngIfElse",o)}},dependencies:[m.ez,m.sg,m.O5,r.Pc,r.YG,r.W2,r.q_,r.oz,u,v.l,P.G],styles:["lgmj-new-player[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}#submit-block[_ngcontent-%COMP%]{position:sticky;bottom:0;background:var(--ion-background-color, #fff);display:flow-root}"]})}}}]);