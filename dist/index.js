var Yr = { exports: {} }, Ze = {}, zr = { exports: {} }, _ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt;
function Ut() {
  if (yt) return _;
  yt = 1;
  var L = Symbol.for("react.element"), d = Symbol.for("react.portal"), ce = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), ue = Symbol.for("react.provider"), X = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), re = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), B = Symbol.iterator;
  function K(n) {
    return n === null || typeof n != "object" ? null : (n = B && n[B] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var h = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, j = Object.assign, q = {};
  function se(n, u, g) {
    this.props = n, this.context = u, this.refs = q, this.updater = g || h;
  }
  se.prototype.isReactComponent = {}, se.prototype.setState = function(n, u) {
    if (typeof n != "object" && typeof n != "function" && n != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, u, "setState");
  }, se.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function le() {
  }
  le.prototype = se.prototype;
  function M(n, u, g) {
    this.props = n, this.context = u, this.refs = q, this.updater = g || h;
  }
  var ge = M.prototype = new le();
  ge.constructor = M, j(ge, se.prototype), ge.isPureReactComponent = !0;
  var fe = Array.isArray, U = Object.prototype.hasOwnProperty, te = { current: null }, pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function he(n, u, g) {
    var E, w = {}, x = null, k = null;
    if (u != null) for (E in u.ref !== void 0 && (k = u.ref), u.key !== void 0 && (x = "" + u.key), u) U.call(u, E) && !pe.hasOwnProperty(E) && (w[E] = u[E]);
    var O = arguments.length - 2;
    if (O === 1) w.children = g;
    else if (1 < O) {
      for (var S = Array(O), Y = 0; Y < O; Y++) S[Y] = arguments[Y + 2];
      w.children = S;
    }
    if (n && n.defaultProps) for (E in O = n.defaultProps, O) w[E] === void 0 && (w[E] = O[E]);
    return { $$typeof: L, type: n, key: x, ref: k, props: w, _owner: te.current };
  }
  function Ce(n, u) {
    return { $$typeof: L, type: n.type, key: u, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Se(n) {
    return typeof n == "object" && n !== null && n.$$typeof === L;
  }
  function ze(n) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(g) {
      return u[g];
    });
  }
  var Te = /\/+/g;
  function ae(n, u) {
    return typeof n == "object" && n !== null && n.key != null ? ze("" + n.key) : u.toString(36);
  }
  function oe(n, u, g, E, w) {
    var x = typeof n;
    (x === "undefined" || x === "boolean") && (n = null);
    var k = !1;
    if (n === null) k = !0;
    else switch (x) {
      case "string":
      case "number":
        k = !0;
        break;
      case "object":
        switch (n.$$typeof) {
          case L:
          case d:
            k = !0;
        }
    }
    if (k) return k = n, w = w(k), n = E === "" ? "." + ae(k, 0) : E, fe(w) ? (g = "", n != null && (g = n.replace(Te, "$&/") + "/"), oe(w, u, g, "", function(Y) {
      return Y;
    })) : w != null && (Se(w) && (w = Ce(w, g + (!w.key || k && k.key === w.key ? "" : ("" + w.key).replace(Te, "$&/") + "/") + n)), u.push(w)), 1;
    if (k = 0, E = E === "" ? "." : E + ":", fe(n)) for (var O = 0; O < n.length; O++) {
      x = n[O];
      var S = E + ae(x, O);
      k += oe(x, u, g, S, w);
    }
    else if (S = K(n), typeof S == "function") for (n = S.call(n), O = 0; !(x = n.next()).done; ) x = x.value, S = E + ae(x, O++), k += oe(x, u, g, S, w);
    else if (x === "object") throw u = String(n), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    return k;
  }
  function H(n, u, g) {
    if (n == null) return n;
    var E = [], w = 0;
    return oe(n, E, "", "", function(x) {
      return u.call(g, x, w++);
    }), E;
  }
  function de(n) {
    if (n._status === -1) {
      var u = n._result;
      u = u(), u.then(function(g) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = g);
      }, function(g) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = g);
      }), n._status === -1 && (n._status = 0, n._result = u);
    }
    if (n._status === 1) return n._result.default;
    throw n._result;
  }
  var p = { current: null }, ve = { transition: null }, Oe = { ReactCurrentDispatcher: p, ReactCurrentBatchConfig: ve, ReactCurrentOwner: te };
  function me() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return _.Children = { map: H, forEach: function(n, u, g) {
    H(n, function() {
      u.apply(this, arguments);
    }, g);
  }, count: function(n) {
    var u = 0;
    return H(n, function() {
      u++;
    }), u;
  }, toArray: function(n) {
    return H(n, function(u) {
      return u;
    }) || [];
  }, only: function(n) {
    if (!Se(n)) throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, _.Component = se, _.Fragment = ce, _.Profiler = ne, _.PureComponent = M, _.StrictMode = V, _.Suspense = I, _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oe, _.act = me, _.cloneElement = function(n, u, g) {
    if (n == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var E = j({}, n.props), w = n.key, x = n.ref, k = n._owner;
    if (u != null) {
      if (u.ref !== void 0 && (x = u.ref, k = te.current), u.key !== void 0 && (w = "" + u.key), n.type && n.type.defaultProps) var O = n.type.defaultProps;
      for (S in u) U.call(u, S) && !pe.hasOwnProperty(S) && (E[S] = u[S] === void 0 && O !== void 0 ? O[S] : u[S]);
    }
    var S = arguments.length - 2;
    if (S === 1) E.children = g;
    else if (1 < S) {
      O = Array(S);
      for (var Y = 0; Y < S; Y++) O[Y] = arguments[Y + 2];
      E.children = O;
    }
    return { $$typeof: L, type: n.type, key: w, ref: x, props: E, _owner: k };
  }, _.createContext = function(n) {
    return n = { $$typeof: X, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: ue, _context: n }, n.Consumer = n;
  }, _.createElement = he, _.createFactory = function(n) {
    var u = he.bind(null, n);
    return u.type = n, u;
  }, _.createRef = function() {
    return { current: null };
  }, _.forwardRef = function(n) {
    return { $$typeof: ee, render: n };
  }, _.isValidElement = Se, _.lazy = function(n) {
    return { $$typeof: F, _payload: { _status: -1, _result: n }, _init: de };
  }, _.memo = function(n, u) {
    return { $$typeof: re, type: n, compare: u === void 0 ? null : u };
  }, _.startTransition = function(n) {
    var u = ve.transition;
    ve.transition = {};
    try {
      n();
    } finally {
      ve.transition = u;
    }
  }, _.unstable_act = me, _.useCallback = function(n, u) {
    return p.current.useCallback(n, u);
  }, _.useContext = function(n) {
    return p.current.useContext(n);
  }, _.useDebugValue = function() {
  }, _.useDeferredValue = function(n) {
    return p.current.useDeferredValue(n);
  }, _.useEffect = function(n, u) {
    return p.current.useEffect(n, u);
  }, _.useId = function() {
    return p.current.useId();
  }, _.useImperativeHandle = function(n, u, g) {
    return p.current.useImperativeHandle(n, u, g);
  }, _.useInsertionEffect = function(n, u) {
    return p.current.useInsertionEffect(n, u);
  }, _.useLayoutEffect = function(n, u) {
    return p.current.useLayoutEffect(n, u);
  }, _.useMemo = function(n, u) {
    return p.current.useMemo(n, u);
  }, _.useReducer = function(n, u, g) {
    return p.current.useReducer(n, u, g);
  }, _.useRef = function(n) {
    return p.current.useRef(n);
  }, _.useState = function(n) {
    return p.current.useState(n);
  }, _.useSyncExternalStore = function(n, u, g) {
    return p.current.useSyncExternalStore(n, u, g);
  }, _.useTransition = function() {
    return p.current.useTransition();
  }, _.version = "18.3.1", _;
}
var rr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
rr.exports;
var ht;
function Yt() {
  return ht || (ht = 1, function(L, d) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var ce = "18.3.1", V = Symbol.for("react.element"), ne = Symbol.for("react.portal"), ue = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), I = Symbol.for("react.provider"), re = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), se = Symbol.iterator, le = "@@iterator";
      function M(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = se && e[se] || e[le];
        return typeof r == "function" ? r : null;
      }
      var ge = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, fe = {
        transition: null
      }, U = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, te = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, pe = {}, he = null;
      function Ce(e) {
        he = e;
      }
      pe.setExtraStackFrame = function(e) {
        he = e;
      }, pe.getCurrentStack = null, pe.getStackAddendum = function() {
        var e = "";
        he && (e += he);
        var r = pe.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Se = !1, ze = !1, Te = !1, ae = !1, oe = !1, H = {
        ReactCurrentDispatcher: ge,
        ReactCurrentBatchConfig: fe,
        ReactCurrentOwner: te
      };
      H.ReactDebugCurrentFrame = pe, H.ReactCurrentActQueue = U;
      function de(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          ve("warn", e, a);
        }
      }
      function p(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          ve("error", e, a);
        }
      }
      function ve(e, r, a) {
        {
          var o = H.ReactDebugCurrentFrame, s = o.getStackAddendum();
          s !== "" && (r += "%s", a = a.concat([s]));
          var v = a.map(function(f) {
            return String(f);
          });
          v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
        }
      }
      var Oe = {};
      function me(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", s = o + "." + r;
          if (Oe[s])
            return;
          p("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Oe[s] = !0;
        }
      }
      var n = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          me(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          me(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          me(e, "setState");
        }
      }, u = Object.assign, g = {};
      Object.freeze(g);
      function E(e, r, a) {
        this.props = e, this.context = r, this.refs = g, this.updater = a || n;
      }
      E.prototype.isReactComponent = {}, E.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, E.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var w = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, x = function(e, r) {
          Object.defineProperty(E.prototype, e, {
            get: function() {
              de("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var k in w)
          w.hasOwnProperty(k) && x(k, w[k]);
      }
      function O() {
      }
      O.prototype = E.prototype;
      function S(e, r, a) {
        this.props = e, this.context = r, this.refs = g, this.updater = a || n;
      }
      var Y = S.prototype = new O();
      Y.constructor = S, u(Y, E.prototype), Y.isPureReactComponent = !0;
      function br() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var tr = Array.isArray;
      function Fe(e) {
        return tr(e);
      }
      function Er(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function $e(e) {
        try {
          return be(e), !1;
        } catch {
          return !0;
        }
      }
      function be(e) {
        return "" + e;
      }
      function ke(e) {
        if ($e(e))
          return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(e)), be(e);
      }
      function nr(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var s = r.displayName || r.name || "";
        return s !== "" ? a + "(" + s + ")" : a;
      }
      function Pe(e) {
        return e.displayName || "Context";
      }
      function ye(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case ue:
            return "Fragment";
          case ne:
            return "Portal";
          case ee:
            return "Profiler";
          case X:
            return "StrictMode";
          case B:
            return "Suspense";
          case K:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case re:
              var r = e;
              return Pe(r) + ".Consumer";
            case I:
              var a = e;
              return Pe(a._context) + ".Provider";
            case F:
              return nr(e, e.render, "ForwardRef");
            case h:
              var o = e.displayName || null;
              return o !== null ? o : ye(e.type) || "Memo";
            case j: {
              var s = e, v = s._payload, f = s._init;
              try {
                return ye(f(v));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var xe = Object.prototype.hasOwnProperty, Ne = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ar, or, Le;
      Le = {};
      function Be(e) {
        if (xe.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Ke(e) {
        if (xe.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Rr(e, r) {
        var a = function() {
          ar || (ar = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function ir(e, r) {
        var a = function() {
          or || (or = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function ur(e) {
        if (typeof e.ref == "string" && te.current && e.__self && te.current.stateNode !== e.__self) {
          var r = ye(te.current.type);
          Le[r] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Le[r] = !0);
        }
      }
      var qe = function(e, r, a, o, s, v, f) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: V,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: f,
          // Record the component responsible for creating this element.
          _owner: v
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: s
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function wr(e, r, a) {
        var o, s = {}, v = null, f = null, y = null, R = null;
        if (r != null) {
          Be(r) && (f = r.ref, ur(r)), Ke(r) && (ke(r.key), v = "" + r.key), y = r.__self === void 0 ? null : r.__self, R = r.__source === void 0 ? null : r.__source;
          for (o in r)
            xe.call(r, o) && !Ne.hasOwnProperty(o) && (s[o] = r[o]);
        }
        var P = arguments.length - 2;
        if (P === 1)
          s.children = a;
        else if (P > 1) {
          for (var A = Array(P), D = 0; D < P; D++)
            A[D] = arguments[D + 2];
          Object.freeze && Object.freeze(A), s.children = A;
        }
        if (e && e.defaultProps) {
          var N = e.defaultProps;
          for (o in N)
            s[o] === void 0 && (s[o] = N[o]);
        }
        if (v || f) {
          var z = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && Rr(s, z), f && ir(s, z);
        }
        return qe(e, v, f, y, R, te.current, s);
      }
      function Cr(e, r) {
        var a = qe(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Sr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, s = u({}, e.props), v = e.key, f = e.ref, y = e._self, R = e._source, P = e._owner;
        if (r != null) {
          Be(r) && (f = r.ref, P = te.current), Ke(r) && (ke(r.key), v = "" + r.key);
          var A;
          e.type && e.type.defaultProps && (A = e.type.defaultProps);
          for (o in r)
            xe.call(r, o) && !Ne.hasOwnProperty(o) && (r[o] === void 0 && A !== void 0 ? s[o] = A[o] : s[o] = r[o]);
        }
        var D = arguments.length - 2;
        if (D === 1)
          s.children = a;
        else if (D > 1) {
          for (var N = Array(D), z = 0; z < D; z++)
            N[z] = arguments[z + 2];
          s.children = N;
        }
        return qe(e.type, v, f, y, R, P, s);
      }
      function Ee(e) {
        return typeof e == "object" && e !== null && e.$$typeof === V;
      }
      var sr = ".", Tr = ":";
      function He(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(s) {
          return a[s];
        });
        return "$" + o;
      }
      var Ge = !1, Re = /\/+/g;
      function Me(e) {
        return e.replace(Re, "$&/");
      }
      function je(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (ke(e.key), He("" + e.key)) : r.toString(36);
      }
      function Ae(e, r, a, o, s) {
        var v = typeof e;
        (v === "undefined" || v === "boolean") && (e = null);
        var f = !1;
        if (e === null)
          f = !0;
        else
          switch (v) {
            case "string":
            case "number":
              f = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case V:
                case ne:
                  f = !0;
              }
          }
        if (f) {
          var y = e, R = s(y), P = o === "" ? sr + je(y, 0) : o;
          if (Fe(R)) {
            var A = "";
            P != null && (A = Me(P) + "/"), Ae(R, r, A, "", function(Vt) {
              return Vt;
            });
          } else R != null && (Ee(R) && (R.key && (!y || y.key !== R.key) && ke(R.key), R = Cr(
            R,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (R.key && (!y || y.key !== R.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Me("" + R.key) + "/"
            ) : "") + P
          )), r.push(R));
          return 1;
        }
        var D, N, z = 0, J = o === "" ? sr : o + Tr;
        if (Fe(e))
          for (var _r = 0; _r < e.length; _r++)
            D = e[_r], N = J + je(D, _r), z += Ae(D, r, a, N, s);
        else {
          var Ur = M(e);
          if (typeof Ur == "function") {
            var dt = e;
            Ur === dt.entries && (Ge || de("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ge = !0);
            for (var Mt = Ur.call(dt), pt, Wt = 0; !(pt = Mt.next()).done; )
              D = pt.value, N = J + je(D, Wt++), z += Ae(D, r, a, N, s);
          } else if (v === "object") {
            var vt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (vt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : vt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return z;
      }
      function We(e, r, a) {
        if (e == null)
          return e;
        var o = [], s = 0;
        return Ae(e, o, "", "", function(v) {
          return r.call(a, v, s++);
        }), o;
      }
      function cr(e) {
        var r = 0;
        return We(e, function() {
          r++;
        }), r;
      }
      function Or(e, r, a) {
        We(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function lr(e) {
        return We(e, function(r) {
          return r;
        }) || [];
      }
      function fr(e) {
        if (!Ee(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function kr(e) {
        var r = {
          $$typeof: re,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: I,
          _context: r
        };
        var a = !1, o = !1, s = !1;
        {
          var v = {
            $$typeof: re,
            _context: r
          };
          Object.defineProperties(v, {
            Provider: {
              get: function() {
                return o || (o = !0, p("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(f) {
                r.Provider = f;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(f) {
                r._currentValue = f;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(f) {
                r._currentValue2 = f;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(f) {
                r._threadCount = f;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, p("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(f) {
                s || (de("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", f), s = !0);
              }
            }
          }), r.Consumer = v;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var De = -1, Ve = 0, Je = 1, Pr = 2;
      function xr(e) {
        if (e._status === De) {
          var r = e._result, a = r();
          if (a.then(function(v) {
            if (e._status === Ve || e._status === De) {
              var f = e;
              f._status = Je, f._result = v;
            }
          }, function(v) {
            if (e._status === Ve || e._status === De) {
              var f = e;
              f._status = Pr, f._result = v;
            }
          }), e._status === De) {
            var o = e;
            o._status = Ve, o._result = a;
          }
        }
        if (e._status === Je) {
          var s = e._result;
          return s === void 0 && p(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, s), "default" in s || p(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, s), s.default;
        } else
          throw e._result;
      }
      function jr(e) {
        var r = {
          // We use these fields to store the result.
          _status: De,
          _result: e
        }, a = {
          $$typeof: j,
          _payload: r,
          _init: xr
        };
        {
          var o, s;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(v) {
                p("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = v, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return s;
              },
              set: function(v) {
                p("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), s = v, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function Ar(e) {
        e != null && e.$$typeof === h ? p("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? p("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && p("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && p("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: F,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function i(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === ue || e === ee || oe || e === X || e === B || e === K || ae || e === q || Se || ze || Te || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === h || e.$$typeof === I || e.$$typeof === re || e.$$typeof === F || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        i(e) || p("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: h,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(s) {
              o = s, !e.name && !e.displayName && (e.displayName = s);
            }
          });
        }
        return a;
      }
      function l() {
        var e = ge.current;
        return e === null && p(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function C(e) {
        var r = l();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? p("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && p("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function T(e) {
        var r = l();
        return r.useState(e);
      }
      function b(e, r, a) {
        var o = l();
        return o.useReducer(e, r, a);
      }
      function m(e) {
        var r = l();
        return r.useRef(e);
      }
      function G(e, r) {
        var a = l();
        return a.useEffect(e, r);
      }
      function $(e, r) {
        var a = l();
        return a.useInsertionEffect(e, r);
      }
      function W(e, r) {
        var a = l();
        return a.useLayoutEffect(e, r);
      }
      function ie(e, r) {
        var a = l();
        return a.useCallback(e, r);
      }
      function we(e, r) {
        var a = l();
        return a.useMemo(e, r);
      }
      function _e(e, r, a) {
        var o = l();
        return o.useImperativeHandle(e, r, a);
      }
      function Q(e, r) {
        {
          var a = l();
          return a.useDebugValue(e, r);
        }
      }
      function Xe() {
        var e = l();
        return e.useTransition();
      }
      function Dr(e) {
        var r = l();
        return r.useDeferredValue(e);
      }
      function Ir() {
        var e = l();
        return e.useId();
      }
      function bt(e, r, a) {
        var o = l();
        return o.useSyncExternalStore(e, r, a);
      }
      var Qe = 0, Br, Kr, qr, Hr, Gr, Jr, Xr;
      function Qr() {
      }
      Qr.__reactDisabledLog = !0;
      function Et() {
        {
          if (Qe === 0) {
            Br = console.log, Kr = console.info, qr = console.warn, Hr = console.error, Gr = console.group, Jr = console.groupCollapsed, Xr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Qr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          Qe++;
        }
      }
      function Rt() {
        {
          if (Qe--, Qe === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: u({}, e, {
                value: Br
              }),
              info: u({}, e, {
                value: Kr
              }),
              warn: u({}, e, {
                value: qr
              }),
              error: u({}, e, {
                value: Hr
              }),
              group: u({}, e, {
                value: Gr
              }),
              groupCollapsed: u({}, e, {
                value: Jr
              }),
              groupEnd: u({}, e, {
                value: Xr
              })
            });
          }
          Qe < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Fr = H.ReactCurrentDispatcher, $r;
      function dr(e, r, a) {
        {
          if ($r === void 0)
            try {
              throw Error();
            } catch (s) {
              var o = s.stack.trim().match(/\n( *(at )?)/);
              $r = o && o[1] || "";
            }
          return `
` + $r + e;
        }
      }
      var Nr = !1, pr;
      {
        var wt = typeof WeakMap == "function" ? WeakMap : Map;
        pr = new wt();
      }
      function Zr(e, r) {
        if (!e || Nr)
          return "";
        {
          var a = pr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Nr = !0;
        var s = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var v;
        v = Fr.current, Fr.current = null, Et();
        try {
          if (r) {
            var f = function() {
              throw Error();
            };
            if (Object.defineProperty(f.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(f, []);
              } catch (J) {
                o = J;
              }
              Reflect.construct(e, [], f);
            } else {
              try {
                f.call();
              } catch (J) {
                o = J;
              }
              e.call(f.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (J) {
              o = J;
            }
            e();
          }
        } catch (J) {
          if (J && o && typeof J.stack == "string") {
            for (var y = J.stack.split(`
`), R = o.stack.split(`
`), P = y.length - 1, A = R.length - 1; P >= 1 && A >= 0 && y[P] !== R[A]; )
              A--;
            for (; P >= 1 && A >= 0; P--, A--)
              if (y[P] !== R[A]) {
                if (P !== 1 || A !== 1)
                  do
                    if (P--, A--, A < 0 || y[P] !== R[A]) {
                      var D = `
` + y[P].replace(" at new ", " at ");
                      return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && pr.set(e, D), D;
                    }
                  while (P >= 1 && A >= 0);
                break;
              }
          }
        } finally {
          Nr = !1, Fr.current = v, Rt(), Error.prepareStackTrace = s;
        }
        var N = e ? e.displayName || e.name : "", z = N ? dr(N) : "";
        return typeof e == "function" && pr.set(e, z), z;
      }
      function Ct(e, r, a) {
        return Zr(e, !1);
      }
      function St(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function vr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Zr(e, St(e));
        if (typeof e == "string")
          return dr(e);
        switch (e) {
          case B:
            return dr("Suspense");
          case K:
            return dr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case F:
              return Ct(e.render);
            case h:
              return vr(e.type, r, a);
            case j: {
              var o = e, s = o._payload, v = o._init;
              try {
                return vr(v(s), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var et = {}, rt = H.ReactDebugCurrentFrame;
      function yr(e) {
        if (e) {
          var r = e._owner, a = vr(e.type, e._source, r ? r.type : null);
          rt.setExtraStackFrame(a);
        } else
          rt.setExtraStackFrame(null);
      }
      function Tt(e, r, a, o, s) {
        {
          var v = Function.call.bind(xe);
          for (var f in e)
            if (v(e, f)) {
              var y = void 0;
              try {
                if (typeof e[f] != "function") {
                  var R = Error((o || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw R.name = "Invariant Violation", R;
                }
                y = e[f](r, f, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (P) {
                y = P;
              }
              y && !(y instanceof Error) && (yr(s), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, f, typeof y), yr(null)), y instanceof Error && !(y.message in et) && (et[y.message] = !0, yr(s), p("Failed %s type: %s", a, y.message), yr(null));
            }
        }
      }
      function Ue(e) {
        if (e) {
          var r = e._owner, a = vr(e.type, e._source, r ? r.type : null);
          Ce(a);
        } else
          Ce(null);
      }
      var Lr;
      Lr = !1;
      function tt() {
        if (te.current) {
          var e = ye(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Ot(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function kt(e) {
        return e != null ? Ot(e.__source) : "";
      }
      var nt = {};
      function Pt(e) {
        var r = tt();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function at(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Pt(r);
          if (!nt[a]) {
            nt[a] = !0;
            var o = "";
            e && e._owner && e._owner !== te.current && (o = " It was passed a child from " + ye(e._owner.type) + "."), Ue(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ue(null);
          }
        }
      }
      function ot(e, r) {
        if (typeof e == "object") {
          if (Fe(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              Ee(o) && at(o, r);
            }
          else if (Ee(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var s = M(e);
            if (typeof s == "function" && s !== e.entries)
              for (var v = s.call(e), f; !(f = v.next()).done; )
                Ee(f.value) && at(f.value, r);
          }
        }
      }
      function it(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === F || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === h))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = ye(r);
            Tt(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Lr) {
            Lr = !0;
            var s = ye(r);
            p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function xt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ue(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ue(null);
              break;
            }
          }
          e.ref !== null && (Ue(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), Ue(null));
        }
      }
      function ut(e, r, a) {
        var o = i(e);
        if (!o) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = kt(r);
          v ? s += v : s += tt();
          var f;
          e === null ? f = "null" : Fe(e) ? f = "array" : e !== void 0 && e.$$typeof === V ? (f = "<" + (ye(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, p("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, s);
        }
        var y = wr.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var R = 2; R < arguments.length; R++)
            ot(arguments[R], e);
        return e === ue ? xt(y) : it(y), y;
      }
      var st = !1;
      function jt(e) {
        var r = ut.bind(null, e);
        return r.type = e, st || (st = !0, de("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return de("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function At(e, r, a) {
        for (var o = Sr.apply(this, arguments), s = 2; s < arguments.length; s++)
          ot(arguments[s], o.type);
        return it(o), o;
      }
      function Dt(e, r) {
        var a = fe.transition;
        fe.transition = {};
        var o = fe.transition;
        fe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (fe.transition = a, a === null && o._updatedFibers) {
            var s = o._updatedFibers.size;
            s > 10 && de("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var ct = !1, hr = null;
      function It(e) {
        if (hr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = L && L[r];
            hr = a.call(L, "timers").setImmediate;
          } catch {
            hr = function(s) {
              ct === !1 && (ct = !0, typeof MessageChannel > "u" && p("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var v = new MessageChannel();
              v.port1.onmessage = s, v.port2.postMessage(void 0);
            };
          }
        return hr(e);
      }
      var Ye = 0, lt = !1;
      function ft(e) {
        {
          var r = Ye;
          Ye++, U.current === null && (U.current = []);
          var a = U.isBatchingLegacy, o;
          try {
            if (U.isBatchingLegacy = !0, o = e(), !a && U.didScheduleLegacyUpdate) {
              var s = U.current;
              s !== null && (U.didScheduleLegacyUpdate = !1, Vr(s));
            }
          } catch (N) {
            throw mr(r), N;
          } finally {
            U.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var v = o, f = !1, y = {
              then: function(N, z) {
                f = !0, v.then(function(J) {
                  mr(r), Ye === 0 ? Mr(J, N, z) : N(J);
                }, function(J) {
                  mr(r), z(J);
                });
              }
            };
            return !lt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              f || (lt = !0, p("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var R = o;
            if (mr(r), Ye === 0) {
              var P = U.current;
              P !== null && (Vr(P), U.current = null);
              var A = {
                then: function(N, z) {
                  U.current === null ? (U.current = [], Mr(R, N, z)) : N(R);
                }
              };
              return A;
            } else {
              var D = {
                then: function(N, z) {
                  N(R);
                }
              };
              return D;
            }
          }
        }
      }
      function mr(e) {
        e !== Ye - 1 && p("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ye = e;
      }
      function Mr(e, r, a) {
        {
          var o = U.current;
          if (o !== null)
            try {
              Vr(o), It(function() {
                o.length === 0 ? (U.current = null, r(e)) : Mr(e, r, a);
              });
            } catch (s) {
              a(s);
            }
          else
            r(e);
        }
      }
      var Wr = !1;
      function Vr(e) {
        if (!Wr) {
          Wr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Wr = !1;
          }
        }
      }
      var Ft = ut, $t = At, Nt = jt, Lt = {
        map: We,
        forEach: Or,
        count: cr,
        toArray: lr,
        only: fr
      };
      d.Children = Lt, d.Component = E, d.Fragment = ue, d.Profiler = ee, d.PureComponent = S, d.StrictMode = X, d.Suspense = B, d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H, d.act = ft, d.cloneElement = $t, d.createContext = kr, d.createElement = Ft, d.createFactory = Nt, d.createRef = br, d.forwardRef = Ar, d.isValidElement = Ee, d.lazy = jr, d.memo = c, d.startTransition = Dt, d.unstable_act = ft, d.useCallback = ie, d.useContext = C, d.useDebugValue = Q, d.useDeferredValue = Dr, d.useEffect = G, d.useId = Ir, d.useImperativeHandle = _e, d.useInsertionEffect = $, d.useLayoutEffect = W, d.useMemo = we, d.useReducer = b, d.useRef = m, d.useState = T, d.useSyncExternalStore = bt, d.useTransition = Xe, d.version = ce, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(rr, rr.exports)), rr.exports;
}
process.env.NODE_ENV === "production" ? zr.exports = Ut() : zr.exports = Yt();
var Ie = zr.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mt;
function zt() {
  if (mt) return Ze;
  mt = 1;
  var L = Ie, d = Symbol.for("react.element"), ce = Symbol.for("react.fragment"), V = Object.prototype.hasOwnProperty, ne = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ue = { key: !0, ref: !0, __self: !0, __source: !0 };
  function X(ee, I, re) {
    var F, B = {}, K = null, h = null;
    re !== void 0 && (K = "" + re), I.key !== void 0 && (K = "" + I.key), I.ref !== void 0 && (h = I.ref);
    for (F in I) V.call(I, F) && !ue.hasOwnProperty(F) && (B[F] = I[F]);
    if (ee && ee.defaultProps) for (F in I = ee.defaultProps, I) B[F] === void 0 && (B[F] = I[F]);
    return { $$typeof: d, type: ee, key: K, ref: h, props: B, _owner: ne.current };
  }
  return Ze.Fragment = ce, Ze.jsx = X, Ze.jsxs = X, Ze;
}
var er = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function Bt() {
  return _t || (_t = 1, process.env.NODE_ENV !== "production" && function() {
    var L = Ie, d = Symbol.for("react.element"), ce = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), ue = Symbol.for("react.profiler"), X = Symbol.for("react.provider"), ee = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), j = Symbol.iterator, q = "@@iterator";
    function se(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = j && t[j] || t[q];
      return typeof i == "function" ? i : null;
    }
    var le = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(t) {
      {
        for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
          c[l - 1] = arguments[l];
        ge("error", t, c);
      }
    }
    function ge(t, i, c) {
      {
        var l = le.ReactDebugCurrentFrame, C = l.getStackAddendum();
        C !== "" && (i += "%s", c = c.concat([C]));
        var T = c.map(function(b) {
          return String(b);
        });
        T.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, T);
      }
    }
    var fe = !1, U = !1, te = !1, pe = !1, he = !1, Ce;
    Ce = Symbol.for("react.module.reference");
    function Se(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === V || t === ue || he || t === ne || t === re || t === F || pe || t === h || fe || U || te || typeof t == "object" && t !== null && (t.$$typeof === K || t.$$typeof === B || t.$$typeof === X || t.$$typeof === ee || t.$$typeof === I || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Ce || t.getModuleId !== void 0));
    }
    function ze(t, i, c) {
      var l = t.displayName;
      if (l)
        return l;
      var C = i.displayName || i.name || "";
      return C !== "" ? c + "(" + C + ")" : c;
    }
    function Te(t) {
      return t.displayName || "Context";
    }
    function ae(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case V:
          return "Fragment";
        case ce:
          return "Portal";
        case ue:
          return "Profiler";
        case ne:
          return "StrictMode";
        case re:
          return "Suspense";
        case F:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case ee:
            var i = t;
            return Te(i) + ".Consumer";
          case X:
            var c = t;
            return Te(c._context) + ".Provider";
          case I:
            return ze(t, t.render, "ForwardRef");
          case B:
            var l = t.displayName || null;
            return l !== null ? l : ae(t.type) || "Memo";
          case K: {
            var C = t, T = C._payload, b = C._init;
            try {
              return ae(b(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var oe = Object.assign, H = 0, de, p, ve, Oe, me, n, u;
    function g() {
    }
    g.__reactDisabledLog = !0;
    function E() {
      {
        if (H === 0) {
          de = console.log, p = console.info, ve = console.warn, Oe = console.error, me = console.group, n = console.groupCollapsed, u = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: g,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        H++;
      }
    }
    function w() {
      {
        if (H--, H === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: oe({}, t, {
              value: de
            }),
            info: oe({}, t, {
              value: p
            }),
            warn: oe({}, t, {
              value: ve
            }),
            error: oe({}, t, {
              value: Oe
            }),
            group: oe({}, t, {
              value: me
            }),
            groupCollapsed: oe({}, t, {
              value: n
            }),
            groupEnd: oe({}, t, {
              value: u
            })
          });
        }
        H < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var x = le.ReactCurrentDispatcher, k;
    function O(t, i, c) {
      {
        if (k === void 0)
          try {
            throw Error();
          } catch (C) {
            var l = C.stack.trim().match(/\n( *(at )?)/);
            k = l && l[1] || "";
          }
        return `
` + k + t;
      }
    }
    var S = !1, Y;
    {
      var br = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new br();
    }
    function tr(t, i) {
      if (!t || S)
        return "";
      {
        var c = Y.get(t);
        if (c !== void 0)
          return c;
      }
      var l;
      S = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = x.current, x.current = null, E();
      try {
        if (i) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (Q) {
              l = Q;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (Q) {
              l = Q;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Q) {
            l = Q;
          }
          t();
        }
      } catch (Q) {
        if (Q && l && typeof Q.stack == "string") {
          for (var m = Q.stack.split(`
`), G = l.stack.split(`
`), $ = m.length - 1, W = G.length - 1; $ >= 1 && W >= 0 && m[$] !== G[W]; )
            W--;
          for (; $ >= 1 && W >= 0; $--, W--)
            if (m[$] !== G[W]) {
              if ($ !== 1 || W !== 1)
                do
                  if ($--, W--, W < 0 || m[$] !== G[W]) {
                    var ie = `
` + m[$].replace(" at new ", " at ");
                    return t.displayName && ie.includes("<anonymous>") && (ie = ie.replace("<anonymous>", t.displayName)), typeof t == "function" && Y.set(t, ie), ie;
                  }
                while ($ >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        S = !1, x.current = T, w(), Error.prepareStackTrace = C;
      }
      var we = t ? t.displayName || t.name : "", _e = we ? O(we) : "";
      return typeof t == "function" && Y.set(t, _e), _e;
    }
    function Fe(t, i, c) {
      return tr(t, !1);
    }
    function Er(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function $e(t, i, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return tr(t, Er(t));
      if (typeof t == "string")
        return O(t);
      switch (t) {
        case re:
          return O("Suspense");
        case F:
          return O("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case I:
            return Fe(t.render);
          case B:
            return $e(t.type, i, c);
          case K: {
            var l = t, C = l._payload, T = l._init;
            try {
              return $e(T(C), i, c);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, ke = {}, nr = le.ReactDebugCurrentFrame;
    function Pe(t) {
      if (t) {
        var i = t._owner, c = $e(t.type, t._source, i ? i.type : null);
        nr.setExtraStackFrame(c);
      } else
        nr.setExtraStackFrame(null);
    }
    function ye(t, i, c, l, C) {
      {
        var T = Function.call.bind(be);
        for (var b in t)
          if (T(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var G = Error((l || "React class") + ": " + c + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              m = t[b](i, b, l, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              m = $;
            }
            m && !(m instanceof Error) && (Pe(C), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", c, b, typeof m), Pe(null)), m instanceof Error && !(m.message in ke) && (ke[m.message] = !0, Pe(C), M("Failed %s type: %s", c, m.message), Pe(null));
          }
      }
    }
    var xe = Array.isArray;
    function Ne(t) {
      return xe(t);
    }
    function ar(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, c = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function or(t) {
      try {
        return Le(t), !1;
      } catch {
        return !0;
      }
    }
    function Le(t) {
      return "" + t;
    }
    function Be(t) {
      if (or(t))
        return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(t)), Le(t);
    }
    var Ke = le.ReactCurrentOwner, Rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ir, ur;
    function qe(t) {
      if (be.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function wr(t) {
      if (be.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Cr(t, i) {
      typeof t.ref == "string" && Ke.current;
    }
    function Sr(t, i) {
      {
        var c = function() {
          ir || (ir = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function Ee(t, i) {
      {
        var c = function() {
          ur || (ur = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var sr = function(t, i, c, l, C, T, b) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: c,
        props: b,
        // Record the component responsible for creating this element.
        _owner: T
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Tr(t, i, c, l, C) {
      {
        var T, b = {}, m = null, G = null;
        c !== void 0 && (Be(c), m = "" + c), wr(i) && (Be(i.key), m = "" + i.key), qe(i) && (G = i.ref, Cr(i, C));
        for (T in i)
          be.call(i, T) && !Rr.hasOwnProperty(T) && (b[T] = i[T]);
        if (t && t.defaultProps) {
          var $ = t.defaultProps;
          for (T in $)
            b[T] === void 0 && (b[T] = $[T]);
        }
        if (m || G) {
          var W = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && Sr(b, W), G && Ee(b, W);
        }
        return sr(t, m, G, C, l, Ke.current, b);
      }
    }
    var He = le.ReactCurrentOwner, Ge = le.ReactDebugCurrentFrame;
    function Re(t) {
      if (t) {
        var i = t._owner, c = $e(t.type, t._source, i ? i.type : null);
        Ge.setExtraStackFrame(c);
      } else
        Ge.setExtraStackFrame(null);
    }
    var Me;
    Me = !1;
    function je(t) {
      return typeof t == "object" && t !== null && t.$$typeof === d;
    }
    function Ae() {
      {
        if (He.current) {
          var t = ae(He.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function We(t) {
      return "";
    }
    var cr = {};
    function Or(t) {
      {
        var i = Ae();
        if (!i) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (i = `

Check the top-level render call using <` + c + ">.");
        }
        return i;
      }
    }
    function lr(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Or(i);
        if (cr[c])
          return;
        cr[c] = !0;
        var l = "";
        t && t._owner && t._owner !== He.current && (l = " It was passed a child from " + ae(t._owner.type) + "."), Re(t), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, l), Re(null);
      }
    }
    function fr(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Ne(t))
          for (var c = 0; c < t.length; c++) {
            var l = t[c];
            je(l) && lr(l, i);
          }
        else if (je(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var C = se(t);
          if (typeof C == "function" && C !== t.entries)
            for (var T = C.call(t), b; !(b = T.next()).done; )
              je(b.value) && lr(b.value, i);
        }
      }
    }
    function kr(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var c;
        if (typeof i == "function")
          c = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === I || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === B))
          c = i.propTypes;
        else
          return;
        if (c) {
          var l = ae(i);
          ye(c, t.props, "prop", l, t);
        } else if (i.PropTypes !== void 0 && !Me) {
          Me = !0;
          var C = ae(i);
          M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function De(t) {
      {
        for (var i = Object.keys(t.props), c = 0; c < i.length; c++) {
          var l = i[c];
          if (l !== "children" && l !== "key") {
            Re(t), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), Re(null);
            break;
          }
        }
        t.ref !== null && (Re(t), M("Invalid attribute `ref` supplied to `React.Fragment`."), Re(null));
      }
    }
    var Ve = {};
    function Je(t, i, c, l, C, T) {
      {
        var b = Se(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = We();
          G ? m += G : m += Ae();
          var $;
          t === null ? $ = "null" : Ne(t) ? $ = "array" : t !== void 0 && t.$$typeof === d ? ($ = "<" + (ae(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof t, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, m);
        }
        var W = Tr(t, i, c, C, T);
        if (W == null)
          return W;
        if (b) {
          var ie = i.children;
          if (ie !== void 0)
            if (l)
              if (Ne(ie)) {
                for (var we = 0; we < ie.length; we++)
                  fr(ie[we], t);
                Object.freeze && Object.freeze(ie);
              } else
                M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fr(ie, t);
        }
        if (be.call(i, "key")) {
          var _e = ae(t), Q = Object.keys(i).filter(function(Ir) {
            return Ir !== "key";
          }), Xe = Q.length > 0 ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ve[_e + Xe]) {
            var Dr = Q.length > 0 ? "{" + Q.join(": ..., ") + ": ...}" : "{}";
            M(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Xe, _e, Dr, _e), Ve[_e + Xe] = !0;
          }
        }
        return t === V ? De(W) : kr(W), W;
      }
    }
    function Pr(t, i, c) {
      return Je(t, i, c, !0);
    }
    function xr(t, i, c) {
      return Je(t, i, c, !1);
    }
    var jr = xr, Ar = Pr;
    er.Fragment = V, er.jsx = jr, er.jsxs = Ar;
  }()), er;
}
process.env.NODE_ENV === "production" ? Yr.exports = zt() : Yr.exports = Bt();
var Z = Yr.exports;
const Kt = `
.notepad{display:flex;height:100%;background:var(--app-bg,#1e1e1e);color:#ccc;font-family:'Cascadia Code',monospace;font-size:13px}
.notepad__sidebar{width:220px;border-right:1px solid var(--border-color,#333);display:flex;flex-direction:column;overflow:hidden}
.notepad__new{margin:10px;background:rgba(79,195,247,.1);border:1px solid rgba(79,195,247,.25);border-radius:5px;color:#4fc3f7;padding:7px;font-size:12px;cursor:pointer}
.notepad__new:hover{background:rgba(79,195,247,.18)}
.notepad__list{flex:1;overflow-y:auto}
.notepad__item{position:relative;padding:9px 12px;cursor:pointer;border-bottom:1px solid rgba(255,255,255,.04)}
.notepad__item:hover{background:rgba(255,255,255,.04)}
.notepad__item--active{background:rgba(79,195,247,.08)}
.notepad__item-title{font-size:12px;color:#ddd;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.notepad__item-preview{font-size:11px;color:#666;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:2px}
.notepad__item-del{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;color:#555;cursor:pointer;font-size:14px;opacity:0;line-height:1}
.notepad__item:hover .notepad__item-del{opacity:1}
.notepad__item-del:hover{color:#f48fb1}
.notepad__empty{color:#555;font-size:12px;text-align:center;padding:20px}
.notepad__editor{flex:1;display:flex;flex-direction:column;overflow:hidden}
.notepad__title{font-size:16px;font-weight:600;color:#ddd;padding:16px 20px 8px;cursor:text;border-bottom:1px solid var(--border-color,#333)}
.notepad__title-input{font-size:16px;font-weight:600;background:none;border:none;border-bottom:1px solid var(--border-color,#333);color:#ddd;padding:16px 20px 8px;outline:none;width:100%}
.notepad__body{flex:1;background:none;border:none;color:#ccc;padding:16px 20px;font-size:13px;font-family:inherit;resize:none;outline:none;line-height:1.65}
.notepad__placeholder{display:flex;align-items:center;justify-content:center;height:100%;color:#555}
`;
let gt = !1;
function qt() {
  if (gt || typeof document > "u") return;
  gt = !0;
  const L = document.createElement("style");
  L.textContent = Kt, document.head.appendChild(L);
}
function Ht() {
  try {
    const L = localStorage.getItem("notepad:notes");
    return L ? JSON.parse(L) : [];
  } catch {
    return [];
  }
}
function gr(L) {
  try {
    localStorage.setItem("notepad:notes", JSON.stringify(L));
  } catch {
  }
}
function Gt({ active: L }) {
  qt();
  const [d, ce] = Ie.useState(Ht), [V, ne] = Ie.useState(null), [ue, X] = Ie.useState(!1), ee = Ie.useRef(null);
  Ie.useEffect(() => {
    d.length > 0 && !V && ne(d[0].id);
  }, []);
  const I = () => {
    const h = {
      id: Date.now().toString(),
      title: "Untitled",
      body: "",
      updated: Date.now()
    }, j = [h, ...d];
    ce(j), gr(j), ne(h.id), setTimeout(() => X(!0), 50);
  }, re = (h) => {
    var q;
    const j = d.filter((se) => se.id !== h);
    ce(j), gr(j), V === h && ne(((q = j[0]) == null ? void 0 : q.id) ?? null);
  }, F = (h) => {
    const j = d.map(
      (q) => q.id === V ? { ...q, body: h, updated: Date.now() } : q
    );
    ce(j), gr(j);
  }, B = (h) => {
    const j = d.map(
      (q) => q.id === V ? { ...q, title: h } : q
    );
    ce(j), gr(j);
  }, K = d.find((h) => h.id === V);
  return /* @__PURE__ */ Z.jsxs("div", { className: "notepad", children: [
    /* @__PURE__ */ Z.jsxs("div", { className: "notepad__sidebar", children: [
      /* @__PURE__ */ Z.jsx("button", { className: "notepad__new", onClick: I, children: "+ New Note" }),
      /* @__PURE__ */ Z.jsxs("div", { className: "notepad__list", children: [
        d.map((h) => /* @__PURE__ */ Z.jsxs(
          "div",
          {
            className: `notepad__item${h.id === V ? " notepad__item--active" : ""}`,
            onClick: () => ne(h.id),
            children: [
              /* @__PURE__ */ Z.jsx("div", { className: "notepad__item-title", children: h.title }),
              /* @__PURE__ */ Z.jsx("div", { className: "notepad__item-preview", children: h.body.slice(0, 60) }),
              /* @__PURE__ */ Z.jsx(
                "button",
                {
                  className: "notepad__item-del",
                  onClick: (j) => {
                    j.stopPropagation(), re(h.id);
                  },
                  children: "×"
                }
              )
            ]
          },
          h.id
        )),
        d.length === 0 && /* @__PURE__ */ Z.jsx("div", { className: "notepad__empty", children: "No notes yet" })
      ] })
    ] }),
    /* @__PURE__ */ Z.jsx("div", { className: "notepad__editor", children: K ? /* @__PURE__ */ Z.jsxs(Z.Fragment, { children: [
      ue ? /* @__PURE__ */ Z.jsx(
        "input",
        {
          className: "notepad__title-input",
          value: K.title,
          autoFocus: !0,
          onChange: (h) => B(h.target.value),
          onBlur: () => X(!1),
          onKeyDown: (h) => {
            h.key === "Enter" && X(!1);
          }
        }
      ) : /* @__PURE__ */ Z.jsx("div", { className: "notepad__title", onClick: () => X(!0), children: K.title }),
      /* @__PURE__ */ Z.jsx(
        "textarea",
        {
          ref: ee,
          className: "notepad__body",
          value: K.body,
          onChange: (h) => F(h.target.value),
          placeholder: "Start writing…"
        }
      )
    ] }) : /* @__PURE__ */ Z.jsx("div", { className: "notepad__placeholder", children: "Select or create a note" }) })
  ] });
}
const Jt = {
  id: "notepad",
  name: "Notepad",
  description: "Persistent in-app note-taking with a sidebar list and full editor.",
  author: "Command-IDE",
  version: "1.0.0",
  tabType: "notepad",
  tabTitle: "notepad",
  TabComponent: Gt
};
export {
  Jt as default
};
