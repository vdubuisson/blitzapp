import{a as ne}from"./chunk-4OEPV6RE.js";import{a as te,b as ie}from"./chunk-O3OTCEIK.js";import{a as oe,d as ae}from"./chunk-UB4IGBIS.js";import{a as N,b as ee,c as C}from"./chunk-XDFZ7HJY.js";import{a as l}from"./chunk-GZWRC3NF.js";import{$ as h,A as r,B as A,D as R,E as _,F as i,G as s,H as c,I as y,J as x,K as I,L as D,M as O,N as v,O as m,Oa as z,Qa as K,S as k,T as g,U as u,X as b,Xa as $,Y as B,Za as q,_ as d,aa as L,ba as M,ca as U,da as V,ea as H,eb as J,fa as G,fb as Q,ga as Y,ia as W,ib as X,jb as Z,ka as j,p as F,s as w,t as T,u as S}from"./chunk-OREDGVVK.js";var E=function(e){return e[e.DEFAULT=0]="DEFAULT",e[e.SELECT_SINGLE=1]="SELECT_SINGLE",e[e.SELECT_MULTI=2]="SELECT_MULTI",e[e.EDIT_ROLE=3]="EDIT_ROLE",e}(E||{});var P=[l.WOLF_TARGET,l.RUSTY_SWORD,l.PROTECTED,l.RAVEN,l.NO_POWER,l.HEALTH_POTION,l.DEATH_POTION,l.FIRST_DEATH,l.CHARMED,l.CHILD_MODEL,l.NO_VOTE,l.CAPTAIN,l.LOVER,l.BLUE_TEAM,l.RED_TEAM];function re(e,n){e&1&&y(0,"ion-icon",6)}function pe(e,n){if(e&1&&(s(0,"ion-thumbnail",7),y(1,"img",8),d(2,"playerRoleImage"),d(3,"playerRoleName"),c()),e&2){let t=m();r(),i("ngSrc",h(2,2,t.player.role))("alt",h(3,4,t.player.role))}}function se(e,n){e&1&&D(0)}function ce(e,n){if(e&1){let t=O();s(0,"ion-checkbox",12),v("ionChange",function(o){T(t);let a=m(2);return S(a.onCheckedChange(o))}),c()}if(e&2){let t=m(2);i("checked",t.checked)}}function me(e,n){if(e&1&&y(0,"ion-radio",13),e&2){let t=m(2);i("value",t.player.id)}}function _e(e,n){if(e&1&&(x(0,9),_(1,ce,1,1,"ion-checkbox",10)(2,me,1,1,"ion-radio",11),I()),e&2){let t=m();i("ngSwitch",t.displayMode),r(),i("ngSwitchCase",t.playerDisplayModeEnum.SELECT_MULTI),r(),i("ngSwitchCase",t.playerDisplayModeEnum.SELECT_SINGLE)}}function de(e,n){if(e&1&&(s(0,"ion-select-option",18),g(1),d(2,"playerRoleName"),c()),e&2){let t=n.$implicit;i("value",t),r(),u(h(2,2,t))}}function he(e,n){if(e&1){let t=O();s(0,"ion-select",16),v("ionChange",function(o){T(t);let a=m(2);return S(a.onRoleChange(o))}),_(1,de,3,4,"ion-select-option",17),c()}if(e&2){let t=m(2);i("legacy",!0)("interfaceOptions",t.customInterfaceOptions)("value",t.player.role),r(),i("ngForOf",t.sortedRoles)("ngForTrackBy",t.roleTrackBy)}}function fe(e,n){if(e&1&&(s(0,"span",21),g(1),d(2,"playerStatusIcon"),c()),e&2){let t=n.$implicit;r(),u(h(2,1,t))}}function ge(e,n){if(e&1&&(s(0,"div",19),_(1,fe,3,3,"span",20),c()),e&2){let t=m(2);r(),i("ngForOf",t.sortedStatuses)("ngForTrackBy",t.statusTrackBy)}}function ue(e,n){if(e&1&&(x(0,9),_(1,he,2,5,"ion-select",14)(2,ge,2,2,"div",15),I()),e&2){let t=m();i("ngSwitch",t.displayMode),r(),i("ngSwitchCase",t.playerDisplayModeEnum.EDIT_ROLE)}}var Ve=(()=>{let n=class n{set selectableRoles(p){let o=[...p];!this.noSelfRole&&this.player.role!==N.NOT_SELECTED&&!o.includes(this.player.role)&&o.push(this.player.role),o.sort((a,f)=>this.playerRoleNamePipe.transform(a).localeCompare(this.playerRoleNamePipe.transform(f))),this.sortedRoles=o}constructor(p){this.playerRoleNamePipe=p,this.displayMode=E.DEFAULT,this.disabled=!1,this.checked=!1,this.noSelfRole=!1,this.checkedChange=new R,this.roleChange=new R,this.roleTrackBy=ne,this.statusTrackBy=ie,this.playerDisplayModeEnum=E,this.playerRoleEnum=N,this.sortedRoles=[],this.customInterfaceOptions={header:"CHOISIR UN R\xD4LE",buttons:[]},this.sortedStatuses=[],oe({skull:ae})}ngOnChanges(p){if(p.player){let o=Array.from(this.player.statuses);o.sort((a,f)=>P.indexOf(a)-P.indexOf(f)),this.sortedStatuses=o}}onCheckedChange(p){this.checkedChange.emit(p.detail.checked)}onRoleChange(p){this.roleChange.emit(p.detail.value)}};n.\u0275fac=function(o){return new(o||n)(A(C))},n.\u0275cmp=F({type:n,selectors:[["lgmj-player"]],inputs:{player:"player",displayMode:"displayMode",disabled:"disabled",checked:"checked",noSelfRole:"noSelfRole",selectableRoles:"selectableRoles"},outputs:{checkedChange:"checkedChange",roleChange:"roleChange"},standalone:!0,features:[b([C]),w,B],decls:14,vars:10,consts:[[3,"disabled","color"],["slot","start","name","skull",4,"ngIf","ngIfElse"],["slot","start",4,"ngIf"],[4,"ngTemplateOutlet"],["formElement",""],["endElement",""],["slot","start","name","skull"],["slot","start"],["width","250","height","250",1,"role-img",3,"ngSrc","alt"],[3,"ngSwitch"],["slot","start",3,"checked","ionChange",4,"ngSwitchCase"],["slot","start",3,"value",4,"ngSwitchCase"],["slot","start",3,"checked","ionChange"],["slot","start",3,"value"],["placeholder","R\xF4le","interface","action-sheet","cancelText","Annuler",3,"legacy","interfaceOptions","value","ionChange",4,"ngSwitchCase"],["slot","end",4,"ngSwitchDefault"],["placeholder","R\xF4le","interface","action-sheet","cancelText","Annuler",3,"legacy","interfaceOptions","value","ionChange"],[3,"value",4,"ngFor","ngForOf","ngForTrackBy"],[3,"value"],["slot","end"],["class","status-icon",4,"ngFor","ngForOf","ngForTrackBy"],[1,"status-icon"]],template:function(o,a){if(o&1&&(s(0,"ion-item",0),_(1,re,1,0,"ion-icon",1)(2,pe,4,6,"ion-thumbnail",2),s(3,"ion-label")(4,"h2"),g(5),c(),s(6,"p"),g(7),d(8,"playerRoleName"),c()(),_(9,se,1,0,"ng-container",3),c(),_(10,_e,3,3,"ng-template",null,4,L)(12,ue,3,2,"ng-template",null,5,L)),o&2){let f=k(11),le=k(13);i("disabled",a.player.isDead||a.disabled)("color",a.player.isDead?"medium":""),r(),i("ngIf",a.player.isDead)("ngIfElse",f),r(),i("ngIf",a.player.role!==a.playerRoleEnum.NOT_SELECTED),r(3),u(a.player.name),r(2),u(h(8,8,a.player.role)),r(2),i("ngTemplateOutlet",le)}},dependencies:[W,M,U,Y,V,H,G,C,ee,te,j,z,Q,q,K,J,X,Z,$],styles:[".status-icon[_ngcontent-%COMP%]{font-size:20px}"]});let e=n;return e})();export{E as a,Ve as b};
