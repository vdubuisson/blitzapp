"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[3903],{3903:(E,p,a)=>{a.r(p),a.d(p,{GamePage:()=>h});var d=a(6895),r=a(5035),m=a(8505),s=a(4253),y=a(1642),i=a(1022),e=a(8256);class u{transform(n){switch(n){case i.h.VOLEUR:return"Choix du voleur";case i.h.CUPIDON:return"Tir de Cupidon";case i.h.VOYANTE:return"Vision de la voyante";case i.h.AMOUREUX:return"D\xe9couverte des amoureux";case i.h.LOUP_GAROU:return"Attaque des loups-garous";case i.h.SORCIERE_HEALTH:return"Soin de la sorci\xe8re";case i.h.SORCIERE_KILL:return"Potion de mort de la sorci\xe8re";case i.h.VILLAGEOIS:return"Vote des villageois";case i.h.CAPITAINE:return"Election du capitaine";case i.h.CHASSEUR:return"Tir du chasseur";default:return""}}static#e=this.\u0275fac=function(t){return new(t||u)};static#t=this.\u0275pipe=e.Yjl({name:"roundName",type:u,pure:!0,standalone:!0})}var f=a(8099),P=a(4664);function C(c,n){if(1&c){const t=e.EpF();e.TgZ(0,"lgmj-player",11),e.NdJ("checkedChange",function(o){const S=e.CHM(t).$implicit,x=e.oxw(2);return e.KtG(x.onMultiPlayerChecked(S.id,o))}),e.qZA()}if(2&c){const t=n.$implicit,l=e.oxw().ngIf,o=e.oxw();e.Q6J("player",t)("displayMode",o.playerDisplayMode)("disabled",!l.selectablePlayers.includes(t.id))("checked",o.selectedPlayers.has(t.id))}}function _(c,n){if(1&c){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",3)(2,"ion-note",4)(3,"h2",5),e._uU(4),e.qZA()(),e._UZ(5,"hr"),e.TgZ(6,"ion-text",4)(7,"h1",6),e._uU(8),e.ALo(9,"roundName"),e.qZA()()(),e.TgZ(10,"ion-list")(11,"ion-radio-group",7),e.NdJ("ionChange",function(o){e.CHM(t);const g=e.oxw();return e.KtG(g.onSinglePlayerChecked(o))}),e.YNc(12,C,1,4,"lgmj-player",8),e.ALo(13,"async"),e.qZA()(),e.TgZ(14,"div",9)(15,"ion-button",10),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onSubmit())}),e._uU(16," Valider "),e.qZA()(),e.BQk()}if(2&c){const t=n.ngIf,l=e.oxw();e.xp6(4),e.AsE(" ",t.isDuringDay?"\u2600\ufe0f":"\u{1f319}"," Tour actuel ",t.isDuringDay?"\u2600\ufe0f":"\u{1f319}"," "),e.xp6(4),e.Oqu(e.lcZ(9,7,t.role)),e.xp6(3),e.Q6J("allowEmptySelection",0===t.minSelectable)("value",l.selectedPlayer),e.xp6(1),e.Q6J("ngForOf",e.lcZ(13,9,l.players$)),e.xp6(3),e.Q6J("disabled",l.submitDisabled)}}class h{constructor(n){this.gameService=n,this.playerDisplayMode=s.d.DEFAULT,this.selectedPlayers=new Set,this.maxSelectable=0,this.minSelectable=0,this.round$=this.gameService.getRound().pipe((0,m.b)(t=>{void 0!==t&&(this.maxSelectable=t.maxSelectable,this.minSelectable=t.minSelectable,this.playerDisplayMode=t.maxSelectable>1?s.d.SELECT_MULTI:1===t.maxSelectable?s.d.SELECT_SINGLE:s.d.DEFAULT)})),this.players$=this.gameService.getPlayers()}get submitDisabled(){switch(this.playerDisplayMode){case s.d.SELECT_SINGLE:return this.minSelectable>0&&void 0===this.selectedPlayer;case s.d.SELECT_MULTI:return this.selectedPlayers.size>this.maxSelectable||this.selectedPlayers.size<this.minSelectable;default:return!1}}onSinglePlayerChecked(n){this.playerDisplayMode===s.d.SELECT_SINGLE&&(this.selectedPlayer=n.detail.value)}onMultiPlayerChecked(n,t){this.playerDisplayMode===s.d.SELECT_MULTI&&(t?this.selectedPlayers.add(n):this.selectedPlayers.delete(n))}onSubmit(){const n=void 0!==this.selectedPlayer?[this.selectedPlayer]:Array.from(this.selectedPlayers);this.gameService.submitRoundAction(n),this.selectedPlayer=void 0,this.selectedPlayers.clear()}static#e=this.\u0275fac=function(t){return new(t||h)(e.Y36(y.h))};static#t=this.\u0275cmp=e.Xpm({type:h,selectors:[["lgmj-game"]],standalone:!0,features:[e.jDz],decls:5,vars:3,consts:[["title","Partie en cours"],["id","container"],[4,"ngIf"],["id","round-header"],[1,"ion-text-center"],["id","round-subtitle"],["id","round-title"],[3,"allowEmptySelection","value","ionChange"],[3,"player","displayMode","disabled","checked","checkedChange",4,"ngFor","ngForOf"],["id","submit-block"],["expand","block","color","success",1,"ion-margin-horizontal",3,"disabled","click"],[3,"player","displayMode","disabled","checked","checkedChange"]],template:function(t,l){1&t&&(e._UZ(0,"lgmj-header",0),e.TgZ(1,"ion-content")(2,"div",1),e.YNc(3,_,17,11,"ng-container",2),e.ALo(4,"async"),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("ngIf",e.lcZ(4,1,l.round$)))},dependencies:[d.ez,d.sg,d.O5,d.Ov,r.Pc,r.YG,r.W2,r.q_,r.uN,r.se,r.yW,r.QI,u,f.l,P.G],styles:["#round-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background:var(--ion-background-color, #fff);display:flow-root}#round-header[_ngcontent-%COMP%]   #round-subtitle[_ngcontent-%COMP%]{text-transform:uppercase;font-size:15px}#round-header[_ngcontent-%COMP%]   #round-title[_ngcontent-%COMP%]{text-transform:uppercase;font-size:20px;margin-top:10px}#round-header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{width:15%}@media (prefers-color-scheme: dark){#round-header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{background-color:#fff}}#submit-block[_ngcontent-%COMP%]{position:sticky;bottom:0;background:var(--ion-background-color, #fff);display:flow-root}"]})}}}]);