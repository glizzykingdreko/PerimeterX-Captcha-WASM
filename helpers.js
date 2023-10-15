var s = new Array(128).fill(undefined);
s.push(undefined, null, !0, !1);
var j = s.length;
var g = 0,
    K = null;
    i = new TextEncoder("utf-8"),
    E = new TextDecoder("utf-8", {
        "ignoreBOM": !0,
        "fatal": !0
    }),
    functions = {};

function D() {
    return (null === K || 0 === K.byteLength) && (K = new Uint8Array(global.instance.memory.buffer)), K;
}

var Ee = typeof Symbol === "function" && "symbol" == typeof Symbol.iterator ? function (r) {
    return typeof r;
} : function (r) {
    return r && typeof Symbol === "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
};

q = Ee(i.encodeInto) === "function" ? function (r, u) {
    return i.encodeInto(r, u);
} : function (r, u) {
    var z,
        e = i.encode(r);
    return u.set(e), z = {
        "read": r.length
    }, z.written = e.length, z;
}

function d(r, u) {
    return E.decode(D().subarray(r, r + u));
}

function o(r) {
    return s[r];
}

function A(r) {
    var u,
        v = o(r);
    return (u = r) < 132 || (s[u] = j, j = u), v;
}

function u(r) {
    return (u = "function" == ("undefined" == typeof Symbol ? "undefined" : Ee(Symbol)) && "symbol" == Ee(Symbol.iterator) ? function (r) {
        return typeof r === "undefined" ? "undefined" : Ee(r);
    } : function (r) {
        return r && "function" == (typeof Symbol === "undefined" ? "undefined" : Ee(Symbol)) && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r === "undefined" ? "undefined" : Ee(r);
    })(r);
}

function M(r, u) {
    try {
        return r.apply(this, u);
    } catch (r) {
        global.instance.__wbindgen_exn_store(P(r));
    }
}

function P(r) {
    j === s.length && s.push(s.length + 1);
    var t = j;
    return j = s[t], s[t] = r, t;
}


function c(r, u, t) {
    if (undefined === t) {
        var e = i.encode(r),
            w = u(e.length);
        return D().subarray(w, w + e.length).set(e), g = e.length, w;
    }
    for (var L = r.length, s = u(L), o = D(), K = 0; K < L; K++) {
        var c = r.charCodeAt(K);
        if (c > 127) break;
        o[s + K] = c;
    }
    if (K !== L) {
        0 !== K && (r = r.slice(K)), s = t(s, L, L = K + 3 * r.length);
        var y = D().subarray(s + K, s + L);
        K += q(r, y).written;
    }
    return g = K, s;
}

function loadStructure() {
    var t = {};
    return t.wbg = {}, t.wbg.__wbindgen_string_get = function (r, u) {
        var t = o(u),
            e = (typeof t === "undefined" ? "undefined" : Ee(t)) === "string" ? t : undefined,
            w = y(e) ? 0 : c(e, global.instance.__wbindgen_malloc, global.instance.__wbindgen_realloc),
            L = g;
        H()[r / 4 + 1] = L, H()[r / 4 + 0] = w;
    }, t.wbg.__wbindgen_object_drop_ref = function (r) {
        A(r);
    }, t.wbg.__wbindgen_string_new = function (r, u) {
        return P(d(r, u));
    }, t.wbg.__wbg_instanceof_Window_e266f02eee43b570 = function (r) {
        var u;
        try {
            u = o(r) instanceof Window;
        } catch (r) {
            u = !1;
        }
        return u;
    }, t.wbg.__wbg_get_e6ae480a4b8df368 = function (r, u, v) {
        var n = o(r)[d(u, v)];
        return y(n) ? 0 : P(n);
    }, t.wbg.__wbg_crypto_c48a774b022d20ac = function (r) {
        return P(o(r).crypto);
    }, t.wbg.__wbindgen_is_object = function (r) {
        var t = o(r);
        return u(t) === "object" && null !== t;
    }, t.wbg.__wbg_process_298734cf255a885d = function (r) {
        return P(o(r).process);
    }, t.wbg.__wbg_versions_e2e78e134e3e5d01 = function (r) {
        return P(o(r).versions);
    }, t.wbg.__wbg_node_1cd7a5d853dbea79 = function (r) {
        return P(o(r).node);
    }, t.wbg.__wbindgen_is_string = function (r) {
        return Ee(o(r)) === "string";
    }, t.wbg.__wbg_require_8f08ceecec0f4fee = function () {
        return M(function () {
            return P(module.require);
        }, arguments);
    }, t.wbg.__wbg_msCrypto_bcb970640f50a1e8 = function (r) {
        return P(o(r).msCrypto);
    }, t.wbg.__wbg_getRandomValues_37fa2ca9e4e07fab = function () {
        return M(function (r, u) {
            o(r).getRandomValues(o(u));
        }, arguments);
    }, t.wbg.__wbg_randomFillSync_dc1e9a60c158336d = function () {
        return M(function (r, u) {
            o(r).randomFillSync(A(u));
        }, arguments);
    }, t.wbg.__wbindgen_is_function = function (r) {
        return Ee(o(r)) === "function";
    }, t.wbg.__wbg_newnoargs_2b8b6bd7753c76ba = function (r, u) {
        return P(new Function(d(r, u)));
    }, t.wbg.__wbg_call_95d1ea488d03e4e8 = function () {
        return M(function (r, u) {
            return P(o(r).call(o(u)));
        }, arguments);
    }, t.wbg.__wbg_new_f9876326328f45ed = function () {
        return P(new Object());
    }, t.wbg.__wbg_self_e7c1f827057f6584 = function () {
        return M(function () {
            return P(self.self);
        }, arguments);
    }, t.wbg.__wbg_window_a09ec664e14b1b81 = function () {
        return M(function () {
            return P(window.window);
        }, arguments);
    }, t.wbg.__wbg_globalThis_87cbb8506fecf3a9 = function () {
        return M(function () {
            return P(globalThis.globalThis);
        }, arguments);
    }, t.wbg.__wbg_global_c85a9259e621f3db = function () {
        return M(function () {
            return P(global.global);
        }, arguments);
    }, t.wbg.__wbindgen_is_undefined = function (r) {
        return undefined === o(r);
    }, t.wbg.__wbg_call_9495de66fdbe016b = function () {
        return M(function (r, u, n) {
            return P(o(r).call(o(u), o(n)));
        }, arguments);
    }, t.wbg.__wbg_buffer_cf65c07de34b9a08 = function (r) {
        return P(o(r).buffer);
    }, t.wbg.__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5 = function (r, u, v) {
        return P(new Uint8Array(o(r), u >>> 0, v >>> 0));
    }, t.wbg.__wbg_new_537b7341ce90bb31 = function (r) {
        return P(new Uint8Array(o(r)));
    }, t.wbg.__wbg_set_17499e8aa4003ebd = function (r, u, n) {
        o(r).set(o(u), n >>> 0);
    }, t.wbg.__wbg_newwithlength_b56c882b57805732 = function (r) {
        return P(new Uint8Array(r >>> 0));
    }, t.wbg.__wbg_subarray_7526649b91a252a6 = function (r, u, n) {
        return P(o(r).subarray(u >>> 0, n >>> 0));
    }, t.wbg.__wbindgen_object_clone_ref = function (r) {
        return P(o(r));
    }, t.wbg.__wbindgen_throw = function (r, u) {
        throw new Error(d(r, u));
    }, t.wbg.__wbindgen_memory = function () {
        return P(global.instance.memory);
    }, t;
}


var m = null;
function H() {
    return (null === m || 0 === m.byteLength) && (m = new Int32Array(global.instance.memory.buffer)), m;
}

functions.a = function () {
    try {
        var t = global.instance.__wbindgen_add_to_stack_pointer(-16);
        global.instance.a(t);
        var f = H()[t / 4 + 0],
            e = H()[t / 4 + 1],
            w = H()[t / 4 + 2],
            L = H()[t / 4 + 3],
            s = f,
            o = e;
        if (L) throw s = 0, o = 0, A(w);
        return d(s, o);
    } finally {
        global.instance.__wbindgen_add_to_stack_pointer(16), 
        global.instance.__wbindgen_free(s, o);
    }
}
functions.b = function (r) {
    try {
        var f = global.instance.__wbindgen_add_to_stack_pointer(-16),
            e = c(r, global.instance.__wbindgen_malloc, global.instance.__wbindgen_realloc),
            w = g;
            global.instance.b(f, e, w);
        var L = H()[f / 4 + 0],
            s = H()[f / 4 + 1],
            o = H()[f / 4 + 2],
            K = H()[f / 4 + 3],
            D = L,
            i = s;
        if (K) throw D = 0, i = 0, A(o);
        console.log(D, i);
        return d(D, i);
    } finally {
        global.instance.__wbindgen_add_to_stack_pointer(16), 
        global.instance.__wbindgen_free(D, i);
    }
}

module.exports = { loadStructure, functions };