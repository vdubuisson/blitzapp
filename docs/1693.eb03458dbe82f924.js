"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[1693],{1693:(C,m,n)=>{n.r(m),n.d(m,{NewGameRolesPage:()=>k});var e=n(6242),g=n(6814),c=n(6728),o=n(6685);const d=[o.k.VILLAGEOIS,o.k.LOUP_GAROU,o.k.SOEUR,o.k.FRERE];var h=n(721),R=n(5323),u=n(4978),p=n(8540),y=n(2254),f=n(4482),v=n(8838);function E(s,G){if(1&s){const a=e.EpF();e.TgZ(0,"lgmj-player",7),e.NdJ("roleChange",function(t){const r=e.CHM(a).$implicit,O=e.oxw();return e.KtG(O.changeRole(r.id,t))}),e.qZA()}if(2&s){const a=G.$implicit,l=e.oxw();e.Q6J("player",a)("displayMode",l.playerDisplayMode)("selectableRoles",l.availableRoles())}}let k=(()=>{class s{constructor(a,l){this.newGameService=a,this.cardChoiceService=l,this.players=this.newGameService.currentPlayers,this.playerDisplayMode=h.d.EDIT_ROLE,this.playerTrackBy=p.y,this.canCreate=(0,e.Flj)(()=>this.canCreateGame(this.players())),this.availableRoles=(0,e.Flj)(()=>this.getAvailableRoles(this.players()))}changeRole(a,l){this.newGameService.changeRole(a,l)}createGame(){this.newGameService.createGame()}getAvailableRoles(a){const l=this.cardChoiceService.currentChosenCards,t=new Set(a.map(r=>r.role));let i=Array.from(l().selectedRoles).filter(r=>d.includes(r)||!t.has(r));return l().villageois>a.filter(r=>r.role===o.k.VILLAGEOIS).length&&i.push(o.k.VILLAGEOIS),l().loupGarou>a.filter(r=>r.role===o.k.LOUP_GAROU).length&&i.push(o.k.LOUP_GAROU),t.has(o.k.SOEUR)&&2===a.filter(r=>r.role===o.k.SOEUR).length&&(i=i.filter(r=>r!==o.k.SOEUR)),t.has(o.k.FRERE)&&3===a.filter(r=>r.role===o.k.FRERE).length&&(i=i.filter(r=>r!==o.k.FRERE)),i}canCreateGame(a){let l=a.every(t=>t.role!==o.k.NOT_SELECTED);return l&&a.some(t=>t.role===o.k.SOEUR)&&(l=2===a.filter(t=>t.role===o.k.SOEUR).length),l&&a.some(t=>t.role===o.k.FRERE)&&(l=3===a.filter(t=>t.role===o.k.FRERE).length),l}static#e=this.\u0275fac=function(l){return new(l||s)(e.Y36(y.y),e.Y36(v.I))};static#l=this.\u0275cmp=e.Xpm({type:s,selectors:[["lgmj-new-game-roles"]],standalone:!0,features:[e.jDz],decls:10,vars:3,consts:[["title","Nouvelle partie - R\xf4les"],["id","container"],["id","player-list"],[3,"player","displayMode","selectableRoles","roleChange",4,"ngFor","ngForOf","ngForTrackBy"],["id","submit-block"],["expand","block",1,"ion-margin-horizontal",3,"disabled","click"],["routerLink","/new-game","expand","block","color","danger",1,"ion-margin-horizontal"],[3,"player","displayMode","selectableRoles","roleChange"]],template:function(l,t){1&l&&(e._UZ(0,"lgmj-header",0),e.TgZ(1,"ion-content")(2,"div",1)(3,"ion-list",2),e.YNc(4,E,1,3,"lgmj-player",3),e.qZA(),e.TgZ(5,"div",4)(6,"ion-button",5),e.NdJ("click",function(){return t.createGame()}),e._uU(7," D\xe9marrer "),e.qZA(),e.TgZ(8,"ion-button",6),e._uU(9," Retour "),e.qZA()()()()),2&l&&(e.xp6(4),e.Q6J("ngForOf",t.players())("ngForTrackBy",t.playerTrackBy),e.xp6(2),e.Q6J("disabled",!t.canCreate()))},dependencies:[g.ez,g.sg,c.Pc,c.YG,c.W2,c.q_,c.YI,f.rH,R.l,u.G],styles:["#submit-block[_ngcontent-%COMP%]{position:sticky;bottom:0;background:var(--ion-background-color, #fff);display:flow-root}"]})}return s})()}}]);