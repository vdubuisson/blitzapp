"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[4161],{4161:(G,u,a)=>{a.r(u),a.d(u,{NewGamePage:()=>Z});var e=a(9212),c=a(6814),o=a(9810),d=a(5861),l=a(95),p=a(3575);let y=(()=>{class i{constructor(r){this.formBuilder=r,this.newPlayer=new e.vpe,this.playerForm=this.formBuilder.group({name:["",l.kI.required]})}onSubmit(){var r=this;return(0,d.Z)(function*(){r.newPlayer.emit(r.playerForm.value.name),r.playerForm.reset(),(yield r.ionInput?.getInputElement())?.focus()})()}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(l.qu))};static#r=this.\u0275cmp=e.Xpm({type:i,selectors:[["lgmj-new-player"]],viewQuery:function(n,t){if(1&n&&e.Gf(o.pK,5),2&n){let s;e.iGM(s=e.CRH())&&(t.ionInput=s.first)}},outputs:{newPlayer:"newPlayer"},standalone:!0,features:[e._Bn([p.L]),e.jDz],decls:5,vars:2,consts:[[3,"formGroup","ngSubmit"],["slot","start","color","success","shape","round","type","submit",3,"disabled"],["slot","icon-only","name","add"],["placeholder","Nom","formControlName","name"]],template:function(n,t){1&n&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return t.onSubmit()}),e.TgZ(1,"ion-item")(2,"ion-button",1),e._UZ(3,"ion-icon",2),e.qZA(),e._UZ(4,"ion-input",3),e.qZA()()),2&n&&(e.Q6J("formGroup",t.playerForm),e.xp6(2),e.Q6J("disabled",t.playerForm.invalid))},dependencies:[c.ez,o.Pc,o.YG,o.gu,o.pK,o.Ie,o.j9,l.u5,l._Y,l.JJ,l.JL,l.UX,l.sg,l.u]})}return i})();var g=a(4978),f=a(8540),h=a(2254),v=a(289),P=a(8838);function w(i,T){if(1&i){const r=e.EpF();e.TgZ(0,"ion-item")(1,"ion-button",11),e.NdJ("click",function(){const s=e.CHM(r).$implicit,m=e.oxw();return e.KtG(m.removePlayer(s.id))}),e._UZ(2,"ion-icon",12),e.qZA(),e.TgZ(3,"ion-label")(4,"h2"),e._uU(5),e.qZA()(),e._UZ(6,"ion-reorder",13),e.qZA()}if(2&i){const r=T.$implicit;e.xp6(5),e.Oqu(r.name)}}let Z=(()=>{class i{constructor(r,n){this.newGameService=r,this.cardChoiceService=n,this.players=this.newGameService.currentPlayers,this.playerTrackBy=f.y,this.canValidate=(0,e.Flj)(()=>this.players().length===this.playersCount()),this.playersCount=(0,e.Flj)(()=>this.cardChoiceService.currentChosenCards().playersNumber)}addPlayer(r){this.newGameService.addPlayer(r)}reorderPlayer(r){const n=r;this.newGameService.reorderPlayers(n.detail.from,n.detail.to),n.detail.complete(!1)}removePlayer(r){this.newGameService.removePlayer(r)}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(h.y),e.Y36(P.I))};static#r=this.\u0275cmp=e.Xpm({type:i,selectors:[["lgmj-new-game"]],standalone:!0,features:[e.jDz],decls:16,vars:6,consts:[["title","Nouvelle partie - Joueurs"],["id","container"],["lines","full"],["slot","start","name","warning","size","large","color","warning"],[3,"newPlayer"],["id","player-list"],[3,"disabled","ionItemReorder"],[4,"ngFor","ngForOf","ngForTrackBy"],["id","submit-block"],["expand","block","routerLink","/new-game/roles",1,"ion-margin-horizontal",3,"disabled"],["expand","block","routerLink","/roles-choice","color","danger",1,"ion-margin-horizontal"],["slot","start","color","danger","shape","round",3,"click"],["slot","icon-only","name","remove"],["slot","end"]],template:function(n,t){1&n&&(e._UZ(0,"lgmj-header",0),e.TgZ(1,"ion-content")(2,"div",1)(3,"ion-item",2),e._UZ(4,"ion-icon",3),e.TgZ(5,"em"),e._uU(6,"Respectez la position r\xe9elle des joueurs (sens horaire)"),e.qZA()(),e.TgZ(7,"lgmj-new-player",4),e.NdJ("newPlayer",function(m){return t.addPlayer(m)}),e.qZA(),e.TgZ(8,"ion-list",5)(9,"ion-reorder-group",6),e.NdJ("ionItemReorder",function(m){return t.reorderPlayer(m)}),e.YNc(10,w,7,1,"ion-item",7),e.qZA()(),e.TgZ(11,"div",8)(12,"ion-button",9),e._uU(13),e.qZA(),e.TgZ(14,"ion-button",10),e._uU(15," Retour "),e.qZA()()()()),2&n&&(e.xp6(9),e.Q6J("disabled",!1),e.xp6(),e.Q6J("ngForOf",t.players())("ngForTrackBy",t.playerTrackBy),e.xp6(2),e.Q6J("disabled",!t.canValidate()),e.xp6(),e.AsE(" Valider (",t.players().length,"/",t.playersCount(),") "))},dependencies:[c.ez,c.sg,o.Pc,o.YG,o.W2,o.gu,o.Ie,o.Q$,o.q_,o.Nh,o.oz,o.YI,y,g.G,v.rH],styles:["lgmj-new-player[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}#submit-block[_ngcontent-%COMP%]{position:sticky;bottom:0;background:var(--ion-background-color, #fff);display:flow-root}"]})}return i})()}}]);