"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[1222],{1222:(F,m,s)=>{s.r(m),s.d(m,{RolesChoicePage:()=>T});var e=s(6242),p=s(6814),a=s(6728),g=s(3575),R=s(5480),C=s(4978),E=s(2667),r=function(i){return i.CORE="CORE",i.LUNE="LUNE",i.VILLAGE="VILLAGE",i.PERSONNAGES="PERSONNAGES",i.PACTE="PACTE",i}(r||{}),l=s(6685);const v={[r.CORE]:[l.k.CHASSEUR,l.k.CUPIDON,l.k.PETITE_FILLE,l.k.SORCIERE,l.k.VOLEUR,l.k.VOYANTE],[r.LUNE]:[l.k.JOUEUR_FLUTE,l.k.SALVATEUR],[r.VILLAGE]:[l.k.CORBEAU,l.k.LOUP_BLANC],[r.PERSONNAGES]:[l.k.CHIEN_LOUP,l.k.SOEUR,l.k.FRERE,l.k.ENFANT_SAUVAGE,l.k.GRAND_MECHANT_LOUP,l.k.MONTREUR_OURS,l.k.RENARD,l.k.ANGE],[r.PACTE]:Object.values(l.k).filter(i=>![l.k.NOT_SELECTED,l.k.VILLAGEOIS,l.k.LOUP_GAROU].includes(i))},A={[r.CORE]:"Boite de base",[r.LUNE]:"Extension - Nouvelle lune",[r.VILLAGE]:"Extension - Village",[r.PERSONNAGES]:"Extension - Personnages",[r.PACTE]:"Le Pacte"};let L=(()=>{class i{transform(t){return A[t]}static#e=this.\u0275fac=function(n){return new(n||i)};static#o=this.\u0275pipe=e.Yjl({name:"gameBoxName",type:i,pure:!0,standalone:!0})}return i})();var N=s(8838),u=s(95),f=s(1993),O=s(4482);function k(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"ion-item",2)(1,"ion-checkbox",17),e.NdJ("ionChange",function(o){e.CHM(t);const c=e.oxw(2);return e.KtG(c.onRoleCheckChange(o))}),e.qZA(),e.TgZ(2,"ion-thumbnail",3),e._UZ(3,"img",4),e.ALo(4,"playerRoleImage"),e.ALo(5,"playerRoleName"),e.qZA(),e.TgZ(6,"ion-label"),e._uU(7),e.ALo(8,"playerRoleName"),e.qZA()()}if(2&i){const t=d.$implicit,n=e.oxw(2);e.xp6(1),e.Q6J("value",t)("checked",n.selectedRoles().has(t)),e.xp6(2),e.Q6J("ngSrc",e.lcZ(4,5,t))("alt",e.lcZ(5,7,t)),e.xp6(4),e.Oqu(e.lcZ(8,9,t))}}function Z(i,d){if(1&i&&(e.TgZ(0,"ion-accordion",13)(1,"ion-item",14)(2,"ion-label")(3,"strong"),e._uU(4),e.ALo(5,"uppercase"),e.ALo(6,"gameBoxName"),e.qZA()()(),e.TgZ(7,"ion-list",15),e.YNc(8,k,9,11,"ion-item",16),e.qZA()()),2&i){const t=d.$implicit,n=e.oxw();e.Q6J("value",t),e.xp6(4),e.Oqu(e.lcZ(5,4,e.lcZ(6,6,t))),e.xp6(4),e.Q6J("ngForOf",n.boxContents[t])("ngForTrackBy",n.roleTrackBy)}}let T=(()=>{class i{constructor(t,n,o,c){this.playerRoleNamePipe=t,this.cardChoiceService=n,this.router=o,this.formBuilder=c,this.boxContents=v,this.boxes=Object.values(r),this.roleTrackBy=E.A,this.loupGarouRole=l.k.LOUP_GAROU,this.villageoisRole=l.k.VILLAGEOIS,this.selectedRoles=(0,e.tdS)(new Set),this.villageoisCount=(0,e.tdS)(0),this.loupGarouCount=(0,e.tdS)(0),this.playersCount=(0,e.Flj)(()=>this.selectedRoles().size+this.villageoisCount()+this.loupGarouCount()+(this.selectedRoles().has(l.k.SOEUR)?1:0)+(this.selectedRoles().has(l.k.FRERE)?2:0)-(this.selectedRoles().has(l.k.VOLEUR)?2:0)),this.requiredVillageois=(0,e.Flj)(()=>this.selectedRoles().has(l.k.VOLEUR)?2:0),Object.values(this.boxContents).forEach(y=>{y.sort((U,_)=>this.playerRoleNamePipe.transform(U).localeCompare(this.playerRoleNamePipe.transform(_)))}),this.roleCountForm=this.formBuilder.group({loupGarou:[0,u.kI.min(0)],villageois:[0,u.kI.min(this.requiredVillageois())]}),this.listenRoleCountChange("loupGarou"),this.listenRoleCountChange("villageois");const h=this.cardChoiceService.currentChosenCards();this.selectedRoles.set(h.selectedRoles),this.roleCountForm.patchValue(h)}onRoleCheckChange(t){const n=t.detail;n.checked?(this.selectedRoles.update(o=>(o.add(n.value),new Set(o))),n.value===l.k.VOLEUR&&this.roleCountForm.patchValue({villageois:(this.roleCountForm.value.villageois??0)+2})):(this.selectedRoles.update(o=>(o.delete(n.value),new Set(o))),n.value===l.k.VOLEUR&&this.roleCountForm.patchValue({villageois:Math.max((this.roleCountForm.value.villageois??0)-2,0)}))}validateRoles(){const t={selectedRoles:this.selectedRoles(),playersNumber:this.playersCount(),villageois:this.roleCountForm.value.villageois??0,loupGarou:this.roleCountForm.value.loupGarou??0};this.cardChoiceService.setCards(t),this.router.navigate(["new-game"])}deselectAll(){const t=new Set(this.selectedRoles());t.clear(),this.selectedRoles.set(t),this.roleCountForm.patchValue({villageois:0,loupGarou:0})}selectInput(t){t.detail.target.select()}listenRoleCountChange(t){this.roleCountForm.get(t)?.valueChanges.pipe((0,f.sL)()).subscribe(n=>{"villageois"===t?this.villageoisCount.set(n??0):this.loupGarouCount.set(n??0)})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(g.L),e.Y36(N.I),e.Y36(O.F0),e.Y36(u.qu))};static#o=this.\u0275cmp=e.Xpm({type:i,selectors:[["lgmj-roles-choice"]],standalone:!0,features:[e._Bn([g.L]),e.jDz],decls:29,vars:26,consts:[["title","Choix des r\xf4les \xe0 jouer"],[3,"formGroup","submit"],["lines","full"],["slot","start"],["width","250","height","250",1,"role-img",3,"ngSrc","alt"],["slot","end","formControlName","loupGarou","type","number",1,"role-count",3,"min","ionFocus"],["lines","none"],["slot","end","formControlName","villageois","type","number",1,"role-count",3,"min","ionFocus"],[3,"multiple"],[3,"value",4,"ngFor","ngForOf"],["id","submit-block"],["expand","block","color","primary","type","submit",1,"ion-margin-horizontal",3,"disabled"],["expand","block","color","danger","type","button",1,"ion-margin-horizontal",3,"disabled","click"],[3,"value"],["slot","header","color","light"],["slot","content"],["lines","full",4,"ngFor","ngForOf","ngForTrackBy"],["slot","end",3,"value","checked","ionChange"]],template:function(n,o){1&n&&(e._UZ(0,"lgmj-header",0),e.TgZ(1,"ion-content")(2,"form",1),e.NdJ("submit",function(){return o.validateRoles()}),e.TgZ(3,"ion-list")(4,"ion-item",2)(5,"ion-thumbnail",3),e._UZ(6,"img",4),e.ALo(7,"playerRoleImage"),e.ALo(8,"playerRoleName"),e.qZA(),e.TgZ(9,"ion-label"),e._uU(10),e.ALo(11,"playerRoleName"),e.qZA(),e.TgZ(12,"ion-input",5),e.NdJ("ionFocus",function(h){return o.selectInput(h)}),e.qZA()(),e.TgZ(13,"ion-item",6)(14,"ion-thumbnail",3),e._UZ(15,"img",4),e.ALo(16,"playerRoleImage"),e.ALo(17,"playerRoleName"),e.qZA(),e.TgZ(18,"ion-label"),e._uU(19),e.ALo(20,"playerRoleName"),e.qZA(),e.TgZ(21,"ion-input",7),e.NdJ("ionFocus",function(h){return o.selectInput(h)}),e.qZA()()(),e.TgZ(22,"ion-accordion-group",8),e.YNc(23,Z,9,8,"ion-accordion",9),e.qZA(),e.TgZ(24,"div",10)(25,"ion-button",11),e._uU(26),e.qZA(),e.TgZ(27,"ion-button",12),e.NdJ("click",function(){return o.deselectAll()}),e._uU(28," D\xe9s\xe9lectionner tout "),e.qZA()()()()),2&n&&(e.xp6(2),e.Q6J("formGroup",o.roleCountForm),e.xp6(4),e.Q6J("ngSrc",e.lcZ(7,14,o.loupGarouRole))("alt",e.lcZ(8,16,o.loupGarouRole)),e.xp6(4),e.Oqu(e.lcZ(11,18,o.loupGarouRole)),e.xp6(2),e.Q6J("min",0),e.xp6(3),e.Q6J("ngSrc",e.lcZ(16,20,o.villageoisRole))("alt",e.lcZ(17,22,o.villageoisRole)),e.xp6(4),e.Oqu(e.lcZ(20,24,o.villageoisRole)),e.xp6(2),e.Q6J("min",o.requiredVillageois()),e.xp6(1),e.Q6J("multiple",!0),e.xp6(1),e.Q6J("ngForOf",o.boxes),e.xp6(2),e.Q6J("disabled",o.playersCount()<=0||o.roleCountForm.invalid),e.xp6(1),e.hij(" Valider (",o.playersCount()," joueurs) "),e.xp6(1),e.Q6J("disabled",o.playersCount()<=0))},dependencies:[p.ez,p.sg,p.gd,a.Pc,a.We,a.eh,a.YG,a.nz,a.W2,a.pK,a.Ie,a.Q$,a.q_,a.Bs,a.w,a.as,a.yf,g.L,R.$,L,C.G,u.u5,u._Y,u.JJ,u.JL,u.UX,u.sg,u.u,p.Zd],styles:["#submit-block[_ngcontent-%COMP%]{position:sticky;bottom:0;background:var(--ion-background-color, #fff);display:flow-root}ion-input.role-count[_ngcontent-%COMP%]{border:1px solid var(--ion-color-dark, #222428);border-radius:5px;max-width:2.5rem;text-align:right;--padding-end: var(--padding-start)}"]})}return i})()}}]);