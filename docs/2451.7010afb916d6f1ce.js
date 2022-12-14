'use strict';
(self.webpackChunkloup_garou_mj = self.webpackChunkloup_garou_mj || []).push([
  [2451],
  {
    2451: (j, d, r) => {
      r.r(d), r.d(d, { RolesRulesPage: () => t });
      var m = r(6895),
        n = r(5035),
        o = r(6146);
      const c = {
        [o.k.NOT_SELECTED]: '',
        [o.k.VILLAGEOIS]:
          "Son objectif est d'\xe9liminer tous les loups-garous.\n\n  Il n'a aucun pouvoir particulier. Pendant le jour il vote pour \xe9liminer quelqu'un du village.",
        [o.k.LOUP_GAROU]:
          "Son objectif est d'\xe9liminer tous les innocents.\n\n  Chaque nuit, les loups-garous attaque un innocent pour essayer de le d\xe9vorer.\n\n  Un loup-garou n'a pas le droit d'attaquer un autre loup-garou.",
        [o.k.CHASSEUR]:
          "Son objectif est d'\xe9liminer tous les loups-garous.\n\n  Quand il meurt, il tue imm\xe9diatement le joueur de son choix.",
        [o.k.CUPIDON]:
          "Son objectif est d'\xe9liminer tous les loups-garous.\n\n  Lors de la premi\xe8re nuit, il d\xe9signe 2 joueurs qui seront amoureux. Il peut se d\xe9signer parmi les amoureux.\n\n  Les 2 amoureux n'auront alors pas le droit de voter contre leur moiti\xe9, et si l'un d'eux meurt, l'autre meurt imm\xe9diatement de chagrin.\n\n  Si les 2 amoureux ne sont pas du m\xeame camp, alors ils devront terminer la partie ensemble en \xe9liminant tous les autres joueurs.",
        [o.k.PETITE_FILLE]:
          "Son objectif est d'\xe9liminer tous les loups-garous.\n\n  Elle peut espionner discr\xe8tement les loups-garous pendant leur tour, sans essayer de se faire passer pour l'un des leurs.\n\n  Si elle se fait prendre, les loups-garous la d\xe9signent imm\xe9diatement comme leur cible.",
        [o.k.SORCIERE]:
          "Son objectif est d'\xe9liminer tous les loup-garous.\n\n  Elle dispose d'une potion de vie permettant de soigner la victime des loups-garous, et d'une potion de mort permettant de tuer imm\xe9diatement un joueur de son choix.\n\n  Elle ne peut utiliser chaque potion qu'une seule fois dans la partie.",
        [o.k.VOLEUR]:
          "En d\xe9but de partie, il peut \xe9changer son r\xf4le avec 2 r\xf4les non distribu\xe9s et garder ce r\xf4le jusqu'\xe0 la fin de la partie.\n\n  S'il d\xe9cide de ne pas \xe9changer son r\xf4le, il restera un villageois et son objectif sera d'\xe9liminer tous les loups-garous.\n\n  Si les 2 r\xf4les non distribu\xe9s sont des loups-garous, il est oblig\xe9 d'\xe9changer son r\xf4le et de devenir un loup-garou, son objectif sera alors d'\xe9liminer tous les innocents.",
        [o.k.VOYANTE]:
          "Son objectif est d'\xe9liminer tous les loup-garous.\n  \n  Chaque nuit, elle peut regarder le r\xf4le d'un joueur de son choix.",
        [o.k.JOUEUR_FLUTE]:
          'Son objectif est de charmer tous les autres joueurs.\n  \n  Chaque nuit, il charme 2 joueurs de son choix.\n  \n  Apr\xe8s son tour, les joueurs charm\xe9s sont appel\xe9s pour se d\xe9couvrir.',
      };
      var i = r(9297),
        p = r(6215),
        g = r(4664),
        h = r(7409),
        e = r(8256);
      function f(u, l) {
        if (
          (1 & u &&
            (e.TgZ(0, 'ion-accordion')(1, 'ion-item', 2)(2, 'ion-thumbnail', 3),
            e._UZ(3, 'img', 4),
            e.ALo(4, 'playerRoleImage'),
            e.ALo(5, 'playerRoleName'),
            e.qZA(),
            e.TgZ(6, 'ion-label'),
            e._uU(7),
            e.ALo(8, 'playerRoleName'),
            e.qZA()(),
            e._UZ(9, 'div', 5),
            e.qZA()),
          2 & u)
        ) {
          const s = l.$implicit,
            a = e.oxw();
          e.xp6(3),
            e.Q6J('src', e.lcZ(4, 4, s), e.LSH)('alt', e.lcZ(5, 6, s)),
            e.xp6(4),
            e.Oqu(e.lcZ(8, 8, s)),
            e.xp6(2),
            e.Q6J('innerText', a.rules[s]);
        }
      }
      class t {
        constructor(l) {
          (this.playerRoleNamePipe = l),
            (this.rules = c),
            (this.roles = Object.values(o.k)
              .filter((s) => s !== o.k.NOT_SELECTED)
              .sort((s, a) =>
                this.playerRoleNamePipe
                  .transform(s)
                  .localeCompare(this.playerRoleNamePipe.transform(a))
              )),
            (this.roleTrackBy = h.A);
        }
      }
      (t.ɵfac = function (l) {
        return new (l || t)(e.Y36(i.L));
      }),
        (t.ɵcmp = e.Xpm({
          type: t,
          selectors: [['lgmj-roles-rules']],
          standalone: !0,
          features: [e._Bn([i.L]), e.jDz],
          decls: 4,
          vars: 2,
          consts: [
            ['title', 'R\xe8gles des r\xf4les'],
            [4, 'ngFor', 'ngForOf', 'ngForTrackBy'],
            ['slot', 'header'],
            ['slot', 'start'],
            [3, 'src', 'alt'],
            ['slot', 'content', 1, 'ion-padding', 'rule', 3, 'innerText'],
          ],
          template: function (l, s) {
            1 & l &&
              (e._UZ(0, 'lgmj-header', 0),
              e.TgZ(1, 'ion-content')(2, 'ion-accordion-group'),
              e.YNc(3, f, 10, 10, 'ion-accordion', 1),
              e.qZA()()),
              2 & l &&
                (e.xp6(3),
                e.Q6J('ngForOf', s.roles)('ngForTrackBy', s.roleTrackBy));
          },
          dependencies: [
            m.ez,
            m.sg,
            n.Pc,
            n.We,
            n.eh,
            n.W2,
            n.Ie,
            n.Q$,
            n.Bs,
            i.L,
            p.$,
            g.G,
          ],
          styles: ['.rule[_ngcontent-%COMP%]{line-height:1.3rem}'],
        }));
    },
  },
]);