"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[2300],{2300:(b,h,i)=>{i.r(h),i.d(h,{GamePage:()=>O});var e=i(9212),u=i(6814),s=i(9810),r=i(721),g=i(9321),l=i(9236);const p={[l.h.CUPIDON]:"Tir de Cupidon",[l.h.VOYANTE]:"Vision de la voyante",[l.h.AMOUREUX]:"D\xe9couverte des amoureux",[l.h.LOUP_GAROU]:"Attaque des loups-garous",[l.h.SORCIERE_HEALTH]:"Soin de la sorci\xe8re",[l.h.SORCIERE_KILL]:"Potion de mort de la sorci\xe8re",[l.h.VILLAGEOIS]:"Vote des villageois",[l.h.CAPITAINE]:"Election du capitaine",[l.h.CHASSEUR]:"Tir du chasseur",[l.h.JOUEUR_FLUTE]:"Charme du joueur de fl\xfbte",[l.h.CHARMED]:"D\xe9couverte des charm\xe9s",[l.h.CORBEAU]:"Accusation du corbeau",[l.h.ENFANT_SAUVAGE]:"Mod\xe8le de l'enfant sauvage",[l.h.SALVATEUR]:"Protection du salvateur",[l.h.GRAND_MECHANT_LOUP]:"Attaque du grand m\xe9chant loup",[l.h.MONTREUR_OURS]:"Grognement de l'ours",[l.h.RENARD]:"Reniflement du renard",[l.h.CHIEN_LOUP]:"Choix du chien-loup",[l.h.SOEURS]:"D\xe9couverte des 2 s\u0153urs",[l.h.FRERES]:"D\xe9couverte des 3 fr\xe8res",[l.h.LOUP_BLANC]:"Attaque du loup blanc",[l.h.VOLEUR]:"Echange du voleur",[l.h.BOUC]:"Choix des votants du bouc \xe9missaire"};let m=(()=>{class a{transform(t){return p[t]}static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275pipe=e.Yjl({name:"roundName",type:a,pure:!0,standalone:!0})}return a})();var _=i(5323),y=i(4978),f=i(8540),E=i(2639),C=i(6685);function P(a,d){if(1&a){const t=e.EpF();e.TgZ(0,"ion-radio-group",13),e.NdJ("ionChange",function(o){e.CHM(t);const c=e.oxw(2);return e.KtG(c.onSinglePlayerChecked(o))}),e.GkF(1,14),e.qZA()}if(2&a){const t=e.oxw().ngIf,n=e.MAs(17),o=e.oxw();e.Q6J("allowEmptySelection",0===t.minSelectable)("value",o.selectedPlayer()),e.xp6(),e.Q6J("ngTemplateOutlet",n)}}const S=()=>[];function T(a,d){if(1&a){const t=e.EpF();e.TgZ(0,"lgmj-player",16),e.NdJ("checkedChange",function(o){const M=e.CHM(t).$implicit,A=e.oxw(3);return e.KtG(A.onMultiPlayerChecked(M.id,o))})("roleChange",function(o){e.CHM(t);const c=e.oxw(3);return e.KtG(c.onRoleSelect(o))}),e.qZA()}if(2&a){const t=d.$implicit,n=e.oxw(2).ngIf,o=e.oxw();e.Q6J("player",t)("displayMode",o.playerDisplayMode()!==o.PlayerDisplayModeEnum.EDIT_ROLE||n.selectablePlayers.includes(t.id)?o.playerDisplayMode():o.PlayerDisplayModeEnum.DEFAULT)("disabled",!n.selectablePlayers.includes(t.id))("checked",o.selectedPlayers().has(t.id))("noSelfRole",!0)("selectableRoles",n.selectableRoles||e.DdM(6,S))}}function x(a,d){if(1&a&&e.YNc(0,T,1,7,"lgmj-player",15),2&a){const t=e.oxw(2);e.Q6J("ngForOf",t.players())("ngForTrackBy",t.playerTrackBy)}}function v(a,d){if(1&a){const t=e.EpF();e.TgZ(0,"ion-button",17),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.onEquality())}),e._uU(1," Egalit\xe9 "),e.qZA()}}function R(a,d){if(1&a){const t=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"ion-note",4)(3,"h2",5)(4,"span",6),e._uU(5),e.qZA(),e._uU(6),e.TgZ(7,"span",6),e._uU(8),e.qZA()()(),e._UZ(9,"hr"),e.TgZ(10,"ion-text",4)(11,"h1",7),e._uU(12),e.ALo(13,"roundName"),e.qZA()()(),e.TgZ(14,"ion-list"),e.YNc(15,P,2,3,"ion-radio-group",8),e.qZA(),e.YNc(16,x,1,2,"ng-template",null,9,e.W1O),e.TgZ(18,"div",10)(19,"ion-button",11),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onSubmit())}),e._uU(20," Valider "),e.qZA(),e.YNc(21,v,2,0,"ion-button",12),e.qZA()()}if(2&a){const t=d.ngIf,n=e.MAs(17),o=e.oxw();e.xp6(5),e.Oqu(t.isDuringDay?"\u2600\ufe0f":"\u{1f319}"),e.xp6(),e.AsE(" ",t.isDuringDay?"Jour":"Nuit"," ",o.dayCount()," "),e.xp6(2),e.Oqu(t.isDuringDay?"\u2600\ufe0f":"\u{1f319}"),e.xp6(4),e.Oqu(e.lcZ(13,9,t.role)),e.xp6(3),e.Q6J("ngIf",o.playerDisplayMode()===o.PlayerDisplayModeEnum.SELECT_SINGLE)("ngIfElse",n),e.xp6(4),e.Q6J("disabled",o.submitDisabled()),e.xp6(2),e.Q6J("ngIf",o.displayEqualityButton())}}let O=(()=>{class a{constructor(t){this.gameService=t,this.players=this.gameService.currentPlayers,this.round=this.gameService.currentRound,this.dayCount=this.gameService.currentDayCount,this.playerDisplayMode=(0,e.Flj)(()=>{if(void 0!==this.round()){const n=this.round();return n.type===E.T.ROLES?r.d.EDIT_ROLE:n.maxSelectable>1?r.d.SELECT_MULTI:1===n.maxSelectable?r.d.SELECT_SINGLE:r.d.DEFAULT}return r.d.DEFAULT}),this.PlayerDisplayModeEnum=r.d,this.playerTrackBy=f.y,this.selectedPlayer=(0,e.tdS)(void 0),this.selectedPlayers=(0,e.tdS)(new Set),this.selectedRole=(0,e.tdS)(void 0),this.submitDisabled=(0,e.Flj)(()=>{switch(this.playerDisplayMode()){case r.d.SELECT_SINGLE:return(this.round()?.minSelectable??0)>0&&void 0===this.selectedPlayer();case r.d.SELECT_MULTI:return this.selectedPlayers().size>(this.round()?.maxSelectable??0)||this.selectedPlayers().size<(this.round()?.minSelectable??0);case r.d.EDIT_ROLE:return(this.round()?.minSelectable??0)>0&&void 0===this.selectedRole();default:return!1}}),this.displayEqualityButton=(0,e.Flj)(()=>this.players().some(n=>n.role===C.k.BOUC&&!n.isDead)&&this.round()?.role===l.h.VILLAGEOIS)}onSinglePlayerChecked(t){this.playerDisplayMode()===r.d.SELECT_SINGLE&&this.selectedPlayer.set(t.detail.value)}onMultiPlayerChecked(t,n){this.playerDisplayMode()===r.d.SELECT_MULTI&&this.selectedPlayers.update(o=>{const c=new Set(o);return n?c.add(t):c.delete(t),c})}onRoleSelect(t){this.selectedRole.set(t)}onSubmit(){const t=void 0!==this.selectedPlayer()?[this.selectedPlayer()]:Array.from(this.selectedPlayers());this.gameService.submitRoundAction(t,this.selectedRole()),this.cleanSelection()}onEquality(){this.gameService.submitRoundAction([],void 0,!0),this.cleanSelection()}cleanSelection(){this.selectedPlayer.set(void 0),this.selectedPlayers.set(new Set),this.selectedRole.set(void 0)}static#e=this.\u0275fac=function(n){return new(n||a)(e.Y36(g.h))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["lgmj-game"]],standalone:!0,features:[e.jDz],decls:3,vars:1,consts:[["title","Partie en cours"],["id","container",4,"ngIf"],["id","container"],["id","round-header"],[1,"ion-text-center"],["id","round-subtitle"],[1,"day-icon"],["id","round-title"],[3,"allowEmptySelection","value","ionChange",4,"ngIf","ngIfElse"],["playerElement",""],["id","submit-block"],["expand","block","color","success",1,"ion-margin-horizontal",3,"disabled","click"],["expand","block","class","ion-margin-horizontal","color","medium",3,"click",4,"ngIf"],[3,"allowEmptySelection","value","ionChange"],[3,"ngTemplateOutlet"],[3,"player","displayMode","disabled","checked","noSelfRole","selectableRoles","checkedChange","roleChange",4,"ngFor","ngForOf","ngForTrackBy"],[3,"player","displayMode","disabled","checked","noSelfRole","selectableRoles","checkedChange","roleChange"],["expand","block","color","medium",1,"ion-margin-horizontal",3,"click"]],template:function(n,o){1&n&&(e._UZ(0,"lgmj-header",0),e.TgZ(1,"ion-content"),e.YNc(2,R,22,11,"div",1),e.qZA()),2&n&&(e.xp6(2),e.Q6J("ngIf",o.round()))},dependencies:[u.ez,u.sg,u.O5,u.tP,s.Pc,s.YG,s.W2,s.q_,s.uN,s.se,s.yW,s.QI,m,_.l,y.G],styles:["#round-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background:var(--ion-background-color, #fff);display:flow-root}#round-header[_ngcontent-%COMP%]   #round-subtitle[_ngcontent-%COMP%]{text-transform:uppercase;font-size:15px}#round-header[_ngcontent-%COMP%]   #round-subtitle[_ngcontent-%COMP%]   .day-icon[_ngcontent-%COMP%]{font-size:25px}#round-header[_ngcontent-%COMP%]   #round-title[_ngcontent-%COMP%]{text-transform:uppercase;font-size:20px;margin-top:10px}#round-header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{width:15%;background-color:gray}@media (prefers-color-scheme: dark){#round-header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{background-color:#fff}}#submit-block[_ngcontent-%COMP%]{position:sticky;bottom:0;background:var(--ion-background-color, #fff);display:flow-root}"]})}return a})()}}]);