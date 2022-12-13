'use strict';
(self.webpackChunkloup_garou_mj = self.webpackChunkloup_garou_mj || []).push([
  [2289],
  {
    2289: (z, C, g) => {
      g.r(C), g.d(C, { ion_virtual_scroll: () => w });
      var x = g(5861),
        u = g(1308),
        O = g(5730);
      const v = 'item',
        y = 'header',
        _ = 'footer',
        U = (t, e) => {
          const i = P(t, e);
          return i && null !== t.ownerDocument
            ? t.ownerDocument.importNode(i.content, !0).children[0]
            : null;
        },
        P = (t, e) => {
          switch (e) {
            case v:
              return t.querySelector('template:not([name])');
            case y:
              return t.querySelector('template[name=header]');
            case _:
              return t.querySelector('template[name=footer]');
          }
        },
        S = (t, e, i, s, l, r, c, n, o, h, a, m) => {
          const p = [],
            $ = m + a;
          for (let d = a; d < $; d++) {
            const E = t[d];
            if (l) {
              const f = l(E, d, t);
              null != f &&
                p.push({
                  i: h++,
                  type: y,
                  value: f,
                  index: d,
                  height: i ? i(f, d) : c,
                  reads: i ? 0 : 2,
                  visible: !!i,
                });
            }
            if (
              (p.push({
                i: h++,
                type: v,
                value: E,
                index: d,
                height: e ? e(E, d) : o,
                reads: e ? 0 : 2,
                visible: !!e,
              }),
              r)
            ) {
              const f = r(E, d, t);
              null != f &&
                p.push({
                  i: h++,
                  type: _,
                  value: f,
                  index: d,
                  height: s ? s(f, d) : n,
                  reads: s ? 0 : 2,
                  visible: !!s,
                });
            }
          }
          return p;
        },
        w = class {
          constructor(t) {
            (0, u.r)(this, t),
              (this.range = { offset: 0, length: 0 }),
              (this.viewportHeight = 0),
              (this.cells = []),
              (this.virtualDom = []),
              (this.isEnabled = !1),
              (this.viewportOffset = 0),
              (this.currentScrollTop = 0),
              (this.indexDirty = 0),
              (this.lastItemLen = 0),
              (this.totalHeight = 0),
              (this.approxItemHeight = 45),
              (this.approxHeaderHeight = 30),
              (this.approxFooterHeight = 30),
              (this.onScroll = () => {
                this.updateVirtualScroll();
              });
          }
          itemsChanged() {
            this.calcCells(), this.updateVirtualScroll();
          }
          componentWillLoad() {
            console.warn(
              '[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.'
            );
          }
          connectedCallback() {
            var t = this;
            return (0, x.Z)(function* () {
              const e = t.el.closest('ion-content');
              e
                ? ((t.scrollEl = yield e.getScrollElement()),
                  (t.contentEl = e),
                  t.calcCells(),
                  t.updateState())
                : console.error(
                    '<ion-virtual-scroll> must be used inside an <ion-content>'
                  );
            })();
          }
          componentDidUpdate() {
            this.updateState();
          }
          disconnectedCallback() {
            this.scrollEl = void 0;
          }
          onResize() {
            this.calcCells(), this.updateVirtualScroll();
          }
          positionForItem(t) {
            return Promise.resolve(
              ((t, e, i) => {
                const s = e.find((l) => l.type === v && l.index === t);
                return s ? i[s.i] : -1;
              })(t, this.cells, this.getHeightIndex())
            );
          }
          checkRange(t, e = -1) {
            var i = this;
            return (0, x.Z)(function* () {
              if (!i.items) return;
              const s = -1 === e ? i.items.length - t : e,
                l = ((t, e) =>
                  0 === e
                    ? 0
                    : e === (t.length > 0 ? t[t.length - 1].index : 0) + 1
                    ? t.length
                    : t.findIndex((s) => s.index === e))(i.cells, t),
                r = S(
                  i.items,
                  i.itemHeight,
                  i.headerHeight,
                  i.footerHeight,
                  i.headerFn,
                  i.footerFn,
                  i.approxHeaderHeight,
                  i.approxFooterHeight,
                  i.approxItemHeight,
                  l,
                  t,
                  s
                );
              (i.cells = ((t, e, i) => {
                if (0 === i && e.length >= t.length) return e;
                for (let s = 0; s < e.length; s++) t[s + i] = e[s];
                return t;
              })(i.cells, r, l)),
                (i.lastItemLen = i.items.length),
                (i.indexDirty = Math.max(t - 1, 0)),
                i.scheduleUpdate();
            })();
          }
          checkEnd() {
            var t = this;
            return (0, x.Z)(function* () {
              t.items && t.checkRange(t.lastItemLen);
            })();
          }
          updateVirtualScroll() {
            !this.isEnabled ||
              !this.scrollEl ||
              (this.timerUpdate &&
                (clearTimeout(this.timerUpdate), (this.timerUpdate = void 0)),
              (0, u.f)(this.readVS.bind(this)),
              (0, u.c)(this.writeVS.bind(this)));
          }
          readVS() {
            const { contentEl: t, scrollEl: e, el: i } = this;
            let s = 0,
              l = i;
            for (; null !== l && l !== t; )
              (s += l.offsetTop), (l = l.offsetParent);
            (this.viewportOffset = s),
              e &&
                ((this.viewportHeight = e.offsetHeight),
                (this.currentScrollTop = e.scrollTop));
          }
          writeVS() {
            const t = this.indexDirty,
              i = ((t, e, i) => ({
                top: Math.max(t - 100, 0),
                bottom: t + e + 100,
              }))(
                this.currentScrollTop - this.viewportOffset,
                this.viewportHeight
              ),
              s = this.getHeightIndex(),
              l = ((t, e, i) => {
                const s = e.top,
                  l = e.bottom;
                let r = 0;
                for (; r < t.length && !(t[r] > s); r++);
                const c = Math.max(r - 2 - 1, 0);
                for (; r < t.length && !(t[r] >= l); r++);
                return { offset: c, length: Math.min(r + 2, t.length) - c };
              })(s, i);
            !((t, e, i) =>
              t <= i.offset + i.length ||
              e.offset !== i.offset ||
              e.length !== i.length)(t, this.range, l) ||
              ((this.range = l),
              ((t, e, i, s) => {
                for (const n of t) (n.change = 0), (n.d = !0);
                const l = [],
                  r = s.offset + s.length;
                for (let n = s.offset; n < r; n++) {
                  const o = i[n],
                    h = t.find((a) => a.d && a.cell === o);
                  if (h) {
                    const a = e[n];
                    a !== h.top && ((h.top = a), (h.change = 1)), (h.d = !1);
                  } else l.push(o);
                }
                const c = t.filter((n) => n.d);
                for (const n of l) {
                  const o = c.find((a) => a.d && a.cell.type === n.type),
                    h = n.i;
                  o
                    ? ((o.d = !1), (o.change = 2), (o.cell = n), (o.top = e[h]))
                    : t.push({
                        d: !1,
                        cell: n,
                        visible: !0,
                        change: 2,
                        top: e[h],
                      });
                }
                t.filter((n) => n.d && -9999 !== n.top).forEach((n) => {
                  (n.change = 1), (n.top = -9999);
                });
              })(this.virtualDom, s, this.cells, l),
              this.nodeRender
                ? ((t, e, i, s) => {
                    var l;
                    const r = Array.from(t.children).filter(
                        (o) => 'TEMPLATE' !== o.tagName
                      ),
                      c = r.length;
                    let n;
                    for (let o = 0; o < i.length; o++) {
                      const h = i[o],
                        a = h.cell;
                      if (2 === h.change) {
                        if (o < c) (n = r[o]), e(n, a, o);
                        else {
                          const p = U(t, a.type);
                          (n =
                            null !== (l = e(p, a, o)) && void 0 !== l ? l : p),
                            n.classList.add('virtual-item'),
                            t.appendChild(n);
                        }
                        n.$ionCell = a;
                      } else n = r[o];
                      0 !== h.change &&
                        (n.style.transform = `translate3d(0,${h.top}px,0)`);
                      const m = a.visible;
                      h.visible !== m &&
                        (m
                          ? n.classList.remove('virtual-loading')
                          : n.classList.add('virtual-loading'),
                        (h.visible = m)),
                        a.reads > 0 && (s(a, n), a.reads--);
                    }
                  })(
                    this.el,
                    this.nodeRender,
                    this.virtualDom,
                    this.updateCellHeight.bind(this)
                  )
                : this.domRender
                ? this.domRender(this.virtualDom)
                : this.renderItem && (0, u.j)(this));
          }
          updateCellHeight(t, e) {
            const i = () => {
              if (e.$ionCell === t) {
                const s = window.getComputedStyle(e),
                  l =
                    e.offsetHeight +
                    parseFloat(s.getPropertyValue('margin-bottom'));
                this.setCellHeight(t, l);
              }
            };
            e ? (0, O.c)(e, i) : i();
          }
          setCellHeight(t, e) {
            const i = t.i;
            t === this.cells[i] &&
              (t.height !== e || !0 !== t.visible) &&
              ((t.visible = !0),
              (t.height = e),
              (this.indexDirty = Math.min(this.indexDirty, i)),
              this.scheduleUpdate());
          }
          scheduleUpdate() {
            clearTimeout(this.timerUpdate),
              (this.timerUpdate = setTimeout(
                () => this.updateVirtualScroll(),
                100
              ));
          }
          updateState() {
            const t = !!(this.scrollEl && this.cells.length > 0);
            t !== this.isEnabled &&
              (this.enableScrollEvents(t), t && this.updateVirtualScroll());
          }
          calcCells() {
            !this.items ||
              ((this.lastItemLen = this.items.length),
              (this.cells = S(
                this.items,
                this.itemHeight,
                this.headerHeight,
                this.footerHeight,
                this.headerFn,
                this.footerFn,
                this.approxHeaderHeight,
                this.approxFooterHeight,
                this.approxItemHeight,
                0,
                0,
                this.lastItemLen
              )),
              (this.indexDirty = 0));
          }
          getHeightIndex() {
            return (
              this.indexDirty !== 1 / 0 &&
                this.calcHeightIndex(this.indexDirty),
              this.heightIndex
            );
          }
          calcHeightIndex(t = 0) {
            (this.heightIndex = ((t, e) => {
              if (!t) return new Uint32Array(e);
              if (t.length === e) return t;
              if (e > t.length) {
                const i = new Uint32Array(e);
                return i.set(t), i;
              }
              return t.subarray(0, e);
            })(this.heightIndex, this.cells.length)),
              (this.totalHeight = ((t, e, i) => {
                let s = t[i];
                for (let l = i; l < t.length; l++)
                  (t[l] = s), (s += e[l].height);
                return s;
              })(this.heightIndex, this.cells, t)),
              (this.indexDirty = 1 / 0);
          }
          enableScrollEvents(t) {
            this.rmEvent && (this.rmEvent(), (this.rmEvent = void 0));
            const e = this.scrollEl;
            e &&
              ((this.isEnabled = t),
              e.addEventListener('scroll', this.onScroll),
              (this.rmEvent = () => {
                e.removeEventListener('scroll', this.onScroll);
              }));
          }
          renderVirtualNode(t) {
            const { type: e, value: i, index: s } = t.cell;
            switch (e) {
              case v:
                return this.renderItem(i, s);
              case y:
                return this.renderHeader(i, s);
              case _:
                return this.renderFooter(i, s);
            }
          }
          render() {
            return (0, u.h)(
              u.H,
              { style: { height: `${this.totalHeight}px` } },
              this.renderItem &&
                (0, u.h)(
                  W,
                  { dom: this.virtualDom },
                  this.virtualDom.map((t) => this.renderVirtualNode(t))
                )
            );
          }
          get el() {
            return (0, u.i)(this);
          }
          static get watchers() {
            return {
              itemHeight: ['itemsChanged'],
              headerHeight: ['itemsChanged'],
              footerHeight: ['itemsChanged'],
              items: ['itemsChanged'],
            };
          }
        },
        W = ({ dom: t }, e, i) =>
          i.map(e, (s, l) => {
            const r = t[l],
              c = s.vattrs || {};
            let n = c.class || '';
            return (
              (n += 'virtual-item '),
              r.visible || (n += 'virtual-loading'),
              Object.assign(Object.assign({}, s), {
                vattrs: Object.assign(Object.assign({}, c), {
                  class: n,
                  style: Object.assign(Object.assign({}, c.style), {
                    transform: `translate3d(0,${r.top}px,0)`,
                  }),
                }),
              })
            );
          });
      w.style =
        'ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}';
    },
  },
]);
