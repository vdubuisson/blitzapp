"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[3903],{3903:(D,y,l)=>{l.r(y),l.d(y,{GamePage:()=>u});var h=l(6895),c=l(5035),p=l(8505),i=l(4253),m=l(3909),a=l(1022),e=l(8256);class d{transform(n){switch(n){case a.h.VOLEUR:return"Choix du voleur";case a.h.CUPIDON:return"Tir de Cupidon";case a.h.VOYANTE:return"Vision de la voyante";case a.h.AMOUREUX:return"D\xe9couverte des amoureux";case a.h.LOUP_GAROU:return"Attaque des loups-garous";case a.h.SORCIERE_HEALTH:return"Soin de la sorci\xe8re";case a.h.SORCIERE_KILL:return"Potion de mort de la sorci\xe8re";case a.h.VILLAGEOIS:return"Vote des villageois";case a.h.CAPITAINE:return"Election du capitaine";case a.h.CHASSEUR:return"Tir du chasseur";case a.h.JOUEUR_FLUTE:return"Charme du joueur de fl\xfbte";case a.h.CHARMED:return"D\xe9couverte des charm\xe9s";case a.h.CORBEAU:return"Accusation du corbeau";case a.h.ENFANT_SAUVAGE:return"Mod\xe8le de l'enfant sauvage";case a.h.SALVATEUR:return"Protection du salvateur";case a.h.GRAND_MECHANT_LOUP:return"Attaque du grand m\xe9chant loup";case a.h.MONTREUR_OURS:return"Grognement de l'ours";case a.h.RENARD:return"Reniflement du renard";case a.h.CHIEN_LOUP:return"Choix du chien-loup";default:return""}}}d.\u0275fac=function(n){return new(n||d)},d.\u0275pipe=e.Yjl({name:"roundName",type:d,pure:!0,standalone:!0});var _=l(6519),f=l(4664),C=l(4518),P=l(3538);function E(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"ion-note",4)(2,"h2",10)(3,"span",11),e._uU(4),e.qZA(),e._uU(5),e.TgZ(6,"span",11),e._uU(7),e.qZA()()(),e.BQk()),2&o){const t=n.ngIf,r=e.oxw().ngIf;e.xp6(4),e.Oqu(r.isDuringDay?"\u2600\ufe0f":"\u{1f319}"),e.xp6(1),e.AsE(" ",r.isDuringDay?"Jour":"Nuit"," ",t," "),e.xp6(2),e.Oqu(r.isDuringDay?"\u2600\ufe0f":"\u{1f319}")}}const S=function(){return[]};function T(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"lgmj-player",12),e.NdJ("checkedChange",function(s){const M=e.CHM(t).$implicit,b=e.oxw(2);return e.KtG(b.onMultiPlayerChecked(M.id,s))})("roleChange",function(s){e.CHM(t);const g=e.oxw(2);return e.KtG(g.onRoleSelect(s))}),e.qZA()}if(2&o){const t=n.$implicit,r=e.oxw().ngIf,s=e.oxw();e.Q6J("player",t)("displayMode",s.playerDisplayMode!==s.PlayerDisplayModeEnum.EDIT_ROLE||r.selectablePlayers.includes(t.id)?s.playerDisplayMode:s.PlayerDisplayModeEnum.DEFAULT)("disabled",!r.selectablePlayers.includes(t.id))("checked",s.selectedPlayers.has(t.id))("noSelfRole",!0)("selectableRoles",r.selectableRoles||e.DdM(6,S))}}function x(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",3),e.YNc(2,E,8,4,"ng-container",2),e.ALo(3,"async"),e._UZ(4,"hr"),e.TgZ(5,"ion-text",4)(6,"h1",5),e._uU(7),e.ALo(8,"roundName"),e.qZA()()(),e.TgZ(9,"ion-list")(10,"ion-radio-group",6),e.NdJ("ionChange",function(s){e.CHM(t);const g=e.oxw();return e.KtG(g.onSinglePlayerChecked(s))}),e.YNc(11,T,1,7,"lgmj-player",7),e.ALo(12,"async"),e.qZA()(),e.TgZ(13,"div",8)(14,"ion-button",9),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onSubmit())}),e._uU(15," Valider "),e.qZA()(),e.BQk()}if(2&o){const t=n.ngIf,r=e.oxw();e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,r.dayCount$)),e.xp6(5),e.Oqu(e.lcZ(8,9,t.role)),e.xp6(3),e.Q6J("allowEmptySelection",0===t.minSelectable)("value",r.selectedPlayer),e.xp6(1),e.Q6J("ngForOf",e.lcZ(12,11,r.players$))("ngForTrackBy",r.playerTrackBy),e.xp6(3),e.Q6J("disabled",r.submitDisabled)}}class u{constructor(n){this.gameService=n,this.playerDisplayMode=i.d.DEFAULT,this.PlayerDisplayModeEnum=i.d,this.playerTrackBy=C.y,this.selectedPlayers=new Set,this.maxSelectable=0,this.minSelectable=0,this.round$=this.gameService.getRound().pipe((0,p.b)(t=>{void 0!==t&&(this.maxSelectable=t.maxSelectable,this.minSelectable=t.minSelectable,this.playerDisplayMode=t.type===P.T.ROLES?i.d.EDIT_ROLE:t.maxSelectable>1?i.d.SELECT_MULTI:1===t.maxSelectable?i.d.SELECT_SINGLE:i.d.DEFAULT)})),this.players$=this.gameService.getPlayers(),this.dayCount$=this.gameService.getDayCount()}get submitDisabled(){switch(this.playerDisplayMode){case i.d.SELECT_SINGLE:return this.minSelectable>0&&void 0===this.selectedPlayer;case i.d.SELECT_MULTI:return this.selectedPlayers.size>this.maxSelectable||this.selectedPlayers.size<this.minSelectable;case i.d.EDIT_ROLE:return this.minSelectable>0&&void 0===this.selectedRole;default:return!1}}onSinglePlayerChecked(n){this.playerDisplayMode===i.d.SELECT_SINGLE&&(this.selectedPlayer=n.detail.value)}onMultiPlayerChecked(n,t){this.playerDisplayMode===i.d.SELECT_MULTI&&(t?this.selectedPlayers.add(n):this.selectedPlayers.delete(n))}onRoleSelect(n){this.selectedRole=n}onSubmit(){const n=void 0!==this.selectedPlayer?[this.selectedPlayer]:Array.from(this.selectedPlayers);this.gameService.submitRoundAction(n,this.selectedRole),this.selectedPlayer=void 0,this.selectedPlayers.clear(),this.selectedRole=void 0}}u.\u0275fac=function(n){return new(n||u)(e.Y36(m.h))},u.\u0275cmp=e.Xpm({type:u,selectors:[["lgmj-game"]],standalone:!0,features:[e.jDz],decls:5,vars:3,consts:[["title","Partie en cours"],["id","container"],[4,"ngIf"],["id","round-header"],[1,"ion-text-center"],["id","round-title"],[3,"allowEmptySelection","value","ionChange"],[3,"player","displayMode","disabled","checked","noSelfRole","selectableRoles","checkedChange","roleChange",4,"ngFor","ngForOf","ngForTrackBy"],["id","submit-block"],["expand","block","color","success",1,"ion-margin-horizontal",3,"disabled","click"],["id","round-subtitle"],[1,"day-icon"],[3,"player","displayMode","disabled","checked","noSelfRole","selectableRoles","checkedChange","roleChange"]],template:function(n,t){1&n&&(e._UZ(0,"lgmj-header",0),e.TgZ(1,"ion-content")(2,"div",1),e.YNc(3,x,16,13,"ng-container",2),e.ALo(4,"async"),e.qZA()()),2&n&&(e.xp6(3),e.Q6J("ngIf",e.lcZ(4,1,t.round$)))},dependencies:[h.ez,h.sg,h.O5,h.Ov,c.Pc,c.YG,c.W2,c.q_,c.uN,c.se,c.yW,c.QI,d,_.l,f.G],styles:["#round-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background:var(--ion-background-color, #fff);display:flow-root}#round-header[_ngcontent-%COMP%]   #round-subtitle[_ngcontent-%COMP%]{text-transform:uppercase;font-size:15px}#round-header[_ngcontent-%COMP%]   #round-subtitle[_ngcontent-%COMP%]   .day-icon[_ngcontent-%COMP%]{font-size:25px}#round-header[_ngcontent-%COMP%]   #round-title[_ngcontent-%COMP%]{text-transform:uppercase;font-size:20px;margin-top:10px}#round-header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{width:15%;background-color:gray}@media (prefers-color-scheme: dark){#round-header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{background-color:#fff}}#submit-block[_ngcontent-%COMP%]{position:sticky;bottom:0;background:var(--ion-background-color, #fff);display:flow-root}"]})}}]);