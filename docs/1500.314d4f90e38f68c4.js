"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[1500],{1500:(v,u,r)=>{r.r(u),r.d(u,{VictoryPage:()=>p});var l=r(6814),s=r(439),o=r(6395),i=r(5548),t=r(6689);let m=(()=>{class e{transform(n){switch(n){case o.K.NONE:return"Tout le monde est mort";case o.K.AMOUREUX:return"Amoureux";case o.K.LOUP_GAROU:return"Loups-garous";case o.K.VILLAGEOIS:return"Villageois";case o.K.JOUEUR_FLUTE:return"Joueur de fl\xfbte";default:return""}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"victoryName",type:e,pure:!0,standalone:!0}),e})();var g=r(4978),y=r(2254);let p=(()=>{class e{constructor(n,c){this.route=n,this.newGameService=c,this.victory=this.route.snapshot.queryParamMap.get("victory"),this.victoryTitle=this.victory===o.K.NONE?"Match nul":"Victoire"}replay(){this.newGameService.replay()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.gz),t.Y36(y.y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["lgmj-victory"]],standalone:!0,features:[t.jDz],decls:16,vars:4,consts:[["title","Victoire"],["id","container"],[1,"ion-text-center"],["id","victory-subtitle"],["id","victory-title"],["routerLink","/",1,"ion-margin-horizontal"],["color","secondary",1,"ion-margin-horizontal",3,"click"]],template:function(n,c){1&n&&(t._UZ(0,"lgmj-header",0),t.TgZ(1,"ion-content")(2,"div",1)(3,"ion-note",2)(4,"h2",3),t._uU(5),t.qZA()(),t._UZ(6,"hr"),t.TgZ(7,"ion-text",2)(8,"h1",4),t._uU(9),t.ALo(10,"victoryName"),t.qZA()(),t.TgZ(11,"ion-button",5),t._uU(12,"Retourner \xe0 l'accueil"),t.qZA(),t._UZ(13,"br"),t.TgZ(14,"ion-button",6),t.NdJ("click",function(){return c.replay()}),t._uU(15,"Rejouer"),t.qZA()()()),2&n&&(t.xp6(5),t.Oqu(c.victoryTitle),t.xp6(4),t.Oqu(t.lcZ(10,2,c.victory)))},dependencies:[l.ez,s.rH,i.Pc,i.YG,i.W2,i.uN,i.yW,i.YI,m,g.G],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   #victory-subtitle[_ngcontent-%COMP%]{text-transform:uppercase}#container[_ngcontent-%COMP%]   #victory-title[_ngcontent-%COMP%]{text-transform:uppercase;margin-bottom:50px}#container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{width:15%}@media (prefers-color-scheme: dark){#container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{background-color:#fff}}"]}),e})()}}]);