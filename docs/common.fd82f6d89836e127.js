'use strict';
(self.webpackChunkloup_garou_mj = self.webpackChunkloup_garou_mj || []).push([
  [8592],
  {
    7543: (O, g, i) => {
      i.d(g, { c: () => u });
      var e = i(1308),
        l = i(7864),
        n = i(1911);
      const u = (a, s) => {
        let o, t;
        const c = (_, w, E) => {
            if (typeof document > 'u') return;
            const y = document.elementFromPoint(_, w);
            y && s(y) ? y !== o && (m(), d(y, E)) : m();
          },
          d = (_, w) => {
            (o = _), t || (t = o);
            const E = o;
            (0, e.c)(() => E.classList.add('ion-activated')), w();
          },
          m = (_ = !1) => {
            if (!o) return;
            const w = o;
            (0, e.c)(() => w.classList.remove('ion-activated')),
              _ && t !== o && o.click(),
              (o = void 0);
          };
        return (0, n.createGesture)({
          el: a,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: (_) => c(_.currentX, _.currentY, l.a),
          onMove: (_) => c(_.currentX, _.currentY, l.b),
          onEnd: () => {
            m(!0), (0, l.h)(), (t = void 0);
          },
        });
      };
    },
    2225: (O, g, i) => {
      i.d(g, { g: () => e });
      const e = (s, o, t, c, d) =>
          n(s[1], o[1], t[1], c[1], d).map((m) => l(s[0], o[0], t[0], c[0], m)),
        l = (s, o, t, c, d) =>
          d * (3 * o * Math.pow(d - 1, 2) + d * (-3 * t * d + 3 * t + c * d)) -
          s * Math.pow(d - 1, 3),
        n = (s, o, t, c, d) =>
          a(
            (c -= d) - 3 * (t -= d) + 3 * (o -= d) - (s -= d),
            3 * t - 6 * o + 3 * s,
            3 * o - 3 * s,
            s
          ).filter((_) => _ >= 0 && _ <= 1),
        a = (s, o, t, c) => {
          if (0 === s)
            return ((s, o, t) => {
              const c = o * o - 4 * s * t;
              return c < 0
                ? []
                : [
                    (-o + Math.sqrt(c)) / (2 * s),
                    (-o - Math.sqrt(c)) / (2 * s),
                  ];
            })(o, t, c);
          const d = (3 * (t /= s) - (o /= s) * o) / 3,
            m = (2 * o * o * o - 9 * o * t + 27 * (c /= s)) / 27;
          if (0 === d) return [Math.pow(-m, 1 / 3)];
          if (0 === m) return [Math.sqrt(-d), -Math.sqrt(-d)];
          const _ = Math.pow(m / 2, 2) + Math.pow(d / 3, 3);
          if (0 === _) return [Math.pow(m / 2, 0.5) - o / 3];
          if (_ > 0)
            return [
              Math.pow(-m / 2 + Math.sqrt(_), 1 / 3) -
                Math.pow(m / 2 + Math.sqrt(_), 1 / 3) -
                o / 3,
            ];
          const w = Math.sqrt(Math.pow(-d / 3, 3)),
            E = Math.acos(-m / (2 * Math.sqrt(Math.pow(-d / 3, 3)))),
            y = 2 * Math.pow(w, 1 / 3);
          return [
            y * Math.cos(E / 3) - o / 3,
            y * Math.cos((E + 2 * Math.PI) / 3) - o / 3,
            y * Math.cos((E + 4 * Math.PI) / 3) - o / 3,
          ];
        };
    },
    5062: (O, g, i) => {
      i.d(g, { i: () => e });
      const e = (l) =>
        l && '' !== l.dir
          ? 'rtl' === l.dir.toLowerCase()
          : 'rtl' === document?.dir.toLowerCase();
    },
    5106: (O, g, i) => {
      i.r(g), i.d(g, { startFocusVisible: () => u });
      const e = 'ion-focused',
        n = [
          'Tab',
          'ArrowDown',
          'Space',
          'Escape',
          ' ',
          'Shift',
          'Enter',
          'ArrowLeft',
          'ArrowRight',
          'ArrowUp',
          'Home',
          'End',
        ],
        u = (a) => {
          let s = [],
            o = !0;
          const t = a ? a.shadowRoot : document,
            c = a || document.body,
            d = (T) => {
              s.forEach((h) => h.classList.remove(e)),
                T.forEach((h) => h.classList.add(e)),
                (s = T);
            },
            m = () => {
              (o = !1), d([]);
            },
            _ = (T) => {
              (o = n.includes(T.key)), o || d([]);
            },
            w = (T) => {
              if (o && void 0 !== T.composedPath) {
                const h = T.composedPath().filter(
                  (f) => !!f.classList && f.classList.contains('ion-focusable')
                );
                d(h);
              }
            },
            E = () => {
              t.activeElement === c && d([]);
            };
          return (
            t.addEventListener('keydown', _),
            t.addEventListener('focusin', w),
            t.addEventListener('focusout', E),
            t.addEventListener('touchstart', m),
            t.addEventListener('mousedown', m),
            {
              destroy: () => {
                t.removeEventListener('keydown', _),
                  t.removeEventListener('focusin', w),
                  t.removeEventListener('focusout', E),
                  t.removeEventListener('touchstart', m),
                  t.removeEventListener('mousedown', m);
              },
              setFocus: d,
            }
          );
        };
    },
    7040: (O, g, i) => {
      i.d(g, { C: () => a, a: () => n, d: () => u });
      var e = i(5861),
        l = i(5730);
      const n = (function () {
          var s = (0, e.Z)(function* (o, t, c, d, m, _) {
            var w;
            if (o) return o.attachViewToDom(t, c, m, d);
            if (!(_ || 'string' == typeof c || c instanceof HTMLElement))
              throw new Error('framework delegate is missing');
            const E =
              'string' == typeof c
                ? null === (w = t.ownerDocument) || void 0 === w
                  ? void 0
                  : w.createElement(c)
                : c;
            return (
              d && d.forEach((y) => E.classList.add(y)),
              m && Object.assign(E, m),
              t.appendChild(E),
              yield new Promise((y) => (0, l.c)(E, y)),
              E
            );
          });
          return function (t, c, d, m, _, w) {
            return s.apply(this, arguments);
          };
        })(),
        u = (s, o) => {
          if (o) {
            if (s) return s.removeViewFromDom(o.parentElement, o);
            o.remove();
          }
          return Promise.resolve();
        },
        a = () => {
          let s, o;
          return {
            attachViewToDom: (function () {
              var d = (0, e.Z)(function* (m, _, w = {}, E = []) {
                var y, T;
                if (((s = m), _)) {
                  const f =
                    'string' == typeof _
                      ? null === (y = s.ownerDocument) || void 0 === y
                        ? void 0
                        : y.createElement(_)
                      : _;
                  E.forEach((r) => f.classList.add(r)),
                    Object.assign(f, w),
                    s.appendChild(f),
                    yield new Promise((r) => (0, l.c)(f, r));
                } else if (
                  s.children.length > 0 &&
                  !s.children[0].classList.contains('ion-delegate-host')
                ) {
                  const r =
                    null === (T = s.ownerDocument) || void 0 === T
                      ? void 0
                      : T.createElement('div');
                  r.classList.add('ion-delegate-host'),
                    E.forEach((M) => r.classList.add(M)),
                    r.append(...s.children),
                    s.appendChild(r);
                }
                const h = document.querySelector('ion-app') || document.body;
                return (
                  (o = document.createComment('ionic teleport')),
                  s.parentNode.insertBefore(o, s),
                  h.appendChild(s),
                  s
                );
              });
              return function (_, w) {
                return d.apply(this, arguments);
              };
            })(),
            removeViewFromDom: () => (
              s && o && (o.parentNode.insertBefore(s, o), o.remove()),
              Promise.resolve()
            ),
          };
        };
    },
    7864: (O, g, i) => {
      i.d(g, { a: () => u, b: () => a, c: () => n, d: () => o, h: () => s });
      const e = {
          getEngine() {
            var t;
            const c = window;
            return (
              c.TapticEngine ||
              ((null === (t = c.Capacitor) || void 0 === t
                ? void 0
                : t.isPluginAvailable('Haptics')) &&
                c.Capacitor.Plugins.Haptics)
            );
          },
          available() {
            var t;
            const c = window;
            return (
              !!this.getEngine() &&
              ('web' !==
                (null === (t = c.Capacitor) || void 0 === t
                  ? void 0
                  : t.getPlatform()) ||
                (typeof navigator < 'u' && void 0 !== navigator.vibrate))
            );
          },
          isCordova: () => !!window.TapticEngine,
          isCapacitor: () => !!window.Capacitor,
          impact(t) {
            const c = this.getEngine();
            if (!c) return;
            const d = this.isCapacitor() ? t.style.toUpperCase() : t.style;
            c.impact({ style: d });
          },
          notification(t) {
            const c = this.getEngine();
            if (!c) return;
            const d = this.isCapacitor() ? t.style.toUpperCase() : t.style;
            c.notification({ style: d });
          },
          selection() {
            this.impact({ style: 'light' });
          },
          selectionStart() {
            const t = this.getEngine();
            !t ||
              (this.isCapacitor()
                ? t.selectionStart()
                : t.gestureSelectionStart());
          },
          selectionChanged() {
            const t = this.getEngine();
            !t ||
              (this.isCapacitor()
                ? t.selectionChanged()
                : t.gestureSelectionChanged());
          },
          selectionEnd() {
            const t = this.getEngine();
            !t ||
              (this.isCapacitor() ? t.selectionEnd() : t.gestureSelectionEnd());
          },
        },
        l = () => e.available(),
        n = () => {
          l() && e.selection();
        },
        u = () => {
          l() && e.selectionStart();
        },
        a = () => {
          l() && e.selectionChanged();
        },
        s = () => {
          l() && e.selectionEnd();
        },
        o = (t) => {
          l() && e.impact(t);
        };
    },
    6642: (O, g, i) => {
      i.d(g, {
        I: () => a,
        a: () => d,
        b: () => s,
        c: () => w,
        d: () => y,
        f: () => m,
        g: () => c,
        i: () => t,
        p: () => E,
        r: () => T,
        s: () => _,
      });
      var e = i(5861),
        l = i(5730),
        n = i(4147);
      const a = 'ion-content',
        s = '.ion-content-scroll-host',
        o = `${a}, ${s}`,
        t = (h) => 'ION-CONTENT' === h.tagName,
        c = (function () {
          var h = (0, e.Z)(function* (f) {
            return t(f)
              ? (yield new Promise((r) => (0, l.c)(f, r)), f.getScrollElement())
              : f;
          });
          return function (r) {
            return h.apply(this, arguments);
          };
        })(),
        d = (h) => h.querySelector(s) || h.querySelector(o),
        m = (h) => h.closest(o),
        _ = (h, f) =>
          t(h)
            ? h.scrollToTop(f)
            : Promise.resolve(
                h.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: f > 0 ? 'smooth' : 'auto',
                })
              ),
        w = (h, f, r, M) =>
          t(h)
            ? h.scrollByPoint(f, r, M)
            : Promise.resolve(
                h.scrollBy({
                  top: r,
                  left: f,
                  behavior: M > 0 ? 'smooth' : 'auto',
                })
              ),
        E = (h) => (0, n.a)(h, a),
        y = (h) => {
          if (t(h)) {
            const r = h.scrollY;
            return (h.scrollY = !1), r;
          }
          return h.style.setProperty('overflow', 'hidden'), !0;
        },
        T = (h, f) => {
          t(h) ? (h.scrollY = f) : h.style.removeProperty('overflow');
        };
    },
    2357: (O, g, i) => {
      i.d(g, {
        a: () => e,
        b: () => _,
        c: () => o,
        d: () => w,
        e: () => A,
        f: () => s,
        g: () => E,
        h: () => n,
        i: () => l,
        j: () => r,
        k: () => M,
        l: () => t,
        m: () => d,
        n: () => y,
        o: () => c,
        p: () => a,
        q: () => u,
        r: () => f,
        s: () => L,
        t: () => m,
        u: () => T,
        v: () => h,
      });
      const e =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",
        l =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",
        n =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",
        u =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",
        a =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",
        s =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
        o =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",
        t =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",
        c =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",
        d =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",
        m =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",
        _ =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",
        w =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",
        E =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
        y =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",
        T =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
        h =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",
        f =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
        r =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
        M =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",
        L =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
        A =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";
    },
    8439: (O, g, i) => {
      i.d(g, { s: () => e });
      const e = (t) => {
          try {
            if (t instanceof o) return t.value;
            if (!u() || 'string' != typeof t || '' === t) return t;
            const c = document.createDocumentFragment(),
              d = document.createElement('div');
            c.appendChild(d),
              (d.innerHTML = t),
              s.forEach((E) => {
                const y = c.querySelectorAll(E);
                for (let T = y.length - 1; T >= 0; T--) {
                  const h = y[T];
                  h.parentNode ? h.parentNode.removeChild(h) : c.removeChild(h);
                  const f = n(h);
                  for (let r = 0; r < f.length; r++) l(f[r]);
                }
              });
            const m = n(c);
            for (let E = 0; E < m.length; E++) l(m[E]);
            const _ = document.createElement('div');
            _.appendChild(c);
            const w = _.querySelector('div');
            return null !== w ? w.innerHTML : _.innerHTML;
          } catch (c) {
            return console.error(c), '';
          }
        },
        l = (t) => {
          if (t.nodeType && 1 !== t.nodeType) return;
          for (let d = t.attributes.length - 1; d >= 0; d--) {
            const m = t.attributes.item(d),
              _ = m.name;
            if (!a.includes(_.toLowerCase())) {
              t.removeAttribute(_);
              continue;
            }
            const w = m.value;
            null != w &&
              w.toLowerCase().includes('javascript:') &&
              t.removeAttribute(_);
          }
          const c = n(t);
          for (let d = 0; d < c.length; d++) l(c[d]);
        },
        n = (t) => (null != t.children ? t.children : t.childNodes),
        u = () => {
          var t;
          const d =
            null === (t = window?.Ionic) || void 0 === t ? void 0 : t.config;
          return (
            !d ||
            (d.get
              ? d.get('sanitizerEnabled', !0)
              : !0 === d.sanitizerEnabled || void 0 === d.sanitizerEnabled)
          );
        },
        a = ['class', 'id', 'href', 'src', 'name', 'slot'],
        s = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
      class o {
        constructor(c) {
          this.value = c;
        }
      }
    },
    1316: (O, g, i) => {
      i.r(g),
        i.d(g, {
          KEYBOARD_DID_CLOSE: () => l,
          KEYBOARD_DID_OPEN: () => e,
          copyVisualViewport: () => f,
          keyboardDidClose: () => E,
          keyboardDidOpen: () => _,
          keyboardDidResize: () => w,
          resetKeyboardAssist: () => o,
          setKeyboardClose: () => m,
          setKeyboardOpen: () => d,
          startKeyboardAssist: () => t,
          trackViewportChanges: () => h,
        });
      const e = 'ionKeyboardDidShow',
        l = 'ionKeyboardDidHide';
      let u = {},
        a = {},
        s = !1;
      const o = () => {
          (u = {}), (a = {}), (s = !1);
        },
        t = (r) => {
          c(r),
            r.visualViewport &&
              ((a = f(r.visualViewport)),
              (r.visualViewport.onresize = () => {
                h(r), _() || w(r) ? d(r) : E(r) && m(r);
              }));
        },
        c = (r) => {
          r.addEventListener('keyboardDidShow', (M) => d(r, M)),
            r.addEventListener('keyboardDidHide', () => m(r));
        },
        d = (r, M) => {
          y(r, M), (s = !0);
        },
        m = (r) => {
          T(r), (s = !1);
        },
        _ = () =>
          !s && u.width === a.width && (u.height - a.height) * a.scale > 150,
        w = (r) => s && !E(r),
        E = (r) => s && a.height === r.innerHeight,
        y = (r, M) => {
          const A = new CustomEvent(e, {
            detail: {
              keyboardHeight: M ? M.keyboardHeight : r.innerHeight - a.height,
            },
          });
          r.dispatchEvent(A);
        },
        T = (r) => {
          const M = new CustomEvent(l);
          r.dispatchEvent(M);
        },
        h = (r) => {
          (u = Object.assign({}, a)), (a = f(r.visualViewport));
        },
        f = (r) => ({
          width: Math.round(r.width),
          height: Math.round(r.height),
          offsetTop: r.offsetTop,
          offsetLeft: r.offsetLeft,
          pageTop: r.pageTop,
          pageLeft: r.pageLeft,
          scale: r.scale,
        });
    },
    9852: (O, g, i) => {
      i.d(g, { c: () => l });
      var e = i(3457);
      const l = (n) => {
        let u, a, s;
        const o = () => {
          (u = () => {
            (s = !0), n && n(!0);
          }),
            (a = () => {
              (s = !1), n && n(!1);
            }),
            null == e.w || e.w.addEventListener('keyboardWillShow', u),
            null == e.w || e.w.addEventListener('keyboardWillHide', a);
        };
        return (
          o(),
          {
            init: o,
            destroy: () => {
              null == e.w || e.w.removeEventListener('keyboardWillShow', u),
                null == e.w || e.w.removeEventListener('keyboardWillHide', a),
                (u = a = void 0);
            },
            isKeyboardVisible: () => s,
          }
        );
      };
    },
    7741: (O, g, i) => {
      i.d(g, { S: () => l });
      const l = {
        bubbles: {
          dur: 1e3,
          circles: 9,
          fn: (n, u, a) => {
            const s = (n * u) / a - n + 'ms',
              o = (2 * Math.PI * u) / a;
            return {
              r: 5,
              style: {
                top: 9 * Math.sin(o) + 'px',
                left: 9 * Math.cos(o) + 'px',
                'animation-delay': s,
              },
            };
          },
        },
        circles: {
          dur: 1e3,
          circles: 8,
          fn: (n, u, a) => {
            const s = u / a,
              o = n * s - n + 'ms',
              t = 2 * Math.PI * s;
            return {
              r: 5,
              style: {
                top: 9 * Math.sin(t) + 'px',
                left: 9 * Math.cos(t) + 'px',
                'animation-delay': o,
              },
            };
          },
        },
        circular: {
          dur: 1400,
          elmDuration: !0,
          circles: 1,
          fn: () => ({
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {},
          }),
        },
        crescent: { dur: 750, circles: 1, fn: () => ({ r: 26, style: {} }) },
        dots: {
          dur: 750,
          circles: 3,
          fn: (n, u) => ({
            r: 6,
            style: {
              left: 9 - 9 * u + 'px',
              'animation-delay': -110 * u + 'ms',
            },
          }),
        },
        lines: {
          dur: 1e3,
          lines: 8,
          fn: (n, u, a) => ({
            y1: 14,
            y2: 26,
            style: {
              transform: `rotate(${
                (360 / a) * u + (u < a / 2 ? 180 : -180)
              }deg)`,
              'animation-delay': (n * u) / a - n + 'ms',
            },
          }),
        },
        'lines-small': {
          dur: 1e3,
          lines: 8,
          fn: (n, u, a) => ({
            y1: 12,
            y2: 20,
            style: {
              transform: `rotate(${
                (360 / a) * u + (u < a / 2 ? 180 : -180)
              }deg)`,
              'animation-delay': (n * u) / a - n + 'ms',
            },
          }),
        },
        'lines-sharp': {
          dur: 1e3,
          lines: 12,
          fn: (n, u, a) => ({
            y1: 17,
            y2: 29,
            style: {
              transform: `rotate(${30 * u + (u < 6 ? 180 : -180)}deg)`,
              'animation-delay': (n * u) / a - n + 'ms',
            },
          }),
        },
        'lines-sharp-small': {
          dur: 1e3,
          lines: 12,
          fn: (n, u, a) => ({
            y1: 12,
            y2: 20,
            style: {
              transform: `rotate(${30 * u + (u < 6 ? 180 : -180)}deg)`,
              'animation-delay': (n * u) / a - n + 'ms',
            },
          }),
        },
      };
    },
    1959: (O, g, i) => {
      i.r(g), i.d(g, { createSwipeBackGesture: () => a });
      var e = i(5730),
        l = i(5062),
        n = i(1911);
      i(4349);
      const a = (s, o, t, c, d) => {
        const m = s.ownerDocument.defaultView,
          _ = (0, l.i)(s),
          E = (r) => (_ ? -r.deltaX : r.deltaX);
        return (0, n.createGesture)({
          el: s,
          gestureName: 'goback-swipe',
          gesturePriority: 40,
          threshold: 10,
          canStart: (r) =>
            ((r) => {
              const { startX: L } = r;
              return _ ? L >= m.innerWidth - 50 : L <= 50;
            })(r) && o(),
          onStart: t,
          onMove: (r) => {
            const L = E(r) / m.innerWidth;
            c(L);
          },
          onEnd: (r) => {
            const M = E(r),
              L = m.innerWidth,
              A = M / L,
              P = ((r) => (_ ? -r.velocityX : r.velocityX))(r),
              v = P >= 0 && (P > 0.2 || M > L / 2),
              p = (v ? 1 - A : A) * L;
            let x = 0;
            if (p > 5) {
              const D = p / Math.abs(P);
              x = Math.min(D, 540);
            }
            d(v, A <= 0 ? 0.01 : (0, e.l)(0, A, 0.9999), x);
          },
        });
      };
    },
    4664: (O, g, i) => {
      i.d(g, { G: () => u });
      var e = i(6895),
        l = i(5035),
        n = i(8256);
      class u {}
      (u.ɵfac = function (s) {
        return new (s || u)();
      }),
        (u.ɵcmp = n.Xpm({
          type: u,
          selectors: [['lgmj-header']],
          inputs: { title: 'title' },
          standalone: !0,
          features: [n.jDz],
          decls: 6,
          vars: 1,
          consts: [['slot', 'start']],
          template: function (s, o) {
            1 & s &&
              (n.TgZ(0, 'ion-header')(1, 'ion-toolbar')(2, 'ion-buttons', 0),
              n._UZ(3, 'ion-menu-button'),
              n.qZA(),
              n.TgZ(4, 'ion-title'),
              n._uU(5),
              n.qZA()()()),
              2 & s && (n.xp6(5), n.Oqu(o.title));
          },
          dependencies: [e.ez, l.Pc, l.Sm, l.Gu, l.fG, l.wd, l.sr],
        }));
    },
    6519: (O, g, i) => {
      i.d(g, { l: () => k });
      var e = i(8256),
        l = i(6895),
        n = i(5035),
        u = i(9297),
        a = i(6215),
        s = i(4253),
        o = i(7517),
        t = i(6146),
        c = i(7409),
        d = i(100);
      function m(v, C) {
        1 & v && e._UZ(0, 'ion-icon', 6);
      }
      function _(v, C) {
        if (
          (1 & v &&
            (e.TgZ(0, 'ion-thumbnail', 7),
            e._UZ(1, 'img', 8),
            e.ALo(2, 'playerRoleImage'),
            e.ALo(3, 'playerRoleName'),
            e.qZA()),
          2 & v)
        ) {
          const p = e.oxw();
          e.xp6(1),
            e.Q6J(
              'src',
              e.lcZ(2, 2, p.player.role),
              e.LSH
            )('alt', e.lcZ(3, 4, p.player.role));
        }
      }
      function w(v, C) {
        1 & v && e.GkF(0);
      }
      function E(v, C) {
        if (1 & v) {
          const p = e.EpF();
          e.TgZ(0, 'ion-button', 13),
            e.NdJ('click', function () {
              e.CHM(p);
              const D = e.oxw(2);
              return e.KtG(D.onRemove());
            }),
            e._UZ(1, 'ion-icon', 14),
            e.qZA();
        }
      }
      function y(v, C) {
        if (1 & v) {
          const p = e.EpF();
          e.TgZ(0, 'ion-checkbox', 15),
            e.NdJ('ionChange', function (D) {
              e.CHM(p);
              const S = e.oxw(2);
              return e.KtG(S.onCheckedChange(D));
            }),
            e.qZA();
        }
        if (2 & v) {
          const p = e.oxw(2);
          e.Q6J('checked', p.checked);
        }
      }
      function T(v, C) {
        if ((1 & v && e._UZ(0, 'ion-radio', 16), 2 & v)) {
          const p = e.oxw(2);
          e.Q6J('value', p.player.id);
        }
      }
      function h(v, C) {
        if (
          (1 & v &&
            (e.ynx(0, 9),
            e.YNc(1, E, 2, 0, 'ion-button', 10),
            e.YNc(2, y, 1, 1, 'ion-checkbox', 11),
            e.YNc(3, T, 1, 1, 'ion-radio', 12),
            e.BQk()),
          2 & v)
        ) {
          const p = e.oxw();
          e.Q6J('ngSwitch', p.displayMode),
            e.xp6(1),
            e.Q6J('ngSwitchCase', p.playerDisplayModeEnum.CREATE),
            e.xp6(1),
            e.Q6J('ngSwitchCase', p.playerDisplayModeEnum.SELECT_MULTI),
            e.xp6(1),
            e.Q6J('ngSwitchCase', p.playerDisplayModeEnum.SELECT_SINGLE);
        }
      }
      function f(v, C) {
        1 & v && e._UZ(0, 'ion-reorder', 20);
      }
      function r(v, C) {
        if (
          (1 & v &&
            (e.TgZ(0, 'ion-select-option', 23),
            e._uU(1),
            e.ALo(2, 'playerRoleName'),
            e.qZA()),
          2 & v)
        ) {
          const p = C.$implicit;
          e.Q6J('value', p), e.xp6(1), e.Oqu(e.lcZ(2, 2, p));
        }
      }
      function M(v, C) {
        if (1 & v) {
          const p = e.EpF();
          e.TgZ(0, 'ion-select', 21),
            e.NdJ('ionChange', function (D) {
              e.CHM(p);
              const S = e.oxw(2);
              return e.KtG(S.onRoleChange(D));
            }),
            e.YNc(1, r, 3, 4, 'ion-select-option', 22),
            e.qZA();
        }
        if (2 & v) {
          const p = e.oxw(2);
          e.Q6J('interfaceOptions', p.customInterfaceOptions)(
            'value',
            p.player.role
          ),
            e.xp6(1),
            e.Q6J('ngForOf', p.sortedRoles)('ngForTrackBy', p.roleTrackBy);
        }
      }
      function L(v, C) {
        if (
          (1 & v &&
            (e.TgZ(0, 'span', 25), e._uU(1), e.ALo(2, 'playerStatus'), e.qZA()),
          2 & v)
        ) {
          const p = C.$implicit;
          e.xp6(1), e.Oqu(e.lcZ(2, 1, p));
        }
      }
      function A(v, C) {
        if (
          (1 & v &&
            (e.TgZ(0, 'div', 20), e.YNc(1, L, 3, 3, 'span', 24), e.qZA()),
          2 & v)
        ) {
          const p = e.oxw(2);
          e.xp6(1),
            e.Q6J('ngForOf', p.player.statuses)(
              'ngForTrackBy',
              p.statusTrackBy
            );
        }
      }
      function P(v, C) {
        if (
          (1 & v &&
            (e.ynx(0, 9),
            e.YNc(1, f, 1, 0, 'ion-reorder', 17),
            e.YNc(2, M, 2, 4, 'ion-select', 18),
            e.YNc(3, A, 2, 2, 'div', 19),
            e.BQk()),
          2 & v)
        ) {
          const p = e.oxw();
          e.Q6J('ngSwitch', p.displayMode),
            e.xp6(1),
            e.Q6J('ngSwitchCase', p.playerDisplayModeEnum.CREATE),
            e.xp6(1),
            e.Q6J('ngSwitchCase', p.playerDisplayModeEnum.EDIT_ROLE);
        }
      }
      class k {
        constructor(C) {
          (this.playerRoleNamePipe = C),
            (this.displayMode = s.d.DEFAULT),
            (this.disabled = !1),
            (this.checked = !1),
            (this.remove = new e.vpe()),
            (this.checkedChange = new e.vpe()),
            (this.roleChange = new e.vpe()),
            (this.roleTrackBy = c.A),
            (this.statusTrackBy = d.V),
            (this.playerDisplayModeEnum = s.d),
            (this.playerRoleEnum = t.k),
            (this.sortedRoles = []),
            (this.customInterfaceOptions = {
              header: 'CHOISIR UN R\xd4LE',
              buttons: [],
            });
        }
        set selectableRoles(C) {
          const p = [...C];
          this.player.role !== t.k.NOT_SELECTED &&
            !p.includes(this.player.role) &&
            p.push(this.player.role),
            (this.sortedRoles = p.sort((x, D) =>
              this.playerRoleNamePipe
                .transform(x)
                .localeCompare(this.playerRoleNamePipe.transform(D))
            ));
        }
        onCheckedChange(C) {
          this.checkedChange.emit(C.detail.checked);
        }
        onRemove() {
          this.remove.emit();
        }
        onRoleChange(C) {
          this.roleChange.emit(C.detail.value);
        }
      }
      (k.ɵfac = function (C) {
        return new (C || k)(e.Y36(u.L));
      }),
        (k.ɵcmp = e.Xpm({
          type: k,
          selectors: [['lgmj-player']],
          inputs: {
            player: 'player',
            displayMode: 'displayMode',
            disabled: 'disabled',
            checked: 'checked',
            selectableRoles: 'selectableRoles',
          },
          outputs: {
            remove: 'remove',
            checkedChange: 'checkedChange',
            roleChange: 'roleChange',
          },
          standalone: !0,
          features: [e._Bn([u.L]), e.jDz],
          decls: 14,
          vars: 10,
          consts: [
            [3, 'disabled', 'color'],
            ['slot', 'start', 'name', 'skull', 4, 'ngIf', 'ngIfElse'],
            ['slot', 'start', 4, 'ngIf'],
            [4, 'ngTemplateOutlet'],
            ['formElement', ''],
            ['endElement', ''],
            ['slot', 'start', 'name', 'skull'],
            ['slot', 'start'],
            [3, 'src', 'alt'],
            [3, 'ngSwitch'],
            [
              'slot',
              'start',
              'color',
              'danger',
              'shape',
              'round',
              3,
              'click',
              4,
              'ngSwitchCase',
            ],
            ['slot', 'start', 3, 'checked', 'ionChange', 4, 'ngSwitchCase'],
            ['slot', 'start', 3, 'value', 4, 'ngSwitchCase'],
            ['slot', 'start', 'color', 'danger', 'shape', 'round', 3, 'click'],
            ['slot', 'icon-only', 'name', 'remove'],
            ['slot', 'start', 3, 'checked', 'ionChange'],
            ['slot', 'start', 3, 'value'],
            ['slot', 'end', 4, 'ngSwitchCase'],
            [
              'placeholder',
              'R\xf4le',
              'interface',
              'action-sheet',
              'cancelText',
              'Annuler',
              3,
              'interfaceOptions',
              'value',
              'ionChange',
              4,
              'ngSwitchCase',
            ],
            ['slot', 'end', 4, 'ngSwitchDefault'],
            ['slot', 'end'],
            [
              'placeholder',
              'R\xf4le',
              'interface',
              'action-sheet',
              'cancelText',
              'Annuler',
              3,
              'interfaceOptions',
              'value',
              'ionChange',
            ],
            [3, 'value', 4, 'ngFor', 'ngForOf', 'ngForTrackBy'],
            [3, 'value'],
            ['class', 'status-icon', 4, 'ngFor', 'ngForOf', 'ngForTrackBy'],
            [1, 'status-icon'],
          ],
          template: function (C, p) {
            if (
              (1 & C &&
                (e.TgZ(0, 'ion-item', 0),
                e.YNc(1, m, 1, 0, 'ion-icon', 1),
                e.YNc(2, _, 4, 6, 'ion-thumbnail', 2),
                e.TgZ(3, 'ion-label')(4, 'h2'),
                e._uU(5),
                e.qZA(),
                e.TgZ(6, 'p'),
                e._uU(7),
                e.ALo(8, 'playerRoleName'),
                e.qZA()(),
                e.YNc(9, w, 1, 0, 'ng-container', 3),
                e.qZA(),
                e.YNc(10, h, 4, 4, 'ng-template', null, 4, e.W1O),
                e.YNc(12, P, 4, 3, 'ng-template', null, 5, e.W1O)),
              2 & C)
            ) {
              const x = e.MAs(11),
                D = e.MAs(13);
              e.Q6J('disabled', p.player.isDead || p.disabled)(
                'color',
                p.player.isDead ? 'medium' : ''
              ),
                e.xp6(1),
                e.Q6J('ngIf', p.player.isDead)('ngIfElse', x),
                e.xp6(1),
                e.Q6J('ngIf', p.player.role !== p.playerRoleEnum.NOT_SELECTED),
                e.xp6(3),
                e.Oqu(p.player.name),
                e.xp6(2),
                e.Oqu(e.lcZ(8, 8, p.player.role)),
                e.xp6(2),
                e.Q6J('ngTemplateOutlet', D);
            }
          },
          dependencies: [
            l.ez,
            l.sg,
            l.O5,
            l.tP,
            l.RF,
            l.n9,
            l.ED,
            n.Pc,
            n.YG,
            n.nz,
            n.gu,
            n.Ie,
            n.Q$,
            n.B7,
            n.Nh,
            n.t9,
            n.n0,
            n.Bs,
            n.w,
            n.U5,
            n.QI,
            u.L,
            a.$,
            o.E,
          ],
          styles: ['.status-icon[_ngcontent-%COMP%]{font-size:20px}'],
        }));
    },
    4253: (O, g, i) => {
      i.d(g, { d: () => e });
      var e = (() => {
        return (
          ((l = e || (e = {}))[(l.DEFAULT = 0)] = 'DEFAULT'),
          (l[(l.CREATE = 1)] = 'CREATE'),
          (l[(l.SELECT_SINGLE = 2)] = 'SELECT_SINGLE'),
          (l[(l.SELECT_MULTI = 3)] = 'SELECT_MULTI'),
          (l[(l.EDIT_ROLE = 4)] = 'EDIT_ROLE'),
          e
        );
        var l;
      })();
    },
    6215: (O, g, i) => {
      i.d(g, { $: () => n });
      var e = i(6146),
        l = i(8256);
      class n {
        transform(a) {
          switch (a) {
            case e.k.VILLAGEOIS:
              return `${n.IMAGES_PATH}villageois.webp`;
            case e.k.LOUP_GAROU:
              return `${n.IMAGES_PATH}loup_garou.webp`;
            case e.k.CHASSEUR:
              return `${n.IMAGES_PATH}chasseur.webp`;
            case e.k.CUPIDON:
              return `${n.IMAGES_PATH}cupidon.webp`;
            case e.k.PETITE_FILLE:
              return `${n.IMAGES_PATH}petite_fille.webp`;
            case e.k.SORCIERE:
              return `${n.IMAGES_PATH}sorciere.webp`;
            case e.k.VOLEUR:
              return `${n.IMAGES_PATH}voleur.webp`;
            case e.k.VOYANTE:
              return `${n.IMAGES_PATH}voyante.webp`;
            case e.k.JOUEUR_FLUTE:
              return `${n.IMAGES_PATH}joueur_flute.webp`;
            default:
              return '';
          }
        }
      }
      (n.IMAGES_PATH = 'assets/images/roles/'),
        (n.ɵfac = function (a) {
          return new (a || n)();
        }),
        (n.ɵpipe = l.Yjl({
          name: 'playerRoleImage',
          type: n,
          pure: !0,
          standalone: !0,
        }));
    },
    9297: (O, g, i) => {
      i.d(g, { L: () => n });
      var e = i(6146),
        l = i(8256);
      class n {
        transform(a) {
          switch (a) {
            case e.k.VILLAGEOIS:
              return 'Villageois';
            case e.k.LOUP_GAROU:
              return 'Loup-Garou';
            case e.k.CHASSEUR:
              return 'Chasseur';
            case e.k.CUPIDON:
              return 'Cupidon';
            case e.k.PETITE_FILLE:
              return 'Petite fille';
            case e.k.SORCIERE:
              return 'Sorci\xe8re';
            case e.k.VOLEUR:
              return 'Voleur';
            case e.k.VOYANTE:
              return 'Voyante';
            case e.k.JOUEUR_FLUTE:
              return 'Joueur de fl\xfbte';
            default:
              return '';
          }
        }
      }
      (n.ɵfac = function (a) {
        return new (a || n)();
      }),
        (n.ɵpipe = l.Yjl({
          name: 'playerRoleName',
          type: n,
          pure: !0,
          standalone: !0,
        }));
    },
    7517: (O, g, i) => {
      i.d(g, { E: () => n });
      var e = i(4206),
        l = i(8256);
      class n {
        transform(a) {
          switch (a) {
            case e.M.WOLF_TARGET:
              return '\u{1f43a}';
            case e.M.HEALTH_POTION:
              return '\u{1f49a}';
            case e.M.DEATH_POTION:
              return '\u{1f5a4}';
            case e.M.CAPTAIN:
              return '\u{1f396}\ufe0f';
            case e.M.LOVER:
              return '\u{1f495}';
            case e.M.CHARMED:
              return '\u{1f3b6}';
            default:
              return '';
          }
        }
      }
      (n.ɵfac = function (a) {
        return new (a || n)();
      }),
        (n.ɵpipe = l.Yjl({
          name: 'playerStatus',
          type: n,
          pure: !0,
          standalone: !0,
        }));
    },
    4518: (O, g, i) => {
      i.d(g, { y: () => e });
      const e = (l, n) => n.id;
    },
    7409: (O, g, i) => {
      i.d(g, { A: () => e });
      const e = (l, n) => n;
    },
    100: (O, g, i) => {
      i.d(g, { V: () => e });
      const e = (l, n) => n;
    },
  },
]);
