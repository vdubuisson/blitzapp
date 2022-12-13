(self.webpackChunkloup_garou_mj = self.webpackChunkloup_garou_mj || []).push([
  [179],
  {
    5035: (at, $e, T) => {
      'use strict';
      T.d($e, {
        Br: () => Jn,
        w: () => ct,
        We: () => kt,
        eh: () => tr,
        dr: () => Bn,
        YG: () => on,
        Sm: () => sn,
        nz: () => hn,
        W2: () => _e,
        Gu: () => Zt,
        gu: () => an,
        pK: () => pn,
        Ie: () => On,
        Q$: () => Cr,
        q_: () => sr,
        z0: () => yn,
        fG: () => Tt,
        uN: () => O,
        B7: () => U,
        se: () => K,
        Nh: () => ie,
        oz: () => ke,
        jP: () => oo,
        t9: () => Ht,
        n0: () => Hn,
        yW: () => Wt,
        Bs: () => Jr,
        wd: () => xo,
        sr: () => jr,
        Pc: () => Se,
        r4: () => b,
        U5: () => Vt,
        YI: () => Eo,
        QI: () => Yt,
        j9: () => At,
      });
      var o = T(8256),
        L = T(433),
        z = T(655),
        W = T(8421),
        pe = T(9751),
        Fe = T(5577),
        ne = T(1144),
        xe = T(576),
        we = T(3268);
      const Oe = ['addListener', 'removeListener'],
        ye = ['addEventListener', 'removeEventListener'],
        be = ['on', 'off'];
      function se(a, _, c, g) {
        if (((0, xe.m)(c) && ((g = c), (c = void 0)), g))
          return se(a, _, c).pipe((0, we.Z)(g));
        const [M, Ie] = (function fe(a) {
          return (
            (0, xe.m)(a.addEventListener) && (0, xe.m)(a.removeEventListener)
          );
        })(a)
          ? ye.map((Je) => (Qe) => a[Je](_, Qe, c))
          : (function ge(a) {
              return (0, xe.m)(a.addListener) && (0, xe.m)(a.removeListener);
            })(a)
          ? Oe.map(ee(a, _))
          : (function Le(a) {
              return (0, xe.m)(a.on) && (0, xe.m)(a.off);
            })(a)
          ? be.map(ee(a, _))
          : [];
        if (!M && (0, ne.z)(a))
          return (0, Fe.z)((Je) => se(Je, _, c))((0, W.Xf)(a));
        if (!M) throw new TypeError('Invalid event target');
        return new pe.y((Je) => {
          const Qe = (...Ct) => Je.next(1 < Ct.length ? Ct : Ct[0]);
          return M(Qe), () => Ie(Qe);
        });
      }
      function ee(a, _) {
        return (c) => (g) => a[c](_, g);
      }
      var J = T(7579),
        Be = T(1135),
        de = T(3165),
        Y = (T(8834), T(3953), T(3880), T(1911), T(9658)),
        oe = T(5730),
        ce = T(697),
        V = (T(4292), T(1312)),
        B = (T(3457), T(4349), T(1308)),
        Ve = T(9300),
        He = T(3900),
        Ee = T(4671),
        Me = T(4482),
        We = T(5403);
      function Ke(a, _) {
        return a === _;
      }
      var ft = T(6895);
      const lt = Y.i,
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
              c = this.injector.get(L.a5);
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
              ].forEach((Ie) => {
                if (typeof g[Ie] < 'u') {
                  const Je = g[Ie].bind(g);
                  g[Ie] = (...Qe) => {
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
                o.NdJ('ionBlur', function (Ie) {
                  return g._handleBlurEvent(Ie.target);
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
            null !== M && jt(M, 'ng-') && c.push(`ion-${M.substring(3)}`);
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
        jt = (a, _) => a.substring(0, _.length) === _;
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
                  o.NdJ('ionChange', function (Ie) {
                    return g._handleIonChange(Ie.target);
                  });
              },
              features: [
                o._Bn([{ provide: L.JU, useExisting: a, multi: !0 }]),
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
                  o.NdJ('ionSelect', function (Ie) {
                    return g._handleIonSelect(Ie.target);
                  });
              },
              features: [
                o._Bn([{ provide: L.JU, useExisting: a, multi: !0 }]),
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
                  o.NdJ('ionChange', function (Ie) {
                    return g._handleChangeEvent(Ie.target);
                  });
              },
              features: [
                o._Bn([{ provide: L.JU, useExisting: a, multi: !0 }]),
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
                  o.NdJ('ionChange', function (Ie) {
                    return g._handleInputEvent(Ie.target);
                  });
              },
              features: [
                o._Bn([{ provide: L.JU, useExisting: a, multi: !0 }]),
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
          c.forEach((g) => (a[g] = se(_, g)));
        };
      function tt(a) {
        return function (c) {
          const { defineCustomElementFn: g, inputs: M, methods: Ie } = a;
          return void 0 !== g && g(), M && un(c, M), Ie && In(c, Ie), c;
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
            (a = (0, z.gn)(
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
            (a = (0, z.gn)(
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
            (a = (0, z.gn)([tt({ defineCustomElementFn: void 0 })], a)),
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
            (a = (0, z.gn)(
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
            (a = (0, z.gn)(
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
            (a = (0, z.gn)(
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
        _e = (() => {
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
            (a = (0, z.gn)(
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
            (a = (0, z.gn)(
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
            (a = (0, z.gn)(
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
            (a = (0, z.gn)(
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
            (a = (0, z.gn)(
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
            (a = (0, z.gn)(
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
            (a = (0, z.gn)(
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
            (a = (0, z.gn)(
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
            (a = (0, z.gn)(
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
        O = (() => {
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
            (a = (0, z.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, z.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, z.gn)(
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
              ngContentSelectors: Ye,
              decls: 1,
              vars: 0,
              template: function (c, g) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, z.gn)([tt({ defineCustomElementFn: void 0 })], a)),
            a
          );
        })(),
        ke = (() => {
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
            (a = (0, z.gn)(
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
            (a = (0, z.gn)(
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
            (a = (0, z.gn)(
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
            (a = (0, z.gn)(
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
            (a = (0, z.gn)([tt({ defineCustomElementFn: void 0 })], a)),
            a
          );
        })(),
        xo = (() => {
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
            (a = (0, z.gn)(
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
        jr = (() => {
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
            (a = (0, z.gn)(
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
        constructor(_, c, g, M, Ie) {
          (this.resolverOrInjector = _),
            (this.injector = c),
            (this.location = g),
            (this.appRef = M),
            (this.zone = Ie),
            (this.elRefMap = new WeakMap()),
            (this.elEventsMap = new WeakMap());
        }
        attachViewToDom(_, c, g, M) {
          return this.zone.run(
            () =>
              new Promise((Ie) => {
                Ie(
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
                  const Ie = this.elEventsMap.get(c);
                  Ie && (Ie(), this.elEventsMap.delete(c));
                }
                g();
              })
          );
        }
      }
      const tn = (a, _, c, g, M, Ie, Je, Qe, Ct, $t, qt) => {
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
          const Rr = Qt.instance,
            Fr = Qt.location.nativeElement;
          if (($t && Object.assign(Rr, $t), qt))
            for (const fn of qt) Fr.classList.add(fn);
          const bo = Ar(a, Rr, Fr);
          return (
            Qe.appendChild(Fr),
            g || M.attachView(Qt.hostView),
            Qt.changeDetectorRef.reattach(),
            Ie.set(Fr, Qt),
            Je.set(Fr, bo),
            Fr
          );
        },
        Fn = [ce.L, ce.a, ce.b, ce.c, ce.d],
        Ar = (a, _, c) =>
          a.run(() => {
            const g = Fn.filter((M) => 'function' == typeof _[M]).map((M) => {
              const Ie = (Je) => _[M](Je.detail);
              return (
                c.addEventListener(M, Ie), () => c.removeEventListener(M, Ie)
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
      class Ur {
        constructor(_, c, g, M, Ie, Je) {
          (this.containerEl = c),
            (this.router = g),
            (this.navCtrl = M),
            (this.zone = Ie),
            (this.location = Je),
            (this.views = []),
            (this.skipTransition = !1),
            (this.nextId = 0),
            (this.tabsPrefix = void 0 !== _ ? no(_) : void 0);
        }
        createView(_, c) {
          var g;
          const M = eo(this.router, c),
            Ie =
              null === (g = _?.location) || void 0 === g
                ? void 0
                : g.nativeElement,
            Je = Ar(this.zone, _.instance, Ie);
          return {
            id: this.nextId++,
            stackId: Fo(this.tabsPrefix, M),
            unlistenEvents: Je,
            element: Ie,
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
          let { direction: Ie, animation: Je, animationBuilder: Qe } = M;
          const Ct = this.activeView,
            $t = ((a, _) => !_ || a.stackId !== _.stackId)(_, Ct);
          $t && ((Ie = 'back'), (Je = void 0));
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
          const Rr = this.views.includes(_),
            Fr = this.insertView(_, Ie);
          Rr || _.ref.changeDetectorRef.detectChanges();
          const bo = _.animationBuilder;
          return (
            void 0 === Qe && 'back' === Ie && !$t && void 0 !== bo && (Qe = bo),
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
                      direction: Ie,
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
            const Ie = this.getStack(c);
            if (Ie.length <= _) return Promise.resolve(!1);
            const Je = Ie[Ie.length - _ - 1];
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
        transition(_, c, g, M, Ie, Je) {
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
                progressAnimation: Ie,
                animationBuilder: Je,
              })
            : Promise.resolve(!1);
        }
        wait(_) {
          return (0, z.mG)(this, void 0, void 0, function* () {
            void 0 !== this.runningTask &&
              (yield this.runningTask, (this.runningTask = void 0));
            const c = (this.runningTask = _());
            return c.finally(() => (this.runningTask = void 0)), c;
          });
        }
      }
      const Di = (a, _, c, g, M) =>
          'function' == typeof requestAnimationFrame
            ? new Promise((Ie) => {
                requestAnimationFrame(() => {
                  li(a, _, c, g, M), Ie();
                });
              })
            : Promise.resolve(),
        li = (a, _, c, g, M) => {
          M.run(() => c.filter((Ie) => !_.includes(Ie)).forEach(Ko)),
            _.forEach((Ie) => {
              const Qe = g.path().split('?')[0].split('#')[0];
              if (Ie !== a && Ie.url !== Qe) {
                const Ct = Ie.element;
                Ct.setAttribute('aria-hidden', 'true'),
                  Ct.classList.add('ion-page-hidden'),
                  Ie.ref.changeDetectorRef.detach();
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
              (this.backButton = new J.x()),
              (this.keyboardDidShow = new J.x()),
              (this.keyboardDidHide = new J.x()),
              (this.pause = new J.x()),
              (this.resume = new J.x()),
              (this.resize = new J.x()),
              g.run(() => {
                var M;
                let Ie;
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
                    Ie = Je;
                  })),
                  null !== (M = this.win) && void 0 !== M && M.cordova
                    ? c.addEventListener(
                        'deviceready',
                        () => {
                          Ie('cordova');
                        },
                        { once: !0 }
                      )
                    : Ie('dom');
              });
          }
          is(c) {
            return (0, Y.a)(this.win, c);
          }
          platforms() {
            return (0, Y.g)(this.win);
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
          constructor(c, g, M, Ie) {
            (this.location = g),
              (this.serializer = M),
              (this.router = Ie),
              (this.direction = Qo),
              (this.animated = cr),
              (this.guessDirection = 'forward'),
              (this.lastNavId = -1),
              Ie &&
                Ie.events.subscribe((Je) => {
                  if (Je instanceof de.OD) {
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
            return (0, z.mG)(this, void 0, void 0, function* () {
              let c = this.topOutlet;
              for (; c && !(yield c.pop()); ) c = c.parentOutlet;
            });
          }
          setDirection(c, g, M, Ie) {
            (this.direction = c),
              (this.animated = vr(c, g, M)),
              (this.animationBuilder = Ie);
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
              o.LFG(de.Hx),
              o.LFG(de.F0, 8)
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
          constructor(c, g, M, Ie, Je, Qe, Ct, $t, qt, Qt, zn, Rr, Fr) {
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
              (this.currentActivatedRoute$ = new Be.X(null)),
              (this.stackEvents = new o.vpe()),
              (this.activateEvents = new o.vpe()),
              (this.deactivateEvents = new o.vpe()),
              (this.nativeEl = qt.nativeElement),
              (this.name = M || de.eC),
              (this.tabsPrefix = 'true' === Ie ? eo(Qt, Rr) : void 0),
              (this.stackCtrl = new Ur(
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
            new Promise((c) => (0, oe.c)(this.nativeEl, c)).then(() => {
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
                  const Ie = g.route.snapshot;
                  (this.activatedView.savedExtras.queryParams = Ie.queryParams),
                    (this.activatedView.savedExtras.fragment = Ie.fragment);
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
            let Ie,
              Je = this.stackCtrl.getExistingView(c);
            if (Je) {
              Ie = this.activated = Je.ref;
              const Qe = Je.savedData;
              Qe && (this.getContext().children.contexts = Qe),
                this.updateActivatedRouteProxy(Ie.instance, c);
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
                $t = new Be.X(null),
                qt = this.createActivatedRouteProxy($t, c),
                Qt = new Br(qt, Ct, this.location.injector),
                zn =
                  null !== (M = Qe.routeConfig.component) && void 0 !== M
                    ? M
                    : Qe.component;
              if ((g = g || this.componentFactoryResolver) && cn(g)) {
                const Rr = g.resolveComponentFactory(zn);
                Ie = this.activated = this.location.createComponent(
                  Rr,
                  this.location.length,
                  Qt
                );
              } else
                Ie = this.activated = this.location.createComponent(zn, {
                  index: this.location.length,
                  injector: Qt,
                  environmentInjector: g ?? this.environmentInjector,
                });
              $t.next(Ie.instance),
                (Je = this.stackCtrl.createView(this.activated, c)),
                this.proxyMap.set(Ie.instance, qt),
                this.currentActivatedRoute$.next({
                  component: Ie.instance,
                  activatedRoute: c,
                });
            }
            (this.activatedView = Je),
              this.navCtrl.setTopOutlet(this),
              this.stackCtrl.setActive(Je).then((Qe) => {
                this.activateEvents.emit(Ie.instance),
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
            const M = new de.gz();
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
              (0, Ve.h)((M) => !!M),
              (0, He.w)((M) =>
                this.currentActivatedRoute$.pipe(
                  (0, Ve.h)((Ie) => null !== Ie && Ie.component === M),
                  (0, He.w)((Ie) => Ie && Ie.activatedRoute[g]),
                  (function nt(a, _ = Ee.y) {
                    return (
                      (a = a ?? Ke),
                      (0, Me.e)((c, g) => {
                        let M,
                          Ie = !0;
                        c.subscribe(
                          (0, We.x)(g, (Je) => {
                            const Qe = _(Je);
                            (Ie || !a(M, Qe)) &&
                              ((Ie = !1), (M = Qe), g.next(Je));
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
              o.Y36(de.y6),
              o.Y36(o.s_b),
              o.$8M('name'),
              o.$8M('tabs'),
              o.Y36(yo),
              o.Y36(mr),
              o.Y36(o._Vd, 8),
              o.Y36(ft.Ye),
              o.Y36(o.SBq),
              o.Y36(de.F0),
              o.Y36(o.R0b),
              o.Y36(de.gz),
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
          return _ === de.gz
            ? this.route
            : _ === de.y6
            ? this.childContexts
            : this.parent.get(_, c);
        }
      }
      let Eo = (() => {
        class a {
          constructor(c, g, M, Ie, Je) {
            (this.locationStrategy = c),
              (this.navCtrl = g),
              (this.elementRef = M),
              (this.router = Ie),
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
              o.Y36(de.F0),
              o.Y36(de.rH, 8)
            );
          }),
          (a.ɵdir = o.lG2({
            type: a,
            selectors: [['', 'routerLink', '', 5, 'a', 5, 'area']],
            hostBindings: function (c, g) {
              1 & c &&
                o.NdJ('click', function (Ie) {
                  return g.onClick(Ie);
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
      class jn {}
      let qr = (() => {
          class a extends Yr {
            constructor(c, g, M, Ie) {
              super(V.m),
                (this.angularDelegate = c),
                (this.resolver = g),
                (this.injector = M),
                (this.environmentInjector = Ie);
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
                o.LFG(jn, 8)
              );
            }),
            (a.ɵprov = o.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        xr = (() => {
          class a extends Yr {
            constructor(c, g, M, Ie) {
              super(V.c),
                (this.angularDelegate = c),
                (this.resolver = g),
                (this.injector = M),
                (this.environmentInjector = Ie);
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
                o.LFG(jn, 8)
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
            Ie = Object.keys(g),
            Je = Object.keys(M);
          if (Ie.length !== Je.length) return !1;
          for (const Qe of Ie) if (M[Qe] !== g[Qe]) return !1;
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
              _zoneGate: (Ie) => c.run(Ie),
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
                a.push(T.e(6748).then(T.t.bind(T, 723, 23))),
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
                  a.push(T.e(2214).then(T.t.bind(T, 4144, 23)));
            }
            return Promise.all(a);
          })().then(() =>
            ((a, _) =>
              typeof window > 'u'
                ? Promise.resolve()
                : (0, B.p)().then(
                    () => (
                      lt(),
                      (0, B.b)(
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
              jmp: (Ie) => c.runOutsideAngular(Ie),
              ael(Ie, Je, Qe, Ct) {
                Ie[M](Je, Qe, Ct);
              },
              rel(Ie, Je, Qe, Ct) {
                Ie.removeEventListener(Je, Qe, Ct);
              },
            })
          );
        }
      };
      let Se = (() => {
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
          (a.ɵinj = o.cJS({ providers: [vn, qr, xr], imports: [[ft.ez]] })),
          a
        );
      })();
    },
    8834: (at, $e, T) => {
      'use strict';
      T.d($e, { c: () => Le });
      var o = T(5730),
        L = T(3457);
      let z;
      const pe = (fe) =>
          fe.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
        Fe = (fe) => {
          if (void 0 === z) {
            const Be = void 0 !== fe.style.webkitAnimationName;
            z = void 0 === fe.style.animationName && Be ? '-webkit-' : '';
          }
          return z;
        },
        ne = (fe, J, Be) => {
          const de = J.startsWith('animation') ? Fe(fe) : '';
          fe.style.setProperty(de + J, Be);
        },
        xe = (fe, J) => {
          const Be = J.startsWith('animation') ? Fe(fe) : '';
          fe.style.removeProperty(Be + J);
        },
        ye = [],
        ge = (fe = [], J) => {
          if (void 0 !== J) {
            const Be = Array.isArray(J) ? J : [J];
            return [...fe, ...Be];
          }
          return fe;
        },
        Le = (fe) => {
          let J,
            Be,
            de,
            me,
            ue,
            Ne,
            k,
            ve,
            re,
            Ve,
            He,
            nt,
            Ke,
            le = [],
            Y = [],
            oe = [],
            ce = !1,
            V = {},
            j = [],
            S = [],
            B = {},
            q = 0,
            Pe = !1,
            he = !1,
            Ee = !0,
            Me = !1,
            We = !0,
            ft = !1;
          const bt = fe,
            lt = [],
            Ft = [],
            Mt = [],
            Ye = [],
            Lt = [],
            bn = [],
            Un = [],
            st = [],
            Ln = [],
            Pt = [],
            cn =
              'function' == typeof AnimationEffect ||
              (void 0 !== L.w && 'function' == typeof L.w.AnimationEffect),
            Xt =
              'function' == typeof Element &&
              'function' == typeof Element.prototype.animate &&
              cn,
            Jt = () => Pt,
            Vt = (N, Q) => (
              (Q?.oneTimeCallback ? Ft : lt).push({ c: N, o: Q }), Ke
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
                  N.forEach((Q) => {
                    xe(Q, 'animation-name'),
                      xe(Q, 'animation-duration'),
                      xe(Q, 'animation-timing-function'),
                      xe(Q, 'animation-iteration-count'),
                      xe(Q, 'animation-delay'),
                      xe(Q, 'animation-play-state'),
                      xe(Q, 'animation-fill-mode'),
                      xe(Q, 'animation-direction');
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
            Ut = () => (void 0 !== ue ? ue : k ? k.getFill() : 'both'),
            on = () =>
              void 0 !== re
                ? re
                : void 0 !== Ne
                ? Ne
                : k
                ? k.getDirection()
                : 'normal',
            sn = () =>
              Pe ? 'linear' : void 0 !== de ? de : k ? k.getEasing() : 'linear',
            Dt = () =>
              he
                ? 0
                : void 0 !== Ve
                ? Ve
                : void 0 !== Be
                ? Be
                : k
                ? k.getDuration()
                : 0,
            wn = () => (void 0 !== me ? me : k ? k.getIterations() : 1),
            An = () =>
              void 0 !== He ? He : void 0 !== J ? J : k ? k.getDelay() : 0,
            an = () => {
              0 !== q &&
                (q--,
                0 === q &&
                  ((() => {
                    yn(), st.forEach((Te) => Te()), Ln.forEach((Te) => Te());
                    const N = Ee ? 1 : 0,
                      Q = j,
                      ie = S,
                      ke = B;
                    Mt.forEach((Te) => {
                      const rt = Te.classList;
                      Q.forEach((ot) => rt.add(ot)),
                        ie.forEach((ot) => rt.remove(ot));
                      for (const ot in ke)
                        ke.hasOwnProperty(ot) && ne(Te, ot, ke[ot]);
                    }),
                      lt.forEach((Te) => Te.c(N, Ke)),
                      Ft.forEach((Te) => Te.c(N, Ke)),
                      (Ft.length = 0),
                      (We = !0),
                      Ee && (Me = !0),
                      (Ee = !0);
                  })(),
                  k && k.animationFinish()));
            },
            ln = (N = !0) => {
              un();
              const Q = ((fe) => (
                fe.forEach((J) => {
                  for (const Be in J)
                    if (J.hasOwnProperty(Be)) {
                      const de = J[Be];
                      if ('easing' === Be)
                        (J['animation-timing-function'] = de), delete J[Be];
                      else {
                        const me = pe(Be);
                        me !== Be && ((J[me] = de), delete J[Be]);
                      }
                    }
                }),
                fe
              ))(le);
              Mt.forEach((ie) => {
                if (Q.length > 0) {
                  const ke = ((fe = []) =>
                    fe
                      .map((J) => {
                        const Be = J.offset,
                          de = [];
                        for (const me in J)
                          J.hasOwnProperty(me) &&
                            'offset' !== me &&
                            de.push(`${me}: ${J[me]};`);
                        return `${100 * Be}% { ${de.join(' ')} }`;
                      })
                      .join(' '))(Q);
                  nt =
                    void 0 !== fe
                      ? fe
                      : ((fe) => {
                          let J = ye.indexOf(fe);
                          return (
                            J < 0 && (J = ye.push(fe) - 1), `ion-animation-${J}`
                          );
                        })(ke);
                  const Te = ((fe, J, Be) => {
                    var de;
                    const me = ((fe) => {
                        const J =
                          void 0 !== fe.getRootNode ? fe.getRootNode() : fe;
                        return J.head || J;
                      })(Be),
                      ue = Fe(Be),
                      Ne = me.querySelector('#' + fe);
                    if (Ne) return Ne;
                    const le = (
                      null !== (de = Be.ownerDocument) && void 0 !== de
                        ? de
                        : document
                    ).createElement('style');
                    return (
                      (le.id = fe),
                      (le.textContent = `@${ue}keyframes ${fe} { ${J} } @${ue}keyframes ${fe}-alt { ${J} }`),
                      me.appendChild(le),
                      le
                    );
                  })(nt, ke, ie);
                  Lt.push(Te),
                    ne(ie, 'animation-duration', `${Dt()}ms`),
                    ne(ie, 'animation-timing-function', sn()),
                    ne(ie, 'animation-delay', `${An()}ms`),
                    ne(ie, 'animation-fill-mode', Ut()),
                    ne(ie, 'animation-direction', on());
                  const rt = wn() === 1 / 0 ? 'infinite' : wn().toString();
                  ne(ie, 'animation-iteration-count', rt),
                    ne(ie, 'animation-play-state', 'paused'),
                    N && ne(ie, 'animation-name', `${Te.id}-alt`),
                    (0, o.r)(() => {
                      ne(ie, 'animation-name', Te.id || null);
                    });
                }
              });
            },
            Tn = (N = !0) => {
              (() => {
                bn.forEach((ke) => ke()), Un.forEach((ke) => ke());
                const N = Y,
                  Q = oe,
                  ie = V;
                Mt.forEach((ke) => {
                  const Te = ke.classList;
                  N.forEach((rt) => Te.add(rt)),
                    Q.forEach((rt) => Te.remove(rt));
                  for (const rt in ie)
                    ie.hasOwnProperty(rt) && ne(ke, rt, ie[rt]);
                });
              })(),
                le.length > 0 &&
                  (Xt
                    ? (Mt.forEach((N) => {
                        const Q = N.animate(le, {
                          id: bt,
                          delay: An(),
                          duration: Dt(),
                          easing: sn(),
                          iterations: wn(),
                          fill: Ut(),
                          direction: on(),
                        });
                        Q.pause(), Pt.push(Q);
                      }),
                      Pt.length > 0 &&
                        (Pt[0].onfinish = () => {
                          an();
                        }))
                    : ln(N)),
                (ce = !0);
            },
            pn = (N) => {
              if (((N = Math.min(Math.max(N, 0), 0.9999)), Xt))
                Pt.forEach((Q) => {
                  (Q.currentTime =
                    Q.effect.getComputedTiming().delay + Dt() * N),
                    Q.pause();
                });
              else {
                const Q = `-${Dt() * N}ms`;
                Mt.forEach((ie) => {
                  le.length > 0 &&
                    (ne(ie, 'animation-delay', Q),
                    ne(ie, 'animation-play-state', 'paused'));
                });
              }
            },
            On = (N) => {
              Pt.forEach((Q) => {
                Q.effect.updateTiming({
                  delay: An(),
                  duration: Dt(),
                  easing: sn(),
                  iterations: wn(),
                  fill: Ut(),
                  direction: on(),
                });
              }),
                void 0 !== N && pn(N);
            },
            Sn = (N = !0, Q) => {
              (0, o.r)(() => {
                Mt.forEach((ie) => {
                  ne(ie, 'animation-name', nt || null),
                    ne(ie, 'animation-duration', `${Dt()}ms`),
                    ne(ie, 'animation-timing-function', sn()),
                    ne(
                      ie,
                      'animation-delay',
                      void 0 !== Q ? `-${Q * Dt()}ms` : `${An()}ms`
                    ),
                    ne(ie, 'animation-fill-mode', Ut() || null),
                    ne(ie, 'animation-direction', on() || null);
                  const ke = wn() === 1 / 0 ? 'infinite' : wn().toString();
                  ne(ie, 'animation-iteration-count', ke),
                    N && ne(ie, 'animation-name', `${nt}-alt`),
                    (0, o.r)(() => {
                      ne(ie, 'animation-name', nt || null);
                    });
                });
              });
            },
            gn = (N = !1, Q = !0, ie) => (
              N &&
                Ye.forEach((ke) => {
                  ke.update(N, Q, ie);
                }),
              Xt ? On(ie) : Sn(Q, ie),
              Ke
            ),
            Cr = () => {
              ce &&
                (Xt
                  ? Pt.forEach((N) => {
                      N.pause();
                    })
                  : Mt.forEach((N) => {
                      ne(N, 'animation-play-state', 'paused');
                    }),
                (ft = !0));
            },
            ar = () => {
              (ve = void 0), an();
            },
            yn = () => {
              ve && clearTimeout(ve);
            },
            O = (N) =>
              new Promise((Q) => {
                N?.sync &&
                  ((he = !0), Vt(() => (he = !1), { oneTimeCallback: !0 })),
                  ce || Tn(),
                  Me && (Xt ? (pn(0), On()) : Sn(), (Me = !1)),
                  We && ((q = Ye.length + 1), (We = !1)),
                  Vt(() => Q(), { oneTimeCallback: !0 }),
                  Ye.forEach((ie) => {
                    ie.play();
                  }),
                  Xt
                    ? (Pt.forEach((N) => {
                        N.play();
                      }),
                      (0 === le.length || 0 === Mt.length) && an())
                    : (() => {
                        if (
                          (yn(),
                          (0, o.r)(() => {
                            Mt.forEach((N) => {
                              le.length > 0 &&
                                ne(N, 'animation-play-state', 'running');
                            });
                          }),
                          0 === le.length || 0 === Mt.length)
                        )
                          an();
                        else {
                          const N = An() || 0,
                            Q = Dt() || 0,
                            ie = wn() || 1;
                          isFinite(ie) &&
                            (ve = setTimeout(ar, N + Q * ie + 100)),
                            ((fe, J) => {
                              let Be;
                              const de = { passive: !0 },
                                ue = (Ne) => {
                                  fe === Ne.target &&
                                    (Be && Be(),
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
                              fe &&
                                (fe.addEventListener(
                                  'webkitAnimationEnd',
                                  ue,
                                  de
                                ),
                                fe.addEventListener('animationend', ue, de),
                                (Be = () => {
                                  fe.removeEventListener(
                                    'webkitAnimationEnd',
                                    ue,
                                    de
                                  ),
                                    fe.removeEventListener(
                                      'animationend',
                                      ue,
                                      de
                                    );
                                }));
                            })(Mt[0]);
                        }
                      })(),
                  (ft = !1);
              }),
            U = (N, Q) => {
              const ie = le[0];
              return (
                void 0 === ie || (void 0 !== ie.offset && 0 !== ie.offset)
                  ? (le = [{ offset: 0, [N]: Q }, ...le])
                  : (ie[N] = Q),
                Ke
              );
            };
          return (Ke = {
            parentAnimation: k,
            elements: Mt,
            childAnimations: Ye,
            id: bt,
            animationFinish: an,
            from: U,
            to: (N, Q) => {
              const ie = le[le.length - 1];
              return (
                void 0 === ie || (void 0 !== ie.offset && 1 !== ie.offset)
                  ? (le = [...le, { offset: 1, [N]: Q }])
                  : (ie[N] = Q),
                Ke
              );
            },
            fromTo: (N, Q, ie) => U(N, Q).to(N, ie),
            parent: (N) => ((k = N), Ke),
            play: O,
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
                ce && (At(), (ce = !1)),
                (Pe = !1),
                (he = !1),
                (We = !0),
                (re = void 0),
                (Ve = void 0),
                (He = void 0),
                (q = 0),
                (Me = !1),
                (Ee = !0),
                (ft = !1);
            },
            destroy: (N) => (
              Ye.forEach((Q) => {
                Q.destroy(N);
              }),
              ((N) => {
                At(), N && un();
              })(N),
              (Mt.length = 0),
              (Ye.length = 0),
              (le.length = 0),
              (lt.length = 0),
              (Ft.length = 0),
              (ce = !1),
              (We = !0),
              Ke
            ),
            keyframes: (N) => {
              const Q = le !== N;
              return (
                (le = N),
                Q &&
                  ((N) => {
                    Xt
                      ? Jt().forEach((Q) => {
                          if (Q.effect.setKeyframes) Q.effect.setKeyframes(N);
                          else {
                            const ie = new KeyframeEffect(
                              Q.effect.target,
                              N,
                              Q.effect.getTiming()
                            );
                            Q.effect = ie;
                          }
                        })
                      : ln();
                  })(le),
                Ke
              );
            },
            addAnimation: (N) => {
              if (null != N)
                if (Array.isArray(N))
                  for (const Q of N) Q.parent(Ke), Ye.push(Q);
                else N.parent(Ke), Ye.push(N);
              return Ke;
            },
            addElement: (N) => {
              if (null != N)
                if (1 === N.nodeType) Mt.push(N);
                else if (N.length >= 0)
                  for (let Q = 0; Q < N.length; Q++) Mt.push(N[Q]);
                else console.error('Invalid addElement value');
              return Ke;
            },
            update: gn,
            fill: (N) => ((ue = N), gn(!0), Ke),
            direction: (N) => ((Ne = N), gn(!0), Ke),
            iterations: (N) => ((me = N), gn(!0), Ke),
            duration: (N) => (!Xt && 0 === N && (N = 1), (Be = N), gn(!0), Ke),
            easing: (N) => ((de = N), gn(!0), Ke),
            delay: (N) => ((J = N), gn(!0), Ke),
            getWebAnimations: Jt,
            getKeyframes: () => le,
            getFill: Ut,
            getDirection: on,
            getDelay: An,
            getIterations: wn,
            getEasing: sn,
            getDuration: Dt,
            afterAddRead: (N) => (st.push(N), Ke),
            afterAddWrite: (N) => (Ln.push(N), Ke),
            afterClearStyles: (N = []) => {
              for (const Q of N) B[Q] = '';
              return Ke;
            },
            afterStyles: (N = {}) => ((B = N), Ke),
            afterRemoveClass: (N) => ((S = ge(S, N)), Ke),
            afterAddClass: (N) => ((j = ge(j, N)), Ke),
            beforeAddRead: (N) => (bn.push(N), Ke),
            beforeAddWrite: (N) => (Un.push(N), Ke),
            beforeClearStyles: (N = []) => {
              for (const Q of N) V[Q] = '';
              return Ke;
            },
            beforeStyles: (N = {}) => ((V = N), Ke),
            beforeRemoveClass: (N) => ((oe = ge(oe, N)), Ke),
            beforeAddClass: (N) => ((Y = ge(Y, N)), Ke),
            onFinish: Vt,
            isRunning: () => 0 !== q && !ft,
            progressStart: (N = !1, Q) => (
              Ye.forEach((ie) => {
                ie.progressStart(N, Q);
              }),
              Cr(),
              (Pe = N),
              ce || Tn(),
              gn(!1, !0, Q),
              Ke
            ),
            progressStep: (N) => (
              Ye.forEach((Q) => {
                Q.progressStep(N);
              }),
              pn(N),
              Ke
            ),
            progressEnd: (N, Q, ie) => (
              (Pe = !1),
              Ye.forEach((ke) => {
                ke.progressEnd(N, Q, ie);
              }),
              void 0 !== ie && (Ve = ie),
              (Me = !1),
              (Ee = !0),
              0 === N
                ? ((re = 'reverse' === on() ? 'normal' : 'reverse'),
                  'reverse' === re && (Ee = !1),
                  Xt
                    ? (gn(), pn(1 - Q))
                    : ((He = (1 - Q) * Dt() * -1), gn(!1, !1)))
                : 1 === N &&
                  (Xt ? (gn(), pn(Q)) : ((He = Q * Dt() * -1), gn(!1, !1))),
              void 0 !== N &&
                (Vt(
                  () => {
                    (Ve = void 0), (re = void 0), (He = void 0);
                  },
                  { oneTimeCallback: !0 }
                ),
                k || O()),
              Ke
            ),
          });
        };
    },
    4349: (at, $e, T) => {
      'use strict';
      T.d($e, { G: () => pe });
      class L {
        constructor(ne, xe, we, Oe, ye) {
          (this.id = xe),
            (this.name = we),
            (this.disableScroll = ye),
            (this.priority = 1e6 * Oe + xe),
            (this.ctrl = ne);
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
          const ne = this.ctrl.capture(this.name, this.id, this.priority);
          return (
            ne && this.disableScroll && this.ctrl.disableScroll(this.id), ne
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
      class z {
        constructor(ne, xe, we, Oe) {
          (this.id = xe),
            (this.disable = we),
            (this.disableScroll = Oe),
            (this.ctrl = ne);
        }
        block() {
          if (this.ctrl) {
            if (this.disable)
              for (const ne of this.disable)
                this.ctrl.disableGesture(ne, this.id);
            this.disableScroll && this.ctrl.disableScroll(this.id);
          }
        }
        unblock() {
          if (this.ctrl) {
            if (this.disable)
              for (const ne of this.disable)
                this.ctrl.enableGesture(ne, this.id);
            this.disableScroll && this.ctrl.enableScroll(this.id);
          }
        }
        destroy() {
          this.unblock(), (this.ctrl = void 0);
        }
      }
      const W = 'backdrop-no-scroll',
        pe = new (class o {
          constructor() {
            (this.gestureId = 0),
              (this.requestedStart = new Map()),
              (this.disabledGestures = new Map()),
              (this.disabledScroll = new Set());
          }
          createGesture(ne) {
            var xe;
            return new L(
              this,
              this.newID(),
              ne.name,
              null !== (xe = ne.priority) && void 0 !== xe ? xe : 0,
              !!ne.disableScroll
            );
          }
          createBlocker(ne = {}) {
            return new z(this, this.newID(), ne.disable, !!ne.disableScroll);
          }
          start(ne, xe, we) {
            return this.canStart(ne)
              ? (this.requestedStart.set(xe, we), !0)
              : (this.requestedStart.delete(xe), !1);
          }
          capture(ne, xe, we) {
            if (!this.start(ne, xe, we)) return !1;
            const Oe = this.requestedStart;
            let ye = -1e4;
            if (
              (Oe.forEach((be) => {
                ye = Math.max(ye, be);
              }),
              ye === we)
            ) {
              (this.capturedId = xe), Oe.clear();
              const be = new CustomEvent('ionGestureCaptured', {
                detail: { gestureName: ne },
              });
              return document.dispatchEvent(be), !0;
            }
            return Oe.delete(xe), !1;
          }
          release(ne) {
            this.requestedStart.delete(ne),
              this.capturedId === ne && (this.capturedId = void 0);
          }
          disableGesture(ne, xe) {
            let we = this.disabledGestures.get(ne);
            void 0 === we &&
              ((we = new Set()), this.disabledGestures.set(ne, we)),
              we.add(xe);
          }
          enableGesture(ne, xe) {
            const we = this.disabledGestures.get(ne);
            void 0 !== we && we.delete(xe);
          }
          disableScroll(ne) {
            this.disabledScroll.add(ne),
              1 === this.disabledScroll.size && document.body.classList.add(W);
          }
          enableScroll(ne) {
            this.disabledScroll.delete(ne),
              0 === this.disabledScroll.size &&
                document.body.classList.remove(W);
          }
          canStart(ne) {
            return !(void 0 !== this.capturedId || this.isDisabled(ne));
          }
          isCaptured() {
            return void 0 !== this.capturedId;
          }
          isScrollDisabled() {
            return this.disabledScroll.size > 0;
          }
          isDisabled(ne) {
            const xe = this.disabledGestures.get(ne);
            return !!(xe && xe.size > 0);
          }
          newID() {
            return this.gestureId++, this.gestureId;
          }
        })();
    },
    7593: (at, $e, T) => {
      'use strict';
      T.r($e),
        T.d($e, {
          MENU_BACK_BUTTON_PRIORITY: () => pe,
          OVERLAY_BACK_BUTTON_PRIORITY: () => W,
          blockHardwareBackButton: () => L,
          startHardwareBackButton: () => z,
        });
      var o = T(5861);
      const L = () => {
          document.addEventListener('backbutton', () => {});
        },
        z = () => {
          const Fe = document;
          let ne = !1;
          Fe.addEventListener('backbutton', () => {
            if (ne) return;
            let xe = 0,
              we = [];
            const Oe = new CustomEvent('ionBackButton', {
              bubbles: !1,
              detail: {
                register(se, ee) {
                  we.push({ priority: se, handler: ee, id: xe++ });
                },
              },
            });
            Fe.dispatchEvent(Oe);
            const ye = (function () {
                var se = (0, o.Z)(function* (ee) {
                  try {
                    if (ee?.handler) {
                      const ge = ee.handler(be);
                      null != ge && (yield ge);
                    }
                  } catch (ge) {
                    console.error(ge);
                  }
                });
                return function (ge) {
                  return se.apply(this, arguments);
                };
              })(),
              be = () => {
                if (we.length > 0) {
                  let se = {
                    priority: Number.MIN_SAFE_INTEGER,
                    handler: () => {},
                    id: -1,
                  };
                  we.forEach((ee) => {
                    ee.priority >= se.priority && (se = ee);
                  }),
                    (ne = !0),
                    (we = we.filter((ee) => ee.id !== se.id)),
                    ye(se).then(() => (ne = !1));
                }
              };
            be();
          });
        },
        W = 100,
        pe = 99;
    },
    5730: (at, $e, T) => {
      'use strict';
      T.d($e, {
        a: () => ne,
        b: () => xe,
        c: () => z,
        d: () => ee,
        e: () => ge,
        f: () => se,
        g: () => we,
        h: () => me,
        i: () => Fe,
        j: () => W,
        k: () => be,
        l: () => Le,
        m: () => ye,
        n: () => fe,
        o: () => de,
        p: () => Be,
        q: () => ue,
        r: () => Oe,
        s: () => Ne,
        t: () => o,
        u: () => J,
      });
      const o = (le, Y = 0) =>
          new Promise((oe) => {
            L(le, Y, oe);
          }),
        L = (le, Y = 0, oe) => {
          let ce, k;
          const V = { passive: !0 },
            S = () => {
              ce && ce();
            },
            B = (q) => {
              (void 0 === q || le === q.target) && (S(), oe(q));
            };
          return (
            le &&
              (le.addEventListener('webkitTransitionEnd', B, V),
              le.addEventListener('transitionend', B, V),
              (k = setTimeout(B, Y + 500)),
              (ce = () => {
                k && (clearTimeout(k), (k = void 0)),
                  le.removeEventListener('webkitTransitionEnd', B, V),
                  le.removeEventListener('transitionend', B, V);
              })),
            S
          );
        },
        z = (le, Y) => {
          le.componentOnReady
            ? le.componentOnReady().then((oe) => Y(oe))
            : Oe(() => Y(le));
        },
        W = (le, Y = []) => {
          const oe = {};
          return (
            Y.forEach((ce) => {
              le.hasAttribute(ce) &&
                (null !== le.getAttribute(ce) && (oe[ce] = le.getAttribute(ce)),
                le.removeAttribute(ce));
            }),
            oe
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
        Fe = (le, Y) => {
          let oe = pe;
          return (
            Y && Y.length > 0 && (oe = oe.filter((ce) => !Y.includes(ce))),
            W(le, oe)
          );
        },
        ne = (le, Y, oe, ce) => {
          var k;
          if (typeof window < 'u') {
            const j =
              null === (k = window?.Ionic) || void 0 === k ? void 0 : k.config;
            if (j) {
              const S = j.get('_ael');
              if (S) return S(le, Y, oe, ce);
              if (j._ael) return j._ael(le, Y, oe, ce);
            }
          }
          return le.addEventListener(Y, oe, ce);
        },
        xe = (le, Y, oe, ce) => {
          var k;
          if (typeof window < 'u') {
            const j =
              null === (k = window?.Ionic) || void 0 === k ? void 0 : k.config;
            if (j) {
              const S = j.get('_rel');
              if (S) return S(le, Y, oe, ce);
              if (j._rel) return j._rel(le, Y, oe, ce);
            }
          }
          return le.removeEventListener(Y, oe, ce);
        },
        we = (le, Y = le) => le.shadowRoot || Y,
        Oe = (le) =>
          'function' == typeof __zone_symbol__requestAnimationFrame
            ? __zone_symbol__requestAnimationFrame(le)
            : 'function' == typeof requestAnimationFrame
            ? requestAnimationFrame(le)
            : setTimeout(le),
        ye = (le) => !!le.shadowRoot && !!le.attachShadow,
        be = (le) => {
          const Y = le.closest('ion-item');
          return Y ? Y.querySelector('ion-label') : null;
        },
        se = (le) => {
          if ((le.focus(), le.classList.contains('ion-focusable'))) {
            const Y = le.closest('ion-app');
            Y && Y.setFocus([le]);
          }
        },
        ee = (le, Y) => {
          let oe;
          const ce = le.getAttribute('aria-labelledby'),
            k = le.id;
          let V = null !== ce && '' !== ce.trim() ? ce : Y + '-lbl',
            j =
              null !== ce && '' !== ce.trim()
                ? document.getElementById(ce)
                : be(le);
          return (
            j
              ? (null === ce && (j.id = V),
                (oe = j.textContent),
                j.setAttribute('aria-hidden', 'true'))
              : '' !== k.trim() &&
                ((j = document.querySelector(`label[for="${k}"]`)),
                j &&
                  ('' !== j.id ? (V = j.id) : (j.id = V = `${k}-lbl`),
                  (oe = j.textContent))),
            { label: j, labelId: V, labelText: oe }
          );
        },
        ge = (le, Y, oe, ce, k) => {
          if (le || ye(Y)) {
            let V = Y.querySelector('input.aux-input');
            V ||
              ((V = Y.ownerDocument.createElement('input')),
              (V.type = 'hidden'),
              V.classList.add('aux-input'),
              Y.appendChild(V)),
              (V.disabled = k),
              (V.name = oe),
              (V.value = ce || '');
          }
        },
        Le = (le, Y, oe) => Math.max(le, Math.min(Y, oe)),
        fe = (le, Y) => {
          if (!le) {
            const oe = 'ASSERT: ' + Y;
            throw (console.error(oe), new Error(oe));
          }
        },
        J = (le) => le.timeStamp || Date.now(),
        Be = (le) => {
          if (le) {
            const Y = le.changedTouches;
            if (Y && Y.length > 0) {
              const oe = Y[0];
              return { x: oe.clientX, y: oe.clientY };
            }
            if (void 0 !== le.pageX) return { x: le.pageX, y: le.pageY };
          }
          return { x: 0, y: 0 };
        },
        de = (le) => {
          const Y = 'rtl' === document.dir;
          switch (le) {
            case 'start':
              return Y;
            case 'end':
              return !Y;
            default:
              throw new Error(
                `"${le}" is not a valid value for [side]. Use "start" or "end" instead.`
              );
          }
        },
        me = (le, Y) => {
          const oe = le._original || le;
          return { _original: le, emit: ue(oe.emit.bind(oe), Y) };
        },
        ue = (le, Y = 0) => {
          let oe;
          return (...ce) => {
            clearTimeout(oe), (oe = setTimeout(le, Y, ...ce));
          };
        },
        Ne = (le, Y) => {
          if ((le ?? (le = {}), Y ?? (Y = {}), le === Y)) return !0;
          const oe = Object.keys(le);
          if (oe.length !== Object.keys(Y).length) return !1;
          for (const ce of oe) if (!(ce in Y) || le[ce] !== Y[ce]) return !1;
          return !0;
        };
    },
    4292: (at, $e, T) => {
      'use strict';
      T.d($e, { m: () => ye });
      var o = T(5861),
        L = T(7593),
        z = T(5730),
        W = T(9658),
        pe = T(8834);
      const Fe = (be) => (0, pe.c)().duration(be ? 400 : 300),
        ne = (be) => {
          let se, ee;
          const ge = be.width + 8,
            Le = (0, pe.c)(),
            fe = (0, pe.c)();
          be.isEndSide
            ? ((se = ge + 'px'), (ee = '0px'))
            : ((se = -ge + 'px'), (ee = '0px')),
            Le.addElement(be.menuInnerEl).fromTo(
              'transform',
              `translateX(${se})`,
              `translateX(${ee})`
            );
          const Be = 'ios' === (0, W.b)(be),
            de = Be ? 0.2 : 0.25;
          return (
            fe.addElement(be.backdropEl).fromTo('opacity', 0.01, de),
            Fe(Be).addAnimation([Le, fe])
          );
        },
        xe = (be) => {
          let se, ee;
          const ge = (0, W.b)(be),
            Le = be.width;
          be.isEndSide
            ? ((se = -Le + 'px'), (ee = Le + 'px'))
            : ((se = Le + 'px'), (ee = -Le + 'px'));
          const fe = (0, pe.c)()
              .addElement(be.menuInnerEl)
              .fromTo('transform', `translateX(${ee})`, 'translateX(0px)'),
            J = (0, pe.c)()
              .addElement(be.contentEl)
              .fromTo('transform', 'translateX(0px)', `translateX(${se})`),
            Be = (0, pe.c)()
              .addElement(be.backdropEl)
              .fromTo('opacity', 0.01, 0.32);
          return Fe('ios' === ge).addAnimation([fe, J, Be]);
        },
        we = (be) => {
          const se = (0, W.b)(be),
            ee = be.width * (be.isEndSide ? -1 : 1) + 'px',
            ge = (0, pe.c)()
              .addElement(be.contentEl)
              .fromTo('transform', 'translateX(0px)', `translateX(${ee})`);
          return Fe('ios' === se).addAnimation(ge);
        },
        ye = (() => {
          const be = new Map(),
            se = [],
            ee = (function () {
              var ve = (0, o.Z)(function* (re) {
                const Ve = yield me(re);
                return !!Ve && Ve.open();
              });
              return function (Ve) {
                return ve.apply(this, arguments);
              };
            })(),
            ge = (function () {
              var ve = (0, o.Z)(function* (re) {
                const Ve = yield void 0 !== re ? me(re) : ue();
                return void 0 !== Ve && Ve.close();
              });
              return function (Ve) {
                return ve.apply(this, arguments);
              };
            })(),
            Le = (function () {
              var ve = (0, o.Z)(function* (re) {
                const Ve = yield me(re);
                return !!Ve && Ve.toggle();
              });
              return function (Ve) {
                return ve.apply(this, arguments);
              };
            })(),
            fe = (function () {
              var ve = (0, o.Z)(function* (re, Ve) {
                const He = yield me(Ve);
                return He && (He.disabled = !re), He;
              });
              return function (Ve, He) {
                return ve.apply(this, arguments);
              };
            })(),
            J = (function () {
              var ve = (0, o.Z)(function* (re, Ve) {
                const He = yield me(Ve);
                return He && (He.swipeGesture = re), He;
              });
              return function (Ve, He) {
                return ve.apply(this, arguments);
              };
            })(),
            Be = (function () {
              var ve = (0, o.Z)(function* (re) {
                if (null != re) {
                  const Ve = yield me(re);
                  return void 0 !== Ve && Ve.isOpen();
                }
                return void 0 !== (yield ue());
              });
              return function (Ve) {
                return ve.apply(this, arguments);
              };
            })(),
            de = (function () {
              var ve = (0, o.Z)(function* (re) {
                const Ve = yield me(re);
                return !!Ve && !Ve.disabled;
              });
              return function (Ve) {
                return ve.apply(this, arguments);
              };
            })(),
            me = (function () {
              var ve = (0, o.Z)(function* (re) {
                return (
                  yield he(),
                  'start' === re || 'end' === re
                    ? Pe((Ee) => Ee.side === re && !Ee.disabled) ||
                      Pe((Ee) => Ee.side === re)
                    : null != re
                    ? Pe((He) => He.menuId === re)
                    : Pe((He) => !He.disabled) ||
                      (se.length > 0 ? se[0].el : void 0)
                );
              });
              return function (Ve) {
                return ve.apply(this, arguments);
              };
            })(),
            ue = (function () {
              var ve = (0, o.Z)(function* () {
                return yield he(), S();
              });
              return function () {
                return ve.apply(this, arguments);
              };
            })(),
            Ne = (function () {
              var ve = (0, o.Z)(function* () {
                return yield he(), B();
              });
              return function () {
                return ve.apply(this, arguments);
              };
            })(),
            le = (function () {
              var ve = (0, o.Z)(function* () {
                return yield he(), q();
              });
              return function () {
                return ve.apply(this, arguments);
              };
            })(),
            Y = (ve, re) => {
              be.set(ve, re);
            },
            k = (ve) => {
              const re = ve.side;
              se.filter((Ve) => Ve.side === re && Ve !== ve).forEach(
                (Ve) => (Ve.disabled = !0)
              );
            },
            V = (function () {
              var ve = (0, o.Z)(function* (re, Ve, He) {
                if (q()) return !1;
                if (Ve) {
                  const Ee = yield ue();
                  Ee && re.el !== Ee && (yield Ee.setOpen(!1, !1));
                }
                return re._setOpen(Ve, He);
              });
              return function (Ve, He, Ee) {
                return ve.apply(this, arguments);
              };
            })(),
            S = () => Pe((ve) => ve._isOpen),
            B = () => se.map((ve) => ve.el),
            q = () => se.some((ve) => ve.isAnimating),
            Pe = (ve) => {
              const re = se.find(ve);
              if (void 0 !== re) return re.el;
            },
            he = () =>
              Promise.all(
                Array.from(document.querySelectorAll('ion-menu')).map(
                  (ve) => new Promise((re) => (0, z.c)(ve, re))
                )
              );
          return (
            Y('reveal', we),
            Y('push', xe),
            Y('overlay', ne),
            typeof document < 'u' &&
              document.addEventListener('ionBackButton', (ve) => {
                const re = S();
                re &&
                  ve.detail.register(L.MENU_BACK_BUTTON_PRIORITY, () =>
                    re.close()
                  );
              }),
            {
              registerAnimation: Y,
              get: me,
              getMenus: Ne,
              getOpen: ue,
              isEnabled: de,
              swipeGesture: J,
              isAnimating: le,
              isOpen: Be,
              enable: fe,
              toggle: Le,
              close: ge,
              open: ee,
              _getOpenSync: S,
              _createAnimation: (ve, re) => {
                const Ve = be.get(ve);
                if (!Ve) throw new Error('animation not registered');
                return Ve(re);
              },
              _register: (ve) => {
                se.indexOf(ve) < 0 && (ve.disabled || k(ve), se.push(ve));
              },
              _unregister: (ve) => {
                const re = se.indexOf(ve);
                re > -1 && se.splice(re, 1);
              },
              _setOpen: V,
              _setActiveMenu: k,
            }
          );
        })();
    },
    3457: (at, $e, T) => {
      'use strict';
      T.d($e, { w: () => o });
      const o = typeof window < 'u' ? window : void 0;
    },
    1308: (at, $e, T) => {
      'use strict';
      T.d($e, {
        B: () => xn,
        H: () => Mt,
        a: () => Ee,
        b: () => vt,
        c: () => en,
        e: () => tr,
        f: () => mn,
        g: () => Me,
        h: () => lt,
        i: () => kt,
        j: () => on,
        k: () => Zt,
        p: () => Le,
        r: () => ir,
        s: () => ee,
      });
      var o = T(5861);
      let z,
        W,
        pe,
        Fe = !1,
        ne = !1,
        xe = !1,
        we = !1,
        Oe = !1;
      const ye = typeof window < 'u' ? window : {},
        be = ye.document || { head: {} },
        se = {
          $flags$: 0,
          $resourcesUrl$: '',
          jmp: (O) => O(),
          raf: (O) => requestAnimationFrame(O),
          ael: (O, $, U, K) => O.addEventListener($, U, K),
          rel: (O, $, U, K) => O.removeEventListener($, U, K),
          ce: (O, $) => new CustomEvent(O, $),
        },
        ee = (O) => {
          Object.assign(se, O);
        },
        Le = (O) => Promise.resolve(O),
        fe = (() => {
          try {
            return (
              new CSSStyleSheet(),
              'function' == typeof new CSSStyleSheet().replaceSync
            );
          } catch {}
          return !1;
        })(),
        J = (O, $, U, K) => {
          U &&
            U.map(([De, N, Q]) => {
              const ie = de(O, De),
                ke = Be($, Q),
                Te = me(De);
              se.ael(ie, N, ke, Te),
                ($.$rmListeners$ = $.$rmListeners$ || []).push(() =>
                  se.rel(ie, N, ke, Te)
                );
            });
        },
        Be = (O, $) => (U) => {
          try {
            256 & O.$flags$
              ? O.$lazyInstance$[$](U)
              : (O.$queuedListeners$ = O.$queuedListeners$ || []).push([$, U]);
          } catch (K) {
            On(K);
          }
        },
        de = (O, $) => (4 & $ ? be : 8 & $ ? ye : 16 & $ ? be.body : O),
        me = (O) => 0 != (2 & O),
        oe = 's-id',
        ce = 'sty-id',
        k = 'c-id',
        j = 'http://www.w3.org/1999/xlink',
        q = new WeakMap(),
        Pe = (O, $, U) => {
          let K = fr.get(O);
          fe && U
            ? ((K = K || new CSSStyleSheet()),
              'string' == typeof K ? (K = $) : K.replaceSync($))
            : (K = $),
            fr.set(O, K);
        },
        he = (O, $, U, K) => {
          let De = re($, U);
          const N = fr.get(De);
          if (((O = 11 === O.nodeType ? O : be), N))
            if ('string' == typeof N) {
              let ie,
                Q = q.get((O = O.head || O));
              Q || q.set(O, (Q = new Set())),
                Q.has(De) ||
                  (O.host && (ie = O.querySelector(`[${ce}="${De}"]`))
                    ? (ie.innerHTML = N)
                    : ((ie = be.createElement('style')),
                      (ie.innerHTML = N),
                      O.insertBefore(ie, O.querySelector('link'))),
                  Q && Q.add(De));
            } else
              O.adoptedStyleSheets.includes(N) ||
                (O.adoptedStyleSheets = [...O.adoptedStyleSheets, N]);
          return De;
        },
        re = (O, $) =>
          'sc-' + ($ && 32 & O.$flags$ ? O.$tagName$ + '-' + $ : O.$tagName$),
        Ve = (O) => O.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, '$1{'),
        Ee = (O) => Sr.push(O),
        Me = (O) => ln(O).$modeName$,
        We = {},
        bt = (O) => 'object' == (O = typeof O) || 'function' === O,
        lt = (O, $, ...U) => {
          let K = null,
            De = null,
            N = null,
            Q = !1,
            ie = !1;
          const ke = [],
            Te = (ot) => {
              for (let et = 0; et < ot.length; et++)
                (K = ot[et]),
                  Array.isArray(K)
                    ? Te(K)
                    : null != K &&
                      'boolean' != typeof K &&
                      ((Q = 'function' != typeof O && !bt(K)) &&
                        (K = String(K)),
                      Q && ie
                        ? (ke[ke.length - 1].$text$ += K)
                        : ke.push(Q ? Ft(null, K) : K),
                      (ie = Q));
            };
          if ((Te(U), $)) {
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
          if ('function' == typeof O) return O(null === $ ? {} : $, ke, Lt);
          const rt = Ft(O, null);
          return (
            (rt.$attrs$ = $),
            ke.length > 0 && (rt.$children$ = ke),
            (rt.$key$ = De),
            (rt.$name$ = N),
            rt
          );
        },
        Ft = (O, $) => ({
          $flags$: 0,
          $tag$: O,
          $text$: $,
          $elm$: null,
          $children$: null,
          $attrs$: null,
          $key$: null,
          $name$: null,
        }),
        Mt = {},
        Lt = {
          forEach: (O, $) => O.map(bn).forEach($),
          map: (O, $) => O.map(bn).map($).map(Un),
        },
        bn = (O) => ({
          vattrs: O.$attrs$,
          vchildren: O.$children$,
          vkey: O.$key$,
          vname: O.$name$,
          vtag: O.$tag$,
          vtext: O.$text$,
        }),
        Un = (O) => {
          if ('function' == typeof O.vtag) {
            const U = Object.assign({}, O.vattrs);
            return (
              O.vkey && (U.key = O.vkey),
              O.vname && (U.name = O.vname),
              lt(O.vtag, U, ...(O.vchildren || []))
            );
          }
          const $ = Ft(O.vtag, O.vtext);
          return (
            ($.$attrs$ = O.vattrs),
            ($.$children$ = O.vchildren),
            ($.$key$ = O.vkey),
            ($.$name$ = O.vname),
            $
          );
        },
        st = (O, $, U, K, De, N) => {
          if (U !== K) {
            let Q = pn(O, $),
              ie = $.toLowerCase();
            if ('class' === $) {
              const ke = O.classList,
                Te = Pt(U),
                rt = Pt(K);
              ke.remove(...Te.filter((ot) => ot && !rt.includes(ot))),
                ke.add(...rt.filter((ot) => ot && !Te.includes(ot)));
            } else if ('style' === $) {
              for (const ke in U)
                (!K || null == K[ke]) &&
                  (ke.includes('-')
                    ? O.style.removeProperty(ke)
                    : (O.style[ke] = ''));
              for (const ke in K)
                (!U || K[ke] !== U[ke]) &&
                  (ke.includes('-')
                    ? O.style.setProperty(ke, K[ke])
                    : (O.style[ke] = K[ke]));
            } else if ('key' !== $)
              if ('ref' === $) K && K(O);
              else if (Q || 'o' !== $[0] || 'n' !== $[1]) {
                const ke = bt(K);
                if ((Q || (ke && null !== K)) && !De)
                  try {
                    if (O.tagName.includes('-')) O[$] = K;
                    else {
                      const rt = K ?? '';
                      'list' === $
                        ? (Q = !1)
                        : (null == U || O[$] != rt) && (O[$] = rt);
                    }
                  } catch {}
                let Te = !1;
                ie !== (ie = ie.replace(/^xlink\:?/, '')) &&
                  (($ = ie), (Te = !0)),
                  null == K || !1 === K
                    ? (!1 !== K || '' === O.getAttribute($)) &&
                      (Te ? O.removeAttributeNS(j, $) : O.removeAttribute($))
                    : (!Q || 4 & N || De) &&
                      !ke &&
                      ((K = !0 === K ? '' : K),
                      Te ? O.setAttributeNS(j, $, K) : O.setAttribute($, K));
              } else
                ($ =
                  '-' === $[2]
                    ? $.slice(3)
                    : pn(ye, ie)
                    ? ie.slice(2)
                    : ie[2] + $.slice(3)),
                  U && se.rel(O, $, U, !1),
                  K && se.ael(O, $, K, !1);
          }
        },
        Ln = /\s/,
        Pt = (O) => (O ? O.split(Ln) : []),
        cn = (O, $, U, K) => {
          const De =
              11 === $.$elm$.nodeType && $.$elm$.host ? $.$elm$.host : $.$elm$,
            N = (O && O.$attrs$) || We,
            Q = $.$attrs$ || We;
          for (K in N) K in Q || st(De, K, N[K], void 0, U, $.$flags$);
          for (K in Q) st(De, K, N[K], Q[K], U, $.$flags$);
        },
        Xt = (O, $, U, K) => {
          const De = $.$children$[U];
          let Q,
            ie,
            ke,
            N = 0;
          if (
            (Fe ||
              ((xe = !0),
              'slot' === De.$tag$ &&
                (z && K.classList.add(z + '-s'),
                (De.$flags$ |= De.$children$ ? 2 : 1))),
            null !== De.$text$)
          )
            Q = De.$elm$ = be.createTextNode(De.$text$);
          else if (1 & De.$flags$) Q = De.$elm$ = be.createTextNode('');
          else {
            if (
              (we || (we = 'svg' === De.$tag$),
              (Q = De.$elm$ =
                be.createElementNS(
                  we
                    ? 'http://www.w3.org/2000/svg'
                    : 'http://www.w3.org/1999/xhtml',
                  2 & De.$flags$ ? 'slot-fb' : De.$tag$
                )),
              we && 'foreignObject' === De.$tag$ && (we = !1),
              cn(null, De, we),
              ((O) => null != O)(z) &&
                Q['s-si'] !== z &&
                Q.classList.add((Q['s-si'] = z)),
              De.$children$)
            )
              for (N = 0; N < De.$children$.length; ++N)
                (ie = Xt(O, De, N, Q)), ie && Q.appendChild(ie);
            'svg' === De.$tag$
              ? (we = !1)
              : 'foreignObject' === Q.tagName && (we = !0);
          }
          return (
            (Q['s-hn'] = pe),
            3 & De.$flags$ &&
              ((Q['s-sr'] = !0),
              (Q['s-cr'] = W),
              (Q['s-sn'] = De.$name$ || ''),
              (ke = O && O.$children$ && O.$children$[U]),
              ke && ke.$tag$ === De.$tag$ && O.$elm$ && kn(O.$elm$, !1)),
            Q
          );
        },
        kn = (O, $) => {
          se.$flags$ |= 1;
          const U = O.childNodes;
          for (let K = U.length - 1; K >= 0; K--) {
            const De = U[K];
            De['s-hn'] !== pe &&
              De['s-ol'] &&
              (Vt(De).insertBefore(De, qe(De)),
              De['s-ol'].remove(),
              (De['s-ol'] = void 0),
              (xe = !0)),
              $ && kn(De, $);
          }
          se.$flags$ &= -2;
        },
        Jt = (O, $, U, K, De, N) => {
          let ie,
            Q = (O['s-cr'] && O['s-cr'].parentNode) || O;
          for (
            Q.shadowRoot && Q.tagName === pe && (Q = Q.shadowRoot);
            De <= N;
            ++De
          )
            K[De] &&
              ((ie = Xt(null, U, De, O)),
              ie && ((K[De].$elm$ = ie), Q.insertBefore(ie, qe($))));
        },
        $n = (O, $, U, K, De) => {
          for (; $ <= U; ++$)
            (K = O[$]) &&
              ((De = K.$elm$),
              Kt(K),
              (ne = !0),
              De['s-ol'] ? De['s-ol'].remove() : kn(De, !0),
              De.remove());
        },
        ct = (O, $) =>
          O.$tag$ === $.$tag$ &&
          ('slot' === O.$tag$ ? O.$name$ === $.$name$ : O.$key$ === $.$key$),
        qe = (O) => (O && O['s-ol']) || O,
        Vt = (O) => (O['s-ol'] ? O['s-ol'] : O).parentNode,
        Yt = (O, $) => {
          const U = ($.$elm$ = O.$elm$),
            K = O.$children$,
            De = $.$children$,
            N = $.$tag$,
            Q = $.$text$;
          let ie;
          null === Q
            ? ((we = 'svg' === N || ('foreignObject' !== N && we)),
              'slot' === N || cn(O, $, we),
              null !== K && null !== De
                ? ((O, $, U, K) => {
                    let Ht,
                      Hn,
                      De = 0,
                      N = 0,
                      Q = 0,
                      ie = 0,
                      ke = $.length - 1,
                      Te = $[0],
                      rt = $[ke],
                      ot = K.length - 1,
                      et = K[0],
                      Nt = K[ot];
                    for (; De <= ke && N <= ot; )
                      if (null == Te) Te = $[++De];
                      else if (null == rt) rt = $[--ke];
                      else if (null == et) et = K[++N];
                      else if (null == Nt) Nt = K[--ot];
                      else if (ct(Te, et))
                        Yt(Te, et), (Te = $[++De]), (et = K[++N]);
                      else if (ct(rt, Nt))
                        Yt(rt, Nt), (rt = $[--ke]), (Nt = K[--ot]);
                      else if (ct(Te, Nt))
                        ('slot' === Te.$tag$ || 'slot' === Nt.$tag$) &&
                          kn(Te.$elm$.parentNode, !1),
                          Yt(Te, Nt),
                          O.insertBefore(Te.$elm$, rt.$elm$.nextSibling),
                          (Te = $[++De]),
                          (Nt = K[--ot]);
                      else if (ct(rt, et))
                        ('slot' === Te.$tag$ || 'slot' === Nt.$tag$) &&
                          kn(rt.$elm$.parentNode, !1),
                          Yt(rt, et),
                          O.insertBefore(rt.$elm$, Te.$elm$),
                          (rt = $[--ke]),
                          (et = K[++N]);
                      else {
                        for (Q = -1, ie = De; ie <= ke; ++ie)
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
                              ? (Ht = Xt($ && $[N], U, Q, O))
                              : (Yt(Hn, et), ($[Q] = void 0), (Ht = Hn.$elm$)),
                            (et = K[++N]))
                          : ((Ht = Xt($ && $[N], U, N, O)), (et = K[++N])),
                          Ht && Vt(Te.$elm$).insertBefore(Ht, qe(Te.$elm$));
                      }
                    De > ke
                      ? Jt(
                          O,
                          null == K[ot + 1] ? null : K[ot + 1].$elm$,
                          U,
                          K,
                          N,
                          ot
                        )
                      : N > ot && $n($, De, ke);
                  })(U, K, $, De)
                : null !== De
                ? (null !== O.$text$ && (U.textContent = ''),
                  Jt(U, null, $, De, 0, De.length - 1))
                : null !== K && $n(K, 0, K.length - 1),
              we && 'svg' === N && (we = !1))
            : (ie = U['s-cr'])
            ? (ie.parentNode.textContent = Q)
            : O.$text$ !== Q && (U.data = Q);
        },
        At = (O) => {
          const $ = O.childNodes;
          let U, K, De, N, Q, ie;
          for (K = 0, De = $.length; K < De; K++)
            if (((U = $[K]), 1 === U.nodeType)) {
              if (U['s-sr'])
                for (Q = U['s-sn'], U.hidden = !1, N = 0; N < De; N++)
                  if (
                    ((ie = $[N].nodeType),
                    $[N]['s-hn'] !== U['s-hn'] || '' !== Q)
                  ) {
                    if (1 === ie && Q === $[N].getAttribute('slot')) {
                      U.hidden = !0;
                      break;
                    }
                  } else if (
                    1 === ie ||
                    (3 === ie && '' !== $[N].textContent.trim())
                  ) {
                    U.hidden = !0;
                    break;
                  }
              At(U);
            }
        },
        un = [],
        In = (O) => {
          let $,
            U,
            K,
            De,
            N,
            Q,
            ie = 0;
          const ke = O.childNodes,
            Te = ke.length;
          for (; ie < Te; ie++) {
            if ((($ = ke[ie]), $['s-sr'] && (U = $['s-cr']) && U.parentNode))
              for (
                K = U.parentNode.childNodes, De = $['s-sn'], Q = K.length - 1;
                Q >= 0;
                Q--
              )
                (U = K[Q]),
                  !U['s-cn'] &&
                    !U['s-nr'] &&
                    U['s-hn'] !== $['s-hn'] &&
                    (pt(U, De)
                      ? ((N = un.find((rt) => rt.$nodeToRelocate$ === U)),
                        (ne = !0),
                        (U['s-sn'] = U['s-sn'] || De),
                        N
                          ? (N.$slotRefNode$ = $)
                          : un.push({ $slotRefNode$: $, $nodeToRelocate$: U }),
                        U['s-sr'] &&
                          un.map((rt) => {
                            pt(rt.$nodeToRelocate$, U['s-sn']) &&
                              ((N = un.find((ot) => ot.$nodeToRelocate$ === U)),
                              N &&
                                !rt.$slotRefNode$ &&
                                (rt.$slotRefNode$ = N.$slotRefNode$));
                          }))
                      : un.some((rt) => rt.$nodeToRelocate$ === U) ||
                        un.push({ $nodeToRelocate$: U }));
            1 === $.nodeType && In($);
          }
        },
        pt = (O, $) =>
          1 === O.nodeType
            ? (null === O.getAttribute('slot') && '' === $) ||
              O.getAttribute('slot') === $
            : O['s-sn'] === $ || '' === $,
        Kt = (O) => {
          O.$attrs$ && O.$attrs$.ref && O.$attrs$.ref(null),
            O.$children$ && O.$children$.map(Kt);
        },
        kt = (O) => ln(O).$hostElement$,
        tr = (O, $, U) => {
          const K = kt(O);
          return {
            emit: (De) =>
              Bn(K, $, {
                bubbles: !!(4 & U),
                composed: !!(2 & U),
                cancelable: !!(1 & U),
                detail: De,
              }),
          };
        },
        Bn = (O, $, U) => {
          const K = se.ce($, U);
          return O.dispatchEvent(K), K;
        },
        Gn = (O, $) => {
          $ &&
            !O.$onRenderResolve$ &&
            $['s-p'] &&
            $['s-p'].push(new Promise((U) => (O.$onRenderResolve$ = U)));
        },
        _n = (O, $) => {
          if (((O.$flags$ |= 16), !(4 & O.$flags$)))
            return Gn(O, O.$ancestorComponent$), en(() => wt(O, $));
          O.$flags$ |= 512;
        },
        wt = (O, $) => {
          const K = O.$lazyInstance$;
          let De;
          return (
            $ &&
              ((O.$flags$ |= 256),
              O.$queuedListeners$ &&
                (O.$queuedListeners$.map(([N, Q]) => Dt(K, N, Q)),
                (O.$queuedListeners$ = null)),
              (De = Dt(K, 'componentWillLoad'))),
            (De = wn(De, () => Dt(K, 'componentWillRender'))),
            wn(De, () => nr(O, K, $))
          );
        },
        nr = (function () {
          var O = (0, o.Z)(function* ($, U, K) {
            const De = $.$hostElement$,
              Q = De['s-rc'];
            K &&
              ((O) => {
                const $ = O.$cmpMeta$,
                  U = O.$hostElement$,
                  K = $.$flags$,
                  N = he(
                    U.shadowRoot ? U.shadowRoot : U.getRootNode(),
                    $,
                    O.$modeName$
                  );
                10 & K &&
                  ((U['s-sc'] = N),
                  U.classList.add(N + '-h'),
                  2 & K && U.classList.add(N + '-s'));
              })($);
            rr($, U), Q && (Q.map((ke) => ke()), (De['s-rc'] = void 0));
            {
              const ke = De['s-p'],
                Te = () => Ut($);
              0 === ke.length
                ? Te()
                : (Promise.all(ke).then(Te), ($.$flags$ |= 4), (ke.length = 0));
            }
          });
          return function (U, K, De) {
            return O.apply(this, arguments);
          };
        })(),
        rr = (O, $, U) => {
          try {
            ($ = $.render && $.render()),
              (O.$flags$ &= -17),
              (O.$flags$ |= 2),
              ((O, $) => {
                const U = O.$hostElement$,
                  K = O.$cmpMeta$,
                  De = O.$vnode$ || Ft(null, null),
                  N = ((O) => O && O.$tag$ === Mt)($) ? $ : lt(null, null, $);
                if (
                  ((pe = U.tagName),
                  K.$attrsToReflect$ &&
                    ((N.$attrs$ = N.$attrs$ || {}),
                    K.$attrsToReflect$.map(
                      ([Q, ie]) => (N.$attrs$[ie] = U[Q])
                    )),
                  (N.$tag$ = null),
                  (N.$flags$ |= 4),
                  (O.$vnode$ = N),
                  (N.$elm$ = De.$elm$ = U.shadowRoot || U),
                  (z = U['s-sc']),
                  (W = U['s-cr']),
                  (Fe = 0 != (1 & K.$flags$)),
                  (ne = !1),
                  Yt(De, N),
                  (se.$flags$ |= 1),
                  xe)
                ) {
                  In(N.$elm$);
                  let Q,
                    ie,
                    ke,
                    Te,
                    rt,
                    ot,
                    et = 0;
                  for (; et < un.length; et++)
                    (Q = un[et]),
                      (ie = Q.$nodeToRelocate$),
                      ie['s-ol'] ||
                        ((ke = be.createTextNode('')),
                        (ke['s-nr'] = ie),
                        ie.parentNode.insertBefore((ie['s-ol'] = ke), ie));
                  for (et = 0; et < un.length; et++)
                    if (
                      ((Q = un[et]), (ie = Q.$nodeToRelocate$), Q.$slotRefNode$)
                    ) {
                      for (
                        Te = Q.$slotRefNode$.parentNode,
                          rt = Q.$slotRefNode$.nextSibling,
                          ke = ie['s-ol'];
                        (ke = ke.previousSibling);

                      )
                        if (
                          ((ot = ke['s-nr']),
                          ot &&
                            ot['s-sn'] === ie['s-sn'] &&
                            Te === ot.parentNode &&
                            ((ot = ot.nextSibling), !ot || !ot['s-nr']))
                        ) {
                          rt = ot;
                          break;
                        }
                      ((!rt && Te !== ie.parentNode) ||
                        ie.nextSibling !== rt) &&
                        ie !== rt &&
                        (!ie['s-hn'] &&
                          ie['s-ol'] &&
                          (ie['s-hn'] = ie['s-ol'].parentNode.nodeName),
                        Te.insertBefore(ie, rt));
                    } else 1 === ie.nodeType && (ie.hidden = !0);
                }
                ne && At(N.$elm$), (se.$flags$ &= -2), (un.length = 0);
              })(O, $);
          } catch (K) {
            On(K, O.$hostElement$);
          }
          return null;
        },
        Ut = (O) => {
          const U = O.$hostElement$,
            De = O.$lazyInstance$,
            N = O.$ancestorComponent$;
          Dt(De, 'componentDidRender'),
            64 & O.$flags$
              ? Dt(De, 'componentDidUpdate')
              : ((O.$flags$ |= 64),
                An(U),
                Dt(De, 'componentDidLoad'),
                O.$onReadyResolve$(U),
                N || sn()),
            O.$onInstanceResolve$(U),
            O.$onRenderResolve$ &&
              (O.$onRenderResolve$(), (O.$onRenderResolve$ = void 0)),
            512 & O.$flags$ && Tt(() => _n(O, !1)),
            (O.$flags$ &= -517);
        },
        on = (O) => {
          {
            const $ = ln(O),
              U = $.$hostElement$.isConnected;
            return U && 2 == (18 & $.$flags$) && _n($, !1), U;
          }
        },
        sn = (O) => {
          An(be.documentElement),
            Tt(() => Bn(ye, 'appload', { detail: { namespace: 'ionic' } }));
        },
        Dt = (O, $, U) => {
          if (O && O[$])
            try {
              return O[$](U);
            } catch (K) {
              On(K);
            }
        },
        wn = (O, $) => (O && O.then ? O.then($) : $()),
        An = (O) => O.classList.add('hydrated'),
        or = (O, $, U, K, De, N, Q) => {
          let ie, ke, Te, rt;
          if (1 === N.nodeType) {
            for (
              ie = N.getAttribute(k),
                ie &&
                  ((ke = ie.split('.')),
                  (ke[0] === Q || '0' === ke[0]) &&
                    ((Te = {
                      $flags$: 0,
                      $hostId$: ke[0],
                      $nodeId$: ke[1],
                      $depth$: ke[2],
                      $index$: ke[3],
                      $tag$: N.tagName.toLowerCase(),
                      $elm$: N,
                      $attrs$: null,
                      $children$: null,
                      $key$: null,
                      $name$: null,
                      $text$: null,
                    }),
                    $.push(Te),
                    N.removeAttribute(k),
                    O.$children$ || (O.$children$ = []),
                    (O.$children$[Te.$index$] = Te),
                    (O = Te),
                    K && '0' === Te.$depth$ && (K[Te.$index$] = Te.$elm$))),
                rt = N.childNodes.length - 1;
              rt >= 0;
              rt--
            )
              or(O, $, U, K, De, N.childNodes[rt], Q);
            if (N.shadowRoot)
              for (rt = N.shadowRoot.childNodes.length - 1; rt >= 0; rt--)
                or(O, $, U, K, De, N.shadowRoot.childNodes[rt], Q);
          } else if (8 === N.nodeType)
            (ke = N.nodeValue.split('.')),
              (ke[1] === Q || '0' === ke[1]) &&
                ((ie = ke[0]),
                (Te = {
                  $flags$: 0,
                  $hostId$: ke[1],
                  $nodeId$: ke[2],
                  $depth$: ke[3],
                  $index$: ke[4],
                  $elm$: N,
                  $attrs$: null,
                  $children$: null,
                  $key$: null,
                  $name$: null,
                  $tag$: null,
                  $text$: null,
                }),
                't' === ie
                  ? ((Te.$elm$ = N.nextSibling),
                    Te.$elm$ &&
                      3 === Te.$elm$.nodeType &&
                      ((Te.$text$ = Te.$elm$.textContent),
                      $.push(Te),
                      N.remove(),
                      O.$children$ || (O.$children$ = []),
                      (O.$children$[Te.$index$] = Te),
                      K && '0' === Te.$depth$ && (K[Te.$index$] = Te.$elm$)))
                  : Te.$hostId$ === Q &&
                    ('s' === ie
                      ? ((Te.$tag$ = 'slot'),
                        (N['s-sn'] = ke[5] ? (Te.$name$ = ke[5]) : ''),
                        (N['s-sr'] = !0),
                        K &&
                          ((Te.$elm$ = be.createElement(Te.$tag$)),
                          Te.$name$ && Te.$elm$.setAttribute('name', Te.$name$),
                          N.parentNode.insertBefore(Te.$elm$, N),
                          N.remove(),
                          '0' === Te.$depth$ && (K[Te.$index$] = Te.$elm$)),
                        U.push(Te),
                        O.$children$ || (O.$children$ = []),
                        (O.$children$[Te.$index$] = Te))
                      : 'r' === ie &&
                        (K
                          ? N.remove()
                          : ((De['s-cr'] = N), (N['s-cn'] = !0)))));
          else if (O && 'style' === O.$tag$) {
            const ot = Ft(null, N.textContent);
            (ot.$elm$ = N), (ot.$index$ = '0'), (O.$children$ = [ot]);
          }
        },
        hn = (O, $) => {
          if (1 === O.nodeType) {
            let U = 0;
            for (; U < O.childNodes.length; U++) hn(O.childNodes[U], $);
            if (O.shadowRoot)
              for (U = 0; U < O.shadowRoot.childNodes.length; U++)
                hn(O.shadowRoot.childNodes[U], $);
          } else if (8 === O.nodeType) {
            const U = O.nodeValue.split('.');
            'o' === U[0] &&
              ($.set(U[1] + '.' + U[2], O),
              (O.nodeValue = ''),
              (O['s-en'] = U[3]));
          }
        },
        Z = (O, $, U) => {
          if ($.$members$) {
            O.watchers && ($.$watchers$ = O.watchers);
            const K = Object.entries($.$members$),
              De = O.prototype;
            if (
              (K.map(([N, [Q]]) => {
                31 & Q || (2 & U && 32 & Q)
                  ? Object.defineProperty(De, N, {
                      get() {
                        return ((O, $) => ln(this).$instanceValues$.get($))(
                          0,
                          N
                        );
                      },
                      set(ie) {
                        ((O, $, U, K) => {
                          const De = ln(O),
                            N = De.$hostElement$,
                            Q = De.$instanceValues$.get($),
                            ie = De.$flags$,
                            ke = De.$lazyInstance$;
                          U = ((O, $) =>
                            null == O || bt(O)
                              ? O
                              : 4 & $
                              ? 'false' !== O && ('' === O || !!O)
                              : 2 & $
                              ? parseFloat(O)
                              : 1 & $
                              ? String(O)
                              : O)(U, K.$members$[$][0]);
                          const Te = Number.isNaN(Q) && Number.isNaN(U);
                          if (
                            (!(8 & ie) || void 0 === Q) &&
                            U !== Q &&
                            !Te &&
                            (De.$instanceValues$.set($, U), ke)
                          ) {
                            if (K.$watchers$ && 128 & ie) {
                              const ot = K.$watchers$[$];
                              ot &&
                                ot.map((et) => {
                                  try {
                                    ke[et](U, Q, $);
                                  } catch (Nt) {
                                    On(Nt, N);
                                  }
                                });
                            }
                            2 == (18 & ie) && _n(De, !1);
                          }
                        })(this, N, ie, $);
                      },
                      configurable: !0,
                      enumerable: !0,
                    })
                  : 1 & U &&
                    64 & Q &&
                    Object.defineProperty(De, N, {
                      value(...ie) {
                        const ke = ln(this);
                        return ke.$onInstancePromise$.then(() =>
                          ke.$lazyInstance$[N](...ie)
                        );
                      },
                    });
              }),
              1 & U)
            ) {
              const N = new Map();
              (De.attributeChangedCallback = function (Q, ie, ke) {
                se.jmp(() => {
                  const Te = N.get(Q);
                  if (this.hasOwnProperty(Te)) (ke = this[Te]), delete this[Te];
                  else if (
                    De.hasOwnProperty(Te) &&
                    'number' == typeof this[Te] &&
                    this[Te] == ke
                  )
                    return;
                  this[Te] =
                    (null !== ke || 'boolean' != typeof this[Te]) && ke;
                });
              }),
                (O.observedAttributes = K.filter(([Q, ie]) => 15 & ie[0]).map(
                  ([Q, ie]) => {
                    const ke = ie[1] || Q;
                    return (
                      N.set(ke, Q),
                      512 & ie[0] && $.$attrsToReflect$.push([Q, ke]),
                      ke
                    );
                  }
                ));
            }
          }
          return O;
        },
        G = (function () {
          var O = (0, o.Z)(function* ($, U, K, De, N) {
            if (0 == (32 & U.$flags$)) {
              {
                if (((U.$flags$ |= 32), (N = gn(K)).then)) {
                  const Te = () => {};
                  (N = yield N), Te();
                }
                N.isProxied ||
                  ((K.$watchers$ = N.watchers), Z(N, K, 2), (N.isProxied = !0));
                const ke = () => {};
                U.$flags$ |= 8;
                try {
                  new N(U);
                } catch (Te) {
                  On(Te);
                }
                (U.$flags$ &= -9),
                  (U.$flags$ |= 128),
                  ke(),
                  Ae(U.$lazyInstance$);
              }
              if (N.style) {
                let ke = N.style;
                'string' != typeof ke &&
                  (ke =
                    ke[
                      (U.$modeName$ = ((O) =>
                        Sr.map(($) => $(O)).find(($) => !!$))($))
                    ]);
                const Te = re(K, U.$modeName$);
                if (!fr.has(Te)) {
                  const rt = () => {};
                  Pe(Te, ke, !!(1 & K.$flags$)), rt();
                }
              }
            }
            const Q = U.$ancestorComponent$,
              ie = () => _n(U, !0);
            Q && Q['s-rc'] ? Q['s-rc'].push(ie) : ie();
          });
          return function (U, K, De, N, Q) {
            return O.apply(this, arguments);
          };
        })(),
        Ae = (O) => {
          Dt(O, 'connectedCallback');
        },
        ht = (O) => {
          const $ = (O['s-cr'] = be.createComment(''));
          ($['s-cn'] = !0), O.insertBefore($, O.firstChild);
        },
        vt = (O, $ = {}) => {
          const K = [],
            De = $.exclude || [],
            N = ye.customElements,
            Q = be.head,
            ie = Q.querySelector('meta[charset]'),
            ke = be.createElement('style'),
            Te = [],
            rt = be.querySelectorAll(`[${ce}]`);
          let ot,
            et = !0,
            Nt = 0;
          for (
            Object.assign(se, $),
              se.$resourcesUrl$ = new URL(
                $.resourcesUrl || './',
                be.baseURI
              ).href,
              se.$flags$ |= 2;
            Nt < rt.length;
            Nt++
          )
            Pe(rt[Nt].getAttribute(ce), Ve(rt[Nt].innerHTML), !0);
          O.map((Ht) => {
            Ht[1].map((Hn) => {
              const Rn = {
                $flags$: Hn[0],
                $tagName$: Hn[1],
                $members$: Hn[2],
                $listeners$: Hn[3],
              };
              (Rn.$members$ = Hn[2]),
                (Rn.$listeners$ = Hn[3]),
                (Rn.$attrsToReflect$ = []),
                (Rn.$watchers$ = {});
              const dn = Rn.$tagName$,
                _r = class extends HTMLElement {
                  constructor(Zn) {
                    super(Zn),
                      Tn((Zn = this), Rn),
                      1 & Rn.$flags$ &&
                        Zn.attachShadow({
                          mode: 'open',
                          delegatesFocus: !!(16 & Rn.$flags$),
                        });
                  }
                  connectedCallback() {
                    ot && (clearTimeout(ot), (ot = null)),
                      et
                        ? Te.push(this)
                        : se.jmp(() =>
                            ((O) => {
                              if (0 == (1 & se.$flags$)) {
                                const $ = ln(O),
                                  U = $.$cmpMeta$,
                                  K = () => {};
                                if (1 & $.$flags$)
                                  J(O, $, U.$listeners$), Ae($.$lazyInstance$);
                                else {
                                  let De;
                                  if (
                                    (($.$flags$ |= 1),
                                    (De = O.getAttribute(oe)),
                                    De)
                                  ) {
                                    if (1 & U.$flags$) {
                                      const N = he(
                                        O.shadowRoot,
                                        U,
                                        O.getAttribute('s-mode')
                                      );
                                      O.classList.remove(N + '-h', N + '-s');
                                    }
                                    ((O, $, U, K) => {
                                      const N = O.shadowRoot,
                                        Q = [],
                                        ke = N ? [] : null,
                                        Te = (K.$vnode$ = Ft($, null));
                                      se.$orgLocNodes$ ||
                                        hn(
                                          be.body,
                                          (se.$orgLocNodes$ = new Map())
                                        ),
                                        (O[oe] = U),
                                        O.removeAttribute(oe),
                                        or(Te, Q, [], ke, O, O, U),
                                        Q.map((rt) => {
                                          const ot =
                                              rt.$hostId$ + '.' + rt.$nodeId$,
                                            et = se.$orgLocNodes$.get(ot),
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
                                            se.$orgLocNodes$.delete(ot);
                                        }),
                                        N &&
                                          ke.map((rt) => {
                                            rt && N.appendChild(rt);
                                          });
                                    })(O, U.$tagName$, De, $);
                                  }
                                  De || (12 & U.$flags$ && ht(O));
                                  {
                                    let N = O;
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
                                  U.$members$ &&
                                    Object.entries(U.$members$).map(
                                      ([N, [Q]]) => {
                                        if (31 & Q && O.hasOwnProperty(N)) {
                                          const ie = O[N];
                                          delete O[N], (O[N] = ie);
                                        }
                                      }
                                    ),
                                    Tt(() => G(O, $, U));
                                }
                                K();
                              }
                            })(this)
                          );
                  }
                  disconnectedCallback() {
                    se.jmp(() =>
                      ((O) => {
                        if (0 == (1 & se.$flags$)) {
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
              (Rn.$lazyBundleId$ = Ht[0]),
                !De.includes(dn) &&
                  !N.get(dn) &&
                  (K.push(dn), N.define(dn, Z(_r, Rn, 1)));
            });
          }),
            (ke.innerHTML =
              K + '{visibility:hidden}.hydrated{visibility:inherit}'),
            ke.setAttribute('data-styles', ''),
            Q.insertBefore(ke, ie ? ie.nextSibling : Q.firstChild),
            (et = !1),
            Te.length
              ? Te.map((Ht) => Ht.connectedCallback())
              : se.jmp(() => (ot = setTimeout(sn, 30)));
        },
        Zt = (O) => {
          const $ = new URL(O, se.$resourcesUrl$);
          return $.origin !== ye.location.origin ? $.href : $.pathname;
        },
        an = new WeakMap(),
        ln = (O) => an.get(O),
        ir = (O, $) => an.set(($.$lazyInstance$ = O), $),
        Tn = (O, $) => {
          const U = {
            $flags$: 0,
            $hostElement$: O,
            $cmpMeta$: $,
            $instanceValues$: new Map(),
          };
          return (
            (U.$onInstancePromise$ = new Promise(
              (K) => (U.$onInstanceResolve$ = K)
            )),
            (U.$onReadyPromise$ = new Promise((K) => (U.$onReadyResolve$ = K))),
            (O['s-p'] = []),
            (O['s-rc'] = []),
            J(O, U, $.$listeners$),
            an.set(O, U)
          );
        },
        pn = (O, $) => $ in O,
        On = (O, $) => (0, console.error)(O, $),
        Sn = new Map(),
        gn = (O, $, U) => {
          const K = O.$tagName$.replace(/-/g, '_'),
            De = O.$lazyBundleId$,
            N = Sn.get(De);
          return N
            ? N[K]
            : T(863)(`./${De}.entry.js`).then((Q) => (Sn.set(De, Q), Q[K]), On);
        },
        fr = new Map(),
        Sr = [],
        pr = [],
        Cr = [],
        sr = (O, $) => (U) => {
          O.push(U),
            Oe || ((Oe = !0), $ && 4 & se.$flags$ ? Tt(yn) : se.raf(yn));
        },
        ar = (O) => {
          for (let $ = 0; $ < O.length; $++)
            try {
              O[$](performance.now());
            } catch (U) {
              On(U);
            }
          O.length = 0;
        },
        yn = () => {
          ar(pr), ar(Cr), (Oe = pr.length > 0) && se.raf(yn);
        },
        Tt = (O) => Le().then(O),
        mn = sr(pr, !1),
        en = sr(Cr, !0),
        xn = { isDev: !1, isBrowser: !0, isServer: !1, isTesting: !1 };
    },
    697: (at, $e, T) => {
      'use strict';
      T.d($e, {
        L: () => W,
        a: () => pe,
        b: () => Fe,
        c: () => ne,
        d: () => xe,
        e: () => Y,
        g: () => k,
        l: () => Ne,
        s: () => oe,
        t: () => ye,
      });
      var o = T(5861),
        L = T(1308),
        z = T(5730);
      const W = 'ionViewWillEnter',
        pe = 'ionViewDidEnter',
        Fe = 'ionViewWillLeave',
        ne = 'ionViewDidLeave',
        xe = 'ionViewWillUnload',
        ye = (V) =>
          new Promise((j, S) => {
            (0, L.c)(() => {
              be(V),
                se(V).then(
                  (B) => {
                    B.animation && B.animation.destroy(), ee(V), j(B);
                  },
                  (B) => {
                    ee(V), S(B);
                  }
                );
            });
          }),
        be = (V) => {
          const j = V.enteringEl,
            S = V.leavingEl;
          ce(j, S, V.direction),
            V.showGoBack
              ? j.classList.add('can-go-back')
              : j.classList.remove('can-go-back'),
            oe(j, !1),
            j.style.setProperty('pointer-events', 'none'),
            S && (oe(S, !1), S.style.setProperty('pointer-events', 'none'));
        },
        se = (function () {
          var V = (0, o.Z)(function* (j) {
            const S = yield ge(j);
            return S && L.B.isBrowser ? Le(S, j) : fe(j);
          });
          return function (S) {
            return V.apply(this, arguments);
          };
        })(),
        ee = (V) => {
          const j = V.enteringEl,
            S = V.leavingEl;
          j.classList.remove('ion-page-invisible'),
            j.style.removeProperty('pointer-events'),
            void 0 !== S &&
              (S.classList.remove('ion-page-invisible'),
              S.style.removeProperty('pointer-events'));
        },
        ge = (function () {
          var V = (0, o.Z)(function* (j) {
            return j.leavingEl && j.animated && 0 !== j.duration
              ? j.animationBuilder
                ? j.animationBuilder
                : 'ios' === j.mode
                ? (yield Promise.resolve().then(T.bind(T, 3953)))
                    .iosTransitionAnimation
                : (yield Promise.resolve().then(T.bind(T, 3880)))
                    .mdTransitionAnimation
              : void 0;
          });
          return function (S) {
            return V.apply(this, arguments);
          };
        })(),
        Le = (function () {
          var V = (0, o.Z)(function* (j, S) {
            yield J(S, !0);
            const B = j(S.baseEl, S);
            me(S.enteringEl, S.leavingEl);
            const q = yield de(B, S);
            return (
              S.progressCallback && S.progressCallback(void 0),
              q && ue(S.enteringEl, S.leavingEl),
              { hasCompleted: q, animation: B }
            );
          });
          return function (S, B) {
            return V.apply(this, arguments);
          };
        })(),
        fe = (function () {
          var V = (0, o.Z)(function* (j) {
            const S = j.enteringEl,
              B = j.leavingEl;
            return yield J(j, !1), me(S, B), ue(S, B), { hasCompleted: !0 };
          });
          return function (S) {
            return V.apply(this, arguments);
          };
        })(),
        J = (function () {
          var V = (0, o.Z)(function* (j, S) {
            const q = (void 0 !== j.deepWait ? j.deepWait : S)
              ? [Y(j.enteringEl), Y(j.leavingEl)]
              : [le(j.enteringEl), le(j.leavingEl)];
            yield Promise.all(q), yield Be(j.viewIsReady, j.enteringEl);
          });
          return function (S, B) {
            return V.apply(this, arguments);
          };
        })(),
        Be = (function () {
          var V = (0, o.Z)(function* (j, S) {
            j && (yield j(S));
          });
          return function (S, B) {
            return V.apply(this, arguments);
          };
        })(),
        de = (V, j) => {
          const S = j.progressCallback,
            B = new Promise((q) => {
              V.onFinish((Pe) => q(1 === Pe));
            });
          return S ? (V.progressStart(!0), S(V)) : V.play(), B;
        },
        me = (V, j) => {
          Ne(j, Fe), Ne(V, W);
        },
        ue = (V, j) => {
          Ne(V, pe), Ne(j, ne);
        },
        Ne = (V, j) => {
          if (V) {
            const S = new CustomEvent(j, { bubbles: !1, cancelable: !1 });
            V.dispatchEvent(S);
          }
        },
        le = (V) =>
          V ? new Promise((j) => (0, z.c)(V, j)) : Promise.resolve(),
        Y = (function () {
          var V = (0, o.Z)(function* (j) {
            const S = j;
            if (S) {
              if (null != S.componentOnReady) {
                if (null != (yield S.componentOnReady())) return;
              } else if (null != S.__registerHost)
                return void (yield new Promise((q) => (0, z.r)(q)));
              yield Promise.all(Array.from(S.children).map(Y));
            }
          });
          return function (S) {
            return V.apply(this, arguments);
          };
        })(),
        oe = (V, j) => {
          j
            ? (V.setAttribute('aria-hidden', 'true'),
              V.classList.add('ion-page-hidden'))
            : ((V.hidden = !1),
              V.removeAttribute('aria-hidden'),
              V.classList.remove('ion-page-hidden'));
        },
        ce = (V, j, S) => {
          void 0 !== V && (V.style.zIndex = 'back' === S ? '99' : '101'),
            void 0 !== j && (j.style.zIndex = '100');
        },
        k = (V) =>
          V.classList.contains('ion-page')
            ? V
            : V.querySelector(
                ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
              ) || V;
    },
    1911: (at, $e, T) => {
      'use strict';
      T.r($e),
        T.d($e, { GESTURE_CONTROLLER: () => o.G, createGesture: () => we });
      var o = T(4349);
      const L = (se, ee, ge, Le) => {
          const fe = z(se)
            ? { capture: !!Le.capture, passive: !!Le.passive }
            : !!Le.capture;
          let J, Be;
          return (
            se.__zone_symbol__addEventListener
              ? ((J = '__zone_symbol__addEventListener'),
                (Be = '__zone_symbol__removeEventListener'))
              : ((J = 'addEventListener'), (Be = 'removeEventListener')),
            se[J](ee, ge, fe),
            () => {
              se[Be](ee, ge, fe);
            }
          );
        },
        z = (se) => {
          if (void 0 === W)
            try {
              const ee = Object.defineProperty({}, 'passive', {
                get: () => {
                  W = !0;
                },
              });
              se.addEventListener('optsTest', () => {}, ee);
            } catch {
              W = !1;
            }
          return !!W;
        };
      let W;
      const ne = (se) => (se instanceof Document ? se : se.ownerDocument),
        we = (se) => {
          let ee = !1,
            ge = !1,
            Le = !0,
            fe = !1;
          const J = Object.assign(
              {
                disableScroll: !1,
                direction: 'x',
                gesturePriority: 0,
                passive: !0,
                maxAngle: 40,
                threshold: 10,
              },
              se
            ),
            Be = J.canStart,
            de = J.onWillStart,
            me = J.onStart,
            ue = J.onEnd,
            Ne = J.notCaptured,
            le = J.onMove,
            Y = J.threshold,
            oe = J.passive,
            ce = J.blurOnStart,
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
            V = ((se, ee, ge) => {
              const Le = ge * (Math.PI / 180),
                fe = 'x' === se,
                J = Math.cos(Le),
                Be = ee * ee;
              let de = 0,
                me = 0,
                ue = !1,
                Ne = 0;
              return {
                start(le, Y) {
                  (de = le), (me = Y), (Ne = 0), (ue = !0);
                },
                detect(le, Y) {
                  if (!ue) return !1;
                  const oe = le - de,
                    ce = Y - me,
                    k = oe * oe + ce * ce;
                  if (k < Be) return !1;
                  const V = Math.sqrt(k),
                    j = (fe ? oe : ce) / V;
                  return (Ne = j > J ? 1 : j < -J ? -1 : 0), (ue = !1), !0;
                },
                isGesture: () => 0 !== Ne,
                getDirection: () => Ne,
              };
            })(J.direction, J.threshold, J.maxAngle),
            j = o.G.createGesture({
              name: se.gestureName,
              priority: se.gesturePriority,
              disableScroll: se.disableScroll,
            }),
            q = () => {
              !ee || ((fe = !1), le && le(k));
            },
            Pe = () =>
              !!j.capture() &&
              ((ee = !0),
              (Le = !1),
              (k.startX = k.currentX),
              (k.startY = k.currentY),
              (k.startTime = k.currentTime),
              de ? de(k).then(ve) : ve(),
              !0),
            ve = () => {
              ce &&
                (() => {
                  if (typeof document < 'u') {
                    const Me = document.activeElement;
                    Me?.blur && Me.blur();
                  }
                })(),
                me && me(k),
                (Le = !0);
            },
            re = () => {
              (ee = !1), (ge = !1), (fe = !1), (Le = !0), j.release();
            },
            Ve = (Me) => {
              const We = ee,
                nt = Le;
              if ((re(), nt)) {
                if ((Oe(k, Me), We)) return void (ue && ue(k));
                Ne && Ne(k);
              }
            },
            He = ((se, ee, ge, Le, fe) => {
              let J,
                Be,
                de,
                me,
                ue,
                Ne,
                le,
                Y = 0;
              const oe = (he) => {
                  (Y = Date.now() + 2e3),
                    ee(he) &&
                      (!Be && ge && (Be = L(se, 'touchmove', ge, fe)),
                      de || (de = L(he.target, 'touchend', k, fe)),
                      me || (me = L(he.target, 'touchcancel', k, fe)));
                },
                ce = (he) => {
                  Y > Date.now() ||
                    !ee(he) ||
                    (!Ne && ge && (Ne = L(ne(se), 'mousemove', ge, fe)),
                    le || (le = L(ne(se), 'mouseup', V, fe)));
                },
                k = (he) => {
                  j(), Le && Le(he);
                },
                V = (he) => {
                  S(), Le && Le(he);
                },
                j = () => {
                  Be && Be(), de && de(), me && me(), (Be = de = me = void 0);
                },
                S = () => {
                  Ne && Ne(), le && le(), (Ne = le = void 0);
                },
                B = () => {
                  j(), S();
                },
                q = (he = !0) => {
                  he
                    ? (J || (J = L(se, 'touchstart', oe, fe)),
                      ue || (ue = L(se, 'mousedown', ce, fe)))
                    : (J && J(), ue && ue(), (J = ue = void 0), B());
                };
              return {
                enable: q,
                stop: B,
                destroy: () => {
                  q(!1), (Le = ge = ee = void 0);
                },
              };
            })(
              J.el,
              (Me) => {
                const We = be(Me);
                return (
                  !(
                    ge ||
                    !Le ||
                    (ye(Me, k),
                    (k.startX = k.currentX),
                    (k.startY = k.currentY),
                    (k.startTime = k.currentTime = We),
                    (k.velocityX = k.velocityY = k.deltaX = k.deltaY = 0),
                    (k.event = Me),
                    Be && !1 === Be(k)) ||
                    (j.release(), !j.start())
                  ) &&
                  ((ge = !0),
                  0 === Y ? Pe() : (V.start(k.startX, k.startY), !0))
                );
              },
              (Me) => {
                ee
                  ? !fe &&
                    Le &&
                    ((fe = !0), Oe(k, Me), requestAnimationFrame(q))
                  : (Oe(k, Me),
                    V.detect(k.currentX, k.currentY) &&
                      (!V.isGesture() || !Pe()) &&
                      Ee());
              },
              Ve,
              { capture: !1, passive: oe }
            ),
            Ee = () => {
              re(), He.stop(), Ne && Ne(k);
            };
          return {
            enable(Me = !0) {
              Me || (ee && Ve(void 0), re()), He.enable(Me);
            },
            destroy() {
              j.destroy(), He.destroy();
            },
          };
        },
        Oe = (se, ee) => {
          if (!ee) return;
          const ge = se.currentX,
            Le = se.currentY,
            fe = se.currentTime;
          ye(ee, se);
          const J = se.currentX,
            Be = se.currentY,
            me = (se.currentTime = be(ee)) - fe;
          if (me > 0 && me < 100) {
            const Ne = (Be - Le) / me;
            (se.velocityX = ((J - ge) / me) * 0.7 + 0.3 * se.velocityX),
              (se.velocityY = 0.7 * Ne + 0.3 * se.velocityY);
          }
          (se.deltaX = J - se.startX),
            (se.deltaY = Be - se.startY),
            (se.event = ee);
        },
        ye = (se, ee) => {
          let ge = 0,
            Le = 0;
          if (se) {
            const fe = se.changedTouches;
            if (fe && fe.length > 0) {
              const J = fe[0];
              (ge = J.clientX), (Le = J.clientY);
            } else void 0 !== se.pageX && ((ge = se.pageX), (Le = se.pageY));
          }
          (ee.currentX = ge), (ee.currentY = Le);
        },
        be = (se) => se.timeStamp || Date.now();
    },
    9658: (at, $e, T) => {
      'use strict';
      T.d($e, {
        a: () => ye,
        b: () => q,
        c: () => z,
        g: () => Oe,
        i: () => Pe,
      });
      var o = T(1308);
      class L {
        constructor() {
          this.m = new Map();
        }
        reset(ve) {
          this.m = new Map(Object.entries(ve));
        }
        get(ve, re) {
          const Ve = this.m.get(ve);
          return void 0 !== Ve ? Ve : re;
        }
        getBoolean(ve, re = !1) {
          const Ve = this.m.get(ve);
          return void 0 === Ve
            ? re
            : 'string' == typeof Ve
            ? 'true' === Ve
            : !!Ve;
        }
        getNumber(ve, re) {
          const Ve = parseFloat(this.m.get(ve));
          return isNaN(Ve) ? (void 0 !== re ? re : NaN) : Ve;
        }
        set(ve, re) {
          this.m.set(ve, re);
        }
      }
      const z = new L(),
        we = 'ionic-persist-config',
        Oe = (he) => be(he),
        ye = (he, ve) => (
          'string' == typeof he && ((ve = he), (he = void 0)),
          Oe(he).includes(ve)
        ),
        be = (he = window) => {
          if (typeof he > 'u') return [];
          he.Ionic = he.Ionic || {};
          let ve = he.Ionic.platforms;
          return (
            null == ve &&
              ((ve = he.Ionic.platforms = se(he)),
              ve.forEach((re) =>
                he.document.documentElement.classList.add(`plt-${re}`)
              )),
            ve
          );
        },
        se = (he) => {
          const ve = z.get('platform');
          return Object.keys(S).filter((re) => {
            const Ve = ve?.[re];
            return 'function' == typeof Ve ? Ve(he) : S[re](he);
          });
        },
        ge = (he) => !!(V(he, /iPad/i) || (V(he, /Macintosh/i) && ue(he))),
        J = (he) => V(he, /android|sink/i),
        ue = (he) => j(he, '(any-pointer:coarse)'),
        le = (he) => Y(he) || oe(he),
        Y = (he) => !!(he.cordova || he.phonegap || he.PhoneGap),
        oe = (he) => !!he.Capacitor?.isNative,
        V = (he, ve) => ve.test(he.navigator.userAgent),
        j = (he, ve) => {
          var re;
          return null === (re = he.matchMedia) || void 0 === re
            ? void 0
            : re.call(he, ve).matches;
        },
        S = {
          ipad: ge,
          iphone: (he) => V(he, /iPhone/i),
          ios: (he) => V(he, /iPhone|iPod/i) || ge(he),
          android: J,
          phablet: (he) => {
            const ve = he.innerWidth,
              re = he.innerHeight,
              Ve = Math.min(ve, re),
              He = Math.max(ve, re);
            return Ve > 390 && Ve < 520 && He > 620 && He < 800;
          },
          tablet: (he) => {
            const ve = he.innerWidth,
              re = he.innerHeight,
              Ve = Math.min(ve, re),
              He = Math.max(ve, re);
            return (
              ge(he) ||
              ((he) => J(he) && !V(he, /mobile/i))(he) ||
              (Ve > 460 && Ve < 820 && He > 780 && He < 1400)
            );
          },
          cordova: Y,
          capacitor: oe,
          electron: (he) => V(he, /electron/i),
          pwa: (he) => {
            var ve;
            return !(
              !(null === (ve = he.matchMedia) || void 0 === ve
                ? void 0
                : ve.call(he, '(display-mode: standalone)').matches) &&
              !he.navigator.standalone
            );
          },
          mobile: ue,
          mobileweb: (he) => ue(he) && !le(he),
          desktop: (he) => !ue(he),
          hybrid: le,
        };
      let B;
      const q = (he) => (he && (0, o.g)(he)) || B,
        Pe = (he = {}) => {
          if (typeof window > 'u') return;
          const ve = window.document,
            re = window,
            Ve = (re.Ionic = re.Ionic || {}),
            He = {};
          he._ael && (He.ael = he._ael),
            he._rel && (He.rel = he._rel),
            he._ce && (He.ce = he._ce),
            (0, o.s)(He);
          const Ee = Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    ((he) => {
                      try {
                        const ve = he.sessionStorage.getItem(we);
                        return null !== ve ? JSON.parse(ve) : {};
                      } catch {
                        return {};
                      }
                    })(re)
                  ),
                  { persistConfig: !1 }
                ),
                Ve.config
              ),
              ((he) => {
                const ve = {};
                return (
                  he.location.search
                    .slice(1)
                    .split('&')
                    .map((re) => re.split('='))
                    .map(([re, Ve]) => [
                      decodeURIComponent(re),
                      decodeURIComponent(Ve),
                    ])
                    .filter(([re]) =>
                      ((he, ve) => he.substr(0, ve.length) === ve)(re, 'ionic:')
                    )
                    .map(([re, Ve]) => [re.slice('ionic:'.length), Ve])
                    .forEach(([re, Ve]) => {
                      ve[re] = Ve;
                    }),
                  ve
                );
              })(re)
            ),
            he
          );
          z.reset(Ee),
            z.getBoolean('persistConfig') &&
              ((he, ve) => {
                try {
                  he.sessionStorage.setItem(we, JSON.stringify(ve));
                } catch {
                  return;
                }
              })(re, Ee),
            be(re),
            (Ve.config = z),
            (Ve.mode = B =
              z.get(
                'mode',
                ve.documentElement.getAttribute('mode') ||
                  (ye(re, 'ios') ? 'ios' : 'md')
              )),
            z.set('mode', B),
            ve.documentElement.setAttribute('mode', B),
            ve.documentElement.classList.add(B),
            z.getBoolean('_testing') && z.set('animated', !1);
          const Me = (nt) => {
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
                Me(nt) &&
                  console.warn(
                    'Invalid ionic mode: "' + Ke + '", expected: "ios" or "md"'
                  );
              }
              nt = nt.parentElement;
            }
            return B;
          });
        };
    },
    3953: (at, $e, T) => {
      'use strict';
      T.r($e), T.d($e, { iosTransitionAnimation: () => se, shadow: () => ne });
      var o = T(8834),
        L = T(697);
      T(3457), T(1308);
      const Fe = (ee) => document.querySelector(`${ee}.ion-cloned-element`),
        ne = (ee) => ee.shadowRoot || ee,
        xe = (ee) => {
          const ge =
              'ION-TABS' === ee.tagName ? ee : ee.querySelector('ion-tabs'),
            Le =
              'ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large';
          if (null != ge) {
            const fe = ge.querySelector(
              'ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)'
            );
            return null != fe ? fe.querySelector(Le) : null;
          }
          return ee.querySelector(Le);
        },
        we = (ee, ge) => {
          const Le =
            'ION-TABS' === ee.tagName ? ee : ee.querySelector('ion-tabs');
          let fe = [];
          if (null != Le) {
            const J = Le.querySelector(
              'ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)'
            );
            null != J && (fe = J.querySelectorAll('ion-buttons'));
          } else fe = ee.querySelectorAll('ion-buttons');
          for (const J of fe) {
            const Be = J.closest('ion-header'),
              de =
                Be &&
                !Be.classList.contains('header-collapse-condense-inactive'),
              me = J.querySelector('ion-back-button'),
              ue = J.classList.contains('buttons-collapse'),
              Ne = 'start' === J.slot || '' === J.slot;
            if (null !== me && Ne && ((ue && de && ge) || !ue)) return me;
          }
          return null;
        },
        ye = (ee, ge, Le, fe, J, Be) => {
          const de = ge ? `calc(100% - ${Be.right + 4}px)` : Be.left - 4 + 'px',
            me = ge ? '7px' : '-7px',
            ue = ge ? '-4px' : '4px',
            Ne = ge ? '-4px' : '4px',
            le = ge ? 'right' : 'left',
            Y = ge ? 'left' : 'right',
            k = Le
              ? [
                  {
                    offset: 0,
                    opacity: 1,
                    transform: `translate3d(${ue}, ${
                      Be.top - 46
                    }px, 0) scale(1)`,
                  },
                  { offset: 0.6, opacity: 0 },
                  {
                    offset: 1,
                    opacity: 0,
                    transform: `translate3d(${me}, ${
                      J.top - 40
                    }px, 0) scale(2.1)`,
                  },
                ]
              : [
                  {
                    offset: 0,
                    opacity: 0,
                    transform: `translate3d(${me}, ${
                      J.top - 40
                    }px, 0) scale(2.1)`,
                  },
                  {
                    offset: 1,
                    opacity: 1,
                    transform: `translate3d(${ue}, ${
                      Be.top - 46
                    }px, 0) scale(1)`,
                  },
                ],
            S = Le
              ? [
                  {
                    offset: 0,
                    opacity: 1,
                    transform: `translate3d(${Ne}, ${
                      Be.top - 46
                    }px, 0) scale(1)`,
                  },
                  {
                    offset: 0.2,
                    opacity: 0,
                    transform: `translate3d(${Ne}, ${
                      Be.top - 41
                    }px, 0) scale(0.6)`,
                  },
                  {
                    offset: 1,
                    opacity: 0,
                    transform: `translate3d(${Ne}, ${
                      Be.top - 41
                    }px, 0) scale(0.6)`,
                  },
                ]
              : [
                  {
                    offset: 0,
                    opacity: 0,
                    transform: `translate3d(${Ne}, ${
                      Be.top - 41
                    }px, 0) scale(0.6)`,
                  },
                  {
                    offset: 1,
                    opacity: 1,
                    transform: `translate3d(${Ne}, ${
                      Be.top - 46
                    }px, 0) scale(1)`,
                  },
                ],
            B = (0, o.c)(),
            q = (0, o.c)(),
            Pe = Fe('ion-back-button'),
            he = ne(Pe).querySelector('.button-text'),
            ve = ne(Pe).querySelector('ion-icon');
          (Pe.text = fe.text),
            (Pe.mode = fe.mode),
            (Pe.icon = fe.icon),
            (Pe.color = fe.color),
            (Pe.disabled = fe.disabled),
            Pe.style.setProperty('display', 'block'),
            Pe.style.setProperty('position', 'fixed'),
            q.addElement(ve),
            B.addElement(he),
            B.beforeStyles({ 'transform-origin': `${le} center` })
              .beforeAddWrite(() => {
                fe.style.setProperty('display', 'none'),
                  Pe.style.setProperty(le, de);
              })
              .afterAddWrite(() => {
                fe.style.setProperty('display', ''),
                  Pe.style.setProperty('display', 'none'),
                  Pe.style.removeProperty(le);
              })
              .keyframes(k),
            q.beforeStyles({ 'transform-origin': `${Y} center` }).keyframes(S),
            ee.addAnimation([B, q]);
        },
        be = (ee, ge, Le, fe, J, Be) => {
          const de = ge ? `calc(100% - ${J.right}px)` : `${J.left}px`,
            me = ge ? '-18px' : '18px',
            ue = ge ? 'right' : 'left',
            Y = Le
              ? [
                  {
                    offset: 0,
                    opacity: 0,
                    transform: `translate3d(${me}, ${
                      Be.top - 4
                    }px, 0) scale(0.49)`,
                  },
                  { offset: 0.1, opacity: 0 },
                  {
                    offset: 1,
                    opacity: 1,
                    transform: `translate3d(0, ${J.top - 2}px, 0) scale(1)`,
                  },
                ]
              : [
                  {
                    offset: 0,
                    opacity: 0.99,
                    transform: `translate3d(0, ${J.top - 2}px, 0) scale(1)`,
                  },
                  { offset: 0.6, opacity: 0 },
                  {
                    offset: 1,
                    opacity: 0,
                    transform: `translate3d(${me}, ${
                      Be.top - 4
                    }px, 0) scale(0.5)`,
                  },
                ],
            oe = Fe('ion-title'),
            ce = (0, o.c)();
          (oe.innerText = fe.innerText),
            (oe.size = fe.size),
            (oe.color = fe.color),
            ce.addElement(oe),
            ce
              .beforeStyles({
                'transform-origin': `${ue} center`,
                height: '46px',
                display: '',
                position: 'relative',
                [ue]: de,
              })
              .beforeAddWrite(() => {
                fe.style.setProperty('display', 'none');
              })
              .afterAddWrite(() => {
                fe.style.setProperty('display', ''),
                  oe.style.setProperty('display', 'none');
              })
              .keyframes(Y),
            ee.addAnimation(ce);
        },
        se = (ee, ge) => {
          var Le;
          try {
            const fe = 'cubic-bezier(0.32,0.72,0,1)',
              J = 'opacity',
              Be = 'transform',
              de = '0%',
              ue = 'rtl' === ee.ownerDocument.dir,
              Ne = ue ? '-99.5%' : '99.5%',
              le = ue ? '33%' : '-33%',
              Y = ge.enteringEl,
              oe = ge.leavingEl,
              ce = 'back' === ge.direction,
              k = Y.querySelector(':scope > ion-content'),
              V = Y.querySelectorAll(
                ':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'
              ),
              j = Y.querySelectorAll(':scope > ion-header > ion-toolbar'),
              S = (0, o.c)(),
              B = (0, o.c)();
            if (
              (S.addElement(Y)
                .duration(
                  (null !== (Le = ge.duration) && void 0 !== Le ? Le : 0) || 540
                )
                .easing(ge.easing || fe)
                .fill('both')
                .beforeRemoveClass('ion-page-invisible'),
              oe && null != ee)
            ) {
              const ve = (0, o.c)();
              ve.addElement(ee), S.addAnimation(ve);
            }
            if (
              (k || 0 !== j.length || 0 !== V.length
                ? (B.addElement(k), B.addElement(V))
                : B.addElement(
                    Y.querySelector(
                      ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
                    )
                  ),
              S.addAnimation(B),
              ce
                ? B.beforeClearStyles([J])
                    .fromTo(
                      'transform',
                      `translateX(${le})`,
                      `translateX(${de})`
                    )
                    .fromTo(J, 0.8, 1)
                : B.beforeClearStyles([J]).fromTo(
                    'transform',
                    `translateX(${Ne})`,
                    `translateX(${de})`
                  ),
              k)
            ) {
              const ve = ne(k).querySelector('.transition-effect');
              if (ve) {
                const re = ve.querySelector('.transition-cover'),
                  Ve = ve.querySelector('.transition-shadow'),
                  He = (0, o.c)(),
                  Ee = (0, o.c)(),
                  Me = (0, o.c)();
                He.addElement(ve)
                  .beforeStyles({ opacity: '1', display: 'block' })
                  .afterStyles({ opacity: '', display: '' }),
                  Ee.addElement(re).beforeClearStyles([J]).fromTo(J, 0, 0.1),
                  Me.addElement(Ve).beforeClearStyles([J]).fromTo(J, 0.03, 0.7),
                  He.addAnimation([Ee, Me]),
                  B.addAnimation([He]);
              }
            }
            const q = Y.querySelector('ion-header.header-collapse-condense'),
              { forward: Pe, backward: he } = ((ee, ge, Le, fe, J) => {
                const Be = we(fe, Le),
                  de = xe(J),
                  me = xe(fe),
                  ue = we(J, Le),
                  Ne = null !== Be && null !== de && !Le,
                  le = null !== me && null !== ue && Le;
                if (Ne) {
                  const Y = de.getBoundingClientRect(),
                    oe = Be.getBoundingClientRect();
                  be(ee, ge, Le, de, Y, oe), ye(ee, ge, Le, Be, Y, oe);
                } else if (le) {
                  const Y = me.getBoundingClientRect(),
                    oe = ue.getBoundingClientRect();
                  be(ee, ge, Le, me, Y, oe), ye(ee, ge, Le, ue, Y, oe);
                }
                return { forward: Ne, backward: le };
              })(S, ue, ce, Y, oe);
            if (
              (j.forEach((ve) => {
                const re = (0, o.c)();
                re.addElement(ve), S.addAnimation(re);
                const Ve = (0, o.c)();
                Ve.addElement(ve.querySelector('ion-title'));
                const He = (0, o.c)(),
                  Ee = Array.from(
                    ve.querySelectorAll('ion-buttons,[menuToggle]')
                  ),
                  Me = ve.closest('ion-header'),
                  We = Me?.classList.contains(
                    'header-collapse-condense-inactive'
                  );
                let nt;
                (nt = Ee.filter(
                  ce
                    ? (Ft) => {
                        const Mt = Ft.classList.contains('buttons-collapse');
                        return (Mt && !We) || !Mt;
                      }
                    : (Ft) => !Ft.classList.contains('buttons-collapse')
                )),
                  He.addElement(nt);
                const Ke = (0, o.c)();
                Ke.addElement(
                  ve.querySelectorAll(
                    ':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'
                  )
                );
                const ft = (0, o.c)();
                ft.addElement(ne(ve).querySelector('.toolbar-background'));
                const bt = (0, o.c)(),
                  lt = ve.querySelector('ion-back-button');
                if (
                  (lt && bt.addElement(lt),
                  re.addAnimation([Ve, He, Ke, ft, bt]),
                  He.fromTo(J, 0.01, 1),
                  Ke.fromTo(J, 0.01, 1),
                  ce)
                )
                  We ||
                    Ve.fromTo(
                      'transform',
                      `translateX(${le})`,
                      `translateX(${de})`
                    ).fromTo(J, 0.01, 1),
                    Ke.fromTo(
                      'transform',
                      `translateX(${le})`,
                      `translateX(${de})`
                    ),
                    bt.fromTo(J, 0.01, 1);
                else if (
                  (q ||
                    Ve.fromTo(
                      'transform',
                      `translateX(${Ne})`,
                      `translateX(${de})`
                    ).fromTo(J, 0.01, 1),
                  Ke.fromTo(
                    'transform',
                    `translateX(${Ne})`,
                    `translateX(${de})`
                  ),
                  ft.beforeClearStyles([J, 'transform']),
                  Me?.translucent
                    ? ft.fromTo(
                        'transform',
                        ue ? 'translateX(-100%)' : 'translateX(100%)',
                        'translateX(0px)'
                      )
                    : ft.fromTo(J, 0.01, 'var(--opacity)'),
                  Pe || bt.fromTo(J, 0.01, 1),
                  lt && !Pe)
                ) {
                  const Mt = (0, o.c)();
                  Mt.addElement(ne(lt).querySelector('.button-text')).fromTo(
                    'transform',
                    ue ? 'translateX(-100px)' : 'translateX(100px)',
                    'translateX(0px)'
                  ),
                    re.addAnimation(Mt);
                }
              }),
              oe)
            ) {
              const ve = (0, o.c)(),
                re = oe.querySelector(':scope > ion-content'),
                Ve = oe.querySelectorAll(':scope > ion-header > ion-toolbar'),
                He = oe.querySelectorAll(
                  ':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'
                );
              if (
                (re || 0 !== Ve.length || 0 !== He.length
                  ? (ve.addElement(re), ve.addElement(He))
                  : ve.addElement(
                      oe.querySelector(
                        ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
                      )
                    ),
                S.addAnimation(ve),
                ce)
              ) {
                ve.beforeClearStyles([J]).fromTo(
                  'transform',
                  `translateX(${de})`,
                  ue ? 'translateX(-100%)' : 'translateX(100%)'
                );
                const Ee = (0, L.g)(oe);
                S.afterAddWrite(() => {
                  'normal' === S.getDirection() &&
                    Ee.style.setProperty('display', 'none');
                });
              } else
                ve.fromTo(
                  'transform',
                  `translateX(${de})`,
                  `translateX(${le})`
                ).fromTo(J, 1, 0.8);
              if (re) {
                const Ee = ne(re).querySelector('.transition-effect');
                if (Ee) {
                  const Me = Ee.querySelector('.transition-cover'),
                    We = Ee.querySelector('.transition-shadow'),
                    nt = (0, o.c)(),
                    Ke = (0, o.c)(),
                    ft = (0, o.c)();
                  nt
                    .addElement(Ee)
                    .beforeStyles({ opacity: '1', display: 'block' })
                    .afterStyles({ opacity: '', display: '' }),
                    Ke.addElement(Me).beforeClearStyles([J]).fromTo(J, 0.1, 0),
                    ft
                      .addElement(We)
                      .beforeClearStyles([J])
                      .fromTo(J, 0.7, 0.03),
                    nt.addAnimation([Ke, ft]),
                    ve.addAnimation([nt]);
                }
              }
              Ve.forEach((Ee) => {
                const Me = (0, o.c)();
                Me.addElement(Ee);
                const We = (0, o.c)();
                We.addElement(Ee.querySelector('ion-title'));
                const nt = (0, o.c)(),
                  Ke = Ee.querySelectorAll('ion-buttons,[menuToggle]'),
                  ft = Ee.closest('ion-header'),
                  bt = ft?.classList.contains(
                    'header-collapse-condense-inactive'
                  ),
                  lt = Array.from(Ke).filter((Un) => {
                    const st = Un.classList.contains('buttons-collapse');
                    return (st && !bt) || !st;
                  });
                nt.addElement(lt);
                const Ft = (0, o.c)(),
                  Mt = Ee.querySelectorAll(
                    ':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'
                  );
                Mt.length > 0 && Ft.addElement(Mt);
                const Ye = (0, o.c)();
                Ye.addElement(ne(Ee).querySelector('.toolbar-background'));
                const Lt = (0, o.c)(),
                  bn = Ee.querySelector('ion-back-button');
                if (
                  (bn && Lt.addElement(bn),
                  Me.addAnimation([We, nt, Ft, Lt, Ye]),
                  S.addAnimation(Me),
                  Lt.fromTo(J, 0.99, 0),
                  nt.fromTo(J, 0.99, 0),
                  Ft.fromTo(J, 0.99, 0),
                  ce)
                ) {
                  if (
                    (bt ||
                      We.fromTo(
                        'transform',
                        `translateX(${de})`,
                        ue ? 'translateX(-100%)' : 'translateX(100%)'
                      ).fromTo(J, 0.99, 0),
                    Ft.fromTo(
                      'transform',
                      `translateX(${de})`,
                      ue ? 'translateX(-100%)' : 'translateX(100%)'
                    ),
                    Ye.beforeClearStyles([J, 'transform']),
                    ft?.translucent
                      ? Ye.fromTo(
                          'transform',
                          'translateX(0px)',
                          ue ? 'translateX(-100%)' : 'translateX(100%)'
                        )
                      : Ye.fromTo(J, 'var(--opacity)', 0),
                    bn && !he)
                  ) {
                    const st = (0, o.c)();
                    st
                      .addElement(ne(bn).querySelector('.button-text'))
                      .fromTo(
                        'transform',
                        `translateX(${de})`,
                        `translateX(${(ue ? -124 : 124) + 'px'})`
                      ),
                      Me.addAnimation(st);
                  }
                } else
                  bt ||
                    We.fromTo(
                      'transform',
                      `translateX(${de})`,
                      `translateX(${le})`
                    )
                      .fromTo(J, 0.99, 0)
                      .afterClearStyles([Be, J]),
                    Ft.fromTo(
                      'transform',
                      `translateX(${de})`,
                      `translateX(${le})`
                    ).afterClearStyles([Be, J]),
                    Lt.afterClearStyles([J]),
                    We.afterClearStyles([J]),
                    nt.afterClearStyles([J]);
              });
            }
            return S;
          } catch (fe) {
            throw fe;
          }
        };
    },
    3880: (at, $e, T) => {
      'use strict';
      T.r($e), T.d($e, { mdTransitionAnimation: () => pe });
      var o = T(8834),
        L = T(697);
      T(3457), T(1308);
      const pe = (Fe, ne) => {
        var xe, we, Oe;
        const se = 'back' === ne.direction,
          ge = ne.leavingEl,
          Le = (0, L.g)(ne.enteringEl),
          fe = Le.querySelector('ion-toolbar'),
          J = (0, o.c)();
        if (
          (J.addElement(Le)
            .fill('both')
            .beforeRemoveClass('ion-page-invisible'),
          se
            ? J.duration(
                (null !== (xe = ne.duration) && void 0 !== xe ? xe : 0) || 200
              ).easing('cubic-bezier(0.47,0,0.745,0.715)')
            : J.duration(
                (null !== (we = ne.duration) && void 0 !== we ? we : 0) || 280
              )
                .easing('cubic-bezier(0.36,0.66,0.04,1)')
                .fromTo('transform', 'translateY(40px)', 'translateY(0px)')
                .fromTo('opacity', 0.01, 1),
          fe)
        ) {
          const Be = (0, o.c)();
          Be.addElement(fe), J.addAnimation(Be);
        }
        if (ge && se) {
          J.duration(
            (null !== (Oe = ne.duration) && void 0 !== Oe ? Oe : 0) || 200
          ).easing('cubic-bezier(0.47,0,0.745,0.715)');
          const Be = (0, o.c)();
          Be.addElement((0, L.g)(ge))
            .onFinish((de) => {
              1 === de &&
                Be.elements.length > 0 &&
                Be.elements[0].style.setProperty('display', 'none');
            })
            .fromTo('transform', 'translateY(0px)', 'translateY(40px)')
            .fromTo('opacity', 1, 0),
            J.addAnimation(Be);
        }
        return J;
      };
    },
    1312: (at, $e, T) => {
      'use strict';
      T.d($e, {
        B: () => re,
        G: () => Ve,
        a: () => xe,
        b: () => we,
        c: () => se,
        d: () => ce,
        e: () => ge,
        f: () => V,
        g: () => B,
        h: () => Fe,
        i: () => Pe,
        j: () => J,
        k: () => Y,
        m: () => ye,
        s: () => ve,
      });
      var o = T(5861),
        L = T(9658),
        z = T(7593),
        W = T(5730);
      let pe = 0;
      const Fe = new WeakMap(),
        ne = (He) => ({
          create: (Ee) => Le(He, Ee),
          dismiss: (Ee, Me, We) => Ne(document, Ee, Me, He, We),
          getTop: () =>
            (0, o.Z)(function* () {
              return Y(document, He);
            })(),
        }),
        xe = ne('ion-alert'),
        we = ne('ion-action-sheet'),
        ye = ne('ion-modal'),
        se = ne('ion-popover'),
        ge = (He) => {
          typeof document < 'u' && ue(document);
          const Ee = pe++;
          (He.overlayIndex = Ee),
            He.hasAttribute('id') || (He.id = `ion-overlay-${Ee}`);
        },
        Le = (He, Ee) =>
          typeof window < 'u' && typeof window.customElements < 'u'
            ? window.customElements.whenDefined(He).then(() => {
                const Me = document.createElement(He);
                return (
                  Me.classList.add('overlay-hidden'),
                  Object.assign(
                    Me,
                    Object.assign(Object.assign({}, Ee), { hasController: !0 })
                  ),
                  j(document).appendChild(Me),
                  new Promise((We) => (0, W.c)(Me, We))
                );
              })
            : Promise.resolve(),
        fe =
          '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',
        J = (He, Ee) => {
          let Me = He.querySelector(fe);
          const We = Me?.shadowRoot;
          We && (Me = We.querySelector(fe) || Me),
            Me ? (0, W.f)(Me) : Ee.focus();
        },
        de = (He, Ee) => {
          const Me = Array.from(He.querySelectorAll(fe));
          let We = Me.length > 0 ? Me[Me.length - 1] : null;
          const nt = We?.shadowRoot;
          nt && (We = nt.querySelector(fe) || We), We ? We.focus() : Ee.focus();
        },
        ue = (He) => {
          0 === pe &&
            ((pe = 1),
            He.addEventListener(
              'focus',
              (Ee) => {
                ((He, Ee) => {
                  const Me = Y(
                      Ee,
                      'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover'
                    ),
                    We = He.target;
                  Me &&
                    We &&
                    !Me.classList.contains('ion-disable-focus-trap') &&
                    (Me.shadowRoot
                      ? (() => {
                          if (Me.contains(We)) Me.lastFocus = We;
                          else {
                            const ft = Me.lastFocus;
                            J(Me, Me),
                              ft === Ee.activeElement && de(Me, Me),
                              (Me.lastFocus = Ee.activeElement);
                          }
                        })()
                      : (() => {
                          if (Me === We) Me.lastFocus = void 0;
                          else {
                            const ft = (0, W.g)(Me);
                            if (!ft.contains(We)) return;
                            const bt = ft.querySelector('.ion-overlay-wrapper');
                            if (!bt) return;
                            if (bt.contains(We)) Me.lastFocus = We;
                            else {
                              const lt = Me.lastFocus;
                              J(bt, Me),
                                lt === Ee.activeElement && de(bt, Me),
                                (Me.lastFocus = Ee.activeElement);
                            }
                          }
                        })());
                })(Ee, He);
              },
              !0
            ),
            He.addEventListener('ionBackButton', (Ee) => {
              const Me = Y(He);
              Me?.backdropDismiss &&
                Ee.detail.register(z.OVERLAY_BACK_BUTTON_PRIORITY, () =>
                  Me.dismiss(void 0, re)
                );
            }),
            He.addEventListener('keyup', (Ee) => {
              if ('Escape' === Ee.key) {
                const Me = Y(He);
                Me?.backdropDismiss && Me.dismiss(void 0, re);
              }
            }));
        },
        Ne = (He, Ee, Me, We, nt) => {
          const Ke = Y(He, We, nt);
          return Ke
            ? Ke.dismiss(Ee, Me)
            : Promise.reject('overlay does not exist');
        },
        Y = (He, Ee, Me) => {
          const We = ((He, Ee) => (
            void 0 === Ee &&
              (Ee =
                'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast'),
            Array.from(He.querySelectorAll(Ee)).filter(
              (Me) => Me.overlayIndex > 0
            )
          ))(He, Ee).filter(
            (nt) => !((He) => He.classList.contains('overlay-hidden'))(nt)
          );
          return void 0 === Me
            ? We[We.length - 1]
            : We.find((nt) => nt.id === Me);
        },
        oe = (He = !1) => {
          const Me = j(document).querySelector(
            'ion-router-outlet, ion-nav, #ion-view-container-root'
          );
          !Me ||
            (He
              ? Me.setAttribute('aria-hidden', 'true')
              : Me.removeAttribute('aria-hidden'));
        },
        ce = (function () {
          var He = (0, o.Z)(function* (Ee, Me, We, nt, Ke) {
            var ft, bt;
            if (Ee.presented) return;
            oe(!0),
              (Ee.presented = !0),
              Ee.willPresent.emit(),
              null === (ft = Ee.willPresentShorthand) ||
                void 0 === ft ||
                ft.emit();
            const lt = (0, L.b)(Ee),
              Ft = Ee.enterAnimation
                ? Ee.enterAnimation
                : L.c.get(Me, 'ios' === lt ? We : nt);
            (yield S(Ee, Ft, Ee.el, Ke)) &&
              (Ee.didPresent.emit(),
              null === (bt = Ee.didPresentShorthand) ||
                void 0 === bt ||
                bt.emit()),
              'ION-TOAST' !== Ee.el.tagName && k(Ee.el),
              Ee.keyboardClose &&
                (null === document.activeElement ||
                  !Ee.el.contains(document.activeElement)) &&
                Ee.el.focus();
          });
          return function (Me, We, nt, Ke, ft) {
            return He.apply(this, arguments);
          };
        })(),
        k = (function () {
          var He = (0, o.Z)(function* (Ee) {
            let Me = document.activeElement;
            if (!Me) return;
            const We = Me?.shadowRoot;
            We && (Me = We.querySelector(fe) || Me),
              yield Ee.onDidDismiss(),
              Me.focus();
          });
          return function (Me) {
            return He.apply(this, arguments);
          };
        })(),
        V = (function () {
          var He = (0, o.Z)(function* (Ee, Me, We, nt, Ke, ft, bt) {
            var lt, Ft;
            if (!Ee.presented) return !1;
            oe(!1), (Ee.presented = !1);
            try {
              Ee.el.style.setProperty('pointer-events', 'none'),
                Ee.willDismiss.emit({ data: Me, role: We }),
                null === (lt = Ee.willDismissShorthand) ||
                  void 0 === lt ||
                  lt.emit({ data: Me, role: We });
              const Mt = (0, L.b)(Ee),
                Ye = Ee.leaveAnimation
                  ? Ee.leaveAnimation
                  : L.c.get(nt, 'ios' === Mt ? Ke : ft);
              We !== Ve && (yield S(Ee, Ye, Ee.el, bt)),
                Ee.didDismiss.emit({ data: Me, role: We }),
                null === (Ft = Ee.didDismissShorthand) ||
                  void 0 === Ft ||
                  Ft.emit({ data: Me, role: We }),
                Fe.delete(Ee),
                Ee.el.classList.add('overlay-hidden'),
                Ee.el.style.removeProperty('pointer-events');
            } catch (Mt) {
              console.error(Mt);
            }
            return Ee.el.remove(), !0;
          });
          return function (Me, We, nt, Ke, ft, bt, lt) {
            return He.apply(this, arguments);
          };
        })(),
        j = (He) => He.querySelector('ion-app') || He.body,
        S = (function () {
          var He = (0, o.Z)(function* (Ee, Me, We, nt) {
            We.classList.remove('overlay-hidden');
            const ft = Me(Ee.el, nt);
            (!Ee.animated || !L.c.getBoolean('animated', !0)) && ft.duration(0),
              Ee.keyboardClose &&
                ft.beforeAddWrite(() => {
                  const lt = We.ownerDocument.activeElement;
                  lt?.matches('input,ion-input, ion-textarea') && lt.blur();
                });
            const bt = Fe.get(Ee) || [];
            return Fe.set(Ee, [...bt, ft]), yield ft.play(), !0;
          });
          return function (Me, We, nt, Ke) {
            return He.apply(this, arguments);
          };
        })(),
        B = (He, Ee) => {
          let Me;
          const We = new Promise((nt) => (Me = nt));
          return (
            q(He, Ee, (nt) => {
              Me(nt.detail);
            }),
            We
          );
        },
        q = (He, Ee, Me) => {
          const We = (nt) => {
            (0, W.b)(He, Ee, We), Me(nt);
          };
          (0, W.a)(He, Ee, We);
        },
        Pe = (He) => 'cancel' === He || He === re,
        he = (He) => He(),
        ve = (He, Ee) => {
          if ('function' == typeof He)
            return L.c.get(
              '_zoneGate',
              he
            )(() => {
              try {
                return He(Ee);
              } catch (We) {
                throw We;
              }
            });
        },
        re = 'backdrop',
        Ve = 'gesture';
    },
    6146: (at, $e, T) => {
      'use strict';
      T.d($e, { k: () => o });
      var o = (() => {
        return (
          ((L = o || (o = {})).NOT_SELECTED = 'NOT_SELECTED'),
          (L.VILLAGEOIS = 'VILLAGEOIS'),
          (L.LOUP_GAROU = 'LOUP_GAROU'),
          (L.CHASSEUR = 'CHASSEUR'),
          (L.CUPIDON = 'CUPIDON'),
          (L.PETITE_FILLE = 'PETITE_FILLE'),
          (L.SORCIERE = 'SORCIERE'),
          (L.VOLEUR = 'VOLEUR'),
          (L.VOYANTE = 'VOYANTE'),
          o
        );
        var L;
      })();
    },
    4206: (at, $e, T) => {
      'use strict';
      T.d($e, { M: () => o });
      var o = (() => {
        return (
          ((L = o || (o = {})).WOLF_TARGET = 'WOLF_TARGET'),
          (L.HEALTH_POTION = 'HEALTH_POTION'),
          (L.DEATH_POTION = 'DEATH_POTION'),
          (L.CAPTAIN = 'CAPTAIN'),
          (L.LOVER = 'LOVER'),
          o
        );
        var L;
      })();
    },
    1022: (at, $e, T) => {
      'use strict';
      T.d($e, { h: () => o });
      var o = (() => {
        return (
          ((L = o || (o = {}))[(L.VOLEUR = 0)] = 'VOLEUR'),
          (L[(L.CUPIDON = 1)] = 'CUPIDON'),
          (L[(L.VOYANTE = 2)] = 'VOYANTE'),
          (L[(L.AMOUREUX = 3)] = 'AMOUREUX'),
          (L[(L.LOUP_GAROU = 4)] = 'LOUP_GAROU'),
          (L[(L.SORCIERE_HEALTH = 5)] = 'SORCIERE_HEALTH'),
          (L[(L.SORCIERE_KILL = 6)] = 'SORCIERE_KILL'),
          (L[(L.VILLAGEOIS = 7)] = 'VILLAGEOIS'),
          (L[(L.CAPITAINE = 8)] = 'CAPITAINE'),
          (L[(L.CHASSEUR = 9)] = 'CHASSEUR'),
          o
        );
        var L;
      })();
    },
    6436: (at, $e, T) => {
      'use strict';
      T.d($e, { K: () => o });
      var o = (() => {
        return (
          ((L = o || (o = {})).NONE = 'NONE'),
          (L.AMOUREUX = 'AMOUREUX'),
          (L.LOUP_GAROU = 'LOUP_GAROU'),
          (L.VILLAGEOIS = 'VILLAGEOIS'),
          o
        );
        var L;
      })();
    },
    1642: (at, $e, T) => {
      'use strict';
      T.d($e, { h: () => V });
      var o = T(1135),
        L = T(6146),
        z = T(4206),
        W = T(1022),
        pe = T(5861),
        Fe = T(8256),
        ne = T(5035);
      class xe {
        constructor(S) {
          (this.alertController = S),
            (this.announcementsQueue = []),
            (this.isPresenting = !1);
        }
        announceDeaths(S) {
          const q = {
            header: 'Morts \xe0 annoncer',
            message: S.map((Pe) => `<p>${Pe.name}</p>`).join(''),
          };
          this.addAnnouncementToQueue(q);
        }
        addAnnouncementToQueue(S) {
          this.announcementsQueue.push({ ...S, buttons: ['OK'] }),
            this.isPresenting || this.showNextAnnouncement();
        }
        showNextAnnouncement() {
          var S = this;
          return (0, pe.Z)(function* () {
            S.isPresenting = !0;
            const B = yield S.alertController.create(
              S.announcementsQueue.shift()
            );
            B.onDidDismiss().then(() => {
              S.announcementsQueue.length > 0
                ? S.showNextAnnouncement()
                : (S.isPresenting = !1);
            }),
              yield B.present();
          })();
        }
      }
      (xe.ɵfac = function (S) {
        return new (S || xe)(Fe.LFG(ne.Br));
      }),
        (xe.ɵprov = Fe.Yz7({
          token: xe,
          factory: xe.ɵfac,
          providedIn: 'root',
        }));
      class we {
        constructor() {
          (this.isOnlyOnce = !1), (this.isDuringDay = !0);
        }
        handleAction(S, B) {
          const q = [...S];
          return (q.find((Pe) => Pe.id === B[0]).isDead = !0), q;
        }
        getRoundConfig(S) {
          return {
            role: W.h.VILLAGEOIS,
            selectablePlayers: this.getKillablePlayers(S),
            maxSelectable: 1,
            minSelectable: 1,
            isDuringDay: this.isDuringDay,
          };
        }
        getKillablePlayers(S) {
          return S.filter((B) => !B.isDead).map((B) => B.id);
        }
      }
      class Oe {
        constructor() {
          (this.isOnlyOnce = !0), (this.isDuringDay = !0);
        }
        handleAction(S, B) {
          const q = [...S];
          return q.find((Pe) => Pe.id === B[0])?.statuses.add(z.M.CAPTAIN), q;
        }
        getRoundConfig(S) {
          return {
            role: W.h.CAPITAINE,
            selectablePlayers: this.getSelectablePlayers(S),
            maxSelectable: 1,
            minSelectable: 1,
            isDuringDay: this.isDuringDay,
          };
        }
        getSelectablePlayers(S) {
          return S.filter((B) => !B.isDead).map((B) => B.id);
        }
      }
      class ye {
        constructor() {
          (this.isOnlyOnce = !1), (this.isDuringDay = !1);
        }
        handleAction(S, B) {
          const q = [...S];
          return (
            q.find((Pe) => Pe.id === B[0])?.statuses.add(z.M.WOLF_TARGET), q
          );
        }
        getRoundConfig(S) {
          return {
            role: W.h.LOUP_GAROU,
            selectablePlayers: S.filter(
              (B) => B.role !== L.k.LOUP_GAROU && !B.isDead
            ).map((B) => B.id),
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
        handleAction(S, B) {
          const q = [...S];
          return (
            B.length > 0 &&
              (q.find((Pe) => Pe.id === B[0])?.statuses.delete(z.M.WOLF_TARGET),
              q
                .find((Pe) => Pe.role === L.k.SORCIERE)
                ?.statuses.delete(z.M.HEALTH_POTION)),
            q
          );
        }
        getRoundConfig(S) {
          return {
            role: W.h.SORCIERE_HEALTH,
            selectablePlayers: this.canHeal(S)
              ? this.getHealablePlayers(S)
              : [],
            maxSelectable: 1,
            minSelectable: 0,
            isDuringDay: this.isDuringDay,
          };
        }
        canHeal(S) {
          return (
            S.find((B) => B.role === L.k.SORCIERE)?.statuses.has(
              z.M.HEALTH_POTION
            ) ?? !1
          );
        }
        getHealablePlayers(S) {
          return S.filter((B) => B.statuses.has(z.M.WOLF_TARGET)).map(
            (B) => B.id
          );
        }
      }
      class se {
        constructor() {
          (this.isOnlyOnce = !1), (this.isDuringDay = !1);
        }
        handleAction(S, B) {
          const q = [...S];
          return (
            B.length > 0 &&
              ((q.find((Pe) => Pe.id === B[0]).isDead = !0),
              q
                .find((Pe) => Pe.role === L.k.SORCIERE)
                ?.statuses.delete(z.M.DEATH_POTION)),
            q
          );
        }
        getRoundConfig(S) {
          return {
            role: W.h.SORCIERE_KILL,
            selectablePlayers: this.canKill(S)
              ? this.getKillablePlayers(S)
              : [],
            maxSelectable: 1,
            minSelectable: 0,
            isDuringDay: this.isDuringDay,
          };
        }
        canKill(S) {
          return (
            S.find((B) => B.role === L.k.SORCIERE)?.statuses.has(
              z.M.DEATH_POTION
            ) ?? !1
          );
        }
        getKillablePlayers(S) {
          return S.filter((B) => B.role !== L.k.SORCIERE && !B.isDead).map(
            (B) => B.id
          );
        }
      }
      class ee {
        constructor() {
          (this.isOnlyOnce = !0), (this.isDuringDay = !1);
        }
        handleAction(S, B) {
          const q = [...S];
          return (
            q
              .filter((Pe) => B.includes(Pe.id))
              .forEach((Pe) => Pe.statuses.add(z.M.LOVER)),
            q
          );
        }
        getRoundConfig(S) {
          return {
            role: W.h.CUPIDON,
            selectablePlayers: S.map((B) => B.id),
            maxSelectable: 2,
            minSelectable: 2,
            isDuringDay: this.isDuringDay,
          };
        }
      }
      class ge {
        constructor(S, B, q) {
          (this.roundRole = S), (this.isOnlyOnce = B), (this.isDuringDay = q);
        }
        handleAction(S, B) {
          return [...S];
        }
        getRoundConfig(S) {
          return {
            role: this.roundRole,
            selectablePlayers: [],
            maxSelectable: 0,
            minSelectable: 0,
            isDuringDay: this.isDuringDay,
          };
        }
      }
      class Le extends ge {
        constructor() {
          super(W.h.AMOUREUX, !0, !1);
        }
      }
      class fe {
        constructor() {
          (this.isOnlyOnce = !0), (this.isDuringDay = !0);
        }
        handleAction(S, B) {
          const q = [...S];
          return (q.find((Pe) => Pe.id === B[0]).isDead = !0), q;
        }
        getRoundConfig(S) {
          return {
            role: W.h.CHASSEUR,
            selectablePlayers: this.getKillablePlayers(S),
            maxSelectable: 1,
            minSelectable: 1,
            isDuringDay: this.isDuringDay,
          };
        }
        getKillablePlayers(S) {
          return S.filter((B) => B.role !== L.k.CHASSEUR && !B.isDead).map(
            (B) => B.id
          );
        }
      }
      class J extends ge {
        constructor() {
          super(W.h.VOYANTE, !1, !1);
        }
      }
      class Be {
        constructor() {
          this.roundHandlers = new Map();
        }
        initHandlers(S) {
          this.roundHandlers.clear();
          const B = new Set(S);
          this.roundHandlers.set(W.h.VILLAGEOIS, new we()),
            this.roundHandlers.set(W.h.CAPITAINE, new Oe()),
            B.has(L.k.LOUP_GAROU) &&
              this.roundHandlers.set(W.h.LOUP_GAROU, new ye()),
            B.has(L.k.SORCIERE) &&
              (this.roundHandlers.set(W.h.SORCIERE_HEALTH, new be()),
              this.roundHandlers.set(W.h.SORCIERE_KILL, new se())),
            B.has(L.k.CUPIDON) &&
              (this.roundHandlers.set(W.h.CUPIDON, new ee()),
              this.roundHandlers.set(W.h.AMOUREUX, new Le())),
            B.has(L.k.CHASSEUR) &&
              this.roundHandlers.set(W.h.CHASSEUR, new fe()),
            B.has(L.k.VOYANTE) && this.roundHandlers.set(W.h.VOYANTE, new J());
        }
        getHandler(S) {
          return this.roundHandlers.get(S);
        }
        removeHandlers(S) {
          const B = new Set(S);
          B.has(L.k.LOUP_GAROU) && this.roundHandlers.delete(W.h.LOUP_GAROU),
            B.has(L.k.SORCIERE) &&
              (this.roundHandlers.delete(W.h.SORCIERE_HEALTH),
              this.roundHandlers.delete(W.h.SORCIERE_KILL)),
            B.has(L.k.CUPIDON) && this.roundHandlers.delete(W.h.CUPIDON),
            B.has(L.k.CHASSEUR) && this.roundHandlers.delete(W.h.CHASSEUR),
            B.has(L.k.VOYANTE) && this.roundHandlers.delete(W.h.VOYANTE);
        }
      }
      (Be.ɵfac = function (S) {
        return new (S || Be)();
      }),
        (Be.ɵprov = Fe.Yz7({
          token: Be,
          factory: Be.ɵfac,
          providedIn: 'root',
        }));
      var de = T(6436);
      class me {
        isVictorious(S) {
          const B = S.filter((q) => !q.isDead);
          return 2 === B.length && B.every((q) => q.statuses.has(z.M.LOVER));
        }
      }
      class ue {
        isVictorious(S) {
          return S.filter((B) => !B.isDead).every(
            (B) => B.role === L.k.LOUP_GAROU
          );
        }
      }
      class Ne {
        isVictorious(S) {
          return 0 === S.filter((B) => !B.isDead).length;
        }
      }
      class le {
        isVictorious(S) {
          return S.filter((B) => !B.isDead).every(
            (B) => B.role !== L.k.LOUP_GAROU
          );
        }
      }
      class Y {
        constructor() {
          (this.victoryHandlers = new Map()),
            (this.victoryPriorities = [
              de.K.NONE,
              de.K.AMOUREUX,
              de.K.LOUP_GAROU,
              de.K.VILLAGEOIS,
            ]);
        }
        initHandlers(S) {
          this.victoryHandlers.clear();
          const B = new Set(S);
          this.victoryHandlers.set(de.K.NONE, new Ne()),
            this.victoryHandlers.set(de.K.VILLAGEOIS, new le()),
            B.has(L.k.LOUP_GAROU) &&
              this.victoryHandlers.set(de.K.LOUP_GAROU, new ue()),
            B.has(L.k.CUPIDON) &&
              this.victoryHandlers.set(de.K.AMOUREUX, new me());
        }
        removeUselessHandlers(S) {
          this.victoryHandlers.has(de.K.AMOUREUX) &&
            S.filter((B) => B.statuses.has(z.M.LOVER)).some((B) => B.isDead) &&
            this.victoryHandlers.delete(de.K.AMOUREUX);
        }
        getVictory(S) {
          let B;
          for (const q of this.victoryPriorities) {
            const Pe = this.victoryHandlers.get(q);
            if (void 0 !== Pe && Pe.isVictorious(S)) {
              B = q;
              break;
            }
          }
          return B;
        }
      }
      (Y.ɵfac = function (S) {
        return new (S || Y)();
      }),
        (Y.ɵprov = Fe.Yz7({ token: Y, factory: Y.ɵfac, providedIn: 'root' }));
      class oe {
        constructor(S, B, q) {
          (this.roundHandlersService = S),
            (this.victoryHandlersService = B),
            (this.announcementService = q),
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
        handleNewDeaths(S) {
          this.rolesToRemove = [];
          const B = [...S];
          return (
            this.handleWolfTarget(B),
            B.filter((q) => q.isDead && !this.knownDeaths.has(q.id)).forEach(
              (q) => this.handlePlayerDeath(B, q)
            ),
            this.roundHandlersService.removeHandlers(this.rolesToRemove),
            this.victoryHandlersService.removeUselessHandlers(S),
            B
          );
        }
        announceDeaths() {
          this.deathsToAnnounce.length > 0 &&
            (this.announcementService.announceDeaths(this.deathsToAnnounce),
            (this.deathsToAnnounce = []));
        }
        handleWolfTarget(S) {
          S.filter((B) => B.statuses.has(z.M.WOLF_TARGET)).forEach((B) => {
            B.statuses.delete(z.M.WOLF_TARGET), (B.isDead = !0);
          });
        }
        handlePlayerDeath(S, B) {
          this.knownDeaths.add(B.id),
            this.deathsToAnnounce.push(B),
            this.handlePlayerDeathStatuses(S, B),
            this.handlePlayerDeathRole(S, B);
        }
        handlePlayerDeathStatuses(S, B) {
          if (
            (B.statuses.has(z.M.CAPTAIN) &&
              (B.statuses.delete(z.M.CAPTAIN),
              this.afterDeathRoundQueue.push(W.h.CAPITAINE)),
            B.statuses.has(z.M.LOVER))
          ) {
            const q = S.find(
              (Pe) => Pe.statuses.has(z.M.LOVER) && Pe.id !== B.id && !Pe.isDead
            );
            void 0 !== q && ((q.isDead = !0), this.handlePlayerDeath(S, q));
          }
        }
        handlePlayerDeathRole(S, B) {
          switch (B.role) {
            case L.k.LOUP_GAROU:
              0 ===
                S.filter((q) => q.role === L.k.LOUP_GAROU && !q.isDead)
                  .length && this.rolesToRemove.push(L.k.LOUP_GAROU);
              break;
            case L.k.CHASSEUR:
              this.afterDeathRoundQueue.unshift(W.h.CHASSEUR);
              break;
            case L.k.CUPIDON:
              this.rolesToRemove.push(L.k.CUPIDON);
              break;
            case L.k.SORCIERE:
              this.rolesToRemove.push(L.k.SORCIERE);
              break;
            case L.k.VOYANTE:
              this.rolesToRemove.push(L.k.VOYANTE);
          }
        }
      }
      (oe.ɵfac = function (S) {
        return new (S || oe)(Fe.LFG(Be), Fe.LFG(Y), Fe.LFG(xe));
      }),
        (oe.ɵprov = Fe.Yz7({
          token: oe,
          factory: oe.ɵfac,
          providedIn: 'root',
        }));
      class ce {
        constructor(S, B) {
          (this.roundHandlersService = S),
            (this.deathService = B),
            (this.sortedRounds = [
              W.h.VOLEUR,
              W.h.CUPIDON,
              W.h.VOYANTE,
              W.h.AMOUREUX,
              W.h.LOUP_GAROU,
              W.h.SORCIERE_HEALTH,
              W.h.SORCIERE_KILL,
              W.h.CAPITAINE,
              W.h.VILLAGEOIS,
            ]),
            (this.uniqueRoundsPassed = new Set());
        }
        resetRounds() {
          this.uniqueRoundsPassed.clear();
        }
        getNextRound(S) {
          this.roundHandlersService.getHandler(S)?.isOnlyOnce &&
            this.uniqueRoundsPassed.add(S);
          const q = this.deathService.getNextAfterDeathRound();
          if (void 0 !== q) return (this.beforeDeathRound = S), q;
          this.beforeDeathRound &&
            ((S = this.beforeDeathRound), (this.beforeDeathRound = void 0));
          const Pe = this.sortedRounds.indexOf(S);
          let he,
            re,
            ve = Pe + 1;
          ve > this.sortedRounds.length - 1 && (ve = 0);
          do {
            (re = this.sortedRounds[ve]),
              (he = this.roundHandlersService.getHandler(re)),
              ve++,
              ve > this.sortedRounds.length - 1 && (ve = 0);
          } while (
            (void 0 === he || this.uniqueRoundsPassed.has(re)) &&
            ve !== Pe
          );
          if (void 0 === he || this.uniqueRoundsPassed.has(re))
            throw new Error('No next round found');
          return re;
        }
        getFirstRound() {
          let S,
            q,
            B = 0;
          do {
            if (
              ((q = this.sortedRounds[B]),
              (S = this.roundHandlersService.getHandler(q)),
              B++,
              B > this.sortedRounds.length - 1)
            )
              throw new Error('No first round found');
          } while (void 0 === S);
          return q;
        }
      }
      (ce.ɵfac = function (S) {
        return new (S || ce)(Fe.LFG(Be), Fe.LFG(oe));
      }),
        (ce.ɵprov = Fe.Yz7({
          token: ce,
          factory: ce.ɵfac,
          providedIn: 'root',
        }));
      var k = T(3165);
      class V {
        constructor(S, B, q, Pe, he) {
          (this.router = S),
            (this.roundHandlersService = B),
            (this.victoryHandlersService = q),
            (this.roundOrchestrationService = Pe),
            (this.deathService = he),
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
        createGame(S) {
          this.roundOrchestrationService.resetRounds(),
            this.deathService.reset();
          const B = S.map((Pe) => Pe.role);
          this.roundHandlersService.initHandlers(B),
            this.victoryHandlersService.initHandlers(B);
          const q = S.find((Pe) => Pe.role === L.k.SORCIERE);
          q &&
            (q.statuses.add(z.M.HEALTH_POTION),
            q.statuses.add(z.M.DEATH_POTION)),
            this.players.next(S),
            this.setFirstRound(),
            this.gameInProgess.next(!0),
            this.router.navigate(['game']);
        }
        submitRoundAction(S) {
          const B = this.round.value?.role;
          if (void 0 !== B) {
            const q = this.roundHandlersService.getHandler(B);
            if (void 0 !== q) {
              const Pe = q.handleAction(this.players.value, S);
              this.players.next(Pe), this.nextRound();
            }
          }
        }
        setFirstRound() {
          const S = this.roundOrchestrationService.getFirstRound();
          this.setRound(S);
        }
        nextRound() {
          const S = this.round.value?.role;
          if (void 0 === S) throw new Error('No current round');
          const B = this.roundHandlersService.getHandler(S);
          if (B?.isDuringDay) {
            const he = this.deathService.handleNewDeaths(this.players.value);
            this.players.next(he);
          }
          let q = this.roundOrchestrationService.getNextRound(S);
          const Pe = this.roundHandlersService.getHandler(q);
          if (void 0 !== Pe && Pe.isDuringDay && !B?.isDuringDay) {
            const he = this.deathService.handleNewDeaths(this.players.value);
            this.players.next(he),
              (q = this.roundOrchestrationService.getNextRound(S));
          }
          if ((Pe?.isDuringDay || B?.isDuringDay) && q !== W.h.CHASSEUR) {
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
          this.setRound(q);
        }
        setRound(S) {
          const B = this.roundHandlersService.getHandler(S);
          if (void 0 !== B) {
            const q = B.getRoundConfig(this.players.value);
            this.round.next(q);
          }
        }
      }
      (V.ɵfac = function (S) {
        return new (S || V)(
          Fe.LFG(k.F0),
          Fe.LFG(Be),
          Fe.LFG(Y),
          Fe.LFG(ce),
          Fe.LFG(oe)
        );
      }),
        (V.ɵprov = Fe.Yz7({ token: V, factory: V.ɵfac, providedIn: 'root' }));
    },
    383: (at, $e, T) => {
      'use strict';
      var o = T(8256),
        L = T(1481),
        z = T(3165),
        W = T(5035),
        pe = T(6895),
        Fe = T(7579),
        ne = T(9300),
        xe = T(4482),
        we = T(5403),
        Oe = T(8421),
        ye = T(5032),
        se = T(1642);
      const ee = ['menu'];
      function ge(me, ue) {
        1 & me &&
          (o.TgZ(0, 'ion-item', 7), o._uU(1, 'Partie en cours'), o.qZA());
      }
      const Le = function () {
        return { exact: !0 };
      };
      class fe {
        constructor(ue, Ne) {
          (this.router = ue),
            (this.gameService = Ne),
            (this.destroy$ = new Fe.x()),
            (this.isGameInProgress$ = this.gameService.isGameInProgress());
        }
        ngAfterViewInit() {
          this.router.events
            .pipe(
              (0, ne.h)((ue) => ue instanceof z.m2),
              (function be(me) {
                return (0, xe.e)((ue, Ne) => {
                  (0, Oe.Xf)(me).subscribe(
                    (0, we.x)(Ne, () => Ne.complete(), ye.Z)
                  ),
                    !Ne.closed && ue.subscribe(Ne);
                });
              })(this.destroy$)
            )
            .subscribe(() => this.menu?.close());
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete();
        }
      }
      (fe.ɵfac = function (ue) {
        return new (ue || fe)(o.Y36(z.F0), o.Y36(se.h));
      }),
        (fe.ɵcmp = o.Xpm({
          type: fe,
          selectors: [['lgmj-menu']],
          viewQuery: function (ue, Ne) {
            if ((1 & ue && o.Gf(ee, 5), 2 & ue)) {
              let le;
              o.iGM((le = o.CRH())) && (Ne.menu = le.first);
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
          template: function (ue, Ne) {
            1 & ue &&
              (o.TgZ(0, 'ion-menu', 0, 1)(2, 'ion-header')(3, 'ion-toolbar')(
                4,
                'ion-title'
              ),
              o._uU(5, 'Menu'),
              o.qZA()()(),
              o.TgZ(6, 'ion-content')(7, 'ion-item', 2),
              o._uU(8, 'Accueil'),
              o.qZA(),
              o.YNc(9, ge, 2, 0, 'ion-item', 3),
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
              2 & ue &&
                (o.xp6(7),
                o.Q6J('routerLinkActiveOptions', o.DdM(4, Le)),
                o.xp6(2),
                o.Q6J('ngIf', o.lcZ(10, 2, Ne.isGameInProgress$)));
          },
          dependencies: [
            pe.ez,
            pe.O5,
            pe.Ov,
            W.Pc,
            W.W2,
            W.Gu,
            W.Ie,
            W.z0,
            W.wd,
            W.sr,
            W.YI,
            z.rH,
            z.Od,
          ],
          styles: ['ion-item.active[_ngcontent-%COMP%]{opacity:.5}'],
        }));
      class J {
        constructor(ue) {
          this.environmentInjector = ue;
        }
      }
      (J.ɵfac = function (ue) {
        return new (ue || J)(o.Y36(o.lqb));
      }),
        (J.ɵcmp = o.Xpm({
          type: J,
          selectors: [['lgmj-root']],
          standalone: !0,
          features: [o.jDz],
          decls: 3,
          vars: 1,
          consts: [['id', 'router-outlet', 3, 'environmentInjector']],
          template: function (ue, Ne) {
            1 & ue &&
              (o.TgZ(0, 'ion-app'),
              o._UZ(1, 'lgmj-menu')(2, 'ion-router-outlet', 0),
              o.qZA()),
              2 & ue &&
                (o.xp6(2),
                o.Q6J('environmentInjector', Ne.environmentInjector));
          },
          dependencies: [pe.ez, W.Pc, W.dr, W.jP, fe],
        }));
      const Be = [
        {
          path: 'victory',
          title: 'LG Assistant MJ | Victoire',
          loadComponent: () =>
            Promise.all([T.e(8592), T.e(5220)])
              .then(T.bind(T, 5220))
              .then((me) => me.VictoryPage),
        },
        {
          path: 'game',
          title: 'LG Assistant MJ | Partie en cours',
          loadComponent: () =>
            Promise.all([T.e(8592), T.e(3903)])
              .then(T.bind(T, 3903))
              .then((me) => me.GamePage),
        },
        {
          path: 'new-game',
          title: 'LG Assistant MJ | Nouvelle partie',
          loadComponent: () =>
            Promise.all([T.e(8592), T.e(8724)])
              .then(T.bind(T, 8724))
              .then((me) => me.NewGamePage),
        },
        {
          path: 'roles-rules',
          title: 'LG Assistant MJ | R\xe8gles des r\xf4les',
          loadComponent: () =>
            Promise.all([T.e(8592), T.e(2451)])
              .then(T.bind(T, 2451))
              .then((me) => me.RolesRulesPage),
        },
        {
          path: 'status-legends',
          title: 'LG Assistant MJ | L\xe9gende des statuts',
          loadComponent: () =>
            Promise.all([T.e(8592), T.e(4171)])
              .then(T.bind(T, 4171))
              .then((me) => me.StatusLegendsPage),
        },
        {
          path: '',
          pathMatch: 'full',
          title: 'LG Assistant MJ | Accueil',
          loadComponent: () =>
            Promise.all([T.e(8592), T.e(4048)])
              .then(T.bind(T, 4048))
              .then((me) => me.HomePage),
        },
      ];
      (0, o.G48)(),
        (0, L.Cg)(J, {
          providers: [
            (0, z.bU)(Be, (0, z.aF)(z.wm)),
            (0, o.RIp)(W.Pc.forRoot()),
            { provide: z.wN, useClass: W.r4 },
          ],
        }).catch((me) => console.error(me));
    },
    1135: (at, $e, T) => {
      'use strict';
      T.d($e, { X: () => L });
      var o = T(7579);
      class L extends o.x {
        constructor(W) {
          super(), (this._value = W);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(W) {
          const pe = super._subscribe(W);
          return !pe.closed && W.next(this._value), pe;
        }
        getValue() {
          const { hasError: W, thrownError: pe, _value: Fe } = this;
          if (W) throw pe;
          return this._throwIfClosed(), Fe;
        }
        next(W) {
          super.next((this._value = W));
        }
      }
    },
    9751: (at, $e, T) => {
      'use strict';
      T.d($e, { y: () => xe });
      var o = T(930),
        L = T(727),
        z = T(8822),
        W = T(9635),
        pe = T(2416),
        Fe = T(576),
        ne = T(2806);
      let xe = (() => {
        class be {
          constructor(ee) {
            ee && (this._subscribe = ee);
          }
          lift(ee) {
            const ge = new be();
            return (ge.source = this), (ge.operator = ee), ge;
          }
          subscribe(ee, ge, Le) {
            const fe = (function ye(be) {
              return (
                (be && be instanceof o.Lv) ||
                ((function Oe(be) {
                  return (
                    be &&
                    (0, Fe.m)(be.next) &&
                    (0, Fe.m)(be.error) &&
                    (0, Fe.m)(be.complete)
                  );
                })(be) &&
                  (0, L.Nn)(be))
              );
            })(ee)
              ? ee
              : new o.Hp(ee, ge, Le);
            return (
              (0, ne.x)(() => {
                const { operator: J, source: Be } = this;
                fe.add(
                  J
                    ? J.call(fe, Be)
                    : Be
                    ? this._subscribe(fe)
                    : this._trySubscribe(fe)
                );
              }),
              fe
            );
          }
          _trySubscribe(ee) {
            try {
              return this._subscribe(ee);
            } catch (ge) {
              ee.error(ge);
            }
          }
          forEach(ee, ge) {
            return new (ge = we(ge))((Le, fe) => {
              const J = new o.Hp({
                next: (Be) => {
                  try {
                    ee(Be);
                  } catch (de) {
                    fe(de), J.unsubscribe();
                  }
                },
                error: fe,
                complete: Le,
              });
              this.subscribe(J);
            });
          }
          _subscribe(ee) {
            var ge;
            return null === (ge = this.source) || void 0 === ge
              ? void 0
              : ge.subscribe(ee);
          }
          [z.L]() {
            return this;
          }
          pipe(...ee) {
            return (0, W.U)(ee)(this);
          }
          toPromise(ee) {
            return new (ee = we(ee))((ge, Le) => {
              let fe;
              this.subscribe(
                (J) => (fe = J),
                (J) => Le(J),
                () => ge(fe)
              );
            });
          }
        }
        return (be.create = (se) => new be(se)), be;
      })();
      function we(be) {
        var se;
        return null !== (se = be ?? pe.v.Promise) && void 0 !== se
          ? se
          : Promise;
      }
    },
    7579: (at, $e, T) => {
      'use strict';
      T.d($e, { x: () => ne });
      var o = T(9751),
        L = T(727);
      const W = (0, T(3888).d)(
        (we) =>
          function () {
            we(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          }
      );
      var pe = T(8737),
        Fe = T(2806);
      let ne = (() => {
        class we extends o.y {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(ye) {
            const be = new xe(this, this);
            return (be.operator = ye), be;
          }
          _throwIfClosed() {
            if (this.closed) throw new W();
          }
          next(ye) {
            (0, Fe.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const be of this.currentObservers) be.next(ye);
              }
            });
          }
          error(ye) {
            (0, Fe.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = ye);
                const { observers: be } = this;
                for (; be.length; ) be.shift().error(ye);
              }
            });
          }
          complete() {
            (0, Fe.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: ye } = this;
                for (; ye.length; ) ye.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var ye;
            return (
              (null === (ye = this.observers) || void 0 === ye
                ? void 0
                : ye.length) > 0
            );
          }
          _trySubscribe(ye) {
            return this._throwIfClosed(), super._trySubscribe(ye);
          }
          _subscribe(ye) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(ye),
              this._innerSubscribe(ye)
            );
          }
          _innerSubscribe(ye) {
            const { hasError: be, isStopped: se, observers: ee } = this;
            return be || se
              ? L.Lc
              : ((this.currentObservers = null),
                ee.push(ye),
                new L.w0(() => {
                  (this.currentObservers = null), (0, pe.P)(ee, ye);
                }));
          }
          _checkFinalizedStatuses(ye) {
            const { hasError: be, thrownError: se, isStopped: ee } = this;
            be ? ye.error(se) : ee && ye.complete();
          }
          asObservable() {
            const ye = new o.y();
            return (ye.source = this), ye;
          }
        }
        return (we.create = (Oe, ye) => new xe(Oe, ye)), we;
      })();
      class xe extends ne {
        constructor(Oe, ye) {
          super(), (this.destination = Oe), (this.source = ye);
        }
        next(Oe) {
          var ye, be;
          null ===
            (be =
              null === (ye = this.destination) || void 0 === ye
                ? void 0
                : ye.next) ||
            void 0 === be ||
            be.call(ye, Oe);
        }
        error(Oe) {
          var ye, be;
          null ===
            (be =
              null === (ye = this.destination) || void 0 === ye
                ? void 0
                : ye.error) ||
            void 0 === be ||
            be.call(ye, Oe);
        }
        complete() {
          var Oe, ye;
          null ===
            (ye =
              null === (Oe = this.destination) || void 0 === Oe
                ? void 0
                : Oe.complete) ||
            void 0 === ye ||
            ye.call(Oe);
        }
        _subscribe(Oe) {
          var ye, be;
          return null !==
            (be =
              null === (ye = this.source) || void 0 === ye
                ? void 0
                : ye.subscribe(Oe)) && void 0 !== be
            ? be
            : L.Lc;
        }
      }
    },
    930: (at, $e, T) => {
      'use strict';
      T.d($e, { Hp: () => Le, Lv: () => be });
      var o = T(576),
        L = T(727),
        z = T(2416),
        W = T(7849),
        pe = T(5032);
      const Fe = we('C', void 0, void 0);
      function we(me, ue, Ne) {
        return { kind: me, value: ue, error: Ne };
      }
      var Oe = T(3410),
        ye = T(2806);
      class be extends L.w0 {
        constructor(ue) {
          super(),
            (this.isStopped = !1),
            ue
              ? ((this.destination = ue), (0, L.Nn)(ue) && ue.add(this))
              : (this.destination = de);
        }
        static create(ue, Ne, le) {
          return new Le(ue, Ne, le);
        }
        next(ue) {
          this.isStopped
            ? Be(
                (function xe(me) {
                  return we('N', me, void 0);
                })(ue),
                this
              )
            : this._next(ue);
        }
        error(ue) {
          this.isStopped
            ? Be(
                (function ne(me) {
                  return we('E', void 0, me);
                })(ue),
                this
              )
            : ((this.isStopped = !0), this._error(ue));
        }
        complete() {
          this.isStopped
            ? Be(Fe, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(ue) {
          this.destination.next(ue);
        }
        _error(ue) {
          try {
            this.destination.error(ue);
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
      const se = Function.prototype.bind;
      function ee(me, ue) {
        return se.call(me, ue);
      }
      class ge {
        constructor(ue) {
          this.partialObserver = ue;
        }
        next(ue) {
          const { partialObserver: Ne } = this;
          if (Ne.next)
            try {
              Ne.next(ue);
            } catch (le) {
              fe(le);
            }
        }
        error(ue) {
          const { partialObserver: Ne } = this;
          if (Ne.error)
            try {
              Ne.error(ue);
            } catch (le) {
              fe(le);
            }
          else fe(ue);
        }
        complete() {
          const { partialObserver: ue } = this;
          if (ue.complete)
            try {
              ue.complete();
            } catch (Ne) {
              fe(Ne);
            }
        }
      }
      class Le extends be {
        constructor(ue, Ne, le) {
          let Y;
          if ((super(), (0, o.m)(ue) || !ue))
            Y = {
              next: ue ?? void 0,
              error: Ne ?? void 0,
              complete: le ?? void 0,
            };
          else {
            let oe;
            this && z.v.useDeprecatedNextContext
              ? ((oe = Object.create(ue)),
                (oe.unsubscribe = () => this.unsubscribe()),
                (Y = {
                  next: ue.next && ee(ue.next, oe),
                  error: ue.error && ee(ue.error, oe),
                  complete: ue.complete && ee(ue.complete, oe),
                }))
              : (Y = ue);
          }
          this.destination = new ge(Y);
        }
      }
      function fe(me) {
        z.v.useDeprecatedSynchronousErrorHandling
          ? (0, ye.O)(me)
          : (0, W.h)(me);
      }
      function Be(me, ue) {
        const { onStoppedNotification: Ne } = z.v;
        Ne && Oe.z.setTimeout(() => Ne(me, ue));
      }
      const de = {
        closed: !0,
        next: pe.Z,
        error: function J(me) {
          throw me;
        },
        complete: pe.Z,
      };
    },
    727: (at, $e, T) => {
      'use strict';
      T.d($e, { Lc: () => Fe, w0: () => pe, Nn: () => ne });
      var o = T(576);
      const z = (0, T(3888).d)(
        (we) =>
          function (ye) {
            we(this),
              (this.message = ye
                ? `${ye.length} errors occurred during unsubscription:\n${ye
                    .map((be, se) => `${se + 1}) ${be.toString()}`)
                    .join('\n  ')}`
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = ye);
          }
      );
      var W = T(8737);
      class pe {
        constructor(Oe) {
          (this.initialTeardown = Oe),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let Oe;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: ye } = this;
            if (ye)
              if (((this._parentage = null), Array.isArray(ye)))
                for (const ee of ye) ee.remove(this);
              else ye.remove(this);
            const { initialTeardown: be } = this;
            if ((0, o.m)(be))
              try {
                be();
              } catch (ee) {
                Oe = ee instanceof z ? ee.errors : [ee];
              }
            const { _finalizers: se } = this;
            if (se) {
              this._finalizers = null;
              for (const ee of se)
                try {
                  xe(ee);
                } catch (ge) {
                  (Oe = Oe ?? []),
                    ge instanceof z
                      ? (Oe = [...Oe, ...ge.errors])
                      : Oe.push(ge);
                }
            }
            if (Oe) throw new z(Oe);
          }
        }
        add(Oe) {
          var ye;
          if (Oe && Oe !== this)
            if (this.closed) xe(Oe);
            else {
              if (Oe instanceof pe) {
                if (Oe.closed || Oe._hasParent(this)) return;
                Oe._addParent(this);
              }
              (this._finalizers =
                null !== (ye = this._finalizers) && void 0 !== ye
                  ? ye
                  : []).push(Oe);
            }
        }
        _hasParent(Oe) {
          const { _parentage: ye } = this;
          return ye === Oe || (Array.isArray(ye) && ye.includes(Oe));
        }
        _addParent(Oe) {
          const { _parentage: ye } = this;
          this._parentage = Array.isArray(ye)
            ? (ye.push(Oe), ye)
            : ye
            ? [ye, Oe]
            : Oe;
        }
        _removeParent(Oe) {
          const { _parentage: ye } = this;
          ye === Oe
            ? (this._parentage = null)
            : Array.isArray(ye) && (0, W.P)(ye, Oe);
        }
        remove(Oe) {
          const { _finalizers: ye } = this;
          ye && (0, W.P)(ye, Oe), Oe instanceof pe && Oe._removeParent(this);
        }
      }
      pe.EMPTY = (() => {
        const we = new pe();
        return (we.closed = !0), we;
      })();
      const Fe = pe.EMPTY;
      function ne(we) {
        return (
          we instanceof pe ||
          (we &&
            'closed' in we &&
            (0, o.m)(we.remove) &&
            (0, o.m)(we.add) &&
            (0, o.m)(we.unsubscribe))
        );
      }
      function xe(we) {
        (0, o.m)(we) ? we() : we.unsubscribe();
      }
    },
    2416: (at, $e, T) => {
      'use strict';
      T.d($e, { v: () => o });
      const o = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    515: (at, $e, T) => {
      'use strict';
      T.d($e, { E: () => L });
      const L = new (T(9751).y)((pe) => pe.complete());
    },
    2076: (at, $e, T) => {
      'use strict';
      T.d($e, { D: () => le });
      var o = T(8421),
        L = T(9672),
        z = T(4482),
        W = T(5403);
      function pe(Y, oe = 0) {
        return (0, z.e)((ce, k) => {
          ce.subscribe(
            (0, W.x)(
              k,
              (V) => (0, L.f)(k, Y, () => k.next(V), oe),
              () => (0, L.f)(k, Y, () => k.complete(), oe),
              (V) => (0, L.f)(k, Y, () => k.error(V), oe)
            )
          );
        });
      }
      function Fe(Y, oe = 0) {
        return (0, z.e)((ce, k) => {
          k.add(Y.schedule(() => ce.subscribe(k), oe));
        });
      }
      var we = T(9751),
        ye = T(2202),
        be = T(576);
      function ee(Y, oe) {
        if (!Y) throw new Error('Iterable cannot be null');
        return new we.y((ce) => {
          (0, L.f)(ce, oe, () => {
            const k = Y[Symbol.asyncIterator]();
            (0, L.f)(
              ce,
              oe,
              () => {
                k.next().then((V) => {
                  V.done ? ce.complete() : ce.next(V.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var ge = T(3670),
        Le = T(8239),
        fe = T(1144),
        J = T(6495),
        Be = T(2206),
        de = T(4532),
        me = T(3260);
      function le(Y, oe) {
        return oe
          ? (function Ne(Y, oe) {
              if (null != Y) {
                if ((0, ge.c)(Y))
                  return (function ne(Y, oe) {
                    return (0, o.Xf)(Y).pipe(Fe(oe), pe(oe));
                  })(Y, oe);
                if ((0, fe.z)(Y))
                  return (function Oe(Y, oe) {
                    return new we.y((ce) => {
                      let k = 0;
                      return oe.schedule(function () {
                        k === Y.length
                          ? ce.complete()
                          : (ce.next(Y[k++]), ce.closed || this.schedule());
                      });
                    });
                  })(Y, oe);
                if ((0, Le.t)(Y))
                  return (function xe(Y, oe) {
                    return (0, o.Xf)(Y).pipe(Fe(oe), pe(oe));
                  })(Y, oe);
                if ((0, Be.D)(Y)) return ee(Y, oe);
                if ((0, J.T)(Y))
                  return (function se(Y, oe) {
                    return new we.y((ce) => {
                      let k;
                      return (
                        (0, L.f)(ce, oe, () => {
                          (k = Y[ye.h]()),
                            (0, L.f)(
                              ce,
                              oe,
                              () => {
                                let V, j;
                                try {
                                  ({ value: V, done: j } = k.next());
                                } catch (S) {
                                  return void ce.error(S);
                                }
                                j ? ce.complete() : ce.next(V);
                              },
                              0,
                              !0
                            );
                        }),
                        () => (0, be.m)(k?.return) && k.return()
                      );
                    });
                  })(Y, oe);
                if ((0, me.L)(Y))
                  return (function ue(Y, oe) {
                    return ee((0, me.Q)(Y), oe);
                  })(Y, oe);
              }
              throw (0, de.z)(Y);
            })(Y, oe)
          : (0, o.Xf)(Y);
      }
    },
    8421: (at, $e, T) => {
      'use strict';
      T.d($e, { Xf: () => se });
      var o = T(655),
        L = T(1144),
        z = T(8239),
        W = T(9751),
        pe = T(3670),
        Fe = T(2206),
        ne = T(4532),
        xe = T(6495),
        we = T(3260),
        Oe = T(576),
        ye = T(7849),
        be = T(8822);
      function se(me) {
        if (me instanceof W.y) return me;
        if (null != me) {
          if ((0, pe.c)(me))
            return (function ee(me) {
              return new W.y((ue) => {
                const Ne = me[be.L]();
                if ((0, Oe.m)(Ne.subscribe)) return Ne.subscribe(ue);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable'
                );
              });
            })(me);
          if ((0, L.z)(me))
            return (function ge(me) {
              return new W.y((ue) => {
                for (let Ne = 0; Ne < me.length && !ue.closed; Ne++)
                  ue.next(me[Ne]);
                ue.complete();
              });
            })(me);
          if ((0, z.t)(me))
            return (function Le(me) {
              return new W.y((ue) => {
                me.then(
                  (Ne) => {
                    ue.closed || (ue.next(Ne), ue.complete());
                  },
                  (Ne) => ue.error(Ne)
                ).then(null, ye.h);
              });
            })(me);
          if ((0, Fe.D)(me)) return J(me);
          if ((0, xe.T)(me))
            return (function fe(me) {
              return new W.y((ue) => {
                for (const Ne of me) if ((ue.next(Ne), ue.closed)) return;
                ue.complete();
              });
            })(me);
          if ((0, we.L)(me))
            return (function Be(me) {
              return J((0, we.Q)(me));
            })(me);
        }
        throw (0, ne.z)(me);
      }
      function J(me) {
        return new W.y((ue) => {
          (function de(me, ue) {
            var Ne, le, Y, oe;
            return (0, o.mG)(this, void 0, void 0, function* () {
              try {
                for (Ne = (0, o.KL)(me); !(le = yield Ne.next()).done; )
                  if ((ue.next(le.value), ue.closed)) return;
              } catch (ce) {
                Y = { error: ce };
              } finally {
                try {
                  le && !le.done && (oe = Ne.return) && (yield oe.call(Ne));
                } finally {
                  if (Y) throw Y.error;
                }
              }
              ue.complete();
            });
          })(me, ue).catch((Ne) => ue.error(Ne));
        });
      }
    },
    5403: (at, $e, T) => {
      'use strict';
      T.d($e, { x: () => L });
      var o = T(930);
      function L(W, pe, Fe, ne, xe) {
        return new z(W, pe, Fe, ne, xe);
      }
      class z extends o.Lv {
        constructor(pe, Fe, ne, xe, we, Oe) {
          super(pe),
            (this.onFinalize = we),
            (this.shouldUnsubscribe = Oe),
            (this._next = Fe
              ? function (ye) {
                  try {
                    Fe(ye);
                  } catch (be) {
                    pe.error(be);
                  }
                }
              : super._next),
            (this._error = xe
              ? function (ye) {
                  try {
                    xe(ye);
                  } catch (be) {
                    pe.error(be);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = ne
              ? function () {
                  try {
                    ne();
                  } catch (ye) {
                    pe.error(ye);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var pe;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: Fe } = this;
            super.unsubscribe(),
              !Fe &&
                (null === (pe = this.onFinalize) ||
                  void 0 === pe ||
                  pe.call(this));
          }
        }
      }
    },
    9300: (at, $e, T) => {
      'use strict';
      T.d($e, { h: () => z });
      var o = T(4482),
        L = T(5403);
      function z(W, pe) {
        return (0, o.e)((Fe, ne) => {
          let xe = 0;
          Fe.subscribe(
            (0, L.x)(ne, (we) => W.call(pe, we, xe++) && ne.next(we))
          );
        });
      }
    },
    4004: (at, $e, T) => {
      'use strict';
      T.d($e, { U: () => z });
      var o = T(4482),
        L = T(5403);
      function z(W, pe) {
        return (0, o.e)((Fe, ne) => {
          let xe = 0;
          Fe.subscribe(
            (0, L.x)(ne, (we) => {
              ne.next(W.call(pe, we, xe++));
            })
          );
        });
      }
    },
    8189: (at, $e, T) => {
      'use strict';
      T.d($e, { J: () => z });
      var o = T(5577),
        L = T(4671);
      function z(W = 1 / 0) {
        return (0, o.z)(L.y, W);
      }
    },
    5577: (at, $e, T) => {
      'use strict';
      T.d($e, { z: () => xe });
      var o = T(4004),
        L = T(8421),
        z = T(4482),
        W = T(9672),
        pe = T(5403),
        ne = T(576);
      function xe(we, Oe, ye = 1 / 0) {
        return (0, ne.m)(Oe)
          ? xe(
              (be, se) =>
                (0, o.U)((ee, ge) => Oe(be, ee, se, ge))((0, L.Xf)(we(be, se))),
              ye
            )
          : ('number' == typeof Oe && (ye = Oe),
            (0, z.e)((be, se) =>
              (function Fe(we, Oe, ye, be, se, ee, ge, Le) {
                const fe = [];
                let J = 0,
                  Be = 0,
                  de = !1;
                const me = () => {
                    de && !fe.length && !J && Oe.complete();
                  },
                  ue = (le) => (J < be ? Ne(le) : fe.push(le)),
                  Ne = (le) => {
                    ee && Oe.next(le), J++;
                    let Y = !1;
                    (0, L.Xf)(ye(le, Be++)).subscribe(
                      (0, pe.x)(
                        Oe,
                        (oe) => {
                          se?.(oe), ee ? ue(oe) : Oe.next(oe);
                        },
                        () => {
                          Y = !0;
                        },
                        void 0,
                        () => {
                          if (Y)
                            try {
                              for (J--; fe.length && J < be; ) {
                                const oe = fe.shift();
                                ge ? (0, W.f)(Oe, ge, () => Ne(oe)) : Ne(oe);
                              }
                              me();
                            } catch (oe) {
                              Oe.error(oe);
                            }
                        }
                      )
                    );
                  };
                return (
                  we.subscribe(
                    (0, pe.x)(Oe, ue, () => {
                      (de = !0), me();
                    })
                  ),
                  () => {
                    Le?.();
                  }
                );
              })(be, se, we, ye)
            ));
      }
    },
    3900: (at, $e, T) => {
      'use strict';
      T.d($e, { w: () => W });
      var o = T(8421),
        L = T(4482),
        z = T(5403);
      function W(pe, Fe) {
        return (0, L.e)((ne, xe) => {
          let we = null,
            Oe = 0,
            ye = !1;
          const be = () => ye && !we && xe.complete();
          ne.subscribe(
            (0, z.x)(
              xe,
              (se) => {
                we?.unsubscribe();
                let ee = 0;
                const ge = Oe++;
                (0, o.Xf)(pe(se, ge)).subscribe(
                  (we = (0, z.x)(
                    xe,
                    (Le) => xe.next(Fe ? Fe(se, Le, ge, ee++) : Le),
                    () => {
                      (we = null), be();
                    }
                  ))
                );
              },
              () => {
                (ye = !0), be();
              }
            )
          );
        });
      }
    },
    8505: (at, $e, T) => {
      'use strict';
      T.d($e, { b: () => pe });
      var o = T(576),
        L = T(4482),
        z = T(5403),
        W = T(4671);
      function pe(Fe, ne, xe) {
        const we =
          (0, o.m)(Fe) || ne || xe ? { next: Fe, error: ne, complete: xe } : Fe;
        return we
          ? (0, L.e)((Oe, ye) => {
              var be;
              null === (be = we.subscribe) || void 0 === be || be.call(we);
              let se = !0;
              Oe.subscribe(
                (0, z.x)(
                  ye,
                  (ee) => {
                    var ge;
                    null === (ge = we.next) || void 0 === ge || ge.call(we, ee),
                      ye.next(ee);
                  },
                  () => {
                    var ee;
                    (se = !1),
                      null === (ee = we.complete) ||
                        void 0 === ee ||
                        ee.call(we),
                      ye.complete();
                  },
                  (ee) => {
                    var ge;
                    (se = !1),
                      null === (ge = we.error) ||
                        void 0 === ge ||
                        ge.call(we, ee),
                      ye.error(ee);
                  },
                  () => {
                    var ee, ge;
                    se &&
                      (null === (ee = we.unsubscribe) ||
                        void 0 === ee ||
                        ee.call(we)),
                      null === (ge = we.finalize) ||
                        void 0 === ge ||
                        ge.call(we);
                  }
                )
              );
            })
          : W.y;
      }
    },
    3410: (at, $e, T) => {
      'use strict';
      T.d($e, { z: () => o });
      const o = {
        setTimeout(L, z, ...W) {
          const { delegate: pe } = o;
          return pe?.setTimeout
            ? pe.setTimeout(L, z, ...W)
            : setTimeout(L, z, ...W);
        },
        clearTimeout(L) {
          const { delegate: z } = o;
          return (z?.clearTimeout || clearTimeout)(L);
        },
        delegate: void 0,
      };
    },
    2202: (at, $e, T) => {
      'use strict';
      T.d($e, { h: () => L });
      const L = (function o() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      })();
    },
    8822: (at, $e, T) => {
      'use strict';
      T.d($e, { L: () => o });
      const o =
        ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    },
    7669: (at, $e, T) => {
      'use strict';
      T.d($e, { _6: () => Fe, jO: () => W, yG: () => pe });
      var o = T(576);
      function z(ne) {
        return ne[ne.length - 1];
      }
      function W(ne) {
        return (0, o.m)(z(ne)) ? ne.pop() : void 0;
      }
      function pe(ne) {
        return (function L(ne) {
          return ne && (0, o.m)(ne.schedule);
        })(z(ne))
          ? ne.pop()
          : void 0;
      }
      function Fe(ne, xe) {
        return 'number' == typeof z(ne) ? ne.pop() : xe;
      }
    },
    4742: (at, $e, T) => {
      'use strict';
      T.d($e, { D: () => pe });
      const { isArray: o } = Array,
        { getPrototypeOf: L, prototype: z, keys: W } = Object;
      function pe(ne) {
        if (1 === ne.length) {
          const xe = ne[0];
          if (o(xe)) return { args: xe, keys: null };
          if (
            (function Fe(ne) {
              return ne && 'object' == typeof ne && L(ne) === z;
            })(xe)
          ) {
            const we = W(xe);
            return { args: we.map((Oe) => xe[Oe]), keys: we };
          }
        }
        return { args: ne, keys: null };
      }
    },
    8737: (at, $e, T) => {
      'use strict';
      function o(L, z) {
        if (L) {
          const W = L.indexOf(z);
          0 <= W && L.splice(W, 1);
        }
      }
      T.d($e, { P: () => o });
    },
    3888: (at, $e, T) => {
      'use strict';
      function o(L) {
        const W = L((pe) => {
          Error.call(pe), (pe.stack = new Error().stack);
        });
        return (
          (W.prototype = Object.create(Error.prototype)),
          (W.prototype.constructor = W),
          W
        );
      }
      T.d($e, { d: () => o });
    },
    1810: (at, $e, T) => {
      'use strict';
      function o(L, z) {
        return L.reduce((W, pe, Fe) => ((W[pe] = z[Fe]), W), {});
      }
      T.d($e, { n: () => o });
    },
    2806: (at, $e, T) => {
      'use strict';
      T.d($e, { O: () => W, x: () => z });
      var o = T(2416);
      let L = null;
      function z(pe) {
        if (o.v.useDeprecatedSynchronousErrorHandling) {
          const Fe = !L;
          if ((Fe && (L = { errorThrown: !1, error: null }), pe(), Fe)) {
            const { errorThrown: ne, error: xe } = L;
            if (((L = null), ne)) throw xe;
          }
        } else pe();
      }
      function W(pe) {
        o.v.useDeprecatedSynchronousErrorHandling &&
          L &&
          ((L.errorThrown = !0), (L.error = pe));
      }
    },
    9672: (at, $e, T) => {
      'use strict';
      function o(L, z, W, pe = 0, Fe = !1) {
        const ne = z.schedule(function () {
          W(), Fe ? L.add(this.schedule(null, pe)) : this.unsubscribe();
        }, pe);
        if ((L.add(ne), !Fe)) return ne;
      }
      T.d($e, { f: () => o });
    },
    4671: (at, $e, T) => {
      'use strict';
      function o(L) {
        return L;
      }
      T.d($e, { y: () => o });
    },
    1144: (at, $e, T) => {
      'use strict';
      T.d($e, { z: () => o });
      const o = (L) =>
        L && 'number' == typeof L.length && 'function' != typeof L;
    },
    2206: (at, $e, T) => {
      'use strict';
      T.d($e, { D: () => L });
      var o = T(576);
      function L(z) {
        return Symbol.asyncIterator && (0, o.m)(z?.[Symbol.asyncIterator]);
      }
    },
    576: (at, $e, T) => {
      'use strict';
      function o(L) {
        return 'function' == typeof L;
      }
      T.d($e, { m: () => o });
    },
    3670: (at, $e, T) => {
      'use strict';
      T.d($e, { c: () => z });
      var o = T(8822),
        L = T(576);
      function z(W) {
        return (0, L.m)(W[o.L]);
      }
    },
    6495: (at, $e, T) => {
      'use strict';
      T.d($e, { T: () => z });
      var o = T(2202),
        L = T(576);
      function z(W) {
        return (0, L.m)(W?.[o.h]);
      }
    },
    8239: (at, $e, T) => {
      'use strict';
      T.d($e, { t: () => L });
      var o = T(576);
      function L(z) {
        return (0, o.m)(z?.then);
      }
    },
    3260: (at, $e, T) => {
      'use strict';
      T.d($e, { L: () => W, Q: () => z });
      var o = T(655),
        L = T(576);
      function z(pe) {
        return (0, o.FC)(this, arguments, function* () {
          const ne = pe.getReader();
          try {
            for (;;) {
              const { value: xe, done: we } = yield (0, o.qq)(ne.read());
              if (we) return yield (0, o.qq)(void 0);
              yield yield (0, o.qq)(xe);
            }
          } finally {
            ne.releaseLock();
          }
        });
      }
      function W(pe) {
        return (0, L.m)(pe?.getReader);
      }
    },
    4482: (at, $e, T) => {
      'use strict';
      T.d($e, { A: () => L, e: () => z });
      var o = T(576);
      function L(W) {
        return (0, o.m)(W?.lift);
      }
      function z(W) {
        return (pe) => {
          if (L(pe))
            return pe.lift(function (Fe) {
              try {
                return W(Fe, this);
              } catch (ne) {
                this.error(ne);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
    },
    3268: (at, $e, T) => {
      'use strict';
      T.d($e, { Z: () => W });
      var o = T(4004);
      const { isArray: L } = Array;
      function W(pe) {
        return (0, o.U)((Fe) =>
          (function z(pe, Fe) {
            return L(Fe) ? pe(...Fe) : pe(Fe);
          })(pe, Fe)
        );
      }
    },
    5032: (at, $e, T) => {
      'use strict';
      function o() {}
      T.d($e, { Z: () => o });
    },
    9635: (at, $e, T) => {
      'use strict';
      T.d($e, { U: () => z, z: () => L });
      var o = T(4671);
      function L(...W) {
        return z(W);
      }
      function z(W) {
        return 0 === W.length
          ? o.y
          : 1 === W.length
          ? W[0]
          : function (Fe) {
              return W.reduce((ne, xe) => xe(ne), Fe);
            };
      }
    },
    7849: (at, $e, T) => {
      'use strict';
      T.d($e, { h: () => z });
      var o = T(2416),
        L = T(3410);
      function z(W) {
        L.z.setTimeout(() => {
          const { onUnhandledError: pe } = o.v;
          if (!pe) throw W;
          pe(W);
        });
      }
    },
    4532: (at, $e, T) => {
      'use strict';
      function o(L) {
        return new TypeError(
          `You provided ${
            null !== L && 'object' == typeof L ? 'an invalid object' : `'${L}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      T.d($e, { z: () => o });
    },
    863: (at, $e, T) => {
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
      function L(z) {
        if (!T.o(o, z))
          return Promise.resolve().then(() => {
            var Fe = new Error("Cannot find module '" + z + "'");
            throw ((Fe.code = 'MODULE_NOT_FOUND'), Fe);
          });
        var W = o[z],
          pe = W[0];
        return Promise.all(W.slice(1).map(T.e)).then(() => T(pe));
      }
      (L.keys = () => Object.keys(o)), (L.id = 863), (at.exports = L);
    },
    655: (at, $e, T) => {
      'use strict';
      function pe(k, V, j, S) {
        var Pe,
          B = arguments.length,
          q =
            B < 3
              ? V
              : null === S
              ? (S = Object.getOwnPropertyDescriptor(V, j))
              : S;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          q = Reflect.decorate(k, V, j, S);
        else
          for (var he = k.length - 1; he >= 0; he--)
            (Pe = k[he]) &&
              (q = (B < 3 ? Pe(q) : B > 3 ? Pe(V, j, q) : Pe(V, j)) || q);
        return B > 3 && q && Object.defineProperty(V, j, q), q;
      }
      function xe(k, V, j, S) {
        return new (j || (j = Promise))(function (q, Pe) {
          function he(Ve) {
            try {
              re(S.next(Ve));
            } catch (He) {
              Pe(He);
            }
          }
          function ve(Ve) {
            try {
              re(S.throw(Ve));
            } catch (He) {
              Pe(He);
            }
          }
          function re(Ve) {
            Ve.done
              ? q(Ve.value)
              : (function B(q) {
                  return q instanceof j
                    ? q
                    : new j(function (Pe) {
                        Pe(q);
                      });
                })(Ve.value).then(he, ve);
          }
          re((S = S.apply(k, V || [])).next());
        });
      }
      function fe(k) {
        return this instanceof fe ? ((this.v = k), this) : new fe(k);
      }
      function J(k, V, j) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var B,
          S = j.apply(k, V || []),
          q = [];
        return (
          (B = {}),
          Pe('next'),
          Pe('throw'),
          Pe('return'),
          (B[Symbol.asyncIterator] = function () {
            return this;
          }),
          B
        );
        function Pe(Ee) {
          S[Ee] &&
            (B[Ee] = function (Me) {
              return new Promise(function (We, nt) {
                q.push([Ee, Me, We, nt]) > 1 || he(Ee, Me);
              });
            });
        }
        function he(Ee, Me) {
          try {
            !(function ve(Ee) {
              Ee.value instanceof fe
                ? Promise.resolve(Ee.value.v).then(re, Ve)
                : He(q[0][2], Ee);
            })(S[Ee](Me));
          } catch (We) {
            He(q[0][3], We);
          }
        }
        function re(Ee) {
          he('next', Ee);
        }
        function Ve(Ee) {
          he('throw', Ee);
        }
        function He(Ee, Me) {
          Ee(Me), q.shift(), q.length && he(q[0][0], q[0][1]);
        }
      }
      function de(k) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var j,
          V = k[Symbol.asyncIterator];
        return V
          ? V.call(k)
          : ((k = (function be(k) {
              var V = 'function' == typeof Symbol && Symbol.iterator,
                j = V && k[V],
                S = 0;
              if (j) return j.call(k);
              if (k && 'number' == typeof k.length)
                return {
                  next: function () {
                    return (
                      k && S >= k.length && (k = void 0),
                      { value: k && k[S++], done: !k }
                    );
                  },
                };
              throw new TypeError(
                V
                  ? 'Object is not iterable.'
                  : 'Symbol.iterator is not defined.'
              );
            })(k)),
            (j = {}),
            S('next'),
            S('throw'),
            S('return'),
            (j[Symbol.asyncIterator] = function () {
              return this;
            }),
            j);
        function S(q) {
          j[q] =
            k[q] &&
            function (Pe) {
              return new Promise(function (he, ve) {
                !(function B(q, Pe, he, ve) {
                  Promise.resolve(ve).then(function (re) {
                    q({ value: re, done: he });
                  }, Pe);
                })(he, ve, (Pe = k[q](Pe)).done, Pe.value);
              });
            };
        }
      }
      T.d($e, {
        FC: () => J,
        KL: () => de,
        gn: () => pe,
        mG: () => xe,
        qq: () => fe,
      });
    },
    6895: (at, $e, T) => {
      'use strict';
      T.d($e, {
        Do: () => Be,
        ED: () => ie,
        EM: () => Po,
        HT: () => W,
        JF: () => vr,
        K0: () => Fe,
        Mx: () => Cr,
        O5: () => $,
        Ov: () => Zn,
        RF: () => N,
        S$: () => Le,
        V_: () => we,
        Ye: () => de,
        b0: () => J,
        bD: () => to,
        ez: () => eo,
        n9: () => Q,
        q: () => z,
        sg: () => en,
        tP: () => et,
        w_: () => pe,
      });
      var o = T(8256);
      let L = null;
      function z() {
        return L;
      }
      function W(m) {
        L || (L = m);
      }
      class pe {}
      const Fe = new o.OlP('DocumentToken');
      let ne = (() => {
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
                return (0, o.LFG)(Oe);
              })();
            },
            providedIn: 'platform',
          })),
          m
        );
      })();
      const we = new o.OlP('Location Initialized');
      let Oe = (() => {
        class m extends ne {
          constructor(v) {
            super(), (this._doc = v), this._init();
          }
          _init() {
            (this.location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return z().getBaseHref(this._doc);
          }
          onPopState(v) {
            const x = z().getGlobalEventTarget(this._doc, 'window');
            return (
              x.addEventListener('popstate', v, !1),
              () => x.removeEventListener('popstate', v)
            );
          }
          onHashChange(v) {
            const x = z().getGlobalEventTarget(this._doc, 'window');
            return (
              x.addEventListener('hashchange', v, !1),
              () => x.removeEventListener('hashchange', v)
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
          pushState(v, x, X) {
            ye() ? this._history.pushState(v, x, X) : (this.location.hash = X);
          }
          replaceState(v, x, X) {
            ye()
              ? this._history.replaceState(v, x, X)
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
            return new (v || m)(o.LFG(Fe));
          }),
          (m.ɵprov = o.Yz7({
            token: m,
            factory: function () {
              return (function be() {
                return new Oe((0, o.LFG)(Fe));
              })();
            },
            providedIn: 'platform',
          })),
          m
        );
      })();
      function ye() {
        return !!window.history.pushState;
      }
      function se(m, w) {
        if (0 == m.length) return w;
        if (0 == w.length) return m;
        let v = 0;
        return (
          m.endsWith('/') && v++,
          w.startsWith('/') && v++,
          2 == v ? m + w.substring(1) : 1 == v ? m + w : m + '/' + w
        );
      }
      function ee(m) {
        const w = m.match(/#|\?|$/),
          v = (w && w.index) || m.length;
        return m.slice(0, v - ('/' === m[v - 1] ? 1 : 0)) + m.slice(v);
      }
      function ge(m) {
        return m && '?' !== m[0] ? '?' + m : m;
      }
      let Le = (() => {
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
              return (0, o.f3M)(J);
            },
            providedIn: 'root',
          })),
          m
        );
      })();
      const fe = new o.OlP('appBaseHref');
      let J = (() => {
          class m extends Le {
            constructor(v, x) {
              super(),
                (this._platformLocation = v),
                (this._removeListenerFns = []),
                (this._baseHref =
                  x ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  (0, o.f3M)(Fe).location?.origin ??
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
              return se(this._baseHref, v);
            }
            path(v = !1) {
              const x =
                  this._platformLocation.pathname +
                  ge(this._platformLocation.search),
                X = this._platformLocation.hash;
              return X && v ? `${x}${X}` : x;
            }
            pushState(v, x, X, Re) {
              const Ue = this.prepareExternalUrl(X + ge(Re));
              this._platformLocation.pushState(v, x, Ue);
            }
            replaceState(v, x, X, Re) {
              const Ue = this.prepareExternalUrl(X + ge(Re));
              this._platformLocation.replaceState(v, x, Ue);
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
              return new (v || m)(o.LFG(ne), o.LFG(fe, 8));
            }),
            (m.ɵprov = o.Yz7({
              token: m,
              factory: m.ɵfac,
              providedIn: 'root',
            })),
            m
          );
        })(),
        Be = (() => {
          class m extends Le {
            constructor(v, x) {
              super(),
                (this._platformLocation = v),
                (this._baseHref = ''),
                (this._removeListenerFns = []),
                null != x && (this._baseHref = x);
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
              let x = this._platformLocation.hash;
              return null == x && (x = '#'), x.length > 0 ? x.substring(1) : x;
            }
            prepareExternalUrl(v) {
              const x = se(this._baseHref, v);
              return x.length > 0 ? '#' + x : x;
            }
            pushState(v, x, X, Re) {
              let Ue = this.prepareExternalUrl(X + ge(Re));
              0 == Ue.length && (Ue = this._platformLocation.pathname),
                this._platformLocation.pushState(v, x, Ue);
            }
            replaceState(v, x, X, Re) {
              let Ue = this.prepareExternalUrl(X + ge(Re));
              0 == Ue.length && (Ue = this._platformLocation.pathname),
                this._platformLocation.replaceState(v, x, Ue);
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
              return new (v || m)(o.LFG(ne), o.LFG(fe, 8));
            }),
            (m.ɵprov = o.Yz7({ token: m, factory: m.ɵfac })),
            m
          );
        })(),
        de = (() => {
          class m {
            constructor(v) {
              (this._subject = new o.vpe()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = v);
              const x = this._locationStrategy.getBaseHref();
              (this._basePath = (function le(m) {
                if (/^(https?:)?\/\//.test(m)) {
                  const [, w] = m.split(/\/\/[^\/]+/);
                  return w;
                }
                return m;
              })(ee(Ne(x)))),
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
            isCurrentPathEqualTo(v, x = '') {
              return this.path() == this.normalize(v + ge(x));
            }
            normalize(v) {
              return m.stripTrailingSlash(
                (function ue(m, w) {
                  return m && w.startsWith(m) ? w.substring(m.length) : w;
                })(this._basePath, Ne(v))
              );
            }
            prepareExternalUrl(v) {
              return (
                v && '/' !== v[0] && (v = '/' + v),
                this._locationStrategy.prepareExternalUrl(v)
              );
            }
            go(v, x = '', X = null) {
              this._locationStrategy.pushState(X, '', v, x),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(v + ge(x)),
                  X
                );
            }
            replaceState(v, x = '', X = null) {
              this._locationStrategy.replaceState(X, '', v, x),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(v + ge(x)),
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
                  (this._urlChangeSubscription = this.subscribe((x) => {
                    this._notifyUrlChangeListeners(x.url, x.state);
                  })),
                () => {
                  const x = this._urlChangeListeners.indexOf(v);
                  this._urlChangeListeners.splice(x, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(v = '', x) {
              this._urlChangeListeners.forEach((X) => X(v, x));
            }
            subscribe(v, x, X) {
              return this._subject.subscribe({
                next: v,
                error: x,
                complete: X,
              });
            }
          }
          return (
            (m.normalizeQueryParams = ge),
            (m.joinWithSlash = se),
            (m.stripTrailingSlash = ee),
            (m.ɵfac = function (v) {
              return new (v || m)(o.LFG(Le));
            }),
            (m.ɵprov = o.Yz7({
              token: m,
              factory: function () {
                return (function me() {
                  return new de((0, o.LFG)(Le));
                })();
              },
              providedIn: 'root',
            })),
            m
          );
        })();
      function Ne(m) {
        return m.replace(/\/index.html$/, '');
      }
      function Cr(m, w) {
        w = encodeURIComponent(w);
        for (const v of m.split(';')) {
          const x = v.indexOf('='),
            [X, Re] = -1 == x ? [v, ''] : [v.slice(0, x), v.slice(x + 1)];
          if (X.trim() === w) return decodeURIComponent(Re);
        }
        return null;
      }
      class mn {
        constructor(w, v, x, X) {
          (this.$implicit = w),
            (this.ngForOf = v),
            (this.index = x),
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
          constructor(v, x, X) {
            (this._viewContainer = v),
              (this._template = x),
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
            const x = this._viewContainer;
            v.forEachOperation((X, Re, Ue) => {
              if (null == X.previousIndex)
                x.createEmbeddedView(
                  this._template,
                  new mn(X.item, this._ngForOf, -1, -1),
                  null === Ue ? void 0 : Ue
                );
              else if (null == Ue) x.remove(null === Re ? void 0 : Re);
              else if (null !== Re) {
                const gt = x.get(Re);
                x.move(gt, Ue), xn(gt, X);
              }
            });
            for (let X = 0, Re = x.length; X < Re; X++) {
              const gt = x.get(X).context;
              (gt.index = X), (gt.count = Re), (gt.ngForOf = this._ngForOf);
            }
            v.forEachIdentityChange((X) => {
              xn(x.get(X.currentIndex), X);
            });
          }
          static ngTemplateContextGuard(v, x) {
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
      function xn(m, w) {
        m.context.$implicit = w.item;
      }
      let $ = (() => {
        class m {
          constructor(v, x) {
            (this._viewContainer = v),
              (this._context = new U()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = x);
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
          static ngTemplateContextGuard(v, x) {
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
              const x = v == this._ngSwitch;
              return (
                (this._lastCasesMatched = this._lastCasesMatched || x),
                this._lastCaseCheckIndex++,
                this._lastCaseCheckIndex === this._caseCount &&
                  (this._updateDefaultCases(!this._lastCasesMatched),
                  (this._lastCaseCheckIndex = 0),
                  (this._lastCasesMatched = !1)),
                x
              );
            }
            _updateDefaultCases(v) {
              if (this._defaultViews && v !== this._defaultUsed) {
                this._defaultUsed = v;
                for (let x = 0; x < this._defaultViews.length; x++)
                  this._defaultViews[x].enforceState(v);
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
            constructor(v, x, X) {
              (this.ngSwitch = X), X._addCase(), (this._view = new De(v, x));
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
        ie = (() => {
          class m {
            constructor(v, x, X) {
              X._addDefault(new De(v, x));
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
                const x = this._viewContainerRef;
                if (
                  (this._viewRef && x.remove(x.indexOf(this._viewRef)),
                  this.ngTemplateOutlet)
                ) {
                  const {
                    ngTemplateOutlet: X,
                    ngTemplateOutletContext: Re,
                    ngTemplateOutletInjector: Ue,
                  } = this;
                  this._viewRef = x.createEmbeddedView(
                    X,
                    Re,
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
            error: (x) => {
              throw x;
            },
          });
        }
        dispose(w) {
          w.unsubscribe();
        }
      }
      class Rn {
        createSubscription(w, v) {
          return w.then(v, (x) => {
            throw x;
          });
        }
        dispose(w) {}
      }
      const dn = new Rn(),
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
                  (x) => this._updateLatestValue(v, x)
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
            _updateLatestValue(v, x) {
              v === this._obj &&
                ((this._latestValue = x), this._ref.markForCheck());
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
            factory: () => new Do((0, o.LFG)(Fe), window),
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
              const x = m.createTreeWalker(m.body, NodeFilter.SHOW_ELEMENT);
              let X = x.currentNode;
              for (; X; ) {
                const Re = X.shadowRoot;
                if (Re) {
                  const Ue =
                    Re.getElementById(w) || Re.querySelector(`[name="${w}"]`);
                  if (Ue) return Ue;
                }
                X = x.nextNode();
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
            x = v.left + this.window.pageXOffset,
            X = v.top + this.window.pageYOffset,
            Re = this.offset();
          this.window.scrollTo(x - Re[0], X - Re[1]);
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
    8256: (at, $e, T) => {
      'use strict';
      T.d($e, {
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
        lqb: () => xi,
        qLn: () => qs,
        vpe: () => qo,
        XFs: () => qe,
        OlP: () => Cn,
        zs3: () => Ri,
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
        JOm: () => Uo,
        tp0: () => ks,
        Rgc: () => la,
        dDg: () => s_,
        eoX: () => gg,
        GfV: () => Ld,
        s_b: () => il,
        ifc: () => ht,
        MMx: () => qc,
        Lck: () => U0,
        G48: () => m_,
        Gpc: () => Be,
        RIp: () => Sd,
        f3M: () => An,
        MR2: () => Qm,
        c2e: () => WC,
        zSh: () => Ql,
        wAp: () => It,
        vHH: () => Y,
        lri: () => hg,
        rWj: () => pg,
        D6c: () => R_,
        cg1: () => Vc,
        kL8: () => Nh,
        dqk: () => pt,
        iPO: () => h_,
        Z0I: () => Ln,
        sIi: () => Qs,
        CqO: () => $f,
        QGY: () => Oc,
        QP$: () => xn,
        F4k: () => kf,
        RDi: () => Tm,
        AaK: () => Le,
        qOj: () => Ec,
        TTD: () => Br,
        _Bn: () => cp,
        jDz: () => fp,
        xp6: () => Ud,
        uIk: () => wc,
        ekj: () => Lc,
        Suo: () => Pp,
        Xpm: () => Sn,
        lG2: () => ar,
        Yz7: () => Lt,
        cJS: () => Un,
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
        NdJ: () => xc,
        CRH: () => Np,
        oxw: () => Uf,
        ALo: () => wp,
        lcZ: () => Sp,
        Hsn: () => zf,
        F$t: () => Gf,
        Q6J: () => Sc,
        DdM: () => Dp,
        iGM: () => Rp,
        MAs: () => Nf,
        KtG: () => Je,
        CHM: () => Ie,
        LSH: () => Wl,
        P3R: () => Ed,
        YNc: () => Pf,
        W1O: () => Bp,
        _uU: () => gh,
        Oqu: () => $c,
        Gf: () => Fp,
      });
      var o = T(7579),
        L = T(727),
        z = T(9751),
        W = T(8189),
        pe = T(8421),
        Fe = T(515),
        ne = T(7669),
        xe = T(2076),
        Oe = T(930),
        ye = T(4482);
      function se(e, t, ...n) {
        if (!0 === t) return void e();
        if (!1 === t) return;
        const r = new Oe.Hp({
          next: () => {
            r.unsubscribe(), e();
          },
        });
        return t(...n).subscribe(r);
      }
      function ee(e) {
        for (let t in e) if (e[t] === ee) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function ge(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function Le(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(Le).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      function fe(e, t) {
        return null == e || '' === e
          ? null === t
            ? ''
            : t
          : null == t || '' === t
          ? e
          : e + ' ' + t;
      }
      const J = ee({ __forward_ref__: ee });
      function Be(e) {
        return (
          (e.__forward_ref__ = Be),
          (e.toString = function () {
            return Le(this());
          }),
          e
        );
      }
      function de(e) {
        return me(e) ? e() : e;
      }
      function me(e) {
        return (
          'function' == typeof e &&
          e.hasOwnProperty(J) &&
          e.__forward_ref__ === Be
        );
      }
      function ue(e) {
        return e && !!e.ɵproviders;
      }
      const le = 'https://g.co/ng/security#xss';
      class Y extends Error {
        constructor(t, n) {
          super(
            (function oe(e, t) {
              return `NG0${Math.abs(e)}${t ? ': ' + t.trim() : ''}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function ce(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function B(e, t) {
        throw new Y(-201, !1);
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
      function Un(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function st(e) {
        return Pt(e, Jt) || Pt(e, jt);
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
      const Jt = ee({ ɵprov: ee }),
        $n = ee({ ɵinj: ee }),
        jt = ee({ ngInjectableDef: ee }),
        ct = ee({ ngInjectorDef: ee });
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
          : void B(Le(e));
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
      let Ut;
      function on(e) {
        const t = Ut;
        return (Ut = e), t;
      }
      function sn(e, t = qe.Default) {
        if (void 0 === Ut) throw new Y(-203, !1);
        return null === Ut
          ? un(e, void 0, t)
          : Ut.get(e, t & qe.Optional ? null : void 0, t);
      }
      function Dt(e, t = qe.Default) {
        return (
          (function Yt() {
            return Vt;
          })() || sn
        )(de(e), t);
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
          const r = de(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new Y(900, !1);
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
      var G = (() => (
          ((G = G || {})[(G.OnPush = 0)] = 'OnPush'),
          (G[(G.Default = 1)] = 'Default'),
          G
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
        Zt = ee({ ɵcmp: ee }),
        an = ee({ ɵdir: ee }),
        ln = ee({ ɵpipe: ee }),
        ir = ee({ ɵmod: ee }),
        Tn = ee({ ɵfac: ee }),
        pn = ee({ __NG_ELEMENT_ID__: ee });
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
              onPush: e.changeDetection === G.OnPush,
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
      function xn(e) {
        const t = Tt(e) || mn(e) || en(e);
        return null !== t && t.standalone;
      }
      function O(e, t) {
        const n = e[ir] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${Le(e)} does not have '\u0275mod' property.`);
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
      function jn(e, t) {
        const n = t[e];
        return tn(n) ? n : n[0];
      }
      function xr(e) {
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
      function Ie(e) {
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
      function Rt(e, t, n, r) {
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
      function ji(e, t) {
        let n = (function ga(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let Ms = !0;
      function Ui(e) {
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
            h = ji(i, t),
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
        B();
      }
      function xs(e, t, n, r) {
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
        return xs(t, n, r, i);
      }
      function gl(e, t, n, r, i) {
        const s = (function hi(e) {
          if ('string' == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(pn) ? e[pn] : void 0;
          return 'number' == typeof t ? (t >= 0 ? 255 & t : Fs) : t;
        })(n);
        if ('function' == typeof s) {
          if (!$o(t, e, r)) return r & qe.Host ? Ca(i, 0, r) : xs(t, n, r, i);
          try {
            const u = s(r);
            if (null != u || r & qe.Optional) return u;
            B();
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
            -1 !== y && Rs(r, !1)
              ? ((u = t[1]), (h = Hi(y)), (t = ji(y, t)))
              : (h = -1));
            -1 !== h;

          ) {
            const R = t[1];
            if (Ea(s, h, R.data)) {
              const H = ml(h, t, n, u, r, I);
              if (H !== fo) return H;
            }
            (y = t[h + 8]),
              -1 !== y && Rs(r, t[1].data[h + 8] === I) && Ea(s, h, t)
                ? ((u = R), (h = Hi(y)), (t = ji(y, t)))
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
          te = i ? h + R : e.directiveEnd;
        for (let Ce = r ? h : h + R; Ce < te; Ce++) {
          const je = u[Ce];
          if ((Ce < y && n === je) || (Ce >= y && je.type === n)) return Ce;
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
            (function V(e, t) {
              const n = t ? `. Dependency path: ${t.join(' > ')} > ${e}` : '';
              throw new Y(
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
                  : ce(e);
              })(s[n])
            );
          const h = Ui(u.canSeeViewProviders);
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
            null !== y && At(y), Ui(h), (u.resolving = !1), Cs();
          }
        }
        return i;
      }
      function Ea(e, t, n) {
        return !!(n[t + (e >> 5)] & (1 << e));
      }
      function Rs(e, t) {
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
        return me(e)
          ? () => {
              const t = Ia(de(e));
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
        return (function jo(e, t, n) {
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
      var Uo = (() => (
        ((Uo = Uo || {})[(Uo.Important = 1)] = 'Important'),
        (Uo[(Uo.DashCase = 2)] = 'DashCase'),
        Uo
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
      function xl(e) {
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
                const r = xa(e, t);
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
                  js(y[1], y, e, t, r, s);
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
            js(e, t, t[11], 2, null, null), (t[0] = null), (t[6] = null);
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
          n.destroyNode && js(e, t, n, 3, null, null),
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
      function xa(e, t) {
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
      function Ra(e, t, n, r) {
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
      function js(e, t, n, r, i, s) {
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
          (function jl() {
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
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${le})`;
        }
      }
      function mi(e) {
        return e instanceof pd ? e.changingThisBreaksApplicationSecurity : e;
      }
      function Us(e, t) {
        const n = (function Nm(e) {
          return (e instanceof pd && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ('ResourceURL' === n && 'URL' === t) return !0;
          throw new Error(`Required a safe ${t}, got a ${n} (see ${le})`);
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
          : Us(e, 'URL')
          ? mi(e)
          : (function Ul(e) {
              return (e = String(e)).match(Bm) ? e : 'unsafe:' + e;
            })(ce(e));
      }
      function _d(e) {
        const t = zs();
        if (t) return hd(t.sanitize(er.RESOURCE_URL, e) || '');
        if (Us(e, 'ResourceURL')) return hd(mi(e));
        throw new Y(904, !1);
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
            const r = new Error(`NullInjectorError: No provider for ${Le(t)}!`);
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
        if (!(e = de(e))) return !1;
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
          ue(n) && (n = n.ɵproviders), Array.isArray(n) ? Kl(n, t) : t(n);
      }
      const Jm = ee({ provide: String, useValue: ee });
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
      class xi {}
      class xd extends xi {
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
            i.has('environment') && this.records.set(xi, Xi(void 0, this));
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
              if (((u[Gn] = u[Gn] || []).unshift(Le(t)), i)) throw u;
              return (function dr(e, t, n, r) {
                const i = e[Gn];
                throw (
                  (t[rr] && i.unshift(t[rr]),
                  (e.message = (function _e(e, t, n, r = null) {
                    e =
                      e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let i = Le(t);
                    if (Array.isArray(t)) i = t.map(Le).join(' -> ');
                    else if ('object' == typeof t) {
                      let s = [];
                      for (let u in t)
                        if (t.hasOwnProperty(u)) {
                          let h = t[u];
                          s.push(
                            u +
                              ':' +
                              ('string' == typeof h ? JSON.stringify(h) : Le(h))
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
          for (const r of n.keys()) t.push(Le(r));
          return `R3Injector[${t.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new Y(205, !1);
        }
        processProvider(t) {
          let n = Oi((t = de(t))) ? t : de(t && t.provide);
          const r = (function rv(e) {
            return Zl(e) ? Xi(void 0, e.useValue) : Xi(Rd(e), ka);
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
          const n = de(t.providedIn);
          return 'string' == typeof n
            ? 'any' === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
      }
      function ec(e) {
        const t = st(e),
          n = null !== t ? t.factory : cr(e);
        if (null !== n) return n;
        if (e instanceof Cn) throw new Y(204, !1);
        if (e instanceof Function)
          return (function nv(e) {
            const t = e.length;
            if (t > 0) throw (P(t, '?'), new Y(204, !1));
            const n = (function cn(e) {
              const t = e && (e[Jt] || e[jt]);
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
        throw new Y(204, !1);
      }
      function Rd(e, t, n) {
        let r;
        if (Oi(e)) {
          const i = de(e);
          return cr(i) || ec(i);
        }
        if (Zl(e)) r = () => de(e.useValue);
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
          r = () => Dt(de(e.useExisting));
        else {
          const i = de(e && (e.useClass || e.provide));
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
          Array.isArray(n) ? tc(n, t) : n && ue(n) ? tc(n.ɵproviders, t) : t(n);
      }
      class av {}
      class Fd {}
      class cv {
        resolveComponentFactory(t) {
          throw (function lv(e) {
            const t = Error(
              `No component factory found for ${Le(
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
                  n = jn(Qe().index, e);
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
          s = (function xv(e) {
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
                  let te;
                  te = H > s ? '' : i[H + 1].toLowerCase();
                  const Ce = 8 & r ? te : null;
                  if ((Ce && -1 !== $d(Ce, I, 0)) || (2 & r && I !== te)) {
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
        return (function Rv(e, t) {
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
      function jd(e, t) {
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
            '' !== i && !Mo(u) && ((t += jd(s, i)), (i = '')),
              (r = u),
              (s = s || !Mo(r));
          n++;
        }
        return '' !== i && (t += jd(s, i)), t;
      }
      const xt = {};
      function Ud(e) {
        Gd(M(), g(), m() + e, !1);
      }
      function Gd(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[2])) {
            const s = e.preOrderCheckHooks;
            null !== s && zt(t, s, n);
          } else {
            const s = e.preOrderHooks;
            null !== s && Rt(t, s, 0, n);
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
          (r = r || ('object' == typeof e ? void 0 : Le(e))),
          new xd(s, t || $a(), r || null, i)
        );
      }
      let Ri = (() => {
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
        return null === n ? Dt(e, t) : _a(Qe(), n, de(e), t);
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
              null !== I && Rt(t, I, 0, null), En(t, 0);
            }
            if (
              ((function by(e) {
                for (let t = Ol(e); null !== t; t = xl(t)) {
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
                for (let t = Ol(e); null !== t; t = xl(t))
                  for (let n = 10; n < t.length; n++) {
                    const r = t[n],
                      i = r[1];
                    xr(r) && Ha(i, r, i.template, r[8]);
                  }
              })(t),
              null !== e.contentQueries && rf(e, t),
              u)
            ) {
              const I = e.contentCheckHooks;
              null !== I && zt(t, I);
            } else {
              const I = e.contentHooks;
              null !== I && Rt(t, I, 1), En(t, 1);
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
              null !== I && Rt(t, I, 2), En(t, 2);
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
                  u = ja(
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
                Mn(y) && (jn(n.index, t)[8] = Bo(t, e, h, n));
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
          te = (function oy(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : xt);
            return n;
          })(R, H),
          Ce = 'function' == typeof I ? I() : I;
        return (te[1] = {
          type: e,
          blueprint: te,
          template: n,
          queries: null,
          viewQuery: h,
          declTNode: t,
          data: te.slice().fill(null, R),
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
        const n = jn(t, e);
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
                    if (null == s) throw new Y(-301, !1);
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
              te = n ? n.get(H) : null,
              je = te ? te.outputs : null;
            (y = cf(H.inputs, R, y, te ? te.inputs : null)),
              (I = cf(H.outputs, R, I, je));
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
          })(e, t, r, Xs(e, n, i.hostVars, xt), i);
      }
      function Go(e, t, n, r, i, s) {
        const u = Jn(e, t);
        !(function vc(e, t, n, r, i, s, u) {
          if (null == s) e.removeAttribute(t, i, n);
          else {
            const h = null == u ? ce(s) : u(s, r || '', i);
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
        const n = jn(t, e);
        if (xr(n)) {
          const r = n[1];
          48 & n[2] ? Ha(r, n, r.template, n[8]) : n[5] > 0 && yc(n);
        }
      }
      function yc(e) {
        for (let r = Ol(e); null !== r; r = xl(r))
          for (let i = 10; i < r.length; i++) {
            const s = r[i];
            if (xr(s))
              if (512 & s[2]) {
                const u = s[1];
                Ha(u, s, u.template, s[8]);
              } else s[5] > 0 && yc(s);
          }
        const n = e[1].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const i = jn(n[r], e);
            xr(i) && i[5] > 0 && yc(i);
          }
      }
      function wy(e, t) {
        const n = jn(t, e),
          r = n[1];
        (function Sy(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          uc(r, n, n[8]);
      }
      function ja(e, t) {
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
      function Ua(e, t, n, r = !0) {
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
              ? (i = fe(i, h))
              : 2 == s && (r = fe(r, h + ': ' + t[++u] + ';'));
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
          Ua(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new Y(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function pm(e, t) {
              js(e, t, t[11], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new Y(902, !1);
          this._appRef = t;
        }
      }
      class My extends Ks {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          const t = this._view;
          Ua(t[1], t, t[8], !1);
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
          let s = (i = i || this.ngModule) instanceof xi ? i : i?.injector;
          s &&
            null !== this.componentDef.getStandaloneInjector &&
            (s = this.componentDef.getStandaloneInjector(s) || s);
          const u = s ? new Ty(t, s) : t,
            h = u.get(Nd, null);
          if (null === h) throw new Y(407, !1);
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
            te = this.componentDef.onPush ? 288 : 272,
            Ce = pc(0, null, null, 1, 0, null, null, null, null, null),
            je = Va(null, Ce, null, te, null, null, h, I, y, u, null);
          let Ze, it;
          Ii(je);
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
            const Ot = (function xy(e, t) {
                const n = e[1];
                return (e[22] = t), es(n, 22, 2, '#host', null);
              })(je, H),
              Nn = (function Ry(e, t, n, r, i, s, u, h) {
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
                  ja(i, R),
                  (i[e.index] = R)
                );
              })(Ot, H, dt, _t, je, h, I);
            (it = ao(Ce, 22)),
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
              })(Nn, dt, _t, Xe, je, [ky])),
              uc(Ce, je, null);
          } finally {
            Bi();
          }
          return new Oy(this.componentType, Ze, Ki(it, je), je, it);
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
            if (t.ɵcmp) throw new Y(903, !1);
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
                ge(e.inputs, i.inputs),
                ge(e.declaredInputs, i.declaredInputs),
                ge(e.outputs, i.outputs),
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
        const te = y[11].createComment('');
        Ra(I, y, te, H),
          Ir(te, y),
          ja(y, (y[R] = pf(te, y, te, H))),
          Or(H) && fc(I, y, H),
          null != u && hc(y, H, h);
      }
      function Nf(e) {
        return Wr(
          (function Rr() {
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
          32 != (32 & I.flags) && Ra(s, i, y, I),
          0 ===
            (function D() {
              return St.lFrame.elementDepthCount;
            })() && Ir(y, i),
          (function F() {
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
        !(function Se() {
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
          Ra(i, r, h, u),
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
      function xc(e, t, n, r) {
        const i = g(),
          s = M(),
          u = Qe();
        return (
          (function Vf(e, t, n, r, i, s, u) {
            const h = Or(r),
              I = e.firstCreatePass && mf(e),
              R = t[8],
              H = gf(t);
            let te = !0;
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
                  (te = !1);
              else {
                s = jf(r, t, R, s, !1);
                const Ot = n.listen(it, i, s);
                H.push(s, Ot), I && I.push(i, _t, dt, dt + 1);
              }
            } else s = jf(r, t, R, s, !1);
            const Ce = r.outputs;
            let je;
            if (te && null !== Ce && (je = Ce[i])) {
              const Ze = je.length;
              if (Ze)
                for (let it = 0; it < Ze; it += 2) {
                  const Nn = t[je[it]][je[it + 1]].subscribe(s),
                    Kn = H.length;
                  H.push(s, Nn), I && I.push(i, r.index, Kn, -(Kn + 1));
                }
            }
          })(s, i, i[11], u, e, t, r),
          xc
        );
      }
      function Hf(e, t, n, r) {
        try {
          return !1 !== n(r);
        } catch (i) {
          return yf(e, i), !1;
        }
      }
      function jf(e, t, n, r, i) {
        return function s(u) {
          if (u === Function) return r;
          Dc(e.componentOffset > -1 ? jn(e.index, t) : t);
          let y = Hf(t, 0, r, u),
            I = s.__ngNextListenerFn__;
          for (; I; ) (y = Hf(t, 0, I, u) && y), (I = I.__ngNextListenerFn__);
          return i && !1 === y && (u.preventDefault(), (u.returnValue = !1)), y;
        };
      }
      function Uf(e = 1) {
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
                          const te = vi(e[h + 1]);
                          (e[r + 1] = Qa(te, h)),
                            0 !== te && (e[te + 1] = Pc(e[te + 1], r)),
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
              t !== xt &&
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
                        let s = -1 === r.indexOf('-') ? void 0 : Uo.DashCase;
                        null == i
                          ? e.removeStyle(n, r, s)
                          : ('string' == typeof i &&
                              i.endsWith('!important') &&
                              ((i = i.slice(0, -10)), (s |= Uo.Important)),
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
                          : 'object' == typeof e && (e = Le(mi(e)))),
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
          let te = n[i + 1];
          te === xt && (te = H ? vt : void 0);
          let Ce = H ? Pn(te, r) : R === r ? te : void 0;
          if ((I && !Ja(Ce) && (Ce = Pn(y, r)), Ja(Ce) && ((h = Ce), u)))
            return h;
          const je = e[i + 1];
          i = u ? vi(je) : Ni(je);
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
          u = (n[i] = (function Rl(e, t) {
            return e.createText(t);
          })(n[11], t));
        Ra(r, n, u, s), qt(s, !1);
      }
      function $c(e) {
        return Bc('', e, ''), $c;
      }
      function Bc(e, t, n) {
        const r = g(),
          i = (function ns(e, t, n, r) {
            return wr(e, co(), n) ? t + ce(n) + r : xt;
          })(r, e, t, n);
        return (
          i !== xt &&
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
      var UD = [
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
        function jD(e) {
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
        if ('en' === r) return UD;
        throw new Y(701, !1);
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
      function Uc(e, t, n, r, i) {
        if (((e = de(e)), Array.isArray(e)))
          for (let s = 0; s < e.length; s++) Uc(e[s], t, n, r, i);
        else {
          const s = M(),
            u = g();
          let h = Oi(e) ? e : de(e.provide),
            y = Rd(e);
          const I = Qe(),
            R = 1048575 & I.providerIndexes,
            H = I.directiveStart,
            te = I.providerIndexes >> 20;
          if (Oi(e) || !e.multi) {
            const Ce = new hr(y, i, Ji),
              je = zc(h, t, i ? R : R + te, H);
            -1 === je
              ? (di(Gi(I, u), s, h),
                Gc(s, e, t.length),
                t.push(h),
                I.directiveStart++,
                I.directiveEnd++,
                i && (I.providerIndexes += 1048576),
                n.push(Ce),
                u.push(Ce))
              : ((n[je] = Ce), (u[je] = Ce));
          } else {
            const Ce = zc(h, t, R + te, H),
              je = zc(h, t, R, R + te),
              Ze = Ce >= 0 && n[Ce],
              it = je >= 0 && n[je];
            if ((i && !it) || (!i && !Ze)) {
              di(Gi(I, u), s, h);
              const dt = (function j0(e, t, n, r, i) {
                const s = new hr(e, n, Ji);
                return (
                  (s.multi = []),
                  (s.index = t),
                  (s.componentProviders = 0),
                  lp(s, i, r && !n),
                  s
                );
              })(i ? H0 : V0, n.length, i, r, y);
              !i && it && (n[je].providerFactory = dt),
                Gc(s, e, t.length, 0),
                t.push(h),
                I.directiveStart++,
                I.directiveEnd++,
                i && (I.providerIndexes += 1048576),
                n.push(dt),
                u.push(dt);
            } else Gc(s, e, Ce > -1 ? Ce : je, lp(n[i ? je : Ce], y, !i && r));
            !i && r && it && n[je].componentProviders++;
          }
        }
      }
      function Gc(e, t, n, r) {
        const i = Oi(t),
          s = (function ev(e) {
            return !!e.useClass;
          })(t);
        if (i || s) {
          const y = (s ? de(t.useClass) : t).prototype.ngOnDestroy;
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
                Uc(n, r.data, r.blueprint, i, !0),
                  Uc(t, r.data, r.blueprint, i, !1);
              }
            })(r, i ? i(e) : e, t);
        };
      }
      class hs {}
      class up {}
      function U0(e, t) {
        return new dp(e, t ?? null);
      }
      class dp extends hs {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new Df(this));
          const r = O(t);
          (this._bootstrapComponents = ii(r.bootstrap)),
            (this._r3Injector = Xd(
              t,
              n,
              [
                { provide: hs, useValue: this },
                { provide: Ys, useValue: this.componentFactoryResolver },
              ],
              Le(t),
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
          const i = new xd(
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
            factory: () => new e(Dt(xi)),
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
        return i[r] === xt
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
              return n === xt ? void 0 : n;
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
          const h = Ui(!1),
            y = s();
          return (
            Ui(h),
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
          return t instanceof L.w0 && t.add(h), h;
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
              const n = ji(t, this._hostLView),
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
              const te = (u ? I : this.parentInjector).get(xi, null);
              te && (s = te);
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
                  te = new Mp(H, H[6], H[3]);
                te.detach(te.indexOf(t));
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
              I = xa(y, u[7]);
            return (
              null !== I &&
                (function hm(e, t, n, r, i, s) {
                  (r[0] = i), (r[6] = t), js(e, r, n, 1, i, s);
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
              xa(s, u),
              i,
              (function _m(e, t) {
                return e.nextSibling(t);
              })(s, u),
              !1
            );
          }
          (t[e.index] = n = pf(r, t, i, e)), ja(t, n);
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
      function xp(e, t, n, r) {
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
          const u = xp(e, t, i, n);
          for (let h = 0; h < s.length; h += 2) {
            const y = s[h];
            if (y > 0) r.push(u[h / 2]);
            else {
              const I = s[h + 1],
                R = t[-y];
              for (let H = 10; H < R.length; H++) {
                const te = R[H];
                te[17] === te[3] && ru(te[1], te, I, r);
              }
              if (null !== R[9]) {
                const H = R[9];
                for (let te = 0; te < H.length; te++) {
                  const Ce = H[te];
                  ru(Ce[1], Ce, I, r);
                }
              }
            }
          }
        }
        return r;
      }
      function Rp(e) {
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
            const s = i.crossesNgTemplate ? ru(n, t, r, []) : xp(n, t, i, r);
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
              s = ii(O(n).declarations).reduce((u, h) => {
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
            throw new Y(908, !1);
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
          if (!po.isInAngularZone()) throw new Y(909, !1);
        }
        static assertNotInAngularZone() {
          if (po.isInAngularZone()) throw new Y(909, !1);
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
              return Ri.create({
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
              next: (te) => {
                y.handleError(te);
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
              const te = h.get(ll);
              return (
                te.runInitializers(),
                te.donePromise.then(() => {
                  !(function $h(e) {
                    bt(e, 'Expected localeId to be defined'),
                      'string' == typeof e &&
                        (kh = e.toLowerCase().replace(/_/g, '-'));
                  })(h.get(cl, fs) || fs);
                  const je = h.get(ul);
                  return void 0 !== t && je.bootstrap(t), je;
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
            const s = new z.y((h) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    h.next(this._stable), h.complete();
                  });
              }),
              u = new z.y((h) => {
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
            this.isStable = (function we(...e) {
              const t = (0, ne.yG)(e),
                n = (0, ne._6)(e, 1 / 0),
                r = e;
              return r.length
                ? 1 === r.length
                  ? (0, pe.Xf)(r[0])
                  : (0, W.J)(n)((0, xe.D)(r, t))
                : Fe.E;
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
                      H = !1;
                    const te = () => {
                        h?.unsubscribe(), (h = void 0);
                      },
                      Ce = () => {
                        te(), (u = y = void 0), (R = H = !1);
                      },
                      je = () => {
                        const Ze = u;
                        Ce(), Ze?.unsubscribe();
                      };
                    return (0, ye.e)((Ze, it) => {
                      I++, !H && !R && te();
                      const dt = (y = y ?? t());
                      it.add(() => {
                        I--, 0 === I && !H && !R && (h = se(je, i));
                      }),
                        dt.subscribe(it),
                        !u &&
                          I > 0 &&
                          ((u = new Oe.Hp({
                            next: (_t) => dt.next(_t),
                            error: (_t) => {
                              (H = !0), te(), (h = se(Ce, n, _t)), dt.error(_t);
                            },
                            complete: () => {
                              (R = !0), te(), (h = se(Ce, r)), dt.complete();
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
              throw (!i && xn(n), new Y(405, false));
            let u;
            (u = i ? n : this._injector.get(Ys).resolveComponentFactory(n)),
              this.componentTypes.push(u.componentType);
            const h = (function c_(e) {
                return e.isBoundToModule;
              })(u)
                ? void 0
                : this._injector.get(hs),
              I = u.create(Ri.NULL, [], r || u.selector, h),
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
            if (this._runningTick) throw new Y(101, !1);
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
            if (this._destroyed) throw new Y(406, !1);
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
            return new (n || e)(Dt(po), Dt(xi), Dt(qs));
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
            const r = jn(e.index, t);
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
                for (let te = 0; te < I; te++) {
                  const Ce = te < s.length ? s[te] : (s[te] = 0),
                    je = Ce + te;
                  R <= je && je < I && (s[te] = Ce + 1);
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
          if ((null == t && (t = []), !Qs(t))) throw new Y(900, !1);
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
      class xg {
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
            if (!(t instanceof Map || Ic(t))) throw new Y(900, !1);
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
      function Rg() {
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
              useFactory: (r) => e.create(n, r || Rg()),
              deps: [[e, new ks(), new Ls()]],
            };
          }
          find(n) {
            const r = this.factories.find((i) => i.supports(n));
            if (null != r) return r;
            throw new Y(901, !1);
          }
        }
        return (e.ɵprov = Lt({ token: e, providedIn: 'root', factory: Rg })), e;
      })();
      function Fg() {
        return new Cu([new xg()]);
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
            throw new Y(901, !1);
          }
        }
        return (e.ɵprov = Lt({ token: e, providedIn: 'root', factory: Fg })), e;
      })();
      function R_(e) {
        return 'boolean' == typeof e ? e : null != e && 'false' !== e;
      }
    },
    433: (at, $e, T) => {
      'use strict';
      T.d($e, {
        qu: () => Vr,
        u: () => to,
        sg: () => Or,
        u5: () => ao,
        JU: () => ge,
        a5: () => cn,
        JJ: () => $n,
        JL: () => jt,
        UX: () => Wr,
        kI: () => k,
        _Y: () => go,
      });
      var o = T(8256),
        L = T(6895),
        z = T(2076),
        W = T(9751),
        pe = T(4742),
        Fe = T(8421),
        ne = T(7669),
        xe = T(5403),
        we = T(3268),
        Oe = T(1810),
        be = T(4004);
      let se = (() => {
          class b {
            constructor(D, F) {
              (this._renderer = D),
                (this._elementRef = F),
                (this.onChange = (Se) => {}),
                (this.onTouched = () => {});
            }
            setProperty(D, F) {
              this._renderer.setProperty(this._elementRef.nativeElement, D, F);
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
        ee = (() => {
          class b extends se {}
          return (
            (b.ɵfac = (function () {
              let C;
              return function (F) {
                return (C || (C = o.n5z(b)))(F || b);
              };
            })()),
            (b.ɵdir = o.lG2({ type: b, features: [o.qOj] })),
            b
          );
        })();
      const ge = new o.OlP('NgValueAccessor'),
        J = { provide: ge, useExisting: (0, o.Gpc)(() => me), multi: !0 },
        de = new o.OlP('CompositionEventMode');
      let me = (() => {
        class b extends se {
          constructor(D, F, Se) {
            super(D, F),
              (this._compositionMode = Se),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function Be() {
                  const b = (0, L.q)() ? (0, L.q)().getUserAgent() : '';
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
            return new (D || b)(o.Y36(o.Qsj), o.Y36(o.SBq), o.Y36(de, 8));
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
            hostBindings: function (D, F) {
              1 & D &&
                o.NdJ('input', function (a) {
                  return F._handleInput(a.target.value);
                })('blur', function () {
                  return F.onTouched();
                })('compositionstart', function () {
                  return F._compositionStart();
                })('compositionend', function (a) {
                  return F._compositionEnd(a.target.value);
                });
            },
            features: [o._Bn([J]), o.qOj],
          })),
          b
        );
      })();
      function Ne(b) {
        return (
          null == b ||
          (('string' == typeof b || Array.isArray(b)) && 0 === b.length)
        );
      }
      function le(b) {
        return null != b && 'number' == typeof b.length;
      }
      const Y = new o.OlP('NgValidators'),
        oe = new o.OlP('NgAsyncValidators'),
        ce =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class k {
        static min(C) {
          return (function V(b) {
            return (C) => {
              if (Ne(C.value) || Ne(b)) return null;
              const D = parseFloat(C.value);
              return !isNaN(D) && D < b
                ? { min: { min: b, actual: C.value } }
                : null;
            };
          })(C);
        }
        static max(C) {
          return (function j(b) {
            return (C) => {
              if (Ne(C.value) || Ne(b)) return null;
              const D = parseFloat(C.value);
              return !isNaN(D) && D > b
                ? { max: { max: b, actual: C.value } }
                : null;
            };
          })(C);
        }
        static required(C) {
          return (function S(b) {
            return Ne(b.value) ? { required: !0 } : null;
          })(C);
        }
        static requiredTrue(C) {
          return (function B(b) {
            return !0 === b.value ? null : { required: !0 };
          })(C);
        }
        static email(C) {
          return (function q(b) {
            return Ne(b.value) || ce.test(b.value) ? null : { email: !0 };
          })(C);
        }
        static minLength(C) {
          return (function Pe(b) {
            return (C) =>
              Ne(C.value) || !le(C.value)
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
          return (function he(b) {
            return (C) =>
              le(C.value) && C.value.length > b
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
          return (function ve(b) {
            if (!b) return re;
            let C, D;
            return (
              'string' == typeof b
                ? ((D = ''),
                  '^' !== b.charAt(0) && (D += '^'),
                  (D += b),
                  '$' !== b.charAt(b.length - 1) && (D += '$'),
                  (C = new RegExp(D)))
                : ((D = b.toString()), (C = b)),
              (F) => {
                if (Ne(F.value)) return null;
                const Se = F.value;
                return C.test(Se)
                  ? null
                  : { pattern: { requiredPattern: D, actualValue: Se } };
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
      function re(b) {
        return null;
      }
      function Ve(b) {
        return null != b;
      }
      function He(b) {
        return (0, o.QGY)(b) ? (0, z.D)(b) : b;
      }
      function Ee(b) {
        let C = {};
        return (
          b.forEach((D) => {
            C = null != D ? { ...C, ...D } : C;
          }),
          0 === Object.keys(C).length ? null : C
        );
      }
      function Me(b, C) {
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
        const C = b.filter(Ve);
        return 0 == C.length
          ? null
          : function (D) {
              return Ee(Me(D, C));
            };
      }
      function ft(b) {
        return null != b ? Ke(nt(b)) : null;
      }
      function bt(b) {
        if (!b) return null;
        const C = b.filter(Ve);
        return 0 == C.length
          ? null
          : function (D) {
              return (function ye(...b) {
                const C = (0, ne.jO)(b),
                  { args: D, keys: F } = (0, pe.D)(b),
                  Se = new W.y((a) => {
                    const { length: _ } = D;
                    if (!_) return void a.complete();
                    const c = new Array(_);
                    let g = _,
                      M = _;
                    for (let Ie = 0; Ie < _; Ie++) {
                      let Je = !1;
                      (0, Fe.Xf)(D[Ie]).subscribe(
                        (0, xe.x)(
                          a,
                          (Qe) => {
                            Je || ((Je = !0), M--), (c[Ie] = Qe);
                          },
                          () => g--,
                          void 0,
                          () => {
                            (!g || !Je) &&
                              (M || a.next(F ? (0, Oe.n)(F, c) : c),
                              a.complete());
                          }
                        )
                      );
                    }
                  });
                return C ? Se.pipe((0, we.Z)(C)) : Se;
              })(Me(D, C).map(He)).pipe((0, be.U)(Ee));
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
      function Un(b, C) {
        const D = Lt(C);
        return (
          Lt(b).forEach((Se) => {
            bn(D, Se) || D.push(Se);
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
              hostBindings: function (D, F) {
                2 & D &&
                  o.ekj('ng-untouched', F.isUntouched)(
                    'ng-touched',
                    F.isTouched
                  )('ng-pristine', F.isPristine)('ng-dirty', F.isDirty)(
                    'ng-valid',
                    F.isValid
                  )('ng-invalid', F.isInvalid)('ng-pending', F.isPending);
              },
              features: [o.qOj],
            })),
            b
          );
        })(),
        jt = (() => {
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
              hostBindings: function (D, F) {
                2 & D &&
                  o.ekj('ng-untouched', F.isUntouched)(
                    'ng-touched',
                    F.isTouched
                  )('ng-pristine', F.isPristine)('ng-dirty', F.isDirty)(
                    'ng-valid',
                    F.isValid
                  )('ng-invalid', F.isInvalid)('ng-pending', F.isPending)(
                    'ng-submitted',
                    F.isSubmitted
                  );
              },
              features: [o.qOj],
            })),
            b
          );
        })();
      const Ut = 'VALID',
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
        const F = b.controls;
        if (!(C ? Object.keys(F) : F).length) throw new o.vHH(1e3, '');
        if (!F[D]) throw new o.vHH(1001, '');
      }
      function dr(b, C, D) {
        b._forEachChild((F, Se) => {
          if (void 0 === D[Se]) throw new o.vHH(1002, '');
        });
      }
      class _e {
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
          return this.status === Ut;
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
          this.setValidators(Un(C, this._rawValidators));
        }
        addAsyncValidators(C) {
          this.setAsyncValidators(Un(C, this._rawAsyncValidators));
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
            this._forEachChild((F) => {
              F.disable({ ...C, onlySelf: !0 });
            }),
            this._updateValue(),
            !1 !== C.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors({ ...C, skipPristineCheck: D }),
            this._onDisabledChange.forEach((F) => F(!0));
        }
        enable(C = {}) {
          const D = this._parentMarkedDirty(C.onlySelf);
          (this.status = Ut),
            this._forEachChild((F) => {
              F.enable({ ...C, onlySelf: !0 });
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: C.emitEvent,
            }),
            this._updateAncestors({ ...C, skipPristineCheck: D }),
            this._onDisabledChange.forEach((F) => F(!1));
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
              (this.status === Ut || this.status === sn) &&
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
          this.status = this._allControlsDisabled() ? Dt : Ut;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(C) {
          if (this.asyncValidator) {
            (this.status = sn), (this._hasOwnPendingAsyncValidator = !0);
            const D = He(this.asyncValidator(this));
            this._asyncValidationSubscription = D.subscribe((F) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(F, { emitEvent: C });
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
            : D.reduce((F, Se) => F && F._find(Se), this);
        }
        getError(C, D) {
          const F = D ? this.get(D) : this;
          return F && F.errors ? F.errors[C] : null;
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
            : Ut;
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
      class Z extends _e {
        constructor(C, D, F) {
          super(wn(D), Vn(F, D)),
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
        addControl(C, D, F = {}) {
          this.registerControl(C, D),
            this.updateValueAndValidity({ emitEvent: F.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(C, D = {}) {
          this.controls[C] &&
            this.controls[C]._registerOnCollectionChange(() => {}),
            delete this.controls[C],
            this.updateValueAndValidity({ emitEvent: D.emitEvent }),
            this._onCollectionChange();
        }
        setControl(C, D, F = {}) {
          this.controls[C] &&
            this.controls[C]._registerOnCollectionChange(() => {}),
            delete this.controls[C],
            D && this.registerControl(C, D),
            this.updateValueAndValidity({ emitEvent: F.emitEvent }),
            this._onCollectionChange();
        }
        contains(C) {
          return this.controls.hasOwnProperty(C) && this.controls[C].enabled;
        }
        setValue(C, D = {}) {
          dr(this, 0, C),
            Object.keys(C).forEach((F) => {
              Dr(this, !0, F),
                this.controls[F].setValue(C[F], {
                  onlySelf: !0,
                  emitEvent: D.emitEvent,
                });
            }),
            this.updateValueAndValidity(D);
        }
        patchValue(C, D = {}) {
          null != C &&
            (Object.keys(C).forEach((F) => {
              const Se = this.controls[F];
              Se &&
                Se.patchValue(C[F], { onlySelf: !0, emitEvent: D.emitEvent });
            }),
            this.updateValueAndValidity(D));
        }
        reset(C = {}, D = {}) {
          this._forEachChild((F, Se) => {
            F.reset(C[Se], { onlySelf: !0, emitEvent: D.emitEvent });
          }),
            this._updatePristine(D),
            this._updateTouched(D),
            this.updateValueAndValidity(D);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (C, D, F) => ((C[F] = D.getRawValue()), C)
          );
        }
        _syncPendingControls() {
          let C = this._reduceChildren(
            !1,
            (D, F) => !!F._syncPendingControls() || D
          );
          return C && this.updateValueAndValidity({ onlySelf: !0 }), C;
        }
        _forEachChild(C) {
          Object.keys(this.controls).forEach((D) => {
            const F = this.controls[D];
            F && C(F, D);
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
          for (const [D, F] of Object.entries(this.controls))
            if (this.contains(D) && C(F)) return !0;
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (D, F, Se) => ((F.enabled || this.disabled) && (D[Se] = F.value), D)
          );
        }
        _reduceChildren(C, D) {
          let F = C;
          return (
            this._forEachChild((Se, a) => {
              F = D(F, Se, a);
            }),
            F
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
      class ze extends Z {}
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
            const D = (F, Se) => {
              C.valueAccessor.writeValue(F), Se && C.viewToModelUpdate(F);
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
              const D = (F) => {
                C.valueAccessor.setDisabledState(F);
              };
              b.registerOnDisabledChange(D),
                C._registerOnDestroy(() => {
                  b._unregisterOnDisabledChange(D);
                });
            }
          })(b, C);
      }
      function ln(b, C, D = !0) {
        const F = () => {};
        C.valueAccessor &&
          (C.valueAccessor.registerOnChange(F),
          C.valueAccessor.registerOnTouched(F)),
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
        const F = Ye(b);
        null !== C.asyncValidator
          ? b.setAsyncValidators(Ft(F, C.asyncValidator))
          : 'function' == typeof F && b.setAsyncValidators([F]);
        const Se = () => b.updateValueAndValidity();
        ir(C._rawValidators, Se), ir(C._rawAsyncValidators, Se);
      }
      function On(b, C) {
        let D = !1;
        if (null !== b) {
          if (null !== C.validator) {
            const Se = Mt(b);
            if (Array.isArray(Se) && Se.length > 0) {
              const a = Se.filter((_) => _ !== C.validator);
              a.length !== Se.length && ((D = !0), b.setValidators(a));
            }
          }
          if (null !== C.asyncValidator) {
            const Se = Ye(b);
            if (Array.isArray(Se) && Se.length > 0) {
              const a = Se.filter((_) => _ !== C.asyncValidator);
              a.length !== Se.length && ((D = !0), b.setAsyncValidators(a));
            }
          }
        }
        const F = () => {};
        return ir(C._rawValidators, F), ir(C._rawAsyncValidators, F), D;
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
      function ke(b) {
        return (
          'object' == typeof b &&
          null !== b &&
          2 === Object.keys(b).length &&
          'value' in b &&
          'disabled' in b
        );
      }
      const Te = class extends _e {
        constructor(C = null, D, F) {
          super(wn(D), Vn(F, D)),
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
              (this.defaultValue = ke(C) ? C.value : C);
        }
        setValue(C, D = {}) {
          (this.value = this._pendingValue = C),
            this._onChange.length &&
              !1 !== D.emitModelToViewChange &&
              this._onChange.forEach((F) =>
                F(this.value, !1 !== D.emitViewToModelChange)
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
          ke(C)
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
          constructor(D, F, Se) {
            super(),
              (this.callSetDisabledState = Se),
              (this.submitted = !1),
              (this._onCollectionChange = () => this._updateDomValue()),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new o.vpe()),
              this._setValidators(D),
              this._setAsyncValidators(F);
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
            const F = this.form.get(D.path);
            return (
              an(F, D, this.callSetDisabledState),
              F.updateValueAndValidity({ emitEvent: !1 }),
              this.directives.push(D),
              F
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
          updateModel(D, F) {
            this.form.get(D.path).setValue(F);
          }
          onSubmit(D) {
            return (
              (this.submitted = !0),
              (function O(b, C) {
                b._syncPendingControls(),
                  C.forEach((D) => {
                    const F = D.control;
                    'submit' === F.updateOn &&
                      F._pendingChange &&
                      (D.viewToModelUpdate(F._pendingValue),
                      (F._pendingChange = !1));
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
              const F = D.control,
                Se = this.form.get(D.path);
              F !== Se &&
                (ln(F || null, D),
                ((b) => b instanceof Te)(Se) &&
                  (an(Se, D, this.callSetDisabledState), (D.control = Se)));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _setUpFormContainer(D) {
            const F = this.form.get(D.path);
            (function pr(b, C) {
              pn(b, C);
            })(F, D),
              F.updateValueAndValidity({ emitEvent: !1 });
          }
          _cleanUpFormContainer(D) {
            if (this.form) {
              const F = this.form.get(D.path);
              F &&
                (function Cr(b, C) {
                  return On(b, C);
                })(F, D) &&
                F.updateValueAndValidity({ emitEvent: !1 });
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
            return new (D || b)(o.Y36(Y, 10), o.Y36(oe, 10), o.Y36(mt, 8));
          }),
          (b.ɵdir = o.lG2({
            type: b,
            selectors: [['', 'formGroup', '']],
            hostBindings: function (D, F) {
              1 & D &&
                o.NdJ('submit', function (a) {
                  return F.onSubmit(a);
                })('reset', function () {
                  return F.onReset();
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
            constructor(D, F, Se, a, _) {
              super(),
                (this._ngModelWarningConfig = _),
                (this._added = !1),
                (this.update = new o.vpe()),
                (this._ngModelWarningSent = !1),
                (this._parent = D),
                this._setValidators(F),
                this._setAsyncValidators(Se),
                (this.valueAccessor = (function $(b, C) {
                  if (!C) return null;
                  let D, F, Se;
                  return (
                    Array.isArray(C),
                    C.forEach((a) => {
                      a.constructor === me
                        ? (D = a)
                        : (function xn(b) {
                            return Object.getPrototypeOf(b.constructor) === ee;
                          })(a)
                        ? (F = a)
                        : (Se = a);
                    }),
                    Se || F || D || null
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
                o.Y36(Y, 10),
                o.Y36(oe, 10),
                o.Y36(ge, 10),
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
      class jn extends _e {
        constructor(C, D, F) {
          super(wn(D), Vn(F, D)),
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
        insert(C, D, F = {}) {
          this.controls.splice(C, 0, D),
            this._registerControl(D),
            this.updateValueAndValidity({ emitEvent: F.emitEvent });
        }
        removeAt(C, D = {}) {
          let F = this._adjustIndex(C);
          F < 0 && (F = 0),
            this.controls[F] &&
              this.controls[F]._registerOnCollectionChange(() => {}),
            this.controls.splice(F, 1),
            this.updateValueAndValidity({ emitEvent: D.emitEvent });
        }
        setControl(C, D, F = {}) {
          let Se = this._adjustIndex(C);
          Se < 0 && (Se = 0),
            this.controls[Se] &&
              this.controls[Se]._registerOnCollectionChange(() => {}),
            this.controls.splice(Se, 1),
            D && (this.controls.splice(Se, 0, D), this._registerControl(D)),
            this.updateValueAndValidity({ emitEvent: F.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(C, D = {}) {
          dr(this, 0, C),
            C.forEach((F, Se) => {
              Dr(this, !1, Se),
                this.at(Se).setValue(F, {
                  onlySelf: !0,
                  emitEvent: D.emitEvent,
                });
            }),
            this.updateValueAndValidity(D);
        }
        patchValue(C, D = {}) {
          null != C &&
            (C.forEach((F, Se) => {
              this.at(Se) &&
                this.at(Se).patchValue(F, {
                  onlySelf: !0,
                  emitEvent: D.emitEvent,
                });
            }),
            this.updateValueAndValidity(D));
        }
        reset(C = [], D = {}) {
          this._forEachChild((F, Se) => {
            F.reset(C[Se], { onlySelf: !0, emitEvent: D.emitEvent });
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
            (D, F) => !!F._syncPendingControls() || D,
            !1
          );
          return C && this.updateValueAndValidity({ onlySelf: !0 }), C;
        }
        _forEachChild(C) {
          this.controls.forEach((D, F) => {
            C(D, F);
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
          group(D, F = null) {
            const Se = this._reduceControls(D);
            let a = {};
            return (
              Jo(F)
                ? (a = F)
                : null !== F &&
                  ((a.validators = F.validator),
                  (a.asyncValidators = F.asyncValidator)),
              new Z(Se, a)
            );
          }
          record(D, F = null) {
            const Se = this._reduceControls(D);
            return new ze(Se, F);
          }
          control(D, F, Se) {
            let a = {};
            return this.useNonNullable
              ? (Jo(F)
                  ? (a = F)
                  : ((a.validators = F), (a.asyncValidators = Se)),
                new Te(D, { ...a, nonNullable: !0 }))
              : new Te(D, F, Se);
          }
          array(D, F, Se) {
            const a = D.map((_) => this._createControl(_));
            return new jn(a, F, Se);
          }
          _reduceControls(D) {
            const F = {};
            return (
              Object.keys(D).forEach((Se) => {
                F[Se] = this._createControl(D[Se]);
              }),
              F
            );
          }
          _createControl(D) {
            return D instanceof Te || D instanceof _e
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
    1481: (at, $e, T) => {
      'use strict';
      T.d($e, { Cg: () => Ke, Dx: () => $n });
      var o = T(6895),
        L = T(8256);
      class z extends o.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class W extends z {
        static makeCurrent() {
          (0, o.HT)(new W());
        }
        onAndCancel(Z, G, Ae) {
          return (
            Z.addEventListener(G, Ae, !1),
            () => {
              Z.removeEventListener(G, Ae, !1);
            }
          );
        }
        dispatchEvent(Z, G) {
          Z.dispatchEvent(G);
        }
        remove(Z) {
          Z.parentNode && Z.parentNode.removeChild(Z);
        }
        createElement(Z, G) {
          return (G = G || this.getDefaultDocument()).createElement(Z);
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
        getGlobalEventTarget(Z, G) {
          return 'window' === G
            ? window
            : 'document' === G
            ? Z
            : 'body' === G
            ? Z.body
            : null;
        }
        getBaseHref(Z) {
          const G = (function Fe() {
            return (
              (pe = pe || document.querySelector('base')),
              pe ? pe.getAttribute('href') : null
            );
          })();
          return null == G
            ? null
            : (function xe(_e) {
                (ne = ne || document.createElement('a')),
                  ne.setAttribute('href', _e);
                const Z = ne.pathname;
                return '/' === Z.charAt(0) ? Z : `/${Z}`;
              })(G);
        }
        resetBaseElement() {
          pe = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(Z) {
          return (0, o.Mx)(document.cookie, Z);
        }
      }
      let ne,
        pe = null,
        se = (() => {
          class _e {
            build() {
              return new XMLHttpRequest();
            }
          }
          return (
            (_e.ɵfac = function (G) {
              return new (G || _e)();
            }),
            (_e.ɵprov = L.Yz7({ token: _e, factory: _e.ɵfac })),
            _e
          );
        })();
      const ee = new L.OlP('EventManagerPlugins');
      let ge = (() => {
        class _e {
          constructor(G, Ae) {
            (this._zone = Ae),
              (this._eventNameToPlugin = new Map()),
              G.forEach((ze) => (ze.manager = this)),
              (this._plugins = G.slice().reverse());
          }
          addEventListener(G, Ae, ze) {
            return this._findPluginFor(Ae).addEventListener(G, Ae, ze);
          }
          addGlobalEventListener(G, Ae, ze) {
            return this._findPluginFor(Ae).addGlobalEventListener(G, Ae, ze);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(G) {
            const Ae = this._eventNameToPlugin.get(G);
            if (Ae) return Ae;
            const ze = this._plugins;
            for (let ht = 0; ht < ze.length; ht++) {
              const mt = ze[ht];
              if (mt.supports(G)) return this._eventNameToPlugin.set(G, mt), mt;
            }
            throw new Error(`No event manager plugin found for event ${G}`);
          }
        }
        return (
          (_e.ɵfac = function (G) {
            return new (G || _e)(L.LFG(ee), L.LFG(L.R0b));
          }),
          (_e.ɵprov = L.Yz7({ token: _e, factory: _e.ɵfac })),
          _e
        );
      })();
      class Le {
        constructor(Z) {
          this._doc = Z;
        }
        addGlobalEventListener(Z, G, Ae) {
          const ze = (0, o.q)().getGlobalEventTarget(this._doc, Z);
          if (!ze)
            throw new Error(`Unsupported event target ${ze} for event ${G}`);
          return this.addEventListener(ze, G, Ae);
        }
      }
      let fe = (() => {
          class _e {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(G) {
              const Ae = new Set();
              G.forEach((ze) => {
                this._stylesSet.has(ze) ||
                  (this._stylesSet.add(ze), Ae.add(ze));
              }),
                this.onStylesAdded(Ae);
            }
            onStylesAdded(G) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (_e.ɵfac = function (G) {
              return new (G || _e)();
            }),
            (_e.ɵprov = L.Yz7({ token: _e, factory: _e.ɵfac })),
            _e
          );
        })(),
        J = (() => {
          class _e extends fe {
            constructor(G) {
              super(),
                (this._doc = G),
                (this._hostNodes = new Map()),
                this._hostNodes.set(G.head, []);
            }
            _addStylesToHost(G, Ae, ze) {
              G.forEach((ht) => {
                const mt = this._doc.createElement('style');
                (mt.textContent = ht), ze.push(Ae.appendChild(mt));
              });
            }
            addHost(G) {
              const Ae = [];
              this._addStylesToHost(this._stylesSet, G, Ae),
                this._hostNodes.set(G, Ae);
            }
            removeHost(G) {
              const Ae = this._hostNodes.get(G);
              Ae && Ae.forEach(Be), this._hostNodes.delete(G);
            }
            onStylesAdded(G) {
              this._hostNodes.forEach((Ae, ze) => {
                this._addStylesToHost(G, ze, Ae);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((G) => G.forEach(Be));
            }
          }
          return (
            (_e.ɵfac = function (G) {
              return new (G || _e)(L.LFG(o.K0));
            }),
            (_e.ɵprov = L.Yz7({ token: _e, factory: _e.ɵfac })),
            _e
          );
        })();
      function Be(_e) {
        (0, o.q)().remove(_e);
      }
      const de = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/MathML/',
        },
        me = /%COMP%/g;
      function k(_e, Z) {
        return Z.flat(100).map((G) => G.replace(me, _e));
      }
      function V(_e) {
        return (Z) => {
          if ('__ngUnwrap__' === Z) return _e;
          !1 === _e(Z) && (Z.preventDefault(), (Z.returnValue = !1));
        };
      }
      let S = (() => {
        class _e {
          constructor(G, Ae, ze) {
            (this.eventManager = G),
              (this.sharedStylesHost = Ae),
              (this.appId = ze),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new B(G));
          }
          createRenderer(G, Ae) {
            if (!G || !Ae) return this.defaultRenderer;
            switch (Ae.encapsulation) {
              case L.ifc.Emulated: {
                let ze = this.rendererByCompId.get(Ae.id);
                return (
                  ze ||
                    ((ze = new ve(
                      this.eventManager,
                      this.sharedStylesHost,
                      Ae,
                      this.appId
                    )),
                    this.rendererByCompId.set(Ae.id, ze)),
                  ze.applyToHost(G),
                  ze
                );
              }
              case 1:
              case L.ifc.ShadowDom:
                return new re(this.eventManager, this.sharedStylesHost, G, Ae);
              default:
                if (!this.rendererByCompId.has(Ae.id)) {
                  const ze = k(Ae.id, Ae.styles);
                  this.sharedStylesHost.addStyles(ze),
                    this.rendererByCompId.set(Ae.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (_e.ɵfac = function (G) {
            return new (G || _e)(L.LFG(ge), L.LFG(J), L.LFG(L.AFp));
          }),
          (_e.ɵprov = L.Yz7({ token: _e, factory: _e.ɵfac })),
          _e
        );
      })();
      class B {
        constructor(Z) {
          (this.eventManager = Z),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(Z, G) {
          return G
            ? document.createElementNS(de[G] || G, Z)
            : document.createElement(Z);
        }
        createComment(Z) {
          return document.createComment(Z);
        }
        createText(Z) {
          return document.createTextNode(Z);
        }
        appendChild(Z, G) {
          (he(Z) ? Z.content : Z).appendChild(G);
        }
        insertBefore(Z, G, Ae) {
          Z && (he(Z) ? Z.content : Z).insertBefore(G, Ae);
        }
        removeChild(Z, G) {
          Z && Z.removeChild(G);
        }
        selectRootElement(Z, G) {
          let Ae = 'string' == typeof Z ? document.querySelector(Z) : Z;
          if (!Ae)
            throw new Error(`The selector "${Z}" did not match any elements`);
          return G || (Ae.textContent = ''), Ae;
        }
        parentNode(Z) {
          return Z.parentNode;
        }
        nextSibling(Z) {
          return Z.nextSibling;
        }
        setAttribute(Z, G, Ae, ze) {
          if (ze) {
            G = ze + ':' + G;
            const ht = de[ze];
            ht ? Z.setAttributeNS(ht, G, Ae) : Z.setAttribute(G, Ae);
          } else Z.setAttribute(G, Ae);
        }
        removeAttribute(Z, G, Ae) {
          if (Ae) {
            const ze = de[Ae];
            ze ? Z.removeAttributeNS(ze, G) : Z.removeAttribute(`${Ae}:${G}`);
          } else Z.removeAttribute(G);
        }
        addClass(Z, G) {
          Z.classList.add(G);
        }
        removeClass(Z, G) {
          Z.classList.remove(G);
        }
        setStyle(Z, G, Ae, ze) {
          ze & (L.JOm.DashCase | L.JOm.Important)
            ? Z.style.setProperty(
                G,
                Ae,
                ze & L.JOm.Important ? 'important' : ''
              )
            : (Z.style[G] = Ae);
        }
        removeStyle(Z, G, Ae) {
          Ae & L.JOm.DashCase ? Z.style.removeProperty(G) : (Z.style[G] = '');
        }
        setProperty(Z, G, Ae) {
          Z[G] = Ae;
        }
        setValue(Z, G) {
          Z.nodeValue = G;
        }
        listen(Z, G, Ae) {
          return 'string' == typeof Z
            ? this.eventManager.addGlobalEventListener(Z, G, V(Ae))
            : this.eventManager.addEventListener(Z, G, V(Ae));
        }
      }
      function he(_e) {
        return 'TEMPLATE' === _e.tagName && void 0 !== _e.content;
      }
      class ve extends B {
        constructor(Z, G, Ae, ze) {
          super(Z), (this.component = Ae);
          const ht = k(ze + '-' + Ae.id, Ae.styles);
          G.addStyles(ht),
            (this.contentAttr = (function oe(_e) {
              return '_ngcontent-%COMP%'.replace(me, _e);
            })(ze + '-' + Ae.id)),
            (this.hostAttr = (function ce(_e) {
              return '_nghost-%COMP%'.replace(me, _e);
            })(ze + '-' + Ae.id));
        }
        applyToHost(Z) {
          super.setAttribute(Z, this.hostAttr, '');
        }
        createElement(Z, G) {
          const Ae = super.createElement(Z, G);
          return super.setAttribute(Ae, this.contentAttr, ''), Ae;
        }
      }
      class re extends B {
        constructor(Z, G, Ae, ze) {
          super(Z),
            (this.sharedStylesHost = G),
            (this.hostEl = Ae),
            (this.shadowRoot = Ae.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const ht = k(ze.id, ze.styles);
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
        appendChild(Z, G) {
          return super.appendChild(this.nodeOrShadowRoot(Z), G);
        }
        insertBefore(Z, G, Ae) {
          return super.insertBefore(this.nodeOrShadowRoot(Z), G, Ae);
        }
        removeChild(Z, G) {
          return super.removeChild(this.nodeOrShadowRoot(Z), G);
        }
        parentNode(Z) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(Z))
          );
        }
      }
      let Ve = (() => {
        class _e extends Le {
          constructor(G) {
            super(G);
          }
          supports(G) {
            return !0;
          }
          addEventListener(G, Ae, ze) {
            return (
              G.addEventListener(Ae, ze, !1),
              () => this.removeEventListener(G, Ae, ze)
            );
          }
          removeEventListener(G, Ae, ze) {
            return G.removeEventListener(Ae, ze);
          }
        }
        return (
          (_e.ɵfac = function (G) {
            return new (G || _e)(L.LFG(o.K0));
          }),
          (_e.ɵprov = L.Yz7({ token: _e, factory: _e.ɵfac })),
          _e
        );
      })();
      const He = ['alt', 'control', 'meta', 'shift'],
        Ee = {
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
        Me = {
          alt: (_e) => _e.altKey,
          control: (_e) => _e.ctrlKey,
          meta: (_e) => _e.metaKey,
          shift: (_e) => _e.shiftKey,
        };
      let We = (() => {
        class _e extends Le {
          constructor(G) {
            super(G);
          }
          supports(G) {
            return null != _e.parseEventName(G);
          }
          addEventListener(G, Ae, ze) {
            const ht = _e.parseEventName(Ae),
              mt = _e.eventCallback(ht.fullKey, ze, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, o.q)().onAndCancel(G, ht.domEventName, mt)
              );
          }
          static parseEventName(G) {
            const Ae = G.toLowerCase().split('.'),
              ze = Ae.shift();
            if (0 === Ae.length || ('keydown' !== ze && 'keyup' !== ze))
              return null;
            const ht = _e._normalizeKey(Ae.pop());
            let mt = '',
              vt = Ae.indexOf('code');
            if (
              (vt > -1 && (Ae.splice(vt, 1), (mt = 'code.')),
              He.forEach((an) => {
                const ln = Ae.indexOf(an);
                ln > -1 && (Ae.splice(ln, 1), (mt += an + '.'));
              }),
              (mt += ht),
              0 != Ae.length || 0 === ht.length)
            )
              return null;
            const Zt = {};
            return (Zt.domEventName = ze), (Zt.fullKey = mt), Zt;
          }
          static matchEventFullKeyCode(G, Ae) {
            let ze = Ee[G.key] || G.key,
              ht = '';
            return (
              Ae.indexOf('code.') > -1 && ((ze = G.code), (ht = 'code.')),
              !(null == ze || !ze) &&
                ((ze = ze.toLowerCase()),
                ' ' === ze ? (ze = 'space') : '.' === ze && (ze = 'dot'),
                He.forEach((mt) => {
                  mt !== ze && (0, Me[mt])(G) && (ht += mt + '.');
                }),
                (ht += ze),
                ht === Ae)
            );
          }
          static eventCallback(G, Ae, ze) {
            return (ht) => {
              _e.matchEventFullKeyCode(ht, G) && ze.runGuarded(() => Ae(ht));
            };
          }
          static _normalizeKey(G) {
            return 'esc' === G ? 'escape' : G;
          }
        }
        return (
          (_e.ɵfac = function (G) {
            return new (G || _e)(L.LFG(o.K0));
          }),
          (_e.ɵprov = L.Yz7({ token: _e, factory: _e.ɵfac })),
          _e
        );
      })();
      function Ke(_e, Z) {
        return (0, L.iPO)({ rootComponent: _e, ...bt(Z) });
      }
      function bt(_e) {
        return {
          appProviders: [...Ln, ...(_e?.providers ?? [])],
          platformProviders: Lt,
        };
      }
      const Lt = [
          { provide: L.Lbi, useValue: o.bD },
          {
            provide: L.g9A,
            useValue: function Ft() {
              W.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: o.K0,
            useFactory: function Ye() {
              return (0, L.RDi)(document), document;
            },
            deps: [],
          },
        ],
        Ln = [
          { provide: L.zSh, useValue: 'root' },
          {
            provide: L.qLn,
            useFactory: function Mt() {
              return new L.qLn();
            },
            deps: [],
          },
          { provide: ee, useClass: Ve, multi: !0, deps: [o.K0, L.R0b, L.Lbi] },
          { provide: ee, useClass: We, multi: !0, deps: [o.K0] },
          { provide: S, useClass: S, deps: [ge, J, L.AFp] },
          { provide: L.FYo, useExisting: S },
          { provide: fe, useExisting: J },
          { provide: J, useClass: J, deps: [o.K0] },
          { provide: ge, useClass: ge, deps: [ee, L.R0b] },
          { provide: o.JF, useClass: se, deps: [] },
          [],
        ];
      let $n = (() => {
        class _e {
          constructor(G) {
            this._doc = G;
          }
          getTitle() {
            return this._doc.title;
          }
          setTitle(G) {
            this._doc.title = G || '';
          }
        }
        return (
          (_e.ɵfac = function (G) {
            return new (G || _e)(L.LFG(o.K0));
          }),
          (_e.ɵprov = L.Yz7({
            token: _e,
            factory: function (G) {
              let Ae = null;
              return (
                (Ae = G
                  ? new G()
                  : (function Jt() {
                      return new $n((0, L.LFG)(o.K0));
                    })()),
                Ae
              );
            },
            providedIn: 'root',
          })),
          _e
        );
      })();
      typeof window < 'u' && window;
    },
    3165: (at, $e, T) => {
      'use strict';
      T.d($e, {
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
      var o = T(8256),
        L = T(2076),
        z = T(7669);
      function W(...d) {
        const f = (0, z.yG)(d);
        return (0, L.D)(d, f);
      }
      var pe = T(1135);
      const ne = (0, T(3888).d)(
        (d) =>
          function () {
            d(this),
              (this.name = 'EmptyError'),
              (this.message = 'no elements in sequence');
          }
      );
      var xe = T(9751),
        we = T(4742),
        Oe = T(4671),
        ye = T(3268),
        be = T(1810),
        se = T(5403),
        ee = T(9672);
      function ge(...d) {
        const f = (0, z.yG)(d),
          l = (0, z.jO)(d),
          { args: p, keys: E } = (0, we.D)(d);
        if (0 === p.length) return (0, L.D)([], f);
        const A = new xe.y(
          (function Le(d, f, l = Oe.y) {
            return (p) => {
              fe(
                f,
                () => {
                  const { length: E } = d,
                    A = new Array(E);
                  let P = E,
                    ae = E;
                  for (let Ge = 0; Ge < E; Ge++)
                    fe(
                      f,
                      () => {
                        const ut = (0, L.D)(d[Ge], f);
                        let yt = !1;
                        ut.subscribe(
                          (0, se.x)(
                            p,
                            (Et) => {
                              (A[Ge] = Et),
                                yt || ((yt = !0), ae--),
                                ae || p.next(l(A.slice()));
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
          })(p, f, E ? (P) => (0, be.n)(E, P) : Oe.y)
        );
        return l ? A.pipe((0, ye.Z)(l)) : A;
      }
      function fe(d, f, l) {
        d ? (0, ee.f)(l, d, f) : f();
      }
      var J = T(8189);
      function de(...d) {
        return (function Be() {
          return (0, J.J)(1);
        })()((0, L.D)(d, (0, z.yG)(d)));
      }
      var me = T(8421);
      function ue(d) {
        return new xe.y((f) => {
          (0, me.Xf)(d()).subscribe(f);
        });
      }
      var Ne = T(9635),
        le = T(576);
      function Y(d, f) {
        const l = (0, le.m)(d) ? d : () => d,
          p = (E) => E.error(l());
        return new xe.y(f ? (E) => f.schedule(p, 0, E) : p);
      }
      var oe = T(515),
        ce = T(727),
        k = T(4482);
      function V() {
        return (0, k.e)((d, f) => {
          let l = null;
          d._refCount++;
          const p = (0, se.x)(f, void 0, void 0, void 0, () => {
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
      class j extends xe.y {
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
            f = this._connection = new ce.w0();
            const l = this.getSubject();
            f.add(
              this.source.subscribe(
                (0, se.x)(
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
              f.closed && ((this._connection = null), (f = ce.w0.EMPTY));
          }
          return f;
        }
        refCount() {
          return V()(this);
        }
      }
      var S = T(7579),
        B = T(6895),
        q = T(4004),
        Pe = T(3900);
      function he(d) {
        return d <= 0
          ? () => oe.E
          : (0, k.e)((f, l) => {
              let p = 0;
              f.subscribe(
                (0, se.x)(l, (E) => {
                  ++p <= d && (l.next(E), d <= p && l.complete());
                })
              );
            });
      }
      var re = T(9300),
        Ve = T(5577);
      function He(d) {
        return (0, k.e)((f, l) => {
          let p = !1;
          f.subscribe(
            (0, se.x)(
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
      function Ee(d = Me) {
        return (0, k.e)((f, l) => {
          let p = !1;
          f.subscribe(
            (0, se.x)(
              l,
              (E) => {
                (p = !0), l.next(E);
              },
              () => (p ? l.complete() : l.error(d()))
            )
          );
        });
      }
      function Me() {
        return new ne();
      }
      function We(d, f) {
        const l = arguments.length >= 2;
        return (p) =>
          p.pipe(
            d ? (0, re.h)((E, A) => d(E, A, p)) : Oe.y,
            he(1),
            l ? He(f) : Ee(() => new ne())
          );
      }
      function nt(d, f) {
        return (0, le.m)(f) ? (0, Ve.z)(d, f, 1) : (0, Ve.z)(d, 1);
      }
      var Ke = T(8505);
      function ft(d) {
        return (0, k.e)((f, l) => {
          let A,
            p = null,
            E = !1;
          (p = f.subscribe(
            (0, se.x)(l, void 0, void 0, (P) => {
              (A = (0, me.Xf)(d(P, ft(d)(f)))),
                p ? (p.unsubscribe(), (p = null), A.subscribe(l)) : (E = !0);
            })
          )),
            E && (p.unsubscribe(), (p = null), A.subscribe(l));
        });
      }
      function bt(d, f, l, p, E) {
        return (A, P) => {
          let ae = l,
            Ge = f,
            ut = 0;
          A.subscribe(
            (0, se.x)(
              P,
              (yt) => {
                const Et = ut++;
                (Ge = ae ? d(Ge, yt, Et) : ((ae = !0), yt)), p && P.next(Ge);
              },
              E &&
                (() => {
                  ae && P.next(Ge), P.complete();
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
          ? () => oe.E
          : (0, k.e)((f, l) => {
              let p = [];
              f.subscribe(
                (0, se.x)(
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
            d ? (0, re.h)((E, A) => d(E, A, p)) : Oe.y,
            Ft(1),
            l ? He(f) : Ee(() => new ne())
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
      var Un = T(1481);
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
            ae = d[A];
          if (P.startsWith(':')) E[P.substring(1)] = ae;
          else if (P !== ae.path) return null;
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
      function jt(d) {
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
          ? (0, L.D)(Promise.resolve(d))
          : W(d);
      }
      const At = !1,
        un = {
          exact: function tt(d, f, l) {
            if (
              !Ut(d.segments, f.segments) ||
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
          return !(!Ut(E, l) || f.hasChildren() || !Gn(E, l, p));
        }
        if (d.segments.length === l.length) {
          if (!Ut(d.segments, l) || !Gn(d.segments, l, p)) return !1;
          for (const E in f.children)
            if (!d.children[E] || !tr(d.children[E], f.children[E], p))
              return !1;
          return !0;
        }
        {
          const E = l.slice(0, d.segments.length),
            A = l.slice(d.segments.length);
          return (
            !!(Ut(d.segments, E) && Gn(d.segments, E, p) && d.children[st]) &&
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
          return G(this);
        }
      }
      function Ut(d, f) {
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
        return d.segments.map((f) => G(f)).join('/');
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
      function _e(d) {
        return decodeURIComponent(d);
      }
      function Z(d) {
        return _e(d.replace(/\+/g, '%20'));
      }
      function G(d) {
        return `${dr(d.path)}${(function Ae(d) {
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
          return this.capture(f), new nr(_e(f), this.parseMatrixParams());
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
          f[_e(l)] = _e(p);
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
                const ae = {};
                return (
                  Vt(A.outlets, (Ge, ut) => {
                    ae[ut] = 'string' == typeof Ge ? Ge.split('/') : Ge;
                  }),
                  [...E, { outlets: ae }]
                );
              }
              if (A.segmentPath) return [...E, A.segmentPath];
            }
            return 'string' != typeof A
              ? [...E, A]
              : 0 === P
              ? (A.split('/').forEach((ae, Ge) => {
                  (0 == Ge && '.' === ae) ||
                    (0 == Ge && '' === ae
                      ? (l = !0)
                      : '..' === ae
                      ? f++
                      : '' != ae && E.push(ae));
                }),
                E)
              : [...E, A];
          }, []);
          return new mn(l, f, p);
        })(l);
        return A.toRoot()
          ? yn(f.root, f.root, new wt([], {}), p, E)
          : (function P(Ge) {
              const ut = (function $(d, f, l, p) {
                  if (d.isAbsolute) return new xn(f.root, !0, 0);
                  if (-1 === p) return new xn(l, l === f.root, 0);
                  return (function U(d, f, l) {
                    let p = d,
                      E = f,
                      A = l;
                    for (; A > E; ) {
                      if (((A -= E), (p = p.parent), !p))
                        throw new o.vHH(4005, !1);
                      E = p.segments.length;
                    }
                    return new xn(p, !1, E - A);
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
        let P,
          A = {};
        p &&
          Vt(p, (Ge, ut) => {
            A[ut] = Array.isArray(Ge) ? Ge.map((yt) => `${yt}`) : `${Ge}`;
          }),
          (P = d === f ? l : Tt(d, f, l));
        const ae = Tn(pn(P));
        return new _n(ae, A, E);
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
      class xn {
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
        const p = (function Q(d, f, l) {
            let p = 0,
              E = f;
            const A = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; E < d.segments.length; ) {
              if (p >= l.length) return A;
              const P = d.segments[E],
                ae = l[p];
              if (ar(ae)) break;
              const Ge = `${ae}`,
                ut = p < l.length - 1 ? l[p + 1] : null;
              if (E > 0 && void 0 === Ge) break;
              if (Ge && ut && 'object' == typeof ut && void 0 === ut.outlets) {
                if (!rt(Ge, ut, P)) return A;
                p += 2;
              } else {
                if (!rt(Ge, {}, P)) return A;
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
          ? ie(d, f, l)
          : p.match
          ? N(d, 0, E)
          : ie(d, f, l);
      }
      function N(d, f, l) {
        if (0 === l.length) return new wt(d.segments, {});
        {
          const p = (function K(d) {
              return ar(d[0]) ? d[0].outlets : { [st]: d };
            })(l),
            E = {};
          return (
            Vt(p, (A, P) => {
              'string' == typeof A && (A = [A]),
                null !== A && (E[P] = De(d.children[P], f, A));
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
            const Ge = ke(A.outlets);
            return new wt(p, Ge);
          }
          if (0 === E && sr(l[0])) {
            p.push(new nr(d.segments[f].path, Te(l[0]))), E++;
            continue;
          }
          const P = ar(A) ? A.outlets[st] : `${A}`,
            ae = E < l.length - 1 ? l[E + 1] : null;
          P && ae && sr(ae)
            ? (p.push(new nr(P, Te(ae))), (E += 2))
            : (p.push(new nr(P, {})), E++);
        }
        return new wt(p, {});
      }
      function ke(d) {
        const f = {};
        return (
          Vt(d, (l, p) => {
            'string' == typeof l && (l = [l]),
              null !== l && (f[p] = ie(new wt([], {}), 0, l));
          }),
          f
        );
      }
      function Te(d) {
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
      class Rn extends ot {
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
      class xo {
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
            return new Ro('', new tn(P, []));
          })(d, f),
          p = new pe.X([new nr('', {})]),
          E = new pe.X({}),
          A = new pe.X({}),
          P = new pe.X({}),
          ae = new pe.X(''),
          Ge = new Mn(p, E, P, ae, A, st, f, l.root);
        return (Ge.snapshot = l.root), new Ar(new tn(Ge, []), l);
      }
      class Mn {
        constructor(f, l, p, E, A, P, ae, Ge) {
          (this.url = f),
            (this.params = l),
            (this.queryParams = p),
            (this.fragment = E),
            (this.data = A),
            (this.outlet = P),
            (this.component = ae),
            (this.title =
              this.data?.pipe((0, q.U)((ut) => ut[Ln])) ?? W(void 0)),
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
              (this._paramMap = this.params.pipe((0, q.U)((f) => cn(f)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, q.U)((f) => cn(f))
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
        constructor(f, l, p, E, A, P, ae, Ge, ut, yt, Et) {
          (this.url = f),
            (this.params = l),
            (this.queryParams = p),
            (this.fragment = E),
            (this.data = A),
            (this.outlet = P),
            (this.component = ae),
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
      class Ro extends gr {
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
              Ut(d, f) && d.every((l, p) => Jt(l.parameters, f[p].parameters))
            );
          })(d.url, f.url);
        return (
          l &&
          !(!d.parent != !f.parent) &&
          (!d.parent || no(d.parent, f.parent))
        );
      }
      function Ur(d, f, l) {
        if (l && d.shouldReuseRoute(f.value, l.value.snapshot)) {
          const p = l.value;
          p._futureSnapshot = f.value;
          const E = (function Di(d, f, l) {
            return f.children.map((p) => {
              for (const E of l.children)
                if (d.shouldReuseRoute(p.value, E.value.snapshot))
                  return Ur(d, p, E);
              return Ur(d, p);
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
                (P.children = f.children.map((ae) => Ur(d, ae))),
                P
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
            E = f.children.map((A) => Ur(d, A));
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
              ae = this.parentContexts.getOrCreateContext(this.name).children,
              Ge = new cr(l, ae, E.injector);
            if (
              p &&
              (function oo(d) {
                return !!d.resolveComponentFactory;
              })(p)
            ) {
              const ut = p.resolveComponentFactory(P);
              this.activated = E.createComponent(ut, E.length, Ge);
            } else
              this.activated = E.createComponent(P, {
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
              ae = p.children.onOutletDeactivated();
            this.routeReuseStrategy.store(f.value.snapshot, {
              componentRef: P,
              route: f,
              contexts: ae,
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
              this.forwardEvent(new xo(A.value.snapshot));
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
              const ae = this.routeReuseStrategy.retrieve(E.snapshot);
              this.routeReuseStrategy.store(E.snapshot, null),
                P.children.onOutletReAttached(ae.contexts),
                (P.attachRef = ae.componentRef),
                (P.route = ae.route.value),
                P.outlet && P.outlet.attach(ae.componentRef, ae.route.value),
                Fo(ae.route.value),
                this.activateChildRoutes(f, null, P.children);
            } else {
              const ae = Yr(E.snapshot),
                Ge = ae?.get(o._Vd) ?? null;
              (P.attachRef = null),
                (P.route = E),
                (P.resolver = Ge),
                (P.injector = ae),
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
        return xr(p, f ? f._root : null, l, [p.value]);
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
      function xr(
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
                ae = l ? l.getContext(d.value.outlet) : null;
              if (P && A.routeConfig === P.routeConfig) {
                const Ge = (function Vr(d, f, l) {
                  if ('function' == typeof l) return l(d, f);
                  switch (l) {
                    case 'pathParamsChange':
                      return !Ut(d.url, f.url);
                    case 'pathParamsOrQueryParamsChange':
                      return (
                        !Ut(d.url, f.url) || !Jt(d.queryParams, f.queryParams)
                      );
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !no(d, f) || !Jt(d.queryParams, f.queryParams);
                    default:
                      return !no(d, f);
                  }
                })(P, A, A.routeConfig.runGuardsAndResolvers);
                Ge
                  ? E.canActivateChecks.push(new ko(p))
                  : ((A.data = P.data), (A._resolvedData = P._resolvedData)),
                  xr(d, f, A.component ? (ae ? ae.children : null) : l, p, E),
                  Ge &&
                    ae &&
                    ae.outlet &&
                    ae.outlet.isActivated &&
                    E.canDeactivateChecks.push(new ao(ae.outlet.component, P));
              } else
                P && lo(f, ae, E),
                  E.canActivateChecks.push(new ko(p)),
                  xr(
                    d,
                    null,
                    A.component ? (ae ? ae.children : null) : l,
                    p,
                    E
                  );
            })(P, A[P.value.outlet], l, p.concat([P.value]), E),
              delete A[P.value.outlet];
          }),
          Vt(A, (P, ae) => lo(P, l.getContext(ae), E)),
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
        return d instanceof ne || 'EmptyError' === d?.name;
      }
      const g = Symbol('INITIAL_VALUE');
      function M() {
        return (0, Pe.w)((d) =>
          ge(
            d.map((f) =>
              f.pipe(
                he(1),
                (function ve(...d) {
                  const f = (0, z.yG)(d);
                  return (0, k.e)((l, p) => {
                    (f ? de(d, l, f) : de(d, l)).subscribe(p);
                  });
                })(g)
              )
            )
          ).pipe(
            (0, q.U)((f) => {
              for (const l of f)
                if (!0 !== l) {
                  if (l === g) return g;
                  if (!1 === l || l instanceof _n) return l;
                }
              return !0;
            }),
            (0, re.h)((f) => f !== g),
            he(1)
          )
        );
      }
      function Fr(d) {
        return (0, Ne.z)(
          (0, Ke.b)((f) => {
            if (Sn(f)) throw Zo(0, f);
          }),
          (0, q.U)((f) => !0 === f)
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
                ? W(
                    E.map((P) => {
                      const ae = qr(P, d);
                      return Yt(
                        (function Se(d) {
                          return d && nn(d.canMatch);
                        })(ae)
                          ? ae.canMatch(f, l)
                          : d.runInContext(() => ae(f, l))
                      );
                    })
                  ).pipe(M(), Fr())
                : W(!0);
            })((p = Co(f, p)), f, l).pipe(
              (0, q.U)((P) => (!0 === P ? A : { ...fn }))
            )
          : W(A);
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
        Vt(E.posParams, (ae, Ge) => {
          A[Ge] = ae.path;
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
                  const ae = new wt([], {});
                  (ae._sourceSegment = d),
                    (ae._segmentIndexShift = f.length),
                    (A[Wn(P)] = ae);
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
        return Y(new ti(d));
      }
      function Ii(d) {
        return Y(new $i(d));
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
              (0, q.U)((A) =>
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
              (0, q.U)((E) =>
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
            ? this.expandChildren(f, l, p).pipe((0, q.U)((A) => new wt([], A)))
            : this.expandSegment(f, p, l, p.segments, E, !0);
        }
        expandChildren(f, l, p) {
          const E = [];
          for (const A of Object.keys(p.children))
            'primary' === A ? E.unshift(A) : E.push(A);
          return (0, L.D)(E).pipe(
            nt((A) => {
              const P = p.children[A],
                ae = Dn(l, A);
              return this.expandSegmentGroup(f, ae, P, A).pipe(
                (0, q.U)((Ge) => ({ segment: Ge, outlet: A }))
              );
            }),
            lt((A, P) => ((A[P.outlet] = P.segment), A), {}),
            Mt()
          );
        }
        expandSegment(f, l, p, E, A, P) {
          return (0, L.D)(p).pipe(
            nt((ae) =>
              this.expandSegmentAgainstRoute(f, l, p, ae, E, A, P).pipe(
                ft((ut) => {
                  if (ut instanceof ti) return W(null);
                  throw ut;
                })
              )
            ),
            We((ae) => !!ae),
            ft((ae, Ge) => {
              if (c(ae)) return bi(l, E, A) ? W(new wt([], {})) : $o(l);
              throw ae;
            })
          );
        }
        expandSegmentAgainstRoute(f, l, p, E, A, P, ae) {
          return Ei(E, l, A, P)
            ? void 0 === E.redirectTo
              ? this.matchSegmentAgainstRoute(f, l, E, A, P)
              : ae && this.allowRedirects
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
                (0, Ve.z)((P) => {
                  const ae = new wt(P, {});
                  return this.expandSegment(f, ae, l, P, E, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(f, l, p, E, A, P) {
          const {
            matched: ae,
            consumedSegments: Ge,
            remainingSegments: ut,
            positionalParamSegments: yt,
          } = Ci(l, E, A);
          if (!ae) return $o(l);
          const Et = this.applyRedirectCommands(Ge, E.redirectTo, yt);
          return E.redirectTo.startsWith('/')
            ? Ii(Et)
            : this.lineralizeSegments(E, Et).pipe(
                (0, Ve.z)((Pn) =>
                  this.expandSegment(f, l, p, Pn.concat(ut), P, !1)
                )
              );
        }
        matchSegmentAgainstRoute(f, l, p, E, A) {
          return '**' === p.path
            ? ((f = Co(p, f)),
              p.loadChildren
                ? (p._loadedRoutes
                    ? W({
                        routes: p._loadedRoutes,
                        injector: p._loadedInjector,
                      })
                    : this.configLoader.loadChildren(f, p)
                  ).pipe(
                    (0, q.U)(
                      (ae) => (
                        (p._loadedRoutes = ae.routes),
                        (p._loadedInjector = ae.injector),
                        new wt(E, {})
                      )
                    )
                  )
                : W(new wt(E, {})))
            : Xr(l, p, E, f).pipe(
                (0, Pe.w)(
                  ({
                    matched: P,
                    consumedSegments: ae,
                    remainingSegments: Ge,
                  }) =>
                    P
                      ? this.getChildConfig((f = p._injector ?? f), p, E).pipe(
                          (0, Ve.z)((yt) => {
                            const Et = yt.injector ?? f,
                              Pn = yt.routes,
                              { segmentGroup: Pr, slicedSegments: Ho } = co(
                                l,
                                ae,
                                Ge,
                                Pn
                              ),
                              jo = new wt(Pr.segments, Pr.children);
                            if (0 === Ho.length && jo.hasChildren())
                              return this.expandChildren(Et, Pn, jo).pipe(
                                (0, q.U)((Dl) => new wt(ae, Dl))
                              );
                            if (0 === Pn.length && 0 === Ho.length)
                              return W(new wt(ae, {}));
                            const Zr = Wn(p) === A;
                            return this.expandSegment(
                              Et,
                              jo,
                              Pn,
                              Ho,
                              Zr ? st : A,
                              !0
                            ).pipe(
                              (0, q.U)(
                                (Ns) =>
                                  new wt(ae.concat(Ns.segments), Ns.children)
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
            ? W({ routes: l.children, injector: f })
            : l.loadChildren
            ? void 0 !== l._loadedRoutes
              ? W({ routes: l._loadedRoutes, injector: l._loadedInjector })
              : (function Rr(d, f, l, p) {
                  const E = f.canLoad;
                  return void 0 === E || 0 === E.length
                    ? W(!0)
                    : W(
                        E.map((P) => {
                          const ae = qr(P, d);
                          return Yt(
                            (function b(d) {
                              return d && nn(d.canLoad);
                            })(ae)
                              ? ae.canLoad(f, l)
                              : d.runInContext(() => ae(f, l))
                          );
                        })
                      ).pipe(M(), Fr());
                })(f, l, p).pipe(
                  (0, Ve.z)((E) =>
                    E
                      ? this.configLoader.loadChildren(f, l).pipe(
                          (0, Ke.b)((A) => {
                            (l._loadedRoutes = A.routes),
                              (l._loadedInjector = A.injector);
                          })
                        )
                      : (function ys(d) {
                          return Y(Po(ei, 3));
                        })()
                  )
                )
            : W({ routes: [], injector: f });
        }
        lineralizeSegments(f, l) {
          let p = [],
            E = l.root;
          for (;;) {
            if (((p = p.concat(E.segments)), 0 === E.numberOfChildren))
              return W(p);
            if (E.numberOfChildren > 1 || !E.children[st])
              return Y(new o.vHH(4e3, ei));
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
                const ae = E.substring(1);
                p[A] = l[ae];
              } else p[A] = E;
            }),
            p
          );
        }
        createSegmentGroup(f, l, p, E) {
          const A = this.createSegments(f, l.segments, p, E);
          let P = {};
          return (
            Vt(l.children, (ae, Ge) => {
              P[Ge] = this.createSegmentGroup(f, ae, p, E);
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
        constructor(f, l, p, E, A, P, ae) {
          (this.injector = f),
            (this.rootComponentType = l),
            (this.config = p),
            (this.urlTree = E),
            (this.url = A),
            (this.paramsInheritanceStrategy = P),
            (this.urlSerializer = ae);
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
            (0, q.U)((l) => {
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
                A = new Ro(this.url, E);
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
          return (0, L.D)(Object.keys(p.children)).pipe(
            nt((E) => {
              const A = p.children[E],
                P = Dn(l, E);
              return this.processSegmentGroup(f, P, A, E);
            }),
            lt((E, A) => (E && A ? (E.push(...A), E) : null)),
            (function Ye(d, f = !1) {
              return (0, k.e)((l, p) => {
                let E = 0;
                l.subscribe(
                  (0, se.x)(p, (A) => {
                    const P = d(A, E++);
                    (P || f) && p.next(A), !P && p.complete();
                  })
                );
              });
            })((E) => null !== E),
            He(null),
            Mt(),
            (0, q.U)((E) => {
              if (null === E) return null;
              const A = Ue(E);
              return (
                (function x(d) {
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
          return (0, L.D)(l).pipe(
            nt((P) =>
              this.processSegmentAgainstRoute(P._injector ?? f, P, p, E, A)
            ),
            We((P) => !!P),
            ft((P) => {
              if (c(P)) return bi(p, E, A) ? W([]) : W(null);
              throw P;
            })
          );
        }
        processSegmentAgainstRoute(f, l, p, E, A) {
          if (l.redirectTo || !Ei(l, p, E, A)) return W(null);
          let P;
          if ('**' === l.path) {
            const ae = E.length > 0 ? ct(E).parameters : {},
              Ge = Bt(p) + E.length;
            P = W({
              snapshot: new $r(
                E,
                ae,
                Object.freeze({ ...this.urlTree.queryParams }),
                this.urlTree.fragment,
                Rt(l),
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
            P = Xr(p, l, E, f).pipe(
              (0, q.U)(
                ({
                  matched: ae,
                  consumedSegments: Ge,
                  remainingSegments: ut,
                  parameters: yt,
                }) => {
                  if (!ae) return null;
                  const Et = Bt(p) + Ge.length;
                  return {
                    snapshot: new $r(
                      Ge,
                      yt,
                      Object.freeze({ ...this.urlTree.queryParams }),
                      this.urlTree.fragment,
                      Rt(l),
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
          return P.pipe(
            (0, Pe.w)((ae) => {
              if (null === ae) return W(null);
              const {
                snapshot: Ge,
                consumedSegments: ut,
                remainingSegments: yt,
              } = ae;
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
                  (0, q.U)((Zr) => (null === Zr ? null : [new tn(Ge, Zr)]))
                );
              if (0 === Pn.length && 0 === Ho.length)
                return W([new tn(Ge, [])]);
              const jo = Wn(l) === A;
              return this.processSegment(Et, Pn, Pr, Ho, jo ? st : A).pipe(
                (0, q.U)((Zr) => (null === Zr ? null : [new tn(Ge, Zr)]))
              );
            })
          );
        }
      }
      function Re(d) {
        const f = d.value.routeConfig;
        return f && '' === f.path && void 0 === f.redirectTo;
      }
      function Ue(d) {
        const f = [],
          l = new Set();
        for (const p of d) {
          if (!Re(p)) {
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
      function Rt(d) {
        return d.data || {};
      }
      function En(d) {
        return d.resolve || {};
      }
      function So(d) {
        return 'string' == typeof d.title || null === d.title;
      }
      function ui(d) {
        return (0, Pe.w)((f) => {
          const l = d(f);
          return l ? (0, L.D)(l).pipe((0, q.U)(() => f)) : W(f);
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
            if (l._loadedComponent) return W(l._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(l);
            const p = Yt(l.loadComponent()).pipe(
                (0, q.U)(bs),
                (0, Ke.b)((A) => {
                  this.onLoadEndListener && this.onLoadEndListener(l),
                    (l._loadedComponent = A);
                }),
                bn(() => {
                  this.componentLoaders.delete(l);
                })
              ),
              E = new j(p, () => new S.x()).pipe(V());
            return this.componentLoaders.set(l, E), E;
          }
          loadChildren(l, p) {
            if (this.childrenLoaders.get(p)) return this.childrenLoaders.get(p);
            if (p._loadedRoutes)
              return W({
                routes: p._loadedRoutes,
                injector: p._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(p);
            const A = this.loadModuleFactoryOrRoutes(p.loadChildren).pipe(
                (0, q.U)((ae) => {
                  this.onLoadEndListener && this.onLoadEndListener(p);
                  let Ge,
                    ut,
                    yt = !1;
                  Array.isArray(ae)
                    ? (ut = ae)
                    : ((Ge = ae.create(l).injector),
                      (ut = jt(Ge.get(wi, [], o.XFs.Self | o.XFs.Optional))));
                  return { routes: ut.map(zr), injector: Ge };
                }),
                bn(() => {
                  this.childrenLoaders.delete(p);
                })
              ),
              P = new j(A, () => new S.x()).pipe(V());
            return this.childrenLoaders.set(p, P), P;
          }
          loadModuleFactoryOrRoutes(l) {
            return Yt(l()).pipe(
              (0, q.U)(bs),
              (0, Ve.z)((E) =>
                E instanceof o.YKP || Array.isArray(E)
                  ? W(E)
                  : (0, L.D)(this.compiler.compileModuleAsync(E))
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
              (this.events = new S.x()),
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
                (0, re.h)((p) => 0 !== p.id),
                (0, q.U)((p) => ({
                  ...p,
                  extractedUrl: l.urlHandlingStrategy.extract(p.rawUrl),
                })),
                (0, Pe.w)((p) => {
                  let E = !1,
                    A = !1;
                  return W(p).pipe(
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
                    (0, Pe.w)((P) => {
                      const ae = l.browserUrlTree.toString(),
                        Ge =
                          !l.navigated ||
                          P.extractedUrl.toString() !== ae ||
                          ae !== l.currentUrlTree.toString();
                      if (
                        ('reload' === l.onSameUrlNavigation || Ge) &&
                        l.urlHandlingStrategy.shouldProcessUrl(P.rawUrl)
                      )
                        return (
                          ws(P.source) && (l.browserUrlTree = P.extractedUrl),
                          W(P).pipe(
                            (0, Pe.w)((yt) => {
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
                                  ? oe.E
                                  : Promise.resolve(yt)
                              );
                            }),
                            (function Bi(d, f, l, p) {
                              return (0, Pe.w)((E) =>
                                (function Ds(d, f, l, p, E) {
                                  return new Cs(d, f, l, p, E).apply();
                                })(d, f, l, E.extractedUrl, p).pipe(
                                  (0, q.U)((A) => ({
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
                              return (0, Ve.z)((A) =>
                                (function w(d, f, l, p, E, A, P = 'emptyOnly') {
                                  return new v(d, f, l, p, E, P, A)
                                    .recognize()
                                    .pipe(
                                      (0, Pe.w)((ae) =>
                                        null === ae
                                          ? (function m(d) {
                                              return new xe.y((f) =>
                                                f.error(d)
                                              );
                                            })(new fa())
                                          : W(ae)
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
                                  (0, q.U)((P) => ({ ...A, targetSnapshot: P }))
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
                              const Et = new Rn(
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
                            extras: jo,
                          } = P,
                          Zr = new et(
                            Et,
                            this.urlSerializer.serialize(Pn),
                            Pr,
                            Ho
                          );
                        this.events.next(Zr);
                        const Ma = Tr(Pn, l.rootComponentType).snapshot;
                        return W(
                          (p = {
                            ...P,
                            targetSnapshot: Ma,
                            urlAfterRedirects: Pn,
                            extras: {
                              ...jo,
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            },
                          })
                        );
                      }
                      return (l.rawUrlTree = P.rawUrl), P.resolve(null), oe.E;
                    }),
                    (0, Ke.b)((P) => {
                      const ae = new dn(
                        P.id,
                        this.urlSerializer.serialize(P.extractedUrl),
                        this.urlSerializer.serialize(P.urlAfterRedirects),
                        P.targetSnapshot
                      );
                      this.events.next(ae);
                    }),
                    (0, q.U)(
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
                    (function Ie(d, f) {
                      return (0, Ve.z)((l) => {
                        const {
                          targetSnapshot: p,
                          currentSnapshot: E,
                          guards: {
                            canActivateChecks: A,
                            canDeactivateChecks: P,
                          },
                        } = l;
                        return 0 === P.length && 0 === A.length
                          ? W({ ...l, guardsResult: !0 })
                          : (function Je(d, f, l, p) {
                              return (0, L.D)(d).pipe(
                                (0, Ve.z)((E) =>
                                  (function zn(d, f, l, p, E) {
                                    const A =
                                      f && f.routeConfig
                                        ? f.routeConfig.canDeactivate
                                        : null;
                                    return A && 0 !== A.length
                                      ? W(
                                          A.map((ae) => {
                                            const Ge = Yr(f) ?? E,
                                              ut = qr(ae, Ge);
                                            return Yt(
                                              (function F(d) {
                                                return d && nn(d.canDeactivate);
                                              })(ut)
                                                ? ut.canDeactivate(d, f, l, p)
                                                : Ge.runInContext(() =>
                                                    ut(d, f, l, p)
                                                  )
                                            ).pipe(We());
                                          })
                                        ).pipe(M())
                                      : W(!0);
                                  })(E.component, E.route, l, f, p)
                                ),
                                We((E) => !0 !== E, !0)
                              );
                            })(P, p, E, d).pipe(
                              (0, Ve.z)((ae) =>
                                ae &&
                                (function St(d) {
                                  return 'boolean' == typeof d;
                                })(ae)
                                  ? (function Qe(d, f, l, p) {
                                      return (0, L.D)(f).pipe(
                                        nt((E) =>
                                          de(
                                            (function $t(d, f) {
                                              return (
                                                null !== d && f && f(new Wt(d)),
                                                W(!0)
                                              );
                                            })(E.route.parent, p),
                                            (function Ct(d, f) {
                                              return (
                                                null !== d && f && f(new Jr(d)),
                                                W(!0)
                                              );
                                            })(E.route, p),
                                            (function Qt(d, f, l) {
                                              const p = f[f.length - 1],
                                                A = f
                                                  .slice(0, f.length - 1)
                                                  .reverse()
                                                  .map((P) =>
                                                    (function jn(d) {
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
                                                    ue(() =>
                                                      W(
                                                        P.guards.map((Ge) => {
                                                          const ut =
                                                              Yr(P.node) ?? l,
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
                                              return W(A).pipe(M());
                                            })(d, E.path, l),
                                            (function qt(d, f, l) {
                                              const p = f.routeConfig
                                                ? f.routeConfig.canActivate
                                                : null;
                                              if (!p || 0 === p.length)
                                                return W(!0);
                                              const E = p.map((A) =>
                                                ue(() => {
                                                  const P = Yr(f) ?? l,
                                                    ae = qr(A, P);
                                                  return Yt(
                                                    (function C(d) {
                                                      return (
                                                        d && nn(d.canActivate)
                                                      );
                                                    })(ae)
                                                      ? ae.canActivate(f, d)
                                                      : P.runInContext(() =>
                                                          ae(f, d)
                                                        )
                                                  ).pipe(We());
                                                })
                                              );
                                              return W(E).pipe(M());
                                            })(d, E.route, l)
                                          )
                                        ),
                                        We((E) => !0 !== E, !0)
                                      );
                                    })(p, A, d, f)
                                  : W(ae)
                              ),
                              (0, q.U)((ae) => ({ ...l, guardsResult: ae }))
                            );
                      });
                    })(this.environmentInjector, (P) => this.events.next(P)),
                    (0, Ke.b)((P) => {
                      if (
                        ((p.guardsResult = P.guardsResult), Sn(P.guardsResult))
                      )
                        throw Zo(0, P.guardsResult);
                      const ae = new _r(
                        P.id,
                        this.urlSerializer.serialize(P.extractedUrl),
                        this.urlSerializer.serialize(P.urlAfterRedirects),
                        P.targetSnapshot,
                        !!P.guardsResult
                      );
                      this.events.next(ae);
                    }),
                    (0, re.h)(
                      (P) =>
                        !!P.guardsResult ||
                        (l.restoreHistory(P),
                        this.cancelNavigationTransition(P, '', 3, l),
                        !1)
                    ),
                    ui((P) => {
                      if (P.guards.canActivateChecks.length)
                        return W(P).pipe(
                          (0, Ke.b)((ae) => {
                            const Ge = new Zn(
                              ae.id,
                              this.urlSerializer.serialize(ae.extractedUrl),
                              this.urlSerializer.serialize(
                                ae.urlAfterRedirects
                              ),
                              ae.targetSnapshot
                            );
                            this.events.next(Ge);
                          }),
                          (0, Pe.w)((ae) => {
                            let Ge = !1;
                            return W(ae).pipe(
                              (function qn(d, f) {
                                return (0, Ve.z)((l) => {
                                  const {
                                    targetSnapshot: p,
                                    guards: { canActivateChecks: E },
                                  } = l;
                                  if (!E.length) return W(l);
                                  let A = 0;
                                  return (0, L.D)(E).pipe(
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
                                            if (0 === E.length) return W({});
                                            const A = {};
                                            return (0, L.D)(E).pipe(
                                              (0, Ve.z)((P) =>
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
                                                  We(),
                                                  (0, Ke.b)((ae) => {
                                                    A[P] = ae;
                                                  })
                                                )
                                              ),
                                              Ft(1),
                                              (function Lt(d) {
                                                return (0, q.U)(() => d);
                                              })(A),
                                              ft((P) => (c(P) ? oe.E : Y(P)))
                                            );
                                          })(A, d, f, p).pipe(
                                            (0, q.U)(
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
                                    (0, Ve.z)((P) =>
                                      A === E.length ? W(l) : oe.E
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
                                    (l.restoreHistory(ae),
                                    this.cancelNavigationTransition(
                                      ae,
                                      '',
                                      2,
                                      l
                                    ));
                                },
                              })
                            );
                          }),
                          (0, Ke.b)((ae) => {
                            const Ge = new lr(
                              ae.id,
                              this.urlSerializer.serialize(ae.extractedUrl),
                              this.urlSerializer.serialize(
                                ae.urlAfterRedirects
                              ),
                              ae.targetSnapshot
                            );
                            this.events.next(Ge);
                          })
                        );
                    }),
                    ui((P) => {
                      const ae = (Ge) => {
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
                                (0, q.U)(() => {})
                              )
                          );
                        for (const yt of Ge.children) ut.push(...ae(yt));
                        return ut;
                      };
                      return ge(ae(P.targetSnapshot.root)).pipe(He(), he(1));
                    }),
                    ui(() => l.afterPreactivation()),
                    (0, q.U)((P) => {
                      const ae = (function Ko(d, f, l) {
                        const p = Ur(d, f._root, l ? l._root : void 0);
                        return new Ar(p, f);
                      })(
                        l.routeReuseStrategy,
                        P.targetSnapshot,
                        P.currentRouterState
                      );
                      return (p = { ...P, targetRouterState: ae });
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
                      (0, q.U)(
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
                        const ae = new Ht(
                          p.id,
                          this.urlSerializer.serialize(p.extractedUrl),
                          P.message,
                          P.cancellationCode
                        );
                        if ((this.events.next(ae), Do(P))) {
                          const Ge = l.urlHandlingStrategy.merge(
                              P.url,
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
                        const ae = new Hn(
                          p.id,
                          this.urlSerializer.serialize(p.extractedUrl),
                          P,
                          p.targetSnapshot ?? void 0
                        );
                        this.events.next(ae);
                        try {
                          p.resolve(l.errorHandler(P));
                        } catch (Ge) {
                          p.reject(Ge);
                        }
                      }
                      return oe.E;
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
              return new (l || d)(o.LFG(Un.Dx));
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
      class ji {
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
        class d extends ji {}
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
                (this.afterPreactivation = () => W(void 0)),
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
                (this.config = jt((0, o.f3M)(wi, { optional: !0 }) ?? [])),
                (this.navigationTransitions = (0, o.f3M)(ni)),
                (this.urlSerializer = (0, o.f3M)(sn)),
                (this.location = (0, o.f3M)(B.Ye)),
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
                        const ae = { ...l.state };
                        delete ae.navigationId,
                          delete ae.ɵrouterPageId,
                          0 !== Object.keys(ae).length && (E.state = ae);
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
                  queryParamsHandling: ae,
                  preserveFragment: Ge,
                } = p,
                ut = E || this.routerState.root,
                yt = Ge ? this.currentUrlTree.fragment : P;
              let Et = null;
              switch (ae) {
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
              let ae, Ge, ut, yt;
              return (
                P
                  ? ((ae = P.resolve), (Ge = P.reject), (ut = P.promise))
                  : (ut = new Promise((Et, Pn) => {
                      (ae = Et), (Ge = Pn);
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
                  resolve: ae,
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
            constructor(l, p, E, A, P, ae) {
              (this.router = l),
                (this.route = p),
                (this.tabIndexAttribute = E),
                (this.renderer = A),
                (this.el = P),
                (this.locationStrategy = ae),
                (this._preserveFragment = !1),
                (this._skipLocationChange = !1),
                (this._replaceUrl = !1),
                (this.href = null),
                (this.commands = null),
                (this.onChanges = new S.x());
              const Ge = P.nativeElement.tagName;
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
                o.Y36(B.S$)
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
                (this.routerEventsSubscription = l.events.subscribe((ae) => {
                  ae instanceof Nt && this.update();
                }));
            }
            ngAfterContentInit() {
              W(this.links.changes, W(null))
                .pipe((0, J.J)())
                .subscribe((l) => {
                  this.update(), this.subscribeToEachLinkOnChanges();
                });
            }
            subscribeToEachLinkOnChanges() {
              this.linkInputChangesSubscription?.unsubscribe();
              const l = [...this.links.toArray(), this.link]
                .filter((p) => !!p)
                .map((p) => p.onChanges);
              this.linkInputChangesSubscription = (0, L.D)(l)
                .pipe((0, J.J)())
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
      class xs {}
      let _a = (() => {
          class d {
            preload(l, p) {
              return p().pipe(ft(() => W(null)));
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
                  (0, re.h)((l) => l instanceof Nt),
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
                  ae = A._loadedInjector ?? P;
                (A.loadChildren && !A._loadedRoutes && void 0 === A.canLoad) ||
                (A.loadComponent && !A._loadedComponent)
                  ? E.push(this.preloadConfig(P, A))
                  : (A.children || A._loadedRoutes) &&
                    E.push(
                      this.processRoutes(ae, A.children ?? A._loadedRoutes)
                    );
              }
              return (0, L.D)(E).pipe((0, J.J)());
            }
            preloadConfig(l, p) {
              return this.preloadingStrategy.preload(p, () => {
                let E;
                E =
                  p.loadChildren && void 0 === p.canLoad
                    ? this.loader.loadChildren(l, p)
                    : W(null);
                const A = E.pipe(
                  (0, Ve.z)((P) =>
                    null === P
                      ? W(void 0)
                      : ((p._loadedRoutes = P.routes),
                        (p._loadedInjector = P.injector),
                        this.processRoutes(P.injector ?? l, P.routes))
                  )
                );
                if (p.loadComponent && !p._loadedComponent) {
                  const P = this.loader.loadComponent(p);
                  return (0, L.D)([A, P]).pipe((0, J.J)());
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
                o.LFG(xs),
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
          { provide: Mn, useFactory: Rs, deps: [yr] },
          { provide: o.tb, multi: !0, useFactory: Ps },
          f.map((l) => l.ɵproviders),
        ]);
      }
      function Rs(d) {
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
      const zi = new o.OlP('', { factory: () => new S.x() }),
        Vo = new o.OlP('', { providedIn: 'root', factory: () => 1 });
      const Yi = new o.OlP('');
      function ri(d) {
        return Kr(0, [
          { provide: Yi, useExisting: ml },
          { provide: xs, useExisting: d },
        ]);
      }
      const vl = new o.OlP('ROUTER_FORROOT_GUARD'),
        Eu = [
          B.Ye,
          { provide: sn, useClass: Dt },
          yr,
          mr,
          { provide: Mn, useFactory: Rs, deps: [yr] },
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
                  ? { provide: B.S$, useClass: B.Do }
                  : { provide: B.S$, useClass: B.b0 },
                {
                  provide: fi,
                  useFactory: () => {
                    const d = (0, o.f3M)(B.EM),
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
                    const l = f.get(B.V_, Promise.resolve());
                    return () =>
                      l.then(
                        () =>
                          new Promise((E) => {
                            const A = f.get(yr),
                              P = f.get(zi);
                            (function p(E) {
                              f.get(yr)
                                .events.pipe(
                                  (0, re.h)(
                                    (P) =>
                                      P instanceof Nt ||
                                      P instanceof Ht ||
                                      P instanceof Hn
                                  ),
                                  (0, q.U)(
                                    (P) =>
                                      P instanceof Nt ||
                                      (P instanceof Ht &&
                                        (0 === P.code || 1 === P.code) &&
                                        null)
                                  ),
                                  (0, re.h)((P) => null !== P),
                                  he(1)
                                )
                                .subscribe(() => {
                                  E();
                                });
                            })(() => {
                              E(!0);
                            }),
                              (A.afterPreactivation = () => (
                                E(!0), P.closed ? W(void 0) : P
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
    5861: (at, $e, T) => {
      'use strict';
      function o(z, W, pe, Fe, ne, xe, we) {
        try {
          var Oe = z[xe](we),
            ye = Oe.value;
        } catch (be) {
          return void pe(be);
        }
        Oe.done ? W(ye) : Promise.resolve(ye).then(Fe, ne);
      }
      function L(z) {
        return function () {
          var W = this,
            pe = arguments;
          return new Promise(function (Fe, ne) {
            var xe = z.apply(W, pe);
            function we(ye) {
              o(xe, Fe, ne, we, Oe, 'next', ye);
            }
            function Oe(ye) {
              o(xe, Fe, ne, we, Oe, 'throw', ye);
            }
            we(void 0);
          });
        };
      }
      T.d($e, { Z: () => L });
    },
  },
  (at) => {
    at((at.s = 383));
  },
]);
