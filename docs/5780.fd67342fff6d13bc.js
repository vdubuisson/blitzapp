'use strict';
(self.webpackChunkloup_garou_mj = self.webpackChunkloup_garou_mj || []).push([
  [5780],
  {
    179: (h, s, t) => {
      t.r(s), t.d(s, { startStatusTap: () => a });
      var l = t(5861),
        o = t(1308),
        _ = t(6642),
        d = t(5730);
      const a = () => {
        const n = window;
        n.addEventListener('statusTap', () => {
          (0, o.f)(() => {
            const r = document.elementFromPoint(
              n.innerWidth / 2,
              n.innerHeight / 2
            );
            if (!r) return;
            const e = (0, _.f)(r);
            e &&
              new Promise((E) => (0, d.c)(e, E)).then(() => {
                (0, o.c)(
                  (0, l.Z)(function* () {
                    e.style.setProperty('--overflow', 'hidden'),
                      yield (0, _.s)(e, 300),
                      e.style.removeProperty('--overflow');
                  })
                );
              });
          });
        });
      };
    },
  },
]);
