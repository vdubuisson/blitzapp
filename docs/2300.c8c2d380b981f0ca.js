"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[2300],{2300:(b,g,r)=>{r.r(g),r.d(g,{GamePage:()=>A});var d=r(6814),c=r(5548),p=r(9397),s=r(721),h=r(33),o=r(9236);const y={[o.h.CUPIDON]:"Tir de Cupidon",[o.h.VOYANTE]:"Vision de la voyante",[o.h.AMOUREUX]:"D\xe9couverte des amoureux",[o.h.LOUP_GAROU]:"Attaque des loups-garous",[o.h.SORCIERE_HEALTH]:"Soin de la sorci\xe8re",[o.h.SORCIERE_KILL]:"Potion de mort de la sorci\xe8re",[o.h.VILLAGEOIS]:"Vote des villageois",[o.h.CAPITAINE]:"Election du capitaine",[o.h.CHASSEUR]:"Tir du chasseur",[o.h.JOUEUR_FLUTE]:"Charme du joueur de fl\xfbte",[o.h.CHARMED]:"D\xe9couverte des charm\xe9s",[o.h.CORBEAU]:"Accusation du corbeau",[o.h.ENFANT_SAUVAGE]:"Mod\xe8le de l'enfant sauvage",[o.h.SALVATEUR]:"Protection du salvateur",[o.h.GRAND_MECHANT_LOUP]:"Attaque du grand m\xe9chant loup",[o.h.MONTREUR_OURS]:"Grognement de l'ours",[o.h.RENARD]:"Reniflement du renard",[o.h.CHIEN_LOUP]:"Choix du chien-loup",[o.h.SOEURS]:"D\xe9couverte des 2 s\u0153urs",[o.h.FRERES]:"D\xe9couverte des 3 fr\xe8res",[o.h.LOUP_BLANC]:"Attaque du loup blanc"};var e=r(6689);let m=(()=>{class n{transform(t){return y[t]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"roundName",type:n,pure:!0,standalone:!0}),n})();var _=r(5323),f=r(4978),E=r(8540),P=r(2639);function C(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"ion-note",4)(2,"h2",10)(3,"span",11),e._uU(4),e.qZA(),e._uU(5),e.TgZ(6,"span",11),e._uU(7),e.qZA()()(),e.BQk()),2&n){const t=i.ngIf,a=e.oxw().ngIf;e.xp6(4),e.Oqu(a.isDuringDay?"\u2600\ufe0f":"\u{1f319}"),e.xp6(1),e.AsE(" ",a.isDuringDay?"Jour":"Nuit"," ",t," "),e.xp6(2),e.Oqu(a.isDuringDay?"\u2600\ufe0f":"\u{1f319}")}}function S(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-radio-group",12),e.NdJ("ionChange",function(l){e.CHM(t);const u=e.oxw(2);return e.KtG(u.onSinglePlayerChecked(l))}),e.GkF(1,13),e.qZA()}if(2&n){const t=e.oxw().ngIf,a=e.MAs(12),l=e.oxw();e.Q6J("allowEmptySelection",0===t.minSelectable)("value",l.selectedPlayer),e.xp6(1),e.Q6J("ngTemplateOutlet",a)}}const T=function(){return[]};function x(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"lgmj-player",15),e.NdJ("checkedChange",function(l){const O=e.CHM(t).$implicit,R=e.oxw(3);return e.KtG(R.onMultiPlayerChecked(O.id,l))})("roleChange",function(l){e.CHM(t);const u=e.oxw(3);return e.KtG(u.onRoleSelect(l))}),e.qZA()}if(2&n){const t=i.$implicit,a=e.oxw(2).ngIf,l=e.oxw();e.Q6J("player",t)("displayMode",l.playerDisplayMode!==l.PlayerDisplayModeEnum.EDIT_ROLE||a.selectablePlayers.includes(t.id)?l.playerDisplayMode:l.PlayerDisplayModeEnum.DEFAULT)("disabled",!a.selectablePlayers.includes(t.id))("checked",l.selectedPlayers.has(t.id))("noSelfRole",!0)("selectableRoles",a.selectableRoles||e.DdM(6,T))}}function M(n,i){if(1&n&&(e.YNc(0,x,1,7,"lgmj-player",14),e.ALo(1,"async")),2&n){const t=e.oxw(2);e.Q6J("ngForOf",e.lcZ(1,2,t.players$))("ngForTrackBy",t.playerTrackBy)}}function D(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",3),e.YNc(2,C,8,4,"ng-container",2),e.ALo(3,"async"),e._UZ(4,"hr"),e.TgZ(5,"ion-text",4)(6,"h1",5),e._uU(7),e.ALo(8,"roundName"),e.qZA()()(),e.TgZ(9,"ion-list"),e.YNc(10,S,2,3,"ion-radio-group",6),e.qZA(),e.YNc(11,M,2,4,"ng-template",null,7,e.W1O),e.TgZ(13,"div",8)(14,"ion-button",9),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.onSubmit())}),e._uU(15," Valider "),e.qZA()(),e.BQk()}if(2&n){const t=i.ngIf,a=e.MAs(12),l=e.oxw();e.xp6(2),e.Q6J("ngIf",e.lcZ(3,5,l.dayCount$)),e.xp6(5),e.Oqu(e.lcZ(8,7,t.role)),e.xp6(3),e.Q6J("ngIf",l.playerDisplayMode===l.PlayerDisplayModeEnum.SELECT_SINGLE)("ngIfElse",a),e.xp6(4),e.Q6J("disabled",l.submitDisabled)}}let A=(()=>{class n{get submitDisabled(){switch(this.playerDisplayMode){case s.d.SELECT_SINGLE:return this.minSelectable>0&&void 0===this.selectedPlayer;case s.d.SELECT_MULTI:return this.selectedPlayers.size>this.maxSelectable||this.selectedPlayers.size<this.minSelectable;case s.d.EDIT_ROLE:return this.minSelectable>0&&void 0===this.selectedRole;default:return!1}}constructor(t){this.gameService=t,this.playerDisplayMode=s.d.DEFAULT,this.PlayerDisplayModeEnum=s.d,this.playerTrackBy=E.y,this.selectedPlayers=new Set,this.maxSelectable=0,this.minSelectable=0,this.round$=this.gameService.getRound().pipe((0,p.b)(a=>{void 0!==a&&(this.maxSelectable=a.maxSelectable,this.minSelectable=a.minSelectable,this.playerDisplayMode=a.type===P.T.ROLES?s.d.EDIT_ROLE:a.maxSelectable>1?s.d.SELECT_MULTI:1===a.maxSelectable?s.d.SELECT_SINGLE:s.d.DEFAULT)})),this.players$=this.gameService.getPlayers(),this.dayCount$=this.gameService.getDayCount()}onSinglePlayerChecked(t){this.playerDisplayMode===s.d.SELECT_SINGLE&&(this.selectedPlayer=t.detail.value)}onMultiPlayerChecked(t,a){this.playerDisplayMode===s.d.SELECT_MULTI&&(a?this.selectedPlayers.add(t):this.selectedPlayers.delete(t))}onRoleSelect(t){this.selectedRole=t}onSubmit(){const t=void 0!==this.selectedPlayer?[this.selectedPlayer]:Array.from(this.selectedPlayers);this.gameService.submitRoundAction(t,this.selectedRole),this.selectedPlayer=void 0,this.selectedPlayers.clear(),this.selectedRole=void 0}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.h))},n.\u0275cmp=e.Xpm({type:n,selectors:[["lgmj-game"]],standalone:!0,features:[e.jDz],decls:5,vars:3,consts:[["title","Partie en cours"],["id","container"],[4,"ngIf"],["id","round-header"],[1,"ion-text-center"],["id","round-title"],[3,"allowEmptySelection","value","ionChange",4,"ngIf","ngIfElse"],["playerElement",""],["id","submit-block"],["expand","block","color","success",1,"ion-margin-horizontal",3,"disabled","click"],["id","round-subtitle"],[1,"day-icon"],[3,"allowEmptySelection","value","ionChange"],[3,"ngTemplateOutlet"],[3,"player","displayMode","disabled","checked","noSelfRole","selectableRoles","checkedChange","roleChange",4,"ngFor","ngForOf","ngForTrackBy"],[3,"player","displayMode","disabled","checked","noSelfRole","selectableRoles","checkedChange","roleChange"]],template:function(t,a){1&t&&(e._UZ(0,"lgmj-header",0),e.TgZ(1,"ion-content")(2,"div",1),e.YNc(3,D,16,9,"ng-container",2),e.ALo(4,"async"),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("ngIf",e.lcZ(4,1,a.round$)))},dependencies:[d.ez,d.sg,d.O5,d.tP,d.Ov,c.Pc,c.YG,c.W2,c.q_,c.uN,c.se,c.yW,c.QI,m,_.l,f.G],styles:["#round-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background:var(--ion-background-color, #fff);display:flow-root}#round-header[_ngcontent-%COMP%]   #round-subtitle[_ngcontent-%COMP%]{text-transform:uppercase;font-size:15px}#round-header[_ngcontent-%COMP%]   #round-subtitle[_ngcontent-%COMP%]   .day-icon[_ngcontent-%COMP%]{font-size:25px}#round-header[_ngcontent-%COMP%]   #round-title[_ngcontent-%COMP%]{text-transform:uppercase;font-size:20px;margin-top:10px}#round-header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{width:15%;background-color:gray}@media (prefers-color-scheme: dark){#round-header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{background-color:#fff}}#submit-block[_ngcontent-%COMP%]{position:sticky;bottom:0;background:var(--ion-background-color, #fff);display:flow-root}"]}),n})()}}]);