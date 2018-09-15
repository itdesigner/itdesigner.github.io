! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "https://static.squarespace.com/universal/scripts-compressed/", t(t.s = 10752)
}({
    10751: function(e, t, n) {
        ! function(t, n) {
            e.exports = n()
        }(window, function() {
            return function(e) {
                function t(r) {
                    if (n[r]) return n[r].exports;
                    var o = n[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                }
                var n = {};
                return t.m = e, t.c = n, t.d = function(e, n, r) {
                    t.o(e, n) || Object.defineProperty(e, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                }, t.r = function(e) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, t.n = function(e) {
                    var n = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return t.d(n, "a", n), n
                }, t.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 24)
            }([function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = r(n(3));
                t.WP_RUM_URLS = {
                    dev: "http://localhost:8000/api/1/wp-rum",
                    prod: "/api/1/wp-rum",
                    stage: "https://www.stage.sqsp.net/api/1/wp-rum"
                }, t.WP_RUM_RECORD_URL = t.WP_RUM_URLS.prod + "/record", t.WP_RUM_ERROR_URL = t.WP_RUM_URLS.prod + "/error", t.RUM_RECORD_DATA_CODES = function(e) {
                    return {
                        data: {
                            __encoding_action__: e,
                            __encoding_key__: "d"
                        },
                        event: {
                            __encoding_action__: function(e) {
                                return t.EVENT_DATA_CODES[e]
                            },
                            __encoding_key__: "e"
                        },
                        ts: "t"
                    }
                }, t.CONNECTION_DATA_CODES = {
                    downlink: "do",
                    effectiveType: "ef",
                    rtt: "rtt",
                    saveData: "sd"
                }, t.GLOBAL_DATA_CODES = {
                    app: "a",
                    connection: {
                        __encoding_action__: t.CONNECTION_DATA_CODES,
                        __encoding_key__: "con"
                    },
                    context: "ctx",
                    hash: "h",
                    marketingId: "mid",
                    pageLoadId: "pl",
                    pathname: "p"
                }, t.EVENT_DATA_CODES = ["navigation", "user", "firstInteraction", "paint", "firstInputDelay", "tti", "resource"].reduce(function(e, t, n) {
                    return e[t] = n, e
                }, {}), t.FID_DATA_CODES = o.default({}, t.GLOBAL_DATA_CODES, {
                    delay: "d",
                    eventType: "et"
                }), t.FI_DATA_CODES = o.default({}, t.GLOBAL_DATA_CODES, {
                    eventType: "et",
                    timestamp: "t"
                }), t.NAVIGATION_DATA_CODES = o.default({}, t.GLOBAL_DATA_CODES, {
                    connectEnd: "ce",
                    connectStart: "c",
                    decodedBodySize: "db",
                    domComplete: "dc",
                    domContentLoadedEventEnd: "de",
                    domContentLoadedEventStart: "ds",
                    domInteractive: "di",
                    domLoading: "d",
                    domainLookupEnd: "dle",
                    domainLookupStart: "dl",
                    encodedBodySize: "eb",
                    fetchStart: "f",
                    loadEventEnd: "le",
                    loadEventStart: "l",
                    navigationStart: "n",
                    navigationType: "nt",
                    nextHopProtocol: "nh",
                    redirectCount: "rc",
                    redirectEnd: "rde",
                    redirectStart: "rd",
                    requestStart: "r",
                    responseEnd: "re",
                    responseStart: "rs",
                    secureConnectionStart: "s",
                    supportLevel: "sl",
                    transferSize: "t",
                    unloadEventEnd: "ue",
                    unloadEventStart: "u",
                    visibilityStateOnDCL: "v"
                }), t.USER_DATA_CODES = o.default({}, t.GLOBAL_DATA_CODES, {
                    duration: "d",
                    name: "n",
                    startTime: "st"
                }), t.TTI_DATA_CODES = o.default({}, t.GLOBAL_DATA_CODES, {
                    tti: "t"
                }), t.PAINT_DATA_CODES = o.default({}, t.GLOBAL_DATA_CODES, {
                    firstContentfulPaint: "fcp",
                    firstPaint: "fp"
                }), t.RESOURCE_DATA_CODES = o.default({}, t.GLOBAL_DATA_CODES, {
                    eventType: "et",
                    resourceTiming: "r"
                }), t.FID_DATA_KEYS = Object.keys(t.FID_DATA_CODES), t.FI_DATA_KEYS = Object.keys(t.FI_DATA_CODES), t.GLOBAL_DATA_KEYS = Object.keys(t.GLOBAL_DATA_CODES), t.NAVIGATION_DATA_KEYS = Object.keys(t.NAVIGATION_DATA_CODES), t.USER_DATA_KEYS = Object.keys(t.USER_DATA_CODES), t.PAINT_DATA_KEYS = Object.keys(t.PAINT_DATA_CODES), t.TTI_DATA_KEYS = Object.keys(t.TTI_DATA_CODES), t.RESOURCE_DATA_KEYS = Object.keys(t.RESOURCE_DATA_CODES), t.USER_TIMING_EVENT = "userTiming", t.INTERACTION_EVENTS = ["click", "mousedown", "keydown", "touchstart", "pointerdown"], t.LOAD_EVENT = "load", t.BEFORE_UNLOAD_EVENT = "beforeunload", t.RESOURCE_BUFFER_FULL_EVENT = "resourcetimingbufferfull", t.PAINT_EVENTS = ["first-paint", "first-contentful-paint"], t.RESOURCE_EVENTS = [t.LOAD_EVENT, t.BEFORE_UNLOAD_EVENT, t.RESOURCE_BUFFER_FULL_EVENT], t.MARKETING_ID_COOKIE = "SS_MID"
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(0),
                    o = n(6),
                    i = n(5),
                    a = function() {
                        function e() {
                            this.deliveryBuffer = {}, this.eventName = "", this.entryType = this.eventName, this.fireOnce = !1, this.gatherEvents = [], this.supportType = "PerformanceObserver" in window ? "observe" : "gather", this.encodeMap = r.RUM_RECORD_DATA_CODES(r.GLOBAL_DATA_CODES)
                        }
                        return e.prototype.getDeliveryBuffer = function() {
                            return this.deliveryBuffer
                        }, e.prototype.getEventName = function() {
                            return this.eventName
                        }, e.prototype.getEntryType = function() {
                            return this.entryType
                        }, e.prototype.getGatherEvents = function() {
                            return this.gatherEvents
                        }, e.prototype.getSupportType = function() {
                            return this.supportType
                        }, e.prototype.shouldFireOnce = function() {
                            return this.fireOnce
                        }, e.prototype.observerParse = function(e) {
                            return this.deliveryBuffer = e, !0
                        }, e.prototype.gather = function(e) {
                            return e
                        }, e.prototype.gatherParse = function(e) {
                            return this.deliveryBuffer = e, !0
                        }, e.prototype.deliver = function() {
                            var e = i.createRumMetric(this.getEventName(), this.deliveryBuffer);
                            o.beaconRumMetrics(this.getEncodeMap(), e)
                        }, e.prototype.getEncodeMap = function() {
                            return this.encodeMap
                        }, e
                    }();
                t.default = a
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.interactionTimingSupported = function() {
                    return !!(window.performance && window.performance.now && window.addEventListener)
                }, t.userTimingSupported = function() {
                    return !!(window.PerformanceMeasure && window.PerformanceMark && window.performance && window.performance.mark && window.performance.measure)
                }
            }, function(e, t, n) {
                "use strict";
                var r = Object.getOwnPropertySymbols,
                    o = Object.prototype.hasOwnProperty,
                    i = Object.prototype.propertyIsEnumerable;
                e.exports = function() {
                    try {
                        if (!Object.assign) return !1;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                                return t[e]
                            }).join("")) return !1;
                        var r = {};
                        return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                            r[e] = e
                        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                    } catch (e) {
                        return !1
                    }
                }() ? Object.assign : function(e, t) {
                    for (var n, a, u = function(e) {
                            if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                            return Object(e)
                        }(e), c = 1; c < arguments.length; c++) {
                        for (var s in n = Object(arguments[c])) o.call(n, s) && (u[s] = n[s]);
                        if (r) {
                            a = r(n);
                            for (var f = 0; f < a.length; f++) i.call(n, a[f]) && (u[a[f]] = n[a[f]])
                        }
                    }
                    return u
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    var t = {};
                    for (var n in e) n in e && (t[n] = e[n]);
                    return t
                }
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    o.push(e)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = [];
                t.getPerformanceData = function() {
                    return o
                }, t.addPerformanceData = r, t.createRumMetric = function(e, t) {
                    var n = Object.freeze({
                        data: t,
                        event: e,
                        ts: Date.now()
                    });
                    return r(n), n
                }
            }, function(e, t, n) {
                "use strict";

                function r(e, t) {
                    if ("function" != typeof navigator.sendBeacon || !navigator.sendBeacon(e, t)) {
                        var n = new XMLHttpRequest;
                        n.open("POST", e, !0), n.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), n.send(t)
                    }
                }

                function o(e, t) {
                    "function" == typeof window.dispatchEvent && "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent(e, {
                        detail: t
                    }))
                }
                var i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = n(0),
                    u = i(n(20));
                t.default = r, t.emitEvent = o, t.beaconError = function(e) {
                    r(a.WP_RUM_ERROR_URL, e)
                }, t.beaconRumMetrics = function(e, t) {
                    o("onRumCollectorData", t);
                    var n = JSON.stringify(u.default(e, t));
                    if (!n) throw new Error("Data is empty");
                    r(a.WP_RUM_RECORD_URL, n)
                }
            }, function(e, t, n) {
                "use strict";

                function r() {
                    return "mark" in window.performance && "measure" in window.performance
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = n(0),
                    i = n(6);
                t.mark = function(e) {
                    if (r()) {
                        var t = "rum-start-" + e;
                        window.performance.mark(t)
                    }
                }, t.measure = function(e) {
                    if (r() && "performance" in window && "getEntries" in window.performance && "getEntriesByType" in window.performance && "getEntriesByName" in window.performance) {
                        var t = "rum-start-" + e,
                            n = "rum-end-" + e,
                            a = "rum-" + e;
                        window.performance.mark(n), window.performance.measure(a, t, n);
                        var u = window.performance.getEntriesByName(a),
                            c = u[u.length - 1];
                        i.emitEvent(o.USER_TIMING_EVENT, c)
                    }
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t) {
                    function n() {
                        t(e), o()
                    }

                    function r() {
                        o()
                    }

                    function o() {
                        removeEventListener("pointerup", n, i), removeEventListener("pointercancel", r, i)
                    }
                    var i = {
                        passive: !0,
                        capture: !0
                    };
                    addEventListener("pointerup", n, i), addEventListener("pointercancel", r, i)
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function e(t) {
                    return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ("" + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    var t = new RegExp("(^| )" + e + "=([^;]+)"),
                        n = document.cookie.match(t);
                    return n ? n[2] : ""
                }
            }, function(e, t, n) {
                "use strict";

                function r() {
                    var e = {},
                        t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                    if (t) {
                        var n = (1e3 * t.downlink).toString();
                        e = {
                            downlink: parseInt(n, 10),
                            effectiveType: t.effectiveType,
                            rtt: t.rtt,
                            saveData: t.saveData
                        }
                    }
                    return e
                }
                var o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(0),
                    a = o(n(10)),
                    u = o(n(9));
                t.getConnection = r, t.default = function(e) {
                    var t = e.context || {};
                    "object" != typeof t && (t = {});
                    var n = r();
                    return {
                        app: e.appName || "",
                        connection: n,
                        context: t,
                        hash: window.location.hash || "",
                        marketingId: a.default(i.MARKETING_ID_COOKIE),
                        pageLoadId: u.default(),
                        pathname: window.location.pathname || ""
                    }
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, n) {
                    throw "object" == typeof e && "name" in e && (e.name = "RUMError[" + t + "]"), "object" == typeof e && "message" in e && (e.message += ": " + JSON.stringify(n)), e
                }
            }, function(e, t, n) {
                "use strict";
                var r = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        };
                        return function(t, n) {
                            function r() {
                                this.constructor = t
                            }
                            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                        }
                    }(),
                    o = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(0),
                    a = n(2),
                    u = o(n(4)),
                    c = function(e) {
                        function t() {
                            var t = e.call(this) || this;
                            return t.eventName = "user", t.entryType = "measure", t.gatherEvents = [i.USER_TIMING_EVENT], t.encodeMap = i.RUM_RECORD_DATA_CODES(i.USER_DATA_CODES), a.userTimingSupported() || (t.supportType = ""), t
                        }
                        return r(t, e), t.prototype.observerParse = function(e) {
                            return this.parse(e)
                        }, t.prototype.gather = function(e) {
                            var t = e.detail;
                            return u.default(t)
                        }, t.prototype.gatherParse = function(e) {
                            return this.parse(e)
                        }, t.prototype.parse = function(e) {
                            if (e.name.substr && "rum-" === e.name.substr(0, 4)) {
                                var t = i.USER_DATA_KEYS.reduce(function(t, n) {
                                    return n in e && (t[n] = e[n]), t
                                }, {});
                                return this.deliveryBuffer = t, !0
                            }
                            return !1
                        }, t
                    }(o(n(1)).default);
                t.default = c
            }, function(e, t) {
                var n;
                n = function() {
                    return this
                }();
                try {
                    n = n || Function("return this")() || (0, eval)("this")
                } catch (e) {
                    "object" == typeof window && (n = window)
                }
                e.exports = n
            }, function(e, t, n) {
                (function(n) {
                    var r;
                    ! function() {
                        function o() {
                            o = function() {}, v.Symbol || (v.Symbol = i)
                        }

                        function i(e) {
                            return "jscomp_symbol_" + (e || "") + h++
                        }

                        function a() {
                            o();
                            var e = v.Symbol.iterator;
                            e || (e = v.Symbol.iterator = v.Symbol("iterator")), "function" != typeof Array.prototype[e] && y(Array.prototype, e, {
                                configurable: !0,
                                writable: !0,
                                value: function() {
                                    return u(this)
                                }
                            }), a = function() {}
                        }

                        function u(e) {
                            var t = 0;
                            return function(e) {
                                return a(), (e = {
                                    next: e
                                })[v.Symbol.iterator] = function() {
                                    return this
                                }, e
                            }(function() {
                                return t < e.length ? {
                                    done: !1,
                                    value: e[t++]
                                } : {
                                    done: !0
                                }
                            })
                        }

                        function c(e) {
                            a();
                            var t = e[Symbol.iterator];
                            return t ? t.call(e) : u(e)
                        }

                        function s(e) {
                            if (!(e instanceof Array)) {
                                e = c(e);
                                for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                                e = n
                            }
                            return e
                        }

                        function f(e, t) {
                            for (var n = (e = c(e)).next(); !n.done; n = e.next())
                                if (n = n.value, t.includes(n.nodeName.toLowerCase()) || f(n.children, t)) return !0;
                            return !1
                        }

                        function p(e, t) {
                            if (2 < e.length) return performance.now();
                            for (var n = [], r = (t = c(t)).next(); !r.done; r = t.next()) r = r.value, n.push({
                                timestamp: r.start,
                                type: "requestStart"
                            }), n.push({
                                timestamp: r.end,
                                type: "requestEnd"
                            });
                            for (r = (t = c(e)).next(); !r.done; r = t.next()) n.push({
                                timestamp: r.value,
                                type: "requestStart"
                            });
                            for (n.sort(function(e, t) {
                                    return e.timestamp - t.timestamp
                                }), e = e.length, t = n.length - 1; 0 <= t; t--) switch ((r = n[t]).type) {
                                case "requestStart":
                                    e--;
                                    break;
                                case "requestEnd":
                                    if (2 < ++e) return r.timestamp;
                                    break;
                                default:
                                    throw Error("Internal Error: This should never happen")
                            }
                            return 0
                        }

                        function d(e) {
                            e = e || {}, this.w = !!e.useMutationObserver, this.u = e.minValue || null, e = window.__tti && window.__tti.e;
                            var t = window.__tti && window.__tti.o;
                            this.a = e ? e.map(function(e) {
                                    return {
                                        start: e.startTime,
                                        end: e.startTime + e.duration
                                    }
                                }) : [], t && t.disconnect(), this.b = [], this.f = new Map, this.j = null, this.v = -1 / 0, this.i = !1, this.h = this.c = this.s = null,
                                function(e, t) {
                                    var n = XMLHttpRequest.prototype.send,
                                        r = m++;
                                    XMLHttpRequest.prototype.send = function(o) {
                                        for (var i = [], a = 0; a < arguments.length; ++a) i[a - 0] = arguments[a];
                                        var u = this;
                                        return e(r), this.addEventListener("readystatechange", function() {
                                            4 === u.readyState && t(r)
                                        }), n.apply(this, i)
                                    }
                                }(this.m.bind(this), this.l.bind(this)),
                                function(e, t) {
                                    var n = fetch;
                                    fetch = function(r) {
                                        for (var o = [], i = 0; i < arguments.length; ++i) o[i - 0] = arguments[i];
                                        return new Promise(function(r, i) {
                                            var a = m++;
                                            e(a), n.apply(null, [].concat(s(o))).then(function(e) {
                                                t(a), r(e)
                                            }, function(e) {
                                                t(e), i(e)
                                            })
                                        })
                                    }
                                }(this.m.bind(this), this.l.bind(this)),
                                function(e) {
                                    e.c = new PerformanceObserver(function(t) {
                                        for (var n = (t = c(t.getEntries())).next(); !n.done; n = t.next())
                                            if ("resource" === (n = n.value).entryType && (e.b.push({
                                                    start: n.fetchStart,
                                                    end: n.responseEnd
                                                }), _(e, p(e.g, e.b) + 5e3)), "longtask" === n.entryType) {
                                                var r = n.startTime + n.duration;
                                                e.a.push({
                                                    start: n.startTime,
                                                    end: r
                                                }), _(e, r + 5e3)
                                            }
                                    }), e.c.observe({
                                        entryTypes: ["longtask", "resource"]
                                    })
                                }(this), this.w && (this.h = function(e) {
                                    var t = new MutationObserver(function(t) {
                                        for (var n = (t = c(t)).next(); !n.done; n = t.next()) "childList" == (n = n.value).type && f(n.addedNodes, E) ? e(n) : "attributes" == n.type && E.includes(n.target.tagName.toLowerCase()) && e(n)
                                    });
                                    return t.observe(document, {
                                        attributes: !0,
                                        childList: !0,
                                        subtree: !0,
                                        attributeFilter: ["href", "src"]
                                    }), t
                                }(this.B.bind(this)))
                        }

                        function l(e) {
                            e.i = !0;
                            var t = 0 < e.a.length ? e.a[e.a.length - 1].end : 0,
                                n = p(e.g, e.b);
                            _(e, Math.max(n + 5e3, t))
                        }

                        function _(e, t) {
                            !e.i || e.v > t || (clearTimeout(e.j), e.j = setTimeout(function() {
                                var t = performance.timing.navigationStart,
                                    n = p(e.g, e.b);
                                if (t = (window.a && window.a.A ? 1e3 * window.a.A().C - t : 0) || performance.timing.domContentLoadedEventEnd - t, e.u) var r = e.u;
                                else r = performance.timing.domContentLoadedEventEnd ? (r = performance.timing).domContentLoadedEventEnd - r.navigationStart : null;
                                var o = performance.now();
                                null === r && _(e, Math.max(n + 5e3, o + 1e3));
                                var i = e.a;
                                (n = 5e3 > o - n ? null : 5e3 > o - (n = i.length ? i[i.length - 1].end : t) ? null : Math.max(n, r)) && (e.s(n), clearTimeout(e.j), e.i = !1, e.c && e.c.disconnect(), e.h && e.h.disconnect()), _(e, performance.now() + 1e3)
                            }, t - performance.now()), e.v = t)
                        }
                        var v = "undefined" != typeof window && window === this ? this : void 0 !== n && null != n ? n : this,
                            y = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
                                e != Array.prototype && e != Object.prototype && (e[t] = n.value)
                            },
                            h = 0,
                            m = 0,
                            E = "img script iframe link audio video source".split(" ");
                        d.prototype.getFirstConsistentlyInteractive = function() {
                            var e = this;
                            return new Promise(function(t) {
                                e.s = t, "complete" == document.readyState ? l(e) : window.addEventListener("load", function() {
                                    l(e)
                                })
                            })
                        }, d.prototype.m = function(e) {
                            this.f.set(e, performance.now())
                        }, d.prototype.l = function(e) {
                            this.f.delete(e)
                        }, d.prototype.B = function() {
                            _(this, performance.now() + 5e3)
                        }, v.Object.defineProperties(d.prototype, {
                            g: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return [].concat(s(this.f.values()))
                                }
                            }
                        });
                        var w = {
                            getFirstConsistentlyInteractive: function(e) {
                                return e = e || {}, "PerformanceLongTaskTiming" in window ? new d(e).getFirstConsistentlyInteractive() : Promise.resolve(null)
                            }
                        };
                        void 0 !== e && e.exports ? e.exports = w : void 0 === (r = function() {
                            return w
                        }.apply(t, [])) || (e.exports = r)
                    }()
                }).call(this, n(14))
            }, function(e, t, n) {
                "use strict";
                var r = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        };
                        return function(t, n) {
                            function r() {
                                this.constructor = t
                            }
                            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                        }
                    }(),
                    o = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = o(n(3)),
                    a = n(15),
                    u = n(0),
                    c = function(e) {
                        function t(t) {
                            var n = e.call(this) || this;
                            return n.eventName = "tti", n.entryType = "longtask", n.supportType = "observe", n.encodeMap = u.RUM_RECORD_DATA_CODES(u.TTI_DATA_CODES), n.fireOnce = !0, window.PerformanceLongTaskTiming && window.PerformanceObserver ? (window.__tti = {
                                e: []
                            }, a.getFirstConsistentlyInteractive().then(function(e) {
                                n.parse(i.default({}, t, {
                                    tti: e
                                })), n.deliver()
                            })) : n.supportType = "", n
                        }
                        return r(t, e), t.prototype.observerParse = function(e) {
                            return window.__tti && (window.__tti.e = window.__tti.e.concat(e)), !1
                        }, t.prototype.parse = function(e) {
                            this.deliveryBuffer = u.TTI_DATA_KEYS.reduce(function(t, n) {
                                return n in e && (t[n] = e[n]), t
                            }, {})
                        }, t
                    }(o(n(1)).default);
                t.default = c
            }, function(e, t, n) {
                "use strict";
                var r = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        };
                        return function(t, n) {
                            function r() {
                                this.constructor = t
                            }
                            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                        }
                    }(),
                    o = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(0),
                    a = function(e) {
                        function t() {
                            var t = null !== e && e.apply(this, arguments) || this;
                            return t.eventName = "paint", t.entryType = "paint", t.supportType = "observe", t.encodeMap = i.RUM_RECORD_DATA_CODES(i.PAINT_DATA_CODES), t.paintsRetrieved = [], t
                        }
                        return r(t, e), t.prototype.observerParse = function(e) {
                            var t = this,
                                n = e.name,
                                r = e.startTime;
                            if (i.PAINT_EVENTS.indexOf(n) < 0) return !1;
                            this.paintsRetrieved.push(n), 0 === Object.keys(this.deliveryBuffer).length && i.PAINT_DATA_KEYS.forEach(function(n) {
                                n in e && t.deliveryBuffer && (t.deliveryBuffer[n] = e[n])
                            });
                            var o = n.replace(/-([a-zA-Z])/g, function(e, t) {
                                return t && t.toUpperCase() || e
                            });
                            return this.deliveryBuffer[o] = r, !(this.paintsRetrieved.length < i.PAINT_EVENTS.length)
                        }, t
                    }(o(n(1)).default);
                t.default = a
            }, function(e, t, n) {
                "use strict";
                var r = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        };
                        return function(t, n) {
                            function r() {
                                this.constructor = t
                            }
                            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                        }
                    }(),
                    o = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(0),
                    a = o(n(4)),
                    u = function(e) {
                        function t() {
                            var t, n = e.call(this) || this;
                            return n.eventName = "navigation", n.entryType = "navigation", n.gatherEvents = [i.LOAD_EVENT], n.encodeMap = i.RUM_RECORD_DATA_CODES(i.NAVIGATION_DATA_CODES), n.supportLevel = -1, n.visibilityStateOnDCL = "", t = n.getNavigationLevel(), n.supportType = t[0], n.supportLevel = t[1], window.addEventListener("DOMContentLoaded", function(e) {
                                n.visibilityStateOnDCL = document.visibilityState || ""
                            }, {
                                once: !0
                            }), n
                        }
                        return r(t, e), t.prototype.observerParse = function(e) {
                            return this.parse(e)
                        }, t.prototype.gather = function(e) {
                            var t;
                            return t = 1 === this.supportLevel ? window.performance.timing : performance.getEntriesByType("navigation")[0], a.default(t)
                        }, t.prototype.gatherParse = function(e) {
                            return this.parse(e)
                        }, t.prototype.parse = function(e) {
                            return "navigation" in performance && (e.navigationType = performance.navigation.type, e.redirectCount = performance.navigation.redirectCount), e.supportLevel = this.supportLevel, this.deliveryBuffer = i.NAVIGATION_DATA_KEYS.reduce(function(t, n) {
                                return n in e && ("number" == typeof e[n] && "navigationStart" !== n && e[n] >= e.navigationStart ? t[n] = e[n] - e.navigationStart : t[n] = e[n]), t
                            }, {}), this.deliveryBuffer.visibilityStateOnDCL = this.visibilityStateOnDCL, !0
                        }, t.prototype.getNavigationLevel = function() {
                            if (window.performance) {
                                if (window.performance.getEntriesByType && void 0 !== window.PerformanceNavigationTiming && window.performance.getEntriesByType(this.entryType)[0] instanceof PerformanceNavigationTiming) return [this.supportType, 2];
                                if (window.performance.timing) return ["gather", 1]
                            }
                            return ["", -1]
                        }, t
                    }(o(n(1)).default);
                t.default = u
            }, function(e, t, n) {
                "use strict";
                var r = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        };
                        return function(t, n) {
                            function r() {
                                this.constructor = t
                            }
                            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                        }
                    }(),
                    o = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(0),
                    a = n(2),
                    u = function(e) {
                        function t() {
                            var t = e.call(this) || this;
                            return t.eventName = "firstInteraction", t.gatherEvents = i.INTERACTION_EVENTS, t.fireOnce = !0, t.encodeMap = i.RUM_RECORD_DATA_CODES(i.FI_DATA_CODES), a.interactionTimingSupported() ? t.supportType = "gather" : t.supportType = "", t
                        }
                        return r(t, e), t.prototype.gather = function(e) {
                            var t = window.performance.now();
                            return {
                                eventType: e.type,
                                timestamp: t
                            }
                        }, t.prototype.gatherParse = function(e) {
                            return this.deliveryBuffer = i.FI_DATA_KEYS.reduce(function(t, n) {
                                return n in e && (t[n] = e[n]), t
                            }, {}), !0
                        }, t
                    }(o(n(1)).default);
                t.default = u
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return "number" == typeof e && e % 1 == 0
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function e(t, n) {
                    var o = {};
                    for (var i in t)
                        if (i in n) {
                            var a = t[i],
                                u = n[i],
                                c = void 0;
                            if ("object" == typeof a) {
                                var s = a.__encoding_action__;
                                if (a = a.__encoding_key__, "object" == typeof s) c = e(s, u);
                                else {
                                    if ("function" != typeof s) throw new Error("Invalid encoding map");
                                    c = s(u)
                                }
                            } else c = r(u) ? u.toString(32) : u;
                            o["" + a] = c
                        }
                    return o
                }
            }, function(e, t, n) {
                "use strict";
                var r = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        };
                        return function(t, n) {
                            function r() {
                                this.constructor = t
                            }
                            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                        }
                    }(),
                    o = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(0),
                    a = n(2),
                    u = function(e) {
                        function t() {
                            var t = e.call(this) || this;
                            return t.eventName = "firstInputDelay", t.gatherEvents = i.INTERACTION_EVENTS, t.fireOnce = !0, t.encodeMap = i.RUM_RECORD_DATA_CODES(i.FI_DATA_CODES), a.interactionTimingSupported() ? t.supportType = "gather" : t.supportType = "", t
                        }
                        return r(t, e), t.prototype.gather = function(e) {
                            var t = e.timeStamp,
                                n = t > 1e12 ? +new Date : window.performance.now();
                            return {
                                delay: Math.max(n - t, 0),
                                eventType: e.type
                            }
                        }, t.prototype.gatherParse = function(e) {
                            return this.deliveryBuffer = i.FID_DATA_KEYS.reduce(function(t, n) {
                                return n in e && (t[n] = e[n]), t
                            }, {}), !0
                        }, t
                    }(o(n(1)).default);
                t.default = u
            }, function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = r(n(21)),
                    i = r(n(19)),
                    a = r(n(18)),
                    u = r(n(17)),
                    c = r(n(16)),
                    s = r(n(13));
                t.default = [o.default, i.default, a.default, u.default, s.default, c.default]
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e + "-observer"
                }

                function o(e) {
                    for (;
                        (e.timeRemaining() > 0 || e.didTimeout) && l.length;) {
                        var t = l.shift();
                        t && t.deliver()
                    }
                    u = l.length ? window.requestIdleCallback(o, {
                        timeout: _
                    }) : void 0
                }

                function i(e) {
                    window.requestIdleCallback ? function(e) {
                        l.push(e), u || (u = window.requestIdleCallback(o, {
                            timeout: _
                        }))
                    }(e) : e.deliver()
                }
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var u, c = a(n(3)),
                    s = a(n(22)),
                    f = a(n(12)),
                    p = a(n(11)),
                    d = a(n(8)),
                    l = [],
                    _ = 2e3;
                t.init = function(e) {
                    var t = p.default(e),
                        n = [];
                    if (s.default.map(function(e) {
                            return new e(t)
                        }).forEach(function(e) {
                            var o = e.getSupportType();
                            if ("observe" === o) {
                                var a = e.getEntryType(),
                                    u = r(a);
                                n.push(a), window.addEventListener(u, function(n) {
                                    var r = n.detail;
                                    try {
                                        e.observerParse(c.default({}, t, r)) && i(e)
                                    } catch (t) {
                                        var o = e.getDeliveryBuffer() || r || {};
                                        f.default(t, u, o)
                                    }
                                })
                            } else if ("gather" === o) {
                                var s = e.getGatherEvents(),
                                    p = e.getEventName(),
                                    l = function(n) {
                                        e.gatherParse(c.default({}, t, n)) && i(e)
                                    },
                                    _ = function(t) {
                                        var n;
                                        try {
                                            "pointerdown" === (n = e.gather(t)).eventType ? d.default(n, l) : l(n)
                                        } catch (t) {
                                            var r = e.getDeliveryBuffer() || n || {};
                                            f.default(t, p, r)
                                        }
                                        e.shouldFireOnce() && s.forEach(function(e) {
                                            window.removeEventListener(e, _)
                                        })
                                    };
                                s.forEach(function(e) {
                                    window.addEventListener(e, _)
                                })
                            }
                        }), "PerformanceObserver" in window) {
                        var o = function(e) {
                            e.forEach(function(e) {
                                var t = new CustomEvent(r(e.entryType), {
                                    detail: e.toJSON()
                                });
                                window.dispatchEvent(t)
                            })
                        };
                        o(performance.getEntries().filter(function(e) {
                            return "navigation" !== e.entryType
                        })), new window.PerformanceObserver(function(e) {
                            o(e.getEntries())
                        }).observe({
                            entryTypes: n
                        })
                    }
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(23);
                t.default = r.init;
                var o = n(5);
                t.getPerformanceData = o.getPerformanceData,
                    function(e) {
                        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
                    }(n(7))
            }])
        })
    },
    10752: function(e, t, n) {
        "use strict";
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(10751));
        if (window.top === window) {
            var o = window.Static && window.Static.SQUARESPACE_CONTEXT;
            if (o) {
                var i = o.website || {},
                    a = o.websiteSettings || {},
                    u = o.collection || {};
                (0, r.default)({
                    appName: "v6-user-sites",
                    context: {
                        pageType: "number" == typeof o.pageType ? o.pageType : -1,
                        templateId: o.templateId || "",
                        impersonatedSession: o.impersonatedSession || !1,
                        websiteId: i.id || "",
                        authenticUrl: i.authenticUrl || "",
                        developerMode: i.developerMode || !1,
                        timeZone: i.timeZone || "",
                        language: i.language || "",
                        ampEnabled: a.ampEnabled || !1,
                        collectionType: "number" == typeof u.type ? u.type : -1
                    }
                })
            }
        }
    }
});