(self.webpackChunkloup_garou_mj = self.webpackChunkloup_garou_mj || []).push([
  [179],
  {
    5035: (at, ke, S) => {
      'use strict';
      S.d(ke, {
        Br: () => Jn,
        w: () => ct,
        We: () => kt,
        eh: () => tr,
        dr: () => Bn,
        YG: () => on,
        Sm: () => sn,
        nz: () => hn,
        W2: () => Ie,
        Gu: () => Zt,
        gu: () => an,
        pK: () => pn,
        Ie: () => On,
        Q$: () => Cr,
        q_: () => sr,
        z0: () => yn,
        fG: () => Tt,
        uN: () => T,
        B7: () => U,
        se: () => K,
        Nh: () => ie,
        oz: () => Be,
        jP: () => oo,
        t9: () => Ht,
        n0: () => Hn,
        yW: () => Wt,
        Bs: () => Jr,
        wd: () => Ro,
        sr: () => Ur,
        Pc: () => Oe,
        r4: () => b,
        U5: () => Vt,
        YI: () => Eo,
        QI: () => Yt,
        j9: () => At,
      });
      var o = S(8256),
        N = S(433),
        j = S(655),
        z = S(8421),
        ge = S(9751),
        Ne = S(5577),
        re = S(1144),
        Fe = S(576),
        Ae = S(3268);
      const Pe = ['addListener', 'removeListener'],
        De = ['addEventListener', 'removeEventListener'],
        we = ['on', 'off'];
      function ue(a, _, c, g) {
        if (((0, Fe.m)(c) && ((g = c), (c = void 0)), g))
          return ue(a, _, c).pipe((0, Ae.Z)(g));
        const [M, Me] = (function me(a) {
          return (
            (0, Fe.m)(a.addEventListener) && (0, Fe.m)(a.removeEventListener)
          );
        })(a)
          ? De.map((Je) => (Qe) => a[Je](_, Qe, c))
          : (function ve(a) {
              return (0, Fe.m)(a.addListener) && (0, Fe.m)(a.removeListener);
            })(a)
          ? Pe.map(te(a, _))
          : (function $e(a) {
              return (0, Fe.m)(a.on) && (0, Fe.m)(a.off);
            })(a)
          ? we.map(te(a, _))
          : [];
        if (!M && (0, re.z)(a))
          return (0, Ne.z)((Je) => ue(Je, _, c))((0, z.Xf)(a));
        if (!M) throw new TypeError('Invalid event target');
        return new ge.y((Je) => {
          const Qe = (...Ct) => Je.next(1 < Ct.length ? Ct : Ct[0]);
          return M(Qe), () => Me(Qe);
        });
      }
      function te(a, _) {
        return (c) => (g) => a[c](_, g);
      }
      var ee = S(7579),
        Ve = S(1135),
        Ee = S(8265),
        q = (S(8834), S(3953), S(3880), S(1911), S(9658)),
        le = S(5730),
        fe = S(697),
        V = (S(4292), S(1312)),
        Se = (S(3457), S(4349), S(1308)),
        J = S(9300),
        oe = S(3900),
        he = S(4671),
        be = S(4482),
        Ye = S(5403);
      function Ke(a, _) {
        return a === _;
      }
      var ft = S(6895);
      const lt = q.i,
        ze = ['*'],
        Pt = (a) =>
          'function' == typeof __zone_symbol__requestAnimationFrame
            ? __zone_symbol__requestAnimationFrame(a)
            : 'function' == typeof requestAnimationFrame
            ? requestAnimationFrame(a)
            : setTimeout(a),
        cn = (a) => !!a.resolveComponentFactory;
      let Xt = (() => {
        class a {
          constructor(c, g) {
            (this.injector = c),
              (this.el = g),
              (this.onChange = () => {}),
              (this.onTouched = () => {});
          }
          writeValue(c) {
            (this.el.nativeElement.value = this.lastValue = c ?? ''),
              kn(this.el);
          }
          handleChangeEvent(c, g) {
            c === this.el.nativeElement &&
              (g !== this.lastValue && ((this.lastValue = g), this.onChange(g)),
              kn(this.el));
          }
          _handleBlurEvent(c) {
            c === this.el.nativeElement && (this.onTouched(), kn(this.el));
          }
          registerOnChange(c) {
            this.onChange = c;
          }
          registerOnTouched(c) {
            this.onTouched = c;
          }
          setDisabledState(c) {
            this.el.nativeElement.disabled = c;
          }
          ngOnDestroy() {
            this.statusChanges && this.statusChanges.unsubscribe();
          }
          ngAfterViewInit() {
            let c;
            try {
              c = this.injector.get(N.a5);
            } catch {}
            if (!c) return;
            c.statusChanges &&
              (this.statusChanges = c.statusChanges.subscribe(() =>
                kn(this.el)
              ));
            const g = c.control;
            g &&
              [
                'markAsTouched',
                'markAllAsTouched',
                'markAsUntouched',
                'markAsDirty',
                'markAsPristine',
              ].forEach((Me) => {
                if (typeof g[Me] < 'u') {
                  const Je = g[Me].bind(g);
                  g[Me] = (...Qe) => {
                    Je(...Qe), kn(this.el);
                  };
                }
              });
          }
        }
        return (
          (a.ɵfac = function (c) {
            return new (c || a)(o.Y36(o.zs3), o.Y36(o.SBq));
          }),
          (a.ɵdir = o.lG2({
            type: a,
            hostBindings: function (c, g) {
              1 & c &&
                o.NdJ('ionBlur', function (Me) {
                  return g._handleBlurEvent(Me.target);
                });
            },
          })),
          a
        );
      })();
      const kn = (a) => {
          Pt(() => {
            const _ = a.nativeElement,
              c = null != _.value && _.value.toString().length > 0,
              g = Jt(_);
            $n(_, g);
            const M = _.closest('ion-item');
            M && $n(M, c ? [...g, 'item-has-value'] : g);
          });
        },
        Jt = (a) => {
          const _ = a.classList,
            c = [];
          for (let g = 0; g < _.length; g++) {
            const M = _.item(g);
            null !== M && Ut(M, 'ng-') && c.push(`ion-${M.substring(3)}`);
          }
          return c;
        },
        $n = (a, _) => {
          const c = a.classList;
          c.remove(
            'ion-valid',
            'ion-invalid',
            'ion-touched',
            'ion-untouched',
            'ion-dirty',
            'ion-pristine'
          ),
            c.add(..._);
        },
        Ut = (a, _) => a.substring(0, _.length) === _;
      let ct = (() => {
          class a extends Xt {
            constructor(c, g) {
              super(c, g);
            }
            writeValue(c) {
              (this.el.nativeElement.checked = this.lastValue = c ?? !1),
                kn(this.el);
            }
            _handleIonChange(c) {
              this.handleChangeEvent(c, c.checked);
            }
          }
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.zs3), o.Y36(o.SBq));
            }),
            (a.ɵdir = o.lG2({
              type: a,
              selectors: [['ion-checkbox'], ['ion-toggle']],
              hostBindings: function (c, g) {
                1 & c &&
                  o.NdJ('ionChange', function (Me) {
                    return g._handleIonChange(Me.target);
                  });
              },
              features: [
                o._Bn([{ provide: N.JU, useExisting: a, multi: !0 }]),
                o.qOj,
              ],
            })),
            a
          );
        })(),
        Vt = (() => {
          class a extends Xt {
            constructor(c, g) {
              super(c, g);
            }
            _handleIonSelect(c) {
              this.handleChangeEvent(c, c.checked);
            }
          }
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.zs3), o.Y36(o.SBq));
            }),
            (a.ɵdir = o.lG2({
              type: a,
              selectors: [['ion-radio']],
              hostBindings: function (c, g) {
                1 & c &&
                  o.NdJ('ionSelect', function (Me) {
                    return g._handleIonSelect(Me.target);
                  });
              },
              features: [
                o._Bn([{ provide: N.JU, useExisting: a, multi: !0 }]),
                o.qOj,
              ],
            })),
            a
          );
        })(),
        Yt = (() => {
          class a extends Xt {
            constructor(c, g) {
              super(c, g);
            }
            _handleChangeEvent(c) {
              this.handleChangeEvent(c, c.value);
            }
          }
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.zs3), o.Y36(o.SBq));
            }),
            (a.ɵdir = o.lG2({
              type: a,
              selectors: [
                ['ion-range'],
                ['ion-select'],
                ['ion-radio-group'],
                ['ion-segment'],
                ['ion-datetime'],
              ],
              hostBindings: function (c, g) {
                1 & c &&
                  o.NdJ('ionChange', function (Me) {
                    return g._handleChangeEvent(Me.target);
                  });
              },
              features: [
                o._Bn([{ provide: N.JU, useExisting: a, multi: !0 }]),
                o.qOj,
              ],
            })),
            a
          );
        })(),
        At = (() => {
          class a extends Xt {
            constructor(c, g) {
              super(c, g);
            }
            _handleInputEvent(c) {
              this.handleChangeEvent(c, c.value);
            }
          }
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.zs3), o.Y36(o.SBq));
            }),
            (a.ɵdir = o.lG2({
              type: a,
              selectors: [
                ['ion-input', 3, 'type', 'number'],
                ['ion-textarea'],
                ['ion-searchbar'],
              ],
              hostBindings: function (c, g) {
                1 & c &&
                  o.NdJ('ionChange', function (Me) {
                    return g._handleInputEvent(Me.target);
                  });
              },
              features: [
                o._Bn([{ provide: N.JU, useExisting: a, multi: !0 }]),
                o.qOj,
              ],
            })),
            a
          );
        })();
      const un = (a, _) => {
          const c = a.prototype;
          _.forEach((g) => {
            Object.defineProperty(c, g, {
              get() {
                return this.el[g];
              },
              set(M) {
                this.z.runOutsideAngular(() => (this.el[g] = M));
              },
            });
          });
        },
        In = (a, _) => {
          const c = a.prototype;
          _.forEach((g) => {
            c[g] = function () {
              const M = arguments;
              return this.z.runOutsideAngular(() =>
                this.el[g].apply(this.el, M)
              );
            };
          });
        },
        pt = (a, _, c) => {
          c.forEach((g) => (a[g] = ue(_, g)));
        };
      function tt(a) {
        return function (c) {
          const { defineCustomElementFn: g, inputs: M, methods: Me } = a;
          return void 0 !== g && g(), M && un(c, M), Me && In(c, Me), c;
        };
      }
      let kt = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M), c.detach(), (this.el = g.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-accordion']],
              inputs: {
                disabled: 'disabled',
                mode: 'mode',
                readonly: 'readonly',
                toggleIcon: 'toggleIcon',
                toggleIconSlot: 'toggleIconSlot',
                value: 'value',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: [
                    'disabled',
                    'mode',
                    'readonly',
                    'toggleIcon',
                    'toggleIconSlot',
                    'value',
                  ],
                }),
              ],
              a
            )),
            a
          );
        })(),
        tr = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M),
                c.detach(),
                (this.el = g.nativeElement),
                pt(this, this.el, ['ionChange']);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-accordion-group']],
              inputs: {
                animated: 'animated',
                disabled: 'disabled',
                expand: 'expand',
                mode: 'mode',
                multiple: 'multiple',
                readonly: 'readonly',
                value: 'value',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: [
                    'animated',
                    'disabled',
                    'expand',
                    'mode',
                    'multiple',
                    'readonly',
                    'value',
                  ],
                }),
              ],
              a
            )),
            a
          );
        })(),
        Bn = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M), c.detach(), (this.el = g.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-app']],
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)([tt({ defineCustomElementFn: void 0 })], a)),
            a
          );
        })(),
        on = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M),
                c.detach(),
                (this.el = g.nativeElement),
                pt(this, this.el, ['ionFocus', 'ionBlur']);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-button']],
              inputs: {
                buttonType: 'buttonType',
                color: 'color',
                disabled: 'disabled',
                download: 'download',
                expand: 'expand',
                fill: 'fill',
                form: 'form',
                href: 'href',
                mode: 'mode',
                rel: 'rel',
                routerAnimation: 'routerAnimation',
                routerDirection: 'routerDirection',
                shape: 'shape',
                size: 'size',
                strong: 'strong',
                target: 'target',
                type: 'type',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: [
                    'buttonType',
                    'color',
                    'disabled',
                    'download',
                    'expand',
                    'fill',
                    'form',
                    'href',
                    'mode',
                    'rel',
                    'routerAnimation',
                    'routerDirection',
                    'shape',
                    'size',
                    'strong',
                    'target',
                    'type',
                  ],
                }),
              ],
              a
            )),
            a
          );
        })(),
        sn = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M), c.detach(), (this.el = g.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-buttons']],
              inputs: { collapse: 'collapse' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [tt({ defineCustomElementFn: void 0, inputs: ['collapse'] })],
              a
            )),
            a
          );
        })(),
        hn = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M),
                c.detach(),
                (this.el = g.nativeElement),
                pt(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-checkbox']],
              inputs: {
                checked: 'checked',
                color: 'color',
                disabled: 'disabled',
                indeterminate: 'indeterminate',
                mode: 'mode',
                name: 'name',
                value: 'value',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: [
                    'checked',
                    'color',
                    'disabled',
                    'indeterminate',
                    'mode',
                    'name',
                    'value',
                  ],
                }),
              ],
              a
            )),
            a
          );
        })(),
        Ie = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M),
                c.detach(),
                (this.el = g.nativeElement),
                pt(this, this.el, [
                  'ionScrollStart',
                  'ionScroll',
                  'ionScrollEnd',
                ]);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-content']],
              inputs: {
                color: 'color',
                forceOverscroll: 'forceOverscroll',
                fullscreen: 'fullscreen',
                scrollEvents: 'scrollEvents',
                scrollX: 'scrollX',
                scrollY: 'scrollY',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: [
                    'color',
                    'forceOverscroll',
                    'fullscreen',
                    'scrollEvents',
                    'scrollX',
                    'scrollY',
                  ],
                  methods: [
                    'getScrollElement',
                    'scrollToTop',
                    'scrollToBottom',
                    'scrollByPoint',
                    'scrollToPoint',
                  ],
                }),
              ],
              a
            )),
            a
          );
        })(),
        Zt = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M), c.detach(), (this.el = g.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-header']],
              inputs: {
                collapse: 'collapse',
                mode: 'mode',
                translucent: 'translucent',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: ['collapse', 'mode', 'translucent'],
                }),
              ],
              a
            )),
            a
          );
        })(),
        an = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M), c.detach(), (this.el = g.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-icon']],
              inputs: {
                color: 'color',
                flipRtl: 'flipRtl',
                icon: 'icon',
                ios: 'ios',
                lazy: 'lazy',
                md: 'md',
                mode: 'mode',
                name: 'name',
                sanitize: 'sanitize',
                size: 'size',
                src: 'src',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: [
                    'color',
                    'flipRtl',
                    'icon',
                    'ios',
                    'lazy',
                    'md',
                    'mode',
                    'name',
                    'sanitize',
                    'size',
                    'src',
                  ],
                }),
              ],
              a
            )),
            a
          );
        })(),
        pn = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M),
                c.detach(),
                (this.el = g.nativeElement),
                pt(this, this.el, [
                  'ionInput',
                  'ionChange',
                  'ionBlur',
                  'ionFocus',
                ]);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-input']],
              inputs: {
                accept: 'accept',
                autocapitalize: 'autocapitalize',
                autocomplete: 'autocomplete',
                autocorrect: 'autocorrect',
                autofocus: 'autofocus',
                clearInput: 'clearInput',
                clearOnEdit: 'clearOnEdit',
                color: 'color',
                debounce: 'debounce',
                disabled: 'disabled',
                enterkeyhint: 'enterkeyhint',
                inputmode: 'inputmode',
                max: 'max',
                maxlength: 'maxlength',
                min: 'min',
                minlength: 'minlength',
                mode: 'mode',
                multiple: 'multiple',
                name: 'name',
                pattern: 'pattern',
                placeholder: 'placeholder',
                readonly: 'readonly',
                required: 'required',
                size: 'size',
                spellcheck: 'spellcheck',
                step: 'step',
                type: 'type',
                value: 'value',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: [
                    'accept',
                    'autocapitalize',
                    'autocomplete',
                    'autocorrect',
                    'autofocus',
                    'clearInput',
                    'clearOnEdit',
                    'color',
                    'debounce',
                    'disabled',
                    'enterkeyhint',
                    'inputmode',
                    'max',
                    'maxlength',
                    'min',
                    'minlength',
                    'mode',
                    'multiple',
                    'name',
                    'pattern',
                    'placeholder',
                    'readonly',
                    'required',
                    'size',
                    'spellcheck',
                    'step',
                    'type',
                    'value',
                  ],
                  methods: ['setFocus', 'getInputElement'],
                }),
              ],
              a
            )),
            a
          );
        })(),
        On = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M), c.detach(), (this.el = g.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-item']],
              inputs: {
                button: 'button',
                color: 'color',
                counter: 'counter',
                counterFormatter: 'counterFormatter',
                detail: 'detail',
                detailIcon: 'detailIcon',
                disabled: 'disabled',
                download: 'download',
                fill: 'fill',
                href: 'href',
                lines: 'lines',
                mode: 'mode',
                rel: 'rel',
                routerAnimation: 'routerAnimation',
                routerDirection: 'routerDirection',
                shape: 'shape',
                target: 'target',
                type: 'type',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: [
                    'button',
                    'color',
                    'counter',
                    'counterFormatter',
                    'detail',
                    'detailIcon',
                    'disabled',
                    'download',
                    'fill',
                    'href',
                    'lines',
                    'mode',
                    'rel',
                    'routerAnimation',
                    'routerDirection',
                    'shape',
                    'target',
                    'type',
                  ],
                }),
              ],
              a
            )),
            a
          );
        })(),
        Cr = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M), c.detach(), (this.el = g.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-label']],
              inputs: { color: 'color', mode: 'mode', position: 'position' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: ['color', 'mode', 'position'],
                }),
              ],
              a
            )),
            a
          );
        })(),
        sr = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M), c.detach(), (this.el = g.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-list']],
              inputs: { inset: 'inset', lines: 'lines', mode: 'mode' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: ['inset', 'lines', 'mode'],
                  methods: ['closeSlidingItems'],
                }),
              ],
              a
            )),
            a
          );
        })(),
        yn = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M),
                c.detach(),
                (this.el = g.nativeElement),
                pt(this, this.el, [
                  'ionWillOpen',
                  'ionWillClose',
                  'ionDidOpen',
                  'ionDidClose',
                ]);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-menu']],
              inputs: {
                contentId: 'contentId',
                disabled: 'disabled',
                maxEdgeStart: 'maxEdgeStart',
                menuId: 'menuId',
                side: 'side',
                swipeGesture: 'swipeGesture',
                type: 'type',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: [
                    'contentId',
                    'disabled',
                    'maxEdgeStart',
                    'menuId',
                    'side',
                    'swipeGesture',
                    'type',
                  ],
                  methods: [
                    'isOpen',
                    'isActive',
                    'open',
                    'close',
                    'toggle',
                    'setOpen',
                  ],
                }),
              ],
              a
            )),
            a
          );
        })(),
        Tt = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M), c.detach(), (this.el = g.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-menu-button']],
              inputs: {
                autoHide: 'autoHide',
                color: 'color',
                disabled: 'disabled',
                menu: 'menu',
                mode: 'mode',
                type: 'type',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: [
                    'autoHide',
                    'color',
                    'disabled',
                    'menu',
                    'mode',
                    'type',
                  ],
                }),
              ],
              a
            )),
            a
          );
        })(),
        T = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M), c.detach(), (this.el = g.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-note']],
              inputs: { color: 'color', mode: 'mode' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: ['color', 'mode'],
                }),
              ],
              a
            )),
            a
          );
        })(),
        U = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M),
                c.detach(),
                (this.el = g.nativeElement),
                pt(this, this.el, ['ionFocus', 'ionBlur']);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-radio']],
              inputs: {
                color: 'color',
                disabled: 'disabled',
                mode: 'mode',
                name: 'name',
                value: 'value',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: ['color', 'disabled', 'mode', 'name', 'value'],
                }),
              ],
              a
            )),
            a
          );
        })(),
        K = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M),
                c.detach(),
                (this.el = g.nativeElement),
                pt(this, this.el, ['ionChange']);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-radio-group']],
              inputs: {
                allowEmptySelection: 'allowEmptySelection',
                name: 'name',
                value: 'value',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: ['allowEmptySelection', 'name', 'value'],
                }),
              ],
              a
            )),
            a
          );
        })(),
        ie = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M), c.detach(), (this.el = g.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-reorder']],
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)([tt({ defineCustomElementFn: void 0 })], a)),
            a
          );
        })(),
        Be = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M),
                c.detach(),
                (this.el = g.nativeElement),
                pt(this, this.el, ['ionItemReorder']);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-reorder-group']],
              inputs: { disabled: 'disabled' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: ['disabled'],
                  methods: ['complete'],
                }),
              ],
              a
            )),
            a
          );
        })(),
        Ht = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M),
                c.detach(),
                (this.el = g.nativeElement),
                pt(this, this.el, [
                  'ionChange',
                  'ionCancel',
                  'ionDismiss',
                  'ionFocus',
                  'ionBlur',
                ]);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-select']],
              inputs: {
                cancelText: 'cancelText',
                compareWith: 'compareWith',
                disabled: 'disabled',
                interface: 'interface',
                interfaceOptions: 'interfaceOptions',
                mode: 'mode',
                multiple: 'multiple',
                name: 'name',
                okText: 'okText',
                placeholder: 'placeholder',
                selectedText: 'selectedText',
                value: 'value',
              },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: [
                    'cancelText',
                    'compareWith',
                    'disabled',
                    'interface',
                    'interfaceOptions',
                    'mode',
                    'multiple',
                    'name',
                    'okText',
                    'placeholder',
                    'selectedText',
                    'value',
                  ],
                  methods: ['open'],
                }),
              ],
              a
            )),
            a
          );
        })(),
        Hn = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M), c.detach(), (this.el = g.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-select-option']],
              inputs: { disabled: 'disabled', value: 'value' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: ['disabled', 'value'],
                }),
              ],
              a
            )),
            a
          );
        })(),
        Wt = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M), c.detach(), (this.el = g.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-text']],
              inputs: { color: 'color', mode: 'mode' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: ['color', 'mode'],
                }),
              ],
              a
            )),
            a
          );
        })(),
        Jr = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M), c.detach(), (this.el = g.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-thumbnail']],
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)([tt({ defineCustomElementFn: void 0 })], a)),
            a
          );
        })(),
        Ro = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M), c.detach(), (this.el = g.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-title']],
              inputs: { color: 'color', size: 'size' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: ['color', 'size'],
                }),
              ],
              a
            )),
            a
          );
        })(),
        Ur = (() => {
          let a = class {
            constructor(c, g, M) {
              (this.z = M), c.detach(), (this.el = g.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-toolbar']],
              inputs: { color: 'color', mode: 'mode' },
              ngContentSelectors: ze,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, j.gn)(
              [
                tt({
                  defineCustomElementFn: void 0,
                  inputs: ['color', 'mode'],
                }),
              ],
              a
            )),
            a
          );
        })();
      class gr {
        constructor(_ = {}) {
          this.data = _;
        }
        get(_) {
          return this.data[_];
        }
      }
      let vn = (() => {
        class a {
          constructor(c, g) {
            (this.zone = c), (this.appRef = g);
          }
          create(c, g, M) {
            return new mo(c, g, M, this.appRef, this.zone);
          }
        }
        return (
          (a.ɵfac = function (c) {
            return new (c || a)(o.LFG(o.R0b), o.LFG(o.z2F));
          }),
          (a.ɵprov = o.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      class mo {
        constructor(_, c, g, M, Me) {
          (this.resolverOrInjector = _),
            (this.injector = c),
            (this.location = g),
            (this.appRef = M),
            (this.zone = Me),
            (this.elRefMap = new WeakMap()),
            (this.elEventsMap = new WeakMap());
        }
        attachViewToDom(_, c, g, M) {
          return this.zone.run(
            () =>
              new Promise((Me) => {
                Me(
                  tn(
                    this.zone,
                    this.resolverOrInjector,
                    this.injector,
                    this.location,
                    this.appRef,
                    this.elRefMap,
                    this.elEventsMap,
                    _,
                    c,
                    g,
                    M
                  )
                );
              })
          );
        }
        removeViewFromDom(_, c) {
          return this.zone.run(
            () =>
              new Promise((g) => {
                const M = this.elRefMap.get(c);
                if (M) {
                  M.destroy(), this.elRefMap.delete(c);
                  const Me = this.elEventsMap.get(c);
                  Me && (Me(), this.elEventsMap.delete(c));
                }
                g();
              })
          );
        }
      }
      const tn = (a, _, c, g, M, Me, Je, Qe, Ct, $t, qt) => {
          let Qt;
          const zn = o.zs3.create({ providers: Or($t), parent: c });
          if (_ && cn(_)) {
            const fn = _.resolveComponentFactory(Ct);
            Qt = g ? g.createComponent(fn, g.length, zn) : fn.create(zn);
          } else {
            if (!g) return null;
            Qt = g.createComponent(Ct, {
              index: g.indexOf,
              injector: zn,
              environmentInjector: _,
            });
          }
          const xr = Qt.instance,
            Fr = Qt.location.nativeElement;
          if (($t && Object.assign(xr, $t), qt))
            for (const fn of qt) Fr.classList.add(fn);
          const bo = Ar(a, xr, Fr);
          return (
            Qe.appendChild(Fr),
            g || M.attachView(Qt.hostView),
            Qt.changeDetectorRef.reattach(),
            Me.set(Fr, Qt),
            Je.set(Fr, bo),
            Fr
          );
        },
        Fn = [fe.L, fe.a, fe.b, fe.c, fe.d],
        Ar = (a, _, c) =>
          a.run(() => {
            const g = Fn.filter((M) => 'function' == typeof _[M]).map((M) => {
              const Me = (Je) => _[M](Je.detail);
              return (
                c.addEventListener(M, Me), () => c.removeEventListener(M, Me)
              );
            });
            return () => g.forEach((M) => M());
          }),
        Tr = new o.OlP('NavParamsToken'),
        Or = (a) => [
          { provide: Tr, useValue: a },
          { provide: gr, useFactory: Mn, deps: [Tr] },
        ],
        Mn = (a) => new gr(a),
        vo = (a, _) => (
          (a = a.filter((c) => c.stackId !== _.stackId)).push(_), a
        ),
        eo = (a, _) => {
          const c = a.createUrlTree(['.'], { relativeTo: _ });
          return a.serializeUrl(c);
        },
        Fo = (a, _) => {
          if (!a) return;
          const c = no(_);
          for (let g = 0; g < c.length; g++) {
            if (g >= a.length) return c[g];
            if (c[g] !== a[g]) return;
          }
        },
        no = (a) =>
          a
            .split('/')
            .map((_) => _.trim())
            .filter((_) => '' !== _),
        Ko = (a) => {
          a && (a.ref.destroy(), a.unlistenEvents());
        };
      class jr {
        constructor(_, c, g, M, Me, Je) {
          (this.containerEl = c),
            (this.router = g),
            (this.navCtrl = M),
            (this.zone = Me),
            (this.location = Je),
            (this.views = []),
            (this.skipTransition = !1),
            (this.nextId = 0),
            (this.tabsPrefix = void 0 !== _ ? no(_) : void 0);
        }
        createView(_, c) {
          var g;
          const M = eo(this.router, c),
            Me =
              null === (g = _?.location) || void 0 === g
                ? void 0
                : g.nativeElement,
            Je = Ar(this.zone, _.instance, Me);
          return {
            id: this.nextId++,
            stackId: Fo(this.tabsPrefix, M),
            unlistenEvents: Je,
            element: Me,
            ref: _,
            url: M,
          };
        }
        getExistingView(_) {
          const c = eo(this.router, _),
            g = this.views.find((M) => M.url === c);
          return g && g.ref.changeDetectorRef.reattach(), g;
        }
        setActive(_) {
          var c, g;
          const M = this.navCtrl.consumeTransition();
          let { direction: Me, animation: Je, animationBuilder: Qe } = M;
          const Ct = this.activeView,
            $t = ((a, _) => !_ || a.stackId !== _.stackId)(_, Ct);
          $t && ((Me = 'back'), (Je = void 0));
          const qt = this.views.slice();
          let Qt;
          const zn = this.router;
          zn.getCurrentNavigation
            ? (Qt = zn.getCurrentNavigation())
            : !(null === (c = zn.navigations) || void 0 === c) &&
              c.value &&
              (Qt = zn.navigations.value),
            null !== (g = Qt?.extras) &&
              void 0 !== g &&
              g.replaceUrl &&
              this.views.length > 0 &&
              this.views.splice(-1, 1);
          const xr = this.views.includes(_),
            Fr = this.insertView(_, Me);
          xr || _.ref.changeDetectorRef.detectChanges();
          const bo = _.animationBuilder;
          return (
            void 0 === Qe && 'back' === Me && !$t && void 0 !== bo && (Qe = bo),
            Ct && (Ct.animationBuilder = Qe),
            this.zone.runOutsideAngular(() =>
              this.wait(
                () => (
                  Ct && Ct.ref.changeDetectorRef.detach(),
                  _.ref.changeDetectorRef.reattach(),
                  this.transition(_, Ct, Je, this.canGoBack(1), !1, Qe)
                    .then(() => Di(_, Fr, qt, this.location, this.zone))
                    .then(() => ({
                      enteringView: _,
                      direction: Me,
                      animation: Je,
                      tabSwitch: $t,
                    }))
                )
              )
            )
          );
        }
        canGoBack(_, c = this.getActiveStackId()) {
          return this.getStack(c).length > _;
        }
        pop(_, c = this.getActiveStackId()) {
          return this.zone.run(() => {
            var g, M;
            const Me = this.getStack(c);
            if (Me.length <= _) return Promise.resolve(!1);
            const Je = Me[Me.length - _ - 1];
            let Qe = Je.url;
            const Ct = Je.savedData;
            if (Ct) {
              const qt = Ct.get('primary');
              null !==
                (M =
                  null === (g = qt?.route) || void 0 === g
                    ? void 0
                    : g._routerState) &&
                void 0 !== M &&
                M.snapshot.url &&
                (Qe = qt.route._routerState.snapshot.url);
            }
            const { animationBuilder: $t } = this.navCtrl.consumeTransition();
            return this.navCtrl
              .navigateBack(
                Qe,
                Object.assign(Object.assign({}, Je.savedExtras), {
                  animation: $t,
                })
              )
              .then(() => !0);
          });
        }
        startBackTransition() {
          const _ = this.activeView;
          if (_) {
            const c = this.getStack(_.stackId),
              g = c[c.length - 2],
              M = g.animationBuilder;
            return this.wait(() =>
              this.transition(g, _, 'back', this.canGoBack(2), !0, M)
            );
          }
          return Promise.resolve();
        }
        endBackTransition(_) {
          _
            ? ((this.skipTransition = !0), this.pop(1))
            : this.activeView &&
              li(
                this.activeView,
                this.views,
                this.views,
                this.location,
                this.zone
              );
        }
        getLastUrl(_) {
          const c = this.getStack(_);
          return c.length > 0 ? c[c.length - 1] : void 0;
        }
        getRootUrl(_) {
          const c = this.getStack(_);
          return c.length > 0 ? c[0] : void 0;
        }
        getActiveStackId() {
          return this.activeView ? this.activeView.stackId : void 0;
        }
        hasRunningTask() {
          return void 0 !== this.runningTask;
        }
        destroy() {
          (this.containerEl = void 0),
            this.views.forEach(Ko),
            (this.activeView = void 0),
            (this.views = []);
        }
        getStack(_) {
          return this.views.filter((c) => c.stackId === _);
        }
        insertView(_, c) {
          return (
            (this.activeView = _),
            (this.views = ((a, _, c) =>
              'root' === c
                ? vo(a, _)
                : 'forward' === c
                ? ((a, _) => (
                    a.indexOf(_) >= 0
                      ? (a = a.filter(
                          (g) => g.stackId !== _.stackId || g.id <= _.id
                        ))
                      : a.push(_),
                    a
                  ))(a, _)
                : ((a, _) =>
                    a.indexOf(_) >= 0
                      ? a.filter((g) => g.stackId !== _.stackId || g.id <= _.id)
                      : vo(a, _))(a, _))(this.views, _, c)),
            this.views.slice()
          );
        }
        transition(_, c, g, M, Me, Je) {
          if (this.skipTransition)
            return (this.skipTransition = !1), Promise.resolve(!1);
          if (c === _) return Promise.resolve(!1);
          const Qe = _ ? _.element : void 0,
            Ct = c ? c.element : void 0,
            $t = this.containerEl;
          return Qe &&
            Qe !== Ct &&
            (Qe.classList.add('ion-page'),
            Qe.classList.add('ion-page-invisible'),
            Qe.parentElement !== $t && $t.appendChild(Qe),
            $t.commit)
            ? $t.commit(Qe, Ct, {
                deepWait: !0,
                duration: void 0 === g ? 0 : void 0,
                direction: g,
                showGoBack: M,
                progressAnimation: Me,
                animationBuilder: Je,
              })
            : Promise.resolve(!1);
        }
        wait(_) {
          return (0, j.mG)(this, void 0, void 0, function* () {
            void 0 !== this.runningTask &&
              (yield this.runningTask, (this.runningTask = void 0));
            const c = (this.runningTask = _());
            return c.finally(() => (this.runningTask = void 0)), c;
          });
        }
      }
      const Di = (a, _, c, g, M) =>
          'function' == typeof requestAnimationFrame
            ? new Promise((Me) => {
                requestAnimationFrame(() => {
                  li(a, _, c, g, M), Me();
                });
              })
            : Promise.resolve(),
        li = (a, _, c, g, M) => {
          M.run(() => c.filter((Me) => !_.includes(Me)).forEach(Ko)),
            _.forEach((Me) => {
              const Qe = g.path().split('?')[0].split('#')[0];
              if (Me !== a && Me.url !== Qe) {
                const Ct = Me.element;
                Ct.setAttribute('aria-hidden', 'true'),
                  Ct.classList.add('ion-page-hidden'),
                  Me.ref.changeDetectorRef.detach();
              }
            });
        };
      let yo = (() => {
        class a {
          get(c, g) {
            const M = Po();
            return M ? M.get(c, g) : null;
          }
          getBoolean(c, g) {
            const M = Po();
            return !!M && M.getBoolean(c, g);
          }
          getNumber(c, g) {
            const M = Po();
            return M ? M.getNumber(c, g) : 0;
          }
        }
        return (
          (a.ɵfac = function (c) {
            return new (c || a)();
          }),
          (a.ɵprov = o.Yz7({ token: a, factory: a.ɵfac, providedIn: 'root' })),
          a
        );
      })();
      const Zo = new o.OlP('USERCONFIG'),
        Po = () => {
          if (typeof window < 'u') {
            const a = window.Ionic;
            if (a?.config) return a.config;
          }
          return null;
        };
      let Do = (() => {
        class a {
          constructor(c, g) {
            (this.doc = c),
              (this.backButton = new ee.x()),
              (this.keyboardDidShow = new ee.x()),
              (this.keyboardDidHide = new ee.x()),
              (this.pause = new ee.x()),
              (this.resume = new ee.x()),
              (this.resize = new ee.x()),
              g.run(() => {
                var M;
                let Me;
                (this.win = c.defaultView),
                  (this.backButton.subscribeWithPriority = function (Je, Qe) {
                    return this.subscribe((Ct) =>
                      Ct.register(Je, ($t) => g.run(() => Qe($t)))
                    );
                  }),
                  Er(this.pause, c, 'pause'),
                  Er(this.resume, c, 'resume'),
                  Er(this.backButton, c, 'ionBackButton'),
                  Er(this.resize, this.win, 'resize'),
                  Er(this.keyboardDidShow, this.win, 'ionKeyboardDidShow'),
                  Er(this.keyboardDidHide, this.win, 'ionKeyboardDidHide'),
                  (this._readyPromise = new Promise((Je) => {
                    Me = Je;
                  })),
                  null !== (M = this.win) && void 0 !== M && M.cordova
                    ? c.addEventListener(
                        'deviceready',
                        () => {
                          Me('cordova');
                        },
                        { once: !0 }
                      )
                    : Me('dom');
              });
          }
          is(c) {
            return (0, q.a)(this.win, c);
          }
          platforms() {
            return (0, q.g)(this.win);
          }
          ready() {
            return this._readyPromise;
          }
          get isRTL() {
            return 'rtl' === this.doc.dir;
          }
          getQueryParam(c) {
            return ro(this.win.location.href, c);
          }
          isLandscape() {
            return !this.isPortrait();
          }
          isPortrait() {
            var c, g;
            return null === (g = (c = this.win).matchMedia) || void 0 === g
              ? void 0
              : g.call(c, '(orientation: portrait)').matches;
          }
          testUserAgent(c) {
            const g = this.win.navigator;
            return !!(g?.userAgent && g.userAgent.indexOf(c) >= 0);
          }
          url() {
            return this.win.location.href;
          }
          width() {
            return this.win.innerWidth;
          }
          height() {
            return this.win.innerHeight;
          }
        }
        return (
          (a.ɵfac = function (c) {
            return new (c || a)(o.LFG(ft.K0), o.LFG(o.R0b));
          }),
          (a.ɵprov = o.Yz7({ token: a, factory: a.ɵfac, providedIn: 'root' })),
          a
        );
      })();
      const ro = (a, _) => {
          _ = _.replace(/[[\]\\]/g, '\\$&');
          const g = new RegExp('[\\?&]' + _ + '=([^&#]*)').exec(a);
          return g ? decodeURIComponent(g[1].replace(/\+/g, ' ')) : null;
        },
        Er = (a, _, c) => {
          _ &&
            _.addEventListener(c, (g) => {
              a.next(g?.detail);
            });
        };
      let mr = (() => {
        class a {
          constructor(c, g, M, Me) {
            (this.location = g),
              (this.serializer = M),
              (this.router = Me),
              (this.direction = Qo),
              (this.animated = cr),
              (this.guessDirection = 'forward'),
              (this.lastNavId = -1),
              Me &&
                Me.events.subscribe((Je) => {
                  if (Je instanceof Ee.OD) {
                    const Qe = Je.restoredState
                      ? Je.restoredState.navigationId
                      : Je.id;
                    (this.guessDirection =
                      Qe < this.lastNavId ? 'back' : 'forward'),
                      (this.guessAnimation = Je.restoredState
                        ? void 0
                        : this.guessDirection),
                      (this.lastNavId =
                        'forward' === this.guessDirection ? Je.id : Qe);
                  }
                }),
              c.backButton.subscribeWithPriority(0, (Je) => {
                this.pop(), Je();
              });
          }
          navigateForward(c, g = {}) {
            return (
              this.setDirection(
                'forward',
                g.animated,
                g.animationDirection,
                g.animation
              ),
              this.navigate(c, g)
            );
          }
          navigateBack(c, g = {}) {
            return (
              this.setDirection(
                'back',
                g.animated,
                g.animationDirection,
                g.animation
              ),
              this.navigate(c, g)
            );
          }
          navigateRoot(c, g = {}) {
            return (
              this.setDirection(
                'root',
                g.animated,
                g.animationDirection,
                g.animation
              ),
              this.navigate(c, g)
            );
          }
          back(c = { animated: !0, animationDirection: 'back' }) {
            return (
              this.setDirection(
                'back',
                c.animated,
                c.animationDirection,
                c.animation
              ),
              this.location.back()
            );
          }
          pop() {
            return (0, j.mG)(this, void 0, void 0, function* () {
              let c = this.topOutlet;
              for (; c && !(yield c.pop()); ) c = c.parentOutlet;
            });
          }
          setDirection(c, g, M, Me) {
            (this.direction = c),
              (this.animated = vr(c, g, M)),
              (this.animationBuilder = Me);
          }
          setTopOutlet(c) {
            this.topOutlet = c;
          }
          consumeTransition() {
            let g,
              c = 'root';
            const M = this.animationBuilder;
            return (
              'auto' === this.direction
                ? ((c = this.guessDirection), (g = this.guessAnimation))
                : ((g = this.animated), (c = this.direction)),
              (this.direction = Qo),
              (this.animated = cr),
              (this.animationBuilder = void 0),
              { direction: c, animation: g, animationBuilder: M }
            );
          }
          navigate(c, g) {
            if (Array.isArray(c)) return this.router.navigate(c, g);
            {
              const M = this.serializer.parse(c.toString());
              return (
                void 0 !== g.queryParams &&
                  (M.queryParams = Object.assign({}, g.queryParams)),
                void 0 !== g.fragment && (M.fragment = g.fragment),
                this.router.navigateByUrl(M, g)
              );
            }
          }
        }
        return (
          (a.ɵfac = function (c) {
            return new (c || a)(
              o.LFG(Do),
              o.LFG(ft.Ye),
              o.LFG(Ee.Hx),
              o.LFG(Ee.F0, 8)
            );
          }),
          (a.ɵprov = o.Yz7({ token: a, factory: a.ɵfac, providedIn: 'root' })),
          a
        );
      })();
      const vr = (a, _, c) => {
          if (!1 !== _) {
            if (void 0 !== c) return c;
            if ('forward' === a || 'back' === a) return a;
            if ('root' === a && !0 === _) return 'forward';
          }
        },
        Qo = 'auto',
        cr = void 0;
      let oo = (() => {
        class a {
          constructor(c, g, M, Me, Je, Qe, Ct, $t, qt, Qt, zn, xr, Fr) {
            (this.parentContexts = c),
              (this.location = g),
              (this.config = Je),
              (this.navCtrl = Qe),
              (this.componentFactoryResolver = Ct),
              (this.parentOutlet = Fr),
              (this.activated = null),
              (this.activatedView = null),
              (this._activatedRoute = null),
              (this.proxyMap = new WeakMap()),
              (this.currentActivatedRoute$ = new Ve.X(null)),
              (this.stackEvents = new o.vpe()),
              (this.activateEvents = new o.vpe()),
              (this.deactivateEvents = new o.vpe()),
              (this.nativeEl = qt.nativeElement),
              (this.name = M || Ee.eC),
              (this.tabsPrefix = 'true' === Me ? eo(Qt, xr) : void 0),
              (this.stackCtrl = new jr(
                this.tabsPrefix,
                this.nativeEl,
                Qt,
                Qe,
                zn,
                $t
              )),
              c.onChildOutletCreated(this.name, this);
          }
          set animation(c) {
            this.nativeEl.animation = c;
          }
          set animated(c) {
            this.nativeEl.animated = c;
          }
          set swipeGesture(c) {
            (this._swipeGesture = c),
              (this.nativeEl.swipeHandler = c
                ? {
                    canStart: () =>
                      this.stackCtrl.canGoBack(1) &&
                      !this.stackCtrl.hasRunningTask(),
                    onStart: () => this.stackCtrl.startBackTransition(),
                    onEnd: (g) => this.stackCtrl.endBackTransition(g),
                  }
                : void 0);
          }
          ngOnDestroy() {
            this.stackCtrl.destroy();
          }
          getContext() {
            return this.parentContexts.getContext(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const c = this.getContext();
              c?.route && this.activateWith(c.route, c.resolver || null);
            }
            new Promise((c) => (0, le.c)(this.nativeEl, c)).then(() => {
              void 0 === this._swipeGesture &&
                (this.swipeGesture = this.config.getBoolean(
                  'swipeBackEnabled',
                  'ios' === this.nativeEl.mode
                ));
            });
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error('Outlet is not activated');
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error('Outlet is not activated');
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            throw new Error('incompatible reuse strategy');
          }
          attach(c, g) {
            throw new Error('incompatible reuse strategy');
          }
          deactivate() {
            if (this.activated) {
              if (this.activatedView) {
                const g = this.getContext();
                this.activatedView.savedData = new Map(g.children.contexts);
                const M = this.activatedView.savedData.get('primary');
                if (
                  (M && g.route && (M.route = Object.assign({}, g.route)),
                  (this.activatedView.savedExtras = {}),
                  g.route)
                ) {
                  const Me = g.route.snapshot;
                  (this.activatedView.savedExtras.queryParams = Me.queryParams),
                    (this.activatedView.savedExtras.fragment = Me.fragment);
                }
              }
              const c = this.component;
              (this.activatedView = null),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(c);
            }
          }
          activateWith(c, g) {
            var M;
            if (this.isActivated)
              throw new Error('Cannot activate an already activated outlet');
            this._activatedRoute = c;
            let Me,
              Je = this.stackCtrl.getExistingView(c);
            if (Je) {
              Me = this.activated = Je.ref;
              const Qe = Je.savedData;
              Qe && (this.getContext().children.contexts = Qe),
                this.updateActivatedRouteProxy(Me.instance, c);
            } else {
              const Qe = c._futureSnapshot;
              if (
                null == Qe.routeConfig.component &&
                null == this.environmentInjector
              )
                return void console.warn(
                  '[Ionic Warning]: You must supply an environmentInjector to use standalone components with routing:\n\nIn your component class, add:\n\n   import { EnvironmentInjector } from \'@angular/core\';\n   constructor(public environmentInjector: EnvironmentInjector) {}\n\nIn your router outlet template, add:\n\n   <ion-router-outlet [environmentInjector]="environmentInjector"></ion-router-outlet>\n\nAlternatively, if you are routing within ion-tabs:\n\n   <ion-tabs [environmentInjector]="environmentInjector"></ion-tabs>'
                );
              const Ct = this.parentContexts.getOrCreateContext(
                  this.name
                ).children,
                $t = new Ve.X(null),
                qt = this.createActivatedRouteProxy($t, c),
                Qt = new Br(qt, Ct, this.location.injector),
                zn =
                  null !== (M = Qe.routeConfig.component) && void 0 !== M
                    ? M
                    : Qe.component;
              if ((g = g || this.componentFactoryResolver) && cn(g)) {
                const xr = g.resolveComponentFactory(zn);
                Me = this.activated = this.location.createComponent(
                  xr,
                  this.location.length,
                  Qt
                );
              } else
                Me = this.activated = this.location.createComponent(zn, {
                  index: this.location.length,
                  injector: Qt,
                  environmentInjector: g ?? this.environmentInjector,
                });
              $t.next(Me.instance),
                (Je = this.stackCtrl.createView(this.activated, c)),
                this.proxyMap.set(Me.instance, qt),
                this.currentActivatedRoute$.next({
                  component: Me.instance,
                  activatedRoute: c,
                });
            }
            (this.activatedView = Je),
              this.navCtrl.setTopOutlet(this),
              this.stackCtrl.setActive(Je).then((Qe) => {
                this.activateEvents.emit(Me.instance),
                  this.stackEvents.emit(Qe);
              });
          }
          canGoBack(c = 1, g) {
            return this.stackCtrl.canGoBack(c, g);
          }
          pop(c = 1, g) {
            return this.stackCtrl.pop(c, g);
          }
          getLastUrl(c) {
            const g = this.stackCtrl.getLastUrl(c);
            return g ? g.url : void 0;
          }
          getLastRouteView(c) {
            return this.stackCtrl.getLastUrl(c);
          }
          getRootView(c) {
            return this.stackCtrl.getRootUrl(c);
          }
          getActiveStackId() {
            return this.stackCtrl.getActiveStackId();
          }
          createActivatedRouteProxy(c, g) {
            const M = new Ee.gz();
            return (
              (M._futureSnapshot = g._futureSnapshot),
              (M._routerState = g._routerState),
              (M.snapshot = g.snapshot),
              (M.outlet = g.outlet),
              (M.component = g.component),
              (M._paramMap = this.proxyObservable(c, 'paramMap')),
              (M._queryParamMap = this.proxyObservable(c, 'queryParamMap')),
              (M.url = this.proxyObservable(c, 'url')),
              (M.params = this.proxyObservable(c, 'params')),
              (M.queryParams = this.proxyObservable(c, 'queryParams')),
              (M.fragment = this.proxyObservable(c, 'fragment')),
              (M.data = this.proxyObservable(c, 'data')),
              M
            );
          }
          proxyObservable(c, g) {
            return c.pipe(
              (0, J.h)((M) => !!M),
              (0, oe.w)((M) =>
                this.currentActivatedRoute$.pipe(
                  (0, J.h)((Me) => null !== Me && Me.component === M),
                  (0, oe.w)((Me) => Me && Me.activatedRoute[g]),
                  (function nt(a, _ = he.y) {
                    return (
                      (a = a ?? Ke),
                      (0, be.e)((c, g) => {
                        let M,
                          Me = !0;
                        c.subscribe(
                          (0, Ye.x)(g, (Je) => {
                            const Qe = _(Je);
                            (Me || !a(M, Qe)) &&
                              ((Me = !1), (M = Qe), g.next(Je));
                          })
                        );
                      })
                    );
                  })()
                )
              )
            );
          }
          updateActivatedRouteProxy(c, g) {
            const M = this.proxyMap.get(c);
            if (!M)
              throw new Error('Could not find activated route proxy for view');
            (M._futureSnapshot = g._futureSnapshot),
              (M._routerState = g._routerState),
              (M.snapshot = g.snapshot),
              (M.outlet = g.outlet),
              (M.component = g.component),
              this.currentActivatedRoute$.next({
                component: c,
                activatedRoute: g,
              });
          }
        }
        return (
          (a.ɵfac = function (c) {
            return new (c || a)(
              o.Y36(Ee.y6),
              o.Y36(o.s_b),
              o.$8M('name'),
              o.$8M('tabs'),
              o.Y36(yo),
              o.Y36(mr),
              o.Y36(o._Vd, 8),
              o.Y36(ft.Ye),
              o.Y36(o.SBq),
              o.Y36(Ee.F0),
              o.Y36(o.R0b),
              o.Y36(Ee.gz),
              o.Y36(a, 12)
            );
          }),
          (a.ɵdir = o.lG2({
            type: a,
            selectors: [['ion-router-outlet']],
            inputs: {
              animated: 'animated',
              animation: 'animation',
              mode: 'mode',
              swipeGesture: 'swipeGesture',
              environmentInjector: 'environmentInjector',
            },
            outputs: {
              stackEvents: 'stackEvents',
              activateEvents: 'activate',
              deactivateEvents: 'deactivate',
            },
            exportAs: ['outlet'],
          })),
          a
        );
      })();
      class Br {
        constructor(_, c, g) {
          (this.route = _), (this.childContexts = c), (this.parent = g);
        }
        get(_, c) {
          return _ === Ee.gz
            ? this.route
            : _ === Ee.y6
            ? this.childContexts
            : this.parent.get(_, c);
        }
      }
      let Eo = (() => {
        class a {
          constructor(c, g, M, Me, Je) {
            (this.locationStrategy = c),
              (this.navCtrl = g),
              (this.elementRef = M),
              (this.router = Me),
              (this.routerLink = Je),
              (this.routerDirection = 'forward');
          }
          ngOnInit() {
            this.updateTargetUrlAndHref();
          }
          ngOnChanges() {
            this.updateTargetUrlAndHref();
          }
          updateTargetUrlAndHref() {
            var c;
            if (null !== (c = this.routerLink) && void 0 !== c && c.urlTree) {
              const g = this.locationStrategy.prepareExternalUrl(
                this.router.serializeUrl(this.routerLink.urlTree)
              );
              this.elementRef.nativeElement.href = g;
            }
          }
          onClick(c) {
            this.navCtrl.setDirection(
              this.routerDirection,
              void 0,
              void 0,
              this.routerAnimation
            ),
              c.preventDefault();
          }
        }
        return (
          (a.ɵfac = function (c) {
            return new (c || a)(
              o.Y36(ft.S$),
              o.Y36(mr),
              o.Y36(o.SBq),
              o.Y36(Ee.F0),
              o.Y36(Ee.rH, 8)
            );
          }),
          (a.ɵdir = o.lG2({
            type: a,
            selectors: [['', 'routerLink', '', 5, 'a', 5, 'area']],
            hostBindings: function (c, g) {
              1 & c &&
                o.NdJ('click', function (Me) {
                  return g.onClick(Me);
                });
            },
            inputs: {
              routerDirection: 'routerDirection',
              routerAnimation: 'routerAnimation',
            },
            features: [o.TTD],
          })),
          a
        );
      })();
      class Yr {
        constructor(_) {
          this.ctrl = _;
        }
        create(_) {
          return this.ctrl.create(_ || {});
        }
        dismiss(_, c, g) {
          return this.ctrl.dismiss(_, c, g);
        }
        getTop() {
          return this.ctrl.getTop();
        }
      }
      let Jn = (() => {
        class a extends Yr {
          constructor() {
            super(V.a);
          }
        }
        return (
          (a.ɵfac = function (c) {
            return new (c || a)();
          }),
          (a.ɵprov = o.Yz7({ token: a, factory: a.ɵfac, providedIn: 'root' })),
          a
        );
      })();
      class Un {}
      let qr = (() => {
          class a extends Yr {
            constructor(c, g, M, Me) {
              super(V.m),
                (this.angularDelegate = c),
                (this.resolver = g),
                (this.injector = M),
                (this.environmentInjector = Me);
            }
            create(c) {
              var g;
              return super.create(
                Object.assign(Object.assign({}, c), {
                  delegate: this.angularDelegate.create(
                    null !== (g = this.resolver) && void 0 !== g
                      ? g
                      : this.environmentInjector,
                    this.injector
                  ),
                })
              );
            }
          }
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(
                o.LFG(vn),
                o.LFG(o._Vd),
                o.LFG(o.zs3),
                o.LFG(Un, 8)
              );
            }),
            (a.ɵprov = o.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        Rr = (() => {
          class a extends Yr {
            constructor(c, g, M, Me) {
              super(V.c),
                (this.angularDelegate = c),
                (this.resolver = g),
                (this.injector = M),
                (this.environmentInjector = Me);
            }
            create(c) {
              var g;
              return super.create(
                Object.assign(Object.assign({}, c), {
                  delegate: this.angularDelegate.create(
                    null !== (g = this.resolver) && void 0 !== g
                      ? g
                      : this.environmentInjector,
                    this.injector
                  ),
                })
              );
            }
          }
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(
                o.LFG(vn),
                o.LFG(o._Vd),
                o.LFG(o.zs3),
                o.LFG(Un, 8)
              );
            }),
            (a.ɵprov = o.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })();
      class b {
        shouldDetach(_) {
          return !1;
        }
        shouldAttach(_) {
          return !1;
        }
        store(_, c) {}
        retrieve(_) {
          return null;
        }
        shouldReuseRoute(_, c) {
          if (_.routeConfig !== c.routeConfig) return !1;
          const g = _.params,
            M = c.params,
            Me = Object.keys(g),
            Je = Object.keys(M);
          if (Me.length !== Je.length) return !1;
          for (const Qe of Me) if (M[Qe] !== g[Qe]) return !1;
          return !0;
        }
      }
      const C = (a, _, c) => () => {
        if (_.defaultView && typeof window < 'u') {
          ((a) => {
            const _ = window,
              c = _.Ionic;
            (c && c.config && 'Object' !== c.config.constructor.name) ||
              ((_.Ionic = _.Ionic || {}),
              (_.Ionic.config = Object.assign(
                Object.assign({}, _.Ionic.config),
                a
              )));
          })(
            Object.assign(Object.assign({}, a), {
              _zoneGate: (Me) => c.run(Me),
            })
          );
          const M =
            '__zone_symbol__addEventListener' in _.body
              ? '__zone_symbol__addEventListener'
              : 'addEventListener';
          return (function bt() {
            var a = [];
            if (typeof window < 'u') {
              var _ = window;
              (!_.customElements ||
                (_.Element &&
                  (!_.Element.prototype.closest ||
                    !_.Element.prototype.matches ||
                    !_.Element.prototype.remove ||
                    !_.Element.prototype.getRootNode))) &&
                a.push(S.e(6748).then(S.t.bind(S, 723, 23))),
                ('function' != typeof Object.assign ||
                  !Object.entries ||
                  !Array.prototype.find ||
                  !Array.prototype.includes ||
                  !String.prototype.startsWith ||
                  !String.prototype.endsWith ||
                  (_.NodeList && !_.NodeList.prototype.forEach) ||
                  !_.fetch ||
                  !(function () {
                    try {
                      var g = new URL('b', 'http://a');
                      return (
                        (g.pathname = 'c%20d'),
                        'http://a/c%20d' === g.href && g.searchParams
                      );
                    } catch {
                      return !1;
                    }
                  })() ||
                  typeof WeakMap > 'u') &&
                  a.push(S.e(2214).then(S.t.bind(S, 4144, 23)));
            }
            return Promise.all(a);
          })().then(() =>
            ((a, _) =>
              typeof window > 'u'
                ? Promise.resolve()
                : (0, Se.p)().then(
                    () => (
                      lt(),
                      (0, Se.b)(
                        JSON.parse(
                          '[["ion-menu_3",[[33,"ion-menu-button",{"color":[513],"disabled":[4],"menu":[1],"autoHide":[4,"auto-hide"],"type":[1],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]],[33,"ion-menu",{"contentId":[513,"content-id"],"menuId":[513,"menu-id"],"type":[1025],"disabled":[1028],"side":[513],"swipeGesture":[4,"swipe-gesture"],"maxEdgeStart":[2,"max-edge-start"],"isPaneVisible":[32],"isEndSide":[32],"isOpen":[64],"isActive":[64],"open":[64],"close":[64],"toggle":[64],"setOpen":[64]},[[16,"ionSplitPaneVisible","onSplitPaneChanged"],[2,"click","onBackdropClick"],[0,"keydown","onKeydown"]]],[1,"ion-menu-toggle",{"menu":[1],"autoHide":[4,"auto-hide"],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]]]],["ion-fab_3",[[33,"ion-fab-button",{"color":[513],"activated":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1],"show":[4],"translucent":[4],"type":[1],"size":[1],"closeIcon":[1,"close-icon"]}],[1,"ion-fab",{"horizontal":[1],"vertical":[1],"edge":[4],"activated":[1028],"close":[64],"toggle":[64]}],[1,"ion-fab-list",{"activated":[4],"side":[1]}]]],["ion-refresher_2",[[0,"ion-refresher-content",{"pullingIcon":[1025,"pulling-icon"],"pullingText":[1,"pulling-text"],"refreshingSpinner":[1025,"refreshing-spinner"],"refreshingText":[1,"refreshing-text"]}],[32,"ion-refresher",{"pullMin":[2,"pull-min"],"pullMax":[2,"pull-max"],"closeDuration":[1,"close-duration"],"snapbackDuration":[1,"snapback-duration"],"pullFactor":[2,"pull-factor"],"disabled":[4],"nativeRefresher":[32],"state":[32],"complete":[64],"cancel":[64],"getProgress":[64]}]]],["ion-back-button",[[33,"ion-back-button",{"color":[513],"defaultHref":[1025,"default-href"],"disabled":[516],"icon":[1],"text":[1],"type":[1],"routerAnimation":[16]}]]],["ion-toast",[[33,"ion-toast",{"overlayIndex":[2,"overlay-index"],"color":[513],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"duration":[2],"header":[1],"message":[1],"keyboardClose":[4,"keyboard-close"],"position":[1],"buttons":[16],"translucent":[4],"animated":[4],"icon":[1],"htmlAttributes":[16],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["ion-card_5",[[33,"ion-card",{"color":[513],"button":[4],"type":[1],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}],[32,"ion-card-content"],[33,"ion-card-header",{"color":[513],"translucent":[4]}],[33,"ion-card-subtitle",{"color":[513]}],[33,"ion-card-title",{"color":[513]}]]],["ion-item-option_3",[[33,"ion-item-option",{"color":[513],"disabled":[4],"download":[1],"expandable":[4],"href":[1],"rel":[1],"target":[1],"type":[1]}],[32,"ion-item-options",{"side":[1],"fireSwipeEvent":[64]}],[0,"ion-item-sliding",{"disabled":[4],"state":[32],"getOpenAmount":[64],"getSlidingRatio":[64],"open":[64],"close":[64],"closeOpened":[64]}]]],["ion-accordion_2",[[49,"ion-accordion",{"value":[1],"disabled":[4],"readonly":[4],"toggleIcon":[1,"toggle-icon"],"toggleIconSlot":[1,"toggle-icon-slot"],"state":[32],"isNext":[32],"isPrevious":[32]}],[33,"ion-accordion-group",{"animated":[4],"multiple":[4],"value":[1025],"disabled":[4],"readonly":[4],"expand":[1],"requestAccordionToggle":[64],"getAccordions":[64]},[[0,"keydown","onKeydown"]]]]],["ion-breadcrumb_2",[[33,"ion-breadcrumb",{"collapsed":[4],"last":[4],"showCollapsedIndicator":[4,"show-collapsed-indicator"],"color":[1],"active":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"separator":[4],"target":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}],[33,"ion-breadcrumbs",{"color":[1],"maxItems":[2,"max-items"],"itemsBeforeCollapse":[2,"items-before-collapse"],"itemsAfterCollapse":[2,"items-after-collapse"],"collapsed":[32],"activeChanged":[32]},[[0,"collapsedClick","onCollapsedClick"]]]]],["ion-infinite-scroll_2",[[32,"ion-infinite-scroll-content",{"loadingSpinner":[1025,"loading-spinner"],"loadingText":[1,"loading-text"]}],[0,"ion-infinite-scroll",{"threshold":[1],"disabled":[4],"position":[1],"isLoading":[32],"complete":[64]}]]],["ion-reorder_2",[[33,"ion-reorder",null,[[2,"click","onClick"]]],[0,"ion-reorder-group",{"disabled":[4],"state":[32],"complete":[64]}]]],["ion-segment_2",[[33,"ion-segment-button",{"disabled":[4],"layout":[1],"type":[1],"value":[1],"checked":[32]}],[33,"ion-segment",{"color":[513],"disabled":[4],"scrollable":[4],"swipeGesture":[4,"swipe-gesture"],"value":[1025],"selectOnFocus":[4,"select-on-focus"],"activated":[32]},[[0,"keydown","onKeyDown"]]]]],["ion-tab-bar_2",[[33,"ion-tab-button",{"disabled":[4],"download":[1],"href":[1],"rel":[1],"layout":[1025],"selected":[1028],"tab":[1],"target":[1]},[[8,"ionTabBarChanged","onTabBarChanged"]]],[33,"ion-tab-bar",{"color":[513],"selectedTab":[1,"selected-tab"],"translucent":[4],"keyboardVisible":[32]}]]],["ion-chip",[[1,"ion-chip",{"color":[513],"outline":[4],"disabled":[4]}]]],["ion-datetime-button",[[33,"ion-datetime-button",{"color":[513],"disabled":[516],"datetime":[1],"datetimePresentation":[32],"dateText":[32],"timeText":[32],"datetimeActive":[32],"selectedButton":[32]}]]],["ion-input",[[34,"ion-input",{"fireFocusEvents":[4,"fire-focus-events"],"color":[513],"accept":[1],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"autofocus":[4],"clearInput":[4,"clear-input"],"clearOnEdit":[4,"clear-on-edit"],"debounce":[2],"disabled":[4],"enterkeyhint":[1],"inputmode":[1],"max":[8],"maxlength":[2],"min":[8],"minlength":[2],"multiple":[4],"name":[1],"pattern":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"step":[1],"size":[2],"type":[1],"value":[1032],"hasFocus":[32],"setFocus":[64],"setBlur":[64],"getInputElement":[64]}]]],["ion-searchbar",[[34,"ion-searchbar",{"color":[513],"animated":[4],"autocomplete":[1],"autocorrect":[1],"cancelButtonIcon":[1,"cancel-button-icon"],"cancelButtonText":[1,"cancel-button-text"],"clearIcon":[1,"clear-icon"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"placeholder":[1],"searchIcon":[1,"search-icon"],"showCancelButton":[1,"show-cancel-button"],"showClearButton":[1,"show-clear-button"],"spellcheck":[4],"type":[1],"value":[1025],"focused":[32],"noAnimate":[32],"setFocus":[64],"getInputElement":[64]}]]],["ion-toggle",[[33,"ion-toggle",{"color":[513],"name":[1],"checked":[1028],"disabled":[4],"value":[1],"enableOnOffLabels":[4,"enable-on-off-labels"],"activated":[32]}]]],["ion-avatar_3",[[33,"ion-avatar"],[33,"ion-badge",{"color":[513]}],[1,"ion-thumbnail"]]],["ion-textarea",[[34,"ion-textarea",{"fireFocusEvents":[4,"fire-focus-events"],"color":[513],"autocapitalize":[1],"autofocus":[4],"clearOnEdit":[1028,"clear-on-edit"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"cols":[2],"rows":[2],"wrap":[1],"autoGrow":[516,"auto-grow"],"value":[1025],"hasFocus":[32],"setFocus":[64],"setBlur":[64],"getInputElement":[64]}]]],["ion-backdrop",[[33,"ion-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]],["ion-loading",[[34,"ion-loading",{"overlayIndex":[2,"overlay-index"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"message":[1],"cssClass":[1,"css-class"],"duration":[2],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"spinner":[1025],"translucent":[4],"animated":[4],"htmlAttributes":[16],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["ion-modal",[[33,"ion-modal",{"hasController":[4,"has-controller"],"overlayIndex":[2,"overlay-index"],"delegate":[16],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"breakpoints":[16],"initialBreakpoint":[2,"initial-breakpoint"],"backdropBreakpoint":[2,"backdrop-breakpoint"],"handle":[4],"handleBehavior":[1,"handle-behavior"],"component":[1],"componentProps":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"animated":[4],"swipeToClose":[4,"swipe-to-close"],"presentingElement":[16],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"keepContentsMounted":[4,"keep-contents-mounted"],"canDismiss":[4,"can-dismiss"],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"setCurrentBreakpoint":[64],"getCurrentBreakpoint":[64]}]]],["ion-route_4",[[0,"ion-route",{"url":[1],"component":[1],"componentProps":[16],"beforeLeave":[16],"beforeEnter":[16]}],[0,"ion-route-redirect",{"from":[1],"to":[1]}],[0,"ion-router",{"root":[1],"useHash":[4,"use-hash"],"canTransition":[64],"push":[64],"back":[64],"printDebug":[64],"navChanged":[64]},[[8,"popstate","onPopState"],[4,"ionBackButton","onBackButton"]]],[1,"ion-router-link",{"color":[513],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}]]],["ion-col_3",[[1,"ion-col",{"offset":[1],"offsetXs":[1,"offset-xs"],"offsetSm":[1,"offset-sm"],"offsetMd":[1,"offset-md"],"offsetLg":[1,"offset-lg"],"offsetXl":[1,"offset-xl"],"pull":[1],"pullXs":[1,"pull-xs"],"pullSm":[1,"pull-sm"],"pullMd":[1,"pull-md"],"pullLg":[1,"pull-lg"],"pullXl":[1,"pull-xl"],"push":[1],"pushXs":[1,"push-xs"],"pushSm":[1,"push-sm"],"pushMd":[1,"push-md"],"pushLg":[1,"push-lg"],"pushXl":[1,"push-xl"],"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"]},[[9,"resize","onResize"]]],[1,"ion-grid",{"fixed":[4]}],[1,"ion-row"]]],["ion-nav_2",[[1,"ion-nav",{"delegate":[16],"swipeGesture":[1028,"swipe-gesture"],"animated":[4],"animation":[16],"rootParams":[16],"root":[1],"push":[64],"insert":[64],"insertPages":[64],"pop":[64],"popTo":[64],"popToRoot":[64],"removeIndex":[64],"setRoot":[64],"setPages":[64],"setRouteId":[64],"getRouteId":[64],"getActive":[64],"getByIndex":[64],"canGoBack":[64],"getPrevious":[64]}],[0,"ion-nav-link",{"component":[1],"componentProps":[16],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}]]],["ion-slide_2",[[0,"ion-slide"],[36,"ion-slides",{"options":[8],"pager":[4],"scrollbar":[4],"update":[64],"updateAutoHeight":[64],"slideTo":[64],"slideNext":[64],"slidePrev":[64],"getActiveIndex":[64],"getPreviousIndex":[64],"length":[64],"isEnd":[64],"isBeginning":[64],"startAutoplay":[64],"stopAutoplay":[64],"lockSwipeToNext":[64],"lockSwipeToPrev":[64],"lockSwipes":[64],"getSwiper":[64]}]]],["ion-tab_2",[[1,"ion-tab",{"active":[1028],"delegate":[16],"tab":[1],"component":[1],"setActive":[64]}],[1,"ion-tabs",{"useRouter":[1028,"use-router"],"selectedTab":[32],"select":[64],"getTab":[64],"getSelected":[64],"setRouteId":[64],"getRouteId":[64]}]]],["ion-img",[[1,"ion-img",{"alt":[1],"src":[1],"loadSrc":[32],"loadError":[32]}]]],["ion-progress-bar",[[33,"ion-progress-bar",{"type":[1],"reversed":[4],"value":[2],"buffer":[2],"color":[513]}]]],["ion-range",[[33,"ion-range",{"color":[513],"debounce":[2],"name":[1],"dualKnobs":[4,"dual-knobs"],"min":[2],"max":[2],"pin":[4],"pinFormatter":[16],"snaps":[4],"step":[2],"ticks":[4],"activeBarStart":[1026,"active-bar-start"],"disabled":[4],"value":[1026],"ratioA":[32],"ratioB":[32],"pressedKnob":[32]}]]],["ion-split-pane",[[33,"ion-split-pane",{"contentId":[513,"content-id"],"disabled":[4],"when":[8],"visible":[32]}]]],["ion-text",[[1,"ion-text",{"color":[513]}]]],["ion-virtual-scroll",[[0,"ion-virtual-scroll",{"approxItemHeight":[2,"approx-item-height"],"approxHeaderHeight":[2,"approx-header-height"],"approxFooterHeight":[2,"approx-footer-height"],"headerFn":[16],"footerFn":[16],"items":[16],"itemHeight":[16],"headerHeight":[16],"footerHeight":[16],"renderItem":[16],"renderHeader":[16],"renderFooter":[16],"nodeRender":[16],"domRender":[16],"totalHeight":[32],"positionForItem":[64],"checkRange":[64],"checkEnd":[64]},[[9,"resize","onResize"]]]]],["ion-picker-column-internal",[[33,"ion-picker-column-internal",{"items":[16],"value":[1032],"color":[513],"numericInput":[4,"numeric-input"],"isActive":[32],"scrollActiveItemIntoView":[64],"setValue":[64]}]]],["ion-picker-internal",[[33,"ion-picker-internal",null,[[1,"touchstart","preventTouchStartPropagation"]]]]],["ion-radio_2",[[33,"ion-radio",{"color":[513],"name":[1],"disabled":[4],"value":[8],"checked":[32],"buttonTabindex":[32],"setFocus":[64],"setButtonTabindex":[64]}],[0,"ion-radio-group",{"allowEmptySelection":[4,"allow-empty-selection"],"name":[1],"value":[1032]},[[4,"keydown","onKeydown"]]]]],["ion-ripple-effect",[[1,"ion-ripple-effect",{"type":[1],"addRipple":[64]}]]],["ion-button_2",[[33,"ion-button",{"color":[513],"buttonType":[1025,"button-type"],"disabled":[516],"expand":[513],"fill":[1537],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"download":[1],"href":[1],"rel":[1],"shape":[513],"size":[513],"strong":[4],"target":[1],"type":[1],"form":[1]}],[1,"ion-icon",{"mode":[1025],"color":[1],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[513],"src":[1],"icon":[8],"size":[1],"lazy":[4],"sanitize":[4],"svgContent":[32],"isVisible":[32],"ariaLabel":[32]}]]],["ion-datetime_3",[[33,"ion-datetime",{"color":[1],"name":[1],"disabled":[4],"readonly":[4],"isDateEnabled":[16],"min":[1025],"max":[1025],"presentation":[1],"cancelText":[1,"cancel-text"],"doneText":[1,"done-text"],"clearText":[1,"clear-text"],"yearValues":[8,"year-values"],"monthValues":[8,"month-values"],"dayValues":[8,"day-values"],"hourValues":[8,"hour-values"],"minuteValues":[8,"minute-values"],"locale":[1],"firstDayOfWeek":[2,"first-day-of-week"],"titleSelectedDatesFormatter":[16],"multiple":[4],"value":[1025],"showDefaultTitle":[4,"show-default-title"],"showDefaultButtons":[4,"show-default-buttons"],"showClearButton":[4,"show-clear-button"],"showDefaultTimeLabel":[4,"show-default-time-label"],"hourCycle":[1,"hour-cycle"],"size":[1],"preferWheel":[4,"prefer-wheel"],"showMonthAndYear":[32],"activeParts":[32],"workingParts":[32],"isPresented":[32],"isTimePopoverOpen":[32],"confirm":[64],"reset":[64],"cancel":[64]}],[34,"ion-picker",{"overlayIndex":[2,"overlay-index"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"columns":[16],"cssClass":[1,"css-class"],"duration":[2],"showBackdrop":[4,"show-backdrop"],"backdropDismiss":[4,"backdrop-dismiss"],"animated":[4],"htmlAttributes":[16],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"getColumn":[64]}],[32,"ion-picker-column",{"col":[16]}]]],["ion-action-sheet",[[34,"ion-action-sheet",{"overlayIndex":[2,"overlay-index"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"header":[1],"subHeader":[1,"sub-header"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["ion-alert",[[34,"ion-alert",{"overlayIndex":[2,"overlay-index"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"header":[1],"subHeader":[1,"sub-header"],"message":[1],"buttons":[16],"inputs":[1040],"backdropDismiss":[4,"backdrop-dismiss"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},[[4,"keydown","onKeydown"]]]]],["ion-popover",[[33,"ion-popover",{"hasController":[4,"has-controller"],"delegate":[16],"overlayIndex":[2,"overlay-index"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"keyboardClose":[4,"keyboard-close"],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"event":[8],"showBackdrop":[4,"show-backdrop"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"triggerAction":[1,"trigger-action"],"trigger":[1],"size":[1],"dismissOnSelect":[4,"dismiss-on-select"],"reference":[1],"side":[1],"alignment":[1025],"arrow":[4],"isOpen":[4,"is-open"],"keyboardEvents":[4,"keyboard-events"],"keepContentsMounted":[4,"keep-contents-mounted"],"presented":[32],"presentFromTrigger":[64],"present":[64],"dismiss":[64],"getParentPopover":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["ion-checkbox",[[33,"ion-checkbox",{"color":[513],"name":[1],"checked":[1028],"indeterminate":[1028],"disabled":[4],"value":[8]}]]],["ion-select_3",[[33,"ion-select",{"disabled":[4],"cancelText":[1,"cancel-text"],"okText":[1,"ok-text"],"placeholder":[1],"name":[1],"selectedText":[1,"selected-text"],"multiple":[4],"interface":[1],"interfaceOptions":[8,"interface-options"],"compareWith":[1,"compare-with"],"value":[1032],"isExpanded":[32],"open":[64]}],[1,"ion-select-option",{"disabled":[4],"value":[8]}],[34,"ion-select-popover",{"header":[1],"subHeader":[1,"sub-header"],"message":[1],"multiple":[4],"options":[16]},[[0,"ionChange","onSelect"]]]]],["ion-app_8",[[0,"ion-app",{"setFocus":[64]}],[1,"ion-content",{"color":[513],"fullscreen":[4],"forceOverscroll":[1028,"force-overscroll"],"scrollX":[4,"scroll-x"],"scrollY":[4,"scroll-y"],"scrollEvents":[4,"scroll-events"],"getScrollElement":[64],"getBackgroundElement":[64],"scrollToTop":[64],"scrollToBottom":[64],"scrollByPoint":[64],"scrollToPoint":[64]},[[8,"appload","onAppLoad"]]],[36,"ion-footer",{"collapse":[1],"translucent":[4],"keyboardVisible":[32]}],[36,"ion-header",{"collapse":[1],"translucent":[4]}],[1,"ion-router-outlet",{"mode":[1025],"delegate":[16],"animated":[4],"animation":[16],"swipeHandler":[16],"commit":[64],"setRouteId":[64],"getRouteId":[64]}],[33,"ion-title",{"color":[513],"size":[1]}],[33,"ion-toolbar",{"color":[513]},[[0,"ionStyle","childrenStyle"]]],[34,"ion-buttons",{"collapse":[4]}]]],["ion-spinner",[[1,"ion-spinner",{"color":[513],"duration":[2],"name":[1],"paused":[4]}]]],["ion-item_8",[[33,"ion-item-divider",{"color":[513],"sticky":[4]}],[32,"ion-item-group"],[1,"ion-skeleton-text",{"animated":[4]}],[32,"ion-list",{"lines":[1],"inset":[4],"closeSlidingItems":[64]}],[33,"ion-list-header",{"color":[513],"lines":[1]}],[49,"ion-item",{"color":[513],"button":[4],"detail":[4],"detailIcon":[1,"detail-icon"],"disabled":[4],"download":[1],"fill":[1],"shape":[1],"href":[1],"rel":[1],"lines":[1],"counter":[4],"routerAnimation":[16],"routerDirection":[1,"router-direction"],"target":[1],"type":[1],"counterFormatter":[16],"multipleInputs":[32],"focusable":[32],"counterString":[32]},[[0,"ionChange","handleIonChange"],[0,"ionColor","labelColorChanged"],[0,"ionStyle","itemStyle"]]],[34,"ion-label",{"color":[513],"position":[1],"noAnimate":[32]}],[33,"ion-note",{"color":[513]}]]]]'
                        ),
                        _
                      )
                    )
                  ))(0, {
              exclude: ['ion-tabs', 'ion-tab'],
              syncQueue: !0,
              raf: Pt,
              jmp: (Me) => c.runOutsideAngular(Me),
              ael(Me, Je, Qe, Ct) {
                Me[M](Je, Qe, Ct);
              },
              rel(Me, Je, Qe, Ct) {
                Me.removeEventListener(Je, Qe, Ct);
              },
            })
          );
        }
      };
      let Oe = (() => {
        class a {
          static forRoot(c) {
            return {
              ngModule: a,
              providers: [
                { provide: Zo, useValue: c },
                {
                  provide: o.ip1,
                  useFactory: C,
                  multi: !0,
                  deps: [Zo, ft.K0, o.R0b],
                },
              ],
            };
          }
        }
        return (
          (a.ɵfac = function (c) {
            return new (c || a)();
          }),
          (a.ɵmod = o.oAB({ type: a })),
          (a.ɵinj = o.cJS({ providers: [vn, qr, Rr], imports: [[ft.ez]] })),
          a
        );
      })();
    },
    8834: (at, ke, S) => {
      'use strict';
      S.d(ke, { c: () => $e });
      var o = S(5730),
        N = S(3457);
      let j;
      const ge = (me) =>
          me.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
        Ne = (me) => {
          if (void 0 === j) {
            const Ve = void 0 !== me.style.webkitAnimationName;
            j = void 0 === me.style.animationName && Ve ? '-webkit-' : '';
          }
          return j;
        },
        re = (me, ee, Ve) => {
          const Ee = ee.startsWith('animation') ? Ne(me) : '';
          me.style.setProperty(Ee + ee, Ve);
        },
        Fe = (me, ee) => {
          const Ve = ee.startsWith('animation') ? Ne(me) : '';
          me.style.removeProperty(Ve + ee);
        },
        De = [],
        ve = (me = [], ee) => {
          if (void 0 !== ee) {
            const Ve = Array.isArray(ee) ? ee : [ee];
            return [...me, ...Ve];
          }
          return me;
        },
        $e = (me) => {
          let ee,
            Ve,
            Ee,
            ye,
            ae,
            Te,
            B,
            k,
            F,
            J,
            oe,
            nt,
            Ke,
            de = [],
            q = [],
            le = [],
            fe = !1,
            V = {},
            W = [],
            G = [],
            Se = {},
            pe = 0,
            We = !1,
            se = !1,
            he = !0,
            be = !1,
            Ye = !0,
            ft = !1;
          const bt = me,
            lt = [],
            Ft = [],
            Mt = [],
            ze = [],
            Lt = [],
            bn = [],
            jn = [],
            st = [],
            Ln = [],
            Pt = [],
            cn =
              'function' == typeof AnimationEffect ||
              (void 0 !== N.w && 'function' == typeof N.w.AnimationEffect),
            Xt =
              'function' == typeof Element &&
              'function' == typeof Element.prototype.animate &&
              cn,
            Jt = () => Pt,
            Vt = (L, Q) => (
              (Q?.oneTimeCallback ? Ft : lt).push({ c: L, o: Q }), Ke
            ),
            At = () => {
              if (Xt)
                Pt.forEach((L) => {
                  L.cancel();
                }),
                  (Pt.length = 0);
              else {
                const L = Mt.slice();
                (0, o.r)(() => {
                  L.forEach((Q) => {
                    Fe(Q, 'animation-name'),
                      Fe(Q, 'animation-duration'),
                      Fe(Q, 'animation-timing-function'),
                      Fe(Q, 'animation-iteration-count'),
                      Fe(Q, 'animation-delay'),
                      Fe(Q, 'animation-play-state'),
                      Fe(Q, 'animation-fill-mode'),
                      Fe(Q, 'animation-direction');
                  });
                });
              }
            },
            un = () => {
              Lt.forEach((L) => {
                L?.parentNode && L.parentNode.removeChild(L);
              }),
                (Lt.length = 0);
            },
            jt = () => (void 0 !== ae ? ae : B ? B.getFill() : 'both'),
            on = () =>
              void 0 !== F
                ? F
                : void 0 !== Te
                ? Te
                : B
                ? B.getDirection()
                : 'normal',
            sn = () =>
              We ? 'linear' : void 0 !== Ee ? Ee : B ? B.getEasing() : 'linear',
            Dt = () =>
              se
                ? 0
                : void 0 !== J
                ? J
                : void 0 !== Ve
                ? Ve
                : B
                ? B.getDuration()
                : 0,
            wn = () => (void 0 !== ye ? ye : B ? B.getIterations() : 1),
            An = () =>
              void 0 !== oe ? oe : void 0 !== ee ? ee : B ? B.getDelay() : 0,
            an = () => {
              0 !== pe &&
                (pe--,
                0 === pe &&
                  ((() => {
                    yn(), st.forEach((xe) => xe()), Ln.forEach((xe) => xe());
                    const L = he ? 1 : 0,
                      Q = W,
                      ie = G,
                      Be = Se;
                    Mt.forEach((xe) => {
                      const rt = xe.classList;
                      Q.forEach((ot) => rt.add(ot)),
                        ie.forEach((ot) => rt.remove(ot));
                      for (const ot in Be)
                        Be.hasOwnProperty(ot) && re(xe, ot, Be[ot]);
                    }),
                      lt.forEach((xe) => xe.c(L, Ke)),
                      Ft.forEach((xe) => xe.c(L, Ke)),
                      (Ft.length = 0),
                      (Ye = !0),
                      he && (be = !0),
                      (he = !0);
                  })(),
                  B && B.animationFinish()));
            },
            ln = (L = !0) => {
              un();
              const Q = ((me) => (
                me.forEach((ee) => {
                  for (const Ve in ee)
                    if (ee.hasOwnProperty(Ve)) {
                      const Ee = ee[Ve];
                      if ('easing' === Ve)
                        (ee['animation-timing-function'] = Ee), delete ee[Ve];
                      else {
                        const ye = ge(Ve);
                        ye !== Ve && ((ee[ye] = Ee), delete ee[Ve]);
                      }
                    }
                }),
                me
              ))(de);
              Mt.forEach((ie) => {
                if (Q.length > 0) {
                  const Be = ((me = []) =>
                    me
                      .map((ee) => {
                        const Ve = ee.offset,
                          Ee = [];
                        for (const ye in ee)
                          ee.hasOwnProperty(ye) &&
                            'offset' !== ye &&
                            Ee.push(`${ye}: ${ee[ye]};`);
                        return `${100 * Ve}% { ${Ee.join(' ')} }`;
                      })
                      .join(' '))(Q);
                  nt =
                    void 0 !== me
                      ? me
                      : ((me) => {
                          let ee = De.indexOf(me);
                          return (
                            ee < 0 && (ee = De.push(me) - 1),
                            `ion-animation-${ee}`
                          );
                        })(Be);
                  const xe = ((me, ee, Ve) => {
                    var Ee;
                    const ye = ((me) => {
                        const ee =
                          void 0 !== me.getRootNode ? me.getRootNode() : me;
                        return ee.head || ee;
                      })(Ve),
                      ae = Ne(Ve),
                      Te = ye.querySelector('#' + me);
                    if (Te) return Te;
                    const de = (
                      null !== (Ee = Ve.ownerDocument) && void 0 !== Ee
                        ? Ee
                        : document
                    ).createElement('style');
                    return (
                      (de.id = me),
                      (de.textContent = `@${ae}keyframes ${me} { ${ee} } @${ae}keyframes ${me}-alt { ${ee} }`),
                      ye.appendChild(de),
                      de
                    );
                  })(nt, Be, ie);
                  Lt.push(xe),
                    re(ie, 'animation-duration', `${Dt()}ms`),
                    re(ie, 'animation-timing-function', sn()),
                    re(ie, 'animation-delay', `${An()}ms`),
                    re(ie, 'animation-fill-mode', jt()),
                    re(ie, 'animation-direction', on());
                  const rt = wn() === 1 / 0 ? 'infinite' : wn().toString();
                  re(ie, 'animation-iteration-count', rt),
                    re(ie, 'animation-play-state', 'paused'),
                    L && re(ie, 'animation-name', `${xe.id}-alt`),
                    (0, o.r)(() => {
                      re(ie, 'animation-name', xe.id || null);
                    });
                }
              });
            },
            Tn = (L = !0) => {
              (() => {
                bn.forEach((Be) => Be()), jn.forEach((Be) => Be());
                const L = q,
                  Q = le,
                  ie = V;
                Mt.forEach((Be) => {
                  const xe = Be.classList;
                  L.forEach((rt) => xe.add(rt)),
                    Q.forEach((rt) => xe.remove(rt));
                  for (const rt in ie)
                    ie.hasOwnProperty(rt) && re(Be, rt, ie[rt]);
                });
              })(),
                de.length > 0 &&
                  (Xt
                    ? (Mt.forEach((L) => {
                        const Q = L.animate(de, {
                          id: bt,
                          delay: An(),
                          duration: Dt(),
                          easing: sn(),
                          iterations: wn(),
                          fill: jt(),
                          direction: on(),
                        });
                        Q.pause(), Pt.push(Q);
                      }),
                      Pt.length > 0 &&
                        (Pt[0].onfinish = () => {
                          an();
                        }))
                    : ln(L)),
                (fe = !0);
            },
            pn = (L) => {
              if (((L = Math.min(Math.max(L, 0), 0.9999)), Xt))
                Pt.forEach((Q) => {
                  (Q.currentTime =
                    Q.effect.getComputedTiming().delay + Dt() * L),
                    Q.pause();
                });
              else {
                const Q = `-${Dt() * L}ms`;
                Mt.forEach((ie) => {
                  de.length > 0 &&
                    (re(ie, 'animation-delay', Q),
                    re(ie, 'animation-play-state', 'paused'));
                });
              }
            },
            On = (L) => {
              Pt.forEach((Q) => {
                Q.effect.updateTiming({
                  delay: An(),
                  duration: Dt(),
                  easing: sn(),
                  iterations: wn(),
                  fill: jt(),
                  direction: on(),
                });
              }),
                void 0 !== L && pn(L);
            },
            Sn = (L = !0, Q) => {
              (0, o.r)(() => {
                Mt.forEach((ie) => {
                  re(ie, 'animation-name', nt || null),
                    re(ie, 'animation-duration', `${Dt()}ms`),
                    re(ie, 'animation-timing-function', sn()),
                    re(
                      ie,
                      'animation-delay',
                      void 0 !== Q ? `-${Q * Dt()}ms` : `${An()}ms`
                    ),
                    re(ie, 'animation-fill-mode', jt() || null),
                    re(ie, 'animation-direction', on() || null);
                  const Be = wn() === 1 / 0 ? 'infinite' : wn().toString();
                  re(ie, 'animation-iteration-count', Be),
                    L && re(ie, 'animation-name', `${nt}-alt`),
                    (0, o.r)(() => {
                      re(ie, 'animation-name', nt || null);
                    });
                });
              });
            },
            gn = (L = !1, Q = !0, ie) => (
              L &&
                ze.forEach((Be) => {
                  Be.update(L, Q, ie);
                }),
              Xt ? On(ie) : Sn(Q, ie),
              Ke
            ),
            Cr = () => {
              fe &&
                (Xt
                  ? Pt.forEach((L) => {
                      L.pause();
                    })
                  : Mt.forEach((L) => {
                      re(L, 'animation-play-state', 'paused');
                    }),
                (ft = !0));
            },
            ar = () => {
              (k = void 0), an();
            },
            yn = () => {
              k && clearTimeout(k);
            },
            T = (L) =>
              new Promise((Q) => {
                L?.sync &&
                  ((se = !0), Vt(() => (se = !1), { oneTimeCallback: !0 })),
                  fe || Tn(),
                  be && (Xt ? (pn(0), On()) : Sn(), (be = !1)),
                  Ye && ((pe = ze.length + 1), (Ye = !1)),
                  Vt(() => Q(), { oneTimeCallback: !0 }),
                  ze.forEach((ie) => {
                    ie.play();
                  }),
                  Xt
                    ? (Pt.forEach((L) => {
                        L.play();
                      }),
                      (0 === de.length || 0 === Mt.length) && an())
                    : (() => {
                        if (
                          (yn(),
                          (0, o.r)(() => {
                            Mt.forEach((L) => {
                              de.length > 0 &&
                                re(L, 'animation-play-state', 'running');
                            });
                          }),
                          0 === de.length || 0 === Mt.length)
                        )
                          an();
                        else {
                          const L = An() || 0,
                            Q = Dt() || 0,
                            ie = wn() || 1;
                          isFinite(ie) &&
                            (k = setTimeout(ar, L + Q * ie + 100)),
                            ((me, ee) => {
                              let Ve;
                              const Ee = { passive: !0 },
                                ae = (Te) => {
                                  me === Te.target &&
                                    (Ve && Ve(),
                                    yn(),
                                    (0, o.r)(() => {
                                      Mt.forEach((L) => {
                                        Fe(L, 'animation-duration'),
                                          Fe(L, 'animation-delay'),
                                          Fe(L, 'animation-play-state');
                                      }),
                                        (0, o.r)(an);
                                    }));
                                };
                              me &&
                                (me.addEventListener(
                                  'webkitAnimationEnd',
                                  ae,
                                  Ee
                                ),
                                me.addEventListener('animationend', ae, Ee),
                                (Ve = () => {
                                  me.removeEventListener(
                                    'webkitAnimationEnd',
                                    ae,
                                    Ee
                                  ),
                                    me.removeEventListener(
                                      'animationend',
                                      ae,
                                      Ee
                                    );
                                }));
                            })(Mt[0]);
                        }
                      })(),
                  (ft = !1);
              }),
            U = (L, Q) => {
              const ie = de[0];
              return (
                void 0 === ie || (void 0 !== ie.offset && 0 !== ie.offset)
                  ? (de = [{ offset: 0, [L]: Q }, ...de])
                  : (ie[L] = Q),
                Ke
              );
            };
          return (Ke = {
            parentAnimation: B,
            elements: Mt,
            childAnimations: ze,
            id: bt,
            animationFinish: an,
            from: U,
            to: (L, Q) => {
              const ie = de[de.length - 1];
              return (
                void 0 === ie || (void 0 !== ie.offset && 1 !== ie.offset)
                  ? (de = [...de, { offset: 1, [L]: Q }])
                  : (ie[L] = Q),
                Ke
              );
            },
            fromTo: (L, Q, ie) => U(L, Q).to(L, ie),
            parent: (L) => ((B = L), Ke),
            play: T,
            pause: () => (
              ze.forEach((L) => {
                L.pause();
              }),
              Cr(),
              Ke
            ),
            stop: () => {
              ze.forEach((L) => {
                L.stop();
              }),
                fe && (At(), (fe = !1)),
                (We = !1),
                (se = !1),
                (Ye = !0),
                (F = void 0),
                (J = void 0),
                (oe = void 0),
                (pe = 0),
                (be = !1),
                (he = !0),
                (ft = !1);
            },
            destroy: (L) => (
              ze.forEach((Q) => {
                Q.destroy(L);
              }),
              ((L) => {
                At(), L && un();
              })(L),
              (Mt.length = 0),
              (ze.length = 0),
              (de.length = 0),
              (lt.length = 0),
              (Ft.length = 0),
              (fe = !1),
              (Ye = !0),
              Ke
            ),
            keyframes: (L) => {
              const Q = de !== L;
              return (
                (de = L),
                Q &&
                  ((L) => {
                    Xt
                      ? Jt().forEach((Q) => {
                          if (Q.effect.setKeyframes) Q.effect.setKeyframes(L);
                          else {
                            const ie = new KeyframeEffect(
                              Q.effect.target,
                              L,
                              Q.effect.getTiming()
                            );
                            Q.effect = ie;
                          }
                        })
                      : ln();
                  })(de),
                Ke
              );
            },
            addAnimation: (L) => {
              if (null != L)
                if (Array.isArray(L))
                  for (const Q of L) Q.parent(Ke), ze.push(Q);
                else L.parent(Ke), ze.push(L);
              return Ke;
            },
            addElement: (L) => {
              if (null != L)
                if (1 === L.nodeType) Mt.push(L);
                else if (L.length >= 0)
                  for (let Q = 0; Q < L.length; Q++) Mt.push(L[Q]);
                else console.error('Invalid addElement value');
              return Ke;
            },
            update: gn,
            fill: (L) => ((ae = L), gn(!0), Ke),
            direction: (L) => ((Te = L), gn(!0), Ke),
            iterations: (L) => ((ye = L), gn(!0), Ke),
            duration: (L) => (!Xt && 0 === L && (L = 1), (Ve = L), gn(!0), Ke),
            easing: (L) => ((Ee = L), gn(!0), Ke),
            delay: (L) => ((ee = L), gn(!0), Ke),
            getWebAnimations: Jt,
            getKeyframes: () => de,
            getFill: jt,
            getDirection: on,
            getDelay: An,
            getIterations: wn,
            getEasing: sn,
            getDuration: Dt,
            afterAddRead: (L) => (st.push(L), Ke),
            afterAddWrite: (L) => (Ln.push(L), Ke),
            afterClearStyles: (L = []) => {
              for (const Q of L) Se[Q] = '';
              return Ke;
            },
            afterStyles: (L = {}) => ((Se = L), Ke),
            afterRemoveClass: (L) => ((G = ve(G, L)), Ke),
            afterAddClass: (L) => ((W = ve(W, L)), Ke),
            beforeAddRead: (L) => (bn.push(L), Ke),
            beforeAddWrite: (L) => (jn.push(L), Ke),
            beforeClearStyles: (L = []) => {
              for (const Q of L) V[Q] = '';
              return Ke;
            },
            beforeStyles: (L = {}) => ((V = L), Ke),
            beforeRemoveClass: (L) => ((le = ve(le, L)), Ke),
            beforeAddClass: (L) => ((q = ve(q, L)), Ke),
            onFinish: Vt,
            isRunning: () => 0 !== pe && !ft,
            progressStart: (L = !1, Q) => (
              ze.forEach((ie) => {
                ie.progressStart(L, Q);
              }),
              Cr(),
              (We = L),
              fe || Tn(),
              gn(!1, !0, Q),
              Ke
            ),
            progressStep: (L) => (
              ze.forEach((Q) => {
                Q.progressStep(L);
              }),
              pn(L),
              Ke
            ),
            progressEnd: (L, Q, ie) => (
              (We = !1),
              ze.forEach((Be) => {
                Be.progressEnd(L, Q, ie);
              }),
              void 0 !== ie && (J = ie),
              (be = !1),
              (he = !0),
              0 === L
                ? ((F = 'reverse' === on() ? 'normal' : 'reverse'),
                  'reverse' === F && (he = !1),
                  Xt
                    ? (gn(), pn(1 - Q))
                    : ((oe = (1 - Q) * Dt() * -1), gn(!1, !1)))
                : 1 === L &&
                  (Xt ? (gn(), pn(Q)) : ((oe = Q * Dt() * -1), gn(!1, !1))),
              void 0 !== L &&
                (Vt(
                  () => {
                    (J = void 0), (F = void 0), (oe = void 0);
                  },
                  { oneTimeCallback: !0 }
                ),
                B || T()),
              Ke
            ),
          });
        };
    },
    4349: (at, ke, S) => {
      'use strict';
      S.d(ke, { G: () => ge });
      class N {
        constructor(re, Fe, Ae, Pe, De) {
          (this.id = Fe),
            (this.name = Ae),
            (this.disableScroll = De),
            (this.priority = 1e6 * Pe + Fe),
            (this.ctrl = re);
        }
        canStart() {
          return !!this.ctrl && this.ctrl.canStart(this.name);
        }
        start() {
          return (
            !!this.ctrl && this.ctrl.start(this.name, this.id, this.priority)
          );
        }
        capture() {
          if (!this.ctrl) return !1;
          const re = this.ctrl.capture(this.name, this.id, this.priority);
          return (
            re && this.disableScroll && this.ctrl.disableScroll(this.id), re
          );
        }
        release() {
          this.ctrl &&
            (this.ctrl.release(this.id),
            this.disableScroll && this.ctrl.enableScroll(this.id));
        }
        destroy() {
          this.release(), (this.ctrl = void 0);
        }
      }
      class j {
        constructor(re, Fe, Ae, Pe) {
          (this.id = Fe),
            (this.disable = Ae),
            (this.disableScroll = Pe),
            (this.ctrl = re);
        }
        block() {
          if (this.ctrl) {
            if (this.disable)
              for (const re of this.disable)
                this.ctrl.disableGesture(re, this.id);
            this.disableScroll && this.ctrl.disableScroll(this.id);
          }
        }
        unblock() {
          if (this.ctrl) {
            if (this.disable)
              for (const re of this.disable)
                this.ctrl.enableGesture(re, this.id);
            this.disableScroll && this.ctrl.enableScroll(this.id);
          }
        }
        destroy() {
          this.unblock(), (this.ctrl = void 0);
        }
      }
      const z = 'backdrop-no-scroll',
        ge = new (class o {
          constructor() {
            (this.gestureId = 0),
              (this.requestedStart = new Map()),
              (this.disabledGestures = new Map()),
              (this.disabledScroll = new Set());
          }
          createGesture(re) {
            var Fe;
            return new N(
              this,
              this.newID(),
              re.name,
              null !== (Fe = re.priority) && void 0 !== Fe ? Fe : 0,
              !!re.disableScroll
            );
          }
          createBlocker(re = {}) {
            return new j(this, this.newID(), re.disable, !!re.disableScroll);
          }
          start(re, Fe, Ae) {
            return this.canStart(re)
              ? (this.requestedStart.set(Fe, Ae), !0)
              : (this.requestedStart.delete(Fe), !1);
          }
          capture(re, Fe, Ae) {
            if (!this.start(re, Fe, Ae)) return !1;
            const Pe = this.requestedStart;
            let De = -1e4;
            if (
              (Pe.forEach((we) => {
                De = Math.max(De, we);
              }),
              De === Ae)
            ) {
              (this.capturedId = Fe), Pe.clear();
              const we = new CustomEvent('ionGestureCaptured', {
                detail: { gestureName: re },
              });
              return document.dispatchEvent(we), !0;
            }
            return Pe.delete(Fe), !1;
          }
          release(re) {
            this.requestedStart.delete(re),
              this.capturedId === re && (this.capturedId = void 0);
          }
          disableGesture(re, Fe) {
            let Ae = this.disabledGestures.get(re);
            void 0 === Ae &&
              ((Ae = new Set()), this.disabledGestures.set(re, Ae)),
              Ae.add(Fe);
          }
          enableGesture(re, Fe) {
            const Ae = this.disabledGestures.get(re);
            void 0 !== Ae && Ae.delete(Fe);
          }
          disableScroll(re) {
            this.disabledScroll.add(re),
              1 === this.disabledScroll.size && document.body.classList.add(z);
          }
          enableScroll(re) {
            this.disabledScroll.delete(re),
              0 === this.disabledScroll.size &&
                document.body.classList.remove(z);
          }
          canStart(re) {
            return !(void 0 !== this.capturedId || this.isDisabled(re));
          }
          isCaptured() {
            return void 0 !== this.capturedId;
          }
          isScrollDisabled() {
            return this.disabledScroll.size > 0;
          }
          isDisabled(re) {
            const Fe = this.disabledGestures.get(re);
            return !!(Fe && Fe.size > 0);
          }
          newID() {
            return this.gestureId++, this.gestureId;
          }
        })();
    },
    7593: (at, ke, S) => {
      'use strict';
      S.r(ke),
        S.d(ke, {
          MENU_BACK_BUTTON_PRIORITY: () => ge,
          OVERLAY_BACK_BUTTON_PRIORITY: () => z,
          blockHardwareBackButton: () => N,
          startHardwareBackButton: () => j,
        });
      var o = S(5861);
      const N = () => {
          document.addEventListener('backbutton', () => {});
        },
        j = () => {
          const Ne = document;
          let re = !1;
          Ne.addEventListener('backbutton', () => {
            if (re) return;
            let Fe = 0,
              Ae = [];
            const Pe = new CustomEvent('ionBackButton', {
              bubbles: !1,
              detail: {
                register(ue, te) {
                  Ae.push({ priority: ue, handler: te, id: Fe++ });
                },
              },
            });
            Ne.dispatchEvent(Pe);
            const De = (function () {
                var ue = (0, o.Z)(function* (te) {
                  try {
                    if (te?.handler) {
                      const ve = te.handler(we);
                      null != ve && (yield ve);
                    }
                  } catch (ve) {
                    console.error(ve);
                  }
                });
                return function (ve) {
                  return ue.apply(this, arguments);
                };
              })(),
              we = () => {
                if (Ae.length > 0) {
                  let ue = {
                    priority: Number.MIN_SAFE_INTEGER,
                    handler: () => {},
                    id: -1,
                  };
                  Ae.forEach((te) => {
                    te.priority >= ue.priority && (ue = te);
                  }),
                    (re = !0),
                    (Ae = Ae.filter((te) => te.id !== ue.id)),
                    De(ue).then(() => (re = !1));
                }
              };
            we();
          });
        },
        z = 100,
        ge = 99;
    },
    5730: (at, ke, S) => {
      'use strict';
      S.d(ke, {
        a: () => re,
        b: () => Fe,
        c: () => j,
        d: () => te,
        e: () => ve,
        f: () => ue,
        g: () => Ae,
        h: () => ye,
        i: () => Ne,
        j: () => z,
        k: () => we,
        l: () => $e,
        m: () => De,
        n: () => me,
        o: () => Ee,
        p: () => Ve,
        q: () => ae,
        r: () => Pe,
        s: () => Te,
        t: () => o,
        u: () => ee,
      });
      const o = (de, q = 0) =>
          new Promise((le) => {
            N(de, q, le);
          }),
        N = (de, q = 0, le) => {
          let fe, B;
          const V = { passive: !0 },
            G = () => {
              fe && fe();
            },
            Se = (pe) => {
              (void 0 === pe || de === pe.target) && (G(), le(pe));
            };
          return (
            de &&
              (de.addEventListener('webkitTransitionEnd', Se, V),
              de.addEventListener('transitionend', Se, V),
              (B = setTimeout(Se, q + 500)),
              (fe = () => {
                B && (clearTimeout(B), (B = void 0)),
                  de.removeEventListener('webkitTransitionEnd', Se, V),
                  de.removeEventListener('transitionend', Se, V);
              })),
            G
          );
        },
        j = (de, q) => {
          de.componentOnReady
            ? de.componentOnReady().then((le) => q(le))
            : Pe(() => q(de));
        },
        z = (de, q = []) => {
          const le = {};
          return (
            q.forEach((fe) => {
              de.hasAttribute(fe) &&
                (null !== de.getAttribute(fe) && (le[fe] = de.getAttribute(fe)),
                de.removeAttribute(fe));
            }),
            le
          );
        },
        ge = [
          'role',
          'aria-activedescendant',
          'aria-atomic',
          'aria-autocomplete',
          'aria-braillelabel',
          'aria-brailleroledescription',
          'aria-busy',
          'aria-checked',
          'aria-colcount',
          'aria-colindex',
          'aria-colindextext',
          'aria-colspan',
          'aria-controls',
          'aria-current',
          'aria-describedby',
          'aria-description',
          'aria-details',
          'aria-disabled',
          'aria-errormessage',
          'aria-expanded',
          'aria-flowto',
          'aria-haspopup',
          'aria-hidden',
          'aria-invalid',
          'aria-keyshortcuts',
          'aria-label',
          'aria-labelledby',
          'aria-level',
          'aria-live',
          'aria-multiline',
          'aria-multiselectable',
          'aria-orientation',
          'aria-owns',
          'aria-placeholder',
          'aria-posinset',
          'aria-pressed',
          'aria-readonly',
          'aria-relevant',
          'aria-required',
          'aria-roledescription',
          'aria-rowcount',
          'aria-rowindex',
          'aria-rowindextext',
          'aria-rowspan',
          'aria-selected',
          'aria-setsize',
          'aria-sort',
          'aria-valuemax',
          'aria-valuemin',
          'aria-valuenow',
          'aria-valuetext',
        ],
        Ne = (de, q) => {
          let le = ge;
          return (
            q && q.length > 0 && (le = le.filter((fe) => !q.includes(fe))),
            z(de, le)
          );
        },
        re = (de, q, le, fe) => {
          var B;
          if (typeof window < 'u') {
            const W =
              null === (B = window?.Ionic) || void 0 === B ? void 0 : B.config;
            if (W) {
              const G = W.get('_ael');
              if (G) return G(de, q, le, fe);
              if (W._ael) return W._ael(de, q, le, fe);
            }
          }
          return de.addEventListener(q, le, fe);
        },
        Fe = (de, q, le, fe) => {
          var B;
          if (typeof window < 'u') {
            const W =
              null === (B = window?.Ionic) || void 0 === B ? void 0 : B.config;
            if (W) {
              const G = W.get('_rel');
              if (G) return G(de, q, le, fe);
              if (W._rel) return W._rel(de, q, le, fe);
            }
          }
          return de.removeEventListener(q, le, fe);
        },
        Ae = (de, q = de) => de.shadowRoot || q,
        Pe = (de) =>
          'function' == typeof __zone_symbol__requestAnimationFrame
            ? __zone_symbol__requestAnimationFrame(de)
            : 'function' == typeof requestAnimationFrame
            ? requestAnimationFrame(de)
            : setTimeout(de),
        De = (de) => !!de.shadowRoot && !!de.attachShadow,
        we = (de) => {
          const q = de.closest('ion-item');
          return q ? q.querySelector('ion-label') : null;
        },
        ue = (de) => {
          if ((de.focus(), de.classList.contains('ion-focusable'))) {
            const q = de.closest('ion-app');
            q && q.setFocus([de]);
          }
        },
        te = (de, q) => {
          let le;
          const fe = de.getAttribute('aria-labelledby'),
            B = de.id;
          let V = null !== fe && '' !== fe.trim() ? fe : q + '-lbl',
            W =
              null !== fe && '' !== fe.trim()
                ? document.getElementById(fe)
                : we(de);
          return (
            W
              ? (null === fe && (W.id = V),
                (le = W.textContent),
                W.setAttribute('aria-hidden', 'true'))
              : '' !== B.trim() &&
                ((W = document.querySelector(`label[for="${B}"]`)),
                W &&
                  ('' !== W.id ? (V = W.id) : (W.id = V = `${B}-lbl`),
                  (le = W.textContent))),
            { label: W, labelId: V, labelText: le }
          );
        },
        ve = (de, q, le, fe, B) => {
          if (de || De(q)) {
            let V = q.querySelector('input.aux-input');
            V ||
              ((V = q.ownerDocument.createElement('input')),
              (V.type = 'hidden'),
              V.classList.add('aux-input'),
              q.appendChild(V)),
              (V.disabled = B),
              (V.name = le),
              (V.value = fe || '');
          }
        },
        $e = (de, q, le) => Math.max(de, Math.min(q, le)),
        me = (de, q) => {
          if (!de) {
            const le = 'ASSERT: ' + q;
            throw (console.error(le), new Error(le));
          }
        },
        ee = (de) => de.timeStamp || Date.now(),
        Ve = (de) => {
          if (de) {
            const q = de.changedTouches;
            if (q && q.length > 0) {
              const le = q[0];
              return { x: le.clientX, y: le.clientY };
            }
            if (void 0 !== de.pageX) return { x: de.pageX, y: de.pageY };
          }
          return { x: 0, y: 0 };
        },
        Ee = (de) => {
          const q = 'rtl' === document.dir;
          switch (de) {
            case 'start':
              return q;
            case 'end':
              return !q;
            default:
              throw new Error(
                `"${de}" is not a valid value for [side]. Use "start" or "end" instead.`
              );
          }
        },
        ye = (de, q) => {
          const le = de._original || de;
          return { _original: de, emit: ae(le.emit.bind(le), q) };
        },
        ae = (de, q = 0) => {
          let le;
          return (...fe) => {
            clearTimeout(le), (le = setTimeout(de, q, ...fe));
          };
        },
        Te = (de, q) => {
          if ((de ?? (de = {}), q ?? (q = {}), de === q)) return !0;
          const le = Object.keys(de);
          if (le.length !== Object.keys(q).length) return !1;
          for (const fe of le) if (!(fe in q) || de[fe] !== q[fe]) return !1;
          return !0;
        };
    },
    4292: (at, ke, S) => {
      'use strict';
      S.d(ke, { m: () => De });
      var o = S(5861),
        N = S(7593),
        j = S(5730),
        z = S(9658),
        ge = S(8834);
      const Ne = (we) => (0, ge.c)().duration(we ? 400 : 300),
        re = (we) => {
          let ue, te;
          const ve = we.width + 8,
            $e = (0, ge.c)(),
            me = (0, ge.c)();
          we.isEndSide
            ? ((ue = ve + 'px'), (te = '0px'))
            : ((ue = -ve + 'px'), (te = '0px')),
            $e
              .addElement(we.menuInnerEl)
              .fromTo('transform', `translateX(${ue})`, `translateX(${te})`);
          const Ve = 'ios' === (0, z.b)(we),
            Ee = Ve ? 0.2 : 0.25;
          return (
            me.addElement(we.backdropEl).fromTo('opacity', 0.01, Ee),
            Ne(Ve).addAnimation([$e, me])
          );
        },
        Fe = (we) => {
          let ue, te;
          const ve = (0, z.b)(we),
            $e = we.width;
          we.isEndSide
            ? ((ue = -$e + 'px'), (te = $e + 'px'))
            : ((ue = $e + 'px'), (te = -$e + 'px'));
          const me = (0, ge.c)()
              .addElement(we.menuInnerEl)
              .fromTo('transform', `translateX(${te})`, 'translateX(0px)'),
            ee = (0, ge.c)()
              .addElement(we.contentEl)
              .fromTo('transform', 'translateX(0px)', `translateX(${ue})`),
            Ve = (0, ge.c)()
              .addElement(we.backdropEl)
              .fromTo('opacity', 0.01, 0.32);
          return Ne('ios' === ve).addAnimation([me, ee, Ve]);
        },
        Ae = (we) => {
          const ue = (0, z.b)(we),
            te = we.width * (we.isEndSide ? -1 : 1) + 'px',
            ve = (0, ge.c)()
              .addElement(we.contentEl)
              .fromTo('transform', 'translateX(0px)', `translateX(${te})`);
          return Ne('ios' === ue).addAnimation(ve);
        },
        De = (() => {
          const we = new Map(),
            ue = [],
            te = (function () {
              var k = (0, o.Z)(function* (F) {
                const J = yield ye(F);
                return !!J && J.open();
              });
              return function (J) {
                return k.apply(this, arguments);
              };
            })(),
            ve = (function () {
              var k = (0, o.Z)(function* (F) {
                const J = yield void 0 !== F ? ye(F) : ae();
                return void 0 !== J && J.close();
              });
              return function (J) {
                return k.apply(this, arguments);
              };
            })(),
            $e = (function () {
              var k = (0, o.Z)(function* (F) {
                const J = yield ye(F);
                return !!J && J.toggle();
              });
              return function (J) {
                return k.apply(this, arguments);
              };
            })(),
            me = (function () {
              var k = (0, o.Z)(function* (F, J) {
                const oe = yield ye(J);
                return oe && (oe.disabled = !F), oe;
              });
              return function (J, oe) {
                return k.apply(this, arguments);
              };
            })(),
            ee = (function () {
              var k = (0, o.Z)(function* (F, J) {
                const oe = yield ye(J);
                return oe && (oe.swipeGesture = F), oe;
              });
              return function (J, oe) {
                return k.apply(this, arguments);
              };
            })(),
            Ve = (function () {
              var k = (0, o.Z)(function* (F) {
                if (null != F) {
                  const J = yield ye(F);
                  return void 0 !== J && J.isOpen();
                }
                return void 0 !== (yield ae());
              });
              return function (J) {
                return k.apply(this, arguments);
              };
            })(),
            Ee = (function () {
              var k = (0, o.Z)(function* (F) {
                const J = yield ye(F);
                return !!J && !J.disabled;
              });
              return function (J) {
                return k.apply(this, arguments);
              };
            })(),
            ye = (function () {
              var k = (0, o.Z)(function* (F) {
                return (
                  yield se(),
                  'start' === F || 'end' === F
                    ? We((he) => he.side === F && !he.disabled) ||
                      We((he) => he.side === F)
                    : null != F
                    ? We((oe) => oe.menuId === F)
                    : We((oe) => !oe.disabled) ||
                      (ue.length > 0 ? ue[0].el : void 0)
                );
              });
              return function (J) {
                return k.apply(this, arguments);
              };
            })(),
            ae = (function () {
              var k = (0, o.Z)(function* () {
                return yield se(), G();
              });
              return function () {
                return k.apply(this, arguments);
              };
            })(),
            Te = (function () {
              var k = (0, o.Z)(function* () {
                return yield se(), Se();
              });
              return function () {
                return k.apply(this, arguments);
              };
            })(),
            de = (function () {
              var k = (0, o.Z)(function* () {
                return yield se(), pe();
              });
              return function () {
                return k.apply(this, arguments);
              };
            })(),
            q = (k, F) => {
              we.set(k, F);
            },
            B = (k) => {
              const F = k.side;
              ue.filter((J) => J.side === F && J !== k).forEach(
                (J) => (J.disabled = !0)
              );
            },
            V = (function () {
              var k = (0, o.Z)(function* (F, J, oe) {
                if (pe()) return !1;
                if (J) {
                  const he = yield ae();
                  he && F.el !== he && (yield he.setOpen(!1, !1));
                }
                return F._setOpen(J, oe);
              });
              return function (J, oe, he) {
                return k.apply(this, arguments);
              };
            })(),
            G = () => We((k) => k._isOpen),
            Se = () => ue.map((k) => k.el),
            pe = () => ue.some((k) => k.isAnimating),
            We = (k) => {
              const F = ue.find(k);
              if (void 0 !== F) return F.el;
            },
            se = () =>
              Promise.all(
                Array.from(document.querySelectorAll('ion-menu')).map(
                  (k) => new Promise((F) => (0, j.c)(k, F))
                )
              );
          return (
            q('reveal', Ae),
            q('push', Fe),
            q('overlay', re),
            typeof document < 'u' &&
              document.addEventListener('ionBackButton', (k) => {
                const F = G();
                F &&
                  k.detail.register(N.MENU_BACK_BUTTON_PRIORITY, () =>
                    F.close()
                  );
              }),
            {
              registerAnimation: q,
              get: ye,
              getMenus: Te,
              getOpen: ae,
              isEnabled: Ee,
              swipeGesture: ee,
              isAnimating: de,
              isOpen: Ve,
              enable: me,
              toggle: $e,
              close: ve,
              open: te,
              _getOpenSync: G,
              _createAnimation: (k, F) => {
                const J = we.get(k);
                if (!J) throw new Error('animation not registered');
                return J(F);
              },
              _register: (k) => {
                ue.indexOf(k) < 0 && (k.disabled || B(k), ue.push(k));
              },
              _unregister: (k) => {
                const F = ue.indexOf(k);
                F > -1 && ue.splice(F, 1);
              },
              _setOpen: V,
              _setActiveMenu: B,
            }
          );
        })();
    },
    3457: (at, ke, S) => {
      'use strict';
      S.d(ke, { w: () => o });
      const o = typeof window < 'u' ? window : void 0;
    },
    1308: (at, ke, S) => {
      'use strict';
      S.d(ke, {
        B: () => Rn,
        H: () => Mt,
        a: () => he,
        b: () => vt,
        c: () => en,
        e: () => tr,
        f: () => mn,
        g: () => be,
        h: () => lt,
        i: () => kt,
        j: () => on,
        k: () => Zt,
        p: () => $e,
        r: () => ir,
        s: () => te,
      });
      var o = S(5861);
      let j,
        z,
        ge,
        Ne = !1,
        re = !1,
        Fe = !1,
        Ae = !1,
        Pe = !1;
      const De = typeof window < 'u' ? window : {},
        we = De.document || { head: {} },
        ue = {
          $flags$: 0,
          $resourcesUrl$: '',
          jmp: (T) => T(),
          raf: (T) => requestAnimationFrame(T),
          ael: (T, $, U, K) => T.addEventListener($, U, K),
          rel: (T, $, U, K) => T.removeEventListener($, U, K),
          ce: (T, $) => new CustomEvent(T, $),
        },
        te = (T) => {
          Object.assign(ue, T);
        },
        $e = (T) => Promise.resolve(T),
        me = (() => {
          try {
            return (
              new CSSStyleSheet(),
              'function' == typeof new CSSStyleSheet().replaceSync
            );
          } catch {}
          return !1;
        })(),
        ee = (T, $, U, K) => {
          U &&
            U.map(([Ce, L, Q]) => {
              const ie = Ee(T, Ce),
                Be = Ve($, Q),
                xe = ye(Ce);
              ue.ael(ie, L, Be, xe),
                ($.$rmListeners$ = $.$rmListeners$ || []).push(() =>
                  ue.rel(ie, L, Be, xe)
                );
            });
        },
        Ve = (T, $) => (U) => {
          try {
            256 & T.$flags$
              ? T.$lazyInstance$[$](U)
              : (T.$queuedListeners$ = T.$queuedListeners$ || []).push([$, U]);
          } catch (K) {
            On(K);
          }
        },
        Ee = (T, $) => (4 & $ ? we : 8 & $ ? De : 16 & $ ? we.body : T),
        ye = (T) => 0 != (2 & T),
        le = 's-id',
        fe = 'sty-id',
        B = 'c-id',
        W = 'http://www.w3.org/1999/xlink',
        pe = new WeakMap(),
        We = (T, $, U) => {
          let K = fr.get(T);
          me && U
            ? ((K = K || new CSSStyleSheet()),
              'string' == typeof K ? (K = $) : K.replaceSync($))
            : (K = $),
            fr.set(T, K);
        },
        se = (T, $, U, K) => {
          let Ce = F($, U);
          const L = fr.get(Ce);
          if (((T = 11 === T.nodeType ? T : we), L))
            if ('string' == typeof L) {
              let ie,
                Q = pe.get((T = T.head || T));
              Q || pe.set(T, (Q = new Set())),
                Q.has(Ce) ||
                  (T.host && (ie = T.querySelector(`[${fe}="${Ce}"]`))
                    ? (ie.innerHTML = L)
                    : ((ie = we.createElement('style')),
                      (ie.innerHTML = L),
                      T.insertBefore(ie, T.querySelector('link'))),
                  Q && Q.add(Ce));
            } else
              T.adoptedStyleSheets.includes(L) ||
                (T.adoptedStyleSheets = [...T.adoptedStyleSheets, L]);
          return Ce;
        },
        F = (T, $) =>
          'sc-' + ($ && 32 & T.$flags$ ? T.$tagName$ + '-' + $ : T.$tagName$),
        J = (T) => T.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, '$1{'),
        he = (T) => Sr.push(T),
        be = (T) => ln(T).$modeName$,
        Ye = {},
        bt = (T) => 'object' == (T = typeof T) || 'function' === T,
        lt = (T, $, ...U) => {
          let K = null,
            Ce = null,
            L = null,
            Q = !1,
            ie = !1;
          const Be = [],
            xe = (ot) => {
              for (let et = 0; et < ot.length; et++)
                (K = ot[et]),
                  Array.isArray(K)
                    ? xe(K)
                    : null != K &&
                      'boolean' != typeof K &&
                      ((Q = 'function' != typeof T && !bt(K)) &&
                        (K = String(K)),
                      Q && ie
                        ? (Be[Be.length - 1].$text$ += K)
                        : Be.push(Q ? Ft(null, K) : K),
                      (ie = Q));
            };
          if ((xe(U), $)) {
            $.key && (Ce = $.key), $.name && (L = $.name);
            {
              const ot = $.className || $.class;
              ot &&
                ($.class =
                  'object' != typeof ot
                    ? ot
                    : Object.keys(ot)
                        .filter((et) => ot[et])
                        .join(' '));
            }
          }
          if ('function' == typeof T) return T(null === $ ? {} : $, Be, Lt);
          const rt = Ft(T, null);
          return (
            (rt.$attrs$ = $),
            Be.length > 0 && (rt.$children$ = Be),
            (rt.$key$ = Ce),
            (rt.$name$ = L),
            rt
          );
        },
        Ft = (T, $) => ({
          $flags$: 0,
          $tag$: T,
          $text$: $,
          $elm$: null,
          $children$: null,
          $attrs$: null,
          $key$: null,
          $name$: null,
        }),
        Mt = {},
        Lt = {
          forEach: (T, $) => T.map(bn).forEach($),
          map: (T, $) => T.map(bn).map($).map(jn),
        },
        bn = (T) => ({
          vattrs: T.$attrs$,
          vchildren: T.$children$,
          vkey: T.$key$,
          vname: T.$name$,
          vtag: T.$tag$,
          vtext: T.$text$,
        }),
        jn = (T) => {
          if ('function' == typeof T.vtag) {
            const U = Object.assign({}, T.vattrs);
            return (
              T.vkey && (U.key = T.vkey),
              T.vname && (U.name = T.vname),
              lt(T.vtag, U, ...(T.vchildren || []))
            );
          }
          const $ = Ft(T.vtag, T.vtext);
          return (
            ($.$attrs$ = T.vattrs),
            ($.$children$ = T.vchildren),
            ($.$key$ = T.vkey),
            ($.$name$ = T.vname),
            $
          );
        },
        st = (T, $, U, K, Ce, L) => {
          if (U !== K) {
            let Q = pn(T, $),
              ie = $.toLowerCase();
            if ('class' === $) {
              const Be = T.classList,
                xe = Pt(U),
                rt = Pt(K);
              Be.remove(...xe.filter((ot) => ot && !rt.includes(ot))),
                Be.add(...rt.filter((ot) => ot && !xe.includes(ot)));
            } else if ('style' === $) {
              for (const Be in U)
                (!K || null == K[Be]) &&
                  (Be.includes('-')
                    ? T.style.removeProperty(Be)
                    : (T.style[Be] = ''));
              for (const Be in K)
                (!U || K[Be] !== U[Be]) &&
                  (Be.includes('-')
                    ? T.style.setProperty(Be, K[Be])
                    : (T.style[Be] = K[Be]));
            } else if ('key' !== $)
              if ('ref' === $) K && K(T);
              else if (Q || 'o' !== $[0] || 'n' !== $[1]) {
                const Be = bt(K);
                if ((Q || (Be && null !== K)) && !Ce)
                  try {
                    if (T.tagName.includes('-')) T[$] = K;
                    else {
                      const rt = K ?? '';
                      'list' === $
                        ? (Q = !1)
                        : (null == U || T[$] != rt) && (T[$] = rt);
                    }
                  } catch {}
                let xe = !1;
                ie !== (ie = ie.replace(/^xlink\:?/, '')) &&
                  (($ = ie), (xe = !0)),
                  null == K || !1 === K
                    ? (!1 !== K || '' === T.getAttribute($)) &&
                      (xe ? T.removeAttributeNS(W, $) : T.removeAttribute($))
                    : (!Q || 4 & L || Ce) &&
                      !Be &&
                      ((K = !0 === K ? '' : K),
                      xe ? T.setAttributeNS(W, $, K) : T.setAttribute($, K));
              } else
                ($ =
                  '-' === $[2]
                    ? $.slice(3)
                    : pn(De, ie)
                    ? ie.slice(2)
                    : ie[2] + $.slice(3)),
                  U && ue.rel(T, $, U, !1),
                  K && ue.ael(T, $, K, !1);
          }
        },
        Ln = /\s/,
        Pt = (T) => (T ? T.split(Ln) : []),
        cn = (T, $, U, K) => {
          const Ce =
              11 === $.$elm$.nodeType && $.$elm$.host ? $.$elm$.host : $.$elm$,
            L = (T && T.$attrs$) || Ye,
            Q = $.$attrs$ || Ye;
          for (K in L) K in Q || st(Ce, K, L[K], void 0, U, $.$flags$);
          for (K in Q) st(Ce, K, L[K], Q[K], U, $.$flags$);
        },
        Xt = (T, $, U, K) => {
          const Ce = $.$children$[U];
          let Q,
            ie,
            Be,
            L = 0;
          if (
            (Ne ||
              ((Fe = !0),
              'slot' === Ce.$tag$ &&
                (j && K.classList.add(j + '-s'),
                (Ce.$flags$ |= Ce.$children$ ? 2 : 1))),
            null !== Ce.$text$)
          )
            Q = Ce.$elm$ = we.createTextNode(Ce.$text$);
          else if (1 & Ce.$flags$) Q = Ce.$elm$ = we.createTextNode('');
          else {
            if (
              (Ae || (Ae = 'svg' === Ce.$tag$),
              (Q = Ce.$elm$ =
                we.createElementNS(
                  Ae
                    ? 'http://www.w3.org/2000/svg'
                    : 'http://www.w3.org/1999/xhtml',
                  2 & Ce.$flags$ ? 'slot-fb' : Ce.$tag$
                )),
              Ae && 'foreignObject' === Ce.$tag$ && (Ae = !1),
              cn(null, Ce, Ae),
              ((T) => null != T)(j) &&
                Q['s-si'] !== j &&
                Q.classList.add((Q['s-si'] = j)),
              Ce.$children$)
            )
              for (L = 0; L < Ce.$children$.length; ++L)
                (ie = Xt(T, Ce, L, Q)), ie && Q.appendChild(ie);
            'svg' === Ce.$tag$
              ? (Ae = !1)
              : 'foreignObject' === Q.tagName && (Ae = !0);
          }
          return (
            (Q['s-hn'] = ge),
            3 & Ce.$flags$ &&
              ((Q['s-sr'] = !0),
              (Q['s-cr'] = z),
              (Q['s-sn'] = Ce.$name$ || ''),
              (Be = T && T.$children$ && T.$children$[U]),
              Be && Be.$tag$ === Ce.$tag$ && T.$elm$ && kn(T.$elm$, !1)),
            Q
          );
        },
        kn = (T, $) => {
          ue.$flags$ |= 1;
          const U = T.childNodes;
          for (let K = U.length - 1; K >= 0; K--) {
            const Ce = U[K];
            Ce['s-hn'] !== ge &&
              Ce['s-ol'] &&
              (Vt(Ce).insertBefore(Ce, qe(Ce)),
              Ce['s-ol'].remove(),
              (Ce['s-ol'] = void 0),
              (Fe = !0)),
              $ && kn(Ce, $);
          }
          ue.$flags$ &= -2;
        },
        Jt = (T, $, U, K, Ce, L) => {
          let ie,
            Q = (T['s-cr'] && T['s-cr'].parentNode) || T;
          for (
            Q.shadowRoot && Q.tagName === ge && (Q = Q.shadowRoot);
            Ce <= L;
            ++Ce
          )
            K[Ce] &&
              ((ie = Xt(null, U, Ce, T)),
              ie && ((K[Ce].$elm$ = ie), Q.insertBefore(ie, qe($))));
        },
        $n = (T, $, U, K, Ce) => {
          for (; $ <= U; ++$)
            (K = T[$]) &&
              ((Ce = K.$elm$),
              Kt(K),
              (re = !0),
              Ce['s-ol'] ? Ce['s-ol'].remove() : kn(Ce, !0),
              Ce.remove());
        },
        ct = (T, $) =>
          T.$tag$ === $.$tag$ &&
          ('slot' === T.$tag$ ? T.$name$ === $.$name$ : T.$key$ === $.$key$),
        qe = (T) => (T && T['s-ol']) || T,
        Vt = (T) => (T['s-ol'] ? T['s-ol'] : T).parentNode,
        Yt = (T, $) => {
          const U = ($.$elm$ = T.$elm$),
            K = T.$children$,
            Ce = $.$children$,
            L = $.$tag$,
            Q = $.$text$;
          let ie;
          null === Q
            ? ((Ae = 'svg' === L || ('foreignObject' !== L && Ae)),
              'slot' === L || cn(T, $, Ae),
              null !== K && null !== Ce
                ? ((T, $, U, K) => {
                    let Ht,
                      Hn,
                      Ce = 0,
                      L = 0,
                      Q = 0,
                      ie = 0,
                      Be = $.length - 1,
                      xe = $[0],
                      rt = $[Be],
                      ot = K.length - 1,
                      et = K[0],
                      Nt = K[ot];
                    for (; Ce <= Be && L <= ot; )
                      if (null == xe) xe = $[++Ce];
                      else if (null == rt) rt = $[--Be];
                      else if (null == et) et = K[++L];
                      else if (null == Nt) Nt = K[--ot];
                      else if (ct(xe, et))
                        Yt(xe, et), (xe = $[++Ce]), (et = K[++L]);
                      else if (ct(rt, Nt))
                        Yt(rt, Nt), (rt = $[--Be]), (Nt = K[--ot]);
                      else if (ct(xe, Nt))
                        ('slot' === xe.$tag$ || 'slot' === Nt.$tag$) &&
                          kn(xe.$elm$.parentNode, !1),
                          Yt(xe, Nt),
                          T.insertBefore(xe.$elm$, rt.$elm$.nextSibling),
                          (xe = $[++Ce]),
                          (Nt = K[--ot]);
                      else if (ct(rt, et))
                        ('slot' === xe.$tag$ || 'slot' === Nt.$tag$) &&
                          kn(rt.$elm$.parentNode, !1),
                          Yt(rt, et),
                          T.insertBefore(rt.$elm$, xe.$elm$),
                          (rt = $[--Be]),
                          (et = K[++L]);
                      else {
                        for (Q = -1, ie = Ce; ie <= Be; ++ie)
                          if (
                            $[ie] &&
                            null !== $[ie].$key$ &&
                            $[ie].$key$ === et.$key$
                          ) {
                            Q = ie;
                            break;
                          }
                        Q >= 0
                          ? ((Hn = $[Q]),
                            Hn.$tag$ !== et.$tag$
                              ? (Ht = Xt($ && $[L], U, Q, T))
                              : (Yt(Hn, et), ($[Q] = void 0), (Ht = Hn.$elm$)),
                            (et = K[++L]))
                          : ((Ht = Xt($ && $[L], U, L, T)), (et = K[++L])),
                          Ht && Vt(xe.$elm$).insertBefore(Ht, qe(xe.$elm$));
                      }
                    Ce > Be
                      ? Jt(
                          T,
                          null == K[ot + 1] ? null : K[ot + 1].$elm$,
                          U,
                          K,
                          L,
                          ot
                        )
                      : L > ot && $n($, Ce, Be);
                  })(U, K, $, Ce)
                : null !== Ce
                ? (null !== T.$text$ && (U.textContent = ''),
                  Jt(U, null, $, Ce, 0, Ce.length - 1))
                : null !== K && $n(K, 0, K.length - 1),
              Ae && 'svg' === L && (Ae = !1))
            : (ie = U['s-cr'])
            ? (ie.parentNode.textContent = Q)
            : T.$text$ !== Q && (U.data = Q);
        },
        At = (T) => {
          const $ = T.childNodes;
          let U, K, Ce, L, Q, ie;
          for (K = 0, Ce = $.length; K < Ce; K++)
            if (((U = $[K]), 1 === U.nodeType)) {
              if (U['s-sr'])
                for (Q = U['s-sn'], U.hidden = !1, L = 0; L < Ce; L++)
                  if (
                    ((ie = $[L].nodeType),
                    $[L]['s-hn'] !== U['s-hn'] || '' !== Q)
                  ) {
                    if (1 === ie && Q === $[L].getAttribute('slot')) {
                      U.hidden = !0;
                      break;
                    }
                  } else if (
                    1 === ie ||
                    (3 === ie && '' !== $[L].textContent.trim())
                  ) {
                    U.hidden = !0;
                    break;
                  }
              At(U);
            }
        },
        un = [],
        In = (T) => {
          let $,
            U,
            K,
            Ce,
            L,
            Q,
            ie = 0;
          const Be = T.childNodes,
            xe = Be.length;
          for (; ie < xe; ie++) {
            if ((($ = Be[ie]), $['s-sr'] && (U = $['s-cr']) && U.parentNode))
              for (
                K = U.parentNode.childNodes, Ce = $['s-sn'], Q = K.length - 1;
                Q >= 0;
                Q--
              )
                (U = K[Q]),
                  !U['s-cn'] &&
                    !U['s-nr'] &&
                    U['s-hn'] !== $['s-hn'] &&
                    (pt(U, Ce)
                      ? ((L = un.find((rt) => rt.$nodeToRelocate$ === U)),
                        (re = !0),
                        (U['s-sn'] = U['s-sn'] || Ce),
                        L
                          ? (L.$slotRefNode$ = $)
                          : un.push({ $slotRefNode$: $, $nodeToRelocate$: U }),
                        U['s-sr'] &&
                          un.map((rt) => {
                            pt(rt.$nodeToRelocate$, U['s-sn']) &&
                              ((L = un.find((ot) => ot.$nodeToRelocate$ === U)),
                              L &&
                                !rt.$slotRefNode$ &&
                                (rt.$slotRefNode$ = L.$slotRefNode$));
                          }))
                      : un.some((rt) => rt.$nodeToRelocate$ === U) ||
                        un.push({ $nodeToRelocate$: U }));
            1 === $.nodeType && In($);
          }
        },
        pt = (T, $) =>
          1 === T.nodeType
            ? (null === T.getAttribute('slot') && '' === $) ||
              T.getAttribute('slot') === $
            : T['s-sn'] === $ || '' === $,
        Kt = (T) => {
          T.$attrs$ && T.$attrs$.ref && T.$attrs$.ref(null),
            T.$children$ && T.$children$.map(Kt);
        },
        kt = (T) => ln(T).$hostElement$,
        tr = (T, $, U) => {
          const K = kt(T);
          return {
            emit: (Ce) =>
              Bn(K, $, {
                bubbles: !!(4 & U),
                composed: !!(2 & U),
                cancelable: !!(1 & U),
                detail: Ce,
              }),
          };
        },
        Bn = (T, $, U) => {
          const K = ue.ce($, U);
          return T.dispatchEvent(K), K;
        },
        Gn = (T, $) => {
          $ &&
            !T.$onRenderResolve$ &&
            $['s-p'] &&
            $['s-p'].push(new Promise((U) => (T.$onRenderResolve$ = U)));
        },
        _n = (T, $) => {
          if (((T.$flags$ |= 16), !(4 & T.$flags$)))
            return Gn(T, T.$ancestorComponent$), en(() => wt(T, $));
          T.$flags$ |= 512;
        },
        wt = (T, $) => {
          const K = T.$lazyInstance$;
          let Ce;
          return (
            $ &&
              ((T.$flags$ |= 256),
              T.$queuedListeners$ &&
                (T.$queuedListeners$.map(([L, Q]) => Dt(K, L, Q)),
                (T.$queuedListeners$ = null)),
              (Ce = Dt(K, 'componentWillLoad'))),
            (Ce = wn(Ce, () => Dt(K, 'componentWillRender'))),
            wn(Ce, () => nr(T, K, $))
          );
        },
        nr = (function () {
          var T = (0, o.Z)(function* ($, U, K) {
            const Ce = $.$hostElement$,
              Q = Ce['s-rc'];
            K &&
              ((T) => {
                const $ = T.$cmpMeta$,
                  U = T.$hostElement$,
                  K = $.$flags$,
                  L = se(
                    U.shadowRoot ? U.shadowRoot : U.getRootNode(),
                    $,
                    T.$modeName$
                  );
                10 & K &&
                  ((U['s-sc'] = L),
                  U.classList.add(L + '-h'),
                  2 & K && U.classList.add(L + '-s'));
              })($);
            rr($, U), Q && (Q.map((Be) => Be()), (Ce['s-rc'] = void 0));
            {
              const Be = Ce['s-p'],
                xe = () => jt($);
              0 === Be.length
                ? xe()
                : (Promise.all(Be).then(xe), ($.$flags$ |= 4), (Be.length = 0));
            }
          });
          return function (U, K, Ce) {
            return T.apply(this, arguments);
          };
        })(),
        rr = (T, $, U) => {
          try {
            ($ = $.render && $.render()),
              (T.$flags$ &= -17),
              (T.$flags$ |= 2),
              ((T, $) => {
                const U = T.$hostElement$,
                  K = T.$cmpMeta$,
                  Ce = T.$vnode$ || Ft(null, null),
                  L = ((T) => T && T.$tag$ === Mt)($) ? $ : lt(null, null, $);
                if (
                  ((ge = U.tagName),
                  K.$attrsToReflect$ &&
                    ((L.$attrs$ = L.$attrs$ || {}),
                    K.$attrsToReflect$.map(
                      ([Q, ie]) => (L.$attrs$[ie] = U[Q])
                    )),
                  (L.$tag$ = null),
                  (L.$flags$ |= 4),
                  (T.$vnode$ = L),
                  (L.$elm$ = Ce.$elm$ = U.shadowRoot || U),
                  (j = U['s-sc']),
                  (z = U['s-cr']),
                  (Ne = 0 != (1 & K.$flags$)),
                  (re = !1),
                  Yt(Ce, L),
                  (ue.$flags$ |= 1),
                  Fe)
                ) {
                  In(L.$elm$);
                  let Q,
                    ie,
                    Be,
                    xe,
                    rt,
                    ot,
                    et = 0;
                  for (; et < un.length; et++)
                    (Q = un[et]),
                      (ie = Q.$nodeToRelocate$),
                      ie['s-ol'] ||
                        ((Be = we.createTextNode('')),
                        (Be['s-nr'] = ie),
                        ie.parentNode.insertBefore((ie['s-ol'] = Be), ie));
                  for (et = 0; et < un.length; et++)
                    if (
                      ((Q = un[et]), (ie = Q.$nodeToRelocate$), Q.$slotRefNode$)
                    ) {
                      for (
                        xe = Q.$slotRefNode$.parentNode,
                          rt = Q.$slotRefNode$.nextSibling,
                          Be = ie['s-ol'];
                        (Be = Be.previousSibling);

                      )
                        if (
                          ((ot = Be['s-nr']),
                          ot &&
                            ot['s-sn'] === ie['s-sn'] &&
                            xe === ot.parentNode &&
                            ((ot = ot.nextSibling), !ot || !ot['s-nr']))
                        ) {
                          rt = ot;
                          break;
                        }
                      ((!rt && xe !== ie.parentNode) ||
                        ie.nextSibling !== rt) &&
                        ie !== rt &&
                        (!ie['s-hn'] &&
                          ie['s-ol'] &&
                          (ie['s-hn'] = ie['s-ol'].parentNode.nodeName),
                        xe.insertBefore(ie, rt));
                    } else 1 === ie.nodeType && (ie.hidden = !0);
                }
                re && At(L.$elm$), (ue.$flags$ &= -2), (un.length = 0);
              })(T, $);
          } catch (K) {
            On(K, T.$hostElement$);
          }
          return null;
        },
        jt = (T) => {
          const U = T.$hostElement$,
            Ce = T.$lazyInstance$,
            L = T.$ancestorComponent$;
          Dt(Ce, 'componentDidRender'),
            64 & T.$flags$
              ? Dt(Ce, 'componentDidUpdate')
              : ((T.$flags$ |= 64),
                An(U),
                Dt(Ce, 'componentDidLoad'),
                T.$onReadyResolve$(U),
                L || sn()),
            T.$onInstanceResolve$(U),
            T.$onRenderResolve$ &&
              (T.$onRenderResolve$(), (T.$onRenderResolve$ = void 0)),
            512 & T.$flags$ && Tt(() => _n(T, !1)),
            (T.$flags$ &= -517);
        },
        on = (T) => {
          {
            const $ = ln(T),
              U = $.$hostElement$.isConnected;
            return U && 2 == (18 & $.$flags$) && _n($, !1), U;
          }
        },
        sn = (T) => {
          An(we.documentElement),
            Tt(() => Bn(De, 'appload', { detail: { namespace: 'ionic' } }));
        },
        Dt = (T, $, U) => {
          if (T && T[$])
            try {
              return T[$](U);
            } catch (K) {
              On(K);
            }
        },
        wn = (T, $) => (T && T.then ? T.then($) : $()),
        An = (T) => T.classList.add('hydrated'),
        or = (T, $, U, K, Ce, L, Q) => {
          let ie, Be, xe, rt;
          if (1 === L.nodeType) {
            for (
              ie = L.getAttribute(B),
                ie &&
                  ((Be = ie.split('.')),
                  (Be[0] === Q || '0' === Be[0]) &&
                    ((xe = {
                      $flags$: 0,
                      $hostId$: Be[0],
                      $nodeId$: Be[1],
                      $depth$: Be[2],
                      $index$: Be[3],
                      $tag$: L.tagName.toLowerCase(),
                      $elm$: L,
                      $attrs$: null,
                      $children$: null,
                      $key$: null,
                      $name$: null,
                      $text$: null,
                    }),
                    $.push(xe),
                    L.removeAttribute(B),
                    T.$children$ || (T.$children$ = []),
                    (T.$children$[xe.$index$] = xe),
                    (T = xe),
                    K && '0' === xe.$depth$ && (K[xe.$index$] = xe.$elm$))),
                rt = L.childNodes.length - 1;
              rt >= 0;
              rt--
            )
              or(T, $, U, K, Ce, L.childNodes[rt], Q);
            if (L.shadowRoot)
              for (rt = L.shadowRoot.childNodes.length - 1; rt >= 0; rt--)
                or(T, $, U, K, Ce, L.shadowRoot.childNodes[rt], Q);
          } else if (8 === L.nodeType)
            (Be = L.nodeValue.split('.')),
              (Be[1] === Q || '0' === Be[1]) &&
                ((ie = Be[0]),
                (xe = {
                  $flags$: 0,
                  $hostId$: Be[1],
                  $nodeId$: Be[2],
                  $depth$: Be[3],
                  $index$: Be[4],
                  $elm$: L,
                  $attrs$: null,
                  $children$: null,
                  $key$: null,
                  $name$: null,
                  $tag$: null,
                  $text$: null,
                }),
                't' === ie
                  ? ((xe.$elm$ = L.nextSibling),
                    xe.$elm$ &&
                      3 === xe.$elm$.nodeType &&
                      ((xe.$text$ = xe.$elm$.textContent),
                      $.push(xe),
                      L.remove(),
                      T.$children$ || (T.$children$ = []),
                      (T.$children$[xe.$index$] = xe),
                      K && '0' === xe.$depth$ && (K[xe.$index$] = xe.$elm$)))
                  : xe.$hostId$ === Q &&
                    ('s' === ie
                      ? ((xe.$tag$ = 'slot'),
                        (L['s-sn'] = Be[5] ? (xe.$name$ = Be[5]) : ''),
                        (L['s-sr'] = !0),
                        K &&
                          ((xe.$elm$ = we.createElement(xe.$tag$)),
                          xe.$name$ && xe.$elm$.setAttribute('name', xe.$name$),
                          L.parentNode.insertBefore(xe.$elm$, L),
                          L.remove(),
                          '0' === xe.$depth$ && (K[xe.$index$] = xe.$elm$)),
                        U.push(xe),
                        T.$children$ || (T.$children$ = []),
                        (T.$children$[xe.$index$] = xe))
                      : 'r' === ie &&
                        (K
                          ? L.remove()
                          : ((Ce['s-cr'] = L), (L['s-cn'] = !0)))));
          else if (T && 'style' === T.$tag$) {
            const ot = Ft(null, L.textContent);
            (ot.$elm$ = L), (ot.$index$ = '0'), (T.$children$ = [ot]);
          }
        },
        hn = (T, $) => {
          if (1 === T.nodeType) {
            let U = 0;
            for (; U < T.childNodes.length; U++) hn(T.childNodes[U], $);
            if (T.shadowRoot)
              for (U = 0; U < T.shadowRoot.childNodes.length; U++)
                hn(T.shadowRoot.childNodes[U], $);
          } else if (8 === T.nodeType) {
            const U = T.nodeValue.split('.');
            'o' === U[0] &&
              ($.set(U[1] + '.' + U[2], T),
              (T.nodeValue = ''),
              (T['s-en'] = U[3]));
          }
        },
        Z = (T, $, U) => {
          if ($.$members$) {
            T.watchers && ($.$watchers$ = T.watchers);
            const K = Object.entries($.$members$),
              Ce = T.prototype;
            if (
              (K.map(([L, [Q]]) => {
                31 & Q || (2 & U && 32 & Q)
                  ? Object.defineProperty(Ce, L, {
                      get() {
                        return ((T, $) => ln(this).$instanceValues$.get($))(
                          0,
                          L
                        );
                      },
                      set(ie) {
                        ((T, $, U, K) => {
                          const Ce = ln(T),
                            L = Ce.$hostElement$,
                            Q = Ce.$instanceValues$.get($),
                            ie = Ce.$flags$,
                            Be = Ce.$lazyInstance$;
                          U = ((T, $) =>
                            null == T || bt(T)
                              ? T
                              : 4 & $
                              ? 'false' !== T && ('' === T || !!T)
                              : 2 & $
                              ? parseFloat(T)
                              : 1 & $
                              ? String(T)
                              : T)(U, K.$members$[$][0]);
                          const xe = Number.isNaN(Q) && Number.isNaN(U);
                          if (
                            (!(8 & ie) || void 0 === Q) &&
                            U !== Q &&
                            !xe &&
                            (Ce.$instanceValues$.set($, U), Be)
                          ) {
                            if (K.$watchers$ && 128 & ie) {
                              const ot = K.$watchers$[$];
                              ot &&
                                ot.map((et) => {
                                  try {
                                    Be[et](U, Q, $);
                                  } catch (Nt) {
                                    On(Nt, L);
                                  }
                                });
                            }
                            2 == (18 & ie) && _n(Ce, !1);
                          }
                        })(this, L, ie, $);
                      },
                      configurable: !0,
                      enumerable: !0,
                    })
                  : 1 & U &&
                    64 & Q &&
                    Object.defineProperty(Ce, L, {
                      value(...ie) {
                        const Be = ln(this);
                        return Be.$onInstancePromise$.then(() =>
                          Be.$lazyInstance$[L](...ie)
                        );
                      },
                    });
              }),
              1 & U)
            ) {
              const L = new Map();
              (Ce.attributeChangedCallback = function (Q, ie, Be) {
                ue.jmp(() => {
                  const xe = L.get(Q);
                  if (this.hasOwnProperty(xe)) (Be = this[xe]), delete this[xe];
                  else if (
                    Ce.hasOwnProperty(xe) &&
                    'number' == typeof this[xe] &&
                    this[xe] == Be
                  )
                    return;
                  this[xe] =
                    (null !== Be || 'boolean' != typeof this[xe]) && Be;
                });
              }),
                (T.observedAttributes = K.filter(([Q, ie]) => 15 & ie[0]).map(
                  ([Q, ie]) => {
                    const Be = ie[1] || Q;
                    return (
                      L.set(Be, Q),
                      512 & ie[0] && $.$attrsToReflect$.push([Q, Be]),
                      Be
                    );
                  }
                ));
            }
          }
          return T;
        },
        Y = (function () {
          var T = (0, o.Z)(function* ($, U, K, Ce, L) {
            if (0 == (32 & U.$flags$)) {
              {
                if (((U.$flags$ |= 32), (L = gn(K)).then)) {
                  const xe = () => {};
                  (L = yield L), xe();
                }
                L.isProxied ||
                  ((K.$watchers$ = L.watchers), Z(L, K, 2), (L.isProxied = !0));
                const Be = () => {};
                U.$flags$ |= 8;
                try {
                  new L(U);
                } catch (xe) {
                  On(xe);
                }
                (U.$flags$ &= -9),
                  (U.$flags$ |= 128),
                  Be(),
                  Re(U.$lazyInstance$);
              }
              if (L.style) {
                let Be = L.style;
                'string' != typeof Be &&
                  (Be =
                    Be[
                      (U.$modeName$ = ((T) =>
                        Sr.map(($) => $(T)).find(($) => !!$))($))
                    ]);
                const xe = F(K, U.$modeName$);
                if (!fr.has(xe)) {
                  const rt = () => {};
                  We(xe, Be, !!(1 & K.$flags$)), rt();
                }
              }
            }
            const Q = U.$ancestorComponent$,
              ie = () => _n(U, !0);
            Q && Q['s-rc'] ? Q['s-rc'].push(ie) : ie();
          });
          return function (U, K, Ce, L, Q) {
            return T.apply(this, arguments);
          };
        })(),
        Re = (T) => {
          Dt(T, 'connectedCallback');
        },
        ht = (T) => {
          const $ = (T['s-cr'] = we.createComment(''));
          ($['s-cn'] = !0), T.insertBefore($, T.firstChild);
        },
        vt = (T, $ = {}) => {
          const K = [],
            Ce = $.exclude || [],
            L = De.customElements,
            Q = we.head,
            ie = Q.querySelector('meta[charset]'),
            Be = we.createElement('style'),
            xe = [],
            rt = we.querySelectorAll(`[${fe}]`);
          let ot,
            et = !0,
            Nt = 0;
          for (
            Object.assign(ue, $),
              ue.$resourcesUrl$ = new URL(
                $.resourcesUrl || './',
                we.baseURI
              ).href,
              ue.$flags$ |= 2;
            Nt < rt.length;
            Nt++
          )
            We(rt[Nt].getAttribute(fe), J(rt[Nt].innerHTML), !0);
          T.map((Ht) => {
            Ht[1].map((Hn) => {
              const xn = {
                $flags$: Hn[0],
                $tagName$: Hn[1],
                $members$: Hn[2],
                $listeners$: Hn[3],
              };
              (xn.$members$ = Hn[2]),
                (xn.$listeners$ = Hn[3]),
                (xn.$attrsToReflect$ = []),
                (xn.$watchers$ = {});
              const dn = xn.$tagName$,
                _r = class extends HTMLElement {
                  constructor(Zn) {
                    super(Zn),
                      Tn((Zn = this), xn),
                      1 & xn.$flags$ &&
                        Zn.attachShadow({
                          mode: 'open',
                          delegatesFocus: !!(16 & xn.$flags$),
                        });
                  }
                  connectedCallback() {
                    ot && (clearTimeout(ot), (ot = null)),
                      et
                        ? xe.push(this)
                        : ue.jmp(() =>
                            ((T) => {
                              if (0 == (1 & ue.$flags$)) {
                                const $ = ln(T),
                                  U = $.$cmpMeta$,
                                  K = () => {};
                                if (1 & $.$flags$)
                                  ee(T, $, U.$listeners$), Re($.$lazyInstance$);
                                else {
                                  let Ce;
                                  if (
                                    (($.$flags$ |= 1),
                                    (Ce = T.getAttribute(le)),
                                    Ce)
                                  ) {
                                    if (1 & U.$flags$) {
                                      const L = se(
                                        T.shadowRoot,
                                        U,
                                        T.getAttribute('s-mode')
                                      );
                                      T.classList.remove(L + '-h', L + '-s');
                                    }
                                    ((T, $, U, K) => {
                                      const L = T.shadowRoot,
                                        Q = [],
                                        Be = L ? [] : null,
                                        xe = (K.$vnode$ = Ft($, null));
                                      ue.$orgLocNodes$ ||
                                        hn(
                                          we.body,
                                          (ue.$orgLocNodes$ = new Map())
                                        ),
                                        (T[le] = U),
                                        T.removeAttribute(le),
                                        or(xe, Q, [], Be, T, T, U),
                                        Q.map((rt) => {
                                          const ot =
                                              rt.$hostId$ + '.' + rt.$nodeId$,
                                            et = ue.$orgLocNodes$.get(ot),
                                            Nt = rt.$elm$;
                                          et &&
                                            '' === et['s-en'] &&
                                            et.parentNode.insertBefore(
                                              Nt,
                                              et.nextSibling
                                            ),
                                            L ||
                                              ((Nt['s-hn'] = $),
                                              et &&
                                                ((Nt['s-ol'] = et),
                                                (Nt['s-ol']['s-nr'] = Nt))),
                                            ue.$orgLocNodes$.delete(ot);
                                        }),
                                        L &&
                                          Be.map((rt) => {
                                            rt && L.appendChild(rt);
                                          });
                                    })(T, U.$tagName$, Ce, $);
                                  }
                                  Ce || (12 & U.$flags$ && ht(T));
                                  {
                                    let L = T;
                                    for (; (L = L.parentNode || L.host); )
                                      if (
                                        (1 === L.nodeType &&
                                          L.hasAttribute('s-id') &&
                                          L['s-p']) ||
                                        L['s-p']
                                      ) {
                                        Gn($, ($.$ancestorComponent$ = L));
                                        break;
                                      }
                                  }
                                  U.$members$ &&
                                    Object.entries(U.$members$).map(
                                      ([L, [Q]]) => {
                                        if (31 & Q && T.hasOwnProperty(L)) {
                                          const ie = T[L];
                                          delete T[L], (T[L] = ie);
                                        }
                                      }
                                    ),
                                    Tt(() => Y(T, $, U));
                                }
                                K();
                              }
                            })(this)
                          );
                  }
                  disconnectedCallback() {
                    ue.jmp(() =>
                      ((T) => {
                        if (0 == (1 & ue.$flags$)) {
                          const $ = ln(this),
                            U = $.$lazyInstance$;
                          $.$rmListeners$ &&
                            ($.$rmListeners$.map((K) => K()),
                            ($.$rmListeners$ = void 0)),
                            Dt(U, 'disconnectedCallback');
                        }
                      })()
                    );
                  }
                  componentOnReady() {
                    return ln(this).$onReadyPromise$;
                  }
                };
              (xn.$lazyBundleId$ = Ht[0]),
                !Ce.includes(dn) &&
                  !L.get(dn) &&
                  (K.push(dn), L.define(dn, Z(_r, xn, 1)));
            });
          }),
            (Be.innerHTML =
              K + '{visibility:hidden}.hydrated{visibility:inherit}'),
            Be.setAttribute('data-styles', ''),
            Q.insertBefore(Be, ie ? ie.nextSibling : Q.firstChild),
            (et = !1),
            xe.length
              ? xe.map((Ht) => Ht.connectedCallback())
              : ue.jmp(() => (ot = setTimeout(sn, 30)));
        },
        Zt = (T) => {
          const $ = new URL(T, ue.$resourcesUrl$);
          return $.origin !== De.location.origin ? $.href : $.pathname;
        },
        an = new WeakMap(),
        ln = (T) => an.get(T),
        ir = (T, $) => an.set(($.$lazyInstance$ = T), $),
        Tn = (T, $) => {
          const U = {
            $flags$: 0,
            $hostElement$: T,
            $cmpMeta$: $,
            $instanceValues$: new Map(),
          };
          return (
            (U.$onInstancePromise$ = new Promise(
              (K) => (U.$onInstanceResolve$ = K)
            )),
            (U.$onReadyPromise$ = new Promise((K) => (U.$onReadyResolve$ = K))),
            (T['s-p'] = []),
            (T['s-rc'] = []),
            ee(T, U, $.$listeners$),
            an.set(T, U)
          );
        },
        pn = (T, $) => $ in T,
        On = (T, $) => (0, console.error)(T, $),
        Sn = new Map(),
        gn = (T, $, U) => {
          const K = T.$tagName$.replace(/-/g, '_'),
            Ce = T.$lazyBundleId$,
            L = Sn.get(Ce);
          return L
            ? L[K]
            : S(863)(`./${Ce}.entry.js`).then((Q) => (Sn.set(Ce, Q), Q[K]), On);
        },
        fr = new Map(),
        Sr = [],
        pr = [],
        Cr = [],
        sr = (T, $) => (U) => {
          T.push(U),
            Pe || ((Pe = !0), $ && 4 & ue.$flags$ ? Tt(yn) : ue.raf(yn));
        },
        ar = (T) => {
          for (let $ = 0; $ < T.length; $++)
            try {
              T[$](performance.now());
            } catch (U) {
              On(U);
            }
          T.length = 0;
        },
        yn = () => {
          ar(pr), ar(Cr), (Pe = pr.length > 0) && ue.raf(yn);
        },
        Tt = (T) => $e().then(T),
        mn = sr(pr, !1),
        en = sr(Cr, !0),
        Rn = { isDev: !1, isBrowser: !0, isServer: !1, isTesting: !1 };
    },
    697: (at, ke, S) => {
      'use strict';
      S.d(ke, {
        L: () => z,
        a: () => ge,
        b: () => Ne,
        c: () => re,
        d: () => Fe,
        e: () => q,
        g: () => B,
        l: () => Te,
        s: () => le,
        t: () => De,
      });
      var o = S(5861),
        N = S(1308),
        j = S(5730);
      const z = 'ionViewWillEnter',
        ge = 'ionViewDidEnter',
        Ne = 'ionViewWillLeave',
        re = 'ionViewDidLeave',
        Fe = 'ionViewWillUnload',
        De = (V) =>
          new Promise((W, G) => {
            (0, N.c)(() => {
              we(V),
                ue(V).then(
                  (Se) => {
                    Se.animation && Se.animation.destroy(), te(V), W(Se);
                  },
                  (Se) => {
                    te(V), G(Se);
                  }
                );
            });
          }),
        we = (V) => {
          const W = V.enteringEl,
            G = V.leavingEl;
          fe(W, G, V.direction),
            V.showGoBack
              ? W.classList.add('can-go-back')
              : W.classList.remove('can-go-back'),
            le(W, !1),
            W.style.setProperty('pointer-events', 'none'),
            G && (le(G, !1), G.style.setProperty('pointer-events', 'none'));
        },
        ue = (function () {
          var V = (0, o.Z)(function* (W) {
            const G = yield ve(W);
            return G && N.B.isBrowser ? $e(G, W) : me(W);
          });
          return function (G) {
            return V.apply(this, arguments);
          };
        })(),
        te = (V) => {
          const W = V.enteringEl,
            G = V.leavingEl;
          W.classList.remove('ion-page-invisible'),
            W.style.removeProperty('pointer-events'),
            void 0 !== G &&
              (G.classList.remove('ion-page-invisible'),
              G.style.removeProperty('pointer-events'));
        },
        ve = (function () {
          var V = (0, o.Z)(function* (W) {
            return W.leavingEl && W.animated && 0 !== W.duration
              ? W.animationBuilder
                ? W.animationBuilder
                : 'ios' === W.mode
                ? (yield Promise.resolve().then(S.bind(S, 3953)))
                    .iosTransitionAnimation
                : (yield Promise.resolve().then(S.bind(S, 3880)))
                    .mdTransitionAnimation
              : void 0;
          });
          return function (G) {
            return V.apply(this, arguments);
          };
        })(),
        $e = (function () {
          var V = (0, o.Z)(function* (W, G) {
            yield ee(G, !0);
            const Se = W(G.baseEl, G);
            ye(G.enteringEl, G.leavingEl);
            const pe = yield Ee(Se, G);
            return (
              G.progressCallback && G.progressCallback(void 0),
              pe && ae(G.enteringEl, G.leavingEl),
              { hasCompleted: pe, animation: Se }
            );
          });
          return function (G, Se) {
            return V.apply(this, arguments);
          };
        })(),
        me = (function () {
          var V = (0, o.Z)(function* (W) {
            const G = W.enteringEl,
              Se = W.leavingEl;
            return yield ee(W, !1), ye(G, Se), ae(G, Se), { hasCompleted: !0 };
          });
          return function (G) {
            return V.apply(this, arguments);
          };
        })(),
        ee = (function () {
          var V = (0, o.Z)(function* (W, G) {
            const pe = (void 0 !== W.deepWait ? W.deepWait : G)
              ? [q(W.enteringEl), q(W.leavingEl)]
              : [de(W.enteringEl), de(W.leavingEl)];
            yield Promise.all(pe), yield Ve(W.viewIsReady, W.enteringEl);
          });
          return function (G, Se) {
            return V.apply(this, arguments);
          };
        })(),
        Ve = (function () {
          var V = (0, o.Z)(function* (W, G) {
            W && (yield W(G));
          });
          return function (G, Se) {
            return V.apply(this, arguments);
          };
        })(),
        Ee = (V, W) => {
          const G = W.progressCallback,
            Se = new Promise((pe) => {
              V.onFinish((We) => pe(1 === We));
            });
          return G ? (V.progressStart(!0), G(V)) : V.play(), Se;
        },
        ye = (V, W) => {
          Te(W, Ne), Te(V, z);
        },
        ae = (V, W) => {
          Te(V, ge), Te(W, re);
        },
        Te = (V, W) => {
          if (V) {
            const G = new CustomEvent(W, { bubbles: !1, cancelable: !1 });
            V.dispatchEvent(G);
          }
        },
        de = (V) =>
          V ? new Promise((W) => (0, j.c)(V, W)) : Promise.resolve(),
        q = (function () {
          var V = (0, o.Z)(function* (W) {
            const G = W;
            if (G) {
              if (null != G.componentOnReady) {
                if (null != (yield G.componentOnReady())) return;
              } else if (null != G.__registerHost)
                return void (yield new Promise((pe) => (0, j.r)(pe)));
              yield Promise.all(Array.from(G.children).map(q));
            }
          });
          return function (G) {
            return V.apply(this, arguments);
          };
        })(),
        le = (V, W) => {
          W
            ? (V.setAttribute('aria-hidden', 'true'),
              V.classList.add('ion-page-hidden'))
            : ((V.hidden = !1),
              V.removeAttribute('aria-hidden'),
              V.classList.remove('ion-page-hidden'));
        },
        fe = (V, W, G) => {
          void 0 !== V && (V.style.zIndex = 'back' === G ? '99' : '101'),
            void 0 !== W && (W.style.zIndex = '100');
        },
        B = (V) =>
          V.classList.contains('ion-page')
            ? V
            : V.querySelector(
                ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
              ) || V;
    },
    1911: (at, ke, S) => {
      'use strict';
      S.r(ke),
        S.d(ke, { GESTURE_CONTROLLER: () => o.G, createGesture: () => Ae });
      var o = S(4349);
      const N = (ue, te, ve, $e) => {
          const me = j(ue)
            ? { capture: !!$e.capture, passive: !!$e.passive }
            : !!$e.capture;
          let ee, Ve;
          return (
            ue.__zone_symbol__addEventListener
              ? ((ee = '__zone_symbol__addEventListener'),
                (Ve = '__zone_symbol__removeEventListener'))
              : ((ee = 'addEventListener'), (Ve = 'removeEventListener')),
            ue[ee](te, ve, me),
            () => {
              ue[Ve](te, ve, me);
            }
          );
        },
        j = (ue) => {
          if (void 0 === z)
            try {
              const te = Object.defineProperty({}, 'passive', {
                get: () => {
                  z = !0;
                },
              });
              ue.addEventListener('optsTest', () => {}, te);
            } catch {
              z = !1;
            }
          return !!z;
        };
      let z;
      const re = (ue) => (ue instanceof Document ? ue : ue.ownerDocument),
        Ae = (ue) => {
          let te = !1,
            ve = !1,
            $e = !0,
            me = !1;
          const ee = Object.assign(
              {
                disableScroll: !1,
                direction: 'x',
                gesturePriority: 0,
                passive: !0,
                maxAngle: 40,
                threshold: 10,
              },
              ue
            ),
            Ve = ee.canStart,
            Ee = ee.onWillStart,
            ye = ee.onStart,
            ae = ee.onEnd,
            Te = ee.notCaptured,
            de = ee.onMove,
            q = ee.threshold,
            le = ee.passive,
            fe = ee.blurOnStart,
            B = {
              type: 'pan',
              startX: 0,
              startY: 0,
              startTime: 0,
              currentX: 0,
              currentY: 0,
              velocityX: 0,
              velocityY: 0,
              deltaX: 0,
              deltaY: 0,
              currentTime: 0,
              event: void 0,
              data: void 0,
            },
            V = ((ue, te, ve) => {
              const $e = ve * (Math.PI / 180),
                me = 'x' === ue,
                ee = Math.cos($e),
                Ve = te * te;
              let Ee = 0,
                ye = 0,
                ae = !1,
                Te = 0;
              return {
                start(de, q) {
                  (Ee = de), (ye = q), (Te = 0), (ae = !0);
                },
                detect(de, q) {
                  if (!ae) return !1;
                  const le = de - Ee,
                    fe = q - ye,
                    B = le * le + fe * fe;
                  if (B < Ve) return !1;
                  const V = Math.sqrt(B),
                    W = (me ? le : fe) / V;
                  return (Te = W > ee ? 1 : W < -ee ? -1 : 0), (ae = !1), !0;
                },
                isGesture: () => 0 !== Te,
                getDirection: () => Te,
              };
            })(ee.direction, ee.threshold, ee.maxAngle),
            W = o.G.createGesture({
              name: ue.gestureName,
              priority: ue.gesturePriority,
              disableScroll: ue.disableScroll,
            }),
            pe = () => {
              !te || ((me = !1), de && de(B));
            },
            We = () =>
              !!W.capture() &&
              ((te = !0),
              ($e = !1),
              (B.startX = B.currentX),
              (B.startY = B.currentY),
              (B.startTime = B.currentTime),
              Ee ? Ee(B).then(k) : k(),
              !0),
            k = () => {
              fe &&
                (() => {
                  if (typeof document < 'u') {
                    const be = document.activeElement;
                    be?.blur && be.blur();
                  }
                })(),
                ye && ye(B),
                ($e = !0);
            },
            F = () => {
              (te = !1), (ve = !1), (me = !1), ($e = !0), W.release();
            },
            J = (be) => {
              const Ye = te,
                nt = $e;
              if ((F(), nt)) {
                if ((Pe(B, be), Ye)) return void (ae && ae(B));
                Te && Te(B);
              }
            },
            oe = ((ue, te, ve, $e, me) => {
              let ee,
                Ve,
                Ee,
                ye,
                ae,
                Te,
                de,
                q = 0;
              const le = (se) => {
                  (q = Date.now() + 2e3),
                    te(se) &&
                      (!Ve && ve && (Ve = N(ue, 'touchmove', ve, me)),
                      Ee || (Ee = N(se.target, 'touchend', B, me)),
                      ye || (ye = N(se.target, 'touchcancel', B, me)));
                },
                fe = (se) => {
                  q > Date.now() ||
                    !te(se) ||
                    (!Te && ve && (Te = N(re(ue), 'mousemove', ve, me)),
                    de || (de = N(re(ue), 'mouseup', V, me)));
                },
                B = (se) => {
                  W(), $e && $e(se);
                },
                V = (se) => {
                  G(), $e && $e(se);
                },
                W = () => {
                  Ve && Ve(), Ee && Ee(), ye && ye(), (Ve = Ee = ye = void 0);
                },
                G = () => {
                  Te && Te(), de && de(), (Te = de = void 0);
                },
                Se = () => {
                  W(), G();
                },
                pe = (se = !0) => {
                  se
                    ? (ee || (ee = N(ue, 'touchstart', le, me)),
                      ae || (ae = N(ue, 'mousedown', fe, me)))
                    : (ee && ee(), ae && ae(), (ee = ae = void 0), Se());
                };
              return {
                enable: pe,
                stop: Se,
                destroy: () => {
                  pe(!1), ($e = ve = te = void 0);
                },
              };
            })(
              ee.el,
              (be) => {
                const Ye = we(be);
                return (
                  !(
                    ve ||
                    !$e ||
                    (De(be, B),
                    (B.startX = B.currentX),
                    (B.startY = B.currentY),
                    (B.startTime = B.currentTime = Ye),
                    (B.velocityX = B.velocityY = B.deltaX = B.deltaY = 0),
                    (B.event = be),
                    Ve && !1 === Ve(B)) ||
                    (W.release(), !W.start())
                  ) &&
                  ((ve = !0),
                  0 === q ? We() : (V.start(B.startX, B.startY), !0))
                );
              },
              (be) => {
                te
                  ? !me &&
                    $e &&
                    ((me = !0), Pe(B, be), requestAnimationFrame(pe))
                  : (Pe(B, be),
                    V.detect(B.currentX, B.currentY) &&
                      (!V.isGesture() || !We()) &&
                      he());
              },
              J,
              { capture: !1, passive: le }
            ),
            he = () => {
              F(), oe.stop(), Te && Te(B);
            };
          return {
            enable(be = !0) {
              be || (te && J(void 0), F()), oe.enable(be);
            },
            destroy() {
              W.destroy(), oe.destroy();
            },
          };
        },
        Pe = (ue, te) => {
          if (!te) return;
          const ve = ue.currentX,
            $e = ue.currentY,
            me = ue.currentTime;
          De(te, ue);
          const ee = ue.currentX,
            Ve = ue.currentY,
            ye = (ue.currentTime = we(te)) - me;
          if (ye > 0 && ye < 100) {
            const Te = (Ve - $e) / ye;
            (ue.velocityX = ((ee - ve) / ye) * 0.7 + 0.3 * ue.velocityX),
              (ue.velocityY = 0.7 * Te + 0.3 * ue.velocityY);
          }
          (ue.deltaX = ee - ue.startX),
            (ue.deltaY = Ve - ue.startY),
            (ue.event = te);
        },
        De = (ue, te) => {
          let ve = 0,
            $e = 0;
          if (ue) {
            const me = ue.changedTouches;
            if (me && me.length > 0) {
              const ee = me[0];
              (ve = ee.clientX), ($e = ee.clientY);
            } else void 0 !== ue.pageX && ((ve = ue.pageX), ($e = ue.pageY));
          }
          (te.currentX = ve), (te.currentY = $e);
        },
        we = (ue) => ue.timeStamp || Date.now();
    },
    9658: (at, ke, S) => {
      'use strict';
      S.d(ke, {
        a: () => De,
        b: () => pe,
        c: () => j,
        g: () => Pe,
        i: () => We,
      });
      var o = S(1308);
      class N {
        constructor() {
          this.m = new Map();
        }
        reset(k) {
          this.m = new Map(Object.entries(k));
        }
        get(k, F) {
          const J = this.m.get(k);
          return void 0 !== J ? J : F;
        }
        getBoolean(k, F = !1) {
          const J = this.m.get(k);
          return void 0 === J ? F : 'string' == typeof J ? 'true' === J : !!J;
        }
        getNumber(k, F) {
          const J = parseFloat(this.m.get(k));
          return isNaN(J) ? (void 0 !== F ? F : NaN) : J;
        }
        set(k, F) {
          this.m.set(k, F);
        }
      }
      const j = new N(),
        Ae = 'ionic-persist-config',
        Pe = (se) => we(se),
        De = (se, k) => (
          'string' == typeof se && ((k = se), (se = void 0)), Pe(se).includes(k)
        ),
        we = (se = window) => {
          if (typeof se > 'u') return [];
          se.Ionic = se.Ionic || {};
          let k = se.Ionic.platforms;
          return (
            null == k &&
              ((k = se.Ionic.platforms = ue(se)),
              k.forEach((F) =>
                se.document.documentElement.classList.add(`plt-${F}`)
              )),
            k
          );
        },
        ue = (se) => {
          const k = j.get('platform');
          return Object.keys(G).filter((F) => {
            const J = k?.[F];
            return 'function' == typeof J ? J(se) : G[F](se);
          });
        },
        ve = (se) => !!(V(se, /iPad/i) || (V(se, /Macintosh/i) && ae(se))),
        ee = (se) => V(se, /android|sink/i),
        ae = (se) => W(se, '(any-pointer:coarse)'),
        de = (se) => q(se) || le(se),
        q = (se) => !!(se.cordova || se.phonegap || se.PhoneGap),
        le = (se) => !!se.Capacitor?.isNative,
        V = (se, k) => k.test(se.navigator.userAgent),
        W = (se, k) => {
          var F;
          return null === (F = se.matchMedia) || void 0 === F
            ? void 0
            : F.call(se, k).matches;
        },
        G = {
          ipad: ve,
          iphone: (se) => V(se, /iPhone/i),
          ios: (se) => V(se, /iPhone|iPod/i) || ve(se),
          android: ee,
          phablet: (se) => {
            const k = se.innerWidth,
              F = se.innerHeight,
              J = Math.min(k, F),
              oe = Math.max(k, F);
            return J > 390 && J < 520 && oe > 620 && oe < 800;
          },
          tablet: (se) => {
            const k = se.innerWidth,
              F = se.innerHeight,
              J = Math.min(k, F),
              oe = Math.max(k, F);
            return (
              ve(se) ||
              ((se) => ee(se) && !V(se, /mobile/i))(se) ||
              (J > 460 && J < 820 && oe > 780 && oe < 1400)
            );
          },
          cordova: q,
          capacitor: le,
          electron: (se) => V(se, /electron/i),
          pwa: (se) => {
            var k;
            return !(
              !(null === (k = se.matchMedia) || void 0 === k
                ? void 0
                : k.call(se, '(display-mode: standalone)').matches) &&
              !se.navigator.standalone
            );
          },
          mobile: ae,
          mobileweb: (se) => ae(se) && !de(se),
          desktop: (se) => !ae(se),
          hybrid: de,
        };
      let Se;
      const pe = (se) => (se && (0, o.g)(se)) || Se,
        We = (se = {}) => {
          if (typeof window > 'u') return;
          const k = window.document,
            F = window,
            J = (F.Ionic = F.Ionic || {}),
            oe = {};
          se._ael && (oe.ael = se._ael),
            se._rel && (oe.rel = se._rel),
            se._ce && (oe.ce = se._ce),
            (0, o.s)(oe);
          const he = Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    ((se) => {
                      try {
                        const k = se.sessionStorage.getItem(Ae);
                        return null !== k ? JSON.parse(k) : {};
                      } catch {
                        return {};
                      }
                    })(F)
                  ),
                  { persistConfig: !1 }
                ),
                J.config
              ),
              ((se) => {
                const k = {};
                return (
                  se.location.search
                    .slice(1)
                    .split('&')
                    .map((F) => F.split('='))
                    .map(([F, J]) => [
                      decodeURIComponent(F),
                      decodeURIComponent(J),
                    ])
                    .filter(([F]) =>
                      ((se, k) => se.substr(0, k.length) === k)(F, 'ionic:')
                    )
                    .map(([F, J]) => [F.slice('ionic:'.length), J])
                    .forEach(([F, J]) => {
                      k[F] = J;
                    }),
                  k
                );
              })(F)
            ),
            se
          );
          j.reset(he),
            j.getBoolean('persistConfig') &&
              ((se, k) => {
                try {
                  se.sessionStorage.setItem(Ae, JSON.stringify(k));
                } catch {
                  return;
                }
              })(F, he),
            we(F),
            (J.config = j),
            (J.mode = Se =
              j.get(
                'mode',
                k.documentElement.getAttribute('mode') ||
                  (De(F, 'ios') ? 'ios' : 'md')
              )),
            j.set('mode', Se),
            k.documentElement.setAttribute('mode', Se),
            k.documentElement.classList.add(Se),
            j.getBoolean('_testing') && j.set('animated', !1);
          const be = (nt) => {
              var Ke;
              return null === (Ke = nt.tagName) || void 0 === Ke
                ? void 0
                : Ke.startsWith('ION-');
            },
            Ye = (nt) => ['ios', 'md'].includes(nt);
          (0, o.a)((nt) => {
            for (; nt; ) {
              const Ke = nt.mode || nt.getAttribute('mode');
              if (Ke) {
                if (Ye(Ke)) return Ke;
                be(nt) &&
                  console.warn(
                    'Invalid ionic mode: "' + Ke + '", expected: "ios" or "md"'
                  );
              }
              nt = nt.parentElement;
            }
            return Se;
          });
        };
    },
    3953: (at, ke, S) => {
      'use strict';
      S.r(ke), S.d(ke, { iosTransitionAnimation: () => ue, shadow: () => re });
      var o = S(8834),
        N = S(697);
      S(3457), S(1308);
      const Ne = (te) => document.querySelector(`${te}.ion-cloned-element`),
        re = (te) => te.shadowRoot || te,
        Fe = (te) => {
          const ve =
              'ION-TABS' === te.tagName ? te : te.querySelector('ion-tabs'),
            $e =
              'ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large';
          if (null != ve) {
            const me = ve.querySelector(
              'ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)'
            );
            return null != me ? me.querySelector($e) : null;
          }
          return te.querySelector($e);
        },
        Ae = (te, ve) => {
          const $e =
            'ION-TABS' === te.tagName ? te : te.querySelector('ion-tabs');
          let me = [];
          if (null != $e) {
            const ee = $e.querySelector(
              'ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)'
            );
            null != ee && (me = ee.querySelectorAll('ion-buttons'));
          } else me = te.querySelectorAll('ion-buttons');
          for (const ee of me) {
            const Ve = ee.closest('ion-header'),
              Ee =
                Ve &&
                !Ve.classList.contains('header-collapse-condense-inactive'),
              ye = ee.querySelector('ion-back-button'),
              ae = ee.classList.contains('buttons-collapse'),
              Te = 'start' === ee.slot || '' === ee.slot;
            if (null !== ye && Te && ((ae && Ee && ve) || !ae)) return ye;
          }
          return null;
        },
        De = (te, ve, $e, me, ee, Ve) => {
          const Ee = ve ? `calc(100% - ${Ve.right + 4}px)` : Ve.left - 4 + 'px',
            ye = ve ? '7px' : '-7px',
            ae = ve ? '-4px' : '4px',
            Te = ve ? '-4px' : '4px',
            de = ve ? 'right' : 'left',
            q = ve ? 'left' : 'right',
            B = $e
              ? [
                  {
                    offset: 0,
                    opacity: 1,
                    transform: `translate3d(${ae}, ${
                      Ve.top - 46
                    }px, 0) scale(1)`,
                  },
                  { offset: 0.6, opacity: 0 },
                  {
                    offset: 1,
                    opacity: 0,
                    transform: `translate3d(${ye}, ${
                      ee.top - 40
                    }px, 0) scale(2.1)`,
                  },
                ]
              : [
                  {
                    offset: 0,
                    opacity: 0,
                    transform: `translate3d(${ye}, ${
                      ee.top - 40
                    }px, 0) scale(2.1)`,
                  },
                  {
                    offset: 1,
                    opacity: 1,
                    transform: `translate3d(${ae}, ${
                      Ve.top - 46
                    }px, 0) scale(1)`,
                  },
                ],
            G = $e
              ? [
                  {
                    offset: 0,
                    opacity: 1,
                    transform: `translate3d(${Te}, ${
                      Ve.top - 46
                    }px, 0) scale(1)`,
                  },
                  {
                    offset: 0.2,
                    opacity: 0,
                    transform: `translate3d(${Te}, ${
                      Ve.top - 41
                    }px, 0) scale(0.6)`,
                  },
                  {
                    offset: 1,
                    opacity: 0,
                    transform: `translate3d(${Te}, ${
                      Ve.top - 41
                    }px, 0) scale(0.6)`,
                  },
                ]
              : [
                  {
                    offset: 0,
                    opacity: 0,
                    transform: `translate3d(${Te}, ${
                      Ve.top - 41
                    }px, 0) scale(0.6)`,
                  },
                  {
                    offset: 1,
                    opacity: 1,
                    transform: `translate3d(${Te}, ${
                      Ve.top - 46
                    }px, 0) scale(1)`,
                  },
                ],
            Se = (0, o.c)(),
            pe = (0, o.c)(),
            We = Ne('ion-back-button'),
            se = re(We).querySelector('.button-text'),
            k = re(We).querySelector('ion-icon');
          (We.text = me.text),
            (We.mode = me.mode),
            (We.icon = me.icon),
            (We.color = me.color),
            (We.disabled = me.disabled),
            We.style.setProperty('display', 'block'),
            We.style.setProperty('position', 'fixed'),
            pe.addElement(k),
            Se.addElement(se),
            Se.beforeStyles({ 'transform-origin': `${de} center` })
              .beforeAddWrite(() => {
                me.style.setProperty('display', 'none'),
                  We.style.setProperty(de, Ee);
              })
              .afterAddWrite(() => {
                me.style.setProperty('display', ''),
                  We.style.setProperty('display', 'none'),
                  We.style.removeProperty(de);
              })
              .keyframes(B),
            pe.beforeStyles({ 'transform-origin': `${q} center` }).keyframes(G),
            te.addAnimation([Se, pe]);
        },
        we = (te, ve, $e, me, ee, Ve) => {
          const Ee = ve ? `calc(100% - ${ee.right}px)` : `${ee.left}px`,
            ye = ve ? '-18px' : '18px',
            ae = ve ? 'right' : 'left',
            q = $e
              ? [
                  {
                    offset: 0,
                    opacity: 0,
                    transform: `translate3d(${ye}, ${
                      Ve.top - 4
                    }px, 0) scale(0.49)`,
                  },
                  { offset: 0.1, opacity: 0 },
                  {
                    offset: 1,
                    opacity: 1,
                    transform: `translate3d(0, ${ee.top - 2}px, 0) scale(1)`,
                  },
                ]
              : [
                  {
                    offset: 0,
                    opacity: 0.99,
                    transform: `translate3d(0, ${ee.top - 2}px, 0) scale(1)`,
                  },
                  { offset: 0.6, opacity: 0 },
                  {
                    offset: 1,
                    opacity: 0,
                    transform: `translate3d(${ye}, ${
                      Ve.top - 4
                    }px, 0) scale(0.5)`,
                  },
                ],
            le = Ne('ion-title'),
            fe = (0, o.c)();
          (le.innerText = me.innerText),
            (le.size = me.size),
            (le.color = me.color),
            fe.addElement(le),
            fe
              .beforeStyles({
                'transform-origin': `${ae} center`,
                height: '46px',
                display: '',
                position: 'relative',
                [ae]: Ee,
              })
              .beforeAddWrite(() => {
                me.style.setProperty('display', 'none');
              })
              .afterAddWrite(() => {
                me.style.setProperty('display', ''),
                  le.style.setProperty('display', 'none');
              })
              .keyframes(q),
            te.addAnimation(fe);
        },
        ue = (te, ve) => {
          var $e;
          try {
            const me = 'cubic-bezier(0.32,0.72,0,1)',
              ee = 'opacity',
              Ve = 'transform',
              Ee = '0%',
              ae = 'rtl' === te.ownerDocument.dir,
              Te = ae ? '-99.5%' : '99.5%',
              de = ae ? '33%' : '-33%',
              q = ve.enteringEl,
              le = ve.leavingEl,
              fe = 'back' === ve.direction,
              B = q.querySelector(':scope > ion-content'),
              V = q.querySelectorAll(
                ':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'
              ),
              W = q.querySelectorAll(':scope > ion-header > ion-toolbar'),
              G = (0, o.c)(),
              Se = (0, o.c)();
            if (
              (G.addElement(q)
                .duration(
                  (null !== ($e = ve.duration) && void 0 !== $e ? $e : 0) || 540
                )
                .easing(ve.easing || me)
                .fill('both')
                .beforeRemoveClass('ion-page-invisible'),
              le && null != te)
            ) {
              const k = (0, o.c)();
              k.addElement(te), G.addAnimation(k);
            }
            if (
              (B || 0 !== W.length || 0 !== V.length
                ? (Se.addElement(B), Se.addElement(V))
                : Se.addElement(
                    q.querySelector(
                      ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
                    )
                  ),
              G.addAnimation(Se),
              fe
                ? Se.beforeClearStyles([ee])
                    .fromTo(
                      'transform',
                      `translateX(${de})`,
                      `translateX(${Ee})`
                    )
                    .fromTo(ee, 0.8, 1)
                : Se.beforeClearStyles([ee]).fromTo(
                    'transform',
                    `translateX(${Te})`,
                    `translateX(${Ee})`
                  ),
              B)
            ) {
              const k = re(B).querySelector('.transition-effect');
              if (k) {
                const F = k.querySelector('.transition-cover'),
                  J = k.querySelector('.transition-shadow'),
                  oe = (0, o.c)(),
                  he = (0, o.c)(),
                  be = (0, o.c)();
                oe
                  .addElement(k)
                  .beforeStyles({ opacity: '1', display: 'block' })
                  .afterStyles({ opacity: '', display: '' }),
                  he.addElement(F).beforeClearStyles([ee]).fromTo(ee, 0, 0.1),
                  be
                    .addElement(J)
                    .beforeClearStyles([ee])
                    .fromTo(ee, 0.03, 0.7),
                  oe.addAnimation([he, be]),
                  Se.addAnimation([oe]);
              }
            }
            const pe = q.querySelector('ion-header.header-collapse-condense'),
              { forward: We, backward: se } = ((te, ve, $e, me, ee) => {
                const Ve = Ae(me, $e),
                  Ee = Fe(ee),
                  ye = Fe(me),
                  ae = Ae(ee, $e),
                  Te = null !== Ve && null !== Ee && !$e,
                  de = null !== ye && null !== ae && $e;
                if (Te) {
                  const q = Ee.getBoundingClientRect(),
                    le = Ve.getBoundingClientRect();
                  we(te, ve, $e, Ee, q, le), De(te, ve, $e, Ve, q, le);
                } else if (de) {
                  const q = ye.getBoundingClientRect(),
                    le = ae.getBoundingClientRect();
                  we(te, ve, $e, ye, q, le), De(te, ve, $e, ae, q, le);
                }
                return { forward: Te, backward: de };
              })(G, ae, fe, q, le);
            if (
              (W.forEach((k) => {
                const F = (0, o.c)();
                F.addElement(k), G.addAnimation(F);
                const J = (0, o.c)();
                J.addElement(k.querySelector('ion-title'));
                const oe = (0, o.c)(),
                  he = Array.from(
                    k.querySelectorAll('ion-buttons,[menuToggle]')
                  ),
                  be = k.closest('ion-header'),
                  Ye = be?.classList.contains(
                    'header-collapse-condense-inactive'
                  );
                let nt;
                (nt = he.filter(
                  fe
                    ? (Ft) => {
                        const Mt = Ft.classList.contains('buttons-collapse');
                        return (Mt && !Ye) || !Mt;
                      }
                    : (Ft) => !Ft.classList.contains('buttons-collapse')
                )),
                  oe.addElement(nt);
                const Ke = (0, o.c)();
                Ke.addElement(
                  k.querySelectorAll(
                    ':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'
                  )
                );
                const ft = (0, o.c)();
                ft.addElement(re(k).querySelector('.toolbar-background'));
                const bt = (0, o.c)(),
                  lt = k.querySelector('ion-back-button');
                if (
                  (lt && bt.addElement(lt),
                  F.addAnimation([J, oe, Ke, ft, bt]),
                  oe.fromTo(ee, 0.01, 1),
                  Ke.fromTo(ee, 0.01, 1),
                  fe)
                )
                  Ye ||
                    J.fromTo(
                      'transform',
                      `translateX(${de})`,
                      `translateX(${Ee})`
                    ).fromTo(ee, 0.01, 1),
                    Ke.fromTo(
                      'transform',
                      `translateX(${de})`,
                      `translateX(${Ee})`
                    ),
                    bt.fromTo(ee, 0.01, 1);
                else if (
                  (pe ||
                    J.fromTo(
                      'transform',
                      `translateX(${Te})`,
                      `translateX(${Ee})`
                    ).fromTo(ee, 0.01, 1),
                  Ke.fromTo(
                    'transform',
                    `translateX(${Te})`,
                    `translateX(${Ee})`
                  ),
                  ft.beforeClearStyles([ee, 'transform']),
                  be?.translucent
                    ? ft.fromTo(
                        'transform',
                        ae ? 'translateX(-100%)' : 'translateX(100%)',
                        'translateX(0px)'
                      )
                    : ft.fromTo(ee, 0.01, 'var(--opacity)'),
                  We || bt.fromTo(ee, 0.01, 1),
                  lt && !We)
                ) {
                  const Mt = (0, o.c)();
                  Mt.addElement(re(lt).querySelector('.button-text')).fromTo(
                    'transform',
                    ae ? 'translateX(-100px)' : 'translateX(100px)',
                    'translateX(0px)'
                  ),
                    F.addAnimation(Mt);
                }
              }),
              le)
            ) {
              const k = (0, o.c)(),
                F = le.querySelector(':scope > ion-content'),
                J = le.querySelectorAll(':scope > ion-header > ion-toolbar'),
                oe = le.querySelectorAll(
                  ':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'
                );
              if (
                (F || 0 !== J.length || 0 !== oe.length
                  ? (k.addElement(F), k.addElement(oe))
                  : k.addElement(
                      le.querySelector(
                        ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
                      )
                    ),
                G.addAnimation(k),
                fe)
              ) {
                k.beforeClearStyles([ee]).fromTo(
                  'transform',
                  `translateX(${Ee})`,
                  ae ? 'translateX(-100%)' : 'translateX(100%)'
                );
                const he = (0, N.g)(le);
                G.afterAddWrite(() => {
                  'normal' === G.getDirection() &&
                    he.style.setProperty('display', 'none');
                });
              } else
                k.fromTo(
                  'transform',
                  `translateX(${Ee})`,
                  `translateX(${de})`
                ).fromTo(ee, 1, 0.8);
              if (F) {
                const he = re(F).querySelector('.transition-effect');
                if (he) {
                  const be = he.querySelector('.transition-cover'),
                    Ye = he.querySelector('.transition-shadow'),
                    nt = (0, o.c)(),
                    Ke = (0, o.c)(),
                    ft = (0, o.c)();
                  nt
                    .addElement(he)
                    .beforeStyles({ opacity: '1', display: 'block' })
                    .afterStyles({ opacity: '', display: '' }),
                    Ke.addElement(be)
                      .beforeClearStyles([ee])
                      .fromTo(ee, 0.1, 0),
                    ft
                      .addElement(Ye)
                      .beforeClearStyles([ee])
                      .fromTo(ee, 0.7, 0.03),
                    nt.addAnimation([Ke, ft]),
                    k.addAnimation([nt]);
                }
              }
              J.forEach((he) => {
                const be = (0, o.c)();
                be.addElement(he);
                const Ye = (0, o.c)();
                Ye.addElement(he.querySelector('ion-title'));
                const nt = (0, o.c)(),
                  Ke = he.querySelectorAll('ion-buttons,[menuToggle]'),
                  ft = he.closest('ion-header'),
                  bt = ft?.classList.contains(
                    'header-collapse-condense-inactive'
                  ),
                  lt = Array.from(Ke).filter((jn) => {
                    const st = jn.classList.contains('buttons-collapse');
                    return (st && !bt) || !st;
                  });
                nt.addElement(lt);
                const Ft = (0, o.c)(),
                  Mt = he.querySelectorAll(
                    ':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'
                  );
                Mt.length > 0 && Ft.addElement(Mt);
                const ze = (0, o.c)();
                ze.addElement(re(he).querySelector('.toolbar-background'));
                const Lt = (0, o.c)(),
                  bn = he.querySelector('ion-back-button');
                if (
                  (bn && Lt.addElement(bn),
                  be.addAnimation([Ye, nt, Ft, Lt, ze]),
                  G.addAnimation(be),
                  Lt.fromTo(ee, 0.99, 0),
                  nt.fromTo(ee, 0.99, 0),
                  Ft.fromTo(ee, 0.99, 0),
                  fe)
                ) {
                  if (
                    (bt ||
                      Ye.fromTo(
                        'transform',
                        `translateX(${Ee})`,
                        ae ? 'translateX(-100%)' : 'translateX(100%)'
                      ).fromTo(ee, 0.99, 0),
                    Ft.fromTo(
                      'transform',
                      `translateX(${Ee})`,
                      ae ? 'translateX(-100%)' : 'translateX(100%)'
                    ),
                    ze.beforeClearStyles([ee, 'transform']),
                    ft?.translucent
                      ? ze.fromTo(
                          'transform',
                          'translateX(0px)',
                          ae ? 'translateX(-100%)' : 'translateX(100%)'
                        )
                      : ze.fromTo(ee, 'var(--opacity)', 0),
                    bn && !se)
                  ) {
                    const st = (0, o.c)();
                    st
                      .addElement(re(bn).querySelector('.button-text'))
                      .fromTo(
                        'transform',
                        `translateX(${Ee})`,
                        `translateX(${(ae ? -124 : 124) + 'px'})`
                      ),
                      be.addAnimation(st);
                  }
                } else
                  bt ||
                    Ye.fromTo(
                      'transform',
                      `translateX(${Ee})`,
                      `translateX(${de})`
                    )
                      .fromTo(ee, 0.99, 0)
                      .afterClearStyles([Ve, ee]),
                    Ft.fromTo(
                      'transform',
                      `translateX(${Ee})`,
                      `translateX(${de})`
                    ).afterClearStyles([Ve, ee]),
                    Lt.afterClearStyles([ee]),
                    Ye.afterClearStyles([ee]),
                    nt.afterClearStyles([ee]);
              });
            }
            return G;
          } catch (me) {
            throw me;
          }
        };
    },
    3880: (at, ke, S) => {
      'use strict';
      S.r(ke), S.d(ke, { mdTransitionAnimation: () => ge });
      var o = S(8834),
        N = S(697);
      S(3457), S(1308);
      const ge = (Ne, re) => {
        var Fe, Ae, Pe;
        const ue = 'back' === re.direction,
          ve = re.leavingEl,
          $e = (0, N.g)(re.enteringEl),
          me = $e.querySelector('ion-toolbar'),
          ee = (0, o.c)();
        if (
          (ee
            .addElement($e)
            .fill('both')
            .beforeRemoveClass('ion-page-invisible'),
          ue
            ? ee
                .duration(
                  (null !== (Fe = re.duration) && void 0 !== Fe ? Fe : 0) || 200
                )
                .easing('cubic-bezier(0.47,0,0.745,0.715)')
            : ee
                .duration(
                  (null !== (Ae = re.duration) && void 0 !== Ae ? Ae : 0) || 280
                )
                .easing('cubic-bezier(0.36,0.66,0.04,1)')
                .fromTo('transform', 'translateY(40px)', 'translateY(0px)')
                .fromTo('opacity', 0.01, 1),
          me)
        ) {
          const Ve = (0, o.c)();
          Ve.addElement(me), ee.addAnimation(Ve);
        }
        if (ve && ue) {
          ee.duration(
            (null !== (Pe = re.duration) && void 0 !== Pe ? Pe : 0) || 200
          ).easing('cubic-bezier(0.47,0,0.745,0.715)');
          const Ve = (0, o.c)();
          Ve.addElement((0, N.g)(ve))
            .onFinish((Ee) => {
              1 === Ee &&
                Ve.elements.length > 0 &&
                Ve.elements[0].style.setProperty('display', 'none');
            })
            .fromTo('transform', 'translateY(0px)', 'translateY(40px)')
            .fromTo('opacity', 1, 0),
            ee.addAnimation(Ve);
        }
        return ee;
      };
    },
    1312: (at, ke, S) => {
      'use strict';
      S.d(ke, {
        B: () => F,
        G: () => J,
        a: () => Fe,
        b: () => Ae,
        c: () => ue,
        d: () => fe,
        e: () => ve,
        f: () => V,
        g: () => Se,
        h: () => Ne,
        i: () => We,
        j: () => ee,
        k: () => q,
        m: () => De,
        s: () => k,
      });
      var o = S(5861),
        N = S(9658),
        j = S(7593),
        z = S(5730);
      let ge = 0;
      const Ne = new WeakMap(),
        re = (oe) => ({
          create: (he) => $e(oe, he),
          dismiss: (he, be, Ye) => Te(document, he, be, oe, Ye),
          getTop: () =>
            (0, o.Z)(function* () {
              return q(document, oe);
            })(),
        }),
        Fe = re('ion-alert'),
        Ae = re('ion-action-sheet'),
        De = re('ion-modal'),
        ue = re('ion-popover'),
        ve = (oe) => {
          typeof document < 'u' && ae(document);
          const he = ge++;
          (oe.overlayIndex = he),
            oe.hasAttribute('id') || (oe.id = `ion-overlay-${he}`);
        },
        $e = (oe, he) =>
          typeof window < 'u' && typeof window.customElements < 'u'
            ? window.customElements.whenDefined(oe).then(() => {
                const be = document.createElement(oe);
                return (
                  be.classList.add('overlay-hidden'),
                  Object.assign(
                    be,
                    Object.assign(Object.assign({}, he), { hasController: !0 })
                  ),
                  W(document).appendChild(be),
                  new Promise((Ye) => (0, z.c)(be, Ye))
                );
              })
            : Promise.resolve(),
        me =
          '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',
        ee = (oe, he) => {
          let be = oe.querySelector(me);
          const Ye = be?.shadowRoot;
          Ye && (be = Ye.querySelector(me) || be),
            be ? (0, z.f)(be) : he.focus();
        },
        Ee = (oe, he) => {
          const be = Array.from(oe.querySelectorAll(me));
          let Ye = be.length > 0 ? be[be.length - 1] : null;
          const nt = Ye?.shadowRoot;
          nt && (Ye = nt.querySelector(me) || Ye), Ye ? Ye.focus() : he.focus();
        },
        ae = (oe) => {
          0 === ge &&
            ((ge = 1),
            oe.addEventListener(
              'focus',
              (he) => {
                ((oe, he) => {
                  const be = q(
                      he,
                      'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover'
                    ),
                    Ye = oe.target;
                  be &&
                    Ye &&
                    !be.classList.contains('ion-disable-focus-trap') &&
                    (be.shadowRoot
                      ? (() => {
                          if (be.contains(Ye)) be.lastFocus = Ye;
                          else {
                            const ft = be.lastFocus;
                            ee(be, be),
                              ft === he.activeElement && Ee(be, be),
                              (be.lastFocus = he.activeElement);
                          }
                        })()
                      : (() => {
                          if (be === Ye) be.lastFocus = void 0;
                          else {
                            const ft = (0, z.g)(be);
                            if (!ft.contains(Ye)) return;
                            const bt = ft.querySelector('.ion-overlay-wrapper');
                            if (!bt) return;
                            if (bt.contains(Ye)) be.lastFocus = Ye;
                            else {
                              const lt = be.lastFocus;
                              ee(bt, be),
                                lt === he.activeElement && Ee(bt, be),
                                (be.lastFocus = he.activeElement);
                            }
                          }
                        })());
                })(he, oe);
              },
              !0
            ),
            oe.addEventListener('ionBackButton', (he) => {
              const be = q(oe);
              be?.backdropDismiss &&
                he.detail.register(j.OVERLAY_BACK_BUTTON_PRIORITY, () =>
                  be.dismiss(void 0, F)
                );
            }),
            oe.addEventListener('keyup', (he) => {
              if ('Escape' === he.key) {
                const be = q(oe);
                be?.backdropDismiss && be.dismiss(void 0, F);
              }
            }));
        },
        Te = (oe, he, be, Ye, nt) => {
          const Ke = q(oe, Ye, nt);
          return Ke
            ? Ke.dismiss(he, be)
            : Promise.reject('overlay does not exist');
        },
        q = (oe, he, be) => {
          const Ye = ((oe, he) => (
            void 0 === he &&
              (he =
                'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast'),
            Array.from(oe.querySelectorAll(he)).filter(
              (be) => be.overlayIndex > 0
            )
          ))(oe, he).filter(
            (nt) => !((oe) => oe.classList.contains('overlay-hidden'))(nt)
          );
          return void 0 === be
            ? Ye[Ye.length - 1]
            : Ye.find((nt) => nt.id === be);
        },
        le = (oe = !1) => {
          const be = W(document).querySelector(
            'ion-router-outlet, ion-nav, #ion-view-container-root'
          );
          !be ||
            (oe
              ? be.setAttribute('aria-hidden', 'true')
              : be.removeAttribute('aria-hidden'));
        },
        fe = (function () {
          var oe = (0, o.Z)(function* (he, be, Ye, nt, Ke) {
            var ft, bt;
            if (he.presented) return;
            le(!0),
              (he.presented = !0),
              he.willPresent.emit(),
              null === (ft = he.willPresentShorthand) ||
                void 0 === ft ||
                ft.emit();
            const lt = (0, N.b)(he),
              Ft = he.enterAnimation
                ? he.enterAnimation
                : N.c.get(be, 'ios' === lt ? Ye : nt);
            (yield G(he, Ft, he.el, Ke)) &&
              (he.didPresent.emit(),
              null === (bt = he.didPresentShorthand) ||
                void 0 === bt ||
                bt.emit()),
              'ION-TOAST' !== he.el.tagName && B(he.el),
              he.keyboardClose &&
                (null === document.activeElement ||
                  !he.el.contains(document.activeElement)) &&
                he.el.focus();
          });
          return function (be, Ye, nt, Ke, ft) {
            return oe.apply(this, arguments);
          };
        })(),
        B = (function () {
          var oe = (0, o.Z)(function* (he) {
            let be = document.activeElement;
            if (!be) return;
            const Ye = be?.shadowRoot;
            Ye && (be = Ye.querySelector(me) || be),
              yield he.onDidDismiss(),
              be.focus();
          });
          return function (be) {
            return oe.apply(this, arguments);
          };
        })(),
        V = (function () {
          var oe = (0, o.Z)(function* (he, be, Ye, nt, Ke, ft, bt) {
            var lt, Ft;
            if (!he.presented) return !1;
            le(!1), (he.presented = !1);
            try {
              he.el.style.setProperty('pointer-events', 'none'),
                he.willDismiss.emit({ data: be, role: Ye }),
                null === (lt = he.willDismissShorthand) ||
                  void 0 === lt ||
                  lt.emit({ data: be, role: Ye });
              const Mt = (0, N.b)(he),
                ze = he.leaveAnimation
                  ? he.leaveAnimation
                  : N.c.get(nt, 'ios' === Mt ? Ke : ft);
              Ye !== J && (yield G(he, ze, he.el, bt)),
                he.didDismiss.emit({ data: be, role: Ye }),
                null === (Ft = he.didDismissShorthand) ||
                  void 0 === Ft ||
                  Ft.emit({ data: be, role: Ye }),
                Ne.delete(he),
                he.el.classList.add('overlay-hidden'),
                he.el.style.removeProperty('pointer-events');
            } catch (Mt) {
              console.error(Mt);
            }
            return he.el.remove(), !0;
          });
          return function (be, Ye, nt, Ke, ft, bt, lt) {
            return oe.apply(this, arguments);
          };
        })(),
        W = (oe) => oe.querySelector('ion-app') || oe.body,
        G = (function () {
          var oe = (0, o.Z)(function* (he, be, Ye, nt) {
            Ye.classList.remove('overlay-hidden');
            const ft = be(he.el, nt);
            (!he.animated || !N.c.getBoolean('animated', !0)) && ft.duration(0),
              he.keyboardClose &&
                ft.beforeAddWrite(() => {
                  const lt = Ye.ownerDocument.activeElement;
                  lt?.matches('input,ion-input, ion-textarea') && lt.blur();
                });
            const bt = Ne.get(he) || [];
            return Ne.set(he, [...bt, ft]), yield ft.play(), !0;
          });
          return function (be, Ye, nt, Ke) {
            return oe.apply(this, arguments);
          };
        })(),
        Se = (oe, he) => {
          let be;
          const Ye = new Promise((nt) => (be = nt));
          return (
            pe(oe, he, (nt) => {
              be(nt.detail);
            }),
            Ye
          );
        },
        pe = (oe, he, be) => {
          const Ye = (nt) => {
            (0, z.b)(oe, he, Ye), be(nt);
          };
          (0, z.a)(oe, he, Ye);
        },
        We = (oe) => 'cancel' === oe || oe === F,
        se = (oe) => oe(),
        k = (oe, he) => {
          if ('function' == typeof oe)
            return N.c.get(
              '_zoneGate',
              se
            )(() => {
              try {
                return oe(he);
              } catch (Ye) {
                throw Ye;
              }
            });
        },
        F = 'backdrop',
        J = 'gesture';
    },
    6146: (at, ke, S) => {
      'use strict';
      S.d(ke, { k: () => o });
      var o = (() => {
        return (
          ((N = o || (o = {})).NOT_SELECTED = 'NOT_SELECTED'),
          (N.VILLAGEOIS = 'VILLAGEOIS'),
          (N.LOUP_GAROU = 'LOUP_GAROU'),
          (N.CHASSEUR = 'CHASSEUR'),
          (N.CUPIDON = 'CUPIDON'),
          (N.PETITE_FILLE = 'PETITE_FILLE'),
          (N.SORCIERE = 'SORCIERE'),
          (N.VOLEUR = 'VOLEUR'),
          (N.VOYANTE = 'VOYANTE'),
          (N.JOUEUR_FLUTE = 'JOUEUR_FLUTE'),
          (N.CORBEAU = 'CORBEAU'),
          o
        );
        var N;
      })();
    },
    4206: (at, ke, S) => {
      'use strict';
      S.d(ke, { M: () => o });
      var o = (() => {
        return (
          ((N = o || (o = {})).WOLF_TARGET = 'WOLF_TARGET'),
          (N.HEALTH_POTION = 'HEALTH_POTION'),
          (N.DEATH_POTION = 'DEATH_POTION'),
          (N.CAPTAIN = 'CAPTAIN'),
          (N.LOVER = 'LOVER'),
          (N.CHARMED = 'CHARMED'),
          (N.RAVEN = 'RAVEN'),
          o
        );
        var N;
      })();
    },
    1022: (at, ke, S) => {
      'use strict';
      S.d(ke, { h: () => o });
      var o = (() => {
        return (
          ((N = o || (o = {}))[(N.VOLEUR = 0)] = 'VOLEUR'),
          (N[(N.CUPIDON = 1)] = 'CUPIDON'),
          (N[(N.VOYANTE = 2)] = 'VOYANTE'),
          (N[(N.AMOUREUX = 3)] = 'AMOUREUX'),
          (N[(N.LOUP_GAROU = 4)] = 'LOUP_GAROU'),
          (N[(N.SORCIERE_HEALTH = 5)] = 'SORCIERE_HEALTH'),
          (N[(N.SORCIERE_KILL = 6)] = 'SORCIERE_KILL'),
          (N[(N.VILLAGEOIS = 7)] = 'VILLAGEOIS'),
          (N[(N.CAPITAINE = 8)] = 'CAPITAINE'),
          (N[(N.CHASSEUR = 9)] = 'CHASSEUR'),
          (N[(N.JOUEUR_FLUTE = 10)] = 'JOUEUR_FLUTE'),
          (N[(N.CHARMED = 11)] = 'CHARMED'),
          (N[(N.CORBEAU = 12)] = 'CORBEAU'),
          o
        );
        var N;
      })();
    },
    6436: (at, ke, S) => {
      'use strict';
      S.d(ke, { K: () => o });
      var o = (() => {
        return (
          ((N = o || (o = {})).NONE = 'NONE'),
          (N.AMOUREUX = 'AMOUREUX'),
          (N.LOUP_GAROU = 'LOUP_GAROU'),
          (N.VILLAGEOIS = 'VILLAGEOIS'),
          (N.JOUEUR_FLUTE = 'JOUEUR_FLUTE'),
          o
        );
        var N;
      })();
    },
    3996: (at, ke, S) => {
      'use strict';
      S.d(ke, { h: () => We });
      var o = S(1135),
        N = S(6146),
        j = S(4206),
        z = S(1022),
        ge = S(5861),
        Ne = S(8256),
        re = S(5035);
      class Fe {
        constructor(k) {
          (this.alertController = k),
            (this.announcementsQueue = []),
            (this.isPresenting = !1);
        }
        announceDeaths(k) {
          const J = {
            header: 'Morts \xe0 annoncer',
            message: k.map((oe) => `<p>${oe.name}</p>`).join(''),
          };
          this.addAnnouncementToQueue(J);
        }
        addAnnouncementToQueue(k) {
          this.announcementsQueue.push({ ...k, buttons: ['OK'] }),
            this.isPresenting || this.showNextAnnouncement();
        }
        showNextAnnouncement() {
          var k = this;
          return (0, ge.Z)(function* () {
            k.isPresenting = !0;
            const F = yield k.alertController.create(
              k.announcementsQueue.shift()
            );
            F.onDidDismiss().then(() => {
              k.announcementsQueue.length > 0
                ? k.showNextAnnouncement()
                : (k.isPresenting = !1);
            }),
              yield F.present();
          })();
        }
      }
      (Fe.ɵfac = function (k) {
        return new (k || Fe)(Ne.LFG(re.Br));
      }),
        (Fe.ɵprov = Ne.Yz7({
          token: Fe,
          factory: Fe.ɵfac,
          providedIn: 'root',
        }));
      class Ae {
        constructor() {
          (this.isOnlyOnce = !1), (this.isDuringDay = !0);
        }
        handleAction(k, F) {
          const J = [...k];
          return (J.find((oe) => oe.id === F[0]).isDead = !0), J;
        }
        getRoundConfig(k) {
          return {
            role: z.h.VILLAGEOIS,
            selectablePlayers: this.getKillablePlayers(k),
            maxSelectable: 1,
            minSelectable: 1,
            isDuringDay: this.isDuringDay,
          };
        }
        getKillablePlayers(k) {
          return k.filter((F) => !F.isDead).map((F) => F.id);
        }
      }
      class Pe {
        constructor() {
          (this.isOnlyOnce = !0), (this.isDuringDay = !0);
        }
        handleAction(k, F) {
          const J = [...k];
          return J.find((oe) => oe.id === F[0])?.statuses.add(j.M.CAPTAIN), J;
        }
        getRoundConfig(k) {
          return {
            role: z.h.CAPITAINE,
            selectablePlayers: this.getSelectablePlayers(k),
            maxSelectable: 1,
            minSelectable: 1,
            isDuringDay: this.isDuringDay,
          };
        }
        getSelectablePlayers(k) {
          return k.filter((F) => !F.isDead).map((F) => F.id);
        }
      }
      class De {
        constructor() {
          (this.isOnlyOnce = !1), (this.isDuringDay = !1);
        }
        handleAction(k, F) {
          const J = [...k];
          return (
            J.find((oe) => oe.id === F[0])?.statuses.add(j.M.WOLF_TARGET), J
          );
        }
        getRoundConfig(k) {
          return {
            role: z.h.LOUP_GAROU,
            selectablePlayers: k
              .filter((F) => F.role !== N.k.LOUP_GAROU && !F.isDead)
              .map((F) => F.id),
            maxSelectable: 1,
            minSelectable: 1,
            isDuringDay: this.isDuringDay,
          };
        }
      }
      class we {
        constructor() {
          (this.isOnlyOnce = !1), (this.isDuringDay = !1);
        }
        handleAction(k, F) {
          const J = [...k];
          return (
            F.length > 0 &&
              (J.find((oe) => oe.id === F[0])?.statuses.delete(j.M.WOLF_TARGET),
              J.find((oe) => oe.role === N.k.SORCIERE)?.statuses.delete(
                j.M.HEALTH_POTION
              )),
            J
          );
        }
        getRoundConfig(k) {
          return {
            role: z.h.SORCIERE_HEALTH,
            selectablePlayers: this.canHeal(k)
              ? this.getHealablePlayers(k)
              : [],
            maxSelectable: 1,
            minSelectable: 0,
            isDuringDay: this.isDuringDay,
          };
        }
        canHeal(k) {
          return (
            k
              .find((F) => F.role === N.k.SORCIERE)
              ?.statuses.has(j.M.HEALTH_POTION) ?? !1
          );
        }
        getHealablePlayers(k) {
          return k
            .filter((F) => F.statuses.has(j.M.WOLF_TARGET))
            .map((F) => F.id);
        }
      }
      class ue {
        constructor() {
          (this.isOnlyOnce = !1), (this.isDuringDay = !1);
        }
        handleAction(k, F) {
          const J = [...k];
          return (
            F.length > 0 &&
              ((J.find((oe) => oe.id === F[0]).isDead = !0),
              J.find((oe) => oe.role === N.k.SORCIERE)?.statuses.delete(
                j.M.DEATH_POTION
              )),
            J
          );
        }
        getRoundConfig(k) {
          return {
            role: z.h.SORCIERE_KILL,
            selectablePlayers: this.canKill(k)
              ? this.getKillablePlayers(k)
              : [],
            maxSelectable: 1,
            minSelectable: 0,
            isDuringDay: this.isDuringDay,
          };
        }
        canKill(k) {
          return (
            k
              .find((F) => F.role === N.k.SORCIERE)
              ?.statuses.has(j.M.DEATH_POTION) ?? !1
          );
        }
        getKillablePlayers(k) {
          return k
            .filter((F) => F.role !== N.k.SORCIERE && !F.isDead)
            .map((F) => F.id);
        }
      }
      class te {
        constructor() {
          (this.isOnlyOnce = !0), (this.isDuringDay = !1);
        }
        handleAction(k, F) {
          const J = [...k];
          return (
            J.filter((oe) => F.includes(oe.id)).forEach((oe) =>
              oe.statuses.add(j.M.LOVER)
            ),
            J
          );
        }
        getRoundConfig(k) {
          return {
            role: z.h.CUPIDON,
            selectablePlayers: k.map((F) => F.id),
            maxSelectable: 2,
            minSelectable: 2,
            isDuringDay: this.isDuringDay,
          };
        }
      }
      class ve {
        constructor(k, F, J) {
          (this.roundRole = k), (this.isOnlyOnce = F), (this.isDuringDay = J);
        }
        handleAction(k, F) {
          return [...k];
        }
        getRoundConfig(k) {
          return {
            role: this.roundRole,
            selectablePlayers: [],
            maxSelectable: 0,
            minSelectable: 0,
            isDuringDay: this.isDuringDay,
          };
        }
      }
      class $e extends ve {
        constructor() {
          super(z.h.AMOUREUX, !0, !1);
        }
      }
      class me {
        constructor() {
          (this.isOnlyOnce = !0), (this.isDuringDay = !0);
        }
        handleAction(k, F) {
          const J = [...k];
          return (J.find((oe) => oe.id === F[0]).isDead = !0), J;
        }
        getRoundConfig(k) {
          return {
            role: z.h.CHASSEUR,
            selectablePlayers: this.getKillablePlayers(k),
            maxSelectable: 1,
            minSelectable: 1,
            isDuringDay: this.isDuringDay,
          };
        }
        getKillablePlayers(k) {
          return k
            .filter((F) => F.role !== N.k.CHASSEUR && !F.isDead)
            .map((F) => F.id);
        }
      }
      class ee extends ve {
        constructor() {
          super(z.h.VOYANTE, !1, !1);
        }
      }
      class Ve {
        constructor() {
          (this.isOnlyOnce = !1), (this.isDuringDay = !1);
        }
        handleAction(k, F) {
          const J = [...k];
          return (
            J.filter((oe) => F.includes(oe.id)).forEach((oe) =>
              oe.statuses.add(j.M.CHARMED)
            ),
            J
          );
        }
        getRoundConfig(k) {
          return {
            role: z.h.JOUEUR_FLUTE,
            selectablePlayers: k
              .filter(
                (F) =>
                  F.role !== N.k.JOUEUR_FLUTE &&
                  !F.isDead &&
                  !F.statuses.has(j.M.CHARMED)
              )
              .map((F) => F.id),
            maxSelectable: 2,
            minSelectable: 0,
            isDuringDay: this.isDuringDay,
          };
        }
      }
      class Ee extends ve {
        constructor() {
          super(z.h.CHARMED, !1, !1);
        }
      }
      class ye {
        constructor() {
          (this.isOnlyOnce = !1), (this.isDuringDay = !1);
        }
        handleAction(k, F) {
          const J = [...k];
          return J.find((oe) => oe.id === F[0])?.statuses.add(j.M.RAVEN), J;
        }
        getRoundConfig(k) {
          return {
            role: z.h.CORBEAU,
            selectablePlayers: k
              .filter((F) => F.role !== N.k.CORBEAU && !F.isDead)
              .map((F) => F.id),
            maxSelectable: 1,
            minSelectable: 1,
            isDuringDay: this.isDuringDay,
          };
        }
      }
      class ae {
        constructor() {
          this.roundHandlers = new Map();
        }
        initHandlers(k) {
          this.roundHandlers.clear();
          const F = new Set(k);
          this.roundHandlers.set(z.h.VILLAGEOIS, new Ae()),
            this.roundHandlers.set(z.h.CAPITAINE, new Pe()),
            F.has(N.k.LOUP_GAROU) &&
              this.roundHandlers.set(z.h.LOUP_GAROU, new De()),
            F.has(N.k.SORCIERE) &&
              (this.roundHandlers.set(z.h.SORCIERE_HEALTH, new we()),
              this.roundHandlers.set(z.h.SORCIERE_KILL, new ue())),
            F.has(N.k.CUPIDON) &&
              (this.roundHandlers.set(z.h.CUPIDON, new te()),
              this.roundHandlers.set(z.h.AMOUREUX, new $e())),
            F.has(N.k.CHASSEUR) &&
              this.roundHandlers.set(z.h.CHASSEUR, new me()),
            F.has(N.k.VOYANTE) && this.roundHandlers.set(z.h.VOYANTE, new ee()),
            F.has(N.k.JOUEUR_FLUTE) &&
              (this.roundHandlers.set(z.h.JOUEUR_FLUTE, new Ve()),
              this.roundHandlers.set(z.h.CHARMED, new Ee())),
            F.has(N.k.CORBEAU) && this.roundHandlers.set(z.h.CORBEAU, new ye());
        }
        getHandler(k) {
          return this.roundHandlers.get(k);
        }
        removeHandlers(k) {
          const F = new Set(k);
          F.has(N.k.LOUP_GAROU) && this.roundHandlers.delete(z.h.LOUP_GAROU),
            F.has(N.k.SORCIERE) &&
              (this.roundHandlers.delete(z.h.SORCIERE_HEALTH),
              this.roundHandlers.delete(z.h.SORCIERE_KILL)),
            F.has(N.k.CUPIDON) && this.roundHandlers.delete(z.h.CUPIDON),
            F.has(N.k.CHASSEUR) && this.roundHandlers.delete(z.h.CHASSEUR),
            F.has(N.k.VOYANTE) && this.roundHandlers.delete(z.h.VOYANTE),
            F.has(N.k.JOUEUR_FLUTE) &&
              (this.roundHandlers.delete(z.h.JOUEUR_FLUTE),
              this.roundHandlers.delete(z.h.CHARMED)),
            F.has(N.k.CORBEAU) && this.roundHandlers.delete(z.h.CORBEAU);
        }
      }
      (ae.ɵfac = function (k) {
        return new (k || ae)();
      }),
        (ae.ɵprov = Ne.Yz7({
          token: ae,
          factory: ae.ɵfac,
          providedIn: 'root',
        }));
      var Te = S(6436);
      class de {
        isVictorious(k) {
          return 0 === k.filter((F) => !F.isDead).length;
        }
      }
      class q {
        isVictorious(k) {
          return k
            .filter((F) => !F.isDead)
            .every((F) => F.role !== N.k.LOUP_GAROU);
        }
      }
      class le {
        isVictorious(k) {
          return k
            .filter((F) => !F.isDead)
            .every((F) => F.role === N.k.LOUP_GAROU);
        }
      }
      class fe {
        isVictorious(k) {
          const F = k.filter((J) => !J.isDead);
          return 2 === F.length && F.every((J) => J.statuses.has(j.M.LOVER));
        }
      }
      class B {
        isVictorious(k) {
          const F = !k.find((oe) => oe.role === N.k.JOUEUR_FLUTE)?.isDead,
            J = k
              .filter((oe) => !oe.isDead && oe.role !== N.k.JOUEUR_FLUTE)
              .every((oe) => oe.statuses.has(j.M.CHARMED));
          return F && J;
        }
      }
      class V {
        constructor() {
          (this.victoryHandlers = new Map()),
            (this.victoryPriorities = [
              Te.K.NONE,
              Te.K.AMOUREUX,
              Te.K.JOUEUR_FLUTE,
              Te.K.LOUP_GAROU,
              Te.K.VILLAGEOIS,
            ]);
        }
        initHandlers(k) {
          this.victoryHandlers.clear();
          const F = new Set(k);
          this.victoryHandlers.set(Te.K.NONE, new de()),
            this.victoryHandlers.set(Te.K.VILLAGEOIS, new q()),
            F.has(N.k.LOUP_GAROU) &&
              this.victoryHandlers.set(Te.K.LOUP_GAROU, new le()),
            F.has(N.k.CUPIDON) &&
              this.victoryHandlers.set(Te.K.AMOUREUX, new fe()),
            F.has(N.k.JOUEUR_FLUTE) &&
              this.victoryHandlers.set(Te.K.JOUEUR_FLUTE, new B());
        }
        removeUselessHandlers(k) {
          this.victoryHandlers.has(Te.K.AMOUREUX) &&
            k.filter((F) => F.statuses.has(j.M.LOVER)).some((F) => F.isDead) &&
            this.victoryHandlers.delete(Te.K.AMOUREUX),
            this.victoryHandlers.has(Te.K.JOUEUR_FLUTE) &&
              k.find((F) => F.role === N.k.JOUEUR_FLUTE)?.isDead &&
              this.victoryHandlers.delete(Te.K.JOUEUR_FLUTE);
        }
        getVictory(k) {
          let F;
          for (const J of this.victoryPriorities) {
            const oe = this.victoryHandlers.get(J);
            if (void 0 !== oe && oe.isVictorious(k)) {
              F = J;
              break;
            }
          }
          return F;
        }
      }
      (V.ɵfac = function (k) {
        return new (k || V)();
      }),
        (V.ɵprov = Ne.Yz7({ token: V, factory: V.ɵfac, providedIn: 'root' }));
      class W {
        constructor(k, F, J) {
          (this.roundHandlersService = k),
            (this.victoryHandlersService = F),
            (this.announcementService = J),
            (this.knownDeaths = new Set()),
            (this.deathsToAnnounce = []),
            (this.afterDeathRoundQueue = []),
            (this.rolesToRemove = []);
        }
        getNextAfterDeathRound() {
          return this.afterDeathRoundQueue.shift();
        }
        reset() {
          this.knownDeaths.clear(),
            (this.deathsToAnnounce = []),
            (this.rolesToRemove = []),
            (this.afterDeathRoundQueue = []);
        }
        handleNewDeaths(k) {
          this.rolesToRemove = [];
          const F = [...k];
          return (
            this.handleWolfTarget(F),
            F.filter((J) => J.isDead && !this.knownDeaths.has(J.id)).forEach(
              (J) => this.handlePlayerDeath(F, J)
            ),
            this.roundHandlersService.removeHandlers(this.rolesToRemove),
            this.victoryHandlersService.removeUselessHandlers(k),
            F
          );
        }
        announceDeaths() {
          this.deathsToAnnounce.length > 0 &&
            (this.announcementService.announceDeaths(this.deathsToAnnounce),
            (this.deathsToAnnounce = []));
        }
        handleWolfTarget(k) {
          k.filter((F) => F.statuses.has(j.M.WOLF_TARGET)).forEach((F) => {
            F.statuses.delete(j.M.WOLF_TARGET), (F.isDead = !0);
          });
        }
        handlePlayerDeath(k, F) {
          this.knownDeaths.add(F.id),
            this.deathsToAnnounce.push(F),
            this.handlePlayerDeathStatuses(k, F),
            this.handlePlayerDeathRole(k, F);
        }
        handlePlayerDeathStatuses(k, F) {
          if (
            (F.statuses.has(j.M.CAPTAIN) &&
              (F.statuses.delete(j.M.CAPTAIN),
              this.afterDeathRoundQueue.push(z.h.CAPITAINE)),
            F.statuses.has(j.M.LOVER))
          ) {
            const J = k.find(
              (oe) => oe.statuses.has(j.M.LOVER) && oe.id !== F.id && !oe.isDead
            );
            void 0 !== J && ((J.isDead = !0), this.handlePlayerDeath(k, J));
          }
        }
        handlePlayerDeathRole(k, F) {
          switch (F.role) {
            case N.k.LOUP_GAROU:
              0 ===
                k.filter((J) => J.role === N.k.LOUP_GAROU && !J.isDead)
                  .length && this.rolesToRemove.push(N.k.LOUP_GAROU);
              break;
            case N.k.CHASSEUR:
              this.afterDeathRoundQueue.unshift(z.h.CHASSEUR);
              break;
            case N.k.CUPIDON:
              this.rolesToRemove.push(N.k.CUPIDON);
              break;
            case N.k.SORCIERE:
              this.rolesToRemove.push(N.k.SORCIERE);
              break;
            case N.k.VOYANTE:
              this.rolesToRemove.push(N.k.VOYANTE);
              break;
            case N.k.JOUEUR_FLUTE:
              this.rolesToRemove.push(N.k.JOUEUR_FLUTE);
              break;
            case N.k.CORBEAU:
              this.rolesToRemove.push(N.k.CORBEAU);
          }
        }
      }
      (W.ɵfac = function (k) {
        return new (k || W)(Ne.LFG(ae), Ne.LFG(V), Ne.LFG(Fe));
      }),
        (W.ɵprov = Ne.Yz7({ token: W, factory: W.ɵfac, providedIn: 'root' }));
      class G {
        constructor(k, F) {
          (this.roundHandlersService = k),
            (this.deathService = F),
            (this.sortedRounds = [
              z.h.VOLEUR,
              z.h.CUPIDON,
              z.h.VOYANTE,
              z.h.AMOUREUX,
              z.h.CORBEAU,
              z.h.LOUP_GAROU,
              z.h.SORCIERE_HEALTH,
              z.h.SORCIERE_KILL,
              z.h.JOUEUR_FLUTE,
              z.h.CHARMED,
              z.h.CAPITAINE,
              z.h.VILLAGEOIS,
            ]),
            (this.uniqueRoundsPassed = new Set());
        }
        resetRounds() {
          this.uniqueRoundsPassed.clear();
        }
        getNextRound(k) {
          this.roundHandlersService.getHandler(k)?.isOnlyOnce &&
            this.uniqueRoundsPassed.add(k);
          const J = this.deathService.getNextAfterDeathRound();
          if (void 0 !== J) return (this.beforeDeathRound = k), J;
          this.beforeDeathRound &&
            ((k = this.beforeDeathRound), (this.beforeDeathRound = void 0));
          const oe = this.sortedRounds.indexOf(k);
          let he,
            Ye,
            be = oe + 1;
          be > this.sortedRounds.length - 1 && (be = 0);
          do {
            (Ye = this.sortedRounds[be]),
              (he = this.roundHandlersService.getHandler(Ye)),
              be++,
              be > this.sortedRounds.length - 1 && (be = 0);
          } while (
            (void 0 === he || this.uniqueRoundsPassed.has(Ye)) &&
            be !== oe
          );
          if (void 0 === he || this.uniqueRoundsPassed.has(Ye))
            throw new Error('No next round found');
          return Ye;
        }
        getFirstRound() {
          let k,
            J,
            F = 0;
          do {
            if (
              ((J = this.sortedRounds[F]),
              (k = this.roundHandlersService.getHandler(J)),
              F++,
              F > this.sortedRounds.length - 1)
            )
              throw new Error('No first round found');
          } while (void 0 === k);
          return J;
        }
      }
      (G.ɵfac = function (k) {
        return new (k || G)(Ne.LFG(ae), Ne.LFG(W));
      }),
        (G.ɵprov = Ne.Yz7({ token: G, factory: G.ɵfac, providedIn: 'root' }));
      class Se {
        cleanStatusesAfterDay(k) {
          const F = [...k];
          return (
            new Set(k.map((oe) => oe.role)).has(N.k.CORBEAU) &&
              F.find((oe) => oe.statuses.has(j.M.RAVEN))?.statuses.delete(
                j.M.RAVEN
              ),
            F
          );
        }
      }
      (Se.ɵfac = function (k) {
        return new (k || Se)();
      }),
        (Se.ɵprov = Ne.Yz7({
          token: Se,
          factory: Se.ɵfac,
          providedIn: 'root',
        }));
      var pe = S(8265);
      class We {
        constructor(k, F, J, oe, he, be) {
          (this.router = k),
            (this.roundHandlersService = F),
            (this.victoryHandlersService = J),
            (this.roundOrchestrationService = oe),
            (this.deathService = he),
            (this.statusesService = be),
            (this.players = new o.X([])),
            (this.round = new o.X(void 0)),
            (this.gameInProgess = new o.X(!1));
        }
        getPlayers() {
          return this.players.asObservable();
        }
        getRound() {
          return this.round.asObservable();
        }
        isGameInProgress() {
          return this.gameInProgess.asObservable();
        }
        createGame(k) {
          this.roundOrchestrationService.resetRounds(),
            this.deathService.reset();
          const F = k.map((oe) => oe.role);
          this.roundHandlersService.initHandlers(F),
            this.victoryHandlersService.initHandlers(F);
          const J = k.find((oe) => oe.role === N.k.SORCIERE);
          J &&
            (J.statuses.add(j.M.HEALTH_POTION),
            J.statuses.add(j.M.DEATH_POTION)),
            this.players.next(k),
            this.setFirstRound(),
            this.gameInProgess.next(!0),
            this.router.navigate(['game']);
        }
        submitRoundAction(k) {
          const F = this.round.value?.role;
          if (void 0 !== F) {
            const J = this.roundHandlersService.getHandler(F);
            if (void 0 !== J) {
              const oe = J.handleAction(this.players.value, k);
              this.players.next(oe), this.nextRound();
            }
          }
        }
        setFirstRound() {
          const k = this.roundOrchestrationService.getFirstRound();
          this.setRound(k);
        }
        nextRound() {
          const k = this.round.value?.role;
          if (void 0 === k) throw new Error('No current round');
          const F = this.roundHandlersService.getHandler(k);
          if (F?.isDuringDay) {
            const he = this.deathService.handleNewDeaths(this.players.value);
            this.players.next(he);
          }
          let J;
          try {
            J = this.roundOrchestrationService.getNextRound(k);
          } catch (he) {
            const be = this.victoryHandlersService.getVictory(
              this.players.value
            );
            if (void 0 !== be)
              return (
                this.gameInProgess.next(!1),
                void this.router.navigate(['victory'], {
                  queryParams: { victory: be },
                })
              );
            throw he;
          }
          const oe = this.roundHandlersService.getHandler(J);
          if (void 0 !== oe && oe.isDuringDay && !F?.isDuringDay) {
            const he = this.deathService.handleNewDeaths(this.players.value);
            this.players.next(he),
              (J = this.roundOrchestrationService.getNextRound(k));
          }
          if ((oe?.isDuringDay || F?.isDuringDay) && J !== z.h.CHASSEUR) {
            const he = this.victoryHandlersService.getVictory(
              this.players.value
            );
            if (void 0 !== he)
              return (
                this.gameInProgess.next(!1),
                void this.router.navigate(['victory'], {
                  queryParams: { victory: he },
                })
              );
            this.deathService.announceDeaths();
          }
          if (void 0 !== oe && !oe.isDuringDay && F?.isDuringDay) {
            const he = this.statusesService.cleanStatusesAfterDay(
              this.players.value
            );
            this.players.next(he);
          }
          this.setRound(J);
        }
        setRound(k) {
          const F = this.roundHandlersService.getHandler(k);
          if (void 0 !== F) {
            const J = F.getRoundConfig(this.players.value);
            this.round.next(J);
          }
        }
      }
      (We.ɵfac = function (k) {
        return new (k || We)(
          Ne.LFG(pe.F0),
          Ne.LFG(ae),
          Ne.LFG(V),
          Ne.LFG(G),
          Ne.LFG(W),
          Ne.LFG(Se)
        );
      }),
        (We.ɵprov = Ne.Yz7({
          token: We,
          factory: We.ɵfac,
          providedIn: 'root',
        }));
    },
    383: (at, ke, S) => {
      'use strict';
      var o = S(8256),
        N = S(1481),
        j = S(8265),
        z = S(5035),
        ge = S(6895),
        Ne = S(7579),
        re = S(9300),
        Fe = S(4482),
        Ae = S(5403),
        Pe = S(8421),
        De = S(5032),
        ue = S(3996);
      const te = ['menu'];
      function ve(ye, ae) {
        1 & ye &&
          (o.TgZ(0, 'ion-item', 7), o._uU(1, 'Partie en cours'), o.qZA());
      }
      const $e = function () {
        return { exact: !0 };
      };
      class me {
        constructor(ae, Te) {
          (this.router = ae),
            (this.gameService = Te),
            (this.destroy$ = new Ne.x()),
            (this.isGameInProgress$ = this.gameService.isGameInProgress());
        }
        ngAfterViewInit() {
          this.router.events
            .pipe(
              (0, re.h)((ae) => ae instanceof j.m2),
              (function we(ye) {
                return (0, Fe.e)((ae, Te) => {
                  (0, Pe.Xf)(ye).subscribe(
                    (0, Ae.x)(Te, () => Te.complete(), De.Z)
                  ),
                    !Te.closed && ae.subscribe(Te);
                });
              })(this.destroy$)
            )
            .subscribe(() => this.menu?.close());
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete();
        }
      }
      (me.ɵfac = function (ae) {
        return new (ae || me)(o.Y36(j.F0), o.Y36(ue.h));
      }),
        (me.ɵcmp = o.Xpm({
          type: me,
          selectors: [['lgmj-menu']],
          viewQuery: function (ae, Te) {
            if ((1 & ae && o.Gf(te, 5), 2 & ae)) {
              let de;
              o.iGM((de = o.CRH())) && (Te.menu = de.first);
            }
          },
          standalone: !0,
          features: [o.jDz],
          decls: 17,
          vars: 5,
          consts: [
            ['contentId', 'router-outlet'],
            ['menu', ''],
            [
              'routerLink',
              '/',
              'routerLinkActive',
              'active',
              3,
              'routerLinkActiveOptions',
            ],
            ['routerLink', '/game', 'routerLinkActive', 'active', 4, 'ngIf'],
            ['routerLink', '/new-game', 'routerLinkActive', 'active'],
            ['routerLink', '/roles-rules', 'routerLinkActive', 'active'],
            ['routerLink', '/status-legends', 'routerLinkActive', 'active'],
            ['routerLink', '/game', 'routerLinkActive', 'active'],
          ],
          template: function (ae, Te) {
            1 & ae &&
              (o.TgZ(0, 'ion-menu', 0, 1)(2, 'ion-header')(3, 'ion-toolbar')(
                4,
                'ion-title'
              ),
              o._uU(5, 'Menu'),
              o.qZA()()(),
              o.TgZ(6, 'ion-content')(7, 'ion-item', 2),
              o._uU(8, 'Accueil'),
              o.qZA(),
              o.YNc(9, ve, 2, 0, 'ion-item', 3),
              o.ALo(10, 'async'),
              o.TgZ(11, 'ion-item', 4),
              o._uU(12, 'Nouvelle partie'),
              o.qZA(),
              o.TgZ(13, 'ion-item', 5),
              o._uU(14, 'R\xe8gles des r\xf4les'),
              o.qZA(),
              o.TgZ(15, 'ion-item', 6),
              o._uU(16, 'L\xe9gende des statuts'),
              o.qZA()()()),
              2 & ae &&
                (o.xp6(7),
                o.Q6J('routerLinkActiveOptions', o.DdM(4, $e)),
                o.xp6(2),
                o.Q6J('ngIf', o.lcZ(10, 2, Te.isGameInProgress$)));
          },
          dependencies: [
            ge.ez,
            ge.O5,
            ge.Ov,
            z.Pc,
            z.W2,
            z.Gu,
            z.Ie,
            z.z0,
            z.wd,
            z.sr,
            z.YI,
            j.rH,
            j.Od,
          ],
          styles: ['ion-item.active[_ngcontent-%COMP%]{opacity:.5}'],
        }));
      class ee {
        constructor(ae) {
          this.environmentInjector = ae;
        }
      }
      (ee.ɵfac = function (ae) {
        return new (ae || ee)(o.Y36(o.lqb));
      }),
        (ee.ɵcmp = o.Xpm({
          type: ee,
          selectors: [['lgmj-root']],
          standalone: !0,
          features: [o.jDz],
          decls: 3,
          vars: 1,
          consts: [['id', 'router-outlet', 3, 'environmentInjector']],
          template: function (ae, Te) {
            1 & ae &&
              (o.TgZ(0, 'ion-app'),
              o._UZ(1, 'lgmj-menu')(2, 'ion-router-outlet', 0),
              o.qZA()),
              2 & ae &&
                (o.xp6(2),
                o.Q6J('environmentInjector', Te.environmentInjector));
          },
          dependencies: [ge.ez, z.Pc, z.dr, z.jP, me],
        }));
      const Ve = [
        {
          path: 'victory',
          title: 'LG Assistant MJ | Victoire',
          loadComponent: () =>
            Promise.all([S.e(8592), S.e(5220)])
              .then(S.bind(S, 5220))
              .then((ye) => ye.VictoryPage),
        },
        {
          path: 'game',
          title: 'LG Assistant MJ | Partie en cours',
          loadComponent: () =>
            Promise.all([S.e(8592), S.e(3903)])
              .then(S.bind(S, 3903))
              .then((ye) => ye.GamePage),
        },
        {
          path: 'new-game',
          title: 'LG Assistant MJ | Nouvelle partie',
          loadComponent: () =>
            Promise.all([S.e(8592), S.e(8724)])
              .then(S.bind(S, 8724))
              .then((ye) => ye.NewGamePage),
        },
        {
          path: 'roles-rules',
          title: 'LG Assistant MJ | R\xe8gles des r\xf4les',
          loadComponent: () =>
            Promise.all([S.e(8592), S.e(2451)])
              .then(S.bind(S, 2451))
              .then((ye) => ye.RolesRulesPage),
        },
        {
          path: 'status-legends',
          title: 'LG Assistant MJ | L\xe9gende des statuts',
          loadComponent: () =>
            Promise.all([S.e(8592), S.e(4171)])
              .then(S.bind(S, 4171))
              .then((ye) => ye.StatusLegendsPage),
        },
        {
          path: '',
          pathMatch: 'full',
          title: 'LG Assistant MJ | Accueil',
          loadComponent: () =>
            Promise.all([S.e(8592), S.e(4048)])
              .then(S.bind(S, 4048))
              .then((ye) => ye.HomePage),
        },
      ];
      (0, o.G48)(),
        (0, N.Cg)(ee, {
          providers: [
            (0, j.bU)(Ve, (0, j.aF)(j.wm)),
            (0, o.RIp)(z.Pc.forRoot()),
            { provide: j.wN, useClass: z.r4 },
          ],
        }).catch((ye) => console.error(ye));
    },
    1135: (at, ke, S) => {
      'use strict';
      S.d(ke, { X: () => N });
      var o = S(7579);
      class N extends o.x {
        constructor(z) {
          super(), (this._value = z);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(z) {
          const ge = super._subscribe(z);
          return !ge.closed && z.next(this._value), ge;
        }
        getValue() {
          const { hasError: z, thrownError: ge, _value: Ne } = this;
          if (z) throw ge;
          return this._throwIfClosed(), Ne;
        }
        next(z) {
          super.next((this._value = z));
        }
      }
    },
    9751: (at, ke, S) => {
      'use strict';
      S.d(ke, { y: () => Fe });
      var o = S(930),
        N = S(727),
        j = S(8822),
        z = S(9635),
        ge = S(2416),
        Ne = S(576),
        re = S(2806);
      let Fe = (() => {
        class we {
          constructor(te) {
            te && (this._subscribe = te);
          }
          lift(te) {
            const ve = new we();
            return (ve.source = this), (ve.operator = te), ve;
          }
          subscribe(te, ve, $e) {
            const me = (function De(we) {
              return (
                (we && we instanceof o.Lv) ||
                ((function Pe(we) {
                  return (
                    we &&
                    (0, Ne.m)(we.next) &&
                    (0, Ne.m)(we.error) &&
                    (0, Ne.m)(we.complete)
                  );
                })(we) &&
                  (0, N.Nn)(we))
              );
            })(te)
              ? te
              : new o.Hp(te, ve, $e);
            return (
              (0, re.x)(() => {
                const { operator: ee, source: Ve } = this;
                me.add(
                  ee
                    ? ee.call(me, Ve)
                    : Ve
                    ? this._subscribe(me)
                    : this._trySubscribe(me)
                );
              }),
              me
            );
          }
          _trySubscribe(te) {
            try {
              return this._subscribe(te);
            } catch (ve) {
              te.error(ve);
            }
          }
          forEach(te, ve) {
            return new (ve = Ae(ve))(($e, me) => {
              const ee = new o.Hp({
                next: (Ve) => {
                  try {
                    te(Ve);
                  } catch (Ee) {
                    me(Ee), ee.unsubscribe();
                  }
                },
                error: me,
                complete: $e,
              });
              this.subscribe(ee);
            });
          }
          _subscribe(te) {
            var ve;
            return null === (ve = this.source) || void 0 === ve
              ? void 0
              : ve.subscribe(te);
          }
          [j.L]() {
            return this;
          }
          pipe(...te) {
            return (0, z.U)(te)(this);
          }
          toPromise(te) {
            return new (te = Ae(te))((ve, $e) => {
              let me;
              this.subscribe(
                (ee) => (me = ee),
                (ee) => $e(ee),
                () => ve(me)
              );
            });
          }
        }
        return (we.create = (ue) => new we(ue)), we;
      })();
      function Ae(we) {
        var ue;
        return null !== (ue = we ?? ge.v.Promise) && void 0 !== ue
          ? ue
          : Promise;
      }
    },
    7579: (at, ke, S) => {
      'use strict';
      S.d(ke, { x: () => re });
      var o = S(9751),
        N = S(727);
      const z = (0, S(3888).d)(
        (Ae) =>
          function () {
            Ae(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          }
      );
      var ge = S(8737),
        Ne = S(2806);
      let re = (() => {
        class Ae extends o.y {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(De) {
            const we = new Fe(this, this);
            return (we.operator = De), we;
          }
          _throwIfClosed() {
            if (this.closed) throw new z();
          }
          next(De) {
            (0, Ne.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const we of this.currentObservers) we.next(De);
              }
            });
          }
          error(De) {
            (0, Ne.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = De);
                const { observers: we } = this;
                for (; we.length; ) we.shift().error(De);
              }
            });
          }
          complete() {
            (0, Ne.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: De } = this;
                for (; De.length; ) De.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var De;
            return (
              (null === (De = this.observers) || void 0 === De
                ? void 0
                : De.length) > 0
            );
          }
          _trySubscribe(De) {
            return this._throwIfClosed(), super._trySubscribe(De);
          }
          _subscribe(De) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(De),
              this._innerSubscribe(De)
            );
          }
          _innerSubscribe(De) {
            const { hasError: we, isStopped: ue, observers: te } = this;
            return we || ue
              ? N.Lc
              : ((this.currentObservers = null),
                te.push(De),
                new N.w0(() => {
                  (this.currentObservers = null), (0, ge.P)(te, De);
                }));
          }
          _checkFinalizedStatuses(De) {
            const { hasError: we, thrownError: ue, isStopped: te } = this;
            we ? De.error(ue) : te && De.complete();
          }
          asObservable() {
            const De = new o.y();
            return (De.source = this), De;
          }
        }
        return (Ae.create = (Pe, De) => new Fe(Pe, De)), Ae;
      })();
      class Fe extends re {
        constructor(Pe, De) {
          super(), (this.destination = Pe), (this.source = De);
        }
        next(Pe) {
          var De, we;
          null ===
            (we =
              null === (De = this.destination) || void 0 === De
                ? void 0
                : De.next) ||
            void 0 === we ||
            we.call(De, Pe);
        }
        error(Pe) {
          var De, we;
          null ===
            (we =
              null === (De = this.destination) || void 0 === De
                ? void 0
                : De.error) ||
            void 0 === we ||
            we.call(De, Pe);
        }
        complete() {
          var Pe, De;
          null ===
            (De =
              null === (Pe = this.destination) || void 0 === Pe
                ? void 0
                : Pe.complete) ||
            void 0 === De ||
            De.call(Pe);
        }
        _subscribe(Pe) {
          var De, we;
          return null !==
            (we =
              null === (De = this.source) || void 0 === De
                ? void 0
                : De.subscribe(Pe)) && void 0 !== we
            ? we
            : N.Lc;
        }
      }
    },
    930: (at, ke, S) => {
      'use strict';
      S.d(ke, { Hp: () => $e, Lv: () => we });
      var o = S(576),
        N = S(727),
        j = S(2416),
        z = S(7849),
        ge = S(5032);
      const Ne = Ae('C', void 0, void 0);
      function Ae(ye, ae, Te) {
        return { kind: ye, value: ae, error: Te };
      }
      var Pe = S(3410),
        De = S(2806);
      class we extends N.w0 {
        constructor(ae) {
          super(),
            (this.isStopped = !1),
            ae
              ? ((this.destination = ae), (0, N.Nn)(ae) && ae.add(this))
              : (this.destination = Ee);
        }
        static create(ae, Te, de) {
          return new $e(ae, Te, de);
        }
        next(ae) {
          this.isStopped
            ? Ve(
                (function Fe(ye) {
                  return Ae('N', ye, void 0);
                })(ae),
                this
              )
            : this._next(ae);
        }
        error(ae) {
          this.isStopped
            ? Ve(
                (function re(ye) {
                  return Ae('E', void 0, ye);
                })(ae),
                this
              )
            : ((this.isStopped = !0), this._error(ae));
        }
        complete() {
          this.isStopped
            ? Ve(Ne, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(ae) {
          this.destination.next(ae);
        }
        _error(ae) {
          try {
            this.destination.error(ae);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const ue = Function.prototype.bind;
      function te(ye, ae) {
        return ue.call(ye, ae);
      }
      class ve {
        constructor(ae) {
          this.partialObserver = ae;
        }
        next(ae) {
          const { partialObserver: Te } = this;
          if (Te.next)
            try {
              Te.next(ae);
            } catch (de) {
              me(de);
            }
        }
        error(ae) {
          const { partialObserver: Te } = this;
          if (Te.error)
            try {
              Te.error(ae);
            } catch (de) {
              me(de);
            }
          else me(ae);
        }
        complete() {
          const { partialObserver: ae } = this;
          if (ae.complete)
            try {
              ae.complete();
            } catch (Te) {
              me(Te);
            }
        }
      }
      class $e extends we {
        constructor(ae, Te, de) {
          let q;
          if ((super(), (0, o.m)(ae) || !ae))
            q = {
              next: ae ?? void 0,
              error: Te ?? void 0,
              complete: de ?? void 0,
            };
          else {
            let le;
            this && j.v.useDeprecatedNextContext
              ? ((le = Object.create(ae)),
                (le.unsubscribe = () => this.unsubscribe()),
                (q = {
                  next: ae.next && te(ae.next, le),
                  error: ae.error && te(ae.error, le),
                  complete: ae.complete && te(ae.complete, le),
                }))
              : (q = ae);
          }
          this.destination = new ve(q);
        }
      }
      function me(ye) {
        j.v.useDeprecatedSynchronousErrorHandling
          ? (0, De.O)(ye)
          : (0, z.h)(ye);
      }
      function Ve(ye, ae) {
        const { onStoppedNotification: Te } = j.v;
        Te && Pe.z.setTimeout(() => Te(ye, ae));
      }
      const Ee = {
        closed: !0,
        next: ge.Z,
        error: function ee(ye) {
          throw ye;
        },
        complete: ge.Z,
      };
    },
    727: (at, ke, S) => {
      'use strict';
      S.d(ke, { Lc: () => Ne, w0: () => ge, Nn: () => re });
      var o = S(576);
      const j = (0, S(3888).d)(
        (Ae) =>
          function (De) {
            Ae(this),
              (this.message = De
                ? `${
                    De.length
                  } errors occurred during unsubscription:\n${De.map(
                    (we, ue) => `${ue + 1}) ${we.toString()}`
                  ).join('\n  ')}`
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = De);
          }
      );
      var z = S(8737);
      class ge {
        constructor(Pe) {
          (this.initialTeardown = Pe),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let Pe;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: De } = this;
            if (De)
              if (((this._parentage = null), Array.isArray(De)))
                for (const te of De) te.remove(this);
              else De.remove(this);
            const { initialTeardown: we } = this;
            if ((0, o.m)(we))
              try {
                we();
              } catch (te) {
                Pe = te instanceof j ? te.errors : [te];
              }
            const { _finalizers: ue } = this;
            if (ue) {
              this._finalizers = null;
              for (const te of ue)
                try {
                  Fe(te);
                } catch (ve) {
                  (Pe = Pe ?? []),
                    ve instanceof j
                      ? (Pe = [...Pe, ...ve.errors])
                      : Pe.push(ve);
                }
            }
            if (Pe) throw new j(Pe);
          }
        }
        add(Pe) {
          var De;
          if (Pe && Pe !== this)
            if (this.closed) Fe(Pe);
            else {
              if (Pe instanceof ge) {
                if (Pe.closed || Pe._hasParent(this)) return;
                Pe._addParent(this);
              }
              (this._finalizers =
                null !== (De = this._finalizers) && void 0 !== De
                  ? De
                  : []).push(Pe);
            }
        }
        _hasParent(Pe) {
          const { _parentage: De } = this;
          return De === Pe || (Array.isArray(De) && De.includes(Pe));
        }
        _addParent(Pe) {
          const { _parentage: De } = this;
          this._parentage = Array.isArray(De)
            ? (De.push(Pe), De)
            : De
            ? [De, Pe]
            : Pe;
        }
        _removeParent(Pe) {
          const { _parentage: De } = this;
          De === Pe
            ? (this._parentage = null)
            : Array.isArray(De) && (0, z.P)(De, Pe);
        }
        remove(Pe) {
          const { _finalizers: De } = this;
          De && (0, z.P)(De, Pe), Pe instanceof ge && Pe._removeParent(this);
        }
      }
      ge.EMPTY = (() => {
        const Ae = new ge();
        return (Ae.closed = !0), Ae;
      })();
      const Ne = ge.EMPTY;
      function re(Ae) {
        return (
          Ae instanceof ge ||
          (Ae &&
            'closed' in Ae &&
            (0, o.m)(Ae.remove) &&
            (0, o.m)(Ae.add) &&
            (0, o.m)(Ae.unsubscribe))
        );
      }
      function Fe(Ae) {
        (0, o.m)(Ae) ? Ae() : Ae.unsubscribe();
      }
    },
    2416: (at, ke, S) => {
      'use strict';
      S.d(ke, { v: () => o });
      const o = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    515: (at, ke, S) => {
      'use strict';
      S.d(ke, { E: () => N });
      const N = new (S(9751).y)((ge) => ge.complete());
    },
    2076: (at, ke, S) => {
      'use strict';
      S.d(ke, { D: () => de });
      var o = S(8421),
        N = S(9672),
        j = S(4482),
        z = S(5403);
      function ge(q, le = 0) {
        return (0, j.e)((fe, B) => {
          fe.subscribe(
            (0, z.x)(
              B,
              (V) => (0, N.f)(B, q, () => B.next(V), le),
              () => (0, N.f)(B, q, () => B.complete(), le),
              (V) => (0, N.f)(B, q, () => B.error(V), le)
            )
          );
        });
      }
      function Ne(q, le = 0) {
        return (0, j.e)((fe, B) => {
          B.add(q.schedule(() => fe.subscribe(B), le));
        });
      }
      var Ae = S(9751),
        De = S(2202),
        we = S(576);
      function te(q, le) {
        if (!q) throw new Error('Iterable cannot be null');
        return new Ae.y((fe) => {
          (0, N.f)(fe, le, () => {
            const B = q[Symbol.asyncIterator]();
            (0, N.f)(
              fe,
              le,
              () => {
                B.next().then((V) => {
                  V.done ? fe.complete() : fe.next(V.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var ve = S(3670),
        $e = S(8239),
        me = S(1144),
        ee = S(6495),
        Ve = S(2206),
        Ee = S(4532),
        ye = S(3260);
      function de(q, le) {
        return le
          ? (function Te(q, le) {
              if (null != q) {
                if ((0, ve.c)(q))
                  return (function re(q, le) {
                    return (0, o.Xf)(q).pipe(Ne(le), ge(le));
                  })(q, le);
                if ((0, me.z)(q))
                  return (function Pe(q, le) {
                    return new Ae.y((fe) => {
                      let B = 0;
                      return le.schedule(function () {
                        B === q.length
                          ? fe.complete()
                          : (fe.next(q[B++]), fe.closed || this.schedule());
                      });
                    });
                  })(q, le);
                if ((0, $e.t)(q))
                  return (function Fe(q, le) {
                    return (0, o.Xf)(q).pipe(Ne(le), ge(le));
                  })(q, le);
                if ((0, Ve.D)(q)) return te(q, le);
                if ((0, ee.T)(q))
                  return (function ue(q, le) {
                    return new Ae.y((fe) => {
                      let B;
                      return (
                        (0, N.f)(fe, le, () => {
                          (B = q[De.h]()),
                            (0, N.f)(
                              fe,
                              le,
                              () => {
                                let V, W;
                                try {
                                  ({ value: V, done: W } = B.next());
                                } catch (G) {
                                  return void fe.error(G);
                                }
                                W ? fe.complete() : fe.next(V);
                              },
                              0,
                              !0
                            );
                        }),
                        () => (0, we.m)(B?.return) && B.return()
                      );
                    });
                  })(q, le);
                if ((0, ye.L)(q))
                  return (function ae(q, le) {
                    return te((0, ye.Q)(q), le);
                  })(q, le);
              }
              throw (0, Ee.z)(q);
            })(q, le)
          : (0, o.Xf)(q);
      }
    },
    8421: (at, ke, S) => {
      'use strict';
      S.d(ke, { Xf: () => ue });
      var o = S(655),
        N = S(1144),
        j = S(8239),
        z = S(9751),
        ge = S(3670),
        Ne = S(2206),
        re = S(4532),
        Fe = S(6495),
        Ae = S(3260),
        Pe = S(576),
        De = S(7849),
        we = S(8822);
      function ue(ye) {
        if (ye instanceof z.y) return ye;
        if (null != ye) {
          if ((0, ge.c)(ye))
            return (function te(ye) {
              return new z.y((ae) => {
                const Te = ye[we.L]();
                if ((0, Pe.m)(Te.subscribe)) return Te.subscribe(ae);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable'
                );
              });
            })(ye);
          if ((0, N.z)(ye))
            return (function ve(ye) {
              return new z.y((ae) => {
                for (let Te = 0; Te < ye.length && !ae.closed; Te++)
                  ae.next(ye[Te]);
                ae.complete();
              });
            })(ye);
          if ((0, j.t)(ye))
            return (function $e(ye) {
              return new z.y((ae) => {
                ye.then(
                  (Te) => {
                    ae.closed || (ae.next(Te), ae.complete());
                  },
                  (Te) => ae.error(Te)
                ).then(null, De.h);
              });
            })(ye);
          if ((0, Ne.D)(ye)) return ee(ye);
          if ((0, Fe.T)(ye))
            return (function me(ye) {
              return new z.y((ae) => {
                for (const Te of ye) if ((ae.next(Te), ae.closed)) return;
                ae.complete();
              });
            })(ye);
          if ((0, Ae.L)(ye))
            return (function Ve(ye) {
              return ee((0, Ae.Q)(ye));
            })(ye);
        }
        throw (0, re.z)(ye);
      }
      function ee(ye) {
        return new z.y((ae) => {
          (function Ee(ye, ae) {
            var Te, de, q, le;
            return (0, o.mG)(this, void 0, void 0, function* () {
              try {
                for (Te = (0, o.KL)(ye); !(de = yield Te.next()).done; )
                  if ((ae.next(de.value), ae.closed)) return;
              } catch (fe) {
                q = { error: fe };
              } finally {
                try {
                  de && !de.done && (le = Te.return) && (yield le.call(Te));
                } finally {
                  if (q) throw q.error;
                }
              }
              ae.complete();
            });
          })(ye, ae).catch((Te) => ae.error(Te));
        });
      }
    },
    5403: (at, ke, S) => {
      'use strict';
      S.d(ke, { x: () => N });
      var o = S(930);
      function N(z, ge, Ne, re, Fe) {
        return new j(z, ge, Ne, re, Fe);
      }
      class j extends o.Lv {
        constructor(ge, Ne, re, Fe, Ae, Pe) {
          super(ge),
            (this.onFinalize = Ae),
            (this.shouldUnsubscribe = Pe),
            (this._next = Ne
              ? function (De) {
                  try {
                    Ne(De);
                  } catch (we) {
                    ge.error(we);
                  }
                }
              : super._next),
            (this._error = Fe
              ? function (De) {
                  try {
                    Fe(De);
                  } catch (we) {
                    ge.error(we);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = re
              ? function () {
                  try {
                    re();
                  } catch (De) {
                    ge.error(De);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var ge;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: Ne } = this;
            super.unsubscribe(),
              !Ne &&
                (null === (ge = this.onFinalize) ||
                  void 0 === ge ||
                  ge.call(this));
          }
        }
      }
    },
    9300: (at, ke, S) => {
      'use strict';
      S.d(ke, { h: () => j });
      var o = S(4482),
        N = S(5403);
      function j(z, ge) {
        return (0, o.e)((Ne, re) => {
          let Fe = 0;
          Ne.subscribe(
            (0, N.x)(re, (Ae) => z.call(ge, Ae, Fe++) && re.next(Ae))
          );
        });
      }
    },
    4004: (at, ke, S) => {
      'use strict';
      S.d(ke, { U: () => j });
      var o = S(4482),
        N = S(5403);
      function j(z, ge) {
        return (0, o.e)((Ne, re) => {
          let Fe = 0;
          Ne.subscribe(
            (0, N.x)(re, (Ae) => {
              re.next(z.call(ge, Ae, Fe++));
            })
          );
        });
      }
    },
    8189: (at, ke, S) => {
      'use strict';
      S.d(ke, { J: () => j });
      var o = S(5577),
        N = S(4671);
      function j(z = 1 / 0) {
        return (0, o.z)(N.y, z);
      }
    },
    5577: (at, ke, S) => {
      'use strict';
      S.d(ke, { z: () => Fe });
      var o = S(4004),
        N = S(8421),
        j = S(4482),
        z = S(9672),
        ge = S(5403),
        re = S(576);
      function Fe(Ae, Pe, De = 1 / 0) {
        return (0, re.m)(Pe)
          ? Fe(
              (we, ue) =>
                (0, o.U)((te, ve) => Pe(we, te, ue, ve))((0, N.Xf)(Ae(we, ue))),
              De
            )
          : ('number' == typeof Pe && (De = Pe),
            (0, j.e)((we, ue) =>
              (function Ne(Ae, Pe, De, we, ue, te, ve, $e) {
                const me = [];
                let ee = 0,
                  Ve = 0,
                  Ee = !1;
                const ye = () => {
                    Ee && !me.length && !ee && Pe.complete();
                  },
                  ae = (de) => (ee < we ? Te(de) : me.push(de)),
                  Te = (de) => {
                    te && Pe.next(de), ee++;
                    let q = !1;
                    (0, N.Xf)(De(de, Ve++)).subscribe(
                      (0, ge.x)(
                        Pe,
                        (le) => {
                          ue?.(le), te ? ae(le) : Pe.next(le);
                        },
                        () => {
                          q = !0;
                        },
                        void 0,
                        () => {
                          if (q)
                            try {
                              for (ee--; me.length && ee < we; ) {
                                const le = me.shift();
                                ve ? (0, z.f)(Pe, ve, () => Te(le)) : Te(le);
                              }
                              ye();
                            } catch (le) {
                              Pe.error(le);
                            }
                        }
                      )
                    );
                  };
                return (
                  Ae.subscribe(
                    (0, ge.x)(Pe, ae, () => {
                      (Ee = !0), ye();
                    })
                  ),
                  () => {
                    $e?.();
                  }
                );
              })(we, ue, Ae, De)
            ));
      }
    },
    3900: (at, ke, S) => {
      'use strict';
      S.d(ke, { w: () => z });
      var o = S(8421),
        N = S(4482),
        j = S(5403);
      function z(ge, Ne) {
        return (0, N.e)((re, Fe) => {
          let Ae = null,
            Pe = 0,
            De = !1;
          const we = () => De && !Ae && Fe.complete();
          re.subscribe(
            (0, j.x)(
              Fe,
              (ue) => {
                Ae?.unsubscribe();
                let te = 0;
                const ve = Pe++;
                (0, o.Xf)(ge(ue, ve)).subscribe(
                  (Ae = (0, j.x)(
                    Fe,
                    ($e) => Fe.next(Ne ? Ne(ue, $e, ve, te++) : $e),
                    () => {
                      (Ae = null), we();
                    }
                  ))
                );
              },
              () => {
                (De = !0), we();
              }
            )
          );
        });
      }
    },
    5698: (at, ke, S) => {
      'use strict';
      S.d(ke, { q: () => z });
      var o = S(515),
        N = S(4482),
        j = S(5403);
      function z(ge) {
        return ge <= 0
          ? () => o.E
          : (0, N.e)((Ne, re) => {
              let Fe = 0;
              Ne.subscribe(
                (0, j.x)(re, (Ae) => {
                  ++Fe <= ge && (re.next(Ae), ge <= Fe && re.complete());
                })
              );
            });
      }
    },
    8505: (at, ke, S) => {
      'use strict';
      S.d(ke, { b: () => ge });
      var o = S(576),
        N = S(4482),
        j = S(5403),
        z = S(4671);
      function ge(Ne, re, Fe) {
        const Ae =
          (0, o.m)(Ne) || re || Fe ? { next: Ne, error: re, complete: Fe } : Ne;
        return Ae
          ? (0, N.e)((Pe, De) => {
              var we;
              null === (we = Ae.subscribe) || void 0 === we || we.call(Ae);
              let ue = !0;
              Pe.subscribe(
                (0, j.x)(
                  De,
                  (te) => {
                    var ve;
                    null === (ve = Ae.next) || void 0 === ve || ve.call(Ae, te),
                      De.next(te);
                  },
                  () => {
                    var te;
                    (ue = !1),
                      null === (te = Ae.complete) ||
                        void 0 === te ||
                        te.call(Ae),
                      De.complete();
                  },
                  (te) => {
                    var ve;
                    (ue = !1),
                      null === (ve = Ae.error) ||
                        void 0 === ve ||
                        ve.call(Ae, te),
                      De.error(te);
                  },
                  () => {
                    var te, ve;
                    ue &&
                      (null === (te = Ae.unsubscribe) ||
                        void 0 === te ||
                        te.call(Ae)),
                      null === (ve = Ae.finalize) ||
                        void 0 === ve ||
                        ve.call(Ae);
                  }
                )
              );
            })
          : z.y;
      }
    },
    3410: (at, ke, S) => {
      'use strict';
      S.d(ke, { z: () => o });
      const o = {
        setTimeout(N, j, ...z) {
          const { delegate: ge } = o;
          return ge?.setTimeout
            ? ge.setTimeout(N, j, ...z)
            : setTimeout(N, j, ...z);
        },
        clearTimeout(N) {
          const { delegate: j } = o;
          return (j?.clearTimeout || clearTimeout)(N);
        },
        delegate: void 0,
      };
    },
    2202: (at, ke, S) => {
      'use strict';
      S.d(ke, { h: () => N });
      const N = (function o() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      })();
    },
    8822: (at, ke, S) => {
      'use strict';
      S.d(ke, { L: () => o });
      const o =
        ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    },
    7669: (at, ke, S) => {
      'use strict';
      S.d(ke, { _6: () => Ne, jO: () => z, yG: () => ge });
      var o = S(576);
      function j(re) {
        return re[re.length - 1];
      }
      function z(re) {
        return (0, o.m)(j(re)) ? re.pop() : void 0;
      }
      function ge(re) {
        return (function N(re) {
          return re && (0, o.m)(re.schedule);
        })(j(re))
          ? re.pop()
          : void 0;
      }
      function Ne(re, Fe) {
        return 'number' == typeof j(re) ? re.pop() : Fe;
      }
    },
    4742: (at, ke, S) => {
      'use strict';
      S.d(ke, { D: () => ge });
      const { isArray: o } = Array,
        { getPrototypeOf: N, prototype: j, keys: z } = Object;
      function ge(re) {
        if (1 === re.length) {
          const Fe = re[0];
          if (o(Fe)) return { args: Fe, keys: null };
          if (
            (function Ne(re) {
              return re && 'object' == typeof re && N(re) === j;
            })(Fe)
          ) {
            const Ae = z(Fe);
            return { args: Ae.map((Pe) => Fe[Pe]), keys: Ae };
          }
        }
        return { args: re, keys: null };
      }
    },
    8737: (at, ke, S) => {
      'use strict';
      function o(N, j) {
        if (N) {
          const z = N.indexOf(j);
          0 <= z && N.splice(z, 1);
        }
      }
      S.d(ke, { P: () => o });
    },
    3888: (at, ke, S) => {
      'use strict';
      function o(N) {
        const z = N((ge) => {
          Error.call(ge), (ge.stack = new Error().stack);
        });
        return (
          (z.prototype = Object.create(Error.prototype)),
          (z.prototype.constructor = z),
          z
        );
      }
      S.d(ke, { d: () => o });
    },
    1810: (at, ke, S) => {
      'use strict';
      function o(N, j) {
        return N.reduce((z, ge, Ne) => ((z[ge] = j[Ne]), z), {});
      }
      S.d(ke, { n: () => o });
    },
    2806: (at, ke, S) => {
      'use strict';
      S.d(ke, { O: () => z, x: () => j });
      var o = S(2416);
      let N = null;
      function j(ge) {
        if (o.v.useDeprecatedSynchronousErrorHandling) {
          const Ne = !N;
          if ((Ne && (N = { errorThrown: !1, error: null }), ge(), Ne)) {
            const { errorThrown: re, error: Fe } = N;
            if (((N = null), re)) throw Fe;
          }
        } else ge();
      }
      function z(ge) {
        o.v.useDeprecatedSynchronousErrorHandling &&
          N &&
          ((N.errorThrown = !0), (N.error = ge));
      }
    },
    9672: (at, ke, S) => {
      'use strict';
      function o(N, j, z, ge = 0, Ne = !1) {
        const re = j.schedule(function () {
          z(), Ne ? N.add(this.schedule(null, ge)) : this.unsubscribe();
        }, ge);
        if ((N.add(re), !Ne)) return re;
      }
      S.d(ke, { f: () => o });
    },
    4671: (at, ke, S) => {
      'use strict';
      function o(N) {
        return N;
      }
      S.d(ke, { y: () => o });
    },
    1144: (at, ke, S) => {
      'use strict';
      S.d(ke, { z: () => o });
      const o = (N) =>
        N && 'number' == typeof N.length && 'function' != typeof N;
    },
    2206: (at, ke, S) => {
      'use strict';
      S.d(ke, { D: () => N });
      var o = S(576);
      function N(j) {
        return Symbol.asyncIterator && (0, o.m)(j?.[Symbol.asyncIterator]);
      }
    },
    576: (at, ke, S) => {
      'use strict';
      function o(N) {
        return 'function' == typeof N;
      }
      S.d(ke, { m: () => o });
    },
    3670: (at, ke, S) => {
      'use strict';
      S.d(ke, { c: () => j });
      var o = S(8822),
        N = S(576);
      function j(z) {
        return (0, N.m)(z[o.L]);
      }
    },
    6495: (at, ke, S) => {
      'use strict';
      S.d(ke, { T: () => j });
      var o = S(2202),
        N = S(576);
      function j(z) {
        return (0, N.m)(z?.[o.h]);
      }
    },
    8239: (at, ke, S) => {
      'use strict';
      S.d(ke, { t: () => N });
      var o = S(576);
      function N(j) {
        return (0, o.m)(j?.then);
      }
    },
    3260: (at, ke, S) => {
      'use strict';
      S.d(ke, { L: () => z, Q: () => j });
      var o = S(655),
        N = S(576);
      function j(ge) {
        return (0, o.FC)(this, arguments, function* () {
          const re = ge.getReader();
          try {
            for (;;) {
              const { value: Fe, done: Ae } = yield (0, o.qq)(re.read());
              if (Ae) return yield (0, o.qq)(void 0);
              yield yield (0, o.qq)(Fe);
            }
          } finally {
            re.releaseLock();
          }
        });
      }
      function z(ge) {
        return (0, N.m)(ge?.getReader);
      }
    },
    4482: (at, ke, S) => {
      'use strict';
      S.d(ke, { A: () => N, e: () => j });
      var o = S(576);
      function N(z) {
        return (0, o.m)(z?.lift);
      }
      function j(z) {
        return (ge) => {
          if (N(ge))
            return ge.lift(function (Ne) {
              try {
                return z(Ne, this);
              } catch (re) {
                this.error(re);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
    },
    3268: (at, ke, S) => {
      'use strict';
      S.d(ke, { Z: () => z });
      var o = S(4004);
      const { isArray: N } = Array;
      function z(ge) {
        return (0, o.U)((Ne) =>
          (function j(ge, Ne) {
            return N(Ne) ? ge(...Ne) : ge(Ne);
          })(ge, Ne)
        );
      }
    },
    5032: (at, ke, S) => {
      'use strict';
      function o() {}
      S.d(ke, { Z: () => o });
    },
    9635: (at, ke, S) => {
      'use strict';
      S.d(ke, { U: () => j, z: () => N });
      var o = S(4671);
      function N(...z) {
        return j(z);
      }
      function j(z) {
        return 0 === z.length
          ? o.y
          : 1 === z.length
          ? z[0]
          : function (Ne) {
              return z.reduce((re, Fe) => Fe(re), Ne);
            };
      }
    },
    7849: (at, ke, S) => {
      'use strict';
      S.d(ke, { h: () => j });
      var o = S(2416),
        N = S(3410);
      function j(z) {
        N.z.setTimeout(() => {
          const { onUnhandledError: ge } = o.v;
          if (!ge) throw z;
          ge(z);
        });
      }
    },
    4532: (at, ke, S) => {
      'use strict';
      function o(N) {
        return new TypeError(
          `You provided ${
            null !== N && 'object' == typeof N ? 'an invalid object' : `'${N}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      S.d(ke, { z: () => o });
    },
    863: (at, ke, S) => {
      var o = {
        './ion-accordion_2.entry.js': [9654, 8592, 9654],
        './ion-action-sheet.entry.js': [3648, 8592, 3648],
        './ion-alert.entry.js': [1118, 8592, 1118],
        './ion-app_8.entry.js': [53, 8592, 3236],
        './ion-avatar_3.entry.js': [4753, 4753],
        './ion-back-button.entry.js': [2073, 8592, 2073],
        './ion-backdrop.entry.js': [8939, 8939],
        './ion-breadcrumb_2.entry.js': [7544, 8592, 7544],
        './ion-button_2.entry.js': [5652, 5652],
        './ion-card_5.entry.js': [388, 388],
        './ion-checkbox.entry.js': [9922, 9922],
        './ion-chip.entry.js': [657, 657],
        './ion-col_3.entry.js': [9824, 9824],
        './ion-datetime-button.entry.js': [9230, 1435, 9230],
        './ion-datetime_3.entry.js': [4959, 1435, 8592, 4959],
        './ion-fab_3.entry.js': [5836, 8592, 5836],
        './ion-img.entry.js': [1033, 1033],
        './ion-infinite-scroll_2.entry.js': [8034, 8592, 5817],
        './ion-input.entry.js': [1217, 8592, 1217],
        './ion-item-option_3.entry.js': [2933, 8592, 4651],
        './ion-item_8.entry.js': [4711, 8592, 4711],
        './ion-loading.entry.js': [9434, 8592, 9434],
        './ion-menu_3.entry.js': [8136, 8592, 8136],
        './ion-modal.entry.js': [2349, 8592, 2349],
        './ion-nav_2.entry.js': [5349, 8592, 5349],
        './ion-picker-column-internal.entry.js': [7602, 8592, 7602],
        './ion-picker-internal.entry.js': [9016, 9016],
        './ion-popover.entry.js': [3804, 8592, 3804],
        './ion-progress-bar.entry.js': [4174, 4174],
        './ion-radio_2.entry.js': [4432, 4432],
        './ion-range.entry.js': [1709, 8592, 1709],
        './ion-refresher_2.entry.js': [3326, 8592, 2175],
        './ion-reorder_2.entry.js': [3583, 8592, 1186],
        './ion-ripple-effect.entry.js': [9958, 9958],
        './ion-route_4.entry.js': [4330, 4330],
        './ion-searchbar.entry.js': [8628, 8592, 8628],
        './ion-segment_2.entry.js': [9325, 8592, 9325],
        './ion-select_3.entry.js': [2773, 2773],
        './ion-slide_2.entry.js': [1650, 1650],
        './ion-spinner.entry.js': [4908, 8592, 4908],
        './ion-split-pane.entry.js': [9536, 9536],
        './ion-tab-bar_2.entry.js': [438, 8592, 438],
        './ion-tab_2.entry.js': [1536, 8592, 1536],
        './ion-text.entry.js': [4376, 4376],
        './ion-textarea.entry.js': [6560, 6560],
        './ion-toast.entry.js': [6120, 8592, 6120],
        './ion-toggle.entry.js': [5168, 8592, 5168],
        './ion-virtual-scroll.entry.js': [2289, 2289],
      };
      function N(j) {
        if (!S.o(o, j))
          return Promise.resolve().then(() => {
            var Ne = new Error("Cannot find module '" + j + "'");
            throw ((Ne.code = 'MODULE_NOT_FOUND'), Ne);
          });
        var z = o[j],
          ge = z[0];
        return Promise.all(z.slice(1).map(S.e)).then(() => S(ge));
      }
      (N.keys = () => Object.keys(o)), (N.id = 863), (at.exports = N);
    },
    655: (at, ke, S) => {
      'use strict';
      function ge(B, V, W, G) {
        var We,
          Se = arguments.length,
          pe =
            Se < 3
              ? V
              : null === G
              ? (G = Object.getOwnPropertyDescriptor(V, W))
              : G;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          pe = Reflect.decorate(B, V, W, G);
        else
          for (var se = B.length - 1; se >= 0; se--)
            (We = B[se]) &&
              (pe = (Se < 3 ? We(pe) : Se > 3 ? We(V, W, pe) : We(V, W)) || pe);
        return Se > 3 && pe && Object.defineProperty(V, W, pe), pe;
      }
      function Fe(B, V, W, G) {
        return new (W || (W = Promise))(function (pe, We) {
          function se(J) {
            try {
              F(G.next(J));
            } catch (oe) {
              We(oe);
            }
          }
          function k(J) {
            try {
              F(G.throw(J));
            } catch (oe) {
              We(oe);
            }
          }
          function F(J) {
            J.done
              ? pe(J.value)
              : (function Se(pe) {
                  return pe instanceof W
                    ? pe
                    : new W(function (We) {
                        We(pe);
                      });
                })(J.value).then(se, k);
          }
          F((G = G.apply(B, V || [])).next());
        });
      }
      function me(B) {
        return this instanceof me ? ((this.v = B), this) : new me(B);
      }
      function ee(B, V, W) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var Se,
          G = W.apply(B, V || []),
          pe = [];
        return (
          (Se = {}),
          We('next'),
          We('throw'),
          We('return'),
          (Se[Symbol.asyncIterator] = function () {
            return this;
          }),
          Se
        );
        function We(he) {
          G[he] &&
            (Se[he] = function (be) {
              return new Promise(function (Ye, nt) {
                pe.push([he, be, Ye, nt]) > 1 || se(he, be);
              });
            });
        }
        function se(he, be) {
          try {
            !(function k(he) {
              he.value instanceof me
                ? Promise.resolve(he.value.v).then(F, J)
                : oe(pe[0][2], he);
            })(G[he](be));
          } catch (Ye) {
            oe(pe[0][3], Ye);
          }
        }
        function F(he) {
          se('next', he);
        }
        function J(he) {
          se('throw', he);
        }
        function oe(he, be) {
          he(be), pe.shift(), pe.length && se(pe[0][0], pe[0][1]);
        }
      }
      function Ee(B) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var W,
          V = B[Symbol.asyncIterator];
        return V
          ? V.call(B)
          : ((B = (function we(B) {
              var V = 'function' == typeof Symbol && Symbol.iterator,
                W = V && B[V],
                G = 0;
              if (W) return W.call(B);
              if (B && 'number' == typeof B.length)
                return {
                  next: function () {
                    return (
                      B && G >= B.length && (B = void 0),
                      { value: B && B[G++], done: !B }
                    );
                  },
                };
              throw new TypeError(
                V
                  ? 'Object is not iterable.'
                  : 'Symbol.iterator is not defined.'
              );
            })(B)),
            (W = {}),
            G('next'),
            G('throw'),
            G('return'),
            (W[Symbol.asyncIterator] = function () {
              return this;
            }),
            W);
        function G(pe) {
          W[pe] =
            B[pe] &&
            function (We) {
              return new Promise(function (se, k) {
                !(function Se(pe, We, se, k) {
                  Promise.resolve(k).then(function (F) {
                    pe({ value: F, done: se });
                  }, We);
                })(se, k, (We = B[pe](We)).done, We.value);
              });
            };
        }
      }
      S.d(ke, {
        FC: () => ee,
        KL: () => Ee,
        gn: () => ge,
        mG: () => Fe,
        qq: () => me,
      });
    },
    6895: (at, ke, S) => {
      'use strict';
      S.d(ke, {
        Do: () => Ve,
        ED: () => ie,
        EM: () => Po,
        HT: () => z,
        JF: () => vr,
        K0: () => Ne,
        Mx: () => Cr,
        O5: () => $,
        Ov: () => Zn,
        RF: () => L,
        S$: () => $e,
        V_: () => Ae,
        Ye: () => Ee,
        b0: () => ee,
        bD: () => to,
        ez: () => eo,
        n9: () => Q,
        q: () => j,
        sg: () => en,
        tP: () => et,
        w_: () => ge,
      });
      var o = S(8256);
      let N = null;
      function j() {
        return N;
      }
      function z(m) {
        N || (N = m);
      }
      class ge {}
      const Ne = new o.OlP('DocumentToken');
      let re = (() => {
        class m {
          historyGo(v) {
            throw new Error('Not implemented');
          }
        }
        return (
          (m.ɵfac = function (v) {
            return new (v || m)();
          }),
          (m.ɵprov = o.Yz7({
            token: m,
            factory: function () {
              return (function Fe() {
                return (0, o.LFG)(Pe);
              })();
            },
            providedIn: 'platform',
          })),
          m
        );
      })();
      const Ae = new o.OlP('Location Initialized');
      let Pe = (() => {
        class m extends re {
          constructor(v) {
            super(), (this._doc = v), this._init();
          }
          _init() {
            (this.location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return j().getBaseHref(this._doc);
          }
          onPopState(v) {
            const O = j().getGlobalEventTarget(this._doc, 'window');
            return (
              O.addEventListener('popstate', v, !1),
              () => O.removeEventListener('popstate', v)
            );
          }
          onHashChange(v) {
            const O = j().getGlobalEventTarget(this._doc, 'window');
            return (
              O.addEventListener('hashchange', v, !1),
              () => O.removeEventListener('hashchange', v)
            );
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(v) {
            this.location.pathname = v;
          }
          pushState(v, O, X) {
            De() ? this._history.pushState(v, O, X) : (this.location.hash = X);
          }
          replaceState(v, O, X) {
            De()
              ? this._history.replaceState(v, O, X)
              : (this.location.hash = X);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(v = 0) {
            this._history.go(v);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (m.ɵfac = function (v) {
            return new (v || m)(o.LFG(Ne));
          }),
          (m.ɵprov = o.Yz7({
            token: m,
            factory: function () {
              return (function we() {
                return new Pe((0, o.LFG)(Ne));
              })();
            },
            providedIn: 'platform',
          })),
          m
        );
      })();
      function De() {
        return !!window.history.pushState;
      }
      function ue(m, w) {
        if (0 == m.length) return w;
        if (0 == w.length) return m;
        let v = 0;
        return (
          m.endsWith('/') && v++,
          w.startsWith('/') && v++,
          2 == v ? m + w.substring(1) : 1 == v ? m + w : m + '/' + w
        );
      }
      function te(m) {
        const w = m.match(/#|\?|$/),
          v = (w && w.index) || m.length;
        return m.slice(0, v - ('/' === m[v - 1] ? 1 : 0)) + m.slice(v);
      }
      function ve(m) {
        return m && '?' !== m[0] ? '?' + m : m;
      }
      let $e = (() => {
        class m {
          historyGo(v) {
            throw new Error('Not implemented');
          }
        }
        return (
          (m.ɵfac = function (v) {
            return new (v || m)();
          }),
          (m.ɵprov = o.Yz7({
            token: m,
            factory: function () {
              return (0, o.f3M)(ee);
            },
            providedIn: 'root',
          })),
          m
        );
      })();
      const me = new o.OlP('appBaseHref');
      let ee = (() => {
          class m extends $e {
            constructor(v, O) {
              super(),
                (this._platformLocation = v),
                (this._removeListenerFns = []),
                (this._baseHref =
                  O ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  (0, o.f3M)(Ne).location?.origin ??
                  '');
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(v) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(v),
                this._platformLocation.onHashChange(v)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(v) {
              return ue(this._baseHref, v);
            }
            path(v = !1) {
              const O =
                  this._platformLocation.pathname +
                  ve(this._platformLocation.search),
                X = this._platformLocation.hash;
              return X && v ? `${O}${X}` : O;
            }
            pushState(v, O, X, Le) {
              const Ue = this.prepareExternalUrl(X + ve(Le));
              this._platformLocation.pushState(v, O, Ue);
            }
            replaceState(v, O, X, Le) {
              const Ue = this.prepareExternalUrl(X + ve(Le));
              this._platformLocation.replaceState(v, O, Ue);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(v = 0) {
              this._platformLocation.historyGo?.(v);
            }
          }
          return (
            (m.ɵfac = function (v) {
              return new (v || m)(o.LFG(re), o.LFG(me, 8));
            }),
            (m.ɵprov = o.Yz7({
              token: m,
              factory: m.ɵfac,
              providedIn: 'root',
            })),
            m
          );
        })(),
        Ve = (() => {
          class m extends $e {
            constructor(v, O) {
              super(),
                (this._platformLocation = v),
                (this._baseHref = ''),
                (this._removeListenerFns = []),
                null != O && (this._baseHref = O);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(v) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(v),
                this._platformLocation.onHashChange(v)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(v = !1) {
              let O = this._platformLocation.hash;
              return null == O && (O = '#'), O.length > 0 ? O.substring(1) : O;
            }
            prepareExternalUrl(v) {
              const O = ue(this._baseHref, v);
              return O.length > 0 ? '#' + O : O;
            }
            pushState(v, O, X, Le) {
              let Ue = this.prepareExternalUrl(X + ve(Le));
              0 == Ue.length && (Ue = this._platformLocation.pathname),
                this._platformLocation.pushState(v, O, Ue);
            }
            replaceState(v, O, X, Le) {
              let Ue = this.prepareExternalUrl(X + ve(Le));
              0 == Ue.length && (Ue = this._platformLocation.pathname),
                this._platformLocation.replaceState(v, O, Ue);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(v = 0) {
              this._platformLocation.historyGo?.(v);
            }
          }
          return (
            (m.ɵfac = function (v) {
              return new (v || m)(o.LFG(re), o.LFG(me, 8));
            }),
            (m.ɵprov = o.Yz7({ token: m, factory: m.ɵfac })),
            m
          );
        })(),
        Ee = (() => {
          class m {
            constructor(v) {
              (this._subject = new o.vpe()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = v);
              const O = this._locationStrategy.getBaseHref();
              (this._basePath = (function de(m) {
                if (/^(https?:)?\/\//.test(m)) {
                  const [, w] = m.split(/\/\/[^\/]+/);
                  return w;
                }
                return m;
              })(te(Te(O)))),
                this._locationStrategy.onPopState((X) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: X.state,
                    type: X.type,
                  });
                });
            }
            ngOnDestroy() {
              this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeListeners = []);
            }
            path(v = !1) {
              return this.normalize(this._locationStrategy.path(v));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(v, O = '') {
              return this.path() == this.normalize(v + ve(O));
            }
            normalize(v) {
              return m.stripTrailingSlash(
                (function ae(m, w) {
                  return m && w.startsWith(m) ? w.substring(m.length) : w;
                })(this._basePath, Te(v))
              );
            }
            prepareExternalUrl(v) {
              return (
                v && '/' !== v[0] && (v = '/' + v),
                this._locationStrategy.prepareExternalUrl(v)
              );
            }
            go(v, O = '', X = null) {
              this._locationStrategy.pushState(X, '', v, O),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(v + ve(O)),
                  X
                );
            }
            replaceState(v, O = '', X = null) {
              this._locationStrategy.replaceState(X, '', v, O),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(v + ve(O)),
                  X
                );
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(v = 0) {
              this._locationStrategy.historyGo?.(v);
            }
            onUrlChange(v) {
              return (
                this._urlChangeListeners.push(v),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((O) => {
                    this._notifyUrlChangeListeners(O.url, O.state);
                  })),
                () => {
                  const O = this._urlChangeListeners.indexOf(v);
                  this._urlChangeListeners.splice(O, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(v = '', O) {
              this._urlChangeListeners.forEach((X) => X(v, O));
            }
            subscribe(v, O, X) {
              return this._subject.subscribe({
                next: v,
                error: O,
                complete: X,
              });
            }
          }
          return (
            (m.normalizeQueryParams = ve),
            (m.joinWithSlash = ue),
            (m.stripTrailingSlash = te),
            (m.ɵfac = function (v) {
              return new (v || m)(o.LFG($e));
            }),
            (m.ɵprov = o.Yz7({
              token: m,
              factory: function () {
                return (function ye() {
                  return new Ee((0, o.LFG)($e));
                })();
              },
              providedIn: 'root',
            })),
            m
          );
        })();
      function Te(m) {
        return m.replace(/\/index.html$/, '');
      }
      function Cr(m, w) {
        w = encodeURIComponent(w);
        for (const v of m.split(';')) {
          const O = v.indexOf('='),
            [X, Le] = -1 == O ? [v, ''] : [v.slice(0, O), v.slice(O + 1)];
          if (X.trim() === w) return decodeURIComponent(Le);
        }
        return null;
      }
      class mn {
        constructor(w, v, O, X) {
          (this.$implicit = w),
            (this.ngForOf = v),
            (this.index = O),
            (this.count = X);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let en = (() => {
        class m {
          constructor(v, O, X) {
            (this._viewContainer = v),
              (this._template = O),
              (this._differs = X),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(v) {
            (this._ngForOf = v), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(v) {
            this._trackByFn = v;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(v) {
            v && (this._template = v);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const v = this._ngForOf;
              !this._differ &&
                v &&
                (this._differ = this._differs
                  .find(v)
                  .create(this.ngForTrackBy));
            }
            if (this._differ) {
              const v = this._differ.diff(this._ngForOf);
              v && this._applyChanges(v);
            }
          }
          _applyChanges(v) {
            const O = this._viewContainer;
            v.forEachOperation((X, Le, Ue) => {
              if (null == X.previousIndex)
                O.createEmbeddedView(
                  this._template,
                  new mn(X.item, this._ngForOf, -1, -1),
                  null === Ue ? void 0 : Ue
                );
              else if (null == Ue) O.remove(null === Le ? void 0 : Le);
              else if (null !== Le) {
                const gt = O.get(Le);
                O.move(gt, Ue), Rn(gt, X);
              }
            });
            for (let X = 0, Le = O.length; X < Le; X++) {
              const gt = O.get(X).context;
              (gt.index = X), (gt.count = Le), (gt.ngForOf = this._ngForOf);
            }
            v.forEachIdentityChange((X) => {
              Rn(O.get(X.currentIndex), X);
            });
          }
          static ngTemplateContextGuard(v, O) {
            return !0;
          }
        }
        return (
          (m.ɵfac = function (v) {
            return new (v || m)(o.Y36(o.s_b), o.Y36(o.Rgc), o.Y36(o.ZZ4));
          }),
          (m.ɵdir = o.lG2({
            type: m,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: {
              ngForOf: 'ngForOf',
              ngForTrackBy: 'ngForTrackBy',
              ngForTemplate: 'ngForTemplate',
            },
            standalone: !0,
          })),
          m
        );
      })();
      function Rn(m, w) {
        m.context.$implicit = w.item;
      }
      let $ = (() => {
        class m {
          constructor(v, O) {
            (this._viewContainer = v),
              (this._context = new U()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = O);
          }
          set ngIf(v) {
            (this._context.$implicit = this._context.ngIf = v),
              this._updateView();
          }
          set ngIfThen(v) {
            K('ngIfThen', v),
              (this._thenTemplateRef = v),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(v) {
            K('ngIfElse', v),
              (this._elseTemplateRef = v),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(v, O) {
            return !0;
          }
        }
        return (
          (m.ɵfac = function (v) {
            return new (v || m)(o.Y36(o.s_b), o.Y36(o.Rgc));
          }),
          (m.ɵdir = o.lG2({
            type: m,
            selectors: [['', 'ngIf', '']],
            inputs: {
              ngIf: 'ngIf',
              ngIfThen: 'ngIfThen',
              ngIfElse: 'ngIfElse',
            },
            standalone: !0,
          })),
          m
        );
      })();
      class U {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function K(m, w) {
        if (w && !w.createEmbeddedView)
          throw new Error(
            `${m} must be a TemplateRef, but received '${(0, o.AaK)(w)}'.`
          );
      }
      class Ce {
        constructor(w, v) {
          (this._viewContainerRef = w),
            (this._templateRef = v),
            (this._created = !1);
        }
        create() {
          (this._created = !0),
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
        destroy() {
          (this._created = !1), this._viewContainerRef.clear();
        }
        enforceState(w) {
          w && !this._created
            ? this.create()
            : !w && this._created && this.destroy();
        }
      }
      let L = (() => {
          class m {
            constructor() {
              (this._defaultUsed = !1),
                (this._caseCount = 0),
                (this._lastCaseCheckIndex = 0),
                (this._lastCasesMatched = !1);
            }
            set ngSwitch(v) {
              (this._ngSwitch = v),
                0 === this._caseCount && this._updateDefaultCases(!0);
            }
            _addCase() {
              return this._caseCount++;
            }
            _addDefault(v) {
              this._defaultViews || (this._defaultViews = []),
                this._defaultViews.push(v);
            }
            _matchCase(v) {
              const O = v == this._ngSwitch;
              return (
                (this._lastCasesMatched = this._lastCasesMatched || O),
                this._lastCaseCheckIndex++,
                this._lastCaseCheckIndex === this._caseCount &&
                  (this._updateDefaultCases(!this._lastCasesMatched),
                  (this._lastCaseCheckIndex = 0),
                  (this._lastCasesMatched = !1)),
                O
              );
            }
            _updateDefaultCases(v) {
              if (this._defaultViews && v !== this._defaultUsed) {
                this._defaultUsed = v;
                for (let O = 0; O < this._defaultViews.length; O++)
                  this._defaultViews[O].enforceState(v);
              }
            }
          }
          return (
            (m.ɵfac = function (v) {
              return new (v || m)();
            }),
            (m.ɵdir = o.lG2({
              type: m,
              selectors: [['', 'ngSwitch', '']],
              inputs: { ngSwitch: 'ngSwitch' },
              standalone: !0,
            })),
            m
          );
        })(),
        Q = (() => {
          class m {
            constructor(v, O, X) {
              (this.ngSwitch = X), X._addCase(), (this._view = new Ce(v, O));
            }
            ngDoCheck() {
              this._view.enforceState(
                this.ngSwitch._matchCase(this.ngSwitchCase)
              );
            }
          }
          return (
            (m.ɵfac = function (v) {
              return new (v || m)(o.Y36(o.s_b), o.Y36(o.Rgc), o.Y36(L, 9));
            }),
            (m.ɵdir = o.lG2({
              type: m,
              selectors: [['', 'ngSwitchCase', '']],
              inputs: { ngSwitchCase: 'ngSwitchCase' },
              standalone: !0,
            })),
            m
          );
        })(),
        ie = (() => {
          class m {
            constructor(v, O, X) {
              X._addDefault(new Ce(v, O));
            }
          }
          return (
            (m.ɵfac = function (v) {
              return new (v || m)(o.Y36(o.s_b), o.Y36(o.Rgc), o.Y36(L, 9));
            }),
            (m.ɵdir = o.lG2({
              type: m,
              selectors: [['', 'ngSwitchDefault', '']],
              standalone: !0,
            })),
            m
          );
        })(),
        et = (() => {
          class m {
            constructor(v) {
              (this._viewContainerRef = v),
                (this._viewRef = null),
                (this.ngTemplateOutletContext = null),
                (this.ngTemplateOutlet = null),
                (this.ngTemplateOutletInjector = null);
            }
            ngOnChanges(v) {
              if (v.ngTemplateOutlet || v.ngTemplateOutletInjector) {
                const O = this._viewContainerRef;
                if (
                  (this._viewRef && O.remove(O.indexOf(this._viewRef)),
                  this.ngTemplateOutlet)
                ) {
                  const {
                    ngTemplateOutlet: X,
                    ngTemplateOutletContext: Le,
                    ngTemplateOutletInjector: Ue,
                  } = this;
                  this._viewRef = O.createEmbeddedView(
                    X,
                    Le,
                    Ue ? { injector: Ue } : void 0
                  );
                } else this._viewRef = null;
              } else
                this._viewRef &&
                  v.ngTemplateOutletContext &&
                  this.ngTemplateOutletContext &&
                  (this._viewRef.context = this.ngTemplateOutletContext);
            }
          }
          return (
            (m.ɵfac = function (v) {
              return new (v || m)(o.Y36(o.s_b));
            }),
            (m.ɵdir = o.lG2({
              type: m,
              selectors: [['', 'ngTemplateOutlet', '']],
              inputs: {
                ngTemplateOutletContext: 'ngTemplateOutletContext',
                ngTemplateOutlet: 'ngTemplateOutlet',
                ngTemplateOutletInjector: 'ngTemplateOutletInjector',
              },
              standalone: !0,
              features: [o.TTD],
            })),
            m
          );
        })();
      class Hn {
        createSubscription(w, v) {
          return w.subscribe({
            next: v,
            error: (O) => {
              throw O;
            },
          });
        }
        dispose(w) {
          w.unsubscribe();
        }
      }
      class xn {
        createSubscription(w, v) {
          return w.then(v, (O) => {
            throw O;
          });
        }
        dispose(w) {}
      }
      const dn = new xn(),
        _r = new Hn();
      let Zn = (() => {
          class m {
            constructor(v) {
              (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null),
                (this._strategy = null),
                (this._ref = v);
            }
            ngOnDestroy() {
              this._subscription && this._dispose(), (this._ref = null);
            }
            transform(v) {
              return this._obj
                ? v !== this._obj
                  ? (this._dispose(), this.transform(v))
                  : this._latestValue
                : (v && this._subscribe(v), this._latestValue);
            }
            _subscribe(v) {
              (this._obj = v),
                (this._strategy = this._selectStrategy(v)),
                (this._subscription = this._strategy.createSubscription(
                  v,
                  (O) => this._updateLatestValue(v, O)
                ));
            }
            _selectStrategy(v) {
              if ((0, o.QGY)(v)) return dn;
              if ((0, o.F4k)(v)) return _r;
              throw (function Ht(m, w) {
                return new o.vHH(2100, !1);
              })();
            }
            _dispose() {
              this._strategy.dispose(this._subscription),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null);
            }
            _updateLatestValue(v, O) {
              v === this._obj &&
                ((this._latestValue = O), this._ref.markForCheck());
            }
          }
          return (
            (m.ɵfac = function (v) {
              return new (v || m)(o.Y36(o.sBO, 16));
            }),
            (m.ɵpipe = o.Yjl({
              name: 'async',
              type: m,
              pure: !1,
              standalone: !0,
            })),
            m
          );
        })(),
        eo = (() => {
          class m {}
          return (
            (m.ɵfac = function (v) {
              return new (v || m)();
            }),
            (m.ɵmod = o.oAB({ type: m })),
            (m.ɵinj = o.cJS({})),
            m
          );
        })();
      const to = 'browser';
      let Po = (() => {
        class m {}
        return (
          (m.ɵprov = (0, o.Yz7)({
            token: m,
            providedIn: 'root',
            factory: () => new Do((0, o.LFG)(Ne), window),
          })),
          m
        );
      })();
      class Do {
        constructor(w, v) {
          (this.document = w), (this.window = v), (this.offset = () => [0, 0]);
        }
        setOffset(w) {
          this.offset = Array.isArray(w) ? () => w : w;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(w) {
          this.supportsScrolling() && this.window.scrollTo(w[0], w[1]);
        }
        scrollToAnchor(w) {
          if (!this.supportsScrolling()) return;
          const v = (function Er(m, w) {
            const v = m.getElementById(w) || m.getElementsByName(w)[0];
            if (v) return v;
            if (
              'function' == typeof m.createTreeWalker &&
              m.body &&
              (m.body.createShadowRoot || m.body.attachShadow)
            ) {
              const O = m.createTreeWalker(m.body, NodeFilter.SHOW_ELEMENT);
              let X = O.currentNode;
              for (; X; ) {
                const Le = X.shadowRoot;
                if (Le) {
                  const Ue =
                    Le.getElementById(w) || Le.querySelector(`[name="${w}"]`);
                  if (Ue) return Ue;
                }
                X = O.nextNode();
              }
            }
            return null;
          })(this.document, w);
          v && (this.scrollToElement(v), v.focus());
        }
        setHistoryScrollRestoration(w) {
          if (this.supportScrollRestoration()) {
            const v = this.window.history;
            v && v.scrollRestoration && (v.scrollRestoration = w);
          }
        }
        scrollToElement(w) {
          const v = w.getBoundingClientRect(),
            O = v.left + this.window.pageXOffset,
            X = v.top + this.window.pageYOffset,
            Le = this.offset();
          this.window.scrollTo(O - Le[0], X - Le[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const w =
              ro(this.window.history) ||
              ro(Object.getPrototypeOf(this.window.history));
            return !(!w || (!w.writable && !w.set));
          } catch {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              'pageXOffset' in this.window
            );
          } catch {
            return !1;
          }
        }
      }
      function ro(m) {
        return Object.getOwnPropertyDescriptor(m, 'scrollRestoration');
      }
      class vr {}
    },
    8256: (at, ke, S) => {
      'use strict';
      S.d(ke, {
        tb: () => lg,
        AFp: () => ig,
        ip1: () => og,
        CZH: () => ll,
        z2F: () => ul,
        sBO: () => v_,
        Sil: () => ZC,
        _Vd: () => Ys,
        EJc: () => XC,
        Xts: () => ql,
        SBq: () => Ws,
        lqb: () => Ri,
        qLn: () => qs,
        vpe: () => qo,
        XFs: () => qe,
        OlP: () => Cn,
        zs3: () => xi,
        ZZ4: () => Du,
        aQg: () => Cu,
        soG: () => cl,
        YKP: () => up,
        h0i: () => hs,
        PXZ: () => u_,
        R0b: () => po,
        FiY: () => Ls,
        Lbi: () => YC,
        g9A: () => ag,
        Qsj: () => fv,
        FYo: () => Nd,
        JOm: () => jo,
        tp0: () => ks,
        Rgc: () => la,
        dDg: () => s_,
        eoX: () => gg,
        GfV: () => Ld,
        s_b: () => il,
        ifc: () => ht,
        MMx: () => qc,
        Lck: () => j0,
        G48: () => m_,
        Gpc: () => Ve,
        RIp: () => Sd,
        f3M: () => An,
        MR2: () => Qm,
        c2e: () => WC,
        zSh: () => Ql,
        wAp: () => It,
        vHH: () => q,
        lri: () => hg,
        rWj: () => pg,
        D6c: () => x_,
        cg1: () => Vc,
        kL8: () => Nh,
        dqk: () => pt,
        iPO: () => h_,
        Z0I: () => Ln,
        sIi: () => Qs,
        CqO: () => $f,
        QGY: () => Oc,
        QP$: () => Rn,
        F4k: () => kf,
        RDi: () => Tm,
        AaK: () => $e,
        qOj: () => Ec,
        TTD: () => Br,
        _Bn: () => cp,
        jDz: () => fp,
        xp6: () => jd,
        uIk: () => wc,
        ekj: () => Lc,
        Suo: () => Pp,
        Xpm: () => Sn,
        lG2: () => ar,
        Yz7: () => Lt,
        cJS: () => jn,
        oAB: () => pr,
        Yjl: () => yn,
        Y36: () => Ji,
        _UZ: () => Ac,
        GkF: () => Tc,
        BQk: () => Za,
        ynx: () => Ka,
        qZA: () => Xa,
        TgZ: () => qa,
        EpF: () => Lf,
        n5z: () => ba,
        LFG: () => Dt,
        $8M: () => zi,
        $Z: () => nf,
        NdJ: () => Rc,
        CRH: () => Np,
        oxw: () => jf,
        ALo: () => wp,
        lcZ: () => Sp,
        Hsn: () => zf,
        F$t: () => Gf,
        Q6J: () => Sc,
        DdM: () => Dp,
        iGM: () => xp,
        MAs: () => Nf,
        KtG: () => Je,
        CHM: () => Me,
        LSH: () => Wl,
        P3R: () => Ed,
        YNc: () => Pf,
        W1O: () => Bp,
        _uU: () => gh,
        Oqu: () => $c,
        Gf: () => Fp,
      });
      var o = S(7579),
        N = S(727),
        j = S(9751),
        z = S(8189),
        ge = S(8421),
        Ne = S(515),
        re = S(7669),
        Fe = S(2076),
        Pe = S(930),
        De = S(4482);
      function ue(e, t, ...n) {
        if (!0 === t) return void e();
        if (!1 === t) return;
        const r = new Pe.Hp({
          next: () => {
            r.unsubscribe(), e();
          },
        });
        return t(...n).subscribe(r);
      }
      function te(e) {
        for (let t in e) if (e[t] === te) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function ve(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function $e(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map($e).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      function me(e, t) {
        return null == e || '' === e
          ? null === t
            ? ''
            : t
          : null == t || '' === t
          ? e
          : e + ' ' + t;
      }
      const ee = te({ __forward_ref__: te });
      function Ve(e) {
        return (
          (e.__forward_ref__ = Ve),
          (e.toString = function () {
            return $e(this());
          }),
          e
        );
      }
      function Ee(e) {
        return ye(e) ? e() : e;
      }
      function ye(e) {
        return (
          'function' == typeof e &&
          e.hasOwnProperty(ee) &&
          e.__forward_ref__ === Ve
        );
      }
      function ae(e) {
        return e && !!e.ɵproviders;
      }
      const de = 'https://g.co/ng/security#xss';
      class q extends Error {
        constructor(t, n) {
          super(
            (function le(e, t) {
              return `NG0${Math.abs(e)}${t ? ': ' + t.trim() : ''}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function fe(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function Se(e, t) {
        throw new q(-201, !1);
      }
      function bt(e, t) {
        null == e &&
          (function lt(e, t, n, r) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == r ? '' : ` [Expected=> ${n} ${r} ${t} <=Actual]`)
            );
          })(t, e, null, '!=');
      }
      function Lt(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function jn(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function st(e) {
        return Pt(e, Jt) || Pt(e, Ut);
      }
      function Ln(e) {
        return null !== st(e);
      }
      function Pt(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function kn(e) {
        return e && (e.hasOwnProperty($n) || e.hasOwnProperty(ct))
          ? e[$n]
          : null;
      }
      const Jt = te({ ɵprov: te }),
        $n = te({ ɵinj: te }),
        Ut = te({ ngInjectableDef: te }),
        ct = te({ ngInjectorDef: te });
      var qe = (() => (
        ((qe = qe || {})[(qe.Default = 0)] = 'Default'),
        (qe[(qe.Host = 1)] = 'Host'),
        (qe[(qe.Self = 2)] = 'Self'),
        (qe[(qe.SkipSelf = 4)] = 'SkipSelf'),
        (qe[(qe.Optional = 8)] = 'Optional'),
        qe
      ))();
      let Vt;
      function At(e) {
        const t = Vt;
        return (Vt = e), t;
      }
      function un(e, t, n) {
        const r = st(e);
        return r && 'root' == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & qe.Optional
          ? null
          : void 0 !== t
          ? t
          : void Se($e(e));
      }
      const pt = (() =>
          (typeof globalThis < 'u' && globalThis) ||
          (typeof global < 'u' && global) ||
          (typeof window < 'u' && window) ||
          (typeof self < 'u' &&
            typeof WorkerGlobalScope < 'u' &&
            self instanceof WorkerGlobalScope &&
            self))(),
        tr = {},
        Bn = '__NG_DI_FLAG__',
        Gn = 'ngTempTokenPath',
        wt = /\n/gm,
        rr = '__source';
      let jt;
      function on(e) {
        const t = jt;
        return (jt = e), t;
      }
      function sn(e, t = qe.Default) {
        if (void 0 === jt) throw new q(-203, !1);
        return null === jt
          ? un(e, void 0, t)
          : jt.get(e, t & qe.Optional ? null : void 0, t);
      }
      function Dt(e, t = qe.Default) {
        return (
          (function Yt() {
            return Vt;
          })() || sn
        )(Ee(e), t);
      }
      function An(e, t = qe.Default) {
        return Dt(e, Vn(t));
      }
      function Vn(e) {
        return typeof e > 'u' || 'number' == typeof e
          ? e
          : 0 |
              (e.optional && 8) |
              (e.host && 1) |
              (e.self && 2) |
              (e.skipSelf && 4);
      }
      function or(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = Ee(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new q(900, !1);
            let i,
              s = qe.Default;
            for (let u = 0; u < r.length; u++) {
              const h = r[u],
                y = Dr(h);
              'number' == typeof y
                ? -1 === y
                  ? (i = h.token)
                  : (s |= y)
                : (i = h);
            }
            t.push(Dt(i, s));
          } else t.push(Dt(r));
        }
        return t;
      }
      function hn(e, t) {
        return (e[Bn] = t), (e.prototype[Bn] = t), e;
      }
      function Dr(e) {
        return e[Bn];
      }
      function Z(e) {
        return { toString: e }.toString();
      }
      var Y = (() => (
          ((Y = Y || {})[(Y.OnPush = 0)] = 'OnPush'),
          (Y[(Y.Default = 1)] = 'Default'),
          Y
        ))(),
        ht = (() => {
          return (
            ((e = ht || (ht = {}))[(e.Emulated = 0)] = 'Emulated'),
            (e[(e.None = 2)] = 'None'),
            (e[(e.ShadowDom = 3)] = 'ShadowDom'),
            ht
          );
          var e;
        })();
      const mt = {},
        vt = [],
        Zt = te({ ɵcmp: te }),
        an = te({ ɵdir: te }),
        ln = te({ ɵpipe: te }),
        ir = te({ ɵmod: te }),
        Tn = te({ ɵfac: te }),
        pn = te({ __NG_ELEMENT_ID__: te });
      let On = 0;
      function Sn(e) {
        return Z(() => {
          const n = !0 === e.standalone,
            r = {},
            i = {
              type: e.type,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: r,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === Y.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              standalone: n,
              dependencies: (n && e.dependencies) || null,
              getStandaloneInjector: null,
              selectors: e.selectors || vt,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || ht.Emulated,
              id: 'c' + On++,
              styles: e.styles || vt,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
              findHostDirectiveDefs: null,
              hostDirectives: null,
            },
            s = e.dependencies,
            u = e.features;
          return (
            (i.inputs = sr(e.inputs, r)),
            (i.outputs = sr(e.outputs)),
            u && u.forEach((h) => h(i)),
            (i.directiveDefs = s
              ? () => ('function' == typeof s ? s() : s).map(fr).filter(Sr)
              : null),
            (i.pipeDefs = s
              ? () => ('function' == typeof s ? s() : s).map(en).filter(Sr)
              : null),
            i
          );
        });
      }
      function fr(e) {
        return Tt(e) || mn(e);
      }
      function Sr(e) {
        return null !== e;
      }
      function pr(e) {
        return Z(() => ({
          type: e.type,
          bootstrap: e.bootstrap || vt,
          declarations: e.declarations || vt,
          imports: e.imports || vt,
          exports: e.exports || vt,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function sr(e, t) {
        if (null == e) return mt;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let i = e[r],
              s = i;
            Array.isArray(i) && ((s = i[1]), (i = i[0])),
              (n[i] = r),
              t && (t[i] = s);
          }
        return n;
      }
      const ar = Sn;
      function yn(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          standalone: !0 === e.standalone,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function Tt(e) {
        return e[Zt] || null;
      }
      function mn(e) {
        return e[an] || null;
      }
      function en(e) {
        return e[ln] || null;
      }
      function Rn(e) {
        const t = Tt(e) || mn(e) || en(e);
        return null !== t && t.standalone;
      }
      function T(e, t) {
        const n = e[ir] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${$e(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function tn(e) {
        return Array.isArray(e) && 'object' == typeof e[1];
      }
      function Fn(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function Ar(e) {
        return 0 != (4 & e.flags);
      }
      function Tr(e) {
        return e.componentOffset > -1;
      }
      function Or(e) {
        return 1 == (1 & e.flags);
      }
      function Mn(e) {
        return null !== e.template;
      }
      function kr(e) {
        return 0 != (256 & e[2]);
      }
      function cr(e, t) {
        return e.hasOwnProperty(Tn) ? e[Tn] : null;
      }
      class oo {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function Br() {
        return Co;
      }
      function Co(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = _o), ci;
      }
      function ci() {
        const e = io(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === mt) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function _o(e, t, n, r) {
        const i = this.declaredInputs[n],
          s =
            io(e) ||
            (function Gr(e, t) {
              return (e[Eo] = t);
            })(e, { previous: mt, current: null }),
          u = s.current || (s.current = {}),
          h = s.previous,
          y = h[i];
        (u[i] = new oo(y && y.currentValue, t, h === mt)), (e[r] = t);
      }
      Br.ngInherit = !0;
      const Eo = '__ngSimpleChanges__';
      function io(e) {
        return e[Eo] || null;
      }
      function Dn(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function Lo(e, t) {
        return Dn(t[e]);
      }
      function Jn(e, t) {
        return Dn(t[e.index]);
      }
      function ao(e, t) {
        return e.data[t];
      }
      function Wr(e, t) {
        return e[t];
      }
      function Un(e, t) {
        const n = t[e];
        return tn(n) ? n : n[0];
      }
      function Rr(e) {
        return 64 == (64 & e[2]);
      }
      function Vr(e, t) {
        return null == t ? null : e[t];
      }
      function lo(e) {
        e[18] = 0;
      }
      function nn(e, t) {
        e[5] += t;
        let n = e,
          r = e[3];
        for (
          ;
          null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

        )
          (r[5] += t), (n = r), (r = r[3]);
      }
      const St = { lFrame: ys(null), bindingsEnabled: !0 };
      function a() {
        return St.bindingsEnabled;
      }
      function g() {
        return St.lFrame.lView;
      }
      function M() {
        return St.lFrame.tView;
      }
      function Me(e) {
        return (St.lFrame.contextLView = e), e[8];
      }
      function Je(e) {
        return (St.lFrame.contextLView = null), e;
      }
      function Qe() {
        let e = Ct();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function Ct() {
        return St.lFrame.currentTNode;
      }
      function qt(e, t) {
        const n = St.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function Qt() {
        return St.lFrame.isParent;
      }
      function zn() {
        St.lFrame.isParent = !1;
      }
      function fn() {
        const e = St.lFrame;
        let t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        );
      }
      function co() {
        return St.lFrame.bindingIndex++;
      }
      function da(e, t) {
        const n = St.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), Ei(t);
      }
      function Ei(e) {
        St.lFrame.currentDirectiveIndex = e;
      }
      function ei() {
        return St.lFrame.currentQueryIndex;
      }
      function ti(e) {
        St.lFrame.currentQueryIndex = e;
      }
      function $i(e) {
        const t = e[1];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
      }
      function $o(e, t, n) {
        if (n & qe.SkipSelf) {
          let i = t,
            s = e;
          for (
            ;
            !((i = i.parent),
            null !== i ||
              n & qe.Host ||
              ((i = $i(s)), null === i || ((s = s[15]), 10 & i.type)));

          );
          if (null === i) return !1;
          (t = i), (e = s);
        }
        const r = (St.lFrame = vs());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function Ii(e) {
        const t = vs(),
          n = e[1];
        (St.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function vs() {
        const e = St.lFrame,
          t = null === e ? null : e.child;
        return null === t ? ys(e) : t;
      }
      function ys(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function Ds() {
        const e = St.lFrame;
        return (
          (St.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const Cs = Ds;
      function Bi() {
        const e = Ds();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function m() {
        return St.lFrame.selectedIndex;
      }
      function w(e) {
        St.lFrame.selectedIndex = e;
      }
      function v() {
        const e = St.lFrame;
        return ao(e.tView, e.selectedIndex);
      }
      function Bt(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const s = e.data[n].type.prototype,
            {
              ngAfterContentInit: u,
              ngAfterContentChecked: h,
              ngAfterViewInit: y,
              ngAfterViewChecked: I,
              ngOnDestroy: R,
            } = s;
          u && (e.contentHooks || (e.contentHooks = [])).push(-n, u),
            h &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, h),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, h)),
            y && (e.viewHooks || (e.viewHooks = [])).push(-n, y),
            I &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, I),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, I)),
            null != R && (e.destroyHooks || (e.destroyHooks = [])).push(n, R);
        }
      }
      function zt(e, t, n) {
        rn(e, t, 3, n);
      }
      function xt(e, t, n, r) {
        (3 & e[2]) === n && rn(e, t, n, r);
      }
      function En(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function rn(e, t, n, r) {
        const s = r ?? -1,
          u = t.length - 1;
        let h = 0;
        for (let y = void 0 !== r ? 65535 & e[18] : 0; y < u; y++)
          if ('number' == typeof t[y + 1]) {
            if (((h = t[y]), null != r && h >= r)) break;
          } else
            t[y] < 0 && (e[18] += 65536),
              (h < s || -1 == s) &&
                (qn(e, n, t, y), (e[18] = (4294901760 & e[18]) + y + 2)),
              y++;
      }
      function qn(e, t, n, r) {
        const i = n[r] < 0,
          s = n[r + 1],
          h = e[i ? -n[r] : n[r]];
        if (i) {
          if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
            e[2] += 2048;
            try {
              s.call(h);
            } finally {
            }
          }
        } else
          try {
            s.call(h);
          } finally {
          }
      }
      class hr {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      function Es(e, t, n) {
        let r = 0;
        for (; r < n.length; ) {
          const i = n[r];
          if ('number' == typeof i) {
            if (0 !== i) break;
            r++;
            const s = n[r++],
              u = n[r++],
              h = n[r++];
            e.setAttribute(t, u, h, s);
          } else {
            const s = i,
              u = n[++r];
            Is(s) ? e.setProperty(t, s, u) : e.setAttribute(t, s, u), r++;
          }
        }
        return r;
      }
      function bs(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function Is(e) {
        return 64 === e.charCodeAt(0);
      }
      function ni(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const i = t[r];
              'number' == typeof i
                ? (n = i)
                : 0 === n ||
                  ws(e, n, i, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function ws(e, t, n, r, i) {
        let s = 0,
          u = e.length;
        if (-1 === t) u = -1;
        else
          for (; s < e.length; ) {
            const h = e[s++];
            if ('number' == typeof h) {
              if (h === t) {
                u = -1;
                break;
              }
              if (h > t) {
                u = s - 1;
                break;
              }
            }
          }
        for (; s < e.length; ) {
          const h = e[s];
          if ('number' == typeof h) break;
          if (h === n) {
            if (null === r) return void (null !== i && (e[s + 1] = i));
            if (r === e[s + 1]) return void (e[s + 2] = i);
          }
          s++, null !== r && s++, null !== i && s++;
        }
        -1 !== u && (e.splice(u, 0, t), (s = u + 1)),
          e.splice(s++, 0, n),
          null !== r && e.splice(s++, 0, r),
          null !== i && e.splice(s++, 0, i);
      }
      function Ss(e) {
        return -1 !== e;
      }
      function Hi(e) {
        return 32767 & e;
      }
      function Ui(e, t) {
        let n = (function ga(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let Ms = !0;
      function ji(e) {
        const t = Ms;
        return (Ms = e), t;
      }
      let ya = 0;
      const fo = {};
      function Gi(e, t) {
        const n = yr(e, t);
        if (-1 !== n) return n;
        const r = t[1];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          Ts(r.data, e),
          Ts(t, null),
          Ts(r.blueprint, null));
        const i = Os(e, t),
          s = e.injectorIndex;
        if (Ss(i)) {
          const u = Hi(i),
            h = Ui(i, t),
            y = h[1].data;
          for (let I = 0; I < 8; I++) t[s + I] = h[u + I] | y[u + I];
        }
        return (t[s + 8] = i), s;
      }
      function Ts(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function yr(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function Os(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          i = t;
        for (; null !== i; ) {
          if (((r = Ps(i)), null === r)) return -1;
          if ((n++, (i = i[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return -1;
      }
      function di(e, t, n) {
        !(function pl(e, t, n) {
          let r;
          'string' == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(pn) && (r = n[pn]),
            null == r && (r = n[pn] = ya++);
          const i = 255 & r;
          t.data[e + (i >> 5)] |= 1 << i;
        })(e, t, n);
      }
      function Ca(e, t, n) {
        if (n & qe.Optional || void 0 !== e) return e;
        Se();
      }
      function Rs(e, t, n, r) {
        if (
          (n & qe.Optional && void 0 === r && (r = null),
          0 == (n & (qe.Self | qe.Host)))
        ) {
          const i = e[9],
            s = At(void 0);
          try {
            return i ? i.get(t, r, n & qe.Optional) : un(t, r, n & qe.Optional);
          } finally {
            At(s);
          }
        }
        return Ca(r, 0, n);
      }
      function _a(e, t, n, r = qe.Default, i) {
        if (null !== e) {
          if (1024 & t[2]) {
            const u = (function _u(e, t, n, r, i) {
              let s = e,
                u = t;
              for (
                ;
                null !== s && null !== u && 1024 & u[2] && !(256 & u[2]);

              ) {
                const h = gl(s, u, n, r | qe.Self, fo);
                if (h !== fo) return h;
                let y = s.parent;
                if (!y) {
                  const I = u[21];
                  if (I) {
                    const R = I.get(n, fo, r);
                    if (R !== fo) return R;
                  }
                  (y = Ps(u)), (u = u[15]);
                }
                s = y;
              }
              return i;
            })(e, t, n, r, fo);
            if (u !== fo) return u;
          }
          const s = gl(e, t, n, r, fo);
          if (s !== fo) return s;
        }
        return Rs(t, n, r, i);
      }
      function gl(e, t, n, r, i) {
        const s = (function hi(e) {
          if ('string' == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(pn) ? e[pn] : void 0;
          return 'number' == typeof t ? (t >= 0 ? 255 & t : Fs) : t;
        })(n);
        if ('function' == typeof s) {
          if (!$o(t, e, r)) return r & qe.Host ? Ca(i, 0, r) : Rs(t, n, r, i);
          try {
            const u = s(r);
            if (null != u || r & qe.Optional) return u;
            Se();
          } finally {
            Cs();
          }
        } else if ('number' == typeof s) {
          let u = null,
            h = yr(e, t),
            y = -1,
            I = r & qe.Host ? t[16][6] : null;
          for (
            (-1 === h || r & qe.SkipSelf) &&
            ((y = -1 === h ? Os(e, t) : t[h + 8]),
            -1 !== y && xs(r, !1)
              ? ((u = t[1]), (h = Hi(y)), (t = Ui(y, t)))
              : (h = -1));
            -1 !== h;

          ) {
            const R = t[1];
            if (Ea(s, h, R.data)) {
              const H = ml(h, t, n, u, r, I);
              if (H !== fo) return H;
            }
            (y = t[h + 8]),
              -1 !== y && xs(r, t[1].data[h + 8] === I) && Ea(s, h, t)
                ? ((u = R), (h = Hi(y)), (t = Ui(y, t)))
                : (h = -1);
          }
        }
        return i;
      }
      function ml(e, t, n, r, i, s) {
        const u = t[1],
          h = u.data[e + 8],
          R = fi(
            h,
            u,
            n,
            null == r ? Tr(h) && Ms : r != u && 0 != (3 & h.type),
            i & qe.Host && s === h
          );
        return null !== R ? Bo(t, u, R, h) : fo;
      }
      function fi(e, t, n, r, i) {
        const s = e.providerIndexes,
          u = t.data,
          h = 1048575 & s,
          y = e.directiveStart,
          R = s >> 20,
          ne = i ? h + R : e.directiveEnd;
        for (let _e = r ? h : h + R; _e < ne; _e++) {
          const He = u[_e];
          if ((_e < y && n === He) || (_e >= y && He.type === n)) return _e;
        }
        if (i) {
          const _e = u[y];
          if (_e && Mn(_e) && _e.type === n) return y;
        }
        return null;
      }
      function Bo(e, t, n, r) {
        let i = e[n];
        const s = t.data;
        if (
          (function Io(e) {
            return e instanceof hr;
          })(i)
        ) {
          const u = i;
          u.resolving &&
            (function V(e, t) {
              const n = t ? `. Dependency path: ${t.join(' > ')} > ${e}` : '';
              throw new q(
                -200,
                `Circular dependency in DI detected for ${e}${n}`
              );
            })(
              (function B(e) {
                return 'function' == typeof e
                  ? e.name || e.toString()
                  : 'object' == typeof e &&
                    null != e &&
                    'function' == typeof e.type
                  ? e.type.name || e.type.toString()
                  : fe(e);
              })(s[n])
            );
          const h = ji(u.canSeeViewProviders);
          u.resolving = !0;
          const y = u.injectImpl ? At(u.injectImpl) : null;
          $o(e, r, qe.Default);
          try {
            (i = e[n] = u.factory(void 0, s, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function Gt(e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: i,
                    ngDoCheck: s,
                  } = t.type.prototype;
                  if (r) {
                    const u = Co(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, u),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, u);
                  }
                  i &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, i),
                    s &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, s),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, s));
                })(n, s[n], t);
          } finally {
            null !== y && At(y), ji(h), (u.resolving = !1), Cs();
          }
        }
        return i;
      }
      function Ea(e, t, n) {
        return !!(n[t + (e >> 5)] & (1 << e));
      }
      function xs(e, t) {
        return !(e & qe.Self || (e & qe.Host && t));
      }
      class Kr {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return _a(this._tNode, this._lView, t, Vn(r), n);
        }
      }
      function Fs() {
        return new Kr(Qe(), g());
      }
      function ba(e) {
        return Z(() => {
          const t = e.prototype.constructor,
            n = t[Tn] || Ia(t),
            r = Object.prototype;
          let i = Object.getPrototypeOf(e.prototype).constructor;
          for (; i && i !== r; ) {
            const s = i[Tn] || Ia(i);
            if (s && s !== n) return s;
            i = Object.getPrototypeOf(i);
          }
          return (s) => new s();
        });
      }
      function Ia(e) {
        return ye(e)
          ? () => {
              const t = Ia(Ee(e));
              return t && t();
            }
          : cr(e);
      }
      function Ps(e) {
        const t = e[1],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[6] : null;
      }
      function zi(e) {
        return (function Da(e, t) {
          if ('class' === t) return e.classes;
          if ('style' === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let i = 0;
            for (; i < r; ) {
              const s = n[i];
              if (bs(s)) break;
              if (0 === s) i += 2;
              else if ('number' == typeof s)
                for (i++; i < r && 'string' == typeof n[i]; ) i++;
              else {
                if (s === t) return n[i + 1];
                i += 2;
              }
            }
          }
          return null;
        })(Qe(), e);
      }
      const pi = '__parameters__';
      function ri(e, t, n) {
        return Z(() => {
          const r = (function Yi(e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const i in r) this[i] = r[i];
              }
            };
          })(t);
          function i(...s) {
            if (this instanceof i) return r.apply(this, s), this;
            const u = new i(...s);
            return (h.annotation = u), h;
            function h(y, I, R) {
              const H = y.hasOwnProperty(pi)
                ? y[pi]
                : Object.defineProperty(y, pi, { value: [] })[pi];
              for (; H.length <= R; ) H.push(null);
              return (H[R] = H[R] || []).push(u), y;
            }
          }
          return (
            n && (i.prototype = Object.create(n.prototype)),
            (i.prototype.ngMetadataName = e),
            (i.annotationCls = i),
            i
          );
        });
      }
      class Cn {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = Lt({
                  token: this,
                  providedIn: n.providedIn || 'root',
                  factory: n.factory,
                }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function p(e, t) {
        e.forEach((n) => (Array.isArray(n) ? p(n, t) : t(n)));
      }
      function E(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function A(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function P(e, t) {
        const n = [];
        for (let r = 0; r < e; r++) n.push(t);
        return n;
      }
      function Et(e, t, n) {
        let r = Pr(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function ut(e, t, n, r) {
                let i = e.length;
                if (i == t) e.push(n, r);
                else if (1 === i) e.push(r, e[0]), (e[0] = n);
                else {
                  for (i--, e.push(e[i - 1], e[i]); i > t; )
                    (e[i] = e[i - 2]), i--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function Pn(e, t) {
        const n = Pr(e, t);
        if (n >= 0) return e[1 | n];
      }
      function Pr(e, t) {
        return (function Uo(e, t, n) {
          let r = 0,
            i = e.length >> n;
          for (; i !== r; ) {
            const s = r + ((i - r) >> 1),
              u = e[s << n];
            if (t === u) return s << n;
            u > t ? (i = s) : (r = s + 1);
          }
          return ~(i << n);
        })(e, t, 1);
      }
      const Ls = hn(ri('Optional'), 8),
        ks = hn(ri('SkipSelf'), 4);
      var jo = (() => (
        ((jo = jo || {})[(jo.Important = 1)] = 'Important'),
        (jo[(jo.DashCase = 2)] = 'DashCase'),
        jo
      ))();
      const wl = new Map();
      let Qg = 0;
      const Ml = '__ngContext__';
      function Ir(e, t) {
        tn(t)
          ? ((e[Ml] = t[20]),
            (function em(e) {
              wl.set(e[20], e);
            })(t))
          : (e[Ml] = t);
      }
      function Tl(e, t) {
        return undefined(e, t);
      }
      function Hs(e) {
        const t = e[3];
        return Fn(t) ? t[3] : t;
      }
      function Ol(e) {
        return qu(e[13]);
      }
      function Rl(e) {
        return qu(e[4]);
      }
      function qu(e) {
        for (; null !== e && !Fn(e); ) e = e[4];
        return e;
      }
      function qi(e, t, n, r, i) {
        if (null != r) {
          let s,
            u = !1;
          Fn(r) ? (s = r) : tn(r) && ((u = !0), (r = r[0]));
          const h = Dn(r);
          0 === e && null !== n
            ? null == i
              ? ed(t, n, h)
              : Ai(t, n, h, i || null, !0)
            : 1 === e && null !== n
            ? Ai(t, n, h, i || null, !0)
            : 2 === e
            ? (function $l(e, t, n) {
                const r = Ra(e, t);
                r &&
                  (function Cm(e, t, n, r) {
                    e.removeChild(t, n, r);
                  })(e, r, t, n);
              })(t, h, u)
            : 3 === e && t.destroyNode(h),
            null != s &&
              (function bm(e, t, n, r, i) {
                const s = n[7];
                s !== Dn(n) && qi(t, e, r, s, i);
                for (let h = 10; h < n.length; h++) {
                  const y = n[h];
                  Us(y[1], y, e, t, r, s);
                }
              })(t, e, s, n, i);
        }
      }
      function Fl(e, t, n) {
        return e.createElement(t, n);
      }
      function Ku(e, t) {
        const n = e[9],
          r = n.indexOf(t),
          i = t[3];
        512 & t[2] && ((t[2] &= -513), nn(i, -1)), n.splice(r, 1);
      }
      function Pl(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          r = e[n];
        if (r) {
          const i = r[17];
          null !== i && i !== e && Ku(i, r), t > 0 && (e[n - 1][4] = r[4]);
          const s = A(e, 10 + t);
          !(function fm(e, t) {
            Us(e, t, t[11], 2, null, null), (t[0] = null), (t[6] = null);
          })(r[1], r);
          const u = s[19];
          null !== u && u.detachView(s[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -65);
        }
        return r;
      }
      function Zu(e, t) {
        if (!(128 & t[2])) {
          const n = t[11];
          n.destroyNode && Us(e, t, n, 3, null, null),
            (function gm(e) {
              let t = e[13];
              if (!t) return Nl(e[1], e);
              for (; t; ) {
                let n = null;
                if (tn(t)) n = t[13];
                else {
                  const r = t[10];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    tn(t) && Nl(t[1], t), (t = t[3]);
                  null === t && (t = e), tn(t) && Nl(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function Nl(e, t) {
        if (!(128 & t[2])) {
          (t[2] &= -65),
            (t[2] |= 128),
            (function Dm(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const i = t[n[r]];
                  if (!(i instanceof hr)) {
                    const s = n[r + 1];
                    if (Array.isArray(s))
                      for (let u = 0; u < s.length; u += 2) {
                        const h = i[s[u]],
                          y = s[u + 1];
                        try {
                          y.call(h);
                        } finally {
                        }
                      }
                    else
                      try {
                        s.call(i);
                      } finally {
                      }
                  }
                }
            })(e, t),
            (function ym(e, t) {
              const n = e.cleanup,
                r = t[7];
              let i = -1;
              if (null !== n)
                for (let s = 0; s < n.length - 1; s += 2)
                  if ('string' == typeof n[s]) {
                    const u = n[s + 3];
                    u >= 0 ? r[(i = u)]() : r[(i = -u)].unsubscribe(), (s += 2);
                  } else {
                    const u = r[(i = n[s + 1])];
                    n[s].call(u);
                  }
              if (null !== r) {
                for (let s = i + 1; s < r.length; s++) (0, r[s])();
                t[7] = null;
              }
            })(e, t),
            1 === t[1].type && t[11].destroy();
          const n = t[17];
          if (null !== n && Fn(t[3])) {
            n !== t[3] && Ku(n, t);
            const r = t[19];
            null !== r && r.detachView(e);
          }
          !(function tm(e) {
            wl.delete(e[20]);
          })(t);
        }
      }
      function Qu(e, t, n) {
        return (function Ju(e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[0];
          {
            const { componentOffset: i } = r;
            if (i > -1) {
              const { encapsulation: s } = e.data[r.directiveStart + i];
              if (s === ht.None || s === ht.Emulated) return null;
            }
            return Jn(r, n);
          }
        })(e, t.parent, n);
      }
      function Ai(e, t, n, r, i) {
        e.insertBefore(t, n, r, i);
      }
      function ed(e, t, n) {
        e.appendChild(t, n);
      }
      function td(e, t, n, r, i) {
        null !== r ? Ai(e, t, n, r, i) : ed(e, t, n);
      }
      function Ra(e, t) {
        return e.parentNode(t);
      }
      function nd(e, t, n) {
        return od(e, t, n);
      }
      let Hl,
        Na,
        od = function rd(e, t, n) {
          return 40 & e.type ? Jn(e, n) : null;
        };
      function xa(e, t, n, r) {
        const i = Qu(e, r, t),
          s = t[11],
          h = nd(r.parent || t[6], r, t);
        if (null != i)
          if (Array.isArray(n))
            for (let y = 0; y < n.length; y++) td(s, i, n[y], h, !1);
          else td(s, i, n, h, !1);
      }
      function Fa(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return Jn(t, e);
          if (4 & n) return kl(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return Fa(e, r);
            {
              const i = e[t.index];
              return Fn(i) ? kl(-1, i) : Dn(i);
            }
          }
          if (32 & n) return Tl(t, e)() || Dn(e[t.index]);
          {
            const r = sd(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : Fa(Hs(e[16]), r)
              : Fa(e, t.next);
          }
        }
        return null;
      }
      function sd(e, t) {
        return null !== t ? e[16][6].projection[t.projection] : null;
      }
      function kl(e, t) {
        const n = 10 + e + 1;
        if (n < t.length) {
          const r = t[n],
            i = r[1].firstChild;
          if (null !== i) return Fa(r, i);
        }
        return t[7];
      }
      function Bl(e, t, n, r, i, s, u) {
        for (; null != n; ) {
          const h = r[n.index],
            y = n.type;
          if (
            (u && 0 === t && (h && Ir(Dn(h), r), (n.flags |= 2)),
            32 != (32 & n.flags))
          )
            if (8 & y) Bl(e, t, n.child, r, i, s, !1), qi(t, e, i, h, s);
            else if (32 & y) {
              const I = Tl(n, r);
              let R;
              for (; (R = I()); ) qi(t, e, i, R, s);
              qi(t, e, i, h, s);
            } else 16 & y ? ad(e, t, r, n, i, s) : qi(t, e, i, h, s);
          n = u ? n.projectionNext : n.next;
        }
      }
      function Us(e, t, n, r, i, s) {
        Bl(n, r, e.firstChild, t, i, s, !1);
      }
      function ad(e, t, n, r, i, s) {
        const u = n[16],
          y = u[6].projection[r.projection];
        if (Array.isArray(y))
          for (let I = 0; I < y.length; I++) qi(t, e, i, y[I], s);
        else Bl(e, t, y, u[3], i, s, !0);
      }
      function ld(e, t, n) {
        '' === n
          ? e.removeAttribute(t, 'class')
          : e.setAttribute(t, 'class', n);
      }
      function cd(e, t, n) {
        const { mergedAttrs: r, classes: i, styles: s } = n;
        null !== r && Es(e, t, r),
          null !== i && ld(e, t, i),
          null !== s &&
            (function wm(e, t, n) {
              e.setAttribute(t, 'style', n);
            })(e, t, s);
      }
      function Tm(e) {
        Hl = e;
      }
      function hd(e) {
        return (
          (function Ul() {
            if (void 0 === Na && ((Na = null), pt.trustedTypes))
              try {
                Na = pt.trustedTypes.createPolicy('angular#unsafe-bypass', {
                  createHTML: (e) => e,
                  createScript: (e) => e,
                  createScriptURL: (e) => e,
                });
              } catch {}
            return Na;
          })()?.createScriptURL(e) || e
        );
      }
      class pd {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${de})`;
        }
      }
      function mi(e) {
        return e instanceof pd ? e.changingThisBreaksApplicationSecurity : e;
      }
      function js(e, t) {
        const n = (function Nm(e) {
          return (e instanceof pd && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ('ResourceURL' === n && 'URL' === t) return !0;
          throw new Error(`Required a safe ${t}, got a ${n} (see ${de})`);
        }
        return n === t;
      }
      const Bm =
        /^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
      var er = (() => (
        ((er = er || {})[(er.NONE = 0)] = 'NONE'),
        (er[(er.HTML = 1)] = 'HTML'),
        (er[(er.STYLE = 2)] = 'STYLE'),
        (er[(er.SCRIPT = 3)] = 'SCRIPT'),
        (er[(er.URL = 4)] = 'URL'),
        (er[(er.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
        er
      ))();
      function Wl(e) {
        const t = zs();
        return t
          ? t.sanitize(er.URL, e) || ''
          : js(e, 'URL')
          ? mi(e)
          : (function jl(e) {
              return (e = String(e)).match(Bm) ? e : 'unsafe:' + e;
            })(fe(e));
      }
      function _d(e) {
        const t = zs();
        if (t) return hd(t.sanitize(er.RESOURCE_URL, e) || '');
        if (js(e, 'ResourceURL')) return hd(mi(e));
        throw new q(904, !1);
      }
      function Ed(e, t, n) {
        return (function Zm(e, t) {
          return ('src' === t &&
            ('embed' === e ||
              'frame' === e ||
              'iframe' === e ||
              'media' === e ||
              'script' === e)) ||
            ('href' === t && ('base' === e || 'link' === e))
            ? _d
            : Wl;
        })(
          t,
          n
        )(e);
      }
      function zs() {
        const e = g();
        return e && e[12];
      }
      const ql = new Cn('ENVIRONMENT_INITIALIZER'),
        bd = new Cn('INJECTOR', -1),
        Id = new Cn('INJECTOR_DEF_TYPES');
      class wd {
        get(t, n = tr) {
          if (n === tr) {
            const r = new Error(`NullInjectorError: No provider for ${$e(t)}!`);
            throw ((r.name = 'NullInjectorError'), r);
          }
          return n;
        }
      }
      function Qm(e) {
        return { ɵproviders: e };
      }
      function Sd(...e) {
        return { ɵproviders: Md(0, e), ɵfromNgModule: !0 };
      }
      function Md(e, ...t) {
        const n = [],
          r = new Set();
        let i;
        return (
          p(t, (s) => {
            const u = s;
            Xl(u, n, [], r) && (i || (i = []), i.push(u));
          }),
          void 0 !== i && Ad(i, n),
          n
        );
      }
      function Ad(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { providers: i } = e[n];
          Kl(i, (s) => {
            t.push(s);
          });
        }
      }
      function Xl(e, t, n, r) {
        if (!(e = Ee(e))) return !1;
        let i = null,
          s = kn(e);
        const u = !s && Tt(e);
        if (s || u) {
          if (u && !u.standalone) return !1;
          i = e;
        } else {
          const y = e.ngModule;
          if (((s = kn(y)), !s)) return !1;
          i = y;
        }
        const h = r.has(i);
        if (u) {
          if (h) return !1;
          if ((r.add(i), u.dependencies)) {
            const y =
              'function' == typeof u.dependencies
                ? u.dependencies()
                : u.dependencies;
            for (const I of y) Xl(I, t, n, r);
          }
        } else {
          if (!s) return !1;
          {
            if (null != s.imports && !h) {
              let I;
              r.add(i);
              try {
                p(s.imports, (R) => {
                  Xl(R, t, n, r) && (I || (I = []), I.push(R));
                });
              } finally {
              }
              void 0 !== I && Ad(I, t);
            }
            if (!h) {
              const I = cr(i) || (() => new i());
              t.push(
                { provide: i, useFactory: I, deps: vt },
                { provide: Id, useValue: i, multi: !0 },
                { provide: ql, useValue: () => Dt(i), multi: !0 }
              );
            }
            const y = s.providers;
            null == y ||
              h ||
              Kl(y, (R) => {
                t.push(R);
              });
          }
        }
        return i !== e && void 0 !== e.providers;
      }
      function Kl(e, t) {
        for (let n of e)
          ae(n) && (n = n.ɵproviders), Array.isArray(n) ? Kl(n, t) : t(n);
      }
      const Jm = te({ provide: String, useValue: te });
      function Zl(e) {
        return null !== e && 'object' == typeof e && Jm in e;
      }
      function Oi(e) {
        return 'function' == typeof e;
      }
      const Ql = new Cn('Set Injector scope.'),
        ka = {},
        tv = {};
      let Jl;
      function $a() {
        return void 0 === Jl && (Jl = new wd()), Jl;
      }
      class Ri {}
      class Rd extends Ri {
        constructor(t, n, r, i) {
          super(),
            (this.parent = n),
            (this.source = r),
            (this.scopes = i),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            tc(t, (u) => this.processProvider(u)),
            this.records.set(bd, Xi(void 0, this)),
            i.has('environment') && this.records.set(Ri, Xi(void 0, this));
          const s = this.records.get(Ql);
          null != s && 'string' == typeof s.value && this.scopes.add(s.value),
            (this.injectorDefTypes = new Set(this.get(Id.multi, vt, qe.Self)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            for (const t of this._ngOnDestroyHooks) t.ngOnDestroy();
            for (const t of this._onDestroyHooks) t();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              (this._onDestroyHooks.length = 0);
          }
        }
        onDestroy(t) {
          this._onDestroyHooks.push(t);
        }
        runInContext(t) {
          this.assertNotDestroyed();
          const n = on(this),
            r = At(void 0);
          try {
            return t();
          } finally {
            on(n), At(r);
          }
        }
        get(t, n = tr, r = qe.Default) {
          this.assertNotDestroyed(), (r = Vn(r));
          const i = on(this),
            s = At(void 0);
          try {
            if (!(r & qe.SkipSelf)) {
              let h = this.records.get(t);
              if (void 0 === h) {
                const y =
                  (function sv(e) {
                    return (
                      'function' == typeof e ||
                      ('object' == typeof e && e instanceof Cn)
                    );
                  })(t) && st(t);
                (h = y && this.injectableDefInScope(y) ? Xi(ec(t), ka) : null),
                  this.records.set(t, h);
              }
              if (null != h) return this.hydrate(t, h);
            }
            return (r & qe.Self ? $a() : this.parent).get(
              t,
              (n = r & qe.Optional && n === tr ? null : n)
            );
          } catch (u) {
            if ('NullInjectorError' === u.name) {
              if (((u[Gn] = u[Gn] || []).unshift($e(t)), i)) throw u;
              return (function dr(e, t, n, r) {
                const i = e[Gn];
                throw (
                  (t[rr] && i.unshift(t[rr]),
                  (e.message = (function Ie(e, t, n, r = null) {
                    e =
                      e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let i = $e(t);
                    if (Array.isArray(t)) i = t.map($e).join(' -> ');
                    else if ('object' == typeof t) {
                      let s = [];
                      for (let u in t)
                        if (t.hasOwnProperty(u)) {
                          let h = t[u];
                          s.push(
                            u +
                              ':' +
                              ('string' == typeof h ? JSON.stringify(h) : $e(h))
                          );
                        }
                      i = `{${s.join(', ')}}`;
                    }
                    return `${n}${r ? '(' + r + ')' : ''}[${i}]: ${e.replace(
                      wt,
                      '\n  '
                    )}`;
                  })('\n' + e.message, i, n, r)),
                  (e.ngTokenPath = i),
                  (e[Gn] = null),
                  e)
                );
              })(u, t, 'R3InjectorError', this.source);
            }
            throw u;
          } finally {
            At(s), on(i);
          }
        }
        resolveInjectorInitializers() {
          const t = on(this),
            n = At(void 0);
          try {
            const r = this.get(ql.multi, vt, qe.Self);
            for (const i of r) i();
          } finally {
            on(t), At(n);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const r of n.keys()) t.push($e(r));
          return `R3Injector[${t.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new q(205, !1);
        }
        processProvider(t) {
          let n = Oi((t = Ee(t))) ? t : Ee(t && t.provide);
          const r = (function rv(e) {
            return Zl(e) ? Xi(void 0, e.useValue) : Xi(xd(e), ka);
          })(t);
          if (Oi(t) || !0 !== t.multi) this.records.get(n);
          else {
            let i = this.records.get(n);
            i ||
              ((i = Xi(void 0, ka, !0)),
              (i.factory = () => or(i.multi)),
              this.records.set(n, i)),
              (n = t),
              i.multi.push(t);
          }
          this.records.set(n, r);
        }
        hydrate(t, n) {
          return (
            n.value === ka && ((n.value = tv), (n.value = n.factory())),
            'object' == typeof n.value &&
              n.value &&
              (function iv(e) {
                return (
                  null !== e &&
                  'object' == typeof e &&
                  'function' == typeof e.ngOnDestroy
                );
              })(n.value) &&
              this._ngOnDestroyHooks.add(n.value),
            n.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = Ee(t.providedIn);
          return 'string' == typeof n
            ? 'any' === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
      }
      function ec(e) {
        const t = st(e),
          n = null !== t ? t.factory : cr(e);
        if (null !== n) return n;
        if (e instanceof Cn) throw new q(204, !1);
        if (e instanceof Function)
          return (function nv(e) {
            const t = e.length;
            if (t > 0) throw (P(t, '?'), new q(204, !1));
            const n = (function cn(e) {
              const t = e && (e[Jt] || e[Ut]);
              if (t) {
                const n = (function Xt(e) {
                  if (e.hasOwnProperty('name')) return e.name;
                  const t = ('' + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? '' : t[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new q(204, !1);
      }
      function xd(e, t, n) {
        let r;
        if (Oi(e)) {
          const i = Ee(e);
          return cr(i) || ec(i);
        }
        if (Zl(e)) r = () => Ee(e.useValue);
        else if (
          (function Od(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...or(e.deps || []));
        else if (
          (function Td(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => Dt(Ee(e.useExisting));
        else {
          const i = Ee(e && (e.useClass || e.provide));
          if (
            !(function ov(e) {
              return !!e.deps;
            })(e)
          )
            return cr(i) || ec(i);
          r = () => new i(...or(e.deps));
        }
        return r;
      }
      function Xi(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function tc(e, t) {
        for (const n of e)
          Array.isArray(n) ? tc(n, t) : n && ae(n) ? tc(n.ɵproviders, t) : t(n);
      }
      class av {}
      class Fd {}
      class cv {
        resolveComponentFactory(t) {
          throw (function lv(e) {
            const t = Error(
              `No component factory found for ${$e(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let Ys = (() => {
        class e {}
        return (e.NULL = new cv()), e;
      })();
      function uv() {
        return Ki(Qe(), g());
      }
      function Ki(e, t) {
        return new Ws(Jn(e, t));
      }
      let Ws = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = uv), e;
      })();
      function dv(e) {
        return e instanceof Ws ? e.nativeElement : e;
      }
      class Nd {}
      let fv = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function hv() {
                const e = g(),
                  n = Un(Qe().index, e);
                return (tn(n) ? n : e)[11];
              })()),
            e
          );
        })(),
        pv = (() => {
          class e {}
          return (
            (e.ɵprov = Lt({
              token: e,
              providedIn: 'root',
              factory: () => null,
            })),
            e
          );
        })();
      class Ld {
        constructor(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t.split('.').slice(2).join('.'));
        }
      }
      const gv = new Ld('15.0.3'),
        nc = {};
      function oc(e) {
        return e.ngOriginalError;
      }
      class qs {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error('ERROR', t),
            n && this._console.error('ORIGINAL ERROR', n);
        }
        _findOriginalError(t) {
          let n = t && oc(t);
          for (; n && oc(n); ) n = oc(n);
          return n || null;
        }
      }
      function ii(e) {
        return e instanceof Function ? e() : e;
      }
      function $d(e, t, n) {
        let r = e.length;
        for (;;) {
          const i = e.indexOf(t, n);
          if (-1 === i) return i;
          if (0 === i || e.charCodeAt(i - 1) <= 32) {
            const s = t.length;
            if (i + s === r || e.charCodeAt(i + s) <= 32) return i;
          }
          n = i + 1;
        }
      }
      const Bd = 'ng-template';
      function Sv(e, t, n) {
        let r = 0;
        for (; r < e.length; ) {
          let i = e[r++];
          if (n && 'class' === i) {
            if (((i = e[r]), -1 !== $d(i.toLowerCase(), t, 0))) return !0;
          } else if (1 === i) {
            for (; r < e.length && 'string' == typeof (i = e[r++]); )
              if (i.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function Vd(e) {
        return 4 === e.type && e.value !== Bd;
      }
      function Mv(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Bd);
      }
      function Av(e, t, n) {
        let r = 4;
        const i = e.attrs || [],
          s = (function Rv(e) {
            for (let t = 0; t < e.length; t++) if (bs(e[t])) return t;
            return e.length;
          })(i);
        let u = !1;
        for (let h = 0; h < t.length; h++) {
          const y = t[h];
          if ('number' != typeof y) {
            if (!u)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ('' !== y && !Mv(e, y, n)) || ('' === y && 1 === t.length))
                ) {
                  if (Mo(r)) return !1;
                  u = !0;
                }
              } else {
                const I = 8 & r ? y : t[++h];
                if (8 & r && null !== e.attrs) {
                  if (!Sv(e.attrs, I, n)) {
                    if (Mo(r)) return !1;
                    u = !0;
                  }
                  continue;
                }
                const H = Tv(8 & r ? 'class' : y, i, Vd(e), n);
                if (-1 === H) {
                  if (Mo(r)) return !1;
                  u = !0;
                  continue;
                }
                if ('' !== I) {
                  let ne;
                  ne = H > s ? '' : i[H + 1].toLowerCase();
                  const _e = 8 & r ? ne : null;
                  if ((_e && -1 !== $d(_e, I, 0)) || (2 & r && I !== ne)) {
                    if (Mo(r)) return !1;
                    u = !0;
                  }
                }
              }
          } else {
            if (!u && !Mo(r) && !Mo(y)) return !1;
            if (u && Mo(y)) continue;
            (u = !1), (r = y | (1 & r));
          }
        }
        return Mo(r) || u;
      }
      function Mo(e) {
        return 0 == (1 & e);
      }
      function Tv(e, t, n, r) {
        if (null === t) return -1;
        let i = 0;
        if (r || !n) {
          let s = !1;
          for (; i < t.length; ) {
            const u = t[i];
            if (u === e) return i;
            if (3 === u || 6 === u) s = !0;
            else {
              if (1 === u || 2 === u) {
                let h = t[++i];
                for (; 'string' == typeof h; ) h = t[++i];
                continue;
              }
              if (4 === u) break;
              if (0 === u) {
                i += 4;
                continue;
              }
            }
            i += s ? 1 : 2;
          }
          return -1;
        }
        return (function xv(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ('number' == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function Hd(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (Av(e, t[r], n)) return !0;
        return !1;
      }
      function Fv(e, t) {
        e: for (let n = 0; n < t.length; n++) {
          const r = t[n];
          if (e.length === r.length) {
            for (let i = 0; i < e.length; i++) if (e[i] !== r[i]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function Ud(e, t) {
        return e ? ':not(' + t.trim() + ')' : t;
      }
      function Pv(e) {
        let t = e[0],
          n = 1,
          r = 2,
          i = '',
          s = !1;
        for (; n < e.length; ) {
          let u = e[n];
          if ('string' == typeof u)
            if (2 & r) {
              const h = e[++n];
              i += '[' + u + (h.length > 0 ? '="' + h + '"' : '') + ']';
            } else 8 & r ? (i += '.' + u) : 4 & r && (i += ' ' + u);
          else
            '' !== i && !Mo(u) && ((t += Ud(s, i)), (i = '')),
              (r = u),
              (s = s || !Mo(r));
          n++;
        }
        return '' !== i && (t += Ud(s, i)), t;
      }
      const Rt = {};
      function jd(e) {
        Gd(M(), g(), m() + e, !1);
      }
      function Gd(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[2])) {
            const s = e.preOrderCheckHooks;
            null !== s && zt(t, s, n);
          } else {
            const s = e.preOrderHooks;
            null !== s && xt(t, s, 0, n);
          }
        w(n);
      }
      function qd(e, t = null, n = null, r) {
        const i = Xd(e, t, n, r);
        return i.resolveInjectorInitializers(), i;
      }
      function Xd(e, t = null, n = null, r, i = new Set()) {
        const s = [n || vt, Sd(e)];
        return (
          (r = r || ('object' == typeof e ? void 0 : $e(e))),
          new Rd(s, t || $a(), r || null, i)
        );
      }
      let xi = (() => {
        class e {
          static create(n, r) {
            if (Array.isArray(n)) return qd({ name: '' }, r, n, '');
            {
              const i = n.name ?? '';
              return qd({ name: i }, n.parent, n.providers, i);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = tr),
          (e.NULL = new wd()),
          (e.ɵprov = Lt({
            token: e,
            providedIn: 'any',
            factory: () => Dt(bd),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function Ji(e, t = qe.Default) {
        const n = g();
        return null === n ? Dt(e, t) : _a(Qe(), n, Ee(e), t);
      }
      function nf() {
        throw new Error('invalid');
      }
      function rf(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const i = n[r],
              s = n[r + 1];
            if (-1 !== s) {
              const u = e.data[s];
              ti(i), u.contentQueries(2, t[s], s);
            }
          }
      }
      function Va(e, t, n, r, i, s, u, h, y, I, R) {
        const H = t.blueprint.slice();
        return (
          (H[0] = i),
          (H[2] = 76 | r),
          (null !== R || (e && 1024 & e[2])) && (H[2] |= 1024),
          lo(H),
          (H[3] = H[15] = e),
          (H[8] = n),
          (H[10] = u || (e && e[10])),
          (H[11] = h || (e && e[11])),
          (H[12] = y || (e && e[12]) || null),
          (H[9] = I || (e && e[9]) || null),
          (H[6] = s),
          (H[20] = (function Jg() {
            return Qg++;
          })()),
          (H[21] = R),
          (H[16] = 2 == t.type ? e[16] : H),
          H
        );
      }
      function es(e, t, n, r, i) {
        let s = e.data[t];
        if (null === s)
          (s = (function cc(e, t, n, r, i) {
            const s = Ct(),
              u = Qt(),
              y = (e.data[t] = (function sy(e, t, n, r, i, s) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  componentOffset: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: i,
                  attrs: s,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, u ? s : s && s.parent, n, t, r, i));
            return (
              null === e.firstChild && (e.firstChild = y),
              null !== s &&
                (u
                  ? null == s.child && null !== y.parent && (s.child = y)
                  : null === s.next && (s.next = y)),
              y
            );
          })(e, t, n, r, i)),
            (function ua() {
              return St.lFrame.inI18n;
            })() && (s.flags |= 32);
        else if (64 & s.type) {
          (s.type = n), (s.value = r), (s.attrs = i);
          const u = (function $t() {
            const e = St.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          s.injectorIndex = null === u ? -1 : u.injectorIndex;
        }
        return qt(s, !0), s;
      }
      function Xs(e, t, n, r) {
        if (0 === n) return -1;
        const i = t.length;
        for (let s = 0; s < n; s++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return i;
      }
      function uc(e, t, n) {
        Ii(t);
        try {
          const r = e.viewQuery;
          null !== r && Cc(1, r, n);
          const i = e.template;
          null !== i && sf(e, t, i, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && rf(e, t),
            e.staticViewQueries && Cc(2, e.viewQuery, n);
          const s = e.components;
          null !== s &&
            (function ry(e, t) {
              for (let n = 0; n < t.length; n++) wy(e, t[n]);
            })(t, s);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[2] &= -5), Bi();
        }
      }
      function Ha(e, t, n, r) {
        const i = t[2];
        if (128 != (128 & i)) {
          Ii(t);
          try {
            lo(t),
              (function Ci(e) {
                return (St.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== n && sf(e, t, n, 2, r);
            const u = 3 == (3 & i);
            if (u) {
              const I = e.preOrderCheckHooks;
              null !== I && zt(t, I, null);
            } else {
              const I = e.preOrderHooks;
              null !== I && xt(t, I, 0, null), En(t, 0);
            }
            if (
              ((function by(e) {
                for (let t = Ol(e); null !== t; t = Rl(t)) {
                  if (!t[2]) continue;
                  const n = t[9];
                  for (let r = 0; r < n.length; r++) {
                    const i = n[r],
                      s = i[3];
                    0 == (512 & i[2]) && nn(s, 1), (i[2] |= 512);
                  }
                }
              })(t),
              (function Ey(e) {
                for (let t = Ol(e); null !== t; t = Rl(t))
                  for (let n = 10; n < t.length; n++) {
                    const r = t[n],
                      i = r[1];
                    Rr(r) && Ha(i, r, i.template, r[8]);
                  }
              })(t),
              null !== e.contentQueries && rf(e, t),
              u)
            ) {
              const I = e.contentCheckHooks;
              null !== I && zt(t, I);
            } else {
              const I = e.contentHooks;
              null !== I && xt(t, I, 1), En(t, 1);
            }
            !(function ty(e, t) {
              const n = e.hostBindingOpCodes;
              if (null !== n)
                try {
                  for (let r = 0; r < n.length; r++) {
                    const i = n[r];
                    if (i < 0) w(~i);
                    else {
                      const s = i,
                        u = n[++r],
                        h = n[++r];
                      da(u, s), h(2, t[s]);
                    }
                  }
                } finally {
                  w(-1);
                }
            })(e, t);
            const h = e.components;
            null !== h &&
              (function ny(e, t) {
                for (let n = 0; n < t.length; n++) Iy(e, t[n]);
              })(t, h);
            const y = e.viewQuery;
            if ((null !== y && Cc(2, y, r), u)) {
              const I = e.viewCheckHooks;
              null !== I && zt(t, I);
            } else {
              const I = e.viewHooks;
              null !== I && xt(t, I, 2), En(t, 2);
            }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              (t[2] &= -41),
              512 & t[2] && ((t[2] &= -513), nn(t[3], -1));
          } finally {
            Bi();
          }
        }
      }
      function sf(e, t, n, r, i) {
        const s = m(),
          u = 2 & r;
        try {
          w(-1), u && t.length > 22 && Gd(e, t, 22, !1), n(r, i);
        } finally {
          w(s);
        }
      }
      function dc(e, t, n) {
        if (Ar(t)) {
          const i = t.directiveEnd;
          for (let s = t.directiveStart; s < i; s++) {
            const u = e.data[s];
            u.contentQueries && u.contentQueries(1, n[s], s);
          }
        }
      }
      function fc(e, t, n) {
        !a() ||
          ((function fy(e, t, n, r) {
            const i = n.directiveStart,
              s = n.directiveEnd;
            Tr(n) &&
              (function Dy(e, t, n) {
                const r = Jn(t, e),
                  i = af(n),
                  s = e[10],
                  u = Ua(
                    e,
                    Va(
                      e,
                      i,
                      null,
                      n.onPush ? 32 : 16,
                      r,
                      t,
                      s,
                      s.createRenderer(r, n),
                      null,
                      null,
                      null
                    )
                  );
                e[t.index] = u;
              })(t, n, e.data[i + n.componentOffset]),
              e.firstCreatePass || Gi(n, t),
              Ir(r, t);
            const u = n.initialInputs;
            for (let h = i; h < s; h++) {
              const y = e.data[h],
                I = Bo(t, e, h, n);
              Ir(I, t),
                null !== u && Cy(0, h - i, I, y, 0, u),
                Mn(y) && (Un(n.index, t)[8] = Bo(t, e, h, n));
            }
          })(e, t, n, Jn(n, t)),
          64 == (64 & n.flags) && hf(e, t, n));
      }
      function hc(e, t, n = Jn) {
        const r = t.localNames;
        if (null !== r) {
          let i = t.index + 1;
          for (let s = 0; s < r.length; s += 2) {
            const u = r[s + 1],
              h = -1 === u ? n(t, e) : e[u];
            e[i++] = h;
          }
        }
      }
      function af(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = pc(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : t;
      }
      function pc(e, t, n, r, i, s, u, h, y, I) {
        const R = 22 + r,
          H = R + i,
          ne = (function oy(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : Rt);
            return n;
          })(R, H),
          _e = 'function' == typeof I ? I() : I;
        return (ne[1] = {
          type: e,
          blueprint: ne,
          template: n,
          queries: null,
          viewQuery: h,
          declTNode: t,
          data: ne.slice().fill(null, R),
          bindingStartIndex: R,
          expandoStartIndex: H,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof s ? s() : s,
          pipeRegistry: 'function' == typeof u ? u() : u,
          firstChild: null,
          schemas: y,
          consts: _e,
          incompleteFirstPass: !1,
        });
      }
      function lf(e, t, n, r) {
        const i = gf(t);
        null === n
          ? i.push(r)
          : (i.push(n), e.firstCreatePass && mf(e).push(r, i.length - 1));
      }
      function cf(e, t, n, r) {
        for (let i in e)
          if (e.hasOwnProperty(i)) {
            n = null === n ? {} : n;
            const s = e[i];
            null === r
              ? uf(n, t, i, s)
              : r.hasOwnProperty(i) && uf(n, t, r[i], s);
          }
        return n;
      }
      function uf(e, t, n, r) {
        e.hasOwnProperty(n) ? e[n].push(t, r) : (e[n] = [t, r]);
      }
      function df(e, t) {
        const n = Un(t, e);
        16 & n[2] || (n[2] |= 32);
      }
      function gc(e, t, n, r) {
        let i = !1;
        if (a()) {
          const s = null === r ? null : { '': -1 },
            u = (function py(e, t) {
              const n = e.directiveRegistry;
              let r = null,
                i = null;
              if (n)
                for (let s = 0; s < n.length; s++) {
                  const u = n[s];
                  if (Hd(t, u.selectors, !1))
                    if ((r || (r = []), Mn(u)))
                      if (null !== u.findHostDirectiveDefs) {
                        const h = [];
                        (i = i || new Map()),
                          u.findHostDirectiveDefs(u, h, i),
                          r.unshift(...h, u),
                          mc(e, t, h.length);
                      } else r.unshift(u), mc(e, t, 0);
                    else
                      (i = i || new Map()),
                        u.findHostDirectiveDefs?.(u, r, i),
                        r.push(u);
                }
              return null === r ? null : [r, i];
            })(e, n);
          let h, y;
          null === u ? (h = y = null) : ([h, y] = u),
            null !== h && ((i = !0), ff(e, t, n, h, s, y)),
            s &&
              (function gy(e, t, n) {
                if (t) {
                  const r = (e.localNames = []);
                  for (let i = 0; i < t.length; i += 2) {
                    const s = n[t[i + 1]];
                    if (null == s) throw new q(-301, !1);
                    r.push(t[i], s);
                  }
                }
              })(n, r, s);
        }
        return (n.mergedAttrs = ni(n.mergedAttrs, n.attrs)), i;
      }
      function ff(e, t, n, r, i, s) {
        for (let I = 0; I < r.length; I++) di(Gi(n, t), e, r[I].type);
        !(function vy(e, t, n) {
          (e.flags |= 1),
            (e.directiveStart = t),
            (e.directiveEnd = t + n),
            (e.providerIndexes = t);
        })(n, e.data.length, r.length);
        for (let I = 0; I < r.length; I++) {
          const R = r[I];
          R.providersResolver && R.providersResolver(R);
        }
        let u = !1,
          h = !1,
          y = Xs(e, t, r.length, null);
        for (let I = 0; I < r.length; I++) {
          const R = r[I];
          (n.mergedAttrs = ni(n.mergedAttrs, R.hostAttrs)),
            yy(e, n, t, y, R),
            my(y, R, i),
            null !== R.contentQueries && (n.flags |= 4),
            (null !== R.hostBindings ||
              null !== R.hostAttrs ||
              0 !== R.hostVars) &&
              (n.flags |= 64);
          const H = R.type.prototype;
          !u &&
            (H.ngOnChanges || H.ngOnInit || H.ngDoCheck) &&
            ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
            (u = !0)),
            !h &&
              (H.ngOnChanges || H.ngDoCheck) &&
              ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                n.index
              ),
              (h = !0)),
            y++;
        }
        !(function ay(e, t, n) {
          const i = t.directiveEnd,
            s = e.data,
            u = t.attrs,
            h = [];
          let y = null,
            I = null;
          for (let R = t.directiveStart; R < i; R++) {
            const H = s[R],
              ne = n ? n.get(H) : null,
              He = ne ? ne.outputs : null;
            (y = cf(H.inputs, R, y, ne ? ne.inputs : null)),
              (I = cf(H.outputs, R, I, He));
            const Ze = null === y || null === u || Vd(t) ? null : _y(y, R, u);
            h.push(Ze);
          }
          null !== y &&
            (y.hasOwnProperty('class') && (t.flags |= 8),
            y.hasOwnProperty('style') && (t.flags |= 16)),
            (t.initialInputs = h),
            (t.inputs = y),
            (t.outputs = I);
        })(e, n, s);
      }
      function hf(e, t, n) {
        const r = n.directiveStart,
          i = n.directiveEnd,
          s = n.index,
          u = (function _i() {
            return St.lFrame.currentDirectiveIndex;
          })();
        try {
          w(s);
          for (let h = r; h < i; h++) {
            const y = e.data[h],
              I = t[h];
            Ei(h),
              (null !== y.hostBindings ||
                0 !== y.hostVars ||
                null !== y.hostAttrs) &&
                hy(y, I);
          }
        } finally {
          w(-1), Ei(u);
        }
      }
      function hy(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function mc(e, t, n) {
        (t.componentOffset = n),
          (e.components || (e.components = [])).push(t.index);
      }
      function my(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          Mn(t) && (n[''] = e);
        }
      }
      function yy(e, t, n, r, i) {
        e.data[r] = i;
        const s = i.factory || (i.factory = cr(i.type)),
          u = new hr(s, Mn(i), Ji);
        (e.blueprint[r] = u),
          (n[r] = u),
          (function uy(e, t, n, r, i) {
            const s = i.hostBindings;
            if (s) {
              let u = e.hostBindingOpCodes;
              null === u && (u = e.hostBindingOpCodes = []);
              const h = ~t.index;
              (function dy(e) {
                let t = e.length;
                for (; t > 0; ) {
                  const n = e[--t];
                  if ('number' == typeof n && n < 0) return n;
                }
                return 0;
              })(u) != h && u.push(h),
                u.push(n, r, s);
            }
          })(e, t, r, Xs(e, n, i.hostVars, Rt), i);
      }
      function Go(e, t, n, r, i, s) {
        const u = Jn(e, t);
        !(function vc(e, t, n, r, i, s, u) {
          if (null == s) e.removeAttribute(t, i, n);
          else {
            const h = null == u ? fe(s) : u(s, r || '', i);
            e.setAttribute(t, i, h, n);
          }
        })(t[11], u, s, e.value, n, r, i);
      }
      function Cy(e, t, n, r, i, s) {
        const u = s[t];
        if (null !== u) {
          const h = r.setInput;
          for (let y = 0; y < u.length; ) {
            const I = u[y++],
              R = u[y++],
              H = u[y++];
            null !== h ? r.setInput(n, H, I, R) : (n[R] = H);
          }
        }
      }
      function _y(e, t, n) {
        let r = null,
          i = 0;
        for (; i < n.length; ) {
          const s = n[i];
          if (0 !== s)
            if (5 !== s) {
              if ('number' == typeof s) break;
              if (e.hasOwnProperty(s)) {
                null === r && (r = []);
                const u = e[s];
                for (let h = 0; h < u.length; h += 2)
                  if (u[h] === t) {
                    r.push(s, u[h + 1], n[i + 1]);
                    break;
                  }
              }
              i += 2;
            } else i += 2;
          else i += 4;
        }
        return r;
      }
      function pf(e, t, n, r) {
        return [e, !0, !1, t, null, 0, r, n, null, null];
      }
      function Iy(e, t) {
        const n = Un(t, e);
        if (Rr(n)) {
          const r = n[1];
          48 & n[2] ? Ha(r, n, r.template, n[8]) : n[5] > 0 && yc(n);
        }
      }
      function yc(e) {
        for (let r = Ol(e); null !== r; r = Rl(r))
          for (let i = 10; i < r.length; i++) {
            const s = r[i];
            if (Rr(s))
              if (512 & s[2]) {
                const u = s[1];
                Ha(u, s, u.template, s[8]);
              } else s[5] > 0 && yc(s);
          }
        const n = e[1].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const i = Un(n[r], e);
            Rr(i) && i[5] > 0 && yc(i);
          }
      }
      function wy(e, t) {
        const n = Un(t, e),
          r = n[1];
        (function Sy(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          uc(r, n, n[8]);
      }
      function Ua(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function Dc(e) {
        for (; e; ) {
          e[2] |= 32;
          const t = Hs(e);
          if (kr(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function ja(e, t, n, r = !0) {
        const i = t[10];
        i.begin && i.begin();
        try {
          Ha(e, t, e.template, n);
        } catch (u) {
          throw (r && yf(t, u), u);
        } finally {
          i.end && i.end();
        }
      }
      function Cc(e, t, n) {
        ti(0), t(e, n);
      }
      function gf(e) {
        return e[7] || (e[7] = []);
      }
      function mf(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function yf(e, t) {
        const n = e[9],
          r = n ? n.get(qs, null) : null;
        r && r.handleError(t);
      }
      function _c(e, t, n, r, i) {
        for (let s = 0; s < n.length; ) {
          const u = n[s++],
            h = n[s++],
            y = t[u],
            I = e.data[u];
          null !== I.setInput ? I.setInput(y, i, r, h) : (y[h] = i);
        }
      }
      function Ga(e, t, n) {
        let r = n ? e.styles : null,
          i = n ? e.classes : null,
          s = 0;
        if (null !== t)
          for (let u = 0; u < t.length; u++) {
            const h = t[u];
            'number' == typeof h
              ? (s = h)
              : 1 == s
              ? (i = me(i, h))
              : 2 == s && (r = me(r, h + ': ' + t[++u] + ';'));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = i) : (e.classesWithoutHost = i);
      }
      function za(e, t, n, r, i = !1) {
        for (; null !== n; ) {
          const s = t[n.index];
          if ((null !== s && r.push(Dn(s)), Fn(s)))
            for (let h = 10; h < s.length; h++) {
              const y = s[h],
                I = y[1].firstChild;
              null !== I && za(y[1], y, I, r);
            }
          const u = n.type;
          if (8 & u) za(e, t, n.child, r);
          else if (32 & u) {
            const h = Tl(n, t);
            let y;
            for (; (y = h()); ) r.push(y);
          } else if (16 & u) {
            const h = sd(t, n);
            if (Array.isArray(h)) r.push(...h);
            else {
              const y = Hs(t[16]);
              za(y[1], y, h, r, !0);
            }
          }
          n = i ? n.projectionNext : n.next;
        }
        return r;
      }
      class Ks {
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            n = t[1];
          return za(n, t, n.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        set context(t) {
          this._lView[8] = t;
        }
        get destroyed() {
          return 128 == (128 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (Fn(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (Pl(t, r), A(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          Zu(this._lView[1], this._lView);
        }
        onDestroy(t) {
          lf(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          Dc(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -65;
        }
        reattach() {
          this._lView[2] |= 64;
        }
        detectChanges() {
          ja(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new q(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function pm(e, t) {
              Us(e, t, t[11], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new q(902, !1);
          this._appRef = t;
        }
      }
      class My extends Ks {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          const t = this._view;
          ja(t[1], t, t[8], !1);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class Df extends Ys {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = Tt(t);
          return new Zs(n, this.ngModule);
        }
      }
      function Cf(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class Ty {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          r = Vn(r);
          const i = this.injector.get(t, nc, r);
          return i !== nc || n === nc ? i : this.parentInjector.get(t, n, r);
        }
      }
      class Zs extends Fd {
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function Nv(e) {
              return e.map(Pv).join(',');
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        get inputs() {
          return Cf(this.componentDef.inputs);
        }
        get outputs() {
          return Cf(this.componentDef.outputs);
        }
        create(t, n, r, i) {
          let s = (i = i || this.ngModule) instanceof Ri ? i : i?.injector;
          s &&
            null !== this.componentDef.getStandaloneInjector &&
            (s = this.componentDef.getStandaloneInjector(s) || s);
          const u = s ? new Ty(t, s) : t,
            h = u.get(Nd, null);
          if (null === h) throw new q(407, !1);
          const y = u.get(pv, null),
            I = h.createRenderer(null, this.componentDef),
            R = this.componentDef.selectors[0][0] || 'div',
            H = r
              ? (function iy(e, t, n) {
                  return e.selectRootElement(t, n === ht.ShadowDom);
                })(I, r, this.componentDef.encapsulation)
              : Fl(
                  I,
                  R,
                  (function Ay(e) {
                    const t = e.toLowerCase();
                    return 'svg' === t ? 'svg' : 'math' === t ? 'math' : null;
                  })(R)
                ),
            ne = this.componentDef.onPush ? 288 : 272,
            _e = pc(0, null, null, 1, 0, null, null, null, null, null),
            He = Va(null, _e, null, ne, null, null, h, I, y, u, null);
          let Ze, it;
          Ii(He);
          try {
            const dt = this.componentDef;
            let _t,
              Xe = null;
            dt.findHostDirectiveDefs
              ? ((_t = []),
                (Xe = new Map()),
                dt.findHostDirectiveDefs(dt, _t, Xe),
                _t.push(dt))
              : (_t = [dt]);
            const Ot = (function Ry(e, t) {
                const n = e[1];
                return (e[22] = t), es(n, 22, 2, '#host', null);
              })(He, H),
              Nn = (function xy(e, t, n, r, i, s, u, h) {
                const y = i[1];
                !(function Fy(e, t, n, r) {
                  for (const i of e)
                    t.mergedAttrs = ni(t.mergedAttrs, i.hostAttrs);
                  null !== t.mergedAttrs &&
                    (Ga(t, t.mergedAttrs, !0), null !== n && cd(r, n, t));
                })(r, e, t, u);
                const I = s.createRenderer(t, n),
                  R = Va(
                    i,
                    af(n),
                    null,
                    n.onPush ? 32 : 16,
                    i[e.index],
                    e,
                    s,
                    I,
                    h || null,
                    null,
                    null
                  );
                return (
                  y.firstCreatePass && mc(y, e, r.length - 1),
                  Ua(i, R),
                  (i[e.index] = R)
                );
              })(Ot, H, dt, _t, He, h, I);
            (it = ao(_e, 22)),
              H &&
                (function Ny(e, t, n, r) {
                  if (r) Es(e, n, ['ng-version', gv.full]);
                  else {
                    const { attrs: i, classes: s } = (function Lv(e) {
                      const t = [],
                        n = [];
                      let r = 1,
                        i = 2;
                      for (; r < e.length; ) {
                        let s = e[r];
                        if ('string' == typeof s)
                          2 === i
                            ? '' !== s && t.push(s, e[++r])
                            : 8 === i && n.push(s);
                        else {
                          if (!Mo(i)) break;
                          i = s;
                        }
                        r++;
                      }
                      return { attrs: t, classes: n };
                    })(t.selectors[0]);
                    i && Es(e, n, i),
                      s && s.length > 0 && ld(e, n, s.join(' '));
                  }
                })(I, dt, H, r),
              void 0 !== n &&
                (function Ly(e, t, n) {
                  const r = (e.projection = []);
                  for (let i = 0; i < t.length; i++) {
                    const s = n[i];
                    r.push(null != s ? Array.from(s) : null);
                  }
                })(it, this.ngContentSelectors, n),
              (Ze = (function Py(e, t, n, r, i, s) {
                const u = Qe(),
                  h = i[1],
                  y = Jn(u, i);
                ff(h, i, u, n, null, r);
                for (let R = 0; R < n.length; R++)
                  Ir(Bo(i, h, u.directiveStart + R, u), i);
                hf(h, i, u), y && Ir(y, i);
                const I = Bo(i, h, u.directiveStart + u.componentOffset, u);
                if (((e[8] = i[8] = I), null !== s)) for (const R of s) R(I, t);
                return dc(h, u, e), I;
              })(Nn, dt, _t, Xe, He, [ky])),
              uc(_e, He, null);
          } finally {
            Bi();
          }
          return new Oy(this.componentType, Ze, Ki(it, He), He, it);
        }
      }
      class Oy extends av {
        constructor(t, n, r, i, s) {
          super(),
            (this.location = r),
            (this._rootLView = i),
            (this._tNode = s),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new My(i)),
            (this.componentType = t);
        }
        setInput(t, n) {
          const r = this._tNode.inputs;
          let i;
          if (null !== r && (i = r[t])) {
            const s = this._rootLView;
            _c(s[1], s, i, t, n), df(s, this._tNode.index);
          }
        }
        get injector() {
          return new Kr(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function ky() {
        const e = Qe();
        Bt(g()[1], e);
      }
      function Ec(e) {
        let t = (function _f(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let i;
          if (Mn(e)) i = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new q(903, !1);
            i = t.ɵdir;
          }
          if (i) {
            if (n) {
              r.push(i);
              const u = e;
              (u.inputs = bc(e.inputs)),
                (u.declaredInputs = bc(e.declaredInputs)),
                (u.outputs = bc(e.outputs));
              const h = i.hostBindings;
              h && Hy(e, h);
              const y = i.viewQuery,
                I = i.contentQueries;
              if (
                (y && By(e, y),
                I && Vy(e, I),
                ve(e.inputs, i.inputs),
                ve(e.declaredInputs, i.declaredInputs),
                ve(e.outputs, i.outputs),
                Mn(i) && i.data.animation)
              ) {
                const R = e.data;
                R.animation = (R.animation || []).concat(i.data.animation);
              }
            }
            const s = i.features;
            if (s)
              for (let u = 0; u < s.length; u++) {
                const h = s[u];
                h && h.ngInherit && h(e), h === Ec && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function $y(e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const i = e[r];
            (i.hostVars = t += i.hostVars),
              (i.hostAttrs = ni(i.hostAttrs, (n = ni(n, i.hostAttrs))));
          }
        })(r);
      }
      function bc(e) {
        return e === mt ? {} : e === vt ? [] : e;
      }
      function By(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, i) => {
              t(r, i), n(r, i);
            }
          : t;
      }
      function Vy(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, i, s) => {
              t(r, i, s), n(r, i, s);
            }
          : t;
      }
      function Hy(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, i) => {
              t(r, i), n(r, i);
            }
          : t;
      }
      let Ya = null;
      function Fi() {
        if (!Ya) {
          const e = pt.Symbol;
          if (e && e.iterator) Ya = e.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let n = 0; n < t.length; ++n) {
              const r = t[n];
              'entries' !== r &&
                'size' !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (Ya = r);
            }
          }
        }
        return Ya;
      }
      function Qs(e) {
        return (
          !!Ic(e) && (Array.isArray(e) || (!(e instanceof Map) && Fi() in e))
        );
      }
      function Ic(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function zo(e, t, n) {
        return (e[t] = n);
      }
      function wr(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function wc(e, t, n, r) {
        const i = g();
        return wr(i, co(), t) && (M(), Go(v(), i, e, t, n, r)), wc;
      }
      function Pf(e, t, n, r, i, s, u, h) {
        const y = g(),
          I = M(),
          R = e + 22,
          H = I.firstCreatePass
            ? (function Zy(e, t, n, r, i, s, u, h, y) {
                const I = t.consts,
                  R = es(t, e, 4, u || null, Vr(I, h));
                gc(t, n, R, Vr(I, y)), Bt(t, R);
                const H = (R.tViews = pc(
                  2,
                  R,
                  r,
                  i,
                  s,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  I
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, R),
                    (H.queries = t.queries.embeddedTView(R))),
                  R
                );
              })(R, I, y, t, n, r, i, s, u)
            : I.data[R];
        qt(H, !1);
        const ne = y[11].createComment('');
        xa(I, y, ne, H),
          Ir(ne, y),
          Ua(y, (y[R] = pf(ne, y, ne, H))),
          Or(H) && fc(I, y, H),
          null != u && hc(y, H, h);
      }
      function Nf(e) {
        return Wr(
          (function xr() {
            return St.lFrame.contextLView;
          })(),
          22 + e
        );
      }
      function Sc(e, t, n) {
        const r = g();
        return (
          wr(r, co(), t) &&
            (function Qr(e, t, n, r, i, s, u, h) {
              const y = Jn(t, n);
              let R,
                I = t.inputs;
              !h && null != I && (R = I[r])
                ? (_c(e, n, R, r, i), Tr(t) && df(n, t.index))
                : 3 & t.type &&
                  ((r = (function ly(e) {
                    return 'class' === e
                      ? 'className'
                      : 'for' === e
                      ? 'htmlFor'
                      : 'formaction' === e
                      ? 'formAction'
                      : 'innerHtml' === e
                      ? 'innerHTML'
                      : 'readonly' === e
                      ? 'readOnly'
                      : 'tabindex' === e
                      ? 'tabIndex'
                      : e;
                  })(r)),
                  (i = null != u ? u(i, t.value || '', r) : i),
                  s.setProperty(y, r, i));
            })(M(), v(), r, e, t, r[11], n, !1),
          Sc
        );
      }
      function Mc(e, t, n, r, i) {
        const u = i ? 'class' : 'style';
        _c(e, n, t.inputs[u], u, r);
      }
      function qa(e, t, n, r) {
        const i = g(),
          s = M(),
          u = 22 + e,
          h = i[11],
          y = (i[u] = Fl(
            h,
            t,
            (function gt() {
              return St.lFrame.currentNamespace;
            })()
          )),
          I = s.firstCreatePass
            ? (function Jy(e, t, n, r, i, s, u) {
                const h = t.consts,
                  I = es(t, e, 2, i, Vr(h, s));
                return (
                  gc(t, n, I, Vr(h, u)),
                  null !== I.attrs && Ga(I, I.attrs, !1),
                  null !== I.mergedAttrs && Ga(I, I.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, I),
                  I
                );
              })(u, s, i, 0, t, n, r)
            : s.data[u];
        return (
          qt(I, !0),
          cd(h, y, I),
          32 != (32 & I.flags) && xa(s, i, y, I),
          0 ===
            (function D() {
              return St.lFrame.elementDepthCount;
            })() && Ir(y, i),
          (function x() {
            St.lFrame.elementDepthCount++;
          })(),
          Or(I) && (fc(s, i, I), dc(s, I, i)),
          null !== r && hc(i, I),
          qa
        );
      }
      function Xa() {
        let e = Qe();
        Qt() ? zn() : ((e = e.parent), qt(e, !1));
        const t = e;
        !(function Oe() {
          St.lFrame.elementDepthCount--;
        })();
        const n = M();
        return (
          n.firstCreatePass && (Bt(n, e), Ar(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function Vi(e) {
              return 0 != (8 & e.flags);
            })(t) &&
            Mc(n, t, g(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function ha(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            Mc(n, t, g(), t.stylesWithoutHost, !1),
          Xa
        );
      }
      function Ac(e, t, n, r) {
        return qa(e, t, n, r), Xa(), Ac;
      }
      function Ka(e, t, n) {
        const r = g(),
          i = M(),
          s = e + 22,
          u = i.firstCreatePass
            ? (function eD(e, t, n, r, i) {
                const s = t.consts,
                  u = Vr(s, r),
                  h = es(t, e, 8, 'ng-container', u);
                return (
                  null !== u && Ga(h, u, !0),
                  gc(t, n, h, Vr(s, i)),
                  null !== t.queries && t.queries.elementStart(t, h),
                  h
                );
              })(s, i, r, t, n)
            : i.data[s];
        qt(u, !0);
        const h = (r[s] = r[11].createComment(''));
        return (
          xa(i, r, h, u),
          Ir(h, r),
          Or(u) && (fc(i, r, u), dc(i, u, r)),
          null != n && hc(r, u),
          Ka
        );
      }
      function Za() {
        let e = Qe();
        const t = M();
        return (
          Qt() ? zn() : ((e = e.parent), qt(e, !1)),
          t.firstCreatePass && (Bt(t, e), Ar(e) && t.queries.elementEnd(e)),
          Za
        );
      }
      function Tc(e, t, n) {
        return Ka(e, t, n), Za(), Tc;
      }
      function Lf() {
        return g();
      }
      function Oc(e) {
        return !!e && 'function' == typeof e.then;
      }
      function kf(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      const $f = kf;
      function Rc(e, t, n, r) {
        const i = g(),
          s = M(),
          u = Qe();
        return (
          (function Vf(e, t, n, r, i, s, u) {
            const h = Or(r),
              I = e.firstCreatePass && mf(e),
              R = t[8],
              H = gf(t);
            let ne = !0;
            if (3 & r.type || u) {
              const Ze = Jn(r, t),
                it = u ? u(Ze) : Ze,
                dt = H.length,
                _t = u ? (Ot) => u(Dn(Ot[r.index])) : r.index;
              let Xe = null;
              if (
                (!u &&
                  h &&
                  (Xe = (function tD(e, t, n, r) {
                    const i = e.cleanup;
                    if (null != i)
                      for (let s = 0; s < i.length - 1; s += 2) {
                        const u = i[s];
                        if (u === n && i[s + 1] === r) {
                          const h = t[7],
                            y = i[s + 2];
                          return h.length > y ? h[y] : null;
                        }
                        'string' == typeof u && (s += 2);
                      }
                    return null;
                  })(e, t, i, r.index)),
                null !== Xe)
              )
                ((Xe.__ngLastListenerFn__ || Xe).__ngNextListenerFn__ = s),
                  (Xe.__ngLastListenerFn__ = s),
                  (ne = !1);
              else {
                s = Uf(r, t, R, s, !1);
                const Ot = n.listen(it, i, s);
                H.push(s, Ot), I && I.push(i, _t, dt, dt + 1);
              }
            } else s = Uf(r, t, R, s, !1);
            const _e = r.outputs;
            let He;
            if (ne && null !== _e && (He = _e[i])) {
              const Ze = He.length;
              if (Ze)
                for (let it = 0; it < Ze; it += 2) {
                  const Nn = t[He[it]][He[it + 1]].subscribe(s),
                    Kn = H.length;
                  H.push(s, Nn), I && I.push(i, r.index, Kn, -(Kn + 1));
                }
            }
          })(s, i, i[11], u, e, t, r),
          Rc
        );
      }
      function Hf(e, t, n, r) {
        try {
          return !1 !== n(r);
        } catch (i) {
          return yf(e, i), !1;
        }
      }
      function Uf(e, t, n, r, i) {
        return function s(u) {
          if (u === Function) return r;
          Dc(e.componentOffset > -1 ? Un(e.index, t) : t);
          let y = Hf(t, 0, r, u),
            I = s.__ngNextListenerFn__;
          for (; I; ) (y = Hf(t, 0, I, u) && y), (I = I.__ngNextListenerFn__);
          return i && !1 === y && (u.preventDefault(), (u.returnValue = !1)), y;
        };
      }
      function jf(e = 1) {
        return (function _s(e) {
          return (St.lFrame.contextLView = (function fa(e, t) {
            for (; e > 0; ) (t = t[15]), e--;
            return t;
          })(e, St.lFrame.contextLView))[8];
        })(e);
      }
      function nD(e, t) {
        let n = null;
        const r = (function Ov(e) {
          const t = e.attrs;
          if (null != t) {
            const n = t.indexOf(5);
            if (0 == (1 & n)) return t[n + 1];
          }
          return null;
        })(e);
        for (let i = 0; i < t.length; i++) {
          const s = t[i];
          if ('*' !== s) {
            if (null === r ? Hd(e, s, !0) : Fv(r, s)) return i;
          } else n = i;
        }
        return n;
      }
      function Gf(e) {
        const t = g()[16][6];
        if (!t.projection) {
          const r = (t.projection = P(e ? e.length : 1, null)),
            i = r.slice();
          let s = t.child;
          for (; null !== s; ) {
            const u = e ? nD(s, e) : 0;
            null !== u &&
              (i[u] ? (i[u].projectionNext = s) : (r[u] = s), (i[u] = s)),
              (s = s.next);
          }
        }
      }
      function zf(e, t = 0, n) {
        const r = g(),
          i = M(),
          s = es(i, 22 + e, 16, null, n || null);
        null === s.projection && (s.projection = t),
          zn(),
          32 != (32 & s.flags) &&
            (function Em(e, t, n) {
              ad(t[11], 0, t, n, Qu(e, n, t), nd(n.parent || t[6], n, t));
            })(i, r, s);
      }
      function Qa(e, t) {
        return (e << 17) | (t << 2);
      }
      function vi(e) {
        return (e >> 17) & 32767;
      }
      function Fc(e) {
        return 2 | e;
      }
      function Ni(e) {
        return (131068 & e) >> 2;
      }
      function Pc(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function Nc(e) {
        return 1 | e;
      }
      function th(e, t, n, r, i) {
        const s = e[n + 1],
          u = null === t;
        let h = r ? vi(s) : Ni(s),
          y = !1;
        for (; 0 !== h && (!1 === y || u); ) {
          const R = e[h + 1];
          lD(e[h], t) && ((y = !0), (e[h + 1] = r ? Nc(R) : Fc(R))),
            (h = r ? vi(R) : Ni(R));
        }
        y && (e[n + 1] = r ? Fc(s) : Nc(s));
      }
      function lD(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || 'string' != typeof t) && Pr(e, t) >= 0)
        );
      }
      function Lc(e, t) {
        return (
          (function Ao(e, t, n, r) {
            const i = g(),
              s = M(),
              u = (function uo(e) {
                const t = St.lFrame,
                  n = t.bindingIndex;
                return (t.bindingIndex = t.bindingIndex + e), n;
              })(2);
            s.firstUpdatePass &&
              (function uh(e, t, n, r) {
                const i = e.data;
                if (null === i[n + 1]) {
                  const s = i[m()],
                    u = (function ch(e, t) {
                      return t >= e.expandoStartIndex;
                    })(e, n);
                  (function ph(e, t) {
                    return 0 != (e.flags & (t ? 8 : 16));
                  })(s, r) &&
                    null === t &&
                    !u &&
                    (t = !1),
                    (t = (function vD(e, t, n, r) {
                      const i = (function bi(e) {
                        const t = St.lFrame.currentDirectiveIndex;
                        return -1 === t ? null : e[t];
                      })(e);
                      let s = r ? t.residualClasses : t.residualStyles;
                      if (null === i)
                        0 === (r ? t.classBindings : t.styleBindings) &&
                          ((n = ea((n = kc(null, e, t, n, r)), t.attrs, r)),
                          (s = null));
                      else {
                        const u = t.directiveStylingLast;
                        if (-1 === u || e[u] !== i)
                          if (((n = kc(i, e, t, n, r)), null === s)) {
                            let y = (function yD(e, t, n) {
                              const r = n ? t.classBindings : t.styleBindings;
                              if (0 !== Ni(r)) return e[vi(r)];
                            })(e, t, r);
                            void 0 !== y &&
                              Array.isArray(y) &&
                              ((y = kc(null, e, t, y[1], r)),
                              (y = ea(y, t.attrs, r)),
                              (function DD(e, t, n, r) {
                                e[vi(n ? t.classBindings : t.styleBindings)] =
                                  r;
                              })(e, t, r, y));
                          } else
                            s = (function CD(e, t, n) {
                              let r;
                              const i = t.directiveEnd;
                              for (
                                let s = 1 + t.directiveStylingLast;
                                s < i;
                                s++
                              )
                                r = ea(r, e[s].hostAttrs, n);
                              return ea(r, t.attrs, n);
                            })(e, t, r);
                      }
                      return (
                        void 0 !== s &&
                          (r
                            ? (t.residualClasses = s)
                            : (t.residualStyles = s)),
                        n
                      );
                    })(i, s, t, r)),
                    (function sD(e, t, n, r, i, s) {
                      let u = s ? t.classBindings : t.styleBindings,
                        h = vi(u),
                        y = Ni(u);
                      e[r] = n;
                      let R,
                        I = !1;
                      if (Array.isArray(n)) {
                        const H = n;
                        (R = H[1]), (null === R || Pr(H, R) > 0) && (I = !0);
                      } else R = n;
                      if (i)
                        if (0 !== y) {
                          const ne = vi(e[h + 1]);
                          (e[r + 1] = Qa(ne, h)),
                            0 !== ne && (e[ne + 1] = Pc(e[ne + 1], r)),
                            (e[h + 1] = (function oD(e, t) {
                              return (131071 & e) | (t << 17);
                            })(e[h + 1], r));
                        } else
                          (e[r + 1] = Qa(h, 0)),
                            0 !== h && (e[h + 1] = Pc(e[h + 1], r)),
                            (h = r);
                      else
                        (e[r + 1] = Qa(y, 0)),
                          0 === h ? (h = r) : (e[y + 1] = Pc(e[y + 1], r)),
                          (y = r);
                      I && (e[r + 1] = Fc(e[r + 1])),
                        th(e, R, r, !0),
                        th(e, R, r, !1),
                        (function aD(e, t, n, r, i) {
                          const s = i ? e.residualClasses : e.residualStyles;
                          null != s &&
                            'string' == typeof t &&
                            Pr(s, t) >= 0 &&
                            (n[r + 1] = Nc(n[r + 1]));
                        })(t, R, e, r, s),
                        (u = Qa(h, y)),
                        s ? (t.classBindings = u) : (t.styleBindings = u);
                    })(i, s, t, n, u, r);
                }
              })(s, e, u, r),
              t !== Rt &&
                wr(i, u, t) &&
                (function fh(e, t, n, r, i, s, u, h) {
                  if (!(3 & t.type)) return;
                  const y = e.data,
                    I = y[h + 1],
                    R = (function iD(e) {
                      return 1 == (1 & e);
                    })(I)
                      ? hh(y, t, n, i, Ni(I), u)
                      : void 0;
                  Ja(R) ||
                    (Ja(s) ||
                      ((function rD(e) {
                        return 2 == (2 & e);
                      })(I) &&
                        (s = hh(y, null, n, i, h, u))),
                    (function Im(e, t, n, r, i) {
                      if (t) i ? e.addClass(n, r) : e.removeClass(n, r);
                      else {
                        let s = -1 === r.indexOf('-') ? void 0 : jo.DashCase;
                        null == i
                          ? e.removeStyle(n, r, s)
                          : ('string' == typeof i &&
                              i.endsWith('!important') &&
                              ((i = i.slice(0, -10)), (s |= jo.Important)),
                            e.setStyle(n, r, i, s));
                      }
                    })(r, u, Lo(m(), n), i, s));
                })(
                  s,
                  s.data[m()],
                  i,
                  i[11],
                  e,
                  (i[u + 1] = (function bD(e, t) {
                    return (
                      null == e ||
                        ('string' == typeof t
                          ? (e += t)
                          : 'object' == typeof e && (e = $e(mi(e)))),
                      e
                    );
                  })(t, n)),
                  r,
                  u
                );
          })(e, t, null, !0),
          Lc
        );
      }
      function kc(e, t, n, r, i) {
        let s = null;
        const u = n.directiveEnd;
        let h = n.directiveStylingLast;
        for (
          -1 === h ? (h = n.directiveStart) : h++;
          h < u && ((s = t[h]), (r = ea(r, s.hostAttrs, i)), s !== e);

        )
          h++;
        return null !== e && (n.directiveStylingLast = h), r;
      }
      function ea(e, t, n) {
        const r = n ? 1 : 2;
        let i = -1;
        if (null !== t)
          for (let s = 0; s < t.length; s++) {
            const u = t[s];
            'number' == typeof u
              ? (i = u)
              : i === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ['', e]),
                Et(e, u, !!n || t[++s]));
          }
        return void 0 === e ? null : e;
      }
      function hh(e, t, n, r, i, s) {
        const u = null === t;
        let h;
        for (; i > 0; ) {
          const y = e[i],
            I = Array.isArray(y),
            R = I ? y[1] : y,
            H = null === R;
          let ne = n[i + 1];
          ne === Rt && (ne = H ? vt : void 0);
          let _e = H ? Pn(ne, r) : R === r ? ne : void 0;
          if ((I && !Ja(_e) && (_e = Pn(y, r)), Ja(_e) && ((h = _e), u)))
            return h;
          const He = e[i + 1];
          i = u ? vi(He) : Ni(He);
        }
        if (null !== t) {
          let y = s ? t.residualClasses : t.residualStyles;
          null != y && (h = Pn(y, r));
        }
        return h;
      }
      function Ja(e) {
        return void 0 !== e;
      }
      function gh(e, t = '') {
        const n = g(),
          r = M(),
          i = e + 22,
          s = r.firstCreatePass ? es(r, i, 1, t, null) : r.data[i],
          u = (n[i] = (function xl(e, t) {
            return e.createText(t);
          })(n[11], t));
        xa(r, n, u, s), qt(s, !1);
      }
      function $c(e) {
        return Bc('', e, ''), $c;
      }
      function Bc(e, t, n) {
        const r = g(),
          i = (function ns(e, t, n, r) {
            return wr(e, co(), n) ? t + fe(n) + r : Rt;
          })(r, e, t, n);
        return (
          i !== Rt &&
            (function si(e, t, n) {
              const r = Lo(t, e);
              !(function Xu(e, t, n) {
                e.setValue(t, n);
              })(e[11], r, n);
            })(r, m(), i),
          Bc
        );
      }
      const Li = void 0;
      var jD = [
        'en',
        [['a', 'p'], ['AM', 'PM'], Li],
        [['AM', 'PM'], Li, Li],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        ],
        Li,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        ],
        Li,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini'],
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', Li, "{1} 'at' {0}", Li],
        [
          '.',
          ',',
          ';',
          '%',
          '+',
          '-',
          'E',
          '\xd7',
          '\u2030',
          '\u221e',
          'NaN',
          ':',
        ],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        'USD',
        '$',
        'US Dollar',
        {},
        'ltr',
        function UD(e) {
          const n = Math.floor(Math.abs(e)),
            r = e.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === n && 0 === r ? 1 : 5;
        },
      ];
      let ds = {};
      function Vc(e) {
        const t = (function GD(e) {
          return e.toLowerCase().replace(/_/g, '-');
        })(e);
        let n = Lh(t);
        if (n) return n;
        const r = t.split('-')[0];
        if (((n = Lh(r)), n)) return n;
        if ('en' === r) return jD;
        throw new q(701, !1);
      }
      function Nh(e) {
        return Vc(e)[It.PluralCase];
      }
      function Lh(e) {
        return (
          e in ds ||
            (ds[e] =
              pt.ng &&
              pt.ng.common &&
              pt.ng.common.locales &&
              pt.ng.common.locales[e]),
          ds[e]
        );
      }
      var It = (() => (
        ((It = It || {})[(It.LocaleId = 0)] = 'LocaleId'),
        (It[(It.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
        (It[(It.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
        (It[(It.DaysFormat = 3)] = 'DaysFormat'),
        (It[(It.DaysStandalone = 4)] = 'DaysStandalone'),
        (It[(It.MonthsFormat = 5)] = 'MonthsFormat'),
        (It[(It.MonthsStandalone = 6)] = 'MonthsStandalone'),
        (It[(It.Eras = 7)] = 'Eras'),
        (It[(It.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
        (It[(It.WeekendRange = 9)] = 'WeekendRange'),
        (It[(It.DateFormat = 10)] = 'DateFormat'),
        (It[(It.TimeFormat = 11)] = 'TimeFormat'),
        (It[(It.DateTimeFormat = 12)] = 'DateTimeFormat'),
        (It[(It.NumberSymbols = 13)] = 'NumberSymbols'),
        (It[(It.NumberFormats = 14)] = 'NumberFormats'),
        (It[(It.CurrencyCode = 15)] = 'CurrencyCode'),
        (It[(It.CurrencySymbol = 16)] = 'CurrencySymbol'),
        (It[(It.CurrencyName = 17)] = 'CurrencyName'),
        (It[(It.Currencies = 18)] = 'Currencies'),
        (It[(It.Directionality = 19)] = 'Directionality'),
        (It[(It.PluralCase = 20)] = 'PluralCase'),
        (It[(It.ExtraData = 21)] = 'ExtraData'),
        It
      ))();
      const fs = 'en-US';
      let kh = fs;
      function jc(e, t, n, r, i) {
        if (((e = Ee(e)), Array.isArray(e)))
          for (let s = 0; s < e.length; s++) jc(e[s], t, n, r, i);
        else {
          const s = M(),
            u = g();
          let h = Oi(e) ? e : Ee(e.provide),
            y = xd(e);
          const I = Qe(),
            R = 1048575 & I.providerIndexes,
            H = I.directiveStart,
            ne = I.providerIndexes >> 20;
          if (Oi(e) || !e.multi) {
            const _e = new hr(y, i, Ji),
              He = zc(h, t, i ? R : R + ne, H);
            -1 === He
              ? (di(Gi(I, u), s, h),
                Gc(s, e, t.length),
                t.push(h),
                I.directiveStart++,
                I.directiveEnd++,
                i && (I.providerIndexes += 1048576),
                n.push(_e),
                u.push(_e))
              : ((n[He] = _e), (u[He] = _e));
          } else {
            const _e = zc(h, t, R + ne, H),
              He = zc(h, t, R, R + ne),
              Ze = _e >= 0 && n[_e],
              it = He >= 0 && n[He];
            if ((i && !it) || (!i && !Ze)) {
              di(Gi(I, u), s, h);
              const dt = (function U0(e, t, n, r, i) {
                const s = new hr(e, n, Ji);
                return (
                  (s.multi = []),
                  (s.index = t),
                  (s.componentProviders = 0),
                  lp(s, i, r && !n),
                  s
                );
              })(i ? H0 : V0, n.length, i, r, y);
              !i && it && (n[He].providerFactory = dt),
                Gc(s, e, t.length, 0),
                t.push(h),
                I.directiveStart++,
                I.directiveEnd++,
                i && (I.providerIndexes += 1048576),
                n.push(dt),
                u.push(dt);
            } else Gc(s, e, _e > -1 ? _e : He, lp(n[i ? He : _e], y, !i && r));
            !i && r && it && n[He].componentProviders++;
          }
        }
      }
      function Gc(e, t, n, r) {
        const i = Oi(t),
          s = (function ev(e) {
            return !!e.useClass;
          })(t);
        if (i || s) {
          const y = (s ? Ee(t.useClass) : t).prototype.ngOnDestroy;
          if (y) {
            const I = e.destroyHooks || (e.destroyHooks = []);
            if (!i && t.multi) {
              const R = I.indexOf(n);
              -1 === R ? I.push(n, [r, y]) : I[R + 1].push(r, y);
            } else I.push(n, y);
          }
        }
      }
      function lp(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function zc(e, t, n, r) {
        for (let i = n; i < r; i++) if (t[i] === e) return i;
        return -1;
      }
      function V0(e, t, n, r) {
        return Yc(this.multi, []);
      }
      function H0(e, t, n, r) {
        const i = this.multi;
        let s;
        if (this.providerFactory) {
          const u = this.providerFactory.componentProviders,
            h = Bo(n, n[1], this.providerFactory.index, r);
          (s = h.slice(0, u)), Yc(i, s);
          for (let y = u; y < h.length; y++) s.push(h[y]);
        } else (s = []), Yc(i, s);
        return s;
      }
      function Yc(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function cp(e, t = []) {
        return (n) => {
          n.providersResolver = (r, i) =>
            (function B0(e, t, n) {
              const r = M();
              if (r.firstCreatePass) {
                const i = Mn(e);
                jc(n, r.data, r.blueprint, i, !0),
                  jc(t, r.data, r.blueprint, i, !1);
              }
            })(r, i ? i(e) : e, t);
        };
      }
      class hs {}
      class up {}
      function j0(e, t) {
        return new dp(e, t ?? null);
      }
      class dp extends hs {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new Df(this));
          const r = T(t);
          (this._bootstrapComponents = ii(r.bootstrap)),
            (this._r3Injector = Xd(
              t,
              n,
              [
                { provide: hs, useValue: this },
                { provide: Ys, useValue: this.componentFactoryResolver },
              ],
              $e(t),
              new Set(['environment'])
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(t));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((n) => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class Wc extends up {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new dp(this.moduleType, t);
        }
      }
      class G0 extends hs {
        constructor(t, n, r) {
          super(),
            (this.componentFactoryResolver = new Df(this)),
            (this.instance = null);
          const i = new Rd(
            [
              ...t,
              { provide: hs, useValue: this },
              { provide: Ys, useValue: this.componentFactoryResolver },
            ],
            n || $a(),
            r,
            new Set(['environment'])
          );
          (this.injector = i), i.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(t) {
          this.injector.onDestroy(t);
        }
      }
      function qc(e, t, n = null) {
        return new G0(e, t, n).injector;
      }
      let z0 = (() => {
        class e {
          constructor(n) {
            (this._injector = n), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n.id)) {
              const r = Md(0, n.type),
                i =
                  r.length > 0
                    ? qc([r], this._injector, `Standalone[${n.type.name}]`)
                    : null;
              this.cachedInjectors.set(n.id, i);
            }
            return this.cachedInjectors.get(n.id);
          }
          ngOnDestroy() {
            try {
              for (const n of this.cachedInjectors.values())
                null !== n && n.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
        }
        return (
          (e.ɵprov = Lt({
            token: e,
            providedIn: 'environment',
            factory: () => new e(Dt(Ri)),
          })),
          e
        );
      })();
      function fp(e) {
        e.getStandaloneInjector = (t) =>
          t.get(z0).getOrCreateStandaloneInjector(e);
      }
      function Dp(e, t, n) {
        const r = fn() + e,
          i = g();
        return i[r] === Rt
          ? zo(i, r, n ? t.call(n) : t())
          : (function Js(e, t) {
              return e[t];
            })(i, r);
      }
      function Cp(e, t, n, r, i, s) {
        const u = t + n;
        return wr(e, u, i)
          ? zo(e, u + 1, s ? r.call(s, i) : r(i))
          : (function sa(e, t) {
              const n = e[t];
              return n === Rt ? void 0 : n;
            })(e, u + 1);
      }
      function wp(e, t) {
        const n = M();
        let r;
        const i = e + 22;
        n.firstCreatePass
          ? ((r = (function cC(e, t) {
              if (t)
                for (let n = t.length - 1; n >= 0; n--) {
                  const r = t[n];
                  if (e === r.name) return r;
                }
            })(t, n.pipeRegistry)),
            (n.data[i] = r),
            r.onDestroy &&
              (n.destroyHooks || (n.destroyHooks = [])).push(i, r.onDestroy))
          : (r = n.data[i]);
        const s = r.factory || (r.factory = cr(r.type)),
          u = At(Ji);
        try {
          const h = ji(!1),
            y = s();
          return (
            ji(h),
            (function Qy(e, t, n, r) {
              n >= e.data.length &&
                ((e.data[n] = null), (e.blueprint[n] = null)),
                (t[n] = r);
            })(n, g(), i, y),
            y
          );
        } finally {
          At(u);
        }
      }
      function Sp(e, t, n) {
        const r = e + 22,
          i = g(),
          s = Wr(i, r);
        return (function aa(e, t) {
          return e[1].data[t].pure;
        })(i, r)
          ? Cp(i, fn(), t, s.transform, n, s)
          : s.transform(n);
      }
      function Kc(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const qo = class pC extends o.x {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, r) {
          let i = t,
            s = n || (() => null),
            u = r;
          if (t && 'object' == typeof t) {
            const y = t;
            (i = y.next?.bind(y)),
              (s = y.error?.bind(y)),
              (u = y.complete?.bind(y));
          }
          this.__isAsync && ((s = Kc(s)), i && (i = Kc(i)), u && (u = Kc(u)));
          const h = super.subscribe({ next: i, error: s, complete: u });
          return t instanceof N.w0 && t.add(h), h;
        }
      };
      function gC() {
        return this._results[Fi()]();
      }
      class Zc {
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = Fi(),
            r = Zc.prototype;
          r[n] || (r[n] = gC);
        }
        get changes() {
          return this._changes || (this._changes = new qo());
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          const r = this;
          r.dirty = !1;
          const i = (function l(e) {
            return e.flat(Number.POSITIVE_INFINITY);
          })(t);
          (this._changesDetected = !(function f(e, t, n) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let i = e[r],
                s = t[r];
              if ((n && ((i = n(i)), (s = n(s))), s !== i)) return !1;
            }
            return !0;
          })(r._results, i, n)) &&
            ((r._results = i),
            (r.length = i.length),
            (r.last = i[this.length - 1]),
            (r.first = i[0]));
        }
        notifyOnChanges() {
          this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      let la = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = yC), e;
      })();
      const mC = la,
        vC = class extends mC {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          createEmbeddedView(t, n) {
            const r = this._declarationTContainer.tViews,
              i = Va(
                this._declarationLView,
                r,
                t,
                16,
                null,
                r.declTNode,
                null,
                null,
                null,
                null,
                n || null
              );
            i[17] = this._declarationLView[this._declarationTContainer.index];
            const u = this._declarationLView[19];
            return (
              null !== u && (i[19] = u.createEmbeddedView(r)),
              uc(r, i, t),
              new Ks(i)
            );
          }
        };
      function yC() {
        return ol(Qe(), g());
      }
      function ol(e, t) {
        return 4 & e.type ? new vC(t, e, Ki(e, t)) : null;
      }
      let il = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = DC), e;
      })();
      function DC() {
        return Tp(Qe(), g());
      }
      const CC = il,
        Mp = class extends CC {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return Ki(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Kr(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = Os(this._hostTNode, this._hostLView);
            if (Ss(t)) {
              const n = Ui(t, this._hostLView),
                r = Hi(t);
              return new Kr(n[1].data[r + 8], n);
            }
            return new Kr(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = Ap(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, n, r) {
            let i, s;
            'number' == typeof r
              ? (i = r)
              : null != r && ((i = r.index), (s = r.injector));
            const u = t.createEmbeddedView(n || {}, s);
            return this.insert(u, i), u;
          }
          createComponent(t, n, r, i, s) {
            const u =
              t &&
              !(function d(e) {
                return 'function' == typeof e;
              })(t);
            let h;
            if (u) h = n;
            else {
              const H = n || {};
              (h = H.index),
                (r = H.injector),
                (i = H.projectableNodes),
                (s = H.environmentInjector || H.ngModuleRef);
            }
            const y = u ? t : new Zs(Tt(t)),
              I = r || this.parentInjector;
            if (!s && null == y.ngModule) {
              const ne = (u ? I : this.parentInjector).get(Ri, null);
              ne && (s = ne);
            }
            const R = y.create(I, i, void 0, s);
            return this.insert(R.hostView, h), R;
          }
          insert(t, n) {
            const r = t._lView,
              i = r[1];
            if (
              (function Jo(e) {
                return Fn(e[3]);
              })(r)
            ) {
              const R = this.indexOf(t);
              if (-1 !== R) this.detach(R);
              else {
                const H = r[3],
                  ne = new Mp(H, H[6], H[3]);
                ne.detach(ne.indexOf(t));
              }
            }
            const s = this._adjustIndex(n),
              u = this._lContainer;
            !(function mm(e, t, n, r) {
              const i = 10 + r,
                s = n.length;
              r > 0 && (n[i - 1][4] = t),
                r < s - 10
                  ? ((t[4] = n[i]), E(n, 10 + r, t))
                  : (n.push(t), (t[4] = null)),
                (t[3] = n);
              const u = t[17];
              null !== u &&
                n !== u &&
                (function vm(e, t) {
                  const n = e[9];
                  t[16] !== t[3][3][16] && (e[2] = !0),
                    null === n ? (e[9] = [t]) : n.push(t);
                })(u, t);
              const h = t[19];
              null !== h && h.insertView(e), (t[2] |= 64);
            })(i, r, u, s);
            const h = kl(s, u),
              y = r[11],
              I = Ra(y, u[7]);
            return (
              null !== I &&
                (function hm(e, t, n, r, i, s) {
                  (r[0] = i), (r[6] = t), Us(e, r, n, 1, i, s);
                })(i, u[6], y, r, I, h),
              t.attachToViewContainerRef(),
              E(Qc(u), s, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = Ap(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = Pl(this._lContainer, n);
            r && (A(Qc(this._lContainer), n), Zu(r[1], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = Pl(this._lContainer, n);
            return r && null != A(Qc(this._lContainer), n) ? new Ks(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function Ap(e) {
        return e[8];
      }
      function Qc(e) {
        return e[8] || (e[8] = []);
      }
      function Tp(e, t) {
        let n;
        const r = t[e.index];
        if (Fn(r)) n = r;
        else {
          let i;
          if (8 & e.type) i = Dn(r);
          else {
            const s = t[11];
            i = s.createComment('');
            const u = Jn(e, t);
            Ai(
              s,
              Ra(s, u),
              i,
              (function _m(e, t) {
                return e.nextSibling(t);
              })(s, u),
              !1
            );
          }
          (t[e.index] = n = pf(r, t, i, e)), Ua(t, n);
        }
        return new Mp(n, e, t);
      }
      class Jc {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new Jc(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class eu {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const r =
                null !== t.contentQueries ? t.contentQueries[0] : n.length,
              i = [];
            for (let s = 0; s < r; s++) {
              const u = n.getByIndex(s);
              i.push(this.queries[u.indexInDeclarationView].clone());
            }
            return new eu(i);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++)
            null !== $p(t, n).matches && this.queries[n].setDirty();
        }
      }
      class Op {
        constructor(t, n, r = null) {
          (this.predicate = t), (this.flags = n), (this.read = r);
        }
      }
      class tu {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let r = 0; r < this.length; r++) {
            const i = null !== n ? n.length : 0,
              s = this.getByIndex(r).embeddedTView(t, i);
            s &&
              ((s.indexInDeclarationView = r),
              null !== n ? n.push(s) : (n = [s]));
          }
          return null !== n ? new tu(n) : null;
        }
        template(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class nu {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, n),
              new nu(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const n = this._declarationNodeIndex;
            let r = t.parent;
            for (; null !== r && 8 & r.type && r.index !== n; ) r = r.parent;
            return n === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let i = 0; i < r.length; i++) {
              const s = r[i];
              this.matchTNodeWithReadOption(t, n, _C(n, s)),
                this.matchTNodeWithReadOption(t, n, fi(n, t, s, !1, !1));
            }
          else
            r === la
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, fi(n, t, r, !1, !1));
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const i = this.metadata.read;
            if (null !== i)
              if (i === Ws || i === il || (i === la && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const s = fi(n, t, i, !1, !1);
                null !== s && this.addMatch(n.index, s);
              }
            else this.addMatch(n.index, r);
          }
        }
        addMatch(t, n) {
          null === this.matches
            ? (this.matches = [t, n])
            : this.matches.push(t, n);
        }
      }
      function _C(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function bC(e, t, n, r) {
        return -1 === n
          ? (function EC(e, t) {
              return 11 & e.type ? Ki(e, t) : 4 & e.type ? ol(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function IC(e, t, n) {
              return n === Ws
                ? Ki(t, e)
                : n === la
                ? ol(t, e)
                : n === il
                ? Tp(t, e)
                : void 0;
            })(e, t, r)
          : Bo(e, e[1], n, t);
      }
      function Rp(e, t, n, r) {
        const i = t[19].queries[r];
        if (null === i.matches) {
          const s = e.data,
            u = n.matches,
            h = [];
          for (let y = 0; y < u.length; y += 2) {
            const I = u[y];
            h.push(I < 0 ? null : bC(t, s[I], u[y + 1], n.metadata.read));
          }
          i.matches = h;
        }
        return i.matches;
      }
      function ru(e, t, n, r) {
        const i = e.queries.getByIndex(n),
          s = i.matches;
        if (null !== s) {
          const u = Rp(e, t, i, n);
          for (let h = 0; h < s.length; h += 2) {
            const y = s[h];
            if (y > 0) r.push(u[h / 2]);
            else {
              const I = s[h + 1],
                R = t[-y];
              for (let H = 10; H < R.length; H++) {
                const ne = R[H];
                ne[17] === ne[3] && ru(ne[1], ne, I, r);
              }
              if (null !== R[9]) {
                const H = R[9];
                for (let ne = 0; ne < H.length; ne++) {
                  const _e = H[ne];
                  ru(_e[1], _e, I, r);
                }
              }
            }
          }
        }
        return r;
      }
      function xp(e) {
        const t = g(),
          n = M(),
          r = ei();
        ti(r + 1);
        const i = $p(n, r);
        if (
          e.dirty &&
          (function qr(e) {
            return 4 == (4 & e[2]);
          })(t) ===
            (2 == (2 & i.metadata.flags))
        ) {
          if (null === i.matches) e.reset([]);
          else {
            const s = i.crossesNgTemplate ? ru(n, t, r, []) : Rp(n, t, i, r);
            e.reset(s, dv), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Fp(e, t, n) {
        const r = M();
        r.firstCreatePass &&
          (kp(r, new Op(e, t, n), -1),
          2 == (2 & t) && (r.staticViewQueries = !0)),
          Lp(r, g(), t);
      }
      function Pp(e, t, n, r) {
        const i = M();
        if (i.firstCreatePass) {
          const s = Qe();
          kp(i, new Op(t, n, r), s.index),
            (function SC(e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(i, e),
            2 == (2 & n) && (i.staticContentQueries = !0);
        }
        Lp(i, g(), n);
      }
      function Np() {
        return (function wC(e, t) {
          return e[19].queries[t].queryList;
        })(g(), ei());
      }
      function Lp(e, t, n) {
        const r = new Zc(4 == (4 & n));
        lf(e, t, r, r.destroy),
          null === t[19] && (t[19] = new eu()),
          t[19].queries.push(new Jc(r));
      }
      function kp(e, t, n) {
        null === e.queries && (e.queries = new tu()),
          e.queries.track(new nu(t, n));
      }
      function $p(e, t) {
        return e.queries.getByIndex(t);
      }
      function Bp(e, t) {
        return ol(e, t);
      }
      function al(...e) {}
      const og = new Cn('Application Initializer');
      let ll = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = al),
              (this.reject = al),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((r, i) => {
                (this.resolve = r), (this.reject = i);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              r = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let i = 0; i < this.appInits.length; i++) {
                const s = this.appInits[i]();
                if (Oc(s)) n.push(s);
                else if ($f(s)) {
                  const u = new Promise((h, y) => {
                    s.subscribe({ complete: h, error: y });
                  });
                  n.push(u);
                }
              }
            Promise.all(n)
              .then(() => {
                r();
              })
              .catch((i) => {
                this.reject(i);
              }),
              0 === n.length && r(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(Dt(og, 8));
          }),
          (e.ɵprov = Lt({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const ig = new Cn('AppId', {
        providedIn: 'root',
        factory: function sg() {
          return `${lu()}${lu()}${lu()}`;
        },
      });
      function lu() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const ag = new Cn('Platform Initializer'),
        YC = new Cn('Platform ID', {
          providedIn: 'platform',
          factory: () => 'unknown',
        }),
        lg = new Cn('appBootstrapListener');
      let WC = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Lt({ token: e, factory: e.ɵfac, providedIn: 'platform' })),
          e
        );
      })();
      const cl = new Cn('LocaleId', {
          providedIn: 'root',
          factory: () =>
            An(cl, qe.Optional | qe.SkipSelf) ||
            (function qC() {
              return (typeof $localize < 'u' && $localize.locale) || fs;
            })(),
        }),
        XC = new Cn('DefaultCurrencyCode', {
          providedIn: 'root',
          factory: () => 'USD',
        });
      class KC {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let ZC = (() => {
        class e {
          compileModuleSync(n) {
            return new Wc(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const r = this.compileModuleSync(n),
              s = ii(T(n).declarations).reduce((u, h) => {
                const y = Tt(h);
                return y && u.push(new Zs(y)), u;
              }, []);
            return new KC(r, s);
          }
          compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Lt({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const e_ = (() => Promise.resolve(0))();
      function cu(e) {
        typeof Zone > 'u'
          ? e_.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      class po {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new qo(!1)),
            (this.onMicrotaskEmpty = new qo(!1)),
            (this.onStable = new qo(!1)),
            (this.onError = new qo(!1)),
            typeof Zone > 'u')
          )
            throw new q(908, !1);
          Zone.assertZonePatched();
          const i = this;
          (i._nesting = 0),
            (i._outer = i._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (i._inner = i._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (i._inner = i._inner.fork(Zone.longStackTraceZoneSpec)),
            (i.shouldCoalesceEventChangeDetection = !r && n),
            (i.shouldCoalesceRunChangeDetection = r),
            (i.lastRequestAnimationFrameId = -1),
            (i.nativeRequestAnimationFrame = (function t_() {
              let e = pt.requestAnimationFrame,
                t = pt.cancelAnimationFrame;
              if (typeof Zone < 'u' && e && t) {
                const n = e[Zone.__symbol__('OriginalDelegate')];
                n && (e = n);
                const r = t[Zone.__symbol__('OriginalDelegate')];
                r && (t = r);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function o_(e) {
              const t = () => {
                !(function r_(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(pt, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            'fakeTopEventTask',
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                du(e),
                                (e.isCheckStableRunning = !0),
                                uu(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    du(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, i, s, u, h) => {
                  try {
                    return dg(e), n.invokeTask(i, s, u, h);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      'eventTask' === s.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      fg(e);
                  }
                },
                onInvoke: (n, r, i, s, u, h, y) => {
                  try {
                    return dg(e), n.invoke(i, s, u, h, y);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), fg(e);
                  }
                },
                onHasTask: (n, r, i, s) => {
                  n.hasTask(i, s),
                    r === i &&
                      ('microTask' == s.change
                        ? ((e._hasPendingMicrotasks = s.microTask),
                          du(e),
                          uu(e))
                        : 'macroTask' == s.change &&
                          (e.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (n, r, i, s) => (
                  n.handleError(i, s),
                  e.runOutsideAngular(() => e.onError.emit(s)),
                  !1
                ),
              });
            })(i);
        }
        static isInAngularZone() {
          return typeof Zone < 'u' && !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!po.isInAngularZone()) throw new q(909, !1);
        }
        static assertNotInAngularZone() {
          if (po.isInAngularZone()) throw new q(909, !1);
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, i) {
          const s = this._inner,
            u = s.scheduleEventTask('NgZoneEvent: ' + i, t, n_, al, al);
          try {
            return s.runTask(u, n, r);
          } finally {
            s.cancelTask(u);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const n_ = {};
      function uu(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function du(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function dg(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function fg(e) {
        e._nesting--, uu(e);
      }
      class i_ {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new qo()),
            (this.onMicrotaskEmpty = new qo()),
            (this.onStable = new qo()),
            (this.onError = new qo());
        }
        run(t, n, r) {
          return t.apply(n, r);
        }
        runGuarded(t, n, r) {
          return t.apply(n, r);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, r, i) {
          return t.apply(n, r);
        }
      }
      const hg = new Cn(''),
        pg = new Cn('');
      let fu,
        s_ = (() => {
          class e {
            constructor(n, r, i) {
              (this._ngZone = n),
                (this.registry = r),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                fu ||
                  ((function a_(e) {
                    fu = e;
                  })(i),
                  i.addToWindow(r)),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone =
                    typeof Zone > 'u'
                      ? null
                      : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      po.assertNotInAngularZone(),
                        cu(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                cu(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) =>
                    !r.updateCb ||
                    !r.updateCb(n) ||
                    (clearTimeout(r.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, r, i) {
              let s = -1;
              r &&
                r > 0 &&
                (s = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (u) => u.timeoutId !== s
                  )),
                    n(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: n, timeoutId: s, updateCb: i });
            }
            whenStable(n, r, i) {
              if (i && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(n, r, i), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            registerApplication(n) {
              this.registry.registerApplication(n, this);
            }
            unregisterApplication(n) {
              this.registry.unregisterApplication(n);
            }
            findProviders(n, r, i) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(Dt(po), Dt(gg), Dt(pg));
            }),
            (e.ɵprov = Lt({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        gg = (() => {
          class e {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(n, r) {
              this._applications.set(n, r);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, r = !0) {
              return fu?.findTestabilityInTree(this, n, r) ?? null;
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = Lt({
              token: e,
              factory: e.ɵfac,
              providedIn: 'platform',
            })),
            e
          );
        })(),
        yi = null;
      const hu = new Cn('PlatformDestroyListeners');
      class u_ {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function h_(e) {
        const { rootComponent: t, appProviders: n, platformProviders: r } = e,
          i = (function f_(e = []) {
            if (yi) return yi;
            const t = (function yg(e = [], t) {
              return xi.create({
                name: t,
                providers: [
                  { provide: Ql, useValue: 'platform' },
                  { provide: hu, useValue: new Set([() => (yi = null)]) },
                  ...e,
                ],
              });
            })(e);
            return (
              (yi = t),
              (function vg(e) {
                const t = e.get(ag, null);
                t && t.forEach((n) => n());
              })(t),
              t
            );
          })(r),
          s = (function _g(e, t) {
            let n;
            return (
              (n =
                'noop' === e
                  ? new i_()
                  : ('zone.js' === e ? void 0 : e) || new po(t)),
              n
            );
          })(
            'zone.js',
            (function Cg(e) {
              return {
                enableLongStackTrace: !1,
                shouldCoalesceEventChangeDetection:
                  !(!e || !e.ngZoneEventCoalescing) || !1,
                shouldCoalesceRunChangeDetection:
                  !(!e || !e.ngZoneRunCoalescing) || !1,
              };
            })()
          );
        return s.run(() => {
          const h = qc(
              [{ provide: po, useValue: s }, ...(n || [])],
              i,
              'Environment Injector'
            ),
            y = h.get(qs, null);
          let I;
          s.runOutsideAngular(() => {
            I = s.onError.subscribe({
              next: (ne) => {
                y.handleError(ne);
              },
            });
          });
          const R = () => h.destroy(),
            H = i.get(hu);
          return (
            H.add(R),
            h.onDestroy(() => {
              I.unsubscribe(), H.delete(R);
            }),
            (function Eg(e, t, n) {
              try {
                const r = n();
                return Oc(r)
                  ? r.catch((i) => {
                      throw (t.runOutsideAngular(() => e.handleError(i)), i);
                    })
                  : r;
              } catch (r) {
                throw (t.runOutsideAngular(() => e.handleError(r)), r);
              }
            })(y, s, () => {
              const ne = h.get(ll);
              return (
                ne.runInitializers(),
                ne.donePromise.then(() => {
                  !(function $h(e) {
                    bt(e, 'Expected localeId to be defined'),
                      'string' == typeof e &&
                        (kh = e.toLowerCase().replace(/_/g, '-'));
                  })(h.get(cl, fs) || fs);
                  const He = h.get(ul);
                  return void 0 !== t && He.bootstrap(t), He;
                })
              );
            })
          );
        });
      }
      let ul = (() => {
        class e {
          constructor(n, r, i) {
            (this._zone = n),
              (this._injector = r),
              (this._exceptionHandler = i),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const s = new j.y((h) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    h.next(this._stable), h.complete();
                  });
              }),
              u = new j.y((h) => {
                let y;
                this._zone.runOutsideAngular(() => {
                  y = this._zone.onStable.subscribe(() => {
                    po.assertNotInAngularZone(),
                      cu(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), h.next(!0));
                      });
                  });
                });
                const I = this._zone.onUnstable.subscribe(() => {
                  po.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        h.next(!1);
                      }));
                });
                return () => {
                  y.unsubscribe(), I.unsubscribe();
                };
              });
            this.isStable = (function Ae(...e) {
              const t = (0, re.yG)(e),
                n = (0, re._6)(e, 1 / 0),
                r = e;
              return r.length
                ? 1 === r.length
                  ? (0, ge.Xf)(r[0])
                  : (0, z.J)(n)((0, Fe.D)(r, t))
                : Ne.E;
            })(
              s,
              u.pipe(
                (function we(e = {}) {
                  const {
                    connector: t = () => new o.x(),
                    resetOnError: n = !0,
                    resetOnComplete: r = !0,
                    resetOnRefCountZero: i = !0,
                  } = e;
                  return (s) => {
                    let u,
                      h,
                      y,
                      I = 0,
                      R = !1,
                      H = !1;
                    const ne = () => {
                        h?.unsubscribe(), (h = void 0);
                      },
                      _e = () => {
                        ne(), (u = y = void 0), (R = H = !1);
                      },
                      He = () => {
                        const Ze = u;
                        _e(), Ze?.unsubscribe();
                      };
                    return (0, De.e)((Ze, it) => {
                      I++, !H && !R && ne();
                      const dt = (y = y ?? t());
                      it.add(() => {
                        I--, 0 === I && !H && !R && (h = ue(He, i));
                      }),
                        dt.subscribe(it),
                        !u &&
                          I > 0 &&
                          ((u = new Pe.Hp({
                            next: (_t) => dt.next(_t),
                            error: (_t) => {
                              (H = !0), ne(), (h = ue(_e, n, _t)), dt.error(_t);
                            },
                            complete: () => {
                              (R = !0), ne(), (h = ue(_e, r)), dt.complete();
                            },
                          })),
                          (0, ge.Xf)(Ze).subscribe(u));
                    })(s);
                  };
                })()
              )
            );
          }
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          bootstrap(n, r) {
            const i = n instanceof Fd;
            if (!this._injector.get(ll).done)
              throw (!i && Rn(n), new q(405, false));
            let u;
            (u = i ? n : this._injector.get(Ys).resolveComponentFactory(n)),
              this.componentTypes.push(u.componentType);
            const h = (function c_(e) {
                return e.isBoundToModule;
              })(u)
                ? void 0
                : this._injector.get(hs),
              I = u.create(xi.NULL, [], r || u.selector, h),
              R = I.location.nativeElement,
              H = I.injector.get(hg, null);
            return (
              H?.registerApplication(R),
              I.onDestroy(() => {
                this.detachView(I.hostView),
                  dl(this.components, I),
                  H?.unregisterApplication(R);
              }),
              this._loadComponent(I),
              I
            );
          }
          tick() {
            if (this._runningTick) throw new q(101, !1);
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            dl(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n),
              this._injector
                .get(lg, [])
                .concat(this._bootstrapListeners)
                .forEach((i) => i(n));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach((n) => n()),
                  this._views.slice().forEach((n) => n.destroy()),
                  this._onMicrotaskEmptySubscription.unsubscribe();
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(n) {
            return (
              this._destroyListeners.push(n),
              () => dl(this._destroyListeners, n)
            );
          }
          destroy() {
            if (this._destroyed) throw new q(406, !1);
            const n = this._injector;
            n.destroy && !n.destroyed && n.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(Dt(po), Dt(Ri), Dt(qs));
          }),
          (e.ɵprov = Lt({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      function dl(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      function m_() {}
      let v_ = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = y_), e;
      })();
      function y_(e) {
        return (function D_(e, t, n) {
          if (Tr(e) && !n) {
            const r = Un(e.index, t);
            return new Ks(r, r);
          }
          return 47 & e.type ? new Ks(t[16], t) : null;
        })(Qe(), g(), 16 == (16 & e));
      }
      class Ag {
        constructor() {}
        supports(t) {
          return Qs(t);
        }
        create(t) {
          return new w_(t);
        }
      }
      const I_ = (e, t) => t;
      class w_ {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || I_);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            i = 0,
            s = null;
          for (; n || r; ) {
            const u = !r || (n && n.currentIndex < Og(r, i, s)) ? n : r,
              h = Og(u, i, s),
              y = u.currentIndex;
            if (u === r) i--, (r = r._nextRemoved);
            else if (((n = n._next), null == u.previousIndex)) i++;
            else {
              s || (s = []);
              const I = h - i,
                R = y - i;
              if (I != R) {
                for (let ne = 0; ne < I; ne++) {
                  const _e = ne < s.length ? s[ne] : (s[ne] = 0),
                    He = _e + ne;
                  R <= He && He < I && (s[ne] = _e + 1);
                }
                s[u.previousIndex] = R - I;
              }
            }
            h !== y && t(u, h, y);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !Qs(t))) throw new q(900, !1);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let i,
            s,
            u,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let h = 0; h < this.length; h++)
              (s = t[h]),
                (u = this._trackByFn(h, s)),
                null !== n && Object.is(n.trackById, u)
                  ? (r && (n = this._verifyReinsertion(n, s, u, h)),
                    Object.is(n.item, s) || this._addIdentityChange(n, s))
                  : ((n = this._mismatch(n, s, u, h)), (r = !0)),
                (n = n._next);
          } else
            (i = 0),
              (function qy(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Fi()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, (h) => {
                (u = this._trackByFn(i, h)),
                  null !== n && Object.is(n.trackById, u)
                    ? (r && (n = this._verifyReinsertion(n, h, u, i)),
                      Object.is(n.item, h) || this._addIdentityChange(n, h))
                    : ((n = this._mismatch(n, h, u, i)), (r = !0)),
                  (n = n._next),
                  i++;
              }),
              (this.length = i);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, i) {
          let s;
          return (
            null === t ? (s = this._itTail) : ((s = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, s, i))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(r, i))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, s, i))
              : (t = this._addAfter(new S_(n, r), s, i)),
            t
          );
        }
        _verifyReinsertion(t, n, r, i) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(r, null);
          return (
            null !== s
              ? (t = this._reinsertAfter(s, t._prev, i))
              : t.currentIndex != i &&
                ((t.currentIndex = i), this._addToMoves(t, i)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const i = t._prevRemoved,
            s = t._nextRemoved;
          return (
            null === i ? (this._removalsHead = s) : (i._nextRemoved = s),
            null === s ? (this._removalsTail = i) : (s._prevRemoved = i),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const i = null === n ? this._itHead : n._next;
          return (
            (t._next = i),
            (t._prev = n),
            null === i ? (this._itTail = t) : (i._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new Tg()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return (
            null === n ? (this._itHead = r) : (n._next = r),
            null === r ? (this._itTail = n) : (r._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new Tg()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class S_ {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class M_ {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if (
              (null === n || n <= r.currentIndex) &&
              Object.is(r.trackById, t)
            )
              return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class Tg {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new M_()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const i = this.map.get(t);
          return i ? i.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Og(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let i = 0;
        return n && r < n.length && (i = n[r]), r + t + i;
      }
      class Rg {
        constructor() {}
        supports(t) {
          return t instanceof Map || Ic(t);
        }
        create() {
          return new A_();
        }
      }
      class A_ {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || Ic(t))) throw new q(900, !1);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (r, i) => {
              if (n && n.key === i)
                this._maybeAddToChanges(n, r),
                  (this._appendAfter = n),
                  (n = n._next);
              else {
                const s = this._getOrCreateRecordForKey(i, r);
                n = this._insertBeforeOrAppend(n, s);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let r = n; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const r = t._prev;
            return (
              (n._next = t),
              (n._prev = r),
              (t._prev = n),
              r && (r._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const i = this._records.get(t);
            this._maybeAddToChanges(i, n);
            const s = i._prev,
              u = i._next;
            return (
              s && (s._next = u),
              u && (u._prev = s),
              (i._next = null),
              (i._prev = null),
              i
            );
          }
          const r = new T_(t);
          return (
            this._records.set(t, r),
            (r.currentValue = n),
            this._addToAdditions(r),
            r
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = n),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map
            ? t.forEach(n)
            : Object.keys(t).forEach((r) => n(t[r], r));
        }
      }
      class T_ {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function xg() {
        return new Du([new Ag()]);
      }
      let Du = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (null != r) {
              const i = r.factories.slice();
              n = n.concat(i);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || xg()),
              deps: [[e, new ks(), new Ls()]],
            };
          }
          find(n) {
            const r = this.factories.find((i) => i.supports(n));
            if (null != r) return r;
            throw new q(901, !1);
          }
        }
        return (e.ɵprov = Lt({ token: e, providedIn: 'root', factory: xg })), e;
      })();
      function Fg() {
        return new Cu([new Rg()]);
      }
      let Cu = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (r) {
              const i = r.factories.slice();
              n = n.concat(i);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || Fg()),
              deps: [[e, new ks(), new Ls()]],
            };
          }
          find(n) {
            const r = this.factories.find((i) => i.supports(n));
            if (r) return r;
            throw new q(901, !1);
          }
        }
        return (e.ɵprov = Lt({ token: e, providedIn: 'root', factory: Fg })), e;
      })();
      function x_(e) {
        return 'boolean' == typeof e ? e : null != e && 'false' !== e;
      }
    },
    433: (at, ke, S) => {
      'use strict';
      S.d(ke, {
        qu: () => Vr,
        u: () => to,
        sg: () => Or,
        u5: () => ao,
        JU: () => ve,
        a5: () => cn,
        JJ: () => $n,
        JL: () => Ut,
        UX: () => Wr,
        kI: () => B,
        _Y: () => go,
      });
      var o = S(8256),
        N = S(6895),
        j = S(2076),
        z = S(9751),
        ge = S(4742),
        Ne = S(8421),
        re = S(7669),
        Fe = S(5403),
        Ae = S(3268),
        Pe = S(1810),
        we = S(4004);
      let ue = (() => {
          class b {
            constructor(D, x) {
              (this._renderer = D),
                (this._elementRef = x),
                (this.onChange = (Oe) => {}),
                (this.onTouched = () => {});
            }
            setProperty(D, x) {
              this._renderer.setProperty(this._elementRef.nativeElement, D, x);
            }
            registerOnTouched(D) {
              this.onTouched = D;
            }
            registerOnChange(D) {
              this.onChange = D;
            }
            setDisabledState(D) {
              this.setProperty('disabled', D);
            }
          }
          return (
            (b.ɵfac = function (D) {
              return new (D || b)(o.Y36(o.Qsj), o.Y36(o.SBq));
            }),
            (b.ɵdir = o.lG2({ type: b })),
            b
          );
        })(),
        te = (() => {
          class b extends ue {}
          return (
            (b.ɵfac = (function () {
              let C;
              return function (x) {
                return (C || (C = o.n5z(b)))(x || b);
              };
            })()),
            (b.ɵdir = o.lG2({ type: b, features: [o.qOj] })),
            b
          );
        })();
      const ve = new o.OlP('NgValueAccessor'),
        ee = { provide: ve, useExisting: (0, o.Gpc)(() => ye), multi: !0 },
        Ee = new o.OlP('CompositionEventMode');
      let ye = (() => {
        class b extends ue {
          constructor(D, x, Oe) {
            super(D, x),
              (this._compositionMode = Oe),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function Ve() {
                  const b = (0, N.q)() ? (0, N.q)().getUserAgent() : '';
                  return /android (\d+)/.test(b.toLowerCase());
                })());
          }
          writeValue(D) {
            this.setProperty('value', D ?? '');
          }
          _handleInput(D) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(D);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(D) {
            (this._composing = !1), this._compositionMode && this.onChange(D);
          }
        }
        return (
          (b.ɵfac = function (D) {
            return new (D || b)(o.Y36(o.Qsj), o.Y36(o.SBq), o.Y36(Ee, 8));
          }),
          (b.ɵdir = o.lG2({
            type: b,
            selectors: [
              ['input', 'formControlName', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControlName', ''],
              ['input', 'formControl', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControl', ''],
              ['input', 'ngModel', '', 3, 'type', 'checkbox'],
              ['textarea', 'ngModel', ''],
              ['', 'ngDefaultControl', ''],
            ],
            hostBindings: function (D, x) {
              1 & D &&
                o.NdJ('input', function (a) {
                  return x._handleInput(a.target.value);
                })('blur', function () {
                  return x.onTouched();
                })('compositionstart', function () {
                  return x._compositionStart();
                })('compositionend', function (a) {
                  return x._compositionEnd(a.target.value);
                });
            },
            features: [o._Bn([ee]), o.qOj],
          })),
          b
        );
      })();
      function Te(b) {
        return (
          null == b ||
          (('string' == typeof b || Array.isArray(b)) && 0 === b.length)
        );
      }
      function de(b) {
        return null != b && 'number' == typeof b.length;
      }
      const q = new o.OlP('NgValidators'),
        le = new o.OlP('NgAsyncValidators'),
        fe =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class B {
        static min(C) {
          return (function V(b) {
            return (C) => {
              if (Te(C.value) || Te(b)) return null;
              const D = parseFloat(C.value);
              return !isNaN(D) && D < b
                ? { min: { min: b, actual: C.value } }
                : null;
            };
          })(C);
        }
        static max(C) {
          return (function W(b) {
            return (C) => {
              if (Te(C.value) || Te(b)) return null;
              const D = parseFloat(C.value);
              return !isNaN(D) && D > b
                ? { max: { max: b, actual: C.value } }
                : null;
            };
          })(C);
        }
        static required(C) {
          return (function G(b) {
            return Te(b.value) ? { required: !0 } : null;
          })(C);
        }
        static requiredTrue(C) {
          return (function Se(b) {
            return !0 === b.value ? null : { required: !0 };
          })(C);
        }
        static email(C) {
          return (function pe(b) {
            return Te(b.value) || fe.test(b.value) ? null : { email: !0 };
          })(C);
        }
        static minLength(C) {
          return (function We(b) {
            return (C) =>
              Te(C.value) || !de(C.value)
                ? null
                : C.value.length < b
                ? {
                    minlength: {
                      requiredLength: b,
                      actualLength: C.value.length,
                    },
                  }
                : null;
          })(C);
        }
        static maxLength(C) {
          return (function se(b) {
            return (C) =>
              de(C.value) && C.value.length > b
                ? {
                    maxlength: {
                      requiredLength: b,
                      actualLength: C.value.length,
                    },
                  }
                : null;
          })(C);
        }
        static pattern(C) {
          return (function k(b) {
            if (!b) return F;
            let C, D;
            return (
              'string' == typeof b
                ? ((D = ''),
                  '^' !== b.charAt(0) && (D += '^'),
                  (D += b),
                  '$' !== b.charAt(b.length - 1) && (D += '$'),
                  (C = new RegExp(D)))
                : ((D = b.toString()), (C = b)),
              (x) => {
                if (Te(x.value)) return null;
                const Oe = x.value;
                return C.test(Oe)
                  ? null
                  : { pattern: { requiredPattern: D, actualValue: Oe } };
              }
            );
          })(C);
        }
        static nullValidator(C) {
          return null;
        }
        static compose(C) {
          return Ke(C);
        }
        static composeAsync(C) {
          return bt(C);
        }
      }
      function F(b) {
        return null;
      }
      function J(b) {
        return null != b;
      }
      function oe(b) {
        return (0, o.QGY)(b) ? (0, j.D)(b) : b;
      }
      function he(b) {
        let C = {};
        return (
          b.forEach((D) => {
            C = null != D ? { ...C, ...D } : C;
          }),
          0 === Object.keys(C).length ? null : C
        );
      }
      function be(b, C) {
        return C.map((D) => D(b));
      }
      function nt(b) {
        return b.map((C) =>
          (function Ye(b) {
            return !b.validate;
          })(C)
            ? C
            : (D) => C.validate(D)
        );
      }
      function Ke(b) {
        if (!b) return null;
        const C = b.filter(J);
        return 0 == C.length
          ? null
          : function (D) {
              return he(be(D, C));
            };
      }
      function ft(b) {
        return null != b ? Ke(nt(b)) : null;
      }
      function bt(b) {
        if (!b) return null;
        const C = b.filter(J);
        return 0 == C.length
          ? null
          : function (D) {
              return (function De(...b) {
                const C = (0, re.jO)(b),
                  { args: D, keys: x } = (0, ge.D)(b),
                  Oe = new z.y((a) => {
                    const { length: _ } = D;
                    if (!_) return void a.complete();
                    const c = new Array(_);
                    let g = _,
                      M = _;
                    for (let Me = 0; Me < _; Me++) {
                      let Je = !1;
                      (0, Ne.Xf)(D[Me]).subscribe(
                        (0, Fe.x)(
                          a,
                          (Qe) => {
                            Je || ((Je = !0), M--), (c[Me] = Qe);
                          },
                          () => g--,
                          void 0,
                          () => {
                            (!g || !Je) &&
                              (M || a.next(x ? (0, Pe.n)(x, c) : c),
                              a.complete());
                          }
                        )
                      );
                    }
                  });
                return C ? Oe.pipe((0, Ae.Z)(C)) : Oe;
              })(be(D, C).map(oe)).pipe((0, we.U)(he));
            };
      }
      function lt(b) {
        return null != b ? bt(nt(b)) : null;
      }
      function Ft(b, C) {
        return null === b ? [C] : Array.isArray(b) ? [...b, C] : [b, C];
      }
      function Mt(b) {
        return b._rawValidators;
      }
      function ze(b) {
        return b._rawAsyncValidators;
      }
      function Lt(b) {
        return b ? (Array.isArray(b) ? b : [b]) : [];
      }
      function bn(b, C) {
        return Array.isArray(b) ? b.includes(C) : b === C;
      }
      function jn(b, C) {
        const D = Lt(C);
        return (
          Lt(b).forEach((Oe) => {
            bn(D, Oe) || D.push(Oe);
          }),
          D
        );
      }
      function st(b, C) {
        return Lt(C).filter((D) => !bn(b, D));
      }
      class Ln {
        constructor() {
          (this._rawValidators = []),
            (this._rawAsyncValidators = []),
            (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(C) {
          (this._rawValidators = C || []),
            (this._composedValidatorFn = ft(this._rawValidators));
        }
        _setAsyncValidators(C) {
          (this._rawAsyncValidators = C || []),
            (this._composedAsyncValidatorFn = lt(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(C) {
          this._onDestroyCallbacks.push(C);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach((C) => C()),
            (this._onDestroyCallbacks = []);
        }
        reset(C) {
          this.control && this.control.reset(C);
        }
        hasError(C, D) {
          return !!this.control && this.control.hasError(C, D);
        }
        getError(C, D) {
          return this.control ? this.control.getError(C, D) : null;
        }
      }
      class Pt extends Ln {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class cn extends Ln {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class Xt {
        constructor(C) {
          this._cd = C;
        }
        get isTouched() {
          return !!this._cd?.control?.touched;
        }
        get isUntouched() {
          return !!this._cd?.control?.untouched;
        }
        get isPristine() {
          return !!this._cd?.control?.pristine;
        }
        get isDirty() {
          return !!this._cd?.control?.dirty;
        }
        get isValid() {
          return !!this._cd?.control?.valid;
        }
        get isInvalid() {
          return !!this._cd?.control?.invalid;
        }
        get isPending() {
          return !!this._cd?.control?.pending;
        }
        get isSubmitted() {
          return !!this._cd?.submitted;
        }
      }
      let $n = (() => {
          class b extends Xt {
            constructor(D) {
              super(D);
            }
          }
          return (
            (b.ɵfac = function (D) {
              return new (D || b)(o.Y36(cn, 2));
            }),
            (b.ɵdir = o.lG2({
              type: b,
              selectors: [
                ['', 'formControlName', ''],
                ['', 'ngModel', ''],
                ['', 'formControl', ''],
              ],
              hostVars: 14,
              hostBindings: function (D, x) {
                2 & D &&
                  o.ekj('ng-untouched', x.isUntouched)(
                    'ng-touched',
                    x.isTouched
                  )('ng-pristine', x.isPristine)('ng-dirty', x.isDirty)(
                    'ng-valid',
                    x.isValid
                  )('ng-invalid', x.isInvalid)('ng-pending', x.isPending);
              },
              features: [o.qOj],
            })),
            b
          );
        })(),
        Ut = (() => {
          class b extends Xt {
            constructor(D) {
              super(D);
            }
          }
          return (
            (b.ɵfac = function (D) {
              return new (D || b)(o.Y36(Pt, 10));
            }),
            (b.ɵdir = o.lG2({
              type: b,
              selectors: [
                ['', 'formGroupName', ''],
                ['', 'formArrayName', ''],
                ['', 'ngModelGroup', ''],
                ['', 'formGroup', ''],
                ['form', 3, 'ngNoForm', ''],
                ['', 'ngForm', ''],
              ],
              hostVars: 16,
              hostBindings: function (D, x) {
                2 & D &&
                  o.ekj('ng-untouched', x.isUntouched)(
                    'ng-touched',
                    x.isTouched
                  )('ng-pristine', x.isPristine)('ng-dirty', x.isDirty)(
                    'ng-valid',
                    x.isValid
                  )('ng-invalid', x.isInvalid)('ng-pending', x.isPending)(
                    'ng-submitted',
                    x.isSubmitted
                  );
              },
              features: [o.qOj],
            })),
            b
          );
        })();
      const jt = 'VALID',
        on = 'INVALID',
        sn = 'PENDING',
        Dt = 'DISABLED';
      function wn(b) {
        return (hn(b) ? b.validators : b) || null;
      }
      function Vn(b, C) {
        return (hn(C) ? C.asyncValidators : b) || null;
      }
      function hn(b) {
        return null != b && !Array.isArray(b) && 'object' == typeof b;
      }
      function Dr(b, C, D) {
        const x = b.controls;
        if (!(C ? Object.keys(x) : x).length) throw new o.vHH(1e3, '');
        if (!x[D]) throw new o.vHH(1001, '');
      }
      function dr(b, C, D) {
        b._forEachChild((x, Oe) => {
          if (void 0 === D[Oe]) throw new o.vHH(1002, '');
        });
      }
      class Ie {
        constructor(C, D) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            this._assignValidators(C),
            this._assignAsyncValidators(D);
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(C) {
          this._rawValidators = this._composedValidatorFn = C;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(C) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = C;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === jt;
        }
        get invalid() {
          return this.status === on;
        }
        get pending() {
          return this.status == sn;
        }
        get disabled() {
          return this.status === Dt;
        }
        get enabled() {
          return this.status !== Dt;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : 'change';
        }
        setValidators(C) {
          this._assignValidators(C);
        }
        setAsyncValidators(C) {
          this._assignAsyncValidators(C);
        }
        addValidators(C) {
          this.setValidators(jn(C, this._rawValidators));
        }
        addAsyncValidators(C) {
          this.setAsyncValidators(jn(C, this._rawAsyncValidators));
        }
        removeValidators(C) {
          this.setValidators(st(C, this._rawValidators));
        }
        removeAsyncValidators(C) {
          this.setAsyncValidators(st(C, this._rawAsyncValidators));
        }
        hasValidator(C) {
          return bn(this._rawValidators, C);
        }
        hasAsyncValidator(C) {
          return bn(this._rawAsyncValidators, C);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(C = {}) {
          (this.touched = !0),
            this._parent && !C.onlySelf && this._parent.markAsTouched(C);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((C) => C.markAllAsTouched());
        }
        markAsUntouched(C = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((D) => {
              D.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !C.onlySelf && this._parent._updateTouched(C);
        }
        markAsDirty(C = {}) {
          (this.pristine = !1),
            this._parent && !C.onlySelf && this._parent.markAsDirty(C);
        }
        markAsPristine(C = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((D) => {
              D.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !C.onlySelf && this._parent._updatePristine(C);
        }
        markAsPending(C = {}) {
          (this.status = sn),
            !1 !== C.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !C.onlySelf && this._parent.markAsPending(C);
        }
        disable(C = {}) {
          const D = this._parentMarkedDirty(C.onlySelf);
          (this.status = Dt),
            (this.errors = null),
            this._forEachChild((x) => {
              x.disable({ ...C, onlySelf: !0 });
            }),
            this._updateValue(),
            !1 !== C.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors({ ...C, skipPristineCheck: D }),
            this._onDisabledChange.forEach((x) => x(!0));
        }
        enable(C = {}) {
          const D = this._parentMarkedDirty(C.onlySelf);
          (this.status = jt),
            this._forEachChild((x) => {
              x.enable({ ...C, onlySelf: !0 });
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: C.emitEvent,
            }),
            this._updateAncestors({ ...C, skipPristineCheck: D }),
            this._onDisabledChange.forEach((x) => x(!1));
        }
        _updateAncestors(C) {
          this._parent &&
            !C.onlySelf &&
            (this._parent.updateValueAndValidity(C),
            C.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(C) {
          this._parent = C;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(C = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === jt || this.status === sn) &&
                this._runAsyncValidator(C.emitEvent)),
            !1 !== C.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !C.onlySelf &&
              this._parent.updateValueAndValidity(C);
        }
        _updateTreeValidity(C = { emitEvent: !0 }) {
          this._forEachChild((D) => D._updateTreeValidity(C)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: C.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? Dt : jt;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(C) {
          if (this.asyncValidator) {
            (this.status = sn), (this._hasOwnPendingAsyncValidator = !0);
            const D = oe(this.asyncValidator(this));
            this._asyncValidationSubscription = D.subscribe((x) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(x, { emitEvent: C });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(C, D = {}) {
          (this.errors = C), this._updateControlsErrors(!1 !== D.emitEvent);
        }
        get(C) {
          let D = C;
          return null == D ||
            (Array.isArray(D) || (D = D.split('.')), 0 === D.length)
            ? null
            : D.reduce((x, Oe) => x && x._find(Oe), this);
        }
        getError(C, D) {
          const x = D ? this.get(D) : this;
          return x && x.errors ? x.errors[C] : null;
        }
        hasError(C, D) {
          return !!this.getError(C, D);
        }
        get root() {
          let C = this;
          for (; C._parent; ) C = C._parent;
          return C;
        }
        _updateControlsErrors(C) {
          (this.status = this._calculateStatus()),
            C && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(C);
        }
        _initObservables() {
          (this.valueChanges = new o.vpe()), (this.statusChanges = new o.vpe());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? Dt
            : this.errors
            ? on
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(sn)
            ? sn
            : this._anyControlsHaveStatus(on)
            ? on
            : jt;
        }
        _anyControlsHaveStatus(C) {
          return this._anyControls((D) => D.status === C);
        }
        _anyControlsDirty() {
          return this._anyControls((C) => C.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((C) => C.touched);
        }
        _updatePristine(C = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !C.onlySelf && this._parent._updatePristine(C);
        }
        _updateTouched(C = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !C.onlySelf && this._parent._updateTouched(C);
        }
        _registerOnCollectionChange(C) {
          this._onCollectionChange = C;
        }
        _setUpdateStrategy(C) {
          hn(C) && null != C.updateOn && (this._updateOn = C.updateOn);
        }
        _parentMarkedDirty(C) {
          return (
            !C &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
        _find(C) {
          return null;
        }
        _assignValidators(C) {
          (this._rawValidators = Array.isArray(C) ? C.slice() : C),
            (this._composedValidatorFn = (function An(b) {
              return Array.isArray(b) ? ft(b) : b || null;
            })(this._rawValidators));
        }
        _assignAsyncValidators(C) {
          (this._rawAsyncValidators = Array.isArray(C) ? C.slice() : C),
            (this._composedAsyncValidatorFn = (function or(b) {
              return Array.isArray(b) ? lt(b) : b || null;
            })(this._rawAsyncValidators));
        }
      }
      class Z extends Ie {
        constructor(C, D, x) {
          super(wn(D), Vn(x, D)),
            (this.controls = C),
            this._initObservables(),
            this._setUpdateStrategy(D),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(C, D) {
          return this.controls[C]
            ? this.controls[C]
            : ((this.controls[C] = D),
              D.setParent(this),
              D._registerOnCollectionChange(this._onCollectionChange),
              D);
        }
        addControl(C, D, x = {}) {
          this.registerControl(C, D),
            this.updateValueAndValidity({ emitEvent: x.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(C, D = {}) {
          this.controls[C] &&
            this.controls[C]._registerOnCollectionChange(() => {}),
            delete this.controls[C],
            this.updateValueAndValidity({ emitEvent: D.emitEvent }),
            this._onCollectionChange();
        }
        setControl(C, D, x = {}) {
          this.controls[C] &&
            this.controls[C]._registerOnCollectionChange(() => {}),
            delete this.controls[C],
            D && this.registerControl(C, D),
            this.updateValueAndValidity({ emitEvent: x.emitEvent }),
            this._onCollectionChange();
        }
        contains(C) {
          return this.controls.hasOwnProperty(C) && this.controls[C].enabled;
        }
        setValue(C, D = {}) {
          dr(this, 0, C),
            Object.keys(C).forEach((x) => {
              Dr(this, !0, x),
                this.controls[x].setValue(C[x], {
                  onlySelf: !0,
                  emitEvent: D.emitEvent,
                });
            }),
            this.updateValueAndValidity(D);
        }
        patchValue(C, D = {}) {
          null != C &&
            (Object.keys(C).forEach((x) => {
              const Oe = this.controls[x];
              Oe &&
                Oe.patchValue(C[x], { onlySelf: !0, emitEvent: D.emitEvent });
            }),
            this.updateValueAndValidity(D));
        }
        reset(C = {}, D = {}) {
          this._forEachChild((x, Oe) => {
            x.reset(C[Oe], { onlySelf: !0, emitEvent: D.emitEvent });
          }),
            this._updatePristine(D),
            this._updateTouched(D),
            this.updateValueAndValidity(D);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (C, D, x) => ((C[x] = D.getRawValue()), C)
          );
        }
        _syncPendingControls() {
          let C = this._reduceChildren(
            !1,
            (D, x) => !!x._syncPendingControls() || D
          );
          return C && this.updateValueAndValidity({ onlySelf: !0 }), C;
        }
        _forEachChild(C) {
          Object.keys(this.controls).forEach((D) => {
            const x = this.controls[D];
            x && C(x, D);
          });
        }
        _setUpControls() {
          this._forEachChild((C) => {
            C.setParent(this),
              C._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(C) {
          for (const [D, x] of Object.entries(this.controls))
            if (this.contains(D) && C(x)) return !0;
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (D, x, Oe) => ((x.enabled || this.disabled) && (D[Oe] = x.value), D)
          );
        }
        _reduceChildren(C, D) {
          let x = C;
          return (
            this._forEachChild((Oe, a) => {
              x = D(x, Oe, a);
            }),
            x
          );
        }
        _allControlsDisabled() {
          for (const C of Object.keys(this.controls))
            if (this.controls[C].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(C) {
          return this.controls.hasOwnProperty(C) ? this.controls[C] : null;
        }
      }
      class Ge extends Z {}
      const mt = new o.OlP('CallSetDisabledState', {
          providedIn: 'root',
          factory: () => vt,
        }),
        vt = 'always';
      function an(b, C, D = vt) {
        pn(b, C),
          C.valueAccessor.writeValue(b.value),
          (b.disabled || 'always' === D) &&
            C.valueAccessor.setDisabledState?.(b.disabled),
          (function Sn(b, C) {
            C.valueAccessor.registerOnChange((D) => {
              (b._pendingValue = D),
                (b._pendingChange = !0),
                (b._pendingDirty = !0),
                'change' === b.updateOn && fr(b, C);
            });
          })(b, C),
          (function Sr(b, C) {
            const D = (x, Oe) => {
              C.valueAccessor.writeValue(x), Oe && C.viewToModelUpdate(x);
            };
            b.registerOnChange(D),
              C._registerOnDestroy(() => {
                b._unregisterOnChange(D);
              });
          })(b, C),
          (function gn(b, C) {
            C.valueAccessor.registerOnTouched(() => {
              (b._pendingTouched = !0),
                'blur' === b.updateOn && b._pendingChange && fr(b, C),
                'submit' !== b.updateOn && b.markAsTouched();
            });
          })(b, C),
          (function Tn(b, C) {
            if (C.valueAccessor.setDisabledState) {
              const D = (x) => {
                C.valueAccessor.setDisabledState(x);
              };
              b.registerOnDisabledChange(D),
                C._registerOnDestroy(() => {
                  b._unregisterOnDisabledChange(D);
                });
            }
          })(b, C);
      }
      function ln(b, C, D = !0) {
        const x = () => {};
        C.valueAccessor &&
          (C.valueAccessor.registerOnChange(x),
          C.valueAccessor.registerOnTouched(x)),
          On(b, C),
          b &&
            (C._invokeOnDestroyCallbacks(),
            b._registerOnCollectionChange(() => {}));
      }
      function ir(b, C) {
        b.forEach((D) => {
          D.registerOnValidatorChange && D.registerOnValidatorChange(C);
        });
      }
      function pn(b, C) {
        const D = Mt(b);
        null !== C.validator
          ? b.setValidators(Ft(D, C.validator))
          : 'function' == typeof D && b.setValidators([D]);
        const x = ze(b);
        null !== C.asyncValidator
          ? b.setAsyncValidators(Ft(x, C.asyncValidator))
          : 'function' == typeof x && b.setAsyncValidators([x]);
        const Oe = () => b.updateValueAndValidity();
        ir(C._rawValidators, Oe), ir(C._rawAsyncValidators, Oe);
      }
      function On(b, C) {
        let D = !1;
        if (null !== b) {
          if (null !== C.validator) {
            const Oe = Mt(b);
            if (Array.isArray(Oe) && Oe.length > 0) {
              const a = Oe.filter((_) => _ !== C.validator);
              a.length !== Oe.length && ((D = !0), b.setValidators(a));
            }
          }
          if (null !== C.asyncValidator) {
            const Oe = ze(b);
            if (Array.isArray(Oe) && Oe.length > 0) {
              const a = Oe.filter((_) => _ !== C.asyncValidator);
              a.length !== Oe.length && ((D = !0), b.setAsyncValidators(a));
            }
          }
        }
        const x = () => {};
        return ir(C._rawValidators, x), ir(C._rawAsyncValidators, x), D;
      }
      function fr(b, C) {
        b._pendingDirty && b.markAsDirty(),
          b.setValue(b._pendingValue, { emitModelToViewChange: !1 }),
          C.viewToModelUpdate(b._pendingValue),
          (b._pendingChange = !1);
      }
      function ie(b, C) {
        const D = b.indexOf(C);
        D > -1 && b.splice(D, 1);
      }
      function Be(b) {
        return (
          'object' == typeof b &&
          null !== b &&
          2 === Object.keys(b).length &&
          'value' in b &&
          'disabled' in b
        );
      }
      const xe = class extends Ie {
        constructor(C = null, D, x) {
          super(wn(D), Vn(x, D)),
            (this.defaultValue = null),
            (this._onChange = []),
            (this._pendingChange = !1),
            this._applyFormState(C),
            this._setUpdateStrategy(D),
            this._initObservables(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            }),
            hn(D) &&
              (D.nonNullable || D.initialValueIsDefault) &&
              (this.defaultValue = Be(C) ? C.value : C);
        }
        setValue(C, D = {}) {
          (this.value = this._pendingValue = C),
            this._onChange.length &&
              !1 !== D.emitModelToViewChange &&
              this._onChange.forEach((x) =>
                x(this.value, !1 !== D.emitViewToModelChange)
              ),
            this.updateValueAndValidity(D);
        }
        patchValue(C, D = {}) {
          this.setValue(C, D);
        }
        reset(C = this.defaultValue, D = {}) {
          this._applyFormState(C),
            this.markAsPristine(D),
            this.markAsUntouched(D),
            this.setValue(this.value, D),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(C) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(C) {
          this._onChange.push(C);
        }
        _unregisterOnChange(C) {
          ie(this._onChange, C);
        }
        registerOnDisabledChange(C) {
          this._onDisabledChange.push(C);
        }
        _unregisterOnDisabledChange(C) {
          ie(this._onDisabledChange, C);
        }
        _forEachChild(C) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1,
            }),
            0)
          );
        }
        _applyFormState(C) {
          Be(C)
            ? ((this.value = this._pendingValue = C.value),
              C.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = C);
        }
      };
      let go = (() => {
          class b {}
          return (
            (b.ɵfac = function (D) {
              return new (D || b)();
            }),
            (b.ɵdir = o.lG2({
              type: b,
              selectors: [
                ['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', ''],
              ],
              hostAttrs: ['novalidate', ''],
            })),
            b
          );
        })(),
        Lr = (() => {
          class b {}
          return (
            (b.ɵfac = function (D) {
              return new (D || b)();
            }),
            (b.ɵmod = o.oAB({ type: b })),
            (b.ɵinj = o.cJS({})),
            b
          );
        })();
      const tn = new o.OlP('NgModelWithFormControlWarning'),
        Tr = { provide: Pt, useExisting: (0, o.Gpc)(() => Or) };
      let Or = (() => {
        class b extends Pt {
          constructor(D, x, Oe) {
            super(),
              (this.callSetDisabledState = Oe),
              (this.submitted = !1),
              (this._onCollectionChange = () => this._updateDomValue()),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new o.vpe()),
              this._setValidators(D),
              this._setAsyncValidators(x);
          }
          ngOnChanges(D) {
            this._checkFormPresent(),
              D.hasOwnProperty('form') &&
                (this._updateValidators(),
                this._updateDomValue(),
                this._updateRegistrations(),
                (this._oldForm = this.form));
          }
          ngOnDestroy() {
            this.form &&
              (On(this.form, this),
              this.form._onCollectionChange === this._onCollectionChange &&
                this.form._registerOnCollectionChange(() => {}));
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          addControl(D) {
            const x = this.form.get(D.path);
            return (
              an(x, D, this.callSetDisabledState),
              x.updateValueAndValidity({ emitEvent: !1 }),
              this.directives.push(D),
              x
            );
          }
          getControl(D) {
            return this.form.get(D.path);
          }
          removeControl(D) {
            ln(D.control || null, D, !1),
              (function U(b, C) {
                const D = b.indexOf(C);
                D > -1 && b.splice(D, 1);
              })(this.directives, D);
          }
          addFormGroup(D) {
            this._setUpFormContainer(D);
          }
          removeFormGroup(D) {
            this._cleanUpFormContainer(D);
          }
          getFormGroup(D) {
            return this.form.get(D.path);
          }
          addFormArray(D) {
            this._setUpFormContainer(D);
          }
          removeFormArray(D) {
            this._cleanUpFormContainer(D);
          }
          getFormArray(D) {
            return this.form.get(D.path);
          }
          updateModel(D, x) {
            this.form.get(D.path).setValue(x);
          }
          onSubmit(D) {
            return (
              (this.submitted = !0),
              (function T(b, C) {
                b._syncPendingControls(),
                  C.forEach((D) => {
                    const x = D.control;
                    'submit' === x.updateOn &&
                      x._pendingChange &&
                      (D.viewToModelUpdate(x._pendingValue),
                      (x._pendingChange = !1));
                  });
              })(this.form, this.directives),
              this.ngSubmit.emit(D),
              'dialog' === D?.target?.method
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(D) {
            this.form.reset(D), (this.submitted = !1);
          }
          _updateDomValue() {
            this.directives.forEach((D) => {
              const x = D.control,
                Oe = this.form.get(D.path);
              x !== Oe &&
                (ln(x || null, D),
                ((b) => b instanceof xe)(Oe) &&
                  (an(Oe, D, this.callSetDisabledState), (D.control = Oe)));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _setUpFormContainer(D) {
            const x = this.form.get(D.path);
            (function pr(b, C) {
              pn(b, C);
            })(x, D),
              x.updateValueAndValidity({ emitEvent: !1 });
          }
          _cleanUpFormContainer(D) {
            if (this.form) {
              const x = this.form.get(D.path);
              x &&
                (function Cr(b, C) {
                  return On(b, C);
                })(x, D) &&
                x.updateValueAndValidity({ emitEvent: !1 });
            }
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange),
              this._oldForm &&
                this._oldForm._registerOnCollectionChange(() => {});
          }
          _updateValidators() {
            pn(this.form, this), this._oldForm && On(this._oldForm, this);
          }
          _checkFormPresent() {}
        }
        return (
          (b.ɵfac = function (D) {
            return new (D || b)(o.Y36(q, 10), o.Y36(le, 10), o.Y36(mt, 8));
          }),
          (b.ɵdir = o.lG2({
            type: b,
            selectors: [['', 'formGroup', '']],
            hostBindings: function (D, x) {
              1 & D &&
                o.NdJ('submit', function (a) {
                  return x.onSubmit(a);
                })('reset', function () {
                  return x.onReset();
                });
            },
            inputs: { form: ['formGroup', 'form'] },
            outputs: { ngSubmit: 'ngSubmit' },
            exportAs: ['ngForm'],
            features: [o._Bn([Tr]), o.qOj, o.TTD],
          })),
          b
        );
      })();
      const eo = { provide: cn, useExisting: (0, o.Gpc)(() => to) };
      let to = (() => {
          class b extends cn {
            constructor(D, x, Oe, a, _) {
              super(),
                (this._ngModelWarningConfig = _),
                (this._added = !1),
                (this.update = new o.vpe()),
                (this._ngModelWarningSent = !1),
                (this._parent = D),
                this._setValidators(x),
                this._setAsyncValidators(Oe),
                (this.valueAccessor = (function $(b, C) {
                  if (!C) return null;
                  let D, x, Oe;
                  return (
                    Array.isArray(C),
                    C.forEach((a) => {
                      a.constructor === ye
                        ? (D = a)
                        : (function Rn(b) {
                            return Object.getPrototypeOf(b.constructor) === te;
                          })(a)
                        ? (x = a)
                        : (Oe = a);
                    }),
                    Oe || x || D || null
                  );
                })(0, a));
            }
            set isDisabled(D) {}
            ngOnChanges(D) {
              this._added || this._setUpControl(),
                (function en(b, C) {
                  if (!b.hasOwnProperty('model')) return !1;
                  const D = b.model;
                  return !!D.isFirstChange() || !Object.is(C, D.currentValue);
                })(D, this.viewModel) &&
                  ((this.viewModel = this.model),
                  this.formDirective.updateModel(this, this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            viewToModelUpdate(D) {
              (this.viewModel = D), this.update.emit(D);
            }
            get path() {
              return (function Zt(b, C) {
                return [...C.path, b];
              })(
                null == this.name ? this.name : this.name.toString(),
                this._parent
              );
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            _checkParentType() {}
            _setUpControl() {
              this._checkParentType(),
                (this.control = this.formDirective.addControl(this)),
                (this._added = !0);
            }
          }
          return (
            (b._ngModelWarningSentOnce = !1),
            (b.ɵfac = function (D) {
              return new (D || b)(
                o.Y36(Pt, 13),
                o.Y36(q, 10),
                o.Y36(le, 10),
                o.Y36(ve, 10),
                o.Y36(tn, 8)
              );
            }),
            (b.ɵdir = o.lG2({
              type: b,
              selectors: [['', 'formControlName', '']],
              inputs: {
                name: ['formControlName', 'name'],
                isDisabled: ['disabled', 'isDisabled'],
                model: ['ngModel', 'model'],
              },
              outputs: { update: 'ngModelChange' },
              features: [o._Bn([eo]), o.qOj, o.TTD],
            })),
            b
          );
        })(),
        ko = (() => {
          class b {}
          return (
            (b.ɵfac = function (D) {
              return new (D || b)();
            }),
            (b.ɵmod = o.oAB({ type: b })),
            (b.ɵinj = o.cJS({ imports: [Lr] })),
            b
          );
        })(),
        ao = (() => {
          class b {
            static withConfig(D) {
              return {
                ngModule: b,
                providers: [
                  { provide: mt, useValue: D.callSetDisabledState ?? vt },
                ],
              };
            }
          }
          return (
            (b.ɵfac = function (D) {
              return new (D || b)();
            }),
            (b.ɵmod = o.oAB({ type: b })),
            (b.ɵinj = o.cJS({ imports: [ko] })),
            b
          );
        })(),
        Wr = (() => {
          class b {
            static withConfig(D) {
              return {
                ngModule: b,
                providers: [
                  {
                    provide: tn,
                    useValue: D.warnOnNgModelWithFormControl ?? 'always',
                  },
                  { provide: mt, useValue: D.callSetDisabledState ?? vt },
                ],
              };
            }
          }
          return (
            (b.ɵfac = function (D) {
              return new (D || b)();
            }),
            (b.ɵmod = o.oAB({ type: b })),
            (b.ɵinj = o.cJS({ imports: [ko] })),
            b
          );
        })();
      class Un extends Ie {
        constructor(C, D, x) {
          super(wn(D), Vn(x, D)),
            (this.controls = C),
            this._initObservables(),
            this._setUpdateStrategy(D),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        at(C) {
          return this.controls[this._adjustIndex(C)];
        }
        push(C, D = {}) {
          this.controls.push(C),
            this._registerControl(C),
            this.updateValueAndValidity({ emitEvent: D.emitEvent }),
            this._onCollectionChange();
        }
        insert(C, D, x = {}) {
          this.controls.splice(C, 0, D),
            this._registerControl(D),
            this.updateValueAndValidity({ emitEvent: x.emitEvent });
        }
        removeAt(C, D = {}) {
          let x = this._adjustIndex(C);
          x < 0 && (x = 0),
            this.controls[x] &&
              this.controls[x]._registerOnCollectionChange(() => {}),
            this.controls.splice(x, 1),
            this.updateValueAndValidity({ emitEvent: D.emitEvent });
        }
        setControl(C, D, x = {}) {
          let Oe = this._adjustIndex(C);
          Oe < 0 && (Oe = 0),
            this.controls[Oe] &&
              this.controls[Oe]._registerOnCollectionChange(() => {}),
            this.controls.splice(Oe, 1),
            D && (this.controls.splice(Oe, 0, D), this._registerControl(D)),
            this.updateValueAndValidity({ emitEvent: x.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(C, D = {}) {
          dr(this, 0, C),
            C.forEach((x, Oe) => {
              Dr(this, !1, Oe),
                this.at(Oe).setValue(x, {
                  onlySelf: !0,
                  emitEvent: D.emitEvent,
                });
            }),
            this.updateValueAndValidity(D);
        }
        patchValue(C, D = {}) {
          null != C &&
            (C.forEach((x, Oe) => {
              this.at(Oe) &&
                this.at(Oe).patchValue(x, {
                  onlySelf: !0,
                  emitEvent: D.emitEvent,
                });
            }),
            this.updateValueAndValidity(D));
        }
        reset(C = [], D = {}) {
          this._forEachChild((x, Oe) => {
            x.reset(C[Oe], { onlySelf: !0, emitEvent: D.emitEvent });
          }),
            this._updatePristine(D),
            this._updateTouched(D),
            this.updateValueAndValidity(D);
        }
        getRawValue() {
          return this.controls.map((C) => C.getRawValue());
        }
        clear(C = {}) {
          this.controls.length < 1 ||
            (this._forEachChild((D) => D._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity({ emitEvent: C.emitEvent }));
        }
        _adjustIndex(C) {
          return C < 0 ? C + this.length : C;
        }
        _syncPendingControls() {
          let C = this.controls.reduce(
            (D, x) => !!x._syncPendingControls() || D,
            !1
          );
          return C && this.updateValueAndValidity({ onlySelf: !0 }), C;
        }
        _forEachChild(C) {
          this.controls.forEach((D, x) => {
            C(D, x);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter((C) => C.enabled || this.disabled)
            .map((C) => C.value);
        }
        _anyControls(C) {
          return this.controls.some((D) => D.enabled && C(D));
        }
        _setUpControls() {
          this._forEachChild((C) => this._registerControl(C));
        }
        _allControlsDisabled() {
          for (const C of this.controls) if (C.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(C) {
          C.setParent(this),
            C._registerOnCollectionChange(this._onCollectionChange);
        }
        _find(C) {
          return this.at(C) ?? null;
        }
      }
      function Jo(b) {
        return (
          !!b &&
          (void 0 !== b.asyncValidators ||
            void 0 !== b.validators ||
            void 0 !== b.updateOn)
        );
      }
      let Vr = (() => {
        class b {
          constructor() {
            this.useNonNullable = !1;
          }
          get nonNullable() {
            const D = new b();
            return (D.useNonNullable = !0), D;
          }
          group(D, x = null) {
            const Oe = this._reduceControls(D);
            let a = {};
            return (
              Jo(x)
                ? (a = x)
                : null !== x &&
                  ((a.validators = x.validator),
                  (a.asyncValidators = x.asyncValidator)),
              new Z(Oe, a)
            );
          }
          record(D, x = null) {
            const Oe = this._reduceControls(D);
            return new Ge(Oe, x);
          }
          control(D, x, Oe) {
            let a = {};
            return this.useNonNullable
              ? (Jo(x)
                  ? (a = x)
                  : ((a.validators = x), (a.asyncValidators = Oe)),
                new xe(D, { ...a, nonNullable: !0 }))
              : new xe(D, x, Oe);
          }
          array(D, x, Oe) {
            const a = D.map((_) => this._createControl(_));
            return new Un(a, x, Oe);
          }
          _reduceControls(D) {
            const x = {};
            return (
              Object.keys(D).forEach((Oe) => {
                x[Oe] = this._createControl(D[Oe]);
              }),
              x
            );
          }
          _createControl(D) {
            return D instanceof xe || D instanceof Ie
              ? D
              : Array.isArray(D)
              ? this.control(
                  D[0],
                  D.length > 1 ? D[1] : null,
                  D.length > 2 ? D[2] : null
                )
              : this.control(D);
          }
        }
        return (
          (b.ɵfac = function (D) {
            return new (D || b)();
          }),
          (b.ɵprov = o.Yz7({ token: b, factory: b.ɵfac, providedIn: Wr })),
          b
        );
      })();
    },
    1481: (at, ke, S) => {
      'use strict';
      S.d(ke, { Cg: () => Ke, Dx: () => $n });
      var o = S(6895),
        N = S(8256);
      class j extends o.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class z extends j {
        static makeCurrent() {
          (0, o.HT)(new z());
        }
        onAndCancel(Z, Y, Re) {
          return (
            Z.addEventListener(Y, Re, !1),
            () => {
              Z.removeEventListener(Y, Re, !1);
            }
          );
        }
        dispatchEvent(Z, Y) {
          Z.dispatchEvent(Y);
        }
        remove(Z) {
          Z.parentNode && Z.parentNode.removeChild(Z);
        }
        createElement(Z, Y) {
          return (Y = Y || this.getDefaultDocument()).createElement(Z);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(Z) {
          return Z.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(Z) {
          return Z instanceof DocumentFragment;
        }
        getGlobalEventTarget(Z, Y) {
          return 'window' === Y
            ? window
            : 'document' === Y
            ? Z
            : 'body' === Y
            ? Z.body
            : null;
        }
        getBaseHref(Z) {
          const Y = (function Ne() {
            return (
              (ge = ge || document.querySelector('base')),
              ge ? ge.getAttribute('href') : null
            );
          })();
          return null == Y
            ? null
            : (function Fe(Ie) {
                (re = re || document.createElement('a')),
                  re.setAttribute('href', Ie);
                const Z = re.pathname;
                return '/' === Z.charAt(0) ? Z : `/${Z}`;
              })(Y);
        }
        resetBaseElement() {
          ge = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(Z) {
          return (0, o.Mx)(document.cookie, Z);
        }
      }
      let re,
        ge = null,
        ue = (() => {
          class Ie {
            build() {
              return new XMLHttpRequest();
            }
          }
          return (
            (Ie.ɵfac = function (Y) {
              return new (Y || Ie)();
            }),
            (Ie.ɵprov = N.Yz7({ token: Ie, factory: Ie.ɵfac })),
            Ie
          );
        })();
      const te = new N.OlP('EventManagerPlugins');
      let ve = (() => {
        class Ie {
          constructor(Y, Re) {
            (this._zone = Re),
              (this._eventNameToPlugin = new Map()),
              Y.forEach((Ge) => (Ge.manager = this)),
              (this._plugins = Y.slice().reverse());
          }
          addEventListener(Y, Re, Ge) {
            return this._findPluginFor(Re).addEventListener(Y, Re, Ge);
          }
          addGlobalEventListener(Y, Re, Ge) {
            return this._findPluginFor(Re).addGlobalEventListener(Y, Re, Ge);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(Y) {
            const Re = this._eventNameToPlugin.get(Y);
            if (Re) return Re;
            const Ge = this._plugins;
            for (let ht = 0; ht < Ge.length; ht++) {
              const mt = Ge[ht];
              if (mt.supports(Y)) return this._eventNameToPlugin.set(Y, mt), mt;
            }
            throw new Error(`No event manager plugin found for event ${Y}`);
          }
        }
        return (
          (Ie.ɵfac = function (Y) {
            return new (Y || Ie)(N.LFG(te), N.LFG(N.R0b));
          }),
          (Ie.ɵprov = N.Yz7({ token: Ie, factory: Ie.ɵfac })),
          Ie
        );
      })();
      class $e {
        constructor(Z) {
          this._doc = Z;
        }
        addGlobalEventListener(Z, Y, Re) {
          const Ge = (0, o.q)().getGlobalEventTarget(this._doc, Z);
          if (!Ge)
            throw new Error(`Unsupported event target ${Ge} for event ${Y}`);
          return this.addEventListener(Ge, Y, Re);
        }
      }
      let me = (() => {
          class Ie {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(Y) {
              const Re = new Set();
              Y.forEach((Ge) => {
                this._stylesSet.has(Ge) ||
                  (this._stylesSet.add(Ge), Re.add(Ge));
              }),
                this.onStylesAdded(Re);
            }
            onStylesAdded(Y) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (Ie.ɵfac = function (Y) {
              return new (Y || Ie)();
            }),
            (Ie.ɵprov = N.Yz7({ token: Ie, factory: Ie.ɵfac })),
            Ie
          );
        })(),
        ee = (() => {
          class Ie extends me {
            constructor(Y) {
              super(),
                (this._doc = Y),
                (this._hostNodes = new Map()),
                this._hostNodes.set(Y.head, []);
            }
            _addStylesToHost(Y, Re, Ge) {
              Y.forEach((ht) => {
                const mt = this._doc.createElement('style');
                (mt.textContent = ht), Ge.push(Re.appendChild(mt));
              });
            }
            addHost(Y) {
              const Re = [];
              this._addStylesToHost(this._stylesSet, Y, Re),
                this._hostNodes.set(Y, Re);
            }
            removeHost(Y) {
              const Re = this._hostNodes.get(Y);
              Re && Re.forEach(Ve), this._hostNodes.delete(Y);
            }
            onStylesAdded(Y) {
              this._hostNodes.forEach((Re, Ge) => {
                this._addStylesToHost(Y, Ge, Re);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((Y) => Y.forEach(Ve));
            }
          }
          return (
            (Ie.ɵfac = function (Y) {
              return new (Y || Ie)(N.LFG(o.K0));
            }),
            (Ie.ɵprov = N.Yz7({ token: Ie, factory: Ie.ɵfac })),
            Ie
          );
        })();
      function Ve(Ie) {
        (0, o.q)().remove(Ie);
      }
      const Ee = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/MathML/',
        },
        ye = /%COMP%/g;
      function B(Ie, Z) {
        return Z.flat(100).map((Y) => Y.replace(ye, Ie));
      }
      function V(Ie) {
        return (Z) => {
          if ('__ngUnwrap__' === Z) return Ie;
          !1 === Ie(Z) && (Z.preventDefault(), (Z.returnValue = !1));
        };
      }
      let G = (() => {
        class Ie {
          constructor(Y, Re, Ge) {
            (this.eventManager = Y),
              (this.sharedStylesHost = Re),
              (this.appId = Ge),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Se(Y));
          }
          createRenderer(Y, Re) {
            if (!Y || !Re) return this.defaultRenderer;
            switch (Re.encapsulation) {
              case N.ifc.Emulated: {
                let Ge = this.rendererByCompId.get(Re.id);
                return (
                  Ge ||
                    ((Ge = new k(
                      this.eventManager,
                      this.sharedStylesHost,
                      Re,
                      this.appId
                    )),
                    this.rendererByCompId.set(Re.id, Ge)),
                  Ge.applyToHost(Y),
                  Ge
                );
              }
              case 1:
              case N.ifc.ShadowDom:
                return new F(this.eventManager, this.sharedStylesHost, Y, Re);
              default:
                if (!this.rendererByCompId.has(Re.id)) {
                  const Ge = B(Re.id, Re.styles);
                  this.sharedStylesHost.addStyles(Ge),
                    this.rendererByCompId.set(Re.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (Ie.ɵfac = function (Y) {
            return new (Y || Ie)(N.LFG(ve), N.LFG(ee), N.LFG(N.AFp));
          }),
          (Ie.ɵprov = N.Yz7({ token: Ie, factory: Ie.ɵfac })),
          Ie
        );
      })();
      class Se {
        constructor(Z) {
          (this.eventManager = Z),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(Z, Y) {
          return Y
            ? document.createElementNS(Ee[Y] || Y, Z)
            : document.createElement(Z);
        }
        createComment(Z) {
          return document.createComment(Z);
        }
        createText(Z) {
          return document.createTextNode(Z);
        }
        appendChild(Z, Y) {
          (se(Z) ? Z.content : Z).appendChild(Y);
        }
        insertBefore(Z, Y, Re) {
          Z && (se(Z) ? Z.content : Z).insertBefore(Y, Re);
        }
        removeChild(Z, Y) {
          Z && Z.removeChild(Y);
        }
        selectRootElement(Z, Y) {
          let Re = 'string' == typeof Z ? document.querySelector(Z) : Z;
          if (!Re)
            throw new Error(`The selector "${Z}" did not match any elements`);
          return Y || (Re.textContent = ''), Re;
        }
        parentNode(Z) {
          return Z.parentNode;
        }
        nextSibling(Z) {
          return Z.nextSibling;
        }
        setAttribute(Z, Y, Re, Ge) {
          if (Ge) {
            Y = Ge + ':' + Y;
            const ht = Ee[Ge];
            ht ? Z.setAttributeNS(ht, Y, Re) : Z.setAttribute(Y, Re);
          } else Z.setAttribute(Y, Re);
        }
        removeAttribute(Z, Y, Re) {
          if (Re) {
            const Ge = Ee[Re];
            Ge ? Z.removeAttributeNS(Ge, Y) : Z.removeAttribute(`${Re}:${Y}`);
          } else Z.removeAttribute(Y);
        }
        addClass(Z, Y) {
          Z.classList.add(Y);
        }
        removeClass(Z, Y) {
          Z.classList.remove(Y);
        }
        setStyle(Z, Y, Re, Ge) {
          Ge & (N.JOm.DashCase | N.JOm.Important)
            ? Z.style.setProperty(
                Y,
                Re,
                Ge & N.JOm.Important ? 'important' : ''
              )
            : (Z.style[Y] = Re);
        }
        removeStyle(Z, Y, Re) {
          Re & N.JOm.DashCase ? Z.style.removeProperty(Y) : (Z.style[Y] = '');
        }
        setProperty(Z, Y, Re) {
          Z[Y] = Re;
        }
        setValue(Z, Y) {
          Z.nodeValue = Y;
        }
        listen(Z, Y, Re) {
          return 'string' == typeof Z
            ? this.eventManager.addGlobalEventListener(Z, Y, V(Re))
            : this.eventManager.addEventListener(Z, Y, V(Re));
        }
      }
      function se(Ie) {
        return 'TEMPLATE' === Ie.tagName && void 0 !== Ie.content;
      }
      class k extends Se {
        constructor(Z, Y, Re, Ge) {
          super(Z), (this.component = Re);
          const ht = B(Ge + '-' + Re.id, Re.styles);
          Y.addStyles(ht),
            (this.contentAttr = (function le(Ie) {
              return '_ngcontent-%COMP%'.replace(ye, Ie);
            })(Ge + '-' + Re.id)),
            (this.hostAttr = (function fe(Ie) {
              return '_nghost-%COMP%'.replace(ye, Ie);
            })(Ge + '-' + Re.id));
        }
        applyToHost(Z) {
          super.setAttribute(Z, this.hostAttr, '');
        }
        createElement(Z, Y) {
          const Re = super.createElement(Z, Y);
          return super.setAttribute(Re, this.contentAttr, ''), Re;
        }
      }
      class F extends Se {
        constructor(Z, Y, Re, Ge) {
          super(Z),
            (this.sharedStylesHost = Y),
            (this.hostEl = Re),
            (this.shadowRoot = Re.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const ht = B(Ge.id, Ge.styles);
          for (let mt = 0; mt < ht.length; mt++) {
            const vt = document.createElement('style');
            (vt.textContent = ht[mt]), this.shadowRoot.appendChild(vt);
          }
        }
        nodeOrShadowRoot(Z) {
          return Z === this.hostEl ? this.shadowRoot : Z;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(Z, Y) {
          return super.appendChild(this.nodeOrShadowRoot(Z), Y);
        }
        insertBefore(Z, Y, Re) {
          return super.insertBefore(this.nodeOrShadowRoot(Z), Y, Re);
        }
        removeChild(Z, Y) {
          return super.removeChild(this.nodeOrShadowRoot(Z), Y);
        }
        parentNode(Z) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(Z))
          );
        }
      }
      let J = (() => {
        class Ie extends $e {
          constructor(Y) {
            super(Y);
          }
          supports(Y) {
            return !0;
          }
          addEventListener(Y, Re, Ge) {
            return (
              Y.addEventListener(Re, Ge, !1),
              () => this.removeEventListener(Y, Re, Ge)
            );
          }
          removeEventListener(Y, Re, Ge) {
            return Y.removeEventListener(Re, Ge);
          }
        }
        return (
          (Ie.ɵfac = function (Y) {
            return new (Y || Ie)(N.LFG(o.K0));
          }),
          (Ie.ɵprov = N.Yz7({ token: Ie, factory: Ie.ɵfac })),
          Ie
        );
      })();
      const oe = ['alt', 'control', 'meta', 'shift'],
        he = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS',
        },
        be = {
          alt: (Ie) => Ie.altKey,
          control: (Ie) => Ie.ctrlKey,
          meta: (Ie) => Ie.metaKey,
          shift: (Ie) => Ie.shiftKey,
        };
      let Ye = (() => {
        class Ie extends $e {
          constructor(Y) {
            super(Y);
          }
          supports(Y) {
            return null != Ie.parseEventName(Y);
          }
          addEventListener(Y, Re, Ge) {
            const ht = Ie.parseEventName(Re),
              mt = Ie.eventCallback(ht.fullKey, Ge, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, o.q)().onAndCancel(Y, ht.domEventName, mt)
              );
          }
          static parseEventName(Y) {
            const Re = Y.toLowerCase().split('.'),
              Ge = Re.shift();
            if (0 === Re.length || ('keydown' !== Ge && 'keyup' !== Ge))
              return null;
            const ht = Ie._normalizeKey(Re.pop());
            let mt = '',
              vt = Re.indexOf('code');
            if (
              (vt > -1 && (Re.splice(vt, 1), (mt = 'code.')),
              oe.forEach((an) => {
                const ln = Re.indexOf(an);
                ln > -1 && (Re.splice(ln, 1), (mt += an + '.'));
              }),
              (mt += ht),
              0 != Re.length || 0 === ht.length)
            )
              return null;
            const Zt = {};
            return (Zt.domEventName = Ge), (Zt.fullKey = mt), Zt;
          }
          static matchEventFullKeyCode(Y, Re) {
            let Ge = he[Y.key] || Y.key,
              ht = '';
            return (
              Re.indexOf('code.') > -1 && ((Ge = Y.code), (ht = 'code.')),
              !(null == Ge || !Ge) &&
                ((Ge = Ge.toLowerCase()),
                ' ' === Ge ? (Ge = 'space') : '.' === Ge && (Ge = 'dot'),
                oe.forEach((mt) => {
                  mt !== Ge && (0, be[mt])(Y) && (ht += mt + '.');
                }),
                (ht += Ge),
                ht === Re)
            );
          }
          static eventCallback(Y, Re, Ge) {
            return (ht) => {
              Ie.matchEventFullKeyCode(ht, Y) && Ge.runGuarded(() => Re(ht));
            };
          }
          static _normalizeKey(Y) {
            return 'esc' === Y ? 'escape' : Y;
          }
        }
        return (
          (Ie.ɵfac = function (Y) {
            return new (Y || Ie)(N.LFG(o.K0));
          }),
          (Ie.ɵprov = N.Yz7({ token: Ie, factory: Ie.ɵfac })),
          Ie
        );
      })();
      function Ke(Ie, Z) {
        return (0, N.iPO)({ rootComponent: Ie, ...bt(Z) });
      }
      function bt(Ie) {
        return {
          appProviders: [...Ln, ...(Ie?.providers ?? [])],
          platformProviders: Lt,
        };
      }
      const Lt = [
          { provide: N.Lbi, useValue: o.bD },
          {
            provide: N.g9A,
            useValue: function Ft() {
              z.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: o.K0,
            useFactory: function ze() {
              return (0, N.RDi)(document), document;
            },
            deps: [],
          },
        ],
        Ln = [
          { provide: N.zSh, useValue: 'root' },
          {
            provide: N.qLn,
            useFactory: function Mt() {
              return new N.qLn();
            },
            deps: [],
          },
          { provide: te, useClass: J, multi: !0, deps: [o.K0, N.R0b, N.Lbi] },
          { provide: te, useClass: Ye, multi: !0, deps: [o.K0] },
          { provide: G, useClass: G, deps: [ve, ee, N.AFp] },
          { provide: N.FYo, useExisting: G },
          { provide: me, useExisting: ee },
          { provide: ee, useClass: ee, deps: [o.K0] },
          { provide: ve, useClass: ve, deps: [te, N.R0b] },
          { provide: o.JF, useClass: ue, deps: [] },
          [],
        ];
      let $n = (() => {
        class Ie {
          constructor(Y) {
            this._doc = Y;
          }
          getTitle() {
            return this._doc.title;
          }
          setTitle(Y) {
            this._doc.title = Y || '';
          }
        }
        return (
          (Ie.ɵfac = function (Y) {
            return new (Y || Ie)(N.LFG(o.K0));
          }),
          (Ie.ɵprov = N.Yz7({
            token: Ie,
            factory: function (Y) {
              let Re = null;
              return (
                (Re = Y
                  ? new Y()
                  : (function Jt() {
                      return new $n((0, N.LFG)(o.K0));
                    })()),
                Re
              );
            },
            providedIn: 'root',
          })),
          Ie
        );
      })();
      typeof window < 'u' && window;
    },
    8265: (at, ke, S) => {
      'use strict';
      S.d(ke, {
        gz: () => Mn,
        y6: () => mr,
        m2: () => Nt,
        OD: () => et,
        eC: () => st,
        wm: () => _a,
        wN: () => ga,
        F0: () => yr,
        rH: () => di,
        Od: () => Da,
        Bz: () => Iu,
        Hx: () => sn,
        bU: () => Ea,
        aF: () => ri,
      });
      var o = S(8256),
        N = S(2076),
        j = S(7669);
      function z(...d) {
        const f = (0, j.yG)(d);
        return (0, N.D)(d, f);
      }
      var ge = S(1135);
      const re = (0, S(3888).d)(
        (d) =>
          function () {
            d(this),
              (this.name = 'EmptyError'),
              (this.message = 'no elements in sequence');
          }
      );
      var Fe = S(9751),
        Ae = S(4742),
        Pe = S(4671),
        De = S(3268),
        we = S(1810),
        ue = S(5403),
        te = S(9672);
      function ve(...d) {
        const f = (0, j.yG)(d),
          l = (0, j.jO)(d),
          { args: p, keys: E } = (0, Ae.D)(d);
        if (0 === p.length) return (0, N.D)([], f);
        const A = new Fe.y(
          (function $e(d, f, l = Pe.y) {
            return (p) => {
              me(
                f,
                () => {
                  const { length: E } = d,
                    A = new Array(E);
                  let P = E,
                    ce = E;
                  for (let je = 0; je < E; je++)
                    me(
                      f,
                      () => {
                        const ut = (0, N.D)(d[je], f);
                        let yt = !1;
                        ut.subscribe(
                          (0, ue.x)(
                            p,
                            (Et) => {
                              (A[je] = Et),
                                yt || ((yt = !0), ce--),
                                ce || p.next(l(A.slice()));
                            },
                            () => {
                              --P || p.complete();
                            }
                          )
                        );
                      },
                      p
                    );
                },
                p
              );
            };
          })(p, f, E ? (P) => (0, we.n)(E, P) : Pe.y)
        );
        return l ? A.pipe((0, De.Z)(l)) : A;
      }
      function me(d, f, l) {
        d ? (0, te.f)(l, d, f) : f();
      }
      var ee = S(8189);
      function Ee(...d) {
        return (function Ve() {
          return (0, ee.J)(1);
        })()((0, N.D)(d, (0, j.yG)(d)));
      }
      var ye = S(8421);
      function ae(d) {
        return new Fe.y((f) => {
          (0, ye.Xf)(d()).subscribe(f);
        });
      }
      var Te = S(9635),
        de = S(576);
      function q(d, f) {
        const l = (0, de.m)(d) ? d : () => d,
          p = (E) => E.error(l());
        return new Fe.y(f ? (E) => f.schedule(p, 0, E) : p);
      }
      var le = S(515),
        fe = S(727),
        B = S(4482);
      function V() {
        return (0, B.e)((d, f) => {
          let l = null;
          d._refCount++;
          const p = (0, ue.x)(f, void 0, void 0, void 0, () => {
            if (!d || d._refCount <= 0 || 0 < --d._refCount)
              return void (l = null);
            const E = d._connection,
              A = l;
            (l = null),
              E && (!A || E === A) && E.unsubscribe(),
              f.unsubscribe();
          });
          d.subscribe(p), p.closed || (l = d.connect());
        });
      }
      class W extends Fe.y {
        constructor(f, l) {
          super(),
            (this.source = f),
            (this.subjectFactory = l),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            (0, B.A)(f) && (this.lift = f.lift);
        }
        _subscribe(f) {
          return this.getSubject().subscribe(f);
        }
        getSubject() {
          const f = this._subject;
          return (
            (!f || f.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: f } = this;
          (this._subject = this._connection = null), f?.unsubscribe();
        }
        connect() {
          let f = this._connection;
          if (!f) {
            f = this._connection = new fe.w0();
            const l = this.getSubject();
            f.add(
              this.source.subscribe(
                (0, ue.x)(
                  l,
                  void 0,
                  () => {
                    this._teardown(), l.complete();
                  },
                  (p) => {
                    this._teardown(), l.error(p);
                  },
                  () => this._teardown()
                )
              )
            ),
              f.closed && ((this._connection = null), (f = fe.w0.EMPTY));
          }
          return f;
        }
        refCount() {
          return V()(this);
        }
      }
      var G = S(7579),
        Se = S(6895),
        pe = S(4004),
        We = S(3900),
        se = S(5698),
        F = S(9300),
        J = S(5577);
      function oe(d) {
        return (0, B.e)((f, l) => {
          let p = !1;
          f.subscribe(
            (0, ue.x)(
              l,
              (E) => {
                (p = !0), l.next(E);
              },
              () => {
                p || l.next(d), l.complete();
              }
            )
          );
        });
      }
      function he(d = be) {
        return (0, B.e)((f, l) => {
          let p = !1;
          f.subscribe(
            (0, ue.x)(
              l,
              (E) => {
                (p = !0), l.next(E);
              },
              () => (p ? l.complete() : l.error(d()))
            )
          );
        });
      }
      function be() {
        return new re();
      }
      function Ye(d, f) {
        const l = arguments.length >= 2;
        return (p) =>
          p.pipe(
            d ? (0, F.h)((E, A) => d(E, A, p)) : Pe.y,
            (0, se.q)(1),
            l ? oe(f) : he(() => new re())
          );
      }
      function nt(d, f) {
        return (0, de.m)(f) ? (0, J.z)(d, f, 1) : (0, J.z)(d, 1);
      }
      var Ke = S(8505);
      function ft(d) {
        return (0, B.e)((f, l) => {
          let A,
            p = null,
            E = !1;
          (p = f.subscribe(
            (0, ue.x)(l, void 0, void 0, (P) => {
              (A = (0, ye.Xf)(d(P, ft(d)(f)))),
                p ? (p.unsubscribe(), (p = null), A.subscribe(l)) : (E = !0);
            })
          )),
            E && (p.unsubscribe(), (p = null), A.subscribe(l));
        });
      }
      function bt(d, f, l, p, E) {
        return (A, P) => {
          let ce = l,
            je = f,
            ut = 0;
          A.subscribe(
            (0, ue.x)(
              P,
              (yt) => {
                const Et = ut++;
                (je = ce ? d(je, yt, Et) : ((ce = !0), yt)), p && P.next(je);
              },
              E &&
                (() => {
                  ce && P.next(je), P.complete();
                })
            )
          );
        };
      }
      function lt(d, f) {
        return (0, B.e)(bt(d, f, arguments.length >= 2, !0));
      }
      function Ft(d) {
        return d <= 0
          ? () => le.E
          : (0, B.e)((f, l) => {
              let p = [];
              f.subscribe(
                (0, ue.x)(
                  l,
                  (E) => {
                    p.push(E), d < p.length && p.shift();
                  },
                  () => {
                    for (const E of p) l.next(E);
                    l.complete();
                  },
                  void 0,
                  () => {
                    p = null;
                  }
                )
              );
            });
      }
      function Mt(d, f) {
        const l = arguments.length >= 2;
        return (p) =>
          p.pipe(
            d ? (0, F.h)((E, A) => d(E, A, p)) : Pe.y,
            Ft(1),
            l ? oe(f) : he(() => new re())
          );
      }
      function bn(d) {
        return (0, B.e)((f, l) => {
          try {
            f.subscribe(l);
          } finally {
            l.add(d);
          }
        });
      }
      var jn = S(1481);
      const st = 'primary',
        Ln = Symbol('RouteTitle');
      class Pt {
        constructor(f) {
          this.params = f || {};
        }
        has(f) {
          return Object.prototype.hasOwnProperty.call(this.params, f);
        }
        get(f) {
          if (this.has(f)) {
            const l = this.params[f];
            return Array.isArray(l) ? l[0] : l;
          }
          return null;
        }
        getAll(f) {
          if (this.has(f)) {
            const l = this.params[f];
            return Array.isArray(l) ? l : [l];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function cn(d) {
        return new Pt(d);
      }
      function Xt(d, f, l) {
        const p = l.path.split('/');
        if (
          p.length > d.length ||
          ('full' === l.pathMatch && (f.hasChildren() || p.length < d.length))
        )
          return null;
        const E = {};
        for (let A = 0; A < p.length; A++) {
          const P = p[A],
            ce = d[A];
          if (P.startsWith(':')) E[P.substring(1)] = ce;
          else if (P !== ce.path) return null;
        }
        return { consumed: d.slice(0, p.length), posParams: E };
      }
      function Jt(d, f) {
        const l = d ? Object.keys(d) : void 0,
          p = f ? Object.keys(f) : void 0;
        if (!l || !p || l.length != p.length) return !1;
        let E;
        for (let A = 0; A < l.length; A++)
          if (((E = l[A]), !$n(d[E], f[E]))) return !1;
        return !0;
      }
      function $n(d, f) {
        if (Array.isArray(d) && Array.isArray(f)) {
          if (d.length !== f.length) return !1;
          const l = [...d].sort(),
            p = [...f].sort();
          return l.every((E, A) => p[A] === E);
        }
        return d === f;
      }
      function Ut(d) {
        return Array.prototype.concat.apply([], d);
      }
      function ct(d) {
        return d.length > 0 ? d[d.length - 1] : null;
      }
      function Vt(d, f) {
        for (const l in d) d.hasOwnProperty(l) && f(d[l], l);
      }
      function Yt(d) {
        return (0, o.CqO)(d)
          ? d
          : (0, o.QGY)(d)
          ? (0, N.D)(Promise.resolve(d))
          : z(d);
      }
      const At = !1,
        un = {
          exact: function tt(d, f, l) {
            if (
              !jt(d.segments, f.segments) ||
              !Gn(d.segments, f.segments, l) ||
              d.numberOfChildren !== f.numberOfChildren
            )
              return !1;
            for (const p in f.children)
              if (!d.children[p] || !tt(d.children[p], f.children[p], l))
                return !1;
            return !0;
          },
          subset: tr,
        },
        In = {
          exact: function Kt(d, f) {
            return Jt(d, f);
          },
          subset: function kt(d, f) {
            return (
              Object.keys(f).length <= Object.keys(d).length &&
              Object.keys(f).every((l) => $n(d[l], f[l]))
            );
          },
          ignored: () => !0,
        };
      function pt(d, f, l) {
        return (
          un[l.paths](d.root, f.root, l.matrixParams) &&
          In[l.queryParams](d.queryParams, f.queryParams) &&
          !('exact' === l.fragment && d.fragment !== f.fragment)
        );
      }
      function tr(d, f, l) {
        return Bn(d, f, f.segments, l);
      }
      function Bn(d, f, l, p) {
        if (d.segments.length > l.length) {
          const E = d.segments.slice(0, l.length);
          return !(!jt(E, l) || f.hasChildren() || !Gn(E, l, p));
        }
        if (d.segments.length === l.length) {
          if (!jt(d.segments, l) || !Gn(d.segments, l, p)) return !1;
          for (const E in f.children)
            if (!d.children[E] || !tr(d.children[E], f.children[E], p))
              return !1;
          return !0;
        }
        {
          const E = l.slice(0, d.segments.length),
            A = l.slice(d.segments.length);
          return (
            !!(jt(d.segments, E) && Gn(d.segments, E, p) && d.children[st]) &&
            Bn(d.children[st], f, A, p)
          );
        }
      }
      function Gn(d, f, l) {
        return f.every((p, E) => In[l](d[E].parameters, p.parameters));
      }
      class _n {
        constructor(f = new wt([], {}), l = {}, p = null) {
          (this.root = f), (this.queryParams = l), (this.fragment = p);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = cn(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return wn.serialize(this);
        }
      }
      class wt {
        constructor(f, l) {
          (this.segments = f),
            (this.children = l),
            (this.parent = null),
            Vt(l, (p, E) => (p.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return An(this);
        }
      }
      class nr {
        constructor(f, l) {
          (this.path = f), (this.parameters = l);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = cn(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return Y(this);
        }
      }
      function jt(d, f) {
        return d.length === f.length && d.every((l, p) => l.path === f[p].path);
      }
      let sn = (() => {
        class d {}
        return (
          (d.ɵfac = function (l) {
            return new (l || d)();
          }),
          (d.ɵprov = o.Yz7({
            token: d,
            factory: function () {
              return new Dt();
            },
            providedIn: 'root',
          })),
          d
        );
      })();
      class Dt {
        parse(f) {
          const l = new ir(f);
          return new _n(
            l.parseRootSegment(),
            l.parseQueryParams(),
            l.parseFragment()
          );
        }
        serialize(f) {
          const l = `/${Vn(f.root, !0)}`,
            p = (function Ge(d) {
              const f = Object.keys(d)
                .map((l) => {
                  const p = d[l];
                  return Array.isArray(p)
                    ? p.map((E) => `${hn(l)}=${hn(E)}`).join('&')
                    : `${hn(l)}=${hn(p)}`;
                })
                .filter((l) => !!l);
              return f.length ? `?${f.join('&')}` : '';
            })(f.queryParams);
          return `${l}${p}${
            'string' == typeof f.fragment
              ? `#${(function Dr(d) {
                  return encodeURI(d);
                })(f.fragment)}`
              : ''
          }`;
        }
      }
      const wn = new Dt();
      function An(d) {
        return d.segments.map((f) => Y(f)).join('/');
      }
      function Vn(d, f) {
        if (!d.hasChildren()) return An(d);
        if (f) {
          const l = d.children[st] ? Vn(d.children[st], !1) : '',
            p = [];
          return (
            Vt(d.children, (E, A) => {
              A !== st && p.push(`${A}:${Vn(E, !1)}`);
            }),
            p.length > 0 ? `${l}(${p.join('//')})` : l
          );
        }
        {
          const l = (function on(d, f) {
            let l = [];
            return (
              Vt(d.children, (p, E) => {
                E === st && (l = l.concat(f(p, E)));
              }),
              Vt(d.children, (p, E) => {
                E !== st && (l = l.concat(f(p, E)));
              }),
              l
            );
          })(d, (p, E) =>
            E === st ? [Vn(d.children[st], !1)] : [`${E}:${Vn(p, !1)}`]
          );
          return 1 === Object.keys(d.children).length && null != d.children[st]
            ? `${An(d)}/${l[0]}`
            : `${An(d)}/(${l.join('//')})`;
        }
      }
      function or(d) {
        return encodeURIComponent(d)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function hn(d) {
        return or(d).replace(/%3B/gi, ';');
      }
      function dr(d) {
        return or(d)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function Ie(d) {
        return decodeURIComponent(d);
      }
      function Z(d) {
        return Ie(d.replace(/\+/g, '%20'));
      }
      function Y(d) {
        return `${dr(d.path)}${(function Re(d) {
          return Object.keys(d)
            .map((f) => `;${dr(f)}=${dr(d[f])}`)
            .join('');
        })(d.parameters)}`;
      }
      const ht = /^[^\/()?;=#]+/;
      function mt(d) {
        const f = d.match(ht);
        return f ? f[0] : '';
      }
      const vt = /^[^=?&#]+/,
        an = /^[^&#]+/;
      class ir {
        constructor(f) {
          (this.url = f), (this.remaining = f);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining ||
            this.peekStartsWith('?') ||
            this.peekStartsWith('#')
              ? new wt([], {})
              : new wt([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const f = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(f);
            } while (this.consumeOptional('&'));
          return f;
        }
        parseFragment() {
          return this.consumeOptional('#')
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const f = [];
          for (
            this.peekStartsWith('(') || f.push(this.parseSegment());
            this.peekStartsWith('/') &&
            !this.peekStartsWith('//') &&
            !this.peekStartsWith('/(');

          )
            this.capture('/'), f.push(this.parseSegment());
          let l = {};
          this.peekStartsWith('/(') &&
            (this.capture('/'), (l = this.parseParens(!0)));
          let p = {};
          return (
            this.peekStartsWith('(') && (p = this.parseParens(!1)),
            (f.length > 0 || Object.keys(l).length > 0) &&
              (p[st] = new wt(f, l)),
            p
          );
        }
        parseSegment() {
          const f = mt(this.remaining);
          if ('' === f && this.peekStartsWith(';')) throw new o.vHH(4009, At);
          return this.capture(f), new nr(Ie(f), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const f = {};
          for (; this.consumeOptional(';'); ) this.parseParam(f);
          return f;
        }
        parseParam(f) {
          const l = mt(this.remaining);
          if (!l) return;
          this.capture(l);
          let p = '';
          if (this.consumeOptional('=')) {
            const E = mt(this.remaining);
            E && ((p = E), this.capture(p));
          }
          f[Ie(l)] = Ie(p);
        }
        parseQueryParam(f) {
          const l = (function Zt(d) {
            const f = d.match(vt);
            return f ? f[0] : '';
          })(this.remaining);
          if (!l) return;
          this.capture(l);
          let p = '';
          if (this.consumeOptional('=')) {
            const P = (function ln(d) {
              const f = d.match(an);
              return f ? f[0] : '';
            })(this.remaining);
            P && ((p = P), this.capture(p));
          }
          const E = Z(l),
            A = Z(p);
          if (f.hasOwnProperty(E)) {
            let P = f[E];
            Array.isArray(P) || ((P = [P]), (f[E] = P)), P.push(A);
          } else f[E] = A;
        }
        parseParens(f) {
          const l = {};
          for (
            this.capture('(');
            !this.consumeOptional(')') && this.remaining.length > 0;

          ) {
            const p = mt(this.remaining),
              E = this.remaining[p.length];
            if ('/' !== E && ')' !== E && ';' !== E) throw new o.vHH(4010, At);
            let A;
            p.indexOf(':') > -1
              ? ((A = p.slice(0, p.indexOf(':'))),
                this.capture(A),
                this.capture(':'))
              : f && (A = st);
            const P = this.parseChildren();
            (l[A] = 1 === Object.keys(P).length ? P[st] : new wt([], P)),
              this.consumeOptional('//');
          }
          return l;
        }
        peekStartsWith(f) {
          return this.remaining.startsWith(f);
        }
        consumeOptional(f) {
          return (
            !!this.peekStartsWith(f) &&
            ((this.remaining = this.remaining.substring(f.length)), !0)
          );
        }
        capture(f) {
          if (!this.consumeOptional(f)) throw new o.vHH(4011, At);
        }
      }
      function Tn(d) {
        return d.segments.length > 0 ? new wt([], { [st]: d }) : d;
      }
      function pn(d) {
        const f = {};
        for (const p of Object.keys(d.children)) {
          const A = pn(d.children[p]);
          (A.segments.length > 0 || A.hasChildren()) && (f[p] = A);
        }
        return (function On(d) {
          if (1 === d.numberOfChildren && d.children[st]) {
            const f = d.children[st];
            return new wt(d.segments.concat(f.segments), f.children);
          }
          return d;
        })(new wt(d.segments, f));
      }
      function Sn(d) {
        return d instanceof _n;
      }
      function Cr(d, f, l, p, E) {
        if (0 === l.length) return yn(f.root, f.root, f.root, p, E);
        const A = (function en(d) {
          if ('string' == typeof d[0] && 1 === d.length && '/' === d[0])
            return new mn(!0, 0, d);
          let f = 0,
            l = !1;
          const p = d.reduce((E, A, P) => {
            if ('object' == typeof A && null != A) {
              if (A.outlets) {
                const ce = {};
                return (
                  Vt(A.outlets, (je, ut) => {
                    ce[ut] = 'string' == typeof je ? je.split('/') : je;
                  }),
                  [...E, { outlets: ce }]
                );
              }
              if (A.segmentPath) return [...E, A.segmentPath];
            }
            return 'string' != typeof A
              ? [...E, A]
              : 0 === P
              ? (A.split('/').forEach((ce, je) => {
                  (0 == je && '.' === ce) ||
                    (0 == je && '' === ce
                      ? (l = !0)
                      : '..' === ce
                      ? f++
                      : '' != ce && E.push(ce));
                }),
                E)
              : [...E, A];
          }, []);
          return new mn(l, f, p);
        })(l);
        return A.toRoot()
          ? yn(f.root, f.root, new wt([], {}), p, E)
          : (function P(je) {
              const ut = (function $(d, f, l, p) {
                  if (d.isAbsolute) return new Rn(f.root, !0, 0);
                  if (-1 === p) return new Rn(l, l === f.root, 0);
                  return (function U(d, f, l) {
                    let p = d,
                      E = f,
                      A = l;
                    for (; A > E; ) {
                      if (((A -= E), (p = p.parent), !p))
                        throw new o.vHH(4005, !1);
                      E = p.segments.length;
                    }
                    return new Rn(p, !1, E - A);
                  })(l, p + (sr(d.commands[0]) ? 0 : 1), d.numberOfDoubleDots);
                })(A, f, d.snapshot?._urlSegment, je),
                yt = ut.processChildren
                  ? L(ut.segmentGroup, ut.index, A.commands)
                  : Ce(ut.segmentGroup, ut.index, A.commands);
              return yn(f.root, ut.segmentGroup, yt, p, E);
            })(d.snapshot?._lastPathIndex);
      }
      function sr(d) {
        return (
          'object' == typeof d && null != d && !d.outlets && !d.segmentPath
        );
      }
      function ar(d) {
        return 'object' == typeof d && null != d && d.outlets;
      }
      function yn(d, f, l, p, E) {
        let P,
          A = {};
        p &&
          Vt(p, (je, ut) => {
            A[ut] = Array.isArray(je) ? je.map((yt) => `${yt}`) : `${je}`;
          }),
          (P = d === f ? l : Tt(d, f, l));
        const ce = Tn(pn(P));
        return new _n(ce, A, E);
      }
      function Tt(d, f, l) {
        const p = {};
        return (
          Vt(d.children, (E, A) => {
            p[A] = E === f ? l : Tt(E, f, l);
          }),
          new wt(d.segments, p)
        );
      }
      class mn {
        constructor(f, l, p) {
          if (
            ((this.isAbsolute = f),
            (this.numberOfDoubleDots = l),
            (this.commands = p),
            f && p.length > 0 && sr(p[0]))
          )
            throw new o.vHH(4003, !1);
          const E = p.find(ar);
          if (E && E !== ct(p)) throw new o.vHH(4004, !1);
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            '/' == this.commands[0]
          );
        }
      }
      class Rn {
        constructor(f, l, p) {
          (this.segmentGroup = f), (this.processChildren = l), (this.index = p);
        }
      }
      function Ce(d, f, l) {
        if (
          (d || (d = new wt([], {})),
          0 === d.segments.length && d.hasChildren())
        )
          return L(d, f, l);
        const p = (function Q(d, f, l) {
            let p = 0,
              E = f;
            const A = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; E < d.segments.length; ) {
              if (p >= l.length) return A;
              const P = d.segments[E],
                ce = l[p];
              if (ar(ce)) break;
              const je = `${ce}`,
                ut = p < l.length - 1 ? l[p + 1] : null;
              if (E > 0 && void 0 === je) break;
              if (je && ut && 'object' == typeof ut && void 0 === ut.outlets) {
                if (!rt(je, ut, P)) return A;
                p += 2;
              } else {
                if (!rt(je, {}, P)) return A;
                p++;
              }
              E++;
            }
            return { match: !0, pathIndex: E, commandIndex: p };
          })(d, f, l),
          E = l.slice(p.commandIndex);
        if (p.match && p.pathIndex < d.segments.length) {
          const A = new wt(d.segments.slice(0, p.pathIndex), {});
          return (
            (A.children[st] = new wt(
              d.segments.slice(p.pathIndex),
              d.children
            )),
            L(A, 0, E)
          );
        }
        return p.match && 0 === E.length
          ? new wt(d.segments, {})
          : p.match && !d.hasChildren()
          ? ie(d, f, l)
          : p.match
          ? L(d, 0, E)
          : ie(d, f, l);
      }
      function L(d, f, l) {
        if (0 === l.length) return new wt(d.segments, {});
        {
          const p = (function K(d) {
              return ar(d[0]) ? d[0].outlets : { [st]: d };
            })(l),
            E = {};
          return (
            Vt(p, (A, P) => {
              'string' == typeof A && (A = [A]),
                null !== A && (E[P] = Ce(d.children[P], f, A));
            }),
            Vt(d.children, (A, P) => {
              void 0 === p[P] && (E[P] = A);
            }),
            new wt(d.segments, E)
          );
        }
      }
      function ie(d, f, l) {
        const p = d.segments.slice(0, f);
        let E = 0;
        for (; E < l.length; ) {
          const A = l[E];
          if (ar(A)) {
            const je = Be(A.outlets);
            return new wt(p, je);
          }
          if (0 === E && sr(l[0])) {
            p.push(new nr(d.segments[f].path, xe(l[0]))), E++;
            continue;
          }
          const P = ar(A) ? A.outlets[st] : `${A}`,
            ce = E < l.length - 1 ? l[E + 1] : null;
          P && ce && sr(ce)
            ? (p.push(new nr(P, xe(ce))), (E += 2))
            : (p.push(new nr(P, {})), E++);
        }
        return new wt(p, {});
      }
      function Be(d) {
        const f = {};
        return (
          Vt(d, (l, p) => {
            'string' == typeof l && (l = [l]),
              null !== l && (f[p] = ie(new wt([], {}), 0, l));
          }),
          f
        );
      }
      function xe(d) {
        const f = {};
        return Vt(d, (l, p) => (f[p] = `${l}`)), f;
      }
      function rt(d, f, l) {
        return d == l.path && Jt(f, l.parameters);
      }
      class ot {
        constructor(f, l) {
          (this.id = f), (this.url = l);
        }
      }
      class et extends ot {
        constructor(f, l, p = 'imperative', E = null) {
          super(f, l),
            (this.type = 0),
            (this.navigationTrigger = p),
            (this.restoredState = E);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Nt extends ot {
        constructor(f, l, p) {
          super(f, l), (this.urlAfterRedirects = p), (this.type = 1);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Ht extends ot {
        constructor(f, l, p, E) {
          super(f, l), (this.reason = p), (this.code = E), (this.type = 2);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Hn extends ot {
        constructor(f, l, p, E) {
          super(f, l), (this.error = p), (this.target = E), (this.type = 3);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class xn extends ot {
        constructor(f, l, p, E) {
          super(f, l),
            (this.urlAfterRedirects = p),
            (this.state = E),
            (this.type = 4);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class dn extends ot {
        constructor(f, l, p, E) {
          super(f, l),
            (this.urlAfterRedirects = p),
            (this.state = E),
            (this.type = 7);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class _r extends ot {
        constructor(f, l, p, E, A) {
          super(f, l),
            (this.urlAfterRedirects = p),
            (this.state = E),
            (this.shouldActivate = A),
            (this.type = 8);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Zn extends ot {
        constructor(f, l, p, E) {
          super(f, l),
            (this.urlAfterRedirects = p),
            (this.state = E),
            (this.type = 5);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class lr extends ot {
        constructor(f, l, p, E) {
          super(f, l),
            (this.urlAfterRedirects = p),
            (this.state = E),
            (this.type = 6);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Mr {
        constructor(f) {
          (this.route = f), (this.type = 9);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class go {
        constructor(f) {
          (this.route = f), (this.type = 10);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Wt {
        constructor(f) {
          (this.snapshot = f), (this.type = 11);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Xo {
        constructor(f) {
          (this.snapshot = f), (this.type = 12);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Jr {
        constructor(f) {
          (this.snapshot = f), (this.type = 13);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Ro {
        constructor(f) {
          (this.snapshot = f), (this.type = 14);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Lr {
        constructor(f, l, p) {
          (this.routerEvent = f),
            (this.position = l),
            (this.anchor = p),
            (this.type = 15);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class gr {
        constructor(f) {
          this._root = f;
        }
        get root() {
          return this._root.value;
        }
        parent(f) {
          const l = this.pathFromRoot(f);
          return l.length > 1 ? l[l.length - 2] : null;
        }
        children(f) {
          const l = vn(f, this._root);
          return l ? l.children.map((p) => p.value) : [];
        }
        firstChild(f) {
          const l = vn(f, this._root);
          return l && l.children.length > 0 ? l.children[0].value : null;
        }
        siblings(f) {
          const l = mo(f, this._root);
          return l.length < 2
            ? []
            : l[l.length - 2].children
                .map((E) => E.value)
                .filter((E) => E !== f);
        }
        pathFromRoot(f) {
          return mo(f, this._root).map((l) => l.value);
        }
      }
      function vn(d, f) {
        if (d === f.value) return f;
        for (const l of f.children) {
          const p = vn(d, l);
          if (p) return p;
        }
        return null;
      }
      function mo(d, f) {
        if (d === f.value) return [f];
        for (const l of f.children) {
          const p = mo(d, l);
          if (p.length) return p.unshift(f), p;
        }
        return [];
      }
      class tn {
        constructor(f, l) {
          (this.value = f), (this.children = l);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Fn(d) {
        const f = {};
        return d && d.children.forEach((l) => (f[l.value.outlet] = l)), f;
      }
      class Ar extends gr {
        constructor(f, l) {
          super(f), (this.snapshot = l), eo(this, f);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function Tr(d, f) {
        const l = (function Or(d, f) {
            const P = new $r([], {}, {}, '', {}, st, f, null, d.root, -1, {});
            return new xo('', new tn(P, []));
          })(d, f),
          p = new ge.X([new nr('', {})]),
          E = new ge.X({}),
          A = new ge.X({}),
          P = new ge.X({}),
          ce = new ge.X(''),
          je = new Mn(p, E, P, ce, A, st, f, l.root);
        return (je.snapshot = l.root), new Ar(new tn(je, []), l);
      }
      class Mn {
        constructor(f, l, p, E, A, P, ce, je) {
          (this.url = f),
            (this.params = l),
            (this.queryParams = p),
            (this.fragment = E),
            (this.data = A),
            (this.outlet = P),
            (this.component = ce),
            (this.title =
              this.data?.pipe((0, pe.U)((ut) => ut[Ln])) ?? z(void 0)),
            (this._futureSnapshot = je);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe((0, pe.U)((f) => cn(f)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, pe.U)((f) => cn(f))
              )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function kr(d, f = 'emptyOnly') {
        const l = d.pathFromRoot;
        let p = 0;
        if ('always' !== f)
          for (p = l.length - 1; p >= 1; ) {
            const E = l[p],
              A = l[p - 1];
            if (E.routeConfig && '' === E.routeConfig.path) p--;
            else {
              if (A.component) break;
              p--;
            }
          }
        return (function vo(d) {
          return d.reduce(
            (f, l) => ({
              params: { ...f.params, ...l.params },
              data: { ...f.data, ...l.data },
              resolve: {
                ...l.data,
                ...f.resolve,
                ...l.routeConfig?.data,
                ...l._resolvedData,
              },
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(l.slice(p));
      }
      class $r {
        constructor(f, l, p, E, A, P, ce, je, ut, yt, Et) {
          (this.url = f),
            (this.params = l),
            (this.queryParams = p),
            (this.fragment = E),
            (this.data = A),
            (this.outlet = P),
            (this.component = ce),
            (this.routeConfig = je),
            (this._urlSegment = ut),
            (this._lastPathIndex = yt),
            (this._resolve = Et);
        }
        get title() {
          return this.data?.[Ln];
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = cn(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = cn(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((p) => p.toString())
            .join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class xo extends gr {
        constructor(f, l) {
          super(l), (this.url = f), eo(this, l);
        }
        toString() {
          return to(this._root);
        }
      }
      function eo(d, f) {
        (f.value._routerState = d), f.children.forEach((l) => eo(d, l));
      }
      function to(d) {
        const f =
          d.children.length > 0 ? ` { ${d.children.map(to).join(', ')} } ` : '';
        return `${d.value}${f}`;
      }
      function Fo(d) {
        if (d.snapshot) {
          const f = d.snapshot,
            l = d._futureSnapshot;
          (d.snapshot = l),
            Jt(f.queryParams, l.queryParams) ||
              d.queryParams.next(l.queryParams),
            f.fragment !== l.fragment && d.fragment.next(l.fragment),
            Jt(f.params, l.params) || d.params.next(l.params),
            (function kn(d, f) {
              if (d.length !== f.length) return !1;
              for (let l = 0; l < d.length; ++l) if (!Jt(d[l], f[l])) return !1;
              return !0;
            })(f.url, l.url) || d.url.next(l.url),
            Jt(f.data, l.data) || d.data.next(l.data);
        } else
          (d.snapshot = d._futureSnapshot), d.data.next(d._futureSnapshot.data);
      }
      function no(d, f) {
        const l =
          Jt(d.params, f.params) &&
          (function rr(d, f) {
            return (
              jt(d, f) && d.every((l, p) => Jt(l.parameters, f[p].parameters))
            );
          })(d.url, f.url);
        return (
          l &&
          !(!d.parent != !f.parent) &&
          (!d.parent || no(d.parent, f.parent))
        );
      }
      function jr(d, f, l) {
        if (l && d.shouldReuseRoute(f.value, l.value.snapshot)) {
          const p = l.value;
          p._futureSnapshot = f.value;
          const E = (function Di(d, f, l) {
            return f.children.map((p) => {
              for (const E of l.children)
                if (d.shouldReuseRoute(p.value, E.value.snapshot))
                  return jr(d, p, E);
              return jr(d, p);
            });
          })(d, f, l);
          return new tn(p, E);
        }
        {
          if (d.shouldAttach(f.value)) {
            const A = d.retrieve(f.value);
            if (null !== A) {
              const P = A.route;
              return (
                (P.value._futureSnapshot = f.value),
                (P.children = f.children.map((ce) => jr(d, ce))),
                P
              );
            }
          }
          const p = (function li(d) {
              return new Mn(
                new ge.X(d.url),
                new ge.X(d.params),
                new ge.X(d.queryParams),
                new ge.X(d.fragment),
                new ge.X(d.data),
                d.outlet,
                d.component,
                d
              );
            })(f.value),
            E = f.children.map((A) => jr(d, A));
          return new tn(p, E);
        }
      }
      const yo = 'ngNavigationCancelingError';
      function Zo(d, f) {
        const { redirectTo: l, navigationBehaviorOptions: p } = Sn(f)
            ? { redirectTo: f, navigationBehaviorOptions: void 0 }
            : f,
          E = Po(!1, 0, f);
        return (E.url = l), (E.navigationBehaviorOptions = p), E;
      }
      function Po(d, f, l) {
        const p = new Error('NavigationCancelingError: ' + (d || ''));
        return (p[yo] = !0), (p.cancellationCode = f), l && (p.url = l), p;
      }
      function Do(d) {
        return ro(d) && Sn(d.url);
      }
      function ro(d) {
        return d && d[yo];
      }
      class Er {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.injector = null),
            (this.children = new mr()),
            (this.attachRef = null);
        }
      }
      let mr = (() => {
        class d {
          constructor() {
            this.contexts = new Map();
          }
          onChildOutletCreated(l, p) {
            const E = this.getOrCreateContext(l);
            (E.outlet = p), this.contexts.set(l, E);
          }
          onChildOutletDestroyed(l) {
            const p = this.getContext(l);
            p && ((p.outlet = null), (p.attachRef = null));
          }
          onOutletDeactivated() {
            const l = this.contexts;
            return (this.contexts = new Map()), l;
          }
          onOutletReAttached(l) {
            this.contexts = l;
          }
          getOrCreateContext(l) {
            let p = this.getContext(l);
            return p || ((p = new Er()), this.contexts.set(l, p)), p;
          }
          getContext(l) {
            return this.contexts.get(l) || null;
          }
        }
        return (
          (d.ɵfac = function (l) {
            return new (l || d)();
          }),
          (d.ɵprov = o.Yz7({ token: d, factory: d.ɵfac, providedIn: 'root' })),
          d
        );
      })();
      const vr = !1;
      let Qo = (() => {
        class d {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = st),
              (this.activateEvents = new o.vpe()),
              (this.deactivateEvents = new o.vpe()),
              (this.attachEvents = new o.vpe()),
              (this.detachEvents = new o.vpe()),
              (this.parentContexts = (0, o.f3M)(mr)),
              (this.location = (0, o.f3M)(o.s_b)),
              (this.changeDetector = (0, o.f3M)(o.sBO)),
              (this.environmentInjector = (0, o.f3M)(o.lqb));
          }
          ngOnChanges(l) {
            if (l.name) {
              const { firstChange: p, previousValue: E } = l.name;
              if (p) return;
              this.isTrackedInParentContexts(E) &&
                (this.deactivate(),
                this.parentContexts.onChildOutletDestroyed(E)),
                this.initializeOutletWithName();
            }
          }
          ngOnDestroy() {
            this.isTrackedInParentContexts(this.name) &&
              this.parentContexts.onChildOutletDestroyed(this.name);
          }
          isTrackedInParentContexts(l) {
            return this.parentContexts.getContext(l)?.outlet === this;
          }
          ngOnInit() {
            this.initializeOutletWithName();
          }
          initializeOutletWithName() {
            if (
              (this.parentContexts.onChildOutletCreated(this.name, this),
              this.activated)
            )
              return;
            const l = this.parentContexts.getContext(this.name);
            l?.route &&
              (l.attachRef
                ? this.attach(l.attachRef, l.route)
                : this.activateWith(l.route, l.injector));
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new o.vHH(4012, vr);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new o.vHH(4012, vr);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new o.vHH(4012, vr);
            this.location.detach();
            const l = this.activated;
            return (
              (this.activated = null),
              (this._activatedRoute = null),
              this.detachEvents.emit(l.instance),
              l
            );
          }
          attach(l, p) {
            (this.activated = l),
              (this._activatedRoute = p),
              this.location.insert(l.hostView),
              this.attachEvents.emit(l.instance);
          }
          deactivate() {
            if (this.activated) {
              const l = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(l);
            }
          }
          activateWith(l, p) {
            if (this.isActivated) throw new o.vHH(4013, vr);
            this._activatedRoute = l;
            const E = this.location,
              P = l.snapshot.component,
              ce = this.parentContexts.getOrCreateContext(this.name).children,
              je = new cr(l, ce, E.injector);
            if (
              p &&
              (function oo(d) {
                return !!d.resolveComponentFactory;
              })(p)
            ) {
              const ut = p.resolveComponentFactory(P);
              this.activated = E.createComponent(ut, E.length, je);
            } else
              this.activated = E.createComponent(P, {
                index: E.length,
                injector: je,
                environmentInjector: p ?? this.environmentInjector,
              });
            this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (d.ɵfac = function (l) {
            return new (l || d)();
          }),
          (d.ɵdir = o.lG2({
            type: d,
            selectors: [['router-outlet']],
            inputs: { name: 'name' },
            outputs: {
              activateEvents: 'activate',
              deactivateEvents: 'deactivate',
              attachEvents: 'attach',
              detachEvents: 'detach',
            },
            exportAs: ['outlet'],
            standalone: !0,
            features: [o.TTD],
          })),
          d
        );
      })();
      class cr {
        constructor(f, l, p) {
          (this.route = f), (this.childContexts = l), (this.parent = p);
        }
        get(f, l) {
          return f === Mn
            ? this.route
            : f === mr
            ? this.childContexts
            : this.parent.get(f, l);
        }
      }
      let Br = (() => {
        class d {}
        return (
          (d.ɵfac = function (l) {
            return new (l || d)();
          }),
          (d.ɵcmp = o.Xpm({
            type: d,
            selectors: [['ng-component']],
            standalone: !0,
            features: [o.jDz],
            decls: 1,
            vars: 0,
            template: function (l, p) {
              1 & l && o._UZ(0, 'router-outlet');
            },
            dependencies: [Qo],
            encapsulation: 2,
          })),
          d
        );
      })();
      function Co(d, f) {
        return (
          d.providers &&
            !d._injector &&
            (d._injector = (0, o.MMx)(d.providers, f, `Route: ${d.path}`)),
          d._injector ?? f
        );
      }
      function zr(d) {
        const f = d.children && d.children.map(zr),
          l = f ? { ...d, children: f } : { ...d };
        return (
          !l.component &&
            !l.loadComponent &&
            (f || l.loadChildren) &&
            l.outlet &&
            l.outlet !== st &&
            (l.component = Br),
          l
        );
      }
      function Wn(d) {
        return d.outlet || st;
      }
      function Dn(d, f) {
        const l = d.filter((p) => Wn(p) === f);
        return l.push(...d.filter((p) => Wn(p) !== f)), l;
      }
      function Yr(d) {
        if (!d) return null;
        if (d.routeConfig?._injector) return d.routeConfig._injector;
        for (let f = d.parent; f; f = f.parent) {
          const l = f.routeConfig;
          if (l?._loadedInjector) return l._loadedInjector;
          if (l?._injector) return l._injector;
        }
        return null;
      }
      class Jn {
        constructor(f, l, p, E) {
          (this.routeReuseStrategy = f),
            (this.futureState = l),
            (this.currState = p),
            (this.forwardEvent = E);
        }
        activate(f) {
          const l = this.futureState._root,
            p = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(l, p, f),
            Fo(this.futureState.root),
            this.activateChildRoutes(l, p, f);
        }
        deactivateChildRoutes(f, l, p) {
          const E = Fn(l);
          f.children.forEach((A) => {
            const P = A.value.outlet;
            this.deactivateRoutes(A, E[P], p), delete E[P];
          }),
            Vt(E, (A, P) => {
              this.deactivateRouteAndItsChildren(A, p);
            });
        }
        deactivateRoutes(f, l, p) {
          const E = f.value,
            A = l ? l.value : null;
          if (E === A)
            if (E.component) {
              const P = p.getContext(E.outlet);
              P && this.deactivateChildRoutes(f, l, P.children);
            } else this.deactivateChildRoutes(f, l, p);
          else A && this.deactivateRouteAndItsChildren(l, p);
        }
        deactivateRouteAndItsChildren(f, l) {
          f.value.component &&
          this.routeReuseStrategy.shouldDetach(f.value.snapshot)
            ? this.detachAndStoreRouteSubtree(f, l)
            : this.deactivateRouteAndOutlet(f, l);
        }
        detachAndStoreRouteSubtree(f, l) {
          const p = l.getContext(f.value.outlet),
            E = p && f.value.component ? p.children : l,
            A = Fn(f);
          for (const P of Object.keys(A))
            this.deactivateRouteAndItsChildren(A[P], E);
          if (p && p.outlet) {
            const P = p.outlet.detach(),
              ce = p.children.onOutletDeactivated();
            this.routeReuseStrategy.store(f.value.snapshot, {
              componentRef: P,
              route: f,
              contexts: ce,
            });
          }
        }
        deactivateRouteAndOutlet(f, l) {
          const p = l.getContext(f.value.outlet),
            E = p && f.value.component ? p.children : l,
            A = Fn(f);
          for (const P of Object.keys(A))
            this.deactivateRouteAndItsChildren(A[P], E);
          p &&
            p.outlet &&
            (p.outlet.deactivate(),
            p.children.onOutletDeactivated(),
            (p.attachRef = null),
            (p.resolver = null),
            (p.route = null));
        }
        activateChildRoutes(f, l, p) {
          const E = Fn(l);
          f.children.forEach((A) => {
            this.activateRoutes(A, E[A.value.outlet], p),
              this.forwardEvent(new Ro(A.value.snapshot));
          }),
            f.children.length && this.forwardEvent(new Xo(f.value.snapshot));
        }
        activateRoutes(f, l, p) {
          const E = f.value,
            A = l ? l.value : null;
          if ((Fo(E), E === A))
            if (E.component) {
              const P = p.getOrCreateContext(E.outlet);
              this.activateChildRoutes(f, l, P.children);
            } else this.activateChildRoutes(f, l, p);
          else if (E.component) {
            const P = p.getOrCreateContext(E.outlet);
            if (this.routeReuseStrategy.shouldAttach(E.snapshot)) {
              const ce = this.routeReuseStrategy.retrieve(E.snapshot);
              this.routeReuseStrategy.store(E.snapshot, null),
                P.children.onOutletReAttached(ce.contexts),
                (P.attachRef = ce.componentRef),
                (P.route = ce.route.value),
                P.outlet && P.outlet.attach(ce.componentRef, ce.route.value),
                Fo(ce.route.value),
                this.activateChildRoutes(f, null, P.children);
            } else {
              const ce = Yr(E.snapshot),
                je = ce?.get(o._Vd) ?? null;
              (P.attachRef = null),
                (P.route = E),
                (P.resolver = je),
                (P.injector = ce),
                P.outlet && P.outlet.activateWith(E, P.injector),
                this.activateChildRoutes(f, null, P.children);
            }
          } else this.activateChildRoutes(f, null, p);
        }
      }
      class ko {
        constructor(f) {
          (this.path = f), (this.route = this.path[this.path.length - 1]);
        }
      }
      class ao {
        constructor(f, l) {
          (this.component = f), (this.route = l);
        }
      }
      function Wr(d, f, l) {
        const p = d._root;
        return Rr(p, f ? f._root : null, l, [p.value]);
      }
      function qr(d, f) {
        const l = Symbol(),
          p = f.get(d, l);
        return p === l
          ? 'function' != typeof d || (0, o.Z0I)(d)
            ? f.get(d)
            : d
          : p;
      }
      function Rr(
        d,
        f,
        l,
        p,
        E = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const A = Fn(f);
        return (
          d.children.forEach((P) => {
            (function Jo(
              d,
              f,
              l,
              p,
              E = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const A = d.value,
                P = f ? f.value : null,
                ce = l ? l.getContext(d.value.outlet) : null;
              if (P && A.routeConfig === P.routeConfig) {
                const je = (function Vr(d, f, l) {
                  if ('function' == typeof l) return l(d, f);
                  switch (l) {
                    case 'pathParamsChange':
                      return !jt(d.url, f.url);
                    case 'pathParamsOrQueryParamsChange':
                      return (
                        !jt(d.url, f.url) || !Jt(d.queryParams, f.queryParams)
                      );
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !no(d, f) || !Jt(d.queryParams, f.queryParams);
                    default:
                      return !no(d, f);
                  }
                })(P, A, A.routeConfig.runGuardsAndResolvers);
                je
                  ? E.canActivateChecks.push(new ko(p))
                  : ((A.data = P.data), (A._resolvedData = P._resolvedData)),
                  Rr(d, f, A.component ? (ce ? ce.children : null) : l, p, E),
                  je &&
                    ce &&
                    ce.outlet &&
                    ce.outlet.isActivated &&
                    E.canDeactivateChecks.push(new ao(ce.outlet.component, P));
              } else
                P && lo(f, ce, E),
                  E.canActivateChecks.push(new ko(p)),
                  Rr(
                    d,
                    null,
                    A.component ? (ce ? ce.children : null) : l,
                    p,
                    E
                  );
            })(P, A[P.value.outlet], l, p.concat([P.value]), E),
              delete A[P.value.outlet];
          }),
          Vt(A, (P, ce) => lo(P, l.getContext(ce), E)),
          E
        );
      }
      function lo(d, f, l) {
        const p = Fn(d),
          E = d.value;
        Vt(p, (A, P) => {
          lo(A, E.component ? (f ? f.children.getContext(P) : null) : f, l);
        }),
          l.canDeactivateChecks.push(
            new ao(
              E.component && f && f.outlet && f.outlet.isActivated
                ? f.outlet.component
                : null,
              E
            )
          );
      }
      function nn(d) {
        return 'function' == typeof d;
      }
      function c(d) {
        return d instanceof re || 'EmptyError' === d?.name;
      }
      const g = Symbol('INITIAL_VALUE');
      function M() {
        return (0, We.w)((d) =>
          ve(
            d.map((f) =>
              f.pipe(
                (0, se.q)(1),
                (function k(...d) {
                  const f = (0, j.yG)(d);
                  return (0, B.e)((l, p) => {
                    (f ? Ee(d, l, f) : Ee(d, l)).subscribe(p);
                  });
                })(g)
              )
            )
          ).pipe(
            (0, pe.U)((f) => {
              for (const l of f)
                if (!0 !== l) {
                  if (l === g) return g;
                  if (!1 === l || l instanceof _n) return l;
                }
              return !0;
            }),
            (0, F.h)((f) => f !== g),
            (0, se.q)(1)
          )
        );
      }
      function Fr(d) {
        return (0, Te.z)(
          (0, Ke.b)((f) => {
            if (Sn(f)) throw Zo(0, f);
          }),
          (0, pe.U)((f) => !0 === f)
        );
      }
      const fn = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function Xr(d, f, l, p, E) {
        const A = Ci(d, f, l);
        return A.matched
          ? (function bo(d, f, l, p) {
              const E = f.canMatch;
              return E && 0 !== E.length
                ? z(
                    E.map((P) => {
                      const ce = qr(P, d);
                      return Yt(
                        (function Oe(d) {
                          return d && nn(d.canMatch);
                        })(ce)
                          ? ce.canMatch(f, l)
                          : d.runInContext(() => ce(f, l))
                      );
                    })
                  ).pipe(M(), Fr())
                : z(!0);
            })((p = Co(f, p)), f, l).pipe(
              (0, pe.U)((P) => (!0 === P ? A : { ...fn }))
            )
          : z(A);
      }
      function Ci(d, f, l) {
        if ('' === f.path)
          return 'full' === f.pathMatch && (d.hasChildren() || l.length > 0)
            ? { ...fn }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: l,
                parameters: {},
                positionalParamSegments: {},
              };
        const E = (f.matcher || Xt)(l, d, f);
        if (!E) return { ...fn };
        const A = {};
        Vt(E.posParams, (ce, je) => {
          A[je] = ce.path;
        });
        const P =
          E.consumed.length > 0
            ? { ...A, ...E.consumed[E.consumed.length - 1].parameters }
            : A;
        return {
          matched: !0,
          consumedSegments: E.consumed,
          remainingSegments: l.slice(E.consumed.length),
          parameters: P,
          positionalParamSegments: E.posParams ?? {},
        };
      }
      function co(d, f, l, p) {
        if (
          l.length > 0 &&
          (function ms(d, f, l) {
            return l.some((p) => _i(d, f, p) && Wn(p) !== st);
          })(d, l, p)
        ) {
          const A = new wt(
            f,
            (function ua(d, f, l, p) {
              const E = {};
              (E[st] = p),
                (p._sourceSegment = d),
                (p._segmentIndexShift = f.length);
              for (const A of l)
                if ('' === A.path && Wn(A) !== st) {
                  const P = new wt([], {});
                  (P._sourceSegment = d),
                    (P._segmentIndexShift = f.length),
                    (E[Wn(A)] = P);
                }
              return E;
            })(d, f, p, new wt(l, d.children))
          );
          return (
            (A._sourceSegment = d),
            (A._segmentIndexShift = f.length),
            { segmentGroup: A, slicedSegments: [] }
          );
        }
        if (
          0 === l.length &&
          (function da(d, f, l) {
            return l.some((p) => _i(d, f, p));
          })(d, l, p)
        ) {
          const A = new wt(
            d.segments,
            (function uo(d, f, l, p, E) {
              const A = {};
              for (const P of p)
                if (_i(d, l, P) && !E[Wn(P)]) {
                  const ce = new wt([], {});
                  (ce._sourceSegment = d),
                    (ce._segmentIndexShift = f.length),
                    (A[Wn(P)] = ce);
                }
              return { ...E, ...A };
            })(d, f, l, p, d.children)
          );
          return (
            (A._sourceSegment = d),
            (A._segmentIndexShift = f.length),
            { segmentGroup: A, slicedSegments: l }
          );
        }
        const E = new wt(d.segments, d.children);
        return (
          (E._sourceSegment = d),
          (E._segmentIndexShift = f.length),
          { segmentGroup: E, slicedSegments: l }
        );
      }
      function _i(d, f, l) {
        return (
          (!(d.hasChildren() || f.length > 0) || 'full' !== l.pathMatch) &&
          '' === l.path
        );
      }
      function Ei(d, f, l, p) {
        return (
          !!(Wn(d) === p || (p !== st && _i(f, l, d))) &&
          ('**' === d.path || Ci(f, d, l).matched)
        );
      }
      function bi(d, f, l) {
        return 0 === f.length && !d.children[l];
      }
      const ei = !1;
      class ti {
        constructor(f) {
          this.segmentGroup = f || null;
        }
      }
      class $i {
        constructor(f) {
          this.urlTree = f;
        }
      }
      function $o(d) {
        return q(new ti(d));
      }
      function Ii(d) {
        return q(new $i(d));
      }
      class Cs {
        constructor(f, l, p, E, A) {
          (this.injector = f),
            (this.configLoader = l),
            (this.urlSerializer = p),
            (this.urlTree = E),
            (this.config = A),
            (this.allowRedirects = !0);
        }
        apply() {
          const f = co(this.urlTree.root, [], [], this.config).segmentGroup,
            l = new wt(f.segments, f.children);
          return this.expandSegmentGroup(this.injector, this.config, l, st)
            .pipe(
              (0, pe.U)((A) =>
                this.createUrlTree(
                  pn(A),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              ft((A) => {
                if (A instanceof $i)
                  return (this.allowRedirects = !1), this.match(A.urlTree);
                throw A instanceof ti ? this.noMatchError(A) : A;
              })
            );
        }
        match(f) {
          return this.expandSegmentGroup(this.injector, this.config, f.root, st)
            .pipe(
              (0, pe.U)((E) =>
                this.createUrlTree(pn(E), f.queryParams, f.fragment)
              )
            )
            .pipe(
              ft((E) => {
                throw E instanceof ti ? this.noMatchError(E) : E;
              })
            );
        }
        noMatchError(f) {
          return new o.vHH(4002, ei);
        }
        createUrlTree(f, l, p) {
          const E = Tn(f);
          return new _n(E, l, p);
        }
        expandSegmentGroup(f, l, p, E) {
          return 0 === p.segments.length && p.hasChildren()
            ? this.expandChildren(f, l, p).pipe((0, pe.U)((A) => new wt([], A)))
            : this.expandSegment(f, p, l, p.segments, E, !0);
        }
        expandChildren(f, l, p) {
          const E = [];
          for (const A of Object.keys(p.children))
            'primary' === A ? E.unshift(A) : E.push(A);
          return (0, N.D)(E).pipe(
            nt((A) => {
              const P = p.children[A],
                ce = Dn(l, A);
              return this.expandSegmentGroup(f, ce, P, A).pipe(
                (0, pe.U)((je) => ({ segment: je, outlet: A }))
              );
            }),
            lt((A, P) => ((A[P.outlet] = P.segment), A), {}),
            Mt()
          );
        }
        expandSegment(f, l, p, E, A, P) {
          return (0, N.D)(p).pipe(
            nt((ce) =>
              this.expandSegmentAgainstRoute(f, l, p, ce, E, A, P).pipe(
                ft((ut) => {
                  if (ut instanceof ti) return z(null);
                  throw ut;
                })
              )
            ),
            Ye((ce) => !!ce),
            ft((ce, je) => {
              if (c(ce)) return bi(l, E, A) ? z(new wt([], {})) : $o(l);
              throw ce;
            })
          );
        }
        expandSegmentAgainstRoute(f, l, p, E, A, P, ce) {
          return Ei(E, l, A, P)
            ? void 0 === E.redirectTo
              ? this.matchSegmentAgainstRoute(f, l, E, A, P)
              : ce && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(f, l, p, E, A, P)
              : $o(l)
            : $o(l);
        }
        expandSegmentAgainstRouteUsingRedirect(f, l, p, E, A, P) {
          return '**' === E.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(f, p, E, P)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                f,
                l,
                p,
                E,
                A,
                P
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(f, l, p, E) {
          const A = this.applyRedirectCommands([], p.redirectTo, {});
          return p.redirectTo.startsWith('/')
            ? Ii(A)
            : this.lineralizeSegments(p, A).pipe(
                (0, J.z)((P) => {
                  const ce = new wt(P, {});
                  return this.expandSegment(f, ce, l, P, E, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(f, l, p, E, A, P) {
          const {
            matched: ce,
            consumedSegments: je,
            remainingSegments: ut,
            positionalParamSegments: yt,
          } = Ci(l, E, A);
          if (!ce) return $o(l);
          const Et = this.applyRedirectCommands(je, E.redirectTo, yt);
          return E.redirectTo.startsWith('/')
            ? Ii(Et)
            : this.lineralizeSegments(E, Et).pipe(
                (0, J.z)((Pn) =>
                  this.expandSegment(f, l, p, Pn.concat(ut), P, !1)
                )
              );
        }
        matchSegmentAgainstRoute(f, l, p, E, A) {
          return '**' === p.path
            ? ((f = Co(p, f)),
              p.loadChildren
                ? (p._loadedRoutes
                    ? z({
                        routes: p._loadedRoutes,
                        injector: p._loadedInjector,
                      })
                    : this.configLoader.loadChildren(f, p)
                  ).pipe(
                    (0, pe.U)(
                      (ce) => (
                        (p._loadedRoutes = ce.routes),
                        (p._loadedInjector = ce.injector),
                        new wt(E, {})
                      )
                    )
                  )
                : z(new wt(E, {})))
            : Xr(l, p, E, f).pipe(
                (0, We.w)(
                  ({
                    matched: P,
                    consumedSegments: ce,
                    remainingSegments: je,
                  }) =>
                    P
                      ? this.getChildConfig((f = p._injector ?? f), p, E).pipe(
                          (0, J.z)((yt) => {
                            const Et = yt.injector ?? f,
                              Pn = yt.routes,
                              { segmentGroup: Pr, slicedSegments: Ho } = co(
                                l,
                                ce,
                                je,
                                Pn
                              ),
                              Uo = new wt(Pr.segments, Pr.children);
                            if (0 === Ho.length && Uo.hasChildren())
                              return this.expandChildren(Et, Pn, Uo).pipe(
                                (0, pe.U)((Dl) => new wt(ce, Dl))
                              );
                            if (0 === Pn.length && 0 === Ho.length)
                              return z(new wt(ce, {}));
                            const Zr = Wn(p) === A;
                            return this.expandSegment(
                              Et,
                              Uo,
                              Pn,
                              Ho,
                              Zr ? st : A,
                              !0
                            ).pipe(
                              (0, pe.U)(
                                (Ns) =>
                                  new wt(ce.concat(Ns.segments), Ns.children)
                              )
                            );
                          })
                        )
                      : $o(l)
                )
              );
        }
        getChildConfig(f, l, p) {
          return l.children
            ? z({ routes: l.children, injector: f })
            : l.loadChildren
            ? void 0 !== l._loadedRoutes
              ? z({ routes: l._loadedRoutes, injector: l._loadedInjector })
              : (function xr(d, f, l, p) {
                  const E = f.canLoad;
                  return void 0 === E || 0 === E.length
                    ? z(!0)
                    : z(
                        E.map((P) => {
                          const ce = qr(P, d);
                          return Yt(
                            (function b(d) {
                              return d && nn(d.canLoad);
                            })(ce)
                              ? ce.canLoad(f, l)
                              : d.runInContext(() => ce(f, l))
                          );
                        })
                      ).pipe(M(), Fr());
                })(f, l, p).pipe(
                  (0, J.z)((E) =>
                    E
                      ? this.configLoader.loadChildren(f, l).pipe(
                          (0, Ke.b)((A) => {
                            (l._loadedRoutes = A.routes),
                              (l._loadedInjector = A.injector);
                          })
                        )
                      : (function ys(d) {
                          return q(Po(ei, 3));
                        })()
                  )
                )
            : z({ routes: [], injector: f });
        }
        lineralizeSegments(f, l) {
          let p = [],
            E = l.root;
          for (;;) {
            if (((p = p.concat(E.segments)), 0 === E.numberOfChildren))
              return z(p);
            if (E.numberOfChildren > 1 || !E.children[st])
              return q(new o.vHH(4e3, ei));
            E = E.children[st];
          }
        }
        applyRedirectCommands(f, l, p) {
          return this.applyRedirectCreateUrlTree(
            l,
            this.urlSerializer.parse(l),
            f,
            p
          );
        }
        applyRedirectCreateUrlTree(f, l, p, E) {
          const A = this.createSegmentGroup(f, l.root, p, E);
          return new _n(
            A,
            this.createQueryParams(l.queryParams, this.urlTree.queryParams),
            l.fragment
          );
        }
        createQueryParams(f, l) {
          const p = {};
          return (
            Vt(f, (E, A) => {
              if ('string' == typeof E && E.startsWith(':')) {
                const ce = E.substring(1);
                p[A] = l[ce];
              } else p[A] = E;
            }),
            p
          );
        }
        createSegmentGroup(f, l, p, E) {
          const A = this.createSegments(f, l.segments, p, E);
          let P = {};
          return (
            Vt(l.children, (ce, je) => {
              P[je] = this.createSegmentGroup(f, ce, p, E);
            }),
            new wt(A, P)
          );
        }
        createSegments(f, l, p, E) {
          return l.map((A) =>
            A.path.startsWith(':')
              ? this.findPosParam(f, A, E)
              : this.findOrReturn(A, p)
          );
        }
        findPosParam(f, l, p) {
          const E = p[l.path.substring(1)];
          if (!E) throw new o.vHH(4001, ei);
          return E;
        }
        findOrReturn(f, l) {
          let p = 0;
          for (const E of l) {
            if (E.path === f.path) return l.splice(p), E;
            p++;
          }
          return f;
        }
      }
      class fa {}
      class v {
        constructor(f, l, p, E, A, P, ce) {
          (this.injector = f),
            (this.rootComponentType = l),
            (this.config = p),
            (this.urlTree = E),
            (this.url = A),
            (this.paramsInheritanceStrategy = P),
            (this.urlSerializer = ce);
        }
        recognize() {
          const f = co(
            this.urlTree.root,
            [],
            [],
            this.config.filter((l) => void 0 === l.redirectTo)
          ).segmentGroup;
          return this.processSegmentGroup(
            this.injector,
            this.config,
            f,
            st
          ).pipe(
            (0, pe.U)((l) => {
              if (null === l) return null;
              const p = new $r(
                  [],
                  Object.freeze({}),
                  Object.freeze({ ...this.urlTree.queryParams }),
                  this.urlTree.fragment,
                  {},
                  st,
                  this.rootComponentType,
                  null,
                  this.urlTree.root,
                  -1,
                  {}
                ),
                E = new tn(p, l),
                A = new xo(this.url, E);
              return this.inheritParamsAndData(A._root), A;
            })
          );
        }
        inheritParamsAndData(f) {
          const l = f.value,
            p = kr(l, this.paramsInheritanceStrategy);
          (l.params = Object.freeze(p.params)),
            (l.data = Object.freeze(p.data)),
            f.children.forEach((E) => this.inheritParamsAndData(E));
        }
        processSegmentGroup(f, l, p, E) {
          return 0 === p.segments.length && p.hasChildren()
            ? this.processChildren(f, l, p)
            : this.processSegment(f, l, p, p.segments, E);
        }
        processChildren(f, l, p) {
          return (0, N.D)(Object.keys(p.children)).pipe(
            nt((E) => {
              const A = p.children[E],
                P = Dn(l, E);
              return this.processSegmentGroup(f, P, A, E);
            }),
            lt((E, A) => (E && A ? (E.push(...A), E) : null)),
            (function ze(d, f = !1) {
              return (0, B.e)((l, p) => {
                let E = 0;
                l.subscribe(
                  (0, ue.x)(p, (A) => {
                    const P = d(A, E++);
                    (P || f) && p.next(A), !P && p.complete();
                  })
                );
              });
            })((E) => null !== E),
            oe(null),
            Mt(),
            (0, pe.U)((E) => {
              if (null === E) return null;
              const A = Ue(E);
              return (
                (function O(d) {
                  d.sort((f, l) =>
                    f.value.outlet === st
                      ? -1
                      : l.value.outlet === st
                      ? 1
                      : f.value.outlet.localeCompare(l.value.outlet)
                  );
                })(A),
                A
              );
            })
          );
        }
        processSegment(f, l, p, E, A) {
          return (0, N.D)(l).pipe(
            nt((P) =>
              this.processSegmentAgainstRoute(P._injector ?? f, P, p, E, A)
            ),
            Ye((P) => !!P),
            ft((P) => {
              if (c(P)) return bi(p, E, A) ? z([]) : z(null);
              throw P;
            })
          );
        }
        processSegmentAgainstRoute(f, l, p, E, A) {
          if (l.redirectTo || !Ei(l, p, E, A)) return z(null);
          let P;
          if ('**' === l.path) {
            const ce = E.length > 0 ? ct(E).parameters : {},
              je = Bt(p) + E.length;
            P = z({
              snapshot: new $r(
                E,
                ce,
                Object.freeze({ ...this.urlTree.queryParams }),
                this.urlTree.fragment,
                xt(l),
                Wn(l),
                l.component ?? l._loadedComponent ?? null,
                l,
                Gt(p),
                je,
                En(l)
              ),
              consumedSegments: [],
              remainingSegments: [],
            });
          } else
            P = Xr(p, l, E, f).pipe(
              (0, pe.U)(
                ({
                  matched: ce,
                  consumedSegments: je,
                  remainingSegments: ut,
                  parameters: yt,
                }) => {
                  if (!ce) return null;
                  const Et = Bt(p) + je.length;
                  return {
                    snapshot: new $r(
                      je,
                      yt,
                      Object.freeze({ ...this.urlTree.queryParams }),
                      this.urlTree.fragment,
                      xt(l),
                      Wn(l),
                      l.component ?? l._loadedComponent ?? null,
                      l,
                      Gt(p),
                      Et,
                      En(l)
                    ),
                    consumedSegments: je,
                    remainingSegments: ut,
                  };
                }
              )
            );
          return P.pipe(
            (0, We.w)((ce) => {
              if (null === ce) return z(null);
              const {
                snapshot: je,
                consumedSegments: ut,
                remainingSegments: yt,
              } = ce;
              f = l._injector ?? f;
              const Et = l._loadedInjector ?? f,
                Pn = (function X(d) {
                  return d.children
                    ? d.children
                    : d.loadChildren
                    ? d._loadedRoutes
                    : [];
                })(l),
                { segmentGroup: Pr, slicedSegments: Ho } = co(
                  p,
                  ut,
                  yt,
                  Pn.filter((Zr) => void 0 === Zr.redirectTo)
                );
              if (0 === Ho.length && Pr.hasChildren())
                return this.processChildren(Et, Pn, Pr).pipe(
                  (0, pe.U)((Zr) => (null === Zr ? null : [new tn(je, Zr)]))
                );
              if (0 === Pn.length && 0 === Ho.length)
                return z([new tn(je, [])]);
              const Uo = Wn(l) === A;
              return this.processSegment(Et, Pn, Pr, Ho, Uo ? st : A).pipe(
                (0, pe.U)((Zr) => (null === Zr ? null : [new tn(je, Zr)]))
              );
            })
          );
        }
      }
      function Le(d) {
        const f = d.value.routeConfig;
        return f && '' === f.path && void 0 === f.redirectTo;
      }
      function Ue(d) {
        const f = [],
          l = new Set();
        for (const p of d) {
          if (!Le(p)) {
            f.push(p);
            continue;
          }
          const E = f.find((A) => p.value.routeConfig === A.value.routeConfig);
          void 0 !== E ? (E.children.push(...p.children), l.add(E)) : f.push(p);
        }
        for (const p of l) {
          const E = Ue(p.children);
          f.push(new tn(p.value, E));
        }
        return f.filter((p) => !l.has(p));
      }
      function Gt(d) {
        let f = d;
        for (; f._sourceSegment; ) f = f._sourceSegment;
        return f;
      }
      function Bt(d) {
        let f = d,
          l = f._segmentIndexShift ?? 0;
        for (; f._sourceSegment; )
          (f = f._sourceSegment), (l += f._segmentIndexShift ?? 0);
        return l - 1;
      }
      function xt(d) {
        return d.data || {};
      }
      function En(d) {
        return d.resolve || {};
      }
      function So(d) {
        return 'string' == typeof d.title || null === d.title;
      }
      function ui(d) {
        return (0, We.w)((f) => {
          const l = d(f);
          return l ? (0, N.D)(l).pipe((0, pe.U)(() => f)) : z(f);
        });
      }
      const wi = new o.OlP('ROUTES');
      let pa = (() => {
        class d {
          constructor(l, p) {
            (this.injector = l),
              (this.compiler = p),
              (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap());
          }
          loadComponent(l) {
            if (this.componentLoaders.get(l))
              return this.componentLoaders.get(l);
            if (l._loadedComponent) return z(l._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(l);
            const p = Yt(l.loadComponent()).pipe(
                (0, pe.U)(bs),
                (0, Ke.b)((A) => {
                  this.onLoadEndListener && this.onLoadEndListener(l),
                    (l._loadedComponent = A);
                }),
                bn(() => {
                  this.componentLoaders.delete(l);
                })
              ),
              E = new W(p, () => new G.x()).pipe(V());
            return this.componentLoaders.set(l, E), E;
          }
          loadChildren(l, p) {
            if (this.childrenLoaders.get(p)) return this.childrenLoaders.get(p);
            if (p._loadedRoutes)
              return z({
                routes: p._loadedRoutes,
                injector: p._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(p);
            const A = this.loadModuleFactoryOrRoutes(p.loadChildren).pipe(
                (0, pe.U)((ce) => {
                  this.onLoadEndListener && this.onLoadEndListener(p);
                  let je,
                    ut,
                    yt = !1;
                  Array.isArray(ce)
                    ? (ut = ce)
                    : ((je = ce.create(l).injector),
                      (ut = Ut(je.get(wi, [], o.XFs.Self | o.XFs.Optional))));
                  return { routes: ut.map(zr), injector: je };
                }),
                bn(() => {
                  this.childrenLoaders.delete(p);
                })
              ),
              P = new W(A, () => new G.x()).pipe(V());
            return this.childrenLoaders.set(p, P), P;
          }
          loadModuleFactoryOrRoutes(l) {
            return Yt(l()).pipe(
              (0, pe.U)(bs),
              (0, J.z)((E) =>
                E instanceof o.YKP || Array.isArray(E)
                  ? z(E)
                  : (0, N.D)(this.compiler.compileModuleAsync(E))
              )
            );
          }
        }
        return (
          (d.ɵfac = function (l) {
            return new (l || d)(o.LFG(o.zs3), o.LFG(o.Sil));
          }),
          (d.ɵprov = o.Yz7({ token: d, factory: d.ɵfac, providedIn: 'root' })),
          d
        );
      })();
      function bs(d) {
        return (function Es(d) {
          return d && 'object' == typeof d && 'default' in d;
        })(d)
          ? d.default
          : d;
      }
      let ni = (() => {
        class d {
          constructor() {
            (this.currentNavigation = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new G.x()),
              (this.configLoader = (0, o.f3M)(pa)),
              (this.environmentInjector = (0, o.f3M)(o.lqb)),
              (this.urlSerializer = (0, o.f3M)(sn)),
              (this.rootContexts = (0, o.f3M)(mr)),
              (this.navigationId = 0),
              (this.configLoader.onLoadEndListener = (E) =>
                this.events.next(new go(E))),
              (this.configLoader.onLoadStartListener = (E) =>
                this.events.next(new Mr(E)));
          }
          get hasRequestedNavigation() {
            return 0 !== this.navigationId;
          }
          complete() {
            this.transitions?.complete();
          }
          handleNavigationRequest(l) {
            const p = ++this.navigationId;
            this.transitions?.next({ ...this.transitions.value, ...l, id: p });
          }
          setupNavigations(l) {
            return (
              (this.transitions = new ge.X({
                id: 0,
                targetPageId: 0,
                currentUrlTree: l.currentUrlTree,
                currentRawUrl: l.currentUrlTree,
                extractedUrl: l.urlHandlingStrategy.extract(l.currentUrlTree),
                urlAfterRedirects: l.urlHandlingStrategy.extract(
                  l.currentUrlTree
                ),
                rawUrl: l.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: 'imperative',
                restoredState: null,
                currentSnapshot: l.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: l.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              this.transitions.pipe(
                (0, F.h)((p) => 0 !== p.id),
                (0, pe.U)((p) => ({
                  ...p,
                  extractedUrl: l.urlHandlingStrategy.extract(p.rawUrl),
                })),
                (0, We.w)((p) => {
                  let E = !1,
                    A = !1;
                  return z(p).pipe(
                    (0, Ke.b)((P) => {
                      this.currentNavigation = {
                        id: P.id,
                        initialUrl: P.rawUrl,
                        extractedUrl: P.extractedUrl,
                        trigger: P.source,
                        extras: P.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? {
                              ...this.lastSuccessfulNavigation,
                              previousNavigation: null,
                            }
                          : null,
                      };
                    }),
                    (0, We.w)((P) => {
                      const ce = l.browserUrlTree.toString(),
                        je =
                          !l.navigated ||
                          P.extractedUrl.toString() !== ce ||
                          ce !== l.currentUrlTree.toString();
                      if (
                        ('reload' === l.onSameUrlNavigation || je) &&
                        l.urlHandlingStrategy.shouldProcessUrl(P.rawUrl)
                      )
                        return (
                          ws(P.source) && (l.browserUrlTree = P.extractedUrl),
                          z(P).pipe(
                            (0, We.w)((yt) => {
                              const Et = this.transitions?.getValue();
                              return (
                                this.events.next(
                                  new et(
                                    yt.id,
                                    this.urlSerializer.serialize(
                                      yt.extractedUrl
                                    ),
                                    yt.source,
                                    yt.restoredState
                                  )
                                ),
                                Et !== this.transitions?.getValue()
                                  ? le.E
                                  : Promise.resolve(yt)
                              );
                            }),
                            (function Bi(d, f, l, p) {
                              return (0, We.w)((E) =>
                                (function Ds(d, f, l, p, E) {
                                  return new Cs(d, f, l, p, E).apply();
                                })(d, f, l, E.extractedUrl, p).pipe(
                                  (0, pe.U)((A) => ({
                                    ...E,
                                    urlAfterRedirects: A,
                                  }))
                                )
                              );
                            })(
                              this.environmentInjector,
                              this.configLoader,
                              this.urlSerializer,
                              l.config
                            ),
                            (0, Ke.b)((yt) => {
                              (this.currentNavigation = {
                                ...this.currentNavigation,
                                finalUrl: yt.urlAfterRedirects,
                              }),
                                (p.urlAfterRedirects = yt.urlAfterRedirects);
                            }),
                            (function rn(d, f, l, p, E) {
                              return (0, J.z)((A) =>
                                (function w(d, f, l, p, E, A, P = 'emptyOnly') {
                                  return new v(d, f, l, p, E, P, A)
                                    .recognize()
                                    .pipe(
                                      (0, We.w)((ce) =>
                                        null === ce
                                          ? (function m(d) {
                                              return new Fe.y((f) =>
                                                f.error(d)
                                              );
                                            })(new fa())
                                          : z(ce)
                                      )
                                    );
                                })(
                                  d,
                                  f,
                                  l,
                                  A.urlAfterRedirects,
                                  p.serialize(A.urlAfterRedirects),
                                  p,
                                  E
                                ).pipe(
                                  (0, pe.U)((P) => ({
                                    ...A,
                                    targetSnapshot: P,
                                  }))
                                )
                              );
                            })(
                              this.environmentInjector,
                              l.rootComponentType,
                              l.config,
                              this.urlSerializer,
                              l.paramsInheritanceStrategy
                            ),
                            (0, Ke.b)((yt) => {
                              if (
                                ((p.targetSnapshot = yt.targetSnapshot),
                                'eager' === l.urlUpdateStrategy)
                              ) {
                                if (!yt.extras.skipLocationChange) {
                                  const Pn = l.urlHandlingStrategy.merge(
                                    yt.urlAfterRedirects,
                                    yt.rawUrl
                                  );
                                  l.setBrowserUrl(Pn, yt);
                                }
                                l.browserUrlTree = yt.urlAfterRedirects;
                              }
                              const Et = new xn(
                                yt.id,
                                this.urlSerializer.serialize(yt.extractedUrl),
                                this.urlSerializer.serialize(
                                  yt.urlAfterRedirects
                                ),
                                yt.targetSnapshot
                              );
                              this.events.next(Et);
                            })
                          )
                        );
                      if (
                        je &&
                        l.rawUrlTree &&
                        l.urlHandlingStrategy.shouldProcessUrl(l.rawUrlTree)
                      ) {
                        const {
                            id: Et,
                            extractedUrl: Pn,
                            source: Pr,
                            restoredState: Ho,
                            extras: Uo,
                          } = P,
                          Zr = new et(
                            Et,
                            this.urlSerializer.serialize(Pn),
                            Pr,
                            Ho
                          );
                        this.events.next(Zr);
                        const Ma = Tr(Pn, l.rootComponentType).snapshot;
                        return z(
                          (p = {
                            ...P,
                            targetSnapshot: Ma,
                            urlAfterRedirects: Pn,
                            extras: {
                              ...Uo,
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            },
                          })
                        );
                      }
                      return (l.rawUrlTree = P.rawUrl), P.resolve(null), le.E;
                    }),
                    (0, Ke.b)((P) => {
                      const ce = new dn(
                        P.id,
                        this.urlSerializer.serialize(P.extractedUrl),
                        this.urlSerializer.serialize(P.urlAfterRedirects),
                        P.targetSnapshot
                      );
                      this.events.next(ce);
                    }),
                    (0, pe.U)(
                      (P) =>
                        (p = {
                          ...P,
                          guards: Wr(
                            P.targetSnapshot,
                            P.currentSnapshot,
                            this.rootContexts
                          ),
                        })
                    ),
                    (function Me(d, f) {
                      return (0, J.z)((l) => {
                        const {
                          targetSnapshot: p,
                          currentSnapshot: E,
                          guards: {
                            canActivateChecks: A,
                            canDeactivateChecks: P,
                          },
                        } = l;
                        return 0 === P.length && 0 === A.length
                          ? z({ ...l, guardsResult: !0 })
                          : (function Je(d, f, l, p) {
                              return (0, N.D)(d).pipe(
                                (0, J.z)((E) =>
                                  (function zn(d, f, l, p, E) {
                                    const A =
                                      f && f.routeConfig
                                        ? f.routeConfig.canDeactivate
                                        : null;
                                    return A && 0 !== A.length
                                      ? z(
                                          A.map((ce) => {
                                            const je = Yr(f) ?? E,
                                              ut = qr(ce, je);
                                            return Yt(
                                              (function x(d) {
                                                return d && nn(d.canDeactivate);
                                              })(ut)
                                                ? ut.canDeactivate(d, f, l, p)
                                                : je.runInContext(() =>
                                                    ut(d, f, l, p)
                                                  )
                                            ).pipe(Ye());
                                          })
                                        ).pipe(M())
                                      : z(!0);
                                  })(E.component, E.route, l, f, p)
                                ),
                                Ye((E) => !0 !== E, !0)
                              );
                            })(P, p, E, d).pipe(
                              (0, J.z)((ce) =>
                                ce &&
                                (function St(d) {
                                  return 'boolean' == typeof d;
                                })(ce)
                                  ? (function Qe(d, f, l, p) {
                                      return (0, N.D)(f).pipe(
                                        nt((E) =>
                                          Ee(
                                            (function $t(d, f) {
                                              return (
                                                null !== d && f && f(new Wt(d)),
                                                z(!0)
                                              );
                                            })(E.route.parent, p),
                                            (function Ct(d, f) {
                                              return (
                                                null !== d && f && f(new Jr(d)),
                                                z(!0)
                                              );
                                            })(E.route, p),
                                            (function Qt(d, f, l) {
                                              const p = f[f.length - 1],
                                                A = f
                                                  .slice(0, f.length - 1)
                                                  .reverse()
                                                  .map((P) =>
                                                    (function Un(d) {
                                                      const f = d.routeConfig
                                                        ? d.routeConfig
                                                            .canActivateChild
                                                        : null;
                                                      return f && 0 !== f.length
                                                        ? { node: d, guards: f }
                                                        : null;
                                                    })(P)
                                                  )
                                                  .filter((P) => null !== P)
                                                  .map((P) =>
                                                    ae(() =>
                                                      z(
                                                        P.guards.map((je) => {
                                                          const ut =
                                                              Yr(P.node) ?? l,
                                                            yt = qr(je, ut);
                                                          return Yt(
                                                            (function D(d) {
                                                              return (
                                                                d &&
                                                                nn(
                                                                  d.canActivateChild
                                                                )
                                                              );
                                                            })(yt)
                                                              ? yt.canActivateChild(
                                                                  p,
                                                                  d
                                                                )
                                                              : ut.runInContext(
                                                                  () => yt(p, d)
                                                                )
                                                          ).pipe(Ye());
                                                        })
                                                      ).pipe(M())
                                                    )
                                                  );
                                              return z(A).pipe(M());
                                            })(d, E.path, l),
                                            (function qt(d, f, l) {
                                              const p = f.routeConfig
                                                ? f.routeConfig.canActivate
                                                : null;
                                              if (!p || 0 === p.length)
                                                return z(!0);
                                              const E = p.map((A) =>
                                                ae(() => {
                                                  const P = Yr(f) ?? l,
                                                    ce = qr(A, P);
                                                  return Yt(
                                                    (function C(d) {
                                                      return (
                                                        d && nn(d.canActivate)
                                                      );
                                                    })(ce)
                                                      ? ce.canActivate(f, d)
                                                      : P.runInContext(() =>
                                                          ce(f, d)
                                                        )
                                                  ).pipe(Ye());
                                                })
                                              );
                                              return z(E).pipe(M());
                                            })(d, E.route, l)
                                          )
                                        ),
                                        Ye((E) => !0 !== E, !0)
                                      );
                                    })(p, A, d, f)
                                  : z(ce)
                              ),
                              (0, pe.U)((ce) => ({ ...l, guardsResult: ce }))
                            );
                      });
                    })(this.environmentInjector, (P) => this.events.next(P)),
                    (0, Ke.b)((P) => {
                      if (
                        ((p.guardsResult = P.guardsResult), Sn(P.guardsResult))
                      )
                        throw Zo(0, P.guardsResult);
                      const ce = new _r(
                        P.id,
                        this.urlSerializer.serialize(P.extractedUrl),
                        this.urlSerializer.serialize(P.urlAfterRedirects),
                        P.targetSnapshot,
                        !!P.guardsResult
                      );
                      this.events.next(ce);
                    }),
                    (0, F.h)(
                      (P) =>
                        !!P.guardsResult ||
                        (l.restoreHistory(P),
                        this.cancelNavigationTransition(P, '', 3, l),
                        !1)
                    ),
                    ui((P) => {
                      if (P.guards.canActivateChecks.length)
                        return z(P).pipe(
                          (0, Ke.b)((ce) => {
                            const je = new Zn(
                              ce.id,
                              this.urlSerializer.serialize(ce.extractedUrl),
                              this.urlSerializer.serialize(
                                ce.urlAfterRedirects
                              ),
                              ce.targetSnapshot
                            );
                            this.events.next(je);
                          }),
                          (0, We.w)((ce) => {
                            let je = !1;
                            return z(ce).pipe(
                              (function qn(d, f) {
                                return (0, J.z)((l) => {
                                  const {
                                    targetSnapshot: p,
                                    guards: { canActivateChecks: E },
                                  } = l;
                                  if (!E.length) return z(l);
                                  let A = 0;
                                  return (0, N.D)(E).pipe(
                                    nt((P) =>
                                      (function br(d, f, l, p) {
                                        const E = d.routeConfig,
                                          A = d._resolve;
                                        return (
                                          void 0 !== E?.title &&
                                            !So(E) &&
                                            (A[Ln] = E.title),
                                          (function hr(d, f, l, p) {
                                            const E = (function Io(d) {
                                              return [
                                                ...Object.keys(d),
                                                ...Object.getOwnPropertySymbols(
                                                  d
                                                ),
                                              ];
                                            })(d);
                                            if (0 === E.length) return z({});
                                            const A = {};
                                            return (0, N.D)(E).pipe(
                                              (0, J.z)((P) =>
                                                (function wo(d, f, l, p) {
                                                  const E = Yr(f) ?? p,
                                                    A = qr(d, E);
                                                  return Yt(
                                                    A.resolve
                                                      ? A.resolve(f, l)
                                                      : E.runInContext(() =>
                                                          A(f, l)
                                                        )
                                                  );
                                                })(d[P], f, l, p).pipe(
                                                  Ye(),
                                                  (0, Ke.b)((ce) => {
                                                    A[P] = ce;
                                                  })
                                                )
                                              ),
                                              Ft(1),
                                              (function Lt(d) {
                                                return (0, pe.U)(() => d);
                                              })(A),
                                              ft((P) => (c(P) ? le.E : q(P)))
                                            );
                                          })(A, d, f, p).pipe(
                                            (0, pe.U)(
                                              (P) => (
                                                (d._resolvedData = P),
                                                (d.data = kr(d, l).resolve),
                                                E &&
                                                  So(E) &&
                                                  (d.data[Ln] = E.title),
                                                null
                                              )
                                            )
                                          )
                                        );
                                      })(P.route, p, d, f)
                                    ),
                                    (0, Ke.b)(() => A++),
                                    Ft(1),
                                    (0, J.z)((P) =>
                                      A === E.length ? z(l) : le.E
                                    )
                                  );
                                });
                              })(
                                l.paramsInheritanceStrategy,
                                this.environmentInjector
                              ),
                              (0, Ke.b)({
                                next: () => (je = !0),
                                complete: () => {
                                  je ||
                                    (l.restoreHistory(ce),
                                    this.cancelNavigationTransition(
                                      ce,
                                      '',
                                      2,
                                      l
                                    ));
                                },
                              })
                            );
                          }),
                          (0, Ke.b)((ce) => {
                            const je = new lr(
                              ce.id,
                              this.urlSerializer.serialize(ce.extractedUrl),
                              this.urlSerializer.serialize(
                                ce.urlAfterRedirects
                              ),
                              ce.targetSnapshot
                            );
                            this.events.next(je);
                          })
                        );
                    }),
                    ui((P) => {
                      const ce = (je) => {
                        const ut = [];
                        je.routeConfig?.loadComponent &&
                          !je.routeConfig._loadedComponent &&
                          ut.push(
                            this.configLoader
                              .loadComponent(je.routeConfig)
                              .pipe(
                                (0, Ke.b)((yt) => {
                                  je.component = yt;
                                }),
                                (0, pe.U)(() => {})
                              )
                          );
                        for (const yt of je.children) ut.push(...ce(yt));
                        return ut;
                      };
                      return ve(ce(P.targetSnapshot.root)).pipe(
                        oe(),
                        (0, se.q)(1)
                      );
                    }),
                    ui(() => l.afterPreactivation()),
                    (0, pe.U)((P) => {
                      const ce = (function Ko(d, f, l) {
                        const p = jr(d, f._root, l ? l._root : void 0);
                        return new Ar(p, f);
                      })(
                        l.routeReuseStrategy,
                        P.targetSnapshot,
                        P.currentRouterState
                      );
                      return (p = { ...P, targetRouterState: ce });
                    }),
                    (0, Ke.b)((P) => {
                      (l.currentUrlTree = P.urlAfterRedirects),
                        (l.rawUrlTree = l.urlHandlingStrategy.merge(
                          P.urlAfterRedirects,
                          P.rawUrl
                        )),
                        (l.routerState = P.targetRouterState),
                        'deferred' === l.urlUpdateStrategy &&
                          (P.extras.skipLocationChange ||
                            l.setBrowserUrl(l.rawUrlTree, P),
                          (l.browserUrlTree = P.urlAfterRedirects));
                    }),
                    ((d, f, l) =>
                      (0, pe.U)(
                        (p) => (
                          new Jn(
                            f,
                            p.targetRouterState,
                            p.currentRouterState,
                            l
                          ).activate(d),
                          p
                        )
                      ))(this.rootContexts, l.routeReuseStrategy, (P) =>
                      this.events.next(P)
                    ),
                    (0, Ke.b)({
                      next: (P) => {
                        (E = !0),
                          (this.lastSuccessfulNavigation =
                            this.currentNavigation),
                          (l.navigated = !0),
                          this.events.next(
                            new Nt(
                              P.id,
                              this.urlSerializer.serialize(P.extractedUrl),
                              this.urlSerializer.serialize(l.currentUrlTree)
                            )
                          ),
                          l.titleStrategy?.updateTitle(
                            P.targetRouterState.snapshot
                          ),
                          P.resolve(!0);
                      },
                      complete: () => {
                        E = !0;
                      },
                    }),
                    bn(() => {
                      E || A || this.cancelNavigationTransition(p, '', 1, l),
                        this.currentNavigation?.id === p.id &&
                          (this.currentNavigation = null);
                    }),
                    ft((P) => {
                      if (((A = !0), ro(P))) {
                        Do(P) || ((l.navigated = !0), l.restoreHistory(p, !0));
                        const ce = new Ht(
                          p.id,
                          this.urlSerializer.serialize(p.extractedUrl),
                          P.message,
                          P.cancellationCode
                        );
                        if ((this.events.next(ce), Do(P))) {
                          const je = l.urlHandlingStrategy.merge(
                              P.url,
                              l.rawUrlTree
                            ),
                            ut = {
                              skipLocationChange: p.extras.skipLocationChange,
                              replaceUrl:
                                'eager' === l.urlUpdateStrategy || ws(p.source),
                            };
                          l.scheduleNavigation(je, 'imperative', null, ut, {
                            resolve: p.resolve,
                            reject: p.reject,
                            promise: p.promise,
                          });
                        } else p.resolve(!1);
                      } else {
                        l.restoreHistory(p, !0);
                        const ce = new Hn(
                          p.id,
                          this.urlSerializer.serialize(p.extractedUrl),
                          P,
                          p.targetSnapshot ?? void 0
                        );
                        this.events.next(ce);
                        try {
                          p.resolve(l.errorHandler(P));
                        } catch (je) {
                          p.reject(je);
                        }
                      }
                      return le.E;
                    })
                  );
                })
              )
            );
          }
          cancelNavigationTransition(l, p, E, A) {
            const P = new Ht(
              l.id,
              this.urlSerializer.serialize(l.extractedUrl),
              p,
              E
            );
            this.events.next(P), l.resolve(!1);
          }
        }
        return (
          (d.ɵfac = function (l) {
            return new (l || d)();
          }),
          (d.ɵprov = o.Yz7({ token: d, factory: d.ɵfac, providedIn: 'root' })),
          d
        );
      })();
      function ws(d) {
        return 'imperative' !== d;
      }
      let Ss = (() => {
          class d {
            buildTitle(l) {
              let p,
                E = l.root;
              for (; void 0 !== E; )
                (p = this.getResolvedTitleForRoute(E) ?? p),
                  (E = E.children.find((A) => A.outlet === st));
              return p;
            }
            getResolvedTitleForRoute(l) {
              return l.data[Ln];
            }
          }
          return (
            (d.ɵfac = function (l) {
              return new (l || d)();
            }),
            (d.ɵprov = o.Yz7({
              token: d,
              factory: function () {
                return (0, o.f3M)(Hi);
              },
              providedIn: 'root',
            })),
            d
          );
        })(),
        Hi = (() => {
          class d extends Ss {
            constructor(l) {
              super(), (this.title = l);
            }
            updateTitle(l) {
              const p = this.buildTitle(l);
              void 0 !== p && this.title.setTitle(p);
            }
          }
          return (
            (d.ɵfac = function (l) {
              return new (l || d)(o.LFG(jn.Dx));
            }),
            (d.ɵprov = o.Yz7({
              token: d,
              factory: d.ɵfac,
              providedIn: 'root',
            })),
            d
          );
        })(),
        ga = (() => {
          class d {}
          return (
            (d.ɵfac = function (l) {
              return new (l || d)();
            }),
            (d.ɵprov = o.Yz7({
              token: d,
              factory: function () {
                return (0, o.f3M)(Ms);
              },
              providedIn: 'root',
            })),
            d
          );
        })();
      class Ui {
        shouldDetach(f) {
          return !1;
        }
        store(f, l) {}
        shouldAttach(f) {
          return !1;
        }
        retrieve(f) {
          return null;
        }
        shouldReuseRoute(f, l) {
          return f.routeConfig === l.routeConfig;
        }
      }
      let Ms = (() => {
        class d extends Ui {}
        return (
          (d.ɵfac = (function () {
            let f;
            return function (p) {
              return (f || (f = o.n5z(d)))(p || d);
            };
          })()),
          (d.ɵprov = o.Yz7({ token: d, factory: d.ɵfac, providedIn: 'root' })),
          d
        );
      })();
      const As = new o.OlP('', { providedIn: 'root', factory: () => ({}) });
      let ma = (() => {
          class d {}
          return (
            (d.ɵfac = function (l) {
              return new (l || d)();
            }),
            (d.ɵprov = o.Yz7({
              token: d,
              factory: function () {
                return (0, o.f3M)(va);
              },
              providedIn: 'root',
            })),
            d
          );
        })(),
        va = (() => {
          class d {
            shouldProcessUrl(l) {
              return !0;
            }
            extract(l) {
              return l;
            }
            merge(l, p) {
              return l;
            }
          }
          return (
            (d.ɵfac = function (l) {
              return new (l || d)();
            }),
            (d.ɵprov = o.Yz7({
              token: d,
              factory: d.ɵfac,
              providedIn: 'root',
            })),
            d
          );
        })();
      function fo(d) {
        throw d;
      }
      function pl(d, f, l) {
        return f.parse('/');
      }
      const Gi = {
          paths: 'exact',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'exact',
        },
        Ts = {
          paths: 'subset',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'subset',
        };
      let yr = (() => {
          class d {
            constructor() {
              (this.disposed = !1),
                (this.currentPageId = 0),
                (this.console = (0, o.f3M)(o.c2e)),
                (this.isNgZoneEnabled = !1),
                (this.options = (0, o.f3M)(As, { optional: !0 }) || {}),
                (this.errorHandler = this.options.errorHandler || fo),
                (this.malformedUriErrorHandler =
                  this.options.malformedUriErrorHandler || pl),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.afterPreactivation = () => z(void 0)),
                (this.urlHandlingStrategy = (0, o.f3M)(ma)),
                (this.routeReuseStrategy = (0, o.f3M)(ga)),
                (this.titleStrategy = (0, o.f3M)(Ss)),
                (this.onSameUrlNavigation =
                  this.options.onSameUrlNavigation || 'ignore'),
                (this.paramsInheritanceStrategy =
                  this.options.paramsInheritanceStrategy || 'emptyOnly'),
                (this.urlUpdateStrategy =
                  this.options.urlUpdateStrategy || 'deferred'),
                (this.canceledNavigationResolution =
                  this.options.canceledNavigationResolution || 'replace'),
                (this.config = Ut((0, o.f3M)(wi, { optional: !0 }) ?? [])),
                (this.navigationTransitions = (0, o.f3M)(ni)),
                (this.urlSerializer = (0, o.f3M)(sn)),
                (this.location = (0, o.f3M)(Se.Ye)),
                (this.rootComponentType = null),
                (this.isNgZoneEnabled =
                  (0, o.f3M)(o.R0b) instanceof o.R0b &&
                  o.R0b.isInAngularZone()),
                this.resetConfig(this.config),
                (this.currentUrlTree = new _n()),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.routerState = Tr(
                  this.currentUrlTree,
                  this.rootComponentType
                )),
                this.navigationTransitions.setupNavigations(this).subscribe(
                  (l) => {
                    (this.lastSuccessfulId = l.id),
                      (this.currentPageId = l.targetPageId);
                  },
                  (l) => {
                    this.console.warn(`Unhandled Navigation Error: ${l}`);
                  }
                );
            }
            get navigationId() {
              return this.navigationTransitions.navigationId;
            }
            get browserPageId() {
              return this.location.getState()?.ɵrouterPageId;
            }
            get events() {
              return this.navigationTransitions.events;
            }
            resetRootComponentType(l) {
              (this.rootComponentType = l),
                (this.routerState.root.component = this.rootComponentType);
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                this.navigationTransitions.hasRequestedNavigation ||
                  this.navigateByUrl(this.location.path(!0), {
                    replaceUrl: !0,
                  });
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((l) => {
                  const p = 'popstate' === l.type ? 'popstate' : 'hashchange';
                  'popstate' === p &&
                    setTimeout(() => {
                      const E = { replaceUrl: !0 },
                        A = l.state?.navigationId ? l.state : null;
                      if (l.state) {
                        const ce = { ...l.state };
                        delete ce.navigationId,
                          delete ce.ɵrouterPageId,
                          0 !== Object.keys(ce).length && (E.state = ce);
                      }
                      const P = this.parseUrl(l.url);
                      this.scheduleNavigation(P, p, A, E);
                    }, 0);
                }));
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.navigationTransitions.currentNavigation;
            }
            resetConfig(l) {
              (this.config = l.map(zr)),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.navigationTransitions.complete(),
                this.locationSubscription &&
                  (this.locationSubscription.unsubscribe(),
                  (this.locationSubscription = void 0)),
                (this.disposed = !0);
            }
            createUrlTree(l, p = {}) {
              const {
                  relativeTo: E,
                  queryParams: A,
                  fragment: P,
                  queryParamsHandling: ce,
                  preserveFragment: je,
                } = p,
                ut = E || this.routerState.root,
                yt = je ? this.currentUrlTree.fragment : P;
              let Et = null;
              switch (ce) {
                case 'merge':
                  Et = { ...this.currentUrlTree.queryParams, ...A };
                  break;
                case 'preserve':
                  Et = this.currentUrlTree.queryParams;
                  break;
                default:
                  Et = A || null;
              }
              return (
                null !== Et && (Et = this.removeEmptyProps(Et)),
                Cr(ut, this.currentUrlTree, l, Et, yt ?? null)
              );
            }
            navigateByUrl(l, p = { skipLocationChange: !1 }) {
              const E = Sn(l) ? l : this.parseUrl(l),
                A = this.urlHandlingStrategy.merge(E, this.rawUrlTree);
              return this.scheduleNavigation(A, 'imperative', null, p);
            }
            navigate(l, p = { skipLocationChange: !1 }) {
              return (
                (function Os(d) {
                  for (let f = 0; f < d.length; f++) {
                    if (null == d[f]) throw new o.vHH(4008, !1);
                  }
                })(l),
                this.navigateByUrl(this.createUrlTree(l, p), p)
              );
            }
            serializeUrl(l) {
              return this.urlSerializer.serialize(l);
            }
            parseUrl(l) {
              let p;
              try {
                p = this.urlSerializer.parse(l);
              } catch (E) {
                p = this.malformedUriErrorHandler(E, this.urlSerializer, l);
              }
              return p;
            }
            isActive(l, p) {
              let E;
              if (
                ((E = !0 === p ? { ...Gi } : !1 === p ? { ...Ts } : p), Sn(l))
              )
                return pt(this.currentUrlTree, l, E);
              const A = this.parseUrl(l);
              return pt(this.currentUrlTree, A, E);
            }
            removeEmptyProps(l) {
              return Object.keys(l).reduce((p, E) => {
                const A = l[E];
                return null != A && (p[E] = A), p;
              }, {});
            }
            scheduleNavigation(l, p, E, A, P) {
              if (this.disposed) return Promise.resolve(!1);
              let ce, je, ut, yt;
              return (
                P
                  ? ((ce = P.resolve), (je = P.reject), (ut = P.promise))
                  : (ut = new Promise((Et, Pn) => {
                      (ce = Et), (je = Pn);
                    })),
                'computed' === this.canceledNavigationResolution
                  ? (0 === this.currentPageId && (E = this.location.getState()),
                    (yt =
                      E && E.ɵrouterPageId
                        ? E.ɵrouterPageId
                        : A.replaceUrl || A.skipLocationChange
                        ? this.browserPageId ?? 0
                        : (this.browserPageId ?? 0) + 1))
                  : (yt = 0),
                this.navigationTransitions.handleNavigationRequest({
                  targetPageId: yt,
                  source: p,
                  restoredState: E,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  rawUrl: l,
                  extras: A,
                  resolve: ce,
                  reject: je,
                  promise: ut,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                ut.catch((Et) => Promise.reject(Et))
              );
            }
            setBrowserUrl(l, p) {
              const E = this.urlSerializer.serialize(l),
                A = {
                  ...p.extras.state,
                  ...this.generateNgRouterState(p.id, p.targetPageId),
                };
              this.location.isCurrentPathEqualTo(E) || p.extras.replaceUrl
                ? this.location.replaceState(E, '', A)
                : this.location.go(E, '', A);
            }
            restoreHistory(l, p = !1) {
              if ('computed' === this.canceledNavigationResolution) {
                const E = this.currentPageId - l.targetPageId;
                ('popstate' !== l.source &&
                  'eager' !== this.urlUpdateStrategy &&
                  this.currentUrlTree !==
                    this.getCurrentNavigation()?.finalUrl) ||
                0 === E
                  ? this.currentUrlTree ===
                      this.getCurrentNavigation()?.finalUrl &&
                    0 === E &&
                    (this.resetState(l),
                    (this.browserUrlTree = l.currentUrlTree),
                    this.resetUrlToCurrentUrlTree())
                  : this.location.historyGo(E);
              } else
                'replace' === this.canceledNavigationResolution &&
                  (p && this.resetState(l), this.resetUrlToCurrentUrlTree());
            }
            resetState(l) {
              (this.routerState = l.currentRouterState),
                (this.currentUrlTree = l.currentUrlTree),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  l.rawUrl
                ));
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                '',
                this.generateNgRouterState(
                  this.lastSuccessfulId,
                  this.currentPageId
                )
              );
            }
            generateNgRouterState(l, p) {
              return 'computed' === this.canceledNavigationResolution
                ? { navigationId: l, ɵrouterPageId: p }
                : { navigationId: l };
            }
          }
          return (
            (d.ɵfac = function (l) {
              return new (l || d)();
            }),
            (d.ɵprov = o.Yz7({
              token: d,
              factory: d.ɵfac,
              providedIn: 'root',
            })),
            d
          );
        })(),
        di = (() => {
          class d {
            constructor(l, p, E, A, P, ce) {
              (this.router = l),
                (this.route = p),
                (this.tabIndexAttribute = E),
                (this.renderer = A),
                (this.el = P),
                (this.locationStrategy = ce),
                (this._preserveFragment = !1),
                (this._skipLocationChange = !1),
                (this._replaceUrl = !1),
                (this.href = null),
                (this.commands = null),
                (this.onChanges = new G.x());
              const je = P.nativeElement.tagName;
              (this.isAnchorElement = 'A' === je || 'AREA' === je),
                this.isAnchorElement
                  ? (this.subscription = l.events.subscribe((ut) => {
                      ut instanceof Nt && this.updateHref();
                    }))
                  : this.setTabIndexIfNotOnNativeEl('0');
            }
            set preserveFragment(l) {
              this._preserveFragment = (0, o.D6c)(l);
            }
            get preserveFragment() {
              return this._preserveFragment;
            }
            set skipLocationChange(l) {
              this._skipLocationChange = (0, o.D6c)(l);
            }
            get skipLocationChange() {
              return this._skipLocationChange;
            }
            set replaceUrl(l) {
              this._replaceUrl = (0, o.D6c)(l);
            }
            get replaceUrl() {
              return this._replaceUrl;
            }
            setTabIndexIfNotOnNativeEl(l) {
              null != this.tabIndexAttribute ||
                this.isAnchorElement ||
                this.applyAttributeValue('tabindex', l);
            }
            ngOnChanges(l) {
              this.isAnchorElement && this.updateHref(),
                this.onChanges.next(this);
            }
            set routerLink(l) {
              null != l
                ? ((this.commands = Array.isArray(l) ? l : [l]),
                  this.setTabIndexIfNotOnNativeEl('0'))
                : ((this.commands = null),
                  this.setTabIndexIfNotOnNativeEl(null));
            }
            onClick(l, p, E, A, P) {
              return (
                !!(
                  null === this.urlTree ||
                  (this.isAnchorElement &&
                    (0 !== l ||
                      p ||
                      E ||
                      A ||
                      P ||
                      ('string' == typeof this.target &&
                        '_self' != this.target)))
                ) ||
                (this.router.navigateByUrl(this.urlTree, {
                  skipLocationChange: this.skipLocationChange,
                  replaceUrl: this.replaceUrl,
                  state: this.state,
                }),
                !this.isAnchorElement)
              );
            }
            ngOnDestroy() {
              this.subscription?.unsubscribe();
            }
            updateHref() {
              this.href =
                null !== this.urlTree && this.locationStrategy
                  ? this.locationStrategy?.prepareExternalUrl(
                      this.router.serializeUrl(this.urlTree)
                    )
                  : null;
              const l =
                null === this.href
                  ? null
                  : (0, o.P3R)(
                      this.href,
                      this.el.nativeElement.tagName.toLowerCase(),
                      'href'
                    );
              this.applyAttributeValue('href', l);
            }
            applyAttributeValue(l, p) {
              const E = this.renderer,
                A = this.el.nativeElement;
              null !== p ? E.setAttribute(A, l, p) : E.removeAttribute(A, l);
            }
            get urlTree() {
              return null === this.commands
                ? null
                : this.router.createUrlTree(this.commands, {
                    relativeTo:
                      void 0 !== this.relativeTo ? this.relativeTo : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: this.preserveFragment,
                  });
            }
          }
          return (
            (d.ɵfac = function (l) {
              return new (l || d)(
                o.Y36(yr),
                o.Y36(Mn),
                o.$8M('tabindex'),
                o.Y36(o.Qsj),
                o.Y36(o.SBq),
                o.Y36(Se.S$)
              );
            }),
            (d.ɵdir = o.lG2({
              type: d,
              selectors: [['', 'routerLink', '']],
              hostVars: 1,
              hostBindings: function (l, p) {
                1 & l &&
                  o.NdJ('click', function (A) {
                    return p.onClick(
                      A.button,
                      A.ctrlKey,
                      A.shiftKey,
                      A.altKey,
                      A.metaKey
                    );
                  }),
                  2 & l && o.uIk('target', p.target);
              },
              inputs: {
                target: 'target',
                queryParams: 'queryParams',
                fragment: 'fragment',
                queryParamsHandling: 'queryParamsHandling',
                state: 'state',
                relativeTo: 'relativeTo',
                preserveFragment: 'preserveFragment',
                skipLocationChange: 'skipLocationChange',
                replaceUrl: 'replaceUrl',
                routerLink: 'routerLink',
              },
              standalone: !0,
              features: [o.TTD],
            })),
            d
          );
        })(),
        Da = (() => {
          class d {
            constructor(l, p, E, A, P) {
              (this.router = l),
                (this.element = p),
                (this.renderer = E),
                (this.cdr = A),
                (this.link = P),
                (this.classes = []),
                (this.isActive = !1),
                (this.routerLinkActiveOptions = { exact: !1 }),
                (this.isActiveChange = new o.vpe()),
                (this.routerEventsSubscription = l.events.subscribe((ce) => {
                  ce instanceof Nt && this.update();
                }));
            }
            ngAfterContentInit() {
              z(this.links.changes, z(null))
                .pipe((0, ee.J)())
                .subscribe((l) => {
                  this.update(), this.subscribeToEachLinkOnChanges();
                });
            }
            subscribeToEachLinkOnChanges() {
              this.linkInputChangesSubscription?.unsubscribe();
              const l = [...this.links.toArray(), this.link]
                .filter((p) => !!p)
                .map((p) => p.onChanges);
              this.linkInputChangesSubscription = (0, N.D)(l)
                .pipe((0, ee.J)())
                .subscribe((p) => {
                  this.isActive !== this.isLinkActive(this.router)(p) &&
                    this.update();
                });
            }
            set routerLinkActive(l) {
              const p = Array.isArray(l) ? l : l.split(' ');
              this.classes = p.filter((E) => !!E);
            }
            ngOnChanges(l) {
              this.update();
            }
            ngOnDestroy() {
              this.routerEventsSubscription.unsubscribe(),
                this.linkInputChangesSubscription?.unsubscribe();
            }
            update() {
              !this.links ||
                !this.router.navigated ||
                Promise.resolve().then(() => {
                  const l = this.hasActiveLinks();
                  this.isActive !== l &&
                    ((this.isActive = l),
                    this.cdr.markForCheck(),
                    this.classes.forEach((p) => {
                      l
                        ? this.renderer.addClass(this.element.nativeElement, p)
                        : this.renderer.removeClass(
                            this.element.nativeElement,
                            p
                          );
                    }),
                    l && void 0 !== this.ariaCurrentWhenActive
                      ? this.renderer.setAttribute(
                          this.element.nativeElement,
                          'aria-current',
                          this.ariaCurrentWhenActive.toString()
                        )
                      : this.renderer.removeAttribute(
                          this.element.nativeElement,
                          'aria-current'
                        ),
                    this.isActiveChange.emit(l));
                });
            }
            isLinkActive(l) {
              const p = (function Ca(d) {
                return !!d.paths;
              })(this.routerLinkActiveOptions)
                ? this.routerLinkActiveOptions
                : this.routerLinkActiveOptions.exact || !1;
              return (E) => !!E.urlTree && l.isActive(E.urlTree, p);
            }
            hasActiveLinks() {
              const l = this.isLinkActive(this.router);
              return (this.link && l(this.link)) || this.links.some(l);
            }
          }
          return (
            (d.ɵfac = function (l) {
              return new (l || d)(
                o.Y36(yr),
                o.Y36(o.SBq),
                o.Y36(o.Qsj),
                o.Y36(o.sBO),
                o.Y36(di, 8)
              );
            }),
            (d.ɵdir = o.lG2({
              type: d,
              selectors: [['', 'routerLinkActive', '']],
              contentQueries: function (l, p, E) {
                if ((1 & l && o.Suo(E, di, 5), 2 & l)) {
                  let A;
                  o.iGM((A = o.CRH())) && (p.links = A);
                }
              },
              inputs: {
                routerLinkActiveOptions: 'routerLinkActiveOptions',
                ariaCurrentWhenActive: 'ariaCurrentWhenActive',
                routerLinkActive: 'routerLinkActive',
              },
              outputs: { isActiveChange: 'isActiveChange' },
              exportAs: ['routerLinkActive'],
              standalone: !0,
              features: [o.TTD],
            })),
            d
          );
        })();
      class Rs {}
      let _a = (() => {
          class d {
            preload(l, p) {
              return p().pipe(ft(() => z(null)));
            }
          }
          return (
            (d.ɵfac = function (l) {
              return new (l || d)();
            }),
            (d.ɵprov = o.Yz7({
              token: d,
              factory: d.ɵfac,
              providedIn: 'root',
            })),
            d
          );
        })(),
        ml = (() => {
          class d {
            constructor(l, p, E, A, P) {
              (this.router = l),
                (this.injector = E),
                (this.preloadingStrategy = A),
                (this.loader = P);
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  (0, F.h)((l) => l instanceof Nt),
                  nt(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              return this.processRoutes(this.injector, this.router.config);
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(l, p) {
              const E = [];
              for (const A of p) {
                A.providers &&
                  !A._injector &&
                  (A._injector = (0, o.MMx)(
                    A.providers,
                    l,
                    `Route: ${A.path}`
                  ));
                const P = A._injector ?? l,
                  ce = A._loadedInjector ?? P;
                (A.loadChildren && !A._loadedRoutes && void 0 === A.canLoad) ||
                (A.loadComponent && !A._loadedComponent)
                  ? E.push(this.preloadConfig(P, A))
                  : (A.children || A._loadedRoutes) &&
                    E.push(
                      this.processRoutes(ce, A.children ?? A._loadedRoutes)
                    );
              }
              return (0, N.D)(E).pipe((0, ee.J)());
            }
            preloadConfig(l, p) {
              return this.preloadingStrategy.preload(p, () => {
                let E;
                E =
                  p.loadChildren && void 0 === p.canLoad
                    ? this.loader.loadChildren(l, p)
                    : z(null);
                const A = E.pipe(
                  (0, J.z)((P) =>
                    null === P
                      ? z(void 0)
                      : ((p._loadedRoutes = P.routes),
                        (p._loadedInjector = P.injector),
                        this.processRoutes(P.injector ?? l, P.routes))
                  )
                );
                if (p.loadComponent && !p._loadedComponent) {
                  const P = this.loader.loadComponent(p);
                  return (0, N.D)([A, P]).pipe((0, ee.J)());
                }
                return A;
              });
            }
          }
          return (
            (d.ɵfac = function (l) {
              return new (l || d)(
                o.LFG(yr),
                o.LFG(o.Sil),
                o.LFG(o.lqb),
                o.LFG(Rs),
                o.LFG(pa)
              );
            }),
            (d.ɵprov = o.Yz7({
              token: d,
              factory: d.ɵfac,
              providedIn: 'root',
            })),
            d
          );
        })();
      const fi = new o.OlP('');
      let Bo = (() => {
        class d {
          constructor(l, p, E, A, P = {}) {
            (this.urlSerializer = l),
              (this.transitions = p),
              (this.viewportScroller = E),
              (this.zone = A),
              (this.options = P),
              (this.lastId = 0),
              (this.lastSource = 'imperative'),
              (this.restoredId = 0),
              (this.store = {}),
              (P.scrollPositionRestoration =
                P.scrollPositionRestoration || 'disabled'),
              (P.anchorScrolling = P.anchorScrolling || 'disabled');
          }
          init() {
            'disabled' !== this.options.scrollPositionRestoration &&
              this.viewportScroller.setHistoryScrollRestoration('manual'),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.transitions.events.subscribe((l) => {
              l instanceof et
                ? ((this.store[this.lastId] =
                    this.viewportScroller.getScrollPosition()),
                  (this.lastSource = l.navigationTrigger),
                  (this.restoredId = l.restoredState
                    ? l.restoredState.navigationId
                    : 0))
                : l instanceof Nt &&
                  ((this.lastId = l.id),
                  this.scheduleScrollEvent(
                    l,
                    this.urlSerializer.parse(l.urlAfterRedirects).fragment
                  ));
            });
          }
          consumeScrollEvents() {
            return this.transitions.events.subscribe((l) => {
              l instanceof Lr &&
                (l.position
                  ? 'top' === this.options.scrollPositionRestoration
                    ? this.viewportScroller.scrollToPosition([0, 0])
                    : 'enabled' === this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition(l.position)
                  : l.anchor && 'enabled' === this.options.anchorScrolling
                  ? this.viewportScroller.scrollToAnchor(l.anchor)
                  : 'disabled' !== this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition([0, 0]));
            });
          }
          scheduleScrollEvent(l, p) {
            this.zone.runOutsideAngular(() => {
              setTimeout(() => {
                this.zone.run(() => {
                  this.transitions.events.next(
                    new Lr(
                      l,
                      'popstate' === this.lastSource
                        ? this.store[this.restoredId]
                        : null,
                      p
                    )
                  );
                });
              }, 0);
            });
          }
          ngOnDestroy() {
            this.routerEventsSubscription?.unsubscribe(),
              this.scrollEventsSubscription?.unsubscribe();
          }
        }
        return (
          (d.ɵfac = function (l) {
            o.$Z();
          }),
          (d.ɵprov = o.Yz7({ token: d, factory: d.ɵfac })),
          d
        );
      })();
      function Ea(d, ...f) {
        return (0, o.MR2)([
          { provide: wi, multi: !0, useValue: d },
          [],
          { provide: Mn, useFactory: xs, deps: [yr] },
          { provide: o.tb, multi: !0, useFactory: Ps },
          f.map((l) => l.ɵproviders),
        ]);
      }
      function xs(d) {
        return d.routerState.root;
      }
      function Kr(d, f) {
        return { ɵkind: d, ɵproviders: f };
      }
      function Ps() {
        const d = (0, o.f3M)(o.zs3);
        return (f) => {
          const l = d.get(o.z2F);
          if (f !== l.components[0]) return;
          const p = d.get(yr),
            E = d.get(zi);
          1 === d.get(Vo) && p.initialNavigation(),
            d.get(Yi, null, o.XFs.Optional)?.setUpPreloading(),
            d.get(fi, null, o.XFs.Optional)?.init(),
            p.resetRootComponentType(l.componentTypes[0]),
            E.closed || (E.next(), E.unsubscribe());
        };
      }
      const zi = new o.OlP('', { factory: () => new G.x() }),
        Vo = new o.OlP('', { providedIn: 'root', factory: () => 1 });
      const Yi = new o.OlP('');
      function ri(d) {
        return Kr(0, [
          { provide: Yi, useExisting: ml },
          { provide: Rs, useExisting: d },
        ]);
      }
      const vl = new o.OlP('ROUTER_FORROOT_GUARD'),
        Eu = [
          Se.Ye,
          { provide: sn, useClass: Dt },
          yr,
          mr,
          { provide: Mn, useFactory: xs, deps: [yr] },
          pa,
          [],
        ];
      function bu() {
        return new o.PXZ('Router', yr);
      }
      let Iu = (() => {
        class d {
          constructor(l) {}
          static forRoot(l, p) {
            return {
              ngModule: d,
              providers: [
                Eu,
                [],
                { provide: wi, multi: !0, useValue: l },
                {
                  provide: vl,
                  useFactory: Mi,
                  deps: [[yr, new o.FiY(), new o.tp0()]],
                },
                { provide: As, useValue: p || {} },
                p?.useHash
                  ? { provide: Se.S$, useClass: Se.Do }
                  : { provide: Se.S$, useClass: Se.b0 },
                {
                  provide: fi,
                  useFactory: () => {
                    const d = (0, o.f3M)(Se.EM),
                      f = (0, o.f3M)(o.R0b),
                      l = (0, o.f3M)(As),
                      p = (0, o.f3M)(ni),
                      E = (0, o.f3M)(sn);
                    return (
                      l.scrollOffset && d.setOffset(l.scrollOffset),
                      new Bo(E, p, d, f, l)
                    );
                  },
                },
                p?.preloadingStrategy
                  ? ri(p.preloadingStrategy).ɵproviders
                  : [],
                { provide: o.PXZ, multi: !0, useFactory: bu },
                p?.initialNavigation ? Au(p) : [],
                [
                  { provide: yl, useFactory: Ps },
                  { provide: o.tb, multi: !0, useExisting: yl },
                ],
              ],
            };
          }
          static forChild(l) {
            return {
              ngModule: d,
              providers: [{ provide: wi, multi: !0, useValue: l }],
            };
          }
        }
        return (
          (d.ɵfac = function (l) {
            return new (l || d)(o.LFG(vl, 8));
          }),
          (d.ɵmod = o.oAB({ type: d })),
          (d.ɵinj = o.cJS({ imports: [Br] })),
          d
        );
      })();
      function Mi(d) {
        return 'guarded';
      }
      function Au(d) {
        return [
          'disabled' === d.initialNavigation
            ? Kr(3, [
                {
                  provide: o.ip1,
                  multi: !0,
                  useFactory: () => {
                    const f = (0, o.f3M)(yr);
                    return () => {
                      f.setUpLocationChangeListener();
                    };
                  },
                },
                { provide: Vo, useValue: 2 },
              ]).ɵproviders
            : [],
          'enabledBlocking' === d.initialNavigation
            ? Kr(2, [
                { provide: Vo, useValue: 0 },
                {
                  provide: o.ip1,
                  multi: !0,
                  deps: [o.zs3],
                  useFactory: (f) => {
                    const l = f.get(Se.V_, Promise.resolve());
                    return () =>
                      l.then(
                        () =>
                          new Promise((E) => {
                            const A = f.get(yr),
                              P = f.get(zi);
                            (function p(E) {
                              f.get(yr)
                                .events.pipe(
                                  (0, F.h)(
                                    (P) =>
                                      P instanceof Nt ||
                                      P instanceof Ht ||
                                      P instanceof Hn
                                  ),
                                  (0, pe.U)(
                                    (P) =>
                                      P instanceof Nt ||
                                      (P instanceof Ht &&
                                        (0 === P.code || 1 === P.code) &&
                                        null)
                                  ),
                                  (0, F.h)((P) => null !== P),
                                  (0, se.q)(1)
                                )
                                .subscribe(() => {
                                  E();
                                });
                            })(() => {
                              E(!0);
                            }),
                              (A.afterPreactivation = () => (
                                E(!0), P.closed ? z(void 0) : P
                              )),
                              A.initialNavigation();
                          })
                      );
                  },
                },
              ]).ɵproviders
            : [],
        ];
      }
      const yl = new o.OlP('');
    },
    5861: (at, ke, S) => {
      'use strict';
      function o(j, z, ge, Ne, re, Fe, Ae) {
        try {
          var Pe = j[Fe](Ae),
            De = Pe.value;
        } catch (we) {
          return void ge(we);
        }
        Pe.done ? z(De) : Promise.resolve(De).then(Ne, re);
      }
      function N(j) {
        return function () {
          var z = this,
            ge = arguments;
          return new Promise(function (Ne, re) {
            var Fe = j.apply(z, ge);
            function Ae(De) {
              o(Fe, Ne, re, Ae, Pe, 'next', De);
            }
            function Pe(De) {
              o(Fe, Ne, re, Ae, Pe, 'throw', De);
            }
            Ae(void 0);
          });
        };
      }
      S.d(ke, { Z: () => N });
    },
  },
  (at) => {
    at((at.s = 383));
  },
]);