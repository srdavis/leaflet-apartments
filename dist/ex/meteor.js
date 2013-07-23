(function () {
    var e = this,
        t = e._,
        n = {}, r = Array.prototype,
        i = Object.prototype,
        s = Function.prototype,
        o = r.push,
        u = r.slice,
        a = r.concat,
        f = r.unshift,
        l = i.toString,
        c = i.hasOwnProperty,
        h = r.forEach,
        p = r.map,
        d = r.reduce,
        v = r.reduceRight,
        m = r.filter,
        g = r.every,
        y = r.some,
        b = r.indexOf,
        w = r.lastIndexOf,
        E = Array.isArray,
        S = Object.keys,
        x = s.bind,
        T = function (e) {
            if (e instanceof T) return e;
            if (!(this instanceof T)) return new T(e);
            this._wrapped = e
        };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = T), exports._ = T) : e._ = T, T.VERSION = "1.4.2";
    var N = T.each = T.forEach = function (e, t, r) {
        if (e == null) return;
        if (h && e.forEach === h) e.forEach(t, r);
        else if (e.length === +e.length) {
            for (var i = 0, s = e.length; i < s; i++)
                if (t.call(r, e[i], i, e) === n) return
        } else
            for (var o in e)
                if (T.has(e, o) && t.call(r, e[o], o, e) === n) return
    };
    T.map = T.collect = function (e, t, n) {
        var r = [];
        return e == null ? r : p && e.map === p ? e.map(t, n) : (N(e, function (e, i, s) {
            r[r.length] = t.call(n, e, i, s)
        }), r)
    }, T.reduce = T.foldl = T.inject = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (d && e.reduce === d) return r && (t = T.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        N(e, function (e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
        });
        if (!i) throw new TypeError("Reduce of empty array with no initial value");
        return n
    }, T.reduceRight = T.foldr = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (v && e.reduceRight === v) return r && (t = T.bind(t, r)), arguments.length > 2 ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = e.length;
        if (s !== +s) {
            var o = T.keys(e);
            s = o.length
        }
        N(e, function (u, a, f) {
            a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
        });
        if (!i) throw new TypeError("Reduce of empty array with no initial value");
        return n
    }, T.find = T.detect = function (e, t, n) {
        var r;
        return C(e, function (e, i, s) {
            if (t.call(n, e, i, s)) return r = e, !0
        }), r
    }, T.filter = T.select = function (e, t, n) {
        var r = [];
        return e == null ? r : m && e.filter === m ? e.filter(t, n) : (N(e, function (e, i, s) {
            t.call(n, e, i, s) && (r[r.length] = e)
        }), r)
    }, T.reject = function (e, t, n) {
        var r = [];
        return e == null ? r : (N(e, function (e, i, s) {
            t.call(n, e, i, s) || (r[r.length] = e)
        }), r)
    }, T.every = T.all = function (e, t, r) {
        t || (t = T.identity);
        var i = !0;
        return e == null ? i : g && e.every === g ? e.every(t, r) : (N(e, function (e, s, o) {
            if (!(i = i && t.call(r, e, s, o))) return n
        }), !! i)
    };
    var C = T.some = T.any = function (e, t, r) {
        t || (t = T.identity);
        var i = !1;
        return e == null ? i : y && e.some === y ? e.some(t, r) : (N(e, function (e, s, o) {
            if (i || (i = t.call(r, e, s, o))) return n
        }), !! i)
    };
    T.contains = T.include = function (e, t) {
        var n = !1;
        return e == null ? n : b && e.indexOf === b ? e.indexOf(t) != -1 : (n = C(e, function (e) {
            return e === t
        }), n)
    }, T.invoke = function (e, t) {
        var n = u.call(arguments, 2);
        return T.map(e, function (e) {
            return (T.isFunction(t) ? t : e[t]).apply(e, n)
        })
    }, T.pluck = function (e, t) {
        return T.map(e, function (e) {
            return e[t]
        })
    }, T.where = function (e, t) {
        return T.isEmpty(t) ? [] : T.filter(e, function (e) {
            for (var n in t)
                if (t[n] !== e[n]) return !1;
            return !0
        })
    }, T.max = function (e, t, n) {
        if (!t && T.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        if (!t && T.isEmpty(e)) return -Infinity;
        var r = {
            computed: -Infinity
        };
        return N(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o >= r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, T.min = function (e, t, n) {
        if (!t && T.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
        if (!t && T.isEmpty(e)) return Infinity;
        var r = {
            computed: Infinity
        };
        return N(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o < r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, T.shuffle = function (e) {
        var t, n = 0,
            r = [];
        return N(e, function (e) {
            t = T.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    };
    var k = function (e) {
        return T.isFunction(e) ? e : function (t) {
            return t[e]
        }
    };
    T.sortBy = function (e, t, n) {
        var r = k(t);
        return T.pluck(T.map(e, function (e, t, i) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, i)
            }
        }).sort(function (e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0) return 1;
                if (n < r || r === void 0) return -1
            }
            return e.index < t.index ? -1 : 1
        }), "value")
    };
    var L = function (e, t, n, r) {
        var i = {}, s = k(t);
        return N(e, function (t, o) {
            var u = s.call(n, t, o, e);
            r(i, u, t)
        }), i
    };
    T.groupBy = function (e, t, n) {
        return L(e, t, n, function (e, t, n) {
            (T.has(e, t) ? e[t] : e[t] = []).push(n)
        })
    }, T.countBy = function (e, t, n) {
        return L(e, t, n, function (e, t, n) {
            T.has(e, t) || (e[t] = 0), e[t]++
        })
    }, T.sortedIndex = function (e, t, n, r) {
        n = n == null ? T.identity : k(n);
        var i = n.call(r, t),
            s = 0,
            o = e.length;
        while (s < o) {
            var u = s + o >>> 1;
            n.call(r, e[u]) < i ? s = u + 1 : o = u
        }
        return s
    }, T.toArray = function (e) {
        return e ? e.length === +e.length ? u.call(e) : T.values(e) : []
    }, T.size = function (e) {
        return e.length === +e.length ? e.length : T.keys(e).length
    }, T.first = T.head = T.take = function (e, t, n) {
        return t != null && !n ? u.call(e, 0, t) : e[0]
    }, T.initial = function (e, t, n) {
        return u.call(e, 0, e.length - (t == null || n ? 1 : t))
    }, T.last = function (e, t, n) {
        return t != null && !n ? u.call(e, Math.max(e.length - t, 0)) : e[e.length - 1]
    }, T.rest = T.tail = T.drop = function (e, t, n) {
        return u.call(e, t == null || n ? 1 : t)
    }, T.compact = function (e) {
        return T.filter(e, function (e) {
            return !!e
        })
    };
    var A = function (e, t, n) {
        return N(e, function (e) {
            T.isArray(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
        }), n
    };
    T.flatten = function (e, t) {
        return A(e, t, [])
    }, T.without = function (e) {
        return T.difference(e, u.call(arguments, 1))
    }, T.uniq = T.unique = function (e, t, n, r) {
        var i = n ? T.map(e, n, r) : e,
            s = [],
            o = [];
        return N(i, function (n, r) {
            if (t ? !r || o[o.length - 1] !== n : !T.contains(o, n)) o.push(n), s.push(e[r])
        }), s
    }, T.union = function () {
        return T.uniq(a.apply(r, arguments))
    }, T.intersection = function (e) {
        var t = u.call(arguments, 1);
        return T.filter(T.uniq(e), function (e) {
            return T.every(t, function (t) {
                return T.indexOf(t, e) >= 0
            })
        })
    }, T.difference = function (e) {
        var t = a.apply(r, u.call(arguments, 1));
        return T.filter(e, function (e) {
            return !T.contains(t, e)
        })
    }, T.zip = function () {
        var e = u.call(arguments),
            t = T.max(T.pluck(e, "length")),
            n = new Array(t);
        for (var r = 0; r < t; r++) n[r] = T.pluck(e, "" + r);
        return n
    }, T.object = function (e, t) {
        var n = {};
        for (var r = 0, i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, T.indexOf = function (e, t, n) {
        if (e == null) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if (typeof n != "number") return r = T.sortedIndex(e, t), e[r] === t ? r : -1;
            r = n < 0 ? Math.max(0, i + n) : n
        }
        if (b && e.indexOf === b) return e.indexOf(t, n);
        for (; r < i; r++)
            if (e[r] === t) return r;
        return -1
    }, T.lastIndexOf = function (e, t, n) {
        if (e == null) return -1;
        var r = n != null;
        if (w && e.lastIndexOf === w) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        var i = r ? n : e.length;
        while (i--)
            if (e[i] === t) return i;
        return -1
    }, T.range = function (e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0),
            i = 0,
            s = new Array(r);
        while (i < r) s[i++] = e, e += n;
        return s
    };
    var O = function () {};
    T.bind = function (t, n) {
        var r, i;
        if (t.bind === x && x) return x.apply(t, u.call(arguments, 1));
        if (!T.isFunction(t)) throw new TypeError;
        return i = u.call(arguments, 2), r = function () {
            if (this instanceof r) {
                O.prototype = t.prototype;
                var e = new O,
                    s = t.apply(e, i.concat(u.call(arguments)));
                return Object(s) === s ? s : e
            }
            return t.apply(n, i.concat(u.call(arguments)))
        }
    }, T.bindAll = function (e) {
        var t = u.call(arguments, 1);
        return t.length == 0 && (t = T.functions(e)), N(t, function (t) {
            e[t] = T.bind(e[t], e)
        }), e
    }, T.memoize = function (e, t) {
        var n = {};
        return t || (t = T.identity),
        function () {
            var r = t.apply(this, arguments);
            return T.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }, T.delay = function (e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, T.defer = function (e) {
        return T.delay.apply(T, [e, 1].concat(u.call(arguments, 1)))
    }, T.throttle = function (e, t) {
        var n, r, i, s, o, u, a = T.debounce(function () {
                o = s = !1
            }, t);
        return function () {
            n = this, r = arguments;
            var f = function () {
                i = null, o && (u = e.apply(n, r)), a()
            };
            return i || (i = setTimeout(f, t)), s ? o = !0 : (s = !0, u = e.apply(n, r)), a(), u
        }
    }, T.debounce = function (e, t, n) {
        var r, i;
        return function () {
            var s = this,
                o = arguments,
                u = function () {
                    r = null, n || (i = e.apply(s, o))
                }, a = n && !r;
            return clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i
        }
    }, T.once = function (e) {
        var t = !1,
            n;
        return function () {
            return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
        }
    }, T.wrap = function (e, t) {
        return function () {
            var n = [e];
            return o.apply(n, arguments), t.apply(this, n)
        }
    }, T.compose = function () {
        var e = arguments;
        return function () {
            var t = arguments;
            for (var n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, T.after = function (e, t) {
        return e <= 0 ? t() : function () {
            if (--e < 1) return t.apply(this, arguments)
        }
    }, T.keys = S || function (e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) T.has(e, n) && (t[t.length] = n);
        return t
    }, T.values = function (e) {
        var t = [];
        for (var n in e) T.has(e, n) && t.push(e[n]);
        return t
    }, T.pairs = function (e) {
        var t = [];
        for (var n in e) T.has(e, n) && t.push([n, e[n]]);
        return t
    }, T.invert = function (e) {
        var t = {};
        for (var n in e) T.has(e, n) && (t[e[n]] = n);
        return t
    }, T.functions = T.methods = function (e) {
        var t = [];
        for (var n in e) T.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, T.extend = function (e) {
        return N(u.call(arguments, 1), function (t) {
            for (var n in t) e[n] = t[n]
        }), e
    }, T.pick = function (e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        return N(n, function (n) {
            n in e && (t[n] = e[n])
        }), t
    }, T.omit = function (e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        for (var i in e) T.contains(n, i) || (t[i] = e[i]);
        return t
    }, T.defaults = function (e) {
        return N(u.call(arguments, 1), function (t) {
            for (var n in t) e[n] == null && (e[n] = t[n])
        }), e
    }, T.clone = function (e) {
        return T.isObject(e) ? T.isArray(e) ? e.slice() : T.extend({}, e) : e
    }, T.tap = function (e, t) {
        return t(e), e
    };
    var M = function (e, t, n, r) {
        if (e === t) return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null) return e === t;
        e instanceof T && (e = e._wrapped), t instanceof T && (t = t._wrapped);
        var i = l.call(e);
        if (i != l.call(t)) return !1;
        switch (i) {
        case "[object String]":
            return e == String(t);
        case "[object Number]":
            return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +e == +t;
        case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if (typeof e != "object" || typeof t != "object") return !1;
        var s = n.length;
        while (s--)
            if (n[s] == e) return r[s] == t;
        n.push(e), r.push(t);
        var o = 0,
            u = !0;
        if (i == "[object Array]") {
            o = e.length, u = o == t.length;
            if (u)
                while (o--)
                    if (!(u = M(e[o], t[o], n, r))) break
        } else {
            var a = e.constructor,
                f = t.constructor;
            if (a !== f && !(T.isFunction(a) && a instanceof a && T.isFunction(f) && f instanceof f)) return !1;
            for (var c in e)
                if (T.has(e, c)) {
                    o++;
                    if (!(u = T.has(t, c) && M(e[c], t[c], n, r))) break
                }
            if (u) {
                for (c in t)
                    if (T.has(t, c) && !(o--)) break;
                u = !o
            }
        }
        return n.pop(), r.pop(), u
    };
    T.isEqual = function (e, t) {
        return M(e, t, [], [])
    }, T.isEmpty = function (e) {
        if (e == null) return !0;
        if (T.isArray(e) || T.isString(e)) return e.length === 0;
        for (var t in e)
            if (T.has(e, t)) return !1;
        return !0
    }, T.isElement = function (e) {
        return !!e && e.nodeType === 1
    }, T.isArray = E || function (e) {
        return l.call(e) == "[object Array]"
    }, T.isObject = function (e) {
        return e === Object(e)
    }, N(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
        T["is" + e] = function (t) {
            return l.call(t) == "[object " + e + "]"
        }
    }), T.isArguments(arguments) || (T.isArguments = function (e) {
        return !!e && !! T.has(e, "callee")
    }), typeof / . / != "function" && (T.isFunction = function (e) {
        return typeof e == "function"
    }), T.isFinite = function (e) {
        return T.isNumber(e) && isFinite(e)
    }, T.isNaN = function (e) {
        return T.isNumber(e) && e != +e
    }, T.isBoolean = function (e) {
        return e === !0 || e === !1 || l.call(e) == "[object Boolean]"
    }, T.isNull = function (e) {
        return e === null
    }, T.isUndefined = function (e) {
        return e === void 0
    }, T.has = function (e, t) {
        return c.call(e, t)
    }, T.noConflict = function () {
        return e._ = t, this
    }, T.identity = function (e) {
        return e
    }, T.times = function (e, t, n) {
        for (var r = 0; r < e; r++) t.call(n, r)
    }, T.random = function (e, t) {
        return t == null && (t = e, e = 0), e + (0 | Math.random() * (t - e + 1))
    };
    var _ = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    _.unescape = T.invert(_.escape);
    var D = {
        escape: new RegExp("[" + T.keys(_.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + T.keys(_.unescape).join("|") + ")", "g")
    };
    T.each(["escape", "unescape"], function (e) {
        T[e] = function (t) {
            return t == null ? "" : ("" + t).replace(D[e], function (t) {
                return _[e][t]
            })
        }
    }), T.result = function (e, t) {
        if (e == null) return null;
        var n = e[t];
        return T.isFunction(n) ? n.call(e) : n
    }, T.mixin = function (e) {
        N(T.functions(e), function (t) {
            var n = T[t] = e[t];
            T.prototype[t] = function () {
                var e = [this._wrapped];
                return o.apply(e, arguments), F.call(this, n.apply(T, e))
            }
        })
    };
    var P = 0;
    T.uniqueId = function (e) {
        var t = P++;
        return e ? e + t : t
    }, T.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var H = /(.)^/,
        B = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "   ": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    T.template = function (e, t, n) {
        n = T.defaults({}, n, T.templateSettings);
        var r = new RegExp([(n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source].join("|") + "|$", "g"),
            i = 0,
            s = "__p+='";
        e.replace(r, function (t, n, r, o, u) {
            s += e.slice(i, u).replace(j, function (e) {
                return "\\" + B[e]
            }), s += n ? "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o ? "';\n" + o + "\n__p+='" : "", i = u + t.length
        }), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            var o = new Function(n.variable || "obj", "_", s)
        } catch (u) {
            throw u.source = s, u
        }
        if (t) return o(t, T);
        var a = function (e) {
            return o.call(this, e, T)
        };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", a
    }, T.chain = function (e) {
        return T(e).chain()
    };
    var F = function (e) {
        return this._chain ? T(e).chain() : e
    };
    T.mixin(T), N(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = r[e];
        T.prototype[e] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], F.call(this, n)
        }
    }), N(["concat", "join", "slice"], function (e) {
        var t = r[e];
        T.prototype[e] = function () {
            return F.call(this, t.apply(this._wrapped, arguments))
        }
    }), T.extend(T.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    })
}).call(this);
Meteor = {
    isClient: !0,
    isServer: !1
};
_.extend(Meteor, {
    _get: function (e) {
        for (var t = 1; t < arguments.length; t++) {
            if (!(arguments[t] in e)) return undefined;
            e = e[arguments[t]]
        }
        return e
    },
    _ensure: function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            n in e || (e[n] = {}), e = e[n]
        }
        return e
    },
    _delete: function (e) {
        var t = [e],
            n = !0;
        for (var r = 1; r < arguments.length - 1; r++) {
            var i = arguments[r];
            if (!(i in e)) {
                n = !1;
                break
            }
            e = e[i];
            if (typeof e != "object") break;
            t.push(e)
        }
        for (var r = t.length - 1; r >= 0; r--) {
            var i = arguments[r + 1];
            if (n) n = !1;
            else
                for (var s in t[r][i]) return;
            delete t[r][i]
        }
    }
});
_.extend(Meteor, {
    setTimeout: function (e, t) {
        if (Meteor._CurrentInvocation) {
            if (Meteor._CurrentInvocation.get() && Meteor._CurrentInvocation.get().isSimulation) throw new Error("Can't set timers inside simulations");
            var n = e;
            e = function () {
                Meteor._CurrentInvocation.withValue(null, n)
            }
        }
        return setTimeout(Meteor.bindEnvironment(e, function (e) {
            Meteor._debug("Exception from setTimeout callback:", e.stack)
        }), t)
    },
    setInterval: function (e, t) {
        if (Meteor._CurrentInvocation) {
            if (Meteor._CurrentInvocation.get() && Meteor._CurrentInvocation.get().isSimulation) throw new Error("Can't set timers inside simulations");
            var n = e;
            e = function () {
                Meteor._CurrentInvocation.withValue(null, n)
            }
        }
        return setInterval(Meteor.bindEnvironment(e, function (e) {
            Meteor._debug("Exception from setInterval callback:", e)
        }), t)
    },
    clearInterval: function (e) {
        return clearInterval(e)
    },
    clearTimeout: function (e) {
        return clearTimeout(e)
    },
    defer: function (e) {
        Meteor.setTimeout(function () {
            e()
        }, 0)
    }
});
(function () {
    var e = 0,
        t = [];
    Meteor.EnvironmentVariable = function () {
        this.slot = e++
    }, _.extend(Meteor.EnvironmentVariable.prototype, {
        get: function () {
            return t[this.slot]
        },
        withValue: function (e, n) {
            var r = t[this.slot];
            try {
                t[this.slot] = e;
                var i = n()
            } finally {
                t[this.slot] = r
            }
            return i
        }
    }), Meteor.bindEnvironment = function (e, n, r) {
        var i = _.clone(t);
        if (!n) throw new Error("onException must be supplied");
        return function () {
            var s = t;
            try {
                t = i;
                var o = e.apply(r, _.toArray(arguments))
            } catch (u) {
                n(u)
            } finally {
                t = s
            }
            return o
        }
    }
})();
(function () {
    Meteor.absoluteUrl = function (e, t) {
        !t && typeof e == "object" && (t = e, e = undefined), t = _.extend({}, Meteor.absoluteUrl.defaultOptions, t || {});
        var n = t.rootUrl;
        if (!n) throw new Error("Must pass options.rootUrl or set ROOT_URL in the server environment");
        return /\/$/.test(n) || (n += "/"), e && (n += e), t.secure && /^http:/.test(n) && !/http:\/\/localhost[:\/]/.test(n) && !/http:\/\/127\.0\.0\.1[:\/]/.test(n) && (n = n.replace(/^http:/, "https:")), t.replaceLocalhost && (n = n.replace(/^http:\/\/localhost([:\/].*)/, "http://127.0.0.1$1")), n
    }, Meteor.absoluteUrl.defaultOptions = {}, __meteor_runtime_config__ && __meteor_runtime_config__.ROOT_URL && (Meteor.absoluteUrl.defaultOptions.rootUrl = __meteor_runtime_config__.ROOT_URL)
})();
(function () {
    var e = [],
        t = 1,
        n = function () {
            this.id = t++, this._callbacks = [], this._invalidated = !1
        };
    n.current = null, _.extend(n.prototype, {
        run: function (e) {
            var t = n.current;
            n.current = this;
            try {
                return e()
            } finally {
                n.current = t
            }
        },
        invalidate: function () {
            this._invalidated || (this._invalidated = !0, e.length || setTimeout(Meteor.flush, 0), e.push(this))
        },
        onInvalidate: function (e) {
            this._invalidated ? e(this) : this._callbacks.push(e)
        }
    }), _.extend(Meteor, {
        flush: function () {
            while (e.length) {
                var t = e;
                e = [], _.each(t, function (e) {
                    _.each(e._callbacks, function (t) {
                        try {
                            t(e)
                        } catch (n) {
                            Meteor._debug("Exception from Meteor.flush:", n.stack)
                        }
                    }), delete e._callbacks
                })
            }
        },
        deps: {
            Context: n
        }
    })
})();
(function () {
    var e = function () {
        this._contextsById = {}
    };
    e.prototype.add = function (e) {
        var t = this;
        return !e || e.id in t._contextsById ? !1 : (t._contextsById[e.id] = e, e.onInvalidate(function () {
            delete t._contextsById[e.id]
        }), !0)
    }, e.prototype.addCurrentContext = function () {
        var e = this,
            t = Meteor.deps.Context.current;
        return t ? e.add(t) : !1
    }, e.prototype.invalidateAll = function () {
        var e = this;
        for (var t in e._contextsById) e._contextsById[t].invalidate()
    }, e.prototype.isEmpty = function () {
        var e = this;
        for (var t in e._contextsById) return !1;
        return !0
    }, Meteor.deps._ContextSet = e, Meteor.autorun = function (e) {
        var t, n = !1,
            r = {
                stop: function () {
                    n = !0, t.invalidate()
                }
            }, i = function () {
                if (n) return;
                t = new Meteor.deps.Context, t.run(function () {
                    e.call(this, r)
                }), t.onInvalidate(i)
            };
        return i(), r
    };
    var t = [],
        n = null;
    Meteor._atFlush = function (e) {
        t.push(e), n || (n = new Meteor.deps.Context, n.onInvalidate(function () {
            var e;
            while (e = t.shift()) try {
                e()
            } catch (r) {
                Meteor._debug("Exception from Meteor._atFlush:", r.stack)
            }
            n = null
        }), n.invalidate())
    }
})();
(function () {
    var e = 0;
    Meteor._debug = function () {
        if (e) {
            e--;
            return
        }
        if (typeof console != "undefined" && typeof console.log != "undefined")
            if (arguments.length == 0) console.log("");
            else if (typeof console.log.apply == "function") console.log.apply(console, arguments);
        else if (typeof Function.prototype.bind == "function") {
            var t = Function.prototype.bind.call(console.log, console);
            t.apply(console, arguments)
        } else Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments))
    }, Meteor._suppress_log = function (t) {
        e += t
    }
})();
typeof JSON != "object" && (JSON = {}),
function () {
    "use strict";

    function f(e) {
        return e < 10 ? "0" + e : e
    }

    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
            var t = meta[e];
            return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }

    function str(e, t) {
        var n, r, i, s, o = gap,
            u, a = t[e];
        a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
        switch (typeof a) {
        case "string":
            return quote(a);
        case "number":
            return isFinite(a) ? String(a) : "null";
        case "boolean":
        case "null":
            return String(a);
        case "object":
            if (!a) return "null";
            gap += indent, u = [];
            if (Object.prototype.toString.apply(a) === "[object Array]") {
                s = a.length;
                for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
            }
            if (rep && typeof rep == "object") {
                s = rep.length;
                for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
            } else
                for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
            return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
        }
    }
    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "   ": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function (e, t, n) {
        var r;
        gap = "", indent = "";
        if (typeof n == "number")
            for (r = 0; r < n; r += 1) indent += " ";
        else typeof n == "string" && (indent = n);
        rep = t;
        if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
            "": e
        });
        throw new Error("JSON.stringify")
    }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
        function walk(e, t) {
            var n, r, i = e[t];
            if (i && typeof i == "object")
                for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
            return reviver.call(e, t, i)
        }
        var j;
        text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}();
(function () {
    Meteor._reload = {};
    var e = "Meteor_Reload",
        t = 3e4,
        n = {}, r;
    typeof sessionStorage != "undefined" && sessionStorage && (r = sessionStorage.getItem(e), sessionStorage.removeItem(e)), r || (r = "{}");
    var i = {};
    try {
        i = JSON.parse(r), typeof i != "object" && (Meteor._debug("Got bad data on reload. Ignoring."), i = {})
    } catch (s) {
        Meteor._debug("Got invalid JSON on reload. Ignoring.")
    }
    i.reload && typeof i.data == "object" && i.time + t > (new Date).getTime() && (n = i.data);
    var o = [];
    Meteor._reload.onMigrate = function (e, t) {
        t || (t = e, e = undefined), o.push({
            name: e,
            callback: t
        })
    }, Meteor._reload.migrationData = function (e) {
        return n[e]
    };
    var u = !1;
    Meteor._reload.reload = function () {
        if (u) return;
        u = !0;
        var t = function () {
            _.defer(function () {
                var n = {}, r = _.clone(o);
                while (r.length) {
                    var i = r.shift(),
                        s = i.callback(t);
                    if (!s[0]) return;
                    s.length > 1 && i.name && (n[i.name] = s[1])
                }
                try {
                    var u = JSON.stringify({
                        time: (new Date).getTime(),
                        data: n,
                        reload: !0
                    })
                } catch (a) {
                    throw Meteor._debug("Couldn't serialize data for migration", n), a
                }
                typeof sessionStorage != "undefined" && sessionStorage ? sessionStorage.setItem(e, u) : Meteor._debug("Browser does not support sessionStorage. Not saving migration state."), window.location.reload()
            })
        };
        t()
    }
})();
(function () {
    var e = function (e) {
        return e === undefined ? "undefined" : JSON.stringify(e)
    }, t = function (e) {
            return e === undefined || e === "undefined" ? undefined : JSON.parse(e)
        };
    Session = _.extend({}, {
        keys: {},
        keyDeps: {},
        keyValueDeps: {},
        set: function (t, n) {
            var r = this;
            n = e(n);
            var i = "undefined";
            _.has(r.keys, t) && (i = r.keys[t]);
            if (n === i) return;
            r.keys[t] = n;
            var s = function (e) {
                e && e.invalidateAll()
            };
            s(r.keyDeps[t]), r.keyValueDeps[t] && (s(r.keyValueDeps[t][i]), s(r.keyValueDeps[t][n]))
        },
        get: function (e) {
            var n = this;
            return n._ensureKey(e), n.keyDeps[e].addCurrentContext(), t(n.keys[e])
        },
        equals: function (n, r) {
            var i = this,
                s = Meteor.deps.Context.current;
            if (typeof r != "string" && typeof r != "number" && typeof r != "boolean" && typeof r != "undefined" && r !== null) throw new Error("Session.equals: value must be scalar");
            var o = e(r);
            if (s) {
                i._ensureKey(n), _.has(i.keyValueDeps[n], o) || (i.keyValueDeps[n][o] = new Meteor.deps._ContextSet);
                var u = i.keyValueDeps[n][o].add(s);
                u && s.onInvalidate(function () {
                    i.keyValueDeps[n][o].isEmpty() && delete i.keyValueDeps[n][o]
                })
            }
            var a = undefined;
            return _.has(i.keys, n) && (a = t(i.keys[n])), a === r
        },
        _ensureKey: function (e) {
            var t = this;
            e in t.keyDeps || (t.keyDeps[e] = new Meteor.deps._ContextSet, t.keyValueDeps[e] = {})
        }
    }), Meteor._reload && (Meteor._reload.onMigrate("session", function () {
        return [!0, {
            keys: Session.keys
        }]
    }), function () {
        var e = Meteor._reload.migrationData("session");
        e && e.keys && (Session.keys = e.keys)
    }())
})();
Meteor._Alea = function () {
    function e() {
        var e = 4022871197,
            t = function (t) {
                t = t.toString();
                for (var r = 0; r < t.length; r++) {
                    e += t.charCodeAt(r);
                    var i = .02519603282416938 * e;
                    e = i >>> 0, i -= e, i *= e, e = i >>> 0, i -= e, e += i * 4294967296
                }
                return (e >>> 0) * 2.3283064365386963e-10
            };
        return t.version = "Mash 0.9", t
    }
    return function (t) {
        var n = 0,
            r = 0,
            i = 0,
            s = 1;
        t.length == 0 && (t = [+(new Date)]);
        var o = e();
        n = o(" "), r = o(" "), i = o(" ");
        for (var u = 0; u < t.length; u++) n -= o(t[u]), n < 0 && (n += 1), r -= o(t[u]), r < 0 && (r += 1), i -= o(t[u]), i < 0 && (i += 1);
        o = null;
        var a = function () {
            var e = 2091639 * n + s * 2.3283064365386963e-10;
            return n = r, r = i, i = e - (s = e | 0)
        };
        return a.uint32 = function () {
            return a() * 4294967296
        }, a.fract53 = function () {
            return a() + (a() * 2097152 | 0) * 1.1102230246251565e-16
        }, a.version = "Alea 0.9", a.args = t, a
    }(Array.prototype.slice.call(arguments))
}, Meteor.random = new Meteor._Alea, Meteor.uuid = function () {
    var e = [],
        t = "0123456789abcdef";
    for (var n = 0; n < 36; n++) e[n] = t.substr(Math.floor(Meteor.random() * 16), 1);
    e[14] = "4", e[19] = t.substr(e[19] & 3 | 8, 1), e[8] = e[13] = e[18] = e[23] = "-";
    var r = e.join("");
    return r
};
var JSON;
JSON || (JSON = {}),
function () {
    function str(e, t) {
        var n, r, i, s, o = gap,
            u, a = t[e];
        a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
        switch (typeof a) {
        case "string":
            return quote(a);
        case "number":
            return isFinite(a) ? String(a) : "null";
        case "boolean":
        case "null":
            return String(a);
        case "object":
            if (!a) return "null";
            gap += indent, u = [];
            if (Object.prototype.toString.apply(a) === "[object Array]") {
                s = a.length;
                for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
            }
            if (rep && typeof rep == "object") {
                s = rep.length;
                for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
            } else
                for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
            return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
        }
    }

    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
            var t = meta[e];
            return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }

    function f(e) {
        return e < 10 ? "0" + e : e
    }
    "use strict", typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "   ": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function (e, t, n) {
        var r;
        gap = "", indent = "";
        if (typeof n == "number")
            for (r = 0; r < n; r += 1) indent += " ";
        else typeof n == "string" && (indent = n);
        rep = t;
        if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
            "": e
        });
        throw new Error("JSON.stringify")
    }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
        function walk(e, t) {
            var n, r, i = e[t];
            if (i && typeof i == "object")
                for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
            return reviver.call(e, t, i)
        }
        var j;
        text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), SockJS = function () {
    var e = document,
        t = window,
        n = {}, r = function () {};
    r.prototype.addEventListener = function (e, t) {
        this._listeners || (this._listeners = {}), e in this._listeners || (this._listeners[e] = []);
        var r = this._listeners[e];
        n.arrIndexOf(r, t) === -1 && r.push(t);
        return
    }, r.prototype.removeEventListener = function (e, t) {
        if (!(this._listeners && e in this._listeners)) return;
        var r = this._listeners[e],
            i = n.arrIndexOf(r, t);
        if (i !== -1) {
            r.length > 1 ? this._listeners[e] = r.slice(0, i).concat(r.slice(i + 1)) : delete this._listeners[e];
            return
        }
        return
    }, r.prototype.dispatchEvent = function (e) {
        var t = e.type,
            n = Array.prototype.slice.call(arguments, 0);
        this["on" + t] && this["on" + t].apply(this, n);
        if (this._listeners && t in this._listeners)
            for (var r = 0; r < this._listeners[t].length; r++) this._listeners[t][r].apply(this, n)
    };
    var i = function (e, t) {
        this.type = e;
        if (typeof t != "undefined")
            for (var n in t) {
                if (!t.hasOwnProperty(n)) continue;
                this[n] = t[n]
            }
    };
    i.prototype.toString = function () {
        var e = [];
        for (var t in this) {
            if (!this.hasOwnProperty(t)) continue;
            var n = this[t];
            typeof n == "function" && (n = "[function]"), e.push(t + "=" + n)
        }
        return "SimpleEvent(" + e.join(", ") + ")"
    };
    var s = function (e) {
        var t = this;
        t._events = e || [], t._listeners = {}
    };
    s.prototype.emit = function (e) {
        var t = this;
        t._verifyType(e);
        if (t._nuked) return;
        var n = Array.prototype.slice.call(arguments, 1);
        t["on" + e] && t["on" + e].apply(t, n);
        if (e in t._listeners)
            for (var r = 0; r < t._listeners[e].length; r++) t._listeners[e][r].apply(t, n)
    }, s.prototype.on = function (e, t) {
        var n = this;
        n._verifyType(e);
        if (n._nuked) return;
        e in n._listeners || (n._listeners[e] = []), n._listeners[e].push(t)
    }, s.prototype._verifyType = function (e) {
        var t = this;
        n.arrIndexOf(t._events, e) === -1 && n.log("Event " + JSON.stringify(e) + " not listed " + JSON.stringify(t._events) + " in " + t)
    }, s.prototype.nuke = function () {
        var e = this;
        e._nuked = !0;
        for (var t = 0; t < e._events.length; t++) delete e[e._events[t]];
        e._listeners = {}
    };
    var o = "abcdefghijklmnopqrstuvwxyz0123456789_";
    n.random_string = function (e, t) {
        t = t || o.length;
        var n, r = [];
        for (n = 0; n < e; n++) r.push(o.substr(Math.floor(Math.random() * t), 1));
        return r.join("")
    }, n.random_number = function (e) {
        return Math.floor(Math.random() * e)
    }, n.random_number_string = function (e) {
        var t = ("" + (e - 1)).length,
            r = Array(t + 1).join("0");
        return (r + n.random_number(e)).slice(-t)
    }, n.getOrigin = function (e) {
        e += "/";
        var t = e.split("/").slice(0, 3);
        return t.join("/")
    }, n.isSameOriginUrl = function (e, n) {
        return n || (n = t.location.href), e.split("/").slice(0, 3).join("/") === n.split("/").slice(0, 3).join("/")
    }, n.isSameOriginScheme = function (e, n) {
        return n || (n = t.location.href), e.split(":")[0] === n.split(":")[0]
    }, n.getParentDomain = function (e) {
        if (/^[0-9.]*$/.test(e)) return e;
        if (/^\[/.test(e)) return e;
        if (!/[.]/.test(e)) return e;
        var t = e.split(".").slice(1);
        return t.join(".")
    }, n.objectExtend = function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    };
    var u = "_jp";
    n.polluteGlobalNamespace = function () {
        u in t || (t[u] = {})
    }, n.closeFrame = function (e, t) {
        return "c" + JSON.stringify([e, t])
    }, n.userSetCode = function (e) {
        return e === 1e3 || e >= 3e3 && e <= 4999
    }, n.countRTO = function (e) {
        var t;
        return e > 100 ? t = 3 * e : t = e + 200, t
    }, n.log = function () {
        t.console && console.log && console.log.apply && console.log.apply(console, arguments)
    }, n.bind = function (e, t) {
        return e.bind ? e.bind(t) : function () {
            return e.apply(t, arguments)
        }
    }, n.flatUrl = function (e) {
        return e.indexOf("?") === -1 && e.indexOf("#") === -1
    }, n.amendUrl = function (t) {
        var r = e.location;
        if (!t) throw new Error("Wrong url for SockJS");
        if (!n.flatUrl(t)) throw new Error("Only basic urls are supported in SockJS");
        return t.indexOf("//") === 0 && (t = r.protocol + t), t.indexOf("/") === 0 && (t = r.protocol + "//" + r.host + t), t = t.replace(/[/]+$/, ""), t
    }, n.arrIndexOf = function (e, t) {
        for (var n = 0; n < e.length; n++)
            if (e[n] === t) return n;
        return -1
    }, n.arrSkip = function (e, t) {
        var r = n.arrIndexOf(e, t);
        if (r === -1) return e.slice();
        var i = e.slice(0, r);
        return i.concat(e.slice(r + 1))
    }, n.isArray = Array.isArray || function (e) {
        return {}.toString.call(e).indexOf("Array") >= 0
    }, n.delay = function (e, t) {
        return typeof e == "function" && (t = e, e = 0), setTimeout(t, e)
    };
    var a = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        f = {
            "\0": "\\u0000",
            "": "\\u0001",
            "": "\\u0002",
            "": "\\u0003",
            "": "\\u0004",
            "": "\\u0005",
            "": "\\u0006",
            "": "\\u0007",
            "\b": "\\b",
            "   ": "\\t",
            "\n": "\\n",
            "": "\\u000b",
            "\f": "\\f",
            "\r": "\\r",
            "": "\\u000e",
            "": "\\u000f",
            "": "\\u0010",
            "": "\\u0011",
            "": "\\u0012",
            "": "\\u0013",
            "": "\\u0014",
            "": "\\u0015",
            "": "\\u0016",
            "": "\\u0017",
            "": "\\u0018",
            "": "\\u0019",
            "": "\\u001a",
            "": "\\u001b",
            "": "\\u001c",
            "": "\\u001d",
            "": "\\u001e",
            "": "\\u001f",
            '"': '\\"',
            "\\": "\\\\",
            "": "\\u007f",
            "": "\\u0080",
            "": "\\u0081",
            "": "\\u0082",
            "": "\\u0083",
            "": "\\u0084",
            "": "\\u0085",
            "": "\\u0086",
            "": "\\u0087",
            "": "\\u0088",
            "": "\\u0089",
            "": "\\u008a",
            "": "\\u008b",
            "": "\\u008c",
            "": "\\u008d",
            "": "\\u008e",
            "": "\\u008f",
            "": "\\u0090",
            "": "\\u0091",
            "": "\\u0092",
            "": "\\u0093",
            "": "\\u0094",
            "": "\\u0095",
            "": "\\u0096",
            "": "\\u0097",
            "": "\\u0098",
            "": "\\u0099",
            "": "\\u009a",
            "": "\\u009b",
            "": "\\u009c",
            "": "\\u009d",
            "": "\\u009e",
            "": "\\u009f",
            "­": "\\u00ad",
            "؀": "\\u0600",
            "؁": "\\u0601",
            "؂": "\\u0602",
            "؃": "\\u0603",
            "؄": "\\u0604",
            "܏": "\\u070f",
            "឴": "\\u17b4",
            "឵": "\\u17b5",
            "‌": "\\u200c",
            "‍": "\\u200d",
            "‎": "\\u200e",
            "‏": "\\u200f",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            "‪": "\\u202a",
            "‫": "\\u202b",
            "‬": "\\u202c",
            "‭": "\\u202d",
            "‮": "\\u202e",
            " ": "\\u202f",
            "⁠": "\\u2060",
            "⁡": "\\u2061",
            "⁢": "\\u2062",
            "⁣": "\\u2063",
            "⁤": "\\u2064",
            "⁥": "\\u2065",
            "⁦": "\\u2066",
            "⁧": "\\u2067",
            "⁨": "\\u2068",
            "⁩": "\\u2069",
            "⁪": "\\u206a",
            "⁫": "\\u206b",
            "⁬": "\\u206c",
            "⁭": "\\u206d",
            "⁮": "\\u206e",
            "⁯": "\\u206f",
            "﻿": "\\ufeff",
            "￰": "\\ufff0",
            "￱": "\\ufff1",
            "￲": "\\ufff2",
            "￳": "\\ufff3",
            "￴": "\\ufff4",
            "￵": "\\ufff5",
            "￶": "\\ufff6",
            "￷": "\\ufff7",
            "￸": "\\ufff8",
            "￹": "\\ufff9",
            "￺": "\\ufffa",
            "￻": "\\ufffb",
            "￼": "\\ufffc",
            "�": "\\ufffd",
            "￾": "\\ufffe",
            "￿": "\\uffff"
        }, l = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
        c, h = JSON && JSON.stringify || function (e) {
            return a.lastIndex = 0, a.test(e) && (e = e.replace(a, function (e) {
                return f[e]
            })), '"' + e + '"'
        }, p = function (e) {
            var t, n = {}, r = [];
            for (t = 0; t < 65536; t++) r.push(String.fromCharCode(t));
            return e.lastIndex = 0, r.join("").replace(e, function (e) {
                return n[e] = "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4), ""
            }), e.lastIndex = 0, n
        };
    n.quote = function (e) {
        var t = h(e);
        return l.lastIndex = 0, l.test(t) ? (c || (c = p(l)), t.replace(l, function (e) {
            return c[e]
        })) : t
    };
    var d = ["websocket", "xdr-streaming", "xhr-streaming", "iframe-eventsource", "iframe-htmlfile", "xdr-polling", "xhr-polling", "iframe-xhr-polling", "jsonp-polling"];
    n.probeProtocols = function () {
        var e = {};
        for (var t = 0; t < d.length; t++) {
            var n = d[t];
            e[n] = T[n] && T[n].enabled()
        }
        return e
    }, n.detectProtocols = function (e, t, n) {
        var r = {}, i = [];
        t || (t = d);
        for (var s = 0; s < t.length; s++) {
            var o = t[s];
            r[o] = e[o]
        }
        var u = function (e) {
            var t = e.shift();
            r[t] ? i.push(t) : e.length > 0 && u(e)
        };
        return n.websocket !== !1 && u(["websocket"]), r["xhr-streaming"] && !n.null_origin ? i.push("xhr-streaming") : r["xdr-streaming"] && !n.cookie_needed && !n.null_origin ? i.push("xdr-streaming") : u(["iframe-eventsource", "iframe-htmlfile"]), r["xhr-polling"] && !n.null_origin ? i.push("xhr-polling") : r["xdr-polling"] && !n.cookie_needed && !n.null_origin ? i.push("xdr-polling") : u(["iframe-xhr-polling", "jsonp-polling"]), i
    };
    var v = "_sockjs_global";
    n.createHook = function () {
        var e = "a" + n.random_string(8);
        if (!(v in t)) {
            var r = {};
            t[v] = function (e) {
                return e in r || (r[e] = {
                    id: e,
                    del: function () {
                        delete r[e]
                    }
                }), r[e]
            }
        }
        return t[v](e)
    }, n.attachMessage = function (e) {
        n.attachEvent("message", e)
    }, n.attachEvent = function (n, r) {
        typeof t.addEventListener != "undefined" ? t.addEventListener(n, r, !1) : (e.attachEvent("on" + n, r), t.attachEvent("on" + n, r))
    }, n.detachMessage = function (e) {
        n.detachEvent("message", e)
    }, n.detachEvent = function (n, r) {
        typeof t.addEventListener != "undefined" ? t.removeEventListener(n, r, !1) : (e.detachEvent("on" + n, r), t.detachEvent("on" + n, r))
    };
    var m = {}, g = !1,
        y = function () {
            for (var e in m) m[e](), delete m[e]
        }, b = function () {
            if (g) return;
            g = !0, y()
        };
    n.attachEvent("unload", b), n.unload_add = function (e) {
        var t = n.random_string(8);
        return m[t] = e, g && n.delay(y), t
    }, n.unload_del = function (e) {
        e in m && delete m[e]
    }, n.createIframe = function (t, r) {
        var i = e.createElement("iframe"),
            s, o, u = function () {
                clearTimeout(s);
                try {
                    i.onload = null
                } catch (e) {}
                i.onerror = null
            }, a = function () {
                i && (u(), setTimeout(function () {
                    i && i.parentNode.removeChild(i), i = null
                }, 0), n.unload_del(o))
            }, f = function (e) {
                i && (a(), r(e))
            }, l = function (e, t) {
                try {
                    i && i.contentWindow && i.contentWindow.postMessage(e, t)
                } catch (n) {}
            };
        return i.src = t, i.style.display = "none", i.style.position = "absolute", i.onerror = function () {
            f("onerror")
        }, i.onload = function () {
            clearTimeout(s), s = setTimeout(function () {
                f("onload timeout")
            }, 2e3)
        }, e.body.appendChild(i), s = setTimeout(function () {
            f("timeout")
        }, 15e3), o = n.unload_add(a), {
            post: l,
            cleanup: a,
            loaded: u
        }
    }, n.createHtmlfile = function (e, r) {
        var i = new ActiveXObject("htmlfile"),
            s, o, a, f = function () {
                clearTimeout(s)
            }, l = function () {
                i && (f(), n.unload_del(o), a.parentNode.removeChild(a), a = i = null, CollectGarbage())
            }, c = function (e) {
                i && (l(), r(e))
            }, h = function (e, t) {
                try {
                    a && a.contentWindow && a.contentWindow.postMessage(e, t)
                } catch (n) {}
            };
        i.open(), i.write('<html><script>document.domain="' + document.domain + '";' + "</s" + "cript></html>"), i.close(), i.parentWindow[u] = t[u];
        var p = i.createElement("div");
        return i.body.appendChild(p), a = i.createElement("iframe"), p.appendChild(a), a.src = e, s = setTimeout(function () {
            c("timeout")
        }, 15e3), o = n.unload_add(l), {
            post: h,
            cleanup: l,
            loaded: f
        }
    };
    var w = function () {};
    w.prototype = new s(["chunk", "finish"]), w.prototype._start = function (e, r, i, s) {
        var o = this;
        try {
            o.xhr = new XMLHttpRequest
        } catch (u) {}
        if (!o.xhr) try {
            o.xhr = new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (u) {}
        if (t.ActiveXObject || t.XDomainRequest) r += (r.indexOf("?") === -1 ? "?" : "&") + "t=" + +(new Date);
        o.unload_ref = n.unload_add(function () {
            o._cleanup(!0)
        });
        try {
            o.xhr.open(e, r, !0)
        } catch (a) {
            o.emit("finish", 0, ""), o._cleanup();
            return
        }
        if (!s || !s.no_credentials) o.xhr.withCredentials = "true";
        if (s && s.headers)
            for (var f in s.headers) o.xhr.setRequestHeader(f, s.headers[f]);
        o.xhr.onreadystatechange = function () {
            if (o.xhr) {
                var e = o.xhr;
                switch (e.readyState) {
                case 3:
                    try {
                        var t = e.status,
                            n = e.responseText
                    } catch (e) {}
                    t === 1223 && (t = 204), n && n.length > 0 && o.emit("chunk", t, n);
                    break;
                case 4:
                    var t = e.status;
                    t === 1223 && (t = 204), o.emit("finish", t, e.responseText), o._cleanup(!1)
                }
            }
        }, o.xhr.send(i)
    }, w.prototype._cleanup = function (e) {
        var t = this;
        if (!t.xhr) return;
        n.unload_del(t.unload_ref), t.xhr.onreadystatechange = function () {};
        if (e) try {
            t.xhr.abort()
        } catch (r) {}
        t.unload_ref = t.xhr = null
    }, w.prototype.close = function () {
        var e = this;
        e.nuke(), e._cleanup(!0)
    };
    var E = n.XHRCorsObject = function () {
        var e = this,
            t = arguments;
        n.delay(function () {
            e._start.apply(e, t)
        })
    };
    E.prototype = new w;
    var S = n.XHRLocalObject = function (e, t, r) {
        var i = this;
        n.delay(function () {
            i._start(e, t, r, {
                no_credentials: !0
            })
        })
    };
    S.prototype = new w;
    var x = n.XDRObject = function (e, t, r) {
        var i = this;
        n.delay(function () {
            i._start(e, t, r)
        })
    };
    x.prototype = new s(["chunk", "finish"]), x.prototype._start = function (e, t, r) {
        var i = this,
            s = new XDomainRequest;
        t += (t.indexOf("?") === -1 ? "?" : "&") + "t=" + +(new Date);
        var o = s.ontimeout = s.onerror = function () {
            i.emit("finish", 0, ""), i._cleanup(!1)
        };
        s.onprogress = function () {
            i.emit("chunk", 200, s.responseText)
        }, s.onload = function () {
            i.emit("finish", 200, s.responseText), i._cleanup(!1)
        }, i.xdr = s, i.unload_ref = n.unload_add(function () {
            i._cleanup(!0)
        });
        try {
            i.xdr.open(e, t), i.xdr.send(r)
        } catch (u) {
            o()
        }
    }, x.prototype._cleanup = function (e) {
        var t = this;
        if (!t.xdr) return;
        n.unload_del(t.unload_ref), t.xdr.ontimeout = t.xdr.onerror = t.xdr.onprogress = t.xdr.onload = null;
        if (e) try {
            t.xdr.abort()
        } catch (r) {}
        t.unload_ref = t.xdr = null
    }, x.prototype.close = function () {
        var e = this;
        e.nuke(), e._cleanup(!0)
    }, n.isXHRCorsCapable = function () {
        return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? 1 : t.XDomainRequest && e.domain ? 2 : j.enabled() ? 3 : 4
    };
    var T = function (e, r, i) {
        if (this === t) return new T(e, r, i);
        var s = this,
            o;
        s._options = {
            devel: !1,
            debug: !1,
            protocols_whitelist: [],
            info: undefined,
            rtt: undefined
        }, i && n.objectExtend(s._options, i), s._base_url = n.amendUrl(e), s._server = s._options.server || n.random_number_string(1e3), s._options.protocols_whitelist && s._options.protocols_whitelist.length ? o = s._options.protocols_whitelist : (typeof r == "string" && r.length > 0 ? o = [r] : n.isArray(r) ? o = r : o = null, o && s._debug('Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.')), s._protocols = [], s.protocol = null, s.readyState = T.CONNECTING, s._ir = W(s._base_url), s._ir.onfinish = function (e, t) {
            s._ir = null, e ? (s._options.info && (e = n.objectExtend(e, s._options.info)), s._options.rtt && (t = s._options.rtt), s._applyInfo(e, t, o), s._didClose()) : s._didClose(1002, "Can't connect to server", !0)
        }
    };
    T.prototype = new r, T.version = "0.3.4", T.CONNECTING = 0, T.OPEN = 1, T.CLOSING = 2, T.CLOSED = 3, T.prototype._debug = function () {
        this._options.debug && n.log.apply(n, arguments)
    }, T.prototype._dispatchOpen = function () {
        var e = this;
        e.readyState === T.CONNECTING ? (e._transport_tref && (clearTimeout(e._transport_tref), e._transport_tref = null), e.readyState = T.OPEN, e.dispatchEvent(new i("open"))) : e._didClose(1006, "Server lost session")
    }, T.prototype._dispatchMessage = function (e) {
        var t = this;
        if (t.readyState !== T.OPEN) return;
        t.dispatchEvent(new i("message", {
            data: e
        }))
    }, T.prototype._dispatchHeartbeat = function (e) {
        var t = this;
        if (t.readyState !== T.OPEN) return;
        t.dispatchEvent(new i("heartbeat", {}))
    }, T.prototype._didClose = function (e, t, r) {
        var s = this;
        if (s.readyState !== T.CONNECTING && s.readyState !== T.OPEN && s.readyState !== T.CLOSING) throw new Error("INVALID_STATE_ERR");
        s._ir && (s._ir.nuke(), s._ir = null), s._transport && (s._transport.doCleanup(), s._transport = null);
        var o = new i("close", {
            code: e,
            reason: t,
            wasClean: n.userSetCode(e)
        });
        if (!n.userSetCode(e) && s.readyState === T.CONNECTING && !r) {
            if (s._try_next_protocol(o)) return;
            o = new i("close", {
                code: 2e3,
                reason: "All transports failed",
                wasClean: !1,
                last_event: o
            })
        }
        s.readyState = T.CLOSED, n.delay(function () {
            s.dispatchEvent(o)
        })
    }, T.prototype._didMessage = function (e) {
        var t = this,
            n = e.slice(0, 1);
        switch (n) {
        case "o":
            t._dispatchOpen();
            break;
        case "a":
            var r = JSON.parse(e.slice(1) || "[]");
            for (var i = 0; i < r.length; i++) t._dispatchMessage(r[i]);
            break;
        case "m":
            var r = JSON.parse(e.slice(1) || "null");
            t._dispatchMessage(r);
            break;
        case "c":
            var r = JSON.parse(e.slice(1) || "[]");
            t._didClose(r[0], r[1]);
            break;
        case "h":
            t._dispatchHeartbeat()
        }
    }, T.prototype._try_next_protocol = function (t) {
        var r = this;
        r.protocol && (r._debug("Closed transport:", r.protocol, "" + t), r.protocol = null), r._transport_tref && (clearTimeout(r._transport_tref), r._transport_tref = null);
        for (;;) {
            var i = r.protocol = r._protocols.shift();
            if (!i) return !1;
            if (T[i] && T[i].need_body === !0 && (!e.body || typeof e.readyState != "undefined" && e.readyState !== "complete")) return r._protocols.unshift(i), r.protocol = "waiting-for-load", n.attachEvent("load", function () {
                r._try_next_protocol()
            }), !0;
            if ( !! T[i] && !! T[i].enabled(r._options)) {
                var s = T[i].roundTrips || 1,
                    o = (r._options.rto || 0) * s || 5e3;
                r._transport_tref = n.delay(o, function () {
                    r.readyState === T.CONNECTING && r._didClose(2007, "Transport timeouted")
                });
                var u = n.random_string(8),
                    a = r._base_url + "/" + r._server + "/" + u;
                return r._debug("Opening transport:", i, " url:" + a, " RTO:" + r._options.rto), r._transport = new T[i](r, a, r._base_url), !0
            }
            r._debug("Skipping transport:", i)
        }
    }, T.prototype.close = function (e, t) {
        var r = this;
        if (e && !n.userSetCode(e)) throw new Error("INVALID_ACCESS_ERR");
        return r.readyState !== T.CONNECTING && r.readyState !== T.OPEN ? !1 : (r.readyState = T.CLOSING, r._didClose(e || 1e3, t || "Normal closure"), !0)
    }, T.prototype.send = function (e) {
        var t = this;
        if (t.readyState === T.CONNECTING) throw new Error("INVALID_STATE_ERR");
        return t.readyState === T.OPEN && t._transport.doSend(n.quote("" + e)), !0
    }, T.prototype._applyInfo = function (t, r, i) {
        var s = this;
        s._options.info = t, s._options.rtt = r, s._options.rto = n.countRTO(r), s._options.info.null_origin = !e.domain;
        var o = n.probeProtocols();
        s._protocols = n.detectProtocols(o, i, t), !n.isSameOriginScheme(s._base_url) && 2 === n.isXHRCorsCapable() && (s._protocols = ["jsonp-polling"])
    };
    var N = T.websocket = function (e, r) {
        var i = this,
            s = r + "/websocket";
        s.slice(0, 5) === "https" ? s = "wss" + s.slice(5) : s = "ws" + s.slice(4), i.ri = e, i.url = s;
        var o = t.WebSocket || t.MozWebSocket;
        i.ws = new o(i.url), i.ws.onmessage = function (e) {
            i.ri._didMessage(e.data)
        }, i.unload_ref = n.unload_add(function () {
            i.ws.close()
        }), i.ws.onclose = function () {
            i.ri._didMessage(n.closeFrame(1006, "WebSocket connection broken"))
        }
    };
    N.prototype.doSend = function (e) {
        this.ws.send("[" + e + "]")
    }, N.prototype.doCleanup = function () {
        var e = this,
            t = e.ws;
        t && (t.onmessage = t.onclose = null, t.close(), n.unload_del(e.unload_ref), e.unload_ref = e.ri = e.ws = null)
    }, N.enabled = function () {
        return !!t.WebSocket || !! t.MozWebSocket
    }, N.roundTrips = 2;
    var C = function () {};
    C.prototype.send_constructor = function (e) {
        var t = this;
        t.send_buffer = [], t.sender = e
    }, C.prototype.doSend = function (e) {
        var t = this;
        t.send_buffer.push(e), t.send_stop || t.send_schedule()
    }, C.prototype.send_schedule_wait = function () {
        var e = this,
            t;
        e.send_stop = function () {
            e.send_stop = null, clearTimeout(t)
        }, t = n.delay(25, function () {
            e.send_stop = null, e.send_schedule()
        })
    }, C.prototype.send_schedule = function () {
        var e = this;
        if (e.send_buffer.length > 0) {
            var t = "[" + e.send_buffer.join(",") + "]";
            e.send_stop = e.sender(e.trans_url, t, function (t, n) {
                e.send_stop = null, t === !1 ? e.ri._didClose(1006, "Sending error " + n) : e.send_schedule_wait()
            }), e.send_buffer = []
        }
    }, C.prototype.send_destructor = function () {
        var e = this;
        e._send_stop && e._send_stop(), e._send_stop = null
    };
    var k = function (t, r, i) {
        var s = this;
        if (!("_send_form" in s)) {
            var o = s._send_form = e.createElement("form"),
                u = s._send_area = e.createElement("textarea");
            u.name = "d", o.style.display = "none", o.style.position = "absolute", o.method = "POST", o.enctype = "application/x-www-form-urlencoded", o.acceptCharset = "UTF-8", o.appendChild(u), e.body.appendChild(o)
        }
        var o = s._send_form,
            u = s._send_area,
            a = "a" + n.random_string(8);
        o.target = a, o.action = t + "/jsonp_send?i=" + a;
        var f;
        try {
            f = e.createElement('<iframe name="' + a + '">')
        } catch (l) {
            f = e.createElement("iframe"), f.name = a
        }
        f.id = a, o.appendChild(f), f.style.display = "none";
        try {
            u.value = r
        } catch (c) {
            n.log("Your browser is seriously broken. Go home! " + c.message)
        }
        o.submit();
        var h = function (e) {
            if (!f.onerror) return;
            f.onreadystatechange = f.onerror = f.onload = null, n.delay(500, function () {
                f.parentNode.removeChild(f), f = null
            }), u.value = "", i(!0)
        };
        return f.onerror = f.onload = h, f.onreadystatechange = function (e) {
            f.readyState == "complete" && h()
        }, h
    }, L = function (e) {
            return function (t, n, r) {
                var i = new e("POST", t + "/xhr_send", n);
                return i.onfinish = function (e, t) {
                    r(e === 200 || e === 204, "http status " + e)
                },
                function (e) {
                    r(!1, e)
                }
            }
        }, A = function (t, r) {
            var i, s = e.createElement("script"),
                o, u = function (e) {
                    o && (o.parentNode.removeChild(o), o = null), s && (clearTimeout(i), s.parentNode.removeChild(s), s.onreadystatechange = s.onerror = s.onload = s.onclick = null, s = null, r(e), r = null)
                }, a = !1,
                f = null;
            s.id = "a" + n.random_string(8), s.src = t, s.type = "text/javascript", s.charset = "UTF-8", s.onerror = function (e) {
                f || (f = setTimeout(function () {
                    a || u(n.closeFrame(1006, "JSONP script loaded abnormally (onerror)"))
                }, 1e3))
            }, s.onload = function (e) {
                u(n.closeFrame(1006, "JSONP script loaded abnormally (onload)"))
            }, s.onreadystatechange = function (e) {
                if (/loaded|closed/.test(s.readyState)) {
                    if (s && s.htmlFor && s.onclick) {
                        a = !0;
                        try {
                            s.onclick()
                        } catch (t) {}
                    }
                    s && u(n.closeFrame(1006, "JSONP script loaded abnormally (onreadystatechange)"))
                }
            };
            if (typeof s.async == "undefined" && e.attachEvent)
                if (!/opera/i.test(navigator.userAgent)) {
                    try {
                        s.htmlFor = s.id, s.event = "onclick"
                    } catch (l) {}
                    s.async = !0
                } else o = e.createElement("script"), o.text = "try{var a = document.getElementById('" + s.id + "'); if(a)a.onerror();}catch(x){};", s.async = o.async = !1;
            typeof s.async != "undefined" && (s.async = !0), i = setTimeout(function () {
                u(n.closeFrame(1006, "JSONP script loaded abnormally (timeout)"))
            }, 35e3);
            var c = e.getElementsByTagName("head")[0];
            return c.insertBefore(s, c.firstChild), o && c.insertBefore(o, c.firstChild), u
        }, O = T["jsonp-polling"] = function (e, t) {
            n.polluteGlobalNamespace();
            var r = this;
            r.ri = e, r.trans_url = t, r.send_constructor(k), r._schedule_recv()
        };
    O.prototype = new C, O.prototype._schedule_recv = function () {
        var e = this,
            t = function (t) {
                e._recv_stop = null, t && (e._is_closing || e.ri._didMessage(t)), e._is_closing || e._schedule_recv()
            };
        e._recv_stop = M(e.trans_url + "/jsonp", A, t)
    }, O.enabled = function () {
        return !0
    }, O.need_body = !0, O.prototype.doCleanup = function () {
        var e = this;
        e._is_closing = !0, e._recv_stop && e._recv_stop(), e.ri = e._recv_stop = null, e.send_destructor()
    };
    var M = function (e, r, i) {
        var s = "a" + n.random_string(6),
            o = e + "?c=" + escape(u + "." + s),
            a = 0,
            f = function (e) {
                switch (a) {
                case 0:
                    delete t[u][s], i(e);
                    break;
                case 1:
                    i(e), a = 2;
                    break;
                case 2:
                    delete t[u][s]
                }
            }, l = r(o, f);
        t[u][s] = l;
        var c = function () {
            t[u][s] && (a = 1, t[u][s](n.closeFrame(1e3, "JSONP user aborted read")))
        };
        return c
    }, _ = function () {};
    _.prototype = new C, _.prototype.run = function (e, t, n, r, i) {
        var s = this;
        s.ri = e, s.trans_url = t, s.send_constructor(L(i)), s.poll = new Y(e, r, t + n, i)
    }, _.prototype.doCleanup = function () {
        var e = this;
        e.poll && (e.poll.abort(), e.poll = null)
    };
    var D = T["xhr-streaming"] = function (e, t) {
        this.run(e, t, "/xhr_streaming", rt, n.XHRCorsObject)
    };
    D.prototype = new _, D.enabled = function () {
        return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest && !/opera/i.test(navigator.userAgent)
    }, D.roundTrips = 2, D.need_body = !0;
    var P = T["xdr-streaming"] = function (e, t) {
        this.run(e, t, "/xhr_streaming", rt, n.XDRObject)
    };
    P.prototype = new _, P.enabled = function () {
        return !!t.XDomainRequest
    }, P.roundTrips = 2;
    var H = T["xhr-polling"] = function (e, t) {
        this.run(e, t, "/xhr", rt, n.XHRCorsObject)
    };
    H.prototype = new _, H.enabled = D.enabled, H.roundTrips = 2;
    var B = T["xdr-polling"] = function (e, t) {
        this.run(e, t, "/xhr", rt, n.XDRObject)
    };
    B.prototype = new _, B.enabled = P.enabled, B.roundTrips = 2;
    var j = function () {};
    j.prototype.i_constructor = function (e, t, r) {
        var i = this;
        i.ri = e, i.origin = n.getOrigin(r), i.base_url = r, i.trans_url = t;
        var s = r + "/iframe.html";
        i.ri._options.devel && (s += "?t=" + +(new Date)), i.window_id = n.random_string(8), s += "#" + i.window_id, i.iframeObj = n.createIframe(s, function (e) {
            i.ri._didClose(1006, "Unable to load an iframe (" + e + ")")
        }), i.onmessage_cb = n.bind(i.onmessage, i), n.attachMessage(i.onmessage_cb)
    }, j.prototype.doCleanup = function () {
        var e = this;
        if (e.iframeObj) {
            n.detachMessage(e.onmessage_cb);
            try {
                e.iframeObj.iframe.contentWindow && e.postMessage("c")
            } catch (t) {}
            e.iframeObj.cleanup(), e.iframeObj = null, e.onmessage_cb = e.iframeObj = null
        }
    }, j.prototype.onmessage = function (e) {
        var t = this;
        if (e.origin !== t.origin) return;
        var n = e.data.slice(0, 8),
            r = e.data.slice(8, 9),
            i = e.data.slice(9);
        if (n !== t.window_id) return;
        switch (r) {
        case "s":
            t.iframeObj.loaded(), t.postMessage("s", JSON.stringify([T.version, t.protocol, t.trans_url, t.base_url]));
            break;
        case "t":
            t.ri._didMessage(i)
        }
    }, j.prototype.postMessage = function (e, t) {
        var n = this;
        n.iframeObj.post(n.window_id + e + (t || ""), n.origin)
    }, j.prototype.doSend = function (e) {
        this.postMessage("m", e)
    }, j.enabled = function () {
        var e = navigator && navigator.userAgent && navigator.userAgent.indexOf("Konqueror") !== -1;
        return (typeof t.postMessage == "function" || typeof t.postMessage == "object") && !e
    };
    var F, I = function (e, r) {
            parent !== t ? parent.postMessage(F + e + (r || ""), "*") : n.log("Can't postMessage, no parent window.", e, r)
        }, q = function () {};
    q.prototype._didClose = function (e, t) {
        I("t", n.closeFrame(e, t))
    }, q.prototype._didMessage = function (e) {
        I("t", e)
    }, q.prototype._doSend = function (e) {
        this._transport.doSend(e)
    }, q.prototype._doCleanup = function () {
        this._transport.doCleanup()
    }, n.parent_origin = undefined, T.bootstrap_iframe = function () {
        var r;
        F = e.location.hash.slice(1);
        var i = function (e) {
            if (e.source !== parent) return;
            typeof n.parent_origin == "undefined" && (n.parent_origin = e.origin);
            if (e.origin !== n.parent_origin) return;
            var i = e.data.slice(0, 8),
                s = e.data.slice(8, 9),
                o = e.data.slice(9);
            if (i !== F) return;
            switch (s) {
            case "s":
                var u = JSON.parse(o),
                    a = u[0],
                    f = u[1],
                    l = u[2],
                    c = u[3];
                a !== T.version && n.log('Incompatibile SockJS! Main site uses: "' + a + '", the iframe:' + ' "' + T.version + '".');
                if (!n.flatUrl(l) || !n.flatUrl(c)) {
                    n.log("Only basic urls are supported in SockJS");
                    return
                }
                if (!n.isSameOriginUrl(l) || !n.isSameOriginUrl(c)) {
                    n.log("Can't connect to different domain from within an iframe. (" + JSON.stringify([t.location.href, l, c]) + ")");
                    return
                }
                r = new q, r._transport = new q[f](r, l, c);
                break;
            case "m":
                r._doSend(o);
                break;
            case "c":
                r && r._doCleanup(), r = null
            }
        };
        n.attachMessage(i), I("s")
    };
    var R = function (e, t) {
        var r = this;
        n.delay(function () {
            r.doXhr(e, t)
        })
    };
    R.prototype = new s(["finish"]), R.prototype.doXhr = function (e, t) {
        var r = this,
            i = (new Date).getTime(),
            s = new t("GET", e + "/info"),
            o = n.delay(8e3, function () {
                s.ontimeout()
            });
        s.onfinish = function (e, t) {
            clearTimeout(o), o = null;
            if (e === 200) {
                var n = (new Date).getTime() - i,
                    s = JSON.parse(t);
                typeof s != "object" && (s = {}), r.emit("finish", s, n)
            } else r.emit("finish")
        }, s.ontimeout = function () {
            s.close(), r.emit("finish")
        }
    };
    var U = function (t) {
        var r = this,
            i = function () {
                var e = new j;
                e.protocol = "w-iframe-info-receiver";
                var n = function (t) {
                    if (typeof t == "string" && t.substr(0, 1) === "m") {
                        var n = JSON.parse(t.substr(1)),
                            i = n[0],
                            s = n[1];
                        r.emit("finish", i, s)
                    } else r.emit("finish");
                    e.doCleanup(), e = null
                }, i = {
                        _options: {},
                        _didClose: n,
                        _didMessage: n
                    };
                e.i_constructor(i, t, t)
            };
        e.body ? i() : n.attachEvent("load", i)
    };
    U.prototype = new s(["finish"]);
    var z = function () {
        var e = this;
        n.delay(function () {
            e.emit("finish", {}, 2e3)
        })
    };
    z.prototype = new s(["finish"]);
    var W = function (e) {
        if (n.isSameOriginUrl(e)) return new R(e, n.XHRLocalObject);
        switch (n.isXHRCorsCapable()) {
        case 1:
            return new R(e, n.XHRLocalObject);
        case 2:
            return n.isSameOriginScheme(e) ? new R(e, n.XDRObject) : new z;
        case 3:
            return new U(e);
        default:
            return new z
        }
    }, X = q["w-iframe-info-receiver"] = function (e, t, r) {
            var i = new R(r, n.XHRLocalObject);
            i.onfinish = function (t, n) {
                e._didMessage("m" + JSON.stringify([t, n])), e._didClose()
            }
        };
    X.prototype.doCleanup = function () {};
    var V = T["iframe-eventsource"] = function () {
        var e = this;
        e.protocol = "w-iframe-eventsource", e.i_constructor.apply(e, arguments)
    };
    V.prototype = new j, V.enabled = function () {
        return "EventSource" in t && j.enabled()
    }, V.need_body = !0, V.roundTrips = 3;
    var $ = q["w-iframe-eventsource"] = function (e, t) {
        this.run(e, t, "/eventsource", Z, n.XHRLocalObject)
    };
    $.prototype = new _;
    var J = T["iframe-xhr-polling"] = function () {
        var e = this;
        e.protocol = "w-iframe-xhr-polling", e.i_constructor.apply(e, arguments)
    };
    J.prototype = new j, J.enabled = function () {
        return t.XMLHttpRequest && j.enabled()
    }, J.need_body = !0, J.roundTrips = 3;
    var K = q["w-iframe-xhr-polling"] = function (e, t) {
        this.run(e, t, "/xhr", rt, n.XHRLocalObject)
    };
    K.prototype = new _;
    var Q = T["iframe-htmlfile"] = function () {
        var e = this;
        e.protocol = "w-iframe-htmlfile", e.i_constructor.apply(e, arguments)
    };
    Q.prototype = new j, Q.enabled = function () {
        return j.enabled()
    }, Q.need_body = !0, Q.roundTrips = 3;
    var G = q["w-iframe-htmlfile"] = function (e, t) {
        this.run(e, t, "/htmlfile", nt, n.XHRLocalObject)
    };
    G.prototype = new _;
    var Y = function (e, t, n, r) {
        var i = this;
        i.ri = e, i.Receiver = t, i.recv_url = n, i.AjaxObject = r, i._scheduleRecv()
    };
    Y.prototype._scheduleRecv = function () {
        var e = this,
            t = e.poll = new e.Receiver(e.recv_url, e.AjaxObject),
            n = 0;
        t.onmessage = function (t) {
            n += 1, e.ri._didMessage(t.data)
        }, t.onclose = function (n) {
            e.poll = t = t.onmessage = t.onclose = null, e.poll_is_closing || (n.reason === "permanent" ? e.ri._didClose(1006, "Polling error (" + n.reason + ")") : e._scheduleRecv())
        }
    }, Y.prototype.abort = function () {
        var e = this;
        e.poll_is_closing = !0, e.poll && e.poll.abort()
    };
    var Z = function (e) {
        var t = this,
            r = new EventSource(e);
        r.onmessage = function (e) {
            t.dispatchEvent(new i("message", {
                data: unescape(e.data)
            }))
        }, t.es_close = r.onerror = function (e, s) {
            var o = s ? "user" : r.readyState !== 2 ? "network" : "permanent";
            t.es_close = r.onmessage = r.onerror = null, r.close(), r = null, n.delay(200, function () {
                t.dispatchEvent(new i("close", {
                    reason: o
                }))
            })
        }
    };
    Z.prototype = new r, Z.prototype.abort = function () {
        var e = this;
        e.es_close && e.es_close({}, !0)
    };
    var et, tt = function () {
            if (et === undefined)
                if ("ActiveXObject" in t) try {
                    et = !! (new ActiveXObject("htmlfile"))
                } catch (e) {} else et = !1;
            return et
        }, nt = function (e) {
            var r = this;
            n.polluteGlobalNamespace(), r.id = "a" + n.random_string(6, 26), e += (e.indexOf("?") === -1 ? "?" : "&") + "c=" + escape(u + "." + r.id);
            var s = tt() ? n.createHtmlfile : n.createIframe,
                o;
            t[u][r.id] = {
                start: function () {
                    o.loaded()
                },
                message: function (e) {
                    r.dispatchEvent(new i("message", {
                        data: e
                    }))
                },
                stop: function () {
                    r.iframe_close({}, "network")
                }
            }, r.iframe_close = function (e, n) {
                o.cleanup(), r.iframe_close = o = null, delete t[u][r.id], r.dispatchEvent(new i("close", {
                    reason: n
                }))
            }, o = s(e, function (e) {
                r.iframe_close({}, "permanent")
            })
        };
    nt.prototype = new r, nt.prototype.abort = function () {
        var e = this;
        e.iframe_close && e.iframe_close({}, "user")
    };
    var rt = function (e, t) {
        var n = this,
            r = 0;
        n.xo = new t("POST", e, null), n.xo.onchunk = function (e, t) {
            if (e !== 200) return;
            for (;;) {
                var s = t.slice(r),
                    o = s.indexOf("\n");
                if (o === -1) break;
                r += o + 1;
                var u = s.slice(0, o);
                n.dispatchEvent(new i("message", {
                    data: u
                }))
            }
        }, n.xo.onfinish = function (e, t) {
            n.xo.onchunk(e, t), n.xo = null;
            var r = e === 200 ? "network" : "permanent";
            n.dispatchEvent(new i("close", {
                reason: r
            }))
        }
    };
    return rt.prototype = new r, rt.prototype.abort = function () {
        var e = this;
        e.xo && (e.xo.close(), e.dispatchEvent(new i("close", {
            reason: "user"
        })), e.xo = null)
    }, T.getUtils = function () {
        return n
    }, T.getIframeTransport = function () {
        return j
    }, T
}(), "_sockjs_onload" in window && setTimeout(_sockjs_onload, 1), typeof define == "function" && define.amd && define("sockjs", [], function () {
    return SockJS
});
Meteor._Stream = function (e) {
    var t = this;
    t.url = Meteor._Stream._toSockjsUrl(e), t.socket = null, t.event_callbacks = {}, t.server_id = null, t.sent_update_available = !1, t.force_fail = !1, t.CONNECT_TIMEOUT = 1e4, t.HEARTBEAT_TIMEOUT = 6e4, t.RETRY_BASE_TIMEOUT = 1e3, t.RETRY_EXPONENT = 2.2, t.RETRY_MAX_TIMEOUT = 18e5, t.RETRY_MIN_TIMEOUT = 10, t.RETRY_MIN_COUNT = 2, t.RETRY_FUZZ = .5, t.current_status = {
        status: "connecting",
        connected: !1,
        retryCount: 0,
        retry_count: 0
    }, t.status_listeners = Meteor.deps && new Meteor.deps._ContextSet, t.status_changed = function () {
        t.status_listeners && t.status_listeners.invalidateAll()
    }, t.retry_timer = null, t.connection_timer = null, t.heartbeat_timer = null, t._launch_connection()
}, _.extend(Meteor._Stream, {
    _toSockjsUrl: function (e) {
        var t = function (e, t) {
            return e.length >= t.length && e.substring(0, t.length) === t
        }, n = function (e, t) {
                return e.length >= t.length && e.substring(e.length - t.length) === t
            };
        return e.indexOf("://") === -1 && !t(e, "/") && (e = "http://" + e), n(e, "/sockjs") ? e : n(e, "/") ? e + "sockjs" : e + "/sockjs"
    }
}), _.extend(Meteor._Stream.prototype, {
    on: function (e, t) {
        var n = this;
        if (e !== "message" && e !== "reset" && e !== "update_available") throw new Error("unknown event type: " + e);
        n.event_callbacks[e] || (n.event_callbacks[e] = []), n.event_callbacks[e].push(t)
    },
    send: function (e) {
        var t = this;
        t.current_status.connected && t.socket.send(e)
    },
    status: function () {
        var e = this;
        return e.status_listeners && e.status_listeners.addCurrentContext(), e.current_status
    },
    reconnect: function (e) {
        var t = this;
        if (t.current_status.connected) {
            e && e._force && t._disconnected();
            return
        }
        t.current_status.status === "connecting" && t._fake_connect_failed(), t.retry_timer && clearTimeout(t.retry_timer), t.retry_timer = null, t.current_status.retryCount -= 1, t.current_status.retry_count = t.current_status.retryCount, t._retry_now()
    },
    forceDisconnect: function (e) {
        var t = this;
        t.force_fail = e, e && t.socket && t.socket.close()
    },
    _connected: function (e) {
        var t = this;
        t.connection_timer && (clearTimeout(t.connection_timer), t.connection_timer = null), t._heartbeat_received();
        if (t.current_status.connected) return;
        try {
            var n = JSON.parse(e)
        } catch (r) {
            Meteor._debug("DEBUG: malformed welcome packet", e)
        }
        n && n.server_id ? (t.server_id || (t.server_id = n.server_id), t.server_id && t.server_id !== n.server_id && !t.sent_update_available && (t.update_available = !0, _.each(t.event_callbacks.update_available, function (e) {
            e()
        }))) : Meteor._debug("DEBUG: invalid welcome packet", n), t.current_status.status = "connected", t.current_status.connected = !0, t.current_status.retryCount = 0, t.current_status.retry_count = t.current_status.retryCount, t.status_changed(), _.each(t.event_callbacks.reset, function (e) {
            e()
        })
    },
    _cleanup_socket: function () {
        var e = this;
        if (e.socket) {
            e.socket.onmessage = e.socket.onclose = e.socket.onerror = function () {}, e.socket.close();
            var t = e.socket;
            e.socket = null
        }
    },
    _disconnected: function () {
        var e = this;
        e.connection_timer && (clearTimeout(e.connection_timer), e.connection_timer = null), e.heartbeat_timer && (clearTimeout(e.heartbeat_timer), e.heartbeat_timer = null), e._cleanup_socket(), e._retry_later()
    },
    _fake_connect_failed: function () {
        var e = this;
        e._cleanup_socket(), e._disconnected()
    },
    _heartbeat_timeout: function () {
        var e = this;
        Meteor._debug("Connection timeout. No heartbeat received."), e._fake_connect_failed()
    },
    _heartbeat_received: function () {
        var e = this;
        e.heartbeat_timer && clearTimeout(e.heartbeat_timer), e.heartbeat_timer = setTimeout(_.bind(e._heartbeat_timeout, e), e.HEARTBEAT_TIMEOUT)
    },
    _retry_timeout: function (e) {
        var t = this;
        if (e < t.RETRY_MIN_COUNT) return t.RETRY_MIN_TIMEOUT;
        var n = Math.min(t.RETRY_MAX_TIMEOUT, t.RETRY_BASE_TIMEOUT * Math.pow(t.RETRY_EXPONENT, e));
        return n *= Math.random() * t.RETRY_FUZZ + (1 - t.RETRY_FUZZ / 2), n
    },
    _retry_later: function () {
        var e = this,
            t = e._retry_timeout(e.current_status.retryCount);
        e.retry_timer && clearTimeout(e.retry_timer), e.retry_timer = setTimeout(_.bind(e._retry_now, e), t), e.current_status.status = "waiting", e.current_status.connected = !1, e.current_status.retryTime = (new Date).getTime() + t, e.current_status.retry_time = e.current_status.retryTime, e.status_changed()
    },
    _retry_now: function () {
        var e = this;
        if (e.force_fail) return;
        e.current_status.retryCount += 1, e.current_status.retry_count = e.current_status.retryCount, e.current_status.status = "connecting", e.current_status.connected = !1, delete e.current_status.retryTime, delete e.current_status.retry_time, e.status_changed(), e._launch_connection()
    },
    _launch_connection: function () {
        var e = this;
        e._cleanup_socket(), e.socket = new SockJS(e.url, undefined, {
            debug: !1,
            protocols_whitelist: ["xdr-polling", "xhr-polling", "iframe-xhr-polling", "jsonp-polling"]
        }), e.socket.onmessage = function (t) {
            e.current_status.status === "connecting" ? e._connected(t.data) : e.current_status.connected && _.each(e.event_callbacks.message, function (e) {
                e(t.data)
            }), e._heartbeat_received()
        }, e.socket.onclose = function () {
            e._disconnected()
        }, e.socket.onerror = function () {
            Meteor._debug("stream error", _.toArray(arguments), (new Date).toDateString())
        }, e.socket.onheartbeat = function () {
            e._heartbeat_received()
        }, e.connection_timer && clearTimeout(e.connection_timer), e.connection_timer = setTimeout(_.bind(e._fake_connect_failed, e), e.CONNECT_TIMEOUT)
    }
});
LocalCollection = function () {
    this.docs = {}, this.next_qid = 1, this.queries = {}, this._savedOriginals = null, this.paused = !1
}, LocalCollection.prototype.find = function (e, t) {
    return arguments.length === 0 && (e = {}), new LocalCollection.Cursor(this, e, t)
}, LocalCollection.Cursor = function (e, t, n) {
    n || (n = {}), this.collection = e, typeof t == "string" || typeof t == "number" ? (this.selector_id = t, this.selector_f = LocalCollection._compileSelector(t)) : (this.selector_f = LocalCollection._compileSelector(t), this.sort_f = n.sort ? LocalCollection._compileSort(n.sort) : null, this.skip = n.skip, this.limit = n.limit), this.db_objects = null, this.cursor_pos = 0, typeof Meteor == "object" && Meteor.deps && (this.reactive = n.reactive === undefined ? !0 : n.reactive)
}, LocalCollection.Cursor.prototype.rewind = function () {
    var e = this;
    e.db_objects = null, e.cursor_pos = 0
}, LocalCollection.prototype.findOne = function (e, t) {
    return arguments.length === 0 && (e = {}), this.find(e, t).fetch()[0]
}, LocalCollection.Cursor.prototype.forEach = function (e) {
    var t = this,
        n;
    t.db_objects === null && (t.db_objects = t._getRawObjects(!0)), t.reactive && t._markAsReactive({
        ordered: !0,
        added: !0,
        removed: !0,
        changed: !0,
        moved: !0
    });
    while (t.cursor_pos < t.db_objects.length) e(LocalCollection._deepcopy(t.db_objects[t.cursor_pos++]))
}, LocalCollection.Cursor.prototype.map = function (e) {
    var t = this,
        n = [];
    return t.forEach(function (t) {
        n.push(e(t))
    }), n
}, LocalCollection.Cursor.prototype.fetch = function () {
    var e = this,
        t = [];
    return e.forEach(function (e) {
        t.push(e)
    }), t
}, LocalCollection.Cursor.prototype.count = function () {
    var e = this;
    return e.reactive && e._markAsReactive({
        ordered: !1,
        added: !0,
        removed: !0
    }), e.db_objects === null && (e.db_objects = e._getRawObjects(!0)), e.db_objects.length
}, LocalCollection.LiveResultsSet = function () {}, _.extend(LocalCollection.Cursor.prototype, {
    observe: function (e) {
        var t = this;
        return t._observeInternal(!0, e)
    },
    _observeUnordered: function (e) {
        var t = this;
        return t._observeInternal(!1, e)
    },
    _observeInternal: function (e, t) {
        var n = this;
        if (n.skip || n.limit) throw new Error("cannot observe queries with skip or limit");
        var r = n.collection.next_qid++,
            i = n.collection.queries[r] = {
                selector_f: n.selector_f,
                sort_f: e && n.sort_f,
                results_snapshot: null,
                ordered: e,
                cursor: this
            };
        i.results = n._getRawObjects(e), n.collection.paused && (i.results_snapshot = e ? [] : {});
        var s = function (e) {
            return e ? function () {
                n.collection.paused || e.apply(this, arguments)
            } : function () {}
        };
        i.added = s(t.added), i.changed = s(t.changed), i.removed = s(t.removed), e && (i.moved = s(t.moved)), !t._suppress_initial && !n.collection.paused && _.each(i.results, function (t, n) {
            i.added(LocalCollection._deepcopy(t), e ? n : undefined)
        });
        var o = new LocalCollection.LiveResultsSet;
        return _.extend(o, {
            collection: n.collection,
            stop: function () {
                delete n.collection.queries[r]
            }
        }), o
    }
}), LocalCollection.Cursor.prototype._getRawObjects = function (e) {
    var t = this,
        n = e ? [] : {};
    if (t.selector_id) {
        if (_.has(t.collection.docs, t.selector_id)) {
            var r = t.collection.docs[t.selector_id];
            e ? n.push(r) : n[t.selector_id] = r
        }
        return n
    }
    for (var i in t.collection.docs) {
        var s = t.collection.docs[i];
        t.selector_f(s) && (e ? n.push(s) : n[i] = s)
    }
    if (!e) return n;
    t.sort_f && n.sort(t.sort_f);
    var o = t.skip || 0,
        u = t.limit ? t.limit + o : n.length;
    return n.slice(o, u)
}, LocalCollection.Cursor.prototype._markAsReactive = function (e) {
    var t = this,
        n = Meteor.deps.Context.current;
    if (n) {
        var r = _.bind(n.invalidate, n),
            i;
        e.ordered ? i = t.observe({
            added: e.added && r,
            removed: e.removed && r,
            changed: e.changed && r,
            moved: e.moved && r,
            _suppress_initial: !0
        }) : i = t._observeUnordered({
            added: e.added && r,
            removed: e.removed && r,
            changed: e.changed && r,
            _suppress_initial: !0
        }), n.onInvalidate(i.stop)
    }
}, LocalCollection.prototype.insert = function (e) {
    var t = this;
    e = LocalCollection._deepcopy(e), "_id" in e || (e._id = LocalCollection.uuid());
    if (_.has(t.docs, e._id)) throw new Error("Duplicate _id '" + e._id + "'");
    t._saveOriginal(e._id, undefined), t.docs[e._id] = e;
    for (var n in t.queries) {
        var r = t.queries[n];
        r.selector_f(e) && LocalCollection._insertInResults(r, e)
    }
}, LocalCollection.prototype.remove = function (e) {
    var t = this,
        n = [];
    if (LocalCollection._selectorIsId(e)) _.has(t.docs, e) && n.push(e);
    else {
        var r = LocalCollection._compileSelector(e);
        for (var i in t.docs) {
            var s = t.docs[i];
            r(s) && n.push(i)
        }
    }
    var o = [];
    for (var u = 0; u < n.length; u++) {
        var a = n[u],
            f = t.docs[a];
        _.each(t.queries, function (e) {
            e.selector_f(f) && o.push([e, f])
        }), t._saveOriginal(a, f), delete t.docs[a]
    }
    for (var u = 0; u < o.length; u++) LocalCollection._removeFromResults(o[u][0], o[u][1])
}, LocalCollection.prototype.update = function (e, t, n) {
    n || (n = {});
    var r = this,
        i = !1,
        s = LocalCollection._compileSelector(e);
    for (var o in r.docs) {
        var u = r.docs[o];
        if (s(u)) {
            r._saveOriginal(o, u), r._modifyAndNotify(u, t);
            if (!n.multi) return;
            i = !0
        }
    }
    if (n.upsert) throw Error("upsert not yet implemented")
}, LocalCollection.prototype._modifyAndNotify = function (e, t) {
    var n = this,
        r = {};
    for (var i in n.queries) {
        var s = n.queries[i];
        s.ordered ? r[i] = s.selector_f(e) : r[i] = _.has(s.results, e._id)
    }
    var o = LocalCollection._deepcopy(e);
    LocalCollection._modify(e, t);
    for (i in n.queries) {
        s = n.queries[i];
        var u = r[i],
            a = s.selector_f(e);
        u && !a ? LocalCollection._removeFromResults(s, e) : !u && a ? LocalCollection._insertInResults(s, e) : u && a && LocalCollection._updateInResults(s, e, o)
    }
}, LocalCollection._deepcopy = function (e) {
    if (typeof e != "object") return e;
    if (e === null) return null;
    if (e instanceof Date) return new Date(e.getTime());
    if (_.isArray(e)) {
        var t = e.slice(0);
        for (var n = 0; n < e.length; n++) t[n] = LocalCollection._deepcopy(t[n]);
        return t
    }
    var t = {};
    for (var r in e) t[r] = LocalCollection._deepcopy(e[r]);
    return t
}, LocalCollection._insertInResults = function (e, t) {
    if (e.ordered)
        if (!e.sort_f) e.added(LocalCollection._deepcopy(t), e.results.length), e.results.push(t);
        else {
            var n = LocalCollection._insertInSortedList(e.sort_f, e.results, t);
            e.added(LocalCollection._deepcopy(t), n)
        } else e.added(LocalCollection._deepcopy(t)), e.results[t._id] = t
}, LocalCollection._removeFromResults = function (e, t) {
    if (e.ordered) {
        var n = LocalCollection._findInOrderedResults(e, t);
        e.removed(t, n), e.results.splice(n, 1)
    } else {
        var r = t._id;
        e.removed(t), delete e.results[r]
    }
}, LocalCollection._updateInResults = function (e, t, n) {
    if (t._id !== n._id) throw new Error("Can't change a doc's _id while updating");
    if (!e.ordered) {
        e.changed(LocalCollection._deepcopy(t), n), e.results[t._id] = t;
        return
    }
    var r = LocalCollection._findInOrderedResults(e, t);
    e.changed(LocalCollection._deepcopy(t), r, n);
    if (!e.sort_f) return;
    e.results.splice(r, 1);
    var i = LocalCollection._insertInSortedList(e.sort_f, e.results, t);
    r !== i && e.moved(LocalCollection._deepcopy(t), r, i)
}, LocalCollection._findInOrderedResults = function (e, t) {
    if (!e.ordered) throw new Error("Can't call _findInOrderedResults on unordered query");
    for (var n = 0; n < e.results.length; n++)
        if (e.results[n] === t) return n;
    throw Error("object missing from query")
}, LocalCollection._insertInSortedList = function (e, t, n) {
    if (t.length === 0) return t.push(n), 0;
    for (var r = 0; r < t.length; r++)
        if (e(n, t[r]) < 0) return t.splice(r, 0, n), r;
    return t.push(n), t.length - 1
}, LocalCollection.prototype.saveOriginals = function () {
    var e = this;
    if (e._savedOriginals) throw new Error("Called saveOriginals twice without retrieveOriginals");
    e._savedOriginals = {}
}, LocalCollection.prototype.retrieveOriginals = function () {
    var e = this;
    if (!e._savedOriginals) throw new Error("Called retrieveOriginals without saveOriginals");
    var t = e._savedOriginals;
    return e._savedOriginals = null, t
}, LocalCollection.prototype._saveOriginal = function (e, t) {
    var n = this;
    if (!n._savedOriginals) return;
    if (_.has(n._savedOriginals, e)) return;
    n._savedOriginals[e] = LocalCollection._deepcopy(t)
}, LocalCollection.prototype.pauseObservers = function () {
    if (this.paused) return;
    this.paused = !0;
    for (var e in this.queries) {
        var t = this.queries[e];
        t.results_snapshot = LocalCollection._deepcopy(t.results)
    }
}, LocalCollection.prototype.resumeObservers = function () {
    if (!this.paused) return;
    this.paused = !1;
    for (var e in this.queries) {
        var t = this.queries[e];
        LocalCollection._diffQuery(t.ordered, t.results_snapshot, t.results, t, !0), t.results_snapshot = null
    }
};
LocalCollection._f = {
    _all: function (e, t) {
        if (e instanceof Array) {
            var n = {}, r = 0;
            _.each(t, function (e) {
                var t = JSON.stringify(e);
                t in n || (n[t] = !0, r++)
            });
            for (var i = 0; i < e.length; i++) {
                var s = JSON.stringify(e[i]);
                if (n[s]) {
                    delete n[s], r--;
                    if (0 === r) return !0
                }
            }
            return !1
        }
        return !1
    },
    _in: function (e, t) {
        if (typeof e != "object") {
            for (var n = 0; n < t.length; n++)
                if (e === t[n]) return !0;
            return !1
        }
        for (var n = 0; n < t.length; n++)
            if (LocalCollection._f._equal(e, t[n])) return !0;
        return !1
    },
    _type: function (e) {
        return typeof e == "number" ? 1 : typeof e == "string" ? 2 : typeof e == "boolean" ? 8 : e instanceof Array ? 4 : e === null ? 10 : e instanceof RegExp ? 11 : typeof e == "function" ? 13 : 3
    },
    _equal: function (e, t) {
        var n = function (e, t) {
            if (typeof e == "number" || typeof e == "string" || typeof e == "boolean" || e === undefined || e === null) return e === t;
            if (typeof e == "function") return !1;
            if (typeof t != "object") return !1;
            if (e instanceof Array) {
                if (t instanceof Array) {
                    if (e.length !== t.length) return !1;
                    for (var r = 0; r < e.length; r++)
                        if (!n(e[r], t[r])) return !1;
                    return !0
                }
                return !1
            }
            var i = [];
            for (var s in t) i.push(s);
            var r = 0;
            for (var s in e) {
                if (r >= i.length) return !1;
                if (s !== i[r]) return !1;
                if (!n(e[s], t[i[r]])) return !1;
                r++
            }
            return r !== i.length ? !1 : !0
        };
        return n(e, t)
    },
    _matches: function (e, t) {
        if (e instanceof Array) {
            for (var n = 0; n < e.length; n++)
                if (t(e[n])) return !0;
            return !1
        }
        return t(e)
    },
    _matches_plus: function (e, t) {
        if (e instanceof Array)
            for (var n = 0; n < e.length; n++)
                if (t(e[n])) return !0;
        return t(e)
    },
    _typeorder: function (e) {
        return [-1, 1, 2, 3, 4, 5, -1, 6, 7, 8, 0, 9, -1, 100, 2, 100, 1, 8, 1][e]
    },
    _cmp: function (e, t) {
        if (e === undefined) return t === undefined ? 0 : -1;
        if (t === undefined) return 1;
        var n = LocalCollection._f._type(e),
            r = LocalCollection._f._type(t),
            i = LocalCollection._f._typeorder(n),
            s = LocalCollection._f._typeorder(r);
        if (i !== s) return i < s ? -1 : 1;
        if (n !== r) throw Error("Missing type coercion logic in _cmp");
        if (n === 1) return e - t;
        if (r === 2) return e < t ? -1 : e === t ? 0 : 1;
        if (n === 3) {
            var o = function (e) {
                var t = [];
                for (var n in e) t.push(n), t.push(e[n]);
                return t
            };
            return LocalCollection._f._cmp(o(e), o(t))
        }
        if (n === 4)
            for (var u = 0;; u++) {
                if (u === e.length) return u === t.length ? 0 : -1;
                if (u === t.length) return 1;
                var a = LocalCollection._f._cmp(e[u], t[u]);
                if (a !== 0) return a
            }
        if (n === 8) return e ? t ? 0 : 1 : t ? -1 : 0;
        if (n === 10) return 0;
        if (n === 11) throw Error("Sorting not supported on regular expression");
        if (n === 13) throw Error("Sorting not supported on Javascript code")
    }
}, LocalCollection._matches = function (e, t) {
    return LocalCollection._compileSelector(e)(t)
}, LocalCollection._compileSelector = function (selector) {
    var literals = [];
    if (selector instanceof Function) return function (e) {
        return selector.call(e)
    };
    LocalCollection._selectorIsId(selector) && (selector = {
        _id: selector
    });
    if (!selector || "_id" in selector && !selector._id) return function (e) {
        return !1
    };
    var _func;
    return eval("_func = (function(f,literals){return function(doc){return " + LocalCollection._exprForSelector(selector, literals) + ";};})"), _func(LocalCollection._f, literals)
}, LocalCollection._selectorIsId = function (e) {
    return typeof e == "string" || typeof e == "number"
}, LocalCollection._exprForSelector = function (e, t) {
    var n = [];
    for (var r in e) {
        var i = e[r];
        r.substr(0, 1) === "$" ? n.push(LocalCollection._exprForDocumentPredicate(r, i, t)) : n.push(LocalCollection._exprForKeypathPredicate(r, i, t))
    }
    return n.length === 0 ? "true" : "(" + n.join("&&") + ")"
}, LocalCollection._exprForDocumentPredicate = function (e, t, n) {
    if (e === "$or") {
        var r = [];
        return _.each(t, function (e) {
            r.push(LocalCollection._exprForSelector(e, n))
        }), r.length === 0 ? "true" : "(" + r.join("||") + ")"
    }
    if (e === "$and") {
        var r = [];
        return _.each(t, function (e) {
            r.push(LocalCollection._exprForSelector(e, n))
        }), r.length === 0 ? "true" : "(" + r.join("&&") + ")"
    }
    if (e === "$nor") {
        var r = [];
        return _.each(t, function (e) {
            r.push("!(" + LocalCollection._exprForSelector(e, n) + ")")
        }), r.length === 0 ? "true" : "(" + r.join("&&") + ")"
    }
    if (e === "$where") return t instanceof Function ? (n.push(t), "literals[" + (n.length - 1) + "].call(doc)") : "(function(){return " + t + ";}).call(doc)";
    throw Error("Unrecogized key in selector: ", e)
}, LocalCollection._exprForKeypathPredicate = function (e, t, n) {
    var r = e.split("."),
        i = "";
    if (t instanceof RegExp) i = LocalCollection._exprForOperatorTest(t, n);
    else if (typeof t != "object" || t === null || t instanceof Array) i = LocalCollection._exprForValueTest(t, n);
    else {
        var s = !0;
        for (var o in t)
            if (o.substr(0, 1) === "$") {
                s = !1;
                break
            }
        s ? i = LocalCollection._exprForValueTest(t, n) : i = LocalCollection._exprForOperatorTest(t, n)
    }
    var u = "",
        a = !0;
    while (r.length) {
        var f = r.pop(),
            l = r.length ? "x" : "doc";
        a ? (u = "(function(x){return " + i + ";})(" + l + "&&" + l + "[" + JSON.stringify(f) + "])", a = !1) : u = "f._matches(" + l + "&&" + l + "[" + JSON.stringify(f) + "], function(x){return " + u + ";})"
    }
    return u
}, LocalCollection._exprForValueTest = function (e, t) {
    var n;
    if (e === null) n = "x===null||x===undefined";
    else if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") n = "x===" + JSON.stringify(e);
    else {
        if (typeof e == "function") throw Error("Bad value type in query");
        n = "f._equal(x," + JSON.stringify(e) + ")"
    }
    return "f._matches_plus(x,function(x){return " + n + ";})"
}, LocalCollection._exprForOperatorTest = function (e, t) {
    if (e instanceof RegExp) return LocalCollection._exprForOperatorTest({
        $regex: e
    }, t);
    var n = [];
    for (var r in e) n.push(LocalCollection._exprForConstraint(r, e[r], e, t));
    return n.length === 0 ? "true" : "(" + n.join("&&") + ")"
}, LocalCollection._exprForConstraint = function (e, t, n, r) {
    var i, s = "_matches",
        o = !1;
    if (e === "$gt") i = "f._cmp(x," + JSON.stringify(t) + ")>0";
    else if (e === "$lt") i = "f._cmp(x," + JSON.stringify(t) + ")<0";
    else if (e === "$gte") i = "f._cmp(x," + JSON.stringify(t) + ")>=0";
    else if (e === "$lte") i = "f._cmp(x," + JSON.stringify(t) + ")<=0";
    else if (e === "$all") i = "f._all(x," + JSON.stringify(t) + ")", s = null;
    else if (e === "$exists") t ? i = "x!==undefined" : i = "x===undefined", s = null;
    else if (e === "$mod") i = "x%" + JSON.stringify(t[0]) + "===" + JSON.stringify(t[1]);
    else if (e === "$ne") typeof t != "object" ? i = "x===" + JSON.stringify(t) : i = "f._equal(x," + JSON.stringify(t) + ")", s = "_matches_plus", o = !0;
    else if (e === "$in") i = "f._in(x," + JSON.stringify(t) + ")", s = "_matches_plus";
    else if (e === "$nin") i = "f._in(x," + JSON.stringify(t) + ")", s = "_matches_plus", o = !0;
    else if (e === "$size") i = "(x instanceof Array)&&x.length===" + t, s = null;
    else if (e === "$type") i = "f._type(x)===" + JSON.stringify(t);
    else if (e === "$regex") {
        if ("$options" in n && /[^gim]/.test(n.$options)) throw Error("Only the i, m, and g regexp options are supported");
        i = "literals[" + r.length + "].test(x)", t instanceof RegExp ? "$options" in n ? r.push(new RegExp(t.source, n.$options)) : r.push(t) : r.push(new RegExp(t, n.$options))
    } else if (e === "$options") i = "true", s = null;
    else {
        if (e === "$elemMatch") throw Error("$elemMatch unimplemented");
        if (e !== "$not") throw Error("Unrecognized key in selector: " + e);
        i = "!" + LocalCollection._exprForOperatorTest(t, r), s = null
    }
    return s && (i = "f." + s + "(x,function(x){return " + i + ";})"), o && (i = "!" + i), i
};
LocalCollection._compileSort = function (spec) {
    var keys = [],
        asc = [];
    if (spec instanceof Array)
        for (var i = 0; i < spec.length; i++) typeof spec[i] == "string" ? (keys.push(spec[i]), asc.push(!0)) : (keys.push(spec[i][0]), asc.push(spec[i][1] !== "desc"));
    else {
        if (typeof spec != "object") throw Error("Bad sort specification: ", JSON.stringify(spec));
        for (key in spec) keys.push(key), asc.push(!(spec[key] < 0))
    } if (keys.length === 0) return function () {
        return 0
    };
    var _func, code = "_func = (function(c){return function(a,b){var x;";
    for (var i = 0; i < keys.length; i++) i !== 0 && (code += "if(x!==0)return x;"), code += "x=" + (asc[i] ? "" : "-") + "c(a[" + JSON.stringify(keys[i]) + "],b[" + JSON.stringify(keys[i]) + "]);";
    return code += "return x;};})", eval(code), _func(LocalCollection._f._cmp)
};
LocalCollection._Alea = function () {
    function e() {
        var e = 4022871197,
            t = function (t) {
                t = t.toString();
                for (var r = 0; r < t.length; r++) {
                    e += t.charCodeAt(r);
                    var i = .02519603282416938 * e;
                    e = i >>> 0, i -= e, i *= e, e = i >>> 0, i -= e, e += i * 4294967296
                }
                return (e >>> 0) * 2.3283064365386963e-10
            };
        return t.version = "Mash 0.9", t
    }
    return function (t) {
        var n = 0,
            r = 0,
            i = 0,
            s = 1;
        t.length == 0 && (t = [+(new Date)]);
        var o = e();
        n = o(" "), r = o(" "), i = o(" ");
        for (var u = 0; u < t.length; u++) n -= o(t[u]), n < 0 && (n += 1), r -= o(t[u]), r < 0 && (r += 1), i -= o(t[u]), i < 0 && (i += 1);
        o = null;
        var a = function () {
            var e = 2091639 * n + s * 2.3283064365386963e-10;
            return n = r, r = i, i = e - (s = e | 0)
        };
        return a.uint32 = function () {
            return a() * 4294967296
        }, a.fract53 = function () {
            return a() + (a() * 2097152 | 0) * 1.1102230246251565e-16
        }, a.version = "Alea 0.9", a.args = t, a
    }(Array.prototype.slice.call(arguments))
}, LocalCollection.random = new LocalCollection._Alea, LocalCollection.uuid = function () {
    var e = [],
        t = "0123456789abcdef";
    for (var n = 0; n < 36; n++) e[n] = t.substr(Math.floor(LocalCollection.random() * 16), 1);
    e[14] = "4", e[19] = t.substr(e[19] & 3 | 8, 1), e[8] = e[13] = e[18] = e[23] = "-";
    var r = e.join("");
    return r
};
LocalCollection._modify = function (e, t) {
    var n = !1;
    for (var r in t) {
        n = r.substr(0, 1) === "$";
        break
    }
    var i;
    if (!n) {
        if (t._id && e._id !== t._id) throw Error("Cannot change the _id of a document");
        for (var r in t) {
            if (r.substr(0, 1) === "$") throw Error("When replacing document, field name may not start with '$'");
            if (/\./.test(r)) throw Error("When replacing document, field name may not contain '.'")
        }
        i = t
    } else {
        var i = LocalCollection._deepcopy(e);
        for (var s in t) {
            var o = LocalCollection._modifiers[s];
            if (!o) throw Error("Invalid modifier specified " + s);
            for (var u in t[s]) {
                if (u.length && u[u.length - 1] === ".") throw Error("Invalid mod field name, may not end in a period");
                var a = t[s][u],
                    f = u.split("."),
                    l = !! LocalCollection._noCreateModifiers[s],
                    c = s === "$rename",
                    h = LocalCollection._findModTarget(i, f, l, c),
                    p = f.pop();
                o(h, p, a, u, i)
            }
        }
    }
    for (var r in e) r !== "_id" && delete e[r];
    for (var r in i) e[r] = i[r]
}, LocalCollection._findModTarget = function (e, t, n, r) {
    for (var i = 0; i < t.length; i++) {
        var s = i === t.length - 1,
            o = t[i],
            u = /^[0-9]+$/.test(o);
        if (!(!n || typeof e == "object" && o in e)) return undefined;
        if (e instanceof Array) {
            if (r) return null;
            if (!u) throw Error("can't append to array using string field name [" + o + "]");
            o = parseInt(o), s && (t[i] = o);
            while (e.length < o) e.push(null);
            if (!s)
                if (e.length === o) e.push({});
                else if (typeof e[o] != "object") throw Error("can't modify field '" + t[i + 1] + "' of list value " + JSON.stringify(e[o]))
        } else !s && !(o in e) && (e[o] = {});
        if (s) return e;
        e = e[o]
    }
}, LocalCollection._noCreateModifiers = {
    $unset: !0,
    $pop: !0,
    $rename: !0,
    $pull: !0,
    $pullAll: !0
}, LocalCollection._modifiers = {
    $inc: function (e, t, n) {
        if (typeof n != "number") throw Error("Modifier $inc allowed for numbers only");
        if (t in e) {
            if (typeof e[t] != "number") throw Error("Cannot apply $inc modifier to non-number");
            e[t] += n
        } else e[t] = n
    },
    $set: function (e, t, n) {
        e[t] = LocalCollection._deepcopy(n)
    },
    $unset: function (e, t, n) {
        e !== undefined && (e instanceof Array ? t in e && (e[t] = null) : delete e[t])
    },
    $push: function (e, t, n) {
        var r = e[t];
        if (r === undefined) e[t] = [n];
        else {
            if (!(r instanceof Array)) throw Error("Cannot apply $push modifier to non-array");
            r.push(LocalCollection._deepcopy(n))
        }
    },
    $pushAll: function (e, t, n) {
        if (!(typeof n == "object" && n instanceof Array)) throw Error("Modifier $pushAll/pullAll allowed for arrays only");
        var r = e[t];
        if (r === undefined) e[t] = n;
        else {
            if (!(r instanceof Array)) throw Error("Cannot apply $pushAll modifier to non-array");
            for (var i = 0; i < n.length; i++) r.push(n[i])
        }
    },
    $addToSet: function (e, t, n) {
        var r = e[t];
        if (r === undefined) e[t] = [n];
        else {
            if (!(r instanceof Array)) throw Error("Cannot apply $addToSet modifier to non-array");
            var i = !1;
            if (typeof n == "object")
                for (var s in n) {
                    s === "$each" && (i = !0);
                    break
                }
            var o = i ? n.$each : [n];
            _.each(o, function (e) {
                for (var t = 0; t < r.length; t++)
                    if (LocalCollection._f._equal(e, r[t])) return;
                r.push(e)
            })
        }
    },
    $pop: function (e, t, n) {
        if (e === undefined) return;
        var r = e[t];
        if (r === undefined) return;
        if (!(r instanceof Array)) throw Error("Cannot apply $pop modifier to non-array");
        typeof n == "number" && n < 0 ? r.splice(0, 1) : r.pop()
    },
    $pull: function (e, t, n) {
        if (e === undefined) return;
        var r = e[t];
        if (r === undefined) return;
        if (!(r instanceof Array)) throw Error("Cannot apply $pull/pullAll modifier to non-array");
        var i = [];
        if (typeof n != "object" || n instanceof Array)
            for (var o = 0; o < r.length; o++) LocalCollection._f._equal(r[o], n) || i.push(r[o]);
        else {
            var s = LocalCollection._compileSelector(n);
            for (var o = 0; o < r.length; o++) s(r[o]) || i.push(r[o])
        }
        e[t] = i
    },
    $pullAll: function (e, t, n) {
        if (!(typeof n == "object" && n instanceof Array)) throw Error("Modifier $pushAll/pullAll allowed for arrays only");
        if (e === undefined) return;
        var r = e[t];
        if (r === undefined) return;
        if (!(r instanceof Array)) throw Error("Cannot apply $pull/pullAll modifier to non-array");
        var i = [];
        for (var s = 0; s < r.length; s++) {
            var o = !1;
            for (var u = 0; u < n.length; u++)
                if (LocalCollection._f._equal(r[s], n[u])) {
                    o = !0;
                    break
                }
            o || i.push(r[s])
        }
        e[t] = i
    },
    $rename: function (e, t, n, r, i) {
        if (r === n) throw Error("$rename source must differ from target");
        if (e === null) throw Error("$rename source field invalid");
        if (typeof n != "string") throw Error("$rename target must be a string");
        if (e === undefined) return;
        var s = e[t];
        delete e[t];
        var o = n.split("."),
            u = LocalCollection._findModTarget(i, o, !1, !0);
        if (u === null) throw Error("$rename target field invalid");
        var a = o.pop();
        u[a] = s
    },
    $bit: function (e, t, n) {
        throw Error("$bit is not supported")
    }
};
LocalCollection._diffQuery = function (e, t, n, r, i) {
    e ? LocalCollection._diffQueryOrdered(t, n, r, i) : LocalCollection._diffQueryUnordered(t, n, r, i)
}, LocalCollection._diffQueryOrdered = function (e, t, n, r) {
    var i = {};
    _.each(t, function (e) {
        i[e._id] && Meteor._debug("Duplicate _id in new_results"), i[e._id] = !0
    });
    var s = {};
    _.each(e, function (e, t) {
        e._id in s && Meteor._debug("Duplicate _id in old_results"), s[e._id] = t
    });
    var o = r ? LocalCollection._deepcopy : _.identity,
        u = {}, a = 0,
        f = t.length,
        l = new Array(f),
        c = new Array(f),
        h = function (e) {
            return s[t[e]._id]
        };
    for (var p = 0; p < f; p++)
        if (s[t[p]._id] !== undefined) {
            var d = a;
            while (d > 0) {
                if (h(l[d - 1]) < h(p)) break;
                d--
            }
            c[p] = d === 0 ? -1 : l[d - 1], l[d] = p, d + 1 > a && (a = d + 1)
        }
    var v = a === 0 ? -1 : l[a - 1];
    while (v >= 0) u[v] = !0, v = c[v];
    var m = 0,
        g = 0,
        y = [],
        b = [],
        w = [],
        E = function (t) {
            while (m < t) {
                var r = e[m],
                    s = i[r._id];
                s ? w.length >= 1 && w[0] === m ? w.shift() : (y.push(g), b.push(m)) : n.removed && n.removed(r, g + y.length), m++
            }
        };
    while (g <= t.length) {
        if (g < t.length) {
            var S = t[g],
                x = s[S._id];
            if (x === undefined) n.added && n.added(o(S), g + y.length);
            else {
                var T = e[x],
                    N = u[g];
                if (N) x < m && Meteor._debug("Assertion failed while diffing: nonmonotonic lcs data"), E(x), n.changed && !_.isEqual(T, S) && n.changed(o(S), g + y.length, T), m++;
                else {
                    var C = g + y.length,
                        k;
                    if (x >= m) {
                        k = C + x - m;
                        var L = _.sortedIndex(w, x);
                        k -= L, w.splice(L, 0, x)
                    } else {
                        var A = _.indexOf(b, x, !0);
                        A < 0 && Meteor._debug("Assertion failed while diffing: no bumped item"), k = y[A] + A, C--, y.splice(A, 1), b.splice(A, 1)
                    }
                    k != C && n.moved && n.moved(o(T), k, C), n.changed && !_.isEqual(T, S) && n.changed(o(S), C, T)
                }
            }
        } else E(e.length);
        g++
    }
    y.length > 0 && (Meteor._debug(e), Meteor._debug(t), Meteor._debug("Assertion failed while diffing: leftover bump_list " + y))
}, LocalCollection._diffQueryUnordered = function (e, t, n, r) {
    if (n.moved) throw new Error("_diffQueryUnordered called with a moved observer!");
    var i = r ? LocalCollection._deepcopy : _.identity;
    _.each(t, function (t) {
        if (_.has(e, t._id)) {
            var r = e[t._id];
            n.changed && !_.isEqual(r, t) && n.changed(i(t), r)
        } else n.added && n.added(i(t))
    }), n.removed && _.each(e, function (e) {
        _.has(t, e._id) || n.removed(e)
    })
};
Meteor._MethodInvocation = function (e) {
    var t = this;
    this.isSimulation = e.isSimulation, this.is_simulation = this.isSimulation, this.unblock = e.unblock || function () {}, this.userId = e.userId, this._setUserId = e.setUserId || function () {}, this._sessionData = e.sessionData
}, _.extend(Meteor._MethodInvocation.prototype, {
    setUserId: function (e) {
        this.userId = e, this._setUserId(e)
    }
}), Meteor._CurrentInvocation = new Meteor.EnvironmentVariable, Meteor.Error = function (e, t, n) {
    var r = this;
    r.error = e, r.reason = t, r.details = n
}, Meteor.Error.prototype = new Error;
(function () {
    if (Meteor.isServer) var e = __meteor_bootstrap__.require(path.join("fibers", "future"));
    var t = null;
    Meteor._LivedataConnection = function (e, t) {
        var n = this;
        t = _.extend({
            reloadOnUpdate: !1,
            reloadWithOutstanding: !1
        }, t), n.onReconnect = null, typeof e == "object" ? (n._stream = e, e = "/debug") : n._stream = new Meteor._Stream(e), n._lastSessionId = null, n._stores = {}, n._methodHandlers = {}, n._nextMethodId = 1, n._methodInvokers = {}, n._outstandingMethodBlocks = [], n._documentsWrittenByStub = {}, n._serverDocuments = {}, n._afterUpdateCallbacks = [], n._messagesBufferedUntilQuiescence = [], n._methodsBlockingQuiescence = {}, n._subsBeingRevived = {}, n._resetStores = !1, n._updatesForUnknownStores = {}, n._retryMigrate = null, n._subCollection = new LocalCollection, n._subReadyCallbacks = {}, n._sessionData = {}, n._userId = null, n._userIdListeners = Meteor.deps && new Meteor.deps._ContextSet, t.reloadWithOutstanding || Meteor._reload.onMigrate(function (e) {
            if (!n._readyToMigrate()) {
                if (n._retryMigrate) throw new Error("Two migrations in progress?");
                return n._retryMigrate = e, !1
            }
            return [!0]
        }), n._stream.on("message", function (e) {
            try {
                var t = JSON.parse(e)
            } catch (r) {
                Meteor._debug("discarding message with invalid JSON", e);
                return
            }
            if (typeof t != "object" || !t.msg) {
                Meteor._debug("discarding invalid livedata message", t);
                return
            }
            t.msg === "connected" ? n._livedata_connected(t) : t.msg === "data" ? n._livedata_data(t) : t.msg === "nosub" ? n._livedata_nosub(t) : t.msg === "result" ? n._livedata_result(t) : t.msg === "error" ? n._livedata_error(t) : Meteor._debug("discarding unknown livedata message type", t)
        }), n._stream.on("reset", function () {
            var e = {
                msg: "connect"
            };
            n._lastSessionId && (e.session = n._lastSessionId), n._stream.send(JSON.stringify(e)), !_.isEmpty(n._outstandingMethodBlocks) && _.isEmpty(n._outstandingMethodBlocks[0].methods) && n._outstandingMethodBlocks.shift(), n.onReconnect ? n._callOnReconnectAndSendAppropriateOutstandingMethods() : n._sendOutstandingMethods(), n._subCollection.find().forEach(function (e) {
                n._stream.send(JSON.stringify({
                    msg: "sub",
                    id: e._id,
                    name: e.name,
                    params: e.args
                }))
            })
        }), t.reloadOnUpdate && n._stream.on("update_available", function () {
            Meteor._reload.reload()
        }), n._subCollection.find({})._observeUnordered({
            added: function (e) {
                n._stream.send(JSON.stringify({
                    msg: "sub",
                    id: e._id,
                    name: e.name,
                    params: e.args
                }))
            },
            changed: function (e) {
                e.count <= 0 && _.defer(function () {
                    n._subCollection.remove({
                        _id: e._id
                    })
                })
            },
            removed: function (e) {
                n._stream.send(JSON.stringify({
                    msg: "unsub",
                    id: e._id
                }))
            }
        })
    };
    var n = function (e) {
        var t = this;
        t.methodId = e.methodId, t.sentMessage = !1, t._callback = e.callback, t._connection = e.connection, t._message = JSON.stringify(e.message), t._onResultReceived = e.onResultReceived || function () {}, t._wait = e.wait, t._methodResult = null, t._dataVisible = !1, t._connection._methodInvokers[t.methodId] = t
    };
    _.extend(n.prototype, {
        sendMessage: function () {
            var e = this;
            if (e.gotResult()) throw new Error("sendingMethod is called on method with result");
            e._dataVisible = !1, e.sentMessage = !0, e._wait && (e._connection._methodsBlockingQuiescence[e.methodId] = !0), e._connection._stream.send(e._message)
        },
        _maybeInvokeCallback: function () {
            var e = this;
            e._methodResult && e._dataVisible && (e._callback(e._methodResult[0], e._methodResult[1]), delete e._connection._methodInvokers[e.methodId], e._connection._outstandingMethodFinished())
        },
        receiveResult: function (e, t) {
            var n = this;
            if (n.gotResult()) throw new Error("Methods should only receive results once");
            n._methodResult = [e, t], n._onResultReceived(e, t), n._maybeInvokeCallback()
        },
        dataVisible: function () {
            var e = this;
            e._dataVisible = !0, e._maybeInvokeCallback()
        },
        gotResult: function () {
            var e = this;
            return !!e._methodResult
        }
    }), _.extend(Meteor._LivedataConnection.prototype, {
        registerStore: function (e, t) {
            var n = this;
            if (e in n._stores) return !1;
            var r = {};
            _.each(["update", "beginUpdate", "endUpdate", "saveOriginals", "retrieveOriginals"], function (e) {
                r[e] = function () {
                    return t[e] ? t[e].apply(t, arguments) : undefined
                }
            }), n._stores[e] = r;
            var i = n._updatesForUnknownStores[e];
            return i && (r.beginUpdate(i.length, !1), _.each(i, function (e) {
                r.update(e)
            }), r.endUpdate(), delete n._updatesForUnknownStores[e]), !0
        },
        subscribe: function (e) {
            var n = this,
                r, i = Array.prototype.slice.call(arguments, 1);
            if (i.length && typeof i[i.length - 1] == "function") var s = i.pop();
            var o = n._subCollection.find({
                name: e,
                args: i,
                count: {
                    $gt: 0
                }
            }, {
                reactive: !1
            }).fetch();
            o && o[0] ? (r = o[0]._id, n._subCollection.update({
                _id: r
            }, {
                $inc: {
                    count: 1
                }
            }), s && (n._subReadyCallbacks[r] ? n._subReadyCallbacks[r].push(s) : s())) : (r = LocalCollection.uuid(), n._subCollection.insert({
                _id: r,
                name: e,
                args: i,
                count: 1
            }), n._subReadyCallbacks[r] = [], s && n._subReadyCallbacks[r].push(s));
            var u = {
                stop: function () {
                    if (!r) return;
                    n._subCollection.update({
                        _id: r
                    }, {
                        $inc: {
                            count: -1
                        }
                    })
                }
            };
            return t && t.push(u), u
        },
        methods: function (e) {
            var t = this;
            _.each(e, function (e, n) {
                if (t._methodHandlers[n]) throw new Error("A method named '" + n + "' is already defined");
                t._methodHandlers[n] = e
            })
        },
        call: function (e) {
            var t = Array.prototype.slice.call(arguments, 1);
            if (t.length && typeof t[t.length - 1] == "function") var n = t.pop();
            return this.apply(e, t, n)
        },
        apply: function (t, r, i, s) {
            var o = this;
            !s && typeof i == "function" && (s = i, i = {}), i = i || {}, s && (s = Meteor.bindEnvironment(s, function (e) {
                Meteor._debug("Exception while delivering result of invoking '" + t + "'", e.stack)
            }));
            var u = function () {
                var e;
                return function () {
                    return e === undefined && (e = "" + o._nextMethodId++), e
                }
            }();
            if (Meteor.isClient) {
                var a = Meteor._CurrentInvocation.get(),
                    f = a && a.isSimulation,
                    l = o._methodHandlers[t];
                if (l) {
                    var c = function (e) {
                        o.setUserId(e)
                    }, h = new Meteor._MethodInvocation({
                            isSimulation: !0,
                            userId: o.userId(),
                            setUserId: c,
                            sessionData: o._sessionData
                        });
                    f || o._saveOriginals();
                    try {
                        var p = Meteor._CurrentInvocation.withValue(h, function () {
                            return l.apply(h, r)
                        })
                    } catch (d) {
                        var v = d
                    }
                    f || o._retrieveAndStoreOriginals(u())
                }
                if (f) {
                    if (s) return s(v, p), undefined;
                    if (v) throw v;
                    return p
                }
                v && !v.expected && Meteor._debug("Exception while simulating the effect of invoking '" + t + "'", v, v.stack)
            }
            if (!s)
                if (Meteor.isClient) s = function () {};
                else {
                    var m = new e;
                    s = function (e, t) {
                        m["return"]([e, t])
                    }
                }
            var g = new n({
                methodId: u(),
                callback: s,
                connection: o,
                onResultReceived: i.onResultReceived,
                wait: !! i.wait,
                message: {
                    msg: "method",
                    method: t,
                    params: r,
                    id: u()
                }
            });
            i.wait ? o._outstandingMethodBlocks.push({
                wait: !0,
                methods: [g]
            }) : ((_.isEmpty(o._outstandingMethodBlocks) || _.last(o._outstandingMethodBlocks).wait) && o._outstandingMethodBlocks.push({
                wait: !1,
                methods: []
            }), _.last(o._outstandingMethodBlocks).methods.push(g)), o._outstandingMethodBlocks.length === 1 && g.sendMessage();
            if (m) {
                var y = m.wait();
                if (y[0]) throw y[0];
                return y[1]
            }
            return undefined
        },
        _saveOriginals: function () {
            var e = this;
            _.each(e._stores, function (e) {
                e.saveOriginals()
            })
        },
        _retrieveAndStoreOriginals: function (e) {
            var t = this;
            if (t._documentsWrittenByStub[e]) throw new Error("Duplicate methodId in _retrieveAndStoreOriginals");
            var n = [];
            _.each(t._stores, function (r, i) {
                var s = r.retrieveOriginals();
                _.each(s, function (r, s) {
                    n.push({
                        collection: i,
                        id: s
                    });
                    var o = Meteor._ensure(t._serverDocuments, i, s);
                    o.writtenByStubs ? o.writtenByStubs[e] = !0 : (o.document = r, o.flushCallbacks = [], o.writtenByStubs = {}, o.writtenByStubs[e] = !0)
                })
            }), _.isEmpty(n) || (t._documentsWrittenByStub[e] = n)
        },
        status: function () {
            var e = this;
            return e._stream.status.apply(e._stream, arguments)
        },
        reconnect: function () {
            var e = this;
            return e._stream.reconnect.apply(e._stream, arguments)
        },
        userId: function () {
            var e = this;
            return e._userIdListeners && e._userIdListeners.addCurrentContext(), e._userId
        },
        setUserId: function (e) {
            var t = this;
            if (t._userId === e) return;
            t._userId = e, t._userIdListeners && t._userIdListeners.invalidateAll()
        },
        _waitingForQuiescence: function () {
            var e = this;
            return !_.isEmpty(e._subsBeingRevived) || !_.isEmpty(e._methodsBlockingQuiescence)
        },
        _anyMethodsAreOutstanding: function () {
            var e = this;
            return _.any(_.pluck(e._methodInvokers, "sentMessage"))
        },
        _livedata_connected: function (e) {
            var t = this;
            t._lastSessionId && (t._resetStores = !0);
            if (typeof e.session == "string") {
                var n = t._lastSessionId === e.session;
                t._lastSessionId = e.session
            }
            if (n) return;
            t._updatesForUnknownStores = {}, t._documentsWrittenByStub = {}, t._serverDocuments = {}, t._afterUpdateCallbacks = [], t._subsBeingRevived = {}, t._subCollection.find({}).forEach(function (e) {
                t._subReadyCallbacks[e._id] || (t._subsBeingRevived[e._id] = !0)
            }), t._methodsBlockingQuiescence = {}, t._resetStores && _.each(t._methodInvokers, function (e) {
                e.gotResult() ? t._afterUpdateCallbacks.push(_.bind(e.dataVisible, e)) : e.sentMessage && (t._methodsBlockingQuiescence[e.methodId] = !0)
            }), t._messagesBufferedUntilQuiescence = [], t._waitingForQuiescence() || (t._resetStores && (_.each(t._stores, function (e) {
                e.beginUpdate(0, !0), e.endUpdate()
            }), t._resetStores = !1), t._runAfterUpdateCallbacks())
        },
        _livedata_data: function (e) {
            var t = this,
                n = {};
            if (t._waitingForQuiescence()) {
                t._messagesBufferedUntilQuiescence.push(e), _.each(e.subs || [], function (e) {
                    delete t._subsBeingRevived[e]
                }), _.each(e.methods || [], function (e) {
                    delete t._methodsBlockingQuiescence[e]
                });
                if (t._waitingForQuiescence()) return;
                _.each(t._messagesBufferedUntilQuiescence, function (e) {
                    t._processOneDataMessage(e, n)
                }), t._messagesBufferedUntilQuiescence = []
            } else t._processOneDataMessage(e, n); if (t._resetStores || !_.isEmpty(n)) _.each(t._stores, function (e, r) {
                e.beginUpdate(_.has(n, r) ? n[r].length : 0, t._resetStores)
            }), t._resetStores = !1, _.each(n, function (e, n) {
                var r = t._stores[n];
                r ? _.each(e, function (e) {
                    r.update(e)
                }) : (_.has(t._updatesForUnknownStores, n) || (t._updatesForUnknownStores[n] = []), Array.prototype.push.apply(t._updatesForUnknownStores[n], e))
            }), _.each(t._stores, function (e) {
                e.endUpdate()
            });
            t._runAfterUpdateCallbacks()
        },
        _runAfterUpdateCallbacks: function () {
            var e = this;
            _.each(e._afterUpdateCallbacks, function (e) {
                e()
            }), e._afterUpdateCallbacks = []
        },
        _processOneDataMessage: function (e, t) {
            var n = this;
            if (e.collection && e.id) {
                var r = Meteor._get(n._serverDocuments, e.collection, e.id);
                r ? (r.document && _.each(e.unset, function (e) {
                    delete r.document[e]
                }), _.each(e.set, function (e, t) {
                    r.document || (r.document = {}), r.document[t] = e
                }), r.document && _.isEmpty(_.without(_.keys(r.document), "_id")) && delete r.document) : (t[e.collection] || (t[e.collection] = []), t[e.collection].push(e))
            }
            _.each(e.methods, function (e) {
                _.each(n._documentsWrittenByStub[e], function (r) {
                    var i = Meteor._get(n._serverDocuments, r.collection, r.id);
                    if (!i) throw new Error("Lost serverDoc for " + JSON.stringify(r));
                    if (!i.writtenByStubs[e]) throw new Error("Doc " + JSON.stringify(r) + " not written by  method " + e);
                    delete i.writtenByStubs[e], _.isEmpty(i.writtenByStubs) && (t[r.collection] || (t[r.collection] = []), t[r.collection].push({
                        id: r.id,
                        replace: i.document
                    }), _.each(i.flushCallbacks, function (e) {
                        e()
                    }), delete n._serverDocuments[r.collection][r.id])
                }), delete n._documentsWrittenByStub[e];
                var r = n._methodInvokers[e];
                if (!r) throw new Error("No callback invoker for method " + e);
                n._runWhenAllServerDocsAreFlushed(_.bind(r.dataVisible, r))
            }), _.each(e.subs, function (e) {
                n._runWhenAllServerDocsAreFlushed(function () {
                    _.each(n._subReadyCallbacks[e], function (e) {
                        e()
                    }), delete n._subReadyCallbacks[e]
                })
            })
        },
        _runWhenAllServerDocsAreFlushed: function (e) {
            var t = this,
                n = function () {
                    t._afterUpdateCallbacks.push(e)
                }, r = 0,
                i = function () {
                    --r, r === 0 && n()
                };
            _.each(t._serverDocuments, function (e) {
                _.each(e, function (e) {
                    ++r, e.flushCallbacks.push(i)
                })
            }), r === 0 && n()
        },
        _livedata_nosub: function (e) {
            var t = this
        },
        _livedata_result: function (e) {
            var t = this;
            if (_.isEmpty(t._outstandingMethodBlocks)) {
                Meteor._debug("Received method result but no methods outstanding");
                return
            }
            var n = t._outstandingMethodBlocks[0].methods,
                r;
            for (var i = 0; i < n.length; i++) {
                r = n[i];
                if (r.methodId === e.id) break
            }
            if (!r) {
                Meteor._debug("Can't match method response to original method call", e);
                return
            }
            n.splice(i, 1), _.has(e, "error") ? r.receiveResult(new Meteor.Error(e.error.error, e.error.reason, e.error.details)) : r.receiveResult(undefined, e.result)
        },
        _outstandingMethodFinished: function () {
            var e = this;
            if (e._anyMethodsAreOutstanding()) return;
            if (!_.isEmpty(e._outstandingMethodBlocks)) {
                var t = e._outstandingMethodBlocks.shift();
                if (!_.isEmpty(t.methods)) throw new Error("No methods outstanding but nonempty block: " + JSON.stringify(t));
                _.isEmpty(e._outstandingMethodBlocks) || e._sendOutstandingMethods()
            }
            e._maybeMigrate()
        },
        _sendOutstandingMethods: function () {
            var e = this;
            if (_.isEmpty(e._outstandingMethodBlocks)) return;
            _.each(e._outstandingMethodBlocks[0].methods, function (e) {
                e.sendMessage()
            })
        },
        _livedata_error: function (e) {
            Meteor._debug("Received error from server: ", e.reason), e.offending_message && Meteor._debug("For: ", e.offending_message)
        },
        _callOnReconnectAndSendAppropriateOutstandingMethods: function () {
            var e = this,
                t = e._outstandingMethodBlocks;
            e._outstandingMethodBlocks = [], e.onReconnect();
            if (_.isEmpty(t)) return;
            if (_.isEmpty(e._outstandingMethodBlocks)) {
                e._outstandingMethodBlocks = t, e._sendOutstandingMethods();
                return
            }!_.last(e._outstandingMethodBlocks).wait && !t[0].wait && (_.each(t[0].methods, function (t) {
                _.last(e._outstandingMethodBlocks).methods.push(t), e._outstandingMethodBlocks.length === 1 && t.sendMessage()
            }), t.shift()), _.each(t, function (t) {
                e._outstandingMethodBlocks.push(t)
            })
        },
        _readyToMigrate: function () {
            var e = this;
            return _.isEmpty(e._methodInvokers)
        },
        _maybeMigrate: function () {
            var e = this;
            e._retryMigrate && e._readyToMigrate() && (e._retryMigrate(), e._retryMigrate = null)
        }
    }), _.extend(Meteor, {
        connect: function (e, t) {
            var n = new Meteor._LivedataConnection(e, {
                reloadOnUpdate: t
            });
            return Meteor._LivedataConnection._allConnections.push(n), n
        },
        autosubscribe: function (e) {
            var n = [],
                r = new Meteor.deps.Context;
            r.onInvalidate(function () {
                Meteor.autosubscribe(e), _.each(n, function (e) {
                    e.stop()
                })
            }), r.run(function () {
                if (t) throw new Error("Meteor.autosubscribe may not be called recursively");
                t = [];
                try {
                    e()
                } finally {
                    n = t, t = null
                }
            })
        }
    }), Meteor._LivedataConnection._allConnections = [], Meteor._LivedataConnection._allSubscriptionsReady = function () {
        return _.all(Meteor._LivedataConnection._allConnections, function (e) {
            for (var t in e._subReadyCallbacks) return !1;
            return !0
        })
    }
})();
(function () {
    var e = "/";
    typeof __meteor_runtime_config__ != "undefined" && __meteor_runtime_config__.DEFAULT_DDP_ENDPOINT && (e = __meteor_runtime_config__.DEFAULT_DDP_ENDPOINT), _.extend(Meteor, {
        default_connection: Meteor.connect(e, !0),
        refresh: function (e) {}
    }), _.each(["subscribe", "methods", "call", "apply", "status", "reconnect"], function (e) {
        Meteor[e] = _.bind(Meteor.default_connection[e], Meteor.default_connection)
    })
})();
Meteor._LocalCollectionDriver = function () {
    var e = this;
    e.collections = {}
}, _.extend(Meteor._LocalCollectionDriver.prototype, {
    open: function (e) {
        var t = this;
        return e ? (e in t.collections || (t.collections[e] = new LocalCollection), t.collections[e]) : new LocalCollection
    }
}), Meteor._LocalCollectionDriver = new Meteor._LocalCollectionDriver;
Meteor.Collection = function (e, t) {
    var n = this;
    t && t.methods && (t = {
        manager: t
    }), t = _.extend({
        manager: undefined,
        _driver: undefined,
        _preventAutopublish: !1
    }, t), !e && e !== null && Meteor._debug("Warning: creating anonymous collection. It will not be saved or synchronized over the network. (Pass null for the collection name to turn off this warning.)"), n._manager = e && (t.manager || (Meteor.isClient ? Meteor.default_connection : Meteor.default_server)), t._driver || (e && n._manager === Meteor.default_server && Meteor._RemoteCollectionDriver ? t._driver = Meteor._RemoteCollectionDriver : t._driver = Meteor._LocalCollectionDriver), n._collection = t._driver.open(e), n._name = e;
    if (e && n._manager.registerStore) {
        var r = n._manager.registerStore(e, {
            beginUpdate: function (e, t) {
                (e > 1 || t) && n._collection.pauseObservers(), t && n._collection.remove({})
            },
            update: function (e) {
                var t = n._collection.findOne(e.id);
                if (_.has(e, "replace")) {
                    var r = e.replace;
                    r && _.isEmpty(_.without(_.keys(r), "_id")) && (r = undefined), r ? t ? n._collection.update(e.id, r) : n._collection.insert(_.extend({
                        _id: e.id
                    }, r)) : t && n._collection.remove(e.id);
                    return
                }
                if (t && !e.set && _.difference(_.keys(t), e.unset, ["_id"]).length === 0) n._collection.remove(e.id);
                else if (t) {
                    var i = {
                        $set: e.set,
                        $unset: {}
                    };
                    _.each(e.unset, function (e) {
                        i.$unset[e] = 1
                    }), n._collection.update(e.id, i)
                } else e.set && n._collection.insert(_.extend({
                    _id: e.id
                }, e.set))
            },
            endUpdate: function () {
                n._collection.resumeObservers()
            },
            saveOriginals: function () {
                n._collection.saveOriginals()
            },
            retrieveOriginals: function () {
                return n._collection.retrieveOriginals()
            }
        });
        if (!r) throw new Error("There is already a collection named '" + e + "'")
    }
    n._defineMutationMethods(), !t._preventAutopublish && n._manager && n._manager.onAutopublish && n._manager.onAutopublish(function () {
        var e = function () {
            return n.find()
        };
        n._manager.publish(null, e, {
            is_auto: !0
        })
    })
}, _.extend(Meteor.Collection.prototype, {
    find: function () {
        var e = this;
        return e._collection.find.apply(e._collection, _.toArray(arguments))
    },
    findOne: function () {
        var e = this;
        return e._collection.findOne.apply(e._collection, _.toArray(arguments))
    }
}), _.each(["insert", "update", "remove"], function (e) {
    Meteor.Collection.prototype[e] = function () {
        var t = this,
            n = _.toArray(arguments),
            r, i;
        n.length && n[n.length - 1] instanceof Function && (r = n.pop()), Meteor.isClient && !r && (r = function (t) {
            t && Meteor._debug(e + " failed: " + (t.reason || t.stack))
        });
        if (e === "insert") {
            if (!n.length) throw new Error("insert requires an argument");
            n[0] = _.extend({}, n[0]);
            if ("_id" in n[0]) throw new Error("Do not pass an _id to insert. Meteor will generate the _id for you.");
            i = n[0]._id = Meteor.uuid()
        }
        if (t._manager && t._manager !== Meteor.default_server) r ? t._manager.apply(t._prefix + e, n, function (e, t) {
            r(e, !e && i)
        }) : t._manager.apply(t._prefix + e, n);
        else {
            try {
                t._collection[e].apply(t._collection, n)
            } catch (s) {
                if (r) return r(s), null;
                throw s
            }
            r && r(null, i)
        }
        return i
    }
}), Meteor.Collection.prototype._ensureIndex = function (e, t) {
    var n = this;
    if (!n._collection._ensureIndex) throw new Error("Can only call _ensureIndex on server collections");
    n._collection._ensureIndex(e, t)
},
function () {
    var e = function (e, t) {
        var n = ["insert", "update", "remove", "fetch"];
        _.each(_.keys(t), function (t) {
            if (!_.contains(n, t)) throw new Error(e + ": Invalid key: " + t)
        });
        var r = this;
        r._restricted = !0, _.each(["insert", "update", "remove"], function (n) {
            if (t[n]) {
                if (!(t[n] instanceof Function)) throw new Error(e + ": Value for `" + n + "` must be a function");
                r._validators[n][e].push(t[n])
            }
        });
        if (t.update || t.remove || t.fetch) {
            if (!(!t.fetch || t.fetch instanceof Array)) throw new Error(e + ": Value for `fetch` must be an array");
            r._updateFetch(t.fetch)
        }
    };
    Meteor.Collection.prototype.allow = function (t) {
        e.call(this, "allow", t)
    }, Meteor.Collection.prototype.deny = function (t) {
        e.call(this, "deny", t)
    }
}(), Meteor.Collection.prototype._defineMutationMethods = function () {
    var e = this;
    e._restricted = !1, e._insecure = undefined, e._validators = {
        insert: {
            allow: [],
            deny: []
        },
        update: {
            allow: [],
            deny: []
        },
        remove: {
            allow: [],
            deny: []
        },
        fetch: [],
        fetchAllFields: !1
    };
    if (!e._name) return;
    e._prefix = "/" + e._name + "/";
    if (e._manager) {
        var t = {};
        _.each(["insert", "update", "remove"], function (n) {
            t[e._prefix + n] = function () {
                if (this.isSimulation || !e._restricted && e._isInsecure()) e._collection[n].apply(e._collection, _.toArray(arguments));
                else {
                    if (!e._restricted) throw new Meteor.Error(403, "Access denied");
                    if (e._validators[n].allow.length === 0) throw new Meteor.Error(403, "Access denied. No allow validators set on restricted collection.");
                    var t = "_validated" + n.charAt(0).toUpperCase() + n.slice(1),
                        r = [this.userId].concat(_.toArray(arguments));
                    e[t].apply(e, r)
                }
            }
        }), e._manager.methods(t)
    }
}, Meteor.Collection.prototype._updateFetch = function (e) {
    var t = this;
    t._validators.fetchAllFields || (e ? t._validators.fetch = _.union(t._validators.fetch, e) : (t._validators.fetchAllFields = !0, t._validators.fetch = null))
}, Meteor.Collection.prototype._isInsecure = function () {
    var e = this;
    return e._insecure === undefined ? Meteor.Collection.insecure : e._insecure
}, Meteor.Collection.prototype._validatedInsert = function (e, t) {
    var n = this;
    if (_.any(n._validators.insert.deny, function (n) {
        return n(e, t)
    })) throw new Meteor.Error(403, "Access denied");
    if (_.all(n._validators.insert.allow, function (n) {
        return !n(e, t)
    })) throw new Meteor.Error(403, "Access denied");
    n._collection.insert.call(n._collection, t)
}, Meteor.Collection.prototype._validatedUpdate = function (e, t, n, r) {
    var i = this,
        s = [];
    _.each(n, function (e, t) {
        if (t[0] !== "$") throw new Meteor.Error(403, "Access denied. Can't replace document in restricted collection.");
        _.each(_.keys(e), function (e) {
            e.indexOf(".") !== -1 && (e = e.substring(0, e.indexOf("."))), _.contains(s, e) || s.push(e)
        })
    });
    var o = {};
    i._validators.fetchAllFields || (o.fields = {}, _.each(i._validators.fetch, function (e) {
        o.fields[e] = 1
    }));
    var u;
    if (r && r.multi) {
        u = i._collection.find(t, o).fetch();
        if (u.length === 0) return
    } else {
        var a = i._collection.findOne(t, o);
        if (!a) return;
        u = [a]
    } if (_.any(i._validators.update.deny, function (t) {
        return t(e, u, s, n)
    })) throw new Meteor.Error(403, "Access denied");
    if (_.all(i._validators.update.allow, function (t) {
        return !t(e, u, s, n)
    })) throw new Meteor.Error(403, "Access denied");
    var f = {};
    f.$in = _.map(u, function (e) {
        return e._id
    });
    var l = {
        _id: f
    }, c;
    if (LocalCollection._selectorIsId(t)) {
        if (u.length !== 1 || u[0]._id !== t) throw new Error("Lookup by ID " + t + " found something else");
        c = t
    } else c = {
        $and: [t, l]
    };
    i._collection.update.call(i._collection, c, n, r)
}, Meteor.Collection.prototype._validatedRemove = function (e, t) {
    var n = this,
        r = {};
    n._validators.fetchAllFields || (r.fields = {}, _.each(n._validators.fetch, function (e) {
        r.fields[e] = 1
    }));
    var i = n._collection.find(t, r).fetch();
    if (i.length === 0) return;
    if (_.any(n._validators.remove.deny, function (t) {
        return t(e, i)
    })) throw new Meteor.Error(403, "Access denied");
    if (_.all(n._validators.remove.allow, function (t) {
        return !t(e, i)
    })) throw new Meteor.Error(403, "Access denied");
    var s = {};
    s.$in = _.map(i, function (e) {
        return e._id
    });
    var o = {
        _id: s
    };
    n._collection.remove.call(n._collection, o)
};
(function (e, t) {
    function _(e) {
        var t = M[e] = {};
        return v.each(e.split(y), function (e, n) {
            t[n] = !0
        }), t
    }

    function H(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r
                } catch (s) {}
                v.data(e, n, r)
            } else r = t
        }
        return r
    }

    function B(e) {
        var t;
        for (t in e) {
            if (t === "data" && v.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function et() {
        return !1
    }

    function tt() {
        return !0
    }

    function ut(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }

    function at(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function ft(e, t, n) {
        t = t || 0;
        if (v.isFunction(t)) return v.grep(e, function (e, r) {
            var i = !! t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return v.grep(e, function (e, r) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = v.grep(e, function (e) {
                return e.nodeType === 1
            });
            if (it.test(t)) return v.filter(t, r, !n);
            t = v.filter(t, r)
        }
        return v.grep(e, function (e, r) {
            return v.inArray(e, t) >= 0 === n
        })
    }

    function lt(e) {
        var t = ct.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function At(e, t) {
        if (t.nodeType !== 1 || !v.hasData(e)) return;
        var n, r, i, s = v._data(e),
            o = v._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)
                for (r = 0, i = u[n].length; r < i; r++) v.event.add(t, n, u[n][r])
        }
        o.data && (o.data = v.extend({}, o.data))
    }

    function Ot(e, t) {
        var n;
        if (t.nodeType !== 1) return;
        t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando)
    }

    function Mt(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }

    function _t(e) {
        Et.test(e.type) && (e.defaultChecked = e.checked)
    }

    function Qt(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = Jt.length;
        while (i--) {
            t = Jt[i] + n;
            if (t in e) return t
        }
        return r
    }

    function Gt(e, t) {
        return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e)
    }

    function Yt(e, t) {
        var n, r, i = [],
            s = 0,
            o = e.length;
        for (; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r))
        }
        for (s = 0; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none"
        }
        return e
    }

    function Zt(e, t, n) {
        var r = Rt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function en(e, t, n, r) {
        var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            s = 0;
        for (; i < 4; i += 2) n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
        return s
    }

    function tn(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight,
            i = !0,
            s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
        if (r <= 0 || r == null) {
            r = Dt(e, t);
            if (r < 0 || r == null) r = e.style[t];
            if (Ut.test(r)) return r;
            i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + en(e, t, n || (s ? "border" : "content"), i) + "px"
    }

    function nn(e) {
        if (Wt[e]) return Wt[e];
        var t = v("<" + e + ">").appendTo(i.body),
            n = t.css("display");
        t.remove();
        if (n === "none" || n === "") {
            Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!Ht || !Pt.createElement) Ht = (Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();
            t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt)
        }
        return Wt[e] = n, n
    }

    function fn(e, t, n, r) {
        var i;
        if (v.isArray(t)) v.each(t, function (t, i) {
            n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && v.type(t) === "object")
            for (i in t) fn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function Cn(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i, s, o = t.toLowerCase().split(y),
                u = 0,
                a = o.length;
            if (v.isFunction(n))
                for (; u < a; u++) r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n)
        }
    }

    function kn(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u, a = e[s],
            f = 0,
            l = a ? a.length : 0,
            c = e === Sn;
        for (; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));
        return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u
    }

    function Ln(e, n) {
        var r, i, s = v.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && v.extend(!0, e, i)
    }

    function An(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes,
            l = e.responseFields;
        for (s in l) s in r && (n[l[s]] = r[s]);
        while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i)
            for (s in a)
                if (a[s] && a[s].test(i)) {
                    f.unshift(s);
                    break
                }
        if (f[0] in r) o = f[0];
        else {
            for (s in r) {
                if (!f[0] || e.converters[s + " " + f[0]]) {
                    o = s;
                    break
                }
                u || (u = s)
            }
            o = o || u
        } if (o) return o !== f[0] && f.unshift(o), r[o]
    }

    function On(e, t) {
        var n, r, i, s, o = e.dataTypes.slice(),
            u = o[0],
            a = {}, f = 0;
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (o[1])
            for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
        for (; i = o[++f];)
            if (i !== "*") {
                if (u !== "*" && u !== i) {
                    n = a[u + " " + i] || a["* " + i];
                    if (!n)
                        for (r in a) {
                            s = r.split(" ");
                            if (s[1] === i) {
                                n = a[u + " " + s[0]] || a["* " + s[0]];
                                if (n) {
                                    n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
                                    break
                                }
                            }
                        }
                    if (n !== !0)
                        if (n && e["throws"]) t = n(t);
                        else try {
                            t = n(t)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: n ? l : "No conversion from " + u + " to " + i
                            }
                        }
                }
                u = i
            }
        return {
            state: "success",
            data: t
        }
    }

    function Fn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function In() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function $n() {
        return setTimeout(function () {
            qn = t
        }, 0), qn = v.now()
    }

    function Jn(e, t) {
        v.each(t, function (t, n) {
            var r = (Vn[t] || []).concat(Vn["*"]),
                i = 0,
                s = r.length;
            for (; i < s; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function Kn(e, t, n) {
        var r, i = 0,
            s = 0,
            o = Xn.length,
            u = v.Deferred().always(function () {
                delete a.elem
            }),
            a = function () {
                var t = qn || $n(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = 1 - (n / f.duration || 0),
                    i = 0,
                    s = f.tweens.length;
                for (; i < s; i++) f.tweens[i].run(r);
                return u.notifyWith(e, [f, r, n]), r < 1 && s ? n : (u.resolveWith(e, [f]), !1)
            }, f = u.promise({
                elem: e,
                props: v.extend({}, t),
                opts: v.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: qn || $n(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n, r) {
                    var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        Qn(l, f.opts.specialEasing);
        for (; i < o; i++) {
            r = Xn[i].call(f, e, l, f.opts);
            if (r) return r
        }
        return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
            anim: f,
            queue: f.opts.queue,
            elem: e
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function Qn(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function Gn(e, t, n) {
        var r, i, s, o, u, a, f, l, c = this,
            h = e.style,
            p = {}, d = [],
            m = e.nodeType && Gt(e);
        n.queue || (f = v._queueHooks(e, "fx"), f.unqueued == null && (f.unqueued = 0, l = f.empty.fire, f.empty.fire = function () {
            f.unqueued || l()
        }), f.unqueued++, c.always(function () {
            c.always(function () {
                f.unqueued--, v.queue(e, "fx").length || f.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? h.display = "inline-block" : h.zoom = 1)), n.overflow && (h.overflow = "hidden", v.support.shrinkWrapBlocks || c.done(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (r in t) {
            s = t[r];
            if (Un.exec(s)) {
                delete t[r];
                if (s === (m ? "hide" : "show")) continue;
                d.push(r)
            }
        }
        o = d.length;
        if (o) {
            u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), m ? v(e).show() : c.done(function () {
                v(e).hide()
            }), c.done(function () {
                var t;
                v.removeData(e, "fxshow", !0);
                for (t in p) v.style(e, t, p[t])
            });
            for (r = 0; r < o; r++) i = d[r], a = c.createTween(i, m ? u[i] : 0), p[i] = u[i] || v.style(e, i), i in u || (u[i] = a.start, m && (a.end = a.start, a.start = i === "width" || i === "height" ? 1 : 0))
        }
    }

    function Yn(e, t, n, r, i) {
        return new Yn.prototype.init(e, t, n, r, i)
    }

    function Zn(e, t) {
        var n, r = {
                height: e
            }, i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = $t[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function tr(e) {
        return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = e.document,
        s = e.location,
        o = e.navigator,
        u = e.jQuery,
        a = e.$,
        f = Array.prototype.push,
        l = Array.prototype.slice,
        c = Array.prototype.indexOf,
        h = Object.prototype.toString,
        p = Object.prototype.hasOwnProperty,
        d = String.prototype.trim,
        v = function (e, t) {
            return new v.fn.init(e, t, n)
        }, m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        g = /\S/,
        y = /\s+/,
        b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^[\],:{}\s]*$/,
        x = /(?:^|:|,)(?:\s*\[)+/g,
        T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        C = /^-ms-/,
        k = /-([\da-z])/gi,
        L = function (e, t) {
            return (t + "").toUpperCase()
        }, A = function () {
            i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready())
        }, O = {};
    v.fn = v.prototype = {
        constructor: v,
        init: function (e, n, r) {
            var s, o, u, a;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
                if (s && (s[1] || !n)) {
                    if (s[1]) return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e);
                    o = i.getElementById(s[2]);
                    if (o && o.parentNode) {
                        if (o.id !== s[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = i, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return l.call(this)
        },
        get: function (e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function (e, t, n) {
            var r = v.merge(this.constructor(), e);
            return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
        },
        each: function (e, t) {
            return v.each(this, e, t)
        },
        ready: function (e) {
            return v.ready.promise().done(e), this
        },
        eq: function (e) {
            return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))
        },
        map: function (e) {
            return this.pushStack(v.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: [].sort,
        splice: [].splice
    }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function () {
        var e, n, r, i, s, o, u = arguments[0] || {}, a = 1,
            f = arguments.length,
            l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++)
            if ((e = arguments[a]) != null)
                for (n in e) {
                    r = u[n], i = e[n];
                    if (u === i) continue;
                    l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i)
                }
            return u
    }, v.extend({
        noConflict: function (t) {
            return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? v.readyWait++ : v.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? --v.readyWait : v.isReady) return;
            if (!i.body) return setTimeout(v.ready, 1);
            v.isReady = !0;
            if (e !== !0 && --v.readyWait > 0) return;
            r.resolveWith(i, [v]), v.fn.trigger && v(i).trigger("ready").off("ready")
        },
        isFunction: function (e) {
            return v.type(e) === "function"
        },
        isArray: Array.isArray || function (e) {
            return v.type(e) === "array"
        },
        isWindow: function (e) {
            return e != null && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return e == null ? String(e) : O[h.call(e)] || "object"
        },
        isPlainObject: function (e) {
            if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e)) return !1;
            try {
                if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || p.call(e, r)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw new Error(e)
        },
        parseHTML: function (e, t, n) {
            var r;
            return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)))
        },
        parseJSON: function (t) {
            if (!t || typeof t != "string") return null;
            t = v.trim(t);
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (S.test(t.replace(T, "@").replace(N, "]").replace(x, ""))) return (new Function("return " + t))();
            v.error("Invalid JSON: " + t)
        },
        parseXML: function (n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r
        },
        noop: function () {},
        globalEval: function (t) {
            t && g.test(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(C, "ms-").replace(k, L)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, n, r) {
            var i, s = 0,
                o = e.length,
                u = o === t || v.isFunction(e);
            if (r) {
                if (u) {
                    for (i in e)
                        if (n.apply(e[i], r) === !1) break
                } else
                    for (; s < o;)
                        if (n.apply(e[s++], r) === !1) break
            } else if (u) {
                for (i in e)
                    if (n.call(e[i], i, e[i]) === !1) break
            } else
                for (; s < o;)
                    if (n.call(e[s], s, e[s++]) === !1) break; return e
        },
        trim: d && !d.call("﻿ ") ? function (e) {
            return e == null ? "" : d.call(e)
        } : function (e) {
            return e == null ? "" : (e + "").replace(b, "")
        },
        makeArray: function (e, t) {
            var n, r = t || [];
            return e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (c) return c.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if (typeof r == "number")
                for (; s < r; s++) e[i++] = n[s];
            else
                while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            n = !! n;
            for (; s < o; s++) r = !! t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function (e, n, r) {
            var i, s, o = [],
                u = 0,
                a = e.length,
                f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
            if (f)
                for (; u < a; u++) i = n(e[u], u, r), i != null && (o[o.length] = i);
            else
                for (s in e) i = n(e[s], s, r), i != null && (o[o.length] = i);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, s;
            return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function () {
                return e.apply(n, i.concat(l.call(arguments)))
            }, s.guid = e.guid = e.guid || v.guid++, s) : t
        },
        access: function (e, n, r, i, s, o, u) {
            var a, f = r == null,
                l = 0,
                c = e.length;
            if (r && typeof r == "object") {
                for (l in r) v.access(e, n, l, r[l], 1, o, i);
                s = 1
            } else if (i !== t) {
                a = u === t && v.isFunction(i), f && (a ? (a = n, n = function (e, t, n) {
                    return a.call(v(e), n)
                }) : (n.call(e, i), n = null));
                if (n)
                    for (; l < c; l++) n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                s = 1
            }
            return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
        },
        now: function () {
            return (new Date).getTime()
        }
    }), v.ready.promise = function (t) {
        if (!r) {
            r = v.Deferred();
            if (i.readyState === "complete") setTimeout(v.ready, 1);
            else if (i.addEventListener) i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1);
            else {
                i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
                var n = !1;
                try {
                    n = e.frameElement == null && i.documentElement
                } catch (s) {}
                n && n.doScroll && function o() {
                    if (!v.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        v.ready()
                    }
                }()
            }
        }
        return r.promise(t)
    }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
        O["[object " + t + "]"] = t.toLowerCase()
    }), n = v(i);
    var M = {};
    v.Callbacks = function (e) {
        e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function (t) {
                n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
                for (; a && u < o; u++)
                    if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
            }, c = {
                add: function () {
                    if (a) {
                        var t = a.length;
                        (function r(t) {
                            v.each(t, function (t, n) {
                                var i = v.type(n);
                                i === "function" && (!e.unique || !c.has(n)) ? a.push(n) : n && n.length && i !== "string" && r(n)
                            })
                        })(arguments), i ? o = a.length : n && (s = t, l(n))
                    }
                    return this
                },
                remove: function () {
                    return a && v.each(arguments, function (e, t) {
                        var n;
                        while ((n = v.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
                    }), this
                },
                has: function (e) {
                    return v.inArray(e, a) > -1
                },
                empty: function () {
                    return a = [], this
                },
                disable: function () {
                    return a = f = n = t, this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return f = t, n || c.disable(), this
                },
                locked: function () {
                    return !f
                },
                fireWith: function (e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return c
    }, v.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", v.Callbacks("once memory"), "resolved"],
                ["reject", "fail", v.Callbacks("once memory"), "rejected"],
                ["notify", "progress", v.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return v.Deferred(function (n) {
                            v.each(t, function (t, r) {
                                var s = r[0],
                                    o = e[t];
                                i[r[1]](v.isFunction(o) ? function () {
                                    var e = o.apply(this, arguments);
                                    e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                                } : n[s])
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return e != null ? v.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, v.each(t, function (e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function () {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t = 0,
                n = l.call(arguments),
                r = n.length,
                i = r !== 1 || e && v.isFunction(e.promise) ? r : 0,
                s = i === 1 ? e : v.Deferred(),
                o = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                }, u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), v.support = function () {
        var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0], r.style.cssText = "top:1px;float:left;opacity:.5";
        if (!n || !n.length) return {};
        s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], t = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !! p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !! r.style.cssFloat,
            checkOn: u.value === "on",
            optSelected: o.selected,
            getSetAttribute: p.className !== "t",
            enctype: !! i.createElement("form").enctype,
            html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: i.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function () {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
        if (p.attachEvent)
            for (l in {
                submit: !0,
                change: !0,
                focusin: !0
            }) f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
        return v(function () {
            var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                a = i.getElementsByTagName("body")[0];
            if (!a) return;
            n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
                width: "4px"
            }).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null
        }), a.removeChild(p), n = r = s = o = u = a = p = null, t
    }();
    var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;
    v.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !! e && !B(e)
        },
        data: function (e, n, r, i) {
            if (!v.acceptData(e)) return;
            var s, o, u = v.expando,
                a = typeof n == "string",
                f = e.nodeType,
                l = f ? v.cache : e,
                c = f ? e[u] : e[u] && u;
            if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
            c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
            if (typeof n == "object" || typeof n == "function") i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
            return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o
        },
        removeData: function (e, t, n) {
            if (!v.acceptData(e)) return;
            var r, i, s, o = e.nodeType,
                u = o ? v.cache : e,
                a = o ? e[v.expando] : v.expando;
            if (!u[a]) return;
            if (t) {
                r = n ? u[a] : u[a].data;
                if (r) {
                    v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                    for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                    if (!(n ? B : v.isEmptyObject)(r)) return
                }
            }
            if (!n) {
                delete u[a].data;
                if (!B(u[a])) return
            }
            o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
        },
        _data: function (e, t, n) {
            return v.data(e, t, n, !0)
        },
        acceptData: function (e) {
            var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), v.fn.extend({
        data: function (e, n) {
            var r, i, s, o, u, a = this[0],
                f = 0,
                l = null;
            if (e === t) {
                if (this.length) {
                    l = v.data(a);
                    if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
                        s = a.attributes;
                        for (u = s.length; f < u; f++) o = s[f].name, o.indexOf("data-") || (o = v.camelCase(o.substring(5)), H(a, o, l[o]));
                        v._data(a, "parsedAttrs", !0)
                    }
                }
                return l
            }
            return typeof e == "object" ? this.each(function () {
                v.data(this, e)
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function (n) {
                if (n === t) return l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
                r[1] = n, this.each(function () {
                    var t = v(this);
                    t.triggerHandler("setData" + i, r), v.data(this, e, n), t.triggerHandler("changeData" + i, r)
                })
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function (e) {
            return this.each(function () {
                v.removeData(this, e)
            })
        }
    }), v.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = v.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = v._queueHooks(e, t),
                o = function () {
                    v.dequeue(e, t)
                };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return v._data(e, n) || v._data(e, n, {
                empty: v.Callbacks("once memory").add(function () {
                    v.removeData(e, t + "queue", !0), v.removeData(e, n, !0)
                })
            })
        }
    }), v.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = v.queue(this, e, n);
                v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                v.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                s = v.Deferred(),
                o = this,
                u = this.length,
                a = function () {
                    --i || s.resolveWith(o, [o])
                };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--) r = v._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var j, F, I, q = /[\t\r\n]/g,
        R = /\r/g,
        U = /^(?:button|input)$/i,
        z = /^(?:button|input|object|select|textarea)$/i,
        W = /^a(?:rea|)$/i,
        X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        V = v.support.getSetAttribute;
    v.fn.extend({
        attr: function (e, t) {
            return v.access(this, v.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                v.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return v.access(this, v.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = v.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, r, i, s, o, u;
            if (v.isFunction(e)) return this.each(function (t) {
                v(this).addClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string") {
                t = e.split(y);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1)
                        if (!i.className && t.length === 1) i.className = e;
                        else {
                            s = " " + i.className + " ";
                            for (o = 0, u = t.length; o < u; o++) s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
                            i.className = v.trim(s)
                        }
                }
            }
            return this
        },
        removeClass: function (e) {
            var n, r, i, s, o, u, a;
            if (v.isFunction(e)) return this.each(function (t) {
                v(this).removeClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(y);
                for (u = 0, a = this.length; u < a; u++) {
                    i = this[u];
                    if (i.nodeType === 1 && i.className) {
                        r = (" " + i.className + " ").replace(q, " ");
                        for (s = 0, o = n.length; s < o; s++)
                            while (r.indexOf(" " + n[s] + " ") >= 0) r = r.replace(" " + n[s] + " ", " ");
                        i.className = e ? v.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return v.isFunction(e) ? this.each(function (n) {
                v(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var i, s = 0,
                        o = v(this),
                        u = t,
                        a = e.split(y);
                    while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean") this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || ""
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
                return
            }
            return i = v.isFunction(e), this.each(function (r) {
                var s, o = v(this);
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function (e) {
                    return e == null ? "" : e + ""
                })), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s
            })
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i, s = e.selectedIndex,
                        o = [],
                        u = e.options,
                        a = e.type === "select-one";
                    if (s < 0) return null;
                    n = a ? s : 0, r = a ? s + 1 : u.length;
                    for (; n < r; n++) {
                        i = u[n];
                        if (i.selected && (v.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !v.nodeName(i.parentNode, "optgroup"))) {
                            t = v(i).val();
                            if (a) return t;
                            o.push(t)
                        }
                    }
                    return a && !o.length && u.length ? v(u[s]).val() : o
                },
                set: function (e, t) {
                    var n = v.makeArray(t);
                    return v(e).find("option").each(function () {
                        this.selected = v.inArray(v(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {},
        attr: function (e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) return;
            if (i && v.isFunction(v.fn[n])) return v(e)[n](r);
            if (typeof e.getAttribute == "undefined") return v.prop(e, n, r);
            u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));
            if (r !== t) {
                if (r === null) {
                    v.removeAttr(e, n);
                    return
                }
                return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r)
            }
            return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
        },
        removeAttr: function (e, t) {
            var n, r, i, s, o = 0;
            if (t && e.nodeType === 1) {
                r = t.split(y);
                for (; o < r.length; o++) i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (U.test(e.nodeName) && e.parentNode) v.error("type property can't be changed");
                    else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function (e, t) {
                    return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null
                },
                set: function (e, t, n) {
                    if (j && v.nodeName(e, "button")) return j.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), F = {
        get: function (e, n) {
            var r, i = v.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            var r;
            return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, V || (I = {
        name: !0,
        id: !0,
        coords: !0
    }, j = v.valHooks.button = {
        get: function (e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
        }
    }, v.each(["width", "height"], function (e, t) {
        v.attrHooks[t] = v.extend(v.attrHooks[t], {
            set: function (e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        })
    }), v.attrHooks.contenteditable = {
        get: j.get,
        set: function (e, t, n) {
            t === "" && (t = "false"), j.set(e, t, n)
        }
    }), v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function (e, n) {
        v.attrHooks[n] = v.extend(v.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }), v.support.style || (v.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function () {
        v.valHooks[this] = {
            get: function (e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), v.each(["radio", "checkbox"], function () {
        v.valHooks[this] = v.extend(v.valHooks[this], {
            set: function (e, t) {
                if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) >= 0
            }
        })
    });
    var $ = /^(?:textarea|input|select)$/i,
        J = /^([^\.]*|)(?:\.(.+)|)$/,
        K = /(?:^|\s)hover(\.\S+|)\b/,
        Q = /^key/,
        G = /^(?:mouse|contextmenu)|click/,
        Y = /^(?:focusinfocus|focusoutblur)$/,
        Z = function (e) {
            return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1")
        };
    v.event = {
        add: function (e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, m, g;
            if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e))) return;
            r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function (e) {
                return typeof v == "undefined" || !! e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments)
            }, u.elem = e), n = v.trim(Z(n)).split(" ");
            for (f = 0; f < n.length; f++) {
                l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = v.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({
                    type: c,
                    origType: l[1],
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: s,
                    needsContext: s && v.expr.match.needsContext.test(s),
                    namespace: h.join(".")
                }, d), m = a[c];
                if (!m) {
                    m = a[c] = [], m.delegateCount = 0;
                    if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                }
                g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0
            }
            e = null
        },
        global: {},
        remove: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v._data(e);
            if (!g || !(h = g.events)) return;
            t = v.trim(Z(t || "")).split(" ");
            for (s = 0; s < t.length; s++) {
                o = J.exec(t[s]) || [], u = a = o[1], f = o[2];
                if (!u) {
                    for (u in h) v.event.remove(e, u + t[s], n, r, !0);
                    continue
                }
                p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (c = 0; c < d.length; c++) m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));
                d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle), delete h[u])
            }
            v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0))
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (n, r, s, o) {
            if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
                var u, a, f, l, c, h, p, d, m, g, y = n.type || n,
                    b = [];
                if (Y.test(y + v.event.triggered)) return;
                y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());
                if ((!s || v.event.customEvent[y]) && !v.event.global[y]) return;
                n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y.indexOf(":") < 0 ? "on" + y : "";
                if (!s) {
                    u = v.cache;
                    for (f in u) u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
                    return
                }
                n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};
                if (p.trigger && p.trigger.apply(s, r) === !1) return;
                m = [
                    [s, p.bindType || y]
                ];
                if (!o && !p.noBubble && !v.isWindow(s)) {
                    g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;
                    for (c = s; l; l = l.parentNode) m.push([l, g]), c = l;
                    c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g])
                }
                for (f = 0; f < m.length && !n.isPropagationStopped(); f++) l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
                return n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result
            }
            return
        },
        dispatch: function (n) {
            n = v.event.fix(n || e.event);
            var r, i, s, o, u, a, f, c, h, p, d = (v._data(this, "events") || {})[n.type] || [],
                m = d.delegateCount,
                g = l.call(arguments),
                y = !n.exclusive && !n.namespace,
                b = v.event.special[n.type] || {}, w = [];
            g[0] = n, n.delegateTarget = this;
            if (b.preDispatch && b.preDispatch.call(this, n) === !1) return;
            if (m && (!n.button || n.type !== "click"))
                for (s = n.target; s != this; s = s.parentNode || this)
                    if (s.disabled !== !0 || n.type !== "click") {
                        u = {}, f = [];
                        for (r = 0; r < m; r++) c = d[r], h = c.selector, u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length), u[h] && f.push(c);
                        f.length && w.push({
                            elem: s,
                            matches: f
                        })
                    }
            d.length > m && w.push({
                elem: this,
                matches: d.slice(m)
            });
            for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
                a = w[r], n.currentTarget = a.elem;
                for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
                    c = a.matches[i];
                    if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) n.data = c.data, n.handleObj = c, o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()))
                }
            }
            return b.postDispatch && b.postDispatch.call(this, n), n.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, s, o, u = n.button,
                    a = n.fromElement;
                return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[v.expando]) return e;
            var t, n, r = e,
                s = v.event.fixHooks[e.type] || {}, o = s.props ? this.props.concat(s.props) : this.props;
            e = v.Event(r);
            for (t = o.length; t;) n = o[--t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (e, t, n) {
                    v.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = v.extend(new v.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
    }, v.Event = function (e, t) {
        if (!(this instanceof v.Event)) return new v.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0
    }, v.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = tt;
            var e = this.originalEvent;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function () {
            this.isPropagationStopped = tt;
            var e = this.originalEvent;
            if (!e) return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = tt, this.stopPropagation()
        },
        isDefaultPrevented: et,
        isPropagationStopped: et,
        isImmediatePropagationStopped: et
    }, v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        v.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj,
                    o = s.selector;
                if (!i || i !== r && !v.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }
        }
    }), v.support.submitBubbles || (v.event.special.submit = {
        setup: function () {
            if (v.nodeName(this, "form")) return !1;
            v.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
                r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), v._data(r, "_submit_attached", !0))
            })
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            if (v.nodeName(this, "form")) return !1;
            v.event.remove(this, "._submit")
        }
    }), v.support.changeBubbles || (v.event.special.change = {
        setup: function () {
            if ($.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") v.event.add(this, "propertychange._change", function (e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), v.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0)
                });
                return !1
            }
            v.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function (e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0)
                }), v._data(t, "_change_attached", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return v.event.remove(this, "._change"), !$.test(this.nodeName)
        }
    }), v.support.focusinBubbles || v.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                v.event.simulate(t, e.target, v.event.fix(e), !0)
            };
        v.event.special[t] = {
            setup: function () {
                n++ === 0 && i.addEventListener(e, r, !0)
            },
            teardown: function () {
                --n === 0 && i.removeEventListener(e, r, !0)
            }
        }
    }), v.fn.extend({
        on: function (e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (u in e) this.on(u, n, r, e[u], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = et;
            else if (!i) return this;
            return s === 1 && (o = i, i = function (e) {
                return v().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function () {
                v.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if (typeof e == "object") {
                for (s in e) this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function") r = n, n = t;
            return r === !1 && (r = et), this.each(function () {
                v.event.remove(this, e, r, n)
            })
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        live: function (e, t, n) {
            return v(this.context).on(e, this.selector, t, n), this
        },
        die: function (e, t) {
            return v(this.context).off(e, this.selector || "**", t), this
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function (e, t) {
            return this.each(function () {
                v.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            if (this[0]) return v.event.trigger(e, t, this[0], !0)
        },
        toggle: function (e) {
            var t = arguments,
                n = e.guid || v.guid++,
                r = 0,
                i = function (n) {
                    var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
                    return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                };
            i.guid = n;
            while (r < t.length) t[r++].guid = n;
            return this.click(i)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        v.fn[t] = function (e, n) {
            return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks)
    }),
    function (e, t) {
        function nt(e, t, n, r) {
            n = n || [], t = t || g;
            var i, s, a, f, l = t.nodeType;
            if (!e || typeof e != "string") return n;
            if (l !== 1 && l !== 9) return [];
            a = o(t);
            if (!a && !r)
                if (i = R.exec(e))
                    if (f = i[1]) {
                        if (l === 9) {
                            s = t.getElementById(f);
                            if (!s || !s.parentNode) return n;
                            if (s.id === f) return n.push(s), n
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f) return n.push(s), n
                    } else {
                        if (i[2]) return S.apply(n, x.call(t.getElementsByTagName(e), 0)), n;
                        if ((f = i[3]) && Z && t.getElementsByClassName) return S.apply(n, x.call(t.getElementsByClassName(f), 0)), n
                    }
            return vt(e.replace(j, "$1"), t, n, r, a)
        }

        function rt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }

        function it(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }

        function st(e) {
            return N(function (t) {
                return t = +t, N(function (n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ot(e, t, n) {
            if (e === t) return n;
            var r = e.nextSibling;
            while (r) {
                if (r === t) return -1;
                r = r.nextSibling
            }
            return 1
        }

        function ut(e, t) {
            var n, r, s, o, u, a, f, l = L[d][e];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = i.preFilter;
            while (u) {
                if (!n || (r = F.exec(u))) r && (u = u.slice(r[0].length)), a.push(s = []);
                n = !1;
                if (r = I.exec(u)) s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = r[0].replace(j, " ");
                for (o in i.filter)(r = J[o].exec(u)) && (!f[o] || (r = f[o](r, g, !0))) && (s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = o, n.matches = r);
                if (!n) break
            }
            return t ? u.length : u ? nt.error(e) : L(e, a).slice(0)
        }

        function at(e, t, r) {
            var i = t.dir,
                s = r && t.dir === "parentNode",
                o = w++;
            return t.first ? function (t, n, r) {
                while (t = t[i])
                    if (s || t.nodeType === 1) return e(t, n, r)
            } : function (t, r, u) {
                if (!u) {
                    var a, f = b + " " + o + " ",
                        l = f + n;
                    while (t = t[i])
                        if (s || t.nodeType === 1) {
                            if ((a = t[d]) === l) return t.sizset;
                            if (typeof a == "string" && a.indexOf(f) === 0) {
                                if (t.sizset) return t
                            } else {
                                t[d] = l;
                                if (e(t, r, u)) return t.sizset = !0, t;
                                t.sizset = !1
                            }
                        }
                } else
                    while (t = t[i])
                        if (s || t.nodeType === 1)
                            if (e(t, r, u)) return t
            }
        }

        function ft(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function lt(e, t, n, r, i) {
            var s, o = [],
                u = 0,
                a = e.length,
                f = t != null;
            for (; u < a; u++)
                if (s = e[u])
                    if (!n || n(s, r, i)) o.push(s), f && t.push(u);
            return o
        }

        function ct(e, t, n, r, i, s) {
            return r && !r[d] && (r = ct(r)), i && !i[d] && (i = ct(i, s)), N(function (s, o, u, a) {
                if (s && i) return;
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || dt(t || "*", u.nodeType ? [u] : u, [], s),
                    m = e && (s || !t) ? lt(v, h, e, u, a) : v,
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    c = lt(g, p), r(c, [], u, a), f = c.length;
                    while (f--)
                        if (l = c[f]) g[p[f]] = !(m[p[f]] = l)
                }
                if (s) {
                    f = e && g.length;
                    while (f--)
                        if (l = g[f]) s[h[f]] = !(o[h[f]] = l)
                } else g = lt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : S.apply(o, g)
            })
        }

        function ht(e) {
            var t, n, r, s = e.length,
                o = i.relative[e[0].type],
                u = o || i.relative[" "],
                a = o ? 1 : 0,
                f = at(function (e) {
                    return e === t
                }, u, !0),
                l = at(function (e) {
                    return T.call(t, e) > -1
                }, u, !0),
                h = [
                    function (e, n, r) {
                        return !o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r))
                    }
                ];
            for (; a < s; a++)
                if (n = i.relative[e[a].type]) h = [at(ft(h), n)];
                else {
                    n = i.filter[e[a].type].apply(null, e[a].matches);
                    if (n[d]) {
                        r = ++a;
                        for (; r < s; r++)
                            if (i.relative[e[r].type]) break;
                        return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""))
                    }
                    h.push(n)
                }
            return ft(h)
        }

        function pt(e, t) {
            var r = t.length > 0,
                s = e.length > 0,
                o = function (u, a, f, l, h) {
                    var p, d, v, m = [],
                        y = 0,
                        w = "0",
                        x = u && [],
                        T = h != null,
                        N = c,
                        C = u || s && i.find.TAG("*", h && a.parentNode || a),
                        k = b += N == null ? 1 : Math.E;
                    T && (c = a !== g && a, n = o.el);
                    for (;
                        (p = C[w]) != null; w++) {
                        if (s && p) {
                            for (d = 0; v = e[d]; d++)
                                if (v(p, a, f)) {
                                    l.push(p);
                                    break
                                }
                            T && (b = k, n = ++o.el)
                        }
                        r && ((p = !v && p) && y--, u && x.push(p))
                    }
                    y += w;
                    if (r && w !== y) {
                        for (d = 0; v = t[d]; d++) v(x, m, a, f);
                        if (u) {
                            if (y > 0)
                                while (w--)!x[w] && !m[w] && (m[w] = E.call(l));
                            m = lt(m)
                        }
                        S.apply(l, m), T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l)
                    }
                    return T && (b = k, c = N), x
                };
            return o.el = 0, r ? N(o) : o
        }

        function dt(e, t, n, r) {
            var i = 0,
                s = t.length;
            for (; i < s; i++) nt(e, t[i], n, r);
            return n
        }

        function vt(e, t, n, r, s) {
            var o, u, f, l, c, h = ut(e),
                p = h.length;
            if (!r && h.length === 1) {
                u = h[0] = h[0].slice(0);
                if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
                    t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];
                    if (!t) return n;
                    e = e.slice(u.shift().length)
                }
                for (o = J.POS.test(e) ? -1 : u.length - 1; o >= 0; o--) {
                    f = u[o];
                    if (i.relative[l = f.type]) break;
                    if (c = i.find[l])
                        if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
                            u.splice(o, 1), e = r.length && u.join("");
                            if (!e) return S.apply(n, x.call(r, 0)), n;
                            break
                        }
                }
            }
            return a(e, h)(r, t, s, n, z.test(e)), n
        }

        function mt() {}
        var n, r, i, s, o, u, a, f, l, c, h = !0,
            p = "undefined",
            d = ("sizcache" + Math.random()).replace(".", ""),
            m = String,
            g = e.document,
            y = g.documentElement,
            b = 0,
            w = 0,
            E = [].pop,
            S = [].push,
            x = [].slice,
            T = [].indexOf || function (e) {
                var t = 0,
                    n = this.length;
                for (; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            }, N = function (e, t) {
                return e[d] = t == null || t, e
            }, C = function () {
                var e = {}, t = [];
                return N(function (n, r) {
                    return t.push(n) > i.cacheLength && delete e[t.shift()], e[n] = r
                }, e)
            }, k = C(),
            L = C(),
            A = C(),
            O = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
            _ = M.replace("w", "w#"),
            D = "([*^$|!~]?=)",
            P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]",
            H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)",
            B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)",
            j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
            F = new RegExp("^" + O + "*," + O + "*"),
            I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"),
            q = new RegExp(H),
            R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
            U = /^:not/,
            z = /[\x20\t\r\n\f]*[+~]/,
            W = /:not\($/,
            X = /h\d/i,
            V = /input|select|textarea|button/i,
            $ = /\\(?!\\)/g,
            J = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + H),
                POS: new RegExp(B, "i"),
                CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                needsContext: new RegExp("^" + O + "*[>+~]|" + B, "i")
            }, K = function (e) {
                var t = g.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return !1
                } finally {
                    t = null
                }
            }, Q = K(function (e) {
                return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length
            }),
            G = K(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#"
            }),
            Y = K(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return t !== "boolean" && t !== "string"
            }),
            Z = K(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
            }),
            et = K(function (e) {
                e.id = d + 0, e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>", y.insertBefore(e, y.firstChild);
                var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;
                return r = !g.getElementById(d), y.removeChild(e), t
            });
        try {
            x.call(y.childNodes, 0)[0].nodeType
        } catch (tt) {
            x = function (e) {
                var t, n = [];
                for (; t = this[e]; e++) n.push(t);
                return n
            }
        }
        nt.matches = function (e, t) {
            return nt(e, null, null, t)
        }, nt.matchesSelector = function (e, t) {
            return nt(t, null, null, [e]).length > 0
        }, s = nt.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (i === 1 || i === 9 || i === 11) {
                    if (typeof e.textContent == "string") return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                } else if (i === 3 || i === 4) return e.nodeValue
            } else
                for (; t = e[r]; r++) n += s(t);
            return n
        }, o = nt.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, u = nt.contains = y.contains ? function (e, t) {
            var n = e.nodeType === 9 ? e.documentElement : e,
                r = t && t.parentNode;
            return e === r || !! (r && r.nodeType === 1 && n.contains && n.contains(r))
        } : y.compareDocumentPosition ? function (e, t) {
            return t && !! (e.compareDocumentPosition(t) & 16)
        } : function (e, t) {
            while (t = t.parentNode)
                if (t === e) return !0;
            return !1
        }, nt.attr = function (e, t) {
            var n, r = o(e);
            return r || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
        }, i = nt.selectors = {
            cacheLength: 50,
            createPseudo: N,
            match: J,
            attrHandle: G ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                },
                type: function (e) {
                    return e.getAttribute("type")
                }
            },
            find: {
                ID: r ? function (e, t, n) {
                    if (typeof t.getElementById !== p && !n) {
                        var r = t.getElementById(e);
                        return r && r.parentNode ? [r] : []
                    }
                } : function (e, n, r) {
                    if (typeof n.getElementById !== p && !r) {
                        var i = n.getElementById(e);
                        return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [i] : t : []
                    }
                },
                TAG: Q ? function (e, t) {
                    if (typeof t.getElementsByTagName !== p) return t.getElementsByTagName(e)
                } : function (e, t) {
                    var n = t.getElementsByTagName(e);
                    if (e === "*") {
                        var r, i = [],
                            s = 0;
                        for (; r = n[s]; s++) r.nodeType === 1 && i.push(r);
                        return i
                    }
                    return n
                },
                NAME: et && function (e, t) {
                    if (typeof t.getElementsByName !== p) return t.getElementsByName(name)
                },
                CLASS: Z && function (e, t, n) {
                    if (typeof t.getElementsByClassName !== p && !n) return t.getElementsByClassName(e)
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace($, ""), e[3] = (e[4] || e[5] || "").replace($, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || nt.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n;
                    if (J.CHILD.test(e[0])) return null;
                    if (e[3]) e[2] = e[3];
                    else if (t = e[4]) q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;
                    return e.slice(0, 3)
                }
            },
            filter: {
                ID: r ? function (e) {
                    return e = e.replace($, ""),
                    function (t) {
                        return t.getAttribute("id") === e
                    }
                } : function (e) {
                    return e = e.replace($, ""),
                    function (t) {
                        var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                },
                TAG: function (e) {
                    return e === "*" ? function () {
                        return !0
                    } : (e = e.replace($, "").toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function (e) {
                    var t = k[d][e];
                    return t || (t = k(e, new RegExp("(^|" + O + ")" + e + "(" + O + "|$)"))),
                    function (e) {
                        return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "")
                    }
                },
                ATTR: function (e, t, n) {
                    return function (r, i) {
                        var s = nt.attr(r, e);
                        return s == null ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r) {
                    return e === "nth" ? function (e) {
                        var t, i, s = e.parentNode;
                        if (n === 1 && r === 0) return !0;
                        if (s) {
                            i = 0;
                            for (t = s.firstChild; t; t = t.nextSibling)
                                if (t.nodeType === 1) {
                                    i++;
                                    if (e === t) break
                                }
                        }
                        return i -= r, i === n || i % n === 0 && i / n >= 0
                    } : function (t) {
                        var n = t;
                        switch (e) {
                        case "only":
                        case "first":
                            while (n = n.previousSibling)
                                if (n.nodeType === 1) return !1;
                            if (e === "first") return !0;
                            n = t;
                        case "last":
                            while (n = n.nextSibling)
                                if (n.nodeType === 1) return !1;
                            return !0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);
                    return r[d] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function (e, n) {
                        var i, s = r(e, t),
                            o = s.length;
                        while (o--) i = T.call(e, s[o]), e[i] = !(n[i] = s[o])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: N(function (e) {
                    var t = [],
                        n = [],
                        r = a(e.replace(j, "$1"));
                    return r[d] ? N(function (e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--)
                            if (s = o[u]) e[u] = !(t[u] = s)
                    }) : function (e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: N(function (e) {
                    return function (t) {
                        return nt(e, t).length > 0
                    }
                }),
                contains: N(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                    }
                }),
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !! e.checked || t === "option" && !! e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                parent: function (e) {
                    return !i.pseudos.empty(e)
                },
                empty: function (e) {
                    var t;
                    e = e.firstChild;
                    while (e) {
                        if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
                        e = e.nextSibling
                    }
                    return !0
                },
                header: function (e) {
                    return X.test(e.nodeName)
                },
                text: function (e) {
                    var t, n;
                    return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                },
                radio: rt("radio"),
                checkbox: rt("checkbox"),
                file: rt("file"),
                password: rt("password"),
                image: rt("image"),
                submit: it("submit"),
                reset: it("reset"),
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                input: function (e) {
                    return V.test(e.nodeName)
                },
                focus: function (e) {
                    var t = e.ownerDocument;
                    return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && ( !! e.type || !! e.href)
                },
                active: function (e) {
                    return e === e.ownerDocument.activeElement
                },
                first: st(function (e, t, n) {
                    return [0]
                }),
                last: st(function (e, t, n) {
                    return [t - 1]
                }),
                eq: st(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: st(function (e, t, n) {
                    for (var r = 0; r < t; r += 2) e.push(r);
                    return e
                }),
                odd: st(function (e, t, n) {
                    for (var r = 1; r < t; r += 2) e.push(r);
                    return e
                }),
                lt: st(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: st(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, f = y.compareDocumentPosition ? function (e, t) {
            return e === t ? (l = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
        } : function (e, t) {
            if (e === t) return l = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var n, r, i = [],
                s = [],
                o = e.parentNode,
                u = t.parentNode,
                a = o;
            if (o === u) return ot(e, t);
            if (!o) return -1;
            if (!u) return 1;
            while (a) i.unshift(a), a = a.parentNode;
            a = u;
            while (a) s.unshift(a), a = a.parentNode;
            n = i.length, r = s.length;
            for (var f = 0; f < n && f < r; f++)
                if (i[f] !== s[f]) return ot(i[f], s[f]);
            return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1)
        }, [0, 0].sort(f), h = !l, nt.uniqueSort = function (e) {
            var t, n = 1;
            l = h, e.sort(f);
            if (l)
                for (; t = e[n]; n++) t === e[n - 1] && e.splice(n--, 1);
            return e
        }, nt.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, a = nt.compile = function (e, t) {
            var n, r = [],
                i = [],
                s = A[d][e];
            if (!s) {
                t || (t = ut(e)), n = t.length;
                while (n--) s = ht(t[n]), s[d] ? r.push(s) : i.push(s);
                s = A(e, pt(i, r))
            }
            return s
        }, g.querySelectorAll && function () {
            var e, t = vt,
                n = /'|\\/g,
                r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                i = [":focus"],
                s = [":active", ":focus"],
                u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
            K(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked")
            }), K(function (e) {
                e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled")
            }), i = new RegExp(i.join("|")), vt = function (e, r, s, o, u) {
                if (!o && !u && (!i || !i.test(e))) {
                    var a, f, l = !0,
                        c = d,
                        h = r,
                        p = r.nodeType === 9 && e;
                    if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                        a = ut(e), (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c), c = "[id='" + c + "'] ", f = a.length;
                        while (f--) a[f] = c + a[f].join("");
                        h = z.test(e) && r.parentNode || r, p = a.join(",")
                    }
                    if (p) try {
                        return S.apply(s, x.call(h.querySelectorAll(p), 0)), s
                    } catch (v) {} finally {
                        l || r.removeAttribute("id")
                    }
                }
                return t(e, r, s, o, u)
            }, u && (K(function (t) {
                e = u.call(t, "div");
                try {
                    u.call(t, "[test!='']:sizzle"), s.push("!=", H)
                } catch (n) {}
            }), s = new RegExp(s.join("|")), nt.matchesSelector = function (t, n) {
                n = n.replace(r, "='$1']");
                if (!o(t) && !s.test(n) && (!i || !i.test(n))) try {
                    var a = u.call(t, n);
                    if (a || e || t.document && t.document.nodeType !== 11) return a
                } catch (f) {}
                return nt(n, null, null, [t]).length > 0
            })
        }(), i.pseudos.nth = i.pseudos.eq, i.filters = mt.prototype = i.pseudos, i.setFilters = new mt, nt.attr = v.attr, v.find = nt, v.expr = nt.selectors, v.expr[":"] = v.expr.pseudos, v.unique = nt.uniqueSort, v.text = nt.getText, v.isXMLDoc = nt.isXML, v.contains = nt.contains
    }(e);
    var nt = /Until$/,
        rt = /^(?:parents|prev(?:Until|All))/,
        it = /^.[^:#\[\.,]*$/,
        st = v.expr.match.needsContext,
        ot = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    v.fn.extend({
        find: function (e) {
            var t, n, r, i, s, o, u = this;
            if (typeof e != "string") return v(e).filter(function () {
                for (t = 0, n = u.length; t < n; t++)
                    if (v.contains(u[t], this)) return !0
            });
            o = this.pushStack("", "find", e);
            for (t = 0, n = this.length; t < n; t++) {
                r = o.length, v.find(e, this[t], o);
                if (t > 0)
                    for (i = r; i < o.length; i++)
                        for (s = 0; s < r; s++)
                            if (o[s] === o[i]) {
                                o.splice(i--, 1);
                                break
                            }
            }
            return o
        },
        has: function (e) {
            var t, n = v(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++)
                    if (v.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(ft(this, e, !1), "not", e)
        },
        filter: function (e) {
            return this.pushStack(ft(this, e, !0), "filter", e)
        },
        is: function (e) {
            return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e)
        },
        index: function (e) {
            return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (e, t) {
            var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e),
                r = v.merge(this.get(), n);
            return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r))
        },
        addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), v.fn.andSelf = v.fn.addBack, v.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (e) {
            return v.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return v.dir(e, "parentNode", n)
        },
        next: function (e) {
            return at(e, "nextSibling")
        },
        prev: function (e) {
            return at(e, "previousSibling")
        },
        nextAll: function (e) {
            return v.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return v.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return v.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return v.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return v.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return v.sibling(e.firstChild)
        },
        contents: function (e) {
            return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes)
        }
    }, function (e, t) {
        v.fn[e] = function (n, r) {
            var i = v.map(this, t, n);
            return nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this.pushStack(i, e, l.call(arguments).join(","))
        }
    }), v.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t)
        },
        dir: function (e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ht = / jQuery\d+="(?:null|\d+)"/g,
        pt = /^\s+/,
        dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        vt = /<([\w:]+)/,
        mt = /<tbody/i,
        gt = /<|&#?\w+;/,
        yt = /<(?:script|style|link)/i,
        bt = /<(?:script|object|embed|option|style)/i,
        wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"),
        Et = /^(?:checkbox|radio)$/,
        St = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xt = /\/(java|ecma)script/i,
        Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Nt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, Ct = lt(i),
        kt = Ct.appendChild(i.createElement("div"));
    Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]), v.fn.extend({
        text: function (e) {
            return v.access(this, function (e) {
                return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function (e) {
            if (v.isFunction(e)) return this.each(function (t) {
                v(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return v.isFunction(e) ? this.each(function (t) {
                v(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = v(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = v.isFunction(e);
            return this.each(function (n) {
                v(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            if (!ut(this[0])) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(e, this), "before", this.selector)
            }
        },
        after: function () {
            if (!ut(this[0])) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(this, e), "after", this.selector)
            }
        },
        remove: function (e, t) {
            var n, r = 0;
            for (;
                (n = this[r]) != null; r++)
                if (!e || v.filter(e, [n]).length)!t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
            return this
        },
        empty: function () {
            var e, t = 0;
            for (;
                (e = this[t]) != null; t++) {
                e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
                while (e.firstChild) e.removeChild(e.firstChild)
            }
            return this
        },
        clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return v.clone(this, e, t)
            })
        },
        html: function (e) {
            return v.access(this, function (e) {
                var n = this[0] || {}, r = 0,
                    i = this.length;
                if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
                if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(dt, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                        n = 0
                    } catch (s) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function (e) {
            return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function (t) {
                var n = v(this),
                    r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : (typeof e != "string" && (e = v(e).detach()), this.each(function () {
                var t = this.nextSibling,
                    n = this.parentNode;
                v(this).remove(), t ? v(t).before(e) : v(n).append(e)
            }))
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, n, r) {
            e = [].concat.apply([], e);
            var i, s, o, u, a = 0,
                f = e[0],
                l = [],
                c = this.length;
            if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f)) return this.each(function () {
                v(this).domManip(e, n, r)
            });
            if (v.isFunction(f)) return this.each(function (i) {
                var s = v(this);
                e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
            });
            if (this[0]) {
                i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
                if (s) {
                    n = n && v.nodeName(s, "tr");
                    for (u = i.cacheable || c - 1; a < c; a++) r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0))
                }
                o = s = null, l.length && v.each(l, function (e, t) {
                    t.src ? v.ajax ? v.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }), v.buildFragment = function (e, n, r) {
        var s, o, u, a = e[0];
        return n = n || i, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {
            fragment: s,
            cacheable: o
        }
    }, v.fragments = {}, v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        v.fn[e] = function (n) {
            var r, i = 0,
                s = [],
                o = v(n),
                u = o.length,
                a = this.length === 1 && this[0].parentNode;
            if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1) return o[t](this[0]), this;
            for (; i < u; i++) r = (i > 0 ? this.clone(!0) : this).get(), v(o[i])[t](r), s = s.concat(r);
            return this.pushStack(s, e, o.selector)
        }
    }), v.extend({
        clone: function (e, t, n) {
            var r, i, s, o;
            v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));
            if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
                Ot(e, o), r = Mt(e), i = Mt(o);
                for (s = 0; r[s]; ++s) i[s] && Ot(r[s], i[s])
            }
            if (t) {
                At(e, o);
                if (n) {
                    r = Mt(e), i = Mt(o);
                    for (s = 0; r[s]; ++s) At(r[s], i[s])
                }
            }
            return r = i = null, o
        },
        clean: function (e, t, n, r) {
            var s, o, u, a, f, l, c, h, p, d, m, g, y = t === i && Ct,
                b = [];
            if (!t || typeof t.createDocumentFragment == "undefined") t = i;
            for (s = 0;
                (u = e[s]) != null; s++) {
                typeof u == "number" && (u += "");
                if (!u) continue;
                if (typeof u == "string")
                    if (!gt.test(u)) u = t.createTextNode(u);
                    else {
                        y = y || lt(t), c = t.createElement("div"), y.appendChild(c), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || ["", ""])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + f[2];
                        while (l--) c = c.lastChild;
                        if (!v.support.tbody) {
                            h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
                            for (o = p.length - 1; o >= 0; --o) v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o])
                        }!v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c.parentNode.removeChild(c)
                    }
                u.nodeType ? b.push(u) : v.merge(b, u)
            }
            c && (u = c = y = null);
            if (!v.support.appendChecked)
                for (s = 0;
                    (u = b[s]) != null; s++) v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
            if (n) {
                m = function (e) {
                    if (!e.type || xt.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                };
                for (s = 0;
                    (u = b[s]) != null; s++)
                    if (!v.nodeName(u, "script") || !m(u)) n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [s + 1, 0].concat(g)), s += g.length)
            }
            return b
        },
        cleanData: function (e, t) {
            var n, r, i, s, o = 0,
                u = v.expando,
                a = v.cache,
                f = v.support.deleteExpando,
                l = v.event.special;
            for (;
                (i = e[o]) != null; o++)
                if (t || v.acceptData(i)) {
                    r = i[u], n = r && a[r];
                    if (n) {
                        if (n.events)
                            for (s in n.events) l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
                        a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r))
                    }
                }
        }
    }),
    function () {
        var e, t;
        v.uaMatch = function (e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function () {
            function e(t, n) {
                return new e.fn.init(t, n)
            }
            v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (r, i) {
                return i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init.call(this, r, i, t)
            }, e.fn.init.prototype = e.fn;
            var t = e(i);
            return e
        }
    }();
    var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i,
        jt = /opacity=([^)]*)/,
        Ft = /^(top|right|bottom|left)$/,
        It = /^(none|table(?!-c[ea]).+)/,
        qt = /^margin/,
        Rt = new RegExp("^(" + m + ")(.*)$", "i"),
        Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"),
        zt = new RegExp("^([-+])=(" + m + ")", "i"),
        Wt = {}, Xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Vt = {
            letterSpacing: 0,
            fontWeight: 400
        }, $t = ["Top", "Right", "Bottom", "Left"],
        Jt = ["Webkit", "O", "Moz", "ms"],
        Kt = v.fn.toggle;
    v.fn.extend({
        css: function (e, n) {
            return v.access(this, function (e, n, r) {
                return r !== t ? v.style(e, n, r) : v.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return Yt(this, !0)
        },
        hide: function () {
            return Yt(this)
        },
        toggle: function (e, t) {
            var n = typeof e == "boolean";
            return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function () {
                (n ? e : Gt(this)) ? v(this).show() : v(this).hide()
            })
        }
    }), v.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Dt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": v.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = v.camelCase(n),
                f = e.style;
            n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !v.cssNumber[a] && (r += "px");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r
            } catch (l) {}
        },
        css: function (e, n, r, i) {
            var s, o, u, a = v.camelCase(n);
            return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s
        },
        swap: function (e, t, n) {
            var r, i, s = {};
            for (i in t) s[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t) e.style[i] = s[i];
            return r
        }
    }), e.getComputedStyle ? Dt = function (t, n) {
        var r, i, s, o, u = e.getComputedStyle(t, null),
            a = t.style;
        return u && (r = u[n], r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)), Ut.test(r) && qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r
    } : i.documentElement.currentStyle && (Dt = function (e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t],
            s = e.style;
        return i == null && s && s[t] && (i = s[t]), Ut.test(i) && !Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i
    }), v.each(["height", "width"], function (e, t) {
        v.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function () {
                    return tn(e, t, r)
                }) : tn(e, t, r)
            },
            set: function (e, n, r) {
                return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0)
            }
        }
    }), v.support.opacity || (v.cssHooks.opacity = {
        get: function (e, t) {
            return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (r && !r.filter) return
            }
            n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i
        }
    }), v(function () {
        v.support.reliableMarginRight || (v.cssHooks.marginRight = {
            get: function (e, t) {
                return v.swap(e, {
                    display: "inline-block"
                }, function () {
                    if (t) return Dt(e, "marginRight")
                })
            }
        }), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function (e, t) {
            v.cssHooks[t] = {
                get: function (e, n) {
                    if (n) {
                        var r = Dt(e, t);
                        return Ut.test(r) ? v(e).position()[t] + "px" : r
                    }
                }
            }
        })
    }), v.expr && v.expr.filters && (v.expr.filters.hidden = function (e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none"
    }, v.expr.filters.visible = function (e) {
        return !v.expr.filters.hidden(e)
    }), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        v.cssHooks[e + t] = {
            expand: function (n) {
                var r, i = typeof n == "string" ? n.split(" ") : [n],
                    s = {};
                for (r = 0; r < 4; r++) s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
                return s
            }
        }, qt.test(e) || (v.cssHooks[e + t].set = Zt)
    });
    var rn = /%20/g,
        sn = /\[\]$/,
        on = /\r?\n/g,
        un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        an = /^(?:select|textarea)/i;
    v.fn.extend({
        serialize: function () {
            return v.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? v.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type))
            }).map(function (e, t) {
                var n = v(this).val();
                return n == null ? null : v.isArray(n) ? v.map(n, function (e, n) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }), v.param = function (e, n) {
        var r, i = [],
            s = function (e, t) {
                t = v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
        if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function () {
            s(this.name, this.value)
        });
        else
            for (r in e) fn(r, e[r], n, s);
        return i.join("&").replace(rn, "+")
    };
    var ln, cn, hn = /#.*$/,
        pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        vn = /^(?:GET|HEAD)$/,
        mn = /^\/\//,
        gn = /\?/,
        yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bn = /([?&])_=[^&]*/,
        wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        En = v.fn.load,
        Sn = {}, xn = {}, Tn = ["*/"] + ["*"];
    try {
        cn = s.href
    } catch (Nn) {
        cn = i.createElement("a"), cn.href = "", cn = cn.href
    }
    ln = wn.exec(cn.toLowerCase()) || [], v.fn.load = function (e, n, r) {
        if (typeof e != "string" && En) return En.apply(this, arguments);
        if (!this.length) return this;
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), v.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n,
            complete: function (e, t) {
                r && u.each(r, o || [e.responseText, t, e])
            }
        }).done(function (e) {
            o = arguments, u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e)
        }), this
    }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        v.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), v.each(["get", "post"], function (e, n) {
        v[n] = function (e, r, i, s) {
            return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }), v.extend({
        getScript: function (e, n) {
            return v.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return v.get(e, t, n, "json")
        },
        ajaxSetup: function (e, t) {
            return t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e
        },
        ajaxSettings: {
            url: cn,
            isLocal: dn.test(ln[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Tn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": v.parseJSON,
                "text xml": v.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Cn(Sn),
        ajaxTransport: Cn(xn),
        ajax: function (e, n) {
            function T(e, n, s, a) {
                var l, y, b, w, S, T = n;
                if (E === 2) return;
                E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = An(c, x, s));
                if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l.data, b = l.error, l = !b);
                else {
                    b = T;
                    if (!T || e) T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]), m.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n),
                h = c.context || c,
                p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event,
                d = v.Deferred(),
                m = v.Callbacks("once memory"),
                g = c.statusCode || {}, b = {}, w = {}, E = 0,
                S = "canceled",
                x = {
                    readyState: 0,
                    setRequestHeader: function (e, t) {
                        if (!E) {
                            var n = e.toLowerCase();
                            e = w[n] = w[n] || e, b[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return E === 2 ? i : null
                    },
                    getResponseHeader: function (e) {
                        var n;
                        if (E === 2) {
                            if (!s) {
                                s = {};
                                while (n = pn.exec(i)) s[n[1].toLowerCase()] = n[2]
                            }
                            n = s[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function (e) {
                        return E || (c.mimeType = e), this
                    },
                    abort: function (e) {
                        return e = e || S, o && o.abort(e), T(0, e), this
                    }
                };
            d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function (e) {
                if (e) {
                    var t;
                    if (E < 2)
                        for (t in e) g[t] = [g[t], e[t]];
                    else t = e[x.status], x.always(t)
                }
                return this
            }, c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"), c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y), c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()) || !1, c.crossDomain = a && a.join(":") + (a[3] ? "" : a[1] === "http:" ? 80 : 443) !== ln.join(":") + (ln[3] ? "" : ln[1] === "http:" ? 80 : 443)), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), kn(Sn, c, n, x);
            if (E === 2) return x;
            f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !vn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");
            if (!c.hasContent) {
                c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;
                if (c.cache === !1) {
                    var N = v.now(),
                        C = c.url.replace(bn, "$1_=" + N);
                    c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "")
                }
            }(c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers) x.setRequestHeader(l, c.headers[l]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                S = "abort";
                for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[l](c[l]);
                o = kn(xn, c, n, x);
                if (!o) T(-1, "No Transport");
                else {
                    x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        E = 1, o.send(b, T)
                    } catch (k) {
                        if (!(E < 2)) throw k;
                        T(-1, k)
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Mn = [],
        _n = /\?/,
        Dn = /(=)\?(?=&|$)|\?\?/,
        Pn = v.now();
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Mn.pop() || v.expando + "_" + Pn++;
            return this[e] = !0, e
        }
    }), v.ajaxPrefilter("json jsonp", function (n, r, i) {
        var s, o, u, a = n.data,
            f = n.url,
            l = n.jsonp !== !1,
            c = l && Dn.test(f),
            h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
        if (n.dataTypes[0] === "jsonp" || c || h) return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
            return u || v.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", e[s] = function () {
            u = arguments
        }, i.always(function () {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Mn.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    }), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (e) {
                return v.globalEval(e), e
            }
        }
    }), v.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), v.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
            return {
                send: function (s, o) {
                    n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Hn, Bn = e.ActiveXObject ? function () {
            for (var e in Hn) Hn[e](0, 1)
        } : !1,
        jn = 0;
    v.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && Fn() || In()
    } : Fn,
    function (e) {
        v.extend(v.support, {
            ajax: !! e,
            cors: !! e && "withCredentials" in e
        })
    }(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function (n) {
        if (!n.crossDomain || v.support.cors) {
            var r;
            return {
                send: function (i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields)
                        for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u])
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null), r = function (e, i) {
                        var u, f, l, c, h;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = v.noop, Bn && delete Hn[o]);
                                if (i) a.readyState !== 4 && a.abort();
                                else {
                                    u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);
                                    try {
                                        c.text = a.responseText
                                    } catch (e) {}
                                    try {
                                        f = a.statusText
                                    } catch (p) {
                                        f = ""
                                    }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (d) {
                            i || s(-1, d)
                        }
                        c && s(u, f, c, l)
                    }, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = r), a.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(0, 1)
                }
            }
        }
    });
    var qn, Rn, Un = /^(?:toggle|show|hide)$/,
        zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"),
        Wn = /queueHooks$/,
        Xn = [Gn],
        Vn = {
            "*": [
                function (e, t) {
                    var n, r, i = this.createTween(e, t),
                        s = zn.exec(t),
                        o = i.cur(),
                        u = +o || 0,
                        a = 1,
                        f = 20;
                    if (s) {
                        n = +s[2], r = s[3] || (v.cssNumber[e] ? "" : "px");
                        if (r !== "px" && u) {
                            u = v.css(i.elem, e, !0) || n || 1;
                            do a = a || ".5", u /= a, v.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f)
                        }
                        i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                    }
                    return i
                }
            ]
        };
    v.Animation = v.extend(Kn, {
        tweener: function (e, t) {
            v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; r < i; r++) n = e[r], Vn[n] = Vn[n] || [], Vn[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Xn.unshift(e) : Xn.push(e)
        }
    }), v.Tween = Yn, Yn.prototype = {
        constructor: Yn,
        init: function (e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = Yn.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yn.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = Yn.propHooks[this.prop];
            return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this
        }
    }, Yn.prototype.init.prototype = Yn.prototype, Yn.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return e.elem[e.prop] == null || !! e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function (e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, v.each(["toggle", "show", "hide"], function (e, t) {
        var n = v.fn[t];
        v.fn[t] = function (r, i, s) {
            return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s)
        }
    }), v.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(Gt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = v.isEmptyObject(e),
                s = v.speed(t, n, r),
                o = function () {
                    var t = Kn(this, v.extend({}, e), s);
                    i && t.stop(!0)
                };
            return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = e != null && e + "queueHooks",
                    s = v.timers,
                    o = v._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o) o[n] && o[n].stop && Wn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && v.dequeue(this, e)
            })
        }
    }), v.each({
        slideDown: Zn("show"),
        slideUp: Zn("hide"),
        slideToggle: Zn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        v.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), v.speed = function (e, t, n) {
        var r = e && typeof e == "object" ? v.extend({}, e) : {
            complete: n || !n && t || v.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !v.isFunction(t) && t
        };
        r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function () {
            v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue)
        }, r
    }, v.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, v.timers = [], v.fx = Yn.prototype.init, v.fx.tick = function () {
        var e, t = v.timers,
            n = 0;
        for (; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
        t.length || v.fx.stop()
    }, v.fx.timer = function (e) {
        e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval))
    }, v.fx.interval = 13, v.fx.stop = function () {
        clearInterval(Rn), Rn = null
    }, v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function (e) {
        return v.grep(v.timers, function (t) {
            return e === t.elem
        }).length
    });
    var er = /^(?:body|html)$/i;
    v.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            v.offset.setOffset(this, e, t)
        });
        var n, r, i, s, o, u, a, f = {
                top: 0,
                left: 0
            }, l = this[0],
            c = l && l.ownerDocument;
        if (!c) return;
        return (r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement, v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = tr(c), s = n.clientTop || r.clientTop || 0, o = n.clientLeft || r.clientLeft || 0, u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, {
            top: f.top + u - s,
            left: f.left + a - o
        }) : f)
    }, v.offset = {
        bodyOffset: function (e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function (e, t, n) {
            var r = v.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = v(e),
                s = i.offset(),
                o = v.css(e, "top"),
                u = v.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1,
                f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, v.fn.extend({
        position: function () {
            if (!this[0]) return;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = er.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || i.body;
                while (e && !er.test(e.nodeName) && v.css(e, "position") === "static") e = e.offsetParent;
                return e || i.body
            })
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        v.fn[e] = function (i) {
            return v.access(this, function (e, i, s) {
                var o = tr(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), v.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        v.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            v.fn[i] = function (i, s) {
                var o = arguments.length && (r || typeof i != "boolean"),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return v.access(this, function (n, r, i) {
                    var s;
                    return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = v, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return v
    })
})(window);
DomUtils = {},
function () {
    var e = function (e, t) {
        if (!document.querySelectorAll) throw new Error("This browser doesn't support querySelectorAll.");
        var n = t;
        return h(t, "DomUtils_findAllBySelector_scope", function (t) {
            var r = _.map(e.split(","), function (e) {
                return t + " " + e
            }).join(",");
            return n.querySelectorAll(r)
        })
    }, t = window.Sizzle || window.jQuery && window.jQuery.find || e,
        n = document.createElement("div");
    n.innerHTML = "   <link/><table></table><select><!----></select>";
    var r = {
        leadingWhitespaceKilled: n.firstChild.nodeType !== 3,
        tbodyInsertion: n.getElementsByTagName("tbody").length > 0,
        tagsLost: n.getElementsByTagName("link").length === 0,
        commentsLost: !n.getElementsByTagName("select")[0].firstChild && n.mergeAttributes
    }, i = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    _.extend(i, {
        optgroup: i.option,
        tbody: i.thead,
        tfoot: i.thead,
        colgroup: i.thead,
        caption: i.thead,
        th: i.td
    }), r.tagsLost && (i._default = [1, "div<div>", "</div>"]);
    var s = /^\s+/,
        o = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        u = /<([\w:]+)/,
        a = /<tbody/i,
        f = /<|&#?\w+;/,
        l = /<(?:script|style)/i;
    DomUtils.htmlToFragment = function (e) {
        var t = document,
            n = t.createDocumentFragment();
        if ( !! e.length)
            if (!f.test(e)) n.appendChild(t.createTextNode(e));
            else {
                e = e.replace(o, "<$1></$2>");
                var l = u.exec(e),
                    c = l ? l[1].toLowerCase() : "",
                    h = i[c] || i._default,
                    p = h[1] + e + h[2];
                r.commentsLost && (p = p.replace(/<\s*(select|option)\b/ig, '<ins domutilsrealtagname="$1"'), p = p.replace(/<\/\s*(select|option)\b/ig, "</ins"));
                var d = t.createElement("div");
                d.innerHTML = p;
                var v = h[0];
                while (v--) d = d.lastChild;
                if (r.tbodyInsertion && !a.test(e)) {
                    var m = d.getElementsByTagName("tbody");
                    _.each(m, function (e) {
                        e.firstChild || e.parentNode.removeChild(e)
                    })
                }
                if (r.leadingWhitespaceKilled) {
                    var g = s.exec(e);
                    g && d.insertBefore(t.createTextNode(g[0]), d.firstChild)
                }
                if (r.commentsLost) {
                    var y = [];
                    _.each(d.getElementsByTagName("ins"), function (e) {
                        e.getAttribute("domutilsrealtagname") && y.push(e)
                    }), _.each(y, function (e) {
                        var t = document.createElement(e.getAttribute("domutilsrealtagname"));
                        e.removeAttribute("domutilsrealtagname"), t.mergeAttributes(e, !1);
                        while (e.firstChild) t.appendChild(e.firstChild);
                        e.parentNode.replaceChild(t, e)
                    })
                }
                while (d.firstChild) n.appendChild(d.firstChild)
            }
        return n
    }, DomUtils.fragmentToHtml = function (e) {
        return e = e.cloneNode(!0), DomUtils.fragmentToContainer(e).innerHTML
    }, DomUtils.fragmentToContainer = function (e) {
        var t = document,
            n = e.firstChild;
        while (n && n.nodeType !== 1) n = n.nextSibling;
        var r = t.createElement("div");
        if (!n) r.appendChild(e);
        else {
            var s = n.nodeName,
                o = i[s] || i._default;
            r.innerHTML = o[1] + o[2];
            var u = o[0];
            while (u--) r = r.lastChild;
            r.appendChild(e)
        }
        return r
    }, DomUtils.elementContains = function (e, t) {
        return e.nodeType !== 1 ? !1 : e === t ? !1 : e.compareDocumentPosition ? e.compareDocumentPosition(t) & 16 : (t = t.parentNode, !t || t.nodeType !== 1 ? !1 : e === t ? !0 : e.contains(t))
    }, DomUtils.findAll = function (e, n) {
        if (e.nodeType === 11) {
            var r = e,
                i = DomUtils.fragmentToContainer(r),
                s = t(n, i);
            while (i.firstChild) r.appendChild(i.firstChild);
            return s
        }
        return t(n, e)
    }, DomUtils.find = function (e, t) {
        var n = DomUtils.findAll(e, t);
        return n.length ? n[0] : null
    };
    var c = function (e, t, n) {
        return DomUtils.elementContains(e, t) ? !1 : DomUtils.compareElementIndex(t, e) <= 0 && DomUtils.compareElementIndex(e, n) <= 0
    };
    DomUtils.findAllClipped = function (e, t, n, r) {
        while (n !== r && n.nodeType !== 1) n = n.nextSibling;
        while (n !== r && r.nodeType !== 1) r = r.previousSibling;
        if (n.nodeType !== 1) return [];
        var i = DomUtils.findAll(e, t);
        return _.reject(i, function (e) {
            return !c(e, n, r)
        })
    }, DomUtils.findClipped = function (e, t, n, r) {
        var i = DomUtils.findAllClipped(e, t, n, r);
        return i.length ? i[0] : null
    };
    var h = function (e, t, n) {
        var r = !1;
        e.id || (e.setAttribute("id", t), r = !0);
        try {
            var i = e.id.replace(/'/g, "\\$&");
            return n("[id='" + i + "']")
        } finally {
            r && e.removeAttribute("id")
        }
    }, p = function (e, t, n, r, i) {
            var s = n.split(",");
            for (var o = 0, u = s.length; o < u; o++) {
                var a = h(e, "DomUtils_matchesSelector_target", function (s) {
                    var o = n.match(/\S.*?(?=\s*$)/)[0],
                        u = o + s,
                        a;
                    return r ? a = DomUtils.findClipped(t, u, r, i) : a = DomUtils.find(t, u), a === e
                });
                if (a) return !0
            }
            return !1
        };
    DomUtils.matchesSelector = function (e, t, n) {
        return p(e, t, n)
    }, DomUtils.matchesSelectorClipped = function (e, t, n, r, i) {
        return p(e, t, n, r, i)
    }, DomUtils.compareElementIndex = function (e, t) {
        if (e === t) return 0;
        if (e.compareDocumentPosition) {
            var n = e.compareDocumentPosition(t);
            return n & 24 ? 0 : n & 4 ? -1 : 1
        }
        return e.contains(t) || t.contains(e) ? 0 : e.sourceIndex < t.sourceIndex ? -1 : 1
    }, DomUtils.wrapFragmentForContainer = function (e, t) {
        if (t && t.nodeName === "TABLE" && _.any(e.childNodes, function (e) {
            return e.nodeName === "TR"
        })) {
            var n = document.createElement("TBODY");
            n.appendChild(e), e.appendChild(n)
        }
    }, DomUtils.isInDocument = function (e) {
        return e === document ? !0 : (e.nodeType !== 1 && (e = e.parentNode), !e || e.nodeType !== 1 ? !1 : e === document.body ? !0 : DomUtils.elementContains(document.body, e))
    }, DomUtils.rangeToHtml = function (e, t) {
        var n = document.createDocumentFragment();
        for (var r = e, i = t.nextSibling; r && r !== i; r = r.nextSibling) n.appendChild(r.cloneNode(!0));
        return DomUtils.fragmentToHtml(n)
    }, DomUtils.outerHtml = function (e) {
        return DomUtils.rangeToHtml(e, e)
    }
}();
(function () {
    var e = function () {
        var e = document.createTextNode(""),
            t;
        try {
            e.test = 123
        } catch (t) {}
        return e.test === 123
    }(),
        t = function (t, n) {
            if (e) return [t, n];
            if (t.nodeType === 3) {
                var r = document.createComment("IE");
                t.parentNode.insertBefore(r, t), t = r
            }
            if (n.nodeType === 3) {
                var r = document.createComment("IE");
                n.parentNode.insertBefore(r, n.nextSibling), n = r
            }
            return [t, n]
        };
    LiveRange = function (e, r, i, s) {
        if (r.nodeType === 11) i = r.lastChild, r = r.firstChild;
        else if (!r.parentNode) throw new Error("LiveRange start and end must have a parent");
        i = i || r, this.tag = e;
        var o = t(r, i);
        r = this._ensureTag(o[0]), i = this._ensureTag(o[1]);
        var u = n(r[e][0], !0, i, r, s),
            a = n(i[e][1], !1, r, i, s);
        this._insertEntries(r, 0, u, [this]), this._insertEntries(i, 1, a, [this])
    };
    var n = function (e, t, n, r, i) {
        var s, o = t ? n.parentNode.lastChild : r,
            u = t ? !i : i;
        for (var a = 0, f = o; a <= e.length; a++) {
            var l = e[a],
                c = l && (t ? l._end : l._start);
            while (f !== c && f !== n) f = f.previousSibling;
            if (c === n) {
                s = a;
                if (u) break
            } else if (f === n) {
                s = a;
                break
            }
        }
        return s
    };
    LiveRange.prototype._ensureTag = function (e) {
        return this.tag in e || (e[this.tag] = [
            [],
            []
        ]), e
    };
    var r = function () {
        var e = document.createElement("DIV"),
            t, n = !1;
        try {
            e.test = 12, delete e.test, n = !0
        } catch (t) {}
        return n
    }();
    LiveRange._cleanNode = function (e, t, n) {
        var i = t[e];
        i && (!(i[0].length + i[1].length) || n) && (r ? delete t[e] : t.removeAttribute(e))
    }, LiveRange.prototype.destroy = function (e) {
        var t = this;
        if (e) {
            this.visit(function (e, t) {
                e && (t._start = null, t._end = null)
            }, function (e, n) {
                if (!e)
                    for (var r = n.firstChild; r; r = r.nextSibling) LiveRange._cleanNode(t.tag, r, !0)
            }), this._removeEntries(this._start, 0, this._startIndex), this._removeEntries(this._end, 1, 0, this._endIndex + 1);
            if (this._start !== this._end) {
                for (var n = this._start.nextSibling; n !== this._end; n = n.nextSibling) LiveRange._cleanNode(t.tag, n, !0);
                this._start[t.tag] && this._removeEntries(this._start, 1), this._end[t.tag] && this._removeEntries(this._end, 0)
            }
            this._start = this._end = null
        } else this._removeEntries(this._start, 0, this._startIndex, this._startIndex + 1), this._removeEntries(this._end, 1, this._endIndex, this._endIndex + 1), this._start = this._end = null
    }, LiveRange.prototype.firstNode = function () {
        return this._start
    }, LiveRange.prototype.lastNode = function () {
        return this._end
    }, LiveRange.prototype.containerNode = function () {
        return this._start.parentNode
    }, LiveRange.prototype.visit = function (e, t) {
        e = e || function () {}, t = t || function () {};
        var n = this.tag,
            r = function (i, s, o) {
                var u = o || 0,
                    a = s.nextSibling;
                for (var f = i; f && f !== a; f = f.nextSibling) {
                    var l = f[n] && f[n][0];
                    if (l && u < l.length) {
                        var c = l[u],
                            h = c._start,
                            p = c._end;
                        e(!0, c) !== !1 && r(h, p, u + 1), e(!1, c), f = p
                    } else t(!0, f) !== !1 && f.firstChild && r(f.firstChild, f.lastChild), t(!1, f);
                    u = 0
                }
            };
        r(this._start, this._end, this._startIndex + 1)
    }, LiveRange.prototype._removeEntries = function (e, t, n, r) {
        var i = e[this.tag][t];
        n = n || 0, r = r || r === 0 ? r : i.length;
        var s = i.splice(n, r - n);
        for (var o = n; o < i.length; o++) t ? i[o]._endIndex = o : i[o]._startIndex = o;
        return i.length || LiveRange._cleanNode(this.tag, e), s
    }, LiveRange.prototype._insertEntries = function (e, t, n, r) {
        var i = e[this.tag][t];
        Array.prototype.splice.apply(i, [n, 0].concat(r));
        for (var s = n; s < i.length; s++) t ? (i[s]._end = e, i[s]._endIndex = s) : (i[s]._start = e, i[s]._startIndex = s)
    }, LiveRange.prototype.replaceContents = function (e) {
        if (!e.firstChild) throw new Error("replaceContents requires non-empty fragment");
        return this.operate(function (t, n) {
            t.parentNode.insertBefore(e, t);
            var r = t.ownerDocument.createDocumentFragment(),
                i = t;
            for (;;) {
                var s = i.nextSibling;
                r.appendChild(i);
                if (i === n) break;
                i = s;
                if (!i) throw new Error("LiveRanges must begin and end on siblings in order")
            }
            return r
        })
    }, LiveRange.prototype.operate = function (e) {
        var n = this._start,
            r = this._end,
            i = this._removeEntries(n, 0, 0, this._startIndex + 1),
            s = this._removeEntries(r, 1, this._endIndex),
            o = n.parentNode,
            u = n.previousSibling,
            a = r.nextSibling,
            f = null;
        f = e(n, r);
        var l = u ? u.nextSibling : o.firstChild,
            c = a ? a.previousSibling : o.lastChild;
        if (!l || l === a) throw new Error("Ranges must contain at least one element");
        var h = t(l, c);
        return l = this._ensureTag(h[0]), c = this._ensureTag(h[1]), this._insertEntries(l, 0, 0, i), this._insertEntries(c, 1, c[this.tag][1].length, s), f
    }, LiveRange.transplantTag = function (e, t, n) {
        if (!n[e]) return;
        t[e] = n[e], n[e] = null;
        var r = t[e][0],
            i = t[e][1];
        for (var s = 0; s < r.length; s++) r[s]._start = t;
        for (var s = 0; s < i.length; s++) i[s]._end = t
    }, LiveRange.transplantRange = function (e, t, n) {
        n._ensureTag(e), t !== e && n._ensureTag(t), n._insertEntries(e, 0, 0, n._start[n.tag][0].slice(0, n._startIndex + 1)), n._insertEntries(t, 1, 0, n._end[n.tag][1].slice(n._endIndex))
    }, LiveRange.prototype.insertBefore = function (e) {
        var t = e.firstChild;
        if (!t) return;
        this._start.parentNode.insertBefore(e, this._start), this._ensureTag(t), this._insertEntries(t, 0, 0, this._removeEntries(this._start, 0, 0, this._startIndex))
    }, LiveRange.prototype.insertAfter = function (e) {
        var t = e.lastChild;
        if (!t) return;
        this._end.parentNode.insertBefore(e, this._end.nextSibling), this._ensureTag(t), this._insertEntries(t, 1, t[this.tag][1].length, this._removeEntries(this._end, 1, this._endIndex + 1))
    }, LiveRange.prototype.extract = function () {
        if (this._startIndex > 0 && this._start[this.tag][0][this._startIndex - 1]._end === this._end) return null;
        var e = this._start.previousSibling,
            t = this._end.nextSibling,
            n = this._start.parentNode;
        this._startIndex > 0 && (this._ensureTag(t), this._insertEntries(t, 0, 0, this._removeEntries(this._start, 0, 0, this._startIndex))), this._endIndex < this._end[this.tag][1].length - 1 && (this._ensureTag(e), this._insertEntries(e, 1, e[this.tag][1].length, this._removeEntries(this._end, 1, this._endIndex + 1)));
        var r = document.createDocumentFragment();
        for (var i; i = e ? e.nextSibling : n.firstChild, i && i !== t;) r.appendChild(i);
        return r
    }, LiveRange.prototype.findParent = function (e) {
        var t = i(this.tag, this._end, this._endIndex);
        return t ? t : e ? null : LiveRange.findRange(this.tag, this.containerNode())
    }, LiveRange.findRange = function (e, t) {
        var n = i(e, t);
        return n ? n : t.parentNode ? LiveRange.findRange(e, t.parentNode) : null
    };
    var i = function (e, t, n) {
        typeof n == "undefined" && (n = -1);
        if (t[e] && n + 1 < t[e][1].length) return t[e][1][n + 1];
        var r = t.nextSibling;
        while (r) {
            var n = 0,
                i = r[e] && r[e][0];
            if (i && i.length) {
                var s = i[0];
                r = s._end, n = s._endIndex + 1
            }
            if (r[e] && n < r[e][1].length) return r[e][1][n];
            r = r.nextSibling
        }
        return null
    }
})();
(function () {
    var e = [],
        t = function () {
            return !1
        }, n = function () {
            return !0
        }, r = function (e) {
            var r = e.stopPropagation,
                i = e.preventDefault;
            e.isPropagationStopped = t, e.isImmediatePropagationStopped = t, e.isDefaultPrevented = t, e.stopPropagation = function () {
                e.isPropagationStopped = n, r ? r.call(e) : e.cancelBubble = !0
            }, e.preventDefault = function () {
                e.isDefaultPrevented = n, i ? i.call(e) : e.returnValue = !1
            }, e.stopImmediatePropagation = function () {
                e.stopPropagation(), e.isImmediatePropagationStopped = n
            };
            var s = e.type;
            e.metaKey === undefined && (e.metaKey = e.ctrlKey);
            if (/^key/.test(s)) e.which == null && (e.which = e.charCode != null ? e.charCode : e.keyCode);
            else if (/^(?:mouse|contextmenu)|click/.test(s)) {
                !e.relatedTarget && e.fromElement && (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement);
                if (!e.which && e.button !== undefined) {
                    var o = e.button;
                    e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0
                }
            }
            return e
        }, i = function (t) {
            t = r(t), _.each(e, function (e) {
                e.types[t.type] && (!e._checkIECompliance || !! t.currentTarget["_uevents_test_eventtype_" + t.type]) && e.handler.call(null, t)
            })
        }, s, o = function () {
            return s || (s = document.addEventListener ? new UniversalEventListener._impl.w3c(i) : new UniversalEventListener._impl.ie(i)), s
        }, u = {};
    UniversalEventListener = function (t, n) {
        this.handler = t, this.types = {}, this.impl = o(), this._checkIECompliance = n, e.push(this)
    }, _.extend(UniversalEventListener.prototype, {
        addType: function (e) {
            this.types[e] || (this.types[e] = !0, u[e] = (u[e] || 0) + 1, u[e] === 1 && this.impl.addType(e))
        },
        removeType: function (e) {
            this.types[e] && (delete this.types[e], u[e]--, u[e] || this.impl.removeType(e))
        },
        installHandler: function (e, t) {
            if (e.nodeType !== 1) return;
            this.impl.installHandler(e, t), this._checkIECompliance && (e["_uevents_test_eventtype_" + t] = e, e.firstChild && _.each(e.getElementsByTagName("*"), function (e) {
                e["_uevents_test_eventtype_" + t] = e
            }))
        },
        destroy: function () {
            var t = this;
            e = _.without(e, t), _.each(_.keys(t.types), function (e) {
                t.removeType(e)
            })
        }
    })
})();
(function () {
    var e = 0,
        t = 1,
        n = 2;
    UniversalEventListener._impl = UniversalEventListener._impl || {}, UniversalEventListener._impl.w3c = function (t) {
        this.deliver = t, this.typeCounts = {}, this.boundHandler = _.bind(this.handler, this), this.boundCapturer = _.bind(this.capturer, this), this.focusBlurMode = "onfocusin" in document.createElement("DIV") ? e : n, this.simulateMouseEnterLeave = !window.opera
    }, _.extend(UniversalEventListener._impl.w3c.prototype, {
        addType: function (e) {
            this._listen(this._expandEventType(e))
        },
        removeType: function (e) {
            this._unlisten(this._expandEventType(e))
        },
        installHandler: function (e, t) {},
        _expandEventType: function (e) {
            var r = [e];
            return this.focusBlurMode === t ? e === "focus" ? r.push("focusin") : e === "blur" && r.push("focusout") : this.focusBlurMode === n && (e === "focusin" ? r.push("focus") : e === "focusout" && r.push("blur")), this.simulateMouseEnterLeave && (e === "mouseenter" ? r.push("mouseover") : e === "mouseleave" && r.push("mouseout")), r
        },
        _listen: function (e) {
            var t = this;
            _.each(e, function (e) {
                (t.typeCounts[e] = (t.typeCounts[e] || 0) + 1) === 1 && document.addEventListener(e, t.boundCapturer, !0)
            })
        },
        _unlisten: function (e) {
            var t = this;
            _.each(e, function (e) {
                --t.typeCounts[e] || document.removeEventListener(e, t.boundCapturer, !0)
            })
        },
        capturer: function (e) {
            e.target.nodeType === 3 && (e.target = e.target.parentNode);
            var t = e.type,
                n = e.bubbles,
                r = e.target;
            r.addEventListener(t, this.boundHandler, !1);
            var i;
            if (n) {
                i = [];
                for (var s = r.parentNode; s; s = s.parentNode) s.addEventListener(t, this.boundHandler, !1), i.push(s)
            }
            setTimeout(function () {
                r.removeEventListener(t, this.boundHandler, !1), n && _.each(i, function (e) {
                    e.removeEventListener(t, this.boundHandler, !1)
                })
            }, 0)
        },
        handler: function (e) {
            var r = function (e, t, n, r, i) {
                var s = document.createEvent("UIEvents");
                s.initUIEvent(e, n, r, window, i), s.synthetic = !0, t.dispatchEvent(s)
            };
            e.currentTarget === e.target && (this.focusBlurMode === t ? e.type === "focusin" ? r("focus", e.target, !1) : e.type === "focusout" && r("blur", e.target, !1) : this.focusBlurMode === n && (e.type === "focus" ? r("focusin", e.target, !0) : e.type === "blur" && r("focusout", e.target, !0)));
            if (this.focusBlurMode === t) {
                if (e.type === "focus" || e.type === "blur")
                    if (!e.synthetic) return
            } else if (this.focusBlurMode === n && (e.type === "focusin" || e.type === "focusout") && !e.synthetic) return;
            if (this.simulateMouseEnterLeave && (e.type === "mouseenter" || e.type === "mouseleave") && !e.synthetic) return;
            this.deliver(e), this.simulateMouseEnterLeave && (!e.relatedTarget || e.currentTarget !== e.relatedTarget && !DomUtils.elementContains(e.currentTarget, e.relatedTarget)) && (e.type === "mouseover" ? r("mouseenter", e.currentTarget, !1) : e.type === "mouseout" && r("mouseleave", e.currentTarget, !1))
        }
    })
})();
UniversalEventListener._impl = UniversalEventListener._impl || {}, UniversalEventListener._impl.ie = function (e) {
    var t = this;
    this.deliver = e, this.curriedHandler = function () {
        t.handler.call(this, t)
    }, document.attachEvent("ondatasetcomplete", function () {
        var e = window.event,
            t = e && e.srcElement;
        e.synthetic && t && t.nodeName === "FORM" && e.returnValue !== !1 && t.submit()
    })
}, _.extend(UniversalEventListener._impl.ie.prototype, {
    addType: function (e) {},
    removeType: function (e) {},
    installHandler: function (e, t) {
        var n = "on" + t;
        if (e.nodeType === 1) {
            this._install(e, n);
            var r = e.getElementsByTagName("*");
            for (var i = 0, s = r.length; i < s; i++) this._install(r[i], n)
        }
    },
    _install: function (e, t) {
        var n = [t];
        t === "onfocus" ? n.push("onfocusin") : t === "onblur" ? n.push("onfocusout") : t === "onchange" ? (e.nodeName === "INPUT" && (e.type === "checkbox" || e.type === "radio") && (n = ["onpropertychange"]), n.push("oncellchange")) : t === "onsubmit" && n.push(e, "ondatasetcomplete");
        for (var r = 0; r < n.length; r++) e[n[r]] = this.curriedHandler
    },
    handler: function (e) {
        var t = function (e, t) {
            var n = document.createEventObject();
            return n.synthetic = !0, t.fireEvent(e, n), n.returnValue
        }, n = window.event,
            r = n.type,
            i = n.srcElement || document;
        n.target = i;
        if (this.nodeType !== 1) return;
        n.currentTarget = this;
        var s = this;
        s === i && !n.synthetic && (r === "focusin" ? t("onfocus", s) : r === "focusout" ? t("onblur", s) : r === "change" ? t("oncellchange", s) : r === "propertychange" ? n.propertyName === "checked" && t("oncellchange", s) : r === "submit" && t("ondatasetcomplete", s));
        if ((r === "focus" || n.type === "blur" || n.type === "change" || n.type === "submit") && !n.synthetic) {
            n.type === "submit" && (n.returnValue = !1);
            return
        }
        r === "cellchange" && n.synthetic && (r = n.type = "change"), r === "datasetcomplete" && n.synthetic && (r = n.type = "submit"), e.deliver(n)
    }
});
(function () {
    Spark = {}, Spark._currentRenderer = function () {
        var e = null;
        return {
            get: function () {
                return e
            },
            withValue: function (t, n) {
                var r = e;
                e = t;
                try {
                    return n()
                } finally {
                    e = r
                }
            }
        }
    }(), Spark._TAG = "_spark_" + Meteor.uuid(), Spark._ANNOTATION_NOTIFY = "notify", Spark._ANNOTATION_DATA = "data", Spark._ANNOTATION_ISOLATE = "isolate", Spark._ANNOTATION_EVENTS = "events", Spark._ANNOTATION_WATCH = "watch", Spark._ANNOTATION_LABEL = "label", Spark._ANNOTATION_LANDMARK = "landmark", Spark._ANNOTATION_LIST = "list", Spark._ANNOTATION_LIST_ITEM = "item", Spark._checkIECompliance = !1, Spark._globalPreserves = {};
    var e = function (e, t, n, r) {
        var i = new LiveRange(Spark._TAG, t, n, r);
        return i.type = e, i
    }, t = function (e, t) {
            var n = LiveRange.findRange(Spark._TAG, t);
            while (n && n.type !== e) n = n.findParent();
            return n
        }, n = function (e, t) {
            do t = t.findParent(); while (t && t.type !== e);
            return t
        }, r = function (e, t) {
            var n = new LiveRange(Spark._TAG, e, t, !0);
            for (var r = n; r; r = r.findParent()) r.type === Spark._ANNOTATION_WATCH && r.notify();
            n.destroy()
        }, i = !1,
        s = function (e) {
            var t = i;
            i = !0;
            try {
                return e()
            } finally {
                i = t
            }
        };
    Spark._createId = function () {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+_",
            t = "";
        for (var n = 0; n < 8; n++) t += e.substr(Math.floor(Meteor.random() * 64), 1);
        return t
    }, Spark._Renderer = function () {
        this.annotations = {}, this._branchNotes = {}, this.currentBranch = this.newLabelStack(), this.landmarkRanges = [], this.pc = new a
    }, _.extend(Spark._Renderer.prototype, {
        annotate: function (t, n, r) {
            if (typeof r != "function") {
                var i = r;
                r = function (e) {
                    e && _.extend(e, i)
                }
            }
            var s = (n || "") + ":" + Spark._createId();
            return this.annotations[s] = function (t, i) {
                if (!t || !n) {
                    r(null);
                    return
                }
                var s = e(n, t, i);
                r(s)
            }, "<$" + s + ">" + t + "</$" + s + ">"
        },
        newLabelStack: function () {
            var e = [this._branchNotes];
            return {
                pushLabel: function (t) {
                    var n = e[e.length - 1],
                        r = "_" + t;
                    e.push(n[r] = n[r] || {})
                },
                popLabel: function () {
                    e.pop()
                },
                getNotes: function () {
                    var t = e[e.length - 1];
                    return t
                },
                mark: function (t) {
                    for (var n = e.length - 1; n >= 0 && !e[n][t]; n--) e[n][t] = !0
                }
            }
        },
        materialize: function (e) {
            var t = this,
                n = Spark._currentRenderer.withValue(t, e);
            n = t.annotate(n);
            var r = {}, i = function (e) {
                    var t = e.firstChild;
                    while (t) {
                        var n = t.nextSibling;
                        if (t.nodeType === 8) {
                            var s = r[t.nodeValue];
                            if (s === !1) throw new Error("Spark HTML fragments may only be used once. Second use in " + DomUtils.fragmentToHtml(e));
                            s && (r[t.nodeValue] = !1, DomUtils.wrapFragmentForContainer(s, t.parentNode), t.parentNode.replaceChild(s, t))
                        } else t.nodeType === 1 && i(t);
                        t = n
                    }
                }, s = [
                    []
                ],
                o = [],
                a, f = /<(\/?)\$([^<>]+)>|<|[^<]+/g;
            f.lastIndex = 0;
            var l;
            while (l = f.exec(n)) {
                var c = !l[1],
                    h = l[2],
                    p = t.annotations[h];
                if (p === !1) throw new Error("Spark HTML fragments may be used only once. Second use of: " + DomUtils.fragmentToHtml(r[h]));
                if (!p) s[s.length - 1].push(l[0]);
                else if (c) o.push(h), s.push([]);
                else {
                    var d = o.pop();
                    if (d !== h) throw new Error("Range mismatch: " + d + " / " + h);
                    var v = DomUtils.htmlToFragment(s.pop().join(""));
                    i(v), v.firstChild || v.appendChild(document.createComment("empty")), p(v.firstChild, v.lastChild), t.annotations[h] = !1;
                    if (!o.length) {
                        a = v;
                        break
                    }
                    r[h] = v, s[s.length - 1].push("<!--" + h + "-->")
                }
            }
            return u(a, t.landmarkRanges), t.landmarkRanges = [], _.each(t.annotations, function (e) {
                e && e()
            }), t.annotations = {}, a
        }
    });
    var o = function (e) {
        return function () {
            var t = Spark._currentRenderer.get(),
                n = _.toArray(arguments);
            return t ? (n.push(t), e.apply(null, n)) : n.pop()
        }
    }, u = function (e, t) {
            var i = new LiveRange(Spark._TAG, e),
                s = !1;
            i.finalize = function () {
                s = !0
            }, Meteor._atFlush(function () {
                if (s) return;
                if (!DomUtils.isInDocument(i.firstNode())) {
                    var e = i.firstNode();
                    while (e.parentNode) e = e.parentNode;
                    if (!e._protect) {
                        Spark.finalize(e);
                        return
                    }
                }
                _.each(t, function (e) {
                    e.isPreservedConstant || e.rendered.call(e.landmark)
                });
                var o = i;
                while (o = n(Spark._ANNOTATION_LANDMARK, o)) o.rendered.call(o.landmark);
                r(i.firstNode(), i.lastNode()), i.destroy()
            })
        };
    Spark.render = function (e) {
        var t = new Spark._Renderer,
            n = t.materialize(e);
        return n
    };
    var a = function () {
        this.roots = [], this.regionPreservations = []
    };
    _.extend(a.prototype, {
        addRoot: function (e, t, n, r) {
            var i = this;
            i.roots.push({
                context: r,
                preserve: e,
                fromRange: t,
                toRange: n
            })
        },
        addConstantRegion: function (e, t) {
            var n = this;
            n.regionPreservations.push({
                type: "region",
                fromStart: e.firstNode(),
                fromEnd: e.lastNode(),
                newRange: t
            })
        },
        computePreservations: function (e, t) {
            var n = this,
                r = _.clone(n.regionPreservations),
                i = function (e, t, n, r, i) {
                    e = e || t.containerNode();
                    var s = DomUtils.findAllClipped(e, r, t.firstNode(), t.lastNode());
                    _.each(s, function (e) {
                        var t = n(e);
                        t && i(e, t)
                    })
                };
            _.each(n.roots, function (e) {
                e.fromNodesByLabel = {}, _.each(e.preserve, function (t, n) {
                    e.fromNodesByLabel[n] = {}, i(e.context, e.fromRange, t, n, function (t, r) {
                        e.fromNodesByLabel[n][r] = t
                    })
                })
            });
            var s = new LiveRange(Spark._TAG, t.firstNode(), t.lastNode()),
                o = document.createDocumentFragment();
            o.appendChild(document.createComment(""));
            var u = s.replaceContents(o),
                a = new LiveRange(Spark._TAG, u);
            e.insertBefore(u), _.each(n.roots, function (e) {
                _.each(e.preserve, function (t, n) {
                    i(e.context, e.toRange, t, n, function (t, i) {
                        var s = e.fromNodesByLabel[n][i];
                        s && (r.push({
                            type: "node",
                            from: s,
                            to: t
                        }), e.fromNodesByLabel[n][i] = null)
                    })
                })
            });
            var f = a.extract();
            return a.destroy(), s.replaceContents(f), s.destroy(), r
        }
    });
    var f = function (e) {
        var t = [],
            e;
        while (e = n(Spark._ANNOTATION_LABEL, e)) t.unshift(e.label);
        return t.join(" :: ")
    };
    Spark.renderToRange = function (e, t) {
        var r = new Spark._Renderer,
            i = function (e, t) {
                var n = r.newLabelStack();
                e.visit(function (e, r) {
                    r.type === Spark._ANNOTATION_LABEL ? e ? n.pushLabel(r.label) : n.popLabel() : r.type === Spark._ANNOTATION_LANDMARK && e && t(r, n.getNotes())
                })
            };
        i(e, function (e, t) {
            t.originalRange = e
        });
        var o = r.materialize(t);
        DomUtils.wrapFragmentForContainer(o, e.containerNode());
        var u = new LiveRange(Spark._TAG, o),
            a = r.pc;
        i(u, function (e, t) {
            t.originalRange && (e.constant && a.addConstantRegion(t.originalRange, e), a.addRoot(e.preserve, t.originalRange, e))
        });
        var f = e;
        while (f = n(Spark._ANNOTATION_LANDMARK, f)) a.addRoot(f.preserve, e, u, f.containerNode());
        a.addRoot(Spark._globalPreserves, e, u);
        var l = a.computePreservations(e, u);
        u.destroy();
        var c = {};
        s(function () {
            e.operate(function (e, t) {
                Spark.finalize(e, t), Spark._patch(e.parentNode, o, e.previousSibling, t.nextSibling, l, c)
            })
        }), _.each(c.regionPreservations, function (e) {
            e.isPreservedConstant = !0
        })
    }, Spark.finalize = function (e, t) {
        if (!e.parentNode && e.nodeType !== 11) {
            var n = document.createDocumentFragment();
            n.appendChild(e), e = n, t = null
        }
        var r = new LiveRange(Spark._TAG, e, t);
        r.visit(function (e, t) {
            e && t.finalize && t.finalize()
        }), r.destroy(!0)
    }, Spark.setDataContext = o(function (e, t, n) {
        return n.annotate(t, Spark._ANNOTATION_DATA, {
            data: e
        })
    }), Spark.getDataContext = function (e) {
        var n = t(Spark._ANNOTATION_DATA, e);
        return n && n.data
    };
    var l = null,
        c = function () {
            return l || (l = new UniversalEventListener(function (e) {
                if (i) return;
                var r = [],
                    s = t(Spark._ANNOTATION_EVENTS, e.currentTarget);
                while (s) r.push(s), s = n(Spark._ANNOTATION_EVENTS, s);
                _.each(r, function (t) {
                    t.handler(e)
                })
            }, Spark._checkIECompliance)), l
        };
    Spark.attachEvents = o(function (e, t, r) {
        var i = c(),
            s = {};
        _.each(e, function (e, t) {
            var n = t.split(/,\s+/);
            _.each(n, function (t) {
                var n = t.split(/\s+/);
                if (n.length === 0) return;
                var r = n.shift(),
                    i = n.join(" ");
                s[r] = s[r] || [], s[r].push({
                    selector: i,
                    callback: e
                })
            })
        });
        var o = _.keys(s),
            u = function (e) {
                _.each(o, function (t) {
                    for (var n = e.firstNode(), r = e.lastNode().nextSibling; n && n !== r; n = n.nextSibling) i.installHandler(n, t)
                })
            };
        t = r.annotate(t, Spark._ANNOTATION_WATCH, {
            notify: function () {
                u(this)
            }
        });
        var a = !1;
        return t = r.annotate(t, Spark._ANNOTATION_EVENTS, function (e) {
            if (!e) return;
            _.each(o, function (e) {
                i.addType(e)
            }), u(e), e.finalize = function () {
                a = !0
            }, e.handler = function (t) {
                var r = s[t.type] || [];
                for (var i = 0; i < r.length; i++) {
                    if (a || t.isImmediatePropagationStopped()) return;
                    var o = r[i],
                        u = o.callback,
                        f = o.selector;
                    if (f) {
                        if (!DomUtils.matchesSelectorClipped(t.currentTarget, e.containerNode(), f, e.firstNode(), e.lastNode())) continue
                    } else if (t.currentTarget !== t.target) continue;
                    var l = Spark.getDataContext(t.currentTarget),
                        c = n(Spark._ANNOTATION_LANDMARK, e),
                        h = c && c.landmark,
                        p = u.call(l, t, h);
                    p === !1 && (t.stopImmediatePropagation(), t.preventDefault())
                }
            }
        }), t
    }), Spark.isolate = function (e) {
        var t = Spark._currentRenderer.get();
        if (!t) return e();
        var n, r = !0,
            i;
        return Meteor.autorun(function (s) {
            r ? (i = t.annotate(e(), Spark._ANNOTATION_ISOLATE, function (e) {
                e ? (n = e, n.finalize = function () {
                    s.stop()
                }) : s.stop()
            }), r = !1) : Spark.renderToRange(n, e)
        }), i
    }, Spark.list = function (t, r, i) {
        i = i || function () {
            return ""
        };
        var o = {}, u = {};
        _.each(["added", "removed", "moved", "changed"], function (e) {
            u[e] = function () {
                return o[e].apply(null, arguments)
            }
        });
        var a = [];
        _.extend(o, {
            added: function (e, t) {
                a.splice(t, 0, e)
            }
        });
        var f = t.observe(u),
            l = Spark._currentRenderer.get(),
            c = l ? _.bind(l.annotate, l) : function (e) {
                return e
            }, h = "",
            p, d = [];
        if (!a.length) h = i();
        else
            for (var v = 0; v < a.length; v++)(function (e) {
                h += c(r(a[e]), Spark._ANNOTATION_LIST_ITEM, function (t) {
                    d[e] = t
                })
            })(v);
        a = null;
        var m = !1,
            g = function () {
                f.stop(), m = !0
            };
        h = c(h, Spark._ANNOTATION_LIST, function (e) {
            e ? (p = e, p.finalize = g) : g()
        }), l || g();
        var y = function () {
            var e = p;
            while (e = n(Spark._ANNOTATION_LANDMARK, e)) e.rendered.call(e.landmark)
        }, b = function (e) {
                Meteor._atFlush(function () {
                    m || s(e)
                })
            };
        return _.extend(o, {
            added: function (t, n) {
                b(function () {
                    var i = Spark.render(_.bind(r, null, t));
                    DomUtils.wrapFragmentForContainer(i, p.containerNode());
                    var s = e(Spark._ANNOTATION_LIST_ITEM, i);
                    d.length ? n === d.length ? d[d.length - 1].insertAfter(i) : d[n].insertBefore(i) : Spark.finalize(p.replaceContents(i)), d.splice(n, 0, s)
                })
            },
            removed: function (e, t) {
                b(function () {
                    if (d.length === 1) {
                        var e = Spark.render(i);
                        DomUtils.wrapFragmentForContainer(e, p.containerNode()), Spark.finalize(p.replaceContents(e))
                    } else Spark.finalize(d[t].extract());
                    d.splice(t, 1), y()
                })
            },
            moved: function (e, t, n) {
                b(function () {
                    if (t === n) return;
                    var e = d[t].extract(),
                        r = d.splice(t, 1)[0];
                    n === d.length ? d[d.length - 1].insertAfter(e) : d[n].insertBefore(e), d.splice(n, 0, r), y()
                })
            },
            changed: function (e, t) {
                b(function () {
                    Spark.renderToRange(d[t], _.bind(r, null, e))
                })
            }
        }), h
    };
    var h = 1;
    Spark.Landmark = function () {
        this.id = h++, this._range = null
    }, _.extend(Spark.Landmark.prototype, {
        firstNode: function () {
            return this._range.firstNode()
        },
        lastNode: function () {
            return this._range.lastNode()
        },
        find: function (e) {
            var t = this._range;
            return DomUtils.findClipped(t.containerNode(), e, t.firstNode(), t.lastNode())
        },
        findAll: function (e) {
            var t = this._range;
            return DomUtils.findAllClipped(t.containerNode(), e, t.firstNode(), t.lastNode())
        },
        hasDom: function () {
            return !!this._range
        }
    }), Spark.UNIQUE_LABEL = ["UNIQUE_LABEL"], Spark.labelBranch = function (e, t) {
        var n = Spark._currentRenderer.get();
        if (!n || e === null) return t();
        e === Spark.UNIQUE_LABEL && (e = Spark._createId()), n.currentBranch.pushLabel(e);
        var r = t(),
            i = n.currentBranch.getNotes().occupied;
        return n.currentBranch.popLabel(), i ? n.annotate(r, Spark._ANNOTATION_LABEL, {
            label: e
        }) : r
    }, Spark.createLandmark = function (e, t) {
        var n = Spark._currentRenderer.get();
        if (!n) {
            var r = new Spark.Landmark;
            e.created && e.created.call(r);
            var i = t(r);
            return e.destroyed && e.destroyed.call(r), i
        }
        var s = {};
        _.isArray(e.preserve) ? _.each(e.preserve, function (e) {
            s[e] = !0
        }) : s = e.preserve || {};
        for (var o in s) typeof s[o] != "function" && (s[o] = function () {
            return !0
        });
        n.currentBranch.mark("occupied");
        var u = n.currentBranch.getNotes(),
            r;
        if (u.originalRange) {
            if (u.originalRange.superceded) throw new Error("Can't create second landmark in same branch");
            u.originalRange.superceded = !0, r = u.originalRange.landmark
        } else {
            r = new Spark.Landmark;
            if (e.created) {
                var a = Meteor.deps.Context.current;
                Meteor.deps.Context.current = null;
                try {
                    e.created.call(r)
                } finally {
                    Meteor.deps.Context.current = a
                }
            }
        }
        u.landmark = r;
        var i = t(r);
        return n.annotate(i, Spark._ANNOTATION_LANDMARK, function (t) {
            if (!t) {
                e.destroyed && e.destroyed.call(r);
                return
            }
            _.extend(t, {
                preserve: s,
                constant: !! e.constant,
                rendered: e.rendered || function () {},
                destroyed: e.destroyed || function () {},
                landmark: r,
                finalize: function () {
                    this.superceded || (this.landmark._range = null, this.destroyed.call(this.landmark))
                }
            }), r._range = t, n.landmarkRanges.push(t)
        })
    }, Spark._getEnclosingLandmark = function (e) {
        var n = t(Spark._ANNOTATION_LANDMARK, e);
        return n ? n.landmark : null
    }
})();
Spark._patch = function (e, t, n, r, i, s) {
    var o = function (e, t) {
        LiveRange.transplantTag(Spark._TAG, e, t)
    }, u = new Spark._Patcher(e, t, n, r),
        a = function (e, t, n, r) {
            for (var i = t ? t.nextSibling : e.firstChild; i && i !== n; i = i.nextSibling) r(i) !== !1 && i.firstChild && a(i, null, null, r)
        };
    s = s || {};
    var f = s.regionPreservations = s.regionPreservations || [],
        l = null;
    return a(t, null, null, function (e) {
        var t = _.find(i, function (t) {
            return t.type === "region" && t.newRange.firstNode() === e
        }) || _.find(i, function (t) {
            return t.type === "node" && t.to === e
        });
        if (t) {
            var n = t.type === "region" ? t.fromStart : t.from;
            if (!l || DomUtils.compareElementIndex(l, n) < 0)
                if (t.type === "region") u.match(t.fromStart, t.newRange.firstNode(), o, !0) && (u.skipToSiblings(t.fromEnd, t.newRange.lastNode()), LiveRange.transplantRange(t.fromStart, t.fromEnd, t.newRange), f.push(t.newRange));
                else if (t.type === "node" && u.match(n, e, o)) return l = n, (n.firstChild || e.firstChild) && n.nodeName !== "TEXTAREA" && Spark._patch(n, e, null, null, i), !1
        }
        return !0
    }), u.finish(), s
}, Spark._Patcher = function (e, t, n, r) {
    this.tgtParent = e, this.srcParent = t, this.tgtBefore = n, this.tgtAfter = r, this.lastKeptTgtNode = null, this.lastKeptSrcNode = null
}, Spark._Patcher.prototype.match = function (e, t, n, r) {
    var i = this.lastKeptTgtNode,
        s = this.lastKeptSrcNode,
        o = e,
        u = t;
    if (!o != !u) return !1;
    var a = !i,
        f = !o;
    if (!a) {
        while (i.parentNode !== this.tgtParent && (!o || !DomUtils.elementContains(i.parentNode, o))) this._replaceNodes(i, null, s, null), i = i.parentNode, s = s.parentNode;
        this.lastKeptTgtNode = i, this.lastKeptSrcNode = s;
        if (!f && (DomUtils.elementContains(s, u) || s.parentNode !== this.srcParent && !DomUtils.elementContains(s.parentNode, u))) return !1
    }
    if (f) this._replaceNodes(i, null, s, null, this.tgtParent, this.srcParent);
    else {
        if (!r && o.nodeName !== u.nodeName) return !1;
        for (var l = o.parentNode, c = u.parentNode; l !== (a ? this.tgtParent : i.parentNode); l = l.parentNode, c = c.parentNode) {
            if (c === (a ? this.srcParent : s.parentNode)) return !1;
            if (l.nodeName !== c.nodeName) return !1
        }
        if (c !== (a ? this.srcParent : s.parentNode)) return !1;
        var h = !0;
        for (;;) {
            if (!h || !r) o.nodeType === 1 && Spark._Patcher._copyAttributes(o, u), n && n(o, u);
            h = !1;
            if ((a ? this.tgtParent : i.parentNode) === o.parentNode) {
                this._replaceNodes(i, o, s, u);
                break
            }
            this._replaceNodes(null, o, null, u), o = o.parentNode, u = u.parentNode
        }
    }
    return this.lastKeptTgtNode = e, this.lastKeptSrcNode = t, !0
}, Spark._Patcher.prototype.skipToSiblings = function (e, t) {
    var n = this.lastKeptTgtNode,
        r = this.lastKeptSrcNode;
    return !n || n.parentNode !== e.parentNode ? !1 : !r || r.parentNode !== t.parentNode ? !1 : (this.lastKeptTgtNode = e, this.lastKeptSrcNode = t, !0)
}, Spark._Patcher.prototype.finish = function () {
    return this.match(null, null)
}, Spark._Patcher.prototype._replaceNodes = function (e, t, n, r, i, s) {
    var o = i || (e || t).parentNode,
        u = s || (n || r).parentNode;
    o === this.tgtParent && (e = e || this.tgtBefore, t = t || this.tgtAfter), u === this.srcParent && (n = n || this.srcBefore, r = r || this.srcAfter);
    var a;
    while ((a = e ? e.nextSibling : o.firstChild) && a !== t) o.removeChild(a);
    var f;
    while ((f = n ? n.nextSibling : u.firstChild) && f !== r) o.insertBefore(f, t || null)
}, Spark._Patcher._copyAttributes = function (e, t) {
    var n = t.attributes,
        r = e.attributes,
        i = e === document.activeElement,
        s = e.nodeName === "INPUT" && e.type === "text" || e.nodeName === "TEXTAREA";
    e.style.cssText && (e.style.cssText = "");
    var o = !1;
    e.nodeName === "INPUT" && (o = e.type === "radio", e.checked === !0 && t.checked === !1 && (e.checked = !1));
    for (var u = r.length - 1; u >= 0; u--) {
        var a = r[u];
        if (!a.specified) continue;
        var f = a.name;
        if (!r[f]) continue;
        if (f === "id" || f === "type") continue;
        if (o && f === "name") continue;
        if (f === "value") continue;
        if (f === "src") continue;
        var l = e[f];
        if (l && (typeof l == "object" || /^jQuery/.test(f))) continue;
        e.removeAttributeNode(a)
    }
    if (e.mergeAttributes) e.mergeAttributes(t), typeof e.checked != "undefined" && t.checked && (e.checked = t.checked), t.name && (e.name = t.name);
    else
        for (var u = 0, c = n.length; u < c; u++) {
            var h = n.item(u);
            if (h.specified) {
                var f = h.name.toLowerCase(),
                    p = String(h.value);
                f !== "type" && (f === "checked" ? (e.checked = e.defaultChecked = p && p !== "false", e.setAttribute("checked", "checked")) : f === "style" ? e.style.cssText = t.style.cssText : f === "class" ? e.className = t.className : f !== "value" && (f === "src" ? t.src !== e.src && (e.src = t.src) : e.setAttribute(f, p)))
            }
        }
    s && (i || (e.value = t.value))
};
Meteor.render = function (e) {
    return Spark.render(function () {
        return Spark.isolate(typeof e == "function" ? e : function () {
            return String(e)
        })
    })
}, Meteor.renderList = function (e, t, n) {
    return Spark.render(function () {
        return Spark.list(e, function (e) {
            return Spark.labelBranch(e._id || null, function () {
                return Spark.isolate(_.bind(t, null, e))
            })
        }, function () {
            return n ? Spark.isolate(n) : ""
        })
    })
};
(function () {
    Spark._labelFromIdOrName = function (e) {
        var t = null;
        if (e.nodeType === 1)
            if (e.id) t = "#" + e.id;
            else if (e.getAttribute("name")) {
            t = e.getAttribute("name"), e.nodeName === "INPUT" && (e.type === "radio" || e.type === "checkbox") && e.value && (t = t + ":" + e.value);
            while (e.parentNode && e.parentNode.nodeType === 1) {
                e = e.parentNode;
                if (e.id) {
                    t = "#" + e.id + "/" + t;
                    break
                }
                e.getAttribute("name") && (t = e.getAttribute("name") + "/" + t)
            }
        }
        return t
    }
})();
(function () {
    Meteor._partials = {}, Meteor._hook_handlebars = function () {
        Meteor._hook_handlebars = function () {};
        var e = Handlebars._default_helpers.each;
        Handlebars._default_helpers.each = function (t, n) {
            return t && "observe" in t ? Spark.list(t, function (e) {
                return Spark.labelBranch(e._id || Spark.UNIQUE_LABEL, function () {
                    var t = Spark.isolate(_.bind(n.fn, null, e));
                    return Spark.setDataContext(e, t)
                })
            }, function () {
                return n.inverse ? Spark.isolate(n.inverse) : ""
            }) : e.call(this, t, n)
        }, _.extend(Handlebars._default_helpers, {
            isolate: function (e) {
                var t = this;
                return Spark.isolate(function () {
                    return e.fn(t)
                })
            },
            constant: function (e) {
                var t = this;
                return Spark.createLandmark({
                    constant: !0
                }, function () {
                    return e.fn(t)
                })
            }
        })
    };
    var e = {}, t = function (t) {
            var n = e[t.id] || (e[t.id] = {
                find: function (e) {
                    if (!t.hasDom()) throw new Error("Template not in DOM");
                    return t.find(e)
                },
                findAll: function (e) {
                    if (!t.hasDom()) throw new Error("Template not in DOM");
                    return t.findAll(e)
                }
            });
            return n.firstNode = t.hasDom() ? t.firstNode() : null, n.lastNode = t.hasDom() ? t.lastNode() : null, n
        };
    Meteor._template_decl_methods = {
        _tmpl_data: null,
        events: function (e) {
            var t = this._tmpl_data.events = this._tmpl_data.events || {};
            _.extend(t, e)
        },
        preserve: function (e) {
            var t = this._tmpl_data.preserve = this._tmpl_data.preserve || {};
            _.isArray(e) ? _.each(e, function (e) {
                t[e] = !0
            }) : _.extend(t, e)
        },
        helpers: function (e) {
            var t = this._tmpl_data.helpers = this._tmpl_data.helpers || {};
            for (var n in e) t[n] = e[n]
        }
    }, Meteor._def_template = function (n, r) {
        Meteor._hook_handlebars(), window.Template = window.Template || {};
        var i = function (s) {
            var o = n && Template[n] || {}, u = o._tmpl_data || {}, a = Spark.labelBranch("Template." + n, function () {
                    var a = Spark.createLandmark({
                        preserve: u.preserve || {},
                        created: function () {
                            var e = t(this);
                            e.data = s, o.created && o.created.call(e)
                        },
                        rendered: function () {
                            var e = t(this);
                            e.data = s, o.rendered && o.rendered.call(e)
                        },
                        destroyed: function () {
                            o.destroyed && o.destroyed.call(t(this)), delete e[this.id]
                        }
                    }, function (e) {
                        var a = Spark.isolate(function () {
                            return r(s, {
                                helpers: _.extend({}, i, u.helpers || {}),
                                partials: Meteor._partials,
                                name: n
                            })
                        }),
                            f = function (e) {
                                var n = {};
                                return _.each(e, function (e, r) {
                                    n[r] = function (n, r) {
                                        return e.call(this, n, t(r))
                                    }
                                }), n
                            }, l = o.events !== Meteor._template_decl_methods.events ? o.events : u.events;
                        return o.events && (a = Spark.attachEvents(f(l), a)), a
                    });
                    return a = Spark.setDataContext(s, a), a
                });
            return a
        };
        _.extend(i, Handlebars.helpers);
        if (n) {
            if (Template[n]) throw new Error("There are multiple templates named '" + n + "'. Each template needs a unique name.");
            Template[n] = i, _.extend(i, Meteor._template_decl_methods), i._tmpl_data = {}, Meteor._partials[n] = i
        }
        return i
    }
})();
(function () {
    var e = [],
        t = document.readyState === "loaded" || document.readyState == "complete",
        n = function () {
            t = !0;
            while (e.length) e.shift()()
        };
    document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : (document.attachEvent("onreadystatechange", function () {
        document.readyState === "complete" && n()
    }), window.attachEvent("load", n)), Meteor.startup = function (n) {
        var r = !document.addEventListener && document.documentElement.doScroll;
        if (!r || window !== top) t ? n() : e.push(n);
        else {
            try {
                r("left")
            } catch (i) {
                setTimeout(function () {
                    Meteor.startup(n)
                }, 50);
                return
            }
            n()
        }
    }
})();
Handlebars = {}, Handlebars.json_ast_to_func = function (e) {
    return function (t, n) {
        return Handlebars.evaluate(e, t, n)
    }
}, Handlebars._default_helpers = {
    "with": function (e, t) {
        return t.fn(e)
    },
    each: function (e, t) {
        var n = this;
        return e && e.length > 0 ? _.map(e, function (e, n) {
            var r = e._id || (typeof e == "string" ? e : null) || Spark.UNIQUE_LABEL;
            return Spark.labelBranch(r, function () {
                return t.fn(e)
            })
        }).join("") : Spark.labelBranch("else", function () {
            return t.inverse(n)
        })
    },
    "if": function (e, t) {
        return !e || e instanceof Array && !e.length ? t.inverse(this) : t.fn(this)
    },
    unless: function (e, t) {
        return !e || e instanceof Array && !e.length ? t.fn(this) : t.inverse(this)
    }
}, Handlebars.registerHelper = function (e, t) {
    if (e in Handlebars._default_helpers) throw new Error("There is already a helper '" + e + "'");
    Handlebars._default_helpers[e] = t
}, Handlebars._escape = function () {
    var e = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;",
        "&": "&amp;"
    }, t = function (t) {
            return e[t]
        };
    return function (e) {
        return e.replace(/[&<>"'`]/g, t)
    }
}(), Handlebars._defaultThis = function () {
    return this
}(), Handlebars.evaluate = function (e, t, n) {
    n = n || {};
    var r = _.extend({}, Handlebars._default_helpers);
    _.extend(r, n.helpers || {});
    var i = n.partials || {}, s = function (e, t) {
            if (typeof t != "object") return t;
            for (var n = 0; n < t[0]; n++) {
                if (!e.parent) throw new Error("Too many '..' segments");
                e = e.parent
            }
            if (t.length === 1) return e.data;
            var i = !1;
            t[1] === "" && (t.splice(1, 1), i = !0);
            var s = e.data,
                o;
            if (t[0] === 0 && r.hasOwnProperty(t[1]) && !i) o = r[t[1]];
            else {
                if (!o instanceof Object && typeof
                    function () {}[t[1]] != "undefined" && !i) throw new Error("Can't call a helper '" + t[1] + "' because " + "it is a built-in function property in JavaScript");
                o = e.data && e.data[t[1]]
            }
            for (var n = 2; n < t.length; n++) {
                typeof o == "function" && (o = o.call(s), s = o);
                if (o === undefined || o === null) {
                    o = "";
                    break
                }
                o = o[t[n]]
            }
            return typeof o == "function" ? _.bind(o, s) : o
        }, o = function (e, t, n, r) {
            n = n || {}, t = t.slice(0);
            var i = t[t.length - 1],
                o = {};
            typeof i == "object" && !(i instanceof Array) && _.each(t.pop(), function (t, n) {
                var r = s(e, t);
                o[n] = typeof r == "function" ? r() : r
            });
            var u = function (t, n) {
                var r = t.slice(1);
                for (var i = 0; i < r.length; i++) typeof r[i] == "function" && (r[i] = r[i]());
                return n && r.push(n), t[0].apply(e.data, r)
            }, a = new Array(t.length);
            for (var f = 0; f < t.length; f++) a[f] = s(e, t[f]);
            if (typeof a[0] != "function") return a[0];
            if (r && a.length > 1) {
                var l = a[1];
                typeof l == "function" && (l = u(a.slice(1), {
                    hash: o
                })), a = [a[0], l], n.hash = {}
            } else n.hash = o;
            return u(a, n)
        }, u = function (e, t, n) {
            var r = [],
                s = function (e) {
                    return typeof e == "string" ? e : e === null ? "null" : e === undefined ? "" : e.toString()
                }, a = function (e, t) {
                    return function (n) {
                        return (n || Handlebars._defaultThis) === (t || Handlebars._defaultThis) ? e(n) : Spark.setDataContext(n, e(n))
                    }
                }, f = function (e) {
                    return e instanceof Handlebars.SafeString ? e.toString() : Handlebars._escape(s(e))
                }, l, c = function () {
                    return (n ? n + "." : "") + l
                }, h = function (e, t) {
                    return Spark.labelBranch(e + "@" + c(), t)
                };
            return _.each(t, function (t, n) {
                l = n;
                if (typeof t == "string") r.push(t);
                else if (t[0] === "{") r.push(h(t[1], function () {
                    return f(o(e, t[1]))
                }));
                else if (t[0] === "!") r.push(h(t[1], function () {
                    return s(o(e, t[1] || ""))
                }));
                else if (t[0] === "#") {
                    var p = a(function (n) {
                        return u({
                            parent: e,
                            data: n
                        }, t[2], c())
                    }, e.data);
                    p.fn = p, p.inverse = a(function (n) {
                        return u({
                            parent: e,
                            data: n
                        }, t[3] || [], c())
                    }, e.data);
                    var d = h(t[1], function () {
                        return s(o(e, t[1], p, !0))
                    });
                    r.push(d)
                } else {
                    if (t[0] !== ">") throw new Error("bad element in template");
                    var v = t[1];
                    if (!(v in i)) throw new Error("No such template '" + v + "'");
                    var d = h(v, function () {
                        return s(i[v](e.data))
                    });
                    r.push(d)
                }
            }), r.join("")
        }, a = (n.name || "") + "#";
    return u({
        data: t,
        parent: null
    }, e, a)
}, Handlebars.SafeString = function (e) {
    this.string = e
}, Handlebars.SafeString.prototype.toString = function () {
    return this.string.toString()
};
Meteor.is_client = Meteor.isClient, Meteor.is_server = Meteor.isServer, Meteor.deps.Context.prototype.on_invalidate = Meteor.deps.Context.prototype.onInvalidate;
(function () {
    var e = "input textarea button select option".split(" "),
        t = _.map(e, function (e) {
            return e.replace(/^.*$/, "$&[id], $&[name]")
        }).join(", ");
    Spark._globalPreserves[t] = Spark._labelFromIdOrName
})();
(function (e, t) {
    var n, r;
    typeof exports != t + "" ? n = exports : (r = e.L, n = {}, n.noConflict = function () {
        return e.L = r, this
    }, e.L = n), n.version = "0.5", n.Util = {
        extend: function (e) {
            var t = Array.prototype.slice.call(arguments, 1),
                n, r, i, s;
            for (r = 0, i = t.length; r < i; r++) {
                s = t[r] || {};
                for (n in s) s.hasOwnProperty(n) && (e[n] = s[n])
            }
            return e
        },
        bind: function (e, t) {
            var n = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
            return function () {
                return e.apply(t, n || arguments)
            }
        },
        stamp: function () {
            var e = 0,
                t = "_leaflet_id";
            return function (n) {
                return n[t] = n[t] || ++e, n[t]
            }
        }(),
        limitExecByInterval: function (e, t, n) {
            var r, i;
            return function s() {
                var o = arguments;
                if (r) {
                    i = !0;
                    return
                }
                r = !0, setTimeout(function () {
                    r = !1, i && (s.apply(n, o), i = !1)
                }, t), e.apply(n, o)
            }
        },
        falseFn: function () {
            return !1
        },
        formatNum: function (e, t) {
            var n = Math.pow(10, t || 5);
            return Math.round(e * n) / n
        },
        splitWords: function (e) {
            return e.replace(/^\s+|\s+$/g, "").split(/\s+/)
        },
        setOptions: function (e, t) {
            return e.options = n.extend({}, e.options, t), e.options
        },
        getParamString: function (e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n + "=" + e[n]);
            return "?" + t.join("&")
        },
        template: function (e, t) {
            return e.replace(/\{ *([\w_]+) *\}/g, function (e, n) {
                var r = t[n];
                if (!t.hasOwnProperty(n)) throw new Error("No value provided for variable " + e);
                return r
            })
        },
        emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
    },
    function () {
        function t(t) {
            var n, r, i = ["webkit", "moz", "o", "ms"];
            for (n = 0; n < i.length && !r; n++) r = e[i[n] + t];
            return r
        }

        function i(t) {
            var n = +(new Date),
                i = Math.max(0, 16 - (n - r));
            return r = n + i, e.setTimeout(t, i)
        }
        var r = 0,
            s = e.requestAnimationFrame || t("RequestAnimationFrame") || i,
            o = e.cancelAnimationFrame || t("CancelAnimationFrame") || t("CancelRequestAnimationFrame") || function (t) {
                e.clearTimeout(t)
            };
        n.Util.requestAnimFrame = function (t, r, o, u) {
            t = n.bind(t, r);
            if (!o || s !== i) return s.call(e, t, u);
            t()
        }, n.Util.cancelAnimFrame = function (t) {
            t && o.call(e, t)
        }
    }(), n.extend = n.Util.extend, n.bind = n.Util.bind, n.stamp = n.Util.stamp, n.setOptions = n.Util.setOptions, n.Class = function () {}, n.Class.extend = function (e) {
        var t = function () {
            this.initialize && this.initialize.apply(this, arguments)
        }, r = function () {};
        r.prototype = this.prototype;
        var i = new r;
        i.constructor = t, t.prototype = i;
        for (var s in this) this.hasOwnProperty(s) && s !== "prototype" && (t[s] = this[s]);
        return e.statics && (n.extend(t, e.statics), delete e.statics), e.includes && (n.Util.extend.apply(null, [i].concat(e.includes)), delete e.includes), e.options && i.options && (e.options = n.extend({}, i.options, e.options)), n.extend(i, e), t
    }, n.Class.include = function (e) {
        n.extend(this.prototype, e)
    }, n.Class.mergeOptions = function (e) {
        n.extend(this.prototype.options, e)
    };
    var i = "_leaflet_events";
    n.Mixin = {}, n.Mixin.Events = {
        addEventListener: function (e, t, r) {
            var s = this[i] = this[i] || {}, o, u, a;
            if (typeof e == "object") {
                for (o in e) e.hasOwnProperty(o) && this.addEventListener(o, e[o], t);
                return this
            }
            e = n.Util.splitWords(e);
            for (u = 0, a = e.length; u < a; u++) s[e[u]] = s[e[u]] || [], s[e[u]].push({
                action: t,
                context: r || this
            });
            return this
        },
        hasEventListeners: function (e) {
            return i in this && e in this[i] && this[i][e].length > 0
        },
        removeEventListener: function (e, t, r) {
            var s = this[i],
                o, u, a, f, l;
            if (typeof e == "object") {
                for (o in e) e.hasOwnProperty(o) && this.removeEventListener(o, e[o], t);
                return this
            }
            e = n.Util.splitWords(e);
            for (u = 0, a = e.length; u < a; u++)
                if (this.hasEventListeners(e[u])) {
                    f = s[e[u]];
                    for (l = f.length - 1; l >= 0; l--)(!t || f[l].action === t) && (!r || f[l].context === r) && f.splice(l, 1)
                }
            return this
        },
        fireEvent: function (e, t) {
            if (!this.hasEventListeners(e)) return this;
            var r = n.extend({
                type: e,
                target: this
            }, t),
                s = this[i][e].slice();
            for (var o = 0, u = s.length; o < u; o++) s[o].action.call(s[o].context || this, r);
            return this
        }
    }, n.Mixin.Events.on = n.Mixin.Events.addEventListener, n.Mixin.Events.off = n.Mixin.Events.removeEventListener, n.Mixin.Events.fire = n.Mixin.Events.fireEvent,
    function () {
        var r = !! e.ActiveXObject,
            i = r && !e.XMLHttpRequest,
            s = r && !document.querySelector,
            o = navigator.userAgent.toLowerCase(),
            u = o.indexOf("webkit") !== -1,
            a = o.indexOf("chrome") !== -1,
            f = o.indexOf("android") !== -1,
            l = o.search("android [23]") !== -1,
            c = typeof orientation != t + "",
            h = e.navigator && e.navigator.msPointerEnabled && e.navigator.msMaxTouchPoints,
            p = "devicePixelRatio" in e && e.devicePixelRatio > 1 || "matchMedia" in e && e.matchMedia("(min-resolution:144dpi)").matches,
            d = document.documentElement,
            v = r && "transition" in d.style,
            m = "WebKitCSSMatrix" in e && "m11" in new e.WebKitCSSMatrix,
            g = "MozPerspective" in d.style,
            y = "OTransition" in d.style,
            b = !e.L_DISABLE_3D && (v || m || g || y),
            w = !e.L_NO_TOUCH && function () {
                var e = "ontouchstart";
                if (h || e in d) return !0;
                var t = document.createElement("div"),
                    n = !1;
                return t.setAttribute ? (t.setAttribute(e, "return;"), typeof t[e] == "function" && (n = !0), t.removeAttribute(e), t = null, n) : !1
            }();
        n.Browser = {
            ie6: i,
            ie7: s,
            webkit: u,
            android: f,
            android23: l,
            chrome: a,
            ie3d: v,
            webkit3d: m,
            gecko3d: g,
            opera3d: y,
            any3d: b,
            mobile: c,
            mobileWebkit: c && u,
            mobileWebkit3d: c && m,
            mobileOpera: c && e.opera,
            touch: w,
            msTouch: h,
            retina: p
        }
    }(), n.Point = function (e, t, n) {
        this.x = n ? Math.round(e) : e, this.y = n ? Math.round(t) : t
    }, n.Point.prototype = {
        clone: function () {
            return new n.Point(this.x, this.y)
        },
        add: function (e) {
            return this.clone()._add(n.point(e))
        },
        _add: function (e) {
            return this.x += e.x, this.y += e.y, this
        },
        subtract: function (e) {
            return this.clone()._subtract(n.point(e))
        },
        _subtract: function (e) {
            return this.x -= e.x, this.y -= e.y, this
        },
        divideBy: function (e) {
            return this.clone()._divideBy(e)
        },
        _divideBy: function (e) {
            return this.x /= e, this.y /= e, this
        },
        multiplyBy: function (e) {
            return this.clone()._multiplyBy(e)
        },
        _multiplyBy: function (e) {
            return this.x *= e, this.y *= e, this
        },
        round: function () {
            return this.clone()._round()
        },
        _round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        floor: function () {
            return this.clone()._floor()
        },
        _floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        distanceTo: function (e) {
            e = n.point(e);
            var t = e.x - this.x,
                r = e.y - this.y;
            return Math.sqrt(t * t + r * r)
        },
        equals: function (e) {
            return e.x === this.x && e.y === this.y
        },
        toString: function () {
            return "Point(" + n.Util.formatNum(this.x) + ", " + n.Util.formatNum(this.y) + ")"
        }
    }, n.point = function (e, t, r) {
        return e instanceof n.Point ? e : e instanceof Array ? new n.Point(e[0], e[1]) : isNaN(e) ? e : new n.Point(e, t, r)
    }, n.Bounds = n.Class.extend({
        initialize: function (e, t) {
            if (!e) return;
            var n = t ? [e, t] : e;
            for (var r = 0, i = n.length; r < i; r++) this.extend(n[r])
        },
        extend: function (e) {
            return e = n.point(e), !this.min && !this.max ? (this.min = e.clone(), this.max = e.clone()) : (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(e.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(e.y, this.max.y)), this
        },
        getCenter: function (e) {
            return new n.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, e)
        },
        getBottomLeft: function () {
            return new n.Point(this.min.x, this.max.y)
        },
        getTopRight: function () {
            return new n.Point(this.max.x, this.min.y)
        },
        contains: function (e) {
            var t, r;
            return typeof e[0] == "number" || e instanceof n.Point ? e = n.point(e) : e = n.bounds(e), e instanceof n.Bounds ? (t = e.min, r = e.max) : t = r = e, t.x >= this.min.x && r.x <= this.max.x && t.y >= this.min.y && r.y <= this.max.y
        },
        intersects: function (e) {
            e = n.bounds(e);
            var t = this.min,
                r = this.max,
                i = e.min,
                s = e.max,
                o = s.x >= t.x && i.x <= r.x,
                u = s.y >= t.y && i.y <= r.y;
            return o && u
        },
        isValid: function () {
            return !!this.min && !! this.max
        }
    }), n.bounds = function (e, t) {
        return !e || e instanceof n.Bounds ? e : new n.Bounds(e, t)
    }, n.Transformation = n.Class.extend({
        initialize: function (e, t, n, r) {
            this._a = e, this._b = t, this._c = n, this._d = r
        },
        transform: function (e, t) {
            return this._transform(e.clone(), t)
        },
        _transform: function (e, t) {
            return t = t || 1, e.x = t * (this._a * e.x + this._b), e.y = t * (this._c * e.y + this._d), e
        },
        untransform: function (e, t) {
            return t = t || 1, new n.Point((e.x / t - this._b) / this._a, (e.y / t - this._d) / this._c)
        }
    }), n.DomUtil = {
        get: function (e) {
            return typeof e == "string" ? document.getElementById(e) : e
        },
        getStyle: function (e, t) {
            var n = e.style[t];
            !n && e.currentStyle && (n = e.currentStyle[t]);
            if ((!n || n === "auto") && document.defaultView) {
                var r = document.defaultView.getComputedStyle(e, null);
                n = r ? r[t] : null
            }
            return n === "auto" ? null : n
        },
        getViewportOffset: function (e) {
            var t = 0,
                r = 0,
                i = e,
                s = document.body,
                o, u = n.Browser.ie7;
            do {
                t += i.offsetTop || 0, r += i.offsetLeft || 0, o = n.DomUtil.getStyle(i, "position");
                if (i.offsetParent === s && o === "absolute") break;
                if (o === "fixed") {
                    t += s.scrollTop || 0, r += s.scrollLeft || 0;
                    break
                }
                i = i.offsetParent
            } while (i);
            i = e;
            do {
                if (i === s) break;
                t -= i.scrollTop || 0, r -= i.scrollLeft || 0, !n.DomUtil.documentIsLtr() && (n.Browser.webkit || u) && (r += i.scrollWidth - i.clientWidth, u && n.DomUtil.getStyle(i, "overflow-y") !== "hidden" && n.DomUtil.getStyle(i, "overflow") !== "hidden" && (r += 17)), i = i.parentNode
            } while (i);
            return new n.Point(r, t)
        },
        documentIsLtr: function () {
            return n.DomUtil._docIsLtrCached || (n.DomUtil._docIsLtrCached = !0, n.DomUtil._docIsLtr = n.DomUtil.getStyle(document.body, "direction") === "ltr"), n.DomUtil._docIsLtr
        },
        create: function (e, t, n) {
            var r = document.createElement(e);
            return r.className = t, n && n.appendChild(r), r
        },
        disableTextSelection: function () {
            document.selection && document.selection.empty && document.selection.empty(), this._onselectstart || (this._onselectstart = document.onselectstart, document.onselectstart = n.Util.falseFn)
        },
        enableTextSelection: function () {
            document.onselectstart === n.Util.falseFn && (document.onselectstart = this._onselectstart, this._onselectstart = null)
        },
        hasClass: function (e, t) {
            return e.className.length > 0 && (new RegExp("(^|\\s)" + t + "(\\s|$)")).test(e.className)
        },
        addClass: function (e, t) {
            n.DomUtil.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
        },
        removeClass: function (e, t) {
            function n(e, n) {
                return n === t ? "" : e
            }
            e.className = e.className.replace(/(\S+)\s*/g, n).replace(/(^\s+|\s+$)/, "")
        },
        setOpacity: function (e, t) {
            if ("opacity" in e.style) e.style.opacity = t;
            else if ("filter" in e.style) {
                var n = !1,
                    r = "DXImageTransform.Microsoft.Alpha";
                try {
                    n = e.filters.item(r)
                } catch (i) {}
                t = Math.round(t * 100), n ? (n.Enabled = t !== 100, n.Opacity = t) : e.style.filter += " progid:" + r + "(opacity=" + t + ")"
            }
        },
        testProp: function (e) {
            var t = document.documentElement.style;
            for (var n = 0; n < e.length; n++)
                if (e[n] in t) return e[n];
            return !1
        },
        getTranslateString: function (e) {
            var t = n.Browser.webkit3d,
                r = "translate" + (t ? "3d" : "") + "(",
                i = (t ? ",0" : "") + ")";
            return r + e.x + "px," + e.y + "px" + i
        },
        getScaleString: function (e, t) {
            var r = n.DomUtil.getTranslateString(t.add(t.multiplyBy(-1 * e))),
                i = " scale(" + e + ") ";
            return r + i
        },
        setPosition: function (e, t, r) {
            e._leaflet_pos = t, !r && n.Browser.any3d ? (e.style[n.DomUtil.TRANSFORM] = n.DomUtil.getTranslateString(t), n.Browser.mobileWebkit3d && (e.style.WebkitBackfaceVisibility = "hidden")) : (e.style.left = t.x + "px", e.style.top = t.y + "px")
        },
        getPosition: function (e) {
            return e._leaflet_pos
        }
    }, n.DomUtil.TRANSFORM = n.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), n.DomUtil.TRANSITION = n.DomUtil.testProp(["transition", "webkitTransition", "OTransition", "MozTransition", "msTransition"]), n.DomUtil.TRANSITION_END = n.DomUtil.TRANSITION === "webkitTransition" || n.DomUtil.TRANSITION === "OTransition" ? n.DomUtil.TRANSITION + "End" : "transitionend", n.LatLng = function (e, t, n) {
        var r = parseFloat(e),
            i = parseFloat(t);
        if (isNaN(r) || isNaN(i)) throw new Error("Invalid LatLng object: (" + e + ", " + t + ")");
        n !== !0 && (r = Math.max(Math.min(r, 90), -90), i = (i + 180) % 360 + (i < -180 || i === 180 ? 180 : -180)), this.lat = r, this.lng = i
    }, n.extend(n.LatLng, {
        DEG_TO_RAD: Math.PI / 180,
        RAD_TO_DEG: 180 / Math.PI,
        MAX_MARGIN: 1e-9
    }), n.LatLng.prototype = {
        equals: function (e) {
            if (!e) return !1;
            e = n.latLng(e);
            var t = Math.max(Math.abs(this.lat - e.lat), Math.abs(this.lng - e.lng));
            return t <= n.LatLng.MAX_MARGIN
        },
        toString: function (e) {
            return "LatLng(" + n.Util.formatNum(this.lat, e) + ", " + n.Util.formatNum(this.lng, e) + ")"
        },
        distanceTo: function (e) {
            e = n.latLng(e);
            var t = 6378137,
                r = n.LatLng.DEG_TO_RAD,
                i = (e.lat - this.lat) * r,
                s = (e.lng - this.lng) * r,
                o = this.lat * r,
                u = e.lat * r,
                a = Math.sin(i / 2),
                f = Math.sin(s / 2),
                l = a * a + f * f * Math.cos(o) * Math.cos(u);
            return t * 2 * Math.atan2(Math.sqrt(l), Math.sqrt(1 - l))
        }
    }, n.latLng = function (e, t, r) {
        return e instanceof n.LatLng ? e : e instanceof Array ? new n.LatLng(e[0], e[1]) : isNaN(e) ? e : new n.LatLng(e, t, r)
    }, n.LatLngBounds = n.Class.extend({
        initialize: function (e, t) {
            if (!e) return;
            var n = t ? [e, t] : e;
            for (var r = 0, i = n.length; r < i; r++) this.extend(n[r])
        },
        extend: function (e) {
            return typeof e[0] == "number" || e instanceof n.LatLng ? e = n.latLng(e) : e = n.latLngBounds(e), e instanceof n.LatLng ? !this._southWest && !this._northEast ? (this._southWest = new n.LatLng(e.lat, e.lng, !0), this._northEast = new n.LatLng(e.lat, e.lng, !0)) : (this._southWest.lat = Math.min(e.lat, this._southWest.lat), this._southWest.lng = Math.min(e.lng, this._southWest.lng), this._northEast.lat = Math.max(e.lat, this._northEast.lat), this._northEast.lng = Math.max(e.lng, this._northEast.lng)) : e instanceof n.LatLngBounds && (this.extend(e._southWest), this.extend(e._northEast)), this
        },
        pad: function (e) {
            var t = this._southWest,
                r = this._northEast,
                i = Math.abs(t.lat - r.lat) * e,
                s = Math.abs(t.lng - r.lng) * e;
            return new n.LatLngBounds(new n.LatLng(t.lat - i, t.lng - s), new n.LatLng(r.lat + i, r.lng + s))
        },
        getCenter: function () {
            return new n.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
        },
        getSouthWest: function () {
            return this._southWest
        },
        getNorthEast: function () {
            return this._northEast
        },
        getNorthWest: function () {
            return new n.LatLng(this._northEast.lat, this._southWest.lng, !0)
        },
        getSouthEast: function () {
            return new n.LatLng(this._southWest.lat, this._northEast.lng, !0)
        },
        contains: function (e) {
            typeof e[0] == "number" || e instanceof n.LatLng ? e = n.latLng(e) : e = n.latLngBounds(e);
            var t = this._southWest,
                r = this._northEast,
                i, s;
            return e instanceof n.LatLngBounds ? (i = e.getSouthWest(), s = e.getNorthEast()) : i = s = e, i.lat >= t.lat && s.lat <= r.lat && i.lng >= t.lng && s.lng <= r.lng
        },
        intersects: function (e) {
            e = n.latLngBounds(e);
            var t = this._southWest,
                r = this._northEast,
                i = e.getSouthWest(),
                s = e.getNorthEast(),
                o = s.lat >= t.lat && i.lat <= r.lat,
                u = s.lng >= t.lng && i.lng <= r.lng;
            return o && u
        },
        toBBoxString: function () {
            var e = this._southWest,
                t = this._northEast;
            return [e.lng, e.lat, t.lng, t.lat].join(",")
        },
        equals: function (e) {
            return e ? (e = n.latLngBounds(e), this._southWest.equals(e.getSouthWest()) && this._northEast.equals(e.getNorthEast())) : !1
        },
        isValid: function () {
            return !!this._southWest && !! this._northEast
        }
    }), n.latLngBounds = function (e, t) {
        return !e || e instanceof n.LatLngBounds ? e : new n.LatLngBounds(e, t)
    }, n.Projection = {}, n.Projection.SphericalMercator = {
        MAX_LATITUDE: 85.0511287798,
        project: function (e) {
            var t = n.LatLng.DEG_TO_RAD,
                r = this.MAX_LATITUDE,
                i = Math.max(Math.min(r, e.lat), -r),
                s = e.lng * t,
                o = i * t;
            return o = Math.log(Math.tan(Math.PI / 4 + o / 2)), new n.Point(s, o)
        },
        unproject: function (e) {
            var t = n.LatLng.RAD_TO_DEG,
                r = e.x * t,
                i = (2 * Math.atan(Math.exp(e.y)) - Math.PI / 2) * t;
            return new n.LatLng(i, r, !0)
        }
    }, n.Projection.LonLat = {
        project: function (e) {
            return new n.Point(e.lng, e.lat)
        },
        unproject: function (e) {
            return new n.LatLng(e.y, e.x, !0)
        }
    }, n.CRS = {
        latLngToPoint: function (e, t) {
            var n = this.projection.project(e),
                r = this.scale(t);
            return this.transformation._transform(n, r)
        },
        pointToLatLng: function (e, t) {
            var n = this.scale(t),
                r = this.transformation.untransform(e, n);
            return this.projection.unproject(r)
        },
        project: function (e) {
            return this.projection.project(e)
        },
        scale: function (e) {
            return 256 * Math.pow(2, e)
        }
    }, n.CRS.Simple = n.extend({}, n.CRS, {
        projection: n.Projection.LonLat,
        transformation: new n.Transformation(1, 0, 1, 0)
    }), n.CRS.EPSG3857 = n.extend({}, n.CRS, {
        code: "EPSG:3857",
        projection: n.Projection.SphericalMercator,
        transformation: new n.Transformation(.5 / Math.PI, .5, -0.5 / Math.PI, .5),
        project: function (e) {
            var t = this.projection.project(e),
                n = 6378137;
            return t.multiplyBy(n)
        }
    }), n.CRS.EPSG900913 = n.extend({}, n.CRS.EPSG3857, {
        code: "EPSG:900913"
    }), n.CRS.EPSG4326 = n.extend({}, n.CRS, {
        code: "EPSG:4326",
        projection: n.Projection.LonLat,
        transformation: new n.Transformation(1 / 360, .5, -1 / 360, .5)
    }), n.Map = n.Class.extend({
        includes: n.Mixin.Events,
        options: {
            crs: n.CRS.EPSG3857,
            fadeAnimation: n.DomUtil.TRANSITION && !n.Browser.android23,
            trackResize: !0,
            markerZoomAnimation: n.DomUtil.TRANSITION && n.Browser.any3d
        },
        initialize: function (e, r) {
            r = n.setOptions(this, r), this._initContainer(e), this._initLayout(), this._initHooks(), this._initEvents(), r.maxBounds && this.setMaxBounds(r.maxBounds), r.center && r.zoom !== t && this.setView(n.latLng(r.center), r.zoom, !0), this._initLayers(r.layers)
        },
        setView: function (e, t) {
            return this._resetView(n.latLng(e), this._limitZoom(t)), this
        },
        setZoom: function (e) {
            return this.setView(this.getCenter(), e)
        },
        zoomIn: function (e) {
            return this.setZoom(this._zoom + (e || 1))
        },
        zoomOut: function (e) {
            return this.setZoom(this._zoom - (e || 1))
        },
        fitBounds: function (e) {
            var t = this.getBoundsZoom(e);
            return this.setView(n.latLngBounds(e).getCenter(), t)
        },
        fitWorld: function () {
            var e = new n.LatLng(-60, -170),
                t = new n.LatLng(85, 179);
            return this.fitBounds(new n.LatLngBounds(e, t))
        },
        panTo: function (e) {
            return this.setView(e, this._zoom)
        },
        panBy: function (e) {
            return this.fire("movestart"), this._rawPanBy(n.point(e)), this.fire("move"), this.fire("moveend")
        },
        setMaxBounds: function (e) {
            e = n.latLngBounds(e), this.options.maxBounds = e;
            if (!e) return this._boundsMinZoom = null, this;
            var t = this.getBoundsZoom(e, !0);
            return this._boundsMinZoom = t, this._loaded && (this._zoom < t ? this.setView(e.getCenter(), t) : this.panInsideBounds(e)), this
        },
        panInsideBounds: function (e) {
            e = n.latLngBounds(e);
            var t = this.getBounds(),
                r = this.project(t.getSouthWest()),
                i = this.project(t.getNorthEast()),
                s = this.project(e.getSouthWest()),
                o = this.project(e.getNorthEast()),
                u = 0,
                a = 0;
            return i.y < o.y && (a = o.y - i.y), i.x > o.x && (u = o.x - i.x), r.y > s.y && (a = s.y - r.y), r.x < s.x && (u = s.x - r.x), this.panBy(new n.Point(u, a, !0))
        },
        addLayer: function (e) {
            var t = n.stamp(e);
            return this._layers[t] ? this : (this._layers[t] = e, e.options && !isNaN(e.options.maxZoom) && (this._layersMaxZoom = Math.max(this._layersMaxZoom || 0, e.options.maxZoom)), e.options && !isNaN(e.options.minZoom) && (this._layersMinZoom = Math.min(this._layersMinZoom || Infinity, e.options.minZoom)), this.options.zoomAnimation && n.TileLayer && e instanceof n.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, e.on("load", this._onTileLayerLoad, this)), this.whenReady(function () {
                e.onAdd(this), this.fire("layeradd", {
                    layer: e
                })
            }, this), this)
        },
        removeLayer: function (e) {
            var t = n.stamp(e);
            if (!this._layers[t]) return;
            return e.onRemove(this), delete this._layers[t], this.options.zoomAnimation && n.TileLayer && e instanceof n.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, e.off("load", this._onTileLayerLoad, this)), this.fire("layerremove", {
                layer: e
            })
        },
        hasLayer: function (e) {
            var t = n.stamp(e);
            return this._layers.hasOwnProperty(t)
        },
        invalidateSize: function (e) {
            var t = this.getSize();
            this._sizeChanged = !0, this.options.maxBounds && this.setMaxBounds(this.options.maxBounds);
            if (!this._loaded) return this;
            var r = t._subtract(this.getSize())._divideBy(2)._round();
            return e === !0 ? this.panBy(r) : (this._rawPanBy(r), this.fire("move"), clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(n.bind(this.fire, this, "moveend"), 200)), this
        },
        addHandler: function (e, t) {
            if (!t) return;
            return this[e] = new t(this), this.options[e] && this[e].enable(), this
        },
        getCenter: function () {
            return this.layerPointToLatLng(this._getCenterLayerPoint())
        },
        getZoom: function () {
            return this._zoom
        },
        getBounds: function () {
            var e = this.getPixelBounds(),
                t = this.unproject(e.getBottomLeft()),
                r = this.unproject(e.getTopRight());
            return new n.LatLngBounds(t, r)
        },
        getMinZoom: function () {
            var e = this.options.minZoom || 0,
                t = this._layersMinZoom || 0,
                n = this._boundsMinZoom || 0;
            return Math.max(e, t, n)
        },
        getMaxZoom: function () {
            var e = this.options.maxZoom === t ? Infinity : this.options.maxZoom,
                n = this._layersMaxZoom === t ? Infinity : this._layersMaxZoom;
            return Math.min(e, n)
        },
        getBoundsZoom: function (e, t) {
            e = n.latLngBounds(e);
            var r = this.getSize(),
                i = this.options.minZoom || 0,
                s = this.getMaxZoom(),
                o = e.getNorthEast(),
                u = e.getSouthWest(),
                a, f, l, c = !0;
            t && i--;
            do i++, f = this.project(o, i), l = this.project(u, i), a = new n.Point(Math.abs(f.x - l.x), Math.abs(l.y - f.y)), t ? c = a.x < r.x || a.y < r.y : c = a.x <= r.x && a.y <= r.y; while (c && i <= s);
            return c && t ? null : t ? i : i - 1
        },
        getSize: function () {
            if (!this._size || this._sizeChanged) this._size = new n.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1;
            return this._size.clone()
        },
        getPixelBounds: function () {
            var e = this._getTopLeftPoint();
            return new n.Bounds(e, e.add(this.getSize()))
        },
        getPixelOrigin: function () {
            return this._initialTopLeftPoint
        },
        getPanes: function () {
            return this._panes
        },
        getContainer: function () {
            return this._container
        },
        getZoomScale: function (e) {
            var t = this.options.crs;
            return t.scale(e) / t.scale(this._zoom)
        },
        getScaleZoom: function (e) {
            return this._zoom + Math.log(e) / Math.LN2
        },
        project: function (e, r) {
            return r = r === t ? this._zoom : r, this.options.crs.latLngToPoint(n.latLng(e), r)
        },
        unproject: function (e, r) {
            return r = r === t ? this._zoom : r, this.options.crs.pointToLatLng(n.point(e), r)
        },
        layerPointToLatLng: function (e) {
            var t = n.point(e).add(this._initialTopLeftPoint);
            return this.unproject(t)
        },
        latLngToLayerPoint: function (e) {
            var t = this.project(n.latLng(e))._round();
            return t._subtract(this._initialTopLeftPoint)
        },
        containerPointToLayerPoint: function (e) {
            return n.point(e).subtract(this._getMapPanePos())
        },
        layerPointToContainerPoint: function (e) {
            return n.point(e).add(this._getMapPanePos())
        },
        containerPointToLatLng: function (e) {
            var t = this.containerPointToLayerPoint(n.point(e));
            return this.layerPointToLatLng(t)
        },
        latLngToContainerPoint: function (e) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(n.latLng(e)))
        },
        mouseEventToContainerPoint: function (e) {
            return n.DomEvent.getMousePosition(e, this._container)
        },
        mouseEventToLayerPoint: function (e) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e))
        },
        mouseEventToLatLng: function (e) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(e))
        },
        _initContainer: function (e) {
            var t = this._container = n.DomUtil.get(e);
            if (t._leaflet) throw new Error("Map container is already initialized.");
            t._leaflet = !0
        },
        _initLayout: function () {
            var e = this._container;
            e.innerHTML = "", n.DomUtil.addClass(e, "leaflet-container"), n.Browser.touch && n.DomUtil.addClass(e, "leaflet-touch"), this.options.fadeAnimation && n.DomUtil.addClass(e, "leaflet-fade-anim");
            var t = n.DomUtil.getStyle(e, "position");
            t !== "absolute" && t !== "relative" && t !== "fixed" && (e.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
        },
        _initPanes: function () {
            var e = this._panes = {};
            this._mapPane = e.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = e.tilePane = this._createPane("leaflet-tile-pane", this._mapPane), e.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane), e.shadowPane = this._createPane("leaflet-shadow-pane"), e.overlayPane = this._createPane("leaflet-overlay-pane"), e.markerPane = this._createPane("leaflet-marker-pane"), e.popupPane = this._createPane("leaflet-popup-pane");
            var t = " leaflet-zoom-hide";
            this.options.markerZoomAnimation || (n.DomUtil.addClass(e.markerPane, t), n.DomUtil.addClass(e.shadowPane, t), n.DomUtil.addClass(e.popupPane, t))
        },
        _createPane: function (e, t) {
            return n.DomUtil.create("div", e, t || this._panes.objectsPane)
        },
        _initializers: [],
        _initHooks: function () {
            var e, t;
            for (e = 0, t = this._initializers.length; e < t; e++) this._initializers[e].call(this)
        },
        _initLayers: function (e) {
            e = e ? e instanceof Array ? e : [e] : [], this._layers = {}, this._tileLayersNum = 0;
            var t, n;
            for (t = 0, n = e.length; t < n; t++) this.addLayer(e[t])
        },
        _resetView: function (e, t, r, i) {
            var s = this._zoom !== t;
            i || (this.fire("movestart"), s && this.fire("zoomstart")), this._zoom = t, this._initialTopLeftPoint = this._getNewTopLeftPoint(e), r ? this._initialTopLeftPoint._add(this._getMapPanePos()) : n.DomUtil.setPosition(this._mapPane, new n.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;
            var o = !this._loaded;
            this._loaded = !0, this.fire("viewreset", {
                hard: !r
            }), this.fire("move"), (s || i) && this.fire("zoomend"), this.fire("moveend", {
                hard: !r
            }), o && this.fire("load")
        },
        _rawPanBy: function (e) {
            n.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(e))
        },
        _initEvents: function () {
            if (!n.DomEvent) return;
            n.DomEvent.on(this._container, "click", this._onMouseClick, this);
            var t = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"],
                r, i;
            for (r = 0, i = t.length; r < i; r++) n.DomEvent.on(this._container, t[r], this._fireMouseEvent, this);
            this.options.trackResize && n.DomEvent.on(e, "resize", this._onResize, this)
        },
        _onResize: function () {
            n.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = n.Util.requestAnimFrame(this.invalidateSize, this, !1, this._container)
        },
        _onMouseClick: function (e) {
            if (!this._loaded || this.dragging && this.dragging.moved()) return;
            this.fire("preclick"), this._fireMouseEvent(e)
        },
        _fireMouseEvent: function (e) {
            if (!this._loaded) return;
            var t = e.type;
            t = t === "mouseenter" ? "mouseover" : t === "mouseleave" ? "mouseout" : t;
            if (!this.hasEventListeners(t)) return;
            t === "contextmenu" && n.DomEvent.preventDefault(e);
            var r = this.mouseEventToContainerPoint(e),
                i = this.containerPointToLayerPoint(r),
                s = this.layerPointToLatLng(i);
            this.fire(t, {
                latlng: s,
                layerPoint: i,
                containerPoint: r,
                originalEvent: e
            })
        },
        _onTileLayerLoad: function () {
            this._tileLayersToLoad--, this._tileLayersNum && !this._tileLayersToLoad && this._tileBg && (clearTimeout(this._clearTileBgTimer), this._clearTileBgTimer = setTimeout(n.bind(this._clearTileBg, this), 500))
        },
        whenReady: function (e, t) {
            return this._loaded ? e.call(t || this, this) : this.on("load", e, t), this
        },
        _getMapPanePos: function () {
            return n.DomUtil.getPosition(this._mapPane)
        },
        _getTopLeftPoint: function () {
            if (!this._loaded) throw new Error("Set map center and zoom first.");
            return this._initialTopLeftPoint.subtract(this._getMapPanePos())
        },
        _getNewTopLeftPoint: function (e, t) {
            var n = this.getSize()._divideBy(2);
            return this.project(e, t)._subtract(n)._round()
        },
        _latLngToNewLayerPoint: function (e, t, n) {
            var r = this._getNewTopLeftPoint(n, t).add(this._getMapPanePos());
            return this.project(e, t)._subtract(r)
        },
        _getCenterLayerPoint: function () {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
        },
        _getCenterOffset: function (e) {
            return this.latLngToLayerPoint(e).subtract(this._getCenterLayerPoint())
        },
        _limitZoom: function (e) {
            var t = this.getMinZoom(),
                n = this.getMaxZoom();
            return Math.max(t, Math.min(n, e))
        }
    }), n.Map.addInitHook = function (e) {
        var t = Array.prototype.slice.call(arguments, 1),
            n = typeof e == "function" ? e : function () {
                this[e].apply(this, t)
            };
        this.prototype._initializers.push(n)
    }, n.map = function (e, t) {
        return new n.Map(e, t)
    }, n.Projection.Mercator = {
        MAX_LATITUDE: 85.0840591556,
        R_MINOR: 6356752.3142,
        R_MAJOR: 6378137,
        project: function (e) {
            var t = n.LatLng.DEG_TO_RAD,
                r = this.MAX_LATITUDE,
                i = Math.max(Math.min(r, e.lat), -r),
                s = this.R_MAJOR,
                o = this.R_MINOR,
                u = e.lng * t * s,
                a = i * t,
                f = o / s,
                l = Math.sqrt(1 - f * f),
                c = l * Math.sin(a);
            c = Math.pow((1 - c) / (1 + c), l * .5);
            var h = Math.tan(.5 * (Math.PI * .5 - a)) / c;
            return a = -o * Math.log(h), new n.Point(u, a)
        },
        unproject: function (e) {
            var t = n.LatLng.RAD_TO_DEG,
                r = this.R_MAJOR,
                i = this.R_MINOR,
                s = e.x * t / r,
                o = i / r,
                u = Math.sqrt(1 - o * o),
                a = Math.exp(-e.y / i),
                f = Math.PI / 2 - 2 * Math.atan(a),
                l = 15,
                c = 1e-7,
                h = l,
                p = .1,
                d;
            while (Math.abs(p) > c && --h > 0) d = u * Math.sin(f), p = Math.PI / 2 - 2 * Math.atan(a * Math.pow((1 - d) / (1 + d), .5 * u)) - f, f += p;
            return new n.LatLng(f * t, s, !0)
        }
    }, n.CRS.EPSG3395 = n.extend({}, n.CRS, {
        code: "EPSG:3395",
        projection: n.Projection.Mercator,
        transformation: function () {
            var e = n.Projection.Mercator,
                t = e.R_MAJOR,
                r = e.R_MINOR;
            return new n.Transformation(.5 / (Math.PI * t), .5, -0.5 / (Math.PI * r), .5)
        }()
    }), n.TileLayer = n.Class.extend({
        includes: n.Mixin.Events,
        options: {
            minZoom: 0,
            maxZoom: 18,
            tileSize: 256,
            subdomains: "abc",
            errorTileUrl: "",
            attribution: "",
            zoomOffset: 0,
            opacity: 1,
            unloadInvisibleTiles: n.Browser.mobile,
            updateWhenIdle: n.Browser.mobile
        },
        initialize: function (e, t) {
            t = n.setOptions(this, t), t.detectRetina && n.Browser.retina && t.maxZoom > 0 && (t.tileSize = Math.floor(t.tileSize / 2), t.zoomOffset++, t.minZoom > 0 && t.minZoom--, this.options.maxZoom--), this._url = e;
            var r = this.options.subdomains;
            typeof r == "string" && (this.options.subdomains = r.split(""))
        },
        onAdd: function (e) {
            this._map = e, this._initContainer(), this._createTileProto(), e.on({
                viewreset: this._resetCallback,
                moveend: this._update
            }, this), this.options.updateWhenIdle || (this._limitedUpdate = n.Util.limitExecByInterval(this._update, 150, this), e.on("move", this._limitedUpdate, this)), this._reset(), this._update()
        },
        addTo: function (e) {
            return e.addLayer(this), this
        },
        onRemove: function (e) {
            e._panes.tilePane.removeChild(this._container), e.off({
                viewreset: this._resetCallback,
                moveend: this._update
            }, this), this.options.updateWhenIdle || e.off("move", this._limitedUpdate, this), this._container = null, this._map = null
        },
        bringToFront: function () {
            var e = this._map._panes.tilePane;
            return this._container && (e.appendChild(this._container), this._setAutoZIndex(e, Math.max)), this
        },
        bringToBack: function () {
            var e = this._map._panes.tilePane;
            return this._container && (e.insertBefore(this._container, e.firstChild), this._setAutoZIndex(e, Math.min)), this
        },
        getAttribution: function () {
            return this.options.attribution
        },
        setOpacity: function (e) {
            return this.options.opacity = e, this._map && this._updateOpacity(), this
        },
        setZIndex: function (e) {
            return this.options.zIndex = e, this._updateZIndex(), this
        },
        setUrl: function (e, t) {
            return this._url = e, t || this.redraw(), this
        },
        redraw: function () {
            return this._map && (this._map._panes.tilePane.empty = !1, this._reset(!0), this._update()), this
        },
        _updateZIndex: function () {
            this._container && this.options.zIndex !== t && (this._container.style.zIndex = this.options.zIndex)
        },
        _setAutoZIndex: function (e, t) {
            var n = e.getElementsByClassName("leaflet-layer"),
                r = -t(Infinity, -Infinity),
                i, s, o;
            for (s = 0, o = n.length; s < o; s++) n[s] !== this._container && (i = parseInt(n[s].style.zIndex, 10), isNaN(i) || (r = t(r, i)));
            this.options.zIndex = this._container.style.zIndex = (isFinite(r) ? r : 0) + t(1, -1)
        },
        _updateOpacity: function () {
            n.DomUtil.setOpacity(this._container, this.options.opacity);
            var e, t = this._tiles;
            if (n.Browser.webkit)
                for (e in t) t.hasOwnProperty(e) && (t[e].style.webkitTransform += " translate(0,0)")
        },
        _initContainer: function () {
            var e = this._map._panes.tilePane;
            if (!this._container || e.empty) this._container = n.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), e.appendChild(this._container), this.options.opacity < 1 && this._updateOpacity()
        },
        _resetCallback: function (e) {
            this._reset(e.hard)
        },
        _reset: function (e) {
            var t = this._tiles;
            for (var n in t) t.hasOwnProperty(n) && this.fire("tileunload", {
                tile: t[n]
            });
            this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), e && this._container && (this._container.innerHTML = ""), this._initContainer()
        },
        _update: function (e) {
            if (!this._map) return;
            var t = this._map.getPixelBounds(),
                r = this._map.getZoom(),
                i = this.options.tileSize;
            if (r > this.options.maxZoom || r < this.options.minZoom) return;
            var s = new n.Point(Math.floor(t.min.x / i), Math.floor(t.min.y / i)),
                o = new n.Point(Math.floor(t.max.x / i), Math.floor(t.max.y / i)),
                u = new n.Bounds(s, o);
            this._addTilesFromCenterOut(u), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(u)
        },
        _addTilesFromCenterOut: function (e) {
            var t = [],
                r = e.getCenter(),
                i, s, o;
            for (i = e.min.y; i <= e.max.y; i++)
                for (s = e.min.x; s <= e.max.x; s++) o = new n.Point(s, i), this._tileShouldBeLoaded(o) && t.push(o);
            var u = t.length;
            if (u === 0) return;
            t.sort(function (e, t) {
                return e.distanceTo(r) - t.distanceTo(r)
            });
            var a = document.createDocumentFragment();
            this._tilesToLoad || this.fire("loading"), this._tilesToLoad += u;
            for (s = 0; s < u; s++) this._addTile(t[s], a);
            this._container.appendChild(a)
        },
        _tileShouldBeLoaded: function (e) {
            if (e.x + ":" + e.y in this._tiles) return !1;
            if (!this.options.continuousWorld) {
                var t = this._getWrapTileNum();
                if (this.options.noWrap && (e.x < 0 || e.x >= t) || e.y < 0 || e.y >= t) return !1
            }
            return !0
        },
        _removeOtherTiles: function (e) {
            var t, n, r, i;
            for (i in this._tiles) this._tiles.hasOwnProperty(i) && (t = i.split(":"), n = parseInt(t[0], 10), r = parseInt(t[1], 10), (n < e.min.x || n > e.max.x || r < e.min.y || r > e.max.y) && this._removeTile(i))
        },
        _removeTile: function (e) {
            var t = this._tiles[e];
            this.fire("tileunload", {
                tile: t,
                url: t.src
            }), this.options.reuseTiles ? (n.DomUtil.removeClass(t, "leaflet-tile-loaded"), this._unusedTiles.push(t)) : t.parentNode === this._container && this._container.removeChild(t), n.Browser.android || (t.src = n.Util.emptyImageUrl), delete this._tiles[e]
        },
        _addTile: function (e, t) {
            var r = this._getTilePos(e),
                i = this._getTile();
            n.DomUtil.setPosition(i, r, n.Browser.chrome || n.Browser.android23), this._tiles[e.x + ":" + e.y] = i, this._loadTile(i, e), i.parentNode !== this._container && t.appendChild(i)
        },
        _getZoomForUrl: function () {
            var e = this.options,
                t = this._map.getZoom();
            return e.zoomReverse && (t = e.maxZoom - t), t + e.zoomOffset
        },
        _getTilePos: function (e) {
            var t = this._map.getPixelOrigin(),
                n = this.options.tileSize;
            return e.multiplyBy(n).subtract(t)
        },
        getTileUrl: function (e) {
            return this._adjustTilePoint(e), n.Util.template(this._url, n.extend({
                s: this._getSubdomain(e),
                z: this._getZoomForUrl(),
                x: e.x,
                y: e.y
            }, this.options))
        },
        _getWrapTileNum: function () {
            return Math.pow(2, this._getZoomForUrl())
        },
        _adjustTilePoint: function (e) {
            var t = this._getWrapTileNum();
            !this.options.continuousWorld && !this.options.noWrap && (e.x = (e.x % t + t) % t), this.options.tms && (e.y = t - e.y - 1)
        },
        _getSubdomain: function (e) {
            var t = (e.x + e.y) % this.options.subdomains.length;
            return this.options.subdomains[t]
        },
        _createTileProto: function () {
            var e = this._tileImg = n.DomUtil.create("img", "leaflet-tile");
            e.style.width = e.style.height = this.options.tileSize + "px", e.galleryimg = "no"
        },
        _getTile: function () {
            if (this.options.reuseTiles && this._unusedTiles.length > 0) {
                var e = this._unusedTiles.pop();
                return this._resetTile(e), e
            }
            return this._createTile()
        },
        _resetTile: function (e) {},
        _createTile: function () {
            var e = this._tileImg.cloneNode(!1);
            return e.onselectstart = e.onmousemove = n.Util.falseFn, e
        },
        _loadTile: function (e, t) {
            e._layer = this, e.onload = this._tileOnLoad, e.onerror = this._tileOnError, e.src = this.getTileUrl(t)
        },
        _tileLoaded: function () {
            this._tilesToLoad--, this._tilesToLoad || this.fire("load")
        },
        _tileOnLoad: function (e) {
            var t = this._layer;
            this.src !== n.Util.emptyImageUrl && (n.DomUtil.addClass(this, "leaflet-tile-loaded"), t.fire("tileload", {
                tile: this,
                url: this.src
            })), t._tileLoaded()
        },
        _tileOnError: function (e) {
            var t = this._layer;
            t.fire("tileerror", {
                tile: this,
                url: this.src
            });
            var n = t.options.errorTileUrl;
            n && (this.src = n), t._tileLoaded()
        }
    }), n.tileLayer = function (e, t) {
        return new n.TileLayer(e, t)
    }, n.TileLayer.WMS = n.TileLayer.extend({
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            version: "1.1.1",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: !1
        },
        initialize: function (e, t) {
            this._url = e;
            var r = n.extend({}, this.defaultWmsParams);
            t.detectRetina && n.Browser.retina ? r.width = r.height = this.options.tileSize * 2 : r.width = r.height = this.options.tileSize;
            for (var i in t) this.options.hasOwnProperty(i) || (r[i] = t[i]);
            this.wmsParams = r, n.setOptions(this, t)
        },
        onAdd: function (e) {
            var t = parseFloat(this.wmsParams.version) >= 1.3 ? "crs" : "srs";
            this.wmsParams[t] = e.options.crs.code, n.TileLayer.prototype.onAdd.call(this, e)
        },
        getTileUrl: function (e, t) {
            var r = this._map,
                i = r.options.crs,
                s = this.options.tileSize,
                o = e.multiplyBy(s),
                u = o.add(new n.Point(s, s)),
                a = i.project(r.unproject(o, t)),
                f = i.project(r.unproject(u, t)),
                l = [a.x, f.y, f.x, a.y].join(","),
                c = n.Util.template(this._url, {
                    s: this._getSubdomain(e)
                });
            return c + n.Util.getParamString(this.wmsParams) + "&bbox=" + l
        },
        setParams: function (e, t) {
            return n.extend(this.wmsParams, e), t || this.redraw(), this
        }
    }), n.tileLayer.wms = function (e, t) {
        return new n.TileLayer.WMS(e, t)
    }, n.TileLayer.Canvas = n.TileLayer.extend({
        options: {
            async: !1
        },
        initialize: function (e) {
            n.setOptions(this, e)
        },
        redraw: function () {
            var e = this._tiles;
            for (var t in e) e.hasOwnProperty(t) && this._redrawTile(e[t])
        },
        _redrawTile: function (e) {
            this.drawTile(e, e._tilePoint, this._map._zoom)
        },
        _createTileProto: function () {
            var e = this._canvasProto = n.DomUtil.create("canvas", "leaflet-tile");
            e.width = e.height = this.options.tileSize
        },
        _createTile: function () {
            var e = this._canvasProto.cloneNode(!1);
            return e.onselectstart = e.onmousemove = n.Util.falseFn, e
        },
        _loadTile: function (e, t) {
            e._layer = this, e._tilePoint = t, this._redrawTile(e), this.options.async || this.tileDrawn(e)
        },
        drawTile: function (e, t) {},
        tileDrawn: function (e) {
            this._tileOnLoad.call(e)
        }
    }), n.tileLayer.canvas = function (e) {
        return new n.TileLayer.Canvas(e)
    }, n.ImageOverlay = n.Class.extend({
        includes: n.Mixin.Events,
        options: {
            opacity: 1
        },
        initialize: function (e, t, r) {
            this._url = e, this._bounds = n.latLngBounds(t), n.setOptions(this, r)
        },
        onAdd: function (e) {
            this._map = e, this._image || this._initImage(), e._panes.overlayPane.appendChild(this._image), e.on("viewreset", this._reset, this), e.options.zoomAnimation && n.Browser.any3d && e.on("zoomanim", this._animateZoom, this), this._reset()
        },
        onRemove: function (e) {
            e.getPanes().overlayPane.removeChild(this._image), e.off("viewreset", this._reset, this), e.options.zoomAnimation && e.off("zoomanim", this._animateZoom, this)
        },
        addTo: function (e) {
            return e.addLayer(this), this
        },
        setOpacity: function (e) {
            return this.options.opacity = e, this._updateOpacity(), this
        },
        bringToFront: function () {
            return this._image && this._map._panes.overlayPane.appendChild(this._image), this
        },
        bringToBack: function () {
            var e = this._map._panes.overlayPane;
            return this._image && e.insertBefore(this._image, e.firstChild), this
        },
        _initImage: function () {
            this._image = n.DomUtil.create("img", "leaflet-image-layer"), this._map.options.zoomAnimation && n.Browser.any3d ? n.DomUtil.addClass(this._image, "leaflet-zoom-animated") : n.DomUtil.addClass(this._image, "leaflet-zoom-hide"), this._updateOpacity(), n.extend(this._image, {
                galleryimg: "no",
                onselectstart: n.Util.falseFn,
                onmousemove: n.Util.falseFn,
                onload: n.bind(this._onImageLoad, this),
                src: this._url
            })
        },
        _animateZoom: function (e) {
            var t = this._map,
                r = this._image,
                i = t.getZoomScale(e.zoom),
                s = this._bounds.getNorthWest(),
                o = this._bounds.getSouthEast(),
                u = t._latLngToNewLayerPoint(s, e.zoom, e.center),
                a = t._latLngToNewLayerPoint(o, e.zoom, e.center)._subtract(u),
                f = t.latLngToLayerPoint(o)._subtract(t.latLngToLayerPoint(s)),
                l = u._add(a._subtract(f)._divideBy(2));
            r.style[n.DomUtil.TRANSFORM] = n.DomUtil.getTranslateString(l) + " scale(" + i + ") "
        },
        _reset: function () {
            var e = this._image,
                t = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                r = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(t);
            n.DomUtil.setPosition(e, t), e.style.width = r.x + "px", e.style.height = r.y + "px"
        },
        _onImageLoad: function () {
            this.fire("load")
        },
        _updateOpacity: function () {
            n.DomUtil.setOpacity(this._image, this.options.opacity)
        }
    }), n.imageOverlay = function (e, t, r) {
        return new n.ImageOverlay(e, t, r)
    }, n.Icon = n.Class.extend({
        options: {
            className: ""
        },
        initialize: function (e) {
            n.setOptions(this, e)
        },
        createIcon: function () {
            return this._createIcon("icon")
        },
        createShadow: function () {
            return this._createIcon("shadow")
        },
        _createIcon: function (e) {
            var t = this._getIconUrl(e);
            if (!t) {
                if (e === "icon") throw new Error("iconUrl not set in Icon options (see the docs).");
                return null
            }
            var n = this._createImg(t);
            return this._setIconStyles(n, e), n
        },
        _setIconStyles: function (e, t) {
            var r = this.options,
                i = n.point(r[t + "Size"]),
                s;
            t === "shadow" ? s = n.point(r.shadowAnchor || r.iconAnchor) : s = n.point(r.iconAnchor), !s && i && (s = i.divideBy(2, !0)), e.className = "leaflet-marker-" + t + " " + r.className, s && (e.style.marginLeft = -s.x + "px", e.style.marginTop = -s.y + "px"), i && (e.style.width = i.x + "px", e.style.height = i.y + "px")
        },
        _createImg: function (e) {
            var t;
            return n.Browser.ie6 ? (t = document.createElement("div"), t.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + e + '")') : (t = document.createElement("img"), t.src = e), t
        },
        _getIconUrl: function (e) {
            return this.options[e + "Url"]
        }
    }), n.icon = function (e) {
        return new n.Icon(e)
    }, n.Icon.Default = n.Icon.extend({
        options: {
            iconSize: new n.Point(25, 41),
            iconAnchor: new n.Point(12, 41),
            popupAnchor: new n.Point(1, -34),
            shadowSize: new n.Point(41, 41)
        },
        _getIconUrl: function (e) {
            var t = e + "Url";
            if (this.options[t]) return this.options[t];
            var r = n.Icon.Default.imagePath;
            if (!r) throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
            return r + "/marker-" + e + ".png"
        }
    }), n.Icon.Default.imagePath = function () {
        var e = document.getElementsByTagName("script"),
            t = /\/?leaflet[\-\._]?([\w\-\._]*)\.js\??/,
            n, r, i, s;
        for (n = 0, r = e.length; n < r; n++) {
            i = e[n].src, s = i.match(t);
            if (s) return i.split(t)[0] + "/images"
        }
    }(), n.Marker = n.Class.extend({
        includes: n.Mixin.Events,
        options: {
            icon: new n.Icon.Default,
            title: "",
            clickable: !0,
            draggable: !1,
            zIndexOffset: 0,
            opacity: 1,
            riseOnHover: !1,
            riseOffset: 250
        },
        initialize: function (e, t) {
            n.setOptions(this, t), this._latlng = n.latLng(e)
        },
        onAdd: function (e) {
            this._map = e, e.on("viewreset", this.update, this), this._initIcon(), this.update(), e.options.zoomAnimation && e.options.markerZoomAnimation && e.on("zoomanim", this._animateZoom, this)
        },
        addTo: function (e) {
            return e.addLayer(this), this
        },
        onRemove: function (e) {
            this._removeIcon(), this.fire("remove"), e.off({
                viewreset: this.update,
                zoomanim: this._animateZoom
            }, this), this._map = null
        },
        getLatLng: function () {
            return this._latlng
        },
        setLatLng: function (e) {
            this._latlng = n.latLng(e), this.update(), this.fire("move", {
                latlng: this._latlng
            })
        },
        setZIndexOffset: function (e) {
            this.options.zIndexOffset = e, this.update()
        },
        setIcon: function (e) {
            this._map && this._removeIcon(), this.options.icon = e, this._map && (this._initIcon(), this.update())
        },
        update: function () {
            if (!this._icon) return;
            var e = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(e)
        },
        _initIcon: function () {
            var e = this.options,
                t = this._map,
                r = t.options.zoomAnimation && t.options.markerZoomAnimation,
                i = r ? "leaflet-zoom-animated" : "leaflet-zoom-hide",
                s = !1;
            this._icon || (this._icon = e.icon.createIcon(), e.title && (this._icon.title = e.title), this._initInteraction(), s = this.options.opacity < 1, n.DomUtil.addClass(this._icon, i), e.riseOnHover && n.DomEvent.on(this._icon, "mouseover", this._bringToFront, this).on(this._icon, "mouseout", this._resetZIndex, this)), this._shadow || (this._shadow = e.icon.createShadow(), this._shadow && (n.DomUtil.addClass(this._shadow, i), s = this.options.opacity < 1)), s && this._updateOpacity();
            var o = this._map._panes;
            o.markerPane.appendChild(this._icon), this._shadow && o.shadowPane.appendChild(this._shadow)
        },
        _removeIcon: function () {
            var e = this._map._panes;
            this.options.riseOnHover && n.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex), e.markerPane.removeChild(this._icon), this._shadow && e.shadowPane.removeChild(this._shadow), this._icon = this._shadow = null
        },
        _setPos: function (e) {
            n.DomUtil.setPosition(this._icon, e), this._shadow && n.DomUtil.setPosition(this._shadow, e), this._zIndex = e.y + this.options.zIndexOffset, this._resetZIndex()
        },
        _updateZIndex: function (e) {
            this._icon.style.zIndex = this._zIndex + e
        },
        _animateZoom: function (e) {
            var t = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
            this._setPos(t)
        },
        _initInteraction: function () {
            if (!this.options.clickable) return;
            var e = this._icon,
                t = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
            n.DomUtil.addClass(e, "leaflet-clickable"), n.DomEvent.on(e, "click", this._onMouseClick, this);
            for (var r = 0; r < t.length; r++) n.DomEvent.on(e, t[r], this._fireMouseEvent, this);
            n.Handler.MarkerDrag && (this.dragging = new n.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
        },
        _onMouseClick: function (e) {
            var t = this.dragging && this.dragging.moved();
            (this.hasEventListeners(e.type) || t) && n.DomEvent.stopPropagation(e);
            if (t) return;
            if (this._map.dragging && this._map.dragging.moved()) return;
            this.fire(e.type, {
                originalEvent: e
            })
        },
        _fireMouseEvent: function (e) {
            this.fire(e.type, {
                originalEvent: e
            }), e.type === "contextmenu" && this.hasEventListeners(e.type) && n.DomEvent.preventDefault(e), e.type !== "mousedown" && n.DomEvent.stopPropagation(e)
        },
        setOpacity: function (e) {
            this.options.opacity = e, this._map && this._updateOpacity()
        },
        _updateOpacity: function () {
            n.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && n.DomUtil.setOpacity(this._shadow, this.options.opacity)
        },
        _bringToFront: function () {
            this._updateZIndex(this.options.riseOffset)
        },
        _resetZIndex: function () {
            this._updateZIndex(0)
        }
    }), n.marker = function (e, t) {
        return new n.Marker(e, t)
    }, n.DivIcon = n.Icon.extend({
        options: {
            iconSize: new n.Point(12, 12),
            className: "leaflet-div-icon"
        },
        createIcon: function () {
            var e = document.createElement("div"),
                t = this.options;
            return t.html && (e.innerHTML = t.html), t.bgPos && (e.style.backgroundPosition = -t.bgPos.x + "px " + -t.bgPos.y + "px"), this._setIconStyles(e, "icon"), e
        },
        createShadow: function () {
            return null
        }
    }), n.divIcon = function (e) {
        return new n.DivIcon(e)
    }, n.Map.mergeOptions({
        closePopupOnClick: !0
    }), n.Popup = n.Class.extend({
        includes: n.Mixin.Events,
        options: {
            minWidth: 50,
            maxWidth: 300,
            maxHeight: null,
            autoPan: !0,
            closeButton: !0,
            offset: new n.Point(0, 6),
            autoPanPadding: new n.Point(5, 5),
            className: ""
        },
        initialize: function (e, t) {
            n.setOptions(this, e), this._source = t
        },
        onAdd: function (e) {
            this._map = e, this._container || this._initLayout(), this._updateContent();
            var t = e.options.fadeAnimation;
            t && n.DomUtil.setOpacity(this._container, 0), e._panes.popupPane.appendChild(this._container), e.on("viewreset", this._updatePosition, this), n.Browser.any3d && e.on("zoomanim", this._zoomAnimation, this), e.options.closePopupOnClick && e.on("preclick", this._close, this), this._update(), t && n.DomUtil.setOpacity(this._container, 1)
        },
        addTo: function (e) {
            return e.addLayer(this), this
        },
        openOn: function (e) {
            return e.openPopup(this), this
        },
        onRemove: function (e) {
            e._panes.popupPane.removeChild(this._container), n.Util.falseFn(this._container.offsetWidth), e.off({
                viewreset: this._updatePosition,
                preclick: this._close,
                zoomanim: this._zoomAnimation
            }, this), e.options.fadeAnimation && n.DomUtil.setOpacity(this._container, 0), this._map = null
        },
        setLatLng: function (e) {
            return this._latlng = n.latLng(e), this._update(), this
        },
        setContent: function (e) {
            return this._content = e, this._update(), this
        },
        _close: function () {
            var e = this._map;
            e && (e._popup = null, e.removeLayer(this).fire("popupclose", {
                popup: this
            }))
        },
        _initLayout: function () {
            var e = "leaflet-popup",
                t = e + " " + this.options.className + " leaflet-zoom-animated",
                r = this._container = n.DomUtil.create("div", t),
                i;
            this.options.closeButton && (i = this._closeButton = n.DomUtil.create("a", e + "-close-button", r), i.href = "#close", i.innerHTML = "&#215;", n.DomEvent.on(i, "click", this._onCloseButtonClick, this));
            var s = this._wrapper = n.DomUtil.create("div", e + "-content-wrapper", r);
            n.DomEvent.disableClickPropagation(s), this._contentNode = n.DomUtil.create("div", e + "-content", s), n.DomEvent.on(this._contentNode, "mousewheel", n.DomEvent.stopPropagation), this._tipContainer = n.DomUtil.create("div", e + "-tip-container", r), this._tip = n.DomUtil.create("div", e + "-tip", this._tipContainer)
        },
        _update: function () {
            if (!this._map) return;
            this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan()
        },
        _updateContent: function () {
            if (!this._content) return;
            if (typeof this._content == "string") this._contentNode.innerHTML = this._content;
            else {
                while (this._contentNode.hasChildNodes()) this._contentNode.removeChild(this._contentNode.firstChild);
                this._contentNode.appendChild(this._content)
            }
            this.fire("contentupdate")
        },
        _updateLayout: function () {
            var e = this._contentNode,
                t = e.style;
            t.width = "", t.whiteSpace = "nowrap";
            var r = e.offsetWidth;
            r = Math.min(r, this.options.maxWidth), r = Math.max(r, this.options.minWidth), t.width = r + 1 + "px", t.whiteSpace = "", t.height = "";
            var i = e.offsetHeight,
                s = this.options.maxHeight,
                o = "leaflet-popup-scrolled";
            s && i > s ? (t.height = s + "px", n.DomUtil.addClass(e, o)) : n.DomUtil.removeClass(e, o), this._containerWidth = this._container.offsetWidth
        },
        _updatePosition: function () {
            if (!this._map) return;
            var e = this._map.latLngToLayerPoint(this._latlng),
                t = n.Browser.any3d,
                r = this.options.offset;
            t && n.DomUtil.setPosition(this._container, e), this._containerBottom = -r.y - (t ? 0 : e.y), this._containerLeft = -Math.round(this._containerWidth / 2) + r.x + (t ? 0 : e.x), this._container.style.bottom = this._containerBottom + "px", this._container.style.left = this._containerLeft + "px"
        },
        _zoomAnimation: function (e) {
            var t = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
            n.DomUtil.setPosition(this._container, t)
        },
        _adjustPan: function () {
            if (!this.options.autoPan) return;
            var e = this._map,
                t = this._container.offsetHeight,
                r = this._containerWidth,
                i = new n.Point(this._containerLeft, -t - this._containerBottom);
            n.Browser.any3d && i._add(n.DomUtil.getPosition(this._container));
            var s = e.layerPointToContainerPoint(i),
                o = this.options.autoPanPadding,
                u = e.getSize(),
                a = 0,
                f = 0;
            s.x < 0 && (a = s.x - o.x), s.x + r > u.x && (a = s.x + r - u.x + o.x), s.y < 0 && (f = s.y - o.y), s.y + t > u.y && (f = s.y + t - u.y + o.y), (a || f) && e.panBy(new n.Point(a, f))
        },
        _onCloseButtonClick: function (e) {
            this._close(), n.DomEvent.stop(e)
        }
    }), n.popup = function (e, t) {
        return new n.Popup(e, t)
    }, n.Marker.include({
        openPopup: function () {
            return this._popup && this._map && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)), this
        },
        closePopup: function () {
            return this._popup && this._popup._close(), this
        },
        bindPopup: function (e, t) {
            var r = n.point(this.options.icon.options.popupAnchor) || new n.Point(0, 0);
            return r = r.add(n.Popup.prototype.options.offset), t && t.offset && (r = r.add(t.offset)), t = n.extend({
                offset: r
            }, t), this._popup || this.on("click", this.openPopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), this._popup = (new n.Popup(t, this)).setContent(e), this
        },
        unbindPopup: function () {
            return this._popup && (this._popup = null, this.off("click", this.openPopup).off("remove", this.closePopup).off("move", this._movePopup)), this
        },
        _movePopup: function (e) {
            this._popup.setLatLng(e.latlng)
        }
    }), n.Map.include({
        openPopup: function (e) {
            return this.closePopup(), this._popup = e, this.addLayer(e).fire("popupopen", {
                popup: this._popup
            })
        },
        closePopup: function () {
            return this._popup && this._popup._close(), this
        }
    }), n.LayerGroup = n.Class.extend({
        initialize: function (e) {
            this._layers = {};
            var t, n;
            if (e)
                for (t = 0, n = e.length; t < n; t++) this.addLayer(e[t])
        },
        addLayer: function (e) {
            var t = n.stamp(e);
            return this._layers[t] = e, this._map && this._map.addLayer(e), this
        },
        removeLayer: function (e) {
            var t = n.stamp(e);
            return delete this._layers[t], this._map && this._map.removeLayer(e), this
        },
        clearLayers: function () {
            return this.eachLayer(this.removeLayer, this), this
        },
        invoke: function (e) {
            var t = Array.prototype.slice.call(arguments, 1),
                n, r;
            for (n in this._layers) this._layers.hasOwnProperty(n) && (r = this._layers[n], r[e] && r[e].apply(r, t));
            return this
        },
        onAdd: function (e) {
            this._map = e, this.eachLayer(e.addLayer, e)
        },
        onRemove: function (e) {
            this.eachLayer(e.removeLayer, e), this._map = null
        },
        addTo: function (e) {
            return e.addLayer(this), this
        },
        eachLayer: function (e, t) {
            for (var n in this._layers) this._layers.hasOwnProperty(n) && e.call(t, this._layers[n])
        }
    }), n.layerGroup = function (e) {
        return new n.LayerGroup(e)
    }, n.FeatureGroup = n.LayerGroup.extend({
        includes: n.Mixin.Events,
        statics: {
            EVENTS: "click dblclick mouseover mouseout mousemove contextmenu"
        },
        addLayer: function (e) {
            return this._layers[n.stamp(e)] ? this : (e.on(n.FeatureGroup.EVENTS, this._propagateEvent, this), n.LayerGroup.prototype.addLayer.call(this, e), this._popupContent && e.bindPopup && e.bindPopup(this._popupContent), this.fire("layeradd", {
                layer: e
            }))
        },
        removeLayer: function (e) {
            return e.off(n.FeatureGroup.EVENTS, this._propagateEvent, this), n.LayerGroup.prototype.removeLayer.call(this, e), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", {
                layer: e
            })
        },
        bindPopup: function (e) {
            return this._popupContent = e, this.invoke("bindPopup", e)
        },
        setStyle: function (e) {
            return this.invoke("setStyle", e)
        },
        bringToFront: function () {
            return this.invoke("bringToFront")
        },
        bringToBack: function () {
            return this.invoke("bringToBack")
        },
        getBounds: function () {
            var e = new n.LatLngBounds;
            return this.eachLayer(function (t) {
                e.extend(t instanceof n.Marker ? t.getLatLng() : t.getBounds())
            }), e
        },
        _propagateEvent: function (e) {
            e.layer = e.target, e.target = this, this.fire(e.type, e)
        }
    }), n.featureGroup = function (e) {
        return new n.FeatureGroup(e)
    }, n.Path = n.Class.extend({
        includes: [n.Mixin.Events],
        statics: {
            CLIP_PADDING: n.Browser.mobile ? Math.max(0, Math.min(.5, (1280 / Math.max(e.innerWidth, e.innerHeight) - 1) / 2)) : .5
        },
        options: {
            stroke: !0,
            color: "#0033ff",
            dashArray: null,
            weight: 5,
            opacity: .5,
            fill: !1,
            fillColor: null,
            fillOpacity: .2,
            clickable: !0
        },
        initialize: function (e) {
            n.setOptions(this, e)
        },
        onAdd: function (e) {
            this._map = e, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(), this._container && this._map._pathRoot.appendChild(this._container), e.on({
                viewreset: this.projectLatlngs,
                moveend: this._updatePath
            }, this)
        },
        addTo: function (e) {
            return e.addLayer(this), this
        },
        onRemove: function (e) {
            e._pathRoot.removeChild(this._container), this._map = null, n.Browser.vml && (this._container = null, this._stroke = null, this._fill = null), this.fire("remove"), e.off({
                viewreset: this.projectLatlngs,
                moveend: this._updatePath
            }, this)
        },
        projectLatlngs: function () {},
        setStyle: function (e) {
            return n.setOptions(this, e), this._container && this._updateStyle(), this
        },
        redraw: function () {
            return this._map && (this.projectLatlngs(), this._updatePath()), this
        }
    }), n.Map.include({
        _updatePathViewport: function () {
            var e = n.Path.CLIP_PADDING,
                t = this.getSize(),
                r = n.DomUtil.getPosition(this._mapPane),
                i = r.multiplyBy(-1)._subtract(t.multiplyBy(e)._round()),
                s = i.add(t.multiplyBy(1 + e * 2)._round());
            this._pathViewport = new n.Bounds(i, s)
        }
    }), n.Path.SVG_NS = "http://www.w3.org/2000/svg", n.Browser.svg = !! document.createElementNS && !! document.createElementNS(n.Path.SVG_NS, "svg").createSVGRect, n.Path = n.Path.extend({
        statics: {
            SVG: n.Browser.svg
        },
        bringToFront: function () {
            var e = this._map._pathRoot,
                t = this._container;
            return t && e.lastChild !== t && e.appendChild(t), this
        },
        bringToBack: function () {
            var e = this._map._pathRoot,
                t = this._container,
                n = e.firstChild;
            return t && n !== t && e.insertBefore(t, n), this
        },
        getPathString: function () {},
        _createElement: function (e) {
            return document.createElementNS(n.Path.SVG_NS, e)
        },
        _initElements: function () {
            this._map._initPathRoot(), this._initPath(), this._initStyle()
        },
        _initPath: function () {
            this._container = this._createElement("g"), this._path = this._createElement("path"), this._container.appendChild(this._path)
        },
        _initStyle: function () {
            this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this._updateStyle()
        },
        _updateStyle: function () {
            this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray")) : this._path.setAttribute("stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
        },
        _updatePath: function () {
            var e = this.getPathString();
            e || (e = "M0 0"), this._path.setAttribute("d", e)
        },
        _initEvents: function () {
            if (this.options.clickable) {
                (n.Browser.svg || !n.Browser.vml) && this._path.setAttribute("class", "leaflet-clickable"), n.DomEvent.on(this._container, "click", this._onMouseClick, this);
                var e = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"];
                for (var t = 0; t < e.length; t++) n.DomEvent.on(this._container, e[t], this._fireMouseEvent, this)
            }
        },
        _onMouseClick: function (e) {
            if (this._map.dragging && this._map.dragging.moved()) return;
            this._fireMouseEvent(e)
        },
        _fireMouseEvent: function (e) {
            if (!this.hasEventListeners(e.type)) return;
            var t = this._map,
                r = t.mouseEventToContainerPoint(e),
                i = t.containerPointToLayerPoint(r),
                s = t.layerPointToLatLng(i);
            this.fire(e.type, {
                latlng: s,
                layerPoint: i,
                containerPoint: r,
                originalEvent: e
            }), e.type === "contextmenu" && n.DomEvent.preventDefault(e), e.type !== "mousemove" && n.DomEvent.stopPropagation(e)
        }
    }), n.Map.include({
        _initPathRoot: function () {
            this._pathRoot || (this._pathRoot = n.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && n.Browser.any3d ? (this._pathRoot.setAttribute("class", " leaflet-zoom-animated"), this.on({
                zoomanim: this._animatePathZoom,
                zoomend: this._endPathZoom
            })) : this._pathRoot.setAttribute("class", " leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport())
        },
        _animatePathZoom: function (e) {
            var t = this.getZoomScale(e.zoom),
                r = this._getCenterOffset(e.center),
                i = r.multiplyBy(-t)._add(this._pathViewport.min);
            this._pathRoot.style[n.DomUtil.TRANSFORM] = n.DomUtil.getTranslateString(i) + " scale(" + t + ") ", this._pathZooming = !0
        },
        _endPathZoom: function () {
            this._pathZooming = !1
        },
        _updateSvgViewport: function () {
            if (this._pathZooming) return;
            this._updatePathViewport();
            var e = this._pathViewport,
                t = e.min,
                r = e.max,
                i = r.x - t.x,
                s = r.y - t.y,
                o = this._pathRoot,
                u = this._panes.overlayPane;
            n.Browser.mobileWebkit && u.removeChild(o), n.DomUtil.setPosition(o, t), o.setAttribute("width", i), o.setAttribute("height", s), o.setAttribute("viewBox", [t.x, t.y, i, s].join(" ")), n.Browser.mobileWebkit && u.appendChild(o)
        }
    }), n.Path.include({
        bindPopup: function (e, t) {
            if (!this._popup || t) this._popup = new n.Popup(t, this);
            return this._popup.setContent(e), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded = !0), this
        },
        unbindPopup: function () {
            return this._popup && (this._popup = null, this.off("click", this.openPopup).off("remove", this.closePopup), this._popupHandlersAdded = !1), this
        },
        openPopup: function (e) {
            return this._popup && (e = e || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({
                latlng: e
            })), this
        },
        closePopup: function () {
            return this._popup && this._popup._close(), this
        },
        _openPopup: function (e) {
            this._popup.setLatLng(e.latlng), this._map.openPopup(this._popup)
        }
    }), n.Browser.vml = !n.Browser.svg && function () {
        try {
            var e = document.createElement("div");
            e.innerHTML = '<v:shape adj="1"/>';
            var t = e.firstChild;
            return t.style.behavior = "url(#default#VML)", t && typeof t.adj == "object"
        } catch (n) {
            return !1
        }
    }(), n.Path = n.Browser.svg || !n.Browser.vml ? n.Path : n.Path.extend({
        statics: {
            VML: !0,
            CLIP_PADDING: .02
        },
        _createElement: function () {
            try {
                return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                function (e) {
                    return document.createElement("<lvml:" + e + ' class="lvml">')
                }
            } catch (e) {
                return function (e) {
                    return document.createElement("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                }
            }
        }(),
        _initPath: function () {
            var e = this._container = this._createElement("shape");
            n.DomUtil.addClass(e, "leaflet-vml-shape"), this.options.clickable && n.DomUtil.addClass(e, "leaflet-clickable"), e.coordsize = "1 1", this._path = this._createElement("path"), e.appendChild(this._path), this._map._pathRoot.appendChild(e)
        },
        _initStyle: function () {
            this._updateStyle()
        },
        _updateStyle: function () {
            var e = this._stroke,
                t = this._fill,
                n = this.options,
                r = this._container;
            r.stroked = n.stroke, r.filled = n.fill, n.stroke ? (e || (e = this._stroke = this._createElement("stroke"), e.endcap = "round", r.appendChild(e)), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = n.dashArray.replace(/ *, */g, " ") : e.dashStyle = "") : e && (r.removeChild(e), this._stroke = null), n.fill ? (t || (t = this._fill = this._createElement("fill"), r.appendChild(t)), t.color = n.fillColor || n.color, t.opacity = n.fillOpacity) : t && (r.removeChild(t), this._fill = null)
        },
        _updatePath: function () {
            var e = this._container.style;
            e.display = "none", this._path.v = this.getPathString() + " ", e.display = ""
        }
    }), n.Map.include(n.Browser.svg || !n.Browser.vml ? {} : {
        _initPathRoot: function () {
            if (this._pathRoot) return;
            var e = this._pathRoot = document.createElement("div");
            e.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(e), this.on("moveend", this._updatePathViewport), this._updatePathViewport()
        }
    }), n.Browser.canvas = function () {
        return !!document.createElement("canvas").getContext
    }(), n.Path = n.Path.SVG && !e.L_PREFER_CANVAS || !n.Browser.canvas ? n.Path : n.Path.extend({
        statics: {
            CANVAS: !0,
            SVG: !1
        },
        redraw: function () {
            return this._map && (this.projectLatlngs(), this._requestUpdate()), this
        },
        setStyle: function (e) {
            return n.setOptions(this, e), this._map && (this._updateStyle(), this._requestUpdate()), this
        },
        onRemove: function (e) {
            e.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this._requestUpdate(), this._map = null
        },
        _requestUpdate: function () {
            this._map && !n.Path._updateRequest && (n.Path._updateRequest = n.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
        },
        _fireMapMoveEnd: function () {
            n.Path._updateRequest = null, this.fire("moveend")
        },
        _initElements: function () {
            this._map._initPathRoot(), this._ctx = this._map._canvasCtx
        },
        _updateStyle: function () {
            var e = this.options;
            e.stroke && (this._ctx.lineWidth = e.weight, this._ctx.strokeStyle = e.color), e.fill && (this._ctx.fillStyle = e.fillColor || e.color)
        },
        _drawPath: function () {
            var e, t, r, i, s, o;
            this._ctx.beginPath();
            for (e = 0, r = this._parts.length; e < r; e++) {
                for (t = 0, i = this._parts[e].length; t < i; t++) s = this._parts[e][t], o = (t === 0 ? "move" : "line") + "To", this._ctx[o](s.x, s.y);
                this instanceof n.Polygon && this._ctx.closePath()
            }
        },
        _checkIfEmpty: function () {
            return !this._parts.length
        },
        _updatePath: function () {
            if (this._checkIfEmpty()) return;
            var e = this._ctx,
                t = this.options;
            this._drawPath(), e.save(), this._updateStyle(), t.fill && (t.fillOpacity < 1 && (e.globalAlpha = t.fillOpacity), e.fill()), t.stroke && (t.opacity < 1 && (e.globalAlpha = t.opacity), e.stroke()), e.restore()
        },
        _initEvents: function () {
            this.options.clickable && this._map.on("click", this._onClick, this)
        },
        _onClick: function (e) {
            this._containsPoint(e.layerPoint) && this.fire("click", e)
        }
    }), n.Map.include(n.Path.SVG && !e.L_PREFER_CANVAS || !n.Browser.canvas ? {} : {
        _initPathRoot: function () {
            var e = this._pathRoot,
                t;
            e || (e = this._pathRoot = document.createElement("canvas"), e.style.position = "absolute", t = this._canvasCtx = e.getContext("2d"), t.lineCap = "round", t.lineJoin = "round", this._panes.overlayPane.appendChild(e), this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport())
        },
        _updateCanvasViewport: function () {
            if (this._pathZooming) return;
            this._updatePathViewport();
            var e = this._pathViewport,
                t = e.min,
                r = e.max.subtract(t),
                i = this._pathRoot;
            n.DomUtil.setPosition(i, t), i.width = r.x, i.height = r.y, i.getContext("2d").translate(-t.x, -t.y)
        }
    }), n.LineUtil = {
        simplify: function (e, t) {
            if (!t || !e.length) return e.slice();
            var n = t * t;
            return e = this._reducePoints(e, n), e = this._simplifyDP(e, n), e
        },
        pointToSegmentDistance: function (e, t, n) {
            return Math.sqrt(this._sqClosestPointOnSegment(e, t, n, !0))
        },
        closestPointOnSegment: function (e, t, n) {
            return this._sqClosestPointOnSegment(e, t, n)
        },
        _simplifyDP: function (e, n) {
            var r = e.length,
                i = typeof Uint8Array != t + "" ? Uint8Array : Array,
                s = new i(r);
            s[0] = s[r - 1] = 1, this._simplifyDPStep(e, s, n, 0, r - 1);
            var o, u = [];
            for (o = 0; o < r; o++) s[o] && u.push(e[o]);
            return u
        },
        _simplifyDPStep: function (e, t, n, r, i) {
            var s = 0,
                o, u, a;
            for (u = r + 1; u <= i - 1; u++) a = this._sqClosestPointOnSegment(e[u], e[r], e[i], !0), a > s && (o = u, s = a);
            s > n && (t[o] = 1, this._simplifyDPStep(e, t, n, r, o), this._simplifyDPStep(e, t, n, o, i))
        },
        _reducePoints: function (e, t) {
            var n = [e[0]];
            for (var r = 1, i = 0, s = e.length; r < s; r++) this._sqDist(e[r], e[i]) > t && (n.push(e[r]), i = r);
            return i < s - 1 && n.push(e[s - 1]), n
        },
        clipSegment: function (e, t, n, r) {
            var i = n.min,
                s = n.max,
                o = r ? this._lastCode : this._getBitCode(e, n),
                u = this._getBitCode(t, n),
                a, f, l;
            this._lastCode = u;
            for (;;) {
                if (!(o | u)) return [e, t];
                if (o & u) return !1;
                a = o || u, f = this._getEdgeIntersection(e, t, a, n), l = this._getBitCode(f, n), a === o ? (e = f, o = l) : (t = f, u = l)
            }
        },
        _getEdgeIntersection: function (e, t, r, i) {
            var s = t.x - e.x,
                o = t.y - e.y,
                u = i.min,
                a = i.max;
            if (r & 8) return new n.Point(e.x + s * (a.y - e.y) / o, a.y);
            if (r & 4) return new n.Point(e.x + s * (u.y - e.y) / o, u.y);
            if (r & 2) return new n.Point(a.x, e.y + o * (a.x - e.x) / s);
            if (r & 1) return new n.Point(u.x, e.y + o * (u.x - e.x) / s)
        },
        _getBitCode: function (e, t) {
            var n = 0;
            return e.x < t.min.x ? n |= 1 : e.x > t.max.x && (n |= 2), e.y < t.min.y ? n |= 4 : e.y > t.max.y && (n |= 8), n
        },
        _sqDist: function (e, t) {
            var n = t.x - e.x,
                r = t.y - e.y;
            return n * n + r * r
        },
        _sqClosestPointOnSegment: function (e, t, r, i) {
            var s = t.x,
                o = t.y,
                u = r.x - s,
                a = r.y - o,
                f = u * u + a * a,
                l;
            return f > 0 && (l = ((e.x - s) * u + (e.y - o) * a) / f, l > 1 ? (s = r.x, o = r.y) : l > 0 && (s += u * l, o += a * l)), u = e.x - s, a = e.y - o, i ? u * u + a * a : new n.Point(s, o)
        }
    }, n.Polyline = n.Path.extend({
        initialize: function (e, t) {
            n.Path.prototype.initialize.call(this, t), this._latlngs = this._convertLatLngs(e), n.Handler.PolyEdit && (this.editing = new n.Handler.PolyEdit(this), this.options.editable && this.editing.enable())
        },
        options: {
            smoothFactor: 1,
            noClip: !1
        },
        projectLatlngs: function () {
            this._originalPoints = [];
            for (var e = 0, t = this._latlngs.length; e < t; e++) this._originalPoints[e] = this._map.latLngToLayerPoint(this._latlngs[e])
        },
        getPathString: function () {
            for (var e = 0, t = this._parts.length, n = ""; e < t; e++) n += this._getPathPartStr(this._parts[e]);
            return n
        },
        getLatLngs: function () {
            return this._latlngs
        },
        setLatLngs: function (e) {
            return this._latlngs = this._convertLatLngs(e), this.redraw()
        },
        addLatLng: function (e) {
            return this._latlngs.push(n.latLng(e)), this.redraw()
        },
        spliceLatLngs: function (e, t) {
            var n = [].splice.apply(this._latlngs, arguments);
            return this._convertLatLngs(this._latlngs), this.redraw(), n
        },
        closestLayerPoint: function (e) {
            var t = Infinity,
                r = this._parts,
                i, s, o = null;
            for (var u = 0, a = r.length; u < a; u++) {
                var f = r[u];
                for (var l = 1, c = f.length; l < c; l++) {
                    i = f[l - 1], s = f[l];
                    var h = n.LineUtil._sqClosestPointOnSegment(e, i, s, !0);
                    h < t && (t = h, o = n.LineUtil._sqClosestPointOnSegment(e, i, s))
                }
            }
            return o && (o.distance = Math.sqrt(t)), o
        },
        getBounds: function () {
            var e = new n.LatLngBounds,
                t = this.getLatLngs(),
                r, i;
            for (r = 0, i = t.length; r < i; r++) e.extend(t[r]);
            return e
        },
        onAdd: function (e) {
            n.Path.prototype.onAdd.call(this, e), this.editing && this.editing.enabled() && this.editing.addHooks()
        },
        onRemove: function (e) {
            this.editing && this.editing.enabled() && this.editing.removeHooks(), n.Path.prototype.onRemove.call(this, e)
        },
        _convertLatLngs: function (e) {
            var t, r;
            for (t = 0, r = e.length; t < r; t++) {
                if (e[t] instanceof Array && typeof e[t][0] != "number") return;
                e[t] = n.latLng(e[t])
            }
            return e
        },
        _initEvents: function () {
            n.Path.prototype._initEvents.call(this)
        },
        _getPathPartStr: function (e) {
            var t = n.Path.VML;
            for (var r = 0, i = e.length, s = "", o; r < i; r++) o = e[r], t && o._round(), s += (r ? "L" : "M") + o.x + " " + o.y;
            return s
        },
        _clipPoints: function () {
            var e = this._originalPoints,
                t = e.length,
                r, i, s;
            if (this.options.noClip) {
                this._parts = [e];
                return
            }
            this._parts = [];
            var o = this._parts,
                u = this._map._pathViewport,
                a = n.LineUtil;
            for (r = 0, i = 0; r < t - 1; r++) {
                s = a.clipSegment(e[r], e[r + 1], u, r);
                if (!s) continue;
                o[i] = o[i] || [], o[i].push(s[0]);
                if (s[1] !== e[r + 1] || r === t - 2) o[i].push(s[1]), i++
            }
        },
        _simplifyPoints: function () {
            var e = this._parts,
                t = n.LineUtil;
            for (var r = 0, i = e.length; r < i; r++) e[r] = t.simplify(e[r], this.options.smoothFactor)
        },
        _updatePath: function () {
            if (!this._map) return;
            this._clipPoints(), this._simplifyPoints(), n.Path.prototype._updatePath.call(this)
        }
    }), n.polyline = function (e, t) {
        return new n.Polyline(e, t)
    }, n.PolyUtil = {}, n.PolyUtil.clipPolygon = function (e, t) {
        var r = t.min,
            i = t.max,
            s, o = [1, 4, 2, 8],
            u, a, f, l, c, h, p, d, v = n.LineUtil;
        for (u = 0, h = e.length; u < h; u++) e[u]._code = v._getBitCode(e[u], t);
        for (f = 0; f < 4; f++) {
            p = o[f], s = [];
            for (u = 0, h = e.length, a = h - 1; u < h; a = u++) l = e[u], c = e[a], l._code & p ? c._code & p || (d = v._getEdgeIntersection(c, l, p, t), d._code = v._getBitCode(d, t), s.push(d)) : (c._code & p && (d = v._getEdgeIntersection(c, l, p, t), d._code = v._getBitCode(d, t), s.push(d)), s.push(l));
            e = s
        }
        return e
    }, n.Polygon = n.Polyline.extend({
        options: {
            fill: !0
        },
        initialize: function (e, t) {
            n.Polyline.prototype.initialize.call(this, e, t), e && e[0] instanceof Array && typeof e[0][0] != "number" && (this._latlngs = this._convertLatLngs(e[0]), this._holes = e.slice(1))
        },
        projectLatlngs: function () {
            n.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [];
            if (!this._holes) return;
            var e, t, r, i, s;
            for (e = 0, r = this._holes.length; e < r; e++) {
                this._holePoints[e] = [];
                for (t = 0, i = this._holes[e].length; t < i; t++) this._holePoints[e][t] = this._map.latLngToLayerPoint(this._holes[e][t])
            }
        },
        _clipPoints: function () {
            var e = this._originalPoints,
                t = [];
            this._parts = [e].concat(this._holePoints);
            if (this.options.noClip) return;
            for (var r = 0, i = this._parts.length; r < i; r++) {
                var s = n.PolyUtil.clipPolygon(this._parts[r], this._map._pathViewport);
                s.length && t.push(s)
            }
            this._parts = t
        },
        _getPathPartStr: function (e) {
            var t = n.Polyline.prototype._getPathPartStr.call(this, e);
            return t + (n.Browser.svg ? "z" : "x")
        }
    }), n.polygon = function (e, t) {
        return new n.Polygon(e, t)
    },
    function () {
        function e(e) {
            return n.FeatureGroup.extend({
                initialize: function (e, t) {
                    this._layers = {}, this._options = t, this.setLatLngs(e)
                },
                setLatLngs: function (t) {
                    var n = 0,
                        r = t.length;
                    this.eachLayer(function (e) {
                        n < r ? e.setLatLngs(t[n++]) : this.removeLayer(e)
                    }, this);
                    while (n < r) this.addLayer(new e(t[n++], this._options));
                    return this
                }
            })
        }
        n.MultiPolyline = e(n.Polyline), n.MultiPolygon = e(n.Polygon), n.multiPolyline = function (e, t) {
            return new n.MultiPolyline(e, t)
        }, n.multiPolygon = function (e, t) {
            return new n.MultiPolygon(e, t)
        }
    }(), n.Rectangle = n.Polygon.extend({
        initialize: function (e, t) {
            n.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(e), t)
        },
        setBounds: function (e) {
            this.setLatLngs(this._boundsToLatLngs(e))
        },
        _boundsToLatLngs: function (e) {
            return e = n.latLngBounds(e), [e.getSouthWest(), e.getNorthWest(), e.getNorthEast(), e.getSouthEast(), e.getSouthWest()]
        }
    }), n.rectangle = function (e, t) {
        return new n.Rectangle(e, t)
    }, n.Circle = n.Path.extend({
        initialize: function (e, t, r) {
            n.Path.prototype.initialize.call(this, r), this._latlng = n.latLng(e), this._mRadius = t
        },
        options: {
            fill: !0
        },
        setLatLng: function (e) {
            return this._latlng = n.latLng(e), this.redraw()
        },
        setRadius: function (e) {
            return this._mRadius = e, this.redraw()
        },
        projectLatlngs: function () {
            var e = this._getLngRadius(),
                t = new n.LatLng(this._latlng.lat, this._latlng.lng - e, !0),
                r = this._map.latLngToLayerPoint(t);
            this._point = this._map.latLngToLayerPoint(this._latlng), this._radius = Math.max(Math.round(this._point.x - r.x), 1)
        },
        getBounds: function () {
            var e = this._getLngRadius(),
                t = this._mRadius / 40075017 * 360,
                r = this._latlng,
                i = new n.LatLng(r.lat - t, r.lng - e),
                s = new n.LatLng(r.lat + t, r.lng + e);
            return new n.LatLngBounds(i, s)
        },
        getLatLng: function () {
            return this._latlng
        },
        getPathString: function () {
            var e = this._point,
                t = this._radius;
            return this._checkIfEmpty() ? "" : n.Browser.svg ? "M" + e.x + "," + (e.y - t) + "A" + t + "," + t + ",0,1,1," + (e.x - .1) + "," + (e.y - t) + " z" : (e._round(), t = Math.round(t), "AL " + e.x + "," + e.y + " " + t + "," + t + " 0," + 23592600)
        },
        getRadius: function () {
            return this._mRadius
        },
        _getLatRadius: function () {
            return this._mRadius / 40075017 * 360
        },
        _getLngRadius: function () {
            return this._getLatRadius() / Math.cos(n.LatLng.DEG_TO_RAD * this._latlng.lat)
        },
        _checkIfEmpty: function () {
            if (!this._map) return !1;
            var e = this._map._pathViewport,
                t = this._radius,
                n = this._point;
            return n.x - t > e.max.x || n.y - t > e.max.y || n.x + t < e.min.x || n.y + t < e.min.y
        }
    }), n.circle = function (e, t, r) {
        return new n.Circle(e, t, r)
    }, n.CircleMarker = n.Circle.extend({
        options: {
            radius: 10,
            weight: 2
        },
        initialize: function (e, t) {
            n.Circle.prototype.initialize.call(this, e, null, t), this._radius = this.options.radius
        },
        projectLatlngs: function () {
            this._point = this._map.latLngToLayerPoint(this._latlng)
        },
        setRadius: function (e) {
            return this._radius = e, this.redraw()
        }
    }), n.circleMarker = function (e, t) {
        return new n.CircleMarker(e, t)
    }, n.Polyline.include(n.Path.CANVAS ? {
        _containsPoint: function (e, t) {
            var r, i, s, o, u, a, f, l = this.options.weight / 2;
            n.Browser.touch && (l += 10);
            for (r = 0, o = this._parts.length; r < o; r++) {
                f = this._parts[r];
                for (i = 0, u = f.length, s = u - 1; i < u; s = i++) {
                    if (!t && i === 0) continue;
                    a = n.LineUtil.pointToSegmentDistance(e, f[s], f[i]);
                    if (a <= l) return !0
                }
            }
            return !1
        }
    } : {}), n.Polygon.include(n.Path.CANVAS ? {
        _containsPoint: function (e) {
            var t = !1,
                r, i, s, o, u, a, f, l;
            if (n.Polyline.prototype._containsPoint.call(this, e, !0)) return !0;
            for (o = 0, f = this._parts.length; o < f; o++) {
                r = this._parts[o];
                for (u = 0, l = r.length, a = l - 1; u < l; a = u++) i = r[u], s = r[a], i.y > e.y != s.y > e.y && e.x < (s.x - i.x) * (e.y - i.y) / (s.y - i.y) + i.x && (t = !t)
            }
            return t
        }
    } : {}), n.Circle.include(n.Path.CANVAS ? {
        _drawPath: function () {
            var e = this._point;
            this._ctx.beginPath(), this._ctx.arc(e.x, e.y, this._radius, 0, Math.PI * 2, !1)
        },
        _containsPoint: function (e) {
            var t = this._point,
                n = this.options.stroke ? this.options.weight / 2 : 0;
            return e.distanceTo(t) <= this._radius + n
        }
    } : {}), n.GeoJSON = n.FeatureGroup.extend({
        initialize: function (e, t) {
            n.setOptions(this, t), this._layers = {}, e && this.addData(e)
        },
        addData: function (e) {
            var t = e instanceof Array ? e : e.features,
                r, i;
            if (t) {
                for (r = 0, i = t.length; r < i; r++) this.addData(t[r]);
                return this
            }
            var s = this.options;
            if (s.filter && !s.filter(e)) return;
            var o = n.GeoJSON.geometryToLayer(e, s.pointToLayer);
            return o.feature = e, this.resetStyle(o), s.onEachFeature && s.onEachFeature(e, o), this.addLayer(o)
        },
        resetStyle: function (e) {
            var t = this.options.style;
            t && this._setLayerStyle(e, t)
        },
        setStyle: function (e) {
            this.eachLayer(function (t) {
                this._setLayerStyle(t, e)
            }, this)
        },
        _setLayerStyle: function (e, t) {
            typeof t == "function" && (t = t(e.feature)), e.setStyle && e.setStyle(t)
        }
    }), n.extend(n.GeoJSON, {
        geometryToLayer: function (e, t) {
            var r = e.type === "Feature" ? e.geometry : e,
                i = r.coordinates,
                s = [],
                o, u, a, f, l;
            switch (r.type) {
            case "Point":
                return o = this.coordsToLatLng(i), t ? t(e, o) : new n.Marker(o);
            case "MultiPoint":
                for (a = 0, f = i.length; a < f; a++) o = this.coordsToLatLng(i[a]), l = t ? t(e, o) : new n.Marker(o), s.push(l);
                return new n.FeatureGroup(s);
            case "LineString":
                return u = this.coordsToLatLngs(i), new n.Polyline(u);
            case "Polygon":
                return u = this.coordsToLatLngs(i, 1), new n.Polygon(u);
            case "MultiLineString":
                return u = this.coordsToLatLngs(i, 1), new n.MultiPolyline(u);
            case "MultiPolygon":
                return u = this.coordsToLatLngs(i, 2), new n.MultiPolygon(u);
            case "GeometryCollection":
                for (a = 0, f = r.geometries.length; a < f; a++) l = this.geometryToLayer(r.geometries[a], t), s.push(l);
                return new n.FeatureGroup(s);
            default:
                throw new Error("Invalid GeoJSON object.")
            }
        },
        coordsToLatLng: function (e, t) {
            var r = parseFloat(e[t ? 0 : 1]),
                i = parseFloat(e[t ? 1 : 0]);
            return new n.LatLng(r, i, !0)
        },
        coordsToLatLngs: function (e, t, n) {
            var r, i = [],
                s, o;
            for (s = 0, o = e.length; s < o; s++) r = t ? this.coordsToLatLngs(e[s], t - 1, n) : this.coordsToLatLng(e[s], n), i.push(r);
            return i
        }
    }), n.geoJson = function (e, t) {
        return new n.GeoJSON(e, t)
    }, n.DomEvent = {
        addListener: function (e, t, r, i) {
            var s = n.stamp(r),
                o = "_leaflet_" + t + s,
                u, a, f;
            return e[o] ? this : (u = function (t) {
                return r.call(i || e, t || n.DomEvent._getEvent())
            }, n.Browser.msTouch && t.indexOf("touch") === 0 ? this.addMsTouchListener(e, t, u, s) : n.Browser.touch && t === "dblclick" && this.addDoubleTapListener ? this.addDoubleTapListener(e, u, s) : ("addEventListener" in e ? t === "mousewheel" ? (e.addEventListener("DOMMouseScroll", u, !1), e.addEventListener(t, u, !1)) : t === "mouseenter" || t === "mouseleave" ? (a = u, f = t === "mouseenter" ? "mouseover" : "mouseout", u = function (t) {
                if (!n.DomEvent._checkMouse(e, t)) return;
                return a(t)
            }, e.addEventListener(f, u, !1)) : e.addEventListener(t, u, !1) : "attachEvent" in e && e.attachEvent("on" + t, u), e[o] = u, this))
        },
        removeListener: function (e, t, r) {
            var i = n.stamp(r),
                s = "_leaflet_" + t + i,
                o = e[s];
            if (!o) return;
            return n.Browser.msTouch && t.indexOf("touch") === 0 ? this.removeMsTouchListener(e, t, i) : n.Browser.touch && t === "dblclick" && this.removeDoubleTapListener ? this.removeDoubleTapListener(e, i) : "removeEventListener" in e ? t === "mousewheel" ? (e.removeEventListener("DOMMouseScroll", o, !1), e.removeEventListener(t, o, !1)) : t === "mouseenter" || t === "mouseleave" ? e.removeEventListener(t === "mouseenter" ? "mouseover" : "mouseout", o, !1) : e.removeEventListener(t, o, !1) : "detachEvent" in e && e.detachEvent("on" + t, o), e[s] = null, this
        },
        stopPropagation: function (e) {
            return e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, this
        },
        disableClickPropagation: function (e) {
            var t = n.DomEvent.stopPropagation;
            return n.DomEvent.addListener(e, n.Draggable.START, t).addListener(e, "click", t).addListener(e, "dblclick", t)
        },
        preventDefault: function (e) {
            return e.preventDefault ? e.preventDefault() : e.returnValue = !1, this
        },
        stop: function (e) {
            return n.DomEvent.preventDefault(e).stopPropagation(e)
        },
        getMousePosition: function (e, t) {
            var r = document.body,
                i = document.documentElement,
                s = e.pageX ? e.pageX : e.clientX + r.scrollLeft + i.scrollLeft,
                o = e.pageY ? e.pageY : e.clientY + r.scrollTop + i.scrollTop,
                u = new n.Point(s, o);
            return t ? u._subtract(n.DomUtil.getViewportOffset(t)) : u
        },
        getWheelDelta: function (e) {
            var t = 0;
            return e.wheelDelta && (t = e.wheelDelta / 120), e.detail && (t = -e.detail / 3), t
        },
        _checkMouse: function (e, t) {
            var n = t.relatedTarget;
            if (!n) return !0;
            try {
                while (n && n !== e) n = n.parentNode
            } catch (r) {
                return !1
            }
            return n !== e
        },
        _getEvent: function () {
            var t = e.event;
            if (!t) {
                var n = arguments.callee.caller;
                while (n) {
                    t = n.arguments[0];
                    if (t && e.Event === t.constructor) break;
                    n = n.caller
                }
            }
            return t
        }
    }, n.DomEvent.on = n.DomEvent.addListener, n.DomEvent.off = n.DomEvent.removeListener, n.Draggable = n.Class.extend({
        includes: n.Mixin.Events,
        statics: {
            START: n.Browser.touch ? "touchstart" : "mousedown",
            END: n.Browser.touch ? "touchend" : "mouseup",
            MOVE: n.Browser.touch ? "touchmove" : "mousemove",
            TAP_TOLERANCE: 15
        },
        initialize: function (e, t, r) {
            this._element = e, this._dragStartTarget = t || e, this._longPress = r && !n.Browser.msTouch
        },
        enable: function () {
            if (this._enabled) return;
            n.DomEvent.on(this._dragStartTarget, n.Draggable.START, this._onDown, this), this._enabled = !0
        },
        disable: function () {
            if (!this._enabled) return;
            n.DomEvent.off(this._dragStartTarget, n.Draggable.START, this._onDown), this._enabled = !1, this._moved = !1
        },
        _onDown: function (e) {
            if (!n.Browser.touch && e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) return;
            n.DomEvent.preventDefault(e), n.DomEvent.stopPropagation(e);
            if (n.Draggable._disabled) return;
            this._simulateClick = !0;
            if (e.touches && e.touches.length > 1) {
                this._simulateClick = !1, clearTimeout(this._longPressTimeout);
                return
            }
            var t = e.touches && e.touches.length === 1 ? e.touches[0] : e,
                r = t.target;
            n.Browser.touch && r.tagName.toLowerCase() === "a" && n.DomUtil.addClass(r, "leaflet-active"), this._moved = !1;
            if (this._moving) return;
            this._startPoint = new n.Point(t.clientX, t.clientY), this._startPos = this._newPos = n.DomUtil.getPosition(this._element), e.touches && e.touches.length === 1 && n.Browser.touch && this._longPress && (this._longPressTimeout = setTimeout(n.bind(function () {
                var e = this._newPos && this._newPos.distanceTo(this._startPos) || 0;
                e < n.Draggable.TAP_TOLERANCE && (this._simulateClick = !1, this._onUp(), this._simulateEvent("contextmenu", t))
            }, this), 1e3)), n.DomEvent.on(document, n.Draggable.MOVE, this._onMove, this), n.DomEvent.on(document, n.Draggable.END, this._onUp, this)
        },
        _onMove: function (e) {
            if (e.touches && e.touches.length > 1) return;
            var t = e.touches && e.touches.length === 1 ? e.touches[0] : e,
                r = new n.Point(t.clientX, t.clientY),
                i = r.subtract(this._startPoint);
            if (!i.x && !i.y) return;
            n.DomEvent.preventDefault(e), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = n.DomUtil.getPosition(this._element).subtract(i), n.Browser.touch || (n.DomUtil.disableTextSelection(), this._setMovingCursor())), this._newPos = this._startPos.add(i), this._moving = !0, n.Util.cancelAnimFrame(this._animRequest), this._animRequest = n.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget)
        },
        _updatePosition: function () {
            this.fire("predrag"), n.DomUtil.setPosition(this._element, this._newPos), this.fire("drag")
        },
        _onUp: function (e) {
            var t;
            clearTimeout(this._longPressTimeout);
            if (this._simulateClick && e.changedTouches) {
                var r = e.changedTouches[0],
                    i = r.target,
                    s = this._newPos && this._newPos.distanceTo(this._startPos) || 0;
                i.tagName.toLowerCase() === "a" && n.DomUtil.removeClass(i, "leaflet-active"), s < n.Draggable.TAP_TOLERANCE && (t = r)
            }
            n.Browser.touch || (n.DomUtil.enableTextSelection(), this._restoreCursor()), n.DomEvent.off(document, n.Draggable.MOVE, this._onMove), n.DomEvent.off(document, n.Draggable.END, this._onUp), this._moved && (n.Util.cancelAnimFrame(this._animRequest), this.fire("dragend")), this._moving = !1, t && (this._moved = !1, this._simulateEvent("click", t))
        },
        _setMovingCursor: function () {
            n.DomUtil.addClass(document.body, "leaflet-dragging")
        },
        _restoreCursor: function () {
            n.DomUtil.removeClass(document.body, "leaflet-dragging")
        },
        _simulateEvent: function (t, n) {
            var r = document.createEvent("MouseEvents");
            r.initMouseEvent(t, !0, !0, e, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(r)
        }
    }), n.Handler = n.Class.extend({
        initialize: function (e) {
            this._map = e
        },
        enable: function () {
            if (this._enabled) return;
            this._enabled = !0, this.addHooks()
        },
        disable: function () {
            if (!this._enabled) return;
            this._enabled = !1, this.removeHooks()
        },
        enabled: function () {
            return !!this._enabled
        }
    }), n.Map.mergeOptions({
        dragging: !0,
        inertia: !n.Browser.android23,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: Infinity,
        inertiaThreshold: n.Browser.touch ? 32 : 18,
        easeLinearity: .25,
        longPress: !0,
        worldCopyJump: !0
    }), n.Map.Drag = n.Handler.extend({
        addHooks: function () {
            if (!this._draggable) {
                var e = this._map;
                this._draggable = new n.Draggable(e._mapPane, e._container, e.options.longPress), this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this), e.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), e.on("viewreset", this._onViewReset, this))
            }
            this._draggable.enable()
        },
        removeHooks: function () {
            this._draggable.disable()
        },
        moved: function () {
            return this._draggable && this._draggable._moved
        },
        _onDragStart: function () {
            var e = this._map;
            e._panAnim && e._panAnim.stop(), e.fire("movestart").fire("dragstart"), e.options.inertia && (this._positions = [], this._times = [])
        },
        _onDrag: function () {
            if (this._map.options.inertia) {
                var e = this._lastTime = +(new Date),
                    t = this._lastPos = this._draggable._newPos;
                this._positions.push(t), this._times.push(e), e - this._times[0] > 200 && (this._positions.shift(), this._times.shift())
            }
            this._map.fire("move").fire("drag")
        },
        _onViewReset: function () {
            var e = this._map.getSize()._divideBy(2),
                t = this._map.latLngToLayerPoint(new n.LatLng(0, 0));
            this._initialWorldOffset = t.subtract(e).x, this._worldWidth = this._map.project(new n.LatLng(0, 180)).x
        },
        _onPreDrag: function () {
            var e = this._map,
                t = this._worldWidth,
                n = Math.round(t / 2),
                r = this._initialWorldOffset,
                i = this._draggable._newPos.x,
                s = (i - n + r) % t + n - r,
                o = (i + n + r) % t - n - r,
                u = Math.abs(s + r) < Math.abs(o + r) ? s : o;
            this._draggable._newPos.x = u
        },
        _onDragEnd: function () {
            var e = this._map,
                t = e.options,
                r = +(new Date) - this._lastTime,
                i = !t.inertia || r > t.inertiaThreshold || !this._positions[0];
            if (i) e.fire("moveend");
            else {
                var s = this._lastPos.subtract(this._positions[0]),
                    o = (this._lastTime + r - this._times[0]) / 1e3,
                    u = s.multiplyBy(t.easeLinearity / o),
                    a = u.distanceTo(new n.Point(0, 0)),
                    f = Math.min(t.inertiaMaxSpeed, a),
                    l = u.multiplyBy(f / a),
                    c = f / (t.inertiaDeceleration * t.easeLinearity),
                    h = l.multiplyBy(-c / 2).round();
                n.Util.requestAnimFrame(function () {
                    e.panBy(h, c, t.easeLinearity)
                })
            }
            e.fire("dragend"), t.maxBounds && n.Util.requestAnimFrame(this._panInsideMaxBounds, e, !0, e._container)
        },
        _panInsideMaxBounds: function () {
            this.panInsideBounds(this.options.maxBounds)
        }
    }), n.Map.addInitHook("addHandler", "dragging", n.Map.Drag), n.Map.mergeOptions({
        doubleClickZoom: !0
    }), n.Map.DoubleClickZoom = n.Handler.extend({
        addHooks: function () {
            this._map.on("dblclick", this._onDoubleClick)
        },
        removeHooks: function () {
            this._map.off("dblclick", this._onDoubleClick)
        },
        _onDoubleClick: function (e) {
            this.setView(e.latlng, this._zoom + 1)
        }
    }), n.Map.addInitHook("addHandler", "doubleClickZoom", n.Map.DoubleClickZoom), n.Map.mergeOptions({
        scrollWheelZoom: !n.Browser.touch || n.Browser.msTouch
    }), n.Map.ScrollWheelZoom = n.Handler.extend({
        addHooks: function () {
            n.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
        },
        removeHooks: function () {
            n.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll)
        },
        _onWheelScroll: function (e) {
            var t = n.DomEvent.getWheelDelta(e);
            this._delta += t, this._lastMousePos = this._map.mouseEventToContainerPoint(e), this._startTime || (this._startTime = +(new Date));
            var r = Math.max(40 - (+(new Date) - this._startTime), 0);
            clearTimeout(this._timer), this._timer = setTimeout(n.bind(this._performZoom, this), r), n.DomEvent.preventDefault(e), n.DomEvent.stopPropagation(e)
        },
        _performZoom: function () {
            var e = this._map,
                t = this._delta,
                n = e.getZoom();
            t = t > 0 ? Math.ceil(t) : Math.round(t), t = Math.max(Math.min(t, 4), -4), t = e._limitZoom(n + t) - n, this._delta = 0, this._startTime = null;
            if (!t) return;
            var r = n + t,
                i = this._getCenterForScrollWheelZoom(r);
            e.setView(i, r)
        },
        _getCenterForScrollWheelZoom: function (e) {
            var t = this._map,
                n = t.getZoomScale(e),
                r = t.getSize()._divideBy(2),
                i = this._lastMousePos._subtract(r)._multiplyBy(1 - 1 / n),
                s = t._getTopLeftPoint()._add(r)._add(i);
            return t.unproject(s)
        }
    }), n.Map.addInitHook("addHandler", "scrollWheelZoom", n.Map.ScrollWheelZoom), n.extend(n.DomEvent, {
        _touchstart: n.Browser.msTouch ? "MSPointerDown" : "touchstart",
        _touchend: n.Browser.msTouch ? "MSPointerUp" : "touchend",
        addDoubleTapListener: function (e, t, r) {
            function h(e) {
                var t;
                n.Browser.msTouch ? (c.push(e.pointerId), t = c.length) : t = e.touches.length;
                if (t > 1) return;
                var r = Date.now(),
                    a = r - (i || r);
                u = e.touches ? e.touches[0] : e, s = a > 0 && a <= o, i = r
            }

            function p(e) {
                if (n.Browser.msTouch) {
                    var r = c.indexOf(e.pointerId);
                    if (r === -1) return;
                    c.splice(r, 1)
                }
                if (s) {
                    if (n.Browser.msTouch) {
                        var o = {}, a;
                        for (var f in u) a = u[f], typeof a == "function" ? o[f] = a.bind(u) : o[f] = a;
                        u = o
                    }
                    u.type = "dblclick", t(u), i = null
                }
            }
            var i, s = !1,
                o = 250,
                u, a = "_leaflet_",
                f = this._touchstart,
                l = this._touchend,
                c = [];
            e[a + f + r] = h, e[a + l + r] = p;
            var d = n.Browser.msTouch ? document.documentElement : e;
            return e.addEventListener(f, h, !1), d.addEventListener(l, p, !1), n.Browser.msTouch && d.addEventListener("MSPointerCancel", p, !1), this
        },
        removeDoubleTapListener: function (e, t) {
            var r = "_leaflet_";
            return e.removeEventListener(this._touchstart, e[r + this._touchstart + t], !1), (n.Browser.msTouch ? document.documentElement : e).removeEventListener(this._touchend, e[r + this._touchend + t], !1), n.Browser.msTouch && document.documentElement.removeEventListener("MSPointerCancel", e[r + this._touchend + t], !1), this
        }
    }), n.extend(n.DomEvent, {
        _msTouches: [],
        _msDocumentListener: !1,
        addMsTouchListener: function (e, t, n, r) {
            switch (t) {
            case "touchstart":
                return this.addMsTouchListenerStart(e, t, n, r);
            case "touchend":
                return this.addMsTouchListenerEnd(e, t, n, r);
            case "touchmove":
                return this.addMsTouchListenerMove(e, t, n, r);
            default:
                throw "Unknown touch event type"
            }
        },
        addMsTouchListenerStart: function (e, t, n, r) {
            var i = "_leaflet_",
                s = this._msTouches,
                o = function (e) {
                    var t = !1;
                    for (var r = 0; r < s.length; r++)
                        if (s[r].pointerId === e.pointerId) {
                            t = !0;
                            break
                        }
                    t || s.push(e), e.touches = s.slice(), e.changedTouches = [e], n(e)
                };
            e[i + "touchstart" + r] = o, e.addEventListener("MSPointerDown", o, !1);
            if (!this._msDocumentListener) {
                var u = function (e) {
                    for (var t = 0; t < s.length; t++)
                        if (s[t].pointerId === e.pointerId) {
                            s.splice(t, 1);
                            break
                        }
                };
                document.documentElement.addEventListener("MSPointerUp", u, !1), document.documentElement.addEventListener("MSPointerCancel", u, !1), this._msDocumentListener = !0
            }
            return this
        },
        addMsTouchListenerMove: function (e, t, n, r) {
            function o(e) {
                if (e.pointerType === e.MSPOINTER_TYPE_MOUSE && e.buttons === 0) return;
                for (var t = 0; t < s.length; t++)
                    if (s[t].pointerId === e.pointerId) {
                        s[t] = e;
                        break
                    }
                e.touches = s.slice(), e.changedTouches = [e], n(e)
            }
            var i = "_leaflet_",
                s = this._msTouches;
            return e[i + "touchmove" + r] = o, e.addEventListener("MSPointerMove", o, !1), this
        },
        addMsTouchListenerEnd: function (e, t, n, r) {
            var i = "_leaflet_",
                s = this._msTouches,
                o = function (e) {
                    for (var t = 0; t < s.length; t++)
                        if (s[t].pointerId === e.pointerId) {
                            s.splice(t, 1);
                            break
                        }
                    e.touches = s.slice(), e.changedTouches = [e], n(e)
                };
            return e[i + "touchend" + r] = o, e.addEventListener("MSPointerUp", o, !1), e.addEventListener("MSPointerCancel", o, !1), this
        },
        removeMsTouchListener: function (e, t, n) {
            var r = "_leaflet_",
                i = e[r + t + n];
            switch (t) {
            case "touchstart":
                e.removeEventListener("MSPointerDown", i, !1);
                break;
            case "touchmove":
                e.removeEventListener("MSPointerMove", i, !1);
                break;
            case "touchend":
                e.removeEventListener("MSPointerUp", i, !1), e.removeEventListener("MSPointerCancel", i, !1)
            }
            return this
        }
    }), n.Map.mergeOptions({
        touchZoom: n.Browser.touch && !n.Browser.android23
    }), n.Map.TouchZoom = n.Handler.extend({
        addHooks: function () {
            n.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
        },
        removeHooks: function () {
            n.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
        },
        _onTouchStart: function (e) {
            var t = this._map;
            if (!e.touches || e.touches.length !== 2 || t._animatingZoom || this._zooming) return;
            var r = t.mouseEventToLayerPoint(e.touches[0]),
                i = t.mouseEventToLayerPoint(e.touches[1]),
                s = t._getCenterLayerPoint();
            this._startCenter = r.add(i)._divideBy(2), this._startDist = r.distanceTo(i), this._moved = !1, this._zooming = !0, this._centerOffset = s.subtract(this._startCenter), t._panAnim && t._panAnim.stop(), n.DomEvent.on(document, "touchmove", this._onTouchMove, this).on(document, "touchend", this._onTouchEnd, this), n.DomEvent.preventDefault(e)
        },
        _onTouchMove: function (e) {
            if (!e.touches || e.touches.length !== 2) return;
            var t = this._map,
                r = t.mouseEventToLayerPoint(e.touches[0]),
                i = t.mouseEventToLayerPoint(e.touches[1]);
            this._scale = r.distanceTo(i) / this._startDist, this._delta = r._add(i)._divideBy(2)._subtract(this._startCenter);
            if (this._scale === 1) return;
            this._moved || (n.DomUtil.addClass(t._mapPane, "leaflet-zoom-anim leaflet-touching"), t.fire("movestart").fire("zoomstart")._prepareTileBg(), this._moved = !0), n.Util.cancelAnimFrame(this._animRequest), this._animRequest = n.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), n.DomEvent.preventDefault(e)
        },
        _updateOnMove: function () {
            var e = this._map,
                t = this._getScaleOrigin(),
                r = e.layerPointToLatLng(t);
            e.fire("zoomanim", {
                center: r,
                zoom: e.getScaleZoom(this._scale)
            }), e._tileBg.style[n.DomUtil.TRANSFORM] = n.DomUtil.getTranslateString(this._delta) + " " + n.DomUtil.getScaleString(this._scale, this._startCenter)
        },
        _onTouchEnd: function (e) {
            if (!this._moved || !this._zooming) return;
            var t = this._map;
            this._zooming = !1, n.DomUtil.removeClass(t._mapPane, "leaflet-touching"), n.DomEvent.off(document, "touchmove", this._onTouchMove).off(document, "touchend", this._onTouchEnd);
            var r = this._getScaleOrigin(),
                i = t.layerPointToLatLng(r),
                s = t.getZoom(),
                o = t.getScaleZoom(this._scale) - s,
                u = o > 0 ? Math.ceil(o) : Math.floor(o),
                a = t._limitZoom(s + u);
            t.fire("zoomanim", {
                center: i,
                zoom: a
            }), t._runAnimation(i, a, t.getZoomScale(a) / this._scale, r, !0)
        },
        _getScaleOrigin: function () {
            var e = this._centerOffset.subtract(this._delta).divideBy(this._scale);
            return this._startCenter.add(e)
        }
    }), n.Map.addInitHook("addHandler", "touchZoom", n.Map.TouchZoom), n.Map.mergeOptions({
        boxZoom: !0
    }), n.Map.BoxZoom = n.Handler.extend({
        initialize: function (e) {
            this._map = e, this._container = e._container, this._pane = e._panes.overlayPane
        },
        addHooks: function () {
            n.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
        },
        removeHooks: function () {
            n.DomEvent.off(this._container, "mousedown", this._onMouseDown)
        },
        _onMouseDown: function (e) {
            if (!e.shiftKey || e.which !== 1 && e.button !== 1) return !1;
            n.DomUtil.disableTextSelection(), this._startLayerPoint = this._map.mouseEventToLayerPoint(e), this._box = n.DomUtil.create("div", "leaflet-zoom-box", this._pane), n.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", n.DomEvent.on(document, "mousemove", this._onMouseMove, this).on(document, "mouseup", this._onMouseUp, this).preventDefault(e), this._map.fire("boxzoomstart")
        },
        _onMouseMove: function (e) {
            var t = this._startLayerPoint,
                r = this._box,
                i = this._map.mouseEventToLayerPoint(e),
                s = i.subtract(t),
                o = new n.Point(Math.min(i.x, t.x), Math.min(i.y, t.y));
            n.DomUtil.setPosition(r, o), r.style.width = Math.max(0, Math.abs(s.x) - 4) + "px", r.style.height = Math.max(0, Math.abs(s.y) - 4) + "px"
        },
        _onMouseUp: function (e) {
            this._pane.removeChild(this._box), this._container.style.cursor = "", n.DomUtil.enableTextSelection(), n.DomEvent.off(document, "mousemove", this._onMouseMove).off(document, "mouseup", this._onMouseUp);
            var t = this._map,
                r = t.mouseEventToLayerPoint(e);
            if (this._startLayerPoint.equals(r)) return;
            var i = new n.LatLngBounds(t.layerPointToLatLng(this._startLayerPoint), t.layerPointToLatLng(r));
            t.fitBounds(i), t.fire("boxzoomend", {
                boxZoomBounds: i
            })
        }
    }), n.Map.addInitHook("addHandler", "boxZoom", n.Map.BoxZoom), n.Map.mergeOptions({
        keyboard: !0,
        keyboardPanOffset: 80,
        keyboardZoomOffset: 1
    }), n.Map.Keyboard = n.Handler.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61],
            zoomOut: [189, 109]
        },
        initialize: function (e) {
            this._map = e, this._setPanOffset(e.options.keyboardPanOffset), this._setZoomOffset(e.options.keyboardZoomOffset)
        },
        addHooks: function () {
            var e = this._map._container;
            e.tabIndex === -1 && (e.tabIndex = "0"), n.DomEvent.addListener(e, "focus", this._onFocus, this).addListener(e, "blur", this._onBlur, this).addListener(e, "mousedown", this._onMouseDown, this), this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
        },
        removeHooks: function () {
            this._removeHooks();
            var e = this._map._container;
            n.DomEvent.removeListener(e, "focus", this._onFocus, this).removeListener(e, "blur", this._onBlur, this).removeListener(e, "mousedown", this._onMouseDown, this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
        },
        _onMouseDown: function () {
            this._focused || this._map._container.focus()
        },
        _onFocus: function () {
            this._focused = !0, this._map.fire("focus")
        },
        _onBlur: function () {
            this._focused = !1, this._map.fire("blur")
        },
        _setPanOffset: function (e) {
            var t = this._panKeys = {}, n = this.keyCodes,
                r, i;
            for (r = 0, i = n.left.length; r < i; r++) t[n.left[r]] = [-1 * e, 0];
            for (r = 0, i = n.right.length; r < i; r++) t[n.right[r]] = [e, 0];
            for (r = 0, i = n.down.length; r < i; r++) t[n.down[r]] = [0, e];
            for (r = 0, i = n.up.length; r < i; r++) t[n.up[r]] = [0, -1 * e]
        },
        _setZoomOffset: function (e) {
            var t = this._zoomKeys = {}, n = this.keyCodes,
                r, i;
            for (r = 0, i = n.zoomIn.length; r < i; r++) t[n.zoomIn[r]] = e;
            for (r = 0, i = n.zoomOut.length; r < i; r++) t[n.zoomOut[r]] = -e
        },
        _addHooks: function () {
            n.DomEvent.addListener(document, "keydown", this._onKeyDown, this)
        },
        _removeHooks: function () {
            n.DomEvent.removeListener(document, "keydown", this._onKeyDown, this)
        },
        _onKeyDown: function (e) {
            var t = e.keyCode;
            if (this._panKeys.hasOwnProperty(t)) this._map.panBy(this._panKeys[t]);
            else {
                if (!this._zoomKeys.hasOwnProperty(t)) return;
                this._map.setZoom(this._map.getZoom() + this._zoomKeys[t])
            }
            n.DomEvent.stop(e)
        }
    }), n.Map.addInitHook("addHandler", "keyboard", n.Map.Keyboard), n.Handler.MarkerDrag = n.Handler.extend({
        initialize: function (e) {
            this._marker = e
        },
        addHooks: function () {
            var e = this._marker._icon;
            this._draggable || (this._draggable = (new n.Draggable(e, e)).on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this)), this._draggable.enable()
        },
        removeHooks: function () {
            this._draggable.disable()
        },
        moved: function () {
            return this._draggable && this._draggable._moved
        },
        _onDragStart: function (e) {
            this._marker.closePopup().fire("movestart").fire("dragstart")
        },
        _onDrag: function (e) {
            var t = this._marker,
                r = t._shadow,
                i = n.DomUtil.getPosition(t._icon),
                s = t._map.layerPointToLatLng(i);
            r && n.DomUtil.setPosition(r, i), t._latlng = s, t.fire("move", {
                latlng: s
            }).fire("drag")
        },
        _onDragEnd: function () {
            this._marker.fire("moveend").fire("dragend")
        }
    }), n.Handler.PolyEdit = n.Handler.extend({
        options: {
            icon: new n.DivIcon({
                iconSize: new n.Point(8, 8),
                className: "leaflet-div-icon leaflet-editing-icon"
            })
        },
        initialize: function (e, t) {
            this._poly = e, n.setOptions(this, t)
        },
        addHooks: function () {
            this._poly._map && (this._markerGroup || this._initMarkers(), this._poly._map.addLayer(this._markerGroup))
        },
        removeHooks: function () {
            this._poly._map && (this._poly._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers)
        },
        updateMarkers: function () {
            this._markerGroup.clearLayers(), this._initMarkers()
        },
        _initMarkers: function () {
            this._markerGroup || (this._markerGroup = new n.LayerGroup), this._markers = [];
            var e = this._poly._latlngs,
                t, r, i, s;
            for (t = 0, i = e.length; t < i; t++) s = this._createMarker(e[t], t), s.on("click", this._onMarkerClick, this), this._markers.push(s);
            var o, u;
            for (t = 0, r = i - 1; t < i; r = t++) {
                if (t === 0 && !(n.Polygon && this._poly instanceof n.Polygon)) continue;
                o = this._markers[r], u = this._markers[t], this._createMiddleMarker(o, u), this._updatePrevNext(o, u)
            }
        },
        _createMarker: function (e, t) {
            var r = new n.Marker(e, {
                draggable: !0,
                icon: this.options.icon
            });
            return r._origLatLng = e, r._index = t, r.on("drag", this._onMarkerDrag, this), r.on("dragend", this._fireEdit, this), this._markerGroup.addLayer(r), r
        },
        _fireEdit: function () {
            this._poly.fire("edit")
        },
        _onMarkerDrag: function (e) {
            var t = e.target;
            n.extend(t._origLatLng, t._latlng), t._middleLeft && t._middleLeft.setLatLng(this._getMiddleLatLng(t._prev, t)), t._middleRight && t._middleRight.setLatLng(this._getMiddleLatLng(t, t._next)), this._poly.redraw()
        },
        _onMarkerClick: function (e) {
            if (this._poly._latlngs.length < 3) return;
            var t = e.target,
                n = t._index;
            this._markerGroup.removeLayer(t), this._markers.splice(n, 1), this._poly.spliceLatLngs(n, 1), this._updateIndexes(n, -1), this._updatePrevNext(t._prev, t._next), t._middleLeft && this._markerGroup.removeLayer(t._middleLeft), t._middleRight && this._markerGroup.removeLayer(t._middleRight), t._prev && t._next ? this._createMiddleMarker(t._prev, t._next) : t._prev ? t._next || (t._prev._middleRight = null) : t._next._middleLeft = null, this._poly.fire("edit")
        },
        _updateIndexes: function (e, t) {
            this._markerGroup.eachLayer(function (n) {
                n._index > e && (n._index += t)
            })
        },
        _createMiddleMarker: function (e, t) {
            var n = this._getMiddleLatLng(e, t),
                r = this._createMarker(n),
                i, s, o;
            r.setOpacity(.6), e._middleRight = t._middleLeft = r, s = function () {
                var s = t._index;
                r._index = s, r.off("click", i).on("click", this._onMarkerClick, this), n.lat = r.getLatLng().lat, n.lng = r.getLatLng().lng, this._poly.spliceLatLngs(s, 0, n), this._markers.splice(s, 0, r), r.setOpacity(1), this._updateIndexes(s, 1), t._index++, this._updatePrevNext(e, r), this._updatePrevNext(r, t)
            }, o = function () {
                r.off("dragstart", s, this), r.off("dragend", o, this), this._createMiddleMarker(e, r), this._createMiddleMarker(r, t)
            }, i = function () {
                s.call(this), o.call(this), this._poly.fire("edit")
            }, r.on("click", i, this).on("dragstart", s, this).on("dragend", o, this), this._markerGroup.addLayer(r)
        },
        _updatePrevNext: function (e, t) {
            e && (e._next = t), t && (t._prev = e)
        },
        _getMiddleLatLng: function (e, t) {
            var n = this._poly._map,
                r = n.latLngToLayerPoint(e.getLatLng()),
                i = n.latLngToLayerPoint(t.getLatLng());
            return n.layerPointToLatLng(r._add(i)._divideBy(2))
        }
    }), n.Control = n.Class.extend({
        options: {
            position: "topright"
        },
        initialize: function (e) {
            n.setOptions(this, e)
        },
        getPosition: function () {
            return this.options.position
        },
        setPosition: function (e) {
            var t = this._map;
            return t && t.removeControl(this), this.options.position = e, t && t.addControl(this), this
        },
        addTo: function (e) {
            this._map = e;
            var t = this._container = this.onAdd(e),
                r = this.getPosition(),
                i = e._controlCorners[r];
            return n.DomUtil.addClass(t, "leaflet-control"), r.indexOf("bottom") !== -1 ? i.insertBefore(t, i.firstChild) : i.appendChild(t), this
        },
        removeFrom: function (e) {
            var t = this.getPosition(),
                n = e._controlCorners[t];
            return n.removeChild(this._container), this._map = null, this.onRemove && this.onRemove(e), this
        }
    }), n.control = function (e) {
        return new n.Control(e)
    }, n.Map.include({
        addControl: function (e) {
            return e.addTo(this), this
        },
        removeControl: function (e) {
            return e.removeFrom(this), this
        },
        _initControlPos: function () {
            function i(i, s) {
                var o = t + i + " " + t + s;
                e[i + s] = n.DomUtil.create("div", o, r)
            }
            var e = this._controlCorners = {}, t = "leaflet-",
                r = this._controlContainer = n.DomUtil.create("div", t + "control-container", this._container);
            i("top", "left"), i("top", "right"), i("bottom", "left"), i("bottom", "right")
        }
    }), n.Control.Zoom = n.Control.extend({
        options: {
            position: "topleft"
        },
        onAdd: function (e) {
            var t = "leaflet-control-zoom",
                r = n.DomUtil.create("div", t);
            return this._map = e, this._zoomInButton = this._createButton("+", "Zoom in", t + "-in", r, this._zoomIn, this), this._zoomOutButton = this._createButton("-", "Zoom out", t + "-out", r, this._zoomOut, this), e.on("zoomend", this._updateDisabled, this), r
        },
        onRemove: function (e) {
            e.off("zoomend", this._updateDisabled, this)
        },
        _zoomIn: function (e) {
            this._map.zoomIn(e.shiftKey ? 3 : 1)
        },
        _zoomOut: function (e) {
            this._map.zoomOut(e.shiftKey ? 3 : 1)
        },
        _createButton: function (e, t, r, i, s, o) {
            var u = n.DomUtil.create("a", r, i);
            return u.innerHTML = e, u.href = "#", u.title = t, n.DomEvent.on(u, "click", n.DomEvent.stopPropagation).on(u, "mousedown", n.DomEvent.stopPropagation).on(u, "dblclick", n.DomEvent.stopPropagation).on(u, "click", n.DomEvent.preventDefault).on(u, "click", s, o), u
        },
        _updateDisabled: function () {
            var e = this._map,
                t = "leaflet-control-zoom-disabled";
            n.DomUtil.removeClass(this._zoomInButton, t), n.DomUtil.removeClass(this._zoomOutButton, t), e._zoom === e.getMinZoom() && n.DomUtil.addClass(this._zoomOutButton, t), e._zoom === e.getMaxZoom() && n.DomUtil.addClass(this._zoomInButton, t)
        }
    }), n.Map.mergeOptions({
        zoomControl: !0
    }), n.Map.addInitHook(function () {
        this.options.zoomControl && (this.zoomControl = new n.Control.Zoom, this.addControl(this.zoomControl))
    }), n.control.zoom = function (e) {
        return new n.Control.Zoom(e)
    }, n.Control.Attribution = n.Control.extend({
        options: {
            position: "bottomright",
            prefix: 'Powered by <a href="http://leafletjs.com">Leaflet</a>'
        },
        initialize: function (e) {
            n.setOptions(this, e), this._attributions = {}
        },
        onAdd: function (e) {
            return this._container = n.DomUtil.create("div", "leaflet-control-attribution"), n.DomEvent.disableClickPropagation(this._container), e.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container
        },
        onRemove: function (e) {
            e.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
        },
        setPrefix: function (e) {
            return this.options.prefix = e, this._update(), this
        },
        addAttribution: function (e) {
            if (!e) return;
            return this._attributions[e] || (this._attributions[e] = 0), this._attributions[e]++, this._update(), this
        },
        removeAttribution: function (e) {
            if (!e) return;
            return this._attributions[e]--, this._update(), this
        },
        _update: function () {
            if (!this._map) return;
            var e = [];
            for (var t in this._attributions) this._attributions.hasOwnProperty(t) && this._attributions[t] && e.push(t);
            var n = [];
            this.options.prefix && n.push(this.options.prefix), e.length && n.push(e.join(", ")), this._container.innerHTML = n.join(" &#8212; ")
        },
        _onLayerAdd: function (e) {
            e.layer.getAttribution && this.addAttribution(e.layer.getAttribution())
        },
        _onLayerRemove: function (e) {
            e.layer.getAttribution && this.removeAttribution(e.layer.getAttribution())
        }
    }), n.Map.mergeOptions({
        attributionControl: !0
    }), n.Map.addInitHook(function () {
        this.options.attributionControl && (this.attributionControl = (new n.Control.Attribution).addTo(this))
    }), n.control.attribution = function (e) {
        return new n.Control.Attribution(e)
    }, n.Control.Scale = n.Control.extend({
        options: {
            position: "bottomleft",
            maxWidth: 100,
            metric: !0,
            imperial: !0,
            updateWhenIdle: !1
        },
        onAdd: function (e) {
            this._map = e;
            var t = "leaflet-control-scale",
                r = n.DomUtil.create("div", t),
                i = this.options;
            return this._addScales(i, t, r), e.on(i.updateWhenIdle ? "moveend" : "move", this._update, this), e.whenReady(this._update, this), r
        },
        onRemove: function (e) {
            e.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
        },
        _addScales: function (e, t, r) {
            e.metric && (this._mScale = n.DomUtil.create("div", t + "-line", r)), e.imperial && (this._iScale = n.DomUtil.create("div", t + "-line", r))
        },
        _update: function () {
            var e = this._map.getBounds(),
                t = e.getCenter().lat,
                n = 6378137 * Math.PI * Math.cos(t * Math.PI / 180),
                r = n * (e.getNorthEast().lng - e.getSouthWest().lng) / 180,
                i = this._map.getSize(),
                s = this.options,
                o = 0;
            i.x > 0 && (o = r * (s.maxWidth / i.x)), this._updateScales(s, o)
        },
        _updateScales: function (e, t) {
            e.metric && t && this._updateMetric(t), e.imperial && t && this._updateImperial(t)
        },
        _updateMetric: function (e) {
            var t = this._getRoundNum(e);
            this._mScale.style.width = this._getScaleWidth(t / e) + "px", this._mScale.innerHTML = t < 1e3 ? t + " m" : t / 1e3 + " km"
        },
        _updateImperial: function (e) {
            var t = e * 3.2808399,
                n = this._iScale,
                r, i, s;
            t > 5280 ? (r = t / 5280, i = this._getRoundNum(r), n.style.width = this._getScaleWidth(i / r) + "px", n.innerHTML = i + " mi") : (s = this._getRoundNum(t), n.style.width = this._getScaleWidth(s / t) + "px", n.innerHTML = s + " ft")
        },
        _getScaleWidth: function (e) {
            return Math.round(this.options.maxWidth * e) - 10
        },
        _getRoundNum: function (e) {
            var t = Math.pow(10, (Math.floor(e) + "").length - 1),
                n = e / t;
            return n = n >= 10 ? 10 : n >= 5 ? 5 : n >= 3 ? 3 : n >= 2 ? 2 : 1, t * n
        }
    }), n.control.scale = function (e) {
        return new n.Control.Scale(e)
    }, n.Control.Layers = n.Control.extend({
        options: {
            collapsed: !0,
            position: "topright",
            autoZIndex: !0
        },
        initialize: function (e, t, r) {
            n.setOptions(this, r), this._layers = {}, this._lastZIndex = 0;
            for (var i in e) e.hasOwnProperty(i) && this._addLayer(e[i], i);
            for (i in t) t.hasOwnProperty(i) && this._addLayer(t[i], i, !0)
        },
        onAdd: function (e) {
            return this._initLayout(), this._update(), this._container
        },
        addBaseLayer: function (e, t) {
            return this._addLayer(e, t), this._update(), this
        },
        addOverlay: function (e, t) {
            return this._addLayer(e, t, !0), this._update(), this
        },
        removeLayer: function (e) {
            var t = n.stamp(e);
            return delete this._layers[t], this._update(), this
        },
        _initLayout: function () {
            var e = "leaflet-control-layers",
                t = this._container = n.DomUtil.create("div", e);
            n.Browser.touch ? n.DomEvent.on(t, "click", n.DomEvent.stopPropagation) : n.DomEvent.disableClickPropagation(t);
            var r = this._form = n.DomUtil.create("form", e + "-list");
            if (this.options.collapsed) {
                n.DomEvent.on(t, "mouseover", this._expand, this).on(t, "mouseout", this._collapse, this);
                var i = this._layersLink = n.DomUtil.create("a", e + "-toggle", t);
                i.href = "#", i.title = "Layers", n.Browser.touch ? n.DomEvent.on(i, "click", n.DomEvent.stopPropagation).on(i, "click", n.DomEvent.preventDefault).on(i, "click", this._expand, this) : n.DomEvent.on(i, "focus", this._expand, this), this._map.on("movestart", this._collapse, this)
            } else this._expand();
            this._baseLayersList = n.DomUtil.create("div", e + "-base", r), this._separator = n.DomUtil.create("div", e + "-separator", r), this._overlaysList = n.DomUtil.create("div", e + "-overlays", r), t.appendChild(r)
        },
        _addLayer: function (e, t, r) {
            var i = n.stamp(e);
            this._layers[i] = {
                layer: e,
                name: t,
                overlay: r
            }, this.options.autoZIndex && e.setZIndex && (this._lastZIndex++, e.setZIndex(this._lastZIndex))
        },
        _update: function () {
            if (!this._container) return;
            this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";
            var e = !1,
                t = !1;
            for (var n in this._layers)
                if (this._layers.hasOwnProperty(n)) {
                    var r = this._layers[n];
                    this._addItem(r), t = t || r.overlay, e = e || !r.overlay
                }
            this._separator.style.display = t && e ? "" : "none"
        },
        _createRadioElement: function (e, t) {
            var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + e + '"';
            t && (n += ' checked="checked"'), n += "/>";
            var r = document.createElement("div");
            return r.innerHTML = n, r.firstChild
        },
        _addItem: function (e) {
            var t = document.createElement("label"),
                r, i = this._map.hasLayer(e.layer);
            e.overlay ? (r = document.createElement("input"), r.type = "checkbox", r.className = "leaflet-control-layers-selector", r.defaultChecked = i) : r = this._createRadioElement("leaflet-base-layers", i), r.layerId = n.stamp(e.layer), n.DomEvent.on(r, "click", this._onInputClick, this);
            var s = document.createElement("span");
            s.innerHTML = " " + e.name, t.appendChild(r), t.appendChild(s);
            var o = e.overlay ? this._overlaysList : this._baseLayersList;
            o.appendChild(t)
        },
        _onInputClick: function () {
            var e, t, n, r = this._form.getElementsByTagName("input"),
                i = r.length,
                s;
            for (e = 0; e < i; e++) t = r[e], n = this._layers[t.layerId], t.checked && !this._map.hasLayer(n.layer) ? (this._map.addLayer(n.layer), n.overlay || (s = n.layer)) : !t.checked && this._map.hasLayer(n.layer) && this._map.removeLayer(n.layer);
            s && this._map.fire("baselayerchange", {
                layer: s
            })
        },
        _expand: function () {
            n.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
        },
        _collapse: function () {
            this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
        }
    }), n.control.layers = function (e, t, r) {
        return new n.Control.Layers(e, t, r)
    }, n.PosAnimation = n.Class.extend({
        includes: n.Mixin.Events,
        run: function (e, t, r, i) {
            this.stop(), this._el = e, this._inProgress = !0, this.fire("start"), e.style[n.DomUtil.TRANSITION] = "all " + (r || .25) + "s cubic-bezier(0,0," + (i || .5) + ",1)", n.DomEvent.on(e, n.DomUtil.TRANSITION_END, this._onTransitionEnd, this), n.DomUtil.setPosition(e, t), n.Util.falseFn(e.offsetWidth), this._stepTimer = setInterval(n.bind(this.fire, this, "step"), 50)
        },
        stop: function () {
            if (!this._inProgress) return;
            n.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), n.Util.falseFn(this._el.offsetWidth)
        },
        _transformRe: /(-?[\d\.]+), (-?[\d\.]+)\)/,
        _getPos: function () {
            var t, r, i, s = this._el,
                o = e.getComputedStyle(s);
            return n.Browser.any3d ? (i = o[n.DomUtil.TRANSFORM].match(this._transformRe), t = parseFloat(i[1]), r = parseFloat(i[2])) : (t = parseFloat(o.left), r = parseFloat(o.top)), new n.Point(t, r, !0)
        },
        _onTransitionEnd: function () {
            n.DomEvent.off(this._el, n.DomUtil.TRANSITION_END, this._onTransitionEnd, this);
            if (!this._inProgress) return;
            this._inProgress = !1, this._el.style[n.DomUtil.TRANSITION] = "", clearInterval(this._stepTimer), this.fire("step").fire("end")
        }
    }), n.Map.include({
        setView: function (e, t, n) {
            t = this._limitZoom(t);
            var r = this._zoom !== t;
            if (this._loaded && !n && this._layers) {
                this._panAnim && this._panAnim.stop();
                var i = r ? this._zoomToIfClose && this._zoomToIfClose(e, t) : this._panByIfClose(e);
                if (i) return clearTimeout(this._sizeTimer), this
            }
            return this._resetView(e, t), this
        },
        panBy: function (e, t, r) {
            e = n.point(e);
            if (!e.x && !e.y) return this;
            this._panAnim || (this._panAnim = new n.PosAnimation, this._panAnim.on({
                step: this._onPanTransitionStep,
                end: this._onPanTransitionEnd
            }, this)), this.fire("movestart"), n.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
            var i = n.DomUtil.getPosition(this._mapPane).subtract(e)._round();
            return this._panAnim.run(this._mapPane, i, t || .25, r), this
        },
        _onPanTransitionStep: function () {
            this.fire("move")
        },
        _onPanTransitionEnd: function () {
            n.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
        },
        _panByIfClose: function (e) {
            var t = this._getCenterOffset(e)._floor();
            return this._offsetIsWithinView(t) ? (this.panBy(t), !0) : !1
        },
        _offsetIsWithinView: function (e, t) {
            var n = t || 1,
                r = this.getSize();
            return Math.abs(e.x) <= r.x * n && Math.abs(e.y) <= r.y * n
        }
    }), n.PosAnimation = n.DomUtil.TRANSITION ? n.PosAnimation : n.PosAnimation.extend({
        run: function (e, t, r, i) {
            this.stop(), this._el = e, this._inProgress = !0, this._duration = r || .25, this._easeOutPower = 1 / Math.max(i || .5, .2), this._startPos = n.DomUtil.getPosition(e), this._offset = t.subtract(this._startPos), this._startTime = +(new Date), this.fire("start"), this._animate()
        },
        stop: function () {
            if (!this._inProgress) return;
            this._step(), this._complete()
        },
        _animate: function () {
            this._animId = n.Util.requestAnimFrame(this._animate, this), this._step()
        },
        _step: function () {
            var e = +(new Date) - this._startTime,
                t = this._duration * 1e3;
            e < t ? this._runFrame(this._easeOut(e / t)) : (this._runFrame(1), this._complete())
        },
        _runFrame: function (e) {
            var t = this._startPos.add(this._offset.multiplyBy(e));
            n.DomUtil.setPosition(this._el, t), this.fire("step")
        },
        _complete: function () {
            n.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
        },
        _easeOut: function (e) {
            return 1 - Math.pow(1 - e, this._easeOutPower)
        }
    }), n.Map.mergeOptions({
        zoomAnimation: n.DomUtil.TRANSITION && !n.Browser.android23 && !n.Browser.mobileOpera
    }), n.DomUtil.TRANSITION && n.Map.addInitHook(function () {
        n.DomEvent.on(this._mapPane, n.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
    }), n.Map.include(n.DomUtil.TRANSITION ? {
        _zoomToIfClose: function (e, t) {
            if (this._animatingZoom) return !0;
            if (!this.options.zoomAnimation) return !1;
            var r = this.getZoomScale(t),
                i = this._getCenterOffset(e)._divideBy(1 - 1 / r);
            if (!this._offsetIsWithinView(i, 1)) return !1;
            n.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this.fire("movestart").fire("zoomstart"), this.fire("zoomanim", {
                center: e,
                zoom: t
            });
            var s = this._getCenterLayerPoint().add(i);
            return this._prepareTileBg(), this._runAnimation(e, t, r, s), !0
        },
        _catchTransitionEnd: function (e) {
            this._animatingZoom && this._onZoomTransitionEnd()
        },
        _runAnimation: function (e, t, r, i, s) {
            this._animateToCenter = e, this._animateToZoom = t, this._animatingZoom = !0, n.Draggable && (n.Draggable._disabled = !0);
            var o = n.DomUtil.TRANSFORM,
                u = this._tileBg;
            clearTimeout(this._clearTileBgTimer), n.Util.falseFn(u.offsetWidth);
            var a = n.DomUtil.getScaleString(r, i),
                f = u.style[o];
            u.style[o] = s ? f + " " + a : a + " " + f
        },
        _prepareTileBg: function () {
            var e = this._tilePane,
                t = this._tileBg;
            if (t && this._getLoadedTilesPercentage(t) > .5 && this._getLoadedTilesPercentage(e) < .5) {
                e.style.visibility = "hidden", e.empty = !0, this._stopLoadingImages(e);
                return
            }
            t || (t = this._tileBg = this._createPane("leaflet-tile-pane", this._mapPane), t.style.zIndex = 1), t.style[n.DomUtil.TRANSFORM] = "", t.style.visibility = "hidden", t.empty = !0, e.empty = !1, this._tilePane = this._panes.tilePane = t;
            var r = this._tileBg = e;
            n.DomUtil.addClass(r, "leaflet-zoom-animated"), this._stopLoadingImages(r)
        },
        _getLoadedTilesPercentage: function (e) {
            var t = e.getElementsByTagName("img"),
                n, r, i = 0;
            for (n = 0, r = t.length; n < r; n++) t[n].complete && i++;
            return i / r
        },
        _stopLoadingImages: function (e) {
            var t = Array.prototype.slice.call(e.getElementsByTagName("img")),
                r, i, s;
            for (r = 0, i = t.length; r < i; r++) s = t[r], s.complete || (s.onload = n.Util.falseFn, s.onerror = n.Util.falseFn, s.src = n.Util.emptyImageUrl, s.parentNode.removeChild(s))
        },
        _onZoomTransitionEnd: function () {
            this._restoreTileFront(), n.Util.falseFn(this._tileBg.offsetWidth), this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), n.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, n.Draggable && (n.Draggable._disabled = !1)
        },
        _restoreTileFront: function () {
            this._tilePane.innerHTML = "", this._tilePane.style.visibility = "", this._tilePane.style.zIndex = 2, this._tileBg.style.zIndex = 1
        },
        _clearTileBg: function () {
            !this._animatingZoom && !this.touchZoom._zooming && (this._tileBg.innerHTML = "")
        }
    } : {}), n.Map.include({
        _defaultLocateOptions: {
            watch: !1,
            setView: !1,
            maxZoom: Infinity,
            timeout: 1e4,
            maximumAge: 0,
            enableHighAccuracy: !1
        },
        locate: function (e) {
            e = this._locationOptions = n.extend(this._defaultLocateOptions, e);
            if (!navigator.geolocation) return this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported."
            }), this;
            var t = n.bind(this._handleGeolocationResponse, this),
                r = n.bind(this._handleGeolocationError, this);
            return e.watch ? this._locationWatchId = navigator.geolocation.watchPosition(t, r, e) : navigator.geolocation.getCurrentPosition(t, r, e), this
        },
        stopLocate: function () {
            return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this
        },
        _handleGeolocationError: function (e) {
            var t = e.code,
                n = e.message || (t === 1 ? "permission denied" : t === 2 ? "position unavailable" : "timeout");
            this._locationOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                code: t,
                message: "Geolocation error: " + n + "."
            })
        },
        _handleGeolocationResponse: function (e) {
            var t = 180 * e.coords.accuracy / 4e7,
                r = t * 2,
                i = e.coords.latitude,
                s = e.coords.longitude,
                o = new n.LatLng(i, s),
                u = new n.LatLng(i - t, s - r),
                a = new n.LatLng(i + t, s + r),
                f = new n.LatLngBounds(u, a),
                l = this._locationOptions;
            if (l.setView) {
                var c = Math.min(this.getBoundsZoom(f), l.maxZoom);
                this.setView(o, c)
            }
            this.fire("locationfound", {
                latlng: o,
                bounds: f,
                accuracy: e.coords.accuracy
            })
        }
    })
})(this);
Meteor.startup(function () {
    document.body.appendChild(Spark.render(Meteor._def_template(null, Handlebars.json_ast_to_func([
        [">", "madewith"]
    ]))))
}), Meteor._def_template("madewith", Handlebars.json_ast_to_func(['<a class="madewith_badge" href="http://madewith.meteor.com/', ["{", [
    [0, "shortname"]
]], '" target="_blank">\n    <div class="madewith_votes">\n      <div class="madewith_upvote"></div>\n      <div class="madewith_vote_count">', ["{", [
    [0, "vote_count"]
]], "</div>\n    </div>\n  </a>"]));
(function () {
    var e = window.location.host,
        t = e.match(/(.*)\.meteor.com$/),
        n = t ? t[1] : e,
        r = Meteor.connect("madewith.meteor.com"),
        i = r.subscribe("myApp", e),
        s = new Meteor.Collection("madewith_apps", {
            manager: r
        });
    r.methods({
        vote: function (e) {
            s.update({
                name: e
            }, {
                $inc: {
                    vote_count: 1
                }
            })
        }
    }), Template.madewith.vote_count = function () {
        var e = s.findOne();
        return e ? e.vote_count : "???"
    }, Template.madewith.shortname = function () {
        return n
    }, Template.madewith.events({
        "click .madewith_upvote": function (t) {
            var n = s.findOne();
            n && (r.call("vote", e), t.stopPropagation(), t.preventDefault())
        }
    })
})();
Meteor.startup(function () {
    document.body.appendChild(Spark.render(Meteor._def_template(null, Handlebars.json_ast_to_func([
        [">", "map"]
    ]))))
}), Meteor._def_template("map", Handlebars.json_ast_to_func([
    ["#", [
            [0, "constant"]
        ],
        ['\n    <div id="container" class="container">\n      <h1 class="title">Meteor Leaflet Demo</h1>\n      <div id="map" class="map"></div>\n      <div class="notice first">Double-click on map creates a marker</div>\n      <div class="notice second">Click on a marker to delete it</div>\n    </div>\n  ']
    ]
]));
var Markers;
Meteor.subscribe("markers"), Markers = new Meteor.Collection("markers"), window.resize = function (e) {
    var t, n, r, i, s;
    return s = window.innerWidth, n = window.innerHeight, i = e.find("#map").offsetTop, t = s - 40, r = n - i - 65, e.find("#container").style.width = "" + t + "px", e.find("#map").style.height = "" + r + "px"
}, Template.map.rendered = function () {
    var e, t = this;
    return window.resize(this), $(window).resize(function () {
        return window.resize(t)
    }), L.Icon.Default.imagePath = "packages/leaflet/images", window.map = L.map("map", {
        doubleClickZoom: !1
    }).setView([49.25044, -123.137], 13), L.tileLayer("http://{s}.tile.cloudmade.com/" + window.cloudmade + "/997/256/{z}/{x}/{y}.png", {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
    }).addTo(window.map), window.map.on("dblclick", function (e) {
        return Markers.insert({
            latlng: e.latlng
        })
    }), e = Markers.find({}), e.observe({
        added: function (e) {
            var t;
            return t = L.marker(e.latlng).addTo(window.map).on("click", function (e) {
                return Markers.remove({
                    latlng: this._latlng
                })
            })
        },
        removed: function (e) {
            var t, n, r, i;
            n = window.map._layers, i = [];
            for (t in n) r = n[t], !r._latlng || (r._latlng.lat === e.latlng.lat && r._latlng.lng === e.latlng.lng ? i.push(window.map.removeLayer(r)) : i.push(void 0));
            return i
        }
    })
};
window.cloudmade = "c337a7e5e7c241958df4332a8713a0a9"