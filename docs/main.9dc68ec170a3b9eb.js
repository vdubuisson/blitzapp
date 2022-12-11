(self.webpackChunkloup_garou_mj = self.webpackChunkloup_garou_mj || []).push([
  [179],
  {
    5035: (ut, $e, M) => {
      'use strict';
      M.d($e, {
        Br: () => Ci,
        w: () => ft,
        We: () => Vt,
        eh: () => tr,
        dr: () => $n,
        YG: () => nn,
        Sm: () => rn,
        nz: () => dn,
        W2: () => _e,
        Gu: () => Kt,
        gu: () => on,
        pK: () => fn,
        Ie: () => On,
        Q$: () => _r,
        q_: () => sr,
        z0: () => vn,
        fG: () => Ot,
        uN: () => T,
        B7: () => j,
        se: () => K,
        Nh: () => ae,
        oz: () => ke,
        jP: () => fr,
        t9: () => jt,
        n0: () => Vn,
        yW: () => Wt,
        Bs: () => Ur,
        wd: () => Mo,
        sr: () => Gr,
        Pc: () => se,
        r4: () => b,
        U5: () => Ht,
        YI: () => Ro,
        QI: () => Yt,
        j9: () => Tt,
      });
      var o = M(8256),
        L = M(433),
        Y = M(655),
        W = M(8421),
        ge = M(9751),
        Be = M(5577),
        re = M(1144),
        Fe = M(576),
        Ae = M(3268);
      const Pe = ['addListener', 'removeListener'],
        ve = ['addEventListener', 'removeEventListener'],
        we = ['on', 'off'];
      function ce(a, E, c, C) {
        if (((0, Fe.m)(c) && ((C = c), (c = void 0)), C))
          return ce(a, E, c).pipe((0, Ae.Z)(C));
        const [F, Se] = (function de(a) {
          return (
            (0, Fe.m)(a.addEventListener) && (0, Fe.m)(a.removeEventListener)
          );
        })(a)
          ? ve.map((et) => (it) => a[et](E, it, c))
          : (function Ee(a) {
              return (0, Fe.m)(a.addListener) && (0, Fe.m)(a.removeListener);
            })(a)
          ? Pe.map(J(a, E))
          : (function Ne(a) {
              return (0, Fe.m)(a.on) && (0, Fe.m)(a.off);
            })(a)
          ? we.map(J(a, E))
          : [];
        if (!F && (0, re.z)(a))
          return (0, Be.z)((et) => ce(et, E, c))((0, W.Xf)(a));
        if (!F) throw new TypeError('Invalid event target');
        return new ge.y((et) => {
          const it = (...Ie) => et.next(1 < Ie.length ? Ie : Ie[0]);
          return F(it), () => Se(it);
        });
      }
      function J(a, E) {
        return (c) => (C) => a[c](E, C);
      }
      var ee = M(7579),
        Ve = M(1135),
        fe = M(3165),
        z = (M(8834), M(3953), M(3880), M(1911), M(9658)),
        ie = M(5730),
        ue = M(697),
        V = (M(4292), M(1312)),
        $ = (M(3457), M(4349), M(1308)),
        He = M(9300),
        je = M(3900),
        be = M(4671),
        Te = M(4482),
        qe = M(5403);
      function Ze(a, E) {
        return a === E;
      }
      var pt = M(6895);
      const dt = z.i,
        We = ['*'],
        Nt = (a) =>
          'function' == typeof __zone_symbol__requestAnimationFrame
            ? __zone_symbol__requestAnimationFrame(a)
            : 'function' == typeof requestAnimationFrame
            ? requestAnimationFrame(a)
            : setTimeout(a),
        an = (a) => !!a.resolveComponentFactory;
      let qt = (() => {
        class a {
          constructor(c, C) {
            (this.injector = c),
              (this.el = C),
              (this.onChange = () => {}),
              (this.onTouched = () => {});
          }
          writeValue(c) {
            (this.el.nativeElement.value = this.lastValue = c ?? ''),
              Ln(this.el);
          }
          handleChangeEvent(c, C) {
            c === this.el.nativeElement &&
              (C !== this.lastValue && ((this.lastValue = C), this.onChange(C)),
              Ln(this.el));
          }
          _handleBlurEvent(c) {
            c === this.el.nativeElement && (this.onTouched(), Ln(this.el));
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
                Ln(this.el)
              ));
            const C = c.control;
            C &&
              [
                'markAsTouched',
                'markAllAsTouched',
                'markAsUntouched',
                'markAsDirty',
                'markAsPristine',
              ].forEach((Se) => {
                if (typeof C[Se] < 'u') {
                  const et = C[Se].bind(C);
                  C[Se] = (...it) => {
                    et(...it), Ln(this.el);
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
            hostBindings: function (c, C) {
              1 & c &&
                o.NdJ('ionBlur', function (Se) {
                  return C._handleBlurEvent(Se.target);
                });
            },
          })),
          a
        );
      })();
      const Ln = (a) => {
          Nt(() => {
            const E = a.nativeElement,
              c = null != E.value && E.value.toString().length > 0,
              C = Zt(E);
            kn(E, C);
            const F = E.closest('ion-item');
            F && kn(F, c ? [...C, 'item-has-value'] : C);
          });
        },
        Zt = (a) => {
          const E = a.classList,
            c = [];
          for (let C = 0; C < E.length; C++) {
            const F = E.item(C);
            null !== F && Ut(F, 'ng-') && c.push(`ion-${F.substring(3)}`);
          }
          return c;
        },
        kn = (a, E) => {
          const c = a.classList;
          c.remove(
            'ion-valid',
            'ion-invalid',
            'ion-touched',
            'ion-untouched',
            'ion-dirty',
            'ion-pristine'
          ),
            c.add(...E);
        },
        Ut = (a, E) => a.substring(0, E.length) === E;
      let ft = (() => {
          class a extends qt {
            constructor(c, C) {
              super(c, C);
            }
            writeValue(c) {
              (this.el.nativeElement.checked = this.lastValue = c ?? !1),
                Ln(this.el);
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
              hostBindings: function (c, C) {
                1 & c &&
                  o.NdJ('ionChange', function (Se) {
                    return C._handleIonChange(Se.target);
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
        Ht = (() => {
          class a extends qt {
            constructor(c, C) {
              super(c, C);
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
              hostBindings: function (c, C) {
                1 & c &&
                  o.NdJ('ionSelect', function (Se) {
                    return C._handleIonSelect(Se.target);
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
          class a extends qt {
            constructor(c, C) {
              super(c, C);
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
              hostBindings: function (c, C) {
                1 & c &&
                  o.NdJ('ionChange', function (Se) {
                    return C._handleChangeEvent(Se.target);
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
        Tt = (() => {
          class a extends qt {
            constructor(c, C) {
              super(c, C);
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
              hostBindings: function (c, C) {
                1 & c &&
                  o.NdJ('ionChange', function (Se) {
                    return C._handleInputEvent(Se.target);
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
      const ln = (a, E) => {
          const c = a.prototype;
          E.forEach((C) => {
            Object.defineProperty(c, C, {
              get() {
                return this.el[C];
              },
              set(F) {
                this.z.runOutsideAngular(() => (this.el[C] = F));
              },
            });
          });
        },
        bn = (a, E) => {
          const c = a.prototype;
          E.forEach((C) => {
            c[C] = function () {
              const F = arguments;
              return this.z.runOutsideAngular(() =>
                this.el[C].apply(this.el, F)
              );
            };
          });
        },
        mt = (a, E, c) => {
          c.forEach((C) => (a[C] = ce(E, C)));
        };
      function tt(a) {
        return function (c) {
          const { defineCustomElementFn: C, inputs: F, methods: Se } = a;
          return void 0 !== C && C(), F && ln(c, F), Se && bn(c, Se), c;
        };
      }
      let Vt = (() => {
          let a = class {
            constructor(c, C, F) {
              (this.z = F), c.detach(), (this.el = C.nativeElement);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
            constructor(c, C, F) {
              (this.z = F),
                c.detach(),
                (this.el = C.nativeElement),
                mt(this, this.el, ['ionChange']);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
        $n = (() => {
          let a = class {
            constructor(c, C, F) {
              (this.z = F), c.detach(), (this.el = C.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-app']],
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)([tt({ defineCustomElementFn: void 0 })], a)),
            a
          );
        })(),
        nn = (() => {
          let a = class {
            constructor(c, C, F) {
              (this.z = F),
                c.detach(),
                (this.el = C.nativeElement),
                mt(this, this.el, ['ionFocus', 'ionBlur']);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
        rn = (() => {
          let a = class {
            constructor(c, C, F) {
              (this.z = F), c.detach(), (this.el = C.nativeElement);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
              [tt({ defineCustomElementFn: void 0, inputs: ['collapse'] })],
              a
            )),
            a
          );
        })(),
        dn = (() => {
          let a = class {
            constructor(c, C, F) {
              (this.z = F),
                c.detach(),
                (this.el = C.nativeElement),
                mt(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
            constructor(c, C, F) {
              (this.z = F),
                c.detach(),
                (this.el = C.nativeElement),
                mt(this, this.el, [
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
        Kt = (() => {
          let a = class {
            constructor(c, C, F) {
              (this.z = F), c.detach(), (this.el = C.nativeElement);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
        on = (() => {
          let a = class {
            constructor(c, C, F) {
              (this.z = F), c.detach(), (this.el = C.nativeElement);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
        fn = (() => {
          let a = class {
            constructor(c, C, F) {
              (this.z = F),
                c.detach(),
                (this.el = C.nativeElement),
                mt(this, this.el, [
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
            constructor(c, C, F) {
              (this.z = F), c.detach(), (this.el = C.nativeElement);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
        _r = (() => {
          let a = class {
            constructor(c, C, F) {
              (this.z = F), c.detach(), (this.el = C.nativeElement);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
            constructor(c, C, F) {
              (this.z = F), c.detach(), (this.el = C.nativeElement);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
        vn = (() => {
          let a = class {
            constructor(c, C, F) {
              (this.z = F),
                c.detach(),
                (this.el = C.nativeElement),
                mt(this, this.el, [
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
        Ot = (() => {
          let a = class {
            constructor(c, C, F) {
              (this.z = F), c.detach(), (this.el = C.nativeElement);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
            constructor(c, C, F) {
              (this.z = F), c.detach(), (this.el = C.nativeElement);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
        j = (() => {
          let a = class {
            constructor(c, C, F) {
              (this.z = F),
                c.detach(),
                (this.el = C.nativeElement),
                mt(this, this.el, ['ionFocus', 'ionBlur']);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
            constructor(c, C, F) {
              (this.z = F),
                c.detach(),
                (this.el = C.nativeElement),
                mt(this, this.el, ['ionChange']);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
            constructor(c, C, F) {
              (this.z = F), c.detach(), (this.el = C.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-reorder']],
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)([tt({ defineCustomElementFn: void 0 })], a)),
            a
          );
        })(),
        ke = (() => {
          let a = class {
            constructor(c, C, F) {
              (this.z = F),
                c.detach(),
                (this.el = C.nativeElement),
                mt(this, this.el, ['ionItemReorder']);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
        jt = (() => {
          let a = class {
            constructor(c, C, F) {
              (this.z = F),
                c.detach(),
                (this.el = C.nativeElement),
                mt(this, this.el, [
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
        Vn = (() => {
          let a = class {
            constructor(c, C, F) {
              (this.z = F), c.detach(), (this.el = C.nativeElement);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
            constructor(c, C, F) {
              (this.z = F), c.detach(), (this.el = C.nativeElement);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
        Ur = (() => {
          let a = class {
            constructor(c, C, F) {
              (this.z = F), c.detach(), (this.el = C.nativeElement);
            }
          };
          return (
            (a.ɵfac = function (c) {
              return new (c || a)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(o.R0b));
            }),
            (a.ɵcmp = o.Xpm({
              type: a,
              selectors: [['ion-thumbnail']],
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)([tt({ defineCustomElementFn: void 0 })], a)),
            a
          );
        })(),
        Mo = (() => {
          let a = class {
            constructor(c, C, F) {
              (this.z = F), c.detach(), (this.el = C.nativeElement);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
        Gr = (() => {
          let a = class {
            constructor(c, C, F) {
              (this.z = F), c.detach(), (this.el = C.nativeElement);
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
              ngContentSelectors: We,
              decls: 1,
              vars: 0,
              template: function (c, C) {
                1 & c && (o.F$t(), o.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            (a = (0, Y.gn)(
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
      class mr {
        constructor(E = {}) {
          this.data = E;
        }
        get(E) {
          return this.data[E];
        }
      }
      let gn = (() => {
        class a {
          constructor(c, C) {
            (this.zone = c), (this.appRef = C);
          }
          create(c, C, F) {
            return new Xr(c, C, F, this.appRef, this.zone);
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
      class Xr {
        constructor(E, c, C, F, Se) {
          (this.resolverOrInjector = E),
            (this.injector = c),
            (this.location = C),
            (this.appRef = F),
            (this.zone = Se),
            (this.elRefMap = new WeakMap()),
            (this.elEventsMap = new WeakMap());
        }
        attachViewToDom(E, c, C, F) {
          return this.zone.run(
            () =>
              new Promise((Se) => {
                Se(
                  en(
                    this.zone,
                    this.resolverOrInjector,
                    this.injector,
                    this.location,
                    this.appRef,
                    this.elRefMap,
                    this.elEventsMap,
                    E,
                    c,
                    C,
                    F
                  )
                );
              })
          );
        }
        removeViewFromDom(E, c) {
          return this.zone.run(
            () =>
              new Promise((C) => {
                const F = this.elRefMap.get(c);
                if (F) {
                  F.destroy(), this.elRefMap.delete(c);
                  const Se = this.elEventsMap.get(c);
                  Se && (Se(), this.elEventsMap.delete(c));
                }
                C();
              })
          );
        }
      }
      const en = (a, E, c, C, F, Se, et, it, Ie, vt, Cn) => {
          let Jt;
          const zt = o.zs3.create({ providers: Tr(vt), parent: c });
          if (E && an(E)) {
            const xr = E.resolveComponentFactory(Ie);
            Jt = C ? C.createComponent(xr, C.length, zt) : xr.create(zt);
          } else {
            if (!C) return null;
            Jt = C.createComponent(Ie, {
              index: C.indexOf,
              injector: zt,
              environmentInjector: E,
            });
          }
          const yr = Jt.instance,
            Wn = Jt.location.nativeElement;
          if ((vt && Object.assign(yr, vt), Cn))
            for (const xr of Cn) Wn.classList.add(xr);
          const hr = Ar(a, yr, Wn);
          return (
            it.appendChild(Wn),
            C || F.attachView(Jt.hostView),
            Jt.changeDetectorRef.reattach(),
            Se.set(Wn, Jt),
            et.set(Wn, hr),
            Wn
          );
        },
        Fn = [ue.L, ue.a, ue.b, ue.c, ue.d],
        Ar = (a, E, c) =>
          a.run(() => {
            const C = Fn.filter((F) => 'function' == typeof E[F]).map((F) => {
              const Se = (et) => E[F](et.detail);
              return (
                c.addEventListener(F, Se), () => c.removeEventListener(F, Se)
              );
            });
            return () => C.forEach((F) => F());
          }),
        Nr = new o.OlP('NavParamsToken'),
        Tr = (a) => [
          { provide: Nr, useValue: a },
          { provide: mr, useFactory: Sn, deps: [Nr] },
        ],
        Sn = (a) => new mr(a),
        fo = (a, E) => (
          (a = a.filter((c) => c.stackId !== E.stackId)).push(E), a
        ),
        Kr = (a, E) => {
          const c = a.createUrlTree(['.'], { relativeTo: E });
          return a.serializeUrl(c);
        },
        To = (a, E) => {
          if (!a) return;
          const c = Qr(E);
          for (let C = 0; C < c.length; C++) {
            if (C >= a.length) return c[C];
            if (c[C] !== a[C]) return;
          }
        },
        Qr = (a) =>
          a
            .split('/')
            .map((E) => E.trim())
            .filter((E) => '' !== E),
        jo = (a) => {
          a && (a.ref.destroy(), a.unlistenEvents());
        };
      class zr {
        constructor(E, c, C, F, Se, et) {
          (this.containerEl = c),
            (this.router = C),
            (this.navCtrl = F),
            (this.zone = Se),
            (this.location = et),
            (this.views = []),
            (this.skipTransition = !1),
            (this.nextId = 0),
            (this.tabsPrefix = void 0 !== E ? Qr(E) : void 0);
        }
        createView(E, c) {
          var C;
          const F = Kr(this.router, c),
            Se =
              null === (C = E?.location) || void 0 === C
                ? void 0
                : C.nativeElement,
            et = Ar(this.zone, E.instance, Se);
          return {
            id: this.nextId++,
            stackId: To(this.tabsPrefix, F),
            unlistenEvents: et,
            element: Se,
            ref: E,
            url: F,
          };
        }
        getExistingView(E) {
          const c = Kr(this.router, E),
            C = this.views.find((F) => F.url === c);
          return C && C.ref.changeDetectorRef.reattach(), C;
        }
        setActive(E) {
          var c, C;
          const F = this.navCtrl.consumeTransition();
          let { direction: Se, animation: et, animationBuilder: it } = F;
          const Ie = this.activeView,
            vt = ((a, E) => !E || a.stackId !== E.stackId)(E, Ie);
          vt && ((Se = 'back'), (et = void 0));
          const Cn = this.views.slice();
          let Jt;
          const zt = this.router;
          zt.getCurrentNavigation
            ? (Jt = zt.getCurrentNavigation())
            : !(null === (c = zt.navigations) || void 0 === c) &&
              c.value &&
              (Jt = zt.navigations.value),
            null !== (C = Jt?.extras) &&
              void 0 !== C &&
              C.replaceUrl &&
              this.views.length > 0 &&
              this.views.splice(-1, 1);
          const yr = this.views.includes(E),
            Wn = this.insertView(E, Se);
          yr || E.ref.changeDetectorRef.detectChanges();
          const hr = E.animationBuilder;
          return (
            void 0 === it && 'back' === Se && !vt && void 0 !== hr && (it = hr),
            Ie && (Ie.animationBuilder = it),
            this.zone.runOutsideAngular(() =>
              this.wait(
                () => (
                  Ie && Ie.ref.changeDetectorRef.detach(),
                  E.ref.changeDetectorRef.reattach(),
                  this.transition(E, Ie, et, this.canGoBack(1), !1, it)
                    .then(() => yi(E, Wn, Cn, this.location, this.zone))
                    .then(() => ({
                      enteringView: E,
                      direction: Se,
                      animation: et,
                      tabSwitch: vt,
                    }))
                )
              )
            )
          );
        }
        canGoBack(E, c = this.getActiveStackId()) {
          return this.getStack(c).length > E;
        }
        pop(E, c = this.getActiveStackId()) {
          return this.zone.run(() => {
            var C, F;
            const Se = this.getStack(c);
            if (Se.length <= E) return Promise.resolve(!1);
            const et = Se[Se.length - E - 1];
            let it = et.url;
            const Ie = et.savedData;
            if (Ie) {
              const Cn = Ie.get('primary');
              null !==
                (F =
                  null === (C = Cn?.route) || void 0 === C
                    ? void 0
                    : C._routerState) &&
                void 0 !== F &&
                F.snapshot.url &&
                (it = Cn.route._routerState.snapshot.url);
            }
            const { animationBuilder: vt } = this.navCtrl.consumeTransition();
            return this.navCtrl
              .navigateBack(
                it,
                Object.assign(Object.assign({}, et.savedExtras), {
                  animation: vt,
                })
              )
              .then(() => !0);
          });
        }
        startBackTransition() {
          const E = this.activeView;
          if (E) {
            const c = this.getStack(E.stackId),
              C = c[c.length - 2],
              F = C.animationBuilder;
            return this.wait(() =>
              this.transition(C, E, 'back', this.canGoBack(2), !0, F)
            );
          }
          return Promise.resolve();
        }
        endBackTransition(E) {
          E
            ? ((this.skipTransition = !0), this.pop(1))
            : this.activeView &&
              ii(
                this.activeView,
                this.views,
                this.views,
                this.location,
                this.zone
              );
        }
        getLastUrl(E) {
          const c = this.getStack(E);
          return c.length > 0 ? c[c.length - 1] : void 0;
        }
        getRootUrl(E) {
          const c = this.getStack(E);
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
            this.views.forEach(jo),
            (this.activeView = void 0),
            (this.views = []);
        }
        getStack(E) {
          return this.views.filter((c) => c.stackId === E);
        }
        insertView(E, c) {
          return (
            (this.activeView = E),
            (this.views = ((a, E, c) =>
              'root' === c
                ? fo(a, E)
                : 'forward' === c
                ? ((a, E) => (
                    a.indexOf(E) >= 0
                      ? (a = a.filter(
                          (C) => C.stackId !== E.stackId || C.id <= E.id
                        ))
                      : a.push(E),
                    a
                  ))(a, E)
                : ((a, E) =>
                    a.indexOf(E) >= 0
                      ? a.filter((C) => C.stackId !== E.stackId || C.id <= E.id)
                      : fo(a, E))(a, E))(this.views, E, c)),
            this.views.slice()
          );
        }
        transition(E, c, C, F, Se, et) {
          if (this.skipTransition)
            return (this.skipTransition = !1), Promise.resolve(!1);
          if (c === E) return Promise.resolve(!1);
          const it = E ? E.element : void 0,
            Ie = c ? c.element : void 0,
            vt = this.containerEl;
          return it &&
            it !== Ie &&
            (it.classList.add('ion-page'),
            it.classList.add('ion-page-invisible'),
            it.parentElement !== vt && vt.appendChild(it),
            vt.commit)
            ? vt.commit(it, Ie, {
                deepWait: !0,
                duration: void 0 === C ? 0 : void 0,
                direction: C,
                showGoBack: F,
                progressAnimation: Se,
                animationBuilder: et,
              })
            : Promise.resolve(!1);
        }
        wait(E) {
          return (0, Y.mG)(this, void 0, void 0, function* () {
            void 0 !== this.runningTask &&
              (yield this.runningTask, (this.runningTask = void 0));
            const c = (this.runningTask = E());
            return c.finally(() => (this.runningTask = void 0)), c;
          });
        }
      }
      const yi = (a, E, c, C, F) =>
          'function' == typeof requestAnimationFrame
            ? new Promise((Se) => {
                requestAnimationFrame(() => {
                  ii(a, E, c, C, F), Se();
                });
              })
            : Promise.resolve(),
        ii = (a, E, c, C, F) => {
          F.run(() => c.filter((Se) => !E.includes(Se)).forEach(jo)),
            E.forEach((Se) => {
              const it = C.path().split('?')[0].split('#')[0];
              if (Se !== a && Se.url !== it) {
                const Ie = Se.element;
                Ie.setAttribute('aria-hidden', 'true'),
                  Ie.classList.add('ion-page-hidden'),
                  Se.ref.changeDetectorRef.detach();
              }
            });
        };
      let ho = (() => {
        class a {
          get(c, C) {
            const F = Oo();
            return F ? F.get(c, C) : null;
          }
          getBoolean(c, C) {
            const F = Oo();
            return !!F && F.getBoolean(c, C);
          }
          getNumber(c, C) {
            const F = Oo();
            return F ? F.getNumber(c, C) : 0;
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
      const Uo = new o.OlP('USERCONFIG'),
        Oo = () => {
          if (typeof window < 'u') {
            const a = window.Ionic;
            if (a?.config) return a.config;
          }
          return null;
        };
      let po = (() => {
        class a {
          constructor(c, C) {
            (this.doc = c),
              (this.backButton = new ee.x()),
              (this.keyboardDidShow = new ee.x()),
              (this.keyboardDidHide = new ee.x()),
              (this.pause = new ee.x()),
              (this.resume = new ee.x()),
              (this.resize = new ee.x()),
              C.run(() => {
                var F;
                let Se;
                (this.win = c.defaultView),
                  (this.backButton.subscribeWithPriority = function (et, it) {
                    return this.subscribe((Ie) =>
                      Ie.register(et, (vt) => C.run(() => it(vt)))
                    );
                  }),
                  br(this.pause, c, 'pause'),
                  br(this.resume, c, 'resume'),
                  br(this.backButton, c, 'ionBackButton'),
                  br(this.resize, this.win, 'resize'),
                  br(this.keyboardDidShow, this.win, 'ionKeyboardDidShow'),
                  br(this.keyboardDidHide, this.win, 'ionKeyboardDidHide'),
                  (this._readyPromise = new Promise((et) => {
                    Se = et;
                  })),
                  null !== (F = this.win) && void 0 !== F && F.cordova
                    ? c.addEventListener(
                        'deviceready',
                        () => {
                          Se('cordova');
                        },
                        { once: !0 }
                      )
                    : Se('dom');
              });
          }
          is(c) {
            return (0, z.a)(this.win, c);
          }
          platforms() {
            return (0, z.g)(this.win);
          }
          ready() {
            return this._readyPromise;
          }
          get isRTL() {
            return 'rtl' === this.doc.dir;
          }
          getQueryParam(c) {
            return xo(this.win.location.href, c);
          }
          isLandscape() {
            return !this.isPortrait();
          }
          isPortrait() {
            var c, C;
            return null === (C = (c = this.win).matchMedia) || void 0 === C
              ? void 0
              : C.call(c, '(orientation: portrait)').matches;
          }
          testUserAgent(c) {
            const C = this.win.navigator;
            return !!(C?.userAgent && C.userAgent.indexOf(c) >= 0);
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
            return new (c || a)(o.LFG(pt.K0), o.LFG(o.R0b));
          }),
          (a.ɵprov = o.Yz7({ token: a, factory: a.ɵfac, providedIn: 'root' })),
          a
        );
      })();
      const xo = (a, E) => {
          E = E.replace(/[[\]\\]/g, '\\$&');
          const C = new RegExp('[\\?&]' + E + '=([^&#]*)').exec(a);
          return C ? decodeURIComponent(C[1].replace(/\+/g, ' ')) : null;
        },
        br = (a, E, c) => {
          E &&
            E.addEventListener(c, (C) => {
              a.next(C?.detail);
            });
        };
      let Jn = (() => {
        class a {
          constructor(c, C, F, Se) {
            (this.location = C),
              (this.serializer = F),
              (this.router = Se),
              (this.direction = Go),
              (this.animated = Jr),
              (this.guessDirection = 'forward'),
              (this.lastNavId = -1),
              Se &&
                Se.events.subscribe((et) => {
                  if (et instanceof fe.OD) {
                    const it = et.restoredState
                      ? et.restoredState.navigationId
                      : et.id;
                    (this.guessDirection =
                      it < this.lastNavId ? 'back' : 'forward'),
                      (this.guessAnimation = et.restoredState
                        ? void 0
                        : this.guessDirection),
                      (this.lastNavId =
                        'forward' === this.guessDirection ? et.id : it);
                  }
                }),
              c.backButton.subscribeWithPriority(0, (et) => {
                this.pop(), et();
              });
          }
          navigateForward(c, C = {}) {
            return (
              this.setDirection(
                'forward',
                C.animated,
                C.animationDirection,
                C.animation
              ),
              this.navigate(c, C)
            );
          }
          navigateBack(c, C = {}) {
            return (
              this.setDirection(
                'back',
                C.animated,
                C.animationDirection,
                C.animation
              ),
              this.navigate(c, C)
            );
          }
          navigateRoot(c, C = {}) {
            return (
              this.setDirection(
                'root',
                C.animated,
                C.animationDirection,
                C.animation
              ),
              this.navigate(c, C)
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
            return (0, Y.mG)(this, void 0, void 0, function* () {
              let c = this.topOutlet;
              for (; c && !(yield c.pop()); ) c = c.parentOutlet;
            });
          }
          setDirection(c, C, F, Se) {
            (this.direction = c),
              (this.animated = vr(c, C, F)),
              (this.animationBuilder = Se);
          }
          setTopOutlet(c) {
            this.topOutlet = c;
          }
          consumeTransition() {
            let C,
              c = 'root';
            const F = this.animationBuilder;
            return (
              'auto' === this.direction
                ? ((c = this.guessDirection), (C = this.guessAnimation))
                : ((C = this.animated), (c = this.direction)),
              (this.direction = Go),
              (this.animated = Jr),
              (this.animationBuilder = void 0),
              { direction: c, animation: C, animationBuilder: F }
            );
          }
          navigate(c, C) {
            if (Array.isArray(c)) return this.router.navigate(c, C);
            {
              const F = this.serializer.parse(c.toString());
              return (
                void 0 !== C.queryParams &&
                  (F.queryParams = Object.assign({}, C.queryParams)),
                void 0 !== C.fragment && (F.fragment = C.fragment),
                this.router.navigateByUrl(F, C)
              );
            }
          }
        }
        return (
          (a.ɵfac = function (c) {
            return new (c || a)(
              o.LFG(po),
              o.LFG(pt.Ye),
              o.LFG(fe.Hx),
              o.LFG(fe.F0, 8)
            );
          }),
          (a.ɵprov = o.Yz7({ token: a, factory: a.ɵfac, providedIn: 'root' })),
          a
        );
      })();
      const vr = (a, E, c) => {
          if (!1 !== E) {
            if (void 0 !== c) return c;
            if ('forward' === a || 'back' === a) return a;
            if ('root' === a && !0 === E) return 'forward';
          }
        },
        Go = 'auto',
        Jr = void 0;
      let fr = (() => {
        class a {
          constructor(c, C, F, Se, et, it, Ie, vt, Cn, Jt, zt, yr, Wn) {
            (this.parentContexts = c),
              (this.location = C),
              (this.config = et),
              (this.navCtrl = it),
              (this.componentFactoryResolver = Ie),
              (this.parentOutlet = Wn),
              (this.activated = null),
              (this.activatedView = null),
              (this._activatedRoute = null),
              (this.proxyMap = new WeakMap()),
              (this.currentActivatedRoute$ = new Ve.X(null)),
              (this.stackEvents = new o.vpe()),
              (this.activateEvents = new o.vpe()),
              (this.deactivateEvents = new o.vpe()),
              (this.nativeEl = Cn.nativeElement),
              (this.name = F || fe.eC),
              (this.tabsPrefix = 'true' === Se ? Kr(Jt, yr) : void 0),
              (this.stackCtrl = new zr(
                this.tabsPrefix,
                this.nativeEl,
                Jt,
                it,
                zt,
                vt
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
                    onEnd: (C) => this.stackCtrl.endBackTransition(C),
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
            new Promise((c) => (0, ie.c)(this.nativeEl, c)).then(() => {
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
          attach(c, C) {
            throw new Error('incompatible reuse strategy');
          }
          deactivate() {
            if (this.activated) {
              if (this.activatedView) {
                const C = this.getContext();
                this.activatedView.savedData = new Map(C.children.contexts);
                const F = this.activatedView.savedData.get('primary');
                if (
                  (F && C.route && (F.route = Object.assign({}, C.route)),
                  (this.activatedView.savedExtras = {}),
                  C.route)
                ) {
                  const Se = C.route.snapshot;
                  (this.activatedView.savedExtras.queryParams = Se.queryParams),
                    (this.activatedView.savedExtras.fragment = Se.fragment);
                }
              }
              const c = this.component;
              (this.activatedView = null),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(c);
            }
          }
          activateWith(c, C) {
            var F;
            if (this.isActivated)
              throw new Error('Cannot activate an already activated outlet');
            this._activatedRoute = c;
            let Se,
              et = this.stackCtrl.getExistingView(c);
            if (et) {
              Se = this.activated = et.ref;
              const it = et.savedData;
              it && (this.getContext().children.contexts = it),
                this.updateActivatedRouteProxy(Se.instance, c);
            } else {
              const it = c._futureSnapshot;
              if (
                null == it.routeConfig.component &&
                null == this.environmentInjector
              )
                return void console.warn(
                  '[Ionic Warning]: You must supply an environmentInjector to use standalone components with routing:\n\nIn your component class, add:\n\n   import { EnvironmentInjector } from \'@angular/core\';\n   constructor(public environmentInjector: EnvironmentInjector) {}\n\nIn your router outlet template, add:\n\n   <ion-router-outlet [environmentInjector]="environmentInjector"></ion-router-outlet>\n\nAlternatively, if you are routing within ion-tabs:\n\n   <ion-tabs [environmentInjector]="environmentInjector"></ion-tabs>'
                );
              const Ie = this.parentContexts.getOrCreateContext(
                  this.name
                ).children,
                vt = new Ve.X(null),
                Cn = this.createActivatedRouteProxy(vt, c),
                Jt = new eo(Cn, Ie, this.location.injector),
                zt =
                  null !== (F = it.routeConfig.component) && void 0 !== F
                    ? F
                    : it.component;
              if ((C = C || this.componentFactoryResolver) && an(C)) {
                const yr = C.resolveComponentFactory(zt);
                Se = this.activated = this.location.createComponent(
                  yr,
                  this.location.length,
                  Jt
                );
              } else
                Se = this.activated = this.location.createComponent(zt, {
                  index: this.location.length,
                  injector: Jt,
                  environmentInjector: C ?? this.environmentInjector,
                });
              vt.next(Se.instance),
                (et = this.stackCtrl.createView(this.activated, c)),
                this.proxyMap.set(Se.instance, Cn),
                this.currentActivatedRoute$.next({
                  component: Se.instance,
                  activatedRoute: c,
                });
            }
            (this.activatedView = et),
              this.navCtrl.setTopOutlet(this),
              this.stackCtrl.setActive(et).then((it) => {
                this.activateEvents.emit(Se.instance),
                  this.stackEvents.emit(it);
              });
          }
          canGoBack(c = 1, C) {
            return this.stackCtrl.canGoBack(c, C);
          }
          pop(c = 1, C) {
            return this.stackCtrl.pop(c, C);
          }
          getLastUrl(c) {
            const C = this.stackCtrl.getLastUrl(c);
            return C ? C.url : void 0;
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
          createActivatedRouteProxy(c, C) {
            const F = new fe.gz();
            return (
              (F._futureSnapshot = C._futureSnapshot),
              (F._routerState = C._routerState),
              (F.snapshot = C.snapshot),
              (F.outlet = C.outlet),
              (F.component = C.component),
              (F._paramMap = this.proxyObservable(c, 'paramMap')),
              (F._queryParamMap = this.proxyObservable(c, 'queryParamMap')),
              (F.url = this.proxyObservable(c, 'url')),
              (F.params = this.proxyObservable(c, 'params')),
              (F.queryParams = this.proxyObservable(c, 'queryParams')),
              (F.fragment = this.proxyObservable(c, 'fragment')),
              (F.data = this.proxyObservable(c, 'data')),
              F
            );
          }
          proxyObservable(c, C) {
            return c.pipe(
              (0, He.h)((F) => !!F),
              (0, je.w)((F) =>
                this.currentActivatedRoute$.pipe(
                  (0, He.h)((Se) => null !== Se && Se.component === F),
                  (0, je.w)((Se) => Se && Se.activatedRoute[C]),
                  (function nt(a, E = be.y) {
                    return (
                      (a = a ?? Ze),
                      (0, Te.e)((c, C) => {
                        let F,
                          Se = !0;
                        c.subscribe(
                          (0, qe.x)(C, (et) => {
                            const it = E(et);
                            (Se || !a(F, it)) &&
                              ((Se = !1), (F = it), C.next(et));
                          })
                        );
                      })
                    );
                  })()
                )
              )
            );
          }
          updateActivatedRouteProxy(c, C) {
            const F = this.proxyMap.get(c);
            if (!F)
              throw new Error('Could not find activated route proxy for view');
            (F._futureSnapshot = C._futureSnapshot),
              (F._routerState = C._routerState),
              (F.snapshot = C.snapshot),
              (F.outlet = C.outlet),
              (F.component = C.component),
              this.currentActivatedRoute$.next({
                component: c,
                activatedRoute: C,
              });
          }
        }
        return (
          (a.ɵfac = function (c) {
            return new (c || a)(
              o.Y36(fe.y6),
              o.Y36(o.s_b),
              o.$8M('name'),
              o.$8M('tabs'),
              o.Y36(ho),
              o.Y36(Jn),
              o.Y36(o._Vd, 8),
              o.Y36(pt.Ye),
              o.Y36(o.SBq),
              o.Y36(fe.F0),
              o.Y36(o.R0b),
              o.Y36(fe.gz),
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
      class eo {
        constructor(E, c, C) {
          (this.route = E), (this.childContexts = c), (this.parent = C);
        }
        get(E, c) {
          return E === fe.gz
            ? this.route
            : E === fe.y6
            ? this.childContexts
            : this.parent.get(E, c);
        }
      }
      let Ro = (() => {
        class a {
          constructor(c, C, F, Se, et) {
            (this.locationStrategy = c),
              (this.navCtrl = C),
              (this.elementRef = F),
              (this.router = Se),
              (this.routerLink = et),
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
              const C = this.locationStrategy.prepareExternalUrl(
                this.router.serializeUrl(this.routerLink.urlTree)
              );
              this.elementRef.nativeElement.href = C;
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
              o.Y36(pt.S$),
              o.Y36(Jn),
              o.Y36(o.SBq),
              o.Y36(fe.F0),
              o.Y36(fe.rH, 8)
            );
          }),
          (a.ɵdir = o.lG2({
            type: a,
            selectors: [['', 'routerLink', '', 5, 'a', 5, 'area']],
            hostBindings: function (c, C) {
              1 & c &&
                o.NdJ('click', function (Se) {
                  return C.onClick(Se);
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
      class Or {
        constructor(E) {
          this.ctrl = E;
        }
        create(E) {
          return this.ctrl.create(E || {});
        }
        dismiss(E, c, C) {
          return this.ctrl.dismiss(E, c, C);
        }
        getTop() {
          return this.ctrl.getTop();
        }
      }
      let Ci = (() => {
        class a extends Or {
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
      class Br {}
      let Mn = (() => {
          class a extends Or {
            constructor(c, C, F, Se) {
              super(V.m),
                (this.angularDelegate = c),
                (this.resolver = C),
                (this.injector = F),
                (this.environmentInjector = Se);
            }
            create(c) {
              var C;
              return super.create(
                Object.assign(Object.assign({}, c), {
                  delegate: this.angularDelegate.create(
                    null !== (C = this.resolver) && void 0 !== C
                      ? C
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
                o.LFG(gn),
                o.LFG(o._Vd),
                o.LFG(o.zs3),
                o.LFG(Br, 8)
              );
            }),
            (a.ɵprov = o.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        oo = (() => {
          class a extends Or {
            constructor(c, C, F, Se) {
              super(V.c),
                (this.angularDelegate = c),
                (this.resolver = C),
                (this.injector = F),
                (this.environmentInjector = Se);
            }
            create(c) {
              var C;
              return super.create(
                Object.assign(Object.assign({}, c), {
                  delegate: this.angularDelegate.create(
                    null !== (C = this.resolver) && void 0 !== C
                      ? C
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
                o.LFG(gn),
                o.LFG(o._Vd),
                o.LFG(o.zs3),
                o.LFG(Br, 8)
              );
            }),
            (a.ɵprov = o.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })();
      class b {
        shouldDetach(E) {
          return !1;
        }
        shouldAttach(E) {
          return !1;
        }
        store(E, c) {}
        retrieve(E) {
          return null;
        }
        shouldReuseRoute(E, c) {
          if (E.routeConfig !== c.routeConfig) return !1;
          const C = E.params,
            F = c.params,
            Se = Object.keys(C),
            et = Object.keys(F);
          if (Se.length !== et.length) return !1;
          for (const it of Se) if (F[it] !== C[it]) return !1;
          return !0;
        }
      }
      const D = (a, E, c) => () => {
        if (E.defaultView && typeof window < 'u') {
          ((a) => {
            const E = window,
              c = E.Ionic;
            (c && c.config && 'Object' !== c.config.constructor.name) ||
              ((E.Ionic = E.Ionic || {}),
              (E.Ionic.config = Object.assign(
                Object.assign({}, E.Ionic.config),
                a
              )));
          })(
            Object.assign(Object.assign({}, a), {
              _zoneGate: (Se) => c.run(Se),
            })
          );
          const F =
            '__zone_symbol__addEventListener' in E.body
              ? '__zone_symbol__addEventListener'
              : 'addEventListener';
          return (function wt() {
            var a = [];
            if (typeof window < 'u') {
              var E = window;
              (!E.customElements ||
                (E.Element &&
                  (!E.Element.prototype.closest ||
                    !E.Element.prototype.matches ||
                    !E.Element.prototype.remove ||
                    !E.Element.prototype.getRootNode))) &&
                a.push(M.e(6748).then(M.t.bind(M, 723, 23))),
                ('function' != typeof Object.assign ||
                  !Object.entries ||
                  !Array.prototype.find ||
                  !Array.prototype.includes ||
                  !String.prototype.startsWith ||
                  !String.prototype.endsWith ||
                  (E.NodeList && !E.NodeList.prototype.forEach) ||
                  !E.fetch ||
                  !(function () {
                    try {
                      var C = new URL('b', 'http://a');
                      return (
                        (C.pathname = 'c%20d'),
                        'http://a/c%20d' === C.href && C.searchParams
                      );
                    } catch {
                      return !1;
                    }
                  })() ||
                  typeof WeakMap > 'u') &&
                  a.push(M.e(2214).then(M.t.bind(M, 4144, 23)));
            }
            return Promise.all(a);
          })().then(() =>
            ((a, E) =>
              typeof window > 'u'
                ? Promise.resolve()
                : (0, $.p)().then(
                    () => (
                      dt(),
                      (0, $.b)(
                        JSON.parse(
                          '[["ion-menu_3",[[33,"ion-menu-button",{"color":[513],"disabled":[4],"menu":[1],"autoHide":[4,"auto-hide"],"type":[1],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]],[33,"ion-menu",{"contentId":[513,"content-id"],"menuId":[513,"menu-id"],"type":[1025],"disabled":[1028],"side":[513],"swipeGesture":[4,"swipe-gesture"],"maxEdgeStart":[2,"max-edge-start"],"isPaneVisible":[32],"isEndSide":[32],"isOpen":[64],"isActive":[64],"open":[64],"close":[64],"toggle":[64],"setOpen":[64]},[[16,"ionSplitPaneVisible","onSplitPaneChanged"],[2,"click","onBackdropClick"],[0,"keydown","onKeydown"]]],[1,"ion-menu-toggle",{"menu":[1],"autoHide":[4,"auto-hide"],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]]]],["ion-fab_3",[[33,"ion-fab-button",{"color":[513],"activated":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1],"show":[4],"translucent":[4],"type":[1],"size":[1],"closeIcon":[1,"close-icon"]}],[1,"ion-fab",{"horizontal":[1],"vertical":[1],"edge":[4],"activated":[1028],"close":[64],"toggle":[64]}],[1,"ion-fab-list",{"activated":[4],"side":[1]}]]],["ion-refresher_2",[[0,"ion-refresher-content",{"pullingIcon":[1025,"pulling-icon"],"pullingText":[1,"pulling-text"],"refreshingSpinner":[1025,"refreshing-spinner"],"refreshingText":[1,"refreshing-text"]}],[32,"ion-refresher",{"pullMin":[2,"pull-min"],"pullMax":[2,"pull-max"],"closeDuration":[1,"close-duration"],"snapbackDuration":[1,"snapback-duration"],"pullFactor":[2,"pull-factor"],"disabled":[4],"nativeRefresher":[32],"state":[32],"complete":[64],"cancel":[64],"getProgress":[64]}]]],["ion-back-button",[[33,"ion-back-button",{"color":[513],"defaultHref":[1025,"default-href"],"disabled":[516],"icon":[1],"text":[1],"type":[1],"routerAnimation":[16]}]]],["ion-toast",[[33,"ion-toast",{"overlayIndex":[2,"overlay-index"],"color":[513],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"duration":[2],"header":[1],"message":[1],"keyboardClose":[4,"keyboard-close"],"position":[1],"buttons":[16],"translucent":[4],"animated":[4],"icon":[1],"htmlAttributes":[16],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["ion-card_5",[[33,"ion-card",{"color":[513],"button":[4],"type":[1],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}],[32,"ion-card-content"],[33,"ion-card-header",{"color":[513],"translucent":[4]}],[33,"ion-card-subtitle",{"color":[513]}],[33,"ion-card-title",{"color":[513]}]]],["ion-item-option_3",[[33,"ion-item-option",{"color":[513],"disabled":[4],"download":[1],"expandable":[4],"href":[1],"rel":[1],"target":[1],"type":[1]}],[32,"ion-item-options",{"side":[1],"fireSwipeEvent":[64]}],[0,"ion-item-sliding",{"disabled":[4],"state":[32],"getOpenAmount":[64],"getSlidingRatio":[64],"open":[64],"close":[64],"closeOpened":[64]}]]],["ion-accordion_2",[[49,"ion-accordion",{"value":[1],"disabled":[4],"readonly":[4],"toggleIcon":[1,"toggle-icon"],"toggleIconSlot":[1,"toggle-icon-slot"],"state":[32],"isNext":[32],"isPrevious":[32]}],[33,"ion-accordion-group",{"animated":[4],"multiple":[4],"value":[1025],"disabled":[4],"readonly":[4],"expand":[1],"requestAccordionToggle":[64],"getAccordions":[64]},[[0,"keydown","onKeydown"]]]]],["ion-breadcrumb_2",[[33,"ion-breadcrumb",{"collapsed":[4],"last":[4],"showCollapsedIndicator":[4,"show-collapsed-indicator"],"color":[1],"active":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"separator":[4],"target":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}],[33,"ion-breadcrumbs",{"color":[1],"maxItems":[2,"max-items"],"itemsBeforeCollapse":[2,"items-before-collapse"],"itemsAfterCollapse":[2,"items-after-collapse"],"collapsed":[32],"activeChanged":[32]},[[0,"collapsedClick","onCollapsedClick"]]]]],["ion-infinite-scroll_2",[[32,"ion-infinite-scroll-content",{"loadingSpinner":[1025,"loading-spinner"],"loadingText":[1,"loading-text"]}],[0,"ion-infinite-scroll",{"threshold":[1],"disabled":[4],"position":[1],"isLoading":[32],"complete":[64]}]]],["ion-reorder_2",[[33,"ion-reorder",null,[[2,"click","onClick"]]],[0,"ion-reorder-group",{"disabled":[4],"state":[32],"complete":[64]}]]],["ion-segment_2",[[33,"ion-segment-button",{"disabled":[4],"layout":[1],"type":[1],"value":[1],"checked":[32]}],[33,"ion-segment",{"color":[513],"disabled":[4],"scrollable":[4],"swipeGesture":[4,"swipe-gesture"],"value":[1025],"selectOnFocus":[4,"select-on-focus"],"activated":[32]},[[0,"keydown","onKeyDown"]]]]],["ion-tab-bar_2",[[33,"ion-tab-button",{"disabled":[4],"download":[1],"href":[1],"rel":[1],"layout":[1025],"selected":[1028],"tab":[1],"target":[1]},[[8,"ionTabBarChanged","onTabBarChanged"]]],[33,"ion-tab-bar",{"color":[513],"selectedTab":[1,"selected-tab"],"translucent":[4],"keyboardVisible":[32]}]]],["ion-chip",[[1,"ion-chip",{"color":[513],"outline":[4],"disabled":[4]}]]],["ion-datetime-button",[[33,"ion-datetime-button",{"color":[513],"disabled":[516],"datetime":[1],"datetimePresentation":[32],"dateText":[32],"timeText":[32],"datetimeActive":[32],"selectedButton":[32]}]]],["ion-input",[[34,"ion-input",{"fireFocusEvents":[4,"fire-focus-events"],"color":[513],"accept":[1],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"autofocus":[4],"clearInput":[4,"clear-input"],"clearOnEdit":[4,"clear-on-edit"],"debounce":[2],"disabled":[4],"enterkeyhint":[1],"inputmode":[1],"max":[8],"maxlength":[2],"min":[8],"minlength":[2],"multiple":[4],"name":[1],"pattern":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"step":[1],"size":[2],"type":[1],"value":[1032],"hasFocus":[32],"setFocus":[64],"setBlur":[64],"getInputElement":[64]}]]],["ion-searchbar",[[34,"ion-searchbar",{"color":[513],"animated":[4],"autocomplete":[1],"autocorrect":[1],"cancelButtonIcon":[1,"cancel-button-icon"],"cancelButtonText":[1,"cancel-button-text"],"clearIcon":[1,"clear-icon"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"placeholder":[1],"searchIcon":[1,"search-icon"],"showCancelButton":[1,"show-cancel-button"],"showClearButton":[1,"show-clear-button"],"spellcheck":[4],"type":[1],"value":[1025],"focused":[32],"noAnimate":[32],"setFocus":[64],"getInputElement":[64]}]]],["ion-toggle",[[33,"ion-toggle",{"color":[513],"name":[1],"checked":[1028],"disabled":[4],"value":[1],"enableOnOffLabels":[4,"enable-on-off-labels"],"activated":[32]}]]],["ion-avatar_3",[[33,"ion-avatar"],[33,"ion-badge",{"color":[513]}],[1,"ion-thumbnail"]]],["ion-textarea",[[34,"ion-textarea",{"fireFocusEvents":[4,"fire-focus-events"],"color":[513],"autocapitalize":[1],"autofocus":[4],"clearOnEdit":[1028,"clear-on-edit"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"cols":[2],"rows":[2],"wrap":[1],"autoGrow":[516,"auto-grow"],"value":[1025],"hasFocus":[32],"setFocus":[64],"setBlur":[64],"getInputElement":[64]}]]],["ion-backdrop",[[33,"ion-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]],["ion-loading",[[34,"ion-loading",{"overlayIndex":[2,"overlay-index"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"message":[1],"cssClass":[1,"css-class"],"duration":[2],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"spinner":[1025],"translucent":[4],"animated":[4],"htmlAttributes":[16],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["ion-modal",[[33,"ion-modal",{"hasController":[4,"has-controller"],"overlayIndex":[2,"overlay-index"],"delegate":[16],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"breakpoints":[16],"initialBreakpoint":[2,"initial-breakpoint"],"backdropBreakpoint":[2,"backdrop-breakpoint"],"handle":[4],"handleBehavior":[1,"handle-behavior"],"component":[1],"componentProps":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"animated":[4],"swipeToClose":[4,"swipe-to-close"],"presentingElement":[16],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"keepContentsMounted":[4,"keep-contents-mounted"],"canDismiss":[4,"can-dismiss"],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"setCurrentBreakpoint":[64],"getCurrentBreakpoint":[64]}]]],["ion-route_4",[[0,"ion-route",{"url":[1],"component":[1],"componentProps":[16],"beforeLeave":[16],"beforeEnter":[16]}],[0,"ion-route-redirect",{"from":[1],"to":[1]}],[0,"ion-router",{"root":[1],"useHash":[4,"use-hash"],"canTransition":[64],"push":[64],"back":[64],"printDebug":[64],"navChanged":[64]},[[8,"popstate","onPopState"],[4,"ionBackButton","onBackButton"]]],[1,"ion-router-link",{"color":[513],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}]]],["ion-col_3",[[1,"ion-col",{"offset":[1],"offsetXs":[1,"offset-xs"],"offsetSm":[1,"offset-sm"],"offsetMd":[1,"offset-md"],"offsetLg":[1,"offset-lg"],"offsetXl":[1,"offset-xl"],"pull":[1],"pullXs":[1,"pull-xs"],"pullSm":[1,"pull-sm"],"pullMd":[1,"pull-md"],"pullLg":[1,"pull-lg"],"pullXl":[1,"pull-xl"],"push":[1],"pushXs":[1,"push-xs"],"pushSm":[1,"push-sm"],"pushMd":[1,"push-md"],"pushLg":[1,"push-lg"],"pushXl":[1,"push-xl"],"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"]},[[9,"resize","onResize"]]],[1,"ion-grid",{"fixed":[4]}],[1,"ion-row"]]],["ion-nav_2",[[1,"ion-nav",{"delegate":[16],"swipeGesture":[1028,"swipe-gesture"],"animated":[4],"animation":[16],"rootParams":[16],"root":[1],"push":[64],"insert":[64],"insertPages":[64],"pop":[64],"popTo":[64],"popToRoot":[64],"removeIndex":[64],"setRoot":[64],"setPages":[64],"setRouteId":[64],"getRouteId":[64],"getActive":[64],"getByIndex":[64],"canGoBack":[64],"getPrevious":[64]}],[0,"ion-nav-link",{"component":[1],"componentProps":[16],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}]]],["ion-slide_2",[[0,"ion-slide"],[36,"ion-slides",{"options":[8],"pager":[4],"scrollbar":[4],"update":[64],"updateAutoHeight":[64],"slideTo":[64],"slideNext":[64],"slidePrev":[64],"getActiveIndex":[64],"getPreviousIndex":[64],"length":[64],"isEnd":[64],"isBeginning":[64],"startAutoplay":[64],"stopAutoplay":[64],"lockSwipeToNext":[64],"lockSwipeToPrev":[64],"lockSwipes":[64],"getSwiper":[64]}]]],["ion-tab_2",[[1,"ion-tab",{"active":[1028],"delegate":[16],"tab":[1],"component":[1],"setActive":[64]}],[1,"ion-tabs",{"useRouter":[1028,"use-router"],"selectedTab":[32],"select":[64],"getTab":[64],"getSelected":[64],"setRouteId":[64],"getRouteId":[64]}]]],["ion-img",[[1,"ion-img",{"alt":[1],"src":[1],"loadSrc":[32],"loadError":[32]}]]],["ion-progress-bar",[[33,"ion-progress-bar",{"type":[1],"reversed":[4],"value":[2],"buffer":[2],"color":[513]}]]],["ion-range",[[33,"ion-range",{"color":[513],"debounce":[2],"name":[1],"dualKnobs":[4,"dual-knobs"],"min":[2],"max":[2],"pin":[4],"pinFormatter":[16],"snaps":[4],"step":[2],"ticks":[4],"activeBarStart":[1026,"active-bar-start"],"disabled":[4],"value":[1026],"ratioA":[32],"ratioB":[32],"pressedKnob":[32]}]]],["ion-split-pane",[[33,"ion-split-pane",{"contentId":[513,"content-id"],"disabled":[4],"when":[8],"visible":[32]}]]],["ion-text",[[1,"ion-text",{"color":[513]}]]],["ion-virtual-scroll",[[0,"ion-virtual-scroll",{"approxItemHeight":[2,"approx-item-height"],"approxHeaderHeight":[2,"approx-header-height"],"approxFooterHeight":[2,"approx-footer-height"],"headerFn":[16],"footerFn":[16],"items":[16],"itemHeight":[16],"headerHeight":[16],"footerHeight":[16],"renderItem":[16],"renderHeader":[16],"renderFooter":[16],"nodeRender":[16],"domRender":[16],"totalHeight":[32],"positionForItem":[64],"checkRange":[64],"checkEnd":[64]},[[9,"resize","onResize"]]]]],["ion-picker-column-internal",[[33,"ion-picker-column-internal",{"items":[16],"value":[1032],"color":[513],"numericInput":[4,"numeric-input"],"isActive":[32],"scrollActiveItemIntoView":[64],"setValue":[64]}]]],["ion-picker-internal",[[33,"ion-picker-internal",null,[[1,"touchstart","preventTouchStartPropagation"]]]]],["ion-radio_2",[[33,"ion-radio",{"color":[513],"name":[1],"disabled":[4],"value":[8],"checked":[32],"buttonTabindex":[32],"setFocus":[64],"setButtonTabindex":[64]}],[0,"ion-radio-group",{"allowEmptySelection":[4,"allow-empty-selection"],"name":[1],"value":[1032]},[[4,"keydown","onKeydown"]]]]],["ion-ripple-effect",[[1,"ion-ripple-effect",{"type":[1],"addRipple":[64]}]]],["ion-button_2",[[33,"ion-button",{"color":[513],"buttonType":[1025,"button-type"],"disabled":[516],"expand":[513],"fill":[1537],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"download":[1],"href":[1],"rel":[1],"shape":[513],"size":[513],"strong":[4],"target":[1],"type":[1],"form":[1]}],[1,"ion-icon",{"mode":[1025],"color":[1],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[513],"src":[1],"icon":[8],"size":[1],"lazy":[4],"sanitize":[4],"svgContent":[32],"isVisible":[32],"ariaLabel":[32]}]]],["ion-datetime_3",[[33,"ion-datetime",{"color":[1],"name":[1],"disabled":[4],"readonly":[4],"isDateEnabled":[16],"min":[1025],"max":[1025],"presentation":[1],"cancelText":[1,"cancel-text"],"doneText":[1,"done-text"],"clearText":[1,"clear-text"],"yearValues":[8,"year-values"],"monthValues":[8,"month-values"],"dayValues":[8,"day-values"],"hourValues":[8,"hour-values"],"minuteValues":[8,"minute-values"],"locale":[1],"firstDayOfWeek":[2,"first-day-of-week"],"titleSelectedDatesFormatter":[16],"multiple":[4],"value":[1025],"showDefaultTitle":[4,"show-default-title"],"showDefaultButtons":[4,"show-default-buttons"],"showClearButton":[4,"show-clear-button"],"showDefaultTimeLabel":[4,"show-default-time-label"],"hourCycle":[1,"hour-cycle"],"size":[1],"preferWheel":[4,"prefer-wheel"],"showMonthAndYear":[32],"activeParts":[32],"workingParts":[32],"isPresented":[32],"isTimePopoverOpen":[32],"confirm":[64],"reset":[64],"cancel":[64]}],[34,"ion-picker",{"overlayIndex":[2,"overlay-index"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"columns":[16],"cssClass":[1,"css-class"],"duration":[2],"showBackdrop":[4,"show-backdrop"],"backdropDismiss":[4,"backdrop-dismiss"],"animated":[4],"htmlAttributes":[16],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"getColumn":[64]}],[32,"ion-picker-column",{"col":[16]}]]],["ion-action-sheet",[[34,"ion-action-sheet",{"overlayIndex":[2,"overlay-index"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"header":[1],"subHeader":[1,"sub-header"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["ion-alert",[[34,"ion-alert",{"overlayIndex":[2,"overlay-index"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"header":[1],"subHeader":[1,"sub-header"],"message":[1],"buttons":[16],"inputs":[1040],"backdropDismiss":[4,"backdrop-dismiss"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},[[4,"keydown","onKeydown"]]]]],["ion-popover",[[33,"ion-popover",{"hasController":[4,"has-controller"],"delegate":[16],"overlayIndex":[2,"overlay-index"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"keyboardClose":[4,"keyboard-close"],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"event":[8],"showBackdrop":[4,"show-backdrop"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"triggerAction":[1,"trigger-action"],"trigger":[1],"size":[1],"dismissOnSelect":[4,"dismiss-on-select"],"reference":[1],"side":[1],"alignment":[1025],"arrow":[4],"isOpen":[4,"is-open"],"keyboardEvents":[4,"keyboard-events"],"keepContentsMounted":[4,"keep-contents-mounted"],"presented":[32],"presentFromTrigger":[64],"present":[64],"dismiss":[64],"getParentPopover":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["ion-checkbox",[[33,"ion-checkbox",{"color":[513],"name":[1],"checked":[1028],"indeterminate":[1028],"disabled":[4],"value":[8]}]]],["ion-select_3",[[33,"ion-select",{"disabled":[4],"cancelText":[1,"cancel-text"],"okText":[1,"ok-text"],"placeholder":[1],"name":[1],"selectedText":[1,"selected-text"],"multiple":[4],"interface":[1],"interfaceOptions":[8,"interface-options"],"compareWith":[1,"compare-with"],"value":[1032],"isExpanded":[32],"open":[64]}],[1,"ion-select-option",{"disabled":[4],"value":[8]}],[34,"ion-select-popover",{"header":[1],"subHeader":[1,"sub-header"],"message":[1],"multiple":[4],"options":[16]},[[0,"ionChange","onSelect"]]]]],["ion-app_8",[[0,"ion-app",{"setFocus":[64]}],[1,"ion-content",{"color":[513],"fullscreen":[4],"forceOverscroll":[1028,"force-overscroll"],"scrollX":[4,"scroll-x"],"scrollY":[4,"scroll-y"],"scrollEvents":[4,"scroll-events"],"getScrollElement":[64],"getBackgroundElement":[64],"scrollToTop":[64],"scrollToBottom":[64],"scrollByPoint":[64],"scrollToPoint":[64]},[[8,"appload","onAppLoad"]]],[36,"ion-footer",{"collapse":[1],"translucent":[4],"keyboardVisible":[32]}],[36,"ion-header",{"collapse":[1],"translucent":[4]}],[1,"ion-router-outlet",{"mode":[1025],"delegate":[16],"animated":[4],"animation":[16],"swipeHandler":[16],"commit":[64],"setRouteId":[64],"getRouteId":[64]}],[33,"ion-title",{"color":[513],"size":[1]}],[33,"ion-toolbar",{"color":[513]},[[0,"ionStyle","childrenStyle"]]],[34,"ion-buttons",{"collapse":[4]}]]],["ion-spinner",[[1,"ion-spinner",{"color":[513],"duration":[2],"name":[1],"paused":[4]}]]],["ion-item_8",[[33,"ion-item-divider",{"color":[513],"sticky":[4]}],[32,"ion-item-group"],[1,"ion-skeleton-text",{"animated":[4]}],[32,"ion-list",{"lines":[1],"inset":[4],"closeSlidingItems":[64]}],[33,"ion-list-header",{"color":[513],"lines":[1]}],[49,"ion-item",{"color":[513],"button":[4],"detail":[4],"detailIcon":[1,"detail-icon"],"disabled":[4],"download":[1],"fill":[1],"shape":[1],"href":[1],"rel":[1],"lines":[1],"counter":[4],"routerAnimation":[16],"routerDirection":[1,"router-direction"],"target":[1],"type":[1],"counterFormatter":[16],"multipleInputs":[32],"focusable":[32],"counterString":[32]},[[0,"ionChange","handleIonChange"],[0,"ionColor","labelColorChanged"],[0,"ionStyle","itemStyle"]]],[34,"ion-label",{"color":[513],"position":[1],"noAnimate":[32]}],[33,"ion-note",{"color":[513]}]]]]'
                        ),
                        E
                      )
                    )
                  ))(0, {
              exclude: ['ion-tabs', 'ion-tab'],
              syncQueue: !0,
              raf: Nt,
              jmp: (Se) => c.runOutsideAngular(Se),
              ael(Se, et, it, Ie) {
                Se[F](et, it, Ie);
              },
              rel(Se, et, it, Ie) {
                Se.removeEventListener(et, it, Ie);
              },
            })
          );
        }
      };
      let se = (() => {
        class a {
          static forRoot(c) {
            return {
              ngModule: a,
              providers: [
                { provide: Uo, useValue: c },
                {
                  provide: o.ip1,
                  useFactory: D,
                  multi: !0,
                  deps: [Uo, pt.K0, o.R0b],
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
          (a.ɵinj = o.cJS({ providers: [gn, Mn, oo], imports: [[pt.ez]] })),
          a
        );
      })();
    },
    8834: (ut, $e, M) => {
      'use strict';
      M.d($e, { c: () => Ne });
      var o = M(5730),
        L = M(3457);
      let Y;
      const ge = (de) =>
          de.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
        Be = (de) => {
          if (void 0 === Y) {
            const Ve = void 0 !== de.style.webkitAnimationName;
            Y = void 0 === de.style.animationName && Ve ? '-webkit-' : '';
          }
          return Y;
        },
        re = (de, ee, Ve) => {
          const fe = ee.startsWith('animation') ? Be(de) : '';
          de.style.setProperty(fe + ee, Ve);
        },
        Fe = (de, ee) => {
          const Ve = ee.startsWith('animation') ? Be(de) : '';
          de.style.removeProperty(Ve + ee);
        },
        ve = [],
        Ee = (de = [], ee) => {
          if (void 0 !== ee) {
            const Ve = Array.isArray(ee) ? ee : [ee];
            return [...de, ...Ve];
          }
          return de;
        },
        Ne = (de) => {
          let ee,
            Ve,
            fe,
            Ce,
            he,
            xe,
            k,
            me,
            oe,
            He,
            je,
            nt,
            Ze,
            le = [],
            z = [],
            ie = [],
            ue = !1,
            V = {},
            U = [],
            A = [],
            $ = {},
            q = 0,
            Le = !1,
            pe = !1,
            be = !0,
            Te = !1,
            qe = !0,
            pt = !1;
          const wt = de,
            dt = [],
            Pt = [],
            At = [],
            We = [],
            Bt = [],
            En = [],
            Gn = [],
            at = [],
            Nn = [],
            Nt = [],
            an =
              'function' == typeof AnimationEffect ||
              (void 0 !== L.w && 'function' == typeof L.w.AnimationEffect),
            qt =
              'function' == typeof Element &&
              'function' == typeof Element.prototype.animate &&
              an,
            Zt = () => Nt,
            Ht = (N, Q) => (
              (Q?.oneTimeCallback ? Pt : dt).push({ c: N, o: Q }), Ze
            ),
            Tt = () => {
              if (qt)
                Nt.forEach((N) => {
                  N.cancel();
                }),
                  (Nt.length = 0);
              else {
                const N = At.slice();
                (0, o.r)(() => {
                  N.forEach((Q) => {
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
            ln = () => {
              Bt.forEach((N) => {
                N?.parentNode && N.parentNode.removeChild(N);
              }),
                (Bt.length = 0);
            },
            Gt = () => (void 0 !== he ? he : k ? k.getFill() : 'both'),
            nn = () =>
              void 0 !== oe
                ? oe
                : void 0 !== xe
                ? xe
                : k
                ? k.getDirection()
                : 'normal',
            rn = () =>
              Le ? 'linear' : void 0 !== fe ? fe : k ? k.getEasing() : 'linear',
            _t = () =>
              pe
                ? 0
                : void 0 !== He
                ? He
                : void 0 !== Ve
                ? Ve
                : k
                ? k.getDuration()
                : 0,
            wn = () => (void 0 !== Ce ? Ce : k ? k.getIterations() : 1),
            An = () =>
              void 0 !== je ? je : void 0 !== ee ? ee : k ? k.getDelay() : 0,
            on = () => {
              0 !== q &&
                (q--,
                0 === q &&
                  ((() => {
                    vn(), at.forEach((Oe) => Oe()), Nn.forEach((Oe) => Oe());
                    const N = be ? 1 : 0,
                      Q = U,
                      ae = A,
                      ke = $;
                    At.forEach((Oe) => {
                      const rt = Oe.classList;
                      Q.forEach((ot) => rt.add(ot)),
                        ae.forEach((ot) => rt.remove(ot));
                      for (const ot in ke)
                        ke.hasOwnProperty(ot) && re(Oe, ot, ke[ot]);
                    }),
                      dt.forEach((Oe) => Oe.c(N, Ze)),
                      Pt.forEach((Oe) => Oe.c(N, Ze)),
                      (Pt.length = 0),
                      (qe = !0),
                      be && (Te = !0),
                      (be = !0);
                  })(),
                  k && k.animationFinish()));
            },
            sn = (N = !0) => {
              ln();
              const Q = ((de) => (
                de.forEach((ee) => {
                  for (const Ve in ee)
                    if (ee.hasOwnProperty(Ve)) {
                      const fe = ee[Ve];
                      if ('easing' === Ve)
                        (ee['animation-timing-function'] = fe), delete ee[Ve];
                      else {
                        const Ce = ge(Ve);
                        Ce !== Ve && ((ee[Ce] = fe), delete ee[Ve]);
                      }
                    }
                }),
                de
              ))(le);
              At.forEach((ae) => {
                if (Q.length > 0) {
                  const ke = ((de = []) =>
                    de
                      .map((ee) => {
                        const Ve = ee.offset,
                          fe = [];
                        for (const Ce in ee)
                          ee.hasOwnProperty(Ce) &&
                            'offset' !== Ce &&
                            fe.push(`${Ce}: ${ee[Ce]};`);
                        return `${100 * Ve}% { ${fe.join(' ')} }`;
                      })
                      .join(' '))(Q);
                  nt =
                    void 0 !== de
                      ? de
                      : ((de) => {
                          let ee = ve.indexOf(de);
                          return (
                            ee < 0 && (ee = ve.push(de) - 1),
                            `ion-animation-${ee}`
                          );
                        })(ke);
                  const Oe = ((de, ee, Ve) => {
                    var fe;
                    const Ce = ((de) => {
                        const ee =
                          void 0 !== de.getRootNode ? de.getRootNode() : de;
                        return ee.head || ee;
                      })(Ve),
                      he = Be(Ve),
                      xe = Ce.querySelector('#' + de);
                    if (xe) return xe;
                    const le = (
                      null !== (fe = Ve.ownerDocument) && void 0 !== fe
                        ? fe
                        : document
                    ).createElement('style');
                    return (
                      (le.id = de),
                      (le.textContent = `@${he}keyframes ${de} { ${ee} } @${he}keyframes ${de}-alt { ${ee} }`),
                      Ce.appendChild(le),
                      le
                    );
                  })(nt, ke, ae);
                  Bt.push(Oe),
                    re(ae, 'animation-duration', `${_t()}ms`),
                    re(ae, 'animation-timing-function', rn()),
                    re(ae, 'animation-delay', `${An()}ms`),
                    re(ae, 'animation-fill-mode', Gt()),
                    re(ae, 'animation-direction', nn());
                  const rt = wn() === 1 / 0 ? 'infinite' : wn().toString();
                  re(ae, 'animation-iteration-count', rt),
                    re(ae, 'animation-play-state', 'paused'),
                    N && re(ae, 'animation-name', `${Oe.id}-alt`),
                    (0, o.r)(() => {
                      re(ae, 'animation-name', Oe.id || null);
                    });
                }
              });
            },
            Tn = (N = !0) => {
              (() => {
                En.forEach((ke) => ke()), Gn.forEach((ke) => ke());
                const N = z,
                  Q = ie,
                  ae = V;
                At.forEach((ke) => {
                  const Oe = ke.classList;
                  N.forEach((rt) => Oe.add(rt)),
                    Q.forEach((rt) => Oe.remove(rt));
                  for (const rt in ae)
                    ae.hasOwnProperty(rt) && re(ke, rt, ae[rt]);
                });
              })(),
                le.length > 0 &&
                  (qt
                    ? (At.forEach((N) => {
                        const Q = N.animate(le, {
                          id: wt,
                          delay: An(),
                          duration: _t(),
                          easing: rn(),
                          iterations: wn(),
                          fill: Gt(),
                          direction: nn(),
                        });
                        Q.pause(), Nt.push(Q);
                      }),
                      Nt.length > 0 &&
                        (Nt[0].onfinish = () => {
                          on();
                        }))
                    : sn(N)),
                (ue = !0);
            },
            fn = (N) => {
              if (((N = Math.min(Math.max(N, 0), 0.9999)), qt))
                Nt.forEach((Q) => {
                  (Q.currentTime =
                    Q.effect.getComputedTiming().delay + _t() * N),
                    Q.pause();
                });
              else {
                const Q = `-${_t() * N}ms`;
                At.forEach((ae) => {
                  le.length > 0 &&
                    (re(ae, 'animation-delay', Q),
                    re(ae, 'animation-play-state', 'paused'));
                });
              }
            },
            On = (N) => {
              Nt.forEach((Q) => {
                Q.effect.updateTiming({
                  delay: An(),
                  duration: _t(),
                  easing: rn(),
                  iterations: wn(),
                  fill: Gt(),
                  direction: nn(),
                });
              }),
                void 0 !== N && fn(N);
            },
            In = (N = !0, Q) => {
              (0, o.r)(() => {
                At.forEach((ae) => {
                  re(ae, 'animation-name', nt || null),
                    re(ae, 'animation-duration', `${_t()}ms`),
                    re(ae, 'animation-timing-function', rn()),
                    re(
                      ae,
                      'animation-delay',
                      void 0 !== Q ? `-${Q * _t()}ms` : `${An()}ms`
                    ),
                    re(ae, 'animation-fill-mode', Gt() || null),
                    re(ae, 'animation-direction', nn() || null);
                  const ke = wn() === 1 / 0 ? 'infinite' : wn().toString();
                  re(ae, 'animation-iteration-count', ke),
                    N && re(ae, 'animation-name', `${nt}-alt`),
                    (0, o.r)(() => {
                      re(ae, 'animation-name', nt || null);
                    });
                });
              });
            },
            hn = (N = !1, Q = !0, ae) => (
              N &&
                We.forEach((ke) => {
                  ke.update(N, Q, ae);
                }),
              qt ? On(ae) : In(Q, ae),
              Ze
            ),
            _r = () => {
              ue &&
                (qt
                  ? Nt.forEach((N) => {
                      N.pause();
                    })
                  : At.forEach((N) => {
                      re(N, 'animation-play-state', 'paused');
                    }),
                (pt = !0));
            },
            ar = () => {
              (me = void 0), on();
            },
            vn = () => {
              me && clearTimeout(me);
            },
            T = (N) =>
              new Promise((Q) => {
                N?.sync &&
                  ((pe = !0), Ht(() => (pe = !1), { oneTimeCallback: !0 })),
                  ue || Tn(),
                  Te && (qt ? (fn(0), On()) : In(), (Te = !1)),
                  qe && ((q = We.length + 1), (qe = !1)),
                  Ht(() => Q(), { oneTimeCallback: !0 }),
                  We.forEach((ae) => {
                    ae.play();
                  }),
                  qt
                    ? (Nt.forEach((N) => {
                        N.play();
                      }),
                      (0 === le.length || 0 === At.length) && on())
                    : (() => {
                        if (
                          (vn(),
                          (0, o.r)(() => {
                            At.forEach((N) => {
                              le.length > 0 &&
                                re(N, 'animation-play-state', 'running');
                            });
                          }),
                          0 === le.length || 0 === At.length)
                        )
                          on();
                        else {
                          const N = An() || 0,
                            Q = _t() || 0,
                            ae = wn() || 1;
                          isFinite(ae) &&
                            (me = setTimeout(ar, N + Q * ae + 100)),
                            ((de, ee) => {
                              let Ve;
                              const fe = { passive: !0 },
                                he = (xe) => {
                                  de === xe.target &&
                                    (Ve && Ve(),
                                    vn(),
                                    (0, o.r)(() => {
                                      At.forEach((N) => {
                                        Fe(N, 'animation-duration'),
                                          Fe(N, 'animation-delay'),
                                          Fe(N, 'animation-play-state');
                                      }),
                                        (0, o.r)(on);
                                    }));
                                };
                              de &&
                                (de.addEventListener(
                                  'webkitAnimationEnd',
                                  he,
                                  fe
                                ),
                                de.addEventListener('animationend', he, fe),
                                (Ve = () => {
                                  de.removeEventListener(
                                    'webkitAnimationEnd',
                                    he,
                                    fe
                                  ),
                                    de.removeEventListener(
                                      'animationend',
                                      he,
                                      fe
                                    );
                                }));
                            })(At[0]);
                        }
                      })(),
                  (pt = !1);
              }),
            j = (N, Q) => {
              const ae = le[0];
              return (
                void 0 === ae || (void 0 !== ae.offset && 0 !== ae.offset)
                  ? (le = [{ offset: 0, [N]: Q }, ...le])
                  : (ae[N] = Q),
                Ze
              );
            };
          return (Ze = {
            parentAnimation: k,
            elements: At,
            childAnimations: We,
            id: wt,
            animationFinish: on,
            from: j,
            to: (N, Q) => {
              const ae = le[le.length - 1];
              return (
                void 0 === ae || (void 0 !== ae.offset && 1 !== ae.offset)
                  ? (le = [...le, { offset: 1, [N]: Q }])
                  : (ae[N] = Q),
                Ze
              );
            },
            fromTo: (N, Q, ae) => j(N, Q).to(N, ae),
            parent: (N) => ((k = N), Ze),
            play: T,
            pause: () => (
              We.forEach((N) => {
                N.pause();
              }),
              _r(),
              Ze
            ),
            stop: () => {
              We.forEach((N) => {
                N.stop();
              }),
                ue && (Tt(), (ue = !1)),
                (Le = !1),
                (pe = !1),
                (qe = !0),
                (oe = void 0),
                (He = void 0),
                (je = void 0),
                (q = 0),
                (Te = !1),
                (be = !0),
                (pt = !1);
            },
            destroy: (N) => (
              We.forEach((Q) => {
                Q.destroy(N);
              }),
              ((N) => {
                Tt(), N && ln();
              })(N),
              (At.length = 0),
              (We.length = 0),
              (le.length = 0),
              (dt.length = 0),
              (Pt.length = 0),
              (ue = !1),
              (qe = !0),
              Ze
            ),
            keyframes: (N) => {
              const Q = le !== N;
              return (
                (le = N),
                Q &&
                  ((N) => {
                    qt
                      ? Zt().forEach((Q) => {
                          if (Q.effect.setKeyframes) Q.effect.setKeyframes(N);
                          else {
                            const ae = new KeyframeEffect(
                              Q.effect.target,
                              N,
                              Q.effect.getTiming()
                            );
                            Q.effect = ae;
                          }
                        })
                      : sn();
                  })(le),
                Ze
              );
            },
            addAnimation: (N) => {
              if (null != N)
                if (Array.isArray(N))
                  for (const Q of N) Q.parent(Ze), We.push(Q);
                else N.parent(Ze), We.push(N);
              return Ze;
            },
            addElement: (N) => {
              if (null != N)
                if (1 === N.nodeType) At.push(N);
                else if (N.length >= 0)
                  for (let Q = 0; Q < N.length; Q++) At.push(N[Q]);
                else console.error('Invalid addElement value');
              return Ze;
            },
            update: hn,
            fill: (N) => ((he = N), hn(!0), Ze),
            direction: (N) => ((xe = N), hn(!0), Ze),
            iterations: (N) => ((Ce = N), hn(!0), Ze),
            duration: (N) => (!qt && 0 === N && (N = 1), (Ve = N), hn(!0), Ze),
            easing: (N) => ((fe = N), hn(!0), Ze),
            delay: (N) => ((ee = N), hn(!0), Ze),
            getWebAnimations: Zt,
            getKeyframes: () => le,
            getFill: Gt,
            getDirection: nn,
            getDelay: An,
            getIterations: wn,
            getEasing: rn,
            getDuration: _t,
            afterAddRead: (N) => (at.push(N), Ze),
            afterAddWrite: (N) => (Nn.push(N), Ze),
            afterClearStyles: (N = []) => {
              for (const Q of N) $[Q] = '';
              return Ze;
            },
            afterStyles: (N = {}) => (($ = N), Ze),
            afterRemoveClass: (N) => ((A = Ee(A, N)), Ze),
            afterAddClass: (N) => ((U = Ee(U, N)), Ze),
            beforeAddRead: (N) => (En.push(N), Ze),
            beforeAddWrite: (N) => (Gn.push(N), Ze),
            beforeClearStyles: (N = []) => {
              for (const Q of N) V[Q] = '';
              return Ze;
            },
            beforeStyles: (N = {}) => ((V = N), Ze),
            beforeRemoveClass: (N) => ((ie = Ee(ie, N)), Ze),
            beforeAddClass: (N) => ((z = Ee(z, N)), Ze),
            onFinish: Ht,
            isRunning: () => 0 !== q && !pt,
            progressStart: (N = !1, Q) => (
              We.forEach((ae) => {
                ae.progressStart(N, Q);
              }),
              _r(),
              (Le = N),
              ue || Tn(),
              hn(!1, !0, Q),
              Ze
            ),
            progressStep: (N) => (
              We.forEach((Q) => {
                Q.progressStep(N);
              }),
              fn(N),
              Ze
            ),
            progressEnd: (N, Q, ae) => (
              (Le = !1),
              We.forEach((ke) => {
                ke.progressEnd(N, Q, ae);
              }),
              void 0 !== ae && (He = ae),
              (Te = !1),
              (be = !0),
              0 === N
                ? ((oe = 'reverse' === nn() ? 'normal' : 'reverse'),
                  'reverse' === oe && (be = !1),
                  qt
                    ? (hn(), fn(1 - Q))
                    : ((je = (1 - Q) * _t() * -1), hn(!1, !1)))
                : 1 === N &&
                  (qt ? (hn(), fn(Q)) : ((je = Q * _t() * -1), hn(!1, !1))),
              void 0 !== N &&
                (Ht(
                  () => {
                    (He = void 0), (oe = void 0), (je = void 0);
                  },
                  { oneTimeCallback: !0 }
                ),
                k || T()),
              Ze
            ),
          });
        };
    },
    4349: (ut, $e, M) => {
      'use strict';
      M.d($e, { G: () => ge });
      class L {
        constructor(re, Fe, Ae, Pe, ve) {
          (this.id = Fe),
            (this.name = Ae),
            (this.disableScroll = ve),
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
      class Y {
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
      const W = 'backdrop-no-scroll',
        ge = new (class o {
          constructor() {
            (this.gestureId = 0),
              (this.requestedStart = new Map()),
              (this.disabledGestures = new Map()),
              (this.disabledScroll = new Set());
          }
          createGesture(re) {
            var Fe;
            return new L(
              this,
              this.newID(),
              re.name,
              null !== (Fe = re.priority) && void 0 !== Fe ? Fe : 0,
              !!re.disableScroll
            );
          }
          createBlocker(re = {}) {
            return new Y(this, this.newID(), re.disable, !!re.disableScroll);
          }
          start(re, Fe, Ae) {
            return this.canStart(re)
              ? (this.requestedStart.set(Fe, Ae), !0)
              : (this.requestedStart.delete(Fe), !1);
          }
          capture(re, Fe, Ae) {
            if (!this.start(re, Fe, Ae)) return !1;
            const Pe = this.requestedStart;
            let ve = -1e4;
            if (
              (Pe.forEach((we) => {
                ve = Math.max(ve, we);
              }),
              ve === Ae)
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
              1 === this.disabledScroll.size && document.body.classList.add(W);
          }
          enableScroll(re) {
            this.disabledScroll.delete(re),
              0 === this.disabledScroll.size &&
                document.body.classList.remove(W);
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
    7593: (ut, $e, M) => {
      'use strict';
      M.r($e),
        M.d($e, {
          MENU_BACK_BUTTON_PRIORITY: () => ge,
          OVERLAY_BACK_BUTTON_PRIORITY: () => W,
          blockHardwareBackButton: () => L,
          startHardwareBackButton: () => Y,
        });
      var o = M(5861);
      const L = () => {
          document.addEventListener('backbutton', () => {});
        },
        Y = () => {
          const Be = document;
          let re = !1;
          Be.addEventListener('backbutton', () => {
            if (re) return;
            let Fe = 0,
              Ae = [];
            const Pe = new CustomEvent('ionBackButton', {
              bubbles: !1,
              detail: {
                register(ce, J) {
                  Ae.push({ priority: ce, handler: J, id: Fe++ });
                },
              },
            });
            Be.dispatchEvent(Pe);
            const ve = (function () {
                var ce = (0, o.Z)(function* (J) {
                  try {
                    if (J?.handler) {
                      const Ee = J.handler(we);
                      null != Ee && (yield Ee);
                    }
                  } catch (Ee) {
                    console.error(Ee);
                  }
                });
                return function (Ee) {
                  return ce.apply(this, arguments);
                };
              })(),
              we = () => {
                if (Ae.length > 0) {
                  let ce = {
                    priority: Number.MIN_SAFE_INTEGER,
                    handler: () => {},
                    id: -1,
                  };
                  Ae.forEach((J) => {
                    J.priority >= ce.priority && (ce = J);
                  }),
                    (re = !0),
                    (Ae = Ae.filter((J) => J.id !== ce.id)),
                    ve(ce).then(() => (re = !1));
                }
              };
            we();
          });
        },
        W = 100,
        ge = 99;
    },
    5730: (ut, $e, M) => {
      'use strict';
      M.d($e, {
        a: () => re,
        b: () => Fe,
        c: () => Y,
        d: () => J,
        e: () => Ee,
        f: () => ce,
        g: () => Ae,
        h: () => Ce,
        i: () => Be,
        j: () => W,
        k: () => we,
        l: () => Ne,
        m: () => ve,
        n: () => de,
        o: () => fe,
        p: () => Ve,
        q: () => he,
        r: () => Pe,
        s: () => xe,
        t: () => o,
        u: () => ee,
      });
      const o = (le, z = 0) =>
          new Promise((ie) => {
            L(le, z, ie);
          }),
        L = (le, z = 0, ie) => {
          let ue, k;
          const V = { passive: !0 },
            A = () => {
              ue && ue();
            },
            $ = (q) => {
              (void 0 === q || le === q.target) && (A(), ie(q));
            };
          return (
            le &&
              (le.addEventListener('webkitTransitionEnd', $, V),
              le.addEventListener('transitionend', $, V),
              (k = setTimeout($, z + 500)),
              (ue = () => {
                k && (clearTimeout(k), (k = void 0)),
                  le.removeEventListener('webkitTransitionEnd', $, V),
                  le.removeEventListener('transitionend', $, V);
              })),
            A
          );
        },
        Y = (le, z) => {
          le.componentOnReady
            ? le.componentOnReady().then((ie) => z(ie))
            : Pe(() => z(le));
        },
        W = (le, z = []) => {
          const ie = {};
          return (
            z.forEach((ue) => {
              le.hasAttribute(ue) &&
                (null !== le.getAttribute(ue) && (ie[ue] = le.getAttribute(ue)),
                le.removeAttribute(ue));
            }),
            ie
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
        Be = (le, z) => {
          let ie = ge;
          return (
            z && z.length > 0 && (ie = ie.filter((ue) => !z.includes(ue))),
            W(le, ie)
          );
        },
        re = (le, z, ie, ue) => {
          var k;
          if (typeof window < 'u') {
            const U =
              null === (k = window?.Ionic) || void 0 === k ? void 0 : k.config;
            if (U) {
              const A = U.get('_ael');
              if (A) return A(le, z, ie, ue);
              if (U._ael) return U._ael(le, z, ie, ue);
            }
          }
          return le.addEventListener(z, ie, ue);
        },
        Fe = (le, z, ie, ue) => {
          var k;
          if (typeof window < 'u') {
            const U =
              null === (k = window?.Ionic) || void 0 === k ? void 0 : k.config;
            if (U) {
              const A = U.get('_rel');
              if (A) return A(le, z, ie, ue);
              if (U._rel) return U._rel(le, z, ie, ue);
            }
          }
          return le.removeEventListener(z, ie, ue);
        },
        Ae = (le, z = le) => le.shadowRoot || z,
        Pe = (le) =>
          'function' == typeof __zone_symbol__requestAnimationFrame
            ? __zone_symbol__requestAnimationFrame(le)
            : 'function' == typeof requestAnimationFrame
            ? requestAnimationFrame(le)
            : setTimeout(le),
        ve = (le) => !!le.shadowRoot && !!le.attachShadow,
        we = (le) => {
          const z = le.closest('ion-item');
          return z ? z.querySelector('ion-label') : null;
        },
        ce = (le) => {
          if ((le.focus(), le.classList.contains('ion-focusable'))) {
            const z = le.closest('ion-app');
            z && z.setFocus([le]);
          }
        },
        J = (le, z) => {
          let ie;
          const ue = le.getAttribute('aria-labelledby'),
            k = le.id;
          let V = null !== ue && '' !== ue.trim() ? ue : z + '-lbl',
            U =
              null !== ue && '' !== ue.trim()
                ? document.getElementById(ue)
                : we(le);
          return (
            U
              ? (null === ue && (U.id = V),
                (ie = U.textContent),
                U.setAttribute('aria-hidden', 'true'))
              : '' !== k.trim() &&
                ((U = document.querySelector(`label[for="${k}"]`)),
                U &&
                  ('' !== U.id ? (V = U.id) : (U.id = V = `${k}-lbl`),
                  (ie = U.textContent))),
            { label: U, labelId: V, labelText: ie }
          );
        },
        Ee = (le, z, ie, ue, k) => {
          if (le || ve(z)) {
            let V = z.querySelector('input.aux-input');
            V ||
              ((V = z.ownerDocument.createElement('input')),
              (V.type = 'hidden'),
              V.classList.add('aux-input'),
              z.appendChild(V)),
              (V.disabled = k),
              (V.name = ie),
              (V.value = ue || '');
          }
        },
        Ne = (le, z, ie) => Math.max(le, Math.min(z, ie)),
        de = (le, z) => {
          if (!le) {
            const ie = 'ASSERT: ' + z;
            throw (console.error(ie), new Error(ie));
          }
        },
        ee = (le) => le.timeStamp || Date.now(),
        Ve = (le) => {
          if (le) {
            const z = le.changedTouches;
            if (z && z.length > 0) {
              const ie = z[0];
              return { x: ie.clientX, y: ie.clientY };
            }
            if (void 0 !== le.pageX) return { x: le.pageX, y: le.pageY };
          }
          return { x: 0, y: 0 };
        },
        fe = (le) => {
          const z = 'rtl' === document.dir;
          switch (le) {
            case 'start':
              return z;
            case 'end':
              return !z;
            default:
              throw new Error(
                `"${le}" is not a valid value for [side]. Use "start" or "end" instead.`
              );
          }
        },
        Ce = (le, z) => {
          const ie = le._original || le;
          return { _original: le, emit: he(ie.emit.bind(ie), z) };
        },
        he = (le, z = 0) => {
          let ie;
          return (...ue) => {
            clearTimeout(ie), (ie = setTimeout(le, z, ...ue));
          };
        },
        xe = (le, z) => {
          if ((le ?? (le = {}), z ?? (z = {}), le === z)) return !0;
          const ie = Object.keys(le);
          if (ie.length !== Object.keys(z).length) return !1;
          for (const ue of ie) if (!(ue in z) || le[ue] !== z[ue]) return !1;
          return !0;
        };
    },
    4292: (ut, $e, M) => {
      'use strict';
      M.d($e, { m: () => ve });
      var o = M(5861),
        L = M(7593),
        Y = M(5730),
        W = M(9658),
        ge = M(8834);
      const Be = (we) => (0, ge.c)().duration(we ? 400 : 300),
        re = (we) => {
          let ce, J;
          const Ee = we.width + 8,
            Ne = (0, ge.c)(),
            de = (0, ge.c)();
          we.isEndSide
            ? ((ce = Ee + 'px'), (J = '0px'))
            : ((ce = -Ee + 'px'), (J = '0px')),
            Ne.addElement(we.menuInnerEl).fromTo(
              'transform',
              `translateX(${ce})`,
              `translateX(${J})`
            );
          const Ve = 'ios' === (0, W.b)(we),
            fe = Ve ? 0.2 : 0.25;
          return (
            de.addElement(we.backdropEl).fromTo('opacity', 0.01, fe),
            Be(Ve).addAnimation([Ne, de])
          );
        },
        Fe = (we) => {
          let ce, J;
          const Ee = (0, W.b)(we),
            Ne = we.width;
          we.isEndSide
            ? ((ce = -Ne + 'px'), (J = Ne + 'px'))
            : ((ce = Ne + 'px'), (J = -Ne + 'px'));
          const de = (0, ge.c)()
              .addElement(we.menuInnerEl)
              .fromTo('transform', `translateX(${J})`, 'translateX(0px)'),
            ee = (0, ge.c)()
              .addElement(we.contentEl)
              .fromTo('transform', 'translateX(0px)', `translateX(${ce})`),
            Ve = (0, ge.c)()
              .addElement(we.backdropEl)
              .fromTo('opacity', 0.01, 0.32);
          return Be('ios' === Ee).addAnimation([de, ee, Ve]);
        },
        Ae = (we) => {
          const ce = (0, W.b)(we),
            J = we.width * (we.isEndSide ? -1 : 1) + 'px',
            Ee = (0, ge.c)()
              .addElement(we.contentEl)
              .fromTo('transform', 'translateX(0px)', `translateX(${J})`);
          return Be('ios' === ce).addAnimation(Ee);
        },
        ve = (() => {
          const we = new Map(),
            ce = [],
            J = (function () {
              var me = (0, o.Z)(function* (oe) {
                const He = yield Ce(oe);
                return !!He && He.open();
              });
              return function (He) {
                return me.apply(this, arguments);
              };
            })(),
            Ee = (function () {
              var me = (0, o.Z)(function* (oe) {
                const He = yield void 0 !== oe ? Ce(oe) : he();
                return void 0 !== He && He.close();
              });
              return function (He) {
                return me.apply(this, arguments);
              };
            })(),
            Ne = (function () {
              var me = (0, o.Z)(function* (oe) {
                const He = yield Ce(oe);
                return !!He && He.toggle();
              });
              return function (He) {
                return me.apply(this, arguments);
              };
            })(),
            de = (function () {
              var me = (0, o.Z)(function* (oe, He) {
                const je = yield Ce(He);
                return je && (je.disabled = !oe), je;
              });
              return function (He, je) {
                return me.apply(this, arguments);
              };
            })(),
            ee = (function () {
              var me = (0, o.Z)(function* (oe, He) {
                const je = yield Ce(He);
                return je && (je.swipeGesture = oe), je;
              });
              return function (He, je) {
                return me.apply(this, arguments);
              };
            })(),
            Ve = (function () {
              var me = (0, o.Z)(function* (oe) {
                if (null != oe) {
                  const He = yield Ce(oe);
                  return void 0 !== He && He.isOpen();
                }
                return void 0 !== (yield he());
              });
              return function (He) {
                return me.apply(this, arguments);
              };
            })(),
            fe = (function () {
              var me = (0, o.Z)(function* (oe) {
                const He = yield Ce(oe);
                return !!He && !He.disabled;
              });
              return function (He) {
                return me.apply(this, arguments);
              };
            })(),
            Ce = (function () {
              var me = (0, o.Z)(function* (oe) {
                return (
                  yield pe(),
                  'start' === oe || 'end' === oe
                    ? Le((be) => be.side === oe && !be.disabled) ||
                      Le((be) => be.side === oe)
                    : null != oe
                    ? Le((je) => je.menuId === oe)
                    : Le((je) => !je.disabled) ||
                      (ce.length > 0 ? ce[0].el : void 0)
                );
              });
              return function (He) {
                return me.apply(this, arguments);
              };
            })(),
            he = (function () {
              var me = (0, o.Z)(function* () {
                return yield pe(), A();
              });
              return function () {
                return me.apply(this, arguments);
              };
            })(),
            xe = (function () {
              var me = (0, o.Z)(function* () {
                return yield pe(), $();
              });
              return function () {
                return me.apply(this, arguments);
              };
            })(),
            le = (function () {
              var me = (0, o.Z)(function* () {
                return yield pe(), q();
              });
              return function () {
                return me.apply(this, arguments);
              };
            })(),
            z = (me, oe) => {
              we.set(me, oe);
            },
            k = (me) => {
              const oe = me.side;
              ce.filter((He) => He.side === oe && He !== me).forEach(
                (He) => (He.disabled = !0)
              );
            },
            V = (function () {
              var me = (0, o.Z)(function* (oe, He, je) {
                if (q()) return !1;
                if (He) {
                  const be = yield he();
                  be && oe.el !== be && (yield be.setOpen(!1, !1));
                }
                return oe._setOpen(He, je);
              });
              return function (He, je, be) {
                return me.apply(this, arguments);
              };
            })(),
            A = () => Le((me) => me._isOpen),
            $ = () => ce.map((me) => me.el),
            q = () => ce.some((me) => me.isAnimating),
            Le = (me) => {
              const oe = ce.find(me);
              if (void 0 !== oe) return oe.el;
            },
            pe = () =>
              Promise.all(
                Array.from(document.querySelectorAll('ion-menu')).map(
                  (me) => new Promise((oe) => (0, Y.c)(me, oe))
                )
              );
          return (
            z('reveal', Ae),
            z('push', Fe),
            z('overlay', re),
            typeof document < 'u' &&
              document.addEventListener('ionBackButton', (me) => {
                const oe = A();
                oe &&
                  me.detail.register(L.MENU_BACK_BUTTON_PRIORITY, () =>
                    oe.close()
                  );
              }),
            {
              registerAnimation: z,
              get: Ce,
              getMenus: xe,
              getOpen: he,
              isEnabled: fe,
              swipeGesture: ee,
              isAnimating: le,
              isOpen: Ve,
              enable: de,
              toggle: Ne,
              close: Ee,
              open: J,
              _getOpenSync: A,
              _createAnimation: (me, oe) => {
                const He = we.get(me);
                if (!He) throw new Error('animation not registered');
                return He(oe);
              },
              _register: (me) => {
                ce.indexOf(me) < 0 && (me.disabled || k(me), ce.push(me));
              },
              _unregister: (me) => {
                const oe = ce.indexOf(me);
                oe > -1 && ce.splice(oe, 1);
              },
              _setOpen: V,
              _setActiveMenu: k,
            }
          );
        })();
    },
    3457: (ut, $e, M) => {
      'use strict';
      M.d($e, { w: () => o });
      const o = typeof window < 'u' ? window : void 0;
    },
    1308: (ut, $e, M) => {
      'use strict';
      M.d($e, {
        B: () => xn,
        H: () => At,
        a: () => be,
        b: () => Ct,
        c: () => Qt,
        e: () => tr,
        f: () => pn,
        g: () => Te,
        h: () => dt,
        i: () => Vt,
        j: () => nn,
        k: () => Kt,
        p: () => Ne,
        r: () => ir,
        s: () => J,
      });
      var o = M(5861);
      let Y,
        W,
        ge,
        Be = !1,
        re = !1,
        Fe = !1,
        Ae = !1,
        Pe = !1;
      const ve = typeof window < 'u' ? window : {},
        we = ve.document || { head: {} },
        ce = {
          $flags$: 0,
          $resourcesUrl$: '',
          jmp: (T) => T(),
          raf: (T) => requestAnimationFrame(T),
          ael: (T, B, j, K) => T.addEventListener(B, j, K),
          rel: (T, B, j, K) => T.removeEventListener(B, j, K),
          ce: (T, B) => new CustomEvent(T, B),
        },
        J = (T) => {
          Object.assign(ce, T);
        },
        Ne = (T) => Promise.resolve(T),
        de = (() => {
          try {
            return (
              new CSSStyleSheet(),
              'function' == typeof new CSSStyleSheet().replaceSync
            );
          } catch {}
          return !1;
        })(),
        ee = (T, B, j, K) => {
          j &&
            j.map(([ye, N, Q]) => {
              const ae = fe(T, ye),
                ke = Ve(B, Q),
                Oe = Ce(ye);
              ce.ael(ae, N, ke, Oe),
                (B.$rmListeners$ = B.$rmListeners$ || []).push(() =>
                  ce.rel(ae, N, ke, Oe)
                );
            });
        },
        Ve = (T, B) => (j) => {
          try {
            256 & T.$flags$
              ? T.$lazyInstance$[B](j)
              : (T.$queuedListeners$ = T.$queuedListeners$ || []).push([B, j]);
          } catch (K) {
            On(K);
          }
        },
        fe = (T, B) => (4 & B ? we : 8 & B ? ve : 16 & B ? we.body : T),
        Ce = (T) => 0 != (2 & T),
        ie = 's-id',
        ue = 'sty-id',
        k = 'c-id',
        U = 'http://www.w3.org/1999/xlink',
        q = new WeakMap(),
        Le = (T, B, j) => {
          let K = dr.get(T);
          de && j
            ? ((K = K || new CSSStyleSheet()),
              'string' == typeof K ? (K = B) : K.replaceSync(B))
            : (K = B),
            dr.set(T, K);
        },
        pe = (T, B, j, K) => {
          let ye = oe(B, j);
          const N = dr.get(ye);
          if (((T = 11 === T.nodeType ? T : we), N))
            if ('string' == typeof N) {
              let ae,
                Q = q.get((T = T.head || T));
              Q || q.set(T, (Q = new Set())),
                Q.has(ye) ||
                  (T.host && (ae = T.querySelector(`[${ue}="${ye}"]`))
                    ? (ae.innerHTML = N)
                    : ((ae = we.createElement('style')),
                      (ae.innerHTML = N),
                      T.insertBefore(ae, T.querySelector('link'))),
                  Q && Q.add(ye));
            } else
              T.adoptedStyleSheets.includes(N) ||
                (T.adoptedStyleSheets = [...T.adoptedStyleSheets, N]);
          return ye;
        },
        oe = (T, B) =>
          'sc-' + (B && 32 & T.$flags$ ? T.$tagName$ + '-' + B : T.$tagName$),
        He = (T) => T.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, '$1{'),
        be = (T) => Sr.push(T),
        Te = (T) => sn(T).$modeName$,
        qe = {},
        wt = (T) => 'object' == (T = typeof T) || 'function' === T,
        dt = (T, B, ...j) => {
          let K = null,
            ye = null,
            N = null,
            Q = !1,
            ae = !1;
          const ke = [],
            Oe = (ot) => {
              for (let Je = 0; Je < ot.length; Je++)
                (K = ot[Je]),
                  Array.isArray(K)
                    ? Oe(K)
                    : null != K &&
                      'boolean' != typeof K &&
                      ((Q = 'function' != typeof T && !wt(K)) &&
                        (K = String(K)),
                      Q && ae
                        ? (ke[ke.length - 1].$text$ += K)
                        : ke.push(Q ? Pt(null, K) : K),
                      (ae = Q));
            };
          if ((Oe(j), B)) {
            B.key && (ye = B.key), B.name && (N = B.name);
            {
              const ot = B.className || B.class;
              ot &&
                (B.class =
                  'object' != typeof ot
                    ? ot
                    : Object.keys(ot)
                        .filter((Je) => ot[Je])
                        .join(' '));
            }
          }
          if ('function' == typeof T) return T(null === B ? {} : B, ke, Bt);
          const rt = Pt(T, null);
          return (
            (rt.$attrs$ = B),
            ke.length > 0 && (rt.$children$ = ke),
            (rt.$key$ = ye),
            (rt.$name$ = N),
            rt
          );
        },
        Pt = (T, B) => ({
          $flags$: 0,
          $tag$: T,
          $text$: B,
          $elm$: null,
          $children$: null,
          $attrs$: null,
          $key$: null,
          $name$: null,
        }),
        At = {},
        Bt = {
          forEach: (T, B) => T.map(En).forEach(B),
          map: (T, B) => T.map(En).map(B).map(Gn),
        },
        En = (T) => ({
          vattrs: T.$attrs$,
          vchildren: T.$children$,
          vkey: T.$key$,
          vname: T.$name$,
          vtag: T.$tag$,
          vtext: T.$text$,
        }),
        Gn = (T) => {
          if ('function' == typeof T.vtag) {
            const j = Object.assign({}, T.vattrs);
            return (
              T.vkey && (j.key = T.vkey),
              T.vname && (j.name = T.vname),
              dt(T.vtag, j, ...(T.vchildren || []))
            );
          }
          const B = Pt(T.vtag, T.vtext);
          return (
            (B.$attrs$ = T.vattrs),
            (B.$children$ = T.vchildren),
            (B.$key$ = T.vkey),
            (B.$name$ = T.vname),
            B
          );
        },
        at = (T, B, j, K, ye, N) => {
          if (j !== K) {
            let Q = fn(T, B),
              ae = B.toLowerCase();
            if ('class' === B) {
              const ke = T.classList,
                Oe = Nt(j),
                rt = Nt(K);
              ke.remove(...Oe.filter((ot) => ot && !rt.includes(ot))),
                ke.add(...rt.filter((ot) => ot && !Oe.includes(ot)));
            } else if ('style' === B) {
              for (const ke in j)
                (!K || null == K[ke]) &&
                  (ke.includes('-')
                    ? T.style.removeProperty(ke)
                    : (T.style[ke] = ''));
              for (const ke in K)
                (!j || K[ke] !== j[ke]) &&
                  (ke.includes('-')
                    ? T.style.setProperty(ke, K[ke])
                    : (T.style[ke] = K[ke]));
            } else if ('key' !== B)
              if ('ref' === B) K && K(T);
              else if (Q || 'o' !== B[0] || 'n' !== B[1]) {
                const ke = wt(K);
                if ((Q || (ke && null !== K)) && !ye)
                  try {
                    if (T.tagName.includes('-')) T[B] = K;
                    else {
                      const rt = K ?? '';
                      'list' === B
                        ? (Q = !1)
                        : (null == j || T[B] != rt) && (T[B] = rt);
                    }
                  } catch {}
                let Oe = !1;
                ae !== (ae = ae.replace(/^xlink\:?/, '')) &&
                  ((B = ae), (Oe = !0)),
                  null == K || !1 === K
                    ? (!1 !== K || '' === T.getAttribute(B)) &&
                      (Oe ? T.removeAttributeNS(U, B) : T.removeAttribute(B))
                    : (!Q || 4 & N || ye) &&
                      !ke &&
                      ((K = !0 === K ? '' : K),
                      Oe ? T.setAttributeNS(U, B, K) : T.setAttribute(B, K));
              } else
                (B =
                  '-' === B[2]
                    ? B.slice(3)
                    : fn(ve, ae)
                    ? ae.slice(2)
                    : ae[2] + B.slice(3)),
                  j && ce.rel(T, B, j, !1),
                  K && ce.ael(T, B, K, !1);
          }
        },
        Nn = /\s/,
        Nt = (T) => (T ? T.split(Nn) : []),
        an = (T, B, j, K) => {
          const ye =
              11 === B.$elm$.nodeType && B.$elm$.host ? B.$elm$.host : B.$elm$,
            N = (T && T.$attrs$) || qe,
            Q = B.$attrs$ || qe;
          for (K in N) K in Q || at(ye, K, N[K], void 0, j, B.$flags$);
          for (K in Q) at(ye, K, N[K], Q[K], j, B.$flags$);
        },
        qt = (T, B, j, K) => {
          const ye = B.$children$[j];
          let Q,
            ae,
            ke,
            N = 0;
          if (
            (Be ||
              ((Fe = !0),
              'slot' === ye.$tag$ &&
                (Y && K.classList.add(Y + '-s'),
                (ye.$flags$ |= ye.$children$ ? 2 : 1))),
            null !== ye.$text$)
          )
            Q = ye.$elm$ = we.createTextNode(ye.$text$);
          else if (1 & ye.$flags$) Q = ye.$elm$ = we.createTextNode('');
          else {
            if (
              (Ae || (Ae = 'svg' === ye.$tag$),
              (Q = ye.$elm$ =
                we.createElementNS(
                  Ae
                    ? 'http://www.w3.org/2000/svg'
                    : 'http://www.w3.org/1999/xhtml',
                  2 & ye.$flags$ ? 'slot-fb' : ye.$tag$
                )),
              Ae && 'foreignObject' === ye.$tag$ && (Ae = !1),
              an(null, ye, Ae),
              ((T) => null != T)(Y) &&
                Q['s-si'] !== Y &&
                Q.classList.add((Q['s-si'] = Y)),
              ye.$children$)
            )
              for (N = 0; N < ye.$children$.length; ++N)
                (ae = qt(T, ye, N, Q)), ae && Q.appendChild(ae);
            'svg' === ye.$tag$
              ? (Ae = !1)
              : 'foreignObject' === Q.tagName && (Ae = !0);
          }
          return (
            (Q['s-hn'] = ge),
            3 & ye.$flags$ &&
              ((Q['s-sr'] = !0),
              (Q['s-cr'] = W),
              (Q['s-sn'] = ye.$name$ || ''),
              (ke = T && T.$children$ && T.$children$[j]),
              ke && ke.$tag$ === ye.$tag$ && T.$elm$ && Ln(T.$elm$, !1)),
            Q
          );
        },
        Ln = (T, B) => {
          ce.$flags$ |= 1;
          const j = T.childNodes;
          for (let K = j.length - 1; K >= 0; K--) {
            const ye = j[K];
            ye['s-hn'] !== ge &&
              ye['s-ol'] &&
              (Ht(ye).insertBefore(ye, Xe(ye)),
              ye['s-ol'].remove(),
              (ye['s-ol'] = void 0),
              (Fe = !0)),
              B && Ln(ye, B);
          }
          ce.$flags$ &= -2;
        },
        Zt = (T, B, j, K, ye, N) => {
          let ae,
            Q = (T['s-cr'] && T['s-cr'].parentNode) || T;
          for (
            Q.shadowRoot && Q.tagName === ge && (Q = Q.shadowRoot);
            ye <= N;
            ++ye
          )
            K[ye] &&
              ((ae = qt(null, j, ye, T)),
              ae && ((K[ye].$elm$ = ae), Q.insertBefore(ae, Xe(B))));
        },
        kn = (T, B, j, K, ye) => {
          for (; B <= j; ++B)
            (K = T[B]) &&
              ((ye = K.$elm$),
              Xt(K),
              (re = !0),
              ye['s-ol'] ? ye['s-ol'].remove() : Ln(ye, !0),
              ye.remove());
        },
        ft = (T, B) =>
          T.$tag$ === B.$tag$ &&
          ('slot' === T.$tag$ ? T.$name$ === B.$name$ : T.$key$ === B.$key$),
        Xe = (T) => (T && T['s-ol']) || T,
        Ht = (T) => (T['s-ol'] ? T['s-ol'] : T).parentNode,
        Yt = (T, B) => {
          const j = (B.$elm$ = T.$elm$),
            K = T.$children$,
            ye = B.$children$,
            N = B.$tag$,
            Q = B.$text$;
          let ae;
          null === Q
            ? ((Ae = 'svg' === N || ('foreignObject' !== N && Ae)),
              'slot' === N || an(T, B, Ae),
              null !== K && null !== ye
                ? ((T, B, j, K) => {
                    let jt,
                      Vn,
                      ye = 0,
                      N = 0,
                      Q = 0,
                      ae = 0,
                      ke = B.length - 1,
                      Oe = B[0],
                      rt = B[ke],
                      ot = K.length - 1,
                      Je = K[0],
                      Lt = K[ot];
                    for (; ye <= ke && N <= ot; )
                      if (null == Oe) Oe = B[++ye];
                      else if (null == rt) rt = B[--ke];
                      else if (null == Je) Je = K[++N];
                      else if (null == Lt) Lt = K[--ot];
                      else if (ft(Oe, Je))
                        Yt(Oe, Je), (Oe = B[++ye]), (Je = K[++N]);
                      else if (ft(rt, Lt))
                        Yt(rt, Lt), (rt = B[--ke]), (Lt = K[--ot]);
                      else if (ft(Oe, Lt))
                        ('slot' === Oe.$tag$ || 'slot' === Lt.$tag$) &&
                          Ln(Oe.$elm$.parentNode, !1),
                          Yt(Oe, Lt),
                          T.insertBefore(Oe.$elm$, rt.$elm$.nextSibling),
                          (Oe = B[++ye]),
                          (Lt = K[--ot]);
                      else if (ft(rt, Je))
                        ('slot' === Oe.$tag$ || 'slot' === Lt.$tag$) &&
                          Ln(rt.$elm$.parentNode, !1),
                          Yt(rt, Je),
                          T.insertBefore(rt.$elm$, Oe.$elm$),
                          (rt = B[--ke]),
                          (Je = K[++N]);
                      else {
                        for (Q = -1, ae = ye; ae <= ke; ++ae)
                          if (
                            B[ae] &&
                            null !== B[ae].$key$ &&
                            B[ae].$key$ === Je.$key$
                          ) {
                            Q = ae;
                            break;
                          }
                        Q >= 0
                          ? ((Vn = B[Q]),
                            Vn.$tag$ !== Je.$tag$
                              ? (jt = qt(B && B[N], j, Q, T))
                              : (Yt(Vn, Je), (B[Q] = void 0), (jt = Vn.$elm$)),
                            (Je = K[++N]))
                          : ((jt = qt(B && B[N], j, N, T)), (Je = K[++N])),
                          jt && Ht(Oe.$elm$).insertBefore(jt, Xe(Oe.$elm$));
                      }
                    ye > ke
                      ? Zt(
                          T,
                          null == K[ot + 1] ? null : K[ot + 1].$elm$,
                          j,
                          K,
                          N,
                          ot
                        )
                      : N > ot && kn(B, ye, ke);
                  })(j, K, B, ye)
                : null !== ye
                ? (null !== T.$text$ && (j.textContent = ''),
                  Zt(j, null, B, ye, 0, ye.length - 1))
                : null !== K && kn(K, 0, K.length - 1),
              Ae && 'svg' === N && (Ae = !1))
            : (ae = j['s-cr'])
            ? (ae.parentNode.textContent = Q)
            : T.$text$ !== Q && (j.data = Q);
        },
        Tt = (T) => {
          const B = T.childNodes;
          let j, K, ye, N, Q, ae;
          for (K = 0, ye = B.length; K < ye; K++)
            if (((j = B[K]), 1 === j.nodeType)) {
              if (j['s-sr'])
                for (Q = j['s-sn'], j.hidden = !1, N = 0; N < ye; N++)
                  if (
                    ((ae = B[N].nodeType),
                    B[N]['s-hn'] !== j['s-hn'] || '' !== Q)
                  ) {
                    if (1 === ae && Q === B[N].getAttribute('slot')) {
                      j.hidden = !0;
                      break;
                    }
                  } else if (
                    1 === ae ||
                    (3 === ae && '' !== B[N].textContent.trim())
                  ) {
                    j.hidden = !0;
                    break;
                  }
              Tt(j);
            }
        },
        ln = [],
        bn = (T) => {
          let B,
            j,
            K,
            ye,
            N,
            Q,
            ae = 0;
          const ke = T.childNodes,
            Oe = ke.length;
          for (; ae < Oe; ae++) {
            if (((B = ke[ae]), B['s-sr'] && (j = B['s-cr']) && j.parentNode))
              for (
                K = j.parentNode.childNodes, ye = B['s-sn'], Q = K.length - 1;
                Q >= 0;
                Q--
              )
                (j = K[Q]),
                  !j['s-cn'] &&
                    !j['s-nr'] &&
                    j['s-hn'] !== B['s-hn'] &&
                    (mt(j, ye)
                      ? ((N = ln.find((rt) => rt.$nodeToRelocate$ === j)),
                        (re = !0),
                        (j['s-sn'] = j['s-sn'] || ye),
                        N
                          ? (N.$slotRefNode$ = B)
                          : ln.push({ $slotRefNode$: B, $nodeToRelocate$: j }),
                        j['s-sr'] &&
                          ln.map((rt) => {
                            mt(rt.$nodeToRelocate$, j['s-sn']) &&
                              ((N = ln.find((ot) => ot.$nodeToRelocate$ === j)),
                              N &&
                                !rt.$slotRefNode$ &&
                                (rt.$slotRefNode$ = N.$slotRefNode$));
                          }))
                      : ln.some((rt) => rt.$nodeToRelocate$ === j) ||
                        ln.push({ $nodeToRelocate$: j }));
            1 === B.nodeType && bn(B);
          }
        },
        mt = (T, B) =>
          1 === T.nodeType
            ? (null === T.getAttribute('slot') && '' === B) ||
              T.getAttribute('slot') === B
            : T['s-sn'] === B || '' === B,
        Xt = (T) => {
          T.$attrs$ && T.$attrs$.ref && T.$attrs$.ref(null),
            T.$children$ && T.$children$.map(Xt);
        },
        Vt = (T) => sn(T).$hostElement$,
        tr = (T, B, j) => {
          const K = Vt(T);
          return {
            emit: (ye) =>
              $n(K, B, {
                bubbles: !!(4 & j),
                composed: !!(2 & j),
                cancelable: !!(1 & j),
                detail: ye,
              }),
          };
        },
        $n = (T, B, j) => {
          const K = ce.ce(B, j);
          return T.dispatchEvent(K), K;
        },
        zn = (T, B) => {
          B &&
            !T.$onRenderResolve$ &&
            B['s-p'] &&
            B['s-p'].push(new Promise((j) => (T.$onRenderResolve$ = j)));
        },
        yn = (T, B) => {
          if (((T.$flags$ |= 16), !(4 & T.$flags$)))
            return zn(T, T.$ancestorComponent$), Qt(() => St(T, B));
          T.$flags$ |= 512;
        },
        St = (T, B) => {
          const K = T.$lazyInstance$;
          let ye;
          return (
            B &&
              ((T.$flags$ |= 256),
              T.$queuedListeners$ &&
                (T.$queuedListeners$.map(([N, Q]) => _t(K, N, Q)),
                (T.$queuedListeners$ = null)),
              (ye = _t(K, 'componentWillLoad'))),
            (ye = wn(ye, () => _t(K, 'componentWillRender'))),
            wn(ye, () => nr(T, K, B))
          );
        },
        nr = (function () {
          var T = (0, o.Z)(function* (B, j, K) {
            const ye = B.$hostElement$,
              Q = ye['s-rc'];
            K &&
              ((T) => {
                const B = T.$cmpMeta$,
                  j = T.$hostElement$,
                  K = B.$flags$,
                  N = pe(
                    j.shadowRoot ? j.shadowRoot : j.getRootNode(),
                    B,
                    T.$modeName$
                  );
                10 & K &&
                  ((j['s-sc'] = N),
                  j.classList.add(N + '-h'),
                  2 & K && j.classList.add(N + '-s'));
              })(B);
            rr(B, j), Q && (Q.map((ke) => ke()), (ye['s-rc'] = void 0));
            {
              const ke = ye['s-p'],
                Oe = () => Gt(B);
              0 === ke.length
                ? Oe()
                : (Promise.all(ke).then(Oe), (B.$flags$ |= 4), (ke.length = 0));
            }
          });
          return function (j, K, ye) {
            return T.apply(this, arguments);
          };
        })(),
        rr = (T, B, j) => {
          try {
            (B = B.render && B.render()),
              (T.$flags$ &= -17),
              (T.$flags$ |= 2),
              ((T, B) => {
                const j = T.$hostElement$,
                  K = T.$cmpMeta$,
                  ye = T.$vnode$ || Pt(null, null),
                  N = ((T) => T && T.$tag$ === At)(B) ? B : dt(null, null, B);
                if (
                  ((ge = j.tagName),
                  K.$attrsToReflect$ &&
                    ((N.$attrs$ = N.$attrs$ || {}),
                    K.$attrsToReflect$.map(
                      ([Q, ae]) => (N.$attrs$[ae] = j[Q])
                    )),
                  (N.$tag$ = null),
                  (N.$flags$ |= 4),
                  (T.$vnode$ = N),
                  (N.$elm$ = ye.$elm$ = j.shadowRoot || j),
                  (Y = j['s-sc']),
                  (W = j['s-cr']),
                  (Be = 0 != (1 & K.$flags$)),
                  (re = !1),
                  Yt(ye, N),
                  (ce.$flags$ |= 1),
                  Fe)
                ) {
                  bn(N.$elm$);
                  let Q,
                    ae,
                    ke,
                    Oe,
                    rt,
                    ot,
                    Je = 0;
                  for (; Je < ln.length; Je++)
                    (Q = ln[Je]),
                      (ae = Q.$nodeToRelocate$),
                      ae['s-ol'] ||
                        ((ke = we.createTextNode('')),
                        (ke['s-nr'] = ae),
                        ae.parentNode.insertBefore((ae['s-ol'] = ke), ae));
                  for (Je = 0; Je < ln.length; Je++)
                    if (
                      ((Q = ln[Je]), (ae = Q.$nodeToRelocate$), Q.$slotRefNode$)
                    ) {
                      for (
                        Oe = Q.$slotRefNode$.parentNode,
                          rt = Q.$slotRefNode$.nextSibling,
                          ke = ae['s-ol'];
                        (ke = ke.previousSibling);

                      )
                        if (
                          ((ot = ke['s-nr']),
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
                re && Tt(N.$elm$), (ce.$flags$ &= -2), (ln.length = 0);
              })(T, B);
          } catch (K) {
            On(K, T.$hostElement$);
          }
          return null;
        },
        Gt = (T) => {
          const j = T.$hostElement$,
            ye = T.$lazyInstance$,
            N = T.$ancestorComponent$;
          _t(ye, 'componentDidRender'),
            64 & T.$flags$
              ? _t(ye, 'componentDidUpdate')
              : ((T.$flags$ |= 64),
                An(j),
                _t(ye, 'componentDidLoad'),
                T.$onReadyResolve$(j),
                N || rn()),
            T.$onInstanceResolve$(j),
            T.$onRenderResolve$ &&
              (T.$onRenderResolve$(), (T.$onRenderResolve$ = void 0)),
            512 & T.$flags$ && Ot(() => yn(T, !1)),
            (T.$flags$ &= -517);
        },
        nn = (T) => {
          {
            const B = sn(T),
              j = B.$hostElement$.isConnected;
            return j && 2 == (18 & B.$flags$) && yn(B, !1), j;
          }
        },
        rn = (T) => {
          An(we.documentElement),
            Ot(() => $n(ve, 'appload', { detail: { namespace: 'ionic' } }));
        },
        _t = (T, B, j) => {
          if (T && T[B])
            try {
              return T[B](j);
            } catch (K) {
              On(K);
            }
        },
        wn = (T, B) => (T && T.then ? T.then(B) : B()),
        An = (T) => T.classList.add('hydrated'),
        or = (T, B, j, K, ye, N, Q) => {
          let ae, ke, Oe, rt;
          if (1 === N.nodeType) {
            for (
              ae = N.getAttribute(k),
                ae &&
                  ((ke = ae.split('.')),
                  (ke[0] === Q || '0' === ke[0]) &&
                    ((Oe = {
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
                    B.push(Oe),
                    N.removeAttribute(k),
                    T.$children$ || (T.$children$ = []),
                    (T.$children$[Oe.$index$] = Oe),
                    (T = Oe),
                    K && '0' === Oe.$depth$ && (K[Oe.$index$] = Oe.$elm$))),
                rt = N.childNodes.length - 1;
              rt >= 0;
              rt--
            )
              or(T, B, j, K, ye, N.childNodes[rt], Q);
            if (N.shadowRoot)
              for (rt = N.shadowRoot.childNodes.length - 1; rt >= 0; rt--)
                or(T, B, j, K, ye, N.shadowRoot.childNodes[rt], Q);
          } else if (8 === N.nodeType)
            (ke = N.nodeValue.split('.')),
              (ke[1] === Q || '0' === ke[1]) &&
                ((ae = ke[0]),
                (Oe = {
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
                't' === ae
                  ? ((Oe.$elm$ = N.nextSibling),
                    Oe.$elm$ &&
                      3 === Oe.$elm$.nodeType &&
                      ((Oe.$text$ = Oe.$elm$.textContent),
                      B.push(Oe),
                      N.remove(),
                      T.$children$ || (T.$children$ = []),
                      (T.$children$[Oe.$index$] = Oe),
                      K && '0' === Oe.$depth$ && (K[Oe.$index$] = Oe.$elm$)))
                  : Oe.$hostId$ === Q &&
                    ('s' === ae
                      ? ((Oe.$tag$ = 'slot'),
                        (N['s-sn'] = ke[5] ? (Oe.$name$ = ke[5]) : ''),
                        (N['s-sr'] = !0),
                        K &&
                          ((Oe.$elm$ = we.createElement(Oe.$tag$)),
                          Oe.$name$ && Oe.$elm$.setAttribute('name', Oe.$name$),
                          N.parentNode.insertBefore(Oe.$elm$, N),
                          N.remove(),
                          '0' === Oe.$depth$ && (K[Oe.$index$] = Oe.$elm$)),
                        j.push(Oe),
                        T.$children$ || (T.$children$ = []),
                        (T.$children$[Oe.$index$] = Oe))
                      : 'r' === ae &&
                        (K
                          ? N.remove()
                          : ((ye['s-cr'] = N), (N['s-cn'] = !0)))));
          else if (T && 'style' === T.$tag$) {
            const ot = Pt(null, N.textContent);
            (ot.$elm$ = N), (ot.$index$ = '0'), (T.$children$ = [ot]);
          }
        },
        dn = (T, B) => {
          if (1 === T.nodeType) {
            let j = 0;
            for (; j < T.childNodes.length; j++) dn(T.childNodes[j], B);
            if (T.shadowRoot)
              for (j = 0; j < T.shadowRoot.childNodes.length; j++)
                dn(T.shadowRoot.childNodes[j], B);
          } else if (8 === T.nodeType) {
            const j = T.nodeValue.split('.');
            'o' === j[0] &&
              (B.set(j[1] + '.' + j[2], T),
              (T.nodeValue = ''),
              (T['s-en'] = j[3]));
          }
        },
        Z = (T, B, j) => {
          if (B.$members$) {
            T.watchers && (B.$watchers$ = T.watchers);
            const K = Object.entries(B.$members$),
              ye = T.prototype;
            if (
              (K.map(([N, [Q]]) => {
                31 & Q || (2 & j && 32 & Q)
                  ? Object.defineProperty(ye, N, {
                      get() {
                        return ((T, B) => sn(this).$instanceValues$.get(B))(
                          0,
                          N
                        );
                      },
                      set(ae) {
                        ((T, B, j, K) => {
                          const ye = sn(T),
                            N = ye.$hostElement$,
                            Q = ye.$instanceValues$.get(B),
                            ae = ye.$flags$,
                            ke = ye.$lazyInstance$;
                          j = ((T, B) =>
                            null == T || wt(T)
                              ? T
                              : 4 & B
                              ? 'false' !== T && ('' === T || !!T)
                              : 2 & B
                              ? parseFloat(T)
                              : 1 & B
                              ? String(T)
                              : T)(j, K.$members$[B][0]);
                          const Oe = Number.isNaN(Q) && Number.isNaN(j);
                          if (
                            (!(8 & ae) || void 0 === Q) &&
                            j !== Q &&
                            !Oe &&
                            (ye.$instanceValues$.set(B, j), ke)
                          ) {
                            if (K.$watchers$ && 128 & ae) {
                              const ot = K.$watchers$[B];
                              ot &&
                                ot.map((Je) => {
                                  try {
                                    ke[Je](j, Q, B);
                                  } catch (Lt) {
                                    On(Lt, N);
                                  }
                                });
                            }
                            2 == (18 & ae) && yn(ye, !1);
                          }
                        })(this, N, ae, B);
                      },
                      configurable: !0,
                      enumerable: !0,
                    })
                  : 1 & j &&
                    64 & Q &&
                    Object.defineProperty(ye, N, {
                      value(...ae) {
                        const ke = sn(this);
                        return ke.$onInstancePromise$.then(() =>
                          ke.$lazyInstance$[N](...ae)
                        );
                      },
                    });
              }),
              1 & j)
            ) {
              const N = new Map();
              (ye.attributeChangedCallback = function (Q, ae, ke) {
                ce.jmp(() => {
                  const Oe = N.get(Q);
                  if (this.hasOwnProperty(Oe)) (ke = this[Oe]), delete this[Oe];
                  else if (
                    ye.hasOwnProperty(Oe) &&
                    'number' == typeof this[Oe] &&
                    this[Oe] == ke
                  )
                    return;
                  this[Oe] =
                    (null !== ke || 'boolean' != typeof this[Oe]) && ke;
                });
              }),
                (T.observedAttributes = K.filter(([Q, ae]) => 15 & ae[0]).map(
                  ([Q, ae]) => {
                    const ke = ae[1] || Q;
                    return (
                      N.set(ke, Q),
                      512 & ae[0] && B.$attrsToReflect$.push([Q, ke]),
                      ke
                    );
                  }
                ));
            }
          }
          return T;
        },
        G = (function () {
          var T = (0, o.Z)(function* (B, j, K, ye, N) {
            if (0 == (32 & j.$flags$)) {
              {
                if (((j.$flags$ |= 32), (N = hn(K)).then)) {
                  const Oe = () => {};
                  (N = yield N), Oe();
                }
                N.isProxied ||
                  ((K.$watchers$ = N.watchers), Z(N, K, 2), (N.isProxied = !0));
                const ke = () => {};
                j.$flags$ |= 8;
                try {
                  new N(j);
                } catch (Oe) {
                  On(Oe);
                }
                (j.$flags$ &= -9),
                  (j.$flags$ |= 128),
                  ke(),
                  Me(j.$lazyInstance$);
              }
              if (N.style) {
                let ke = N.style;
                'string' != typeof ke &&
                  (ke =
                    ke[
                      (j.$modeName$ = ((T) =>
                        Sr.map((B) => B(T)).find((B) => !!B))(B))
                    ]);
                const Oe = oe(K, j.$modeName$);
                if (!dr.has(Oe)) {
                  const rt = () => {};
                  Le(Oe, ke, !!(1 & K.$flags$)), rt();
                }
              }
            }
            const Q = j.$ancestorComponent$,
              ae = () => yn(j, !0);
            Q && Q['s-rc'] ? Q['s-rc'].push(ae) : ae();
          });
          return function (j, K, ye, N, Q) {
            return T.apply(this, arguments);
          };
        })(),
        Me = (T) => {
          _t(T, 'connectedCallback');
        },
        gt = (T) => {
          const B = (T['s-cr'] = we.createComment(''));
          (B['s-cn'] = !0), T.insertBefore(B, T.firstChild);
        },
        Ct = (T, B = {}) => {
          const K = [],
            ye = B.exclude || [],
            N = ve.customElements,
            Q = we.head,
            ae = Q.querySelector('meta[charset]'),
            ke = we.createElement('style'),
            Oe = [],
            rt = we.querySelectorAll(`[${ue}]`);
          let ot,
            Je = !0,
            Lt = 0;
          for (
            Object.assign(ce, B),
              ce.$resourcesUrl$ = new URL(
                B.resourcesUrl || './',
                we.baseURI
              ).href,
              ce.$flags$ |= 2;
            Lt < rt.length;
            Lt++
          )
            Le(rt[Lt].getAttribute(ue), He(rt[Lt].innerHTML), !0);
          T.map((jt) => {
            jt[1].map((Vn) => {
              const Rn = {
                $flags$: Vn[0],
                $tagName$: Vn[1],
                $members$: Vn[2],
                $listeners$: Vn[3],
              };
              (Rn.$members$ = Vn[2]),
                (Rn.$listeners$ = Vn[3]),
                (Rn.$attrsToReflect$ = []),
                (Rn.$watchers$ = {});
              const cn = Rn.$tagName$,
                Er = class extends HTMLElement {
                  constructor(Qn) {
                    super(Qn),
                      Tn((Qn = this), Rn),
                      1 & Rn.$flags$ &&
                        Qn.attachShadow({
                          mode: 'open',
                          delegatesFocus: !!(16 & Rn.$flags$),
                        });
                  }
                  connectedCallback() {
                    ot && (clearTimeout(ot), (ot = null)),
                      Je
                        ? Oe.push(this)
                        : ce.jmp(() =>
                            ((T) => {
                              if (0 == (1 & ce.$flags$)) {
                                const B = sn(T),
                                  j = B.$cmpMeta$,
                                  K = () => {};
                                if (1 & B.$flags$)
                                  ee(T, B, j.$listeners$), Me(B.$lazyInstance$);
                                else {
                                  let ye;
                                  if (
                                    ((B.$flags$ |= 1),
                                    (ye = T.getAttribute(ie)),
                                    ye)
                                  ) {
                                    if (1 & j.$flags$) {
                                      const N = pe(
                                        T.shadowRoot,
                                        j,
                                        T.getAttribute('s-mode')
                                      );
                                      T.classList.remove(N + '-h', N + '-s');
                                    }
                                    ((T, B, j, K) => {
                                      const N = T.shadowRoot,
                                        Q = [],
                                        ke = N ? [] : null,
                                        Oe = (K.$vnode$ = Pt(B, null));
                                      ce.$orgLocNodes$ ||
                                        dn(
                                          we.body,
                                          (ce.$orgLocNodes$ = new Map())
                                        ),
                                        (T[ie] = j),
                                        T.removeAttribute(ie),
                                        or(Oe, Q, [], ke, T, T, j),
                                        Q.map((rt) => {
                                          const ot =
                                              rt.$hostId$ + '.' + rt.$nodeId$,
                                            Je = ce.$orgLocNodes$.get(ot),
                                            Lt = rt.$elm$;
                                          Je &&
                                            '' === Je['s-en'] &&
                                            Je.parentNode.insertBefore(
                                              Lt,
                                              Je.nextSibling
                                            ),
                                            N ||
                                              ((Lt['s-hn'] = B),
                                              Je &&
                                                ((Lt['s-ol'] = Je),
                                                (Lt['s-ol']['s-nr'] = Lt))),
                                            ce.$orgLocNodes$.delete(ot);
                                        }),
                                        N &&
                                          ke.map((rt) => {
                                            rt && N.appendChild(rt);
                                          });
                                    })(T, j.$tagName$, ye, B);
                                  }
                                  ye || (12 & j.$flags$ && gt(T));
                                  {
                                    let N = T;
                                    for (; (N = N.parentNode || N.host); )
                                      if (
                                        (1 === N.nodeType &&
                                          N.hasAttribute('s-id') &&
                                          N['s-p']) ||
                                        N['s-p']
                                      ) {
                                        zn(B, (B.$ancestorComponent$ = N));
                                        break;
                                      }
                                  }
                                  j.$members$ &&
                                    Object.entries(j.$members$).map(
                                      ([N, [Q]]) => {
                                        if (31 & Q && T.hasOwnProperty(N)) {
                                          const ae = T[N];
                                          delete T[N], (T[N] = ae);
                                        }
                                      }
                                    ),
                                    Ot(() => G(T, B, j));
                                }
                                K();
                              }
                            })(this)
                          );
                  }
                  disconnectedCallback() {
                    ce.jmp(() =>
                      ((T) => {
                        if (0 == (1 & ce.$flags$)) {
                          const B = sn(this),
                            j = B.$lazyInstance$;
                          B.$rmListeners$ &&
                            (B.$rmListeners$.map((K) => K()),
                            (B.$rmListeners$ = void 0)),
                            _t(j, 'disconnectedCallback');
                        }
                      })()
                    );
                  }
                  componentOnReady() {
                    return sn(this).$onReadyPromise$;
                  }
                };
              (Rn.$lazyBundleId$ = jt[0]),
                !ye.includes(cn) &&
                  !N.get(cn) &&
                  (K.push(cn), N.define(cn, Z(Er, Rn, 1)));
            });
          }),
            (ke.innerHTML =
              K + '{visibility:hidden}.hydrated{visibility:inherit}'),
            ke.setAttribute('data-styles', ''),
            Q.insertBefore(ke, ae ? ae.nextSibling : Q.firstChild),
            (Je = !1),
            Oe.length
              ? Oe.map((jt) => jt.connectedCallback())
              : ce.jmp(() => (ot = setTimeout(rn, 30)));
        },
        Kt = (T) => {
          const B = new URL(T, ce.$resourcesUrl$);
          return B.origin !== ve.location.origin ? B.href : B.pathname;
        },
        on = new WeakMap(),
        sn = (T) => on.get(T),
        ir = (T, B) => on.set((B.$lazyInstance$ = T), B),
        Tn = (T, B) => {
          const j = {
            $flags$: 0,
            $hostElement$: T,
            $cmpMeta$: B,
            $instanceValues$: new Map(),
          };
          return (
            (j.$onInstancePromise$ = new Promise(
              (K) => (j.$onInstanceResolve$ = K)
            )),
            (j.$onReadyPromise$ = new Promise((K) => (j.$onReadyResolve$ = K))),
            (T['s-p'] = []),
            (T['s-rc'] = []),
            ee(T, j, B.$listeners$),
            on.set(T, j)
          );
        },
        fn = (T, B) => B in T,
        On = (T, B) => (0, console.error)(T, B),
        In = new Map(),
        hn = (T, B, j) => {
          const K = T.$tagName$.replace(/-/g, '_'),
            ye = T.$lazyBundleId$,
            N = In.get(ye);
          return N
            ? N[K]
            : M(863)(`./${ye}.entry.js`).then((Q) => (In.set(ye, Q), Q[K]), On);
        },
        dr = new Map(),
        Sr = [],
        gr = [],
        _r = [],
        sr = (T, B) => (j) => {
          T.push(j),
            Pe || ((Pe = !0), B && 4 & ce.$flags$ ? Ot(vn) : ce.raf(vn));
        },
        ar = (T) => {
          for (let B = 0; B < T.length; B++)
            try {
              T[B](performance.now());
            } catch (j) {
              On(j);
            }
          T.length = 0;
        },
        vn = () => {
          ar(gr), ar(_r), (Pe = gr.length > 0) && ce.raf(vn);
        },
        Ot = (T) => Ne().then(T),
        pn = sr(gr, !1),
        Qt = sr(_r, !0),
        xn = { isDev: !1, isBrowser: !0, isServer: !1, isTesting: !1 };
    },
    697: (ut, $e, M) => {
      'use strict';
      M.d($e, {
        L: () => W,
        a: () => ge,
        b: () => Be,
        c: () => re,
        d: () => Fe,
        e: () => z,
        g: () => k,
        l: () => xe,
        s: () => ie,
        t: () => ve,
      });
      var o = M(5861),
        L = M(1308),
        Y = M(5730);
      const W = 'ionViewWillEnter',
        ge = 'ionViewDidEnter',
        Be = 'ionViewWillLeave',
        re = 'ionViewDidLeave',
        Fe = 'ionViewWillUnload',
        ve = (V) =>
          new Promise((U, A) => {
            (0, L.c)(() => {
              we(V),
                ce(V).then(
                  ($) => {
                    $.animation && $.animation.destroy(), J(V), U($);
                  },
                  ($) => {
                    J(V), A($);
                  }
                );
            });
          }),
        we = (V) => {
          const U = V.enteringEl,
            A = V.leavingEl;
          ue(U, A, V.direction),
            V.showGoBack
              ? U.classList.add('can-go-back')
              : U.classList.remove('can-go-back'),
            ie(U, !1),
            U.style.setProperty('pointer-events', 'none'),
            A && (ie(A, !1), A.style.setProperty('pointer-events', 'none'));
        },
        ce = (function () {
          var V = (0, o.Z)(function* (U) {
            const A = yield Ee(U);
            return A && L.B.isBrowser ? Ne(A, U) : de(U);
          });
          return function (A) {
            return V.apply(this, arguments);
          };
        })(),
        J = (V) => {
          const U = V.enteringEl,
            A = V.leavingEl;
          U.classList.remove('ion-page-invisible'),
            U.style.removeProperty('pointer-events'),
            void 0 !== A &&
              (A.classList.remove('ion-page-invisible'),
              A.style.removeProperty('pointer-events'));
        },
        Ee = (function () {
          var V = (0, o.Z)(function* (U) {
            return U.leavingEl && U.animated && 0 !== U.duration
              ? U.animationBuilder
                ? U.animationBuilder
                : 'ios' === U.mode
                ? (yield Promise.resolve().then(M.bind(M, 3953)))
                    .iosTransitionAnimation
                : (yield Promise.resolve().then(M.bind(M, 3880)))
                    .mdTransitionAnimation
              : void 0;
          });
          return function (A) {
            return V.apply(this, arguments);
          };
        })(),
        Ne = (function () {
          var V = (0, o.Z)(function* (U, A) {
            yield ee(A, !0);
            const $ = U(A.baseEl, A);
            Ce(A.enteringEl, A.leavingEl);
            const q = yield fe($, A);
            return (
              A.progressCallback && A.progressCallback(void 0),
              q && he(A.enteringEl, A.leavingEl),
              { hasCompleted: q, animation: $ }
            );
          });
          return function (A, $) {
            return V.apply(this, arguments);
          };
        })(),
        de = (function () {
          var V = (0, o.Z)(function* (U) {
            const A = U.enteringEl,
              $ = U.leavingEl;
            return yield ee(U, !1), Ce(A, $), he(A, $), { hasCompleted: !0 };
          });
          return function (A) {
            return V.apply(this, arguments);
          };
        })(),
        ee = (function () {
          var V = (0, o.Z)(function* (U, A) {
            const q = (void 0 !== U.deepWait ? U.deepWait : A)
              ? [z(U.enteringEl), z(U.leavingEl)]
              : [le(U.enteringEl), le(U.leavingEl)];
            yield Promise.all(q), yield Ve(U.viewIsReady, U.enteringEl);
          });
          return function (A, $) {
            return V.apply(this, arguments);
          };
        })(),
        Ve = (function () {
          var V = (0, o.Z)(function* (U, A) {
            U && (yield U(A));
          });
          return function (A, $) {
            return V.apply(this, arguments);
          };
        })(),
        fe = (V, U) => {
          const A = U.progressCallback,
            $ = new Promise((q) => {
              V.onFinish((Le) => q(1 === Le));
            });
          return A ? (V.progressStart(!0), A(V)) : V.play(), $;
        },
        Ce = (V, U) => {
          xe(U, Be), xe(V, W);
        },
        he = (V, U) => {
          xe(V, ge), xe(U, re);
        },
        xe = (V, U) => {
          if (V) {
            const A = new CustomEvent(U, { bubbles: !1, cancelable: !1 });
            V.dispatchEvent(A);
          }
        },
        le = (V) =>
          V ? new Promise((U) => (0, Y.c)(V, U)) : Promise.resolve(),
        z = (function () {
          var V = (0, o.Z)(function* (U) {
            const A = U;
            if (A) {
              if (null != A.componentOnReady) {
                if (null != (yield A.componentOnReady())) return;
              } else if (null != A.__registerHost)
                return void (yield new Promise((q) => (0, Y.r)(q)));
              yield Promise.all(Array.from(A.children).map(z));
            }
          });
          return function (A) {
            return V.apply(this, arguments);
          };
        })(),
        ie = (V, U) => {
          U
            ? (V.setAttribute('aria-hidden', 'true'),
              V.classList.add('ion-page-hidden'))
            : ((V.hidden = !1),
              V.removeAttribute('aria-hidden'),
              V.classList.remove('ion-page-hidden'));
        },
        ue = (V, U, A) => {
          void 0 !== V && (V.style.zIndex = 'back' === A ? '99' : '101'),
            void 0 !== U && (U.style.zIndex = '100');
        },
        k = (V) =>
          V.classList.contains('ion-page')
            ? V
            : V.querySelector(
                ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
              ) || V;
    },
    1911: (ut, $e, M) => {
      'use strict';
      M.r($e),
        M.d($e, { GESTURE_CONTROLLER: () => o.G, createGesture: () => Ae });
      var o = M(4349);
      const L = (ce, J, Ee, Ne) => {
          const de = Y(ce)
            ? { capture: !!Ne.capture, passive: !!Ne.passive }
            : !!Ne.capture;
          let ee, Ve;
          return (
            ce.__zone_symbol__addEventListener
              ? ((ee = '__zone_symbol__addEventListener'),
                (Ve = '__zone_symbol__removeEventListener'))
              : ((ee = 'addEventListener'), (Ve = 'removeEventListener')),
            ce[ee](J, Ee, de),
            () => {
              ce[Ve](J, Ee, de);
            }
          );
        },
        Y = (ce) => {
          if (void 0 === W)
            try {
              const J = Object.defineProperty({}, 'passive', {
                get: () => {
                  W = !0;
                },
              });
              ce.addEventListener('optsTest', () => {}, J);
            } catch {
              W = !1;
            }
          return !!W;
        };
      let W;
      const re = (ce) => (ce instanceof Document ? ce : ce.ownerDocument),
        Ae = (ce) => {
          let J = !1,
            Ee = !1,
            Ne = !0,
            de = !1;
          const ee = Object.assign(
              {
                disableScroll: !1,
                direction: 'x',
                gesturePriority: 0,
                passive: !0,
                maxAngle: 40,
                threshold: 10,
              },
              ce
            ),
            Ve = ee.canStart,
            fe = ee.onWillStart,
            Ce = ee.onStart,
            he = ee.onEnd,
            xe = ee.notCaptured,
            le = ee.onMove,
            z = ee.threshold,
            ie = ee.passive,
            ue = ee.blurOnStart,
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
            V = ((ce, J, Ee) => {
              const Ne = Ee * (Math.PI / 180),
                de = 'x' === ce,
                ee = Math.cos(Ne),
                Ve = J * J;
              let fe = 0,
                Ce = 0,
                he = !1,
                xe = 0;
              return {
                start(le, z) {
                  (fe = le), (Ce = z), (xe = 0), (he = !0);
                },
                detect(le, z) {
                  if (!he) return !1;
                  const ie = le - fe,
                    ue = z - Ce,
                    k = ie * ie + ue * ue;
                  if (k < Ve) return !1;
                  const V = Math.sqrt(k),
                    U = (de ? ie : ue) / V;
                  return (xe = U > ee ? 1 : U < -ee ? -1 : 0), (he = !1), !0;
                },
                isGesture: () => 0 !== xe,
                getDirection: () => xe,
              };
            })(ee.direction, ee.threshold, ee.maxAngle),
            U = o.G.createGesture({
              name: ce.gestureName,
              priority: ce.gesturePriority,
              disableScroll: ce.disableScroll,
            }),
            q = () => {
              !J || ((de = !1), le && le(k));
            },
            Le = () =>
              !!U.capture() &&
              ((J = !0),
              (Ne = !1),
              (k.startX = k.currentX),
              (k.startY = k.currentY),
              (k.startTime = k.currentTime),
              fe ? fe(k).then(me) : me(),
              !0),
            me = () => {
              ue &&
                (() => {
                  if (typeof document < 'u') {
                    const Te = document.activeElement;
                    Te?.blur && Te.blur();
                  }
                })(),
                Ce && Ce(k),
                (Ne = !0);
            },
            oe = () => {
              (J = !1), (Ee = !1), (de = !1), (Ne = !0), U.release();
            },
            He = (Te) => {
              const qe = J,
                nt = Ne;
              if ((oe(), nt)) {
                if ((Pe(k, Te), qe)) return void (he && he(k));
                xe && xe(k);
              }
            },
            je = ((ce, J, Ee, Ne, de) => {
              let ee,
                Ve,
                fe,
                Ce,
                he,
                xe,
                le,
                z = 0;
              const ie = (pe) => {
                  (z = Date.now() + 2e3),
                    J(pe) &&
                      (!Ve && Ee && (Ve = L(ce, 'touchmove', Ee, de)),
                      fe || (fe = L(pe.target, 'touchend', k, de)),
                      Ce || (Ce = L(pe.target, 'touchcancel', k, de)));
                },
                ue = (pe) => {
                  z > Date.now() ||
                    !J(pe) ||
                    (!xe && Ee && (xe = L(re(ce), 'mousemove', Ee, de)),
                    le || (le = L(re(ce), 'mouseup', V, de)));
                },
                k = (pe) => {
                  U(), Ne && Ne(pe);
                },
                V = (pe) => {
                  A(), Ne && Ne(pe);
                },
                U = () => {
                  Ve && Ve(), fe && fe(), Ce && Ce(), (Ve = fe = Ce = void 0);
                },
                A = () => {
                  xe && xe(), le && le(), (xe = le = void 0);
                },
                $ = () => {
                  U(), A();
                },
                q = (pe = !0) => {
                  pe
                    ? (ee || (ee = L(ce, 'touchstart', ie, de)),
                      he || (he = L(ce, 'mousedown', ue, de)))
                    : (ee && ee(), he && he(), (ee = he = void 0), $());
                };
              return {
                enable: q,
                stop: $,
                destroy: () => {
                  q(!1), (Ne = Ee = J = void 0);
                },
              };
            })(
              ee.el,
              (Te) => {
                const qe = we(Te);
                return (
                  !(
                    Ee ||
                    !Ne ||
                    (ve(Te, k),
                    (k.startX = k.currentX),
                    (k.startY = k.currentY),
                    (k.startTime = k.currentTime = qe),
                    (k.velocityX = k.velocityY = k.deltaX = k.deltaY = 0),
                    (k.event = Te),
                    Ve && !1 === Ve(k)) ||
                    (U.release(), !U.start())
                  ) &&
                  ((Ee = !0),
                  0 === z ? Le() : (V.start(k.startX, k.startY), !0))
                );
              },
              (Te) => {
                J
                  ? !de &&
                    Ne &&
                    ((de = !0), Pe(k, Te), requestAnimationFrame(q))
                  : (Pe(k, Te),
                    V.detect(k.currentX, k.currentY) &&
                      (!V.isGesture() || !Le()) &&
                      be());
              },
              He,
              { capture: !1, passive: ie }
            ),
            be = () => {
              oe(), je.stop(), xe && xe(k);
            };
          return {
            enable(Te = !0) {
              Te || (J && He(void 0), oe()), je.enable(Te);
            },
            destroy() {
              U.destroy(), je.destroy();
            },
          };
        },
        Pe = (ce, J) => {
          if (!J) return;
          const Ee = ce.currentX,
            Ne = ce.currentY,
            de = ce.currentTime;
          ve(J, ce);
          const ee = ce.currentX,
            Ve = ce.currentY,
            Ce = (ce.currentTime = we(J)) - de;
          if (Ce > 0 && Ce < 100) {
            const xe = (Ve - Ne) / Ce;
            (ce.velocityX = ((ee - Ee) / Ce) * 0.7 + 0.3 * ce.velocityX),
              (ce.velocityY = 0.7 * xe + 0.3 * ce.velocityY);
          }
          (ce.deltaX = ee - ce.startX),
            (ce.deltaY = Ve - ce.startY),
            (ce.event = J);
        },
        ve = (ce, J) => {
          let Ee = 0,
            Ne = 0;
          if (ce) {
            const de = ce.changedTouches;
            if (de && de.length > 0) {
              const ee = de[0];
              (Ee = ee.clientX), (Ne = ee.clientY);
            } else void 0 !== ce.pageX && ((Ee = ce.pageX), (Ne = ce.pageY));
          }
          (J.currentX = Ee), (J.currentY = Ne);
        },
        we = (ce) => ce.timeStamp || Date.now();
    },
    9658: (ut, $e, M) => {
      'use strict';
      M.d($e, {
        a: () => ve,
        b: () => q,
        c: () => Y,
        g: () => Pe,
        i: () => Le,
      });
      var o = M(1308);
      class L {
        constructor() {
          this.m = new Map();
        }
        reset(me) {
          this.m = new Map(Object.entries(me));
        }
        get(me, oe) {
          const He = this.m.get(me);
          return void 0 !== He ? He : oe;
        }
        getBoolean(me, oe = !1) {
          const He = this.m.get(me);
          return void 0 === He
            ? oe
            : 'string' == typeof He
            ? 'true' === He
            : !!He;
        }
        getNumber(me, oe) {
          const He = parseFloat(this.m.get(me));
          return isNaN(He) ? (void 0 !== oe ? oe : NaN) : He;
        }
        set(me, oe) {
          this.m.set(me, oe);
        }
      }
      const Y = new L(),
        Ae = 'ionic-persist-config',
        Pe = (pe) => we(pe),
        ve = (pe, me) => (
          'string' == typeof pe && ((me = pe), (pe = void 0)),
          Pe(pe).includes(me)
        ),
        we = (pe = window) => {
          if (typeof pe > 'u') return [];
          pe.Ionic = pe.Ionic || {};
          let me = pe.Ionic.platforms;
          return (
            null == me &&
              ((me = pe.Ionic.platforms = ce(pe)),
              me.forEach((oe) =>
                pe.document.documentElement.classList.add(`plt-${oe}`)
              )),
            me
          );
        },
        ce = (pe) => {
          const me = Y.get('platform');
          return Object.keys(A).filter((oe) => {
            const He = me?.[oe];
            return 'function' == typeof He ? He(pe) : A[oe](pe);
          });
        },
        Ee = (pe) => !!(V(pe, /iPad/i) || (V(pe, /Macintosh/i) && he(pe))),
        ee = (pe) => V(pe, /android|sink/i),
        he = (pe) => U(pe, '(any-pointer:coarse)'),
        le = (pe) => z(pe) || ie(pe),
        z = (pe) => !!(pe.cordova || pe.phonegap || pe.PhoneGap),
        ie = (pe) => !!pe.Capacitor?.isNative,
        V = (pe, me) => me.test(pe.navigator.userAgent),
        U = (pe, me) => {
          var oe;
          return null === (oe = pe.matchMedia) || void 0 === oe
            ? void 0
            : oe.call(pe, me).matches;
        },
        A = {
          ipad: Ee,
          iphone: (pe) => V(pe, /iPhone/i),
          ios: (pe) => V(pe, /iPhone|iPod/i) || Ee(pe),
          android: ee,
          phablet: (pe) => {
            const me = pe.innerWidth,
              oe = pe.innerHeight,
              He = Math.min(me, oe),
              je = Math.max(me, oe);
            return He > 390 && He < 520 && je > 620 && je < 800;
          },
          tablet: (pe) => {
            const me = pe.innerWidth,
              oe = pe.innerHeight,
              He = Math.min(me, oe),
              je = Math.max(me, oe);
            return (
              Ee(pe) ||
              ((pe) => ee(pe) && !V(pe, /mobile/i))(pe) ||
              (He > 460 && He < 820 && je > 780 && je < 1400)
            );
          },
          cordova: z,
          capacitor: ie,
          electron: (pe) => V(pe, /electron/i),
          pwa: (pe) => {
            var me;
            return !(
              !(null === (me = pe.matchMedia) || void 0 === me
                ? void 0
                : me.call(pe, '(display-mode: standalone)').matches) &&
              !pe.navigator.standalone
            );
          },
          mobile: he,
          mobileweb: (pe) => he(pe) && !le(pe),
          desktop: (pe) => !he(pe),
          hybrid: le,
        };
      let $;
      const q = (pe) => (pe && (0, o.g)(pe)) || $,
        Le = (pe = {}) => {
          if (typeof window > 'u') return;
          const me = window.document,
            oe = window,
            He = (oe.Ionic = oe.Ionic || {}),
            je = {};
          pe._ael && (je.ael = pe._ael),
            pe._rel && (je.rel = pe._rel),
            pe._ce && (je.ce = pe._ce),
            (0, o.s)(je);
          const be = Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    ((pe) => {
                      try {
                        const me = pe.sessionStorage.getItem(Ae);
                        return null !== me ? JSON.parse(me) : {};
                      } catch {
                        return {};
                      }
                    })(oe)
                  ),
                  { persistConfig: !1 }
                ),
                He.config
              ),
              ((pe) => {
                const me = {};
                return (
                  pe.location.search
                    .slice(1)
                    .split('&')
                    .map((oe) => oe.split('='))
                    .map(([oe, He]) => [
                      decodeURIComponent(oe),
                      decodeURIComponent(He),
                    ])
                    .filter(([oe]) =>
                      ((pe, me) => pe.substr(0, me.length) === me)(oe, 'ionic:')
                    )
                    .map(([oe, He]) => [oe.slice('ionic:'.length), He])
                    .forEach(([oe, He]) => {
                      me[oe] = He;
                    }),
                  me
                );
              })(oe)
            ),
            pe
          );
          Y.reset(be),
            Y.getBoolean('persistConfig') &&
              ((pe, me) => {
                try {
                  pe.sessionStorage.setItem(Ae, JSON.stringify(me));
                } catch {
                  return;
                }
              })(oe, be),
            we(oe),
            (He.config = Y),
            (He.mode = $ =
              Y.get(
                'mode',
                me.documentElement.getAttribute('mode') ||
                  (ve(oe, 'ios') ? 'ios' : 'md')
              )),
            Y.set('mode', $),
            me.documentElement.setAttribute('mode', $),
            me.documentElement.classList.add($),
            Y.getBoolean('_testing') && Y.set('animated', !1);
          const Te = (nt) => {
              var Ze;
              return null === (Ze = nt.tagName) || void 0 === Ze
                ? void 0
                : Ze.startsWith('ION-');
            },
            qe = (nt) => ['ios', 'md'].includes(nt);
          (0, o.a)((nt) => {
            for (; nt; ) {
              const Ze = nt.mode || nt.getAttribute('mode');
              if (Ze) {
                if (qe(Ze)) return Ze;
                Te(nt) &&
                  console.warn(
                    'Invalid ionic mode: "' + Ze + '", expected: "ios" or "md"'
                  );
              }
              nt = nt.parentElement;
            }
            return $;
          });
        };
    },
    3953: (ut, $e, M) => {
      'use strict';
      M.r($e), M.d($e, { iosTransitionAnimation: () => ce, shadow: () => re });
      var o = M(8834),
        L = M(697);
      M(3457), M(1308);
      const Be = (J) => document.querySelector(`${J}.ion-cloned-element`),
        re = (J) => J.shadowRoot || J,
        Fe = (J) => {
          const Ee = 'ION-TABS' === J.tagName ? J : J.querySelector('ion-tabs'),
            Ne =
              'ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large';
          if (null != Ee) {
            const de = Ee.querySelector(
              'ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)'
            );
            return null != de ? de.querySelector(Ne) : null;
          }
          return J.querySelector(Ne);
        },
        Ae = (J, Ee) => {
          const Ne = 'ION-TABS' === J.tagName ? J : J.querySelector('ion-tabs');
          let de = [];
          if (null != Ne) {
            const ee = Ne.querySelector(
              'ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)'
            );
            null != ee && (de = ee.querySelectorAll('ion-buttons'));
          } else de = J.querySelectorAll('ion-buttons');
          for (const ee of de) {
            const Ve = ee.closest('ion-header'),
              fe =
                Ve &&
                !Ve.classList.contains('header-collapse-condense-inactive'),
              Ce = ee.querySelector('ion-back-button'),
              he = ee.classList.contains('buttons-collapse'),
              xe = 'start' === ee.slot || '' === ee.slot;
            if (null !== Ce && xe && ((he && fe && Ee) || !he)) return Ce;
          }
          return null;
        },
        ve = (J, Ee, Ne, de, ee, Ve) => {
          const fe = Ee ? `calc(100% - ${Ve.right + 4}px)` : Ve.left - 4 + 'px',
            Ce = Ee ? '7px' : '-7px',
            he = Ee ? '-4px' : '4px',
            xe = Ee ? '-4px' : '4px',
            le = Ee ? 'right' : 'left',
            z = Ee ? 'left' : 'right',
            k = Ne
              ? [
                  {
                    offset: 0,
                    opacity: 1,
                    transform: `translate3d(${he}, ${
                      Ve.top - 46
                    }px, 0) scale(1)`,
                  },
                  { offset: 0.6, opacity: 0 },
                  {
                    offset: 1,
                    opacity: 0,
                    transform: `translate3d(${Ce}, ${
                      ee.top - 40
                    }px, 0) scale(2.1)`,
                  },
                ]
              : [
                  {
                    offset: 0,
                    opacity: 0,
                    transform: `translate3d(${Ce}, ${
                      ee.top - 40
                    }px, 0) scale(2.1)`,
                  },
                  {
                    offset: 1,
                    opacity: 1,
                    transform: `translate3d(${he}, ${
                      Ve.top - 46
                    }px, 0) scale(1)`,
                  },
                ],
            A = Ne
              ? [
                  {
                    offset: 0,
                    opacity: 1,
                    transform: `translate3d(${xe}, ${
                      Ve.top - 46
                    }px, 0) scale(1)`,
                  },
                  {
                    offset: 0.2,
                    opacity: 0,
                    transform: `translate3d(${xe}, ${
                      Ve.top - 41
                    }px, 0) scale(0.6)`,
                  },
                  {
                    offset: 1,
                    opacity: 0,
                    transform: `translate3d(${xe}, ${
                      Ve.top - 41
                    }px, 0) scale(0.6)`,
                  },
                ]
              : [
                  {
                    offset: 0,
                    opacity: 0,
                    transform: `translate3d(${xe}, ${
                      Ve.top - 41
                    }px, 0) scale(0.6)`,
                  },
                  {
                    offset: 1,
                    opacity: 1,
                    transform: `translate3d(${xe}, ${
                      Ve.top - 46
                    }px, 0) scale(1)`,
                  },
                ],
            $ = (0, o.c)(),
            q = (0, o.c)(),
            Le = Be('ion-back-button'),
            pe = re(Le).querySelector('.button-text'),
            me = re(Le).querySelector('ion-icon');
          (Le.text = de.text),
            (Le.mode = de.mode),
            (Le.icon = de.icon),
            (Le.color = de.color),
            (Le.disabled = de.disabled),
            Le.style.setProperty('display', 'block'),
            Le.style.setProperty('position', 'fixed'),
            q.addElement(me),
            $.addElement(pe),
            $.beforeStyles({ 'transform-origin': `${le} center` })
              .beforeAddWrite(() => {
                de.style.setProperty('display', 'none'),
                  Le.style.setProperty(le, fe);
              })
              .afterAddWrite(() => {
                de.style.setProperty('display', ''),
                  Le.style.setProperty('display', 'none'),
                  Le.style.removeProperty(le);
              })
              .keyframes(k),
            q.beforeStyles({ 'transform-origin': `${z} center` }).keyframes(A),
            J.addAnimation([$, q]);
        },
        we = (J, Ee, Ne, de, ee, Ve) => {
          const fe = Ee ? `calc(100% - ${ee.right}px)` : `${ee.left}px`,
            Ce = Ee ? '-18px' : '18px',
            he = Ee ? 'right' : 'left',
            z = Ne
              ? [
                  {
                    offset: 0,
                    opacity: 0,
                    transform: `translate3d(${Ce}, ${
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
                    transform: `translate3d(${Ce}, ${
                      Ve.top - 4
                    }px, 0) scale(0.5)`,
                  },
                ],
            ie = Be('ion-title'),
            ue = (0, o.c)();
          (ie.innerText = de.innerText),
            (ie.size = de.size),
            (ie.color = de.color),
            ue.addElement(ie),
            ue
              .beforeStyles({
                'transform-origin': `${he} center`,
                height: '46px',
                display: '',
                position: 'relative',
                [he]: fe,
              })
              .beforeAddWrite(() => {
                de.style.setProperty('display', 'none');
              })
              .afterAddWrite(() => {
                de.style.setProperty('display', ''),
                  ie.style.setProperty('display', 'none');
              })
              .keyframes(z),
            J.addAnimation(ue);
        },
        ce = (J, Ee) => {
          var Ne;
          try {
            const de = 'cubic-bezier(0.32,0.72,0,1)',
              ee = 'opacity',
              Ve = 'transform',
              fe = '0%',
              he = 'rtl' === J.ownerDocument.dir,
              xe = he ? '-99.5%' : '99.5%',
              le = he ? '33%' : '-33%',
              z = Ee.enteringEl,
              ie = Ee.leavingEl,
              ue = 'back' === Ee.direction,
              k = z.querySelector(':scope > ion-content'),
              V = z.querySelectorAll(
                ':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'
              ),
              U = z.querySelectorAll(':scope > ion-header > ion-toolbar'),
              A = (0, o.c)(),
              $ = (0, o.c)();
            if (
              (A.addElement(z)
                .duration(
                  (null !== (Ne = Ee.duration) && void 0 !== Ne ? Ne : 0) || 540
                )
                .easing(Ee.easing || de)
                .fill('both')
                .beforeRemoveClass('ion-page-invisible'),
              ie && null != J)
            ) {
              const me = (0, o.c)();
              me.addElement(J), A.addAnimation(me);
            }
            if (
              (k || 0 !== U.length || 0 !== V.length
                ? ($.addElement(k), $.addElement(V))
                : $.addElement(
                    z.querySelector(
                      ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
                    )
                  ),
              A.addAnimation($),
              ue
                ? $.beforeClearStyles([ee])
                    .fromTo(
                      'transform',
                      `translateX(${le})`,
                      `translateX(${fe})`
                    )
                    .fromTo(ee, 0.8, 1)
                : $.beforeClearStyles([ee]).fromTo(
                    'transform',
                    `translateX(${xe})`,
                    `translateX(${fe})`
                  ),
              k)
            ) {
              const me = re(k).querySelector('.transition-effect');
              if (me) {
                const oe = me.querySelector('.transition-cover'),
                  He = me.querySelector('.transition-shadow'),
                  je = (0, o.c)(),
                  be = (0, o.c)(),
                  Te = (0, o.c)();
                je
                  .addElement(me)
                  .beforeStyles({ opacity: '1', display: 'block' })
                  .afterStyles({ opacity: '', display: '' }),
                  be.addElement(oe).beforeClearStyles([ee]).fromTo(ee, 0, 0.1),
                  Te.addElement(He)
                    .beforeClearStyles([ee])
                    .fromTo(ee, 0.03, 0.7),
                  je.addAnimation([be, Te]),
                  $.addAnimation([je]);
              }
            }
            const q = z.querySelector('ion-header.header-collapse-condense'),
              { forward: Le, backward: pe } = ((J, Ee, Ne, de, ee) => {
                const Ve = Ae(de, Ne),
                  fe = Fe(ee),
                  Ce = Fe(de),
                  he = Ae(ee, Ne),
                  xe = null !== Ve && null !== fe && !Ne,
                  le = null !== Ce && null !== he && Ne;
                if (xe) {
                  const z = fe.getBoundingClientRect(),
                    ie = Ve.getBoundingClientRect();
                  we(J, Ee, Ne, fe, z, ie), ve(J, Ee, Ne, Ve, z, ie);
                } else if (le) {
                  const z = Ce.getBoundingClientRect(),
                    ie = he.getBoundingClientRect();
                  we(J, Ee, Ne, Ce, z, ie), ve(J, Ee, Ne, he, z, ie);
                }
                return { forward: xe, backward: le };
              })(A, he, ue, z, ie);
            if (
              (U.forEach((me) => {
                const oe = (0, o.c)();
                oe.addElement(me), A.addAnimation(oe);
                const He = (0, o.c)();
                He.addElement(me.querySelector('ion-title'));
                const je = (0, o.c)(),
                  be = Array.from(
                    me.querySelectorAll('ion-buttons,[menuToggle]')
                  ),
                  Te = me.closest('ion-header'),
                  qe = Te?.classList.contains(
                    'header-collapse-condense-inactive'
                  );
                let nt;
                (nt = be.filter(
                  ue
                    ? (Pt) => {
                        const At = Pt.classList.contains('buttons-collapse');
                        return (At && !qe) || !At;
                      }
                    : (Pt) => !Pt.classList.contains('buttons-collapse')
                )),
                  je.addElement(nt);
                const Ze = (0, o.c)();
                Ze.addElement(
                  me.querySelectorAll(
                    ':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'
                  )
                );
                const pt = (0, o.c)();
                pt.addElement(re(me).querySelector('.toolbar-background'));
                const wt = (0, o.c)(),
                  dt = me.querySelector('ion-back-button');
                if (
                  (dt && wt.addElement(dt),
                  oe.addAnimation([He, je, Ze, pt, wt]),
                  je.fromTo(ee, 0.01, 1),
                  Ze.fromTo(ee, 0.01, 1),
                  ue)
                )
                  qe ||
                    He.fromTo(
                      'transform',
                      `translateX(${le})`,
                      `translateX(${fe})`
                    ).fromTo(ee, 0.01, 1),
                    Ze.fromTo(
                      'transform',
                      `translateX(${le})`,
                      `translateX(${fe})`
                    ),
                    wt.fromTo(ee, 0.01, 1);
                else if (
                  (q ||
                    He.fromTo(
                      'transform',
                      `translateX(${xe})`,
                      `translateX(${fe})`
                    ).fromTo(ee, 0.01, 1),
                  Ze.fromTo(
                    'transform',
                    `translateX(${xe})`,
                    `translateX(${fe})`
                  ),
                  pt.beforeClearStyles([ee, 'transform']),
                  Te?.translucent
                    ? pt.fromTo(
                        'transform',
                        he ? 'translateX(-100%)' : 'translateX(100%)',
                        'translateX(0px)'
                      )
                    : pt.fromTo(ee, 0.01, 'var(--opacity)'),
                  Le || wt.fromTo(ee, 0.01, 1),
                  dt && !Le)
                ) {
                  const At = (0, o.c)();
                  At.addElement(re(dt).querySelector('.button-text')).fromTo(
                    'transform',
                    he ? 'translateX(-100px)' : 'translateX(100px)',
                    'translateX(0px)'
                  ),
                    oe.addAnimation(At);
                }
              }),
              ie)
            ) {
              const me = (0, o.c)(),
                oe = ie.querySelector(':scope > ion-content'),
                He = ie.querySelectorAll(':scope > ion-header > ion-toolbar'),
                je = ie.querySelectorAll(
                  ':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'
                );
              if (
                (oe || 0 !== He.length || 0 !== je.length
                  ? (me.addElement(oe), me.addElement(je))
                  : me.addElement(
                      ie.querySelector(
                        ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
                      )
                    ),
                A.addAnimation(me),
                ue)
              ) {
                me.beforeClearStyles([ee]).fromTo(
                  'transform',
                  `translateX(${fe})`,
                  he ? 'translateX(-100%)' : 'translateX(100%)'
                );
                const be = (0, L.g)(ie);
                A.afterAddWrite(() => {
                  'normal' === A.getDirection() &&
                    be.style.setProperty('display', 'none');
                });
              } else
                me.fromTo(
                  'transform',
                  `translateX(${fe})`,
                  `translateX(${le})`
                ).fromTo(ee, 1, 0.8);
              if (oe) {
                const be = re(oe).querySelector('.transition-effect');
                if (be) {
                  const Te = be.querySelector('.transition-cover'),
                    qe = be.querySelector('.transition-shadow'),
                    nt = (0, o.c)(),
                    Ze = (0, o.c)(),
                    pt = (0, o.c)();
                  nt
                    .addElement(be)
                    .beforeStyles({ opacity: '1', display: 'block' })
                    .afterStyles({ opacity: '', display: '' }),
                    Ze.addElement(Te)
                      .beforeClearStyles([ee])
                      .fromTo(ee, 0.1, 0),
                    pt
                      .addElement(qe)
                      .beforeClearStyles([ee])
                      .fromTo(ee, 0.7, 0.03),
                    nt.addAnimation([Ze, pt]),
                    me.addAnimation([nt]);
                }
              }
              He.forEach((be) => {
                const Te = (0, o.c)();
                Te.addElement(be);
                const qe = (0, o.c)();
                qe.addElement(be.querySelector('ion-title'));
                const nt = (0, o.c)(),
                  Ze = be.querySelectorAll('ion-buttons,[menuToggle]'),
                  pt = be.closest('ion-header'),
                  wt = pt?.classList.contains(
                    'header-collapse-condense-inactive'
                  ),
                  dt = Array.from(Ze).filter((Gn) => {
                    const at = Gn.classList.contains('buttons-collapse');
                    return (at && !wt) || !at;
                  });
                nt.addElement(dt);
                const Pt = (0, o.c)(),
                  At = be.querySelectorAll(
                    ':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'
                  );
                At.length > 0 && Pt.addElement(At);
                const We = (0, o.c)();
                We.addElement(re(be).querySelector('.toolbar-background'));
                const Bt = (0, o.c)(),
                  En = be.querySelector('ion-back-button');
                if (
                  (En && Bt.addElement(En),
                  Te.addAnimation([qe, nt, Pt, Bt, We]),
                  A.addAnimation(Te),
                  Bt.fromTo(ee, 0.99, 0),
                  nt.fromTo(ee, 0.99, 0),
                  Pt.fromTo(ee, 0.99, 0),
                  ue)
                ) {
                  if (
                    (wt ||
                      qe
                        .fromTo(
                          'transform',
                          `translateX(${fe})`,
                          he ? 'translateX(-100%)' : 'translateX(100%)'
                        )
                        .fromTo(ee, 0.99, 0),
                    Pt.fromTo(
                      'transform',
                      `translateX(${fe})`,
                      he ? 'translateX(-100%)' : 'translateX(100%)'
                    ),
                    We.beforeClearStyles([ee, 'transform']),
                    pt?.translucent
                      ? We.fromTo(
                          'transform',
                          'translateX(0px)',
                          he ? 'translateX(-100%)' : 'translateX(100%)'
                        )
                      : We.fromTo(ee, 'var(--opacity)', 0),
                    En && !pe)
                  ) {
                    const at = (0, o.c)();
                    at
                      .addElement(re(En).querySelector('.button-text'))
                      .fromTo(
                        'transform',
                        `translateX(${fe})`,
                        `translateX(${(he ? -124 : 124) + 'px'})`
                      ),
                      Te.addAnimation(at);
                  }
                } else
                  wt ||
                    qe
                      .fromTo(
                        'transform',
                        `translateX(${fe})`,
                        `translateX(${le})`
                      )
                      .fromTo(ee, 0.99, 0)
                      .afterClearStyles([Ve, ee]),
                    Pt.fromTo(
                      'transform',
                      `translateX(${fe})`,
                      `translateX(${le})`
                    ).afterClearStyles([Ve, ee]),
                    Bt.afterClearStyles([ee]),
                    qe.afterClearStyles([ee]),
                    nt.afterClearStyles([ee]);
              });
            }
            return A;
          } catch (de) {
            throw de;
          }
        };
    },
    3880: (ut, $e, M) => {
      'use strict';
      M.r($e), M.d($e, { mdTransitionAnimation: () => ge });
      var o = M(8834),
        L = M(697);
      M(3457), M(1308);
      const ge = (Be, re) => {
        var Fe, Ae, Pe;
        const ce = 'back' === re.direction,
          Ee = re.leavingEl,
          Ne = (0, L.g)(re.enteringEl),
          de = Ne.querySelector('ion-toolbar'),
          ee = (0, o.c)();
        if (
          (ee
            .addElement(Ne)
            .fill('both')
            .beforeRemoveClass('ion-page-invisible'),
          ce
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
          de)
        ) {
          const Ve = (0, o.c)();
          Ve.addElement(de), ee.addAnimation(Ve);
        }
        if (Ee && ce) {
          ee.duration(
            (null !== (Pe = re.duration) && void 0 !== Pe ? Pe : 0) || 200
          ).easing('cubic-bezier(0.47,0,0.745,0.715)');
          const Ve = (0, o.c)();
          Ve.addElement((0, L.g)(Ee))
            .onFinish((fe) => {
              1 === fe &&
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
    1312: (ut, $e, M) => {
      'use strict';
      M.d($e, {
        B: () => oe,
        G: () => He,
        a: () => Fe,
        b: () => Ae,
        c: () => ce,
        d: () => ue,
        e: () => Ee,
        f: () => V,
        g: () => $,
        h: () => Be,
        i: () => Le,
        j: () => ee,
        k: () => z,
        m: () => ve,
        s: () => me,
      });
      var o = M(5861),
        L = M(9658),
        Y = M(7593),
        W = M(5730);
      let ge = 0;
      const Be = new WeakMap(),
        re = (je) => ({
          create: (be) => Ne(je, be),
          dismiss: (be, Te, qe) => xe(document, be, Te, je, qe),
          getTop: () =>
            (0, o.Z)(function* () {
              return z(document, je);
            })(),
        }),
        Fe = re('ion-alert'),
        Ae = re('ion-action-sheet'),
        ve = re('ion-modal'),
        ce = re('ion-popover'),
        Ee = (je) => {
          typeof document < 'u' && he(document);
          const be = ge++;
          (je.overlayIndex = be),
            je.hasAttribute('id') || (je.id = `ion-overlay-${be}`);
        },
        Ne = (je, be) =>
          typeof window < 'u' && typeof window.customElements < 'u'
            ? window.customElements.whenDefined(je).then(() => {
                const Te = document.createElement(je);
                return (
                  Te.classList.add('overlay-hidden'),
                  Object.assign(
                    Te,
                    Object.assign(Object.assign({}, be), { hasController: !0 })
                  ),
                  U(document).appendChild(Te),
                  new Promise((qe) => (0, W.c)(Te, qe))
                );
              })
            : Promise.resolve(),
        de =
          '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',
        ee = (je, be) => {
          let Te = je.querySelector(de);
          const qe = Te?.shadowRoot;
          qe && (Te = qe.querySelector(de) || Te),
            Te ? (0, W.f)(Te) : be.focus();
        },
        fe = (je, be) => {
          const Te = Array.from(je.querySelectorAll(de));
          let qe = Te.length > 0 ? Te[Te.length - 1] : null;
          const nt = qe?.shadowRoot;
          nt && (qe = nt.querySelector(de) || qe), qe ? qe.focus() : be.focus();
        },
        he = (je) => {
          0 === ge &&
            ((ge = 1),
            je.addEventListener(
              'focus',
              (be) => {
                ((je, be) => {
                  const Te = z(
                      be,
                      'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover'
                    ),
                    qe = je.target;
                  Te &&
                    qe &&
                    !Te.classList.contains('ion-disable-focus-trap') &&
                    (Te.shadowRoot
                      ? (() => {
                          if (Te.contains(qe)) Te.lastFocus = qe;
                          else {
                            const pt = Te.lastFocus;
                            ee(Te, Te),
                              pt === be.activeElement && fe(Te, Te),
                              (Te.lastFocus = be.activeElement);
                          }
                        })()
                      : (() => {
                          if (Te === qe) Te.lastFocus = void 0;
                          else {
                            const pt = (0, W.g)(Te);
                            if (!pt.contains(qe)) return;
                            const wt = pt.querySelector('.ion-overlay-wrapper');
                            if (!wt) return;
                            if (wt.contains(qe)) Te.lastFocus = qe;
                            else {
                              const dt = Te.lastFocus;
                              ee(wt, Te),
                                dt === be.activeElement && fe(wt, Te),
                                (Te.lastFocus = be.activeElement);
                            }
                          }
                        })());
                })(be, je);
              },
              !0
            ),
            je.addEventListener('ionBackButton', (be) => {
              const Te = z(je);
              Te?.backdropDismiss &&
                be.detail.register(Y.OVERLAY_BACK_BUTTON_PRIORITY, () =>
                  Te.dismiss(void 0, oe)
                );
            }),
            je.addEventListener('keyup', (be) => {
              if ('Escape' === be.key) {
                const Te = z(je);
                Te?.backdropDismiss && Te.dismiss(void 0, oe);
              }
            }));
        },
        xe = (je, be, Te, qe, nt) => {
          const Ze = z(je, qe, nt);
          return Ze
            ? Ze.dismiss(be, Te)
            : Promise.reject('overlay does not exist');
        },
        z = (je, be, Te) => {
          const qe = ((je, be) => (
            void 0 === be &&
              (be =
                'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast'),
            Array.from(je.querySelectorAll(be)).filter(
              (Te) => Te.overlayIndex > 0
            )
          ))(je, be).filter(
            (nt) => !((je) => je.classList.contains('overlay-hidden'))(nt)
          );
          return void 0 === Te
            ? qe[qe.length - 1]
            : qe.find((nt) => nt.id === Te);
        },
        ie = (je = !1) => {
          const Te = U(document).querySelector(
            'ion-router-outlet, ion-nav, #ion-view-container-root'
          );
          !Te ||
            (je
              ? Te.setAttribute('aria-hidden', 'true')
              : Te.removeAttribute('aria-hidden'));
        },
        ue = (function () {
          var je = (0, o.Z)(function* (be, Te, qe, nt, Ze) {
            var pt, wt;
            if (be.presented) return;
            ie(!0),
              (be.presented = !0),
              be.willPresent.emit(),
              null === (pt = be.willPresentShorthand) ||
                void 0 === pt ||
                pt.emit();
            const dt = (0, L.b)(be),
              Pt = be.enterAnimation
                ? be.enterAnimation
                : L.c.get(Te, 'ios' === dt ? qe : nt);
            (yield A(be, Pt, be.el, Ze)) &&
              (be.didPresent.emit(),
              null === (wt = be.didPresentShorthand) ||
                void 0 === wt ||
                wt.emit()),
              'ION-TOAST' !== be.el.tagName && k(be.el),
              be.keyboardClose &&
                (null === document.activeElement ||
                  !be.el.contains(document.activeElement)) &&
                be.el.focus();
          });
          return function (Te, qe, nt, Ze, pt) {
            return je.apply(this, arguments);
          };
        })(),
        k = (function () {
          var je = (0, o.Z)(function* (be) {
            let Te = document.activeElement;
            if (!Te) return;
            const qe = Te?.shadowRoot;
            qe && (Te = qe.querySelector(de) || Te),
              yield be.onDidDismiss(),
              Te.focus();
          });
          return function (Te) {
            return je.apply(this, arguments);
          };
        })(),
        V = (function () {
          var je = (0, o.Z)(function* (be, Te, qe, nt, Ze, pt, wt) {
            var dt, Pt;
            if (!be.presented) return !1;
            ie(!1), (be.presented = !1);
            try {
              be.el.style.setProperty('pointer-events', 'none'),
                be.willDismiss.emit({ data: Te, role: qe }),
                null === (dt = be.willDismissShorthand) ||
                  void 0 === dt ||
                  dt.emit({ data: Te, role: qe });
              const At = (0, L.b)(be),
                We = be.leaveAnimation
                  ? be.leaveAnimation
                  : L.c.get(nt, 'ios' === At ? Ze : pt);
              qe !== He && (yield A(be, We, be.el, wt)),
                be.didDismiss.emit({ data: Te, role: qe }),
                null === (Pt = be.didDismissShorthand) ||
                  void 0 === Pt ||
                  Pt.emit({ data: Te, role: qe }),
                Be.delete(be),
                be.el.classList.add('overlay-hidden'),
                be.el.style.removeProperty('pointer-events');
            } catch (At) {
              console.error(At);
            }
            return be.el.remove(), !0;
          });
          return function (Te, qe, nt, Ze, pt, wt, dt) {
            return je.apply(this, arguments);
          };
        })(),
        U = (je) => je.querySelector('ion-app') || je.body,
        A = (function () {
          var je = (0, o.Z)(function* (be, Te, qe, nt) {
            qe.classList.remove('overlay-hidden');
            const pt = Te(be.el, nt);
            (!be.animated || !L.c.getBoolean('animated', !0)) && pt.duration(0),
              be.keyboardClose &&
                pt.beforeAddWrite(() => {
                  const dt = qe.ownerDocument.activeElement;
                  dt?.matches('input,ion-input, ion-textarea') && dt.blur();
                });
            const wt = Be.get(be) || [];
            return Be.set(be, [...wt, pt]), yield pt.play(), !0;
          });
          return function (Te, qe, nt, Ze) {
            return je.apply(this, arguments);
          };
        })(),
        $ = (je, be) => {
          let Te;
          const qe = new Promise((nt) => (Te = nt));
          return (
            q(je, be, (nt) => {
              Te(nt.detail);
            }),
            qe
          );
        },
        q = (je, be, Te) => {
          const qe = (nt) => {
            (0, W.b)(je, be, qe), Te(nt);
          };
          (0, W.a)(je, be, qe);
        },
        Le = (je) => 'cancel' === je || je === oe,
        pe = (je) => je(),
        me = (je, be) => {
          if ('function' == typeof je)
            return L.c.get(
              '_zoneGate',
              pe
            )(() => {
              try {
                return je(be);
              } catch (qe) {
                throw qe;
              }
            });
        },
        oe = 'backdrop',
        He = 'gesture';
    },
    6146: (ut, $e, M) => {
      'use strict';
      M.d($e, { k: () => o });
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
    4206: (ut, $e, M) => {
      'use strict';
      M.d($e, { M: () => o });
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
    1022: (ut, $e, M) => {
      'use strict';
      M.d($e, { h: () => o });
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
    6436: (ut, $e, M) => {
      'use strict';
      M.d($e, { K: () => o });
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
    1642: (ut, $e, M) => {
      'use strict';
      M.d($e, { h: () => V });
      var o = M(1135),
        L = M(6146),
        Y = M(4206),
        W = M(1022),
        ge = M(5861),
        Be = M(8256),
        re = M(5035);
      class Fe {
        constructor(A) {
          (this.alertController = A),
            (this.announcementsQueue = []),
            (this.isPresenting = !1);
        }
        announceDeaths(A) {
          const q = {
            header: 'Morts \xe0 annoncer',
            message: A.map((Le) => `<p>${Le.name}</p>`).join(''),
          };
          this.addAnnouncementToQueue(q);
        }
        addAnnouncementToQueue(A) {
          this.announcementsQueue.push({ ...A, buttons: ['OK'] }),
            this.isPresenting || this.showNextAnnouncement();
        }
        showNextAnnouncement() {
          var A = this;
          return (0, ge.Z)(function* () {
            A.isPresenting = !0;
            const $ = yield A.alertController.create(
              A.announcementsQueue.shift()
            );
            $.onDidDismiss().then(() => {
              A.announcementsQueue.length > 0
                ? A.showNextAnnouncement()
                : (A.isPresenting = !1);
            }),
              yield $.present();
          })();
        }
        static #e = (this.ɵfac = function ($) {
          return new ($ || Fe)(Be.LFG(re.Br));
        });
        static #t = (this.ɵprov = Be.Yz7({
          token: Fe,
          factory: Fe.ɵfac,
          providedIn: 'root',
        }));
      }
      class Ae {
        constructor() {
          (this.isOnlyOnce = !1), (this.isDuringDay = !0);
        }
        handleAction(A, $) {
          const q = [...A];
          return (q.find((Le) => Le.id === $[0]).isDead = !0), q;
        }
        getRoundConfig(A) {
          return {
            role: W.h.VILLAGEOIS,
            selectablePlayers: this.getKillablePlayers(A),
            maxSelectable: 1,
            minSelectable: 1,
            isDuringDay: this.isDuringDay,
          };
        }
        getKillablePlayers(A) {
          return A.filter(($) => !$.isDead).map(($) => $.id);
        }
      }
      class Pe {
        constructor() {
          (this.isOnlyOnce = !0), (this.isDuringDay = !0);
        }
        handleAction(A, $) {
          const q = [...A];
          return q.find((Le) => Le.id === $[0])?.statuses.add(Y.M.CAPTAIN), q;
        }
        getRoundConfig(A) {
          return {
            role: W.h.CAPITAINE,
            selectablePlayers: this.getSelectablePlayers(A),
            maxSelectable: 1,
            minSelectable: 1,
            isDuringDay: this.isDuringDay,
          };
        }
        getSelectablePlayers(A) {
          return A.filter(($) => !$.isDead).map(($) => $.id);
        }
      }
      class ve {
        constructor() {
          (this.isOnlyOnce = !1), (this.isDuringDay = !1);
        }
        handleAction(A, $) {
          const q = [...A];
          return (
            q.find((Le) => Le.id === $[0])?.statuses.add(Y.M.WOLF_TARGET), q
          );
        }
        getRoundConfig(A) {
          return {
            role: W.h.LOUP_GAROU,
            selectablePlayers: A.filter(
              ($) => $.role !== L.k.LOUP_GAROU && !$.isDead
            ).map(($) => $.id),
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
        handleAction(A, $) {
          const q = [...A];
          return (
            $.length > 0 &&
              (q.find((Le) => Le.id === $[0])?.statuses.delete(Y.M.WOLF_TARGET),
              q
                .find((Le) => Le.role === L.k.SORCIERE)
                ?.statuses.delete(Y.M.HEALTH_POTION)),
            q
          );
        }
        getRoundConfig(A) {
          return {
            role: W.h.SORCIERE_HEALTH,
            selectablePlayers: this.canHeal(A)
              ? this.getHealablePlayers(A)
              : [],
            maxSelectable: 1,
            minSelectable: 0,
            isDuringDay: this.isDuringDay,
          };
        }
        canHeal(A) {
          return (
            A.find(($) => $.role === L.k.SORCIERE)?.statuses.has(
              Y.M.HEALTH_POTION
            ) ?? !1
          );
        }
        getHealablePlayers(A) {
          return A.filter(($) => $.statuses.has(Y.M.WOLF_TARGET)).map(
            ($) => $.id
          );
        }
      }
      class ce {
        constructor() {
          (this.isOnlyOnce = !1), (this.isDuringDay = !1);
        }
        handleAction(A, $) {
          const q = [...A];
          return (
            $.length > 0 &&
              ((q.find((Le) => Le.id === $[0]).isDead = !0),
              q
                .find((Le) => Le.role === L.k.SORCIERE)
                ?.statuses.delete(Y.M.DEATH_POTION)),
            q
          );
        }
        getRoundConfig(A) {
          return {
            role: W.h.SORCIERE_KILL,
            selectablePlayers: this.canKill(A)
              ? this.getKillablePlayers(A)
              : [],
            maxSelectable: 1,
            minSelectable: 0,
            isDuringDay: this.isDuringDay,
          };
        }
        canKill(A) {
          return (
            A.find(($) => $.role === L.k.SORCIERE)?.statuses.has(
              Y.M.DEATH_POTION
            ) ?? !1
          );
        }
        getKillablePlayers(A) {
          return A.filter(($) => $.role !== L.k.SORCIERE && !$.isDead).map(
            ($) => $.id
          );
        }
      }
      class J {
        constructor() {
          (this.isOnlyOnce = !0), (this.isDuringDay = !1);
        }
        handleAction(A, $) {
          const q = [...A];
          return (
            q
              .filter((Le) => $.includes(Le.id))
              .forEach((Le) => Le.statuses.add(Y.M.LOVER)),
            q
          );
        }
        getRoundConfig(A) {
          return {
            role: W.h.CUPIDON,
            selectablePlayers: A.map(($) => $.id),
            maxSelectable: 2,
            minSelectable: 2,
            isDuringDay: this.isDuringDay,
          };
        }
      }
      class Ee {
        constructor(A, $, q) {
          (this.roundRole = A), (this.isOnlyOnce = $), (this.isDuringDay = q);
        }
        handleAction(A, $) {
          return [...A];
        }
        getRoundConfig(A) {
          return {
            role: this.roundRole,
            selectablePlayers: [],
            maxSelectable: 0,
            minSelectable: 0,
            isDuringDay: this.isDuringDay,
          };
        }
      }
      class Ne extends Ee {
        constructor() {
          super(W.h.AMOUREUX, !0, !1);
        }
      }
      class de {
        constructor() {
          (this.isOnlyOnce = !0), (this.isDuringDay = !0);
        }
        handleAction(A, $) {
          const q = [...A];
          return (q.find((Le) => Le.id === $[0]).isDead = !0), q;
        }
        getRoundConfig(A) {
          return {
            role: W.h.CHASSEUR,
            selectablePlayers: this.getKillablePlayers(A),
            maxSelectable: 1,
            minSelectable: 1,
            isDuringDay: this.isDuringDay,
          };
        }
        getKillablePlayers(A) {
          return A.filter(($) => $.role !== L.k.CHASSEUR && !$.isDead).map(
            ($) => $.id
          );
        }
      }
      class ee extends Ee {
        constructor() {
          super(W.h.VOYANTE, !1, !1);
        }
      }
      class Ve {
        constructor() {
          this.roundHandlers = new Map();
        }
        initHandlers(A) {
          this.roundHandlers.clear();
          const $ = new Set(A);
          this.roundHandlers.set(W.h.VILLAGEOIS, new Ae()),
            this.roundHandlers.set(W.h.CAPITAINE, new Pe()),
            $.has(L.k.LOUP_GAROU) &&
              this.roundHandlers.set(W.h.LOUP_GAROU, new ve()),
            $.has(L.k.SORCIERE) &&
              (this.roundHandlers.set(W.h.SORCIERE_HEALTH, new we()),
              this.roundHandlers.set(W.h.SORCIERE_KILL, new ce())),
            $.has(L.k.CUPIDON) &&
              (this.roundHandlers.set(W.h.CUPIDON, new J()),
              this.roundHandlers.set(W.h.AMOUREUX, new Ne())),
            $.has(L.k.CHASSEUR) &&
              this.roundHandlers.set(W.h.CHASSEUR, new de()),
            $.has(L.k.VOYANTE) && this.roundHandlers.set(W.h.VOYANTE, new ee());
        }
        getHandler(A) {
          return this.roundHandlers.get(A);
        }
        removeHandlers(A) {
          const $ = new Set(A);
          $.has(L.k.LOUP_GAROU) && this.roundHandlers.delete(W.h.LOUP_GAROU),
            $.has(L.k.SORCIERE) &&
              (this.roundHandlers.delete(W.h.SORCIERE_HEALTH),
              this.roundHandlers.delete(W.h.SORCIERE_KILL)),
            $.has(L.k.CUPIDON) && this.roundHandlers.delete(W.h.CUPIDON),
            $.has(L.k.CHASSEUR) && this.roundHandlers.delete(W.h.CHASSEUR),
            $.has(L.k.VOYANTE) && this.roundHandlers.delete(W.h.VOYANTE);
        }
        static #e = (this.ɵfac = function ($) {
          return new ($ || Ve)();
        });
        static #t = (this.ɵprov = Be.Yz7({
          token: Ve,
          factory: Ve.ɵfac,
          providedIn: 'root',
        }));
      }
      var fe = M(6436);
      class Ce {
        isVictorious(A) {
          const $ = A.filter((q) => !q.isDead);
          return 2 === $.length && $.every((q) => q.statuses.has(Y.M.LOVER));
        }
      }
      class he {
        isVictorious(A) {
          return A.filter(($) => !$.isDead).every(
            ($) => $.role === L.k.LOUP_GAROU
          );
        }
      }
      class xe {
        isVictorious(A) {
          return 0 === A.filter(($) => !$.isDead).length;
        }
      }
      class le {
        isVictorious(A) {
          return A.filter(($) => !$.isDead).every(
            ($) => $.role !== L.k.LOUP_GAROU
          );
        }
      }
      class z {
        constructor() {
          (this.victoryHandlers = new Map()),
            (this.victoryPriorities = [
              fe.K.NONE,
              fe.K.AMOUREUX,
              fe.K.LOUP_GAROU,
              fe.K.VILLAGEOIS,
            ]);
        }
        initHandlers(A) {
          this.victoryHandlers.clear();
          const $ = new Set(A);
          this.victoryHandlers.set(fe.K.NONE, new xe()),
            this.victoryHandlers.set(fe.K.VILLAGEOIS, new le()),
            $.has(L.k.LOUP_GAROU) &&
              this.victoryHandlers.set(fe.K.LOUP_GAROU, new he()),
            $.has(L.k.CUPIDON) &&
              this.victoryHandlers.set(fe.K.AMOUREUX, new Ce());
        }
        removeUselessHandlers(A) {
          this.victoryHandlers.has(fe.K.AMOUREUX) &&
            A.filter(($) => $.statuses.has(Y.M.LOVER)).some(($) => $.isDead) &&
            this.victoryHandlers.delete(fe.K.AMOUREUX);
        }
        getVictory(A) {
          let $;
          for (const q of this.victoryPriorities) {
            const Le = this.victoryHandlers.get(q);
            if (void 0 !== Le && Le.isVictorious(A)) {
              $ = q;
              break;
            }
          }
          return $;
        }
        static #e = (this.ɵfac = function ($) {
          return new ($ || z)();
        });
        static #t = (this.ɵprov = Be.Yz7({
          token: z,
          factory: z.ɵfac,
          providedIn: 'root',
        }));
      }
      class ie {
        constructor(A, $, q) {
          (this.roundHandlersService = A),
            (this.victoryHandlersService = $),
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
        handleNewDeaths(A) {
          this.rolesToRemove = [];
          const $ = [...A];
          return (
            this.handleWolfTarget($),
            $.filter((q) => q.isDead && !this.knownDeaths.has(q.id)).forEach(
              (q) => this.handlePlayerDeath($, q)
            ),
            this.roundHandlersService.removeHandlers(this.rolesToRemove),
            this.victoryHandlersService.removeUselessHandlers(A),
            $
          );
        }
        announceDeaths() {
          this.deathsToAnnounce.length > 0 &&
            (this.announcementService.announceDeaths(this.deathsToAnnounce),
            (this.deathsToAnnounce = []));
        }
        handleWolfTarget(A) {
          A.filter(($) => $.statuses.has(Y.M.WOLF_TARGET)).forEach(($) => {
            $.statuses.delete(Y.M.WOLF_TARGET), ($.isDead = !0);
          });
        }
        handlePlayerDeath(A, $) {
          this.knownDeaths.add($.id),
            this.deathsToAnnounce.push($),
            this.handlePlayerDeathStatuses(A, $),
            this.handlePlayerDeathRole(A, $);
        }
        handlePlayerDeathStatuses(A, $) {
          if (
            ($.statuses.has(Y.M.CAPTAIN) &&
              ($.statuses.delete(Y.M.CAPTAIN),
              this.afterDeathRoundQueue.push(W.h.CAPITAINE)),
            $.statuses.has(Y.M.LOVER))
          ) {
            const q = A.find(
              (Le) => Le.statuses.has(Y.M.LOVER) && Le.id !== $.id && !Le.isDead
            );
            void 0 !== q && ((q.isDead = !0), this.handlePlayerDeath(A, q));
          }
        }
        handlePlayerDeathRole(A, $) {
          switch ($.role) {
            case L.k.LOUP_GAROU:
              0 ===
                A.filter((q) => q.role === L.k.LOUP_GAROU && !q.isDead)
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
        static #e = (this.ɵfac = function ($) {
          return new ($ || ie)(Be.LFG(Ve), Be.LFG(z), Be.LFG(Fe));
        });
        static #t = (this.ɵprov = Be.Yz7({
          token: ie,
          factory: ie.ɵfac,
          providedIn: 'root',
        }));
      }
      class ue {
        constructor(A, $) {
          (this.roundHandlersService = A),
            (this.deathService = $),
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
        getNextRound(A) {
          this.roundHandlersService.getHandler(A)?.isOnlyOnce &&
            this.uniqueRoundsPassed.add(A);
          const q = this.deathService.getNextAfterDeathRound();
          if (void 0 !== q) return (this.beforeDeathRound = A), q;
          this.beforeDeathRound &&
            ((A = this.beforeDeathRound), (this.beforeDeathRound = void 0));
          const Le = this.sortedRounds.indexOf(A);
          let pe,
            oe,
            me = Le + 1;
          me > this.sortedRounds.length - 1 && (me = 0);
          do {
            (oe = this.sortedRounds[me]),
              (pe = this.roundHandlersService.getHandler(oe)),
              me++,
              me > this.sortedRounds.length - 1 && (me = 0);
          } while (
            (void 0 === pe || this.uniqueRoundsPassed.has(oe)) &&
            me !== Le
          );
          if (void 0 === pe || this.uniqueRoundsPassed.has(oe))
            throw new Error('No next round found');
          return oe;
        }
        getFirstRound() {
          let A,
            q,
            $ = 0;
          do {
            if (
              ((q = this.sortedRounds[$]),
              (A = this.roundHandlersService.getHandler(q)),
              $++,
              $ > this.sortedRounds.length - 1)
            )
              throw new Error('No first round found');
          } while (void 0 === A);
          return q;
        }
        static #e = (this.ɵfac = function ($) {
          return new ($ || ue)(Be.LFG(Ve), Be.LFG(ie));
        });
        static #t = (this.ɵprov = Be.Yz7({
          token: ue,
          factory: ue.ɵfac,
          providedIn: 'root',
        }));
      }
      var k = M(3165);
      class V {
        constructor(A, $, q, Le, pe) {
          (this.router = A),
            (this.roundHandlersService = $),
            (this.victoryHandlersService = q),
            (this.roundOrchestrationService = Le),
            (this.deathService = pe),
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
        createGame(A) {
          const $ = A.map((Le) => Le.role);
          this.roundHandlersService.initHandlers($),
            this.victoryHandlersService.initHandlers($);
          const q = A.find((Le) => Le.role === L.k.SORCIERE);
          q &&
            (q.statuses.add(Y.M.HEALTH_POTION),
            q.statuses.add(Y.M.DEATH_POTION)),
            this.players.next(A),
            this.setFirstRound(),
            this.gameInProgess.next(!0),
            this.router.navigate(['game']);
        }
        submitRoundAction(A) {
          const $ = this.round.value?.role;
          if (void 0 !== $) {
            const q = this.roundHandlersService.getHandler($);
            if (void 0 !== q) {
              const Le = q.handleAction(this.players.value, A);
              this.players.next(Le), this.nextRound();
            }
          }
        }
        setFirstRound() {
          const A = this.roundOrchestrationService.getFirstRound();
          this.setRound(A);
        }
        nextRound() {
          const A = this.round.value?.role;
          if (void 0 === A) throw new Error('No current round');
          const $ = this.roundHandlersService.getHandler(A);
          if ($?.isDuringDay) {
            const pe = this.deathService.handleNewDeaths(this.players.value);
            this.players.next(pe);
          }
          let q = this.roundOrchestrationService.getNextRound(A);
          const Le = this.roundHandlersService.getHandler(q);
          if (void 0 !== Le && Le.isDuringDay && !$?.isDuringDay) {
            const pe = this.deathService.handleNewDeaths(this.players.value);
            this.players.next(pe),
              (q = this.roundOrchestrationService.getNextRound(A));
          }
          if ((Le?.isDuringDay || $?.isDuringDay) && q !== W.h.CHASSEUR) {
            const pe = this.victoryHandlersService.getVictory(
              this.players.value
            );
            if (void 0 !== pe)
              return (
                this.gameInProgess.next(!1),
                void this.router.navigate(['victory'], {
                  queryParams: { victory: pe },
                })
              );
            this.deathService.announceDeaths();
          }
          this.setRound(q);
        }
        setRound(A) {
          const $ = this.roundHandlersService.getHandler(A);
          if (void 0 !== $) {
            const q = $.getRoundConfig(this.players.value);
            this.round.next(q);
          }
        }
        static #e = (this.ɵfac = function ($) {
          return new ($ || V)(
            Be.LFG(k.F0),
            Be.LFG(Ve),
            Be.LFG(z),
            Be.LFG(ue),
            Be.LFG(ie)
          );
        });
        static #t = (this.ɵprov = Be.Yz7({
          token: V,
          factory: V.ɵfac,
          providedIn: 'root',
        }));
      }
    },
    383: (ut, $e, M) => {
      'use strict';
      var o = M(8256),
        L = M(1481),
        Y = M(3165),
        W = M(5035),
        ge = M(6895),
        Be = M(7579),
        re = M(9300),
        Fe = M(4482),
        Ae = M(5403),
        Pe = M(8421),
        ve = M(5032),
        ce = M(1642);
      const J = ['menu'];
      function Ee(Ce, he) {
        1 & Ce &&
          (o.TgZ(0, 'ion-item', 7), o._uU(1, 'Partie en cours'), o.qZA());
      }
      const Ne = function () {
        return { exact: !0 };
      };
      class de {
        constructor(he, xe) {
          (this.router = he),
            (this.gameService = xe),
            (this.destroy$ = new Be.x()),
            (this.isGameInProgress$ = this.gameService.isGameInProgress());
        }
        ngAfterViewInit() {
          this.router.events
            .pipe(
              (0, re.h)((he) => he instanceof Y.m2),
              (function we(Ce) {
                return (0, Fe.e)((he, xe) => {
                  (0, Pe.Xf)(Ce).subscribe(
                    (0, Ae.x)(xe, () => xe.complete(), ve.Z)
                  ),
                    !xe.closed && he.subscribe(xe);
                });
              })(this.destroy$)
            )
            .subscribe(() => this.menu?.close());
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete();
        }
        static #e = (this.ɵfac = function (xe) {
          return new (xe || de)(o.Y36(Y.F0), o.Y36(ce.h));
        });
        static #t = (this.ɵcmp = o.Xpm({
          type: de,
          selectors: [['lgmj-menu']],
          viewQuery: function (xe, le) {
            if ((1 & xe && o.Gf(J, 5), 2 & xe)) {
              let z;
              o.iGM((z = o.CRH())) && (le.menu = z.first);
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
          template: function (xe, le) {
            1 & xe &&
              (o.TgZ(0, 'ion-menu', 0, 1)(2, 'ion-header')(3, 'ion-toolbar')(
                4,
                'ion-title'
              ),
              o._uU(5, 'Menu'),
              o.qZA()()(),
              o.TgZ(6, 'ion-content')(7, 'ion-item', 2),
              o._uU(8, 'Accueil'),
              o.qZA(),
              o.YNc(9, Ee, 2, 0, 'ion-item', 3),
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
              2 & xe &&
                (o.xp6(7),
                o.Q6J('routerLinkActiveOptions', o.DdM(4, Ne)),
                o.xp6(2),
                o.Q6J('ngIf', o.lcZ(10, 2, le.isGameInProgress$)));
          },
          dependencies: [
            ge.ez,
            ge.O5,
            ge.Ov,
            W.Pc,
            W.W2,
            W.Gu,
            W.Ie,
            W.z0,
            W.wd,
            W.sr,
            W.YI,
            Y.rH,
            Y.Od,
          ],
          styles: ['ion-item.active[_ngcontent-%COMP%]{opacity:.5}'],
        }));
      }
      class ee {
        constructor(he) {
          this.environmentInjector = he;
        }
        static #e = (this.ɵfac = function (xe) {
          return new (xe || ee)(o.Y36(o.lqb));
        });
        static #t = (this.ɵcmp = o.Xpm({
          type: ee,
          selectors: [['lgmj-root']],
          standalone: !0,
          features: [o.jDz],
          decls: 3,
          vars: 1,
          consts: [['id', 'router-outlet', 3, 'environmentInjector']],
          template: function (xe, le) {
            1 & xe &&
              (o.TgZ(0, 'ion-app'),
              o._UZ(1, 'lgmj-menu')(2, 'ion-router-outlet', 0),
              o.qZA()),
              2 & xe &&
                (o.xp6(2),
                o.Q6J('environmentInjector', le.environmentInjector));
          },
          dependencies: [ge.ez, W.Pc, W.dr, W.jP, de],
        }));
      }
      const Ve = [
        {
          path: 'victory',
          title: 'LG Assistant MJ | Victoire',
          loadComponent: () =>
            Promise.all([M.e(8592), M.e(5220)])
              .then(M.bind(M, 5220))
              .then((Ce) => Ce.VictoryPage),
        },
        {
          path: 'game',
          title: 'LG Assistant MJ | Partie en cours',
          loadComponent: () =>
            Promise.all([M.e(8592), M.e(3903)])
              .then(M.bind(M, 3903))
              .then((Ce) => Ce.GamePage),
        },
        {
          path: 'new-game',
          title: 'LG Assistant MJ | Nouvelle partie',
          loadComponent: () =>
            Promise.all([M.e(8592), M.e(8724)])
              .then(M.bind(M, 8724))
              .then((Ce) => Ce.NewGamePage),
        },
        {
          path: 'roles-rules',
          title: 'LG Assistant MJ | R\xe8gles des r\xf4les',
          loadComponent: () =>
            Promise.all([M.e(8592), M.e(2451)])
              .then(M.bind(M, 2451))
              .then((Ce) => Ce.RolesRulesPage),
        },
        {
          path: 'status-legends',
          title: 'LG Assistant MJ | L\xe9gende des statuts',
          loadComponent: () =>
            Promise.all([M.e(8592), M.e(4171)])
              .then(M.bind(M, 4171))
              .then((Ce) => Ce.StatusLegendsPage),
        },
        {
          path: '',
          pathMatch: 'full',
          title: 'LG Assistant MJ | Accueil',
          loadComponent: () =>
            Promise.all([M.e(8592), M.e(4048)])
              .then(M.bind(M, 4048))
              .then((Ce) => Ce.HomePage),
        },
      ];
      (0, o.G48)(),
        (0, L.Cg)(ee, {
          providers: [
            (0, Y.bU)(Ve, (0, Y.aF)(Y.wm)),
            (0, o.RIp)(W.Pc.forRoot()),
            { provide: Y.wN, useClass: W.r4 },
          ],
        }).catch((Ce) => console.error(Ce));
    },
    1135: (ut, $e, M) => {
      'use strict';
      M.d($e, { X: () => L });
      var o = M(7579);
      class L extends o.x {
        constructor(W) {
          super(), (this._value = W);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(W) {
          const ge = super._subscribe(W);
          return !ge.closed && W.next(this._value), ge;
        }
        getValue() {
          const { hasError: W, thrownError: ge, _value: Be } = this;
          if (W) throw ge;
          return this._throwIfClosed(), Be;
        }
        next(W) {
          super.next((this._value = W));
        }
      }
    },
    9751: (ut, $e, M) => {
      'use strict';
      M.d($e, { y: () => Fe });
      var o = M(930),
        L = M(727),
        Y = M(8822),
        W = M(9635),
        ge = M(2416),
        Be = M(576),
        re = M(2806);
      let Fe = (() => {
        class we {
          constructor(J) {
            J && (this._subscribe = J);
          }
          lift(J) {
            const Ee = new we();
            return (Ee.source = this), (Ee.operator = J), Ee;
          }
          subscribe(J, Ee, Ne) {
            const de = (function ve(we) {
              return (
                (we && we instanceof o.Lv) ||
                ((function Pe(we) {
                  return (
                    we &&
                    (0, Be.m)(we.next) &&
                    (0, Be.m)(we.error) &&
                    (0, Be.m)(we.complete)
                  );
                })(we) &&
                  (0, L.Nn)(we))
              );
            })(J)
              ? J
              : new o.Hp(J, Ee, Ne);
            return (
              (0, re.x)(() => {
                const { operator: ee, source: Ve } = this;
                de.add(
                  ee
                    ? ee.call(de, Ve)
                    : Ve
                    ? this._subscribe(de)
                    : this._trySubscribe(de)
                );
              }),
              de
            );
          }
          _trySubscribe(J) {
            try {
              return this._subscribe(J);
            } catch (Ee) {
              J.error(Ee);
            }
          }
          forEach(J, Ee) {
            return new (Ee = Ae(Ee))((Ne, de) => {
              const ee = new o.Hp({
                next: (Ve) => {
                  try {
                    J(Ve);
                  } catch (fe) {
                    de(fe), ee.unsubscribe();
                  }
                },
                error: de,
                complete: Ne,
              });
              this.subscribe(ee);
            });
          }
          _subscribe(J) {
            var Ee;
            return null === (Ee = this.source) || void 0 === Ee
              ? void 0
              : Ee.subscribe(J);
          }
          [Y.L]() {
            return this;
          }
          pipe(...J) {
            return (0, W.U)(J)(this);
          }
          toPromise(J) {
            return new (J = Ae(J))((Ee, Ne) => {
              let de;
              this.subscribe(
                (ee) => (de = ee),
                (ee) => Ne(ee),
                () => Ee(de)
              );
            });
          }
        }
        return (we.create = (ce) => new we(ce)), we;
      })();
      function Ae(we) {
        var ce;
        return null !== (ce = we ?? ge.v.Promise) && void 0 !== ce
          ? ce
          : Promise;
      }
    },
    7579: (ut, $e, M) => {
      'use strict';
      M.d($e, { x: () => re });
      var o = M(9751),
        L = M(727);
      const W = (0, M(3888).d)(
        (Ae) =>
          function () {
            Ae(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          }
      );
      var ge = M(8737),
        Be = M(2806);
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
          lift(ve) {
            const we = new Fe(this, this);
            return (we.operator = ve), we;
          }
          _throwIfClosed() {
            if (this.closed) throw new W();
          }
          next(ve) {
            (0, Be.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const we of this.currentObservers) we.next(ve);
              }
            });
          }
          error(ve) {
            (0, Be.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = ve);
                const { observers: we } = this;
                for (; we.length; ) we.shift().error(ve);
              }
            });
          }
          complete() {
            (0, Be.x)(() => {
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
            const { hasError: we, isStopped: ce, observers: J } = this;
            return we || ce
              ? L.Lc
              : ((this.currentObservers = null),
                J.push(ve),
                new L.w0(() => {
                  (this.currentObservers = null), (0, ge.P)(J, ve);
                }));
          }
          _checkFinalizedStatuses(ve) {
            const { hasError: we, thrownError: ce, isStopped: J } = this;
            we ? ve.error(ce) : J && ve.complete();
          }
          asObservable() {
            const ve = new o.y();
            return (ve.source = this), ve;
          }
        }
        return (Ae.create = (Pe, ve) => new Fe(Pe, ve)), Ae;
      })();
      class Fe extends re {
        constructor(Pe, ve) {
          super(), (this.destination = Pe), (this.source = ve);
        }
        next(Pe) {
          var ve, we;
          null ===
            (we =
              null === (ve = this.destination) || void 0 === ve
                ? void 0
                : ve.next) ||
            void 0 === we ||
            we.call(ve, Pe);
        }
        error(Pe) {
          var ve, we;
          null ===
            (we =
              null === (ve = this.destination) || void 0 === ve
                ? void 0
                : ve.error) ||
            void 0 === we ||
            we.call(ve, Pe);
        }
        complete() {
          var Pe, ve;
          null ===
            (ve =
              null === (Pe = this.destination) || void 0 === Pe
                ? void 0
                : Pe.complete) ||
            void 0 === ve ||
            ve.call(Pe);
        }
        _subscribe(Pe) {
          var ve, we;
          return null !==
            (we =
              null === (ve = this.source) || void 0 === ve
                ? void 0
                : ve.subscribe(Pe)) && void 0 !== we
            ? we
            : L.Lc;
        }
      }
    },
    930: (ut, $e, M) => {
      'use strict';
      M.d($e, { Hp: () => Ne, Lv: () => we });
      var o = M(576),
        L = M(727),
        Y = M(2416),
        W = M(7849),
        ge = M(5032);
      const Be = Ae('C', void 0, void 0);
      function Ae(Ce, he, xe) {
        return { kind: Ce, value: he, error: xe };
      }
      var Pe = M(3410),
        ve = M(2806);
      class we extends L.w0 {
        constructor(he) {
          super(),
            (this.isStopped = !1),
            he
              ? ((this.destination = he), (0, L.Nn)(he) && he.add(this))
              : (this.destination = fe);
        }
        static create(he, xe, le) {
          return new Ne(he, xe, le);
        }
        next(he) {
          this.isStopped
            ? Ve(
                (function Fe(Ce) {
                  return Ae('N', Ce, void 0);
                })(he),
                this
              )
            : this._next(he);
        }
        error(he) {
          this.isStopped
            ? Ve(
                (function re(Ce) {
                  return Ae('E', void 0, Ce);
                })(he),
                this
              )
            : ((this.isStopped = !0), this._error(he));
        }
        complete() {
          this.isStopped
            ? Ve(Be, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(he) {
          this.destination.next(he);
        }
        _error(he) {
          try {
            this.destination.error(he);
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
      const ce = Function.prototype.bind;
      function J(Ce, he) {
        return ce.call(Ce, he);
      }
      class Ee {
        constructor(he) {
          this.partialObserver = he;
        }
        next(he) {
          const { partialObserver: xe } = this;
          if (xe.next)
            try {
              xe.next(he);
            } catch (le) {
              de(le);
            }
        }
        error(he) {
          const { partialObserver: xe } = this;
          if (xe.error)
            try {
              xe.error(he);
            } catch (le) {
              de(le);
            }
          else de(he);
        }
        complete() {
          const { partialObserver: he } = this;
          if (he.complete)
            try {
              he.complete();
            } catch (xe) {
              de(xe);
            }
        }
      }
      class Ne extends we {
        constructor(he, xe, le) {
          let z;
          if ((super(), (0, o.m)(he) || !he))
            z = {
              next: he ?? void 0,
              error: xe ?? void 0,
              complete: le ?? void 0,
            };
          else {
            let ie;
            this && Y.v.useDeprecatedNextContext
              ? ((ie = Object.create(he)),
                (ie.unsubscribe = () => this.unsubscribe()),
                (z = {
                  next: he.next && J(he.next, ie),
                  error: he.error && J(he.error, ie),
                  complete: he.complete && J(he.complete, ie),
                }))
              : (z = he);
          }
          this.destination = new Ee(z);
        }
      }
      function de(Ce) {
        Y.v.useDeprecatedSynchronousErrorHandling
          ? (0, ve.O)(Ce)
          : (0, W.h)(Ce);
      }
      function Ve(Ce, he) {
        const { onStoppedNotification: xe } = Y.v;
        xe && Pe.z.setTimeout(() => xe(Ce, he));
      }
      const fe = {
        closed: !0,
        next: ge.Z,
        error: function ee(Ce) {
          throw Ce;
        },
        complete: ge.Z,
      };
    },
    727: (ut, $e, M) => {
      'use strict';
      M.d($e, { Lc: () => Be, w0: () => ge, Nn: () => re });
      var o = M(576);
      const Y = (0, M(3888).d)(
        (Ae) =>
          function (ve) {
            Ae(this),
              (this.message = ve
                ? `${ve.length} errors occurred during unsubscription:\n${ve
                    .map((we, ce) => `${ce + 1}) ${we.toString()}`)
                    .join('\n  ')}`
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = ve);
          }
      );
      var W = M(8737);
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
            const { _parentage: ve } = this;
            if (ve)
              if (((this._parentage = null), Array.isArray(ve)))
                for (const J of ve) J.remove(this);
              else ve.remove(this);
            const { initialTeardown: we } = this;
            if ((0, o.m)(we))
              try {
                we();
              } catch (J) {
                Pe = J instanceof Y ? J.errors : [J];
              }
            const { _finalizers: ce } = this;
            if (ce) {
              this._finalizers = null;
              for (const J of ce)
                try {
                  Fe(J);
                } catch (Ee) {
                  (Pe = Pe ?? []),
                    Ee instanceof Y
                      ? (Pe = [...Pe, ...Ee.errors])
                      : Pe.push(Ee);
                }
            }
            if (Pe) throw new Y(Pe);
          }
        }
        add(Pe) {
          var ve;
          if (Pe && Pe !== this)
            if (this.closed) Fe(Pe);
            else {
              if (Pe instanceof ge) {
                if (Pe.closed || Pe._hasParent(this)) return;
                Pe._addParent(this);
              }
              (this._finalizers =
                null !== (ve = this._finalizers) && void 0 !== ve
                  ? ve
                  : []).push(Pe);
            }
        }
        _hasParent(Pe) {
          const { _parentage: ve } = this;
          return ve === Pe || (Array.isArray(ve) && ve.includes(Pe));
        }
        _addParent(Pe) {
          const { _parentage: ve } = this;
          this._parentage = Array.isArray(ve)
            ? (ve.push(Pe), ve)
            : ve
            ? [ve, Pe]
            : Pe;
        }
        _removeParent(Pe) {
          const { _parentage: ve } = this;
          ve === Pe
            ? (this._parentage = null)
            : Array.isArray(ve) && (0, W.P)(ve, Pe);
        }
        remove(Pe) {
          const { _finalizers: ve } = this;
          ve && (0, W.P)(ve, Pe), Pe instanceof ge && Pe._removeParent(this);
        }
      }
      ge.EMPTY = (() => {
        const Ae = new ge();
        return (Ae.closed = !0), Ae;
      })();
      const Be = ge.EMPTY;
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
    2416: (ut, $e, M) => {
      'use strict';
      M.d($e, { v: () => o });
      const o = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    515: (ut, $e, M) => {
      'use strict';
      M.d($e, { E: () => L });
      const L = new (M(9751).y)((ge) => ge.complete());
    },
    2076: (ut, $e, M) => {
      'use strict';
      M.d($e, { D: () => le });
      var o = M(8421),
        L = M(9672),
        Y = M(4482),
        W = M(5403);
      function ge(z, ie = 0) {
        return (0, Y.e)((ue, k) => {
          ue.subscribe(
            (0, W.x)(
              k,
              (V) => (0, L.f)(k, z, () => k.next(V), ie),
              () => (0, L.f)(k, z, () => k.complete(), ie),
              (V) => (0, L.f)(k, z, () => k.error(V), ie)
            )
          );
        });
      }
      function Be(z, ie = 0) {
        return (0, Y.e)((ue, k) => {
          k.add(z.schedule(() => ue.subscribe(k), ie));
        });
      }
      var Ae = M(9751),
        ve = M(2202),
        we = M(576);
      function J(z, ie) {
        if (!z) throw new Error('Iterable cannot be null');
        return new Ae.y((ue) => {
          (0, L.f)(ue, ie, () => {
            const k = z[Symbol.asyncIterator]();
            (0, L.f)(
              ue,
              ie,
              () => {
                k.next().then((V) => {
                  V.done ? ue.complete() : ue.next(V.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var Ee = M(3670),
        Ne = M(8239),
        de = M(1144),
        ee = M(6495),
        Ve = M(2206),
        fe = M(4532),
        Ce = M(3260);
      function le(z, ie) {
        return ie
          ? (function xe(z, ie) {
              if (null != z) {
                if ((0, Ee.c)(z))
                  return (function re(z, ie) {
                    return (0, o.Xf)(z).pipe(Be(ie), ge(ie));
                  })(z, ie);
                if ((0, de.z)(z))
                  return (function Pe(z, ie) {
                    return new Ae.y((ue) => {
                      let k = 0;
                      return ie.schedule(function () {
                        k === z.length
                          ? ue.complete()
                          : (ue.next(z[k++]), ue.closed || this.schedule());
                      });
                    });
                  })(z, ie);
                if ((0, Ne.t)(z))
                  return (function Fe(z, ie) {
                    return (0, o.Xf)(z).pipe(Be(ie), ge(ie));
                  })(z, ie);
                if ((0, Ve.D)(z)) return J(z, ie);
                if ((0, ee.T)(z))
                  return (function ce(z, ie) {
                    return new Ae.y((ue) => {
                      let k;
                      return (
                        (0, L.f)(ue, ie, () => {
                          (k = z[ve.h]()),
                            (0, L.f)(
                              ue,
                              ie,
                              () => {
                                let V, U;
                                try {
                                  ({ value: V, done: U } = k.next());
                                } catch (A) {
                                  return void ue.error(A);
                                }
                                U ? ue.complete() : ue.next(V);
                              },
                              0,
                              !0
                            );
                        }),
                        () => (0, we.m)(k?.return) && k.return()
                      );
                    });
                  })(z, ie);
                if ((0, Ce.L)(z))
                  return (function he(z, ie) {
                    return J((0, Ce.Q)(z), ie);
                  })(z, ie);
              }
              throw (0, fe.z)(z);
            })(z, ie)
          : (0, o.Xf)(z);
      }
    },
    8421: (ut, $e, M) => {
      'use strict';
      M.d($e, { Xf: () => ce });
      var o = M(655),
        L = M(1144),
        Y = M(8239),
        W = M(9751),
        ge = M(3670),
        Be = M(2206),
        re = M(4532),
        Fe = M(6495),
        Ae = M(3260),
        Pe = M(576),
        ve = M(7849),
        we = M(8822);
      function ce(Ce) {
        if (Ce instanceof W.y) return Ce;
        if (null != Ce) {
          if ((0, ge.c)(Ce))
            return (function J(Ce) {
              return new W.y((he) => {
                const xe = Ce[we.L]();
                if ((0, Pe.m)(xe.subscribe)) return xe.subscribe(he);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable'
                );
              });
            })(Ce);
          if ((0, L.z)(Ce))
            return (function Ee(Ce) {
              return new W.y((he) => {
                for (let xe = 0; xe < Ce.length && !he.closed; xe++)
                  he.next(Ce[xe]);
                he.complete();
              });
            })(Ce);
          if ((0, Y.t)(Ce))
            return (function Ne(Ce) {
              return new W.y((he) => {
                Ce.then(
                  (xe) => {
                    he.closed || (he.next(xe), he.complete());
                  },
                  (xe) => he.error(xe)
                ).then(null, ve.h);
              });
            })(Ce);
          if ((0, Be.D)(Ce)) return ee(Ce);
          if ((0, Fe.T)(Ce))
            return (function de(Ce) {
              return new W.y((he) => {
                for (const xe of Ce) if ((he.next(xe), he.closed)) return;
                he.complete();
              });
            })(Ce);
          if ((0, Ae.L)(Ce))
            return (function Ve(Ce) {
              return ee((0, Ae.Q)(Ce));
            })(Ce);
        }
        throw (0, re.z)(Ce);
      }
      function ee(Ce) {
        return new W.y((he) => {
          (function fe(Ce, he) {
            var xe, le, z, ie;
            return (0, o.mG)(this, void 0, void 0, function* () {
              try {
                for (xe = (0, o.KL)(Ce); !(le = yield xe.next()).done; )
                  if ((he.next(le.value), he.closed)) return;
              } catch (ue) {
                z = { error: ue };
              } finally {
                try {
                  le && !le.done && (ie = xe.return) && (yield ie.call(xe));
                } finally {
                  if (z) throw z.error;
                }
              }
              he.complete();
            });
          })(Ce, he).catch((xe) => he.error(xe));
        });
      }
    },
    5403: (ut, $e, M) => {
      'use strict';
      M.d($e, { x: () => L });
      var o = M(930);
      function L(W, ge, Be, re, Fe) {
        return new Y(W, ge, Be, re, Fe);
      }
      class Y extends o.Lv {
        constructor(ge, Be, re, Fe, Ae, Pe) {
          super(ge),
            (this.onFinalize = Ae),
            (this.shouldUnsubscribe = Pe),
            (this._next = Be
              ? function (ve) {
                  try {
                    Be(ve);
                  } catch (we) {
                    ge.error(we);
                  }
                }
              : super._next),
            (this._error = Fe
              ? function (ve) {
                  try {
                    Fe(ve);
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
                  } catch (ve) {
                    ge.error(ve);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var ge;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: Be } = this;
            super.unsubscribe(),
              !Be &&
                (null === (ge = this.onFinalize) ||
                  void 0 === ge ||
                  ge.call(this));
          }
        }
      }
    },
    9300: (ut, $e, M) => {
      'use strict';
      M.d($e, { h: () => Y });
      var o = M(4482),
        L = M(5403);
      function Y(W, ge) {
        return (0, o.e)((Be, re) => {
          let Fe = 0;
          Be.subscribe(
            (0, L.x)(re, (Ae) => W.call(ge, Ae, Fe++) && re.next(Ae))
          );
        });
      }
    },
    4004: (ut, $e, M) => {
      'use strict';
      M.d($e, { U: () => Y });
      var o = M(4482),
        L = M(5403);
      function Y(W, ge) {
        return (0, o.e)((Be, re) => {
          let Fe = 0;
          Be.subscribe(
            (0, L.x)(re, (Ae) => {
              re.next(W.call(ge, Ae, Fe++));
            })
          );
        });
      }
    },
    8189: (ut, $e, M) => {
      'use strict';
      M.d($e, { J: () => Y });
      var o = M(5577),
        L = M(4671);
      function Y(W = 1 / 0) {
        return (0, o.z)(L.y, W);
      }
    },
    5577: (ut, $e, M) => {
      'use strict';
      M.d($e, { z: () => Fe });
      var o = M(4004),
        L = M(8421),
        Y = M(4482),
        W = M(9672),
        ge = M(5403),
        re = M(576);
      function Fe(Ae, Pe, ve = 1 / 0) {
        return (0, re.m)(Pe)
          ? Fe(
              (we, ce) =>
                (0, o.U)((J, Ee) => Pe(we, J, ce, Ee))((0, L.Xf)(Ae(we, ce))),
              ve
            )
          : ('number' == typeof Pe && (ve = Pe),
            (0, Y.e)((we, ce) =>
              (function Be(Ae, Pe, ve, we, ce, J, Ee, Ne) {
                const de = [];
                let ee = 0,
                  Ve = 0,
                  fe = !1;
                const Ce = () => {
                    fe && !de.length && !ee && Pe.complete();
                  },
                  he = (le) => (ee < we ? xe(le) : de.push(le)),
                  xe = (le) => {
                    J && Pe.next(le), ee++;
                    let z = !1;
                    (0, L.Xf)(ve(le, Ve++)).subscribe(
                      (0, ge.x)(
                        Pe,
                        (ie) => {
                          ce?.(ie), J ? he(ie) : Pe.next(ie);
                        },
                        () => {
                          z = !0;
                        },
                        void 0,
                        () => {
                          if (z)
                            try {
                              for (ee--; de.length && ee < we; ) {
                                const ie = de.shift();
                                Ee ? (0, W.f)(Pe, Ee, () => xe(ie)) : xe(ie);
                              }
                              Ce();
                            } catch (ie) {
                              Pe.error(ie);
                            }
                        }
                      )
                    );
                  };
                return (
                  Ae.subscribe(
                    (0, ge.x)(Pe, he, () => {
                      (fe = !0), Ce();
                    })
                  ),
                  () => {
                    Ne?.();
                  }
                );
              })(we, ce, Ae, ve)
            ));
      }
    },
    3900: (ut, $e, M) => {
      'use strict';
      M.d($e, { w: () => W });
      var o = M(8421),
        L = M(4482),
        Y = M(5403);
      function W(ge, Be) {
        return (0, L.e)((re, Fe) => {
          let Ae = null,
            Pe = 0,
            ve = !1;
          const we = () => ve && !Ae && Fe.complete();
          re.subscribe(
            (0, Y.x)(
              Fe,
              (ce) => {
                Ae?.unsubscribe();
                let J = 0;
                const Ee = Pe++;
                (0, o.Xf)(ge(ce, Ee)).subscribe(
                  (Ae = (0, Y.x)(
                    Fe,
                    (Ne) => Fe.next(Be ? Be(ce, Ne, Ee, J++) : Ne),
                    () => {
                      (Ae = null), we();
                    }
                  ))
                );
              },
              () => {
                (ve = !0), we();
              }
            )
          );
        });
      }
    },
    8505: (ut, $e, M) => {
      'use strict';
      M.d($e, { b: () => ge });
      var o = M(576),
        L = M(4482),
        Y = M(5403),
        W = M(4671);
      function ge(Be, re, Fe) {
        const Ae =
          (0, o.m)(Be) || re || Fe ? { next: Be, error: re, complete: Fe } : Be;
        return Ae
          ? (0, L.e)((Pe, ve) => {
              var we;
              null === (we = Ae.subscribe) || void 0 === we || we.call(Ae);
              let ce = !0;
              Pe.subscribe(
                (0, Y.x)(
                  ve,
                  (J) => {
                    var Ee;
                    null === (Ee = Ae.next) || void 0 === Ee || Ee.call(Ae, J),
                      ve.next(J);
                  },
                  () => {
                    var J;
                    (ce = !1),
                      null === (J = Ae.complete) || void 0 === J || J.call(Ae),
                      ve.complete();
                  },
                  (J) => {
                    var Ee;
                    (ce = !1),
                      null === (Ee = Ae.error) ||
                        void 0 === Ee ||
                        Ee.call(Ae, J),
                      ve.error(J);
                  },
                  () => {
                    var J, Ee;
                    ce &&
                      (null === (J = Ae.unsubscribe) ||
                        void 0 === J ||
                        J.call(Ae)),
                      null === (Ee = Ae.finalize) ||
                        void 0 === Ee ||
                        Ee.call(Ae);
                  }
                )
              );
            })
          : W.y;
      }
    },
    3410: (ut, $e, M) => {
      'use strict';
      M.d($e, { z: () => o });
      const o = {
        setTimeout(L, Y, ...W) {
          const { delegate: ge } = o;
          return ge?.setTimeout
            ? ge.setTimeout(L, Y, ...W)
            : setTimeout(L, Y, ...W);
        },
        clearTimeout(L) {
          const { delegate: Y } = o;
          return (Y?.clearTimeout || clearTimeout)(L);
        },
        delegate: void 0,
      };
    },
    2202: (ut, $e, M) => {
      'use strict';
      M.d($e, { h: () => L });
      const L = (function o() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      })();
    },
    8822: (ut, $e, M) => {
      'use strict';
      M.d($e, { L: () => o });
      const o =
        ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    },
    7669: (ut, $e, M) => {
      'use strict';
      M.d($e, { _6: () => Be, jO: () => W, yG: () => ge });
      var o = M(576);
      function Y(re) {
        return re[re.length - 1];
      }
      function W(re) {
        return (0, o.m)(Y(re)) ? re.pop() : void 0;
      }
      function ge(re) {
        return (function L(re) {
          return re && (0, o.m)(re.schedule);
        })(Y(re))
          ? re.pop()
          : void 0;
      }
      function Be(re, Fe) {
        return 'number' == typeof Y(re) ? re.pop() : Fe;
      }
    },
    4742: (ut, $e, M) => {
      'use strict';
      M.d($e, { D: () => ge });
      const { isArray: o } = Array,
        { getPrototypeOf: L, prototype: Y, keys: W } = Object;
      function ge(re) {
        if (1 === re.length) {
          const Fe = re[0];
          if (o(Fe)) return { args: Fe, keys: null };
          if (
            (function Be(re) {
              return re && 'object' == typeof re && L(re) === Y;
            })(Fe)
          ) {
            const Ae = W(Fe);
            return { args: Ae.map((Pe) => Fe[Pe]), keys: Ae };
          }
        }
        return { args: re, keys: null };
      }
    },
    8737: (ut, $e, M) => {
      'use strict';
      function o(L, Y) {
        if (L) {
          const W = L.indexOf(Y);
          0 <= W && L.splice(W, 1);
        }
      }
      M.d($e, { P: () => o });
    },
    3888: (ut, $e, M) => {
      'use strict';
      function o(L) {
        const W = L((ge) => {
          Error.call(ge), (ge.stack = new Error().stack);
        });
        return (
          (W.prototype = Object.create(Error.prototype)),
          (W.prototype.constructor = W),
          W
        );
      }
      M.d($e, { d: () => o });
    },
    1810: (ut, $e, M) => {
      'use strict';
      function o(L, Y) {
        return L.reduce((W, ge, Be) => ((W[ge] = Y[Be]), W), {});
      }
      M.d($e, { n: () => o });
    },
    2806: (ut, $e, M) => {
      'use strict';
      M.d($e, { O: () => W, x: () => Y });
      var o = M(2416);
      let L = null;
      function Y(ge) {
        if (o.v.useDeprecatedSynchronousErrorHandling) {
          const Be = !L;
          if ((Be && (L = { errorThrown: !1, error: null }), ge(), Be)) {
            const { errorThrown: re, error: Fe } = L;
            if (((L = null), re)) throw Fe;
          }
        } else ge();
      }
      function W(ge) {
        o.v.useDeprecatedSynchronousErrorHandling &&
          L &&
          ((L.errorThrown = !0), (L.error = ge));
      }
    },
    9672: (ut, $e, M) => {
      'use strict';
      function o(L, Y, W, ge = 0, Be = !1) {
        const re = Y.schedule(function () {
          W(), Be ? L.add(this.schedule(null, ge)) : this.unsubscribe();
        }, ge);
        if ((L.add(re), !Be)) return re;
      }
      M.d($e, { f: () => o });
    },
    4671: (ut, $e, M) => {
      'use strict';
      function o(L) {
        return L;
      }
      M.d($e, { y: () => o });
    },
    1144: (ut, $e, M) => {
      'use strict';
      M.d($e, { z: () => o });
      const o = (L) =>
        L && 'number' == typeof L.length && 'function' != typeof L;
    },
    2206: (ut, $e, M) => {
      'use strict';
      M.d($e, { D: () => L });
      var o = M(576);
      function L(Y) {
        return Symbol.asyncIterator && (0, o.m)(Y?.[Symbol.asyncIterator]);
      }
    },
    576: (ut, $e, M) => {
      'use strict';
      function o(L) {
        return 'function' == typeof L;
      }
      M.d($e, { m: () => o });
    },
    3670: (ut, $e, M) => {
      'use strict';
      M.d($e, { c: () => Y });
      var o = M(8822),
        L = M(576);
      function Y(W) {
        return (0, L.m)(W[o.L]);
      }
    },
    6495: (ut, $e, M) => {
      'use strict';
      M.d($e, { T: () => Y });
      var o = M(2202),
        L = M(576);
      function Y(W) {
        return (0, L.m)(W?.[o.h]);
      }
    },
    8239: (ut, $e, M) => {
      'use strict';
      M.d($e, { t: () => L });
      var o = M(576);
      function L(Y) {
        return (0, o.m)(Y?.then);
      }
    },
    3260: (ut, $e, M) => {
      'use strict';
      M.d($e, { L: () => W, Q: () => Y });
      var o = M(655),
        L = M(576);
      function Y(ge) {
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
      function W(ge) {
        return (0, L.m)(ge?.getReader);
      }
    },
    4482: (ut, $e, M) => {
      'use strict';
      M.d($e, { A: () => L, e: () => Y });
      var o = M(576);
      function L(W) {
        return (0, o.m)(W?.lift);
      }
      function Y(W) {
        return (ge) => {
          if (L(ge))
            return ge.lift(function (Be) {
              try {
                return W(Be, this);
              } catch (re) {
                this.error(re);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
    },
    3268: (ut, $e, M) => {
      'use strict';
      M.d($e, { Z: () => W });
      var o = M(4004);
      const { isArray: L } = Array;
      function W(ge) {
        return (0, o.U)((Be) =>
          (function Y(ge, Be) {
            return L(Be) ? ge(...Be) : ge(Be);
          })(ge, Be)
        );
      }
    },
    5032: (ut, $e, M) => {
      'use strict';
      function o() {}
      M.d($e, { Z: () => o });
    },
    9635: (ut, $e, M) => {
      'use strict';
      M.d($e, { U: () => Y, z: () => L });
      var o = M(4671);
      function L(...W) {
        return Y(W);
      }
      function Y(W) {
        return 0 === W.length
          ? o.y
          : 1 === W.length
          ? W[0]
          : function (Be) {
              return W.reduce((re, Fe) => Fe(re), Be);
            };
      }
    },
    7849: (ut, $e, M) => {
      'use strict';
      M.d($e, { h: () => Y });
      var o = M(2416),
        L = M(3410);
      function Y(W) {
        L.z.setTimeout(() => {
          const { onUnhandledError: ge } = o.v;
          if (!ge) throw W;
          ge(W);
        });
      }
    },
    4532: (ut, $e, M) => {
      'use strict';
      function o(L) {
        return new TypeError(
          `You provided ${
            null !== L && 'object' == typeof L ? 'an invalid object' : `'${L}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      M.d($e, { z: () => o });
    },
    863: (ut, $e, M) => {
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
      function L(Y) {
        if (!M.o(o, Y))
          return Promise.resolve().then(() => {
            var Be = new Error("Cannot find module '" + Y + "'");
            throw ((Be.code = 'MODULE_NOT_FOUND'), Be);
          });
        var W = o[Y],
          ge = W[0];
        return Promise.all(W.slice(1).map(M.e)).then(() => M(ge));
      }
      (L.keys = () => Object.keys(o)), (L.id = 863), (ut.exports = L);
    },
    655: (ut, $e, M) => {
      'use strict';
      function ge(k, V, U, A) {
        var Le,
          $ = arguments.length,
          q =
            $ < 3
              ? V
              : null === A
              ? (A = Object.getOwnPropertyDescriptor(V, U))
              : A;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          q = Reflect.decorate(k, V, U, A);
        else
          for (var pe = k.length - 1; pe >= 0; pe--)
            (Le = k[pe]) &&
              (q = ($ < 3 ? Le(q) : $ > 3 ? Le(V, U, q) : Le(V, U)) || q);
        return $ > 3 && q && Object.defineProperty(V, U, q), q;
      }
      function Fe(k, V, U, A) {
        return new (U || (U = Promise))(function (q, Le) {
          function pe(He) {
            try {
              oe(A.next(He));
            } catch (je) {
              Le(je);
            }
          }
          function me(He) {
            try {
              oe(A.throw(He));
            } catch (je) {
              Le(je);
            }
          }
          function oe(He) {
            He.done
              ? q(He.value)
              : (function $(q) {
                  return q instanceof U
                    ? q
                    : new U(function (Le) {
                        Le(q);
                      });
                })(He.value).then(pe, me);
          }
          oe((A = A.apply(k, V || [])).next());
        });
      }
      function de(k) {
        return this instanceof de ? ((this.v = k), this) : new de(k);
      }
      function ee(k, V, U) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var $,
          A = U.apply(k, V || []),
          q = [];
        return (
          ($ = {}),
          Le('next'),
          Le('throw'),
          Le('return'),
          ($[Symbol.asyncIterator] = function () {
            return this;
          }),
          $
        );
        function Le(be) {
          A[be] &&
            ($[be] = function (Te) {
              return new Promise(function (qe, nt) {
                q.push([be, Te, qe, nt]) > 1 || pe(be, Te);
              });
            });
        }
        function pe(be, Te) {
          try {
            !(function me(be) {
              be.value instanceof de
                ? Promise.resolve(be.value.v).then(oe, He)
                : je(q[0][2], be);
            })(A[be](Te));
          } catch (qe) {
            je(q[0][3], qe);
          }
        }
        function oe(be) {
          pe('next', be);
        }
        function He(be) {
          pe('throw', be);
        }
        function je(be, Te) {
          be(Te), q.shift(), q.length && pe(q[0][0], q[0][1]);
        }
      }
      function fe(k) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var U,
          V = k[Symbol.asyncIterator];
        return V
          ? V.call(k)
          : ((k = (function we(k) {
              var V = 'function' == typeof Symbol && Symbol.iterator,
                U = V && k[V],
                A = 0;
              if (U) return U.call(k);
              if (k && 'number' == typeof k.length)
                return {
                  next: function () {
                    return (
                      k && A >= k.length && (k = void 0),
                      { value: k && k[A++], done: !k }
                    );
                  },
                };
              throw new TypeError(
                V
                  ? 'Object is not iterable.'
                  : 'Symbol.iterator is not defined.'
              );
            })(k)),
            (U = {}),
            A('next'),
            A('throw'),
            A('return'),
            (U[Symbol.asyncIterator] = function () {
              return this;
            }),
            U);
        function A(q) {
          U[q] =
            k[q] &&
            function (Le) {
              return new Promise(function (pe, me) {
                !(function $(q, Le, pe, me) {
                  Promise.resolve(me).then(function (oe) {
                    q({ value: oe, done: pe });
                  }, Le);
                })(pe, me, (Le = k[q](Le)).done, Le.value);
              });
            };
        }
      }
      M.d($e, {
        FC: () => ee,
        KL: () => fe,
        gn: () => ge,
        mG: () => Fe,
        qq: () => de,
      });
    },
    6895: (ut, $e, M) => {
      'use strict';
      M.d($e, {
        Do: () => fe,
        ED: () => ae,
        EM: () => Oo,
        HT: () => ge,
        JF: () => vr,
        K0: () => re,
        Mx: () => _r,
        O5: () => B,
        Ov: () => Qn,
        RF: () => N,
        S$: () => de,
        V_: () => Pe,
        Ye: () => Ce,
        b0: () => Ve,
        bD: () => Zr,
        ez: () => Kr,
        n9: () => Q,
        q: () => Y,
        sg: () => Qt,
        tP: () => Je,
        w_: () => Be,
      });
      var o = M(8256);
      let L = null;
      function Y() {
        return L;
      }
      function ge(g) {
        L || (L = g);
      }
      class Be {}
      const re = new o.OlP('DocumentToken');
      let Fe = (() => {
        class g {
          historyGo(y) {
            throw new Error('Not implemented');
          }
        }
        return (
          (g.ɵfac = function (y) {
            return new (y || g)();
          }),
          (g.ɵprov = o.Yz7({
            token: g,
            factory: function () {
              return (function Ae() {
                return (0, o.LFG)(ve);
              })();
            },
            providedIn: 'platform',
          })),
          g
        );
      })();
      const Pe = new o.OlP('Location Initialized');
      let ve = (() => {
        class g extends Fe {
          constructor(y) {
            super(), (this._doc = y), this._init();
          }
          _init() {
            (this.location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return Y().getBaseHref(this._doc);
          }
          onPopState(y) {
            const O = Y().getGlobalEventTarget(this._doc, 'window');
            return (
              O.addEventListener('popstate', y, !1),
              () => O.removeEventListener('popstate', y)
            );
          }
          onHashChange(y) {
            const O = Y().getGlobalEventTarget(this._doc, 'window');
            return (
              O.addEventListener('hashchange', y, !1),
              () => O.removeEventListener('hashchange', y)
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
          set pathname(y) {
            this.location.pathname = y;
          }
          pushState(y, O, X) {
            we() ? this._history.pushState(y, O, X) : (this.location.hash = X);
          }
          replaceState(y, O, X) {
            we()
              ? this._history.replaceState(y, O, X)
              : (this.location.hash = X);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(y = 0) {
            this._history.go(y);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (g.ɵfac = function (y) {
            return new (y || g)(o.LFG(re));
          }),
          (g.ɵprov = o.Yz7({
            token: g,
            factory: function () {
              return (function ce() {
                return new ve((0, o.LFG)(re));
              })();
            },
            providedIn: 'platform',
          })),
          g
        );
      })();
      function we() {
        return !!window.history.pushState;
      }
      function J(g, I) {
        if (0 == g.length) return I;
        if (0 == I.length) return g;
        let y = 0;
        return (
          g.endsWith('/') && y++,
          I.startsWith('/') && y++,
          2 == y ? g + I.substring(1) : 1 == y ? g + I : g + '/' + I
        );
      }
      function Ee(g) {
        const I = g.match(/#|\?|$/),
          y = (I && I.index) || g.length;
        return g.slice(0, y - ('/' === g[y - 1] ? 1 : 0)) + g.slice(y);
      }
      function Ne(g) {
        return g && '?' !== g[0] ? '?' + g : g;
      }
      let de = (() => {
        class g {
          historyGo(y) {
            throw new Error('Not implemented');
          }
        }
        return (
          (g.ɵfac = function (y) {
            return new (y || g)();
          }),
          (g.ɵprov = o.Yz7({
            token: g,
            factory: function () {
              return (0, o.f3M)(Ve);
            },
            providedIn: 'root',
          })),
          g
        );
      })();
      const ee = new o.OlP('appBaseHref');
      let Ve = (() => {
          class g extends de {
            constructor(y, O) {
              super(),
                (this._platformLocation = y),
                (this._removeListenerFns = []),
                (this._baseHref =
                  O ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  (0, o.f3M)(re).location?.origin ??
                  '');
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(y) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(y),
                this._platformLocation.onHashChange(y)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(y) {
              return J(this._baseHref, y);
            }
            path(y = !1) {
              const O =
                  this._platformLocation.pathname +
                  Ne(this._platformLocation.search),
                X = this._platformLocation.hash;
              return X && y ? `${O}${X}` : O;
            }
            pushState(y, O, X, Re) {
              const ze = this.prepareExternalUrl(X + Ne(Re));
              this._platformLocation.pushState(y, O, ze);
            }
            replaceState(y, O, X, Re) {
              const ze = this.prepareExternalUrl(X + Ne(Re));
              this._platformLocation.replaceState(y, O, ze);
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
            historyGo(y = 0) {
              this._platformLocation.historyGo?.(y);
            }
          }
          return (
            (g.ɵfac = function (y) {
              return new (y || g)(o.LFG(Fe), o.LFG(ee, 8));
            }),
            (g.ɵprov = o.Yz7({
              token: g,
              factory: g.ɵfac,
              providedIn: 'root',
            })),
            g
          );
        })(),
        fe = (() => {
          class g extends de {
            constructor(y, O) {
              super(),
                (this._platformLocation = y),
                (this._baseHref = ''),
                (this._removeListenerFns = []),
                null != O && (this._baseHref = O);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(y) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(y),
                this._platformLocation.onHashChange(y)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(y = !1) {
              let O = this._platformLocation.hash;
              return null == O && (O = '#'), O.length > 0 ? O.substring(1) : O;
            }
            prepareExternalUrl(y) {
              const O = J(this._baseHref, y);
              return O.length > 0 ? '#' + O : O;
            }
            pushState(y, O, X, Re) {
              let ze = this.prepareExternalUrl(X + Ne(Re));
              0 == ze.length && (ze = this._platformLocation.pathname),
                this._platformLocation.pushState(y, O, ze);
            }
            replaceState(y, O, X, Re) {
              let ze = this.prepareExternalUrl(X + Ne(Re));
              0 == ze.length && (ze = this._platformLocation.pathname),
                this._platformLocation.replaceState(y, O, ze);
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
            historyGo(y = 0) {
              this._platformLocation.historyGo?.(y);
            }
          }
          return (
            (g.ɵfac = function (y) {
              return new (y || g)(o.LFG(Fe), o.LFG(ee, 8));
            }),
            (g.ɵprov = o.Yz7({ token: g, factory: g.ɵfac })),
            g
          );
        })(),
        Ce = (() => {
          class g {
            constructor(y) {
              (this._subject = new o.vpe()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = y);
              const O = this._locationStrategy.getBaseHref();
              (this._baseHref = Ee(le(O))),
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
            path(y = !1) {
              return this.normalize(this._locationStrategy.path(y));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(y, O = '') {
              return this.path() == this.normalize(y + Ne(O));
            }
            normalize(y) {
              return g.stripTrailingSlash(
                (function xe(g, I) {
                  return g && I.startsWith(g) ? I.substring(g.length) : I;
                })(this._baseHref, le(y))
              );
            }
            prepareExternalUrl(y) {
              return (
                y && '/' !== y[0] && (y = '/' + y),
                this._locationStrategy.prepareExternalUrl(y)
              );
            }
            go(y, O = '', X = null) {
              this._locationStrategy.pushState(X, '', y, O),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(y + Ne(O)),
                  X
                );
            }
            replaceState(y, O = '', X = null) {
              this._locationStrategy.replaceState(X, '', y, O),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(y + Ne(O)),
                  X
                );
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(y = 0) {
              this._locationStrategy.historyGo?.(y);
            }
            onUrlChange(y) {
              return (
                this._urlChangeListeners.push(y),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((O) => {
                    this._notifyUrlChangeListeners(O.url, O.state);
                  })),
                () => {
                  const O = this._urlChangeListeners.indexOf(y);
                  this._urlChangeListeners.splice(O, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(y = '', O) {
              this._urlChangeListeners.forEach((X) => X(y, O));
            }
            subscribe(y, O, X) {
              return this._subject.subscribe({
                next: y,
                error: O,
                complete: X,
              });
            }
          }
          return (
            (g.normalizeQueryParams = Ne),
            (g.joinWithSlash = J),
            (g.stripTrailingSlash = Ee),
            (g.ɵfac = function (y) {
              return new (y || g)(o.LFG(de));
            }),
            (g.ɵprov = o.Yz7({
              token: g,
              factory: function () {
                return (function he() {
                  return new Ce((0, o.LFG)(de));
                })();
              },
              providedIn: 'root',
            })),
            g
          );
        })();
      function le(g) {
        return g.replace(/\/index.html$/, '');
      }
      function _r(g, I) {
        I = encodeURIComponent(I);
        for (const y of g.split(';')) {
          const O = y.indexOf('='),
            [X, Re] = -1 == O ? [y, ''] : [y.slice(0, O), y.slice(O + 1)];
          if (X.trim() === I) return decodeURIComponent(Re);
        }
        return null;
      }
      class pn {
        constructor(I, y, O, X) {
          (this.$implicit = I),
            (this.ngForOf = y),
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
      let Qt = (() => {
        class g {
          constructor(y, O, X) {
            (this._viewContainer = y),
              (this._template = O),
              (this._differs = X),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(y) {
            (this._ngForOf = y), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(y) {
            this._trackByFn = y;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(y) {
            y && (this._template = y);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const y = this._ngForOf;
              !this._differ &&
                y &&
                (this._differ = this._differs
                  .find(y)
                  .create(this.ngForTrackBy));
            }
            if (this._differ) {
              const y = this._differ.diff(this._ngForOf);
              y && this._applyChanges(y);
            }
          }
          _applyChanges(y) {
            const O = this._viewContainer;
            y.forEachOperation((X, Re, ze) => {
              if (null == X.previousIndex)
                O.createEmbeddedView(
                  this._template,
                  new pn(X.item, this._ngForOf, -1, -1),
                  null === ze ? void 0 : ze
                );
              else if (null == ze) O.remove(null === Re ? void 0 : Re);
              else if (null !== Re) {
                const yt = O.get(Re);
                O.move(yt, ze), xn(yt, X);
              }
            });
            for (let X = 0, Re = O.length; X < Re; X++) {
              const yt = O.get(X).context;
              (yt.index = X), (yt.count = Re), (yt.ngForOf = this._ngForOf);
            }
            y.forEachIdentityChange((X) => {
              xn(O.get(X.currentIndex), X);
            });
          }
          static ngTemplateContextGuard(y, O) {
            return !0;
          }
        }
        return (
          (g.ɵfac = function (y) {
            return new (y || g)(o.Y36(o.s_b), o.Y36(o.Rgc), o.Y36(o.ZZ4));
          }),
          (g.ɵdir = o.lG2({
            type: g,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: {
              ngForOf: 'ngForOf',
              ngForTrackBy: 'ngForTrackBy',
              ngForTemplate: 'ngForTemplate',
            },
            standalone: !0,
          })),
          g
        );
      })();
      function xn(g, I) {
        g.context.$implicit = I.item;
      }
      let B = (() => {
        class g {
          constructor(y, O) {
            (this._viewContainer = y),
              (this._context = new j()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = O);
          }
          set ngIf(y) {
            (this._context.$implicit = this._context.ngIf = y),
              this._updateView();
          }
          set ngIfThen(y) {
            K('ngIfThen', y),
              (this._thenTemplateRef = y),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(y) {
            K('ngIfElse', y),
              (this._elseTemplateRef = y),
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
          static ngTemplateContextGuard(y, O) {
            return !0;
          }
        }
        return (
          (g.ɵfac = function (y) {
            return new (y || g)(o.Y36(o.s_b), o.Y36(o.Rgc));
          }),
          (g.ɵdir = o.lG2({
            type: g,
            selectors: [['', 'ngIf', '']],
            inputs: {
              ngIf: 'ngIf',
              ngIfThen: 'ngIfThen',
              ngIfElse: 'ngIfElse',
            },
            standalone: !0,
          })),
          g
        );
      })();
      class j {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function K(g, I) {
        if (I && !I.createEmbeddedView)
          throw new Error(
            `${g} must be a TemplateRef, but received '${(0, o.AaK)(I)}'.`
          );
      }
      class ye {
        constructor(I, y) {
          (this._viewContainerRef = I),
            (this._templateRef = y),
            (this._created = !1);
        }
        create() {
          (this._created = !0),
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
        destroy() {
          (this._created = !1), this._viewContainerRef.clear();
        }
        enforceState(I) {
          I && !this._created
            ? this.create()
            : !I && this._created && this.destroy();
        }
      }
      let N = (() => {
          class g {
            constructor() {
              (this._defaultUsed = !1),
                (this._caseCount = 0),
                (this._lastCaseCheckIndex = 0),
                (this._lastCasesMatched = !1);
            }
            set ngSwitch(y) {
              (this._ngSwitch = y),
                0 === this._caseCount && this._updateDefaultCases(!0);
            }
            _addCase() {
              return this._caseCount++;
            }
            _addDefault(y) {
              this._defaultViews || (this._defaultViews = []),
                this._defaultViews.push(y);
            }
            _matchCase(y) {
              const O = y == this._ngSwitch;
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
            _updateDefaultCases(y) {
              if (this._defaultViews && y !== this._defaultUsed) {
                this._defaultUsed = y;
                for (let O = 0; O < this._defaultViews.length; O++)
                  this._defaultViews[O].enforceState(y);
              }
            }
          }
          return (
            (g.ɵfac = function (y) {
              return new (y || g)();
            }),
            (g.ɵdir = o.lG2({
              type: g,
              selectors: [['', 'ngSwitch', '']],
              inputs: { ngSwitch: 'ngSwitch' },
              standalone: !0,
            })),
            g
          );
        })(),
        Q = (() => {
          class g {
            constructor(y, O, X) {
              (this.ngSwitch = X), X._addCase(), (this._view = new ye(y, O));
            }
            ngDoCheck() {
              this._view.enforceState(
                this.ngSwitch._matchCase(this.ngSwitchCase)
              );
            }
          }
          return (
            (g.ɵfac = function (y) {
              return new (y || g)(o.Y36(o.s_b), o.Y36(o.Rgc), o.Y36(N, 9));
            }),
            (g.ɵdir = o.lG2({
              type: g,
              selectors: [['', 'ngSwitchCase', '']],
              inputs: { ngSwitchCase: 'ngSwitchCase' },
              standalone: !0,
            })),
            g
          );
        })(),
        ae = (() => {
          class g {
            constructor(y, O, X) {
              X._addDefault(new ye(y, O));
            }
          }
          return (
            (g.ɵfac = function (y) {
              return new (y || g)(o.Y36(o.s_b), o.Y36(o.Rgc), o.Y36(N, 9));
            }),
            (g.ɵdir = o.lG2({
              type: g,
              selectors: [['', 'ngSwitchDefault', '']],
              standalone: !0,
            })),
            g
          );
        })(),
        Je = (() => {
          class g {
            constructor(y) {
              (this._viewContainerRef = y),
                (this._viewRef = null),
                (this.ngTemplateOutletContext = null),
                (this.ngTemplateOutlet = null),
                (this.ngTemplateOutletInjector = null);
            }
            ngOnChanges(y) {
              if (y.ngTemplateOutlet || y.ngTemplateOutletInjector) {
                const O = this._viewContainerRef;
                if (
                  (this._viewRef && O.remove(O.indexOf(this._viewRef)),
                  this.ngTemplateOutlet)
                ) {
                  const {
                    ngTemplateOutlet: X,
                    ngTemplateOutletContext: Re,
                    ngTemplateOutletInjector: ze,
                  } = this;
                  this._viewRef = O.createEmbeddedView(
                    X,
                    Re,
                    ze ? { injector: ze } : void 0
                  );
                } else this._viewRef = null;
              } else
                this._viewRef &&
                  y.ngTemplateOutletContext &&
                  this.ngTemplateOutletContext &&
                  (this._viewRef.context = this.ngTemplateOutletContext);
            }
          }
          return (
            (g.ɵfac = function (y) {
              return new (y || g)(o.Y36(o.s_b));
            }),
            (g.ɵdir = o.lG2({
              type: g,
              selectors: [['', 'ngTemplateOutlet', '']],
              inputs: {
                ngTemplateOutletContext: 'ngTemplateOutletContext',
                ngTemplateOutlet: 'ngTemplateOutlet',
                ngTemplateOutletInjector: 'ngTemplateOutletInjector',
              },
              standalone: !0,
              features: [o.TTD],
            })),
            g
          );
        })();
      class Vn {
        createSubscription(I, y) {
          return I.subscribe({
            next: y,
            error: (O) => {
              throw O;
            },
          });
        }
        dispose(I) {
          I.unsubscribe();
        }
      }
      class Rn {
        createSubscription(I, y) {
          return I.then(y, (O) => {
            throw O;
          });
        }
        dispose(I) {}
      }
      const cn = new Rn(),
        Er = new Vn();
      let Qn = (() => {
          class g {
            constructor(y) {
              (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null),
                (this._strategy = null),
                (this._ref = y);
            }
            ngOnDestroy() {
              this._subscription && this._dispose(), (this._ref = null);
            }
            transform(y) {
              return this._obj
                ? y !== this._obj
                  ? (this._dispose(), this.transform(y))
                  : this._latestValue
                : (y && this._subscribe(y), this._latestValue);
            }
            _subscribe(y) {
              (this._obj = y),
                (this._strategy = this._selectStrategy(y)),
                (this._subscription = this._strategy.createSubscription(
                  y,
                  (O) => this._updateLatestValue(y, O)
                ));
            }
            _selectStrategy(y) {
              if ((0, o.QGY)(y)) return cn;
              if ((0, o.F4k)(y)) return Er;
              throw (function jt(g, I) {
                return new o.vHH(2100, !1);
              })();
            }
            _dispose() {
              this._strategy.dispose(this._subscription),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null);
            }
            _updateLatestValue(y, O) {
              y === this._obj &&
                ((this._latestValue = O), this._ref.markForCheck());
            }
          }
          return (
            (g.ɵfac = function (y) {
              return new (y || g)(o.Y36(o.sBO, 16));
            }),
            (g.ɵpipe = o.Yjl({
              name: 'async',
              type: g,
              pure: !1,
              standalone: !0,
            })),
            g
          );
        })(),
        Kr = (() => {
          class g {}
          return (
            (g.ɵfac = function (y) {
              return new (y || g)();
            }),
            (g.ɵmod = o.oAB({ type: g })),
            (g.ɵinj = o.cJS({})),
            g
          );
        })();
      const Zr = 'browser';
      let Oo = (() => {
        class g {}
        return (
          (g.ɵprov = (0, o.Yz7)({
            token: g,
            providedIn: 'root',
            factory: () => new po((0, o.LFG)(re), window),
          })),
          g
        );
      })();
      class po {
        constructor(I, y) {
          (this.document = I), (this.window = y), (this.offset = () => [0, 0]);
        }
        setOffset(I) {
          this.offset = Array.isArray(I) ? () => I : I;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(I) {
          this.supportsScrolling() && this.window.scrollTo(I[0], I[1]);
        }
        scrollToAnchor(I) {
          if (!this.supportsScrolling()) return;
          const y = (function br(g, I) {
            const y = g.getElementById(I) || g.getElementsByName(I)[0];
            if (y) return y;
            if (
              'function' == typeof g.createTreeWalker &&
              g.body &&
              (g.body.createShadowRoot || g.body.attachShadow)
            ) {
              const O = g.createTreeWalker(g.body, NodeFilter.SHOW_ELEMENT);
              let X = O.currentNode;
              for (; X; ) {
                const Re = X.shadowRoot;
                if (Re) {
                  const ze =
                    Re.getElementById(I) || Re.querySelector(`[name="${I}"]`);
                  if (ze) return ze;
                }
                X = O.nextNode();
              }
            }
            return null;
          })(this.document, I);
          y && (this.scrollToElement(y), y.focus());
        }
        setHistoryScrollRestoration(I) {
          if (this.supportScrollRestoration()) {
            const y = this.window.history;
            y && y.scrollRestoration && (y.scrollRestoration = I);
          }
        }
        scrollToElement(I) {
          const y = I.getBoundingClientRect(),
            O = y.left + this.window.pageXOffset,
            X = y.top + this.window.pageYOffset,
            Re = this.offset();
          this.window.scrollTo(O - Re[0], X - Re[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const I =
              xo(this.window.history) ||
              xo(Object.getPrototypeOf(this.window.history));
            return !(!I || (!I.writable && !I.set));
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
      function xo(g) {
        return Object.getOwnPropertyDescriptor(g, 'scrollRestoration');
      }
      class vr {}
    },
    8256: (ut, $e, M) => {
      'use strict';
      M.d($e, {
        tb: () => pg,
        AFp: () => dg,
        ip1: () => ug,
        CZH: () => al,
        z2F: () => cl,
        sBO: () => T_,
        Sil: () => c_,
        _Vd: () => Ks,
        EJc: () => a_,
        Xts: () => Zl,
        SBq: () => Zs,
        lqb: () => Ni,
        qLn: () => Qs,
        vpe: () => Ho,
        XFs: () => Xe,
        OlP: () => mn,
        zs3: () => Li,
        ZZ4: () => Eu,
        aQg: () => bu,
        soG: () => ll,
        YKP: () => mp,
        h0i: () => ys,
        PXZ: () => E_,
        R0b: () => co,
        FiY: () => Vs,
        Lbi: () => o_,
        g9A: () => hg,
        Qsj: () => Ev,
        FYo: () => Hd,
        JOm: () => Lo,
        tp0: () => Hs,
        Rgc: () => fa,
        dDg: () => y_,
        eoX: () => _g,
        GfV: () => jd,
        s_b: () => ol,
        ifc: () => gt,
        MMx: () => Zc,
        Lck: () => J0,
        G48: () => A_,
        Gpc: () => Ve,
        RIp: () => Rd,
        f3M: () => An,
        MR2: () => lv,
        c2e: () => i_,
        zSh: () => tc,
        wAp: () => It,
        vHH: () => z,
        lri: () => Dg,
        rWj: () => Cg,
        D6c: () => G_,
        cg1: () => Uc,
        kL8: () => Hh,
        dqk: () => mt,
        iPO: () => I_,
        Z0I: () => Nn,
        sIi: () => na,
        CqO: () => Gf,
        QGY: () => Fc,
        QP$: () => xn,
        F4k: () => Uf,
        RDi: () => Bm,
        AaK: () => Ne,
        qOj: () => Ic,
        TTD: () => to,
        _Bn: () => gp,
        jDz: () => yp,
        xp6: () => Xd,
        uIk: () => Ac,
        ekj: () => Bc,
        Suo: () => Vp,
        Xpm: () => In,
        lG2: () => ar,
        Yz7: () => Bt,
        cJS: () => Gn,
        oAB: () => gr,
        Yjl: () => vn,
        Y36: () => os,
        _UZ: () => xc,
        GkF: () => Rc,
        BQk: () => Ka,
        ynx: () => Xa,
        qZA: () => qa,
        TgZ: () => Wa,
        EpF: () => jf,
        n5z: () => Ls,
        LFG: () => _t,
        $8M: () => ks,
        $Z: () => uf,
        NdJ: () => Pc,
        CRH: () => Hp,
        oxw: () => Xf,
        ALo: () => xp,
        lcZ: () => Rp,
        Hsn: () => Zf,
        F$t: () => Kf,
        Q6J: () => Tc,
        DdM: () => Ip,
        iGM: () => $p,
        MAs: () => Hf,
        KtG: () => Jt,
        CHM: () => Cn,
        LSH: () => Kl,
        P3R: () => Ad,
        YNc: () => Vf,
        W1O: () => zp,
        _uU: () => _h,
        Oqu: () => Hc,
        Gf: () => Bp,
      });
      var o = M(7579),
        L = M(727),
        Y = M(9751),
        W = M(8189),
        ge = M(8421),
        Be = M(515),
        re = M(7669),
        Fe = M(2076),
        Pe = M(930),
        ve = M(4482);
      function ce(e, t, ...n) {
        if (!0 === t) return void e();
        if (!1 === t) return;
        const r = new Pe.Hp({
          next: () => {
            r.unsubscribe(), e();
          },
        });
        return t(...n).subscribe(r);
      }
      function J(e) {
        for (let t in e) if (e[t] === J) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function Ee(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function Ne(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(Ne).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      function de(e, t) {
        return null == e || '' === e
          ? null === t
            ? ''
            : t
          : null == t || '' === t
          ? e
          : e + ' ' + t;
      }
      const ee = J({ __forward_ref__: J });
      function Ve(e) {
        return (
          (e.__forward_ref__ = Ve),
          (e.toString = function () {
            return Ne(this());
          }),
          e
        );
      }
      function fe(e) {
        return Ce(e) ? e() : e;
      }
      function Ce(e) {
        return (
          'function' == typeof e &&
          e.hasOwnProperty(ee) &&
          e.__forward_ref__ === Ve
        );
      }
      function he(e) {
        return e && !!e.ɵproviders;
      }
      const le = 'https://g.co/ng/security#xss';
      class z extends Error {
        constructor(t, n) {
          super(
            (function ie(e, t) {
              return `NG0${Math.abs(e)}${t ? ': ' + t.trim() : ''}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function ue(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function $(e, t) {
        throw new z(-201, !1);
      }
      function wt(e, t) {
        null == e &&
          (function dt(e, t, n, r) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == r ? '' : ` [Expected=> ${n} ${r} ${t} <=Actual]`)
            );
          })(t, e, null, '!=');
      }
      function Bt(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function Gn(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function at(e) {
        return Nt(e, Zt) || Nt(e, Ut);
      }
      function Nn(e) {
        return null !== at(e);
      }
      function Nt(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function Ln(e) {
        return e && (e.hasOwnProperty(kn) || e.hasOwnProperty(ft))
          ? e[kn]
          : null;
      }
      const Zt = J({ ɵprov: J }),
        kn = J({ ɵinj: J }),
        Ut = J({ ngInjectableDef: J }),
        ft = J({ ngInjectorDef: J });
      var Xe = (() => (
        ((Xe = Xe || {})[(Xe.Default = 0)] = 'Default'),
        (Xe[(Xe.Host = 1)] = 'Host'),
        (Xe[(Xe.Self = 2)] = 'Self'),
        (Xe[(Xe.SkipSelf = 4)] = 'SkipSelf'),
        (Xe[(Xe.Optional = 8)] = 'Optional'),
        Xe
      ))();
      let Ht;
      function Tt(e) {
        const t = Ht;
        return (Ht = e), t;
      }
      function ln(e, t, n) {
        const r = at(e);
        return r && 'root' == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & Xe.Optional
          ? null
          : void 0 !== t
          ? t
          : void $(Ne(e));
      }
      const mt = (() =>
          (typeof globalThis < 'u' && globalThis) ||
          (typeof global < 'u' && global) ||
          (typeof window < 'u' && window) ||
          (typeof self < 'u' &&
            typeof WorkerGlobalScope < 'u' &&
            self instanceof WorkerGlobalScope &&
            self))(),
        tr = {},
        $n = '__NG_DI_FLAG__',
        zn = 'ngTempTokenPath',
        St = /\n/gm,
        rr = '__source';
      let Gt;
      function nn(e) {
        const t = Gt;
        return (Gt = e), t;
      }
      function rn(e, t = Xe.Default) {
        if (void 0 === Gt) throw new z(-203, !1);
        return null === Gt
          ? ln(e, void 0, t)
          : Gt.get(e, t & Xe.Optional ? null : void 0, t);
      }
      function _t(e, t = Xe.Default) {
        return (
          (function Yt() {
            return Ht;
          })() || rn
        )(fe(e), t);
      }
      function An(e, t = Xe.Default) {
        return _t(e, Bn(t));
      }
      function Bn(e) {
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
          const r = fe(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new z(900, !1);
            let i,
              s = Xe.Default;
            for (let u = 0; u < r.length; u++) {
              const h = r[u],
                m = Cr(h);
              'number' == typeof m
                ? -1 === m
                  ? (i = h.token)
                  : (s |= m)
                : (i = h);
            }
            t.push(_t(i, s));
          } else t.push(_t(r));
        }
        return t;
      }
      function dn(e, t) {
        return (e[$n] = t), (e.prototype[$n] = t), e;
      }
      function Cr(e) {
        return e[$n];
      }
      function Z(e) {
        return { toString: e }.toString();
      }
      var G = (() => (
          ((G = G || {})[(G.OnPush = 0)] = 'OnPush'),
          (G[(G.Default = 1)] = 'Default'),
          G
        ))(),
        gt = (() => {
          return (
            ((e = gt || (gt = {}))[(e.Emulated = 0)] = 'Emulated'),
            (e[(e.None = 2)] = 'None'),
            (e[(e.ShadowDom = 3)] = 'ShadowDom'),
            gt
          );
          var e;
        })();
      const Dt = {},
        Ct = [],
        Kt = J({ ɵcmp: J }),
        on = J({ ɵdir: J }),
        sn = J({ ɵpipe: J }),
        ir = J({ ɵmod: J }),
        Tn = J({ ɵfac: J }),
        fn = J({ __NG_ELEMENT_ID__: J });
      let On = 0;
      function In(e) {
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
              selectors: e.selectors || Ct,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || gt.Emulated,
              id: 'c' + On++,
              styles: e.styles || Ct,
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
              ? () => ('function' == typeof s ? s() : s).map(dr).filter(Sr)
              : null),
            (i.pipeDefs = s
              ? () => ('function' == typeof s ? s() : s).map(Qt).filter(Sr)
              : null),
            i
          );
        });
      }
      function dr(e) {
        return Ot(e) || pn(e);
      }
      function Sr(e) {
        return null !== e;
      }
      function gr(e) {
        return Z(() => ({
          type: e.type,
          bootstrap: e.bootstrap || Ct,
          declarations: e.declarations || Ct,
          imports: e.imports || Ct,
          exports: e.exports || Ct,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function sr(e, t) {
        if (null == e) return Dt;
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
      const ar = In;
      function vn(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          standalone: !0 === e.standalone,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function Ot(e) {
        return e[Kt] || null;
      }
      function pn(e) {
        return e[on] || null;
      }
      function Qt(e) {
        return e[sn] || null;
      }
      function xn(e) {
        const t = Ot(e) || pn(e) || Qt(e);
        return null !== t && t.standalone;
      }
      function T(e, t) {
        const n = e[ir] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${Ne(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function en(e) {
        return Array.isArray(e) && 'object' == typeof e[1];
      }
      function Fn(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function Ar(e) {
        return 0 != (4 & e.flags);
      }
      function Nr(e) {
        return e.componentOffset > -1;
      }
      function Tr(e) {
        return 1 == (1 & e.flags);
      }
      function Sn(e) {
        return null !== e.template;
      }
      function Lr(e) {
        return 0 != (256 & e[2]);
      }
      function fr(e, t) {
        return e.hasOwnProperty(Tn) ? e[Tn] : null;
      }
      class eo {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function to() {
        return zo;
      }
      function zo(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = Ro), go;
      }
      function go() {
        const e = $r(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === Dt) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function Ro(e, t, n, r) {
        const i = this.declaredInputs[n],
          s =
            $r(e) ||
            (function Fo(e, t) {
              return (e[no] = t);
            })(e, { previous: Dt, current: null }),
          u = s.current || (s.current = {}),
          h = s.previous,
          m = h[i];
        (u[i] = new eo(m && m.currentValue, t, h === Dt)), (e[r] = t);
      }
      to.ngInherit = !0;
      const no = '__ngSimpleChanges__';
      function $r(e) {
        return e[no] || null;
      }
      function Dn(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function Br(e, t) {
        return Dn(t[e]);
      }
      function Mn(e, t) {
        return Dn(t[e.index]);
      }
      function Po(e, t) {
        return e.data[t];
      }
      function io(e, t) {
        return e[t];
      }
      function jn(e, t) {
        const n = t[e];
        return en(n) ? n : n[0];
      }
      function Wo(e) {
        return 64 == (64 & e[2]);
      }
      function D(e, t) {
        return null == t ? null : e[t];
      }
      function v(e) {
        e[18] = 0;
      }
      function R(e, t) {
        e[5] += t;
        let n = e,
          r = e[3];
        for (
          ;
          null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

        )
          (r[5] += t), (n = r), (r = r[3]);
      }
      const se = { lFrame: y(null), bindingsEnabled: !0 };
      function Se() {
        return se.bindingsEnabled;
      }
      function Ie() {
        return se.lFrame.lView;
      }
      function vt() {
        return se.lFrame.tView;
      }
      function Cn(e) {
        return (se.lFrame.contextLView = e), e[8];
      }
      function Jt(e) {
        return (se.lFrame.contextLView = null), e;
      }
      function zt() {
        let e = yr();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function yr() {
        return se.lFrame.currentTNode;
      }
      function hr(e, t) {
        const n = se.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function xr() {
        return se.lFrame.isParent;
      }
      function Ei() {
        se.lFrame.isParent = !1;
      }
      function pr() {
        const e = se.lFrame;
        let t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        );
      }
      function yo() {
        return se.lFrame.bindingIndex++;
      }
      function bs(e, t) {
        const n = se.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), wi(t);
      }
      function wi(e) {
        se.lFrame.currentDirectiveIndex = e;
      }
      function ws() {
        return se.lFrame.currentQueryIndex;
      }
      function Ui(e) {
        se.lFrame.currentQueryIndex = e;
      }
      function pa(e) {
        const t = e[1];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
      }
      function Is(e, t, n) {
        if (n & Xe.SkipSelf) {
          let i = t,
            s = e;
          for (
            ;
            !((i = i.parent),
            null !== i ||
              n & Xe.Host ||
              ((i = pa(s)), null === i || ((s = s[15]), 10 & i.type)));

          );
          if (null === i) return !1;
          (t = i), (e = s);
        }
        const r = (se.lFrame = I());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function g(e) {
        const t = I(),
          n = e[1];
        (se.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function I() {
        const e = se.lFrame,
          t = null === e ? null : e.child;
        return null === t ? y(e) : t;
      }
      function y(e) {
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
      function O() {
        const e = se.lFrame;
        return (
          (se.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const X = O;
      function Re() {
        const e = O();
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
      function Mt() {
        return se.lFrame.selectedIndex;
      }
      function kt(e) {
        se.lFrame.selectedIndex = e;
      }
      function Et() {
        const e = se.lFrame;
        return Po(e.tView, e.selectedIndex);
      }
      function Hr(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const s = e.data[n].type.prototype,
            {
              ngAfterContentInit: u,
              ngAfterContentChecked: h,
              ngAfterViewInit: m,
              ngAfterViewChecked: w,
              ngOnDestroy: x,
            } = s;
          u && (e.contentHooks || (e.contentHooks = [])).push(-n, u),
            h &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, h),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, h)),
            m && (e.viewHooks || (e.viewHooks = [])).push(-n, m),
            w &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, w),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, w)),
            null != x && (e.destroyHooks || (e.destroyHooks = [])).push(n, x);
        }
      }
      function Rr(e, t, n) {
        ci(e, t, 3, n);
      }
      function Co(e, t, n, r) {
        (3 & e[2]) === n && ci(e, t, n, r);
      }
      function Xo(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function ci(e, t, n, r) {
        const s = r ?? -1,
          u = t.length - 1;
        let h = 0;
        for (let m = void 0 !== r ? 65535 & e[18] : 0; m < u; m++)
          if ('number' == typeof t[m + 1]) {
            if (((h = t[m]), null != r && h >= r)) break;
          } else
            t[m] < 0 && (e[18] += 65536),
              (h < s || -1 == s) &&
                (Ss(e, n, t, m), (e[18] = (4294901760 & e[18]) + m + 2)),
              m++;
      }
      function Ss(e, t, n, r) {
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
      class di {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      function Os(e, t, n) {
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
            ma(s) ? e.setProperty(t, s, u) : e.setAttribute(t, s, u), r++;
          }
        }
        return r;
      }
      function xs(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function ma(e) {
        return 64 === e.charCodeAt(0);
      }
      function Ii(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const i = t[r];
              'number' == typeof i
                ? (n = i)
                : 0 === n ||
                  va(e, n, i, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function va(e, t, n, r, i) {
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
      function Si(e) {
        return -1 !== e;
      }
      function zi(e) {
        return 32767 & e;
      }
      function Mi(e, t) {
        let n = (function ml(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let Rs = !0;
      function Yi(e) {
        const t = Rs;
        return (Rs = e), t;
      }
      let Ca = 0;
      const _n = {};
      function Ko(e, t) {
        const n = _a(e, t);
        if (-1 !== n) return n;
        const r = t[1];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          Wi(r.data, e),
          Wi(t, null),
          Wi(r.blueprint, null));
        const i = qi(e, t),
          s = e.injectorIndex;
        if (Si(i)) {
          const u = zi(i),
            h = Mi(i, t),
            m = h[1].data;
          for (let w = 0; w < 8; w++) t[s + w] = h[u + w] | m[u + w];
        }
        return (t[s + 8] = i), s;
      }
      function Wi(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function _a(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function qi(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          i = t;
        for (; null !== i; ) {
          if (((r = Ia(i)), null === r)) return -1;
          if ((n++, (i = i[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return -1;
      }
      function Fs(e, t, n) {
        !(function vl(e, t, n) {
          let r;
          'string' == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(fn) && (r = n[fn]),
            null == r && (r = n[fn] = Ca++);
          const i = 255 & r;
          t.data[e + (i >> 5)] |= 1 << i;
        })(e, t, n);
      }
      function Ea(e, t, n) {
        if (n & Xe.Optional || void 0 !== e) return e;
        $();
      }
      function Xi(e, t, n, r) {
        if (
          (n & Xe.Optional && void 0 === r && (r = null),
          0 == (n & (Xe.Self | Xe.Host)))
        ) {
          const i = e[9],
            s = Tt(void 0);
          try {
            return i ? i.get(t, r, n & Xe.Optional) : ln(t, r, n & Xe.Optional);
          } finally {
            Tt(s);
          }
        }
        return Ea(r, 0, n);
      }
      function Ps(e, t, n, r = Xe.Default, i) {
        if (null !== e) {
          if (1024 & t[2]) {
            const u = (function Cl(e, t, n, r, i) {
              let s = e,
                u = t;
              for (
                ;
                null !== s && null !== u && 1024 & u[2] && !(256 & u[2]);

              ) {
                const h = Zo(s, u, n, r | Xe.Self, _n);
                if (h !== _n) return h;
                let m = s.parent;
                if (!m) {
                  const w = u[21];
                  if (w) {
                    const x = w.get(n, _n, r);
                    if (x !== _n) return x;
                  }
                  (m = Ia(u)), (u = u[15]);
                }
                s = m;
              }
              return i;
            })(e, t, n, r, _n);
            if (u !== _n) return u;
          }
          const s = Zo(e, t, n, r, _n);
          if (s !== _n) return s;
        }
        return Xi(t, n, r, i);
      }
      function Zo(e, t, n, r, i) {
        const s = (function Ns(e) {
          if ('string' == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(fn) ? e[fn] : void 0;
          return 'number' == typeof t ? (t >= 0 ? 255 & t : wa) : t;
        })(n);
        if ('function' == typeof s) {
          if (!Is(t, e, r)) return r & Xe.Host ? Ea(i, 0, r) : Xi(t, n, r, i);
          try {
            const u = s(r);
            if (null != u || r & Xe.Optional) return u;
            $();
          } finally {
            X();
          }
        } else if ('number' == typeof s) {
          let u = null,
            h = _a(e, t),
            m = -1,
            w = r & Xe.Host ? t[16][6] : null;
          for (
            (-1 === h || r & Xe.SkipSelf) &&
            ((m = -1 === h ? qi(e, t) : t[h + 8]),
            -1 !== m && Dl(r, !1)
              ? ((u = t[1]), (h = zi(m)), (t = Mi(m, t)))
              : (h = -1));
            -1 !== h;

          ) {
            const x = t[1];
            if (ba(s, h, x.data)) {
              const H = yl(h, t, n, u, r, w);
              if (H !== _n) return H;
            }
            (m = t[h + 8]),
              -1 !== m && Dl(r, t[1].data[h + 8] === w) && ba(s, h, t)
                ? ((u = x), (h = zi(m)), (t = Mi(m, t)))
                : (h = -1);
          }
        }
        return i;
      }
      function yl(e, t, n, r, i, s) {
        const u = t[1],
          h = u.data[e + 8],
          x = Ai(
            h,
            u,
            n,
            null == r ? Nr(h) && Rs : r != u && 0 != (3 & h.type),
            i & Xe.Host && s === h
          );
        return null !== x ? Wr(t, u, x, h) : _n;
      }
      function Ai(e, t, n, r, i) {
        const s = e.providerIndexes,
          u = t.data,
          h = 1048575 & s,
          m = e.directiveStart,
          x = s >> 20,
          ne = i ? h + x : e.directiveEnd;
        for (let De = r ? h : h + x; De < ne; De++) {
          const Ge = u[De];
          if ((De < m && n === Ge) || (De >= m && Ge.type === n)) return De;
        }
        if (i) {
          const De = u[m];
          if (De && Sn(De) && De.type === n) return m;
        }
        return null;
      }
      function Wr(e, t, n, r) {
        let i = e[n];
        const s = t.data;
        if (
          (function fi(e) {
            return e instanceof di;
          })(i)
        ) {
          const u = i;
          u.resolving &&
            (function V(e, t) {
              const n = t ? `. Dependency path: ${t.join(' > ')} > ${e}` : '';
              throw new z(
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
                  : ue(e);
              })(s[n])
            );
          const h = Yi(u.canSeeViewProviders);
          u.resolving = !0;
          const m = u.injectImpl ? Tt(u.injectImpl) : null;
          Is(e, r, Xe.Default);
          try {
            (i = e[n] = u.factory(void 0, s, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function Vr(e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: i,
                    ngDoCheck: s,
                  } = t.type.prototype;
                  if (r) {
                    const u = zo(t);
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
            null !== m && Tt(m), Yi(h), (u.resolving = !1), X();
          }
        }
        return i;
      }
      function ba(e, t, n) {
        return !!(n[t + (e >> 5)] & (1 << e));
      }
      function Dl(e, t) {
        return !(e & Xe.Self || (e & Xe.Host && t));
      }
      class Ti {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return Ps(this._tNode, this._lView, t, Bn(r), n);
        }
      }
      function wa() {
        return new Ti(zt(), Ie());
      }
      function Ls(e) {
        return Z(() => {
          const t = e.prototype.constructor,
            n = t[Tn] || Oi(t),
            r = Object.prototype;
          let i = Object.getPrototypeOf(e.prototype).constructor;
          for (; i && i !== r; ) {
            const s = i[Tn] || Oi(i);
            if (s && s !== n) return s;
            i = Object.getPrototypeOf(i);
          }
          return (s) => new s();
        });
      }
      function Oi(e) {
        return Ce(e)
          ? () => {
              const t = Oi(fe(e));
              return t && t();
            }
          : fr(e);
      }
      function Ia(e) {
        const t = e[1],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[6] : null;
      }
      function ks(e) {
        return (function Iu(e, t) {
          if ('class' === t) return e.classes;
          if ('style' === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let i = 0;
            for (; i < r; ) {
              const s = n[i];
              if (xs(s)) break;
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
        })(zt(), e);
      }
      const Jo = '__parameters__';
      function ei(e, t, n) {
        return Z(() => {
          const r = (function Sa(e) {
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
            function h(m, w, x) {
              const H = m.hasOwnProperty(Jo)
                ? m[Jo]
                : Object.defineProperty(m, Jo, { value: [] })[Jo];
              for (; H.length <= x; ) H.push(null);
              return (H[x] = H[x] || []).push(u), m;
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
      class mn {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = Bt({
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
      function te(e, t) {
        void 0 === t && (t = e);
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          Array.isArray(r)
            ? (t === e && (t = e.slice(0, n)), te(r, t))
            : t !== e && t.push(r);
        }
        return t;
      }
      function Ue(e, t) {
        e.forEach((n) => (Array.isArray(n) ? Ue(n, t) : t(n)));
      }
      function lt(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function ct(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function xt(e, t) {
        const n = [];
        for (let r = 0; r < e; r++) n.push(t);
        return n;
      }
      function Dr(e, t, n) {
        let r = Zi(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function _o(e, t, n, r) {
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
      function Bs(e, t) {
        const n = Zi(e, t);
        if (n >= 0) return e[1 | n];
      }
      function Zi(e, t) {
        return (function Fu(e, t, n) {
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
      const Vs = dn(ei('Optional'), 8),
        Hs = dn(ei('SkipSelf'), 4);
      var Lo = (() => (
        ((Lo = Lo || {})[(Lo.Important = 1)] = 'Important'),
        (Lo[(Lo.DashCase = 2)] = 'DashCase'),
        Lo
      ))();
      const Al = new Map();
      let am = 0;
      const Ol = '__ngContext__';
      function wr(e, t) {
        en(t)
          ? ((e[Ol] = t[20]),
            (function cm(e) {
              Al.set(e[20], e);
            })(t))
          : (e[Ol] = t);
      }
      function Rl(e, t) {
        return undefined(e, t);
      }
      function zs(e) {
        const t = e[3];
        return Fn(t) ? t[3] : t;
      }
      function Fl(e) {
        return ed(e[13]);
      }
      function Pl(e) {
        return ed(e[4]);
      }
      function ed(e) {
        for (; null !== e && !Fn(e); ) e = e[4];
        return e;
      }
      function Ji(e, t, n, r, i) {
        if (null != r) {
          let s,
            u = !1;
          Fn(r) ? (s = r) : en(r) && ((u = !0), (r = r[0]));
          const h = Dn(r);
          0 === e && null !== n
            ? null == i
              ? sd(t, n, h)
              : Ri(t, n, h, i || null, !0)
            : 1 === e && null !== n
            ? Ri(t, n, h, i || null, !0)
            : 2 === e
            ? (function Hl(e, t, n) {
                const r = Oa(e, t);
                r &&
                  (function Om(e, t, n, r) {
                    e.removeChild(t, n, r);
                  })(e, r, t, n);
              })(t, h, u)
            : 3 === e && t.destroyNode(h),
            null != s &&
              (function Fm(e, t, n, r, i) {
                const s = n[7];
                s !== Dn(n) && Ji(t, e, r, s, i);
                for (let h = 10; h < n.length; h++) {
                  const m = n[h];
                  Ys(m[1], m, e, t, r, s);
                }
              })(t, e, s, n, i);
        }
      }
      function Ll(e, t, n) {
        return e.createElement(t, n);
      }
      function nd(e, t) {
        const n = e[9],
          r = n.indexOf(t),
          i = t[3];
        512 & t[2] && ((t[2] &= -513), R(i, -1)), n.splice(r, 1);
      }
      function kl(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          r = e[n];
        if (r) {
          const i = r[17];
          null !== i && i !== e && nd(i, r), t > 0 && (e[n - 1][4] = r[4]);
          const s = ct(e, 10 + t);
          !(function Em(e, t) {
            Ys(e, t, t[11], 2, null, null), (t[0] = null), (t[6] = null);
          })(r[1], r);
          const u = s[19];
          null !== u && u.detachView(s[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -65);
        }
        return r;
      }
      function rd(e, t) {
        if (!(128 & t[2])) {
          const n = t[11];
          n.destroyNode && Ys(e, t, n, 3, null, null),
            (function Im(e) {
              let t = e[13];
              if (!t) return $l(e[1], e);
              for (; t; ) {
                let n = null;
                if (en(t)) n = t[13];
                else {
                  const r = t[10];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    en(t) && $l(t[1], t), (t = t[3]);
                  null === t && (t = e), en(t) && $l(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function $l(e, t) {
        if (!(128 & t[2])) {
          (t[2] &= -65),
            (t[2] |= 128),
            (function Tm(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const i = t[n[r]];
                  if (!(i instanceof di)) {
                    const s = n[r + 1];
                    if (Array.isArray(s))
                      for (let u = 0; u < s.length; u += 2) {
                        const h = i[s[u]],
                          m = s[u + 1];
                        try {
                          m.call(h);
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
            (function Am(e, t) {
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
            n !== t[3] && nd(n, t);
            const r = t[19];
            null !== r && r.detachView(e);
          }
          !(function um(e) {
            Al.delete(e[20]);
          })(t);
        }
      }
      function od(e, t, n) {
        return (function id(e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[0];
          {
            const { componentOffset: i } = r;
            if (i > -1) {
              const { encapsulation: s } = e.data[r.directiveStart + i];
              if (s === gt.None || s === gt.Emulated) return null;
            }
            return Mn(r, n);
          }
        })(e, t.parent, n);
      }
      function Ri(e, t, n, r, i) {
        e.insertBefore(t, n, r, i);
      }
      function sd(e, t, n) {
        e.appendChild(t, n);
      }
      function ad(e, t, n, r, i) {
        null !== r ? Ri(e, t, n, r, i) : sd(e, t, n);
      }
      function Oa(e, t) {
        return e.parentNode(t);
      }
      function ld(e, t, n) {
        return ud(e, t, n);
      }
      let Gl,
        Pa,
        ud = function cd(e, t, n) {
          return 40 & e.type ? Mn(e, n) : null;
        };
      function xa(e, t, n, r) {
        const i = od(e, r, t),
          s = t[11],
          h = ld(r.parent || t[6], r, t);
        if (null != i)
          if (Array.isArray(n))
            for (let m = 0; m < n.length; m++) ad(s, i, n[m], h, !1);
          else ad(s, i, n, h, !1);
      }
      function Ra(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return Mn(t, e);
          if (4 & n) return Vl(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return Ra(e, r);
            {
              const i = e[t.index];
              return Fn(i) ? Vl(-1, i) : Dn(i);
            }
          }
          if (32 & n) return Rl(t, e)() || Dn(e[t.index]);
          {
            const r = fd(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : Ra(zs(e[16]), r)
              : Ra(e, t.next);
          }
        }
        return null;
      }
      function fd(e, t) {
        return null !== t ? e[16][6].projection[t.projection] : null;
      }
      function Vl(e, t) {
        const n = 10 + e + 1;
        if (n < t.length) {
          const r = t[n],
            i = r[1].firstChild;
          if (null !== i) return Ra(r, i);
        }
        return t[7];
      }
      function jl(e, t, n, r, i, s, u) {
        for (; null != n; ) {
          const h = r[n.index],
            m = n.type;
          if (
            (u && 0 === t && (h && wr(Dn(h), r), (n.flags |= 2)),
            32 != (32 & n.flags))
          )
            if (8 & m) jl(e, t, n.child, r, i, s, !1), Ji(t, e, i, h, s);
            else if (32 & m) {
              const w = Rl(n, r);
              let x;
              for (; (x = w()); ) Ji(t, e, i, x, s);
              Ji(t, e, i, h, s);
            } else 16 & m ? hd(e, t, r, n, i, s) : Ji(t, e, i, h, s);
          n = u ? n.projectionNext : n.next;
        }
      }
      function Ys(e, t, n, r, i, s) {
        jl(n, r, e.firstChild, t, i, s, !1);
      }
      function hd(e, t, n, r, i, s) {
        const u = n[16],
          m = u[6].projection[r.projection];
        if (Array.isArray(m))
          for (let w = 0; w < m.length; w++) Ji(t, e, i, m[w], s);
        else jl(e, t, m, u[3], i, s, !0);
      }
      function pd(e, t, n) {
        '' === n
          ? e.removeAttribute(t, 'class')
          : e.setAttribute(t, 'class', n);
      }
      function gd(e, t, n) {
        const { mergedAttrs: r, classes: i, styles: s } = n;
        null !== r && Os(e, t, r),
          null !== i && pd(e, t, i),
          null !== s &&
            (function Nm(e, t, n) {
              e.setAttribute(t, 'style', n);
            })(e, t, s);
      }
      function Bm(e) {
        Gl = e;
      }
      function Dd(e) {
        return (
          (function zl() {
            if (void 0 === Pa && ((Pa = null), mt.trustedTypes))
              try {
                Pa = mt.trustedTypes.createPolicy('angular#unsafe-bypass', {
                  createHTML: (e) => e,
                  createScript: (e) => e,
                  createScriptURL: (e) => e,
                });
              } catch {}
            return Pa;
          })()?.createScriptURL(e) || e
        );
      }
      class Cd {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${le})`;
        }
      }
      function gi(e) {
        return e instanceof Cd ? e.changingThisBreaksApplicationSecurity : e;
      }
      function Ws(e, t) {
        const n = (function zm(e) {
          return (e instanceof Cd && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ('ResourceURL' === n && 'URL' === t) return !0;
          throw new Error(`Required a safe ${t}, got a ${n} (see ${le})`);
        }
        return n === t;
      }
      const Xm =
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
      function Kl(e) {
        const t = Xs();
        return t
          ? t.sanitize(er.URL, e) || ''
          : Ws(e, 'URL')
          ? gi(e)
          : (function Yl(e) {
              return (e = String(e)).match(Xm) ? e : 'unsafe:' + e;
            })(ue(e));
      }
      function Md(e) {
        const t = Xs();
        if (t) return Dd(t.sanitize(er.RESOURCE_URL, e) || '');
        if (Ws(e, 'ResourceURL')) return Dd(gi(e));
        throw new z(904, !1);
      }
      function Ad(e, t, n) {
        return (function av(e, t) {
          return ('src' === t &&
            ('embed' === e ||
              'frame' === e ||
              'iframe' === e ||
              'media' === e ||
              'script' === e)) ||
            ('href' === t && ('base' === e || 'link' === e))
            ? Md
            : Kl;
        })(
          t,
          n
        )(e);
      }
      function Xs() {
        const e = Ie();
        return e && e[12];
      }
      const Zl = new mn('ENVIRONMENT_INITIALIZER'),
        Td = new mn('INJECTOR', -1),
        Od = new mn('INJECTOR_DEF_TYPES');
      class xd {
        get(t, n = tr) {
          if (n === tr) {
            const r = new Error(`NullInjectorError: No provider for ${Ne(t)}!`);
            throw ((r.name = 'NullInjectorError'), r);
          }
          return n;
        }
      }
      function lv(e) {
        return { ɵproviders: e };
      }
      function Rd(...e) {
        return { ɵproviders: Fd(0, e), ɵfromNgModule: !0 };
      }
      function Fd(e, ...t) {
        const n = [],
          r = new Set();
        let i;
        return (
          Ue(t, (s) => {
            const u = s;
            Ql(u, n, [], r) && (i || (i = []), i.push(u));
          }),
          void 0 !== i && Pd(i, n),
          n
        );
      }
      function Pd(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { providers: i } = e[n];
          Jl(i, (s) => {
            t.push(s);
          });
        }
      }
      function Ql(e, t, n, r) {
        if (!(e = fe(e))) return !1;
        let i = null,
          s = Ln(e);
        const u = !s && Ot(e);
        if (s || u) {
          if (u && !u.standalone) return !1;
          i = e;
        } else {
          const m = e.ngModule;
          if (((s = Ln(m)), !s)) return !1;
          i = m;
        }
        const h = r.has(i);
        if (u) {
          if (h) return !1;
          if ((r.add(i), u.dependencies)) {
            const m =
              'function' == typeof u.dependencies
                ? u.dependencies()
                : u.dependencies;
            for (const w of m) Ql(w, t, n, r);
          }
        } else {
          if (!s) return !1;
          {
            if (null != s.imports && !h) {
              let w;
              r.add(i);
              try {
                Ue(s.imports, (x) => {
                  Ql(x, t, n, r) && (w || (w = []), w.push(x));
                });
              } finally {
              }
              void 0 !== w && Pd(w, t);
            }
            if (!h) {
              const w = fr(i) || (() => new i());
              t.push(
                { provide: i, useFactory: w, deps: Ct },
                { provide: Od, useValue: i, multi: !0 },
                { provide: Zl, useValue: () => _t(i), multi: !0 }
              );
            }
            const m = s.providers;
            null == m ||
              h ||
              Jl(m, (x) => {
                t.push(x);
              });
          }
        }
        return i !== e && void 0 !== e.providers;
      }
      function Jl(e, t) {
        for (let n of e)
          he(n) && (n = n.ɵproviders), Array.isArray(n) ? Jl(n, t) : t(n);
      }
      const cv = J({ provide: String, useValue: J });
      function ec(e) {
        return null !== e && 'object' == typeof e && cv in e;
      }
      function Pi(e) {
        return 'function' == typeof e;
      }
      const tc = new mn('Set Injector scope.'),
        La = {},
        dv = {};
      let nc;
      function ka() {
        return void 0 === nc && (nc = new xd()), nc;
      }
      class Ni {}
      class kd extends Ni {
        constructor(t, n, r, i) {
          super(),
            (this.parent = n),
            (this.source = r),
            (this.scopes = i),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            oc(t, (u) => this.processProvider(u)),
            this.records.set(Td, es(void 0, this)),
            i.has('environment') && this.records.set(Ni, es(void 0, this));
          const s = this.records.get(tc);
          null != s && 'string' == typeof s.value && this.scopes.add(s.value),
            (this.injectorDefTypes = new Set(this.get(Od.multi, Ct, Xe.Self)));
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
          const n = nn(this),
            r = Tt(void 0);
          try {
            return t();
          } finally {
            nn(n), Tt(r);
          }
        }
        get(t, n = tr, r = Xe.Default) {
          this.assertNotDestroyed(), (r = Bn(r));
          const i = nn(this),
            s = Tt(void 0);
          try {
            if (!(r & Xe.SkipSelf)) {
              let h = this.records.get(t);
              if (void 0 === h) {
                const m =
                  (function mv(e) {
                    return (
                      'function' == typeof e ||
                      ('object' == typeof e && e instanceof mn)
                    );
                  })(t) && at(t);
                (h = m && this.injectableDefInScope(m) ? es(rc(t), La) : null),
                  this.records.set(t, h);
              }
              if (null != h) return this.hydrate(t, h);
            }
            return (r & Xe.Self ? ka() : this.parent).get(
              t,
              (n = r & Xe.Optional && n === tr ? null : n)
            );
          } catch (u) {
            if ('NullInjectorError' === u.name) {
              if (((u[zn] = u[zn] || []).unshift(Ne(t)), i)) throw u;
              return (function ur(e, t, n, r) {
                const i = e[zn];
                throw (
                  (t[rr] && i.unshift(t[rr]),
                  (e.message = (function _e(e, t, n, r = null) {
                    e =
                      e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let i = Ne(t);
                    if (Array.isArray(t)) i = t.map(Ne).join(' -> ');
                    else if ('object' == typeof t) {
                      let s = [];
                      for (let u in t)
                        if (t.hasOwnProperty(u)) {
                          let h = t[u];
                          s.push(
                            u +
                              ':' +
                              ('string' == typeof h ? JSON.stringify(h) : Ne(h))
                          );
                        }
                      i = `{${s.join(', ')}}`;
                    }
                    return `${n}${r ? '(' + r + ')' : ''}[${i}]: ${e.replace(
                      St,
                      '\n  '
                    )}`;
                  })('\n' + e.message, i, n, r)),
                  (e.ngTokenPath = i),
                  (e[zn] = null),
                  e)
                );
              })(u, t, 'R3InjectorError', this.source);
            }
            throw u;
          } finally {
            Tt(s), nn(i);
          }
        }
        resolveInjectorInitializers() {
          const t = nn(this),
            n = Tt(void 0);
          try {
            const r = this.get(Zl.multi, Ct, Xe.Self);
            for (const i of r) i();
          } finally {
            nn(t), Tt(n);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const r of n.keys()) t.push(Ne(r));
          return `R3Injector[${t.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new z(205, !1);
        }
        processProvider(t) {
          let n = Pi((t = fe(t))) ? t : fe(t && t.provide);
          const r = (function hv(e) {
            return ec(e) ? es(void 0, e.useValue) : es($d(e), La);
          })(t);
          if (Pi(t) || !0 !== t.multi) this.records.get(n);
          else {
            let i = this.records.get(n);
            i ||
              ((i = es(void 0, La, !0)),
              (i.factory = () => or(i.multi)),
              this.records.set(n, i)),
              (n = t),
              i.multi.push(t);
          }
          this.records.set(n, r);
        }
        hydrate(t, n) {
          return (
            n.value === La && ((n.value = dv), (n.value = n.factory())),
            'object' == typeof n.value &&
              n.value &&
              (function gv(e) {
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
          const n = fe(t.providedIn);
          return 'string' == typeof n
            ? 'any' === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
      }
      function rc(e) {
        const t = at(e),
          n = null !== t ? t.factory : fr(e);
        if (null !== n) return n;
        if (e instanceof mn) throw new z(204, !1);
        if (e instanceof Function)
          return (function fv(e) {
            const t = e.length;
            if (t > 0) throw (xt(t, '?'), new z(204, !1));
            const n = (function an(e) {
              const t = e && (e[Zt] || e[Ut]);
              if (t) {
                const n = (function qt(e) {
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
        throw new z(204, !1);
      }
      function $d(e, t, n) {
        let r;
        if (Pi(e)) {
          const i = fe(e);
          return fr(i) || rc(i);
        }
        if (ec(e)) r = () => fe(e.useValue);
        else if (
          (function Ld(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...or(e.deps || []));
        else if (
          (function Nd(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => _t(fe(e.useExisting));
        else {
          const i = fe(e && (e.useClass || e.provide));
          if (
            !(function pv(e) {
              return !!e.deps;
            })(e)
          )
            return fr(i) || rc(i);
          r = () => new i(...or(e.deps));
        }
        return r;
      }
      function es(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function oc(e, t) {
        for (const n of e)
          Array.isArray(n) ? oc(n, t) : n && he(n) ? oc(n.ɵproviders, t) : t(n);
      }
      class vv {}
      class Bd {}
      class Dv {
        resolveComponentFactory(t) {
          throw (function yv(e) {
            const t = Error(
              `No component factory found for ${Ne(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let Ks = (() => {
        class e {}
        return (e.NULL = new Dv()), e;
      })();
      function Cv() {
        return ts(zt(), Ie());
      }
      function ts(e, t) {
        return new Zs(Mn(e, t));
      }
      let Zs = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = Cv), e;
      })();
      function _v(e) {
        return e instanceof Zs ? e.nativeElement : e;
      }
      class Hd {}
      let Ev = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function bv() {
                const e = Ie(),
                  n = jn(zt().index, e);
                return (en(n) ? n : e)[11];
              })()),
            e
          );
        })(),
        wv = (() => {
          class e {}
          return (
            (e.ɵprov = Bt({
              token: e,
              providedIn: 'root',
              factory: () => null,
            })),
            e
          );
        })();
      class jd {
        constructor(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t.split('.').slice(2).join('.'));
        }
      }
      const Iv = new jd('15.0.2'),
        ic = {};
      function ac(e) {
        return e.ngOriginalError;
      }
      class Qs {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error('ERROR', t),
            n && this._console.error('ORIGINAL ERROR', n);
        }
        _findOriginalError(t) {
          let n = t && ac(t);
          for (; n && ac(n); ) n = ac(n);
          return n || null;
        }
      }
      function ni(e) {
        return e instanceof Function ? e() : e;
      }
      function Gd(e, t, n) {
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
      const zd = 'ng-template';
      function Lv(e, t, n) {
        let r = 0;
        for (; r < e.length; ) {
          let i = e[r++];
          if (n && 'class' === i) {
            if (((i = e[r]), -1 !== Gd(i.toLowerCase(), t, 0))) return !0;
          } else if (1 === i) {
            for (; r < e.length && 'string' == typeof (i = e[r++]); )
              if (i.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function Yd(e) {
        return 4 === e.type && e.value !== zd;
      }
      function kv(e, t, n) {
        return t === (4 !== e.type || n ? e.value : zd);
      }
      function $v(e, t, n) {
        let r = 4;
        const i = e.attrs || [],
          s = (function Hv(e) {
            for (let t = 0; t < e.length; t++) if (xs(e[t])) return t;
            return e.length;
          })(i);
        let u = !1;
        for (let h = 0; h < t.length; h++) {
          const m = t[h];
          if ('number' != typeof m) {
            if (!u)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ('' !== m && !kv(e, m, n)) || ('' === m && 1 === t.length))
                ) {
                  if (Eo(r)) return !1;
                  u = !0;
                }
              } else {
                const w = 8 & r ? m : t[++h];
                if (8 & r && null !== e.attrs) {
                  if (!Lv(e.attrs, w, n)) {
                    if (Eo(r)) return !1;
                    u = !0;
                  }
                  continue;
                }
                const H = Bv(8 & r ? 'class' : m, i, Yd(e), n);
                if (-1 === H) {
                  if (Eo(r)) return !1;
                  u = !0;
                  continue;
                }
                if ('' !== w) {
                  let ne;
                  ne = H > s ? '' : i[H + 1].toLowerCase();
                  const De = 8 & r ? ne : null;
                  if ((De && -1 !== Gd(De, w, 0)) || (2 & r && w !== ne)) {
                    if (Eo(r)) return !1;
                    u = !0;
                  }
                }
              }
          } else {
            if (!u && !Eo(r) && !Eo(m)) return !1;
            if (u && Eo(m)) continue;
            (u = !1), (r = m | (1 & r));
          }
        }
        return Eo(r) || u;
      }
      function Eo(e) {
        return 0 == (1 & e);
      }
      function Bv(e, t, n, r) {
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
        return (function jv(e, t) {
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
      function Wd(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if ($v(e, t[r], n)) return !0;
        return !1;
      }
      function Uv(e, t) {
        e: for (let n = 0; n < t.length; n++) {
          const r = t[n];
          if (e.length === r.length) {
            for (let i = 0; i < e.length; i++) if (e[i] !== r[i]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function qd(e, t) {
        return e ? ':not(' + t.trim() + ')' : t;
      }
      function Gv(e) {
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
            '' !== i && !Eo(u) && ((t += qd(s, i)), (i = '')),
              (r = u),
              (s = s || !Eo(r));
          n++;
        }
        return '' !== i && (t += qd(s, i)), t;
      }
      const Ft = {};
      function Xd(e) {
        Kd(vt(), Ie(), Mt() + e, !1);
      }
      function Kd(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[2])) {
            const s = e.preOrderCheckHooks;
            null !== s && Rr(t, s, n);
          } else {
            const s = e.preOrderHooks;
            null !== s && Co(t, s, 0, n);
          }
        kt(n);
      }
      function ef(e, t = null, n = null, r) {
        const i = tf(e, t, n, r);
        return i.resolveInjectorInitializers(), i;
      }
      function tf(e, t = null, n = null, r, i = new Set()) {
        const s = [n || Ct, Rd(e)];
        return (
          (r = r || ('object' == typeof e ? void 0 : Ne(e))),
          new kd(s, t || ka(), r || null, i)
        );
      }
      let Li = (() => {
        class e {
          static create(n, r) {
            if (Array.isArray(n)) return ef({ name: '' }, r, n, '');
            {
              const i = n.name ?? '';
              return ef({ name: i }, n.parent, n.providers, i);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = tr),
          (e.NULL = new xd()),
          (e.ɵprov = Bt({
            token: e,
            providedIn: 'any',
            factory: () => _t(Td),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function os(e, t = Xe.Default) {
        const n = Ie();
        return null === n ? _t(e, t) : Ps(zt(), n, fe(e), t);
      }
      function uf() {
        throw new Error('invalid');
      }
      function df(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const i = n[r],
              s = n[r + 1];
            if (-1 !== s) {
              const u = e.data[s];
              Ui(i), u.contentQueries(2, t[s], s);
            }
          }
      }
      function Ba(e, t, n, r, i, s, u, h, m, w, x) {
        const H = t.blueprint.slice();
        return (
          (H[0] = i),
          (H[2] = 76 | r),
          (null !== x || (e && 1024 & e[2])) && (H[2] |= 1024),
          v(H),
          (H[3] = H[15] = e),
          (H[8] = n),
          (H[10] = u || (e && e[10])),
          (H[11] = h || (e && e[11])),
          (H[12] = m || (e && e[12]) || null),
          (H[9] = w || (e && e[9]) || null),
          (H[6] = s),
          (H[20] = (function lm() {
            return am++;
          })()),
          (H[21] = x),
          (H[16] = 2 == t.type ? e[16] : H),
          H
        );
      }
      function is(e, t, n, r, i) {
        let s = e.data[t];
        if (null === s)
          (s = (function fc(e, t, n, r, i) {
            const s = yr(),
              u = xr(),
              m = (e.data[t] = (function my(e, t, n, r, i, s) {
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
              null === e.firstChild && (e.firstChild = m),
              null !== s &&
                (u
                  ? null == s.child && null !== m.parent && (s.child = m)
                  : null === s.next && (s.next = m)),
              m
            );
          })(e, t, n, r, i)),
            (function ai() {
              return se.lFrame.inI18n;
            })() && (s.flags |= 32);
        else if (64 & s.type) {
          (s.type = n), (s.value = r), (s.attrs = i);
          const u = (function Wn() {
            const e = se.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          s.injectorIndex = null === u ? -1 : u.injectorIndex;
        }
        return hr(s, !0), s;
      }
      function Js(e, t, n, r) {
        if (0 === n) return -1;
        const i = t.length;
        for (let s = 0; s < n; s++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return i;
      }
      function hc(e, t, n) {
        g(t);
        try {
          const r = e.viewQuery;
          null !== r && bc(1, r, n);
          const i = e.template;
          null !== i && ff(e, t, i, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && df(e, t),
            e.staticViewQueries && bc(2, e.viewQuery, n);
          const s = e.components;
          null !== s &&
            (function hy(e, t) {
              for (let n = 0; n < t.length; n++) Ny(e, t[n]);
            })(t, s);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[2] &= -5), Re();
        }
      }
      function Va(e, t, n, r) {
        const i = t[2];
        if (128 != (128 & i)) {
          g(t);
          try {
            v(t),
              (function si(e) {
                return (se.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== n && ff(e, t, n, 2, r);
            const u = 3 == (3 & i);
            if (u) {
              const w = e.preOrderCheckHooks;
              null !== w && Rr(t, w, null);
            } else {
              const w = e.preOrderHooks;
              null !== w && Co(t, w, 0, null), Xo(t, 0);
            }
            if (
              ((function Fy(e) {
                for (let t = Fl(e); null !== t; t = Pl(t)) {
                  if (!t[2]) continue;
                  const n = t[9];
                  for (let r = 0; r < n.length; r++) {
                    const i = n[r],
                      s = i[3];
                    0 == (512 & i[2]) && R(s, 1), (i[2] |= 512);
                  }
                }
              })(t),
              (function Ry(e) {
                for (let t = Fl(e); null !== t; t = Pl(t))
                  for (let n = 10; n < t.length; n++) {
                    const r = t[n],
                      i = r[1];
                    Wo(r) && Va(i, r, i.template, r[8]);
                  }
              })(t),
              null !== e.contentQueries && df(e, t),
              u)
            ) {
              const w = e.contentCheckHooks;
              null !== w && Rr(t, w);
            } else {
              const w = e.contentHooks;
              null !== w && Co(t, w, 1), Xo(t, 1);
            }
            !(function dy(e, t) {
              const n = e.hostBindingOpCodes;
              if (null !== n)
                try {
                  for (let r = 0; r < n.length; r++) {
                    const i = n[r];
                    if (i < 0) kt(~i);
                    else {
                      const s = i,
                        u = n[++r],
                        h = n[++r];
                      bs(u, s), h(2, t[s]);
                    }
                  }
                } finally {
                  kt(-1);
                }
            })(e, t);
            const h = e.components;
            null !== h &&
              (function fy(e, t) {
                for (let n = 0; n < t.length; n++) Py(e, t[n]);
              })(t, h);
            const m = e.viewQuery;
            if ((null !== m && bc(2, m, r), u)) {
              const w = e.viewCheckHooks;
              null !== w && Rr(t, w);
            } else {
              const w = e.viewHooks;
              null !== w && Co(t, w, 2), Xo(t, 2);
            }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              (t[2] &= -41),
              512 & t[2] && ((t[2] &= -513), R(t[3], -1));
          } finally {
            Re();
          }
        }
      }
      function ff(e, t, n, r, i) {
        const s = Mt(),
          u = 2 & r;
        try {
          kt(-1), u && t.length > 22 && Kd(e, t, 22, !1), n(r, i);
        } finally {
          kt(s);
        }
      }
      function pc(e, t, n) {
        if (Ar(t)) {
          const i = t.directiveEnd;
          for (let s = t.directiveStart; s < i; s++) {
            const u = e.data[s];
            u.contentQueries && u.contentQueries(1, n[s], s);
          }
        }
      }
      function gc(e, t, n) {
        !Se() ||
          ((function Ey(e, t, n, r) {
            const i = n.directiveStart,
              s = n.directiveEnd;
            e.firstCreatePass || Ko(n, t), wr(r, t);
            const u = n.initialInputs;
            for (let h = i; h < s; h++) {
              const m = e.data[h],
                w = Sn(m);
              w && Ty(t, n, m);
              const x = Wr(t, e, h, n);
              wr(x, t),
                null !== u && Oy(0, h - i, x, m, 0, u),
                w && (jn(n.index, t)[8] = x);
            }
          })(e, t, n, Mn(n, t)),
          64 == (64 & n.flags) && Df(e, t, n));
      }
      function mc(e, t, n = Mn) {
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
      function hf(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = vc(
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
      function vc(e, t, n, r, i, s, u, h, m, w) {
        const x = 22 + r,
          H = x + i,
          ne = (function py(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : Ft);
            return n;
          })(x, H),
          De = 'function' == typeof w ? w() : w;
        return (ne[1] = {
          type: e,
          blueprint: ne,
          template: n,
          queries: null,
          viewQuery: h,
          declTNode: t,
          data: ne.slice().fill(null, x),
          bindingStartIndex: x,
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
          schemas: m,
          consts: De,
          incompleteFirstPass: !1,
        });
      }
      function pf(e, t, n, r) {
        const i = _f(t);
        null === n
          ? i.push(r)
          : (i.push(n), e.firstCreatePass && Ef(e).push(r, i.length - 1));
      }
      function gf(e, t, n, r) {
        for (let i in e)
          if (e.hasOwnProperty(i)) {
            n = null === n ? {} : n;
            const s = e[i];
            null === r
              ? mf(n, t, i, s)
              : r.hasOwnProperty(i) && mf(n, t, r[i], s);
          }
        return n;
      }
      function mf(e, t, n, r) {
        e.hasOwnProperty(n) ? e[n].push(t, r) : (e[n] = [t, r]);
      }
      function vf(e, t) {
        const n = jn(t, e);
        16 & n[2] || (n[2] |= 32);
      }
      function yc(e, t, n, r) {
        let i = !1;
        if (Se()) {
          const s = null === r ? null : { '': -1 },
            u = (function wy(e, t) {
              const n = e.directiveRegistry;
              let r = null,
                i = null;
              if (n)
                for (let s = 0; s < n.length; s++) {
                  const u = n[s];
                  if (Wd(t, u.selectors, !1))
                    if ((r || (r = []), Sn(u)))
                      if (null !== u.findHostDirectiveDefs) {
                        const h = [];
                        (i = i || new Map()),
                          u.findHostDirectiveDefs(u, h, i),
                          r.unshift(...h, u),
                          Dc(e, t, h.length);
                      } else r.unshift(u), Dc(e, t, 0);
                    else
                      (i = i || new Map()),
                        u.findHostDirectiveDefs?.(u, r, i),
                        r.push(u);
                }
              return null === r ? null : [r, i];
            })(e, n);
          let h, m;
          null === u ? (h = m = null) : ([h, m] = u),
            null !== h && ((i = !0), yf(e, t, n, h, s, m)),
            s &&
              (function Iy(e, t, n) {
                if (t) {
                  const r = (e.localNames = []);
                  for (let i = 0; i < t.length; i += 2) {
                    const s = n[t[i + 1]];
                    if (null == s) throw new z(-301, !1);
                    r.push(t[i], s);
                  }
                }
              })(n, r, s);
        }
        return (n.mergedAttrs = Ii(n.mergedAttrs, n.attrs)), i;
      }
      function yf(e, t, n, r, i, s) {
        for (let w = 0; w < r.length; w++) Fs(Ko(n, t), e, r[w].type);
        !(function My(e, t, n) {
          (e.flags |= 1),
            (e.directiveStart = t),
            (e.directiveEnd = t + n),
            (e.providerIndexes = t);
        })(n, e.data.length, r.length);
        for (let w = 0; w < r.length; w++) {
          const x = r[w];
          x.providersResolver && x.providersResolver(x);
        }
        let u = !1,
          h = !1,
          m = Js(e, t, r.length, null);
        for (let w = 0; w < r.length; w++) {
          const x = r[w];
          (n.mergedAttrs = Ii(n.mergedAttrs, x.hostAttrs)),
            Ay(e, n, t, m, x),
            Sy(m, x, i),
            null !== x.contentQueries && (n.flags |= 4),
            (null !== x.hostBindings ||
              null !== x.hostAttrs ||
              0 !== x.hostVars) &&
              (n.flags |= 64);
          const H = x.type.prototype;
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
            m++;
        }
        !(function vy(e, t, n) {
          const i = t.directiveEnd,
            s = e.data,
            u = t.attrs,
            h = [];
          let m = null,
            w = null;
          for (let x = t.directiveStart; x < i; x++) {
            const H = s[x],
              ne = n ? n.get(H) : null,
              Ge = ne ? ne.outputs : null;
            (m = gf(H.inputs, x, m, ne ? ne.inputs : null)),
              (w = gf(H.outputs, x, w, Ge));
            const Qe = null === m || null === u || Yd(t) ? null : xy(m, x, u);
            h.push(Qe);
          }
          null !== m &&
            (m.hasOwnProperty('class') && (t.flags |= 8),
            m.hasOwnProperty('style') && (t.flags |= 16)),
            (t.initialInputs = h),
            (t.inputs = m),
            (t.outputs = w);
        })(e, n, s);
      }
      function Df(e, t, n) {
        const r = n.directiveStart,
          i = n.directiveEnd,
          s = n.index,
          u = (function li() {
            return se.lFrame.currentDirectiveIndex;
          })();
        try {
          kt(s);
          for (let h = r; h < i; h++) {
            const m = e.data[h],
              w = t[h];
            wi(h),
              (null !== m.hostBindings ||
                0 !== m.hostVars ||
                null !== m.hostAttrs) &&
                by(m, w);
          }
        } finally {
          kt(-1), wi(u);
        }
      }
      function by(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function Dc(e, t, n) {
        (t.componentOffset = n),
          (e.components || (e.components = [])).push(t.index);
      }
      function Sy(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          Sn(t) && (n[''] = e);
        }
      }
      function Ay(e, t, n, r, i) {
        e.data[r] = i;
        const s = i.factory || (i.factory = fr(i.type)),
          u = new di(s, Sn(i), os);
        (e.blueprint[r] = u),
          (n[r] = u),
          (function Cy(e, t, n, r, i) {
            const s = i.hostBindings;
            if (s) {
              let u = e.hostBindingOpCodes;
              null === u && (u = e.hostBindingOpCodes = []);
              const h = ~t.index;
              (function _y(e) {
                let t = e.length;
                for (; t > 0; ) {
                  const n = e[--t];
                  if ('number' == typeof n && n < 0) return n;
                }
                return 0;
              })(u) != h && u.push(h),
                u.push(n, r, s);
            }
          })(e, t, r, Js(e, n, i.hostVars, Ft), i);
      }
      function Ty(e, t, n) {
        const r = Mn(t, e),
          i = hf(n),
          s = e[10],
          u = Ha(
            e,
            Ba(
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
      }
      function ko(e, t, n, r, i, s) {
        const u = Mn(e, t);
        !(function Cc(e, t, n, r, i, s, u) {
          if (null == s) e.removeAttribute(t, i, n);
          else {
            const h = null == u ? ue(s) : u(s, r || '', i);
            e.setAttribute(t, i, h, n);
          }
        })(t[11], u, s, e.value, n, r, i);
      }
      function Oy(e, t, n, r, i, s) {
        const u = s[t];
        if (null !== u) {
          const h = r.setInput;
          for (let m = 0; m < u.length; ) {
            const w = u[m++],
              x = u[m++],
              H = u[m++];
            null !== h ? r.setInput(n, H, w, x) : (n[x] = H);
          }
        }
      }
      function xy(e, t, n) {
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
      function Cf(e, t, n, r) {
        return [e, !0, !1, t, null, 0, r, n, null, null];
      }
      function Py(e, t) {
        const n = jn(t, e);
        if (Wo(n)) {
          const r = n[1];
          48 & n[2] ? Va(r, n, r.template, n[8]) : n[5] > 0 && _c(n);
        }
      }
      function _c(e) {
        for (let r = Fl(e); null !== r; r = Pl(r))
          for (let i = 10; i < r.length; i++) {
            const s = r[i];
            if (Wo(s))
              if (512 & s[2]) {
                const u = s[1];
                Va(u, s, u.template, s[8]);
              } else s[5] > 0 && _c(s);
          }
        const n = e[1].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const i = jn(n[r], e);
            Wo(i) && i[5] > 0 && _c(i);
          }
      }
      function Ny(e, t) {
        const n = jn(t, e),
          r = n[1];
        (function Ly(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          hc(r, n, n[8]);
      }
      function Ha(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function Ec(e) {
        for (; e; ) {
          e[2] |= 32;
          const t = zs(e);
          if (Lr(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function ja(e, t, n, r = !0) {
        const i = t[10];
        i.begin && i.begin();
        try {
          Va(e, t, e.template, n);
        } catch (u) {
          throw (r && wf(t, u), u);
        } finally {
          i.end && i.end();
        }
      }
      function bc(e, t, n) {
        Ui(0), t(e, n);
      }
      function _f(e) {
        return e[7] || (e[7] = []);
      }
      function Ef(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function wf(e, t) {
        const n = e[9],
          r = n ? n.get(Qs, null) : null;
        r && r.handleError(t);
      }
      function wc(e, t, n, r, i) {
        for (let s = 0; s < n.length; ) {
          const u = n[s++],
            h = n[s++],
            m = t[u],
            w = e.data[u];
          null !== w.setInput ? w.setInput(m, i, r, h) : (m[h] = i);
        }
      }
      function Ua(e, t, n) {
        let r = n ? e.styles : null,
          i = n ? e.classes : null,
          s = 0;
        if (null !== t)
          for (let u = 0; u < t.length; u++) {
            const h = t[u];
            'number' == typeof h
              ? (s = h)
              : 1 == s
              ? (i = de(i, h))
              : 2 == s && (r = de(r, h + ': ' + t[++u] + ';'));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = i) : (e.classesWithoutHost = i);
      }
      function Ga(e, t, n, r, i = !1) {
        for (; null !== n; ) {
          const s = t[n.index];
          if ((null !== s && r.push(Dn(s)), Fn(s)))
            for (let h = 10; h < s.length; h++) {
              const m = s[h],
                w = m[1].firstChild;
              null !== w && Ga(m[1], m, w, r);
            }
          const u = n.type;
          if (8 & u) Ga(e, t, n.child, r);
          else if (32 & u) {
            const h = Rl(n, t);
            let m;
            for (; (m = h()); ) r.push(m);
          } else if (16 & u) {
            const h = fd(t, n);
            if (Array.isArray(h)) r.push(...h);
            else {
              const m = zs(t[16]);
              Ga(m[1], m, h, r, !0);
            }
          }
          n = i ? n.projectionNext : n.next;
        }
        return r;
      }
      class ea {
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            n = t[1];
          return Ga(n, t, n.firstChild, []);
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
              r > -1 && (kl(t, r), ct(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          rd(this._lView[1], this._lView);
        }
        onDestroy(t) {
          pf(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          Ec(this._cdRefInjectingView || this._lView);
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
          if (this._appRef) throw new z(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function wm(e, t) {
              Ys(e, t, t[11], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new z(902, !1);
          this._appRef = t;
        }
      }
      class ky extends ea {
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
      class If extends Ks {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = Ot(t);
          return new ta(n, this.ngModule);
        }
      }
      function Sf(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class By {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          r = Bn(r);
          const i = this.injector.get(t, ic, r);
          return i !== ic || n === ic ? i : this.parentInjector.get(t, n, r);
        }
      }
      class ta extends Bd {
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function zv(e) {
              return e.map(Gv).join(',');
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        get inputs() {
          return Sf(this.componentDef.inputs);
        }
        get outputs() {
          return Sf(this.componentDef.outputs);
        }
        create(t, n, r, i) {
          let s = (i = i || this.ngModule) instanceof Ni ? i : i?.injector;
          s &&
            null !== this.componentDef.getStandaloneInjector &&
            (s = this.componentDef.getStandaloneInjector(s) || s);
          const u = s ? new By(t, s) : t,
            h = u.get(Hd, null);
          if (null === h) throw new z(407, !1);
          const m = u.get(wv, null),
            w = h.createRenderer(null, this.componentDef),
            x = this.componentDef.selectors[0][0] || 'div',
            H = r
              ? (function gy(e, t, n) {
                  return e.selectRootElement(t, n === gt.ShadowDom);
                })(w, r, this.componentDef.encapsulation)
              : Ll(
                  w,
                  x,
                  (function $y(e) {
                    const t = e.toLowerCase();
                    return 'svg' === t ? 'svg' : 'math' === t ? 'math' : null;
                  })(x)
                ),
            ne = this.componentDef.onPush ? 288 : 272,
            De = vc(0, null, null, 1, 0, null, null, null, null, null),
            Ge = Ba(null, De, null, ne, null, null, h, w, m, u, null);
          let Qe, st;
          g(Ge);
          try {
            const ht = this.componentDef;
            let bt,
              Ke = null;
            ht.findHostDirectiveDefs
              ? ((bt = []),
                (Ke = new Map()),
                ht.findHostDirectiveDefs(ht, bt, Ke),
                bt.push(ht))
              : (bt = [ht]);
            const Rt = (function Hy(e, t) {
                const n = e[1];
                return (e[22] = t), is(n, 22, 2, '#host', null);
              })(Ge, H),
              Pn = (function jy(e, t, n, r, i, s, u, h) {
                const m = i[1];
                !(function Uy(e, t, n, r) {
                  for (const i of e)
                    t.mergedAttrs = Ii(t.mergedAttrs, i.hostAttrs);
                  null !== t.mergedAttrs &&
                    (Ua(t, t.mergedAttrs, !0), null !== n && gd(r, n, t));
                })(r, e, t, u);
                const w = s.createRenderer(t, n),
                  x = Ba(
                    i,
                    hf(n),
                    null,
                    n.onPush ? 32 : 16,
                    i[e.index],
                    e,
                    s,
                    w,
                    h || null,
                    null,
                    null
                  );
                return (
                  m.firstCreatePass && Dc(m, e, r.length - 1),
                  Ha(i, x),
                  (i[e.index] = x)
                );
              })(Rt, H, ht, bt, Ge, h, w);
            (st = Po(De, 22)),
              H &&
                (function zy(e, t, n, r) {
                  if (r) Os(e, n, ['ng-version', Iv.full]);
                  else {
                    const { attrs: i, classes: s } = (function Yv(e) {
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
                          if (!Eo(i)) break;
                          i = s;
                        }
                        r++;
                      }
                      return { attrs: t, classes: n };
                    })(t.selectors[0]);
                    i && Os(e, n, i),
                      s && s.length > 0 && pd(e, n, s.join(' '));
                  }
                })(w, ht, H, r),
              void 0 !== n &&
                (function Yy(e, t, n) {
                  const r = (e.projection = []);
                  for (let i = 0; i < t.length; i++) {
                    const s = n[i];
                    r.push(null != s ? Array.from(s) : null);
                  }
                })(st, this.ngContentSelectors, n),
              (Qe = (function Gy(e, t, n, r, i, s) {
                const u = zt(),
                  h = i[1],
                  m = Mn(u, i);
                yf(h, i, u, n, null, r);
                for (let x = 0; x < n.length; x++)
                  wr(Wr(i, h, u.directiveStart + x, u), i);
                Df(h, i, u), m && wr(m, i);
                const w = Wr(i, h, u.directiveStart + u.componentOffset, u);
                if (((e[8] = i[8] = w), null !== s)) for (const x of s) x(w, t);
                return pc(h, u, e), w;
              })(Pn, ht, bt, Ke, Ge, [Wy])),
              hc(De, Ge, null);
          } finally {
            Re();
          }
          return new Vy(this.componentType, Qe, ts(st, Ge), Ge, st);
        }
      }
      class Vy extends vv {
        constructor(t, n, r, i, s) {
          super(),
            (this.location = r),
            (this._rootLView = i),
            (this._tNode = s),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new ky(i)),
            (this.componentType = t);
        }
        setInput(t, n) {
          const r = this._tNode.inputs;
          let i;
          if (null !== r && (i = r[t])) {
            const s = this._rootLView;
            wc(s[1], s, i, t, n), vf(s, this._tNode.index);
          }
        }
        get injector() {
          return new Ti(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function Wy() {
        const e = zt();
        Hr(Ie()[1], e);
      }
      function Ic(e) {
        let t = (function Mf(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let i;
          if (Sn(e)) i = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new z(903, !1);
            i = t.ɵdir;
          }
          if (i) {
            if (n) {
              r.push(i);
              const u = e;
              (u.inputs = Sc(e.inputs)),
                (u.declaredInputs = Sc(e.declaredInputs)),
                (u.outputs = Sc(e.outputs));
              const h = i.hostBindings;
              h && Zy(e, h);
              const m = i.viewQuery,
                w = i.contentQueries;
              if (
                (m && Xy(e, m),
                w && Ky(e, w),
                Ee(e.inputs, i.inputs),
                Ee(e.declaredInputs, i.declaredInputs),
                Ee(e.outputs, i.outputs),
                Sn(i) && i.data.animation)
              ) {
                const x = e.data;
                x.animation = (x.animation || []).concat(i.data.animation);
              }
            }
            const s = i.features;
            if (s)
              for (let u = 0; u < s.length; u++) {
                const h = s[u];
                h && h.ngInherit && h(e), h === Ic && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function qy(e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const i = e[r];
            (i.hostVars = t += i.hostVars),
              (i.hostAttrs = Ii(i.hostAttrs, (n = Ii(n, i.hostAttrs))));
          }
        })(r);
      }
      function Sc(e) {
        return e === Dt ? {} : e === Ct ? [] : e;
      }
      function Xy(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, i) => {
              t(r, i), n(r, i);
            }
          : t;
      }
      function Ky(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, i, s) => {
              t(r, i, s), n(r, i, s);
            }
          : t;
      }
      function Zy(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, i) => {
              t(r, i), n(r, i);
            }
          : t;
      }
      let za = null;
      function ki() {
        if (!za) {
          const e = mt.Symbol;
          if (e && e.iterator) za = e.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let n = 0; n < t.length; ++n) {
              const r = t[n];
              'entries' !== r &&
                'size' !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (za = r);
            }
          }
        }
        return za;
      }
      function na(e) {
        return (
          !!Mc(e) && (Array.isArray(e) || (!(e instanceof Map) && ki() in e))
        );
      }
      function Mc(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function $o(e, t, n) {
        return (e[t] = n);
      }
      function Ir(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function Ac(e, t, n, r) {
        const i = Ie();
        return Ir(i, yo(), t) && (vt(), ko(Et(), i, e, t, n, r)), Ac;
      }
      function Vf(e, t, n, r, i, s, u, h) {
        const m = Ie(),
          w = vt(),
          x = e + 22,
          H = w.firstCreatePass
            ? (function aD(e, t, n, r, i, s, u, h, m) {
                const w = t.consts,
                  x = is(t, e, 4, u || null, D(w, h));
                yc(t, n, x, D(w, m)), Hr(t, x);
                const H = (x.tViews = vc(
                  2,
                  x,
                  r,
                  i,
                  s,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  w
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, x),
                    (H.queries = t.queries.embeddedTView(x))),
                  x
                );
              })(x, w, m, t, n, r, i, s, u)
            : w.data[x];
        hr(H, !1);
        const ne = m[11].createComment('');
        xa(w, m, ne, H),
          wr(ne, m),
          Ha(m, (m[x] = Cf(ne, m, ne, H))),
          Tr(H) && gc(w, m, H),
          null != u && mc(m, H, h);
      }
      function Hf(e) {
        return io(
          (function bi() {
            return se.lFrame.contextLView;
          })(),
          22 + e
        );
      }
      function Tc(e, t, n) {
        const r = Ie();
        return (
          Ir(r, yo(), t) &&
            (function qr(e, t, n, r, i, s, u, h) {
              const m = Mn(t, n);
              let x,
                w = t.inputs;
              !h && null != w && (x = w[r])
                ? (wc(e, n, x, r, i), Nr(t) && vf(n, t.index))
                : 3 & t.type &&
                  ((r = (function yy(e) {
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
                  s.setProperty(m, r, i));
            })(vt(), Et(), r, e, t, r[11], n, !1),
          Tc
        );
      }
      function Oc(e, t, n, r, i) {
        const u = i ? 'class' : 'style';
        wc(e, n, t.inputs[u], u, r);
      }
      function Wa(e, t, n, r) {
        const i = Ie(),
          s = vt(),
          u = 22 + e,
          h = i[11],
          m = (i[u] = Ll(
            h,
            t,
            (function Do() {
              return se.lFrame.currentNamespace;
            })()
          )),
          w = s.firstCreatePass
            ? (function cD(e, t, n, r, i, s, u) {
                const h = t.consts,
                  w = is(t, e, 2, i, D(h, s));
                return (
                  yc(t, n, w, D(h, u)),
                  null !== w.attrs && Ua(w, w.attrs, !1),
                  null !== w.mergedAttrs && Ua(w, w.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, w),
                  w
                );
              })(u, s, i, 0, t, n, r)
            : s.data[u];
        return (
          hr(w, !0),
          gd(h, m, w),
          32 != (32 & w.flags) && xa(s, i, m, w),
          0 ===
            (function c() {
              return se.lFrame.elementDepthCount;
            })() && wr(m, i),
          (function C() {
            se.lFrame.elementDepthCount++;
          })(),
          Tr(w) && (gc(s, i, w), pc(s, w, i)),
          null !== r && mc(i, w),
          Wa
        );
      }
      function qa() {
        let e = zt();
        xr() ? Ei() : ((e = e.parent), hr(e, !1));
        const t = e;
        !(function F() {
          se.lFrame.elementDepthCount--;
        })();
        const n = vt();
        return (
          n.firstCreatePass && (Hr(n, e), Ar(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function ga(e) {
              return 0 != (8 & e.flags);
            })(t) &&
            Oc(n, t, Ie(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function Ts(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            Oc(n, t, Ie(), t.stylesWithoutHost, !1),
          qa
        );
      }
      function xc(e, t, n, r) {
        return Wa(e, t, n, r), qa(), xc;
      }
      function Xa(e, t, n) {
        const r = Ie(),
          i = vt(),
          s = e + 22,
          u = i.firstCreatePass
            ? (function uD(e, t, n, r, i) {
                const s = t.consts,
                  u = D(s, r),
                  h = is(t, e, 8, 'ng-container', u);
                return (
                  null !== u && Ua(h, u, !0),
                  yc(t, n, h, D(s, i)),
                  null !== t.queries && t.queries.elementStart(t, h),
                  h
                );
              })(s, i, r, t, n)
            : i.data[s];
        hr(u, !0);
        const h = (r[s] = r[11].createComment(''));
        return (
          xa(i, r, h, u),
          wr(h, r),
          Tr(u) && (gc(i, r, u), pc(i, u, r)),
          null != n && mc(r, u),
          Xa
        );
      }
      function Ka() {
        let e = zt();
        const t = vt();
        return (
          xr() ? Ei() : ((e = e.parent), hr(e, !1)),
          t.firstCreatePass && (Hr(t, e), Ar(e) && t.queries.elementEnd(e)),
          Ka
        );
      }
      function Rc(e, t, n) {
        return Xa(e, t, n), Ka(), Rc;
      }
      function jf() {
        return Ie();
      }
      function Fc(e) {
        return !!e && 'function' == typeof e.then;
      }
      function Uf(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      const Gf = Uf;
      function Pc(e, t, n, r) {
        const i = Ie(),
          s = vt(),
          u = zt();
        return (
          (function Yf(e, t, n, r, i, s, u) {
            const h = Tr(r),
              w = e.firstCreatePass && Ef(e),
              x = t[8],
              H = _f(t);
            let ne = !0;
            if (3 & r.type || u) {
              const Qe = Mn(r, t),
                st = u ? u(Qe) : Qe,
                ht = H.length,
                bt = u ? (Rt) => u(Dn(Rt[r.index])) : r.index;
              let Ke = null;
              if (
                (!u &&
                  h &&
                  (Ke = (function dD(e, t, n, r) {
                    const i = e.cleanup;
                    if (null != i)
                      for (let s = 0; s < i.length - 1; s += 2) {
                        const u = i[s];
                        if (u === n && i[s + 1] === r) {
                          const h = t[7],
                            m = i[s + 2];
                          return h.length > m ? h[m] : null;
                        }
                        'string' == typeof u && (s += 2);
                      }
                    return null;
                  })(e, t, i, r.index)),
                null !== Ke)
              )
                ((Ke.__ngLastListenerFn__ || Ke).__ngNextListenerFn__ = s),
                  (Ke.__ngLastListenerFn__ = s),
                  (ne = !1);
              else {
                s = qf(r, t, x, s, !1);
                const Rt = n.listen(st, i, s);
                H.push(s, Rt), w && w.push(i, bt, ht, ht + 1);
              }
            } else s = qf(r, t, x, s, !1);
            const De = r.outputs;
            let Ge;
            if (ne && null !== De && (Ge = De[i])) {
              const Qe = Ge.length;
              if (Qe)
                for (let st = 0; st < Qe; st += 2) {
                  const Pn = t[Ge[st]][Ge[st + 1]].subscribe(s),
                    Zn = H.length;
                  H.push(s, Pn), w && w.push(i, r.index, Zn, -(Zn + 1));
                }
            }
          })(s, i, i[11], u, e, t, r),
          Pc
        );
      }
      function Wf(e, t, n, r) {
        try {
          return !1 !== n(r);
        } catch (i) {
          return wf(e, i), !1;
        }
      }
      function qf(e, t, n, r, i) {
        return function s(u) {
          if (u === Function) return r;
          Ec(e.componentOffset > -1 ? jn(e.index, t) : t);
          let m = Wf(t, 0, r, u),
            w = s.__ngNextListenerFn__;
          for (; w; ) (m = Wf(t, 0, w, u) && m), (w = w.__ngNextListenerFn__);
          return i && !1 === m && (u.preventDefault(), (u.returnValue = !1)), m;
        };
      }
      function Xf(e = 1) {
        return (function ze(e) {
          return (se.lFrame.contextLView = (function yt(e, t) {
            for (; e > 0; ) (t = t[15]), e--;
            return t;
          })(e, se.lFrame.contextLView))[8];
        })(e);
      }
      function fD(e, t) {
        let n = null;
        const r = (function Vv(e) {
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
            if (null === r ? Wd(e, s, !0) : Uv(r, s)) return i;
          } else n = i;
        }
        return n;
      }
      function Kf(e) {
        const t = Ie()[16][6];
        if (!t.projection) {
          const r = (t.projection = xt(e ? e.length : 1, null)),
            i = r.slice();
          let s = t.child;
          for (; null !== s; ) {
            const u = e ? fD(s, e) : 0;
            null !== u &&
              (i[u] ? (i[u].projectionNext = s) : (r[u] = s), (i[u] = s)),
              (s = s.next);
          }
        }
      }
      function Zf(e, t = 0, n) {
        const r = Ie(),
          i = vt(),
          s = is(i, 22 + e, 16, null, n || null);
        null === s.projection && (s.projection = t),
          Ei(),
          32 != (32 & s.flags) &&
            (function Rm(e, t, n) {
              hd(t[11], 0, t, n, od(e, n, t), ld(n.parent || t[6], n, t));
            })(i, r, s);
      }
      function Za(e, t) {
        return (e << 17) | (t << 2);
      }
      function mi(e) {
        return (e >> 17) & 32767;
      }
      function Lc(e) {
        return 2 | e;
      }
      function Bi(e) {
        return (131068 & e) >> 2;
      }
      function kc(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function $c(e) {
        return 1 | e;
      }
      function ah(e, t, n, r, i) {
        const s = e[n + 1],
          u = null === t;
        let h = r ? mi(s) : Bi(s),
          m = !1;
        for (; 0 !== h && (!1 === m || u); ) {
          const x = e[h + 1];
          yD(e[h], t) && ((m = !0), (e[h + 1] = r ? $c(x) : Lc(x))),
            (h = r ? mi(x) : Bi(x));
        }
        m && (e[n + 1] = r ? Lc(s) : $c(s));
      }
      function yD(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || 'string' != typeof t) && Zi(e, t) >= 0)
        );
      }
      function Bc(e, t) {
        return (
          (function bo(e, t, n, r) {
            const i = Ie(),
              s = vt(),
              u = (function Yr(e) {
                const t = se.lFrame,
                  n = t.bindingIndex;
                return (t.bindingIndex = t.bindingIndex + e), n;
              })(2);
            s.firstUpdatePass &&
              (function mh(e, t, n, r) {
                const i = e.data;
                if (null === i[n + 1]) {
                  const s = i[Mt()],
                    u = (function gh(e, t) {
                      return t >= e.expandoStartIndex;
                    })(e, n);
                  (function Ch(e, t) {
                    return 0 != (e.flags & (t ? 8 : 16));
                  })(s, r) &&
                    null === t &&
                    !u &&
                    (t = !1),
                    (t = (function MD(e, t, n, r) {
                      const i = (function ji(e) {
                        const t = se.lFrame.currentDirectiveIndex;
                        return -1 === t ? null : e[t];
                      })(e);
                      let s = r ? t.residualClasses : t.residualStyles;
                      if (null === i)
                        0 === (r ? t.classBindings : t.styleBindings) &&
                          ((n = oa((n = Vc(null, e, t, n, r)), t.attrs, r)),
                          (s = null));
                      else {
                        const u = t.directiveStylingLast;
                        if (-1 === u || e[u] !== i)
                          if (((n = Vc(i, e, t, n, r)), null === s)) {
                            let m = (function AD(e, t, n) {
                              const r = n ? t.classBindings : t.styleBindings;
                              if (0 !== Bi(r)) return e[mi(r)];
                            })(e, t, r);
                            void 0 !== m &&
                              Array.isArray(m) &&
                              ((m = Vc(null, e, t, m[1], r)),
                              (m = oa(m, t.attrs, r)),
                              (function TD(e, t, n, r) {
                                e[mi(n ? t.classBindings : t.styleBindings)] =
                                  r;
                              })(e, t, r, m));
                          } else
                            s = (function OD(e, t, n) {
                              let r;
                              const i = t.directiveEnd;
                              for (
                                let s = 1 + t.directiveStylingLast;
                                s < i;
                                s++
                              )
                                r = oa(r, e[s].hostAttrs, n);
                              return oa(r, t.attrs, n);
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
                    (function mD(e, t, n, r, i, s) {
                      let u = s ? t.classBindings : t.styleBindings,
                        h = mi(u),
                        m = Bi(u);
                      e[r] = n;
                      let x,
                        w = !1;
                      if (Array.isArray(n)) {
                        const H = n;
                        (x = H[1]), (null === x || Zi(H, x) > 0) && (w = !0);
                      } else x = n;
                      if (i)
                        if (0 !== m) {
                          const ne = mi(e[h + 1]);
                          (e[r + 1] = Za(ne, h)),
                            0 !== ne && (e[ne + 1] = kc(e[ne + 1], r)),
                            (e[h + 1] = (function pD(e, t) {
                              return (131071 & e) | (t << 17);
                            })(e[h + 1], r));
                        } else
                          (e[r + 1] = Za(h, 0)),
                            0 !== h && (e[h + 1] = kc(e[h + 1], r)),
                            (h = r);
                      else
                        (e[r + 1] = Za(m, 0)),
                          0 === h ? (h = r) : (e[m + 1] = kc(e[m + 1], r)),
                          (m = r);
                      w && (e[r + 1] = Lc(e[r + 1])),
                        ah(e, x, r, !0),
                        ah(e, x, r, !1),
                        (function vD(e, t, n, r, i) {
                          const s = i ? e.residualClasses : e.residualStyles;
                          null != s &&
                            'string' == typeof t &&
                            Zi(s, t) >= 0 &&
                            (n[r + 1] = $c(n[r + 1]));
                        })(t, x, e, r, s),
                        (u = Za(h, m)),
                        s ? (t.classBindings = u) : (t.styleBindings = u);
                    })(i, s, t, n, u, r);
                }
              })(s, e, u, r),
              t !== Ft &&
                Ir(i, u, t) &&
                (function yh(e, t, n, r, i, s, u, h) {
                  if (!(3 & t.type)) return;
                  const m = e.data,
                    w = m[h + 1],
                    x = (function gD(e) {
                      return 1 == (1 & e);
                    })(w)
                      ? Dh(m, t, n, i, Bi(w), u)
                      : void 0;
                  Qa(x) ||
                    (Qa(s) ||
                      ((function hD(e) {
                        return 2 == (2 & e);
                      })(w) &&
                        (s = Dh(m, null, n, i, h, u))),
                    (function Pm(e, t, n, r, i) {
                      if (t) i ? e.addClass(n, r) : e.removeClass(n, r);
                      else {
                        let s = -1 === r.indexOf('-') ? void 0 : Lo.DashCase;
                        null == i
                          ? e.removeStyle(n, r, s)
                          : ('string' == typeof i &&
                              i.endsWith('!important') &&
                              ((i = i.slice(0, -10)), (s |= Lo.Important)),
                            e.setStyle(n, r, i, s));
                      }
                    })(r, u, Br(Mt(), n), i, s));
                })(
                  s,
                  s.data[Mt()],
                  i,
                  i[11],
                  e,
                  (i[u + 1] = (function FD(e, t) {
                    return (
                      null == e ||
                        ('string' == typeof t
                          ? (e += t)
                          : 'object' == typeof e && (e = Ne(gi(e)))),
                      e
                    );
                  })(t, n)),
                  r,
                  u
                );
          })(e, t, null, !0),
          Bc
        );
      }
      function Vc(e, t, n, r, i) {
        let s = null;
        const u = n.directiveEnd;
        let h = n.directiveStylingLast;
        for (
          -1 === h ? (h = n.directiveStart) : h++;
          h < u && ((s = t[h]), (r = oa(r, s.hostAttrs, i)), s !== e);

        )
          h++;
        return null !== e && (n.directiveStylingLast = h), r;
      }
      function oa(e, t, n) {
        const r = n ? 1 : 2;
        let i = -1;
        if (null !== t)
          for (let s = 0; s < t.length; s++) {
            const u = t[s];
            'number' == typeof u
              ? (i = u)
              : i === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ['', e]),
                Dr(e, u, !!n || t[++s]));
          }
        return void 0 === e ? null : e;
      }
      function Dh(e, t, n, r, i, s) {
        const u = null === t;
        let h;
        for (; i > 0; ) {
          const m = e[i],
            w = Array.isArray(m),
            x = w ? m[1] : m,
            H = null === x;
          let ne = n[i + 1];
          ne === Ft && (ne = H ? Ct : void 0);
          let De = H ? Bs(ne, r) : x === r ? ne : void 0;
          if ((w && !Qa(De) && (De = Bs(m, r)), Qa(De) && ((h = De), u)))
            return h;
          const Ge = e[i + 1];
          i = u ? mi(Ge) : Bi(Ge);
        }
        if (null !== t) {
          let m = s ? t.residualClasses : t.residualStyles;
          null != m && (h = Bs(m, r));
        }
        return h;
      }
      function Qa(e) {
        return void 0 !== e;
      }
      function _h(e, t = '') {
        const n = Ie(),
          r = vt(),
          i = e + 22,
          s = r.firstCreatePass ? is(r, i, 1, t, null) : r.data[i],
          u = (n[i] = (function Nl(e, t) {
            return e.createText(t);
          })(n[11], t));
        xa(r, n, u, s), hr(s, !1);
      }
      function Hc(e) {
        return jc('', e, ''), Hc;
      }
      function jc(e, t, n) {
        const r = Ie(),
          i = (function as(e, t, n, r) {
            return Ir(e, yo(), n) ? t + ue(n) + r : Ft;
          })(r, e, t, n);
        return (
          i !== Ft &&
            (function ri(e, t, n) {
              const r = Br(t, e);
              !(function td(e, t, n) {
                e.setValue(t, n);
              })(e[11], r, n);
            })(r, Mt(), i),
          jc
        );
      }
      const Vi = void 0;
      var JD = [
        'en',
        [['a', 'p'], ['AM', 'PM'], Vi],
        [['AM', 'PM'], Vi, Vi],
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
        Vi,
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
        Vi,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini'],
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', Vi, "{1} 'at' {0}", Vi],
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
        function QD(e) {
          const n = Math.floor(Math.abs(e)),
            r = e.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === n && 0 === r ? 1 : 5;
        },
      ];
      let ms = {};
      function Uc(e) {
        const t = (function e0(e) {
          return e.toLowerCase().replace(/_/g, '-');
        })(e);
        let n = jh(t);
        if (n) return n;
        const r = t.split('-')[0];
        if (((n = jh(r)), n)) return n;
        if ('en' === r) return JD;
        throw new z(701, !1);
      }
      function Hh(e) {
        return Uc(e)[It.PluralCase];
      }
      function jh(e) {
        return (
          e in ms ||
            (ms[e] =
              mt.ng &&
              mt.ng.common &&
              mt.ng.common.locales &&
              mt.ng.common.locales[e]),
          ms[e]
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
      const vs = 'en-US';
      let Uh = vs;
      function Yc(e, t, n, r, i) {
        if (((e = fe(e)), Array.isArray(e)))
          for (let s = 0; s < e.length; s++) Yc(e[s], t, n, r, i);
        else {
          const s = vt(),
            u = Ie();
          let h = Pi(e) ? e : fe(e.provide),
            m = $d(e);
          const w = zt(),
            x = 1048575 & w.providerIndexes,
            H = w.directiveStart,
            ne = w.providerIndexes >> 20;
          if (Pi(e) || !e.multi) {
            const De = new di(m, i, os),
              Ge = qc(h, t, i ? x : x + ne, H);
            -1 === Ge
              ? (Fs(Ko(w, u), s, h),
                Wc(s, e, t.length),
                t.push(h),
                w.directiveStart++,
                w.directiveEnd++,
                i && (w.providerIndexes += 1048576),
                n.push(De),
                u.push(De))
              : ((n[Ge] = De), (u[Ge] = De));
          } else {
            const De = qc(h, t, x + ne, H),
              Ge = qc(h, t, x, x + ne),
              Qe = De >= 0 && n[De],
              st = Ge >= 0 && n[Ge];
            if ((i && !st) || (!i && !Qe)) {
              Fs(Ko(w, u), s, h);
              const ht = (function Q0(e, t, n, r, i) {
                const s = new di(e, n, os);
                return (
                  (s.multi = []),
                  (s.index = t),
                  (s.componentProviders = 0),
                  pp(s, i, r && !n),
                  s
                );
              })(i ? Z0 : K0, n.length, i, r, m);
              !i && st && (n[Ge].providerFactory = ht),
                Wc(s, e, t.length, 0),
                t.push(h),
                w.directiveStart++,
                w.directiveEnd++,
                i && (w.providerIndexes += 1048576),
                n.push(ht),
                u.push(ht);
            } else Wc(s, e, De > -1 ? De : Ge, pp(n[i ? Ge : De], m, !i && r));
            !i && r && st && n[Ge].componentProviders++;
          }
        }
      }
      function Wc(e, t, n, r) {
        const i = Pi(t),
          s = (function uv(e) {
            return !!e.useClass;
          })(t);
        if (i || s) {
          const m = (s ? fe(t.useClass) : t).prototype.ngOnDestroy;
          if (m) {
            const w = e.destroyHooks || (e.destroyHooks = []);
            if (!i && t.multi) {
              const x = w.indexOf(n);
              -1 === x ? w.push(n, [r, m]) : w[x + 1].push(r, m);
            } else w.push(n, m);
          }
        }
      }
      function pp(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function qc(e, t, n, r) {
        for (let i = n; i < r; i++) if (t[i] === e) return i;
        return -1;
      }
      function K0(e, t, n, r) {
        return Xc(this.multi, []);
      }
      function Z0(e, t, n, r) {
        const i = this.multi;
        let s;
        if (this.providerFactory) {
          const u = this.providerFactory.componentProviders,
            h = Wr(n, n[1], this.providerFactory.index, r);
          (s = h.slice(0, u)), Xc(i, s);
          for (let m = u; m < h.length; m++) s.push(h[m]);
        } else (s = []), Xc(i, s);
        return s;
      }
      function Xc(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function gp(e, t = []) {
        return (n) => {
          n.providersResolver = (r, i) =>
            (function X0(e, t, n) {
              const r = vt();
              if (r.firstCreatePass) {
                const i = Sn(e);
                Yc(n, r.data, r.blueprint, i, !0),
                  Yc(t, r.data, r.blueprint, i, !1);
              }
            })(r, i ? i(e) : e, t);
        };
      }
      class ys {}
      class mp {}
      function J0(e, t) {
        return new vp(e, t ?? null);
      }
      class vp extends ys {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new If(this));
          const r = T(t);
          (this._bootstrapComponents = ni(r.bootstrap)),
            (this._r3Injector = tf(
              t,
              n,
              [
                { provide: ys, useValue: this },
                { provide: Ks, useValue: this.componentFactoryResolver },
              ],
              Ne(t),
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
      class Kc extends mp {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new vp(this.moduleType, t);
        }
      }
      class eC extends ys {
        constructor(t, n, r) {
          super(),
            (this.componentFactoryResolver = new If(this)),
            (this.instance = null);
          const i = new kd(
            [
              ...t,
              { provide: ys, useValue: this },
              { provide: Ks, useValue: this.componentFactoryResolver },
            ],
            n || ka(),
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
      function Zc(e, t, n = null) {
        return new eC(e, t, n).injector;
      }
      let tC = (() => {
        class e {
          constructor(n) {
            (this._injector = n), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n.id)) {
              const r = Fd(0, n.type),
                i =
                  r.length > 0
                    ? Zc([r], this._injector, `Standalone[${n.type.name}]`)
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
          (e.ɵprov = Bt({
            token: e,
            providedIn: 'environment',
            factory: () => new e(_t(Ni)),
          })),
          e
        );
      })();
      function yp(e) {
        e.getStandaloneInjector = (t) =>
          t.get(tC).getOrCreateStandaloneInjector(e);
      }
      function Ip(e, t, n) {
        const r = pr() + e,
          i = Ie();
        return i[r] === Ft
          ? $o(i, r, n ? t.call(n) : t())
          : (function ra(e, t) {
              return e[t];
            })(i, r);
      }
      function Sp(e, t, n, r, i, s) {
        const u = t + n;
        return Ir(e, u, i)
          ? $o(e, u + 1, s ? r.call(s, i) : r(i))
          : (function ua(e, t) {
              const n = e[t];
              return n === Ft ? void 0 : n;
            })(e, u + 1);
      }
      function xp(e, t) {
        const n = vt();
        let r;
        const i = e + 22;
        n.firstCreatePass
          ? ((r = (function DC(e, t) {
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
        const s = r.factory || (r.factory = fr(r.type)),
          u = Tt(os);
        try {
          const h = Yi(!1),
            m = s();
          return (
            Yi(h),
            (function lD(e, t, n, r) {
              n >= e.data.length &&
                ((e.data[n] = null), (e.blueprint[n] = null)),
                (t[n] = r);
            })(n, Ie(), i, m),
            m
          );
        } finally {
          Tt(u);
        }
      }
      function Rp(e, t, n) {
        const r = e + 22,
          i = Ie(),
          s = io(i, r);
        return (function da(e, t) {
          return e[1].data[t].pure;
        })(i, r)
          ? Sp(i, pr(), t, s.transform, n, s)
          : s.transform(n);
      }
      function Jc(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const Ho = class wC extends o.x {
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
            const m = t;
            (i = m.next?.bind(m)),
              (s = m.error?.bind(m)),
              (u = m.complete?.bind(m));
          }
          this.__isAsync && ((s = Jc(s)), i && (i = Jc(i)), u && (u = Jc(u)));
          const h = super.subscribe({ next: i, error: s, complete: u });
          return t instanceof L.w0 && t.add(h), h;
        }
      };
      function IC() {
        return this._results[ki()]();
      }
      class eu {
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = ki(),
            r = eu.prototype;
          r[n] || (r[n] = IC);
        }
        get changes() {
          return this._changes || (this._changes = new Ho());
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
          const i = te(t);
          (this._changesDetected = !(function P(e, t, n) {
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
      let fa = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = AC), e;
      })();
      const SC = fa,
        MC = class extends SC {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          createEmbeddedView(t, n) {
            const r = this._declarationTContainer.tViews,
              i = Ba(
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
              hc(r, i, t),
              new ea(i)
            );
          }
        };
      function AC() {
        return rl(zt(), Ie());
      }
      function rl(e, t) {
        return 4 & e.type ? new MC(t, e, ts(e, t)) : null;
      }
      let ol = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = TC), e;
      })();
      function TC() {
        return Np(zt(), Ie());
      }
      const OC = ol,
        Fp = class extends OC {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return ts(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Ti(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = qi(this._hostTNode, this._hostLView);
            if (Si(t)) {
              const n = Mi(t, this._hostLView),
                r = zi(t);
              return new Ti(n[1].data[r + 8], n);
            }
            return new Ti(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = Pp(this._lContainer);
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
              !(function _(e) {
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
            const m = u ? t : new ta(Ot(t)),
              w = r || this.parentInjector;
            if (!s && null == m.ngModule) {
              const ne = (u ? w : this.parentInjector).get(Ni, null);
              ne && (s = ne);
            }
            const x = m.create(w, i, void 0, s);
            return this.insert(x.hostView, h), x;
          }
          insert(t, n) {
            const r = t._lView,
              i = r[1];
            if (
              (function b(e) {
                return Fn(e[3]);
              })(r)
            ) {
              const x = this.indexOf(t);
              if (-1 !== x) this.detach(x);
              else {
                const H = r[3],
                  ne = new Fp(H, H[6], H[3]);
                ne.detach(ne.indexOf(t));
              }
            }
            const s = this._adjustIndex(n),
              u = this._lContainer;
            !(function Sm(e, t, n, r) {
              const i = 10 + r,
                s = n.length;
              r > 0 && (n[i - 1][4] = t),
                r < s - 10
                  ? ((t[4] = n[i]), lt(n, 10 + r, t))
                  : (n.push(t), (t[4] = null)),
                (t[3] = n);
              const u = t[17];
              null !== u &&
                n !== u &&
                (function Mm(e, t) {
                  const n = e[9];
                  t[16] !== t[3][3][16] && (e[2] = !0),
                    null === n ? (e[9] = [t]) : n.push(t);
                })(u, t);
              const h = t[19];
              null !== h && h.insertView(e), (t[2] |= 64);
            })(i, r, u, s);
            const h = Vl(s, u),
              m = r[11],
              w = Oa(m, u[7]);
            return (
              null !== w &&
                (function bm(e, t, n, r, i, s) {
                  (r[0] = i), (r[6] = t), Ys(e, r, n, 1, i, s);
                })(i, u[6], m, r, w, h),
              t.attachToViewContainerRef(),
              lt(tu(u), s, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = Pp(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = kl(this._lContainer, n);
            r && (ct(tu(this._lContainer), n), rd(r[1], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = kl(this._lContainer, n);
            return r && null != ct(tu(this._lContainer), n) ? new ea(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function Pp(e) {
        return e[8];
      }
      function tu(e) {
        return e[8] || (e[8] = []);
      }
      function Np(e, t) {
        let n;
        const r = t[e.index];
        if (Fn(r)) n = r;
        else {
          let i;
          if (8 & e.type) i = Dn(r);
          else {
            const s = t[11];
            i = s.createComment('');
            const u = Mn(e, t);
            Ri(
              s,
              Oa(s, u),
              i,
              (function xm(e, t) {
                return e.nextSibling(t);
              })(s, u),
              !1
            );
          }
          (t[e.index] = n = Cf(r, t, i, e)), Ha(t, n);
        }
        return new Fp(n, e, t);
      }
      class nu {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new nu(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class ru {
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
            return new ru(i);
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
            null !== Gp(t, n).matches && this.queries[n].setDirty();
        }
      }
      class Lp {
        constructor(t, n, r = null) {
          (this.predicate = t), (this.flags = n), (this.read = r);
        }
      }
      class ou {
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
          return null !== n ? new ou(n) : null;
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
      class iu {
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
              new iu(this.metadata))
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
              this.matchTNodeWithReadOption(t, n, FC(n, s)),
                this.matchTNodeWithReadOption(t, n, Ai(n, t, s, !1, !1));
            }
          else
            r === fa
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, Ai(n, t, r, !1, !1));
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const i = this.metadata.read;
            if (null !== i)
              if (i === Zs || i === ol || (i === fa && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const s = Ai(n, t, i, !1, !1);
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
      function FC(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function NC(e, t, n, r) {
        return -1 === n
          ? (function PC(e, t) {
              return 11 & e.type ? ts(e, t) : 4 & e.type ? rl(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function LC(e, t, n) {
              return n === Zs
                ? ts(t, e)
                : n === fa
                ? rl(t, e)
                : n === ol
                ? Np(t, e)
                : void 0;
            })(e, t, r)
          : Wr(e, e[1], n, t);
      }
      function kp(e, t, n, r) {
        const i = t[19].queries[r];
        if (null === i.matches) {
          const s = e.data,
            u = n.matches,
            h = [];
          for (let m = 0; m < u.length; m += 2) {
            const w = u[m];
            h.push(w < 0 ? null : NC(t, s[w], u[m + 1], n.metadata.read));
          }
          i.matches = h;
        }
        return i.matches;
      }
      function su(e, t, n, r) {
        const i = e.queries.getByIndex(n),
          s = i.matches;
        if (null !== s) {
          const u = kp(e, t, i, n);
          for (let h = 0; h < s.length; h += 2) {
            const m = s[h];
            if (m > 0) r.push(u[h / 2]);
            else {
              const w = s[h + 1],
                x = t[-m];
              for (let H = 10; H < x.length; H++) {
                const ne = x[H];
                ne[17] === ne[3] && su(ne[1], ne, w, r);
              }
              if (null !== x[9]) {
                const H = x[9];
                for (let ne = 0; ne < H.length; ne++) {
                  const De = H[ne];
                  su(De[1], De, w, r);
                }
              }
            }
          }
        }
        return r;
      }
      function $p(e) {
        const t = Ie(),
          n = vt(),
          r = ws();
        Ui(r + 1);
        const i = Gp(n, r);
        if (
          e.dirty &&
          (function un(e) {
            return 4 == (4 & e[2]);
          })(t) ===
            (2 == (2 & i.metadata.flags))
        ) {
          if (null === i.matches) e.reset([]);
          else {
            const s = i.crossesNgTemplate ? su(n, t, r, []) : kp(n, t, i, r);
            e.reset(s, _v), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Bp(e, t, n) {
        const r = vt();
        r.firstCreatePass &&
          (Up(r, new Lp(e, t, n), -1),
          2 == (2 & t) && (r.staticViewQueries = !0)),
          jp(r, Ie(), t);
      }
      function Vp(e, t, n, r) {
        const i = vt();
        if (i.firstCreatePass) {
          const s = zt();
          Up(i, new Lp(t, n, r), s.index),
            (function $C(e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(i, e),
            2 == (2 & n) && (i.staticContentQueries = !0);
        }
        jp(i, Ie(), n);
      }
      function Hp() {
        return (function kC(e, t) {
          return e[19].queries[t].queryList;
        })(Ie(), ws());
      }
      function jp(e, t, n) {
        const r = new eu(4 == (4 & n));
        pf(e, t, r, r.destroy),
          null === t[19] && (t[19] = new ru()),
          t[19].queries.push(new nu(r));
      }
      function Up(e, t, n) {
        null === e.queries && (e.queries = new ou()),
          e.queries.track(new iu(t, n));
      }
      function Gp(e, t) {
        return e.queries.getByIndex(t);
      }
      function zp(e, t) {
        return rl(e, t);
      }
      function sl(...e) {}
      const ug = new mn('Application Initializer');
      let al = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = sl),
              (this.reject = sl),
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
                if (Fc(s)) n.push(s);
                else if (Gf(s)) {
                  const u = new Promise((h, m) => {
                    s.subscribe({ complete: h, error: m });
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
            return new (n || e)(_t(ug, 8));
          }),
          (e.ɵprov = Bt({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const dg = new mn('AppId', {
        providedIn: 'root',
        factory: function fg() {
          return `${du()}${du()}${du()}`;
        },
      });
      function du() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const hg = new mn('Platform Initializer'),
        o_ = new mn('Platform ID', {
          providedIn: 'platform',
          factory: () => 'unknown',
        }),
        pg = new mn('appBootstrapListener');
      let i_ = (() => {
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
          (e.ɵprov = Bt({ token: e, factory: e.ɵfac, providedIn: 'platform' })),
          e
        );
      })();
      const ll = new mn('LocaleId', {
          providedIn: 'root',
          factory: () =>
            An(ll, Xe.Optional | Xe.SkipSelf) ||
            (function s_() {
              return (typeof $localize < 'u' && $localize.locale) || vs;
            })(),
        }),
        a_ = new mn('DefaultCurrencyCode', {
          providedIn: 'root',
          factory: () => 'USD',
        });
      class l_ {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let c_ = (() => {
        class e {
          compileModuleSync(n) {
            return new Kc(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const r = this.compileModuleSync(n),
              s = ni(T(n).declarations).reduce((u, h) => {
                const m = Ot(h);
                return m && u.push(new ta(m)), u;
              }, []);
            return new l_(r, s);
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
          (e.ɵprov = Bt({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const f_ = (() => Promise.resolve(0))();
      function fu(e) {
        typeof Zone > 'u'
          ? f_.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      class co {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Ho(!1)),
            (this.onMicrotaskEmpty = new Ho(!1)),
            (this.onStable = new Ho(!1)),
            (this.onError = new Ho(!1)),
            typeof Zone > 'u')
          )
            throw new z(908, !1);
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
            (i.nativeRequestAnimationFrame = (function h_() {
              let e = mt.requestAnimationFrame,
                t = mt.cancelAnimationFrame;
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
            (function m_(e) {
              const t = () => {
                !(function g_(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(mt, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            'fakeTopEventTask',
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                pu(e),
                                (e.isCheckStableRunning = !0),
                                hu(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    pu(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, i, s, u, h) => {
                  try {
                    return vg(e), n.invokeTask(i, s, u, h);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      'eventTask' === s.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      yg(e);
                  }
                },
                onInvoke: (n, r, i, s, u, h, m) => {
                  try {
                    return vg(e), n.invoke(i, s, u, h, m);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), yg(e);
                  }
                },
                onHasTask: (n, r, i, s) => {
                  n.hasTask(i, s),
                    r === i &&
                      ('microTask' == s.change
                        ? ((e._hasPendingMicrotasks = s.microTask),
                          pu(e),
                          hu(e))
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
          if (!co.isInAngularZone()) throw new z(909, !1);
        }
        static assertNotInAngularZone() {
          if (co.isInAngularZone()) throw new z(909, !1);
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, i) {
          const s = this._inner,
            u = s.scheduleEventTask('NgZoneEvent: ' + i, t, p_, sl, sl);
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
      const p_ = {};
      function hu(e) {
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
      function pu(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function vg(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function yg(e) {
        e._nesting--, hu(e);
      }
      class v_ {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Ho()),
            (this.onMicrotaskEmpty = new Ho()),
            (this.onStable = new Ho()),
            (this.onError = new Ho());
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
      const Dg = new mn(''),
        Cg = new mn('');
      let gu,
        y_ = (() => {
          class e {
            constructor(n, r, i) {
              (this._ngZone = n),
                (this.registry = r),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                gu ||
                  ((function D_(e) {
                    gu = e;
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
                      co.assertNotInAngularZone(),
                        fu(() => {
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
                fu(() => {
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
              return new (n || e)(_t(co), _t(_g), _t(Cg));
            }),
            (e.ɵprov = Bt({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        _g = (() => {
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
              return gu?.findTestabilityInTree(this, n, r) ?? null;
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = Bt({
              token: e,
              factory: e.ɵfac,
              providedIn: 'platform',
            })),
            e
          );
        })(),
        vi = null;
      const mu = new mn('PlatformDestroyListeners');
      class E_ {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function I_(e) {
        const { rootComponent: t, appProviders: n, platformProviders: r } = e,
          i = (function w_(e = []) {
            if (vi) return vi;
            const t = (function wg(e = [], t) {
              return Li.create({
                name: t,
                providers: [
                  { provide: tc, useValue: 'platform' },
                  { provide: mu, useValue: new Set([() => (vi = null)]) },
                  ...e,
                ],
              });
            })(e);
            return (
              (vi = t),
              (function bg(e) {
                const t = e.get(hg, null);
                t && t.forEach((n) => n());
              })(t),
              t
            );
          })(r),
          s = (function Mg(e, t) {
            let n;
            return (
              (n =
                'noop' === e
                  ? new v_()
                  : ('zone.js' === e ? void 0 : e) || new co(t)),
              n
            );
          })(
            'zone.js',
            (function Sg(e) {
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
          const h = Zc(
              [{ provide: co, useValue: s }, ...(n || [])],
              i,
              'Environment Injector'
            ),
            m = h.get(Qs, null);
          let w;
          s.runOutsideAngular(() => {
            w = s.onError.subscribe({
              next: (ne) => {
                m.handleError(ne);
              },
            });
          });
          const x = () => h.destroy(),
            H = i.get(mu);
          return (
            H.add(x),
            h.onDestroy(() => {
              w.unsubscribe(), H.delete(x);
            }),
            (function Ag(e, t, n) {
              try {
                const r = n();
                return Fc(r)
                  ? r.catch((i) => {
                      throw (t.runOutsideAngular(() => e.handleError(i)), i);
                    })
                  : r;
              } catch (r) {
                throw (t.runOutsideAngular(() => e.handleError(r)), r);
              }
            })(m, s, () => {
              const ne = h.get(al);
              return (
                ne.runInitializers(),
                ne.donePromise.then(() => {
                  !(function Gh(e) {
                    wt(e, 'Expected localeId to be defined'),
                      'string' == typeof e &&
                        (Uh = e.toLowerCase().replace(/_/g, '-'));
                  })(h.get(ll, vs) || vs);
                  const Ge = h.get(cl);
                  return void 0 !== t && Ge.bootstrap(t), Ge;
                })
              );
            })
          );
        });
      }
      let cl = (() => {
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
            const s = new Y.y((h) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    h.next(this._stable), h.complete();
                  });
              }),
              u = new Y.y((h) => {
                let m;
                this._zone.runOutsideAngular(() => {
                  m = this._zone.onStable.subscribe(() => {
                    co.assertNotInAngularZone(),
                      fu(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), h.next(!0));
                      });
                  });
                });
                const w = this._zone.onUnstable.subscribe(() => {
                  co.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        h.next(!1);
                      }));
                });
                return () => {
                  m.unsubscribe(), w.unsubscribe();
                };
              });
            this.isStable = (function Ae(...e) {
              const t = (0, re.yG)(e),
                n = (0, re._6)(e, 1 / 0),
                r = e;
              return r.length
                ? 1 === r.length
                  ? (0, ge.Xf)(r[0])
                  : (0, W.J)(n)((0, Fe.D)(r, t))
                : Be.E;
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
                      m,
                      w = 0,
                      x = !1,
                      H = !1;
                    const ne = () => {
                        h?.unsubscribe(), (h = void 0);
                      },
                      De = () => {
                        ne(), (u = m = void 0), (x = H = !1);
                      },
                      Ge = () => {
                        const Qe = u;
                        De(), Qe?.unsubscribe();
                      };
                    return (0, ve.e)((Qe, st) => {
                      w++, !H && !x && ne();
                      const ht = (m = m ?? t());
                      st.add(() => {
                        w--, 0 === w && !H && !x && (h = ce(Ge, i));
                      }),
                        ht.subscribe(st),
                        !u &&
                          w > 0 &&
                          ((u = new Pe.Hp({
                            next: (bt) => ht.next(bt),
                            error: (bt) => {
                              (H = !0), ne(), (h = ce(De, n, bt)), ht.error(bt);
                            },
                            complete: () => {
                              (x = !0), ne(), (h = ce(De, r)), ht.complete();
                            },
                          })),
                          (0, ge.Xf)(Qe).subscribe(u));
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
            const i = n instanceof Bd;
            if (!this._injector.get(al).done)
              throw (!i && xn(n), new z(405, false));
            let u;
            (u = i ? n : this._injector.get(Ks).resolveComponentFactory(n)),
              this.componentTypes.push(u.componentType);
            const h = (function __(e) {
                return e.isBoundToModule;
              })(u)
                ? void 0
                : this._injector.get(ys),
              w = u.create(Li.NULL, [], r || u.selector, h),
              x = w.location.nativeElement,
              H = w.injector.get(Dg, null);
            return (
              H?.registerApplication(x),
              w.onDestroy(() => {
                this.detachView(w.hostView),
                  ul(this.components, w),
                  H?.unregisterApplication(x);
              }),
              this._loadComponent(w),
              w
            );
          }
          tick() {
            if (this._runningTick) throw new z(101, !1);
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
            ul(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n),
              this._injector
                .get(pg, [])
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
              () => ul(this._destroyListeners, n)
            );
          }
          destroy() {
            if (this._destroyed) throw new z(406, !1);
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
            return new (n || e)(_t(co), _t(Ni), _t(Qs));
          }),
          (e.ɵprov = Bt({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      function ul(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      function A_() {}
      let T_ = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = O_), e;
      })();
      function O_(e) {
        return (function x_(e, t, n) {
          if (Nr(e) && !n) {
            const r = jn(e.index, t);
            return new ea(r, r);
          }
          return 47 & e.type ? new ea(t[16], t) : null;
        })(zt(), Ie(), 16 == (16 & e));
      }
      class Pg {
        constructor() {}
        supports(t) {
          return na(t);
        }
        create(t) {
          return new k_(t);
        }
      }
      const L_ = (e, t) => t;
      class k_ {
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
            (this._trackByFn = t || L_);
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
            const u = !r || (n && n.currentIndex < Lg(r, i, s)) ? n : r,
              h = Lg(u, i, s),
              m = u.currentIndex;
            if (u === r) i--, (r = r._nextRemoved);
            else if (((n = n._next), null == u.previousIndex)) i++;
            else {
              s || (s = []);
              const w = h - i,
                x = m - i;
              if (w != x) {
                for (let ne = 0; ne < w; ne++) {
                  const De = ne < s.length ? s[ne] : (s[ne] = 0),
                    Ge = De + ne;
                  x <= Ge && Ge < w && (s[ne] = De + 1);
                }
                s[u.previousIndex] = x - w;
              }
            }
            h !== m && t(u, h, m);
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
          if ((null == t && (t = []), !na(t))) throw new z(900, !1);
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
              (function oD(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[ki()]();
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
              : (t = this._addAfter(new $_(n, r), s, i)),
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
            null === this._linkedRecords && (this._linkedRecords = new Ng()),
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
              (this._unlinkedRecords = new Ng()),
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
      class $_ {
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
      class B_ {
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
      class Ng {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new B_()), this.map.set(n, r)), r.add(t);
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
      function Lg(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let i = 0;
        return n && r < n.length && (i = n[r]), r + t + i;
      }
      class kg {
        constructor() {}
        supports(t) {
          return t instanceof Map || Mc(t);
        }
        create() {
          return new V_();
        }
      }
      class V_ {
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
            if (!(t instanceof Map || Mc(t))) throw new z(900, !1);
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
          const r = new H_(t);
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
      class H_ {
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
      function $g() {
        return new Eu([new Pg()]);
      }
      let Eu = (() => {
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
              useFactory: (r) => e.create(n, r || $g()),
              deps: [[e, new Hs(), new Vs()]],
            };
          }
          find(n) {
            const r = this.factories.find((i) => i.supports(n));
            if (null != r) return r;
            throw new z(901, !1);
          }
        }
        return (e.ɵprov = Bt({ token: e, providedIn: 'root', factory: $g })), e;
      })();
      function Bg() {
        return new bu([new kg()]);
      }
      let bu = (() => {
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
              useFactory: (r) => e.create(n, r || Bg()),
              deps: [[e, new Hs(), new Vs()]],
            };
          }
          find(n) {
            const r = this.factories.find((i) => i.supports(n));
            if (r) return r;
            throw new z(901, !1);
          }
        }
        return (e.ɵprov = Bt({ token: e, providedIn: 'root', factory: Bg })), e;
      })();
      function G_(e) {
        return 'boolean' == typeof e ? e : null != e && 'false' !== e;
      }
    },
    433: (ut, $e, M) => {
      'use strict';
      M.d($e, {
        qu: () => io,
        u: () => Zr,
        sg: () => Tr,
        u5: () => vo,
        JU: () => Ee,
        a5: () => an,
        JJ: () => kn,
        JL: () => Ut,
        UX: () => _i,
        kI: () => k,
        _Y: () => uo,
      });
      var o = M(8256),
        L = M(6895),
        Y = M(2076),
        W = M(9751),
        ge = M(4742),
        Be = M(8421),
        re = M(7669),
        Fe = M(5403),
        Ae = M(3268),
        Pe = M(1810),
        we = M(4004);
      let ce = (() => {
          class b {
            constructor(v, R) {
              (this._renderer = v),
                (this._elementRef = R),
                (this.onChange = (se) => {}),
                (this.onTouched = () => {});
            }
            setProperty(v, R) {
              this._renderer.setProperty(this._elementRef.nativeElement, v, R);
            }
            registerOnTouched(v) {
              this.onTouched = v;
            }
            registerOnChange(v) {
              this.onChange = v;
            }
            setDisabledState(v) {
              this.setProperty('disabled', v);
            }
          }
          return (
            (b.ɵfac = function (v) {
              return new (v || b)(o.Y36(o.Qsj), o.Y36(o.SBq));
            }),
            (b.ɵdir = o.lG2({ type: b })),
            b
          );
        })(),
        J = (() => {
          class b extends ce {}
          return (
            (b.ɵfac = (function () {
              let D;
              return function (R) {
                return (D || (D = o.n5z(b)))(R || b);
              };
            })()),
            (b.ɵdir = o.lG2({ type: b, features: [o.qOj] })),
            b
          );
        })();
      const Ee = new o.OlP('NgValueAccessor'),
        ee = { provide: Ee, useExisting: (0, o.Gpc)(() => Ce), multi: !0 },
        fe = new o.OlP('CompositionEventMode');
      let Ce = (() => {
        class b extends ce {
          constructor(v, R, se) {
            super(v, R),
              (this._compositionMode = se),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function Ve() {
                  const b = (0, L.q)() ? (0, L.q)().getUserAgent() : '';
                  return /android (\d+)/.test(b.toLowerCase());
                })());
          }
          writeValue(v) {
            this.setProperty('value', v ?? '');
          }
          _handleInput(v) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(v);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(v) {
            (this._composing = !1), this._compositionMode && this.onChange(v);
          }
        }
        return (
          (b.ɵfac = function (v) {
            return new (v || b)(o.Y36(o.Qsj), o.Y36(o.SBq), o.Y36(fe, 8));
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
            hostBindings: function (v, R) {
              1 & v &&
                o.NdJ('input', function (a) {
                  return R._handleInput(a.target.value);
                })('blur', function () {
                  return R.onTouched();
                })('compositionstart', function () {
                  return R._compositionStart();
                })('compositionend', function (a) {
                  return R._compositionEnd(a.target.value);
                });
            },
            features: [o._Bn([ee]), o.qOj],
          })),
          b
        );
      })();
      function xe(b) {
        return (
          null == b ||
          (('string' == typeof b || Array.isArray(b)) && 0 === b.length)
        );
      }
      function le(b) {
        return null != b && 'number' == typeof b.length;
      }
      const z = new o.OlP('NgValidators'),
        ie = new o.OlP('NgAsyncValidators'),
        ue =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class k {
        static min(D) {
          return (function V(b) {
            return (D) => {
              if (xe(D.value) || xe(b)) return null;
              const v = parseFloat(D.value);
              return !isNaN(v) && v < b
                ? { min: { min: b, actual: D.value } }
                : null;
            };
          })(D);
        }
        static max(D) {
          return (function U(b) {
            return (D) => {
              if (xe(D.value) || xe(b)) return null;
              const v = parseFloat(D.value);
              return !isNaN(v) && v > b
                ? { max: { max: b, actual: D.value } }
                : null;
            };
          })(D);
        }
        static required(D) {
          return (function A(b) {
            return xe(b.value) ? { required: !0 } : null;
          })(D);
        }
        static requiredTrue(D) {
          return (function $(b) {
            return !0 === b.value ? null : { required: !0 };
          })(D);
        }
        static email(D) {
          return (function q(b) {
            return xe(b.value) || ue.test(b.value) ? null : { email: !0 };
          })(D);
        }
        static minLength(D) {
          return (function Le(b) {
            return (D) =>
              xe(D.value) || !le(D.value)
                ? null
                : D.value.length < b
                ? {
                    minlength: {
                      requiredLength: b,
                      actualLength: D.value.length,
                    },
                  }
                : null;
          })(D);
        }
        static maxLength(D) {
          return (function pe(b) {
            return (D) =>
              le(D.value) && D.value.length > b
                ? {
                    maxlength: {
                      requiredLength: b,
                      actualLength: D.value.length,
                    },
                  }
                : null;
          })(D);
        }
        static pattern(D) {
          return (function me(b) {
            if (!b) return oe;
            let D, v;
            return (
              'string' == typeof b
                ? ((v = ''),
                  '^' !== b.charAt(0) && (v += '^'),
                  (v += b),
                  '$' !== b.charAt(b.length - 1) && (v += '$'),
                  (D = new RegExp(v)))
                : ((v = b.toString()), (D = b)),
              (R) => {
                if (xe(R.value)) return null;
                const se = R.value;
                return D.test(se)
                  ? null
                  : { pattern: { requiredPattern: v, actualValue: se } };
              }
            );
          })(D);
        }
        static nullValidator(D) {
          return null;
        }
        static compose(D) {
          return Ze(D);
        }
        static composeAsync(D) {
          return wt(D);
        }
      }
      function oe(b) {
        return null;
      }
      function He(b) {
        return null != b;
      }
      function je(b) {
        return (0, o.QGY)(b) ? (0, Y.D)(b) : b;
      }
      function be(b) {
        let D = {};
        return (
          b.forEach((v) => {
            D = null != v ? { ...D, ...v } : D;
          }),
          0 === Object.keys(D).length ? null : D
        );
      }
      function Te(b, D) {
        return D.map((v) => v(b));
      }
      function nt(b) {
        return b.map((D) =>
          (function qe(b) {
            return !b.validate;
          })(D)
            ? D
            : (v) => D.validate(v)
        );
      }
      function Ze(b) {
        if (!b) return null;
        const D = b.filter(He);
        return 0 == D.length
          ? null
          : function (v) {
              return be(Te(v, D));
            };
      }
      function pt(b) {
        return null != b ? Ze(nt(b)) : null;
      }
      function wt(b) {
        if (!b) return null;
        const D = b.filter(He);
        return 0 == D.length
          ? null
          : function (v) {
              return (function ve(...b) {
                const D = (0, re.jO)(b),
                  { args: v, keys: R } = (0, ge.D)(b),
                  se = new W.y((a) => {
                    const { length: E } = v;
                    if (!E) return void a.complete();
                    const c = new Array(E);
                    let C = E,
                      F = E;
                    for (let Se = 0; Se < E; Se++) {
                      let et = !1;
                      (0, Be.Xf)(v[Se]).subscribe(
                        (0, Fe.x)(
                          a,
                          (it) => {
                            et || ((et = !0), F--), (c[Se] = it);
                          },
                          () => C--,
                          void 0,
                          () => {
                            (!C || !et) &&
                              (F || a.next(R ? (0, Pe.n)(R, c) : c),
                              a.complete());
                          }
                        )
                      );
                    }
                  });
                return D ? se.pipe((0, Ae.Z)(D)) : se;
              })(Te(v, D).map(je)).pipe((0, we.U)(be));
            };
      }
      function dt(b) {
        return null != b ? wt(nt(b)) : null;
      }
      function Pt(b, D) {
        return null === b ? [D] : Array.isArray(b) ? [...b, D] : [b, D];
      }
      function At(b) {
        return b._rawValidators;
      }
      function We(b) {
        return b._rawAsyncValidators;
      }
      function Bt(b) {
        return b ? (Array.isArray(b) ? b : [b]) : [];
      }
      function En(b, D) {
        return Array.isArray(b) ? b.includes(D) : b === D;
      }
      function Gn(b, D) {
        const v = Bt(D);
        return (
          Bt(b).forEach((se) => {
            En(v, se) || v.push(se);
          }),
          v
        );
      }
      function at(b, D) {
        return Bt(D).filter((v) => !En(b, v));
      }
      class Nn {
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
        _setValidators(D) {
          (this._rawValidators = D || []),
            (this._composedValidatorFn = pt(this._rawValidators));
        }
        _setAsyncValidators(D) {
          (this._rawAsyncValidators = D || []),
            (this._composedAsyncValidatorFn = dt(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(D) {
          this._onDestroyCallbacks.push(D);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach((D) => D()),
            (this._onDestroyCallbacks = []);
        }
        reset(D) {
          this.control && this.control.reset(D);
        }
        hasError(D, v) {
          return !!this.control && this.control.hasError(D, v);
        }
        getError(D, v) {
          return this.control ? this.control.getError(D, v) : null;
        }
      }
      class Nt extends Nn {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class an extends Nn {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class qt {
        constructor(D) {
          this._cd = D;
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
      let kn = (() => {
          class b extends qt {
            constructor(v) {
              super(v);
            }
          }
          return (
            (b.ɵfac = function (v) {
              return new (v || b)(o.Y36(an, 2));
            }),
            (b.ɵdir = o.lG2({
              type: b,
              selectors: [
                ['', 'formControlName', ''],
                ['', 'ngModel', ''],
                ['', 'formControl', ''],
              ],
              hostVars: 14,
              hostBindings: function (v, R) {
                2 & v &&
                  o.ekj('ng-untouched', R.isUntouched)(
                    'ng-touched',
                    R.isTouched
                  )('ng-pristine', R.isPristine)('ng-dirty', R.isDirty)(
                    'ng-valid',
                    R.isValid
                  )('ng-invalid', R.isInvalid)('ng-pending', R.isPending);
              },
              features: [o.qOj],
            })),
            b
          );
        })(),
        Ut = (() => {
          class b extends qt {
            constructor(v) {
              super(v);
            }
          }
          return (
            (b.ɵfac = function (v) {
              return new (v || b)(o.Y36(Nt, 10));
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
              hostBindings: function (v, R) {
                2 & v &&
                  o.ekj('ng-untouched', R.isUntouched)(
                    'ng-touched',
                    R.isTouched
                  )('ng-pristine', R.isPristine)('ng-dirty', R.isDirty)(
                    'ng-valid',
                    R.isValid
                  )('ng-invalid', R.isInvalid)('ng-pending', R.isPending)(
                    'ng-submitted',
                    R.isSubmitted
                  );
              },
              features: [o.qOj],
            })),
            b
          );
        })();
      const Gt = 'VALID',
        nn = 'INVALID',
        rn = 'PENDING',
        _t = 'DISABLED';
      function wn(b) {
        return (dn(b) ? b.validators : b) || null;
      }
      function Bn(b, D) {
        return (dn(D) ? D.asyncValidators : b) || null;
      }
      function dn(b) {
        return null != b && !Array.isArray(b) && 'object' == typeof b;
      }
      function Cr(b, D, v) {
        const R = b.controls;
        if (!(D ? Object.keys(R) : R).length) throw new o.vHH(1e3, '');
        if (!R[v]) throw new o.vHH(1001, '');
      }
      function ur(b, D, v) {
        b._forEachChild((R, se) => {
          if (void 0 === v[se]) throw new o.vHH(1002, '');
        });
      }
      class _e {
        constructor(D, v) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            this._assignValidators(D),
            this._assignAsyncValidators(v);
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(D) {
          this._rawValidators = this._composedValidatorFn = D;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(D) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = D;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === Gt;
        }
        get invalid() {
          return this.status === nn;
        }
        get pending() {
          return this.status == rn;
        }
        get disabled() {
          return this.status === _t;
        }
        get enabled() {
          return this.status !== _t;
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
        setValidators(D) {
          this._assignValidators(D);
        }
        setAsyncValidators(D) {
          this._assignAsyncValidators(D);
        }
        addValidators(D) {
          this.setValidators(Gn(D, this._rawValidators));
        }
        addAsyncValidators(D) {
          this.setAsyncValidators(Gn(D, this._rawAsyncValidators));
        }
        removeValidators(D) {
          this.setValidators(at(D, this._rawValidators));
        }
        removeAsyncValidators(D) {
          this.setAsyncValidators(at(D, this._rawAsyncValidators));
        }
        hasValidator(D) {
          return En(this._rawValidators, D);
        }
        hasAsyncValidator(D) {
          return En(this._rawAsyncValidators, D);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(D = {}) {
          (this.touched = !0),
            this._parent && !D.onlySelf && this._parent.markAsTouched(D);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((D) => D.markAllAsTouched());
        }
        markAsUntouched(D = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((v) => {
              v.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !D.onlySelf && this._parent._updateTouched(D);
        }
        markAsDirty(D = {}) {
          (this.pristine = !1),
            this._parent && !D.onlySelf && this._parent.markAsDirty(D);
        }
        markAsPristine(D = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((v) => {
              v.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !D.onlySelf && this._parent._updatePristine(D);
        }
        markAsPending(D = {}) {
          (this.status = rn),
            !1 !== D.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !D.onlySelf && this._parent.markAsPending(D);
        }
        disable(D = {}) {
          const v = this._parentMarkedDirty(D.onlySelf);
          (this.status = _t),
            (this.errors = null),
            this._forEachChild((R) => {
              R.disable({ ...D, onlySelf: !0 });
            }),
            this._updateValue(),
            !1 !== D.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors({ ...D, skipPristineCheck: v }),
            this._onDisabledChange.forEach((R) => R(!0));
        }
        enable(D = {}) {
          const v = this._parentMarkedDirty(D.onlySelf);
          (this.status = Gt),
            this._forEachChild((R) => {
              R.enable({ ...D, onlySelf: !0 });
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: D.emitEvent,
            }),
            this._updateAncestors({ ...D, skipPristineCheck: v }),
            this._onDisabledChange.forEach((R) => R(!1));
        }
        _updateAncestors(D) {
          this._parent &&
            !D.onlySelf &&
            (this._parent.updateValueAndValidity(D),
            D.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(D) {
          this._parent = D;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(D = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === Gt || this.status === rn) &&
                this._runAsyncValidator(D.emitEvent)),
            !1 !== D.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !D.onlySelf &&
              this._parent.updateValueAndValidity(D);
        }
        _updateTreeValidity(D = { emitEvent: !0 }) {
          this._forEachChild((v) => v._updateTreeValidity(D)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: D.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? _t : Gt;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(D) {
          if (this.asyncValidator) {
            (this.status = rn), (this._hasOwnPendingAsyncValidator = !0);
            const v = je(this.asyncValidator(this));
            this._asyncValidationSubscription = v.subscribe((R) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(R, { emitEvent: D });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(D, v = {}) {
          (this.errors = D), this._updateControlsErrors(!1 !== v.emitEvent);
        }
        get(D) {
          let v = D;
          return null == v ||
            (Array.isArray(v) || (v = v.split('.')), 0 === v.length)
            ? null
            : v.reduce((R, se) => R && R._find(se), this);
        }
        getError(D, v) {
          const R = v ? this.get(v) : this;
          return R && R.errors ? R.errors[D] : null;
        }
        hasError(D, v) {
          return !!this.getError(D, v);
        }
        get root() {
          let D = this;
          for (; D._parent; ) D = D._parent;
          return D;
        }
        _updateControlsErrors(D) {
          (this.status = this._calculateStatus()),
            D && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(D);
        }
        _initObservables() {
          (this.valueChanges = new o.vpe()), (this.statusChanges = new o.vpe());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? _t
            : this.errors
            ? nn
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(rn)
            ? rn
            : this._anyControlsHaveStatus(nn)
            ? nn
            : Gt;
        }
        _anyControlsHaveStatus(D) {
          return this._anyControls((v) => v.status === D);
        }
        _anyControlsDirty() {
          return this._anyControls((D) => D.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((D) => D.touched);
        }
        _updatePristine(D = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !D.onlySelf && this._parent._updatePristine(D);
        }
        _updateTouched(D = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !D.onlySelf && this._parent._updateTouched(D);
        }
        _registerOnCollectionChange(D) {
          this._onCollectionChange = D;
        }
        _setUpdateStrategy(D) {
          dn(D) && null != D.updateOn && (this._updateOn = D.updateOn);
        }
        _parentMarkedDirty(D) {
          return (
            !D &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
        _find(D) {
          return null;
        }
        _assignValidators(D) {
          (this._rawValidators = Array.isArray(D) ? D.slice() : D),
            (this._composedValidatorFn = (function An(b) {
              return Array.isArray(b) ? pt(b) : b || null;
            })(this._rawValidators));
        }
        _assignAsyncValidators(D) {
          (this._rawAsyncValidators = Array.isArray(D) ? D.slice() : D),
            (this._composedAsyncValidatorFn = (function or(b) {
              return Array.isArray(b) ? dt(b) : b || null;
            })(this._rawAsyncValidators));
        }
      }
      class Z extends _e {
        constructor(D, v, R) {
          super(wn(v), Bn(R, v)),
            (this.controls = D),
            this._initObservables(),
            this._setUpdateStrategy(v),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(D, v) {
          return this.controls[D]
            ? this.controls[D]
            : ((this.controls[D] = v),
              v.setParent(this),
              v._registerOnCollectionChange(this._onCollectionChange),
              v);
        }
        addControl(D, v, R = {}) {
          this.registerControl(D, v),
            this.updateValueAndValidity({ emitEvent: R.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(D, v = {}) {
          this.controls[D] &&
            this.controls[D]._registerOnCollectionChange(() => {}),
            delete this.controls[D],
            this.updateValueAndValidity({ emitEvent: v.emitEvent }),
            this._onCollectionChange();
        }
        setControl(D, v, R = {}) {
          this.controls[D] &&
            this.controls[D]._registerOnCollectionChange(() => {}),
            delete this.controls[D],
            v && this.registerControl(D, v),
            this.updateValueAndValidity({ emitEvent: R.emitEvent }),
            this._onCollectionChange();
        }
        contains(D) {
          return this.controls.hasOwnProperty(D) && this.controls[D].enabled;
        }
        setValue(D, v = {}) {
          ur(this, 0, D),
            Object.keys(D).forEach((R) => {
              Cr(this, !0, R),
                this.controls[R].setValue(D[R], {
                  onlySelf: !0,
                  emitEvent: v.emitEvent,
                });
            }),
            this.updateValueAndValidity(v);
        }
        patchValue(D, v = {}) {
          null != D &&
            (Object.keys(D).forEach((R) => {
              const se = this.controls[R];
              se &&
                se.patchValue(D[R], { onlySelf: !0, emitEvent: v.emitEvent });
            }),
            this.updateValueAndValidity(v));
        }
        reset(D = {}, v = {}) {
          this._forEachChild((R, se) => {
            R.reset(D[se], { onlySelf: !0, emitEvent: v.emitEvent });
          }),
            this._updatePristine(v),
            this._updateTouched(v),
            this.updateValueAndValidity(v);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (D, v, R) => ((D[R] = v.getRawValue()), D)
          );
        }
        _syncPendingControls() {
          let D = this._reduceChildren(
            !1,
            (v, R) => !!R._syncPendingControls() || v
          );
          return D && this.updateValueAndValidity({ onlySelf: !0 }), D;
        }
        _forEachChild(D) {
          Object.keys(this.controls).forEach((v) => {
            const R = this.controls[v];
            R && D(R, v);
          });
        }
        _setUpControls() {
          this._forEachChild((D) => {
            D.setParent(this),
              D._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(D) {
          for (const [v, R] of Object.entries(this.controls))
            if (this.contains(v) && D(R)) return !0;
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (v, R, se) => ((R.enabled || this.disabled) && (v[se] = R.value), v)
          );
        }
        _reduceChildren(D, v) {
          let R = D;
          return (
            this._forEachChild((se, a) => {
              R = v(R, se, a);
            }),
            R
          );
        }
        _allControlsDisabled() {
          for (const D of Object.keys(this.controls))
            if (this.controls[D].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(D) {
          return this.controls.hasOwnProperty(D) ? this.controls[D] : null;
        }
      }
      class Ye extends Z {}
      const Dt = new o.OlP('CallSetDisabledState', {
          providedIn: 'root',
          factory: () => Ct,
        }),
        Ct = 'always';
      function on(b, D, v = Ct) {
        fn(b, D),
          D.valueAccessor.writeValue(b.value),
          (b.disabled || 'always' === v) &&
            D.valueAccessor.setDisabledState?.(b.disabled),
          (function In(b, D) {
            D.valueAccessor.registerOnChange((v) => {
              (b._pendingValue = v),
                (b._pendingChange = !0),
                (b._pendingDirty = !0),
                'change' === b.updateOn && dr(b, D);
            });
          })(b, D),
          (function Sr(b, D) {
            const v = (R, se) => {
              D.valueAccessor.writeValue(R), se && D.viewToModelUpdate(R);
            };
            b.registerOnChange(v),
              D._registerOnDestroy(() => {
                b._unregisterOnChange(v);
              });
          })(b, D),
          (function hn(b, D) {
            D.valueAccessor.registerOnTouched(() => {
              (b._pendingTouched = !0),
                'blur' === b.updateOn && b._pendingChange && dr(b, D),
                'submit' !== b.updateOn && b.markAsTouched();
            });
          })(b, D),
          (function Tn(b, D) {
            if (D.valueAccessor.setDisabledState) {
              const v = (R) => {
                D.valueAccessor.setDisabledState(R);
              };
              b.registerOnDisabledChange(v),
                D._registerOnDestroy(() => {
                  b._unregisterOnDisabledChange(v);
                });
            }
          })(b, D);
      }
      function sn(b, D, v = !0) {
        const R = () => {};
        D.valueAccessor &&
          (D.valueAccessor.registerOnChange(R),
          D.valueAccessor.registerOnTouched(R)),
          On(b, D),
          b &&
            (D._invokeOnDestroyCallbacks(),
            b._registerOnCollectionChange(() => {}));
      }
      function ir(b, D) {
        b.forEach((v) => {
          v.registerOnValidatorChange && v.registerOnValidatorChange(D);
        });
      }
      function fn(b, D) {
        const v = At(b);
        null !== D.validator
          ? b.setValidators(Pt(v, D.validator))
          : 'function' == typeof v && b.setValidators([v]);
        const R = We(b);
        null !== D.asyncValidator
          ? b.setAsyncValidators(Pt(R, D.asyncValidator))
          : 'function' == typeof R && b.setAsyncValidators([R]);
        const se = () => b.updateValueAndValidity();
        ir(D._rawValidators, se), ir(D._rawAsyncValidators, se);
      }
      function On(b, D) {
        let v = !1;
        if (null !== b) {
          if (null !== D.validator) {
            const se = At(b);
            if (Array.isArray(se) && se.length > 0) {
              const a = se.filter((E) => E !== D.validator);
              a.length !== se.length && ((v = !0), b.setValidators(a));
            }
          }
          if (null !== D.asyncValidator) {
            const se = We(b);
            if (Array.isArray(se) && se.length > 0) {
              const a = se.filter((E) => E !== D.asyncValidator);
              a.length !== se.length && ((v = !0), b.setAsyncValidators(a));
            }
          }
        }
        const R = () => {};
        return ir(D._rawValidators, R), ir(D._rawAsyncValidators, R), v;
      }
      function dr(b, D) {
        b._pendingDirty && b.markAsDirty(),
          b.setValue(b._pendingValue, { emitModelToViewChange: !1 }),
          D.viewToModelUpdate(b._pendingValue),
          (b._pendingChange = !1);
      }
      function ae(b, D) {
        const v = b.indexOf(D);
        v > -1 && b.splice(v, 1);
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
      const Oe = class extends _e {
        constructor(D = null, v, R) {
          super(wn(v), Bn(R, v)),
            (this.defaultValue = null),
            (this._onChange = []),
            (this._pendingChange = !1),
            this._applyFormState(D),
            this._setUpdateStrategy(v),
            this._initObservables(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            }),
            dn(v) &&
              (v.nonNullable || v.initialValueIsDefault) &&
              (this.defaultValue = ke(D) ? D.value : D);
        }
        setValue(D, v = {}) {
          (this.value = this._pendingValue = D),
            this._onChange.length &&
              !1 !== v.emitModelToViewChange &&
              this._onChange.forEach((R) =>
                R(this.value, !1 !== v.emitViewToModelChange)
              ),
            this.updateValueAndValidity(v);
        }
        patchValue(D, v = {}) {
          this.setValue(D, v);
        }
        reset(D = this.defaultValue, v = {}) {
          this._applyFormState(D),
            this.markAsPristine(v),
            this.markAsUntouched(v),
            this.setValue(this.value, v),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(D) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(D) {
          this._onChange.push(D);
        }
        _unregisterOnChange(D) {
          ae(this._onChange, D);
        }
        registerOnDisabledChange(D) {
          this._onDisabledChange.push(D);
        }
        _unregisterOnDisabledChange(D) {
          ae(this._onDisabledChange, D);
        }
        _forEachChild(D) {}
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
        _applyFormState(D) {
          ke(D)
            ? ((this.value = this._pendingValue = D.value),
              D.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = D);
        }
      };
      let uo = (() => {
          class b {}
          return (
            (b.ɵfac = function (v) {
              return new (v || b)();
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
        Pr = (() => {
          class b {}
          return (
            (b.ɵfac = function (v) {
              return new (v || b)();
            }),
            (b.ɵmod = o.oAB({ type: b })),
            (b.ɵinj = o.cJS({})),
            b
          );
        })();
      const en = new o.OlP('NgModelWithFormControlWarning'),
        Nr = { provide: Nt, useExisting: (0, o.Gpc)(() => Tr) };
      let Tr = (() => {
        class b extends Nt {
          constructor(v, R, se) {
            super(),
              (this.callSetDisabledState = se),
              (this.submitted = !1),
              (this._onCollectionChange = () => this._updateDomValue()),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new o.vpe()),
              this._setValidators(v),
              this._setAsyncValidators(R);
          }
          ngOnChanges(v) {
            this._checkFormPresent(),
              v.hasOwnProperty('form') &&
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
          addControl(v) {
            const R = this.form.get(v.path);
            return (
              on(R, v, this.callSetDisabledState),
              R.updateValueAndValidity({ emitEvent: !1 }),
              this.directives.push(v),
              R
            );
          }
          getControl(v) {
            return this.form.get(v.path);
          }
          removeControl(v) {
            sn(v.control || null, v, !1),
              (function j(b, D) {
                const v = b.indexOf(D);
                v > -1 && b.splice(v, 1);
              })(this.directives, v);
          }
          addFormGroup(v) {
            this._setUpFormContainer(v);
          }
          removeFormGroup(v) {
            this._cleanUpFormContainer(v);
          }
          getFormGroup(v) {
            return this.form.get(v.path);
          }
          addFormArray(v) {
            this._setUpFormContainer(v);
          }
          removeFormArray(v) {
            this._cleanUpFormContainer(v);
          }
          getFormArray(v) {
            return this.form.get(v.path);
          }
          updateModel(v, R) {
            this.form.get(v.path).setValue(R);
          }
          onSubmit(v) {
            return (
              (this.submitted = !0),
              (function T(b, D) {
                b._syncPendingControls(),
                  D.forEach((v) => {
                    const R = v.control;
                    'submit' === R.updateOn &&
                      R._pendingChange &&
                      (v.viewToModelUpdate(R._pendingValue),
                      (R._pendingChange = !1));
                  });
              })(this.form, this.directives),
              this.ngSubmit.emit(v),
              'dialog' === v?.target?.method
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(v) {
            this.form.reset(v), (this.submitted = !1);
          }
          _updateDomValue() {
            this.directives.forEach((v) => {
              const R = v.control,
                se = this.form.get(v.path);
              R !== se &&
                (sn(R || null, v),
                ((b) => b instanceof Oe)(se) &&
                  (on(se, v, this.callSetDisabledState), (v.control = se)));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _setUpFormContainer(v) {
            const R = this.form.get(v.path);
            (function gr(b, D) {
              fn(b, D);
            })(R, v),
              R.updateValueAndValidity({ emitEvent: !1 });
          }
          _cleanUpFormContainer(v) {
            if (this.form) {
              const R = this.form.get(v.path);
              R &&
                (function _r(b, D) {
                  return On(b, D);
                })(R, v) &&
                R.updateValueAndValidity({ emitEvent: !1 });
            }
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange),
              this._oldForm &&
                this._oldForm._registerOnCollectionChange(() => {});
          }
          _updateValidators() {
            fn(this.form, this), this._oldForm && On(this._oldForm, this);
          }
          _checkFormPresent() {}
        }
        return (
          (b.ɵfac = function (v) {
            return new (v || b)(o.Y36(z, 10), o.Y36(ie, 10), o.Y36(Dt, 8));
          }),
          (b.ɵdir = o.lG2({
            type: b,
            selectors: [['', 'formGroup', '']],
            hostBindings: function (v, R) {
              1 & v &&
                o.NdJ('submit', function (a) {
                  return R.onSubmit(a);
                })('reset', function () {
                  return R.onReset();
                });
            },
            inputs: { form: ['formGroup', 'form'] },
            outputs: { ngSubmit: 'ngSubmit' },
            exportAs: ['ngForm'],
            features: [o._Bn([Nr]), o.qOj, o.TTD],
          })),
          b
        );
      })();
      const Kr = { provide: an, useExisting: (0, o.Gpc)(() => Zr) };
      let Zr = (() => {
          class b extends an {
            constructor(v, R, se, a, E) {
              super(),
                (this._ngModelWarningConfig = E),
                (this._added = !1),
                (this.update = new o.vpe()),
                (this._ngModelWarningSent = !1),
                (this._parent = v),
                this._setValidators(R),
                this._setAsyncValidators(se),
                (this.valueAccessor = (function B(b, D) {
                  if (!D) return null;
                  let v, R, se;
                  return (
                    Array.isArray(D),
                    D.forEach((a) => {
                      a.constructor === Ce
                        ? (v = a)
                        : (function xn(b) {
                            return Object.getPrototypeOf(b.constructor) === J;
                          })(a)
                        ? (R = a)
                        : (se = a);
                    }),
                    se || R || v || null
                  );
                })(0, a));
            }
            set isDisabled(v) {}
            ngOnChanges(v) {
              this._added || this._setUpControl(),
                (function Qt(b, D) {
                  if (!b.hasOwnProperty('model')) return !1;
                  const v = b.model;
                  return !!v.isFirstChange() || !Object.is(D, v.currentValue);
                })(v, this.viewModel) &&
                  ((this.viewModel = this.model),
                  this.formDirective.updateModel(this, this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            viewToModelUpdate(v) {
              (this.viewModel = v), this.update.emit(v);
            }
            get path() {
              return (function Kt(b, D) {
                return [...D.path, b];
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
            (b.ɵfac = function (v) {
              return new (v || b)(
                o.Y36(Nt, 13),
                o.Y36(z, 10),
                o.Y36(ie, 10),
                o.Y36(Ee, 10),
                o.Y36(en, 8)
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
              features: [o._Bn([Kr]), o.qOj, o.TTD],
            })),
            b
          );
        })(),
        Dn = (() => {
          class b {}
          return (
            (b.ɵfac = function (v) {
              return new (v || b)();
            }),
            (b.ɵmod = o.oAB({ type: b })),
            (b.ɵinj = o.cJS({ imports: [Pr] })),
            b
          );
        })(),
        vo = (() => {
          class b {
            static withConfig(v) {
              return {
                ngModule: b,
                providers: [
                  { provide: Dt, useValue: v.callSetDisabledState ?? Ct },
                ],
              };
            }
          }
          return (
            (b.ɵfac = function (v) {
              return new (v || b)();
            }),
            (b.ɵmod = o.oAB({ type: b })),
            (b.ɵinj = o.cJS({ imports: [Dn] })),
            b
          );
        })(),
        _i = (() => {
          class b {
            static withConfig(v) {
              return {
                ngModule: b,
                providers: [
                  {
                    provide: en,
                    useValue: v.warnOnNgModelWithFormControl ?? 'always',
                  },
                  { provide: Dt, useValue: v.callSetDisabledState ?? Ct },
                ],
              };
            }
          }
          return (
            (b.ɵfac = function (v) {
              return new (v || b)();
            }),
            (b.ɵmod = o.oAB({ type: b })),
            (b.ɵinj = o.cJS({ imports: [Dn] })),
            b
          );
        })();
      class Br extends _e {
        constructor(D, v, R) {
          super(wn(v), Bn(R, v)),
            (this.controls = D),
            this._initObservables(),
            this._setUpdateStrategy(v),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        at(D) {
          return this.controls[this._adjustIndex(D)];
        }
        push(D, v = {}) {
          this.controls.push(D),
            this._registerControl(D),
            this.updateValueAndValidity({ emitEvent: v.emitEvent }),
            this._onCollectionChange();
        }
        insert(D, v, R = {}) {
          this.controls.splice(D, 0, v),
            this._registerControl(v),
            this.updateValueAndValidity({ emitEvent: R.emitEvent });
        }
        removeAt(D, v = {}) {
          let R = this._adjustIndex(D);
          R < 0 && (R = 0),
            this.controls[R] &&
              this.controls[R]._registerOnCollectionChange(() => {}),
            this.controls.splice(R, 1),
            this.updateValueAndValidity({ emitEvent: v.emitEvent });
        }
        setControl(D, v, R = {}) {
          let se = this._adjustIndex(D);
          se < 0 && (se = 0),
            this.controls[se] &&
              this.controls[se]._registerOnCollectionChange(() => {}),
            this.controls.splice(se, 1),
            v && (this.controls.splice(se, 0, v), this._registerControl(v)),
            this.updateValueAndValidity({ emitEvent: R.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(D, v = {}) {
          ur(this, 0, D),
            D.forEach((R, se) => {
              Cr(this, !1, se),
                this.at(se).setValue(R, {
                  onlySelf: !0,
                  emitEvent: v.emitEvent,
                });
            }),
            this.updateValueAndValidity(v);
        }
        patchValue(D, v = {}) {
          null != D &&
            (D.forEach((R, se) => {
              this.at(se) &&
                this.at(se).patchValue(R, {
                  onlySelf: !0,
                  emitEvent: v.emitEvent,
                });
            }),
            this.updateValueAndValidity(v));
        }
        reset(D = [], v = {}) {
          this._forEachChild((R, se) => {
            R.reset(D[se], { onlySelf: !0, emitEvent: v.emitEvent });
          }),
            this._updatePristine(v),
            this._updateTouched(v),
            this.updateValueAndValidity(v);
        }
        getRawValue() {
          return this.controls.map((D) => D.getRawValue());
        }
        clear(D = {}) {
          this.controls.length < 1 ||
            (this._forEachChild((v) => v._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity({ emitEvent: D.emitEvent }));
        }
        _adjustIndex(D) {
          return D < 0 ? D + this.length : D;
        }
        _syncPendingControls() {
          let D = this.controls.reduce(
            (v, R) => !!R._syncPendingControls() || v,
            !1
          );
          return D && this.updateValueAndValidity({ onlySelf: !0 }), D;
        }
        _forEachChild(D) {
          this.controls.forEach((v, R) => {
            D(v, R);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter((D) => D.enabled || this.disabled)
            .map((D) => D.value);
        }
        _anyControls(D) {
          return this.controls.some((v) => v.enabled && D(v));
        }
        _setUpControls() {
          this._forEachChild((D) => this._registerControl(D));
        }
        _allControlsDisabled() {
          for (const D of this.controls) if (D.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(D) {
          D.setParent(this),
            D._registerOnCollectionChange(this._onCollectionChange);
        }
        _find(D) {
          return this.at(D) ?? null;
        }
      }
      function Po(b) {
        return (
          !!b &&
          (void 0 !== b.asyncValidators ||
            void 0 !== b.validators ||
            void 0 !== b.updateOn)
        );
      }
      let io = (() => {
        class b {
          constructor() {
            this.useNonNullable = !1;
          }
          get nonNullable() {
            const v = new b();
            return (v.useNonNullable = !0), v;
          }
          group(v, R = null) {
            const se = this._reduceControls(v);
            let a = {};
            return (
              Po(R)
                ? (a = R)
                : null !== R &&
                  ((a.validators = R.validator),
                  (a.asyncValidators = R.asyncValidator)),
              new Z(se, a)
            );
          }
          record(v, R = null) {
            const se = this._reduceControls(v);
            return new Ye(se, R);
          }
          control(v, R, se) {
            let a = {};
            return this.useNonNullable
              ? (Po(R)
                  ? (a = R)
                  : ((a.validators = R), (a.asyncValidators = se)),
                new Oe(v, { ...a, nonNullable: !0 }))
              : new Oe(v, R, se);
          }
          array(v, R, se) {
            const a = v.map((E) => this._createControl(E));
            return new Br(a, R, se);
          }
          _reduceControls(v) {
            const R = {};
            return (
              Object.keys(v).forEach((se) => {
                R[se] = this._createControl(v[se]);
              }),
              R
            );
          }
          _createControl(v) {
            return v instanceof Oe || v instanceof _e
              ? v
              : Array.isArray(v)
              ? this.control(
                  v[0],
                  v.length > 1 ? v[1] : null,
                  v.length > 2 ? v[2] : null
                )
              : this.control(v);
          }
        }
        return (
          (b.ɵfac = function (v) {
            return new (v || b)();
          }),
          (b.ɵprov = o.Yz7({ token: b, factory: b.ɵfac, providedIn: _i })),
          b
        );
      })();
    },
    1481: (ut, $e, M) => {
      'use strict';
      M.d($e, { Cg: () => Ze, Dx: () => kn });
      var o = M(6895),
        L = M(8256);
      class Y extends o.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class W extends Y {
        static makeCurrent() {
          (0, o.HT)(new W());
        }
        onAndCancel(Z, G, Me) {
          return (
            Z.addEventListener(G, Me, !1),
            () => {
              Z.removeEventListener(G, Me, !1);
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
          const G = (function Be() {
            return (
              (ge = ge || document.querySelector('base')),
              ge ? ge.getAttribute('href') : null
            );
          })();
          return null == G
            ? null
            : (function Fe(_e) {
                (re = re || document.createElement('a')),
                  re.setAttribute('href', _e);
                const Z = re.pathname;
                return '/' === Z.charAt(0) ? Z : `/${Z}`;
              })(G);
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
        ce = (() => {
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
      const J = new L.OlP('EventManagerPlugins');
      let Ee = (() => {
        class _e {
          constructor(G, Me) {
            (this._zone = Me),
              (this._eventNameToPlugin = new Map()),
              G.forEach((Ye) => (Ye.manager = this)),
              (this._plugins = G.slice().reverse());
          }
          addEventListener(G, Me, Ye) {
            return this._findPluginFor(Me).addEventListener(G, Me, Ye);
          }
          addGlobalEventListener(G, Me, Ye) {
            return this._findPluginFor(Me).addGlobalEventListener(G, Me, Ye);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(G) {
            const Me = this._eventNameToPlugin.get(G);
            if (Me) return Me;
            const Ye = this._plugins;
            for (let gt = 0; gt < Ye.length; gt++) {
              const Dt = Ye[gt];
              if (Dt.supports(G)) return this._eventNameToPlugin.set(G, Dt), Dt;
            }
            throw new Error(`No event manager plugin found for event ${G}`);
          }
        }
        return (
          (_e.ɵfac = function (G) {
            return new (G || _e)(L.LFG(J), L.LFG(L.R0b));
          }),
          (_e.ɵprov = L.Yz7({ token: _e, factory: _e.ɵfac })),
          _e
        );
      })();
      class Ne {
        constructor(Z) {
          this._doc = Z;
        }
        addGlobalEventListener(Z, G, Me) {
          const Ye = (0, o.q)().getGlobalEventTarget(this._doc, Z);
          if (!Ye)
            throw new Error(`Unsupported event target ${Ye} for event ${G}`);
          return this.addEventListener(Ye, G, Me);
        }
      }
      let de = (() => {
          class _e {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(G) {
              const Me = new Set();
              G.forEach((Ye) => {
                this._stylesSet.has(Ye) ||
                  (this._stylesSet.add(Ye), Me.add(Ye));
              }),
                this.onStylesAdded(Me);
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
        ee = (() => {
          class _e extends de {
            constructor(G) {
              super(),
                (this._doc = G),
                (this._hostNodes = new Map()),
                this._hostNodes.set(G.head, []);
            }
            _addStylesToHost(G, Me, Ye) {
              G.forEach((gt) => {
                const Dt = this._doc.createElement('style');
                (Dt.textContent = gt), Ye.push(Me.appendChild(Dt));
              });
            }
            addHost(G) {
              const Me = [];
              this._addStylesToHost(this._stylesSet, G, Me),
                this._hostNodes.set(G, Me);
            }
            removeHost(G) {
              const Me = this._hostNodes.get(G);
              Me && Me.forEach(Ve), this._hostNodes.delete(G);
            }
            onStylesAdded(G) {
              this._hostNodes.forEach((Me, Ye) => {
                this._addStylesToHost(G, Ye, Me);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((G) => G.forEach(Ve));
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
      function Ve(_e) {
        (0, o.q)().remove(_e);
      }
      const fe = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/MathML/',
        },
        Ce = /%COMP%/g;
      function k(_e, Z, G) {
        for (let Me = 0; Me < Z.length; Me++) {
          let Ye = Z[Me];
          Array.isArray(Ye)
            ? k(_e, Ye, G)
            : ((Ye = Ye.replace(Ce, _e)), G.push(Ye));
        }
        return G;
      }
      function V(_e) {
        return (Z) => {
          if ('__ngUnwrap__' === Z) return _e;
          !1 === _e(Z) && (Z.preventDefault(), (Z.returnValue = !1));
        };
      }
      let A = (() => {
        class _e {
          constructor(G, Me, Ye) {
            (this.eventManager = G),
              (this.sharedStylesHost = Me),
              (this.appId = Ye),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new $(G));
          }
          createRenderer(G, Me) {
            if (!G || !Me) return this.defaultRenderer;
            switch (Me.encapsulation) {
              case L.ifc.Emulated: {
                let Ye = this.rendererByCompId.get(Me.id);
                return (
                  Ye ||
                    ((Ye = new me(
                      this.eventManager,
                      this.sharedStylesHost,
                      Me,
                      this.appId
                    )),
                    this.rendererByCompId.set(Me.id, Ye)),
                  Ye.applyToHost(G),
                  Ye
                );
              }
              case 1:
              case L.ifc.ShadowDom:
                return new oe(this.eventManager, this.sharedStylesHost, G, Me);
              default:
                if (!this.rendererByCompId.has(Me.id)) {
                  const Ye = k(Me.id, Me.styles, []);
                  this.sharedStylesHost.addStyles(Ye),
                    this.rendererByCompId.set(Me.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (_e.ɵfac = function (G) {
            return new (G || _e)(L.LFG(Ee), L.LFG(ee), L.LFG(L.AFp));
          }),
          (_e.ɵprov = L.Yz7({ token: _e, factory: _e.ɵfac })),
          _e
        );
      })();
      class $ {
        constructor(Z) {
          (this.eventManager = Z),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(Z, G) {
          return G
            ? document.createElementNS(fe[G] || G, Z)
            : document.createElement(Z);
        }
        createComment(Z) {
          return document.createComment(Z);
        }
        createText(Z) {
          return document.createTextNode(Z);
        }
        appendChild(Z, G) {
          (pe(Z) ? Z.content : Z).appendChild(G);
        }
        insertBefore(Z, G, Me) {
          Z && (pe(Z) ? Z.content : Z).insertBefore(G, Me);
        }
        removeChild(Z, G) {
          Z && Z.removeChild(G);
        }
        selectRootElement(Z, G) {
          let Me = 'string' == typeof Z ? document.querySelector(Z) : Z;
          if (!Me)
            throw new Error(`The selector "${Z}" did not match any elements`);
          return G || (Me.textContent = ''), Me;
        }
        parentNode(Z) {
          return Z.parentNode;
        }
        nextSibling(Z) {
          return Z.nextSibling;
        }
        setAttribute(Z, G, Me, Ye) {
          if (Ye) {
            G = Ye + ':' + G;
            const gt = fe[Ye];
            gt ? Z.setAttributeNS(gt, G, Me) : Z.setAttribute(G, Me);
          } else Z.setAttribute(G, Me);
        }
        removeAttribute(Z, G, Me) {
          if (Me) {
            const Ye = fe[Me];
            Ye ? Z.removeAttributeNS(Ye, G) : Z.removeAttribute(`${Me}:${G}`);
          } else Z.removeAttribute(G);
        }
        addClass(Z, G) {
          Z.classList.add(G);
        }
        removeClass(Z, G) {
          Z.classList.remove(G);
        }
        setStyle(Z, G, Me, Ye) {
          Ye & (L.JOm.DashCase | L.JOm.Important)
            ? Z.style.setProperty(
                G,
                Me,
                Ye & L.JOm.Important ? 'important' : ''
              )
            : (Z.style[G] = Me);
        }
        removeStyle(Z, G, Me) {
          Me & L.JOm.DashCase ? Z.style.removeProperty(G) : (Z.style[G] = '');
        }
        setProperty(Z, G, Me) {
          Z[G] = Me;
        }
        setValue(Z, G) {
          Z.nodeValue = G;
        }
        listen(Z, G, Me) {
          return 'string' == typeof Z
            ? this.eventManager.addGlobalEventListener(Z, G, V(Me))
            : this.eventManager.addEventListener(Z, G, V(Me));
        }
      }
      function pe(_e) {
        return 'TEMPLATE' === _e.tagName && void 0 !== _e.content;
      }
      class me extends $ {
        constructor(Z, G, Me, Ye) {
          super(Z), (this.component = Me);
          const gt = k(Ye + '-' + Me.id, Me.styles, []);
          G.addStyles(gt),
            (this.contentAttr = (function ie(_e) {
              return '_ngcontent-%COMP%'.replace(Ce, _e);
            })(Ye + '-' + Me.id)),
            (this.hostAttr = (function ue(_e) {
              return '_nghost-%COMP%'.replace(Ce, _e);
            })(Ye + '-' + Me.id));
        }
        applyToHost(Z) {
          super.setAttribute(Z, this.hostAttr, '');
        }
        createElement(Z, G) {
          const Me = super.createElement(Z, G);
          return super.setAttribute(Me, this.contentAttr, ''), Me;
        }
      }
      class oe extends $ {
        constructor(Z, G, Me, Ye) {
          super(Z),
            (this.sharedStylesHost = G),
            (this.hostEl = Me),
            (this.shadowRoot = Me.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const gt = k(Ye.id, Ye.styles, []);
          for (let Dt = 0; Dt < gt.length; Dt++) {
            const Ct = document.createElement('style');
            (Ct.textContent = gt[Dt]), this.shadowRoot.appendChild(Ct);
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
        insertBefore(Z, G, Me) {
          return super.insertBefore(this.nodeOrShadowRoot(Z), G, Me);
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
      let He = (() => {
        class _e extends Ne {
          constructor(G) {
            super(G);
          }
          supports(G) {
            return !0;
          }
          addEventListener(G, Me, Ye) {
            return (
              G.addEventListener(Me, Ye, !1),
              () => this.removeEventListener(G, Me, Ye)
            );
          }
          removeEventListener(G, Me, Ye) {
            return G.removeEventListener(Me, Ye);
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
      const je = ['alt', 'control', 'meta', 'shift'],
        be = {
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
        Te = {
          alt: (_e) => _e.altKey,
          control: (_e) => _e.ctrlKey,
          meta: (_e) => _e.metaKey,
          shift: (_e) => _e.shiftKey,
        };
      let qe = (() => {
        class _e extends Ne {
          constructor(G) {
            super(G);
          }
          supports(G) {
            return null != _e.parseEventName(G);
          }
          addEventListener(G, Me, Ye) {
            const gt = _e.parseEventName(Me),
              Dt = _e.eventCallback(gt.fullKey, Ye, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, o.q)().onAndCancel(G, gt.domEventName, Dt)
              );
          }
          static parseEventName(G) {
            const Me = G.toLowerCase().split('.'),
              Ye = Me.shift();
            if (0 === Me.length || ('keydown' !== Ye && 'keyup' !== Ye))
              return null;
            const gt = _e._normalizeKey(Me.pop());
            let Dt = '',
              Ct = Me.indexOf('code');
            if (
              (Ct > -1 && (Me.splice(Ct, 1), (Dt = 'code.')),
              je.forEach((on) => {
                const sn = Me.indexOf(on);
                sn > -1 && (Me.splice(sn, 1), (Dt += on + '.'));
              }),
              (Dt += gt),
              0 != Me.length || 0 === gt.length)
            )
              return null;
            const Kt = {};
            return (Kt.domEventName = Ye), (Kt.fullKey = Dt), Kt;
          }
          static matchEventFullKeyCode(G, Me) {
            let Ye = be[G.key] || G.key,
              gt = '';
            return (
              Me.indexOf('code.') > -1 && ((Ye = G.code), (gt = 'code.')),
              !(null == Ye || !Ye) &&
                ((Ye = Ye.toLowerCase()),
                ' ' === Ye ? (Ye = 'space') : '.' === Ye && (Ye = 'dot'),
                je.forEach((Dt) => {
                  Dt !== Ye && (0, Te[Dt])(G) && (gt += Dt + '.');
                }),
                (gt += Ye),
                gt === Me)
            );
          }
          static eventCallback(G, Me, Ye) {
            return (gt) => {
              _e.matchEventFullKeyCode(gt, G) && Ye.runGuarded(() => Me(gt));
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
      function Ze(_e, Z) {
        return (0, L.iPO)({ rootComponent: _e, ...wt(Z) });
      }
      function wt(_e) {
        return {
          appProviders: [...Nn, ...(_e?.providers ?? [])],
          platformProviders: Bt,
        };
      }
      const Bt = [
          { provide: L.Lbi, useValue: o.bD },
          {
            provide: L.g9A,
            useValue: function Pt() {
              W.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: o.K0,
            useFactory: function We() {
              return (0, L.RDi)(document), document;
            },
            deps: [],
          },
        ],
        Nn = [
          { provide: L.zSh, useValue: 'root' },
          {
            provide: L.qLn,
            useFactory: function At() {
              return new L.qLn();
            },
            deps: [],
          },
          { provide: J, useClass: He, multi: !0, deps: [o.K0, L.R0b, L.Lbi] },
          { provide: J, useClass: qe, multi: !0, deps: [o.K0] },
          { provide: A, useClass: A, deps: [Ee, ee, L.AFp] },
          { provide: L.FYo, useExisting: A },
          { provide: de, useExisting: ee },
          { provide: ee, useClass: ee, deps: [o.K0] },
          { provide: Ee, useClass: Ee, deps: [J, L.R0b] },
          { provide: o.JF, useClass: ce, deps: [] },
          [],
        ];
      let kn = (() => {
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
              let Me = null;
              return (
                (Me = G
                  ? new G()
                  : (function Zt() {
                      return new kn((0, L.LFG)(o.K0));
                    })()),
                Me
              );
            },
            providedIn: 'root',
          })),
          _e
        );
      })();
      typeof window < 'u' && window;
    },
    3165: (ut, $e, M) => {
      'use strict';
      M.d($e, {
        gz: () => Sn,
        y6: () => Jn,
        m2: () => Lt,
        OD: () => Je,
        eC: () => at,
        wm: () => Fs,
        wN: () => xs,
        F0: () => _n,
        rH: () => Ko,
        Od: () => Wi,
        Bz: () => mn,
        Hx: () => rn,
        bU: () => yl,
        aF: () => Jo,
      });
      var o = M(8256),
        L = M(2076),
        Y = M(7669);
      function W(...d) {
        const f = (0, Y.yG)(d);
        return (0, L.D)(d, f);
      }
      var ge = M(1135);
      const re = (0, M(3888).d)(
        (d) =>
          function () {
            d(this),
              (this.name = 'EmptyError'),
              (this.message = 'no elements in sequence');
          }
      );
      var Fe = M(9751),
        Ae = M(4742),
        Pe = M(4671),
        ve = M(3268),
        we = M(1810),
        ce = M(5403),
        J = M(9672);
      function Ee(...d) {
        const f = (0, Y.yG)(d),
          l = (0, Y.jO)(d),
          { args: p, keys: _ } = (0, Ae.D)(d);
        if (0 === p.length) return (0, L.D)([], f);
        const S = new Fe.y(
          (function Ne(d, f, l = Pe.y) {
            return (p) => {
              de(
                f,
                () => {
                  const { length: _ } = d,
                    S = new Array(_);
                  let P = _,
                    te = _;
                  for (let Ue = 0; Ue < _; Ue++)
                    de(
                      f,
                      () => {
                        const lt = (0, L.D)(d[Ue], f);
                        let ct = !1;
                        lt.subscribe(
                          (0, ce.x)(
                            p,
                            (xt) => {
                              (S[Ue] = xt),
                                ct || ((ct = !0), te--),
                                te || p.next(l(S.slice()));
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
          })(p, f, _ ? (P) => (0, we.n)(_, P) : Pe.y)
        );
        return l ? S.pipe((0, ve.Z)(l)) : S;
      }
      function de(d, f, l) {
        d ? (0, J.f)(l, d, f) : f();
      }
      var ee = M(8189);
      function fe(...d) {
        return (function Ve() {
          return (0, ee.J)(1);
        })()((0, L.D)(d, (0, Y.yG)(d)));
      }
      var Ce = M(8421);
      function he(d) {
        return new Fe.y((f) => {
          (0, Ce.Xf)(d()).subscribe(f);
        });
      }
      var xe = M(9635),
        le = M(576);
      function z(d, f) {
        const l = (0, le.m)(d) ? d : () => d,
          p = (_) => _.error(l());
        return new Fe.y(f ? (_) => f.schedule(p, 0, _) : p);
      }
      var ie = M(515),
        ue = M(727),
        k = M(4482);
      function V() {
        return (0, k.e)((d, f) => {
          let l = null;
          d._refCount++;
          const p = (0, ce.x)(f, void 0, void 0, void 0, () => {
            if (!d || d._refCount <= 0 || 0 < --d._refCount)
              return void (l = null);
            const _ = d._connection,
              S = l;
            (l = null),
              _ && (!S || _ === S) && _.unsubscribe(),
              f.unsubscribe();
          });
          d.subscribe(p), p.closed || (l = d.connect());
        });
      }
      class U extends Fe.y {
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
            f = this._connection = new ue.w0();
            const l = this.getSubject();
            f.add(
              this.source.subscribe(
                (0, ce.x)(
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
              f.closed && ((this._connection = null), (f = ue.w0.EMPTY));
          }
          return f;
        }
        refCount() {
          return V()(this);
        }
      }
      var A = M(7579),
        $ = M(6895),
        q = M(4004),
        Le = M(3900);
      function pe(d) {
        return d <= 0
          ? () => ie.E
          : (0, k.e)((f, l) => {
              let p = 0;
              f.subscribe(
                (0, ce.x)(l, (_) => {
                  ++p <= d && (l.next(_), d <= p && l.complete());
                })
              );
            });
      }
      var oe = M(9300),
        He = M(5577);
      function je(d) {
        return (0, k.e)((f, l) => {
          let p = !1;
          f.subscribe(
            (0, ce.x)(
              l,
              (_) => {
                (p = !0), l.next(_);
              },
              () => {
                p || l.next(d), l.complete();
              }
            )
          );
        });
      }
      function be(d = Te) {
        return (0, k.e)((f, l) => {
          let p = !1;
          f.subscribe(
            (0, ce.x)(
              l,
              (_) => {
                (p = !0), l.next(_);
              },
              () => (p ? l.complete() : l.error(d()))
            )
          );
        });
      }
      function Te() {
        return new re();
      }
      function qe(d, f) {
        const l = arguments.length >= 2;
        return (p) =>
          p.pipe(
            d ? (0, oe.h)((_, S) => d(_, S, p)) : Pe.y,
            pe(1),
            l ? je(f) : be(() => new re())
          );
      }
      function nt(d, f) {
        return (0, le.m)(f) ? (0, He.z)(d, f, 1) : (0, He.z)(d, 1);
      }
      var Ze = M(8505);
      function pt(d) {
        return (0, k.e)((f, l) => {
          let S,
            p = null,
            _ = !1;
          (p = f.subscribe(
            (0, ce.x)(l, void 0, void 0, (P) => {
              (S = (0, Ce.Xf)(d(P, pt(d)(f)))),
                p ? (p.unsubscribe(), (p = null), S.subscribe(l)) : (_ = !0);
            })
          )),
            _ && (p.unsubscribe(), (p = null), S.subscribe(l));
        });
      }
      function wt(d, f, l, p, _) {
        return (S, P) => {
          let te = l,
            Ue = f,
            lt = 0;
          S.subscribe(
            (0, ce.x)(
              P,
              (ct) => {
                const xt = lt++;
                (Ue = te ? d(Ue, ct, xt) : ((te = !0), ct)), p && P.next(Ue);
              },
              _ &&
                (() => {
                  te && P.next(Ue), P.complete();
                })
            )
          );
        };
      }
      function dt(d, f) {
        return (0, k.e)(wt(d, f, arguments.length >= 2, !0));
      }
      function Pt(d) {
        return d <= 0
          ? () => ie.E
          : (0, k.e)((f, l) => {
              let p = [];
              f.subscribe(
                (0, ce.x)(
                  l,
                  (_) => {
                    p.push(_), d < p.length && p.shift();
                  },
                  () => {
                    for (const _ of p) l.next(_);
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
      function At(d, f) {
        const l = arguments.length >= 2;
        return (p) =>
          p.pipe(
            d ? (0, oe.h)((_, S) => d(_, S, p)) : Pe.y,
            Pt(1),
            l ? je(f) : be(() => new re())
          );
      }
      function En(d) {
        return (0, k.e)((f, l) => {
          try {
            f.subscribe(l);
          } finally {
            l.add(d);
          }
        });
      }
      var Gn = M(1481);
      const at = 'primary',
        Nn = Symbol('RouteTitle');
      class Nt {
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
      function an(d) {
        return new Nt(d);
      }
      function qt(d, f, l) {
        const p = l.path.split('/');
        if (
          p.length > d.length ||
          ('full' === l.pathMatch && (f.hasChildren() || p.length < d.length))
        )
          return null;
        const _ = {};
        for (let S = 0; S < p.length; S++) {
          const P = p[S],
            te = d[S];
          if (P.startsWith(':')) _[P.substring(1)] = te;
          else if (P !== te.path) return null;
        }
        return { consumed: d.slice(0, p.length), posParams: _ };
      }
      function Zt(d, f) {
        const l = d ? Object.keys(d) : void 0,
          p = f ? Object.keys(f) : void 0;
        if (!l || !p || l.length != p.length) return !1;
        let _;
        for (let S = 0; S < l.length; S++)
          if (((_ = l[S]), !kn(d[_], f[_]))) return !1;
        return !0;
      }
      function kn(d, f) {
        if (Array.isArray(d) && Array.isArray(f)) {
          if (d.length !== f.length) return !1;
          const l = [...d].sort(),
            p = [...f].sort();
          return l.every((_, S) => p[S] === _);
        }
        return d === f;
      }
      function Ut(d) {
        return Array.prototype.concat.apply([], d);
      }
      function ft(d) {
        return d.length > 0 ? d[d.length - 1] : null;
      }
      function Ht(d, f) {
        for (const l in d) d.hasOwnProperty(l) && f(d[l], l);
      }
      function Yt(d) {
        return (0, o.CqO)(d)
          ? d
          : (0, o.QGY)(d)
          ? (0, L.D)(Promise.resolve(d))
          : W(d);
      }
      const Tt = !1,
        ln = {
          exact: function tt(d, f, l) {
            if (
              !Gt(d.segments, f.segments) ||
              !zn(d.segments, f.segments, l) ||
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
        bn = {
          exact: function Xt(d, f) {
            return Zt(d, f);
          },
          subset: function Vt(d, f) {
            return (
              Object.keys(f).length <= Object.keys(d).length &&
              Object.keys(f).every((l) => kn(d[l], f[l]))
            );
          },
          ignored: () => !0,
        };
      function mt(d, f, l) {
        return (
          ln[l.paths](d.root, f.root, l.matrixParams) &&
          bn[l.queryParams](d.queryParams, f.queryParams) &&
          !('exact' === l.fragment && d.fragment !== f.fragment)
        );
      }
      function tr(d, f, l) {
        return $n(d, f, f.segments, l);
      }
      function $n(d, f, l, p) {
        if (d.segments.length > l.length) {
          const _ = d.segments.slice(0, l.length);
          return !(!Gt(_, l) || f.hasChildren() || !zn(_, l, p));
        }
        if (d.segments.length === l.length) {
          if (!Gt(d.segments, l) || !zn(d.segments, l, p)) return !1;
          for (const _ in f.children)
            if (!d.children[_] || !tr(d.children[_], f.children[_], p))
              return !1;
          return !0;
        }
        {
          const _ = l.slice(0, d.segments.length),
            S = l.slice(d.segments.length);
          return (
            !!(Gt(d.segments, _) && zn(d.segments, _, p) && d.children[at]) &&
            $n(d.children[at], f, S, p)
          );
        }
      }
      function zn(d, f, l) {
        return f.every((p, _) => bn[l](d[_].parameters, p.parameters));
      }
      class yn {
        constructor(f = new St([], {}), l = {}, p = null) {
          (this.root = f), (this.queryParams = l), (this.fragment = p);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = an(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return wn.serialize(this);
        }
      }
      class St {
        constructor(f, l) {
          (this.segments = f),
            (this.children = l),
            (this.parent = null),
            Ht(l, (p, _) => (p.parent = this));
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
            this._parameterMap || (this._parameterMap = an(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return G(this);
        }
      }
      function Gt(d, f) {
        return d.length === f.length && d.every((l, p) => l.path === f[p].path);
      }
      let rn = (() => {
        class d {}
        return (
          (d.ɵfac = function (l) {
            return new (l || d)();
          }),
          (d.ɵprov = o.Yz7({
            token: d,
            factory: function () {
              return new _t();
            },
            providedIn: 'root',
          })),
          d
        );
      })();
      class _t {
        parse(f) {
          const l = new ir(f);
          return new yn(
            l.parseRootSegment(),
            l.parseQueryParams(),
            l.parseFragment()
          );
        }
        serialize(f) {
          const l = `/${Bn(f.root, !0)}`,
            p = (function Ye(d) {
              const f = Object.keys(d)
                .map((l) => {
                  const p = d[l];
                  return Array.isArray(p)
                    ? p.map((_) => `${dn(l)}=${dn(_)}`).join('&')
                    : `${dn(l)}=${dn(p)}`;
                })
                .filter((l) => !!l);
              return f.length ? `?${f.join('&')}` : '';
            })(f.queryParams);
          return `${l}${p}${
            'string' == typeof f.fragment
              ? `#${(function Cr(d) {
                  return encodeURI(d);
                })(f.fragment)}`
              : ''
          }`;
        }
      }
      const wn = new _t();
      function An(d) {
        return d.segments.map((f) => G(f)).join('/');
      }
      function Bn(d, f) {
        if (!d.hasChildren()) return An(d);
        if (f) {
          const l = d.children[at] ? Bn(d.children[at], !1) : '',
            p = [];
          return (
            Ht(d.children, (_, S) => {
              S !== at && p.push(`${S}:${Bn(_, !1)}`);
            }),
            p.length > 0 ? `${l}(${p.join('//')})` : l
          );
        }
        {
          const l = (function nn(d, f) {
            let l = [];
            return (
              Ht(d.children, (p, _) => {
                _ === at && (l = l.concat(f(p, _)));
              }),
              Ht(d.children, (p, _) => {
                _ !== at && (l = l.concat(f(p, _)));
              }),
              l
            );
          })(d, (p, _) =>
            _ === at ? [Bn(d.children[at], !1)] : [`${_}:${Bn(p, !1)}`]
          );
          return 1 === Object.keys(d.children).length && null != d.children[at]
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
      function dn(d) {
        return or(d).replace(/%3B/gi, ';');
      }
      function ur(d) {
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
        return `${ur(d.path)}${(function Me(d) {
          return Object.keys(d)
            .map((f) => `;${ur(f)}=${ur(d[f])}`)
            .join('');
        })(d.parameters)}`;
      }
      const gt = /^[^\/()?;=#]+/;
      function Dt(d) {
        const f = d.match(gt);
        return f ? f[0] : '';
      }
      const Ct = /^[^=?&#]+/,
        on = /^[^&#]+/;
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
              ? new St([], {})
              : new St([], this.parseChildren())
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
              (p[at] = new St(f, l)),
            p
          );
        }
        parseSegment() {
          const f = Dt(this.remaining);
          if ('' === f && this.peekStartsWith(';')) throw new o.vHH(4009, Tt);
          return this.capture(f), new nr(_e(f), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const f = {};
          for (; this.consumeOptional(';'); ) this.parseParam(f);
          return f;
        }
        parseParam(f) {
          const l = Dt(this.remaining);
          if (!l) return;
          this.capture(l);
          let p = '';
          if (this.consumeOptional('=')) {
            const _ = Dt(this.remaining);
            _ && ((p = _), this.capture(p));
          }
          f[_e(l)] = _e(p);
        }
        parseQueryParam(f) {
          const l = (function Kt(d) {
            const f = d.match(Ct);
            return f ? f[0] : '';
          })(this.remaining);
          if (!l) return;
          this.capture(l);
          let p = '';
          if (this.consumeOptional('=')) {
            const P = (function sn(d) {
              const f = d.match(on);
              return f ? f[0] : '';
            })(this.remaining);
            P && ((p = P), this.capture(p));
          }
          const _ = Z(l),
            S = Z(p);
          if (f.hasOwnProperty(_)) {
            let P = f[_];
            Array.isArray(P) || ((P = [P]), (f[_] = P)), P.push(S);
          } else f[_] = S;
        }
        parseParens(f) {
          const l = {};
          for (
            this.capture('(');
            !this.consumeOptional(')') && this.remaining.length > 0;

          ) {
            const p = Dt(this.remaining),
              _ = this.remaining[p.length];
            if ('/' !== _ && ')' !== _ && ';' !== _) throw new o.vHH(4010, Tt);
            let S;
            p.indexOf(':') > -1
              ? ((S = p.slice(0, p.indexOf(':'))),
                this.capture(S),
                this.capture(':'))
              : f && (S = at);
            const P = this.parseChildren();
            (l[S] = 1 === Object.keys(P).length ? P[at] : new St([], P)),
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
          if (!this.consumeOptional(f)) throw new o.vHH(4011, Tt);
        }
      }
      function Tn(d) {
        return d.segments.length > 0 ? new St([], { [at]: d }) : d;
      }
      function fn(d) {
        const f = {};
        for (const p of Object.keys(d.children)) {
          const S = fn(d.children[p]);
          (S.segments.length > 0 || S.hasChildren()) && (f[p] = S);
        }
        return (function On(d) {
          if (1 === d.numberOfChildren && d.children[at]) {
            const f = d.children[at];
            return new St(d.segments.concat(f.segments), f.children);
          }
          return d;
        })(new St(d.segments, f));
      }
      function In(d) {
        return d instanceof yn;
      }
      function _r(d, f, l, p, _) {
        if (0 === l.length) return vn(f.root, f.root, f.root, p, _);
        const S = (function Qt(d) {
          if ('string' == typeof d[0] && 1 === d.length && '/' === d[0])
            return new pn(!0, 0, d);
          let f = 0,
            l = !1;
          const p = d.reduce((_, S, P) => {
            if ('object' == typeof S && null != S) {
              if (S.outlets) {
                const te = {};
                return (
                  Ht(S.outlets, (Ue, lt) => {
                    te[lt] = 'string' == typeof Ue ? Ue.split('/') : Ue;
                  }),
                  [..._, { outlets: te }]
                );
              }
              if (S.segmentPath) return [..._, S.segmentPath];
            }
            return 'string' != typeof S
              ? [..._, S]
              : 0 === P
              ? (S.split('/').forEach((te, Ue) => {
                  (0 == Ue && '.' === te) ||
                    (0 == Ue && '' === te
                      ? (l = !0)
                      : '..' === te
                      ? f++
                      : '' != te && _.push(te));
                }),
                _)
              : [..._, S];
          }, []);
          return new pn(l, f, p);
        })(l);
        return S.toRoot()
          ? vn(f.root, f.root, new St([], {}), p, _)
          : (function P(Ue) {
              const lt = (function B(d, f, l, p) {
                  if (d.isAbsolute) return new xn(f.root, !0, 0);
                  if (-1 === p) return new xn(l, l === f.root, 0);
                  return (function j(d, f, l) {
                    let p = d,
                      _ = f,
                      S = l;
                    for (; S > _; ) {
                      if (((S -= _), (p = p.parent), !p))
                        throw new o.vHH(4005, !1);
                      _ = p.segments.length;
                    }
                    return new xn(p, !1, _ - S);
                  })(l, p + (sr(d.commands[0]) ? 0 : 1), d.numberOfDoubleDots);
                })(S, f, d.snapshot?._urlSegment, Ue),
                ct = lt.processChildren
                  ? N(lt.segmentGroup, lt.index, S.commands)
                  : ye(lt.segmentGroup, lt.index, S.commands);
              return vn(f.root, lt.segmentGroup, ct, p, _);
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
      function vn(d, f, l, p, _) {
        let P,
          S = {};
        p &&
          Ht(p, (Ue, lt) => {
            S[lt] = Array.isArray(Ue) ? Ue.map((ct) => `${ct}`) : `${Ue}`;
          }),
          (P = d === f ? l : Ot(d, f, l));
        const te = Tn(fn(P));
        return new yn(te, S, _);
      }
      function Ot(d, f, l) {
        const p = {};
        return (
          Ht(d.children, (_, S) => {
            p[S] = _ === f ? l : Ot(_, f, l);
          }),
          new St(d.segments, p)
        );
      }
      class pn {
        constructor(f, l, p) {
          if (
            ((this.isAbsolute = f),
            (this.numberOfDoubleDots = l),
            (this.commands = p),
            f && p.length > 0 && sr(p[0]))
          )
            throw new o.vHH(4003, !1);
          const _ = p.find(ar);
          if (_ && _ !== ft(p)) throw new o.vHH(4004, !1);
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
      function ye(d, f, l) {
        if (
          (d || (d = new St([], {})),
          0 === d.segments.length && d.hasChildren())
        )
          return N(d, f, l);
        const p = (function Q(d, f, l) {
            let p = 0,
              _ = f;
            const S = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; _ < d.segments.length; ) {
              if (p >= l.length) return S;
              const P = d.segments[_],
                te = l[p];
              if (ar(te)) break;
              const Ue = `${te}`,
                lt = p < l.length - 1 ? l[p + 1] : null;
              if (_ > 0 && void 0 === Ue) break;
              if (Ue && lt && 'object' == typeof lt && void 0 === lt.outlets) {
                if (!rt(Ue, lt, P)) return S;
                p += 2;
              } else {
                if (!rt(Ue, {}, P)) return S;
                p++;
              }
              _++;
            }
            return { match: !0, pathIndex: _, commandIndex: p };
          })(d, f, l),
          _ = l.slice(p.commandIndex);
        if (p.match && p.pathIndex < d.segments.length) {
          const S = new St(d.segments.slice(0, p.pathIndex), {});
          return (
            (S.children[at] = new St(
              d.segments.slice(p.pathIndex),
              d.children
            )),
            N(S, 0, _)
          );
        }
        return p.match && 0 === _.length
          ? new St(d.segments, {})
          : p.match && !d.hasChildren()
          ? ae(d, f, l)
          : p.match
          ? N(d, 0, _)
          : ae(d, f, l);
      }
      function N(d, f, l) {
        if (0 === l.length) return new St(d.segments, {});
        {
          const p = (function K(d) {
              return ar(d[0]) ? d[0].outlets : { [at]: d };
            })(l),
            _ = {};
          return (
            Ht(p, (S, P) => {
              'string' == typeof S && (S = [S]),
                null !== S && (_[P] = ye(d.children[P], f, S));
            }),
            Ht(d.children, (S, P) => {
              void 0 === p[P] && (_[P] = S);
            }),
            new St(d.segments, _)
          );
        }
      }
      function ae(d, f, l) {
        const p = d.segments.slice(0, f);
        let _ = 0;
        for (; _ < l.length; ) {
          const S = l[_];
          if (ar(S)) {
            const Ue = ke(S.outlets);
            return new St(p, Ue);
          }
          if (0 === _ && sr(l[0])) {
            p.push(new nr(d.segments[f].path, Oe(l[0]))), _++;
            continue;
          }
          const P = ar(S) ? S.outlets[at] : `${S}`,
            te = _ < l.length - 1 ? l[_ + 1] : null;
          P && te && sr(te)
            ? (p.push(new nr(P, Oe(te))), (_ += 2))
            : (p.push(new nr(P, {})), _++);
        }
        return new St(p, {});
      }
      function ke(d) {
        const f = {};
        return (
          Ht(d, (l, p) => {
            'string' == typeof l && (l = [l]),
              null !== l && (f[p] = ae(new St([], {}), 0, l));
          }),
          f
        );
      }
      function Oe(d) {
        const f = {};
        return Ht(d, (l, p) => (f[p] = `${l}`)), f;
      }
      function rt(d, f, l) {
        return d == l.path && Zt(f, l.parameters);
      }
      class ot {
        constructor(f, l) {
          (this.id = f), (this.url = l);
        }
      }
      class Je extends ot {
        constructor(f, l, p = 'imperative', _ = null) {
          super(f, l),
            (this.type = 0),
            (this.navigationTrigger = p),
            (this.restoredState = _);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Lt extends ot {
        constructor(f, l, p) {
          super(f, l), (this.urlAfterRedirects = p), (this.type = 1);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class jt extends ot {
        constructor(f, l, p, _) {
          super(f, l), (this.reason = p), (this.code = _), (this.type = 2);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Vn extends ot {
        constructor(f, l, p, _) {
          super(f, l), (this.error = p), (this.target = _), (this.type = 3);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Rn extends ot {
        constructor(f, l, p, _) {
          super(f, l),
            (this.urlAfterRedirects = p),
            (this.state = _),
            (this.type = 4);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class cn extends ot {
        constructor(f, l, p, _) {
          super(f, l),
            (this.urlAfterRedirects = p),
            (this.state = _),
            (this.type = 7);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Er extends ot {
        constructor(f, l, p, _, S) {
          super(f, l),
            (this.urlAfterRedirects = p),
            (this.state = _),
            (this.shouldActivate = S),
            (this.type = 8);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Qn extends ot {
        constructor(f, l, p, _) {
          super(f, l),
            (this.urlAfterRedirects = p),
            (this.state = _),
            (this.type = 5);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class lr extends ot {
        constructor(f, l, p, _) {
          super(f, l),
            (this.urlAfterRedirects = p),
            (this.state = _),
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
      class uo {
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
      class So {
        constructor(f) {
          (this.snapshot = f), (this.type = 12);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Ur {
        constructor(f) {
          (this.snapshot = f), (this.type = 13);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Mo {
        constructor(f) {
          (this.snapshot = f), (this.type = 14);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Pr {
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
      class mr {
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
          const l = gn(f, this._root);
          return l ? l.children.map((p) => p.value) : [];
        }
        firstChild(f) {
          const l = gn(f, this._root);
          return l && l.children.length > 0 ? l.children[0].value : null;
        }
        siblings(f) {
          const l = Xr(f, this._root);
          return l.length < 2
            ? []
            : l[l.length - 2].children
                .map((_) => _.value)
                .filter((_) => _ !== f);
        }
        pathFromRoot(f) {
          return Xr(f, this._root).map((l) => l.value);
        }
      }
      function gn(d, f) {
        if (d === f.value) return f;
        for (const l of f.children) {
          const p = gn(d, l);
          if (p) return p;
        }
        return null;
      }
      function Xr(d, f) {
        if (d === f.value) return [f];
        for (const l of f.children) {
          const p = Xr(d, l);
          if (p.length) return p.unshift(f), p;
        }
        return [];
      }
      class en {
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
      class Ar extends mr {
        constructor(f, l) {
          super(f), (this.snapshot = l), Kr(this, f);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function Nr(d, f) {
        const l = (function Tr(d, f) {
            const P = new kr([], {}, {}, '', {}, at, f, null, d.root, -1, {});
            return new Ao('', new en(P, []));
          })(d, f),
          p = new ge.X([new nr('', {})]),
          _ = new ge.X({}),
          S = new ge.X({}),
          P = new ge.X({}),
          te = new ge.X(''),
          Ue = new Sn(p, _, P, te, S, at, f, l.root);
        return (Ue.snapshot = l.root), new Ar(new en(Ue, []), l);
      }
      class Sn {
        constructor(f, l, p, _, S, P, te, Ue) {
          (this.url = f),
            (this.params = l),
            (this.queryParams = p),
            (this.fragment = _),
            (this.data = S),
            (this.outlet = P),
            (this.component = te),
            (this.title =
              this.data?.pipe((0, q.U)((lt) => lt[Nn])) ?? W(void 0)),
            (this._futureSnapshot = Ue);
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
              (this._paramMap = this.params.pipe((0, q.U)((f) => an(f)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, q.U)((f) => an(f))
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
      function Lr(d, f = 'emptyOnly') {
        const l = d.pathFromRoot;
        let p = 0;
        if ('always' !== f)
          for (p = l.length - 1; p >= 1; ) {
            const _ = l[p],
              S = l[p - 1];
            if (_.routeConfig && '' === _.routeConfig.path) p--;
            else {
              if (S.component) break;
              p--;
            }
          }
        return (function fo(d) {
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
      class kr {
        constructor(f, l, p, _, S, P, te, Ue, lt, ct, xt) {
          (this.url = f),
            (this.params = l),
            (this.queryParams = p),
            (this.fragment = _),
            (this.data = S),
            (this.outlet = P),
            (this.component = te),
            (this.routeConfig = Ue),
            (this._urlSegment = lt),
            (this._lastPathIndex = ct),
            (this._resolve = xt);
        }
        get title() {
          return this.data?.[Nn];
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
            this._paramMap || (this._paramMap = an(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = an(this.queryParams)),
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
      class Ao extends mr {
        constructor(f, l) {
          super(l), (this.url = f), Kr(this, l);
        }
        toString() {
          return Zr(this._root);
        }
      }
      function Kr(d, f) {
        (f.value._routerState = d), f.children.forEach((l) => Kr(d, l));
      }
      function Zr(d) {
        const f =
          d.children.length > 0 ? ` { ${d.children.map(Zr).join(', ')} } ` : '';
        return `${d.value}${f}`;
      }
      function To(d) {
        if (d.snapshot) {
          const f = d.snapshot,
            l = d._futureSnapshot;
          (d.snapshot = l),
            Zt(f.queryParams, l.queryParams) ||
              d.queryParams.next(l.queryParams),
            f.fragment !== l.fragment && d.fragment.next(l.fragment),
            Zt(f.params, l.params) || d.params.next(l.params),
            (function Ln(d, f) {
              if (d.length !== f.length) return !1;
              for (let l = 0; l < d.length; ++l) if (!Zt(d[l], f[l])) return !1;
              return !0;
            })(f.url, l.url) || d.url.next(l.url),
            Zt(f.data, l.data) || d.data.next(l.data);
        } else
          (d.snapshot = d._futureSnapshot), d.data.next(d._futureSnapshot.data);
      }
      function Qr(d, f) {
        const l =
          Zt(d.params, f.params) &&
          (function rr(d, f) {
            return (
              Gt(d, f) && d.every((l, p) => Zt(l.parameters, f[p].parameters))
            );
          })(d.url, f.url);
        return (
          l &&
          !(!d.parent != !f.parent) &&
          (!d.parent || Qr(d.parent, f.parent))
        );
      }
      function zr(d, f, l) {
        if (l && d.shouldReuseRoute(f.value, l.value.snapshot)) {
          const p = l.value;
          p._futureSnapshot = f.value;
          const _ = (function yi(d, f, l) {
            return f.children.map((p) => {
              for (const _ of l.children)
                if (d.shouldReuseRoute(p.value, _.value.snapshot))
                  return zr(d, p, _);
              return zr(d, p);
            });
          })(d, f, l);
          return new en(p, _);
        }
        {
          if (d.shouldAttach(f.value)) {
            const S = d.retrieve(f.value);
            if (null !== S) {
              const P = S.route;
              return (
                (P.value._futureSnapshot = f.value),
                (P.children = f.children.map((te) => zr(d, te))),
                P
              );
            }
          }
          const p = (function ii(d) {
              return new Sn(
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
            _ = f.children.map((S) => zr(d, S));
          return new en(p, _);
        }
      }
      const ho = 'ngNavigationCancelingError';
      function Uo(d, f) {
        const { redirectTo: l, navigationBehaviorOptions: p } = In(f)
            ? { redirectTo: f, navigationBehaviorOptions: void 0 }
            : f,
          _ = Oo(!1, 0, f);
        return (_.url = l), (_.navigationBehaviorOptions = p), _;
      }
      function Oo(d, f, l) {
        const p = new Error('NavigationCancelingError: ' + (d || ''));
        return (p[ho] = !0), (p.cancellationCode = f), l && (p.url = l), p;
      }
      function po(d) {
        return xo(d) && In(d.url);
      }
      function xo(d) {
        return d && d[ho];
      }
      class br {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.injector = null),
            (this.children = new Jn()),
            (this.attachRef = null);
        }
      }
      let Jn = (() => {
        class d {
          constructor() {
            this.contexts = new Map();
          }
          onChildOutletCreated(l, p) {
            const _ = this.getOrCreateContext(l);
            (_.outlet = p), this.contexts.set(l, _);
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
            return p || ((p = new br()), this.contexts.set(l, p)), p;
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
      let Go = (() => {
        class d {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = at),
              (this.activateEvents = new o.vpe()),
              (this.deactivateEvents = new o.vpe()),
              (this.attachEvents = new o.vpe()),
              (this.detachEvents = new o.vpe()),
              (this.parentContexts = (0, o.f3M)(Jn)),
              (this.location = (0, o.f3M)(o.s_b)),
              (this.changeDetector = (0, o.f3M)(o.sBO)),
              (this.environmentInjector = (0, o.f3M)(o.lqb));
          }
          ngOnChanges(l) {
            if (l.name) {
              const { firstChange: p, previousValue: _ } = l.name;
              if (p) return;
              this.isTrackedInParentContexts(_) &&
                (this.deactivate(),
                this.parentContexts.onChildOutletDestroyed(_)),
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
            const _ = this.location,
              P = l.snapshot.component,
              te = this.parentContexts.getOrCreateContext(this.name).children,
              Ue = new Jr(l, te, _.injector);
            if (
              p &&
              (function fr(d) {
                return !!d.resolveComponentFactory;
              })(p)
            ) {
              const lt = p.resolveComponentFactory(P);
              this.activated = _.createComponent(lt, _.length, Ue);
            } else
              this.activated = _.createComponent(P, {
                index: _.length,
                injector: Ue,
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
      class Jr {
        constructor(f, l, p) {
          (this.route = f), (this.childContexts = l), (this.parent = p);
        }
        get(f, l) {
          return f === Sn
            ? this.route
            : f === Jn
            ? this.childContexts
            : this.parent.get(f, l);
        }
      }
      let eo = (() => {
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
            dependencies: [Go],
            encapsulation: 2,
          })),
          d
        );
      })();
      function to(d, f) {
        return (
          d.providers &&
            !d._injector &&
            (d._injector = (0, o.MMx)(d.providers, f, `Route: ${d.path}`)),
          d._injector ?? f
        );
      }
      function Hn(d) {
        const f = d.children && d.children.map(Hn),
          l = f ? { ...d, children: f } : { ...d };
        return (
          !l.component &&
            !l.loadComponent &&
            (f || l.loadChildren) &&
            l.outlet &&
            l.outlet !== at &&
            (l.component = eo),
          l
        );
      }
      function Yn(d) {
        return d.outlet || at;
      }
      function mo(d, f) {
        const l = d.filter((p) => Yn(p) === f);
        return l.push(...d.filter((p) => Yn(p) !== f)), l;
      }
      function Or(d) {
        if (!d) return null;
        if (d.routeConfig?._injector) return d.routeConfig._injector;
        for (let f = d.parent; f; f = f.parent) {
          const l = f.routeConfig;
          if (l?._loadedInjector) return l._loadedInjector;
          if (l?._injector) return l._injector;
        }
        return null;
      }
      class Ci {
        constructor(f, l, p, _) {
          (this.routeReuseStrategy = f),
            (this.futureState = l),
            (this.currState = p),
            (this.forwardEvent = _);
        }
        activate(f) {
          const l = this.futureState._root,
            p = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(l, p, f),
            To(this.futureState.root),
            this.activateChildRoutes(l, p, f);
        }
        deactivateChildRoutes(f, l, p) {
          const _ = Fn(l);
          f.children.forEach((S) => {
            const P = S.value.outlet;
            this.deactivateRoutes(S, _[P], p), delete _[P];
          }),
            Ht(_, (S, P) => {
              this.deactivateRouteAndItsChildren(S, p);
            });
        }
        deactivateRoutes(f, l, p) {
          const _ = f.value,
            S = l ? l.value : null;
          if (_ === S)
            if (_.component) {
              const P = p.getContext(_.outlet);
              P && this.deactivateChildRoutes(f, l, P.children);
            } else this.deactivateChildRoutes(f, l, p);
          else S && this.deactivateRouteAndItsChildren(l, p);
        }
        deactivateRouteAndItsChildren(f, l) {
          f.value.component &&
          this.routeReuseStrategy.shouldDetach(f.value.snapshot)
            ? this.detachAndStoreRouteSubtree(f, l)
            : this.deactivateRouteAndOutlet(f, l);
        }
        detachAndStoreRouteSubtree(f, l) {
          const p = l.getContext(f.value.outlet),
            _ = p && f.value.component ? p.children : l,
            S = Fn(f);
          for (const P of Object.keys(S))
            this.deactivateRouteAndItsChildren(S[P], _);
          if (p && p.outlet) {
            const P = p.outlet.detach(),
              te = p.children.onOutletDeactivated();
            this.routeReuseStrategy.store(f.value.snapshot, {
              componentRef: P,
              route: f,
              contexts: te,
            });
          }
        }
        deactivateRouteAndOutlet(f, l) {
          const p = l.getContext(f.value.outlet),
            _ = p && f.value.component ? p.children : l,
            S = Fn(f);
          for (const P of Object.keys(S))
            this.deactivateRouteAndItsChildren(S[P], _);
          p &&
            p.outlet &&
            (p.outlet.deactivate(),
            p.children.onOutletDeactivated(),
            (p.attachRef = null),
            (p.resolver = null),
            (p.route = null));
        }
        activateChildRoutes(f, l, p) {
          const _ = Fn(l);
          f.children.forEach((S) => {
            this.activateRoutes(S, _[S.value.outlet], p),
              this.forwardEvent(new Mo(S.value.snapshot));
          }),
            f.children.length && this.forwardEvent(new So(f.value.snapshot));
        }
        activateRoutes(f, l, p) {
          const _ = f.value,
            S = l ? l.value : null;
          if ((To(_), _ === S))
            if (_.component) {
              const P = p.getOrCreateContext(_.outlet);
              this.activateChildRoutes(f, l, P.children);
            } else this.activateChildRoutes(f, l, p);
          else if (_.component) {
            const P = p.getOrCreateContext(_.outlet);
            if (this.routeReuseStrategy.shouldAttach(_.snapshot)) {
              const te = this.routeReuseStrategy.retrieve(_.snapshot);
              this.routeReuseStrategy.store(_.snapshot, null),
                P.children.onOutletReAttached(te.contexts),
                (P.attachRef = te.componentRef),
                (P.route = te.route.value),
                P.outlet && P.outlet.attach(te.componentRef, te.route.value),
                To(te.route.value),
                this.activateChildRoutes(f, null, P.children);
            } else {
              const te = Or(_.snapshot),
                Ue = te?.get(o._Vd) ?? null;
              (P.attachRef = null),
                (P.route = _),
                (P.resolver = Ue),
                (P.injector = te),
                P.outlet && P.outlet.activateWith(_, P.injector),
                this.activateChildRoutes(f, null, P.children);
            }
          } else this.activateChildRoutes(f, null, p);
        }
      }
      class Dn {
        constructor(f) {
          (this.path = f), (this.route = this.path[this.path.length - 1]);
        }
      }
      class vo {
        constructor(f, l) {
          (this.component = f), (this.route = l);
        }
      }
      function _i(d, f, l) {
        const p = d._root;
        return oo(p, f ? f._root : null, l, [p.value]);
      }
      function Mn(d, f) {
        const l = Symbol(),
          p = f.get(d, l);
        return p === l
          ? 'function' != typeof d || (0, o.Z0I)(d)
            ? f.get(d)
            : d
          : p;
      }
      function oo(
        d,
        f,
        l,
        p,
        _ = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const S = Fn(f);
        return (
          d.children.forEach((P) => {
            (function Po(
              d,
              f,
              l,
              p,
              _ = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const S = d.value,
                P = f ? f.value : null,
                te = l ? l.getContext(d.value.outlet) : null;
              if (P && S.routeConfig === P.routeConfig) {
                const Ue = (function io(d, f, l) {
                  if ('function' == typeof l) return l(d, f);
                  switch (l) {
                    case 'pathParamsChange':
                      return !Gt(d.url, f.url);
                    case 'pathParamsOrQueryParamsChange':
                      return (
                        !Gt(d.url, f.url) || !Zt(d.queryParams, f.queryParams)
                      );
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !Qr(d, f) || !Zt(d.queryParams, f.queryParams);
                    default:
                      return !Qr(d, f);
                  }
                })(P, S, S.routeConfig.runGuardsAndResolvers);
                Ue
                  ? _.canActivateChecks.push(new Dn(p))
                  : ((S.data = P.data), (S._resolvedData = P._resolvedData)),
                  oo(d, f, S.component ? (te ? te.children : null) : l, p, _),
                  Ue &&
                    te &&
                    te.outlet &&
                    te.outlet.isActivated &&
                    _.canDeactivateChecks.push(new vo(te.outlet.component, P));
              } else
                P && jn(f, te, _),
                  _.canActivateChecks.push(new Dn(p)),
                  oo(
                    d,
                    null,
                    S.component ? (te ? te.children : null) : l,
                    p,
                    _
                  );
            })(P, S[P.value.outlet], l, p.concat([P.value]), _),
              delete S[P.value.outlet];
          }),
          Ht(S, (P, te) => jn(P, l.getContext(te), _)),
          _
        );
      }
      function jn(d, f, l) {
        const p = Fn(d),
          _ = d.value;
        Ht(p, (S, P) => {
          jn(S, _.component ? (f ? f.children.getContext(P) : null) : f, l);
        }),
          l.canDeactivateChecks.push(
            new vo(
              _.component && f && f.outlet && f.outlet.isActivated
                ? f.outlet.component
                : null,
              _
            )
          );
      }
      function un(d) {
        return 'function' == typeof d;
      }
      function c(d) {
        return d instanceof re || 'EmptyError' === d?.name;
      }
      const C = Symbol('INITIAL_VALUE');
      function F() {
        return (0, Le.w)((d) =>
          Ee(
            d.map((f) =>
              f.pipe(
                pe(1),
                (function me(...d) {
                  const f = (0, Y.yG)(d);
                  return (0, k.e)((l, p) => {
                    (f ? fe(d, l, f) : fe(d, l)).subscribe(p);
                  });
                })(C)
              )
            )
          ).pipe(
            (0, q.U)((f) => {
              for (const l of f)
                if (!0 !== l) {
                  if (l === C) return C;
                  if (!1 === l || l instanceof yn) return l;
                }
              return !0;
            }),
            (0, oe.h)((f) => f !== C),
            pe(1)
          )
        );
      }
      function Wn(d) {
        return (0, xe.z)(
          (0, Ze.b)((f) => {
            if (In(f)) throw Uo(0, f);
          }),
          (0, q.U)((f) => !0 === f)
        );
      }
      const xr = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function Ei(d, f, l, p, _) {
        const S = _s(d, f, l);
        return S.matched
          ? (function hr(d, f, l, p) {
              const _ = f.canMatch;
              return _ && 0 !== _.length
                ? W(
                    _.map((P) => {
                      const te = Mn(P, d);
                      return Yt(
                        (function se(d) {
                          return d && un(d.canMatch);
                        })(te)
                          ? te.canMatch(f, l)
                          : d.runInContext(() => te(f, l))
                      );
                    })
                  ).pipe(F(), Wn())
                : W(!0);
            })((p = to(f, p)), f, l).pipe(
              (0, q.U)((P) => (!0 === P ? S : { ...xr }))
            )
          : W(S);
      }
      function _s(d, f, l) {
        if ('' === f.path)
          return 'full' === f.pathMatch && (d.hasChildren() || l.length > 0)
            ? { ...xr }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: l,
                parameters: {},
                positionalParamSegments: {},
              };
        const _ = (f.matcher || qt)(l, d, f);
        if (!_) return { ...xr };
        const S = {};
        Ht(_.posParams, (te, Ue) => {
          S[Ue] = te.path;
        });
        const P =
          _.consumed.length > 0
            ? { ...S, ..._.consumed[_.consumed.length - 1].parameters }
            : S;
        return {
          matched: !0,
          consumedSegments: _.consumed,
          remainingSegments: l.slice(_.consumed.length),
          parameters: P,
          positionalParamSegments: _.posParams ?? {},
        };
      }
      function bi(d, f, l, p) {
        if (
          l.length > 0 &&
          (function pr(d, f, l) {
            return l.some((p) => si(d, f, p) && Yn(p) !== at);
          })(d, l, p)
        ) {
          const S = new St(
            f,
            (function Es(d, f, l, p) {
              const _ = {};
              (_[at] = p),
                (p._sourceSegment = d),
                (p._segmentIndexShift = f.length);
              for (const S of l)
                if ('' === S.path && Yn(S) !== at) {
                  const P = new St([], {});
                  (P._sourceSegment = d),
                    (P._segmentIndexShift = f.length),
                    (_[Yn(S)] = P);
                }
              return _;
            })(d, f, p, new St(l, d.children))
          );
          return (
            (S._sourceSegment = d),
            (S._segmentIndexShift = f.length),
            { segmentGroup: S, slicedSegments: [] }
          );
        }
        if (
          0 === l.length &&
          (function so(d, f, l) {
            return l.some((p) => si(d, f, p));
          })(d, l, p)
        ) {
          const S = new St(
            d.segments,
            (function hl(d, f, l, p, _) {
              const S = {};
              for (const P of p)
                if (si(d, l, P) && !_[Yn(P)]) {
                  const te = new St([], {});
                  (te._sourceSegment = d),
                    (te._segmentIndexShift = f.length),
                    (S[Yn(P)] = te);
                }
              return { ..._, ...S };
            })(d, f, l, p, d.children)
          );
          return (
            (S._sourceSegment = d),
            (S._segmentIndexShift = f.length),
            { segmentGroup: S, slicedSegments: l }
          );
        }
        const _ = new St(d.segments, d.children);
        return (
          (_._sourceSegment = d),
          (_._segmentIndexShift = f.length),
          { segmentGroup: _, slicedSegments: l }
        );
      }
      function si(d, f, l) {
        return (
          (!(d.hasChildren() || f.length > 0) || 'full' !== l.pathMatch) &&
          '' === l.path
        );
      }
      function yo(d, f, l, p) {
        return (
          !!(Yn(d) === p || (p !== at && si(f, l, d))) &&
          ('**' === d.path || _s(f, d, l).matched)
        );
      }
      function Yr(d, f, l) {
        return 0 === f.length && !d.children[l];
      }
      const ai = !1;
      class qo {
        constructor(f) {
          this.segmentGroup = f || null;
        }
      }
      class bs {
        constructor(f) {
          this.urlTree = f;
        }
      }
      function li(d) {
        return z(new qo(d));
      }
      function wi(d) {
        return z(new bs(d));
      }
      class pa {
        constructor(f, l, p, _, S) {
          (this.injector = f),
            (this.configLoader = l),
            (this.urlSerializer = p),
            (this.urlTree = _),
            (this.config = S),
            (this.allowRedirects = !0);
        }
        apply() {
          const f = bi(this.urlTree.root, [], [], this.config).segmentGroup,
            l = new St(f.segments, f.children);
          return this.expandSegmentGroup(this.injector, this.config, l, at)
            .pipe(
              (0, q.U)((S) =>
                this.createUrlTree(
                  fn(S),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              pt((S) => {
                if (S instanceof bs)
                  return (this.allowRedirects = !1), this.match(S.urlTree);
                throw S instanceof qo ? this.noMatchError(S) : S;
              })
            );
        }
        match(f) {
          return this.expandSegmentGroup(this.injector, this.config, f.root, at)
            .pipe(
              (0, q.U)((_) =>
                this.createUrlTree(fn(_), f.queryParams, f.fragment)
              )
            )
            .pipe(
              pt((_) => {
                throw _ instanceof qo ? this.noMatchError(_) : _;
              })
            );
        }
        noMatchError(f) {
          return new o.vHH(4002, ai);
        }
        createUrlTree(f, l, p) {
          const _ = Tn(f);
          return new yn(_, l, p);
        }
        expandSegmentGroup(f, l, p, _) {
          return 0 === p.segments.length && p.hasChildren()
            ? this.expandChildren(f, l, p).pipe((0, q.U)((S) => new St([], S)))
            : this.expandSegment(f, p, l, p.segments, _, !0);
        }
        expandChildren(f, l, p) {
          const _ = [];
          for (const S of Object.keys(p.children))
            'primary' === S ? _.unshift(S) : _.push(S);
          return (0, L.D)(_).pipe(
            nt((S) => {
              const P = p.children[S],
                te = mo(l, S);
              return this.expandSegmentGroup(f, te, P, S).pipe(
                (0, q.U)((Ue) => ({ segment: Ue, outlet: S }))
              );
            }),
            dt((S, P) => ((S[P.outlet] = P.segment), S), {}),
            At()
          );
        }
        expandSegment(f, l, p, _, S, P) {
          return (0, L.D)(p).pipe(
            nt((te) =>
              this.expandSegmentAgainstRoute(f, l, p, te, _, S, P).pipe(
                pt((lt) => {
                  if (lt instanceof qo) return W(null);
                  throw lt;
                })
              )
            ),
            qe((te) => !!te),
            pt((te, Ue) => {
              if (c(te)) return Yr(l, _, S) ? W(new St([], {})) : li(l);
              throw te;
            })
          );
        }
        expandSegmentAgainstRoute(f, l, p, _, S, P, te) {
          return yo(_, l, S, P)
            ? void 0 === _.redirectTo
              ? this.matchSegmentAgainstRoute(f, l, _, S, P)
              : te && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(f, l, p, _, S, P)
              : li(l)
            : li(l);
        }
        expandSegmentAgainstRouteUsingRedirect(f, l, p, _, S, P) {
          return '**' === _.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(f, p, _, P)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                f,
                l,
                p,
                _,
                S,
                P
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(f, l, p, _) {
          const S = this.applyRedirectCommands([], p.redirectTo, {});
          return p.redirectTo.startsWith('/')
            ? wi(S)
            : this.lineralizeSegments(p, S).pipe(
                (0, He.z)((P) => {
                  const te = new St(P, {});
                  return this.expandSegment(f, te, l, P, _, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(f, l, p, _, S, P) {
          const {
            matched: te,
            consumedSegments: Ue,
            remainingSegments: lt,
            positionalParamSegments: ct,
          } = _s(l, _, S);
          if (!te) return li(l);
          const xt = this.applyRedirectCommands(Ue, _.redirectTo, ct);
          return _.redirectTo.startsWith('/')
            ? wi(xt)
            : this.lineralizeSegments(_, xt).pipe(
                (0, He.z)((Un) =>
                  this.expandSegment(f, l, p, Un.concat(lt), P, !1)
                )
              );
        }
        matchSegmentAgainstRoute(f, l, p, _, S) {
          return '**' === p.path
            ? ((f = to(p, f)),
              p.loadChildren
                ? (p._loadedRoutes
                    ? W({
                        routes: p._loadedRoutes,
                        injector: p._loadedInjector,
                      })
                    : this.configLoader.loadChildren(f, p)
                  ).pipe(
                    (0, q.U)(
                      (te) => (
                        (p._loadedRoutes = te.routes),
                        (p._loadedInjector = te.injector),
                        new St(_, {})
                      )
                    )
                  )
                : W(new St(_, {})))
            : Ei(l, p, _, f).pipe(
                (0, Le.w)(
                  ({
                    matched: P,
                    consumedSegments: te,
                    remainingSegments: Ue,
                  }) =>
                    P
                      ? this.getChildConfig((f = p._injector ?? f), p, _).pipe(
                          (0, He.z)((ct) => {
                            const xt = ct.injector ?? f,
                              Un = ct.routes,
                              { segmentGroup: No, slicedSegments: _o } = bi(
                                l,
                                te,
                                Ue,
                                Un
                              ),
                              pi = new St(No.segments, No.children);
                            if (0 === _o.length && pi.hasChildren())
                              return this.expandChildren(xt, Un, pi).pipe(
                                (0, q.U)((Bs) => new St(te, Bs))
                              );
                            if (0 === Un.length && 0 === _o.length)
                              return W(new St(te, {}));
                            const ao = Yn(p) === S;
                            return this.expandSegment(
                              xt,
                              pi,
                              Un,
                              _o,
                              ao ? at : S,
                              !0
                            ).pipe(
                              (0, q.U)(
                                (Dr) =>
                                  new St(te.concat(Dr.segments), Dr.children)
                              )
                            );
                          })
                        )
                      : li(l)
                )
              );
        }
        getChildConfig(f, l, p) {
          return l.children
            ? W({ routes: l.children, injector: f })
            : l.loadChildren
            ? void 0 !== l._loadedRoutes
              ? W({ routes: l._loadedRoutes, injector: l._loadedInjector })
              : (function yr(d, f, l, p) {
                  const _ = f.canLoad;
                  return void 0 === _ || 0 === _.length
                    ? W(!0)
                    : W(
                        _.map((P) => {
                          const te = Mn(P, d);
                          return Yt(
                            (function b(d) {
                              return d && un(d.canLoad);
                            })(te)
                              ? te.canLoad(f, l)
                              : d.runInContext(() => te(f, l))
                          );
                        })
                      ).pipe(F(), Wn());
                })(f, l, p).pipe(
                  (0, He.z)((_) =>
                    _
                      ? this.configLoader.loadChildren(f, l).pipe(
                          (0, Ze.b)((S) => {
                            (l._loadedRoutes = S.routes),
                              (l._loadedInjector = S.injector);
                          })
                        )
                      : (function ws(d) {
                          return z(Oo(ai, 3));
                        })()
                  )
                )
            : W({ routes: [], injector: f });
        }
        lineralizeSegments(f, l) {
          let p = [],
            _ = l.root;
          for (;;) {
            if (((p = p.concat(_.segments)), 0 === _.numberOfChildren))
              return W(p);
            if (_.numberOfChildren > 1 || !_.children[at])
              return z(new o.vHH(4e3, ai));
            _ = _.children[at];
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
        applyRedirectCreateUrlTree(f, l, p, _) {
          const S = this.createSegmentGroup(f, l.root, p, _);
          return new yn(
            S,
            this.createQueryParams(l.queryParams, this.urlTree.queryParams),
            l.fragment
          );
        }
        createQueryParams(f, l) {
          const p = {};
          return (
            Ht(f, (_, S) => {
              if ('string' == typeof _ && _.startsWith(':')) {
                const te = _.substring(1);
                p[S] = l[te];
              } else p[S] = _;
            }),
            p
          );
        }
        createSegmentGroup(f, l, p, _) {
          const S = this.createSegments(f, l.segments, p, _);
          let P = {};
          return (
            Ht(l.children, (te, Ue) => {
              P[Ue] = this.createSegmentGroup(f, te, p, _);
            }),
            new St(S, P)
          );
        }
        createSegments(f, l, p, _) {
          return l.map((S) =>
            S.path.startsWith(':')
              ? this.findPosParam(f, S, _)
              : this.findOrReturn(S, p)
          );
        }
        findPosParam(f, l, p) {
          const _ = p[l.path.substring(1)];
          if (!_) throw new o.vHH(4001, ai);
          return _;
        }
        findOrReturn(f, l) {
          let p = 0;
          for (const _ of l) {
            if (_.path === f.path) return l.splice(p), _;
            p++;
          }
          return f;
        }
      }
      class I {}
      class X {
        constructor(f, l, p, _, S, P, te) {
          (this.injector = f),
            (this.rootComponentType = l),
            (this.config = p),
            (this.urlTree = _),
            (this.url = S),
            (this.paramsInheritanceStrategy = P),
            (this.urlSerializer = te);
        }
        recognize() {
          const f = bi(
            this.urlTree.root,
            [],
            [],
            this.config.filter((l) => void 0 === l.redirectTo)
          ).segmentGroup;
          return this.processSegmentGroup(
            this.injector,
            this.config,
            f,
            at
          ).pipe(
            (0, q.U)((l) => {
              if (null === l) return null;
              const p = new kr(
                  [],
                  Object.freeze({}),
                  Object.freeze({ ...this.urlTree.queryParams }),
                  this.urlTree.fragment,
                  {},
                  at,
                  this.rootComponentType,
                  null,
                  this.urlTree.root,
                  -1,
                  {}
                ),
                _ = new en(p, l),
                S = new Ao(this.url, _);
              return this.inheritParamsAndData(S._root), S;
            })
          );
        }
        inheritParamsAndData(f) {
          const l = f.value,
            p = Lr(l, this.paramsInheritanceStrategy);
          (l.params = Object.freeze(p.params)),
            (l.data = Object.freeze(p.data)),
            f.children.forEach((_) => this.inheritParamsAndData(_));
        }
        processSegmentGroup(f, l, p, _) {
          return 0 === p.segments.length && p.hasChildren()
            ? this.processChildren(f, l, p)
            : this.processSegment(f, l, p, p.segments, _);
        }
        processChildren(f, l, p) {
          return (0, L.D)(Object.keys(p.children)).pipe(
            nt((_) => {
              const S = p.children[_],
                P = mo(l, _);
              return this.processSegmentGroup(f, P, S, _);
            }),
            dt((_, S) => (_ && S ? (_.push(...S), _) : null)),
            (function We(d, f = !1) {
              return (0, k.e)((l, p) => {
                let _ = 0;
                l.subscribe(
                  (0, ce.x)(p, (S) => {
                    const P = d(S, _++);
                    (P || f) && p.next(S), !P && p.complete();
                  })
                );
              });
            })((_) => null !== _),
            je(null),
            At(),
            (0, q.U)((_) => {
              if (null === _) return null;
              const S = Mt(_);
              return (
                (function Re(d) {
                  d.sort((f, l) =>
                    f.value.outlet === at
                      ? -1
                      : l.value.outlet === at
                      ? 1
                      : f.value.outlet.localeCompare(l.value.outlet)
                  );
                })(S),
                S
              );
            })
          );
        }
        processSegment(f, l, p, _, S) {
          return (0, L.D)(l).pipe(
            nt((P) =>
              this.processSegmentAgainstRoute(P._injector ?? f, P, p, _, S)
            ),
            qe((P) => !!P),
            pt((P) => {
              if (c(P)) return Yr(p, _, S) ? W([]) : W(null);
              throw P;
            })
          );
        }
        processSegmentAgainstRoute(f, l, p, _, S) {
          if (l.redirectTo || !yo(l, p, _, S)) return W(null);
          let P;
          if ('**' === l.path) {
            const te = _.length > 0 ? ft(_).parameters : {},
              Ue = $t(p) + _.length;
            P = W({
              snapshot: new kr(
                _,
                te,
                Object.freeze({ ...this.urlTree.queryParams }),
                this.urlTree.fragment,
                tn(l),
                Yn(l),
                l.component ?? l._loadedComponent ?? null,
                l,
                Et(p),
                Ue,
                Xn(l)
              ),
              consumedSegments: [],
              remainingSegments: [],
            });
          } else
            P = Ei(p, l, _, f).pipe(
              (0, q.U)(
                ({
                  matched: te,
                  consumedSegments: Ue,
                  remainingSegments: lt,
                  parameters: ct,
                }) => {
                  if (!te) return null;
                  const xt = $t(p) + Ue.length;
                  return {
                    snapshot: new kr(
                      Ue,
                      ct,
                      Object.freeze({ ...this.urlTree.queryParams }),
                      this.urlTree.fragment,
                      tn(l),
                      Yn(l),
                      l.component ?? l._loadedComponent ?? null,
                      l,
                      Et(p),
                      xt,
                      Xn(l)
                    ),
                    consumedSegments: Ue,
                    remainingSegments: lt,
                  };
                }
              )
            );
          return P.pipe(
            (0, Le.w)((te) => {
              if (null === te) return W(null);
              const {
                snapshot: Ue,
                consumedSegments: lt,
                remainingSegments: ct,
              } = te;
              f = l._injector ?? f;
              const xt = l._loadedInjector ?? f,
                Un = (function ze(d) {
                  return d.children
                    ? d.children
                    : d.loadChildren
                    ? d._loadedRoutes
                    : [];
                })(l),
                { segmentGroup: No, slicedSegments: _o } = bi(
                  p,
                  lt,
                  ct,
                  Un.filter((ao) => void 0 === ao.redirectTo)
                );
              if (0 === _o.length && No.hasChildren())
                return this.processChildren(xt, Un, No).pipe(
                  (0, q.U)((ao) => (null === ao ? null : [new en(Ue, ao)]))
                );
              if (0 === Un.length && 0 === _o.length)
                return W([new en(Ue, [])]);
              const pi = Yn(l) === S;
              return this.processSegment(xt, Un, No, _o, pi ? at : S).pipe(
                (0, q.U)((ao) => (null === ao ? null : [new en(Ue, ao)]))
              );
            })
          );
        }
      }
      function yt(d) {
        const f = d.value.routeConfig;
        return f && '' === f.path && void 0 === f.redirectTo;
      }
      function Mt(d) {
        const f = [],
          l = new Set();
        for (const p of d) {
          if (!yt(p)) {
            f.push(p);
            continue;
          }
          const _ = f.find((S) => p.value.routeConfig === S.value.routeConfig);
          void 0 !== _ ? (_.children.push(...p.children), l.add(_)) : f.push(p);
        }
        for (const p of l) {
          const _ = Mt(p.children);
          f.push(new en(p.value, _));
        }
        return f.filter((p) => !l.has(p));
      }
      function Et(d) {
        let f = d;
        for (; f._sourceSegment; ) f = f._sourceSegment;
        return f;
      }
      function $t(d) {
        let f = d,
          l = f._segmentIndexShift ?? 0;
        for (; f._sourceSegment; )
          (f = f._sourceSegment), (l += f._segmentIndexShift ?? 0);
        return l - 1;
      }
      function tn(d) {
        return d.data || {};
      }
      function Xn(d) {
        return d.resolve || {};
      }
      function ci(d) {
        return 'string' == typeof d.title || null === d.title;
      }
      function Ss(d) {
        return (0, Le.w)((f) => {
          const l = d(f);
          return l ? (0, L.D)(l).pipe((0, q.U)(() => f)) : W(f);
        });
      }
      const fi = new o.OlP('ROUTES');
      let Ms = (() => {
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
                (0, q.U)(Gi),
                (0, Ze.b)((S) => {
                  this.onLoadEndListener && this.onLoadEndListener(l),
                    (l._loadedComponent = S);
                }),
                En(() => {
                  this.componentLoaders.delete(l);
                })
              ),
              _ = new U(p, () => new A.x()).pipe(V());
            return this.componentLoaders.set(l, _), _;
          }
          loadChildren(l, p) {
            if (this.childrenLoaders.get(p)) return this.childrenLoaders.get(p);
            if (p._loadedRoutes)
              return W({
                routes: p._loadedRoutes,
                injector: p._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(p);
            const S = this.loadModuleFactoryOrRoutes(p.loadChildren).pipe(
                (0, q.U)((te) => {
                  this.onLoadEndListener && this.onLoadEndListener(p);
                  let Ue,
                    lt,
                    ct = !1;
                  Array.isArray(te)
                    ? (lt = te)
                    : ((Ue = te.create(l).injector),
                      (lt = Ut(Ue.get(fi, [], o.XFs.Self | o.XFs.Optional))));
                  return { routes: lt.map(Hn), injector: Ue };
                }),
                En(() => {
                  this.childrenLoaders.delete(p);
                })
              ),
              P = new U(S, () => new A.x()).pipe(V());
            return this.childrenLoaders.set(p, P), P;
          }
          loadModuleFactoryOrRoutes(l) {
            return Yt(l()).pipe(
              (0, q.U)(Gi),
              (0, He.z)((_) =>
                _ instanceof o.YKP || Array.isArray(_)
                  ? W(_)
                  : (0, L.D)(this.compiler.compileModuleAsync(_))
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
      function Gi(d) {
        return (function As(d) {
          return d && 'object' == typeof d && 'default' in d;
        })(d)
          ? d.default
          : d;
      }
      let Ts = (() => {
        class d {
          constructor() {
            (this.currentNavigation = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new A.x()),
              (this.configLoader = (0, o.f3M)(Ms)),
              (this.environmentInjector = (0, o.f3M)(o.lqb)),
              (this.urlSerializer = (0, o.f3M)(rn)),
              (this.rootContexts = (0, o.f3M)(Jn)),
              (this.navigationId = 0),
              (this.configLoader.onLoadEndListener = (_) =>
                this.events.next(new uo(_))),
              (this.configLoader.onLoadStartListener = (_) =>
                this.events.next(new Mr(_)));
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
                (0, oe.h)((p) => 0 !== p.id),
                (0, q.U)((p) => ({
                  ...p,
                  extractedUrl: l.urlHandlingStrategy.extract(p.rawUrl),
                })),
                (0, Le.w)((p) => {
                  let _ = !1,
                    S = !1;
                  return W(p).pipe(
                    (0, Ze.b)((P) => {
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
                    (0, Le.w)((P) => {
                      const te = l.browserUrlTree.toString(),
                        Ue =
                          !l.navigated ||
                          P.extractedUrl.toString() !== te ||
                          te !== l.currentUrlTree.toString();
                      if (
                        ('reload' === l.onSameUrlNavigation || Ue) &&
                        l.urlHandlingStrategy.shouldProcessUrl(P.rawUrl)
                      )
                        return (
                          pl(P.source) && (l.browserUrlTree = P.extractedUrl),
                          W(P).pipe(
                            (0, Le.w)((ct) => {
                              const xt = this.transitions?.getValue();
                              return (
                                this.events.next(
                                  new Je(
                                    ct.id,
                                    this.urlSerializer.serialize(
                                      ct.extractedUrl
                                    ),
                                    ct.source,
                                    ct.restoredState
                                  )
                                ),
                                xt !== this.transitions?.getValue()
                                  ? ie.E
                                  : Promise.resolve(ct)
                              );
                            }),
                            (function Is(d, f, l, p) {
                              return (0, Le.w)((_) =>
                                (function Ui(d, f, l, p, _) {
                                  return new pa(d, f, l, p, _).apply();
                                })(d, f, l, _.extractedUrl, p).pipe(
                                  (0, q.U)((S) => ({
                                    ..._,
                                    urlAfterRedirects: S,
                                  }))
                                )
                              );
                            })(
                              this.environmentInjector,
                              this.configLoader,
                              this.urlSerializer,
                              l.config
                            ),
                            (0, Ze.b)((ct) => {
                              (this.currentNavigation = {
                                ...this.currentNavigation,
                                finalUrl: ct.urlAfterRedirects,
                              }),
                                (p.urlAfterRedirects = ct.urlAfterRedirects);
                            }),
                            (function Do(d, f, l, p, _) {
                              return (0, He.z)((S) =>
                                (function O(d, f, l, p, _, S, P = 'emptyOnly') {
                                  return new X(d, f, l, p, _, P, S)
                                    .recognize()
                                    .pipe(
                                      (0, Le.w)((te) =>
                                        null === te
                                          ? (function y(d) {
                                              return new Fe.y((f) =>
                                                f.error(d)
                                              );
                                            })(new I())
                                          : W(te)
                                      )
                                    );
                                })(
                                  d,
                                  f,
                                  l,
                                  S.urlAfterRedirects,
                                  p.serialize(S.urlAfterRedirects),
                                  p,
                                  _
                                ).pipe(
                                  (0, q.U)((P) => ({ ...S, targetSnapshot: P }))
                                )
                              );
                            })(
                              this.environmentInjector,
                              l.rootComponentType,
                              l.config,
                              this.urlSerializer,
                              l.paramsInheritanceStrategy
                            ),
                            (0, Ze.b)((ct) => {
                              if (
                                ((p.targetSnapshot = ct.targetSnapshot),
                                'eager' === l.urlUpdateStrategy)
                              ) {
                                if (!ct.extras.skipLocationChange) {
                                  const Un = l.urlHandlingStrategy.merge(
                                    ct.urlAfterRedirects,
                                    ct.rawUrl
                                  );
                                  l.setBrowserUrl(Un, ct);
                                }
                                l.browserUrlTree = ct.urlAfterRedirects;
                              }
                              const xt = new Rn(
                                ct.id,
                                this.urlSerializer.serialize(ct.extractedUrl),
                                this.urlSerializer.serialize(
                                  ct.urlAfterRedirects
                                ),
                                ct.targetSnapshot
                              );
                              this.events.next(xt);
                            })
                          )
                        );
                      if (
                        Ue &&
                        l.rawUrlTree &&
                        l.urlHandlingStrategy.shouldProcessUrl(l.rawUrlTree)
                      ) {
                        const {
                            id: xt,
                            extractedUrl: Un,
                            source: No,
                            restoredState: _o,
                            extras: pi,
                          } = P,
                          ao = new Je(
                            xt,
                            this.urlSerializer.serialize(Un),
                            No,
                            _o
                          );
                        this.events.next(ao);
                        const $s = Nr(Un, l.rootComponentType).snapshot;
                        return W(
                          (p = {
                            ...P,
                            targetSnapshot: $s,
                            urlAfterRedirects: Un,
                            extras: {
                              ...pi,
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            },
                          })
                        );
                      }
                      return (l.rawUrlTree = P.rawUrl), P.resolve(null), ie.E;
                    }),
                    (0, Ze.b)((P) => {
                      const te = new cn(
                        P.id,
                        this.urlSerializer.serialize(P.extractedUrl),
                        this.urlSerializer.serialize(P.urlAfterRedirects),
                        P.targetSnapshot
                      );
                      this.events.next(te);
                    }),
                    (0, q.U)(
                      (P) =>
                        (p = {
                          ...P,
                          guards: _i(
                            P.targetSnapshot,
                            P.currentSnapshot,
                            this.rootContexts
                          ),
                        })
                    ),
                    (function Se(d, f) {
                      return (0, He.z)((l) => {
                        const {
                          targetSnapshot: p,
                          currentSnapshot: _,
                          guards: {
                            canActivateChecks: S,
                            canDeactivateChecks: P,
                          },
                        } = l;
                        return 0 === P.length && 0 === S.length
                          ? W({ ...l, guardsResult: !0 })
                          : (function et(d, f, l, p) {
                              return (0, L.D)(d).pipe(
                                (0, He.z)((_) =>
                                  (function zt(d, f, l, p, _) {
                                    const S =
                                      f && f.routeConfig
                                        ? f.routeConfig.canDeactivate
                                        : null;
                                    return S && 0 !== S.length
                                      ? W(
                                          S.map((te) => {
                                            const Ue = Or(f) ?? _,
                                              lt = Mn(te, Ue);
                                            return Yt(
                                              (function R(d) {
                                                return d && un(d.canDeactivate);
                                              })(lt)
                                                ? lt.canDeactivate(d, f, l, p)
                                                : Ue.runInContext(() =>
                                                    lt(d, f, l, p)
                                                  )
                                            ).pipe(qe());
                                          })
                                        ).pipe(F())
                                      : W(!0);
                                  })(_.component, _.route, l, f, p)
                                ),
                                qe((_) => !0 !== _, !0)
                              );
                            })(P, p, _, d).pipe(
                              (0, He.z)((te) =>
                                te &&
                                (function Wo(d) {
                                  return 'boolean' == typeof d;
                                })(te)
                                  ? (function it(d, f, l, p) {
                                      return (0, L.D)(f).pipe(
                                        nt((_) =>
                                          fe(
                                            (function vt(d, f) {
                                              return (
                                                null !== d && f && f(new Wt(d)),
                                                W(!0)
                                              );
                                            })(_.route.parent, p),
                                            (function Ie(d, f) {
                                              return (
                                                null !== d && f && f(new Ur(d)),
                                                W(!0)
                                              );
                                            })(_.route, p),
                                            (function Jt(d, f, l) {
                                              const p = f[f.length - 1],
                                                S = f
                                                  .slice(0, f.length - 1)
                                                  .reverse()
                                                  .map((P) =>
                                                    (function Br(d) {
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
                                                    he(() =>
                                                      W(
                                                        P.guards.map((Ue) => {
                                                          const lt =
                                                              Or(P.node) ?? l,
                                                            ct = Mn(Ue, lt);
                                                          return Yt(
                                                            (function v(d) {
                                                              return (
                                                                d &&
                                                                un(
                                                                  d.canActivateChild
                                                                )
                                                              );
                                                            })(ct)
                                                              ? ct.canActivateChild(
                                                                  p,
                                                                  d
                                                                )
                                                              : lt.runInContext(
                                                                  () => ct(p, d)
                                                                )
                                                          ).pipe(qe());
                                                        })
                                                      ).pipe(F())
                                                    )
                                                  );
                                              return W(S).pipe(F());
                                            })(d, _.path, l),
                                            (function Cn(d, f, l) {
                                              const p = f.routeConfig
                                                ? f.routeConfig.canActivate
                                                : null;
                                              if (!p || 0 === p.length)
                                                return W(!0);
                                              const _ = p.map((S) =>
                                                he(() => {
                                                  const P = Or(f) ?? l,
                                                    te = Mn(S, P);
                                                  return Yt(
                                                    (function D(d) {
                                                      return (
                                                        d && un(d.canActivate)
                                                      );
                                                    })(te)
                                                      ? te.canActivate(f, d)
                                                      : P.runInContext(() =>
                                                          te(f, d)
                                                        )
                                                  ).pipe(qe());
                                                })
                                              );
                                              return W(_).pipe(F());
                                            })(d, _.route, l)
                                          )
                                        ),
                                        qe((_) => !0 !== _, !0)
                                      );
                                    })(p, S, d, f)
                                  : W(te)
                              ),
                              (0, q.U)((te) => ({ ...l, guardsResult: te }))
                            );
                      });
                    })(this.environmentInjector, (P) => this.events.next(P)),
                    (0, Ze.b)((P) => {
                      if (
                        ((p.guardsResult = P.guardsResult), In(P.guardsResult))
                      )
                        throw Uo(0, P.guardsResult);
                      const te = new Er(
                        P.id,
                        this.urlSerializer.serialize(P.extractedUrl),
                        this.urlSerializer.serialize(P.urlAfterRedirects),
                        P.targetSnapshot,
                        !!P.guardsResult
                      );
                      this.events.next(te);
                    }),
                    (0, oe.h)(
                      (P) =>
                        !!P.guardsResult ||
                        (l.restoreHistory(P),
                        this.cancelNavigationTransition(P, '', 3, l),
                        !1)
                    ),
                    Ss((P) => {
                      if (P.guards.canActivateChecks.length)
                        return W(P).pipe(
                          (0, Ze.b)((te) => {
                            const Ue = new Qn(
                              te.id,
                              this.urlSerializer.serialize(te.extractedUrl),
                              this.urlSerializer.serialize(
                                te.urlAfterRedirects
                              ),
                              te.targetSnapshot
                            );
                            this.events.next(Ue);
                          }),
                          (0, Le.w)((te) => {
                            let Ue = !1;
                            return W(te).pipe(
                              (function Vr(d, f) {
                                return (0, He.z)((l) => {
                                  const {
                                    targetSnapshot: p,
                                    guards: { canActivateChecks: _ },
                                  } = l;
                                  if (!_.length) return W(l);
                                  let S = 0;
                                  return (0, L.D)(_).pipe(
                                    nt((P) =>
                                      (function Hr(d, f, l, p) {
                                        const _ = d.routeConfig,
                                          S = d._resolve;
                                        return (
                                          void 0 !== _?.title &&
                                            !ci(_) &&
                                            (S[Nn] = _.title),
                                          (function Rr(d, f, l, p) {
                                            const _ = (function Co(d) {
                                              return [
                                                ...Object.keys(d),
                                                ...Object.getOwnPropertySymbols(
                                                  d
                                                ),
                                              ];
                                            })(d);
                                            if (0 === _.length) return W({});
                                            const S = {};
                                            return (0, L.D)(_).pipe(
                                              (0, He.z)((P) =>
                                                (function Xo(d, f, l, p) {
                                                  const _ = Or(f) ?? p,
                                                    S = Mn(d, _);
                                                  return Yt(
                                                    S.resolve
                                                      ? S.resolve(f, l)
                                                      : _.runInContext(() =>
                                                          S(f, l)
                                                        )
                                                  );
                                                })(d[P], f, l, p).pipe(
                                                  qe(),
                                                  (0, Ze.b)((te) => {
                                                    S[P] = te;
                                                  })
                                                )
                                              ),
                                              Pt(1),
                                              (function Bt(d) {
                                                return (0, q.U)(() => d);
                                              })(S),
                                              pt((P) => (c(P) ? ie.E : z(P)))
                                            );
                                          })(S, d, f, p).pipe(
                                            (0, q.U)(
                                              (P) => (
                                                (d._resolvedData = P),
                                                (d.data = Lr(d, l).resolve),
                                                _ &&
                                                  ci(_) &&
                                                  (d.data[Nn] = _.title),
                                                null
                                              )
                                            )
                                          )
                                        );
                                      })(P.route, p, d, f)
                                    ),
                                    (0, Ze.b)(() => S++),
                                    Pt(1),
                                    (0, He.z)((P) =>
                                      S === _.length ? W(l) : ie.E
                                    )
                                  );
                                });
                              })(
                                l.paramsInheritanceStrategy,
                                this.environmentInjector
                              ),
                              (0, Ze.b)({
                                next: () => (Ue = !0),
                                complete: () => {
                                  Ue ||
                                    (l.restoreHistory(te),
                                    this.cancelNavigationTransition(
                                      te,
                                      '',
                                      2,
                                      l
                                    ));
                                },
                              })
                            );
                          }),
                          (0, Ze.b)((te) => {
                            const Ue = new lr(
                              te.id,
                              this.urlSerializer.serialize(te.extractedUrl),
                              this.urlSerializer.serialize(
                                te.urlAfterRedirects
                              ),
                              te.targetSnapshot
                            );
                            this.events.next(Ue);
                          })
                        );
                    }),
                    Ss((P) => {
                      const te = (Ue) => {
                        const lt = [];
                        Ue.routeConfig?.loadComponent &&
                          !Ue.routeConfig._loadedComponent &&
                          lt.push(
                            this.configLoader
                              .loadComponent(Ue.routeConfig)
                              .pipe(
                                (0, Ze.b)((ct) => {
                                  Ue.component = ct;
                                }),
                                (0, q.U)(() => {})
                              )
                          );
                        for (const ct of Ue.children) lt.push(...te(ct));
                        return lt;
                      };
                      return Ee(te(P.targetSnapshot.root)).pipe(je(), pe(1));
                    }),
                    Ss(() => l.afterPreactivation()),
                    (0, q.U)((P) => {
                      const te = (function jo(d, f, l) {
                        const p = zr(d, f._root, l ? l._root : void 0);
                        return new Ar(p, f);
                      })(
                        l.routeReuseStrategy,
                        P.targetSnapshot,
                        P.currentRouterState
                      );
                      return (p = { ...P, targetRouterState: te });
                    }),
                    (0, Ze.b)((P) => {
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
                          new Ci(
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
                    (0, Ze.b)({
                      next: (P) => {
                        (_ = !0),
                          (this.lastSuccessfulNavigation =
                            this.currentNavigation),
                          (l.navigated = !0),
                          this.events.next(
                            new Lt(
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
                        _ = !0;
                      },
                    }),
                    En(() => {
                      _ || S || this.cancelNavigationTransition(p, '', 1, l),
                        this.currentNavigation?.id === p.id &&
                          (this.currentNavigation = null);
                    }),
                    pt((P) => {
                      if (((S = !0), xo(P))) {
                        po(P) || ((l.navigated = !0), l.restoreHistory(p, !0));
                        const te = new jt(
                          p.id,
                          this.urlSerializer.serialize(p.extractedUrl),
                          P.message,
                          P.cancellationCode
                        );
                        if ((this.events.next(te), po(P))) {
                          const Ue = l.urlHandlingStrategy.merge(
                              P.url,
                              l.rawUrlTree
                            ),
                            lt = {
                              skipLocationChange: p.extras.skipLocationChange,
                              replaceUrl:
                                'eager' === l.urlUpdateStrategy || pl(p.source),
                            };
                          l.scheduleNavigation(Ue, 'imperative', null, lt, {
                            resolve: p.resolve,
                            reject: p.reject,
                            promise: p.promise,
                          });
                        } else p.resolve(!1);
                      } else {
                        l.restoreHistory(p, !0);
                        const te = new Vn(
                          p.id,
                          this.urlSerializer.serialize(p.extractedUrl),
                          P,
                          p.targetSnapshot ?? void 0
                        );
                        this.events.next(te);
                        try {
                          p.resolve(l.errorHandler(P));
                        } catch (Ue) {
                          p.reject(Ue);
                        }
                      }
                      return ie.E;
                    })
                  );
                })
              )
            );
          }
          cancelNavigationTransition(l, p, _, S) {
            const P = new jt(
              l.id,
              this.urlSerializer.serialize(l.extractedUrl),
              p,
              _
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
      function pl(d) {
        return 'imperative' !== d;
      }
      let gl = (() => {
          class d {
            buildTitle(l) {
              let p,
                _ = l.root;
              for (; void 0 !== _; )
                (p = this.getResolvedTitleForRoute(_) ?? p),
                  (_ = _.children.find((S) => S.outlet === at));
              return p;
            }
            getResolvedTitleForRoute(l) {
              return l.data[Nn];
            }
          }
          return (
            (d.ɵfac = function (l) {
              return new (l || d)();
            }),
            (d.ɵprov = o.Yz7({
              token: d,
              factory: function () {
                return (0, o.f3M)(Os);
              },
              providedIn: 'root',
            })),
            d
          );
        })(),
        Os = (() => {
          class d extends gl {
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
              return new (l || d)(o.LFG(Gn.Dx));
            }),
            (d.ɵprov = o.Yz7({
              token: d,
              factory: d.ɵfac,
              providedIn: 'root',
            })),
            d
          );
        })(),
        xs = (() => {
          class d {}
          return (
            (d.ɵfac = function (l) {
              return new (l || d)();
            }),
            (d.ɵprov = o.Yz7({
              token: d,
              factory: function () {
                return (0, o.f3M)(Ii);
              },
              providedIn: 'root',
            })),
            d
          );
        })();
      class ma {
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
      let Ii = (() => {
        class d extends ma {}
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
      const Si = new o.OlP('', { providedIn: 'root', factory: () => ({}) });
      let zi = (() => {
          class d {}
          return (
            (d.ɵfac = function (l) {
              return new (l || d)();
            }),
            (d.ɵprov = o.Yz7({
              token: d,
              factory: function () {
                return (0, o.f3M)(ml);
              },
              providedIn: 'root',
            })),
            d
          );
        })(),
        ml = (() => {
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
      function Rs(d) {
        throw d;
      }
      function Yi(d, f, l) {
        return f.parse('/');
      }
      const wu = {
          paths: 'exact',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'exact',
        },
        ya = {
          paths: 'subset',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'subset',
        };
      function Ca() {
        const d = (0, o.f3M)(rn),
          f = (0, o.f3M)(Jn),
          l = (0, o.f3M)($.Ye),
          p = (0, o.f3M)(o.zs3),
          _ = (0, o.f3M)(o.Sil),
          S = (0, o.f3M)(fi, { optional: !0 }) ?? [],
          P = (0, o.f3M)(Si, { optional: !0 }) ?? {},
          te = new _n(null, d, f, l, p, _, Ut(S));
        return (
          (function Da(d, f) {
            d.errorHandler && (f.errorHandler = d.errorHandler),
              d.malformedUriErrorHandler &&
                (f.malformedUriErrorHandler = d.malformedUriErrorHandler),
              d.onSameUrlNavigation &&
                (f.onSameUrlNavigation = d.onSameUrlNavigation),
              d.paramsInheritanceStrategy &&
                (f.paramsInheritanceStrategy = d.paramsInheritanceStrategy),
              d.urlUpdateStrategy &&
                (f.urlUpdateStrategy = d.urlUpdateStrategy),
              d.canceledNavigationResolution &&
                (f.canceledNavigationResolution =
                  d.canceledNavigationResolution);
          })(P, te),
          te
        );
      }
      let _n = (() => {
          class d {
            constructor(l, p, _, S, P, te, Ue) {
              (this.rootComponentType = l),
                (this.urlSerializer = p),
                (this.rootContexts = _),
                (this.location = S),
                (this.config = Ue),
                (this.disposed = !1),
                (this.currentPageId = 0),
                (this.isNgZoneEnabled = !1),
                (this.errorHandler = Rs),
                (this.malformedUriErrorHandler = Yi),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.afterPreactivation = () => W(void 0)),
                (this.urlHandlingStrategy = (0, o.f3M)(zi)),
                (this.routeReuseStrategy = (0, o.f3M)(xs)),
                (this.titleStrategy = (0, o.f3M)(gl)),
                (this.onSameUrlNavigation = 'ignore'),
                (this.paramsInheritanceStrategy = 'emptyOnly'),
                (this.urlUpdateStrategy = 'deferred'),
                (this.canceledNavigationResolution = 'replace'),
                (this.navigationTransitions = (0, o.f3M)(Ts)),
                (this.console = P.get(o.c2e));
              const lt = P.get(o.R0b);
              (this.isNgZoneEnabled =
                lt instanceof o.R0b && o.R0b.isInAngularZone()),
                this.resetConfig(Ue),
                (this.currentUrlTree = new yn()),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.routerState = Nr(
                  this.currentUrlTree,
                  this.rootComponentType
                )),
                this.navigationTransitions.setupNavigations(this).subscribe(
                  (ct) => {
                    (this.lastSuccessfulId = ct.id),
                      (this.currentPageId = ct.targetPageId);
                  },
                  (ct) => {
                    this.console.warn(`Unhandled Navigation Error: ${ct}`);
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
                      const _ = { replaceUrl: !0 },
                        S = l.state?.navigationId ? l.state : null;
                      if (l.state) {
                        const te = { ...l.state };
                        delete te.navigationId,
                          delete te.ɵrouterPageId,
                          0 !== Object.keys(te).length && (_.state = te);
                      }
                      const P = this.parseUrl(l.url);
                      this.scheduleNavigation(P, p, S, _);
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
              (this.config = l.map(Hn)),
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
                  relativeTo: _,
                  queryParams: S,
                  fragment: P,
                  queryParamsHandling: te,
                  preserveFragment: Ue,
                } = p,
                lt = _ || this.routerState.root,
                ct = Ue ? this.currentUrlTree.fragment : P;
              let xt = null;
              switch (te) {
                case 'merge':
                  xt = { ...this.currentUrlTree.queryParams, ...S };
                  break;
                case 'preserve':
                  xt = this.currentUrlTree.queryParams;
                  break;
                default:
                  xt = S || null;
              }
              return (
                null !== xt && (xt = this.removeEmptyProps(xt)),
                _r(lt, this.currentUrlTree, l, xt, ct ?? null)
              );
            }
            navigateByUrl(l, p = { skipLocationChange: !1 }) {
              const _ = In(l) ? l : this.parseUrl(l),
                S = this.urlHandlingStrategy.merge(_, this.rawUrlTree);
              return this.scheduleNavigation(S, 'imperative', null, p);
            }
            navigate(l, p = { skipLocationChange: !1 }) {
              return (
                (function vl(d) {
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
              } catch (_) {
                p = this.malformedUriErrorHandler(_, this.urlSerializer, l);
              }
              return p;
            }
            isActive(l, p) {
              let _;
              if (
                ((_ = !0 === p ? { ...wu } : !1 === p ? { ...ya } : p), In(l))
              )
                return mt(this.currentUrlTree, l, _);
              const S = this.parseUrl(l);
              return mt(this.currentUrlTree, S, _);
            }
            removeEmptyProps(l) {
              return Object.keys(l).reduce((p, _) => {
                const S = l[_];
                return null != S && (p[_] = S), p;
              }, {});
            }
            scheduleNavigation(l, p, _, S, P) {
              if (this.disposed) return Promise.resolve(!1);
              let te, Ue, lt, ct;
              return (
                P
                  ? ((te = P.resolve), (Ue = P.reject), (lt = P.promise))
                  : (lt = new Promise((xt, Un) => {
                      (te = xt), (Ue = Un);
                    })),
                'computed' === this.canceledNavigationResolution
                  ? (0 === this.currentPageId && (_ = this.location.getState()),
                    (ct =
                      _ && _.ɵrouterPageId
                        ? _.ɵrouterPageId
                        : S.replaceUrl || S.skipLocationChange
                        ? this.browserPageId ?? 0
                        : (this.browserPageId ?? 0) + 1))
                  : (ct = 0),
                this.navigationTransitions.handleNavigationRequest({
                  targetPageId: ct,
                  source: p,
                  restoredState: _,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  rawUrl: l,
                  extras: S,
                  resolve: te,
                  reject: Ue,
                  promise: lt,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                lt.catch((xt) => Promise.reject(xt))
              );
            }
            setBrowserUrl(l, p) {
              const _ = this.urlSerializer.serialize(l),
                S = {
                  ...p.extras.state,
                  ...this.generateNgRouterState(p.id, p.targetPageId),
                };
              this.location.isCurrentPathEqualTo(_) || p.extras.replaceUrl
                ? this.location.replaceState(_, '', S)
                : this.location.go(_, '', S);
            }
            restoreHistory(l, p = !1) {
              if ('computed' === this.canceledNavigationResolution) {
                const _ = this.currentPageId - l.targetPageId;
                ('popstate' !== l.source &&
                  'eager' !== this.urlUpdateStrategy &&
                  this.currentUrlTree !==
                    this.getCurrentNavigation()?.finalUrl) ||
                0 === _
                  ? this.currentUrlTree ===
                      this.getCurrentNavigation()?.finalUrl &&
                    0 === _ &&
                    (this.resetState(l),
                    (this.browserUrlTree = l.currentUrlTree),
                    this.resetUrlToCurrentUrlTree())
                  : this.location.historyGo(_);
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
              o.$Z();
            }),
            (d.ɵprov = o.Yz7({
              token: d,
              factory: function () {
                return Ca();
              },
              providedIn: 'root',
            })),
            d
          );
        })(),
        Ko = (() => {
          class d {
            constructor(l, p, _, S, P, te) {
              (this.router = l),
                (this.route = p),
                (this.tabIndexAttribute = _),
                (this.renderer = S),
                (this.el = P),
                (this.locationStrategy = te),
                (this._preserveFragment = !1),
                (this._skipLocationChange = !1),
                (this._replaceUrl = !1),
                (this.href = null),
                (this.commands = null),
                (this.onChanges = new A.x());
              const Ue = P.nativeElement.tagName;
              (this.isAnchorElement = 'A' === Ue || 'AREA' === Ue),
                this.isAnchorElement
                  ? (this.subscription = l.events.subscribe((lt) => {
                      lt instanceof Lt && this.updateHref();
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
            onClick(l, p, _, S, P) {
              return (
                !!(
                  null === this.urlTree ||
                  (this.isAnchorElement &&
                    (0 !== l ||
                      p ||
                      _ ||
                      S ||
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
              const _ = this.renderer,
                S = this.el.nativeElement;
              null !== p ? _.setAttribute(S, l, p) : _.removeAttribute(S, l);
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
                o.Y36(_n),
                o.Y36(Sn),
                o.$8M('tabindex'),
                o.Y36(o.Qsj),
                o.Y36(o.SBq),
                o.Y36($.S$)
              );
            }),
            (d.ɵdir = o.lG2({
              type: d,
              selectors: [['', 'routerLink', '']],
              hostVars: 1,
              hostBindings: function (l, p) {
                1 & l &&
                  o.NdJ('click', function (S) {
                    return p.onClick(
                      S.button,
                      S.ctrlKey,
                      S.shiftKey,
                      S.altKey,
                      S.metaKey
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
        Wi = (() => {
          class d {
            constructor(l, p, _, S, P) {
              (this.router = l),
                (this.element = p),
                (this.renderer = _),
                (this.cdr = S),
                (this.link = P),
                (this.classes = []),
                (this.isActive = !1),
                (this.routerLinkActiveOptions = { exact: !1 }),
                (this.isActiveChange = new o.vpe()),
                (this.routerEventsSubscription = l.events.subscribe((te) => {
                  te instanceof Lt && this.update();
                }));
            }
            ngAfterContentInit() {
              W(this.links.changes, W(null))
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
              this.linkInputChangesSubscription = (0, L.D)(l)
                .pipe((0, ee.J)())
                .subscribe((p) => {
                  this.isActive !== this.isLinkActive(this.router)(p) &&
                    this.update();
                });
            }
            set routerLinkActive(l) {
              const p = Array.isArray(l) ? l : l.split(' ');
              this.classes = p.filter((_) => !!_);
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
              const p = (function _a(d) {
                return !!d.paths;
              })(this.routerLinkActiveOptions)
                ? this.routerLinkActiveOptions
                : this.routerLinkActiveOptions.exact || !1;
              return (_) => !!_.urlTree && l.isActive(_.urlTree, p);
            }
            hasActiveLinks() {
              const l = this.isLinkActive(this.router);
              return (this.link && l(this.link)) || this.links.some(l);
            }
          }
          return (
            (d.ɵfac = function (l) {
              return new (l || d)(
                o.Y36(_n),
                o.Y36(o.SBq),
                o.Y36(o.Qsj),
                o.Y36(o.sBO),
                o.Y36(Ko, 8)
              );
            }),
            (d.ɵdir = o.lG2({
              type: d,
              selectors: [['', 'routerLinkActive', '']],
              contentQueries: function (l, p, _) {
                if ((1 & l && o.Suo(_, Ko, 5), 2 & l)) {
                  let S;
                  o.iGM((S = o.CRH())) && (p.links = S);
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
      class qi {}
      let Fs = (() => {
          class d {
            preload(l, p) {
              return p().pipe(pt(() => W(null)));
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
        Ea = (() => {
          class d {
            constructor(l, p, _, S, P) {
              (this.router = l),
                (this.injector = _),
                (this.preloadingStrategy = S),
                (this.loader = P);
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  (0, oe.h)((l) => l instanceof Lt),
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
              const _ = [];
              for (const S of p) {
                S.providers &&
                  !S._injector &&
                  (S._injector = (0, o.MMx)(
                    S.providers,
                    l,
                    `Route: ${S.path}`
                  ));
                const P = S._injector ?? l,
                  te = S._loadedInjector ?? P;
                (S.loadChildren && !S._loadedRoutes && void 0 === S.canLoad) ||
                (S.loadComponent && !S._loadedComponent)
                  ? _.push(this.preloadConfig(P, S))
                  : (S.children || S._loadedRoutes) &&
                    _.push(
                      this.processRoutes(te, S.children ?? S._loadedRoutes)
                    );
              }
              return (0, L.D)(_).pipe((0, ee.J)());
            }
            preloadConfig(l, p) {
              return this.preloadingStrategy.preload(p, () => {
                let _;
                _ =
                  p.loadChildren && void 0 === p.canLoad
                    ? this.loader.loadChildren(l, p)
                    : W(null);
                const S = _.pipe(
                  (0, He.z)((P) =>
                    null === P
                      ? W(void 0)
                      : ((p._loadedRoutes = P.routes),
                        (p._loadedInjector = P.injector),
                        this.processRoutes(P.injector ?? l, P.routes))
                  )
                );
                if (p.loadComponent && !p._loadedComponent) {
                  const P = this.loader.loadComponent(p);
                  return (0, L.D)([S, P]).pipe((0, ee.J)());
                }
                return S;
              });
            }
          }
          return (
            (d.ɵfac = function (l) {
              return new (l || d)(
                o.LFG(_n),
                o.LFG(o.Sil),
                o.LFG(o.lqb),
                o.LFG(qi),
                o.LFG(Ms)
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
      const Xi = new o.OlP('');
      let Ps = (() => {
        class d {
          constructor(l, p, _, S, P = {}) {
            (this.urlSerializer = l),
              (this.transitions = p),
              (this.viewportScroller = _),
              (this.zone = S),
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
              l instanceof Je
                ? ((this.store[this.lastId] =
                    this.viewportScroller.getScrollPosition()),
                  (this.lastSource = l.navigationTrigger),
                  (this.restoredId = l.restoredState
                    ? l.restoredState.navigationId
                    : 0))
                : l instanceof Lt &&
                  ((this.lastId = l.id),
                  this.scheduleScrollEvent(
                    l,
                    this.urlSerializer.parse(l.urlAfterRedirects).fragment
                  ));
            });
          }
          consumeScrollEvents() {
            return this.transitions.events.subscribe((l) => {
              l instanceof Pr &&
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
                    new Pr(
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
      function yl(d, ...f) {
        return (0, o.MR2)([
          { provide: fi, multi: !0, useValue: d },
          [],
          { provide: Sn, useFactory: Ai, deps: [_n] },
          { provide: o.tb, multi: !0, useFactory: wa },
          f.map((l) => l.ɵproviders),
        ]);
      }
      function Ai(d) {
        return d.routerState.root;
      }
      function Wr(d, f) {
        return { ɵkind: d, ɵproviders: f };
      }
      function wa() {
        const d = (0, o.f3M)(o.zs3);
        return (f) => {
          const l = d.get(o.z2F);
          if (f !== l.components[0]) return;
          const p = d.get(_n),
            _ = d.get(Ls);
          1 === d.get(Oi) && p.initialNavigation(),
            d.get(Qo, null, o.XFs.Optional)?.setUpPreloading(),
            d.get(Xi, null, o.XFs.Optional)?.init(),
            p.resetRootComponentType(l.componentTypes[0]),
            _.closed || (_.next(), _.unsubscribe());
        };
      }
      const Ls = new o.OlP('', { factory: () => new A.x() }),
        Oi = new o.OlP('', { providedIn: 'root', factory: () => 1 });
      const Qo = new o.OlP('');
      function Jo(d) {
        return Wr(0, [
          { provide: Qo, useExisting: Ea },
          { provide: qi, useExisting: d },
        ]);
      }
      const ei = new o.OlP('ROUTER_FORROOT_GUARD'),
        Su = [
          $.Ye,
          { provide: rn, useClass: _t },
          { provide: _n, useFactory: Ca },
          Jn,
          { provide: Sn, useFactory: Ai, deps: [_n] },
          Ms,
          [],
        ];
      function _l() {
        return new o.PXZ('Router', _n);
      }
      let mn = (() => {
        class d {
          constructor(l) {}
          static forRoot(l, p) {
            return {
              ngModule: d,
              providers: [
                Su,
                [],
                { provide: fi, multi: !0, useValue: l },
                {
                  provide: ei,
                  useFactory: Ou,
                  deps: [[_n, new o.FiY(), new o.tp0()]],
                },
                { provide: Si, useValue: p || {} },
                p?.useHash
                  ? { provide: $.S$, useClass: $.Do }
                  : { provide: $.S$, useClass: $.b0 },
                {
                  provide: Xi,
                  useFactory: () => {
                    const d = (0, o.f3M)($.EM),
                      f = (0, o.f3M)(o.R0b),
                      l = (0, o.f3M)(Si),
                      p = (0, o.f3M)(Ts),
                      _ = (0, o.f3M)(rn);
                    return (
                      l.scrollOffset && d.setOffset(l.scrollOffset),
                      new Ps(_, p, d, f, l)
                    );
                  },
                },
                p?.preloadingStrategy
                  ? Jo(p.preloadingStrategy).ɵproviders
                  : [],
                { provide: o.PXZ, multi: !0, useFactory: _l },
                p?.initialNavigation ? xu(p) : [],
                [
                  { provide: El, useFactory: wa },
                  { provide: o.tb, multi: !0, useExisting: El },
                ],
              ],
            };
          }
          static forChild(l) {
            return {
              ngModule: d,
              providers: [{ provide: fi, multi: !0, useValue: l }],
            };
          }
        }
        return (
          (d.ɵfac = function (l) {
            return new (l || d)(o.LFG(ei, 8));
          }),
          (d.ɵmod = o.oAB({ type: d })),
          (d.ɵinj = o.cJS({ imports: [eo] })),
          d
        );
      })();
      function Ou(d) {
        return 'guarded';
      }
      function xu(d) {
        return [
          'disabled' === d.initialNavigation
            ? Wr(3, [
                {
                  provide: o.ip1,
                  multi: !0,
                  useFactory: () => {
                    const f = (0, o.f3M)(_n);
                    return () => {
                      f.setUpLocationChangeListener();
                    };
                  },
                },
                { provide: Oi, useValue: 2 },
              ]).ɵproviders
            : [],
          'enabledBlocking' === d.initialNavigation
            ? Wr(2, [
                { provide: Oi, useValue: 0 },
                {
                  provide: o.ip1,
                  multi: !0,
                  deps: [o.zs3],
                  useFactory: (f) => {
                    const l = f.get($.V_, Promise.resolve());
                    return () =>
                      l.then(
                        () =>
                          new Promise((_) => {
                            const S = f.get(_n),
                              P = f.get(Ls);
                            (function p(_) {
                              f.get(_n)
                                .events.pipe(
                                  (0, oe.h)(
                                    (P) =>
                                      P instanceof Lt ||
                                      P instanceof jt ||
                                      P instanceof Vn
                                  ),
                                  (0, q.U)(
                                    (P) =>
                                      P instanceof Lt ||
                                      (P instanceof jt &&
                                        (0 === P.code || 1 === P.code) &&
                                        null)
                                  ),
                                  (0, oe.h)((P) => null !== P),
                                  pe(1)
                                )
                                .subscribe(() => {
                                  _();
                                });
                            })(() => {
                              _(!0);
                            }),
                              (S.afterPreactivation = () => (
                                _(!0), P.closed ? W(void 0) : P
                              )),
                              S.initialNavigation();
                          })
                      );
                  },
                },
              ]).ɵproviders
            : [],
        ];
      }
      const El = new o.OlP('');
    },
    5861: (ut, $e, M) => {
      'use strict';
      function o(Y, W, ge, Be, re, Fe, Ae) {
        try {
          var Pe = Y[Fe](Ae),
            ve = Pe.value;
        } catch (we) {
          return void ge(we);
        }
        Pe.done ? W(ve) : Promise.resolve(ve).then(Be, re);
      }
      function L(Y) {
        return function () {
          var W = this,
            ge = arguments;
          return new Promise(function (Be, re) {
            var Fe = Y.apply(W, ge);
            function Ae(ve) {
              o(Fe, Be, re, Ae, Pe, 'next', ve);
            }
            function Pe(ve) {
              o(Fe, Be, re, Ae, Pe, 'throw', ve);
            }
            Ae(void 0);
          });
        };
      }
      M.d($e, { Z: () => L });
    },
  },
  (ut) => {
    ut((ut.s = 383));
  },
]);
