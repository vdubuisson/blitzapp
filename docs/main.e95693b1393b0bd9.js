(self.webpackChunkloup_garou_mj = self.webpackChunkloup_garou_mj || []).push([
  [179],
  {
    5035: (at, $e, S) => {
      'use strict';
      S.d($e, {
        Br: () => Jn,
        w: () => ct,
        We: () => kt,
        eh: () => tr,
        dr: () => Bn,
        YG: () => on,
        Sm: () => sn,
        nz: () => hn,
        W2: () => Ee,
        Gu: () => Zt,
        gu: () => an,
        pK: () => pn,
        Ie: () => On,
        Q$: () => Cr,
        q_: () => sr,
        z0: () => yn,
        fG: () => Tt,
        uN: () => T,
        B7: () => H,
        se: () => Q,
        Nh: () => ae,
        oz: () => Ve,
        jP: () => oo,
        t9: () => Ht,
        n0: () => Hn,
        yW: () => Wt,
        Bs: () => Jr,
        wd: () => Ro,
        sr: () => Ur,
        Pc: () => Me,
        r4: () => b,
        U5: () => Vt,
        YI: () => Eo,
        QI: () => Yt,
        j9: () => At,
      });
      var o = S(8256),
        P = S(433),
        U = S(655),
        j = S(8421),
        pe = S(9751),
        Le = S(5577),
        oe = S(1144),
        xe = S(576),
        Se = S(3268);
      const Fe = ['addListener', 'removeListener'],
        ve = ['addEventListener', 'removeEventListener'],
        be = ['on', 'off'];
      function ue(a, _, c, g) {
        if (((0, xe.m)(c) && ((g = c), (c = void 0)), g))
          return ue(a, _, c).pipe((0, Se.Z)(g));
        const [M, we] = (function ge(a) {
          return (
            (0, xe.m)(a.addEventListener) && (0, xe.m)(a.removeEventListener)
          );
        })(a)
          ? ve.map((Je) => (Qe) => a[Je](_, Qe, c))
          : (function me(a) {
              return (0, xe.m)(a.addListener) && (0, xe.m)(a.removeListener);
            })(a)
          ? Fe.map(ne(a, _))
          : (function Be(a) {
              return (0, xe.m)(a.on) && (0, xe.m)(a.off);
            })(a)
          ? be.map(ne(a, _))
          : [];
        if (!M && (0, oe.z)(a))
          return (0, Le.z)((Je) => ue(Je, _, c))((0, j.Xf)(a));
        if (!M) throw new TypeError('Invalid event target');
        return new pe.y((Je) => {
          const Qe = (...Ct) => Je.next(1 < Ct.length ? Ct : Ct[0]);
          return M(Qe), () => we(Qe);
        });
      }
      function ne(a, _) {
        return (c) => (g) => a[c](_, g);
      }
      var te = S(7579),
        He = S(1135),
        _e = S(8265),
        W = (S(8834), S(3953), S(3880), S(1911), S(9658)),
        le = S(5730),
        fe = S(697),
        B = (S(4292), S(1312)),
        Ie = (S(3457), S(4349), S(1308)),
        Re = S(9300),
        Pe = S(3900),
        ye = S(4671),
        Ae = S(4482),
        We = S(5403);
      function Ke(a, _) {
        return a === _;
      }
      var ft = S(6895);
      const lt = W.i,
        Ye = ['*'],
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
              c = this.injector.get(P.a5);
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
              ].forEach((we) => {
                if (typeof g[we] < 'u') {
                  const Je = g[we].bind(g);
                  g[we] = (...Qe) => {
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
                o.NdJ('ionBlur', function (we) {
                  return g._handleBlurEvent(we.target);
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
                  o.NdJ('ionChange', function (we) {
                    return g._handleIonChange(we.target);
                  });
              },
              features: [
                o._Bn([{ provide: P.JU, useExisting: a, multi: !0 }]),
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
                  o.NdJ('ionSelect', function (we) {
                    return g._handleIonSelect(we.target);
                  });
              },
              features: [
                o._Bn([{ provide: P.JU, useExisting: a, multi: !0 }]),
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
                  o.NdJ('ionChange', function (we) {
                    return g._handleChangeEvent(we.target);
                  });
              },
              features: [
                o._Bn([{ provide: P.JU, useExisting: a, multi: !0 }]),
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
                  o.NdJ('ionChange', function (we) {
                    return g._handleInputEvent(we.target);
                  });
              },
              features: [
                o._Bn([{ provide: P.JU, useExisting: a, multi: !0 }]),
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
          const { defineCustomElementFn: g, inputs: M, methods: we } = a;
          return void 0 !== g && g(), M && un(c, M), we && In(c, we), c;
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)([tt({ defineCustomElementFn: void 0 })], a)),
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
        Ee = (() => {
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
        H = (() => {
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
        Q = (() => {
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
        ae = (() => {
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)([tt({ defineCustomElementFn: void 0 })], a)),
            a
          );
        })(),
        Ve = (() => {
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)([tt({ defineCustomElementFn: void 0 })], a)),
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, U.gn)(
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
        constructor(_, c, g, M, we) {
          (this.resolverOrInjector = _),
            (this.injector = c),
            (this.location = g),
            (this.appRef = M),
            (this.zone = we),
            (this.elRefMap = new WeakMap()),
            (this.elEventsMap = new WeakMap());
        }
        attachViewToDom(_, c, g, M) {
          return this.zone.run(
            () =>
              new Promise((we) => {
                we(
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
                  const we = this.elEventsMap.get(c);
                  we && (we(), this.elEventsMap.delete(c));
                }
                g();
              })
          );
        }
      }
      const tn = (a, _, c, g, M, we, Je, Qe, Ct, $t, qt) => {
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
            we.set(Fr, Qt),
            Je.set(Fr, bo),
            Fr
          );
        },
        Fn = [fe.L, fe.a, fe.b, fe.c, fe.d],
        Ar = (a, _, c) =>
          a.run(() => {
            const g = Fn.filter((M) => 'function' == typeof _[M]).map((M) => {
              const we = (Je) => _[M](Je.detail);
              return (
                c.addEventListener(M, we), () => c.removeEventListener(M, we)
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
        constructor(_, c, g, M, we, Je) {
          (this.containerEl = c),
            (this.router = g),
            (this.navCtrl = M),
            (this.zone = we),
            (this.location = Je),
            (this.views = []),
            (this.skipTransition = !1),
            (this.nextId = 0),
            (this.tabsPrefix = void 0 !== _ ? no(_) : void 0);
        }
        createView(_, c) {
          var g;
          const M = eo(this.router, c),
            we =
              null === (g = _?.location) || void 0 === g
                ? void 0
                : g.nativeElement,
            Je = Ar(this.zone, _.instance, we);
          return {
            id: this.nextId++,
            stackId: Fo(this.tabsPrefix, M),
            unlistenEvents: Je,
            element: we,
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
          let { direction: we, animation: Je, animationBuilder: Qe } = M;
          const Ct = this.activeView,
            $t = ((a, _) => !_ || a.stackId !== _.stackId)(_, Ct);
          $t && ((we = 'back'), (Je = void 0));
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
            Fr = this.insertView(_, we);
          xr || _.ref.changeDetectorRef.detectChanges();
          const bo = _.animationBuilder;
          return (
            void 0 === Qe && 'back' === we && !$t && void 0 !== bo && (Qe = bo),
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
                      direction: we,
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
            const we = this.getStack(c);
            if (we.length <= _) return Promise.resolve(!1);
            const Je = we[we.length - _ - 1];
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
        transition(_, c, g, M, we, Je) {
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
                progressAnimation: we,
                animationBuilder: Je,
              })
            : Promise.resolve(!1);
        }
        wait(_) {
          return (0, U.mG)(this, void 0, void 0, function* () {
            void 0 !== this.runningTask &&
              (yield this.runningTask, (this.runningTask = void 0));
            const c = (this.runningTask = _());
            return c.finally(() => (this.runningTask = void 0)), c;
          });
        }
      }
      const Di = (a, _, c, g, M) =>
          'function' == typeof requestAnimationFrame
            ? new Promise((we) => {
                requestAnimationFrame(() => {
                  li(a, _, c, g, M), we();
                });
              })
            : Promise.resolve(),
        li = (a, _, c, g, M) => {
          M.run(() => c.filter((we) => !_.includes(we)).forEach(Ko)),
            _.forEach((we) => {
              const Qe = g.path().split('?')[0].split('#')[0];
              if (we !== a && we.url !== Qe) {
                const Ct = we.element;
                Ct.setAttribute('aria-hidden', 'true'),
                  Ct.classList.add('ion-page-hidden'),
                  we.ref.changeDetectorRef.detach();
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
              (this.backButton = new te.x()),
              (this.keyboardDidShow = new te.x()),
              (this.keyboardDidHide = new te.x()),
              (this.pause = new te.x()),
              (this.resume = new te.x()),
              (this.resize = new te.x()),
              g.run(() => {
                var M;
                let we;
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
                    we = Je;
                  })),
                  null !== (M = this.win) && void 0 !== M && M.cordova
                    ? c.addEventListener(
                        'deviceready',
                        () => {
                          we('cordova');
                        },
                        { once: !0 }
                      )
                    : we('dom');
              });
          }
          is(c) {
            return (0, W.a)(this.win, c);
          }
          platforms() {
            return (0, W.g)(this.win);
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
          constructor(c, g, M, we) {
            (this.location = g),
              (this.serializer = M),
              (this.router = we),
              (this.direction = Qo),
              (this.animated = cr),
              (this.guessDirection = 'forward'),
              (this.lastNavId = -1),
              we &&
                we.events.subscribe((Je) => {
                  if (Je instanceof _e.OD) {
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
            return (0, U.mG)(this, void 0, void 0, function* () {
              let c = this.topOutlet;
              for (; c && !(yield c.pop()); ) c = c.parentOutlet;
            });
          }
          setDirection(c, g, M, we) {
            (this.direction = c),
              (this.animated = vr(c, g, M)),
              (this.animationBuilder = we);
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
              o.LFG(_e.Hx),
              o.LFG(_e.F0, 8)
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
          constructor(c, g, M, we, Je, Qe, Ct, $t, qt, Qt, zn, xr, Fr) {
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
              (this.currentActivatedRoute$ = new He.X(null)),
              (this.stackEvents = new o.vpe()),
              (this.activateEvents = new o.vpe()),
              (this.deactivateEvents = new o.vpe()),
              (this.nativeEl = qt.nativeElement),
              (this.name = M || _e.eC),
              (this.tabsPrefix = 'true' === we ? eo(Qt, xr) : void 0),
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
                  const we = g.route.snapshot;
                  (this.activatedView.savedExtras.queryParams = we.queryParams),
                    (this.activatedView.savedExtras.fragment = we.fragment);
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
            let we,
              Je = this.stackCtrl.getExistingView(c);
            if (Je) {
              we = this.activated = Je.ref;
              const Qe = Je.savedData;
              Qe && (this.getContext().children.contexts = Qe),
                this.updateActivatedRouteProxy(we.instance, c);
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
                $t = new He.X(null),
                qt = this.createActivatedRouteProxy($t, c),
                Qt = new Br(qt, Ct, this.location.injector),
                zn =
                  null !== (M = Qe.routeConfig.component) && void 0 !== M
                    ? M
                    : Qe.component;
              if ((g = g || this.componentFactoryResolver) && cn(g)) {
                const xr = g.resolveComponentFactory(zn);
                we = this.activated = this.location.createComponent(
                  xr,
                  this.location.length,
                  Qt
                );
              } else
                we = this.activated = this.location.createComponent(zn, {
                  index: this.location.length,
                  injector: Qt,
                  environmentInjector: g ?? this.environmentInjector,
                });
              $t.next(we.instance),
                (Je = this.stackCtrl.createView(this.activated, c)),
                this.proxyMap.set(we.instance, qt),
                this.currentActivatedRoute$.next({
                  component: we.instance,
                  activatedRoute: c,
                });
            }
            (this.activatedView = Je),
              this.navCtrl.setTopOutlet(this),
              this.stackCtrl.setActive(Je).then((Qe) => {
                this.activateEvents.emit(we.instance),
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
            const M = new _e.gz();
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
              (0, Re.h)((M) => !!M),
              (0, Pe.w)((M) =>
                this.currentActivatedRoute$.pipe(
                  (0, Re.h)((we) => null !== we && we.component === M),
                  (0, Pe.w)((we) => we && we.activatedRoute[g]),
                  (function nt(a, _ = ye.y) {
                    return (
                      (a = a ?? Ke),
                      (0, Ae.e)((c, g) => {
                        let M,
                          we = !0;
                        c.subscribe(
                          (0, We.x)(g, (Je) => {
                            const Qe = _(Je);
                            (we || !a(M, Qe)) &&
                              ((we = !1), (M = Qe), g.next(Je));
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
              o.Y36(_e.y6),
              o.Y36(o.s_b),
              o.$8M('name'),
              o.$8M('tabs'),
              o.Y36(yo),
              o.Y36(mr),
              o.Y36(o._Vd, 8),
              o.Y36(ft.Ye),
              o.Y36(o.SBq),
              o.Y36(_e.F0),
              o.Y36(o.R0b),
              o.Y36(_e.gz),
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
          return _ === _e.gz
            ? this.route
            : _ === _e.y6
            ? this.childContexts
            : this.parent.get(_, c);
        }
      }
      let Eo = (() => {
        class a {
          constructor(c, g, M, we, Je) {
            (this.locationStrategy = c),
              (this.navCtrl = g),
              (this.elementRef = M),
              (this.router = we),
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
              o.Y36(_e.F0),
              o.Y36(_e.rH, 8)
            );
          }),
          (a.ɵdir = o.lG2({
            type: a,
            selectors: [['', 'routerLink', '', 5, 'a', 5, 'area']],
            hostBindings: function (c, g) {
              1 & c &&
                o.NdJ('click', function (we) {
                  return g.onClick(we);
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
            super(B.a);
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
            constructor(c, g, M, we) {
              super(B.m),
                (this.angularDelegate = c),
                (this.resolver = g),
                (this.injector = M),
                (this.environmentInjector = we);
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
            constructor(c, g, M, we) {
              super(B.c),
                (this.angularDelegate = c),
                (this.resolver = g),
                (this.injector = M),
                (this.environmentInjector = we);
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
            we = Object.keys(g),
            Je = Object.keys(M);
          if (we.length !== Je.length) return !1;
          for (const Qe of we) if (M[Qe] !== g[Qe]) return !1;
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
              _zoneGate: (we) => c.run(we),
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
                : (0, Ie.p)().then(
                    () => (
                      lt(),
                      (0, Ie.b)(
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
              jmp: (we) => c.runOutsideAngular(we),
              ael(we, Je, Qe, Ct) {
                we[M](Je, Qe, Ct);
              },
              rel(we, Je, Qe, Ct) {
                we.removeEventListener(Je, Qe, Ct);
              },
            })
          );
        }
      };
      let Me = (() => {
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
    8834: (at, $e, S) => {
      'use strict';
      S.d($e, { c: () => Be });
      var o = S(5730),
        P = S(3457);
      let U;
      const pe = (ge) =>
          ge.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
        Le = (ge) => {
          if (void 0 === U) {
            const He = void 0 !== ge.style.webkitAnimationName;
            U = void 0 === ge.style.animationName && He ? '-webkit-' : '';
          }
          return U;
        },
        oe = (ge, te, He) => {
          const _e = te.startsWith('animation') ? Le(ge) : '';
          ge.style.setProperty(_e + te, He);
        },
        xe = (ge, te) => {
          const He = te.startsWith('animation') ? Le(ge) : '';
          ge.style.removeProperty(He + te);
        },
        ve = [],
        me = (ge = [], te) => {
          if (void 0 !== te) {
            const He = Array.isArray(te) ? te : [te];
            return [...ge, ...He];
          }
          return ge;
        },
        Be = (ge) => {
          let te,
            He,
            _e,
            he,
            se,
            ke,
            k,
            K,
            q,
            Re,
            Pe,
            nt,
            Ke,
            de = [],
            W = [],
            le = [],
            fe = !1,
            B = {},
            Y = [],
            G = [],
            Ie = {},
            ie = 0,
            X = !1,
            L = !1,
            ye = !0,
            Ae = !1,
            We = !0,
            ft = !1;
          const bt = ge,
            lt = [],
            Ft = [],
            Mt = [],
            Ye = [],
            Lt = [],
            bn = [],
            jn = [],
            st = [],
            Ln = [],
            Pt = [],
            cn =
              'function' == typeof AnimationEffect ||
              (void 0 !== P.w && 'function' == typeof P.w.AnimationEffect),
            Xt =
              'function' == typeof Element &&
              'function' == typeof Element.prototype.animate &&
              cn,
            Jt = () => Pt,
            Vt = (N, ee) => (
              (ee?.oneTimeCallback ? Ft : lt).push({ c: N, o: ee }), Ke
            ),
            At = () => {
              if (Xt)
                Pt.forEach((N) => {
                  N.cancel();
                }),
                  (Pt.length = 0);
              else {
                const N = Mt.slice();
                (0, o.r)(() => {
                  N.forEach((ee) => {
                    xe(ee, 'animation-name'),
                      xe(ee, 'animation-duration'),
                      xe(ee, 'animation-timing-function'),
                      xe(ee, 'animation-iteration-count'),
                      xe(ee, 'animation-delay'),
                      xe(ee, 'animation-play-state'),
                      xe(ee, 'animation-fill-mode'),
                      xe(ee, 'animation-direction');
                  });
                });
              }
            },
            un = () => {
              Lt.forEach((N) => {
                N?.parentNode && N.parentNode.removeChild(N);
              }),
                (Lt.length = 0);
            },
            jt = () => (void 0 !== se ? se : k ? k.getFill() : 'both'),
            on = () =>
              void 0 !== q
                ? q
                : void 0 !== ke
                ? ke
                : k
                ? k.getDirection()
                : 'normal',
            sn = () =>
              X ? 'linear' : void 0 !== _e ? _e : k ? k.getEasing() : 'linear',
            Dt = () =>
              L
                ? 0
                : void 0 !== Re
                ? Re
                : void 0 !== He
                ? He
                : k
                ? k.getDuration()
                : 0,
            wn = () => (void 0 !== he ? he : k ? k.getIterations() : 1),
            An = () =>
              void 0 !== Pe ? Pe : void 0 !== te ? te : k ? k.getDelay() : 0,
            an = () => {
              0 !== ie &&
                (ie--,
                0 === ie &&
                  ((() => {
                    yn(), st.forEach((Oe) => Oe()), Ln.forEach((Oe) => Oe());
                    const N = ye ? 1 : 0,
                      ee = Y,
                      ae = G,
                      Ve = Ie;
                    Mt.forEach((Oe) => {
                      const rt = Oe.classList;
                      ee.forEach((ot) => rt.add(ot)),
                        ae.forEach((ot) => rt.remove(ot));
                      for (const ot in Ve)
                        Ve.hasOwnProperty(ot) && oe(Oe, ot, Ve[ot]);
                    }),
                      lt.forEach((Oe) => Oe.c(N, Ke)),
                      Ft.forEach((Oe) => Oe.c(N, Ke)),
                      (Ft.length = 0),
                      (We = !0),
                      ye && (Ae = !0),
                      (ye = !0);
                  })(),
                  k && k.animationFinish()));
            },
            ln = (N = !0) => {
              un();
              const ee = ((ge) => (
                ge.forEach((te) => {
                  for (const He in te)
                    if (te.hasOwnProperty(He)) {
                      const _e = te[He];
                      if ('easing' === He)
                        (te['animation-timing-function'] = _e), delete te[He];
                      else {
                        const he = pe(He);
                        he !== He && ((te[he] = _e), delete te[He]);
                      }
                    }
                }),
                ge
              ))(de);
              Mt.forEach((ae) => {
                if (ee.length > 0) {
                  const Ve = ((ge = []) =>
                    ge
                      .map((te) => {
                        const He = te.offset,
                          _e = [];
                        for (const he in te)
                          te.hasOwnProperty(he) &&
                            'offset' !== he &&
                            _e.push(`${he}: ${te[he]};`);
                        return `${100 * He}% { ${_e.join(' ')} }`;
                      })
                      .join(' '))(ee);
                  nt =
                    void 0 !== ge
                      ? ge
                      : ((ge) => {
                          let te = ve.indexOf(ge);
                          return (
                            te < 0 && (te = ve.push(ge) - 1),
                            `ion-animation-${te}`
                          );
                        })(Ve);
                  const Oe = ((ge, te, He) => {
                    var _e;
                    const he = ((ge) => {
                        const te =
                          void 0 !== ge.getRootNode ? ge.getRootNode() : ge;
                        return te.head || te;
                      })(He),
                      se = Le(He),
                      ke = he.querySelector('#' + ge);
                    if (ke) return ke;
                    const de = (
                      null !== (_e = He.ownerDocument) && void 0 !== _e
                        ? _e
                        : document
                    ).createElement('style');
                    return (
                      (de.id = ge),
                      (de.textContent = `@${se}keyframes ${ge} { ${te} } @${se}keyframes ${ge}-alt { ${te} }`),
                      he.appendChild(de),
                      de
                    );
                  })(nt, Ve, ae);
                  Lt.push(Oe),
                    oe(ae, 'animation-duration', `${Dt()}ms`),
                    oe(ae, 'animation-timing-function', sn()),
                    oe(ae, 'animation-delay', `${An()}ms`),
                    oe(ae, 'animation-fill-mode', jt()),
                    oe(ae, 'animation-direction', on());
                  const rt = wn() === 1 / 0 ? 'infinite' : wn().toString();
                  oe(ae, 'animation-iteration-count', rt),
                    oe(ae, 'animation-play-state', 'paused'),
                    N && oe(ae, 'animation-name', `${Oe.id}-alt`),
                    (0, o.r)(() => {
                      oe(ae, 'animation-name', Oe.id || null);
                    });
                }
              });
            },
            Tn = (N = !0) => {
              (() => {
                bn.forEach((Ve) => Ve()), jn.forEach((Ve) => Ve());
                const N = W,
                  ee = le,
                  ae = B;
                Mt.forEach((Ve) => {
                  const Oe = Ve.classList;
                  N.forEach((rt) => Oe.add(rt)),
                    ee.forEach((rt) => Oe.remove(rt));
                  for (const rt in ae)
                    ae.hasOwnProperty(rt) && oe(Ve, rt, ae[rt]);
                });
              })(),
                de.length > 0 &&
                  (Xt
                    ? (Mt.forEach((N) => {
                        const ee = N.animate(de, {
                          id: bt,
                          delay: An(),
                          duration: Dt(),
                          easing: sn(),
                          iterations: wn(),
                          fill: jt(),
                          direction: on(),
                        });
                        ee.pause(), Pt.push(ee);
                      }),
                      Pt.length > 0 &&
                        (Pt[0].onfinish = () => {
                          an();
                        }))
                    : ln(N)),
                (fe = !0);
            },
            pn = (N) => {
              if (((N = Math.min(Math.max(N, 0), 0.9999)), Xt))
                Pt.forEach((ee) => {
                  (ee.currentTime =
                    ee.effect.getComputedTiming().delay + Dt() * N),
                    ee.pause();
                });
              else {
                const ee = `-${Dt() * N}ms`;
                Mt.forEach((ae) => {
                  de.length > 0 &&
                    (oe(ae, 'animation-delay', ee),
                    oe(ae, 'animation-play-state', 'paused'));
                });
              }
            },
            On = (N) => {
              Pt.forEach((ee) => {
                ee.effect.updateTiming({
                  delay: An(),
                  duration: Dt(),
                  easing: sn(),
                  iterations: wn(),
                  fill: jt(),
                  direction: on(),
                });
              }),
                void 0 !== N && pn(N);
            },
            Sn = (N = !0, ee) => {
              (0, o.r)(() => {
                Mt.forEach((ae) => {
                  oe(ae, 'animation-name', nt || null),
                    oe(ae, 'animation-duration', `${Dt()}ms`),
                    oe(ae, 'animation-timing-function', sn()),
                    oe(
                      ae,
                      'animation-delay',
                      void 0 !== ee ? `-${ee * Dt()}ms` : `${An()}ms`
                    ),
                    oe(ae, 'animation-fill-mode', jt() || null),
                    oe(ae, 'animation-direction', on() || null);
                  const Ve = wn() === 1 / 0 ? 'infinite' : wn().toString();
                  oe(ae, 'animation-iteration-count', Ve),
                    N && oe(ae, 'animation-name', `${nt}-alt`),
                    (0, o.r)(() => {
                      oe(ae, 'animation-name', nt || null);
                    });
                });
              });
            },
            gn = (N = !1, ee = !0, ae) => (
              N &&
                Ye.forEach((Ve) => {
                  Ve.update(N, ee, ae);
                }),
              Xt ? On(ae) : Sn(ee, ae),
              Ke
            ),
            Cr = () => {
              fe &&
                (Xt
                  ? Pt.forEach((N) => {
                      N.pause();
                    })
                  : Mt.forEach((N) => {
                      oe(N, 'animation-play-state', 'paused');
                    }),
                (ft = !0));
            },
            ar = () => {
              (K = void 0), an();
            },
            yn = () => {
              K && clearTimeout(K);
            },
            T = (N) =>
              new Promise((ee) => {
                N?.sync &&
                  ((L = !0), Vt(() => (L = !1), { oneTimeCallback: !0 })),
                  fe || Tn(),
                  Ae && (Xt ? (pn(0), On()) : Sn(), (Ae = !1)),
                  We && ((ie = Ye.length + 1), (We = !1)),
                  Vt(() => ee(), { oneTimeCallback: !0 }),
                  Ye.forEach((ae) => {
                    ae.play();
                  }),
                  Xt
                    ? (Pt.forEach((N) => {
                        N.play();
                      }),
                      (0 === de.length || 0 === Mt.length) && an())
                    : (() => {
                        if (
                          (yn(),
                          (0, o.r)(() => {
                            Mt.forEach((N) => {
                              de.length > 0 &&
                                oe(N, 'animation-play-state', 'running');
                            });
                          }),
                          0 === de.length || 0 === Mt.length)
                        )
                          an();
                        else {
                          const N = An() || 0,
                            ee = Dt() || 0,
                            ae = wn() || 1;
                          isFinite(ae) &&
                            (K = setTimeout(ar, N + ee * ae + 100)),
                            ((ge, te) => {
                              let He;
                              const _e = { passive: !0 },
                                se = (ke) => {
                                  ge === ke.target &&
                                    (He && He(),
                                    yn(),
                                    (0, o.r)(() => {
                                      Mt.forEach((N) => {
                                        xe(N, 'animation-duration'),
                                          xe(N, 'animation-delay'),
                                          xe(N, 'animation-play-state');
                                      }),
                                        (0, o.r)(an);
                                    }));
                                };
                              ge &&
                                (ge.addEventListener(
                                  'webkitAnimationEnd',
                                  se,
                                  _e
                                ),
                                ge.addEventListener('animationend', se, _e),
                                (He = () => {
                                  ge.removeEventListener(
                                    'webkitAnimationEnd',
                                    se,
                                    _e
                                  ),
                                    ge.removeEventListener(
                                      'animationend',
                                      se,
                                      _e
                                    );
                                }));
                            })(Mt[0]);
                        }
                      })(),
                  (ft = !1);
              }),
            H = (N, ee) => {
              const ae = de[0];
              return (
                void 0 === ae || (void 0 !== ae.offset && 0 !== ae.offset)
                  ? (de = [{ offset: 0, [N]: ee }, ...de])
                  : (ae[N] = ee),
                Ke
              );
            };
          return (Ke = {
            parentAnimation: k,
            elements: Mt,
            childAnimations: Ye,
            id: bt,
            animationFinish: an,
            from: H,
            to: (N, ee) => {
              const ae = de[de.length - 1];
              return (
                void 0 === ae || (void 0 !== ae.offset && 1 !== ae.offset)
                  ? (de = [...de, { offset: 1, [N]: ee }])
                  : (ae[N] = ee),
                Ke
              );
            },
            fromTo: (N, ee, ae) => H(N, ee).to(N, ae),
            parent: (N) => ((k = N), Ke),
            play: T,
            pause: () => (
              Ye.forEach((N) => {
                N.pause();
              }),
              Cr(),
              Ke
            ),
            stop: () => {
              Ye.forEach((N) => {
                N.stop();
              }),
                fe && (At(), (fe = !1)),
                (X = !1),
                (L = !1),
                (We = !0),
                (q = void 0),
                (Re = void 0),
                (Pe = void 0),
                (ie = 0),
                (Ae = !1),
                (ye = !0),
                (ft = !1);
            },
            destroy: (N) => (
              Ye.forEach((ee) => {
                ee.destroy(N);
              }),
              ((N) => {
                At(), N && un();
              })(N),
              (Mt.length = 0),
              (Ye.length = 0),
              (de.length = 0),
              (lt.length = 0),
              (Ft.length = 0),
              (fe = !1),
              (We = !0),
              Ke
            ),
            keyframes: (N) => {
              const ee = de !== N;
              return (
                (de = N),
                ee &&
                  ((N) => {
                    Xt
                      ? Jt().forEach((ee) => {
                          if (ee.effect.setKeyframes) ee.effect.setKeyframes(N);
                          else {
                            const ae = new KeyframeEffect(
                              ee.effect.target,
                              N,
                              ee.effect.getTiming()
                            );
                            ee.effect = ae;
                          }
                        })
                      : ln();
                  })(de),
                Ke
              );
            },
            addAnimation: (N) => {
              if (null != N)
                if (Array.isArray(N))
                  for (const ee of N) ee.parent(Ke), Ye.push(ee);
                else N.parent(Ke), Ye.push(N);
              return Ke;
            },
            addElement: (N) => {
              if (null != N)
                if (1 === N.nodeType) Mt.push(N);
                else if (N.length >= 0)
                  for (let ee = 0; ee < N.length; ee++) Mt.push(N[ee]);
                else console.error('Invalid addElement value');
              return Ke;
            },
            update: gn,
            fill: (N) => ((se = N), gn(!0), Ke),
            direction: (N) => ((ke = N), gn(!0), Ke),
            iterations: (N) => ((he = N), gn(!0), Ke),
            duration: (N) => (!Xt && 0 === N && (N = 1), (He = N), gn(!0), Ke),
            easing: (N) => ((_e = N), gn(!0), Ke),
            delay: (N) => ((te = N), gn(!0), Ke),
            getWebAnimations: Jt,
            getKeyframes: () => de,
            getFill: jt,
            getDirection: on,
            getDelay: An,
            getIterations: wn,
            getEasing: sn,
            getDuration: Dt,
            afterAddRead: (N) => (st.push(N), Ke),
            afterAddWrite: (N) => (Ln.push(N), Ke),
            afterClearStyles: (N = []) => {
              for (const ee of N) Ie[ee] = '';
              return Ke;
            },
            afterStyles: (N = {}) => ((Ie = N), Ke),
            afterRemoveClass: (N) => ((G = me(G, N)), Ke),
            afterAddClass: (N) => ((Y = me(Y, N)), Ke),
            beforeAddRead: (N) => (bn.push(N), Ke),
            beforeAddWrite: (N) => (jn.push(N), Ke),
            beforeClearStyles: (N = []) => {
              for (const ee of N) B[ee] = '';
              return Ke;
            },
            beforeStyles: (N = {}) => ((B = N), Ke),
            beforeRemoveClass: (N) => ((le = me(le, N)), Ke),
            beforeAddClass: (N) => ((W = me(W, N)), Ke),
            onFinish: Vt,
            isRunning: () => 0 !== ie && !ft,
            progressStart: (N = !1, ee) => (
              Ye.forEach((ae) => {
                ae.progressStart(N, ee);
              }),
              Cr(),
              (X = N),
              fe || Tn(),
              gn(!1, !0, ee),
              Ke
            ),
            progressStep: (N) => (
              Ye.forEach((ee) => {
                ee.progressStep(N);
              }),
              pn(N),
              Ke
            ),
            progressEnd: (N, ee, ae) => (
              (X = !1),
              Ye.forEach((Ve) => {
                Ve.progressEnd(N, ee, ae);
              }),
              void 0 !== ae && (Re = ae),
              (Ae = !1),
              (ye = !0),
              0 === N
                ? ((q = 'reverse' === on() ? 'normal' : 'reverse'),
                  'reverse' === q && (ye = !1),
                  Xt
                    ? (gn(), pn(1 - ee))
                    : ((Pe = (1 - ee) * Dt() * -1), gn(!1, !1)))
                : 1 === N &&
                  (Xt ? (gn(), pn(ee)) : ((Pe = ee * Dt() * -1), gn(!1, !1))),
              void 0 !== N &&
                (Vt(
                  () => {
                    (Re = void 0), (q = void 0), (Pe = void 0);
                  },
                  { oneTimeCallback: !0 }
                ),
                k || T()),
              Ke
            ),
          });
        };
    },
    4349: (at, $e, S) => {
      'use strict';
      S.d($e, { G: () => pe });
      class P {
        constructor(oe, xe, Se, Fe, ve) {
          (this.id = xe),
            (this.name = Se),
            (this.disableScroll = ve),
            (this.priority = 1e6 * Fe + xe),
            (this.ctrl = oe);
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
          const oe = this.ctrl.capture(this.name, this.id, this.priority);
          return (
            oe && this.disableScroll && this.ctrl.disableScroll(this.id), oe
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
      class U {
        constructor(oe, xe, Se, Fe) {
          (this.id = xe),
            (this.disable = Se),
            (this.disableScroll = Fe),
            (this.ctrl = oe);
        }
        block() {
          if (this.ctrl) {
            if (this.disable)
              for (const oe of this.disable)
                this.ctrl.disableGesture(oe, this.id);
            this.disableScroll && this.ctrl.disableScroll(this.id);
          }
        }
        unblock() {
          if (this.ctrl) {
            if (this.disable)
              for (const oe of this.disable)
                this.ctrl.enableGesture(oe, this.id);
            this.disableScroll && this.ctrl.enableScroll(this.id);
          }
        }
        destroy() {
          this.unblock(), (this.ctrl = void 0);
        }
      }
      const j = 'backdrop-no-scroll',
        pe = new (class o {
          constructor() {
            (this.gestureId = 0),
              (this.requestedStart = new Map()),
              (this.disabledGestures = new Map()),
              (this.disabledScroll = new Set());
          }
          createGesture(oe) {
            var xe;
            return new P(
              this,
              this.newID(),
              oe.name,
              null !== (xe = oe.priority) && void 0 !== xe ? xe : 0,
              !!oe.disableScroll
            );
          }
          createBlocker(oe = {}) {
            return new U(this, this.newID(), oe.disable, !!oe.disableScroll);
          }
          start(oe, xe, Se) {
            return this.canStart(oe)
              ? (this.requestedStart.set(xe, Se), !0)
              : (this.requestedStart.delete(xe), !1);
          }
          capture(oe, xe, Se) {
            if (!this.start(oe, xe, Se)) return !1;
            const Fe = this.requestedStart;
            let ve = -1e4;
            if (
              (Fe.forEach((be) => {
                ve = Math.max(ve, be);
              }),
              ve === Se)
            ) {
              (this.capturedId = xe), Fe.clear();
              const be = new CustomEvent('ionGestureCaptured', {
                detail: { gestureName: oe },
              });
              return document.dispatchEvent(be), !0;
            }
            return Fe.delete(xe), !1;
          }
          release(oe) {
            this.requestedStart.delete(oe),
              this.capturedId === oe && (this.capturedId = void 0);
          }
          disableGesture(oe, xe) {
            let Se = this.disabledGestures.get(oe);
            void 0 === Se &&
              ((Se = new Set()), this.disabledGestures.set(oe, Se)),
              Se.add(xe);
          }
          enableGesture(oe, xe) {
            const Se = this.disabledGestures.get(oe);
            void 0 !== Se && Se.delete(xe);
          }
          disableScroll(oe) {
            this.disabledScroll.add(oe),
              1 === this.disabledScroll.size && document.body.classList.add(j);
          }
          enableScroll(oe) {
            this.disabledScroll.delete(oe),
              0 === this.disabledScroll.size &&
                document.body.classList.remove(j);
          }
          canStart(oe) {
            return !(void 0 !== this.capturedId || this.isDisabled(oe));
          }
          isCaptured() {
            return void 0 !== this.capturedId;
          }
          isScrollDisabled() {
            return this.disabledScroll.size > 0;
          }
          isDisabled(oe) {
            const xe = this.disabledGestures.get(oe);
            return !!(xe && xe.size > 0);
          }
          newID() {
            return this.gestureId++, this.gestureId;
          }
        })();
    },
    7593: (at, $e, S) => {
      'use strict';
      S.r($e),
        S.d($e, {
          MENU_BACK_BUTTON_PRIORITY: () => pe,
          OVERLAY_BACK_BUTTON_PRIORITY: () => j,
          blockHardwareBackButton: () => P,
          startHardwareBackButton: () => U,
        });
      var o = S(5861);
      const P = () => {
          document.addEventListener('backbutton', () => {});
        },
        U = () => {
          const Le = document;
          let oe = !1;
          Le.addEventListener('backbutton', () => {
            if (oe) return;
            let xe = 0,
              Se = [];
            const Fe = new CustomEvent('ionBackButton', {
              bubbles: !1,
              detail: {
                register(ue, ne) {
                  Se.push({ priority: ue, handler: ne, id: xe++ });
                },
              },
            });
            Le.dispatchEvent(Fe);
            const ve = (function () {
                var ue = (0, o.Z)(function* (ne) {
                  try {
                    if (ne?.handler) {
                      const me = ne.handler(be);
                      null != me && (yield me);
                    }
                  } catch (me) {
                    console.error(me);
                  }
                });
                return function (me) {
                  return ue.apply(this, arguments);
                };
              })(),
              be = () => {
                if (Se.length > 0) {
                  let ue = {
                    priority: Number.MIN_SAFE_INTEGER,
                    handler: () => {},
                    id: -1,
                  };
                  Se.forEach((ne) => {
                    ne.priority >= ue.priority && (ue = ne);
                  }),
                    (oe = !0),
                    (Se = Se.filter((ne) => ne.id !== ue.id)),
                    ve(ue).then(() => (oe = !1));
                }
              };
            be();
          });
        },
        j = 100,
        pe = 99;
    },
    5730: (at, $e, S) => {
      'use strict';
      S.d($e, {
        a: () => oe,
        b: () => xe,
        c: () => U,
        d: () => ne,
        e: () => me,
        f: () => ue,
        g: () => Se,
        h: () => he,
        i: () => Le,
        j: () => j,
        k: () => be,
        l: () => Be,
        m: () => ve,
        n: () => ge,
        o: () => _e,
        p: () => He,
        q: () => se,
        r: () => Fe,
        s: () => ke,
        t: () => o,
        u: () => te,
      });
      const o = (de, W = 0) =>
          new Promise((le) => {
            P(de, W, le);
          }),
        P = (de, W = 0, le) => {
          let fe, k;
          const B = { passive: !0 },
            G = () => {
              fe && fe();
            },
            Ie = (ie) => {
              (void 0 === ie || de === ie.target) && (G(), le(ie));
            };
          return (
            de &&
              (de.addEventListener('webkitTransitionEnd', Ie, B),
              de.addEventListener('transitionend', Ie, B),
              (k = setTimeout(Ie, W + 500)),
              (fe = () => {
                k && (clearTimeout(k), (k = void 0)),
                  de.removeEventListener('webkitTransitionEnd', Ie, B),
                  de.removeEventListener('transitionend', Ie, B);
              })),
            G
          );
        },
        U = (de, W) => {
          de.componentOnReady
            ? de.componentOnReady().then((le) => W(le))
            : Fe(() => W(de));
        },
        j = (de, W = []) => {
          const le = {};
          return (
            W.forEach((fe) => {
              de.hasAttribute(fe) &&
                (null !== de.getAttribute(fe) && (le[fe] = de.getAttribute(fe)),
                de.removeAttribute(fe));
            }),
            le
          );
        },
        pe = [
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
        Le = (de, W) => {
          let le = pe;
          return (
            W && W.length > 0 && (le = le.filter((fe) => !W.includes(fe))),
            j(de, le)
          );
        },
        oe = (de, W, le, fe) => {
          var k;
          if (typeof window < 'u') {
            const Y =
              null === (k = window?.Ionic) || void 0 === k ? void 0 : k.config;
            if (Y) {
              const G = Y.get('_ael');
              if (G) return G(de, W, le, fe);
              if (Y._ael) return Y._ael(de, W, le, fe);
            }
          }
          return de.addEventListener(W, le, fe);
        },
        xe = (de, W, le, fe) => {
          var k;
          if (typeof window < 'u') {
            const Y =
              null === (k = window?.Ionic) || void 0 === k ? void 0 : k.config;
            if (Y) {
              const G = Y.get('_rel');
              if (G) return G(de, W, le, fe);
              if (Y._rel) return Y._rel(de, W, le, fe);
            }
          }
          return de.removeEventListener(W, le, fe);
        },
        Se = (de, W = de) => de.shadowRoot || W,
        Fe = (de) =>
          'function' == typeof __zone_symbol__requestAnimationFrame
            ? __zone_symbol__requestAnimationFrame(de)
            : 'function' == typeof requestAnimationFrame
            ? requestAnimationFrame(de)
            : setTimeout(de),
        ve = (de) => !!de.shadowRoot && !!de.attachShadow,
        be = (de) => {
          const W = de.closest('ion-item');
          return W ? W.querySelector('ion-label') : null;
        },
        ue = (de) => {
          if ((de.focus(), de.classList.contains('ion-focusable'))) {
            const W = de.closest('ion-app');
            W && W.setFocus([de]);
          }
        },
        ne = (de, W) => {
          let le;
          const fe = de.getAttribute('aria-labelledby'),
            k = de.id;
          let B = null !== fe && '' !== fe.trim() ? fe : W + '-lbl',
            Y =
              null !== fe && '' !== fe.trim()
                ? document.getElementById(fe)
                : be(de);
          return (
            Y
              ? (null === fe && (Y.id = B),
                (le = Y.textContent),
                Y.setAttribute('aria-hidden', 'true'))
              : '' !== k.trim() &&
                ((Y = document.querySelector(`label[for="${k}"]`)),
                Y &&
                  ('' !== Y.id ? (B = Y.id) : (Y.id = B = `${k}-lbl`),
                  (le = Y.textContent))),
            { label: Y, labelId: B, labelText: le }
          );
        },
        me = (de, W, le, fe, k) => {
          if (de || ve(W)) {
            let B = W.querySelector('input.aux-input');
            B ||
              ((B = W.ownerDocument.createElement('input')),
              (B.type = 'hidden'),
              B.classList.add('aux-input'),
              W.appendChild(B)),
              (B.disabled = k),
              (B.name = le),
              (B.value = fe || '');
          }
        },
        Be = (de, W, le) => Math.max(de, Math.min(W, le)),
        ge = (de, W) => {
          if (!de) {
            const le = 'ASSERT: ' + W;
            throw (console.error(le), new Error(le));
          }
        },
        te = (de) => de.timeStamp || Date.now(),
        He = (de) => {
          if (de) {
            const W = de.changedTouches;
            if (W && W.length > 0) {
              const le = W[0];
              return { x: le.clientX, y: le.clientY };
            }
            if (void 0 !== de.pageX) return { x: de.pageX, y: de.pageY };
          }
          return { x: 0, y: 0 };
        },
        _e = (de) => {
          const W = 'rtl' === document.dir;
          switch (de) {
            case 'start':
              return W;
            case 'end':
              return !W;
            default:
              throw new Error(
                `"${de}" is not a valid value for [side]. Use "start" or "end" instead.`
              );
          }
        },
        he = (de, W) => {
          const le = de._original || de;
          return { _original: de, emit: se(le.emit.bind(le), W) };
        },
        se = (de, W = 0) => {
          let le;
          return (...fe) => {
            clearTimeout(le), (le = setTimeout(de, W, ...fe));
          };
        },
        ke = (de, W) => {
          if ((de ?? (de = {}), W ?? (W = {}), de === W)) return !0;
          const le = Object.keys(de);
          if (le.length !== Object.keys(W).length) return !1;
          for (const fe of le) if (!(fe in W) || de[fe] !== W[fe]) return !1;
          return !0;
        };
    },
    4292: (at, $e, S) => {
      'use strict';
      S.d($e, { m: () => ve });
      var o = S(5861),
        P = S(7593),
        U = S(5730),
        j = S(9658),
        pe = S(8834);
      const Le = (be) => (0, pe.c)().duration(be ? 400 : 300),
        oe = (be) => {
          let ue, ne;
          const me = be.width + 8,
            Be = (0, pe.c)(),
            ge = (0, pe.c)();
          be.isEndSide
            ? ((ue = me + 'px'), (ne = '0px'))
            : ((ue = -me + 'px'), (ne = '0px')),
            Be.addElement(be.menuInnerEl).fromTo(
              'transform',
              `translateX(${ue})`,
              `translateX(${ne})`
            );
          const He = 'ios' === (0, j.b)(be),
            _e = He ? 0.2 : 0.25;
          return (
            ge.addElement(be.backdropEl).fromTo('opacity', 0.01, _e),
            Le(He).addAnimation([Be, ge])
          );
        },
        xe = (be) => {
          let ue, ne;
          const me = (0, j.b)(be),
            Be = be.width;
          be.isEndSide
            ? ((ue = -Be + 'px'), (ne = Be + 'px'))
            : ((ue = Be + 'px'), (ne = -Be + 'px'));
          const ge = (0, pe.c)()
              .addElement(be.menuInnerEl)
              .fromTo('transform', `translateX(${ne})`, 'translateX(0px)'),
            te = (0, pe.c)()
              .addElement(be.contentEl)
              .fromTo('transform', 'translateX(0px)', `translateX(${ue})`),
            He = (0, pe.c)()
              .addElement(be.backdropEl)
              .fromTo('opacity', 0.01, 0.32);
          return Le('ios' === me).addAnimation([ge, te, He]);
        },
        Se = (be) => {
          const ue = (0, j.b)(be),
            ne = be.width * (be.isEndSide ? -1 : 1) + 'px',
            me = (0, pe.c)()
              .addElement(be.contentEl)
              .fromTo('transform', 'translateX(0px)', `translateX(${ne})`);
          return Le('ios' === ue).addAnimation(me);
        },
        ve = (() => {
          const be = new Map(),
            ue = [],
            ne = (function () {
              var K = (0, o.Z)(function* (q) {
                const Re = yield he(q);
                return !!Re && Re.open();
              });
              return function (Re) {
                return K.apply(this, arguments);
              };
            })(),
            me = (function () {
              var K = (0, o.Z)(function* (q) {
                const Re = yield void 0 !== q ? he(q) : se();
                return void 0 !== Re && Re.close();
              });
              return function (Re) {
                return K.apply(this, arguments);
              };
            })(),
            Be = (function () {
              var K = (0, o.Z)(function* (q) {
                const Re = yield he(q);
                return !!Re && Re.toggle();
              });
              return function (Re) {
                return K.apply(this, arguments);
              };
            })(),
            ge = (function () {
              var K = (0, o.Z)(function* (q, Re) {
                const Pe = yield he(Re);
                return Pe && (Pe.disabled = !q), Pe;
              });
              return function (Re, Pe) {
                return K.apply(this, arguments);
              };
            })(),
            te = (function () {
              var K = (0, o.Z)(function* (q, Re) {
                const Pe = yield he(Re);
                return Pe && (Pe.swipeGesture = q), Pe;
              });
              return function (Re, Pe) {
                return K.apply(this, arguments);
              };
            })(),
            He = (function () {
              var K = (0, o.Z)(function* (q) {
                if (null != q) {
                  const Re = yield he(q);
                  return void 0 !== Re && Re.isOpen();
                }
                return void 0 !== (yield se());
              });
              return function (Re) {
                return K.apply(this, arguments);
              };
            })(),
            _e = (function () {
              var K = (0, o.Z)(function* (q) {
                const Re = yield he(q);
                return !!Re && !Re.disabled;
              });
              return function (Re) {
                return K.apply(this, arguments);
              };
            })(),
            he = (function () {
              var K = (0, o.Z)(function* (q) {
                return (
                  yield L(),
                  'start' === q || 'end' === q
                    ? X((ye) => ye.side === q && !ye.disabled) ||
                      X((ye) => ye.side === q)
                    : null != q
                    ? X((Pe) => Pe.menuId === q)
                    : X((Pe) => !Pe.disabled) ||
                      (ue.length > 0 ? ue[0].el : void 0)
                );
              });
              return function (Re) {
                return K.apply(this, arguments);
              };
            })(),
            se = (function () {
              var K = (0, o.Z)(function* () {
                return yield L(), G();
              });
              return function () {
                return K.apply(this, arguments);
              };
            })(),
            ke = (function () {
              var K = (0, o.Z)(function* () {
                return yield L(), Ie();
              });
              return function () {
                return K.apply(this, arguments);
              };
            })(),
            de = (function () {
              var K = (0, o.Z)(function* () {
                return yield L(), ie();
              });
              return function () {
                return K.apply(this, arguments);
              };
            })(),
            W = (K, q) => {
              be.set(K, q);
            },
            k = (K) => {
              const q = K.side;
              ue.filter((Re) => Re.side === q && Re !== K).forEach(
                (Re) => (Re.disabled = !0)
              );
            },
            B = (function () {
              var K = (0, o.Z)(function* (q, Re, Pe) {
                if (ie()) return !1;
                if (Re) {
                  const ye = yield se();
                  ye && q.el !== ye && (yield ye.setOpen(!1, !1));
                }
                return q._setOpen(Re, Pe);
              });
              return function (Re, Pe, ye) {
                return K.apply(this, arguments);
              };
            })(),
            G = () => X((K) => K._isOpen),
            Ie = () => ue.map((K) => K.el),
            ie = () => ue.some((K) => K.isAnimating),
            X = (K) => {
              const q = ue.find(K);
              if (void 0 !== q) return q.el;
            },
            L = () =>
              Promise.all(
                Array.from(document.querySelectorAll('ion-menu')).map(
                  (K) => new Promise((q) => (0, U.c)(K, q))
                )
              );
          return (
            W('reveal', Se),
            W('push', xe),
            W('overlay', oe),
            typeof document < 'u' &&
              document.addEventListener('ionBackButton', (K) => {
                const q = G();
                q &&
                  K.detail.register(P.MENU_BACK_BUTTON_PRIORITY, () =>
                    q.close()
                  );
              }),
            {
              registerAnimation: W,
              get: he,
              getMenus: ke,
              getOpen: se,
              isEnabled: _e,
              swipeGesture: te,
              isAnimating: de,
              isOpen: He,
              enable: ge,
              toggle: Be,
              close: me,
              open: ne,
              _getOpenSync: G,
              _createAnimation: (K, q) => {
                const Re = be.get(K);
                if (!Re) throw new Error('animation not registered');
                return Re(q);
              },
              _register: (K) => {
                ue.indexOf(K) < 0 && (K.disabled || k(K), ue.push(K));
              },
              _unregister: (K) => {
                const q = ue.indexOf(K);
                q > -1 && ue.splice(q, 1);
              },
              _setOpen: B,
              _setActiveMenu: k,
            }
          );
        })();
    },
    3457: (at, $e, S) => {
      'use strict';
      S.d($e, { w: () => o });
      const o = typeof window < 'u' ? window : void 0;
    },
    1308: (at, $e, S) => {
      'use strict';
      S.d($e, {
        B: () => Rn,
        H: () => Mt,
        a: () => ye,
        b: () => vt,
        c: () => en,
        e: () => tr,
        f: () => mn,
        g: () => Ae,
        h: () => lt,
        i: () => kt,
        j: () => on,
        k: () => Zt,
        p: () => Be,
        r: () => ir,
        s: () => ne,
      });
      var o = S(5861);
      let U,
        j,
        pe,
        Le = !1,
        oe = !1,
        xe = !1,
        Se = !1,
        Fe = !1;
      const ve = typeof window < 'u' ? window : {},
        be = ve.document || { head: {} },
        ue = {
          $flags$: 0,
          $resourcesUrl$: '',
          jmp: (T) => T(),
          raf: (T) => requestAnimationFrame(T),
          ael: (T, $, H, Q) => T.addEventListener($, H, Q),
          rel: (T, $, H, Q) => T.removeEventListener($, H, Q),
          ce: (T, $) => new CustomEvent(T, $),
        },
        ne = (T) => {
          Object.assign(ue, T);
        },
        Be = (T) => Promise.resolve(T),
        ge = (() => {
          try {
            return (
              new CSSStyleSheet(),
              'function' == typeof new CSSStyleSheet().replaceSync
            );
          } catch {}
          return !1;
        })(),
        te = (T, $, H, Q) => {
          H &&
            H.map(([De, N, ee]) => {
              const ae = _e(T, De),
                Ve = He($, ee),
                Oe = he(De);
              ue.ael(ae, N, Ve, Oe),
                ($.$rmListeners$ = $.$rmListeners$ || []).push(() =>
                  ue.rel(ae, N, Ve, Oe)
                );
            });
        },
        He = (T, $) => (H) => {
          try {
            256 & T.$flags$
              ? T.$lazyInstance$[$](H)
              : (T.$queuedListeners$ = T.$queuedListeners$ || []).push([$, H]);
          } catch (Q) {
            On(Q);
          }
        },
        _e = (T, $) => (4 & $ ? be : 8 & $ ? ve : 16 & $ ? be.body : T),
        he = (T) => 0 != (2 & T),
        le = 's-id',
        fe = 'sty-id',
        k = 'c-id',
        Y = 'http://www.w3.org/1999/xlink',
        ie = new WeakMap(),
        X = (T, $, H) => {
          let Q = fr.get(T);
          ge && H
            ? ((Q = Q || new CSSStyleSheet()),
              'string' == typeof Q ? (Q = $) : Q.replaceSync($))
            : (Q = $),
            fr.set(T, Q);
        },
        L = (T, $, H, Q) => {
          let De = q($, H);
          const N = fr.get(De);
          if (((T = 11 === T.nodeType ? T : be), N))
            if ('string' == typeof N) {
              let ae,
                ee = ie.get((T = T.head || T));
              ee || ie.set(T, (ee = new Set())),
                ee.has(De) ||
                  (T.host && (ae = T.querySelector(`[${fe}="${De}"]`))
                    ? (ae.innerHTML = N)
                    : ((ae = be.createElement('style')),
                      (ae.innerHTML = N),
                      T.insertBefore(ae, T.querySelector('link'))),
                  ee && ee.add(De));
            } else
              T.adoptedStyleSheets.includes(N) ||
                (T.adoptedStyleSheets = [...T.adoptedStyleSheets, N]);
          return De;
        },
        q = (T, $) =>
          'sc-' + ($ && 32 & T.$flags$ ? T.$tagName$ + '-' + $ : T.$tagName$),
        Re = (T) => T.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, '$1{'),
        ye = (T) => Sr.push(T),
        Ae = (T) => ln(T).$modeName$,
        We = {},
        bt = (T) => 'object' == (T = typeof T) || 'function' === T,
        lt = (T, $, ...H) => {
          let Q = null,
            De = null,
            N = null,
            ee = !1,
            ae = !1;
          const Ve = [],
            Oe = (ot) => {
              for (let et = 0; et < ot.length; et++)
                (Q = ot[et]),
                  Array.isArray(Q)
                    ? Oe(Q)
                    : null != Q &&
                      'boolean' != typeof Q &&
                      ((ee = 'function' != typeof T && !bt(Q)) &&
                        (Q = String(Q)),
                      ee && ae
                        ? (Ve[Ve.length - 1].$text$ += Q)
                        : Ve.push(ee ? Ft(null, Q) : Q),
                      (ae = ee));
            };
          if ((Oe(H), $)) {
            $.key && (De = $.key), $.name && (N = $.name);
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
          if ('function' == typeof T) return T(null === $ ? {} : $, Ve, Lt);
          const rt = Ft(T, null);
          return (
            (rt.$attrs$ = $),
            Ve.length > 0 && (rt.$children$ = Ve),
            (rt.$key$ = De),
            (rt.$name$ = N),
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
            const H = Object.assign({}, T.vattrs);
            return (
              T.vkey && (H.key = T.vkey),
              T.vname && (H.name = T.vname),
              lt(T.vtag, H, ...(T.vchildren || []))
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
        st = (T, $, H, Q, De, N) => {
          if (H !== Q) {
            let ee = pn(T, $),
              ae = $.toLowerCase();
            if ('class' === $) {
              const Ve = T.classList,
                Oe = Pt(H),
                rt = Pt(Q);
              Ve.remove(...Oe.filter((ot) => ot && !rt.includes(ot))),
                Ve.add(...rt.filter((ot) => ot && !Oe.includes(ot)));
            } else if ('style' === $) {
              for (const Ve in H)
                (!Q || null == Q[Ve]) &&
                  (Ve.includes('-')
                    ? T.style.removeProperty(Ve)
                    : (T.style[Ve] = ''));
              for (const Ve in Q)
                (!H || Q[Ve] !== H[Ve]) &&
                  (Ve.includes('-')
                    ? T.style.setProperty(Ve, Q[Ve])
                    : (T.style[Ve] = Q[Ve]));
            } else if ('key' !== $)
              if ('ref' === $) Q && Q(T);
              else if (ee || 'o' !== $[0] || 'n' !== $[1]) {
                const Ve = bt(Q);
                if ((ee || (Ve && null !== Q)) && !De)
                  try {
                    if (T.tagName.includes('-')) T[$] = Q;
                    else {
                      const rt = Q ?? '';
                      'list' === $
                        ? (ee = !1)
                        : (null == H || T[$] != rt) && (T[$] = rt);
                    }
                  } catch {}
                let Oe = !1;
                ae !== (ae = ae.replace(/^xlink\:?/, '')) &&
                  (($ = ae), (Oe = !0)),
                  null == Q || !1 === Q
                    ? (!1 !== Q || '' === T.getAttribute($)) &&
                      (Oe ? T.removeAttributeNS(Y, $) : T.removeAttribute($))
                    : (!ee || 4 & N || De) &&
                      !Ve &&
                      ((Q = !0 === Q ? '' : Q),
                      Oe ? T.setAttributeNS(Y, $, Q) : T.setAttribute($, Q));
              } else
                ($ =
                  '-' === $[2]
                    ? $.slice(3)
                    : pn(ve, ae)
                    ? ae.slice(2)
                    : ae[2] + $.slice(3)),
                  H && ue.rel(T, $, H, !1),
                  Q && ue.ael(T, $, Q, !1);
          }
        },
        Ln = /\s/,
        Pt = (T) => (T ? T.split(Ln) : []),
        cn = (T, $, H, Q) => {
          const De =
              11 === $.$elm$.nodeType && $.$elm$.host ? $.$elm$.host : $.$elm$,
            N = (T && T.$attrs$) || We,
            ee = $.$attrs$ || We;
          for (Q in N) Q in ee || st(De, Q, N[Q], void 0, H, $.$flags$);
          for (Q in ee) st(De, Q, N[Q], ee[Q], H, $.$flags$);
        },
        Xt = (T, $, H, Q) => {
          const De = $.$children$[H];
          let ee,
            ae,
            Ve,
            N = 0;
          if (
            (Le ||
              ((xe = !0),
              'slot' === De.$tag$ &&
                (U && Q.classList.add(U + '-s'),
                (De.$flags$ |= De.$children$ ? 2 : 1))),
            null !== De.$text$)
          )
            ee = De.$elm$ = be.createTextNode(De.$text$);
          else if (1 & De.$flags$) ee = De.$elm$ = be.createTextNode('');
          else {
            if (
              (Se || (Se = 'svg' === De.$tag$),
              (ee = De.$elm$ =
                be.createElementNS(
                  Se
                    ? 'http://www.w3.org/2000/svg'
                    : 'http://www.w3.org/1999/xhtml',
                  2 & De.$flags$ ? 'slot-fb' : De.$tag$
                )),
              Se && 'foreignObject' === De.$tag$ && (Se = !1),
              cn(null, De, Se),
              ((T) => null != T)(U) &&
                ee['s-si'] !== U &&
                ee.classList.add((ee['s-si'] = U)),
              De.$children$)
            )
              for (N = 0; N < De.$children$.length; ++N)
                (ae = Xt(T, De, N, ee)), ae && ee.appendChild(ae);
            'svg' === De.$tag$
              ? (Se = !1)
              : 'foreignObject' === ee.tagName && (Se = !0);
          }
          return (
            (ee['s-hn'] = pe),
            3 & De.$flags$ &&
              ((ee['s-sr'] = !0),
              (ee['s-cr'] = j),
              (ee['s-sn'] = De.$name$ || ''),
              (Ve = T && T.$children$ && T.$children$[H]),
              Ve && Ve.$tag$ === De.$tag$ && T.$elm$ && kn(T.$elm$, !1)),
            ee
          );
        },
        kn = (T, $) => {
          ue.$flags$ |= 1;
          const H = T.childNodes;
          for (let Q = H.length - 1; Q >= 0; Q--) {
            const De = H[Q];
            De['s-hn'] !== pe &&
              De['s-ol'] &&
              (Vt(De).insertBefore(De, qe(De)),
              De['s-ol'].remove(),
              (De['s-ol'] = void 0),
              (xe = !0)),
              $ && kn(De, $);
          }
          ue.$flags$ &= -2;
        },
        Jt = (T, $, H, Q, De, N) => {
          let ae,
            ee = (T['s-cr'] && T['s-cr'].parentNode) || T;
          for (
            ee.shadowRoot && ee.tagName === pe && (ee = ee.shadowRoot);
            De <= N;
            ++De
          )
            Q[De] &&
              ((ae = Xt(null, H, De, T)),
              ae && ((Q[De].$elm$ = ae), ee.insertBefore(ae, qe($))));
        },
        $n = (T, $, H, Q, De) => {
          for (; $ <= H; ++$)
            (Q = T[$]) &&
              ((De = Q.$elm$),
              Kt(Q),
              (oe = !0),
              De['s-ol'] ? De['s-ol'].remove() : kn(De, !0),
              De.remove());
        },
        ct = (T, $) =>
          T.$tag$ === $.$tag$ &&
          ('slot' === T.$tag$ ? T.$name$ === $.$name$ : T.$key$ === $.$key$),
        qe = (T) => (T && T['s-ol']) || T,
        Vt = (T) => (T['s-ol'] ? T['s-ol'] : T).parentNode,
        Yt = (T, $) => {
          const H = ($.$elm$ = T.$elm$),
            Q = T.$children$,
            De = $.$children$,
            N = $.$tag$,
            ee = $.$text$;
          let ae;
          null === ee
            ? ((Se = 'svg' === N || ('foreignObject' !== N && Se)),
              'slot' === N || cn(T, $, Se),
              null !== Q && null !== De
                ? ((T, $, H, Q) => {
                    let Ht,
                      Hn,
                      De = 0,
                      N = 0,
                      ee = 0,
                      ae = 0,
                      Ve = $.length - 1,
                      Oe = $[0],
                      rt = $[Ve],
                      ot = Q.length - 1,
                      et = Q[0],
                      Nt = Q[ot];
                    for (; De <= Ve && N <= ot; )
                      if (null == Oe) Oe = $[++De];
                      else if (null == rt) rt = $[--Ve];
                      else if (null == et) et = Q[++N];
                      else if (null == Nt) Nt = Q[--ot];
                      else if (ct(Oe, et))
                        Yt(Oe, et), (Oe = $[++De]), (et = Q[++N]);
                      else if (ct(rt, Nt))
                        Yt(rt, Nt), (rt = $[--Ve]), (Nt = Q[--ot]);
                      else if (ct(Oe, Nt))
                        ('slot' === Oe.$tag$ || 'slot' === Nt.$tag$) &&
                          kn(Oe.$elm$.parentNode, !1),
                          Yt(Oe, Nt),
                          T.insertBefore(Oe.$elm$, rt.$elm$.nextSibling),
                          (Oe = $[++De]),
                          (Nt = Q[--ot]);
                      else if (ct(rt, et))
                        ('slot' === Oe.$tag$ || 'slot' === Nt.$tag$) &&
                          kn(rt.$elm$.parentNode, !1),
                          Yt(rt, et),
                          T.insertBefore(rt.$elm$, Oe.$elm$),
                          (rt = $[--Ve]),
                          (et = Q[++N]);
                      else {
                        for (ee = -1, ae = De; ae <= Ve; ++ae)
                          if (
                            $[ae] &&
                            null !== $[ae].$key$ &&
                            $[ae].$key$ === et.$key$
                          ) {
                            ee = ae;
                            break;
                          }
                        ee >= 0
                          ? ((Hn = $[ee]),
                            Hn.$tag$ !== et.$tag$
                              ? (Ht = Xt($ && $[N], H, ee, T))
                              : (Yt(Hn, et), ($[ee] = void 0), (Ht = Hn.$elm$)),
                            (et = Q[++N]))
                          : ((Ht = Xt($ && $[N], H, N, T)), (et = Q[++N])),
                          Ht && Vt(Oe.$elm$).insertBefore(Ht, qe(Oe.$elm$));
                      }
                    De > Ve
                      ? Jt(
                          T,
                          null == Q[ot + 1] ? null : Q[ot + 1].$elm$,
                          H,
                          Q,
                          N,
                          ot
                        )
                      : N > ot && $n($, De, Ve);
                  })(H, Q, $, De)
                : null !== De
                ? (null !== T.$text$ && (H.textContent = ''),
                  Jt(H, null, $, De, 0, De.length - 1))
                : null !== Q && $n(Q, 0, Q.length - 1),
              Se && 'svg' === N && (Se = !1))
            : (ae = H['s-cr'])
            ? (ae.parentNode.textContent = ee)
            : T.$text$ !== ee && (H.data = ee);
        },
        At = (T) => {
          const $ = T.childNodes;
          let H, Q, De, N, ee, ae;
          for (Q = 0, De = $.length; Q < De; Q++)
            if (((H = $[Q]), 1 === H.nodeType)) {
              if (H['s-sr'])
                for (ee = H['s-sn'], H.hidden = !1, N = 0; N < De; N++)
                  if (
                    ((ae = $[N].nodeType),
                    $[N]['s-hn'] !== H['s-hn'] || '' !== ee)
                  ) {
                    if (1 === ae && ee === $[N].getAttribute('slot')) {
                      H.hidden = !0;
                      break;
                    }
                  } else if (
                    1 === ae ||
                    (3 === ae && '' !== $[N].textContent.trim())
                  ) {
                    H.hidden = !0;
                    break;
                  }
              At(H);
            }
        },
        un = [],
        In = (T) => {
          let $,
            H,
            Q,
            De,
            N,
            ee,
            ae = 0;
          const Ve = T.childNodes,
            Oe = Ve.length;
          for (; ae < Oe; ae++) {
            if ((($ = Ve[ae]), $['s-sr'] && (H = $['s-cr']) && H.parentNode))
              for (
                Q = H.parentNode.childNodes, De = $['s-sn'], ee = Q.length - 1;
                ee >= 0;
                ee--
              )
                (H = Q[ee]),
                  !H['s-cn'] &&
                    !H['s-nr'] &&
                    H['s-hn'] !== $['s-hn'] &&
                    (pt(H, De)
                      ? ((N = un.find((rt) => rt.$nodeToRelocate$ === H)),
                        (oe = !0),
                        (H['s-sn'] = H['s-sn'] || De),
                        N
                          ? (N.$slotRefNode$ = $)
                          : un.push({ $slotRefNode$: $, $nodeToRelocate$: H }),
                        H['s-sr'] &&
                          un.map((rt) => {
                            pt(rt.$nodeToRelocate$, H['s-sn']) &&
                              ((N = un.find((ot) => ot.$nodeToRelocate$ === H)),
                              N &&
                                !rt.$slotRefNode$ &&
                                (rt.$slotRefNode$ = N.$slotRefNode$));
                          }))
                      : un.some((rt) => rt.$nodeToRelocate$ === H) ||
                        un.push({ $nodeToRelocate$: H }));
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
        tr = (T, $, H) => {
          const Q = kt(T);
          return {
            emit: (De) =>
              Bn(Q, $, {
                bubbles: !!(4 & H),
                composed: !!(2 & H),
                cancelable: !!(1 & H),
                detail: De,
              }),
          };
        },
        Bn = (T, $, H) => {
          const Q = ue.ce($, H);
          return T.dispatchEvent(Q), Q;
        },
        Gn = (T, $) => {
          $ &&
            !T.$onRenderResolve$ &&
            $['s-p'] &&
            $['s-p'].push(new Promise((H) => (T.$onRenderResolve$ = H)));
        },
        _n = (T, $) => {
          if (((T.$flags$ |= 16), !(4 & T.$flags$)))
            return Gn(T, T.$ancestorComponent$), en(() => wt(T, $));
          T.$flags$ |= 512;
        },
        wt = (T, $) => {
          const Q = T.$lazyInstance$;
          let De;
          return (
            $ &&
              ((T.$flags$ |= 256),
              T.$queuedListeners$ &&
                (T.$queuedListeners$.map(([N, ee]) => Dt(Q, N, ee)),
                (T.$queuedListeners$ = null)),
              (De = Dt(Q, 'componentWillLoad'))),
            (De = wn(De, () => Dt(Q, 'componentWillRender'))),
            wn(De, () => nr(T, Q, $))
          );
        },
        nr = (function () {
          var T = (0, o.Z)(function* ($, H, Q) {
            const De = $.$hostElement$,
              ee = De['s-rc'];
            Q &&
              ((T) => {
                const $ = T.$cmpMeta$,
                  H = T.$hostElement$,
                  Q = $.$flags$,
                  N = L(
                    H.shadowRoot ? H.shadowRoot : H.getRootNode(),
                    $,
                    T.$modeName$
                  );
                10 & Q &&
                  ((H['s-sc'] = N),
                  H.classList.add(N + '-h'),
                  2 & Q && H.classList.add(N + '-s'));
              })($);
            rr($, H), ee && (ee.map((Ve) => Ve()), (De['s-rc'] = void 0));
            {
              const Ve = De['s-p'],
                Oe = () => jt($);
              0 === Ve.length
                ? Oe()
                : (Promise.all(Ve).then(Oe), ($.$flags$ |= 4), (Ve.length = 0));
            }
          });
          return function (H, Q, De) {
            return T.apply(this, arguments);
          };
        })(),
        rr = (T, $, H) => {
          try {
            ($ = $.render && $.render()),
              (T.$flags$ &= -17),
              (T.$flags$ |= 2),
              ((T, $) => {
                const H = T.$hostElement$,
                  Q = T.$cmpMeta$,
                  De = T.$vnode$ || Ft(null, null),
                  N = ((T) => T && T.$tag$ === Mt)($) ? $ : lt(null, null, $);
                if (
                  ((pe = H.tagName),
                  Q.$attrsToReflect$ &&
                    ((N.$attrs$ = N.$attrs$ || {}),
                    Q.$attrsToReflect$.map(
                      ([ee, ae]) => (N.$attrs$[ae] = H[ee])
                    )),
                  (N.$tag$ = null),
                  (N.$flags$ |= 4),
                  (T.$vnode$ = N),
                  (N.$elm$ = De.$elm$ = H.shadowRoot || H),
                  (U = H['s-sc']),
                  (j = H['s-cr']),
                  (Le = 0 != (1 & Q.$flags$)),
                  (oe = !1),
                  Yt(De, N),
                  (ue.$flags$ |= 1),
                  xe)
                ) {
                  In(N.$elm$);
                  let ee,
                    ae,
                    Ve,
                    Oe,
                    rt,
                    ot,
                    et = 0;
                  for (; et < un.length; et++)
                    (ee = un[et]),
                      (ae = ee.$nodeToRelocate$),
                      ae['s-ol'] ||
                        ((Ve = be.createTextNode('')),
                        (Ve['s-nr'] = ae),
                        ae.parentNode.insertBefore((ae['s-ol'] = Ve), ae));
                  for (et = 0; et < un.length; et++)
                    if (
                      ((ee = un[et]),
                      (ae = ee.$nodeToRelocate$),
                      ee.$slotRefNode$)
                    ) {
                      for (
                        Oe = ee.$slotRefNode$.parentNode,
                          rt = ee.$slotRefNode$.nextSibling,
                          Ve = ae['s-ol'];
                        (Ve = Ve.previousSibling);

                      )
                        if (
                          ((ot = Ve['s-nr']),
                          ot &&
                            ot['s-sn'] === ae['s-sn'] &&
                            Oe === ot.parentNode &&
                            ((ot = ot.nextSibling), !ot || !ot['s-nr']))
                        ) {
                          rt = ot;
                          break;
                        }
                      ((!rt && Oe !== ae.parentNode) ||
                        ae.nextSibling !== rt) &&
                        ae !== rt &&
                        (!ae['s-hn'] &&
                          ae['s-ol'] &&
                          (ae['s-hn'] = ae['s-ol'].parentNode.nodeName),
                        Oe.insertBefore(ae, rt));
                    } else 1 === ae.nodeType && (ae.hidden = !0);
                }
                oe && At(N.$elm$), (ue.$flags$ &= -2), (un.length = 0);
              })(T, $);
          } catch (Q) {
            On(Q, T.$hostElement$);
          }
          return null;
        },
        jt = (T) => {
          const H = T.$hostElement$,
            De = T.$lazyInstance$,
            N = T.$ancestorComponent$;
          Dt(De, 'componentDidRender'),
            64 & T.$flags$
              ? Dt(De, 'componentDidUpdate')
              : ((T.$flags$ |= 64),
                An(H),
                Dt(De, 'componentDidLoad'),
                T.$onReadyResolve$(H),
                N || sn()),
            T.$onInstanceResolve$(H),
            T.$onRenderResolve$ &&
              (T.$onRenderResolve$(), (T.$onRenderResolve$ = void 0)),
            512 & T.$flags$ && Tt(() => _n(T, !1)),
            (T.$flags$ &= -517);
        },
        on = (T) => {
          {
            const $ = ln(T),
              H = $.$hostElement$.isConnected;
            return H && 2 == (18 & $.$flags$) && _n($, !1), H;
          }
        },
        sn = (T) => {
          An(be.documentElement),
            Tt(() => Bn(ve, 'appload', { detail: { namespace: 'ionic' } }));
        },
        Dt = (T, $, H) => {
          if (T && T[$])
            try {
              return T[$](H);
            } catch (Q) {
              On(Q);
            }
        },
        wn = (T, $) => (T && T.then ? T.then($) : $()),
        An = (T) => T.classList.add('hydrated'),
        or = (T, $, H, Q, De, N, ee) => {
          let ae, Ve, Oe, rt;
          if (1 === N.nodeType) {
            for (
              ae = N.getAttribute(k),
                ae &&
                  ((Ve = ae.split('.')),
                  (Ve[0] === ee || '0' === Ve[0]) &&
                    ((Oe = {
                      $flags$: 0,
                      $hostId$: Ve[0],
                      $nodeId$: Ve[1],
                      $depth$: Ve[2],
                      $index$: Ve[3],
                      $tag$: N.tagName.toLowerCase(),
                      $elm$: N,
                      $attrs$: null,
                      $children$: null,
                      $key$: null,
                      $name$: null,
                      $text$: null,
                    }),
                    $.push(Oe),
                    N.removeAttribute(k),
                    T.$children$ || (T.$children$ = []),
                    (T.$children$[Oe.$index$] = Oe),
                    (T = Oe),
                    Q && '0' === Oe.$depth$ && (Q[Oe.$index$] = Oe.$elm$))),
                rt = N.childNodes.length - 1;
              rt >= 0;
              rt--
            )
              or(T, $, H, Q, De, N.childNodes[rt], ee);
            if (N.shadowRoot)
              for (rt = N.shadowRoot.childNodes.length - 1; rt >= 0; rt--)
                or(T, $, H, Q, De, N.shadowRoot.childNodes[rt], ee);
          } else if (8 === N.nodeType)
            (Ve = N.nodeValue.split('.')),
              (Ve[1] === ee || '0' === Ve[1]) &&
                ((ae = Ve[0]),
                (Oe = {
                  $flags$: 0,
                  $hostId$: Ve[1],
                  $nodeId$: Ve[2],
                  $depth$: Ve[3],
                  $index$: Ve[4],
                  $elm$: N,
                  $attrs$: null,
                  $children$: null,
                  $key$: null,
                  $name$: null,
                  $tag$: null,
                  $text$: null,
                }),
                't' === ae
                  ? ((Oe.$elm$ = N.nextSibling),
                    Oe.$elm$ &&
                      3 === Oe.$elm$.nodeType &&
                      ((Oe.$text$ = Oe.$elm$.textContent),
                      $.push(Oe),
                      N.remove(),
                      T.$children$ || (T.$children$ = []),
                      (T.$children$[Oe.$index$] = Oe),
                      Q && '0' === Oe.$depth$ && (Q[Oe.$index$] = Oe.$elm$)))
                  : Oe.$hostId$ === ee &&
                    ('s' === ae
                      ? ((Oe.$tag$ = 'slot'),
                        (N['s-sn'] = Ve[5] ? (Oe.$name$ = Ve[5]) : ''),
                        (N['s-sr'] = !0),
                        Q &&
                          ((Oe.$elm$ = be.createElement(Oe.$tag$)),
                          Oe.$name$ && Oe.$elm$.setAttribute('name', Oe.$name$),
                          N.parentNode.insertBefore(Oe.$elm$, N),
                          N.remove(),
                          '0' === Oe.$depth$ && (Q[Oe.$index$] = Oe.$elm$)),
                        H.push(Oe),
                        T.$children$ || (T.$children$ = []),
                        (T.$children$[Oe.$index$] = Oe))
                      : 'r' === ae &&
                        (Q
                          ? N.remove()
                          : ((De['s-cr'] = N), (N['s-cn'] = !0)))));
          else if (T && 'style' === T.$tag$) {
            const ot = Ft(null, N.textContent);
            (ot.$elm$ = N), (ot.$index$ = '0'), (T.$children$ = [ot]);
          }
        },
        hn = (T, $) => {
          if (1 === T.nodeType) {
            let H = 0;
            for (; H < T.childNodes.length; H++) hn(T.childNodes[H], $);
            if (T.shadowRoot)
              for (H = 0; H < T.shadowRoot.childNodes.length; H++)
                hn(T.shadowRoot.childNodes[H], $);
          } else if (8 === T.nodeType) {
            const H = T.nodeValue.split('.');
            'o' === H[0] &&
              ($.set(H[1] + '.' + H[2], T),
              (T.nodeValue = ''),
              (T['s-en'] = H[3]));
          }
        },
        J = (T, $, H) => {
          if ($.$members$) {
            T.watchers && ($.$watchers$ = T.watchers);
            const Q = Object.entries($.$members$),
              De = T.prototype;
            if (
              (Q.map(([N, [ee]]) => {
                31 & ee || (2 & H && 32 & ee)
                  ? Object.defineProperty(De, N, {
                      get() {
                        return ((T, $) => ln(this).$instanceValues$.get($))(
                          0,
                          N
                        );
                      },
                      set(ae) {
                        ((T, $, H, Q) => {
                          const De = ln(T),
                            N = De.$hostElement$,
                            ee = De.$instanceValues$.get($),
                            ae = De.$flags$,
                            Ve = De.$lazyInstance$;
                          H = ((T, $) =>
                            null == T || bt(T)
                              ? T
                              : 4 & $
                              ? 'false' !== T && ('' === T || !!T)
                              : 2 & $
                              ? parseFloat(T)
                              : 1 & $
                              ? String(T)
                              : T)(H, Q.$members$[$][0]);
                          const Oe = Number.isNaN(ee) && Number.isNaN(H);
                          if (
                            (!(8 & ae) || void 0 === ee) &&
                            H !== ee &&
                            !Oe &&
                            (De.$instanceValues$.set($, H), Ve)
                          ) {
                            if (Q.$watchers$ && 128 & ae) {
                              const ot = Q.$watchers$[$];
                              ot &&
                                ot.map((et) => {
                                  try {
                                    Ve[et](H, ee, $);
                                  } catch (Nt) {
                                    On(Nt, N);
                                  }
                                });
                            }
                            2 == (18 & ae) && _n(De, !1);
                          }
                        })(this, N, ae, $);
                      },
                      configurable: !0,
                      enumerable: !0,
                    })
                  : 1 & H &&
                    64 & ee &&
                    Object.defineProperty(De, N, {
                      value(...ae) {
                        const Ve = ln(this);
                        return Ve.$onInstancePromise$.then(() =>
                          Ve.$lazyInstance$[N](...ae)
                        );
                      },
                    });
              }),
              1 & H)
            ) {
              const N = new Map();
              (De.attributeChangedCallback = function (ee, ae, Ve) {
                ue.jmp(() => {
                  const Oe = N.get(ee);
                  if (this.hasOwnProperty(Oe)) (Ve = this[Oe]), delete this[Oe];
                  else if (
                    De.hasOwnProperty(Oe) &&
                    'number' == typeof this[Oe] &&
                    this[Oe] == Ve
                  )
                    return;
                  this[Oe] =
                    (null !== Ve || 'boolean' != typeof this[Oe]) && Ve;
                });
              }),
                (T.observedAttributes = Q.filter(([ee, ae]) => 15 & ae[0]).map(
                  ([ee, ae]) => {
                    const Ve = ae[1] || ee;
                    return (
                      N.set(Ve, ee),
                      512 & ae[0] && $.$attrsToReflect$.push([ee, Ve]),
                      Ve
                    );
                  }
                ));
            }
          }
          return T;
        },
        z = (function () {
          var T = (0, o.Z)(function* ($, H, Q, De, N) {
            if (0 == (32 & H.$flags$)) {
              {
                if (((H.$flags$ |= 32), (N = gn(Q)).then)) {
                  const Oe = () => {};
                  (N = yield N), Oe();
                }
                N.isProxied ||
                  ((Q.$watchers$ = N.watchers), J(N, Q, 2), (N.isProxied = !0));
                const Ve = () => {};
                H.$flags$ |= 8;
                try {
                  new N(H);
                } catch (Oe) {
                  On(Oe);
                }
                (H.$flags$ &= -9),
                  (H.$flags$ |= 128),
                  Ve(),
                  Te(H.$lazyInstance$);
              }
              if (N.style) {
                let Ve = N.style;
                'string' != typeof Ve &&
                  (Ve =
                    Ve[
                      (H.$modeName$ = ((T) =>
                        Sr.map(($) => $(T)).find(($) => !!$))($))
                    ]);
                const Oe = q(Q, H.$modeName$);
                if (!fr.has(Oe)) {
                  const rt = () => {};
                  X(Oe, Ve, !!(1 & Q.$flags$)), rt();
                }
              }
            }
            const ee = H.$ancestorComponent$,
              ae = () => _n(H, !0);
            ee && ee['s-rc'] ? ee['s-rc'].push(ae) : ae();
          });
          return function (H, Q, De, N, ee) {
            return T.apply(this, arguments);
          };
        })(),
        Te = (T) => {
          Dt(T, 'connectedCallback');
        },
        ht = (T) => {
          const $ = (T['s-cr'] = be.createComment(''));
          ($['s-cn'] = !0), T.insertBefore($, T.firstChild);
        },
        vt = (T, $ = {}) => {
          const Q = [],
            De = $.exclude || [],
            N = ve.customElements,
            ee = be.head,
            ae = ee.querySelector('meta[charset]'),
            Ve = be.createElement('style'),
            Oe = [],
            rt = be.querySelectorAll(`[${fe}]`);
          let ot,
            et = !0,
            Nt = 0;
          for (
            Object.assign(ue, $),
              ue.$resourcesUrl$ = new URL(
                $.resourcesUrl || './',
                be.baseURI
              ).href,
              ue.$flags$ |= 2;
            Nt < rt.length;
            Nt++
          )
            X(rt[Nt].getAttribute(fe), Re(rt[Nt].innerHTML), !0);
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
                        ? Oe.push(this)
                        : ue.jmp(() =>
                            ((T) => {
                              if (0 == (1 & ue.$flags$)) {
                                const $ = ln(T),
                                  H = $.$cmpMeta$,
                                  Q = () => {};
                                if (1 & $.$flags$)
                                  te(T, $, H.$listeners$), Te($.$lazyInstance$);
                                else {
                                  let De;
                                  if (
                                    (($.$flags$ |= 1),
                                    (De = T.getAttribute(le)),
                                    De)
                                  ) {
                                    if (1 & H.$flags$) {
                                      const N = L(
                                        T.shadowRoot,
                                        H,
                                        T.getAttribute('s-mode')
                                      );
                                      T.classList.remove(N + '-h', N + '-s');
                                    }
                                    ((T, $, H, Q) => {
                                      const N = T.shadowRoot,
                                        ee = [],
                                        Ve = N ? [] : null,
                                        Oe = (Q.$vnode$ = Ft($, null));
                                      ue.$orgLocNodes$ ||
                                        hn(
                                          be.body,
                                          (ue.$orgLocNodes$ = new Map())
                                        ),
                                        (T[le] = H),
                                        T.removeAttribute(le),
                                        or(Oe, ee, [], Ve, T, T, H),
                                        ee.map((rt) => {
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
                                            N ||
                                              ((Nt['s-hn'] = $),
                                              et &&
                                                ((Nt['s-ol'] = et),
                                                (Nt['s-ol']['s-nr'] = Nt))),
                                            ue.$orgLocNodes$.delete(ot);
                                        }),
                                        N &&
                                          Ve.map((rt) => {
                                            rt && N.appendChild(rt);
                                          });
                                    })(T, H.$tagName$, De, $);
                                  }
                                  De || (12 & H.$flags$ && ht(T));
                                  {
                                    let N = T;
                                    for (; (N = N.parentNode || N.host); )
                                      if (
                                        (1 === N.nodeType &&
                                          N.hasAttribute('s-id') &&
                                          N['s-p']) ||
                                        N['s-p']
                                      ) {
                                        Gn($, ($.$ancestorComponent$ = N));
                                        break;
                                      }
                                  }
                                  H.$members$ &&
                                    Object.entries(H.$members$).map(
                                      ([N, [ee]]) => {
                                        if (31 & ee && T.hasOwnProperty(N)) {
                                          const ae = T[N];
                                          delete T[N], (T[N] = ae);
                                        }
                                      }
                                    ),
                                    Tt(() => z(T, $, H));
                                }
                                Q();
                              }
                            })(this)
                          );
                  }
                  disconnectedCallback() {
                    ue.jmp(() =>
                      ((T) => {
                        if (0 == (1 & ue.$flags$)) {
                          const $ = ln(this),
                            H = $.$lazyInstance$;
                          $.$rmListeners$ &&
                            ($.$rmListeners$.map((Q) => Q()),
                            ($.$rmListeners$ = void 0)),
                            Dt(H, 'disconnectedCallback');
                        }
                      })()
                    );
                  }
                  componentOnReady() {
                    return ln(this).$onReadyPromise$;
                  }
                };
              (xn.$lazyBundleId$ = Ht[0]),
                !De.includes(dn) &&
                  !N.get(dn) &&
                  (Q.push(dn), N.define(dn, J(_r, xn, 1)));
            });
          }),
            (Ve.innerHTML =
              Q + '{visibility:hidden}.hydrated{visibility:inherit}'),
            Ve.setAttribute('data-styles', ''),
            ee.insertBefore(Ve, ae ? ae.nextSibling : ee.firstChild),
            (et = !1),
            Oe.length
              ? Oe.map((Ht) => Ht.connectedCallback())
              : ue.jmp(() => (ot = setTimeout(sn, 30)));
        },
        Zt = (T) => {
          const $ = new URL(T, ue.$resourcesUrl$);
          return $.origin !== ve.location.origin ? $.href : $.pathname;
        },
        an = new WeakMap(),
        ln = (T) => an.get(T),
        ir = (T, $) => an.set(($.$lazyInstance$ = T), $),
        Tn = (T, $) => {
          const H = {
            $flags$: 0,
            $hostElement$: T,
            $cmpMeta$: $,
            $instanceValues$: new Map(),
          };
          return (
            (H.$onInstancePromise$ = new Promise(
              (Q) => (H.$onInstanceResolve$ = Q)
            )),
            (H.$onReadyPromise$ = new Promise((Q) => (H.$onReadyResolve$ = Q))),
            (T['s-p'] = []),
            (T['s-rc'] = []),
            te(T, H, $.$listeners$),
            an.set(T, H)
          );
        },
        pn = (T, $) => $ in T,
        On = (T, $) => (0, console.error)(T, $),
        Sn = new Map(),
        gn = (T, $, H) => {
          const Q = T.$tagName$.replace(/-/g, '_'),
            De = T.$lazyBundleId$,
            N = Sn.get(De);
          return N
            ? N[Q]
            : S(863)(`./${De}.entry.js`).then(
                (ee) => (Sn.set(De, ee), ee[Q]),
                On
              );
        },
        fr = new Map(),
        Sr = [],
        pr = [],
        Cr = [],
        sr = (T, $) => (H) => {
          T.push(H),
            Fe || ((Fe = !0), $ && 4 & ue.$flags$ ? Tt(yn) : ue.raf(yn));
        },
        ar = (T) => {
          for (let $ = 0; $ < T.length; $++)
            try {
              T[$](performance.now());
            } catch (H) {
              On(H);
            }
          T.length = 0;
        },
        yn = () => {
          ar(pr), ar(Cr), (Fe = pr.length > 0) && ue.raf(yn);
        },
        Tt = (T) => Be().then(T),
        mn = sr(pr, !1),
        en = sr(Cr, !0),
        Rn = { isDev: !1, isBrowser: !0, isServer: !1, isTesting: !1 };
    },
    697: (at, $e, S) => {
      'use strict';
      S.d($e, {
        L: () => j,
        a: () => pe,
        b: () => Le,
        c: () => oe,
        d: () => xe,
        e: () => W,
        g: () => k,
        l: () => ke,
        s: () => le,
        t: () => ve,
      });
      var o = S(5861),
        P = S(1308),
        U = S(5730);
      const j = 'ionViewWillEnter',
        pe = 'ionViewDidEnter',
        Le = 'ionViewWillLeave',
        oe = 'ionViewDidLeave',
        xe = 'ionViewWillUnload',
        ve = (B) =>
          new Promise((Y, G) => {
            (0, P.c)(() => {
              be(B),
                ue(B).then(
                  (Ie) => {
                    Ie.animation && Ie.animation.destroy(), ne(B), Y(Ie);
                  },
                  (Ie) => {
                    ne(B), G(Ie);
                  }
                );
            });
          }),
        be = (B) => {
          const Y = B.enteringEl,
            G = B.leavingEl;
          fe(Y, G, B.direction),
            B.showGoBack
              ? Y.classList.add('can-go-back')
              : Y.classList.remove('can-go-back'),
            le(Y, !1),
            Y.style.setProperty('pointer-events', 'none'),
            G && (le(G, !1), G.style.setProperty('pointer-events', 'none'));
        },
        ue = (function () {
          var B = (0, o.Z)(function* (Y) {
            const G = yield me(Y);
            return G && P.B.isBrowser ? Be(G, Y) : ge(Y);
          });
          return function (G) {
            return B.apply(this, arguments);
          };
        })(),
        ne = (B) => {
          const Y = B.enteringEl,
            G = B.leavingEl;
          Y.classList.remove('ion-page-invisible'),
            Y.style.removeProperty('pointer-events'),
            void 0 !== G &&
              (G.classList.remove('ion-page-invisible'),
              G.style.removeProperty('pointer-events'));
        },
        me = (function () {
          var B = (0, o.Z)(function* (Y) {
            return Y.leavingEl && Y.animated && 0 !== Y.duration
              ? Y.animationBuilder
                ? Y.animationBuilder
                : 'ios' === Y.mode
                ? (yield Promise.resolve().then(S.bind(S, 3953)))
                    .iosTransitionAnimation
                : (yield Promise.resolve().then(S.bind(S, 3880)))
                    .mdTransitionAnimation
              : void 0;
          });
          return function (G) {
            return B.apply(this, arguments);
          };
        })(),
        Be = (function () {
          var B = (0, o.Z)(function* (Y, G) {
            yield te(G, !0);
            const Ie = Y(G.baseEl, G);
            he(G.enteringEl, G.leavingEl);
            const ie = yield _e(Ie, G);
            return (
              G.progressCallback && G.progressCallback(void 0),
              ie && se(G.enteringEl, G.leavingEl),
              { hasCompleted: ie, animation: Ie }
            );
          });
          return function (G, Ie) {
            return B.apply(this, arguments);
          };
        })(),
        ge = (function () {
          var B = (0, o.Z)(function* (Y) {
            const G = Y.enteringEl,
              Ie = Y.leavingEl;
            return yield te(Y, !1), he(G, Ie), se(G, Ie), { hasCompleted: !0 };
          });
          return function (G) {
            return B.apply(this, arguments);
          };
        })(),
        te = (function () {
          var B = (0, o.Z)(function* (Y, G) {
            const ie = (void 0 !== Y.deepWait ? Y.deepWait : G)
              ? [W(Y.enteringEl), W(Y.leavingEl)]
              : [de(Y.enteringEl), de(Y.leavingEl)];
            yield Promise.all(ie), yield He(Y.viewIsReady, Y.enteringEl);
          });
          return function (G, Ie) {
            return B.apply(this, arguments);
          };
        })(),
        He = (function () {
          var B = (0, o.Z)(function* (Y, G) {
            Y && (yield Y(G));
          });
          return function (G, Ie) {
            return B.apply(this, arguments);
          };
        })(),
        _e = (B, Y) => {
          const G = Y.progressCallback,
            Ie = new Promise((ie) => {
              B.onFinish((X) => ie(1 === X));
            });
          return G ? (B.progressStart(!0), G(B)) : B.play(), Ie;
        },
        he = (B, Y) => {
          ke(Y, Le), ke(B, j);
        },
        se = (B, Y) => {
          ke(B, pe), ke(Y, oe);
        },
        ke = (B, Y) => {
          if (B) {
            const G = new CustomEvent(Y, { bubbles: !1, cancelable: !1 });
            B.dispatchEvent(G);
          }
        },
        de = (B) =>
          B ? new Promise((Y) => (0, U.c)(B, Y)) : Promise.resolve(),
        W = (function () {
          var B = (0, o.Z)(function* (Y) {
            const G = Y;
            if (G) {
              if (null != G.componentOnReady) {
                if (null != (yield G.componentOnReady())) return;
              } else if (null != G.__registerHost)
                return void (yield new Promise((ie) => (0, U.r)(ie)));
              yield Promise.all(Array.from(G.children).map(W));
            }
          });
          return function (G) {
            return B.apply(this, arguments);
          };
        })(),
        le = (B, Y) => {
          Y
            ? (B.setAttribute('aria-hidden', 'true'),
              B.classList.add('ion-page-hidden'))
            : ((B.hidden = !1),
              B.removeAttribute('aria-hidden'),
              B.classList.remove('ion-page-hidden'));
        },
        fe = (B, Y, G) => {
          void 0 !== B && (B.style.zIndex = 'back' === G ? '99' : '101'),
            void 0 !== Y && (Y.style.zIndex = '100');
        },
        k = (B) =>
          B.classList.contains('ion-page')
            ? B
            : B.querySelector(
                ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
              ) || B;
    },
    1911: (at, $e, S) => {
      'use strict';
      S.r($e),
        S.d($e, { GESTURE_CONTROLLER: () => o.G, createGesture: () => Se });
      var o = S(4349);
      const P = (ue, ne, me, Be) => {
          const ge = U(ue)
            ? { capture: !!Be.capture, passive: !!Be.passive }
            : !!Be.capture;
          let te, He;
          return (
            ue.__zone_symbol__addEventListener
              ? ((te = '__zone_symbol__addEventListener'),
                (He = '__zone_symbol__removeEventListener'))
              : ((te = 'addEventListener'), (He = 'removeEventListener')),
            ue[te](ne, me, ge),
            () => {
              ue[He](ne, me, ge);
            }
          );
        },
        U = (ue) => {
          if (void 0 === j)
            try {
              const ne = Object.defineProperty({}, 'passive', {
                get: () => {
                  j = !0;
                },
              });
              ue.addEventListener('optsTest', () => {}, ne);
            } catch {
              j = !1;
            }
          return !!j;
        };
      let j;
      const oe = (ue) => (ue instanceof Document ? ue : ue.ownerDocument),
        Se = (ue) => {
          let ne = !1,
            me = !1,
            Be = !0,
            ge = !1;
          const te = Object.assign(
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
            He = te.canStart,
            _e = te.onWillStart,
            he = te.onStart,
            se = te.onEnd,
            ke = te.notCaptured,
            de = te.onMove,
            W = te.threshold,
            le = te.passive,
            fe = te.blurOnStart,
            k = {
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
            B = ((ue, ne, me) => {
              const Be = me * (Math.PI / 180),
                ge = 'x' === ue,
                te = Math.cos(Be),
                He = ne * ne;
              let _e = 0,
                he = 0,
                se = !1,
                ke = 0;
              return {
                start(de, W) {
                  (_e = de), (he = W), (ke = 0), (se = !0);
                },
                detect(de, W) {
                  if (!se) return !1;
                  const le = de - _e,
                    fe = W - he,
                    k = le * le + fe * fe;
                  if (k < He) return !1;
                  const B = Math.sqrt(k),
                    Y = (ge ? le : fe) / B;
                  return (ke = Y > te ? 1 : Y < -te ? -1 : 0), (se = !1), !0;
                },
                isGesture: () => 0 !== ke,
                getDirection: () => ke,
              };
            })(te.direction, te.threshold, te.maxAngle),
            Y = o.G.createGesture({
              name: ue.gestureName,
              priority: ue.gesturePriority,
              disableScroll: ue.disableScroll,
            }),
            ie = () => {
              !ne || ((ge = !1), de && de(k));
            },
            X = () =>
              !!Y.capture() &&
              ((ne = !0),
              (Be = !1),
              (k.startX = k.currentX),
              (k.startY = k.currentY),
              (k.startTime = k.currentTime),
              _e ? _e(k).then(K) : K(),
              !0),
            K = () => {
              fe &&
                (() => {
                  if (typeof document < 'u') {
                    const Ae = document.activeElement;
                    Ae?.blur && Ae.blur();
                  }
                })(),
                he && he(k),
                (Be = !0);
            },
            q = () => {
              (ne = !1), (me = !1), (ge = !1), (Be = !0), Y.release();
            },
            Re = (Ae) => {
              const We = ne,
                nt = Be;
              if ((q(), nt)) {
                if ((Fe(k, Ae), We)) return void (se && se(k));
                ke && ke(k);
              }
            },
            Pe = ((ue, ne, me, Be, ge) => {
              let te,
                He,
                _e,
                he,
                se,
                ke,
                de,
                W = 0;
              const le = (L) => {
                  (W = Date.now() + 2e3),
                    ne(L) &&
                      (!He && me && (He = P(ue, 'touchmove', me, ge)),
                      _e || (_e = P(L.target, 'touchend', k, ge)),
                      he || (he = P(L.target, 'touchcancel', k, ge)));
                },
                fe = (L) => {
                  W > Date.now() ||
                    !ne(L) ||
                    (!ke && me && (ke = P(oe(ue), 'mousemove', me, ge)),
                    de || (de = P(oe(ue), 'mouseup', B, ge)));
                },
                k = (L) => {
                  Y(), Be && Be(L);
                },
                B = (L) => {
                  G(), Be && Be(L);
                },
                Y = () => {
                  He && He(), _e && _e(), he && he(), (He = _e = he = void 0);
                },
                G = () => {
                  ke && ke(), de && de(), (ke = de = void 0);
                },
                Ie = () => {
                  Y(), G();
                },
                ie = (L = !0) => {
                  L
                    ? (te || (te = P(ue, 'touchstart', le, ge)),
                      se || (se = P(ue, 'mousedown', fe, ge)))
                    : (te && te(), se && se(), (te = se = void 0), Ie());
                };
              return {
                enable: ie,
                stop: Ie,
                destroy: () => {
                  ie(!1), (Be = me = ne = void 0);
                },
              };
            })(
              te.el,
              (Ae) => {
                const We = be(Ae);
                return (
                  !(
                    me ||
                    !Be ||
                    (ve(Ae, k),
                    (k.startX = k.currentX),
                    (k.startY = k.currentY),
                    (k.startTime = k.currentTime = We),
                    (k.velocityX = k.velocityY = k.deltaX = k.deltaY = 0),
                    (k.event = Ae),
                    He && !1 === He(k)) ||
                    (Y.release(), !Y.start())
                  ) &&
                  ((me = !0), 0 === W ? X() : (B.start(k.startX, k.startY), !0))
                );
              },
              (Ae) => {
                ne
                  ? !ge &&
                    Be &&
                    ((ge = !0), Fe(k, Ae), requestAnimationFrame(ie))
                  : (Fe(k, Ae),
                    B.detect(k.currentX, k.currentY) &&
                      (!B.isGesture() || !X()) &&
                      ye());
              },
              Re,
              { capture: !1, passive: le }
            ),
            ye = () => {
              q(), Pe.stop(), ke && ke(k);
            };
          return {
            enable(Ae = !0) {
              Ae || (ne && Re(void 0), q()), Pe.enable(Ae);
            },
            destroy() {
              Y.destroy(), Pe.destroy();
            },
          };
        },
        Fe = (ue, ne) => {
          if (!ne) return;
          const me = ue.currentX,
            Be = ue.currentY,
            ge = ue.currentTime;
          ve(ne, ue);
          const te = ue.currentX,
            He = ue.currentY,
            he = (ue.currentTime = be(ne)) - ge;
          if (he > 0 && he < 100) {
            const ke = (He - Be) / he;
            (ue.velocityX = ((te - me) / he) * 0.7 + 0.3 * ue.velocityX),
              (ue.velocityY = 0.7 * ke + 0.3 * ue.velocityY);
          }
          (ue.deltaX = te - ue.startX),
            (ue.deltaY = He - ue.startY),
            (ue.event = ne);
        },
        ve = (ue, ne) => {
          let me = 0,
            Be = 0;
          if (ue) {
            const ge = ue.changedTouches;
            if (ge && ge.length > 0) {
              const te = ge[0];
              (me = te.clientX), (Be = te.clientY);
            } else void 0 !== ue.pageX && ((me = ue.pageX), (Be = ue.pageY));
          }
          (ne.currentX = me), (ne.currentY = Be);
        },
        be = (ue) => ue.timeStamp || Date.now();
    },
    9658: (at, $e, S) => {
      'use strict';
      S.d($e, {
        a: () => ve,
        b: () => ie,
        c: () => U,
        g: () => Fe,
        i: () => X,
      });
      var o = S(1308);
      class P {
        constructor() {
          this.m = new Map();
        }
        reset(K) {
          this.m = new Map(Object.entries(K));
        }
        get(K, q) {
          const Re = this.m.get(K);
          return void 0 !== Re ? Re : q;
        }
        getBoolean(K, q = !1) {
          const Re = this.m.get(K);
          return void 0 === Re
            ? q
            : 'string' == typeof Re
            ? 'true' === Re
            : !!Re;
        }
        getNumber(K, q) {
          const Re = parseFloat(this.m.get(K));
          return isNaN(Re) ? (void 0 !== q ? q : NaN) : Re;
        }
        set(K, q) {
          this.m.set(K, q);
        }
      }
      const U = new P(),
        Se = 'ionic-persist-config',
        Fe = (L) => be(L),
        ve = (L, K) => (
          'string' == typeof L && ((K = L), (L = void 0)), Fe(L).includes(K)
        ),
        be = (L = window) => {
          if (typeof L > 'u') return [];
          L.Ionic = L.Ionic || {};
          let K = L.Ionic.platforms;
          return (
            null == K &&
              ((K = L.Ionic.platforms = ue(L)),
              K.forEach((q) =>
                L.document.documentElement.classList.add(`plt-${q}`)
              )),
            K
          );
        },
        ue = (L) => {
          const K = U.get('platform');
          return Object.keys(G).filter((q) => {
            const Re = K?.[q];
            return 'function' == typeof Re ? Re(L) : G[q](L);
          });
        },
        me = (L) => !!(B(L, /iPad/i) || (B(L, /Macintosh/i) && se(L))),
        te = (L) => B(L, /android|sink/i),
        se = (L) => Y(L, '(any-pointer:coarse)'),
        de = (L) => W(L) || le(L),
        W = (L) => !!(L.cordova || L.phonegap || L.PhoneGap),
        le = (L) => !!L.Capacitor?.isNative,
        B = (L, K) => K.test(L.navigator.userAgent),
        Y = (L, K) => {
          var q;
          return null === (q = L.matchMedia) || void 0 === q
            ? void 0
            : q.call(L, K).matches;
        },
        G = {
          ipad: me,
          iphone: (L) => B(L, /iPhone/i),
          ios: (L) => B(L, /iPhone|iPod/i) || me(L),
          android: te,
          phablet: (L) => {
            const K = L.innerWidth,
              q = L.innerHeight,
              Re = Math.min(K, q),
              Pe = Math.max(K, q);
            return Re > 390 && Re < 520 && Pe > 620 && Pe < 800;
          },
          tablet: (L) => {
            const K = L.innerWidth,
              q = L.innerHeight,
              Re = Math.min(K, q),
              Pe = Math.max(K, q);
            return (
              me(L) ||
              ((L) => te(L) && !B(L, /mobile/i))(L) ||
              (Re > 460 && Re < 820 && Pe > 780 && Pe < 1400)
            );
          },
          cordova: W,
          capacitor: le,
          electron: (L) => B(L, /electron/i),
          pwa: (L) => {
            var K;
            return !(
              !(null === (K = L.matchMedia) || void 0 === K
                ? void 0
                : K.call(L, '(display-mode: standalone)').matches) &&
              !L.navigator.standalone
            );
          },
          mobile: se,
          mobileweb: (L) => se(L) && !de(L),
          desktop: (L) => !se(L),
          hybrid: de,
        };
      let Ie;
      const ie = (L) => (L && (0, o.g)(L)) || Ie,
        X = (L = {}) => {
          if (typeof window > 'u') return;
          const K = window.document,
            q = window,
            Re = (q.Ionic = q.Ionic || {}),
            Pe = {};
          L._ael && (Pe.ael = L._ael),
            L._rel && (Pe.rel = L._rel),
            L._ce && (Pe.ce = L._ce),
            (0, o.s)(Pe);
          const ye = Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    ((L) => {
                      try {
                        const K = L.sessionStorage.getItem(Se);
                        return null !== K ? JSON.parse(K) : {};
                      } catch {
                        return {};
                      }
                    })(q)
                  ),
                  { persistConfig: !1 }
                ),
                Re.config
              ),
              ((L) => {
                const K = {};
                return (
                  L.location.search
                    .slice(1)
                    .split('&')
                    .map((q) => q.split('='))
                    .map(([q, Re]) => [
                      decodeURIComponent(q),
                      decodeURIComponent(Re),
                    ])
                    .filter(([q]) =>
                      ((L, K) => L.substr(0, K.length) === K)(q, 'ionic:')
                    )
                    .map(([q, Re]) => [q.slice('ionic:'.length), Re])
                    .forEach(([q, Re]) => {
                      K[q] = Re;
                    }),
                  K
                );
              })(q)
            ),
            L
          );
          U.reset(ye),
            U.getBoolean('persistConfig') &&
              ((L, K) => {
                try {
                  L.sessionStorage.setItem(Se, JSON.stringify(K));
                } catch {
                  return;
                }
              })(q, ye),
            be(q),
            (Re.config = U),
            (Re.mode = Ie =
              U.get(
                'mode',
                K.documentElement.getAttribute('mode') ||
                  (ve(q, 'ios') ? 'ios' : 'md')
              )),
            U.set('mode', Ie),
            K.documentElement.setAttribute('mode', Ie),
            K.documentElement.classList.add(Ie),
            U.getBoolean('_testing') && U.set('animated', !1);
          const Ae = (nt) => {
              var Ke;
              return null === (Ke = nt.tagName) || void 0 === Ke
                ? void 0
                : Ke.startsWith('ION-');
            },
            We = (nt) => ['ios', 'md'].includes(nt);
          (0, o.a)((nt) => {
            for (; nt; ) {
              const Ke = nt.mode || nt.getAttribute('mode');
              if (Ke) {
                if (We(Ke)) return Ke;
                Ae(nt) &&
                  console.warn(
                    'Invalid ionic mode: "' + Ke + '", expected: "ios" or "md"'
                  );
              }
              nt = nt.parentElement;
            }
            return Ie;
          });
        };
    },
    3953: (at, $e, S) => {
      'use strict';
      S.r($e), S.d($e, { iosTransitionAnimation: () => ue, shadow: () => oe });
      var o = S(8834),
        P = S(697);
      S(3457), S(1308);
      const Le = (ne) => document.querySelector(`${ne}.ion-cloned-element`),
        oe = (ne) => ne.shadowRoot || ne,
        xe = (ne) => {
          const me =
              'ION-TABS' === ne.tagName ? ne : ne.querySelector('ion-tabs'),
            Be =
              'ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large';
          if (null != me) {
            const ge = me.querySelector(
              'ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)'
            );
            return null != ge ? ge.querySelector(Be) : null;
          }
          return ne.querySelector(Be);
        },
        Se = (ne, me) => {
          const Be =
            'ION-TABS' === ne.tagName ? ne : ne.querySelector('ion-tabs');
          let ge = [];
          if (null != Be) {
            const te = Be.querySelector(
              'ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)'
            );
            null != te && (ge = te.querySelectorAll('ion-buttons'));
          } else ge = ne.querySelectorAll('ion-buttons');
          for (const te of ge) {
            const He = te.closest('ion-header'),
              _e =
                He &&
                !He.classList.contains('header-collapse-condense-inactive'),
              he = te.querySelector('ion-back-button'),
              se = te.classList.contains('buttons-collapse'),
              ke = 'start' === te.slot || '' === te.slot;
            if (null !== he && ke && ((se && _e && me) || !se)) return he;
          }
          return null;
        },
        ve = (ne, me, Be, ge, te, He) => {
          const _e = me ? `calc(100% - ${He.right + 4}px)` : He.left - 4 + 'px',
            he = me ? '7px' : '-7px',
            se = me ? '-4px' : '4px',
            ke = me ? '-4px' : '4px',
            de = me ? 'right' : 'left',
            W = me ? 'left' : 'right',
            k = Be
              ? [
                  {
                    offset: 0,
                    opacity: 1,
                    transform: `translate3d(${se}, ${
                      He.top - 46
                    }px, 0) scale(1)`,
                  },
                  { offset: 0.6, opacity: 0 },
                  {
                    offset: 1,
                    opacity: 0,
                    transform: `translate3d(${he}, ${
                      te.top - 40
                    }px, 0) scale(2.1)`,
                  },
                ]
              : [
                  {
                    offset: 0,
                    opacity: 0,
                    transform: `translate3d(${he}, ${
                      te.top - 40
                    }px, 0) scale(2.1)`,
                  },
                  {
                    offset: 1,
                    opacity: 1,
                    transform: `translate3d(${se}, ${
                      He.top - 46
                    }px, 0) scale(1)`,
                  },
                ],
            G = Be
              ? [
                  {
                    offset: 0,
                    opacity: 1,
                    transform: `translate3d(${ke}, ${
                      He.top - 46
                    }px, 0) scale(1)`,
                  },
                  {
                    offset: 0.2,
                    opacity: 0,
                    transform: `translate3d(${ke}, ${
                      He.top - 41
                    }px, 0) scale(0.6)`,
                  },
                  {
                    offset: 1,
                    opacity: 0,
                    transform: `translate3d(${ke}, ${
                      He.top - 41
                    }px, 0) scale(0.6)`,
                  },
                ]
              : [
                  {
                    offset: 0,
                    opacity: 0,
                    transform: `translate3d(${ke}, ${
                      He.top - 41
                    }px, 0) scale(0.6)`,
                  },
                  {
                    offset: 1,
                    opacity: 1,
                    transform: `translate3d(${ke}, ${
                      He.top - 46
                    }px, 0) scale(1)`,
                  },
                ],
            Ie = (0, o.c)(),
            ie = (0, o.c)(),
            X = Le('ion-back-button'),
            L = oe(X).querySelector('.button-text'),
            K = oe(X).querySelector('ion-icon');
          (X.text = ge.text),
            (X.mode = ge.mode),
            (X.icon = ge.icon),
            (X.color = ge.color),
            (X.disabled = ge.disabled),
            X.style.setProperty('display', 'block'),
            X.style.setProperty('position', 'fixed'),
            ie.addElement(K),
            Ie.addElement(L),
            Ie.beforeStyles({ 'transform-origin': `${de} center` })
              .beforeAddWrite(() => {
                ge.style.setProperty('display', 'none'),
                  X.style.setProperty(de, _e);
              })
              .afterAddWrite(() => {
                ge.style.setProperty('display', ''),
                  X.style.setProperty('display', 'none'),
                  X.style.removeProperty(de);
              })
              .keyframes(k),
            ie.beforeStyles({ 'transform-origin': `${W} center` }).keyframes(G),
            ne.addAnimation([Ie, ie]);
        },
        be = (ne, me, Be, ge, te, He) => {
          const _e = me ? `calc(100% - ${te.right}px)` : `${te.left}px`,
            he = me ? '-18px' : '18px',
            se = me ? 'right' : 'left',
            W = Be
              ? [
                  {
                    offset: 0,
                    opacity: 0,
                    transform: `translate3d(${he}, ${
                      He.top - 4
                    }px, 0) scale(0.49)`,
                  },
                  { offset: 0.1, opacity: 0 },
                  {
                    offset: 1,
                    opacity: 1,
                    transform: `translate3d(0, ${te.top - 2}px, 0) scale(1)`,
                  },
                ]
              : [
                  {
                    offset: 0,
                    opacity: 0.99,
                    transform: `translate3d(0, ${te.top - 2}px, 0) scale(1)`,
                  },
                  { offset: 0.6, opacity: 0 },
                  {
                    offset: 1,
                    opacity: 0,
                    transform: `translate3d(${he}, ${
                      He.top - 4
                    }px, 0) scale(0.5)`,
                  },
                ],
            le = Le('ion-title'),
            fe = (0, o.c)();
          (le.innerText = ge.innerText),
            (le.size = ge.size),
            (le.color = ge.color),
            fe.addElement(le),
            fe
              .beforeStyles({
                'transform-origin': `${se} center`,
                height: '46px',
                display: '',
                position: 'relative',
                [se]: _e,
              })
              .beforeAddWrite(() => {
                ge.style.setProperty('display', 'none');
              })
              .afterAddWrite(() => {
                ge.style.setProperty('display', ''),
                  le.style.setProperty('display', 'none');
              })
              .keyframes(W),
            ne.addAnimation(fe);
        },
        ue = (ne, me) => {
          var Be;
          try {
            const ge = 'cubic-bezier(0.32,0.72,0,1)',
              te = 'opacity',
              He = 'transform',
              _e = '0%',
              se = 'rtl' === ne.ownerDocument.dir,
              ke = se ? '-99.5%' : '99.5%',
              de = se ? '33%' : '-33%',
              W = me.enteringEl,
              le = me.leavingEl,
              fe = 'back' === me.direction,
              k = W.querySelector(':scope > ion-content'),
              B = W.querySelectorAll(
                ':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'
              ),
              Y = W.querySelectorAll(':scope > ion-header > ion-toolbar'),
              G = (0, o.c)(),
              Ie = (0, o.c)();
            if (
              (G.addElement(W)
                .duration(
                  (null !== (Be = me.duration) && void 0 !== Be ? Be : 0) || 540
                )
                .easing(me.easing || ge)
                .fill('both')
                .beforeRemoveClass('ion-page-invisible'),
              le && null != ne)
            ) {
              const K = (0, o.c)();
              K.addElement(ne), G.addAnimation(K);
            }
            if (
              (k || 0 !== Y.length || 0 !== B.length
                ? (Ie.addElement(k), Ie.addElement(B))
                : Ie.addElement(
                    W.querySelector(
                      ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
                    )
                  ),
              G.addAnimation(Ie),
              fe
                ? Ie.beforeClearStyles([te])
                    .fromTo(
                      'transform',
                      `translateX(${de})`,
                      `translateX(${_e})`
                    )
                    .fromTo(te, 0.8, 1)
                : Ie.beforeClearStyles([te]).fromTo(
                    'transform',
                    `translateX(${ke})`,
                    `translateX(${_e})`
                  ),
              k)
            ) {
              const K = oe(k).querySelector('.transition-effect');
              if (K) {
                const q = K.querySelector('.transition-cover'),
                  Re = K.querySelector('.transition-shadow'),
                  Pe = (0, o.c)(),
                  ye = (0, o.c)(),
                  Ae = (0, o.c)();
                Pe.addElement(K)
                  .beforeStyles({ opacity: '1', display: 'block' })
                  .afterStyles({ opacity: '', display: '' }),
                  ye.addElement(q).beforeClearStyles([te]).fromTo(te, 0, 0.1),
                  Ae.addElement(Re)
                    .beforeClearStyles([te])
                    .fromTo(te, 0.03, 0.7),
                  Pe.addAnimation([ye, Ae]),
                  Ie.addAnimation([Pe]);
              }
            }
            const ie = W.querySelector('ion-header.header-collapse-condense'),
              { forward: X, backward: L } = ((ne, me, Be, ge, te) => {
                const He = Se(ge, Be),
                  _e = xe(te),
                  he = xe(ge),
                  se = Se(te, Be),
                  ke = null !== He && null !== _e && !Be,
                  de = null !== he && null !== se && Be;
                if (ke) {
                  const W = _e.getBoundingClientRect(),
                    le = He.getBoundingClientRect();
                  be(ne, me, Be, _e, W, le), ve(ne, me, Be, He, W, le);
                } else if (de) {
                  const W = he.getBoundingClientRect(),
                    le = se.getBoundingClientRect();
                  be(ne, me, Be, he, W, le), ve(ne, me, Be, se, W, le);
                }
                return { forward: ke, backward: de };
              })(G, se, fe, W, le);
            if (
              (Y.forEach((K) => {
                const q = (0, o.c)();
                q.addElement(K), G.addAnimation(q);
                const Re = (0, o.c)();
                Re.addElement(K.querySelector('ion-title'));
                const Pe = (0, o.c)(),
                  ye = Array.from(
                    K.querySelectorAll('ion-buttons,[menuToggle]')
                  ),
                  Ae = K.closest('ion-header'),
                  We = Ae?.classList.contains(
                    'header-collapse-condense-inactive'
                  );
                let nt;
                (nt = ye.filter(
                  fe
                    ? (Ft) => {
                        const Mt = Ft.classList.contains('buttons-collapse');
                        return (Mt && !We) || !Mt;
                      }
                    : (Ft) => !Ft.classList.contains('buttons-collapse')
                )),
                  Pe.addElement(nt);
                const Ke = (0, o.c)();
                Ke.addElement(
                  K.querySelectorAll(
                    ':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'
                  )
                );
                const ft = (0, o.c)();
                ft.addElement(oe(K).querySelector('.toolbar-background'));
                const bt = (0, o.c)(),
                  lt = K.querySelector('ion-back-button');
                if (
                  (lt && bt.addElement(lt),
                  q.addAnimation([Re, Pe, Ke, ft, bt]),
                  Pe.fromTo(te, 0.01, 1),
                  Ke.fromTo(te, 0.01, 1),
                  fe)
                )
                  We ||
                    Re.fromTo(
                      'transform',
                      `translateX(${de})`,
                      `translateX(${_e})`
                    ).fromTo(te, 0.01, 1),
                    Ke.fromTo(
                      'transform',
                      `translateX(${de})`,
                      `translateX(${_e})`
                    ),
                    bt.fromTo(te, 0.01, 1);
                else if (
                  (ie ||
                    Re.fromTo(
                      'transform',
                      `translateX(${ke})`,
                      `translateX(${_e})`
                    ).fromTo(te, 0.01, 1),
                  Ke.fromTo(
                    'transform',
                    `translateX(${ke})`,
                    `translateX(${_e})`
                  ),
                  ft.beforeClearStyles([te, 'transform']),
                  Ae?.translucent
                    ? ft.fromTo(
                        'transform',
                        se ? 'translateX(-100%)' : 'translateX(100%)',
                        'translateX(0px)'
                      )
                    : ft.fromTo(te, 0.01, 'var(--opacity)'),
                  X || bt.fromTo(te, 0.01, 1),
                  lt && !X)
                ) {
                  const Mt = (0, o.c)();
                  Mt.addElement(oe(lt).querySelector('.button-text')).fromTo(
                    'transform',
                    se ? 'translateX(-100px)' : 'translateX(100px)',
                    'translateX(0px)'
                  ),
                    q.addAnimation(Mt);
                }
              }),
              le)
            ) {
              const K = (0, o.c)(),
                q = le.querySelector(':scope > ion-content'),
                Re = le.querySelectorAll(':scope > ion-header > ion-toolbar'),
                Pe = le.querySelectorAll(
                  ':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'
                );
              if (
                (q || 0 !== Re.length || 0 !== Pe.length
                  ? (K.addElement(q), K.addElement(Pe))
                  : K.addElement(
                      le.querySelector(
                        ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
                      )
                    ),
                G.addAnimation(K),
                fe)
              ) {
                K.beforeClearStyles([te]).fromTo(
                  'transform',
                  `translateX(${_e})`,
                  se ? 'translateX(-100%)' : 'translateX(100%)'
                );
                const ye = (0, P.g)(le);
                G.afterAddWrite(() => {
                  'normal' === G.getDirection() &&
                    ye.style.setProperty('display', 'none');
                });
              } else
                K.fromTo(
                  'transform',
                  `translateX(${_e})`,
                  `translateX(${de})`
                ).fromTo(te, 1, 0.8);
              if (q) {
                const ye = oe(q).querySelector('.transition-effect');
                if (ye) {
                  const Ae = ye.querySelector('.transition-cover'),
                    We = ye.querySelector('.transition-shadow'),
                    nt = (0, o.c)(),
                    Ke = (0, o.c)(),
                    ft = (0, o.c)();
                  nt
                    .addElement(ye)
                    .beforeStyles({ opacity: '1', display: 'block' })
                    .afterStyles({ opacity: '', display: '' }),
                    Ke.addElement(Ae)
                      .beforeClearStyles([te])
                      .fromTo(te, 0.1, 0),
                    ft
                      .addElement(We)
                      .beforeClearStyles([te])
                      .fromTo(te, 0.7, 0.03),
                    nt.addAnimation([Ke, ft]),
                    K.addAnimation([nt]);
                }
              }
              Re.forEach((ye) => {
                const Ae = (0, o.c)();
                Ae.addElement(ye);
                const We = (0, o.c)();
                We.addElement(ye.querySelector('ion-title'));
                const nt = (0, o.c)(),
                  Ke = ye.querySelectorAll('ion-buttons,[menuToggle]'),
                  ft = ye.closest('ion-header'),
                  bt = ft?.classList.contains(
                    'header-collapse-condense-inactive'
                  ),
                  lt = Array.from(Ke).filter((jn) => {
                    const st = jn.classList.contains('buttons-collapse');
                    return (st && !bt) || !st;
                  });
                nt.addElement(lt);
                const Ft = (0, o.c)(),
                  Mt = ye.querySelectorAll(
                    ':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'
                  );
                Mt.length > 0 && Ft.addElement(Mt);
                const Ye = (0, o.c)();
                Ye.addElement(oe(ye).querySelector('.toolbar-background'));
                const Lt = (0, o.c)(),
                  bn = ye.querySelector('ion-back-button');
                if (
                  (bn && Lt.addElement(bn),
                  Ae.addAnimation([We, nt, Ft, Lt, Ye]),
                  G.addAnimation(Ae),
                  Lt.fromTo(te, 0.99, 0),
                  nt.fromTo(te, 0.99, 0),
                  Ft.fromTo(te, 0.99, 0),
                  fe)
                ) {
                  if (
                    (bt ||
                      We.fromTo(
                        'transform',
                        `translateX(${_e})`,
                        se ? 'translateX(-100%)' : 'translateX(100%)'
                      ).fromTo(te, 0.99, 0),
                    Ft.fromTo(
                      'transform',
                      `translateX(${_e})`,
                      se ? 'translateX(-100%)' : 'translateX(100%)'
                    ),
                    Ye.beforeClearStyles([te, 'transform']),
                    ft?.translucent
                      ? Ye.fromTo(
                          'transform',
                          'translateX(0px)',
                          se ? 'translateX(-100%)' : 'translateX(100%)'
                        )
                      : Ye.fromTo(te, 'var(--opacity)', 0),
                    bn && !L)
                  ) {
                    const st = (0, o.c)();
                    st
                      .addElement(oe(bn).querySelector('.button-text'))
                      .fromTo(
                        'transform',
                        `translateX(${_e})`,
                        `translateX(${(se ? -124 : 124) + 'px'})`
                      ),
                      Ae.addAnimation(st);
                  }
                } else
                  bt ||
                    We.fromTo(
                      'transform',
                      `translateX(${_e})`,
                      `translateX(${de})`
                    )
                      .fromTo(te, 0.99, 0)
                      .afterClearStyles([He, te]),
                    Ft.fromTo(
                      'transform',
                      `translateX(${_e})`,
                      `translateX(${de})`
                    ).afterClearStyles([He, te]),
                    Lt.afterClearStyles([te]),
                    We.afterClearStyles([te]),
                    nt.afterClearStyles([te]);
              });
            }
            return G;
          } catch (ge) {
            throw ge;
          }
        };
    },
    3880: (at, $e, S) => {
      'use strict';
      S.r($e), S.d($e, { mdTransitionAnimation: () => pe });
      var o = S(8834),
        P = S(697);
      S(3457), S(1308);
      const pe = (Le, oe) => {
        var xe, Se, Fe;
        const ue = 'back' === oe.direction,
          me = oe.leavingEl,
          Be = (0, P.g)(oe.enteringEl),
          ge = Be.querySelector('ion-toolbar'),
          te = (0, o.c)();
        if (
          (te
            .addElement(Be)
            .fill('both')
            .beforeRemoveClass('ion-page-invisible'),
          ue
            ? te
                .duration(
                  (null !== (xe = oe.duration) && void 0 !== xe ? xe : 0) || 200
                )
                .easing('cubic-bezier(0.47,0,0.745,0.715)')
            : te
                .duration(
                  (null !== (Se = oe.duration) && void 0 !== Se ? Se : 0) || 280
                )
                .easing('cubic-bezier(0.36,0.66,0.04,1)')
                .fromTo('transform', 'translateY(40px)', 'translateY(0px)')
                .fromTo('opacity', 0.01, 1),
          ge)
        ) {
          const He = (0, o.c)();
          He.addElement(ge), te.addAnimation(He);
        }
        if (me && ue) {
          te.duration(
            (null !== (Fe = oe.duration) && void 0 !== Fe ? Fe : 0) || 200
          ).easing('cubic-bezier(0.47,0,0.745,0.715)');
          const He = (0, o.c)();
          He.addElement((0, P.g)(me))
            .onFinish((_e) => {
              1 === _e &&
                He.elements.length > 0 &&
                He.elements[0].style.setProperty('display', 'none');
            })
            .fromTo('transform', 'translateY(0px)', 'translateY(40px)')
            .fromTo('opacity', 1, 0),
            te.addAnimation(He);
        }
        return te;
      };
    },
    1312: (at, $e, S) => {
      'use strict';
      S.d($e, {
        B: () => q,
        G: () => Re,
        a: () => xe,
        b: () => Se,
        c: () => ue,
        d: () => fe,
        e: () => me,
        f: () => B,
        g: () => Ie,
        h: () => Le,
        i: () => X,
        j: () => te,
        k: () => W,
        m: () => ve,
        s: () => K,
      });
      var o = S(5861),
        P = S(9658),
        U = S(7593),
        j = S(5730);
      let pe = 0;
      const Le = new WeakMap(),
        oe = (Pe) => ({
          create: (ye) => Be(Pe, ye),
          dismiss: (ye, Ae, We) => ke(document, ye, Ae, Pe, We),
          getTop: () =>
            (0, o.Z)(function* () {
              return W(document, Pe);
            })(),
        }),
        xe = oe('ion-alert'),
        Se = oe('ion-action-sheet'),
        ve = oe('ion-modal'),
        ue = oe('ion-popover'),
        me = (Pe) => {
          typeof document < 'u' && se(document);
          const ye = pe++;
          (Pe.overlayIndex = ye),
            Pe.hasAttribute('id') || (Pe.id = `ion-overlay-${ye}`);
        },
        Be = (Pe, ye) =>
          typeof window < 'u' && typeof window.customElements < 'u'
            ? window.customElements.whenDefined(Pe).then(() => {
                const Ae = document.createElement(Pe);
                return (
                  Ae.classList.add('overlay-hidden'),
                  Object.assign(
                    Ae,
                    Object.assign(Object.assign({}, ye), { hasController: !0 })
                  ),
                  Y(document).appendChild(Ae),
                  new Promise((We) => (0, j.c)(Ae, We))
                );
              })
            : Promise.resolve(),
        ge =
          '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',
        te = (Pe, ye) => {
          let Ae = Pe.querySelector(ge);
          const We = Ae?.shadowRoot;
          We && (Ae = We.querySelector(ge) || Ae),
            Ae ? (0, j.f)(Ae) : ye.focus();
        },
        _e = (Pe, ye) => {
          const Ae = Array.from(Pe.querySelectorAll(ge));
          let We = Ae.length > 0 ? Ae[Ae.length - 1] : null;
          const nt = We?.shadowRoot;
          nt && (We = nt.querySelector(ge) || We), We ? We.focus() : ye.focus();
        },
        se = (Pe) => {
          0 === pe &&
            ((pe = 1),
            Pe.addEventListener(
              'focus',
              (ye) => {
                ((Pe, ye) => {
                  const Ae = W(
                      ye,
                      'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover'
                    ),
                    We = Pe.target;
                  Ae &&
                    We &&
                    !Ae.classList.contains('ion-disable-focus-trap') &&
                    (Ae.shadowRoot
                      ? (() => {
                          if (Ae.contains(We)) Ae.lastFocus = We;
                          else {
                            const ft = Ae.lastFocus;
                            te(Ae, Ae),
                              ft === ye.activeElement && _e(Ae, Ae),
                              (Ae.lastFocus = ye.activeElement);
                          }
                        })()
                      : (() => {
                          if (Ae === We) Ae.lastFocus = void 0;
                          else {
                            const ft = (0, j.g)(Ae);
                            if (!ft.contains(We)) return;
                            const bt = ft.querySelector('.ion-overlay-wrapper');
                            if (!bt) return;
                            if (bt.contains(We)) Ae.lastFocus = We;
                            else {
                              const lt = Ae.lastFocus;
                              te(bt, Ae),
                                lt === ye.activeElement && _e(bt, Ae),
                                (Ae.lastFocus = ye.activeElement);
                            }
                          }
                        })());
                })(ye, Pe);
              },
              !0
            ),
            Pe.addEventListener('ionBackButton', (ye) => {
              const Ae = W(Pe);
              Ae?.backdropDismiss &&
                ye.detail.register(U.OVERLAY_BACK_BUTTON_PRIORITY, () =>
                  Ae.dismiss(void 0, q)
                );
            }),
            Pe.addEventListener('keyup', (ye) => {
              if ('Escape' === ye.key) {
                const Ae = W(Pe);
                Ae?.backdropDismiss && Ae.dismiss(void 0, q);
              }
            }));
        },
        ke = (Pe, ye, Ae, We, nt) => {
          const Ke = W(Pe, We, nt);
          return Ke
            ? Ke.dismiss(ye, Ae)
            : Promise.reject('overlay does not exist');
        },
        W = (Pe, ye, Ae) => {
          const We = ((Pe, ye) => (
            void 0 === ye &&
              (ye =
                'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast'),
            Array.from(Pe.querySelectorAll(ye)).filter(
              (Ae) => Ae.overlayIndex > 0
            )
          ))(Pe, ye).filter(
            (nt) => !((Pe) => Pe.classList.contains('overlay-hidden'))(nt)
          );
          return void 0 === Ae
            ? We[We.length - 1]
            : We.find((nt) => nt.id === Ae);
        },
        le = (Pe = !1) => {
          const Ae = Y(document).querySelector(
            'ion-router-outlet, ion-nav, #ion-view-container-root'
          );
          !Ae ||
            (Pe
              ? Ae.setAttribute('aria-hidden', 'true')
              : Ae.removeAttribute('aria-hidden'));
        },
        fe = (function () {
          var Pe = (0, o.Z)(function* (ye, Ae, We, nt, Ke) {
            var ft, bt;
            if (ye.presented) return;
            le(!0),
              (ye.presented = !0),
              ye.willPresent.emit(),
              null === (ft = ye.willPresentShorthand) ||
                void 0 === ft ||
                ft.emit();
            const lt = (0, P.b)(ye),
              Ft = ye.enterAnimation
                ? ye.enterAnimation
                : P.c.get(Ae, 'ios' === lt ? We : nt);
            (yield G(ye, Ft, ye.el, Ke)) &&
              (ye.didPresent.emit(),
              null === (bt = ye.didPresentShorthand) ||
                void 0 === bt ||
                bt.emit()),
              'ION-TOAST' !== ye.el.tagName && k(ye.el),
              ye.keyboardClose &&
                (null === document.activeElement ||
                  !ye.el.contains(document.activeElement)) &&
                ye.el.focus();
          });
          return function (Ae, We, nt, Ke, ft) {
            return Pe.apply(this, arguments);
          };
        })(),
        k = (function () {
          var Pe = (0, o.Z)(function* (ye) {
            let Ae = document.activeElement;
            if (!Ae) return;
            const We = Ae?.shadowRoot;
            We && (Ae = We.querySelector(ge) || Ae),
              yield ye.onDidDismiss(),
              Ae.focus();
          });
          return function (Ae) {
            return Pe.apply(this, arguments);
          };
        })(),
        B = (function () {
          var Pe = (0, o.Z)(function* (ye, Ae, We, nt, Ke, ft, bt) {
            var lt, Ft;
            if (!ye.presented) return !1;
            le(!1), (ye.presented = !1);
            try {
              ye.el.style.setProperty('pointer-events', 'none'),
                ye.willDismiss.emit({ data: Ae, role: We }),
                null === (lt = ye.willDismissShorthand) ||
                  void 0 === lt ||
                  lt.emit({ data: Ae, role: We });
              const Mt = (0, P.b)(ye),
                Ye = ye.leaveAnimation
                  ? ye.leaveAnimation
                  : P.c.get(nt, 'ios' === Mt ? Ke : ft);
              We !== Re && (yield G(ye, Ye, ye.el, bt)),
                ye.didDismiss.emit({ data: Ae, role: We }),
                null === (Ft = ye.didDismissShorthand) ||
                  void 0 === Ft ||
                  Ft.emit({ data: Ae, role: We }),
                Le.delete(ye),
                ye.el.classList.add('overlay-hidden'),
                ye.el.style.removeProperty('pointer-events');
            } catch (Mt) {
              console.error(Mt);
            }
            return ye.el.remove(), !0;
          });
          return function (Ae, We, nt, Ke, ft, bt, lt) {
            return Pe.apply(this, arguments);
          };
        })(),
        Y = (Pe) => Pe.querySelector('ion-app') || Pe.body,
        G = (function () {
          var Pe = (0, o.Z)(function* (ye, Ae, We, nt) {
            We.classList.remove('overlay-hidden');
            const ft = Ae(ye.el, nt);
            (!ye.animated || !P.c.getBoolean('animated', !0)) && ft.duration(0),
              ye.keyboardClose &&
                ft.beforeAddWrite(() => {
                  const lt = We.ownerDocument.activeElement;
                  lt?.matches('input,ion-input, ion-textarea') && lt.blur();
                });
            const bt = Le.get(ye) || [];
            return Le.set(ye, [...bt, ft]), yield ft.play(), !0;
          });
          return function (Ae, We, nt, Ke) {
            return Pe.apply(this, arguments);
          };
        })(),
        Ie = (Pe, ye) => {
          let Ae;
          const We = new Promise((nt) => (Ae = nt));
          return (
            ie(Pe, ye, (nt) => {
              Ae(nt.detail);
            }),
            We
          );
        },
        ie = (Pe, ye, Ae) => {
          const We = (nt) => {
            (0, j.b)(Pe, ye, We), Ae(nt);
          };
          (0, j.a)(Pe, ye, We);
        },
        X = (Pe) => 'cancel' === Pe || Pe === q,
        L = (Pe) => Pe(),
        K = (Pe, ye) => {
          if ('function' == typeof Pe)
            return P.c.get(
              '_zoneGate',
              L
            )(() => {
              try {
                return Pe(ye);
              } catch (We) {
                throw We;
              }
            });
        },
        q = 'backdrop',
        Re = 'gesture';
    },
    6146: (at, $e, S) => {
      'use strict';
      S.d($e, { k: () => o });
      var o = (() => {
        return (
          ((P = o || (o = {})).NOT_SELECTED = 'NOT_SELECTED'),
          (P.VILLAGEOIS = 'VILLAGEOIS'),
          (P.LOUP_GAROU = 'LOUP_GAROU'),
          (P.CHASSEUR = 'CHASSEUR'),
          (P.CUPIDON = 'CUPIDON'),
          (P.PETITE_FILLE = 'PETITE_FILLE'),
          (P.SORCIERE = 'SORCIERE'),
          (P.VOLEUR = 'VOLEUR'),
          (P.VOYANTE = 'VOYANTE'),
          (P.JOUEUR_FLUTE = 'JOUEUR_FLUTE'),
          o
        );
        var P;
      })();
    },
    4206: (at, $e, S) => {
      'use strict';
      S.d($e, { M: () => o });
      var o = (() => {
        return (
          ((P = o || (o = {})).WOLF_TARGET = 'WOLF_TARGET'),
          (P.HEALTH_POTION = 'HEALTH_POTION'),
          (P.DEATH_POTION = 'DEATH_POTION'),
          (P.CAPTAIN = 'CAPTAIN'),
          (P.LOVER = 'LOVER'),
          (P.CHARMED = 'CHARMED'),
          o
        );
        var P;
      })();
    },
    1022: (at, $e, S) => {
      'use strict';
      S.d($e, { h: () => o });
      var o = (() => {
        return (
          ((P = o || (o = {}))[(P.VOLEUR = 0)] = 'VOLEUR'),
          (P[(P.CUPIDON = 1)] = 'CUPIDON'),
          (P[(P.VOYANTE = 2)] = 'VOYANTE'),
          (P[(P.AMOUREUX = 3)] = 'AMOUREUX'),
          (P[(P.LOUP_GAROU = 4)] = 'LOUP_GAROU'),
          (P[(P.SORCIERE_HEALTH = 5)] = 'SORCIERE_HEALTH'),
          (P[(P.SORCIERE_KILL = 6)] = 'SORCIERE_KILL'),
          (P[(P.VILLAGEOIS = 7)] = 'VILLAGEOIS'),
          (P[(P.CAPITAINE = 8)] = 'CAPITAINE'),
          (P[(P.CHASSEUR = 9)] = 'CHASSEUR'),
          (P[(P.JOUEUR_FLUTE = 10)] = 'JOUEUR_FLUTE'),
          (P[(P.CHARMED = 11)] = 'CHARMED'),
          o
        );
        var P;
      })();
    },
    6436: (at, $e, S) => {
      'use strict';
      S.d($e, { K: () => o });
      var o = (() => {
        return (
          ((P = o || (o = {})).NONE = 'NONE'),
          (P.AMOUREUX = 'AMOUREUX'),
          (P.LOUP_GAROU = 'LOUP_GAROU'),
          (P.VILLAGEOIS = 'VILLAGEOIS'),
          (P.JOUEUR_FLUTE = 'JOUEUR_FLUTE'),
          o
        );
        var P;
      })();
    },
    7510: (at, $e, S) => {
      'use strict';
      S.d($e, { h: () => Ie });
      var o = S(1135),
        P = S(6146),
        U = S(4206),
        j = S(1022),
        pe = S(5861),
        Le = S(8256),
        oe = S(5035);
      class xe {
        constructor(X) {
          (this.alertController = X),
            (this.announcementsQueue = []),
            (this.isPresenting = !1);
        }
        announceDeaths(X) {
          const K = {
            header: 'Morts \xe0 annoncer',
            message: X.map((q) => `<p>${q.name}</p>`).join(''),
          };
          this.addAnnouncementToQueue(K);
        }
        addAnnouncementToQueue(X) {
          this.announcementsQueue.push({ ...X, buttons: ['OK'] }),
            this.isPresenting || this.showNextAnnouncement();
        }
        showNextAnnouncement() {
          var X = this;
          return (0, pe.Z)(function* () {
            X.isPresenting = !0;
            const L = yield X.alertController.create(
              X.announcementsQueue.shift()
            );
            L.onDidDismiss().then(() => {
              X.announcementsQueue.length > 0
                ? X.showNextAnnouncement()
                : (X.isPresenting = !1);
            }),
              yield L.present();
          })();
        }
      }
      (xe.ɵfac = function (X) {
        return new (X || xe)(Le.LFG(oe.Br));
      }),
        (xe.ɵprov = Le.Yz7({
          token: xe,
          factory: xe.ɵfac,
          providedIn: 'root',
        }));
      class Se {
        constructor() {
          (this.isOnlyOnce = !1), (this.isDuringDay = !0);
        }
        handleAction(X, L) {
          const K = [...X];
          return (K.find((q) => q.id === L[0]).isDead = !0), K;
        }
        getRoundConfig(X) {
          return {
            role: j.h.VILLAGEOIS,
            selectablePlayers: this.getKillablePlayers(X),
            maxSelectable: 1,
            minSelectable: 1,
            isDuringDay: this.isDuringDay,
          };
        }
        getKillablePlayers(X) {
          return X.filter((L) => !L.isDead).map((L) => L.id);
        }
      }
      class Fe {
        constructor() {
          (this.isOnlyOnce = !0), (this.isDuringDay = !0);
        }
        handleAction(X, L) {
          const K = [...X];
          return K.find((q) => q.id === L[0])?.statuses.add(U.M.CAPTAIN), K;
        }
        getRoundConfig(X) {
          return {
            role: j.h.CAPITAINE,
            selectablePlayers: this.getSelectablePlayers(X),
            maxSelectable: 1,
            minSelectable: 1,
            isDuringDay: this.isDuringDay,
          };
        }
        getSelectablePlayers(X) {
          return X.filter((L) => !L.isDead).map((L) => L.id);
        }
      }
      class ve {
        constructor() {
          (this.isOnlyOnce = !1), (this.isDuringDay = !1);
        }
        handleAction(X, L) {
          const K = [...X];
          return K.find((q) => q.id === L[0])?.statuses.add(U.M.WOLF_TARGET), K;
        }
        getRoundConfig(X) {
          return {
            role: j.h.LOUP_GAROU,
            selectablePlayers: X.filter(
              (L) => L.role !== P.k.LOUP_GAROU && !L.isDead
            ).map((L) => L.id),
            maxSelectable: 1,
            minSelectable: 1,
            isDuringDay: this.isDuringDay,
          };
        }
      }
      class be {
        constructor() {
          (this.isOnlyOnce = !1), (this.isDuringDay = !1);
        }
        handleAction(X, L) {
          const K = [...X];
          return (
            L.length > 0 &&
              (K.find((q) => q.id === L[0])?.statuses.delete(U.M.WOLF_TARGET),
              K.find((q) => q.role === P.k.SORCIERE)?.statuses.delete(
                U.M.HEALTH_POTION
              )),
            K
          );
        }
        getRoundConfig(X) {
          return {
            role: j.h.SORCIERE_HEALTH,
            selectablePlayers: this.canHeal(X)
              ? this.getHealablePlayers(X)
              : [],
            maxSelectable: 1,
            minSelectable: 0,
            isDuringDay: this.isDuringDay,
          };
        }
        canHeal(X) {
          return (
            X.find((L) => L.role === P.k.SORCIERE)?.statuses.has(
              U.M.HEALTH_POTION
            ) ?? !1
          );
        }
        getHealablePlayers(X) {
          return X.filter((L) => L.statuses.has(U.M.WOLF_TARGET)).map(
            (L) => L.id
          );
        }
      }
      class ue {
        constructor() {
          (this.isOnlyOnce = !1), (this.isDuringDay = !1);
        }
        handleAction(X, L) {
          const K = [...X];
          return (
            L.length > 0 &&
              ((K.find((q) => q.id === L[0]).isDead = !0),
              K.find((q) => q.role === P.k.SORCIERE)?.statuses.delete(
                U.M.DEATH_POTION
              )),
            K
          );
        }
        getRoundConfig(X) {
          return {
            role: j.h.SORCIERE_KILL,
            selectablePlayers: this.canKill(X)
              ? this.getKillablePlayers(X)
              : [],
            maxSelectable: 1,
            minSelectable: 0,
            isDuringDay: this.isDuringDay,
          };
        }
        canKill(X) {
          return (
            X.find((L) => L.role === P.k.SORCIERE)?.statuses.has(
              U.M.DEATH_POTION
            ) ?? !1
          );
        }
        getKillablePlayers(X) {
          return X.filter((L) => L.role !== P.k.SORCIERE && !L.isDead).map(
            (L) => L.id
          );
        }
      }
      class ne {
        constructor() {
          (this.isOnlyOnce = !0), (this.isDuringDay = !1);
        }
        handleAction(X, L) {
          const K = [...X];
          return (
            K.filter((q) => L.includes(q.id)).forEach((q) =>
              q.statuses.add(U.M.LOVER)
            ),
            K
          );
        }
        getRoundConfig(X) {
          return {
            role: j.h.CUPIDON,
            selectablePlayers: X.map((L) => L.id),
            maxSelectable: 2,
            minSelectable: 2,
            isDuringDay: this.isDuringDay,
          };
        }
      }
      class me {
        constructor(X, L, K) {
          (this.roundRole = X), (this.isOnlyOnce = L), (this.isDuringDay = K);
        }
        handleAction(X, L) {
          return [...X];
        }
        getRoundConfig(X) {
          return {
            role: this.roundRole,
            selectablePlayers: [],
            maxSelectable: 0,
            minSelectable: 0,
            isDuringDay: this.isDuringDay,
          };
        }
      }
      class Be extends me {
        constructor() {
          super(j.h.AMOUREUX, !0, !1);
        }
      }
      class ge {
        constructor() {
          (this.isOnlyOnce = !0), (this.isDuringDay = !0);
        }
        handleAction(X, L) {
          const K = [...X];
          return (K.find((q) => q.id === L[0]).isDead = !0), K;
        }
        getRoundConfig(X) {
          return {
            role: j.h.CHASSEUR,
            selectablePlayers: this.getKillablePlayers(X),
            maxSelectable: 1,
            minSelectable: 1,
            isDuringDay: this.isDuringDay,
          };
        }
        getKillablePlayers(X) {
          return X.filter((L) => L.role !== P.k.CHASSEUR && !L.isDead).map(
            (L) => L.id
          );
        }
      }
      class te extends me {
        constructor() {
          super(j.h.VOYANTE, !1, !1);
        }
      }
      class He {
        constructor() {
          (this.isOnlyOnce = !1), (this.isDuringDay = !1);
        }
        handleAction(X, L) {
          const K = [...X];
          return (
            K.filter((q) => L.includes(q.id)).forEach((q) =>
              q.statuses.add(U.M.CHARMED)
            ),
            K
          );
        }
        getRoundConfig(X) {
          return {
            role: j.h.JOUEUR_FLUTE,
            selectablePlayers: X.filter(
              (L) =>
                L.role !== P.k.JOUEUR_FLUTE &&
                !L.isDead &&
                !L.statuses.has(U.M.CHARMED)
            ).map((L) => L.id),
            maxSelectable: 2,
            minSelectable: 0,
            isDuringDay: this.isDuringDay,
          };
        }
      }
      class _e extends me {
        constructor() {
          super(j.h.CHARMED, !1, !1);
        }
      }
      class he {
        constructor() {
          this.roundHandlers = new Map();
        }
        initHandlers(X) {
          this.roundHandlers.clear();
          const L = new Set(X);
          this.roundHandlers.set(j.h.VILLAGEOIS, new Se()),
            this.roundHandlers.set(j.h.CAPITAINE, new Fe()),
            L.has(P.k.LOUP_GAROU) &&
              this.roundHandlers.set(j.h.LOUP_GAROU, new ve()),
            L.has(P.k.SORCIERE) &&
              (this.roundHandlers.set(j.h.SORCIERE_HEALTH, new be()),
              this.roundHandlers.set(j.h.SORCIERE_KILL, new ue())),
            L.has(P.k.CUPIDON) &&
              (this.roundHandlers.set(j.h.CUPIDON, new ne()),
              this.roundHandlers.set(j.h.AMOUREUX, new Be())),
            L.has(P.k.CHASSEUR) &&
              this.roundHandlers.set(j.h.CHASSEUR, new ge()),
            L.has(P.k.VOYANTE) && this.roundHandlers.set(j.h.VOYANTE, new te()),
            L.has(P.k.JOUEUR_FLUTE) &&
              (this.roundHandlers.set(j.h.JOUEUR_FLUTE, new He()),
              this.roundHandlers.set(j.h.CHARMED, new _e()));
        }
        getHandler(X) {
          return this.roundHandlers.get(X);
        }
        removeHandlers(X) {
          const L = new Set(X);
          L.has(P.k.LOUP_GAROU) && this.roundHandlers.delete(j.h.LOUP_GAROU),
            L.has(P.k.SORCIERE) &&
              (this.roundHandlers.delete(j.h.SORCIERE_HEALTH),
              this.roundHandlers.delete(j.h.SORCIERE_KILL)),
            L.has(P.k.CUPIDON) && this.roundHandlers.delete(j.h.CUPIDON),
            L.has(P.k.CHASSEUR) && this.roundHandlers.delete(j.h.CHASSEUR),
            L.has(P.k.VOYANTE) && this.roundHandlers.delete(j.h.VOYANTE),
            L.has(P.k.JOUEUR_FLUTE) &&
              (this.roundHandlers.delete(j.h.JOUEUR_FLUTE),
              this.roundHandlers.delete(j.h.CHARMED));
        }
      }
      (he.ɵfac = function (X) {
        return new (X || he)();
      }),
        (he.ɵprov = Le.Yz7({
          token: he,
          factory: he.ɵfac,
          providedIn: 'root',
        }));
      var se = S(6436);
      class ke {
        isVictorious(X) {
          return 0 === X.filter((L) => !L.isDead).length;
        }
      }
      class de {
        isVictorious(X) {
          return X.filter((L) => !L.isDead).every(
            (L) => L.role !== P.k.LOUP_GAROU
          );
        }
      }
      class W {
        isVictorious(X) {
          return X.filter((L) => !L.isDead).every(
            (L) => L.role === P.k.LOUP_GAROU
          );
        }
      }
      class le {
        isVictorious(X) {
          const L = X.filter((K) => !K.isDead);
          return 2 === L.length && L.every((K) => K.statuses.has(U.M.LOVER));
        }
      }
      class fe {
        isVictorious(X) {
          const L = !X.find((q) => q.role === P.k.JOUEUR_FLUTE)?.isDead,
            K = X.filter((q) => !q.isDead && q.role !== P.k.JOUEUR_FLUTE).every(
              (q) => q.statuses.has(U.M.CHARMED)
            );
          return L && K;
        }
      }
      class k {
        constructor() {
          (this.victoryHandlers = new Map()),
            (this.victoryPriorities = [
              se.K.NONE,
              se.K.AMOUREUX,
              se.K.JOUEUR_FLUTE,
              se.K.LOUP_GAROU,
              se.K.VILLAGEOIS,
            ]);
        }
        initHandlers(X) {
          this.victoryHandlers.clear();
          const L = new Set(X);
          this.victoryHandlers.set(se.K.NONE, new ke()),
            this.victoryHandlers.set(se.K.VILLAGEOIS, new de()),
            L.has(P.k.LOUP_GAROU) &&
              this.victoryHandlers.set(se.K.LOUP_GAROU, new W()),
            L.has(P.k.CUPIDON) &&
              this.victoryHandlers.set(se.K.AMOUREUX, new le()),
            L.has(P.k.JOUEUR_FLUTE) &&
              this.victoryHandlers.set(se.K.JOUEUR_FLUTE, new fe());
        }
        removeUselessHandlers(X) {
          this.victoryHandlers.has(se.K.AMOUREUX) &&
            X.filter((L) => L.statuses.has(U.M.LOVER)).some((L) => L.isDead) &&
            this.victoryHandlers.delete(se.K.AMOUREUX),
            this.victoryHandlers.has(se.K.JOUEUR_FLUTE) &&
              X.find((L) => L.role === P.k.JOUEUR_FLUTE)?.isDead &&
              this.victoryHandlers.delete(se.K.JOUEUR_FLUTE);
        }
        getVictory(X) {
          let L;
          for (const K of this.victoryPriorities) {
            const q = this.victoryHandlers.get(K);
            if (void 0 !== q && q.isVictorious(X)) {
              L = K;
              break;
            }
          }
          return L;
        }
      }
      (k.ɵfac = function (X) {
        return new (X || k)();
      }),
        (k.ɵprov = Le.Yz7({ token: k, factory: k.ɵfac, providedIn: 'root' }));
      class B {
        constructor(X, L, K) {
          (this.roundHandlersService = X),
            (this.victoryHandlersService = L),
            (this.announcementService = K),
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
        handleNewDeaths(X) {
          this.rolesToRemove = [];
          const L = [...X];
          return (
            this.handleWolfTarget(L),
            L.filter((K) => K.isDead && !this.knownDeaths.has(K.id)).forEach(
              (K) => this.handlePlayerDeath(L, K)
            ),
            this.roundHandlersService.removeHandlers(this.rolesToRemove),
            this.victoryHandlersService.removeUselessHandlers(X),
            L
          );
        }
        announceDeaths() {
          this.deathsToAnnounce.length > 0 &&
            (this.announcementService.announceDeaths(this.deathsToAnnounce),
            (this.deathsToAnnounce = []));
        }
        handleWolfTarget(X) {
          X.filter((L) => L.statuses.has(U.M.WOLF_TARGET)).forEach((L) => {
            L.statuses.delete(U.M.WOLF_TARGET), (L.isDead = !0);
          });
        }
        handlePlayerDeath(X, L) {
          this.knownDeaths.add(L.id),
            this.deathsToAnnounce.push(L),
            this.handlePlayerDeathStatuses(X, L),
            this.handlePlayerDeathRole(X, L);
        }
        handlePlayerDeathStatuses(X, L) {
          if (
            (L.statuses.has(U.M.CAPTAIN) &&
              (L.statuses.delete(U.M.CAPTAIN),
              this.afterDeathRoundQueue.push(j.h.CAPITAINE)),
            L.statuses.has(U.M.LOVER))
          ) {
            const K = X.find(
              (q) => q.statuses.has(U.M.LOVER) && q.id !== L.id && !q.isDead
            );
            void 0 !== K && ((K.isDead = !0), this.handlePlayerDeath(X, K));
          }
        }
        handlePlayerDeathRole(X, L) {
          switch (L.role) {
            case P.k.LOUP_GAROU:
              0 ===
                X.filter((K) => K.role === P.k.LOUP_GAROU && !K.isDead)
                  .length && this.rolesToRemove.push(P.k.LOUP_GAROU);
              break;
            case P.k.CHASSEUR:
              this.afterDeathRoundQueue.unshift(j.h.CHASSEUR);
              break;
            case P.k.CUPIDON:
              this.rolesToRemove.push(P.k.CUPIDON);
              break;
            case P.k.SORCIERE:
              this.rolesToRemove.push(P.k.SORCIERE);
              break;
            case P.k.VOYANTE:
              this.rolesToRemove.push(P.k.VOYANTE);
          }
        }
      }
      (B.ɵfac = function (X) {
        return new (X || B)(Le.LFG(he), Le.LFG(k), Le.LFG(xe));
      }),
        (B.ɵprov = Le.Yz7({ token: B, factory: B.ɵfac, providedIn: 'root' }));
      class Y {
        constructor(X, L) {
          (this.roundHandlersService = X),
            (this.deathService = L),
            (this.sortedRounds = [
              j.h.VOLEUR,
              j.h.CUPIDON,
              j.h.VOYANTE,
              j.h.AMOUREUX,
              j.h.LOUP_GAROU,
              j.h.SORCIERE_HEALTH,
              j.h.SORCIERE_KILL,
              j.h.JOUEUR_FLUTE,
              j.h.CHARMED,
              j.h.CAPITAINE,
              j.h.VILLAGEOIS,
            ]),
            (this.uniqueRoundsPassed = new Set());
        }
        resetRounds() {
          this.uniqueRoundsPassed.clear();
        }
        getNextRound(X) {
          this.roundHandlersService.getHandler(X)?.isOnlyOnce &&
            this.uniqueRoundsPassed.add(X);
          const K = this.deathService.getNextAfterDeathRound();
          if (void 0 !== K) return (this.beforeDeathRound = X), K;
          this.beforeDeathRound &&
            ((X = this.beforeDeathRound), (this.beforeDeathRound = void 0));
          const q = this.sortedRounds.indexOf(X);
          let Re,
            ye,
            Pe = q + 1;
          Pe > this.sortedRounds.length - 1 && (Pe = 0);
          do {
            (ye = this.sortedRounds[Pe]),
              (Re = this.roundHandlersService.getHandler(ye)),
              Pe++,
              Pe > this.sortedRounds.length - 1 && (Pe = 0);
          } while (
            (void 0 === Re || this.uniqueRoundsPassed.has(ye)) &&
            Pe !== q
          );
          if (void 0 === Re || this.uniqueRoundsPassed.has(ye))
            throw new Error('No next round found');
          return ye;
        }
        getFirstRound() {
          let X,
            K,
            L = 0;
          do {
            if (
              ((K = this.sortedRounds[L]),
              (X = this.roundHandlersService.getHandler(K)),
              L++,
              L > this.sortedRounds.length - 1)
            )
              throw new Error('No first round found');
          } while (void 0 === X);
          return K;
        }
      }
      (Y.ɵfac = function (X) {
        return new (X || Y)(Le.LFG(he), Le.LFG(B));
      }),
        (Y.ɵprov = Le.Yz7({ token: Y, factory: Y.ɵfac, providedIn: 'root' }));
      var G = S(8265);
      class Ie {
        constructor(X, L, K, q, Re) {
          (this.router = X),
            (this.roundHandlersService = L),
            (this.victoryHandlersService = K),
            (this.roundOrchestrationService = q),
            (this.deathService = Re),
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
        createGame(X) {
          this.roundOrchestrationService.resetRounds(),
            this.deathService.reset();
          const L = X.map((q) => q.role);
          this.roundHandlersService.initHandlers(L),
            this.victoryHandlersService.initHandlers(L);
          const K = X.find((q) => q.role === P.k.SORCIERE);
          K &&
            (K.statuses.add(U.M.HEALTH_POTION),
            K.statuses.add(U.M.DEATH_POTION)),
            this.players.next(X),
            this.setFirstRound(),
            this.gameInProgess.next(!0),
            this.router.navigate(['game']);
        }
        submitRoundAction(X) {
          const L = this.round.value?.role;
          if (void 0 !== L) {
            const K = this.roundHandlersService.getHandler(L);
            if (void 0 !== K) {
              const q = K.handleAction(this.players.value, X);
              this.players.next(q), this.nextRound();
            }
          }
        }
        setFirstRound() {
          const X = this.roundOrchestrationService.getFirstRound();
          this.setRound(X);
        }
        nextRound() {
          const X = this.round.value?.role;
          if (void 0 === X) throw new Error('No current round');
          const L = this.roundHandlersService.getHandler(X);
          if (L?.isDuringDay) {
            const Re = this.deathService.handleNewDeaths(this.players.value);
            this.players.next(Re);
          }
          let K;
          try {
            K = this.roundOrchestrationService.getNextRound(X);
          } catch (Re) {
            const Pe = this.victoryHandlersService.getVictory(
              this.players.value
            );
            if (void 0 !== Pe)
              return (
                this.gameInProgess.next(!1),
                void this.router.navigate(['victory'], {
                  queryParams: { victory: Pe },
                })
              );
            throw Re;
          }
          const q = this.roundHandlersService.getHandler(K);
          if (void 0 !== q && q.isDuringDay && !L?.isDuringDay) {
            const Re = this.deathService.handleNewDeaths(this.players.value);
            this.players.next(Re),
              (K = this.roundOrchestrationService.getNextRound(X));
          }
          if ((q?.isDuringDay || L?.isDuringDay) && K !== j.h.CHASSEUR) {
            const Re = this.victoryHandlersService.getVictory(
              this.players.value
            );
            if (void 0 !== Re)
              return (
                this.gameInProgess.next(!1),
                void this.router.navigate(['victory'], {
                  queryParams: { victory: Re },
                })
              );
            this.deathService.announceDeaths();
          }
          this.setRound(K);
        }
        setRound(X) {
          const L = this.roundHandlersService.getHandler(X);
          if (void 0 !== L) {
            const K = L.getRoundConfig(this.players.value);
            this.round.next(K);
          }
        }
      }
      (Ie.ɵfac = function (X) {
        return new (X || Ie)(
          Le.LFG(G.F0),
          Le.LFG(he),
          Le.LFG(k),
          Le.LFG(Y),
          Le.LFG(B)
        );
      }),
        (Ie.ɵprov = Le.Yz7({
          token: Ie,
          factory: Ie.ɵfac,
          providedIn: 'root',
        }));
    },
    383: (at, $e, S) => {
      'use strict';
      var o = S(8256),
        P = S(1481),
        U = S(8265),
        j = S(5035),
        pe = S(6895),
        Le = S(7579),
        oe = S(9300),
        xe = S(4482),
        Se = S(5403),
        Fe = S(8421),
        ve = S(5032),
        ue = S(7510);
      const ne = ['menu'];
      function me(he, se) {
        1 & he &&
          (o.TgZ(0, 'ion-item', 7), o._uU(1, 'Partie en cours'), o.qZA());
      }
      const Be = function () {
        return { exact: !0 };
      };
      class ge {
        constructor(se, ke) {
          (this.router = se),
            (this.gameService = ke),
            (this.destroy$ = new Le.x()),
            (this.isGameInProgress$ = this.gameService.isGameInProgress());
        }
        ngAfterViewInit() {
          this.router.events
            .pipe(
              (0, oe.h)((se) => se instanceof U.m2),
              (function be(he) {
                return (0, xe.e)((se, ke) => {
                  (0, Fe.Xf)(he).subscribe(
                    (0, Se.x)(ke, () => ke.complete(), ve.Z)
                  ),
                    !ke.closed && se.subscribe(ke);
                });
              })(this.destroy$)
            )
            .subscribe(() => this.menu?.close());
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete();
        }
      }
      (ge.ɵfac = function (se) {
        return new (se || ge)(o.Y36(U.F0), o.Y36(ue.h));
      }),
        (ge.ɵcmp = o.Xpm({
          type: ge,
          selectors: [['lgmj-menu']],
          viewQuery: function (se, ke) {
            if ((1 & se && o.Gf(ne, 5), 2 & se)) {
              let de;
              o.iGM((de = o.CRH())) && (ke.menu = de.first);
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
          template: function (se, ke) {
            1 & se &&
              (o.TgZ(0, 'ion-menu', 0, 1)(2, 'ion-header')(3, 'ion-toolbar')(
                4,
                'ion-title'
              ),
              o._uU(5, 'Menu'),
              o.qZA()()(),
              o.TgZ(6, 'ion-content')(7, 'ion-item', 2),
              o._uU(8, 'Accueil'),
              o.qZA(),
              o.YNc(9, me, 2, 0, 'ion-item', 3),
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
              2 & se &&
                (o.xp6(7),
                o.Q6J('routerLinkActiveOptions', o.DdM(4, Be)),
                o.xp6(2),
                o.Q6J('ngIf', o.lcZ(10, 2, ke.isGameInProgress$)));
          },
          dependencies: [
            pe.ez,
            pe.O5,
            pe.Ov,
            j.Pc,
            j.W2,
            j.Gu,
            j.Ie,
            j.z0,
            j.wd,
            j.sr,
            j.YI,
            U.rH,
            U.Od,
          ],
          styles: ['ion-item.active[_ngcontent-%COMP%]{opacity:.5}'],
        }));
      class te {
        constructor(se) {
          this.environmentInjector = se;
        }
      }
      (te.ɵfac = function (se) {
        return new (se || te)(o.Y36(o.lqb));
      }),
        (te.ɵcmp = o.Xpm({
          type: te,
          selectors: [['lgmj-root']],
          standalone: !0,
          features: [o.jDz],
          decls: 3,
          vars: 1,
          consts: [['id', 'router-outlet', 3, 'environmentInjector']],
          template: function (se, ke) {
            1 & se &&
              (o.TgZ(0, 'ion-app'),
              o._UZ(1, 'lgmj-menu')(2, 'ion-router-outlet', 0),
              o.qZA()),
              2 & se &&
                (o.xp6(2),
                o.Q6J('environmentInjector', ke.environmentInjector));
          },
          dependencies: [pe.ez, j.Pc, j.dr, j.jP, ge],
        }));
      const He = [
        {
          path: 'victory',
          title: 'LG Assistant MJ | Victoire',
          loadComponent: () =>
            Promise.all([S.e(8592), S.e(5220)])
              .then(S.bind(S, 5220))
              .then((he) => he.VictoryPage),
        },
        {
          path: 'game',
          title: 'LG Assistant MJ | Partie en cours',
          loadComponent: () =>
            Promise.all([S.e(8592), S.e(3903)])
              .then(S.bind(S, 3903))
              .then((he) => he.GamePage),
        },
        {
          path: 'new-game',
          title: 'LG Assistant MJ | Nouvelle partie',
          loadComponent: () =>
            Promise.all([S.e(8592), S.e(8724)])
              .then(S.bind(S, 8724))
              .then((he) => he.NewGamePage),
        },
        {
          path: 'roles-rules',
          title: 'LG Assistant MJ | R\xe8gles des r\xf4les',
          loadComponent: () =>
            Promise.all([S.e(8592), S.e(2451)])
              .then(S.bind(S, 2451))
              .then((he) => he.RolesRulesPage),
        },
        {
          path: 'status-legends',
          title: 'LG Assistant MJ | L\xe9gende des statuts',
          loadComponent: () =>
            Promise.all([S.e(8592), S.e(4171)])
              .then(S.bind(S, 4171))
              .then((he) => he.StatusLegendsPage),
        },
        {
          path: '',
          pathMatch: 'full',
          title: 'LG Assistant MJ | Accueil',
          loadComponent: () =>
            Promise.all([S.e(8592), S.e(4048)])
              .then(S.bind(S, 4048))
              .then((he) => he.HomePage),
        },
      ];
      (0, o.G48)(),
        (0, P.Cg)(te, {
          providers: [
            (0, U.bU)(He, (0, U.aF)(U.wm)),
            (0, o.RIp)(j.Pc.forRoot()),
            { provide: U.wN, useClass: j.r4 },
          ],
        }).catch((he) => console.error(he));
    },
    1135: (at, $e, S) => {
      'use strict';
      S.d($e, { X: () => P });
      var o = S(7579);
      class P extends o.x {
        constructor(j) {
          super(), (this._value = j);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(j) {
          const pe = super._subscribe(j);
          return !pe.closed && j.next(this._value), pe;
        }
        getValue() {
          const { hasError: j, thrownError: pe, _value: Le } = this;
          if (j) throw pe;
          return this._throwIfClosed(), Le;
        }
        next(j) {
          super.next((this._value = j));
        }
      }
    },
    9751: (at, $e, S) => {
      'use strict';
      S.d($e, { y: () => xe });
      var o = S(930),
        P = S(727),
        U = S(8822),
        j = S(9635),
        pe = S(2416),
        Le = S(576),
        oe = S(2806);
      let xe = (() => {
        class be {
          constructor(ne) {
            ne && (this._subscribe = ne);
          }
          lift(ne) {
            const me = new be();
            return (me.source = this), (me.operator = ne), me;
          }
          subscribe(ne, me, Be) {
            const ge = (function ve(be) {
              return (
                (be && be instanceof o.Lv) ||
                ((function Fe(be) {
                  return (
                    be &&
                    (0, Le.m)(be.next) &&
                    (0, Le.m)(be.error) &&
                    (0, Le.m)(be.complete)
                  );
                })(be) &&
                  (0, P.Nn)(be))
              );
            })(ne)
              ? ne
              : new o.Hp(ne, me, Be);
            return (
              (0, oe.x)(() => {
                const { operator: te, source: He } = this;
                ge.add(
                  te
                    ? te.call(ge, He)
                    : He
                    ? this._subscribe(ge)
                    : this._trySubscribe(ge)
                );
              }),
              ge
            );
          }
          _trySubscribe(ne) {
            try {
              return this._subscribe(ne);
            } catch (me) {
              ne.error(me);
            }
          }
          forEach(ne, me) {
            return new (me = Se(me))((Be, ge) => {
              const te = new o.Hp({
                next: (He) => {
                  try {
                    ne(He);
                  } catch (_e) {
                    ge(_e), te.unsubscribe();
                  }
                },
                error: ge,
                complete: Be,
              });
              this.subscribe(te);
            });
          }
          _subscribe(ne) {
            var me;
            return null === (me = this.source) || void 0 === me
              ? void 0
              : me.subscribe(ne);
          }
          [U.L]() {
            return this;
          }
          pipe(...ne) {
            return (0, j.U)(ne)(this);
          }
          toPromise(ne) {
            return new (ne = Se(ne))((me, Be) => {
              let ge;
              this.subscribe(
                (te) => (ge = te),
                (te) => Be(te),
                () => me(ge)
              );
            });
          }
        }
        return (be.create = (ue) => new be(ue)), be;
      })();
      function Se(be) {
        var ue;
        return null !== (ue = be ?? pe.v.Promise) && void 0 !== ue
          ? ue
          : Promise;
      }
    },
    7579: (at, $e, S) => {
      'use strict';
      S.d($e, { x: () => oe });
      var o = S(9751),
        P = S(727);
      const j = (0, S(3888).d)(
        (Se) =>
          function () {
            Se(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          }
      );
      var pe = S(8737),
        Le = S(2806);
      let oe = (() => {
        class Se extends o.y {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(ve) {
            const be = new xe(this, this);
            return (be.operator = ve), be;
          }
          _throwIfClosed() {
            if (this.closed) throw new j();
          }
          next(ve) {
            (0, Le.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const be of this.currentObservers) be.next(ve);
              }
            });
          }
          error(ve) {
            (0, Le.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = ve);
                const { observers: be } = this;
                for (; be.length; ) be.shift().error(ve);
              }
            });
          }
          complete() {
            (0, Le.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: ve } = this;
                for (; ve.length; ) ve.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var ve;
            return (
              (null === (ve = this.observers) || void 0 === ve
                ? void 0
                : ve.length) > 0
            );
          }
          _trySubscribe(ve) {
            return this._throwIfClosed(), super._trySubscribe(ve);
          }
          _subscribe(ve) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(ve),
              this._innerSubscribe(ve)
            );
          }
          _innerSubscribe(ve) {
            const { hasError: be, isStopped: ue, observers: ne } = this;
            return be || ue
              ? P.Lc
              : ((this.currentObservers = null),
                ne.push(ve),
                new P.w0(() => {
                  (this.currentObservers = null), (0, pe.P)(ne, ve);
                }));
          }
          _checkFinalizedStatuses(ve) {
            const { hasError: be, thrownError: ue, isStopped: ne } = this;
            be ? ve.error(ue) : ne && ve.complete();
          }
          asObservable() {
            const ve = new o.y();
            return (ve.source = this), ve;
          }
        }
        return (Se.create = (Fe, ve) => new xe(Fe, ve)), Se;
      })();
      class xe extends oe {
        constructor(Fe, ve) {
          super(), (this.destination = Fe), (this.source = ve);
        }
        next(Fe) {
          var ve, be;
          null ===
            (be =
              null === (ve = this.destination) || void 0 === ve
                ? void 0
                : ve.next) ||
            void 0 === be ||
            be.call(ve, Fe);
        }
        error(Fe) {
          var ve, be;
          null ===
            (be =
              null === (ve = this.destination) || void 0 === ve
                ? void 0
                : ve.error) ||
            void 0 === be ||
            be.call(ve, Fe);
        }
        complete() {
          var Fe, ve;
          null ===
            (ve =
              null === (Fe = this.destination) || void 0 === Fe
                ? void 0
                : Fe.complete) ||
            void 0 === ve ||
            ve.call(Fe);
        }
        _subscribe(Fe) {
          var ve, be;
          return null !==
            (be =
              null === (ve = this.source) || void 0 === ve
                ? void 0
                : ve.subscribe(Fe)) && void 0 !== be
            ? be
            : P.Lc;
        }
      }
    },
    930: (at, $e, S) => {
      'use strict';
      S.d($e, { Hp: () => Be, Lv: () => be });
      var o = S(576),
        P = S(727),
        U = S(2416),
        j = S(7849),
        pe = S(5032);
      const Le = Se('C', void 0, void 0);
      function Se(he, se, ke) {
        return { kind: he, value: se, error: ke };
      }
      var Fe = S(3410),
        ve = S(2806);
      class be extends P.w0 {
        constructor(se) {
          super(),
            (this.isStopped = !1),
            se
              ? ((this.destination = se), (0, P.Nn)(se) && se.add(this))
              : (this.destination = _e);
        }
        static create(se, ke, de) {
          return new Be(se, ke, de);
        }
        next(se) {
          this.isStopped
            ? He(
                (function xe(he) {
                  return Se('N', he, void 0);
                })(se),
                this
              )
            : this._next(se);
        }
        error(se) {
          this.isStopped
            ? He(
                (function oe(he) {
                  return Se('E', void 0, he);
                })(se),
                this
              )
            : ((this.isStopped = !0), this._error(se));
        }
        complete() {
          this.isStopped
            ? He(Le, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(se) {
          this.destination.next(se);
        }
        _error(se) {
          try {
            this.destination.error(se);
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
      function ne(he, se) {
        return ue.call(he, se);
      }
      class me {
        constructor(se) {
          this.partialObserver = se;
        }
        next(se) {
          const { partialObserver: ke } = this;
          if (ke.next)
            try {
              ke.next(se);
            } catch (de) {
              ge(de);
            }
        }
        error(se) {
          const { partialObserver: ke } = this;
          if (ke.error)
            try {
              ke.error(se);
            } catch (de) {
              ge(de);
            }
          else ge(se);
        }
        complete() {
          const { partialObserver: se } = this;
          if (se.complete)
            try {
              se.complete();
            } catch (ke) {
              ge(ke);
            }
        }
      }
      class Be extends be {
        constructor(se, ke, de) {
          let W;
          if ((super(), (0, o.m)(se) || !se))
            W = {
              next: se ?? void 0,
              error: ke ?? void 0,
              complete: de ?? void 0,
            };
          else {
            let le;
            this && U.v.useDeprecatedNextContext
              ? ((le = Object.create(se)),
                (le.unsubscribe = () => this.unsubscribe()),
                (W = {
                  next: se.next && ne(se.next, le),
                  error: se.error && ne(se.error, le),
                  complete: se.complete && ne(se.complete, le),
                }))
              : (W = se);
          }
          this.destination = new me(W);
        }
      }
      function ge(he) {
        U.v.useDeprecatedSynchronousErrorHandling
          ? (0, ve.O)(he)
          : (0, j.h)(he);
      }
      function He(he, se) {
        const { onStoppedNotification: ke } = U.v;
        ke && Fe.z.setTimeout(() => ke(he, se));
      }
      const _e = {
        closed: !0,
        next: pe.Z,
        error: function te(he) {
          throw he;
        },
        complete: pe.Z,
      };
    },
    727: (at, $e, S) => {
      'use strict';
      S.d($e, { Lc: () => Le, w0: () => pe, Nn: () => oe });
      var o = S(576);
      const U = (0, S(3888).d)(
        (Se) =>
          function (ve) {
            Se(this),
              (this.message = ve
                ? `${ve.length} errors occurred during unsubscription:\n${ve
                    .map((be, ue) => `${ue + 1}) ${be.toString()}`)
                    .join('\n  ')}`
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = ve);
          }
      );
      var j = S(8737);
      class pe {
        constructor(Fe) {
          (this.initialTeardown = Fe),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let Fe;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: ve } = this;
            if (ve)
              if (((this._parentage = null), Array.isArray(ve)))
                for (const ne of ve) ne.remove(this);
              else ve.remove(this);
            const { initialTeardown: be } = this;
            if ((0, o.m)(be))
              try {
                be();
              } catch (ne) {
                Fe = ne instanceof U ? ne.errors : [ne];
              }
            const { _finalizers: ue } = this;
            if (ue) {
              this._finalizers = null;
              for (const ne of ue)
                try {
                  xe(ne);
                } catch (me) {
                  (Fe = Fe ?? []),
                    me instanceof U
                      ? (Fe = [...Fe, ...me.errors])
                      : Fe.push(me);
                }
            }
            if (Fe) throw new U(Fe);
          }
        }
        add(Fe) {
          var ve;
          if (Fe && Fe !== this)
            if (this.closed) xe(Fe);
            else {
              if (Fe instanceof pe) {
                if (Fe.closed || Fe._hasParent(this)) return;
                Fe._addParent(this);
              }
              (this._finalizers =
                null !== (ve = this._finalizers) && void 0 !== ve
                  ? ve
                  : []).push(Fe);
            }
        }
        _hasParent(Fe) {
          const { _parentage: ve } = this;
          return ve === Fe || (Array.isArray(ve) && ve.includes(Fe));
        }
        _addParent(Fe) {
          const { _parentage: ve } = this;
          this._parentage = Array.isArray(ve)
            ? (ve.push(Fe), ve)
            : ve
            ? [ve, Fe]
            : Fe;
        }
        _removeParent(Fe) {
          const { _parentage: ve } = this;
          ve === Fe
            ? (this._parentage = null)
            : Array.isArray(ve) && (0, j.P)(ve, Fe);
        }
        remove(Fe) {
          const { _finalizers: ve } = this;
          ve && (0, j.P)(ve, Fe), Fe instanceof pe && Fe._removeParent(this);
        }
      }
      pe.EMPTY = (() => {
        const Se = new pe();
        return (Se.closed = !0), Se;
      })();
      const Le = pe.EMPTY;
      function oe(Se) {
        return (
          Se instanceof pe ||
          (Se &&
            'closed' in Se &&
            (0, o.m)(Se.remove) &&
            (0, o.m)(Se.add) &&
            (0, o.m)(Se.unsubscribe))
        );
      }
      function xe(Se) {
        (0, o.m)(Se) ? Se() : Se.unsubscribe();
      }
    },
    2416: (at, $e, S) => {
      'use strict';
      S.d($e, { v: () => o });
      const o = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    515: (at, $e, S) => {
      'use strict';
      S.d($e, { E: () => P });
      const P = new (S(9751).y)((pe) => pe.complete());
    },
    2076: (at, $e, S) => {
      'use strict';
      S.d($e, { D: () => de });
      var o = S(8421),
        P = S(9672),
        U = S(4482),
        j = S(5403);
      function pe(W, le = 0) {
        return (0, U.e)((fe, k) => {
          fe.subscribe(
            (0, j.x)(
              k,
              (B) => (0, P.f)(k, W, () => k.next(B), le),
              () => (0, P.f)(k, W, () => k.complete(), le),
              (B) => (0, P.f)(k, W, () => k.error(B), le)
            )
          );
        });
      }
      function Le(W, le = 0) {
        return (0, U.e)((fe, k) => {
          k.add(W.schedule(() => fe.subscribe(k), le));
        });
      }
      var Se = S(9751),
        ve = S(2202),
        be = S(576);
      function ne(W, le) {
        if (!W) throw new Error('Iterable cannot be null');
        return new Se.y((fe) => {
          (0, P.f)(fe, le, () => {
            const k = W[Symbol.asyncIterator]();
            (0, P.f)(
              fe,
              le,
              () => {
                k.next().then((B) => {
                  B.done ? fe.complete() : fe.next(B.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var me = S(3670),
        Be = S(8239),
        ge = S(1144),
        te = S(6495),
        He = S(2206),
        _e = S(4532),
        he = S(3260);
      function de(W, le) {
        return le
          ? (function ke(W, le) {
              if (null != W) {
                if ((0, me.c)(W))
                  return (function oe(W, le) {
                    return (0, o.Xf)(W).pipe(Le(le), pe(le));
                  })(W, le);
                if ((0, ge.z)(W))
                  return (function Fe(W, le) {
                    return new Se.y((fe) => {
                      let k = 0;
                      return le.schedule(function () {
                        k === W.length
                          ? fe.complete()
                          : (fe.next(W[k++]), fe.closed || this.schedule());
                      });
                    });
                  })(W, le);
                if ((0, Be.t)(W))
                  return (function xe(W, le) {
                    return (0, o.Xf)(W).pipe(Le(le), pe(le));
                  })(W, le);
                if ((0, He.D)(W)) return ne(W, le);
                if ((0, te.T)(W))
                  return (function ue(W, le) {
                    return new Se.y((fe) => {
                      let k;
                      return (
                        (0, P.f)(fe, le, () => {
                          (k = W[ve.h]()),
                            (0, P.f)(
                              fe,
                              le,
                              () => {
                                let B, Y;
                                try {
                                  ({ value: B, done: Y } = k.next());
                                } catch (G) {
                                  return void fe.error(G);
                                }
                                Y ? fe.complete() : fe.next(B);
                              },
                              0,
                              !0
                            );
                        }),
                        () => (0, be.m)(k?.return) && k.return()
                      );
                    });
                  })(W, le);
                if ((0, he.L)(W))
                  return (function se(W, le) {
                    return ne((0, he.Q)(W), le);
                  })(W, le);
              }
              throw (0, _e.z)(W);
            })(W, le)
          : (0, o.Xf)(W);
      }
    },
    8421: (at, $e, S) => {
      'use strict';
      S.d($e, { Xf: () => ue });
      var o = S(655),
        P = S(1144),
        U = S(8239),
        j = S(9751),
        pe = S(3670),
        Le = S(2206),
        oe = S(4532),
        xe = S(6495),
        Se = S(3260),
        Fe = S(576),
        ve = S(7849),
        be = S(8822);
      function ue(he) {
        if (he instanceof j.y) return he;
        if (null != he) {
          if ((0, pe.c)(he))
            return (function ne(he) {
              return new j.y((se) => {
                const ke = he[be.L]();
                if ((0, Fe.m)(ke.subscribe)) return ke.subscribe(se);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable'
                );
              });
            })(he);
          if ((0, P.z)(he))
            return (function me(he) {
              return new j.y((se) => {
                for (let ke = 0; ke < he.length && !se.closed; ke++)
                  se.next(he[ke]);
                se.complete();
              });
            })(he);
          if ((0, U.t)(he))
            return (function Be(he) {
              return new j.y((se) => {
                he.then(
                  (ke) => {
                    se.closed || (se.next(ke), se.complete());
                  },
                  (ke) => se.error(ke)
                ).then(null, ve.h);
              });
            })(he);
          if ((0, Le.D)(he)) return te(he);
          if ((0, xe.T)(he))
            return (function ge(he) {
              return new j.y((se) => {
                for (const ke of he) if ((se.next(ke), se.closed)) return;
                se.complete();
              });
            })(he);
          if ((0, Se.L)(he))
            return (function He(he) {
              return te((0, Se.Q)(he));
            })(he);
        }
        throw (0, oe.z)(he);
      }
      function te(he) {
        return new j.y((se) => {
          (function _e(he, se) {
            var ke, de, W, le;
            return (0, o.mG)(this, void 0, void 0, function* () {
              try {
                for (ke = (0, o.KL)(he); !(de = yield ke.next()).done; )
                  if ((se.next(de.value), se.closed)) return;
              } catch (fe) {
                W = { error: fe };
              } finally {
                try {
                  de && !de.done && (le = ke.return) && (yield le.call(ke));
                } finally {
                  if (W) throw W.error;
                }
              }
              se.complete();
            });
          })(he, se).catch((ke) => se.error(ke));
        });
      }
    },
    5403: (at, $e, S) => {
      'use strict';
      S.d($e, { x: () => P });
      var o = S(930);
      function P(j, pe, Le, oe, xe) {
        return new U(j, pe, Le, oe, xe);
      }
      class U extends o.Lv {
        constructor(pe, Le, oe, xe, Se, Fe) {
          super(pe),
            (this.onFinalize = Se),
            (this.shouldUnsubscribe = Fe),
            (this._next = Le
              ? function (ve) {
                  try {
                    Le(ve);
                  } catch (be) {
                    pe.error(be);
                  }
                }
              : super._next),
            (this._error = xe
              ? function (ve) {
                  try {
                    xe(ve);
                  } catch (be) {
                    pe.error(be);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = oe
              ? function () {
                  try {
                    oe();
                  } catch (ve) {
                    pe.error(ve);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var pe;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: Le } = this;
            super.unsubscribe(),
              !Le &&
                (null === (pe = this.onFinalize) ||
                  void 0 === pe ||
                  pe.call(this));
          }
        }
      }
    },
    9300: (at, $e, S) => {
      'use strict';
      S.d($e, { h: () => U });
      var o = S(4482),
        P = S(5403);
      function U(j, pe) {
        return (0, o.e)((Le, oe) => {
          let xe = 0;
          Le.subscribe(
            (0, P.x)(oe, (Se) => j.call(pe, Se, xe++) && oe.next(Se))
          );
        });
      }
    },
    4004: (at, $e, S) => {
      'use strict';
      S.d($e, { U: () => U });
      var o = S(4482),
        P = S(5403);
      function U(j, pe) {
        return (0, o.e)((Le, oe) => {
          let xe = 0;
          Le.subscribe(
            (0, P.x)(oe, (Se) => {
              oe.next(j.call(pe, Se, xe++));
            })
          );
        });
      }
    },
    8189: (at, $e, S) => {
      'use strict';
      S.d($e, { J: () => U });
      var o = S(5577),
        P = S(4671);
      function U(j = 1 / 0) {
        return (0, o.z)(P.y, j);
      }
    },
    5577: (at, $e, S) => {
      'use strict';
      S.d($e, { z: () => xe });
      var o = S(4004),
        P = S(8421),
        U = S(4482),
        j = S(9672),
        pe = S(5403),
        oe = S(576);
      function xe(Se, Fe, ve = 1 / 0) {
        return (0, oe.m)(Fe)
          ? xe(
              (be, ue) =>
                (0, o.U)((ne, me) => Fe(be, ne, ue, me))((0, P.Xf)(Se(be, ue))),
              ve
            )
          : ('number' == typeof Fe && (ve = Fe),
            (0, U.e)((be, ue) =>
              (function Le(Se, Fe, ve, be, ue, ne, me, Be) {
                const ge = [];
                let te = 0,
                  He = 0,
                  _e = !1;
                const he = () => {
                    _e && !ge.length && !te && Fe.complete();
                  },
                  se = (de) => (te < be ? ke(de) : ge.push(de)),
                  ke = (de) => {
                    ne && Fe.next(de), te++;
                    let W = !1;
                    (0, P.Xf)(ve(de, He++)).subscribe(
                      (0, pe.x)(
                        Fe,
                        (le) => {
                          ue?.(le), ne ? se(le) : Fe.next(le);
                        },
                        () => {
                          W = !0;
                        },
                        void 0,
                        () => {
                          if (W)
                            try {
                              for (te--; ge.length && te < be; ) {
                                const le = ge.shift();
                                me ? (0, j.f)(Fe, me, () => ke(le)) : ke(le);
                              }
                              he();
                            } catch (le) {
                              Fe.error(le);
                            }
                        }
                      )
                    );
                  };
                return (
                  Se.subscribe(
                    (0, pe.x)(Fe, se, () => {
                      (_e = !0), he();
                    })
                  ),
                  () => {
                    Be?.();
                  }
                );
              })(be, ue, Se, ve)
            ));
      }
    },
    3900: (at, $e, S) => {
      'use strict';
      S.d($e, { w: () => j });
      var o = S(8421),
        P = S(4482),
        U = S(5403);
      function j(pe, Le) {
        return (0, P.e)((oe, xe) => {
          let Se = null,
            Fe = 0,
            ve = !1;
          const be = () => ve && !Se && xe.complete();
          oe.subscribe(
            (0, U.x)(
              xe,
              (ue) => {
                Se?.unsubscribe();
                let ne = 0;
                const me = Fe++;
                (0, o.Xf)(pe(ue, me)).subscribe(
                  (Se = (0, U.x)(
                    xe,
                    (Be) => xe.next(Le ? Le(ue, Be, me, ne++) : Be),
                    () => {
                      (Se = null), be();
                    }
                  ))
                );
              },
              () => {
                (ve = !0), be();
              }
            )
          );
        });
      }
    },
    5698: (at, $e, S) => {
      'use strict';
      S.d($e, { q: () => j });
      var o = S(515),
        P = S(4482),
        U = S(5403);
      function j(pe) {
        return pe <= 0
          ? () => o.E
          : (0, P.e)((Le, oe) => {
              let xe = 0;
              Le.subscribe(
                (0, U.x)(oe, (Se) => {
                  ++xe <= pe && (oe.next(Se), pe <= xe && oe.complete());
                })
              );
            });
      }
    },
    8505: (at, $e, S) => {
      'use strict';
      S.d($e, { b: () => pe });
      var o = S(576),
        P = S(4482),
        U = S(5403),
        j = S(4671);
      function pe(Le, oe, xe) {
        const Se =
          (0, o.m)(Le) || oe || xe ? { next: Le, error: oe, complete: xe } : Le;
        return Se
          ? (0, P.e)((Fe, ve) => {
              var be;
              null === (be = Se.subscribe) || void 0 === be || be.call(Se);
              let ue = !0;
              Fe.subscribe(
                (0, U.x)(
                  ve,
                  (ne) => {
                    var me;
                    null === (me = Se.next) || void 0 === me || me.call(Se, ne),
                      ve.next(ne);
                  },
                  () => {
                    var ne;
                    (ue = !1),
                      null === (ne = Se.complete) ||
                        void 0 === ne ||
                        ne.call(Se),
                      ve.complete();
                  },
                  (ne) => {
                    var me;
                    (ue = !1),
                      null === (me = Se.error) ||
                        void 0 === me ||
                        me.call(Se, ne),
                      ve.error(ne);
                  },
                  () => {
                    var ne, me;
                    ue &&
                      (null === (ne = Se.unsubscribe) ||
                        void 0 === ne ||
                        ne.call(Se)),
                      null === (me = Se.finalize) ||
                        void 0 === me ||
                        me.call(Se);
                  }
                )
              );
            })
          : j.y;
      }
    },
    3410: (at, $e, S) => {
      'use strict';
      S.d($e, { z: () => o });
      const o = {
        setTimeout(P, U, ...j) {
          const { delegate: pe } = o;
          return pe?.setTimeout
            ? pe.setTimeout(P, U, ...j)
            : setTimeout(P, U, ...j);
        },
        clearTimeout(P) {
          const { delegate: U } = o;
          return (U?.clearTimeout || clearTimeout)(P);
        },
        delegate: void 0,
      };
    },
    2202: (at, $e, S) => {
      'use strict';
      S.d($e, { h: () => P });
      const P = (function o() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      })();
    },
    8822: (at, $e, S) => {
      'use strict';
      S.d($e, { L: () => o });
      const o =
        ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    },
    7669: (at, $e, S) => {
      'use strict';
      S.d($e, { _6: () => Le, jO: () => j, yG: () => pe });
      var o = S(576);
      function U(oe) {
        return oe[oe.length - 1];
      }
      function j(oe) {
        return (0, o.m)(U(oe)) ? oe.pop() : void 0;
      }
      function pe(oe) {
        return (function P(oe) {
          return oe && (0, o.m)(oe.schedule);
        })(U(oe))
          ? oe.pop()
          : void 0;
      }
      function Le(oe, xe) {
        return 'number' == typeof U(oe) ? oe.pop() : xe;
      }
    },
    4742: (at, $e, S) => {
      'use strict';
      S.d($e, { D: () => pe });
      const { isArray: o } = Array,
        { getPrototypeOf: P, prototype: U, keys: j } = Object;
      function pe(oe) {
        if (1 === oe.length) {
          const xe = oe[0];
          if (o(xe)) return { args: xe, keys: null };
          if (
            (function Le(oe) {
              return oe && 'object' == typeof oe && P(oe) === U;
            })(xe)
          ) {
            const Se = j(xe);
            return { args: Se.map((Fe) => xe[Fe]), keys: Se };
          }
        }
        return { args: oe, keys: null };
      }
    },
    8737: (at, $e, S) => {
      'use strict';
      function o(P, U) {
        if (P) {
          const j = P.indexOf(U);
          0 <= j && P.splice(j, 1);
        }
      }
      S.d($e, { P: () => o });
    },
    3888: (at, $e, S) => {
      'use strict';
      function o(P) {
        const j = P((pe) => {
          Error.call(pe), (pe.stack = new Error().stack);
        });
        return (
          (j.prototype = Object.create(Error.prototype)),
          (j.prototype.constructor = j),
          j
        );
      }
      S.d($e, { d: () => o });
    },
    1810: (at, $e, S) => {
      'use strict';
      function o(P, U) {
        return P.reduce((j, pe, Le) => ((j[pe] = U[Le]), j), {});
      }
      S.d($e, { n: () => o });
    },
    2806: (at, $e, S) => {
      'use strict';
      S.d($e, { O: () => j, x: () => U });
      var o = S(2416);
      let P = null;
      function U(pe) {
        if (o.v.useDeprecatedSynchronousErrorHandling) {
          const Le = !P;
          if ((Le && (P = { errorThrown: !1, error: null }), pe(), Le)) {
            const { errorThrown: oe, error: xe } = P;
            if (((P = null), oe)) throw xe;
          }
        } else pe();
      }
      function j(pe) {
        o.v.useDeprecatedSynchronousErrorHandling &&
          P &&
          ((P.errorThrown = !0), (P.error = pe));
      }
    },
    9672: (at, $e, S) => {
      'use strict';
      function o(P, U, j, pe = 0, Le = !1) {
        const oe = U.schedule(function () {
          j(), Le ? P.add(this.schedule(null, pe)) : this.unsubscribe();
        }, pe);
        if ((P.add(oe), !Le)) return oe;
      }
      S.d($e, { f: () => o });
    },
    4671: (at, $e, S) => {
      'use strict';
      function o(P) {
        return P;
      }
      S.d($e, { y: () => o });
    },
    1144: (at, $e, S) => {
      'use strict';
      S.d($e, { z: () => o });
      const o = (P) =>
        P && 'number' == typeof P.length && 'function' != typeof P;
    },
    2206: (at, $e, S) => {
      'use strict';
      S.d($e, { D: () => P });
      var o = S(576);
      function P(U) {
        return Symbol.asyncIterator && (0, o.m)(U?.[Symbol.asyncIterator]);
      }
    },
    576: (at, $e, S) => {
      'use strict';
      function o(P) {
        return 'function' == typeof P;
      }
      S.d($e, { m: () => o });
    },
    3670: (at, $e, S) => {
      'use strict';
      S.d($e, { c: () => U });
      var o = S(8822),
        P = S(576);
      function U(j) {
        return (0, P.m)(j[o.L]);
      }
    },
    6495: (at, $e, S) => {
      'use strict';
      S.d($e, { T: () => U });
      var o = S(2202),
        P = S(576);
      function U(j) {
        return (0, P.m)(j?.[o.h]);
      }
    },
    8239: (at, $e, S) => {
      'use strict';
      S.d($e, { t: () => P });
      var o = S(576);
      function P(U) {
        return (0, o.m)(U?.then);
      }
    },
    3260: (at, $e, S) => {
      'use strict';
      S.d($e, { L: () => j, Q: () => U });
      var o = S(655),
        P = S(576);
      function U(pe) {
        return (0, o.FC)(this, arguments, function* () {
          const oe = pe.getReader();
          try {
            for (;;) {
              const { value: xe, done: Se } = yield (0, o.qq)(oe.read());
              if (Se) return yield (0, o.qq)(void 0);
              yield yield (0, o.qq)(xe);
            }
          } finally {
            oe.releaseLock();
          }
        });
      }
      function j(pe) {
        return (0, P.m)(pe?.getReader);
      }
    },
    4482: (at, $e, S) => {
      'use strict';
      S.d($e, { A: () => P, e: () => U });
      var o = S(576);
      function P(j) {
        return (0, o.m)(j?.lift);
      }
      function U(j) {
        return (pe) => {
          if (P(pe))
            return pe.lift(function (Le) {
              try {
                return j(Le, this);
              } catch (oe) {
                this.error(oe);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
    },
    3268: (at, $e, S) => {
      'use strict';
      S.d($e, { Z: () => j });
      var o = S(4004);
      const { isArray: P } = Array;
      function j(pe) {
        return (0, o.U)((Le) =>
          (function U(pe, Le) {
            return P(Le) ? pe(...Le) : pe(Le);
          })(pe, Le)
        );
      }
    },
    5032: (at, $e, S) => {
      'use strict';
      function o() {}
      S.d($e, { Z: () => o });
    },
    9635: (at, $e, S) => {
      'use strict';
      S.d($e, { U: () => U, z: () => P });
      var o = S(4671);
      function P(...j) {
        return U(j);
      }
      function U(j) {
        return 0 === j.length
          ? o.y
          : 1 === j.length
          ? j[0]
          : function (Le) {
              return j.reduce((oe, xe) => xe(oe), Le);
            };
      }
    },
    7849: (at, $e, S) => {
      'use strict';
      S.d($e, { h: () => U });
      var o = S(2416),
        P = S(3410);
      function U(j) {
        P.z.setTimeout(() => {
          const { onUnhandledError: pe } = o.v;
          if (!pe) throw j;
          pe(j);
        });
      }
    },
    4532: (at, $e, S) => {
      'use strict';
      function o(P) {
        return new TypeError(
          `You provided ${
            null !== P && 'object' == typeof P ? 'an invalid object' : `'${P}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      S.d($e, { z: () => o });
    },
    863: (at, $e, S) => {
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
      function P(U) {
        if (!S.o(o, U))
          return Promise.resolve().then(() => {
            var Le = new Error("Cannot find module '" + U + "'");
            throw ((Le.code = 'MODULE_NOT_FOUND'), Le);
          });
        var j = o[U],
          pe = j[0];
        return Promise.all(j.slice(1).map(S.e)).then(() => S(pe));
      }
      (P.keys = () => Object.keys(o)), (P.id = 863), (at.exports = P);
    },
    655: (at, $e, S) => {
      'use strict';
      function pe(k, B, Y, G) {
        var X,
          Ie = arguments.length,
          ie =
            Ie < 3
              ? B
              : null === G
              ? (G = Object.getOwnPropertyDescriptor(B, Y))
              : G;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          ie = Reflect.decorate(k, B, Y, G);
        else
          for (var L = k.length - 1; L >= 0; L--)
            (X = k[L]) &&
              (ie = (Ie < 3 ? X(ie) : Ie > 3 ? X(B, Y, ie) : X(B, Y)) || ie);
        return Ie > 3 && ie && Object.defineProperty(B, Y, ie), ie;
      }
      function xe(k, B, Y, G) {
        return new (Y || (Y = Promise))(function (ie, X) {
          function L(Re) {
            try {
              q(G.next(Re));
            } catch (Pe) {
              X(Pe);
            }
          }
          function K(Re) {
            try {
              q(G.throw(Re));
            } catch (Pe) {
              X(Pe);
            }
          }
          function q(Re) {
            Re.done
              ? ie(Re.value)
              : (function Ie(ie) {
                  return ie instanceof Y
                    ? ie
                    : new Y(function (X) {
                        X(ie);
                      });
                })(Re.value).then(L, K);
          }
          q((G = G.apply(k, B || [])).next());
        });
      }
      function ge(k) {
        return this instanceof ge ? ((this.v = k), this) : new ge(k);
      }
      function te(k, B, Y) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var Ie,
          G = Y.apply(k, B || []),
          ie = [];
        return (
          (Ie = {}),
          X('next'),
          X('throw'),
          X('return'),
          (Ie[Symbol.asyncIterator] = function () {
            return this;
          }),
          Ie
        );
        function X(ye) {
          G[ye] &&
            (Ie[ye] = function (Ae) {
              return new Promise(function (We, nt) {
                ie.push([ye, Ae, We, nt]) > 1 || L(ye, Ae);
              });
            });
        }
        function L(ye, Ae) {
          try {
            !(function K(ye) {
              ye.value instanceof ge
                ? Promise.resolve(ye.value.v).then(q, Re)
                : Pe(ie[0][2], ye);
            })(G[ye](Ae));
          } catch (We) {
            Pe(ie[0][3], We);
          }
        }
        function q(ye) {
          L('next', ye);
        }
        function Re(ye) {
          L('throw', ye);
        }
        function Pe(ye, Ae) {
          ye(Ae), ie.shift(), ie.length && L(ie[0][0], ie[0][1]);
        }
      }
      function _e(k) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var Y,
          B = k[Symbol.asyncIterator];
        return B
          ? B.call(k)
          : ((k = (function be(k) {
              var B = 'function' == typeof Symbol && Symbol.iterator,
                Y = B && k[B],
                G = 0;
              if (Y) return Y.call(k);
              if (k && 'number' == typeof k.length)
                return {
                  next: function () {
                    return (
                      k && G >= k.length && (k = void 0),
                      { value: k && k[G++], done: !k }
                    );
                  },
                };
              throw new TypeError(
                B
                  ? 'Object is not iterable.'
                  : 'Symbol.iterator is not defined.'
              );
            })(k)),
            (Y = {}),
            G('next'),
            G('throw'),
            G('return'),
            (Y[Symbol.asyncIterator] = function () {
              return this;
            }),
            Y);
        function G(ie) {
          Y[ie] =
            k[ie] &&
            function (X) {
              return new Promise(function (L, K) {
                !(function Ie(ie, X, L, K) {
                  Promise.resolve(K).then(function (q) {
                    ie({ value: q, done: L });
                  }, X);
                })(L, K, (X = k[ie](X)).done, X.value);
              });
            };
        }
      }
      S.d($e, {
        FC: () => te,
        KL: () => _e,
        gn: () => pe,
        mG: () => xe,
        qq: () => ge,
      });
    },
    6895: (at, $e, S) => {
      'use strict';
      S.d($e, {
        Do: () => He,
        ED: () => ae,
        EM: () => Po,
        HT: () => j,
        JF: () => vr,
        K0: () => Le,
        Mx: () => Cr,
        O5: () => $,
        Ov: () => Zn,
        RF: () => N,
        S$: () => Be,
        V_: () => Se,
        Ye: () => _e,
        b0: () => te,
        bD: () => to,
        ez: () => eo,
        n9: () => ee,
        q: () => U,
        sg: () => en,
        tP: () => et,
        w_: () => pe,
      });
      var o = S(8256);
      let P = null;
      function U() {
        return P;
      }
      function j(m) {
        P || (P = m);
      }
      class pe {}
      const Le = new o.OlP('DocumentToken');
      let oe = (() => {
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
              return (function xe() {
                return (0, o.LFG)(Fe);
              })();
            },
            providedIn: 'platform',
          })),
          m
        );
      })();
      const Se = new o.OlP('Location Initialized');
      let Fe = (() => {
        class m extends oe {
          constructor(v) {
            super(), (this._doc = v), this._init();
          }
          _init() {
            (this.location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return U().getBaseHref(this._doc);
          }
          onPopState(v) {
            const O = U().getGlobalEventTarget(this._doc, 'window');
            return (
              O.addEventListener('popstate', v, !1),
              () => O.removeEventListener('popstate', v)
            );
          }
          onHashChange(v) {
            const O = U().getGlobalEventTarget(this._doc, 'window');
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
          pushState(v, O, Z) {
            ve() ? this._history.pushState(v, O, Z) : (this.location.hash = Z);
          }
          replaceState(v, O, Z) {
            ve()
              ? this._history.replaceState(v, O, Z)
              : (this.location.hash = Z);
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
            return new (v || m)(o.LFG(Le));
          }),
          (m.ɵprov = o.Yz7({
            token: m,
            factory: function () {
              return (function be() {
                return new Fe((0, o.LFG)(Le));
              })();
            },
            providedIn: 'platform',
          })),
          m
        );
      })();
      function ve() {
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
      function ne(m) {
        const w = m.match(/#|\?|$/),
          v = (w && w.index) || m.length;
        return m.slice(0, v - ('/' === m[v - 1] ? 1 : 0)) + m.slice(v);
      }
      function me(m) {
        return m && '?' !== m[0] ? '?' + m : m;
      }
      let Be = (() => {
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
              return (0, o.f3M)(te);
            },
            providedIn: 'root',
          })),
          m
        );
      })();
      const ge = new o.OlP('appBaseHref');
      let te = (() => {
          class m extends Be {
            constructor(v, O) {
              super(),
                (this._platformLocation = v),
                (this._removeListenerFns = []),
                (this._baseHref =
                  O ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  (0, o.f3M)(Le).location?.origin ??
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
                  me(this._platformLocation.search),
                Z = this._platformLocation.hash;
              return Z && v ? `${O}${Z}` : O;
            }
            pushState(v, O, Z, Ne) {
              const je = this.prepareExternalUrl(Z + me(Ne));
              this._platformLocation.pushState(v, O, je);
            }
            replaceState(v, O, Z, Ne) {
              const je = this.prepareExternalUrl(Z + me(Ne));
              this._platformLocation.replaceState(v, O, je);
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
              return new (v || m)(o.LFG(oe), o.LFG(ge, 8));
            }),
            (m.ɵprov = o.Yz7({
              token: m,
              factory: m.ɵfac,
              providedIn: 'root',
            })),
            m
          );
        })(),
        He = (() => {
          class m extends Be {
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
            pushState(v, O, Z, Ne) {
              let je = this.prepareExternalUrl(Z + me(Ne));
              0 == je.length && (je = this._platformLocation.pathname),
                this._platformLocation.pushState(v, O, je);
            }
            replaceState(v, O, Z, Ne) {
              let je = this.prepareExternalUrl(Z + me(Ne));
              0 == je.length && (je = this._platformLocation.pathname),
                this._platformLocation.replaceState(v, O, je);
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
              return new (v || m)(o.LFG(oe), o.LFG(ge, 8));
            }),
            (m.ɵprov = o.Yz7({ token: m, factory: m.ɵfac })),
            m
          );
        })(),
        _e = (() => {
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
              })(ne(ke(O)))),
                this._locationStrategy.onPopState((Z) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: Z.state,
                    type: Z.type,
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
              return this.path() == this.normalize(v + me(O));
            }
            normalize(v) {
              return m.stripTrailingSlash(
                (function se(m, w) {
                  return m && w.startsWith(m) ? w.substring(m.length) : w;
                })(this._basePath, ke(v))
              );
            }
            prepareExternalUrl(v) {
              return (
                v && '/' !== v[0] && (v = '/' + v),
                this._locationStrategy.prepareExternalUrl(v)
              );
            }
            go(v, O = '', Z = null) {
              this._locationStrategy.pushState(Z, '', v, O),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(v + me(O)),
                  Z
                );
            }
            replaceState(v, O = '', Z = null) {
              this._locationStrategy.replaceState(Z, '', v, O),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(v + me(O)),
                  Z
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
              this._urlChangeListeners.forEach((Z) => Z(v, O));
            }
            subscribe(v, O, Z) {
              return this._subject.subscribe({
                next: v,
                error: O,
                complete: Z,
              });
            }
          }
          return (
            (m.normalizeQueryParams = me),
            (m.joinWithSlash = ue),
            (m.stripTrailingSlash = ne),
            (m.ɵfac = function (v) {
              return new (v || m)(o.LFG(Be));
            }),
            (m.ɵprov = o.Yz7({
              token: m,
              factory: function () {
                return (function he() {
                  return new _e((0, o.LFG)(Be));
                })();
              },
              providedIn: 'root',
            })),
            m
          );
        })();
      function ke(m) {
        return m.replace(/\/index.html$/, '');
      }
      function Cr(m, w) {
        w = encodeURIComponent(w);
        for (const v of m.split(';')) {
          const O = v.indexOf('='),
            [Z, Ne] = -1 == O ? [v, ''] : [v.slice(0, O), v.slice(O + 1)];
          if (Z.trim() === w) return decodeURIComponent(Ne);
        }
        return null;
      }
      class mn {
        constructor(w, v, O, Z) {
          (this.$implicit = w),
            (this.ngForOf = v),
            (this.index = O),
            (this.count = Z);
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
          constructor(v, O, Z) {
            (this._viewContainer = v),
              (this._template = O),
              (this._differs = Z),
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
            v.forEachOperation((Z, Ne, je) => {
              if (null == Z.previousIndex)
                O.createEmbeddedView(
                  this._template,
                  new mn(Z.item, this._ngForOf, -1, -1),
                  null === je ? void 0 : je
                );
              else if (null == je) O.remove(null === Ne ? void 0 : Ne);
              else if (null !== Ne) {
                const gt = O.get(Ne);
                O.move(gt, je), Rn(gt, Z);
              }
            });
            for (let Z = 0, Ne = O.length; Z < Ne; Z++) {
              const gt = O.get(Z).context;
              (gt.index = Z), (gt.count = Ne), (gt.ngForOf = this._ngForOf);
            }
            v.forEachIdentityChange((Z) => {
              Rn(O.get(Z.currentIndex), Z);
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
              (this._context = new H()),
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
            Q('ngIfThen', v),
              (this._thenTemplateRef = v),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(v) {
            Q('ngIfElse', v),
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
      class H {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function Q(m, w) {
        if (w && !w.createEmbeddedView)
          throw new Error(
            `${m} must be a TemplateRef, but received '${(0, o.AaK)(w)}'.`
          );
      }
      class De {
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
      let N = (() => {
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
        ee = (() => {
          class m {
            constructor(v, O, Z) {
              (this.ngSwitch = Z), Z._addCase(), (this._view = new De(v, O));
            }
            ngDoCheck() {
              this._view.enforceState(
                this.ngSwitch._matchCase(this.ngSwitchCase)
              );
            }
          }
          return (
            (m.ɵfac = function (v) {
              return new (v || m)(o.Y36(o.s_b), o.Y36(o.Rgc), o.Y36(N, 9));
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
        ae = (() => {
          class m {
            constructor(v, O, Z) {
              Z._addDefault(new De(v, O));
            }
          }
          return (
            (m.ɵfac = function (v) {
              return new (v || m)(o.Y36(o.s_b), o.Y36(o.Rgc), o.Y36(N, 9));
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
                    ngTemplateOutlet: Z,
                    ngTemplateOutletContext: Ne,
                    ngTemplateOutletInjector: je,
                  } = this;
                  this._viewRef = O.createEmbeddedView(
                    Z,
                    Ne,
                    je ? { injector: je } : void 0
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
            factory: () => new Do((0, o.LFG)(Le), window),
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
              let Z = O.currentNode;
              for (; Z; ) {
                const Ne = Z.shadowRoot;
                if (Ne) {
                  const je =
                    Ne.getElementById(w) || Ne.querySelector(`[name="${w}"]`);
                  if (je) return je;
                }
                Z = O.nextNode();
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
            Z = v.top + this.window.pageYOffset,
            Ne = this.offset();
          this.window.scrollTo(O - Ne[0], Z - Ne[1]);
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
    8256: (at, $e, S) => {
      'use strict';
      S.d($e, {
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
        Gpc: () => He,
        RIp: () => Sd,
        f3M: () => An,
        MR2: () => Qm,
        c2e: () => WC,
        zSh: () => Ql,
        wAp: () => It,
        vHH: () => W,
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
        AaK: () => Be,
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
        CHM: () => we,
        LSH: () => Wl,
        P3R: () => Ed,
        YNc: () => Pf,
        W1O: () => Bp,
        _uU: () => gh,
        Oqu: () => $c,
        Gf: () => Fp,
      });
      var o = S(7579),
        P = S(727),
        U = S(9751),
        j = S(8189),
        pe = S(8421),
        Le = S(515),
        oe = S(7669),
        xe = S(2076),
        Fe = S(930),
        ve = S(4482);
      function ue(e, t, ...n) {
        if (!0 === t) return void e();
        if (!1 === t) return;
        const r = new Fe.Hp({
          next: () => {
            r.unsubscribe(), e();
          },
        });
        return t(...n).subscribe(r);
      }
      function ne(e) {
        for (let t in e) if (e[t] === ne) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function me(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function Be(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(Be).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      function ge(e, t) {
        return null == e || '' === e
          ? null === t
            ? ''
            : t
          : null == t || '' === t
          ? e
          : e + ' ' + t;
      }
      const te = ne({ __forward_ref__: ne });
      function He(e) {
        return (
          (e.__forward_ref__ = He),
          (e.toString = function () {
            return Be(this());
          }),
          e
        );
      }
      function _e(e) {
        return he(e) ? e() : e;
      }
      function he(e) {
        return (
          'function' == typeof e &&
          e.hasOwnProperty(te) &&
          e.__forward_ref__ === He
        );
      }
      function se(e) {
        return e && !!e.ɵproviders;
      }
      const de = 'https://g.co/ng/security#xss';
      class W extends Error {
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
      function Ie(e, t) {
        throw new W(-201, !1);
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
      const Jt = ne({ ɵprov: ne }),
        $n = ne({ ɵinj: ne }),
        Ut = ne({ ngInjectableDef: ne }),
        ct = ne({ ngInjectorDef: ne });
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
          : void Ie(Be(e));
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
        if (void 0 === jt) throw new W(-203, !1);
        return null === jt
          ? un(e, void 0, t)
          : jt.get(e, t & qe.Optional ? null : void 0, t);
      }
      function Dt(e, t = qe.Default) {
        return (
          (function Yt() {
            return Vt;
          })() || sn
        )(_e(e), t);
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
          const r = _e(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new W(900, !1);
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
      function J(e) {
        return { toString: e }.toString();
      }
      var z = (() => (
          ((z = z || {})[(z.OnPush = 0)] = 'OnPush'),
          (z[(z.Default = 1)] = 'Default'),
          z
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
        Zt = ne({ ɵcmp: ne }),
        an = ne({ ɵdir: ne }),
        ln = ne({ ɵpipe: ne }),
        ir = ne({ ɵmod: ne }),
        Tn = ne({ ɵfac: ne }),
        pn = ne({ __NG_ELEMENT_ID__: ne });
      let On = 0;
      function Sn(e) {
        return J(() => {
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
              onPush: e.changeDetection === z.OnPush,
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
        return J(() => ({
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
          throw new Error(`Type ${Be(e)} does not have '\u0275mod' property.`);
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
      function we(e) {
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
        Ie();
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
            Ie();
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
              const V = ml(h, t, n, u, r, I);
              if (V !== fo) return V;
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
          re = i ? h + R : e.directiveEnd;
        for (let Ce = r ? h : h + R; Ce < re; Ce++) {
          const Ue = u[Ce];
          if ((Ce < y && n === Ue) || (Ce >= y && Ue.type === n)) return Ce;
        }
        if (i) {
          const Ce = u[y];
          if (Ce && Mn(Ce) && Ce.type === n) return y;
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
            (function B(e, t) {
              const n = t ? `. Dependency path: ${t.join(' > ')} > ${e}` : '';
              throw new W(
                -200,
                `Circular dependency in DI detected for ${e}${n}`
              );
            })(
              (function k(e) {
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
        return J(() => {
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
        return he(e)
          ? () => {
              const t = Ia(_e(e));
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
        return J(() => {
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
              const V = y.hasOwnProperty(pi)
                ? y[pi]
                : Object.defineProperty(y, pi, { value: [] })[pi];
              for (; V.length <= R; ) V.push(null);
              return (V[R] = V[R] || []).push(u), y;
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
      function F(e, t) {
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
        throw new W(904, !1);
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
            const r = new Error(`NullInjectorError: No provider for ${Be(t)}!`);
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
        if (!(e = _e(e))) return !1;
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
          se(n) && (n = n.ɵproviders), Array.isArray(n) ? Kl(n, t) : t(n);
      }
      const Jm = ne({ provide: String, useValue: ne });
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
              if (((u[Gn] = u[Gn] || []).unshift(Be(t)), i)) throw u;
              return (function dr(e, t, n, r) {
                const i = e[Gn];
                throw (
                  (t[rr] && i.unshift(t[rr]),
                  (e.message = (function Ee(e, t, n, r = null) {
                    e =
                      e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let i = Be(t);
                    if (Array.isArray(t)) i = t.map(Be).join(' -> ');
                    else if ('object' == typeof t) {
                      let s = [];
                      for (let u in t)
                        if (t.hasOwnProperty(u)) {
                          let h = t[u];
                          s.push(
                            u +
                              ':' +
                              ('string' == typeof h ? JSON.stringify(h) : Be(h))
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
          for (const r of n.keys()) t.push(Be(r));
          return `R3Injector[${t.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new W(205, !1);
        }
        processProvider(t) {
          let n = Oi((t = _e(t))) ? t : _e(t && t.provide);
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
          const n = _e(t.providedIn);
          return 'string' == typeof n
            ? 'any' === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
      }
      function ec(e) {
        const t = st(e),
          n = null !== t ? t.factory : cr(e);
        if (null !== n) return n;
        if (e instanceof Cn) throw new W(204, !1);
        if (e instanceof Function)
          return (function nv(e) {
            const t = e.length;
            if (t > 0) throw (F(t, '?'), new W(204, !1));
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
        throw new W(204, !1);
      }
      function xd(e, t, n) {
        let r;
        if (Oi(e)) {
          const i = _e(e);
          return cr(i) || ec(i);
        }
        if (Zl(e)) r = () => _e(e.useValue);
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
          r = () => Dt(_e(e.useExisting));
        else {
          const i = _e(e && (e.useClass || e.provide));
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
          Array.isArray(n) ? tc(n, t) : n && se(n) ? tc(n.ɵproviders, t) : t(n);
      }
      class av {}
      class Fd {}
      class cv {
        resolveComponentFactory(t) {
          throw (function lv(e) {
            const t = Error(
              `No component factory found for ${Be(
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
                const V = Tv(8 & r ? 'class' : y, i, Vd(e), n);
                if (-1 === V) {
                  if (Mo(r)) return !1;
                  u = !0;
                  continue;
                }
                if ('' !== I) {
                  let re;
                  re = V > s ? '' : i[V + 1].toLowerCase();
                  const Ce = 8 & r ? re : null;
                  if ((Ce && -1 !== $d(Ce, I, 0)) || (2 & r && I !== re)) {
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
          (r = r || ('object' == typeof e ? void 0 : Be(e))),
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
        return null === n ? Dt(e, t) : _a(Qe(), n, _e(e), t);
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
        const V = t.blueprint.slice();
        return (
          (V[0] = i),
          (V[2] = 76 | r),
          (null !== R || (e && 1024 & e[2])) && (V[2] |= 1024),
          lo(V),
          (V[3] = V[15] = e),
          (V[8] = n),
          (V[10] = u || (e && e[10])),
          (V[11] = h || (e && e[11])),
          (V[12] = y || (e && e[12]) || null),
          (V[9] = I || (e && e[9]) || null),
          (V[6] = s),
          (V[20] = (function Jg() {
            return Qg++;
          })()),
          (V[21] = R),
          (V[16] = 2 == t.type ? e[16] : V),
          V
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
          V = R + i,
          re = (function oy(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : Rt);
            return n;
          })(R, V),
          Ce = 'function' == typeof I ? I() : I;
        return (re[1] = {
          type: e,
          blueprint: re,
          template: n,
          queries: null,
          viewQuery: h,
          declTNode: t,
          data: re.slice().fill(null, R),
          bindingStartIndex: R,
          expandoStartIndex: V,
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
          consts: Ce,
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
                    if (null == s) throw new W(-301, !1);
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
          const V = R.type.prototype;
          !u &&
            (V.ngOnChanges || V.ngOnInit || V.ngDoCheck) &&
            ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
            (u = !0)),
            !h &&
              (V.ngOnChanges || V.ngDoCheck) &&
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
            const V = s[R],
              re = n ? n.get(V) : null,
              Ue = re ? re.outputs : null;
            (y = cf(V.inputs, R, y, re ? re.inputs : null)),
              (I = cf(V.outputs, R, I, Ue));
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
              V = u[y++];
            null !== h ? r.setInput(n, V, I, R) : (n[R] = V);
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
              ? (i = ge(i, h))
              : 2 == s && (r = ge(r, h + ': ' + t[++u] + ';'));
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
          if (this._appRef) throw new W(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function pm(e, t) {
              Us(e, t, t[11], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new W(902, !1);
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
          if (null === h) throw new W(407, !1);
          const y = u.get(pv, null),
            I = h.createRenderer(null, this.componentDef),
            R = this.componentDef.selectors[0][0] || 'div',
            V = r
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
            re = this.componentDef.onPush ? 288 : 272,
            Ce = pc(0, null, null, 1, 0, null, null, null, null, null),
            Ue = Va(null, Ce, null, re, null, null, h, I, y, u, null);
          let Ze, it;
          Ii(Ue);
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
              })(Ue, V),
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
              })(Ot, V, dt, _t, Ue, h, I);
            (it = ao(Ce, 22)),
              V &&
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
                })(I, dt, V, r),
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
              })(Nn, dt, _t, Xe, Ue, [ky])),
              uc(Ce, Ue, null);
          } finally {
            Bi();
          }
          return new Oy(this.componentType, Ze, Ki(it, Ue), Ue, it);
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
            if (t.ɵcmp) throw new W(903, !1);
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
                me(e.inputs, i.inputs),
                me(e.declaredInputs, i.declaredInputs),
                me(e.outputs, i.outputs),
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
          V = I.firstCreatePass
            ? (function Zy(e, t, n, r, i, s, u, h, y) {
                const I = t.consts,
                  R = es(t, e, 4, u || null, Vr(I, h));
                gc(t, n, R, Vr(I, y)), Bt(t, R);
                const V = (R.tViews = pc(
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
                    (V.queries = t.queries.embeddedTView(R))),
                  R
                );
              })(R, I, y, t, n, r, i, s, u)
            : I.data[R];
        qt(V, !1);
        const re = y[11].createComment('');
        xa(I, y, re, V),
          Ir(re, y),
          Ua(y, (y[R] = pf(re, y, re, V))),
          Or(V) && fc(I, y, V),
          null != u && hc(y, V, h);
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
        !(function Me() {
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
              V = gf(t);
            let re = !0;
            if (3 & r.type || u) {
              const Ze = Jn(r, t),
                it = u ? u(Ze) : Ze,
                dt = V.length,
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
                  (re = !1);
              else {
                s = Uf(r, t, R, s, !1);
                const Ot = n.listen(it, i, s);
                V.push(s, Ot), I && I.push(i, _t, dt, dt + 1);
              }
            } else s = Uf(r, t, R, s, !1);
            const Ce = r.outputs;
            let Ue;
            if (re && null !== Ce && (Ue = Ce[i])) {
              const Ze = Ue.length;
              if (Ze)
                for (let it = 0; it < Ze; it += 2) {
                  const Nn = t[Ue[it]][Ue[it + 1]].subscribe(s),
                    Kn = V.length;
                  V.push(s, Nn), I && I.push(i, r.index, Kn, -(Kn + 1));
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
          const r = (t.projection = F(e ? e.length : 1, null)),
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
                        const V = n;
                        (R = V[1]), (null === R || Pr(V, R) > 0) && (I = !0);
                      } else R = n;
                      if (i)
                        if (0 !== y) {
                          const re = vi(e[h + 1]);
                          (e[r + 1] = Qa(re, h)),
                            0 !== re && (e[re + 1] = Pc(e[re + 1], r)),
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
                          : 'object' == typeof e && (e = Be(mi(e)))),
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
            V = null === R;
          let re = n[i + 1];
          re === Rt && (re = V ? vt : void 0);
          let Ce = V ? Pn(re, r) : R === r ? re : void 0;
          if ((I && !Ja(Ce) && (Ce = Pn(y, r)), Ja(Ce) && ((h = Ce), u)))
            return h;
          const Ue = e[i + 1];
          i = u ? vi(Ue) : Ni(Ue);
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
        throw new W(701, !1);
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
        if (((e = _e(e)), Array.isArray(e)))
          for (let s = 0; s < e.length; s++) jc(e[s], t, n, r, i);
        else {
          const s = M(),
            u = g();
          let h = Oi(e) ? e : _e(e.provide),
            y = xd(e);
          const I = Qe(),
            R = 1048575 & I.providerIndexes,
            V = I.directiveStart,
            re = I.providerIndexes >> 20;
          if (Oi(e) || !e.multi) {
            const Ce = new hr(y, i, Ji),
              Ue = zc(h, t, i ? R : R + re, V);
            -1 === Ue
              ? (di(Gi(I, u), s, h),
                Gc(s, e, t.length),
                t.push(h),
                I.directiveStart++,
                I.directiveEnd++,
                i && (I.providerIndexes += 1048576),
                n.push(Ce),
                u.push(Ce))
              : ((n[Ue] = Ce), (u[Ue] = Ce));
          } else {
            const Ce = zc(h, t, R + re, V),
              Ue = zc(h, t, R, R + re),
              Ze = Ce >= 0 && n[Ce],
              it = Ue >= 0 && n[Ue];
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
              !i && it && (n[Ue].providerFactory = dt),
                Gc(s, e, t.length, 0),
                t.push(h),
                I.directiveStart++,
                I.directiveEnd++,
                i && (I.providerIndexes += 1048576),
                n.push(dt),
                u.push(dt);
            } else Gc(s, e, Ce > -1 ? Ce : Ue, lp(n[i ? Ue : Ce], y, !i && r));
            !i && r && it && n[Ue].componentProviders++;
          }
        }
      }
      function Gc(e, t, n, r) {
        const i = Oi(t),
          s = (function ev(e) {
            return !!e.useClass;
          })(t);
        if (i || s) {
          const y = (s ? _e(t.useClass) : t).prototype.ngOnDestroy;
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
              Be(t),
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
          return t instanceof P.w0 && t.add(h), h;
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
              const V = n || {};
              (h = V.index),
                (r = V.injector),
                (i = V.projectableNodes),
                (s = V.environmentInjector || V.ngModuleRef);
            }
            const y = u ? t : new Zs(Tt(t)),
              I = r || this.parentInjector;
            if (!s && null == y.ngModule) {
              const re = (u ? I : this.parentInjector).get(Ri, null);
              re && (s = re);
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
                const V = r[3],
                  re = new Mp(V, V[6], V[3]);
                re.detach(re.indexOf(t));
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
              for (let V = 10; V < R.length; V++) {
                const re = R[V];
                re[17] === re[3] && ru(re[1], re, I, r);
              }
              if (null !== R[9]) {
                const V = R[9];
                for (let re = 0; re < V.length; re++) {
                  const Ce = V[re];
                  ru(Ce[1], Ce, I, r);
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
            throw new W(908, !1);
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
          if (!po.isInAngularZone()) throw new W(909, !1);
        }
        static assertNotInAngularZone() {
          if (po.isInAngularZone()) throw new W(909, !1);
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
              next: (re) => {
                y.handleError(re);
              },
            });
          });
          const R = () => h.destroy(),
            V = i.get(hu);
          return (
            V.add(R),
            h.onDestroy(() => {
              I.unsubscribe(), V.delete(R);
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
              const re = h.get(ll);
              return (
                re.runInitializers(),
                re.donePromise.then(() => {
                  !(function $h(e) {
                    bt(e, 'Expected localeId to be defined'),
                      'string' == typeof e &&
                        (kh = e.toLowerCase().replace(/_/g, '-'));
                  })(h.get(cl, fs) || fs);
                  const Ue = h.get(ul);
                  return void 0 !== t && Ue.bootstrap(t), Ue;
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
            const s = new U.y((h) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    h.next(this._stable), h.complete();
                  });
              }),
              u = new U.y((h) => {
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
            this.isStable = (function Se(...e) {
              const t = (0, oe.yG)(e),
                n = (0, oe._6)(e, 1 / 0),
                r = e;
              return r.length
                ? 1 === r.length
                  ? (0, pe.Xf)(r[0])
                  : (0, j.J)(n)((0, xe.D)(r, t))
                : Le.E;
            })(
              s,
              u.pipe(
                (function be(e = {}) {
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
                      V = !1;
                    const re = () => {
                        h?.unsubscribe(), (h = void 0);
                      },
                      Ce = () => {
                        re(), (u = y = void 0), (R = V = !1);
                      },
                      Ue = () => {
                        const Ze = u;
                        Ce(), Ze?.unsubscribe();
                      };
                    return (0, ve.e)((Ze, it) => {
                      I++, !V && !R && re();
                      const dt = (y = y ?? t());
                      it.add(() => {
                        I--, 0 === I && !V && !R && (h = ue(Ue, i));
                      }),
                        dt.subscribe(it),
                        !u &&
                          I > 0 &&
                          ((u = new Fe.Hp({
                            next: (_t) => dt.next(_t),
                            error: (_t) => {
                              (V = !0), re(), (h = ue(Ce, n, _t)), dt.error(_t);
                            },
                            complete: () => {
                              (R = !0), re(), (h = ue(Ce, r)), dt.complete();
                            },
                          })),
                          (0, pe.Xf)(Ze).subscribe(u));
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
              throw (!i && Rn(n), new W(405, false));
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
              V = I.injector.get(hg, null);
            return (
              V?.registerApplication(R),
              I.onDestroy(() => {
                this.detachView(I.hostView),
                  dl(this.components, I),
                  V?.unregisterApplication(R);
              }),
              this._loadComponent(I),
              I
            );
          }
          tick() {
            if (this._runningTick) throw new W(101, !1);
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
            if (this._destroyed) throw new W(406, !1);
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
                for (let re = 0; re < I; re++) {
                  const Ce = re < s.length ? s[re] : (s[re] = 0),
                    Ue = Ce + re;
                  R <= Ue && Ue < I && (s[re] = Ce + 1);
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
          if ((null == t && (t = []), !Qs(t))) throw new W(900, !1);
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
            if (!(t instanceof Map || Ic(t))) throw new W(900, !1);
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
            throw new W(901, !1);
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
            throw new W(901, !1);
          }
        }
        return (e.ɵprov = Lt({ token: e, providedIn: 'root', factory: Fg })), e;
      })();
      function x_(e) {
        return 'boolean' == typeof e ? e : null != e && 'false' !== e;
      }
    },
    433: (at, $e, S) => {
      'use strict';
      S.d($e, {
        qu: () => Vr,
        u: () => to,
        sg: () => Or,
        u5: () => ao,
        JU: () => me,
        a5: () => cn,
        JJ: () => $n,
        JL: () => Ut,
        UX: () => Wr,
        kI: () => k,
        _Y: () => go,
      });
      var o = S(8256),
        P = S(6895),
        U = S(2076),
        j = S(9751),
        pe = S(4742),
        Le = S(8421),
        oe = S(7669),
        xe = S(5403),
        Se = S(3268),
        Fe = S(1810),
        be = S(4004);
      let ue = (() => {
          class b {
            constructor(D, x) {
              (this._renderer = D),
                (this._elementRef = x),
                (this.onChange = (Me) => {}),
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
        ne = (() => {
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
      const me = new o.OlP('NgValueAccessor'),
        te = { provide: me, useExisting: (0, o.Gpc)(() => he), multi: !0 },
        _e = new o.OlP('CompositionEventMode');
      let he = (() => {
        class b extends ue {
          constructor(D, x, Me) {
            super(D, x),
              (this._compositionMode = Me),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function He() {
                  const b = (0, P.q)() ? (0, P.q)().getUserAgent() : '';
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
            return new (D || b)(o.Y36(o.Qsj), o.Y36(o.SBq), o.Y36(_e, 8));
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
            features: [o._Bn([te]), o.qOj],
          })),
          b
        );
      })();
      function ke(b) {
        return (
          null == b ||
          (('string' == typeof b || Array.isArray(b)) && 0 === b.length)
        );
      }
      function de(b) {
        return null != b && 'number' == typeof b.length;
      }
      const W = new o.OlP('NgValidators'),
        le = new o.OlP('NgAsyncValidators'),
        fe =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class k {
        static min(C) {
          return (function B(b) {
            return (C) => {
              if (ke(C.value) || ke(b)) return null;
              const D = parseFloat(C.value);
              return !isNaN(D) && D < b
                ? { min: { min: b, actual: C.value } }
                : null;
            };
          })(C);
        }
        static max(C) {
          return (function Y(b) {
            return (C) => {
              if (ke(C.value) || ke(b)) return null;
              const D = parseFloat(C.value);
              return !isNaN(D) && D > b
                ? { max: { max: b, actual: C.value } }
                : null;
            };
          })(C);
        }
        static required(C) {
          return (function G(b) {
            return ke(b.value) ? { required: !0 } : null;
          })(C);
        }
        static requiredTrue(C) {
          return (function Ie(b) {
            return !0 === b.value ? null : { required: !0 };
          })(C);
        }
        static email(C) {
          return (function ie(b) {
            return ke(b.value) || fe.test(b.value) ? null : { email: !0 };
          })(C);
        }
        static minLength(C) {
          return (function X(b) {
            return (C) =>
              ke(C.value) || !de(C.value)
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
          return (function L(b) {
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
          return (function K(b) {
            if (!b) return q;
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
                if (ke(x.value)) return null;
                const Me = x.value;
                return C.test(Me)
                  ? null
                  : { pattern: { requiredPattern: D, actualValue: Me } };
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
      function q(b) {
        return null;
      }
      function Re(b) {
        return null != b;
      }
      function Pe(b) {
        return (0, o.QGY)(b) ? (0, U.D)(b) : b;
      }
      function ye(b) {
        let C = {};
        return (
          b.forEach((D) => {
            C = null != D ? { ...C, ...D } : C;
          }),
          0 === Object.keys(C).length ? null : C
        );
      }
      function Ae(b, C) {
        return C.map((D) => D(b));
      }
      function nt(b) {
        return b.map((C) =>
          (function We(b) {
            return !b.validate;
          })(C)
            ? C
            : (D) => C.validate(D)
        );
      }
      function Ke(b) {
        if (!b) return null;
        const C = b.filter(Re);
        return 0 == C.length
          ? null
          : function (D) {
              return ye(Ae(D, C));
            };
      }
      function ft(b) {
        return null != b ? Ke(nt(b)) : null;
      }
      function bt(b) {
        if (!b) return null;
        const C = b.filter(Re);
        return 0 == C.length
          ? null
          : function (D) {
              return (function ve(...b) {
                const C = (0, oe.jO)(b),
                  { args: D, keys: x } = (0, pe.D)(b),
                  Me = new j.y((a) => {
                    const { length: _ } = D;
                    if (!_) return void a.complete();
                    const c = new Array(_);
                    let g = _,
                      M = _;
                    for (let we = 0; we < _; we++) {
                      let Je = !1;
                      (0, Le.Xf)(D[we]).subscribe(
                        (0, xe.x)(
                          a,
                          (Qe) => {
                            Je || ((Je = !0), M--), (c[we] = Qe);
                          },
                          () => g--,
                          void 0,
                          () => {
                            (!g || !Je) &&
                              (M || a.next(x ? (0, Fe.n)(x, c) : c),
                              a.complete());
                          }
                        )
                      );
                    }
                  });
                return C ? Me.pipe((0, Se.Z)(C)) : Me;
              })(Ae(D, C).map(Pe)).pipe((0, be.U)(ye));
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
      function Ye(b) {
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
          Lt(b).forEach((Me) => {
            bn(D, Me) || D.push(Me);
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
        b._forEachChild((x, Me) => {
          if (void 0 === D[Me]) throw new o.vHH(1002, '');
        });
      }
      class Ee {
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
            const D = Pe(this.asyncValidator(this));
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
            : D.reduce((x, Me) => x && x._find(Me), this);
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
      class J extends Ee {
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
              const Me = this.controls[x];
              Me &&
                Me.patchValue(C[x], { onlySelf: !0, emitEvent: D.emitEvent });
            }),
            this.updateValueAndValidity(D));
        }
        reset(C = {}, D = {}) {
          this._forEachChild((x, Me) => {
            x.reset(C[Me], { onlySelf: !0, emitEvent: D.emitEvent });
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
            (D, x, Me) => ((x.enabled || this.disabled) && (D[Me] = x.value), D)
          );
        }
        _reduceChildren(C, D) {
          let x = C;
          return (
            this._forEachChild((Me, a) => {
              x = D(x, Me, a);
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
      class ze extends J {}
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
            const D = (x, Me) => {
              C.valueAccessor.writeValue(x), Me && C.viewToModelUpdate(x);
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
        const x = Ye(b);
        null !== C.asyncValidator
          ? b.setAsyncValidators(Ft(x, C.asyncValidator))
          : 'function' == typeof x && b.setAsyncValidators([x]);
        const Me = () => b.updateValueAndValidity();
        ir(C._rawValidators, Me), ir(C._rawAsyncValidators, Me);
      }
      function On(b, C) {
        let D = !1;
        if (null !== b) {
          if (null !== C.validator) {
            const Me = Mt(b);
            if (Array.isArray(Me) && Me.length > 0) {
              const a = Me.filter((_) => _ !== C.validator);
              a.length !== Me.length && ((D = !0), b.setValidators(a));
            }
          }
          if (null !== C.asyncValidator) {
            const Me = Ye(b);
            if (Array.isArray(Me) && Me.length > 0) {
              const a = Me.filter((_) => _ !== C.asyncValidator);
              a.length !== Me.length && ((D = !0), b.setAsyncValidators(a));
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
      function ae(b, C) {
        const D = b.indexOf(C);
        D > -1 && b.splice(D, 1);
      }
      function Ve(b) {
        return (
          'object' == typeof b &&
          null !== b &&
          2 === Object.keys(b).length &&
          'value' in b &&
          'disabled' in b
        );
      }
      const Oe = class extends Ee {
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
              (this.defaultValue = Ve(C) ? C.value : C);
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
          ae(this._onChange, C);
        }
        registerOnDisabledChange(C) {
          this._onDisabledChange.push(C);
        }
        _unregisterOnDisabledChange(C) {
          ae(this._onDisabledChange, C);
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
          Ve(C)
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
          constructor(D, x, Me) {
            super(),
              (this.callSetDisabledState = Me),
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
              (function H(b, C) {
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
                Me = this.form.get(D.path);
              x !== Me &&
                (ln(x || null, D),
                ((b) => b instanceof Oe)(Me) &&
                  (an(Me, D, this.callSetDisabledState), (D.control = Me)));
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
            return new (D || b)(o.Y36(W, 10), o.Y36(le, 10), o.Y36(mt, 8));
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
            constructor(D, x, Me, a, _) {
              super(),
                (this._ngModelWarningConfig = _),
                (this._added = !1),
                (this.update = new o.vpe()),
                (this._ngModelWarningSent = !1),
                (this._parent = D),
                this._setValidators(x),
                this._setAsyncValidators(Me),
                (this.valueAccessor = (function $(b, C) {
                  if (!C) return null;
                  let D, x, Me;
                  return (
                    Array.isArray(C),
                    C.forEach((a) => {
                      a.constructor === he
                        ? (D = a)
                        : (function Rn(b) {
                            return Object.getPrototypeOf(b.constructor) === ne;
                          })(a)
                        ? (x = a)
                        : (Me = a);
                    }),
                    Me || x || D || null
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
                o.Y36(W, 10),
                o.Y36(le, 10),
                o.Y36(me, 10),
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
      class Un extends Ee {
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
          let Me = this._adjustIndex(C);
          Me < 0 && (Me = 0),
            this.controls[Me] &&
              this.controls[Me]._registerOnCollectionChange(() => {}),
            this.controls.splice(Me, 1),
            D && (this.controls.splice(Me, 0, D), this._registerControl(D)),
            this.updateValueAndValidity({ emitEvent: x.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(C, D = {}) {
          dr(this, 0, C),
            C.forEach((x, Me) => {
              Dr(this, !1, Me),
                this.at(Me).setValue(x, {
                  onlySelf: !0,
                  emitEvent: D.emitEvent,
                });
            }),
            this.updateValueAndValidity(D);
        }
        patchValue(C, D = {}) {
          null != C &&
            (C.forEach((x, Me) => {
              this.at(Me) &&
                this.at(Me).patchValue(x, {
                  onlySelf: !0,
                  emitEvent: D.emitEvent,
                });
            }),
            this.updateValueAndValidity(D));
        }
        reset(C = [], D = {}) {
          this._forEachChild((x, Me) => {
            x.reset(C[Me], { onlySelf: !0, emitEvent: D.emitEvent });
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
            const Me = this._reduceControls(D);
            let a = {};
            return (
              Jo(x)
                ? (a = x)
                : null !== x &&
                  ((a.validators = x.validator),
                  (a.asyncValidators = x.asyncValidator)),
              new J(Me, a)
            );
          }
          record(D, x = null) {
            const Me = this._reduceControls(D);
            return new ze(Me, x);
          }
          control(D, x, Me) {
            let a = {};
            return this.useNonNullable
              ? (Jo(x)
                  ? (a = x)
                  : ((a.validators = x), (a.asyncValidators = Me)),
                new Oe(D, { ...a, nonNullable: !0 }))
              : new Oe(D, x, Me);
          }
          array(D, x, Me) {
            const a = D.map((_) => this._createControl(_));
            return new Un(a, x, Me);
          }
          _reduceControls(D) {
            const x = {};
            return (
              Object.keys(D).forEach((Me) => {
                x[Me] = this._createControl(D[Me]);
              }),
              x
            );
          }
          _createControl(D) {
            return D instanceof Oe || D instanceof Ee
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
    1481: (at, $e, S) => {
      'use strict';
      S.d($e, { Cg: () => Ke, Dx: () => $n });
      var o = S(6895),
        P = S(8256);
      class U extends o.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class j extends U {
        static makeCurrent() {
          (0, o.HT)(new j());
        }
        onAndCancel(J, z, Te) {
          return (
            J.addEventListener(z, Te, !1),
            () => {
              J.removeEventListener(z, Te, !1);
            }
          );
        }
        dispatchEvent(J, z) {
          J.dispatchEvent(z);
        }
        remove(J) {
          J.parentNode && J.parentNode.removeChild(J);
        }
        createElement(J, z) {
          return (z = z || this.getDefaultDocument()).createElement(J);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(J) {
          return J.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(J) {
          return J instanceof DocumentFragment;
        }
        getGlobalEventTarget(J, z) {
          return 'window' === z
            ? window
            : 'document' === z
            ? J
            : 'body' === z
            ? J.body
            : null;
        }
        getBaseHref(J) {
          const z = (function Le() {
            return (
              (pe = pe || document.querySelector('base')),
              pe ? pe.getAttribute('href') : null
            );
          })();
          return null == z
            ? null
            : (function xe(Ee) {
                (oe = oe || document.createElement('a')),
                  oe.setAttribute('href', Ee);
                const J = oe.pathname;
                return '/' === J.charAt(0) ? J : `/${J}`;
              })(z);
        }
        resetBaseElement() {
          pe = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(J) {
          return (0, o.Mx)(document.cookie, J);
        }
      }
      let oe,
        pe = null,
        ue = (() => {
          class Ee {
            build() {
              return new XMLHttpRequest();
            }
          }
          return (
            (Ee.ɵfac = function (z) {
              return new (z || Ee)();
            }),
            (Ee.ɵprov = P.Yz7({ token: Ee, factory: Ee.ɵfac })),
            Ee
          );
        })();
      const ne = new P.OlP('EventManagerPlugins');
      let me = (() => {
        class Ee {
          constructor(z, Te) {
            (this._zone = Te),
              (this._eventNameToPlugin = new Map()),
              z.forEach((ze) => (ze.manager = this)),
              (this._plugins = z.slice().reverse());
          }
          addEventListener(z, Te, ze) {
            return this._findPluginFor(Te).addEventListener(z, Te, ze);
          }
          addGlobalEventListener(z, Te, ze) {
            return this._findPluginFor(Te).addGlobalEventListener(z, Te, ze);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(z) {
            const Te = this._eventNameToPlugin.get(z);
            if (Te) return Te;
            const ze = this._plugins;
            for (let ht = 0; ht < ze.length; ht++) {
              const mt = ze[ht];
              if (mt.supports(z)) return this._eventNameToPlugin.set(z, mt), mt;
            }
            throw new Error(`No event manager plugin found for event ${z}`);
          }
        }
        return (
          (Ee.ɵfac = function (z) {
            return new (z || Ee)(P.LFG(ne), P.LFG(P.R0b));
          }),
          (Ee.ɵprov = P.Yz7({ token: Ee, factory: Ee.ɵfac })),
          Ee
        );
      })();
      class Be {
        constructor(J) {
          this._doc = J;
        }
        addGlobalEventListener(J, z, Te) {
          const ze = (0, o.q)().getGlobalEventTarget(this._doc, J);
          if (!ze)
            throw new Error(`Unsupported event target ${ze} for event ${z}`);
          return this.addEventListener(ze, z, Te);
        }
      }
      let ge = (() => {
          class Ee {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(z) {
              const Te = new Set();
              z.forEach((ze) => {
                this._stylesSet.has(ze) ||
                  (this._stylesSet.add(ze), Te.add(ze));
              }),
                this.onStylesAdded(Te);
            }
            onStylesAdded(z) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (Ee.ɵfac = function (z) {
              return new (z || Ee)();
            }),
            (Ee.ɵprov = P.Yz7({ token: Ee, factory: Ee.ɵfac })),
            Ee
          );
        })(),
        te = (() => {
          class Ee extends ge {
            constructor(z) {
              super(),
                (this._doc = z),
                (this._hostNodes = new Map()),
                this._hostNodes.set(z.head, []);
            }
            _addStylesToHost(z, Te, ze) {
              z.forEach((ht) => {
                const mt = this._doc.createElement('style');
                (mt.textContent = ht), ze.push(Te.appendChild(mt));
              });
            }
            addHost(z) {
              const Te = [];
              this._addStylesToHost(this._stylesSet, z, Te),
                this._hostNodes.set(z, Te);
            }
            removeHost(z) {
              const Te = this._hostNodes.get(z);
              Te && Te.forEach(He), this._hostNodes.delete(z);
            }
            onStylesAdded(z) {
              this._hostNodes.forEach((Te, ze) => {
                this._addStylesToHost(z, ze, Te);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((z) => z.forEach(He));
            }
          }
          return (
            (Ee.ɵfac = function (z) {
              return new (z || Ee)(P.LFG(o.K0));
            }),
            (Ee.ɵprov = P.Yz7({ token: Ee, factory: Ee.ɵfac })),
            Ee
          );
        })();
      function He(Ee) {
        (0, o.q)().remove(Ee);
      }
      const _e = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/MathML/',
        },
        he = /%COMP%/g;
      function k(Ee, J) {
        return J.flat(100).map((z) => z.replace(he, Ee));
      }
      function B(Ee) {
        return (J) => {
          if ('__ngUnwrap__' === J) return Ee;
          !1 === Ee(J) && (J.preventDefault(), (J.returnValue = !1));
        };
      }
      let G = (() => {
        class Ee {
          constructor(z, Te, ze) {
            (this.eventManager = z),
              (this.sharedStylesHost = Te),
              (this.appId = ze),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Ie(z));
          }
          createRenderer(z, Te) {
            if (!z || !Te) return this.defaultRenderer;
            switch (Te.encapsulation) {
              case P.ifc.Emulated: {
                let ze = this.rendererByCompId.get(Te.id);
                return (
                  ze ||
                    ((ze = new K(
                      this.eventManager,
                      this.sharedStylesHost,
                      Te,
                      this.appId
                    )),
                    this.rendererByCompId.set(Te.id, ze)),
                  ze.applyToHost(z),
                  ze
                );
              }
              case 1:
              case P.ifc.ShadowDom:
                return new q(this.eventManager, this.sharedStylesHost, z, Te);
              default:
                if (!this.rendererByCompId.has(Te.id)) {
                  const ze = k(Te.id, Te.styles);
                  this.sharedStylesHost.addStyles(ze),
                    this.rendererByCompId.set(Te.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (Ee.ɵfac = function (z) {
            return new (z || Ee)(P.LFG(me), P.LFG(te), P.LFG(P.AFp));
          }),
          (Ee.ɵprov = P.Yz7({ token: Ee, factory: Ee.ɵfac })),
          Ee
        );
      })();
      class Ie {
        constructor(J) {
          (this.eventManager = J),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(J, z) {
          return z
            ? document.createElementNS(_e[z] || z, J)
            : document.createElement(J);
        }
        createComment(J) {
          return document.createComment(J);
        }
        createText(J) {
          return document.createTextNode(J);
        }
        appendChild(J, z) {
          (L(J) ? J.content : J).appendChild(z);
        }
        insertBefore(J, z, Te) {
          J && (L(J) ? J.content : J).insertBefore(z, Te);
        }
        removeChild(J, z) {
          J && J.removeChild(z);
        }
        selectRootElement(J, z) {
          let Te = 'string' == typeof J ? document.querySelector(J) : J;
          if (!Te)
            throw new Error(`The selector "${J}" did not match any elements`);
          return z || (Te.textContent = ''), Te;
        }
        parentNode(J) {
          return J.parentNode;
        }
        nextSibling(J) {
          return J.nextSibling;
        }
        setAttribute(J, z, Te, ze) {
          if (ze) {
            z = ze + ':' + z;
            const ht = _e[ze];
            ht ? J.setAttributeNS(ht, z, Te) : J.setAttribute(z, Te);
          } else J.setAttribute(z, Te);
        }
        removeAttribute(J, z, Te) {
          if (Te) {
            const ze = _e[Te];
            ze ? J.removeAttributeNS(ze, z) : J.removeAttribute(`${Te}:${z}`);
          } else J.removeAttribute(z);
        }
        addClass(J, z) {
          J.classList.add(z);
        }
        removeClass(J, z) {
          J.classList.remove(z);
        }
        setStyle(J, z, Te, ze) {
          ze & (P.JOm.DashCase | P.JOm.Important)
            ? J.style.setProperty(
                z,
                Te,
                ze & P.JOm.Important ? 'important' : ''
              )
            : (J.style[z] = Te);
        }
        removeStyle(J, z, Te) {
          Te & P.JOm.DashCase ? J.style.removeProperty(z) : (J.style[z] = '');
        }
        setProperty(J, z, Te) {
          J[z] = Te;
        }
        setValue(J, z) {
          J.nodeValue = z;
        }
        listen(J, z, Te) {
          return 'string' == typeof J
            ? this.eventManager.addGlobalEventListener(J, z, B(Te))
            : this.eventManager.addEventListener(J, z, B(Te));
        }
      }
      function L(Ee) {
        return 'TEMPLATE' === Ee.tagName && void 0 !== Ee.content;
      }
      class K extends Ie {
        constructor(J, z, Te, ze) {
          super(J), (this.component = Te);
          const ht = k(ze + '-' + Te.id, Te.styles);
          z.addStyles(ht),
            (this.contentAttr = (function le(Ee) {
              return '_ngcontent-%COMP%'.replace(he, Ee);
            })(ze + '-' + Te.id)),
            (this.hostAttr = (function fe(Ee) {
              return '_nghost-%COMP%'.replace(he, Ee);
            })(ze + '-' + Te.id));
        }
        applyToHost(J) {
          super.setAttribute(J, this.hostAttr, '');
        }
        createElement(J, z) {
          const Te = super.createElement(J, z);
          return super.setAttribute(Te, this.contentAttr, ''), Te;
        }
      }
      class q extends Ie {
        constructor(J, z, Te, ze) {
          super(J),
            (this.sharedStylesHost = z),
            (this.hostEl = Te),
            (this.shadowRoot = Te.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const ht = k(ze.id, ze.styles);
          for (let mt = 0; mt < ht.length; mt++) {
            const vt = document.createElement('style');
            (vt.textContent = ht[mt]), this.shadowRoot.appendChild(vt);
          }
        }
        nodeOrShadowRoot(J) {
          return J === this.hostEl ? this.shadowRoot : J;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(J, z) {
          return super.appendChild(this.nodeOrShadowRoot(J), z);
        }
        insertBefore(J, z, Te) {
          return super.insertBefore(this.nodeOrShadowRoot(J), z, Te);
        }
        removeChild(J, z) {
          return super.removeChild(this.nodeOrShadowRoot(J), z);
        }
        parentNode(J) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(J))
          );
        }
      }
      let Re = (() => {
        class Ee extends Be {
          constructor(z) {
            super(z);
          }
          supports(z) {
            return !0;
          }
          addEventListener(z, Te, ze) {
            return (
              z.addEventListener(Te, ze, !1),
              () => this.removeEventListener(z, Te, ze)
            );
          }
          removeEventListener(z, Te, ze) {
            return z.removeEventListener(Te, ze);
          }
        }
        return (
          (Ee.ɵfac = function (z) {
            return new (z || Ee)(P.LFG(o.K0));
          }),
          (Ee.ɵprov = P.Yz7({ token: Ee, factory: Ee.ɵfac })),
          Ee
        );
      })();
      const Pe = ['alt', 'control', 'meta', 'shift'],
        ye = {
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
        Ae = {
          alt: (Ee) => Ee.altKey,
          control: (Ee) => Ee.ctrlKey,
          meta: (Ee) => Ee.metaKey,
          shift: (Ee) => Ee.shiftKey,
        };
      let We = (() => {
        class Ee extends Be {
          constructor(z) {
            super(z);
          }
          supports(z) {
            return null != Ee.parseEventName(z);
          }
          addEventListener(z, Te, ze) {
            const ht = Ee.parseEventName(Te),
              mt = Ee.eventCallback(ht.fullKey, ze, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, o.q)().onAndCancel(z, ht.domEventName, mt)
              );
          }
          static parseEventName(z) {
            const Te = z.toLowerCase().split('.'),
              ze = Te.shift();
            if (0 === Te.length || ('keydown' !== ze && 'keyup' !== ze))
              return null;
            const ht = Ee._normalizeKey(Te.pop());
            let mt = '',
              vt = Te.indexOf('code');
            if (
              (vt > -1 && (Te.splice(vt, 1), (mt = 'code.')),
              Pe.forEach((an) => {
                const ln = Te.indexOf(an);
                ln > -1 && (Te.splice(ln, 1), (mt += an + '.'));
              }),
              (mt += ht),
              0 != Te.length || 0 === ht.length)
            )
              return null;
            const Zt = {};
            return (Zt.domEventName = ze), (Zt.fullKey = mt), Zt;
          }
          static matchEventFullKeyCode(z, Te) {
            let ze = ye[z.key] || z.key,
              ht = '';
            return (
              Te.indexOf('code.') > -1 && ((ze = z.code), (ht = 'code.')),
              !(null == ze || !ze) &&
                ((ze = ze.toLowerCase()),
                ' ' === ze ? (ze = 'space') : '.' === ze && (ze = 'dot'),
                Pe.forEach((mt) => {
                  mt !== ze && (0, Ae[mt])(z) && (ht += mt + '.');
                }),
                (ht += ze),
                ht === Te)
            );
          }
          static eventCallback(z, Te, ze) {
            return (ht) => {
              Ee.matchEventFullKeyCode(ht, z) && ze.runGuarded(() => Te(ht));
            };
          }
          static _normalizeKey(z) {
            return 'esc' === z ? 'escape' : z;
          }
        }
        return (
          (Ee.ɵfac = function (z) {
            return new (z || Ee)(P.LFG(o.K0));
          }),
          (Ee.ɵprov = P.Yz7({ token: Ee, factory: Ee.ɵfac })),
          Ee
        );
      })();
      function Ke(Ee, J) {
        return (0, P.iPO)({ rootComponent: Ee, ...bt(J) });
      }
      function bt(Ee) {
        return {
          appProviders: [...Ln, ...(Ee?.providers ?? [])],
          platformProviders: Lt,
        };
      }
      const Lt = [
          { provide: P.Lbi, useValue: o.bD },
          {
            provide: P.g9A,
            useValue: function Ft() {
              j.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: o.K0,
            useFactory: function Ye() {
              return (0, P.RDi)(document), document;
            },
            deps: [],
          },
        ],
        Ln = [
          { provide: P.zSh, useValue: 'root' },
          {
            provide: P.qLn,
            useFactory: function Mt() {
              return new P.qLn();
            },
            deps: [],
          },
          { provide: ne, useClass: Re, multi: !0, deps: [o.K0, P.R0b, P.Lbi] },
          { provide: ne, useClass: We, multi: !0, deps: [o.K0] },
          { provide: G, useClass: G, deps: [me, te, P.AFp] },
          { provide: P.FYo, useExisting: G },
          { provide: ge, useExisting: te },
          { provide: te, useClass: te, deps: [o.K0] },
          { provide: me, useClass: me, deps: [ne, P.R0b] },
          { provide: o.JF, useClass: ue, deps: [] },
          [],
        ];
      let $n = (() => {
        class Ee {
          constructor(z) {
            this._doc = z;
          }
          getTitle() {
            return this._doc.title;
          }
          setTitle(z) {
            this._doc.title = z || '';
          }
        }
        return (
          (Ee.ɵfac = function (z) {
            return new (z || Ee)(P.LFG(o.K0));
          }),
          (Ee.ɵprov = P.Yz7({
            token: Ee,
            factory: function (z) {
              let Te = null;
              return (
                (Te = z
                  ? new z()
                  : (function Jt() {
                      return new $n((0, P.LFG)(o.K0));
                    })()),
                Te
              );
            },
            providedIn: 'root',
          })),
          Ee
        );
      })();
      typeof window < 'u' && window;
    },
    8265: (at, $e, S) => {
      'use strict';
      S.d($e, {
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
        P = S(2076),
        U = S(7669);
      function j(...d) {
        const f = (0, U.yG)(d);
        return (0, P.D)(d, f);
      }
      var pe = S(1135);
      const oe = (0, S(3888).d)(
        (d) =>
          function () {
            d(this),
              (this.name = 'EmptyError'),
              (this.message = 'no elements in sequence');
          }
      );
      var xe = S(9751),
        Se = S(4742),
        Fe = S(4671),
        ve = S(3268),
        be = S(1810),
        ue = S(5403),
        ne = S(9672);
      function me(...d) {
        const f = (0, U.yG)(d),
          l = (0, U.jO)(d),
          { args: p, keys: E } = (0, Se.D)(d);
        if (0 === p.length) return (0, P.D)([], f);
        const A = new xe.y(
          (function Be(d, f, l = Fe.y) {
            return (p) => {
              ge(
                f,
                () => {
                  const { length: E } = d,
                    A = new Array(E);
                  let F = E,
                    ce = E;
                  for (let Ge = 0; Ge < E; Ge++)
                    ge(
                      f,
                      () => {
                        const ut = (0, P.D)(d[Ge], f);
                        let yt = !1;
                        ut.subscribe(
                          (0, ue.x)(
                            p,
                            (Et) => {
                              (A[Ge] = Et),
                                yt || ((yt = !0), ce--),
                                ce || p.next(l(A.slice()));
                            },
                            () => {
                              --F || p.complete();
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
          })(p, f, E ? (F) => (0, be.n)(E, F) : Fe.y)
        );
        return l ? A.pipe((0, ve.Z)(l)) : A;
      }
      function ge(d, f, l) {
        d ? (0, ne.f)(l, d, f) : f();
      }
      var te = S(8189);
      function _e(...d) {
        return (function He() {
          return (0, te.J)(1);
        })()((0, P.D)(d, (0, U.yG)(d)));
      }
      var he = S(8421);
      function se(d) {
        return new xe.y((f) => {
          (0, he.Xf)(d()).subscribe(f);
        });
      }
      var ke = S(9635),
        de = S(576);
      function W(d, f) {
        const l = (0, de.m)(d) ? d : () => d,
          p = (E) => E.error(l());
        return new xe.y(f ? (E) => f.schedule(p, 0, E) : p);
      }
      var le = S(515),
        fe = S(727),
        k = S(4482);
      function B() {
        return (0, k.e)((d, f) => {
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
      class Y extends xe.y {
        constructor(f, l) {
          super(),
            (this.source = f),
            (this.subjectFactory = l),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            (0, k.A)(f) && (this.lift = f.lift);
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
          return B()(this);
        }
      }
      var G = S(7579),
        Ie = S(6895),
        ie = S(4004),
        X = S(3900),
        L = S(5698),
        q = S(9300),
        Re = S(5577);
      function Pe(d) {
        return (0, k.e)((f, l) => {
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
      function ye(d = Ae) {
        return (0, k.e)((f, l) => {
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
      function Ae() {
        return new oe();
      }
      function We(d, f) {
        const l = arguments.length >= 2;
        return (p) =>
          p.pipe(
            d ? (0, q.h)((E, A) => d(E, A, p)) : Fe.y,
            (0, L.q)(1),
            l ? Pe(f) : ye(() => new oe())
          );
      }
      function nt(d, f) {
        return (0, de.m)(f) ? (0, Re.z)(d, f, 1) : (0, Re.z)(d, 1);
      }
      var Ke = S(8505);
      function ft(d) {
        return (0, k.e)((f, l) => {
          let A,
            p = null,
            E = !1;
          (p = f.subscribe(
            (0, ue.x)(l, void 0, void 0, (F) => {
              (A = (0, he.Xf)(d(F, ft(d)(f)))),
                p ? (p.unsubscribe(), (p = null), A.subscribe(l)) : (E = !0);
            })
          )),
            E && (p.unsubscribe(), (p = null), A.subscribe(l));
        });
      }
      function bt(d, f, l, p, E) {
        return (A, F) => {
          let ce = l,
            Ge = f,
            ut = 0;
          A.subscribe(
            (0, ue.x)(
              F,
              (yt) => {
                const Et = ut++;
                (Ge = ce ? d(Ge, yt, Et) : ((ce = !0), yt)), p && F.next(Ge);
              },
              E &&
                (() => {
                  ce && F.next(Ge), F.complete();
                })
            )
          );
        };
      }
      function lt(d, f) {
        return (0, k.e)(bt(d, f, arguments.length >= 2, !0));
      }
      function Ft(d) {
        return d <= 0
          ? () => le.E
          : (0, k.e)((f, l) => {
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
            d ? (0, q.h)((E, A) => d(E, A, p)) : Fe.y,
            Ft(1),
            l ? Pe(f) : ye(() => new oe())
          );
      }
      function bn(d) {
        return (0, k.e)((f, l) => {
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
          const F = p[A],
            ce = d[A];
          if (F.startsWith(':')) E[F.substring(1)] = ce;
          else if (F !== ce.path) return null;
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
          ? (0, P.D)(Promise.resolve(d))
          : j(d);
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
          return z(this);
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
            p = (function ze(d) {
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
        return d.segments.map((f) => z(f)).join('/');
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
      function Ee(d) {
        return decodeURIComponent(d);
      }
      function J(d) {
        return Ee(d.replace(/\+/g, '%20'));
      }
      function z(d) {
        return `${dr(d.path)}${(function Te(d) {
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
          return this.capture(f), new nr(Ee(f), this.parseMatrixParams());
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
          f[Ee(l)] = Ee(p);
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
            const F = (function ln(d) {
              const f = d.match(an);
              return f ? f[0] : '';
            })(this.remaining);
            F && ((p = F), this.capture(p));
          }
          const E = J(l),
            A = J(p);
          if (f.hasOwnProperty(E)) {
            let F = f[E];
            Array.isArray(F) || ((F = [F]), (f[E] = F)), F.push(A);
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
            const F = this.parseChildren();
            (l[A] = 1 === Object.keys(F).length ? F[st] : new wt([], F)),
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
          const p = d.reduce((E, A, F) => {
            if ('object' == typeof A && null != A) {
              if (A.outlets) {
                const ce = {};
                return (
                  Vt(A.outlets, (Ge, ut) => {
                    ce[ut] = 'string' == typeof Ge ? Ge.split('/') : Ge;
                  }),
                  [...E, { outlets: ce }]
                );
              }
              if (A.segmentPath) return [...E, A.segmentPath];
            }
            return 'string' != typeof A
              ? [...E, A]
              : 0 === F
              ? (A.split('/').forEach((ce, Ge) => {
                  (0 == Ge && '.' === ce) ||
                    (0 == Ge && '' === ce
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
          : (function F(Ge) {
              const ut = (function $(d, f, l, p) {
                  if (d.isAbsolute) return new Rn(f.root, !0, 0);
                  if (-1 === p) return new Rn(l, l === f.root, 0);
                  return (function H(d, f, l) {
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
                })(A, f, d.snapshot?._urlSegment, Ge),
                yt = ut.processChildren
                  ? N(ut.segmentGroup, ut.index, A.commands)
                  : De(ut.segmentGroup, ut.index, A.commands);
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
        let F,
          A = {};
        p &&
          Vt(p, (Ge, ut) => {
            A[ut] = Array.isArray(Ge) ? Ge.map((yt) => `${yt}`) : `${Ge}`;
          }),
          (F = d === f ? l : Tt(d, f, l));
        const ce = Tn(pn(F));
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
      function De(d, f, l) {
        if (
          (d || (d = new wt([], {})),
          0 === d.segments.length && d.hasChildren())
        )
          return N(d, f, l);
        const p = (function ee(d, f, l) {
            let p = 0,
              E = f;
            const A = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; E < d.segments.length; ) {
              if (p >= l.length) return A;
              const F = d.segments[E],
                ce = l[p];
              if (ar(ce)) break;
              const Ge = `${ce}`,
                ut = p < l.length - 1 ? l[p + 1] : null;
              if (E > 0 && void 0 === Ge) break;
              if (Ge && ut && 'object' == typeof ut && void 0 === ut.outlets) {
                if (!rt(Ge, ut, F)) return A;
                p += 2;
              } else {
                if (!rt(Ge, {}, F)) return A;
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
            N(A, 0, E)
          );
        }
        return p.match && 0 === E.length
          ? new wt(d.segments, {})
          : p.match && !d.hasChildren()
          ? ae(d, f, l)
          : p.match
          ? N(d, 0, E)
          : ae(d, f, l);
      }
      function N(d, f, l) {
        if (0 === l.length) return new wt(d.segments, {});
        {
          const p = (function Q(d) {
              return ar(d[0]) ? d[0].outlets : { [st]: d };
            })(l),
            E = {};
          return (
            Vt(p, (A, F) => {
              'string' == typeof A && (A = [A]),
                null !== A && (E[F] = De(d.children[F], f, A));
            }),
            Vt(d.children, (A, F) => {
              void 0 === p[F] && (E[F] = A);
            }),
            new wt(d.segments, E)
          );
        }
      }
      function ae(d, f, l) {
        const p = d.segments.slice(0, f);
        let E = 0;
        for (; E < l.length; ) {
          const A = l[E];
          if (ar(A)) {
            const Ge = Ve(A.outlets);
            return new wt(p, Ge);
          }
          if (0 === E && sr(l[0])) {
            p.push(new nr(d.segments[f].path, Oe(l[0]))), E++;
            continue;
          }
          const F = ar(A) ? A.outlets[st] : `${A}`,
            ce = E < l.length - 1 ? l[E + 1] : null;
          F && ce && sr(ce)
            ? (p.push(new nr(F, Oe(ce))), (E += 2))
            : (p.push(new nr(F, {})), E++);
        }
        return new wt(p, {});
      }
      function Ve(d) {
        const f = {};
        return (
          Vt(d, (l, p) => {
            'string' == typeof l && (l = [l]),
              null !== l && (f[p] = ae(new wt([], {}), 0, l));
          }),
          f
        );
      }
      function Oe(d) {
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
            const F = new $r([], {}, {}, '', {}, st, f, null, d.root, -1, {});
            return new xo('', new tn(F, []));
          })(d, f),
          p = new pe.X([new nr('', {})]),
          E = new pe.X({}),
          A = new pe.X({}),
          F = new pe.X({}),
          ce = new pe.X(''),
          Ge = new Mn(p, E, F, ce, A, st, f, l.root);
        return (Ge.snapshot = l.root), new Ar(new tn(Ge, []), l);
      }
      class Mn {
        constructor(f, l, p, E, A, F, ce, Ge) {
          (this.url = f),
            (this.params = l),
            (this.queryParams = p),
            (this.fragment = E),
            (this.data = A),
            (this.outlet = F),
            (this.component = ce),
            (this.title =
              this.data?.pipe((0, ie.U)((ut) => ut[Ln])) ?? j(void 0)),
            (this._futureSnapshot = Ge);
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
              (this._paramMap = this.params.pipe((0, ie.U)((f) => cn(f)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, ie.U)((f) => cn(f))
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
        constructor(f, l, p, E, A, F, ce, Ge, ut, yt, Et) {
          (this.url = f),
            (this.params = l),
            (this.queryParams = p),
            (this.fragment = E),
            (this.data = A),
            (this.outlet = F),
            (this.component = ce),
            (this.routeConfig = Ge),
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
              const F = A.route;
              return (
                (F.value._futureSnapshot = f.value),
                (F.children = f.children.map((ce) => jr(d, ce))),
                F
              );
            }
          }
          const p = (function li(d) {
              return new Mn(
                new pe.X(d.url),
                new pe.X(d.params),
                new pe.X(d.queryParams),
                new pe.X(d.fragment),
                new pe.X(d.data),
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
              F = l.snapshot.component,
              ce = this.parentContexts.getOrCreateContext(this.name).children,
              Ge = new cr(l, ce, E.injector);
            if (
              p &&
              (function oo(d) {
                return !!d.resolveComponentFactory;
              })(p)
            ) {
              const ut = p.resolveComponentFactory(F);
              this.activated = E.createComponent(ut, E.length, Ge);
            } else
              this.activated = E.createComponent(F, {
                index: E.length,
                injector: Ge,
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
            const F = A.value.outlet;
            this.deactivateRoutes(A, E[F], p), delete E[F];
          }),
            Vt(E, (A, F) => {
              this.deactivateRouteAndItsChildren(A, p);
            });
        }
        deactivateRoutes(f, l, p) {
          const E = f.value,
            A = l ? l.value : null;
          if (E === A)
            if (E.component) {
              const F = p.getContext(E.outlet);
              F && this.deactivateChildRoutes(f, l, F.children);
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
          for (const F of Object.keys(A))
            this.deactivateRouteAndItsChildren(A[F], E);
          if (p && p.outlet) {
            const F = p.outlet.detach(),
              ce = p.children.onOutletDeactivated();
            this.routeReuseStrategy.store(f.value.snapshot, {
              componentRef: F,
              route: f,
              contexts: ce,
            });
          }
        }
        deactivateRouteAndOutlet(f, l) {
          const p = l.getContext(f.value.outlet),
            E = p && f.value.component ? p.children : l,
            A = Fn(f);
          for (const F of Object.keys(A))
            this.deactivateRouteAndItsChildren(A[F], E);
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
              const F = p.getOrCreateContext(E.outlet);
              this.activateChildRoutes(f, l, F.children);
            } else this.activateChildRoutes(f, l, p);
          else if (E.component) {
            const F = p.getOrCreateContext(E.outlet);
            if (this.routeReuseStrategy.shouldAttach(E.snapshot)) {
              const ce = this.routeReuseStrategy.retrieve(E.snapshot);
              this.routeReuseStrategy.store(E.snapshot, null),
                F.children.onOutletReAttached(ce.contexts),
                (F.attachRef = ce.componentRef),
                (F.route = ce.route.value),
                F.outlet && F.outlet.attach(ce.componentRef, ce.route.value),
                Fo(ce.route.value),
                this.activateChildRoutes(f, null, F.children);
            } else {
              const ce = Yr(E.snapshot),
                Ge = ce?.get(o._Vd) ?? null;
              (F.attachRef = null),
                (F.route = E),
                (F.resolver = Ge),
                (F.injector = ce),
                F.outlet && F.outlet.activateWith(E, F.injector),
                this.activateChildRoutes(f, null, F.children);
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
          d.children.forEach((F) => {
            (function Jo(
              d,
              f,
              l,
              p,
              E = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const A = d.value,
                F = f ? f.value : null,
                ce = l ? l.getContext(d.value.outlet) : null;
              if (F && A.routeConfig === F.routeConfig) {
                const Ge = (function Vr(d, f, l) {
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
                })(F, A, A.routeConfig.runGuardsAndResolvers);
                Ge
                  ? E.canActivateChecks.push(new ko(p))
                  : ((A.data = F.data), (A._resolvedData = F._resolvedData)),
                  Rr(d, f, A.component ? (ce ? ce.children : null) : l, p, E),
                  Ge &&
                    ce &&
                    ce.outlet &&
                    ce.outlet.isActivated &&
                    E.canDeactivateChecks.push(new ao(ce.outlet.component, F));
              } else
                F && lo(f, ce, E),
                  E.canActivateChecks.push(new ko(p)),
                  Rr(
                    d,
                    null,
                    A.component ? (ce ? ce.children : null) : l,
                    p,
                    E
                  );
            })(F, A[F.value.outlet], l, p.concat([F.value]), E),
              delete A[F.value.outlet];
          }),
          Vt(A, (F, ce) => lo(F, l.getContext(ce), E)),
          E
        );
      }
      function lo(d, f, l) {
        const p = Fn(d),
          E = d.value;
        Vt(p, (A, F) => {
          lo(A, E.component ? (f ? f.children.getContext(F) : null) : f, l);
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
        return d instanceof oe || 'EmptyError' === d?.name;
      }
      const g = Symbol('INITIAL_VALUE');
      function M() {
        return (0, X.w)((d) =>
          me(
            d.map((f) =>
              f.pipe(
                (0, L.q)(1),
                (function K(...d) {
                  const f = (0, U.yG)(d);
                  return (0, k.e)((l, p) => {
                    (f ? _e(d, l, f) : _e(d, l)).subscribe(p);
                  });
                })(g)
              )
            )
          ).pipe(
            (0, ie.U)((f) => {
              for (const l of f)
                if (!0 !== l) {
                  if (l === g) return g;
                  if (!1 === l || l instanceof _n) return l;
                }
              return !0;
            }),
            (0, q.h)((f) => f !== g),
            (0, L.q)(1)
          )
        );
      }
      function Fr(d) {
        return (0, ke.z)(
          (0, Ke.b)((f) => {
            if (Sn(f)) throw Zo(0, f);
          }),
          (0, ie.U)((f) => !0 === f)
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
                ? j(
                    E.map((F) => {
                      const ce = qr(F, d);
                      return Yt(
                        (function Me(d) {
                          return d && nn(d.canMatch);
                        })(ce)
                          ? ce.canMatch(f, l)
                          : d.runInContext(() => ce(f, l))
                      );
                    })
                  ).pipe(M(), Fr())
                : j(!0);
            })((p = Co(f, p)), f, l).pipe(
              (0, ie.U)((F) => (!0 === F ? A : { ...fn }))
            )
          : j(A);
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
        Vt(E.posParams, (ce, Ge) => {
          A[Ge] = ce.path;
        });
        const F =
          E.consumed.length > 0
            ? { ...A, ...E.consumed[E.consumed.length - 1].parameters }
            : A;
        return {
          matched: !0,
          consumedSegments: E.consumed,
          remainingSegments: l.slice(E.consumed.length),
          parameters: F,
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
                  const F = new wt([], {});
                  (F._sourceSegment = d),
                    (F._segmentIndexShift = f.length),
                    (E[Wn(A)] = F);
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
              for (const F of p)
                if (_i(d, l, F) && !E[Wn(F)]) {
                  const ce = new wt([], {});
                  (ce._sourceSegment = d),
                    (ce._segmentIndexShift = f.length),
                    (A[Wn(F)] = ce);
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
        return W(new ti(d));
      }
      function Ii(d) {
        return W(new $i(d));
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
              (0, ie.U)((A) =>
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
              (0, ie.U)((E) =>
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
            ? this.expandChildren(f, l, p).pipe((0, ie.U)((A) => new wt([], A)))
            : this.expandSegment(f, p, l, p.segments, E, !0);
        }
        expandChildren(f, l, p) {
          const E = [];
          for (const A of Object.keys(p.children))
            'primary' === A ? E.unshift(A) : E.push(A);
          return (0, P.D)(E).pipe(
            nt((A) => {
              const F = p.children[A],
                ce = Dn(l, A);
              return this.expandSegmentGroup(f, ce, F, A).pipe(
                (0, ie.U)((Ge) => ({ segment: Ge, outlet: A }))
              );
            }),
            lt((A, F) => ((A[F.outlet] = F.segment), A), {}),
            Mt()
          );
        }
        expandSegment(f, l, p, E, A, F) {
          return (0, P.D)(p).pipe(
            nt((ce) =>
              this.expandSegmentAgainstRoute(f, l, p, ce, E, A, F).pipe(
                ft((ut) => {
                  if (ut instanceof ti) return j(null);
                  throw ut;
                })
              )
            ),
            We((ce) => !!ce),
            ft((ce, Ge) => {
              if (c(ce)) return bi(l, E, A) ? j(new wt([], {})) : $o(l);
              throw ce;
            })
          );
        }
        expandSegmentAgainstRoute(f, l, p, E, A, F, ce) {
          return Ei(E, l, A, F)
            ? void 0 === E.redirectTo
              ? this.matchSegmentAgainstRoute(f, l, E, A, F)
              : ce && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(f, l, p, E, A, F)
              : $o(l)
            : $o(l);
        }
        expandSegmentAgainstRouteUsingRedirect(f, l, p, E, A, F) {
          return '**' === E.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(f, p, E, F)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                f,
                l,
                p,
                E,
                A,
                F
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(f, l, p, E) {
          const A = this.applyRedirectCommands([], p.redirectTo, {});
          return p.redirectTo.startsWith('/')
            ? Ii(A)
            : this.lineralizeSegments(p, A).pipe(
                (0, Re.z)((F) => {
                  const ce = new wt(F, {});
                  return this.expandSegment(f, ce, l, F, E, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(f, l, p, E, A, F) {
          const {
            matched: ce,
            consumedSegments: Ge,
            remainingSegments: ut,
            positionalParamSegments: yt,
          } = Ci(l, E, A);
          if (!ce) return $o(l);
          const Et = this.applyRedirectCommands(Ge, E.redirectTo, yt);
          return E.redirectTo.startsWith('/')
            ? Ii(Et)
            : this.lineralizeSegments(E, Et).pipe(
                (0, Re.z)((Pn) =>
                  this.expandSegment(f, l, p, Pn.concat(ut), F, !1)
                )
              );
        }
        matchSegmentAgainstRoute(f, l, p, E, A) {
          return '**' === p.path
            ? ((f = Co(p, f)),
              p.loadChildren
                ? (p._loadedRoutes
                    ? j({
                        routes: p._loadedRoutes,
                        injector: p._loadedInjector,
                      })
                    : this.configLoader.loadChildren(f, p)
                  ).pipe(
                    (0, ie.U)(
                      (ce) => (
                        (p._loadedRoutes = ce.routes),
                        (p._loadedInjector = ce.injector),
                        new wt(E, {})
                      )
                    )
                  )
                : j(new wt(E, {})))
            : Xr(l, p, E, f).pipe(
                (0, X.w)(
                  ({
                    matched: F,
                    consumedSegments: ce,
                    remainingSegments: Ge,
                  }) =>
                    F
                      ? this.getChildConfig((f = p._injector ?? f), p, E).pipe(
                          (0, Re.z)((yt) => {
                            const Et = yt.injector ?? f,
                              Pn = yt.routes,
                              { segmentGroup: Pr, slicedSegments: Ho } = co(
                                l,
                                ce,
                                Ge,
                                Pn
                              ),
                              Uo = new wt(Pr.segments, Pr.children);
                            if (0 === Ho.length && Uo.hasChildren())
                              return this.expandChildren(Et, Pn, Uo).pipe(
                                (0, ie.U)((Dl) => new wt(ce, Dl))
                              );
                            if (0 === Pn.length && 0 === Ho.length)
                              return j(new wt(ce, {}));
                            const Zr = Wn(p) === A;
                            return this.expandSegment(
                              Et,
                              Uo,
                              Pn,
                              Ho,
                              Zr ? st : A,
                              !0
                            ).pipe(
                              (0, ie.U)(
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
            ? j({ routes: l.children, injector: f })
            : l.loadChildren
            ? void 0 !== l._loadedRoutes
              ? j({ routes: l._loadedRoutes, injector: l._loadedInjector })
              : (function xr(d, f, l, p) {
                  const E = f.canLoad;
                  return void 0 === E || 0 === E.length
                    ? j(!0)
                    : j(
                        E.map((F) => {
                          const ce = qr(F, d);
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
                  (0, Re.z)((E) =>
                    E
                      ? this.configLoader.loadChildren(f, l).pipe(
                          (0, Ke.b)((A) => {
                            (l._loadedRoutes = A.routes),
                              (l._loadedInjector = A.injector);
                          })
                        )
                      : (function ys(d) {
                          return W(Po(ei, 3));
                        })()
                  )
                )
            : j({ routes: [], injector: f });
        }
        lineralizeSegments(f, l) {
          let p = [],
            E = l.root;
          for (;;) {
            if (((p = p.concat(E.segments)), 0 === E.numberOfChildren))
              return j(p);
            if (E.numberOfChildren > 1 || !E.children[st])
              return W(new o.vHH(4e3, ei));
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
          let F = {};
          return (
            Vt(l.children, (ce, Ge) => {
              F[Ge] = this.createSegmentGroup(f, ce, p, E);
            }),
            new wt(A, F)
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
        constructor(f, l, p, E, A, F, ce) {
          (this.injector = f),
            (this.rootComponentType = l),
            (this.config = p),
            (this.urlTree = E),
            (this.url = A),
            (this.paramsInheritanceStrategy = F),
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
            (0, ie.U)((l) => {
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
          return (0, P.D)(Object.keys(p.children)).pipe(
            nt((E) => {
              const A = p.children[E],
                F = Dn(l, E);
              return this.processSegmentGroup(f, F, A, E);
            }),
            lt((E, A) => (E && A ? (E.push(...A), E) : null)),
            (function Ye(d, f = !1) {
              return (0, k.e)((l, p) => {
                let E = 0;
                l.subscribe(
                  (0, ue.x)(p, (A) => {
                    const F = d(A, E++);
                    (F || f) && p.next(A), !F && p.complete();
                  })
                );
              });
            })((E) => null !== E),
            Pe(null),
            Mt(),
            (0, ie.U)((E) => {
              if (null === E) return null;
              const A = je(E);
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
          return (0, P.D)(l).pipe(
            nt((F) =>
              this.processSegmentAgainstRoute(F._injector ?? f, F, p, E, A)
            ),
            We((F) => !!F),
            ft((F) => {
              if (c(F)) return bi(p, E, A) ? j([]) : j(null);
              throw F;
            })
          );
        }
        processSegmentAgainstRoute(f, l, p, E, A) {
          if (l.redirectTo || !Ei(l, p, E, A)) return j(null);
          let F;
          if ('**' === l.path) {
            const ce = E.length > 0 ? ct(E).parameters : {},
              Ge = Bt(p) + E.length;
            F = j({
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
                Ge,
                En(l)
              ),
              consumedSegments: [],
              remainingSegments: [],
            });
          } else
            F = Xr(p, l, E, f).pipe(
              (0, ie.U)(
                ({
                  matched: ce,
                  consumedSegments: Ge,
                  remainingSegments: ut,
                  parameters: yt,
                }) => {
                  if (!ce) return null;
                  const Et = Bt(p) + Ge.length;
                  return {
                    snapshot: new $r(
                      Ge,
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
                    consumedSegments: Ge,
                    remainingSegments: ut,
                  };
                }
              )
            );
          return F.pipe(
            (0, X.w)((ce) => {
              if (null === ce) return j(null);
              const {
                snapshot: Ge,
                consumedSegments: ut,
                remainingSegments: yt,
              } = ce;
              f = l._injector ?? f;
              const Et = l._loadedInjector ?? f,
                Pn = (function Z(d) {
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
                  (0, ie.U)((Zr) => (null === Zr ? null : [new tn(Ge, Zr)]))
                );
              if (0 === Pn.length && 0 === Ho.length)
                return j([new tn(Ge, [])]);
              const Uo = Wn(l) === A;
              return this.processSegment(Et, Pn, Pr, Ho, Uo ? st : A).pipe(
                (0, ie.U)((Zr) => (null === Zr ? null : [new tn(Ge, Zr)]))
              );
            })
          );
        }
      }
      function Ne(d) {
        const f = d.value.routeConfig;
        return f && '' === f.path && void 0 === f.redirectTo;
      }
      function je(d) {
        const f = [],
          l = new Set();
        for (const p of d) {
          if (!Ne(p)) {
            f.push(p);
            continue;
          }
          const E = f.find((A) => p.value.routeConfig === A.value.routeConfig);
          void 0 !== E ? (E.children.push(...p.children), l.add(E)) : f.push(p);
        }
        for (const p of l) {
          const E = je(p.children);
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
        return (0, X.w)((f) => {
          const l = d(f);
          return l ? (0, P.D)(l).pipe((0, ie.U)(() => f)) : j(f);
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
            if (l._loadedComponent) return j(l._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(l);
            const p = Yt(l.loadComponent()).pipe(
                (0, ie.U)(bs),
                (0, Ke.b)((A) => {
                  this.onLoadEndListener && this.onLoadEndListener(l),
                    (l._loadedComponent = A);
                }),
                bn(() => {
                  this.componentLoaders.delete(l);
                })
              ),
              E = new Y(p, () => new G.x()).pipe(B());
            return this.componentLoaders.set(l, E), E;
          }
          loadChildren(l, p) {
            if (this.childrenLoaders.get(p)) return this.childrenLoaders.get(p);
            if (p._loadedRoutes)
              return j({
                routes: p._loadedRoutes,
                injector: p._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(p);
            const A = this.loadModuleFactoryOrRoutes(p.loadChildren).pipe(
                (0, ie.U)((ce) => {
                  this.onLoadEndListener && this.onLoadEndListener(p);
                  let Ge,
                    ut,
                    yt = !1;
                  Array.isArray(ce)
                    ? (ut = ce)
                    : ((Ge = ce.create(l).injector),
                      (ut = Ut(Ge.get(wi, [], o.XFs.Self | o.XFs.Optional))));
                  return { routes: ut.map(zr), injector: Ge };
                }),
                bn(() => {
                  this.childrenLoaders.delete(p);
                })
              ),
              F = new Y(A, () => new G.x()).pipe(B());
            return this.childrenLoaders.set(p, F), F;
          }
          loadModuleFactoryOrRoutes(l) {
            return Yt(l()).pipe(
              (0, ie.U)(bs),
              (0, Re.z)((E) =>
                E instanceof o.YKP || Array.isArray(E)
                  ? j(E)
                  : (0, P.D)(this.compiler.compileModuleAsync(E))
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
              (this.transitions = new pe.X({
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
                (0, q.h)((p) => 0 !== p.id),
                (0, ie.U)((p) => ({
                  ...p,
                  extractedUrl: l.urlHandlingStrategy.extract(p.rawUrl),
                })),
                (0, X.w)((p) => {
                  let E = !1,
                    A = !1;
                  return j(p).pipe(
                    (0, Ke.b)((F) => {
                      this.currentNavigation = {
                        id: F.id,
                        initialUrl: F.rawUrl,
                        extractedUrl: F.extractedUrl,
                        trigger: F.source,
                        extras: F.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? {
                              ...this.lastSuccessfulNavigation,
                              previousNavigation: null,
                            }
                          : null,
                      };
                    }),
                    (0, X.w)((F) => {
                      const ce = l.browserUrlTree.toString(),
                        Ge =
                          !l.navigated ||
                          F.extractedUrl.toString() !== ce ||
                          ce !== l.currentUrlTree.toString();
                      if (
                        ('reload' === l.onSameUrlNavigation || Ge) &&
                        l.urlHandlingStrategy.shouldProcessUrl(F.rawUrl)
                      )
                        return (
                          ws(F.source) && (l.browserUrlTree = F.extractedUrl),
                          j(F).pipe(
                            (0, X.w)((yt) => {
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
                              return (0, X.w)((E) =>
                                (function Ds(d, f, l, p, E) {
                                  return new Cs(d, f, l, p, E).apply();
                                })(d, f, l, E.extractedUrl, p).pipe(
                                  (0, ie.U)((A) => ({
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
                              return (0, Re.z)((A) =>
                                (function w(d, f, l, p, E, A, F = 'emptyOnly') {
                                  return new v(d, f, l, p, E, F, A)
                                    .recognize()
                                    .pipe(
                                      (0, X.w)((ce) =>
                                        null === ce
                                          ? (function m(d) {
                                              return new xe.y((f) =>
                                                f.error(d)
                                              );
                                            })(new fa())
                                          : j(ce)
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
                                  (0, ie.U)((F) => ({
                                    ...A,
                                    targetSnapshot: F,
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
                        Ge &&
                        l.rawUrlTree &&
                        l.urlHandlingStrategy.shouldProcessUrl(l.rawUrlTree)
                      ) {
                        const {
                            id: Et,
                            extractedUrl: Pn,
                            source: Pr,
                            restoredState: Ho,
                            extras: Uo,
                          } = F,
                          Zr = new et(
                            Et,
                            this.urlSerializer.serialize(Pn),
                            Pr,
                            Ho
                          );
                        this.events.next(Zr);
                        const Ma = Tr(Pn, l.rootComponentType).snapshot;
                        return j(
                          (p = {
                            ...F,
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
                      return (l.rawUrlTree = F.rawUrl), F.resolve(null), le.E;
                    }),
                    (0, Ke.b)((F) => {
                      const ce = new dn(
                        F.id,
                        this.urlSerializer.serialize(F.extractedUrl),
                        this.urlSerializer.serialize(F.urlAfterRedirects),
                        F.targetSnapshot
                      );
                      this.events.next(ce);
                    }),
                    (0, ie.U)(
                      (F) =>
                        (p = {
                          ...F,
                          guards: Wr(
                            F.targetSnapshot,
                            F.currentSnapshot,
                            this.rootContexts
                          ),
                        })
                    ),
                    (function we(d, f) {
                      return (0, Re.z)((l) => {
                        const {
                          targetSnapshot: p,
                          currentSnapshot: E,
                          guards: {
                            canActivateChecks: A,
                            canDeactivateChecks: F,
                          },
                        } = l;
                        return 0 === F.length && 0 === A.length
                          ? j({ ...l, guardsResult: !0 })
                          : (function Je(d, f, l, p) {
                              return (0, P.D)(d).pipe(
                                (0, Re.z)((E) =>
                                  (function zn(d, f, l, p, E) {
                                    const A =
                                      f && f.routeConfig
                                        ? f.routeConfig.canDeactivate
                                        : null;
                                    return A && 0 !== A.length
                                      ? j(
                                          A.map((ce) => {
                                            const Ge = Yr(f) ?? E,
                                              ut = qr(ce, Ge);
                                            return Yt(
                                              (function x(d) {
                                                return d && nn(d.canDeactivate);
                                              })(ut)
                                                ? ut.canDeactivate(d, f, l, p)
                                                : Ge.runInContext(() =>
                                                    ut(d, f, l, p)
                                                  )
                                            ).pipe(We());
                                          })
                                        ).pipe(M())
                                      : j(!0);
                                  })(E.component, E.route, l, f, p)
                                ),
                                We((E) => !0 !== E, !0)
                              );
                            })(F, p, E, d).pipe(
                              (0, Re.z)((ce) =>
                                ce &&
                                (function St(d) {
                                  return 'boolean' == typeof d;
                                })(ce)
                                  ? (function Qe(d, f, l, p) {
                                      return (0, P.D)(f).pipe(
                                        nt((E) =>
                                          _e(
                                            (function $t(d, f) {
                                              return (
                                                null !== d && f && f(new Wt(d)),
                                                j(!0)
                                              );
                                            })(E.route.parent, p),
                                            (function Ct(d, f) {
                                              return (
                                                null !== d && f && f(new Jr(d)),
                                                j(!0)
                                              );
                                            })(E.route, p),
                                            (function Qt(d, f, l) {
                                              const p = f[f.length - 1],
                                                A = f
                                                  .slice(0, f.length - 1)
                                                  .reverse()
                                                  .map((F) =>
                                                    (function Un(d) {
                                                      const f = d.routeConfig
                                                        ? d.routeConfig
                                                            .canActivateChild
                                                        : null;
                                                      return f && 0 !== f.length
                                                        ? { node: d, guards: f }
                                                        : null;
                                                    })(F)
                                                  )
                                                  .filter((F) => null !== F)
                                                  .map((F) =>
                                                    se(() =>
                                                      j(
                                                        F.guards.map((Ge) => {
                                                          const ut =
                                                              Yr(F.node) ?? l,
                                                            yt = qr(Ge, ut);
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
                                                          ).pipe(We());
                                                        })
                                                      ).pipe(M())
                                                    )
                                                  );
                                              return j(A).pipe(M());
                                            })(d, E.path, l),
                                            (function qt(d, f, l) {
                                              const p = f.routeConfig
                                                ? f.routeConfig.canActivate
                                                : null;
                                              if (!p || 0 === p.length)
                                                return j(!0);
                                              const E = p.map((A) =>
                                                se(() => {
                                                  const F = Yr(f) ?? l,
                                                    ce = qr(A, F);
                                                  return Yt(
                                                    (function C(d) {
                                                      return (
                                                        d && nn(d.canActivate)
                                                      );
                                                    })(ce)
                                                      ? ce.canActivate(f, d)
                                                      : F.runInContext(() =>
                                                          ce(f, d)
                                                        )
                                                  ).pipe(We());
                                                })
                                              );
                                              return j(E).pipe(M());
                                            })(d, E.route, l)
                                          )
                                        ),
                                        We((E) => !0 !== E, !0)
                                      );
                                    })(p, A, d, f)
                                  : j(ce)
                              ),
                              (0, ie.U)((ce) => ({ ...l, guardsResult: ce }))
                            );
                      });
                    })(this.environmentInjector, (F) => this.events.next(F)),
                    (0, Ke.b)((F) => {
                      if (
                        ((p.guardsResult = F.guardsResult), Sn(F.guardsResult))
                      )
                        throw Zo(0, F.guardsResult);
                      const ce = new _r(
                        F.id,
                        this.urlSerializer.serialize(F.extractedUrl),
                        this.urlSerializer.serialize(F.urlAfterRedirects),
                        F.targetSnapshot,
                        !!F.guardsResult
                      );
                      this.events.next(ce);
                    }),
                    (0, q.h)(
                      (F) =>
                        !!F.guardsResult ||
                        (l.restoreHistory(F),
                        this.cancelNavigationTransition(F, '', 3, l),
                        !1)
                    ),
                    ui((F) => {
                      if (F.guards.canActivateChecks.length)
                        return j(F).pipe(
                          (0, Ke.b)((ce) => {
                            const Ge = new Zn(
                              ce.id,
                              this.urlSerializer.serialize(ce.extractedUrl),
                              this.urlSerializer.serialize(
                                ce.urlAfterRedirects
                              ),
                              ce.targetSnapshot
                            );
                            this.events.next(Ge);
                          }),
                          (0, X.w)((ce) => {
                            let Ge = !1;
                            return j(ce).pipe(
                              (function qn(d, f) {
                                return (0, Re.z)((l) => {
                                  const {
                                    targetSnapshot: p,
                                    guards: { canActivateChecks: E },
                                  } = l;
                                  if (!E.length) return j(l);
                                  let A = 0;
                                  return (0, P.D)(E).pipe(
                                    nt((F) =>
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
                                            if (0 === E.length) return j({});
                                            const A = {};
                                            return (0, P.D)(E).pipe(
                                              (0, Re.z)((F) =>
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
                                                })(d[F], f, l, p).pipe(
                                                  We(),
                                                  (0, Ke.b)((ce) => {
                                                    A[F] = ce;
                                                  })
                                                )
                                              ),
                                              Ft(1),
                                              (function Lt(d) {
                                                return (0, ie.U)(() => d);
                                              })(A),
                                              ft((F) => (c(F) ? le.E : W(F)))
                                            );
                                          })(A, d, f, p).pipe(
                                            (0, ie.U)(
                                              (F) => (
                                                (d._resolvedData = F),
                                                (d.data = kr(d, l).resolve),
                                                E &&
                                                  So(E) &&
                                                  (d.data[Ln] = E.title),
                                                null
                                              )
                                            )
                                          )
                                        );
                                      })(F.route, p, d, f)
                                    ),
                                    (0, Ke.b)(() => A++),
                                    Ft(1),
                                    (0, Re.z)((F) =>
                                      A === E.length ? j(l) : le.E
                                    )
                                  );
                                });
                              })(
                                l.paramsInheritanceStrategy,
                                this.environmentInjector
                              ),
                              (0, Ke.b)({
                                next: () => (Ge = !0),
                                complete: () => {
                                  Ge ||
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
                            const Ge = new lr(
                              ce.id,
                              this.urlSerializer.serialize(ce.extractedUrl),
                              this.urlSerializer.serialize(
                                ce.urlAfterRedirects
                              ),
                              ce.targetSnapshot
                            );
                            this.events.next(Ge);
                          })
                        );
                    }),
                    ui((F) => {
                      const ce = (Ge) => {
                        const ut = [];
                        Ge.routeConfig?.loadComponent &&
                          !Ge.routeConfig._loadedComponent &&
                          ut.push(
                            this.configLoader
                              .loadComponent(Ge.routeConfig)
                              .pipe(
                                (0, Ke.b)((yt) => {
                                  Ge.component = yt;
                                }),
                                (0, ie.U)(() => {})
                              )
                          );
                        for (const yt of Ge.children) ut.push(...ce(yt));
                        return ut;
                      };
                      return me(ce(F.targetSnapshot.root)).pipe(
                        Pe(),
                        (0, L.q)(1)
                      );
                    }),
                    ui(() => l.afterPreactivation()),
                    (0, ie.U)((F) => {
                      const ce = (function Ko(d, f, l) {
                        const p = jr(d, f._root, l ? l._root : void 0);
                        return new Ar(p, f);
                      })(
                        l.routeReuseStrategy,
                        F.targetSnapshot,
                        F.currentRouterState
                      );
                      return (p = { ...F, targetRouterState: ce });
                    }),
                    (0, Ke.b)((F) => {
                      (l.currentUrlTree = F.urlAfterRedirects),
                        (l.rawUrlTree = l.urlHandlingStrategy.merge(
                          F.urlAfterRedirects,
                          F.rawUrl
                        )),
                        (l.routerState = F.targetRouterState),
                        'deferred' === l.urlUpdateStrategy &&
                          (F.extras.skipLocationChange ||
                            l.setBrowserUrl(l.rawUrlTree, F),
                          (l.browserUrlTree = F.urlAfterRedirects));
                    }),
                    ((d, f, l) =>
                      (0, ie.U)(
                        (p) => (
                          new Jn(
                            f,
                            p.targetRouterState,
                            p.currentRouterState,
                            l
                          ).activate(d),
                          p
                        )
                      ))(this.rootContexts, l.routeReuseStrategy, (F) =>
                      this.events.next(F)
                    ),
                    (0, Ke.b)({
                      next: (F) => {
                        (E = !0),
                          (this.lastSuccessfulNavigation =
                            this.currentNavigation),
                          (l.navigated = !0),
                          this.events.next(
                            new Nt(
                              F.id,
                              this.urlSerializer.serialize(F.extractedUrl),
                              this.urlSerializer.serialize(l.currentUrlTree)
                            )
                          ),
                          l.titleStrategy?.updateTitle(
                            F.targetRouterState.snapshot
                          ),
                          F.resolve(!0);
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
                    ft((F) => {
                      if (((A = !0), ro(F))) {
                        Do(F) || ((l.navigated = !0), l.restoreHistory(p, !0));
                        const ce = new Ht(
                          p.id,
                          this.urlSerializer.serialize(p.extractedUrl),
                          F.message,
                          F.cancellationCode
                        );
                        if ((this.events.next(ce), Do(F))) {
                          const Ge = l.urlHandlingStrategy.merge(
                              F.url,
                              l.rawUrlTree
                            ),
                            ut = {
                              skipLocationChange: p.extras.skipLocationChange,
                              replaceUrl:
                                'eager' === l.urlUpdateStrategy || ws(p.source),
                            };
                          l.scheduleNavigation(Ge, 'imperative', null, ut, {
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
                          F,
                          p.targetSnapshot ?? void 0
                        );
                        this.events.next(ce);
                        try {
                          p.resolve(l.errorHandler(F));
                        } catch (Ge) {
                          p.reject(Ge);
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
            const F = new Ht(
              l.id,
              this.urlSerializer.serialize(l.extractedUrl),
              p,
              E
            );
            this.events.next(F), l.resolve(!1);
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
                (this.afterPreactivation = () => j(void 0)),
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
                (this.location = (0, o.f3M)(Ie.Ye)),
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
                      const F = this.parseUrl(l.url);
                      this.scheduleNavigation(F, p, A, E);
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
                  fragment: F,
                  queryParamsHandling: ce,
                  preserveFragment: Ge,
                } = p,
                ut = E || this.routerState.root,
                yt = Ge ? this.currentUrlTree.fragment : F;
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
            scheduleNavigation(l, p, E, A, F) {
              if (this.disposed) return Promise.resolve(!1);
              let ce, Ge, ut, yt;
              return (
                F
                  ? ((ce = F.resolve), (Ge = F.reject), (ut = F.promise))
                  : (ut = new Promise((Et, Pn) => {
                      (ce = Et), (Ge = Pn);
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
                  reject: Ge,
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
            constructor(l, p, E, A, F, ce) {
              (this.router = l),
                (this.route = p),
                (this.tabIndexAttribute = E),
                (this.renderer = A),
                (this.el = F),
                (this.locationStrategy = ce),
                (this._preserveFragment = !1),
                (this._skipLocationChange = !1),
                (this._replaceUrl = !1),
                (this.href = null),
                (this.commands = null),
                (this.onChanges = new G.x());
              const Ge = F.nativeElement.tagName;
              (this.isAnchorElement = 'A' === Ge || 'AREA' === Ge),
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
            onClick(l, p, E, A, F) {
              return (
                !!(
                  null === this.urlTree ||
                  (this.isAnchorElement &&
                    (0 !== l ||
                      p ||
                      E ||
                      A ||
                      F ||
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
                o.Y36(Ie.S$)
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
            constructor(l, p, E, A, F) {
              (this.router = l),
                (this.element = p),
                (this.renderer = E),
                (this.cdr = A),
                (this.link = F),
                (this.classes = []),
                (this.isActive = !1),
                (this.routerLinkActiveOptions = { exact: !1 }),
                (this.isActiveChange = new o.vpe()),
                (this.routerEventsSubscription = l.events.subscribe((ce) => {
                  ce instanceof Nt && this.update();
                }));
            }
            ngAfterContentInit() {
              j(this.links.changes, j(null))
                .pipe((0, te.J)())
                .subscribe((l) => {
                  this.update(), this.subscribeToEachLinkOnChanges();
                });
            }
            subscribeToEachLinkOnChanges() {
              this.linkInputChangesSubscription?.unsubscribe();
              const l = [...this.links.toArray(), this.link]
                .filter((p) => !!p)
                .map((p) => p.onChanges);
              this.linkInputChangesSubscription = (0, P.D)(l)
                .pipe((0, te.J)())
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
              return p().pipe(ft(() => j(null)));
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
            constructor(l, p, E, A, F) {
              (this.router = l),
                (this.injector = E),
                (this.preloadingStrategy = A),
                (this.loader = F);
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  (0, q.h)((l) => l instanceof Nt),
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
                const F = A._injector ?? l,
                  ce = A._loadedInjector ?? F;
                (A.loadChildren && !A._loadedRoutes && void 0 === A.canLoad) ||
                (A.loadComponent && !A._loadedComponent)
                  ? E.push(this.preloadConfig(F, A))
                  : (A.children || A._loadedRoutes) &&
                    E.push(
                      this.processRoutes(ce, A.children ?? A._loadedRoutes)
                    );
              }
              return (0, P.D)(E).pipe((0, te.J)());
            }
            preloadConfig(l, p) {
              return this.preloadingStrategy.preload(p, () => {
                let E;
                E =
                  p.loadChildren && void 0 === p.canLoad
                    ? this.loader.loadChildren(l, p)
                    : j(null);
                const A = E.pipe(
                  (0, Re.z)((F) =>
                    null === F
                      ? j(void 0)
                      : ((p._loadedRoutes = F.routes),
                        (p._loadedInjector = F.injector),
                        this.processRoutes(F.injector ?? l, F.routes))
                  )
                );
                if (p.loadComponent && !p._loadedComponent) {
                  const F = this.loader.loadComponent(p);
                  return (0, P.D)([A, F]).pipe((0, te.J)());
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
          constructor(l, p, E, A, F = {}) {
            (this.urlSerializer = l),
              (this.transitions = p),
              (this.viewportScroller = E),
              (this.zone = A),
              (this.options = F),
              (this.lastId = 0),
              (this.lastSource = 'imperative'),
              (this.restoredId = 0),
              (this.store = {}),
              (F.scrollPositionRestoration =
                F.scrollPositionRestoration || 'disabled'),
              (F.anchorScrolling = F.anchorScrolling || 'disabled');
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
          Ie.Ye,
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
                  ? { provide: Ie.S$, useClass: Ie.Do }
                  : { provide: Ie.S$, useClass: Ie.b0 },
                {
                  provide: fi,
                  useFactory: () => {
                    const d = (0, o.f3M)(Ie.EM),
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
                    const l = f.get(Ie.V_, Promise.resolve());
                    return () =>
                      l.then(
                        () =>
                          new Promise((E) => {
                            const A = f.get(yr),
                              F = f.get(zi);
                            (function p(E) {
                              f.get(yr)
                                .events.pipe(
                                  (0, q.h)(
                                    (F) =>
                                      F instanceof Nt ||
                                      F instanceof Ht ||
                                      F instanceof Hn
                                  ),
                                  (0, ie.U)(
                                    (F) =>
                                      F instanceof Nt ||
                                      (F instanceof Ht &&
                                        (0 === F.code || 1 === F.code) &&
                                        null)
                                  ),
                                  (0, q.h)((F) => null !== F),
                                  (0, L.q)(1)
                                )
                                .subscribe(() => {
                                  E();
                                });
                            })(() => {
                              E(!0);
                            }),
                              (A.afterPreactivation = () => (
                                E(!0), F.closed ? j(void 0) : F
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
    5861: (at, $e, S) => {
      'use strict';
      function o(U, j, pe, Le, oe, xe, Se) {
        try {
          var Fe = U[xe](Se),
            ve = Fe.value;
        } catch (be) {
          return void pe(be);
        }
        Fe.done ? j(ve) : Promise.resolve(ve).then(Le, oe);
      }
      function P(U) {
        return function () {
          var j = this,
            pe = arguments;
          return new Promise(function (Le, oe) {
            var xe = U.apply(j, pe);
            function Se(ve) {
              o(xe, Le, oe, Se, Fe, 'next', ve);
            }
            function Fe(ve) {
              o(xe, Le, oe, Se, Fe, 'throw', ve);
            }
            Se(void 0);
          });
        };
      }
      S.d($e, { Z: () => P });
    },
  },
  (at) => {
    at((at.s = 383));
  },
]);
