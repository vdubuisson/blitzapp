'use strict';
(self.webpackChunkloup_garou_mj = self.webpackChunkloup_garou_mj || []).push([
  [3903],
  {
    3903: (E, g, a) => {
      a.r(g), a.d(g, { GamePage: () => h });
      var d = a(6895),
        i = a(5035),
        y = a(8505),
        l = a(4253),
        m = a(1642),
        o = a(1022),
        e = a(8256);
      class u {
        transform(n) {
          switch (n) {
            case o.h.VOLEUR:
              return 'Choix du voleur';
            case o.h.CUPIDON:
              return 'Tir de Cupidon';
            case o.h.VOYANTE:
              return 'Vision de la voyante';
            case o.h.AMOUREUX:
              return 'D\xe9couverte des amoureux';
            case o.h.LOUP_GAROU:
              return 'Attaque des loups-garous';
            case o.h.SORCIERE_HEALTH:
              return 'Soin de la sorci\xe8re';
            case o.h.SORCIERE_KILL:
              return 'Potion de mort de la sorci\xe8re';
            case o.h.VILLAGEOIS:
              return 'Vote des villageois';
            case o.h.CAPITAINE:
              return 'Election du capitaine';
            case o.h.CHASSEUR:
              return 'Tir du chasseur';
            default:
              return '';
          }
        }
        static #e = (this.ɵfac = function (t) {
          return new (t || u)();
        });
        static #t = (this.ɵpipe = e.Yjl({
          name: 'roundName',
          type: u,
          pure: !0,
          standalone: !0,
        }));
      }
      var f = a(6519),
        P = a(4664),
        C = a(4518);
      function _(c, n) {
        if (1 & c) {
          const t = e.EpF();
          e.TgZ(0, 'lgmj-player', 12),
            e.NdJ('checkedChange', function (s) {
              const S = e.CHM(t).$implicit,
                b = e.oxw(2);
              return e.KtG(b.onMultiPlayerChecked(S.id, s));
            }),
            e.qZA();
        }
        if (2 & c) {
          const t = n.$implicit,
            r = e.oxw().ngIf,
            s = e.oxw();
          e.Q6J('player', t)('displayMode', s.playerDisplayMode)(
            'disabled',
            !r.selectablePlayers.includes(t.id)
          )('checked', s.selectedPlayers.has(t.id));
        }
      }
      function x(c, n) {
        if (1 & c) {
          const t = e.EpF();
          e.ynx(0),
            e.TgZ(1, 'div', 3)(2, 'ion-note', 4)(3, 'h2', 5)(4, 'span', 6),
            e._uU(5),
            e.qZA(),
            e._uU(6, ' Tour actuel '),
            e.TgZ(7, 'span', 6),
            e._uU(8),
            e.qZA()()(),
            e._UZ(9, 'hr'),
            e.TgZ(10, 'ion-text', 4)(11, 'h1', 7),
            e._uU(12),
            e.ALo(13, 'roundName'),
            e.qZA()()(),
            e.TgZ(14, 'ion-list')(15, 'ion-radio-group', 8),
            e.NdJ('ionChange', function (s) {
              e.CHM(t);
              const p = e.oxw();
              return e.KtG(p.onSinglePlayerChecked(s));
            }),
            e.YNc(16, _, 1, 4, 'lgmj-player', 9),
            e.ALo(17, 'async'),
            e.qZA()(),
            e.TgZ(18, 'div', 10)(19, 'ion-button', 11),
            e.NdJ('click', function () {
              e.CHM(t);
              const s = e.oxw();
              return e.KtG(s.onSubmit());
            }),
            e._uU(20, ' Valider '),
            e.qZA()(),
            e.BQk();
        }
        if (2 & c) {
          const t = n.ngIf,
            r = e.oxw();
          e.xp6(5),
            e.Oqu(t.isDuringDay ? '\u2600\ufe0f' : '\u{1f319}'),
            e.xp6(3),
            e.Oqu(t.isDuringDay ? '\u2600\ufe0f' : '\u{1f319}'),
            e.xp6(4),
            e.Oqu(e.lcZ(13, 8, t.role)),
            e.xp6(3),
            e.Q6J('allowEmptySelection', 0 === t.minSelectable)(
              'value',
              r.selectedPlayer
            ),
            e.xp6(1),
            e.Q6J('ngForOf', e.lcZ(17, 10, r.players$))(
              'ngForTrackBy',
              r.playerTrackBy
            ),
            e.xp6(3),
            e.Q6J('disabled', r.submitDisabled);
        }
      }
      class h {
        constructor(n) {
          (this.gameService = n),
            (this.playerDisplayMode = l.d.DEFAULT),
            (this.playerTrackBy = C.y),
            (this.selectedPlayers = new Set()),
            (this.maxSelectable = 0),
            (this.minSelectable = 0),
            (this.round$ = this.gameService.getRound().pipe(
              (0, y.b)((t) => {
                void 0 !== t &&
                  ((this.maxSelectable = t.maxSelectable),
                  (this.minSelectable = t.minSelectable),
                  (this.playerDisplayMode =
                    t.maxSelectable > 1
                      ? l.d.SELECT_MULTI
                      : 1 === t.maxSelectable
                      ? l.d.SELECT_SINGLE
                      : l.d.DEFAULT));
              })
            )),
            (this.players$ = this.gameService.getPlayers());
        }
        get submitDisabled() {
          switch (this.playerDisplayMode) {
            case l.d.SELECT_SINGLE:
              return this.minSelectable > 0 && void 0 === this.selectedPlayer;
            case l.d.SELECT_MULTI:
              return (
                this.selectedPlayers.size > this.maxSelectable ||
                this.selectedPlayers.size < this.minSelectable
              );
            default:
              return !1;
          }
        }
        onSinglePlayerChecked(n) {
          this.playerDisplayMode === l.d.SELECT_SINGLE &&
            (this.selectedPlayer = n.detail.value);
        }
        onMultiPlayerChecked(n, t) {
          this.playerDisplayMode === l.d.SELECT_MULTI &&
            (t ? this.selectedPlayers.add(n) : this.selectedPlayers.delete(n));
        }
        onSubmit() {
          const n =
            void 0 !== this.selectedPlayer
              ? [this.selectedPlayer]
              : Array.from(this.selectedPlayers);
          this.gameService.submitRoundAction(n),
            (this.selectedPlayer = void 0),
            this.selectedPlayers.clear();
        }
        static #e = (this.ɵfac = function (t) {
          return new (t || h)(e.Y36(m.h));
        });
        static #t = (this.ɵcmp = e.Xpm({
          type: h,
          selectors: [['lgmj-game']],
          standalone: !0,
          features: [e.jDz],
          decls: 5,
          vars: 3,
          consts: [
            ['title', 'Partie en cours'],
            ['id', 'container'],
            [4, 'ngIf'],
            ['id', 'round-header'],
            [1, 'ion-text-center'],
            ['id', 'round-subtitle'],
            [1, 'day-icon'],
            ['id', 'round-title'],
            [3, 'allowEmptySelection', 'value', 'ionChange'],
            [
              3,
              'player',
              'displayMode',
              'disabled',
              'checked',
              'checkedChange',
              4,
              'ngFor',
              'ngForOf',
              'ngForTrackBy',
            ],
            ['id', 'submit-block'],
            [
              'expand',
              'block',
              'color',
              'success',
              1,
              'ion-margin-horizontal',
              3,
              'disabled',
              'click',
            ],
            [
              3,
              'player',
              'displayMode',
              'disabled',
              'checked',
              'checkedChange',
            ],
          ],
          template: function (t, r) {
            1 & t &&
              (e._UZ(0, 'lgmj-header', 0),
              e.TgZ(1, 'ion-content')(2, 'div', 1),
              e.YNc(3, x, 21, 12, 'ng-container', 2),
              e.ALo(4, 'async'),
              e.qZA()()),
              2 & t && (e.xp6(3), e.Q6J('ngIf', e.lcZ(4, 1, r.round$)));
          },
          dependencies: [
            d.ez,
            d.sg,
            d.O5,
            d.Ov,
            i.Pc,
            i.YG,
            i.W2,
            i.q_,
            i.uN,
            i.se,
            i.yW,
            i.QI,
            u,
            f.l,
            P.G,
          ],
          styles: [
            '#round-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background:var(--ion-background-color, #fff);display:flow-root}#round-header[_ngcontent-%COMP%]   #round-subtitle[_ngcontent-%COMP%]{text-transform:uppercase;font-size:15px}#round-header[_ngcontent-%COMP%]   #round-subtitle[_ngcontent-%COMP%]   .day-icon[_ngcontent-%COMP%]{font-size:25px}#round-header[_ngcontent-%COMP%]   #round-title[_ngcontent-%COMP%]{text-transform:uppercase;font-size:20px;margin-top:10px}#round-header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{width:15%;background-color:gray}@media (prefers-color-scheme: dark){#round-header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{background-color:#fff}}#submit-block[_ngcontent-%COMP%]{position:sticky;bottom:0;background:var(--ion-background-color, #fff);display:flow-root}',
          ],
        }));
      }
    },
  },
]);
