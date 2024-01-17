function rv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var le =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function ja(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function ov(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            },
      );
    }),
    n
  );
}
var iv = { exports: {} },
  Tl = {},
  av = { exports: {} },
  fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oa = Symbol.for("react.element"),
  W2 = Symbol.for("react.portal"),
  G2 = Symbol.for("react.fragment"),
  K2 = Symbol.for("react.strict_mode"),
  q2 = Symbol.for("react.profiler"),
  Y2 = Symbol.for("react.provider"),
  X2 = Symbol.for("react.context"),
  Q2 = Symbol.for("react.forward_ref"),
  Z2 = Symbol.for("react.suspense"),
  J2 = Symbol.for("react.memo"),
  e4 = Symbol.for("react.lazy"),
  yh = Symbol.iterator;
function t4(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yh && e[yh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var sv = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  lv = Object.assign,
  uv = {};
function ci(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = uv),
    (this.updater = n || sv);
}
ci.prototype.isReactComponent = {};
ci.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ci.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function cv() {}
cv.prototype = ci.prototype;
function kf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = uv),
    (this.updater = n || sv);
}
var Rf = (kf.prototype = new cv());
Rf.constructor = kf;
lv(Rf, ci.prototype);
Rf.isPureReactComponent = !0;
var Eh = Array.isArray,
  fv = Object.prototype.hasOwnProperty,
  Tf = { current: null },
  dv = { key: !0, ref: !0, __self: !0, __source: !0 };
function hv(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      fv.call(t, r) && !dv.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Oa,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: Tf.current,
  };
}
function n4(e, t) {
  return {
    $$typeof: Oa,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Nf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Oa;
}
function r4(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ch = /\/+/g;
function wu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? r4("" + e.key)
    : t.toString(36);
}
function Fs(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Oa:
          case W2:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + wu(a, 0) : r),
      Eh(o)
        ? ((n = ""),
          e != null && (n = e.replace(Ch, "$&/") + "/"),
          Fs(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Nf(o) &&
            (o = n4(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Ch, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Eh(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + wu(i, s);
      a += Fs(i, t, n, l, o);
    }
  else if (((l = t4(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + wu(i, s++)), (a += Fs(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return a;
}
function is(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Fs(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function o4(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var mt = { current: null },
  ks = { transition: null },
  i4 = {
    ReactCurrentDispatcher: mt,
    ReactCurrentBatchConfig: ks,
    ReactCurrentOwner: Tf,
  };
fe.Children = {
  map: is,
  forEach: function (e, t, n) {
    is(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      is(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      is(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Nf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
fe.Component = ci;
fe.Fragment = G2;
fe.Profiler = q2;
fe.PureComponent = kf;
fe.StrictMode = K2;
fe.Suspense = Z2;
fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = i4;
fe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = lv({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Tf.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      fv.call(t, l) &&
        !dv.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Oa, type: e.type, key: o, ref: i, props: r, _owner: a };
};
fe.createContext = function (e) {
  return (
    (e = {
      $$typeof: X2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Y2, _context: e }),
    (e.Consumer = e)
  );
};
fe.createElement = hv;
fe.createFactory = function (e) {
  var t = hv.bind(null, e);
  return (t.type = e), t;
};
fe.createRef = function () {
  return { current: null };
};
fe.forwardRef = function (e) {
  return { $$typeof: Q2, render: e };
};
fe.isValidElement = Nf;
fe.lazy = function (e) {
  return { $$typeof: e4, _payload: { _status: -1, _result: e }, _init: o4 };
};
fe.memo = function (e, t) {
  return { $$typeof: J2, type: e, compare: t === void 0 ? null : t };
};
fe.startTransition = function (e) {
  var t = ks.transition;
  ks.transition = {};
  try {
    e();
  } finally {
    ks.transition = t;
  }
};
fe.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
fe.useCallback = function (e, t) {
  return mt.current.useCallback(e, t);
};
fe.useContext = function (e) {
  return mt.current.useContext(e);
};
fe.useDebugValue = function () {};
fe.useDeferredValue = function (e) {
  return mt.current.useDeferredValue(e);
};
fe.useEffect = function (e, t) {
  return mt.current.useEffect(e, t);
};
fe.useId = function () {
  return mt.current.useId();
};
fe.useImperativeHandle = function (e, t, n) {
  return mt.current.useImperativeHandle(e, t, n);
};
fe.useInsertionEffect = function (e, t) {
  return mt.current.useInsertionEffect(e, t);
};
fe.useLayoutEffect = function (e, t) {
  return mt.current.useLayoutEffect(e, t);
};
fe.useMemo = function (e, t) {
  return mt.current.useMemo(e, t);
};
fe.useReducer = function (e, t, n) {
  return mt.current.useReducer(e, t, n);
};
fe.useRef = function (e) {
  return mt.current.useRef(e);
};
fe.useState = function (e) {
  return mt.current.useState(e);
};
fe.useSyncExternalStore = function (e, t, n) {
  return mt.current.useSyncExternalStore(e, t, n);
};
fe.useTransition = function () {
  return mt.current.useTransition();
};
fe.version = "18.2.0";
av.exports = fe;
var _ = av.exports;
const ue = ja(_),
  a4 = rv({ __proto__: null, default: ue }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var s4 = _,
  l4 = Symbol.for("react.element"),
  u4 = Symbol.for("react.fragment"),
  c4 = Object.prototype.hasOwnProperty,
  f4 = s4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  d4 = { key: !0, ref: !0, __self: !0, __source: !0 };
function pv(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) c4.call(t, r) && !d4.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: l4,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: f4.current,
  };
}
Tl.Fragment = u4;
Tl.jsx = pv;
Tl.jsxs = pv;
iv.exports = Tl;
var w = iv.exports,
  Xc = {},
  xv = { exports: {} },
  jt = {},
  mv = { exports: {} },
  vv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, U) {
    var H = j.length;
    j.push(U);
    e: for (; 0 < H; ) {
      var F = (H - 1) >>> 1,
        I = j[F];
      if (0 < o(I, U)) (j[F] = U), (j[H] = I), (H = F);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var U = j[0],
      H = j.pop();
    if (H !== U) {
      j[0] = H;
      e: for (var F = 0, I = j.length, V = I >>> 1; F < V; ) {
        var z = 2 * (F + 1) - 1,
          re = j[z],
          X = z + 1,
          he = j[X];
        if (0 > o(re, H))
          X < I && 0 > o(he, re)
            ? ((j[F] = he), (j[X] = H), (F = X))
            : ((j[F] = re), (j[z] = H), (F = z));
        else if (X < I && 0 > o(he, H)) (j[F] = he), (j[X] = H), (F = X);
        else break e;
      }
    }
    return U;
  }
  function o(j, U) {
    var H = j.sortIndex - U.sortIndex;
    return H !== 0 ? H : j.id - U.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    x = !1,
    m = !1,
    g = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(j) {
    for (var U = n(u); U !== null; ) {
      if (U.callback === null) r(u);
      else if (U.startTime <= j)
        r(u), (U.sortIndex = U.expirationTime), t(l, U);
      else break;
      U = n(u);
    }
  }
  function y(j) {
    if (((g = !1), p(j), !m))
      if (n(l) !== null) (m = !0), G(A);
      else {
        var U = n(u);
        U !== null && R(y, U.startTime - j);
      }
  }
  function A(j, U) {
    (m = !1), g && ((g = !1), v(D), (D = -1)), (x = !0);
    var H = f;
    try {
      for (
        p(U), d = n(l);
        d !== null && (!(d.expirationTime > U) || (j && !P()));

      ) {
        var F = d.callback;
        if (typeof F == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var I = F(d.expirationTime <= U);
          (U = e.unstable_now()),
            typeof I == "function" ? (d.callback = I) : d === n(l) && r(l),
            p(U);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var V = !0;
      else {
        var z = n(u);
        z !== null && R(y, z.startTime - U), (V = !1);
      }
      return V;
    } finally {
      (d = null), (f = H), (x = !1);
    }
  }
  var C = !1,
    S = null,
    D = -1,
    b = 5,
    B = -1;
  function P() {
    return !(e.unstable_now() - B < b);
  }
  function N() {
    if (S !== null) {
      var j = e.unstable_now();
      B = j;
      var U = !0;
      try {
        U = S(!0, j);
      } finally {
        U ? O() : ((C = !1), (S = null));
      }
    } else C = !1;
  }
  var O;
  if (typeof h == "function")
    O = function () {
      h(N);
    };
  else if (typeof MessageChannel < "u") {
    var k = new MessageChannel(),
      M = k.port2;
    (k.port1.onmessage = N),
      (O = function () {
        M.postMessage(null);
      });
  } else
    O = function () {
      E(N, 0);
    };
  function G(j) {
    (S = j), C || ((C = !0), O());
  }
  function R(j, U) {
    D = E(function () {
      j(e.unstable_now());
    }, U);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || x || ((m = !0), G(A));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (b = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (j) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = f;
      }
      var H = f;
      f = U;
      try {
        return j();
      } finally {
        f = H;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, U) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var H = f;
      f = j;
      try {
        return U();
      } finally {
        f = H;
      }
    }),
    (e.unstable_scheduleCallback = function (j, U, H) {
      var F = e.unstable_now();
      switch (
        (typeof H == "object" && H !== null
          ? ((H = H.delay), (H = typeof H == "number" && 0 < H ? F + H : F))
          : (H = F),
        j)
      ) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return (
        (I = H + I),
        (j = {
          id: c++,
          callback: U,
          priorityLevel: j,
          startTime: H,
          expirationTime: I,
          sortIndex: -1,
        }),
        H > F
          ? ((j.sortIndex = H),
            t(u, j),
            n(l) === null &&
              j === n(u) &&
              (g ? (v(D), (D = -1)) : (g = !0), R(y, H - F)))
          : ((j.sortIndex = I), t(l, j), m || x || ((m = !0), G(A))),
        j
      );
    }),
    (e.unstable_shouldYield = P),
    (e.unstable_wrapCallback = function (j) {
      var U = f;
      return function () {
        var H = f;
        f = U;
        try {
          return j.apply(this, arguments);
        } finally {
          f = H;
        }
      };
    });
})(vv);
mv.exports = vv;
var h4 = mv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gv = _,
  Tt = h4;
function W(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var yv = new Set(),
  la = {};
function lo(e, t) {
  Yo(e, t), Yo(e + "Capture", t);
}
function Yo(e, t) {
  for (la[e] = t, e = 0; e < t.length; e++) yv.add(t[e]);
}
var Mn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Qc = Object.prototype.hasOwnProperty,
  p4 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wh = {},
  Sh = {};
function x4(e) {
  return Qc.call(Sh, e)
    ? !0
    : Qc.call(wh, e)
      ? !1
      : p4.test(e)
        ? (Sh[e] = !0)
        : ((wh[e] = !0), !1);
}
function m4(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function v4(e, t, n, r) {
  if (t === null || typeof t > "u" || m4(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function vt(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var rt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    rt[e] = new vt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  rt[t] = new vt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  rt[e] = new vt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  rt[e] = new vt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    rt[e] = new vt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  rt[e] = new vt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  rt[e] = new vt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  rt[e] = new vt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  rt[e] = new vt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var jf = /[\-:]([a-z])/g;
function Of(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(jf, Of);
    rt[t] = new vt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(jf, Of);
    rt[t] = new vt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(jf, Of);
  rt[t] = new vt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  rt[e] = new vt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
rt.xlinkHref = new vt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  rt[e] = new vt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Mf(e, t, n, r) {
  var o = rt.hasOwnProperty(t) ? rt[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (v4(t, n, o, r) && (n = null),
    r || o === null
      ? x4(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Un = gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  as = Symbol.for("react.element"),
  So = Symbol.for("react.portal"),
  Ao = Symbol.for("react.fragment"),
  Lf = Symbol.for("react.strict_mode"),
  Zc = Symbol.for("react.profiler"),
  Ev = Symbol.for("react.provider"),
  Cv = Symbol.for("react.context"),
  If = Symbol.for("react.forward_ref"),
  Jc = Symbol.for("react.suspense"),
  e0 = Symbol.for("react.suspense_list"),
  zf = Symbol.for("react.memo"),
  Jn = Symbol.for("react.lazy"),
  wv = Symbol.for("react.offscreen"),
  Ah = Symbol.iterator;
function Ci(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ah && e[Ah]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Re = Object.assign,
  Su;
function Ii(e) {
  if (Su === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Su = (t && t[1]) || "";
    }
  return (
    `
` +
    Su +
    e
  );
}
var Au = !1;
function Du(e, t) {
  if (!e || Au) return "";
  Au = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (Au = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ii(e) : "";
}
function g4(e) {
  switch (e.tag) {
    case 5:
      return Ii(e.type);
    case 16:
      return Ii("Lazy");
    case 13:
      return Ii("Suspense");
    case 19:
      return Ii("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Du(e.type, !1)), e;
    case 11:
      return (e = Du(e.type.render, !1)), e;
    case 1:
      return (e = Du(e.type, !0)), e;
    default:
      return "";
  }
}
function t0(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ao:
      return "Fragment";
    case So:
      return "Portal";
    case Zc:
      return "Profiler";
    case Lf:
      return "StrictMode";
    case Jc:
      return "Suspense";
    case e0:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Cv:
        return (e.displayName || "Context") + ".Consumer";
      case Ev:
        return (e._context.displayName || "Context") + ".Provider";
      case If:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case zf:
        return (
          (t = e.displayName || null), t !== null ? t : t0(e.type) || "Memo"
        );
      case Jn:
        (t = e._payload), (e = e._init);
        try {
          return t0(e(t));
        } catch {}
    }
  return null;
}
function y4(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return t0(t);
    case 8:
      return t === Lf ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function mr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Sv(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function E4(e) {
  var t = Sv(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ss(e) {
  e._valueTracker || (e._valueTracker = E4(e));
}
function Av(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Sv(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ys(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function n0(e, t) {
  var n = t.checked;
  return Re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Dh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = mr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Dv(e, t) {
  (t = t.checked), t != null && Mf(e, "checked", t, !1);
}
function r0(e, t) {
  Dv(e, t);
  var n = mr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? o0(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && o0(e, t.type, mr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function _h(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function o0(e, t, n) {
  (t !== "number" || Ys(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zi = Array.isArray;
function Uo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function i0(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(W(91));
  return Re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Bh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(W(92));
      if (zi(n)) {
        if (1 < n.length) throw Error(W(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: mr(n) };
}
function _v(e, t) {
  var n = mr(t.value),
    r = mr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ph(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Bv(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function a0(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Bv(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var ls,
  Pv = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ls = ls || document.createElement("div"),
          ls.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ls.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ua(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Wi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  C4 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wi).forEach(function (e) {
  C4.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wi[t] = Wi[e]);
  });
});
function bv(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Wi.hasOwnProperty(e) && Wi[e])
      ? ("" + t).trim()
      : t + "px";
}
function Fv(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = bv(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var w4 = Re(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function s0(e, t) {
  if (t) {
    if (w4[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(W(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(W(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(W(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(W(62));
  }
}
function l0(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var u0 = null;
function $f(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var c0 = null,
  Ho = null,
  Wo = null;
function bh(e) {
  if ((e = Ia(e))) {
    if (typeof c0 != "function") throw Error(W(280));
    var t = e.stateNode;
    t && ((t = Ll(t)), c0(e.stateNode, e.type, t));
  }
}
function kv(e) {
  Ho ? (Wo ? Wo.push(e) : (Wo = [e])) : (Ho = e);
}
function Rv() {
  if (Ho) {
    var e = Ho,
      t = Wo;
    if (((Wo = Ho = null), bh(e), t)) for (e = 0; e < t.length; e++) bh(t[e]);
  }
}
function Tv(e, t) {
  return e(t);
}
function Nv() {}
var _u = !1;
function jv(e, t, n) {
  if (_u) return e(t, n);
  _u = !0;
  try {
    return Tv(e, t, n);
  } finally {
    (_u = !1), (Ho !== null || Wo !== null) && (Nv(), Rv());
  }
}
function ca(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ll(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(W(231, t, typeof n));
  return n;
}
var f0 = !1;
if (Mn)
  try {
    var wi = {};
    Object.defineProperty(wi, "passive", {
      get: function () {
        f0 = !0;
      },
    }),
      window.addEventListener("test", wi, wi),
      window.removeEventListener("test", wi, wi);
  } catch {
    f0 = !1;
  }
function S4(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Gi = !1,
  Xs = null,
  Qs = !1,
  d0 = null,
  A4 = {
    onError: function (e) {
      (Gi = !0), (Xs = e);
    },
  };
function D4(e, t, n, r, o, i, a, s, l) {
  (Gi = !1), (Xs = null), S4.apply(A4, arguments);
}
function _4(e, t, n, r, o, i, a, s, l) {
  if ((D4.apply(this, arguments), Gi)) {
    if (Gi) {
      var u = Xs;
      (Gi = !1), (Xs = null);
    } else throw Error(W(198));
    Qs || ((Qs = !0), (d0 = u));
  }
}
function uo(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ov(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Fh(e) {
  if (uo(e) !== e) throw Error(W(188));
}
function B4(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = uo(e)), t === null)) throw Error(W(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Fh(o), e;
        if (i === r) return Fh(o), t;
        i = i.sibling;
      }
      throw Error(W(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(W(189));
      }
    }
    if (n.alternate !== r) throw Error(W(190));
  }
  if (n.tag !== 3) throw Error(W(188));
  return n.stateNode.current === n ? e : t;
}
function Mv(e) {
  return (e = B4(e)), e !== null ? Lv(e) : null;
}
function Lv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Lv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Iv = Tt.unstable_scheduleCallback,
  kh = Tt.unstable_cancelCallback,
  P4 = Tt.unstable_shouldYield,
  b4 = Tt.unstable_requestPaint,
  Le = Tt.unstable_now,
  F4 = Tt.unstable_getCurrentPriorityLevel,
  Vf = Tt.unstable_ImmediatePriority,
  zv = Tt.unstable_UserBlockingPriority,
  Zs = Tt.unstable_NormalPriority,
  k4 = Tt.unstable_LowPriority,
  $v = Tt.unstable_IdlePriority,
  Nl = null,
  Cn = null;
function R4(e) {
  if (Cn && typeof Cn.onCommitFiberRoot == "function")
    try {
      Cn.onCommitFiberRoot(Nl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ln = Math.clz32 ? Math.clz32 : j4,
  T4 = Math.log,
  N4 = Math.LN2;
function j4(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((T4(e) / N4) | 0)) | 0;
}
var us = 64,
  cs = 4194304;
function $i(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Js(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (r = $i(s)) : ((i &= a), i !== 0 && (r = $i(i)));
  } else (a = n & ~o), a !== 0 ? (r = $i(a)) : i !== 0 && (r = $i(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ln(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function O4(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function M4(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - ln(i),
      s = 1 << a,
      l = o[a];
    l === -1
      ? (!(s & n) || s & r) && (o[a] = O4(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function h0(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Vv() {
  var e = us;
  return (us <<= 1), !(us & 4194240) && (us = 64), e;
}
function Bu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ma(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ln(t)),
    (e[t] = n);
}
function L4(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - ln(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Uf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ln(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ge = 0;
function Uv(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Hv,
  Hf,
  Wv,
  Gv,
  Kv,
  p0 = !1,
  fs = [],
  sr = null,
  lr = null,
  ur = null,
  fa = new Map(),
  da = new Map(),
  nr = [],
  I4 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Rh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      sr = null;
      break;
    case "dragenter":
    case "dragleave":
      lr = null;
      break;
    case "mouseover":
    case "mouseout":
      ur = null;
      break;
    case "pointerover":
    case "pointerout":
      fa.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      da.delete(t.pointerId);
  }
}
function Si(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Ia(t)), t !== null && Hf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function z4(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (sr = Si(sr, e, t, n, r, o)), !0;
    case "dragenter":
      return (lr = Si(lr, e, t, n, r, o)), !0;
    case "mouseover":
      return (ur = Si(ur, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return fa.set(i, Si(fa.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), da.set(i, Si(da.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function qv(e) {
  var t = zr(e.target);
  if (t !== null) {
    var n = uo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ov(n)), t !== null)) {
          (e.blockedOn = t),
            Kv(e.priority, function () {
              Wv(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Rs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = x0(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (u0 = r), n.target.dispatchEvent(r), (u0 = null);
    } else return (t = Ia(n)), t !== null && Hf(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Th(e, t, n) {
  Rs(e) && n.delete(t);
}
function $4() {
  (p0 = !1),
    sr !== null && Rs(sr) && (sr = null),
    lr !== null && Rs(lr) && (lr = null),
    ur !== null && Rs(ur) && (ur = null),
    fa.forEach(Th),
    da.forEach(Th);
}
function Ai(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    p0 ||
      ((p0 = !0),
      Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority, $4)));
}
function ha(e) {
  function t(o) {
    return Ai(o, e);
  }
  if (0 < fs.length) {
    Ai(fs[0], e);
    for (var n = 1; n < fs.length; n++) {
      var r = fs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    sr !== null && Ai(sr, e),
      lr !== null && Ai(lr, e),
      ur !== null && Ai(ur, e),
      fa.forEach(t),
      da.forEach(t),
      n = 0;
    n < nr.length;
    n++
  )
    (r = nr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nr.length && ((n = nr[0]), n.blockedOn === null); )
    qv(n), n.blockedOn === null && nr.shift();
}
var Go = Un.ReactCurrentBatchConfig,
  el = !0;
function V4(e, t, n, r) {
  var o = ge,
    i = Go.transition;
  Go.transition = null;
  try {
    (ge = 1), Wf(e, t, n, r);
  } finally {
    (ge = o), (Go.transition = i);
  }
}
function U4(e, t, n, r) {
  var o = ge,
    i = Go.transition;
  Go.transition = null;
  try {
    (ge = 4), Wf(e, t, n, r);
  } finally {
    (ge = o), (Go.transition = i);
  }
}
function Wf(e, t, n, r) {
  if (el) {
    var o = x0(e, t, n, r);
    if (o === null) Mu(e, t, r, tl, n), Rh(e, r);
    else if (z4(o, e, t, n, r)) r.stopPropagation();
    else if ((Rh(e, r), t & 4 && -1 < I4.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ia(o);
        if (
          (i !== null && Hv(i),
          (i = x0(e, t, n, r)),
          i === null && Mu(e, t, r, tl, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Mu(e, t, r, null, n);
  }
}
var tl = null;
function x0(e, t, n, r) {
  if (((tl = null), (e = $f(r)), (e = zr(e)), e !== null))
    if (((t = uo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ov(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (tl = e), null;
}
function Yv(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (F4()) {
        case Vf:
          return 1;
        case zv:
          return 4;
        case Zs:
        case k4:
          return 16;
        case $v:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var or = null,
  Gf = null,
  Ts = null;
function Xv() {
  if (Ts) return Ts;
  var e,
    t = Gf,
    n = t.length,
    r,
    o = "value" in or ? or.value : or.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (Ts = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ns(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ds() {
  return !0;
}
function Nh() {
  return !1;
}
function Ot(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ds
        : Nh),
      (this.isPropagationStopped = Nh),
      this
    );
  }
  return (
    Re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ds));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ds));
      },
      persist: function () {},
      isPersistent: ds,
    }),
    t
  );
}
var fi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Kf = Ot(fi),
  La = Re({}, fi, { view: 0, detail: 0 }),
  H4 = Ot(La),
  Pu,
  bu,
  Di,
  jl = Re({}, La, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: qf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Di &&
            (Di && e.type === "mousemove"
              ? ((Pu = e.screenX - Di.screenX), (bu = e.screenY - Di.screenY))
              : (bu = Pu = 0),
            (Di = e)),
          Pu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bu;
    },
  }),
  jh = Ot(jl),
  W4 = Re({}, jl, { dataTransfer: 0 }),
  G4 = Ot(W4),
  K4 = Re({}, La, { relatedTarget: 0 }),
  Fu = Ot(K4),
  q4 = Re({}, fi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Y4 = Ot(q4),
  X4 = Re({}, fi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Q4 = Ot(X4),
  Z4 = Re({}, fi, { data: 0 }),
  Oh = Ot(Z4),
  J4 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  eE = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  tE = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function nE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = tE[e]) ? !!t[e] : !1;
}
function qf() {
  return nE;
}
var rE = Re({}, La, {
    key: function (e) {
      if (e.key) {
        var t = J4[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ns(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? eE[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: qf,
    charCode: function (e) {
      return e.type === "keypress" ? Ns(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ns(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  oE = Ot(rE),
  iE = Re({}, jl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Mh = Ot(iE),
  aE = Re({}, La, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: qf,
  }),
  sE = Ot(aE),
  lE = Re({}, fi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  uE = Ot(lE),
  cE = Re({}, jl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  fE = Ot(cE),
  dE = [9, 13, 27, 32],
  Yf = Mn && "CompositionEvent" in window,
  Ki = null;
Mn && "documentMode" in document && (Ki = document.documentMode);
var hE = Mn && "TextEvent" in window && !Ki,
  Qv = Mn && (!Yf || (Ki && 8 < Ki && 11 >= Ki)),
  Lh = " ",
  Ih = !1;
function Zv(e, t) {
  switch (e) {
    case "keyup":
      return dE.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Jv(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Do = !1;
function pE(e, t) {
  switch (e) {
    case "compositionend":
      return Jv(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ih = !0), Lh);
    case "textInput":
      return (e = t.data), e === Lh && Ih ? null : e;
    default:
      return null;
  }
}
function xE(e, t) {
  if (Do)
    return e === "compositionend" || (!Yf && Zv(e, t))
      ? ((e = Xv()), (Ts = Gf = or = null), (Do = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Qv && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var mE = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function zh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!mE[e.type] : t === "textarea";
}
function e1(e, t, n, r) {
  kv(r),
    (t = nl(t, "onChange")),
    0 < t.length &&
      ((n = new Kf("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var qi = null,
  pa = null;
function vE(e) {
  f1(e, 0);
}
function Ol(e) {
  var t = Po(e);
  if (Av(t)) return e;
}
function gE(e, t) {
  if (e === "change") return t;
}
var t1 = !1;
if (Mn) {
  var ku;
  if (Mn) {
    var Ru = "oninput" in document;
    if (!Ru) {
      var $h = document.createElement("div");
      $h.setAttribute("oninput", "return;"),
        (Ru = typeof $h.oninput == "function");
    }
    ku = Ru;
  } else ku = !1;
  t1 = ku && (!document.documentMode || 9 < document.documentMode);
}
function Vh() {
  qi && (qi.detachEvent("onpropertychange", n1), (pa = qi = null));
}
function n1(e) {
  if (e.propertyName === "value" && Ol(pa)) {
    var t = [];
    e1(t, pa, e, $f(e)), jv(vE, t);
  }
}
function yE(e, t, n) {
  e === "focusin"
    ? (Vh(), (qi = t), (pa = n), qi.attachEvent("onpropertychange", n1))
    : e === "focusout" && Vh();
}
function EE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ol(pa);
}
function CE(e, t) {
  if (e === "click") return Ol(t);
}
function wE(e, t) {
  if (e === "input" || e === "change") return Ol(t);
}
function SE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dn = typeof Object.is == "function" ? Object.is : SE;
function xa(e, t) {
  if (dn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Qc.call(t, o) || !dn(e[o], t[o])) return !1;
  }
  return !0;
}
function Uh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Hh(e, t) {
  var n = Uh(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Uh(n);
  }
}
function r1(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? r1(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function o1() {
  for (var e = window, t = Ys(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ys(e.document);
  }
  return t;
}
function Xf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function AE(e) {
  var t = o1(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    r1(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Xf(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Hh(n, i));
        var a = Hh(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var DE = Mn && "documentMode" in document && 11 >= document.documentMode,
  _o = null,
  m0 = null,
  Yi = null,
  v0 = !1;
function Wh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  v0 ||
    _o == null ||
    _o !== Ys(r) ||
    ((r = _o),
    "selectionStart" in r && Xf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Yi && xa(Yi, r)) ||
      ((Yi = r),
      (r = nl(m0, "onSelect")),
      0 < r.length &&
        ((t = new Kf("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = _o))));
}
function hs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Bo = {
    animationend: hs("Animation", "AnimationEnd"),
    animationiteration: hs("Animation", "AnimationIteration"),
    animationstart: hs("Animation", "AnimationStart"),
    transitionend: hs("Transition", "TransitionEnd"),
  },
  Tu = {},
  i1 = {};
Mn &&
  ((i1 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bo.animationend.animation,
    delete Bo.animationiteration.animation,
    delete Bo.animationstart.animation),
  "TransitionEvent" in window || delete Bo.transitionend.transition);
function Ml(e) {
  if (Tu[e]) return Tu[e];
  if (!Bo[e]) return e;
  var t = Bo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in i1) return (Tu[e] = t[n]);
  return e;
}
var a1 = Ml("animationend"),
  s1 = Ml("animationiteration"),
  l1 = Ml("animationstart"),
  u1 = Ml("transitionend"),
  c1 = new Map(),
  Gh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Er(e, t) {
  c1.set(e, t), lo(t, [e]);
}
for (var Nu = 0; Nu < Gh.length; Nu++) {
  var ju = Gh[Nu],
    _E = ju.toLowerCase(),
    BE = ju[0].toUpperCase() + ju.slice(1);
  Er(_E, "on" + BE);
}
Er(a1, "onAnimationEnd");
Er(s1, "onAnimationIteration");
Er(l1, "onAnimationStart");
Er("dblclick", "onDoubleClick");
Er("focusin", "onFocus");
Er("focusout", "onBlur");
Er(u1, "onTransitionEnd");
Yo("onMouseEnter", ["mouseout", "mouseover"]);
Yo("onMouseLeave", ["mouseout", "mouseover"]);
Yo("onPointerEnter", ["pointerout", "pointerover"]);
Yo("onPointerLeave", ["pointerout", "pointerover"]);
lo(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
lo(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
lo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
lo(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
lo(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
lo(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Vi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  PE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi));
function Kh(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), _4(r, t, void 0, e), (e.currentTarget = null);
}
function f1(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e;
          Kh(o, s, u), (i = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Kh(o, s, u), (i = l);
        }
    }
  }
  if (Qs) throw ((e = d0), (Qs = !1), (d0 = null), e);
}
function Ae(e, t) {
  var n = t[w0];
  n === void 0 && (n = t[w0] = new Set());
  var r = e + "__bubble";
  n.has(r) || (d1(t, e, 2, !1), n.add(r));
}
function Ou(e, t, n) {
  var r = 0;
  t && (r |= 4), d1(n, e, r, t);
}
var ps = "_reactListening" + Math.random().toString(36).slice(2);
function ma(e) {
  if (!e[ps]) {
    (e[ps] = !0),
      yv.forEach(function (n) {
        n !== "selectionchange" && (PE.has(n) || Ou(n, !1, e), Ou(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ps] || ((t[ps] = !0), Ou("selectionchange", !1, t));
  }
}
function d1(e, t, n, r) {
  switch (Yv(t)) {
    case 1:
      var o = V4;
      break;
    case 4:
      o = U4;
      break;
    default:
      o = Wf;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !f0 ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function Mu(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = zr(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  jv(function () {
    var u = i,
      c = $f(n),
      d = [];
    e: {
      var f = c1.get(e);
      if (f !== void 0) {
        var x = Kf,
          m = e;
        switch (e) {
          case "keypress":
            if (Ns(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = oE;
            break;
          case "focusin":
            (m = "focus"), (x = Fu);
            break;
          case "focusout":
            (m = "blur"), (x = Fu);
            break;
          case "beforeblur":
          case "afterblur":
            x = Fu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = jh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = G4;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = sE;
            break;
          case a1:
          case s1:
          case l1:
            x = Y4;
            break;
          case u1:
            x = uE;
            break;
          case "scroll":
            x = H4;
            break;
          case "wheel":
            x = fE;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Q4;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Mh;
        }
        var g = (t & 4) !== 0,
          E = !g && e === "scroll",
          v = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var h = u, p; h !== null; ) {
          p = h;
          var y = p.stateNode;
          if (
            (p.tag === 5 &&
              y !== null &&
              ((p = y),
              v !== null && ((y = ca(h, v)), y != null && g.push(va(h, y, p)))),
            E)
          )
            break;
          h = h.return;
        }
        0 < g.length &&
          ((f = new x(f, m, null, n, c)), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          f &&
            n !== u0 &&
            (m = n.relatedTarget || n.fromElement) &&
            (zr(m) || m[Ln]))
        )
          break e;
        if (
          (x || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          x
            ? ((m = n.relatedTarget || n.toElement),
              (x = u),
              (m = m ? zr(m) : null),
              m !== null &&
                ((E = uo(m)), m !== E || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((x = null), (m = u)),
          x !== m)
        ) {
          if (
            ((g = jh),
            (y = "onMouseLeave"),
            (v = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Mh),
              (y = "onPointerLeave"),
              (v = "onPointerEnter"),
              (h = "pointer")),
            (E = x == null ? f : Po(x)),
            (p = m == null ? f : Po(m)),
            (f = new g(y, h + "leave", x, n, c)),
            (f.target = E),
            (f.relatedTarget = p),
            (y = null),
            zr(c) === u &&
              ((g = new g(v, h + "enter", m, n, c)),
              (g.target = p),
              (g.relatedTarget = E),
              (y = g)),
            (E = y),
            x && m)
          )
            t: {
              for (g = x, v = m, h = 0, p = g; p; p = Co(p)) h++;
              for (p = 0, y = v; y; y = Co(y)) p++;
              for (; 0 < h - p; ) (g = Co(g)), h--;
              for (; 0 < p - h; ) (v = Co(v)), p--;
              for (; h--; ) {
                if (g === v || (v !== null && g === v.alternate)) break t;
                (g = Co(g)), (v = Co(v));
              }
              g = null;
            }
          else g = null;
          x !== null && qh(d, f, x, g, !1),
            m !== null && E !== null && qh(d, E, m, g, !0);
        }
      }
      e: {
        if (
          ((f = u ? Po(u) : window),
          (x = f.nodeName && f.nodeName.toLowerCase()),
          x === "select" || (x === "input" && f.type === "file"))
        )
          var A = gE;
        else if (zh(f))
          if (t1) A = wE;
          else {
            A = EE;
            var C = yE;
          }
        else
          (x = f.nodeName) &&
            x.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (A = CE);
        if (A && (A = A(e, u))) {
          e1(d, A, n, c);
          break e;
        }
        C && C(e, f, u),
          e === "focusout" &&
            (C = f._wrapperState) &&
            C.controlled &&
            f.type === "number" &&
            o0(f, "number", f.value);
      }
      switch (((C = u ? Po(u) : window), e)) {
        case "focusin":
          (zh(C) || C.contentEditable === "true") &&
            ((_o = C), (m0 = u), (Yi = null));
          break;
        case "focusout":
          Yi = m0 = _o = null;
          break;
        case "mousedown":
          v0 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (v0 = !1), Wh(d, n, c);
          break;
        case "selectionchange":
          if (DE) break;
        case "keydown":
        case "keyup":
          Wh(d, n, c);
      }
      var S;
      if (Yf)
        e: {
          switch (e) {
            case "compositionstart":
              var D = "onCompositionStart";
              break e;
            case "compositionend":
              D = "onCompositionEnd";
              break e;
            case "compositionupdate":
              D = "onCompositionUpdate";
              break e;
          }
          D = void 0;
        }
      else
        Do
          ? Zv(e, n) && (D = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      D &&
        (Qv &&
          n.locale !== "ko" &&
          (Do || D !== "onCompositionStart"
            ? D === "onCompositionEnd" && Do && (S = Xv())
            : ((or = c),
              (Gf = "value" in or ? or.value : or.textContent),
              (Do = !0))),
        (C = nl(u, D)),
        0 < C.length &&
          ((D = new Oh(D, e, null, n, c)),
          d.push({ event: D, listeners: C }),
          S ? (D.data = S) : ((S = Jv(n)), S !== null && (D.data = S)))),
        (S = hE ? pE(e, n) : xE(e, n)) &&
          ((u = nl(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Oh("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = S)));
    }
    f1(d, t);
  });
}
function va(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function nl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ca(e, n)),
      i != null && r.unshift(va(e, i, o)),
      (i = ca(e, t)),
      i != null && r.push(va(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Co(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qh(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = ca(n, i)), l != null && a.unshift(va(n, l, s)))
        : o || ((l = ca(n, i)), l != null && a.push(va(n, l, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var bE = /\r\n?/g,
  FE = /\u0000|\uFFFD/g;
function Yh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      bE,
      `
`,
    )
    .replace(FE, "");
}
function xs(e, t, n) {
  if (((t = Yh(t)), Yh(e) !== t && n)) throw Error(W(425));
}
function rl() {}
var g0 = null,
  y0 = null;
function E0(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var C0 = typeof setTimeout == "function" ? setTimeout : void 0,
  kE = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Xh = typeof Promise == "function" ? Promise : void 0,
  RE =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Xh < "u"
        ? function (e) {
            return Xh.resolve(null).then(e).catch(TE);
          }
        : C0;
function TE(e) {
  setTimeout(function () {
    throw e;
  });
}
function Lu(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ha(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ha(t);
}
function cr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Qh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var di = Math.random().toString(36).slice(2),
  En = "__reactFiber$" + di,
  ga = "__reactProps$" + di,
  Ln = "__reactContainer$" + di,
  w0 = "__reactEvents$" + di,
  NE = "__reactListeners$" + di,
  jE = "__reactHandles$" + di;
function zr(e) {
  var t = e[En];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ln] || n[En])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Qh(e); e !== null; ) {
          if ((n = e[En])) return n;
          e = Qh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ia(e) {
  return (
    (e = e[En] || e[Ln]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Po(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(W(33));
}
function Ll(e) {
  return e[ga] || null;
}
var S0 = [],
  bo = -1;
function Cr(e) {
  return { current: e };
}
function _e(e) {
  0 > bo || ((e.current = S0[bo]), (S0[bo] = null), bo--);
}
function we(e, t) {
  bo++, (S0[bo] = e.current), (e.current = t);
}
var vr = {},
  ct = Cr(vr),
  St = Cr(!1),
  Jr = vr;
function Xo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function At(e) {
  return (e = e.childContextTypes), e != null;
}
function ol() {
  _e(St), _e(ct);
}
function Zh(e, t, n) {
  if (ct.current !== vr) throw Error(W(168));
  we(ct, t), we(St, n);
}
function h1(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(W(108, y4(e) || "Unknown", o));
  return Re({}, n, r);
}
function il(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vr),
    (Jr = ct.current),
    we(ct, e),
    we(St, St.current),
    !0
  );
}
function Jh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(W(169));
  n
    ? ((e = h1(e, t, Jr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      _e(St),
      _e(ct),
      we(ct, e))
    : _e(St),
    we(St, n);
}
var bn = null,
  Il = !1,
  Iu = !1;
function p1(e) {
  bn === null ? (bn = [e]) : bn.push(e);
}
function OE(e) {
  (Il = !0), p1(e);
}
function wr() {
  if (!Iu && bn !== null) {
    Iu = !0;
    var e = 0,
      t = ge;
    try {
      var n = bn;
      for (ge = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (bn = null), (Il = !1);
    } catch (o) {
      throw (bn !== null && (bn = bn.slice(e + 1)), Iv(Vf, wr), o);
    } finally {
      (ge = t), (Iu = !1);
    }
  }
  return null;
}
var Fo = [],
  ko = 0,
  al = null,
  sl = 0,
  Ht = [],
  Wt = 0,
  eo = null,
  Fn = 1,
  kn = "";
function Nr(e, t) {
  (Fo[ko++] = sl), (Fo[ko++] = al), (al = e), (sl = t);
}
function x1(e, t, n) {
  (Ht[Wt++] = Fn), (Ht[Wt++] = kn), (Ht[Wt++] = eo), (eo = e);
  var r = Fn;
  e = kn;
  var o = 32 - ln(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - ln(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (Fn = (1 << (32 - ln(t) + o)) | (n << o) | r),
      (kn = i + e);
  } else (Fn = (1 << i) | (n << o) | r), (kn = e);
}
function Qf(e) {
  e.return !== null && (Nr(e, 1), x1(e, 1, 0));
}
function Zf(e) {
  for (; e === al; )
    (al = Fo[--ko]), (Fo[ko] = null), (sl = Fo[--ko]), (Fo[ko] = null);
  for (; e === eo; )
    (eo = Ht[--Wt]),
      (Ht[Wt] = null),
      (kn = Ht[--Wt]),
      (Ht[Wt] = null),
      (Fn = Ht[--Wt]),
      (Ht[Wt] = null);
}
var Rt = null,
  kt = null,
  Pe = !1,
  sn = null;
function m1(e, t) {
  var n = Gt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ep(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Rt = e), (kt = cr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Rt = e), (kt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = eo !== null ? { id: Fn, overflow: kn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Gt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Rt = e),
            (kt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function A0(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function D0(e) {
  if (Pe) {
    var t = kt;
    if (t) {
      var n = t;
      if (!ep(e, t)) {
        if (A0(e)) throw Error(W(418));
        t = cr(n.nextSibling);
        var r = Rt;
        t && ep(e, t)
          ? m1(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Pe = !1), (Rt = e));
      }
    } else {
      if (A0(e)) throw Error(W(418));
      (e.flags = (e.flags & -4097) | 2), (Pe = !1), (Rt = e);
    }
  }
}
function tp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Rt = e;
}
function ms(e) {
  if (e !== Rt) return !1;
  if (!Pe) return tp(e), (Pe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !E0(e.type, e.memoizedProps))),
    t && (t = kt))
  ) {
    if (A0(e)) throw (v1(), Error(W(418)));
    for (; t; ) m1(e, t), (t = cr(t.nextSibling));
  }
  if ((tp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(W(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              kt = cr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      kt = null;
    }
  } else kt = Rt ? cr(e.stateNode.nextSibling) : null;
  return !0;
}
function v1() {
  for (var e = kt; e; ) e = cr(e.nextSibling);
}
function Qo() {
  (kt = Rt = null), (Pe = !1);
}
function Jf(e) {
  sn === null ? (sn = [e]) : sn.push(e);
}
var ME = Un.ReactCurrentBatchConfig;
function tn(e, t) {
  if (e && e.defaultProps) {
    (t = Re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ll = Cr(null),
  ul = null,
  Ro = null,
  ed = null;
function td() {
  ed = Ro = ul = null;
}
function nd(e) {
  var t = ll.current;
  _e(ll), (e._currentValue = t);
}
function _0(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Ko(e, t) {
  (ul = e),
    (ed = Ro = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ct = !0), (e.firstContext = null));
}
function qt(e) {
  var t = e._currentValue;
  if (ed !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ro === null)) {
      if (ul === null) throw Error(W(308));
      (Ro = e), (ul.dependencies = { lanes: 0, firstContext: e });
    } else Ro = Ro.next = e;
  return t;
}
var $r = null;
function rd(e) {
  $r === null ? ($r = [e]) : $r.push(e);
}
function g1(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), rd(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    In(e, r)
  );
}
function In(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var er = !1;
function od(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function y1(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Tn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function fr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), pe & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      In(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), rd(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    In(e, n)
  );
}
function js(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Uf(e, n);
  }
}
function np(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function cl(e, t, n, r) {
  var o = e.updateQueue;
  er = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (i = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = l = null), (s = i);
    do {
      var f = s.lane,
        x = s.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: x,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var m = e,
            g = s;
          switch (((f = t), (x = n), g.tag)) {
            case 1:
              if (((m = g.payload), typeof m == "function")) {
                d = m.call(x, d, f);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = g.payload),
                (f = typeof m == "function" ? m.call(x, d, f) : m),
                f == null)
              )
                break e;
              d = Re({}, d, f);
              break e;
            case 2:
              er = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [s]) : f.push(s));
      } else
        (x = {
          eventTime: x,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = x), (l = d)) : (c = c.next = x),
          (a |= f);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (no |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function rp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(W(191, o));
        o.call(r);
      }
    }
}
var E1 = new gv.Component().refs;
function B0(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? uo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = xt(),
      o = hr(e),
      i = Tn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = fr(e, i, o)),
      t !== null && (un(t, e, o, r), js(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = xt(),
      o = hr(e),
      i = Tn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = fr(e, i, o)),
      t !== null && (un(t, e, o, r), js(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = xt(),
      r = hr(e),
      o = Tn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = fr(e, o, r)),
      t !== null && (un(t, e, r, n), js(t, e, r));
  },
};
function op(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !xa(n, r) || !xa(o, i)
        : !0
  );
}
function C1(e, t, n) {
  var r = !1,
    o = vr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = qt(i))
      : ((o = At(t) ? Jr : ct.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Xo(e, o) : vr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ip(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zl.enqueueReplaceState(t, t.state, null);
}
function P0(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = E1), od(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = qt(i))
    : ((i = At(t) ? Jr : ct.current), (o.context = Xo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (B0(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && zl.enqueueReplaceState(o, o.state, null),
      cl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function _i(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(W(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(W(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs;
            s === E1 && (s = o.refs = {}),
              a === null ? delete s[i] : (s[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(W(284));
    if (!n._owner) throw Error(W(290, e));
  }
  return e;
}
function vs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      W(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function ap(e) {
  var t = e._init;
  return t(e._payload);
}
function w1(e) {
  function t(v, h) {
    if (e) {
      var p = v.deletions;
      p === null ? ((v.deletions = [h]), (v.flags |= 16)) : p.push(h);
    }
  }
  function n(v, h) {
    if (!e) return null;
    for (; h !== null; ) t(v, h), (h = h.sibling);
    return null;
  }
  function r(v, h) {
    for (v = new Map(); h !== null; )
      h.key !== null ? v.set(h.key, h) : v.set(h.index, h), (h = h.sibling);
    return v;
  }
  function o(v, h) {
    return (v = pr(v, h)), (v.index = 0), (v.sibling = null), v;
  }
  function i(v, h, p) {
    return (
      (v.index = p),
      e
        ? ((p = v.alternate),
          p !== null
            ? ((p = p.index), p < h ? ((v.flags |= 2), h) : p)
            : ((v.flags |= 2), h))
        : ((v.flags |= 1048576), h)
    );
  }
  function a(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function s(v, h, p, y) {
    return h === null || h.tag !== 6
      ? ((h = Gu(p, v.mode, y)), (h.return = v), h)
      : ((h = o(h, p)), (h.return = v), h);
  }
  function l(v, h, p, y) {
    var A = p.type;
    return A === Ao
      ? c(v, h, p.props.children, y, p.key)
      : h !== null &&
          (h.elementType === A ||
            (typeof A == "object" &&
              A !== null &&
              A.$$typeof === Jn &&
              ap(A) === h.type))
        ? ((y = o(h, p.props)), (y.ref = _i(v, h, p)), (y.return = v), y)
        : ((y = $s(p.type, p.key, p.props, null, v.mode, y)),
          (y.ref = _i(v, h, p)),
          (y.return = v),
          y);
  }
  function u(v, h, p, y) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== p.containerInfo ||
      h.stateNode.implementation !== p.implementation
      ? ((h = Ku(p, v.mode, y)), (h.return = v), h)
      : ((h = o(h, p.children || [])), (h.return = v), h);
  }
  function c(v, h, p, y, A) {
    return h === null || h.tag !== 7
      ? ((h = qr(p, v.mode, y, A)), (h.return = v), h)
      : ((h = o(h, p)), (h.return = v), h);
  }
  function d(v, h, p) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Gu("" + h, v.mode, p)), (h.return = v), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case as:
          return (
            (p = $s(h.type, h.key, h.props, null, v.mode, p)),
            (p.ref = _i(v, null, h)),
            (p.return = v),
            p
          );
        case So:
          return (h = Ku(h, v.mode, p)), (h.return = v), h;
        case Jn:
          var y = h._init;
          return d(v, y(h._payload), p);
      }
      if (zi(h) || Ci(h))
        return (h = qr(h, v.mode, p, null)), (h.return = v), h;
      vs(v, h);
    }
    return null;
  }
  function f(v, h, p, y) {
    var A = h !== null ? h.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return A !== null ? null : s(v, h, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case as:
          return p.key === A ? l(v, h, p, y) : null;
        case So:
          return p.key === A ? u(v, h, p, y) : null;
        case Jn:
          return (A = p._init), f(v, h, A(p._payload), y);
      }
      if (zi(p) || Ci(p)) return A !== null ? null : c(v, h, p, y, null);
      vs(v, p);
    }
    return null;
  }
  function x(v, h, p, y, A) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (v = v.get(p) || null), s(h, v, "" + y, A);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case as:
          return (v = v.get(y.key === null ? p : y.key) || null), l(h, v, y, A);
        case So:
          return (v = v.get(y.key === null ? p : y.key) || null), u(h, v, y, A);
        case Jn:
          var C = y._init;
          return x(v, h, p, C(y._payload), A);
      }
      if (zi(y) || Ci(y)) return (v = v.get(p) || null), c(h, v, y, A, null);
      vs(h, y);
    }
    return null;
  }
  function m(v, h, p, y) {
    for (
      var A = null, C = null, S = h, D = (h = 0), b = null;
      S !== null && D < p.length;
      D++
    ) {
      S.index > D ? ((b = S), (S = null)) : (b = S.sibling);
      var B = f(v, S, p[D], y);
      if (B === null) {
        S === null && (S = b);
        break;
      }
      e && S && B.alternate === null && t(v, S),
        (h = i(B, h, D)),
        C === null ? (A = B) : (C.sibling = B),
        (C = B),
        (S = b);
    }
    if (D === p.length) return n(v, S), Pe && Nr(v, D), A;
    if (S === null) {
      for (; D < p.length; D++)
        (S = d(v, p[D], y)),
          S !== null &&
            ((h = i(S, h, D)), C === null ? (A = S) : (C.sibling = S), (C = S));
      return Pe && Nr(v, D), A;
    }
    for (S = r(v, S); D < p.length; D++)
      (b = x(S, v, D, p[D], y)),
        b !== null &&
          (e && b.alternate !== null && S.delete(b.key === null ? D : b.key),
          (h = i(b, h, D)),
          C === null ? (A = b) : (C.sibling = b),
          (C = b));
    return (
      e &&
        S.forEach(function (P) {
          return t(v, P);
        }),
      Pe && Nr(v, D),
      A
    );
  }
  function g(v, h, p, y) {
    var A = Ci(p);
    if (typeof A != "function") throw Error(W(150));
    if (((p = A.call(p)), p == null)) throw Error(W(151));
    for (
      var C = (A = null), S = h, D = (h = 0), b = null, B = p.next();
      S !== null && !B.done;
      D++, B = p.next()
    ) {
      S.index > D ? ((b = S), (S = null)) : (b = S.sibling);
      var P = f(v, S, B.value, y);
      if (P === null) {
        S === null && (S = b);
        break;
      }
      e && S && P.alternate === null && t(v, S),
        (h = i(P, h, D)),
        C === null ? (A = P) : (C.sibling = P),
        (C = P),
        (S = b);
    }
    if (B.done) return n(v, S), Pe && Nr(v, D), A;
    if (S === null) {
      for (; !B.done; D++, B = p.next())
        (B = d(v, B.value, y)),
          B !== null &&
            ((h = i(B, h, D)), C === null ? (A = B) : (C.sibling = B), (C = B));
      return Pe && Nr(v, D), A;
    }
    for (S = r(v, S); !B.done; D++, B = p.next())
      (B = x(S, v, D, B.value, y)),
        B !== null &&
          (e && B.alternate !== null && S.delete(B.key === null ? D : B.key),
          (h = i(B, h, D)),
          C === null ? (A = B) : (C.sibling = B),
          (C = B));
    return (
      e &&
        S.forEach(function (N) {
          return t(v, N);
        }),
      Pe && Nr(v, D),
      A
    );
  }
  function E(v, h, p, y) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Ao &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case as:
          e: {
            for (var A = p.key, C = h; C !== null; ) {
              if (C.key === A) {
                if (((A = p.type), A === Ao)) {
                  if (C.tag === 7) {
                    n(v, C.sibling),
                      (h = o(C, p.props.children)),
                      (h.return = v),
                      (v = h);
                    break e;
                  }
                } else if (
                  C.elementType === A ||
                  (typeof A == "object" &&
                    A !== null &&
                    A.$$typeof === Jn &&
                    ap(A) === C.type)
                ) {
                  n(v, C.sibling),
                    (h = o(C, p.props)),
                    (h.ref = _i(v, C, p)),
                    (h.return = v),
                    (v = h);
                  break e;
                }
                n(v, C);
                break;
              } else t(v, C);
              C = C.sibling;
            }
            p.type === Ao
              ? ((h = qr(p.props.children, v.mode, y, p.key)),
                (h.return = v),
                (v = h))
              : ((y = $s(p.type, p.key, p.props, null, v.mode, y)),
                (y.ref = _i(v, h, p)),
                (y.return = v),
                (v = y));
          }
          return a(v);
        case So:
          e: {
            for (C = p.key; h !== null; ) {
              if (h.key === C)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === p.containerInfo &&
                  h.stateNode.implementation === p.implementation
                ) {
                  n(v, h.sibling),
                    (h = o(h, p.children || [])),
                    (h.return = v),
                    (v = h);
                  break e;
                } else {
                  n(v, h);
                  break;
                }
              else t(v, h);
              h = h.sibling;
            }
            (h = Ku(p, v.mode, y)), (h.return = v), (v = h);
          }
          return a(v);
        case Jn:
          return (C = p._init), E(v, h, C(p._payload), y);
      }
      if (zi(p)) return m(v, h, p, y);
      if (Ci(p)) return g(v, h, p, y);
      vs(v, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        h !== null && h.tag === 6
          ? (n(v, h.sibling), (h = o(h, p)), (h.return = v), (v = h))
          : (n(v, h), (h = Gu(p, v.mode, y)), (h.return = v), (v = h)),
        a(v))
      : n(v, h);
  }
  return E;
}
var Zo = w1(!0),
  S1 = w1(!1),
  za = {},
  wn = Cr(za),
  ya = Cr(za),
  Ea = Cr(za);
function Vr(e) {
  if (e === za) throw Error(W(174));
  return e;
}
function id(e, t) {
  switch ((we(Ea, t), we(ya, e), we(wn, za), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : a0(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = a0(t, e));
  }
  _e(wn), we(wn, t);
}
function Jo() {
  _e(wn), _e(ya), _e(Ea);
}
function A1(e) {
  Vr(Ea.current);
  var t = Vr(wn.current),
    n = a0(t, e.type);
  t !== n && (we(ya, e), we(wn, n));
}
function ad(e) {
  ya.current === e && (_e(wn), _e(ya));
}
var be = Cr(0);
function fl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var zu = [];
function sd() {
  for (var e = 0; e < zu.length; e++)
    zu[e]._workInProgressVersionPrimary = null;
  zu.length = 0;
}
var Os = Un.ReactCurrentDispatcher,
  $u = Un.ReactCurrentBatchConfig,
  to = 0,
  ke = null,
  He = null,
  qe = null,
  dl = !1,
  Xi = !1,
  Ca = 0,
  LE = 0;
function ot() {
  throw Error(W(321));
}
function ld(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!dn(e[n], t[n])) return !1;
  return !0;
}
function ud(e, t, n, r, o, i) {
  if (
    ((to = i),
    (ke = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Os.current = e === null || e.memoizedState === null ? VE : UE),
    (e = n(r, o)),
    Xi)
  ) {
    i = 0;
    do {
      if (((Xi = !1), (Ca = 0), 25 <= i)) throw Error(W(301));
      (i += 1),
        (qe = He = null),
        (t.updateQueue = null),
        (Os.current = HE),
        (e = n(r, o));
    } while (Xi);
  }
  if (
    ((Os.current = hl),
    (t = He !== null && He.next !== null),
    (to = 0),
    (qe = He = ke = null),
    (dl = !1),
    t)
  )
    throw Error(W(300));
  return e;
}
function cd() {
  var e = Ca !== 0;
  return (Ca = 0), e;
}
function gn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return qe === null ? (ke.memoizedState = qe = e) : (qe = qe.next = e), qe;
}
function Yt() {
  if (He === null) {
    var e = ke.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = He.next;
  var t = qe === null ? ke.memoizedState : qe.next;
  if (t !== null) (qe = t), (He = e);
  else {
    if (e === null) throw Error(W(310));
    (He = e),
      (e = {
        memoizedState: He.memoizedState,
        baseState: He.baseState,
        baseQueue: He.baseQueue,
        queue: He.queue,
        next: null,
      }),
      qe === null ? (ke.memoizedState = qe = e) : (qe = qe.next = e);
  }
  return qe;
}
function wa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Vu(e) {
  var t = Yt(),
    n = t.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = e;
  var r = He,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (a = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((to & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = r)) : (l = l.next = d),
          (ke.lanes |= c),
          (no |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (a = r) : (l.next = s),
      dn(r, t.memoizedState) || (Ct = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ke.lanes |= i), (no |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Uu(e) {
  var t = Yt(),
    n = t.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    dn(i, t.memoizedState) || (Ct = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function D1() {}
function _1(e, t) {
  var n = ke,
    r = Yt(),
    o = t(),
    i = !dn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ct = !0)),
    (r = r.queue),
    fd(b1.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (qe !== null && qe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Sa(9, P1.bind(null, n, r, o, t), void 0, null),
      Xe === null)
    )
      throw Error(W(349));
    to & 30 || B1(n, t, o);
  }
  return o;
}
function B1(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ke.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ke.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function P1(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), F1(t) && k1(e);
}
function b1(e, t, n) {
  return n(function () {
    F1(t) && k1(e);
  });
}
function F1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dn(e, n);
  } catch {
    return !0;
  }
}
function k1(e) {
  var t = In(e, 1);
  t !== null && un(t, e, 1, -1);
}
function sp(e) {
  var t = gn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wa,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = $E.bind(null, ke, e)),
    [t.memoizedState, e]
  );
}
function Sa(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ke.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ke.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function R1() {
  return Yt().memoizedState;
}
function Ms(e, t, n, r) {
  var o = gn();
  (ke.flags |= e),
    (o.memoizedState = Sa(1 | t, n, void 0, r === void 0 ? null : r));
}
function $l(e, t, n, r) {
  var o = Yt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (He !== null) {
    var a = He.memoizedState;
    if (((i = a.destroy), r !== null && ld(r, a.deps))) {
      o.memoizedState = Sa(t, n, i, r);
      return;
    }
  }
  (ke.flags |= e), (o.memoizedState = Sa(1 | t, n, i, r));
}
function lp(e, t) {
  return Ms(8390656, 8, e, t);
}
function fd(e, t) {
  return $l(2048, 8, e, t);
}
function T1(e, t) {
  return $l(4, 2, e, t);
}
function N1(e, t) {
  return $l(4, 4, e, t);
}
function j1(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function O1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), $l(4, 4, j1.bind(null, t, e), n)
  );
}
function dd() {}
function M1(e, t) {
  var n = Yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ld(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function L1(e, t) {
  var n = Yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ld(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function I1(e, t, n) {
  return to & 21
    ? (dn(n, t) || ((n = Vv()), (ke.lanes |= n), (no |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ct = !0)), (e.memoizedState = n));
}
function IE(e, t) {
  var n = ge;
  (ge = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = $u.transition;
  $u.transition = {};
  try {
    e(!1), t();
  } finally {
    (ge = n), ($u.transition = r);
  }
}
function z1() {
  return Yt().memoizedState;
}
function zE(e, t, n) {
  var r = hr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    $1(e))
  )
    V1(t, n);
  else if (((n = g1(e, t, n, r)), n !== null)) {
    var o = xt();
    un(n, e, r, o), U1(n, t, r);
  }
}
function $E(e, t, n) {
  var r = hr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($1(e)) V1(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), dn(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), rd(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = g1(e, t, o, r)),
      n !== null && ((o = xt()), un(n, e, r, o), U1(n, t, r));
  }
}
function $1(e) {
  var t = e.alternate;
  return e === ke || (t !== null && t === ke);
}
function V1(e, t) {
  Xi = dl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function U1(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Uf(e, n);
  }
}
var hl = {
    readContext: qt,
    useCallback: ot,
    useContext: ot,
    useEffect: ot,
    useImperativeHandle: ot,
    useInsertionEffect: ot,
    useLayoutEffect: ot,
    useMemo: ot,
    useReducer: ot,
    useRef: ot,
    useState: ot,
    useDebugValue: ot,
    useDeferredValue: ot,
    useTransition: ot,
    useMutableSource: ot,
    useSyncExternalStore: ot,
    useId: ot,
    unstable_isNewReconciler: !1,
  },
  VE = {
    readContext: qt,
    useCallback: function (e, t) {
      return (gn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: qt,
    useEffect: lp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ms(4194308, 4, j1.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ms(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ms(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = gn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = gn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = zE.bind(null, ke, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = gn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: sp,
    useDebugValue: dd,
    useDeferredValue: function (e) {
      return (gn().memoizedState = e);
    },
    useTransition: function () {
      var e = sp(!1),
        t = e[0];
      return (e = IE.bind(null, e[1])), (gn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ke,
        o = gn();
      if (Pe) {
        if (n === void 0) throw Error(W(407));
        n = n();
      } else {
        if (((n = t()), Xe === null)) throw Error(W(349));
        to & 30 || B1(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        lp(b1.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Sa(9, P1.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = gn(),
        t = Xe.identifierPrefix;
      if (Pe) {
        var n = kn,
          r = Fn;
        (n = (r & ~(1 << (32 - ln(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ca++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = LE++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  UE = {
    readContext: qt,
    useCallback: M1,
    useContext: qt,
    useEffect: fd,
    useImperativeHandle: O1,
    useInsertionEffect: T1,
    useLayoutEffect: N1,
    useMemo: L1,
    useReducer: Vu,
    useRef: R1,
    useState: function () {
      return Vu(wa);
    },
    useDebugValue: dd,
    useDeferredValue: function (e) {
      var t = Yt();
      return I1(t, He.memoizedState, e);
    },
    useTransition: function () {
      var e = Vu(wa)[0],
        t = Yt().memoizedState;
      return [e, t];
    },
    useMutableSource: D1,
    useSyncExternalStore: _1,
    useId: z1,
    unstable_isNewReconciler: !1,
  },
  HE = {
    readContext: qt,
    useCallback: M1,
    useContext: qt,
    useEffect: fd,
    useImperativeHandle: O1,
    useInsertionEffect: T1,
    useLayoutEffect: N1,
    useMemo: L1,
    useReducer: Uu,
    useRef: R1,
    useState: function () {
      return Uu(wa);
    },
    useDebugValue: dd,
    useDeferredValue: function (e) {
      var t = Yt();
      return He === null ? (t.memoizedState = e) : I1(t, He.memoizedState, e);
    },
    useTransition: function () {
      var e = Uu(wa)[0],
        t = Yt().memoizedState;
      return [e, t];
    },
    useMutableSource: D1,
    useSyncExternalStore: _1,
    useId: z1,
    unstable_isNewReconciler: !1,
  };
function ei(e, t) {
  try {
    var n = "",
      r = t;
    do (n += g4(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Hu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function b0(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var WE = typeof WeakMap == "function" ? WeakMap : Map;
function H1(e, t, n) {
  (n = Tn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      xl || ((xl = !0), (I0 = r)), b0(e, t);
    }),
    n
  );
}
function W1(e, t, n) {
  (n = Tn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        b0(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        b0(e, t),
          typeof r != "function" &&
            (dr === null ? (dr = new Set([this])) : dr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function up(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new WE();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = i8.bind(null, e, t, n)), t.then(e, e));
}
function cp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function fp(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Tn(-1, 1)), (t.tag = 2), fr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var GE = Un.ReactCurrentOwner,
  Ct = !1;
function pt(e, t, n, r) {
  t.child = e === null ? S1(t, null, n, r) : Zo(t, e.child, n, r);
}
function dp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Ko(t, o),
    (r = ud(e, t, n, r, i, o)),
    (n = cd()),
    e !== null && !Ct
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        zn(e, t, o))
      : (Pe && n && Qf(t), (t.flags |= 1), pt(e, t, r, o), t.child)
  );
}
function hp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ed(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), G1(e, t, i, r, o))
      : ((e = $s(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : xa), n(a, r) && e.ref === t.ref)
    )
      return zn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = pr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function G1(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (xa(i, r) && e.ref === t.ref)
      if (((Ct = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ct = !0);
      else return (t.lanes = e.lanes), zn(e, t, o);
  }
  return F0(e, t, n, r, o);
}
function K1(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        we(No, Ft),
        (Ft |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          we(No, Ft),
          (Ft |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        we(No, Ft),
        (Ft |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      we(No, Ft),
      (Ft |= r);
  return pt(e, t, o, n), t.child;
}
function q1(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function F0(e, t, n, r, o) {
  var i = At(n) ? Jr : ct.current;
  return (
    (i = Xo(t, i)),
    Ko(t, o),
    (n = ud(e, t, n, r, i, o)),
    (r = cd()),
    e !== null && !Ct
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        zn(e, t, o))
      : (Pe && r && Qf(t), (t.flags |= 1), pt(e, t, n, o), t.child)
  );
}
function pp(e, t, n, r, o) {
  if (At(n)) {
    var i = !0;
    il(t);
  } else i = !1;
  if ((Ko(t, o), t.stateNode === null))
    Ls(e, t), C1(t, n, r), P0(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = qt(u))
      : ((u = At(n) ? Jr : ct.current), (u = Xo(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== r || l !== u) && ip(t, a, r, u)),
      (er = !1);
    var f = t.memoizedState;
    (a.state = f),
      cl(t, r, a, o),
      (l = t.memoizedState),
      s !== r || f !== l || St.current || er
        ? (typeof c == "function" && (B0(t, n, c, r), (l = t.memoizedState)),
          (s = er || op(t, n, s, r, f, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      y1(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : tn(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = qt(l))
        : ((l = At(n) ? Jr : ct.current), (l = Xo(t, l)));
    var x = n.getDerivedStateFromProps;
    (c =
      typeof x == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== d || f !== l) && ip(t, a, r, l)),
      (er = !1),
      (f = t.memoizedState),
      (a.state = f),
      cl(t, r, a, o);
    var m = t.memoizedState;
    s !== d || f !== m || St.current || er
      ? (typeof x == "function" && (B0(t, n, x, r), (m = t.memoizedState)),
        (u = er || op(t, n, u, r, f, m, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, m, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, m, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (a.props = r),
        (a.state = m),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return k0(e, t, n, r, i, o);
}
function k0(e, t, n, r, o, i) {
  q1(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && Jh(t, n, !1), zn(e, t, i);
  (r = t.stateNode), (GE.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Zo(t, e.child, null, i)), (t.child = Zo(t, null, s, i)))
      : pt(e, t, s, i),
    (t.memoizedState = r.state),
    o && Jh(t, n, !0),
    t.child
  );
}
function Y1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Zh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Zh(e, t.context, !1),
    id(e, t.containerInfo);
}
function xp(e, t, n, r, o) {
  return Qo(), Jf(o), (t.flags |= 256), pt(e, t, n, r), t.child;
}
var R0 = { dehydrated: null, treeContext: null, retryLane: 0 };
function T0(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function X1(e, t, n) {
  var r = t.pendingProps,
    o = be.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    we(be, o & 1),
    e === null)
  )
    return (
      D0(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = Hl(a, r, 0, null)),
              (e = qr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = T0(n)),
              (t.memoizedState = R0),
              e)
            : hd(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return KE(e, t, a, r, s, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = pr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = pr(s, i)) : ((i = qr(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? T0(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = R0),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = pr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function hd(e, t) {
  return (
    (t = Hl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function gs(e, t, n, r) {
  return (
    r !== null && Jf(r),
    Zo(t, e.child, null, n),
    (e = hd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function KE(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Hu(Error(W(422)))), gs(e, t, a, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Hl({ mode: "visible", children: r.children }, o, 0, null)),
          (i = qr(i, o, a, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Zo(t, e.child, null, a),
          (t.child.memoizedState = T0(a)),
          (t.memoizedState = R0),
          i);
  if (!(t.mode & 1)) return gs(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(W(419))), (r = Hu(i, r, void 0)), gs(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), Ct || s)) {
    if (((r = Xe), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), In(e, o), un(r, e, o, -1));
    }
    return yd(), (r = Hu(Error(W(421)))), gs(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = a8.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (kt = cr(o.nextSibling)),
      (Rt = t),
      (Pe = !0),
      (sn = null),
      e !== null &&
        ((Ht[Wt++] = Fn),
        (Ht[Wt++] = kn),
        (Ht[Wt++] = eo),
        (Fn = e.id),
        (kn = e.overflow),
        (eo = t)),
      (t = hd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function mp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _0(e.return, t, n);
}
function Wu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Q1(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((pt(e, t, r.children, n), (r = be.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && mp(e, n, t);
        else if (e.tag === 19) mp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((we(be, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && fl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Wu(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && fl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Wu(t, !0, n, null, i);
        break;
      case "together":
        Wu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ls(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function zn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (no |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(W(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = pr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function qE(e, t, n) {
  switch (t.tag) {
    case 3:
      Y1(t), Qo();
      break;
    case 5:
      A1(t);
      break;
    case 1:
      At(t.type) && il(t);
      break;
    case 4:
      id(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      we(ll, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (we(be, be.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? X1(e, t, n)
            : (we(be, be.current & 1),
              (e = zn(e, t, n)),
              e !== null ? e.sibling : null);
      we(be, be.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Q1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        we(be, be.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), K1(e, t, n);
  }
  return zn(e, t, n);
}
var Z1, N0, J1, eg;
Z1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
N0 = function () {};
J1 = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Vr(wn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = n0(e, o)), (r = n0(e, r)), (i = []);
        break;
      case "select":
        (o = Re({}, o, { value: void 0 })),
          (r = Re({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = i0(e, o)), (r = i0(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = rl);
    }
    s0(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (la.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (la.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && Ae("scroll", e),
                    i || s === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
eg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Bi(e, t) {
  if (!Pe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function it(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function YE(e, t, n) {
  var r = t.pendingProps;
  switch ((Zf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return it(t), null;
    case 1:
      return At(t.type) && ol(), it(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Jo(),
        _e(St),
        _e(ct),
        sd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ms(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), sn !== null && (V0(sn), (sn = null)))),
        N0(e, t),
        it(t),
        null
      );
    case 5:
      ad(t);
      var o = Vr(Ea.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        J1(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(W(166));
          return it(t), null;
        }
        if (((e = Vr(wn.current)), ms(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[En] = t), (r[ga] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ae("cancel", r), Ae("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ae("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Vi.length; o++) Ae(Vi[o], r);
              break;
            case "source":
              Ae("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ae("error", r), Ae("load", r);
              break;
            case "details":
              Ae("toggle", r);
              break;
            case "input":
              Dh(r, i), Ae("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Ae("invalid", r);
              break;
            case "textarea":
              Bh(r, i), Ae("invalid", r);
          }
          s0(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      xs(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      xs(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : la.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  Ae("scroll", r);
            }
          switch (n) {
            case "input":
              ss(r), _h(r, i, !0);
              break;
            case "textarea":
              ss(r), Ph(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = rl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Bv(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === "select" &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[En] = t),
            (e[ga] = r),
            Z1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = l0(n, r)), n)) {
              case "dialog":
                Ae("cancel", e), Ae("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ae("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Vi.length; o++) Ae(Vi[o], e);
                o = r;
                break;
              case "source":
                Ae("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Ae("error", e), Ae("load", e), (o = r);
                break;
              case "details":
                Ae("toggle", e), (o = r);
                break;
              case "input":
                Dh(e, r), (o = n0(e, r)), Ae("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Re({}, r, { value: void 0 })),
                  Ae("invalid", e);
                break;
              case "textarea":
                Bh(e, r), (o = i0(e, r)), Ae("invalid", e);
                break;
              default:
                o = r;
            }
            s0(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style"
                  ? Fv(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Pv(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && ua(e, l)
                        : typeof l == "number" && ua(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (la.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && Ae("scroll", e)
                          : l != null && Mf(e, i, l, a));
              }
            switch (n) {
              case "input":
                ss(e), _h(e, r, !1);
                break;
              case "textarea":
                ss(e), Ph(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Uo(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Uo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = rl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return it(t), null;
    case 6:
      if (e && t.stateNode != null) eg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(W(166));
        if (((n = Vr(Ea.current)), Vr(wn.current), ms(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[En] = t),
            (i = r.nodeValue !== n) && ((e = Rt), e !== null))
          )
            switch (e.tag) {
              case 3:
                xs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  xs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[En] = t),
            (t.stateNode = r);
      }
      return it(t), null;
    case 13:
      if (
        (_e(be),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Pe && kt !== null && t.mode & 1 && !(t.flags & 128))
          v1(), Qo(), (t.flags |= 98560), (i = !1);
        else if (((i = ms(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(W(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(W(317));
            i[En] = t;
          } else
            Qo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          it(t), (i = !1);
        } else sn !== null && (V0(sn), (sn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || be.current & 1 ? Ge === 0 && (Ge = 3) : yd())),
          t.updateQueue !== null && (t.flags |= 4),
          it(t),
          null);
    case 4:
      return (
        Jo(), N0(e, t), e === null && ma(t.stateNode.containerInfo), it(t), null
      );
    case 10:
      return nd(t.type._context), it(t), null;
    case 17:
      return At(t.type) && ol(), it(t), null;
    case 19:
      if ((_e(be), (i = t.memoizedState), i === null)) return it(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Bi(i, !1);
        else {
          if (Ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = fl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Bi(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return we(be, (be.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Le() > ti &&
            ((t.flags |= 128), (r = !0), Bi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Bi(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !Pe)
            )
              return it(t), null;
          } else
            2 * Le() - i.renderingStartTime > ti &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Bi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Le()),
          (t.sibling = null),
          (n = be.current),
          we(be, r ? (n & 1) | 2 : n & 1),
          t)
        : (it(t), null);
    case 22:
    case 23:
      return (
        gd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ft & 1073741824 && (it(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : it(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(W(156, t.tag));
}
function XE(e, t) {
  switch ((Zf(t), t.tag)) {
    case 1:
      return (
        At(t.type) && ol(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Jo(),
        _e(St),
        _e(ct),
        sd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ad(t), null;
    case 13:
      if (
        (_e(be), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(W(340));
        Qo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return _e(be), null;
    case 4:
      return Jo(), null;
    case 10:
      return nd(t.type._context), null;
    case 22:
    case 23:
      return gd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ys = !1,
  lt = !1,
  QE = typeof WeakSet == "function" ? WeakSet : Set,
  q = null;
function To(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ne(e, t, r);
      }
    else n.current = null;
}
function j0(e, t, n) {
  try {
    n();
  } catch (r) {
    Ne(e, t, r);
  }
}
var vp = !1;
function ZE(e, t) {
  if (((g0 = el), (e = o1()), Xf(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var x;
              d !== n || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (x = d.firstChild) !== null;

            )
              (f = d), (d = x);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (s = a),
                f === i && ++c === r && (l = a),
                (x = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = x;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (y0 = { focusedElem: e, selectionRange: n }, el = !1, q = t; q !== null; )
    if (((t = q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (q = e);
    else
      for (; q !== null; ) {
        t = q;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var g = m.memoizedProps,
                    E = m.memoizedState,
                    v = t.stateNode,
                    h = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : tn(t.type, g),
                      E,
                    );
                  v.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(W(163));
            }
        } catch (y) {
          Ne(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (q = e);
          break;
        }
        q = t.return;
      }
  return (m = vp), (vp = !1), m;
}
function Qi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && j0(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Vl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function O0(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function tg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), tg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[En], delete t[ga], delete t[w0], delete t[NE], delete t[jE])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ng(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ng(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function M0(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = rl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (M0(e, t, n), e = e.sibling; e !== null; ) M0(e, t, n), (e = e.sibling);
}
function L0(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (L0(e, t, n), e = e.sibling; e !== null; ) L0(e, t, n), (e = e.sibling);
}
var tt = null,
  on = !1;
function qn(e, t, n) {
  for (n = n.child; n !== null; ) rg(e, t, n), (n = n.sibling);
}
function rg(e, t, n) {
  if (Cn && typeof Cn.onCommitFiberUnmount == "function")
    try {
      Cn.onCommitFiberUnmount(Nl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      lt || To(n, t);
    case 6:
      var r = tt,
        o = on;
      (tt = null),
        qn(e, t, n),
        (tt = r),
        (on = o),
        tt !== null &&
          (on
            ? ((e = tt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : tt.removeChild(n.stateNode));
      break;
    case 18:
      tt !== null &&
        (on
          ? ((e = tt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Lu(e.parentNode, n)
              : e.nodeType === 1 && Lu(e, n),
            ha(e))
          : Lu(tt, n.stateNode));
      break;
    case 4:
      (r = tt),
        (o = on),
        (tt = n.stateNode.containerInfo),
        (on = !0),
        qn(e, t, n),
        (tt = r),
        (on = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !lt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && j0(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      qn(e, t, n);
      break;
    case 1:
      if (
        !lt &&
        (To(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Ne(n, t, s);
        }
      qn(e, t, n);
      break;
    case 21:
      qn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((lt = (r = lt) || n.memoizedState !== null), qn(e, t, n), (lt = r))
        : qn(e, t, n);
      break;
    default:
      qn(e, t, n);
  }
}
function yp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new QE()),
      t.forEach(function (r) {
        var o = s8.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Zt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (tt = s.stateNode), (on = !1);
              break e;
            case 3:
              (tt = s.stateNode.containerInfo), (on = !0);
              break e;
            case 4:
              (tt = s.stateNode.containerInfo), (on = !0);
              break e;
          }
          s = s.return;
        }
        if (tt === null) throw Error(W(160));
        rg(i, a, o), (tt = null), (on = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Ne(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) og(t, e), (t = t.sibling);
}
function og(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Zt(t, e), vn(e), r & 4)) {
        try {
          Qi(3, e, e.return), Vl(3, e);
        } catch (g) {
          Ne(e, e.return, g);
        }
        try {
          Qi(5, e, e.return);
        } catch (g) {
          Ne(e, e.return, g);
        }
      }
      break;
    case 1:
      Zt(t, e), vn(e), r & 512 && n !== null && To(n, n.return);
      break;
    case 5:
      if (
        (Zt(t, e),
        vn(e),
        r & 512 && n !== null && To(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ua(o, "");
        } catch (g) {
          Ne(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Dv(o, i),
              l0(s, a);
            var u = l0(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === "style"
                ? Fv(o, d)
                : c === "dangerouslySetInnerHTML"
                  ? Pv(o, d)
                  : c === "children"
                    ? ua(o, d)
                    : Mf(o, c, d, u);
            }
            switch (s) {
              case "input":
                r0(o, i);
                break;
              case "textarea":
                _v(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? Uo(o, !!i.multiple, x, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Uo(o, !!i.multiple, i.defaultValue, !0)
                      : Uo(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ga] = i;
          } catch (g) {
            Ne(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Zt(t, e), vn(e), r & 4)) {
        if (e.stateNode === null) throw Error(W(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          Ne(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Zt(t, e), vn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ha(t.containerInfo);
        } catch (g) {
          Ne(e, e.return, g);
        }
      break;
    case 4:
      Zt(t, e), vn(e);
      break;
    case 13:
      Zt(t, e),
        vn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (md = Le())),
        r & 4 && yp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((lt = (u = lt) || c), Zt(t, e), (lt = u)) : Zt(t, e),
        vn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (q = e, c = e.child; c !== null; ) {
            for (d = q = c; q !== null; ) {
              switch (((f = q), (x = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qi(4, f, f.return);
                  break;
                case 1:
                  To(f, f.return);
                  var m = f.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (g) {
                      Ne(r, n, g);
                    }
                  }
                  break;
                case 5:
                  To(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Cp(d);
                    continue;
                  }
              }
              x !== null ? ((x.return = f), (q = x)) : Cp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = bv("display", a)));
              } catch (g) {
                Ne(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                Ne(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Zt(t, e), vn(e), r & 4 && yp(e);
      break;
    case 21:
      break;
    default:
      Zt(t, e), vn(e);
  }
}
function vn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ng(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(W(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ua(o, ""), (r.flags &= -33));
          var i = gp(e);
          L0(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = gp(e);
          M0(e, s, a);
          break;
        default:
          throw Error(W(161));
      }
    } catch (l) {
      Ne(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function JE(e, t, n) {
  (q = e), ig(e);
}
function ig(e, t, n) {
  for (var r = (e.mode & 1) !== 0; q !== null; ) {
    var o = q,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || ys;
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || lt;
        s = ys;
        var u = lt;
        if (((ys = a), (lt = l) && !u))
          for (q = o; q !== null; )
            (a = q),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? wp(o)
                : l !== null
                  ? ((l.return = a), (q = l))
                  : wp(o);
        for (; i !== null; ) (q = i), ig(i), (i = i.sibling);
        (q = o), (ys = s), (lt = u);
      }
      Ep(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (q = i)) : Ep(e);
  }
}
function Ep(e) {
  for (; q !== null; ) {
    var t = q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              lt || Vl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !lt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : tn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && rp(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                rp(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && ha(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(W(163));
          }
        lt || (t.flags & 512 && O0(t));
      } catch (f) {
        Ne(t, t.return, f);
      }
    }
    if (t === e) {
      q = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (q = n);
      break;
    }
    q = t.return;
  }
}
function Cp(e) {
  for (; q !== null; ) {
    var t = q;
    if (t === e) {
      q = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (q = n);
      break;
    }
    q = t.return;
  }
}
function wp(e) {
  for (; q !== null; ) {
    var t = q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Vl(4, t);
          } catch (l) {
            Ne(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ne(t, o, l);
            }
          }
          var i = t.return;
          try {
            O0(t);
          } catch (l) {
            Ne(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            O0(t);
          } catch (l) {
            Ne(t, a, l);
          }
      }
    } catch (l) {
      Ne(t, t.return, l);
    }
    if (t === e) {
      q = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (q = s);
      break;
    }
    q = t.return;
  }
}
var e8 = Math.ceil,
  pl = Un.ReactCurrentDispatcher,
  pd = Un.ReactCurrentOwner,
  Kt = Un.ReactCurrentBatchConfig,
  pe = 0,
  Xe = null,
  Ve = null,
  nt = 0,
  Ft = 0,
  No = Cr(0),
  Ge = 0,
  Aa = null,
  no = 0,
  Ul = 0,
  xd = 0,
  Zi = null,
  yt = null,
  md = 0,
  ti = 1 / 0,
  Bn = null,
  xl = !1,
  I0 = null,
  dr = null,
  Es = !1,
  ir = null,
  ml = 0,
  Ji = 0,
  z0 = null,
  Is = -1,
  zs = 0;
function xt() {
  return pe & 6 ? Le() : Is !== -1 ? Is : (Is = Le());
}
function hr(e) {
  return e.mode & 1
    ? pe & 2 && nt !== 0
      ? nt & -nt
      : ME.transition !== null
        ? (zs === 0 && (zs = Vv()), zs)
        : ((e = ge),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Yv(e.type))),
          e)
    : 1;
}
function un(e, t, n, r) {
  if (50 < Ji) throw ((Ji = 0), (z0 = null), Error(W(185)));
  Ma(e, n, r),
    (!(pe & 2) || e !== Xe) &&
      (e === Xe && (!(pe & 2) && (Ul |= n), Ge === 4 && rr(e, nt)),
      Dt(e, r),
      n === 1 && pe === 0 && !(t.mode & 1) && ((ti = Le() + 500), Il && wr()));
}
function Dt(e, t) {
  var n = e.callbackNode;
  M4(e, t);
  var r = Js(e, e === Xe ? nt : 0);
  if (r === 0)
    n !== null && kh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && kh(n), t === 1))
      e.tag === 0 ? OE(Sp.bind(null, e)) : p1(Sp.bind(null, e)),
        RE(function () {
          !(pe & 6) && wr();
        }),
        (n = null);
    else {
      switch (Uv(r)) {
        case 1:
          n = Vf;
          break;
        case 4:
          n = zv;
          break;
        case 16:
          n = Zs;
          break;
        case 536870912:
          n = $v;
          break;
        default:
          n = Zs;
      }
      n = hg(n, ag.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ag(e, t) {
  if (((Is = -1), (zs = 0), pe & 6)) throw Error(W(327));
  var n = e.callbackNode;
  if (qo() && e.callbackNode !== n) return null;
  var r = Js(e, e === Xe ? nt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vl(e, r);
  else {
    t = r;
    var o = pe;
    pe |= 2;
    var i = lg();
    (Xe !== e || nt !== t) && ((Bn = null), (ti = Le() + 500), Kr(e, t));
    do
      try {
        r8();
        break;
      } catch (s) {
        sg(e, s);
      }
    while (!0);
    td(),
      (pl.current = i),
      (pe = o),
      Ve !== null ? (t = 0) : ((Xe = null), (nt = 0), (t = Ge));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = h0(e)), o !== 0 && ((r = o), (t = $0(e, o)))), t === 1)
    )
      throw ((n = Aa), Kr(e, 0), rr(e, r), Dt(e, Le()), n);
    if (t === 6) rr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !t8(o) &&
          ((t = vl(e, r)),
          t === 2 && ((i = h0(e)), i !== 0 && ((r = i), (t = $0(e, i)))),
          t === 1))
      )
        throw ((n = Aa), Kr(e, 0), rr(e, r), Dt(e, Le()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(W(345));
        case 2:
          jr(e, yt, Bn);
          break;
        case 3:
          if (
            (rr(e, r), (r & 130023424) === r && ((t = md + 500 - Le()), 10 < t))
          ) {
            if (Js(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              xt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = C0(jr.bind(null, e, yt, Bn), t);
            break;
          }
          jr(e, yt, Bn);
          break;
        case 4:
          if ((rr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - ln(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Le() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * e8(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = C0(jr.bind(null, e, yt, Bn), r);
            break;
          }
          jr(e, yt, Bn);
          break;
        case 5:
          jr(e, yt, Bn);
          break;
        default:
          throw Error(W(329));
      }
    }
  }
  return Dt(e, Le()), e.callbackNode === n ? ag.bind(null, e) : null;
}
function $0(e, t) {
  var n = Zi;
  return (
    e.current.memoizedState.isDehydrated && (Kr(e, t).flags |= 256),
    (e = vl(e, t)),
    e !== 2 && ((t = yt), (yt = n), t !== null && V0(t)),
    e
  );
}
function V0(e) {
  yt === null ? (yt = e) : yt.push.apply(yt, e);
}
function t8(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!dn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rr(e, t) {
  for (
    t &= ~xd,
      t &= ~Ul,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ln(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Sp(e) {
  if (pe & 6) throw Error(W(327));
  qo();
  var t = Js(e, 0);
  if (!(t & 1)) return Dt(e, Le()), null;
  var n = vl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = h0(e);
    r !== 0 && ((t = r), (n = $0(e, r)));
  }
  if (n === 1) throw ((n = Aa), Kr(e, 0), rr(e, t), Dt(e, Le()), n);
  if (n === 6) throw Error(W(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jr(e, yt, Bn),
    Dt(e, Le()),
    null
  );
}
function vd(e, t) {
  var n = pe;
  pe |= 1;
  try {
    return e(t);
  } finally {
    (pe = n), pe === 0 && ((ti = Le() + 500), Il && wr());
  }
}
function ro(e) {
  ir !== null && ir.tag === 0 && !(pe & 6) && qo();
  var t = pe;
  pe |= 1;
  var n = Kt.transition,
    r = ge;
  try {
    if (((Kt.transition = null), (ge = 1), e)) return e();
  } finally {
    (ge = r), (Kt.transition = n), (pe = t), !(pe & 6) && wr();
  }
}
function gd() {
  (Ft = No.current), _e(No);
}
function Kr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), kE(n)), Ve !== null))
    for (n = Ve.return; n !== null; ) {
      var r = n;
      switch ((Zf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ol();
          break;
        case 3:
          Jo(), _e(St), _e(ct), sd();
          break;
        case 5:
          ad(r);
          break;
        case 4:
          Jo();
          break;
        case 13:
          _e(be);
          break;
        case 19:
          _e(be);
          break;
        case 10:
          nd(r.type._context);
          break;
        case 22:
        case 23:
          gd();
      }
      n = n.return;
    }
  if (
    ((Xe = e),
    (Ve = e = pr(e.current, null)),
    (nt = Ft = t),
    (Ge = 0),
    (Aa = null),
    (xd = Ul = no = 0),
    (yt = Zi = null),
    $r !== null)
  ) {
    for (t = 0; t < $r.length; t++)
      if (((n = $r[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    $r = null;
  }
  return e;
}
function sg(e, t) {
  do {
    var n = Ve;
    try {
      if ((td(), (Os.current = hl), dl)) {
        for (var r = ke.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        dl = !1;
      }
      if (
        ((to = 0),
        (qe = He = ke = null),
        (Xi = !1),
        (Ca = 0),
        (pd.current = null),
        n === null || n.return === null)
      ) {
        (Ge = 1), (Aa = t), (Ve = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          s = n,
          l = t;
        if (
          ((t = nt),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var x = cp(a);
          if (x !== null) {
            (x.flags &= -257),
              fp(x, a, s, i, t),
              x.mode & 1 && up(i, u, t),
              (t = x),
              (l = u);
            var m = t.updateQueue;
            if (m === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else m.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              up(i, u, t), yd();
              break e;
            }
            l = Error(W(426));
          }
        } else if (Pe && s.mode & 1) {
          var E = cp(a);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              fp(E, a, s, i, t),
              Jf(ei(l, s));
            break e;
          }
        }
        (i = l = ei(l, s)),
          Ge !== 4 && (Ge = 2),
          Zi === null ? (Zi = [i]) : Zi.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var v = H1(i, l, t);
              np(i, v);
              break e;
            case 1:
              s = l;
              var h = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (dr === null || !dr.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = W1(i, s, t);
                np(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      cg(n);
    } catch (A) {
      (t = A), Ve === n && n !== null && (Ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function lg() {
  var e = pl.current;
  return (pl.current = hl), e === null ? hl : e;
}
function yd() {
  (Ge === 0 || Ge === 3 || Ge === 2) && (Ge = 4),
    Xe === null || (!(no & 268435455) && !(Ul & 268435455)) || rr(Xe, nt);
}
function vl(e, t) {
  var n = pe;
  pe |= 2;
  var r = lg();
  (Xe !== e || nt !== t) && ((Bn = null), Kr(e, t));
  do
    try {
      n8();
      break;
    } catch (o) {
      sg(e, o);
    }
  while (!0);
  if ((td(), (pe = n), (pl.current = r), Ve !== null)) throw Error(W(261));
  return (Xe = null), (nt = 0), Ge;
}
function n8() {
  for (; Ve !== null; ) ug(Ve);
}
function r8() {
  for (; Ve !== null && !P4(); ) ug(Ve);
}
function ug(e) {
  var t = dg(e.alternate, e, Ft);
  (e.memoizedProps = e.pendingProps),
    t === null ? cg(e) : (Ve = t),
    (pd.current = null);
}
function cg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = XE(n, t)), n !== null)) {
        (n.flags &= 32767), (Ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ge = 6), (Ve = null);
        return;
      }
    } else if (((n = YE(n, t, Ft)), n !== null)) {
      Ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ve = t;
      return;
    }
    Ve = t = e;
  } while (t !== null);
  Ge === 0 && (Ge = 5);
}
function jr(e, t, n) {
  var r = ge,
    o = Kt.transition;
  try {
    (Kt.transition = null), (ge = 1), o8(e, t, n, r);
  } finally {
    (Kt.transition = o), (ge = r);
  }
  return null;
}
function o8(e, t, n, r) {
  do qo();
  while (ir !== null);
  if (pe & 6) throw Error(W(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(W(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (L4(e, i),
    e === Xe && ((Ve = Xe = null), (nt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Es ||
      ((Es = !0),
      hg(Zs, function () {
        return qo(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Kt.transition), (Kt.transition = null);
    var a = ge;
    ge = 1;
    var s = pe;
    (pe |= 4),
      (pd.current = null),
      ZE(e, n),
      og(n, e),
      AE(y0),
      (el = !!g0),
      (y0 = g0 = null),
      (e.current = n),
      JE(n),
      b4(),
      (pe = s),
      (ge = a),
      (Kt.transition = i);
  } else e.current = n;
  if (
    (Es && ((Es = !1), (ir = e), (ml = o)),
    (i = e.pendingLanes),
    i === 0 && (dr = null),
    R4(n.stateNode),
    Dt(e, Le()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (xl) throw ((xl = !1), (e = I0), (I0 = null), e);
  return (
    ml & 1 && e.tag !== 0 && qo(),
    (i = e.pendingLanes),
    i & 1 ? (e === z0 ? Ji++ : ((Ji = 0), (z0 = e))) : (Ji = 0),
    wr(),
    null
  );
}
function qo() {
  if (ir !== null) {
    var e = Uv(ml),
      t = Kt.transition,
      n = ge;
    try {
      if (((Kt.transition = null), (ge = 16 > e ? 16 : e), ir === null))
        var r = !1;
      else {
        if (((e = ir), (ir = null), (ml = 0), pe & 6)) throw Error(W(331));
        var o = pe;
        for (pe |= 4, q = e.current; q !== null; ) {
          var i = q,
            a = i.child;
          if (q.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (q = u; q !== null; ) {
                  var c = q;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qi(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (q = d);
                  else
                    for (; q !== null; ) {
                      c = q;
                      var f = c.sibling,
                        x = c.return;
                      if ((tg(c), c === u)) {
                        q = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = x), (q = f);
                        break;
                      }
                      q = x;
                    }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var g = m.child;
                if (g !== null) {
                  m.child = null;
                  do {
                    var E = g.sibling;
                    (g.sibling = null), (g = E);
                  } while (g !== null);
                }
              }
              q = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (q = a);
          else
            e: for (; q !== null; ) {
              if (((i = q), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qi(9, i, i.return);
                }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (q = v);
                break e;
              }
              q = i.return;
            }
        }
        var h = e.current;
        for (q = h; q !== null; ) {
          a = q;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) (p.return = a), (q = p);
          else
            e: for (a = h; q !== null; ) {
              if (((s = q), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vl(9, s);
                  }
                } catch (A) {
                  Ne(s, s.return, A);
                }
              if (s === a) {
                q = null;
                break e;
              }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (q = y);
                break e;
              }
              q = s.return;
            }
        }
        if (
          ((pe = o), wr(), Cn && typeof Cn.onPostCommitFiberRoot == "function")
        )
          try {
            Cn.onPostCommitFiberRoot(Nl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ge = n), (Kt.transition = t);
    }
  }
  return !1;
}
function Ap(e, t, n) {
  (t = ei(n, t)),
    (t = H1(e, t, 1)),
    (e = fr(e, t, 1)),
    (t = xt()),
    e !== null && (Ma(e, 1, t), Dt(e, t));
}
function Ne(e, t, n) {
  if (e.tag === 3) Ap(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ap(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (dr === null || !dr.has(r)))
        ) {
          (e = ei(n, e)),
            (e = W1(t, e, 1)),
            (t = fr(t, e, 1)),
            (e = xt()),
            t !== null && (Ma(t, 1, e), Dt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function i8(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = xt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Xe === e &&
      (nt & n) === n &&
      (Ge === 4 || (Ge === 3 && (nt & 130023424) === nt && 500 > Le() - md)
        ? Kr(e, 0)
        : (xd |= n)),
    Dt(e, t);
}
function fg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = cs), (cs <<= 1), !(cs & 130023424) && (cs = 4194304))
      : (t = 1));
  var n = xt();
  (e = In(e, t)), e !== null && (Ma(e, t, n), Dt(e, n));
}
function a8(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), fg(e, n);
}
function s8(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(W(314));
  }
  r !== null && r.delete(t), fg(e, n);
}
var dg;
dg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || St.current) Ct = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ct = !1), qE(e, t, n);
      Ct = !!(e.flags & 131072);
    }
  else (Ct = !1), Pe && t.flags & 1048576 && x1(t, sl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ls(e, t), (e = t.pendingProps);
      var o = Xo(t, ct.current);
      Ko(t, n), (o = ud(null, t, r, e, o, n));
      var i = cd();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            At(r) ? ((i = !0), il(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            od(t),
            (o.updater = zl),
            (t.stateNode = o),
            (o._reactInternals = t),
            P0(t, r, e, n),
            (t = k0(null, t, r, !0, i, n)))
          : ((t.tag = 0), Pe && i && Qf(t), pt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ls(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = u8(r)),
          (e = tn(r, e)),
          o)
        ) {
          case 0:
            t = F0(null, t, r, e, n);
            break e;
          case 1:
            t = pp(null, t, r, e, n);
            break e;
          case 11:
            t = dp(null, t, r, e, n);
            break e;
          case 14:
            t = hp(null, t, r, tn(r.type, e), n);
            break e;
        }
        throw Error(W(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tn(r, o)),
        F0(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tn(r, o)),
        pp(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Y1(t), e === null)) throw Error(W(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          y1(e, t),
          cl(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = ei(Error(W(423)), t)), (t = xp(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = ei(Error(W(424)), t)), (t = xp(e, t, r, n, o));
            break e;
          } else
            for (
              kt = cr(t.stateNode.containerInfo.firstChild),
                Rt = t,
                Pe = !0,
                sn = null,
                n = S1(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Qo(), r === o)) {
            t = zn(e, t, n);
            break e;
          }
          pt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        A1(t),
        e === null && D0(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        E0(r, o) ? (a = null) : i !== null && E0(r, i) && (t.flags |= 32),
        q1(e, t),
        pt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && D0(t), null;
    case 13:
      return X1(e, t, n);
    case 4:
      return (
        id(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Zo(t, null, r, n)) : pt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tn(r, o)),
        dp(e, t, r, o, n)
      );
    case 7:
      return pt(e, t, t.pendingProps, n), t.child;
    case 8:
      return pt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          we(ll, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (dn(i.value, a)) {
            if (i.children === o.children && !St.current) {
              t = zn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Tn(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      _0(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(W(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  _0(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        pt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Ko(t, n),
        (o = qt(o)),
        (r = r(o)),
        (t.flags |= 1),
        pt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = tn(r, t.pendingProps)),
        (o = tn(r.type, o)),
        hp(e, t, r, o, n)
      );
    case 15:
      return G1(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tn(r, o)),
        Ls(e, t),
        (t.tag = 1),
        At(r) ? ((e = !0), il(t)) : (e = !1),
        Ko(t, n),
        C1(t, r, o),
        P0(t, r, o, n),
        k0(null, t, r, !0, e, n)
      );
    case 19:
      return Q1(e, t, n);
    case 22:
      return K1(e, t, n);
  }
  throw Error(W(156, t.tag));
};
function hg(e, t) {
  return Iv(e, t);
}
function l8(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Gt(e, t, n, r) {
  return new l8(e, t, n, r);
}
function Ed(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function u8(e) {
  if (typeof e == "function") return Ed(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === If)) return 11;
    if (e === zf) return 14;
  }
  return 2;
}
function pr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Gt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function $s(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) Ed(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Ao:
        return qr(n.children, o, i, t);
      case Lf:
        (a = 8), (o |= 8);
        break;
      case Zc:
        return (
          (e = Gt(12, n, t, o | 2)), (e.elementType = Zc), (e.lanes = i), e
        );
      case Jc:
        return (e = Gt(13, n, t, o)), (e.elementType = Jc), (e.lanes = i), e;
      case e0:
        return (e = Gt(19, n, t, o)), (e.elementType = e0), (e.lanes = i), e;
      case wv:
        return Hl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ev:
              a = 10;
              break e;
            case Cv:
              a = 9;
              break e;
            case If:
              a = 11;
              break e;
            case zf:
              a = 14;
              break e;
            case Jn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(W(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Gt(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function qr(e, t, n, r) {
  return (e = Gt(7, e, r, t)), (e.lanes = n), e;
}
function Hl(e, t, n, r) {
  return (
    (e = Gt(22, e, r, t)),
    (e.elementType = wv),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Gu(e, t, n) {
  return (e = Gt(6, e, null, t)), (e.lanes = n), e;
}
function Ku(e, t, n) {
  return (
    (t = Gt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function c8(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Bu(0)),
    (this.expirationTimes = Bu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Bu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Cd(e, t, n, r, o, i, a, s, l) {
  return (
    (e = new c8(e, t, n, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Gt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    od(i),
    e
  );
}
function f8(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: So,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function pg(e) {
  if (!e) return vr;
  e = e._reactInternals;
  e: {
    if (uo(e) !== e || e.tag !== 1) throw Error(W(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (At(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(W(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (At(n)) return h1(e, n, t);
  }
  return t;
}
function xg(e, t, n, r, o, i, a, s, l) {
  return (
    (e = Cd(n, r, !0, e, o, i, a, s, l)),
    (e.context = pg(null)),
    (n = e.current),
    (r = xt()),
    (o = hr(n)),
    (i = Tn(r, o)),
    (i.callback = t ?? null),
    fr(n, i, o),
    (e.current.lanes = o),
    Ma(e, o, r),
    Dt(e, r),
    e
  );
}
function Wl(e, t, n, r) {
  var o = t.current,
    i = xt(),
    a = hr(o);
  return (
    (n = pg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Tn(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = fr(o, t, a)),
    e !== null && (un(e, o, a, i), js(e, o, a)),
    a
  );
}
function gl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Dp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function wd(e, t) {
  Dp(e, t), (e = e.alternate) && Dp(e, t);
}
function d8() {
  return null;
}
var mg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Sd(e) {
  this._internalRoot = e;
}
Gl.prototype.render = Sd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(W(409));
  Wl(e, t, null, null);
};
Gl.prototype.unmount = Sd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ro(function () {
      Wl(null, e, null, null);
    }),
      (t[Ln] = null);
  }
};
function Gl(e) {
  this._internalRoot = e;
}
Gl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Gv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nr.length && t !== 0 && t < nr[n].priority; n++);
    nr.splice(n, 0, e), n === 0 && qv(e);
  }
};
function Ad(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Kl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function _p() {}
function h8(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = gl(a);
        i.call(u);
      };
    }
    var a = xg(t, r, e, 0, null, !1, !1, "", _p);
    return (
      (e._reactRootContainer = a),
      (e[Ln] = a.current),
      ma(e.nodeType === 8 ? e.parentNode : e),
      ro(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = gl(l);
      s.call(u);
    };
  }
  var l = Cd(e, 0, !1, null, null, !1, !1, "", _p);
  return (
    (e._reactRootContainer = l),
    (e[Ln] = l.current),
    ma(e.nodeType === 8 ? e.parentNode : e),
    ro(function () {
      Wl(t, l, n, r);
    }),
    l
  );
}
function ql(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var l = gl(a);
        s.call(l);
      };
    }
    Wl(t, a, e, o);
  } else a = h8(n, t, e, o, r);
  return gl(a);
}
Hv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $i(t.pendingLanes);
        n !== 0 &&
          (Uf(t, n | 1), Dt(t, Le()), !(pe & 6) && ((ti = Le() + 500), wr()));
      }
      break;
    case 13:
      ro(function () {
        var r = In(e, 1);
        if (r !== null) {
          var o = xt();
          un(r, e, 1, o);
        }
      }),
        wd(e, 1);
  }
};
Hf = function (e) {
  if (e.tag === 13) {
    var t = In(e, 134217728);
    if (t !== null) {
      var n = xt();
      un(t, e, 134217728, n);
    }
    wd(e, 134217728);
  }
};
Wv = function (e) {
  if (e.tag === 13) {
    var t = hr(e),
      n = In(e, t);
    if (n !== null) {
      var r = xt();
      un(n, e, t, r);
    }
    wd(e, t);
  }
};
Gv = function () {
  return ge;
};
Kv = function (e, t) {
  var n = ge;
  try {
    return (ge = e), t();
  } finally {
    ge = n;
  }
};
c0 = function (e, t, n) {
  switch (t) {
    case "input":
      if ((r0(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ll(r);
            if (!o) throw Error(W(90));
            Av(r), r0(r, o);
          }
        }
      }
      break;
    case "textarea":
      _v(e, n);
      break;
    case "select":
      (t = n.value), t != null && Uo(e, !!n.multiple, t, !1);
  }
};
Tv = vd;
Nv = ro;
var p8 = { usingClientEntryPoint: !1, Events: [Ia, Po, Ll, kv, Rv, vd] },
  Pi = {
    findFiberByHostInstance: zr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  x8 = {
    bundleType: Pi.bundleType,
    version: Pi.version,
    rendererPackageName: Pi.rendererPackageName,
    rendererConfig: Pi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Un.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Mv(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Pi.findFiberByHostInstance || d8,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Cs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Cs.isDisabled && Cs.supportsFiber)
    try {
      (Nl = Cs.inject(x8)), (Cn = Cs);
    } catch {}
}
jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = p8;
jt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ad(t)) throw Error(W(200));
  return f8(e, t, null, n);
};
jt.createRoot = function (e, t) {
  if (!Ad(e)) throw Error(W(299));
  var n = !1,
    r = "",
    o = mg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Cd(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ln] = t.current),
    ma(e.nodeType === 8 ? e.parentNode : e),
    new Sd(t)
  );
};
jt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(W(188))
      : ((e = Object.keys(e).join(",")), Error(W(268, e)));
  return (e = Mv(t)), (e = e === null ? null : e.stateNode), e;
};
jt.flushSync = function (e) {
  return ro(e);
};
jt.hydrate = function (e, t, n) {
  if (!Kl(t)) throw Error(W(200));
  return ql(null, e, t, !0, n);
};
jt.hydrateRoot = function (e, t, n) {
  if (!Ad(e)) throw Error(W(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = mg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = xg(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[Ln] = t.current),
    ma(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Gl(t);
};
jt.render = function (e, t, n) {
  if (!Kl(t)) throw Error(W(200));
  return ql(null, e, t, !1, n);
};
jt.unmountComponentAtNode = function (e) {
  if (!Kl(e)) throw Error(W(40));
  return e._reactRootContainer
    ? (ro(function () {
        ql(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ln] = null);
        });
      }),
      !0)
    : !1;
};
jt.unstable_batchedUpdates = vd;
jt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Kl(n)) throw Error(W(200));
  if (e == null || e._reactInternals === void 0) throw Error(W(38));
  return ql(e, t, n, !1, r);
};
jt.version = "18.2.0-next-9e3b772b8-20220608";
function vg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vg);
    } catch (e) {
      console.error(e);
    }
}
vg(), (xv.exports = jt);
var Yl = xv.exports;
const m8 = ja(Yl),
  v8 = rv({ __proto__: null, default: m8 }, [Yl]);
var Bp = Yl;
(Xc.createRoot = Bp.createRoot), (Xc.hydrateRoot = Bp.hydrateRoot);
const gg = _.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Xl = _.createContext({}),
  Ql = _.createContext(null),
  Zl = typeof document < "u",
  Dd = Zl ? _.useLayoutEffect : _.useEffect,
  yg = _.createContext({ strict: !1 }),
  _d = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  g8 = "framerAppearId",
  Eg = "data-" + _d(g8);
function y8(e, t, n, r) {
  const { visualElement: o } = _.useContext(Xl),
    i = _.useContext(yg),
    a = _.useContext(Ql),
    s = _.useContext(gg).reducedMotion,
    l = _.useRef();
  (r = r || i.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s,
      }));
  const u = l.current;
  _.useInsertionEffect(() => {
    u && u.update(n, a);
  });
  const c = _.useRef(!!(n[Eg] && !window.HandoffComplete));
  return (
    Dd(() => {
      u &&
        (u.render(),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    _.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function jo(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function E8(e, t, n) {
  return _.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : jo(n) && (n.current = r));
    },
    [t],
  );
}
function Da(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Jl(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Bd = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Pd = ["initial", ...Bd];
function eu(e) {
  return Jl(e.animate) || Pd.some((t) => Da(e[t]));
}
function Cg(e) {
  return !!(eu(e) || e.variants);
}
function C8(e, t) {
  if (eu(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Da(n) ? n : void 0,
      animate: Da(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function w8(e) {
  const { initial: t, animate: n } = C8(e, _.useContext(Xl));
  return _.useMemo(() => ({ initial: t, animate: n }), [Pp(t), Pp(n)]);
}
function Pp(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const bp = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  _a = {};
for (const e in bp) _a[e] = { isEnabled: (t) => bp[e].some((n) => !!t[n]) };
function S8(e) {
  for (const t in e) _a[t] = { ..._a[t], ...e[t] };
}
const bd = _.createContext({}),
  wg = _.createContext({}),
  A8 = Symbol.for("motionComponentSymbol");
function D8({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && S8(e);
  function i(s, l) {
    let u;
    const c = { ..._.useContext(gg), ...s, layoutId: _8(s) },
      { isStatic: d } = c,
      f = w8(s),
      x = r(s, d);
    if (!d && Zl) {
      f.visualElement = y8(o, x, c, t);
      const m = _.useContext(wg),
        g = _.useContext(yg).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, g, e, m));
    }
    return _.createElement(
      Xl.Provider,
      { value: f },
      u && f.visualElement
        ? _.createElement(u, { visualElement: f.visualElement, ...c })
        : null,
      n(o, s, E8(x, f.visualElement, l), x, d, f.visualElement),
    );
  }
  const a = _.forwardRef(i);
  return (a[A8] = o), a;
}
function _8({ layoutId: e }) {
  const t = _.useContext(bd).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function B8(e) {
  function t(r, o = {}) {
    return D8(e(r, o));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o)),
  });
}
const P8 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Fd(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(P8.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const yl = {};
function b8(e) {
  Object.assign(yl, e);
}
const $a = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  co = new Set($a);
function Sg(e, { layout: t, layoutId: n }) {
  return (
    co.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!yl[e] || e === "opacity"))
  );
}
const Bt = (e) => !!(e && e.getVelocity),
  F8 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  k8 = $a.length;
function R8(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  o,
) {
  let i = "";
  for (let a = 0; a < k8; a++) {
    const s = $a[a];
    if (e[s] !== void 0) {
      const l = F8[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return (
    t && !e.z && (i += "translateZ(0)"),
    (i = i.trim()),
    o ? (i = o(e, r ? "" : i)) : n && r && (i = "none"),
    i
  );
}
const Ag = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Dg = Ag("--"),
  U0 = Ag("var(--"),
  T8 =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  N8 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  gr = (e, t, n) => Math.min(Math.max(n, e), t),
  fo = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ea = { ...fo, transform: (e) => gr(0, 1, e) },
  ws = { ...fo, default: 1 },
  ta = (e) => Math.round(e * 1e5) / 1e5,
  tu = /(-)?([\d]*\.?[\d])+/g,
  _g =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  j8 =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Va(e) {
  return typeof e == "string";
}
const Ua = (e) => ({
    test: (t) => Va(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Yn = Ua("deg"),
  Sn = Ua("%"),
  te = Ua("px"),
  O8 = Ua("vh"),
  M8 = Ua("vw"),
  Fp = {
    ...Sn,
    parse: (e) => Sn.parse(e) / 100,
    transform: (e) => Sn.transform(e * 100),
  },
  kp = { ...fo, transform: Math.round },
  Bg = {
    borderWidth: te,
    borderTopWidth: te,
    borderRightWidth: te,
    borderBottomWidth: te,
    borderLeftWidth: te,
    borderRadius: te,
    radius: te,
    borderTopLeftRadius: te,
    borderTopRightRadius: te,
    borderBottomRightRadius: te,
    borderBottomLeftRadius: te,
    width: te,
    maxWidth: te,
    height: te,
    maxHeight: te,
    size: te,
    top: te,
    right: te,
    bottom: te,
    left: te,
    padding: te,
    paddingTop: te,
    paddingRight: te,
    paddingBottom: te,
    paddingLeft: te,
    margin: te,
    marginTop: te,
    marginRight: te,
    marginBottom: te,
    marginLeft: te,
    rotate: Yn,
    rotateX: Yn,
    rotateY: Yn,
    rotateZ: Yn,
    scale: ws,
    scaleX: ws,
    scaleY: ws,
    scaleZ: ws,
    skew: Yn,
    skewX: Yn,
    skewY: Yn,
    distance: te,
    translateX: te,
    translateY: te,
    translateZ: te,
    x: te,
    y: te,
    z: te,
    perspective: te,
    transformPerspective: te,
    opacity: ea,
    originX: Fp,
    originY: Fp,
    originZ: te,
    zIndex: kp,
    fillOpacity: ea,
    strokeOpacity: ea,
    numOctaves: kp,
  };
function kd(e, t, n, r) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (Dg(d)) {
      i[d] = f;
      continue;
    }
    const x = Bg[d],
      m = N8(f, x);
    if (co.has(d)) {
      if (((l = !0), (a[d] = m), !c)) continue;
      f !== (x.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (s[d] = m)) : (o[d] = m);
  }
  if (
    (t.transform ||
      (l || r
        ? (o.transform = R8(e.transform, n, c, r))
        : o.transform && (o.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: x = 0 } = s;
    o.transformOrigin = `${d} ${f} ${x}`;
  }
}
const Rd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Pg(e, t, n) {
  for (const r in t) !Bt(t[r]) && !Sg(r, n) && (e[r] = t[r]);
}
function L8({ transformTemplate: e }, t, n) {
  return _.useMemo(() => {
    const r = Rd();
    return (
      kd(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function I8(e, t, n) {
  const r = e.style || {},
    o = {};
  return (
    Pg(o, r, e),
    Object.assign(o, L8(e, t, n)),
    e.transformValues ? e.transformValues(o) : o
  );
}
function z8(e, t, n) {
  const r = {},
    o = I8(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = o),
    r
  );
}
const $8 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function El(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    $8.has(e)
  );
}
let bg = (e) => !El(e);
function V8(e) {
  e && (bg = (t) => (t.startsWith("on") ? !El(t) : e(t)));
}
try {
  V8(require("@emotion/is-prop-valid").default);
} catch {}
function U8(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((bg(o) ||
        (n === !0 && El(o)) ||
        (!t && !El(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function Rp(e, t, n) {
  return typeof e == "string" ? e : te.transform(t + n * e);
}
function H8(e, t, n) {
  const r = Rp(t, e.x, e.width),
    o = Rp(n, e.y, e.height);
  return `${r} ${o}`;
}
const W8 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  G8 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function K8(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? W8 : G8;
  e[i.offset] = te.transform(-r);
  const a = te.transform(t),
    s = te.transform(n);
  e[i.array] = `${a} ${s}`;
}
function Td(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: a,
    pathSpacing: s = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  f,
) {
  if ((kd(e, u, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: x, style: m, dimensions: g } = e;
  x.transform && (g && (m.transform = x.transform), delete x.transform),
    g &&
      (o !== void 0 || i !== void 0 || m.transform) &&
      (m.transformOrigin = H8(
        g,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5,
      )),
    t !== void 0 && (x.x = t),
    n !== void 0 && (x.y = n),
    r !== void 0 && (x.scale = r),
    a !== void 0 && K8(x, a, s, l, !1);
}
const Fg = () => ({ ...Rd(), attrs: {} }),
  Nd = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function q8(e, t, n, r) {
  const o = _.useMemo(() => {
    const i = Fg();
    return (
      Td(i, t, { enableHardwareAcceleration: !1 }, Nd(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    Pg(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function Y8(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (Fd(n) ? q8 : z8)(r, i, a, n),
      c = { ...U8(r, typeof n == "string", e), ...l, ref: o },
      { children: d } = r,
      f = _.useMemo(() => (Bt(d) ? d.get() : d), [d]);
    return _.createElement(n, { ...c, children: f });
  };
}
function kg(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const Rg = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Tg(e, t, n, r) {
  kg(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(Rg.has(o) ? o : _d(o), t.attrs[o]);
}
function jd(e, t) {
  const { style: n } = e,
    r = {};
  for (const o in n)
    (Bt(n[o]) || (t.style && Bt(t.style[o])) || Sg(o, e)) && (r[o] = n[o]);
  return r;
}
function Ng(e, t) {
  const n = jd(e, t);
  for (const r in e)
    if (Bt(e[r]) || Bt(t[r])) {
      const o =
        $a.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[o] = e[r];
    }
  return n;
}
function Od(e, t, n, r = {}, o = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    t
  );
}
function jg(e) {
  const t = _.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Cl = (e) => Array.isArray(e),
  X8 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Q8 = (e) => (Cl(e) ? e[e.length - 1] || 0 : e);
function Vs(e) {
  const t = Bt(e) ? e.get() : e;
  return X8(t) ? t.toValue() : t;
}
function Z8(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  o,
  i,
) {
  const a = { latestValues: J8(r, o, i, e), renderState: t() };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const Og = (e) => (t, n) => {
  const r = _.useContext(Xl),
    o = _.useContext(Ql),
    i = () => Z8(e, t, r, o);
  return n ? i() : jg(i);
};
function J8(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const f in i) o[f] = Vs(i[f]);
  let { initial: a, animate: s } = e;
  const l = eu(e),
    u = Cg(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return (
    d &&
      typeof d != "boolean" &&
      !Jl(d) &&
      (Array.isArray(d) ? d : [d]).forEach((x) => {
        const m = Od(e, x);
        if (!m) return;
        const { transitionEnd: g, transition: E, ...v } = m;
        for (const h in v) {
          let p = v[h];
          if (Array.isArray(p)) {
            const y = c ? p.length - 1 : 0;
            p = p[y];
          }
          p !== null && (o[h] = p);
        }
        for (const h in g) o[h] = g[h];
      }),
    o
  );
}
const Ie = (e) => e;
class Tp {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function eC(e) {
  let t = new Tp(),
    n = new Tp(),
    r = 0,
    o = !1,
    i = !1;
  const a = new WeakSet(),
    s = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && o,
          f = d ? t : n;
        return u && a.add(l), f.add(l) && d && o && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), a.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            c(l), a.has(c) && (s.schedule(c), e());
          }
        (o = !1), i && ((i = !1), s.process(l));
      },
    };
  return s;
}
const Ss = ["prepare", "read", "update", "preRender", "render", "postRender"],
  tC = 40;
function nC(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = Ss.reduce((d, f) => ((d[f] = eC(() => (n = !0))), d), {}),
    a = (d) => i[d].process(o),
    s = () => {
      const d = performance.now();
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, tC), 1)),
        (o.timestamp = d),
        (o.isProcessing = !0),
        Ss.forEach(a),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(s));
    },
    l = () => {
      (n = !0), (r = !0), o.isProcessing || e(s);
    };
  return {
    schedule: Ss.reduce((d, f) => {
      const x = i[f];
      return (d[f] = (m, g = !1, E = !1) => (n || l(), x.schedule(m, g, E))), d;
    }, {}),
    cancel: (d) => Ss.forEach((f) => i[f].cancel(d)),
    state: o,
    steps: i,
  };
}
const {
    schedule: Se,
    cancel: $n,
    state: st,
    steps: qu,
  } = nC(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ie, !0),
  rC = {
    useVisualState: Og({
      scrapeMotionValuesFromProps: Ng,
      createRenderState: Fg,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        Se.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          Se.render(() => {
            Td(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Nd(t.tagName),
              e.transformTemplate,
            ),
              Tg(t, n);
          });
      },
    }),
  },
  oC = {
    useVisualState: Og({
      scrapeMotionValuesFromProps: jd,
      createRenderState: Rd,
    }),
  };
function iC(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Fd(e) ? rC : oC),
    preloadedFeatures: n,
    useRender: Y8(t),
    createVisualElement: r,
    Component: e,
  };
}
function Rn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Mg = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function nu(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const aC = (e) => (t) => Mg(t) && e(t, nu(t));
function Nn(e, t, n, r) {
  return Rn(e, t, aC(n), r);
}
const sC = (e, t) => (n) => t(e(n)),
  xr = (...e) => e.reduce(sC);
function Lg(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Np = Lg("dragHorizontal"),
  jp = Lg("dragVertical");
function Ig(e) {
  let t = !1;
  if (e === "y") t = jp();
  else if (e === "x") t = Np();
  else {
    const n = Np(),
      r = jp();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function zg() {
  const e = Ig(!0);
  return e ? (e(), !1) : !0;
}
class Sr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Op(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    o = (i, a) => {
      if (i.pointerType === "touch" || zg()) return;
      const s = e.getProps();
      e.animationState &&
        s.whileHover &&
        e.animationState.setActive("whileHover", t),
        s[r] && Se.update(() => s[r](i, a));
    };
  return Nn(e.current, n, o, { passive: !e.getProps()[r] });
}
class lC extends Sr {
  mount() {
    this.unmount = xr(Op(this.node, !0), Op(this.node, !1));
  }
  unmount() {}
}
class uC extends Sr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = xr(
      Rn(this.node.current, "focus", () => this.onFocus()),
      Rn(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
const $g = (e, t) => (t ? (e === t ? !0 : $g(e, t.parentElement)) : !1);
function Yu(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, nu(n));
}
class cC extends Sr {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ie),
      (this.removeEndListeners = Ie),
      (this.removeAccessibleListeners = Ie),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          i = Nn(
            window,
            "pointerup",
            (s, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              Se.update(() => {
                $g(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) },
          ),
          a = Nn(window, "pointercancel", (s, l) => this.cancelPress(s, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = xr(i, a)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const a = (s) => {
              s.key !== "Enter" ||
                !this.checkPressEnd() ||
                Yu("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && Se.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Rn(this.node.current, "keyup", a)),
              Yu("down", (s, l) => {
                this.startPress(s, l);
              });
          },
          n = Rn(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Yu("cancel", (i, a) => this.cancelPress(i, a));
          },
          o = Rn(this.node.current, "blur", r);
        this.removeAccessibleListeners = xr(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && Se.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !zg()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && Se.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Nn(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = Rn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = xr(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const H0 = new WeakMap(),
  Xu = new WeakMap(),
  fC = (e) => {
    const t = H0.get(e.target);
    t && t(e);
  },
  dC = (e) => {
    e.forEach(fC);
  };
function hC({ root: e, ...t }) {
  const n = e || document;
  Xu.has(n) || Xu.set(n, {});
  const r = Xu.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(dC, { root: e, ...t })), r[o];
}
function pC(e, t, n) {
  const r = hC(t);
  return (
    H0.set(e, n),
    r.observe(e),
    () => {
      H0.delete(e), r.unobserve(e);
    }
  );
}
const xC = { some: 0, all: 1 };
class mC extends Sr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      a = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : xC[o],
      },
      s = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return pC(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(vC(t, n)) && this.startObserver();
  }
  unmount() {}
}
function vC({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const gC = {
  inView: { Feature: mC },
  tap: { Feature: cC },
  focus: { Feature: uC },
  hover: { Feature: lC },
};
function Vg(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function yC(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function EC(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function ru(e, t, n) {
  const r = e.getProps();
  return Od(r, t, n !== void 0 ? n : r.custom, yC(e), EC(e));
}
let Md = Ie;
const Yr = (e) => e * 1e3,
  jn = (e) => e / 1e3,
  CC = { current: !1 },
  Ug = (e) => Array.isArray(e) && typeof e[0] == "number";
function Hg(e) {
  return !!(
    !e ||
    (typeof e == "string" && Wg[e]) ||
    Ug(e) ||
    (Array.isArray(e) && e.every(Hg))
  );
}
const Ui = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Wg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ui([0, 0.65, 0.55, 1]),
    circOut: Ui([0.55, 0, 1, 0.45]),
    backIn: Ui([0.31, 0.01, 0.66, -0.59]),
    backOut: Ui([0.33, 1.53, 0.69, 0.99]),
  };
function Gg(e) {
  if (e) return Ug(e) ? Ui(e) : Array.isArray(e) ? e.map(Gg) : Wg[e];
}
function wC(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o,
    repeat: i = 0,
    repeatType: a = "loop",
    ease: s,
    times: l,
  } = {},
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = Gg(s);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: a === "reverse" ? "alternate" : "normal",
    })
  );
}
function SC(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const Kg = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  AC = 1e-7,
  DC = 12;
function _C(e, t, n, r, o) {
  let i,
    a,
    s = 0;
  do (a = t + (n - t) / 2), (i = Kg(a, r, o) - e), i > 0 ? (n = a) : (t = a);
  while (Math.abs(i) > AC && ++s < DC);
  return a;
}
function Ha(e, t, n, r) {
  if (e === t && n === r) return Ie;
  const o = (i) => _C(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : Kg(o(i), t, r));
}
const BC = Ha(0.42, 0, 1, 1),
  PC = Ha(0, 0, 0.58, 1),
  qg = Ha(0.42, 0, 0.58, 1),
  bC = (e) => Array.isArray(e) && typeof e[0] != "number",
  Yg = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Xg = (e) => (t) => 1 - e(1 - t),
  Ld = (e) => 1 - Math.sin(Math.acos(e)),
  Qg = Xg(Ld),
  FC = Yg(Ld),
  Zg = Ha(0.33, 1.53, 0.69, 0.99),
  Id = Xg(Zg),
  kC = Yg(Id),
  RC = (e) =>
    (e *= 2) < 1 ? 0.5 * Id(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  TC = {
    linear: Ie,
    easeIn: BC,
    easeInOut: qg,
    easeOut: PC,
    circIn: Ld,
    circInOut: FC,
    circOut: Qg,
    backIn: Id,
    backInOut: kC,
    backOut: Zg,
    anticipate: RC,
  },
  Mp = (e) => {
    if (Array.isArray(e)) {
      Md(e.length === 4);
      const [t, n, r, o] = e;
      return Ha(t, n, r, o);
    } else if (typeof e == "string") return TC[e];
    return e;
  },
  zd = (e, t) => (n) =>
    !!(
      (Va(n) && j8.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Jg = (e, t, n) => (r) => {
    if (!Va(r)) return r;
    const [o, i, a, s] = r.match(tu);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  },
  NC = (e) => gr(0, 255, e),
  Qu = { ...fo, transform: (e) => Math.round(NC(e)) },
  Ur = {
    test: zd("rgb", "red"),
    parse: Jg("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Qu.transform(e) +
      ", " +
      Qu.transform(t) +
      ", " +
      Qu.transform(n) +
      ", " +
      ta(ea.transform(r)) +
      ")",
  };
function jC(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const W0 = { test: zd("#"), parse: jC, transform: Ur.transform },
  Oo = {
    test: zd("hsl", "hue"),
    parse: Jg("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Sn.transform(ta(t)) +
      ", " +
      Sn.transform(ta(n)) +
      ", " +
      ta(ea.transform(r)) +
      ")",
  },
  ht = {
    test: (e) => Ur.test(e) || W0.test(e) || Oo.test(e),
    parse: (e) =>
      Ur.test(e) ? Ur.parse(e) : Oo.test(e) ? Oo.parse(e) : W0.parse(e),
    transform: (e) =>
      Va(e) ? e : e.hasOwnProperty("red") ? Ur.transform(e) : Oo.transform(e),
  },
  Fe = (e, t, n) => -n * e + n * t + e;
function Zu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function OC({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    a = 0;
  if (!t) o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - s;
    (o = Zu(l, s, e + 1 / 3)), (i = Zu(l, s, e)), (a = Zu(l, s, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r,
  };
}
const Ju = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  MC = [W0, Ur, Oo],
  LC = (e) => MC.find((t) => t.test(e));
function Lp(e) {
  const t = LC(e);
  let n = t.parse(e);
  return t === Oo && (n = OC(n)), n;
}
const ey = (e, t) => {
  const n = Lp(e),
    r = Lp(t),
    o = { ...n };
  return (i) => (
    (o.red = Ju(n.red, r.red, i)),
    (o.green = Ju(n.green, r.green, i)),
    (o.blue = Ju(n.blue, r.blue, i)),
    (o.alpha = Fe(n.alpha, r.alpha, i)),
    Ur.transform(o)
  );
};
function IC(e) {
  var t, n;
  return (
    isNaN(e) &&
    Va(e) &&
    (((t = e.match(tu)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(_g)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const ty = { regex: T8, countKey: "Vars", token: "${v}", parse: Ie },
  ny = { regex: _g, countKey: "Colors", token: "${c}", parse: ht.parse },
  ry = { regex: tu, countKey: "Numbers", token: "${n}", parse: fo.parse };
function ec(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  i &&
    ((e["num" + n] = i.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...i.map(o)));
}
function wl(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && ec(n, ty), ec(n, ny), ec(n, ry), n;
}
function oy(e) {
  return wl(e).values;
}
function iy(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = wl(e),
    i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < r
        ? (s = s.replace(ty.token, a[l]))
        : l < r + n
          ? (s = s.replace(ny.token, ht.transform(a[l])))
          : (s = s.replace(ry.token, ta(a[l])));
    return s;
  };
}
const zC = (e) => (typeof e == "number" ? 0 : e);
function $C(e) {
  const t = oy(e);
  return iy(e)(t.map(zC));
}
const yr = {
    test: IC,
    parse: oy,
    createTransformer: iy,
    getAnimatableNone: $C,
  },
  ay = (e, t) => (n) => `${n > 0 ? t : e}`;
function sy(e, t) {
  return typeof e == "number"
    ? (n) => Fe(e, t, n)
    : ht.test(e)
      ? ey(e, t)
      : e.startsWith("var(")
        ? ay(e, t)
        : uy(e, t);
}
const ly = (e, t) => {
    const n = [...e],
      r = n.length,
      o = e.map((i, a) => sy(i, t[a]));
    return (i) => {
      for (let a = 0; a < r; a++) n[a] = o[a](i);
      return n;
    };
  },
  VC = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const o in n)
      e[o] !== void 0 && t[o] !== void 0 && (r[o] = sy(e[o], t[o]));
    return (o) => {
      for (const i in r) n[i] = r[i](o);
      return n;
    };
  },
  uy = (e, t) => {
    const n = yr.createTransformer(t),
      r = wl(e),
      o = wl(t);
    return r.numVars === o.numVars &&
      r.numColors === o.numColors &&
      r.numNumbers >= o.numNumbers
      ? xr(ly(r.values, o.values), n)
      : ay(e, t);
  },
  Ba = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Ip = (e, t) => (n) => Fe(e, t, n);
function UC(e) {
  return typeof e == "number"
    ? Ip
    : typeof e == "string"
      ? ht.test(e)
        ? ey
        : uy
      : Array.isArray(e)
        ? ly
        : typeof e == "object"
          ? VC
          : Ip;
}
function HC(e, t, n) {
  const r = [],
    o = n || UC(e[0]),
    i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Ie : t;
      s = xr(l, s);
    }
    r.push(s);
  }
  return r;
}
function cy(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((Md(i === t.length), i === 1)) return () => t[0];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = HC(t, r, o),
    s = a.length,
    l = (u) => {
      let c = 0;
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = Ba(e[c], e[c + 1], u);
      return a[c](d);
    };
  return n ? (u) => l(gr(e[0], e[i - 1], u)) : l;
}
function WC(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Ba(0, t, r);
    e.push(Fe(n, 1, o));
  }
}
function GC(e) {
  const t = [0];
  return WC(t, e.length - 1), t;
}
function KC(e, t) {
  return e.map((n) => n * t);
}
function qC(e, t) {
  return e.map(() => t || qg).splice(0, e.length - 1);
}
function Sl({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = bC(r) ? r.map(Mp) : Mp(r),
    i = { done: !1, value: t[0] },
    a = KC(n && n.length === t.length ? n : GC(t), e),
    s = cy(a, t, { ease: Array.isArray(o) ? o : qC(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = s(l)), (i.done = l >= e), i),
  };
}
function fy(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const YC = 5;
function dy(e, t, n) {
  const r = Math.max(t - YC, 0);
  return fy(n - e(r), t - r);
}
const tc = 0.001,
  XC = 0.01,
  QC = 10,
  ZC = 0.05,
  JC = 1;
function ew({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o,
    i,
    a = 1 - t;
  (a = gr(ZC, JC, a)),
    (e = gr(XC, QC, jn(e))),
    a < 1
      ? ((o = (u) => {
          const c = u * a,
            d = c * e,
            f = c - n,
            x = G0(u, a),
            m = Math.exp(-d);
          return tc - (f / x) * m;
        }),
        (i = (u) => {
          const d = u * a * e,
            f = d * n + n,
            x = Math.pow(a, 2) * Math.pow(u, 2) * e,
            m = Math.exp(-d),
            g = G0(Math.pow(u, 2), a);
          return ((-o(u) + tc > 0 ? -1 : 1) * ((f - x) * m)) / g;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -tc + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const s = 5 / e,
    l = nw(o, i, s);
  if (((e = Yr(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: a * 2 * Math.sqrt(r * u), duration: e };
  }
}
const tw = 12;
function nw(e, t, n) {
  let r = n;
  for (let o = 1; o < tw; o++) r = r - e(r) / t(r);
  return r;
}
function G0(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const rw = ["duration", "bounce"],
  ow = ["stiffness", "damping", "mass"];
function zp(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function iw(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!zp(e, ow) && zp(e, rw)) {
    const n = ew(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function hy({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: s,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f,
    } = iw({ ...r, velocity: -jn(r.velocity || 0) }),
    x = d || 0,
    m = l / (2 * Math.sqrt(s * u)),
    g = i - o,
    E = jn(Math.sqrt(s / u)),
    v = Math.abs(g) < 5;
  n || (n = v ? 0.01 : 2), t || (t = v ? 0.005 : 0.5);
  let h;
  if (m < 1) {
    const p = G0(E, m);
    h = (y) => {
      const A = Math.exp(-m * E * y);
      return (
        i - A * (((x + m * E * g) / p) * Math.sin(p * y) + g * Math.cos(p * y))
      );
    };
  } else if (m === 1) h = (p) => i - Math.exp(-E * p) * (g + (x + E * g) * p);
  else {
    const p = E * Math.sqrt(m * m - 1);
    h = (y) => {
      const A = Math.exp(-m * E * y),
        C = Math.min(p * y, 300);
      return (
        i - (A * ((x + m * E * g) * Math.sinh(C) + p * g * Math.cosh(C))) / p
      );
    };
  }
  return {
    calculatedDuration: (f && c) || null,
    next: (p) => {
      const y = h(p);
      if (f) a.done = p >= c;
      else {
        let A = x;
        p !== 0 && (m < 1 ? (A = dy(h, p, y)) : (A = 0));
        const C = Math.abs(A) <= n,
          S = Math.abs(i - y) <= t;
        a.done = C && S;
      }
      return (a.value = a.done ? i : y), a;
    },
  };
}
function $p({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: a,
  min: s,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    x = (D) => (s !== void 0 && D < s) || (l !== void 0 && D > l),
    m = (D) =>
      s === void 0
        ? l
        : l === void 0 || Math.abs(s - D) < Math.abs(l - D)
          ? s
          : l;
  let g = n * t;
  const E = d + g,
    v = a === void 0 ? E : a(E);
  v !== E && (g = v - d);
  const h = (D) => -g * Math.exp(-D / r),
    p = (D) => v + h(D),
    y = (D) => {
      const b = h(D),
        B = p(D);
      (f.done = Math.abs(b) <= u), (f.value = f.done ? v : B);
    };
  let A, C;
  const S = (D) => {
    x(f.value) &&
      ((A = D),
      (C = hy({
        keyframes: [f.value, m(f.value)],
        velocity: dy(p, D, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    S(0),
    {
      calculatedDuration: null,
      next: (D) => {
        let b = !1;
        return (
          !C && A === void 0 && ((b = !0), y(D), S(D)),
          A !== void 0 && D > A ? C.next(D - A) : (!b && y(D), f)
        );
      },
    }
  );
}
const aw = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Se.update(t, !0),
      stop: () => $n(t),
      now: () => (st.isProcessing ? st.timestamp : performance.now()),
    };
  },
  Vp = 2e4;
function Up(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Vp; ) (t += n), (r = e.next(t));
  return t >= Vp ? 1 / 0 : t;
}
const sw = { decay: $p, inertia: $p, tween: Sl, keyframes: Sl, spring: hy };
function Al({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = aw,
  keyframes: r,
  type: o = "keyframes",
  repeat: i = 0,
  repeatDelay: a = 0,
  repeatType: s = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: d,
  ...f
}) {
  let x = 1,
    m = !1,
    g,
    E;
  const v = () => {
    E = new Promise((F) => {
      g = F;
    });
  };
  v();
  let h;
  const p = sw[o] || Sl;
  let y;
  p !== Sl &&
    typeof r[0] != "number" &&
    ((y = cy([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const A = p({ ...f, keyframes: r });
  let C;
  s === "mirror" &&
    (C = p({
      ...f,
      keyframes: [...r].reverse(),
      velocity: -(f.velocity || 0),
    }));
  let S = "idle",
    D = null,
    b = null,
    B = null;
  A.calculatedDuration === null && i && (A.calculatedDuration = Up(A));
  const { calculatedDuration: P } = A;
  let N = 1 / 0,
    O = 1 / 0;
  P !== null && ((N = P + a), (O = N * (i + 1) - a));
  let k = 0;
  const M = (F) => {
      if (b === null) return;
      x > 0 && (b = Math.min(b, F)),
        x < 0 && (b = Math.min(F - O / x, b)),
        D !== null ? (k = D) : (k = Math.round(F - b) * x);
      const I = k - t * (x >= 0 ? 1 : -1),
        V = x >= 0 ? I < 0 : I > O;
      (k = Math.max(I, 0)), S === "finished" && D === null && (k = O);
      let z = k,
        re = A;
      if (i) {
        const Ue = Math.min(k, O) / N;
        let Ze = Math.floor(Ue),
          me = Ue % 1;
        !me && Ue >= 1 && (me = 1),
          me === 1 && Ze--,
          (Ze = Math.min(Ze, i + 1)),
          !!(Ze % 2) &&
            (s === "reverse"
              ? ((me = 1 - me), a && (me -= a / N))
              : s === "mirror" && (re = C)),
          (z = gr(0, 1, me) * N);
      }
      const X = V ? { done: !1, value: r[0] } : re.next(z);
      y && (X.value = y(X.value));
      let { done: he } = X;
      !V && P !== null && (he = x >= 0 ? k >= O : k <= 0);
      const ne = D === null && (S === "finished" || (S === "running" && he));
      return d && d(X.value), ne && j(), X;
    },
    G = () => {
      h && h.stop(), (h = void 0);
    },
    R = () => {
      (S = "idle"), G(), g(), v(), (b = B = null);
    },
    j = () => {
      (S = "finished"), c && c(), G(), g();
    },
    U = () => {
      if (m) return;
      h || (h = n(M));
      const F = h.now();
      l && l(),
        D !== null ? (b = F - D) : (!b || S === "finished") && (b = F),
        S === "finished" && v(),
        (B = b),
        (D = null),
        (S = "running"),
        h.start();
    };
  e && U();
  const H = {
    then(F, I) {
      return E.then(F, I);
    },
    get time() {
      return jn(k);
    },
    set time(F) {
      (F = Yr(F)),
        (k = F),
        D !== null || !h || x === 0 ? (D = F) : (b = h.now() - F / x);
    },
    get duration() {
      const F = A.calculatedDuration === null ? Up(A) : A.calculatedDuration;
      return jn(F);
    },
    get speed() {
      return x;
    },
    set speed(F) {
      F === x || !h || ((x = F), (H.time = jn(k)));
    },
    get state() {
      return S;
    },
    play: U,
    pause: () => {
      (S = "paused"), (D = k);
    },
    stop: () => {
      (m = !0), S !== "idle" && ((S = "idle"), u && u(), R());
    },
    cancel: () => {
      B !== null && M(B), R();
    },
    complete: () => {
      S = "finished";
    },
    sample: (F) => ((b = 0), M(F)),
  };
  return H;
}
function lw(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const uw = lw(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  cw = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  As = 10,
  fw = 2e4,
  dw = (e, t) => t.type === "spring" || e === "backgroundColor" || !Hg(t.ease);
function hw(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (
    !(
      uw() &&
      cw.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== "mirror" &&
      o.damping !== 0 &&
      o.type !== "inertia"
    )
  )
    return !1;
  let a = !1,
    s,
    l,
    u = !1;
  const c = () => {
    l = new Promise((p) => {
      s = p;
    });
  };
  c();
  let { keyframes: d, duration: f = 300, ease: x, times: m } = o;
  if (dw(t, o)) {
    const p = Al({ ...o, repeat: 0, delay: 0 });
    let y = { done: !1, value: d[0] };
    const A = [];
    let C = 0;
    for (; !y.done && C < fw; ) (y = p.sample(C)), A.push(y.value), (C += As);
    (m = void 0), (d = A), (f = C - As), (x = "linear");
  }
  const g = wC(e.owner.current, t, d, { ...o, duration: f, ease: x, times: m }),
    E = () => {
      (u = !1), g.cancel();
    },
    v = () => {
      (u = !0), Se.update(E), s(), c();
    };
  return (
    (g.onfinish = () => {
      u || (e.set(SC(d, o)), r && r(), v());
    }),
    {
      then(p, y) {
        return l.then(p, y);
      },
      attachTimeline(p) {
        return (g.timeline = p), (g.onfinish = null), Ie;
      },
      get time() {
        return jn(g.currentTime || 0);
      },
      set time(p) {
        g.currentTime = Yr(p);
      },
      get speed() {
        return g.playbackRate;
      },
      set speed(p) {
        g.playbackRate = p;
      },
      get duration() {
        return jn(f);
      },
      play: () => {
        a || (g.play(), $n(E));
      },
      pause: () => g.pause(),
      stop: () => {
        if (((a = !0), g.playState === "idle")) return;
        const { currentTime: p } = g;
        if (p) {
          const y = Al({ ...o, autoplay: !1 });
          e.setWithVelocity(y.sample(p - As).value, y.sample(p).value, As);
        }
        v();
      },
      complete: () => {
        u || g.finish();
      },
      cancel: v,
    }
  );
}
function pw({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const o = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Ie,
      pause: Ie,
      stop: Ie,
      then: (i) => (i(), Promise.resolve()),
      cancel: Ie,
      complete: Ie,
    }
  );
  return t
    ? Al({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o })
    : o();
}
const xw = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  mw = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  vw = { type: "keyframes", duration: 0.8 },
  gw = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  yw = (e, { keyframes: t }) =>
    t.length > 2
      ? vw
      : co.has(e)
        ? e.startsWith("scale")
          ? mw(t[1])
          : xw
        : gw,
  K0 = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (yr.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  Ew = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Cw(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(tu) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = Ew.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const ww = /([a-z-]*)\(.*?\)/g,
  q0 = {
    ...yr,
    getAnimatableNone: (e) => {
      const t = e.match(ww);
      return t ? t.map(Cw).join(" ") : e;
    },
  },
  Sw = {
    ...Bg,
    color: ht,
    backgroundColor: ht,
    outlineColor: ht,
    fill: ht,
    stroke: ht,
    borderColor: ht,
    borderTopColor: ht,
    borderRightColor: ht,
    borderBottomColor: ht,
    borderLeftColor: ht,
    filter: q0,
    WebkitFilter: q0,
  },
  $d = (e) => Sw[e];
function py(e, t) {
  let n = $d(e);
  return (
    n !== q0 && (n = yr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const xy = (e) => /^0[^.\s]+$/.test(e);
function Aw(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || xy(e);
}
function Dw(e, t, n, r) {
  const o = K0(t, n);
  let i;
  Array.isArray(n) ? (i = [...n]) : (i = [null, n]);
  const a = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]),
      Aw(i[u]) && l.push(u),
      typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = py(t, s);
    }
  return i;
}
function _w({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: a,
  repeatDelay: s,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Vd(e, t) {
  return e[t] || e.default || e;
}
const Bw = { skipAnimations: !1 },
  Ud =
    (e, t, n, r = {}) =>
    (o) => {
      const i = Vd(r, e) || {},
        a = i.delay || r.delay || 0;
      let { elapsed: s = 0 } = r;
      s = s - Yr(a);
      const l = Dw(t, e, n, i),
        u = l[0],
        c = l[l.length - 1],
        d = K0(e, u),
        f = K0(e, c);
      let x = {
        keyframes: l,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...i,
        delay: -s,
        onUpdate: (m) => {
          t.set(m), i.onUpdate && i.onUpdate(m);
        },
        onComplete: () => {
          o(), i.onComplete && i.onComplete();
        },
      };
      if (
        (_w(i) || (x = { ...x, ...yw(e, x) }),
        x.duration && (x.duration = Yr(x.duration)),
        x.repeatDelay && (x.repeatDelay = Yr(x.repeatDelay)),
        !d || !f || CC.current || i.type === !1 || Bw.skipAnimations)
      )
        return pw(x);
      if (
        !r.isHandoff &&
        t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate
      ) {
        const m = hw(t, e, x);
        if (m) return m;
      }
      return Al(x);
    };
function Dl(e) {
  return !!(Bt(e) && e.add);
}
const my = (e) => /^\-?\d*\.?\d+$/.test(e);
function Hd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Wd(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Gd {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Hd(this.subscriptions, t), () => Wd(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Pw = (e) => !isNaN(parseFloat(e));
class bw {
  constructor(t, n = {}) {
    (this.version = "10.17.12"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: i, timestamp: a } = st;
        this.lastUpdated !== a &&
          ((this.timeDelta = i),
          (this.lastUpdated = a),
          Se.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => Se.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = Pw(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Gd());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            Se.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? fy(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ni(e, t) {
  return new bw(e, t);
}
const vy = (e) => (t) => t.test(e),
  Fw = { test: (e) => e === "auto", parse: (e) => e },
  gy = [fo, te, Sn, Yn, M8, O8, Fw],
  bi = (e) => gy.find(vy(e)),
  kw = [...gy, ht, yr],
  Rw = (e) => kw.find(vy(e));
function Tw(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ni(n));
}
function Nw(e, t) {
  const n = ru(e, t);
  let {
    transitionEnd: r = {},
    transition: o = {},
    ...i
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = Q8(i[a]);
    Tw(e, a, s);
  }
}
function jw(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)),
    a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && o !== void 0
              ? o
              : t[l]),
        c != null &&
          (typeof c == "string" && (my(c) || xy(c))
            ? (c = parseFloat(c))
            : !Rw(c) && yr.test(u) && (c = py(l, u)),
          e.addValue(l, ni(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function Ow(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function Mw(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = Ow(o, t);
    if (i !== void 0) r[o] = i;
    else {
      const a = n.getValue(o);
      a && (r[o] = a.get());
    }
  }
  return r;
}
function Lw({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Iw(e, t) {
  const n = e.get();
  if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
  } else return n !== t;
}
function yy(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: a,
    ...s
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d),
      x = s[d];
    if (!f || x === void 0 || (c && Lw(c, d))) continue;
    const m = { delay: n, elapsed: 0, ...Vd(i || {}, d) };
    if (window.HandoffAppearAnimations) {
      const v = e.getProps()[Eg];
      if (v) {
        const h = window.HandoffAppearAnimations(v, d, f, Se);
        h !== null && ((m.elapsed = h), (m.isHandoff = !0));
      }
    }
    let g = !m.isHandoff && !Iw(f, x);
    if (
      (m.type === "spring" && (f.getVelocity() || m.velocity) && (g = !1),
      f.animation && (g = !1),
      g)
    )
      continue;
    f.start(Ud(d, f, x, e.shouldReduceMotion && co.has(d) ? { type: !1 } : m));
    const E = f.animation;
    Dl(l) && (l.add(d), E.then(() => l.remove(d))), u.push(E);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        a && Nw(e, a);
      }),
    u
  );
}
function Y0(e, t, n = {}) {
  const r = ru(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(yy(e, r, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: d,
            } = o;
            return zw(e, t, u + l, c, d, n);
          }
        : () => Promise.resolve(),
    { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else return Promise.all([i(), a(n.delay)]);
}
function zw(e, t, n = 0, r = 0, o = 1, i) {
  const a = [],
    s = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return (
    Array.from(e.variantChildren)
      .sort($w)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          a.push(
            Y0(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          );
      }),
    Promise.all(a)
  );
}
function $w(e, t) {
  return e.sortNodePosition(t);
}
function Vw(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Y0(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = Y0(e, t, n);
  else {
    const o = typeof t == "function" ? ru(e, t, n.custom) : t;
    r = Promise.all(yy(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const Uw = [...Bd].reverse(),
  Hw = Bd.length;
function Ww(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Vw(e, n, r)));
}
function Gw(e) {
  let t = Ww(e);
  const n = qw();
  let r = !0;
  const o = (l, u) => {
    const c = ru(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...x } = c;
      l = { ...l, ...x, ...f };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function a(l, u) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      f = [],
      x = new Set();
    let m = {},
      g = 1 / 0;
    for (let v = 0; v < Hw; v++) {
      const h = Uw[v],
        p = n[h],
        y = c[h] !== void 0 ? c[h] : d[h],
        A = Da(y),
        C = h === u ? p.isActive : null;
      C === !1 && (g = v);
      let S = y === d[h] && y !== c[h] && A;
      if (
        (S && r && e.manuallyAnimateOnMount && (S = !1),
        (p.protectedKeys = { ...m }),
        (!p.isActive && C === null) ||
          (!y && !p.prevProp) ||
          Jl(y) ||
          typeof y == "boolean")
      )
        continue;
      let b =
          Kw(p.prevProp, y) ||
          (h === u && p.isActive && !S && A) ||
          (v > g && A),
        B = !1;
      const P = Array.isArray(y) ? y : [y];
      let N = P.reduce(o, {});
      C === !1 && (N = {});
      const { prevResolvedValues: O = {} } = p,
        k = { ...O, ...N },
        M = (G) => {
          (b = !0),
            x.has(G) && ((B = !0), x.delete(G)),
            (p.needsAnimating[G] = !0);
        };
      for (const G in k) {
        const R = N[G],
          j = O[G];
        if (m.hasOwnProperty(G)) continue;
        let U = !1;
        Cl(R) && Cl(j) ? (U = !Vg(R, j)) : (U = R !== j),
          U
            ? R !== void 0
              ? M(G)
              : x.add(G)
            : R !== void 0 && x.has(G)
              ? M(G)
              : (p.protectedKeys[G] = !0);
      }
      (p.prevProp = y),
        (p.prevResolvedValues = N),
        p.isActive && (m = { ...m, ...N }),
        r && e.blockInitialAnimation && (b = !1),
        b &&
          (!S || B) &&
          f.push(
            ...P.map((G) => ({ animation: G, options: { type: h, ...l } })),
          );
    }
    if (x.size) {
      const v = {};
      x.forEach((h) => {
        const p = e.getBaseTarget(h);
        p !== void 0 && (v[h] = p);
      }),
        f.push({ animation: v });
    }
    let E = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (E = !1),
      (r = !1),
      E ? t(f) : Promise.resolve()
    );
  }
  function s(l, u, c) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((x) => {
        var m;
        return (m = x.animationState) === null || m === void 0
          ? void 0
          : m.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = a(c, l);
    for (const x in n) n[x].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => n,
  };
}
function Kw(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Vg(t, e) : !1;
}
function Tr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function qw() {
  return {
    animate: Tr(!0),
    whileInView: Tr(),
    whileHover: Tr(),
    whileTap: Tr(),
    whileDrag: Tr(),
    whileFocus: Tr(),
    exit: Tr(),
  };
}
class Yw extends Sr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Gw(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Jl(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let Xw = 0;
class Qw extends Sr {
  constructor() {
    super(...arguments), (this.id = Xw++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o) return;
    const i = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const Zw = { animation: { Feature: Yw }, exit: { Feature: Qw } },
  Hp = (e, t) => Math.abs(e - t);
function Jw(e, t) {
  const n = Hp(e.x, t.x),
    r = Hp(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Ey {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = rc(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          x = Jw(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !x) return;
        const { point: m } = d,
          { timestamp: g } = st;
        this.history.push({ ...m, timestamp: g });
        const { onStart: E, onMove: v } = this.handlers;
        f ||
          (E && E(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          v && v(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = nc(f, this.transformPagePoint)),
          Se.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: x, onSessionEnd: m, resumeAnimation: g } = this.handlers;
        if (
          (this.dragSnapToOrigin && g && g(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const E = rc(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : nc(f, this.transformPagePoint),
          this.history,
        );
        this.startEvent && x && x(d, E), m && m(d, E);
      }),
      !Mg(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window);
    const a = nu(t),
      s = nc(a, this.transformPagePoint),
      { point: l } = s,
      { timestamp: u } = st;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, rc(s, this.history)),
      (this.removeListeners = xr(
        Nn(this.contextWindow, "pointermove", this.handlePointerMove),
        Nn(this.contextWindow, "pointerup", this.handlePointerUp),
        Nn(this.contextWindow, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), $n(this.updatePoint);
  }
}
function nc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Wp(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function rc({ point: e }, t) {
  return {
    point: e,
    delta: Wp(e, Cy(t)),
    offset: Wp(e, e3(t)),
    velocity: t3(t, 0.1),
  };
}
function e3(e) {
  return e[0];
}
function Cy(e) {
  return e[e.length - 1];
}
function t3(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = Cy(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > Yr(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = jn(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Nt(e) {
  return e.max - e.min;
}
function X0(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Gp(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Fe(t.min, t.max, e.origin)),
    (e.scale = Nt(n) / Nt(t)),
    (X0(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Fe(n.min, n.max, e.origin) - e.originPoint),
    (X0(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function na(e, t, n, r) {
  Gp(e.x, t.x, n.x, r ? r.originX : void 0),
    Gp(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Kp(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Nt(t));
}
function n3(e, t, n) {
  Kp(e.x, t.x, n.x), Kp(e.y, t.y, n.y);
}
function qp(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Nt(t));
}
function ra(e, t, n) {
  qp(e.x, t.x, n.x), qp(e.y, t.y, n.y);
}
function r3(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Fe(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Fe(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Yp(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function o3(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: Yp(e.x, n, o), y: Yp(e.y, t, r) };
}
function Xp(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function i3(e, t) {
  return { x: Xp(e.x, t.x), y: Xp(e.y, t.y) };
}
function a3(e, t) {
  let n = 0.5;
  const r = Nt(e),
    o = Nt(t);
  return (
    o > r
      ? (n = Ba(t.min, t.max - r, e.min))
      : r > o && (n = Ba(e.min, e.max - o, t.min)),
    gr(0, 1, n)
  );
}
function s3(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Q0 = 0.35;
function l3(e = Q0) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Q0),
    { x: Qp(e, "left", "right"), y: Qp(e, "top", "bottom") }
  );
}
function Qp(e, t, n) {
  return { min: Zp(e, t), max: Zp(e, n) };
}
function Zp(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Jp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Mo = () => ({ x: Jp(), y: Jp() }),
  ex = () => ({ min: 0, max: 0 }),
  ze = () => ({ x: ex(), y: ex() });
function $t(e) {
  return [e("x"), e("y")];
}
function wy({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function u3({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function c3(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function oc(e) {
  return e === void 0 || e === 1;
}
function Z0({ scale: e, scaleX: t, scaleY: n }) {
  return !oc(e) || !oc(t) || !oc(n);
}
function Or(e) {
  return Z0(e) || Sy(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Sy(e) {
  return tx(e.x) || tx(e.y);
}
function tx(e) {
  return e && e !== "0%";
}
function _l(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function nx(e, t, n, r, o) {
  return o !== void 0 && (e = _l(e, o, r)), _l(e, n, r) + t;
}
function J0(e, t = 0, n = 1, r, o) {
  (e.min = nx(e.min, t, n, r, o)), (e.max = nx(e.max, t, n, r, o));
}
function Ay(e, { x: t, y: n }) {
  J0(e.x, t.translate, t.scale, t.originPoint),
    J0(e.y, n.translate, n.scale, n.originPoint);
}
function f3(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    (i = n[s]), (a = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Lo(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), Ay(e, a)),
      r && Or(i.latestValues) && Lo(e, i.latestValues));
  }
  (t.x = rx(t.x)), (t.y = rx(t.y));
}
function rx(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function tr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function ox(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    a = Fe(e.min, e.max, i);
  J0(e, t[n], t[r], a, t.scale);
}
const d3 = ["x", "scaleX", "originX"],
  h3 = ["y", "scaleY", "originY"];
function Lo(e, t) {
  ox(e.x, t, d3), ox(e.y, t, h3);
}
function Dy(e, t) {
  return wy(c3(e.getBoundingClientRect(), t));
}
function p3(e, t, n) {
  const r = Dy(e, n),
    { scroll: o } = t;
  return o && (tr(r.x, o.offset.x), tr(r.y, o.offset.y)), r;
}
const _y = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  x3 = new WeakMap();
class m3 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ze()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(nu(c, "page").point);
      },
      i = (c, d) => {
        const { drag: f, dragPropagation: x, onDragStart: m } = this.getProps();
        if (
          f &&
          !x &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Ig(f)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          $t((E) => {
            let v = this.getAxisMotionValue(E).get() || 0;
            if (Sn.test(v)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const p = h.layout.layoutBox[E];
                p && (v = Nt(p) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[E] = v;
          }),
          m && Se.update(() => m(c, d), !1, !0);
        const { animationState: g } = this.visualElement;
        g && g.setActive("whileDrag", !0);
      },
      a = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: x,
          onDirectionLock: m,
          onDrag: g,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: E } = d;
        if (x && this.currentDirection === null) {
          (this.currentDirection = v3(E)),
            this.currentDirection !== null && m && m(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, E),
          this.updateAxis("y", d.point, E),
          this.visualElement.render(),
          g && g(c, d);
      },
      s = (c, d) => this.stop(c, d),
      l = () =>
        $t((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Ey(
      t,
      {
        onSessionStart: o,
        onStart: i,
        onMove: a,
        onSessionEnd: s,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: _y(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && Se.update(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !Ds(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (a = r3(a, this.constraints[t], this.elastic[t])),
      i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      i = this.constraints;
    n && jo(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && o
        ? (this.constraints = o3(o.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = l3(r)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        $t((a) => {
          this.getAxisMotionValue(a) &&
            (this.constraints[a] = s3(o.layoutBox[a], this.constraints[a]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !jo(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = p3(r, o.root, this.visualElement.getTransformPagePoint());
    let a = i3(o.layout.layoutBox, i);
    if (n) {
      const s = n(u3(a));
      (this.hasMutatedConstraints = !!s), s && (a = wy(s));
    }
    return a;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: a,
        onDragTransitionEnd: s,
      } = this.getProps(),
      l = this.constraints || {},
      u = $t((c) => {
        if (!Ds(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        a && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          x = o ? 40 : 1e7,
          m = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: x,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, m);
      });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Ud(t, r, 0, n));
  }
  stopAnimation() {
    $t((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    $t((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    $t((n) => {
      const { drag: r } = this.getProps();
      if (!Ds(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[n];
        i.set(t[n] - Fe(a, s, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!jo(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    $t((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = a3({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      $t((a) => {
        if (!Ds(a, t, null)) return;
        const s = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a];
        s.set(Fe(l, u, o[a]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    x3.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Nn(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        jo(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const a = Rn(window, "resize", () => this.scalePositionWithinConstraints()),
      s = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            ($t((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      a(), n(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: a = Q0,
        dragMomentum: s = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s,
    };
  }
}
function Ds(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function v3(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class g3 extends Sr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ie),
      (this.removeListeners = Ie),
      (this.controls = new m3(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ie);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ix = (e) => (t, n) => {
  e && Se.update(() => e(t, n));
};
class y3 extends Sr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ie);
  }
  onPointerDown(t) {
    this.session = new Ey(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: _y(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: ix(t),
      onStart: ix(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && Se.update(() => o(i, a));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Nn(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function E3() {
  const e = _.useContext(Ql);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = _.useId();
  return _.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
const Us = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function ax(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Fi = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (te.test(e)) e = parseFloat(e);
        else return e;
      const n = ax(e, t.target.x),
        r = ax(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  C3 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = yr.parse(e);
      if (o.length > 5) return r;
      const i = yr.createTransformer(e),
        a = typeof o[0] != "number" ? 1 : 0,
        s = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + a] /= s), (o[1 + a] /= l);
      const u = Fe(s, l, 0.5);
      return (
        typeof o[2 + a] == "number" && (o[2 + a] /= u),
        typeof o[3 + a] == "number" && (o[3 + a] /= u),
        i(o)
      );
    },
  };
class w3 extends ue.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    b8(S3),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Us.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      a = r.projection;
    return (
      a &&
        ((a.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? a.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? a.promote()
            : a.relegate() ||
              Se.postRender(() => {
                const s = a.getStack();
                (!s || !s.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function By(e) {
  const [t, n] = E3(),
    r = _.useContext(bd);
  return ue.createElement(w3, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: _.useContext(wg),
    isPresent: t,
    safeToRemove: n,
  });
}
const S3 = {
    borderRadius: {
      ...Fi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Fi,
    borderTopRightRadius: Fi,
    borderBottomLeftRadius: Fi,
    borderBottomRightRadius: Fi,
    boxShadow: C3,
  },
  Py = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  A3 = Py.length,
  sx = (e) => (typeof e == "string" ? parseFloat(e) : e),
  lx = (e) => typeof e == "number" || te.test(e);
function D3(e, t, n, r, o, i) {
  o
    ? ((e.opacity = Fe(0, n.opacity !== void 0 ? n.opacity : 1, _3(r))),
      (e.opacityExit = Fe(t.opacity !== void 0 ? t.opacity : 1, 0, B3(r))))
    : i &&
      (e.opacity = Fe(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let a = 0; a < A3; a++) {
    const s = `border${Py[a]}Radius`;
    let l = ux(t, s),
      u = ux(n, s);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || lx(l) === lx(u)
        ? ((e[s] = Math.max(Fe(sx(l), sx(u), r), 0)),
          (Sn.test(u) || Sn.test(l)) && (e[s] += "%"))
        : (e[s] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = Fe(t.rotate || 0, n.rotate || 0, r));
}
function ux(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const _3 = by(0, 0.5, Qg),
  B3 = by(0.5, 0.95, Ie);
function by(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Ba(e, t, r)));
}
function cx(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function zt(e, t) {
  cx(e.x, t.x), cx(e.y, t.y);
}
function fx(e, t, n, r, o) {
  return (
    (e -= t), (e = _l(e, 1 / n, r)), o !== void 0 && (e = _l(e, 1 / o, r)), e
  );
}
function P3(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (
    (Sn.test(t) &&
      ((t = parseFloat(t)), (t = Fe(a.min, a.max, t / 100) - a.min)),
    typeof t != "number")
  )
    return;
  let s = Fe(i.min, i.max, r);
  e === i && (s -= t),
    (e.min = fx(e.min, t, n, s, o)),
    (e.max = fx(e.max, t, n, s, o));
}
function dx(e, t, [n, r, o], i, a) {
  P3(e, t[n], t[r], t[o], t.scale, i, a);
}
const b3 = ["x", "scaleX", "originX"],
  F3 = ["y", "scaleY", "originY"];
function hx(e, t, n, r) {
  dx(e.x, t, b3, n ? n.x : void 0, r ? r.x : void 0),
    dx(e.y, t, F3, n ? n.y : void 0, r ? r.y : void 0);
}
function px(e) {
  return e.translate === 0 && e.scale === 1;
}
function Fy(e) {
  return px(e.x) && px(e.y);
}
function k3(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function ky(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function xx(e) {
  return Nt(e.x) / Nt(e.y);
}
class R3 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Hd(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Wd(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function mx(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y;
  if (
    ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x,
    s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || "none";
}
const T3 = (e, t) => e.depth - t.depth;
class N3 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Hd(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Wd(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(T3),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function j3(e, t) {
  const n = performance.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && ($n(r), e(i - t));
    };
  return Se.read(r, !0), () => $n(r);
}
function O3(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function M3(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function L3(e, t, n) {
  const r = Bt(e) ? e : ni(e);
  return r.start(Ud("", r, t, n)), r.animation;
}
const vx = ["", "X", "Y", "Z"],
  I3 = { visibility: "hidden" },
  gx = 1e3;
let z3 = 0;
const Mr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Ry({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      (this.id = z3++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (Mr.totalNodes =
              Mr.resolvedTargetDeltas =
              Mr.recalculatedProjection =
                0),
            this.nodes.forEach(U3),
            this.nodes.forEach(q3),
            this.nodes.forEach(Y3),
            this.nodes.forEach(H3),
            O3(Mr);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = a),
        (this.root = s ? s.root || s : this),
        (this.path = s ? [...s.path, s] : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new N3());
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new Gd()),
        this.eventHandlers.get(a).add(s)
      );
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = M3(a)), (this.instance = a);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        s && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = j3(f, 250)),
            Us.hasAnimatedSinceResize &&
              ((Us.hasAnimatedSinceResize = !1), this.nodes.forEach(Ex));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: x,
              layout: m,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const g =
                  this.options.transition || c.getDefaultTransition() || eS,
                { onLayoutAnimationStart: E, onLayoutAnimationComplete: v } =
                  c.getProps(),
                h = !this.targetLayout || !ky(this.targetLayout, m) || x,
                p = !f && x;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                p ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, p);
                const y = { ...Vd(g, "layout"), onPlay: E, onComplete: v };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((y.delay = 0), (y.type = !1)),
                  this.startAnimation(y);
              } else
                f || Ex(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = m;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        $n(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(X3),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(yx);
        return;
      }
      this.isUpdating || this.nodes.forEach(G3),
        (this.isUpdating = !1),
        this.nodes.forEach(K3),
        this.nodes.forEach($3),
        this.nodes.forEach(V3),
        this.clearAllSnapshots();
      const s = performance.now();
      (st.delta = gr(0, 1e3 / 60, s - st.timestamp)),
        (st.timestamp = s),
        (st.isProcessing = !0),
        qu.update.process(st),
        qu.preRender.process(st),
        qu.render.process(st),
        (st.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(W3), this.sharedNodes.forEach(Q3);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Se.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Se.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const a = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ze()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s &&
        s.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          a ? a.layoutBox : void 0,
        );
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === a &&
        (s = !1),
        s &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: a,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!o) return;
      const a = this.isLayoutDirty || this.shouldResetTransform,
        s = this.projectionDelta && !Fy(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      a &&
        (s || Or(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return (
        a && (l = this.removeTransform(l)),
        tS(l),
        {
          animationId: this.root.animationId,
          measuredBox: s,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a) return ze();
      const s = a.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (tr(s.x, l.offset.x), tr(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = ze();
      zt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            zt(s, a);
            const { scroll: f } = this.root;
            f && (tr(s.x, -f.offset.x), tr(s.y, -f.offset.y));
          }
          tr(s.x, c.offset.x), tr(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = ze();
      zt(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Lo(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Or(c.latestValues) && Lo(l, c.latestValues);
      }
      return Or(this.latestValues) && Lo(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = ze();
      zt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Or(u.latestValues)) continue;
        Z0(u.latestValues) && u.updateSnapshot();
        const c = ze(),
          d = u.measurePageBox();
        zt(c, d),
          hx(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Or(this.latestValues) && hx(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      (this.targetDelta = a),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== st.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          a ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = st.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const x = this.getClosestProjectingParent();
          x && x.layout && this.animationProgress !== 1
            ? ((this.relativeParent = x),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ze()),
              (this.relativeTargetOrigin = ze()),
              ra(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                x.layout.layoutBox,
              ),
              zt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ze()), (this.targetWithTransforms = ze())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                n3(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : zt(this.target, this.layout.layoutBox),
                  Ay(this.target, this.targetDelta))
                : zt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const x = this.getClosestProjectingParent();
            x &&
            !!x.resumingFrom == !!this.resumingFrom &&
            !x.options.layoutScroll &&
            x.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = x),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ze()),
                (this.relativeTargetOrigin = ze()),
                ra(this.relativeTargetOrigin, this.target, x.target),
                zt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Mr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Z0(this.parent.latestValues) ||
          Sy(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var a;
      const s = this.getLead(),
        l = !!this.resumingFrom || this !== s;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === st.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      zt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        x = this.treeScale.y;
      f3(this.layoutCorrected, this.treeScale, this.path, l),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (s.target = s.layout.layoutBox);
      const { target: m } = s;
      if (!m) {
        this.projectionTransform &&
          ((this.projectionDelta = Mo()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Mo()),
        (this.projectionDeltaWithTransform = Mo()));
      const g = this.projectionTransform;
      na(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
        (this.projectionTransform = mx(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== g ||
          this.treeScale.x !== f ||
          this.treeScale.y !== x) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", m)),
        Mr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), a)) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = Mo();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s);
      const f = ze(),
        x = l ? l.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        g = x !== m,
        E = this.getStack(),
        v = !E || E.members.length <= 1,
        h = !!(g && !v && this.options.crossfade === !0 && !this.path.some(J3));
      this.animationProgress = 0;
      let p;
      (this.mixTargetDelta = (y) => {
        const A = y / 1e3;
        Cx(d.x, a.x, A),
          Cx(d.y, a.y, A),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ra(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Z3(this.relativeTarget, this.relativeTargetOrigin, f, A),
            p && k3(this.relativeTarget, p) && (this.isProjectionDirty = !1),
            p || (p = ze()),
            zt(p, this.relativeTarget)),
          g &&
            ((this.animationValues = c), D3(c, u, this.latestValues, A, h, v)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = A);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          ($n(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Se.update(() => {
          (Us.hasAnimatedSinceResize = !0),
            (this.currentAnimation = L3(0, gx, {
              ...a,
              onUpdate: (s) => {
                this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
              },
              onComplete: () => {
                a.onComplete && a.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const a = this.getStack();
      a && a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(gx),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let {
        targetWithTransforms: s,
        target: l,
        layout: u,
        latestValues: c,
      } = a;
      if (!(!s || !l || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          Ty(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ze();
          const d = Nt(this.layout.layoutBox.x);
          (l.x.min = a.target.x.min), (l.x.max = l.x.min + d);
          const f = Nt(this.layout.layoutBox.y);
          (l.y.min = a.target.y.min), (l.y.max = l.y.min + f);
        }
        zt(s, l),
          Lo(s, c),
          na(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new R3()),
        this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(s)
            : void 0,
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a) return;
      let s = !1;
      const { latestValues: l } = a;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s))
        return;
      const u = {};
      for (let c = 0; c < vx.length; c++) {
        const d = "rotate" + vx[c];
        l[d] && ((u[d] = l[d]), a.setStaticValue(d, 0));
      }
      a.render();
      for (const c in u) a.setStaticValue(c, u[c]);
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var s, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return I3;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Vs(a == null ? void 0 : a.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = Vs(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !Or(this.latestValues) &&
            ((g.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = mx(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f,
        )),
        c && (u.transform = c(f, u.transform));
      const { x, y: m } = this.projectionDelta;
      (u.transformOrigin = `${x.origin * 100}% ${m.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (s = f.opacity) !== null && s !== void 0
                      ? s
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                  ? f.opacityExit
                  : 0);
      for (const g in yl) {
        if (f[g] === void 0) continue;
        const { correct: E, applyTo: v } = yl[g],
          h = u.transform === "none" ? f[g] : E(f[g], d);
        if (v) {
          const p = v.length;
          for (let y = 0; y < p; y++) u[v[y]] = h;
        } else u[g] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? Vs(a == null ? void 0 : a.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0
          ? void 0
          : s.stop();
      }),
        this.root.nodes.forEach(yx),
        this.root.sharedNodes.clear();
    }
  };
}
function $3(e) {
  e.updateLayout();
}
function V3(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      a = n.source !== e.layout.source;
    i === "size"
      ? $t((d) => {
          const f = a ? n.measuredBox[d] : n.layoutBox[d],
            x = Nt(f);
          (f.min = r[d].min), (f.max = f.min + x);
        })
      : Ty(i, n.layoutBox, r) &&
        $t((d) => {
          const f = a ? n.measuredBox[d] : n.layoutBox[d],
            x = Nt(r[d]);
          (f.max = f.min + x),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + x));
        });
    const s = Mo();
    na(s, r, n.layoutBox);
    const l = Mo();
    a ? na(l, e.applyTransform(o, !0), n.measuredBox) : na(l, r, n.layoutBox);
    const u = !Fy(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: x } = d;
        if (f && x) {
          const m = ze();
          ra(m, n.layoutBox, f.layoutBox);
          const g = ze();
          ra(g, r, x.layoutBox),
            ky(m, g) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = m),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function U3(e) {
  Mr.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function H3(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function W3(e) {
  e.clearSnapshot();
}
function yx(e) {
  e.clearMeasurements();
}
function G3(e) {
  e.isLayoutDirty = !1;
}
function K3(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Ex(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function q3(e) {
  e.resolveTargetDelta();
}
function Y3(e) {
  e.calcProjection();
}
function X3(e) {
  e.resetRotation();
}
function Q3(e) {
  e.removeLeadSnapshot();
}
function Cx(e, t, n) {
  (e.translate = Fe(t.translate, 0, n)),
    (e.scale = Fe(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function wx(e, t, n, r) {
  (e.min = Fe(t.min, n.min, r)), (e.max = Fe(t.max, n.max, r));
}
function Z3(e, t, n, r) {
  wx(e.x, t.x, n.x, r), wx(e.y, t.y, n.y, r);
}
function J3(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const eS = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Sx = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  Ax = Sx("applewebkit/") && !Sx("chrome/") ? Math.round : Ie;
function Dx(e) {
  (e.min = Ax(e.min)), (e.max = Ax(e.max));
}
function tS(e) {
  Dx(e.x), Dx(e.y);
}
function Ty(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !X0(xx(t), xx(n), 0.2))
  );
}
const nS = Ry({
    attachResizeListener: (e, t) => Rn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ic = { current: void 0 },
  Ny = Ry({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!ic.current) {
        const e = new nS({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (ic.current = e);
      }
      return ic.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  rS = {
    pan: { Feature: y3 },
    drag: { Feature: g3, ProjectionNode: Ny, MeasureLayout: By },
  },
  oS = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function iS(e) {
  const t = oS.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function ef(e, t, n = 1) {
  const [r, o] = iS(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return my(a) ? parseFloat(a) : a;
  } else return U0(o) ? ef(o, t, n + 1) : o;
}
function aS(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((o) => {
      const i = o.get();
      if (!U0(i)) return;
      const a = ef(i, r);
      a && o.set(a);
    });
  for (const o in t) {
    const i = t[o];
    if (!U0(i)) continue;
    const a = ef(i, r);
    a && ((t[o] = a), n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const sS = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  jy = (e) => sS.has(e),
  lS = (e) => Object.keys(e).some(jy),
  _x = (e) => e === fo || e === te,
  Bx = (e, t) => parseFloat(e.split(", ")[t]),
  Px =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/);
      if (o) return Bx(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/);
        return i ? Bx(i[1], e) : 0;
      }
    },
  uS = new Set(["x", "y", "z"]),
  cS = $a.filter((e) => !uS.has(e));
function fS(e) {
  const t = [];
  return (
    cS.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const ri = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Px(4, 13),
  y: Px(5, 14),
};
ri.translateX = ri.x;
ri.translateY = ri.y;
const dS = (e, t, n) => {
    const r = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: a } = i,
      s = {};
    a === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        s[u] = ri[u](r, i);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(s[u]), (e[u] = ri[u](l, i));
      }),
      e
    );
  },
  hS = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const o = Object.keys(t).filter(jy);
    let i = [],
      a = !1;
    const s = [];
    if (
      (o.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          d = bi(c);
        const f = t[l];
        let x;
        if (Cl(f)) {
          const m = f.length,
            g = f[0] === null ? 1 : 0;
          (c = f[g]), (d = bi(c));
          for (let E = g; E < m && f[E] !== null; E++)
            x ? Md(bi(f[E]) === x) : (x = bi(f[E]));
        } else x = bi(f);
        if (d !== x)
          if (_x(d) && _x(x)) {
            const m = u.get();
            typeof m == "string" && u.set(parseFloat(m)),
              typeof f == "string"
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && x === te && (t[l] = f.map(parseFloat));
          } else
            d != null &&
            d.transform &&
            x != null &&
            x.transform &&
            (c === 0 || f === 0)
              ? c === 0
                ? u.set(x.transform(c))
                : (t[l] = d.transform(f))
              : (a || ((i = fS(e)), (a = !0)),
                s.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(f));
      }),
      s.length)
    ) {
      const l = s.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = dS(t, e, s);
      return (
        i.length &&
          i.forEach(([c, d]) => {
            e.getValue(c).set(d);
          }),
        e.render(),
        Zl && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function pS(e, t, n, r) {
  return lS(t) ? hS(e, t, n, r) : { target: t, transitionEnd: r };
}
const xS = (e, t, n, r) => {
    const o = aS(e, t, r);
    return (t = o.target), (r = o.transitionEnd), pS(e, t, n, r);
  },
  tf = { current: null },
  Oy = { current: !1 };
function mS() {
  if (((Oy.current = !0), !!Zl))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (tf.current = e.matches);
      e.addListener(t), t();
    } else tf.current = !1;
}
function vS(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o],
      a = n[o];
    if (Bt(i)) e.addValue(o, i), Dl(r) && r.add(o);
    else if (Bt(a)) e.addValue(o, ni(i, { owner: e })), Dl(r) && r.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, ni(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in n) t[o] === void 0 && e.removeValue(o);
  return t;
}
const bx = new WeakMap(),
  My = Object.keys(_a),
  gS = My.length,
  Fx = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  yS = Pd.length;
class ES {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      visualState: i,
    },
    a = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.scheduleRender = () => Se.render(this.render, !1, !0));
    const { latestValues: s, renderState: l } = i;
    (this.latestValues = s),
      (this.baseTarget = { ...s }),
      (this.initialValues = n.initial ? { ...s } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.isControllingVariants = eu(n)),
      (this.isVariantNode = Cg(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && Bt(f) && (f.set(s[d], !1), Dl(u) && u.add(d));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      bx.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Oy.current || mS(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : tf.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    bx.delete(this.current),
      this.projection && this.projection.unmount(),
      $n(this.notifyUpdate),
      $n(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = co.has(t),
      o = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && Se.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, o, i) {
    let a, s;
    for (let l = 0; l < gS; l++) {
      const u = My[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: f,
          MeasureLayout: x,
        } = _a[u];
      f && (a = f),
        c(n) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          x && (s = x));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      a
    ) {
      this.projection = new a(
        this.latestValues,
        this.parent && this.parent.projection,
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: x,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (d && jo(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: f,
        layoutRoot: x,
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ze();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Fx.length; r++) {
      const o = Fx[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    (this.prevMotionValues = vS(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < yS; r++) {
      const o = Pd[r],
        i = this.props[o];
      (Da(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = ni(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
          n !== void 0
        ? n
        : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      o =
        typeof r == "string" || typeof r == "object"
          ? (n = Od(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Bt(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Gd()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Ly extends ES {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: o },
    i,
  ) {
    let a = Mw(r, t || {}, this);
    if ((o && (n && (n = o(n)), r && (r = o(r)), a && (a = o(a))), i)) {
      jw(this, r, a);
      const s = xS(this, r, a, n);
      (n = s.transitionEnd), (r = s.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function CS(e) {
  return window.getComputedStyle(e);
}
class wS extends Ly {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (co.has(n)) {
      const r = $d(n);
      return (r && r.default) || 0;
    } else {
      const r = CS(t),
        o = (Dg(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Dy(t, n);
  }
  build(t, n, r, o) {
    kd(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return jd(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Bt(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, o) {
    kg(t, n, r, o);
  }
}
class SS extends Ly {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (co.has(n)) {
      const r = $d(n);
      return (r && r.default) || 0;
    }
    return (n = Rg.has(n) ? n : _d(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return ze();
  }
  scrapeMotionValuesFromProps(t, n) {
    return Ng(t, n);
  }
  build(t, n, r, o) {
    Td(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    Tg(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = Nd(t.tagName)), super.mount(t);
  }
}
const AS = (e, t) =>
    Fd(e)
      ? new SS(t, { enableHardwareAcceleration: !1 })
      : new wS(t, { enableHardwareAcceleration: !0 }),
  DS = { layout: { ProjectionNode: Ny, MeasureLayout: By } },
  _S = { ...Zw, ...gC, ...rS, ...DS },
  nf = B8((e, t) => iC(e, t, _S, AS));
function Iy() {
  const e = _.useRef(!1);
  return (
    Dd(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      [],
    ),
    e
  );
}
function BS() {
  const e = Iy(),
    [t, n] = _.useState(0),
    r = _.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [_.useCallback(() => Se.postRender(r), [r]), t];
}
class PS extends _.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function bS({ children: e, isPresent: t }) {
  const n = _.useId(),
    r = _.useRef(null),
    o = _.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    _.useInsertionEffect(() => {
      const { width: i, height: a, top: s, left: l } = o.current;
      if (t || !r.current || !i || !a) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    _.createElement(
      PS,
      { isPresent: t, childRef: r, sizeRef: o },
      _.cloneElement(e, { ref: r }),
    )
  );
}
const ac = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: i,
  mode: a,
}) => {
  const s = jg(FS),
    l = _.useId(),
    u = _.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: (c) => {
          s.set(c, !0);
          for (const d of s.values()) if (!d) return;
          r && r();
        },
        register: (c) => (s.set(c, !1), () => s.delete(c)),
      }),
      i ? void 0 : [n],
    );
  return (
    _.useMemo(() => {
      s.forEach((c, d) => s.set(d, !1));
    }, [n]),
    _.useEffect(() => {
      !n && !s.size && r && r();
    }, [n]),
    a === "popLayout" && (e = _.createElement(bS, { isPresent: n }, e)),
    _.createElement(Ql.Provider, { value: u }, e)
  );
};
function FS() {
  return new Map();
}
function kS(e) {
  return _.useEffect(() => () => e(), []);
}
const Lr = (e) => e.key || "";
function RS(e, t) {
  e.forEach((n) => {
    const r = Lr(n);
    t.set(r, n);
  });
}
function TS(e) {
  const t = [];
  return (
    _.Children.forEach(e, (n) => {
      _.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const NS = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    exitBeforeEnter: o,
    presenceAffectsLayout: i = !0,
    mode: a = "sync",
  }) => {
    const s = _.useContext(bd).forceRender || BS()[0],
      l = Iy(),
      u = TS(e);
    let c = u;
    const d = _.useRef(new Map()).current,
      f = _.useRef(c),
      x = _.useRef(new Map()).current,
      m = _.useRef(!0);
    if (
      (Dd(() => {
        (m.current = !1), RS(u, x), (f.current = c);
      }),
      kS(() => {
        (m.current = !0), x.clear(), d.clear();
      }),
      m.current)
    )
      return _.createElement(
        _.Fragment,
        null,
        c.map((h) =>
          _.createElement(
            ac,
            {
              key: Lr(h),
              isPresent: !0,
              initial: n ? void 0 : !1,
              presenceAffectsLayout: i,
              mode: a,
            },
            h,
          ),
        ),
      );
    c = [...c];
    const g = f.current.map(Lr),
      E = u.map(Lr),
      v = g.length;
    for (let h = 0; h < v; h++) {
      const p = g[h];
      E.indexOf(p) === -1 && !d.has(p) && d.set(p, void 0);
    }
    return (
      a === "wait" && d.size && (c = []),
      d.forEach((h, p) => {
        if (E.indexOf(p) !== -1) return;
        const y = x.get(p);
        if (!y) return;
        const A = g.indexOf(p);
        let C = h;
        if (!C) {
          const S = () => {
            d.delete(p);
            const D = Array.from(x.keys()).filter((b) => !E.includes(b));
            if (
              (D.forEach((b) => x.delete(b)),
              (f.current = u.filter((b) => {
                const B = Lr(b);
                return B === p || D.includes(B);
              })),
              !d.size)
            ) {
              if (l.current === !1) return;
              s(), r && r();
            }
          };
          (C = _.createElement(
            ac,
            {
              key: Lr(y),
              isPresent: !1,
              onExitComplete: S,
              custom: t,
              presenceAffectsLayout: i,
              mode: a,
            },
            y,
          )),
            d.set(p, C);
        }
        c.splice(A, 0, C);
      }),
      (c = c.map((h) => {
        const p = h.key;
        return d.has(p)
          ? h
          : _.createElement(
              ac,
              { key: Lr(h), isPresent: !0, presenceAffectsLayout: i, mode: a },
              h,
            );
      })),
      _.createElement(
        _.Fragment,
        null,
        d.size ? c : c.map((h) => _.cloneElement(h)),
      )
    );
  },
  jS = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
function Ar(e) {
  return w.jsx(nf.div, {
    className: "h-full",
    variants: jS,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    transition: { duration: 5, type: "spring", stiffness: 50, mass: 5 },
    children: e.children,
  });
}
function OS() {
  return w.jsx(Ar, {
    children: w.jsxs("div", {
      className:
        " text-text bg-transparent h-full mx-auto flex flex-col-reverse justify-center md:flex-row",
      children: [
        w.jsxs("div", {
          className:
            "md:w-1/2 my-auto text-center md:text-right z-20 justify-center mx-auto mt-0 md:my-auto",
          children: [
            w.jsx("h1", {
              className: "text-6xl lg:text-8xl font-bold",
              children: "Makinator",
            }),
            w.jsx("p", {
              className: "text-xl",
              children: "An intelectual math game!",
            }),
          ],
        }),
        w.jsx("div", {
          className: "md:w-1/2  mt-auto mb-0 md:my-auto z-10 mx-auto",
          children: w.jsx("img", {
            className: "my-auto mx-auto w-1/2",
            src: "/logo.png",
          }),
        }),
      ],
    }),
  });
}
/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function je() {
  return (
    (je = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    je.apply(this, arguments)
  );
}
var Me;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Me || (Me = {}));
const kx = "popstate";
function MS(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: a, hash: s } = r.location;
    return Pa(
      "",
      { pathname: i, search: a, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : io(o);
  }
  return IS(t, n, null, e);
}
function ce(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function oo(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function LS() {
  return Math.random().toString(36).substr(2, 8);
}
function Rx(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Pa(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    je(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Hn(t) : t,
      { state: n, key: (t && t.key) || r || LS() },
    )
  );
}
function io(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Hn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function IS(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    s = Me.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), a.replaceState(je({}, a.state, { idx: u }), ""));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    s = Me.Pop;
    let E = c(),
      v = E == null ? null : E - u;
    (u = E), l && l({ action: s, location: g.location, delta: v });
  }
  function f(E, v) {
    s = Me.Push;
    let h = Pa(g.location, E, v);
    n && n(h, E), (u = c() + 1);
    let p = Rx(h, u),
      y = g.createHref(h);
    try {
      a.pushState(p, "", y);
    } catch (A) {
      if (A instanceof DOMException && A.name === "DataCloneError") throw A;
      o.location.assign(y);
    }
    i && l && l({ action: s, location: g.location, delta: 1 });
  }
  function x(E, v) {
    s = Me.Replace;
    let h = Pa(g.location, E, v);
    n && n(h, E), (u = c());
    let p = Rx(h, u),
      y = g.createHref(h);
    a.replaceState(p, "", y),
      i && l && l({ action: s, location: g.location, delta: 0 });
  }
  function m(E) {
    let v = o.location.origin !== "null" ? o.location.origin : o.location.href,
      h = typeof E == "string" ? E : io(E);
    return (
      ce(
        v,
        "No window.location.(origin|href) available to create URL for href: " +
          h,
      ),
      new URL(h, v)
    );
  }
  let g = {
    get action() {
      return s;
    },
    get location() {
      return e(o, a);
    },
    listen(E) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(kx, d),
        (l = E),
        () => {
          o.removeEventListener(kx, d), (l = null);
        }
      );
    },
    createHref(E) {
      return t(o, E);
    },
    createURL: m,
    encodeLocation(E) {
      let v = m(E);
      return { pathname: v.pathname, search: v.search, hash: v.hash };
    },
    push: f,
    replace: x,
    go(E) {
      return a.go(E);
    },
  };
  return g;
}
var Te;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Te || (Te = {}));
const zS = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function $S(e) {
  return e.index === !0;
}
function rf(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, i) => {
      let a = [...n, i],
        s = typeof o.id == "string" ? o.id : a.join("-");
      if (
        (ce(
          o.index !== !0 || !o.children,
          "Cannot specify children on an index route",
        ),
        ce(
          !r[s],
          'Found a route id collision on id "' +
            s +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        $S(o))
      ) {
        let l = je({}, o, t(o), { id: s });
        return (r[s] = l), l;
      } else {
        let l = je({}, o, t(o), { id: s, children: void 0 });
        return (
          (r[s] = l), o.children && (l.children = rf(o.children, t, a, r)), l
        );
      }
    })
  );
}
function Io(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Hn(t) : t,
    o = hi(r.pathname || "/", n);
  if (o == null) return null;
  let i = zy(e);
  US(i);
  let a = null;
  for (let s = 0; a == null && s < i.length; ++s) a = ZS(i[s], t6(o));
  return a;
}
function VS(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function zy(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, a, s) => {
    let l = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (ce(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = On([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (ce(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      zy(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: XS(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, a) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, a);
      else for (let l of $y(i.path)) o(i, a, l);
    }),
    t
  );
}
function $y(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let a = $y(r.join("/")),
    s = [];
  return (
    s.push(...a.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && s.push(...a),
    s.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function US(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : QS(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const HS = /^:\w+$/,
  WS = 3,
  GS = 2,
  KS = 1,
  qS = 10,
  YS = -2,
  Tx = (e) => e === "*";
function XS(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Tx) && (r += YS),
    t && (r += GS),
    n
      .filter((o) => !Tx(o))
      .reduce((o, i) => o + (HS.test(i) ? WS : i === "" ? KS : qS), r)
  );
}
function QS(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function ZS(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let s = n[a],
      l = a === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = JS(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        u,
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = s.route;
    i.push({
      params: r,
      pathname: On([o, c.pathname]),
      pathnameBase: i6(On([o, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (o = On([o, c.pathnameBase]));
  }
  return i;
}
function JS(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = e6(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: x } = c;
      if (f === "*") {
        let g = s[d] || "";
        a = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const m = s[d];
      return x && !m ? (u[f] = void 0) : (u[f] = n6(m || "", f)), u;
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function e6(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    oo(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (a, s, l) => (
            r.push({ paramName: s, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function t6(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      oo(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function n6(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      oo(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ")."),
      ),
      e
    );
  }
}
function hi(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function r6(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Hn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : o6(n, t)) : t,
    search: a6(r),
    hash: s6(o),
  };
}
function o6(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function sc(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Vy(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Kd(e, t) {
  let n = Vy(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function qd(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Hn(e))
    : ((o = je({}, e)),
      ce(
        !o.pathname || !o.pathname.includes("?"),
        sc("?", "pathname", "search", o),
      ),
      ce(
        !o.pathname || !o.pathname.includes("#"),
        sc("#", "pathname", "hash", o),
      ),
      ce(!o.search || !o.search.includes("#"), sc("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    a = i ? "/" : o.pathname,
    s;
  if (a == null) s = n;
  else {
    let d = t.length - 1;
    if (!r && a.startsWith("..")) {
      let f = a.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      o.pathname = f.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let l = r6(o, s),
    u = a && a !== "/" && a.endsWith("/"),
    c = (i || a === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const On = (e) => e.join("/").replace(/\/\/+/g, "/"),
  i6 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  a6 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  s6 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Yd {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Uy(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Hy = ["post", "put", "patch", "delete"],
  l6 = new Set(Hy),
  u6 = ["get", ...Hy],
  c6 = new Set(u6),
  f6 = new Set([301, 302, 303, 307, 308]),
  d6 = new Set([307, 308]),
  lc = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  h6 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ki = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Wy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  p6 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Gy = "remix-router-transitions";
function x6(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  ce(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let T = e.detectErrorBoundary;
    o = (L) => ({ hasErrorBoundary: T(L) });
  } else o = p6;
  let i = {},
    a = rf(e.routes, o, void 0, i),
    s,
    l = e.basename || "/",
    u = je(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future,
    ),
    c = null,
    d = new Set(),
    f = null,
    x = null,
    m = null,
    g = e.hydrationData != null,
    E = Io(a, e.history.location, l),
    v = null;
  if (E == null) {
    let T = Vt(404, { pathname: e.history.location.pathname }),
      { matches: L, route: $ } = $x(a);
    (E = L), (v = { [$.id]: T });
  }
  let h,
    p = E.some((T) => T.route.lazy),
    y = E.some((T) => T.route.loader);
  if (p) h = !1;
  else if (!y) h = !0;
  else if (u.v7_partialHydration) {
    let T = e.hydrationData ? e.hydrationData.loaderData : null,
      L = e.hydrationData ? e.hydrationData.errors : null;
    h = E.every(
      ($) =>
        $.route.loader &&
        $.route.loader.hydrate !== !0 &&
        ((T && T[$.route.id] !== void 0) || (L && L[$.route.id] !== void 0)),
    );
  } else h = e.hydrationData != null;
  let A,
    C = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: E,
      initialized: h,
      navigation: lc,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || v,
      fetchers: new Map(),
      blockers: new Map(),
    },
    S = Me.Pop,
    D = !1,
    b,
    B = !1,
    P = new Map(),
    N = null,
    O = !1,
    k = !1,
    M = [],
    G = [],
    R = new Map(),
    j = 0,
    U = -1,
    H = new Map(),
    F = new Set(),
    I = new Map(),
    V = new Map(),
    z = new Set(),
    re = new Map(),
    X = new Map(),
    he = !1;
  function ne() {
    if (
      ((c = e.history.listen((T) => {
        let { action: L, location: $, delta: K } = T;
        if (he) {
          he = !1;
          return;
        }
        oo(
          X.size === 0 || K != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let Y = Qa({
          currentLocation: C.location,
          nextLocation: $,
          historyAction: L,
        });
        if (Y && K != null) {
          (he = !0),
            e.history.go(K * -1),
            kr(Y, {
              state: "blocked",
              location: $,
              proceed() {
                kr(Y, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: $,
                }),
                  e.history.go(K);
              },
              reset() {
                let ae = new Map(C.blockers);
                ae.set(Y, ki), me({ blockers: ae });
              },
            });
          return;
        }
        return Mt(L, $);
      })),
      n)
    ) {
      _6(t, P);
      let T = () => B6(t, P);
      t.addEventListener("pagehide", T),
        (N = () => t.removeEventListener("pagehide", T));
    }
    return C.initialized || Mt(Me.Pop, C.location, { initialHydration: !0 }), A;
  }
  function Ue() {
    c && c(),
      N && N(),
      d.clear(),
      b && b.abort(),
      C.fetchers.forEach((T, L) => xn(L)),
      C.blockers.forEach((T, L) => yi(L));
  }
  function Ze(T) {
    return d.add(T), () => d.delete(T);
  }
  function me(T, L) {
    L === void 0 && (L = {}), (C = je({}, C, T));
    let $ = [],
      K = [];
    u.v7_fetcherPersist &&
      C.fetchers.forEach((Y, ae) => {
        Y.state === "idle" && (z.has(ae) ? K.push(ae) : $.push(ae));
      }),
      [...d].forEach((Y) =>
        Y(C, {
          deletedFetchers: K,
          unstable_viewTransitionOpts: L.viewTransitionOpts,
          unstable_flushSync: L.flushSync === !0,
        }),
      ),
      u.v7_fetcherPersist &&
        ($.forEach((Y) => C.fetchers.delete(Y)), K.forEach((Y) => xn(Y)));
  }
  function Oe(T, L, $) {
    var K, Y;
    let { flushSync: ae } = $ === void 0 ? {} : $,
      J =
        C.actionData != null &&
        C.navigation.formMethod != null &&
        an(C.navigation.formMethod) &&
        C.navigation.state === "loading" &&
        ((K = T.state) == null ? void 0 : K._isRedirect) !== !0,
      Z;
    L.actionData
      ? Object.keys(L.actionData).length > 0
        ? (Z = L.actionData)
        : (Z = null)
      : J
        ? (Z = C.actionData)
        : (Z = null);
    let Q = L.loaderData
        ? zx(C.loaderData, L.loaderData, L.matches || [], L.errors)
        : C.loaderData,
      ee = C.blockers;
    ee.size > 0 && ((ee = new Map(ee)), ee.forEach((ye, et) => ee.set(et, ki)));
    let Ee =
      D === !0 ||
      (C.navigation.formMethod != null &&
        an(C.navigation.formMethod) &&
        ((Y = T.state) == null ? void 0 : Y._isRedirect) !== !0);
    s && ((a = s), (s = void 0)),
      O ||
        S === Me.Pop ||
        (S === Me.Push
          ? e.history.push(T, T.state)
          : S === Me.Replace && e.history.replace(T, T.state));
    let ie;
    if (S === Me.Pop) {
      let ye = P.get(C.location.pathname);
      ye && ye.has(T.pathname)
        ? (ie = { currentLocation: C.location, nextLocation: T })
        : P.has(T.pathname) &&
          (ie = { currentLocation: T, nextLocation: C.location });
    } else if (B) {
      let ye = P.get(C.location.pathname);
      ye
        ? ye.add(T.pathname)
        : ((ye = new Set([T.pathname])), P.set(C.location.pathname, ye)),
        (ie = { currentLocation: C.location, nextLocation: T });
    }
    me(
      je({}, L, {
        actionData: Z,
        loaderData: Q,
        historyAction: S,
        location: T,
        initialized: !0,
        navigation: lc,
        revalidation: "idle",
        restoreScrollPosition: ts(T, L.matches || C.matches),
        preventScrollReset: Ee,
        blockers: ee,
      }),
      { viewTransitionOpts: ie, flushSync: ae === !0 },
    ),
      (S = Me.Pop),
      (D = !1),
      (B = !1),
      (O = !1),
      (k = !1),
      (M = []),
      (G = []);
  }
  async function gt(T, L) {
    if (typeof T == "number") {
      e.history.go(T);
      return;
    }
    let $ = of(
        C.location,
        C.matches,
        l,
        u.v7_prependBasename,
        T,
        u.v7_relativeSplatPath,
        L == null ? void 0 : L.fromRouteId,
        L == null ? void 0 : L.relative,
      ),
      {
        path: K,
        submission: Y,
        error: ae,
      } = Nx(u.v7_normalizeFormMethod, !1, $, L),
      J = C.location,
      Z = Pa(C.location, K, L && L.state);
    Z = je({}, Z, e.history.encodeLocation(Z));
    let Q = L && L.replace != null ? L.replace : void 0,
      ee = Me.Push;
    Q === !0
      ? (ee = Me.Replace)
      : Q === !1 ||
        (Y != null &&
          an(Y.formMethod) &&
          Y.formAction === C.location.pathname + C.location.search &&
          (ee = Me.Replace));
    let Ee =
        L && "preventScrollReset" in L ? L.preventScrollReset === !0 : void 0,
      ie = (L && L.unstable_flushSync) === !0,
      ye = Qa({ currentLocation: J, nextLocation: Z, historyAction: ee });
    if (ye) {
      kr(ye, {
        state: "blocked",
        location: Z,
        proceed() {
          kr(ye, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: Z,
          }),
            gt(T, L);
        },
        reset() {
          let et = new Map(C.blockers);
          et.set(ye, ki), me({ blockers: et });
        },
      });
      return;
    }
    return await Mt(ee, Z, {
      submission: Y,
      pendingError: ae,
      preventScrollReset: Ee,
      replace: L && L.replace,
      enableViewTransition: L && L.unstable_viewTransition,
      flushSync: ie,
    });
  }
  function ft() {
    if (
      (Lt(),
      me({ revalidation: "loading" }),
      C.navigation.state !== "submitting")
    ) {
      if (C.navigation.state === "idle") {
        Mt(C.historyAction, C.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Mt(S || C.historyAction, C.navigation.location, {
        overrideNavigation: C.navigation,
      });
    }
  }
  async function Mt(T, L, $) {
    b && b.abort(),
      (b = null),
      (S = T),
      (O = ($ && $.startUninterruptedRevalidation) === !0),
      es(C.location, C.matches),
      (D = ($ && $.preventScrollReset) === !0),
      (B = ($ && $.enableViewTransition) === !0);
    let K = s || a,
      Y = $ && $.overrideNavigation,
      ae = Io(K, L, l),
      J = ($ && $.flushSync) === !0;
    if (!ae) {
      let et = Vt(404, { pathname: L.pathname }),
        { matches: It, route: Ke } = $x(K);
      Ei(),
        Oe(
          L,
          { matches: It, loaderData: {}, errors: { [Ke.id]: et } },
          { flushSync: J },
        );
      return;
    }
    if (
      C.initialized &&
      !k &&
      E6(C.location, L) &&
      !($ && $.submission && an($.submission.formMethod))
    ) {
      Oe(L, { matches: ae }, { flushSync: J });
      return;
    }
    b = new AbortController();
    let Z = Ti(e.history, L, b.signal, $ && $.submission),
      Q,
      ee;
    if ($ && $.pendingError) ee = { [oa(ae).route.id]: $.pendingError };
    else if ($ && $.submission && an($.submission.formMethod)) {
      let et = await Pr(Z, L, $.submission, ae, {
        replace: $.replace,
        flushSync: J,
      });
      if (et.shortCircuited) return;
      (Q = et.pendingActionData),
        (ee = et.pendingActionError),
        (Y = uc(L, $.submission)),
        (J = !1),
        (Z = new Request(Z.url, { signal: Z.signal }));
    }
    let {
      shortCircuited: Ee,
      loaderData: ie,
      errors: ye,
    } = await vo(
      Z,
      L,
      ae,
      Y,
      $ && $.submission,
      $ && $.fetcherSubmission,
      $ && $.replace,
      $ && $.initialHydration === !0,
      J,
      Q,
      ee,
    );
    Ee ||
      ((b = null),
      Oe(
        L,
        je({ matches: ae }, Q ? { actionData: Q } : {}, {
          loaderData: ie,
          errors: ye,
        }),
      ));
  }
  async function Pr(T, L, $, K, Y) {
    Y === void 0 && (Y = {}), Lt();
    let ae = A6(L, $);
    me({ navigation: ae }, { flushSync: Y.flushSync === !0 });
    let J,
      Z = sf(K, L);
    if (!Z.route.action && !Z.route.lazy)
      J = {
        type: Te.error,
        error: Vt(405, {
          method: T.method,
          pathname: L.pathname,
          routeId: Z.route.id,
        }),
      };
    else if (
      ((J = await Ri("action", T, Z, K, i, o, l, u.v7_relativeSplatPath)),
      T.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Wr(J)) {
      let Q;
      return (
        Y && Y.replace != null
          ? (Q = Y.replace)
          : (Q = J.location === C.location.pathname + C.location.search),
        await Je(C, J, { submission: $, replace: Q }),
        { shortCircuited: !0 }
      );
    }
    if (zo(J)) {
      let Q = oa(K, Z.route.id);
      return (
        (Y && Y.replace) !== !0 && (S = Me.Push),
        { pendingActionData: {}, pendingActionError: { [Q.route.id]: J.error } }
      );
    }
    if (Hr(J)) throw Vt(400, { type: "defer-action" });
    return { pendingActionData: { [Z.route.id]: J.data } };
  }
  async function vo(T, L, $, K, Y, ae, J, Z, Q, ee, Ee) {
    let ie = K || uc(L, Y),
      ye = Y || ae || Hx(ie),
      et = s || a,
      [It, Ke] = jx(
        e.history,
        C,
        $,
        ye,
        L,
        u.v7_partialHydration && Z === !0,
        k,
        M,
        G,
        z,
        I,
        F,
        et,
        l,
        ee,
        Ee,
      );
    if (
      (Ei(
        (Ce) =>
          !($ && $.some((Be) => Be.route.id === Ce)) ||
          (It && It.some((Be) => Be.route.id === Ce)),
      ),
      (U = ++j),
      It.length === 0 && Ke.length === 0)
    ) {
      let Ce = Dn();
      return (
        Oe(
          L,
          je(
            { matches: $, loaderData: {}, errors: Ee || null },
            ee ? { actionData: ee } : {},
            Ce ? { fetchers: new Map(C.fetchers) } : {},
          ),
          { flushSync: Q },
        ),
        { shortCircuited: !0 }
      );
    }
    if (!O && (!u.v7_partialHydration || !Z)) {
      Ke.forEach((Be) => {
        let mn = C.fetchers.get(Be.key),
          os = Ni(void 0, mn ? mn.data : void 0);
        C.fetchers.set(Be.key, os);
      });
      let Ce = ee || C.actionData;
      me(
        je(
          { navigation: ie },
          Ce
            ? Object.keys(Ce).length === 0
              ? { actionData: null }
              : { actionData: Ce }
            : {},
          Ke.length > 0 ? { fetchers: new Map(C.fetchers) } : {},
        ),
        { flushSync: Q },
      );
    }
    Ke.forEach((Ce) => {
      R.has(Ce.key) && Qt(Ce.key),
        Ce.controller && R.set(Ce.key, Ce.controller);
    });
    let go = () => Ke.forEach((Ce) => Qt(Ce.key));
    b && b.signal.addEventListener("abort", go);
    let {
      results: gu,
      loaderResults: yo,
      fetcherResults: Kn,
    } = await dt(C.matches, $, It, Ke, T);
    if (T.signal.aborted) return { shortCircuited: !0 };
    b && b.signal.removeEventListener("abort", go),
      Ke.forEach((Ce) => R.delete(Ce.key));
    let Rr = Vx(gu);
    if (Rr) {
      if (Rr.idx >= It.length) {
        let Ce = Ke[Rr.idx - It.length].key;
        F.add(Ce);
      }
      return await Je(C, Rr.result, { replace: J }), { shortCircuited: !0 };
    }
    let { loaderData: yu, errors: Eu } = Ix(C, $, It, yo, Ee, Ke, Kn, re);
    re.forEach((Ce, Be) => {
      Ce.subscribe((mn) => {
        (mn || Ce.done) && re.delete(Be);
      });
    });
    let Cu = Dn(),
      Eo = Gn(U),
      rs = Cu || Eo || Ke.length > 0;
    return je(
      { loaderData: yu, errors: Eu },
      rs ? { fetchers: new Map(C.fetchers) } : {},
    );
  }
  function br(T, L, $, K) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    R.has(T) && Qt(T);
    let Y = (K && K.unstable_flushSync) === !0,
      ae = s || a,
      J = of(
        C.location,
        C.matches,
        l,
        u.v7_prependBasename,
        $,
        u.v7_relativeSplatPath,
        L,
        K == null ? void 0 : K.relative,
      ),
      Z = Io(ae, J, l);
    if (!Z) {
      Wn(T, L, Vt(404, { pathname: J }), { flushSync: Y });
      return;
    }
    let {
      path: Q,
      submission: ee,
      error: Ee,
    } = Nx(u.v7_normalizeFormMethod, !0, J, K);
    if (Ee) {
      Wn(T, L, Ee, { flushSync: Y });
      return;
    }
    let ie = sf(Z, Q);
    if (((D = (K && K.preventScrollReset) === !0), ee && an(ee.formMethod))) {
      vi(T, L, Q, ie, Z, Y, ee);
      return;
    }
    I.set(T, { routeId: L, path: Q }), Fr(T, L, Q, ie, Z, Y, ee);
  }
  async function vi(T, L, $, K, Y, ae, J) {
    if ((Lt(), I.delete(T), !K.route.action && !K.route.lazy)) {
      let Be = Vt(405, { method: J.formMethod, pathname: $, routeId: L });
      Wn(T, L, Be, { flushSync: ae });
      return;
    }
    let Z = C.fetchers.get(T);
    Pt(T, D6(J, Z), { flushSync: ae });
    let Q = new AbortController(),
      ee = Ti(e.history, $, Q.signal, J);
    R.set(T, Q);
    let Ee = j,
      ie = await Ri("action", ee, K, Y, i, o, l, u.v7_relativeSplatPath);
    if (ee.signal.aborted) {
      R.get(T) === Q && R.delete(T);
      return;
    }
    if (u.v7_fetcherPersist && z.has(T)) {
      if (Wr(ie) || zo(ie)) {
        Pt(T, Xn(void 0));
        return;
      }
    } else {
      if (Wr(ie))
        if ((R.delete(T), U > Ee)) {
          Pt(T, Xn(void 0));
          return;
        } else
          return F.add(T), Pt(T, Ni(J)), Je(C, ie, { fetcherSubmission: J });
      if (zo(ie)) {
        Wn(T, L, ie.error);
        return;
      }
    }
    if (Hr(ie)) throw Vt(400, { type: "defer-action" });
    let ye = C.navigation.location || C.location,
      et = Ti(e.history, ye, Q.signal),
      It = s || a,
      Ke =
        C.navigation.state !== "idle"
          ? Io(It, C.navigation.location, l)
          : C.matches;
    ce(Ke, "Didn't find any matches after fetcher action");
    let go = ++j;
    H.set(T, go);
    let gu = Ni(J, ie.data);
    C.fetchers.set(T, gu);
    let [yo, Kn] = jx(
      e.history,
      C,
      Ke,
      J,
      ye,
      !1,
      k,
      M,
      G,
      z,
      I,
      F,
      It,
      l,
      { [K.route.id]: ie.data },
      void 0,
    );
    Kn.filter((Be) => Be.key !== T).forEach((Be) => {
      let mn = Be.key,
        os = C.fetchers.get(mn),
        H2 = Ni(void 0, os ? os.data : void 0);
      C.fetchers.set(mn, H2),
        R.has(mn) && Qt(mn),
        Be.controller && R.set(mn, Be.controller);
    }),
      me({ fetchers: new Map(C.fetchers) });
    let Rr = () => Kn.forEach((Be) => Qt(Be.key));
    Q.signal.addEventListener("abort", Rr);
    let {
      results: yu,
      loaderResults: Eu,
      fetcherResults: Cu,
    } = await dt(C.matches, Ke, yo, Kn, et);
    if (Q.signal.aborted) return;
    Q.signal.removeEventListener("abort", Rr),
      H.delete(T),
      R.delete(T),
      Kn.forEach((Be) => R.delete(Be.key));
    let Eo = Vx(yu);
    if (Eo) {
      if (Eo.idx >= yo.length) {
        let Be = Kn[Eo.idx - yo.length].key;
        F.add(Be);
      }
      return Je(C, Eo.result);
    }
    let { loaderData: rs, errors: Ce } = Ix(
      C,
      C.matches,
      yo,
      Eu,
      void 0,
      Kn,
      Cu,
      re,
    );
    if (C.fetchers.has(T)) {
      let Be = Xn(ie.data);
      C.fetchers.set(T, Be);
    }
    Gn(go),
      C.navigation.state === "loading" && go > U
        ? (ce(S, "Expected pending action"),
          b && b.abort(),
          Oe(C.navigation.location, {
            matches: Ke,
            loaderData: rs,
            errors: Ce,
            fetchers: new Map(C.fetchers),
          }))
        : (me({
            errors: Ce,
            loaderData: zx(C.loaderData, rs, Ke, Ce),
            fetchers: new Map(C.fetchers),
          }),
          (k = !1));
  }
  async function Fr(T, L, $, K, Y, ae, J) {
    let Z = C.fetchers.get(T);
    Pt(T, Ni(J, Z ? Z.data : void 0), { flushSync: ae });
    let Q = new AbortController(),
      ee = Ti(e.history, $, Q.signal);
    R.set(T, Q);
    let Ee = j,
      ie = await Ri("loader", ee, K, Y, i, o, l, u.v7_relativeSplatPath);
    if (
      (Hr(ie) && (ie = (await Yy(ie, ee.signal, !0)) || ie),
      R.get(T) === Q && R.delete(T),
      !ee.signal.aborted)
    ) {
      if (z.has(T)) {
        Pt(T, Xn(void 0));
        return;
      }
      if (Wr(ie))
        if (U > Ee) {
          Pt(T, Xn(void 0));
          return;
        } else {
          F.add(T), await Je(C, ie);
          return;
        }
      if (zo(ie)) {
        Wn(T, L, ie.error);
        return;
      }
      ce(!Hr(ie), "Unhandled fetcher deferred data"), Pt(T, Xn(ie.data));
    }
  }
  async function Je(T, L, $) {
    let {
      submission: K,
      fetcherSubmission: Y,
      replace: ae,
    } = $ === void 0 ? {} : $;
    L.revalidate && (k = !0);
    let J = Pa(T.location, L.location, { _isRedirect: !0 });
    if ((ce(J, "Expected a location on the redirect navigation"), n)) {
      let ye = !1;
      if (L.reloadDocument) ye = !0;
      else if (Wy.test(L.location)) {
        const et = e.history.createURL(L.location);
        ye = et.origin !== t.location.origin || hi(et.pathname, l) == null;
      }
      if (ye) {
        ae ? t.location.replace(L.location) : t.location.assign(L.location);
        return;
      }
    }
    b = null;
    let Z = ae === !0 ? Me.Replace : Me.Push,
      { formMethod: Q, formAction: ee, formEncType: Ee } = T.navigation;
    !K && !Y && Q && ee && Ee && (K = Hx(T.navigation));
    let ie = K || Y;
    if (d6.has(L.status) && ie && an(ie.formMethod))
      await Mt(Z, J, {
        submission: je({}, ie, { formAction: L.location }),
        preventScrollReset: D,
      });
    else {
      let ye = uc(J, K);
      await Mt(Z, J, {
        overrideNavigation: ye,
        fetcherSubmission: Y,
        preventScrollReset: D,
      });
    }
  }
  async function dt(T, L, $, K, Y) {
    let ae = await Promise.all([
        ...$.map((Q) => Ri("loader", Y, Q, L, i, o, l, u.v7_relativeSplatPath)),
        ...K.map((Q) =>
          Q.matches && Q.match && Q.controller
            ? Ri(
                "loader",
                Ti(e.history, Q.path, Q.controller.signal),
                Q.match,
                Q.matches,
                i,
                o,
                l,
                u.v7_relativeSplatPath,
              )
            : { type: Te.error, error: Vt(404, { pathname: Q.path }) },
        ),
      ]),
      J = ae.slice(0, $.length),
      Z = ae.slice($.length);
    return (
      await Promise.all([
        Ux(
          T,
          $,
          J,
          J.map(() => Y.signal),
          !1,
          C.loaderData,
        ),
        Ux(
          T,
          K.map((Q) => Q.match),
          Z,
          K.map((Q) => (Q.controller ? Q.controller.signal : null)),
          !0,
        ),
      ]),
      { results: ae, loaderResults: J, fetcherResults: Z }
    );
  }
  function Lt() {
    (k = !0),
      M.push(...Ei()),
      I.forEach((T, L) => {
        R.has(L) && (G.push(L), Qt(L));
      });
  }
  function Pt(T, L, $) {
    $ === void 0 && ($ = {}),
      C.fetchers.set(T, L),
      me(
        { fetchers: new Map(C.fetchers) },
        { flushSync: ($ && $.flushSync) === !0 },
      );
  }
  function Wn(T, L, $, K) {
    K === void 0 && (K = {});
    let Y = oa(C.matches, L);
    xn(T),
      me(
        { errors: { [Y.route.id]: $ }, fetchers: new Map(C.fetchers) },
        { flushSync: (K && K.flushSync) === !0 },
      );
  }
  function An(T) {
    return (
      u.v7_fetcherPersist &&
        (V.set(T, (V.get(T) || 0) + 1), z.has(T) && z.delete(T)),
      C.fetchers.get(T) || h6
    );
  }
  function xn(T) {
    let L = C.fetchers.get(T);
    R.has(T) && !(L && L.state === "loading" && H.has(T)) && Qt(T),
      I.delete(T),
      H.delete(T),
      F.delete(T),
      z.delete(T),
      C.fetchers.delete(T);
  }
  function mu(T) {
    if (u.v7_fetcherPersist) {
      let L = (V.get(T) || 0) - 1;
      L <= 0 ? (V.delete(T), z.add(T)) : V.set(T, L);
    } else xn(T);
    me({ fetchers: new Map(C.fetchers) });
  }
  function Qt(T) {
    let L = R.get(T);
    ce(L, "Expected fetch controller: " + T), L.abort(), R.delete(T);
  }
  function gi(T) {
    for (let L of T) {
      let $ = An(L),
        K = Xn($.data);
      C.fetchers.set(L, K);
    }
  }
  function Dn() {
    let T = [],
      L = !1;
    for (let $ of F) {
      let K = C.fetchers.get($);
      ce(K, "Expected fetcher: " + $),
        K.state === "loading" && (F.delete($), T.push($), (L = !0));
    }
    return gi(T), L;
  }
  function Gn(T) {
    let L = [];
    for (let [$, K] of H)
      if (K < T) {
        let Y = C.fetchers.get($);
        ce(Y, "Expected fetcher: " + $),
          Y.state === "loading" && (Qt($), H.delete($), L.push($));
      }
    return gi(L), L.length > 0;
  }
  function vu(T, L) {
    let $ = C.blockers.get(T) || ki;
    return X.get(T) !== L && X.set(T, L), $;
  }
  function yi(T) {
    C.blockers.delete(T), X.delete(T);
  }
  function kr(T, L) {
    let $ = C.blockers.get(T) || ki;
    ce(
      ($.state === "unblocked" && L.state === "blocked") ||
        ($.state === "blocked" && L.state === "blocked") ||
        ($.state === "blocked" && L.state === "proceeding") ||
        ($.state === "blocked" && L.state === "unblocked") ||
        ($.state === "proceeding" && L.state === "unblocked"),
      "Invalid blocker state transition: " + $.state + " -> " + L.state,
    );
    let K = new Map(C.blockers);
    K.set(T, L), me({ blockers: K });
  }
  function Qa(T) {
    let { currentLocation: L, nextLocation: $, historyAction: K } = T;
    if (X.size === 0) return;
    X.size > 1 && oo(!1, "A router only supports one blocker at a time");
    let Y = Array.from(X.entries()),
      [ae, J] = Y[Y.length - 1],
      Z = C.blockers.get(ae);
    if (
      !(Z && Z.state === "proceeding") &&
      J({ currentLocation: L, nextLocation: $, historyAction: K })
    )
      return ae;
  }
  function Ei(T) {
    let L = [];
    return (
      re.forEach(($, K) => {
        (!T || T(K)) && ($.cancel(), L.push(K), re.delete(K));
      }),
      L
    );
  }
  function Za(T, L, $) {
    if (((f = T), (m = L), (x = $ || null), !g && C.navigation === lc)) {
      g = !0;
      let K = ts(C.location, C.matches);
      K != null && me({ restoreScrollPosition: K });
    }
    return () => {
      (f = null), (m = null), (x = null);
    };
  }
  function Ja(T, L) {
    return (
      (x &&
        x(
          T,
          L.map((K) => VS(K, C.loaderData)),
        )) ||
      T.key
    );
  }
  function es(T, L) {
    if (f && m) {
      let $ = Ja(T, L);
      f[$] = m();
    }
  }
  function ts(T, L) {
    if (f) {
      let $ = Ja(T, L),
        K = f[$];
      if (typeof K == "number") return K;
    }
    return null;
  }
  function ns(T) {
    (i = {}), (s = rf(T, o, void 0, i));
  }
  return (
    (A = {
      get basename() {
        return l;
      },
      get future() {
        return u;
      },
      get state() {
        return C;
      },
      get routes() {
        return a;
      },
      get window() {
        return t;
      },
      initialize: ne,
      subscribe: Ze,
      enableScrollRestoration: Za,
      navigate: gt,
      fetch: br,
      revalidate: ft,
      createHref: (T) => e.history.createHref(T),
      encodeLocation: (T) => e.history.encodeLocation(T),
      getFetcher: An,
      deleteFetcher: mu,
      dispose: Ue,
      getBlocker: vu,
      deleteBlocker: yi,
      _internalFetchControllers: R,
      _internalActiveDeferreds: re,
      _internalSetRoutes: ns,
    }),
    A
  );
}
function m6(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function of(e, t, n, r, o, i, a, s) {
  let l, u;
  if (a) {
    l = [];
    for (let d of t)
      if ((l.push(d), d.route.id === a)) {
        u = d;
        break;
      }
  } else (l = t), (u = t[t.length - 1]);
  let c = qd(o || ".", Kd(l, i), hi(e.pathname, n) || e.pathname, s === "path");
  return (
    o == null && ((c.search = e.search), (c.hash = e.hash)),
    (o == null || o === "" || o === ".") &&
      u &&
      u.route.index &&
      !Xd(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : On([n, c.pathname])),
    io(c)
  );
}
function Nx(e, t, n, r) {
  if (!r || !m6(r)) return { path: n };
  if (r.formMethod && !S6(r.formMethod))
    return { path: n, error: Vt(405, { method: r.formMethod }) };
  let o = () => ({ path: n, error: Vt(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    a = e ? i.toUpperCase() : i.toLowerCase(),
    s = qy(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!an(a)) return o();
      let f =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((x, m) => {
                let [g, E] = m;
                return (
                  "" +
                  x +
                  g +
                  "=" +
                  E +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: a,
          formAction: s,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: f,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!an(a)) return o();
      try {
        let f = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: a,
            formAction: s,
            formEncType: r.formEncType,
            formData: void 0,
            json: f,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  ce(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let l, u;
  if (r.formData) (l = af(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (l = af(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (l = r.body), (u = Lx(l));
  else if (r.body == null) (l = new URLSearchParams()), (u = new FormData());
  else
    try {
      (l = new URLSearchParams(r.body)), (u = Lx(l));
    } catch {
      return o();
    }
  let c = {
    formMethod: a,
    formAction: s,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (an(c.formMethod)) return { path: n, submission: c };
  let d = Hn(n);
  return (
    t && d.search && Xd(d.search) && l.append("index", ""),
    (d.search = "?" + l),
    { path: io(d), submission: c }
  );
}
function v6(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function jx(e, t, n, r, o, i, a, s, l, u, c, d, f, x, m, g) {
  let E = g ? Object.values(g)[0] : m ? Object.values(m)[0] : void 0,
    v = e.createURL(t.location),
    h = e.createURL(o),
    p = g ? Object.keys(g)[0] : void 0,
    A = v6(n, p).filter((S, D) => {
      let { route: b } = S;
      if (b.lazy) return !0;
      if (b.loader == null) return !1;
      if (i)
        return b.loader.hydrate
          ? !0
          : t.loaderData[b.id] === void 0 &&
              (!t.errors || t.errors[b.id] === void 0);
      if (g6(t.loaderData, t.matches[D], S) || s.some((N) => N === S.route.id))
        return !0;
      let B = t.matches[D],
        P = S;
      return Ox(
        S,
        je(
          {
            currentUrl: v,
            currentParams: B.params,
            nextUrl: h,
            nextParams: P.params,
          },
          r,
          {
            actionResult: E,
            defaultShouldRevalidate:
              a ||
              v.pathname + v.search === h.pathname + h.search ||
              v.search !== h.search ||
              Ky(B, P),
          },
        ),
      );
    }),
    C = [];
  return (
    c.forEach((S, D) => {
      if (i || !n.some((O) => O.route.id === S.routeId) || u.has(D)) return;
      let b = Io(f, S.path, x);
      if (!b) {
        C.push({
          key: D,
          routeId: S.routeId,
          path: S.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let B = t.fetchers.get(D),
        P = sf(b, S.path),
        N = !1;
      d.has(D)
        ? (N = !1)
        : l.includes(D)
          ? (N = !0)
          : B && B.state !== "idle" && B.data === void 0
            ? (N = a)
            : (N = Ox(
                P,
                je(
                  {
                    currentUrl: v,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: h,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  { actionResult: E, defaultShouldRevalidate: a },
                ),
              )),
        N &&
          C.push({
            key: D,
            routeId: S.routeId,
            path: S.path,
            matches: b,
            match: P,
            controller: new AbortController(),
          });
    }),
    [A, C]
  );
}
function g6(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function Ky(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Ox(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Mx(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  ce(o, "No route found in manifest");
  let i = {};
  for (let a in r) {
    let l = o[a] !== void 0 && a !== "hasErrorBoundary";
    oo(
      !l,
      'Route "' +
        o.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.'),
    ),
      !l && !zS.has(a) && (i[a] = r[a]);
  }
  Object.assign(o, i), Object.assign(o, je({}, t(o), { lazy: void 0 }));
}
async function Ri(e, t, n, r, o, i, a, s, l) {
  l === void 0 && (l = {});
  let u,
    c,
    d,
    f = (g) => {
      let E,
        v = new Promise((h, p) => (E = p));
      return (
        (d = () => E()),
        t.signal.addEventListener("abort", d),
        Promise.race([
          g({ request: t, params: n.params, context: l.requestContext }),
          v,
        ])
      );
    };
  try {
    let g = n.route[e];
    if (n.route.lazy)
      if (g) {
        let E,
          v = await Promise.all([
            f(g).catch((h) => {
              E = h;
            }),
            Mx(n.route, i, o),
          ]);
        if (E) throw E;
        c = v[0];
      } else if ((await Mx(n.route, i, o), (g = n.route[e]), g)) c = await f(g);
      else if (e === "action") {
        let E = new URL(t.url),
          v = E.pathname + E.search;
        throw Vt(405, { method: t.method, pathname: v, routeId: n.route.id });
      } else return { type: Te.data, data: void 0 };
    else if (g) c = await f(g);
    else {
      let E = new URL(t.url),
        v = E.pathname + E.search;
      throw Vt(404, { pathname: v });
    }
    ce(
      c !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (g) {
    (u = Te.error), (c = g);
  } finally {
    d && t.signal.removeEventListener("abort", d);
  }
  if (w6(c)) {
    let g = c.status;
    if (f6.has(g)) {
      let v = c.headers.get("Location");
      if (
        (ce(
          v,
          "Redirects returned/thrown from loaders/actions must have a Location header",
        ),
        !Wy.test(v))
      )
        v = of(new URL(t.url), r.slice(0, r.indexOf(n) + 1), a, !0, v, s);
      else if (!l.isStaticRequest) {
        let h = new URL(t.url),
          p = v.startsWith("//") ? new URL(h.protocol + v) : new URL(v),
          y = hi(p.pathname, a) != null;
        p.origin === h.origin && y && (v = p.pathname + p.search + p.hash);
      }
      if (l.isStaticRequest) throw (c.headers.set("Location", v), c);
      return {
        type: Te.redirect,
        status: g,
        location: v,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: c.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (l.isRouteRequest)
      throw { type: u === Te.error ? Te.error : Te.data, response: c };
    let E;
    try {
      let v = c.headers.get("Content-Type");
      v && /\bapplication\/json\b/.test(v)
        ? (E = await c.json())
        : (E = await c.text());
    } catch (v) {
      return { type: Te.error, error: v };
    }
    return u === Te.error
      ? { type: u, error: new Yd(g, c.statusText, E), headers: c.headers }
      : { type: Te.data, data: E, statusCode: c.status, headers: c.headers };
  }
  if (u === Te.error) return { type: u, error: c };
  if (C6(c)) {
    var x, m;
    return {
      type: Te.deferred,
      deferredData: c,
      statusCode: (x = c.init) == null ? void 0 : x.status,
      headers:
        ((m = c.init) == null ? void 0 : m.headers) &&
        new Headers(c.init.headers),
    };
  }
  return { type: Te.data, data: c };
}
function Ti(e, t, n, r) {
  let o = e.createURL(qy(t)).toString(),
    i = { signal: n };
  if (r && an(r.formMethod)) {
    let { formMethod: a, formEncType: s } = r;
    (i.method = a.toUpperCase()),
      s === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": s })),
          (i.body = JSON.stringify(r.json)))
        : s === "text/plain"
          ? (i.body = r.text)
          : s === "application/x-www-form-urlencoded" && r.formData
            ? (i.body = af(r.formData))
            : (i.body = r.formData);
  }
  return new Request(o, i);
}
function af(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Lx(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function y6(e, t, n, r, o) {
  let i = {},
    a = null,
    s,
    l = !1,
    u = {};
  return (
    n.forEach((c, d) => {
      let f = t[d].route.id;
      if (
        (ce(!Wr(c), "Cannot handle redirect results in processLoaderData"),
        zo(c))
      ) {
        let x = oa(e, f),
          m = c.error;
        r && ((m = Object.values(r)[0]), (r = void 0)),
          (a = a || {}),
          a[x.route.id] == null && (a[x.route.id] = m),
          (i[f] = void 0),
          l || ((l = !0), (s = Uy(c.error) ? c.error.status : 500)),
          c.headers && (u[f] = c.headers);
      } else
        Hr(c)
          ? (o.set(f, c.deferredData), (i[f] = c.deferredData.data))
          : (i[f] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !l &&
            (s = c.statusCode),
          c.headers && (u[f] = c.headers);
    }),
    r && ((a = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: s || 200, loaderHeaders: u }
  );
}
function Ix(e, t, n, r, o, i, a, s) {
  let { loaderData: l, errors: u } = y6(t, n, r, o, s);
  for (let c = 0; c < i.length; c++) {
    let { key: d, match: f, controller: x } = i[c];
    ce(
      a !== void 0 && a[c] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let m = a[c];
    if (!(x && x.signal.aborted))
      if (zo(m)) {
        let g = oa(e.matches, f == null ? void 0 : f.route.id);
        (u && u[g.route.id]) || (u = je({}, u, { [g.route.id]: m.error })),
          e.fetchers.delete(d);
      } else if (Wr(m)) ce(!1, "Unhandled fetcher revalidation redirect");
      else if (Hr(m)) ce(!1, "Unhandled fetcher deferred data");
      else {
        let g = Xn(m.data);
        e.fetchers.set(d, g);
      }
  }
  return { loaderData: l, errors: u };
}
function zx(e, t, n, r) {
  let o = je({}, t);
  for (let i of n) {
    let a = i.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (o[a] = t[a])
        : e[a] !== void 0 && i.route.loader && (o[a] = e[a]),
      r && r.hasOwnProperty(a))
    )
      break;
  }
  return o;
}
function oa(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function $x(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Vt(e, t) {
  let { pathname: n, routeId: r, method: o, type: i } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    s = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        o && n && r
          ? (s =
              "You made a " +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
            ? (s = "defer() is not supported in actions")
            : i === "invalid-body" && (s = "Unable to encode submission body"))
      : e === 403
        ? ((a = "Forbidden"),
          (s = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((a = "Not Found"), (s = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((a = "Method Not Allowed"),
            o && n && r
              ? (s =
                  "You made a " +
                  o.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')),
    new Yd(e || 500, a, new Error(s), !0)
  );
}
function Vx(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Wr(n)) return { result: n, idx: t };
  }
}
function qy(e) {
  let t = typeof e == "string" ? Hn(e) : e;
  return io(je({}, t, { hash: "" }));
}
function E6(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function Hr(e) {
  return e.type === Te.deferred;
}
function zo(e) {
  return e.type === Te.error;
}
function Wr(e) {
  return (e && e.type) === Te.redirect;
}
function C6(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function w6(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function S6(e) {
  return c6.has(e.toLowerCase());
}
function an(e) {
  return l6.has(e.toLowerCase());
}
async function Ux(e, t, n, r, o, i) {
  for (let a = 0; a < n.length; a++) {
    let s = n[a],
      l = t[a];
    if (!l) continue;
    let u = e.find((d) => d.route.id === l.route.id),
      c = u != null && !Ky(u, l) && (i && i[l.route.id]) !== void 0;
    if (Hr(s) && (o || c)) {
      let d = r[a];
      ce(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Yy(s, d, o).then((f) => {
          f && (n[a] = f || n[a]);
        });
    }
  }
}
async function Yy(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Te.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: Te.error, error: o };
      }
    return { type: Te.data, data: e.deferredData.data };
  }
}
function Xd(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function sf(e, t) {
  let n = typeof t == "string" ? Hn(t).search : t.search;
  if (e[e.length - 1].route.index && Xd(n || "")) return e[e.length - 1];
  let r = Vy(e);
  return r[r.length - 1];
}
function Hx(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: o,
    formData: i,
    json: a,
  } = e;
  if (!(!t || !n || !r)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: a,
        text: void 0,
      };
  }
}
function uc(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function A6(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Ni(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function D6(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Xn(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function _6(e, t) {
  try {
    let n = e.sessionStorage.getItem(Gy);
    if (n) {
      let r = JSON.parse(n);
      for (let [o, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(o, new Set(i || []));
    }
  } catch {}
}
function B6(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, o] of t) n[r] = [...o];
    try {
      e.sessionStorage.setItem(Gy, JSON.stringify(n));
    } catch (r) {
      oo(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          r +
          ").",
      );
    }
  }
}
/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ba() {
  return (
    (ba = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ba.apply(this, arguments)
  );
}
const ou = _.createContext(null),
  Xy = _.createContext(null),
  ho = _.createContext(null),
  iu = _.createContext(null),
  Dr = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Qy = _.createContext(null);
function P6(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Wa() || ce(!1);
  let { basename: r, navigator: o } = _.useContext(ho),
    { hash: i, pathname: a, search: s } = Jy(e, { relative: n }),
    l = a;
  return (
    r !== "/" && (l = a === "/" ? r : On([r, a])),
    o.createHref({ pathname: l, search: s, hash: i })
  );
}
function Wa() {
  return _.useContext(iu) != null;
}
function Ga() {
  return Wa() || ce(!1), _.useContext(iu).location;
}
function Zy(e) {
  _.useContext(ho).static || _.useLayoutEffect(e);
}
function Ka() {
  let { isDataRoute: e } = _.useContext(Dr);
  return e ? V6() : b6();
}
function b6() {
  Wa() || ce(!1);
  let e = _.useContext(ou),
    { basename: t, future: n, navigator: r } = _.useContext(ho),
    { matches: o } = _.useContext(Dr),
    { pathname: i } = Ga(),
    a = JSON.stringify(Kd(o, n.v7_relativeSplatPath)),
    s = _.useRef(!1);
  return (
    Zy(() => {
      s.current = !0;
    }),
    _.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !s.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = qd(u, JSON.parse(a), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : On([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, a, i, e],
    )
  );
}
const F6 = _.createContext(null);
function k6(e) {
  let t = _.useContext(Dr).outlet;
  return t && _.createElement(F6.Provider, { value: e }, t);
}
function Jy(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = _.useContext(ho),
    { matches: o } = _.useContext(Dr),
    { pathname: i } = Ga(),
    a = JSON.stringify(Kd(o, r.v7_relativeSplatPath));
  return _.useMemo(() => qd(e, JSON.parse(a), i, n === "path"), [e, a, i, n]);
}
function R6(e, t, n, r) {
  Wa() || ce(!1);
  let { navigator: o } = _.useContext(ho),
    { matches: i } = _.useContext(Dr),
    a = i[i.length - 1],
    s = a ? a.params : {};
  a && a.pathname;
  let l = a ? a.pathnameBase : "/";
  a && a.route;
  let u = Ga(),
    c;
  if (t) {
    var d;
    let E = typeof t == "string" ? Hn(t) : t;
    l === "/" || ((d = E.pathname) != null && d.startsWith(l)) || ce(!1),
      (c = E);
  } else c = u;
  let f = c.pathname || "/",
    x = l === "/" ? f : f.slice(l.length) || "/",
    m = Io(e, { pathname: x }),
    g = M6(
      m &&
        m.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, s, E.params),
            pathname: On([
              l,
              o.encodeLocation
                ? o.encodeLocation(E.pathname).pathname
                : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === "/"
                ? l
                : On([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(E.pathnameBase).pathname
                      : E.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && g
    ? _.createElement(
        iu.Provider,
        {
          value: {
            location: ba(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: Me.Pop,
          },
        },
        g,
      )
    : g;
}
function T6() {
  let e = $6(),
    t = Uy(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return _.createElement(
    _.Fragment,
    null,
    _.createElement("h2", null, "Unexpected Application Error!"),
    _.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? _.createElement("pre", { style: o }, n) : null,
    null,
  );
}
const N6 = _.createElement(T6, null);
class j6 extends _.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? _.createElement(
          Dr.Provider,
          { value: this.props.routeContext },
          _.createElement(Qy.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function O6(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = _.useContext(ou);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(Dr.Provider, { value: t }, r)
  );
}
function M6(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let a = e,
    s = (o = n) == null ? void 0 : o.errors;
  if (s != null) {
    let c = a.findIndex(
      (d) => d.route.id && (s == null ? void 0 : s[d.route.id]),
    );
    c >= 0 || ce(!1), (a = a.slice(0, Math.min(a.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < a.length; c++) {
      let d = a[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: x } = n,
          m =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!x || x[d.route.id] === void 0);
        if (d.route.lazy || m) {
          (l = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((c, d, f) => {
    let x,
      m = !1,
      g = null,
      E = null;
    n &&
      ((x = s && d.route.id ? s[d.route.id] : void 0),
      (g = d.route.errorElement || N6),
      l &&
        (u < 0 && f === 0
          ? (U6("route-fallback", !1), (m = !0), (E = null))
          : u === f &&
            ((m = !0), (E = d.route.hydrateFallbackElement || null))));
    let v = t.concat(a.slice(0, f + 1)),
      h = () => {
        let p;
        return (
          x
            ? (p = g)
            : m
              ? (p = E)
              : d.route.Component
                ? (p = _.createElement(d.route.Component, null))
                : d.route.element
                  ? (p = d.route.element)
                  : (p = c),
          _.createElement(O6, {
            match: d,
            routeContext: { outlet: c, matches: v, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? _.createElement(j6, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: x,
          children: h(),
          routeContext: { outlet: null, matches: v, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var e2 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(e2 || {}),
  Bl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Bl || {});
function L6(e) {
  let t = _.useContext(ou);
  return t || ce(!1), t;
}
function I6(e) {
  let t = _.useContext(Xy);
  return t || ce(!1), t;
}
function z6(e) {
  let t = _.useContext(Dr);
  return t || ce(!1), t;
}
function t2(e) {
  let t = z6(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ce(!1), n.route.id;
}
function $6() {
  var e;
  let t = _.useContext(Qy),
    n = I6(Bl.UseRouteError),
    r = t2(Bl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function V6() {
  let { router: e } = L6(e2.UseNavigateStable),
    t = t2(Bl.UseNavigateStable),
    n = _.useRef(!1);
  return (
    Zy(() => {
      n.current = !0;
    }),
    _.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, ba({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
const Wx = {};
function U6(e, t, n) {
  !t && !Wx[e] && (Wx[e] = !0);
}
function H6(e) {
  return k6(e.context);
}
function W6(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Me.Pop,
    navigator: i,
    static: a = !1,
    future: s,
  } = e;
  Wa() && ce(!1);
  let l = t.replace(/^\/*/, "/"),
    u = _.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: a,
        future: ba({ v7_relativeSplatPath: !1 }, s),
      }),
      [l, s, i, a],
    );
  typeof r == "string" && (r = Hn(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: x = null,
      key: m = "default",
    } = r,
    g = _.useMemo(() => {
      let E = hi(c, l);
      return E == null
        ? null
        : {
            location: { pathname: E, search: d, hash: f, state: x, key: m },
            navigationType: o,
          };
    }, [l, c, d, f, x, m, o]);
  return g == null
    ? null
    : _.createElement(
        ho.Provider,
        { value: u },
        _.createElement(iu.Provider, { children: n, value: g }),
      );
}
new Promise(() => {});
function G6(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: _.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: _.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: _.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fa() {
  return (
    (Fa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fa.apply(this, arguments)
  );
}
function K6(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function q6(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Y6(e, t) {
  return e.button === 0 && (!t || t === "_self") && !q6(e);
}
const X6 = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
  "unstable_viewTransition",
];
function Q6(e, t) {
  return x6({
    basename: t == null ? void 0 : t.basename,
    future: Fa({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: MS({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Z6(),
    routes: e,
    mapRouteProperties: G6,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function Z6() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Fa({}, t, { errors: J6(t.errors) })), t;
}
function J6(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      n[r] = new Yd(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let i = window[o.__subType];
        if (typeof i == "function")
          try {
            let a = new i(o.message);
            (a.stack = ""), (n[r] = a);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(o.message);
        (i.stack = ""), (n[r] = i);
      }
    } else n[r] = o;
  return n;
}
const e5 = _.createContext({ isTransitioning: !1 }),
  t5 = _.createContext(new Map()),
  n5 = "startTransition",
  Gx = a4[n5],
  r5 = "flushSync",
  Kx = v8[r5];
function o5(e) {
  Gx ? Gx(e) : e();
}
function ji(e) {
  Kx ? Kx(e) : e();
}
class i5 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function a5(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [o, i] = _.useState(n.state),
    [a, s] = _.useState(),
    [l, u] = _.useState({ isTransitioning: !1 }),
    [c, d] = _.useState(),
    [f, x] = _.useState(),
    [m, g] = _.useState(),
    E = _.useRef(new Map()),
    { v7_startTransition: v } = r || {},
    h = _.useCallback(
      (S) => {
        v ? o5(S) : S();
      },
      [v],
    ),
    p = _.useCallback(
      (S, D) => {
        let {
          deletedFetchers: b,
          unstable_flushSync: B,
          unstable_viewTransitionOpts: P,
        } = D;
        b.forEach((O) => E.current.delete(O)),
          S.fetchers.forEach((O, k) => {
            O.data !== void 0 && E.current.set(k, O.data);
          });
        let N =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!P || N) {
          B ? ji(() => i(S)) : h(() => i(S));
          return;
        }
        if (B) {
          ji(() => {
            f && (c && c.resolve(), f.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: P.currentLocation,
                nextLocation: P.nextLocation,
              });
          });
          let O = n.window.document.startViewTransition(() => {
            ji(() => i(S));
          });
          O.finished.finally(() => {
            ji(() => {
              d(void 0), x(void 0), s(void 0), u({ isTransitioning: !1 });
            });
          }),
            ji(() => x(O));
          return;
        }
        f
          ? (c && c.resolve(),
            f.skipTransition(),
            g({
              state: S,
              currentLocation: P.currentLocation,
              nextLocation: P.nextLocation,
            }))
          : (s(S),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: P.currentLocation,
              nextLocation: P.nextLocation,
            }));
      },
      [n.window, f, c, E, h],
    );
  _.useLayoutEffect(() => n.subscribe(p), [n, p]),
    _.useEffect(() => {
      l.isTransitioning && !l.flushSync && d(new i5());
    }, [l]),
    _.useEffect(() => {
      if (c && a && n.window) {
        let S = a,
          D = c.promise,
          b = n.window.document.startViewTransition(async () => {
            h(() => i(S)), await D;
          });
        b.finished.finally(() => {
          d(void 0), x(void 0), s(void 0), u({ isTransitioning: !1 });
        }),
          x(b);
      }
    }, [h, a, c, n.window]),
    _.useEffect(() => {
      c && a && o.location.key === a.location.key && c.resolve();
    }, [c, f, o.location, a]),
    _.useEffect(() => {
      !l.isTransitioning &&
        m &&
        (s(m.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: m.currentLocation,
          nextLocation: m.nextLocation,
        }),
        g(void 0));
    }, [l.isTransitioning, m]),
    _.useEffect(() => {}, []);
  let y = _.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (S) => n.navigate(S),
        push: (S, D, b) =>
          n.navigate(S, {
            state: D,
            preventScrollReset: b == null ? void 0 : b.preventScrollReset,
          }),
        replace: (S, D, b) =>
          n.navigate(S, {
            replace: !0,
            state: D,
            preventScrollReset: b == null ? void 0 : b.preventScrollReset,
          }),
      }),
      [n],
    ),
    A = n.basename || "/",
    C = _.useMemo(
      () => ({ router: n, navigator: y, static: !1, basename: A }),
      [n, y, A],
    );
  return _.createElement(
    _.Fragment,
    null,
    _.createElement(
      ou.Provider,
      { value: C },
      _.createElement(
        Xy.Provider,
        { value: o },
        _.createElement(
          t5.Provider,
          { value: E.current },
          _.createElement(
            e5.Provider,
            { value: l },
            _.createElement(
              W6,
              {
                basename: A,
                location: o.location,
                navigationType: o.historyAction,
                navigator: y,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              o.initialized || n.future.v7_partialHydration
                ? _.createElement(s5, {
                    routes: n.routes,
                    future: n.future,
                    state: o,
                  })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function s5(e) {
  let { routes: t, future: n, state: r } = e;
  return R6(t, void 0, r, n);
}
const l5 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  u5 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ao = _.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: a,
        state: s,
        target: l,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      f = K6(t, X6),
      { basename: x } = _.useContext(ho),
      m,
      g = !1;
    if (typeof u == "string" && u5.test(u) && ((m = u), l5))
      try {
        let p = new URL(window.location.href),
          y = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u),
          A = hi(y.pathname, x);
        y.origin === p.origin && A != null
          ? (u = A + y.search + y.hash)
          : (g = !0);
      } catch {}
    let E = P6(u, { relative: o }),
      v = c5(u, {
        replace: a,
        state: s,
        target: l,
        preventScrollReset: c,
        relative: o,
        unstable_viewTransition: d,
      });
    function h(p) {
      r && r(p), p.defaultPrevented || v(p);
    }
    return _.createElement(
      "a",
      Fa({}, f, { href: m || E, onClick: g || i ? r : h, ref: n, target: l }),
    );
  });
var qx;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(qx || (qx = {}));
var Yx;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Yx || (Yx = {}));
function c5(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: a,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    l = Ka(),
    u = Ga(),
    c = Jy(e, { relative: a });
  return _.useCallback(
    (d) => {
      if (Y6(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : io(u) === io(c);
        l(e, {
          replace: f,
          state: o,
          preventScrollReset: i,
          relative: a,
          unstable_viewTransition: s,
        });
      }
    },
    [u, l, c, r, o, n, e, i, a, s],
  );
}
function nn({ route: e, text: t }) {
  const n = Ga();
  return w.jsx(ao, {
    to: e,
    className:
      "group text-center flex  mx-auto xl:m-4 my-4 w-48 min-w-max rounded-xl py-2 justify-center  text-text hover:bg-primary-500 hover:shadow-md transition-all duration-300 font-semibold " +
      (n.pathname == e || n.pathname.includes(e)
        ? "shadow-xl bg-primary-800 text-text"
        : "bg-primary"),
    children: w.jsx("p", {
      className: "align-middle h-full text-center",
      children: t,
    }),
  });
}
function _n() {
  return w.jsx(Ar, {
    children: w.jsx("div", {
      className: "bg-background text-text mb-auto text-center h-full flex",
      children: w.jsxs("div", {
        className: "m-auto align-middle justify-center h-full flex flex-col",
        children: [
          w.jsx("p", {
            className: "text-center text-8xl my-3 font-bold",
            children: "404",
          }),
          w.jsx("p", {
            className: "text-2xl md:text-4xl font-semibold",
            children: "This page does not exist! (yet...)",
          }),
          w.jsx("div", {
            className: "mx-auto",
            children: w.jsx(nn, { text: "Home", route: "/" }),
          }),
        ],
      }),
    }),
  });
}
function f5() {
  return (
    (document.documentElement.style.overflowY = "hidden"),
    w.jsx(Ar, {
      children: w.jsx("div", {
        className: "bg-transparent text-text h-full flex ",
        children: w.jsxs("div", {
          className: "justify-center w-full align-middle m-auto z-10",
          children: [
            w.jsx("p", {
              className: "text-4xl font-semibold text-center my-4",
              children: "Game Modes",
            }),
            w.jsxs("div", {
              className: "mx-auto justify-center flex flex-wrap",
              children: [
                w.jsx(nn, { route: "/play/guess", text: "Guess the Number" }),
                w.jsx(nn, { route: "/play/pi", text: "Digits of PI" }),
              ],
            }),
          ],
        }),
      }),
    })
  );
}
var lf = { exports: {} },
  so = {},
  n2 = { exports: {} },
  d5 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  h5 = d5,
  p5 = h5;
function r2() {}
function o2() {}
o2.resetWarningCache = r2;
var x5 = function () {
  function e(r, o, i, a, s, l) {
    if (l !== p5) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: o2,
    resetWarningCache: r2,
  };
  return (n.PropTypes = n), n;
};
n2.exports = x5();
var Qd = n2.exports;
const xe = ja(Qd);
var uf = { exports: {} },
  hn = {},
  cf = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = c);
  /*!
   * Adapted from jQuery UI core
   *
   * http://jqueryui.com
   *
   * Copyright 2014 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/category/ui-core/
   */ var n = "none",
    r = "contents",
    o = /input|select|textarea|button|object|iframe/;
  function i(d, f) {
    return (
      f.getPropertyValue("overflow") !== "visible" ||
      (d.scrollWidth <= 0 && d.scrollHeight <= 0)
    );
  }
  function a(d) {
    var f = d.offsetWidth <= 0 && d.offsetHeight <= 0;
    if (f && !d.innerHTML) return !0;
    try {
      var x = window.getComputedStyle(d),
        m = x.getPropertyValue("display");
      return f ? m !== r && i(d, x) : m === n;
    } catch {
      return console.warn("Failed to inspect element style"), !1;
    }
  }
  function s(d) {
    for (
      var f = d, x = d.getRootNode && d.getRootNode();
      f && f !== document.body;

    ) {
      if ((x && f === x && (f = x.host.parentNode), a(f))) return !1;
      f = f.parentNode;
    }
    return !0;
  }
  function l(d, f) {
    var x = d.nodeName.toLowerCase(),
      m = (o.test(x) && !d.disabled) || (x === "a" && d.href) || f;
    return m && s(d);
  }
  function u(d) {
    var f = d.getAttribute("tabindex");
    f === null && (f = void 0);
    var x = isNaN(f);
    return (x || f >= 0) && l(d, !x);
  }
  function c(d) {
    var f = [].slice.call(d.querySelectorAll("*"), 0).reduce(function (x, m) {
      return x.concat(m.shadowRoot ? c(m.shadowRoot) : [m]);
    }, []);
    return f.filter(u);
  }
  e.exports = t.default;
})(cf, cf.exports);
var i2 = cf.exports;
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.resetState = y5;
hn.log = E5;
hn.handleBlur = ka;
hn.handleFocus = Ra;
hn.markForFocusLater = C5;
hn.returnFocus = w5;
hn.popWithoutFocus = S5;
hn.setupScopedFocus = A5;
hn.teardownScopedFocus = D5;
var m5 = i2,
  v5 = g5(m5);
function g5(e) {
  return e && e.__esModule ? e : { default: e };
}
var oi = [],
  $o = null,
  ff = !1;
function y5() {
  oi = [];
}
function E5() {}
function ka() {
  ff = !0;
}
function Ra() {
  if (ff) {
    if (((ff = !1), !$o)) return;
    setTimeout(function () {
      if (!$o.contains(document.activeElement)) {
        var e = (0, v5.default)($o)[0] || $o;
        e.focus();
      }
    }, 0);
  }
}
function C5() {
  oi.push(document.activeElement);
}
function w5() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
    t = null;
  try {
    oi.length !== 0 && ((t = oi.pop()), t.focus({ preventScroll: e }));
    return;
  } catch {
    console.warn(
      [
        "You tried to return focus to",
        t,
        "but it is not in the DOM anymore",
      ].join(" "),
    );
  }
}
function S5() {
  oi.length > 0 && oi.pop();
}
function A5(e) {
  ($o = e),
    window.addEventListener
      ? (window.addEventListener("blur", ka, !1),
        document.addEventListener("focus", Ra, !0))
      : (window.attachEvent("onBlur", ka), document.attachEvent("onFocus", Ra));
}
function D5() {
  ($o = null),
    window.addEventListener
      ? (window.removeEventListener("blur", ka),
        document.removeEventListener("focus", Ra))
      : (window.detachEvent("onBlur", ka), document.detachEvent("onFocus", Ra));
}
var df = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
  var n = i2,
    r = o(n);
  function o(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function i() {
    var s =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    return s.activeElement.shadowRoot
      ? i(s.activeElement.shadowRoot)
      : s.activeElement;
  }
  function a(s, l) {
    var u = (0, r.default)(s);
    if (!u.length) {
      l.preventDefault();
      return;
    }
    var c = void 0,
      d = l.shiftKey,
      f = u[0],
      x = u[u.length - 1],
      m = i();
    if (s === m) {
      if (!d) return;
      c = x;
    }
    if ((x === m && !d && (c = f), f === m && d && (c = x), c)) {
      l.preventDefault(), c.focus();
      return;
    }
    var g = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),
      E =
        g != null &&
        g[1] != "Chrome" &&
        /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
    if (E) {
      var v = u.indexOf(m);
      if ((v > -1 && (v += d ? -1 : 1), (c = u[v]), typeof c > "u")) {
        l.preventDefault(), (c = d ? x : f), c.focus();
        return;
      }
      l.preventDefault(), c.focus();
    }
  }
  e.exports = t.default;
})(df, df.exports);
var _5 = df.exports,
  pn = {},
  B5 = function () {},
  P5 = B5,
  cn = {},
  a2 = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/ (function (e) {
  (function () {
    var t = !!(
        typeof window < "u" &&
        window.document &&
        window.document.createElement
      ),
      n = {
        canUseDOM: t,
        canUseWorkers: typeof Worker < "u",
        canUseEventListeners:
          t && !!(window.addEventListener || window.attachEvent),
        canUseViewport: t && !!window.screen,
      };
    e.exports ? (e.exports = n) : (window.ExecutionEnvironment = n);
  })();
})(a2);
var b5 = a2.exports;
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.canUseDOM = cn.SafeNodeList = cn.SafeHTMLCollection = void 0;
var F5 = b5,
  k5 = R5(F5);
function R5(e) {
  return e && e.__esModule ? e : { default: e };
}
var au = k5.default,
  T5 = au.canUseDOM ? window.HTMLElement : {};
cn.SafeHTMLCollection = au.canUseDOM ? window.HTMLCollection : {};
cn.SafeNodeList = au.canUseDOM ? window.NodeList : {};
cn.canUseDOM = au.canUseDOM;
cn.default = T5;
Object.defineProperty(pn, "__esModule", { value: !0 });
pn.resetState = L5;
pn.log = I5;
pn.assertNodeList = s2;
pn.setElement = z5;
pn.validateElement = Zd;
pn.hide = $5;
pn.show = V5;
pn.documentNotReadyOrSSRTesting = U5;
var N5 = P5,
  j5 = M5(N5),
  O5 = cn;
function M5(e) {
  return e && e.__esModule ? e : { default: e };
}
var Ut = null;
function L5() {
  Ut &&
    (Ut.removeAttribute
      ? Ut.removeAttribute("aria-hidden")
      : Ut.length != null
        ? Ut.forEach(function (e) {
            return e.removeAttribute("aria-hidden");
          })
        : document.querySelectorAll(Ut).forEach(function (e) {
            return e.removeAttribute("aria-hidden");
          })),
    (Ut = null);
}
function I5() {}
function s2(e, t) {
  if (!e || !e.length)
    throw new Error(
      "react-modal: No elements were found for selector " + t + ".",
    );
}
function z5(e) {
  var t = e;
  if (typeof t == "string" && O5.canUseDOM) {
    var n = document.querySelectorAll(t);
    s2(n, t), (t = n);
  }
  return (Ut = t || Ut), Ut;
}
function Zd(e) {
  var t = e || Ut;
  return t
    ? Array.isArray(t) || t instanceof HTMLCollection || t instanceof NodeList
      ? t
      : [t]
    : ((0, j5.default)(
        !1,
        [
          "react-modal: App element is not defined.",
          "Please use `Modal.setAppElement(el)` or set `appElement={el}`.",
          "This is needed so screen readers don't see main content",
          "when modal is opened. It is not recommended, but you can opt-out",
          "by setting `ariaHideApp={false}`.",
        ].join(" "),
      ),
      []);
}
function $5(e) {
  var t = !0,
    n = !1,
    r = void 0;
  try {
    for (
      var o = Zd(e)[Symbol.iterator](), i;
      !(t = (i = o.next()).done);
      t = !0
    ) {
      var a = i.value;
      a.setAttribute("aria-hidden", "true");
    }
  } catch (s) {
    (n = !0), (r = s);
  } finally {
    try {
      !t && o.return && o.return();
    } finally {
      if (n) throw r;
    }
  }
}
function V5(e) {
  var t = !0,
    n = !1,
    r = void 0;
  try {
    for (
      var o = Zd(e)[Symbol.iterator](), i;
      !(t = (i = o.next()).done);
      t = !0
    ) {
      var a = i.value;
      a.removeAttribute("aria-hidden");
    }
  } catch (s) {
    (n = !0), (r = s);
  } finally {
    try {
      !t && o.return && o.return();
    } finally {
      if (n) throw r;
    }
  }
}
function U5() {
  Ut = null;
}
var pi = {};
Object.defineProperty(pi, "__esModule", { value: !0 });
pi.resetState = H5;
pi.log = W5;
var ia = {},
  aa = {};
function Xx(e, t) {
  e.classList.remove(t);
}
function H5() {
  var e = document.getElementsByTagName("html")[0];
  for (var t in ia) Xx(e, ia[t]);
  var n = document.body;
  for (var r in aa) Xx(n, aa[r]);
  (ia = {}), (aa = {});
}
function W5() {}
var G5 = function (t, n) {
    return t[n] || (t[n] = 0), (t[n] += 1), n;
  },
  K5 = function (t, n) {
    return t[n] && (t[n] -= 1), n;
  },
  q5 = function (t, n, r) {
    r.forEach(function (o) {
      G5(n, o), t.add(o);
    });
  },
  Y5 = function (t, n, r) {
    r.forEach(function (o) {
      K5(n, o), n[o] === 0 && t.remove(o);
    });
  };
pi.add = function (t, n) {
  return q5(
    t.classList,
    t.nodeName.toLowerCase() == "html" ? ia : aa,
    n.split(" "),
  );
};
pi.remove = function (t, n) {
  return Y5(
    t.classList,
    t.nodeName.toLowerCase() == "html" ? ia : aa,
    n.split(" "),
  );
};
var xi = {};
Object.defineProperty(xi, "__esModule", { value: !0 });
xi.log = Q5;
xi.resetState = Z5;
function X5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var l2 = function e() {
    var t = this;
    X5(this, e),
      (this.register = function (n) {
        t.openInstances.indexOf(n) === -1 &&
          (t.openInstances.push(n), t.emit("register"));
      }),
      (this.deregister = function (n) {
        var r = t.openInstances.indexOf(n);
        r !== -1 && (t.openInstances.splice(r, 1), t.emit("deregister"));
      }),
      (this.subscribe = function (n) {
        t.subscribers.push(n);
      }),
      (this.emit = function (n) {
        t.subscribers.forEach(function (r) {
          return r(n, t.openInstances.slice());
        });
      }),
      (this.openInstances = []),
      (this.subscribers = []);
  },
  Pl = new l2();
function Q5() {
  console.log("portalOpenInstances ----------"),
    console.log(Pl.openInstances.length),
    Pl.openInstances.forEach(function (e) {
      return console.log(e);
    }),
    console.log("end portalOpenInstances ----------");
}
function Z5() {
  Pl = new l2();
}
xi.default = Pl;
var Jd = {};
Object.defineProperty(Jd, "__esModule", { value: !0 });
Jd.resetState = nA;
Jd.log = rA;
var J5 = xi,
  eA = tA(J5);
function tA(e) {
  return e && e.__esModule ? e : { default: e };
}
var at = void 0,
  rn = void 0,
  Xr = [];
function nA() {
  for (var e = [at, rn], t = 0; t < e.length; t++) {
    var n = e[t];
    n && n.parentNode && n.parentNode.removeChild(n);
  }
  (at = rn = null), (Xr = []);
}
function rA() {
  console.log("bodyTrap ----------"), console.log(Xr.length);
  for (var e = [at, rn], t = 0; t < e.length; t++) {
    var n = e[t],
      r = n || {};
    console.log(r.nodeName, r.className, r.id);
  }
  console.log("edn bodyTrap ----------");
}
function Qx() {
  Xr.length !== 0 && Xr[Xr.length - 1].focusContent();
}
function oA(e, t) {
  !at &&
    !rn &&
    ((at = document.createElement("div")),
    at.setAttribute("data-react-modal-body-trap", ""),
    (at.style.position = "absolute"),
    (at.style.opacity = "0"),
    at.setAttribute("tabindex", "0"),
    at.addEventListener("focus", Qx),
    (rn = at.cloneNode()),
    rn.addEventListener("focus", Qx)),
    (Xr = t),
    Xr.length > 0
      ? (document.body.firstChild !== at &&
          document.body.insertBefore(at, document.body.firstChild),
        document.body.lastChild !== rn && document.body.appendChild(rn))
      : (at.parentElement && at.parentElement.removeChild(at),
        rn.parentElement && rn.parentElement.removeChild(rn));
}
eA.default.subscribe(oA);
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n =
      Object.assign ||
      function (k) {
        for (var M = 1; M < arguments.length; M++) {
          var G = arguments[M];
          for (var R in G)
            Object.prototype.hasOwnProperty.call(G, R) && (k[R] = G[R]);
        }
        return k;
      },
    r =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (k) {
            return typeof k;
          }
        : function (k) {
            return k &&
              typeof Symbol == "function" &&
              k.constructor === Symbol &&
              k !== Symbol.prototype
              ? "symbol"
              : typeof k;
          },
    o = (function () {
      function k(M, G) {
        for (var R = 0; R < G.length; R++) {
          var j = G[R];
          (j.enumerable = j.enumerable || !1),
            (j.configurable = !0),
            "value" in j && (j.writable = !0),
            Object.defineProperty(M, j.key, j);
        }
      }
      return function (M, G, R) {
        return G && k(M.prototype, G), R && k(M, R), M;
      };
    })(),
    i = _,
    a = Qd,
    s = A(a),
    l = hn,
    u = y(l),
    c = _5,
    d = A(c),
    f = pn,
    x = y(f),
    m = pi,
    g = y(m),
    E = cn,
    v = A(E),
    h = xi,
    p = A(h);
  function y(k) {
    if (k && k.__esModule) return k;
    var M = {};
    if (k != null)
      for (var G in k)
        Object.prototype.hasOwnProperty.call(k, G) && (M[G] = k[G]);
    return (M.default = k), M;
  }
  function A(k) {
    return k && k.__esModule ? k : { default: k };
  }
  function C(k, M) {
    if (!(k instanceof M))
      throw new TypeError("Cannot call a class as a function");
  }
  function S(k, M) {
    if (!k)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return M && (typeof M == "object" || typeof M == "function") ? M : k;
  }
  function D(k, M) {
    if (typeof M != "function" && M !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof M,
      );
    (k.prototype = Object.create(M && M.prototype, {
      constructor: { value: k, enumerable: !1, writable: !0, configurable: !0 },
    })),
      M &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(k, M)
          : (k.__proto__ = M));
  }
  var b = { overlay: "ReactModal__Overlay", content: "ReactModal__Content" },
    B = function (M) {
      return M.code === "Tab" || M.keyCode === 9;
    },
    P = function (M) {
      return M.code === "Escape" || M.keyCode === 27;
    },
    N = 0,
    O = (function (k) {
      D(M, k);
      function M(G) {
        C(this, M);
        var R = S(
          this,
          (M.__proto__ || Object.getPrototypeOf(M)).call(this, G),
        );
        return (
          (R.setOverlayRef = function (j) {
            (R.overlay = j), R.props.overlayRef && R.props.overlayRef(j);
          }),
          (R.setContentRef = function (j) {
            (R.content = j), R.props.contentRef && R.props.contentRef(j);
          }),
          (R.afterClose = function () {
            var j = R.props,
              U = j.appElement,
              H = j.ariaHideApp,
              F = j.htmlOpenClassName,
              I = j.bodyOpenClassName,
              V = j.parentSelector,
              z = (V && V().ownerDocument) || document;
            I && g.remove(z.body, I),
              F && g.remove(z.getElementsByTagName("html")[0], F),
              H && N > 0 && ((N -= 1), N === 0 && x.show(U)),
              R.props.shouldFocusAfterRender &&
                (R.props.shouldReturnFocusAfterClose
                  ? (u.returnFocus(R.props.preventScroll),
                    u.teardownScopedFocus())
                  : u.popWithoutFocus()),
              R.props.onAfterClose && R.props.onAfterClose(),
              p.default.deregister(R);
          }),
          (R.open = function () {
            R.beforeOpen(),
              R.state.afterOpen && R.state.beforeClose
                ? (clearTimeout(R.closeTimer), R.setState({ beforeClose: !1 }))
                : (R.props.shouldFocusAfterRender &&
                    (u.setupScopedFocus(R.node), u.markForFocusLater()),
                  R.setState({ isOpen: !0 }, function () {
                    R.openAnimationFrame = requestAnimationFrame(function () {
                      R.setState({ afterOpen: !0 }),
                        R.props.isOpen &&
                          R.props.onAfterOpen &&
                          R.props.onAfterOpen({
                            overlayEl: R.overlay,
                            contentEl: R.content,
                          });
                    });
                  }));
          }),
          (R.close = function () {
            R.props.closeTimeoutMS > 0
              ? R.closeWithTimeout()
              : R.closeWithoutTimeout();
          }),
          (R.focusContent = function () {
            return (
              R.content &&
              !R.contentHasFocus() &&
              R.content.focus({ preventScroll: !0 })
            );
          }),
          (R.closeWithTimeout = function () {
            var j = Date.now() + R.props.closeTimeoutMS;
            R.setState({ beforeClose: !0, closesAt: j }, function () {
              R.closeTimer = setTimeout(
                R.closeWithoutTimeout,
                R.state.closesAt - Date.now(),
              );
            });
          }),
          (R.closeWithoutTimeout = function () {
            R.setState(
              { beforeClose: !1, isOpen: !1, afterOpen: !1, closesAt: null },
              R.afterClose,
            );
          }),
          (R.handleKeyDown = function (j) {
            B(j) && (0, d.default)(R.content, j),
              R.props.shouldCloseOnEsc &&
                P(j) &&
                (j.stopPropagation(), R.requestClose(j));
          }),
          (R.handleOverlayOnClick = function (j) {
            R.shouldClose === null && (R.shouldClose = !0),
              R.shouldClose &&
                R.props.shouldCloseOnOverlayClick &&
                (R.ownerHandlesClose() ? R.requestClose(j) : R.focusContent()),
              (R.shouldClose = null);
          }),
          (R.handleContentOnMouseUp = function () {
            R.shouldClose = !1;
          }),
          (R.handleOverlayOnMouseDown = function (j) {
            !R.props.shouldCloseOnOverlayClick &&
              j.target == R.overlay &&
              j.preventDefault();
          }),
          (R.handleContentOnClick = function () {
            R.shouldClose = !1;
          }),
          (R.handleContentOnMouseDown = function () {
            R.shouldClose = !1;
          }),
          (R.requestClose = function (j) {
            return R.ownerHandlesClose() && R.props.onRequestClose(j);
          }),
          (R.ownerHandlesClose = function () {
            return R.props.onRequestClose;
          }),
          (R.shouldBeClosed = function () {
            return !R.state.isOpen && !R.state.beforeClose;
          }),
          (R.contentHasFocus = function () {
            return (
              document.activeElement === R.content ||
              R.content.contains(document.activeElement)
            );
          }),
          (R.buildClassName = function (j, U) {
            var H =
                (typeof U > "u" ? "undefined" : r(U)) === "object"
                  ? U
                  : {
                      base: b[j],
                      afterOpen: b[j] + "--after-open",
                      beforeClose: b[j] + "--before-close",
                    },
              F = H.base;
            return (
              R.state.afterOpen && (F = F + " " + H.afterOpen),
              R.state.beforeClose && (F = F + " " + H.beforeClose),
              typeof U == "string" && U ? F + " " + U : F
            );
          }),
          (R.attributesFromObject = function (j, U) {
            return Object.keys(U).reduce(function (H, F) {
              return (H[j + "-" + F] = U[F]), H;
            }, {});
          }),
          (R.state = { afterOpen: !1, beforeClose: !1 }),
          (R.shouldClose = null),
          (R.moveFromContentToOverlay = null),
          R
        );
      }
      return (
        o(M, [
          {
            key: "componentDidMount",
            value: function () {
              this.props.isOpen && this.open();
            },
          },
          {
            key: "componentDidUpdate",
            value: function (R, j) {
              this.props.isOpen && !R.isOpen
                ? this.open()
                : !this.props.isOpen && R.isOpen && this.close(),
                this.props.shouldFocusAfterRender &&
                  this.state.isOpen &&
                  !j.isOpen &&
                  this.focusContent();
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.state.isOpen && this.afterClose(),
                clearTimeout(this.closeTimer),
                cancelAnimationFrame(this.openAnimationFrame);
            },
          },
          {
            key: "beforeOpen",
            value: function () {
              var R = this.props,
                j = R.appElement,
                U = R.ariaHideApp,
                H = R.htmlOpenClassName,
                F = R.bodyOpenClassName,
                I = R.parentSelector,
                V = (I && I().ownerDocument) || document;
              F && g.add(V.body, F),
                H && g.add(V.getElementsByTagName("html")[0], H),
                U && ((N += 1), x.hide(j)),
                p.default.register(this);
            },
          },
          {
            key: "render",
            value: function () {
              var R = this.props,
                j = R.id,
                U = R.className,
                H = R.overlayClassName,
                F = R.defaultStyles,
                I = R.children,
                V = U ? {} : F.content,
                z = H ? {} : F.overlay;
              if (this.shouldBeClosed()) return null;
              var re = {
                  ref: this.setOverlayRef,
                  className: this.buildClassName("overlay", H),
                  style: n({}, z, this.props.style.overlay),
                  onClick: this.handleOverlayOnClick,
                  onMouseDown: this.handleOverlayOnMouseDown,
                },
                X = n(
                  {
                    id: j,
                    ref: this.setContentRef,
                    style: n({}, V, this.props.style.content),
                    className: this.buildClassName("content", U),
                    tabIndex: "-1",
                    onKeyDown: this.handleKeyDown,
                    onMouseDown: this.handleContentOnMouseDown,
                    onMouseUp: this.handleContentOnMouseUp,
                    onClick: this.handleContentOnClick,
                    role: this.props.role,
                    "aria-label": this.props.contentLabel,
                  },
                  this.attributesFromObject(
                    "aria",
                    n({ modal: !0 }, this.props.aria),
                  ),
                  this.attributesFromObject("data", this.props.data || {}),
                  { "data-testid": this.props.testId },
                ),
                he = this.props.contentElement(X, I);
              return this.props.overlayElement(re, he);
            },
          },
        ]),
        M
      );
    })(i.Component);
  (O.defaultProps = { style: { overlay: {}, content: {} }, defaultStyles: {} }),
    (O.propTypes = {
      isOpen: s.default.bool.isRequired,
      defaultStyles: s.default.shape({
        content: s.default.object,
        overlay: s.default.object,
      }),
      style: s.default.shape({
        content: s.default.object,
        overlay: s.default.object,
      }),
      className: s.default.oneOfType([s.default.string, s.default.object]),
      overlayClassName: s.default.oneOfType([
        s.default.string,
        s.default.object,
      ]),
      parentSelector: s.default.func,
      bodyOpenClassName: s.default.string,
      htmlOpenClassName: s.default.string,
      ariaHideApp: s.default.bool,
      appElement: s.default.oneOfType([
        s.default.instanceOf(v.default),
        s.default.instanceOf(E.SafeHTMLCollection),
        s.default.instanceOf(E.SafeNodeList),
        s.default.arrayOf(s.default.instanceOf(v.default)),
      ]),
      onAfterOpen: s.default.func,
      onAfterClose: s.default.func,
      onRequestClose: s.default.func,
      closeTimeoutMS: s.default.number,
      shouldFocusAfterRender: s.default.bool,
      shouldCloseOnOverlayClick: s.default.bool,
      shouldReturnFocusAfterClose: s.default.bool,
      preventScroll: s.default.bool,
      role: s.default.string,
      contentLabel: s.default.string,
      aria: s.default.object,
      data: s.default.object,
      children: s.default.node,
      shouldCloseOnEsc: s.default.bool,
      overlayRef: s.default.func,
      contentRef: s.default.func,
      id: s.default.string,
      overlayElement: s.default.func,
      contentElement: s.default.func,
      testId: s.default.string,
    }),
    (t.default = O),
    (e.exports = t.default);
})(uf, uf.exports);
var iA = uf.exports;
function u2() {
  var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
  e != null && this.setState(e);
}
function c2(e) {
  function t(n) {
    var r = this.constructor.getDerivedStateFromProps(e, n);
    return r ?? null;
  }
  this.setState(t.bind(this));
}
function f2(e, t) {
  try {
    var n = this.props,
      r = this.state;
    (this.props = e),
      (this.state = t),
      (this.__reactInternalSnapshotFlag = !0),
      (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
  } finally {
    (this.props = n), (this.state = r);
  }
}
u2.__suppressDeprecationWarning = !0;
c2.__suppressDeprecationWarning = !0;
f2.__suppressDeprecationWarning = !0;
function aA(e) {
  var t = e.prototype;
  if (!t || !t.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (
    typeof e.getDerivedStateFromProps != "function" &&
    typeof t.getSnapshotBeforeUpdate != "function"
  )
    return e;
  var n = null,
    r = null,
    o = null;
  if (
    (typeof t.componentWillMount == "function"
      ? (n = "componentWillMount")
      : typeof t.UNSAFE_componentWillMount == "function" &&
        (n = "UNSAFE_componentWillMount"),
    typeof t.componentWillReceiveProps == "function"
      ? (r = "componentWillReceiveProps")
      : typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        (r = "UNSAFE_componentWillReceiveProps"),
    typeof t.componentWillUpdate == "function"
      ? (o = "componentWillUpdate")
      : typeof t.UNSAFE_componentWillUpdate == "function" &&
        (o = "UNSAFE_componentWillUpdate"),
    n !== null || r !== null || o !== null)
  ) {
    var i = e.displayName || e.name,
      a =
        typeof e.getDerivedStateFromProps == "function"
          ? "getDerivedStateFromProps()"
          : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` +
        i +
        " uses " +
        a +
        " but also contains the following legacy lifecycles:" +
        (n !== null
          ? `
  ` + n
          : "") +
        (r !== null
          ? `
  ` + r
          : "") +
        (o !== null
          ? `
  ` + o
          : "") +
        `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`,
    );
  }
  if (
    (typeof e.getDerivedStateFromProps == "function" &&
      ((t.componentWillMount = u2), (t.componentWillReceiveProps = c2)),
    typeof t.getSnapshotBeforeUpdate == "function")
  ) {
    if (typeof t.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype",
      );
    t.componentWillUpdate = f2;
    var s = t.componentDidUpdate;
    t.componentDidUpdate = function (u, c, d) {
      var f = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : d;
      s.call(this, u, c, f);
    };
  }
  return e;
}
const sA = Object.freeze(
    Object.defineProperty(
      { __proto__: null, polyfill: aA },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  lA = ov(sA);
Object.defineProperty(so, "__esModule", { value: !0 });
so.bodyOpenClassName = so.portalClassName = void 0;
var Zx =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  uA = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  d2 = _,
  bl = qa(d2),
  cA = Yl,
  Fl = qa(cA),
  fA = Qd,
  oe = qa(fA),
  dA = iA,
  Jx = qa(dA),
  hA = pn,
  pA = mA(hA),
  ar = cn,
  em = qa(ar),
  xA = lA;
function mA(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null)
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return (t.default = e), t;
}
function qa(e) {
  return e && e.__esModule ? e : { default: e };
}
function vA(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tm(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function gA(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t,
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var yA = (so.portalClassName = "ReactModalPortal"),
  EA = (so.bodyOpenClassName = "ReactModal__Body--open"),
  Ir = ar.canUseDOM && Fl.default.createPortal !== void 0,
  nm = function (t) {
    return document.createElement(t);
  },
  rm = function () {
    return Ir
      ? Fl.default.createPortal
      : Fl.default.unstable_renderSubtreeIntoContainer;
  };
function _s(e) {
  return e();
}
var Ya = (function (e) {
  gA(t, e);
  function t() {
    var n, r, o, i;
    vA(this, t);
    for (var a = arguments.length, s = Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    return (
      (i =
        ((r =
          ((o = tm(
            this,
            (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              n,
              [this].concat(s),
            ),
          )),
          o)),
        (o.removePortal = function () {
          !Ir && Fl.default.unmountComponentAtNode(o.node);
          var u = _s(o.props.parentSelector);
          u && u.contains(o.node)
            ? u.removeChild(o.node)
            : console.warn(
                'React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.',
              );
        }),
        (o.portalRef = function (u) {
          o.portal = u;
        }),
        (o.renderPortal = function (u) {
          var c = rm(),
            d = c(
              o,
              bl.default.createElement(
                Jx.default,
                Zx({ defaultStyles: t.defaultStyles }, u),
              ),
              o.node,
            );
          o.portalRef(d);
        }),
        r)),
      tm(o, i)
    );
  }
  return (
    uA(
      t,
      [
        {
          key: "componentDidMount",
          value: function () {
            if (ar.canUseDOM) {
              Ir || (this.node = nm("div")),
                (this.node.className = this.props.portalClassName);
              var r = _s(this.props.parentSelector);
              r.appendChild(this.node), !Ir && this.renderPortal(this.props);
            }
          },
        },
        {
          key: "getSnapshotBeforeUpdate",
          value: function (r) {
            var o = _s(r.parentSelector),
              i = _s(this.props.parentSelector);
            return { prevParent: o, nextParent: i };
          },
        },
        {
          key: "componentDidUpdate",
          value: function (r, o, i) {
            if (ar.canUseDOM) {
              var a = this.props,
                s = a.isOpen,
                l = a.portalClassName;
              r.portalClassName !== l && (this.node.className = l);
              var u = i.prevParent,
                c = i.nextParent;
              c !== u && (u.removeChild(this.node), c.appendChild(this.node)),
                !(!r.isOpen && !s) && !Ir && this.renderPortal(this.props);
            }
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            if (!(!ar.canUseDOM || !this.node || !this.portal)) {
              var r = this.portal.state,
                o = Date.now(),
                i =
                  r.isOpen &&
                  this.props.closeTimeoutMS &&
                  (r.closesAt || o + this.props.closeTimeoutMS);
              i
                ? (r.beforeClose || this.portal.closeWithTimeout(),
                  setTimeout(this.removePortal, i - o))
                : this.removePortal();
            }
          },
        },
        {
          key: "render",
          value: function () {
            if (!ar.canUseDOM || !Ir) return null;
            !this.node && Ir && (this.node = nm("div"));
            var r = rm();
            return r(
              bl.default.createElement(
                Jx.default,
                Zx(
                  { ref: this.portalRef, defaultStyles: t.defaultStyles },
                  this.props,
                ),
              ),
              this.node,
            );
          },
        },
      ],
      [
        {
          key: "setAppElement",
          value: function (r) {
            pA.setElement(r);
          },
        },
      ],
    ),
    t
  );
})(d2.Component);
Ya.propTypes = {
  isOpen: oe.default.bool.isRequired,
  style: oe.default.shape({
    content: oe.default.object,
    overlay: oe.default.object,
  }),
  portalClassName: oe.default.string,
  bodyOpenClassName: oe.default.string,
  htmlOpenClassName: oe.default.string,
  className: oe.default.oneOfType([
    oe.default.string,
    oe.default.shape({
      base: oe.default.string.isRequired,
      afterOpen: oe.default.string.isRequired,
      beforeClose: oe.default.string.isRequired,
    }),
  ]),
  overlayClassName: oe.default.oneOfType([
    oe.default.string,
    oe.default.shape({
      base: oe.default.string.isRequired,
      afterOpen: oe.default.string.isRequired,
      beforeClose: oe.default.string.isRequired,
    }),
  ]),
  appElement: oe.default.oneOfType([
    oe.default.instanceOf(em.default),
    oe.default.instanceOf(ar.SafeHTMLCollection),
    oe.default.instanceOf(ar.SafeNodeList),
    oe.default.arrayOf(oe.default.instanceOf(em.default)),
  ]),
  onAfterOpen: oe.default.func,
  onRequestClose: oe.default.func,
  closeTimeoutMS: oe.default.number,
  ariaHideApp: oe.default.bool,
  shouldFocusAfterRender: oe.default.bool,
  shouldCloseOnOverlayClick: oe.default.bool,
  shouldReturnFocusAfterClose: oe.default.bool,
  preventScroll: oe.default.bool,
  parentSelector: oe.default.func,
  aria: oe.default.object,
  data: oe.default.object,
  role: oe.default.string,
  contentLabel: oe.default.string,
  shouldCloseOnEsc: oe.default.bool,
  overlayRef: oe.default.func,
  contentRef: oe.default.func,
  id: oe.default.string,
  overlayElement: oe.default.func,
  contentElement: oe.default.func,
};
Ya.defaultProps = {
  isOpen: !1,
  portalClassName: yA,
  bodyOpenClassName: EA,
  role: "dialog",
  ariaHideApp: !0,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: !0,
  shouldCloseOnEsc: !0,
  shouldCloseOnOverlayClick: !0,
  shouldReturnFocusAfterClose: !0,
  preventScroll: !1,
  parentSelector: function () {
    return document.body;
  },
  overlayElement: function (t, n) {
    return bl.default.createElement("div", t, n);
  },
  contentElement: function (t, n) {
    return bl.default.createElement("div", t, n);
  },
};
Ya.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
};
(0, xA.polyfill)(Ya);
so.default = Ya;
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = so,
    r = o(n);
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  (t.default = r.default), (e.exports = t.default);
})(lf, lf.exports);
var CA = lf.exports;
const su = ja(CA);
function hf() {
  return (
    (hf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    hf.apply(this, arguments)
  );
}
function wA(e, t) {
  if (e == null) return {};
  var n = SA(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function SA(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var eh = _.forwardRef(function (e, t) {
  var n = e.color,
    r = n === void 0 ? "currentColor" : n,
    o = e.size,
    i = o === void 0 ? 24 : o,
    a = wA(e, ["color", "size"]);
  return ue.createElement(
    "svg",
    hf(
      {
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: r,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      a,
    ),
    ue.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    ue.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
    ue.createElement("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" }),
  );
});
eh.propTypes = { color: xe.string, size: xe.oneOfType([xe.string, xe.number]) };
eh.displayName = "AlertCircle";
const AA = eh;
function pf() {
  return (
    (pf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    pf.apply(this, arguments)
  );
}
function DA(e, t) {
  if (e == null) return {};
  var n = _A(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function _A(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var th = _.forwardRef(function (e, t) {
  var n = e.color,
    r = n === void 0 ? "currentColor" : n,
    o = e.size,
    i = o === void 0 ? 24 : o,
    a = DA(e, ["color", "size"]);
  return ue.createElement(
    "svg",
    pf(
      {
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: r,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      a,
    ),
    ue.createElement("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
    ue.createElement("polyline", { points: "22 4 12 14.01 9 11.01" }),
  );
});
th.propTypes = { color: xe.string, size: xe.oneOfType([xe.string, xe.number]) };
th.displayName = "CheckCircle";
const BA = th;
function xf() {
  return (
    (xf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    xf.apply(this, arguments)
  );
}
function PA(e, t) {
  if (e == null) return {};
  var n = bA(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function bA(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var nh = _.forwardRef(function (e, t) {
  var n = e.color,
    r = n === void 0 ? "currentColor" : n,
    o = e.size,
    i = o === void 0 ? 24 : o,
    a = PA(e, ["color", "size"]);
  return ue.createElement(
    "svg",
    xf(
      {
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: r,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      a,
    ),
    ue.createElement("path", {
      d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",
    }),
  );
});
nh.propTypes = { color: xe.string, size: xe.oneOfType([xe.string, xe.number]) };
nh.displayName = "Edit2";
const FA = nh;
function mf() {
  return (
    (mf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    mf.apply(this, arguments)
  );
}
function kA(e, t) {
  if (e == null) return {};
  var n = RA(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function RA(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var rh = _.forwardRef(function (e, t) {
  var n = e.color,
    r = n === void 0 ? "currentColor" : n,
    o = e.size,
    i = o === void 0 ? 24 : o,
    a = kA(e, ["color", "size"]);
  return ue.createElement(
    "svg",
    mf(
      {
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: r,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      a,
    ),
    ue.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    ue.createElement("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
    ue.createElement("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }),
  );
});
rh.propTypes = { color: xe.string, size: xe.oneOfType([xe.string, xe.number]) };
rh.displayName = "HelpCircle";
const TA = rh;
function vf() {
  return (
    (vf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    vf.apply(this, arguments)
  );
}
function NA(e, t) {
  if (e == null) return {};
  var n = jA(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function jA(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var oh = _.forwardRef(function (e, t) {
  var n = e.color,
    r = n === void 0 ? "currentColor" : n,
    o = e.size,
    i = o === void 0 ? 24 : o,
    a = NA(e, ["color", "size"]);
  return ue.createElement(
    "svg",
    vf(
      {
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: r,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      a,
    ),
    ue.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    ue.createElement("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
    ue.createElement("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" }),
  );
});
oh.propTypes = { color: xe.string, size: xe.oneOfType([xe.string, xe.number]) };
oh.displayName = "Info";
const OA = oh;
function gf() {
  return (
    (gf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    gf.apply(this, arguments)
  );
}
function MA(e, t) {
  if (e == null) return {};
  var n = LA(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function LA(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var ih = _.forwardRef(function (e, t) {
  var n = e.color,
    r = n === void 0 ? "currentColor" : n,
    o = e.size,
    i = o === void 0 ? 24 : o,
    a = MA(e, ["color", "size"]);
  return ue.createElement(
    "svg",
    gf(
      {
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: r,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      a,
    ),
    ue.createElement("path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }),
    ue.createElement("path", { d: "M22 12A10 10 0 0 0 12 2v10z" }),
  );
});
ih.propTypes = { color: xe.string, size: xe.oneOfType([xe.string, xe.number]) };
ih.displayName = "PieChart";
const IA = ih;
function yf() {
  return (
    (yf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    yf.apply(this, arguments)
  );
}
function zA(e, t) {
  if (e == null) return {};
  var n = $A(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function $A(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var ah = _.forwardRef(function (e, t) {
  var n = e.color,
    r = n === void 0 ? "currentColor" : n,
    o = e.size,
    i = o === void 0 ? 24 : o,
    a = zA(e, ["color", "size"]);
  return ue.createElement(
    "svg",
    yf(
      {
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: r,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      a,
    ),
    ue.createElement("path", {
      d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
    }),
    ue.createElement("circle", { cx: "12", cy: "7", r: "4" }),
  );
});
ah.propTypes = { color: xe.string, size: xe.oneOfType([xe.string, xe.number]) };
ah.displayName = "User";
const sh = ah;
function Ef() {
  return (
    (Ef =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ef.apply(this, arguments)
  );
}
function VA(e, t) {
  if (e == null) return {};
  var n = UA(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function UA(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var lh = _.forwardRef(function (e, t) {
  var n = e.color,
    r = n === void 0 ? "currentColor" : n,
    o = e.size,
    i = o === void 0 ? 24 : o,
    a = VA(e, ["color", "size"]);
  return ue.createElement(
    "svg",
    Ef(
      {
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: r,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      a,
    ),
    ue.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    ue.createElement("line", { x1: "15", y1: "9", x2: "9", y2: "15" }),
    ue.createElement("line", { x1: "9", y1: "9", x2: "15", y2: "15" }),
  );
});
lh.propTypes = { color: xe.string, size: xe.oneOfType([xe.string, xe.number]) };
lh.displayName = "XCircle";
const HA = lh;
function Vn({
  title: e,
  text: t,
  isOpen: n,
  action: r,
  cancel: o = !1,
  setIsOpen: i,
}) {
  return w.jsx(su, {
    ariaHideApp: !1,
    isOpen: n,
    className:
      " w-1/6 rounded-xl h-1/3 min-h-80 min-w-80 bg-background text-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " +
      (n ? "animate-show" : "animate-hide"),
    overlayClassName:
      "bg-text-800/80 absolute w-full h-full top-0 left-0 " +
      (n ? "animate-show" : "animate-hide"),
    closeTimeoutMS: 300,
    children: w.jsxs("div", {
      className: "w-full h-full flex flex-col",
      children: [
        e.toLocaleLowerCase() == "error"
          ? w.jsx(HA, {
              size: 100,
              className: "mx-auto mt-8 mb-4",
              color: "#D7263D",
            })
          : e.toLocaleLowerCase() == "warning"
            ? w.jsx(AA, {
                size: 100,
                className: "mx-auto mt-8 mb-4",
                color: "#F46036",
              })
            : e.toLocaleLowerCase() == "success"
              ? w.jsx(BA, {
                  size: 100,
                  className: "mx-auto mt-8 mb-4",
                  color: "#1B998B",
                })
              : w.jsx(OA, {
                  size: 100,
                  className: "mx-auto mt-8 mb-4",
                  color: "#8f8f8f",
                }),
        w.jsx("p", { className: "text-4xl mx-auto font-bold", children: e }),
        w.jsx("p", {
          className: "text-xl mx-auto px-2 text-center",
          children: t,
        }),
        w.jsxs("div", {
          className: "flex mx-auto justify-center gap-6",
          children: [
            o &&
              w.jsx("button", {
                onClick: () => i(!1),
                className:
                  "px-4 w-32 mt-4 rounded-xl hover:bg-primary-500 bg-primary hover:shadow-md transition-all duration-300 text-2xl py-2 mx-auto",
                children: "Cancel",
              }),
            w.jsx("button", {
              onClick: () => {
                i(!1), r && r();
              },
              className:
                "px-4 w-32 mt-4 rounded-xl hover:bg-primary-500 bg-primary hover:shadow-md transition-all duration-300 text-2xl py-2 mx-auto",
              children: "Ok",
            }),
          ],
        }),
      ],
    }),
  });
}
var Jt = ((e) => (
    (e.DIVISIBLE = "Is the number divisible by x?"),
    (e.MULTIPLE = "Is the number a multiple of x?"),
    (e.ISEVEN = "Is the number even?"),
    (e.ISPRIME = "Is the number a prime number?"),
    (e.FACTORS = "Is the number made of x factors?"),
    (e.LESSTHAN = "Is the number less than x?"),
    (e.GREATERTHAN = "Is the number greater than x?"),
    e
  ))(Jt || {}),
  We = ((e) => (
    (e[(e.SUCCESS = 0)] = "SUCCESS"),
    (e[(e.GENERIC_ERROR = 1)] = "GENERIC_ERROR"),
    (e[(e.USER_NOT_FOUND = 2)] = "USER_NOT_FOUND"),
    (e[(e.INVALID_EMAIL = 3)] = "INVALID_EMAIL"),
    (e[(e.INVALID_SERVICE = 4)] = "INVALID_SERVICE"),
    (e[(e.SENT_CODE = 5)] = "SENT_CODE"),
    (e[(e.EMAIL_NOT_EXIST = 6)] = "EMAIL_NOT_EXIST"),
    (e[(e.ERROR_SENDING_CODE = 7)] = "ERROR_SENDING_CODE"),
    (e[(e.CODE_DENIED = 8)] = "CODE_DENIED"),
    (e[(e.CODE_EXPIRED = 9)] = "CODE_EXPIRED"),
    (e[(e.CODE_FAILED = 10)] = "CODE_FAILED"),
    (e[(e.NO_CONNECTION = 11)] = "NO_CONNECTION"),
    (e[(e.EMAIL_IN_USE = 12)] = "EMAIL_IN_USE"),
    (e[(e.USERNAME_IN_USE = 13)] = "USERNAME_IN_USE"),
    (e[(e.NONE_IN_USE = 14)] = "NONE_IN_USE"),
    e
  ))(We || {}),
  _t = ((e) => (
    (e.MAKINATOR_GUESS = "makinatorData.guessGames"),
    (e.MAKINATOR_PI = "makinatorData.piGames"),
    (e.MAKINATOR_ONLINE = "makinatorData.onlineGames"),
    e
  ))(_t || {});
function WA({ guessType: e, onClick: t }) {
  const [n, r] = _.useState(""),
    o = (i) => {
      if (!Number.isNaN(i.currentTarget.value)) {
        const a = parseInt(i.currentTarget.value);
        r(a ? a.toString() : "");
      }
    };
  return w.jsx("div", {
    className:
      "text-xl bg-background-800 text-text px-3 py-2 rounded-xl flex cursor-pointer",
    children: e.includes("x")
      ? w.jsxs(w.Fragment, {
          children: [
            w.jsx("p", {
              onClick: () => t(e, n),
              className: "mr-2",
              children: e.split("x")[0],
            }),
            w.jsx("form", {
              onSubmit: (i) => {
                i.preventDefault(), t(e, n);
              },
              className: "flex",
              children: w.jsx("input", {
                type: "tel",
                value: n,
                maxLength: 3,
                onInput: o,
                className:
                  "mx-auto bg-transparent text-center w-9 justify-center outline rounded outline-primary my-auto align-middle",
              }),
            }),
            w.jsx("p", {
              onClick: () => t(e, n),
              className: "ml-2 my-auto",
              children: e.split("x")[1],
            }),
          ],
        })
      : w.jsx("p", { onClick: () => t(e, n), children: e }),
  });
}
var h2 = { exports: {} };
function GA(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
  );
}
var cc = { exports: {} };
const KA = {},
  qA = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: KA },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  YA = ov(qA);
var om;
function de() {
  return (
    om ||
      ((om = 1),
      (function (e, t) {
        (function (n, r) {
          e.exports = r();
        })(le, function () {
          var n =
            n ||
            (function (r, o) {
              var i;
              if (
                (typeof window < "u" && window.crypto && (i = window.crypto),
                typeof self < "u" && self.crypto && (i = self.crypto),
                typeof globalThis < "u" &&
                  globalThis.crypto &&
                  (i = globalThis.crypto),
                !i &&
                  typeof window < "u" &&
                  window.msCrypto &&
                  (i = window.msCrypto),
                !i && typeof le < "u" && le.crypto && (i = le.crypto),
                !i && typeof GA == "function")
              )
                try {
                  i = YA;
                } catch {}
              var a = function () {
                  if (i) {
                    if (typeof i.getRandomValues == "function")
                      try {
                        return i.getRandomValues(new Uint32Array(1))[0];
                      } catch {}
                    if (typeof i.randomBytes == "function")
                      try {
                        return i.randomBytes(4).readInt32LE();
                      } catch {}
                  }
                  throw new Error(
                    "Native crypto module could not be used to get secure random number.",
                  );
                },
                s =
                  Object.create ||
                  (function () {
                    function h() {}
                    return function (p) {
                      var y;
                      return (
                        (h.prototype = p),
                        (y = new h()),
                        (h.prototype = null),
                        y
                      );
                    };
                  })(),
                l = {},
                u = (l.lib = {}),
                c = (u.Base = (function () {
                  return {
                    extend: function (h) {
                      var p = s(this);
                      return (
                        h && p.mixIn(h),
                        (!p.hasOwnProperty("init") || this.init === p.init) &&
                          (p.init = function () {
                            p.$super.init.apply(this, arguments);
                          }),
                        (p.init.prototype = p),
                        (p.$super = this),
                        p
                      );
                    },
                    create: function () {
                      var h = this.extend();
                      return h.init.apply(h, arguments), h;
                    },
                    init: function () {},
                    mixIn: function (h) {
                      for (var p in h) h.hasOwnProperty(p) && (this[p] = h[p]);
                      h.hasOwnProperty("toString") &&
                        (this.toString = h.toString);
                    },
                    clone: function () {
                      return this.init.prototype.extend(this);
                    },
                  };
                })()),
                d = (u.WordArray = c.extend({
                  init: function (h, p) {
                    (h = this.words = h || []),
                      p != o
                        ? (this.sigBytes = p)
                        : (this.sigBytes = h.length * 4);
                  },
                  toString: function (h) {
                    return (h || x).stringify(this);
                  },
                  concat: function (h) {
                    var p = this.words,
                      y = h.words,
                      A = this.sigBytes,
                      C = h.sigBytes;
                    if ((this.clamp(), A % 4))
                      for (var S = 0; S < C; S++) {
                        var D = (y[S >>> 2] >>> (24 - (S % 4) * 8)) & 255;
                        p[(A + S) >>> 2] |= D << (24 - ((A + S) % 4) * 8);
                      }
                    else
                      for (var b = 0; b < C; b += 4)
                        p[(A + b) >>> 2] = y[b >>> 2];
                    return (this.sigBytes += C), this;
                  },
                  clamp: function () {
                    var h = this.words,
                      p = this.sigBytes;
                    (h[p >>> 2] &= 4294967295 << (32 - (p % 4) * 8)),
                      (h.length = r.ceil(p / 4));
                  },
                  clone: function () {
                    var h = c.clone.call(this);
                    return (h.words = this.words.slice(0)), h;
                  },
                  random: function (h) {
                    for (var p = [], y = 0; y < h; y += 4) p.push(a());
                    return new d.init(p, h);
                  },
                })),
                f = (l.enc = {}),
                x = (f.Hex = {
                  stringify: function (h) {
                    for (
                      var p = h.words, y = h.sigBytes, A = [], C = 0;
                      C < y;
                      C++
                    ) {
                      var S = (p[C >>> 2] >>> (24 - (C % 4) * 8)) & 255;
                      A.push((S >>> 4).toString(16)),
                        A.push((S & 15).toString(16));
                    }
                    return A.join("");
                  },
                  parse: function (h) {
                    for (var p = h.length, y = [], A = 0; A < p; A += 2)
                      y[A >>> 3] |=
                        parseInt(h.substr(A, 2), 16) << (24 - (A % 8) * 4);
                    return new d.init(y, p / 2);
                  },
                }),
                m = (f.Latin1 = {
                  stringify: function (h) {
                    for (
                      var p = h.words, y = h.sigBytes, A = [], C = 0;
                      C < y;
                      C++
                    ) {
                      var S = (p[C >>> 2] >>> (24 - (C % 4) * 8)) & 255;
                      A.push(String.fromCharCode(S));
                    }
                    return A.join("");
                  },
                  parse: function (h) {
                    for (var p = h.length, y = [], A = 0; A < p; A++)
                      y[A >>> 2] |=
                        (h.charCodeAt(A) & 255) << (24 - (A % 4) * 8);
                    return new d.init(y, p);
                  },
                }),
                g = (f.Utf8 = {
                  stringify: function (h) {
                    try {
                      return decodeURIComponent(escape(m.stringify(h)));
                    } catch {
                      throw new Error("Malformed UTF-8 data");
                    }
                  },
                  parse: function (h) {
                    return m.parse(unescape(encodeURIComponent(h)));
                  },
                }),
                E = (u.BufferedBlockAlgorithm = c.extend({
                  reset: function () {
                    (this._data = new d.init()), (this._nDataBytes = 0);
                  },
                  _append: function (h) {
                    typeof h == "string" && (h = g.parse(h)),
                      this._data.concat(h),
                      (this._nDataBytes += h.sigBytes);
                  },
                  _process: function (h) {
                    var p,
                      y = this._data,
                      A = y.words,
                      C = y.sigBytes,
                      S = this.blockSize,
                      D = S * 4,
                      b = C / D;
                    h
                      ? (b = r.ceil(b))
                      : (b = r.max((b | 0) - this._minBufferSize, 0));
                    var B = b * S,
                      P = r.min(B * 4, C);
                    if (B) {
                      for (var N = 0; N < B; N += S) this._doProcessBlock(A, N);
                      (p = A.splice(0, B)), (y.sigBytes -= P);
                    }
                    return new d.init(p, P);
                  },
                  clone: function () {
                    var h = c.clone.call(this);
                    return (h._data = this._data.clone()), h;
                  },
                  _minBufferSize: 0,
                }));
              u.Hasher = E.extend({
                cfg: c.extend(),
                init: function (h) {
                  (this.cfg = this.cfg.extend(h)), this.reset();
                },
                reset: function () {
                  E.reset.call(this), this._doReset();
                },
                update: function (h) {
                  return this._append(h), this._process(), this;
                },
                finalize: function (h) {
                  h && this._append(h);
                  var p = this._doFinalize();
                  return p;
                },
                blockSize: 16,
                _createHelper: function (h) {
                  return function (p, y) {
                    return new h.init(y).finalize(p);
                  };
                },
                _createHmacHelper: function (h) {
                  return function (p, y) {
                    return new v.HMAC.init(h, y).finalize(p);
                  };
                },
              });
              var v = (l.algo = {});
              return l;
            })(Math);
          return n;
        });
      })(cc)),
    cc.exports
  );
}
var fc = { exports: {} },
  im;
function lu() {
  return (
    im ||
      ((im = 1),
      (function (e, t) {
        (function (n, r) {
          e.exports = r(de());
        })(le, function (n) {
          return (
            (function (r) {
              var o = n,
                i = o.lib,
                a = i.Base,
                s = i.WordArray,
                l = (o.x64 = {});
              (l.Word = a.extend({
                init: function (u, c) {
                  (this.high = u), (this.low = c);
                },
              })),
                (l.WordArray = a.extend({
                  init: function (u, c) {
                    (u = this.words = u || []),
                      c != r
                        ? (this.sigBytes = c)
                        : (this.sigBytes = u.length * 8);
                  },
                  toX32: function () {
                    for (
                      var u = this.words, c = u.length, d = [], f = 0;
                      f < c;
                      f++
                    ) {
                      var x = u[f];
                      d.push(x.high), d.push(x.low);
                    }
                    return s.create(d, this.sigBytes);
                  },
                  clone: function () {
                    for (
                      var u = a.clone.call(this),
                        c = (u.words = this.words.slice(0)),
                        d = c.length,
                        f = 0;
                      f < d;
                      f++
                    )
                      c[f] = c[f].clone();
                    return u;
                  },
                }));
            })(),
            n
          );
        });
      })(fc)),
    fc.exports
  );
}
var dc = { exports: {} },
  am;
function XA() {
  return (
    am ||
      ((am = 1),
      (function (e, t) {
        (function (n, r) {
          e.exports = r(de());
        })(le, function (n) {
          return (
            (function () {
              if (typeof ArrayBuffer == "function") {
                var r = n,
                  o = r.lib,
                  i = o.WordArray,
                  a = i.init,
                  s = (i.init = function (l) {
                    if (
                      (l instanceof ArrayBuffer && (l = new Uint8Array(l)),
                      (l instanceof Int8Array ||
                        (typeof Uint8ClampedArray < "u" &&
                          l instanceof Uint8ClampedArray) ||
                        l instanceof Int16Array ||
                        l instanceof Uint16Array ||
                        l instanceof Int32Array ||
                        l instanceof Uint32Array ||
                        l instanceof Float32Array ||
                        l instanceof Float64Array) &&
                        (l = new Uint8Array(
                          l.buffer,
                          l.byteOffset,
                          l.byteLength,
                        )),
                      l instanceof Uint8Array)
                    ) {
                      for (var u = l.byteLength, c = [], d = 0; d < u; d++)
                        c[d >>> 2] |= l[d] << (24 - (d % 4) * 8);
                      a.call(this, c, u);
                    } else a.apply(this, arguments);
                  });
                s.prototype = i;
              }
            })(),
            n.lib.WordArray
          );
        });
      })(dc)),
    dc.exports
  );
}
var hc = { exports: {} },
  sm;
function QA() {
  return (
    sm ||
      ((sm = 1),
      (function (e, t) {
        (function (n, r) {
          e.exports = r(de());
        })(le, function (n) {
          return (
            (function () {
              var r = n,
                o = r.lib,
                i = o.WordArray,
                a = r.enc;
              (a.Utf16 = a.Utf16BE =
                {
                  stringify: function (l) {
                    for (
                      var u = l.words, c = l.sigBytes, d = [], f = 0;
                      f < c;
                      f += 2
                    ) {
                      var x = (u[f >>> 2] >>> (16 - (f % 4) * 8)) & 65535;
                      d.push(String.fromCharCode(x));
                    }
                    return d.join("");
                  },
                  parse: function (l) {
                    for (var u = l.length, c = [], d = 0; d < u; d++)
                      c[d >>> 1] |= l.charCodeAt(d) << (16 - (d % 2) * 16);
                    return i.create(c, u * 2);
                  },
                }),
                (a.Utf16LE = {
                  stringify: function (l) {
                    for (
                      var u = l.words, c = l.sigBytes, d = [], f = 0;
                      f < c;
                      f += 2
                    ) {
                      var x = s((u[f >>> 2] >>> (16 - (f % 4) * 8)) & 65535);
                      d.push(String.fromCharCode(x));
                    }
                    return d.join("");
                  },
                  parse: function (l) {
                    for (var u = l.length, c = [], d = 0; d < u; d++)
                      c[d >>> 1] |= s(l.charCodeAt(d) << (16 - (d % 2) * 16));
                    return i.create(c, u * 2);
                  },
                });
              function s(l) {
                return ((l << 8) & 4278255360) | ((l >>> 8) & 16711935);
              }
            })(),
            n.enc.Utf16
          );
        });
      })(hc)),
    hc.exports
  );
}
var pc = { exports: {} },
  lm;
function po() {
  return (
    lm ||
      ((lm = 1),
      (function (e, t) {
        (function (n, r) {
          e.exports = r(de());
        })(le, function (n) {
          return (
            (function () {
              var r = n,
                o = r.lib,
                i = o.WordArray,
                a = r.enc;
              a.Base64 = {
                stringify: function (l) {
                  var u = l.words,
                    c = l.sigBytes,
                    d = this._map;
                  l.clamp();
                  for (var f = [], x = 0; x < c; x += 3)
                    for (
                      var m = (u[x >>> 2] >>> (24 - (x % 4) * 8)) & 255,
                        g =
                          (u[(x + 1) >>> 2] >>> (24 - ((x + 1) % 4) * 8)) & 255,
                        E =
                          (u[(x + 2) >>> 2] >>> (24 - ((x + 2) % 4) * 8)) & 255,
                        v = (m << 16) | (g << 8) | E,
                        h = 0;
                      h < 4 && x + h * 0.75 < c;
                      h++
                    )
                      f.push(d.charAt((v >>> (6 * (3 - h))) & 63));
                  var p = d.charAt(64);
                  if (p) for (; f.length % 4; ) f.push(p);
                  return f.join("");
                },
                parse: function (l) {
                  var u = l.length,
                    c = this._map,
                    d = this._reverseMap;
                  if (!d) {
                    d = this._reverseMap = [];
                    for (var f = 0; f < c.length; f++) d[c.charCodeAt(f)] = f;
                  }
                  var x = c.charAt(64);
                  if (x) {
                    var m = l.indexOf(x);
                    m !== -1 && (u = m);
                  }
                  return s(l, u, d);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              };
              function s(l, u, c) {
                for (var d = [], f = 0, x = 0; x < u; x++)
                  if (x % 4) {
                    var m = c[l.charCodeAt(x - 1)] << ((x % 4) * 2),
                      g = c[l.charCodeAt(x)] >>> (6 - (x % 4) * 2),
                      E = m | g;
                    (d[f >>> 2] |= E << (24 - (f % 4) * 8)), f++;
                  }
                return i.create(d, f);
              }
            })(),
            n.enc.Base64
          );
        });
      })(pc)),
    pc.exports
  );
}
var xc = { exports: {} },
  um;
function ZA() {
  return (
    um ||
      ((um = 1),
      (function (e, t) {
        (function (n, r) {
          e.exports = r(de());
        })(le, function (n) {
          return (
            (function () {
              var r = n,
                o = r.lib,
                i = o.WordArray,
                a = r.enc;
              a.Base64url = {
                stringify: function (l, u) {
                  u === void 0 && (u = !0);
                  var c = l.words,
                    d = l.sigBytes,
                    f = u ? this._safe_map : this._map;
                  l.clamp();
                  for (var x = [], m = 0; m < d; m += 3)
                    for (
                      var g = (c[m >>> 2] >>> (24 - (m % 4) * 8)) & 255,
                        E =
                          (c[(m + 1) >>> 2] >>> (24 - ((m + 1) % 4) * 8)) & 255,
                        v =
                          (c[(m + 2) >>> 2] >>> (24 - ((m + 2) % 4) * 8)) & 255,
                        h = (g << 16) | (E << 8) | v,
                        p = 0;
                      p < 4 && m + p * 0.75 < d;
                      p++
                    )
                      x.push(f.charAt((h >>> (6 * (3 - p))) & 63));
                  var y = f.charAt(64);
                  if (y) for (; x.length % 4; ) x.push(y);
                  return x.join("");
                },
                parse: function (l, u) {
                  u === void 0 && (u = !0);
                  var c = l.length,
                    d = u ? this._safe_map : this._map,
                    f = this._reverseMap;
                  if (!f) {
                    f = this._reverseMap = [];
                    for (var x = 0; x < d.length; x++) f[d.charCodeAt(x)] = x;
                  }
                  var m = d.charAt(64);
                  if (m) {
                    var g = l.indexOf(m);
                    g !== -1 && (c = g);
                  }
                  return s(l, c, f);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                _safe_map:
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
              };
              function s(l, u, c) {
                for (var d = [], f = 0, x = 0; x < u; x++)
                  if (x % 4) {
                    var m = c[l.charCodeAt(x - 1)] << ((x % 4) * 2),
                      g = c[l.charCodeAt(x)] >>> (6 - (x % 4) * 2),
                      E = m | g;
                    (d[f >>> 2] |= E << (24 - (f % 4) * 8)), f++;
                  }
                return i.create(d, f);
              }
            })(),
            n.enc.Base64url
          );
        });
      })(xc)),
    xc.exports
  );
}
var mc = { exports: {} },
  cm;
function xo() {
  return (
    cm ||
      ((cm = 1),
      (function (e, t) {
        (function (n, r) {
          e.exports = r(de());
        })(le, function (n) {
          return (
            (function (r) {
              var o = n,
                i = o.lib,
                a = i.WordArray,
                s = i.Hasher,
                l = o.algo,
                u = [];
              (function () {
                for (var g = 0; g < 64; g++)
                  u[g] = (r.abs(r.sin(g + 1)) * 4294967296) | 0;
              })();
              var c = (l.MD5 = s.extend({
                _doReset: function () {
                  this._hash = new a.init([
                    1732584193, 4023233417, 2562383102, 271733878,
                  ]);
                },
                _doProcessBlock: function (g, E) {
                  for (var v = 0; v < 16; v++) {
                    var h = E + v,
                      p = g[h];
                    g[h] =
                      (((p << 8) | (p >>> 24)) & 16711935) |
                      (((p << 24) | (p >>> 8)) & 4278255360);
                  }
                  var y = this._hash.words,
                    A = g[E + 0],
                    C = g[E + 1],
                    S = g[E + 2],
                    D = g[E + 3],
                    b = g[E + 4],
                    B = g[E + 5],
                    P = g[E + 6],
                    N = g[E + 7],
                    O = g[E + 8],
                    k = g[E + 9],
                    M = g[E + 10],
                    G = g[E + 11],
                    R = g[E + 12],
                    j = g[E + 13],
                    U = g[E + 14],
                    H = g[E + 15],
                    F = y[0],
                    I = y[1],
                    V = y[2],
                    z = y[3];
                  (F = d(F, I, V, z, A, 7, u[0])),
                    (z = d(z, F, I, V, C, 12, u[1])),
                    (V = d(V, z, F, I, S, 17, u[2])),
                    (I = d(I, V, z, F, D, 22, u[3])),
                    (F = d(F, I, V, z, b, 7, u[4])),
                    (z = d(z, F, I, V, B, 12, u[5])),
                    (V = d(V, z, F, I, P, 17, u[6])),
                    (I = d(I, V, z, F, N, 22, u[7])),
                    (F = d(F, I, V, z, O, 7, u[8])),
                    (z = d(z, F, I, V, k, 12, u[9])),
                    (V = d(V, z, F, I, M, 17, u[10])),
                    (I = d(I, V, z, F, G, 22, u[11])),
                    (F = d(F, I, V, z, R, 7, u[12])),
                    (z = d(z, F, I, V, j, 12, u[13])),
                    (V = d(V, z, F, I, U, 17, u[14])),
                    (I = d(I, V, z, F, H, 22, u[15])),
                    (F = f(F, I, V, z, C, 5, u[16])),
                    (z = f(z, F, I, V, P, 9, u[17])),
                    (V = f(V, z, F, I, G, 14, u[18])),
                    (I = f(I, V, z, F, A, 20, u[19])),
                    (F = f(F, I, V, z, B, 5, u[20])),
                    (z = f(z, F, I, V, M, 9, u[21])),
                    (V = f(V, z, F, I, H, 14, u[22])),
                    (I = f(I, V, z, F, b, 20, u[23])),
                    (F = f(F, I, V, z, k, 5, u[24])),
                    (z = f(z, F, I, V, U, 9, u[25])),
                    (V = f(V, z, F, I, D, 14, u[26])),
                    (I = f(I, V, z, F, O, 20, u[27])),
                    (F = f(F, I, V, z, j, 5, u[28])),
                    (z = f(z, F, I, V, S, 9, u[29])),
                    (V = f(V, z, F, I, N, 14, u[30])),
                    (I = f(I, V, z, F, R, 20, u[31])),
                    (F = x(F, I, V, z, B, 4, u[32])),
                    (z = x(z, F, I, V, O, 11, u[33])),
                    (V = x(V, z, F, I, G, 16, u[34])),
                    (I = x(I, V, z, F, U, 23, u[35])),
                    (F = x(F, I, V, z, C, 4, u[36])),
                    (z = x(z, F, I, V, b, 11, u[37])),
                    (V = x(V, z, F, I, N, 16, u[38])),
                    (I = x(I, V, z, F, M, 23, u[39])),
                    (F = x(F, I, V, z, j, 4, u[40])),
                    (z = x(z, F, I, V, A, 11, u[41])),
                    (V = x(V, z, F, I, D, 16, u[42])),
                    (I = x(I, V, z, F, P, 23, u[43])),
                    (F = x(F, I, V, z, k, 4, u[44])),
                    (z = x(z, F, I, V, R, 11, u[45])),
                    (V = x(V, z, F, I, H, 16, u[46])),
                    (I = x(I, V, z, F, S, 23, u[47])),
                    (F = m(F, I, V, z, A, 6, u[48])),
                    (z = m(z, F, I, V, N, 10, u[49])),
                    (V = m(V, z, F, I, U, 15, u[50])),
                    (I = m(I, V, z, F, B, 21, u[51])),
                    (F = m(F, I, V, z, R, 6, u[52])),
                    (z = m(z, F, I, V, D, 10, u[53])),
                    (V = m(V, z, F, I, M, 15, u[54])),
                    (I = m(I, V, z, F, C, 21, u[55])),
                    (F = m(F, I, V, z, O, 6, u[56])),
                    (z = m(z, F, I, V, H, 10, u[57])),
                    (V = m(V, z, F, I, P, 15, u[58])),
                    (I = m(I, V, z, F, j, 21, u[59])),
                    (F = m(F, I, V, z, b, 6, u[60])),
                    (z = m(z, F, I, V, G, 10, u[61])),
                    (V = m(V, z, F, I, S, 15, u[62])),
                    (I = m(I, V, z, F, k, 21, u[63])),
                    (y[0] = (y[0] + F) | 0),
                    (y[1] = (y[1] + I) | 0),
                    (y[2] = (y[2] + V) | 0),
                    (y[3] = (y[3] + z) | 0);
                },
                _doFinalize: function () {
                  var g = this._data,
                    E = g.words,
                    v = this._nDataBytes * 8,
                    h = g.sigBytes * 8;
                  E[h >>> 5] |= 128 << (24 - (h % 32));
                  var p = r.floor(v / 4294967296),
                    y = v;
                  (E[(((h + 64) >>> 9) << 4) + 15] =
                    (((p << 8) | (p >>> 24)) & 16711935) |
                    (((p << 24) | (p >>> 8)) & 4278255360)),
                    (E[(((h + 64) >>> 9) << 4) + 14] =
                      (((y << 8) | (y >>> 24)) & 16711935) |
                      (((y << 24) | (y >>> 8)) & 4278255360)),
                    (g.sigBytes = (E.length + 1) * 4),
                    this._process();
                  for (var A = this._hash, C = A.words, S = 0; S < 4; S++) {
                    var D = C[S];
                    C[S] =
                      (((D << 8) | (D >>> 24)) & 16711935) |
                      (((D << 24) | (D >>> 8)) & 4278255360);
                  }
                  return A;
                },
                clone: function () {
                  var g = s.clone.call(this);
                  return (g._hash = this._hash.clone()), g;
                },
              }));
              function d(g, E, v, h, p, y, A) {
                var C = g + ((E & v) | (~E & h)) + p + A;
                return ((C << y) | (C >>> (32 - y))) + E;
              }
              function f(g, E, v, h, p, y, A) {
                var C = g + ((E & h) | (v & ~h)) + p + A;
                return ((C << y) | (C >>> (32 - y))) + E;
              }
              function x(g, E, v, h, p, y, A) {
                var C = g + (E ^ v ^ h) + p + A;
                return ((C << y) | (C >>> (32 - y))) + E;
              }
              function m(g, E, v, h, p, y, A) {
                var C = g + (v ^ (E | ~h)) + p + A;
                return ((C << y) | (C >>> (32 - y))) + E;
              }
              (o.MD5 = s._createHelper(c)),
                (o.HmacMD5 = s._createHmacHelper(c));
            })(Math),
            n.MD5
          );
        });
      })(mc)),
    mc.exports
  );
}
var vc = { exports: {} },
  fm;
function p2() {
  return (
    fm ||
      ((fm = 1),
      (function (e, t) {
        (function (n, r) {
          e.exports = r(de());
        })(le, function (n) {
          return (
            (function () {
              var r = n,
                o = r.lib,
                i = o.WordArray,
                a = o.Hasher,
                s = r.algo,
                l = [],
                u = (s.SHA1 = a.extend({
                  _doReset: function () {
                    this._hash = new i.init([
                      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                    ]);
                  },
                  _doProcessBlock: function (c, d) {
                    for (
                      var f = this._hash.words,
                        x = f[0],
                        m = f[1],
                        g = f[2],
                        E = f[3],
                        v = f[4],
                        h = 0;
                      h < 80;
                      h++
                    ) {
                      if (h < 16) l[h] = c[d + h] | 0;
                      else {
                        var p = l[h - 3] ^ l[h - 8] ^ l[h - 14] ^ l[h - 16];
                        l[h] = (p << 1) | (p >>> 31);
                      }
                      var y = ((x << 5) | (x >>> 27)) + v + l[h];
                      h < 20
                        ? (y += ((m & g) | (~m & E)) + 1518500249)
                        : h < 40
                          ? (y += (m ^ g ^ E) + 1859775393)
                          : h < 60
                            ? (y += ((m & g) | (m & E) | (g & E)) - 1894007588)
                            : (y += (m ^ g ^ E) - 899497514),
                        (v = E),
                        (E = g),
                        (g = (m << 30) | (m >>> 2)),
                        (m = x),
                        (x = y);
                    }
                    (f[0] = (f[0] + x) | 0),
                      (f[1] = (f[1] + m) | 0),
                      (f[2] = (f[2] + g) | 0),
                      (f[3] = (f[3] + E) | 0),
                      (f[4] = (f[4] + v) | 0);
                  },
                  _doFinalize: function () {
                    var c = this._data,
                      d = c.words,
                      f = this._nDataBytes * 8,
                      x = c.sigBytes * 8;
                    return (
                      (d[x >>> 5] |= 128 << (24 - (x % 32))),
                      (d[(((x + 64) >>> 9) << 4) + 14] = Math.floor(
                        f / 4294967296,
                      )),
                      (d[(((x + 64) >>> 9) << 4) + 15] = f),
                      (c.sigBytes = d.length * 4),
                      this._process(),
                      this._hash
                    );
                  },
                  clone: function () {
                    var c = a.clone.call(this);
                    return (c._hash = this._hash.clone()), c;
                  },
                }));
              (r.SHA1 = a._createHelper(u)),
                (r.HmacSHA1 = a._createHmacHelper(u));
            })(),
            n.SHA1
          );
        });
      })(vc)),
    vc.exports
  );
}
var gc = { exports: {} },
  dm;
function uh() {
  return (
    dm ||
      ((dm = 1),
      (function (e, t) {
        (function (n, r) {
          e.exports = r(de());
        })(le, function (n) {
          return (
            (function (r) {
              var o = n,
                i = o.lib,
                a = i.WordArray,
                s = i.Hasher,
                l = o.algo,
                u = [],
                c = [];
              (function () {
                function x(v) {
                  for (var h = r.sqrt(v), p = 2; p <= h; p++)
                    if (!(v % p)) return !1;
                  return !0;
                }
                function m(v) {
                  return ((v - (v | 0)) * 4294967296) | 0;
                }
                for (var g = 2, E = 0; E < 64; )
                  x(g) &&
                    (E < 8 && (u[E] = m(r.pow(g, 1 / 2))),
                    (c[E] = m(r.pow(g, 1 / 3))),
                    E++),
                    g++;
              })();
              var d = [],
                f = (l.SHA256 = s.extend({
                  _doReset: function () {
                    this._hash = new a.init(u.slice(0));
                  },
                  _doProcessBlock: function (x, m) {
                    for (
                      var g = this._hash.words,
                        E = g[0],
                        v = g[1],
                        h = g[2],
                        p = g[3],
                        y = g[4],
                        A = g[5],
                        C = g[6],
                        S = g[7],
                        D = 0;
                      D < 64;
                      D++
                    ) {
                      if (D < 16) d[D] = x[m + D] | 0;
                      else {
                        var b = d[D - 15],
                          B =
                            ((b << 25) | (b >>> 7)) ^
                            ((b << 14) | (b >>> 18)) ^
                            (b >>> 3),
                          P = d[D - 2],
                          N =
                            ((P << 15) | (P >>> 17)) ^
                            ((P << 13) | (P >>> 19)) ^
                            (P >>> 10);
                        d[D] = B + d[D - 7] + N + d[D - 16];
                      }
                      var O = (y & A) ^ (~y & C),
                        k = (E & v) ^ (E & h) ^ (v & h),
                        M =
                          ((E << 30) | (E >>> 2)) ^
                          ((E << 19) | (E >>> 13)) ^
                          ((E << 10) | (E >>> 22)),
                        G =
                          ((y << 26) | (y >>> 6)) ^
                          ((y << 21) | (y >>> 11)) ^
                          ((y << 7) | (y >>> 25)),
                        R = S + G + O + c[D] + d[D],
                        j = M + k;
                      (S = C),
                        (C = A),
                        (A = y),
                        (y = (p + R) | 0),
                        (p = h),
                        (h = v),
                        (v = E),
                        (E = (R + j) | 0);
                    }
                    (g[0] = (g[0] + E) | 0),
                      (g[1] = (g[1] + v) | 0),
                      (g[2] = (g[2] + h) | 0),
                      (g[3] = (g[3] + p) | 0),
                      (g[4] = (g[4] + y) | 0),
                      (g[5] = (g[5] + A) | 0),
                      (g[6] = (g[6] + C) | 0),
                      (g[7] = (g[7] + S) | 0);
                  },
                  _doFinalize: function () {
                    var x = this._data,
                      m = x.words,
                      g = this._nDataBytes * 8,
                      E = x.sigBytes * 8;
                    return (
                      (m[E >>> 5] |= 128 << (24 - (E % 32))),
                      (m[(((E + 64) >>> 9) << 4) + 14] = r.floor(
                        g / 4294967296,
                      )),
                      (m[(((E + 64) >>> 9) << 4) + 15] = g),
                      (x.sigBytes = m.length * 4),
                      this._process(),
                      this._hash
                    );
                  },
                  clone: function () {
                    var x = s.clone.call(this);
                    return (x._hash = this._hash.clone()), x;
                  },
                }));
              (o.SHA256 = s._createHelper(f)),
                (o.HmacSHA256 = s._createHmacHelper(f));
            })(Math),
            n.SHA256
          );
        });
      })(gc)),
    gc.exports
  );
}
var yc = { exports: {} },
  hm;
function JA() {
  return (
    hm ||
      ((hm = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), uh());
        })(le, function (n) {
          return (
            (function () {
              var r = n,
                o = r.lib,
                i = o.WordArray,
                a = r.algo,
                s = a.SHA256,
                l = (a.SHA224 = s.extend({
                  _doReset: function () {
                    this._hash = new i.init([
                      3238371032, 914150663, 812702999, 4144912697, 4290775857,
                      1750603025, 1694076839, 3204075428,
                    ]);
                  },
                  _doFinalize: function () {
                    var u = s._doFinalize.call(this);
                    return (u.sigBytes -= 4), u;
                  },
                }));
              (r.SHA224 = s._createHelper(l)),
                (r.HmacSHA224 = s._createHmacHelper(l));
            })(),
            n.SHA224
          );
        });
      })(yc)),
    yc.exports
  );
}
var Ec = { exports: {} },
  pm;
function x2() {
  return (
    pm ||
      ((pm = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), lu());
        })(le, function (n) {
          return (
            (function () {
              var r = n,
                o = r.lib,
                i = o.Hasher,
                a = r.x64,
                s = a.Word,
                l = a.WordArray,
                u = r.algo;
              function c() {
                return s.create.apply(s, arguments);
              }
              var d = [
                  c(1116352408, 3609767458),
                  c(1899447441, 602891725),
                  c(3049323471, 3964484399),
                  c(3921009573, 2173295548),
                  c(961987163, 4081628472),
                  c(1508970993, 3053834265),
                  c(2453635748, 2937671579),
                  c(2870763221, 3664609560),
                  c(3624381080, 2734883394),
                  c(310598401, 1164996542),
                  c(607225278, 1323610764),
                  c(1426881987, 3590304994),
                  c(1925078388, 4068182383),
                  c(2162078206, 991336113),
                  c(2614888103, 633803317),
                  c(3248222580, 3479774868),
                  c(3835390401, 2666613458),
                  c(4022224774, 944711139),
                  c(264347078, 2341262773),
                  c(604807628, 2007800933),
                  c(770255983, 1495990901),
                  c(1249150122, 1856431235),
                  c(1555081692, 3175218132),
                  c(1996064986, 2198950837),
                  c(2554220882, 3999719339),
                  c(2821834349, 766784016),
                  c(2952996808, 2566594879),
                  c(3210313671, 3203337956),
                  c(3336571891, 1034457026),
                  c(3584528711, 2466948901),
                  c(113926993, 3758326383),
                  c(338241895, 168717936),
                  c(666307205, 1188179964),
                  c(773529912, 1546045734),
                  c(1294757372, 1522805485),
                  c(1396182291, 2643833823),
                  c(1695183700, 2343527390),
                  c(1986661051, 1014477480),
                  c(2177026350, 1206759142),
                  c(2456956037, 344077627),
                  c(2730485921, 1290863460),
                  c(2820302411, 3158454273),
                  c(3259730800, 3505952657),
                  c(3345764771, 106217008),
                  c(3516065817, 3606008344),
                  c(3600352804, 1432725776),
                  c(4094571909, 1467031594),
                  c(275423344, 851169720),
                  c(430227734, 3100823752),
                  c(506948616, 1363258195),
                  c(659060556, 3750685593),
                  c(883997877, 3785050280),
                  c(958139571, 3318307427),
                  c(1322822218, 3812723403),
                  c(1537002063, 2003034995),
                  c(1747873779, 3602036899),
                  c(1955562222, 1575990012),
                  c(2024104815, 1125592928),
                  c(2227730452, 2716904306),
                  c(2361852424, 442776044),
                  c(2428436474, 593698344),
                  c(2756734187, 3733110249),
                  c(3204031479, 2999351573),
                  c(3329325298, 3815920427),
                  c(3391569614, 3928383900),
                  c(3515267271, 566280711),
                  c(3940187606, 3454069534),
                  c(4118630271, 4000239992),
                  c(116418474, 1914138554),
                  c(174292421, 2731055270),
                  c(289380356, 3203993006),
                  c(460393269, 320620315),
                  c(685471733, 587496836),
                  c(852142971, 1086792851),
                  c(1017036298, 365543100),
                  c(1126000580, 2618297676),
                  c(1288033470, 3409855158),
                  c(1501505948, 4234509866),
                  c(1607167915, 987167468),
                  c(1816402316, 1246189591),
                ],
                f = [];
              (function () {
                for (var m = 0; m < 80; m++) f[m] = c();
              })();
              var x = (u.SHA512 = i.extend({
                _doReset: function () {
                  this._hash = new l.init([
                    new s.init(1779033703, 4089235720),
                    new s.init(3144134277, 2227873595),
                    new s.init(1013904242, 4271175723),
                    new s.init(2773480762, 1595750129),
                    new s.init(1359893119, 2917565137),
                    new s.init(2600822924, 725511199),
                    new s.init(528734635, 4215389547),
                    new s.init(1541459225, 327033209),
                  ]);
                },
                _doProcessBlock: function (m, g) {
                  for (
                    var E = this._hash.words,
                      v = E[0],
                      h = E[1],
                      p = E[2],
                      y = E[3],
                      A = E[4],
                      C = E[5],
                      S = E[6],
                      D = E[7],
                      b = v.high,
                      B = v.low,
                      P = h.high,
                      N = h.low,
                      O = p.high,
                      k = p.low,
                      M = y.high,
                      G = y.low,
                      R = A.high,
                      j = A.low,
                      U = C.high,
                      H = C.low,
                      F = S.high,
                      I = S.low,
                      V = D.high,
                      z = D.low,
                      re = b,
                      X = B,
                      he = P,
                      ne = N,
                      Ue = O,
                      Ze = k,
                      me = M,
                      Oe = G,
                      gt = R,
                      ft = j,
                      Mt = U,
                      Pr = H,
                      vo = F,
                      br = I,
                      vi = V,
                      Fr = z,
                      Je = 0;
                    Je < 80;
                    Je++
                  ) {
                    var dt,
                      Lt,
                      Pt = f[Je];
                    if (Je < 16)
                      (Lt = Pt.high = m[g + Je * 2] | 0),
                        (dt = Pt.low = m[g + Je * 2 + 1] | 0);
                    else {
                      var Wn = f[Je - 15],
                        An = Wn.high,
                        xn = Wn.low,
                        mu =
                          ((An >>> 1) | (xn << 31)) ^
                          ((An >>> 8) | (xn << 24)) ^
                          (An >>> 7),
                        Qt =
                          ((xn >>> 1) | (An << 31)) ^
                          ((xn >>> 8) | (An << 24)) ^
                          ((xn >>> 7) | (An << 25)),
                        gi = f[Je - 2],
                        Dn = gi.high,
                        Gn = gi.low,
                        vu =
                          ((Dn >>> 19) | (Gn << 13)) ^
                          ((Dn << 3) | (Gn >>> 29)) ^
                          (Dn >>> 6),
                        yi =
                          ((Gn >>> 19) | (Dn << 13)) ^
                          ((Gn << 3) | (Dn >>> 29)) ^
                          ((Gn >>> 6) | (Dn << 26)),
                        kr = f[Je - 7],
                        Qa = kr.high,
                        Ei = kr.low,
                        Za = f[Je - 16],
                        Ja = Za.high,
                        es = Za.low;
                      (dt = Qt + Ei),
                        (Lt = mu + Qa + (dt >>> 0 < Qt >>> 0 ? 1 : 0)),
                        (dt = dt + yi),
                        (Lt = Lt + vu + (dt >>> 0 < yi >>> 0 ? 1 : 0)),
                        (dt = dt + es),
                        (Lt = Lt + Ja + (dt >>> 0 < es >>> 0 ? 1 : 0)),
                        (Pt.high = Lt),
                        (Pt.low = dt);
                    }
                    var ts = (gt & Mt) ^ (~gt & vo),
                      ns = (ft & Pr) ^ (~ft & br),
                      T = (re & he) ^ (re & Ue) ^ (he & Ue),
                      L = (X & ne) ^ (X & Ze) ^ (ne & Ze),
                      $ =
                        ((re >>> 28) | (X << 4)) ^
                        ((re << 30) | (X >>> 2)) ^
                        ((re << 25) | (X >>> 7)),
                      K =
                        ((X >>> 28) | (re << 4)) ^
                        ((X << 30) | (re >>> 2)) ^
                        ((X << 25) | (re >>> 7)),
                      Y =
                        ((gt >>> 14) | (ft << 18)) ^
                        ((gt >>> 18) | (ft << 14)) ^
                        ((gt << 23) | (ft >>> 9)),
                      ae =
                        ((ft >>> 14) | (gt << 18)) ^
                        ((ft >>> 18) | (gt << 14)) ^
                        ((ft << 23) | (gt >>> 9)),
                      J = d[Je],
                      Z = J.high,
                      Q = J.low,
                      ee = Fr + ae,
                      Ee = vi + Y + (ee >>> 0 < Fr >>> 0 ? 1 : 0),
                      ee = ee + ns,
                      Ee = Ee + ts + (ee >>> 0 < ns >>> 0 ? 1 : 0),
                      ee = ee + Q,
                      Ee = Ee + Z + (ee >>> 0 < Q >>> 0 ? 1 : 0),
                      ee = ee + dt,
                      Ee = Ee + Lt + (ee >>> 0 < dt >>> 0 ? 1 : 0),
                      ie = K + L,
                      ye = $ + T + (ie >>> 0 < K >>> 0 ? 1 : 0);
                    (vi = vo),
                      (Fr = br),
                      (vo = Mt),
                      (br = Pr),
                      (Mt = gt),
                      (Pr = ft),
                      (ft = (Oe + ee) | 0),
                      (gt = (me + Ee + (ft >>> 0 < Oe >>> 0 ? 1 : 0)) | 0),
                      (me = Ue),
                      (Oe = Ze),
                      (Ue = he),
                      (Ze = ne),
                      (he = re),
                      (ne = X),
                      (X = (ee + ie) | 0),
                      (re = (Ee + ye + (X >>> 0 < ee >>> 0 ? 1 : 0)) | 0);
                  }
                  (B = v.low = B + X),
                    (v.high = b + re + (B >>> 0 < X >>> 0 ? 1 : 0)),
                    (N = h.low = N + ne),
                    (h.high = P + he + (N >>> 0 < ne >>> 0 ? 1 : 0)),
                    (k = p.low = k + Ze),
                    (p.high = O + Ue + (k >>> 0 < Ze >>> 0 ? 1 : 0)),
                    (G = y.low = G + Oe),
                    (y.high = M + me + (G >>> 0 < Oe >>> 0 ? 1 : 0)),
                    (j = A.low = j + ft),
                    (A.high = R + gt + (j >>> 0 < ft >>> 0 ? 1 : 0)),
                    (H = C.low = H + Pr),
                    (C.high = U + Mt + (H >>> 0 < Pr >>> 0 ? 1 : 0)),
                    (I = S.low = I + br),
                    (S.high = F + vo + (I >>> 0 < br >>> 0 ? 1 : 0)),
                    (z = D.low = z + Fr),
                    (D.high = V + vi + (z >>> 0 < Fr >>> 0 ? 1 : 0));
                },
                _doFinalize: function () {
                  var m = this._data,
                    g = m.words,
                    E = this._nDataBytes * 8,
                    v = m.sigBytes * 8;
                  (g[v >>> 5] |= 128 << (24 - (v % 32))),
                    (g[(((v + 128) >>> 10) << 5) + 30] = Math.floor(
                      E / 4294967296,
                    )),
                    (g[(((v + 128) >>> 10) << 5) + 31] = E),
                    (m.sigBytes = g.length * 4),
                    this._process();
                  var h = this._hash.toX32();
                  return h;
                },
                clone: function () {
                  var m = i.clone.call(this);
                  return (m._hash = this._hash.clone()), m;
                },
                blockSize: 1024 / 32,
              }));
              (r.SHA512 = i._createHelper(x)),
                (r.HmacSHA512 = i._createHmacHelper(x));
            })(),
            n.SHA512
          );
        });
      })(Ec)),
    Ec.exports
  );
}
var Cc = { exports: {} },
  xm;
function eD() {
  return (
    xm ||
      ((xm = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), lu(), x2());
        })(le, function (n) {
          return (
            (function () {
              var r = n,
                o = r.x64,
                i = o.Word,
                a = o.WordArray,
                s = r.algo,
                l = s.SHA512,
                u = (s.SHA384 = l.extend({
                  _doReset: function () {
                    this._hash = new a.init([
                      new i.init(3418070365, 3238371032),
                      new i.init(1654270250, 914150663),
                      new i.init(2438529370, 812702999),
                      new i.init(355462360, 4144912697),
                      new i.init(1731405415, 4290775857),
                      new i.init(2394180231, 1750603025),
                      new i.init(3675008525, 1694076839),
                      new i.init(1203062813, 3204075428),
                    ]);
                  },
                  _doFinalize: function () {
                    var c = l._doFinalize.call(this);
                    return (c.sigBytes -= 16), c;
                  },
                }));
              (r.SHA384 = l._createHelper(u)),
                (r.HmacSHA384 = l._createHmacHelper(u));
            })(),
            n.SHA384
          );
        });
      })(Cc)),
    Cc.exports
  );
}
var wc = { exports: {} },
  mm;
function tD() {
  return (
    mm ||
      ((mm = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), lu());
        })(le, function (n) {
          return (
            (function (r) {
              var o = n,
                i = o.lib,
                a = i.WordArray,
                s = i.Hasher,
                l = o.x64,
                u = l.Word,
                c = o.algo,
                d = [],
                f = [],
                x = [];
              (function () {
                for (var E = 1, v = 0, h = 0; h < 24; h++) {
                  d[E + 5 * v] = (((h + 1) * (h + 2)) / 2) % 64;
                  var p = v % 5,
                    y = (2 * E + 3 * v) % 5;
                  (E = p), (v = y);
                }
                for (var E = 0; E < 5; E++)
                  for (var v = 0; v < 5; v++)
                    f[E + 5 * v] = v + ((2 * E + 3 * v) % 5) * 5;
                for (var A = 1, C = 0; C < 24; C++) {
                  for (var S = 0, D = 0, b = 0; b < 7; b++) {
                    if (A & 1) {
                      var B = (1 << b) - 1;
                      B < 32 ? (D ^= 1 << B) : (S ^= 1 << (B - 32));
                    }
                    A & 128 ? (A = (A << 1) ^ 113) : (A <<= 1);
                  }
                  x[C] = u.create(S, D);
                }
              })();
              var m = [];
              (function () {
                for (var E = 0; E < 25; E++) m[E] = u.create();
              })();
              var g = (c.SHA3 = s.extend({
                cfg: s.cfg.extend({ outputLength: 512 }),
                _doReset: function () {
                  for (var E = (this._state = []), v = 0; v < 25; v++)
                    E[v] = new u.init();
                  this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
                },
                _doProcessBlock: function (E, v) {
                  for (
                    var h = this._state, p = this.blockSize / 2, y = 0;
                    y < p;
                    y++
                  ) {
                    var A = E[v + 2 * y],
                      C = E[v + 2 * y + 1];
                    (A =
                      (((A << 8) | (A >>> 24)) & 16711935) |
                      (((A << 24) | (A >>> 8)) & 4278255360)),
                      (C =
                        (((C << 8) | (C >>> 24)) & 16711935) |
                        (((C << 24) | (C >>> 8)) & 4278255360));
                    var S = h[y];
                    (S.high ^= C), (S.low ^= A);
                  }
                  for (var D = 0; D < 24; D++) {
                    for (var b = 0; b < 5; b++) {
                      for (var B = 0, P = 0, N = 0; N < 5; N++) {
                        var S = h[b + 5 * N];
                        (B ^= S.high), (P ^= S.low);
                      }
                      var O = m[b];
                      (O.high = B), (O.low = P);
                    }
                    for (var b = 0; b < 5; b++)
                      for (
                        var k = m[(b + 4) % 5],
                          M = m[(b + 1) % 5],
                          G = M.high,
                          R = M.low,
                          B = k.high ^ ((G << 1) | (R >>> 31)),
                          P = k.low ^ ((R << 1) | (G >>> 31)),
                          N = 0;
                        N < 5;
                        N++
                      ) {
                        var S = h[b + 5 * N];
                        (S.high ^= B), (S.low ^= P);
                      }
                    for (var j = 1; j < 25; j++) {
                      var B,
                        P,
                        S = h[j],
                        U = S.high,
                        H = S.low,
                        F = d[j];
                      F < 32
                        ? ((B = (U << F) | (H >>> (32 - F))),
                          (P = (H << F) | (U >>> (32 - F))))
                        : ((B = (H << (F - 32)) | (U >>> (64 - F))),
                          (P = (U << (F - 32)) | (H >>> (64 - F))));
                      var I = m[f[j]];
                      (I.high = B), (I.low = P);
                    }
                    var V = m[0],
                      z = h[0];
                    (V.high = z.high), (V.low = z.low);
                    for (var b = 0; b < 5; b++)
                      for (var N = 0; N < 5; N++) {
                        var j = b + 5 * N,
                          S = h[j],
                          re = m[j],
                          X = m[((b + 1) % 5) + 5 * N],
                          he = m[((b + 2) % 5) + 5 * N];
                        (S.high = re.high ^ (~X.high & he.high)),
                          (S.low = re.low ^ (~X.low & he.low));
                      }
                    var S = h[0],
                      ne = x[D];
                    (S.high ^= ne.high), (S.low ^= ne.low);
                  }
                },
                _doFinalize: function () {
                  var E = this._data,
                    v = E.words;
                  this._nDataBytes * 8;
                  var h = E.sigBytes * 8,
                    p = this.blockSize * 32;
                  (v[h >>> 5] |= 1 << (24 - (h % 32))),
                    (v[((r.ceil((h + 1) / p) * p) >>> 5) - 1] |= 128),
                    (E.sigBytes = v.length * 4),
                    this._process();
                  for (
                    var y = this._state,
                      A = this.cfg.outputLength / 8,
                      C = A / 8,
                      S = [],
                      D = 0;
                    D < C;
                    D++
                  ) {
                    var b = y[D],
                      B = b.high,
                      P = b.low;
                    (B =
                      (((B << 8) | (B >>> 24)) & 16711935) |
                      (((B << 24) | (B >>> 8)) & 4278255360)),
                      (P =
                        (((P << 8) | (P >>> 24)) & 16711935) |
                        (((P << 24) | (P >>> 8)) & 4278255360)),
                      S.push(P),
                      S.push(B);
                  }
                  return new a.init(S, A);
                },
                clone: function () {
                  for (
                    var E = s.clone.call(this),
                      v = (E._state = this._state.slice(0)),
                      h = 0;
                    h < 25;
                    h++
                  )
                    v[h] = v[h].clone();
                  return E;
                },
              }));
              (o.SHA3 = s._createHelper(g)),
                (o.HmacSHA3 = s._createHmacHelper(g));
            })(Math),
            n.SHA3
          );
        });
      })(wc)),
    wc.exports
  );
}
var Sc = { exports: {} },
  vm;
function nD() {
  return (
    vm ||
      ((vm = 1),
      (function (e, t) {
        (function (n, r) {
          e.exports = r(de());
        })(le, function (n) {
          /** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/ return (
            (function (r) {
              var o = n,
                i = o.lib,
                a = i.WordArray,
                s = i.Hasher,
                l = o.algo,
                u = a.create([
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4,
                  13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4,
                  9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8,
                  12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10,
                  14, 1, 3, 8, 11, 6, 15, 13,
                ]),
                c = a.create([
                  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11,
                  3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7,
                  14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15,
                  0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6,
                  2, 13, 14, 0, 3, 9, 11,
                ]),
                d = a.create([
                  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6,
                  8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6,
                  7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15,
                  14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8,
                  13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
                ]),
                f = a.create([
                  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13,
                  15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11,
                  8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14,
                  14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14,
                  6, 8, 13, 6, 5, 15, 13, 11, 11,
                ]),
                x = a.create([
                  0, 1518500249, 1859775393, 2400959708, 2840853838,
                ]),
                m = a.create([
                  1352829926, 1548603684, 1836072691, 2053994217, 0,
                ]),
                g = (l.RIPEMD160 = s.extend({
                  _doReset: function () {
                    this._hash = a.create([
                      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                    ]);
                  },
                  _doProcessBlock: function (C, S) {
                    for (var D = 0; D < 16; D++) {
                      var b = S + D,
                        B = C[b];
                      C[b] =
                        (((B << 8) | (B >>> 24)) & 16711935) |
                        (((B << 24) | (B >>> 8)) & 4278255360);
                    }
                    var P = this._hash.words,
                      N = x.words,
                      O = m.words,
                      k = u.words,
                      M = c.words,
                      G = d.words,
                      R = f.words,
                      j,
                      U,
                      H,
                      F,
                      I,
                      V,
                      z,
                      re,
                      X,
                      he;
                    (V = j = P[0]),
                      (z = U = P[1]),
                      (re = H = P[2]),
                      (X = F = P[3]),
                      (he = I = P[4]);
                    for (var ne, D = 0; D < 80; D += 1)
                      (ne = (j + C[S + k[D]]) | 0),
                        D < 16
                          ? (ne += E(U, H, F) + N[0])
                          : D < 32
                            ? (ne += v(U, H, F) + N[1])
                            : D < 48
                              ? (ne += h(U, H, F) + N[2])
                              : D < 64
                                ? (ne += p(U, H, F) + N[3])
                                : (ne += y(U, H, F) + N[4]),
                        (ne = ne | 0),
                        (ne = A(ne, G[D])),
                        (ne = (ne + I) | 0),
                        (j = I),
                        (I = F),
                        (F = A(H, 10)),
                        (H = U),
                        (U = ne),
                        (ne = (V + C[S + M[D]]) | 0),
                        D < 16
                          ? (ne += y(z, re, X) + O[0])
                          : D < 32
                            ? (ne += p(z, re, X) + O[1])
                            : D < 48
                              ? (ne += h(z, re, X) + O[2])
                              : D < 64
                                ? (ne += v(z, re, X) + O[3])
                                : (ne += E(z, re, X) + O[4]),
                        (ne = ne | 0),
                        (ne = A(ne, R[D])),
                        (ne = (ne + he) | 0),
                        (V = he),
                        (he = X),
                        (X = A(re, 10)),
                        (re = z),
                        (z = ne);
                    (ne = (P[1] + H + X) | 0),
                      (P[1] = (P[2] + F + he) | 0),
                      (P[2] = (P[3] + I + V) | 0),
                      (P[3] = (P[4] + j + z) | 0),
                      (P[4] = (P[0] + U + re) | 0),
                      (P[0] = ne);
                  },
                  _doFinalize: function () {
                    var C = this._data,
                      S = C.words,
                      D = this._nDataBytes * 8,
                      b = C.sigBytes * 8;
                    (S[b >>> 5] |= 128 << (24 - (b % 32))),
                      (S[(((b + 64) >>> 9) << 4) + 14] =
                        (((D << 8) | (D >>> 24)) & 16711935) |
                        (((D << 24) | (D >>> 8)) & 4278255360)),
                      (C.sigBytes = (S.length + 1) * 4),
                      this._process();
                    for (var B = this._hash, P = B.words, N = 0; N < 5; N++) {
                      var O = P[N];
                      P[N] =
                        (((O << 8) | (O >>> 24)) & 16711935) |
                        (((O << 24) | (O >>> 8)) & 4278255360);
                    }
                    return B;
                  },
                  clone: function () {
                    var C = s.clone.call(this);
                    return (C._hash = this._hash.clone()), C;
                  },
                }));
              function E(C, S, D) {
                return C ^ S ^ D;
              }
              function v(C, S, D) {
                return (C & S) | (~C & D);
              }
              function h(C, S, D) {
                return (C | ~S) ^ D;
              }
              function p(C, S, D) {
                return (C & D) | (S & ~D);
              }
              function y(C, S, D) {
                return C ^ (S | ~D);
              }
              function A(C, S) {
                return (C << S) | (C >>> (32 - S));
              }
              (o.RIPEMD160 = s._createHelper(g)),
                (o.HmacRIPEMD160 = s._createHmacHelper(g));
            })(),
            n.RIPEMD160
          );
        });
      })(Sc)),
    Sc.exports
  );
}
var Ac = { exports: {} },
  gm;
function ch() {
  return (
    gm ||
      ((gm = 1),
      (function (e, t) {
        (function (n, r) {
          e.exports = r(de());
        })(le, function (n) {
          (function () {
            var r = n,
              o = r.lib,
              i = o.Base,
              a = r.enc,
              s = a.Utf8,
              l = r.algo;
            l.HMAC = i.extend({
              init: function (u, c) {
                (u = this._hasher = new u.init()),
                  typeof c == "string" && (c = s.parse(c));
                var d = u.blockSize,
                  f = d * 4;
                c.sigBytes > f && (c = u.finalize(c)), c.clamp();
                for (
                  var x = (this._oKey = c.clone()),
                    m = (this._iKey = c.clone()),
                    g = x.words,
                    E = m.words,
                    v = 0;
                  v < d;
                  v++
                )
                  (g[v] ^= 1549556828), (E[v] ^= 909522486);
                (x.sigBytes = m.sigBytes = f), this.reset();
              },
              reset: function () {
                var u = this._hasher;
                u.reset(), u.update(this._iKey);
              },
              update: function (u) {
                return this._hasher.update(u), this;
              },
              finalize: function (u) {
                var c = this._hasher,
                  d = c.finalize(u);
                c.reset();
                var f = c.finalize(this._oKey.clone().concat(d));
                return f;
              },
            });
          })();
        });
      })(Ac)),
    Ac.exports
  );
}
var Dc = { exports: {} },
  ym;
function rD() {
  return (
    ym ||
      ((ym = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), uh(), ch());
        })(le, function (n) {
          return (
            (function () {
              var r = n,
                o = r.lib,
                i = o.Base,
                a = o.WordArray,
                s = r.algo,
                l = s.SHA256,
                u = s.HMAC,
                c = (s.PBKDF2 = i.extend({
                  cfg: i.extend({
                    keySize: 128 / 32,
                    hasher: l,
                    iterations: 25e4,
                  }),
                  init: function (d) {
                    this.cfg = this.cfg.extend(d);
                  },
                  compute: function (d, f) {
                    for (
                      var x = this.cfg,
                        m = u.create(x.hasher, d),
                        g = a.create(),
                        E = a.create([1]),
                        v = g.words,
                        h = E.words,
                        p = x.keySize,
                        y = x.iterations;
                      v.length < p;

                    ) {
                      var A = m.update(f).finalize(E);
                      m.reset();
                      for (
                        var C = A.words, S = C.length, D = A, b = 1;
                        b < y;
                        b++
                      ) {
                        (D = m.finalize(D)), m.reset();
                        for (var B = D.words, P = 0; P < S; P++) C[P] ^= B[P];
                      }
                      g.concat(A), h[0]++;
                    }
                    return (g.sigBytes = p * 4), g;
                  },
                }));
              r.PBKDF2 = function (d, f, x) {
                return c.create(x).compute(d, f);
              };
            })(),
            n.PBKDF2
          );
        });
      })(Dc)),
    Dc.exports
  );
}
var _c = { exports: {} },
  Em;
function _r() {
  return (
    Em ||
      ((Em = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), p2(), ch());
        })(le, function (n) {
          return (
            (function () {
              var r = n,
                o = r.lib,
                i = o.Base,
                a = o.WordArray,
                s = r.algo,
                l = s.MD5,
                u = (s.EvpKDF = i.extend({
                  cfg: i.extend({
                    keySize: 128 / 32,
                    hasher: l,
                    iterations: 1,
                  }),
                  init: function (c) {
                    this.cfg = this.cfg.extend(c);
                  },
                  compute: function (c, d) {
                    for (
                      var f,
                        x = this.cfg,
                        m = x.hasher.create(),
                        g = a.create(),
                        E = g.words,
                        v = x.keySize,
                        h = x.iterations;
                      E.length < v;

                    ) {
                      f && m.update(f),
                        (f = m.update(c).finalize(d)),
                        m.reset();
                      for (var p = 1; p < h; p++)
                        (f = m.finalize(f)), m.reset();
                      g.concat(f);
                    }
                    return (g.sigBytes = v * 4), g;
                  },
                }));
              r.EvpKDF = function (c, d, f) {
                return u.create(f).compute(c, d);
              };
            })(),
            n.EvpKDF
          );
        });
      })(_c)),
    _c.exports
  );
}
var Bc = { exports: {} },
  Cm;
function Qe() {
  return (
    Cm ||
      ((Cm = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), _r());
        })(le, function (n) {
          n.lib.Cipher ||
            (function (r) {
              var o = n,
                i = o.lib,
                a = i.Base,
                s = i.WordArray,
                l = i.BufferedBlockAlgorithm,
                u = o.enc;
              u.Utf8;
              var c = u.Base64,
                d = o.algo,
                f = d.EvpKDF,
                x = (i.Cipher = l.extend({
                  cfg: a.extend(),
                  createEncryptor: function (B, P) {
                    return this.create(this._ENC_XFORM_MODE, B, P);
                  },
                  createDecryptor: function (B, P) {
                    return this.create(this._DEC_XFORM_MODE, B, P);
                  },
                  init: function (B, P, N) {
                    (this.cfg = this.cfg.extend(N)),
                      (this._xformMode = B),
                      (this._key = P),
                      this.reset();
                  },
                  reset: function () {
                    l.reset.call(this), this._doReset();
                  },
                  process: function (B) {
                    return this._append(B), this._process();
                  },
                  finalize: function (B) {
                    B && this._append(B);
                    var P = this._doFinalize();
                    return P;
                  },
                  keySize: 128 / 32,
                  ivSize: 128 / 32,
                  _ENC_XFORM_MODE: 1,
                  _DEC_XFORM_MODE: 2,
                  _createHelper: (function () {
                    function B(P) {
                      return typeof P == "string" ? b : C;
                    }
                    return function (P) {
                      return {
                        encrypt: function (N, O, k) {
                          return B(O).encrypt(P, N, O, k);
                        },
                        decrypt: function (N, O, k) {
                          return B(O).decrypt(P, N, O, k);
                        },
                      };
                    };
                  })(),
                }));
              i.StreamCipher = x.extend({
                _doFinalize: function () {
                  var B = this._process(!0);
                  return B;
                },
                blockSize: 1,
              });
              var m = (o.mode = {}),
                g = (i.BlockCipherMode = a.extend({
                  createEncryptor: function (B, P) {
                    return this.Encryptor.create(B, P);
                  },
                  createDecryptor: function (B, P) {
                    return this.Decryptor.create(B, P);
                  },
                  init: function (B, P) {
                    (this._cipher = B), (this._iv = P);
                  },
                })),
                E = (m.CBC = (function () {
                  var B = g.extend();
                  (B.Encryptor = B.extend({
                    processBlock: function (N, O) {
                      var k = this._cipher,
                        M = k.blockSize;
                      P.call(this, N, O, M),
                        k.encryptBlock(N, O),
                        (this._prevBlock = N.slice(O, O + M));
                    },
                  })),
                    (B.Decryptor = B.extend({
                      processBlock: function (N, O) {
                        var k = this._cipher,
                          M = k.blockSize,
                          G = N.slice(O, O + M);
                        k.decryptBlock(N, O),
                          P.call(this, N, O, M),
                          (this._prevBlock = G);
                      },
                    }));
                  function P(N, O, k) {
                    var M,
                      G = this._iv;
                    G ? ((M = G), (this._iv = r)) : (M = this._prevBlock);
                    for (var R = 0; R < k; R++) N[O + R] ^= M[R];
                  }
                  return B;
                })()),
                v = (o.pad = {}),
                h = (v.Pkcs7 = {
                  pad: function (B, P) {
                    for (
                      var N = P * 4,
                        O = N - (B.sigBytes % N),
                        k = (O << 24) | (O << 16) | (O << 8) | O,
                        M = [],
                        G = 0;
                      G < O;
                      G += 4
                    )
                      M.push(k);
                    var R = s.create(M, O);
                    B.concat(R);
                  },
                  unpad: function (B) {
                    var P = B.words[(B.sigBytes - 1) >>> 2] & 255;
                    B.sigBytes -= P;
                  },
                });
              i.BlockCipher = x.extend({
                cfg: x.cfg.extend({ mode: E, padding: h }),
                reset: function () {
                  var B;
                  x.reset.call(this);
                  var P = this.cfg,
                    N = P.iv,
                    O = P.mode;
                  this._xformMode == this._ENC_XFORM_MODE
                    ? (B = O.createEncryptor)
                    : ((B = O.createDecryptor), (this._minBufferSize = 1)),
                    this._mode && this._mode.__creator == B
                      ? this._mode.init(this, N && N.words)
                      : ((this._mode = B.call(O, this, N && N.words)),
                        (this._mode.__creator = B));
                },
                _doProcessBlock: function (B, P) {
                  this._mode.processBlock(B, P);
                },
                _doFinalize: function () {
                  var B,
                    P = this.cfg.padding;
                  return (
                    this._xformMode == this._ENC_XFORM_MODE
                      ? (P.pad(this._data, this.blockSize),
                        (B = this._process(!0)))
                      : ((B = this._process(!0)), P.unpad(B)),
                    B
                  );
                },
                blockSize: 128 / 32,
              });
              var p = (i.CipherParams = a.extend({
                  init: function (B) {
                    this.mixIn(B);
                  },
                  toString: function (B) {
                    return (B || this.formatter).stringify(this);
                  },
                })),
                y = (o.format = {}),
                A = (y.OpenSSL = {
                  stringify: function (B) {
                    var P,
                      N = B.ciphertext,
                      O = B.salt;
                    return (
                      O
                        ? (P = s
                            .create([1398893684, 1701076831])
                            .concat(O)
                            .concat(N))
                        : (P = N),
                      P.toString(c)
                    );
                  },
                  parse: function (B) {
                    var P,
                      N = c.parse(B),
                      O = N.words;
                    return (
                      O[0] == 1398893684 &&
                        O[1] == 1701076831 &&
                        ((P = s.create(O.slice(2, 4))),
                        O.splice(0, 4),
                        (N.sigBytes -= 16)),
                      p.create({ ciphertext: N, salt: P })
                    );
                  },
                }),
                C = (i.SerializableCipher = a.extend({
                  cfg: a.extend({ format: A }),
                  encrypt: function (B, P, N, O) {
                    O = this.cfg.extend(O);
                    var k = B.createEncryptor(N, O),
                      M = k.finalize(P),
                      G = k.cfg;
                    return p.create({
                      ciphertext: M,
                      key: N,
                      iv: G.iv,
                      algorithm: B,
                      mode: G.mode,
                      padding: G.padding,
                      blockSize: B.blockSize,
                      formatter: O.format,
                    });
                  },
                  decrypt: function (B, P, N, O) {
                    (O = this.cfg.extend(O)), (P = this._parse(P, O.format));
                    var k = B.createDecryptor(N, O).finalize(P.ciphertext);
                    return k;
                  },
                  _parse: function (B, P) {
                    return typeof B == "string" ? P.parse(B, this) : B;
                  },
                })),
                S = (o.kdf = {}),
                D = (S.OpenSSL = {
                  execute: function (B, P, N, O, k) {
                    if ((O || (O = s.random(64 / 8)), k))
                      var M = f
                        .create({ keySize: P + N, hasher: k })
                        .compute(B, O);
                    else var M = f.create({ keySize: P + N }).compute(B, O);
                    var G = s.create(M.words.slice(P), N * 4);
                    return (
                      (M.sigBytes = P * 4), p.create({ key: M, iv: G, salt: O })
                    );
                  },
                }),
                b = (i.PasswordBasedCipher = C.extend({
                  cfg: C.cfg.extend({ kdf: D }),
                  encrypt: function (B, P, N, O) {
                    O = this.cfg.extend(O);
                    var k = O.kdf.execute(
                      N,
                      B.keySize,
                      B.ivSize,
                      O.salt,
                      O.hasher,
                    );
                    O.iv = k.iv;
                    var M = C.encrypt.call(this, B, P, k.key, O);
                    return M.mixIn(k), M;
                  },
                  decrypt: function (B, P, N, O) {
                    (O = this.cfg.extend(O)), (P = this._parse(P, O.format));
                    var k = O.kdf.execute(
                      N,
                      B.keySize,
                      B.ivSize,
                      P.salt,
                      O.hasher,
                    );
                    O.iv = k.iv;
                    var M = C.decrypt.call(this, B, P, k.key, O);
                    return M;
                  },
                }));
            })();
        });
      })(Bc)),
    Bc.exports
  );
}
var Pc = { exports: {} },
  wm;
function oD() {
  return (
    wm ||
      ((wm = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), Qe());
        })(le, function (n) {
          return (
            (n.mode.CFB = (function () {
              var r = n.lib.BlockCipherMode.extend();
              (r.Encryptor = r.extend({
                processBlock: function (i, a) {
                  var s = this._cipher,
                    l = s.blockSize;
                  o.call(this, i, a, l, s),
                    (this._prevBlock = i.slice(a, a + l));
                },
              })),
                (r.Decryptor = r.extend({
                  processBlock: function (i, a) {
                    var s = this._cipher,
                      l = s.blockSize,
                      u = i.slice(a, a + l);
                    o.call(this, i, a, l, s), (this._prevBlock = u);
                  },
                }));
              function o(i, a, s, l) {
                var u,
                  c = this._iv;
                c
                  ? ((u = c.slice(0)), (this._iv = void 0))
                  : (u = this._prevBlock),
                  l.encryptBlock(u, 0);
                for (var d = 0; d < s; d++) i[a + d] ^= u[d];
              }
              return r;
            })()),
            n.mode.CFB
          );
        });
      })(Pc)),
    Pc.exports
  );
}
var bc = { exports: {} },
  Sm;
function iD() {
  return (
    Sm ||
      ((Sm = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), Qe());
        })(le, function (n) {
          return (
            (n.mode.CTR = (function () {
              var r = n.lib.BlockCipherMode.extend(),
                o = (r.Encryptor = r.extend({
                  processBlock: function (i, a) {
                    var s = this._cipher,
                      l = s.blockSize,
                      u = this._iv,
                      c = this._counter;
                    u &&
                      ((c = this._counter = u.slice(0)), (this._iv = void 0));
                    var d = c.slice(0);
                    s.encryptBlock(d, 0), (c[l - 1] = (c[l - 1] + 1) | 0);
                    for (var f = 0; f < l; f++) i[a + f] ^= d[f];
                  },
                }));
              return (r.Decryptor = o), r;
            })()),
            n.mode.CTR
          );
        });
      })(bc)),
    bc.exports
  );
}
var Fc = { exports: {} },
  Am;
function aD() {
  return (
    Am ||
      ((Am = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), Qe());
        })(le, function (n) {
          /** @preserve
           * Counter block mode compatible with  Dr Brian Gladman fileenc.c
           * derived from CryptoJS.mode.CTR
           * Jan Hruby jhruby.web@gmail.com
           */ return (
            (n.mode.CTRGladman = (function () {
              var r = n.lib.BlockCipherMode.extend();
              function o(s) {
                if (((s >> 24) & 255) === 255) {
                  var l = (s >> 16) & 255,
                    u = (s >> 8) & 255,
                    c = s & 255;
                  l === 255
                    ? ((l = 0),
                      u === 255 ? ((u = 0), c === 255 ? (c = 0) : ++c) : ++u)
                    : ++l,
                    (s = 0),
                    (s += l << 16),
                    (s += u << 8),
                    (s += c);
                } else s += 1 << 24;
                return s;
              }
              function i(s) {
                return (s[0] = o(s[0])) === 0 && (s[1] = o(s[1])), s;
              }
              var a = (r.Encryptor = r.extend({
                processBlock: function (s, l) {
                  var u = this._cipher,
                    c = u.blockSize,
                    d = this._iv,
                    f = this._counter;
                  d && ((f = this._counter = d.slice(0)), (this._iv = void 0)),
                    i(f);
                  var x = f.slice(0);
                  u.encryptBlock(x, 0);
                  for (var m = 0; m < c; m++) s[l + m] ^= x[m];
                },
              }));
              return (r.Decryptor = a), r;
            })()),
            n.mode.CTRGladman
          );
        });
      })(Fc)),
    Fc.exports
  );
}
var kc = { exports: {} },
  Dm;
function sD() {
  return (
    Dm ||
      ((Dm = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), Qe());
        })(le, function (n) {
          return (
            (n.mode.OFB = (function () {
              var r = n.lib.BlockCipherMode.extend(),
                o = (r.Encryptor = r.extend({
                  processBlock: function (i, a) {
                    var s = this._cipher,
                      l = s.blockSize,
                      u = this._iv,
                      c = this._keystream;
                    u &&
                      ((c = this._keystream = u.slice(0)), (this._iv = void 0)),
                      s.encryptBlock(c, 0);
                    for (var d = 0; d < l; d++) i[a + d] ^= c[d];
                  },
                }));
              return (r.Decryptor = o), r;
            })()),
            n.mode.OFB
          );
        });
      })(kc)),
    kc.exports
  );
}
var Rc = { exports: {} },
  _m;
function lD() {
  return (
    _m ||
      ((_m = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), Qe());
        })(le, function (n) {
          return (
            (n.mode.ECB = (function () {
              var r = n.lib.BlockCipherMode.extend();
              return (
                (r.Encryptor = r.extend({
                  processBlock: function (o, i) {
                    this._cipher.encryptBlock(o, i);
                  },
                })),
                (r.Decryptor = r.extend({
                  processBlock: function (o, i) {
                    this._cipher.decryptBlock(o, i);
                  },
                })),
                r
              );
            })()),
            n.mode.ECB
          );
        });
      })(Rc)),
    Rc.exports
  );
}
var Tc = { exports: {} },
  Bm;
function uD() {
  return (
    Bm ||
      ((Bm = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), Qe());
        })(le, function (n) {
          return (
            (n.pad.AnsiX923 = {
              pad: function (r, o) {
                var i = r.sigBytes,
                  a = o * 4,
                  s = a - (i % a),
                  l = i + s - 1;
                r.clamp(),
                  (r.words[l >>> 2] |= s << (24 - (l % 4) * 8)),
                  (r.sigBytes += s);
              },
              unpad: function (r) {
                var o = r.words[(r.sigBytes - 1) >>> 2] & 255;
                r.sigBytes -= o;
              },
            }),
            n.pad.Ansix923
          );
        });
      })(Tc)),
    Tc.exports
  );
}
var Nc = { exports: {} },
  Pm;
function cD() {
  return (
    Pm ||
      ((Pm = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), Qe());
        })(le, function (n) {
          return (
            (n.pad.Iso10126 = {
              pad: function (r, o) {
                var i = o * 4,
                  a = i - (r.sigBytes % i);
                r.concat(n.lib.WordArray.random(a - 1)).concat(
                  n.lib.WordArray.create([a << 24], 1),
                );
              },
              unpad: function (r) {
                var o = r.words[(r.sigBytes - 1) >>> 2] & 255;
                r.sigBytes -= o;
              },
            }),
            n.pad.Iso10126
          );
        });
      })(Nc)),
    Nc.exports
  );
}
var jc = { exports: {} },
  bm;
function fD() {
  return (
    bm ||
      ((bm = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), Qe());
        })(le, function (n) {
          return (
            (n.pad.Iso97971 = {
              pad: function (r, o) {
                r.concat(n.lib.WordArray.create([2147483648], 1)),
                  n.pad.ZeroPadding.pad(r, o);
              },
              unpad: function (r) {
                n.pad.ZeroPadding.unpad(r), r.sigBytes--;
              },
            }),
            n.pad.Iso97971
          );
        });
      })(jc)),
    jc.exports
  );
}
var Oc = { exports: {} },
  Fm;
function dD() {
  return (
    Fm ||
      ((Fm = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), Qe());
        })(le, function (n) {
          return (
            (n.pad.ZeroPadding = {
              pad: function (r, o) {
                var i = o * 4;
                r.clamp(), (r.sigBytes += i - (r.sigBytes % i || i));
              },
              unpad: function (r) {
                for (
                  var o = r.words, i = r.sigBytes - 1, i = r.sigBytes - 1;
                  i >= 0;
                  i--
                )
                  if ((o[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) {
                    r.sigBytes = i + 1;
                    break;
                  }
              },
            }),
            n.pad.ZeroPadding
          );
        });
      })(Oc)),
    Oc.exports
  );
}
var Mc = { exports: {} },
  km;
function hD() {
  return (
    km ||
      ((km = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), Qe());
        })(le, function (n) {
          return (
            (n.pad.NoPadding = { pad: function () {}, unpad: function () {} }),
            n.pad.NoPadding
          );
        });
      })(Mc)),
    Mc.exports
  );
}
var Lc = { exports: {} },
  Rm;
function pD() {
  return (
    Rm ||
      ((Rm = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), Qe());
        })(le, function (n) {
          return (
            (function (r) {
              var o = n,
                i = o.lib,
                a = i.CipherParams,
                s = o.enc,
                l = s.Hex,
                u = o.format;
              u.Hex = {
                stringify: function (c) {
                  return c.ciphertext.toString(l);
                },
                parse: function (c) {
                  var d = l.parse(c);
                  return a.create({ ciphertext: d });
                },
              };
            })(),
            n.format.Hex
          );
        });
      })(Lc)),
    Lc.exports
  );
}
var Ic = { exports: {} },
  Tm;
function xD() {
  return (
    Tm ||
      ((Tm = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), po(), xo(), _r(), Qe());
        })(le, function (n) {
          return (
            (function () {
              var r = n,
                o = r.lib,
                i = o.BlockCipher,
                a = r.algo,
                s = [],
                l = [],
                u = [],
                c = [],
                d = [],
                f = [],
                x = [],
                m = [],
                g = [],
                E = [];
              (function () {
                for (var p = [], y = 0; y < 256; y++)
                  y < 128 ? (p[y] = y << 1) : (p[y] = (y << 1) ^ 283);
                for (var A = 0, C = 0, y = 0; y < 256; y++) {
                  var S = C ^ (C << 1) ^ (C << 2) ^ (C << 3) ^ (C << 4);
                  (S = (S >>> 8) ^ (S & 255) ^ 99), (s[A] = S), (l[S] = A);
                  var D = p[A],
                    b = p[D],
                    B = p[b],
                    P = (p[S] * 257) ^ (S * 16843008);
                  (u[A] = (P << 24) | (P >>> 8)),
                    (c[A] = (P << 16) | (P >>> 16)),
                    (d[A] = (P << 8) | (P >>> 24)),
                    (f[A] = P);
                  var P =
                    (B * 16843009) ^ (b * 65537) ^ (D * 257) ^ (A * 16843008);
                  (x[S] = (P << 24) | (P >>> 8)),
                    (m[S] = (P << 16) | (P >>> 16)),
                    (g[S] = (P << 8) | (P >>> 24)),
                    (E[S] = P),
                    A
                      ? ((A = D ^ p[p[p[B ^ D]]]), (C ^= p[p[C]]))
                      : (A = C = 1);
                }
              })();
              var v = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                h = (a.AES = i.extend({
                  _doReset: function () {
                    var p;
                    if (!(this._nRounds && this._keyPriorReset === this._key)) {
                      for (
                        var y = (this._keyPriorReset = this._key),
                          A = y.words,
                          C = y.sigBytes / 4,
                          S = (this._nRounds = C + 6),
                          D = (S + 1) * 4,
                          b = (this._keySchedule = []),
                          B = 0;
                        B < D;
                        B++
                      )
                        B < C
                          ? (b[B] = A[B])
                          : ((p = b[B - 1]),
                            B % C
                              ? C > 6 &&
                                B % C == 4 &&
                                (p =
                                  (s[p >>> 24] << 24) |
                                  (s[(p >>> 16) & 255] << 16) |
                                  (s[(p >>> 8) & 255] << 8) |
                                  s[p & 255])
                              : ((p = (p << 8) | (p >>> 24)),
                                (p =
                                  (s[p >>> 24] << 24) |
                                  (s[(p >>> 16) & 255] << 16) |
                                  (s[(p >>> 8) & 255] << 8) |
                                  s[p & 255]),
                                (p ^= v[(B / C) | 0] << 24)),
                            (b[B] = b[B - C] ^ p));
                      for (
                        var P = (this._invKeySchedule = []), N = 0;
                        N < D;
                        N++
                      ) {
                        var B = D - N;
                        if (N % 4) var p = b[B];
                        else var p = b[B - 4];
                        N < 4 || B <= 4
                          ? (P[N] = p)
                          : (P[N] =
                              x[s[p >>> 24]] ^
                              m[s[(p >>> 16) & 255]] ^
                              g[s[(p >>> 8) & 255]] ^
                              E[s[p & 255]]);
                      }
                    }
                  },
                  encryptBlock: function (p, y) {
                    this._doCryptBlock(p, y, this._keySchedule, u, c, d, f, s);
                  },
                  decryptBlock: function (p, y) {
                    var A = p[y + 1];
                    (p[y + 1] = p[y + 3]),
                      (p[y + 3] = A),
                      this._doCryptBlock(
                        p,
                        y,
                        this._invKeySchedule,
                        x,
                        m,
                        g,
                        E,
                        l,
                      );
                    var A = p[y + 1];
                    (p[y + 1] = p[y + 3]), (p[y + 3] = A);
                  },
                  _doCryptBlock: function (p, y, A, C, S, D, b, B) {
                    for (
                      var P = this._nRounds,
                        N = p[y] ^ A[0],
                        O = p[y + 1] ^ A[1],
                        k = p[y + 2] ^ A[2],
                        M = p[y + 3] ^ A[3],
                        G = 4,
                        R = 1;
                      R < P;
                      R++
                    ) {
                      var j =
                          C[N >>> 24] ^
                          S[(O >>> 16) & 255] ^
                          D[(k >>> 8) & 255] ^
                          b[M & 255] ^
                          A[G++],
                        U =
                          C[O >>> 24] ^
                          S[(k >>> 16) & 255] ^
                          D[(M >>> 8) & 255] ^
                          b[N & 255] ^
                          A[G++],
                        H =
                          C[k >>> 24] ^
                          S[(M >>> 16) & 255] ^
                          D[(N >>> 8) & 255] ^
                          b[O & 255] ^
                          A[G++],
                        F =
                          C[M >>> 24] ^
                          S[(N >>> 16) & 255] ^
                          D[(O >>> 8) & 255] ^
                          b[k & 255] ^
                          A[G++];
                      (N = j), (O = U), (k = H), (M = F);
                    }
                    var j =
                        ((B[N >>> 24] << 24) |
                          (B[(O >>> 16) & 255] << 16) |
                          (B[(k >>> 8) & 255] << 8) |
                          B[M & 255]) ^
                        A[G++],
                      U =
                        ((B[O >>> 24] << 24) |
                          (B[(k >>> 16) & 255] << 16) |
                          (B[(M >>> 8) & 255] << 8) |
                          B[N & 255]) ^
                        A[G++],
                      H =
                        ((B[k >>> 24] << 24) |
                          (B[(M >>> 16) & 255] << 16) |
                          (B[(N >>> 8) & 255] << 8) |
                          B[O & 255]) ^
                        A[G++],
                      F =
                        ((B[M >>> 24] << 24) |
                          (B[(N >>> 16) & 255] << 16) |
                          (B[(O >>> 8) & 255] << 8) |
                          B[k & 255]) ^
                        A[G++];
                    (p[y] = j), (p[y + 1] = U), (p[y + 2] = H), (p[y + 3] = F);
                  },
                  keySize: 256 / 32,
                }));
              r.AES = i._createHelper(h);
            })(),
            n.AES
          );
        });
      })(Ic)),
    Ic.exports
  );
}
var zc = { exports: {} },
  Nm;
function mD() {
  return (
    Nm ||
      ((Nm = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), po(), xo(), _r(), Qe());
        })(le, function (n) {
          return (
            (function () {
              var r = n,
                o = r.lib,
                i = o.WordArray,
                a = o.BlockCipher,
                s = r.algo,
                l = [
                  57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2,
                  59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39,
                  31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37,
                  29, 21, 13, 5, 28, 20, 12, 4,
                ],
                u = [
                  14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26,
                  8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51,
                  45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32,
                ],
                c = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
                d = [
                  {
                    0: 8421888,
                    268435456: 32768,
                    536870912: 8421378,
                    805306368: 2,
                    1073741824: 512,
                    1342177280: 8421890,
                    1610612736: 8389122,
                    1879048192: 8388608,
                    2147483648: 514,
                    2415919104: 8389120,
                    2684354560: 33280,
                    2952790016: 8421376,
                    3221225472: 32770,
                    3489660928: 8388610,
                    3758096384: 0,
                    4026531840: 33282,
                    134217728: 0,
                    402653184: 8421890,
                    671088640: 33282,
                    939524096: 32768,
                    1207959552: 8421888,
                    1476395008: 512,
                    1744830464: 8421378,
                    2013265920: 2,
                    2281701376: 8389120,
                    2550136832: 33280,
                    2818572288: 8421376,
                    3087007744: 8389122,
                    3355443200: 8388610,
                    3623878656: 32770,
                    3892314112: 514,
                    4160749568: 8388608,
                    1: 32768,
                    268435457: 2,
                    536870913: 8421888,
                    805306369: 8388608,
                    1073741825: 8421378,
                    1342177281: 33280,
                    1610612737: 512,
                    1879048193: 8389122,
                    2147483649: 8421890,
                    2415919105: 8421376,
                    2684354561: 8388610,
                    2952790017: 33282,
                    3221225473: 514,
                    3489660929: 8389120,
                    3758096385: 32770,
                    4026531841: 0,
                    134217729: 8421890,
                    402653185: 8421376,
                    671088641: 8388608,
                    939524097: 512,
                    1207959553: 32768,
                    1476395009: 8388610,
                    1744830465: 2,
                    2013265921: 33282,
                    2281701377: 32770,
                    2550136833: 8389122,
                    2818572289: 514,
                    3087007745: 8421888,
                    3355443201: 8389120,
                    3623878657: 0,
                    3892314113: 33280,
                    4160749569: 8421378,
                  },
                  {
                    0: 1074282512,
                    16777216: 16384,
                    33554432: 524288,
                    50331648: 1074266128,
                    67108864: 1073741840,
                    83886080: 1074282496,
                    100663296: 1073758208,
                    117440512: 16,
                    134217728: 540672,
                    150994944: 1073758224,
                    167772160: 1073741824,
                    184549376: 540688,
                    201326592: 524304,
                    218103808: 0,
                    234881024: 16400,
                    251658240: 1074266112,
                    8388608: 1073758208,
                    25165824: 540688,
                    41943040: 16,
                    58720256: 1073758224,
                    75497472: 1074282512,
                    92274688: 1073741824,
                    109051904: 524288,
                    125829120: 1074266128,
                    142606336: 524304,
                    159383552: 0,
                    176160768: 16384,
                    192937984: 1074266112,
                    209715200: 1073741840,
                    226492416: 540672,
                    243269632: 1074282496,
                    260046848: 16400,
                    268435456: 0,
                    285212672: 1074266128,
                    301989888: 1073758224,
                    318767104: 1074282496,
                    335544320: 1074266112,
                    352321536: 16,
                    369098752: 540688,
                    385875968: 16384,
                    402653184: 16400,
                    419430400: 524288,
                    436207616: 524304,
                    452984832: 1073741840,
                    469762048: 540672,
                    486539264: 1073758208,
                    503316480: 1073741824,
                    520093696: 1074282512,
                    276824064: 540688,
                    293601280: 524288,
                    310378496: 1074266112,
                    327155712: 16384,
                    343932928: 1073758208,
                    360710144: 1074282512,
                    377487360: 16,
                    394264576: 1073741824,
                    411041792: 1074282496,
                    427819008: 1073741840,
                    444596224: 1073758224,
                    461373440: 524304,
                    478150656: 0,
                    494927872: 16400,
                    511705088: 1074266128,
                    528482304: 540672,
                  },
                  {
                    0: 260,
                    1048576: 0,
                    2097152: 67109120,
                    3145728: 65796,
                    4194304: 65540,
                    5242880: 67108868,
                    6291456: 67174660,
                    7340032: 67174400,
                    8388608: 67108864,
                    9437184: 67174656,
                    10485760: 65792,
                    11534336: 67174404,
                    12582912: 67109124,
                    13631488: 65536,
                    14680064: 4,
                    15728640: 256,
                    524288: 67174656,
                    1572864: 67174404,
                    2621440: 0,
                    3670016: 67109120,
                    4718592: 67108868,
                    5767168: 65536,
                    6815744: 65540,
                    7864320: 260,
                    8912896: 4,
                    9961472: 256,
                    11010048: 67174400,
                    12058624: 65796,
                    13107200: 65792,
                    14155776: 67109124,
                    15204352: 67174660,
                    16252928: 67108864,
                    16777216: 67174656,
                    17825792: 65540,
                    18874368: 65536,
                    19922944: 67109120,
                    20971520: 256,
                    22020096: 67174660,
                    23068672: 67108868,
                    24117248: 0,
                    25165824: 67109124,
                    26214400: 67108864,
                    27262976: 4,
                    28311552: 65792,
                    29360128: 67174400,
                    30408704: 260,
                    31457280: 65796,
                    32505856: 67174404,
                    17301504: 67108864,
                    18350080: 260,
                    19398656: 67174656,
                    20447232: 0,
                    21495808: 65540,
                    22544384: 67109120,
                    23592960: 256,
                    24641536: 67174404,
                    25690112: 65536,
                    26738688: 67174660,
                    27787264: 65796,
                    28835840: 67108868,
                    29884416: 67109124,
                    30932992: 67174400,
                    31981568: 4,
                    33030144: 65792,
                  },
                  {
                    0: 2151682048,
                    65536: 2147487808,
                    131072: 4198464,
                    196608: 2151677952,
                    262144: 0,
                    327680: 4198400,
                    393216: 2147483712,
                    458752: 4194368,
                    524288: 2147483648,
                    589824: 4194304,
                    655360: 64,
                    720896: 2147487744,
                    786432: 2151678016,
                    851968: 4160,
                    917504: 4096,
                    983040: 2151682112,
                    32768: 2147487808,
                    98304: 64,
                    163840: 2151678016,
                    229376: 2147487744,
                    294912: 4198400,
                    360448: 2151682112,
                    425984: 0,
                    491520: 2151677952,
                    557056: 4096,
                    622592: 2151682048,
                    688128: 4194304,
                    753664: 4160,
                    819200: 2147483648,
                    884736: 4194368,
                    950272: 4198464,
                    1015808: 2147483712,
                    1048576: 4194368,
                    1114112: 4198400,
                    1179648: 2147483712,
                    1245184: 0,
                    1310720: 4160,
                    1376256: 2151678016,
                    1441792: 2151682048,
                    1507328: 2147487808,
                    1572864: 2151682112,
                    1638400: 2147483648,
                    1703936: 2151677952,
                    1769472: 4198464,
                    1835008: 2147487744,
                    1900544: 4194304,
                    1966080: 64,
                    2031616: 4096,
                    1081344: 2151677952,
                    1146880: 2151682112,
                    1212416: 0,
                    1277952: 4198400,
                    1343488: 4194368,
                    1409024: 2147483648,
                    1474560: 2147487808,
                    1540096: 64,
                    1605632: 2147483712,
                    1671168: 4096,
                    1736704: 2147487744,
                    1802240: 2151678016,
                    1867776: 4160,
                    1933312: 2151682048,
                    1998848: 4194304,
                    2064384: 4198464,
                  },
                  {
                    0: 128,
                    4096: 17039360,
                    8192: 262144,
                    12288: 536870912,
                    16384: 537133184,
                    20480: 16777344,
                    24576: 553648256,
                    28672: 262272,
                    32768: 16777216,
                    36864: 537133056,
                    40960: 536871040,
                    45056: 553910400,
                    49152: 553910272,
                    53248: 0,
                    57344: 17039488,
                    61440: 553648128,
                    2048: 17039488,
                    6144: 553648256,
                    10240: 128,
                    14336: 17039360,
                    18432: 262144,
                    22528: 537133184,
                    26624: 553910272,
                    30720: 536870912,
                    34816: 537133056,
                    38912: 0,
                    43008: 553910400,
                    47104: 16777344,
                    51200: 536871040,
                    55296: 553648128,
                    59392: 16777216,
                    63488: 262272,
                    65536: 262144,
                    69632: 128,
                    73728: 536870912,
                    77824: 553648256,
                    81920: 16777344,
                    86016: 553910272,
                    90112: 537133184,
                    94208: 16777216,
                    98304: 553910400,
                    102400: 553648128,
                    106496: 17039360,
                    110592: 537133056,
                    114688: 262272,
                    118784: 536871040,
                    122880: 0,
                    126976: 17039488,
                    67584: 553648256,
                    71680: 16777216,
                    75776: 17039360,
                    79872: 537133184,
                    83968: 536870912,
                    88064: 17039488,
                    92160: 128,
                    96256: 553910272,
                    100352: 262272,
                    104448: 553910400,
                    108544: 0,
                    112640: 553648128,
                    116736: 16777344,
                    120832: 262144,
                    124928: 537133056,
                    129024: 536871040,
                  },
                  {
                    0: 268435464,
                    256: 8192,
                    512: 270532608,
                    768: 270540808,
                    1024: 268443648,
                    1280: 2097152,
                    1536: 2097160,
                    1792: 268435456,
                    2048: 0,
                    2304: 268443656,
                    2560: 2105344,
                    2816: 8,
                    3072: 270532616,
                    3328: 2105352,
                    3584: 8200,
                    3840: 270540800,
                    128: 270532608,
                    384: 270540808,
                    640: 8,
                    896: 2097152,
                    1152: 2105352,
                    1408: 268435464,
                    1664: 268443648,
                    1920: 8200,
                    2176: 2097160,
                    2432: 8192,
                    2688: 268443656,
                    2944: 270532616,
                    3200: 0,
                    3456: 270540800,
                    3712: 2105344,
                    3968: 268435456,
                    4096: 268443648,
                    4352: 270532616,
                    4608: 270540808,
                    4864: 8200,
                    5120: 2097152,
                    5376: 268435456,
                    5632: 268435464,
                    5888: 2105344,
                    6144: 2105352,
                    6400: 0,
                    6656: 8,
                    6912: 270532608,
                    7168: 8192,
                    7424: 268443656,
                    7680: 270540800,
                    7936: 2097160,
                    4224: 8,
                    4480: 2105344,
                    4736: 2097152,
                    4992: 268435464,
                    5248: 268443648,
                    5504: 8200,
                    5760: 270540808,
                    6016: 270532608,
                    6272: 270540800,
                    6528: 270532616,
                    6784: 8192,
                    7040: 2105352,
                    7296: 2097160,
                    7552: 0,
                    7808: 268435456,
                    8064: 268443656,
                  },
                  {
                    0: 1048576,
                    16: 33555457,
                    32: 1024,
                    48: 1049601,
                    64: 34604033,
                    80: 0,
                    96: 1,
                    112: 34603009,
                    128: 33555456,
                    144: 1048577,
                    160: 33554433,
                    176: 34604032,
                    192: 34603008,
                    208: 1025,
                    224: 1049600,
                    240: 33554432,
                    8: 34603009,
                    24: 0,
                    40: 33555457,
                    56: 34604032,
                    72: 1048576,
                    88: 33554433,
                    104: 33554432,
                    120: 1025,
                    136: 1049601,
                    152: 33555456,
                    168: 34603008,
                    184: 1048577,
                    200: 1024,
                    216: 34604033,
                    232: 1,
                    248: 1049600,
                    256: 33554432,
                    272: 1048576,
                    288: 33555457,
                    304: 34603009,
                    320: 1048577,
                    336: 33555456,
                    352: 34604032,
                    368: 1049601,
                    384: 1025,
                    400: 34604033,
                    416: 1049600,
                    432: 1,
                    448: 0,
                    464: 34603008,
                    480: 33554433,
                    496: 1024,
                    264: 1049600,
                    280: 33555457,
                    296: 34603009,
                    312: 1,
                    328: 33554432,
                    344: 1048576,
                    360: 1025,
                    376: 34604032,
                    392: 33554433,
                    408: 34603008,
                    424: 0,
                    440: 34604033,
                    456: 1049601,
                    472: 1024,
                    488: 33555456,
                    504: 1048577,
                  },
                  {
                    0: 134219808,
                    1: 131072,
                    2: 134217728,
                    3: 32,
                    4: 131104,
                    5: 134350880,
                    6: 134350848,
                    7: 2048,
                    8: 134348800,
                    9: 134219776,
                    10: 133120,
                    11: 134348832,
                    12: 2080,
                    13: 0,
                    14: 134217760,
                    15: 133152,
                    2147483648: 2048,
                    2147483649: 134350880,
                    2147483650: 134219808,
                    2147483651: 134217728,
                    2147483652: 134348800,
                    2147483653: 133120,
                    2147483654: 133152,
                    2147483655: 32,
                    2147483656: 134217760,
                    2147483657: 2080,
                    2147483658: 131104,
                    2147483659: 134350848,
                    2147483660: 0,
                    2147483661: 134348832,
                    2147483662: 134219776,
                    2147483663: 131072,
                    16: 133152,
                    17: 134350848,
                    18: 32,
                    19: 2048,
                    20: 134219776,
                    21: 134217760,
                    22: 134348832,
                    23: 131072,
                    24: 0,
                    25: 131104,
                    26: 134348800,
                    27: 134219808,
                    28: 134350880,
                    29: 133120,
                    30: 2080,
                    31: 134217728,
                    2147483664: 131072,
                    2147483665: 2048,
                    2147483666: 134348832,
                    2147483667: 133152,
                    2147483668: 32,
                    2147483669: 134348800,
                    2147483670: 134217728,
                    2147483671: 134219808,
                    2147483672: 134350880,
                    2147483673: 134217760,
                    2147483674: 134219776,
                    2147483675: 0,
                    2147483676: 133120,
                    2147483677: 2080,
                    2147483678: 131104,
                    2147483679: 134350848,
                  },
                ],
                f = [
                  4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504,
                  2147483679,
                ],
                x = (s.DES = a.extend({
                  _doReset: function () {
                    for (
                      var v = this._key, h = v.words, p = [], y = 0;
                      y < 56;
                      y++
                    ) {
                      var A = l[y] - 1;
                      p[y] = (h[A >>> 5] >>> (31 - (A % 32))) & 1;
                    }
                    for (var C = (this._subKeys = []), S = 0; S < 16; S++) {
                      for (var D = (C[S] = []), b = c[S], y = 0; y < 24; y++)
                        (D[(y / 6) | 0] |=
                          p[(u[y] - 1 + b) % 28] << (31 - (y % 6))),
                          (D[4 + ((y / 6) | 0)] |=
                            p[28 + ((u[y + 24] - 1 + b) % 28)] <<
                            (31 - (y % 6)));
                      D[0] = (D[0] << 1) | (D[0] >>> 31);
                      for (var y = 1; y < 7; y++)
                        D[y] = D[y] >>> ((y - 1) * 4 + 3);
                      D[7] = (D[7] << 5) | (D[7] >>> 27);
                    }
                    for (var B = (this._invSubKeys = []), y = 0; y < 16; y++)
                      B[y] = C[15 - y];
                  },
                  encryptBlock: function (v, h) {
                    this._doCryptBlock(v, h, this._subKeys);
                  },
                  decryptBlock: function (v, h) {
                    this._doCryptBlock(v, h, this._invSubKeys);
                  },
                  _doCryptBlock: function (v, h, p) {
                    (this._lBlock = v[h]),
                      (this._rBlock = v[h + 1]),
                      m.call(this, 4, 252645135),
                      m.call(this, 16, 65535),
                      g.call(this, 2, 858993459),
                      g.call(this, 8, 16711935),
                      m.call(this, 1, 1431655765);
                    for (var y = 0; y < 16; y++) {
                      for (
                        var A = p[y],
                          C = this._lBlock,
                          S = this._rBlock,
                          D = 0,
                          b = 0;
                        b < 8;
                        b++
                      )
                        D |= d[b][((S ^ A[b]) & f[b]) >>> 0];
                      (this._lBlock = S), (this._rBlock = C ^ D);
                    }
                    var B = this._lBlock;
                    (this._lBlock = this._rBlock),
                      (this._rBlock = B),
                      m.call(this, 1, 1431655765),
                      g.call(this, 8, 16711935),
                      g.call(this, 2, 858993459),
                      m.call(this, 16, 65535),
                      m.call(this, 4, 252645135),
                      (v[h] = this._lBlock),
                      (v[h + 1] = this._rBlock);
                  },
                  keySize: 64 / 32,
                  ivSize: 64 / 32,
                  blockSize: 64 / 32,
                }));
              function m(v, h) {
                var p = ((this._lBlock >>> v) ^ this._rBlock) & h;
                (this._rBlock ^= p), (this._lBlock ^= p << v);
              }
              function g(v, h) {
                var p = ((this._rBlock >>> v) ^ this._lBlock) & h;
                (this._lBlock ^= p), (this._rBlock ^= p << v);
              }
              r.DES = a._createHelper(x);
              var E = (s.TripleDES = a.extend({
                _doReset: function () {
                  var v = this._key,
                    h = v.words;
                  if (h.length !== 2 && h.length !== 4 && h.length < 6)
                    throw new Error(
                      "Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.",
                    );
                  var p = h.slice(0, 2),
                    y = h.length < 4 ? h.slice(0, 2) : h.slice(2, 4),
                    A = h.length < 6 ? h.slice(0, 2) : h.slice(4, 6);
                  (this._des1 = x.createEncryptor(i.create(p))),
                    (this._des2 = x.createEncryptor(i.create(y))),
                    (this._des3 = x.createEncryptor(i.create(A)));
                },
                encryptBlock: function (v, h) {
                  this._des1.encryptBlock(v, h),
                    this._des2.decryptBlock(v, h),
                    this._des3.encryptBlock(v, h);
                },
                decryptBlock: function (v, h) {
                  this._des3.decryptBlock(v, h),
                    this._des2.encryptBlock(v, h),
                    this._des1.decryptBlock(v, h);
                },
                keySize: 192 / 32,
                ivSize: 64 / 32,
                blockSize: 64 / 32,
              }));
              r.TripleDES = a._createHelper(E);
            })(),
            n.TripleDES
          );
        });
      })(zc)),
    zc.exports
  );
}
var $c = { exports: {} },
  jm;
function vD() {
  return (
    jm ||
      ((jm = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), po(), xo(), _r(), Qe());
        })(le, function (n) {
          return (
            (function () {
              var r = n,
                o = r.lib,
                i = o.StreamCipher,
                a = r.algo,
                s = (a.RC4 = i.extend({
                  _doReset: function () {
                    for (
                      var c = this._key,
                        d = c.words,
                        f = c.sigBytes,
                        x = (this._S = []),
                        m = 0;
                      m < 256;
                      m++
                    )
                      x[m] = m;
                    for (var m = 0, g = 0; m < 256; m++) {
                      var E = m % f,
                        v = (d[E >>> 2] >>> (24 - (E % 4) * 8)) & 255;
                      g = (g + x[m] + v) % 256;
                      var h = x[m];
                      (x[m] = x[g]), (x[g] = h);
                    }
                    this._i = this._j = 0;
                  },
                  _doProcessBlock: function (c, d) {
                    c[d] ^= l.call(this);
                  },
                  keySize: 256 / 32,
                  ivSize: 0,
                }));
              function l() {
                for (
                  var c = this._S, d = this._i, f = this._j, x = 0, m = 0;
                  m < 4;
                  m++
                ) {
                  (d = (d + 1) % 256), (f = (f + c[d]) % 256);
                  var g = c[d];
                  (c[d] = c[f]),
                    (c[f] = g),
                    (x |= c[(c[d] + c[f]) % 256] << (24 - m * 8));
                }
                return (this._i = d), (this._j = f), x;
              }
              r.RC4 = i._createHelper(s);
              var u = (a.RC4Drop = s.extend({
                cfg: s.cfg.extend({ drop: 192 }),
                _doReset: function () {
                  s._doReset.call(this);
                  for (var c = this.cfg.drop; c > 0; c--) l.call(this);
                },
              }));
              r.RC4Drop = i._createHelper(u);
            })(),
            n.RC4
          );
        });
      })($c)),
    $c.exports
  );
}
var Vc = { exports: {} },
  Om;
function gD() {
  return (
    Om ||
      ((Om = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), po(), xo(), _r(), Qe());
        })(le, function (n) {
          return (
            (function () {
              var r = n,
                o = r.lib,
                i = o.StreamCipher,
                a = r.algo,
                s = [],
                l = [],
                u = [],
                c = (a.Rabbit = i.extend({
                  _doReset: function () {
                    for (
                      var f = this._key.words, x = this.cfg.iv, m = 0;
                      m < 4;
                      m++
                    )
                      f[m] =
                        (((f[m] << 8) | (f[m] >>> 24)) & 16711935) |
                        (((f[m] << 24) | (f[m] >>> 8)) & 4278255360);
                    var g = (this._X = [
                        f[0],
                        (f[3] << 16) | (f[2] >>> 16),
                        f[1],
                        (f[0] << 16) | (f[3] >>> 16),
                        f[2],
                        (f[1] << 16) | (f[0] >>> 16),
                        f[3],
                        (f[2] << 16) | (f[1] >>> 16),
                      ]),
                      E = (this._C = [
                        (f[2] << 16) | (f[2] >>> 16),
                        (f[0] & 4294901760) | (f[1] & 65535),
                        (f[3] << 16) | (f[3] >>> 16),
                        (f[1] & 4294901760) | (f[2] & 65535),
                        (f[0] << 16) | (f[0] >>> 16),
                        (f[2] & 4294901760) | (f[3] & 65535),
                        (f[1] << 16) | (f[1] >>> 16),
                        (f[3] & 4294901760) | (f[0] & 65535),
                      ]);
                    this._b = 0;
                    for (var m = 0; m < 4; m++) d.call(this);
                    for (var m = 0; m < 8; m++) E[m] ^= g[(m + 4) & 7];
                    if (x) {
                      var v = x.words,
                        h = v[0],
                        p = v[1],
                        y =
                          (((h << 8) | (h >>> 24)) & 16711935) |
                          (((h << 24) | (h >>> 8)) & 4278255360),
                        A =
                          (((p << 8) | (p >>> 24)) & 16711935) |
                          (((p << 24) | (p >>> 8)) & 4278255360),
                        C = (y >>> 16) | (A & 4294901760),
                        S = (A << 16) | (y & 65535);
                      (E[0] ^= y),
                        (E[1] ^= C),
                        (E[2] ^= A),
                        (E[3] ^= S),
                        (E[4] ^= y),
                        (E[5] ^= C),
                        (E[6] ^= A),
                        (E[7] ^= S);
                      for (var m = 0; m < 4; m++) d.call(this);
                    }
                  },
                  _doProcessBlock: function (f, x) {
                    var m = this._X;
                    d.call(this),
                      (s[0] = m[0] ^ (m[5] >>> 16) ^ (m[3] << 16)),
                      (s[1] = m[2] ^ (m[7] >>> 16) ^ (m[5] << 16)),
                      (s[2] = m[4] ^ (m[1] >>> 16) ^ (m[7] << 16)),
                      (s[3] = m[6] ^ (m[3] >>> 16) ^ (m[1] << 16));
                    for (var g = 0; g < 4; g++)
                      (s[g] =
                        (((s[g] << 8) | (s[g] >>> 24)) & 16711935) |
                        (((s[g] << 24) | (s[g] >>> 8)) & 4278255360)),
                        (f[x + g] ^= s[g]);
                  },
                  blockSize: 128 / 32,
                  ivSize: 64 / 32,
                }));
              function d() {
                for (var f = this._X, x = this._C, m = 0; m < 8; m++)
                  l[m] = x[m];
                (x[0] = (x[0] + 1295307597 + this._b) | 0),
                  (x[1] =
                    (x[1] + 3545052371 + (x[0] >>> 0 < l[0] >>> 0 ? 1 : 0)) |
                    0),
                  (x[2] =
                    (x[2] + 886263092 + (x[1] >>> 0 < l[1] >>> 0 ? 1 : 0)) | 0),
                  (x[3] =
                    (x[3] + 1295307597 + (x[2] >>> 0 < l[2] >>> 0 ? 1 : 0)) |
                    0),
                  (x[4] =
                    (x[4] + 3545052371 + (x[3] >>> 0 < l[3] >>> 0 ? 1 : 0)) |
                    0),
                  (x[5] =
                    (x[5] + 886263092 + (x[4] >>> 0 < l[4] >>> 0 ? 1 : 0)) | 0),
                  (x[6] =
                    (x[6] + 1295307597 + (x[5] >>> 0 < l[5] >>> 0 ? 1 : 0)) |
                    0),
                  (x[7] =
                    (x[7] + 3545052371 + (x[6] >>> 0 < l[6] >>> 0 ? 1 : 0)) |
                    0),
                  (this._b = x[7] >>> 0 < l[7] >>> 0 ? 1 : 0);
                for (var m = 0; m < 8; m++) {
                  var g = f[m] + x[m],
                    E = g & 65535,
                    v = g >>> 16,
                    h = ((((E * E) >>> 17) + E * v) >>> 15) + v * v,
                    p = (((g & 4294901760) * g) | 0) + (((g & 65535) * g) | 0);
                  u[m] = h ^ p;
                }
                (f[0] =
                  (u[0] +
                    ((u[7] << 16) | (u[7] >>> 16)) +
                    ((u[6] << 16) | (u[6] >>> 16))) |
                  0),
                  (f[1] = (u[1] + ((u[0] << 8) | (u[0] >>> 24)) + u[7]) | 0),
                  (f[2] =
                    (u[2] +
                      ((u[1] << 16) | (u[1] >>> 16)) +
                      ((u[0] << 16) | (u[0] >>> 16))) |
                    0),
                  (f[3] = (u[3] + ((u[2] << 8) | (u[2] >>> 24)) + u[1]) | 0),
                  (f[4] =
                    (u[4] +
                      ((u[3] << 16) | (u[3] >>> 16)) +
                      ((u[2] << 16) | (u[2] >>> 16))) |
                    0),
                  (f[5] = (u[5] + ((u[4] << 8) | (u[4] >>> 24)) + u[3]) | 0),
                  (f[6] =
                    (u[6] +
                      ((u[5] << 16) | (u[5] >>> 16)) +
                      ((u[4] << 16) | (u[4] >>> 16))) |
                    0),
                  (f[7] = (u[7] + ((u[6] << 8) | (u[6] >>> 24)) + u[5]) | 0);
              }
              r.Rabbit = i._createHelper(c);
            })(),
            n.Rabbit
          );
        });
      })(Vc)),
    Vc.exports
  );
}
var Uc = { exports: {} },
  Mm;
function yD() {
  return (
    Mm ||
      ((Mm = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), po(), xo(), _r(), Qe());
        })(le, function (n) {
          return (
            (function () {
              var r = n,
                o = r.lib,
                i = o.StreamCipher,
                a = r.algo,
                s = [],
                l = [],
                u = [],
                c = (a.RabbitLegacy = i.extend({
                  _doReset: function () {
                    var f = this._key.words,
                      x = this.cfg.iv,
                      m = (this._X = [
                        f[0],
                        (f[3] << 16) | (f[2] >>> 16),
                        f[1],
                        (f[0] << 16) | (f[3] >>> 16),
                        f[2],
                        (f[1] << 16) | (f[0] >>> 16),
                        f[3],
                        (f[2] << 16) | (f[1] >>> 16),
                      ]),
                      g = (this._C = [
                        (f[2] << 16) | (f[2] >>> 16),
                        (f[0] & 4294901760) | (f[1] & 65535),
                        (f[3] << 16) | (f[3] >>> 16),
                        (f[1] & 4294901760) | (f[2] & 65535),
                        (f[0] << 16) | (f[0] >>> 16),
                        (f[2] & 4294901760) | (f[3] & 65535),
                        (f[1] << 16) | (f[1] >>> 16),
                        (f[3] & 4294901760) | (f[0] & 65535),
                      ]);
                    this._b = 0;
                    for (var E = 0; E < 4; E++) d.call(this);
                    for (var E = 0; E < 8; E++) g[E] ^= m[(E + 4) & 7];
                    if (x) {
                      var v = x.words,
                        h = v[0],
                        p = v[1],
                        y =
                          (((h << 8) | (h >>> 24)) & 16711935) |
                          (((h << 24) | (h >>> 8)) & 4278255360),
                        A =
                          (((p << 8) | (p >>> 24)) & 16711935) |
                          (((p << 24) | (p >>> 8)) & 4278255360),
                        C = (y >>> 16) | (A & 4294901760),
                        S = (A << 16) | (y & 65535);
                      (g[0] ^= y),
                        (g[1] ^= C),
                        (g[2] ^= A),
                        (g[3] ^= S),
                        (g[4] ^= y),
                        (g[5] ^= C),
                        (g[6] ^= A),
                        (g[7] ^= S);
                      for (var E = 0; E < 4; E++) d.call(this);
                    }
                  },
                  _doProcessBlock: function (f, x) {
                    var m = this._X;
                    d.call(this),
                      (s[0] = m[0] ^ (m[5] >>> 16) ^ (m[3] << 16)),
                      (s[1] = m[2] ^ (m[7] >>> 16) ^ (m[5] << 16)),
                      (s[2] = m[4] ^ (m[1] >>> 16) ^ (m[7] << 16)),
                      (s[3] = m[6] ^ (m[3] >>> 16) ^ (m[1] << 16));
                    for (var g = 0; g < 4; g++)
                      (s[g] =
                        (((s[g] << 8) | (s[g] >>> 24)) & 16711935) |
                        (((s[g] << 24) | (s[g] >>> 8)) & 4278255360)),
                        (f[x + g] ^= s[g]);
                  },
                  blockSize: 128 / 32,
                  ivSize: 64 / 32,
                }));
              function d() {
                for (var f = this._X, x = this._C, m = 0; m < 8; m++)
                  l[m] = x[m];
                (x[0] = (x[0] + 1295307597 + this._b) | 0),
                  (x[1] =
                    (x[1] + 3545052371 + (x[0] >>> 0 < l[0] >>> 0 ? 1 : 0)) |
                    0),
                  (x[2] =
                    (x[2] + 886263092 + (x[1] >>> 0 < l[1] >>> 0 ? 1 : 0)) | 0),
                  (x[3] =
                    (x[3] + 1295307597 + (x[2] >>> 0 < l[2] >>> 0 ? 1 : 0)) |
                    0),
                  (x[4] =
                    (x[4] + 3545052371 + (x[3] >>> 0 < l[3] >>> 0 ? 1 : 0)) |
                    0),
                  (x[5] =
                    (x[5] + 886263092 + (x[4] >>> 0 < l[4] >>> 0 ? 1 : 0)) | 0),
                  (x[6] =
                    (x[6] + 1295307597 + (x[5] >>> 0 < l[5] >>> 0 ? 1 : 0)) |
                    0),
                  (x[7] =
                    (x[7] + 3545052371 + (x[6] >>> 0 < l[6] >>> 0 ? 1 : 0)) |
                    0),
                  (this._b = x[7] >>> 0 < l[7] >>> 0 ? 1 : 0);
                for (var m = 0; m < 8; m++) {
                  var g = f[m] + x[m],
                    E = g & 65535,
                    v = g >>> 16,
                    h = ((((E * E) >>> 17) + E * v) >>> 15) + v * v,
                    p = (((g & 4294901760) * g) | 0) + (((g & 65535) * g) | 0);
                  u[m] = h ^ p;
                }
                (f[0] =
                  (u[0] +
                    ((u[7] << 16) | (u[7] >>> 16)) +
                    ((u[6] << 16) | (u[6] >>> 16))) |
                  0),
                  (f[1] = (u[1] + ((u[0] << 8) | (u[0] >>> 24)) + u[7]) | 0),
                  (f[2] =
                    (u[2] +
                      ((u[1] << 16) | (u[1] >>> 16)) +
                      ((u[0] << 16) | (u[0] >>> 16))) |
                    0),
                  (f[3] = (u[3] + ((u[2] << 8) | (u[2] >>> 24)) + u[1]) | 0),
                  (f[4] =
                    (u[4] +
                      ((u[3] << 16) | (u[3] >>> 16)) +
                      ((u[2] << 16) | (u[2] >>> 16))) |
                    0),
                  (f[5] = (u[5] + ((u[4] << 8) | (u[4] >>> 24)) + u[3]) | 0),
                  (f[6] =
                    (u[6] +
                      ((u[5] << 16) | (u[5] >>> 16)) +
                      ((u[4] << 16) | (u[4] >>> 16))) |
                    0),
                  (f[7] = (u[7] + ((u[6] << 8) | (u[6] >>> 24)) + u[5]) | 0);
              }
              r.RabbitLegacy = i._createHelper(c);
            })(),
            n.RabbitLegacy
          );
        });
      })(Uc)),
    Uc.exports
  );
}
var Hc = { exports: {} },
  Lm;
function ED() {
  return (
    Lm ||
      ((Lm = 1),
      (function (e, t) {
        (function (n, r, o) {
          e.exports = r(de(), po(), xo(), _r(), Qe());
        })(le, function (n) {
          return (
            (function () {
              var r = n,
                o = r.lib,
                i = o.BlockCipher,
                a = r.algo;
              const s = 16,
                l = [
                  608135816, 2242054355, 320440878, 57701188, 2752067618,
                  698298832, 137296536, 3964562569, 1160258022, 953160567,
                  3193202383, 887688300, 3232508343, 3380367581, 1065670069,
                  3041331479, 2450970073, 2306472731,
                ],
                u = [
                  [
                    3509652390, 2564797868, 805139163, 3491422135, 3101798381,
                    1780907670, 3128725573, 4046225305, 614570311, 3012652279,
                    134345442, 2240740374, 1667834072, 1901547113, 2757295779,
                    4103290238, 227898511, 1921955416, 1904987480, 2182433518,
                    2069144605, 3260701109, 2620446009, 720527379, 3318853667,
                    677414384, 3393288472, 3101374703, 2390351024, 1614419982,
                    1822297739, 2954791486, 3608508353, 3174124327, 2024746970,
                    1432378464, 3864339955, 2857741204, 1464375394, 1676153920,
                    1439316330, 715854006, 3033291828, 289532110, 2706671279,
                    2087905683, 3018724369, 1668267050, 732546397, 1947742710,
                    3462151702, 2609353502, 2950085171, 1814351708, 2050118529,
                    680887927, 999245976, 1800124847, 3300911131, 1713906067,
                    1641548236, 4213287313, 1216130144, 1575780402, 4018429277,
                    3917837745, 3693486850, 3949271944, 596196993, 3549867205,
                    258830323, 2213823033, 772490370, 2760122372, 1774776394,
                    2652871518, 566650946, 4142492826, 1728879713, 2882767088,
                    1783734482, 3629395816, 2517608232, 2874225571, 1861159788,
                    326777828, 3124490320, 2130389656, 2716951837, 967770486,
                    1724537150, 2185432712, 2364442137, 1164943284, 2105845187,
                    998989502, 3765401048, 2244026483, 1075463327, 1455516326,
                    1322494562, 910128902, 469688178, 1117454909, 936433444,
                    3490320968, 3675253459, 1240580251, 122909385, 2157517691,
                    634681816, 4142456567, 3825094682, 3061402683, 2540495037,
                    79693498, 3249098678, 1084186820, 1583128258, 426386531,
                    1761308591, 1047286709, 322548459, 995290223, 1845252383,
                    2603652396, 3431023940, 2942221577, 3202600964, 3727903485,
                    1712269319, 422464435, 3234572375, 1170764815, 3523960633,
                    3117677531, 1434042557, 442511882, 3600875718, 1076654713,
                    1738483198, 4213154764, 2393238008, 3677496056, 1014306527,
                    4251020053, 793779912, 2902807211, 842905082, 4246964064,
                    1395751752, 1040244610, 2656851899, 3396308128, 445077038,
                    3742853595, 3577915638, 679411651, 2892444358, 2354009459,
                    1767581616, 3150600392, 3791627101, 3102740896, 284835224,
                    4246832056, 1258075500, 768725851, 2589189241, 3069724005,
                    3532540348, 1274779536, 3789419226, 2764799539, 1660621633,
                    3471099624, 4011903706, 913787905, 3497959166, 737222580,
                    2514213453, 2928710040, 3937242737, 1804850592, 3499020752,
                    2949064160, 2386320175, 2390070455, 2415321851, 4061277028,
                    2290661394, 2416832540, 1336762016, 1754252060, 3520065937,
                    3014181293, 791618072, 3188594551, 3933548030, 2332172193,
                    3852520463, 3043980520, 413987798, 3465142937, 3030929376,
                    4245938359, 2093235073, 3534596313, 375366246, 2157278981,
                    2479649556, 555357303, 3870105701, 2008414854, 3344188149,
                    4221384143, 3956125452, 2067696032, 3594591187, 2921233993,
                    2428461, 544322398, 577241275, 1471733935, 610547355,
                    4027169054, 1432588573, 1507829418, 2025931657, 3646575487,
                    545086370, 48609733, 2200306550, 1653985193, 298326376,
                    1316178497, 3007786442, 2064951626, 458293330, 2589141269,
                    3591329599, 3164325604, 727753846, 2179363840, 146436021,
                    1461446943, 4069977195, 705550613, 3059967265, 3887724982,
                    4281599278, 3313849956, 1404054877, 2845806497, 146425753,
                    1854211946,
                  ],
                  [
                    1266315497, 3048417604, 3681880366, 3289982499, 290971e4,
                    1235738493, 2632868024, 2414719590, 3970600049, 1771706367,
                    1449415276, 3266420449, 422970021, 1963543593, 2690192192,
                    3826793022, 1062508698, 1531092325, 1804592342, 2583117782,
                    2714934279, 4024971509, 1294809318, 4028980673, 1289560198,
                    2221992742, 1669523910, 35572830, 157838143, 1052438473,
                    1016535060, 1802137761, 1753167236, 1386275462, 3080475397,
                    2857371447, 1040679964, 2145300060, 2390574316, 1461121720,
                    2956646967, 4031777805, 4028374788, 33600511, 2920084762,
                    1018524850, 629373528, 3691585981, 3515945977, 2091462646,
                    2486323059, 586499841, 988145025, 935516892, 3367335476,
                    2599673255, 2839830854, 265290510, 3972581182, 2759138881,
                    3795373465, 1005194799, 847297441, 406762289, 1314163512,
                    1332590856, 1866599683, 4127851711, 750260880, 613907577,
                    1450815602, 3165620655, 3734664991, 3650291728, 3012275730,
                    3704569646, 1427272223, 778793252, 1343938022, 2676280711,
                    2052605720, 1946737175, 3164576444, 3914038668, 3967478842,
                    3682934266, 1661551462, 3294938066, 4011595847, 840292616,
                    3712170807, 616741398, 312560963, 711312465, 1351876610,
                    322626781, 1910503582, 271666773, 2175563734, 1594956187,
                    70604529, 3617834859, 1007753275, 1495573769, 4069517037,
                    2549218298, 2663038764, 504708206, 2263041392, 3941167025,
                    2249088522, 1514023603, 1998579484, 1312622330, 694541497,
                    2582060303, 2151582166, 1382467621, 776784248, 2618340202,
                    3323268794, 2497899128, 2784771155, 503983604, 4076293799,
                    907881277, 423175695, 432175456, 1378068232, 4145222326,
                    3954048622, 3938656102, 3820766613, 2793130115, 2977904593,
                    26017576, 3274890735, 3194772133, 1700274565, 1756076034,
                    4006520079, 3677328699, 720338349, 1533947780, 354530856,
                    688349552, 3973924725, 1637815568, 332179504, 3949051286,
                    53804574, 2852348879, 3044236432, 1282449977, 3583942155,
                    3416972820, 4006381244, 1617046695, 2628476075, 3002303598,
                    1686838959, 431878346, 2686675385, 1700445008, 1080580658,
                    1009431731, 832498133, 3223435511, 2605976345, 2271191193,
                    2516031870, 1648197032, 4164389018, 2548247927, 300782431,
                    375919233, 238389289, 3353747414, 2531188641, 2019080857,
                    1475708069, 455242339, 2609103871, 448939670, 3451063019,
                    1395535956, 2413381860, 1841049896, 1491858159, 885456874,
                    4264095073, 4001119347, 1565136089, 3898914787, 1108368660,
                    540939232, 1173283510, 2745871338, 3681308437, 4207628240,
                    3343053890, 4016749493, 1699691293, 1103962373, 3625875870,
                    2256883143, 3830138730, 1031889488, 3479347698, 1535977030,
                    4236805024, 3251091107, 2132092099, 1774941330, 1199868427,
                    1452454533, 157007616, 2904115357, 342012276, 595725824,
                    1480756522, 206960106, 497939518, 591360097, 863170706,
                    2375253569, 3596610801, 1814182875, 2094937945, 3421402208,
                    1082520231, 3463918190, 2785509508, 435703966, 3908032597,
                    1641649973, 2842273706, 3305899714, 1510255612, 2148256476,
                    2655287854, 3276092548, 4258621189, 236887753, 3681803219,
                    274041037, 1734335097, 3815195456, 3317970021, 1899903192,
                    1026095262, 4050517792, 356393447, 2410691914, 3873677099,
                    3682840055,
                  ],
                  [
                    3913112168, 2491498743, 4132185628, 2489919796, 1091903735,
                    1979897079, 3170134830, 3567386728, 3557303409, 857797738,
                    1136121015, 1342202287, 507115054, 2535736646, 337727348,
                    3213592640, 1301675037, 2528481711, 1895095763, 1721773893,
                    3216771564, 62756741, 2142006736, 835421444, 2531993523,
                    1442658625, 3659876326, 2882144922, 676362277, 1392781812,
                    170690266, 3921047035, 1759253602, 3611846912, 1745797284,
                    664899054, 1329594018, 3901205900, 3045908486, 2062866102,
                    2865634940, 3543621612, 3464012697, 1080764994, 553557557,
                    3656615353, 3996768171, 991055499, 499776247, 1265440854,
                    648242737, 3940784050, 980351604, 3713745714, 1749149687,
                    3396870395, 4211799374, 3640570775, 1161844396, 3125318951,
                    1431517754, 545492359, 4268468663, 3499529547, 1437099964,
                    2702547544, 3433638243, 2581715763, 2787789398, 1060185593,
                    1593081372, 2418618748, 4260947970, 69676912, 2159744348,
                    86519011, 2512459080, 3838209314, 1220612927, 3339683548,
                    133810670, 1090789135, 1078426020, 1569222167, 845107691,
                    3583754449, 4072456591, 1091646820, 628848692, 1613405280,
                    3757631651, 526609435, 236106946, 48312990, 2942717905,
                    3402727701, 1797494240, 859738849, 992217954, 4005476642,
                    2243076622, 3870952857, 3732016268, 765654824, 3490871365,
                    2511836413, 1685915746, 3888969200, 1414112111, 2273134842,
                    3281911079, 4080962846, 172450625, 2569994100, 980381355,
                    4109958455, 2819808352, 2716589560, 2568741196, 3681446669,
                    3329971472, 1835478071, 660984891, 3704678404, 4045999559,
                    3422617507, 3040415634, 1762651403, 1719377915, 3470491036,
                    2693910283, 3642056355, 3138596744, 1364962596, 2073328063,
                    1983633131, 926494387, 3423689081, 2150032023, 4096667949,
                    1749200295, 3328846651, 309677260, 2016342300, 1779581495,
                    3079819751, 111262694, 1274766160, 443224088, 298511866,
                    1025883608, 3806446537, 1145181785, 168956806, 3641502830,
                    3584813610, 1689216846, 3666258015, 3200248200, 1692713982,
                    2646376535, 4042768518, 1618508792, 1610833997, 3523052358,
                    4130873264, 2001055236, 3610705100, 2202168115, 4028541809,
                    2961195399, 1006657119, 2006996926, 3186142756, 1430667929,
                    3210227297, 1314452623, 4074634658, 4101304120, 2273951170,
                    1399257539, 3367210612, 3027628629, 1190975929, 2062231137,
                    2333990788, 2221543033, 2438960610, 1181637006, 548689776,
                    2362791313, 3372408396, 3104550113, 3145860560, 296247880,
                    1970579870, 3078560182, 3769228297, 1714227617, 3291629107,
                    3898220290, 166772364, 1251581989, 493813264, 448347421,
                    195405023, 2709975567, 677966185, 3703036547, 1463355134,
                    2715995803, 1338867538, 1343315457, 2802222074, 2684532164,
                    233230375, 2599980071, 2000651841, 3277868038, 1638401717,
                    4028070440, 3237316320, 6314154, 819756386, 300326615,
                    590932579, 1405279636, 3267499572, 3150704214, 2428286686,
                    3959192993, 3461946742, 1862657033, 1266418056, 963775037,
                    2089974820, 2263052895, 1917689273, 448879540, 3550394620,
                    3981727096, 150775221, 3627908307, 1303187396, 508620638,
                    2975983352, 2726630617, 1817252668, 1876281319, 1457606340,
                    908771278, 3720792119, 3617206836, 2455994898, 1729034894,
                    1080033504,
                  ],
                  [
                    976866871, 3556439503, 2881648439, 1522871579, 1555064734,
                    1336096578, 3548522304, 2579274686, 3574697629, 3205460757,
                    3593280638, 3338716283, 3079412587, 564236357, 2993598910,
                    1781952180, 1464380207, 3163844217, 3332601554, 1699332808,
                    1393555694, 1183702653, 3581086237, 1288719814, 691649499,
                    2847557200, 2895455976, 3193889540, 2717570544, 1781354906,
                    1676643554, 2592534050, 3230253752, 1126444790, 2770207658,
                    2633158820, 2210423226, 2615765581, 2414155088, 3127139286,
                    673620729, 2805611233, 1269405062, 4015350505, 3341807571,
                    4149409754, 1057255273, 2012875353, 2162469141, 2276492801,
                    2601117357, 993977747, 3918593370, 2654263191, 753973209,
                    36408145, 2530585658, 25011837, 3520020182, 2088578344,
                    530523599, 2918365339, 1524020338, 1518925132, 3760827505,
                    3759777254, 1202760957, 3985898139, 3906192525, 674977740,
                    4174734889, 2031300136, 2019492241, 3983892565, 4153806404,
                    3822280332, 352677332, 2297720250, 60907813, 90501309,
                    3286998549, 1016092578, 2535922412, 2839152426, 457141659,
                    509813237, 4120667899, 652014361, 1966332200, 2975202805,
                    55981186, 2327461051, 676427537, 3255491064, 2882294119,
                    3433927263, 1307055953, 942726286, 933058658, 2468411793,
                    3933900994, 4215176142, 1361170020, 2001714738, 2830558078,
                    3274259782, 1222529897, 1679025792, 2729314320, 3714953764,
                    1770335741, 151462246, 3013232138, 1682292957, 1483529935,
                    471910574, 1539241949, 458788160, 3436315007, 1807016891,
                    3718408830, 978976581, 1043663428, 3165965781, 1927990952,
                    4200891579, 2372276910, 3208408903, 3533431907, 1412390302,
                    2931980059, 4132332400, 1947078029, 3881505623, 4168226417,
                    2941484381, 1077988104, 1320477388, 886195818, 18198404,
                    3786409e3, 2509781533, 112762804, 3463356488, 1866414978,
                    891333506, 18488651, 661792760, 1628790961, 3885187036,
                    3141171499, 876946877, 2693282273, 1372485963, 791857591,
                    2686433993, 3759982718, 3167212022, 3472953795, 2716379847,
                    445679433, 3561995674, 3504004811, 3574258232, 54117162,
                    3331405415, 2381918588, 3769707343, 4154350007, 1140177722,
                    4074052095, 668550556, 3214352940, 367459370, 261225585,
                    2610173221, 4209349473, 3468074219, 3265815641, 314222801,
                    3066103646, 3808782860, 282218597, 3406013506, 3773591054,
                    379116347, 1285071038, 846784868, 2669647154, 3771962079,
                    3550491691, 2305946142, 453669953, 1268987020, 3317592352,
                    3279303384, 3744833421, 2610507566, 3859509063, 266596637,
                    3847019092, 517658769, 3462560207, 3443424879, 370717030,
                    4247526661, 2224018117, 4143653529, 4112773975, 2788324899,
                    2477274417, 1456262402, 2901442914, 1517677493, 1846949527,
                    2295493580, 3734397586, 2176403920, 1280348187, 1908823572,
                    3871786941, 846861322, 1172426758, 3287448474, 3383383037,
                    1655181056, 3139813346, 901632758, 1897031941, 2986607138,
                    3066810236, 3447102507, 1393639104, 373351379, 950779232,
                    625454576, 3124240540, 4148612726, 2007998917, 544563296,
                    2244738638, 2330496472, 2058025392, 1291430526, 424198748,
                    50039436, 29584100, 3605783033, 2429876329, 2791104160,
                    1057563949, 3255363231, 3075367218, 3463963227, 1469046755,
                    985887462,
                  ],
                ];
              var c = { pbox: [], sbox: [] };
              function d(E, v) {
                let h = (v >> 24) & 255,
                  p = (v >> 16) & 255,
                  y = (v >> 8) & 255,
                  A = v & 255,
                  C = E.sbox[0][h] + E.sbox[1][p];
                return (C = C ^ E.sbox[2][y]), (C = C + E.sbox[3][A]), C;
              }
              function f(E, v, h) {
                let p = v,
                  y = h,
                  A;
                for (let C = 0; C < s; ++C)
                  (p = p ^ E.pbox[C]),
                    (y = d(E, p) ^ y),
                    (A = p),
                    (p = y),
                    (y = A);
                return (
                  (A = p),
                  (p = y),
                  (y = A),
                  (y = y ^ E.pbox[s]),
                  (p = p ^ E.pbox[s + 1]),
                  { left: p, right: y }
                );
              }
              function x(E, v, h) {
                let p = v,
                  y = h,
                  A;
                for (let C = s + 1; C > 1; --C)
                  (p = p ^ E.pbox[C]),
                    (y = d(E, p) ^ y),
                    (A = p),
                    (p = y),
                    (y = A);
                return (
                  (A = p),
                  (p = y),
                  (y = A),
                  (y = y ^ E.pbox[1]),
                  (p = p ^ E.pbox[0]),
                  { left: p, right: y }
                );
              }
              function m(E, v, h) {
                for (let S = 0; S < 4; S++) {
                  E.sbox[S] = [];
                  for (let D = 0; D < 256; D++) E.sbox[S][D] = u[S][D];
                }
                let p = 0;
                for (let S = 0; S < s + 2; S++)
                  (E.pbox[S] = l[S] ^ v[p]), p++, p >= h && (p = 0);
                let y = 0,
                  A = 0,
                  C = 0;
                for (let S = 0; S < s + 2; S += 2)
                  (C = f(E, y, A)),
                    (y = C.left),
                    (A = C.right),
                    (E.pbox[S] = y),
                    (E.pbox[S + 1] = A);
                for (let S = 0; S < 4; S++)
                  for (let D = 0; D < 256; D += 2)
                    (C = f(E, y, A)),
                      (y = C.left),
                      (A = C.right),
                      (E.sbox[S][D] = y),
                      (E.sbox[S][D + 1] = A);
                return !0;
              }
              var g = (a.Blowfish = i.extend({
                _doReset: function () {
                  if (this._keyPriorReset !== this._key) {
                    var E = (this._keyPriorReset = this._key),
                      v = E.words,
                      h = E.sigBytes / 4;
                    m(c, v, h);
                  }
                },
                encryptBlock: function (E, v) {
                  var h = f(c, E[v], E[v + 1]);
                  (E[v] = h.left), (E[v + 1] = h.right);
                },
                decryptBlock: function (E, v) {
                  var h = x(c, E[v], E[v + 1]);
                  (E[v] = h.left), (E[v + 1] = h.right);
                },
                blockSize: 64 / 32,
                keySize: 128 / 32,
                ivSize: 64 / 32,
              }));
              r.Blowfish = i._createHelper(g);
            })(),
            n.Blowfish
          );
        });
      })(Hc)),
    Hc.exports
  );
}
(function (e, t) {
  (function (n, r, o) {
    e.exports = r(
      de(),
      lu(),
      XA(),
      QA(),
      po(),
      ZA(),
      xo(),
      p2(),
      uh(),
      JA(),
      x2(),
      eD(),
      tD(),
      nD(),
      ch(),
      rD(),
      _r(),
      Qe(),
      oD(),
      iD(),
      aD(),
      sD(),
      lD(),
      uD(),
      cD(),
      fD(),
      dD(),
      hD(),
      pD(),
      xD(),
      mD(),
      vD(),
      gD(),
      yD(),
      ED(),
    );
  })(le, function (n) {
    return n;
  });
})(h2);
var CD = h2.exports;
const Wc = ja(CD);
function wD(e) {
  for (let t = 2, n = Math.sqrt(e); t <= n; t++) if (e % t === 0) return !1;
  return e > 1;
}
function SD(e) {
  let t = 0;
  for (let n = 1; n <= e; n++) Number.isInteger(e / n) && t++;
  return t;
}
const Im = "https://api.notaroomba.dev";
async function ut(e, t, n = {}) {
  const r = Date.now().toString(),
    o = JSON.stringify(n),
    i = Wc.enc.Hex.stringify(
      Wc.HmacSHA256(
        r + t + e + Wc.MD5(o).toString(),
        Math.floor(Date.now() / (60 * 1e3)).toString(),
      ),
    ),
    a = `HMAC ${r}:${i}`;
  try {
    return t === "POST"
      ? await (
          await fetch(Im + e, {
            method: t,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: a,
            },
            body: JSON.stringify(n),
          })
        ).json()
      : await (
          await fetch(Im + e, {
            method: t,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: a,
            },
          })
        ).json();
  } catch (s) {
    return (
      console.log(s),
      s.response ? { status: We.GENERIC_ERROR } : { status: We.NO_CONNECTION }
    );
  }
}
async function uu() {
  const e = localStorage.getItem("userID");
  if (!e) return !1;
  const t = await ut(`/users/${e}`, "GET");
  return t.status === We.USER_NOT_FOUND ? (localStorage.clear(), !1) : t.user;
}
function AD(e) {
  return new Promise((t, n) => {
    const r = new FileReader();
    r.readAsDataURL(e),
      (r.onload = () => {
        t(r.result);
      }),
      (r.onerror = (o) => {
        n(o);
      });
  });
}
function Bs(e, t) {
  return Math.floor(Math.random() * (t - e + 1)) + e;
}
function zm(e, t) {
  let n = "",
    r,
    o;
  if (t <= 10) {
    r = ["+", "-"];
    let i,
      a,
      s = "";
    o = 10;
    do
      (s = r[Math.floor(Math.random() * r.length)]),
        (i = Bs(1, o)),
        (a = Bs(1, o));
    while (s == r[0] ? i + a !== e : i - a !== e);
    n = `${i}${s}${a}=x`;
  } else if (t > 10) {
    o = 50 * Math.floor(t / 10);
    let i,
      a,
      s = 0;
    do
      (i = Bs(1, o)),
        (a = Bs(1, o)),
        (s = i * e + a),
        (n = `${i}x + ${a} = ${s}`);
    while (i * e + a != s);
  }
  return n;
}
function Et({ route: e, action: t, text: n, disabled: r, selected: o }) {
  return e
    ? w.jsx(ao, {
        to: e,
        className:
          "px-4 w-36 lg:w-40 xl:w-44 min-w-fit rounded-xl hover:bg-primary-500 hover:shadow-md transition-all duration-300 text-lg md:text-xl py-2 mx-auto font-bold  " +
          (o ? "bg-primary-800" : "bg-primary"),
        children: n,
      })
    : w.jsx("button", {
        disabled: r,
        onClick: t,
        className:
          "px-4 w-36 lg:w-40 xl:w-44 min-w-fit rounded-xl hover:bg-primary-500 hover:shadow-md transition-all duration-300 text-lg md:text-xl py-2 mx-auto font-bold " +
          (o ? "bg-primary-800" : "bg-primary"),
        children: n,
      });
}
function m2({
  game: e,
  statistics: t,
  highscore: n,
  isOpen: r,
  resetGame: o,
  setIsOpen: i,
}) {
  return w.jsx(su, {
    ariaHideApp: !1,
    isOpen: r,
    className:
      " w-2/6 min-w-96 pb-8 rounded-xl bg-background text-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " +
      (r ? "animate-show" : "animate-hide"),
    overlayClassName:
      "bg-text-800/80 absolute w-full h-full top-0 left-0 " +
      (r ? "animate-show" : "animate-hide"),
    closeTimeoutMS: 300,
    children: w.jsxs("div", {
      className: "w-full h-full flex flex-col text-center",
      children: [
        w.jsx("p", {
          className: "text-6xl font-bold mt-2 text-[#1B998B]",
          children: "Game Over",
        }),
        w.jsx("p", {
          className: "text-2xl ",
          children:
            "guesses" in t
              ? `You ${t.lives == 0 ? "did not" : "did"} guess the number!`
              : `You guessed ${t.digits} digits of PI!`,
        }),
        w.jsxs("div", {
          className: "flex text-center justify-center text-lg my-2",
          children: [
            w.jsxs("div", {
              className: "w-1/3 font-bold",
              children: [
                w.jsx("p", { className: " text-xl ", children: "High Score" }),
                w.jsx("p", {
                  children: new Date(n.time * 1e3).toISOString().slice(11, 19),
                }),
                w.jsx("p", { children: n.score }),
                w.jsx("p", { children: n.lives }),
                w.jsx("p", { children: "guesses" in n ? n.guesses : n.digits }),
              ],
            }),
            w.jsxs("div", {
              className: "w-1/6 font-bold text-secondary-300",
              children: [
                w.jsx("p", {
                  className: " text-xl text-text text-center ",
                  children: "_",
                }),
                w.jsx("p", { children: "Time" }),
                w.jsx("p", { children: "Score" }),
                w.jsx("p", { children: "Lives" }),
                w.jsx("p", {
                  children: e == _t.MAKINATOR_GUESS ? "Guesses" : "Digits",
                }),
              ],
            }),
            w.jsxs("div", {
              className: "w-1/3 font-semibold ",
              children: [
                w.jsx("p", {
                  className: " text-xl font-bold",
                  children: "Your Score",
                }),
                w.jsx("p", {
                  children: new Date(t.time * 1e3).toISOString().slice(11, 19),
                }),
                w.jsx("p", { children: t.score }),
                w.jsx("p", { children: t.lives }),
                w.jsx("p", { children: "guesses" in t ? t.guesses : t.digits }),
              ],
            }),
          ],
        }),
        localStorage.getItem("userID")
          ? w.jsxs("div", {
              className: "flex justify-center font-bold text-xl gap-8",
              children: [
                w.jsx(Et, { text: "Play Again", action: o }),
                w.jsx(Et, { text: "Leaderboards", route: "/leaderboards" }),
              ],
            })
          : w.jsxs("div", {
              className:
                "flex text-xl font-bold justify-center text-center px-10 mx-auto flex-col",
              children: [
                w.jsx("p", {
                  children:
                    "Login or sign up to view your score on the global leaderboard!",
                }),
                w.jsxs("div", {
                  className: "flex justify-center",
                  children: [
                    w.jsx(Et, { text: "Login", route: "/login" }),
                    w.jsx(Et, { text: "Sign up", route: "/signup" }),
                  ],
                }),
              ],
            }),
        w.jsx("div", {
          className: "flex mx-auto mt-3",
          children: w.jsx(Et, { text: "Close", action: () => i(!r) }),
        }),
      ],
    }),
  });
}
var wt = function () {
  return (
    (wt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    wt.apply(this, arguments)
  );
};
function Ta(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var De = "-ms-",
  sa = "-moz-",
  ve = "-webkit-",
  v2 = "comm",
  cu = "rule",
  fh = "decl",
  DD = "@import",
  g2 = "@keyframes",
  _D = "@layer",
  y2 = Math.abs,
  dh = String.fromCharCode,
  Cf = Object.assign;
function BD(e, t) {
  return Ye(e, 0) ^ 45
    ? (((((((t << 2) ^ Ye(e, 0)) << 2) ^ Ye(e, 1)) << 2) ^ Ye(e, 2)) << 2) ^
        Ye(e, 3)
    : 0;
}
function E2(e) {
  return e.trim();
}
function Pn(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function se(e, t, n) {
  return e.replace(t, n);
}
function Hs(e, t, n) {
  return e.indexOf(t, n);
}
function Ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function ii(e, t, n) {
  return e.slice(t, n);
}
function yn(e) {
  return e.length;
}
function C2(e) {
  return e.length;
}
function Hi(e, t) {
  return t.push(e), e;
}
function PD(e, t) {
  return e.map(t).join("");
}
function $m(e, t) {
  return e.filter(function (n) {
    return !Pn(n, t);
  });
}
var fu = 1,
  ai = 1,
  w2 = 0,
  Xt = 0,
  $e = 0,
  mi = "";
function du(e, t, n, r, o, i, a, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: fu,
    column: ai,
    length: a,
    return: "",
    siblings: s,
  };
}
function Qn(e, t) {
  return Cf(
    du("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t,
  );
}
function wo(e) {
  for (; e.root; ) e = Qn(e.root, { children: [e] });
  Hi(e, e.siblings);
}
function bD() {
  return $e;
}
function FD() {
  return (
    ($e = Xt > 0 ? Ye(mi, --Xt) : 0), ai--, $e === 10 && ((ai = 1), fu--), $e
  );
}
function fn() {
  return (
    ($e = Xt < w2 ? Ye(mi, Xt++) : 0), ai++, $e === 10 && ((ai = 1), fu++), $e
  );
}
function Qr() {
  return Ye(mi, Xt);
}
function Ws() {
  return Xt;
}
function hu(e, t) {
  return ii(mi, e, t);
}
function wf(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function kD(e) {
  return (fu = ai = 1), (w2 = yn((mi = e))), (Xt = 0), [];
}
function RD(e) {
  return (mi = ""), e;
}
function Gc(e) {
  return E2(hu(Xt - 1, Sf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function TD(e) {
  for (; ($e = Qr()) && $e < 33; ) fn();
  return wf(e) > 2 || wf($e) > 3 ? "" : " ";
}
function ND(e, t) {
  for (
    ;
    --t &&
    fn() &&
    !($e < 48 || $e > 102 || ($e > 57 && $e < 65) || ($e > 70 && $e < 97));

  );
  return hu(e, Ws() + (t < 6 && Qr() == 32 && fn() == 32));
}
function Sf(e) {
  for (; fn(); )
    switch ($e) {
      case e:
        return Xt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Sf($e);
        break;
      case 40:
        e === 41 && Sf(e);
        break;
      case 92:
        fn();
        break;
    }
  return Xt;
}
function jD(e, t) {
  for (; fn() && e + $e !== 57; ) if (e + $e === 84 && Qr() === 47) break;
  return "/*" + hu(t, Xt - 1) + "*" + dh(e === 47 ? e : fn());
}
function OD(e) {
  for (; !wf(Qr()); ) fn();
  return hu(e, Xt);
}
function MD(e) {
  return RD(Gs("", null, null, null, [""], (e = kD(e)), 0, [0], e));
}
function Gs(e, t, n, r, o, i, a, s, l) {
  for (
    var u = 0,
      c = 0,
      d = a,
      f = 0,
      x = 0,
      m = 0,
      g = 1,
      E = 1,
      v = 1,
      h = 0,
      p = "",
      y = o,
      A = i,
      C = r,
      S = p;
    E;

  )
    switch (((m = h), (h = fn()))) {
      case 40:
        if (m != 108 && Ye(S, d - 1) == 58) {
          Hs((S += se(Gc(h), "&", "&\f")), "&\f", y2(u ? s[u - 1] : 0)) != -1 &&
            (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Gc(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += TD(m);
        break;
      case 92:
        S += ND(Ws() - 1, 7);
        continue;
      case 47:
        switch (Qr()) {
          case 42:
          case 47:
            Hi(LD(jD(fn(), Ws()), t, n, l), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * g:
        s[u++] = yn(S) * v;
      case 125 * g:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            E = 0;
          case 59 + c:
            v == -1 && (S = se(S, /\f/g, "")),
              x > 0 &&
                yn(S) - d &&
                Hi(
                  x > 32
                    ? Um(S + ";", r, n, d - 1, l)
                    : Um(se(S, " ", "") + ";", r, n, d - 2, l),
                  l,
                );
            break;
          case 59:
            S += ";";
          default:
            if (
              (Hi(
                (C = Vm(S, t, n, u, c, o, s, p, (y = []), (A = []), d, i)),
                i,
              ),
              h === 123)
            )
              if (c === 0) Gs(S, t, C, C, y, i, d, s, A);
              else
                switch (f === 99 && Ye(S, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Gs(
                      e,
                      C,
                      C,
                      r && Hi(Vm(e, C, C, 0, 0, o, s, p, o, (y = []), d, A), A),
                      o,
                      A,
                      d,
                      s,
                      r ? y : A,
                    );
                    break;
                  default:
                    Gs(S, C, C, C, [""], A, 0, s, A);
                }
        }
        (u = c = x = 0), (g = v = 1), (p = S = ""), (d = a);
        break;
      case 58:
        (d = 1 + yn(S)), (x = m);
      default:
        if (g < 1) {
          if (h == 123) --g;
          else if (h == 125 && g++ == 0 && FD() == 125) continue;
        }
        switch (((S += dh(h)), h * g)) {
          case 38:
            v = c > 0 ? 1 : ((S += "\f"), -1);
            break;
          case 44:
            (s[u++] = (yn(S) - 1) * v), (v = 1);
            break;
          case 64:
            Qr() === 45 && (S += Gc(fn())),
              (f = Qr()),
              (c = d = yn((p = S += OD(Ws())))),
              h++;
            break;
          case 45:
            m === 45 && yn(S) == 2 && (g = 0);
        }
    }
  return i;
}
function Vm(e, t, n, r, o, i, a, s, l, u, c, d) {
  for (
    var f = o - 1, x = o === 0 ? i : [""], m = C2(x), g = 0, E = 0, v = 0;
    g < r;
    ++g
  )
    for (var h = 0, p = ii(e, f + 1, (f = y2((E = a[g])))), y = e; h < m; ++h)
      (y = E2(E > 0 ? x[h] + " " + p : se(p, /&\f/g, x[h]))) && (l[v++] = y);
  return du(e, t, n, o === 0 ? cu : s, l, u, c, d);
}
function LD(e, t, n, r) {
  return du(e, t, n, v2, dh(bD()), ii(e, 2, -2), 0, r);
}
function Um(e, t, n, r, o) {
  return du(e, t, n, fh, ii(e, 0, r), ii(e, r + 1, -1), r, o);
}
function S2(e, t, n) {
  switch (BD(e, t)) {
    case 5103:
      return ve + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ve + e + e;
    case 4789:
      return sa + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ve + e + sa + e + De + e + e;
    case 5936:
      switch (Ye(e, t + 11)) {
        case 114:
          return ve + e + De + se(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ve + e + De + se(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ve + e + De + se(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return ve + e + De + e + e;
    case 6165:
      return ve + e + De + "flex-" + e + e;
    case 5187:
      return (
        ve + e + se(e, /(\w+).+(:[^]+)/, ve + "box-$1$2" + De + "flex-$1$2") + e
      );
    case 5443:
      return (
        ve +
        e +
        De +
        "flex-item-" +
        se(e, /flex-|-self/g, "") +
        (Pn(e, /flex-|baseline/)
          ? ""
          : De + "grid-row-" + se(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        ve +
        e +
        De +
        "flex-line-pack" +
        se(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return ve + e + De + se(e, "shrink", "negative") + e;
    case 5292:
      return ve + e + De + se(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        ve +
        "box-" +
        se(e, "-grow", "") +
        ve +
        e +
        De +
        se(e, "grow", "positive") +
        e
      );
    case 4554:
      return ve + se(e, /([^-])(transform)/g, "$1" + ve + "$2") + e;
    case 6187:
      return (
        se(
          se(se(e, /(zoom-|grab)/, ve + "$1"), /(image-set)/, ve + "$1"),
          e,
          "",
        ) + e
      );
    case 5495:
    case 3959:
      return se(e, /(image-set\([^]*)/, ve + "$1$`$1");
    case 4968:
      return (
        se(
          se(e, /(.+:)(flex-)?(.*)/, ve + "box-pack:$3" + De + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        ve +
        e +
        e
      );
    case 4200:
      if (!Pn(e, /flex-|baseline/))
        return De + "grid-column-align" + ii(e, t) + e;
      break;
    case 2592:
    case 3360:
      return De + se(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, o) {
          return (t = o), Pn(r.props, /grid-\w+-end/);
        })
        ? ~Hs(e + (n = n[t].value), "span", 0)
          ? e
          : De +
            se(e, "-start", "") +
            e +
            De +
            "grid-row-span:" +
            (~Hs(n, "span", 0) ? Pn(n, /\d+/) : +Pn(n, /\d+/) - +Pn(e, /\d+/)) +
            ";"
        : De + se(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return Pn(r.props, /grid-\w+-start/);
        })
        ? e
        : De + se(se(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return se(e, /(.+)-inline(.+)/, ve + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (yn(e) - 1 - t > 6)
        switch (Ye(e, t + 1)) {
          case 109:
            if (Ye(e, t + 4) !== 45) break;
          case 102:
            return (
              se(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  ve +
                  "$2-$3$1" +
                  sa +
                  (Ye(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Hs(e, "stretch", 0)
              ? S2(se(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return se(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, o, i, a, s, l, u) {
          return (
            De +
            o +
            ":" +
            i +
            u +
            (a ? De + o + "-span:" + (s ? l : +l - +i) + u : "") +
            e
          );
        },
      );
    case 4949:
      if (Ye(e, t + 6) === 121) return se(e, ":", ":" + ve) + e;
      break;
    case 6444:
      switch (Ye(e, Ye(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            se(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                ve +
                (Ye(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ve +
                "$2$3$1" +
                De +
                "$2box$3",
            ) + e
          );
        case 100:
          return se(e, ":", ":" + De) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return se(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function kl(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function ID(e, t, n, r) {
  switch (e.type) {
    case _D:
      if (e.children.length) break;
    case DD:
    case fh:
      return (e.return = e.return || e.value);
    case v2:
      return "";
    case g2:
      return (e.return = e.value + "{" + kl(e.children, r) + "}");
    case cu:
      if (!yn((e.value = e.props.join(",")))) return "";
  }
  return yn((n = kl(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function zD(e) {
  var t = C2(e);
  return function (n, r, o, i) {
    for (var a = "", s = 0; s < t; s++) a += e[s](n, r, o, i) || "";
    return a;
  };
}
function $D(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function VD(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case fh:
        e.return = S2(e.value, e.length, n);
        return;
      case g2:
        return kl([Qn(e, { value: se(e.value, "@", "@" + ve) })], r);
      case cu:
        if (e.length)
          return PD((n = e.props), function (o) {
            switch (Pn(o, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                wo(Qn(e, { props: [se(o, /:(read-\w+)/, ":" + sa + "$1")] })),
                  wo(Qn(e, { props: [o] })),
                  Cf(e, { props: $m(n, r) });
                break;
              case "::placeholder":
                wo(
                  Qn(e, {
                    props: [se(o, /:(plac\w+)/, ":" + ve + "input-$1")],
                  }),
                ),
                  wo(Qn(e, { props: [se(o, /:(plac\w+)/, ":" + sa + "$1")] })),
                  wo(Qn(e, { props: [se(o, /:(plac\w+)/, De + "input-$1")] })),
                  wo(Qn(e, { props: [o] })),
                  Cf(e, { props: $m(n, r) });
                break;
            }
            return "";
          });
    }
}
var UD = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  bt = {},
  si =
    (typeof process < "u" &&
      bt !== void 0 &&
      (bt.REACT_APP_SC_ATTR || bt.SC_ATTR)) ||
    "data-styled",
  A2 = "active",
  D2 = "data-styled-version",
  pu = "6.1.8",
  hh = `/*!sc*/
`,
  ph = typeof window < "u" && "HTMLElement" in window,
  HD = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
        bt !== void 0 &&
        bt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        bt.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? bt.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
        bt.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        bt !== void 0 &&
        bt.SC_DISABLE_SPEEDY !== void 0 &&
        bt.SC_DISABLE_SPEEDY !== "" &&
        bt.SC_DISABLE_SPEEDY !== "false" &&
        bt.SC_DISABLE_SPEEDY),
  xu = Object.freeze([]),
  li = Object.freeze({});
function WD(e, t, n) {
  return (
    n === void 0 && (n = li), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var _2 = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  GD = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  KD = /(^-|-$)/g;
function Hm(e) {
  return e.replace(GD, "-").replace(KD, "");
}
var qD = /(a)(d)/gi,
  Ps = 52,
  Wm = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Af(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > Ps; t = (t / Ps) | 0) n = Wm(t % Ps) + n;
  return (Wm(t % Ps) + n).replace(qD, "$1-$2");
}
var Kc,
  B2 = 5381,
  Vo = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  P2 = function (e) {
    return Vo(B2, e);
  };
function b2(e) {
  return Af(P2(e) >>> 0);
}
function YD(e) {
  return e.displayName || e.name || "Component";
}
function qc(e) {
  return typeof e == "string" && !0;
}
var F2 = typeof Symbol == "function" && Symbol.for,
  k2 = F2 ? Symbol.for("react.memo") : 60115,
  XD = F2 ? Symbol.for("react.forward_ref") : 60112,
  QD = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  ZD = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  R2 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  JD =
    (((Kc = {})[XD] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Kc[k2] = R2),
    Kc);
function Gm(e) {
  return ("type" in (t = e) && t.type.$$typeof) === k2
    ? R2
    : "$$typeof" in e
      ? JD[e.$$typeof]
      : QD;
  var t;
}
var e_ = Object.defineProperty,
  t_ = Object.getOwnPropertyNames,
  Km = Object.getOwnPropertySymbols,
  n_ = Object.getOwnPropertyDescriptor,
  r_ = Object.getPrototypeOf,
  qm = Object.prototype;
function T2(e, t, n) {
  if (typeof t != "string") {
    if (qm) {
      var r = r_(t);
      r && r !== qm && T2(e, r, n);
    }
    var o = t_(t);
    Km && (o = o.concat(Km(t)));
    for (var i = Gm(e), a = Gm(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!(l in ZD || (n && n[l]) || (a && l in a) || (i && l in i))) {
        var u = n_(t, l);
        try {
          e_(e, l, u);
        } catch {}
      }
    }
  }
  return e;
}
function ui(e) {
  return typeof e == "function";
}
function xh(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Gr(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Df(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
  return n;
}
function Na(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function _f(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Na(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = _f(e[r], t[r]);
  else if (Na(t)) for (var r in t) e[r] = _f(e[r], t[r]);
  return e;
}
function mh(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Xa(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""),
  );
}
var o_ = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, o = r.length, i = o; t >= i; )
            if ((i <<= 1) < 0) throw Xa(16, "".concat(t));
          (this.groupSizes = new Uint32Array(i)),
            this.groupSizes.set(r),
            (this.length = i);
          for (var a = o; a < i; a++) this.groupSizes[a] = 0;
        }
        for (
          var s = this.indexOfGroup(t + 1), l = ((a = 0), n.length);
          a < l;
          a++
        )
          this.tag.insertRule(s, n[a]) && (this.groupSizes[t]++, s++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            o = r + n;
          this.groupSizes[t] = 0;
          for (var i = r; i < o; i++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            o = this.indexOfGroup(t),
            i = o + r,
            a = o;
          a < i;
          a++
        )
          n += "".concat(this.tag.getRule(a)).concat(hh);
        return n;
      }),
      e
    );
  })(),
  Ks = new Map(),
  Rl = new Map(),
  qs = 1,
  bs = function (e) {
    if (Ks.has(e)) return Ks.get(e);
    for (; Rl.has(qs); ) qs++;
    var t = qs++;
    return Ks.set(e, t), Rl.set(t, e), t;
  },
  i_ = function (e, t) {
    (qs = t + 1), Ks.set(e, t), Rl.set(t, e);
  },
  a_ = "style[".concat(si, "][").concat(D2, '="').concat(pu, '"]'),
  s_ = new RegExp(
    "^".concat(si, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  ),
  l_ = function (e, t, n) {
    for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++)
      (r = o[i]) && e.registerName(t, r);
  },
  u_ = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(hh),
        o = [],
        i = 0,
        a = r.length;
      i < a;
      i++
    ) {
      var s = r[i].trim();
      if (s) {
        var l = s.match(s_);
        if (l) {
          var u = 0 | parseInt(l[1], 10),
            c = l[2];
          u !== 0 && (i_(c, u), l_(e, c, l[3]), e.getTag().insertRules(u, o)),
            (o.length = 0);
        } else o.push(s);
      }
    }
  };
function c_() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var N2 = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (s) {
        var l = Array.from(s.querySelectorAll("style[".concat(si, "]")));
        return l[l.length - 1];
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(si, A2), r.setAttribute(D2, pu);
    var a = c_();
    return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
  },
  f_ = (function () {
    function e(t) {
      (this.element = N2(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
            var a = r[o];
            if (a.ownerNode === n) return a;
          }
          throw Xa(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  d_ = (function () {
    function e(t) {
      (this.element = N2(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  h_ = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Ym = ph,
  p_ = { isServer: !ph, useCSSOMInjection: !HD },
  j2 = (function () {
    function e(t, n, r) {
      t === void 0 && (t = li), n === void 0 && (n = {});
      var o = this;
      (this.options = wt(wt({}, p_), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          ph &&
          Ym &&
          ((Ym = !1),
          (function (i) {
            for (
              var a = document.querySelectorAll(a_), s = 0, l = a.length;
              s < l;
              s++
            ) {
              var u = a[s];
              u &&
                u.getAttribute(si) !== A2 &&
                (u_(i, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this)),
        mh(this, function () {
          return (function (i) {
            for (
              var a = i.getTag(),
                s = a.length,
                l = "",
                u = function (d) {
                  var f = (function (v) {
                    return Rl.get(v);
                  })(d);
                  if (f === void 0) return "continue";
                  var x = i.names.get(f),
                    m = a.getGroup(d);
                  if (x === void 0 || m.length === 0) return "continue";
                  var g = ""
                      .concat(si, ".g")
                      .concat(d, '[id="')
                      .concat(f, '"]'),
                    E = "";
                  x !== void 0 &&
                    x.forEach(function (v) {
                      v.length > 0 && (E += "".concat(v, ","));
                    }),
                    (l += ""
                      .concat(m)
                      .concat(g, '{content:"')
                      .concat(E, '"}')
                      .concat(hh));
                },
                c = 0;
              c < s;
              c++
            )
              u(c);
            return l;
          })(o);
        });
    }
    return (
      (e.registerId = function (t) {
        return bs(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            wt(wt({}, this.options), t),
            this.gs,
            (n && this.names) || void 0,
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                o = n.target;
              return n.isServer ? new h_(o) : r ? new f_(o) : new d_(o);
            })(this.options)),
            new o_(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((bs(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(bs(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(bs(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  x_ = /&/g,
  m_ = /^\s*\/\/.*$/gm;
function O2(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = O2(n.children, t)),
      n
    );
  });
}
function v_(e) {
  var t,
    n,
    r,
    o = e === void 0 ? li : e,
    i = o.options,
    a = i === void 0 ? li : i,
    s = o.plugins,
    l = s === void 0 ? xu : s,
    u = function (f, x, m) {
      return m.startsWith(n) && m.endsWith(n) && m.replaceAll(n, "").length > 0
        ? ".".concat(t)
        : f;
    },
    c = l.slice();
  c.push(function (f) {
    f.type === cu &&
      f.value.includes("&") &&
      (f.props[0] = f.props[0].replace(x_, n).replace(r, u));
  }),
    a.prefix && c.push(VD),
    c.push(ID);
  var d = function (f, x, m, g) {
    x === void 0 && (x = ""),
      m === void 0 && (m = ""),
      g === void 0 && (g = "&"),
      (t = g),
      (n = x),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var E = f.replace(m_, ""),
      v = MD(m || x ? "".concat(m, " ").concat(x, " { ").concat(E, " }") : E);
    a.namespace && (v = O2(v, a.namespace));
    var h = [];
    return (
      kl(
        v,
        zD(
          c.concat(
            $D(function (p) {
              return h.push(p);
            }),
          ),
        ),
      ),
      h
    );
  };
  return (
    (d.hash = l.length
      ? l
          .reduce(function (f, x) {
            return x.name || Xa(15), Vo(f, x.name);
          }, B2)
          .toString()
      : ""),
    d
  );
}
var g_ = new j2(),
  Bf = v_(),
  M2 = ue.createContext({
    shouldForwardProp: void 0,
    styleSheet: g_,
    stylis: Bf,
  });
M2.Consumer;
ue.createContext(void 0);
function Xm() {
  return _.useContext(M2);
}
var L2 = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = Bf);
        var a = r.name + i.hash;
        o.hasNameForId(r.id, a) ||
          o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        mh(this, function () {
          throw Xa(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Bf), this.name + t.hash;
      }),
      e
    );
  })(),
  y_ = function (e) {
    return e >= "A" && e <= "Z";
  };
function Qm(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    y_(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var I2 = function (e) {
    return e == null || e === !1 || e === "";
  },
  z2 = function (e) {
    var t,
      n,
      r = [];
    for (var o in e) {
      var i = e[o];
      e.hasOwnProperty(o) &&
        !I2(i) &&
        ((Array.isArray(i) && i.isCss) || ui(i)
          ? r.push("".concat(Qm(o), ":"), i, ";")
          : Na(i)
            ? r.push.apply(
                r,
                Ta(Ta(["".concat(o, " {")], z2(i), !1), ["}"], !1),
              )
            : r.push(
                ""
                  .concat(Qm(o), ": ")
                  .concat(
                    ((t = o),
                    (n = i) == null || typeof n == "boolean" || n === ""
                      ? ""
                      : typeof n != "number" ||
                          n === 0 ||
                          t in UD ||
                          t.startsWith("--")
                        ? String(n).trim()
                        : "".concat(n, "px")),
                    ";",
                  ),
              ));
    }
    return r;
  };
function Zr(e, t, n, r) {
  if (I2(e)) return [];
  if (xh(e)) return [".".concat(e.styledComponentId)];
  if (ui(e)) {
    if (!ui((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t)
      return [e];
    var o = e(t);
    return Zr(o, t, n, r);
  }
  var i;
  return e instanceof L2
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Na(e)
      ? z2(e)
      : Array.isArray(e)
        ? Array.prototype.concat.apply(
            xu,
            e.map(function (a) {
              return Zr(a, t, n, r);
            }),
          )
        : [e.toString()];
}
function E_(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ui(n) && !xh(n)) return !1;
  }
  return !0;
}
var C_ = P2(pu),
  w_ = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && E_(t)),
        (this.componentId = n),
        (this.baseHash = Vo(C_, n)),
        (this.baseStyle = r),
        j2.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            o = Gr(o, this.staticRulesId);
          else {
            var i = Df(Zr(this.rules, t, n, r)),
              a = Af(Vo(this.baseHash, i) >>> 0);
            if (!n.hasNameForId(this.componentId, a)) {
              var s = r(i, ".".concat(a), void 0, this.componentId);
              n.insertRules(this.componentId, a, s);
            }
            (o = Gr(o, a)), (this.staticRulesId = a);
          }
        else {
          for (
            var l = Vo(this.baseHash, r.hash), u = "", c = 0;
            c < this.rules.length;
            c++
          ) {
            var d = this.rules[c];
            if (typeof d == "string") u += d;
            else if (d) {
              var f = Df(Zr(d, t, n, r));
              (l = Vo(l, f + c)), (u += f);
            }
          }
          if (u) {
            var x = Af(l >>> 0);
            n.hasNameForId(this.componentId, x) ||
              n.insertRules(
                this.componentId,
                x,
                r(u, ".".concat(x), void 0, this.componentId),
              ),
              (o = Gr(o, x));
          }
        }
        return o;
      }),
      e
    );
  })(),
  $2 = ue.createContext(void 0);
$2.Consumer;
var Yc = {};
function S_(e, t, n) {
  var r = xh(e),
    o = e,
    i = !qc(e),
    a = t.attrs,
    s = a === void 0 ? xu : a,
    l = t.componentId,
    u =
      l === void 0
        ? (function (y, A) {
            var C = typeof y != "string" ? "sc" : Hm(y);
            Yc[C] = (Yc[C] || 0) + 1;
            var S = "".concat(C, "-").concat(b2(pu + C + Yc[C]));
            return A ? "".concat(A, "-").concat(S) : S;
          })(t.displayName, t.parentComponentId)
        : l,
    c = t.displayName,
    d =
      c === void 0
        ? (function (y) {
            return qc(y) ? "styled.".concat(y) : "Styled(".concat(YD(y), ")");
          })(e)
        : c,
    f =
      t.displayName && t.componentId
        ? "".concat(Hm(t.displayName), "-").concat(t.componentId)
        : t.componentId || u,
    x = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s,
    m = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var g = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var E = t.shouldForwardProp;
      m = function (y, A) {
        return g(y, A) && E(y, A);
      };
    } else m = g;
  }
  var v = new w_(n, f, r ? o.componentStyle : void 0);
  function h(y, A) {
    return (function (C, S, D) {
      var b = C.attrs,
        B = C.componentStyle,
        P = C.defaultProps,
        N = C.foldedComponentIds,
        O = C.styledComponentId,
        k = C.target,
        M = ue.useContext($2),
        G = Xm(),
        R = C.shouldForwardProp || G.shouldForwardProp,
        j = WD(S, M, P) || li,
        U = (function (re, X, he) {
          for (
            var ne,
              Ue = wt(wt({}, X), { className: void 0, theme: he }),
              Ze = 0;
            Ze < re.length;
            Ze += 1
          ) {
            var me = ui((ne = re[Ze])) ? ne(Ue) : ne;
            for (var Oe in me)
              Ue[Oe] =
                Oe === "className"
                  ? Gr(Ue[Oe], me[Oe])
                  : Oe === "style"
                    ? wt(wt({}, Ue[Oe]), me[Oe])
                    : me[Oe];
          }
          return (
            X.className && (Ue.className = Gr(Ue.className, X.className)), Ue
          );
        })(b, S, j),
        H = U.as || k,
        F = {};
      for (var I in U)
        U[I] === void 0 ||
          I[0] === "$" ||
          I === "as" ||
          (I === "theme" && U.theme === j) ||
          (I === "forwardedAs"
            ? (F.as = U.forwardedAs)
            : (R && !R(I, H)) || (F[I] = U[I]));
      var V = (function (re, X) {
          var he = Xm(),
            ne = re.generateAndInjectStyles(X, he.styleSheet, he.stylis);
          return ne;
        })(B, U),
        z = Gr(N, O);
      return (
        V && (z += " " + V),
        U.className && (z += " " + U.className),
        (F[qc(H) && !_2.has(H) ? "class" : "className"] = z),
        (F.ref = D),
        _.createElement(H, F)
      );
    })(p, y, A);
  }
  h.displayName = d;
  var p = ue.forwardRef(h);
  return (
    (p.attrs = x),
    (p.componentStyle = v),
    (p.displayName = d),
    (p.shouldForwardProp = m),
    (p.foldedComponentIds = r
      ? Gr(o.foldedComponentIds, o.styledComponentId)
      : ""),
    (p.styledComponentId = f),
    (p.target = r ? o.target : e),
    Object.defineProperty(p, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (y) {
        this._foldedDefaultProps = r
          ? (function (A) {
              for (var C = [], S = 1; S < arguments.length; S++)
                C[S - 1] = arguments[S];
              for (var D = 0, b = C; D < b.length; D++) _f(A, b[D], !0);
              return A;
            })({}, o.defaultProps, y)
          : y;
      },
    }),
    mh(p, function () {
      return ".".concat(p.styledComponentId);
    }),
    i &&
      T2(p, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    p
  );
}
function Zm(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Jm = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function V2(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (ui(e) || Na(e)) return Jm(Zr(Zm(xu, Ta([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? Zr(r)
    : Jm(Zr(Zm(r, t)));
}
function Pf(e, t, n) {
  if ((n === void 0 && (n = li), !t)) throw Xa(1, t);
  var r = function (o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, V2.apply(void 0, Ta([o], i, !1)));
  };
  return (
    (r.attrs = function (o) {
      return Pf(
        e,
        t,
        wt(wt({}, n), {
          attrs: Array.prototype.concat(n.attrs, o).filter(Boolean),
        }),
      );
    }),
    (r.withConfig = function (o) {
      return Pf(e, t, wt(wt({}, n), o));
    }),
    r
  );
}
var U2 = function (e) {
    return Pf(S_, e);
  },
  mo = U2;
_2.forEach(function (e) {
  mo[e] = U2(e);
});
function vh(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = Df(V2.apply(void 0, Ta([e], t, !1))),
    o = b2(r);
  return new L2(o, r);
}
const A_ = "#4fa94d",
  D_ = { "aria-busy": !0, role: "progressbar" },
  __ = mo.div`
  display: ${(e) => (e.$visible ? "flex" : "none")};
`,
  B_ = "http://www.w3.org/2000/svg",
  en = 242.776657104492,
  P_ = 1.6,
  b_ = vh`
12.5% {
  stroke-dasharray: ${en * 0.14}px, ${en}px;
  stroke-dashoffset: -${en * 0.11}px;
}
43.75% {
  stroke-dasharray: ${en * 0.35}px, ${en}px;
  stroke-dashoffset: -${en * 0.35}px;
}
100% {
  stroke-dasharray: ${en * 0.01}px, ${en}px;
  stroke-dashoffset: -${en * 0.99}px;
}
`;
mo.path`
  stroke-dasharray: ${en * 0.01}px, ${en};
  stroke-dashoffset: 0;
  animation: ${b_} ${P_}s linear infinite;
`;
const F_ = vh`
to {
   transform: rotate(360deg);
 }
`;
mo.svg`
  animation: ${F_} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;
mo.polyline`
  stroke-width: ${(e) => e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;
const k_ = "-3 -4 39 39",
  R_ = "16,0 32,32 0,32",
  T_ = vh`
to {
   stroke-dashoffset: 136;
 }
`,
  N_ = mo.polygon`
  stroke-dasharray: 17;
  animation: ${T_} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,
  j_ = mo.svg`
  transform-origin: 50% 65%;
`,
  O_ = ({
    height: e = 80,
    width: t = 80,
    color: n = A_,
    ariaLabel: r = "triangle-loading",
    wrapperStyle: o,
    wrapperClass: i,
    visible: a = !0,
  }) =>
    w.jsx(__, {
      style: o,
      $visible: a,
      className: `${i}`,
      "data-testid": "triangle-loading",
      "aria-label": r,
      ...D_,
      children: w.jsx(j_, {
        id: "triangle",
        width: t,
        height: e,
        xmlns: B_,
        viewBox: k_,
        "data-testid": "triangle-svg",
        children: w.jsx(N_, {
          fill: "transparent",
          stroke: n,
          strokeWidth: "1",
          points: R_,
        }),
      }),
    });
function Br({ loading: e }) {
  return w.jsx("div", {
    className:
      "absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-background/80" +
      (e ? " flex animate-show" : " animate-hide"),
    children: w.jsxs("div", {
      className: "m-auto",
      children: [
        w.jsx(O_, {
          visible: e,
          height: "200",
          width: "200",
          color: "#5435cb",
          ariaLabel: "triangle-loading",
          wrapperClass: e ? " flex animate-show" : " animate-hide",
        }),
        e &&
          w.jsxs("div", {
            className: "flex mx-auto",
            children: [
              w.jsx("img", {
                src: "/logo.png",
                className: "h-14 m-2 rounded-xl",
              }),
              w.jsx("p", {
                className:
                  "text-left my-auto mb-5 -ml-3 font-bold text-text text-4xl",
                children: "akinator",
              }),
            ],
          }),
      ],
    }),
  });
}
function M_() {
  const [e, t] = _.useState(0),
    [n, r] = _.useState(3),
    [o, i] = _.useState([]),
    [a, s] = _.useState(""),
    [l, u] = _.useState(!1),
    [c, d] = _.useState(!1),
    [f, x] = _.useState(!1),
    [m, g] = _.useState(!1),
    [E, v] = _.useState(),
    [h, p] = _.useState(!1),
    [y, A] = _.useState(0),
    C = () => {
      t(69), i([]), A(0), x(!1), g(!1), s(""), r(3);
    };
  _.useEffect(() => {
    C();
  }, []);
  const S = (P) => {
      if (!Number.isNaN(P.currentTarget.value)) {
        const N = parseInt(P.currentTarget.value);
        s(N ? N.toString() : "");
      }
    },
    D = (P, N) => {
      console.log(e);
      let O = !0;
      if (P == Jt.ISEVEN) O = e % 2 == 0;
      else if (P == Jt.ISPRIME) O = wD(e);
      else {
        if (N == "") return u(!0);
        {
          const M = parseInt(N);
          P == Jt.DIVISIBLE || P == Jt.MULTIPLE
            ? (O = e % M == 0)
            : P == Jt.FACTORS
              ? (O = SD(e) == M)
              : P == Jt.LESSTHAN
                ? (O = e < M)
                : P == Jt.GREATERTHAN && (O = e > M);
        }
      }
      const k = `The number is ${O ? "" : "not"} ${P.split("the number")[1]
        .replace("?", "")
        .replace("x", N)}`;
      !o.map((M) => M.guessString).includes(k) &&
        !f &&
        i([...o, { guessType: P, guessString: k }]);
    },
    b = () => {
      a === ""
        ? u(!0)
        : f
          ? g(!0)
          : parseInt(a) != e
            ? (d(!0),
              setTimeout(() => d(!1), 1e3),
              n - 1 < 0 ? r(0) : r(n - 1),
              n - 1 <= 0 && x(!0))
            : x(!0);
    },
    B = () =>
      Math.round(
        (-1 + 10001 / 10001 ** ((y * o.length * n) / 7200)) * (n == 0 ? 0 : 1),
      );
  return (
    _.useEffect(() => {
      if (f) document.documentElement.style.overflowY = "hidden";
      else {
        const P = setInterval(() => A(y + 1), 1e3);
        return () => clearInterval(P);
      }
    }, [y, f]),
    _.useEffect(() => {
      if (f) {
        const P = localStorage.getItem("userID");
        if (P)
          p(!0),
            ut("/games/update", "POST", {
              userID: P,
              type: _t.MAKINATOR_GUESS,
              game: { time: y, guesses: o.length, lives: n, score: B() },
            }).then(() => {
              ut(`/games/${P}/highscore`, "POST", {
                userID: P,
                type: _t.MAKINATOR_GUESS,
              }).then((N) => {
                v(N.highscore), p(!1), g(!0);
              });
            });
        else {
          const N = JSON.parse(localStorage.getItem("guessStatistics") ?? "[]");
          N == null
            ? localStorage.setItem(
                "guessStatistics",
                JSON.stringify([
                  { time: y, guesses: o.length, lives: n, score: B() },
                ]),
              )
            : localStorage.setItem(
                "guessStatistics",
                JSON.stringify([
                  ...N,
                  { time: y, guesses: o.length, lives: n, score: B() },
                ]),
              ),
            g(!0);
        }
      }
    }, [f]),
    w.jsx(Ar, {
      children: w.jsx("div", {
        className: "bg-transparent text-text h-[calc(100%-80px)] my-auto flex",
        children: w.jsxs("div", {
          className: "m-auto align-middle justify-center mt-20 mb-4 sm:mb-0",
          children: [
            w.jsxs("div", {
              className:
                "mx-auto justify-center w-full align-middle text-center",
              children: [
                w.jsx("p", {
                  className: "text-4xl mt-4 mb-0 font-semibold",
                  children: "Guess the Number",
                }),
                w.jsx("p", {
                  className: "text-xl",
                  children:
                    "Guess a number from 1-100 using the questions provided!",
                }),
                w.jsx("p", {
                  className: "font-bold text-4xl text-secondary ",
                  children: new Date(y * 1e3).toISOString().slice(11, 19),
                }),
              ],
            }),
            w.jsxs("div", {
              className: "flex w-screen text-center",
              children: [
                w.jsxs("div", {
                  className: "w-1/3",
                  children: [
                    w.jsx("p", {
                      className: "font-bold text-7xl text-secondary",
                      children: n,
                    }),
                    w.jsx("p", {
                      className: "text-xl",
                      children: "Lives Remaining",
                    }),
                  ],
                }),
                w.jsxs("div", {
                  className: "w-1/3 my-auto flex flex-col mt-5",
                  children: [
                    w.jsx("form", {
                      onSubmit: (P) => {
                        P.preventDefault(), b();
                      },
                      children: w.jsx("input", {
                        type: "tel",
                        value: a,
                        onChange: S,
                        className:
                          "mx-auto bg-transparent text-center w-28 text-6xl outline rounded-xl outline-secondary" +
                          (c ? " animate-shake" : ""),
                        maxLength: 3,
                      }),
                    }),
                    w.jsx("button", {
                      onClick: b,
                      className:
                        " bg-primary text-center flex  mx-auto my-4 w-32 xs:w-48 min-w-max rounded-xl py-2 justify-center  text-text hover:bg-accent hover:shadow-md transition-all duration-300 font-semibold ",
                      children: "Submit",
                    }),
                  ],
                }),
                w.jsxs("div", {
                  className: "w-1/3",
                  children: [
                    w.jsx("p", {
                      className: "font-bold text-7xl text-secondary",
                      children: o.length,
                    }),
                    w.jsx("p", { className: "text-xl", children: "Guesses" }),
                  ],
                }),
              ],
            }),
            o.length != 0 &&
              w.jsxs("div", {
                className:
                  "flex justify-center mx-auto flex-col text-center animate-show",
                children: [
                  w.jsx("p", {
                    className: "text-4xl my-4 mb-0 font-semibold",
                    children: "Clues",
                  }),
                  w.jsx("div", {
                    className:
                      "flex gap-8 justify-center mx-auto my-4 flex-wrap gap-y-4",
                    children: o.map((P, N) =>
                      w.jsx(
                        "p",
                        {
                          className:
                            "text-xl bg-secondary px-4 py-2 rounded-xl text-background animate-show",
                          children: P.guessString,
                        },
                        N,
                      ),
                    ),
                  }),
                ],
              }),
            w.jsxs("div", {
              className:
                "flex justify-center mx-auto flex-col text-center mb-8 lg:mb-0",
              children: [
                w.jsx("p", {
                  className: "text-4xl my-4 mb-0 font-semibold",
                  children: "Guess",
                }),
                w.jsx("div", {
                  className:
                    "flex gap-8 justify-center mx-auto my-4 flex-wrap gap-y-4",
                  children: Object.values(Jt)
                    .filter((P) =>
                      P == Jt.ISEVEN || P == Jt.ISPRIME
                        ? !o.map((N) => N.guessType).includes(P)
                        : P,
                    )
                    .map((P, N) => w.jsx(WA, { guessType: P, onClick: D }, N)),
                }),
              ],
            }),
            w.jsx(Br, { loading: h }),
            w.jsx(m2, {
              game: _t.MAKINATOR_GUESS,
              statistics: { time: y, guesses: o.length, lives: n, score: B() },
              highscore: E ??
                JSON.parse(
                  localStorage.getItem("guessStatistics") ?? "[]",
                ).sort((P, N) => N.score - P.score)[0] ?? {
                  time: y,
                  guesses: o.length,
                  lives: n,
                  score: B(),
                },
              isOpen: m && !h,
              resetGame: C,
              setIsOpen: g,
            }),
            w.jsx(Vn, {
              title: "Error",
              text: "Enter a number!",
              isOpen: l,
              setIsOpen: u,
            }),
          ],
        }),
      }),
    })
  );
}
function gh({ email: e, isOpen: t, action: n, setIsOpen: r }) {
  const [o, i] = _.useState(""),
    [a, s] = _.useState(!1),
    [l, u] = _.useState(!1),
    c = async () => {
      if (
        (await ut("/verify/check", "POST", { email: e, code: o })).status !==
        We.SUCCESS
      )
        return n(!1);
      n(!0);
    },
    d = async () => {
      u(!0),
        await ut("/verify/send", "POST", {
          email: e,
          service: "Makinator Verification",
        }),
        u(!1),
        s(!0);
    };
  return w.jsxs(su, {
    ariaHideApp: !1,
    isOpen: t,
    className:
      " w-4/12 p-10 rounded-xl h-1/3 min-h-80 min-w-96 bg-background text-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " +
      (t ? "animate-show" : "animate-hide"),
    overlayClassName:
      "bg-text-800/80 absolute w-full h-full top-0 left-0 " +
      (t ? "animate-show" : "animate-hide"),
    closeTimeoutMS: 300,
    children: [
      w.jsxs("div", {
        className: "w-full h-full flex flex-col text-center justify-around",
        children: [
          w.jsx("p", {
            className: "text-5xl font-bold mt-2",
            children: "Verification",
          }),
          w.jsxs("p", {
            className: "text-xl  mt-2",
            children: [
              "Enter the verification code that was sent to",
              " ",
              w.jsx("p", { className: "font-bold", children: e }),
            ],
          }),
          w.jsx("input", {
            type: "tel",
            value: o,
            onChange: (f) => i(f.currentTarget.value),
            className:
              "mx-auto my-2 mt-5 bg-transparent text-center outline rounded outline-primary",
          }),
          w.jsx("p", {
            className:
              "text-secondary text-center text-lg hover:underline transition-all duration-300 w-fit mx-auto cursor-pointer mb-2 ",
            onClick: d,
            children: "Resend code",
          }),
          w.jsxs("div", {
            className: "flex gap-2 mx-auto justify-center",
            children: [
              w.jsx(Et, { text: "Cancel", action: () => r(!1) }),
              w.jsx(Et, { text: "Submit", action: c }),
            ],
          }),
        ],
      }),
      w.jsx(Br, { loading: l }),
      w.jsx(Vn, {
        title: "Success",
        text: "The code has been resent!",
        isOpen: a,
        setIsOpen: s,
      }),
    ],
  });
}
function L_() {
  const e = Ka(),
    [t, n] = _.useState(""),
    [r, o] = _.useState(!1),
    [i, a] = _.useState(["Error", "An error occured!"]),
    [s, l] = _.useState(!1),
    [u, c] = _.useState(!1),
    d = (m, g) => {
      a(g ? [g, m] : ["Error", m]), o(!0);
    },
    f = async () => {
      l(!0);
      const m = await ut("/users/check", "POST", { email: t });
      if (m.status !== We.GENERIC_ERROR) {
        if ((l(!1), m.status !== We.EMAIL_IN_USE))
          return d("There is no account with that email!");
        if (
          (
            await ut("/verify/send", "POST", {
              email: t,
              service: "Makinator Verification",
            })
          ).status === We.ERROR_SENDING_CODE
        )
          return d("There was an error sending the code!");
        c(!0);
      }
    },
    x = async (m) => {
      if (!m) return d("The verification code is incorrect!");
      c(!1), d("You are now logged in!", "Success");
      const g = await ut(`/users/${t}`, "GET");
      g.status === We.SUCCESS
        ? (localStorage.clear(),
          localStorage.setItem("userID", g.user._id),
          e("/"),
          e(0))
        : d("There was an error logging you in!", "Error");
    };
  return (
    _.useEffect(() => {
      l(!0),
        uu().then((m) => {
          if (m) return e("/profile");
          l(!1);
        });
    }, [e]),
    w.jsx(Ar, {
      children: w.jsxs("div", {
        className:
          "bg-transparent text-text text-center h-[calc(100%-80px)] w-full flex",
        children: [
          w.jsxs("div", {
            className:
              "m-auto justify-center h-full w-full align-middle text-center mt-20",
            children: [
              w.jsx("p", {
                className: "text-4xl my-4 font-semibold",
                children: "Login",
              }),
              w.jsx("hr", { className: "w-4/12 mx-auto mb-4" }),
              w.jsxs("div", {
                className: "text-2xl justify-center mx-auto flex flex-col",
                children: [
                  w.jsx("p", { children: "Email" }),
                  w.jsx("form", {
                    onSubmit: (m) => {
                      m.preventDefault(), f();
                    },
                    children: w.jsx("input", {
                      value: t,
                      onChange: (m) =>
                        n(m.currentTarget.value.toLocaleLowerCase()),
                      className:
                        "mx-auto my-2 bg-transparent text-center outline rounded outline-primary",
                    }),
                  }),
                  w.jsx(ao, {
                    to: "/signup",
                    className:
                      "text-secondary text-center text-lg hover:underline transition-all duration-300 w-fit mx-auto ",
                    children: "Need to sign up?",
                  }),
                  w.jsx(Et, { disabled: s, text: "Submit", action: f }),
                ],
              }),
              w.jsx(Br, { loading: s }),
            ],
          }),
          w.jsx(gh, { setIsOpen: c, isOpen: u, email: t, action: x }),
          w.jsx(Vn, { title: i[0], text: i[1], isOpen: r, setIsOpen: o }),
        ],
      }),
    })
  );
}
function I_() {
  const e = Ka(),
    [t, n] = _.useState(""),
    [r, o] = _.useState(""),
    [i, a] = _.useState(!1),
    [s, l] = _.useState(["Error", "An error occured!"]),
    [u, c] = _.useState(!1),
    [d, f] = _.useState(!1),
    x = (E, v) => {
      l(v ? [v, E] : ["Error", E]), a(!0);
    },
    m = async () => {
      c(!0);
      const E = await ut("/users/check", "POST", { username: t, email: r });
      if ((console.log(E), E.status !== We.GENERIC_ERROR)) {
        if ((c(!1), E.status === We.EMAIL_IN_USE))
          return x("The email is already in use!");
        if (E.status === We.USERNAME_IN_USE)
          return x("The username is already in use!");
        const v = await ut("/verify/send", "POST", {
          email: r,
          service: "Makinator Verification",
        });
        if (v.status === We.INVALID_EMAIL) return x("That email is invalid!");
        if (v.status === We.EMAIL_NOT_EXIST)
          return x("That email does not exist!");
        if (v.status === We.ERROR_SENDING_CODE)
          return x("There was an error sending the code!");
        f(!0);
      }
    },
    g = async (E) => {
      if (!E) return x("The verification code is incorrect!");
      f(!1), x("You are now registered!", "Success");
      const v = JSON.parse(localStorage.getItem("guessStatistics") ?? "[]"),
        h = JSON.parse(localStorage.getItem("piStatistics") ?? "[]"),
        p = JSON.parse(localStorage.getItem("onlineStatistics") ?? "[]"),
        y = await ut("/users/update", "POST", {
          username: t,
          email: r,
          dateJoined: Date.now(),
          avatar: "",
          makinatorData: { guessGames: v, piGames: h, onlineGames: p },
        });
      y.status === We.SUCCESS &&
        (localStorage.clear(), localStorage.setItem("userID", y.id)),
        e("/"),
        e(0);
    };
  return (
    _.useEffect(() => {
      c(!0),
        uu().then((E) => {
          E && e("/profile");
        }),
        c(!1);
    }, [e]),
    w.jsx(Ar, {
      children: w.jsxs("div", {
        className:
          "bg-transparent text-text mb-auto text-center h-[calc(100%-80px)] flex",
        children: [
          w.jsxs("div", {
            className:
              "mx-auto justify-center w-full align-middle text-center mt-20",
            children: [
              w.jsx("p", {
                className: "text-4xl my-4 font-semibold",
                children: "Sign Up",
              }),
              w.jsx("hr", { className: "w-4/12 mx-auto mb-4" }),
              w.jsxs("div", {
                className: "text-2xl justify-center mx-auto flex flex-col",
                children: [
                  w.jsx("p", { children: "Username" }),
                  w.jsx("input", {
                    value: t,
                    maxLength: 24,
                    onChange: (E) => n(E.currentTarget.value),
                    className:
                      "mx-auto my-2 bg-transparent text-center outline rounded outline-primary",
                  }),
                  w.jsx("p", { children: "Email" }),
                  w.jsx("input", {
                    value: r,
                    onChange: (E) =>
                      o(E.currentTarget.value.toLocaleLowerCase()),
                    className:
                      "mx-auto my-2 bg-transparent text-center outline rounded outline-primary",
                  }),
                  w.jsx(ao, {
                    to: "/login",
                    className:
                      "text-secondary text-center text-lg hover:underline transition-all duration-300 w-fit mx-auto ",
                    children: "Need to login?",
                  }),
                  w.jsx(Et, { disabled: u, text: "Submit", action: m }),
                ],
              }),
              w.jsx(Br, { loading: u }),
            ],
          }),
          w.jsx(gh, { setIsOpen: f, isOpen: d, email: r, action: g }),
          w.jsx(Vn, { title: s[0], text: s[1], isOpen: i, setIsOpen: a }),
        ],
      }),
    })
  );
}
function ev({ name: e, icon: t, highscore: n, gamesPlayed: r }) {
  return w.jsxs("div", {
    className:
      "bg-secondary/50 rounded-lg p-5 pt-3 flex flex-col text-center text-lg font-semibold",
    children: [
      t,
      w.jsx("p", { className: "text-2xl mx-auto font-bold", children: e }),
      w.jsxs("div", {
        className: "flex mx-auto gap-2",
        children: [
          w.jsx("p", { className: "text-secondary", children: "Highscore:" }),
          w.jsx("p", { children: n }),
        ],
      }),
      w.jsxs("div", {
        className: "flex mx-auto gap-2",
        children: [
          w.jsx("p", {
            className: "text-secondary",
            children: "Games Played:",
          }),
          w.jsx("p", { children: r }),
        ],
      }),
    ],
  });
}
function z_({ isOpen: e, setIsOpen: t }) {
  const n = Ka(),
    [r, o] = _.useState(!1),
    [i, a] = _.useState(""),
    [s, l] = _.useState(""),
    [u, c] = _.useState(""),
    [d, f] = _.useState(""),
    [x, m] = _.useState(""),
    [g, E] = _.useState(!1),
    [v, h] = _.useState(["", ""]),
    [p, y] = _.useState(!1),
    A = _.createRef(),
    C = (b, B) => {
      h(B ? [B, b] : ["Error", b]), E(!0);
    };
  _.useEffect(() => {
    o(!0),
      uu().then((b) => {
        if (!b) return n("/login"), n(0);
        a(b._id), l(b.avatar), c(b.username), f(b.email), m(b.email), o(!1);
      });
  }, [n]);
  const S = async (b) => {
      if (b.target.files) {
        const B = b.target.files[0];
        if (
          ![
            "jpg",
            "jpeg",
            "bmp",
            "gif",
            "svg",
            "webp",
            "jfif",
            "avif",
            "apng",
          ].includes(B.name.split(".").reverse()[0].toLowerCase())
        )
          return C("That is not a valid image file!");
        try {
          const P = await AD(B);
          l(P);
        } catch (P) {
          alert(P);
        }
      }
    },
    D = async (b) =>
      b
        ? (
            await ut("/users/update", "POST", {
              _id: i,
              email: d,
              username: u,
              avatar: s,
            })
          ).status === We.SUCCESS
          ? t(!1)
          : C("An error occurred updating your profile!")
        : C("The verification code is incorrect!");
  return w.jsxs(su, {
    ariaHideApp: !1,
    isOpen: e,
    className:
      " w-4/12 p-10 rounded-xl h-7/12 min-h-96 min-w-96 bg-background text-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " +
      (e ? "animate-show" : "animate-hide"),
    overlayClassName:
      "bg-text-800/80 absolute w-full h-full top-0 left-0 " +
      (e ? "animate-show" : "animate-hide"),
    closeTimeoutMS: 300,
    children: [
      w.jsxs("div", {
        className: "w-full h-full flex flex-col text-center ",
        children: [
          w.jsx("p", {
            className: "text-5xl font-bold mb-4",
            children: "Edit Profile",
          }),
          w.jsxs("div", {
            className: "relative text-center mx-auto cursor-pointer group",
            onClick: () => {
              var b;
              return (b = A.current) == null ? void 0 : b.click();
            },
            children: [
              s !== ""
                ? w.jsx("img", {
                    src: s,
                    className: "rounded-xl max-w-32 group",
                  })
                : w.jsx(sh, { size: 125 }),
              w.jsx("div", {
                className:
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:animate-show animate-hide bg-background/60 w-full h-full flex",
                children: w.jsx(FA, { size: 25, className: "m-auto" }),
              }),
            ],
          }),
          w.jsxs("div", {
            className: "mx-auto mt-4",
            children: [
              w.jsx("p", {
                className: "text-2xl font-bold ",
                children: "Username",
              }),
              w.jsx("input", {
                value: u,
                onChange: (b) => c(b.currentTarget.value),
                className:
                  "mx-auto my-2 bg-transparent text-center outline rounded outline-primary",
              }),
              w.jsx("p", {
                className: "text-2xl font-bold ",
                children: "Email",
              }),
              w.jsx("input", {
                value: d,
                onChange: (b) => f(b.currentTarget.value),
                className:
                  "mx-auto my-2  bg-transparent text-center outline rounded outline-primary",
              }),
            ],
          }),
          w.jsxs("div", {
            className: "flex gap-2 mx-auto justify-center mt-4",
            children: [
              w.jsx(Et, { text: "Cancel", action: () => t(!1) }),
              w.jsx(Et, {
                text: "Submit",
                action: () => (d == x ? D(!0) : y(!0)),
              }),
            ],
          }),
        ],
      }),
      w.jsx("input", {
        type: "file",
        ref: A,
        name: "avatar",
        accept: "image/*",
        onChange: (b) => S(b),
        className: "hidden",
      }),
      w.jsx(Br, { loading: r }),
      w.jsx(gh, { setIsOpen: y, isOpen: p, email: d, action: D }),
      w.jsx(Vn, { title: v[0], text: v[1], isOpen: g, setIsOpen: E }),
    ],
  });
}
function $_() {
  var m, g, E, v, h, p;
  const e = Ka(),
    [t, n] = _.useState(!1),
    [r, o] = _.useState(),
    [i, a] = _.useState([]),
    [s, l] = _.useState(!1),
    [u, c] = _.useState(!1),
    [d, f] = _.useState(!1);
  _.useEffect(() => {
    s ||
      (n(!0),
      uu().then((y) => {
        if (!y) return e("/login"), e(0);
        ut(`/games/${y._id}/highscores`, "POST", {
          userID: y._id,
          types: [_t.MAKINATOR_GUESS, _t.MAKINATOR_PI, _t.MAKINATOR_ONLINE],
        }).then((A) => {
          if (A.status !== We.SUCCESS) return c(!0);
          a(A.highscores ?? []);
        }),
          o(y),
          n(!1);
      }));
  }, [e, s]);
  const x = () => (localStorage.clear(), e("/"), e(0));
  return w.jsxs("div", {
    className:
      "text-text bg-transparent w-full h-[calc(100%-80px)] my-auto flex",
    children: [
      w.jsxs("div", {
        className: "m-auto align-middle w-full justify-center flex flex-col ",
        children: [
          w.jsxs("div", {
            className: "flex flex-col lg:flex-row mx-auto gap-8 mt-24",
            children: [
              (r == null ? void 0 : r.avatar) !== ""
                ? w.jsx("img", {
                    src: r == null ? void 0 : r.avatar,
                    className: "rounded-xl max-w-72 mx-auto my-auto",
                  })
                : w.jsx(sh, { size: 250, className: "m-auto justify-center" }),
              w.jsxs("div", {
                className:
                  "flex flex-col my-auto align-middle text-center lg:text-left ",
                children: [
                  w.jsx("p", {
                    className: "text-5xl 2xs:text-6xl sm:text-8xl font-bold ",
                    children: r == null ? void 0 : r.username,
                  }),
                  w.jsx("p", {
                    className:
                      "text-2xl md:text-3xl text-secondary font-semibold",
                    children: r == null ? void 0 : r.email,
                  }),
                  w.jsxs("p", {
                    className: "text-lg md:text-xl text-accent-300",
                    children: [
                      "Date Joined:",
                      " ",
                      (() => {
                        const y = new Date(
                          (r == null ? void 0 : r.dateJoined) ?? 0,
                        );
                        return (
                          [y.getMonth() + 1, y.getDate(), y.getFullYear()].join(
                            "/",
                          ) +
                          " " +
                          [y.getHours(), y.getMinutes(), y.getSeconds()].join(
                            ":",
                          )
                        );
                      })(),
                    ],
                  }),
                ],
              }),
            ],
          }),
          w.jsx("hr", {
            className:
              "w-1/2 lg:w-3/4 mx-auto border-background-800 my-3 border-2",
          }),
          w.jsxs("div", {
            className: "flex flex-col lg:flex-col-reverse",
            children: [
              w.jsxs("div", {
                className:
                  "flex gap-8 mx-auto flex-wrap justify-center lg:mb-6",
                children: [
                  w.jsx(Et, { text: "Edit Profile", action: () => l(!0) }),
                  w.jsx(Et, { text: "Logout", action: () => f(!0) }),
                ],
              }),
              w.jsx("hr", {
                className:
                  "w-3/4 lg:w-1/2 mx-auto border-background-800 my-3 border-2",
              }),
              w.jsxs("div", {
                className:
                  "flex mx-auto gap-8 flex-wrap justify-center py-3 mb-8 lg:mb-0",
                children: [
                  w.jsx(ev, {
                    icon: w.jsx(TA, {
                      size: 50,
                      className: "mx-auto text-secondary",
                    }),
                    highscore:
                      ((g = (m = i[0]) == null ? void 0 : m.game) == null
                        ? void 0
                        : g.score) ?? 0,
                    name: "Guess the Number",
                    gamesPlayed:
                      ((E = i[0]) == null ? void 0 : E.gamesPlayed) ?? 0,
                  }),
                  w.jsx(ev, {
                    icon: w.jsx(IA, {
                      size: 50,
                      className: "mx-auto text-secondary",
                    }),
                    highscore:
                      ((h = (v = i[1]) == null ? void 0 : v.game) == null
                        ? void 0
                        : h.score) ?? 0,
                    name: "Digits of PI",
                    gamesPlayed:
                      ((p = i[1]) == null ? void 0 : p.gamesPlayed) ?? 0,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      w.jsx(Br, { loading: t }),
      w.jsx(z_, { setIsOpen: l, isOpen: s }),
      w.jsx(Vn, {
        title: "Error",
        text: "There was an error fething the data!",
        isOpen: u,
        setIsOpen: c,
      }),
      w.jsx(Vn, {
        title: "Confirmation",
        text: "Are you sure you want to logout?",
        action: x,
        cancel: !0,
        isOpen: d,
        setIsOpen: f,
      }),
    ],
  });
}
function V_() {
  const e = [..."/?<>⋅=+÷^*!±√Δ∞∑φπ∏∝∫"],
    t = ["#5435cb", "#7499fd", "#D7263D", "#1B998B"],
    [n, r] = _.useState(0);
  return (
    _.useLayoutEffect(() => {
      function o() {
        r(document.body.scrollHeight);
      }
      return (
        window.addEventListener("resize", o),
        o(),
        () => window.removeEventListener("resize", o)
      );
    }, []),
    w.jsx("ul", {
      className:
        "absolute m-0 top-0 left-0 overflow-x-hidden overflow-y-hidden w-full -z-10 bg-background",
      style: { height: `${n}px` },
      children: [...Array(50)].map((o, i) => {
        const a = Math.floor(Math.random() * 131) + 60;
        return w.jsx(
          "li",
          {
            className:
              "absolute flex list-none align-middle justify-center text-8xl w-5 h-5 -bottom-48 animate-animatedLetters",
            style: {
              left: `${Math.floor(Math.random() * 111) - 10}%`,
              color: t[Math.floor(Math.random() * t.length)],
              width: a,
              height: a,
              animationDelay: `${Math.floor(Math.random() * 8)}s`,
              animationDuration: `${Math.floor(Math.random() * 51) + 10}s`,
            },
            children: e[Math.floor(Math.random() * e.length)],
          },
          i,
        );
      }),
    })
  );
}
function U_() {
  const [e, t] = _.useState(!1),
    n = _.useRef(null),
    r = (o) => {
      t(o),
        o
          ? n.current && o && (n.current.style.display = "flex")
          : setTimeout(() => {
              n.current && (n.current.style.display = "none");
            }, 500),
        (document.body.style.overflowY = o ? "hidden" : "auto");
    };
  return w.jsxs("div", {
    className:
      "flex w-screen mx-auto shadow-lg h-20  bg-background border-b-2 border-background-800 z-20 absolute top-0 left-0",
    children: [
      w.jsx("div", {
        className: "w-1/2",
        children: w.jsx(ao, {
          to: "/",
          className: " justify-left flex align-middle transition w-fit",
          children: w.jsxs("div", {
            className: "group flex align-middle my-auto",
            children: [
              w.jsx("img", {
                src: "/logo.png",
                className: "h-14 m-2 rounded-xl",
              }),
              w.jsxs("div", {
                className:
                  "flex my-auto  flex-col justify-center align-middle max-w-fit",
                children: [
                  w.jsx("p", {
                    className:
                      "text-left m-4 mb-0 text-4xl font-bold bg-gray bg-gradient-to-r from-text to-text bg-clip-text text-transparent",
                    children: "Makinator",
                  }),
                  w.jsx("hr", {
                    className:
                      "bg-gradient-to-r from-primary to-accent max-w-0 group-hover:max-w-full transition-all duration-500 h-1 border-none rounded-xl mb-4",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      w.jsxs("div", {
        className: "flex w-1/2 justify-end items-center",
        children: [
          w.jsxs("div", {
            className:
              "flex lg:hidden group items-center flex-col w-16 aspect-square py-3 hover:bg-background-800 dark:hover:bg-background-800 rounded-lg mr-2 p-1 my-auto align-middle cursor-pointer transition-all ",
            onClick: () => r(!e),
            children: [
              w.jsx("span", {
                className:
                  "bg-gray dark:bg-text w-10 block h-1 rounded my-auto duration-300" +
                  (e ? " -rotate-45 translate-y-[13px]" : " rotate-0"),
              }),
              w.jsx("span", {
                className:
                  " w-10 block h-1 rounded my-auto duration-300" +
                  (e ? " bg-transparent " : " bg-gray dark:bg-text"),
              }),
              w.jsx("span", {
                className:
                  "bg-gray dark:bg-text w-10 block h-1 rounded my-auto duration-300" +
                  (e ? " rotate-45 -translate-y-[13px]" : " rotate-0"),
              }),
            ],
          }),
          w.jsxs("div", {
            className:
              "justify-left hidden lg:flex text-lg text-gray gap-4 mx-4",
            children: [
              w.jsx(nn, { route: "/play", text: "Play" }),
              w.jsx(nn, { route: "/leaderboards", text: "Leaderboards" }),
              localStorage.getItem("userID")
                ? w.jsx(nn, { route: "/profile", text: "Profile" })
                : w.jsx(nn, { route: "/login", text: "Login" }),
            ],
          }),
        ],
      }),
      w.jsxs("div", {
        onClick: () => r(!1),
        ref: n,
        className:
          " bg-white/80 dark:bg-primary/20 w-full absolute mx-auto h-fit top-20 z-50 justify-center flex-wrap transition duration-300" +
          (e ? " animate-show" : " animate-hide hidden"),
        children: [
          w.jsx(nn, { route: "/play", text: "Play" }),
          w.jsx(nn, { route: "/leaderboards", text: "Leaderboards" }),
          localStorage.getItem("userID")
            ? w.jsx(nn, { route: "/profile", text: "Profile" })
            : w.jsx(nn, { route: "/login", text: "Login" }),
        ],
      }),
    ],
  });
}
function H_() {
  return w.jsxs("div", {
    className:
      "absolute flex justify-center align-middle bottom-0 left-1/2  -translate-x-1/2 text-text bg-background/60 rounded-t-xl -z-10",
    children: [
      w.jsx(ao, {
        className: "h-min max-h-fit m-2 hover:underline",
        to: "https://notaroomba.dev",
        children: "Website",
      }),
      w.jsx("p", { className: "m-2", children: "•" }),
      w.jsx("p", { className: "m-2 font-bold", children: "NotARoomba" }),
      w.jsx("p", { className: "m-2", children: "•" }),
      w.jsx(ao, {
        className: "h-min max-h-fit m-2 hover:underline",
        to: "https://github.com/NotARoomba/Makinator",
        children: "GitHub",
      }),
    ],
  });
}
function W_() {
  return w.jsxs(w.Fragment, {
    children: [w.jsx(U_, {}), w.jsx(H6, {}), w.jsx(V_, {}), w.jsx(H_, {})],
  });
}
function G_() {
  const [e, t] = _.useState(!1),
    [n, r] = _.useState(_t.MAKINATOR_GUESS),
    [o, i] = _.useState(),
    [a, s] = _.useState(!1),
    [l, u] = _.useState(["", ""]),
    c = (d, f) => {
      u(f ? [f, d] : ["Error", d]), s(!0);
    };
  return (
    _.useEffect(() => {
      t(!0),
        console.log(n),
        ut("/games/highscores", "POST", { type: n }).then((d) => {
          if (d.status !== We.SUCCESS)
            return t(!1), c("There was an error fetching the highscores!");
          i(d.highscores), t(!1);
        });
    }, [n]),
    w.jsx(Ar, {
      children: w.jsxs("div", {
        className:
          "bg-transparent text-text text-center h-[calc(100%-80px)] w-full flex",
        children: [
          w.jsxs("div", {
            className:
              "m-auto justify-center h-full w-full align-middle text-center pt-20",
            children: [
              w.jsx("p", {
                className: "text-4xl my-4 mb-0 font-semibold",
                children: "Leaderboards",
              }),
              w.jsx("div", {
                className: "flex justify-center gap-8 mb-4",
                children: [
                  { "Guess the Number": _t.MAKINATOR_GUESS },
                  { "Digits of PI": _t.MAKINATOR_PI },
                ].map((d, f) =>
                  w.jsx(
                    Et,
                    {
                      text: Object.keys(d)[0],
                      action: () => r(Object.values(d)[0]),
                      selected: n === Object.values(d)[0],
                    },
                    f,
                  ),
                ),
              }),
              w.jsxs("table", {
                className:
                  "justify-around m-auto w-[85vw] table-fixed bg-background/70 ",
                children: [
                  w.jsx("thead", {
                    children: w.jsxs("tr", {
                      className: "py-8 text-xl md:text-2xl",
                      children: [
                        w.jsx("th", {
                          className: "text-red",
                          children: "Rank",
                        }),
                        w.jsx("th", {
                          className: "text-green",
                          children: "Score",
                        }),
                        w.jsx("th", {
                          className: "text-secondary",
                          children: "User",
                        }),
                      ],
                    }),
                  }),
                  w.jsx("tbody", {
                    children:
                      (o == null ? void 0 : o.length) !== 0
                        ? o == null
                          ? void 0
                          : o.map((d, f) =>
                              w.jsxs(
                                "tr",
                                {
                                  className:
                                    "py-8 text-center break-words text-lg font-bold " +
                                    (f == 0
                                      ? " text-[#c9b037]"
                                      : f == 1
                                        ? " text-[#b4b4b4]"
                                        : f == 2
                                          ? " text-[#77502a]"
                                          : " text-text"),
                                  children: [
                                    w.jsx("td", {
                                      className: "py-2",
                                      children: f + 1,
                                    }),
                                    w.jsx("td", { children: d.score }),
                                    w.jsxs("td", {
                                      className:
                                        "sm:flex my-auto align-middle text-center justify-center",
                                      children: [
                                        " ",
                                        d.avatar !== ""
                                          ? w.jsx("img", {
                                              src: d.avatar,
                                              className:
                                                "rounded-xl max-w-12 my-auto mx-auto sm:mx-0",
                                            })
                                          : w.jsx(sh, {
                                              size: 48,
                                              color: "#ffffff",
                                              className:
                                                "mx-auto sm:mx-0 justify-center",
                                            }),
                                        w.jsx("p", {
                                          className:
                                            "align-middle my-auto mx-auto sm:mx-2 min-w-fit text-center",
                                          children: d.username,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                f,
                              ),
                            )
                        : w.jsxs("tr", {
                            className:
                              "py-8 text-center break-words text-lg font-bold",
                            children: [
                              w.jsx("td", { children: "No Data" }),
                              w.jsx("td", { children: "No Data" }),
                              w.jsx("td", { children: "No Data" }),
                            ],
                          }),
                  }),
                ],
              }),
            ],
          }),
          w.jsx(Br, { loading: e }),
          w.jsx(Vn, { title: l[0], text: l[1], isOpen: a, setIsOpen: s }),
        ],
      }),
    })
  );
}
const K_ = "/pi.txt";
var bf = function () {
    return (bf =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var o in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }).apply(this, arguments);
  },
  Oi,
  Mi,
  Ff = _.createContext(void 0),
  tv =
    "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML",
  nv =
    "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js",
  q_ = function (c) {
    var t = c.config,
      n = c.version,
      n = n === void 0 ? 3 : n,
      r = c.src,
      r = r === void 0 ? (n === 2 ? tv : nv) : r,
      o = c.onStartup,
      i = c.onLoad,
      a = c.onError,
      s = c.typesettingOptions,
      l = c.renderMode,
      l = l === void 0 ? "post" : l,
      u = c.hideUntilTypeset,
      c = c.children,
      f = _.useContext(Ff);
    if (
      (f == null ? void 0 : f.version) !== void 0 &&
      (f == null ? void 0 : f.version) !== n
    )
      throw Error(
        "Cannot nest MathJaxContexts with different versions. MathJaxContexts should not be nested at all but if they are, they cannot have different versions. Stick with one version of MathJax in your app and avoid using more than one MathJaxContext.",
      );
    if ((n === 2 && Mi !== void 0) || (n === 3 && Oi !== void 0))
      throw Error(
        "Cannot use MathJax versions 2 and 3 simultaneously in the same app due to how MathJax is set up in the browser; either you have multiple MathJaxContexts with different versions or you have mounted and unmounted MathJaxContexts with different versions. Please stick with one version of MathJax in your app. File an issue in the project Github page if you need this feature.",
      );
    var d = _.useRef(f),
      f = _.useRef((f == null ? void 0 : f.version) || null);
    if (f.current === null) f.current = n;
    else if (f.current !== n)
      throw Error(
        "Cannot change version of MathJax in a MathJaxContext after it has mounted. Reload the page with a new version when this must happen.",
      );
    var x = r || (n === 2 ? tv : nv);
    function m(g, E) {
      t && (window.MathJax = t);
      var v = document.createElement("script");
      (v.type = "text/javascript"),
        (v.src = x),
        (v.async = !1),
        v.addEventListener("load", function () {
          var h = window.MathJax;
          o && o(h), g(h), i && i();
        }),
        v.addEventListener("error", function (h) {
          return E(h);
        }),
        document.getElementsByTagName("head")[0].appendChild(v);
    }
    return (
      d.current === void 0 &&
        ((f = { typesettingOptions: s, renderMode: l, hideUntilTypeset: u }),
        n === 2
          ? Oi === void 0 &&
            (typeof window < "u"
              ? (Oi = new Promise(m)).catch(function (g) {
                  if (!a)
                    throw Error(
                      "Failed to download MathJax version 2 from '"
                        .concat(x, "' due to: ")
                        .concat(g),
                    );
                  a(g);
                })
              : (Oi = Promise.reject()).catch(function (g) {}))
          : Mi === void 0 &&
            (typeof window < "u"
              ? (Mi = new Promise(m)).catch(function (g) {
                  if (!a)
                    throw Error(
                      "Failed to download MathJax version 3 from '"
                        .concat(x, "' due to: ")
                        .concat(g),
                    );
                  a(g);
                })
              : (Mi = Promise.reject()).catch(function (g) {})),
        (d.current = bf(
          bf({}, f),
          n === 2 ? { version: 2, promise: Oi } : { version: 3, promise: Mi },
        ))),
      ue.createElement(Ff.Provider, { value: d.current }, c)
    );
  };
const Y_ = q_;
var Zn = function () {
    return (Zn =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var o in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }).apply(this, arguments);
  },
  X_ = function (e, t) {
    var n = {};
    for (o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
        t.indexOf(o[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
          (n[o[r]] = e[o[r]]);
    return n;
  },
  Li = function (e) {
    return "Typesetting failed: ".concat(
      e.message !== void 0 ? e.message : e.toString(),
    );
  },
  Q_ = function (e) {
    function t() {
      var A;
      g === "every" &&
        h &&
        E === "post" &&
        x.current !== null &&
        (x.current.style.visibility =
          (A = (A = d.style) == null ? void 0 : A.visibility) != null
            ? A
            : "visible"),
        p.current ||
          (g === "first" &&
            x.current !== null &&
            (x.current.style.visibility = "visible"),
          o && o(),
          (p.current = !0)),
        i && i(),
        (y.current = !1);
    }
    var r = e.inline,
      n = r !== void 0 && r,
      r = e.hideUntilTypeset,
      o = e.onInitTypeset,
      i = e.onTypeset,
      a = e.text,
      s = e.dynamic,
      l = e.typesettingOptions,
      u = e.renderMode,
      c = e.children,
      d = X_(e, [
        "inline",
        "hideUntilTypeset",
        "onInitTypeset",
        "onTypeset",
        "text",
        "dynamic",
        "typesettingOptions",
        "renderMode",
        "children",
      ]),
      f = _.useRef(""),
      x = _.useRef(null),
      m = _.useContext(Ff),
      g = r ?? (m == null ? void 0 : m.hideUntilTypeset),
      E = u ?? (m == null ? void 0 : m.renderMode),
      v = l ?? (m == null ? void 0 : m.typesettingOptions),
      h = s !== !1 && (s || !1),
      p = _.useRef(!1),
      y = _.useRef(!1);
    return (
      !y.current &&
        x.current !== null &&
        h &&
        g === "every" &&
        E === "post" &&
        (x.current.style.visibility = "hidden"),
      (typeof window < "u" ? _.useLayoutEffect : _.useEffect)(function () {
        if ((h || !p.current) && x.current !== null) {
          if (!m)
            throw Error(
              "MathJax was not loaded, did you use the MathJax component outside of a MathJaxContext?",
            );
          if (E === "pre") {
            if (!(typeof (A = a) == "string" && 0 < A.length))
              throw Error(
                `Render mode 'pre' requires text prop to be set and non-empty, which was currently "`.concat(
                  a,
                  '"',
                ),
              );
            if (!l || !l.fn)
              throw Error(
                "Render mode 'pre' requires 'typesettingOptions' prop with 'fn' property to be set on MathJax element or in the MathJaxContext",
              );
            if (m.version === 2)
              throw Error(
                "Render mode 'pre' only available with MathJax 3, and version 2 is currently in use",
              );
          }
          (E !== "post" && a === f.current) ||
            y.current ||
            ((y.current = !0),
            m.version === 3
              ? m.promise
                  .then(function (C) {
                    var S;
                    E === "pre"
                      ? ((S = function (D) {
                          (f.current = a),
                            C.startup.document.clear(),
                            C.startup.document.updateDocument(),
                            x.current !== null &&
                              (x.current.innerHTML = D.outerHTML),
                            t();
                        }),
                        l.fn.endsWith("Promise")
                          ? C.startup.promise
                              .then(function () {
                                return C[v.fn](
                                  a,
                                  Zn(
                                    Zn(
                                      {},
                                      (v == null ? void 0 : v.options) || {},
                                    ),
                                    { display: !n },
                                  ),
                                );
                              })
                              .then(S)
                              .catch(function (D) {
                                throw (t(), Error(Li(D)));
                              })
                          : C.startup.promise
                              .then(function () {
                                var D = C[v.fn](
                                  a,
                                  Zn(
                                    Zn(
                                      {},
                                      (v == null ? void 0 : v.options) || {},
                                    ),
                                    { display: !n },
                                  ),
                                );
                                S(D);
                              })
                              .catch(function (D) {
                                throw (t(), Error(Li(D)));
                              }))
                      : C.startup.promise
                          .then(function () {
                            return (
                              C.typesetClear([x.current]),
                              C.typesetPromise([x.current])
                            );
                          })
                          .then(t)
                          .catch(function (D) {
                            throw (t(), Error(Li(D)));
                          });
                  })
                  .catch(function (C) {
                    throw (t(), Error(Li(C)));
                  })
              : m.promise
                  .then(function (C) {
                    C.Hub.Queue(["Typeset", C.Hub, x.current]), C.Hub.Queue(t);
                  })
                  .catch(function (C) {
                    throw (t(), Error(Li(C)));
                  }));
        }
        var A;
      }),
      ue.createElement(
        "span",
        Zn({}, d, {
          style: Zn(Zn({ display: n ? "inline" : "block" }, d.style), {
            visibility: g
              ? "hidden"
              : (e = d.style) == null
                ? void 0
                : e.visibility,
          }),
          ref: x,
        }),
        c,
      )
    );
  };
const Z_ = Q_;
function J_() {
  const [e, t] = _.useState(["1"]),
    [n, r] = _.useState("    3.".split("")),
    [o, i] = _.useState(3),
    [a, s] = _.useState(""),
    [l, u] = _.useState(!1),
    [c, d] = _.useState(!1),
    [f, x] = _.useState(!1),
    [m, g] = _.useState(!1),
    [E, v] = _.useState(),
    [h, p] = _.useState(!1),
    [y, A] = _.useState(""),
    [C, S] = _.useState(0),
    D = _.createRef(),
    b = {
      initial: ({ i: k, c: M }) => ({
        opacity: 0,
        scale: 0.2,
        transform: `rotate(${360 - (M ? 5 - k : k) * 8}deg) translate(12px, ${
          (M ? 5 - k : k) * 8
        }px) rotate(-${360 - (M ? 5 - k : k) * 8}deg)`,
      }),
      animate: ({ i: k, c: M }) => ({
        opacity: 1,
        scale: 1,
        transform: `rotate(${360 - (M ? 5 - k : k) * 8}deg) translate(${
          M ? "-24" : "0"
        }px, ${(M ? 5 - k : k) * 8}px) rotate(-${
          360 - (M ? 5 - k : k) * 8
        }deg)`,
      }),
      exit: ({ i: k, c: M }) => ({
        opacity: 0,
        scale: 0,
        transform: `rotate(${(M ? 5 - k : k) * 8}deg) translate(${
          M ? "-64" : "-48"
        }px, ${(M ? 5 - k : k) * 8}px) rotate(-${(M ? 5 - k : k) * 8}deg)`,
      }),
    },
    B = () => {
      fetch(K_)
        .then((k) => k.text())
        .then((k) => {
          t(k.split(""));
        }),
        S(0),
        x(!1),
        g(!1),
        s(""),
        r("    3.".split("")),
        A(zm(parseInt(e[0]), n.length - 6)),
        i(3);
    },
    P = () => {
      var k;
      if (a === "") u(!0);
      else if (f) g(!0);
      else if (a != e[0])
        d(!0),
          setTimeout(() => d(!1), 1e3),
          o - 1 < 0 ? i(0) : i(o - 1),
          o - 1 <= 0 && x(!0);
      else {
        (k = D.current) == null || k.focus();
        const M = e.shift();
        t(e), s(""), r([...n, M ?? "0"]), A(zm(parseInt(e[0]), n.length - 6));
      }
    };
  _.useEffect(() => {
    B();
  }, []);
  const N = (k) => {
    if (!Number.isNaN(k.currentTarget.value || k.currentTarget.value == "0")) {
      const M = parseInt(k.currentTarget.value);
      s(M.toString() == "NaN" ? "" : M.toString());
    }
  };
  _.useEffect(() => {
    if (f) document.documentElement.style.overflowY = "hidden";
    else {
      const k = setInterval(() => S(C + 1), 1e3);
      return () => clearInterval(k);
    }
  }, [C, f]);
  const O = () => 200 * (n.length - 6) * 3 ** o;
  return (
    _.useEffect(() => {
      if (f) {
        const k = localStorage.getItem("userID");
        if (k)
          p(!0),
            ut("/games/update", "POST", {
              userID: k,
              type: _t.MAKINATOR_PI,
              game: { time: C, digits: n.length - 6, lives: o, score: O() },
            }).then(() => {
              ut(`/games/${k}/highscore`, "POST", {
                userID: k,
                type: _t.MAKINATOR_PI,
              }).then((M) => {
                v(M.highscore), p(!1), g(!0);
              });
            });
        else {
          const M = JSON.parse(localStorage.getItem("piStatistics") ?? "[]");
          M == null
            ? localStorage.setItem(
                "piStatistics",
                JSON.stringify([
                  { time: C, digits: n.length - 6, lives: o, score: O() },
                ]),
              )
            : localStorage.setItem(
                "piStatistics",
                JSON.stringify([
                  ...M,
                  { time: C, digits: n.length - 6, lives: o, score: O() },
                ]),
              ),
            g(!0);
        }
      }
    }, [f]),
    w.jsx(NS, {
      children: w.jsx(Ar, {
        children: w.jsxs("div", {
          className:
            "bg-transparent text-text h-[calc(100%-80px)] my-auto flex",
          children: [
            w.jsxs("div", {
              className: "m-auto align-middle justify-center mt-20",
              children: [
                w.jsxs("div", {
                  className:
                    "mx-auto justify-center w-full align-middle text-center",
                  children: [
                    w.jsx("p", {
                      className: "text-4xl mt-4 mb-0 font-semibold",
                      children: "Digits of PI",
                    }),
                    w.jsx("p", {
                      className: "text-xl",
                      children: "Guess 1 million digits of PI using equations!",
                    }),
                    w.jsxs("div", {
                      className: "flex",
                      children: [
                        w.jsxs("div", {
                          className: "w-1/3 mx-auto",
                          children: [
                            w.jsx("p", {
                              className:
                                "font-bold text-5xl lg:text-7xl text-secondary text-center",
                              children: o,
                            }),
                            w.jsx("p", {
                              className:
                                " text-lg lg:text-xl text-wrap w-24 flex mx-auto text-center",
                              children: "Lives Remaining",
                            }),
                          ],
                        }),
                        w.jsx("p", {
                          className:
                            "font-bold text-3xl xs:text-4xl w-1/3 text-secondary ",
                          children: new Date(C * 1e3)
                            .toISOString()
                            .slice(11, 19),
                        }),
                        w.jsxs("div", {
                          className: "w-1/3",
                          children: [
                            w.jsx("p", {
                              className:
                                "font-bold text-5xl lg:text-7xl text-secondary",
                              children: n.length - 6,
                            }),
                            w.jsx("p", {
                              className: " text-lg lg:text-xl",
                              children: "Digits",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                w.jsxs("div", {
                  className:
                    "flex my-4 mx-auto justify-center w-screen text-center sm:-mt-6 md:-mt-14",
                  children: [
                    w.jsxs("div", {
                      className: "flex w-fit translate-x-6",
                      children: [
                        n
                          .slice(0, -6)
                          .map((k, M) =>
                            w.jsx(
                              "p",
                              {
                                className:
                                  "text-4xl lg:text-6xl m-0 translate-y-12 animate-animatedPI h-0 w-0",
                                onAnimationEnd: (G) =>
                                  (G.currentTarget.style.display = "hidden"),
                                children: k,
                              },
                              M,
                            ),
                          ),
                        w.jsx("div", {
                          className: "flex",
                          children: n
                            .slice(-6)
                            .map((k, M) =>
                              w.jsx(
                                nf.p,
                                {
                                  custom: { i: M, c: !0 },
                                  variants: b,
                                  initial: "initial",
                                  animate: "animate",
                                  exit: "exit",
                                  transition: { duration: 1, delay: M * 0.05 },
                                  className:
                                    "text-4xl lg:text-6xl mx-1 w-6 lg:w-12 ",
                                  children: k,
                                },
                                k + M,
                              ),
                            ),
                        }),
                      ],
                    }),
                    w.jsx("form", {
                      onSubmit: (k) => {
                        k.preventDefault(), P();
                      },
                      className: "w-fit",
                      children: w.jsx("input", {
                        ref: D,
                        type: "tel",
                        value: a,
                        onChange: N,
                        className:
                          "bg-transparent text-center w-14 lg:w-28 text-4xl lg:text-6xl outline rounded-xl outline-secondary" +
                          (c ? " animate-shake" : ""),
                        maxLength: 1,
                      }),
                    }),
                    w.jsx("div", {
                      className: "flex w-fit",
                      children: e
                        .slice(0, 6)
                        .map((k, M) =>
                          w.jsx(
                            nf.p,
                            {
                              custom: { i: M, c: !1 },
                              variants: b,
                              initial: "initial",
                              animate: "animate",
                              exit: "exit",
                              transition: {
                                duration: 1,
                                delay: M * 0.05 + 0.3,
                              },
                              className:
                                " text-4xl lg:text-6xl mx-1 w-6 lg:w-12 ",
                              children: "?",
                            },
                            k + M,
                          ),
                        ),
                    }),
                  ],
                }),
                w.jsx("button", {
                  onClick: (k) => {
                    k.stopPropagation(), P();
                  },
                  className:
                    " bg-primary text-center flex  mx-auto my-4 w-32 xs:w-48 min-w-max rounded-xl py-2 justify-center  text-text hover:bg-accent hover:shadow-md transition-all duration-300 font-semibold ",
                  children: "Submit",
                }),
                w.jsx("div", {
                  className:
                    "flex text-4xl mx-auto text-center w-fit animate-show",
                  children: w.jsx(Y_, {
                    config: { loader: { load: ["input/asciimath"] } },
                    children: w.jsxs(
                      Z_,
                      { className: "animate-show", children: ["`", y, "`"] },
                      y,
                    ),
                  }),
                }),
              ],
            }),
            w.jsx(Br, { loading: h }),
            w.jsx(m2, {
              game: _t.MAKINATOR_PI,
              statistics: {
                time: C,
                digits: n.length - 6,
                lives: o,
                score: O(),
              },
              highscore: E ??
                JSON.parse(localStorage.getItem("piStatistics") ?? "[]").sort(
                  (k, M) => M.score - k.score,
                )[0] ?? { time: C, digits: n.length - 6, lives: o, score: O() },
              isOpen: m && !h,
              resetGame: B,
              setIsOpen: g,
            }),
            w.jsx(Vn, {
              title: "Error",
              text: "Enter a number!",
              isOpen: l,
              setIsOpen: u,
            }),
          ],
        }),
      }),
    })
  );
}
const eB = Q6([
  {
    path: "/",
    element: w.jsx(W_, {}),
    errorElement: w.jsx(_n, {}),
    children: [
      { path: "/", element: w.jsx(OS, {}), errorElement: w.jsx(_n, {}) },
      { path: "/play", element: w.jsx(f5, {}), errorElement: w.jsx(_n, {}) },
      {
        path: "/play/guess",
        element: w.jsx(M_, {}),
        errorElement: w.jsx(_n, {}),
      },
      { path: "/play/pi", element: w.jsx(J_, {}), errorElement: w.jsx(_n, {}) },
      { path: "/login", element: w.jsx(L_, {}), errorElement: w.jsx(_n, {}) },
      { path: "/signup", element: w.jsx(I_, {}), errorElement: w.jsx(_n, {}) },
      { path: "/profile", element: w.jsx($_, {}), errorElement: w.jsx(_n, {}) },
      {
        path: "/leaderboards",
        element: w.jsx(G_, {}),
        errorElement: w.jsx(_n, {}),
      },
    ],
  },
]);
Xc.createRoot(document.getElementById("root")).render(
  w.jsx(ue.StrictMode, { children: w.jsx(a5, { router: eB }) }),
);
