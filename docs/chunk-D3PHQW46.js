import{a as ne,b as le,c as ae}from"./chunk-RTFILNCV.js";import"./chunk-WXI33M2S.js";import{a as re}from"./chunk-4OEPV6RE.js";import{a as X,b as $}from"./chunk-CQWWRGMD.js";import{a as H}from"./chunk-E6MEGKZ5.js";import{a as q,b,c as J,d as Y,e as K,f as Q,g as W,h as Z,i as ee,j as te,k as ie,l as oe}from"./chunk-D7RL4FFK.js";import"./chunk-KM76DZZR.js";import{a as e,b as z,c as v}from"./chunk-HE775GVB.js";import{a as w}from"./chunk-IZ4CWXLE.js";import{d as D}from"./chunk-3NH25AHB.js";import"./chunk-4QV3BAJX.js";import{$ as G,Ab as _,Bb as x,Db as V,Eb as B,Gb as u,Hb as d,La as r,Ma as E,Ua as S,Va as y,W as A,Xb as M,Z as I,_ as L,ac as k,db as P,fb as s,gc as j,jb as a,kb as c,lb as O,mb as T,nb as F,ob as U,qb as f,rb as R,zb as C}from"./chunk-NCRUEMZX.js";import"./chunk-BI572DSI.js";import"./chunk-TMC7WMLO.js";var p=function(i){return i.CORE="CORE",i.LUNE="LUNE",i.VILLAGE="VILLAGE",i.PERSONNAGES="PERSONNAGES",i.PACTE="PACTE",i}(p||{});var se={[p.CORE]:[e.CHASSEUR,e.CUPIDON,e.PETITE_FILLE,e.SORCIERE,e.VOLEUR,e.VOYANTE],[p.LUNE]:[e.JOUEUR_FLUTE,e.SALVATEUR,e.ANCIEN,e.IDIOT,e.BOUC],[p.VILLAGE]:[e.CORBEAU,e.LOUP_BLANC],[p.PERSONNAGES]:[e.CHIEN_LOUP,e.SOEUR,e.FRERE,e.ENFANT_SAUVAGE,e.GRAND_MECHANT_LOUP,e.MONTREUR_OURS,e.RENARD,e.ANGE,e.CHEVALIER,e.SECTAIRE,e.PERE_LOUPS],[p.PACTE]:Object.values(e).filter(i=>![e.NOT_SELECTED,e.VILLAGEOIS,e.LOUP_GAROU].includes(i))};var pe={[p.CORE]:"Boite de base",[p.LUNE]:"Extension - Nouvelle lune",[p.VILLAGE]:"Extension - Village",[p.PERSONNAGES]:"Extension - Personnages",[p.PACTE]:"Le Pacte"};var me=(()=>{let n=class n{transform(t){return pe[t]}};n.\u0275fac=function(l){return new(l||n)},n.\u0275pipe=I({name:"gameBoxName",type:n,pure:!0,standalone:!0});let i=n;return i})();function ge(i,n){if(i&1){let m=U();a(0,"label",16),O(1,"img",3),u(2,"playerRoleImage"),u(3,"playerRoleName"),a(4,"span"),C(5),u(6,"playerRoleName"),c(),a(7,"input",17,18),f("change",function(){let o=L(m).$implicit,g=R(2);return G(g.onRoleCheckChange(o))}),c()()}if(i&2){let m=n.$implicit,t=R().$implicit,l=R();s("for",t+"-"+m),r(),s("ngSrc",d(2,7,m))("alt",d(3,9,m)),r(4),_(d(6,11,m)),r(2),s("id",t+"-"+m)("value",m)("checked",l.selectedRoles().has(m))}}function Ce(i,n){if(i&1&&(a(0,"lgmj-accordion-item",13),T(1,14),a(2,"strong"),C(3),u(4,"uppercase"),u(5,"gameBoxName"),c(),F(),P(6,ge,9,13,"label",15),c()),i&2){let m=n.$implicit,t=R();s("noInnerPadding",!0)("headerColor","light"),r(3),_(d(4,5,d(5,7,m))),r(3),s("ngForOf",t.boxContents[m])("ngForTrackBy",t.roleTrackBy)}}var qe=(()=>{let n=class n{constructor(t,l,o,g){this.playerRoleNamePipe=t,this.cardChoiceService=l,this.router=o,this.formBuilder=g,this.boxContents=se,this.boxes=Object.values(p),this.roleTrackBy=re,this.loupGarouRole=e.LOUP_GAROU,this.villageoisRole=e.VILLAGEOIS,this.selectedRoles=S(()=>{let N=this.rolesSelectionChange()?.source?.selected??[];return new Set(N)}),this.rolesSelection=new w(!0),this.rolesSelectionChange=$(this.rolesSelection.changed),this.villageoisCount=y(0),this.loupGarouCount=y(0),this.playersCount=S(()=>this.selectedRoles().size+this.villageoisCount()+this.loupGarouCount()+(this.selectedRoles().has(e.SOEUR)?1:0)+(this.selectedRoles().has(e.FRERE)?2:0)-(this.selectedRoles().has(e.VOLEUR)?2:0)),this.requiredVillageois=S(()=>this.selectedRoles().has(e.VOLEUR)?2:0),Object.values(this.boxContents).forEach(N=>{N.sort((ce,ue)=>this.playerRoleNamePipe.transform(ce).localeCompare(this.playerRoleNamePipe.transform(ue)))}),this.roleCountForm=this.formBuilder.group({loupGarou:[0,b.min(0)],villageois:[0,b.min(this.requiredVillageois())]}),this.listenRoleCountChange("loupGarou"),this.listenRoleCountChange("villageois");let h=this.cardChoiceService.currentChosenCards();this.rolesSelection.setSelection(...h.selectedRoles),this.roleCountForm.patchValue(h)}onRoleCheckChange(t){if(this.rolesSelection.toggle(t),t===e.VOLEUR){let l=this.roleCountForm.value.villageois??0;this.rolesSelection.isSelected(t)?this.roleCountForm.patchValue({villageois:l+2}):this.roleCountForm.patchValue({villageois:Math.max(l-2,0)})}}validateRoles(){let t={selectedRoles:this.selectedRoles(),playersNumber:this.playersCount(),villageois:this.roleCountForm.value.villageois??0,loupGarou:this.roleCountForm.value.loupGarou??0};this.cardChoiceService.setCards(t),this.router.navigate(["new-game"])}deselectAll(){this.rolesSelection.clear(),this.roleCountForm.patchValue({villageois:0,loupGarou:0})}selectInput(t){t.target.select()}listenRoleCountChange(t){this.roleCountForm.get(t)?.valueChanges.pipe(X()).subscribe(l=>{t==="villageois"?this.villageoisCount.set(l??0):this.loupGarouCount.set(l??0)})}};n.\u0275fac=function(l){return new(l||n)(E(v),E(H),E(D),E(te))},n.\u0275cmp=A({type:n,selectors:[["lgmj-roles-choice"]],standalone:!0,features:[V([v]),B],decls:25,vars:26,consts:[[1,"form-container"],[3,"formGroup","submit"],[1,"form-group"],["width","55","height","55",1,"role-img",3,"ngSrc","alt"],["for","loupGarou"],["type","number","formControlName","loupGarou",1,"form-control",3,"min","focus"],["for","villageois"],["type","number","formControlName","villageois",1,"form-control",3,"min","focus"],[3,"multi"],[3,"noInnerPadding","headerColor",4,"ngFor","ngForOf"],[1,"submit-block"],["type","submit",1,"btn","primary",3,"disabled"],["type","button",1,"btn","danger",3,"disabled","click"],[3,"noInnerPadding","headerColor"],["header",""],["class","form-group",3,"for",4,"ngFor","ngForOf","ngForTrackBy"],[1,"form-group",3,"for"],["type","checkbox",1,"form-control",3,"id","value","checked","change"],["checkbox",""]],template:function(l,o){l&1&&(a(0,"div",0)(1,"form",1),f("submit",function(){return o.validateRoles()}),a(2,"div",2),O(3,"img",3),u(4,"playerRoleImage"),u(5,"playerRoleName"),a(6,"label",4),C(7),u(8,"playerRoleName"),c(),a(9,"input",5),f("focus",function(h){return o.selectInput(h)}),c()(),a(10,"div",2),O(11,"img",3),u(12,"playerRoleImage"),u(13,"playerRoleName"),a(14,"label",6),C(15),u(16,"playerRoleName"),c(),a(17,"input",7),f("focus",function(h){return o.selectInput(h)}),c()(),a(18,"cdk-accordion",8),P(19,Ce,7,9,"lgmj-accordion-item",9),c(),a(20,"div",10)(21,"button",11),C(22),c(),a(23,"button",12),f("click",function(){return o.deselectAll()}),C(24," D\xC9S\xC9LECTIONNER TOUT "),c()()()()),l&2&&(r(),s("formGroup",o.roleCountForm),r(2),s("ngSrc",d(4,14,o.loupGarouRole))("alt",d(5,16,o.loupGarouRole)),r(4),_(d(8,18,o.loupGarouRole)),r(2),s("min",0),r(2),s("ngSrc",d(12,20,o.villageoisRole))("alt",d(13,22,o.villageoisRole)),r(4),_(d(16,24,o.villageoisRole)),r(2),s("min",o.requiredVillageois()),r(),s("multi",!0),r(),s("ngForOf",o.boxes),r(2),s("disabled",o.playersCount()<=0||o.roleCountForm.invalid),r(),x(" VALIDER (",o.playersCount()," JOUEURS) "),r(),s("disabled",o.playersCount()<=0))},dependencies:[M,v,z,me,k,ie,K,q,Q,J,Y,ee,oe,W,Z,j,ae,le,ne],styles:[".form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{align-items:center;display:flex;gap:var(--spacing-1);padding:var(--spacing-1)}.form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid var(--light-border-color)}.form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]{margin-left:auto}.form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.form-control[type=number][_ngcontent-%COMP%]{border-radius:var(--input-radius);border:1px solid var(--main-text-color);font-size:var(--font-size-m);height:1rem;padding:var(--spacing-05);text-align:end;width:2rem}.form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.form-control[type=checkbox][_ngcontent-%COMP%]{height:1.25rem;width:1.25rem}"]});let i=n;return i})();export{qe as RolesChoicePage};
