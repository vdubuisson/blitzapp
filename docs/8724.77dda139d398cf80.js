'use strict';
(self.webpackChunkloup_garou_mj = self.webpackChunkloup_garou_mj || []).push([
  [8724],
  {
    8724: (k, _, n) => {
      n.r(_), n.d(_, { NewGamePage: () => c });
      var y = n(6895),
        i = n(5035),
        p = n(6146);
      const f = [p.k.VILLAGEOIS, p.k.LOUP_GAROU];
      var d = n(4253),
        h = n(7510),
        e = n(8256),
        s = n(433),
        T = n(9297);
      class m {
        constructor(t) {
          (this.formBuilder = t),
            (this.newPlayer = new e.vpe()),
            (this.playerForm = this.formBuilder.group({
              name: ['', s.kI.required],
            }));
        }
        onSubmit() {
          this.newPlayer.emit(this.playerForm.value.name),
            this.playerForm.reset();
        }
      }
      (m.ɵfac = function (t) {
        return new (t || m)(e.Y36(s.qu));
      }),
        (m.ɵcmp = e.Xpm({
          type: m,
          selectors: [['lgmj-new-player']],
          outputs: { newPlayer: 'newPlayer' },
          standalone: !0,
          features: [e._Bn([T.L]), e.jDz],
          decls: 5,
          vars: 2,
          consts: [
            [3, 'formGroup', 'ngSubmit'],
            [
              'slot',
              'start',
              'color',
              'success',
              'shape',
              'round',
              'type',
              'submit',
              3,
              'disabled',
            ],
            ['slot', 'icon-only', 'name', 'add'],
            ['placeholder', 'Nom', 'formControlName', 'name'],
          ],
          template: function (t, a) {
            1 & t &&
              (e.TgZ(0, 'form', 0),
              e.NdJ('ngSubmit', function () {
                return a.onSubmit();
              }),
              e.TgZ(1, 'ion-item')(2, 'ion-button', 1),
              e._UZ(3, 'ion-icon', 2),
              e.qZA(),
              e._UZ(4, 'ion-input', 3),
              e.qZA()()),
              2 & t &&
                (e.Q6J('formGroup', a.playerForm),
                e.xp6(2),
                e.Q6J('disabled', a.playerForm.invalid));
          },
          dependencies: [
            y.ez,
            i.Pc,
            i.YG,
            i.gu,
            i.pK,
            i.Ie,
            i.j9,
            s.u5,
            s._Y,
            s.JJ,
            s.JL,
            s.UX,
            s.sg,
            s.u,
          ],
        }));
      var P = n(6519),
        b = n(4664),
        v = n(4518),
        w = n(5698),
        E = n(4004);
      function N(l, t) {
        1 & l &&
          (e.TgZ(0, 'ion-item', 10),
          e._UZ(1, 'ion-icon', 11),
          e.TgZ(2, 'em'),
          e._uU(3, 'Respectez la position r\xe9elle des joueurs'),
          e.qZA()());
      }
      function C(l, t) {
        if (1 & l) {
          const a = e.EpF();
          e.TgZ(0, 'lgmj-new-player', 12),
            e.NdJ('newPlayer', function (r) {
              e.CHM(a);
              const g = e.oxw();
              return e.KtG(g.addPlayer(r));
            }),
            e.qZA();
        }
      }
      function G(l, t) {
        if (1 & l) {
          const a = e.EpF();
          e.TgZ(0, 'lgmj-player', 13),
            e.NdJ('remove', function () {
              const g = e.CHM(a).$implicit,
                u = e.oxw();
              return e.KtG(u.removePlayer(g.id));
            })('roleChange', function (r) {
              const u = e.CHM(a).$implicit,
                Z = e.oxw();
              return e.KtG(Z.changeRole(u.id, r));
            }),
            e.qZA();
        }
        if (2 & l) {
          const a = t.$implicit,
            o = e.oxw();
          e.Q6J('player', a)('displayMode', o.playerDisplayMode)(
            'selectableRoles',
            o.availableRoles
          );
        }
      }
      function R(l, t) {
        if (1 & l) {
          const a = e.EpF();
          e.TgZ(0, 'ion-button', 14),
            e.NdJ('click', function () {
              e.CHM(a);
              const r = e.oxw();
              return e.KtG(r.validatePlayers());
            }),
            e._uU(1, ' Valider '),
            e.qZA();
        }
        if (2 & l) {
          const a = e.oxw();
          e.Q6J('disabled', 0 === a.players.length);
        }
      }
      function x(l, t) {
        if (1 & l) {
          const a = e.EpF();
          e.TgZ(0, 'ion-button', 14),
            e.NdJ('click', function () {
              e.CHM(a);
              const r = e.oxw();
              return e.KtG(r.createGame());
            }),
            e._uU(1, ' D\xe9marrer '),
            e.qZA(),
            e.TgZ(2, 'ion-button', 15),
            e.NdJ('click', function () {
              e.CHM(a);
              const r = e.oxw();
              return e.KtG(r.backToCreation());
            }),
            e._uU(3, ' Retour '),
            e.qZA();
        }
        if (2 & l) {
          const a = e.oxw();
          e.Q6J('disabled', a.cannotCreate);
        }
      }
      class c {
        constructor(t) {
          (this.gameService = t),
            (this.players = []),
            (this.playerDisplayMode = d.d.CREATE),
            (this.playerDisplayModeEnum = d.d),
            (this.playerTrackBy = v.y),
            (this.pageSubtitle = 'Joueurs'),
            (this.availableRoles = this.getAvailableRoles());
        }
        get cannotCreate() {
          return this.players.some((t) => t.role === p.k.NOT_SELECTED);
        }
        ionViewWillEnter() {
          0 === this.players.length &&
            this.gameService
              .getPlayers()
              .pipe(
                (0, w.q)(1),
                (0, E.U)((t) =>
                  t.map((a) => ({
                    ...a,
                    role: p.k.NOT_SELECTED,
                    statuses: new Set(),
                    isDead: !1,
                  }))
                )
              )
              .subscribe((t) => (this.players = t));
        }
        validatePlayers() {
          (this.playerDisplayMode = d.d.EDIT_ROLE),
            (this.pageSubtitle = 'R\xf4les');
        }
        createGame() {
          this.gameService.createGame(this.players),
            (this.players = []),
            this.backToCreation();
        }
        backToCreation() {
          (this.playerDisplayMode = d.d.CREATE),
            (this.pageSubtitle = 'Joueurs');
        }
        addPlayer(t) {
          this.players.push({
            id: this.players.length,
            name: t,
            role: p.k.NOT_SELECTED,
            statuses: new Set(),
            isDead: !1,
          });
        }
        removePlayer(t) {
          this.players.splice(t, 1),
            this.reindexPlayers(),
            (this.availableRoles = this.getAvailableRoles());
        }
        reorderPlayer(t) {
          (this.players = t.detail.complete(this.players)),
            this.reindexPlayers();
        }
        changeRole(t, a) {
          const o = this.players.find((r) => r.id === t);
          void 0 !== o &&
            ((o.role = a), (this.availableRoles = this.getAvailableRoles()));
        }
        reindexPlayers() {
          this.players.forEach((t, a) => (t.id = a));
        }
        getAvailableRoles() {
          const t = new Set(this.players.map((a) => a.role));
          return Object.values(p.k)
            .filter(
              (a) => a !== p.k.NOT_SELECTED && (f.includes(a) || !t.has(a))
            )
            .filter((a) => a !== p.k.VOLEUR);
        }
      }
      (c.ɵfac = function (t) {
        return new (t || c)(e.Y36(h.h));
      }),
        (c.ɵcmp = e.Xpm({
          type: c,
          selectors: [['lgmj-new-game']],
          standalone: !0,
          features: [e.jDz],
          decls: 12,
          vars: 8,
          consts: [
            [3, 'title'],
            ['id', 'container'],
            ['lines', 'full', 4, 'ngIf'],
            [3, 'newPlayer', 4, 'ngIf'],
            ['id', 'player-list'],
            [3, 'disabled', 'ionItemReorder'],
            [
              3,
              'player',
              'displayMode',
              'selectableRoles',
              'remove',
              'roleChange',
              4,
              'ngFor',
              'ngForOf',
              'ngForTrackBy',
            ],
            ['id', 'submit-block'],
            [
              'expand',
              'block',
              'class',
              'ion-margin-horizontal',
              3,
              'disabled',
              'click',
              4,
              'ngIf',
              'ngIfElse',
            ],
            ['startButtons', ''],
            ['lines', 'full'],
            [
              'slot',
              'start',
              'name',
              'warning',
              'size',
              'large',
              'color',
              'warning',
            ],
            [3, 'newPlayer'],
            [
              3,
              'player',
              'displayMode',
              'selectableRoles',
              'remove',
              'roleChange',
            ],
            [
              'expand',
              'block',
              1,
              'ion-margin-horizontal',
              3,
              'disabled',
              'click',
            ],
            [
              'expand',
              'block',
              'color',
              'danger',
              1,
              'ion-margin-horizontal',
              3,
              'click',
            ],
          ],
          template: function (t, a) {
            if (
              (1 & t &&
                (e._UZ(0, 'lgmj-header', 0),
                e.TgZ(1, 'ion-content')(2, 'div', 1),
                e.YNc(3, N, 4, 0, 'ion-item', 2),
                e.YNc(4, C, 1, 0, 'lgmj-new-player', 3),
                e.TgZ(5, 'ion-list', 4)(6, 'ion-reorder-group', 5),
                e.NdJ('ionItemReorder', function (r) {
                  return a.reorderPlayer(r);
                }),
                e.YNc(7, G, 1, 3, 'lgmj-player', 6),
                e.qZA()(),
                e.TgZ(8, 'div', 7),
                e.YNc(9, R, 2, 1, 'ion-button', 8),
                e.qZA(),
                e.YNc(10, x, 4, 1, 'ng-template', null, 9, e.W1O),
                e.qZA()()),
              2 & t)
            ) {
              const o = e.MAs(11);
              e.Q6J('title', 'Nouvelle partie - ' + a.pageSubtitle),
                e.xp6(3),
                e.Q6J(
                  'ngIf',
                  a.playerDisplayMode === a.playerDisplayModeEnum.CREATE
                ),
                e.xp6(1),
                e.Q6J(
                  'ngIf',
                  a.playerDisplayMode === a.playerDisplayModeEnum.CREATE
                ),
                e.xp6(2),
                e.Q6J('disabled', !1),
                e.xp6(1),
                e.Q6J('ngForOf', a.players)('ngForTrackBy', a.playerTrackBy),
                e.xp6(2),
                e.Q6J(
                  'ngIf',
                  a.playerDisplayMode === a.playerDisplayModeEnum.CREATE
                )('ngIfElse', o);
            }
          },
          dependencies: [
            y.ez,
            y.sg,
            y.O5,
            i.Pc,
            i.YG,
            i.W2,
            i.gu,
            i.Ie,
            i.q_,
            i.oz,
            m,
            P.l,
            b.G,
          ],
          styles: [
            'lgmj-new-player[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}#submit-block[_ngcontent-%COMP%]{position:sticky;bottom:0;background:var(--ion-background-color, #fff);display:flow-root}',
          ],
        }));
    },
  },
]);
