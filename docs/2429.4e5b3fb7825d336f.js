"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[2429],{2429:(d,u,n)=>{n.r(u),n.d(u,{VictoryPage:()=>h});var m=n(6814),l=n(439),r=n(6395),i=n(7027);const g={[r.K.NONE]:"Tout le monde est mort",[r.K.AMOUREUX]:"Amoureux",[r.K.LOUP_GAROU]:"Loups-garous",[r.K.VILLAGEOIS]:"Villageois",[r.K.JOUEUR_FLUTE]:"Joueur de fl\xfbte",[r.K.LOUP_BLANC]:"Loup-garou blanc"};var t=n(6689);let y=(()=>{var e;class c{transform(o){return g[o]}}return(e=c).\u0275fac=function(o){return new(o||e)},e.\u0275pipe=t.Yjl({name:"victoryName",type:e,pure:!0,standalone:!0}),c})();var p=n(4978),v=n(2254);let h=(()=>{var e;class c{constructor(o,a){this.route=o,this.newGameService=a,this.victory=this.route.snapshot.queryParamMap.get("victory"),this.victoryTitle=this.victory===r.K.NONE?"Match nul":"Victoire"}replay(){this.newGameService.replay()}}return(e=c).\u0275fac=function(o){return new(o||e)(t.Y36(l.gz),t.Y36(v.y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["lgmj-victory"]],standalone:!0,features:[t.jDz],decls:16,vars:4,consts:[["title","Victoire"],["id","container"],[1,"ion-text-center"],["id","victory-subtitle"],["id","victory-title"],["routerLink","/",1,"ion-margin-horizontal"],["color","secondary",1,"ion-margin-horizontal",3,"click"]],template:function(o,a){1&o&&(t._UZ(0,"lgmj-header",0),t.TgZ(1,"ion-content")(2,"div",1)(3,"ion-note",2)(4,"h2",3),t._uU(5),t.qZA()(),t._UZ(6,"hr"),t.TgZ(7,"ion-text",2)(8,"h1",4),t._uU(9),t.ALo(10,"victoryName"),t.qZA()(),t.TgZ(11,"ion-button",5),t._uU(12,"Retourner \xe0 l'accueil"),t.qZA(),t._UZ(13,"br"),t.TgZ(14,"ion-button",6),t.NdJ("click",function(){return a.replay()}),t._uU(15,"Rejouer"),t.qZA()()()),2&o&&(t.xp6(5),t.Oqu(a.victoryTitle),t.xp6(4),t.Oqu(t.lcZ(10,2,a.victory)))},dependencies:[m.ez,l.rH,i.Pc,i.YG,i.W2,i.uN,i.yW,i.YI,y,p.G],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   #victory-subtitle[_ngcontent-%COMP%]{text-transform:uppercase}#container[_ngcontent-%COMP%]   #victory-title[_ngcontent-%COMP%]{text-transform:uppercase;margin-bottom:50px}#container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{width:15%}@media (prefers-color-scheme: dark){#container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{background-color:#fff}}"]}),c})()}}]);