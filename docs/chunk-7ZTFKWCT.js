import{a as d,b as R}from"./chunk-QDTWPYVJ.js";import{a as e}from"./chunk-VXKVKIW5.js";import{a as _,b as j,c as N}from"./chunk-ETYJWTET.js";import"./chunk-WXI33M2S.js";import"./chunk-RYOL24LP.js";import"./chunk-2BBTG7RE.js";import{Ab as s,Bb as p,Fb as P,Hb as m,Ib as c,Ma as n,_ as E,ba as f,eb as T,ib as C,jb as O,kb as S,lb as i,mb as u,nb as A,ob as g,pb as v,tb as D}from"./chunk-VWVZCUPY.js";import"./chunk-KFZQC3P5.js";var I={[e.WOLF_TARGET]:"Cible loups-garous",[e.HEALTH_POTION]:"Potion de vie",[e.DEATH_POTION]:"Potion de mort",[e.CAPTAIN]:"Capitaine",[e.LOVER]:"Amoureux",[e.INJURED]:"Bless\xE9",[e.PROTECTED]:"Prot\xE9g\xE9",[e.NO_POWER]:"Plus de pouvoir",[e.CHARMED]:"Charm\xE9",[e.CHILD_MODEL]:"Mod\xE8le de l'enfant",[e.RAVEN]:"Cible du corbeau",[e.NO_VOTE]:"Pas de vote",[e.RUSTY_SWORD]:"Contamin\xE9 par l'\xE9p\xE9e rouill\xE9e",[e.BLUE_TEAM]:"Groupe bleu",[e.RED_TEAM]:"Groupe rouge",[e.INFECTED]:"Infect\xE9",[e.DEVOURED]:"D\xE9vor\xE9"};var x=(()=>{let t=class t{transform(o){return I[o]}};t.\u0275fac=function(a){return new(a||t)},t.\u0275pipe=f({name:"playerStatusName",type:t,pure:!0,standalone:!0});let r=t;return r})();var L={[e.WOLF_TARGET]:"Ce joueur est la cible des loups-garous pour cette nuit.",[e.HEALTH_POTION]:"La sorci\xE8re a toujours sa potion de vie.",[e.DEATH_POTION]:"La sorci\xE8re a toujours sa potion de mort.",[e.CAPTAIN]:"Ce joueur est actuellement le capitaine, son vote pendant le jour compte double.",[e.LOVER]:"Ce joueur fait partie du couple d'amoureux.",[e.CHARMED]:"Ce joueur a \xE9t\xE9 charm\xE9 par le joueur de fl\xFBte.",[e.RAVEN]:"Ce joueur est actuellement accus\xE9 par le corbeau, il a 2 votes contre lui en plus.",[e.CHILD_MODEL]:"Ce joueur est le mod\xE8le de l'enfant sauvage. S'il meurt alors l'enfant sauvage devient un loup-garou.",[e.PROTECTED]:"Ce joueur est actuellement prot\xE9g\xE9 par le Salvateur.",[e.NO_POWER]:"Ce joueur a perdu son pouvoir. Par exemple pour le Renard, il ne peut plus renifler.",[e.INJURED]:"Ce joueur a surv\xE9cu \xE0 une premi\xE8re attaque de loup-garou.",[e.NO_VOTE]:"Ce joueur ne peut pas voter pendant la journ\xE9e.",[e.RUSTY_SWORD]:"Ce joueur est contamin\xE9 par l'\xE9p\xE9e rouill\xE9e du chevalier, il mourra \xE0 la fin de la journ\xE9e.",[e.BLUE_TEAM]:"Ce joueur fait partie du groupe Bleu (pour l'Abominable sectaire).",[e.RED_TEAM]:"Ce joueur fait partie du groupe Rouge (pour l'Abominable sectaire).",[e.INFECTED]:"Ce joueur est infect\xE9. Il joue maintenant avec les loups-garous",[e.DEVOURED]:"Ce joueur vient d'\xEAtre d\xE9vor\xE9 par les loups-garous. A la fin de la nuit il mourra."};function h(r,t){if(r&1&&(i(0,"lgmj-accordion-item"),g(1,0),i(2,"span",1),s(3),m(4,"playerStatusIcon"),u(),i(5,"span",2),s(6),m(7,"playerStatusName"),u(),v(),A(8,"span",3),u()),r&2){let l=t.$implicit,o=D();n(3),p(c(4,3,l)),n(3),p(c(7,5,l)),n(2),T("innerText",o.legends[l])}}var $=(()=>{let t=class t{constructor(){this.legends=L,this.statuses=Object.values(e).sort((o,a)=>d.indexOf(o)-d.indexOf(a))}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=E({type:t,selectors:[["lgmj-status-legends"]],standalone:!0,features:[P],decls:3,vars:0,consts:[["header",""],[1,"status-icon"],[1,"status-name"],[1,"legend",3,"innerText"]],template:function(a,y){a&1&&(i(0,"cdk-accordion"),O(1,h,9,7,"lgmj-accordion-item",null,C),u()),a&2&&(n(),S(y.statuses))},dependencies:[R,x,N,j,_],styles:[".legend[_ngcontent-%COMP%]{line-height:1.3rem}.status-icon[_ngcontent-%COMP%]{font-size:20px;margin-right:var(--spacing-1)}"]});let r=t;return r})();export{$ as StatusLegendsPage};
