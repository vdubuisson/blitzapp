import{a as U}from"./chunk-4OEPV6RE.js";import{a as P}from"./chunk-RL5A7ZOT.js";import{a as e,b as N,c as u}from"./chunk-4T5634HN.js";import{$ as g,A as f,E as j,F as p,G as d,H as n,Ha as I,I as c,Ia as O,Ma as x,O as S,Oa as T,Qa as y,T as E,U as h,X as b,Y as R,Za as A,_ as m,ba as L,ia as q,ka as C,l as v,z as t}from"./chunk-IVXWDV5A.js";import"./chunk-IBPRTQ35.js";import"./chunk-LKXBE6RQ.js";import"./chunk-CJB5ZESW.js";import"./chunk-ASNJF4MZ.js";import"./chunk-AHUCPQIA.js";import"./chunk-AQYU26U7.js";import"./chunk-4WFVMWDK.js";import"./chunk-RB7LEPN2.js";import"./chunk-MDMZPGPE.js";import"./chunk-B43CU5JX.js";import"./chunk-TQEIIVVC.js";import"./chunk-LF5XB4YN.js";import"./chunk-LDRJ6W7P.js";var _={[e.NOT_SELECTED]:"",[e.VILLAGEOIS]:`Son objectif est d'\xE9liminer tous les loups-garous.

  Il n'a aucun pouvoir particulier. Pendant le jour il vote pour \xE9liminer quelqu'un du village.`,[e.LOUP_GAROU]:`Son objectif est d'\xE9liminer tous les innocents.

  Chaque nuit, les loups-garous attaque un innocent pour essayer de le d\xE9vorer.

  Un loup-garou n'a pas le droit d'attaquer un autre loup-garou.`,[e.CHASSEUR]:`Son objectif est d'\xE9liminer tous les loups-garous.

  Quand il meurt, il tue imm\xE9diatement le joueur de son choix.`,[e.CUPIDON]:`Son objectif est d'\xE9liminer tous les loups-garous.

  Lors de la premi\xE8re nuit, il d\xE9signe 2 joueurs qui seront amoureux. Il peut se d\xE9signer parmi les amoureux.

  Les 2 amoureux n'auront alors pas le droit de voter contre leur moiti\xE9, et si l'un d'eux meurt, l'autre meurt imm\xE9diatement de chagrin.

  Si les 2 amoureux ne sont pas du m\xEAme camp, alors ils devront terminer la partie ensemble en \xE9liminant tous les autres joueurs.`,[e.PETITE_FILLE]:`Son objectif est d'\xE9liminer tous les loups-garous.

  Elle peut espionner discr\xE8tement les loups-garous pendant leur tour, sans essayer de se faire passer pour l'un des leurs.

  Si elle se fait prendre, les loups-garous la d\xE9signent imm\xE9diatement comme leur cible.`,[e.SORCIERE]:`Son objectif est d'\xE9liminer tous les loup-garous.

  Elle dispose d'une potion de vie permettant de soigner la victime des loups-garous, et d'une potion de mort permettant de tuer imm\xE9diatement un joueur de son choix.

  Elle ne peut utiliser chaque potion qu'une seule fois dans la partie.`,[e.VOLEUR]:`Si on joue le Voleur, il faut ajouter 2 cartes Simple Villageois dans la partie.

  En d\xE9but de partie, il peut \xE9changer son r\xF4le avec 2 r\xF4les non distribu\xE9s et garder ce r\xF4le jusqu'\xE0 la fin de la partie.

  S'il d\xE9cide de ne pas \xE9changer son r\xF4le, il restera un villageois et son objectif sera d'\xE9liminer tous les loups-garous.

  Si les 2 r\xF4les non distribu\xE9s sont des loups, il est oblig\xE9 d'\xE9changer son r\xF4le contre l'un des deux, son objectif sera alors celui du r\xF4le qu'il aura choisi.`,[e.VOYANTE]:`Son objectif est d'\xE9liminer tous les loup-garous.

  Chaque nuit, elle peut regarder le r\xF4le d'un joueur de son choix.`,[e.JOUEUR_FLUTE]:`Son objectif est de charmer tous les autres joueurs.

  Chaque nuit, il charme 2 joueurs de son choix.

  Apr\xE8s son tour, les joueurs charm\xE9s sont appel\xE9s pour se d\xE9couvrir.`,[e.CORBEAU]:`Son objectif est d'\xE9liminer tous les loup-garous.

  Chaque nuit, il accuse un joueur de son choix.

  Le joueur accus\xE9 aura automatiquement 2 votes contre lui de plus pendant le vote du jour.`,[e.ENFANT_SAUVAGE]:`Son objectif peut changer en cours de partie.

  Lors de la premi\xE8re nuit, il choisit un joueur qui sera son mod\xE8le.

  Tant que son mod\xE8le est en vie, son objectif est d'\xE9liminer tous les loups-garous avec les autres villageois.

  Si son mod\xE8le meurt, il devient alors un loup-garou, et son objectif devient d'\xE9liminer tous les innocents avec les autres loups-garous.`,[e.SALVATEUR]:`Son objectif est d'\xE9liminer tous les loup-garous.

  Chaque nuit, il choisit un joueur qui sera prot\xE9g\xE9 des loups-garous pour cette nuit. Il peut se choisir lui-m\xEAme. Il ne peut pas choisir le m\xEAme joueur 2 nuits de suite.

  La protection du Salvateur est inefficace sur la Petite fille.

  La Sorci\xE8re ne peut pas soigner la victime des loups-garous si celle-ci est d\xE9j\xE0 prot\xE9g\xE9e par le Salvateur.`,[e.GRAND_MECHANT_LOUP]:`Son objectif est d'\xE9liminer tous les innocents.

  Chaque nuit, il se r\xE9veille avec les autres loups-garous pour attaquer un innocent.

  Tant qu'aucun loup-garou n'est \xE9limin\xE9, il se r\xE9veille une 2e fois juste apr\xE8s les loups-garous pour attaquer un 2e innocent.`,[e.MONTREUR_OURS]:`Son objectif est d'\xE9liminer tous les loups-garous.

  Tous les matins, si l'un de ses voisins est un loup-garou, alors son ours grogne.`,[e.RENARD]:`Son objectif est d'\xE9liminer tous les loups-garous.

  Chaque nuit, il peut renifler un groupe de 3 joueurs en d\xE9signant le joueur du milieu.

  Si ce joueur ou l'un de ses voisins est un loup-garou, alors le Renard garde son pouvoir. Sinon, le Renard perd son pouvoir pour le reste de la partie.

  Le Renard n'est pas oblig\xE9 de renifler des joueurs pendant la nuit.

  Si le Renard perd son pouvoir, le meneur continue de l'appeler chaque nuit pour ne pas indiquer aux autres joueurs la perte de ce pouvoir.`,[e.CHIEN_LOUP]:`Lors de la premi\xE8re nuit, il choisit s'il veut \xEAtre un Villageois ou un Loup-Garou.

  S'il choisit d'\xEAtre un Villageois, alors son objectif sera d'\xE9liminer tous les loups-garous.

  S'il choisit d'\xEAtre un Loup-Garou, alors son objectif sera d'\xE9liminer tous les innocents, et il se r\xE9veillera chaque nuit avec les loups-garous pour d\xE9vorer un innocent.`,[e.SOEUR]:`Son objectif est d'\xE9liminer tous les loups-garous.

  Lors de la premi\xE8re nuit, les deux S\u0153urs se d\xE9couvrent. Elles peuvent donc se faire confiance lors des votes du village.`,[e.FRERE]:`Son objectif est d'\xE9liminer tous les loups-garous.

  Lors de la premi\xE8re nuit, les trois Fr\xE8res se d\xE9couvrent. Ils peuvent donc se faire confiance lors des votes du village.`,[e.LOUP_BLANC]:`Son objectif est de terminer la partie en \xE9tant le seul joueur en vie.

  Chaque nuit, il se r\xE9veille avec les autres loups-garous pour attaquer un innocent.

  Une nuit sur deux, il se r\xE9veille et peut \xE9liminer un Loup-Garou s'il le souhaite.`,[e.ANGE]:`Lorsque l'Ange est jou\xE9, la partie commence par un vote des villageois.

  Son objectif est de se faire \xE9liminer lors de ce premier vote ou lors de la premi\xE8re nuit.

  S'il se fait \xE9liminer le premier jour ou la premi\xE8re nuit, il gagne la partie. Dans le cas contraire, il devient un simple villageois et la partie continue.`,[e.ANCIEN]:`Son objectif est d'\xE9liminer tous les loups-garous.

  Il peut survivre \xE0 une premi\xE8re attaque de loups-garous, mais il succombera \xE0 la deuxi\xE8me.

  S'il est \xE9limin\xE9 par un innocent, alors tous les innocents perdent leurs pouvoirs jusqu'\xE0 la fin de la partie.`,[e.IDIOT]:`Son objectif est d'\xE9liminer tous les loups-garous.

  S'il est d\xE9sign\xE9 par le vote du jour des villageois, ceux-ci d\xE9cident de le gracier, mais il perd son droit de vote.

  S'il est \xE9limin\xE9 alors qu'il \xE9tait Capitaine, alors sa fonction de Capitaine n'est pas transmise.`,[e.CHEVALIER]:`Son objectif est d'\xE9liminer tous les loups-garous.

  S'il est d\xE9vor\xE9 par les loups-garous, alors le premier loup-garou \xE0 sa gauche ayant particip\xE9 \xE0 son \xE9limination sera contamin\xE9 et \xE9limin\xE9 la prochaine nuit.`,[e.BOUC]:`Son objectif est d'\xE9liminer tous les loups-garous.

  En cas d'\xE9galit\xE9 lors du vote du village, il est \xE9limin\xE9 \xE0 la place des ex aequo. Dans ce cas, il peut choisir qui pourra voter le jour suivant.`,[e.SECTAIRE]:`Son objectif est d'\xE9liminer tous les membres de l'autre groupe.

  En d\xE9but de partie, le ma\xEEtre du jeu s\xE9pare les joueurs en 2 groupes selon un crit\xE8re \xE9vident (lunettes, \xE2ge, cheveux,...) et l'annonce aux joueurs.

  L'Abominable sectaire gagne la partie quand il ne reste que des joueurs de son groupe en vie.`,[e.PERE_LOUPS]:`Son objectif est d'\xE9liminer tous les innocents.

  Une fois dans la partie, il peut d\xE9cider d'infecter la victime des loups-garous. Au lieu de mourir, celle-ci devient un Loup-Garou et se r\xE9veille toutes les nuits avec les autres loups-garous.

  Le personnage infect\xE9 conserve son pouvoir de personnage, mais son objectif est maintenant de faire gagner les loups-garous.`};function F(r,o){if(r&1&&(d(0,"ion-accordion")(1,"ion-item",2)(2,"ion-thumbnail",3),c(3,"img",4),m(4,"playerRoleImage"),m(5,"playerRoleName"),n(),d(6,"ion-label"),E(7),m(8,"playerRoleName"),n()(),c(9,"div",5),n()),r&2){let l=o.$implicit,s=S();t(3),p("ngSrc",g(4,4,l))("alt",g(5,6,l)),t(4),h(g(8,8,l)),t(2),p("innerText",s.rules[l])}}var $=(()=>{let o=class o{constructor(s){this.playerRoleNamePipe=s,this.rules=_,this.roles=Object.values(e).filter(i=>i!==e.NOT_SELECTED).sort((i,a)=>this.playerRoleNamePipe.transform(i).localeCompare(this.playerRoleNamePipe.transform(a))),this.roleTrackBy=U}};o.\u0275fac=function(i){return new(i||o)(f(u))},o.\u0275cmp=v({type:o,selectors:[["lgmj-roles-rules"]],standalone:!0,features:[b([u]),R],decls:4,vars:2,consts:[["title","R\xE8gles des r\xF4les"],[4,"ngFor","ngForOf","ngForTrackBy"],["slot","header"],["slot","start"],["width","250","height","250",1,"role-img",3,"ngSrc","alt"],["slot","content",1,"ion-padding","rule",3,"innerText"]],template:function(i,a){i&1&&(c(0,"lgmj-header",0),d(1,"ion-content")(2,"ion-accordion-group"),j(3,F,10,10,"ion-accordion",1),n()()),i&2&&(t(3),p("ngForOf",a.roles)("ngForTrackBy",a.roleTrackBy))},dependencies:[q,L,u,N,P,C,x,O,I,T,A,y],styles:[".rule[_ngcontent-%COMP%]{line-height:1.3rem}"]});let r=o;return r})();export{$ as RolesRulesPage};
