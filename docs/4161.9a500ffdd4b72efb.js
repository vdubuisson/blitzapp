"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[4161],{4161:(N,d,a)=>{a.r(d),a.d(d,{NewGamePage:()=>h});var m=a(6814),o=a(5548),e=a(6689),l=a(95),u=a(5045);let p=(()=>{class t{constructor(n){this.formBuilder=n,this.newPlayer=new e.vpe,this.playerForm=this.formBuilder.group({name:["",l.kI.required]})}onSubmit(){this.newPlayer.emit(this.playerForm.value.name),this.playerForm.reset()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(l.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["lgmj-new-player"]],outputs:{newPlayer:"newPlayer"},standalone:!0,features:[e._Bn([u.L]),e.jDz],decls:5,vars:2,consts:[[3,"formGroup","ngSubmit"],["slot","start","color","success","shape","round","type","submit",3,"disabled"],["slot","icon-only","name","add"],["placeholder","Nom","formControlName","name"]],template:function(n,r){1&n&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(1,"ion-item")(2,"ion-button",1),e._UZ(3,"ion-icon",2),e.qZA(),e._UZ(4,"ion-input",3),e.qZA()()),2&n&&(e.Q6J("formGroup",r.playerForm),e.xp6(2),e.Q6J("disabled",r.playerForm.invalid))},dependencies:[m.ez,o.Pc,o.YG,o.gu,o.pK,o.Ie,o.j9,l.u5,l._Y,l.JJ,l.JL,l.UX,l.sg,l.u]}),t})();var y=a(4978),g=a(8540),f=a(9397),P=a(2254),v=a(439);function w(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"ion-item")(1,"ion-button",10),e.NdJ("click",function(){const s=e.CHM(n).$implicit,Z=e.oxw();return e.KtG(Z.removePlayer(s.id))}),e._UZ(2,"ion-icon",11),e.qZA(),e.TgZ(3,"ion-label")(4,"h2"),e._uU(5),e.qZA()(),e._UZ(6,"ion-reorder",12),e.qZA()}if(2&t){const n=i.$implicit;e.xp6(5),e.Oqu(n.name)}}let h=(()=>{class t{constructor(n){this.newGameService=n,this.playerTrackBy=g.y,this.canValidate=!1,this.players$=this.newGameService.getPlayers().pipe((0,f.b)(r=>this.canValidate=r.length>1))}addPlayer(n){this.newGameService.addPlayer(n)}reorderPlayer(n){const r=n;this.newGameService.reorderPlayers(r.detail.from,r.detail.to),r.detail.complete(!1)}removePlayer(n){this.newGameService.removePlayer(n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(P.y))},t.\u0275cmp=e.Xpm({type:t,selectors:[["lgmj-new-game"]],standalone:!0,features:[e.jDz],decls:15,vars:6,consts:[["title","Nouvelle partie - Joueurs"],["id","container"],["lines","full"],["slot","start","name","warning","size","large","color","warning"],[3,"newPlayer"],["id","player-list"],[3,"disabled","ionItemReorder"],[4,"ngFor","ngForOf","ngForTrackBy"],["id","submit-block"],["expand","block","routerLink","/new-game/roles",1,"ion-margin-horizontal",3,"disabled"],["slot","start","color","danger","shape","round",3,"click"],["slot","icon-only","name","remove"],["slot","end"]],template:function(n,r){1&n&&(e._UZ(0,"lgmj-header",0),e.TgZ(1,"ion-content")(2,"div",1)(3,"ion-item",2),e._UZ(4,"ion-icon",3),e.TgZ(5,"em"),e._uU(6,"Respectez la position r\xe9elle des joueurs"),e.qZA()(),e.TgZ(7,"lgmj-new-player",4),e.NdJ("newPlayer",function(s){return r.addPlayer(s)}),e.qZA(),e.TgZ(8,"ion-list",5)(9,"ion-reorder-group",6),e.NdJ("ionItemReorder",function(s){return r.reorderPlayer(s)}),e.YNc(10,w,7,1,"ion-item",7),e.ALo(11,"async"),e.qZA()(),e.TgZ(12,"div",8)(13,"ion-button",9),e._uU(14," Valider "),e.qZA()()()()),2&n&&(e.xp6(9),e.Q6J("disabled",!1),e.xp6(1),e.Q6J("ngForOf",e.lcZ(11,4,r.players$))("ngForTrackBy",r.playerTrackBy),e.xp6(3),e.Q6J("disabled",!r.canValidate))},dependencies:[m.ez,m.sg,m.Ov,o.Pc,o.YG,o.W2,o.gu,o.Ie,o.Q$,o.q_,o.Nh,o.oz,o.YI,p,y.G,v.rH],styles:["lgmj-new-player[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}#submit-block[_ngcontent-%COMP%]{position:sticky;bottom:0;background:var(--ion-background-color, #fff);display:flow-root}"]}),t})()}}]);