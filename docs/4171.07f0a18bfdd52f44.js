'use strict';
(self.webpackChunkloup_garou_mj = self.webpackChunkloup_garou_mj || []).push([
  [4171],
  {
    4171: (O, c, n) => {
      n.r(c), n.d(c, { StatusLegendsPage: () => r });
      var l = n(6895),
        a = n(5035),
        p = n(4664),
        g = n(7517),
        e = n(4206),
        t = n(8256);
      class u {
        transform(o) {
          switch (o) {
            case e.M.WOLF_TARGET:
              return 'Cible loups-garous';
            case e.M.HEALTH_POTION:
              return 'Potion de vie';
            case e.M.DEATH_POTION:
              return 'Potion de mort';
            case e.M.CAPTAIN:
              return 'Capitaine';
            case e.M.LOVER:
              return 'Amoureux';
            default:
              return '';
          }
        }
        static #t = (this.ɵfac = function (s) {
          return new (s || u)();
        });
        static #e = (this.ɵpipe = t.Yjl({
          name: 'playerStatusName',
          type: u,
          pure: !0,
          standalone: !0,
        }));
      }
      const m = {
        [e.M.WOLF_TARGET]:
          'Ce joueur est la cible des loups-garous pour cette nuit. A la fin de la nuit il mourra.',
        [e.M.HEALTH_POTION]: 'La sorci\xe8re a toujours sa potion de vie.',
        [e.M.DEATH_POTION]: 'La sorci\xe8re a toujours sa potion de mort.',
        [e.M.CAPTAIN]:
          'Ce joueur est actuellement le capitaine, son vote pendant le jour compte double.',
        [e.M.LOVER]: "Ce joueur fait partie du couple d'amoureux.",
      };
      var T = n(100);
      function A(d, o) {
        if (
          (1 & d &&
            (t.TgZ(0, 'ion-accordion')(1, 'ion-item', 2)(2, 'span', 3),
            t._uU(3),
            t.ALo(4, 'playerStatus'),
            t.qZA(),
            t.TgZ(5, 'ion-label'),
            t._uU(6),
            t.ALo(7, 'playerStatusName'),
            t.qZA()(),
            t._UZ(8, 'div', 4),
            t.qZA()),
          2 & d)
        ) {
          const s = o.$implicit,
            i = t.oxw();
          t.xp6(3),
            t.Oqu(t.lcZ(4, 3, s)),
            t.xp6(3),
            t.Oqu(t.lcZ(7, 5, s)),
            t.xp6(2),
            t.Q6J('innerText', i.legends[s]);
        }
      }
      class r {
        constructor() {
          (this.legends = m),
            (this.statuses = Object.values(e.M)),
            (this.statusTrackBy = T.V);
        }
        static #t = (this.ɵfac = function (s) {
          return new (s || r)();
        });
        static #e = (this.ɵcmp = t.Xpm({
          type: r,
          selectors: [['lgmj-status-legends']],
          standalone: !0,
          features: [t.jDz],
          decls: 4,
          vars: 2,
          consts: [
            ['title', 'L\xe9gende des statuts'],
            [4, 'ngFor', 'ngForOf', 'ngForTrackBy'],
            ['slot', 'header'],
            ['slot', 'start', 1, 'status-icon'],
            ['slot', 'content', 1, 'ion-padding', 'legend', 3, 'innerText'],
          ],
          template: function (s, i) {
            1 & s &&
              (t._UZ(0, 'lgmj-header', 0),
              t.TgZ(1, 'ion-content')(2, 'ion-accordion-group'),
              t.YNc(3, A, 9, 7, 'ion-accordion', 1),
              t.qZA()()),
              2 & s &&
                (t.xp6(3),
                t.Q6J('ngForOf', i.statuses)('ngForTrackBy', i.statusTrackBy));
          },
          dependencies: [
            l.ez,
            l.sg,
            a.Pc,
            a.We,
            a.eh,
            a.W2,
            a.Ie,
            a.Q$,
            g.E,
            u,
            p.G,
          ],
          styles: [
            '.legend[_ngcontent-%COMP%]{line-height:1.3rem}.status-icon[_ngcontent-%COMP%]{font-size:20px}',
          ],
        }));
      }
    },
  },
]);
