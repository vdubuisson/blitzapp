import{a as D,b as ae,c as se}from"./chunk-XFXUT5QN.js";import{a as le}from"./chunk-6NS7NPQG.js";import{a as re}from"./chunk-4OEPV6RE.js";import{a as ne}from"./chunk-CQWWRGMD.js";import{k as oe}from"./chunk-D7RL4FFK.js";import{a as N,b as Z,c as u}from"./chunk-HE775GVB.js";import{c as ee,g as te,m as ie}from"./chunk-IZ4CWXLE.js";import{$ as E,$b as J,Ab as O,D as F,Db as Q,Eb as Y,Gb as g,Hb as C,La as a,Ma as v,R as P,S as h,Ua as R,V as f,Va as U,W as B,Xa as V,Xb as q,Yb as K,Zb as H,_ as S,_b as $,bc as W,db as y,fb as r,gb as A,gc as X,ib as I,jb as p,kb as d,lb as _,mb as b,nb as M,ob as w,qb as L,rb as s,vb as z,wb as G,xb as j,zb as x}from"./chunk-NCRUEMZX.js";var m=function(e){return e[e.DEFAULT=0]="DEFAULT",e[e.SELECT_SINGLE=1]="SELECT_SINGLE",e[e.SELECT_MULTI=2]="SELECT_MULTI",e[e.EDIT_ROLE=3]="EDIT_ROLE",e}(m||{});var ce=["checkbox"];function pe(e,o){if(e&1&&_(0,"fa-icon",1),e&2){let t=s();r("icon",t.deadIcon)}}function de(e,o){if(e&1){let t=w();_(0,"label",9),p(1,"input",10,11),L("change",function(){S(t);let i=s(2);return E(i.onCheckedChange())})("click",function(){S(t);let i=s(2);return E(i.onCheckboxClick())}),d()}if(e&2){let t=s(2);r("for","input-"+t.player().id),a(),r("id","input-"+t.player().id)("type",t.displayMode()===t.playerDisplayModeEnum.SELECT_SINGLE?"radio":"checkbox")("checked",t.checked)("disabled",t.disabled)}}function me(e,o){if(e&1&&y(0,de,3,5),e&2){let t=s();I(0,t.displayMode()===t.playerDisplayModeEnum.SELECT_MULTI||t.displayMode()===t.playerDisplayModeEnum.SELECT_SINGLE?0:-1)}}function he(e,o){if(e&1&&(_(0,"img",12),g(1,"playerRoleImage"),g(2,"playerRoleName")),e&2){let t=s();r("ngSrc",C(1,2,t.displayedRole()))("alt",C(2,4,t.displayedRole()))}}function fe(e,o){if(e&1){let t=w();b(0),p(1,"div",13),L("click",function(){S(t);let i=s();return E(i.openSelectRoleOverlay())}),d(),_(2,"fa-icon",14),M()}if(e&2){let t=s();a(2),r("icon",t.selectIcon)}}function ye(e,o){if(e&1&&(p(0,"span",16),x(1),g(2,"playerStatusIcon"),d()),e&2){let t=o.$implicit;a(),O(C(2,1,t))}}function _e(e,o){if(e&1&&(p(0,"div"),y(1,ye,3,3,"span",15),d()),e&2){let t=s();a(),r("ngForOf",t.sortedStatuses())("ngForTrackBy",t.statusTrackBy)}}var Ye=(()=>{let o=class o{constructor(c,i,n){this.playerRoleNamePipe=c,this.selectOverlayService=i,this.destroyRef=n,this.player=h.required(),this.displayMode=h(m.DEFAULT),this.disabled=!1,this.checked=!1,this.noSelfRole=h(!1),this.selectableRoles=h([]),this.checkedChange=new P,this.roleChange=new P,this.roleTrackBy=re,this.statusTrackBy=se,this.playerDisplayModeEnum=m,this.playerRoleEnum=N,this.sortedRoles=R(()=>{let l=[...this.selectableRoles()];return!this.noSelfRole()&&this.player().role!==N.NOT_SELECTED&&!l.includes(this.player().role)&&l.push(this.player().role),l.sort((k,T)=>this.playerRoleNamePipe.transform(k).localeCompare(this.playerRoleNamePipe.transform(T))),l}),this.sortedStatuses=R(()=>{let l=Array.from(this.player().statuses);return l.sort((k,T)=>D.indexOf(k)-D.indexOf(T)),l}),this.displayedRole=R(()=>this.displayMode()===m.EDIT_ROLE&&this.selectedRole()!==void 0?this.selectedRole():this.player().role),this.selectedRole=U(void 0),this.deadIcon=te,this.selectIcon=ee,this.selectionOpened=!1}onCheckedChange(){this.checkedChange.emit(this.checkboxElement?.nativeElement.checked)}onCheckboxClick(){this.checked&&this.displayMode()===m.SELECT_SINGLE&&this.checkedChange.emit(!1)}openSelectRoleOverlay(){let c={header:"CHOISIR UN R\xD4LE",options:this.sortedRoles().map(i=>({value:i,label:this.playerRoleNamePipe.transform(i),active:i===this.player().role}))};this.selectOverlayService.selectedValue.pipe(F(1),ne(this.destroyRef)).subscribe(i=>{this.selectionOpened=!1,this.selectedRole.set(i),i!==void 0&&this.roleChange.emit(i)}),this.selectOverlayService.openOverlay(c),this.selectionOpened=!0}};o.\u0275fac=function(i){return new(i||o)(v(u),v(le),v(V))},o.\u0275cmp=B({type:o,selectors:[["lgmj-player"]],viewQuery:function(i,n){if(i&1&&z(ce,5),i&2){let l;G(l=j())&&(n.checkboxElement=l.first)}},inputs:{player:[f.SignalBased,"player"],displayMode:[f.SignalBased,"displayMode"],disabled:"disabled",checked:"checked",noSelfRole:[f.SignalBased,"noSelfRole"],selectableRoles:[f.SignalBased,"selectableRoles"]},outputs:{checkedChange:"checkedChange",roleChange:"roleChange"},standalone:!0,features:[Q([u]),Y],decls:13,vars:14,consts:[[1,"player"],["size","xl",3,"icon"],["width","55","height","55","class","role-img",3,"ngSrc","alt",4,"ngIf"],[1,"info"],[1,"name"],[1,"role"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"label",3,"for"],[1,"form-control",3,"id","type","checked","disabled","change","click"],["checkbox",""],["width","55","height","55",1,"role-img",3,"ngSrc","alt"],[1,"label",3,"click"],[3,"icon"],["class","status-icon",4,"ngFor","ngForOf","ngForTrackBy"],[1,"status-icon"]],template:function(i,n){i&1&&(p(0,"div",0),y(1,pe,1,1,"fa-icon",1)(2,me,1,1)(3,he,3,6,"img",2),p(4,"div",3)(5,"span",4),x(6),d(),p(7,"span",5),x(8),g(9,"playerRoleName"),d()(),b(10,6),y(11,fe,3,1,"ng-container",7)(12,_e,2,2,"div",8),M(),d()),i&2&&(A("disabled",n.player().isDead||n.disabled)("dead",n.player().isDead)("selection",n.selectionOpened),a(),I(1,n.player().isDead?1:2),a(2),r("ngIf",n.displayedRole()!==n.playerRoleEnum.NOT_SELECTED),a(3),O(n.player().name),a(2),O(C(9,12,n.displayedRole())),a(2),r("ngSwitch",n.displayMode()),a(),r("ngSwitchCase",n.playerDisplayModeEnum.EDIT_ROLE))},dependencies:[W,q,K,H,$,J,u,Z,ae,X,ie,oe],styles:[".status-icon[_ngcontent-%COMP%]{font-size:20px}.player[_ngcontent-%COMP%]{align-items:center;border-bottom:1px solid var(--light-border-color);display:flex;gap:var(--spacing-1);min-height:55px;padding:var(--spacing-05) var(--spacing-1);position:relative}.player.disabled[_ngcontent-%COMP%]{opacity:.5}.player.dead[_ngcontent-%COMP%]{background-color:var(--dark-background-color);color:#fff}.player.selection[_ngcontent-%COMP%]{background-color:var(--light-background-color)}.player[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1}.player[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:var(--font-size-l)}.player[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]{font-size:var(--font-size-m);font-weight:var(--font-weight-light)}.player[_ngcontent-%COMP%]   .form-control[type=checkbox][_ngcontent-%COMP%], .player[_ngcontent-%COMP%]   .form-control[type=radio][_ngcontent-%COMP%]{height:1.25rem;width:1.25rem}.player[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{height:100%;opacity:0;position:absolute;width:100%;z-index:1}"]});let e=o;return e})();export{m as a,Ye as b};
