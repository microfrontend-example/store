System.register([], function (t, r) {
  return {
    execute: function () {
      t(
        (() => {
          var t = {
              587: (t, r, e) => {
                const n = e(838).R;
                r.s = function (t) {
                  if ((t || (t = 1), !e.y.meta || !e.y.meta.url))
                    throw (
                      (console.error("__system_context__", e.y),
                      Error(
                        "systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided"
                      ))
                    );
                  e.p = n(e.y.meta.url, t);
                };
              },
              838: (t, r, e) => {
                r.R = function (t, r) {
                  var e = document.createElement("a");
                  e.href = t;
                  for (
                    var n =
                        "/" === e.pathname[0] ? e.pathname : "/" + e.pathname,
                      o = 0,
                      i = n.length;
                    o !== r && i >= 0;

                  )
                    "/" === n[--i] && o++;
                  if (o !== r)
                    throw Error(
                      "systemjs-webpack-interop: rootDirectoryLevel (" +
                        r +
                        ") is greater than the number of directories (" +
                        o +
                        ") in the URL path " +
                        t
                    );
                  var s = n.slice(0, i + 1);
                  return e.protocol + "//" + e.host + s;
                };
                Number.isInteger;
              },
            },
            e = {};
          function n(r) {
            var o = e[r];
            if (void 0 !== o) return o.exports;
            var i = (e[r] = { exports: {} });
            return t[r](i, i.exports, n), i.exports;
          }
          (n.y = r),
            (n.d = (t, r) => {
              for (var e in r)
                n.o(r, e) &&
                  !n.o(t, e) &&
                  Object.defineProperty(t, e, { enumerable: !0, get: r[e] });
            }),
            (n.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r)),
            (n.r = (t) => {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (n.p = "");
          var o = {};
          return (
            (0, n(587).s)(1),
            (() => {
              "use strict";
              function t(t, r, e) {
                return (
                  r in t
                    ? Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = e),
                  t
                );
              }
              function r(t, r) {
                (null == r || r > t.length) && (r = t.length);
                for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
                return n;
              }
              function e(t) {
                return (
                  (function (t) {
                    if (Array.isArray(t)) return r(t);
                  })(t) ||
                  (function (t) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != t[Symbol.iterator]) ||
                      null != t["@@iterator"]
                    )
                      return Array.from(t);
                  })(t) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return r(t, e);
                      var n = Object.prototype.toString.call(t).slice(8, -1);
                      return (
                        "Object" === n &&
                          t.constructor &&
                          (n = t.constructor.name),
                        "Map" === n || "Set" === n
                          ? Array.from(t)
                          : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? r(t, e)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
                );
              }
              function i(t, r) {
                for (var e = 0; e < r.length; e++) {
                  var n = r[e];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n);
                }
              }
              n.r(o), n.d(o, { storeTodo: () => K });
              var s = function (t, r) {
                return (
                  (s =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, r) {
                        t.__proto__ = r;
                      }) ||
                    function (t, r) {
                      for (var e in r)
                        Object.prototype.hasOwnProperty.call(r, e) &&
                          (t[e] = r[e]);
                    }),
                  s(t, r)
                );
              };
              function u(t, r) {
                if ("function" != typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function e() {
                  this.constructor = t;
                }
                s(t, r),
                  (t.prototype =
                    null === r
                      ? Object.create(r)
                      : ((e.prototype = r.prototype), new e()));
              }
              function c(t) {
                var r = "function" == typeof Symbol && Symbol.iterator,
                  e = r && t[r],
                  n = 0;
                if (e) return e.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && n >= t.length && (t = void 0),
                        { value: t && t[n++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  r
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              }
              function a(t, r) {
                var e = "function" == typeof Symbol && t[Symbol.iterator];
                if (!e) return t;
                var n,
                  o,
                  i = e.call(t),
                  s = [];
                try {
                  for (; (void 0 === r || r-- > 0) && !(n = i.next()).done; )
                    s.push(n.value);
                } catch (t) {
                  o = { error: t };
                } finally {
                  try {
                    n && !n.done && (e = i.return) && e.call(i);
                  } finally {
                    if (o) throw o.error;
                  }
                }
                return s;
              }
              function l(t, r, e) {
                if (e || 2 === arguments.length)
                  for (var n, o = 0, i = r.length; o < i; o++)
                    (!n && o in r) ||
                      (n || (n = Array.prototype.slice.call(r, 0, o)),
                      (n[o] = r[o]));
                return t.concat(n || Array.prototype.slice.call(r));
              }
              function f(t) {
                return "function" == typeof t;
              }
              function p(t) {
                var r = t(function (t) {
                  Error.call(t), (t.stack = new Error().stack);
                });
                return (
                  (r.prototype = Object.create(Error.prototype)),
                  (r.prototype.constructor = r),
                  r
                );
              }
              Object.create, Object.create;
              var h = p(function (t) {
                return function (r) {
                  t(this),
                    (this.message = r
                      ? r.length +
                        " errors occurred during unsubscription:\n" +
                        r
                          .map(function (t, r) {
                            return r + 1 + ") " + t.toString();
                          })
                          .join("\n  ")
                      : ""),
                    (this.name = "UnsubscriptionError"),
                    (this.errors = r);
                };
              });
              function v(t, r) {
                if (t) {
                  var e = t.indexOf(r);
                  0 <= e && t.splice(e, 1);
                }
              }
              var y = (function () {
                  function t(t) {
                    (this.initialTeardown = t),
                      (this.closed = !1),
                      (this._parentage = null),
                      (this._finalizers = null);
                  }
                  var r;
                  return (
                    (t.prototype.unsubscribe = function () {
                      var t, r, e, n, o;
                      if (!this.closed) {
                        this.closed = !0;
                        var i = this._parentage;
                        if (i)
                          if (((this._parentage = null), Array.isArray(i)))
                            try {
                              for (
                                var s = c(i), u = s.next();
                                !u.done;
                                u = s.next()
                              )
                                u.value.remove(this);
                            } catch (r) {
                              t = { error: r };
                            } finally {
                              try {
                                u && !u.done && (r = s.return) && r.call(s);
                              } finally {
                                if (t) throw t.error;
                              }
                            }
                          else i.remove(this);
                        var p = this.initialTeardown;
                        if (f(p))
                          try {
                            p();
                          } catch (t) {
                            o = t instanceof h ? t.errors : [t];
                          }
                        var v = this._finalizers;
                        if (v) {
                          this._finalizers = null;
                          try {
                            for (
                              var y = c(v), d = y.next();
                              !d.done;
                              d = y.next()
                            ) {
                              var b = d.value;
                              try {
                                m(b);
                              } catch (t) {
                                (o = null != o ? o : []),
                                  t instanceof h
                                    ? (o = l(l([], a(o)), a(t.errors)))
                                    : o.push(t);
                              }
                            }
                          } catch (t) {
                            e = { error: t };
                          } finally {
                            try {
                              d && !d.done && (n = y.return) && n.call(y);
                            } finally {
                              if (e) throw e.error;
                            }
                          }
                        }
                        if (o) throw new h(o);
                      }
                    }),
                    (t.prototype.add = function (r) {
                      var e;
                      if (r && r !== this)
                        if (this.closed) m(r);
                        else {
                          if (r instanceof t) {
                            if (r.closed || r._hasParent(this)) return;
                            r._addParent(this);
                          }
                          (this._finalizers =
                            null !== (e = this._finalizers) && void 0 !== e
                              ? e
                              : []).push(r);
                        }
                    }),
                    (t.prototype._hasParent = function (t) {
                      var r = this._parentage;
                      return r === t || (Array.isArray(r) && r.includes(t));
                    }),
                    (t.prototype._addParent = function (t) {
                      var r = this._parentage;
                      this._parentage = Array.isArray(r)
                        ? (r.push(t), r)
                        : r
                        ? [r, t]
                        : t;
                    }),
                    (t.prototype._removeParent = function (t) {
                      var r = this._parentage;
                      r === t
                        ? (this._parentage = null)
                        : Array.isArray(r) && v(r, t);
                    }),
                    (t.prototype.remove = function (r) {
                      var e = this._finalizers;
                      e && v(e, r), r instanceof t && r._removeParent(this);
                    }),
                    (t.EMPTY = (((r = new t()).closed = !0), r)),
                    t
                  );
                })(),
                d = y.EMPTY;
              function b(t) {
                return (
                  t instanceof y ||
                  (t &&
                    "closed" in t &&
                    f(t.remove) &&
                    f(t.add) &&
                    f(t.unsubscribe))
                );
              }
              function m(t) {
                f(t) ? t() : t.unsubscribe();
              }
              var _ = null,
                g = null,
                w = void 0,
                S = !1,
                O = !1,
                x = {
                  setTimeout: function (t, r) {
                    for (var e = [], n = 2; n < arguments.length; n++)
                      e[n - 2] = arguments[n];
                    var o = x.delegate;
                    return (null == o ? void 0 : o.setTimeout)
                      ? o.setTimeout.apply(o, l([t, r], a(e)))
                      : setTimeout.apply(void 0, l([t, r], a(e)));
                  },
                  clearTimeout: function (t) {
                    var r = x.delegate;
                    return (
                      (null == r ? void 0 : r.clearTimeout) || clearTimeout
                    )(t);
                  },
                  delegate: void 0,
                };
              function j() {}
              var T = P("C", void 0, void 0);
              function P(t, r, e) {
                return { kind: t, value: r, error: e };
              }
              var E = null;
              function k(t) {
                if (S) {
                  var r = !E;
                  if ((r && (E = { errorThrown: !1, error: null }), t(), r)) {
                    var e = E,
                      n = e.errorThrown,
                      o = e.error;
                    if (((E = null), n)) throw o;
                  }
                } else t();
              }
              var A = (function (t) {
                  function r(r) {
                    var e = t.call(this) || this;
                    return (
                      (e.isStopped = !1),
                      r
                        ? ((e.destination = r), b(r) && r.add(e))
                        : (e.destination = F),
                      e
                    );
                  }
                  return (
                    u(r, t),
                    (r.create = function (t, r, e) {
                      return new z(t, r, e);
                    }),
                    (r.prototype.next = function (t) {
                      this.isStopped
                        ? D(
                            (function (t) {
                              return P("N", t, void 0);
                            })(t),
                            this
                          )
                        : this._next(t);
                    }),
                    (r.prototype.error = function (t) {
                      this.isStopped
                        ? D(P("E", void 0, t), this)
                        : ((this.isStopped = !0), this._error(t));
                    }),
                    (r.prototype.complete = function () {
                      this.isStopped
                        ? D(T, this)
                        : ((this.isStopped = !0), this._complete());
                    }),
                    (r.prototype.unsubscribe = function () {
                      this.closed ||
                        ((this.isStopped = !0),
                        t.prototype.unsubscribe.call(this),
                        (this.destination = null));
                    }),
                    (r.prototype._next = function (t) {
                      this.destination.next(t);
                    }),
                    (r.prototype._error = function (t) {
                      try {
                        this.destination.error(t);
                      } finally {
                        this.unsubscribe();
                      }
                    }),
                    (r.prototype._complete = function () {
                      try {
                        this.destination.complete();
                      } finally {
                        this.unsubscribe();
                      }
                    }),
                    r
                  );
                })(y),
                I = Function.prototype.bind;
              function C(t, r) {
                return I.call(t, r);
              }
              var $ = (function () {
                  function t(t) {
                    this.partialObserver = t;
                  }
                  return (
                    (t.prototype.next = function (t) {
                      var r = this.partialObserver;
                      if (r.next)
                        try {
                          r.next(t);
                        } catch (t) {
                          L(t);
                        }
                    }),
                    (t.prototype.error = function (t) {
                      var r = this.partialObserver;
                      if (r.error)
                        try {
                          r.error(t);
                        } catch (t) {
                          L(t);
                        }
                      else L(t);
                    }),
                    (t.prototype.complete = function () {
                      var t = this.partialObserver;
                      if (t.complete)
                        try {
                          t.complete();
                        } catch (t) {
                          L(t);
                        }
                    }),
                    t
                  );
                })(),
                z = (function (t) {
                  function r(r, e, n) {
                    var o,
                      i,
                      s = t.call(this) || this;
                    return (
                      f(r) || !r
                        ? (o = {
                            next: null != r ? r : void 0,
                            error: null != e ? e : void 0,
                            complete: null != n ? n : void 0,
                          })
                        : s && O
                        ? (((i = Object.create(r)).unsubscribe = function () {
                            return s.unsubscribe();
                          }),
                          (o = {
                            next: r.next && C(r.next, i),
                            error: r.error && C(r.error, i),
                            complete: r.complete && C(r.complete, i),
                          }))
                        : (o = r),
                      (s.destination = new $(o)),
                      s
                    );
                  }
                  return u(r, t), r;
                })(A);
              function L(t) {
                var r;
                S
                  ? ((r = t), S && E && ((E.errorThrown = !0), (E.error = r)))
                  : (function (t) {
                      x.setTimeout(function () {
                        if (!_) throw t;
                        _(t);
                      });
                    })(t);
              }
              function D(t, r) {
                var e = g;
                e &&
                  x.setTimeout(function () {
                    return e(t, r);
                  });
              }
              var F = {
                  closed: !0,
                  next: j,
                  error: function (t) {
                    throw t;
                  },
                  complete: j,
                },
                M =
                  ("function" == typeof Symbol && Symbol.observable) ||
                  "@@observable";
              function N(t) {
                return t;
              }
              function U(t) {
                return 0 === t.length
                  ? N
                  : 1 === t.length
                  ? t[0]
                  : function (r) {
                      return t.reduce(function (t, r) {
                        return r(t);
                      }, r);
                    };
              }
              var J = (function () {
                function t(t) {
                  t && (this._subscribe = t);
                }
                return (
                  (t.prototype.lift = function (r) {
                    var e = new t();
                    return (e.source = this), (e.operator = r), e;
                  }),
                  (t.prototype.subscribe = function (t, r, e) {
                    var n,
                      o = this,
                      i =
                        ((n = t) && n instanceof A) ||
                        ((function (t) {
                          return t && f(t.next) && f(t.error) && f(t.complete);
                        })(n) &&
                          b(n))
                          ? t
                          : new z(t, r, e);
                    return (
                      k(function () {
                        var t = o,
                          r = t.operator,
                          e = t.source;
                        i.add(
                          r
                            ? r.call(i, e)
                            : e
                            ? o._subscribe(i)
                            : o._trySubscribe(i)
                        );
                      }),
                      i
                    );
                  }),
                  (t.prototype._trySubscribe = function (t) {
                    try {
                      return this._subscribe(t);
                    } catch (r) {
                      t.error(r);
                    }
                  }),
                  (t.prototype.forEach = function (t, r) {
                    var e = this;
                    return new (r = R(r))(function (r, n) {
                      var o = new z({
                        next: function (r) {
                          try {
                            t(r);
                          } catch (t) {
                            n(t), o.unsubscribe();
                          }
                        },
                        error: n,
                        complete: r,
                      });
                      e.subscribe(o);
                    });
                  }),
                  (t.prototype._subscribe = function (t) {
                    var r;
                    return null === (r = this.source) || void 0 === r
                      ? void 0
                      : r.subscribe(t);
                  }),
                  (t.prototype[M] = function () {
                    return this;
                  }),
                  (t.prototype.pipe = function () {
                    for (var t = [], r = 0; r < arguments.length; r++)
                      t[r] = arguments[r];
                    return U(t)(this);
                  }),
                  (t.prototype.toPromise = function (t) {
                    var r = this;
                    return new (t = R(t))(function (t, e) {
                      var n;
                      r.subscribe(
                        function (t) {
                          return (n = t);
                        },
                        function (t) {
                          return e(t);
                        },
                        function () {
                          return t(n);
                        }
                      );
                    });
                  }),
                  (t.create = function (r) {
                    return new t(r);
                  }),
                  t
                );
              })();
              function R(t) {
                var r;
                return null !== (r = null != t ? t : w) && void 0 !== r
                  ? r
                  : Promise;
              }
              var V = p(function (t) {
                  return function () {
                    t(this),
                      (this.name = "ObjectUnsubscribedError"),
                      (this.message = "object unsubscribed");
                  };
                }),
                Y = (function (t) {
                  function r() {
                    var r = t.call(this) || this;
                    return (
                      (r.closed = !1),
                      (r.currentObservers = null),
                      (r.observers = []),
                      (r.isStopped = !1),
                      (r.hasError = !1),
                      (r.thrownError = null),
                      r
                    );
                  }
                  return (
                    u(r, t),
                    (r.prototype.lift = function (t) {
                      var r = new q(this, this);
                      return (r.operator = t), r;
                    }),
                    (r.prototype._throwIfClosed = function () {
                      if (this.closed) throw new V();
                    }),
                    (r.prototype.next = function (t) {
                      var r = this;
                      k(function () {
                        var e, n;
                        if ((r._throwIfClosed(), !r.isStopped)) {
                          r.currentObservers ||
                            (r.currentObservers = Array.from(r.observers));
                          try {
                            for (
                              var o = c(r.currentObservers), i = o.next();
                              !i.done;
                              i = o.next()
                            )
                              i.value.next(t);
                          } catch (t) {
                            e = { error: t };
                          } finally {
                            try {
                              i && !i.done && (n = o.return) && n.call(o);
                            } finally {
                              if (e) throw e.error;
                            }
                          }
                        }
                      });
                    }),
                    (r.prototype.error = function (t) {
                      var r = this;
                      k(function () {
                        if ((r._throwIfClosed(), !r.isStopped)) {
                          (r.hasError = r.isStopped = !0), (r.thrownError = t);
                          for (var e = r.observers; e.length; )
                            e.shift().error(t);
                        }
                      });
                    }),
                    (r.prototype.complete = function () {
                      var t = this;
                      k(function () {
                        if ((t._throwIfClosed(), !t.isStopped)) {
                          t.isStopped = !0;
                          for (var r = t.observers; r.length; )
                            r.shift().complete();
                        }
                      });
                    }),
                    (r.prototype.unsubscribe = function () {
                      (this.isStopped = this.closed = !0),
                        (this.observers = this.currentObservers = null);
                    }),
                    Object.defineProperty(r.prototype, "observed", {
                      get: function () {
                        var t;
                        return (
                          (null === (t = this.observers) || void 0 === t
                            ? void 0
                            : t.length) > 0
                        );
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (r.prototype._trySubscribe = function (r) {
                      return (
                        this._throwIfClosed(),
                        t.prototype._trySubscribe.call(this, r)
                      );
                    }),
                    (r.prototype._subscribe = function (t) {
                      return (
                        this._throwIfClosed(),
                        this._checkFinalizedStatuses(t),
                        this._innerSubscribe(t)
                      );
                    }),
                    (r.prototype._innerSubscribe = function (t) {
                      var r = this,
                        e = this,
                        n = e.hasError,
                        o = e.isStopped,
                        i = e.observers;
                      return n || o
                        ? d
                        : ((this.currentObservers = null),
                          i.push(t),
                          new y(function () {
                            (r.currentObservers = null), v(i, t);
                          }));
                    }),
                    (r.prototype._checkFinalizedStatuses = function (t) {
                      var r = this,
                        e = r.hasError,
                        n = r.thrownError,
                        o = r.isStopped;
                      e ? t.error(n) : o && t.complete();
                    }),
                    (r.prototype.asObservable = function () {
                      var t = new J();
                      return (t.source = this), t;
                    }),
                    (r.create = function (t, r) {
                      return new q(t, r);
                    }),
                    r
                  );
                })(J),
                q = (function (t) {
                  function r(r, e) {
                    var n = t.call(this) || this;
                    return (n.destination = r), (n.source = e), n;
                  }
                  return (
                    u(r, t),
                    (r.prototype.next = function (t) {
                      var r, e;
                      null ===
                        (e =
                          null === (r = this.destination) || void 0 === r
                            ? void 0
                            : r.next) ||
                        void 0 === e ||
                        e.call(r, t);
                    }),
                    (r.prototype.error = function (t) {
                      var r, e;
                      null ===
                        (e =
                          null === (r = this.destination) || void 0 === r
                            ? void 0
                            : r.error) ||
                        void 0 === e ||
                        e.call(r, t);
                    }),
                    (r.prototype.complete = function () {
                      var t, r;
                      null ===
                        (r =
                          null === (t = this.destination) || void 0 === t
                            ? void 0
                            : t.complete) ||
                        void 0 === r ||
                        r.call(t);
                    }),
                    (r.prototype._subscribe = function (t) {
                      var r, e;
                      return null !==
                        (e =
                          null === (r = this.source) || void 0 === r
                            ? void 0
                            : r.subscribe(t)) && void 0 !== e
                        ? e
                        : d;
                    }),
                    r
                  );
                })(Y),
                B = (function (t) {
                  function r(r) {
                    var e = t.call(this) || this;
                    return (e._value = r), e;
                  }
                  return (
                    u(r, t),
                    Object.defineProperty(r.prototype, "value", {
                      get: function () {
                        return this.getValue();
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (r.prototype._subscribe = function (r) {
                      var e = t.prototype._subscribe.call(this, r);
                      return !e.closed && r.next(this._value), e;
                    }),
                    (r.prototype.getValue = function () {
                      var t = this,
                        r = t.hasError,
                        e = t.thrownError,
                        n = t._value;
                      if (r) throw e;
                      return this._throwIfClosed(), n;
                    }),
                    (r.prototype.next = function (r) {
                      t.prototype.next.call(this, (this._value = r));
                    }),
                    r
                  );
                })(Y);
              function G(t, r) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(t);
                  r &&
                    (n = n.filter(function (r) {
                      return Object.getOwnPropertyDescriptor(t, r).enumerable;
                    })),
                    e.push.apply(e, n);
                }
                return e;
              }
              function H(r) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? G(Object(n), !0).forEach(function (e) {
                        t(r, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        r,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : G(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          r,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return r;
              }
              var K = new ((function () {
                function t() {
                  !(function (t, r) {
                    if (!(t instanceof r))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                    (this._id = 0),
                    (this._key = "TODOS"),
                    (this._storeTodo$ = new B(this.getFromLocalStorage()));
                }
                var r, n;
                return (
                  (r = t),
                  (n = [
                    {
                      key: "storeTodo$",
                      get: function () {
                        return this._storeTodo$.asObservable();
                      },
                    },
                    {
                      key: "id",
                      get: function () {
                        return this._id;
                      },
                    },
                    {
                      key: "addTodo",
                      value: function (t) {
                        this._storeTodo$.next(
                          [].concat(e(this._storeTodo$.value), [t])
                        ),
                          this._id++,
                          this.saveInLocalStorage();
                      },
                    },
                    {
                      key: "changeCompleted",
                      value: function (t) {
                        var r = this.todos().map(function (r) {
                          return r.id === t
                            ? H(H({}, r), {}, { completed: !r.completed })
                            : r;
                        });
                        this._storeTodo$.next(e(r)), this.saveInLocalStorage();
                      },
                    },
                    {
                      key: "deleteTodo",
                      value: function (t) {
                        var r = this.todos().filter(function (r) {
                          return r.id !== t;
                        });
                        this._storeTodo$.next(e(r)), this.saveInLocalStorage();
                      },
                    },
                    {
                      key: "todos",
                      value: function () {
                        return this._storeTodo$.getValue();
                      },
                    },
                    {
                      key: "saveInLocalStorage",
                      value: function () {
                        localStorage.setItem(
                          this._key,
                          JSON.stringify(this.todos())
                        );
                      },
                    },
                    {
                      key: "getFromLocalStorage",
                      value: function () {
                        var t = localStorage.getItem(this._key);
                        if (t) {
                          var r = JSON.parse(t);
                          return (
                            (this._id =
                              r.length > 0 ? r[r.length - 1].id + 1 : 0),
                            r
                          );
                        }
                        return [];
                      },
                    },
                  ]) && i(r.prototype, n),
                  Object.defineProperty(r, "prototype", { writable: !1 }),
                  t
                );
              })())();
            })(),
            o
          );
        })()
      );
    },
  };
});
//# sourceMappingURL=throwjs-store.js.map
