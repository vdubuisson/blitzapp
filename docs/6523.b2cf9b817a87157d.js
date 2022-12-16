"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[6523],{6523:(N,u,t)=>{t.r(u),t.d(u,{NewGamePage:()=>s});var m=t(6895),r=t(5035),e=t(8256),a=t(433),p=t(9297);class l{constructor(o){this.formBuilder=o,this.newPlayer=new e.vpe,this.playerForm=this.formBuilder.group({name:["",a.kI.required]})}onSubmit(){this.newPlayer.emit(this.playerForm.value.name),this.playerForm.reset()}}l.\u0275fac=function(o){return new(o||l)(e.Y36(a.qu))},l.\u0275cmp=e.Xpm({type:l,selectors:[["lgmj-new-player"]],outputs:{newPlayer:"newPlayer"},standalone:!0,features:[e._Bn([p.L]),e.jDz],decls:5,vars:2,consts:[[3,"formGroup","ngSubmit"],["slot","start","color","success","shape","round","type","submit",3,"disabled"],["slot","icon-only","name","add"],["placeholder","Nom","formControlName","name"]],template:function(o,n){1&o&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(1,"ion-item")(2,"ion-button",1),e._UZ(3,"ion-icon",2),e.qZA(),e._UZ(4,"ion-input",3),e.qZA()()),2&o&&(e.Q6J("formGroup",n.playerForm),e.xp6(2),e.Q6J("disabled",n.playerForm.invalid))},dependencies:[m.ez,r.Pc,r.YG,r.gu,r.pK,r.Ie,r.j9,a.u5,a._Y,a.JJ,a.JL,a.UX,a.sg,a.u]});var y=t(4664),g=t(4518),f=t(8505),P=t(1916),v=t(8265);function w(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"ion-item")(1,"ion-button",10),e.NdJ("click",function(){const h=e.CHM(n).$implicit,Z=e.oxw();return e.KtG(Z.removePlayer(h.id))}),e._UZ(2,"ion-icon",11),e.qZA(),e.TgZ(3,"ion-label")(4,"h2"),e._uU(5),e.qZA()(),e._UZ(6,"ion-reorder",12),e.qZA()}if(2&i){const n=o.$implicit;e.xp6(5),e.Oqu(n.name)}}class s{constructor(o){this.newGameService=o,this.playerTrackBy=g.y,this.canValidate=!1,this.players$=this.newGameService.getPlayers().pipe((0,f.b)(n=>this.canValidate=n.length>1))}addPlayer(o){this.newGameService.addPlayer(o)}reorderPlayer(o){const n=o;this.newGameService.reorderPlayers(n.detail.from,n.detail.to),n.detail.complete(!1)}removePlayer(o){this.newGameService.removePlayer(o)}}s.\u0275fac=function(o){return new(o||s)(e.Y36(P.y))},s.\u0275cmp=e.Xpm({type:s,selectors:[["lgmj-new-game"]],standalone:!0,features:[e.jDz],decls:15,vars:6,consts:[["title","Nouvelle partie - Joueurs"],["id","container"],["lines","full"],["slot","start","name","warning","size","large","color","warning"],[3,"newPlayer"],["id","player-list"],[3,"disabled","ionItemReorder"],[4,"ngFor","ngForOf","ngForTrackBy"],["id","submit-block"],["expand","block","routerLink","/new-game/roles",1,"ion-margin-horizontal",3,"disabled"],["slot","start","color","danger","shape","round",3,"click"],["slot","icon-only","name","remove"],["slot","end"]],template:function(o,n){1&o&&(e._UZ(0,"lgmj-header",0),e.TgZ(1,"ion-content")(2,"div",1)(3,"ion-item",2),e._UZ(4,"ion-icon",3),e.TgZ(5,"em"),e._uU(6,"Respectez la position r\xe9elle des joueurs"),e.qZA()(),e.TgZ(7,"lgmj-new-player",4),e.NdJ("newPlayer",function(c){return n.addPlayer(c)}),e.qZA(),e.TgZ(8,"ion-list",5)(9,"ion-reorder-group",6),e.NdJ("ionItemReorder",function(c){return n.reorderPlayer(c)}),e.YNc(10,w,7,1,"ion-item",7),e.ALo(11,"async"),e.qZA()(),e.TgZ(12,"div",8)(13,"ion-button",9),e._uU(14," Valider "),e.qZA()()()()),2&o&&(e.xp6(9),e.Q6J("disabled",!1),e.xp6(1),e.Q6J("ngForOf",e.lcZ(11,4,n.players$))("ngForTrackBy",n.playerTrackBy),e.xp6(3),e.Q6J("disabled",!n.canValidate))},dependencies:[m.ez,m.sg,m.Ov,r.Pc,r.YG,r.W2,r.gu,r.Ie,r.Q$,r.q_,r.Nh,r.oz,r.YI,l,y.G,v.rH],styles:["lgmj-new-player[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}#submit-block[_ngcontent-%COMP%]{position:sticky;bottom:0;background:var(--ion-background-color, #fff);display:flow-root}"]})}}]);