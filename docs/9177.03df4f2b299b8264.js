"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[9177],{9177:(L,m,s)=>{s.r(m),s.d(m,{RolesChoicePage:()=>v});var h=s(6814),a=s(5548),d=s(5045),E=s(5480),g=s(4978),R=s(2667),l=(()=>((l=l||{}).CORE="CORE",l.LUNE="LUNE",l.VILLAGE="VILLAGE",l.PERSONNAGES="PERSONNAGES",l.PACTE="PACTE",l))(),n=s(6685);const p={[l.CORE]:[n.k.CHASSEUR,n.k.CUPIDON,n.k.LOUP_GAROU,n.k.PETITE_FILLE,n.k.VILLAGEOIS,n.k.SORCIERE,n.k.VOYANTE],[l.LUNE]:[n.k.JOUEUR_FLUTE,n.k.SALVATEUR],[l.VILLAGE]:[n.k.CORBEAU],[l.PERSONNAGES]:[n.k.CHIEN_LOUP,n.k.SOEUR,n.k.ENFANT_SAUVAGE,n.k.GRAND_MECHANT_LOUP,n.k.MONTREUR_OURS,n.k.RENARD],[l.PACTE]:Object.values(n.k).filter(t=>t!==n.k.NOT_SELECTED)};var e=s(6689);let C=(()=>{class t{transform(o){switch(o){case l.CORE:return"Boite de base";case l.LUNE:return"Extension - Nouvelle lune";case l.VILLAGE:return"Extension - Village";case l.PERSONNAGES:return"Extension - Personnages";case l.PACTE:return"Le Pacte"}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275pipe=e.Yjl({name:"gameBoxName",type:t,pure:!0,standalone:!0}),t})();var A=s(1821),N=s(439);function O(t,c){if(1&t){const o=e.EpF();e.TgZ(0,"ion-item",10)(1,"ion-checkbox",11),e.NdJ("ionChange",function(r){e.CHM(o);const u=e.oxw(2);return e.KtG(u.onRoleCheckChange(r))}),e.qZA(),e.TgZ(2,"ion-thumbnail",12),e._UZ(3,"img",13),e.ALo(4,"playerRoleImage"),e.ALo(5,"playerRoleName"),e.qZA(),e.TgZ(6,"ion-label"),e._uU(7),e.ALo(8,"playerRoleName"),e.qZA()()}if(2&t){const o=c.$implicit,i=e.oxw(2);e.xp6(1),e.Q6J("value",o)("checked",i.selectedRoles.has(o)),e.xp6(2),e.Q6J("src",e.lcZ(4,5,o),e.LSH)("alt",e.lcZ(5,7,o)),e.xp6(4),e.Oqu(e.lcZ(8,9,o))}}function k(t,c){if(1&t&&(e.TgZ(0,"ion-accordion",6)(1,"ion-item",7)(2,"ion-label")(3,"strong"),e._uU(4),e.ALo(5,"uppercase"),e.ALo(6,"gameBoxName"),e.qZA()()(),e.TgZ(7,"ion-list",8),e.YNc(8,O,9,11,"ion-item",9),e.qZA()()),2&t){const o=c.$implicit,i=e.oxw();e.Q6J("value",o),e.xp6(4),e.Oqu(e.lcZ(5,3,e.lcZ(6,5,o))),e.xp6(4),e.Q6J("ngForOf",i.boxContents[o])}}let v=(()=>{class t{constructor(o,i,r){this.playerRoleNamePipe=o,this.roleChoiceService=i,this.router=r,this.boxContents=p,this.boxes=Object.values(l),this.selectedRoles=new Set,this.roleTrackBy=R.A,Object.values(this.boxContents).forEach(u=>{u.sort((P,f)=>this.playerRoleNamePipe.transform(P).localeCompare(this.playerRoleNamePipe.transform(f)))}),this.roleChoiceService.getCurrentChosenRoles().subscribe(u=>this.selectedRoles=u)}onRoleCheckChange(o){const i=o.detail;i.checked?this.selectedRoles.add(i.value):this.selectedRoles.delete(i.value)}validateRoles(){this.roleChoiceService.setRoles(this.selectedRoles),this.router.navigate(["new-game"])}deselectAll(){this.selectedRoles.clear()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(d.L),e.Y36(A.h),e.Y36(N.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["lgmj-roles-choice"]],standalone:!0,features:[e._Bn([d.L]),e.jDz],decls:9,vars:5,consts:[["title","Choix des r\xf4les \xe0 jouer"],[3,"multiple"],[3,"value",4,"ngFor","ngForOf"],["id","submit-block"],["expand","block","color","success",1,"ion-margin-horizontal",3,"disabled","click"],["expand","block","color","danger",1,"ion-margin-horizontal",3,"disabled","click"],[3,"value"],["slot","header","color","light"],["slot","content"],["lines","full",4,"ngFor","ngForOf"],["lines","full"],["slot","start",3,"value","checked","ionChange"],["slot","start"],[3,"src","alt"]],template:function(o,i){1&o&&(e._UZ(0,"lgmj-header",0),e.TgZ(1,"ion-content")(2,"ion-accordion-group",1),e.YNc(3,k,9,7,"ion-accordion",2),e.qZA(),e.TgZ(4,"div",3)(5,"ion-button",4),e.NdJ("click",function(){return i.validateRoles()}),e._uU(6),e.qZA(),e.TgZ(7,"ion-button",5),e.NdJ("click",function(){return i.deselectAll()}),e._uU(8," D\xe9s\xe9lectionner tout "),e.qZA()()()),2&o&&(e.xp6(2),e.Q6J("multiple",!0),e.xp6(1),e.Q6J("ngForOf",i.boxes),e.xp6(2),e.Q6J("disabled",0===i.selectedRoles.size),e.xp6(1),e.hij(" Valider (",i.selectedRoles.size,") "),e.xp6(1),e.Q6J("disabled",0===i.selectedRoles.size))},dependencies:[h.ez,h.sg,h.gd,a.Pc,a.We,a.eh,a.YG,a.nz,a.W2,a.Ie,a.Q$,a.q_,a.Bs,a.w,d.L,E.$,C,g.G],styles:["#submit-block[_ngcontent-%COMP%]{position:sticky;bottom:0;background:var(--ion-background-color, #fff);display:flow-root}"]}),t})()}}]);