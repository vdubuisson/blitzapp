'use strict';
(self.webpackChunkloup_garou_mj = self.webpackChunkloup_garou_mj || []).push([
  [4171],
  {
    4171: (P, l, s) => {
      s.r(l), s.d(l, { StatusLegendsPage: () => c });
      var i = s(6895),
        o = s(5035),
        d = s(4664),
        p = s(7517),
        t = s(4206),
        e = s(8256);
      class r {
        transform(a) {
          switch (a) {
            case t.M.WOLF_TARGET:
              return 'Cible loups-garous';
            case t.M.HEALTH_POTION:
              return 'Potion de vie';
            case t.M.DEATH_POTION:
              return 'Potion de mort';
            case t.M.CAPTAIN:
              return 'Capitaine';
            case t.M.LOVER:
              return 'Amoureux';
            case t.M.CHARMED:
              return 'Charm\xe9';
            default:
              return '';
          }
        }
      }
      (r.ɵfac = function (a) {
        return new (a || r)();
      }),
        (r.ɵpipe = e.Yjl({
          name: 'playerStatusName',
          type: r,
          pure: !0,
          standalone: !0,
        }));
      const g = {
        [t.M.WOLF_TARGET]:
          'Ce joueur est la cible des loups-garous pour cette nuit. A la fin de la nuit il mourra.',
        [t.M.HEALTH_POTION]: 'La sorci\xe8re a toujours sa potion de vie.',
        [t.M.DEATH_POTION]: 'La sorci\xe8re a toujours sa potion de mort.',
        [t.M.CAPTAIN]:
          'Ce joueur est actuellement le capitaine, son vote pendant le jour compte double.',
        [t.M.LOVER]: "Ce joueur fait partie du couple d'amoureux.",
        [t.M.CHARMED]:
          'Ce joueur a \xe9t\xe9 charm\xe9 par le joueur de fl\xfbte.',
      };
      var m = s(100);
      function T(n, a) {
        if (
          (1 & n &&
            (e.TgZ(0, 'ion-accordion')(1, 'ion-item', 2)(2, 'span', 3),
            e._uU(3),
            e.ALo(4, 'playerStatus'),
            e.qZA(),
            e.TgZ(5, 'ion-label'),
            e._uU(6),
            e.ALo(7, 'playerStatusName'),
            e.qZA()(),
            e._UZ(8, 'div', 4),
            e.qZA()),
          2 & n)
        ) {
          const u = a.$implicit,
            A = e.oxw();
          e.xp6(3),
            e.Oqu(e.lcZ(4, 3, u)),
            e.xp6(3),
            e.Oqu(e.lcZ(7, 5, u)),
            e.xp6(2),
            e.Q6J('innerText', A.legends[u]);
        }
      }
      class c {
        constructor() {
          (this.legends = g),
            (this.statuses = Object.values(t.M)),
            (this.statusTrackBy = m.V);
        }
      }
      (c.ɵfac = function (a) {
        return new (a || c)();
      }),
        (c.ɵcmp = e.Xpm({
          type: c,
          selectors: [['lgmj-status-legends']],
          standalone: !0,
          features: [e.jDz],
          decls: 4,
          vars: 2,
          consts: [
            ['title', 'L\xe9gende des statuts'],
            [4, 'ngFor', 'ngForOf', 'ngForTrackBy'],
            ['slot', 'header'],
            ['slot', 'start', 1, 'status-icon'],
            ['slot', 'content', 1, 'ion-padding', 'legend', 3, 'innerText'],
          ],
          template: function (a, u) {
            1 & a &&
              (e._UZ(0, 'lgmj-header', 0),
              e.TgZ(1, 'ion-content')(2, 'ion-accordion-group'),
              e.YNc(3, T, 9, 7, 'ion-accordion', 1),
              e.qZA()()),
              2 & a &&
                (e.xp6(3),
                e.Q6J('ngForOf', u.statuses)('ngForTrackBy', u.statusTrackBy));
          },
          dependencies: [
            i.ez,
            i.sg,
            o.Pc,
            o.We,
            o.eh,
            o.W2,
            o.Ie,
            o.Q$,
            p.E,
            r,
            d.G,
          ],
          styles: [
            '.legend[_ngcontent-%COMP%]{line-height:1.3rem}.status-icon[_ngcontent-%COMP%]{font-size:20px}',
          ],
        }));
    },
  },
]);
