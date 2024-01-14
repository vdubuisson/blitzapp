"use strict";(self.webpackChunkloup_garou_mj=self.webpackChunkloup_garou_mj||[]).push([[1222],{1222:(b,m,s)=>{s.r(m),s.d(m,{RolesChoicePage:()=>T});var e=s(9212),p=s(6814),a=s(9810),g=s(3575),C=s(5480),R=s(4978),E=s(2667),r=function(i){return i.CORE="CORE",i.LUNE="LUNE",i.VILLAGE="VILLAGE",i.PERSONNAGES="PERSONNAGES",i.PACTE="PACTE",i}(r||{}),o=s(6685);const v={[r.CORE]:[o.k.CHASSEUR,o.k.CUPIDON,o.k.PETITE_FILLE,o.k.SORCIERE,o.k.VOLEUR,o.k.VOYANTE],[r.LUNE]:[o.k.JOUEUR_FLUTE,o.k.SALVATEUR,o.k.ANCIEN,o.k.IDIOT,o.k.BOUC],[r.VILLAGE]:[o.k.CORBEAU,o.k.LOUP_BLANC],[r.PERSONNAGES]:[o.k.CHIEN_LOUP,o.k.SOEUR,o.k.FRERE,o.k.ENFANT_SAUVAGE,o.k.GRAND_MECHANT_LOUP,o.k.MONTREUR_OURS,o.k.RENARD,o.k.ANGE,o.k.CHEVALIER],[r.PACTE]:Object.values(o.k).filter(i=>![o.k.NOT_SELECTED,o.k.VILLAGEOIS,o.k.LOUP_GAROU].includes(i))},A={[r.CORE]:"Boite de base",[r.LUNE]:"Extension - Nouvelle lune",[r.VILLAGE]:"Extension - Village",[r.PERSONNAGES]:"Extension - Personnages",[r.PACTE]:"Le Pacte"};let L=(()=>{class i{transform(t){return A[t]}static#e=this.\u0275fac=function(n){return new(n||i)};static#o=this.\u0275pipe=e.Yjl({name:"gameBoxName",type:i,pure:!0,standalone:!0})}return i})();var N=s(8838),u=s(95),O=s(1993),k=s(289);function f(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"ion-item",3)(1,"ion-checkbox",18),e.NdJ("ionChange",function(l){e.CHM(t);const c=e.oxw(2);return e.KtG(c.onRoleCheckChange(l))}),e.qZA(),e.TgZ(2,"ion-thumbnail",4),e._UZ(3,"img",5),e.ALo(4,"playerRoleImage"),e.ALo(5,"playerRoleName"),e.qZA(),e.TgZ(6,"ion-label"),e._uU(7),e.ALo(8,"playerRoleName"),e.qZA()()}if(2&i){const t=d.$implicit,n=e.oxw(2);e.xp6(),e.Q6J("value",t)("checked",n.selectedRoles().has(t)),e.xp6(2),e.Q6J("ngSrc",e.lcZ(4,5,t))("alt",e.lcZ(5,7,t)),e.xp6(4),e.Oqu(e.lcZ(8,9,t))}}function Z(i,d){if(1&i&&(e.TgZ(0,"ion-accordion",14)(1,"ion-item",15)(2,"ion-label")(3,"strong"),e._uU(4),e.ALo(5,"uppercase"),e.ALo(6,"gameBoxName"),e.qZA()()(),e.TgZ(7,"ion-list",16),e.YNc(8,f,9,11,"ion-item",17),e.qZA()()),2&i){const t=d.$implicit,n=e.oxw();e.Q6J("value",t),e.xp6(4),e.Oqu(e.lcZ(5,4,e.lcZ(6,6,t))),e.xp6(4),e.Q6J("ngForOf",n.boxContents[t])("ngForTrackBy",n.roleTrackBy)}}let T=(()=>{class i{constructor(t,n,l,c){this.playerRoleNamePipe=t,this.cardChoiceService=n,this.router=l,this.formBuilder=c,this.boxContents=v,this.boxes=Object.values(r),this.roleTrackBy=E.A,this.loupGarouRole=o.k.LOUP_GAROU,this.villageoisRole=o.k.VILLAGEOIS,this.selectedRoles=(0,e.tdS)(new Set),this.villageoisCount=(0,e.tdS)(0),this.loupGarouCount=(0,e.tdS)(0),this.playersCount=(0,e.Flj)(()=>this.selectedRoles().size+this.villageoisCount()+this.loupGarouCount()+(this.selectedRoles().has(o.k.SOEUR)?1:0)+(this.selectedRoles().has(o.k.FRERE)?2:0)-(this.selectedRoles().has(o.k.VOLEUR)?2:0)),this.requiredVillageois=(0,e.Flj)(()=>this.selectedRoles().has(o.k.VOLEUR)?2:0),Object.values(this.boxContents).forEach(_=>{_.sort((U,y)=>this.playerRoleNamePipe.transform(U).localeCompare(this.playerRoleNamePipe.transform(y)))}),this.roleCountForm=this.formBuilder.group({loupGarou:[0,u.kI.min(0)],villageois:[0,u.kI.min(this.requiredVillageois())]}),this.listenRoleCountChange("loupGarou"),this.listenRoleCountChange("villageois");const h=this.cardChoiceService.currentChosenCards();this.selectedRoles.set(h.selectedRoles),this.roleCountForm.patchValue(h)}onRoleCheckChange(t){const n=t.detail;n.checked?(this.selectedRoles.update(l=>(l.add(n.value),new Set(l))),n.value===o.k.VOLEUR&&this.roleCountForm.patchValue({villageois:(this.roleCountForm.value.villageois??0)+2})):(this.selectedRoles.update(l=>(l.delete(n.value),new Set(l))),n.value===o.k.VOLEUR&&this.roleCountForm.patchValue({villageois:Math.max((this.roleCountForm.value.villageois??0)-2,0)}))}validateRoles(){const t={selectedRoles:this.selectedRoles(),playersNumber:this.playersCount(),villageois:this.roleCountForm.value.villageois??0,loupGarou:this.roleCountForm.value.loupGarou??0};this.cardChoiceService.setCards(t),this.router.navigate(["new-game"])}deselectAll(){const t=new Set(this.selectedRoles());t.clear(),this.selectedRoles.set(t),this.roleCountForm.patchValue({villageois:0,loupGarou:0})}selectInput(t){t.detail.target.select()}listenRoleCountChange(t){this.roleCountForm.get(t)?.valueChanges.pipe((0,O.sL)()).subscribe(n=>{"villageois"===t?this.villageoisCount.set(n??0):this.loupGarouCount.set(n??0)})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(g.L),e.Y36(N.I),e.Y36(k.F0),e.Y36(u.qu))};static#o=this.\u0275cmp=e.Xpm({type:i,selectors:[["lgmj-roles-choice"]],standalone:!0,features:[e._Bn([g.L]),e.jDz],decls:29,vars:26,consts:[["title","Choix des r\xf4les \xe0 jouer"],[3,"formGroup","submit"],["id","inputs"],["lines","full"],["slot","start"],["width","250","height","250",1,"role-img",3,"ngSrc","alt"],["slot","end","formControlName","loupGarou","type","number",1,"role-count",3,"min","ionFocus"],["lines","none"],["slot","end","formControlName","villageois","type","number",1,"role-count",3,"min","ionFocus"],[3,"multiple"],[3,"value",4,"ngFor","ngForOf"],["id","submit-block"],["expand","block","color","primary","type","submit",1,"ion-margin-horizontal",3,"disabled"],["expand","block","color","danger","type","button",1,"ion-margin-horizontal",3,"disabled","click"],[3,"value"],["slot","header","color","light"],["slot","content"],["lines","full",4,"ngFor","ngForOf","ngForTrackBy"],["slot","end",3,"value","checked","ionChange"]],template:function(n,l){1&n&&(e._UZ(0,"lgmj-header",0),e.TgZ(1,"ion-content")(2,"form",1),e.NdJ("submit",function(){return l.validateRoles()}),e.TgZ(3,"ion-list",2)(4,"ion-item",3)(5,"ion-thumbnail",4),e._UZ(6,"img",5),e.ALo(7,"playerRoleImage"),e.ALo(8,"playerRoleName"),e.qZA(),e.TgZ(9,"ion-label"),e._uU(10),e.ALo(11,"playerRoleName"),e.qZA(),e.TgZ(12,"ion-input",6),e.NdJ("ionFocus",function(h){return l.selectInput(h)}),e.qZA()(),e.TgZ(13,"ion-item",7)(14,"ion-thumbnail",4),e._UZ(15,"img",5),e.ALo(16,"playerRoleImage"),e.ALo(17,"playerRoleName"),e.qZA(),e.TgZ(18,"ion-label"),e._uU(19),e.ALo(20,"playerRoleName"),e.qZA(),e.TgZ(21,"ion-input",8),e.NdJ("ionFocus",function(h){return l.selectInput(h)}),e.qZA()()(),e.TgZ(22,"ion-accordion-group",9),e.YNc(23,Z,9,8,"ion-accordion",10),e.qZA(),e.TgZ(24,"div",11)(25,"ion-button",12),e._uU(26),e.qZA(),e.TgZ(27,"ion-button",13),e.NdJ("click",function(){return l.deselectAll()}),e._uU(28," D\xe9s\xe9lectionner tout "),e.qZA()()()()),2&n&&(e.xp6(2),e.Q6J("formGroup",l.roleCountForm),e.xp6(4),e.Q6J("ngSrc",e.lcZ(7,14,l.loupGarouRole))("alt",e.lcZ(8,16,l.loupGarouRole)),e.xp6(4),e.Oqu(e.lcZ(11,18,l.loupGarouRole)),e.xp6(2),e.Q6J("min",0),e.xp6(3),e.Q6J("ngSrc",e.lcZ(16,20,l.villageoisRole))("alt",e.lcZ(17,22,l.villageoisRole)),e.xp6(4),e.Oqu(e.lcZ(20,24,l.villageoisRole)),e.xp6(2),e.Q6J("min",l.requiredVillageois()),e.xp6(),e.Q6J("multiple",!0),e.xp6(),e.Q6J("ngForOf",l.boxes),e.xp6(2),e.Q6J("disabled",l.playersCount()<=0||l.roleCountForm.invalid),e.xp6(),e.hij(" Valider (",l.playersCount()," joueurs) "),e.xp6(),e.Q6J("disabled",l.playersCount()<=0))},dependencies:[p.ez,p.sg,p.gd,a.Pc,a.We,a.eh,a.YG,a.nz,a.W2,a.pK,a.Ie,a.Q$,a.q_,a.Bs,a.w,a.as,a.yf,g.L,C.$,L,R.G,u.u5,u._Y,u.JJ,u.JL,u.UX,u.sg,u.u,p.Zd],styles:["#submit-block[_ngcontent-%COMP%]{position:sticky;bottom:0;background:var(--ion-background-color, #fff);display:flow-root}ion-input.role-count[_ngcontent-%COMP%]{border:1px solid var(--ion-color-dark, #222428);border-radius:5px;max-width:2.5rem;text-align:right;--padding-end: var(--padding-start)}ion-list#inputs[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{width:auto}"]})}return i})()}}]);